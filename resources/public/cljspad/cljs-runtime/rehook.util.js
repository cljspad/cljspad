goog.provide('rehook.util');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
rehook.util.react_props = (function rehook$util$react_props(props){
var G__20816 = props;
var G__20816__$1 = (((G__20816 == null))?null:cljs.core.meta(G__20816));
if((G__20816__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("react","props","react/props",-460108226).cljs$core$IFn$_invoke$arity$1(G__20816__$1);
}
});
rehook.util.children = (function rehook$util$children(props){
var G__20817 = props;
var G__20817__$1 = (((G__20817 == null))?null:rehook.util.react_props(G__20817));
if((G__20817__$1 == null)){
return null;
} else {
return (G__20817__$1["children"]);
}
});
rehook.util.child_seq = (function rehook$util$child_seq(props){
var G__20829 = props;
var G__20829__$1 = (((G__20829 == null))?null:rehook.util.children(G__20829));
if((G__20829__$1 == null)){
return null;
} else {
return module$node_modules$react$index.Children.toArray(G__20829__$1);
}
});
rehook.util.rehook_component_QMARK_ = (function rehook$util$rehook_component_QMARK_(e){
return new cljs.core.Keyword("rehook","component","rehook/component",355859388).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(e)) === true;
});
rehook.util.display_name = (function rehook$util$display_name(e){
if((e instanceof cljs.core.Keyword)){
return cljs.core.name(e);
} else {
if(rehook.util.rehook_component_QMARK_(e)){
return new cljs.core.Keyword("rehook","name","rehook/name",639402515).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(e));
} else {
return (e["displayName"]);

}
}
});

//# sourceMappingURL=rehook.util.js.map
