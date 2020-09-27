goog.provide('cljspad.editor');
var module$monaco=shadow.js.require("module$monaco", {});
cljspad.editor.ref__GT_editor = (function cljspad$editor$ref__GT_editor(ref){
return goog.object.getValueByKeys(ref,"current","editor");
});
cljspad.editor.copy_to_clipboard = (function cljspad$editor$copy_to_clipboard(monaco_ref){
try{var editor = cljspad.editor.ref__GT_editor(monaco_ref);
var model = editor.getModel();
var value = model.getValue();
var elem = document.createElement("textarea");
document.body.appendChild(elem);

(elem["value"] = value);

elem.select();

document.execCommand("copy");

document.body.removeChild(elem);

return true;
}catch (e45176){var e = e45176;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));

return false;
}});
cljspad.editor.run_code = (function cljspad$editor$run_code(compiler_state,editor){
return (function (){
var model = editor.getModel();
var value = model.getValue();
return cljspad.env.eval_form(compiler_state,value);
});
});
cljspad.editor.toolbar = cljs.core.with_meta((function cljspad$editor$toolbar(ctx__45100__auto__,$__45101__auto__){
var map__45179 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var map__45179__$1 = (((((!((map__45179 == null))))?(((((map__45179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45179):map__45179);
var compiler_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45179__$1,new cljs.core.Keyword(null,"compiler-state","compiler-state",631902768));
var $45177 = $__45101__auto__;
return (function cljspad$editor$toolbar_$_toolbar45178(props__45102__auto__){
var map__45181 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
var map__45181__$1 = (((((!((map__45181 == null))))?(((((map__45181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45181):map__45181);
var run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45181__$1,new cljs.core.Keyword(null,"run","run",-1821166653));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45177,(function (){var vec__45183 = rehook.core.use_atom_path(compiler_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljspad.env","evaluating?","cljspad.env/evaluating?",1806474705)], null));
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45183,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45183,(1),null);
var run__$1 = new cljs.core.Keyword(null,"run","run",-1821166653).cljs$core$IFn$_invoke$arity$1(run);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toolbar","div.toolbar",-1371089148),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button","div.button",-1553026367),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return (run__$1.cljs$core$IFn$_invoke$arity$0 ? run__$1.cljs$core$IFn$_invoke$arity$0() : run__$1.call(null));
})], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cljspad-loading-icon","span.cljspad-loading-icon",1661102787)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cljspad-run-icon","span.cljspad-run-icon",-1281975748)], null)),"Run"], null)], null);
})());
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"toolbar",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.editor.editor = cljs.core.with_meta((function cljspad$editor$editor(ctx__45100__auto__,$__45101__auto__){
var map__45188 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var map__45188__$1 = (((((!((map__45188 == null))))?(((((map__45188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45188):map__45188);
var compiler_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45188__$1,new cljs.core.Keyword(null,"compiler-state","compiler-state",631902768));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45188__$1,new cljs.core.Keyword(null,"db","db",993250759));
var monaco = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45188__$1,new cljs.core.Keyword(null,"monaco","monaco",1623438155));
var $45186 = $__45101__auto__;
return (function cljspad$editor$editor_$_editor45187(props__45102__auto__){
var map__45190 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
var map__45190__$1 = (((((!((map__45190 == null))))?(((((map__45190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45190):map__45190);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45190__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45186,(function (){var vec__45192 = rehook.core.use_atom(monaco);
var monaco__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45192,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45192,(1),null);
var vec__45195 = rehook.core.use_state(null);
var run = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45195,(0),null);
var set_run = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45195,(1),null);
var vec__45198 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539)], null));
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45198,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45198,(1),null);
if(cljs.core.truth_(monaco__$1)){
rehook.core.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var editor__$1 = cljspad.editor.ref__GT_editor(monaco__$1);
var resize = (function (){
return editor__$1.layout();
});
var unload = (function (){
var model = editor__$1.getModel();
var value = model.getValue();
if(clojure.string.blank_QMARK_(value)){
return null;
} else {
return true;
}
});
window.addEventListener("resize",resize);

var G__45217_45234 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"run","run",-1821166653),cljspad.editor.run_code(compiler_state,editor__$1)], null);
(set_run.cljs$core$IFn$_invoke$arity$1 ? set_run.cljs$core$IFn$_invoke$arity$1(G__45217_45234) : set_run.call(null,G__45217_45234));

(window["onbeforeunload"] = unload);

return (function (){
return window.removeEventListener("resize",resize);
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.editor.toolbar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"run","run",-1821166653),run], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$monaco,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"language","language",-1591107564),"clojure",new cljs.core.Keyword(null,"theme","theme",-1247880880),"vs-light",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"value","value",305978217),source,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"minimap","minimap",-1428643929),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null)], null),new cljs.core.Keyword(null,"ref","ref",1289896967),monaco__$1], null)], null)], null);
} else {
return null;
}
})());
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"editor",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));

//# sourceMappingURL=cljspad.editor.js.map
