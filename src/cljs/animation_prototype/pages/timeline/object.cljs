(ns animation-prototype.pages.timeline.object
  (:require [reagent.core :as r]
            [animation-prototype.api :as api]
            [animation-prototype.pages.timeline.timeline :as timeline]))

(defonce object-state
  (r/atom {}))

(defn get-animation
  [animations t]
  (some
    (fn [animation]
      (when (<= (:start animation)
              t
              (+ (:start animation)
                (:duration animation)))
        animation))
    animations))

(comment
  (get-animation
    [{:fn api/quad
      :animate-from {:opacity 0}
      :animate-to {:opacity 1}
      :start 0
      :duration 500}
     {:fn api/quad
      :animate-from {:opacity 1}
      :animate-to {:opacity 0}
      :start 1000
      :duration 1500}]
    250
    )
  )

(defn calc-animation-frame
  [progress animation attr]
  (when (contains? (get-in animation [:animate-from]) attr)
    (let [from (get-in animation [:animate-from attr])
          to (get-in animation [:animate-to attr])
          diff (- to from)
          p (+
              (* diff
                progress)
              from)]
      p)))

(defn get-progress
  [animation t]
  (when animation
    (let [fn (:fn animation)
          t1 (- t
               (:start animation))
          time-fraction (/ t1
                          (:duration animation))
          progress (fn time-fraction)]
      progress)))

(def object-in-frame?
  (<= (:start @object-state)
    (:time @timeline/state)
    (:duration @object-state)))

(defn image
  [element-state]
  (let [{:keys [attrs content uuid]} @element-state
        ui-data (:ui/data attrs)
        opacity (:opacity ui-data)
        original-width (:original-width ui-data)
        original-height (:original-height ui-data)
        scale (:scale ui-data)
        image-x (:image-x ui-data)
        image-y (:image-y ui-data)]
    ;; Taken from Canva:
    [:div
     {:id uuid
      #_:style #_(assoc (util/data-to-container-style (:ui/data attrs))
               :overflow "hidden"
               :opacity opacity)}
     [:div
      {:style {:opacity opacity
               :width (str (* original-width scale) "px")
               :height (str (* original-height scale) "px")
               :position "absolute"
               :transform (str "translate(" (* image-x scale) "px, " (* image-y scale) "px)")}}
      [:img
       {:draggable "false"
        :style {:width "100%"
                :height "100%"
                :position "absolute"}
        :src (:src attrs)}]]]))

(defn component
  [element-state]
  (r/create-class
    {:component-did-mount
     (fn [this]
       (reset! object-state element-state))
     :reagent-render
     (fn []
       (when object-in-frame?
         (let [animation (get-animation (:animations @object-state) (:time @timeline/state))
               progress (get-progress animation (:time @timeline/state))
               width (calc-animation-frame progress animation :width)
               opacity (calc-animation-frame progress animation :opacity)
               left (calc-animation-frame progress animation :left)]
           [:div
            {:id "12312"
             :style {:position "absolute"
                     :background-color "blue"
                     :left (str left "px")
                     :width (str width "px")
                     :opacity opacity
                     :height "100px"}}
            ])))}))