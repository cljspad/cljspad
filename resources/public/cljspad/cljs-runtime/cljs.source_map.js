goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__25892){
var vec__25893 = p__25892;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25893,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25893,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__25932 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25932,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25932,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25932,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25932,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25932,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5735__auto__)){
var name__$1 = temp__5735__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__25947 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25947,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25947,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25947,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25947,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25947,(4),null);
var vec__25950 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25950,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25950,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25950,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25950,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25950,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4126__auto__ = col;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__25958 = segmap;
var map__25958__$1 = (((((!((map__25958 == null))))?(((((map__25958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25958):map__25958);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25958__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25958__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25958__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25958__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25958__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__25961 = arguments.length;
switch (G__25961) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__25977 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__27818 = cljs.core.next(segs__$1);
var G__27819 = nrelseg;
var G__27820 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__27818;
relseg__$1 = G__27819;
result__$1 = G__27820;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25977,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25977,(1),null);
var G__27822 = (gline + (1));
var G__27823 = cljs.core.next(lines__$1);
var G__27824 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__27825 = result__$1;
gline = G__27822;
lines__$1 = G__27823;
relseg = G__27824;
result = G__27825;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__25984 = segmap;
var map__25984__$1 = (((((!((map__25984 == null))))?(((((map__25984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25984):map__25984);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25984__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25984__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25984__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25984__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25984__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__25980_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__25980_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__26000 = arguments.length;
switch (G__26000) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__26030 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__27846 = cljs.core.next(segs__$1);
var G__27847 = nrelseg;
var G__27848 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__27846;
relseg__$1 = G__27847;
result__$1 = G__27848;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26030,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26030,(1),null);
var G__27849 = (gline + (1));
var G__27850 = cljs.core.next(lines__$1);
var G__27851 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__27852 = result__$1;
gline = G__27849;
lines__$1 = G__27850;
relseg = G__27851;
result = G__27852;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__26040){
var vec__26041 = p__26040;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26041,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26041,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26041,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26041,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26041,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__26044){
var vec__26045 = p__26044;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26045,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26045,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26045,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26045,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26045,(4),null);
var seg = vec__26045;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__26048){
var vec__26049 = p__26048;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26049,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26049,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26049,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26049,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26049,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5733__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
var idx = (function (){var temp__5733__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5733__auto____$1)){
var idx = temp__5733__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__26073 = cljs.core.seq(infos);
var chunk__26074 = null;
var count__26075 = (0);
var i__26076 = (0);
while(true){
if((i__26076 < count__26075)){
var info = chunk__26074.cljs$core$IIndexed$_nth$arity$2(null,i__26076);
var segv_27875 = info__GT_segv(info,source_idx,line,col);
var gline_27876 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_27877 = cljs.core.count(cljs.core.deref(lines));
if((gline_27876 > (lc_27877 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__26073,chunk__26074,count__26075,i__26076,segv_27875,gline_27876,lc_27877,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_27876 - (lc_27877 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_27875], null));
});})(seq__26073,chunk__26074,count__26075,i__26076,segv_27875,gline_27876,lc_27877,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__26073,chunk__26074,count__26075,i__26076,segv_27875,gline_27876,lc_27877,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27876], null),cljs.core.conj,segv_27875);
});})(seq__26073,chunk__26074,count__26075,i__26076,segv_27875,gline_27876,lc_27877,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__27881 = seq__26073;
var G__27882 = chunk__26074;
var G__27883 = count__26075;
var G__27884 = (i__26076 + (1));
seq__26073 = G__27881;
chunk__26074 = G__27882;
count__26075 = G__27883;
i__26076 = G__27884;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26073);
if(temp__5735__auto__){
var seq__26073__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26073__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26073__$1);
var G__27887 = cljs.core.chunk_rest(seq__26073__$1);
var G__27888 = c__4556__auto__;
var G__27889 = cljs.core.count(c__4556__auto__);
var G__27890 = (0);
seq__26073 = G__27887;
chunk__26074 = G__27888;
count__26075 = G__27889;
i__26076 = G__27890;
continue;
} else {
var info = cljs.core.first(seq__26073__$1);
var segv_27891 = info__GT_segv(info,source_idx,line,col);
var gline_27892 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_27893 = cljs.core.count(cljs.core.deref(lines));
if((gline_27892 > (lc_27893 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__26073,chunk__26074,count__26075,i__26076,segv_27891,gline_27892,lc_27893,info,seq__26073__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_27892 - (lc_27893 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_27891], null));
});})(seq__26073,chunk__26074,count__26075,i__26076,segv_27891,gline_27892,lc_27893,info,seq__26073__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__26073,chunk__26074,count__26075,i__26076,segv_27891,gline_27892,lc_27893,info,seq__26073__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27892], null),cljs.core.conj,segv_27891);
});})(seq__26073,chunk__26074,count__26075,i__26076,segv_27891,gline_27892,lc_27893,info,seq__26073__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__27912 = cljs.core.next(seq__26073__$1);
var G__27913 = null;
var G__27914 = (0);
var G__27915 = (0);
seq__26073 = G__27912;
chunk__26074 = G__27913;
count__26075 = G__27914;
i__26076 = G__27915;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__26151_27917 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__26152_27918 = null;
var count__26153_27919 = (0);
var i__26154_27920 = (0);
while(true){
if((i__26154_27920 < count__26153_27919)){
var vec__26524_27922 = chunk__26152_27918.cljs$core$IIndexed$_nth$arity$2(null,i__26154_27920);
var source_idx_27923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26524_27922,(0),null);
var vec__26527_27924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26524_27922,(1),null);
var __27925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26527_27924,(0),null);
var lines_27926__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26527_27924,(1),null);
var seq__26533_27928 = cljs.core.seq(lines_27926__$1);
var chunk__26534_27929 = null;
var count__26535_27930 = (0);
var i__26536_27931 = (0);
while(true){
if((i__26536_27931 < count__26535_27930)){
var vec__26634_27933 = chunk__26534_27929.cljs$core$IIndexed$_nth$arity$2(null,i__26536_27931);
var line_27934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26634_27933,(0),null);
var cols_27935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26634_27933,(1),null);
var seq__26638_27937 = cljs.core.seq(cols_27935);
var chunk__26639_27938 = null;
var count__26640_27939 = (0);
var i__26641_27940 = (0);
while(true){
if((i__26641_27940 < count__26640_27939)){
var vec__26682_27941 = chunk__26639_27938.cljs$core$IIndexed$_nth$arity$2(null,i__26641_27940);
var col_27942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26682_27941,(0),null);
var infos_27943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26682_27941,(1),null);
encode_cols(infos_27943,source_idx_27923,line_27934,col_27942);


var G__27945 = seq__26638_27937;
var G__27946 = chunk__26639_27938;
var G__27947 = count__26640_27939;
var G__27948 = (i__26641_27940 + (1));
seq__26638_27937 = G__27945;
chunk__26639_27938 = G__27946;
count__26640_27939 = G__27947;
i__26641_27940 = G__27948;
continue;
} else {
var temp__5735__auto___27950 = cljs.core.seq(seq__26638_27937);
if(temp__5735__auto___27950){
var seq__26638_27952__$1 = temp__5735__auto___27950;
if(cljs.core.chunked_seq_QMARK_(seq__26638_27952__$1)){
var c__4556__auto___27953 = cljs.core.chunk_first(seq__26638_27952__$1);
var G__27954 = cljs.core.chunk_rest(seq__26638_27952__$1);
var G__27955 = c__4556__auto___27953;
var G__27956 = cljs.core.count(c__4556__auto___27953);
var G__27957 = (0);
seq__26638_27937 = G__27954;
chunk__26639_27938 = G__27955;
count__26640_27939 = G__27956;
i__26641_27940 = G__27957;
continue;
} else {
var vec__26694_27960 = cljs.core.first(seq__26638_27952__$1);
var col_27961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26694_27960,(0),null);
var infos_27962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26694_27960,(1),null);
encode_cols(infos_27962,source_idx_27923,line_27934,col_27961);


var G__27963 = cljs.core.next(seq__26638_27952__$1);
var G__27964 = null;
var G__27965 = (0);
var G__27966 = (0);
seq__26638_27937 = G__27963;
chunk__26639_27938 = G__27964;
count__26640_27939 = G__27965;
i__26641_27940 = G__27966;
continue;
}
} else {
}
}
break;
}


var G__27967 = seq__26533_27928;
var G__27968 = chunk__26534_27929;
var G__27969 = count__26535_27930;
var G__27970 = (i__26536_27931 + (1));
seq__26533_27928 = G__27967;
chunk__26534_27929 = G__27968;
count__26535_27930 = G__27969;
i__26536_27931 = G__27970;
continue;
} else {
var temp__5735__auto___27978 = cljs.core.seq(seq__26533_27928);
if(temp__5735__auto___27978){
var seq__26533_27979__$1 = temp__5735__auto___27978;
if(cljs.core.chunked_seq_QMARK_(seq__26533_27979__$1)){
var c__4556__auto___27997 = cljs.core.chunk_first(seq__26533_27979__$1);
var G__27998 = cljs.core.chunk_rest(seq__26533_27979__$1);
var G__27999 = c__4556__auto___27997;
var G__28000 = cljs.core.count(c__4556__auto___27997);
var G__28001 = (0);
seq__26533_27928 = G__27998;
chunk__26534_27929 = G__27999;
count__26535_27930 = G__28000;
i__26536_27931 = G__28001;
continue;
} else {
var vec__26697_28002 = cljs.core.first(seq__26533_27979__$1);
var line_28003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26697_28002,(0),null);
var cols_28004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26697_28002,(1),null);
var seq__26701_28005 = cljs.core.seq(cols_28004);
var chunk__26702_28006 = null;
var count__26703_28007 = (0);
var i__26704_28008 = (0);
while(true){
if((i__26704_28008 < count__26703_28007)){
var vec__26723_28009 = chunk__26702_28006.cljs$core$IIndexed$_nth$arity$2(null,i__26704_28008);
var col_28010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26723_28009,(0),null);
var infos_28011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26723_28009,(1),null);
encode_cols(infos_28011,source_idx_27923,line_28003,col_28010);


var G__28012 = seq__26701_28005;
var G__28013 = chunk__26702_28006;
var G__28014 = count__26703_28007;
var G__28015 = (i__26704_28008 + (1));
seq__26701_28005 = G__28012;
chunk__26702_28006 = G__28013;
count__26703_28007 = G__28014;
i__26704_28008 = G__28015;
continue;
} else {
var temp__5735__auto___28016__$1 = cljs.core.seq(seq__26701_28005);
if(temp__5735__auto___28016__$1){
var seq__26701_28019__$1 = temp__5735__auto___28016__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26701_28019__$1)){
var c__4556__auto___28020 = cljs.core.chunk_first(seq__26701_28019__$1);
var G__28021 = cljs.core.chunk_rest(seq__26701_28019__$1);
var G__28022 = c__4556__auto___28020;
var G__28023 = cljs.core.count(c__4556__auto___28020);
var G__28024 = (0);
seq__26701_28005 = G__28021;
chunk__26702_28006 = G__28022;
count__26703_28007 = G__28023;
i__26704_28008 = G__28024;
continue;
} else {
var vec__26730_28025 = cljs.core.first(seq__26701_28019__$1);
var col_28026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26730_28025,(0),null);
var infos_28027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26730_28025,(1),null);
encode_cols(infos_28027,source_idx_27923,line_28003,col_28026);


var G__28030 = cljs.core.next(seq__26701_28019__$1);
var G__28031 = null;
var G__28032 = (0);
var G__28033 = (0);
seq__26701_28005 = G__28030;
chunk__26702_28006 = G__28031;
count__26703_28007 = G__28032;
i__26704_28008 = G__28033;
continue;
}
} else {
}
}
break;
}


var G__28034 = cljs.core.next(seq__26533_27979__$1);
var G__28035 = null;
var G__28036 = (0);
var G__28037 = (0);
seq__26533_27928 = G__28034;
chunk__26534_27929 = G__28035;
count__26535_27930 = G__28036;
i__26536_27931 = G__28037;
continue;
}
} else {
}
}
break;
}


var G__28039 = seq__26151_27917;
var G__28040 = chunk__26152_27918;
var G__28041 = count__26153_27919;
var G__28042 = (i__26154_27920 + (1));
seq__26151_27917 = G__28039;
chunk__26152_27918 = G__28040;
count__26153_27919 = G__28041;
i__26154_27920 = G__28042;
continue;
} else {
var temp__5735__auto___28043 = cljs.core.seq(seq__26151_27917);
if(temp__5735__auto___28043){
var seq__26151_28044__$1 = temp__5735__auto___28043;
if(cljs.core.chunked_seq_QMARK_(seq__26151_28044__$1)){
var c__4556__auto___28045 = cljs.core.chunk_first(seq__26151_28044__$1);
var G__28046 = cljs.core.chunk_rest(seq__26151_28044__$1);
var G__28047 = c__4556__auto___28045;
var G__28048 = cljs.core.count(c__4556__auto___28045);
var G__28049 = (0);
seq__26151_27917 = G__28046;
chunk__26152_27918 = G__28047;
count__26153_27919 = G__28048;
i__26154_27920 = G__28049;
continue;
} else {
var vec__26735_28051 = cljs.core.first(seq__26151_28044__$1);
var source_idx_28052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26735_28051,(0),null);
var vec__26738_28053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26735_28051,(1),null);
var __28054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26738_28053,(0),null);
var lines_28055__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26738_28053,(1),null);
var seq__26741_28058 = cljs.core.seq(lines_28055__$1);
var chunk__26742_28059 = null;
var count__26743_28060 = (0);
var i__26744_28061 = (0);
while(true){
if((i__26744_28061 < count__26743_28060)){
var vec__26801_28063 = chunk__26742_28059.cljs$core$IIndexed$_nth$arity$2(null,i__26744_28061);
var line_28064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26801_28063,(0),null);
var cols_28065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26801_28063,(1),null);
var seq__26804_28066 = cljs.core.seq(cols_28065);
var chunk__26805_28067 = null;
var count__26806_28068 = (0);
var i__26807_28069 = (0);
while(true){
if((i__26807_28069 < count__26806_28068)){
var vec__26831_28070 = chunk__26805_28067.cljs$core$IIndexed$_nth$arity$2(null,i__26807_28069);
var col_28071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26831_28070,(0),null);
var infos_28072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26831_28070,(1),null);
encode_cols(infos_28072,source_idx_28052,line_28064,col_28071);


var G__28076 = seq__26804_28066;
var G__28077 = chunk__26805_28067;
var G__28078 = count__26806_28068;
var G__28079 = (i__26807_28069 + (1));
seq__26804_28066 = G__28076;
chunk__26805_28067 = G__28077;
count__26806_28068 = G__28078;
i__26807_28069 = G__28079;
continue;
} else {
var temp__5735__auto___28081__$1 = cljs.core.seq(seq__26804_28066);
if(temp__5735__auto___28081__$1){
var seq__26804_28083__$1 = temp__5735__auto___28081__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26804_28083__$1)){
var c__4556__auto___28084 = cljs.core.chunk_first(seq__26804_28083__$1);
var G__28087 = cljs.core.chunk_rest(seq__26804_28083__$1);
var G__28088 = c__4556__auto___28084;
var G__28089 = cljs.core.count(c__4556__auto___28084);
var G__28090 = (0);
seq__26804_28066 = G__28087;
chunk__26805_28067 = G__28088;
count__26806_28068 = G__28089;
i__26807_28069 = G__28090;
continue;
} else {
var vec__26836_28091 = cljs.core.first(seq__26804_28083__$1);
var col_28092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26836_28091,(0),null);
var infos_28093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26836_28091,(1),null);
encode_cols(infos_28093,source_idx_28052,line_28064,col_28092);


var G__28094 = cljs.core.next(seq__26804_28083__$1);
var G__28095 = null;
var G__28096 = (0);
var G__28097 = (0);
seq__26804_28066 = G__28094;
chunk__26805_28067 = G__28095;
count__26806_28068 = G__28096;
i__26807_28069 = G__28097;
continue;
}
} else {
}
}
break;
}


var G__28098 = seq__26741_28058;
var G__28099 = chunk__26742_28059;
var G__28100 = count__26743_28060;
var G__28101 = (i__26744_28061 + (1));
seq__26741_28058 = G__28098;
chunk__26742_28059 = G__28099;
count__26743_28060 = G__28100;
i__26744_28061 = G__28101;
continue;
} else {
var temp__5735__auto___28102__$1 = cljs.core.seq(seq__26741_28058);
if(temp__5735__auto___28102__$1){
var seq__26741_28103__$1 = temp__5735__auto___28102__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26741_28103__$1)){
var c__4556__auto___28105 = cljs.core.chunk_first(seq__26741_28103__$1);
var G__28107 = cljs.core.chunk_rest(seq__26741_28103__$1);
var G__28108 = c__4556__auto___28105;
var G__28109 = cljs.core.count(c__4556__auto___28105);
var G__28110 = (0);
seq__26741_28058 = G__28107;
chunk__26742_28059 = G__28108;
count__26743_28060 = G__28109;
i__26744_28061 = G__28110;
continue;
} else {
var vec__26840_28114 = cljs.core.first(seq__26741_28103__$1);
var line_28115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26840_28114,(0),null);
var cols_28116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26840_28114,(1),null);
var seq__26843_28117 = cljs.core.seq(cols_28116);
var chunk__26844_28118 = null;
var count__26845_28119 = (0);
var i__26846_28120 = (0);
while(true){
if((i__26846_28120 < count__26845_28119)){
var vec__26854_28121 = chunk__26844_28118.cljs$core$IIndexed$_nth$arity$2(null,i__26846_28120);
var col_28122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26854_28121,(0),null);
var infos_28123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26854_28121,(1),null);
encode_cols(infos_28123,source_idx_28052,line_28115,col_28122);


var G__28125 = seq__26843_28117;
var G__28126 = chunk__26844_28118;
var G__28127 = count__26845_28119;
var G__28128 = (i__26846_28120 + (1));
seq__26843_28117 = G__28125;
chunk__26844_28118 = G__28126;
count__26845_28119 = G__28127;
i__26846_28120 = G__28128;
continue;
} else {
var temp__5735__auto___28129__$2 = cljs.core.seq(seq__26843_28117);
if(temp__5735__auto___28129__$2){
var seq__26843_28130__$1 = temp__5735__auto___28129__$2;
if(cljs.core.chunked_seq_QMARK_(seq__26843_28130__$1)){
var c__4556__auto___28131 = cljs.core.chunk_first(seq__26843_28130__$1);
var G__28132 = cljs.core.chunk_rest(seq__26843_28130__$1);
var G__28133 = c__4556__auto___28131;
var G__28134 = cljs.core.count(c__4556__auto___28131);
var G__28135 = (0);
seq__26843_28117 = G__28132;
chunk__26844_28118 = G__28133;
count__26845_28119 = G__28134;
i__26846_28120 = G__28135;
continue;
} else {
var vec__26862_28136 = cljs.core.first(seq__26843_28130__$1);
var col_28137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26862_28136,(0),null);
var infos_28138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26862_28136,(1),null);
encode_cols(infos_28138,source_idx_28052,line_28115,col_28137);


var G__28139 = cljs.core.next(seq__26843_28130__$1);
var G__28140 = null;
var G__28141 = (0);
var G__28142 = (0);
seq__26843_28117 = G__28139;
chunk__26844_28118 = G__28140;
count__26845_28119 = G__28141;
i__26846_28120 = G__28142;
continue;
}
} else {
}
}
break;
}


var G__28143 = cljs.core.next(seq__26741_28103__$1);
var G__28144 = null;
var G__28145 = (0);
var G__28146 = (0);
seq__26741_28058 = G__28143;
chunk__26742_28059 = G__28144;
count__26743_28060 = G__28145;
i__26744_28061 = G__28146;
continue;
}
} else {
}
}
break;
}


var G__28147 = cljs.core.next(seq__26151_28044__$1);
var G__28148 = null;
var G__28149 = (0);
var G__28150 = (0);
seq__26151_27917 = G__28147;
chunk__26152_27918 = G__28148;
count__26153_27919 = G__28149;
i__26154_27920 = G__28150;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__26866 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__26054_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26054_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__26055_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__26055_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26056_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__26056_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__26873 = G__26866;
goog.object.set(G__26873,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__26873;
} else {
return G__26866;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__26875 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26875,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26875,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__26878 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26878,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26878,(1),null);
var G__28152 = cljs.core.next(col_map_seq);
var G__28153 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__26878,col,infos,vec__26875,line,col_map){
return (function (v,p__26882){
var map__26883 = p__26882;
var map__26883__$1 = (((((!((map__26883 == null))))?(((((map__26883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26883):map__26883);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26883__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26883__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__26878,col,infos,vec__26875,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__28152;
new_cols = G__28153;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__28154 = cljs.core.next(line_map_seq);
var G__28155 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__28154;
new_lines = G__28155;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__26889_28156 = cljs.core.seq(reverse_map);
var chunk__26890_28157 = null;
var count__26891_28158 = (0);
var i__26892_28159 = (0);
while(true){
if((i__26892_28159 < count__26891_28158)){
var vec__27313_28161 = chunk__26890_28157.cljs$core$IIndexed$_nth$arity$2(null,i__26892_28159);
var line_28162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27313_28161,(0),null);
var columns_28163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27313_28161,(1),null);
var seq__27316_28166 = cljs.core.seq(columns_28163);
var chunk__27317_28167 = null;
var count__27318_28168 = (0);
var i__27319_28169 = (0);
while(true){
if((i__27319_28169 < count__27318_28168)){
var vec__27407_28170 = chunk__27317_28167.cljs$core$IIndexed$_nth$arity$2(null,i__27319_28169);
var column_28171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27407_28170,(0),null);
var column_info_28172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27407_28170,(1),null);
var seq__27412_28173 = cljs.core.seq(column_info_28172);
var chunk__27413_28174 = null;
var count__27414_28175 = (0);
var i__27415_28176 = (0);
while(true){
if((i__27415_28176 < count__27414_28175)){
var map__27450_28177 = chunk__27413_28174.cljs$core$IIndexed$_nth$arity$2(null,i__27415_28176);
var map__27450_28178__$1 = (((((!((map__27450_28177 == null))))?(((((map__27450_28177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27450_28177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27450_28177):map__27450_28177);
var gline_28179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27450_28178__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27450_28178__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27450_28178__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28179], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__27412_28173,chunk__27413_28174,count__27414_28175,i__27415_28176,seq__27316_28166,chunk__27317_28167,count__27318_28168,i__27319_28169,seq__26889_28156,chunk__26890_28157,count__26891_28158,i__26892_28159,map__27450_28177,map__27450_28178__$1,gline_28179,gcol_28180,name_28181,vec__27407_28170,column_28171,column_info_28172,vec__27313_28161,line_28162,columns_28163,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28180], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28162,new cljs.core.Keyword(null,"col","col",-1959363084),column_28171,new cljs.core.Keyword(null,"name","name",1843675177),name_28181], null));
});})(seq__27412_28173,chunk__27413_28174,count__27414_28175,i__27415_28176,seq__27316_28166,chunk__27317_28167,count__27318_28168,i__27319_28169,seq__26889_28156,chunk__26890_28157,count__26891_28158,i__26892_28159,map__27450_28177,map__27450_28178__$1,gline_28179,gcol_28180,name_28181,vec__27407_28170,column_28171,column_info_28172,vec__27313_28161,line_28162,columns_28163,inverted))
,cljs.core.sorted_map()));


var G__28190 = seq__27412_28173;
var G__28191 = chunk__27413_28174;
var G__28192 = count__27414_28175;
var G__28193 = (i__27415_28176 + (1));
seq__27412_28173 = G__28190;
chunk__27413_28174 = G__28191;
count__27414_28175 = G__28192;
i__27415_28176 = G__28193;
continue;
} else {
var temp__5735__auto___28194 = cljs.core.seq(seq__27412_28173);
if(temp__5735__auto___28194){
var seq__27412_28195__$1 = temp__5735__auto___28194;
if(cljs.core.chunked_seq_QMARK_(seq__27412_28195__$1)){
var c__4556__auto___28196 = cljs.core.chunk_first(seq__27412_28195__$1);
var G__28197 = cljs.core.chunk_rest(seq__27412_28195__$1);
var G__28198 = c__4556__auto___28196;
var G__28199 = cljs.core.count(c__4556__auto___28196);
var G__28200 = (0);
seq__27412_28173 = G__28197;
chunk__27413_28174 = G__28198;
count__27414_28175 = G__28199;
i__27415_28176 = G__28200;
continue;
} else {
var map__27462_28201 = cljs.core.first(seq__27412_28195__$1);
var map__27462_28202__$1 = (((((!((map__27462_28201 == null))))?(((((map__27462_28201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27462_28201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27462_28201):map__27462_28201);
var gline_28203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27462_28202__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27462_28202__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27462_28202__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28203], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__27412_28173,chunk__27413_28174,count__27414_28175,i__27415_28176,seq__27316_28166,chunk__27317_28167,count__27318_28168,i__27319_28169,seq__26889_28156,chunk__26890_28157,count__26891_28158,i__26892_28159,map__27462_28201,map__27462_28202__$1,gline_28203,gcol_28204,name_28205,seq__27412_28195__$1,temp__5735__auto___28194,vec__27407_28170,column_28171,column_info_28172,vec__27313_28161,line_28162,columns_28163,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28204], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28162,new cljs.core.Keyword(null,"col","col",-1959363084),column_28171,new cljs.core.Keyword(null,"name","name",1843675177),name_28205], null));
});})(seq__27412_28173,chunk__27413_28174,count__27414_28175,i__27415_28176,seq__27316_28166,chunk__27317_28167,count__27318_28168,i__27319_28169,seq__26889_28156,chunk__26890_28157,count__26891_28158,i__26892_28159,map__27462_28201,map__27462_28202__$1,gline_28203,gcol_28204,name_28205,seq__27412_28195__$1,temp__5735__auto___28194,vec__27407_28170,column_28171,column_info_28172,vec__27313_28161,line_28162,columns_28163,inverted))
,cljs.core.sorted_map()));


var G__28211 = cljs.core.next(seq__27412_28195__$1);
var G__28212 = null;
var G__28213 = (0);
var G__28214 = (0);
seq__27412_28173 = G__28211;
chunk__27413_28174 = G__28212;
count__27414_28175 = G__28213;
i__27415_28176 = G__28214;
continue;
}
} else {
}
}
break;
}


var G__28215 = seq__27316_28166;
var G__28216 = chunk__27317_28167;
var G__28217 = count__27318_28168;
var G__28218 = (i__27319_28169 + (1));
seq__27316_28166 = G__28215;
chunk__27317_28167 = G__28216;
count__27318_28168 = G__28217;
i__27319_28169 = G__28218;
continue;
} else {
var temp__5735__auto___28219 = cljs.core.seq(seq__27316_28166);
if(temp__5735__auto___28219){
var seq__27316_28220__$1 = temp__5735__auto___28219;
if(cljs.core.chunked_seq_QMARK_(seq__27316_28220__$1)){
var c__4556__auto___28221 = cljs.core.chunk_first(seq__27316_28220__$1);
var G__28223 = cljs.core.chunk_rest(seq__27316_28220__$1);
var G__28224 = c__4556__auto___28221;
var G__28225 = cljs.core.count(c__4556__auto___28221);
var G__28226 = (0);
seq__27316_28166 = G__28223;
chunk__27317_28167 = G__28224;
count__27318_28168 = G__28225;
i__27319_28169 = G__28226;
continue;
} else {
var vec__27467_28227 = cljs.core.first(seq__27316_28220__$1);
var column_28228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27467_28227,(0),null);
var column_info_28229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27467_28227,(1),null);
var seq__27474_28230 = cljs.core.seq(column_info_28229);
var chunk__27475_28231 = null;
var count__27476_28232 = (0);
var i__27477_28233 = (0);
while(true){
if((i__27477_28233 < count__27476_28232)){
var map__27518_28234 = chunk__27475_28231.cljs$core$IIndexed$_nth$arity$2(null,i__27477_28233);
var map__27518_28235__$1 = (((((!((map__27518_28234 == null))))?(((((map__27518_28234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27518_28234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27518_28234):map__27518_28234);
var gline_28236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27518_28235__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27518_28235__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27518_28235__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28236], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__27474_28230,chunk__27475_28231,count__27476_28232,i__27477_28233,seq__27316_28166,chunk__27317_28167,count__27318_28168,i__27319_28169,seq__26889_28156,chunk__26890_28157,count__26891_28158,i__26892_28159,map__27518_28234,map__27518_28235__$1,gline_28236,gcol_28237,name_28238,vec__27467_28227,column_28228,column_info_28229,seq__27316_28220__$1,temp__5735__auto___28219,vec__27313_28161,line_28162,columns_28163,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28237], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28162,new cljs.core.Keyword(null,"col","col",-1959363084),column_28228,new cljs.core.Keyword(null,"name","name",1843675177),name_28238], null));
});})(seq__27474_28230,chunk__27475_28231,count__27476_28232,i__27477_28233,seq__27316_28166,chunk__27317_28167,count__27318_28168,i__27319_28169,seq__26889_28156,chunk__26890_28157,count__26891_28158,i__26892_28159,map__27518_28234,map__27518_28235__$1,gline_28236,gcol_28237,name_28238,vec__27467_28227,column_28228,column_info_28229,seq__27316_28220__$1,temp__5735__auto___28219,vec__27313_28161,line_28162,columns_28163,inverted))
,cljs.core.sorted_map()));


var G__28241 = seq__27474_28230;
var G__28242 = chunk__27475_28231;
var G__28243 = count__27476_28232;
var G__28244 = (i__27477_28233 + (1));
seq__27474_28230 = G__28241;
chunk__27475_28231 = G__28242;
count__27476_28232 = G__28243;
i__27477_28233 = G__28244;
continue;
} else {
var temp__5735__auto___28245__$1 = cljs.core.seq(seq__27474_28230);
if(temp__5735__auto___28245__$1){
var seq__27474_28247__$1 = temp__5735__auto___28245__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27474_28247__$1)){
var c__4556__auto___28248 = cljs.core.chunk_first(seq__27474_28247__$1);
var G__28249 = cljs.core.chunk_rest(seq__27474_28247__$1);
var G__28250 = c__4556__auto___28248;
var G__28251 = cljs.core.count(c__4556__auto___28248);
var G__28252 = (0);
seq__27474_28230 = G__28249;
chunk__27475_28231 = G__28250;
count__27476_28232 = G__28251;
i__27477_28233 = G__28252;
continue;
} else {
var map__27543_28253 = cljs.core.first(seq__27474_28247__$1);
var map__27543_28254__$1 = (((((!((map__27543_28253 == null))))?(((((map__27543_28253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27543_28253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27543_28253):map__27543_28253);
var gline_28255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27543_28254__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27543_28254__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27543_28254__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28255], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__27474_28230,chunk__27475_28231,count__27476_28232,i__27477_28233,seq__27316_28166,chunk__27317_28167,count__27318_28168,i__27319_28169,seq__26889_28156,chunk__26890_28157,count__26891_28158,i__26892_28159,map__27543_28253,map__27543_28254__$1,gline_28255,gcol_28256,name_28257,seq__27474_28247__$1,temp__5735__auto___28245__$1,vec__27467_28227,column_28228,column_info_28229,seq__27316_28220__$1,temp__5735__auto___28219,vec__27313_28161,line_28162,columns_28163,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28256], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28162,new cljs.core.Keyword(null,"col","col",-1959363084),column_28228,new cljs.core.Keyword(null,"name","name",1843675177),name_28257], null));
});})(seq__27474_28230,chunk__27475_28231,count__27476_28232,i__27477_28233,seq__27316_28166,chunk__27317_28167,count__27318_28168,i__27319_28169,seq__26889_28156,chunk__26890_28157,count__26891_28158,i__26892_28159,map__27543_28253,map__27543_28254__$1,gline_28255,gcol_28256,name_28257,seq__27474_28247__$1,temp__5735__auto___28245__$1,vec__27467_28227,column_28228,column_info_28229,seq__27316_28220__$1,temp__5735__auto___28219,vec__27313_28161,line_28162,columns_28163,inverted))
,cljs.core.sorted_map()));


var G__28263 = cljs.core.next(seq__27474_28247__$1);
var G__28264 = null;
var G__28265 = (0);
var G__28266 = (0);
seq__27474_28230 = G__28263;
chunk__27475_28231 = G__28264;
count__27476_28232 = G__28265;
i__27477_28233 = G__28266;
continue;
}
} else {
}
}
break;
}


var G__28269 = cljs.core.next(seq__27316_28220__$1);
var G__28270 = null;
var G__28271 = (0);
var G__28272 = (0);
seq__27316_28166 = G__28269;
chunk__27317_28167 = G__28270;
count__27318_28168 = G__28271;
i__27319_28169 = G__28272;
continue;
}
} else {
}
}
break;
}


var G__28274 = seq__26889_28156;
var G__28275 = chunk__26890_28157;
var G__28276 = count__26891_28158;
var G__28277 = (i__26892_28159 + (1));
seq__26889_28156 = G__28274;
chunk__26890_28157 = G__28275;
count__26891_28158 = G__28276;
i__26892_28159 = G__28277;
continue;
} else {
var temp__5735__auto___28278 = cljs.core.seq(seq__26889_28156);
if(temp__5735__auto___28278){
var seq__26889_28281__$1 = temp__5735__auto___28278;
if(cljs.core.chunked_seq_QMARK_(seq__26889_28281__$1)){
var c__4556__auto___28286 = cljs.core.chunk_first(seq__26889_28281__$1);
var G__28287 = cljs.core.chunk_rest(seq__26889_28281__$1);
var G__28288 = c__4556__auto___28286;
var G__28289 = cljs.core.count(c__4556__auto___28286);
var G__28290 = (0);
seq__26889_28156 = G__28287;
chunk__26890_28157 = G__28288;
count__26891_28158 = G__28289;
i__26892_28159 = G__28290;
continue;
} else {
var vec__27551_28292 = cljs.core.first(seq__26889_28281__$1);
var line_28293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27551_28292,(0),null);
var columns_28294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27551_28292,(1),null);
var seq__27555_28295 = cljs.core.seq(columns_28294);
var chunk__27556_28296 = null;
var count__27557_28297 = (0);
var i__27558_28298 = (0);
while(true){
if((i__27558_28298 < count__27557_28297)){
var vec__27684_28299 = chunk__27556_28296.cljs$core$IIndexed$_nth$arity$2(null,i__27558_28298);
var column_28300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27684_28299,(0),null);
var column_info_28301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27684_28299,(1),null);
var seq__27687_28303 = cljs.core.seq(column_info_28301);
var chunk__27688_28304 = null;
var count__27689_28305 = (0);
var i__27690_28306 = (0);
while(true){
if((i__27690_28306 < count__27689_28305)){
var map__27705_28308 = chunk__27688_28304.cljs$core$IIndexed$_nth$arity$2(null,i__27690_28306);
var map__27705_28309__$1 = (((((!((map__27705_28308 == null))))?(((((map__27705_28308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27705_28308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27705_28308):map__27705_28308);
var gline_28310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27705_28309__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27705_28309__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27705_28309__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28310], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__27687_28303,chunk__27688_28304,count__27689_28305,i__27690_28306,seq__27555_28295,chunk__27556_28296,count__27557_28297,i__27558_28298,seq__26889_28156,chunk__26890_28157,count__26891_28158,i__26892_28159,map__27705_28308,map__27705_28309__$1,gline_28310,gcol_28311,name_28312,vec__27684_28299,column_28300,column_info_28301,vec__27551_28292,line_28293,columns_28294,seq__26889_28281__$1,temp__5735__auto___28278,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28311], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28293,new cljs.core.Keyword(null,"col","col",-1959363084),column_28300,new cljs.core.Keyword(null,"name","name",1843675177),name_28312], null));
});})(seq__27687_28303,chunk__27688_28304,count__27689_28305,i__27690_28306,seq__27555_28295,chunk__27556_28296,count__27557_28297,i__27558_28298,seq__26889_28156,chunk__26890_28157,count__26891_28158,i__26892_28159,map__27705_28308,map__27705_28309__$1,gline_28310,gcol_28311,name_28312,vec__27684_28299,column_28300,column_info_28301,vec__27551_28292,line_28293,columns_28294,seq__26889_28281__$1,temp__5735__auto___28278,inverted))
,cljs.core.sorted_map()));


var G__28314 = seq__27687_28303;
var G__28315 = chunk__27688_28304;
var G__28316 = count__27689_28305;
var G__28317 = (i__27690_28306 + (1));
seq__27687_28303 = G__28314;
chunk__27688_28304 = G__28315;
count__27689_28305 = G__28316;
i__27690_28306 = G__28317;
continue;
} else {
var temp__5735__auto___28336__$1 = cljs.core.seq(seq__27687_28303);
if(temp__5735__auto___28336__$1){
var seq__27687_28337__$1 = temp__5735__auto___28336__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27687_28337__$1)){
var c__4556__auto___28339 = cljs.core.chunk_first(seq__27687_28337__$1);
var G__28340 = cljs.core.chunk_rest(seq__27687_28337__$1);
var G__28341 = c__4556__auto___28339;
var G__28342 = cljs.core.count(c__4556__auto___28339);
var G__28343 = (0);
seq__27687_28303 = G__28340;
chunk__27688_28304 = G__28341;
count__27689_28305 = G__28342;
i__27690_28306 = G__28343;
continue;
} else {
var map__27710_28344 = cljs.core.first(seq__27687_28337__$1);
var map__27710_28345__$1 = (((((!((map__27710_28344 == null))))?(((((map__27710_28344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27710_28344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27710_28344):map__27710_28344);
var gline_28346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27710_28345__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27710_28345__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27710_28345__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28346], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__27687_28303,chunk__27688_28304,count__27689_28305,i__27690_28306,seq__27555_28295,chunk__27556_28296,count__27557_28297,i__27558_28298,seq__26889_28156,chunk__26890_28157,count__26891_28158,i__26892_28159,map__27710_28344,map__27710_28345__$1,gline_28346,gcol_28347,name_28348,seq__27687_28337__$1,temp__5735__auto___28336__$1,vec__27684_28299,column_28300,column_info_28301,vec__27551_28292,line_28293,columns_28294,seq__26889_28281__$1,temp__5735__auto___28278,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28347], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28293,new cljs.core.Keyword(null,"col","col",-1959363084),column_28300,new cljs.core.Keyword(null,"name","name",1843675177),name_28348], null));
});})(seq__27687_28303,chunk__27688_28304,count__27689_28305,i__27690_28306,seq__27555_28295,chunk__27556_28296,count__27557_28297,i__27558_28298,seq__26889_28156,chunk__26890_28157,count__26891_28158,i__26892_28159,map__27710_28344,map__27710_28345__$1,gline_28346,gcol_28347,name_28348,seq__27687_28337__$1,temp__5735__auto___28336__$1,vec__27684_28299,column_28300,column_info_28301,vec__27551_28292,line_28293,columns_28294,seq__26889_28281__$1,temp__5735__auto___28278,inverted))
,cljs.core.sorted_map()));


var G__28352 = cljs.core.next(seq__27687_28337__$1);
var G__28353 = null;
var G__28354 = (0);
var G__28355 = (0);
seq__27687_28303 = G__28352;
chunk__27688_28304 = G__28353;
count__27689_28305 = G__28354;
i__27690_28306 = G__28355;
continue;
}
} else {
}
}
break;
}


var G__28356 = seq__27555_28295;
var G__28357 = chunk__27556_28296;
var G__28358 = count__27557_28297;
var G__28359 = (i__27558_28298 + (1));
seq__27555_28295 = G__28356;
chunk__27556_28296 = G__28357;
count__27557_28297 = G__28358;
i__27558_28298 = G__28359;
continue;
} else {
var temp__5735__auto___28360__$1 = cljs.core.seq(seq__27555_28295);
if(temp__5735__auto___28360__$1){
var seq__27555_28361__$1 = temp__5735__auto___28360__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27555_28361__$1)){
var c__4556__auto___28362 = cljs.core.chunk_first(seq__27555_28361__$1);
var G__28363 = cljs.core.chunk_rest(seq__27555_28361__$1);
var G__28364 = c__4556__auto___28362;
var G__28365 = cljs.core.count(c__4556__auto___28362);
var G__28366 = (0);
seq__27555_28295 = G__28363;
chunk__27556_28296 = G__28364;
count__27557_28297 = G__28365;
i__27558_28298 = G__28366;
continue;
} else {
var vec__27714_28367 = cljs.core.first(seq__27555_28361__$1);
var column_28368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27714_28367,(0),null);
var column_info_28369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27714_28367,(1),null);
var seq__27719_28370 = cljs.core.seq(column_info_28369);
var chunk__27720_28371 = null;
var count__27721_28372 = (0);
var i__27722_28373 = (0);
while(true){
if((i__27722_28373 < count__27721_28372)){
var map__27751_28376 = chunk__27720_28371.cljs$core$IIndexed$_nth$arity$2(null,i__27722_28373);
var map__27751_28377__$1 = (((((!((map__27751_28376 == null))))?(((((map__27751_28376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27751_28376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27751_28376):map__27751_28376);
var gline_28378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27751_28377__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27751_28377__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27751_28377__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28378], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__27719_28370,chunk__27720_28371,count__27721_28372,i__27722_28373,seq__27555_28295,chunk__27556_28296,count__27557_28297,i__27558_28298,seq__26889_28156,chunk__26890_28157,count__26891_28158,i__26892_28159,map__27751_28376,map__27751_28377__$1,gline_28378,gcol_28379,name_28380,vec__27714_28367,column_28368,column_info_28369,seq__27555_28361__$1,temp__5735__auto___28360__$1,vec__27551_28292,line_28293,columns_28294,seq__26889_28281__$1,temp__5735__auto___28278,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28379], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28293,new cljs.core.Keyword(null,"col","col",-1959363084),column_28368,new cljs.core.Keyword(null,"name","name",1843675177),name_28380], null));
});})(seq__27719_28370,chunk__27720_28371,count__27721_28372,i__27722_28373,seq__27555_28295,chunk__27556_28296,count__27557_28297,i__27558_28298,seq__26889_28156,chunk__26890_28157,count__26891_28158,i__26892_28159,map__27751_28376,map__27751_28377__$1,gline_28378,gcol_28379,name_28380,vec__27714_28367,column_28368,column_info_28369,seq__27555_28361__$1,temp__5735__auto___28360__$1,vec__27551_28292,line_28293,columns_28294,seq__26889_28281__$1,temp__5735__auto___28278,inverted))
,cljs.core.sorted_map()));


var G__28390 = seq__27719_28370;
var G__28391 = chunk__27720_28371;
var G__28392 = count__27721_28372;
var G__28393 = (i__27722_28373 + (1));
seq__27719_28370 = G__28390;
chunk__27720_28371 = G__28391;
count__27721_28372 = G__28392;
i__27722_28373 = G__28393;
continue;
} else {
var temp__5735__auto___28400__$2 = cljs.core.seq(seq__27719_28370);
if(temp__5735__auto___28400__$2){
var seq__27719_28402__$1 = temp__5735__auto___28400__$2;
if(cljs.core.chunked_seq_QMARK_(seq__27719_28402__$1)){
var c__4556__auto___28403 = cljs.core.chunk_first(seq__27719_28402__$1);
var G__28404 = cljs.core.chunk_rest(seq__27719_28402__$1);
var G__28405 = c__4556__auto___28403;
var G__28406 = cljs.core.count(c__4556__auto___28403);
var G__28407 = (0);
seq__27719_28370 = G__28404;
chunk__27720_28371 = G__28405;
count__27721_28372 = G__28406;
i__27722_28373 = G__28407;
continue;
} else {
var map__27762_28408 = cljs.core.first(seq__27719_28402__$1);
var map__27762_28409__$1 = (((((!((map__27762_28408 == null))))?(((((map__27762_28408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27762_28408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27762_28408):map__27762_28408);
var gline_28410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27762_28409__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27762_28409__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27762_28409__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28410], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__27719_28370,chunk__27720_28371,count__27721_28372,i__27722_28373,seq__27555_28295,chunk__27556_28296,count__27557_28297,i__27558_28298,seq__26889_28156,chunk__26890_28157,count__26891_28158,i__26892_28159,map__27762_28408,map__27762_28409__$1,gline_28410,gcol_28411,name_28412,seq__27719_28402__$1,temp__5735__auto___28400__$2,vec__27714_28367,column_28368,column_info_28369,seq__27555_28361__$1,temp__5735__auto___28360__$1,vec__27551_28292,line_28293,columns_28294,seq__26889_28281__$1,temp__5735__auto___28278,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28411], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28293,new cljs.core.Keyword(null,"col","col",-1959363084),column_28368,new cljs.core.Keyword(null,"name","name",1843675177),name_28412], null));
});})(seq__27719_28370,chunk__27720_28371,count__27721_28372,i__27722_28373,seq__27555_28295,chunk__27556_28296,count__27557_28297,i__27558_28298,seq__26889_28156,chunk__26890_28157,count__26891_28158,i__26892_28159,map__27762_28408,map__27762_28409__$1,gline_28410,gcol_28411,name_28412,seq__27719_28402__$1,temp__5735__auto___28400__$2,vec__27714_28367,column_28368,column_info_28369,seq__27555_28361__$1,temp__5735__auto___28360__$1,vec__27551_28292,line_28293,columns_28294,seq__26889_28281__$1,temp__5735__auto___28278,inverted))
,cljs.core.sorted_map()));


var G__28418 = cljs.core.next(seq__27719_28402__$1);
var G__28419 = null;
var G__28420 = (0);
var G__28421 = (0);
seq__27719_28370 = G__28418;
chunk__27720_28371 = G__28419;
count__27721_28372 = G__28420;
i__27722_28373 = G__28421;
continue;
}
} else {
}
}
break;
}


var G__28422 = cljs.core.next(seq__27555_28361__$1);
var G__28423 = null;
var G__28424 = (0);
var G__28425 = (0);
seq__27555_28295 = G__28422;
chunk__27556_28296 = G__28423;
count__27557_28297 = G__28424;
i__27558_28298 = G__28425;
continue;
}
} else {
}
}
break;
}


var G__28426 = cljs.core.next(seq__26889_28281__$1);
var G__28427 = null;
var G__28428 = (0);
var G__28429 = (0);
seq__26889_28156 = G__28426;
chunk__26890_28157 = G__28427;
count__26891_28158 = G__28428;
i__26892_28159 = G__28429;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});

//# sourceMappingURL=cljs.source_map.js.map
