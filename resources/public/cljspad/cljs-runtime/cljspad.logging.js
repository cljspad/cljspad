goog.provide('cljspad.logging');
if((typeof cljspad !== 'undefined') && (typeof cljspad.logging !== 'undefined') && (typeof cljspad.logging.stderr !== 'undefined')){
} else {
cljspad.logging.stderr = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
if((typeof cljspad !== 'undefined') && (typeof cljspad.logging !== 'undefined') && (typeof cljspad.logging.stdout !== 'undefined')){
} else {
cljspad.logging.stdout = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
cljspad.logging.init_BANG_ = (function cljspad$logging$init_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_((function() { 
var G__44957__delegate = function (args){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljspad.logging.stdout,args);
};
var G__44957 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44970__i = 0, G__44970__a = new Array(arguments.length -  0);
while (G__44970__i < G__44970__a.length) {G__44970__a[G__44970__i] = arguments[G__44970__i + 0]; ++G__44970__i;}
  args = new cljs.core.IndexedSeq(G__44970__a,0,null);
} 
return G__44957__delegate.call(this,args);};
G__44957.cljs$lang$maxFixedArity = 0;
G__44957.cljs$lang$applyTo = (function (arglist__44971){
var args = cljs.core.seq(arglist__44971);
return G__44957__delegate(args);
});
G__44957.cljs$core$IFn$_invoke$arity$variadic = G__44957__delegate;
return G__44957;
})()
);

return cljs.core.set_print_err_fn_BANG_((function() { 
var G__44972__delegate = function (args){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljspad.logging.stderr,args);
};
var G__44972 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44973__i = 0, G__44973__a = new Array(arguments.length -  0);
while (G__44973__i < G__44973__a.length) {G__44973__a[G__44973__i] = arguments[G__44973__i + 0]; ++G__44973__i;}
  args = new cljs.core.IndexedSeq(G__44973__a,0,null);
} 
return G__44972__delegate.call(this,args);};
G__44972.cljs$lang$maxFixedArity = 0;
G__44972.cljs$lang$applyTo = (function (arglist__44974){
var args = cljs.core.seq(arglist__44974);
return G__44972__delegate(args);
});
G__44972.cljs$core$IFn$_invoke$arity$variadic = G__44972__delegate;
return G__44972;
})()
);
});

//# sourceMappingURL=cljspad.logging.js.map
