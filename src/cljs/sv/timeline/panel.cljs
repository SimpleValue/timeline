(ns sv.timeline.panel
  (:require [sv.timeline.core :as timeline]
            [sv.timeline.layer :as layer]
            [sv.timeline.core :as timeline]
            [reagent.core :as r]
            [sv.timeline.ui.bar :as time-bar]
            [sv.timeline.ui.number-line :as timeline-seconds]))

(def slider-width
  4)

#_(defn layers
  []
  [:div
   {
    :style {:position "relative"
            :margin "0px 16px"
            :overflow-x "auto"}}

   (let [timeline-scale (:scale @timeline/state)
         default-width 100
         timeline-width (* timeline-scale
                           default-width)]
     [:div
      {:id "timeline"
       :style {:width (str timeline-width "px")}}

      (let [now (:time/current @timeline/state)
            percentage (/ now
                         (:duration @timeline/state))
            timeline (js/document.getElementById "timeline")
            t (* percentage
                (if timeline
                  (.-clientWidth timeline)
                  100))]

        [:div {:style {:position "absolute"
                       :background-color "black"
                       :top -20
                       :bottom 0
                       :pointer-events "none"
                       :left (- t (/ slider-width
                                    2))
                       :width (str slider-width "px")
                       :z-index 10}}])
      #_[time-slider]
      #_[timeline]
      #_(map
        (fn [layer]
          ^{:key (:id layer)}
          [layer/component layer])
        (reverse
          (:layers @timeline/state)))])])

(defn component
  [timeline-state]
  (r/create-class
    {:component-did-mount
     (fn [this]
       (reset! timeline/state timeline-state))
     :reagent-render
     (fn []
       [:div
        {:id "timeline-parent"
         :style {:overflow-x "auto"}}

        (let [timeline-scale (:scale @timeline/state)
              timeline-parent (js/document.getElementById "timeline-parent")
              default-width (if timeline-parent
                              (- (.-clientWidth timeline-parent)
                                32)
                              100)
              timeline-width (* (/ 1
                                   timeline-scale)
                               default-width)]
          [:div {:style {:width (str timeline-width "px")}}

           [time-bar/component]

           [:div {:id "timeline"
                  :style {:margin-left "16px"
                          :margin-right "16px"
                          :position "relative"}}

            [timeline-seconds/component]

            [:div {:style {:width "100%"}}

             (let [now (:time/current* @timeline/state)
                   timeline (js/document.getElementById "timeline")
                   percentage (/ now
                                (:duration @timeline/state))
                   t (* percentage
                       (if timeline
                         (.-clientWidth timeline)
                         100))]

               [:div {:style {:position "absolute"
                              :background-color "black"
                              :top -20
                              :bottom 0
                              :pointer-events "none"
                              :left (+ 2 (- t
                                            (/ slider-width
                                              2)))
                              :width (str slider-width "px")
                              :z-index 10}}])

             (doall
               (map
                 (fn [layer]
                   ^{:key (:id layer)}
                   [layer/component layer timeline/state])
                 (reverse
                   (:layers @timeline/state))))]]])])}))