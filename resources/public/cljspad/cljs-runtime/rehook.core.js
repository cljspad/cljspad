goog.provide('rehook.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
rehook.core.use_state = (function rehook$core$use_state(initial_value){
return module$node_modules$react$index.useState(initial_value);
});
rehook.core.use_effect = (function rehook$core$use_effect(var_args){
var G__20711 = arguments.length;
switch (G__20711) {
case 1:
return rehook.core.use_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rehook.core.use_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rehook.core.use_effect.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useEffect(f);
}));

(rehook.core.use_effect.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return module$node_modules$react$index.useEffect(f,cljs.core.to_array(deps));
}));

(rehook.core.use_effect.cljs$lang$maxFixedArity = 2);

rehook.core.use_atom_fn = (function rehook$core$use_atom_fn(a,getter_fn,setter_fn){
var vec__20716 = rehook.core.use_state((function (){var G__20719 = cljs.core.deref(a);
return (getter_fn.cljs$core$IFn$_invoke$arity$1 ? getter_fn.cljs$core$IFn$_invoke$arity$1(G__20719) : getter_fn.call(null,G__20719));
})());
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20716,(0),null);
var set_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20716,(1),null);
rehook.core.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
cljs.core.add_watch(a,id,(function (_,___$1,prev_state,next_state){
var prev_value = (getter_fn.cljs$core$IFn$_invoke$arity$1 ? getter_fn.cljs$core$IFn$_invoke$arity$1(prev_state) : getter_fn.call(null,prev_state));
var next_value = (getter_fn.cljs$core$IFn$_invoke$arity$1 ? getter_fn.cljs$core$IFn$_invoke$arity$1(next_state) : getter_fn.call(null,next_state));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_value,next_value)){
return null;
} else {
return (set_val.cljs$core$IFn$_invoke$arity$1 ? set_val.cljs$core$IFn$_invoke$arity$1(next_value) : set_val.call(null,next_value));
}
}));

return (function (){
return cljs.core.remove_watch(a,id);
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,(function (p1__20715_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,setter_fn,p1__20715_SHARP_);
})], null);
});
/**
 * (use-atom my-atom)
 */
rehook.core.use_atom = (function rehook$core$use_atom(a){
return rehook.core.use_atom_fn(a,cljs.core.identity,(function (_,v){
return v;
}));
});
/**
 * (use-atom my-atom [:path :to :data])
 */
rehook.core.use_atom_path = (function rehook$core$use_atom_path(a,path){
return rehook.core.use_atom_fn(a,(function (p1__20727_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__20727_SHARP_,path);
}),(function (p1__20728_SHARP_,p2__20729_SHARP_){
return cljs.core.assoc_in(p1__20728_SHARP_,path,p2__20729_SHARP_);
}));
});

//# sourceMappingURL=rehook.core.js.map
