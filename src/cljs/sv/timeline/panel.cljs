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
  [params timeline-width]
  (fn [params timeline-width]
    (let [state-value (:timeline/state params)
          current (:time/current state-value)
          timeline-width (- timeline-width
                           16)
          percentage (/ current
                       (:duration params))
          t (* percentage
               timeline-width)]
      [:div {:style {:position "absolute"
                     :background-color (:timeline/primary-color params "black")
                     :top -15
                     :bottom 0
                     :pointer-events "none"
                     :left (- t
                             (/ slider-width
                               2))
                     :width (str slider-width "px")
                     :z-index 10}}])))

(defn timeline
  [timeline-parent params timeline-width]
  (let [scroll-state (r/atom {:x 0
                              :cursor-down? nil
                              :left 0})]
    (fn [timeline-parent params timeline-width]
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
      [:div {:style {:width "100%"
                     :background-color "red"}}
       [timeline-pointer params timeline-width]
       [layer/component params timeline-width]]])))

(defn inner-timeline
  [params]
  (fn [params]
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
       {:style {:width (str timeline-width "px")
                :background-color "orange"}}
       timeline-width
       [time-bar/component params]
       [timeline timeline-parent params timeline-width]])))

(defn component
  [params]
  [:div
   {:id "timeline-parent"
    :style {:overflow-x "auto"
            :user-select "none"
            :background-color "yellow"}}
   [inner-timeline params]])