(ns animation-prototype.combine)

(defn combine
  [& animations]
  (let [max-duration (apply max (map :duration animations))]
    {:duration max-duration
     :render (fn [time-fraction]
               (mapcat
                 (fn [animation]
                   (let [{:keys [duration render]} animation
                         animation-time-fraction (min (* time-fraction
                                                         (/ max-duration
                                                            duration))
                                                      1)]
                     (render animation-time-fraction)))
                 animations))}))
