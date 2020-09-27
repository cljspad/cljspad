goog.provide('cljspad.effects');
var module$node_modules$highlight_DOT_js$lib$index=shadow.js.require("module$node_modules$highlight_DOT_js$lib$index", {});
var module$node_modules$marked$lib$marked=shadow.js.require("module$node_modules$marked$lib$marked", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
cljspad.effects.manifest = cljs.core.with_meta((function cljspad$effects$manifest(ctx__45100__auto__,$__45101__auto__){
var map__45136 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var map__45136__$1 = (((((!((map__45136 == null))))?(((((map__45136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45136):map__45136);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45136__$1,new cljs.core.Keyword(null,"db","db",993250759));
var $45134 = $__45101__auto__;
return (function cljspad$effects$manifest_$_manifest45135(props__45102__auto__){
var _ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45134,(function (){var vec__45138 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698)], null));
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45138,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45138,(1),null);
return rehook.core.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
fetch(["/sandbox/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(version),"/cljspad.manifest.edn"].join('')).then((function (p1__45130_SHARP_){
return p1__45130_SHARP_.text();
})).then((function (p1__45131_SHARP_){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1(p1__45131_SHARP_);
})).then((function (p1__45132_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"manifest","manifest",-1386791956),version], null),p1__45132_SHARP_);
})).catch((function (p1__45133_SHARP_){
return console.log("Could not load manifest",p1__45133_SHARP_);
}));

return cljs.core.constantly(null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [version], null));
})());
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"manifest",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.effects.highlight = cljs.core.with_meta((function cljspad$effects$highlight(ctx__45100__auto__,$__45101__auto__){
var _ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var $45141 = $__45101__auto__;
return (function cljspad$effects$highlight_$_highlight45142(props__45102__auto__){
var ___$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45141,rehook.core.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
module$node_modules$highlight_DOT_js$lib$index.initHighlightingOnLoad();

module$node_modules$marked$lib$marked.setOptions(({"highlight": (function (code,lang){
if(clojure.string.blank_QMARK_(lang)){
return null;
} else {
return (module$node_modules$highlight_DOT_js$lib$index.highlight(lang,code)["value"]);
}
})}));

return cljs.core.constantly(null);
}),cljs.core.PersistentVector.EMPTY));
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"highlight",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.effects.logging = cljs.core.with_meta((function cljspad$effects$logging(ctx__45100__auto__,$__45101__auto__){
var _ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var $45143 = $__45101__auto__;
return (function cljspad$effects$logging_$_logging45144(props__45102__auto__){
var ___$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45143,rehook.core.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
cljspad.logging.init_BANG_();

return (function (){
return cljs.core.enable_console_print_BANG_();
});
}),cljs.core.PersistentVector.EMPTY));
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"logging",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.effects.load_gist = (function cljspad$effects$load_gist(db,compiler_state,id){
return fetch(["/api/v1/gist/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')).then((function (resp){
if(cljs.core.truth_((resp["ok"]))){
return resp.text();
} else {
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Failed to load gist ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),". Server responded with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((resp["status"]))].join('')], 0));
}
})).then((function (source){
if(cljs.core.truth_(source)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(db,cljs.core.assoc,new cljs.core.Keyword(null,"source","source",-433931539),source);

return cljspad.env.eval_form(compiler_state,source);
} else {
return null;
}
})).catch((function (err){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err], 0));
}));
});
cljspad.effects.gist = cljs.core.with_meta((function cljspad$effects$gist(ctx__45100__auto__,$__45101__auto__){
var map__45148 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var map__45148__$1 = (((((!((map__45148 == null))))?(((((map__45148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45148):map__45148);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45148__$1,new cljs.core.Keyword(null,"db","db",993250759));
var compiler_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45148__$1,new cljs.core.Keyword(null,"compiler-state","compiler-state",631902768));
var $45145 = $__45101__auto__;
return (function cljspad$effects$gist_$_gist45146(props__45102__auto__){
var _ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45145,(function (){var vec__45150 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"gist_id","gist_id",820238647)], null));
var gist_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45150,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45150,(1),null);
var vec__45153 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sandbox","ready?","sandbox/ready?",-1981651784)], null));
var sandbox_ready_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45153,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45153,(1),null);
return rehook.core.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_((function (){var and__4115__auto__ = gist_id;
if(cljs.core.truth_(and__4115__auto__)){
return sandbox_ready_QMARK_;
} else {
return and__4115__auto__;
}
})())){
cljspad.effects.load_gist(db,compiler_state,gist_id);
} else {
}

return cljs.core.constantly(null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(gist_id),sandbox_ready_QMARK_], null));
})());
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"gist",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.effects.monaco_ref = cljs.core.with_meta((function cljspad$effects$monaco_ref(ctx__45100__auto__,$__45101__auto__){
var map__45159 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var map__45159__$1 = (((((!((map__45159 == null))))?(((((map__45159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45159):map__45159);
var monaco = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45159__$1,new cljs.core.Keyword(null,"monaco","monaco",1623438155));
var $45157 = $__45101__auto__;
return (function cljspad$effects$monaco_ref_$_monaco_ref45158(props__45102__auto__){
var _ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45157,(function (){var ref = module$node_modules$react$index.useRef();
return rehook.core.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
cljs.core.reset_BANG_(monaco,ref);

return (function (){
return cljs.core.reset_BANG_(monaco,null);
});
}));
})());
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"monaco-ref",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.effects.default_embed_tab = cljs.core.with_meta((function cljspad$effects$default_embed_tab(ctx__45100__auto__,$__45101__auto__){
var map__45163 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var map__45163__$1 = (((((!((map__45163 == null))))?(((((map__45163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45163):map__45163);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45163__$1,new cljs.core.Keyword(null,"db","db",993250759));
var $45161 = $__45101__auto__;
return (function cljspad$effects$default_embed_tab_$_default_embed_tab45162(props__45102__auto__){
var _ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45161,(function (){var vec__45165 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"selected_tab","selected_tab",1528321764)], null));
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45165,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45165,(1),null);
var vec__45168 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"embed","embed",-1354913349)], null));
var embed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45168,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45168,(1),null);
return rehook.core.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(embed_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(db,cljs.core.assoc,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = selected_tab;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "editor";
}
})()));
} else {
}

return cljs.core.constantly(null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [embed_QMARK_,cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected_tab)], null));
})());
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"default-embed-tab",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));

//# sourceMappingURL=cljspad.effects.js.map
