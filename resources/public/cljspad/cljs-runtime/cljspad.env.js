goog.provide('cljspad.env');
cljspad.env.error_message = (function cljspad$env$error_message(result){
return cljs.core.ex_message(cljs.core.ex_cause(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result)));
});
cljspad.env.state = (function cljspad$env$state(){
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
});
cljspad.env.init = (function cljspad$env$init(compiler_state,sandbox_version,cb){
var path = ["/sandbox/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sandbox_version),"/bootstrap"].join('');
return shadow.cljs.bootstrap.browser.init(compiler_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"load-on-init","load-on-init",337216877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"sandbox.user","sandbox.user",912755160,null),"null"], null), null)], null),cb);
});
cljspad.env.eval_opts = (function cljspad$env$eval_opts(compiler_state){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shadow.cljs.bootstrap.browser.load,compiler_state),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("sandbox.user")], null);
});
cljspad.env.eval_str = (function cljspad$env$eval_str(compiler_state,form,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(compiler_state,form,null,cljspad.env.eval_opts(compiler_state),cb);
});
cljspad.env.ignored_error_messages = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Namespace \"sandbox.user\" already declared.",null], null), null);
cljspad.env.eval_result_xf = (function cljspad$env$eval_result_xf(result){
var err_msg = cljspad.env.error_message(result);
if(cljs.core.truth_((cljspad.env.ignored_error_messages.cljs$core$IFn$_invoke$arity$1 ? cljspad.env.ignored_error_messages.cljs$core$IFn$_invoke$arity$1(err_msg) : cljspad.env.ignored_error_messages.call(null,err_msg)))){
return null;
} else {
return result;
}
});
cljspad.env.eval_str_promise = (function cljspad$env$eval_str_promise(compiler_state,form){
return (new Promise(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljspad.env.eval_str,compiler_state,form))).then(cljspad.env.eval_result_xf);
});
cljspad.env.read_STAR_ = (function cljspad$env$read_STAR_(reader){
try{return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),reader);
}catch (e45048){var e = e45048;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.ex_message(e)], 0));

return null;
}});
cljspad.env.eval_form_STAR_ = (function cljspad$env$eval_form_STAR_(compiler_state,reader){
var temp__5733__auto__ = cljspad.env.read_STAR_(reader);
if(cljs.core.truth_(temp__5733__auto__)){
var form = temp__5733__auto__;
return cljspad.env.eval_str_promise(compiler_state,cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)).then((function (result){
var temp__5733__auto____$1 = cljspad.env.error_message(result);
if(cljs.core.truth_(temp__5733__auto____$1)){
var err = temp__5733__auto____$1;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler_state,cljs.core.assoc,new cljs.core.Keyword("cljspad.env","evaluating?","cljspad.env/evaluating?",1806474705),false);
} else {
return (cljspad.env.eval_form_STAR_.cljs$core$IFn$_invoke$arity$2 ? cljspad.env.eval_form_STAR_.cljs$core$IFn$_invoke$arity$2(compiler_state,reader) : cljspad.env.eval_form_STAR_.call(null,compiler_state,reader));
}
})).catch((function (err){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler_state,cljs.core.assoc,new cljs.core.Keyword("cljspad.env","evaluating?","cljspad.env/evaluating?",1806474705),false);
}));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler_state,cljs.core.assoc,new cljs.core.Keyword("cljspad.env","evaluating?","cljspad.env/evaluating?",1806474705),false);
}
});
cljspad.env.eval_form = (function cljspad$env$eval_form(compiler_state,source_str){
var reader = cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(source_str);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler_state,cljs.core.assoc,new cljs.core.Keyword("cljspad.env","evaluating?","cljspad.env/evaluating?",1806474705),true);

return cljspad.env.eval_form_STAR_(compiler_state,reader);
});

//# sourceMappingURL=cljspad.env.js.map
