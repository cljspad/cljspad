goog.provide('shadow.cljs.bootstrap.browser');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.bootstrap !== 'undefined') && (typeof shadow.cljs.bootstrap.browser !== 'undefined') && (typeof shadow.cljs.bootstrap.browser.init_opts !== 'undefined')){
} else {
shadow.cljs.bootstrap.browser.init_opts = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/bootstrap",new cljs.core.Keyword(null,"load-on-init","load-on-init",337216877),cljs.core.PersistentVector.EMPTY], null));
}
shadow.cljs.bootstrap.browser.asset_path = (function shadow$cljs$bootstrap$browser$asset_path(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32089 = arguments.length;
var i__4737__auto___32090 = (0);
while(true){
if((i__4737__auto___32090 < len__4736__auto___32089)){
args__4742__auto__.push((arguments[i__4737__auto___32090]));

var G__32091 = (i__4737__auto___32090 + (1));
i__4737__auto___32090 = G__32091;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.cljs.bootstrap.browser.asset_path.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.cljs.bootstrap.browser.asset_path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.cljs.bootstrap.browser.init_opts)),args);
}));

(shadow.cljs.bootstrap.browser.asset_path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.cljs.bootstrap.browser.asset_path.cljs$lang$applyTo = (function (seq31935){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31935));
}));

shadow.cljs.bootstrap.browser.compile_state_ref_QMARK_ = (function shadow$cljs$bootstrap$browser$compile_state_ref_QMARK_(x){
return (((x instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(x))));
});
shadow.cljs.bootstrap.browser.transit_read = (function shadow$cljs$bootstrap$browser$transit_read(txt){
var r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.read(r,txt);
});
shadow.cljs.bootstrap.browser.transit_load = (function shadow$cljs$bootstrap$browser$transit_load(path,callback){
return goog.net.XhrIo.send(path,(function (res){
var req = this;
if(cljs.core.not(req.isSuccess())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed to download boostrap file:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," status:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(req.getStatus())].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null));
} else {
var data = shadow.cljs.bootstrap.browser.transit_read(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(data) : callback.call(null,data));
}
}));
});
shadow.cljs.bootstrap.browser.script_eval = (function shadow$cljs$bootstrap$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.bootstrap.browser.execute_load_BANG_ = (function shadow$cljs$bootstrap$browser$execute_load_BANG_(compile_state_ref,p__31978){
var map__31979 = p__31978;
var map__31979__$1 = (((((!((map__31979 == null))))?(((((map__31979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31979):map__31979);
var load_info = map__31979__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31979__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31979__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31979__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31979__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31979__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var temp__5735__auto___32099 = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.cljs.bootstrap.browser.init_opts));
if(cljs.core.truth_(temp__5735__auto___32099)){
var load_fn_32100 = temp__5735__auto___32099;
(load_fn_32100.cljs$core$IFn$_invoke$arity$1 ? load_fn_32100.cljs$core$IFn$_invoke$arity$1(load_info) : load_fn_32100.call(null,load_info));
} else {
}

var G__31981 = type;
var G__31981__$1 = (((G__31981 instanceof cljs.core.Keyword))?G__31981.fqn:null);
switch (G__31981__$1) {
case "analyzer":
var data = shadow.cljs.bootstrap.browser.transit_read(text);
return cljs.js.load_analysis_cache_BANG_(compile_state_ref,ns,data);

break;
case "js":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.cljs.bootstrap.env.loaded_ref,clojure.set.union,provides);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,clojure.set.union,provides);

var js = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),"\n"].join('');
return shadow.cljs.bootstrap.browser.script_eval(js);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31981__$1)].join('')));

}
});
shadow.cljs.bootstrap.browser.queue_task_BANG_ = (function shadow$cljs$bootstrap$browser$queue_task_BANG_(task){
return goog.async.run(task);
});
/**
 * loads a set of namespaces, must be called after init
 */
shadow.cljs.bootstrap.browser.load_namespaces = (function shadow$cljs$bootstrap$browser$load_namespaces(compile_state_ref,namespaces,cb){
if(shadow.cljs.bootstrap.browser.compile_state_ref_QMARK_(compile_state_ref)){
} else {
throw (new Error("Assert failed: (compile-state-ref? compile-state-ref)"));
}

if(cljs.core.set_QMARK_(namespaces)){
} else {
throw (new Error("Assert failed: (set? namespaces)"));
}

if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,namespaces)){
} else {
throw (new Error("Assert failed: (every? symbol? namespaces)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

var deps_to_load_for_ns = shadow.cljs.bootstrap.env.find_deps(namespaces);
var macro_deps = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31983_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31983_SHARP_),"$macros"].join(''));
}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"macro-requires","macro-requires",-798347981),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31982_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cljs","cljs",1492417629),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__31982_SHARP_));
}),deps_to_load_for_ns)))));
var deps_to_load_with_macros = shadow.cljs.bootstrap.env.find_deps(clojure.set.union.cljs$core$IFn$_invoke$arity$2(namespaces,macro_deps));
var compile_state = cljs.core.deref(compile_state_ref);
var things_already_loaded = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"provides","provides",-1634397992),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31984_SHARP_){
return clojure.set.superset_QMARK_(cljs.core.deref(shadow.cljs.bootstrap.env.loaded_ref),new cljs.core.Keyword(null,"provides","provides",-1634397992).cljs$core$IFn$_invoke$arity$1(p1__31984_SHARP_));
}),deps_to_load_with_macros)));
var js_files_to_load = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32002){
var map__32007 = p__32002;
var map__32007__$1 = (((((!((map__32007 == null))))?(((((map__32007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32007):map__32007);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32007__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32007__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var js_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32007__$1,new cljs.core.Keyword(null,"js-name","js-name",-1555671279));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"provides","provides",-1634397992),provides,new cljs.core.Keyword(null,"uri","uri",-774711847),shadow.cljs.bootstrap.browser.asset_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([js_name], 0))], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__31985_SHARP_){
return clojure.set.superset_QMARK_(cljs.core.deref(shadow.cljs.bootstrap.env.loaded_ref),new cljs.core.Keyword(null,"provides","provides",-1634397992).cljs$core$IFn$_invoke$arity$1(p1__31985_SHARP_));
}),deps_to_load_with_macros));
var analyzer_data_to_load = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32014){
var map__32015 = p__32014;
var map__32015__$1 = (((((!((map__32015 == null))))?(((((map__32015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32015):map__32015);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32015__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var ana_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32015__$1,new cljs.core.Keyword(null,"ana-name","ana-name",-1835677673));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"analyzer","analyzer",2075759383),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"uri","uri",-774711847),shadow.cljs.bootstrap.browser.asset_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ana_name], 0))], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31987_SHARP_){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compile_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(p1__31987_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177)], null)) == null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31986_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cljs","cljs",1492417629),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__31986_SHARP_));
}),deps_to_load_with_macros)));
var load_info = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,js_files_to_load),analyzer_data_to_load);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,clojure.set.union,things_already_loaded);

if(cljs.core.empty_QMARK_(load_info)){
var G__32034 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32034) : cb.call(null,G__32034));
} else {
var uris = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uri","uri",-774711847)),load_info);
var loader = (new goog.net.BulkLoader(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(uris)));
loader.listen(goog.net.EventType.SUCCESS,(function (e){
var texts = loader.getResponseTexts();
var seq__32050_32130 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info){
return (function (p1__31988_SHARP_,p2__31989_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31988_SHARP_,new cljs.core.Keyword(null,"text","text",-1790561697),p2__31989_SHARP_);
});})(texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info))
,load_info,texts));
var chunk__32051_32132 = null;
var count__32052_32133 = (0);
var i__32053_32134 = (0);
while(true){
if((i__32053_32134 < count__32052_32133)){
var load_32138 = chunk__32051_32132.cljs$core$IIndexed$_nth$arity$2(null,i__32053_32134);
shadow.cljs.bootstrap.browser.queue_task_BANG_(((function (seq__32050_32130,chunk__32051_32132,count__32052_32133,i__32053_32134,load_32138,texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info){
return (function (){
return shadow.cljs.bootstrap.browser.execute_load_BANG_(compile_state_ref,load_32138);
});})(seq__32050_32130,chunk__32051_32132,count__32052_32133,i__32053_32134,load_32138,texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info))
);


var G__32141 = seq__32050_32130;
var G__32142 = chunk__32051_32132;
var G__32143 = count__32052_32133;
var G__32144 = (i__32053_32134 + (1));
seq__32050_32130 = G__32141;
chunk__32051_32132 = G__32142;
count__32052_32133 = G__32143;
i__32053_32134 = G__32144;
continue;
} else {
var temp__5735__auto___32145 = cljs.core.seq(seq__32050_32130);
if(temp__5735__auto___32145){
var seq__32050_32146__$1 = temp__5735__auto___32145;
if(cljs.core.chunked_seq_QMARK_(seq__32050_32146__$1)){
var c__4556__auto___32147 = cljs.core.chunk_first(seq__32050_32146__$1);
var G__32148 = cljs.core.chunk_rest(seq__32050_32146__$1);
var G__32149 = c__4556__auto___32147;
var G__32150 = cljs.core.count(c__4556__auto___32147);
var G__32151 = (0);
seq__32050_32130 = G__32148;
chunk__32051_32132 = G__32149;
count__32052_32133 = G__32150;
i__32053_32134 = G__32151;
continue;
} else {
var load_32152 = cljs.core.first(seq__32050_32146__$1);
shadow.cljs.bootstrap.browser.queue_task_BANG_(((function (seq__32050_32130,chunk__32051_32132,count__32052_32133,i__32053_32134,load_32152,seq__32050_32146__$1,temp__5735__auto___32145,texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info){
return (function (){
return shadow.cljs.bootstrap.browser.execute_load_BANG_(compile_state_ref,load_32152);
});})(seq__32050_32130,chunk__32051_32132,count__32052_32133,i__32053_32134,load_32152,seq__32050_32146__$1,temp__5735__auto___32145,texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info))
);


var G__32155 = cljs.core.next(seq__32050_32146__$1);
var G__32156 = null;
var G__32157 = (0);
var G__32158 = (0);
seq__32050_32130 = G__32155;
chunk__32051_32132 = G__32156;
count__32052_32133 = G__32157;
i__32053_32134 = G__32158;
continue;
}
} else {
}
}
break;
}

return shadow.cljs.bootstrap.browser.queue_task_BANG_((function (){
var G__32068 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32068) : cb.call(null,G__32068));
}));
}));

return loader.load();
}
});
/**
 * :load fn for cljs.js, must be passed the compile-state as first arg
 * eg. :load (partial boot/load compile-state-ref)
 */
shadow.cljs.bootstrap.browser.load = (function shadow$cljs$bootstrap$browser$load(compile_state_ref,p__32069,cb){
var map__32070 = p__32069;
var map__32070__$1 = (((((!((map__32070 == null))))?(((((map__32070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32070):map__32070);
var rc = map__32070__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32070__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32070__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32070__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
if(shadow.cljs.bootstrap.browser.compile_state_ref_QMARK_(compile_state_ref)){
} else {
throw (new Error("Assert failed: (compile-state-ref? compile-state-ref)"));
}

if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? name)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

var ns = (cljs.core.truth_(macros)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"$macros"].join('')):name);
var or__4126__auto___32163 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(compile_state_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null));
if(cljs.core.truth_(or__4126__auto___32163)){
} else {
shadow.cljs.bootstrap.env.get_ns_info(ns);
}

return shadow.cljs.bootstrap.browser.load_namespaces(compile_state_ref,cljs.core.PersistentHashSet.createAsIfByAssoc([ns]),cb);
});
shadow.cljs.bootstrap.browser.fix_provide_conflict_BANG_ = (function shadow$cljs$bootstrap$browser$fix_provide_conflict_BANG_(){
return delete cljs["core$macros"];
});
/**
 * initializes the bootstrapped compiler by loading the dependency index
 * and loading cljs.core + macros (and namespaces specified in :load-on-init)
 */
shadow.cljs.bootstrap.browser.init = (function shadow$cljs$bootstrap$browser$init(compile_state_ref,p__32074,init_cb){
var map__32075 = p__32074;
var map__32075__$1 = (((((!((map__32075 == null))))?(((((map__32075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32075):map__32075);
var opts = map__32075__$1;
var load_on_init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32075__$1,new cljs.core.Keyword(null,"load-on-init","load-on-init",337216877));
if(shadow.cljs.bootstrap.browser.compile_state_ref_QMARK_(compile_state_ref)){
} else {
throw (new Error("Assert failed: (compile-state-ref? compile-state-ref)"));
}

if(cljs.core.map_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (map? opts)"));
}

if(cljs.core.fn_QMARK_(init_cb)){
} else {
throw (new Error("Assert failed: (fn? init-cb)"));
}

if(typeof new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts) === 'string'){
} else {
throw (new Error("Assert failed: (string? (:path opts))"));
}

cljs.core.reset_BANG_(shadow.cljs.bootstrap.browser.init_opts,opts);

if(cljs.core.truth_(cljs.core.deref(shadow.cljs.bootstrap.env.index_ref))){
return (init_cb.cljs$core$IFn$_invoke$arity$0 ? init_cb.cljs$core$IFn$_invoke$arity$0() : init_cb.call(null));
} else {
shadow.cljs.bootstrap.browser.fix_provide_conflict_BANG_();

shadow.cljs.bootstrap.env.create_cljs_user_BANG_();

return shadow.cljs.bootstrap.browser.transit_load(shadow.cljs.bootstrap.browser.asset_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/index.transit.json"], 0)),(function (data){
var map__32077_32185 = shadow.cljs.bootstrap.env.build_index(data);
var map__32077_32186__$1 = (((((!((map__32077_32185 == null))))?(((((map__32077_32185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32077_32185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32077_32185):map__32077_32185);
var idx_32187 = map__32077_32186__$1;
var exclude_32188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32077_32186__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,clojure.set.union,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__32073_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32073_SHARP_),"$macros"].join(''));
})),exclude_32188));

return shadow.cljs.bootstrap.browser.load_namespaces(compile_state_ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null),"null",new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),"null"], null), null),load_on_init),init_cb);
}));
}
});

//# sourceMappingURL=shadow.cljs.bootstrap.browser.js.map
