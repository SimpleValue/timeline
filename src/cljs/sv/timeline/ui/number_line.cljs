(ns sv.timeline.ui.number-line
  (:require [sv.timeline.core :as timeline]
            [sv.timeline.utils :as utils]))

(defn component
  []
  (let [duration (or (:duration @timeline-state)
                   0)
        scale (or (:timeline/scale @timeline-state)
                0)
        step-size (* (/ duration
                       10)
                    scale)
        d (range 0 duration step-size)
        d (reverse d)
        d (conj d duration)]

    [:div {:style {:display "flex"
                   :justify-content "space-between"}}
     (doall
       (map
         (fn [e]
           (let [value (utils/round-seconds e)]
             [:div
              {:key (str "e-" e)
               :style {:width "0px"
                       :display "flex"
                       :justify-content "center"
                       :flex-direction "column"
                       :align-items "center"
                       :background-color "red"}}
              [:div value "s"]
              [:i
               {:class "fas fa-caret-down"}]]))
         (reverse d)))]))
