(ns sv.timeline.layer
  (:require [sv.timeline.element :as element]))

(defn component
  [layer params]
  [:div {:style {:background-color "#eeeeee"
                 :width "100%"
                 :height (:height layer)}}
   [element/component layer params]])