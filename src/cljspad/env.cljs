(ns cljspad.env
  (:refer-clojure :exclude [eval])
  (:require [cljs.js :as cljs.js]
            [shadow.cljs.bootstrap.browser :as boot]
            [cljs.tools.reader :as reader]
            [clojure.string :as str]
            [cljs.tools.reader.reader-types :refer [string-push-back-reader]]
            [cljspad.ansi :as ansi]))

(defn error-message [result]
  (-> result :error ex-cause ex-message))

(defn state []
  (cljs.js/empty-state))

(defn init
  [compiler-state sandbox-version cb]
  (let [path (str "/sandbox/" sandbox-version "/bootstrap")]
    (boot/init compiler-state {:path path :load-on-init '#{sandbox.user}} cb)))

(defn eval-opts
  [compiler-state]
  {:eval cljs.js/js-eval
   :load (partial boot/load compiler-state)
   :ns   (symbol "sandbox.user")})

(defn eval-str
  [compiler-state form cb]
  (cljs.js/eval-str compiler-state form nil (eval-opts compiler-state) cb))

(def ignored-error-messages
  ;; This is a bit of a hack... (require '[...]) throws this exception
  ;; in compiled mode, despite the require succeeding.
  ;; Possibly a bug in shadow-cljs?
  #{"Namespace \"sandbox.user\" already declared."})

(defn eval-result-xf [result]
  (let [err-msg (error-message result)]
    (when-not (ignored-error-messages err-msg)
      result)))

(defn ^js eval-str-promise
  [compiler-state form]
  (-> (partial eval-str compiler-state form)
      (js/Promise.)
      (.then eval-result-xf)))

;; FIXME: this is very crude...
(defn calculate-pos [^js reader]
  (let [rdr   (.-rdr reader)
        s     (aget rdr "s")
        s-pos (aget rdr "s_pos")
        line  (-> (subs s 0 s-pos)
                  (str/split #"\n")
                  (count))]
    [line 0]))

(defn read* [reader]
  (try (if-let [form (reader/read {:eof nil} reader)]
         {:form form
          :pos  (calculate-pos reader)}
         {:pos (calculate-pos reader)
          :eof true})
       (catch :default e
         (let [pos (calculate-pos reader)]
           {:error {:message (ex-message e)
                    :type    :reader-error}
            :pos   pos}))))

;; TODO: smarter reading. Tracking of line numbers where exceptions occur would be ideal...
;; having errors reflected inside of monaco would be even cooler
(defn eval-form* [compiler-state reader cb]
  (let [reader-result (read* reader)]
    (cond
      (:error reader-result)
      (cb reader-result)


      ;; TODO: another (possible) shadow or cljs.js bug
      ;; cljs.js/eval returns exception: 'no *eval-fn* defined' on initial evaluation
      ;; cljs.js/eval-str does not exhibit this behaviour.
      ;;
      ;; So unfortunately we have to read string then serialise the form back to a string...
      ;;
      ;; So why even read the editors contents at all?
      ;; It appears that evaluating:
      ;; (defn foo [] 1)
      ;; (inc (foo))
      ;;
      ;; Will not evaluate, as it complains `foo` has not been defined when incrementing.
      ;; This may be the intended behaviour of `:context :expr` in cljs.js, I am not sure.
      ;;
      ;; Breaking down the evaliation into a sequence of forms has the advantage of being able
      ;; to eventually have better error handling/feedback (see comment at top of defn)
      (:form reader-result)
      (-> (eval-str-promise compiler-state (str (:form reader-result)))
          (.then (fn [result]
                   (if-let [err (error-message result)]
                     (cb (assoc reader-result
                           :result result
                           :error {:type    :runtime-error
                                   :message err}))
                     (eval-form* compiler-state reader cb))))
          (.catch (fn [err]
                    (cb (assoc reader-result :error {:type    :uncaught-exception
                                                     :message (ex-message err)})))))

      :else
      (cb reader-result))))

;; TODO: even friendlier messages
(defn print-friendly-error-message
  [{:keys [form pos error] :as result}]
  (let [err-type (case (:type error)
                   :runtime-error "Runtime error"
                   :uncaught-exception "Uncaught exception"
                   :reader-error "Reader error"
                   nil "Unknown error")
        err-msg  (:message error)]
    (println (str (str (ansi/style-str [:bold] err-type) " at "
                       (ansi/style-str [:bold] (pr-str pos)) ": " err-msg)
                  (when (= (:type error) :uncaught-exception)
                    (str "\n\rThis suggests a bug in cljspad. Consider raising an issue: https://github.com/cljspad/cljspad/issues/new"))
                  (when form
                    (str "\n\rEvaluated form ----> " (ansi/style-str [:underline] form)))
                  (when (= :runtime-error (:type error))
                    (str "\n\rA detailed stacktrace can be found in your browsers console."))))
    (when-let [err (-> result :result :error)]
      (js/console.log err))))

(defn eval-form
  [compiler-state source-str]
  (let [reader (string-push-back-reader source-str)]
    (swap! compiler-state assoc ::evaluating? true)
    (let [cb (fn [result]
               (swap! compiler-state assoc ::evaluating? false)
               (when (:error result)
                 (print-friendly-error-message result)
                 ;; TODO: mutate monaco to render some squiggly lines at loc where error occurred
                 ))]
      (eval-form* compiler-state reader cb))))
