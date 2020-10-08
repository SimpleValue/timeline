(ns sv.editor.element
  (:require [sv.timeline.core :as timeline]
            [reagent.core :as r]
            [animation-prototype.api :as api]))

(defn object-in-frame?
  [element-state]
  (<= (:start @element-state)
    (:time/current @timeline/state)
    (+ (:start @element-state)
      (:duration @element-state))))

(defn get-key-frames-index
  [keyframes]
  (doall
    (filter
      (fn [e]
        (when (not (nil? e))
          e))
      (map-indexed
        (fn [index keyframe]
          (when (> (- (count keyframes)
                     1)
                  index)
            {:t0 keyframe
             :t1 (get keyframes (inc index))}))
        keyframes))))

(defn get-animation
  [t* keyframe-pairs]
  (some
    (fn [pair]
      (let [t0 (:t0 pair)
            t1 (:t1 pair)]
        (when (<= (:t t0)
                  t*
                  (:t t1))
          pair)))
    keyframe-pairs))

(comment

  (count [{:t 0.0}
          {:t 0.1}])

  (def k
    (get-key-frames-index [{:t 0
                            :v 0
                            :fn api/linear}
                           {:t 0.1
                            :v 1
                            :fn api/linear}
                           {:t 0.9
                            :v 1
                            :fn api/linear}
                           {:t 1
                            :v 0
                            :fn api/linear}]))

  (get-animation 0.05 k)

  )

(defn get-key-frames
  [t* keyframes]
  (let [keyframe-indices (get-key-frames-index keyframes)
        animation-seq (get-animation t* keyframe-indices)]
    animation-seq))

(defn normalize-progress
  "Returns a normalized progress value [0,1]"
  [progress t0 t1]
  (/ (- progress t0)
    (- t1 t0)))

(defn get-progress
  [t* sequence]
  (let [t0 (get-in sequence [:t0 :t])
        t1 (get-in sequence [:t1 :t])
        fn (get-in sequence [:t1 :fn])
        duration (- t1 t0)
        t-local (/ (- t* t0)
                  duration)
        p (fn t-local)]
    p))

(defn calc-value
  [progress sequence]
  (let [v0 (get-in sequence [:t0 :v])
        v1 (get-in sequence [:t1 :v])
        v (+
            (*
              (- 1 progress)
              v0)
            (*
              progress
              v1))]
    v))

(defn interpolate-keyframes
  [t* params]
  (let [keyframes (:keyframes params)
        current-seq (get-key-frames t* keyframes)]
    (when current-seq
      (let [progress (get-progress t* current-seq)
            v (calc-value progress current-seq)]
        v))))

(defn get-keyframe-value
  [t* ui-data attribute]
  (let [animations (:animations ui-data)
        attr (get animations attribute)]
    (or (interpolate-keyframes t* attr)
        (get ui-data attribute))))

(defn component
  [element-state]
  (r/create-class
    {:component-did-mount
     (fn [this])
     :reagent-render
     (fn []
       (when (object-in-frame? element-state)
         (let [{:keys [attrs content uuid]} @element-state
               ui-data (:ui/data attrs)
               scale (:scale ui-data)
               t* (/ (- (:time/current @timeline/state)
                       (:start @element-state))
                    (:duration @element-state))
               opacity (get-keyframe-value t* ui-data :opacity)
               x-position (get-keyframe-value t* ui-data :x)
               y-position (get-keyframe-value t* ui-data :y)
               width (get-keyframe-value t* ui-data :width)
               height (get-keyframe-value t* ui-data :height)]

           [:div
            {:style {:opacity 1
                     :width (str (* width scale) "px")
                     :height (str (* height scale) "px")
                     :position "absolute"
                     :transform (str "translate("
                                  (* x-position scale) "px,"
                                  (* y-position scale) "px)")}}
            [:img
             {:draggable "false"
              :style {:width "100%"
                      :height "100%"
                      :position "absolute"
                      :opacity opacity}
              :src (:src attrs)}]])))}))