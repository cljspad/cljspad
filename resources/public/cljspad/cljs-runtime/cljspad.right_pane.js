goog.provide('cljspad.right_pane');
var module$node_modules$highlight_DOT_js$lib$index=shadow.js.require("module$node_modules$highlight_DOT_js$lib$index", {});
var module$node_modules$marked$lib$marked=shadow.js.require("module$node_modules$marked$lib$marked", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
cljspad.right_pane.library_meta = cljs.core.with_meta((function cljspad$right_pane$library_meta(ctx__45100__auto__,$__45101__auto__){
var _ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var $45220 = $__45101__auto__;
return (function cljspad$right_pane$library_meta_$_library_meta45221(props__45102__auto__){
var map__45222 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
var map__45222__$1 = (((((!((map__45222 == null))))?(((((map__45222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45222):map__45222);
var library = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45222__$1,new cljs.core.Keyword(null,"library","library",467978288));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45220,(function (){var vec__45224 = rehook.core.use_state(false);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45224,(0),null);
var set_expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45224,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"5px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button","div.button",-1553026367),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__45227 = cljs.core.not(expanded);
return (set_expanded.cljs$core$IFn$_invoke$arity$1 ? set_expanded.cljs$core$IFn$_invoke$arity$1(G__45227) : set_expanded.call(null,G__45227));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"300px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(library)," (",cljs.core.name(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(library)),")"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"className","className",-1983287057),(cljs.core.truth_(expanded)?"cljspad-caret-down-icon":"cljspad-caret-right-icon")], null)], null)], null),(cljs.core.truth_(expanded)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"5px",new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"5px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"5px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"5px",new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),"10px",new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),"10px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"4px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(library);
if(cljs.core.truth_(temp__5733__auto__)){
var coord = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.cljspad-code","code.cljspad-code",1032042491),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coord], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.cljspad-code","code.cljspad-code",1032042491),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(library)], null);
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"10px",new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"10px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"About"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(library)], null)], null),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(library);
if(cljs.core.truth_(temp__5735__auto__)){
var website = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Website"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),website], null),website], null)], null)], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(library);
if(cljs.core.truth_(temp__5735__auto__)){
var render_fn = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Render fn"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.cljspad-code","code.cljspad-code",1032042491),cljs.core.str.cljs$core$IFn$_invoke$arity$1(render_fn)], null)], null)], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(library));
if(temp__5735__auto__){
var requires = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Namespaces"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var iter__4529__auto__ = (function cljspad$right_pane$library_meta_$_library_meta45221_$_iter__45230(s__45231){
return (new cljs.core.LazySeq(null,(function (){
var s__45231__$1 = s__45231;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__45231__$1);
if(temp__5735__auto____$1){
var s__45231__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45231__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__45231__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__45233 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__45232 = (0);
while(true){
if((i__45232 < size__4528__auto__)){
var r = cljs.core._nth(c__4527__auto__,i__45232);
cljs.core.chunk_append(b__45233,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.cljspad-code","code.cljspad-code",1032042491),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0))], null)], null));

var G__45433 = (i__45232 + (1));
i__45232 = G__45433;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45233),cljspad$right_pane$library_meta_$_library_meta45221_$_iter__45230(cljs.core.chunk_rest(s__45231__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45233),null);
}
} else {
var r = cljs.core.first(s__45231__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.cljspad-code","code.cljspad-code",1032042491),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0))], null)], null),cljspad$right_pane$library_meta_$_library_meta45221_$_iter__45230(cljs.core.rest(s__45231__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(requires);
})()], null)], null);
} else {
return null;
}
})()], null)], null),(function (){var temp__5735__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"examples","examples",-473712556).cljs$core$IFn$_invoke$arity$1(library));
if(temp__5735__auto__){
var examples = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Examples"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"10px",new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4529__auto__ = (function cljspad$right_pane$library_meta_$_library_meta45221_$_iter__45236(s__45237){
return (new cljs.core.LazySeq(null,(function (){
var s__45237__$1 = s__45237;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__45237__$1);
if(temp__5735__auto____$1){
var s__45237__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45237__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__45237__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__45239 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__45238 = (0);
while(true){
if((i__45238 < size__4528__auto__)){
var example = cljs.core._nth(c__4527__auto__,i__45238);
cljs.core.chunk_append(b__45239,(function (){var href = ["https://cljspad.dev/gist/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gist-id","gist-id",-836926700).cljs$core$IFn$_invoke$arity$1(example))].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["loaded-library-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(library)),"-example-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(example))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(example)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),href], null)], null)], null);
})());

var G__45442 = (i__45238 + (1));
i__45238 = G__45442;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45239),cljspad$right_pane$library_meta_$_library_meta45221_$_iter__45236(cljs.core.chunk_rest(s__45237__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45239),null);
}
} else {
var example = cljs.core.first(s__45237__$2);
return cljs.core.cons((function (){var href = ["https://cljspad.dev/gist/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gist-id","gist-id",-836926700).cljs$core$IFn$_invoke$arity$1(example))].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["loaded-library-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(library)),"-example-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(example))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(example)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),href], null)], null)], null);
})(),cljspad$right_pane$library_meta_$_library_meta45221_$_iter__45236(cljs.core.rest(s__45237__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(examples);
})()], null)], null)], null);
} else {
return null;
}
})()], null):null)], null);
})());
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"library-meta",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.right_pane.manifest_libraries = cljs.core.with_meta((function cljspad$right_pane$manifest_libraries(ctx__45100__auto__,$__45101__auto__){
var _ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var $45249 = $__45101__auto__;
return (function cljspad$right_pane$manifest_libraries_$_manifest_libraries45250(props__45102__auto__){
var map__45251 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
var map__45251__$1 = (((((!((map__45251 == null))))?(((((map__45251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45251):map__45251);
var manifest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45251__$1,new cljs.core.Keyword(null,"manifest","manifest",-1386791956));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45249,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function cljspad$right_pane$manifest_libraries_$_manifest_libraries45250_$_iter__45256(s__45257){
return (new cljs.core.LazySeq(null,(function (){
var s__45257__$1 = s__45257;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45257__$1);
if(temp__5735__auto__){
var s__45257__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45257__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__45257__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__45259 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__45258 = (0);
while(true){
if((i__45258 < size__4528__auto__)){
var library = cljs.core._nth(c__4527__auto__,i__45258);
cljs.core.chunk_append(b__45259,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["loaded-library-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(library))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.right_pane.library_meta,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"library","library",467978288),library,new cljs.core.Keyword(null,"available?","available?",760421264),false], null)], null)], null));

var G__45448 = (i__45258 + (1));
i__45258 = G__45448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45259),cljspad$right_pane$manifest_libraries_$_manifest_libraries45250_$_iter__45256(cljs.core.chunk_rest(s__45257__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45259),null);
}
} else {
var library = cljs.core.first(s__45257__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["loaded-library-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(library))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.right_pane.library_meta,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"library","library",467978288),library,new cljs.core.Keyword(null,"available?","available?",760421264),false], null)], null)], null),cljspad$right_pane$manifest_libraries_$_manifest_libraries45250_$_iter__45256(cljs.core.rest(s__45257__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("sandbox","libraries","sandbox/libraries",-576982546).cljs$core$IFn$_invoke$arity$1(manifest)));
})()], null));
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"manifest-libraries",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.right_pane.manifest = cljs.core.with_meta((function cljspad$right_pane$manifest(ctx__45100__auto__,$__45101__auto__){
var map__45268 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var map__45268__$1 = (((((!((map__45268 == null))))?(((((map__45268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45268):map__45268);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45268__$1,new cljs.core.Keyword(null,"db","db",993250759));
var $45263 = $__45101__auto__;
return (function cljspad$right_pane$manifest_$_manifest45264(props__45102__auto__){
var _ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45263,(function (){var vec__45274 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698)], null));
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45274,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45274,(1),null);
var vec__45277 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"manifest","manifest",-1386791956),version], null));
var manifest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45277,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45277,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Libraries"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.right_pane.manifest_libraries,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"manifest","manifest",-1386791956),manifest__$1], null)], null)], null);
})());
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"manifest",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.right_pane.readme = cljs.core.with_meta((function cljspad$right_pane$readme(ctx__45100__auto__,$__45101__auto__){
var map__45288 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var map__45288__$1 = (((((!((map__45288 == null))))?(((((map__45288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45288):map__45288);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45288__$1,new cljs.core.Keyword(null,"db","db",993250759));
var $45285 = $__45101__auto__;
return (function cljspad$right_pane$readme_$_readme45286(props__45102__auto__){
var _ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45285,(function (){var vec__45294 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156)], null));
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45294,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45294,(1),null);
var ref = module$node_modules$react$index.useRef();
rehook.core.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,new cljs.core.Keyword(null,"readme","readme",-85226442))){
fetch("https://raw.githubusercontent.com/cljspad/cljspad/master/README.md").then((function (p1__45283_SHARP_){
return p1__45283_SHARP_.text();
})).then((function (p1__45284_SHARP_){
return ((ref["current"])["innerHTML"] = module$node_modules$marked$lib$marked(p1__45284_SHARP_));
}));
} else {
}

return cljs.core.constantly(null);
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cljspad-readme","div.cljspad-readme",-1019470233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,new cljs.core.Keyword(null,"readme","readme",-85226442)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null))], null)], null);
})());
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"readme",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.right_pane.sandbox = cljs.core.with_meta((function cljspad$right_pane$sandbox(ctx__45100__auto__,$__45101__auto__){
var map__45307 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var map__45307__$1 = (((((!((map__45307 == null))))?(((((map__45307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45307):map__45307);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45307__$1,new cljs.core.Keyword(null,"db","db",993250759));
var $45303 = $__45101__auto__;
return (function cljspad$right_pane$sandbox_$_sandbox45304(props__45102__auto__){
var _ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45303,(function (){var vec__45315 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156)], null));
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45315,(0),null);
var set_selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45315,(1),null);
var ref = module$node_modules$react$index.useRef();
rehook.core.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(db,cljs.core.assoc,new cljs.core.Keyword("sandbox","ready?","sandbox/ready?",-1981651784),true);

(__cljspad_sandbox = (function (){
(set_selected_tab.cljs$core$IFn$_invoke$arity$1 ? set_selected_tab.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sandbox","sandbox",-54636402)) : set_selected_tab.call(null,new cljs.core.Keyword(null,"sandbox","sandbox",-54636402)));

return (ref["current"]);
}));

return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(db,cljs.core.assoc,new cljs.core.Keyword("sandbox","ready?","sandbox/ready?",-1981651784),false);

return (__cljspad_sandbox = (function (){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot render, sandbox has been unmounted from DOM.",cljs.core.PersistentArrayMap.EMPTY);
}));
});
}));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cljspad-sandbox#cljspad--sandbox","div.cljspad-sandbox#cljspad--sandbox",2138923805),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,new cljs.core.Keyword(null,"sandbox","sandbox",-54636402)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null))], null)], null);
})());
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"sandbox",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.right_pane.right_pane_tabs = cljs.core.with_meta((function cljspad$right_pane$right_pane_tabs(ctx__45100__auto__,$__45101__auto__){
var map__45324 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var map__45324__$1 = (((((!((map__45324 == null))))?(((((map__45324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45324):map__45324);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45324__$1,new cljs.core.Keyword(null,"db","db",993250759));
var $45322 = $__45101__auto__;
return (function cljspad$right_pane$right_pane_tabs_$_right_pane_tabs45323(props__45102__auto__){
var _ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45322,(function (){var vec__45326 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156)], null));
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45326,(0),null);
var set_selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45326,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toolbar","div.toolbar",-1371089148),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button","div.button",-1553026367),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,new cljs.core.Keyword(null,"readme","readme",-85226442)))?"active":null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return (set_selected_tab.cljs$core$IFn$_invoke$arity$1 ? set_selected_tab.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"readme","readme",-85226442)) : set_selected_tab.call(null,new cljs.core.Keyword(null,"readme","readme",-85226442)));
})], null),"README.md"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button","div.button",-1553026367),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,new cljs.core.Keyword(null,"library","library",467978288)))?"active":null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return (set_selected_tab.cljs$core$IFn$_invoke$arity$1 ? set_selected_tab.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"library","library",467978288)) : set_selected_tab.call(null,new cljs.core.Keyword(null,"library","library",467978288)));
})], null),"Libraries"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button","div.button",-1553026367),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,new cljs.core.Keyword(null,"export","export",214356590)))?"active":null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return (set_selected_tab.cljs$core$IFn$_invoke$arity$1 ? set_selected_tab.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"export","export",214356590)) : set_selected_tab.call(null,new cljs.core.Keyword(null,"export","export",214356590)));
})], null),"Export"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button","div.button",-1553026367),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,new cljs.core.Keyword(null,"sandbox","sandbox",-54636402)))?"active":null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return (set_selected_tab.cljs$core$IFn$_invoke$arity$1 ? set_selected_tab.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sandbox","sandbox",-54636402)) : set_selected_tab.call(null,new cljs.core.Keyword(null,"sandbox","sandbox",-54636402)));
})], null),"Output"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"auto"], null),new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/cljspad/cljspad"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cljspad-github-icon","span.cljspad-github-icon",1741262088)], null)], null)], null);
})());
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"right-pane-tabs",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.right_pane.libraries = cljs.core.with_meta((function cljspad$right_pane$libraries(ctx__45100__auto__,$__45101__auto__){
var map__45331 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var map__45331__$1 = (((((!((map__45331 == null))))?(((((map__45331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45331):map__45331);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45331__$1,new cljs.core.Keyword(null,"db","db",993250759));
var $45329 = $__45101__auto__;
return (function cljspad$right_pane$libraries_$_libraries45330(props__45102__auto__){
var _ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45329,(function (){var vec__45333 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156)], null));
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45333,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45333,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cljspad-library","div.cljspad-library",-1117003836),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,new cljs.core.Keyword(null,"library","library",467978288)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.right_pane.manifest], null)], null);
})());
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"libraries",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.right_pane.highlight = cljs.core.with_meta((function cljspad$right_pane$highlight(ctx__45100__auto__,$__45101__auto__){
var _ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var $45336 = $__45101__auto__;
return (function cljspad$right_pane$highlight_$_highlight45337(props__45102__auto__){
var props = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45336,(function (){var ref = module$node_modules$react$index.useRef();
rehook.core.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
module$node_modules$highlight_DOT_js$lib$index.highlightBlock((ref["current"]));

return cljs.core.constantly(null);
}));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"className","className",-1983287057),"language-clojure"], null),rehook.util.children(props)], null)], null);
})());
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"highlight",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.right_pane.copy_to_clipboard = cljs.core.with_meta((function cljspad$right_pane$copy_to_clipboard(ctx__45100__auto__,$__45101__auto__){
var map__45340 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var map__45340__$1 = (((((!((map__45340 == null))))?(((((map__45340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45340):map__45340);
var monaco = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45340__$1,new cljs.core.Keyword(null,"monaco","monaco",1623438155));
var $45338 = $__45101__auto__;
return (function cljspad$right_pane$copy_to_clipboard_$_copy_to_clipboard45339(props__45102__auto__){
var _ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45338,(function (){var vec__45342 = rehook.core.use_atom(monaco);
var monaco__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45342,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45342,(1),null);
var initial_copy_text = "Copy code to clipboard";
var vec__45345 = rehook.core.use_state(initial_copy_text);
var copy_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45345,(0),null);
var set_copy_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45345,(1),null);
rehook.core.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(copy_text,initial_copy_text)))){
var f = setTimeout((function (){
return (set_copy_text.cljs$core$IFn$_invoke$arity$1 ? set_copy_text.cljs$core$IFn$_invoke$arity$1(initial_copy_text) : set_copy_text.call(null,initial_copy_text));
}),(1000));
return (function (){
return clearTimeout(f);
});
} else {
return cljs.core.constantly(null);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [copy_text], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button","div.button",-1553026367),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
if(cljs.core.truth_(cljspad.editor.copy_to_clipboard(monaco__$1))){
return (set_copy_text.cljs$core$IFn$_invoke$arity$1 ? set_copy_text.cljs$core$IFn$_invoke$arity$1("Copied to clipboard!") : set_copy_text.call(null,"Copied to clipboard!"));
} else {
return (set_copy_text.cljs$core$IFn$_invoke$arity$1 ? set_copy_text.cljs$core$IFn$_invoke$arity$1("Failed to copy to clipboard :(") : set_copy_text.call(null,"Failed to copy to clipboard :("));
}
})], null),copy_text], null);
})());
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"copy-to-clipboard",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.right_pane.deps_edn = cljs.core.with_meta((function cljspad$right_pane$deps_edn(ctx__45100__auto__,$__45101__auto__){
var map__45353 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var map__45353__$1 = (((((!((map__45353 == null))))?(((((map__45353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45353):map__45353);
var compiler_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45353__$1,new cljs.core.Keyword(null,"compiler-state","compiler-state",631902768));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45353__$1,new cljs.core.Keyword(null,"db","db",993250759));
var $45351 = $__45101__auto__;
return (function cljspad$right_pane$deps_edn_$_deps_edn45352(props__45102__auto__){
var _ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45351,(function (){var vec__45355 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698)], null));
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45355,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45355,(1),null);
var vec__45358 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"manifest","manifest",-1386791956),version,new cljs.core.Keyword("clojurescript","version","clojurescript/version",-102729015)], null));
var cljs_version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45358,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45358,(1),null);
var vec__45361 = rehook.core.use_atom_fn(compiler_state,(function (p1__45349_SHARP_){
return cljs.core.set(cljs.core.keys(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(p1__45349_SHARP_)));
}),cljs.core.constantly(null));
var nses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45361,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45361,(1),null);
var vec__45364 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"manifest","manifest",-1386791956),version,new cljs.core.Keyword("sandbox","libraries","sandbox/libraries",-576982546)], null));
var libraries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45364,(0),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45364,(1),null);
var clj_deps = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"coord","coord",-1453656639),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45350_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cljs","cljs",1492417629),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__45350_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__45367){
var map__45368 = p__45367;
var map__45368__$1 = (((((!((map__45368 == null))))?(((((map__45368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45368):map__45368);
var require = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45368__$1,new cljs.core.Keyword(null,"require","require",-468001333));
return cljs.core.some((function (p__45372){
var vec__45373 = p__45372;
var seq__45374 = cljs.core.seq(vec__45373);
var first__45375 = cljs.core.first(seq__45374);
var seq__45374__$1 = cljs.core.next(seq__45374);
var r = first__45375;
var ___$5 = seq__45374__$1;
return cljs.core.contains_QMARK_(nses,r);
}),require);
}),libraries)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.right_pane.highlight,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45376_45568 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45377_45569 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45378_45570 = true;
var _STAR_print_fn_STAR__temp_val__45379_45571 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45378_45570);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45379_45571);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deps","deps",1883360319),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("org.clojure","clojurescript","org.clojure/clojurescript",1785568810,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("mvn","version","mvn/version",425368467),cljs_version], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45382){
var vec__45383 = p__45382;
var dep = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45383,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45383,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(dep),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("mvn","version","mvn/version",425368467),coord], null)], null);
}),clj_deps))], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45377_45569);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45376_45568);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})()], null);
})());
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"deps-edn",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.right_pane.export$ = cljs.core.with_meta((function cljspad$right_pane$export(ctx__45100__auto__,$__45101__auto__){
var map__45392 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var map__45392__$1 = (((((!((map__45392 == null))))?(((((map__45392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45392):map__45392);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45392__$1,new cljs.core.Keyword(null,"db","db",993250759));
var $45390 = $__45101__auto__;
return (function cljspad$right_pane$export_$_export45391(props__45102__auto__){
var _ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45390,(function (){var vec__45396 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156)], null));
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45396,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45396,(1),null);
var vec__45399 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698)], null));
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45399,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45399,(1),null);
var vec__45402 = rehook.core.use_state("stable");
var sandbox_version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45402,(0),null);
var set_sandbox_version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45402,(1),null);
return new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cljspad-export","div.cljspad-export",446254080),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,new cljs.core.Keyword(null,"export","export",214356590)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Export instructions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Export Options"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Sandbox version: "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__45388_SHARP_){
var G__45407 = p1__45388_SHARP_.target.value;
return (set_sandbox_version.cljs$core$IFn$_invoke$arity$1 ? set_sandbox_version.cljs$core$IFn$_invoke$arity$1(G__45407) : set_sandbox_version.call(null,G__45407));
}),new cljs.core.Keyword(null,"value","value",305978217),sandbox_version], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"stable"], null),"Stable"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"latest"], null),"Latest"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"GitHub Gist"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Your cljspad creation can be exported by creating a new public GitHub ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://gist.github.com",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"gist"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.right_pane.copy_to_clipboard], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Sharing"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Once you have created a gist, you can use this link to share your creation:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.right_pane.highlight,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("stable",sandbox_version))?["https://cljspad.dev/gist/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(version),"/GIST_ID"].join(''):"https://cljspad.dev/gist/GIST_ID")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Where ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samp","samp",1506141136),"GIST_ID"], null)," is the id of your freshly created gist (found in the navbar)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Embedding"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"If you would like to embed your creation, you can add this iframe to your website:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.right_pane.highlight,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("stable",sandbox_version))?["<iframe src=\"","https://cljsfiddlle.dev/embed/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(version),"/GIST_ID\" width=\"100%\" height=\"400px\" style=\"border:1px solid #ccc;\"></iframe>"].join(''):["<iframe src=\"","https://cljsfiddlle.dev/embed/GIST_ID\" ","\"width=\"100%\" height=\"400px\" style=\"border:1px solid #ccc;\"></iframe>"].join(''))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You can configure cljspad by passing through the following query params:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samp","samp",1506141136),"selected_tab"], null)," - (enum) the initial tab on load. Options: sandbox, repl, editor (default: editor)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samp","samp",1506141136),"defer_load"], null)," - (bool) whether to defer the loading of cljspad (default: true)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Clojure project"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"If you would like to build a Clojure project out of your creation:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"deps.edn"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.right_pane.deps_edn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"shadow-cljs.edn"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.right_pane.highlight,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45410_45604 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45411_45605 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45412_45606 = true;
var _STAR_print_fn_STAR__temp_val__45413_45607 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45412_45606);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45413_45607);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deps","deps",1883360319),true,new cljs.core.Keyword(null,"builds","builds",-1946283802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"modules","modules",-248193976),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app.main","app.main",880304608,null)], null)], null)], null)], null)], null)], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45411_45605);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45410_45604);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"src/app/main.cljs"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.right_pane.copy_to_clipboard], null)], null);
})());
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"export",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));

//# sourceMappingURL=cljspad.right_pane.js.map
