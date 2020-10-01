(ns sv.timeline.resizehandler
  (:require [reagent.core :as r]))

(def left-handler
  (r/as-element
    [:div {:id "left-handler"
           :key "left-handler"
           :style {:height "100%"
                   :background-color "white"
                   :display "flex"
                   :justify-content "center"
                   :align-items "center"
                   :border-top-left-radius "5px"
                   :border-bottom-left-radius "5px"}}
     [:i
      {:class "fas fa-grip-lines-vertical"
       :style {:width "16px"
               :height "16px"
               :opacity 0.5}}]]))

(def right-handler
  (r/as-element
    (let [hovered? (r/atom nil)]
      [:div {:id "right-handler"
             :key "right-handler"
             :onMouseEnter (fn [e]
                             (reset! hovered? true))
             :onMouseLeave (fn [e]
                             (reset! hovered? false))
             :style {:height "100%"
                     :display "flex"
                     :justify-content "center"
                     :background-color "white"
                     :align-items "center"
                     :border-top-right-radius "2px"
                     :border-bottom-right-radius "2px"}}
       [:i
        {:class "fas fa-grip-lines-vertical"
         :style {:width "16px"
                 :height "16px"
                 :opacity 0.5}}]])))

(def HandleComponents
  {:left [left-handler]
   :right [right-handler]})