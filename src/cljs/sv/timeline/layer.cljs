(ns sv.timeline.layer
  (:require [sv.timeline.element :as element]))

(defn single-layer
  [layer params]
  [:div
   {:key (:id layer)
    :style {:background-color "#eeeeee"
            :width "100%"
            :margin-top "5px"
            :height (:height layer)}}
   [element/component layer params]])

(defn component
  [params]
  [:div
   (map
     (fn [layer]
       (single-layer layer params))
     (reverse
       (:timeline/layers params)))])
