goog.provide('cljspad.repl');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$xterm$lib$xterm=shadow.js.require("module$node_modules$xterm$lib$xterm", {});
var module$node_modules$xterm_addon_fit$lib$xterm_addon_fit=shadow.js.require("module$node_modules$xterm_addon_fit$lib$xterm_addon_fit", {});
var module$node_modules$ansi_escapes$index=shadow.js.require("module$node_modules$ansi_escapes$index", {});
cljspad.repl.terminal = (function cljspad$repl$terminal(fit_addon){
var G__45348 = (new module$node_modules$xterm$lib$xterm.Terminal());
G__45348.loadAddon(fit_addon);

G__45348.setOption("theme",({"background": "#fff", "foreground": "#0c1323", "cursor": "#0c1323"}));

G__45348.setOption("fontFamily","Hack, monospace");

G__45348.setOption("fontSize",(14));

G__45348.setOption("cursorBlink",true);

return G__45348;
});
cljspad.repl.str_insert = (function cljspad$repl$str_insert(s,c,i){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,i)].join('');
});
cljspad.repl.backspace = (function cljspad$repl$backspace(s,pos){
return new cljs.core.Keyword(null,"str","str",1089608819).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ctx,x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(ctx))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.inc);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.Keyword(null,"str","str",1089608819),cljs.core.str,x),new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.inc);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(0),new cljs.core.Keyword(null,"str","str",1089608819),""], null),s));
});
cljspad.repl.handle_input = (function cljspad$repl$handle_input(curr_repl_state,next_pos,next_form,ns_str){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(curr_repl_state,new cljs.core.Keyword(null,"form","form",-1624062471),next_form),new cljs.core.Keyword(null,"term-commands","term-commands",1742066045),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clearLine"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursorBackward",(cljs.core.count(ns_str) + cljs.core.count(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(curr_repl_state)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["write",ns_str], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["write",next_form], null),((((cljs.core.count(next_form) - next_pos) > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursorBackward",(cljs.core.count(next_form) - next_pos)], null):null)], null)),new cljs.core.Keyword(null,"pos","pos",-864607220),next_pos);
});
cljspad.repl.handle_repl_key = (function cljspad$repl$handle_repl_key(compiler_state,curr_repl_state,cb,ev){
var key = (ev["key"]);
var code = goog.object.getValueByKeys(ev,"domEvent","code");
var ctrl_QMARK_ = goog.object.getValueByKeys(ev,"domEvent","ctrlKey");
var code__$1 = (cljs.core.truth_(ctrl_QMARK_)?["Ctrl+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code)].join(''):code);
var G__45381 = code__$1;
switch (G__45381) {
case "ArrowRight":
if((new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(curr_repl_state) < cljs.core.count(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(curr_repl_state)))){
var G__45386 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(curr_repl_state,new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.inc),new cljs.core.Keyword(null,"term-commands","term-commands",1742066045),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["write",key], null)], null));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__45386) : cb.call(null,G__45386));
} else {
return null;
}

break;
case "ArrowLeft":
if((new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(curr_repl_state) > (0))){
var G__45387 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(curr_repl_state,new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.dec),new cljs.core.Keyword(null,"term-commands","term-commands",1742066045),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["write",key], null)], null));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__45387) : cb.call(null,G__45387));
} else {
return null;
}

break;
case "ArrowUp":
var next_history_index = (new cljs.core.Keyword(null,"history-index","history-index",-394704427).cljs$core$IFn$_invoke$arity$1(curr_repl_state) + (1));
var temp__5735__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(curr_repl_state),next_history_index,null);
if(cljs.core.truth_(temp__5735__auto__)){
var history_form = temp__5735__auto__;
var G__45389 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(curr_repl_state,new cljs.core.Keyword(null,"history-index","history-index",-394704427),next_history_index),new cljs.core.Keyword(null,"form","form",-1624062471),history_form),new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.count(history_form)),new cljs.core.Keyword(null,"term-commands","term-commands",1742066045),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(curr_repl_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["write","\b \b"], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["write",history_form], null)));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__45389) : cb.call(null,G__45389));
} else {
return null;
}

break;
case "ArrowDown":
var next_history_index = (new cljs.core.Keyword(null,"history-index","history-index",-394704427).cljs$core$IFn$_invoke$arity$1(curr_repl_state) - (1));
var temp__5733__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(curr_repl_state),next_history_index,null);
if(cljs.core.truth_(temp__5733__auto__)){
var history_form = temp__5733__auto__;
var G__45393 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(curr_repl_state,new cljs.core.Keyword(null,"history-index","history-index",-394704427),next_history_index),new cljs.core.Keyword(null,"form","form",-1624062471),history_form),new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.count(history_form)),new cljs.core.Keyword(null,"term-commands","term-commands",1742066045),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(curr_repl_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["write","\b \b"], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["write",history_form], null)));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__45393) : cb.call(null,G__45393));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),next_history_index)){
var G__45395 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(curr_repl_state,new cljs.core.Keyword(null,"form","form",-1624062471),""),new cljs.core.Keyword(null,"term-commands","term-commands",1742066045),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(curr_repl_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["write","\b \b"], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["write",""], null))),new cljs.core.Keyword(null,"history-index","history-index",-394704427),(-1));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__45395) : cb.call(null,G__45395));
} else {
return null;
}
}

break;
case "Backspace":
if((new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(curr_repl_state) > (0))){
var next_pos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(curr_repl_state) - (1));
var next_form = cljspad.repl.backspace(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(curr_repl_state),next_pos);
var ns_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(curr_repl_state)),"=> "].join('');
var G__45405 = cljspad.repl.handle_input(curr_repl_state,next_pos,next_form,ns_str);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__45405) : cb.call(null,G__45405));
} else {
return null;
}

break;
case "Delete":
if((new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(curr_repl_state) > (0))){
var next_pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(curr_repl_state);
var next_form = cljspad.repl.backspace(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(curr_repl_state),next_pos);
var ns_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(curr_repl_state)),"=> "].join('');
var G__45406 = cljspad.repl.handle_input(curr_repl_state,next_pos,next_form,ns_str);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__45406) : cb.call(null,G__45406));
} else {
return null;
}

break;
case "Enter":
if(clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(curr_repl_state))){
var G__45408 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(curr_repl_state,new cljs.core.Keyword(null,"term-commands","term-commands",1742066045),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["writeln",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["writeln",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["write",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(curr_repl_state)),"=> "].join('')], null)], null));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__45408) : cb.call(null,G__45408));
} else {
return cljspad.env.eval_str_promise(compiler_state,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(curr_repl_state)).then((function (result){
var ns = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(curr_repl_state);
}
})();
var G__45409 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(curr_repl_state,new cljs.core.Keyword(null,"pos","pos",-864607220),(0)),new cljs.core.Keyword(null,"form","form",-1624062471),""),new cljs.core.Keyword(null,"ns","ns",441598760),ns),new cljs.core.Keyword(null,"history","history",-247395220),(function (curr_history){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-history-items","max-history-items",1326610033).cljs$core$IFn$_invoke$arity$1(curr_repl_state),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(curr_history,cljs.core.first(curr_history)))?curr_history:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(curr_history,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(curr_repl_state))));
})),new cljs.core.Keyword(null,"term-commands","term-commands",1742066045),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["writeln",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["writeln",(function (){var temp__5737__auto__ = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljspad.env.error_message(result);
}
})();
if((temp__5737__auto__ == null)){
return "nil";
} else {
var value = temp__5737__auto__;
return zprint.core.czprint_str(value);
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["write",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"=> "].join('')], null)], null));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__45409) : cb.call(null,G__45409));
})).catch((function (p1__45380_SHARP_){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__45380_SHARP_], 0));
}));
}

break;
case "Ctrl+KeyL":
var G__45414 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(curr_repl_state,new cljs.core.Keyword(null,"pos","pos",-864607220),(0)),new cljs.core.Keyword(null,"form","form",-1624062471),""),new cljs.core.Keyword(null,"term-commands","term-commands",1742066045),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clear"], null)], null));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__45414) : cb.call(null,G__45414));

break;
case "Home":
case "PageUp":
case "PageDown":
case "End":
return null;

break;
default:
if(cljs.core.truth_(ctrl_QMARK_)){
return null;
} else {
var next_form = cljspad.repl.str_insert(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(curr_repl_state),key,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(curr_repl_state));
var next_pos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(curr_repl_state) + (1));
var ns_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(curr_repl_state)),"=> "].join('');
var G__45415 = cljspad.repl.handle_input(curr_repl_state,next_pos,next_form,ns_str);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__45415) : cb.call(null,G__45415));
}

}
});
cljspad.repl.read_repl_history = (function cljspad$repl$read_repl_history(){
try{var or__4126__auto__ = (function (){var G__45418 = localStorage.getItem("repl-history");
if((G__45418 == null)){
return null;
} else {
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1(G__45418);
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.List.EMPTY;
}
}catch (e45416){var _ = e45416;
return cljs.core.List.EMPTY;
}});
cljspad.repl.write_repl_history = (function cljspad$repl$write_repl_history(history){
try{return localStorage.setItem("repl-history",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([history], 0)));
}catch (e45420){var _ = e45420;
return null;
}});
cljspad.repl.mutate_repl_BANG_ = (function cljspad$repl$mutate_repl_BANG_(state,term,next_state){
cljs.core.reset_BANG_(state,next_state);

cljspad.repl.write_repl_history(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(next_state));

var seq__45421 = cljs.core.seq(new cljs.core.Keyword(null,"term-commands","term-commands",1742066045).cljs$core$IFn$_invoke$arity$1(next_state));
var chunk__45422 = null;
var count__45423 = (0);
var i__45424 = (0);
while(true){
if((i__45424 < count__45423)){
var vec__45434 = chunk__45422.cljs$core$IIndexed$_nth$arity$2(null,i__45424);
var cmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45434,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45434,(1),null);
var G__45437_45643 = cmd;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clearLine",G__45437_45643)){
term.write(module$node_modules$ansi_escapes$index.eraseLine);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("cursorLeft",G__45437_45643)){
term.write(module$node_modules$ansi_escapes$index.cursorLeft);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("cursorForward",G__45437_45643)){
term.write(module$node_modules$ansi_escapes$index.cursorForward(val));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("cursorBackward",G__45437_45643)){
term.write(module$node_modules$ansi_escapes$index.cursorBackward(val));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clear",G__45437_45643)){
term.clear();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("write",G__45437_45643)){
term.write(val);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("writeln",G__45437_45643)){
term.writeln(val);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__45437_45643)){
} else {
console.warn("Unknown term command ",cmd);

}
}
}
}
}
}
}
}


var G__45646 = seq__45421;
var G__45647 = chunk__45422;
var G__45648 = count__45423;
var G__45649 = (i__45424 + (1));
seq__45421 = G__45646;
chunk__45422 = G__45647;
count__45423 = G__45648;
i__45424 = G__45649;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45421);
if(temp__5735__auto__){
var seq__45421__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45421__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45421__$1);
var G__45652 = cljs.core.chunk_rest(seq__45421__$1);
var G__45653 = c__4556__auto__;
var G__45654 = cljs.core.count(c__4556__auto__);
var G__45655 = (0);
seq__45421 = G__45652;
chunk__45422 = G__45653;
count__45423 = G__45654;
i__45424 = G__45655;
continue;
} else {
var vec__45438 = cljs.core.first(seq__45421__$1);
var cmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45438,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45438,(1),null);
var G__45441_45656 = cmd;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clearLine",G__45441_45656)){
term.write(module$node_modules$ansi_escapes$index.eraseLine);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("cursorLeft",G__45441_45656)){
term.write(module$node_modules$ansi_escapes$index.cursorLeft);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("cursorForward",G__45441_45656)){
term.write(module$node_modules$ansi_escapes$index.cursorForward(val));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("cursorBackward",G__45441_45656)){
term.write(module$node_modules$ansi_escapes$index.cursorBackward(val));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clear",G__45441_45656)){
term.clear();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("write",G__45441_45656)){
term.write(val);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("writeln",G__45441_45656)){
term.writeln(val);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__45441_45656)){
} else {
console.warn("Unknown term command ",cmd);

}
}
}
}
}
}
}
}


var G__45661 = cljs.core.next(seq__45421__$1);
var G__45662 = null;
var G__45663 = (0);
var G__45664 = (0);
seq__45421 = G__45661;
chunk__45422 = G__45662;
count__45423 = G__45663;
i__45424 = G__45664;
continue;
}
} else {
return null;
}
}
break;
}
});
cljspad.repl.initial_state = (function cljspad$repl$initial_state(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"form","form",-1624062471),"",new cljs.core.Keyword(null,"pos","pos",-864607220),(0),new cljs.core.Keyword(null,"history-index","history-index",-394704427),(-1),new cljs.core.Keyword(null,"max-history-items","max-history-items",1326610033),(50),new cljs.core.Keyword(null,"ns","ns",441598760),"sandbox.user",new cljs.core.Keyword(null,"history","history",-247395220),cljspad.repl.read_repl_history()], null);
});
cljspad.repl.write_lines = (function cljspad$repl$write_lines(term,curr_state,lines){
try{term.writeln("");

var seq__45444_45667 = cljs.core.seq(lines);
var chunk__45445_45668 = null;
var count__45446_45669 = (0);
var i__45447_45670 = (0);
while(true){
if((i__45447_45670 < count__45446_45669)){
var line_45671 = chunk__45445_45668.cljs$core$IIndexed$_nth$arity$2(null,i__45447_45670);
term.write([cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.core.czprint_str.cljs$core$IFn$_invoke$arity$variadic(line_45671,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parse-string?","parse-string?",2006674325),true], null)], 0)))," "].join(''));


var G__45672 = seq__45444_45667;
var G__45674 = chunk__45445_45668;
var G__45675 = count__45446_45669;
var G__45676 = (i__45447_45670 + (1));
seq__45444_45667 = G__45672;
chunk__45445_45668 = G__45674;
count__45446_45669 = G__45675;
i__45447_45670 = G__45676;
continue;
} else {
var temp__5735__auto___45678 = cljs.core.seq(seq__45444_45667);
if(temp__5735__auto___45678){
var seq__45444_45680__$1 = temp__5735__auto___45678;
if(cljs.core.chunked_seq_QMARK_(seq__45444_45680__$1)){
var c__4556__auto___45681 = cljs.core.chunk_first(seq__45444_45680__$1);
var G__45683 = cljs.core.chunk_rest(seq__45444_45680__$1);
var G__45684 = c__4556__auto___45681;
var G__45685 = cljs.core.count(c__4556__auto___45681);
var G__45686 = (0);
seq__45444_45667 = G__45683;
chunk__45445_45668 = G__45684;
count__45446_45669 = G__45685;
i__45447_45670 = G__45686;
continue;
} else {
var line_45687 = cljs.core.first(seq__45444_45680__$1);
term.write([cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.core.czprint_str.cljs$core$IFn$_invoke$arity$variadic(line_45687,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parse-string?","parse-string?",2006674325),true], null)], 0)))," "].join(''));


var G__45688 = cljs.core.next(seq__45444_45680__$1);
var G__45689 = null;
var G__45690 = (0);
var G__45691 = (0);
seq__45444_45667 = G__45688;
chunk__45445_45668 = G__45689;
count__45446_45669 = G__45690;
i__45447_45670 = G__45691;
continue;
}
} else {
}
}
break;
}

term.writeln("");

if(clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(curr_state))){
return term.write([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(curr_state)),"=> "].join(''));
} else {
return null;
}
}catch (e45443){var e = e45443;
return console.log(e);
}});
cljspad.repl.console_loop = (function cljspad$repl$console_loop(term,close_ch,state,p__45449){
var map__45450 = p__45449;
var map__45450__$1 = (((((!((map__45450 == null))))?(((((map__45450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45450):map__45450);
var stderr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45450__$1,new cljs.core.Keyword(null,"stderr","stderr",-1571650309));
var stdout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45450__$1,new cljs.core.Keyword(null,"stdout","stdout",-531490018));
var c__44856__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44857__auto__ = (function (){var switch__44762__auto__ = (function (state_45512){
var state_val_45517 = (state_45512[(1)]);
if((state_val_45517 === (7))){
var inst_45495 = (state_45512[(2)]);
var state_45512__$1 = state_45512;
var statearr_45523_45703 = state_45512__$1;
(statearr_45523_45703[(2)] = inst_45495);

(statearr_45523_45703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45517 === (1))){
var state_45512__$1 = state_45512;
var statearr_45525_45704 = state_45512__$1;
(statearr_45525_45704[(2)] = null);

(statearr_45525_45704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45517 === (4))){
var inst_45459 = (state_45512[(7)]);
var inst_45459__$1 = (state_45512[(2)]);
var state_45512__$1 = (function (){var statearr_45527 = state_45512;
(statearr_45527[(7)] = inst_45459__$1);

return statearr_45527;
})();
if(cljs.core.truth_(inst_45459__$1)){
var statearr_45528_45705 = state_45512__$1;
(statearr_45528_45705[(1)] = (5));

} else {
var statearr_45529_45706 = state_45512__$1;
(statearr_45529_45706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45517 === (13))){
var inst_45486 = (state_45512[(2)]);
var state_45512__$1 = state_45512;
var statearr_45536_45707 = state_45512__$1;
(statearr_45536_45707[(2)] = inst_45486);

(statearr_45536_45707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45517 === (6))){
var state_45512__$1 = state_45512;
var statearr_45537_45708 = state_45512__$1;
(statearr_45537_45708[(2)] = null);

(statearr_45537_45708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45517 === (3))){
var inst_45497 = (state_45512[(2)]);
var state_45512__$1 = state_45512;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45512__$1,inst_45497);
} else {
if((state_val_45517 === (12))){
var state_45512__$1 = state_45512;
var statearr_45559_45710 = state_45512__$1;
(statearr_45559_45710[(2)] = null);

(statearr_45559_45710[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45517 === (2))){
var inst_45455 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45456 = [close_ch,stderr,stdout];
var inst_45457 = (new cljs.core.PersistentVector(null,3,(5),inst_45455,inst_45456,null));
var state_45512__$1 = state_45512;
return cljs.core.async.ioc_alts_BANG_(state_45512__$1,(4),inst_45457);
} else {
if((state_val_45517 === (11))){
var inst_45468 = (state_45512[(8)]);
var inst_45466 = (state_45512[(9)]);
var inst_45482 = cljspad.repl.write_lines(term,inst_45468,inst_45466);
var state_45512__$1 = (function (){var statearr_45561 = state_45512;
(statearr_45561[(10)] = inst_45482);

return statearr_45561;
})();
var statearr_45562_45711 = state_45512__$1;
(statearr_45562_45711[(2)] = null);

(statearr_45562_45711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45517 === (9))){
var inst_45467 = (state_45512[(11)]);
var inst_45479 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45467,stdout);
var state_45512__$1 = state_45512;
if(inst_45479){
var statearr_45563_45712 = state_45512__$1;
(statearr_45563_45712[(1)] = (11));

} else {
var statearr_45564_45713 = state_45512__$1;
(statearr_45564_45713[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45517 === (5))){
var inst_45467 = (state_45512[(11)]);
var inst_45459 = (state_45512[(7)]);
var inst_45466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45459,(0),null);
var inst_45467__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45459,(1),null);
var inst_45468 = cljs.core.deref(state);
var inst_45469 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45467__$1,stderr);
var state_45512__$1 = (function (){var statearr_45565 = state_45512;
(statearr_45565[(11)] = inst_45467__$1);

(statearr_45565[(8)] = inst_45468);

(statearr_45565[(9)] = inst_45466);

return statearr_45565;
})();
if(inst_45469){
var statearr_45566_45714 = state_45512__$1;
(statearr_45566_45714[(1)] = (8));

} else {
var statearr_45572_45715 = state_45512__$1;
(statearr_45572_45715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45517 === (10))){
var inst_45488 = (state_45512[(2)]);
var state_45512__$1 = state_45512;
var statearr_45573_45716 = state_45512__$1;
(statearr_45573_45716[(2)] = inst_45488);

(statearr_45573_45716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45517 === (8))){
var inst_45468 = (state_45512[(8)]);
var inst_45466 = (state_45512[(9)]);
var inst_45471 = cljspad.repl.write_lines(term,inst_45468,inst_45466);
var state_45512__$1 = (function (){var statearr_45575 = state_45512;
(statearr_45575[(12)] = inst_45471);

return statearr_45575;
})();
var statearr_45576_45717 = state_45512__$1;
(statearr_45576_45717[(2)] = null);

(statearr_45576_45717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljspad$repl$console_loop_$_state_machine__44763__auto__ = null;
var cljspad$repl$console_loop_$_state_machine__44763__auto____0 = (function (){
var statearr_45578 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45578[(0)] = cljspad$repl$console_loop_$_state_machine__44763__auto__);

(statearr_45578[(1)] = (1));

return statearr_45578;
});
var cljspad$repl$console_loop_$_state_machine__44763__auto____1 = (function (state_45512){
while(true){
var ret_value__44764__auto__ = (function (){try{while(true){
var result__44765__auto__ = switch__44762__auto__(state_45512);
if(cljs.core.keyword_identical_QMARK_(result__44765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44765__auto__;
}
break;
}
}catch (e45579){var ex__44766__auto__ = e45579;
var statearr_45580_45718 = state_45512;
(statearr_45580_45718[(2)] = ex__44766__auto__);


if(cljs.core.seq((state_45512[(4)]))){
var statearr_45581_45719 = state_45512;
(statearr_45581_45719[(1)] = cljs.core.first((state_45512[(4)])));

} else {
throw ex__44766__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45720 = state_45512;
state_45512 = G__45720;
continue;
} else {
return ret_value__44764__auto__;
}
break;
}
});
cljspad$repl$console_loop_$_state_machine__44763__auto__ = function(state_45512){
switch(arguments.length){
case 0:
return cljspad$repl$console_loop_$_state_machine__44763__auto____0.call(this);
case 1:
return cljspad$repl$console_loop_$_state_machine__44763__auto____1.call(this,state_45512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljspad$repl$console_loop_$_state_machine__44763__auto__.cljs$core$IFn$_invoke$arity$0 = cljspad$repl$console_loop_$_state_machine__44763__auto____0;
cljspad$repl$console_loop_$_state_machine__44763__auto__.cljs$core$IFn$_invoke$arity$1 = cljspad$repl$console_loop_$_state_machine__44763__auto____1;
return cljspad$repl$console_loop_$_state_machine__44763__auto__;
})()
})();
var state__44858__auto__ = (function (){var statearr_45582 = f__44857__auto__();
(statearr_45582[(6)] = c__44856__auto__);

return statearr_45582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44858__auto__);
}));

return c__44856__auto__;
});
cljspad.repl.repl_header = cljs.core.with_meta((function cljspad$repl$repl_header(ctx__45100__auto__,$__45101__auto__){
var map__45587 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var map__45587__$1 = (((((!((map__45587 == null))))?(((((map__45587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45587):map__45587);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45587__$1,new cljs.core.Keyword(null,"db","db",993250759));
var compiler_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45587__$1,new cljs.core.Keyword(null,"compiler-state","compiler-state",631902768));
var $45583 = $__45101__auto__;
return (function cljspad$repl$repl_header_$_repl_header45584(props__45102__auto__){
var _ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45583,(function (){var vec__45589 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698)], null));
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45589,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45589,(1),null);
var vec__45592 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"manifest","manifest",-1386791956),version,new cljs.core.Keyword("clojurescript","version","clojurescript/version",-102729015)], null));
var cljs_version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45592,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45592,(1),null);
var vec__45595 = rehook.core.use_atom_fn(compiler_state,(function (x){
return cljs.core.keys(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(x));
}),null);
var nses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45595,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45595,(1),null);
var vec__45598 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"gist_id","gist_id",820238647)], null));
var gist_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45598,(0),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45598,(1),null);
var vec__45601 = rehook.core.use_atom_path(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"latest","latest",24323665)], null));
var latest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45601,(0),null);
var ___$5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45601,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"borderTop","borderTop",2080227753),"1px solid #ccc",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#fafafa",new cljs.core.Keyword(null,"borderBottom","borderBottom",1676563277),"1px solid #ccc",new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),"9999",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cljspad-repl-icon","span.cljspad-repl-icon",-820777952),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000)," REPL"], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(2),new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"right",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"10px",new cljs.core.Keyword(null,"lineHeight","lineHeight",-1729831016),"20px",new cljs.core.Keyword(null,"userSelect","userSelect",-391760051),"none"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hint--top.hint--large","span.hint--top.hint--large",1610803158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort.cljs$core$IFn$_invoke$arity$1(nses)], 0))], null),cljs.core.count(nses)," namespaces loaded"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Cljs version: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_version)], null)], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Sandbox version: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.str.cljs$core$IFn$_invoke$arity$1(version)], null)], null),(cljs.core.truth_((function (){var and__4115__auto__ = gist_id;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(version,latest);
} else {
return and__4115__auto__;
}
})())?(function (){var href = ["/gist/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gist_id)].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),"Switch to latest sandbox"], null)], null);
})():null)], null)], null)], null);
})());
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"repl-header",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
cljspad.repl.repl = cljs.core.with_meta((function cljspad$repl$repl(ctx__45100__auto__,$__45101__auto__){
var map__45611 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457));
var map__45611__$1 = (((((!((map__45611 == null))))?(((((map__45611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45611):map__45611);
var compiler_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45611__$1,new cljs.core.Keyword(null,"compiler-state","compiler-state",631902768));
var console = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45611__$1,new cljs.core.Keyword(null,"console","console",1228072057));
var $45609 = $__45101__auto__;
return (function cljspad$repl$repl_$_repl45610(props__45102__auto__){
var map__45615 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ctx__45100__auto__,new cljs.core.Keyword("rehook.dom","props","rehook.dom/props",1289927457),cljs.core.PersistentArrayMap.EMPTY),rehook.dom.rehook_meta,props__45102__auto__,ctx__45100__auto__);
var map__45615__$1 = (((((!((map__45615 == null))))?(((((map__45615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45615):map__45615);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45615__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$45609,(function (){var container = module$node_modules$react$index.useRef();
rehook.core.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var fit = (new module$node_modules$xterm_addon_fit$lib$xterm_addon_fit.FitAddon());
var term = cljspad.repl.terminal(fit);
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljspad.repl.initial_state());
var repl_cb = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljspad.repl.mutate_repl_BANG_,state,term);
var current = (container["current"]);
var close_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
term.open(current);

fit.fit();

term.write("sandbox.user=> ");

term.onKey((function (p1__45608_SHARP_){
return cljspad.repl.handle_repl_key(compiler_state,cljs.core.deref(state),repl_cb,p1__45608_SHARP_);
}));

cljspad.repl.console_loop(term,close_ch,state,console);

return (function (){
cljs.core.async.close_BANG_(close_ch);

return term.dispose();
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljspad.repl.repl_header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null),new cljs.core.Keyword(null,"ref","ref",1289896967),container], null)], null)], null);
})());
});
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"repl",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));

//# sourceMappingURL=cljspad.repl.js.map
