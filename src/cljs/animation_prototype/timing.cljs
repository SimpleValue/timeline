(ns animation-prototype.timing)

(defn linear
      "Speed up the animation in a linear."
      [time-fraction]
      time-fraction)

(defn quad
      "Speed up the animation in a parabolic curve."
      [time-fraction]
      (js/Math.pow time-fraction 2))

(defn cubic
      "Speed up the animation in a cubic curve."
      [time-fraction]
      (js/Math.pow time-fraction 3))

(defn oscillate
      "Oscillate with the help of the sine function."
      [time-fraction]
      (js/Math.sin (* time-fraction (* js/Math.PI 2))))

(defn make-ease-out
      "Accepts a timing function, returns the ease-out transformed variant."
      [timing-function]
      (fn [time-fraction]
            (- 1 (timing-function (- 1 time-fraction)))))

(defn make-ease-in
      "Accepts a timing function, returns the ease-out transformed variant."
      [timing-function]
      (fn [time-fraction]
            (- 1 (timing-function (- 1 time-fraction)))))



