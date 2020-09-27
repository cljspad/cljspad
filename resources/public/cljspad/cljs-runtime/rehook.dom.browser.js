goog.provide('rehook.dom.browser');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
rehook.dom.browser.handle_type = (function rehook$dom$browser$handle_type(args,e,ctx,$){
if(cljs.core.truth_((function (){var fexpr__20872 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,">",">",-555517146),null,new cljs.core.Keyword(null,"<>","<>",1280186386),null], null), null);
return (fexpr__20872.cljs$core$IFn$_invoke$arity$1 ? fexpr__20872.cljs$core$IFn$_invoke$arity$1(e) : fexpr__20872.call(null,e));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react$index.Fragment,args], null);
} else {
if((e instanceof cljs.core.Keyword)){
var vec__20873 = rehook.dom.util.keyword__GT_elem(e);
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20873,(0),null);
var extra_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20873,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem,rehook.dom.util.merge_arguments(args,extra_args)], null);
} else {
if(rehook.util.rehook_component_QMARK_(e)){
var rehook_component = (function (){var G__20876 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("rehook.dom","bootstrap","rehook.dom/bootstrap",370172254),$], 0));
var G__20877 = $;
return (e.cljs$core$IFn$_invoke$arity$2 ? e.cljs$core$IFn$_invoke$arity$2(G__20876,G__20877) : e.call(null,G__20876,G__20877));
})();
if(cljs.core.truth_((rehook_component["displayName"]))){
} else {
(rehook_component["displayName"] = rehook.util.display_name(e));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook_component,args], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,args], null);

}
}
}
});
rehook.dom.browser.bootstrap = (function rehook$dom$browser$bootstrap(var_args){
var G__20895 = arguments.length;
switch (G__20895) {
case 4:
return rehook.dom.browser.bootstrap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return rehook.dom.browser.bootstrap.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return rehook.dom.browser.bootstrap.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___20943 = arguments.length;
var i__4737__auto___20944 = (0);
while(true){
if((i__4737__auto___20944 < len__4736__auto___20943)){
args_arr__4757__auto__.push((arguments[i__4737__auto___20944]));

var G__20945 = (i__4737__auto___20944 + (1));
i__4737__auto___20944 = G__20945;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((6)),(0),null));
return rehook.dom.browser.bootstrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4758__auto__);

}
});

(rehook.dom.browser.bootstrap.cljs$core$IFn$_invoke$arity$4 = (function (ctx,ctx_f,props_f,e){
var ctx__$1 = (ctx_f.cljs$core$IFn$_invoke$arity$2 ? ctx_f.cljs$core$IFn$_invoke$arity$2(ctx,e) : ctx_f.call(null,ctx,e));
var vec__20901 = rehook.dom.browser.handle_type(cljs.core.PersistentArrayMap.EMPTY,e,ctx__$1,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(rehook.dom.browser.bootstrap,ctx__$1,ctx_f,props_f));
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20901,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20901,(1),null);
var props = (function (){var G__20905 = ((cljs.core.contains_QMARK_(args,new cljs.core.Keyword("rehook","id","rehook/id",-166238114)))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.Keyword("rehook","id","rehook/id",-166238114)):args);
return (props_f.cljs$core$IFn$_invoke$arity$1 ? props_f.cljs$core$IFn$_invoke$arity$1(G__20905) : props_f.call(null,G__20905));
})();
if(cljs.core.truth_(elem)){
if(cljs.core.truth_(module$node_modules$react$index.isValidElement(elem))){
var props_SINGLEQUOTE_ = (function (){var G__20906 = goog.object.clone((elem["props"]));
goog.object.extend(G__20906,props);

return G__20906;
})();
return module$node_modules$react$index.cloneElement(elem,props_SINGLEQUOTE_);
} else {
return module$node_modules$react$index.createElement(elem,props);
}
} else {
return null;
}
}));

(rehook.dom.browser.bootstrap.cljs$core$IFn$_invoke$arity$5 = (function (ctx,ctx_f,props_f,e,args){
var ctx__$1 = (ctx_f.cljs$core$IFn$_invoke$arity$2 ? ctx_f.cljs$core$IFn$_invoke$arity$2(ctx,e) : ctx_f.call(null,ctx,e));
var vec__20907 = rehook.dom.browser.handle_type(args,e,ctx__$1,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(rehook.dom.browser.bootstrap,ctx__$1,ctx_f,props_f));
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20907,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20907,(1),null);
var props = (function (){var G__20910 = ((cljs.core.contains_QMARK_(args__$1,new cljs.core.Keyword("rehook","id","rehook/id",-166238114)))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(args__$1,new cljs.core.Keyword("rehook","id","rehook/id",-166238114)):args__$1);
return (props_f.cljs$core$IFn$_invoke$arity$1 ? props_f.cljs$core$IFn$_invoke$arity$1(G__20910) : props_f.call(null,G__20910));
})();
if(cljs.core.truth_(elem)){
if(cljs.core.truth_(module$node_modules$react$index.isValidElement(elem))){
var props_SINGLEQUOTE_ = (function (){var G__20920 = goog.object.clone((elem["props"]));
goog.object.extend(G__20920,props);

return G__20920;
})();
return module$node_modules$react$index.cloneElement(elem,props_SINGLEQUOTE_);
} else {
return module$node_modules$react$index.createElement(elem,props);
}
} else {
return null;
}
}));

(rehook.dom.browser.bootstrap.cljs$core$IFn$_invoke$arity$6 = (function (ctx,ctx_f,props_f,e,args,child){
var ctx__$1 = (ctx_f.cljs$core$IFn$_invoke$arity$2 ? ctx_f.cljs$core$IFn$_invoke$arity$2(ctx,e) : ctx_f.call(null,ctx,e));
var vec__20921 = rehook.dom.browser.handle_type(args,e,ctx__$1,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(rehook.dom.browser.bootstrap,ctx__$1,ctx_f,props_f));
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20921,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20921,(1),null);
if(cljs.core.truth_(elem)){
if(cljs.core.seq_QMARK_(child)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,elem,(function (){var G__20925 = ((cljs.core.contains_QMARK_(args__$1,new cljs.core.Keyword("rehook","id","rehook/id",-166238114)))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(args__$1,new cljs.core.Keyword("rehook","id","rehook/id",-166238114)):args__$1);
return (props_f.cljs$core$IFn$_invoke$arity$1 ? props_f.cljs$core$IFn$_invoke$arity$1(G__20925) : props_f.call(null,G__20925));
})(),child);
} else {
return module$node_modules$react$index.createElement(elem,(function (){var G__20927 = ((cljs.core.contains_QMARK_(args__$1,new cljs.core.Keyword("rehook","id","rehook/id",-166238114)))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(args__$1,new cljs.core.Keyword("rehook","id","rehook/id",-166238114)):args__$1);
return (props_f.cljs$core$IFn$_invoke$arity$1 ? props_f.cljs$core$IFn$_invoke$arity$1(G__20927) : props_f.call(null,G__20927));
})(),child);
}
} else {
return null;
}
}));

(rehook.dom.browser.bootstrap.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ctx_f,props_f,e,args,child,children){
var ctx__$1 = (ctx_f.cljs$core$IFn$_invoke$arity$2 ? ctx_f.cljs$core$IFn$_invoke$arity$2(ctx,e) : ctx_f.call(null,ctx,e));
var vec__20931 = rehook.dom.browser.handle_type(args,e,ctx__$1,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(rehook.dom.browser.bootstrap,ctx__$1,ctx_f,props_f));
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20931,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20931,(1),null);
if(cljs.core.truth_(elem)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,elem,(function (){var G__20934 = ((cljs.core.contains_QMARK_(args__$1,new cljs.core.Keyword("rehook","id","rehook/id",-166238114)))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(args__$1,new cljs.core.Keyword("rehook","id","rehook/id",-166238114)):args__$1);
return (props_f.cljs$core$IFn$_invoke$arity$1 ? props_f.cljs$core$IFn$_invoke$arity$1(G__20934) : props_f.call(null,G__20934));
})(),cljs.core.cons(child,children));
} else {
return null;
}
}));

/** @this {Function} */
(rehook.dom.browser.bootstrap.cljs$lang$applyTo = (function (seq20888){
var G__20889 = cljs.core.first(seq20888);
var seq20888__$1 = cljs.core.next(seq20888);
var G__20890 = cljs.core.first(seq20888__$1);
var seq20888__$2 = cljs.core.next(seq20888__$1);
var G__20891 = cljs.core.first(seq20888__$2);
var seq20888__$3 = cljs.core.next(seq20888__$2);
var G__20892 = cljs.core.first(seq20888__$3);
var seq20888__$4 = cljs.core.next(seq20888__$3);
var G__20893 = cljs.core.first(seq20888__$4);
var seq20888__$5 = cljs.core.next(seq20888__$4);
var G__20894 = cljs.core.first(seq20888__$5);
var seq20888__$6 = cljs.core.next(seq20888__$5);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20889,G__20890,G__20891,G__20892,G__20893,G__20894,seq20888__$6);
}));

(rehook.dom.browser.bootstrap.cljs$lang$maxFixedArity = (6));


//# sourceMappingURL=rehook.dom.browser.js.map
