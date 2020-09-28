(ns cljspad.env
  (:refer-clojure :exclude [eval])
  (:require [cljs.js :as cljs.js]
            [shadow.cljs.bootstrap.browser :as boot]
            [cljs.tools.reader :as reader]
            [cljs.tools.reader.reader-types :refer [string-push-back-reader]]))

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

(defn read* [reader]
  (try (reader/read {:eof nil} reader)
       (catch :default e
         (prn e)
         nil)))

;; TODO: smarter reading. Tracking of line numbers where exceptions occur would be ideal...
;; having errors reflected inside of monaco would be even cooler
(defn eval-form* [compiler-state reader]
  (if-let [form (read* reader)]
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
    (-> (eval-str-promise compiler-state (str form))
        (.then (fn [result]
                 (if-let [err (error-message result)]
                   (do (prn err)
                       (swap! compiler-state assoc ::evaluating? false))
                   (eval-form* compiler-state reader))))
        (.catch (fn [err]
                  (prn err)
                  (swap! compiler-state assoc ::evaluating? false))))

    (swap! compiler-state assoc ::evaluating? false)))

(defn eval-form [compiler-state source-str]
  (let [reader (string-push-back-reader source-str)]
    (swap! compiler-state assoc ::evaluating? true)
    (eval-form* compiler-state reader)))
