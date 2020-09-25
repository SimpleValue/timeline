(ns sv.editor.timeline
  (:require [reagent.core :as r]
            [sv.editor.core :as editor-core]
            [sv.timeline.resizehandler :as resizehandler]
            [sv.timeline.core :as timeline]))

(defn set-element-start
  [editor-element-state timeline-element-state duration x]
  (let [timeline (js/document.getElementById "timeline")
        timeline-width (.-clientWidth timeline)
        percentage (/ x
                     timeline-width)
        t-start (* percentage
                  duration)]
    (js/console.log "Change Start of " (:id @editor-element-state) " to " t-start)
    (swap! editor-element-state assoc :start t-start)))

(defn set-element-duration
  [element-state timeline-duration duration-px]
  (let [timeline (js/document.getElementById "timeline")
        timeline-width (.-clientWidth timeline)
        percentage (/ duration-px
                     timeline-width)
        t-duration (* percentage
                     timeline-duration)]
    (js/console.log "Change Duration of " (:id @element-state) " to " t-duration)
    (swap! element-state assoc :duration t-duration)))

(defn get-element-start
  [element-state duration]
  (let [timeline (js/document.getElementById "timeline")
        timeline-width (if timeline
                         (.-clientWidth timeline)
                         100)
        start-s (or (:start @element-state)
                    0)
        percentage (/ start-s
                     duration)
        start-px (* percentage
                   timeline-width)]
    start-px))

(defn get-element-duration
  [editor-element-state duration]
  (let [timeline (js/document.getElementById "timeline")
        timeline-width (if timeline
                         (.-clientWidth timeline)
                         100)
        duration-s (or (:duration @editor-element-state)
                     duration)
        percentage (/ duration-s
                     duration)

        scale (:scale @timeline/state)

        duration-px (* percentage
                       timeline-width)]
    duration-px))

(defn layer-state
  [layer-id object-id timeline-duration]
  (let [editor-element-state (r/cursor editor-core/editor-state [object-id])
        timeline-element-state (r/atom {:x (get-element-start editor-element-state timeline-duration)
                                        :y 0
                                        :width (get-element-duration editor-element-state timeline-duration)
                                        :height 100})
        attrs (:attrs @editor-element-state)]
    {:id object-id
     :object-id object-id
     :start (:start @editor-element-state)
     :duration (:duration @editor-element-state)
     :onResize (fn [e dir ref delta p])
     :onDrag (fn [e data])
     :get-element-duration (fn []
                             (get-element-duration editor-element-state timeline-duration))
     :onResizeStop (fn [e d ref delta p]
                     (swap! timeline-element-state assoc
                       :width ref.offsetWidth
                       :x p.x)
                     (set-element-start editor-element-state timeline-element-state timeline-duration p.x)
                     (set-element-duration editor-element-state timeline-duration ref.offsetWidth))

     :onDragStop (fn [e data]
                   (let [x data.x]
                     (swap! timeline-element-state assoc :x x)
                     (set-element-start editor-element-state timeline-element-state timeline-duration x)))
     :timeline-element-state timeline-element-state
     :child [:div
             {:key (str "child-" object-id)
              :style {:width "100%"
                      :height "100%"
                      :background-color "gray"
                      :background-repeat "repeat-x"
                      :background-size "contain"
                      :background-image (str "url(\"" (:src attrs) "\")")}}]
     :resizeHandleComponent resizehandler/HandleComponents}))

(defn initial-state
  [elements]
  (js/console.log elements)
  (let [timeline-duration 15]
    {:time/now 0
     :time/current 0
     :scale 1
     :duration timeline-duration
     :layers (into []
               (doall
                 (map
                   (fn [e]
                     (layer-state
                       "layer-1"
                       e
                       timeline-duration))
                   elements)))}))
