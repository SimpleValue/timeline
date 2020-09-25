(ns animation-prototype.pages.animation-lottie
  (:require #_["react-lottie" :as Lottie]
    [reagent.core :as r]))

(defonce state
  (r/atom {}))

(defn page []
  (r/create-class
    {:component-did-mount
     (fn [this]
       (reset! state {}))
     :reagent-render
     (fn []
       [:span.main
        [:h1 "Animation Lottie"]

        ])})

  )