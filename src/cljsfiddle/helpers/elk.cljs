(ns cljsfiddle.helpers.elk)

(def Elk (js/require "elkjs"))
(def react (js/require "react"))
(def react-dom (js/require "react-dom"))

(defn elk-svg [props]
  #_(let [[layout set-layout] (react/useState nil)
        ref (react/createRef)]

    (react/useEffect
     (fn []
       (-> (.layout (Elk.) (aget props "patch"))
           (.then #(set-layout (js->clj % :keywordize-keys true))))
       (constantly nil))
     #js [])

    (react/createElement
     "div" (clj->js {:style {:userSelect "none"
                             :overflow   "hidden"
                             :outline    "none"}})
     (react/createElement
      "svg" (clj->js {:height (max (get layout :height 0) 155)
                      :width  (:width layout)
                      :ref    ref})

      (apply react/Fragment
             (for [edge (:edges layout)]
               (apply react/Fragment
                      (for [section (:sections edge)]
                        (react/createElement
                         "line" (clj->js {:key   (str (:id section))
                                          :x1    (-> section :startPoint :x)
                                          :y1    (-> section :startPoint :y)
                                          :x2    (-> section :endPoint :x)
                                          :y2    (-> section :endPoint :y)
                                          :style {:stroke "#aaa"}}))))))

      (apply react/Fragment
             (for [child (:children layout)]
               (apply react/Fragment
                      (react/createElement
                       "rect" (clj->js {:key    (str (:id child))
                                        :width  (:width child)
                                        :height (:height child)
                                        :style  {:fill "#5a5a5a"}
                                        :x      (:x child)
                                        :y      (:y child)}))
                      (for [label (:labels child)]
                        (react/createElement
                         "text" (clj->js {:x     (+ (:x child) 4)
                                          :y     (+ (:y child) 11)
                                          :style {:fill       "#ccc"
                                                  :fontSize   "12px"
                                                  :fontFamily "Hack, monospace"}})
                         (:text label))))))))))

(defn elk-render! [patch]
  (react-dom/render
   (react/createElement elk-svg (clj->js {:patch patch}))
   (js/document.getElementById "app")))