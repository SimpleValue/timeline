(ns sv.timeline.layer
  (:require [sv.timeline.element :as element]))

(defn component
  [layer params]
  [:div
   {:style {:background-color "#eeeeee"
            :width "100%"
            :margin-top "5px"
            :height (:height layer)}}
   [element/component layer params]])