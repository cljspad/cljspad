goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__44479,p__44480){
var map__44481 = p__44479;
var map__44481__$1 = (((((!((map__44481 == null))))?(((((map__44481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44481):map__44481);
var svc = map__44481__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44481__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44481__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44481__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44482 = p__44480;
var map__44482__$1 = (((((!((map__44482 == null))))?(((((map__44482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44482):map__44482);
var msg = map__44482__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44482__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44482__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44482__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44482__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__44492,p__44493){
var map__44496 = p__44492;
var map__44496__$1 = (((((!((map__44496 == null))))?(((((map__44496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44496):map__44496);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44496__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__44497 = p__44493;
var map__44497__$1 = (((((!((map__44497 == null))))?(((((map__44497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44497):map__44497);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44497__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__44504,p__44505){
var map__44507 = p__44504;
var map__44507__$1 = (((((!((map__44507 == null))))?(((((map__44507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44507):map__44507);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44507__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44507__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44508 = p__44505;
var map__44508__$1 = (((((!((map__44508 == null))))?(((((map__44508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44508):map__44508);
var msg = map__44508__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44508__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__44515,tid){
var map__44516 = p__44515;
var map__44516__$1 = (((((!((map__44516 == null))))?(((((map__44516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44516):map__44516);
var svc = map__44516__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44516__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__44527 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__44528 = null;
var count__44529 = (0);
var i__44530 = (0);
while(true){
if((i__44530 < count__44529)){
var vec__44541 = chunk__44528.cljs$core$IIndexed$_nth$arity$2(null,i__44530);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44541,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44541,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44562 = seq__44527;
var G__44563 = chunk__44528;
var G__44564 = count__44529;
var G__44565 = (i__44530 + (1));
seq__44527 = G__44562;
chunk__44528 = G__44563;
count__44529 = G__44564;
i__44530 = G__44565;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44527);
if(temp__5735__auto__){
var seq__44527__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44527__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44527__$1);
var G__44566 = cljs.core.chunk_rest(seq__44527__$1);
var G__44567 = c__4556__auto__;
var G__44568 = cljs.core.count(c__4556__auto__);
var G__44569 = (0);
seq__44527 = G__44566;
chunk__44528 = G__44567;
count__44529 = G__44568;
i__44530 = G__44569;
continue;
} else {
var vec__44546 = cljs.core.first(seq__44527__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44546,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44546,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44572 = cljs.core.next(seq__44527__$1);
var G__44573 = null;
var G__44574 = (0);
var G__44575 = (0);
seq__44527 = G__44572;
chunk__44528 = G__44573;
count__44529 = G__44574;
i__44530 = G__44575;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__44518_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__44518_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__44519_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__44519_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__44520_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__44520_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__44521_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__44521_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__44552){
var map__44553 = p__44552;
var map__44553__$1 = (((((!((map__44553 == null))))?(((((map__44553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44553):map__44553);
var svc = map__44553__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44553__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44553__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
