// Compiled by ClojureScript 1.10.773 {}
goog.provide('reitit.trie');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reitit.exception');
reitit.trie.into_set = (function reitit$trie$into_set(x){
if(((cljs.core.set_QMARK_.call(null,x)) || (cljs.core.sequential_QMARK_.call(null,x)))){
return cljs.core.set.call(null,x);
} else {
if((x == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,x);

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Wild = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k31219,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__31223 = k31219;
var G__31223__$1 = (((G__31223 instanceof cljs.core.Keyword))?G__31223.fqn:null);
switch (G__31223__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31219,else__4383__auto__);

}
}));

(reitit.trie.Wild.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__31224){
var vec__31225 = p__31224;
var k__4403__auto__ = cljs.core.nth.call(null,vec__31225,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__31225,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(reitit.trie.Wild.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#reitit.trie.Wild{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31218){
var self__ = this;
var G__31218__$1 = this;
return (new cljs.core.RecordIter((0),G__31218__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.trie.Wild.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Wild.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Wild.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1970880185 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(reitit.trie.Wild.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31220,other31221){
var self__ = this;
var this31220__$1 = this;
return (((!((other31221 == null)))) && ((this31220__$1.constructor === other31221.constructor)) && (cljs.core._EQ_.call(null,this31220__$1.value,other31221.value)) && (cljs.core._EQ_.call(null,this31220__$1.__extmap,other31221.__extmap)));
}));

(reitit.trie.Wild.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(reitit.trie.Wild.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__31218){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__31228 = cljs.core.keyword_identical_QMARK_;
var expr__31229 = k__4388__auto__;
if(cljs.core.truth_(pred__31228.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__31229))){
return (new reitit.trie.Wild(G__31218,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__31218),null));
}
}));

(reitit.trie.Wild.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__31218){
var self__ = this;
var this__4379__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,G__31218,self__.__extmap,self__.__hash));
}));

(reitit.trie.Wild.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(reitit.trie.Wild.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(reitit.trie.Wild.cljs$lang$type = true);

(reitit.trie.Wild.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"reitit.trie/Wild",null,(1),null));
}));

(reitit.trie.Wild.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"reitit.trie/Wild");
}));

/**
 * Positional factory function for reitit.trie/Wild.
 */
reitit.trie.__GT_Wild = (function reitit$trie$__GT_Wild(value){
return (new reitit.trie.Wild(value,null,null,null));
});

/**
 * Factory function for reitit.trie/Wild, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Wild = (function reitit$trie$map__GT_Wild(G__31222){
var extmap__4419__auto__ = (function (){var G__31231 = cljs.core.dissoc.call(null,G__31222,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__31222)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__31231);
} else {
return G__31231;
}
})();
return (new reitit.trie.Wild(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__31222),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.CatchAll = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k31234,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__31238 = k31234;
var G__31238__$1 = (((G__31238 instanceof cljs.core.Keyword))?G__31238.fqn:null);
switch (G__31238__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31234,else__4383__auto__);

}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__31239){
var vec__31240 = p__31239;
var k__4403__auto__ = cljs.core.nth.call(null,vec__31240,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__31240,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(reitit.trie.CatchAll.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#reitit.trie.CatchAll{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31233){
var self__ = this;
var G__31233__$1 = this;
return (new cljs.core.RecordIter((0),G__31233__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-987265038 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31235,other31236){
var self__ = this;
var this31235__$1 = this;
return (((!((other31236 == null)))) && ((this31235__$1.constructor === other31236.constructor)) && (cljs.core._EQ_.call(null,this31235__$1.value,other31236.value)) && (cljs.core._EQ_.call(null,this31235__$1.__extmap,other31236.__extmap)));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__31233){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__31243 = cljs.core.keyword_identical_QMARK_;
var expr__31244 = k__4388__auto__;
if(cljs.core.truth_(pred__31243.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__31244))){
return (new reitit.trie.CatchAll(G__31233,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__31233),null));
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__31233){
var self__ = this;
var this__4379__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,G__31233,self__.__extmap,self__.__hash));
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(reitit.trie.CatchAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(reitit.trie.CatchAll.cljs$lang$type = true);

(reitit.trie.CatchAll.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"reitit.trie/CatchAll",null,(1),null));
}));

(reitit.trie.CatchAll.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"reitit.trie/CatchAll");
}));

/**
 * Positional factory function for reitit.trie/CatchAll.
 */
reitit.trie.__GT_CatchAll = (function reitit$trie$__GT_CatchAll(value){
return (new reitit.trie.CatchAll(value,null,null,null));
});

/**
 * Factory function for reitit.trie/CatchAll, taking a map of keywords to field values.
 */
reitit.trie.map__GT_CatchAll = (function reitit$trie$map__GT_CatchAll(G__31237){
var extmap__4419__auto__ = (function (){var G__31246 = cljs.core.dissoc.call(null,G__31237,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__31237)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__31246);
} else {
return G__31246;
}
})();
return (new reitit.trie.CatchAll(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__31237),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Match = (function (params,data,__meta,__extmap,__hash){
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k31249,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__31253 = k31249;
var G__31253__$1 = (((G__31253 instanceof cljs.core.Keyword))?G__31253.fqn:null);
switch (G__31253__$1) {
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31249,else__4383__auto__);

}
}));

(reitit.trie.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__31254){
var vec__31255 = p__31254;
var k__4403__auto__ = cljs.core.nth.call(null,vec__31255,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__31255,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(reitit.trie.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#reitit.trie.Match{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31248){
var self__ = this;
var G__31248__$1 = this;
return (new cljs.core.RecordIter((0),G__31248__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.trie.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1117628764 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(reitit.trie.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31250,other31251){
var self__ = this;
var this31250__$1 = this;
return (((!((other31251 == null)))) && ((this31250__$1.constructor === other31251.constructor)) && (cljs.core._EQ_.call(null,this31250__$1.params,other31251.params)) && (cljs.core._EQ_.call(null,this31250__$1.data,other31251.data)) && (cljs.core._EQ_.call(null,this31250__$1.__extmap,other31251.__extmap)));
}));

(reitit.trie.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(reitit.trie.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__31248){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__31258 = cljs.core.keyword_identical_QMARK_;
var expr__31259 = k__4388__auto__;
if(cljs.core.truth_(pred__31258.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__31259))){
return (new reitit.trie.Match(G__31248,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31258.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__31259))){
return (new reitit.trie.Match(self__.params,G__31248,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__31248),null));
}
}
}));

(reitit.trie.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__31248){
var self__ = this;
var this__4379__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,G__31248,self__.__extmap,self__.__hash));
}));

(reitit.trie.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(reitit.trie.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(reitit.trie.Match.cljs$lang$type = true);

(reitit.trie.Match.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"reitit.trie/Match",null,(1),null));
}));

(reitit.trie.Match.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"reitit.trie/Match");
}));

/**
 * Positional factory function for reitit.trie/Match.
 */
reitit.trie.__GT_Match = (function reitit$trie$__GT_Match(params,data){
return (new reitit.trie.Match(params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Match, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Match = (function reitit$trie$map__GT_Match(G__31252){
var extmap__4419__auto__ = (function (){var G__31261 = cljs.core.dissoc.call(null,G__31252,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.record_QMARK_.call(null,G__31252)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__31261);
} else {
return G__31261;
}
})();
return (new reitit.trie.Match(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__31252),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__31252),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Node = (function (children,wilds,catch_all,params,data,__meta,__extmap,__hash){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k31264,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__31268 = k31264;
var G__31268__$1 = (((G__31268 instanceof cljs.core.Keyword))?G__31268.fqn:null);
switch (G__31268__$1) {
case "children":
return self__.children;

break;
case "wilds":
return self__.wilds;

break;
case "catch-all":
return self__.catch_all;

break;
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31264,else__4383__auto__);

}
}));

(reitit.trie.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__31269){
var vec__31270 = p__31269;
var k__4403__auto__ = cljs.core.nth.call(null,vec__31270,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__31270,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(reitit.trie.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#reitit.trie.Node{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31263){
var self__ = this;
var G__31263__$1 = this;
return (new cljs.core.RecordIter((0),G__31263__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.trie.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (33004208 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(reitit.trie.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31265,other31266){
var self__ = this;
var this31265__$1 = this;
return (((!((other31266 == null)))) && ((this31265__$1.constructor === other31266.constructor)) && (cljs.core._EQ_.call(null,this31265__$1.children,other31266.children)) && (cljs.core._EQ_.call(null,this31265__$1.wilds,other31266.wilds)) && (cljs.core._EQ_.call(null,this31265__$1.catch_all,other31266.catch_all)) && (cljs.core._EQ_.call(null,this31265__$1.params,other31266.params)) && (cljs.core._EQ_.call(null,this31265__$1.data,other31266.data)) && (cljs.core._EQ_.call(null,this31265__$1.__extmap,other31266.__extmap)));
}));

(reitit.trie.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"wilds","wilds",132271223),null,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(reitit.trie.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__31263){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__31273 = cljs.core.keyword_identical_QMARK_;
var expr__31274 = k__4388__auto__;
if(cljs.core.truth_(pred__31273.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__31274))){
return (new reitit.trie.Node(G__31263,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31273.call(null,new cljs.core.Keyword(null,"wilds","wilds",132271223),expr__31274))){
return (new reitit.trie.Node(self__.children,G__31263,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31273.call(null,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),expr__31274))){
return (new reitit.trie.Node(self__.children,self__.wilds,G__31263,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31273.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__31274))){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,G__31263,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31273.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__31274))){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,G__31263,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__31263),null));
}
}
}
}
}
}));

(reitit.trie.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__31263){
var self__ = this;
var this__4379__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,G__31263,self__.__extmap,self__.__hash));
}));

(reitit.trie.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(reitit.trie.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"wilds","wilds",1772802750,null),new cljs.core.Symbol(null,"catch-all","catch-all",-1470323199,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(reitit.trie.Node.cljs$lang$type = true);

(reitit.trie.Node.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"reitit.trie/Node",null,(1),null));
}));

(reitit.trie.Node.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"reitit.trie/Node");
}));

/**
 * Positional factory function for reitit.trie/Node.
 */
reitit.trie.__GT_Node = (function reitit$trie$__GT_Node(children,wilds,catch_all,params,data){
return (new reitit.trie.Node(children,wilds,catch_all,params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Node, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Node = (function reitit$trie$map__GT_Node(G__31267){
var extmap__4419__auto__ = (function (){var G__31276 = cljs.core.dissoc.call(null,G__31267,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.record_QMARK_.call(null,G__31267)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__31276);
} else {
return G__31276;
}
})();
return (new reitit.trie.Node(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__31267),new cljs.core.Keyword(null,"wilds","wilds",132271223).cljs$core$IFn$_invoke$arity$1(G__31267),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570).cljs$core$IFn$_invoke$arity$1(G__31267),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__31267),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__31267),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

reitit.trie.wild_QMARK_ = (function reitit$trie$wild_QMARK_(x){
return (x instanceof reitit.trie.Wild);
});
reitit.trie.catch_all_QMARK_ = (function reitit$trie$catch_all_QMARK_(x){
return (x instanceof reitit.trie.CatchAll);
});

/**
 * @interface
 */
reitit.trie.Matcher = function(){};

var reitit$trie$Matcher$match$dyn_31278 = (function (this$,i,max,path){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.match[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,i,max,path);
} else {
var m__4426__auto__ = (reitit.trie.match["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,i,max,path);
} else {
throw cljs.core.missing_protocol.call(null,"Matcher.match",this$);
}
}
});
reitit.trie.match = (function reitit$trie$match(this$,i,max,path){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$match$arity$4 == null)))))){
return this$.reitit$trie$Matcher$match$arity$4(this$,i,max,path);
} else {
return reitit$trie$Matcher$match$dyn_31278.call(null,this$,i,max,path);
}
});

var reitit$trie$Matcher$view$dyn_31279 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.view[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (reitit.trie.view["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Matcher.view",this$);
}
}
});
reitit.trie.view = (function reitit$trie$view(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$view$arity$1 == null)))))){
return this$.reitit$trie$Matcher$view$arity$1(this$);
} else {
return reitit$trie$Matcher$view$dyn_31279.call(null,this$);
}
});

var reitit$trie$Matcher$depth$dyn_31280 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.depth[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (reitit.trie.depth["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Matcher.depth",this$);
}
}
});
reitit.trie.depth = (function reitit$trie$depth(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$depth$arity$1 == null)))))){
return this$.reitit$trie$Matcher$depth$arity$1(this$);
} else {
return reitit$trie$Matcher$depth$dyn_31280.call(null,this$);
}
});

var reitit$trie$Matcher$length$dyn_31281 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.length[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (reitit.trie.length["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Matcher.length",this$);
}
}
});
reitit.trie.length = (function reitit$trie$length(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$length$arity$1 == null)))))){
return this$.reitit$trie$Matcher$length$arity$1(this$);
} else {
return reitit$trie$Matcher$length$dyn_31281.call(null,this$);
}
});


/**
 * @interface
 */
reitit.trie.TrieCompiler = function(){};

var reitit$trie$TrieCompiler$data_matcher$dyn_31282 = (function (this$,params,data){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.data_matcher[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,params,data);
} else {
var m__4426__auto__ = (reitit.trie.data_matcher["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,params,data);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.data-matcher",this$);
}
}
});
reitit.trie.data_matcher = (function reitit$trie$data_matcher(this$,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$data_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$data_matcher$arity$3(this$,params,data);
} else {
return reitit$trie$TrieCompiler$data_matcher$dyn_31282.call(null,this$,params,data);
}
});

var reitit$trie$TrieCompiler$static_matcher$dyn_31283 = (function (this$,path,matcher){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.static_matcher[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,path,matcher);
} else {
var m__4426__auto__ = (reitit.trie.static_matcher["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,path,matcher);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.static-matcher",this$);
}
}
});
reitit.trie.static_matcher = (function reitit$trie$static_matcher(this$,path,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$static_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$static_matcher$arity$3(this$,path,matcher);
} else {
return reitit$trie$TrieCompiler$static_matcher$dyn_31283.call(null,this$,path,matcher);
}
});

var reitit$trie$TrieCompiler$wild_matcher$dyn_31284 = (function (this$,key,end,matcher){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.wild_matcher[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,key,end,matcher);
} else {
var m__4426__auto__ = (reitit.trie.wild_matcher["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,key,end,matcher);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.wild-matcher",this$);
}
}
});
reitit.trie.wild_matcher = (function reitit$trie$wild_matcher(this$,key,end,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$wild_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$wild_matcher$arity$4(this$,key,end,matcher);
} else {
return reitit$trie$TrieCompiler$wild_matcher$dyn_31284.call(null,this$,key,end,matcher);
}
});

var reitit$trie$TrieCompiler$catch_all_matcher$dyn_31285 = (function (this$,key,params,data){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.catch_all_matcher[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,key,params,data);
} else {
var m__4426__auto__ = (reitit.trie.catch_all_matcher["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,key,params,data);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.catch-all-matcher",this$);
}
}
});
reitit.trie.catch_all_matcher = (function reitit$trie$catch_all_matcher(this$,key,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4(this$,key,params,data);
} else {
return reitit$trie$TrieCompiler$catch_all_matcher$dyn_31285.call(null,this$,key,params,data);
}
});

var reitit$trie$TrieCompiler$linear_matcher$dyn_31286 = (function (this$,matchers,ordered_QMARK_){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.linear_matcher[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,matchers,ordered_QMARK_);
} else {
var m__4426__auto__ = (reitit.trie.linear_matcher["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,matchers,ordered_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.linear-matcher",this$);
}
}
});
reitit.trie.linear_matcher = (function reitit$trie$linear_matcher(this$,matchers,ordered_QMARK_){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$linear_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$linear_matcher$arity$3(this$,matchers,ordered_QMARK_);
} else {
return reitit$trie$TrieCompiler$linear_matcher$dyn_31286.call(null,this$,matchers,ordered_QMARK_);
}
});

var reitit$trie$TrieCompiler$_pretty$dyn_31287 = (function (this$,matcher){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie._pretty[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,matcher);
} else {
var m__4426__auto__ = (reitit.trie._pretty["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,matcher);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.-pretty",this$);
}
}
});
reitit.trie._pretty = (function reitit$trie$_pretty(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_pretty$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_pretty$arity$2(this$,matcher);
} else {
return reitit$trie$TrieCompiler$_pretty$dyn_31287.call(null,this$,matcher);
}
});

var reitit$trie$TrieCompiler$_path_matcher$dyn_31288 = (function (this$,matcher){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie._path_matcher[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,matcher);
} else {
var m__4426__auto__ = (reitit.trie._path_matcher["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,matcher);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.-path-matcher",this$);
}
}
});
reitit.trie._path_matcher = (function reitit$trie$_path_matcher(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_path_matcher$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_path_matcher$arity$2(this$,matcher);
} else {
return reitit$trie$TrieCompiler$_path_matcher$dyn_31288.call(null,this$,matcher);
}
});

reitit.trie.assoc_param = (function reitit$trie$assoc_param(match,k,v){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match);
return cljs.core.assoc.call(null,match,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc.call(null,params,k,v));
});
reitit.trie.common_prefix = (function reitit$trie$common_prefix(s1,s2){
var max = (function (){var x__4217__auto__ = cljs.core.count.call(null,s1);
var y__4218__auto__ = cljs.core.count.call(null,s2);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var i = (0);
while(true){
if((i > max)){
return cljs.core.subs.call(null,s1,(0),max);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.get.call(null,s1,i),cljs.core.get.call(null,s2,i))){
if((!((i === (0))))){
return cljs.core.subs.call(null,s1,(0),i);
} else {
return null;
}
} else {
var G__31289 = (i + (1));
i = G__31289;
continue;

}
}
break;
}
});
reitit.trie._keyword = (function reitit$trie$_keyword(s){
var temp__5733__auto__ = clojure.string.index_of.call(null,s,"/");
if(cljs.core.truth_(temp__5733__auto__)){
var i = temp__5733__auto__;
return cljs.core.keyword.call(null,cljs.core.subs.call(null,s,(0),i),cljs.core.subs.call(null,s,(i + (1))));
} else {
return cljs.core.keyword.call(null,s);
}
});
reitit.trie.split_path = (function reitit$trie$split_path(s,p__31290){
var map__31291 = p__31290;
var map__31291__$1 = (((((!((map__31291 == null))))?(((((map__31291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31291):map__31291);
var syntax = cljs.core.get.call(null,map__31291__$1,new cljs.core.Keyword(null,"syntax","syntax",-1637761676),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"bracket","bracket",-600276523),null], null), null));
var bracket_QMARK_ = new cljs.core.Keyword(null,"bracket","bracket",-600276523).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set.call(null,syntax));
var colon_QMARK_ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set.call(null,syntax));
var _static = (function (from,to){
if((!(cljs.core._EQ_.call(null,from,to)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,from,to)], null);
} else {
return null;
}
});
var _wild = (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_Wild.call(null,reitit.trie._keyword.call(null,cljs.core.subs.call(null,s,(from + (1)),to)))], null);
});
var _catch_all = (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_CatchAll.call(null,cljs.core.keyword.call(null,cljs.core.subs.call(null,s,(from + (1)),to)))], null);
});
var ss = null;
var from = (0);
var to = (0);
while(true){
if(cljs.core._EQ_.call(null,to,cljs.core.count.call(null,s))){
return cljs.core.concat.call(null,ss,_static.call(null,from,to));
} else {
var c = cljs.core.get.call(null,s,to);
if(cljs.core.truth_((function (){var and__4115__auto__ = bracket_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.call(null,"{",c);
} else {
return and__4115__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__4126__auto__ = clojure.string.index_of.call(null,s,"}",to);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.trie","unclosed-brackets","reitit.trie/unclosed-brackets",1599327560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),s], null));
}
})();
if(cljs.core._EQ_.call(null,"*",cljs.core.get.call(null,s,(to + (1))))){
var G__31293 = cljs.core.concat.call(null,ss,_static.call(null,from,to),_catch_all.call(null,(to + (1)),to_SINGLEQUOTE_));
var G__31294 = cljs.core.long$.call(null,(to_SINGLEQUOTE_ + (1)));
var G__31295 = cljs.core.long$.call(null,(to_SINGLEQUOTE_ + (1)));
ss = G__31293;
from = G__31294;
to = G__31295;
continue;
} else {
var G__31296 = cljs.core.concat.call(null,ss,_static.call(null,from,to),_wild.call(null,to,to_SINGLEQUOTE_));
var G__31297 = cljs.core.long$.call(null,(to_SINGLEQUOTE_ + (1)));
var G__31298 = cljs.core.long$.call(null,(to_SINGLEQUOTE_ + (1)));
ss = G__31296;
from = G__31297;
to = G__31298;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.call(null,":",c);
} else {
return and__4115__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__4126__auto__ = clojure.string.index_of.call(null,s,"/",to);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.count.call(null,s);
}
})();
if(cljs.core._EQ_.call(null,(1),(to_SINGLEQUOTE_ - to))){
var G__31299 = ss;
var G__31300 = from;
var G__31301 = (to + (1));
ss = G__31299;
from = G__31300;
to = G__31301;
continue;
} else {
var G__31302 = cljs.core.concat.call(null,ss,_static.call(null,from,to),_wild.call(null,to,to_SINGLEQUOTE_));
var G__31303 = cljs.core.long$.call(null,to_SINGLEQUOTE_);
var G__31304 = cljs.core.long$.call(null,to_SINGLEQUOTE_);
ss = G__31302;
from = G__31303;
to = G__31304;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.call(null,"*",c);
} else {
return and__4115__auto__;
}
})())){
var to_SINGLEQUOTE_ = cljs.core.count.call(null,s);
var G__31305 = cljs.core.concat.call(null,ss,_static.call(null,from,to),_catch_all.call(null,to,to_SINGLEQUOTE_));
var G__31306 = cljs.core.long$.call(null,to_SINGLEQUOTE_);
var G__31307 = cljs.core.long$.call(null,to_SINGLEQUOTE_);
ss = G__31305;
from = G__31306;
to = G__31307;
continue;
} else {
var G__31308 = ss;
var G__31309 = from;
var G__31310 = (to + (1));
ss = G__31308;
from = G__31309;
to = G__31310;
continue;

}
}
}
}
break;
}
});
reitit.trie.join_path = (function reitit$trie$join_path(xs){
return cljs.core.reduce.call(null,(function (s,x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),((typeof x === 'string')?x:(((x instanceof reitit.trie.Wild))?["{",cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.value),(1)),"}"].join(''):(((x instanceof reitit.trie.CatchAll))?["{*",cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.value),(1)),"}"].join(''):null)))].join('');
}),"",xs);
});
reitit.trie.normalize = (function reitit$trie$normalize(s,opts){
return reitit.trie.join_path.call(null,reitit.trie.split_path.call(null,s,opts));
});
reitit.trie._slice_start = (function reitit$trie$_slice_start(p__31311,p__31312){
var vec__31313 = p__31311;
var p1 = cljs.core.nth.call(null,vec__31313,(0),null);
var p1s = vec__31313;
var vec__31316 = p__31312;
var p2 = cljs.core.nth.call(null,vec__31316,(0),null);
var p2s = vec__31316;
var _split = (function (p){
var temp__5733__auto__ = (function (){var and__4115__auto__ = p;
if(cljs.core.truth_(and__4115__auto__)){
return clojure.string.index_of.call(null,p,"/");
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var i = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,p,(0),i),cljs.core.subs.call(null,p,i)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null);
}
});
var _slash = (function (cp,p){
if((!(typeof cp === 'string'))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cp], null);
} else {
if(((typeof cp === 'string') && (cljs.core.not_EQ_.call(null,((cp).length),cljs.core.count.call(null,p))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,p,cljs.core.count.call(null,cp))], null);
} else {
if(((typeof p === 'string') && (cljs.core.not.call(null,cp)))){
return _split.call(null,p);
} else {
return null;
}
}
}
});
var _postcut = (function (p__31319){
var vec__31320 = p__31319;
var p = cljs.core.nth.call(null,vec__31320,(0),null);
var pps = vec__31320;
var i = (function (){var and__4115__auto__ = p;
if(cljs.core.truth_(and__4115__auto__)){
return clojure.string.index_of.call(null,p,"/");
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = i;
if(cljs.core.truth_(and__4115__auto__)){
return (i > (0));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,p,(0),i),cljs.core.subs.call(null,p,i)], null),cljs.core.rest.call(null,pps));
} else {
return pps;
}
});
var _tailcut = (function (cp,p__31323){
var vec__31324 = p__31323;
var p = cljs.core.nth.call(null,vec__31324,(0),null);
var ps = vec__31324;
return cljs.core.concat.call(null,_slash.call(null,cp,p),cljs.core.rest.call(null,ps));
});
if((((p1 == null)) || ((p2 == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_postcut.call(null,p1s),_postcut.call(null,p2s)], null);
} else {
var temp__5733__auto__ = ((typeof p1 === 'string')?((typeof p2 === 'string')?reitit.trie.common_prefix.call(null,p1,p2):false):false);
if(cljs.core.truth_(temp__5733__auto__)){
var cp = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_tailcut.call(null,cp,p1s),_tailcut.call(null,cp,p2s)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1s,p2s], null);
}
}
});
reitit.trie._slice_end = (function reitit$trie$_slice_end(x,xs){
var i = ((typeof x === 'string')?clojure.string.index_of.call(null,x,"/"):null);
if(((typeof i === 'number') && ((i > (0))))){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,x,i)], null),xs);
} else {
return xs;
}
});
reitit.trie.conflicting_parts_QMARK_ = (function reitit$trie$conflicting_parts_QMARK_(parts1,parts2){
while(true){
var vec__31327 = reitit.trie._slice_start.call(null,parts1,parts2);
var vec__31330 = cljs.core.nth.call(null,vec__31327,(0),null);
var seq__31331 = cljs.core.seq.call(null,vec__31330);
var first__31332 = cljs.core.first.call(null,seq__31331);
var seq__31331__$1 = cljs.core.next.call(null,seq__31331);
var s1 = first__31332;
var ss1 = seq__31331__$1;
var vec__31333 = cljs.core.nth.call(null,vec__31327,(1),null);
var seq__31334 = cljs.core.seq.call(null,vec__31333);
var first__31335 = cljs.core.first.call(null,seq__31334);
var seq__31334__$1 = cljs.core.next.call(null,seq__31334);
var s2 = first__31335;
var ss2 = seq__31334__$1;
if(cljs.core._EQ_.call(null,s1,s2,null)){
return true;
} else {
if((((s1 == null)) || ((s2 == null)))){
return false;
} else {
if(((reitit.trie.catch_all_QMARK_.call(null,s1)) || (reitit.trie.catch_all_QMARK_.call(null,s2)))){
return true;
} else {
if(((reitit.trie.wild_QMARK_.call(null,s1)) || (reitit.trie.wild_QMARK_.call(null,s2)))){
var G__31336 = reitit.trie._slice_end.call(null,s1,ss1);
var G__31337 = reitit.trie._slice_end.call(null,s2,ss2);
parts1 = G__31336;
parts2 = G__31337;
continue;
} else {
if(cljs.core.not_EQ_.call(null,s1,s2)){
return false;
} else {
var G__31338 = ss1;
var G__31339 = ss2;
parts1 = G__31338;
parts2 = G__31339;
continue;

}
}
}
}
}
break;
}
});
reitit.trie.conflicting_paths_QMARK_ = (function reitit$trie$conflicting_paths_QMARK_(path1,path2,opts){
return reitit.trie.conflicting_parts_QMARK_.call(null,reitit.trie.split_path.call(null,path1,opts),reitit.trie.split_path.call(null,path2,opts));
});
reitit.trie._node = (function reitit$trie$_node(m){
return reitit.trie.map__GT_Node.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"wilds","wilds",132271223),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY], null),m));
});
reitit.trie._insert = (function reitit$trie$_insert(node,p__31340,fp,params,data){
var vec__31341 = p__31340;
var seq__31342 = cljs.core.seq.call(null,vec__31341);
var first__31343 = cljs.core.first.call(null,seq__31342);
var seq__31342__$1 = cljs.core.next.call(null,seq__31342);
var path = first__31343;
var ps = seq__31342__$1;
var node_SINGLEQUOTE_ = (((path == null))?cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"params","params",710516235),params):(((path instanceof reitit.trie.Wild))?(function (){var next = cljs.core.first.call(null,ps);
if((((next instanceof reitit.trie.Wild)) || ((next instanceof reitit.trie.CatchAll)))){
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.trie","following-parameters","reitit.trie/following-parameters",-1072685800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),fp,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,next], null))], null));
} else {
return cljs.core.update_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wilds","wilds",132271223),path], null),(function (n){
return reitit.trie._insert.call(null,(function (){var or__4126__auto__ = n;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.trie._node.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
})(),ps,fp,params,data);
}));
}
})():(((path instanceof reitit.trie.CatchAll))?cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),path], null),reitit.trie._node.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"data","data",-232669377),data], null))):((clojure.string.blank_QMARK_.call(null,path))?reitit.trie._insert.call(null,node,ps,fp,params,data):(function (){var or__4126__auto__ = cljs.core.reduce.call(null,(function (_,p__31348){
var vec__31349 = p__31348;
var p = cljs.core.nth.call(null,vec__31349,(0),null);
var n = cljs.core.nth.call(null,vec__31349,(1),null);
var temp__5733__auto__ = reitit.trie.common_prefix.call(null,p,path);
if(cljs.core.truth_(temp__5733__auto__)){
var cp = temp__5733__auto__;
if(cljs.core._EQ_.call(null,cp,p)){
var n_SINGLEQUOTE_ = reitit.trie._insert.call(null,n,cljs.core.conj.call(null,ps,cljs.core.subs.call(null,path,cljs.core.count.call(null,p))),fp,params,data);
return cljs.core.reduced.call(null,cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),p], null),n_SINGLEQUOTE_));
} else {
var rp = cljs.core.subs.call(null,p,((cp).length));
var rp_SINGLEQUOTE_ = cljs.core.subs.call(null,path,((cp).length));
var n_SINGLEQUOTE_ = reitit.trie._insert.call(null,reitit.trie._node.call(null,cljs.core.PersistentArrayMap.EMPTY),ps,fp,params,data);
var n_SINGLEQUOTE__SINGLEQUOTE_ = reitit.trie._insert.call(null,reitit.trie._node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.createAsIfByAssoc([rp,n,rp_SINGLEQUOTE_,n_SINGLEQUOTE_])], null)),null,null,null,null);
return cljs.core.reduced.call(null,cljs.core.update.call(null,node,new cljs.core.Keyword(null,"children","children",-940561982),(function (children){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,children,p),cp,n_SINGLEQUOTE__SINGLEQUOTE_);
})));
}
} else {
return null;
}
}),null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),path], null),reitit.trie._insert.call(null,reitit.trie._node.call(null,cljs.core.PersistentArrayMap.EMPTY),ps,fp,params,data));
}
})()
))));
var temp__5733__auto__ = cljs.core.get_in.call(null,node_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),""], null));
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return cljs.core.update.call(null,cljs.core.merge_with.call(null,cljs.core.merge,cljs.core.dissoc.call(null,node_SINGLEQUOTE_,new cljs.core.Keyword(null,"data","data",-232669377)),child),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.dissoc,"");
} else {
return node_SINGLEQUOTE_;
}
});
reitit.trie.decode = (function reitit$trie$decode(path,start,end,percent_QMARK_){
var param = cljs.core.subs.call(null,path,start,end);
if(cljs.core.truth_(percent_QMARK_)){
return decodeURIComponent(param);
} else {
return param;
}
});
reitit.trie.clojure_trie_compiler = (function reitit$trie$clojure_trie_compiler(){
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie31352 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.TrieCompiler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie31352 = (function (meta31353){
this.meta31353 = meta31353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie31352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31354,meta31353__$1){
var self__ = this;
var _31354__$1 = this;
return (new reitit.trie.t_reitit$trie31352(meta31353__$1));
}));

(reitit.trie.t_reitit$trie31352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31354){
var self__ = this;
var _31354__$1 = this;
return self__.meta31353;
}));

(reitit.trie.t_reitit$trie31352.prototype.reitit$trie$TrieCompiler$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie31352.prototype.reitit$trie$TrieCompiler$data_matcher$arity$3 = (function (_,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match.call(null,params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie31355 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie31355 = (function (meta31353,_,params,data,match,meta31356){
this.meta31353 = meta31353;
this._ = _;
this.params = params;
this.data = data;
this.match = match;
this.meta31356 = meta31356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie31355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31357,meta31356__$1){
var self__ = this;
var _31357__$1 = this;
return (new reitit.trie.t_reitit$trie31355(self__.meta31353,self__._,self__.params,self__.data,self__.match,meta31356__$1));
}));

(reitit.trie.t_reitit$trie31355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31357){
var self__ = this;
var _31357__$1 = this;
return self__.meta31356;
}));

(reitit.trie.t_reitit$trie31355.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie31355.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core._EQ_.call(null,i,max)){
return self__.match;
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie31355.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.data;
}));

(reitit.trie.t_reitit$trie31355.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
}));

(reitit.trie.t_reitit$trie31355.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie31355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta31353","meta31353",-129301686,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie31352","reitit.trie/t_reitit$trie31352",-2122856192,null)], null)),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta31356","meta31356",-280539290,null)], null);
}));

(reitit.trie.t_reitit$trie31355.cljs$lang$type = true);

(reitit.trie.t_reitit$trie31355.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie31355");

(reitit.trie.t_reitit$trie31355.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.trie/t_reitit$trie31355");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie31355.
 */
reitit.trie.__GT_t_reitit$trie31355 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie31355(meta31353__$1,___$2,params__$1,data__$1,match__$1,meta31356){
return (new reitit.trie.t_reitit$trie31355(meta31353__$1,___$2,params__$1,data__$1,match__$1,meta31356));
});

}

return (new reitit.trie.t_reitit$trie31355(self__.meta31353,___$1,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie31352.prototype.reitit$trie$TrieCompiler$static_matcher$arity$3 = (function (_,path,matcher){
var self__ = this;
var ___$1 = this;
var size = cljs.core.count.call(null,path);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie31358 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie31358 = (function (meta31353,_,path,matcher,size,meta31359){
this.meta31353 = meta31353;
this._ = _;
this.path = path;
this.matcher = matcher;
this.size = size;
this.meta31359 = meta31359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie31358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31360,meta31359__$1){
var self__ = this;
var _31360__$1 = this;
return (new reitit.trie.t_reitit$trie31358(self__.meta31353,self__._,self__.path,self__.matcher,self__.size,meta31359__$1));
}));

(reitit.trie.t_reitit$trie31358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31360){
var self__ = this;
var _31360__$1 = this;
return self__.meta31359;
}));

(reitit.trie.t_reitit$trie31358.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie31358.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,p){
var self__ = this;
var ___$2 = this;
if((!((max < (i + self__.size))))){
var j = (0);
while(true){
if(cljs.core._EQ_.call(null,j,self__.size)){
return reitit.trie.match.call(null,self__.matcher,(i + self__.size),max,p);
} else {
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,p,(i + j)),cljs.core.get.call(null,self__.path,j))){
var G__31376 = (j + (1));
j = G__31376;
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie31358.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.path,reitit.trie.view.call(null,self__.matcher)], null);
}));

(reitit.trie.t_reitit$trie31358.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth.call(null,self__.matcher) + (1));
}));

(reitit.trie.t_reitit$trie31358.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.count.call(null,self__.path);
}));

(reitit.trie.t_reitit$trie31358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta31353","meta31353",-129301686,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie31352","reitit.trie/t_reitit$trie31352",-2122856192,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta31359","meta31359",1291521572,null)], null);
}));

(reitit.trie.t_reitit$trie31358.cljs$lang$type = true);

(reitit.trie.t_reitit$trie31358.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie31358");

(reitit.trie.t_reitit$trie31358.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.trie/t_reitit$trie31358");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie31358.
 */
reitit.trie.__GT_t_reitit$trie31358 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie31358(meta31353__$1,___$2,path__$1,matcher__$1,size__$1,meta31359){
return (new reitit.trie.t_reitit$trie31358(meta31353__$1,___$2,path__$1,matcher__$1,size__$1,meta31359));
});

}

return (new reitit.trie.t_reitit$trie31358(self__.meta31353,___$1,path,matcher,size,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie31352.prototype.reitit$trie$TrieCompiler$wild_matcher$arity$4 = (function (_,key,end,matcher){
var self__ = this;
var ___$1 = this;
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie31361 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie31361 = (function (meta31353,_,key,end,matcher,meta31362){
this.meta31353 = meta31353;
this._ = _;
this.key = key;
this.end = end;
this.matcher = matcher;
this.meta31362 = meta31362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie31361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31363,meta31362__$1){
var self__ = this;
var _31363__$1 = this;
return (new reitit.trie.t_reitit$trie31361(self__.meta31353,self__._,self__.key,self__.end,self__.matcher,meta31362__$1));
}));

(reitit.trie.t_reitit$trie31361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31363){
var self__ = this;
var _31363__$1 = this;
return self__.meta31362;
}));

(reitit.trie.t_reitit$trie31361.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie31361.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((((i < max)) && (cljs.core.not_EQ_.call(null,cljs.core.get.call(null,path,i),self__.end)))){
var percent_QMARK_ = false;
var j = i;
while(true){
if(cljs.core._EQ_.call(null,max,j)){
var temp__5733__auto__ = reitit.trie.match.call(null,self__.matcher,max,max,path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return reitit.trie.assoc_param.call(null,match,self__.key,reitit.trie.decode.call(null,path,i,max,percent_QMARK_));
} else {
return null;
}
} else {
var c = cljs.core.get.call(null,path,j);
var pred__31367 = cljs.core._EQ_;
var expr__31368 = c;
if(cljs.core.truth_(pred__31367.call(null,self__.end,expr__31368))){
var temp__5733__auto__ = reitit.trie.match.call(null,self__.matcher,j,max,path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return reitit.trie.assoc_param.call(null,match,self__.key,reitit.trie.decode.call(null,path,i,j,percent_QMARK_));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__31367.call(null,"%",expr__31368))){
var G__31377 = true;
var G__31378 = (j + (1));
percent_QMARK_ = G__31377;
j = G__31378;
continue;
} else {
var G__31379 = percent_QMARK_;
var G__31380 = (j + (1));
percent_QMARK_ = G__31379;
j = G__31380;
continue;
}
}
}
break;
}
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie31361.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,reitit.trie.view.call(null,self__.matcher)], null);
}));

(reitit.trie.t_reitit$trie31361.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth.call(null,self__.matcher) + (1));
}));

(reitit.trie.t_reitit$trie31361.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie31361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta31353","meta31353",-129301686,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie31352","reitit.trie/t_reitit$trie31352",-2122856192,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"meta31362","meta31362",-1250317436,null)], null);
}));

(reitit.trie.t_reitit$trie31361.cljs$lang$type = true);

(reitit.trie.t_reitit$trie31361.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie31361");

(reitit.trie.t_reitit$trie31361.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.trie/t_reitit$trie31361");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie31361.
 */
reitit.trie.__GT_t_reitit$trie31361 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie31361(meta31353__$1,___$2,key__$1,end__$1,matcher__$1,meta31362){
return (new reitit.trie.t_reitit$trie31361(meta31353__$1,___$2,key__$1,end__$1,matcher__$1,meta31362));
});

}

return (new reitit.trie.t_reitit$trie31361(self__.meta31353,___$1,key,end,matcher,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie31352.prototype.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 = (function (_,key,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match.call(null,params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie31370 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie31370 = (function (meta31353,_,key,params,data,match,meta31371){
this.meta31353 = meta31353;
this._ = _;
this.key = key;
this.params = params;
this.data = data;
this.match = match;
this.meta31371 = meta31371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie31370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31372,meta31371__$1){
var self__ = this;
var _31372__$1 = this;
return (new reitit.trie.t_reitit$trie31370(self__.meta31353,self__._,self__.key,self__.params,self__.data,self__.match,meta31371__$1));
}));

(reitit.trie.t_reitit$trie31370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31372){
var self__ = this;
var _31372__$1 = this;
return self__.meta31371;
}));

(reitit.trie.t_reitit$trie31370.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie31370.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((i <= max)){
return reitit.trie.assoc_param.call(null,self__.match,self__.key,reitit.trie.decode.call(null,path,i,max,true));
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie31370.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.data], null)], null);
}));

(reitit.trie.t_reitit$trie31370.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
}));

(reitit.trie.t_reitit$trie31370.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie31370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta31353","meta31353",-129301686,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie31352","reitit.trie/t_reitit$trie31352",-2122856192,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta31371","meta31371",2107928915,null)], null);
}));

(reitit.trie.t_reitit$trie31370.cljs$lang$type = true);

(reitit.trie.t_reitit$trie31370.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie31370");

(reitit.trie.t_reitit$trie31370.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.trie/t_reitit$trie31370");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie31370.
 */
reitit.trie.__GT_t_reitit$trie31370 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie31370(meta31353__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta31371){
return (new reitit.trie.t_reitit$trie31370(meta31353__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta31371));
});

}

return (new reitit.trie.t_reitit$trie31370(self__.meta31353,___$1,key,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie31352.prototype.reitit$trie$TrieCompiler$linear_matcher$arity$3 = (function (_,matchers,ordered_QMARK_){
var self__ = this;
var ___$1 = this;
var matchers__$1 = cljs.core.vec.call(null,(cljs.core.truth_(ordered_QMARK_)?matchers:cljs.core.reverse.call(null,cljs.core.sort_by.call(null,cljs.core.juxt.call(null,reitit.trie.depth,reitit.trie.length),matchers))));
var size = cljs.core.count.call(null,matchers__$1);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie31373 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie31373 = (function (meta31353,_,matchers,ordered_QMARK_,size,meta31374){
this.meta31353 = meta31353;
this._ = _;
this.matchers = matchers;
this.ordered_QMARK_ = ordered_QMARK_;
this.size = size;
this.meta31374 = meta31374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie31373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31375,meta31374__$1){
var self__ = this;
var _31375__$1 = this;
return (new reitit.trie.t_reitit$trie31373(self__.meta31353,self__._,self__.matchers,self__.ordered_QMARK_,self__.size,meta31374__$1));
}));

(reitit.trie.t_reitit$trie31373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31375){
var self__ = this;
var _31375__$1 = this;
return self__.meta31374;
}));

(reitit.trie.t_reitit$trie31373.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie31373.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
var j = (0);
while(true){
if((j < self__.size)){
var or__4126__auto__ = reitit.trie.match.call(null,cljs.core.get.call(null,self__.matchers,j),i,max,path);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__31381 = (j + (1));
j = G__31381;
continue;
}
} else {
return null;
}
break;
}
}));

(reitit.trie.t_reitit$trie31373.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.mapv.call(null,reitit.trie.view,self__.matchers);
}));

(reitit.trie.t_reitit$trie31373.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (cljs.core.apply.call(null,cljs.core.max,(0),cljs.core.map.call(null,reitit.trie.depth,self__.matchers)) + (1));
}));

(reitit.trie.t_reitit$trie31373.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie31373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta31353","meta31353",-129301686,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie31352","reitit.trie/t_reitit$trie31352",-2122856192,null)], null)),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null),new cljs.core.Symbol(null,"ordered?","ordered?",-1842273081,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta31374","meta31374",616257724,null)], null);
}));

(reitit.trie.t_reitit$trie31373.cljs$lang$type = true);

(reitit.trie.t_reitit$trie31373.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie31373");

(reitit.trie.t_reitit$trie31373.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.trie/t_reitit$trie31373");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie31373.
 */
reitit.trie.__GT_t_reitit$trie31373 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie31373(meta31353__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta31374){
return (new reitit.trie.t_reitit$trie31373(meta31353__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta31374));
});

}

return (new reitit.trie.t_reitit$trie31373(self__.meta31353,___$1,matchers__$1,ordered_QMARK_,size,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie31352.prototype.reitit$trie$TrieCompiler$_pretty$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return reitit.trie.view.call(null,matcher);
}));

(reitit.trie.t_reitit$trie31352.prototype.reitit$trie$TrieCompiler$_path_matcher$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return (function (path){
var temp__5733__auto__ = reitit.trie.match.call(null,matcher,(0),cljs.core.count.call(null,path),path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return reitit.trie.__GT_Match.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
} else {
return null;
}
});
}));

(reitit.trie.t_reitit$trie31352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta31353","meta31353",-129301686,null)], null);
}));

(reitit.trie.t_reitit$trie31352.cljs$lang$type = true);

(reitit.trie.t_reitit$trie31352.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie31352");

(reitit.trie.t_reitit$trie31352.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.trie/t_reitit$trie31352");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie31352.
 */
reitit.trie.__GT_t_reitit$trie31352 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie31352(meta31353){
return (new reitit.trie.t_reitit$trie31352(meta31353));
});

}

return (new reitit.trie.t_reitit$trie31352(cljs.core.PersistentArrayMap.EMPTY));
});
reitit.trie.map_parameters = (function reitit$trie$map_parameters(keys){
return cljs.core.zipmap.call(null,keys,cljs.core.repeat.call(null,null));
});
/**
 * Returns a trie with routes added to it.
 */
reitit.trie.insert = (function reitit$trie$insert(var_args){
var G__31383 = arguments.length;
switch (G__31383) {
case 1:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$1 = (function (routes){
return reitit.trie.insert.call(null,null,routes);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$2 = (function (node,routes){
return cljs.core.reduce.call(null,(function (acc,p__31384){
var vec__31385 = p__31384;
var p = cljs.core.nth.call(null,vec__31385,(0),null);
var d = cljs.core.nth.call(null,vec__31385,(1),null);
return reitit.trie.insert.call(null,acc,p,d);
}),node,routes);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$3 = (function (node,path,data){
return reitit.trie.insert.call(null,node,path,data,null);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4 = (function (node,path,data,p__31388){
var map__31389 = p__31388;
var map__31389__$1 = (((((!((map__31389 == null))))?(((((map__31389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31389):map__31389);
var opts = map__31389__$1;
var parameters = cljs.core.get.call(null,map__31389__$1,new cljs.core.Keyword("reitit.trie","parameters","reitit.trie/parameters",-1304786787),reitit.trie.map_parameters);
var parts = reitit.trie.split_path.call(null,path,opts);
var params = parameters.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.remove.call(null,cljs.core.string_QMARK_,parts)));
return reitit.trie._insert.call(null,(function (){var or__4126__auto__ = node;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.trie._node.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
})(),reitit.trie.split_path.call(null,path,opts),path,params,data);
}));

(reitit.trie.insert.cljs$lang$maxFixedArity = 4);

/**
 * Returns a default [[TrieCompiler]].
 */
reitit.trie.compiler = (function reitit$trie$compiler(){
return reitit.trie.clojure_trie_compiler.call(null);
});
/**
 * Returns a compiled trie, to be used with [[pretty]] or [[path-matcher]].
 */
reitit.trie.compile = (function reitit$trie$compile(var_args){
var G__31393 = arguments.length;
switch (G__31393) {
case 1:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$1 = (function (options){
return reitit.trie.compile.call(null,options,reitit.trie.compiler.call(null));
}));

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$2 = (function (options,compiler){
return reitit.trie.compile.call(null,options,compiler,cljs.core.PersistentVector.EMPTY);
}));

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$3 = (function (p__31394,compiler,cp){
var map__31395 = p__31394;
var map__31395__$1 = (((((!((map__31395 == null))))?(((((map__31395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31395):map__31395);
var data = cljs.core.get.call(null,map__31395__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var params = cljs.core.get.call(null,map__31395__$1,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.get.call(null,map__31395__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wilds = cljs.core.get.call(null,map__31395__$1,new cljs.core.Keyword(null,"wilds","wilds",132271223));
var catch_all = cljs.core.get.call(null,map__31395__$1,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570));
var ends = (function (p__31397){
var map__31398 = p__31397;
var map__31398__$1 = (((((!((map__31398 == null))))?(((((map__31398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31398):map__31398);
var children__$1 = cljs.core.get.call(null,map__31398__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var or__4126__auto__ = cljs.core.keys.call(null,children__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/"], null);
}
});
var matchers = cljs.core.into.call(null,cljs.core.into.call(null,cljs.core.into.call(null,(function (){var G__31400 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(data)){
return cljs.core.conj.call(null,G__31400,reitit.trie.data_matcher.call(null,compiler,params,data));
} else {
return G__31400;
}
})(),(function (){var iter__4529__auto__ = (function reitit$trie$iter__31401(s__31402){
return (new cljs.core.LazySeq(null,(function (){
var s__31402__$1 = s__31402;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__31402__$1);
if(temp__5735__auto__){
var s__31402__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31402__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__31402__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__31404 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__31403 = (0);
while(true){
if((i__31403 < size__4528__auto__)){
var vec__31405 = cljs.core._nth.call(null,c__4527__auto__,i__31403);
var p = cljs.core.nth.call(null,vec__31405,(0),null);
var c = cljs.core.nth.call(null,vec__31405,(1),null);
cljs.core.chunk_append.call(null,b__31404,reitit.trie.static_matcher.call(null,compiler,p,reitit.trie.compile.call(null,c,compiler,cljs.core.conj.call(null,cp,p))));

var G__31432 = (i__31403 + (1));
i__31403 = G__31432;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31404),reitit$trie$iter__31401.call(null,cljs.core.chunk_rest.call(null,s__31402__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31404),null);
}
} else {
var vec__31408 = cljs.core.first.call(null,s__31402__$2);
var p = cljs.core.nth.call(null,vec__31408,(0),null);
var c = cljs.core.nth.call(null,vec__31408,(1),null);
return cljs.core.cons.call(null,reitit.trie.static_matcher.call(null,compiler,p,reitit.trie.compile.call(null,c,compiler,cljs.core.conj.call(null,cp,p))),reitit$trie$iter__31401.call(null,cljs.core.rest.call(null,s__31402__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,children);
})()),(function (){var iter__4529__auto__ = (function reitit$trie$iter__31411(s__31412){
return (new cljs.core.LazySeq(null,(function (){
var s__31412__$1 = s__31412;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__31412__$1);
if(temp__5735__auto__){
var s__31412__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31412__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__31412__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__31414 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__31413 = (0);
while(true){
if((i__31413 < size__4528__auto__)){
var vec__31415 = cljs.core._nth.call(null,c__4527__auto__,i__31413);
var p = cljs.core.nth.call(null,vec__31415,(0),null);
var c = cljs.core.nth.call(null,vec__31415,(1),null);
cljs.core.chunk_append.call(null,b__31414,(function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends.call(null,c);
if(cljs.core.next.call(null,ends__$1)){
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path.call(null,cljs.core.conj.call(null,cp,p))], null));
} else {
return reitit.trie.wild_matcher.call(null,compiler,pv,cljs.core.ffirst.call(null,ends__$1),reitit.trie.compile.call(null,c,compiler,cljs.core.conj.call(null,cp,pv)));
}
})());

var G__31433 = (i__31413 + (1));
i__31413 = G__31433;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31414),reitit$trie$iter__31411.call(null,cljs.core.chunk_rest.call(null,s__31412__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31414),null);
}
} else {
var vec__31418 = cljs.core.first.call(null,s__31412__$2);
var p = cljs.core.nth.call(null,vec__31418,(0),null);
var c = cljs.core.nth.call(null,vec__31418,(1),null);
return cljs.core.cons.call(null,(function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends.call(null,c);
if(cljs.core.next.call(null,ends__$1)){
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path.call(null,cljs.core.conj.call(null,cp,p))], null));
} else {
return reitit.trie.wild_matcher.call(null,compiler,pv,cljs.core.ffirst.call(null,ends__$1),reitit.trie.compile.call(null,c,compiler,cljs.core.conj.call(null,cp,pv)));
}
})(),reitit$trie$iter__31411.call(null,cljs.core.rest.call(null,s__31412__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,wilds);
})()),(function (){var iter__4529__auto__ = (function reitit$trie$iter__31421(s__31422){
return (new cljs.core.LazySeq(null,(function (){
var s__31422__$1 = s__31422;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__31422__$1);
if(temp__5735__auto__){
var s__31422__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31422__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__31422__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__31424 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__31423 = (0);
while(true){
if((i__31423 < size__4528__auto__)){
var vec__31425 = cljs.core._nth.call(null,c__4527__auto__,i__31423);
var p = cljs.core.nth.call(null,vec__31425,(0),null);
var c = cljs.core.nth.call(null,vec__31425,(1),null);
cljs.core.chunk_append.call(null,b__31424,reitit.trie.catch_all_matcher.call(null,compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)));

var G__31434 = (i__31423 + (1));
i__31423 = G__31434;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31424),reitit$trie$iter__31421.call(null,cljs.core.chunk_rest.call(null,s__31422__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31424),null);
}
} else {
var vec__31428 = cljs.core.first.call(null,s__31422__$2);
var p = cljs.core.nth.call(null,vec__31428,(0),null);
var c = cljs.core.nth.call(null,vec__31428,(1),null);
return cljs.core.cons.call(null,reitit.trie.catch_all_matcher.call(null,compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)),reitit$trie$iter__31421.call(null,cljs.core.rest.call(null,s__31422__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,catch_all);
})());
if((cljs.core.count.call(null,matchers) > (1))){
return reitit.trie.linear_matcher.call(null,compiler,matchers,false);
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,matchers),(1))){
return cljs.core.first.call(null,matchers);
} else {
return reitit.trie.data_matcher.call(null,compiler,cljs.core.PersistentArrayMap.EMPTY,null);

}
}
}));

(reitit.trie.compile.cljs$lang$maxFixedArity = 3);

/**
 * Returns a simplified EDN structure of a compiled trie for printing purposes.
 */
reitit.trie.pretty = (function reitit$trie$pretty(var_args){
var G__31436 = arguments.length;
switch (G__31436) {
case 1:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.pretty.call(null,compiled_trie,reitit.trie.compiler.call(null));
}));

(reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._pretty.call(null,compiler,compiled_trie);
}));

(reitit.trie.pretty.cljs$lang$maxFixedArity = 2);

/**
 * Returns a function of `path -> Match` from a compiled trie.
 */
reitit.trie.path_matcher = (function reitit$trie$path_matcher(var_args){
var G__31439 = arguments.length;
switch (G__31439) {
case 1:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.path_matcher.call(null,compiled_trie,reitit.trie.compiler.call(null));
}));

(reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._path_matcher.call(null,compiler,compiled_trie);
}));

(reitit.trie.path_matcher.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=trie.js.map?rel=1635172980492
