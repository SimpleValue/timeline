(ns sv.timeline.ui.bar
  (:require [sv.timeline.utils :as utils]
            [sv.timeline.state :as state]))

(defn component
  []
  [:div
   [:input
    {:class "slider"
     :style {:width "100%"
             :margin "0px 0px 15px 0px"
             :padding "0px"}
     :type "range"
     :min "0"
     :step 1
     :max (utils/s->ms (:duration @state/state))
     :value (utils/s->ms (:time/current @state/state))
     :onChange (fn [e]
                 (let [value e.target.value]

                   #_(swap! timeline/state (fn [state-value]
                                          #_((controls/prepare-play-fn)
                                            (assoc state-value :time/now value))))))}]])