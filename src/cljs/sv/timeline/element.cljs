(ns sv.timeline.element
  (:require [reagent.core :as r]
            ["react-rnd" :as rnd]
            [sv.timeline.resizehandler :as resizehandler]
            [sv.timeline.core :as timeline]))

(def Rnd
  (r/adapt-react-class rnd/Rnd))

(def resize-map
  {:top false
   :right true
   :bottom false
   :left true
   :topRight false
   :bottomRight false
   :bottomLeft false
   :topLeft false})

(defn get-element-start
  [start]
  (let [timeline (js/document.getElementById "timeline")
        timeline-width (if timeline
                         (.-clientWidth timeline)
                         100)
        start-s (or start 0)
        percentage (/ start-s
                     (:duration @timeline/state))
        start-px (* percentage
                   timeline-width)]
    start-px))

(defn get-element-duration
  [timeline-duration object-duration]
  (let [timeline (js/document.getElementById "timeline")
        timeline-width (if timeline
                         (.-clientWidth timeline)
                         100)
        duration-s (or object-duration
                     timeline-duration)
        percentage (/ duration-s
                     timeline-duration)
        duration-px (* percentage
                      timeline-width)]
    duration-px))

(defn component
  [layer]
  (let [state (r/atom {:x 0
                       :width 0})
        ;; Event Functions
        onResizeStop (:onResizeStop layer)
        onResize (:onResize layer)
        onDrag (:onDrag layer)
        onDragStop (:onDragStop layer)]
    (r/create-class
      {:component-did-mount
       (fn [this]
        (reset! state
           {:width (get-element-duration (:duration @timeline/state) (:duration layer))
            :x (get-element-start  (:start layer))}))
       :reagent-render
       (fn []
         [Rnd
          {:enableResizing resize-map
           ;:dragAxis "x"
           :scale 1
           :resizeHandleComponent (:resizeHandleComponent layer)
           :bounds "parent"
           :position {:x (:x @state)
                      :y 0}
           :size {:width (:width @state)
                  :height "100px"}
           :onResize (fn [e dir ref delta position]
                       (onResize e dir ref delta position))
           :onResizeStop (fn [e, d, ref, delta, p]
                           (onResizeStop e, d, ref, delta, p))
           :onDrag (fn [e data]
                     (onDrag e data))
           :onDragStop (fn [e data]
                         (onDragStop e data))}
          (:child layer)])})))