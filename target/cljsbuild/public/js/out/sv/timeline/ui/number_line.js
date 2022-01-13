// Compiled by ClojureScript 1.10.773 {}
goog.provide('sv.timeline.ui.number_line');
goog.require('cljs.core');
goog.require('sv.timeline.core');
goog.require('sv.timeline.utils');
sv.timeline.ui.number_line.get_step_size = (function sv$timeline$ui$number_line$get_step_size(duration_s,timeline_width,scale){
if((duration_s <= (30))){
return (5);
} else {
if((duration_s <= (100))){
return (20);
} else {
if((duration_s <= (300))){
return (60);
} else {
return (60);

}
}
}
});
sv.timeline.ui.number_line.get_pixel_step_size = (function sv$timeline$ui$number_line$get_pixel_step_size(duration_s,timeline_width){
var step_px = (timeline_width / duration_s);
return step_px;
});
sv.timeline.ui.number_line.number = (function sv$timeline$ui$number_line$number(e,m,step_t){
var value = sv.timeline.utils.round_seconds.call(null,e);
var v = (e / step_t);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((v * m)),"px"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null)], null),["|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"s"].join('')], null)], null);
});
sv.timeline.ui.number_line.component = (function sv$timeline$ui$number_line$component(params,timeline_width){
var timeline_width__$1 = (timeline_width - (16));
var duration = new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$2(params,(0));
var scale = new cljs.core.Keyword("timeline","scale","timeline/scale",1856770280).cljs$core$IFn$_invoke$arity$2(params,(1));
var step_size = sv.timeline.ui.number_line.get_step_size.call(null,duration,timeline_width__$1,scale);
var step_px = sv.timeline.ui.number_line.get_pixel_step_size.call(null,duration,timeline_width__$1);
var as = (step_size * step_px);
var d = cljs.core.range.call(null,(0),duration,step_size);
var d__$1 = cljs.core.reverse.call(null,d);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"20px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sv.timeline.ui.number_line.number,(0),(0),step_size], null),cljs.core.doall.call(null,cljs.core.map.call(null,(function (e){
if(cljs.core.not_EQ_.call(null,e,(0))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sv.timeline.ui.number_line.number,e,as,step_size], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["e-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null));
} else {
return null;
}
}),cljs.core.reverse.call(null,d__$1))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["e-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),"0px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((duration | (0))),"s","|"].join('')], null)], null)], null);
});

//# sourceMappingURL=number_line.js.map?rel=1635172984943
