(ns sv.timeline.core
  (:require [reagent.core :as r]))

(defonce state
  (r/atom {}))

(defn play-loop
  "Starts a `js/requestAnimationFrame` loop to play a timeline. The
   browser renders a frame approximately every 16.66 milliseconds (60
   FPS). Adds the current `(js/performance.now)` as `:time/now` to the
   map in the `state` Clojure atom, before it applies the function `f`
   to the `state` value. The loop is stopped, as soon as the flag
   `:time/stopped` is found in the state value."
  [f]
  (js/requestAnimationFrame
    (fn raf []
      (if (or (:time/stopped @state)
              (>  (:time/current @state)
                  (:duration @state)))
        ;; provides middleware with side-effects the chance to stop
        ;; the playback of a video for example:
        (swap! state f)
        (do
          (swap! state (fn [state-value]
                         (f (assoc state-value
                              :time/now
                              (js/performance.now)))))
          (js/requestAnimationFrame raf))))))
