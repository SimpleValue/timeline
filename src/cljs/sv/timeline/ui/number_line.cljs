(ns sv.timeline.ui.number-line
  (:require [sv.timeline.core :as timeline]))

(defn component
  []
  (let [timeline (js/document.getElementById "timeline")
        steps (if timeline
                (.-clientWidth timeline)
                15)]

    [:div {:style {:display "flex"
                   :justify-content "space-between"}}

     #_(.-clientWidth timeline)

     ;(/ steps 15)

     (doall
       (map
         (fn [e]
           [:div {:key (str "e-" e)
                  :style {:margin "10px"}} e])
         (range
           (+ (:duration @timeline/state)
             1))))]))
