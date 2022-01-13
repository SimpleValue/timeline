// Compiled by ClojureScript 1.10.773 {}
goog.provide('sv.timeline.element');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('react_rnd');
goog.require('sv.timeline.resizehandler');
goog.require('sv.timeline.core');
sv.timeline.element.Rnd = reagent.core.adapt_react_class.call(null,sv.timeline.element.node$module$react_rnd.Rnd);
sv.timeline.element.resize_map = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"top","top",-1856271961),false,new cljs.core.Keyword(null,"right","right",-452581833),true,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),false,new cljs.core.Keyword(null,"left","left",-399115937),true,new cljs.core.Keyword(null,"topRight","topRight",146054063),false,new cljs.core.Keyword(null,"bottomRight","bottomRight",312031010),false,new cljs.core.Keyword(null,"bottomLeft","bottomLeft",540274949),false,new cljs.core.Keyword(null,"topLeft","topLeft",233637450),false], null);
sv.timeline.element.component = (function sv$timeline$element$component(layer,params,timeline_width){
var onResizeStop = new cljs.core.Keyword(null,"onResizeStop","onResizeStop",-951828968).cljs$core$IFn$_invoke$arity$1(layer);
var onResize = new cljs.core.Keyword(null,"onResize","onResize",-649393510).cljs$core$IFn$_invoke$arity$1(layer);
var onDrag = new cljs.core.Keyword(null,"onDrag","onDrag",779956324).cljs$core$IFn$_invoke$arity$1(layer);
var onDragStop = new cljs.core.Keyword(null,"onDragStop","onDragStop",-122672705).cljs$core$IFn$_invoke$arity$1(layer);
var get_grid = new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(layer);
var duration_fn = new cljs.core.Keyword(null,"get-element-duration","get-element-duration",-196036982).cljs$core$IFn$_invoke$arity$1(layer);
var start_fn = new cljs.core.Keyword(null,"get-element-start","get-element-start",463951931).cljs$core$IFn$_invoke$arity$1(layer);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sv.timeline.element.Rnd,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"resizeGrid","resizeGrid",1909491584),new cljs.core.Keyword(null,"enableResizing","enableResizing",203920930),new cljs.core.Keyword(null,"onDrag","onDrag",779956324),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",-1496366516),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"resizeHandleComponent","resizeHandleComponent",-676861840),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"onResizeStop","onResizeStop",-951828968),new cljs.core.Keyword(null,"onResize","onResize",-649393510),new cljs.core.Keyword(null,"dragGrid","dragGrid",83513470),new cljs.core.Keyword(null,"onDragStop","onDragStop",-122672705)],[get_grid.call(null,params),sv.timeline.element.resize_map,(function (e,data){
return onDrag.call(null,e,data,params);
}),(1),(function (e){
e.preventDefault();

return e.stopPropagation();
}),"parent",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),duration_fn.call(null,params),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(layer)], null),new cljs.core.Keyword(null,"resizeHandleComponent","resizeHandleComponent",-676861840).cljs$core$IFn$_invoke$arity$1(layer),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),start_fn.call(null,params),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),(function (e,d,ref,delta,p){
return onResizeStop.call(null,e,d,ref,delta,p,params);
}),(function (e,dir,ref,delta,position){
return onResize.call(null,e,dir,ref,delta,position,params);
}),get_grid.call(null,params),(function (e,data){
return onDragStop.call(null,e,data);
})]),new cljs.core.Keyword(null,"child","child",623967545).cljs$core$IFn$_invoke$arity$1(layer)], null);
});

//# sourceMappingURL=element.js.map?rel=1635172984401
