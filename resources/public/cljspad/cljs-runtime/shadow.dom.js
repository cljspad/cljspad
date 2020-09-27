goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_42498 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_42498(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_42499 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_42499(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__42042 = coll;
var G__42043 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__42042,G__42043) : shadow.dom.lazy_native_coll_seq.call(null,G__42042,G__42043));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__42047 = arguments.length;
switch (G__42047) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__42050 = arguments.length;
switch (G__42050) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__42053 = arguments.length;
switch (G__42053) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__42055 = arguments.length;
switch (G__42055) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__42057 = arguments.length;
switch (G__42057) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__42066 = arguments.length;
switch (G__42066) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e42067){if((e42067 instanceof Object)){
var e = e42067;
return console.log("didnt support attachEvent",el,e);
} else {
throw e42067;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__42068 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__42069 = null;
var count__42070 = (0);
var i__42071 = (0);
while(true){
if((i__42071 < count__42070)){
var el = chunk__42069.cljs$core$IIndexed$_nth$arity$2(null,i__42071);
var handler_42521__$1 = ((function (seq__42068,chunk__42069,count__42070,i__42071,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__42068,chunk__42069,count__42070,i__42071,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_42521__$1);


var G__42522 = seq__42068;
var G__42523 = chunk__42069;
var G__42524 = count__42070;
var G__42525 = (i__42071 + (1));
seq__42068 = G__42522;
chunk__42069 = G__42523;
count__42070 = G__42524;
i__42071 = G__42525;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42068);
if(temp__5735__auto__){
var seq__42068__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42068__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42068__$1);
var G__42529 = cljs.core.chunk_rest(seq__42068__$1);
var G__42530 = c__4556__auto__;
var G__42531 = cljs.core.count(c__4556__auto__);
var G__42532 = (0);
seq__42068 = G__42529;
chunk__42069 = G__42530;
count__42070 = G__42531;
i__42071 = G__42532;
continue;
} else {
var el = cljs.core.first(seq__42068__$1);
var handler_42533__$1 = ((function (seq__42068,chunk__42069,count__42070,i__42071,el,seq__42068__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__42068,chunk__42069,count__42070,i__42071,el,seq__42068__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_42533__$1);


var G__42534 = cljs.core.next(seq__42068__$1);
var G__42535 = null;
var G__42536 = (0);
var G__42537 = (0);
seq__42068 = G__42534;
chunk__42069 = G__42535;
count__42070 = G__42536;
i__42071 = G__42537;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__42077 = arguments.length;
switch (G__42077) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__42078 = cljs.core.seq(events);
var chunk__42079 = null;
var count__42080 = (0);
var i__42081 = (0);
while(true){
if((i__42081 < count__42080)){
var vec__42088 = chunk__42079.cljs$core$IIndexed$_nth$arity$2(null,i__42081);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42088,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42088,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__42547 = seq__42078;
var G__42548 = chunk__42079;
var G__42549 = count__42080;
var G__42550 = (i__42081 + (1));
seq__42078 = G__42547;
chunk__42079 = G__42548;
count__42080 = G__42549;
i__42081 = G__42550;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42078);
if(temp__5735__auto__){
var seq__42078__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42078__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42078__$1);
var G__42551 = cljs.core.chunk_rest(seq__42078__$1);
var G__42552 = c__4556__auto__;
var G__42553 = cljs.core.count(c__4556__auto__);
var G__42554 = (0);
seq__42078 = G__42551;
chunk__42079 = G__42552;
count__42080 = G__42553;
i__42081 = G__42554;
continue;
} else {
var vec__42094 = cljs.core.first(seq__42078__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42094,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42094,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__42561 = cljs.core.next(seq__42078__$1);
var G__42562 = null;
var G__42563 = (0);
var G__42564 = (0);
seq__42078 = G__42561;
chunk__42079 = G__42562;
count__42080 = G__42563;
i__42081 = G__42564;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__42097 = cljs.core.seq(styles);
var chunk__42098 = null;
var count__42099 = (0);
var i__42100 = (0);
while(true){
if((i__42100 < count__42099)){
var vec__42110 = chunk__42098.cljs$core$IIndexed$_nth$arity$2(null,i__42100);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42110,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42110,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__42565 = seq__42097;
var G__42566 = chunk__42098;
var G__42567 = count__42099;
var G__42568 = (i__42100 + (1));
seq__42097 = G__42565;
chunk__42098 = G__42566;
count__42099 = G__42567;
i__42100 = G__42568;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42097);
if(temp__5735__auto__){
var seq__42097__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42097__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42097__$1);
var G__42569 = cljs.core.chunk_rest(seq__42097__$1);
var G__42570 = c__4556__auto__;
var G__42571 = cljs.core.count(c__4556__auto__);
var G__42572 = (0);
seq__42097 = G__42569;
chunk__42098 = G__42570;
count__42099 = G__42571;
i__42100 = G__42572;
continue;
} else {
var vec__42113 = cljs.core.first(seq__42097__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42113,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42113,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__42573 = cljs.core.next(seq__42097__$1);
var G__42574 = null;
var G__42575 = (0);
var G__42576 = (0);
seq__42097 = G__42573;
chunk__42098 = G__42574;
count__42099 = G__42575;
i__42100 = G__42576;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__42116_42578 = key;
var G__42116_42579__$1 = (((G__42116_42578 instanceof cljs.core.Keyword))?G__42116_42578.fqn:null);
switch (G__42116_42579__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_42584 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_42584,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_42584,"aria-");
}
})())){
el.setAttribute(ks_42584,value);
} else {
(el[ks_42584] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__42117){
var map__42118 = p__42117;
var map__42118__$1 = (((((!((map__42118 == null))))?(((((map__42118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42118):map__42118);
var props = map__42118__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42118__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__42123 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42123,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42123,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42123,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__42126 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__42126,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__42126;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__42128 = arguments.length;
switch (G__42128) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__42132){
var vec__42133 = p__42132;
var seq__42134 = cljs.core.seq(vec__42133);
var first__42135 = cljs.core.first(seq__42134);
var seq__42134__$1 = cljs.core.next(seq__42134);
var nn = first__42135;
var first__42135__$1 = cljs.core.first(seq__42134__$1);
var seq__42134__$2 = cljs.core.next(seq__42134__$1);
var np = first__42135__$1;
var nc = seq__42134__$2;
var node = vec__42133;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42137 = nn;
var G__42138 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__42137,G__42138) : create_fn.call(null,G__42137,G__42138));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42142 = nn;
var G__42143 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__42142,G__42143) : create_fn.call(null,G__42142,G__42143));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__42144 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42144,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42144,(1),null);
var seq__42147_42605 = cljs.core.seq(node_children);
var chunk__42148_42606 = null;
var count__42149_42607 = (0);
var i__42150_42608 = (0);
while(true){
if((i__42150_42608 < count__42149_42607)){
var child_struct_42609 = chunk__42148_42606.cljs$core$IIndexed$_nth$arity$2(null,i__42150_42608);
var children_42610 = shadow.dom.dom_node(child_struct_42609);
if(cljs.core.seq_QMARK_(children_42610)){
var seq__42193_42611 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_42610));
var chunk__42195_42612 = null;
var count__42196_42613 = (0);
var i__42197_42614 = (0);
while(true){
if((i__42197_42614 < count__42196_42613)){
var child_42618 = chunk__42195_42612.cljs$core$IIndexed$_nth$arity$2(null,i__42197_42614);
if(cljs.core.truth_(child_42618)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42618);


var G__42619 = seq__42193_42611;
var G__42620 = chunk__42195_42612;
var G__42621 = count__42196_42613;
var G__42622 = (i__42197_42614 + (1));
seq__42193_42611 = G__42619;
chunk__42195_42612 = G__42620;
count__42196_42613 = G__42621;
i__42197_42614 = G__42622;
continue;
} else {
var G__42623 = seq__42193_42611;
var G__42624 = chunk__42195_42612;
var G__42625 = count__42196_42613;
var G__42626 = (i__42197_42614 + (1));
seq__42193_42611 = G__42623;
chunk__42195_42612 = G__42624;
count__42196_42613 = G__42625;
i__42197_42614 = G__42626;
continue;
}
} else {
var temp__5735__auto___42627 = cljs.core.seq(seq__42193_42611);
if(temp__5735__auto___42627){
var seq__42193_42628__$1 = temp__5735__auto___42627;
if(cljs.core.chunked_seq_QMARK_(seq__42193_42628__$1)){
var c__4556__auto___42629 = cljs.core.chunk_first(seq__42193_42628__$1);
var G__42630 = cljs.core.chunk_rest(seq__42193_42628__$1);
var G__42631 = c__4556__auto___42629;
var G__42632 = cljs.core.count(c__4556__auto___42629);
var G__42633 = (0);
seq__42193_42611 = G__42630;
chunk__42195_42612 = G__42631;
count__42196_42613 = G__42632;
i__42197_42614 = G__42633;
continue;
} else {
var child_42638 = cljs.core.first(seq__42193_42628__$1);
if(cljs.core.truth_(child_42638)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42638);


var G__42639 = cljs.core.next(seq__42193_42628__$1);
var G__42640 = null;
var G__42641 = (0);
var G__42642 = (0);
seq__42193_42611 = G__42639;
chunk__42195_42612 = G__42640;
count__42196_42613 = G__42641;
i__42197_42614 = G__42642;
continue;
} else {
var G__42643 = cljs.core.next(seq__42193_42628__$1);
var G__42644 = null;
var G__42645 = (0);
var G__42646 = (0);
seq__42193_42611 = G__42643;
chunk__42195_42612 = G__42644;
count__42196_42613 = G__42645;
i__42197_42614 = G__42646;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_42610);
}


var G__42647 = seq__42147_42605;
var G__42648 = chunk__42148_42606;
var G__42649 = count__42149_42607;
var G__42650 = (i__42150_42608 + (1));
seq__42147_42605 = G__42647;
chunk__42148_42606 = G__42648;
count__42149_42607 = G__42649;
i__42150_42608 = G__42650;
continue;
} else {
var temp__5735__auto___42651 = cljs.core.seq(seq__42147_42605);
if(temp__5735__auto___42651){
var seq__42147_42652__$1 = temp__5735__auto___42651;
if(cljs.core.chunked_seq_QMARK_(seq__42147_42652__$1)){
var c__4556__auto___42653 = cljs.core.chunk_first(seq__42147_42652__$1);
var G__42654 = cljs.core.chunk_rest(seq__42147_42652__$1);
var G__42655 = c__4556__auto___42653;
var G__42656 = cljs.core.count(c__4556__auto___42653);
var G__42657 = (0);
seq__42147_42605 = G__42654;
chunk__42148_42606 = G__42655;
count__42149_42607 = G__42656;
i__42150_42608 = G__42657;
continue;
} else {
var child_struct_42658 = cljs.core.first(seq__42147_42652__$1);
var children_42659 = shadow.dom.dom_node(child_struct_42658);
if(cljs.core.seq_QMARK_(children_42659)){
var seq__42207_42660 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_42659));
var chunk__42209_42661 = null;
var count__42210_42662 = (0);
var i__42211_42663 = (0);
while(true){
if((i__42211_42663 < count__42210_42662)){
var child_42664 = chunk__42209_42661.cljs$core$IIndexed$_nth$arity$2(null,i__42211_42663);
if(cljs.core.truth_(child_42664)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42664);


var G__42665 = seq__42207_42660;
var G__42666 = chunk__42209_42661;
var G__42667 = count__42210_42662;
var G__42668 = (i__42211_42663 + (1));
seq__42207_42660 = G__42665;
chunk__42209_42661 = G__42666;
count__42210_42662 = G__42667;
i__42211_42663 = G__42668;
continue;
} else {
var G__42669 = seq__42207_42660;
var G__42670 = chunk__42209_42661;
var G__42671 = count__42210_42662;
var G__42672 = (i__42211_42663 + (1));
seq__42207_42660 = G__42669;
chunk__42209_42661 = G__42670;
count__42210_42662 = G__42671;
i__42211_42663 = G__42672;
continue;
}
} else {
var temp__5735__auto___42673__$1 = cljs.core.seq(seq__42207_42660);
if(temp__5735__auto___42673__$1){
var seq__42207_42674__$1 = temp__5735__auto___42673__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42207_42674__$1)){
var c__4556__auto___42675 = cljs.core.chunk_first(seq__42207_42674__$1);
var G__42676 = cljs.core.chunk_rest(seq__42207_42674__$1);
var G__42677 = c__4556__auto___42675;
var G__42678 = cljs.core.count(c__4556__auto___42675);
var G__42679 = (0);
seq__42207_42660 = G__42676;
chunk__42209_42661 = G__42677;
count__42210_42662 = G__42678;
i__42211_42663 = G__42679;
continue;
} else {
var child_42687 = cljs.core.first(seq__42207_42674__$1);
if(cljs.core.truth_(child_42687)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42687);


var G__42688 = cljs.core.next(seq__42207_42674__$1);
var G__42689 = null;
var G__42690 = (0);
var G__42691 = (0);
seq__42207_42660 = G__42688;
chunk__42209_42661 = G__42689;
count__42210_42662 = G__42690;
i__42211_42663 = G__42691;
continue;
} else {
var G__42692 = cljs.core.next(seq__42207_42674__$1);
var G__42693 = null;
var G__42694 = (0);
var G__42695 = (0);
seq__42207_42660 = G__42692;
chunk__42209_42661 = G__42693;
count__42210_42662 = G__42694;
i__42211_42663 = G__42695;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_42659);
}


var G__42696 = cljs.core.next(seq__42147_42652__$1);
var G__42697 = null;
var G__42698 = (0);
var G__42699 = (0);
seq__42147_42605 = G__42696;
chunk__42148_42606 = G__42697;
count__42149_42607 = G__42698;
i__42150_42608 = G__42699;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__42223 = cljs.core.seq(node);
var chunk__42224 = null;
var count__42225 = (0);
var i__42226 = (0);
while(true){
if((i__42226 < count__42225)){
var n = chunk__42224.cljs$core$IIndexed$_nth$arity$2(null,i__42226);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__42706 = seq__42223;
var G__42707 = chunk__42224;
var G__42708 = count__42225;
var G__42709 = (i__42226 + (1));
seq__42223 = G__42706;
chunk__42224 = G__42707;
count__42225 = G__42708;
i__42226 = G__42709;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42223);
if(temp__5735__auto__){
var seq__42223__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42223__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42223__$1);
var G__42710 = cljs.core.chunk_rest(seq__42223__$1);
var G__42711 = c__4556__auto__;
var G__42712 = cljs.core.count(c__4556__auto__);
var G__42713 = (0);
seq__42223 = G__42710;
chunk__42224 = G__42711;
count__42225 = G__42712;
i__42226 = G__42713;
continue;
} else {
var n = cljs.core.first(seq__42223__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__42714 = cljs.core.next(seq__42223__$1);
var G__42715 = null;
var G__42716 = (0);
var G__42718 = (0);
seq__42223 = G__42714;
chunk__42224 = G__42715;
count__42225 = G__42716;
i__42226 = G__42718;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__42232 = arguments.length;
switch (G__42232) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__42236 = arguments.length;
switch (G__42236) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__42242 = arguments.length;
switch (G__42242) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42738 = arguments.length;
var i__4737__auto___42741 = (0);
while(true){
if((i__4737__auto___42741 < len__4736__auto___42738)){
args__4742__auto__.push((arguments[i__4737__auto___42741]));

var G__42742 = (i__4737__auto___42741 + (1));
i__4737__auto___42741 = G__42742;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__42248_42743 = cljs.core.seq(nodes);
var chunk__42249_42744 = null;
var count__42250_42745 = (0);
var i__42251_42746 = (0);
while(true){
if((i__42251_42746 < count__42250_42745)){
var node_42747 = chunk__42249_42744.cljs$core$IIndexed$_nth$arity$2(null,i__42251_42746);
fragment.appendChild(shadow.dom._to_dom(node_42747));


var G__42748 = seq__42248_42743;
var G__42749 = chunk__42249_42744;
var G__42750 = count__42250_42745;
var G__42751 = (i__42251_42746 + (1));
seq__42248_42743 = G__42748;
chunk__42249_42744 = G__42749;
count__42250_42745 = G__42750;
i__42251_42746 = G__42751;
continue;
} else {
var temp__5735__auto___42752 = cljs.core.seq(seq__42248_42743);
if(temp__5735__auto___42752){
var seq__42248_42753__$1 = temp__5735__auto___42752;
if(cljs.core.chunked_seq_QMARK_(seq__42248_42753__$1)){
var c__4556__auto___42754 = cljs.core.chunk_first(seq__42248_42753__$1);
var G__42755 = cljs.core.chunk_rest(seq__42248_42753__$1);
var G__42756 = c__4556__auto___42754;
var G__42757 = cljs.core.count(c__4556__auto___42754);
var G__42758 = (0);
seq__42248_42743 = G__42755;
chunk__42249_42744 = G__42756;
count__42250_42745 = G__42757;
i__42251_42746 = G__42758;
continue;
} else {
var node_42759 = cljs.core.first(seq__42248_42753__$1);
fragment.appendChild(shadow.dom._to_dom(node_42759));


var G__42760 = cljs.core.next(seq__42248_42753__$1);
var G__42761 = null;
var G__42762 = (0);
var G__42763 = (0);
seq__42248_42743 = G__42760;
chunk__42249_42744 = G__42761;
count__42250_42745 = G__42762;
i__42251_42746 = G__42763;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq42246){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42246));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__42255_42764 = cljs.core.seq(scripts);
var chunk__42256_42765 = null;
var count__42257_42766 = (0);
var i__42258_42767 = (0);
while(true){
if((i__42258_42767 < count__42257_42766)){
var vec__42267_42780 = chunk__42256_42765.cljs$core$IIndexed$_nth$arity$2(null,i__42258_42767);
var script_tag_42781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42267_42780,(0),null);
var script_body_42782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42267_42780,(1),null);
eval(script_body_42782);


var G__42783 = seq__42255_42764;
var G__42784 = chunk__42256_42765;
var G__42785 = count__42257_42766;
var G__42786 = (i__42258_42767 + (1));
seq__42255_42764 = G__42783;
chunk__42256_42765 = G__42784;
count__42257_42766 = G__42785;
i__42258_42767 = G__42786;
continue;
} else {
var temp__5735__auto___42787 = cljs.core.seq(seq__42255_42764);
if(temp__5735__auto___42787){
var seq__42255_42790__$1 = temp__5735__auto___42787;
if(cljs.core.chunked_seq_QMARK_(seq__42255_42790__$1)){
var c__4556__auto___42791 = cljs.core.chunk_first(seq__42255_42790__$1);
var G__42792 = cljs.core.chunk_rest(seq__42255_42790__$1);
var G__42793 = c__4556__auto___42791;
var G__42794 = cljs.core.count(c__4556__auto___42791);
var G__42795 = (0);
seq__42255_42764 = G__42792;
chunk__42256_42765 = G__42793;
count__42257_42766 = G__42794;
i__42258_42767 = G__42795;
continue;
} else {
var vec__42274_42796 = cljs.core.first(seq__42255_42790__$1);
var script_tag_42797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42274_42796,(0),null);
var script_body_42798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42274_42796,(1),null);
eval(script_body_42798);


var G__42800 = cljs.core.next(seq__42255_42790__$1);
var G__42801 = null;
var G__42802 = (0);
var G__42803 = (0);
seq__42255_42764 = G__42800;
chunk__42256_42765 = G__42801;
count__42257_42766 = G__42802;
i__42258_42767 = G__42803;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__42278){
var vec__42279 = p__42278;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42279,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42279,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__42289 = arguments.length;
switch (G__42289) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__42291 = cljs.core.seq(style_keys);
var chunk__42292 = null;
var count__42293 = (0);
var i__42294 = (0);
while(true){
if((i__42294 < count__42293)){
var it = chunk__42292.cljs$core$IIndexed$_nth$arity$2(null,i__42294);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__42816 = seq__42291;
var G__42817 = chunk__42292;
var G__42818 = count__42293;
var G__42819 = (i__42294 + (1));
seq__42291 = G__42816;
chunk__42292 = G__42817;
count__42293 = G__42818;
i__42294 = G__42819;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42291);
if(temp__5735__auto__){
var seq__42291__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42291__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42291__$1);
var G__42820 = cljs.core.chunk_rest(seq__42291__$1);
var G__42821 = c__4556__auto__;
var G__42822 = cljs.core.count(c__4556__auto__);
var G__42823 = (0);
seq__42291 = G__42820;
chunk__42292 = G__42821;
count__42293 = G__42822;
i__42294 = G__42823;
continue;
} else {
var it = cljs.core.first(seq__42291__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__42824 = cljs.core.next(seq__42291__$1);
var G__42825 = null;
var G__42826 = (0);
var G__42827 = (0);
seq__42291 = G__42824;
chunk__42292 = G__42825;
count__42293 = G__42826;
i__42294 = G__42827;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42299,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42304 = k42299;
var G__42304__$1 = (((G__42304 instanceof cljs.core.Keyword))?G__42304.fqn:null);
switch (G__42304__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42299,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42305){
var vec__42306 = p__42305;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42306,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42306,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42298){
var self__ = this;
var G__42298__$1 = this;
return (new cljs.core.RecordIter((0),G__42298__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42300,other42301){
var self__ = this;
var this42300__$1 = this;
return (((!((other42301 == null)))) && ((this42300__$1.constructor === other42301.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42300__$1.x,other42301.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42300__$1.y,other42301.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42300__$1.__extmap,other42301.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42298){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42325 = cljs.core.keyword_identical_QMARK_;
var expr__42326 = k__4388__auto__;
if(cljs.core.truth_((pred__42325.cljs$core$IFn$_invoke$arity$2 ? pred__42325.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__42326) : pred__42325.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__42326)))){
return (new shadow.dom.Coordinate(G__42298,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42325.cljs$core$IFn$_invoke$arity$2 ? pred__42325.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__42326) : pred__42325.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__42326)))){
return (new shadow.dom.Coordinate(self__.x,G__42298,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42298),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42298){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__42298,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__42302){
var extmap__4419__auto__ = (function (){var G__42331 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42302,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__42302)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42331);
} else {
return G__42331;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__42302),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__42302),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42333,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42341 = k42333;
var G__42341__$1 = (((G__42341 instanceof cljs.core.Keyword))?G__42341.fqn:null);
switch (G__42341__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42333,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42342){
var vec__42343 = p__42342;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42343,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42343,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42332){
var self__ = this;
var G__42332__$1 = this;
return (new cljs.core.RecordIter((0),G__42332__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42335,other42336){
var self__ = this;
var this42335__$1 = this;
return (((!((other42336 == null)))) && ((this42335__$1.constructor === other42336.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42335__$1.w,other42336.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42335__$1.h,other42336.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42335__$1.__extmap,other42336.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42332){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42346 = cljs.core.keyword_identical_QMARK_;
var expr__42347 = k__4388__auto__;
if(cljs.core.truth_((pred__42346.cljs$core$IFn$_invoke$arity$2 ? pred__42346.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__42347) : pred__42346.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__42347)))){
return (new shadow.dom.Size(G__42332,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42346.cljs$core$IFn$_invoke$arity$2 ? pred__42346.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__42347) : pred__42346.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__42347)))){
return (new shadow.dom.Size(self__.w,G__42332,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42332),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42332){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__42332,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__42337){
var extmap__4419__auto__ = (function (){var G__42349 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42337,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__42337)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42349);
} else {
return G__42349;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__42337),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__42337),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__42880 = (i + (1));
var G__42881 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__42880;
ret = G__42881;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__42357){
var vec__42358 = p__42357;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42358,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42358,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__42362 = arguments.length;
switch (G__42362) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__42889 = ps;
var G__42890 = (i + (1));
el__$1 = G__42889;
i = G__42890;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__42367 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42367,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42367,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42367,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__42370_42893 = cljs.core.seq(props);
var chunk__42371_42894 = null;
var count__42372_42895 = (0);
var i__42373_42896 = (0);
while(true){
if((i__42373_42896 < count__42372_42895)){
var vec__42383_42897 = chunk__42371_42894.cljs$core$IIndexed$_nth$arity$2(null,i__42373_42896);
var k_42898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42383_42897,(0),null);
var v_42899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42383_42897,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_42898);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_42898),v_42899);


var G__42900 = seq__42370_42893;
var G__42901 = chunk__42371_42894;
var G__42902 = count__42372_42895;
var G__42903 = (i__42373_42896 + (1));
seq__42370_42893 = G__42900;
chunk__42371_42894 = G__42901;
count__42372_42895 = G__42902;
i__42373_42896 = G__42903;
continue;
} else {
var temp__5735__auto___42904 = cljs.core.seq(seq__42370_42893);
if(temp__5735__auto___42904){
var seq__42370_42905__$1 = temp__5735__auto___42904;
if(cljs.core.chunked_seq_QMARK_(seq__42370_42905__$1)){
var c__4556__auto___42906 = cljs.core.chunk_first(seq__42370_42905__$1);
var G__42907 = cljs.core.chunk_rest(seq__42370_42905__$1);
var G__42908 = c__4556__auto___42906;
var G__42909 = cljs.core.count(c__4556__auto___42906);
var G__42910 = (0);
seq__42370_42893 = G__42907;
chunk__42371_42894 = G__42908;
count__42372_42895 = G__42909;
i__42373_42896 = G__42910;
continue;
} else {
var vec__42386_42911 = cljs.core.first(seq__42370_42905__$1);
var k_42912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42386_42911,(0),null);
var v_42913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42386_42911,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_42912);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_42912),v_42913);


var G__42917 = cljs.core.next(seq__42370_42905__$1);
var G__42918 = null;
var G__42919 = (0);
var G__42920 = (0);
seq__42370_42893 = G__42917;
chunk__42371_42894 = G__42918;
count__42372_42895 = G__42919;
i__42373_42896 = G__42920;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__42393 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42393,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42393,(1),null);
var seq__42396_42925 = cljs.core.seq(node_children);
var chunk__42398_42926 = null;
var count__42399_42927 = (0);
var i__42400_42928 = (0);
while(true){
if((i__42400_42928 < count__42399_42927)){
var child_struct_42929 = chunk__42398_42926.cljs$core$IIndexed$_nth$arity$2(null,i__42400_42928);
if((!((child_struct_42929 == null)))){
if(typeof child_struct_42929 === 'string'){
var text_42930 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_42930),child_struct_42929].join(''));
} else {
var children_42931 = shadow.dom.svg_node(child_struct_42929);
if(cljs.core.seq_QMARK_(children_42931)){
var seq__42433_42932 = cljs.core.seq(children_42931);
var chunk__42435_42933 = null;
var count__42436_42934 = (0);
var i__42437_42935 = (0);
while(true){
if((i__42437_42935 < count__42436_42934)){
var child_42936 = chunk__42435_42933.cljs$core$IIndexed$_nth$arity$2(null,i__42437_42935);
if(cljs.core.truth_(child_42936)){
node.appendChild(child_42936);


var G__42937 = seq__42433_42932;
var G__42938 = chunk__42435_42933;
var G__42939 = count__42436_42934;
var G__42940 = (i__42437_42935 + (1));
seq__42433_42932 = G__42937;
chunk__42435_42933 = G__42938;
count__42436_42934 = G__42939;
i__42437_42935 = G__42940;
continue;
} else {
var G__42941 = seq__42433_42932;
var G__42942 = chunk__42435_42933;
var G__42943 = count__42436_42934;
var G__42944 = (i__42437_42935 + (1));
seq__42433_42932 = G__42941;
chunk__42435_42933 = G__42942;
count__42436_42934 = G__42943;
i__42437_42935 = G__42944;
continue;
}
} else {
var temp__5735__auto___42945 = cljs.core.seq(seq__42433_42932);
if(temp__5735__auto___42945){
var seq__42433_42946__$1 = temp__5735__auto___42945;
if(cljs.core.chunked_seq_QMARK_(seq__42433_42946__$1)){
var c__4556__auto___42947 = cljs.core.chunk_first(seq__42433_42946__$1);
var G__42948 = cljs.core.chunk_rest(seq__42433_42946__$1);
var G__42949 = c__4556__auto___42947;
var G__42950 = cljs.core.count(c__4556__auto___42947);
var G__42951 = (0);
seq__42433_42932 = G__42948;
chunk__42435_42933 = G__42949;
count__42436_42934 = G__42950;
i__42437_42935 = G__42951;
continue;
} else {
var child_42952 = cljs.core.first(seq__42433_42946__$1);
if(cljs.core.truth_(child_42952)){
node.appendChild(child_42952);


var G__42959 = cljs.core.next(seq__42433_42946__$1);
var G__42960 = null;
var G__42961 = (0);
var G__42962 = (0);
seq__42433_42932 = G__42959;
chunk__42435_42933 = G__42960;
count__42436_42934 = G__42961;
i__42437_42935 = G__42962;
continue;
} else {
var G__42965 = cljs.core.next(seq__42433_42946__$1);
var G__42966 = null;
var G__42967 = (0);
var G__42968 = (0);
seq__42433_42932 = G__42965;
chunk__42435_42933 = G__42966;
count__42436_42934 = G__42967;
i__42437_42935 = G__42968;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_42931);
}
}


var G__42973 = seq__42396_42925;
var G__42974 = chunk__42398_42926;
var G__42975 = count__42399_42927;
var G__42976 = (i__42400_42928 + (1));
seq__42396_42925 = G__42973;
chunk__42398_42926 = G__42974;
count__42399_42927 = G__42975;
i__42400_42928 = G__42976;
continue;
} else {
var G__42980 = seq__42396_42925;
var G__42981 = chunk__42398_42926;
var G__42982 = count__42399_42927;
var G__42983 = (i__42400_42928 + (1));
seq__42396_42925 = G__42980;
chunk__42398_42926 = G__42981;
count__42399_42927 = G__42982;
i__42400_42928 = G__42983;
continue;
}
} else {
var temp__5735__auto___42984 = cljs.core.seq(seq__42396_42925);
if(temp__5735__auto___42984){
var seq__42396_42987__$1 = temp__5735__auto___42984;
if(cljs.core.chunked_seq_QMARK_(seq__42396_42987__$1)){
var c__4556__auto___42989 = cljs.core.chunk_first(seq__42396_42987__$1);
var G__42990 = cljs.core.chunk_rest(seq__42396_42987__$1);
var G__42991 = c__4556__auto___42989;
var G__42992 = cljs.core.count(c__4556__auto___42989);
var G__42993 = (0);
seq__42396_42925 = G__42990;
chunk__42398_42926 = G__42991;
count__42399_42927 = G__42992;
i__42400_42928 = G__42993;
continue;
} else {
var child_struct_42998 = cljs.core.first(seq__42396_42987__$1);
if((!((child_struct_42998 == null)))){
if(typeof child_struct_42998 === 'string'){
var text_43001 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_43001),child_struct_42998].join(''));
} else {
var children_43010 = shadow.dom.svg_node(child_struct_42998);
if(cljs.core.seq_QMARK_(children_43010)){
var seq__42442_43020 = cljs.core.seq(children_43010);
var chunk__42444_43021 = null;
var count__42445_43022 = (0);
var i__42446_43023 = (0);
while(true){
if((i__42446_43023 < count__42445_43022)){
var child_43024 = chunk__42444_43021.cljs$core$IIndexed$_nth$arity$2(null,i__42446_43023);
if(cljs.core.truth_(child_43024)){
node.appendChild(child_43024);


var G__43025 = seq__42442_43020;
var G__43026 = chunk__42444_43021;
var G__43027 = count__42445_43022;
var G__43028 = (i__42446_43023 + (1));
seq__42442_43020 = G__43025;
chunk__42444_43021 = G__43026;
count__42445_43022 = G__43027;
i__42446_43023 = G__43028;
continue;
} else {
var G__43031 = seq__42442_43020;
var G__43032 = chunk__42444_43021;
var G__43033 = count__42445_43022;
var G__43034 = (i__42446_43023 + (1));
seq__42442_43020 = G__43031;
chunk__42444_43021 = G__43032;
count__42445_43022 = G__43033;
i__42446_43023 = G__43034;
continue;
}
} else {
var temp__5735__auto___43035__$1 = cljs.core.seq(seq__42442_43020);
if(temp__5735__auto___43035__$1){
var seq__42442_43036__$1 = temp__5735__auto___43035__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42442_43036__$1)){
var c__4556__auto___43037 = cljs.core.chunk_first(seq__42442_43036__$1);
var G__43038 = cljs.core.chunk_rest(seq__42442_43036__$1);
var G__43039 = c__4556__auto___43037;
var G__43040 = cljs.core.count(c__4556__auto___43037);
var G__43041 = (0);
seq__42442_43020 = G__43038;
chunk__42444_43021 = G__43039;
count__42445_43022 = G__43040;
i__42446_43023 = G__43041;
continue;
} else {
var child_43044 = cljs.core.first(seq__42442_43036__$1);
if(cljs.core.truth_(child_43044)){
node.appendChild(child_43044);


var G__43049 = cljs.core.next(seq__42442_43036__$1);
var G__43050 = null;
var G__43051 = (0);
var G__43052 = (0);
seq__42442_43020 = G__43049;
chunk__42444_43021 = G__43050;
count__42445_43022 = G__43051;
i__42446_43023 = G__43052;
continue;
} else {
var G__43054 = cljs.core.next(seq__42442_43036__$1);
var G__43055 = null;
var G__43056 = (0);
var G__43057 = (0);
seq__42442_43020 = G__43054;
chunk__42444_43021 = G__43055;
count__42445_43022 = G__43056;
i__42446_43023 = G__43057;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_43010);
}
}


var G__43059 = cljs.core.next(seq__42396_42987__$1);
var G__43060 = null;
var G__43061 = (0);
var G__43062 = (0);
seq__42396_42925 = G__43059;
chunk__42398_42926 = G__43060;
count__42399_42927 = G__43061;
i__42400_42928 = G__43062;
continue;
} else {
var G__43063 = cljs.core.next(seq__42396_42987__$1);
var G__43064 = null;
var G__43065 = (0);
var G__43066 = (0);
seq__42396_42925 = G__43063;
chunk__42398_42926 = G__43064;
count__42399_42927 = G__43065;
i__42400_42928 = G__43066;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43074 = arguments.length;
var i__4737__auto___43075 = (0);
while(true){
if((i__4737__auto___43075 < len__4736__auto___43074)){
args__4742__auto__.push((arguments[i__4737__auto___43075]));

var G__43076 = (i__4737__auto___43075 + (1));
i__4737__auto___43075 = G__43076;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq42454){
var G__42455 = cljs.core.first(seq42454);
var seq42454__$1 = cljs.core.next(seq42454);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42455,seq42454__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__42457 = arguments.length;
switch (G__42457) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__41910__auto___43080 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41911__auto__ = (function (){var switch__41800__auto__ = (function (state_42474){
var state_val_42475 = (state_42474[(1)]);
if((state_val_42475 === (1))){
var state_42474__$1 = state_42474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42474__$1,(2),once_or_cleanup);
} else {
if((state_val_42475 === (2))){
var inst_42471 = (state_42474[(2)]);
var inst_42472 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_42474__$1 = (function (){var statearr_42476 = state_42474;
(statearr_42476[(7)] = inst_42471);

return statearr_42476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42474__$1,inst_42472);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__41801__auto__ = null;
var shadow$dom$state_machine__41801__auto____0 = (function (){
var statearr_42477 = [null,null,null,null,null,null,null,null];
(statearr_42477[(0)] = shadow$dom$state_machine__41801__auto__);

(statearr_42477[(1)] = (1));

return statearr_42477;
});
var shadow$dom$state_machine__41801__auto____1 = (function (state_42474){
while(true){
var ret_value__41802__auto__ = (function (){try{while(true){
var result__41803__auto__ = switch__41800__auto__(state_42474);
if(cljs.core.keyword_identical_QMARK_(result__41803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41803__auto__;
}
break;
}
}catch (e42478){var ex__41804__auto__ = e42478;
var statearr_42479_43087 = state_42474;
(statearr_42479_43087[(2)] = ex__41804__auto__);


if(cljs.core.seq((state_42474[(4)]))){
var statearr_42483_43088 = state_42474;
(statearr_42483_43088[(1)] = cljs.core.first((state_42474[(4)])));

} else {
throw ex__41804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43089 = state_42474;
state_42474 = G__43089;
continue;
} else {
return ret_value__41802__auto__;
}
break;
}
});
shadow$dom$state_machine__41801__auto__ = function(state_42474){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__41801__auto____0.call(this);
case 1:
return shadow$dom$state_machine__41801__auto____1.call(this,state_42474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__41801__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__41801__auto____0;
shadow$dom$state_machine__41801__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__41801__auto____1;
return shadow$dom$state_machine__41801__auto__;
})()
})();
var state__41912__auto__ = (function (){var statearr_42488 = f__41911__auto__();
(statearr_42488[(6)] = c__41910__auto___43080);

return statearr_42488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41912__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
