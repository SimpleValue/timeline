// Compiled by ClojureScript 1.10.773 {}
goog.provide('animation_prototype.loop');
goog.require('cljs.core');
/**
 * The `animation-loop` expects a function `animate` that takes one
 *     argument: the animation-time. The `animate` function should return a
 *     sequence of `render-operations` which represent the side-effects as
 *     data that are necessary to render the animation at the given
 *     animation-time. The `render-operations` are passed to the `render!`
 *     function that performs the side-effects. The loop runs until
 *     `animate` returns a falsy value.
 */
animation_prototype.loop.animation_loop = (function animation_prototype$loop$animation_loop(animation,render_BANG_){
var start_real_time = performance.now();
return requestAnimationFrame((function animation_prototype$loop$animation_loop_$_animation_loop_callback(real_time){
var animation_time = (real_time - start_real_time);
var map__31385 = animation;
var map__31385__$1 = (((((!((map__31385 == null))))?(((((map__31385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31385):map__31385);
var duration = cljs.core.get.call(null,map__31385__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var render = cljs.core.get.call(null,map__31385__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
var time_fraction = (animation_time / duration);
if((time_fraction < (1))){
render_BANG_.call(null,render.call(null,time_fraction));

return requestAnimationFrame(animation_prototype$loop$animation_loop_$_animation_loop_callback);
} else {
return render_BANG_.call(null,render.call(null,(1)));
}
}));
});

//# sourceMappingURL=loop.js.map?rel=1619014064241
