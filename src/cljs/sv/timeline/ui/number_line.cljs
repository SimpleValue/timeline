(ns sv.timeline.ui.number-line
  (:require [sv.timeline.core :as timeline]))

(defn component
  []
  (let [duration (or (:duration @timeline/state)
                   0)
        scale (or (:scale @timeline/state)
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
           [:div {:key (str "e-" e)
                  :style {:width "10px"}}
            e "s"])
         (reverse d)))]))
