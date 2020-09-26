(ns cljsfiddle.embed
  (:require [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui]]
            [cljsfiddle.editor :as editor]
            [cljsfiddle.repl :as repl]))

(defui tabs [{:keys [db]} _]
  (let [[selected-tab set-selected-tab] (rehook/use-atom-path db [:selected-tab])]
    [:div.toolbar
     [:div.button
      {:className (when (= selected-tab :editor) "active")
       :onClick   #(set-selected-tab :editor)}
      "Editor"]
     [:div.button
      {:className (when (= selected-tab :repl) "active")
       :onClick   #(set-selected-tab :repl)}
      "REPL"]
     [:div.button
      {:className (when (= selected-tab :sandbox) "active")
       :onClick   #(set-selected-tab :sandbox)} "Output"]
     [:a.button {:style {:marginLeft "auto"}
                 :href  "https://github.com/cljsfiddle/cljsfiddle"}
      [:span.cljsfiddle-github-icon]]]))

(defui editor [{:keys [db]} _]
  (let [[selected-tab _] (rehook/use-atom-path db [:selected-tab])]
    [:div {:style (when-not (= selected-tab :editor)
                    {:display "none"})}
     [editor/editor {:height "calc(100vH - 100px)"}]]))

(defui repl [{:keys [db]} _]
  (let [[selected-tab _] (rehook/use-atom-path db [:selected-tab])]
    (when (= selected-tab :repl)
      [repl/repl {:height "calc(100vH - 50px)"}])))