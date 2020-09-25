(ns animation-prototype.pages.animation-fn
  (:require [animation-prototype.pages.core :as core]
            [animation-prototype.api :as api]))

(defn page []
  (fn []
    [:span.main

     [:h1 "Animation Function"]

     [:p "Animation Function are taken from this website : "
      [:a {:href "https://easings.net/de"}
       "https://easings.net/de"]]

     [core/animation-panel {:render (fn [time-fraction]
                                      (let [progress (api/linear time-fraction)]
                                        {:opacity (str progress)
                                         :width (* 500 progress)}))
                            :duration 1000
                            :id "linear"}]

     [core/animation-panel {:render (fn [time-fraction]
                                      (let [progress (api/cubic time-fraction)]
                                        {:opacity (str progress)
                                         :width (* 500 progress)}))
                            :duration 1000
                            :id "cubic"}]

     [core/animation-panel {:render (fn [time-fraction]
                                      (let [progress (api/quad time-fraction)]
                                        {:opacity (str progress)
                                         :width (* 500 progress)}))
                            :duration 1000
                            :id "quad"}]

     [core/animation-panel {:render (fn [time-fraction]
                                      (let [progress ((api/make-ease-out api/quad) time-fraction)]
                                        {:opacity (str progress)
                                         :width (* 500 progress)}))
                            :duration 1000
                            :id "ease-out-quad"}]

     [core/animation-panel {:render (fn [time-fraction]
                                      (let [progress ((api/make-ease-out api/cubic) time-fraction)]
                                        {:opacity (str progress)
                                         :width (* 500 progress)}))
                            :duration 1000
                            :id "ease-out-cubic"}]
     ]))