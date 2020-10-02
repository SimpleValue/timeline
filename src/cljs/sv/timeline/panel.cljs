(ns sv.timeline.panel
  (:require [sv.timeline.core :as timeline]
            [sv.timeline.layer :as layer]
            [sv.timeline.core :as timeline]
            [reagent.core :as r]
            [sv.timeline.ui.bar :as time-bar]
            [sv.timeline.ui.number-line :as timeline-seconds]))

(def slider-width
  4)

(defn timeline-pointer
  [params]
  (let [state-value (:timeline/state params)
        current (:time/current state-value)
        timeline (js/document.getElementById "timeline")
        percentage (/ current
                     (:duration params))
        t (* percentage
            (if timeline
              (.-clientWidth timeline)
              100))]

    [:div {:style {:position "absolute"
                   :background-color (:timeline/primary-color params "black")
                   :top -20
                   :bottom 0
                   :pointer-events "none"
                   :left (+ 2 (- t
                                (/ slider-width
                                  2)))
                   :width (str slider-width "px")
                   :z-index 10}}]))

(defn timeline
  [timeline-parent params]
  (let [scroll-state (r/atom {:x 0
                              :cursor-down? nil
                              :left 0})]
    (fn [timeline-parent params]
      [:div {:id "timeline"
             :style {:margin-left "8px"
                     :margin-right "8px"
                     :position "relative"
                     :cursor (if (:cursor-down? @scroll-state)
                               "grabbing"
                               "grab")}
             :onMouseDown (fn [e]
                            (.preventDefault e)
                            (swap! scroll-state assoc
                              :cursor-down? true
                              :x (.-clientX e)
                              :left (.-scrollLeft timeline-parent)))
             :onMouseUp (fn [e]
                          (.preventDefault e)
                          (swap! scroll-state assoc :cursor-down? false))
             :onMouseLeave (fn [e]
                             (.preventDefault e)
                             (swap! scroll-state assoc :cursor-down? false))
             :onMouseMove (fn [e]
                            (when (:cursor-down? @scroll-state)
                              (let [x (.-clientX e)
                                    dx (- x
                                         (:x @scroll-state))
                                    new-x (- (:left @scroll-state)
                                            dx)]
                                (set!
                                  (.-scrollLeft timeline-parent) new-x))))}

       [timeline-seconds/component params]

      [:div {:style {:width "100%"}}
       [timeline-pointer params]
        (doall
          (map
            (fn [layer]
              ^{:key (:id layer)}
              [layer/component layer params])
            (reverse
              (:timeline/layers params))))]])))

(defn inner-timeline
  [params]
  (let [timeline-scale (:timeline/scale params)
        timeline-parent (js/document.getElementById "timeline-parent")
        default-width (if timeline-parent
                        (- (.-clientWidth timeline-parent)
                          16)
                        100)
        timeline-width (* (/ 1
                            timeline-scale)
                         default-width)]
    [:div
     {:style {:width (str timeline-width "px")}}

     [time-bar/component params]

     [timeline timeline-parent params]]))

(defn component
  [params]
  [:div
   {:id "timeline-parent"
    :style {:overflow-x "auto"
            :user-select "none"}}
   [inner-timeline params]])