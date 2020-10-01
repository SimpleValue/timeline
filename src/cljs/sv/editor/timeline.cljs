(ns sv.editor.timeline
  (:require [reagent.core :as r]
            [sv.editor.core :as editor-core]
            [sv.timeline.resizehandler :as resizehandler]
            [sv.timeline.utils :as utils]
            [sv.timeline.core :as timeline]))

(defn set-element-start
  [editor-element-state duration x]
  (let [timeline (js/document.getElementById "timeline")
        timeline-width (.-clientWidth timeline)
        percentage (/ x
                     timeline-width)
        t-start (* percentage
                  duration)
        t-start (if (< t-start 0)
                  0
                  t-start)
        t-start (utils/round-seconds t-start)]
    (swap! editor-element-state assoc :start t-start)))

(defn set-element-duration
  [element-state timeline-duration duration-px]
  (let [timeline (js/document.getElementById "timeline")
        timeline-width (.-clientWidth timeline)
        percentage (/ duration-px
                     timeline-width)
        t-duration (* percentage
                     timeline-duration)
        t-duration (/ (js/Math.round (* t-duration 10))
                  10)]
    (swap! element-state assoc :duration t-duration)))

(defn get-element-start
  [element-state timeline-state]
  (let [timeline-parent (js/document.getElementById "timeline")
        timeline-width (if timeline-parent
                        (.-clientWidth timeline-parent)
                        100)
        start-s (or (:start @element-state)
                    0)
        percentage (/ start-s
                     (:duration @timeline-state))
        start-px (* percentage
                   timeline-width)]
    start-px))

(defn get-element-duration
  [editor-element-state timeline-state]
  (let [timeline-parent (js/document.getElementById "timeline")
        default-width (if timeline-parent
                        (.-clientWidth timeline-parent)
                        100)
        timeline-width default-width
        duration-s (or (:duration @editor-element-state)
                     ;; Backup if no duration is set.
                       (:duration @timeline-state))
        percentage (/ duration-s
                     (:duration @timeline-state))
        duration-px (* percentage
                      timeline-width)]
    duration-px))

(defn get-grid
  [timeline-duration]
  (let [timeline (js/document.getElementById "timeline")
        timeline-width (if timeline
                         (.-clientWidth timeline)
                         100)
        ;; all 100 ms
        steps (/ (/ timeline-width
                   timeline-duration)
                10)]
    [steps 1]))

(defn layer-state
  [object-id timeline-duration]
  (let [editor-element-state (r/cursor editor-core/editor-state [object-id])
        attrs (:attrs @editor-element-state)]
    {:id object-id
     :object-id object-id
     :start (:start @editor-element-state)
     :duration (:duration @editor-element-state)
     :onResize (fn [e dir ref delta p]
                 (.preventDefault e)
                 (.stopPropagation e)
                 (set-element-start editor-element-state timeline-duration p.x)
                 (set-element-duration editor-element-state timeline-duration ref.offsetWidth))
     :onDrag (fn [e data]
               (.preventDefault e)
               (.stopPropagation e)
               (set-element-start editor-element-state timeline-duration data.x))
     :get-element-duration (fn [timeline-state]
                             (get-element-duration editor-element-state timeline-state))
     :get-element-start (fn [timeline-state]
                          (get-element-start editor-element-state timeline-state))
     :onResizeStop (fn [e d ref delta p]
                     (.preventDefault e))
     :onDragStop (fn [e data]
                   (.preventDefault e))
     :child [:div
             {:key (str "child-" object-id)
              :style {:width "100%"
                      :height "100%"
                      :background-color "gray"
                      :background-repeat "repeat"
                      :background-size "contain"
                      :background-image (str "url(\"" (:src attrs) "\")")}}]
     :resizeHandleComponent resizehandler/HandleComponents
     :grid (fn []
             (get-grid timeline-duration))
     }))

(defn initial-state
  []
  (let [root-id (:root @editor-core/editor-state)
        root-element (get @editor-core/editor-state root-id)
        elements (:content root-element)
        timeline-duration 30]
    {:time/now 0
     :time/current 0
     :duration timeline-duration
     :on-seek (fn [e]
                (swap! timeline/state assoc :time/current* (/ e
                                                             1000)))
     :timeline/scale 1
     :timeline/layers (into []
                        (doall
                          (map
                            (fn [e]
                              (layer-state
                                e
                                timeline-duration))
                            elements)))}))
