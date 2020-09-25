(ns animation-prototype.pages.timeline
  (:require [reagent.core :as r]
            [animation-prototype.api :as api]
            [animation-prototype.pages.timeline.layer :as timeline-layer]
            [animation-prototype.pages.timeline.timeline :as timeline]))

(def initial-state
  {:time 0
   :duration 1500
   :layers {:layer-1 {:id "layer-1"
                      :objects [#uuid"8ecb26a4-2c1f-471f-ac0e-b2fff4f47ea4"]

                      #_{:cube {:id "cube"
                                :start 0
                                :duration 1500
                                :animations [{:fn api/quad
                                              :animate-from {:width 0
                                                             :opacity 0}
                                              :animate-to {:width 100
                                                           :opacity 1}
                                              :start 0
                                              :duration 500}
                                             {:fn api/quad
                                              :animate-from {:left 0
                                                             :opacity 1}
                                              :animate-to {:left 500
                                                           :opacity 0.5}
                                              :start 500
                                              :duration 500}
                                             {:fn api/quad
                                              :animate-from {:opacity 0.5}
                                              :animate-to {:opacity 0}
                                              :start 1000
                                              :duration 500}]}}

                      }
            :layer-2 {:id "layer-2"
                      :objects [#uuid"e7d0d46c-3ae6-43c2-bc0f-bcb4aa0acfe5"]}

            }})

(defn page []
  (r/create-class
    {:component-did-mount
     (fn [this]
       (reset! timeline/state initial-state)


       )
     :reagent-render
     (fn []
       [:span.main
        [:h1 "Animation Timeline"]
        "TIMESTAMP = " (:time @timeline/state) "ms"

        (let [layers (:layers @timeline/state)]
          (doall
            (map
              (fn [layer]
                (timeline-layer/component layer))
              layers)))

        [:div
         {:style {:display "flex"
                  :justify-content "space-between"}}
         [:div "0"]
         [:div (str (:duration @timeline/state))]]

        [:div.slidecontainer
         [:input#myRange.slider
          {:style {:width "100%"}
           :type "range"
           :min "0"
           :max (:duration @timeline/state)
           :value (:time @timeline/state)
           :onChange (fn [e]
                       (let [value e.target.value]
                         (timeline/update-timeline value)))}]]]
       )}))