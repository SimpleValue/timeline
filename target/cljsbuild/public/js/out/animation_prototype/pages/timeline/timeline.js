// Compiled by ClojureScript 1.10.773 {}
goog.provide('animation_prototype.pages.timeline.timeline');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('animation_prototype.api');
if((typeof animation_prototype !== 'undefined') && (typeof animation_prototype.pages !== 'undefined') && (typeof animation_prototype.pages.timeline !== 'undefined') && (typeof animation_prototype.pages.timeline.timeline !== 'undefined') && (typeof animation_prototype.pages.timeline.timeline.state !== 'undefined')){
} else {
animation_prototype.pages.timeline.timeline.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
animation_prototype.pages.timeline.timeline.get_animation = (function animation_prototype$pages$timeline$timeline$get_animation(animations,t){
return cljs.core.some.call(null,(function (animation){
if((((new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(animation) <= t)) && ((t <= (new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(animation) + new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation)))))){
return animation;
} else {
return null;
}
}),animations);
});
animation_prototype.pages.timeline.timeline.update_object_attribute = (function animation_prototype$pages$timeline$timeline$update_object_attribute(from,to,path,fn,duration){
var t = new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,animation_prototype.pages.timeline.timeline.state));
var time_fraction = (t / duration);
var progress = fn.call(null,time_fraction);
var diff = (to - from);
var p = ((diff * progress) + from);
return cljs.core.swap_BANG_.call(null,animation_prototype.pages.timeline.timeline.state,cljs.core.assoc_in,path,p);
});
animation_prototype.pages.timeline.timeline.animate = (function animation_prototype$pages$timeline$timeline$animate(animation,path){
var from = new cljs.core.Keyword(null,"animate-from","animate-from",-28819579).cljs$core$IFn$_invoke$arity$1(animation);
var to = new cljs.core.Keyword(null,"animate-to","animate-to",-1914688964).cljs$core$IFn$_invoke$arity$1(animation);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (attr){
var f = cljs.core.get_in.call(null,animation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animate-from","animate-from",-28819579),cljs.core.key.call(null,attr)], null));
var t = cljs.core.get_in.call(null,animation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animate-to","animate-to",-1914688964),cljs.core.key.call(null,attr)], null));
return animation_prototype.pages.timeline.timeline.update_object_attribute.call(null,f,t,cljs.core.conj.call(null,path,cljs.core.key.call(null,attr)),new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(animation),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation));
}),from));
});
animation_prototype.pages.timeline.timeline.update_objects = (function animation_prototype$pages$timeline$timeline$update_objects(t,layer,objects){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (o){
var obj = cljs.core.val.call(null,o);
var path = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layers","layers",1944875032),layer,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(obj)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null);
var animations = cljs.core.get_in.call(null,cljs.core.deref.call(null,animation_prototype.pages.timeline.timeline.state),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layers","layers",1944875032),layer,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(obj)),new cljs.core.Keyword(null,"animations","animations",140711296)], null));
var temp__5735__auto__ = animation_prototype.pages.timeline.timeline.get_animation.call(null,animations,t);
if(cljs.core.truth_(temp__5735__auto__)){
var animation = temp__5735__auto__;
return animation_prototype.pages.timeline.timeline.animate.call(null,animation,path);
} else {
return null;
}
}),objects));
});
animation_prototype.pages.timeline.timeline.update_timeline = (function animation_prototype$pages$timeline$timeline$update_timeline(t){
return cljs.core.swap_BANG_.call(null,animation_prototype.pages.timeline.timeline.state,cljs.core.assoc,new cljs.core.Keyword(null,"time","time",1385887882),t);
});

//# sourceMappingURL=timeline.js.map?rel=1635172984980
