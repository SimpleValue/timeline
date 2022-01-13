// Compiled by ClojureScript 1.10.773 {}
goog.provide('sv.timeline.core');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof sv !== 'undefined') && (typeof sv.timeline !== 'undefined') && (typeof sv.timeline.core !== 'undefined') && (typeof sv.timeline.core.state !== 'undefined')){
} else {
sv.timeline.core.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Starts a `js/requestAnimationFrame` loop to play a timeline. The
 * browser renders a frame approximately every 16.66 milliseconds (60
 * FPS). Adds the current `(js/performance.now)` as `:time/now` to the
 * map in the `state` Clojure atom, before it applies the function `f`
 * to the `state` value. The loop is stopped, as soon as the flag
 * `:time/stopped` is found in the state value.
 */
sv.timeline.core.play_loop = (function sv$timeline$core$play_loop(f){
return requestAnimationFrame((function sv$timeline$core$play_loop_$_raf(){
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword("time","stopped","time/stopped",-1492891373).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sv.timeline.core.state));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.Keyword("time","current","time/current",-1089469958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sv.timeline.core.state)) > new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sv.timeline.core.state)));
}
})())){
return cljs.core.swap_BANG_.call(null,sv.timeline.core.state,f);
} else {
cljs.core.swap_BANG_.call(null,sv.timeline.core.state,(function (state_value){
return f.call(null,cljs.core.assoc.call(null,state_value,new cljs.core.Keyword("time","now","time/now",-1654036502),performance.now()));
}));

return requestAnimationFrame(sv$timeline$core$play_loop_$_raf);
}
}));
});

//# sourceMappingURL=core.js.map?rel=1635172984379
