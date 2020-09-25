(ns animation-prototype.sequence
  (:refer-clojure :exclude [sequence]))

(defn sequence
      "Runs the animations in sequence."
      [& animations]
      (let [total-duration (apply + (map :duration animations))
            animations* (reduce
                          (fn [r animation]
                              (conj
                                r
                                (let [previous-end (::end (peek r)
                                                     0)
                                      duration-share (/ (:duration animation)
                                                        total-duration)
                                      end (+ previous-end
                                             duration-share)]
                                     (assoc animation
                                            ::start previous-end
                                            ::end end
                                            :duration-share duration-share))))
                          []
                          animations)]
           {:duration total-duration
            :render (fn [time-fraction]
                        (let [animation (first (drop-while (fn [animation]
                                                               (< (::end animation) time-fraction))
                                                           animations*))
                              animation-time-fraction (* (- time-fraction
                                                            (::start animation))
                                                         (/ 1 (:duration-share animation)))
                              render (:render animation)]
                             (render animation-time-fraction)))}))
