(ns sv.timeline.ui.bar
  (:require [sv.timeline.utils :as utils]
            [sv.timeline.core :as timeline]
            [sv.timeline.controls :as controls]))

(defn component
  [timeline-state]
  [:div
   [:input
    {:class "slider"
     :style {:width "100%"
             :background-color "#eee"
             :cursor "pointer"}
     :type "range"
     :min 0
     ;; 100 ms steps
     :step 100
     :max (utils/s->ms (:duration @timeline-state))
     :value (utils/s->ms (:time/current* @timeline-state))
     :onChange (fn [e]
                 (let [seek-fn (:on-seek @timeline-state)]
                   (seek-fn timeline-state e)))}]])