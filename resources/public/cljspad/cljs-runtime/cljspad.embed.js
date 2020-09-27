goog.provide('cljspad.embed');
cljspad.embed.tabs = cljs.core.with_meta((function cljspad$embed$tabs(ctx__45100__auto__,$__45101__auto__){
var map__45621 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var map__45621__$1 = (((((!((map__45621 == null))))?(((((map__45621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45621):map__45621);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45621__$1,new cljs.core.Keyword(null,"db","db",993250759));
var $45619 = $__45101__auto__;
return (function cljspad$embed$tabs_$_tabs45620(props__45102__auto__){
var _ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45619,(function (){var vec__45623 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156)], null));
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45623,(0),null);
var set_selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45623,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toolbar","div.toolbar",-1371089148),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button","div.button",-1553026367),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,new cljs.core.Keyword(null,"editor","editor",-989377770)))?"active":null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return (set_selected_tab.cljs$core$IFn$_invoke$arity$1 ? set_selected_tab.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"editor","editor",-989377770)) : set_selected_tab.call(null,new cljs.core.Keyword(null,"editor","editor",-989377770)));
})], null),"Editor"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button","div.button",-1553026367),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,new cljs.core.Keyword(null,"repl","repl",-35398667)))?"active":null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return (set_selected_tab.cljs$core$IFn$_invoke$arity$1 ? set_selected_tab.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repl","repl",-35398667)) : set_selected_tab.call(null,new cljs.core.Keyword(null,"repl","repl",-35398667)));
})], null),"REPL"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button","div.button",-1553026367),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,new cljs.core.Keyword(null,"sandbox","sandbox",-54636402)))?"active":null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return (set_selected_tab.cljs$core$IFn$_invoke$arity$1 ? set_selected_tab.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sandbox","sandbox",-54636402)) : set_selected_tab.call(null,new cljs.core.Keyword(null,"sandbox","sandbox",-54636402)));
})], null),"Output"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"auto"], null),new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/cljspad/cljspad"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cljspad-github-icon","span.cljspad-github-icon",1741262088)], null)], null)], null);
})());
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"tabs",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.embed.editor = cljs.core.with_meta((function cljspad$embed$editor(ctx__45100__auto__,$__45101__auto__){
var map__45629 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var map__45629__$1 = (((((!((map__45629 == null))))?(((((map__45629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45629):map__45629);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45629__$1,new cljs.core.Keyword(null,"db","db",993250759));
var $45627 = $__45101__auto__;
return (function cljspad$embed$editor_$_editor45628(props__45102__auto__){
var _ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45627,(function (){var vec__45631 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156)], null));
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45631,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45631,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,new cljs.core.Keyword(null,"editor","editor",-989377770)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.editor.editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"calc(100vH - 100px)"], null)], null)], null);
})());
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"editor",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.embed.repl = cljs.core.with_meta((function cljspad$embed$repl(ctx__45100__auto__,$__45101__auto__){
var map__45636 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var map__45636__$1 = (((((!((map__45636 == null))))?(((((map__45636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45636):map__45636);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45636__$1,new cljs.core.Keyword(null,"db","db",993250759));
var $45634 = $__45101__auto__;
return (function cljspad$embed$repl_$_repl45635(props__45102__auto__){
var _ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45634,(function (){var vec__45638 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156)], null));
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45638,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45638,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,new cljs.core.Keyword(null,"repl","repl",-35398667))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.repl.repl,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"calc(100vH - 50px)"], null)], null);
} else {
return null;
}
})());
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"repl",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));

//# sourceMappingURL=cljspad.embed.js.map
