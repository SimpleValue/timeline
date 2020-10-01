(ns sv.timeline.ui.controls
  (:require [sv.timeline.core :as timeline]))

(defn zoom-in-timeline
  []
  [:div
   [:input
    {:style {:width "100%"
             :margin "0px 0px 15px 0px"
             :padding "0px"}
     :type "range"
     :min 1
     :step 1
     :max 100
     :value (:timeline/scale @timeline/state)
     :onChange (fn [e]
                 (let [value e.target.value]
                   (js/console.log "SCALE " value)
                   (swap! timeline/state assoc :timeline/scale value)))}]])


