(ns sv.timeline.ui.number-line
  (:require [sv.timeline.core :as timeline]
            [sv.timeline.utils :as utils]))

(defn component
  [params]
  (let [duration (or (:duration params)
                   0)
        scale (or (:timeline/scale params)
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
              [:p
               {:style {:margin-top "-5px"
                        :margin-bottom "0px"}}
               value "s"]

              [:i
               {:style {:margin-top "-10px"}
                :class "fas fa-caret-down"}]]))
         (reverse d)))]))
