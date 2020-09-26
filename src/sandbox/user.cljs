(ns sandbox.user)

(defn contains-stylesheet? [href]
  (let [node-list (js/document.querySelectorAll "link")
        links     (into #{} (map #(aget % "href")) (array-seq node-list))]
    (contains? links href)))

(defn inject-stylesheet
  "Idempotently inject stylesheet into <head> of DOM"
  [href]
  (if-not (contains-stylesheet? href)
    (let [head (aget js/document "head")
          elem (doto (js/document.createElement "link")
                 (aset "type" "text/css")
                 (aset "rel" "stylesheet")
                 (aset "href" href))]
      (.appendChild head elem)
      true)

    true))