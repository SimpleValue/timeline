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

(defn component
  [layer params]
  (r/create-class
    {:component-did-mount
     (fn [this])
     :reagent-render
     (fn [layer params]
       (let [;; Event Functions
             onResizeStop (:onResizeStop layer)
             onResize (:onResize layer)
             onDrag (:onDrag layer)
             onDragStop (:onDragStop layer)

             get-grid (:grid layer)
             duration-fn (:get-element-duration layer)
             start-fn (:get-element-start layer)]
         [Rnd
          {:enableResizing resize-map
           :scale 1
           :resizeHandleComponent (:resizeHandleComponent layer)
           :bounds "parent"
           :resizeGrid (get-grid)
           :dragGrid (get-grid)
           :position {:x (start-fn params)
                      :y 0}
           :size {:width (duration-fn params)
                  :height (:height layer)}
           :onResize (fn [e dir ref delta position]
                       (onResize e dir ref delta position))
           :onResizeStop (fn [e, d, ref, delta, p]
                           (onResizeStop e, d, ref, delta, p))
           :onDrag (fn [e data]
                     (onDrag e data))
           :onDragStop (fn [e data]
                         (onDragStop e data))
           :onMouseDown (fn [e]
                          (.preventDefault e)
                          (.stopPropagation e))}
          (:child layer)
          ]))})

  )