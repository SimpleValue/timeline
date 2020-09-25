(ns animation-prototype.prod
  (:require [animation-prototype.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
