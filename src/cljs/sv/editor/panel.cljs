(ns sv.editor.panel
  (:require [reagent.core :as r]
            [sv.editor.core :as editor-core]
            [sv.editor.element :as element]
            [sv.timeline.controls :as controls]
            [sv.timeline.panel :as timeline-panel]
            [sv.editor.timeline :as timeline-state]
            [sv.timeline.core :as lib-timeline-state]))

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

        (let [root (:root @editor-core/editor-state)
              root-element (get @editor-core/editor-state root)
              background-element (first (:content root-element))
              foreground-element (second (:content root-element))
              third-element (nth (:content root-element) 2)
              third-element-cursor (r/cursor editor-core/editor-state
                                     [third-element])
              element-cursor (r/cursor editor-core/editor-state
                               [foreground-element])
              background-cursor (r/cursor editor-core/editor-state
                               [background-element])


              ]

          [:div {:style {:display "flex"
                         :justify-content "center"
                         :width "100%"}}

           [:div {:id "editor-panel"
                  :style {:width "500px"
                          :height "500px"
                          :background-color "gray"}}
            [:div
             [element/component third-element-cursor]
             [element/component element-cursor]]]

           [:div {:id "state"
                  :style {:width "50%"
                          :display "flex"
                          :flex-direction "column"}}

            [:div
             (let [timeline-element (js/document.getElementById "timeline-parent")
                   t-width (if timeline-element
                             (.-clientWidth
                               timeline-element)
                             100)]
               (str "Timeline Parent Width in px = " t-width))]

            [:div
             (let [timeline-element (js/document.getElementById "timeline")
                   t-width (if timeline-element
                             (.-clientWidth
                               timeline-element)
                             100)]
               (str "Inner timeline (scaled) Width in px = " t-width))]

            [:div
             "Scale " (:timeline/scale @lib-timeline-state/state)]
            [:div
             "Objects : "]
            [:div
             "Duration : " (:duration @element-cursor)
             " - Start : " (:start @element-cursor)]
            [:div
             "Duration : " (:duration @third-element-cursor)
             " - Start : " (:start @third-element-cursor)]
            [:div
             "Duration : " (:duration @background-cursor)
             " - Start : " (:start @background-cursor)]
            ]])

        [:div
         {:id "timeline-controls"
          :style {:display "flex"
                  :width "80%"
                  :justify-content "space-between"}}
         [controls/play-button]
         [controls/display-time]
         [controls/zoom-in-timeline]]

        [:div {:style {:width "100%"
                       :height "5px"
                       :background-color "red"}}]

        (let [timeline-state (timeline-state/initial-state)]
          [:div
           {:style {:width "80%"}}
           [timeline-panel/component timeline-state]])])}))