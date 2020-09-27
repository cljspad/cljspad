goog.provide('cljspad.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
/**
 * @define {string}
 */
cljspad.core.version = goog.define("cljspad.core.version","dev");
cljspad.core.initial_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,new cljs.core.Keyword(null,"error?","error?",-460689159),false,new cljs.core.Keyword(null,"version","version",425292698),cljspad.core.version,new cljs.core.Keyword(null,"manifest","manifest",-1386791956),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"source","source",-433931539),"",new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156),new cljs.core.Keyword(null,"readme","readme",-85226442)], null);
cljspad.core.system = (function cljspad$core$system(opts){
var compiler_state = cljspad.env.state();
var db = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljspad.core.initial_state,new cljs.core.Keyword(null,"opts","opts",155075701),opts));
cljspad.env.init(compiler_state,cljspad.core.version,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(db,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false);
}));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"compiler-state","compiler-state",631902768),compiler_state,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stdout","stdout",-531490018),cljspad.logging.stdout,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),cljspad.logging.stderr], null),new cljs.core.Keyword(null,"monaco","monaco",1623438155),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"db","db",993250759),db], null);
});
cljspad.core.loading = cljs.core.with_meta((function cljspad$core$loading(ctx__45100__auto__,$__45101__auto__){
var _ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var $45641 = $__45101__auto__;
return (function cljspad$core$loading_$_loading45642(props__45102__auto__){
var ___$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Loading..."], null));
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"loading",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.core.left_pane = cljs.core.with_meta((function cljspad$core$left_pane(ctx__45100__auto__,$__45101__auto__){
var _ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var $45644 = $__45101__auto__;
return (function cljspad$core$left_pane_$_left_pane45645(props__45102__auto__){
var ___$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45644,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cljspad-left-pane","div.cljspad-left-pane",-282183788),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.editor.editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"calc(100vH - 250px)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.repl.repl,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"200px"], null)], null)], null)], null));
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"left-pane",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.core.right_pane = cljs.core.with_meta((function cljspad$core$right_pane(ctx__45100__auto__,$__45101__auto__){
var _ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var $45650 = $__45101__auto__;
return (function cljspad$core$right_pane_$_right_pane45651(props__45102__auto__){
var ___$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45650,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cljspad-right-pane","div.cljspad-right-pane",1069726582),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.right_pane.right_pane_tabs], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.right_pane.readme], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.right_pane.libraries], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.right_pane.export$], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.right_pane.sandbox], null)], null));
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"right-pane",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.core.app = cljs.core.with_meta((function cljspad$core$app(ctx__45100__auto__,$__45101__auto__){
var _ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var $45659 = $__45101__auto__;
return (function cljspad$core$app_$_app45660(props__45102__auto__){
var ___$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45659,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cljspad-container","div.cljspad-container",-2071738217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.core.left_pane], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.core.right_pane], null)], null));
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"app",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.core.embed = cljs.core.with_meta((function cljspad$core$embed(ctx__45100__auto__,$__45101__auto__){
var _ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var $45665 = $__45101__auto__;
return (function cljspad$core$embed_$_embed45666(props__45102__auto__){
var ___$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45665,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.embed.tabs], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.embed.editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.embed.repl], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.right_pane.sandbox], null)], null));
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"embed",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.core.dominant_component = cljs.core.with_meta((function cljspad$core$dominant_component(ctx__45100__auto__,$__45101__auto__){
var map__45679 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var map__45679__$1 = (((((!((map__45679 == null))))?(((((map__45679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45679):map__45679);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45679__$1,new cljs.core.Keyword(null,"db","db",993250759));
var $45673 = $__45101__auto__;
return (function cljspad$core$dominant_component_$_dominant_component45677(props__45102__auto__){
var _ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45673,(function (){var vec__45692 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null));
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45692,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45692,(1),null);
var vec__45695 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null));
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45695,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45695,(1),null);
var vec__45698 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"embed","embed",-1354913349)], null));
var embed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45698,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45698,(1),null);
if(cljs.core.truth_(loading_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.core.loading], null);
} else {
if(cljs.core.truth_(error)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)], null);
} else {
if(cljs.core.truth_(embed_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.core.embed], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.core.app], null);

}
}
}
})());
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"dominant-component",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.core.root_component = cljs.core.with_meta((function cljspad$core$root_component(ctx__45100__auto__,$__45101__auto__){
var _ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var $45701 = $__45101__auto__;
return (function cljspad$core$root_component_$_root_component45702(props__45102__auto__){
var ___$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45701,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.effects.default_embed_tab], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.effects.monaco_ref], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.effects.gist], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.effects.highlight], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.effects.logging], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.effects.manifest], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.core.dominant_component], null)], null));
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"root-component",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
if((typeof cljspad !== 'undefined') && (typeof cljspad.core !== 'undefined') && (typeof cljspad.core.app_state !== 'undefined')){
} else {
cljspad.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
cljspad.core.render = (function cljspad$core$render(){
return module$node_modules$react_dom$index.render(rehook.dom.browser.bootstrap.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(cljspad.core.app_state),cljs.core.identity,cljs.core.clj__GT_js,cljspad.core.root_component),document.getElementById("app"));
});
cljspad.core.main = (function cljspad$core$main(opts){
var opts__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var sys = cljspad.core.system(opts__$1);
cljs.core.reset_BANG_(cljspad.core.app_state,sys);

return cljspad.core.render();
});
goog.exportSymbol('cljspad.core.main', cljspad.core.main);

//# sourceMappingURL=cljspad.core.js.map
