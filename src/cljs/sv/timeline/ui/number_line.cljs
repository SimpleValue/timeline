(ns sv.timeline.ui.number-line
  (:require [sv.timeline.core :as timeline]
            [sv.timeline.utils :as utils]))

(defn get-step-size
  [duration-s timeline-width scale]
  (cond
    (<= duration-s 30)
    5

    (<= duration-s 100)
    20

    (<= duration-s 300)
    60

    ::else
    60
    )
  )

(defn get-pixel-step-size
  [duration-s timeline-width]
  (let [step-px (/ timeline-width duration-s)]
    step-px))

(defn number [e m step-t]
  (let [value (utils/round-seconds e)
        v (/ e step-t)]
    [:div
     {:style {:margin "0px"
              :position "absolute"
              :left (str (* v m) "px")}}
     [:p
      {:style {:margin "0px"
               :font-size "12px"}}
      (str "|" value "s")]]))

(defn component
  [params timeline-width]
  (let [timeline-width (- timeline-width 16)
        duration (:duration params 0)
        scale (:timeline/scale params 1)
        step-size (get-step-size duration timeline-width scale)
        step-px (get-pixel-step-size duration timeline-width)
        as (* step-size
              step-px)
        d (range 0 duration step-size)
        d (reverse d)]

    [:div {:style {:height "20px"
                   :position "relative"}}

     [number 0 0 step-size]

     (doall
       (map
         (fn [e]
           (when (not= e 0)
             ^{:key (str "e-" e)}
             [number e as step-size]))
         (reverse d)))

     [:div
      {:key (str "e-" duration)
       :style {:margin "0px"
               :position "absolute"
               :right "0px"}}
      [:p
       {:style {:margin "0px"
                :font-size "12px"}}
       (str (int duration) "s" "|")]]]))