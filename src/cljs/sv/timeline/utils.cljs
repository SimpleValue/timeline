(ns sv.timeline.utils)

(defn s->ms
  [t]
  (* 1000 t))

(defn round-seconds
  "Returns a time value with max 2 decimals"
  [t]
  (/
    (js/Math.round (* t
                      100))
    100))
