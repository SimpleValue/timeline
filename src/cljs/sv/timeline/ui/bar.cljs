(ns sv.timeline.ui.bar
  (:require [sv.timeline.utils :as utils]
            [sv.timeline.core :as timeline]
            [sv.timeline.controls :as controls]))

(defn component
  [params]
  (let [state (:timeline/state params)]
    [:div
     (:time/current* state)

     [:input
      {:class "slider"
       :style {:width "100%"
               :background-color "#eee"
               :cursor "pointer"}
       :type "range"
       :min 0
       ;; 100 ms steps
       :step 0.01
       :max (:duration params)
       :value (:time/current state)
       :onChange (fn [e]
                   (let [seek-fn (:timeline/on-seek params)]
                     (seek-fn e)))}]]))