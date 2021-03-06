(ns sv.timeline.layer
  (:require [sv.timeline.element :as element]))

(defn single-layer
  [layer params timeline-width]
  [:div
   {:key (:id layer)
    :style {:background-color "#eeeeee"
            :width "100%"
            :margin-top "5px"
            :height (:height layer)}}
   [element/component layer params timeline-width]])

(defn component
  [params timeline-width]
  [:div
   (map
     (fn [layer]
       [single-layer layer params timeline-width])
     (reverse
       (:timeline/layers params)))])
