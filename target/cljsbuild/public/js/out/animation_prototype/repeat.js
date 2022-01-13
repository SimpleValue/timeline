// Compiled by ClojureScript 1.10.773 {}
goog.provide('animation_prototype.repeat');
goog.require('cljs.core');
animation_prototype.repeat.scale = (function animation_prototype$repeat$scale(time_fraction,n){
if(cljs.core._EQ_.call(null,time_fraction,(1))){
return (1);
} else {
return (cljs.core.mod.call(null,time_fraction,((1) / n)) * n);
}
});
animation_prototype.repeat.repeat = (function animation_prototype$repeat$repeat(n,animation){
var n__$1 = (n | (0));
var total_duration = (new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation) * n__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),total_duration,new cljs.core.Keyword(null,"render","render",-1408033454),(function (time_fraction){
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(animation).call(null,animation_prototype.repeat.scale.call(null,time_fraction,n__$1));
})], null);
});

//# sourceMappingURL=repeat.js.map?rel=1619014064267
