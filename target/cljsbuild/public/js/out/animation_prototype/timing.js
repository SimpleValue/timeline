// Compiled by ClojureScript 1.10.773 {}
goog.provide('animation_prototype.timing');
goog.require('cljs.core');
/**
 * Speed up the animation in a linear.
 */
animation_prototype.timing.linear = (function animation_prototype$timing$linear(time_fraction){
return time_fraction;
});
/**
 * Speed up the animation in a parabolic curve.
 */
animation_prototype.timing.quad = (function animation_prototype$timing$quad(time_fraction){
return Math.pow(time_fraction,(2));
});
/**
 * Speed up the animation in a cubic curve.
 */
animation_prototype.timing.cubic = (function animation_prototype$timing$cubic(time_fraction){
return Math.pow(time_fraction,(3));
});
/**
 * Oscillate with the help of the sine function.
 */
animation_prototype.timing.oscillate = (function animation_prototype$timing$oscillate(time_fraction){
return Math.sin((time_fraction * (Math.PI * (2))));
});
/**
 * Accepts a timing function, returns the ease-out transformed variant.
 */
animation_prototype.timing.make_ease_out = (function animation_prototype$timing$make_ease_out(timing_function){
return (function (time_fraction){
return ((1) - timing_function.call(null,((1) - time_fraction)));
});
});
/**
 * Accepts a timing function, returns the ease-out transformed variant.
 */
animation_prototype.timing.make_ease_in = (function animation_prototype$timing$make_ease_in(timing_function){
return (function (time_fraction){
return ((1) - timing_function.call(null,((1) - time_fraction)));
});
});

//# sourceMappingURL=timing.js.map?rel=1619014064259
