(ns sandbox.reagent
  (:require [reagent.dom :as dom]
            ["highlight.js" :as hljs]))

(def highlight
  ^{:display-name "highlight.js"
    :component-did-mount #(hljs/highlightBlock (dom/dom-node %))}
  (fn [{:keys [language]
        :or {language "clojure"}}
       code-snippet]
    [:pre [:code {:class-name (str "language-" language)}]
     code-snippet]))

(defn render [comp]
  (dom/render comp (js/__cljspad_sandbox)))