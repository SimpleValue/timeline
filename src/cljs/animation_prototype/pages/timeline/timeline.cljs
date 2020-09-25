(ns animation-prototype.pages.timeline.timeline
  (:require [reagent.core :as r]
            [animation-prototype.api :as api]))

(defonce state
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

(defn update-object-attribute
  [from to path fn duration]
  (let [t (:time @state)
        time-fraction (/ t
                        duration)
        progress (fn time-fraction)
        diff (- to
               from)
        p (+
            (* diff
              progress)
            from)]
    (swap! state assoc-in path p)))

(defn animate
  [animation path]
  (let [from (:animate-from animation)
        to (:animate-to animation)]

    (doall
      (map
        (fn [attr]
          (let [f (get-in animation [:animate-from (key attr)])
                t (get-in animation [:animate-to (key attr)])]
            (update-object-attribute f t (conj path
                                           (key attr))
              (:fn animation) (:duration animation)))
          )
        from)))
  )

(defn update-objects
  [t layer objects]
  (doall
    (map
      (fn [o]
        (let [obj (val o)
              path [:layers layer
                    :objects (keyword (:id obj))
                    :attrs]
              animations (get-in @state [:layers layer
                                         :objects (keyword (:id obj))
                                         :animations])]
          (when-let [animation (get-animation animations t)]
            (animate animation path)))
        )
      objects))
  )

(defn update-timeline
  [t]
  (swap! state assoc :time t)

  #_(doall
    (map
      (fn [layer]
        (let [objects (:objects (val layer))]
          (update-objects t (key layer) objects)))
      (:layers @state)))
  )