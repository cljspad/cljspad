goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23505 = arguments.length;
switch (G__23505) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23506 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23506 = (function (f,blockable,meta23507){
this.f = f;
this.blockable = blockable;
this.meta23507 = meta23507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23508,meta23507__$1){
var self__ = this;
var _23508__$1 = this;
return (new cljs.core.async.t_cljs$core$async23506(self__.f,self__.blockable,meta23507__$1));
}));

(cljs.core.async.t_cljs$core$async23506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23508){
var self__ = this;
var _23508__$1 = this;
return self__.meta23507;
}));

(cljs.core.async.t_cljs$core$async23506.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23506.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23506.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async23506.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async23506.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23507","meta23507",347169800,null)], null);
}));

(cljs.core.async.t_cljs$core$async23506.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23506");

(cljs.core.async.t_cljs$core$async23506.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async23506");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23506.
 */
cljs.core.async.__GT_t_cljs$core$async23506 = (function cljs$core$async$__GT_t_cljs$core$async23506(f__$1,blockable__$1,meta23507){
return (new cljs.core.async.t_cljs$core$async23506(f__$1,blockable__$1,meta23507));
});

}

return (new cljs.core.async.t_cljs$core$async23506(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23538 = arguments.length;
switch (G__23538) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23549 = arguments.length;
switch (G__23549) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23561 = arguments.length;
switch (G__23561) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_26865 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_26865) : fn1.call(null,val_26865));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_26865) : fn1.call(null,val_26865));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23572 = arguments.length;
switch (G__23572) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___26870 = n;
var x_26871 = (0);
while(true){
if((x_26871 < n__4613__auto___26870)){
(a[x_26871] = x_26871);

var G__26872 = (x_26871 + (1));
x_26871 = G__26872;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23581 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23581 = (function (flag,meta23582){
this.flag = flag;
this.meta23582 = meta23582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23583,meta23582__$1){
var self__ = this;
var _23583__$1 = this;
return (new cljs.core.async.t_cljs$core$async23581(self__.flag,meta23582__$1));
}));

(cljs.core.async.t_cljs$core$async23581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23583){
var self__ = this;
var _23583__$1 = this;
return self__.meta23582;
}));

(cljs.core.async.t_cljs$core$async23581.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23581.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async23581.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23581.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async23581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23582","meta23582",1316978196,null)], null);
}));

(cljs.core.async.t_cljs$core$async23581.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23581");

(cljs.core.async.t_cljs$core$async23581.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async23581");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23581.
 */
cljs.core.async.__GT_t_cljs$core$async23581 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23581(flag__$1,meta23582){
return (new cljs.core.async.t_cljs$core$async23581(flag__$1,meta23582));
});

}

return (new cljs.core.async.t_cljs$core$async23581(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23595 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23595 = (function (flag,cb,meta23596){
this.flag = flag;
this.cb = cb;
this.meta23596 = meta23596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23597,meta23596__$1){
var self__ = this;
var _23597__$1 = this;
return (new cljs.core.async.t_cljs$core$async23595(self__.flag,self__.cb,meta23596__$1));
}));

(cljs.core.async.t_cljs$core$async23595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23597){
var self__ = this;
var _23597__$1 = this;
return self__.meta23596;
}));

(cljs.core.async.t_cljs$core$async23595.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23595.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async23595.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23595.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async23595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23596","meta23596",97337903,null)], null);
}));

(cljs.core.async.t_cljs$core$async23595.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23595");

(cljs.core.async.t_cljs$core$async23595.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async23595");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23595.
 */
cljs.core.async.__GT_t_cljs$core$async23595 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23595(flag__$1,cb__$1,meta23596){
return (new cljs.core.async.t_cljs$core$async23595(flag__$1,cb__$1,meta23596));
});

}

return (new cljs.core.async.t_cljs$core$async23595(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23605_SHARP_){
var G__23607 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23605_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23607) : fret.call(null,G__23607));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23606_SHARP_){
var G__23608 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23606_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23608) : fret.call(null,G__23608));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26909 = (i + (1));
i = G__26909;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26910 = arguments.length;
var i__4737__auto___26911 = (0);
while(true){
if((i__4737__auto___26911 < len__4736__auto___26910)){
args__4742__auto__.push((arguments[i__4737__auto___26911]));

var G__26912 = (i__4737__auto___26911 + (1));
i__4737__auto___26911 = G__26912;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23625){
var map__23629 = p__23625;
var map__23629__$1 = (((((!((map__23629 == null))))?(((((map__23629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23629):map__23629);
var opts = map__23629__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23615){
var G__23616 = cljs.core.first(seq23615);
var seq23615__$1 = cljs.core.next(seq23615);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23616,seq23615__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23647 = arguments.length;
switch (G__23647) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23411__auto___26948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23412__auto__ = (function (){var switch__23197__auto__ = (function (state_23691){
var state_val_23693 = (state_23691[(1)]);
if((state_val_23693 === (7))){
var inst_23683 = (state_23691[(2)]);
var state_23691__$1 = state_23691;
var statearr_23708_26951 = state_23691__$1;
(statearr_23708_26951[(2)] = inst_23683);

(statearr_23708_26951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23693 === (1))){
var state_23691__$1 = state_23691;
var statearr_23710_26955 = state_23691__$1;
(statearr_23710_26955[(2)] = null);

(statearr_23710_26955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23693 === (4))){
var inst_23666 = (state_23691[(7)]);
var inst_23666__$1 = (state_23691[(2)]);
var inst_23667 = (inst_23666__$1 == null);
var state_23691__$1 = (function (){var statearr_23711 = state_23691;
(statearr_23711[(7)] = inst_23666__$1);

return statearr_23711;
})();
if(cljs.core.truth_(inst_23667)){
var statearr_23712_26959 = state_23691__$1;
(statearr_23712_26959[(1)] = (5));

} else {
var statearr_23713_26961 = state_23691__$1;
(statearr_23713_26961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23693 === (13))){
var state_23691__$1 = state_23691;
var statearr_23717_26964 = state_23691__$1;
(statearr_23717_26964[(2)] = null);

(statearr_23717_26964[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23693 === (6))){
var inst_23666 = (state_23691[(7)]);
var state_23691__$1 = state_23691;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23691__$1,(11),to,inst_23666);
} else {
if((state_val_23693 === (3))){
var inst_23687 = (state_23691[(2)]);
var state_23691__$1 = state_23691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23691__$1,inst_23687);
} else {
if((state_val_23693 === (12))){
var state_23691__$1 = state_23691;
var statearr_23719_26965 = state_23691__$1;
(statearr_23719_26965[(2)] = null);

(statearr_23719_26965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23693 === (2))){
var state_23691__$1 = state_23691;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23691__$1,(4),from);
} else {
if((state_val_23693 === (11))){
var inst_23676 = (state_23691[(2)]);
var state_23691__$1 = state_23691;
if(cljs.core.truth_(inst_23676)){
var statearr_23724_26966 = state_23691__$1;
(statearr_23724_26966[(1)] = (12));

} else {
var statearr_23725_26971 = state_23691__$1;
(statearr_23725_26971[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23693 === (9))){
var state_23691__$1 = state_23691;
var statearr_23726_26974 = state_23691__$1;
(statearr_23726_26974[(2)] = null);

(statearr_23726_26974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23693 === (5))){
var state_23691__$1 = state_23691;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23728_26976 = state_23691__$1;
(statearr_23728_26976[(1)] = (8));

} else {
var statearr_23729_26977 = state_23691__$1;
(statearr_23729_26977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23693 === (14))){
var inst_23681 = (state_23691[(2)]);
var state_23691__$1 = state_23691;
var statearr_23730_26978 = state_23691__$1;
(statearr_23730_26978[(2)] = inst_23681);

(statearr_23730_26978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23693 === (10))){
var inst_23673 = (state_23691[(2)]);
var state_23691__$1 = state_23691;
var statearr_23731_26979 = state_23691__$1;
(statearr_23731_26979[(2)] = inst_23673);

(statearr_23731_26979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23693 === (8))){
var inst_23670 = cljs.core.async.close_BANG_(to);
var state_23691__$1 = state_23691;
var statearr_23732_26986 = state_23691__$1;
(statearr_23732_26986[(2)] = inst_23670);

(statearr_23732_26986[(1)] = (10));


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
}
});
return (function() {
var cljs$core$async$state_machine__23198__auto__ = null;
var cljs$core$async$state_machine__23198__auto____0 = (function (){
var statearr_23733 = [null,null,null,null,null,null,null,null];
(statearr_23733[(0)] = cljs$core$async$state_machine__23198__auto__);

(statearr_23733[(1)] = (1));

return statearr_23733;
});
var cljs$core$async$state_machine__23198__auto____1 = (function (state_23691){
while(true){
var ret_value__23199__auto__ = (function (){try{while(true){
var result__23200__auto__ = switch__23197__auto__(state_23691);
if(cljs.core.keyword_identical_QMARK_(result__23200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23200__auto__;
}
break;
}
}catch (e23734){var ex__23201__auto__ = e23734;
var statearr_23735_26987 = state_23691;
(statearr_23735_26987[(2)] = ex__23201__auto__);


if(cljs.core.seq((state_23691[(4)]))){
var statearr_23740_26988 = state_23691;
(statearr_23740_26988[(1)] = cljs.core.first((state_23691[(4)])));

} else {
throw ex__23201__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26991 = state_23691;
state_23691 = G__26991;
continue;
} else {
return ret_value__23199__auto__;
}
break;
}
});
cljs$core$async$state_machine__23198__auto__ = function(state_23691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23198__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23198__auto____1.call(this,state_23691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23198__auto____0;
cljs$core$async$state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23198__auto____1;
return cljs$core$async$state_machine__23198__auto__;
})()
})();
var state__23413__auto__ = (function (){var statearr_23741 = f__23412__auto__();
(statearr_23741[(6)] = c__23411__auto___26948);

return statearr_23741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23413__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__23749){
var vec__23751 = p__23749;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23751,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23751,(1),null);
var job = vec__23751;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__23411__auto___26992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23412__auto__ = (function (){var switch__23197__auto__ = (function (state_23758){
var state_val_23759 = (state_23758[(1)]);
if((state_val_23759 === (1))){
var state_23758__$1 = state_23758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23758__$1,(2),res,v);
} else {
if((state_val_23759 === (2))){
var inst_23755 = (state_23758[(2)]);
var inst_23756 = cljs.core.async.close_BANG_(res);
var state_23758__$1 = (function (){var statearr_23760 = state_23758;
(statearr_23760[(7)] = inst_23755);

return statearr_23760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23758__$1,inst_23756);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____0 = (function (){
var statearr_23762 = [null,null,null,null,null,null,null,null];
(statearr_23762[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__);

(statearr_23762[(1)] = (1));

return statearr_23762;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____1 = (function (state_23758){
while(true){
var ret_value__23199__auto__ = (function (){try{while(true){
var result__23200__auto__ = switch__23197__auto__(state_23758);
if(cljs.core.keyword_identical_QMARK_(result__23200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23200__auto__;
}
break;
}
}catch (e23764){var ex__23201__auto__ = e23764;
var statearr_23765_26995 = state_23758;
(statearr_23765_26995[(2)] = ex__23201__auto__);


if(cljs.core.seq((state_23758[(4)]))){
var statearr_23766_26996 = state_23758;
(statearr_23766_26996[(1)] = cljs.core.first((state_23758[(4)])));

} else {
throw ex__23201__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26997 = state_23758;
state_23758 = G__26997;
continue;
} else {
return ret_value__23199__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__ = function(state_23758){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____1.call(this,state_23758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__;
})()
})();
var state__23413__auto__ = (function (){var statearr_23770 = f__23412__auto__();
(statearr_23770[(6)] = c__23411__auto___26992);

return statearr_23770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23413__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__23779){
var vec__23790 = p__23779;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23790,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23790,(1),null);
var job = vec__23790;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___26998 = n;
var __26999 = (0);
while(true){
if((__26999 < n__4613__auto___26998)){
var G__23796_27000 = type;
var G__23796_27001__$1 = (((G__23796_27000 instanceof cljs.core.Keyword))?G__23796_27000.fqn:null);
switch (G__23796_27001__$1) {
case "compute":
var c__23411__auto___27015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__26999,c__23411__auto___27015,G__23796_27000,G__23796_27001__$1,n__4613__auto___26998,jobs,results,process,async){
return (function (){
var f__23412__auto__ = (function (){var switch__23197__auto__ = ((function (__26999,c__23411__auto___27015,G__23796_27000,G__23796_27001__$1,n__4613__auto___26998,jobs,results,process,async){
return (function (state_23809){
var state_val_23810 = (state_23809[(1)]);
if((state_val_23810 === (1))){
var state_23809__$1 = state_23809;
var statearr_23813_27016 = state_23809__$1;
(statearr_23813_27016[(2)] = null);

(statearr_23813_27016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (2))){
var state_23809__$1 = state_23809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23809__$1,(4),jobs);
} else {
if((state_val_23810 === (3))){
var inst_23807 = (state_23809[(2)]);
var state_23809__$1 = state_23809;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23809__$1,inst_23807);
} else {
if((state_val_23810 === (4))){
var inst_23799 = (state_23809[(2)]);
var inst_23800 = process(inst_23799);
var state_23809__$1 = state_23809;
if(cljs.core.truth_(inst_23800)){
var statearr_23817_27017 = state_23809__$1;
(statearr_23817_27017[(1)] = (5));

} else {
var statearr_23818_27019 = state_23809__$1;
(statearr_23818_27019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (5))){
var state_23809__$1 = state_23809;
var statearr_23819_27021 = state_23809__$1;
(statearr_23819_27021[(2)] = null);

(statearr_23819_27021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (6))){
var state_23809__$1 = state_23809;
var statearr_23823_27022 = state_23809__$1;
(statearr_23823_27022[(2)] = null);

(statearr_23823_27022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (7))){
var inst_23805 = (state_23809[(2)]);
var state_23809__$1 = state_23809;
var statearr_23827_27023 = state_23809__$1;
(statearr_23827_27023[(2)] = inst_23805);

(statearr_23827_27023[(1)] = (3));


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
});})(__26999,c__23411__auto___27015,G__23796_27000,G__23796_27001__$1,n__4613__auto___26998,jobs,results,process,async))
;
return ((function (__26999,switch__23197__auto__,c__23411__auto___27015,G__23796_27000,G__23796_27001__$1,n__4613__auto___26998,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____0 = (function (){
var statearr_23830 = [null,null,null,null,null,null,null];
(statearr_23830[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__);

(statearr_23830[(1)] = (1));

return statearr_23830;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____1 = (function (state_23809){
while(true){
var ret_value__23199__auto__ = (function (){try{while(true){
var result__23200__auto__ = switch__23197__auto__(state_23809);
if(cljs.core.keyword_identical_QMARK_(result__23200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23200__auto__;
}
break;
}
}catch (e23834){var ex__23201__auto__ = e23834;
var statearr_23835_27025 = state_23809;
(statearr_23835_27025[(2)] = ex__23201__auto__);


if(cljs.core.seq((state_23809[(4)]))){
var statearr_23838_27026 = state_23809;
(statearr_23838_27026[(1)] = cljs.core.first((state_23809[(4)])));

} else {
throw ex__23201__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27027 = state_23809;
state_23809 = G__27027;
continue;
} else {
return ret_value__23199__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__ = function(state_23809){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____1.call(this,state_23809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__;
})()
;})(__26999,switch__23197__auto__,c__23411__auto___27015,G__23796_27000,G__23796_27001__$1,n__4613__auto___26998,jobs,results,process,async))
})();
var state__23413__auto__ = (function (){var statearr_23841 = f__23412__auto__();
(statearr_23841[(6)] = c__23411__auto___27015);

return statearr_23841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23413__auto__);
});})(__26999,c__23411__auto___27015,G__23796_27000,G__23796_27001__$1,n__4613__auto___26998,jobs,results,process,async))
);


break;
case "async":
var c__23411__auto___27028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__26999,c__23411__auto___27028,G__23796_27000,G__23796_27001__$1,n__4613__auto___26998,jobs,results,process,async){
return (function (){
var f__23412__auto__ = (function (){var switch__23197__auto__ = ((function (__26999,c__23411__auto___27028,G__23796_27000,G__23796_27001__$1,n__4613__auto___26998,jobs,results,process,async){
return (function (state_23855){
var state_val_23856 = (state_23855[(1)]);
if((state_val_23856 === (1))){
var state_23855__$1 = state_23855;
var statearr_23860_27029 = state_23855__$1;
(statearr_23860_27029[(2)] = null);

(statearr_23860_27029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (2))){
var state_23855__$1 = state_23855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23855__$1,(4),jobs);
} else {
if((state_val_23856 === (3))){
var inst_23852 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23855__$1,inst_23852);
} else {
if((state_val_23856 === (4))){
var inst_23844 = (state_23855[(2)]);
var inst_23845 = async(inst_23844);
var state_23855__$1 = state_23855;
if(cljs.core.truth_(inst_23845)){
var statearr_23867_27033 = state_23855__$1;
(statearr_23867_27033[(1)] = (5));

} else {
var statearr_23868_27034 = state_23855__$1;
(statearr_23868_27034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (5))){
var state_23855__$1 = state_23855;
var statearr_23869_27035 = state_23855__$1;
(statearr_23869_27035[(2)] = null);

(statearr_23869_27035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (6))){
var state_23855__$1 = state_23855;
var statearr_23870_27055 = state_23855__$1;
(statearr_23870_27055[(2)] = null);

(statearr_23870_27055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (7))){
var inst_23850 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
var statearr_23873_27056 = state_23855__$1;
(statearr_23873_27056[(2)] = inst_23850);

(statearr_23873_27056[(1)] = (3));


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
});})(__26999,c__23411__auto___27028,G__23796_27000,G__23796_27001__$1,n__4613__auto___26998,jobs,results,process,async))
;
return ((function (__26999,switch__23197__auto__,c__23411__auto___27028,G__23796_27000,G__23796_27001__$1,n__4613__auto___26998,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____0 = (function (){
var statearr_23878 = [null,null,null,null,null,null,null];
(statearr_23878[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__);

(statearr_23878[(1)] = (1));

return statearr_23878;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____1 = (function (state_23855){
while(true){
var ret_value__23199__auto__ = (function (){try{while(true){
var result__23200__auto__ = switch__23197__auto__(state_23855);
if(cljs.core.keyword_identical_QMARK_(result__23200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23200__auto__;
}
break;
}
}catch (e23879){var ex__23201__auto__ = e23879;
var statearr_23880_27059 = state_23855;
(statearr_23880_27059[(2)] = ex__23201__auto__);


if(cljs.core.seq((state_23855[(4)]))){
var statearr_23881_27060 = state_23855;
(statearr_23881_27060[(1)] = cljs.core.first((state_23855[(4)])));

} else {
throw ex__23201__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27062 = state_23855;
state_23855 = G__27062;
continue;
} else {
return ret_value__23199__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__ = function(state_23855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____1.call(this,state_23855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__;
})()
;})(__26999,switch__23197__auto__,c__23411__auto___27028,G__23796_27000,G__23796_27001__$1,n__4613__auto___26998,jobs,results,process,async))
})();
var state__23413__auto__ = (function (){var statearr_23884 = f__23412__auto__();
(statearr_23884[(6)] = c__23411__auto___27028);

return statearr_23884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23413__auto__);
});})(__26999,c__23411__auto___27028,G__23796_27000,G__23796_27001__$1,n__4613__auto___26998,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23796_27001__$1)].join('')));

}

var G__27064 = (__26999 + (1));
__26999 = G__27064;
continue;
} else {
}
break;
}

var c__23411__auto___27065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23412__auto__ = (function (){var switch__23197__auto__ = (function (state_23913){
var state_val_23914 = (state_23913[(1)]);
if((state_val_23914 === (7))){
var inst_23909 = (state_23913[(2)]);
var state_23913__$1 = state_23913;
var statearr_23916_27066 = state_23913__$1;
(statearr_23916_27066[(2)] = inst_23909);

(statearr_23916_27066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23914 === (1))){
var state_23913__$1 = state_23913;
var statearr_23917_27071 = state_23913__$1;
(statearr_23917_27071[(2)] = null);

(statearr_23917_27071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23914 === (4))){
var inst_23893 = (state_23913[(7)]);
var inst_23893__$1 = (state_23913[(2)]);
var inst_23894 = (inst_23893__$1 == null);
var state_23913__$1 = (function (){var statearr_23957 = state_23913;
(statearr_23957[(7)] = inst_23893__$1);

return statearr_23957;
})();
if(cljs.core.truth_(inst_23894)){
var statearr_23959_27074 = state_23913__$1;
(statearr_23959_27074[(1)] = (5));

} else {
var statearr_23960_27075 = state_23913__$1;
(statearr_23960_27075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23914 === (6))){
var inst_23898 = (state_23913[(8)]);
var inst_23893 = (state_23913[(7)]);
var inst_23898__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_23899 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23901 = [inst_23893,inst_23898__$1];
var inst_23902 = (new cljs.core.PersistentVector(null,2,(5),inst_23899,inst_23901,null));
var state_23913__$1 = (function (){var statearr_23965 = state_23913;
(statearr_23965[(8)] = inst_23898__$1);

return statearr_23965;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23913__$1,(8),jobs,inst_23902);
} else {
if((state_val_23914 === (3))){
var inst_23911 = (state_23913[(2)]);
var state_23913__$1 = state_23913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23913__$1,inst_23911);
} else {
if((state_val_23914 === (2))){
var state_23913__$1 = state_23913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23913__$1,(4),from);
} else {
if((state_val_23914 === (9))){
var inst_23906 = (state_23913[(2)]);
var state_23913__$1 = (function (){var statearr_23968 = state_23913;
(statearr_23968[(9)] = inst_23906);

return statearr_23968;
})();
var statearr_23969_27102 = state_23913__$1;
(statearr_23969_27102[(2)] = null);

(statearr_23969_27102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23914 === (5))){
var inst_23896 = cljs.core.async.close_BANG_(jobs);
var state_23913__$1 = state_23913;
var statearr_23970_27108 = state_23913__$1;
(statearr_23970_27108[(2)] = inst_23896);

(statearr_23970_27108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23914 === (8))){
var inst_23898 = (state_23913[(8)]);
var inst_23904 = (state_23913[(2)]);
var state_23913__$1 = (function (){var statearr_23971 = state_23913;
(statearr_23971[(10)] = inst_23904);

return statearr_23971;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23913__$1,(9),results,inst_23898);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____0 = (function (){
var statearr_23973 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23973[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__);

(statearr_23973[(1)] = (1));

return statearr_23973;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____1 = (function (state_23913){
while(true){
var ret_value__23199__auto__ = (function (){try{while(true){
var result__23200__auto__ = switch__23197__auto__(state_23913);
if(cljs.core.keyword_identical_QMARK_(result__23200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23200__auto__;
}
break;
}
}catch (e23974){var ex__23201__auto__ = e23974;
var statearr_23975_27109 = state_23913;
(statearr_23975_27109[(2)] = ex__23201__auto__);


if(cljs.core.seq((state_23913[(4)]))){
var statearr_23978_27112 = state_23913;
(statearr_23978_27112[(1)] = cljs.core.first((state_23913[(4)])));

} else {
throw ex__23201__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27113 = state_23913;
state_23913 = G__27113;
continue;
} else {
return ret_value__23199__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__ = function(state_23913){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____1.call(this,state_23913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__;
})()
})();
var state__23413__auto__ = (function (){var statearr_23979 = f__23412__auto__();
(statearr_23979[(6)] = c__23411__auto___27065);

return statearr_23979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23413__auto__);
}));


var c__23411__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23412__auto__ = (function (){var switch__23197__auto__ = (function (state_24054){
var state_val_24055 = (state_24054[(1)]);
if((state_val_24055 === (7))){
var inst_24043 = (state_24054[(2)]);
var state_24054__$1 = state_24054;
var statearr_24078_27114 = state_24054__$1;
(statearr_24078_27114[(2)] = inst_24043);

(statearr_24078_27114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (20))){
var state_24054__$1 = state_24054;
var statearr_24089_27115 = state_24054__$1;
(statearr_24089_27115[(2)] = null);

(statearr_24089_27115[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (1))){
var state_24054__$1 = state_24054;
var statearr_24101_27116 = state_24054__$1;
(statearr_24101_27116[(2)] = null);

(statearr_24101_27116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (4))){
var inst_23982 = (state_24054[(7)]);
var inst_23982__$1 = (state_24054[(2)]);
var inst_23983 = (inst_23982__$1 == null);
var state_24054__$1 = (function (){var statearr_24106 = state_24054;
(statearr_24106[(7)] = inst_23982__$1);

return statearr_24106;
})();
if(cljs.core.truth_(inst_23983)){
var statearr_24110_27124 = state_24054__$1;
(statearr_24110_27124[(1)] = (5));

} else {
var statearr_24111_27126 = state_24054__$1;
(statearr_24111_27126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (15))){
var inst_23995 = (state_24054[(8)]);
var state_24054__$1 = state_24054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24054__$1,(18),to,inst_23995);
} else {
if((state_val_24055 === (21))){
var inst_24038 = (state_24054[(2)]);
var state_24054__$1 = state_24054;
var statearr_24116_27127 = state_24054__$1;
(statearr_24116_27127[(2)] = inst_24038);

(statearr_24116_27127[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (13))){
var inst_24040 = (state_24054[(2)]);
var state_24054__$1 = (function (){var statearr_24120 = state_24054;
(statearr_24120[(9)] = inst_24040);

return statearr_24120;
})();
var statearr_24125_27128 = state_24054__$1;
(statearr_24125_27128[(2)] = null);

(statearr_24125_27128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (6))){
var inst_23982 = (state_24054[(7)]);
var state_24054__$1 = state_24054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24054__$1,(11),inst_23982);
} else {
if((state_val_24055 === (17))){
var inst_24033 = (state_24054[(2)]);
var state_24054__$1 = state_24054;
if(cljs.core.truth_(inst_24033)){
var statearr_24129_27132 = state_24054__$1;
(statearr_24129_27132[(1)] = (19));

} else {
var statearr_24130_27133 = state_24054__$1;
(statearr_24130_27133[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (3))){
var inst_24045 = (state_24054[(2)]);
var state_24054__$1 = state_24054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24054__$1,inst_24045);
} else {
if((state_val_24055 === (12))){
var inst_23992 = (state_24054[(10)]);
var state_24054__$1 = state_24054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24054__$1,(14),inst_23992);
} else {
if((state_val_24055 === (2))){
var state_24054__$1 = state_24054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24054__$1,(4),results);
} else {
if((state_val_24055 === (19))){
var state_24054__$1 = state_24054;
var statearr_24139_27137 = state_24054__$1;
(statearr_24139_27137[(2)] = null);

(statearr_24139_27137[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (11))){
var inst_23992 = (state_24054[(2)]);
var state_24054__$1 = (function (){var statearr_24140 = state_24054;
(statearr_24140[(10)] = inst_23992);

return statearr_24140;
})();
var statearr_24141_27141 = state_24054__$1;
(statearr_24141_27141[(2)] = null);

(statearr_24141_27141[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (9))){
var state_24054__$1 = state_24054;
var statearr_24146_27146 = state_24054__$1;
(statearr_24146_27146[(2)] = null);

(statearr_24146_27146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (5))){
var state_24054__$1 = state_24054;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24147_27149 = state_24054__$1;
(statearr_24147_27149[(1)] = (8));

} else {
var statearr_24148_27150 = state_24054__$1;
(statearr_24148_27150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (14))){
var inst_23995 = (state_24054[(8)]);
var inst_23995__$1 = (state_24054[(2)]);
var inst_23996 = (inst_23995__$1 == null);
var inst_23997 = cljs.core.not(inst_23996);
var state_24054__$1 = (function (){var statearr_24151 = state_24054;
(statearr_24151[(8)] = inst_23995__$1);

return statearr_24151;
})();
if(inst_23997){
var statearr_24152_27151 = state_24054__$1;
(statearr_24152_27151[(1)] = (15));

} else {
var statearr_24153_27152 = state_24054__$1;
(statearr_24153_27152[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (16))){
var state_24054__$1 = state_24054;
var statearr_24154_27153 = state_24054__$1;
(statearr_24154_27153[(2)] = false);

(statearr_24154_27153[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (10))){
var inst_23989 = (state_24054[(2)]);
var state_24054__$1 = state_24054;
var statearr_24156_27154 = state_24054__$1;
(statearr_24156_27154[(2)] = inst_23989);

(statearr_24156_27154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (18))){
var inst_24030 = (state_24054[(2)]);
var state_24054__$1 = state_24054;
var statearr_24157_27155 = state_24054__$1;
(statearr_24157_27155[(2)] = inst_24030);

(statearr_24157_27155[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (8))){
var inst_23986 = cljs.core.async.close_BANG_(to);
var state_24054__$1 = state_24054;
var statearr_24159_27158 = state_24054__$1;
(statearr_24159_27158[(2)] = inst_23986);

(statearr_24159_27158[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____0 = (function (){
var statearr_24160 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24160[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__);

(statearr_24160[(1)] = (1));

return statearr_24160;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____1 = (function (state_24054){
while(true){
var ret_value__23199__auto__ = (function (){try{while(true){
var result__23200__auto__ = switch__23197__auto__(state_24054);
if(cljs.core.keyword_identical_QMARK_(result__23200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23200__auto__;
}
break;
}
}catch (e24162){var ex__23201__auto__ = e24162;
var statearr_24163_27159 = state_24054;
(statearr_24163_27159[(2)] = ex__23201__auto__);


if(cljs.core.seq((state_24054[(4)]))){
var statearr_24164_27160 = state_24054;
(statearr_24164_27160[(1)] = cljs.core.first((state_24054[(4)])));

} else {
throw ex__23201__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27162 = state_24054;
state_24054 = G__27162;
continue;
} else {
return ret_value__23199__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__ = function(state_24054){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____1.call(this,state_24054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23198__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23198__auto__;
})()
})();
var state__23413__auto__ = (function (){var statearr_24165 = f__23412__auto__();
(statearr_24165[(6)] = c__23411__auto__);

return statearr_24165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23413__auto__);
}));

return c__23411__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24167 = arguments.length;
switch (G__24167) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24172 = arguments.length;
switch (G__24172) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24178 = arguments.length;
switch (G__24178) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__23411__auto___27193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23412__auto__ = (function (){var switch__23197__auto__ = (function (state_24204){
var state_val_24205 = (state_24204[(1)]);
if((state_val_24205 === (7))){
var inst_24200 = (state_24204[(2)]);
var state_24204__$1 = state_24204;
var statearr_24206_27197 = state_24204__$1;
(statearr_24206_27197[(2)] = inst_24200);

(statearr_24206_27197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (1))){
var state_24204__$1 = state_24204;
var statearr_24208_27198 = state_24204__$1;
(statearr_24208_27198[(2)] = null);

(statearr_24208_27198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (4))){
var inst_24181 = (state_24204[(7)]);
var inst_24181__$1 = (state_24204[(2)]);
var inst_24182 = (inst_24181__$1 == null);
var state_24204__$1 = (function (){var statearr_24209 = state_24204;
(statearr_24209[(7)] = inst_24181__$1);

return statearr_24209;
})();
if(cljs.core.truth_(inst_24182)){
var statearr_24210_27202 = state_24204__$1;
(statearr_24210_27202[(1)] = (5));

} else {
var statearr_24212_27203 = state_24204__$1;
(statearr_24212_27203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (13))){
var state_24204__$1 = state_24204;
var statearr_24213_27204 = state_24204__$1;
(statearr_24213_27204[(2)] = null);

(statearr_24213_27204[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (6))){
var inst_24181 = (state_24204[(7)]);
var inst_24187 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24181) : p.call(null,inst_24181));
var state_24204__$1 = state_24204;
if(cljs.core.truth_(inst_24187)){
var statearr_24214_27208 = state_24204__$1;
(statearr_24214_27208[(1)] = (9));

} else {
var statearr_24215_27209 = state_24204__$1;
(statearr_24215_27209[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (3))){
var inst_24202 = (state_24204[(2)]);
var state_24204__$1 = state_24204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24204__$1,inst_24202);
} else {
if((state_val_24205 === (12))){
var state_24204__$1 = state_24204;
var statearr_24216_27211 = state_24204__$1;
(statearr_24216_27211[(2)] = null);

(statearr_24216_27211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (2))){
var state_24204__$1 = state_24204;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24204__$1,(4),ch);
} else {
if((state_val_24205 === (11))){
var inst_24181 = (state_24204[(7)]);
var inst_24191 = (state_24204[(2)]);
var state_24204__$1 = state_24204;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24204__$1,(8),inst_24191,inst_24181);
} else {
if((state_val_24205 === (9))){
var state_24204__$1 = state_24204;
var statearr_24217_27218 = state_24204__$1;
(statearr_24217_27218[(2)] = tc);

(statearr_24217_27218[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (5))){
var inst_24184 = cljs.core.async.close_BANG_(tc);
var inst_24185 = cljs.core.async.close_BANG_(fc);
var state_24204__$1 = (function (){var statearr_24222 = state_24204;
(statearr_24222[(8)] = inst_24184);

return statearr_24222;
})();
var statearr_24223_27224 = state_24204__$1;
(statearr_24223_27224[(2)] = inst_24185);

(statearr_24223_27224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (14))){
var inst_24198 = (state_24204[(2)]);
var state_24204__$1 = state_24204;
var statearr_24225_27228 = state_24204__$1;
(statearr_24225_27228[(2)] = inst_24198);

(statearr_24225_27228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (10))){
var state_24204__$1 = state_24204;
var statearr_24226_27229 = state_24204__$1;
(statearr_24226_27229[(2)] = fc);

(statearr_24226_27229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (8))){
var inst_24193 = (state_24204[(2)]);
var state_24204__$1 = state_24204;
if(cljs.core.truth_(inst_24193)){
var statearr_24230_27230 = state_24204__$1;
(statearr_24230_27230[(1)] = (12));

} else {
var statearr_24231_27231 = state_24204__$1;
(statearr_24231_27231[(1)] = (13));

}

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
}
});
return (function() {
var cljs$core$async$state_machine__23198__auto__ = null;
var cljs$core$async$state_machine__23198__auto____0 = (function (){
var statearr_24235 = [null,null,null,null,null,null,null,null,null];
(statearr_24235[(0)] = cljs$core$async$state_machine__23198__auto__);

(statearr_24235[(1)] = (1));

return statearr_24235;
});
var cljs$core$async$state_machine__23198__auto____1 = (function (state_24204){
while(true){
var ret_value__23199__auto__ = (function (){try{while(true){
var result__23200__auto__ = switch__23197__auto__(state_24204);
if(cljs.core.keyword_identical_QMARK_(result__23200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23200__auto__;
}
break;
}
}catch (e24236){var ex__23201__auto__ = e24236;
var statearr_24237_27234 = state_24204;
(statearr_24237_27234[(2)] = ex__23201__auto__);


if(cljs.core.seq((state_24204[(4)]))){
var statearr_24242_27235 = state_24204;
(statearr_24242_27235[(1)] = cljs.core.first((state_24204[(4)])));

} else {
throw ex__23201__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27237 = state_24204;
state_24204 = G__27237;
continue;
} else {
return ret_value__23199__auto__;
}
break;
}
});
cljs$core$async$state_machine__23198__auto__ = function(state_24204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23198__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23198__auto____1.call(this,state_24204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23198__auto____0;
cljs$core$async$state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23198__auto____1;
return cljs$core$async$state_machine__23198__auto__;
})()
})();
var state__23413__auto__ = (function (){var statearr_24243 = f__23412__auto__();
(statearr_24243[(6)] = c__23411__auto___27193);

return statearr_24243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23413__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23411__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23412__auto__ = (function (){var switch__23197__auto__ = (function (state_24286){
var state_val_24287 = (state_24286[(1)]);
if((state_val_24287 === (7))){
var inst_24282 = (state_24286[(2)]);
var state_24286__$1 = state_24286;
var statearr_24288_27244 = state_24286__$1;
(statearr_24288_27244[(2)] = inst_24282);

(statearr_24288_27244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24287 === (1))){
var inst_24262 = init;
var inst_24264 = inst_24262;
var state_24286__$1 = (function (){var statearr_24289 = state_24286;
(statearr_24289[(7)] = inst_24264);

return statearr_24289;
})();
var statearr_24290_27245 = state_24286__$1;
(statearr_24290_27245[(2)] = null);

(statearr_24290_27245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24287 === (4))){
var inst_24267 = (state_24286[(8)]);
var inst_24267__$1 = (state_24286[(2)]);
var inst_24268 = (inst_24267__$1 == null);
var state_24286__$1 = (function (){var statearr_24291 = state_24286;
(statearr_24291[(8)] = inst_24267__$1);

return statearr_24291;
})();
if(cljs.core.truth_(inst_24268)){
var statearr_24292_27254 = state_24286__$1;
(statearr_24292_27254[(1)] = (5));

} else {
var statearr_24293_27259 = state_24286__$1;
(statearr_24293_27259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24287 === (6))){
var inst_24264 = (state_24286[(7)]);
var inst_24267 = (state_24286[(8)]);
var inst_24271 = (state_24286[(9)]);
var inst_24271__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24264,inst_24267) : f.call(null,inst_24264,inst_24267));
var inst_24272 = cljs.core.reduced_QMARK_(inst_24271__$1);
var state_24286__$1 = (function (){var statearr_24294 = state_24286;
(statearr_24294[(9)] = inst_24271__$1);

return statearr_24294;
})();
if(inst_24272){
var statearr_24295_27262 = state_24286__$1;
(statearr_24295_27262[(1)] = (8));

} else {
var statearr_24296_27263 = state_24286__$1;
(statearr_24296_27263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24287 === (3))){
var inst_24284 = (state_24286[(2)]);
var state_24286__$1 = state_24286;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24286__$1,inst_24284);
} else {
if((state_val_24287 === (2))){
var state_24286__$1 = state_24286;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24286__$1,(4),ch);
} else {
if((state_val_24287 === (9))){
var inst_24271 = (state_24286[(9)]);
var inst_24264 = inst_24271;
var state_24286__$1 = (function (){var statearr_24297 = state_24286;
(statearr_24297[(7)] = inst_24264);

return statearr_24297;
})();
var statearr_24298_27265 = state_24286__$1;
(statearr_24298_27265[(2)] = null);

(statearr_24298_27265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24287 === (5))){
var inst_24264 = (state_24286[(7)]);
var state_24286__$1 = state_24286;
var statearr_24303_27266 = state_24286__$1;
(statearr_24303_27266[(2)] = inst_24264);

(statearr_24303_27266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24287 === (10))){
var inst_24280 = (state_24286[(2)]);
var state_24286__$1 = state_24286;
var statearr_24304_27267 = state_24286__$1;
(statearr_24304_27267[(2)] = inst_24280);

(statearr_24304_27267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24287 === (8))){
var inst_24271 = (state_24286[(9)]);
var inst_24276 = cljs.core.deref(inst_24271);
var state_24286__$1 = state_24286;
var statearr_24305_27268 = state_24286__$1;
(statearr_24305_27268[(2)] = inst_24276);

(statearr_24305_27268[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__23198__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23198__auto____0 = (function (){
var statearr_24309 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24309[(0)] = cljs$core$async$reduce_$_state_machine__23198__auto__);

(statearr_24309[(1)] = (1));

return statearr_24309;
});
var cljs$core$async$reduce_$_state_machine__23198__auto____1 = (function (state_24286){
while(true){
var ret_value__23199__auto__ = (function (){try{while(true){
var result__23200__auto__ = switch__23197__auto__(state_24286);
if(cljs.core.keyword_identical_QMARK_(result__23200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23200__auto__;
}
break;
}
}catch (e24310){var ex__23201__auto__ = e24310;
var statearr_24311_27271 = state_24286;
(statearr_24311_27271[(2)] = ex__23201__auto__);


if(cljs.core.seq((state_24286[(4)]))){
var statearr_24312_27272 = state_24286;
(statearr_24312_27272[(1)] = cljs.core.first((state_24286[(4)])));

} else {
throw ex__23201__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27275 = state_24286;
state_24286 = G__27275;
continue;
} else {
return ret_value__23199__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23198__auto__ = function(state_24286){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23198__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23198__auto____1.call(this,state_24286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23198__auto____0;
cljs$core$async$reduce_$_state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23198__auto____1;
return cljs$core$async$reduce_$_state_machine__23198__auto__;
})()
})();
var state__23413__auto__ = (function (){var statearr_24316 = f__23412__auto__();
(statearr_24316[(6)] = c__23411__auto__);

return statearr_24316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23413__auto__);
}));

return c__23411__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__23411__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23412__auto__ = (function (){var switch__23197__auto__ = (function (state_24326){
var state_val_24327 = (state_24326[(1)]);
if((state_val_24327 === (1))){
var inst_24321 = cljs.core.async.reduce(f__$1,init,ch);
var state_24326__$1 = state_24326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24326__$1,(2),inst_24321);
} else {
if((state_val_24327 === (2))){
var inst_24323 = (state_24326[(2)]);
var inst_24324 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_24323) : f__$1.call(null,inst_24323));
var state_24326__$1 = state_24326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24326__$1,inst_24324);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__23198__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23198__auto____0 = (function (){
var statearr_24334 = [null,null,null,null,null,null,null];
(statearr_24334[(0)] = cljs$core$async$transduce_$_state_machine__23198__auto__);

(statearr_24334[(1)] = (1));

return statearr_24334;
});
var cljs$core$async$transduce_$_state_machine__23198__auto____1 = (function (state_24326){
while(true){
var ret_value__23199__auto__ = (function (){try{while(true){
var result__23200__auto__ = switch__23197__auto__(state_24326);
if(cljs.core.keyword_identical_QMARK_(result__23200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23200__auto__;
}
break;
}
}catch (e24335){var ex__23201__auto__ = e24335;
var statearr_24336_27283 = state_24326;
(statearr_24336_27283[(2)] = ex__23201__auto__);


if(cljs.core.seq((state_24326[(4)]))){
var statearr_24337_27284 = state_24326;
(statearr_24337_27284[(1)] = cljs.core.first((state_24326[(4)])));

} else {
throw ex__23201__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27285 = state_24326;
state_24326 = G__27285;
continue;
} else {
return ret_value__23199__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23198__auto__ = function(state_24326){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23198__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23198__auto____1.call(this,state_24326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23198__auto____0;
cljs$core$async$transduce_$_state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23198__auto____1;
return cljs$core$async$transduce_$_state_machine__23198__auto__;
})()
})();
var state__23413__auto__ = (function (){var statearr_24360 = f__23412__auto__();
(statearr_24360[(6)] = c__23411__auto__);

return statearr_24360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23413__auto__);
}));

return c__23411__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__24362 = arguments.length;
switch (G__24362) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23411__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23412__auto__ = (function (){var switch__23197__auto__ = (function (state_24391){
var state_val_24392 = (state_24391[(1)]);
if((state_val_24392 === (7))){
var inst_24373 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
var statearr_24398_27289 = state_24391__$1;
(statearr_24398_27289[(2)] = inst_24373);

(statearr_24398_27289[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (1))){
var inst_24366 = cljs.core.seq(coll);
var inst_24367 = inst_24366;
var state_24391__$1 = (function (){var statearr_24399 = state_24391;
(statearr_24399[(7)] = inst_24367);

return statearr_24399;
})();
var statearr_24400_27292 = state_24391__$1;
(statearr_24400_27292[(2)] = null);

(statearr_24400_27292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (4))){
var inst_24367 = (state_24391[(7)]);
var inst_24371 = cljs.core.first(inst_24367);
var state_24391__$1 = state_24391;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24391__$1,(7),ch,inst_24371);
} else {
if((state_val_24392 === (13))){
var inst_24385 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
var statearr_24423_27294 = state_24391__$1;
(statearr_24423_27294[(2)] = inst_24385);

(statearr_24423_27294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (6))){
var inst_24376 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
if(cljs.core.truth_(inst_24376)){
var statearr_24424_27295 = state_24391__$1;
(statearr_24424_27295[(1)] = (8));

} else {
var statearr_24426_27296 = state_24391__$1;
(statearr_24426_27296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (3))){
var inst_24389 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24391__$1,inst_24389);
} else {
if((state_val_24392 === (12))){
var state_24391__$1 = state_24391;
var statearr_24427_27297 = state_24391__$1;
(statearr_24427_27297[(2)] = null);

(statearr_24427_27297[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (2))){
var inst_24367 = (state_24391[(7)]);
var state_24391__$1 = state_24391;
if(cljs.core.truth_(inst_24367)){
var statearr_24430_27298 = state_24391__$1;
(statearr_24430_27298[(1)] = (4));

} else {
var statearr_24433_27299 = state_24391__$1;
(statearr_24433_27299[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (11))){
var inst_24382 = cljs.core.async.close_BANG_(ch);
var state_24391__$1 = state_24391;
var statearr_24434_27300 = state_24391__$1;
(statearr_24434_27300[(2)] = inst_24382);

(statearr_24434_27300[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (9))){
var state_24391__$1 = state_24391;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24435_27301 = state_24391__$1;
(statearr_24435_27301[(1)] = (11));

} else {
var statearr_24436_27302 = state_24391__$1;
(statearr_24436_27302[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (5))){
var inst_24367 = (state_24391[(7)]);
var state_24391__$1 = state_24391;
var statearr_24437_27303 = state_24391__$1;
(statearr_24437_27303[(2)] = inst_24367);

(statearr_24437_27303[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (10))){
var inst_24387 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
var statearr_24439_27333 = state_24391__$1;
(statearr_24439_27333[(2)] = inst_24387);

(statearr_24439_27333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (8))){
var inst_24367 = (state_24391[(7)]);
var inst_24378 = cljs.core.next(inst_24367);
var inst_24367__$1 = inst_24378;
var state_24391__$1 = (function (){var statearr_24442 = state_24391;
(statearr_24442[(7)] = inst_24367__$1);

return statearr_24442;
})();
var statearr_24443_27335 = state_24391__$1;
(statearr_24443_27335[(2)] = null);

(statearr_24443_27335[(1)] = (2));


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
var cljs$core$async$state_machine__23198__auto__ = null;
var cljs$core$async$state_machine__23198__auto____0 = (function (){
var statearr_24448 = [null,null,null,null,null,null,null,null];
(statearr_24448[(0)] = cljs$core$async$state_machine__23198__auto__);

(statearr_24448[(1)] = (1));

return statearr_24448;
});
var cljs$core$async$state_machine__23198__auto____1 = (function (state_24391){
while(true){
var ret_value__23199__auto__ = (function (){try{while(true){
var result__23200__auto__ = switch__23197__auto__(state_24391);
if(cljs.core.keyword_identical_QMARK_(result__23200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23200__auto__;
}
break;
}
}catch (e24450){var ex__23201__auto__ = e24450;
var statearr_24451_27351 = state_24391;
(statearr_24451_27351[(2)] = ex__23201__auto__);


if(cljs.core.seq((state_24391[(4)]))){
var statearr_24452_27353 = state_24391;
(statearr_24452_27353[(1)] = cljs.core.first((state_24391[(4)])));

} else {
throw ex__23201__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27357 = state_24391;
state_24391 = G__27357;
continue;
} else {
return ret_value__23199__auto__;
}
break;
}
});
cljs$core$async$state_machine__23198__auto__ = function(state_24391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23198__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23198__auto____1.call(this,state_24391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23198__auto____0;
cljs$core$async$state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23198__auto____1;
return cljs$core$async$state_machine__23198__auto__;
})()
})();
var state__23413__auto__ = (function (){var statearr_24473 = f__23412__auto__();
(statearr_24473[(6)] = c__23411__auto__);

return statearr_24473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23413__auto__);
}));

return c__23411__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24482 = arguments.length;
switch (G__24482) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_27389 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_27389(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_27394 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_27394(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_27397 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_27397(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_27400 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_27400(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24516 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24516 = (function (ch,cs,meta24517){
this.ch = ch;
this.cs = cs;
this.meta24517 = meta24517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24518,meta24517__$1){
var self__ = this;
var _24518__$1 = this;
return (new cljs.core.async.t_cljs$core$async24516(self__.ch,self__.cs,meta24517__$1));
}));

(cljs.core.async.t_cljs$core$async24516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24518){
var self__ = this;
var _24518__$1 = this;
return self__.meta24517;
}));

(cljs.core.async.t_cljs$core$async24516.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24516.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24516.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24516.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async24516.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async24516.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async24516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24517","meta24517",-1820220618,null)], null);
}));

(cljs.core.async.t_cljs$core$async24516.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24516");

(cljs.core.async.t_cljs$core$async24516.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async24516");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24516.
 */
cljs.core.async.__GT_t_cljs$core$async24516 = (function cljs$core$async$mult_$___GT_t_cljs$core$async24516(ch__$1,cs__$1,meta24517){
return (new cljs.core.async.t_cljs$core$async24516(ch__$1,cs__$1,meta24517));
});

}

return (new cljs.core.async.t_cljs$core$async24516(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__23411__auto___27418 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23412__auto__ = (function (){var switch__23197__auto__ = (function (state_24679){
var state_val_24680 = (state_24679[(1)]);
if((state_val_24680 === (7))){
var inst_24670 = (state_24679[(2)]);
var state_24679__$1 = state_24679;
var statearr_24682_27420 = state_24679__$1;
(statearr_24682_27420[(2)] = inst_24670);

(statearr_24682_27420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (20))){
var inst_24567 = (state_24679[(7)]);
var inst_24580 = cljs.core.first(inst_24567);
var inst_24581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24580,(0),null);
var inst_24582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24580,(1),null);
var state_24679__$1 = (function (){var statearr_24683 = state_24679;
(statearr_24683[(8)] = inst_24581);

return statearr_24683;
})();
if(cljs.core.truth_(inst_24582)){
var statearr_24684_27421 = state_24679__$1;
(statearr_24684_27421[(1)] = (22));

} else {
var statearr_24685_27422 = state_24679__$1;
(statearr_24685_27422[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (27))){
var inst_24615 = (state_24679[(9)]);
var inst_24613 = (state_24679[(10)]);
var inst_24535 = (state_24679[(11)]);
var inst_24621 = (state_24679[(12)]);
var inst_24621__$1 = cljs.core._nth(inst_24613,inst_24615);
var inst_24622 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24621__$1,inst_24535,done);
var state_24679__$1 = (function (){var statearr_24686 = state_24679;
(statearr_24686[(12)] = inst_24621__$1);

return statearr_24686;
})();
if(cljs.core.truth_(inst_24622)){
var statearr_24687_27425 = state_24679__$1;
(statearr_24687_27425[(1)] = (30));

} else {
var statearr_24688_27426 = state_24679__$1;
(statearr_24688_27426[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (1))){
var state_24679__$1 = state_24679;
var statearr_24689_27427 = state_24679__$1;
(statearr_24689_27427[(2)] = null);

(statearr_24689_27427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (24))){
var inst_24567 = (state_24679[(7)]);
var inst_24587 = (state_24679[(2)]);
var inst_24588 = cljs.core.next(inst_24567);
var inst_24544 = inst_24588;
var inst_24545 = null;
var inst_24546 = (0);
var inst_24547 = (0);
var state_24679__$1 = (function (){var statearr_24690 = state_24679;
(statearr_24690[(13)] = inst_24546);

(statearr_24690[(14)] = inst_24547);

(statearr_24690[(15)] = inst_24544);

(statearr_24690[(16)] = inst_24545);

(statearr_24690[(17)] = inst_24587);

return statearr_24690;
})();
var statearr_24691_27439 = state_24679__$1;
(statearr_24691_27439[(2)] = null);

(statearr_24691_27439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (39))){
var state_24679__$1 = state_24679;
var statearr_24695_27442 = state_24679__$1;
(statearr_24695_27442[(2)] = null);

(statearr_24695_27442[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (4))){
var inst_24535 = (state_24679[(11)]);
var inst_24535__$1 = (state_24679[(2)]);
var inst_24536 = (inst_24535__$1 == null);
var state_24679__$1 = (function (){var statearr_24696 = state_24679;
(statearr_24696[(11)] = inst_24535__$1);

return statearr_24696;
})();
if(cljs.core.truth_(inst_24536)){
var statearr_24697_27448 = state_24679__$1;
(statearr_24697_27448[(1)] = (5));

} else {
var statearr_24698_27449 = state_24679__$1;
(statearr_24698_27449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (15))){
var inst_24546 = (state_24679[(13)]);
var inst_24547 = (state_24679[(14)]);
var inst_24544 = (state_24679[(15)]);
var inst_24545 = (state_24679[(16)]);
var inst_24563 = (state_24679[(2)]);
var inst_24564 = (inst_24547 + (1));
var tmp24692 = inst_24546;
var tmp24693 = inst_24544;
var tmp24694 = inst_24545;
var inst_24544__$1 = tmp24693;
var inst_24545__$1 = tmp24694;
var inst_24546__$1 = tmp24692;
var inst_24547__$1 = inst_24564;
var state_24679__$1 = (function (){var statearr_24699 = state_24679;
(statearr_24699[(13)] = inst_24546__$1);

(statearr_24699[(14)] = inst_24547__$1);

(statearr_24699[(15)] = inst_24544__$1);

(statearr_24699[(16)] = inst_24545__$1);

(statearr_24699[(18)] = inst_24563);

return statearr_24699;
})();
var statearr_24700_27452 = state_24679__$1;
(statearr_24700_27452[(2)] = null);

(statearr_24700_27452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (21))){
var inst_24591 = (state_24679[(2)]);
var state_24679__$1 = state_24679;
var statearr_24704_27453 = state_24679__$1;
(statearr_24704_27453[(2)] = inst_24591);

(statearr_24704_27453[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (31))){
var inst_24621 = (state_24679[(12)]);
var inst_24625 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24621);
var state_24679__$1 = state_24679;
var statearr_24705_27454 = state_24679__$1;
(statearr_24705_27454[(2)] = inst_24625);

(statearr_24705_27454[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (32))){
var inst_24615 = (state_24679[(9)]);
var inst_24613 = (state_24679[(10)]);
var inst_24612 = (state_24679[(19)]);
var inst_24614 = (state_24679[(20)]);
var inst_24627 = (state_24679[(2)]);
var inst_24628 = (inst_24615 + (1));
var tmp24701 = inst_24613;
var tmp24702 = inst_24612;
var tmp24703 = inst_24614;
var inst_24612__$1 = tmp24702;
var inst_24613__$1 = tmp24701;
var inst_24614__$1 = tmp24703;
var inst_24615__$1 = inst_24628;
var state_24679__$1 = (function (){var statearr_24709 = state_24679;
(statearr_24709[(9)] = inst_24615__$1);

(statearr_24709[(10)] = inst_24613__$1);

(statearr_24709[(21)] = inst_24627);

(statearr_24709[(19)] = inst_24612__$1);

(statearr_24709[(20)] = inst_24614__$1);

return statearr_24709;
})();
var statearr_24711_27455 = state_24679__$1;
(statearr_24711_27455[(2)] = null);

(statearr_24711_27455[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (40))){
var inst_24643 = (state_24679[(22)]);
var inst_24647 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24643);
var state_24679__$1 = state_24679;
var statearr_24712_27457 = state_24679__$1;
(statearr_24712_27457[(2)] = inst_24647);

(statearr_24712_27457[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (33))){
var inst_24631 = (state_24679[(23)]);
var inst_24636 = cljs.core.chunked_seq_QMARK_(inst_24631);
var state_24679__$1 = state_24679;
if(inst_24636){
var statearr_24714_27464 = state_24679__$1;
(statearr_24714_27464[(1)] = (36));

} else {
var statearr_24715_27465 = state_24679__$1;
(statearr_24715_27465[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (13))){
var inst_24557 = (state_24679[(24)]);
var inst_24560 = cljs.core.async.close_BANG_(inst_24557);
var state_24679__$1 = state_24679;
var statearr_24716_27466 = state_24679__$1;
(statearr_24716_27466[(2)] = inst_24560);

(statearr_24716_27466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (22))){
var inst_24581 = (state_24679[(8)]);
var inst_24584 = cljs.core.async.close_BANG_(inst_24581);
var state_24679__$1 = state_24679;
var statearr_24720_27506 = state_24679__$1;
(statearr_24720_27506[(2)] = inst_24584);

(statearr_24720_27506[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (36))){
var inst_24631 = (state_24679[(23)]);
var inst_24638 = cljs.core.chunk_first(inst_24631);
var inst_24639 = cljs.core.chunk_rest(inst_24631);
var inst_24640 = cljs.core.count(inst_24638);
var inst_24612 = inst_24639;
var inst_24613 = inst_24638;
var inst_24614 = inst_24640;
var inst_24615 = (0);
var state_24679__$1 = (function (){var statearr_24722 = state_24679;
(statearr_24722[(9)] = inst_24615);

(statearr_24722[(10)] = inst_24613);

(statearr_24722[(19)] = inst_24612);

(statearr_24722[(20)] = inst_24614);

return statearr_24722;
})();
var statearr_24723_27512 = state_24679__$1;
(statearr_24723_27512[(2)] = null);

(statearr_24723_27512[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (41))){
var inst_24631 = (state_24679[(23)]);
var inst_24649 = (state_24679[(2)]);
var inst_24650 = cljs.core.next(inst_24631);
var inst_24612 = inst_24650;
var inst_24613 = null;
var inst_24614 = (0);
var inst_24615 = (0);
var state_24679__$1 = (function (){var statearr_24725 = state_24679;
(statearr_24725[(9)] = inst_24615);

(statearr_24725[(10)] = inst_24613);

(statearr_24725[(19)] = inst_24612);

(statearr_24725[(20)] = inst_24614);

(statearr_24725[(25)] = inst_24649);

return statearr_24725;
})();
var statearr_24726_27533 = state_24679__$1;
(statearr_24726_27533[(2)] = null);

(statearr_24726_27533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (43))){
var state_24679__$1 = state_24679;
var statearr_24727_27536 = state_24679__$1;
(statearr_24727_27536[(2)] = null);

(statearr_24727_27536[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (29))){
var inst_24658 = (state_24679[(2)]);
var state_24679__$1 = state_24679;
var statearr_24728_27539 = state_24679__$1;
(statearr_24728_27539[(2)] = inst_24658);

(statearr_24728_27539[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (44))){
var inst_24667 = (state_24679[(2)]);
var state_24679__$1 = (function (){var statearr_24735 = state_24679;
(statearr_24735[(26)] = inst_24667);

return statearr_24735;
})();
var statearr_24736_27540 = state_24679__$1;
(statearr_24736_27540[(2)] = null);

(statearr_24736_27540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (6))){
var inst_24602 = (state_24679[(27)]);
var inst_24601 = cljs.core.deref(cs);
var inst_24602__$1 = cljs.core.keys(inst_24601);
var inst_24604 = cljs.core.count(inst_24602__$1);
var inst_24605 = cljs.core.reset_BANG_(dctr,inst_24604);
var inst_24611 = cljs.core.seq(inst_24602__$1);
var inst_24612 = inst_24611;
var inst_24613 = null;
var inst_24614 = (0);
var inst_24615 = (0);
var state_24679__$1 = (function (){var statearr_24737 = state_24679;
(statearr_24737[(9)] = inst_24615);

(statearr_24737[(10)] = inst_24613);

(statearr_24737[(19)] = inst_24612);

(statearr_24737[(20)] = inst_24614);

(statearr_24737[(27)] = inst_24602__$1);

(statearr_24737[(28)] = inst_24605);

return statearr_24737;
})();
var statearr_24738_27545 = state_24679__$1;
(statearr_24738_27545[(2)] = null);

(statearr_24738_27545[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (28))){
var inst_24612 = (state_24679[(19)]);
var inst_24631 = (state_24679[(23)]);
var inst_24631__$1 = cljs.core.seq(inst_24612);
var state_24679__$1 = (function (){var statearr_24739 = state_24679;
(statearr_24739[(23)] = inst_24631__$1);

return statearr_24739;
})();
if(inst_24631__$1){
var statearr_24740_27546 = state_24679__$1;
(statearr_24740_27546[(1)] = (33));

} else {
var statearr_24742_27547 = state_24679__$1;
(statearr_24742_27547[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (25))){
var inst_24615 = (state_24679[(9)]);
var inst_24614 = (state_24679[(20)]);
var inst_24618 = (inst_24615 < inst_24614);
var inst_24619 = inst_24618;
var state_24679__$1 = state_24679;
if(cljs.core.truth_(inst_24619)){
var statearr_24743_27548 = state_24679__$1;
(statearr_24743_27548[(1)] = (27));

} else {
var statearr_24745_27549 = state_24679__$1;
(statearr_24745_27549[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (34))){
var state_24679__$1 = state_24679;
var statearr_24747_27550 = state_24679__$1;
(statearr_24747_27550[(2)] = null);

(statearr_24747_27550[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (17))){
var state_24679__$1 = state_24679;
var statearr_24749_27554 = state_24679__$1;
(statearr_24749_27554[(2)] = null);

(statearr_24749_27554[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (3))){
var inst_24672 = (state_24679[(2)]);
var state_24679__$1 = state_24679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24679__$1,inst_24672);
} else {
if((state_val_24680 === (12))){
var inst_24596 = (state_24679[(2)]);
var state_24679__$1 = state_24679;
var statearr_24752_27562 = state_24679__$1;
(statearr_24752_27562[(2)] = inst_24596);

(statearr_24752_27562[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (2))){
var state_24679__$1 = state_24679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24679__$1,(4),ch);
} else {
if((state_val_24680 === (23))){
var state_24679__$1 = state_24679;
var statearr_24755_27582 = state_24679__$1;
(statearr_24755_27582[(2)] = null);

(statearr_24755_27582[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (35))){
var inst_24656 = (state_24679[(2)]);
var state_24679__$1 = state_24679;
var statearr_24757_27583 = state_24679__$1;
(statearr_24757_27583[(2)] = inst_24656);

(statearr_24757_27583[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (19))){
var inst_24567 = (state_24679[(7)]);
var inst_24572 = cljs.core.chunk_first(inst_24567);
var inst_24573 = cljs.core.chunk_rest(inst_24567);
var inst_24574 = cljs.core.count(inst_24572);
var inst_24544 = inst_24573;
var inst_24545 = inst_24572;
var inst_24546 = inst_24574;
var inst_24547 = (0);
var state_24679__$1 = (function (){var statearr_24758 = state_24679;
(statearr_24758[(13)] = inst_24546);

(statearr_24758[(14)] = inst_24547);

(statearr_24758[(15)] = inst_24544);

(statearr_24758[(16)] = inst_24545);

return statearr_24758;
})();
var statearr_24759_27584 = state_24679__$1;
(statearr_24759_27584[(2)] = null);

(statearr_24759_27584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (11))){
var inst_24567 = (state_24679[(7)]);
var inst_24544 = (state_24679[(15)]);
var inst_24567__$1 = cljs.core.seq(inst_24544);
var state_24679__$1 = (function (){var statearr_24760 = state_24679;
(statearr_24760[(7)] = inst_24567__$1);

return statearr_24760;
})();
if(inst_24567__$1){
var statearr_24761_27585 = state_24679__$1;
(statearr_24761_27585[(1)] = (16));

} else {
var statearr_24762_27586 = state_24679__$1;
(statearr_24762_27586[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (9))){
var inst_24598 = (state_24679[(2)]);
var state_24679__$1 = state_24679;
var statearr_24763_27588 = state_24679__$1;
(statearr_24763_27588[(2)] = inst_24598);

(statearr_24763_27588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (5))){
var inst_24542 = cljs.core.deref(cs);
var inst_24543 = cljs.core.seq(inst_24542);
var inst_24544 = inst_24543;
var inst_24545 = null;
var inst_24546 = (0);
var inst_24547 = (0);
var state_24679__$1 = (function (){var statearr_24764 = state_24679;
(statearr_24764[(13)] = inst_24546);

(statearr_24764[(14)] = inst_24547);

(statearr_24764[(15)] = inst_24544);

(statearr_24764[(16)] = inst_24545);

return statearr_24764;
})();
var statearr_24765_27589 = state_24679__$1;
(statearr_24765_27589[(2)] = null);

(statearr_24765_27589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (14))){
var state_24679__$1 = state_24679;
var statearr_24766_27590 = state_24679__$1;
(statearr_24766_27590[(2)] = null);

(statearr_24766_27590[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (45))){
var inst_24664 = (state_24679[(2)]);
var state_24679__$1 = state_24679;
var statearr_24767_27591 = state_24679__$1;
(statearr_24767_27591[(2)] = inst_24664);

(statearr_24767_27591[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (26))){
var inst_24602 = (state_24679[(27)]);
var inst_24660 = (state_24679[(2)]);
var inst_24661 = cljs.core.seq(inst_24602);
var state_24679__$1 = (function (){var statearr_24768 = state_24679;
(statearr_24768[(29)] = inst_24660);

return statearr_24768;
})();
if(inst_24661){
var statearr_24769_27592 = state_24679__$1;
(statearr_24769_27592[(1)] = (42));

} else {
var statearr_24770_27593 = state_24679__$1;
(statearr_24770_27593[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (16))){
var inst_24567 = (state_24679[(7)]);
var inst_24569 = cljs.core.chunked_seq_QMARK_(inst_24567);
var state_24679__$1 = state_24679;
if(inst_24569){
var statearr_24771_27595 = state_24679__$1;
(statearr_24771_27595[(1)] = (19));

} else {
var statearr_24772_27596 = state_24679__$1;
(statearr_24772_27596[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (38))){
var inst_24653 = (state_24679[(2)]);
var state_24679__$1 = state_24679;
var statearr_24782_27599 = state_24679__$1;
(statearr_24782_27599[(2)] = inst_24653);

(statearr_24782_27599[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (30))){
var state_24679__$1 = state_24679;
var statearr_24783_27602 = state_24679__$1;
(statearr_24783_27602[(2)] = null);

(statearr_24783_27602[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (10))){
var inst_24547 = (state_24679[(14)]);
var inst_24545 = (state_24679[(16)]);
var inst_24555 = cljs.core._nth(inst_24545,inst_24547);
var inst_24557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24555,(0),null);
var inst_24558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24555,(1),null);
var state_24679__$1 = (function (){var statearr_24789 = state_24679;
(statearr_24789[(24)] = inst_24557);

return statearr_24789;
})();
if(cljs.core.truth_(inst_24558)){
var statearr_24791_27632 = state_24679__$1;
(statearr_24791_27632[(1)] = (13));

} else {
var statearr_24792_27633 = state_24679__$1;
(statearr_24792_27633[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (18))){
var inst_24594 = (state_24679[(2)]);
var state_24679__$1 = state_24679;
var statearr_24794_27634 = state_24679__$1;
(statearr_24794_27634[(2)] = inst_24594);

(statearr_24794_27634[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (42))){
var state_24679__$1 = state_24679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24679__$1,(45),dchan);
} else {
if((state_val_24680 === (37))){
var inst_24535 = (state_24679[(11)]);
var inst_24631 = (state_24679[(23)]);
var inst_24643 = (state_24679[(22)]);
var inst_24643__$1 = cljs.core.first(inst_24631);
var inst_24644 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24643__$1,inst_24535,done);
var state_24679__$1 = (function (){var statearr_24810 = state_24679;
(statearr_24810[(22)] = inst_24643__$1);

return statearr_24810;
})();
if(cljs.core.truth_(inst_24644)){
var statearr_24811_27637 = state_24679__$1;
(statearr_24811_27637[(1)] = (39));

} else {
var statearr_24812_27638 = state_24679__$1;
(statearr_24812_27638[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (8))){
var inst_24546 = (state_24679[(13)]);
var inst_24547 = (state_24679[(14)]);
var inst_24549 = (inst_24547 < inst_24546);
var inst_24550 = inst_24549;
var state_24679__$1 = state_24679;
if(cljs.core.truth_(inst_24550)){
var statearr_24813_27639 = state_24679__$1;
(statearr_24813_27639[(1)] = (10));

} else {
var statearr_24814_27640 = state_24679__$1;
(statearr_24814_27640[(1)] = (11));

}

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__23198__auto__ = null;
var cljs$core$async$mult_$_state_machine__23198__auto____0 = (function (){
var statearr_24818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24818[(0)] = cljs$core$async$mult_$_state_machine__23198__auto__);

(statearr_24818[(1)] = (1));

return statearr_24818;
});
var cljs$core$async$mult_$_state_machine__23198__auto____1 = (function (state_24679){
while(true){
var ret_value__23199__auto__ = (function (){try{while(true){
var result__23200__auto__ = switch__23197__auto__(state_24679);
if(cljs.core.keyword_identical_QMARK_(result__23200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23200__auto__;
}
break;
}
}catch (e24824){var ex__23201__auto__ = e24824;
var statearr_24825_27653 = state_24679;
(statearr_24825_27653[(2)] = ex__23201__auto__);


if(cljs.core.seq((state_24679[(4)]))){
var statearr_24828_27654 = state_24679;
(statearr_24828_27654[(1)] = cljs.core.first((state_24679[(4)])));

} else {
throw ex__23201__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27655 = state_24679;
state_24679 = G__27655;
continue;
} else {
return ret_value__23199__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23198__auto__ = function(state_24679){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23198__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23198__auto____1.call(this,state_24679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23198__auto____0;
cljs$core$async$mult_$_state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23198__auto____1;
return cljs$core$async$mult_$_state_machine__23198__auto__;
})()
})();
var state__23413__auto__ = (function (){var statearr_24829 = f__23412__auto__();
(statearr_24829[(6)] = c__23411__auto___27418);

return statearr_24829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23413__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24833 = arguments.length;
switch (G__24833) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_27660 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_27660(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_27663 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_27663(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_27678 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_27678(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_27680 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_27680(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_27693 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_27693(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27694 = arguments.length;
var i__4737__auto___27695 = (0);
while(true){
if((i__4737__auto___27695 < len__4736__auto___27694)){
args__4742__auto__.push((arguments[i__4737__auto___27695]));

var G__27697 = (i__4737__auto___27695 + (1));
i__4737__auto___27695 = G__27697;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24859){
var map__24860 = p__24859;
var map__24860__$1 = (((((!((map__24860 == null))))?(((((map__24860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24860):map__24860);
var opts = map__24860__$1;
var statearr_24864_27703 = state;
(statearr_24864_27703[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_24868_27706 = state;
(statearr_24868_27706[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_24869_27709 = state;
(statearr_24869_27709[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24851){
var G__24852 = cljs.core.first(seq24851);
var seq24851__$1 = cljs.core.next(seq24851);
var G__24853 = cljs.core.first(seq24851__$1);
var seq24851__$2 = cljs.core.next(seq24851__$1);
var G__24854 = cljs.core.first(seq24851__$2);
var seq24851__$3 = cljs.core.next(seq24851__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24852,G__24853,G__24854,seq24851__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24880 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24880 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24881){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24881 = meta24881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24882,meta24881__$1){
var self__ = this;
var _24882__$1 = this;
return (new cljs.core.async.t_cljs$core$async24880(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24881__$1));
}));

(cljs.core.async.t_cljs$core$async24880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24882){
var self__ = this;
var _24882__$1 = this;
return self__.meta24881;
}));

(cljs.core.async.t_cljs$core$async24880.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24880.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async24880.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24880.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async24880.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async24880.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async24880.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async24880.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async24880.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24881","meta24881",-1929204466,null)], null);
}));

(cljs.core.async.t_cljs$core$async24880.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24880.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24880");

(cljs.core.async.t_cljs$core$async24880.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async24880");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24880.
 */
cljs.core.async.__GT_t_cljs$core$async24880 = (function cljs$core$async$mix_$___GT_t_cljs$core$async24880(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24881){
return (new cljs.core.async.t_cljs$core$async24880(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24881));
});

}

return (new cljs.core.async.t_cljs$core$async24880(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23411__auto___27733 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23412__auto__ = (function (){var switch__23197__auto__ = (function (state_25021){
var state_val_25022 = (state_25021[(1)]);
if((state_val_25022 === (7))){
var inst_24922 = (state_25021[(2)]);
var state_25021__$1 = state_25021;
var statearr_25024_27734 = state_25021__$1;
(statearr_25024_27734[(2)] = inst_24922);

(statearr_25024_27734[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (20))){
var inst_24934 = (state_25021[(7)]);
var state_25021__$1 = state_25021;
var statearr_25027_27735 = state_25021__$1;
(statearr_25027_27735[(2)] = inst_24934);

(statearr_25027_27735[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (27))){
var state_25021__$1 = state_25021;
var statearr_25029_27736 = state_25021__$1;
(statearr_25029_27736[(2)] = null);

(statearr_25029_27736[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (1))){
var inst_24907 = (state_25021[(8)]);
var inst_24907__$1 = calc_state();
var inst_24910 = (inst_24907__$1 == null);
var inst_24911 = cljs.core.not(inst_24910);
var state_25021__$1 = (function (){var statearr_25030 = state_25021;
(statearr_25030[(8)] = inst_24907__$1);

return statearr_25030;
})();
if(inst_24911){
var statearr_25032_27738 = state_25021__$1;
(statearr_25032_27738[(1)] = (2));

} else {
var statearr_25033_27739 = state_25021__$1;
(statearr_25033_27739[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (24))){
var inst_24987 = (state_25021[(9)]);
var inst_24960 = (state_25021[(10)]);
var inst_24971 = (state_25021[(11)]);
var inst_24987__$1 = (inst_24960.cljs$core$IFn$_invoke$arity$1 ? inst_24960.cljs$core$IFn$_invoke$arity$1(inst_24971) : inst_24960.call(null,inst_24971));
var state_25021__$1 = (function (){var statearr_25034 = state_25021;
(statearr_25034[(9)] = inst_24987__$1);

return statearr_25034;
})();
if(cljs.core.truth_(inst_24987__$1)){
var statearr_25035_27755 = state_25021__$1;
(statearr_25035_27755[(1)] = (29));

} else {
var statearr_25037_27757 = state_25021__$1;
(statearr_25037_27757[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (4))){
var inst_24925 = (state_25021[(2)]);
var state_25021__$1 = state_25021;
if(cljs.core.truth_(inst_24925)){
var statearr_25040_27758 = state_25021__$1;
(statearr_25040_27758[(1)] = (8));

} else {
var statearr_25041_27759 = state_25021__$1;
(statearr_25041_27759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (15))){
var inst_24953 = (state_25021[(2)]);
var state_25021__$1 = state_25021;
if(cljs.core.truth_(inst_24953)){
var statearr_25045_27760 = state_25021__$1;
(statearr_25045_27760[(1)] = (19));

} else {
var statearr_25046_27761 = state_25021__$1;
(statearr_25046_27761[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (21))){
var inst_24958 = (state_25021[(12)]);
var inst_24958__$1 = (state_25021[(2)]);
var inst_24960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24958__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24958__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24958__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25021__$1 = (function (){var statearr_25054 = state_25021;
(statearr_25054[(12)] = inst_24958__$1);

(statearr_25054[(13)] = inst_24961);

(statearr_25054[(10)] = inst_24960);

return statearr_25054;
})();
return cljs.core.async.ioc_alts_BANG_(state_25021__$1,(22),inst_24962);
} else {
if((state_val_25022 === (31))){
var inst_24999 = (state_25021[(2)]);
var state_25021__$1 = state_25021;
if(cljs.core.truth_(inst_24999)){
var statearr_25057_27764 = state_25021__$1;
(statearr_25057_27764[(1)] = (32));

} else {
var statearr_25058_27765 = state_25021__$1;
(statearr_25058_27765[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (32))){
var inst_24970 = (state_25021[(14)]);
var state_25021__$1 = state_25021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25021__$1,(35),out,inst_24970);
} else {
if((state_val_25022 === (33))){
var inst_24958 = (state_25021[(12)]);
var inst_24934 = inst_24958;
var state_25021__$1 = (function (){var statearr_25061 = state_25021;
(statearr_25061[(7)] = inst_24934);

return statearr_25061;
})();
var statearr_25063_27766 = state_25021__$1;
(statearr_25063_27766[(2)] = null);

(statearr_25063_27766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (13))){
var inst_24934 = (state_25021[(7)]);
var inst_24941 = inst_24934.cljs$lang$protocol_mask$partition0$;
var inst_24942 = (inst_24941 & (64));
var inst_24943 = inst_24934.cljs$core$ISeq$;
var inst_24944 = (cljs.core.PROTOCOL_SENTINEL === inst_24943);
var inst_24945 = ((inst_24942) || (inst_24944));
var state_25021__$1 = state_25021;
if(cljs.core.truth_(inst_24945)){
var statearr_25069_27767 = state_25021__$1;
(statearr_25069_27767[(1)] = (16));

} else {
var statearr_25070_27768 = state_25021__$1;
(statearr_25070_27768[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (22))){
var inst_24970 = (state_25021[(14)]);
var inst_24971 = (state_25021[(11)]);
var inst_24968 = (state_25021[(2)]);
var inst_24970__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24968,(0),null);
var inst_24971__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24968,(1),null);
var inst_24972 = (inst_24970__$1 == null);
var inst_24973 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24971__$1,change);
var inst_24974 = ((inst_24972) || (inst_24973));
var state_25021__$1 = (function (){var statearr_25073 = state_25021;
(statearr_25073[(14)] = inst_24970__$1);

(statearr_25073[(11)] = inst_24971__$1);

return statearr_25073;
})();
if(cljs.core.truth_(inst_24974)){
var statearr_25076_27769 = state_25021__$1;
(statearr_25076_27769[(1)] = (23));

} else {
var statearr_25078_27770 = state_25021__$1;
(statearr_25078_27770[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (36))){
var inst_24958 = (state_25021[(12)]);
var inst_24934 = inst_24958;
var state_25021__$1 = (function (){var statearr_25080 = state_25021;
(statearr_25080[(7)] = inst_24934);

return statearr_25080;
})();
var statearr_25081_27774 = state_25021__$1;
(statearr_25081_27774[(2)] = null);

(statearr_25081_27774[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (29))){
var inst_24987 = (state_25021[(9)]);
var state_25021__$1 = state_25021;
var statearr_25083_27777 = state_25021__$1;
(statearr_25083_27777[(2)] = inst_24987);

(statearr_25083_27777[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (6))){
var state_25021__$1 = state_25021;
var statearr_25084_27778 = state_25021__$1;
(statearr_25084_27778[(2)] = false);

(statearr_25084_27778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (28))){
var inst_24982 = (state_25021[(2)]);
var inst_24984 = calc_state();
var inst_24934 = inst_24984;
var state_25021__$1 = (function (){var statearr_25088 = state_25021;
(statearr_25088[(15)] = inst_24982);

(statearr_25088[(7)] = inst_24934);

return statearr_25088;
})();
var statearr_25089_27787 = state_25021__$1;
(statearr_25089_27787[(2)] = null);

(statearr_25089_27787[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (25))){
var inst_25015 = (state_25021[(2)]);
var state_25021__$1 = state_25021;
var statearr_25094_27788 = state_25021__$1;
(statearr_25094_27788[(2)] = inst_25015);

(statearr_25094_27788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (34))){
var inst_25013 = (state_25021[(2)]);
var state_25021__$1 = state_25021;
var statearr_25096_27793 = state_25021__$1;
(statearr_25096_27793[(2)] = inst_25013);

(statearr_25096_27793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (17))){
var state_25021__$1 = state_25021;
var statearr_25097_27794 = state_25021__$1;
(statearr_25097_27794[(2)] = false);

(statearr_25097_27794[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (3))){
var state_25021__$1 = state_25021;
var statearr_25101_27795 = state_25021__$1;
(statearr_25101_27795[(2)] = false);

(statearr_25101_27795[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (12))){
var inst_25017 = (state_25021[(2)]);
var state_25021__$1 = state_25021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25021__$1,inst_25017);
} else {
if((state_val_25022 === (2))){
var inst_24907 = (state_25021[(8)]);
var inst_24914 = inst_24907.cljs$lang$protocol_mask$partition0$;
var inst_24915 = (inst_24914 & (64));
var inst_24916 = inst_24907.cljs$core$ISeq$;
var inst_24917 = (cljs.core.PROTOCOL_SENTINEL === inst_24916);
var inst_24918 = ((inst_24915) || (inst_24917));
var state_25021__$1 = state_25021;
if(cljs.core.truth_(inst_24918)){
var statearr_25106_27798 = state_25021__$1;
(statearr_25106_27798[(1)] = (5));

} else {
var statearr_25107_27799 = state_25021__$1;
(statearr_25107_27799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (23))){
var inst_24970 = (state_25021[(14)]);
var inst_24976 = (inst_24970 == null);
var state_25021__$1 = state_25021;
if(cljs.core.truth_(inst_24976)){
var statearr_25109_27800 = state_25021__$1;
(statearr_25109_27800[(1)] = (26));

} else {
var statearr_25110_27801 = state_25021__$1;
(statearr_25110_27801[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (35))){
var inst_25002 = (state_25021[(2)]);
var state_25021__$1 = state_25021;
if(cljs.core.truth_(inst_25002)){
var statearr_25112_27802 = state_25021__$1;
(statearr_25112_27802[(1)] = (36));

} else {
var statearr_25113_27803 = state_25021__$1;
(statearr_25113_27803[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (19))){
var inst_24934 = (state_25021[(7)]);
var inst_24955 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24934);
var state_25021__$1 = state_25021;
var statearr_25116_27806 = state_25021__$1;
(statearr_25116_27806[(2)] = inst_24955);

(statearr_25116_27806[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (11))){
var inst_24934 = (state_25021[(7)]);
var inst_24938 = (inst_24934 == null);
var inst_24939 = cljs.core.not(inst_24938);
var state_25021__$1 = state_25021;
if(inst_24939){
var statearr_25120_27807 = state_25021__$1;
(statearr_25120_27807[(1)] = (13));

} else {
var statearr_25121_27808 = state_25021__$1;
(statearr_25121_27808[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (9))){
var inst_24907 = (state_25021[(8)]);
var state_25021__$1 = state_25021;
var statearr_25123_27810 = state_25021__$1;
(statearr_25123_27810[(2)] = inst_24907);

(statearr_25123_27810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (5))){
var state_25021__$1 = state_25021;
var statearr_25124_27812 = state_25021__$1;
(statearr_25124_27812[(2)] = true);

(statearr_25124_27812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (14))){
var state_25021__$1 = state_25021;
var statearr_25125_27814 = state_25021__$1;
(statearr_25125_27814[(2)] = false);

(statearr_25125_27814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (26))){
var inst_24971 = (state_25021[(11)]);
var inst_24978 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24971);
var state_25021__$1 = state_25021;
var statearr_25126_27815 = state_25021__$1;
(statearr_25126_27815[(2)] = inst_24978);

(statearr_25126_27815[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (16))){
var state_25021__$1 = state_25021;
var statearr_25127_27816 = state_25021__$1;
(statearr_25127_27816[(2)] = true);

(statearr_25127_27816[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (38))){
var inst_25007 = (state_25021[(2)]);
var state_25021__$1 = state_25021;
var statearr_25128_27817 = state_25021__$1;
(statearr_25128_27817[(2)] = inst_25007);

(statearr_25128_27817[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (30))){
var inst_24961 = (state_25021[(13)]);
var inst_24960 = (state_25021[(10)]);
var inst_24971 = (state_25021[(11)]);
var inst_24992 = cljs.core.empty_QMARK_(inst_24960);
var inst_24994 = (inst_24961.cljs$core$IFn$_invoke$arity$1 ? inst_24961.cljs$core$IFn$_invoke$arity$1(inst_24971) : inst_24961.call(null,inst_24971));
var inst_24996 = cljs.core.not(inst_24994);
var inst_24997 = ((inst_24992) && (inst_24996));
var state_25021__$1 = state_25021;
var statearr_25131_27821 = state_25021__$1;
(statearr_25131_27821[(2)] = inst_24997);

(statearr_25131_27821[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (10))){
var inst_24907 = (state_25021[(8)]);
var inst_24930 = (state_25021[(2)]);
var inst_24931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24930,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24930,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24930,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24934 = inst_24907;
var state_25021__$1 = (function (){var statearr_25134 = state_25021;
(statearr_25134[(16)] = inst_24931);

(statearr_25134[(7)] = inst_24934);

(statearr_25134[(17)] = inst_24933);

(statearr_25134[(18)] = inst_24932);

return statearr_25134;
})();
var statearr_25136_27832 = state_25021__$1;
(statearr_25136_27832[(2)] = null);

(statearr_25136_27832[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (18))){
var inst_24950 = (state_25021[(2)]);
var state_25021__$1 = state_25021;
var statearr_25138_27833 = state_25021__$1;
(statearr_25138_27833[(2)] = inst_24950);

(statearr_25138_27833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (37))){
var state_25021__$1 = state_25021;
var statearr_25140_27834 = state_25021__$1;
(statearr_25140_27834[(2)] = null);

(statearr_25140_27834[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25022 === (8))){
var inst_24907 = (state_25021[(8)]);
var inst_24927 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24907);
var state_25021__$1 = state_25021;
var statearr_25141_27835 = state_25021__$1;
(statearr_25141_27835[(2)] = inst_24927);

(statearr_25141_27835[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__23198__auto__ = null;
var cljs$core$async$mix_$_state_machine__23198__auto____0 = (function (){
var statearr_25146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25146[(0)] = cljs$core$async$mix_$_state_machine__23198__auto__);

(statearr_25146[(1)] = (1));

return statearr_25146;
});
var cljs$core$async$mix_$_state_machine__23198__auto____1 = (function (state_25021){
while(true){
var ret_value__23199__auto__ = (function (){try{while(true){
var result__23200__auto__ = switch__23197__auto__(state_25021);
if(cljs.core.keyword_identical_QMARK_(result__23200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23200__auto__;
}
break;
}
}catch (e25150){var ex__23201__auto__ = e25150;
var statearr_25151_27841 = state_25021;
(statearr_25151_27841[(2)] = ex__23201__auto__);


if(cljs.core.seq((state_25021[(4)]))){
var statearr_25152_27844 = state_25021;
(statearr_25152_27844[(1)] = cljs.core.first((state_25021[(4)])));

} else {
throw ex__23201__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27845 = state_25021;
state_25021 = G__27845;
continue;
} else {
return ret_value__23199__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23198__auto__ = function(state_25021){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23198__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23198__auto____1.call(this,state_25021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23198__auto____0;
cljs$core$async$mix_$_state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23198__auto____1;
return cljs$core$async$mix_$_state_machine__23198__auto__;
})()
})();
var state__23413__auto__ = (function (){var statearr_25155 = f__23412__auto__();
(statearr_25155[(6)] = c__23411__auto___27733);

return statearr_25155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23413__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_27857 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_27857(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_27862 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_27862(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_27865 = (function() {
var G__27866 = null;
var G__27866__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__27866__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__27866 = function(p,v){
switch(arguments.length){
case 1:
return G__27866__1.call(this,p);
case 2:
return G__27866__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27866.cljs$core$IFn$_invoke$arity$1 = G__27866__1;
G__27866.cljs$core$IFn$_invoke$arity$2 = G__27866__2;
return G__27866;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25185 = arguments.length;
switch (G__25185) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27865(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27865(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__25190 = arguments.length;
switch (G__25190) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__25188_SHARP_){
if(cljs.core.truth_((p1__25188_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25188_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25188_SHARP_.call(null,topic)))){
return p1__25188_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25188_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25213 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25213 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25214){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25214 = meta25214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25215,meta25214__$1){
var self__ = this;
var _25215__$1 = this;
return (new cljs.core.async.t_cljs$core$async25213(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25214__$1));
}));

(cljs.core.async.t_cljs$core$async25213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25215){
var self__ = this;
var _25215__$1 = this;
return self__.meta25214;
}));

(cljs.core.async.t_cljs$core$async25213.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25213.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25213.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25213.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async25213.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async25213.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async25213.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async25213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25214","meta25214",1690501064,null)], null);
}));

(cljs.core.async.t_cljs$core$async25213.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25213");

(cljs.core.async.t_cljs$core$async25213.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25213");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25213.
 */
cljs.core.async.__GT_t_cljs$core$async25213 = (function cljs$core$async$__GT_t_cljs$core$async25213(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25214){
return (new cljs.core.async.t_cljs$core$async25213(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25214));
});

}

return (new cljs.core.async.t_cljs$core$async25213(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23411__auto___27898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23412__auto__ = (function (){var switch__23197__auto__ = (function (state_25317){
var state_val_25318 = (state_25317[(1)]);
if((state_val_25318 === (7))){
var inst_25311 = (state_25317[(2)]);
var state_25317__$1 = state_25317;
var statearr_25320_27903 = state_25317__$1;
(statearr_25320_27903[(2)] = inst_25311);

(statearr_25320_27903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (20))){
var state_25317__$1 = state_25317;
var statearr_25329_27907 = state_25317__$1;
(statearr_25329_27907[(2)] = null);

(statearr_25329_27907[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (1))){
var state_25317__$1 = state_25317;
var statearr_25331_27916 = state_25317__$1;
(statearr_25331_27916[(2)] = null);

(statearr_25331_27916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (24))){
var inst_25290 = (state_25317[(7)]);
var inst_25303 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25290);
var state_25317__$1 = state_25317;
var statearr_25332_27921 = state_25317__$1;
(statearr_25332_27921[(2)] = inst_25303);

(statearr_25332_27921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (4))){
var inst_25240 = (state_25317[(8)]);
var inst_25240__$1 = (state_25317[(2)]);
var inst_25241 = (inst_25240__$1 == null);
var state_25317__$1 = (function (){var statearr_25333 = state_25317;
(statearr_25333[(8)] = inst_25240__$1);

return statearr_25333;
})();
if(cljs.core.truth_(inst_25241)){
var statearr_25340_27927 = state_25317__$1;
(statearr_25340_27927[(1)] = (5));

} else {
var statearr_25342_27932 = state_25317__$1;
(statearr_25342_27932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (15))){
var inst_25284 = (state_25317[(2)]);
var state_25317__$1 = state_25317;
var statearr_25345_27936 = state_25317__$1;
(statearr_25345_27936[(2)] = inst_25284);

(statearr_25345_27936[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (21))){
var inst_25308 = (state_25317[(2)]);
var state_25317__$1 = (function (){var statearr_25346 = state_25317;
(statearr_25346[(9)] = inst_25308);

return statearr_25346;
})();
var statearr_25347_27944 = state_25317__$1;
(statearr_25347_27944[(2)] = null);

(statearr_25347_27944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (13))){
var inst_25265 = (state_25317[(10)]);
var inst_25267 = cljs.core.chunked_seq_QMARK_(inst_25265);
var state_25317__$1 = state_25317;
if(inst_25267){
var statearr_25348_27949 = state_25317__$1;
(statearr_25348_27949[(1)] = (16));

} else {
var statearr_25349_27951 = state_25317__$1;
(statearr_25349_27951[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (22))){
var inst_25300 = (state_25317[(2)]);
var state_25317__$1 = state_25317;
if(cljs.core.truth_(inst_25300)){
var statearr_25350_27958 = state_25317__$1;
(statearr_25350_27958[(1)] = (23));

} else {
var statearr_25351_27959 = state_25317__$1;
(statearr_25351_27959[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (6))){
var inst_25290 = (state_25317[(7)]);
var inst_25295 = (state_25317[(11)]);
var inst_25240 = (state_25317[(8)]);
var inst_25290__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25240) : topic_fn.call(null,inst_25240));
var inst_25294 = cljs.core.deref(mults);
var inst_25295__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25294,inst_25290__$1);
var state_25317__$1 = (function (){var statearr_25354 = state_25317;
(statearr_25354[(7)] = inst_25290__$1);

(statearr_25354[(11)] = inst_25295__$1);

return statearr_25354;
})();
if(cljs.core.truth_(inst_25295__$1)){
var statearr_25355_27971 = state_25317__$1;
(statearr_25355_27971[(1)] = (19));

} else {
var statearr_25357_27973 = state_25317__$1;
(statearr_25357_27973[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (25))){
var inst_25305 = (state_25317[(2)]);
var state_25317__$1 = state_25317;
var statearr_25360_27977 = state_25317__$1;
(statearr_25360_27977[(2)] = inst_25305);

(statearr_25360_27977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (17))){
var inst_25265 = (state_25317[(10)]);
var inst_25275 = cljs.core.first(inst_25265);
var inst_25276 = cljs.core.async.muxch_STAR_(inst_25275);
var inst_25277 = cljs.core.async.close_BANG_(inst_25276);
var inst_25278 = cljs.core.next(inst_25265);
var inst_25250 = inst_25278;
var inst_25251 = null;
var inst_25252 = (0);
var inst_25253 = (0);
var state_25317__$1 = (function (){var statearr_25362 = state_25317;
(statearr_25362[(12)] = inst_25250);

(statearr_25362[(13)] = inst_25252);

(statearr_25362[(14)] = inst_25251);

(statearr_25362[(15)] = inst_25277);

(statearr_25362[(16)] = inst_25253);

return statearr_25362;
})();
var statearr_25363_27980 = state_25317__$1;
(statearr_25363_27980[(2)] = null);

(statearr_25363_27980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (3))){
var inst_25313 = (state_25317[(2)]);
var state_25317__$1 = state_25317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25317__$1,inst_25313);
} else {
if((state_val_25318 === (12))){
var inst_25286 = (state_25317[(2)]);
var state_25317__$1 = state_25317;
var statearr_25364_27981 = state_25317__$1;
(statearr_25364_27981[(2)] = inst_25286);

(statearr_25364_27981[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (2))){
var state_25317__$1 = state_25317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25317__$1,(4),ch);
} else {
if((state_val_25318 === (23))){
var state_25317__$1 = state_25317;
var statearr_25366_27982 = state_25317__$1;
(statearr_25366_27982[(2)] = null);

(statearr_25366_27982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (19))){
var inst_25295 = (state_25317[(11)]);
var inst_25240 = (state_25317[(8)]);
var inst_25298 = cljs.core.async.muxch_STAR_(inst_25295);
var state_25317__$1 = state_25317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25317__$1,(22),inst_25298,inst_25240);
} else {
if((state_val_25318 === (11))){
var inst_25250 = (state_25317[(12)]);
var inst_25265 = (state_25317[(10)]);
var inst_25265__$1 = cljs.core.seq(inst_25250);
var state_25317__$1 = (function (){var statearr_25368 = state_25317;
(statearr_25368[(10)] = inst_25265__$1);

return statearr_25368;
})();
if(inst_25265__$1){
var statearr_25371_27983 = state_25317__$1;
(statearr_25371_27983[(1)] = (13));

} else {
var statearr_25374_27984 = state_25317__$1;
(statearr_25374_27984[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (9))){
var inst_25288 = (state_25317[(2)]);
var state_25317__$1 = state_25317;
var statearr_25375_27987 = state_25317__$1;
(statearr_25375_27987[(2)] = inst_25288);

(statearr_25375_27987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (5))){
var inst_25247 = cljs.core.deref(mults);
var inst_25248 = cljs.core.vals(inst_25247);
var inst_25249 = cljs.core.seq(inst_25248);
var inst_25250 = inst_25249;
var inst_25251 = null;
var inst_25252 = (0);
var inst_25253 = (0);
var state_25317__$1 = (function (){var statearr_25377 = state_25317;
(statearr_25377[(12)] = inst_25250);

(statearr_25377[(13)] = inst_25252);

(statearr_25377[(14)] = inst_25251);

(statearr_25377[(16)] = inst_25253);

return statearr_25377;
})();
var statearr_25381_28160 = state_25317__$1;
(statearr_25381_28160[(2)] = null);

(statearr_25381_28160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (14))){
var state_25317__$1 = state_25317;
var statearr_25387_28164 = state_25317__$1;
(statearr_25387_28164[(2)] = null);

(statearr_25387_28164[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (16))){
var inst_25265 = (state_25317[(10)]);
var inst_25269 = cljs.core.chunk_first(inst_25265);
var inst_25270 = cljs.core.chunk_rest(inst_25265);
var inst_25271 = cljs.core.count(inst_25269);
var inst_25250 = inst_25270;
var inst_25251 = inst_25269;
var inst_25252 = inst_25271;
var inst_25253 = (0);
var state_25317__$1 = (function (){var statearr_25396 = state_25317;
(statearr_25396[(12)] = inst_25250);

(statearr_25396[(13)] = inst_25252);

(statearr_25396[(14)] = inst_25251);

(statearr_25396[(16)] = inst_25253);

return statearr_25396;
})();
var statearr_25397_28165 = state_25317__$1;
(statearr_25397_28165[(2)] = null);

(statearr_25397_28165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (10))){
var inst_25250 = (state_25317[(12)]);
var inst_25252 = (state_25317[(13)]);
var inst_25251 = (state_25317[(14)]);
var inst_25253 = (state_25317[(16)]);
var inst_25259 = cljs.core._nth(inst_25251,inst_25253);
var inst_25260 = cljs.core.async.muxch_STAR_(inst_25259);
var inst_25261 = cljs.core.async.close_BANG_(inst_25260);
var inst_25262 = (inst_25253 + (1));
var tmp25383 = inst_25250;
var tmp25384 = inst_25252;
var tmp25385 = inst_25251;
var inst_25250__$1 = tmp25383;
var inst_25251__$1 = tmp25385;
var inst_25252__$1 = tmp25384;
var inst_25253__$1 = inst_25262;
var state_25317__$1 = (function (){var statearr_25404 = state_25317;
(statearr_25404[(12)] = inst_25250__$1);

(statearr_25404[(17)] = inst_25261);

(statearr_25404[(13)] = inst_25252__$1);

(statearr_25404[(14)] = inst_25251__$1);

(statearr_25404[(16)] = inst_25253__$1);

return statearr_25404;
})();
var statearr_25406_28184 = state_25317__$1;
(statearr_25406_28184[(2)] = null);

(statearr_25406_28184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (18))){
var inst_25281 = (state_25317[(2)]);
var state_25317__$1 = state_25317;
var statearr_25408_28186 = state_25317__$1;
(statearr_25408_28186[(2)] = inst_25281);

(statearr_25408_28186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25318 === (8))){
var inst_25252 = (state_25317[(13)]);
var inst_25253 = (state_25317[(16)]);
var inst_25256 = (inst_25253 < inst_25252);
var inst_25257 = inst_25256;
var state_25317__$1 = state_25317;
if(cljs.core.truth_(inst_25257)){
var statearr_25409_28188 = state_25317__$1;
(statearr_25409_28188[(1)] = (10));

} else {
var statearr_25410_28189 = state_25317__$1;
(statearr_25410_28189[(1)] = (11));

}

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
var cljs$core$async$state_machine__23198__auto__ = null;
var cljs$core$async$state_machine__23198__auto____0 = (function (){
var statearr_25417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25417[(0)] = cljs$core$async$state_machine__23198__auto__);

(statearr_25417[(1)] = (1));

return statearr_25417;
});
var cljs$core$async$state_machine__23198__auto____1 = (function (state_25317){
while(true){
var ret_value__23199__auto__ = (function (){try{while(true){
var result__23200__auto__ = switch__23197__auto__(state_25317);
if(cljs.core.keyword_identical_QMARK_(result__23200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23200__auto__;
}
break;
}
}catch (e25418){var ex__23201__auto__ = e25418;
var statearr_25421_28206 = state_25317;
(statearr_25421_28206[(2)] = ex__23201__auto__);


if(cljs.core.seq((state_25317[(4)]))){
var statearr_25422_28207 = state_25317;
(statearr_25422_28207[(1)] = cljs.core.first((state_25317[(4)])));

} else {
throw ex__23201__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28208 = state_25317;
state_25317 = G__28208;
continue;
} else {
return ret_value__23199__auto__;
}
break;
}
});
cljs$core$async$state_machine__23198__auto__ = function(state_25317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23198__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23198__auto____1.call(this,state_25317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23198__auto____0;
cljs$core$async$state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23198__auto____1;
return cljs$core$async$state_machine__23198__auto__;
})()
})();
var state__23413__auto__ = (function (){var statearr_25496 = f__23412__auto__();
(statearr_25496[(6)] = c__23411__auto___27898);

return statearr_25496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23413__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25505 = arguments.length;
switch (G__25505) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25511 = arguments.length;
switch (G__25511) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25517 = arguments.length;
switch (G__25517) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__23411__auto___28239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23412__auto__ = (function (){var switch__23197__auto__ = (function (state_25633){
var state_val_25634 = (state_25633[(1)]);
if((state_val_25634 === (7))){
var state_25633__$1 = state_25633;
var statearr_25635_28240 = state_25633__$1;
(statearr_25635_28240[(2)] = null);

(statearr_25635_28240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (1))){
var state_25633__$1 = state_25633;
var statearr_25636_28246 = state_25633__$1;
(statearr_25636_28246[(2)] = null);

(statearr_25636_28246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (4))){
var inst_25581 = (state_25633[(7)]);
var inst_25582 = (state_25633[(8)]);
var inst_25585 = (inst_25582 < inst_25581);
var state_25633__$1 = state_25633;
if(cljs.core.truth_(inst_25585)){
var statearr_25637_28258 = state_25633__$1;
(statearr_25637_28258[(1)] = (6));

} else {
var statearr_25638_28259 = state_25633__$1;
(statearr_25638_28259[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (15))){
var inst_25619 = (state_25633[(9)]);
var inst_25624 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25619);
var state_25633__$1 = state_25633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25633__$1,(17),out,inst_25624);
} else {
if((state_val_25634 === (13))){
var inst_25619 = (state_25633[(9)]);
var inst_25619__$1 = (state_25633[(2)]);
var inst_25620 = cljs.core.some(cljs.core.nil_QMARK_,inst_25619__$1);
var state_25633__$1 = (function (){var statearr_25640 = state_25633;
(statearr_25640[(9)] = inst_25619__$1);

return statearr_25640;
})();
if(cljs.core.truth_(inst_25620)){
var statearr_25641_28260 = state_25633__$1;
(statearr_25641_28260[(1)] = (14));

} else {
var statearr_25642_28261 = state_25633__$1;
(statearr_25642_28261[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (6))){
var state_25633__$1 = state_25633;
var statearr_25643_28262 = state_25633__$1;
(statearr_25643_28262[(2)] = null);

(statearr_25643_28262[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (17))){
var inst_25626 = (state_25633[(2)]);
var state_25633__$1 = (function (){var statearr_25646 = state_25633;
(statearr_25646[(10)] = inst_25626);

return statearr_25646;
})();
var statearr_25648_28273 = state_25633__$1;
(statearr_25648_28273[(2)] = null);

(statearr_25648_28273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (3))){
var inst_25631 = (state_25633[(2)]);
var state_25633__$1 = state_25633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25633__$1,inst_25631);
} else {
if((state_val_25634 === (12))){
var _ = (function (){var statearr_25649 = state_25633;
(statearr_25649[(4)] = cljs.core.rest((state_25633[(4)])));

return statearr_25649;
})();
var state_25633__$1 = state_25633;
var ex25645 = (state_25633__$1[(2)]);
var statearr_25652_28285 = state_25633__$1;
(statearr_25652_28285[(5)] = ex25645);


if((ex25645 instanceof Object)){
var statearr_25653_28291 = state_25633__$1;
(statearr_25653_28291[(1)] = (11));

(statearr_25653_28291[(5)] = null);

} else {
throw ex25645;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (2))){
var inst_25580 = cljs.core.reset_BANG_(dctr,cnt);
var inst_25581 = cnt;
var inst_25582 = (0);
var state_25633__$1 = (function (){var statearr_25657 = state_25633;
(statearr_25657[(7)] = inst_25581);

(statearr_25657[(11)] = inst_25580);

(statearr_25657[(8)] = inst_25582);

return statearr_25657;
})();
var statearr_25659_28302 = state_25633__$1;
(statearr_25659_28302[(2)] = null);

(statearr_25659_28302[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (11))){
var inst_25595 = (state_25633[(2)]);
var inst_25598 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_25633__$1 = (function (){var statearr_25662 = state_25633;
(statearr_25662[(12)] = inst_25595);

return statearr_25662;
})();
var statearr_25664_28307 = state_25633__$1;
(statearr_25664_28307[(2)] = inst_25598);

(statearr_25664_28307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (9))){
var inst_25582 = (state_25633[(8)]);
var _ = (function (){var statearr_25668 = state_25633;
(statearr_25668[(4)] = cljs.core.cons((12),(state_25633[(4)])));

return statearr_25668;
})();
var inst_25604 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25582) : chs__$1.call(null,inst_25582));
var inst_25605 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25582) : done.call(null,inst_25582));
var inst_25606 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25604,inst_25605);
var ___$1 = (function (){var statearr_25670 = state_25633;
(statearr_25670[(4)] = cljs.core.rest((state_25633[(4)])));

return statearr_25670;
})();
var state_25633__$1 = state_25633;
var statearr_25671_28313 = state_25633__$1;
(statearr_25671_28313[(2)] = inst_25606);

(statearr_25671_28313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (5))){
var inst_25617 = (state_25633[(2)]);
var state_25633__$1 = (function (){var statearr_25673 = state_25633;
(statearr_25673[(13)] = inst_25617);

return statearr_25673;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25633__$1,(13),dchan);
} else {
if((state_val_25634 === (14))){
var inst_25622 = cljs.core.async.close_BANG_(out);
var state_25633__$1 = state_25633;
var statearr_25678_28321 = state_25633__$1;
(statearr_25678_28321[(2)] = inst_25622);

(statearr_25678_28321[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (16))){
var inst_25629 = (state_25633[(2)]);
var state_25633__$1 = state_25633;
var statearr_25680_28325 = state_25633__$1;
(statearr_25680_28325[(2)] = inst_25629);

(statearr_25680_28325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (10))){
var inst_25582 = (state_25633[(8)]);
var inst_25610 = (state_25633[(2)]);
var inst_25611 = (inst_25582 + (1));
var inst_25582__$1 = inst_25611;
var state_25633__$1 = (function (){var statearr_25682 = state_25633;
(statearr_25682[(14)] = inst_25610);

(statearr_25682[(8)] = inst_25582__$1);

return statearr_25682;
})();
var statearr_25683_28327 = state_25633__$1;
(statearr_25683_28327[(2)] = null);

(statearr_25683_28327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (8))){
var inst_25615 = (state_25633[(2)]);
var state_25633__$1 = state_25633;
var statearr_25690_28328 = state_25633__$1;
(statearr_25690_28328[(2)] = inst_25615);

(statearr_25690_28328[(1)] = (5));


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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23198__auto__ = null;
var cljs$core$async$state_machine__23198__auto____0 = (function (){
var statearr_25692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25692[(0)] = cljs$core$async$state_machine__23198__auto__);

(statearr_25692[(1)] = (1));

return statearr_25692;
});
var cljs$core$async$state_machine__23198__auto____1 = (function (state_25633){
while(true){
var ret_value__23199__auto__ = (function (){try{while(true){
var result__23200__auto__ = switch__23197__auto__(state_25633);
if(cljs.core.keyword_identical_QMARK_(result__23200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23200__auto__;
}
break;
}
}catch (e25693){var ex__23201__auto__ = e25693;
var statearr_25695_28330 = state_25633;
(statearr_25695_28330[(2)] = ex__23201__auto__);


if(cljs.core.seq((state_25633[(4)]))){
var statearr_25697_28331 = state_25633;
(statearr_25697_28331[(1)] = cljs.core.first((state_25633[(4)])));

} else {
throw ex__23201__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28332 = state_25633;
state_25633 = G__28332;
continue;
} else {
return ret_value__23199__auto__;
}
break;
}
});
cljs$core$async$state_machine__23198__auto__ = function(state_25633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23198__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23198__auto____1.call(this,state_25633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23198__auto____0;
cljs$core$async$state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23198__auto____1;
return cljs$core$async$state_machine__23198__auto__;
})()
})();
var state__23413__auto__ = (function (){var statearr_25701 = f__23412__auto__();
(statearr_25701[(6)] = c__23411__auto___28239);

return statearr_25701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23413__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25760 = arguments.length;
switch (G__25760) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23411__auto___28338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23412__auto__ = (function (){var switch__23197__auto__ = (function (state_25797){
var state_val_25798 = (state_25797[(1)]);
if((state_val_25798 === (7))){
var inst_25777 = (state_25797[(7)]);
var inst_25776 = (state_25797[(8)]);
var inst_25776__$1 = (state_25797[(2)]);
var inst_25777__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25776__$1,(0),null);
var inst_25778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25776__$1,(1),null);
var inst_25779 = (inst_25777__$1 == null);
var state_25797__$1 = (function (){var statearr_25801 = state_25797;
(statearr_25801[(7)] = inst_25777__$1);

(statearr_25801[(9)] = inst_25778);

(statearr_25801[(8)] = inst_25776__$1);

return statearr_25801;
})();
if(cljs.core.truth_(inst_25779)){
var statearr_25802_28349 = state_25797__$1;
(statearr_25802_28349[(1)] = (8));

} else {
var statearr_25803_28350 = state_25797__$1;
(statearr_25803_28350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (1))){
var inst_25766 = cljs.core.vec(chs);
var inst_25767 = inst_25766;
var state_25797__$1 = (function (){var statearr_25805 = state_25797;
(statearr_25805[(10)] = inst_25767);

return statearr_25805;
})();
var statearr_25806_28351 = state_25797__$1;
(statearr_25806_28351[(2)] = null);

(statearr_25806_28351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (4))){
var inst_25767 = (state_25797[(10)]);
var state_25797__$1 = state_25797;
return cljs.core.async.ioc_alts_BANG_(state_25797__$1,(7),inst_25767);
} else {
if((state_val_25798 === (6))){
var inst_25793 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25809_28383 = state_25797__$1;
(statearr_25809_28383[(2)] = inst_25793);

(statearr_25809_28383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (3))){
var inst_25795 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25797__$1,inst_25795);
} else {
if((state_val_25798 === (2))){
var inst_25767 = (state_25797[(10)]);
var inst_25769 = cljs.core.count(inst_25767);
var inst_25770 = (inst_25769 > (0));
var state_25797__$1 = state_25797;
if(cljs.core.truth_(inst_25770)){
var statearr_25812_28394 = state_25797__$1;
(statearr_25812_28394[(1)] = (4));

} else {
var statearr_25813_28395 = state_25797__$1;
(statearr_25813_28395[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (11))){
var inst_25767 = (state_25797[(10)]);
var inst_25786 = (state_25797[(2)]);
var tmp25810 = inst_25767;
var inst_25767__$1 = tmp25810;
var state_25797__$1 = (function (){var statearr_25822 = state_25797;
(statearr_25822[(11)] = inst_25786);

(statearr_25822[(10)] = inst_25767__$1);

return statearr_25822;
})();
var statearr_25823_28396 = state_25797__$1;
(statearr_25823_28396[(2)] = null);

(statearr_25823_28396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (9))){
var inst_25777 = (state_25797[(7)]);
var state_25797__$1 = state_25797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25797__$1,(11),out,inst_25777);
} else {
if((state_val_25798 === (5))){
var inst_25791 = cljs.core.async.close_BANG_(out);
var state_25797__$1 = state_25797;
var statearr_25824_28399 = state_25797__$1;
(statearr_25824_28399[(2)] = inst_25791);

(statearr_25824_28399[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (10))){
var inst_25789 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25825_28401 = state_25797__$1;
(statearr_25825_28401[(2)] = inst_25789);

(statearr_25825_28401[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (8))){
var inst_25777 = (state_25797[(7)]);
var inst_25767 = (state_25797[(10)]);
var inst_25778 = (state_25797[(9)]);
var inst_25776 = (state_25797[(8)]);
var inst_25781 = (function (){var cs = inst_25767;
var vec__25772 = inst_25776;
var v = inst_25777;
var c = inst_25778;
return (function (p1__25703_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25703_SHARP_);
});
})();
var inst_25782 = cljs.core.filterv(inst_25781,inst_25767);
var inst_25767__$1 = inst_25782;
var state_25797__$1 = (function (){var statearr_25826 = state_25797;
(statearr_25826[(10)] = inst_25767__$1);

return statearr_25826;
})();
var statearr_25827_28413 = state_25797__$1;
(statearr_25827_28413[(2)] = null);

(statearr_25827_28413[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__23198__auto__ = null;
var cljs$core$async$state_machine__23198__auto____0 = (function (){
var statearr_25828 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25828[(0)] = cljs$core$async$state_machine__23198__auto__);

(statearr_25828[(1)] = (1));

return statearr_25828;
});
var cljs$core$async$state_machine__23198__auto____1 = (function (state_25797){
while(true){
var ret_value__23199__auto__ = (function (){try{while(true){
var result__23200__auto__ = switch__23197__auto__(state_25797);
if(cljs.core.keyword_identical_QMARK_(result__23200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23200__auto__;
}
break;
}
}catch (e25829){var ex__23201__auto__ = e25829;
var statearr_25830_28415 = state_25797;
(statearr_25830_28415[(2)] = ex__23201__auto__);


if(cljs.core.seq((state_25797[(4)]))){
var statearr_25831_28416 = state_25797;
(statearr_25831_28416[(1)] = cljs.core.first((state_25797[(4)])));

} else {
throw ex__23201__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28417 = state_25797;
state_25797 = G__28417;
continue;
} else {
return ret_value__23199__auto__;
}
break;
}
});
cljs$core$async$state_machine__23198__auto__ = function(state_25797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23198__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23198__auto____1.call(this,state_25797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23198__auto____0;
cljs$core$async$state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23198__auto____1;
return cljs$core$async$state_machine__23198__auto__;
})()
})();
var state__23413__auto__ = (function (){var statearr_25832 = f__23412__auto__();
(statearr_25832[(6)] = c__23411__auto___28338);

return statearr_25832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23413__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25836 = arguments.length;
switch (G__25836) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23411__auto___28437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23412__auto__ = (function (){var switch__23197__auto__ = (function (state_25867){
var state_val_25868 = (state_25867[(1)]);
if((state_val_25868 === (7))){
var inst_25849 = (state_25867[(7)]);
var inst_25849__$1 = (state_25867[(2)]);
var inst_25850 = (inst_25849__$1 == null);
var inst_25851 = cljs.core.not(inst_25850);
var state_25867__$1 = (function (){var statearr_25871 = state_25867;
(statearr_25871[(7)] = inst_25849__$1);

return statearr_25871;
})();
if(inst_25851){
var statearr_25872_28438 = state_25867__$1;
(statearr_25872_28438[(1)] = (8));

} else {
var statearr_25873_28439 = state_25867__$1;
(statearr_25873_28439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (1))){
var inst_25840 = (0);
var state_25867__$1 = (function (){var statearr_25874 = state_25867;
(statearr_25874[(8)] = inst_25840);

return statearr_25874;
})();
var statearr_25875_28440 = state_25867__$1;
(statearr_25875_28440[(2)] = null);

(statearr_25875_28440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (4))){
var state_25867__$1 = state_25867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25867__$1,(7),ch);
} else {
if((state_val_25868 === (6))){
var inst_25862 = (state_25867[(2)]);
var state_25867__$1 = state_25867;
var statearr_25882_28442 = state_25867__$1;
(statearr_25882_28442[(2)] = inst_25862);

(statearr_25882_28442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (3))){
var inst_25864 = (state_25867[(2)]);
var inst_25865 = cljs.core.async.close_BANG_(out);
var state_25867__$1 = (function (){var statearr_25883 = state_25867;
(statearr_25883[(9)] = inst_25864);

return statearr_25883;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25867__$1,inst_25865);
} else {
if((state_val_25868 === (2))){
var inst_25840 = (state_25867[(8)]);
var inst_25842 = (inst_25840 < n);
var state_25867__$1 = state_25867;
if(cljs.core.truth_(inst_25842)){
var statearr_25897_28443 = state_25867__$1;
(statearr_25897_28443[(1)] = (4));

} else {
var statearr_25898_28444 = state_25867__$1;
(statearr_25898_28444[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (11))){
var inst_25840 = (state_25867[(8)]);
var inst_25854 = (state_25867[(2)]);
var inst_25855 = (inst_25840 + (1));
var inst_25840__$1 = inst_25855;
var state_25867__$1 = (function (){var statearr_25903 = state_25867;
(statearr_25903[(8)] = inst_25840__$1);

(statearr_25903[(10)] = inst_25854);

return statearr_25903;
})();
var statearr_25904_28446 = state_25867__$1;
(statearr_25904_28446[(2)] = null);

(statearr_25904_28446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (9))){
var state_25867__$1 = state_25867;
var statearr_25905_28447 = state_25867__$1;
(statearr_25905_28447[(2)] = null);

(statearr_25905_28447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (5))){
var state_25867__$1 = state_25867;
var statearr_25908_28449 = state_25867__$1;
(statearr_25908_28449[(2)] = null);

(statearr_25908_28449[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (10))){
var inst_25859 = (state_25867[(2)]);
var state_25867__$1 = state_25867;
var statearr_25911_28453 = state_25867__$1;
(statearr_25911_28453[(2)] = inst_25859);

(statearr_25911_28453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (8))){
var inst_25849 = (state_25867[(7)]);
var state_25867__$1 = state_25867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25867__$1,(11),out,inst_25849);
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
});
return (function() {
var cljs$core$async$state_machine__23198__auto__ = null;
var cljs$core$async$state_machine__23198__auto____0 = (function (){
var statearr_25912 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25912[(0)] = cljs$core$async$state_machine__23198__auto__);

(statearr_25912[(1)] = (1));

return statearr_25912;
});
var cljs$core$async$state_machine__23198__auto____1 = (function (state_25867){
while(true){
var ret_value__23199__auto__ = (function (){try{while(true){
var result__23200__auto__ = switch__23197__auto__(state_25867);
if(cljs.core.keyword_identical_QMARK_(result__23200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23200__auto__;
}
break;
}
}catch (e25913){var ex__23201__auto__ = e25913;
var statearr_25914_28457 = state_25867;
(statearr_25914_28457[(2)] = ex__23201__auto__);


if(cljs.core.seq((state_25867[(4)]))){
var statearr_25915_28458 = state_25867;
(statearr_25915_28458[(1)] = cljs.core.first((state_25867[(4)])));

} else {
throw ex__23201__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28459 = state_25867;
state_25867 = G__28459;
continue;
} else {
return ret_value__23199__auto__;
}
break;
}
});
cljs$core$async$state_machine__23198__auto__ = function(state_25867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23198__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23198__auto____1.call(this,state_25867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23198__auto____0;
cljs$core$async$state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23198__auto____1;
return cljs$core$async$state_machine__23198__auto__;
})()
})();
var state__23413__auto__ = (function (){var statearr_25917 = f__23412__auto__();
(statearr_25917[(6)] = c__23411__auto___28437);

return statearr_25917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23413__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25920 = (function (f,ch,meta25921){
this.f = f;
this.ch = ch;
this.meta25921 = meta25921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25922,meta25921__$1){
var self__ = this;
var _25922__$1 = this;
return (new cljs.core.async.t_cljs$core$async25920(self__.f,self__.ch,meta25921__$1));
}));

(cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25922){
var self__ = this;
var _25922__$1 = this;
return self__.meta25921;
}));

(cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25938 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25938 = (function (f,ch,meta25921,_,fn1,meta25939){
this.f = f;
this.ch = ch;
this.meta25921 = meta25921;
this._ = _;
this.fn1 = fn1;
this.meta25939 = meta25939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25940,meta25939__$1){
var self__ = this;
var _25940__$1 = this;
return (new cljs.core.async.t_cljs$core$async25938(self__.f,self__.ch,self__.meta25921,self__._,self__.fn1,meta25939__$1));
}));

(cljs.core.async.t_cljs$core$async25938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25940){
var self__ = this;
var _25940__$1 = this;
return self__.meta25939;
}));

(cljs.core.async.t_cljs$core$async25938.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25938.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async25938.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25938.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__25919_SHARP_){
var G__25953 = (((p1__25919_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__25919_SHARP_) : self__.f.call(null,p1__25919_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__25953) : f1.call(null,G__25953));
});
}));

(cljs.core.async.t_cljs$core$async25938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25921","meta25921",401644249,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25920","cljs.core.async/t_cljs$core$async25920",-596710222,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25939","meta25939",1421855064,null)], null);
}));

(cljs.core.async.t_cljs$core$async25938.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25938");

(cljs.core.async.t_cljs$core$async25938.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25938");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25938.
 */
cljs.core.async.__GT_t_cljs$core$async25938 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25938(f__$1,ch__$1,meta25921__$1,___$2,fn1__$1,meta25939){
return (new cljs.core.async.t_cljs$core$async25938(f__$1,ch__$1,meta25921__$1,___$2,fn1__$1,meta25939));
});

}

return (new cljs.core.async.t_cljs$core$async25938(self__.f,self__.ch,self__.meta25921,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__25957 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25957) : self__.f.call(null,G__25957));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async25920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25921","meta25921",401644249,null)], null);
}));

(cljs.core.async.t_cljs$core$async25920.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25920");

(cljs.core.async.t_cljs$core$async25920.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25920");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25920.
 */
cljs.core.async.__GT_t_cljs$core$async25920 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25920(f__$1,ch__$1,meta25921){
return (new cljs.core.async.t_cljs$core$async25920(f__$1,ch__$1,meta25921));
});

}

return (new cljs.core.async.t_cljs$core$async25920(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25963 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25963 = (function (f,ch,meta25964){
this.f = f;
this.ch = ch;
this.meta25964 = meta25964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25965,meta25964__$1){
var self__ = this;
var _25965__$1 = this;
return (new cljs.core.async.t_cljs$core$async25963(self__.f,self__.ch,meta25964__$1));
}));

(cljs.core.async.t_cljs$core$async25963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25965){
var self__ = this;
var _25965__$1 = this;
return self__.meta25964;
}));

(cljs.core.async.t_cljs$core$async25963.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25963.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async25963.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25963.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25963.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25963.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async25963.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25964","meta25964",890980822,null)], null);
}));

(cljs.core.async.t_cljs$core$async25963.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25963.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25963");

(cljs.core.async.t_cljs$core$async25963.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25963");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25963.
 */
cljs.core.async.__GT_t_cljs$core$async25963 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25963(f__$1,ch__$1,meta25964){
return (new cljs.core.async.t_cljs$core$async25963(f__$1,ch__$1,meta25964));
});

}

return (new cljs.core.async.t_cljs$core$async25963(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25986 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25986 = (function (p,ch,meta25987){
this.p = p;
this.ch = ch;
this.meta25987 = meta25987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25988,meta25987__$1){
var self__ = this;
var _25988__$1 = this;
return (new cljs.core.async.t_cljs$core$async25986(self__.p,self__.ch,meta25987__$1));
}));

(cljs.core.async.t_cljs$core$async25986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25988){
var self__ = this;
var _25988__$1 = this;
return self__.meta25987;
}));

(cljs.core.async.t_cljs$core$async25986.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25986.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async25986.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async25986.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25986.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25986.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25986.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async25986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25987","meta25987",1463642392,null)], null);
}));

(cljs.core.async.t_cljs$core$async25986.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25986.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25986");

(cljs.core.async.t_cljs$core$async25986.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25986");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25986.
 */
cljs.core.async.__GT_t_cljs$core$async25986 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25986(p__$1,ch__$1,meta25987){
return (new cljs.core.async.t_cljs$core$async25986(p__$1,ch__$1,meta25987));
});

}

return (new cljs.core.async.t_cljs$core$async25986(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25998 = arguments.length;
switch (G__25998) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23411__auto___28502 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23412__auto__ = (function (){var switch__23197__auto__ = (function (state_26021){
var state_val_26022 = (state_26021[(1)]);
if((state_val_26022 === (7))){
var inst_26017 = (state_26021[(2)]);
var state_26021__$1 = state_26021;
var statearr_26026_28505 = state_26021__$1;
(statearr_26026_28505[(2)] = inst_26017);

(statearr_26026_28505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26022 === (1))){
var state_26021__$1 = state_26021;
var statearr_26027_28506 = state_26021__$1;
(statearr_26027_28506[(2)] = null);

(statearr_26027_28506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26022 === (4))){
var inst_26003 = (state_26021[(7)]);
var inst_26003__$1 = (state_26021[(2)]);
var inst_26004 = (inst_26003__$1 == null);
var state_26021__$1 = (function (){var statearr_26028 = state_26021;
(statearr_26028[(7)] = inst_26003__$1);

return statearr_26028;
})();
if(cljs.core.truth_(inst_26004)){
var statearr_26029_28508 = state_26021__$1;
(statearr_26029_28508[(1)] = (5));

} else {
var statearr_26033_28509 = state_26021__$1;
(statearr_26033_28509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26022 === (6))){
var inst_26003 = (state_26021[(7)]);
var inst_26008 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_26003) : p.call(null,inst_26003));
var state_26021__$1 = state_26021;
if(cljs.core.truth_(inst_26008)){
var statearr_26034_28513 = state_26021__$1;
(statearr_26034_28513[(1)] = (8));

} else {
var statearr_26035_28516 = state_26021__$1;
(statearr_26035_28516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26022 === (3))){
var inst_26019 = (state_26021[(2)]);
var state_26021__$1 = state_26021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26021__$1,inst_26019);
} else {
if((state_val_26022 === (2))){
var state_26021__$1 = state_26021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26021__$1,(4),ch);
} else {
if((state_val_26022 === (11))){
var inst_26011 = (state_26021[(2)]);
var state_26021__$1 = state_26021;
var statearr_26052_28519 = state_26021__$1;
(statearr_26052_28519[(2)] = inst_26011);

(statearr_26052_28519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26022 === (9))){
var state_26021__$1 = state_26021;
var statearr_26053_28520 = state_26021__$1;
(statearr_26053_28520[(2)] = null);

(statearr_26053_28520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26022 === (5))){
var inst_26006 = cljs.core.async.close_BANG_(out);
var state_26021__$1 = state_26021;
var statearr_26057_28523 = state_26021__$1;
(statearr_26057_28523[(2)] = inst_26006);

(statearr_26057_28523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26022 === (10))){
var inst_26014 = (state_26021[(2)]);
var state_26021__$1 = (function (){var statearr_26058 = state_26021;
(statearr_26058[(8)] = inst_26014);

return statearr_26058;
})();
var statearr_26059_28524 = state_26021__$1;
(statearr_26059_28524[(2)] = null);

(statearr_26059_28524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26022 === (8))){
var inst_26003 = (state_26021[(7)]);
var state_26021__$1 = state_26021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26021__$1,(11),out,inst_26003);
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
});
return (function() {
var cljs$core$async$state_machine__23198__auto__ = null;
var cljs$core$async$state_machine__23198__auto____0 = (function (){
var statearr_26063 = [null,null,null,null,null,null,null,null,null];
(statearr_26063[(0)] = cljs$core$async$state_machine__23198__auto__);

(statearr_26063[(1)] = (1));

return statearr_26063;
});
var cljs$core$async$state_machine__23198__auto____1 = (function (state_26021){
while(true){
var ret_value__23199__auto__ = (function (){try{while(true){
var result__23200__auto__ = switch__23197__auto__(state_26021);
if(cljs.core.keyword_identical_QMARK_(result__23200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23200__auto__;
}
break;
}
}catch (e26065){var ex__23201__auto__ = e26065;
var statearr_26066_28525 = state_26021;
(statearr_26066_28525[(2)] = ex__23201__auto__);


if(cljs.core.seq((state_26021[(4)]))){
var statearr_26067_28527 = state_26021;
(statearr_26067_28527[(1)] = cljs.core.first((state_26021[(4)])));

} else {
throw ex__23201__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28528 = state_26021;
state_26021 = G__28528;
continue;
} else {
return ret_value__23199__auto__;
}
break;
}
});
cljs$core$async$state_machine__23198__auto__ = function(state_26021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23198__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23198__auto____1.call(this,state_26021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23198__auto____0;
cljs$core$async$state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23198__auto____1;
return cljs$core$async$state_machine__23198__auto__;
})()
})();
var state__23413__auto__ = (function (){var statearr_26068 = f__23412__auto__();
(statearr_26068[(6)] = c__23411__auto___28502);

return statearr_26068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23413__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26070 = arguments.length;
switch (G__26070) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23411__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23412__auto__ = (function (){var switch__23197__auto__ = (function (state_26142){
var state_val_26143 = (state_26142[(1)]);
if((state_val_26143 === (7))){
var inst_26138 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
var statearr_26185_28533 = state_26142__$1;
(statearr_26185_28533[(2)] = inst_26138);

(statearr_26185_28533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (20))){
var inst_26108 = (state_26142[(7)]);
var inst_26119 = (state_26142[(2)]);
var inst_26120 = cljs.core.next(inst_26108);
var inst_26092 = inst_26120;
var inst_26093 = null;
var inst_26094 = (0);
var inst_26095 = (0);
var state_26142__$1 = (function (){var statearr_26191 = state_26142;
(statearr_26191[(8)] = inst_26095);

(statearr_26191[(9)] = inst_26094);

(statearr_26191[(10)] = inst_26093);

(statearr_26191[(11)] = inst_26092);

(statearr_26191[(12)] = inst_26119);

return statearr_26191;
})();
var statearr_26195_28537 = state_26142__$1;
(statearr_26195_28537[(2)] = null);

(statearr_26195_28537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (1))){
var state_26142__$1 = state_26142;
var statearr_26196_28538 = state_26142__$1;
(statearr_26196_28538[(2)] = null);

(statearr_26196_28538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (4))){
var inst_26081 = (state_26142[(13)]);
var inst_26081__$1 = (state_26142[(2)]);
var inst_26082 = (inst_26081__$1 == null);
var state_26142__$1 = (function (){var statearr_26200 = state_26142;
(statearr_26200[(13)] = inst_26081__$1);

return statearr_26200;
})();
if(cljs.core.truth_(inst_26082)){
var statearr_26201_28539 = state_26142__$1;
(statearr_26201_28539[(1)] = (5));

} else {
var statearr_26202_28540 = state_26142__$1;
(statearr_26202_28540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (15))){
var state_26142__$1 = state_26142;
var statearr_26206_28541 = state_26142__$1;
(statearr_26206_28541[(2)] = null);

(statearr_26206_28541[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (21))){
var state_26142__$1 = state_26142;
var statearr_26210_28546 = state_26142__$1;
(statearr_26210_28546[(2)] = null);

(statearr_26210_28546[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (13))){
var inst_26095 = (state_26142[(8)]);
var inst_26094 = (state_26142[(9)]);
var inst_26093 = (state_26142[(10)]);
var inst_26092 = (state_26142[(11)]);
var inst_26104 = (state_26142[(2)]);
var inst_26105 = (inst_26095 + (1));
var tmp26203 = inst_26094;
var tmp26204 = inst_26093;
var tmp26205 = inst_26092;
var inst_26092__$1 = tmp26205;
var inst_26093__$1 = tmp26204;
var inst_26094__$1 = tmp26203;
var inst_26095__$1 = inst_26105;
var state_26142__$1 = (function (){var statearr_26218 = state_26142;
(statearr_26218[(8)] = inst_26095__$1);

(statearr_26218[(9)] = inst_26094__$1);

(statearr_26218[(14)] = inst_26104);

(statearr_26218[(10)] = inst_26093__$1);

(statearr_26218[(11)] = inst_26092__$1);

return statearr_26218;
})();
var statearr_26219_28557 = state_26142__$1;
(statearr_26219_28557[(2)] = null);

(statearr_26219_28557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (22))){
var state_26142__$1 = state_26142;
var statearr_26220_28558 = state_26142__$1;
(statearr_26220_28558[(2)] = null);

(statearr_26220_28558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (6))){
var inst_26081 = (state_26142[(13)]);
var inst_26090 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26081) : f.call(null,inst_26081));
var inst_26091 = cljs.core.seq(inst_26090);
var inst_26092 = inst_26091;
var inst_26093 = null;
var inst_26094 = (0);
var inst_26095 = (0);
var state_26142__$1 = (function (){var statearr_26224 = state_26142;
(statearr_26224[(8)] = inst_26095);

(statearr_26224[(9)] = inst_26094);

(statearr_26224[(10)] = inst_26093);

(statearr_26224[(11)] = inst_26092);

return statearr_26224;
})();
var statearr_26228_28559 = state_26142__$1;
(statearr_26228_28559[(2)] = null);

(statearr_26228_28559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (17))){
var inst_26108 = (state_26142[(7)]);
var inst_26112 = cljs.core.chunk_first(inst_26108);
var inst_26113 = cljs.core.chunk_rest(inst_26108);
var inst_26114 = cljs.core.count(inst_26112);
var inst_26092 = inst_26113;
var inst_26093 = inst_26112;
var inst_26094 = inst_26114;
var inst_26095 = (0);
var state_26142__$1 = (function (){var statearr_26255 = state_26142;
(statearr_26255[(8)] = inst_26095);

(statearr_26255[(9)] = inst_26094);

(statearr_26255[(10)] = inst_26093);

(statearr_26255[(11)] = inst_26092);

return statearr_26255;
})();
var statearr_26256_28560 = state_26142__$1;
(statearr_26256_28560[(2)] = null);

(statearr_26256_28560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (3))){
var inst_26140 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26142__$1,inst_26140);
} else {
if((state_val_26143 === (12))){
var inst_26128 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
var statearr_26263_28561 = state_26142__$1;
(statearr_26263_28561[(2)] = inst_26128);

(statearr_26263_28561[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (2))){
var state_26142__$1 = state_26142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26142__$1,(4),in$);
} else {
if((state_val_26143 === (23))){
var inst_26136 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
var statearr_26264_28564 = state_26142__$1;
(statearr_26264_28564[(2)] = inst_26136);

(statearr_26264_28564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (19))){
var inst_26123 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
var statearr_26265_28565 = state_26142__$1;
(statearr_26265_28565[(2)] = inst_26123);

(statearr_26265_28565[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (11))){
var inst_26092 = (state_26142[(11)]);
var inst_26108 = (state_26142[(7)]);
var inst_26108__$1 = cljs.core.seq(inst_26092);
var state_26142__$1 = (function (){var statearr_26269 = state_26142;
(statearr_26269[(7)] = inst_26108__$1);

return statearr_26269;
})();
if(inst_26108__$1){
var statearr_26270_28568 = state_26142__$1;
(statearr_26270_28568[(1)] = (14));

} else {
var statearr_26271_28569 = state_26142__$1;
(statearr_26271_28569[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (9))){
var inst_26130 = (state_26142[(2)]);
var inst_26131 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26142__$1 = (function (){var statearr_26273 = state_26142;
(statearr_26273[(15)] = inst_26130);

return statearr_26273;
})();
if(cljs.core.truth_(inst_26131)){
var statearr_26274_28570 = state_26142__$1;
(statearr_26274_28570[(1)] = (21));

} else {
var statearr_26275_28575 = state_26142__$1;
(statearr_26275_28575[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (5))){
var inst_26084 = cljs.core.async.close_BANG_(out);
var state_26142__$1 = state_26142;
var statearr_26276_28576 = state_26142__$1;
(statearr_26276_28576[(2)] = inst_26084);

(statearr_26276_28576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (14))){
var inst_26108 = (state_26142[(7)]);
var inst_26110 = cljs.core.chunked_seq_QMARK_(inst_26108);
var state_26142__$1 = state_26142;
if(inst_26110){
var statearr_26281_28577 = state_26142__$1;
(statearr_26281_28577[(1)] = (17));

} else {
var statearr_26282_28578 = state_26142__$1;
(statearr_26282_28578[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (16))){
var inst_26126 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
var statearr_26283_28579 = state_26142__$1;
(statearr_26283_28579[(2)] = inst_26126);

(statearr_26283_28579[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (10))){
var inst_26095 = (state_26142[(8)]);
var inst_26093 = (state_26142[(10)]);
var inst_26102 = cljs.core._nth(inst_26093,inst_26095);
var state_26142__$1 = state_26142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26142__$1,(13),out,inst_26102);
} else {
if((state_val_26143 === (18))){
var inst_26108 = (state_26142[(7)]);
var inst_26117 = cljs.core.first(inst_26108);
var state_26142__$1 = state_26142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26142__$1,(20),out,inst_26117);
} else {
if((state_val_26143 === (8))){
var inst_26095 = (state_26142[(8)]);
var inst_26094 = (state_26142[(9)]);
var inst_26097 = (inst_26095 < inst_26094);
var inst_26098 = inst_26097;
var state_26142__$1 = state_26142;
if(cljs.core.truth_(inst_26098)){
var statearr_26284_28581 = state_26142__$1;
(statearr_26284_28581[(1)] = (10));

} else {
var statearr_26309_28582 = state_26142__$1;
(statearr_26309_28582[(1)] = (11));

}

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
var cljs$core$async$mapcat_STAR__$_state_machine__23198__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23198__auto____0 = (function (){
var statearr_26312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26312[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23198__auto__);

(statearr_26312[(1)] = (1));

return statearr_26312;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23198__auto____1 = (function (state_26142){
while(true){
var ret_value__23199__auto__ = (function (){try{while(true){
var result__23200__auto__ = switch__23197__auto__(state_26142);
if(cljs.core.keyword_identical_QMARK_(result__23200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23200__auto__;
}
break;
}
}catch (e26313){var ex__23201__auto__ = e26313;
var statearr_26314_28594 = state_26142;
(statearr_26314_28594[(2)] = ex__23201__auto__);


if(cljs.core.seq((state_26142[(4)]))){
var statearr_26315_28597 = state_26142;
(statearr_26315_28597[(1)] = cljs.core.first((state_26142[(4)])));

} else {
throw ex__23201__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28612 = state_26142;
state_26142 = G__28612;
continue;
} else {
return ret_value__23199__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23198__auto__ = function(state_26142){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23198__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23198__auto____1.call(this,state_26142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23198__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23198__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23198__auto__;
})()
})();
var state__23413__auto__ = (function (){var statearr_26316 = f__23412__auto__();
(statearr_26316[(6)] = c__23411__auto__);

return statearr_26316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23413__auto__);
}));

return c__23411__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26319 = arguments.length;
switch (G__26319) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26323 = arguments.length;
switch (G__26323) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26367 = arguments.length;
switch (G__26367) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23411__auto___28634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23412__auto__ = (function (){var switch__23197__auto__ = (function (state_26396){
var state_val_26397 = (state_26396[(1)]);
if((state_val_26397 === (7))){
var inst_26391 = (state_26396[(2)]);
var state_26396__$1 = state_26396;
var statearr_26401_28638 = state_26396__$1;
(statearr_26401_28638[(2)] = inst_26391);

(statearr_26401_28638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26397 === (1))){
var inst_26373 = null;
var state_26396__$1 = (function (){var statearr_26402 = state_26396;
(statearr_26402[(7)] = inst_26373);

return statearr_26402;
})();
var statearr_26403_28640 = state_26396__$1;
(statearr_26403_28640[(2)] = null);

(statearr_26403_28640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26397 === (4))){
var inst_26376 = (state_26396[(8)]);
var inst_26376__$1 = (state_26396[(2)]);
var inst_26377 = (inst_26376__$1 == null);
var inst_26378 = cljs.core.not(inst_26377);
var state_26396__$1 = (function (){var statearr_26416 = state_26396;
(statearr_26416[(8)] = inst_26376__$1);

return statearr_26416;
})();
if(inst_26378){
var statearr_26417_28645 = state_26396__$1;
(statearr_26417_28645[(1)] = (5));

} else {
var statearr_26421_28648 = state_26396__$1;
(statearr_26421_28648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26397 === (6))){
var state_26396__$1 = state_26396;
var statearr_26422_28656 = state_26396__$1;
(statearr_26422_28656[(2)] = null);

(statearr_26422_28656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26397 === (3))){
var inst_26393 = (state_26396[(2)]);
var inst_26394 = cljs.core.async.close_BANG_(out);
var state_26396__$1 = (function (){var statearr_26427 = state_26396;
(statearr_26427[(9)] = inst_26393);

return statearr_26427;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26396__$1,inst_26394);
} else {
if((state_val_26397 === (2))){
var state_26396__$1 = state_26396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26396__$1,(4),ch);
} else {
if((state_val_26397 === (11))){
var inst_26376 = (state_26396[(8)]);
var inst_26385 = (state_26396[(2)]);
var inst_26373 = inst_26376;
var state_26396__$1 = (function (){var statearr_26436 = state_26396;
(statearr_26436[(7)] = inst_26373);

(statearr_26436[(10)] = inst_26385);

return statearr_26436;
})();
var statearr_26437_28681 = state_26396__$1;
(statearr_26437_28681[(2)] = null);

(statearr_26437_28681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26397 === (9))){
var inst_26376 = (state_26396[(8)]);
var state_26396__$1 = state_26396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26396__$1,(11),out,inst_26376);
} else {
if((state_val_26397 === (5))){
var inst_26373 = (state_26396[(7)]);
var inst_26376 = (state_26396[(8)]);
var inst_26380 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26376,inst_26373);
var state_26396__$1 = state_26396;
if(inst_26380){
var statearr_26442_28687 = state_26396__$1;
(statearr_26442_28687[(1)] = (8));

} else {
var statearr_26443_28691 = state_26396__$1;
(statearr_26443_28691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26397 === (10))){
var inst_26388 = (state_26396[(2)]);
var state_26396__$1 = state_26396;
var statearr_26447_28692 = state_26396__$1;
(statearr_26447_28692[(2)] = inst_26388);

(statearr_26447_28692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26397 === (8))){
var inst_26373 = (state_26396[(7)]);
var tmp26441 = inst_26373;
var inst_26373__$1 = tmp26441;
var state_26396__$1 = (function (){var statearr_26448 = state_26396;
(statearr_26448[(7)] = inst_26373__$1);

return statearr_26448;
})();
var statearr_26449_28695 = state_26396__$1;
(statearr_26449_28695[(2)] = null);

(statearr_26449_28695[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__23198__auto__ = null;
var cljs$core$async$state_machine__23198__auto____0 = (function (){
var statearr_26450 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26450[(0)] = cljs$core$async$state_machine__23198__auto__);

(statearr_26450[(1)] = (1));

return statearr_26450;
});
var cljs$core$async$state_machine__23198__auto____1 = (function (state_26396){
while(true){
var ret_value__23199__auto__ = (function (){try{while(true){
var result__23200__auto__ = switch__23197__auto__(state_26396);
if(cljs.core.keyword_identical_QMARK_(result__23200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23200__auto__;
}
break;
}
}catch (e26451){var ex__23201__auto__ = e26451;
var statearr_26452_28705 = state_26396;
(statearr_26452_28705[(2)] = ex__23201__auto__);


if(cljs.core.seq((state_26396[(4)]))){
var statearr_26453_28706 = state_26396;
(statearr_26453_28706[(1)] = cljs.core.first((state_26396[(4)])));

} else {
throw ex__23201__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28709 = state_26396;
state_26396 = G__28709;
continue;
} else {
return ret_value__23199__auto__;
}
break;
}
});
cljs$core$async$state_machine__23198__auto__ = function(state_26396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23198__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23198__auto____1.call(this,state_26396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23198__auto____0;
cljs$core$async$state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23198__auto____1;
return cljs$core$async$state_machine__23198__auto__;
})()
})();
var state__23413__auto__ = (function (){var statearr_26456 = f__23412__auto__();
(statearr_26456[(6)] = c__23411__auto___28634);

return statearr_26456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23413__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26470 = arguments.length;
switch (G__26470) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23411__auto___28744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23412__auto__ = (function (){var switch__23197__auto__ = (function (state_26518){
var state_val_26519 = (state_26518[(1)]);
if((state_val_26519 === (7))){
var inst_26514 = (state_26518[(2)]);
var state_26518__$1 = state_26518;
var statearr_26523_28760 = state_26518__$1;
(statearr_26523_28760[(2)] = inst_26514);

(statearr_26523_28760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (1))){
var inst_26477 = (new Array(n));
var inst_26478 = inst_26477;
var inst_26479 = (0);
var state_26518__$1 = (function (){var statearr_26530 = state_26518;
(statearr_26530[(7)] = inst_26479);

(statearr_26530[(8)] = inst_26478);

return statearr_26530;
})();
var statearr_26531_28776 = state_26518__$1;
(statearr_26531_28776[(2)] = null);

(statearr_26531_28776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (4))){
var inst_26483 = (state_26518[(9)]);
var inst_26483__$1 = (state_26518[(2)]);
var inst_26484 = (inst_26483__$1 == null);
var inst_26485 = cljs.core.not(inst_26484);
var state_26518__$1 = (function (){var statearr_26543 = state_26518;
(statearr_26543[(9)] = inst_26483__$1);

return statearr_26543;
})();
if(inst_26485){
var statearr_26548_28798 = state_26518__$1;
(statearr_26548_28798[(1)] = (5));

} else {
var statearr_26549_28800 = state_26518__$1;
(statearr_26549_28800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (15))){
var inst_26508 = (state_26518[(2)]);
var state_26518__$1 = state_26518;
var statearr_26551_28801 = state_26518__$1;
(statearr_26551_28801[(2)] = inst_26508);

(statearr_26551_28801[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (13))){
var state_26518__$1 = state_26518;
var statearr_26567_28807 = state_26518__$1;
(statearr_26567_28807[(2)] = null);

(statearr_26567_28807[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (6))){
var inst_26479 = (state_26518[(7)]);
var inst_26504 = (inst_26479 > (0));
var state_26518__$1 = state_26518;
if(cljs.core.truth_(inst_26504)){
var statearr_26571_28810 = state_26518__$1;
(statearr_26571_28810[(1)] = (12));

} else {
var statearr_26572_28812 = state_26518__$1;
(statearr_26572_28812[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (3))){
var inst_26516 = (state_26518[(2)]);
var state_26518__$1 = state_26518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26518__$1,inst_26516);
} else {
if((state_val_26519 === (12))){
var inst_26478 = (state_26518[(8)]);
var inst_26506 = cljs.core.vec(inst_26478);
var state_26518__$1 = state_26518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26518__$1,(15),out,inst_26506);
} else {
if((state_val_26519 === (2))){
var state_26518__$1 = state_26518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26518__$1,(4),ch);
} else {
if((state_val_26519 === (11))){
var inst_26498 = (state_26518[(2)]);
var inst_26499 = (new Array(n));
var inst_26478 = inst_26499;
var inst_26479 = (0);
var state_26518__$1 = (function (){var statearr_26579 = state_26518;
(statearr_26579[(7)] = inst_26479);

(statearr_26579[(8)] = inst_26478);

(statearr_26579[(10)] = inst_26498);

return statearr_26579;
})();
var statearr_26580_28822 = state_26518__$1;
(statearr_26580_28822[(2)] = null);

(statearr_26580_28822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (9))){
var inst_26478 = (state_26518[(8)]);
var inst_26496 = cljs.core.vec(inst_26478);
var state_26518__$1 = state_26518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26518__$1,(11),out,inst_26496);
} else {
if((state_val_26519 === (5))){
var inst_26479 = (state_26518[(7)]);
var inst_26483 = (state_26518[(9)]);
var inst_26478 = (state_26518[(8)]);
var inst_26491 = (state_26518[(11)]);
var inst_26490 = (inst_26478[inst_26479] = inst_26483);
var inst_26491__$1 = (inst_26479 + (1));
var inst_26492 = (inst_26491__$1 < n);
var state_26518__$1 = (function (){var statearr_26591 = state_26518;
(statearr_26591[(11)] = inst_26491__$1);

(statearr_26591[(12)] = inst_26490);

return statearr_26591;
})();
if(cljs.core.truth_(inst_26492)){
var statearr_26592_28826 = state_26518__$1;
(statearr_26592_28826[(1)] = (8));

} else {
var statearr_26593_28827 = state_26518__$1;
(statearr_26593_28827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (14))){
var inst_26511 = (state_26518[(2)]);
var inst_26512 = cljs.core.async.close_BANG_(out);
var state_26518__$1 = (function (){var statearr_26595 = state_26518;
(statearr_26595[(13)] = inst_26511);

return statearr_26595;
})();
var statearr_26596_28829 = state_26518__$1;
(statearr_26596_28829[(2)] = inst_26512);

(statearr_26596_28829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (10))){
var inst_26502 = (state_26518[(2)]);
var state_26518__$1 = state_26518;
var statearr_26597_28830 = state_26518__$1;
(statearr_26597_28830[(2)] = inst_26502);

(statearr_26597_28830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (8))){
var inst_26478 = (state_26518[(8)]);
var inst_26491 = (state_26518[(11)]);
var tmp26594 = inst_26478;
var inst_26478__$1 = tmp26594;
var inst_26479 = inst_26491;
var state_26518__$1 = (function (){var statearr_26600 = state_26518;
(statearr_26600[(7)] = inst_26479);

(statearr_26600[(8)] = inst_26478__$1);

return statearr_26600;
})();
var statearr_26601_28835 = state_26518__$1;
(statearr_26601_28835[(2)] = null);

(statearr_26601_28835[(1)] = (2));


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
}
}
});
return (function() {
var cljs$core$async$state_machine__23198__auto__ = null;
var cljs$core$async$state_machine__23198__auto____0 = (function (){
var statearr_26602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26602[(0)] = cljs$core$async$state_machine__23198__auto__);

(statearr_26602[(1)] = (1));

return statearr_26602;
});
var cljs$core$async$state_machine__23198__auto____1 = (function (state_26518){
while(true){
var ret_value__23199__auto__ = (function (){try{while(true){
var result__23200__auto__ = switch__23197__auto__(state_26518);
if(cljs.core.keyword_identical_QMARK_(result__23200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23200__auto__;
}
break;
}
}catch (e26604){var ex__23201__auto__ = e26604;
var statearr_26605_28842 = state_26518;
(statearr_26605_28842[(2)] = ex__23201__auto__);


if(cljs.core.seq((state_26518[(4)]))){
var statearr_26613_28849 = state_26518;
(statearr_26613_28849[(1)] = cljs.core.first((state_26518[(4)])));

} else {
throw ex__23201__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28854 = state_26518;
state_26518 = G__28854;
continue;
} else {
return ret_value__23199__auto__;
}
break;
}
});
cljs$core$async$state_machine__23198__auto__ = function(state_26518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23198__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23198__auto____1.call(this,state_26518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23198__auto____0;
cljs$core$async$state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23198__auto____1;
return cljs$core$async$state_machine__23198__auto__;
})()
})();
var state__23413__auto__ = (function (){var statearr_26614 = f__23412__auto__();
(statearr_26614[(6)] = c__23411__auto___28744);

return statearr_26614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23413__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26619 = arguments.length;
switch (G__26619) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23411__auto___28863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23412__auto__ = (function (){var switch__23197__auto__ = (function (state_26676){
var state_val_26677 = (state_26676[(1)]);
if((state_val_26677 === (7))){
var inst_26672 = (state_26676[(2)]);
var state_26676__$1 = state_26676;
var statearr_26691_28865 = state_26676__$1;
(statearr_26691_28865[(2)] = inst_26672);

(statearr_26691_28865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26677 === (1))){
var inst_26624 = [];
var inst_26625 = inst_26624;
var inst_26626 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26676__$1 = (function (){var statearr_26692 = state_26676;
(statearr_26692[(7)] = inst_26626);

(statearr_26692[(8)] = inst_26625);

return statearr_26692;
})();
var statearr_26700_28868 = state_26676__$1;
(statearr_26700_28868[(2)] = null);

(statearr_26700_28868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26677 === (4))){
var inst_26629 = (state_26676[(9)]);
var inst_26629__$1 = (state_26676[(2)]);
var inst_26630 = (inst_26629__$1 == null);
var inst_26631 = cljs.core.not(inst_26630);
var state_26676__$1 = (function (){var statearr_26708 = state_26676;
(statearr_26708[(9)] = inst_26629__$1);

return statearr_26708;
})();
if(inst_26631){
var statearr_26709_28879 = state_26676__$1;
(statearr_26709_28879[(1)] = (5));

} else {
var statearr_26710_28880 = state_26676__$1;
(statearr_26710_28880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26677 === (15))){
var inst_26666 = (state_26676[(2)]);
var state_26676__$1 = state_26676;
var statearr_26712_28883 = state_26676__$1;
(statearr_26712_28883[(2)] = inst_26666);

(statearr_26712_28883[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26677 === (13))){
var state_26676__$1 = state_26676;
var statearr_26714_28886 = state_26676__$1;
(statearr_26714_28886[(2)] = null);

(statearr_26714_28886[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26677 === (6))){
var inst_26625 = (state_26676[(8)]);
var inst_26661 = inst_26625.length;
var inst_26662 = (inst_26661 > (0));
var state_26676__$1 = state_26676;
if(cljs.core.truth_(inst_26662)){
var statearr_26715_28891 = state_26676__$1;
(statearr_26715_28891[(1)] = (12));

} else {
var statearr_26716_28892 = state_26676__$1;
(statearr_26716_28892[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26677 === (3))){
var inst_26674 = (state_26676[(2)]);
var state_26676__$1 = state_26676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26676__$1,inst_26674);
} else {
if((state_val_26677 === (12))){
var inst_26625 = (state_26676[(8)]);
var inst_26664 = cljs.core.vec(inst_26625);
var state_26676__$1 = state_26676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26676__$1,(15),out,inst_26664);
} else {
if((state_val_26677 === (2))){
var state_26676__$1 = state_26676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26676__$1,(4),ch);
} else {
if((state_val_26677 === (11))){
var inst_26637 = (state_26676[(10)]);
var inst_26629 = (state_26676[(9)]);
var inst_26651 = (state_26676[(2)]);
var inst_26655 = [];
var inst_26656 = inst_26655.push(inst_26629);
var inst_26625 = inst_26655;
var inst_26626 = inst_26637;
var state_26676__$1 = (function (){var statearr_26718 = state_26676;
(statearr_26718[(11)] = inst_26651);

(statearr_26718[(7)] = inst_26626);

(statearr_26718[(12)] = inst_26656);

(statearr_26718[(8)] = inst_26625);

return statearr_26718;
})();
var statearr_26719_28902 = state_26676__$1;
(statearr_26719_28902[(2)] = null);

(statearr_26719_28902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26677 === (9))){
var inst_26625 = (state_26676[(8)]);
var inst_26649 = cljs.core.vec(inst_26625);
var state_26676__$1 = state_26676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26676__$1,(11),out,inst_26649);
} else {
if((state_val_26677 === (5))){
var inst_26637 = (state_26676[(10)]);
var inst_26626 = (state_26676[(7)]);
var inst_26629 = (state_26676[(9)]);
var inst_26637__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26629) : f.call(null,inst_26629));
var inst_26642 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26637__$1,inst_26626);
var inst_26643 = cljs.core.keyword_identical_QMARK_(inst_26626,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26644 = ((inst_26642) || (inst_26643));
var state_26676__$1 = (function (){var statearr_26726 = state_26676;
(statearr_26726[(10)] = inst_26637__$1);

return statearr_26726;
})();
if(cljs.core.truth_(inst_26644)){
var statearr_26727_28905 = state_26676__$1;
(statearr_26727_28905[(1)] = (8));

} else {
var statearr_26728_28906 = state_26676__$1;
(statearr_26728_28906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26677 === (14))){
var inst_26669 = (state_26676[(2)]);
var inst_26670 = cljs.core.async.close_BANG_(out);
var state_26676__$1 = (function (){var statearr_26733 = state_26676;
(statearr_26733[(13)] = inst_26669);

return statearr_26733;
})();
var statearr_26734_28908 = state_26676__$1;
(statearr_26734_28908[(2)] = inst_26670);

(statearr_26734_28908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26677 === (10))){
var inst_26659 = (state_26676[(2)]);
var state_26676__$1 = state_26676;
var statearr_26763_28912 = state_26676__$1;
(statearr_26763_28912[(2)] = inst_26659);

(statearr_26763_28912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26677 === (8))){
var inst_26637 = (state_26676[(10)]);
var inst_26629 = (state_26676[(9)]);
var inst_26625 = (state_26676[(8)]);
var inst_26646 = inst_26625.push(inst_26629);
var tmp26729 = inst_26625;
var inst_26625__$1 = tmp26729;
var inst_26626 = inst_26637;
var state_26676__$1 = (function (){var statearr_26769 = state_26676;
(statearr_26769[(7)] = inst_26626);

(statearr_26769[(8)] = inst_26625__$1);

(statearr_26769[(14)] = inst_26646);

return statearr_26769;
})();
var statearr_26770_28924 = state_26676__$1;
(statearr_26770_28924[(2)] = null);

(statearr_26770_28924[(1)] = (2));


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
}
}
});
return (function() {
var cljs$core$async$state_machine__23198__auto__ = null;
var cljs$core$async$state_machine__23198__auto____0 = (function (){
var statearr_26774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26774[(0)] = cljs$core$async$state_machine__23198__auto__);

(statearr_26774[(1)] = (1));

return statearr_26774;
});
var cljs$core$async$state_machine__23198__auto____1 = (function (state_26676){
while(true){
var ret_value__23199__auto__ = (function (){try{while(true){
var result__23200__auto__ = switch__23197__auto__(state_26676);
if(cljs.core.keyword_identical_QMARK_(result__23200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23200__auto__;
}
break;
}
}catch (e26779){var ex__23201__auto__ = e26779;
var statearr_26783_28927 = state_26676;
(statearr_26783_28927[(2)] = ex__23201__auto__);


if(cljs.core.seq((state_26676[(4)]))){
var statearr_26784_28930 = state_26676;
(statearr_26784_28930[(1)] = cljs.core.first((state_26676[(4)])));

} else {
throw ex__23201__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28932 = state_26676;
state_26676 = G__28932;
continue;
} else {
return ret_value__23199__auto__;
}
break;
}
});
cljs$core$async$state_machine__23198__auto__ = function(state_26676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23198__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23198__auto____1.call(this,state_26676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23198__auto____0;
cljs$core$async$state_machine__23198__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23198__auto____1;
return cljs$core$async$state_machine__23198__auto__;
})()
})();
var state__23413__auto__ = (function (){var statearr_26785 = f__23412__auto__();
(statearr_26785[(6)] = c__23411__auto___28863);

return statearr_26785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23413__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
