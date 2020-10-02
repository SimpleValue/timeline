(ns sv.timeline.ui.bar)

(defn component
  [params]
  (let [state (:timeline/state params)]
    [:div
     [:input
      {:class "timeline"
       :style {:margin-top "0px"
               :margin-bottom "0px"
               :width "100%"
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