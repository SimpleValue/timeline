// Compiled by ClojureScript 1.10.773 {}
goog.provide('animation_prototype.pages.timeline.object');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('animation_prototype.api');
goog.require('animation_prototype.pages.timeline.timeline');
if((typeof animation_prototype !== 'undefined') && (typeof animation_prototype.pages !== 'undefined') && (typeof animation_prototype.pages.timeline !== 'undefined') && (typeof animation_prototype.pages.timeline.object !== 'undefined') && (typeof animation_prototype.pages.timeline.object.object_state !== 'undefined')){
} else {
animation_prototype.pages.timeline.object.object_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
animation_prototype.pages.timeline.object.get_animation = (function animation_prototype$pages$timeline$object$get_animation(animations,t){
return cljs.core.some.call(null,(function (animation){
if((((new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(animation) <= t)) && ((t <= (new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(animation) + new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation)))))){
return animation;
} else {
return null;
}
}),animations);
});
animation_prototype.pages.timeline.object.calc_animation_frame = (function animation_prototype$pages$timeline$object$calc_animation_frame(progress,animation,attr){
if(cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,animation,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animate-from","animate-from",-28819579)], null)),attr)){
var from = cljs.core.get_in.call(null,animation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animate-from","animate-from",-28819579),attr], null));
var to = cljs.core.get_in.call(null,animation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animate-to","animate-to",-1914688964),attr], null));
var diff = (to - from);
var p = ((diff * progress) + from);
return p;
} else {
return null;
}
});
animation_prototype.pages.timeline.object.get_progress = (function animation_prototype$pages$timeline$object$get_progress(animation,t){
if(cljs.core.truth_(animation)){
var fn = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(animation);
var t1 = (t - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(animation));
var time_fraction = (t1 / new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation));
var progress = fn.call(null,time_fraction);
return progress;
} else {
return null;
}
});
animation_prototype.pages.timeline.object.object_in_frame_QMARK_ = (((new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,animation_prototype.pages.timeline.object.object_state)) <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,animation_prototype.pages.timeline.timeline.state)))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,animation_prototype.pages.timeline.timeline.state)) <= new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,animation_prototype.pages.timeline.object.object_state)))));
animation_prototype.pages.timeline.object.image = (function animation_prototype$pages$timeline$object$image(element_state){
var map__34113 = cljs.core.deref.call(null,element_state);
var map__34113__$1 = (((((!((map__34113 == null))))?(((((map__34113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34113):map__34113);
var attrs = cljs.core.get.call(null,map__34113__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var content = cljs.core.get.call(null,map__34113__$1,new cljs.core.Keyword(null,"content","content",15833224));
var uuid = cljs.core.get.call(null,map__34113__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var ui_data = new cljs.core.Keyword("ui","data","ui/data",-232673621).cljs$core$IFn$_invoke$arity$1(attrs);
var opacity = new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(ui_data);
var original_width = new cljs.core.Keyword(null,"original-width","original-width",-1443819592).cljs$core$IFn$_invoke$arity$1(ui_data);
var original_height = new cljs.core.Keyword(null,"original-height","original-height",1744500735).cljs$core$IFn$_invoke$arity$1(ui_data);
var scale = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(ui_data);
var image_x = new cljs.core.Keyword(null,"image-x","image-x",-1904386466).cljs$core$IFn$_invoke$arity$1(ui_data);
var image_y = new cljs.core.Keyword(null,"image-y","image-y",-1605866454).cljs$core$IFn$_invoke$arity$1(ui_data);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),uuid], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"opacity","opacity",397153780),opacity,new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((original_width * scale)),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((original_height * scale)),"px"].join(''),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((image_x * scale)),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((image_y * scale)),"px)"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"draggable","draggable",1676206163),"false",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(attrs)], null)], null)], null)], null);
});
animation_prototype.pages.timeline.object.component = (function animation_prototype$pages$timeline$object$component(element_state){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return cljs.core.reset_BANG_.call(null,animation_prototype.pages.timeline.object.object_state,element_state);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
if(animation_prototype.pages.timeline.object.object_in_frame_QMARK_){
var animation = animation_prototype.pages.timeline.object.get_animation.call(null,new cljs.core.Keyword(null,"animations","animations",140711296).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,animation_prototype.pages.timeline.object.object_state)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,animation_prototype.pages.timeline.timeline.state)));
var progress = animation_prototype.pages.timeline.object.get_progress.call(null,animation,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,animation_prototype.pages.timeline.timeline.state)));
var width = animation_prototype.pages.timeline.object.calc_animation_frame.call(null,progress,animation,new cljs.core.Keyword(null,"width","width",-384071477));
var opacity = animation_prototype.pages.timeline.object.calc_animation_frame.call(null,progress,animation,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var left = animation_prototype.pages.timeline.object.calc_animation_frame.call(null,progress,animation,new cljs.core.Keyword(null,"left","left",-399115937));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"12312",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"background-color","background-color",570434026),"blue",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(left),"px"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join(''),new cljs.core.Keyword(null,"opacity","opacity",397153780),opacity,new cljs.core.Keyword(null,"height","height",1025178622),"100px"], null)], null)], null);
} else {
return null;
}
})], null));
});

//# sourceMappingURL=object.js.map?rel=1635172985008
