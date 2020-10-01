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
  []
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
                   :z-index 10}}]))

(defn l [])

(defn timeline
  [timeline-parent]
  (let [scroll-state (r/atom {:x 0
                              :cursor-down? nil
                              :left 0})]
    (fn [timeline-parent]
      [:div {:id "timeline"
             :style {:margin-left "16px"
                     :margin-right "16px"
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

       [timeline-seconds/component]

       [:div {:style {:width "100%"}}
        [timeline-pointer]
        (doall
          (map
            (fn [layer]
              ^{:key (:id layer)}
              [layer/component layer timeline/state])
            (reverse
              (:timeline/layers @timeline/state))))]])))

(defn inner-timeline
  []
  (let [timeline-scale (:scale @timeline/state)
        timeline-parent (js/document.getElementById "timeline-parent")
        default-width (if timeline-parent
                        (- (.-clientWidth timeline-parent)
                          32)
                        100)
        timeline-width (* (/ 1
                            timeline-scale)
                         default-width)]
    [:div
     {:style {:width (str timeline-width "px")}}
     [time-bar/component]
     [timeline timeline-parent]]))

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
         :style {:overflow-x "auto"
                 :user-select "none"}}
        [inner-timeline]])}))