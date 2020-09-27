goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45938){
var map__45939 = p__45938;
var map__45939__$1 = (((((!((map__45939 == null))))?(((((map__45939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45939):map__45939);
var m = map__45939__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45939__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45939__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45941_46042 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45942_46043 = null;
var count__45943_46044 = (0);
var i__45944_46045 = (0);
while(true){
if((i__45944_46045 < count__45943_46044)){
var f_46046 = chunk__45942_46043.cljs$core$IIndexed$_nth$arity$2(null,i__45944_46045);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46046], 0));


var G__46047 = seq__45941_46042;
var G__46048 = chunk__45942_46043;
var G__46049 = count__45943_46044;
var G__46050 = (i__45944_46045 + (1));
seq__45941_46042 = G__46047;
chunk__45942_46043 = G__46048;
count__45943_46044 = G__46049;
i__45944_46045 = G__46050;
continue;
} else {
var temp__5735__auto___46051 = cljs.core.seq(seq__45941_46042);
if(temp__5735__auto___46051){
var seq__45941_46052__$1 = temp__5735__auto___46051;
if(cljs.core.chunked_seq_QMARK_(seq__45941_46052__$1)){
var c__4556__auto___46053 = cljs.core.chunk_first(seq__45941_46052__$1);
var G__46054 = cljs.core.chunk_rest(seq__45941_46052__$1);
var G__46055 = c__4556__auto___46053;
var G__46056 = cljs.core.count(c__4556__auto___46053);
var G__46057 = (0);
seq__45941_46042 = G__46054;
chunk__45942_46043 = G__46055;
count__45943_46044 = G__46056;
i__45944_46045 = G__46057;
continue;
} else {
var f_46058 = cljs.core.first(seq__45941_46052__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46058], 0));


var G__46059 = cljs.core.next(seq__45941_46052__$1);
var G__46060 = null;
var G__46061 = (0);
var G__46062 = (0);
seq__45941_46042 = G__46059;
chunk__45942_46043 = G__46060;
count__45943_46044 = G__46061;
i__45944_46045 = G__46062;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46063 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_46063], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_46063)))?cljs.core.second(arglists_46063):arglists_46063)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45945_46064 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45946_46065 = null;
var count__45947_46066 = (0);
var i__45948_46067 = (0);
while(true){
if((i__45948_46067 < count__45947_46066)){
var vec__45959_46068 = chunk__45946_46065.cljs$core$IIndexed$_nth$arity$2(null,i__45948_46067);
var name_46069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45959_46068,(0),null);
var map__45962_46070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45959_46068,(1),null);
var map__45962_46071__$1 = (((((!((map__45962_46070 == null))))?(((((map__45962_46070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45962_46070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45962_46070):map__45962_46070);
var doc_46072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45962_46071__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45962_46071__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46069], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46073], 0));

if(cljs.core.truth_(doc_46072)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46072], 0));
} else {
}


var G__46074 = seq__45945_46064;
var G__46075 = chunk__45946_46065;
var G__46076 = count__45947_46066;
var G__46077 = (i__45948_46067 + (1));
seq__45945_46064 = G__46074;
chunk__45946_46065 = G__46075;
count__45947_46066 = G__46076;
i__45948_46067 = G__46077;
continue;
} else {
var temp__5735__auto___46078 = cljs.core.seq(seq__45945_46064);
if(temp__5735__auto___46078){
var seq__45945_46079__$1 = temp__5735__auto___46078;
if(cljs.core.chunked_seq_QMARK_(seq__45945_46079__$1)){
var c__4556__auto___46080 = cljs.core.chunk_first(seq__45945_46079__$1);
var G__46081 = cljs.core.chunk_rest(seq__45945_46079__$1);
var G__46082 = c__4556__auto___46080;
var G__46083 = cljs.core.count(c__4556__auto___46080);
var G__46084 = (0);
seq__45945_46064 = G__46081;
chunk__45946_46065 = G__46082;
count__45947_46066 = G__46083;
i__45948_46067 = G__46084;
continue;
} else {
var vec__45964_46085 = cljs.core.first(seq__45945_46079__$1);
var name_46086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45964_46085,(0),null);
var map__45967_46087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45964_46085,(1),null);
var map__45967_46088__$1 = (((((!((map__45967_46087 == null))))?(((((map__45967_46087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45967_46087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45967_46087):map__45967_46087);
var doc_46089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45967_46088__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45967_46088__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46086], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46090], 0));

if(cljs.core.truth_(doc_46089)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46089], 0));
} else {
}


var G__46091 = cljs.core.next(seq__45945_46079__$1);
var G__46092 = null;
var G__46093 = (0);
var G__46094 = (0);
seq__45945_46064 = G__46091;
chunk__45946_46065 = G__46092;
count__45947_46066 = G__46093;
i__45948_46067 = G__46094;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__45969 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45970 = null;
var count__45971 = (0);
var i__45972 = (0);
while(true){
if((i__45972 < count__45971)){
var role = chunk__45970.cljs$core$IIndexed$_nth$arity$2(null,i__45972);
var temp__5735__auto___46095__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___46095__$1)){
var spec_46096 = temp__5735__auto___46095__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46096)], 0));
} else {
}


var G__46097 = seq__45969;
var G__46098 = chunk__45970;
var G__46099 = count__45971;
var G__46100 = (i__45972 + (1));
seq__45969 = G__46097;
chunk__45970 = G__46098;
count__45971 = G__46099;
i__45972 = G__46100;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45969);
if(temp__5735__auto____$1){
var seq__45969__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45969__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45969__$1);
var G__46101 = cljs.core.chunk_rest(seq__45969__$1);
var G__46102 = c__4556__auto__;
var G__46103 = cljs.core.count(c__4556__auto__);
var G__46104 = (0);
seq__45969 = G__46101;
chunk__45970 = G__46102;
count__45971 = G__46103;
i__45972 = G__46104;
continue;
} else {
var role = cljs.core.first(seq__45969__$1);
var temp__5735__auto___46105__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___46105__$2)){
var spec_46106 = temp__5735__auto___46105__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46106)], 0));
} else {
}


var G__46107 = cljs.core.next(seq__45969__$1);
var G__46108 = null;
var G__46109 = (0);
var G__46110 = (0);
seq__45969 = G__46107;
chunk__45970 = G__46108;
count__45971 = G__46109;
i__45972 = G__46110;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__46111 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__46112 = cljs.core.ex_cause(t);
via = G__46111;
t = G__46112;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__45975 = datafied_throwable;
var map__45975__$1 = (((((!((map__45975 == null))))?(((((map__45975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45975):map__45975);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45975__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45975__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45975__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45976 = cljs.core.last(via);
var map__45976__$1 = (((((!((map__45976 == null))))?(((((map__45976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45976):map__45976);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45976__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45976__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45976__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45977 = data;
var map__45977__$1 = (((((!((map__45977 == null))))?(((((map__45977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45977):map__45977);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45977__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45977__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45977__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45978 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45978__$1 = (((((!((map__45978 == null))))?(((((map__45978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45978):map__45978);
var top_data = map__45978__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45978__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45983 = phase;
var G__45983__$1 = (((G__45983 instanceof cljs.core.Keyword))?G__45983.fqn:null);
switch (G__45983__$1) {
case "read-source":
var map__45984 = data;
var map__45984__$1 = (((((!((map__45984 == null))))?(((((map__45984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45984):map__45984);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45984__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45984__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45986 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45986__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45986,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45986);
var G__45986__$2 = (cljs.core.truth_((function (){var fexpr__45987 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45987.cljs$core$IFn$_invoke$arity$1 ? fexpr__45987.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45987.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45986__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45986__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45986__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45986__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45988 = top_data;
var G__45988__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45988,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45988);
var G__45988__$2 = (cljs.core.truth_((function (){var fexpr__45989 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45989.cljs$core$IFn$_invoke$arity$1 ? fexpr__45989.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45989.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45988__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45988__$1);
var G__45988__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45988__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45988__$2);
var G__45988__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45988__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45988__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45988__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45988__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45990 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45990,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45990,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45990,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45990,(3),null);
var G__45993 = top_data;
var G__45993__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45993,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45993);
var G__45993__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45993__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45993__$1);
var G__45993__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45993__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45993__$2);
var G__45993__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45993__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45993__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45993__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45993__$4;
}

break;
case "execution":
var vec__45994 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45994,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45994,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45994,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45994,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45974_SHARP_){
var or__4126__auto__ = (p1__45974_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__45998 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45998.cljs$core$IFn$_invoke$arity$1 ? fexpr__45998.cljs$core$IFn$_invoke$arity$1(p1__45974_SHARP_) : fexpr__45998.call(null,p1__45974_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__45999 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45999__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45999,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45999);
var G__45999__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45999__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45999__$1);
var G__45999__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45999__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45999__$2);
var G__45999__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45999__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45999__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45999__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45999__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45983__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__46002){
var map__46003 = p__46002;
var map__46003__$1 = (((((!((map__46003 == null))))?(((((map__46003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46003):map__46003);
var triage_data = map__46003__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46003__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46003__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46003__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46003__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46003__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46003__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46003__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46003__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__46005 = phase;
var G__46005__$1 = (((G__46005 instanceof cljs.core.Keyword))?G__46005.fqn:null);
switch (G__46005__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__46006 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__46007 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46008 = loc;
var G__46009 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46010_46115 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46011_46116 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46012_46117 = true;
var _STAR_print_fn_STAR__temp_val__46013_46118 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46012_46117);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46013_46118);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46000_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46000_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46011_46116);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46010_46115);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46006,G__46007,G__46008,G__46009) : format.call(null,G__46006,G__46007,G__46008,G__46009));

break;
case "macroexpansion":
var G__46014 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__46015 = cause_type;
var G__46016 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46017 = loc;
var G__46018 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46014,G__46015,G__46016,G__46017,G__46018) : format.call(null,G__46014,G__46015,G__46016,G__46017,G__46018));

break;
case "compile-syntax-check":
var G__46019 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__46020 = cause_type;
var G__46021 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46022 = loc;
var G__46023 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46019,G__46020,G__46021,G__46022,G__46023) : format.call(null,G__46019,G__46020,G__46021,G__46022,G__46023));

break;
case "compilation":
var G__46024 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__46025 = cause_type;
var G__46026 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46027 = loc;
var G__46028 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46024,G__46025,G__46026,G__46027,G__46028) : format.call(null,G__46024,G__46025,G__46026,G__46027,G__46028));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__46029 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__46030 = symbol;
var G__46031 = loc;
var G__46032 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46033_46119 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46034_46120 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46035_46121 = true;
var _STAR_print_fn_STAR__temp_val__46036_46122 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46035_46121);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46036_46122);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46001_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46001_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46034_46120);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46033_46119);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46029,G__46030,G__46031,G__46032) : format.call(null,G__46029,G__46030,G__46031,G__46032));
} else {
var G__46037 = "Execution error%s at %s(%s).\n%s\n";
var G__46038 = cause_type;
var G__46039 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46040 = loc;
var G__46041 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46037,G__46038,G__46039,G__46040,G__46041) : format.call(null,G__46037,G__46038,G__46039,G__46040,G__46041));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46005__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
