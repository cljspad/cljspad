(ns sandbox.user)

(defonce ^:private injected-stylesheets
  (atom #{}))

(defn insert-style [css-str]
  (let [head (aget js/document "head")
        elem (doto (js/document.createElement "style")
               (aset "innerHTML" css-str))]
    (.appendChild head elem)))

(defn inject-stylesheet
  "Idempotently inject a stylesheet into <head> of DOM"
  [href]
  (when-not (contains? @injected-stylesheets href)
    (swap! injected-stylesheets conj href)
    (-> (js/fetch href)
        (.then #(.text %))
        (.then insert-style)
        (.catch #(prn %)))))

(defn write-output
  "Outputs the string of x to the cljspad sandbox DOM element"
  [x]
  (aset (js/__cljspad_sandbox) "innerHTML" (str x)))