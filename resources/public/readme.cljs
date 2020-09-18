(require '[cljsfiddle.helpers.markdown :refer [markdown-render!]])

(def gist "https://raw.githubusercontent.com/metosin/reitit/master/README.md")

(-> (js/fetch gist)
    (.then #(.text %))
    (.then markdown-render!))