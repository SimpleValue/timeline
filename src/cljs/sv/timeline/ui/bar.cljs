(ns sv.timeline.ui.bar
  (:require [sv.timeline.utils :as utils]
            [sv.timeline.core :as timeline]
            [sv.timeline.controls :as controls]))

(defn component
  [params]
  (let [state (:timeline/state params)]
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
       :max (utils/s->ms (:duration params))
       :value (utils/s->ms (:time/current* state))
       :onChange (fn [e]
                   (let [seek-fn (:timeline/on-seek params)]
                     (seek-fn e)))}]]))