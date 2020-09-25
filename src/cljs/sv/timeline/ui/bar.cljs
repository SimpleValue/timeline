(ns sv.timeline.ui.bar
  (:require [sv.timeline.utils :as utils]
            [sv.timeline.core :as timeline]
            [sv.timeline.controls :as controls]))

(defn component
  []
  [:div
   [:input
    {:class "slider"
     :style {:width "100%"}
     :type "range"
     :min 0
     ;; 100 ms steps
     :step 100
     :max (utils/s->ms (:duration @timeline/state))
     :value (utils/s->ms (:time/current* @timeline/state))
     :onChange (fn [e]
                 (let [value e.target.value]
                   (swap! timeline/state assoc :time/current* (/ value
                                                                1000))
                   #_(swap! timeline/state (fn [state-value]
                                             ((controls/prepare-play-fn)
                                              (assoc state-value :time/now value))))))}]])