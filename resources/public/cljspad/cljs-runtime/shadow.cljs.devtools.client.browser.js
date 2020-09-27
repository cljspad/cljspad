goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45218 = arguments.length;
var i__4737__auto___45219 = (0);
while(true){
if((i__4737__auto___45219 < len__4736__auto___45218)){
args__4742__auto__.push((arguments[i__4737__auto___45219]));

var G__45220 = (i__4737__auto___45219 + (1));
i__4737__auto___45219 = G__45220;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq44920){
var G__44921 = cljs.core.first(seq44920);
var seq44920__$1 = cljs.core.next(seq44920);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44921,seq44920__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__44924 = cljs.core.seq(sources);
var chunk__44925 = null;
var count__44926 = (0);
var i__44927 = (0);
while(true){
if((i__44927 < count__44926)){
var map__44934 = chunk__44925.cljs$core$IIndexed$_nth$arity$2(null,i__44927);
var map__44934__$1 = (((((!((map__44934 == null))))?(((((map__44934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44934):map__44934);
var src = map__44934__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44934__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44934__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44934__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44934__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e44936){var e_45221 = e44936;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45221);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45221.message)].join('')));
}

var G__45222 = seq__44924;
var G__45223 = chunk__44925;
var G__45224 = count__44926;
var G__45225 = (i__44927 + (1));
seq__44924 = G__45222;
chunk__44925 = G__45223;
count__44926 = G__45224;
i__44927 = G__45225;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44924);
if(temp__5735__auto__){
var seq__44924__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44924__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44924__$1);
var G__45226 = cljs.core.chunk_rest(seq__44924__$1);
var G__45227 = c__4556__auto__;
var G__45228 = cljs.core.count(c__4556__auto__);
var G__45229 = (0);
seq__44924 = G__45226;
chunk__44925 = G__45227;
count__44926 = G__45228;
i__44927 = G__45229;
continue;
} else {
var map__44937 = cljs.core.first(seq__44924__$1);
var map__44937__$1 = (((((!((map__44937 == null))))?(((((map__44937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44937):map__44937);
var src = map__44937__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44937__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44937__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44937__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44937__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e44941){var e_45230 = e44941;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45230);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45230.message)].join('')));
}

var G__45231 = cljs.core.next(seq__44924__$1);
var G__45232 = null;
var G__45233 = (0);
var G__45234 = (0);
seq__44924 = G__45231;
chunk__44925 = G__45232;
count__44926 = G__45233;
i__44927 = G__45234;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__44942 = cljs.core.seq(js_requires);
var chunk__44943 = null;
var count__44944 = (0);
var i__44945 = (0);
while(true){
if((i__44945 < count__44944)){
var js_ns = chunk__44943.cljs$core$IIndexed$_nth$arity$2(null,i__44945);
var require_str_45235 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45235);


var G__45236 = seq__44942;
var G__45237 = chunk__44943;
var G__45238 = count__44944;
var G__45239 = (i__44945 + (1));
seq__44942 = G__45236;
chunk__44943 = G__45237;
count__44944 = G__45238;
i__44945 = G__45239;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44942);
if(temp__5735__auto__){
var seq__44942__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44942__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44942__$1);
var G__45240 = cljs.core.chunk_rest(seq__44942__$1);
var G__45241 = c__4556__auto__;
var G__45242 = cljs.core.count(c__4556__auto__);
var G__45243 = (0);
seq__44942 = G__45240;
chunk__44943 = G__45241;
count__44944 = G__45242;
i__44945 = G__45243;
continue;
} else {
var js_ns = cljs.core.first(seq__44942__$1);
var require_str_45244 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45244);


var G__45245 = cljs.core.next(seq__44942__$1);
var G__45246 = null;
var G__45247 = (0);
var G__45248 = (0);
seq__44942 = G__45245;
chunk__44943 = G__45246;
count__44944 = G__45247;
i__44945 = G__45248;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__44953){
var map__44955 = p__44953;
var map__44955__$1 = (((((!((map__44955 == null))))?(((((map__44955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44955):map__44955);
var msg = map__44955__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44955__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44955__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44958(s__44959){
return (new cljs.core.LazySeq(null,(function (){
var s__44959__$1 = s__44959;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44959__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__44968 = cljs.core.first(xs__6292__auto__);
var map__44968__$1 = (((((!((map__44968 == null))))?(((((map__44968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44968):map__44968);
var src = map__44968__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44968__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44968__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__44959__$1,map__44968,map__44968__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__44955,map__44955__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44958_$_iter__44960(s__44961){
return (new cljs.core.LazySeq(null,((function (s__44959__$1,map__44968,map__44968__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__44955,map__44955__$1,msg,info,reload_info){
return (function (){
var s__44961__$1 = s__44961;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__44961__$1);
if(temp__5735__auto____$1){
var s__44961__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44961__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44961__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44963 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44962 = (0);
while(true){
if((i__44962 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__44962);
cljs.core.chunk_append(b__44963,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__45253 = (i__44962 + (1));
i__44962 = G__45253;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44963),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44958_$_iter__44960(cljs.core.chunk_rest(s__44961__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44963),null);
}
} else {
var warning = cljs.core.first(s__44961__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44958_$_iter__44960(cljs.core.rest(s__44961__$2)));
}
} else {
return null;
}
break;
}
});})(s__44959__$1,map__44968,map__44968__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__44955,map__44955__$1,msg,info,reload_info))
,null,null));
});})(s__44959__$1,map__44968,map__44968__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__44955,map__44955__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44958(cljs.core.rest(s__44959__$1)));
} else {
var G__45259 = cljs.core.rest(s__44959__$1);
s__44959__$1 = G__45259;
continue;
}
} else {
var G__45260 = cljs.core.rest(s__44959__$1);
s__44959__$1 = G__45260;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__44972_45261 = cljs.core.seq(warnings);
var chunk__44973_45262 = null;
var count__44974_45263 = (0);
var i__44975_45264 = (0);
while(true){
if((i__44975_45264 < count__44974_45263)){
var map__44988_45265 = chunk__44973_45262.cljs$core$IIndexed$_nth$arity$2(null,i__44975_45264);
var map__44988_45266__$1 = (((((!((map__44988_45265 == null))))?(((((map__44988_45265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44988_45265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44988_45265):map__44988_45265);
var w_45267 = map__44988_45266__$1;
var msg_45268__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44988_45266__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44988_45266__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44988_45266__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44988_45266__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45271)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45269),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45270),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45268__$1)].join(''));


var G__45276 = seq__44972_45261;
var G__45277 = chunk__44973_45262;
var G__45278 = count__44974_45263;
var G__45279 = (i__44975_45264 + (1));
seq__44972_45261 = G__45276;
chunk__44973_45262 = G__45277;
count__44974_45263 = G__45278;
i__44975_45264 = G__45279;
continue;
} else {
var temp__5735__auto___45280 = cljs.core.seq(seq__44972_45261);
if(temp__5735__auto___45280){
var seq__44972_45281__$1 = temp__5735__auto___45280;
if(cljs.core.chunked_seq_QMARK_(seq__44972_45281__$1)){
var c__4556__auto___45282 = cljs.core.chunk_first(seq__44972_45281__$1);
var G__45283 = cljs.core.chunk_rest(seq__44972_45281__$1);
var G__45284 = c__4556__auto___45282;
var G__45285 = cljs.core.count(c__4556__auto___45282);
var G__45286 = (0);
seq__44972_45261 = G__45283;
chunk__44973_45262 = G__45284;
count__44974_45263 = G__45285;
i__44975_45264 = G__45286;
continue;
} else {
var map__45020_45287 = cljs.core.first(seq__44972_45281__$1);
var map__45020_45288__$1 = (((((!((map__45020_45287 == null))))?(((((map__45020_45287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45020_45287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45020_45287):map__45020_45287);
var w_45289 = map__45020_45288__$1;
var msg_45290__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45020_45288__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45020_45288__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45020_45288__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45020_45288__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45293)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45291),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45292),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45290__$1)].join(''));


var G__45294 = cljs.core.next(seq__44972_45281__$1);
var G__45295 = null;
var G__45296 = (0);
var G__45297 = (0);
seq__44972_45261 = G__45294;
chunk__44973_45262 = G__45295;
count__44974_45263 = G__45296;
i__44975_45264 = G__45297;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__44950_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__44950_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__45026){
var map__45027 = p__45026;
var map__45027__$1 = (((((!((map__45027 == null))))?(((((map__45027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45027):map__45027);
var msg = map__45027__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45027__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__45029 = cljs.core.seq(updates);
var chunk__45031 = null;
var count__45032 = (0);
var i__45033 = (0);
while(true){
if((i__45033 < count__45032)){
var path = chunk__45031.cljs$core$IIndexed$_nth$arity$2(null,i__45033);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45065_45298 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45068_45299 = null;
var count__45069_45300 = (0);
var i__45070_45301 = (0);
while(true){
if((i__45070_45301 < count__45069_45300)){
var node_45302 = chunk__45068_45299.cljs$core$IIndexed$_nth$arity$2(null,i__45070_45301);
var path_match_45303 = shadow.cljs.devtools.client.browser.match_paths(node_45302.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45303)){
var new_link_45304 = (function (){var G__45082 = node_45302.cloneNode(true);
G__45082.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45303),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45082;
})();
(new_link_45304.onload = ((function (seq__45065_45298,chunk__45068_45299,count__45069_45300,i__45070_45301,seq__45029,chunk__45031,count__45032,i__45033,new_link_45304,path_match_45303,node_45302,path,map__45027,map__45027__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_45302);
});})(seq__45065_45298,chunk__45068_45299,count__45069_45300,i__45070_45301,seq__45029,chunk__45031,count__45032,i__45033,new_link_45304,path_match_45303,node_45302,path,map__45027,map__45027__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45303], 0));

goog.dom.insertSiblingAfter(new_link_45304,node_45302);


var G__45305 = seq__45065_45298;
var G__45306 = chunk__45068_45299;
var G__45307 = count__45069_45300;
var G__45308 = (i__45070_45301 + (1));
seq__45065_45298 = G__45305;
chunk__45068_45299 = G__45306;
count__45069_45300 = G__45307;
i__45070_45301 = G__45308;
continue;
} else {
var G__45309 = seq__45065_45298;
var G__45310 = chunk__45068_45299;
var G__45311 = count__45069_45300;
var G__45312 = (i__45070_45301 + (1));
seq__45065_45298 = G__45309;
chunk__45068_45299 = G__45310;
count__45069_45300 = G__45311;
i__45070_45301 = G__45312;
continue;
}
} else {
var temp__5735__auto___45313 = cljs.core.seq(seq__45065_45298);
if(temp__5735__auto___45313){
var seq__45065_45314__$1 = temp__5735__auto___45313;
if(cljs.core.chunked_seq_QMARK_(seq__45065_45314__$1)){
var c__4556__auto___45315 = cljs.core.chunk_first(seq__45065_45314__$1);
var G__45316 = cljs.core.chunk_rest(seq__45065_45314__$1);
var G__45317 = c__4556__auto___45315;
var G__45318 = cljs.core.count(c__4556__auto___45315);
var G__45319 = (0);
seq__45065_45298 = G__45316;
chunk__45068_45299 = G__45317;
count__45069_45300 = G__45318;
i__45070_45301 = G__45319;
continue;
} else {
var node_45320 = cljs.core.first(seq__45065_45314__$1);
var path_match_45321 = shadow.cljs.devtools.client.browser.match_paths(node_45320.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45321)){
var new_link_45322 = (function (){var G__45088 = node_45320.cloneNode(true);
G__45088.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45321),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45088;
})();
(new_link_45322.onload = ((function (seq__45065_45298,chunk__45068_45299,count__45069_45300,i__45070_45301,seq__45029,chunk__45031,count__45032,i__45033,new_link_45322,path_match_45321,node_45320,seq__45065_45314__$1,temp__5735__auto___45313,path,map__45027,map__45027__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_45320);
});})(seq__45065_45298,chunk__45068_45299,count__45069_45300,i__45070_45301,seq__45029,chunk__45031,count__45032,i__45033,new_link_45322,path_match_45321,node_45320,seq__45065_45314__$1,temp__5735__auto___45313,path,map__45027,map__45027__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45321], 0));

goog.dom.insertSiblingAfter(new_link_45322,node_45320);


var G__45323 = cljs.core.next(seq__45065_45314__$1);
var G__45324 = null;
var G__45325 = (0);
var G__45326 = (0);
seq__45065_45298 = G__45323;
chunk__45068_45299 = G__45324;
count__45069_45300 = G__45325;
i__45070_45301 = G__45326;
continue;
} else {
var G__45327 = cljs.core.next(seq__45065_45314__$1);
var G__45328 = null;
var G__45329 = (0);
var G__45330 = (0);
seq__45065_45298 = G__45327;
chunk__45068_45299 = G__45328;
count__45069_45300 = G__45329;
i__45070_45301 = G__45330;
continue;
}
}
} else {
}
}
break;
}


var G__45331 = seq__45029;
var G__45332 = chunk__45031;
var G__45333 = count__45032;
var G__45334 = (i__45033 + (1));
seq__45029 = G__45331;
chunk__45031 = G__45332;
count__45032 = G__45333;
i__45033 = G__45334;
continue;
} else {
var G__45335 = seq__45029;
var G__45336 = chunk__45031;
var G__45337 = count__45032;
var G__45338 = (i__45033 + (1));
seq__45029 = G__45335;
chunk__45031 = G__45336;
count__45032 = G__45337;
i__45033 = G__45338;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45029);
if(temp__5735__auto__){
var seq__45029__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45029__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45029__$1);
var G__45339 = cljs.core.chunk_rest(seq__45029__$1);
var G__45340 = c__4556__auto__;
var G__45341 = cljs.core.count(c__4556__auto__);
var G__45342 = (0);
seq__45029 = G__45339;
chunk__45031 = G__45340;
count__45032 = G__45341;
i__45033 = G__45342;
continue;
} else {
var path = cljs.core.first(seq__45029__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45094_45343 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45097_45344 = null;
var count__45098_45345 = (0);
var i__45099_45346 = (0);
while(true){
if((i__45099_45346 < count__45098_45345)){
var node_45347 = chunk__45097_45344.cljs$core$IIndexed$_nth$arity$2(null,i__45099_45346);
var path_match_45348 = shadow.cljs.devtools.client.browser.match_paths(node_45347.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45348)){
var new_link_45349 = (function (){var G__45155 = node_45347.cloneNode(true);
G__45155.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45348),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45155;
})();
(new_link_45349.onload = ((function (seq__45094_45343,chunk__45097_45344,count__45098_45345,i__45099_45346,seq__45029,chunk__45031,count__45032,i__45033,new_link_45349,path_match_45348,node_45347,path,seq__45029__$1,temp__5735__auto__,map__45027,map__45027__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_45347);
});})(seq__45094_45343,chunk__45097_45344,count__45098_45345,i__45099_45346,seq__45029,chunk__45031,count__45032,i__45033,new_link_45349,path_match_45348,node_45347,path,seq__45029__$1,temp__5735__auto__,map__45027,map__45027__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45348], 0));

goog.dom.insertSiblingAfter(new_link_45349,node_45347);


var G__45350 = seq__45094_45343;
var G__45351 = chunk__45097_45344;
var G__45352 = count__45098_45345;
var G__45353 = (i__45099_45346 + (1));
seq__45094_45343 = G__45350;
chunk__45097_45344 = G__45351;
count__45098_45345 = G__45352;
i__45099_45346 = G__45353;
continue;
} else {
var G__45354 = seq__45094_45343;
var G__45355 = chunk__45097_45344;
var G__45356 = count__45098_45345;
var G__45357 = (i__45099_45346 + (1));
seq__45094_45343 = G__45354;
chunk__45097_45344 = G__45355;
count__45098_45345 = G__45356;
i__45099_45346 = G__45357;
continue;
}
} else {
var temp__5735__auto___45358__$1 = cljs.core.seq(seq__45094_45343);
if(temp__5735__auto___45358__$1){
var seq__45094_45359__$1 = temp__5735__auto___45358__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45094_45359__$1)){
var c__4556__auto___45360 = cljs.core.chunk_first(seq__45094_45359__$1);
var G__45361 = cljs.core.chunk_rest(seq__45094_45359__$1);
var G__45362 = c__4556__auto___45360;
var G__45363 = cljs.core.count(c__4556__auto___45360);
var G__45364 = (0);
seq__45094_45343 = G__45361;
chunk__45097_45344 = G__45362;
count__45098_45345 = G__45363;
i__45099_45346 = G__45364;
continue;
} else {
var node_45365 = cljs.core.first(seq__45094_45359__$1);
var path_match_45366 = shadow.cljs.devtools.client.browser.match_paths(node_45365.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45366)){
var new_link_45367 = (function (){var G__45157 = node_45365.cloneNode(true);
G__45157.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45366),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45157;
})();
(new_link_45367.onload = ((function (seq__45094_45343,chunk__45097_45344,count__45098_45345,i__45099_45346,seq__45029,chunk__45031,count__45032,i__45033,new_link_45367,path_match_45366,node_45365,seq__45094_45359__$1,temp__5735__auto___45358__$1,path,seq__45029__$1,temp__5735__auto__,map__45027,map__45027__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_45365);
});})(seq__45094_45343,chunk__45097_45344,count__45098_45345,i__45099_45346,seq__45029,chunk__45031,count__45032,i__45033,new_link_45367,path_match_45366,node_45365,seq__45094_45359__$1,temp__5735__auto___45358__$1,path,seq__45029__$1,temp__5735__auto__,map__45027,map__45027__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45366], 0));

goog.dom.insertSiblingAfter(new_link_45367,node_45365);


var G__45368 = cljs.core.next(seq__45094_45359__$1);
var G__45369 = null;
var G__45370 = (0);
var G__45371 = (0);
seq__45094_45343 = G__45368;
chunk__45097_45344 = G__45369;
count__45098_45345 = G__45370;
i__45099_45346 = G__45371;
continue;
} else {
var G__45372 = cljs.core.next(seq__45094_45359__$1);
var G__45373 = null;
var G__45374 = (0);
var G__45375 = (0);
seq__45094_45343 = G__45372;
chunk__45097_45344 = G__45373;
count__45098_45345 = G__45374;
i__45099_45346 = G__45375;
continue;
}
}
} else {
}
}
break;
}


var G__45376 = cljs.core.next(seq__45029__$1);
var G__45377 = null;
var G__45378 = (0);
var G__45379 = (0);
seq__45029 = G__45376;
chunk__45031 = G__45377;
count__45032 = G__45378;
i__45033 = G__45379;
continue;
} else {
var G__45380 = cljs.core.next(seq__45029__$1);
var G__45381 = null;
var G__45382 = (0);
var G__45383 = (0);
seq__45029 = G__45380;
chunk__45031 = G__45381;
count__45032 = G__45382;
i__45033 = G__45383;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__45168){
var map__45169 = p__45168;
var map__45169__$1 = (((((!((map__45169 == null))))?(((((map__45169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45169):map__45169);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45169__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__45179){
var map__45180 = p__45179;
var map__45180__$1 = (((((!((map__45180 == null))))?(((((map__45180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45180):map__45180);
var _ = map__45180__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45180__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__45184,done,error){
var map__45185 = p__45184;
var map__45185__$1 = (((((!((map__45185 == null))))?(((((map__45185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45185):map__45185);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45185__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__45187,done,error){
var map__45188 = p__45187;
var map__45188__$1 = (((((!((map__45188 == null))))?(((((map__45188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45188):map__45188);
var msg = map__45188__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45188__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45188__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45188__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__45190){
var map__45191 = p__45190;
var map__45191__$1 = (((((!((map__45191 == null))))?(((((map__45191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45191):map__45191);
var src = map__45191__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45191__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__45193 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__45193) : done.call(null,G__45193));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__45194){
var map__45195 = p__45194;
var map__45195__$1 = (((((!((map__45195 == null))))?(((((map__45195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45195):map__45195);
var msg__$1 = map__45195__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45195__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e45201){var ex = e45201;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__45202){
var map__45203 = p__45202;
var map__45203__$1 = (((((!((map__45203 == null))))?(((((map__45203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45203):map__45203);
var env = map__45203__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45203__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__45209){
var map__45210 = p__45209;
var map__45210__$1 = (((((!((map__45210 == null))))?(((((map__45210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45210):map__45210);
var msg = map__45210__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45210__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__45212){
var map__45213 = p__45212;
var map__45213__$1 = (((((!((map__45213 == null))))?(((((map__45213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45213):map__45213);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45213__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45213__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__45215){
var map__45216 = p__45215;
var map__45216__$1 = (((((!((map__45216 == null))))?(((((map__45216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45216):map__45216);
var svc = map__45216__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45216__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
