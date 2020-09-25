(ns sv.editor.panel
  (:require [reagent.core :as r]
            [sv.editor.core :as editor-core]
            [sv.editor.element :as element]
            [sv.timeline.controls :as controls]
            [sv.timeline.panel :as timeline-panel]
            [sv.editor.timeline :as timeline-state]))

(defn panel
  []
  (r/create-class
    {:reagent-render
     (fn []
       [:span.main
        {:style {:height "100%"
                 :display "flex"
                 :flex-direction "column"
                 :align-items "center"}}

        [:h1 "Animation Timeline"]

        [:div {:id "editor-panel"
               :style {:width "500px"
                       :height "500px"
                       :background-color "gray"}}

         (let [root (:root @editor-core/editor-state)
               root-element (get @editor-core/editor-state root)
               background-element (first (:content root-element))
               foreground-element (second (:content root-element))
               third-element (nth (:content root-element) 2)
               third-element-cursor (r/cursor editor-core/editor-state
                                      [third-element])
               element-cursor (r/cursor editor-core/editor-state
                                [foreground-element])]
           [:div
            [element/component third-element-cursor]
            [element/component element-cursor]])]

        [:div
         {:id "timeline-controls"
          :style {:display "flex"
                  :width "80%"
                  :justify-content "space-between"}}

         [controls/play-button]
         [controls/display-time]
         [controls/zoom-in-timeline]]

        (let [root-id (:root @editor-core/editor-state)
              root-element (get @editor-core/editor-state root-id)
              timeline-state (timeline-state/initial-state (:content root-element))]

          [:div
             {:style {:width "80%"}}
             [timeline-panel/component timeline-state]])])}))