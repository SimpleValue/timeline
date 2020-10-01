(ns sv.timeline.ui.bar
  (:require [sv.timeline.utils :as utils]
            [sv.timeline.core :as timeline]
            [sv.timeline.controls :as controls]))

(defn component
  []
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
     :max (utils/s->ms (:duration @timeline/state))
     :value (utils/s->ms (:time/current* @timeline/state))
     :onChange (fn [e]
                 (let [value e.target.value
                       seek-fn (:seek-fn @timeline/state)]
                   (seek-fn value)))}]])