(ns animation-prototype.loop)

(defn animation-loop
      ;; TODO: adapt doc: the `animate` returns a function that takes the
      ;; `animation-time` as first argument. This function returns a
      ;; sequence of render-operations or `nil`, if the end duration of
      ;; the animation has been reached. The passed `render` function is
      ;; called with the time-fraction, which is the fraction between the
      ;; `animation-time` and the `duration` (in milliseconds). Thereby
      ;; `time-fraction` is normalized between 0 and 1.
      "The `animation-loop` expects a function `animate` that takes one
       argument: the animation-time. The `animate` function should return a
       sequence of `render-operations` which represent the side-effects as
       data that are necessary to render the animation at the given
       animation-time. The `render-operations` are passed to the `render!`
       function that performs the side-effects. The loop runs until
       `animate` returns a falsy value."
      [animation render!]
      (let [start-real-time (js/performance.now)]
           (js/requestAnimationFrame
             (fn animation-loop-callback [real-time]
                 (let [animation-time (- real-time
                                         start-real-time)
                       {:keys [duration render]} animation
                       time-fraction (/ animation-time
                                        duration)]
                      (if (< time-fraction 1)
                        (do
                          (render! (render time-fraction))
                          (js/requestAnimationFrame animation-loop-callback))
                        (render! (render 1))))))))

