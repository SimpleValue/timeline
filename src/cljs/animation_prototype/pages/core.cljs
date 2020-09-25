(ns animation-prototype.pages.core
  (:require [animation-prototype.animated-object :as animated-obj]))

(defn animation-panel
  [params]
  [:div
   [:div {:style {:position "relative"
                  :height "100px"}}
    [animated-obj/component {:id (:id params)}]]
   [:button
    {:onClick (fn [e]
                (animated-obj/animate! params))}
    (str "Animate " (:id params))]])