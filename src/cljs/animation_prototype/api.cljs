(ns animation-prototype.api
  (:require [animation-prototype.loop :as loop]
            [animation-prototype.timing :as timing]
            [animation-prototype.sequence :as sequence]
            [animation-prototype.combine :as combine]
            [animation-prototype.repeat :as repeat]))

;; Concept:
;;
;; The animation system is based on [this
;; document](https://javascript.info/js-animation). Furthermore it
;; draws inspiration from the [GreenSock JS animation
;; lib](https://greensock.com/docs).

(def animation-loop
  #'loop/animation-loop)

(def linear
  #'timing/linear)

(def quad
  #'timing/quad)

(def cubic
  #'timing/cubic)

(def oscillate
  #'timing/oscillate)

(def make-ease-out
  #'timing/make-ease-out)

(def combine
  #'combine/combine)
