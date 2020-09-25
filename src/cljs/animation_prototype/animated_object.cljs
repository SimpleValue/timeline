(ns animation-prototype.animated-object
  (:require [goog.object :as obj]
            [animation-prototype.api :as api]
            [reagent.core :as reagent]))

(defn sample-render!
  [element render-operations]
  (doseq [render-operation render-operations]
    (let [[op attribute value] render-operation]
      (case (first render-operation)
        :set
        (let [style (obj/get element
                             "style")]
          (js/console.log "VALUE " value)
          (obj/set style attribute value))))))

(defn sample-animation
  [timing-function]
  {:duration 1000
   :render (fn [time-fraction]
             (let [progress (timing-function time-fraction)]
               [[:set "opacity" (str (* 0.1 progress))]]))})

(comment

  (def element
    (js/document.getElementById "animated"))

  (def style
    (obj/get element
             "style"))

  (obj/set style "opacity" 0)

  (js/requestAnimationFrame
    (fn animation-loop-callback [real-time]
      (js/console.log "Render Frame" real-time)))

  (api/animation-loop
    {:duration 1000
     :render (fn [time-fraction]
               (let [progress (api/quad time-fraction)]
                 (js/console.log "Render Function " progress)
                 [[:set "opacity" (str progress)]
                  [:set "width" (str (* 200 progress) "px")]
                  [:set "height" (str (* 200 progress) "px")]]))}
    (partial sample-render!
             element))

  (require '[animation-prototype.api :as api])

  api/cubic

  (animate element)

  )

(def render-state (reagent/atom nil))

(defn react-sample-render!
  [render-operations id]
  (swap! render-state assoc-in
    [id] render-operations))

(defn set-props
  [props]
  (let [progress (api/quad (:progress props))]
    (js/console.log "PROGRESS " progress)
    (swap! render-state assoc-in [(:id props)]
      {:width progress})))

(defn set-timestamp
  [t]
  (let [progress (api/quad t)]
    (js/console.log "PROGRESS " progress)
    #_(swap! render-state assoc-in [(:id props)]
      {:width progress}))
  )

(defn component
  [props]
  (reagent/create-class
    {:component-did-mount
     (fn [this]
       #_(swap! render-state assoc-in [(:id props)] props))
     :reagent-render
     (fn []
       [:div {:id (:id props)
              :style {:position "absolute"
                      :left (str (get-in @render-state [(:id props) :left]) "px")
                      :right (str (get-in @render-state [(:id props) :right]) "px")
                      :width (str (get-in @render-state [(:id props) :width]) "px")
                      :height (str (get-in @render-state [(:id props) :height]) "px")
                      :background-color (or
                                          (get-in @render-state [(:id props) :background-color])
                                          "blue")
                      :opacity (get-in @render-state [(:id props) :opacity])
                      :transform (str "rotate(" (get-in @render-state [(:id props) :rotation]) "deg)")}}
        ])}))

(defn animate!
  [{:keys [render duration id] :as params}]
  (api/animation-loop
    {:duration duration
     :render render}
    (fn [r]
      (react-sample-render! r id))))

(comment

  (swap! render-state assoc-in
    ["cubic"]
    {:opacity 1
     :width 100
     :height 100})

  @render-state

  (api/animation-loop
    {:duration 1000
     :render (fn [time-fraction]
               (let [progress (api/quad time-fraction)]
                 {:opacity (str progress)
                  :width (* 200 progress)
                  }))}
    (fn [r]
      (react-sample-render! r)))
  )
