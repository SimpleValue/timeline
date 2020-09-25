(ns animation-prototype.pages.timeline.layer
  (:require [animation-prototype.pages.timeline.object :as obj]
            [animation-prototype.pages.timeline.timeline :as timeline]
            [animation-prototype.editor :as editor]))

(defn component
  [params]
  (let [vals (val params)
        objects (:objects vals)]
    (doall
      (map
        (fn [element-uuid]
          (let [;object-vals (val object)
                ;start-time-stamp (:start object-vals)
                ;duration (:duration object-vals)
                #_end-time-stamp #_(+ start-time-stamp
                                     duration)
                element-cursor nil #_(r/cursor editor/sample-editor-state
                                 [(:uuid element-uuid)])]

            [:div {:key element-uuid
                   :style {:position "relative"
                           :height "100px"}}
             [obj/component element-cursor]]

            #_(when (<= start-time-stamp
                      (int (:time @timeline/state))
                      end-time-stamp)
                [:div {:key (:id object-vals)
                       :style {:position "relative"
                               :height "100px"}}
                 [obj/component element-cursor]])))
        objects)
      )
    )
  )