// Compiled by ClojureScript 1.10.773 {}
goog.provide('animation_prototype.combine');
goog.require('cljs.core');
animation_prototype.combine.combine = (function animation_prototype$combine$combine(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31380 = arguments.length;
var i__4737__auto___31381 = (0);
while(true){
if((i__4737__auto___31381 < len__4736__auto___31380)){
args__4742__auto__.push((arguments[i__4737__auto___31381]));

var G__31382 = (i__4737__auto___31381 + (1));
i__4737__auto___31381 = G__31382;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return animation_prototype.combine.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(animation_prototype.combine.combine.cljs$core$IFn$_invoke$arity$variadic = (function (animations){
var max_duration = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068),animations));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),max_duration,new cljs.core.Keyword(null,"render","render",-1408033454),(function (time_fraction){
return cljs.core.mapcat.call(null,(function (animation){
var map__31378 = animation;
var map__31378__$1 = (((((!((map__31378 == null))))?(((((map__31378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31378):map__31378);
var duration = cljs.core.get.call(null,map__31378__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var render = cljs.core.get.call(null,map__31378__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
var animation_time_fraction = (function (){var x__4217__auto__ = (time_fraction * (max_duration / duration));
var y__4218__auto__ = (1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return render.call(null,animation_time_fraction);
}),animations);
})], null);
}));

(animation_prototype.combine.combine.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(animation_prototype.combine.combine.cljs$lang$applyTo = (function (seq31377){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31377));
}));


//# sourceMappingURL=combine.js.map?rel=1619014064234
