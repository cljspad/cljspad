goog.provide('rehook.dom.util');
rehook.dom.util.merge_arguments = (function rehook$dom$util$merge_arguments(args,extra_args){
var map__20813 = extra_args;
var map__20813__$1 = (((((!((map__20813 == null))))?(((((map__20813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20813):map__20813);
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20813__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20813__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var G__20815 = args;
var G__20815__$1 = (cljs.core.truth_((function (){var or__4126__auto__ = id;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(args);
}
})())?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__20815,new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__20811_SHARP_){
var or__4126__auto__ = id;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return p1__20811_SHARP_;
}
})):G__20815);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return className;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__20815__$1,new cljs.core.Keyword(null,"className","className",-1983287057),(function (p1__20812_SHARP_){
if(cljs.core.truth_((function (){var and__4115__auto__ = p1__20812_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return className;
} else {
return and__4115__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20812_SHARP_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(className)].join('');
} else {
var or__4126__auto__ = p1__20812_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return className;
}
}
}));
} else {
return G__20815__$1;
}
});
rehook.dom.util.keyword__GT_elem = cljs.core.memoize((function (kw){
var elem = cljs.core.name(kw);
if(((clojure.string.includes_QMARK_(elem,".")) || (clojure.string.includes_QMARK_(elem,"#")))){
var vec__20820 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(elem,/\./);
var seq__20821 = cljs.core.seq(vec__20820);
var first__20822 = cljs.core.first(seq__20821);
var seq__20821__$1 = cljs.core.next(seq__20821);
var elem__$1 = first__20822;
var class_names = seq__20821__$1;
var vec__20823 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(elem__$1,/#/);
var elem__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20823,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20823,(1),null);
var vec__20826 = (cljs.core.truth_(id)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,class_names], null):(function (){var classes_and_id = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20819_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__20819_SHARP_,/#/);
}),class_names);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,classes_and_id)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,classes_and_id)], null);
})());
var id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20826,(0),null);
var class_names__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20826,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem__$2,(function (){var G__20831 = cljs.core.PersistentArrayMap.EMPTY;
var G__20831__$1 = (cljs.core.truth_(cljs.core.not_empty(class_names__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20831,new cljs.core.Keyword(null,"className","className",-1983287057),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class_names__$1)):G__20831);
if(cljs.core.truth_(id__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20831__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id__$1);
} else {
return G__20831__$1;
}
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem,cljs.core.PersistentArrayMap.EMPTY], null);
}
}));

//# sourceMappingURL=rehook.dom.util.js.map
