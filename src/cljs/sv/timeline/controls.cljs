(ns sv.timeline.controls
  (:require [sv.timeline.core :as timeline]
            [cljs-time.core :as t]
            [cljs-time.format :as format]))

(defn time-delta
  "Adds the `:time/delta` to the `state-value` that is the milliseconds
   which have passed, since the last rendering (usually 16.66 ms due to
   the browser's FPS of 60)."
  [state-value]
  (assoc state-value
    :time/delta (if-not (:time/now* state-value)
                  0
                  (- (:time/now state-value)
                     (:time/now* state-value)))
    ;; stores the current `:time/now` to calculate the next
    ;; `:time/delta`:
    :time/now* (:time/now state-value)))

(defn time-current
  "Calculates the time that has passed, since the playback of the
   timeline has started. It is stored as `:time/current` (unit ms) in
   the `state-value`."
  [state-value]
  (let [time-current* (:time/current state-value 0)]
    (assoc state-value
      :time/current (+ time-current*
                      (/ (:time/delta state-value)
                        1000.0))
      ;; provides the previous `:time/current` as
      ;; `:time/current*` to the subsequent functions, so that
      ;; they can trigger an action at a desired time. If a
      ;; function likes to start an animation at the
      ;; `desired-time` 2000 ms, the rendering most likely hits
      ;; timestamps around this trigger. The function can then
      ;; use the check `(<= (:time/current* state-value)
      ;; desired-time (:time/current state-value))` to start the
      ;; animation:
      :time/current* time-current*)))

(defn prn-state
  [state-value]
  (js/console.log (pr-str state-value))
  state-value
  )

(defn prepare-play-fn
  "Prepares the play-fn that start the playback of the editor. The
   play-fn is a stack of render steps."
  []
  (comp
    #_prn-state
    #_(timeline/stop-at {:stop-listener (fn []
                                          (.pause editor-audio/audio-element))})
    time-current
    time-delta))

(defn play!
  [play-fn]
  (timeline/play-loop play-fn))

(defn zoom-in-timeline
  []
  [:div
   [:input
    {:style {:width "100%"
             :margin "0px 0px 15px 0px"
             :padding "0px"}
     :type "range"
     :min 0.05
     :step 0.05
     :max 1
     :value (:scale @timeline/state)
     :onChange (fn [e]
                 (let [value e.target.value]
                   (swap! timeline/state assoc :timeline/scale value)))}]])

(defn display-time
  [statevalue]
  (let [current-time (if (> 0
                           (:time/current* statevalue))
                       0
                       (:time/current* statevalue))
        minutes (int (/ current-time
                       60))
        minutes (if (>= minutes 10)
                  minutes
                  (str "0" minutes))
        seconds (int (mod current-time
                       60))
        seconds (if (>= seconds 10)
                  seconds
                  (str "0" seconds))
        milliseconds (mod current-time
                       60)
        milliseconds (js/Math.round
                       (* (- milliseconds
                            (int milliseconds))
                         10))]
    [:div {:style {:background-color "#eee"
                   :padding "0px 20px"
                   :border-radius "20%"}}
     [:p {:style {:font-weight "bold"
                  :vertical-align "middle"}}
      minutes ":" seconds ":" milliseconds]]))

(defn play-button
  []
  [:div
   {:style {:border-radius "50%"
            :cursor "pointer"}
    :onClick (fn [e]
               #_(let [play-fn (prepare-play-fn)]
                 (swap! timeline/state assoc
                   :time/now* (js/performance.now)
                   :time/current 0
                   :time/current* 0
                   :time/delta 0
                   :time/stopped (not (:time/stopped @timeline/state)))

                 (when-not (:time/stopped @timeline/state)
                   (play! play-fn))))}

   #_(if (:time/stopped @timeline/state)
     "Play"
     "Stop")])

