(ns animation-prototype.repeat
  (:refer-clojure :exclude [repeat]))

(defn scale
      [time-fraction n]
      (if (= time-fraction 1)
        1
        (* (mod time-fraction
                (/ 1 n))
           n)))


(defn repeat
      [n animation]
      (let [n (int n)
            total-duration (* (:duration animation)
                              n)]
           {:duration total-duration
            :render (fn [time-fraction]
                        ((:render animation) (scale time-fraction
                                                    n)))}))
