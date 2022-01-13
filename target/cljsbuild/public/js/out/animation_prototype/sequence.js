// Compiled by ClojureScript 1.10.773 {}
goog.provide('animation_prototype.sequence');
goog.require('cljs.core');
/**
 * Runs the animations in sequence.
 */
animation_prototype.sequence.sequence = (function animation_prototype$sequence$sequence(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31390 = arguments.length;
var i__4737__auto___31391 = (0);
while(true){
if((i__4737__auto___31391 < len__4736__auto___31390)){
args__4742__auto__.push((arguments[i__4737__auto___31391]));

var G__31392 = (i__4737__auto___31391 + (1));
i__4737__auto___31391 = G__31392;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return animation_prototype.sequence.sequence.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(animation_prototype.sequence.sequence.cljs$core$IFn$_invoke$arity$variadic = (function (animations){
var total_duration = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068),animations));
var animations_STAR_ = cljs.core.reduce.call(null,(function (r,animation){
return cljs.core.conj.call(null,r,(function (){var previous_end = new cljs.core.Keyword("animation-prototype.sequence","end","animation-prototype.sequence/end",-400357724).cljs$core$IFn$_invoke$arity$2(cljs.core.peek.call(null,r),(0));
var duration_share = (new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation) / total_duration);
var end = (previous_end + duration_share);
return cljs.core.assoc.call(null,animation,new cljs.core.Keyword("animation-prototype.sequence","start","animation-prototype.sequence/start",-239818511),previous_end,new cljs.core.Keyword("animation-prototype.sequence","end","animation-prototype.sequence/end",-400357724),end,new cljs.core.Keyword(null,"duration-share","duration-share",609603541),duration_share);
})());
}),cljs.core.PersistentVector.EMPTY,animations);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),total_duration,new cljs.core.Keyword(null,"render","render",-1408033454),(function (time_fraction){
var animation = cljs.core.first.call(null,cljs.core.drop_while.call(null,(function (animation){
return (new cljs.core.Keyword("animation-prototype.sequence","end","animation-prototype.sequence/end",-400357724).cljs$core$IFn$_invoke$arity$1(animation) < time_fraction);
}),animations_STAR_));
var animation_time_fraction = ((time_fraction - new cljs.core.Keyword("animation-prototype.sequence","start","animation-prototype.sequence/start",-239818511).cljs$core$IFn$_invoke$arity$1(animation)) * ((1) / new cljs.core.Keyword(null,"duration-share","duration-share",609603541).cljs$core$IFn$_invoke$arity$1(animation)));
var render = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(animation);
return render.call(null,animation_time_fraction);
})], null);
}));

(animation_prototype.sequence.sequence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(animation_prototype.sequence.sequence.cljs$lang$applyTo = (function (seq31389){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31389));
}));


//# sourceMappingURL=sequence.js.map?rel=1619014064251
