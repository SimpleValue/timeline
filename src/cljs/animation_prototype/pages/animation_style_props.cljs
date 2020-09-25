(ns animation-prototype.pages.animation-style-props
  (:require [animation-prototype.pages.core :as core]
            [animation-prototype.api :as api]))

(defn page []
  (fn []
    [:span.main
     [:h1 "Animation Properties"]
     [core/animation-panel {:render (fn [time-fraction]
                                      (let [progress ((api/make-ease-out api/quad) time-fraction)]
                                        {:width (* 500 progress)}))
                            :duration 1000
                            :id "width"}]

     [core/animation-panel {:render (fn [time-fraction]
                                      (let [progress ((api/make-ease-out api/quad)
                                                      time-fraction)]
                                        {:height (* 100 progress)}))
                            :duration 1000
                            :id "height"}]

     [core/animation-panel {:render (fn [time-fraction]
                                      (let [progress ((api/make-ease-out api/quad) time-fraction)]
                                        {:opacity (str progress)}))
                            :duration 1000
                            :id "opacity"}]

     [core/animation-panel {:render (fn [time-fraction]
                                      (let [progress ((api/make-ease-out api/quad) time-fraction)]
                                        {:left (* 500 progress)}))
                            :duration 1000
                            :id "left"}]

     [core/animation-panel {:render (fn [time-fraction]
                                      (let [progress ((api/make-ease-out api/quad) time-fraction)]
                                        {:right (* 500 progress)}))
                            :duration 1000
                            :id "right"}]

     [core/animation-panel {:render (fn [time-fraction]
                                      (let [progress ((api/make-ease-out api/quad) time-fraction)]
                                        {:background-color (str "rgb("
                                                             (* 255 progress)
                                                             ","
                                                             (- 255 (* 255 progress))
                                                             ","
                                                             (* 255 progress) ")")}))
                            :duration 10000
                            :id "color"}]

     [core/animation-panel {:render (fn [time-fraction]
                                      (let [progress ((api/make-ease-out api/quad) time-fraction)]
                                        {:rotation (* 360 progress)}))
                            :duration 1000
                            :id "rotation"}]
     ]))