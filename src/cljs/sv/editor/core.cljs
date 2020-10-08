(ns sv.editor.core
  (:require [reagent.core :as r]
            [animation-prototype.api :as api]))

(def sample-editor-state
  {:root #uuid"c7601b95-cad5-418c-a18f-0e0224763455",
   #uuid"c7601b95-cad5-418c-a18f-0e0224763455" {:tag :div,
                                                :attrs {:style {:width 1080, :height 1350, :position "relative"},
                                                        :key "df4c2258-d658-4100-91ad-1c8a0698acee",
                                                        :version 1},
                                                :content [#uuid"8ecb26a4-2c1f-471f-ac0e-b2fff4f47ea4"
                                                          #uuid"e7d0d46c-3ae6-43c2-bc0f-bcb4aa0acfe5"
                                                          #uuid"e7d0d46c-3ae6-43c2-bc0f-bcb4aa0acfe2"],
                                                :uuid #uuid"c7601b95-cad5-418c-a18f-0e0224763455"},
   #uuid"8ecb26a4-2c1f-471f-ac0e-b2fff4f47ea4" {:tag :ui/background,
                                                :attrs {:id "fa3acd64-7387-46ae-bf63-3fcfc31ebb98",
                                                        :src "",
                                                        :scale-factor 1,
                                                        :style {:width 1080,
                                                                :height 1350,
                                                                :top 0,
                                                                :left 0,
                                                                :position "absolute"},
                                                        :ui/data {:x -135,
                                                                  :y 0,
                                                                  :scale 1,
                                                                  :rotate 0,
                                                                  :width 1350,
                                                                  :height 1350,
                                                                  :static true,
                                                                  :element/colors #:colors{:primary {:r 222,
                                                                                                     :g 22,
                                                                                                     :b 22,
                                                                                                     :a 1}}},
                                                        :key "fa3acd64-7387-46ae-bf63-3fcfc31ebb98"},
                                                :content [],
                                                :uuid #uuid"8ecb26a4-2c1f-471f-ac0e-b2fff4f47ea4"},
   #uuid"e7d0d46c-3ae6-43c2-bc0f-bcb4aa0acfe5" {:tag :ui/image
                                                :layer "layer-1"
                                                :attrs {:start 2
                                                        :duration 10
                                                        :id #uuid"e7d0d46c-3ae6-43c2-bc0f-bcb4aa0acfe5",
                                                        :src "img/image.jpeg",
                                                        :ui/data {:animations {:opacity {:keyframes [{:t 0
                                                                                                      :v 0
                                                                                                      :fn api/linear}
                                                                                                     {:t 0.1
                                                                                                      :v 1
                                                                                                      :fn api/linear}
                                                                                                     {:t 0.9
                                                                                                      :v 1
                                                                                                      :fn api/linear}
                                                                                                     {:t 1
                                                                                                      :v 0
                                                                                                      :fn api/linear}]}

                                                                               :x {:keyframes [{:t 0
                                                                                                :v -400
                                                                                                :fn api/linear}
                                                                                               {:t 0.1
                                                                                                :v 0
                                                                                                :fn api/linear}
                                                                                               {:t 0.9
                                                                                                :v 0
                                                                                                :fn api/linear}
                                                                                               {:t 1
                                                                                                :v 400
                                                                                                :fn api/linear}]}

                                                                               :width {:keyframes [{:t 0
                                                                                                    :v 715
                                                                                                    :fn api/linear}
                                                                                                   {:t 0.2
                                                                                                    :v 715
                                                                                                    :fn api/linear}
                                                                                                   {:t 0.5
                                                                                                    :v 0
                                                                                                    :fn api/linear}
                                                                                                   {:t 0.9
                                                                                                    :v 715
                                                                                                    :fn api/linear}
                                                                                                   {:t 1
                                                                                                    :v 715
                                                                                                    :fn api/linear}]}

                                                                               :height {:keyframes [{:t 0
                                                                                                    :v 1012.5
                                                                                                    :fn api/linear}
                                                                                                   {:t 0.2
                                                                                                    :v 1012.5
                                                                                                    :fn api/linear}
                                                                                                   {:t 0.5
                                                                                                    :v 0
                                                                                                    :fn api/linear}
                                                                                                   {:t 0.9
                                                                                                    :v 1012.5
                                                                                                    :fn api/linear}
                                                                                                   {:t 1
                                                                                                    :v 1012.5
                                                                                                    :fn api/linear}]}}

                                                                  :opacity 1
                                                                  :x 600
                                                                  :y 61.35842264107987,
                                                                  :scale 0.4129190067230498,
                                                                  :rotate 0,
                                                                  :original-width 715.60546875,
                                                                  :original-height 1012.5,
                                                                  :width 715.60546875,
                                                                  :height 1012.5}},
                                                :uuid #uuid"e7d0d46c-3ae6-43c2-bc0f-bcb4aa0acfe5"}

   #uuid"e7d0d46c-3ae6-43c2-bc0f-bcb4aa0acfe2" {:tag :ui/text
                                                :layer "layer-3"
                                                :attrs {:start 0
                                                        :duration 5
                                                        :id #uuid"e7d0d46c-3ae6-43c2-bc0f-bcb4aa0acfe2",
                                                        :src "img/img2.jpg",
                                                        :ui/data {:animations {:opacity {:keyframes [{:t 0
                                                                                                      :v 0
                                                                                                      :fn api/linear}
                                                                                                     {:t 0.1
                                                                                                      :v 1
                                                                                                      :fn api/linear}
                                                                                                     {:t 0.9
                                                                                                      :v 1
                                                                                                      :fn api/linear}
                                                                                                     {:t 1
                                                                                                      :v 0
                                                                                                      :fn api/linear}]}}

                                                                  :opacity 1
                                                                  :x 800
                                                                  :y 61.35842264107987,
                                                                  :scale 0.4129190067230498,
                                                                  :rotate 0,
                                                                  :original-width 715.60546875,
                                                                  :original-height 1012.5,
                                                                  :width 400.60546875,
                                                                  :height 200.5}},
                                                :uuid #uuid"e7d0d46c-3ae6-43c2-bc0f-bcb4aa0acfe2"}

   })

(defonce editor-state
  (r/atom sample-editor-state))
