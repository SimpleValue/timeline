(ns animation-prototype.basic-example
  (:require [revl.core :as r
             :include-macros true]
            [animation-prototype.api :as api]
            [goog.object :as obj]))

(defn sample-render!
  [element render-operations]
  (doseq [render-operation render-operations]
    (let [[op attribute value] render-operation]
      (case (first render-operation)
        :set
        (let [style (obj/get element
                             "style")]
          (obj/set style attribute value))))))

(defn sample-animation
  [timing-function]
  {:duration 1000
   :render (fn [time-fraction]
             (let [progress (timing-function time-fraction)]
               [[:set "left" (str (* 200 progress)
                                  "px")]]))})

(defn run
  [sample-animation]
  (r/dom-node
    [:div {:style {:position "absolute"
                   :left "0px"
                   :width "50px"
                   :height "50px"
                   :background-color "orange"}}]
    (fn [dom-node]
      (api/animation-loop
        sample-animation
        (partial sample-render!
                 dom-node)))))

(defn sample-animation2
  [timing-function]
  {:duration 2000
   :render (fn [time-fraction]
             (let [progress (timing-function time-fraction)]
               [[:set "margin-top" (str (* 10 progress)
                                        "px")]]))})

(r/comment
  (r/md "run the animation with ease-in / linear")
  (run (sample-animation identity))

  (r/md "run the animation with ease-in and cubic speed up")
  (run (sample-animation api/cubic))

  (r/md "run cubic speed up with ease-out")
  (run (sample-animation (api/make-ease-out api/cubic)))

  (r/md "run with oscillate")
  (run (sample-animation (api/make-ease-out api/oscillate)))

  (r/md "run reverse")
  (run (sample-animation (api/make-ease-out api/reverse)))

  (run (api/sequence
         (sample-animation identity)
         (sample-animation api/reverse)))

  (run (api/combine
         (sample-animation identity)
         (sample-animation2 api/oscillate)))

  (run (api/repeat 2 (sample-animation identity)))
  )
