goog.provide('cljs.compiler');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__29857 = s;
var map__29857__$1 = (((((!((map__29857 == null))))?(((((map__29857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29857):map__29857);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29857__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29857__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__29860 = info;
var map__29861 = G__29860;
var map__29861__$1 = (((((!((map__29861 == null))))?(((((map__29861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29861):map__29861);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29861__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__29860__$1 = G__29860;
while(true){
var d__$2 = d__$1;
var map__29865 = G__29860__$1;
var map__29865__$1 = (((((!((map__29865 == null))))?(((((map__29865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29865):map__29865);
var shadow__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29865__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$2)){
var G__30845 = (d__$2 + (1));
var G__30846 = shadow__$2;
d__$1 = G__30845;
G__29860__$1 = G__30846;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__29869){
var map__29870 = p__29869;
var map__29870__$1 = (((((!((map__29870 == null))))?(((((map__29870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29870):map__29870);
var name_var = map__29870__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29870__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29870__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__29872 = info;
var map__29872__$1 = (((((!((map__29872 == null))))?(((((map__29872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29872):map__29872);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29872__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29872__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__29874 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__29874) : cljs.compiler.munge.call(null,G__29874));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__29918 = arguments.length;
switch (G__29918) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = (function (){var fexpr__29926 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__29926.cljs$core$IFn$_invoke$arity$1 ? fexpr__29926.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__29926.call(null,ss__$3));
})();
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__29927 = cp;
switch (G__29927) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__29928_30853 = cljs.core.seq(s);
var chunk__29929_30854 = null;
var count__29930_30855 = (0);
var i__29931_30856 = (0);
while(true){
if((i__29931_30856 < count__29930_30855)){
var c_30857 = chunk__29929_30854.cljs$core$IIndexed$_nth$arity$2(null,i__29931_30856);
sb.append(cljs.compiler.escape_char(c_30857));


var G__30858 = seq__29928_30853;
var G__30859 = chunk__29929_30854;
var G__30860 = count__29930_30855;
var G__30861 = (i__29931_30856 + (1));
seq__29928_30853 = G__30858;
chunk__29929_30854 = G__30859;
count__29930_30855 = G__30860;
i__29931_30856 = G__30861;
continue;
} else {
var temp__5735__auto___30862 = cljs.core.seq(seq__29928_30853);
if(temp__5735__auto___30862){
var seq__29928_30863__$1 = temp__5735__auto___30862;
if(cljs.core.chunked_seq_QMARK_(seq__29928_30863__$1)){
var c__4556__auto___30864 = cljs.core.chunk_first(seq__29928_30863__$1);
var G__30865 = cljs.core.chunk_rest(seq__29928_30863__$1);
var G__30866 = c__4556__auto___30864;
var G__30867 = cljs.core.count(c__4556__auto___30864);
var G__30868 = (0);
seq__29928_30853 = G__30865;
chunk__29929_30854 = G__30866;
count__29930_30855 = G__30867;
i__29931_30856 = G__30868;
continue;
} else {
var c_30872 = cljs.core.first(seq__29928_30863__$1);
sb.append(cljs.compiler.escape_char(c_30872));


var G__30873 = cljs.core.next(seq__29928_30863__$1);
var G__30874 = null;
var G__30875 = (0);
var G__30876 = (0);
seq__29928_30853 = G__30873;
chunk__29929_30854 = G__30874;
count__29930_30855 = G__30875;
i__29931_30856 = G__30876;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29932 = cljs.core.get_global_hierarchy;
return (fexpr__29932.cljs$core$IFn$_invoke$arity$0 ? fexpr__29932.cljs$core$IFn$_invoke$arity$0() : fexpr__29932.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__29933_30879 = ast;
var map__29933_30880__$1 = (((((!((map__29933_30879 == null))))?(((((map__29933_30879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29933_30879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29933_30879):map__29933_30879);
var env_30881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29933_30880__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_30881))){
var map__29935_30883 = env_30881;
var map__29935_30884__$1 = (((((!((map__29935_30883 == null))))?(((((map__29935_30883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29935_30883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29935_30883):map__29935_30883);
var line_30885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29935_30884__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_30886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29935_30884__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__29937 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__29939 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__29938 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__29938.cljs$core$IFn$_invoke$arity$1 ? fexpr__29938.cljs$core$IFn$_invoke$arity$1(G__29939) : fexpr__29938.call(null,G__29939));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29937,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__29937;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_30885 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_30886)?(column_30886 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__29948 = arguments.length;
switch (G__29948) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___30890 = arguments.length;
var i__4737__auto___30891 = (0);
while(true){
if((i__4737__auto___30891 < len__4736__auto___30890)){
args_arr__4757__auto__.push((arguments[i__4737__auto___30891]));

var G__30892 = (i__4737__auto___30891 + (1));
i__4737__auto___30891 = G__30892;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(a)){
cljs.compiler.emit(a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(a)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null));
} else {
var s_30894 = (function (){var G__29949 = a;
if((!(typeof a === 'string'))){
return G__29949.toString();
} else {
return G__29949;
}
})();
var temp__5739__auto___30895 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___30895 == null)){
} else {
var sm_data_30896 = temp__5739__auto___30895;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_30896,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__29940_SHARP_){
return (p1__29940_SHARP_ + s_30894.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_30894], 0));

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__29950 = cljs.core.seq(xs);
var chunk__29951 = null;
var count__29952 = (0);
var i__29953 = (0);
while(true){
if((i__29953 < count__29952)){
var x = chunk__29951.cljs$core$IIndexed$_nth$arity$2(null,i__29953);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__30901 = seq__29950;
var G__30902 = chunk__29951;
var G__30903 = count__29952;
var G__30904 = (i__29953 + (1));
seq__29950 = G__30901;
chunk__29951 = G__30902;
count__29952 = G__30903;
i__29953 = G__30904;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29950);
if(temp__5735__auto__){
var seq__29950__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29950__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29950__$1);
var G__30906 = cljs.core.chunk_rest(seq__29950__$1);
var G__30907 = c__4556__auto__;
var G__30908 = cljs.core.count(c__4556__auto__);
var G__30909 = (0);
seq__29950 = G__30906;
chunk__29951 = G__30907;
count__29952 = G__30908;
i__29953 = G__30909;
continue;
} else {
var x = cljs.core.first(seq__29950__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__30911 = cljs.core.next(seq__29950__$1);
var G__30912 = null;
var G__30913 = (0);
var G__30914 = (0);
seq__29950 = G__30911;
chunk__29951 = G__30912;
count__29952 = G__30913;
i__29953 = G__30914;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq29942){
var G__29943 = cljs.core.first(seq29942);
var seq29942__$1 = cljs.core.next(seq29942);
var G__29944 = cljs.core.first(seq29942__$1);
var seq29942__$2 = cljs.core.next(seq29942__$1);
var G__29945 = cljs.core.first(seq29942__$2);
var seq29942__$3 = cljs.core.next(seq29942__$2);
var G__29946 = cljs.core.first(seq29942__$3);
var seq29942__$4 = cljs.core.next(seq29942__$3);
var G__29947 = cljs.core.first(seq29942__$4);
var seq29942__$5 = cljs.core.next(seq29942__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29943,G__29944,G__29945,G__29946,G__29947,seq29942__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__29954){
var map__29955 = p__29954;
var map__29955__$1 = (((((!((map__29955 == null))))?(((((map__29955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29955):map__29955);
var m = map__29955__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29955__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__29964 = arguments.length;
switch (G__29964) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___30924 = arguments.length;
var i__4737__auto___30925 = (0);
while(true){
if((i__4737__auto___30925 < len__4736__auto___30924)){
args_arr__4757__auto__.push((arguments[i__4737__auto___30925]));

var G__30927 = (i__4737__auto___30925 + (1));
i__4737__auto___30925 = G__30927;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__29965_30948 = cljs.core.seq(xs);
var chunk__29966_30949 = null;
var count__29967_30950 = (0);
var i__29968_30951 = (0);
while(true){
if((i__29968_30951 < count__29967_30950)){
var x_30952 = chunk__29966_30949.cljs$core$IIndexed$_nth$arity$2(null,i__29968_30951);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_30952);


var G__30953 = seq__29965_30948;
var G__30954 = chunk__29966_30949;
var G__30955 = count__29967_30950;
var G__30956 = (i__29968_30951 + (1));
seq__29965_30948 = G__30953;
chunk__29966_30949 = G__30954;
count__29967_30950 = G__30955;
i__29968_30951 = G__30956;
continue;
} else {
var temp__5735__auto___30957 = cljs.core.seq(seq__29965_30948);
if(temp__5735__auto___30957){
var seq__29965_30958__$1 = temp__5735__auto___30957;
if(cljs.core.chunked_seq_QMARK_(seq__29965_30958__$1)){
var c__4556__auto___30959 = cljs.core.chunk_first(seq__29965_30958__$1);
var G__30960 = cljs.core.chunk_rest(seq__29965_30958__$1);
var G__30961 = c__4556__auto___30959;
var G__30962 = cljs.core.count(c__4556__auto___30959);
var G__30963 = (0);
seq__29965_30948 = G__30960;
chunk__29966_30949 = G__30961;
count__29967_30950 = G__30962;
i__29968_30951 = G__30963;
continue;
} else {
var x_30966 = cljs.core.first(seq__29965_30958__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_30966);


var G__30967 = cljs.core.next(seq__29965_30958__$1);
var G__30968 = null;
var G__30969 = (0);
var G__30970 = (0);
seq__29965_30948 = G__30967;
chunk__29966_30949 = G__30968;
count__29967_30950 = G__30969;
i__29968_30951 = G__30970;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln();
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq29958){
var G__29959 = cljs.core.first(seq29958);
var seq29958__$1 = cljs.core.next(seq29958);
var G__29960 = cljs.core.first(seq29958__$1);
var seq29958__$2 = cljs.core.next(seq29958__$1);
var G__29961 = cljs.core.first(seq29958__$2);
var seq29958__$3 = cljs.core.next(seq29958__$2);
var G__29962 = cljs.core.first(seq29958__$3);
var seq29958__$4 = cljs.core.next(seq29958__$3);
var G__29963 = cljs.core.first(seq29958__$4);
var seq29958__$5 = cljs.core.next(seq29958__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29959,G__29960,G__29961,G__29962,G__29963,seq29958__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29972_30974 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29973_30975 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29974_30976 = true;
var _STAR_print_fn_STAR__temp_val__29975_30977 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29974_30976);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29975_30977);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29973_30975);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29972_30974);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29977 = cljs.core.get_global_hierarchy;
return (fexpr__29977.cljs$core$IFn$_invoke$arity$0 ? fexpr__29977.cljs$core$IFn$_invoke$arity$0() : fexpr__29977.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__29978 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29978,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29978,(1),null);
var G__29981 = ns;
var G__29982 = name;
var G__29983 = (function (){
var G__29984 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__29984) : cljs.compiler.emit_constant.call(null,G__29984));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__29981,G__29982,G__29983) : cljs.compiler.emit_record_value.call(null,G__29981,G__29982,G__29983));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__29985 = cljs.core.keys(x);
var G__29986 = cljs.core.vals(x);
var G__29987 = cljs.compiler.emit_constants_comma_sep;
var G__29988 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__29985,G__29986,G__29987,G__29988) : cljs.compiler.emit_map.call(null,G__29985,G__29986,G__29987,G__29988));
} else {
if(cljs.analyzer.cljs_vector_QMARK_(x)){
return (cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.analyzer.cljs_set_QMARK_(x)){
return (cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3(x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_) : cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_));
} else {
return cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1(x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta(cljs.core.meta(v));
if((!((cljs.core.seq(m) == null)))){
var G__29989 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__29990 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__29989,G__29990) : cljs.compiler.emit_with_meta.call(null,G__29989,G__29990));
} else {
return cljs.compiler.emit_constant_no_meta(v);
}
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("null");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("NaN");
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(",x,")");

}
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x)));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(x)?"true":"false"));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(new RegExp(\"\"))");
} else {
var vec__29993 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29993,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29993,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29993,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Keyword(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant((cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(kw));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Symbol(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(symstr);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(sym));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(null);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__29996 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__29996) : x.call(null,G__29996));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__29997 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__29997) : x.call(null,G__29997));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,m){
if(cljs.core.even_QMARK_(i)){
return cljs.compiler.emit_constant(m);
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(m);
}
}),cljs.compiler.comma_sep(cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("new Date(",date.getTime(),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_(items)){
var G__30000 = items;
var G__30001 = (function (p1__29999_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__29999_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__30000,G__30001) : cljs.compiler.emit_js_object.call(null,G__30000,G__30001));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__30003){
var map__30004 = p__30003;
var map__30004__$1 = (((((!((map__30004 == null))))?(((((map__30004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30004):map__30004);
var ast = map__30004__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30004__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30004__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30004__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__30010 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__30010__$1 = (((((!((map__30010 == null))))?(((((map__30010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30010):map__30010);
var cenv = map__30010__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30010__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4126__auto__ = js_module_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__30012 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__30019 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__30019) : cljs.compiler.es5_GT__EQ_.call(null,G__30019));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__30012,cljs.analyzer.es5_allowed);
} else {
return G__30012;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__30024 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__30024,reserved);
} else {
return G__30024;
}
})();
var env__29850__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__30026_31020 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__30026_31021__$1 = (((G__30026_31020 instanceof cljs.core.Keyword))?G__30026_31020.fqn:null);
switch (G__30026_31021__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__4115__auto__;
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);
}

break;
default:
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);

}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__30028){
var map__30029 = p__30028;
var map__30029__$1 = (((((!((map__30029 == null))))?(((((map__30029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30029):map__30029);
var arg = map__30029__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30029__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30029__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30029__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30029__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__30031 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__30031__$1 = (((((!((map__30031 == null))))?(((((map__30031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30031):map__30031);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30031__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__29850__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__30037){
var map__30038 = p__30037;
var map__30038__$1 = (((((!((map__30038 == null))))?(((((map__30038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30038):map__30038);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30038__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30038__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30038__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29850__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__30044_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__30044_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__30046 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__30046) : comma_sep.call(null,G__30046));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__30047 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__30047) : comma_sep.call(null,G__30047));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__30048){
var map__30050 = p__30048;
var map__30050__$1 = (((((!((map__30050 == null))))?(((((map__30050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30050):map__30050);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30050__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30050__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30050__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__29850__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.list(",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count(items);
if((cnt < (32))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentVector.fromArray([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], true)");
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__30054){
var map__30055 = p__30054;
var map__30055__$1 = (((((!((map__30055 == null))))?(((((map__30055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30055):map__30055);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30055__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30055__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29850__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__30057_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__30057_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__30059 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__30059) : comma_sep.call(null,G__30059));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__30062){
var map__30063 = p__30062;
var map__30063__$1 = (((((!((map__30063 == null))))?(((((map__30063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30063):map__30063);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30063__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30063__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29850__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___31082 = cljs.core.seq(items);
if(temp__5735__auto___31082){
var items_31083__$1 = temp__5735__auto___31082;
var vec__30065_31084 = items_31083__$1;
var seq__30066_31085 = cljs.core.seq(vec__30065_31084);
var first__30067_31086 = cljs.core.first(seq__30066_31085);
var seq__30066_31087__$1 = cljs.core.next(seq__30066_31085);
var vec__30068_31088 = first__30067_31086;
var k_31089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30068_31088,(0),null);
var v_31090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30068_31088,(1),null);
var r_31091 = seq__30066_31087__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_31089),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_31090) : emit_js_object_val.call(null,v_31090)));

var seq__30071_31095 = cljs.core.seq(r_31091);
var chunk__30072_31096 = null;
var count__30073_31097 = (0);
var i__30074_31098 = (0);
while(true){
if((i__30074_31098 < count__30073_31097)){
var vec__30082_31099 = chunk__30072_31096.cljs$core$IIndexed$_nth$arity$2(null,i__30074_31098);
var k_31100__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30082_31099,(0),null);
var v_31101__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30082_31099,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_31100__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_31101__$1) : emit_js_object_val.call(null,v_31101__$1)));


var G__31102 = seq__30071_31095;
var G__31103 = chunk__30072_31096;
var G__31104 = count__30073_31097;
var G__31105 = (i__30074_31098 + (1));
seq__30071_31095 = G__31102;
chunk__30072_31096 = G__31103;
count__30073_31097 = G__31104;
i__30074_31098 = G__31105;
continue;
} else {
var temp__5735__auto___31112__$1 = cljs.core.seq(seq__30071_31095);
if(temp__5735__auto___31112__$1){
var seq__30071_31113__$1 = temp__5735__auto___31112__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30071_31113__$1)){
var c__4556__auto___31114 = cljs.core.chunk_first(seq__30071_31113__$1);
var G__31115 = cljs.core.chunk_rest(seq__30071_31113__$1);
var G__31116 = c__4556__auto___31114;
var G__31117 = cljs.core.count(c__4556__auto___31114);
var G__31118 = (0);
seq__30071_31095 = G__31115;
chunk__30072_31096 = G__31116;
count__30073_31097 = G__31117;
i__30074_31098 = G__31118;
continue;
} else {
var vec__30085_31119 = cljs.core.first(seq__30071_31113__$1);
var k_31120__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30085_31119,(0),null);
var v_31121__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30085_31119,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_31120__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_31121__$1) : emit_js_object_val.call(null,v_31121__$1)));


var G__31122 = cljs.core.next(seq__30071_31113__$1);
var G__31123 = null;
var G__31124 = (0);
var G__31125 = (0);
seq__30071_31095 = G__31122;
chunk__30072_31096 = G__31123;
count__30073_31097 = G__31124;
i__30074_31098 = G__31125;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"]");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__30089){
var map__30090 = p__30089;
var map__30090__$1 = (((((!((map__30090 == null))))?(((((map__30090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30090):map__30090);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30090__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30090__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30090__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29850__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__30092){
var map__30096 = p__30092;
var map__30096__$1 = (((((!((map__30096 == null))))?(((((map__30096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30096):map__30096);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30096__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30096__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29850__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__30099){
var map__30100 = p__30099;
var map__30100__$1 = (((((!((map__30100 == null))))?(((((map__30100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30100):map__30100);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30100__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__30102){
var map__30103 = p__30102;
var map__30103__$1 = (((((!((map__30103 == null))))?(((((map__30103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30103):map__30103);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30103__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30103__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__29850__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__30105 = cljs.analyzer.unwrap_quote(expr);
var map__30105__$1 = (((((!((map__30105 == null))))?(((((map__30105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30105):map__30105);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30105__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30105__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30105__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842)))?(function (){var and__4115__auto__ = form;
if(cljs.core.truth_(and__4115__auto__)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4115__auto__;
}
})():false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__30111 = cljs.analyzer.unwrap_quote(expr);
var map__30111__$1 = (((((!((map__30111 == null))))?(((((map__30111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30111):map__30111);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30111__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30111__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30111__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__4126__auto__ = (function (){var fexpr__30117 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__30117.cljs$core$IFn$_invoke$arity$1 ? fexpr__30117.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__30117.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__30118){
var map__30119 = p__30118;
var map__30119__$1 = (((((!((map__30119 == null))))?(((((map__30119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30119):map__30119);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30119__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30119__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30119__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30119__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30119__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4126__auto__ = unchecked;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(else$);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",((checked)?"cljs.core.truth_":null),"(",test,")?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(",test,"){");
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(then,"} else {");

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(else$,"}");
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__30122){
var map__30123 = p__30122;
var map__30123__$1 = (((((!((map__30123 == null))))?(((((map__30123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30123):map__30123);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30123__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30123__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30123__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30123__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function(){");
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",gs,";");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("switch (",v,") {");

var seq__30125_31160 = cljs.core.seq(nodes);
var chunk__30126_31161 = null;
var count__30127_31162 = (0);
var i__30128_31163 = (0);
while(true){
if((i__30128_31163 < count__30127_31162)){
var map__30148_31164 = chunk__30126_31161.cljs$core$IIndexed$_nth$arity$2(null,i__30128_31163);
var map__30148_31165__$1 = (((((!((map__30148_31164 == null))))?(((((map__30148_31164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30148_31164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30148_31164):map__30148_31164);
var ts_31166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30148_31165__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__30150_31167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30148_31165__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__30150_31168__$1 = (((((!((map__30150_31167 == null))))?(((((map__30150_31167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30150_31167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30150_31167):map__30150_31167);
var then_31169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30150_31168__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__30154_31183 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_31166));
var chunk__30155_31184 = null;
var count__30156_31185 = (0);
var i__30157_31186 = (0);
while(true){
if((i__30157_31186 < count__30156_31185)){
var test_31187 = chunk__30155_31184.cljs$core$IIndexed$_nth$arity$2(null,i__30157_31186);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_31187,":");


var G__31189 = seq__30154_31183;
var G__31190 = chunk__30155_31184;
var G__31191 = count__30156_31185;
var G__31192 = (i__30157_31186 + (1));
seq__30154_31183 = G__31189;
chunk__30155_31184 = G__31190;
count__30156_31185 = G__31191;
i__30157_31186 = G__31192;
continue;
} else {
var temp__5735__auto___31193 = cljs.core.seq(seq__30154_31183);
if(temp__5735__auto___31193){
var seq__30154_31194__$1 = temp__5735__auto___31193;
if(cljs.core.chunked_seq_QMARK_(seq__30154_31194__$1)){
var c__4556__auto___31196 = cljs.core.chunk_first(seq__30154_31194__$1);
var G__31197 = cljs.core.chunk_rest(seq__30154_31194__$1);
var G__31198 = c__4556__auto___31196;
var G__31199 = cljs.core.count(c__4556__auto___31196);
var G__31200 = (0);
seq__30154_31183 = G__31197;
chunk__30155_31184 = G__31198;
count__30156_31185 = G__31199;
i__30157_31186 = G__31200;
continue;
} else {
var test_31202 = cljs.core.first(seq__30154_31194__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_31202,":");


var G__31203 = cljs.core.next(seq__30154_31194__$1);
var G__31204 = null;
var G__31205 = (0);
var G__31206 = (0);
seq__30154_31183 = G__31203;
chunk__30155_31184 = G__31204;
count__30156_31185 = G__31205;
i__30157_31186 = G__31206;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_31169);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_31169);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__31207 = seq__30125_31160;
var G__31208 = chunk__30126_31161;
var G__31209 = count__30127_31162;
var G__31210 = (i__30128_31163 + (1));
seq__30125_31160 = G__31207;
chunk__30126_31161 = G__31208;
count__30127_31162 = G__31209;
i__30128_31163 = G__31210;
continue;
} else {
var temp__5735__auto___31212 = cljs.core.seq(seq__30125_31160);
if(temp__5735__auto___31212){
var seq__30125_31213__$1 = temp__5735__auto___31212;
if(cljs.core.chunked_seq_QMARK_(seq__30125_31213__$1)){
var c__4556__auto___31214 = cljs.core.chunk_first(seq__30125_31213__$1);
var G__31215 = cljs.core.chunk_rest(seq__30125_31213__$1);
var G__31216 = c__4556__auto___31214;
var G__31217 = cljs.core.count(c__4556__auto___31214);
var G__31218 = (0);
seq__30125_31160 = G__31215;
chunk__30126_31161 = G__31216;
count__30127_31162 = G__31217;
i__30128_31163 = G__31218;
continue;
} else {
var map__30158_31220 = cljs.core.first(seq__30125_31213__$1);
var map__30158_31221__$1 = (((((!((map__30158_31220 == null))))?(((((map__30158_31220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30158_31220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30158_31220):map__30158_31220);
var ts_31222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30158_31221__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__30159_31223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30158_31221__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__30159_31224__$1 = (((((!((map__30159_31223 == null))))?(((((map__30159_31223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30159_31223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30159_31223):map__30159_31223);
var then_31225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30159_31224__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__30165_31227 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_31222));
var chunk__30166_31228 = null;
var count__30167_31229 = (0);
var i__30168_31230 = (0);
while(true){
if((i__30168_31230 < count__30167_31229)){
var test_31231 = chunk__30166_31228.cljs$core$IIndexed$_nth$arity$2(null,i__30168_31230);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_31231,":");


var G__31232 = seq__30165_31227;
var G__31233 = chunk__30166_31228;
var G__31234 = count__30167_31229;
var G__31235 = (i__30168_31230 + (1));
seq__30165_31227 = G__31232;
chunk__30166_31228 = G__31233;
count__30167_31229 = G__31234;
i__30168_31230 = G__31235;
continue;
} else {
var temp__5735__auto___31236__$1 = cljs.core.seq(seq__30165_31227);
if(temp__5735__auto___31236__$1){
var seq__30165_31237__$1 = temp__5735__auto___31236__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30165_31237__$1)){
var c__4556__auto___31238 = cljs.core.chunk_first(seq__30165_31237__$1);
var G__31239 = cljs.core.chunk_rest(seq__30165_31237__$1);
var G__31240 = c__4556__auto___31238;
var G__31241 = cljs.core.count(c__4556__auto___31238);
var G__31242 = (0);
seq__30165_31227 = G__31239;
chunk__30166_31228 = G__31240;
count__30167_31229 = G__31241;
i__30168_31230 = G__31242;
continue;
} else {
var test_31243 = cljs.core.first(seq__30165_31237__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_31243,":");


var G__31244 = cljs.core.next(seq__30165_31237__$1);
var G__31245 = null;
var G__31246 = (0);
var G__31247 = (0);
seq__30165_31227 = G__31244;
chunk__30166_31228 = G__31245;
count__30167_31229 = G__31246;
i__30168_31230 = G__31247;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_31225);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_31225);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__31249 = cljs.core.next(seq__30125_31213__$1);
var G__31250 = null;
var G__31251 = (0);
var G__31252 = (0);
seq__30125_31160 = G__31249;
chunk__30126_31161 = G__31250;
count__30127_31162 = G__31251;
i__30128_31163 = G__31252;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",default$);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(default$);
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",gs,";})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__30170){
var map__30171 = p__30170;
var map__30171__$1 = (((((!((map__30171 == null))))?(((((map__30171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30171):map__30171);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30171__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30171__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__30183 = env;
var G__30184 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__30183,G__30184) : cljs.compiler.resolve_type.call(null,G__30183,G__30184));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__30185 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30185,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30185,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__30180_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__30180_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__30180_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__30188 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__30188,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__30188;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__30191 = env;
var G__30192 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__30191,G__30192) : cljs.compiler.resolve_type.call(null,G__30191,G__30192));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30193_SHARP_){
return cljs.compiler.resolve_type(env,p1__30193_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__30206 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__30207 = cljs.core.seq(vec__30206);
var first__30208 = cljs.core.first(seq__30207);
var seq__30207__$1 = cljs.core.next(seq__30207);
var p = first__30208;
var first__30208__$1 = cljs.core.first(seq__30207__$1);
var seq__30207__$2 = cljs.core.next(seq__30207__$1);
var ts = first__30208__$1;
var first__30208__$2 = cljs.core.first(seq__30207__$2);
var seq__30207__$3 = cljs.core.next(seq__30207__$2);
var n = first__30208__$2;
var xs = seq__30207__$3;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__30213 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__30214 = cljs.core.seq(vec__30213);
var first__30215 = cljs.core.first(seq__30214);
var seq__30214__$1 = cljs.core.next(seq__30214);
var p = first__30215;
var first__30215__$1 = cljs.core.first(seq__30214__$1);
var seq__30214__$2 = cljs.core.next(seq__30214__$1);
var ts = first__30215__$1;
var xs = seq__30214__$2;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__30217 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__30216 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__30216.cljs$core$IFn$_invoke$arity$1 ? fexpr__30216.cljs$core$IFn$_invoke$arity$1(G__30217) : fexpr__30216.call(null,G__30217));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__30220 = arguments.length;
switch (G__30220) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__30228 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30218_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__30218_SHARP_);
} else {
return p1__30218_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__30229 = cljs.core.seq(vec__30228);
var first__30230 = cljs.core.first(seq__30229);
var seq__30229__$1 = cljs.core.next(seq__30229);
var x = first__30230;
var ys = seq__30229__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__30231 = cljs.core.seq(ys);
var chunk__30232 = null;
var count__30233 = (0);
var i__30234 = (0);
while(true){
if((i__30234 < count__30233)){
var next_line = chunk__30232.cljs$core$IIndexed$_nth$arity$2(null,i__30234);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__31301 = seq__30231;
var G__31302 = chunk__30232;
var G__31303 = count__30233;
var G__31304 = (i__30234 + (1));
seq__30231 = G__31301;
chunk__30232 = G__31302;
count__30233 = G__31303;
i__30234 = G__31304;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30231);
if(temp__5735__auto__){
var seq__30231__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30231__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__30231__$1);
var G__31309 = cljs.core.chunk_rest(seq__30231__$1);
var G__31310 = c__4556__auto__;
var G__31311 = cljs.core.count(c__4556__auto__);
var G__31312 = (0);
seq__30231 = G__31309;
chunk__30232 = G__31310;
count__30233 = G__31311;
i__30234 = G__31312;
continue;
} else {
var next_line = cljs.core.first(seq__30231__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__31313 = cljs.core.next(seq__30231__$1);
var G__31314 = null;
var G__31315 = (0);
var G__31316 = (0);
seq__30231 = G__31313;
chunk__30232 = G__31314;
count__30233 = G__31315;
i__30234 = G__31316;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

var seq__30236_31317 = cljs.core.seq(docs__$2);
var chunk__30237_31318 = null;
var count__30238_31319 = (0);
var i__30239_31320 = (0);
while(true){
if((i__30239_31320 < count__30238_31319)){
var e_31323 = chunk__30237_31318.cljs$core$IIndexed$_nth$arity$2(null,i__30239_31320);
if(cljs.core.truth_(e_31323)){
print_comment_lines(e_31323);
} else {
}


var G__31324 = seq__30236_31317;
var G__31325 = chunk__30237_31318;
var G__31326 = count__30238_31319;
var G__31327 = (i__30239_31320 + (1));
seq__30236_31317 = G__31324;
chunk__30237_31318 = G__31325;
count__30238_31319 = G__31326;
i__30239_31320 = G__31327;
continue;
} else {
var temp__5735__auto___31329 = cljs.core.seq(seq__30236_31317);
if(temp__5735__auto___31329){
var seq__30236_31330__$1 = temp__5735__auto___31329;
if(cljs.core.chunked_seq_QMARK_(seq__30236_31330__$1)){
var c__4556__auto___31331 = cljs.core.chunk_first(seq__30236_31330__$1);
var G__31332 = cljs.core.chunk_rest(seq__30236_31330__$1);
var G__31333 = c__4556__auto___31331;
var G__31334 = cljs.core.count(c__4556__auto___31331);
var G__31335 = (0);
seq__30236_31317 = G__31332;
chunk__30237_31318 = G__31333;
count__30238_31319 = G__31334;
i__30239_31320 = G__31335;
continue;
} else {
var e_31336 = cljs.core.first(seq__30236_31330__$1);
if(cljs.core.truth_(e_31336)){
print_comment_lines(e_31336);
} else {
}


var G__31337 = cljs.core.next(seq__30236_31330__$1);
var G__31338 = null;
var G__31339 = (0);
var G__31340 = (0);
seq__30236_31317 = G__31337;
chunk__30237_31318 = G__31338;
count__30238_31319 = G__31339;
i__30239_31320 = G__31340;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4115__auto__ = cljs.core.some((function (p1__30256_SHARP_){
return goog.string.startsWith(p1__30256_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = opts;
if(cljs.core.truth_(and__4115__auto____$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478))){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_(define)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return false;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__30261){
var map__30262 = p__30261;
var map__30262__$1 = (((((!((map__30262 == null))))?(((((map__30262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30262):map__30262);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30262__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30262__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30262__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30262__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30262__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30262__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30262__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30262__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30262__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30262__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4126__auto__ = init;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)], 0)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(" = ",(function (){var temp__5733__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5733__auto__)){
var define = temp__5733__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("; return (");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");})()");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(")");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return test;
} else {
return and__4115__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__30268){
var map__30269 = p__30268;
var map__30269__$1 = (((((!((map__30269 == null))))?(((((map__30269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30269):map__30269);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30269__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30269__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30269__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__30271_31378 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__30272_31379 = null;
var count__30273_31380 = (0);
var i__30274_31381 = (0);
while(true){
if((i__30274_31381 < count__30273_31380)){
var vec__30283_31382 = chunk__30272_31379.cljs$core$IIndexed$_nth$arity$2(null,i__30274_31381);
var i_31383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30283_31382,(0),null);
var param_31384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30283_31382,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_31384);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__31385 = seq__30271_31378;
var G__31386 = chunk__30272_31379;
var G__31387 = count__30273_31380;
var G__31388 = (i__30274_31381 + (1));
seq__30271_31378 = G__31385;
chunk__30272_31379 = G__31386;
count__30273_31380 = G__31387;
i__30274_31381 = G__31388;
continue;
} else {
var temp__5735__auto___31389 = cljs.core.seq(seq__30271_31378);
if(temp__5735__auto___31389){
var seq__30271_31390__$1 = temp__5735__auto___31389;
if(cljs.core.chunked_seq_QMARK_(seq__30271_31390__$1)){
var c__4556__auto___31391 = cljs.core.chunk_first(seq__30271_31390__$1);
var G__31392 = cljs.core.chunk_rest(seq__30271_31390__$1);
var G__31393 = c__4556__auto___31391;
var G__31394 = cljs.core.count(c__4556__auto___31391);
var G__31395 = (0);
seq__30271_31378 = G__31392;
chunk__30272_31379 = G__31393;
count__30273_31380 = G__31394;
i__30274_31381 = G__31395;
continue;
} else {
var vec__30287_31396 = cljs.core.first(seq__30271_31390__$1);
var i_31397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30287_31396,(0),null);
var param_31398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30287_31396,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_31398);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__31399 = cljs.core.next(seq__30271_31390__$1);
var G__31400 = null;
var G__31401 = (0);
var G__31402 = (0);
seq__30271_31378 = G__31399;
chunk__30272_31379 = G__31400;
count__30273_31380 = G__31401;
i__30274_31381 = G__31402;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.first(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.rest(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__30291_31403 = cljs.core.seq(params);
var chunk__30292_31404 = null;
var count__30293_31405 = (0);
var i__30294_31406 = (0);
while(true){
if((i__30294_31406 < count__30293_31405)){
var param_31407 = chunk__30292_31404.cljs$core$IIndexed$_nth$arity$2(null,i__30294_31406);
cljs.compiler.emit(param_31407);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_31407,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__31408 = seq__30291_31403;
var G__31409 = chunk__30292_31404;
var G__31410 = count__30293_31405;
var G__31411 = (i__30294_31406 + (1));
seq__30291_31403 = G__31408;
chunk__30292_31404 = G__31409;
count__30293_31405 = G__31410;
i__30294_31406 = G__31411;
continue;
} else {
var temp__5735__auto___31412 = cljs.core.seq(seq__30291_31403);
if(temp__5735__auto___31412){
var seq__30291_31414__$1 = temp__5735__auto___31412;
if(cljs.core.chunked_seq_QMARK_(seq__30291_31414__$1)){
var c__4556__auto___31416 = cljs.core.chunk_first(seq__30291_31414__$1);
var G__31417 = cljs.core.chunk_rest(seq__30291_31414__$1);
var G__31418 = c__4556__auto___31416;
var G__31419 = cljs.core.count(c__4556__auto___31416);
var G__31420 = (0);
seq__30291_31403 = G__31417;
chunk__30292_31404 = G__31418;
count__30293_31405 = G__31419;
i__30294_31406 = G__31420;
continue;
} else {
var param_31421 = cljs.core.first(seq__30291_31414__$1);
cljs.compiler.emit(param_31421);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_31421,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__31422 = cljs.core.next(seq__30291_31414__$1);
var G__31423 = null;
var G__31424 = (0);
var G__31425 = (0);
seq__30291_31403 = G__31422;
chunk__30292_31404 = G__31423;
count__30293_31405 = G__31424;
i__30294_31406 = G__31425;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.seq(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__30297_31426 = cljs.core.seq(params);
var chunk__30298_31427 = null;
var count__30299_31428 = (0);
var i__30300_31429 = (0);
while(true){
if((i__30300_31429 < count__30299_31428)){
var param_31430 = chunk__30298_31427.cljs$core$IIndexed$_nth$arity$2(null,i__30300_31429);
cljs.compiler.emit(param_31430);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_31430,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__31431 = seq__30297_31426;
var G__31432 = chunk__30298_31427;
var G__31433 = count__30299_31428;
var G__31434 = (i__30300_31429 + (1));
seq__30297_31426 = G__31431;
chunk__30298_31427 = G__31432;
count__30299_31428 = G__31433;
i__30300_31429 = G__31434;
continue;
} else {
var temp__5735__auto___31435 = cljs.core.seq(seq__30297_31426);
if(temp__5735__auto___31435){
var seq__30297_31437__$1 = temp__5735__auto___31435;
if(cljs.core.chunked_seq_QMARK_(seq__30297_31437__$1)){
var c__4556__auto___31438 = cljs.core.chunk_first(seq__30297_31437__$1);
var G__31439 = cljs.core.chunk_rest(seq__30297_31437__$1);
var G__31440 = c__4556__auto___31438;
var G__31441 = cljs.core.count(c__4556__auto___31438);
var G__31442 = (0);
seq__30297_31426 = G__31439;
chunk__30298_31427 = G__31440;
count__30299_31428 = G__31441;
i__30300_31429 = G__31442;
continue;
} else {
var param_31443 = cljs.core.first(seq__30297_31437__$1);
cljs.compiler.emit(param_31443);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_31443,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__31444 = cljs.core.next(seq__30297_31437__$1);
var G__31445 = null;
var G__31446 = (0);
var G__31447 = (0);
seq__30297_31426 = G__31444;
chunk__30298_31427 = G__31445;
count__30299_31428 = G__31446;
i__30300_31429 = G__31447;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__30304 = cljs.core.seq(params);
var chunk__30305 = null;
var count__30306 = (0);
var i__30307 = (0);
while(true){
if((i__30307 < count__30306)){
var param = chunk__30305.cljs$core$IIndexed$_nth$arity$2(null,i__30307);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__31448 = seq__30304;
var G__31449 = chunk__30305;
var G__31450 = count__30306;
var G__31451 = (i__30307 + (1));
seq__30304 = G__31448;
chunk__30305 = G__31449;
count__30306 = G__31450;
i__30307 = G__31451;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30304);
if(temp__5735__auto__){
var seq__30304__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30304__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__30304__$1);
var G__31452 = cljs.core.chunk_rest(seq__30304__$1);
var G__31453 = c__4556__auto__;
var G__31454 = cljs.core.count(c__4556__auto__);
var G__31455 = (0);
seq__30304 = G__31452;
chunk__30305 = G__31453;
count__30306 = G__31454;
i__30307 = G__31455;
continue;
} else {
var param = cljs.core.first(seq__30304__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__31456 = cljs.core.next(seq__30304__$1);
var G__31457 = null;
var G__31458 = (0);
var G__31459 = (0);
seq__30304 = G__31456;
chunk__30305 = G__31457;
count__30306 = G__31458;
i__30307 = G__31459;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__30317){
var map__30318 = p__30317;
var map__30318__$1 = (((((!((map__30318 == null))))?(((((map__30318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30318):map__30318);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30318__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30318__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30318__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30318__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30318__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30318__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__29850__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"(");

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__30321){
var map__30322 = p__30321;
var map__30322__$1 = (((((!((map__30322 == null))))?(((((map__30322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30322):map__30322);
var f = map__30322__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30322__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30322__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30322__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30322__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30322__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30322__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30322__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30322__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__29850__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_31462__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_31463 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_31462__$1);
var delegate_name_31464 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_31463),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_31464," = function (");

var seq__30326_31465 = cljs.core.seq(params);
var chunk__30327_31466 = null;
var count__30328_31467 = (0);
var i__30329_31468 = (0);
while(true){
if((i__30329_31468 < count__30328_31467)){
var param_31469 = chunk__30327_31466.cljs$core$IIndexed$_nth$arity$2(null,i__30329_31468);
cljs.compiler.emit(param_31469);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_31469,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__31470 = seq__30326_31465;
var G__31471 = chunk__30327_31466;
var G__31472 = count__30328_31467;
var G__31473 = (i__30329_31468 + (1));
seq__30326_31465 = G__31470;
chunk__30327_31466 = G__31471;
count__30328_31467 = G__31472;
i__30329_31468 = G__31473;
continue;
} else {
var temp__5735__auto___31474 = cljs.core.seq(seq__30326_31465);
if(temp__5735__auto___31474){
var seq__30326_31475__$1 = temp__5735__auto___31474;
if(cljs.core.chunked_seq_QMARK_(seq__30326_31475__$1)){
var c__4556__auto___31476 = cljs.core.chunk_first(seq__30326_31475__$1);
var G__31477 = cljs.core.chunk_rest(seq__30326_31475__$1);
var G__31478 = c__4556__auto___31476;
var G__31479 = cljs.core.count(c__4556__auto___31476);
var G__31480 = (0);
seq__30326_31465 = G__31477;
chunk__30327_31466 = G__31478;
count__30328_31467 = G__31479;
i__30329_31468 = G__31480;
continue;
} else {
var param_31481 = cljs.core.first(seq__30326_31475__$1);
cljs.compiler.emit(param_31481);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_31481,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__31482 = cljs.core.next(seq__30326_31475__$1);
var G__31483 = null;
var G__31484 = (0);
var G__31485 = (0);
seq__30326_31465 = G__31482;
chunk__30327_31466 = G__31483;
count__30328_31467 = G__31484;
i__30329_31468 = G__31485;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_31463," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_31510 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_31510,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_31464,".call(this,");

var seq__30331_31511 = cljs.core.seq(params);
var chunk__30332_31512 = null;
var count__30333_31513 = (0);
var i__30334_31514 = (0);
while(true){
if((i__30334_31514 < count__30333_31513)){
var param_31516 = chunk__30332_31512.cljs$core$IIndexed$_nth$arity$2(null,i__30334_31514);
cljs.compiler.emit(param_31516);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_31516,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__31517 = seq__30331_31511;
var G__31518 = chunk__30332_31512;
var G__31519 = count__30333_31513;
var G__31520 = (i__30334_31514 + (1));
seq__30331_31511 = G__31517;
chunk__30332_31512 = G__31518;
count__30333_31513 = G__31519;
i__30334_31514 = G__31520;
continue;
} else {
var temp__5735__auto___31521 = cljs.core.seq(seq__30331_31511);
if(temp__5735__auto___31521){
var seq__30331_31522__$1 = temp__5735__auto___31521;
if(cljs.core.chunked_seq_QMARK_(seq__30331_31522__$1)){
var c__4556__auto___31527 = cljs.core.chunk_first(seq__30331_31522__$1);
var G__31528 = cljs.core.chunk_rest(seq__30331_31522__$1);
var G__31529 = c__4556__auto___31527;
var G__31530 = cljs.core.count(c__4556__auto___31527);
var G__31531 = (0);
seq__30331_31511 = G__31528;
chunk__30332_31512 = G__31529;
count__30333_31513 = G__31530;
i__30334_31514 = G__31531;
continue;
} else {
var param_31533 = cljs.core.first(seq__30331_31522__$1);
cljs.compiler.emit(param_31533);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_31533,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__31535 = cljs.core.next(seq__30331_31522__$1);
var G__31536 = null;
var G__31537 = (0);
var G__31538 = (0);
seq__30331_31511 = G__31535;
chunk__30332_31512 = G__31536;
count__30333_31513 = G__31537;
i__30334_31514 = G__31538;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_31463,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_31463,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_31462__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_31463,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_31464,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_31463,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__30340){
var map__30341 = p__30340;
var map__30341__$1 = (((((!((map__30341 == null))))?(((((map__30341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30341):map__30341);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30341__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30341__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30341__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30341__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30341__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30341__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30341__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30341__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30336_SHARP_){
var and__4115__auto__ = p1__30336_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__30336_SHARP_));
} else {
return and__4115__auto__;
}
}),recur_frames)], 0));
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(recur_params,(cljs.core.truth_((function (){var or__4126__auto__ = in_loop;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.seq(recur_params);
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)):null))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_31549__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_31550 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_31549__$1);
var maxparams_31551 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_31552 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_31550),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_31553 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__30337_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__30337_SHARP_)));
}),cljs.core.seq(mmap_31552));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_31550," = null;");

var seq__30345_31565 = cljs.core.seq(ms_31553);
var chunk__30346_31566 = null;
var count__30347_31567 = (0);
var i__30348_31568 = (0);
while(true){
if((i__30348_31568 < count__30347_31567)){
var vec__30358_31569 = chunk__30346_31566.cljs$core$IIndexed$_nth$arity$2(null,i__30348_31568);
var n_31570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30358_31569,(0),null);
var meth_31571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30358_31569,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_31570," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_31571))){
cljs.compiler.emit_variadic_fn_method(meth_31571);
} else {
cljs.compiler.emit_fn_method(meth_31571);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__31572 = seq__30345_31565;
var G__31573 = chunk__30346_31566;
var G__31574 = count__30347_31567;
var G__31575 = (i__30348_31568 + (1));
seq__30345_31565 = G__31572;
chunk__30346_31566 = G__31573;
count__30347_31567 = G__31574;
i__30348_31568 = G__31575;
continue;
} else {
var temp__5735__auto___31576 = cljs.core.seq(seq__30345_31565);
if(temp__5735__auto___31576){
var seq__30345_31577__$1 = temp__5735__auto___31576;
if(cljs.core.chunked_seq_QMARK_(seq__30345_31577__$1)){
var c__4556__auto___31578 = cljs.core.chunk_first(seq__30345_31577__$1);
var G__31579 = cljs.core.chunk_rest(seq__30345_31577__$1);
var G__31580 = c__4556__auto___31578;
var G__31581 = cljs.core.count(c__4556__auto___31578);
var G__31582 = (0);
seq__30345_31565 = G__31579;
chunk__30346_31566 = G__31580;
count__30347_31567 = G__31581;
i__30348_31568 = G__31582;
continue;
} else {
var vec__30364_31583 = cljs.core.first(seq__30345_31577__$1);
var n_31584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30364_31583,(0),null);
var meth_31585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30364_31583,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_31584," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_31585))){
cljs.compiler.emit_variadic_fn_method(meth_31585);
} else {
cljs.compiler.emit_fn_method(meth_31585);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__31586 = cljs.core.next(seq__30345_31577__$1);
var G__31587 = null;
var G__31588 = (0);
var G__31589 = (0);
seq__30345_31565 = G__31586;
chunk__30346_31566 = G__31587;
count__30347_31567 = G__31588;
i__30348_31568 = G__31589;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_31550," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_31551),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_31551)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_31551));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__30368_31590 = cljs.core.seq(ms_31553);
var chunk__30369_31591 = null;
var count__30370_31592 = (0);
var i__30371_31593 = (0);
while(true){
if((i__30371_31593 < count__30370_31592)){
var vec__30382_31594 = chunk__30369_31591.cljs$core$IIndexed$_nth$arity$2(null,i__30371_31593);
var n_31595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30382_31594,(0),null);
var meth_31596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30382_31594,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_31596))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_31597 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_31597," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_31598 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_31597," = new cljs.core.IndexedSeq(",a_31598,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_31595,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_31551)),(((cljs.core.count(maxparams_31551) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_31597,");"], 0));
} else {
var pcnt_31599 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_31596));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_31599,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_31595,".call(this",(((pcnt_31599 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_31599,maxparams_31551)),null,(1),null)),(2),null))),");");
}


var G__31600 = seq__30368_31590;
var G__31601 = chunk__30369_31591;
var G__31602 = count__30370_31592;
var G__31603 = (i__30371_31593 + (1));
seq__30368_31590 = G__31600;
chunk__30369_31591 = G__31601;
count__30370_31592 = G__31602;
i__30371_31593 = G__31603;
continue;
} else {
var temp__5735__auto___31604 = cljs.core.seq(seq__30368_31590);
if(temp__5735__auto___31604){
var seq__30368_31605__$1 = temp__5735__auto___31604;
if(cljs.core.chunked_seq_QMARK_(seq__30368_31605__$1)){
var c__4556__auto___31606 = cljs.core.chunk_first(seq__30368_31605__$1);
var G__31607 = cljs.core.chunk_rest(seq__30368_31605__$1);
var G__31608 = c__4556__auto___31606;
var G__31609 = cljs.core.count(c__4556__auto___31606);
var G__31610 = (0);
seq__30368_31590 = G__31607;
chunk__30369_31591 = G__31608;
count__30370_31592 = G__31609;
i__30371_31593 = G__31610;
continue;
} else {
var vec__30386_31611 = cljs.core.first(seq__30368_31605__$1);
var n_31612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30386_31611,(0),null);
var meth_31613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30386_31611,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_31613))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_31614 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_31614," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_31616 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_31614," = new cljs.core.IndexedSeq(",a_31616,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_31612,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_31551)),(((cljs.core.count(maxparams_31551) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_31614,");"], 0));
} else {
var pcnt_31619 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_31613));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_31619,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_31612,".call(this",(((pcnt_31619 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_31619,maxparams_31551)),null,(1),null)),(2),null))),");");
}


var G__31621 = cljs.core.next(seq__30368_31605__$1);
var G__31622 = null;
var G__31623 = (0);
var G__31624 = (0);
seq__30368_31590 = G__31621;
chunk__30369_31591 = G__31622;
count__30370_31592 = G__31623;
i__30371_31593 = G__31624;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_31625 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_31553)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_31625,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_31550,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_31550,".cljs$lang$applyTo = ",cljs.core.some((function (p1__30339_SHARP_){
var vec__30389 = p1__30339_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30389,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30389,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_31553),".cljs$lang$applyTo;");
} else {
}

var seq__30392_31648 = cljs.core.seq(ms_31553);
var chunk__30393_31649 = null;
var count__30394_31650 = (0);
var i__30395_31651 = (0);
while(true){
if((i__30395_31651 < count__30394_31650)){
var vec__30403_31652 = chunk__30393_31649.cljs$core$IIndexed$_nth$arity$2(null,i__30395_31651);
var n_31653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30403_31652,(0),null);
var meth_31654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30403_31652,(1),null);
var c_31655 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_31654));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_31654))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_31550,".cljs$core$IFn$_invoke$arity$variadic = ",n_31653,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_31550,".cljs$core$IFn$_invoke$arity$",c_31655," = ",n_31653,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__31656 = seq__30392_31648;
var G__31657 = chunk__30393_31649;
var G__31658 = count__30394_31650;
var G__31659 = (i__30395_31651 + (1));
seq__30392_31648 = G__31656;
chunk__30393_31649 = G__31657;
count__30394_31650 = G__31658;
i__30395_31651 = G__31659;
continue;
} else {
var temp__5735__auto___31660 = cljs.core.seq(seq__30392_31648);
if(temp__5735__auto___31660){
var seq__30392_31661__$1 = temp__5735__auto___31660;
if(cljs.core.chunked_seq_QMARK_(seq__30392_31661__$1)){
var c__4556__auto___31662 = cljs.core.chunk_first(seq__30392_31661__$1);
var G__31663 = cljs.core.chunk_rest(seq__30392_31661__$1);
var G__31664 = c__4556__auto___31662;
var G__31665 = cljs.core.count(c__4556__auto___31662);
var G__31666 = (0);
seq__30392_31648 = G__31663;
chunk__30393_31649 = G__31664;
count__30394_31650 = G__31665;
i__30395_31651 = G__31666;
continue;
} else {
var vec__30407_31667 = cljs.core.first(seq__30392_31661__$1);
var n_31668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30407_31667,(0),null);
var meth_31669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30407_31667,(1),null);
var c_31670 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_31669));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_31669))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_31550,".cljs$core$IFn$_invoke$arity$variadic = ",n_31668,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_31550,".cljs$core$IFn$_invoke$arity$",c_31670," = ",n_31668,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__31671 = cljs.core.next(seq__30392_31661__$1);
var G__31672 = null;
var G__31673 = (0);
var G__31674 = (0);
seq__30392_31648 = G__31671;
chunk__30393_31649 = G__31672;
count__30394_31650 = G__31673;
i__30395_31651 = G__31674;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_31550,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__30411){
var map__30412 = p__30411;
var map__30412__$1 = (((((!((map__30412 == null))))?(((((map__30412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30412):map__30412);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30412__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30412__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30412__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__30414_31675 = cljs.core.seq(statements);
var chunk__30415_31676 = null;
var count__30416_31677 = (0);
var i__30417_31678 = (0);
while(true){
if((i__30417_31678 < count__30416_31677)){
var s_31679 = chunk__30415_31676.cljs$core$IIndexed$_nth$arity$2(null,i__30417_31678);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_31679);


var G__31680 = seq__30414_31675;
var G__31681 = chunk__30415_31676;
var G__31682 = count__30416_31677;
var G__31683 = (i__30417_31678 + (1));
seq__30414_31675 = G__31680;
chunk__30415_31676 = G__31681;
count__30416_31677 = G__31682;
i__30417_31678 = G__31683;
continue;
} else {
var temp__5735__auto___31684 = cljs.core.seq(seq__30414_31675);
if(temp__5735__auto___31684){
var seq__30414_31685__$1 = temp__5735__auto___31684;
if(cljs.core.chunked_seq_QMARK_(seq__30414_31685__$1)){
var c__4556__auto___31686 = cljs.core.chunk_first(seq__30414_31685__$1);
var G__31687 = cljs.core.chunk_rest(seq__30414_31685__$1);
var G__31688 = c__4556__auto___31686;
var G__31689 = cljs.core.count(c__4556__auto___31686);
var G__31690 = (0);
seq__30414_31675 = G__31687;
chunk__30415_31676 = G__31688;
count__30416_31677 = G__31689;
i__30417_31678 = G__31690;
continue;
} else {
var s_31692 = cljs.core.first(seq__30414_31685__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_31692);


var G__31702 = cljs.core.next(seq__30414_31685__$1);
var G__31703 = null;
var G__31704 = (0);
var G__31705 = (0);
seq__30414_31675 = G__31702;
chunk__30415_31676 = G__31703;
count__30416_31677 = G__31704;
i__30417_31678 = G__31705;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__30420){
var map__30421 = p__30420;
var map__30421__$1 = (((((!((map__30421 == null))))?(((((map__30421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30421):map__30421);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30421__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30421__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30421__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30421__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30421__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote(finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__30424,is_loop){
var map__30425 = p__30424;
var map__30425__$1 = (((((!((map__30425 == null))))?(((((map__30425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30425):map__30425);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30425__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30425__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30425__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__30427_31714 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__30428_31715 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__30428_31715);

try{var seq__30429_31718 = cljs.core.seq(bindings);
var chunk__30430_31719 = null;
var count__30431_31720 = (0);
var i__30432_31721 = (0);
while(true){
if((i__30432_31721 < count__30431_31720)){
var map__30438_31722 = chunk__30430_31719.cljs$core$IIndexed$_nth$arity$2(null,i__30432_31721);
var map__30438_31723__$1 = (((((!((map__30438_31722 == null))))?(((((map__30438_31722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30438_31722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30438_31722):map__30438_31722);
var binding_31724 = map__30438_31723__$1;
var init_31725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30438_31723__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_31724);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_31725,";");


var G__31726 = seq__30429_31718;
var G__31727 = chunk__30430_31719;
var G__31728 = count__30431_31720;
var G__31729 = (i__30432_31721 + (1));
seq__30429_31718 = G__31726;
chunk__30430_31719 = G__31727;
count__30431_31720 = G__31728;
i__30432_31721 = G__31729;
continue;
} else {
var temp__5735__auto___31730 = cljs.core.seq(seq__30429_31718);
if(temp__5735__auto___31730){
var seq__30429_31731__$1 = temp__5735__auto___31730;
if(cljs.core.chunked_seq_QMARK_(seq__30429_31731__$1)){
var c__4556__auto___31732 = cljs.core.chunk_first(seq__30429_31731__$1);
var G__31733 = cljs.core.chunk_rest(seq__30429_31731__$1);
var G__31734 = c__4556__auto___31732;
var G__31735 = cljs.core.count(c__4556__auto___31732);
var G__31736 = (0);
seq__30429_31718 = G__31733;
chunk__30430_31719 = G__31734;
count__30431_31720 = G__31735;
i__30432_31721 = G__31736;
continue;
} else {
var map__30440_31737 = cljs.core.first(seq__30429_31731__$1);
var map__30440_31738__$1 = (((((!((map__30440_31737 == null))))?(((((map__30440_31737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30440_31737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30440_31737):map__30440_31737);
var binding_31739 = map__30440_31738__$1;
var init_31740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30440_31738__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_31739);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_31740,";");


var G__31741 = cljs.core.next(seq__30429_31731__$1);
var G__31742 = null;
var G__31743 = (0);
var G__31744 = (0);
seq__30429_31718 = G__31741;
chunk__30430_31719 = G__31742;
count__30431_31720 = G__31743;
i__30432_31721 = G__31744;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__30427_31714);
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__30446){
var map__30448 = p__30446;
var map__30448__$1 = (((((!((map__30448 == null))))?(((((map__30448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30448):map__30448);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30448__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30448__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30448__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___31748 = cljs.core.count(exprs);
var i_31749 = (0);
while(true){
if((i_31749 < n__4613__auto___31748)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_31749) : temps.call(null,i_31749))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_31749) : exprs.call(null,i_31749)),";");

var G__31751 = (i_31749 + (1));
i_31749 = G__31751;
continue;
} else {
}
break;
}

var n__4613__auto___31752 = cljs.core.count(exprs);
var i_31753 = (0);
while(true){
if((i_31753 < n__4613__auto___31752)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_31753) : params.call(null,i_31753)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_31753) : temps.call(null,i_31753)),";");

var G__31754 = (i_31753 + (1));
i_31753 = G__31754;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__30450){
var map__30451 = p__30450;
var map__30451__$1 = (((((!((map__30451 == null))))?(((((map__30451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30451):map__30451);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30451__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30451__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30451__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__30454_31779 = cljs.core.seq(bindings);
var chunk__30455_31780 = null;
var count__30456_31781 = (0);
var i__30457_31782 = (0);
while(true){
if((i__30457_31782 < count__30456_31781)){
var map__30463_31783 = chunk__30455_31780.cljs$core$IIndexed$_nth$arity$2(null,i__30457_31782);
var map__30463_31784__$1 = (((((!((map__30463_31783 == null))))?(((((map__30463_31783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30463_31783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30463_31783):map__30463_31783);
var binding_31785 = map__30463_31784__$1;
var init_31786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30463_31784__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_31785)," = ",init_31786,";");


var G__31787 = seq__30454_31779;
var G__31788 = chunk__30455_31780;
var G__31789 = count__30456_31781;
var G__31790 = (i__30457_31782 + (1));
seq__30454_31779 = G__31787;
chunk__30455_31780 = G__31788;
count__30456_31781 = G__31789;
i__30457_31782 = G__31790;
continue;
} else {
var temp__5735__auto___31791 = cljs.core.seq(seq__30454_31779);
if(temp__5735__auto___31791){
var seq__30454_31792__$1 = temp__5735__auto___31791;
if(cljs.core.chunked_seq_QMARK_(seq__30454_31792__$1)){
var c__4556__auto___31793 = cljs.core.chunk_first(seq__30454_31792__$1);
var G__31794 = cljs.core.chunk_rest(seq__30454_31792__$1);
var G__31795 = c__4556__auto___31793;
var G__31796 = cljs.core.count(c__4556__auto___31793);
var G__31797 = (0);
seq__30454_31779 = G__31794;
chunk__30455_31780 = G__31795;
count__30456_31781 = G__31796;
i__30457_31782 = G__31797;
continue;
} else {
var map__30466_31798 = cljs.core.first(seq__30454_31792__$1);
var map__30466_31799__$1 = (((((!((map__30466_31798 == null))))?(((((map__30466_31798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30466_31798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30466_31798):map__30466_31798);
var binding_31800 = map__30466_31799__$1;
var init_31801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30466_31799__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_31800)," = ",init_31801,";");


var G__31802 = cljs.core.next(seq__30454_31792__$1);
var G__31803 = null;
var G__31804 = (0);
var G__31805 = (0);
seq__30454_31779 = G__31802;
chunk__30455_31780 = G__31803;
count__30456_31781 = G__31804;
i__30457_31782 = G__31805;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__30471){
var map__30472 = p__30471;
var map__30472__$1 = (((((!((map__30472 == null))))?(((((map__30472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30472):map__30472);
var expr = map__30472__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30472__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30472__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30472__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info))){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return false;
}
} else {
return and__4115__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4115__auto__ = protocol;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tag;
if(cljs.core.truth_(and__4115__auto____$1)){
var or__4126__auto__ = (function (){var and__4115__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = protocol;
if(cljs.core.truth_(and__4115__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto____$2 = (function (){var or__4126__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4115__auto____$2)){
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
if((!(cljs.core.set_QMARK_(tag)))){
if(cljs.core.not((function (){var fexpr__30495 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__30495.cljs$core$IFn$_invoke$arity$1 ? fexpr__30495.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__30495.call(null,tag));
})())){
var temp__5735__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5735__auto__)){
var ps = temp__5735__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return false;
}
} else {
return false;
}
}
} else {
return and__4115__auto____$2;
}
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__30497 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__30497.cljs$core$IFn$_invoke$arity$1 ? fexpr__30497.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__30497.call(null,first_arg_tag));
})())));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag(env,f);
var js_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5735__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5735__auto__)){
var ns_str = temp__5735__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote(f);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__30474 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (arity > mfa);
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__30468_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__30468_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__30469_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__30469_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30474,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30474,(1),null);
var env__29850__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(!(",cljs.core.first(args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("((",cljs.core.first(args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_31827 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_31827,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_31828 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_31828,args)),(((mfa_31828 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_31828,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,"(",cljs.compiler.comma_sep(args),")");
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
var G__30506 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__30505 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__30505.cljs$core$IFn$_invoke$arity$1 ? fexpr__30505.cljs$core$IFn$_invoke$arity$1(G__30506) : fexpr__30505.call(null,G__30506));
} else {
return and__4115__auto__;
}
})())){
var fprop_31829 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_31829," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_31829,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_31829," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_31829,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__30513){
var map__30514 = p__30513;
var map__30514__$1 = (((((!((map__30514 == null))))?(((((map__30514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30514):map__30514);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30514__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30514__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30514__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29850__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__30517){
var map__30518 = p__30517;
var map__30518__$1 = (((((!((map__30518 == null))))?(((((map__30518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30518):map__30518);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30518__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30518__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30518__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29850__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib)," = goog.global",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name((function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.name(lib));
}
})()),/\./))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__30522 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__30522__$1 = (((((!((map__30522 == null))))?(((((map__30522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30522):map__30522);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30522__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30522__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__30523 = options;
var map__30523__$1 = (((((!((map__30523 == null))))?(((((map__30523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30523):map__30523);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30523__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30523__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30523__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__30524 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__30529 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__30529__$1 = (((((!((map__30529 == null))))?(((((map__30529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30529):map__30529);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30529__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30529__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30524,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30524,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__30531_31832 = cljs.core.seq(libs_to_load);
var chunk__30532_31833 = null;
var count__30533_31834 = (0);
var i__30534_31835 = (0);
while(true){
if((i__30534_31835 < count__30533_31834)){
var lib_31836 = chunk__30532_31833.cljs$core$IIndexed$_nth$arity$2(null,i__30534_31835);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_31836)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_31836),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_31836),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_31836),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_31836),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_31836,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_31836),"');");
}

}
}
}


var G__31837 = seq__30531_31832;
var G__31838 = chunk__30532_31833;
var G__31839 = count__30533_31834;
var G__31840 = (i__30534_31835 + (1));
seq__30531_31832 = G__31837;
chunk__30532_31833 = G__31838;
count__30533_31834 = G__31839;
i__30534_31835 = G__31840;
continue;
} else {
var temp__5735__auto___31841 = cljs.core.seq(seq__30531_31832);
if(temp__5735__auto___31841){
var seq__30531_31842__$1 = temp__5735__auto___31841;
if(cljs.core.chunked_seq_QMARK_(seq__30531_31842__$1)){
var c__4556__auto___31843 = cljs.core.chunk_first(seq__30531_31842__$1);
var G__31844 = cljs.core.chunk_rest(seq__30531_31842__$1);
var G__31845 = c__4556__auto___31843;
var G__31846 = cljs.core.count(c__4556__auto___31843);
var G__31847 = (0);
seq__30531_31832 = G__31844;
chunk__30532_31833 = G__31845;
count__30533_31834 = G__31846;
i__30534_31835 = G__31847;
continue;
} else {
var lib_31848 = cljs.core.first(seq__30531_31842__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_31848)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_31848),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_31848),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_31848),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_31848),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_31848,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_31848),"');");
}

}
}
}


var G__31851 = cljs.core.next(seq__30531_31842__$1);
var G__31852 = null;
var G__31853 = (0);
var G__31854 = (0);
seq__30531_31832 = G__31851;
chunk__30532_31833 = G__31852;
count__30533_31834 = G__31853;
i__30534_31835 = G__31854;
continue;
}
} else {
}
}
break;
}

var seq__30552_31855 = cljs.core.seq(node_libs);
var chunk__30553_31856 = null;
var count__30554_31857 = (0);
var i__30555_31858 = (0);
while(true){
if((i__30555_31858 < count__30554_31857)){
var lib_31859 = chunk__30553_31856.cljs$core$IIndexed$_nth$arity$2(null,i__30555_31858);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_31859)," = require('",lib_31859,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__31860 = seq__30552_31855;
var G__31861 = chunk__30553_31856;
var G__31862 = count__30554_31857;
var G__31863 = (i__30555_31858 + (1));
seq__30552_31855 = G__31860;
chunk__30553_31856 = G__31861;
count__30554_31857 = G__31862;
i__30555_31858 = G__31863;
continue;
} else {
var temp__5735__auto___31864 = cljs.core.seq(seq__30552_31855);
if(temp__5735__auto___31864){
var seq__30552_31865__$1 = temp__5735__auto___31864;
if(cljs.core.chunked_seq_QMARK_(seq__30552_31865__$1)){
var c__4556__auto___31866 = cljs.core.chunk_first(seq__30552_31865__$1);
var G__31867 = cljs.core.chunk_rest(seq__30552_31865__$1);
var G__31868 = c__4556__auto___31866;
var G__31869 = cljs.core.count(c__4556__auto___31866);
var G__31870 = (0);
seq__30552_31855 = G__31867;
chunk__30553_31856 = G__31868;
count__30554_31857 = G__31869;
i__30555_31858 = G__31870;
continue;
} else {
var lib_31871 = cljs.core.first(seq__30552_31865__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_31871)," = require('",lib_31871,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__31874 = cljs.core.next(seq__30552_31865__$1);
var G__31875 = null;
var G__31876 = (0);
var G__31877 = (0);
seq__30552_31855 = G__31874;
chunk__30553_31856 = G__31875;
count__30554_31857 = G__31876;
i__30555_31858 = G__31877;
continue;
}
} else {
}
}
break;
}

var seq__30571_31879 = cljs.core.seq(global_exports_libs);
var chunk__30572_31880 = null;
var count__30573_31881 = (0);
var i__30574_31882 = (0);
while(true){
if((i__30574_31882 < count__30573_31881)){
var lib_31883 = chunk__30572_31880.cljs$core$IIndexed$_nth$arity$2(null,i__30574_31882);
var map__30604_31884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_31883));
var map__30604_31885__$1 = (((((!((map__30604_31884 == null))))?(((((map__30604_31884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30604_31884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30604_31884):map__30604_31884);
var global_exports_31886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30604_31885__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_31886,lib_31883);


var G__31887 = seq__30571_31879;
var G__31888 = chunk__30572_31880;
var G__31889 = count__30573_31881;
var G__31890 = (i__30574_31882 + (1));
seq__30571_31879 = G__31887;
chunk__30572_31880 = G__31888;
count__30573_31881 = G__31889;
i__30574_31882 = G__31890;
continue;
} else {
var temp__5735__auto___31891 = cljs.core.seq(seq__30571_31879);
if(temp__5735__auto___31891){
var seq__30571_31892__$1 = temp__5735__auto___31891;
if(cljs.core.chunked_seq_QMARK_(seq__30571_31892__$1)){
var c__4556__auto___31893 = cljs.core.chunk_first(seq__30571_31892__$1);
var G__31894 = cljs.core.chunk_rest(seq__30571_31892__$1);
var G__31895 = c__4556__auto___31893;
var G__31896 = cljs.core.count(c__4556__auto___31893);
var G__31897 = (0);
seq__30571_31879 = G__31894;
chunk__30572_31880 = G__31895;
count__30573_31881 = G__31896;
i__30574_31882 = G__31897;
continue;
} else {
var lib_31898 = cljs.core.first(seq__30571_31892__$1);
var map__30608_31899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_31898));
var map__30608_31900__$1 = (((((!((map__30608_31899 == null))))?(((((map__30608_31899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30608_31899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30608_31899):map__30608_31899);
var global_exports_31901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30608_31900__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_31901,lib_31898);


var G__31902 = cljs.core.next(seq__30571_31892__$1);
var G__31903 = null;
var G__31904 = (0);
var G__31905 = (0);
seq__30571_31879 = G__31902;
chunk__30572_31880 = G__31903;
count__30573_31881 = G__31904;
i__30574_31882 = G__31905;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__30610){
var map__30611 = p__30610;
var map__30611__$1 = (((((!((map__30611 == null))))?(((((map__30611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30611):map__30611);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30611__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30611__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30611__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30611__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30611__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30611__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30611__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__30613){
var map__30614 = p__30613;
var map__30614__$1 = (((((!((map__30614 == null))))?(((((map__30614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30614):map__30614);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30614__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30614__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30614__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30614__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30614__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30614__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30614__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__30617){
var map__30618 = p__30617;
var map__30618__$1 = (((((!((map__30618 == null))))?(((((map__30618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30618):map__30618);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30618__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30618__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30618__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30618__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30618__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__30621_31909 = cljs.core.seq(protocols);
var chunk__30622_31910 = null;
var count__30623_31911 = (0);
var i__30624_31912 = (0);
while(true){
if((i__30624_31912 < count__30623_31911)){
var protocol_31913 = chunk__30622_31910.cljs$core$IIndexed$_nth$arity$2(null,i__30624_31912);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_31913)),"}");


var G__31914 = seq__30621_31909;
var G__31915 = chunk__30622_31910;
var G__31916 = count__30623_31911;
var G__31917 = (i__30624_31912 + (1));
seq__30621_31909 = G__31914;
chunk__30622_31910 = G__31915;
count__30623_31911 = G__31916;
i__30624_31912 = G__31917;
continue;
} else {
var temp__5735__auto___31918 = cljs.core.seq(seq__30621_31909);
if(temp__5735__auto___31918){
var seq__30621_31919__$1 = temp__5735__auto___31918;
if(cljs.core.chunked_seq_QMARK_(seq__30621_31919__$1)){
var c__4556__auto___31920 = cljs.core.chunk_first(seq__30621_31919__$1);
var G__31921 = cljs.core.chunk_rest(seq__30621_31919__$1);
var G__31922 = c__4556__auto___31920;
var G__31923 = cljs.core.count(c__4556__auto___31920);
var G__31924 = (0);
seq__30621_31909 = G__31921;
chunk__30622_31910 = G__31922;
count__30623_31911 = G__31923;
i__30624_31912 = G__31924;
continue;
} else {
var protocol_31925 = cljs.core.first(seq__30621_31919__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_31925)),"}");


var G__31927 = cljs.core.next(seq__30621_31919__$1);
var G__31928 = null;
var G__31929 = (0);
var G__31930 = (0);
seq__30621_31909 = G__31927;
chunk__30622_31910 = G__31928;
count__30623_31911 = G__31929;
i__30624_31912 = G__31930;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__30625_31931 = cljs.core.seq(fields__$1);
var chunk__30626_31932 = null;
var count__30627_31933 = (0);
var i__30628_31934 = (0);
while(true){
if((i__30628_31934 < count__30627_31933)){
var fld_31936 = chunk__30626_31932.cljs$core$IIndexed$_nth$arity$2(null,i__30628_31934);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_31936," = ",fld_31936,";");


var G__31937 = seq__30625_31931;
var G__31938 = chunk__30626_31932;
var G__31939 = count__30627_31933;
var G__31940 = (i__30628_31934 + (1));
seq__30625_31931 = G__31937;
chunk__30626_31932 = G__31938;
count__30627_31933 = G__31939;
i__30628_31934 = G__31940;
continue;
} else {
var temp__5735__auto___31941 = cljs.core.seq(seq__30625_31931);
if(temp__5735__auto___31941){
var seq__30625_31942__$1 = temp__5735__auto___31941;
if(cljs.core.chunked_seq_QMARK_(seq__30625_31942__$1)){
var c__4556__auto___31943 = cljs.core.chunk_first(seq__30625_31942__$1);
var G__31944 = cljs.core.chunk_rest(seq__30625_31942__$1);
var G__31945 = c__4556__auto___31943;
var G__31946 = cljs.core.count(c__4556__auto___31943);
var G__31947 = (0);
seq__30625_31931 = G__31944;
chunk__30626_31932 = G__31945;
count__30627_31933 = G__31946;
i__30628_31934 = G__31947;
continue;
} else {
var fld_31948 = cljs.core.first(seq__30625_31942__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_31948," = ",fld_31948,";");


var G__31949 = cljs.core.next(seq__30625_31942__$1);
var G__31950 = null;
var G__31951 = (0);
var G__31952 = (0);
seq__30625_31931 = G__31949;
chunk__30626_31932 = G__31950;
count__30627_31933 = G__31951;
i__30628_31934 = G__31952;
continue;
}
} else {
}
}
break;
}

var seq__30649_31953 = cljs.core.seq(pmasks);
var chunk__30650_31954 = null;
var count__30651_31955 = (0);
var i__30652_31956 = (0);
while(true){
if((i__30652_31956 < count__30651_31955)){
var vec__30665_31957 = chunk__30650_31954.cljs$core$IIndexed$_nth$arity$2(null,i__30652_31956);
var pno_31958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30665_31957,(0),null);
var pmask_31959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30665_31957,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_31958,"$ = ",pmask_31959,";");


var G__31960 = seq__30649_31953;
var G__31961 = chunk__30650_31954;
var G__31962 = count__30651_31955;
var G__31963 = (i__30652_31956 + (1));
seq__30649_31953 = G__31960;
chunk__30650_31954 = G__31961;
count__30651_31955 = G__31962;
i__30652_31956 = G__31963;
continue;
} else {
var temp__5735__auto___31964 = cljs.core.seq(seq__30649_31953);
if(temp__5735__auto___31964){
var seq__30649_31965__$1 = temp__5735__auto___31964;
if(cljs.core.chunked_seq_QMARK_(seq__30649_31965__$1)){
var c__4556__auto___31966 = cljs.core.chunk_first(seq__30649_31965__$1);
var G__31967 = cljs.core.chunk_rest(seq__30649_31965__$1);
var G__31968 = c__4556__auto___31966;
var G__31969 = cljs.core.count(c__4556__auto___31966);
var G__31970 = (0);
seq__30649_31953 = G__31967;
chunk__30650_31954 = G__31968;
count__30651_31955 = G__31969;
i__30652_31956 = G__31970;
continue;
} else {
var vec__30674_31971 = cljs.core.first(seq__30649_31965__$1);
var pno_31972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30674_31971,(0),null);
var pmask_31973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30674_31971,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_31972,"$ = ",pmask_31973,";");


var G__31974 = cljs.core.next(seq__30649_31965__$1);
var G__31975 = null;
var G__31976 = (0);
var G__31977 = (0);
seq__30649_31953 = G__31974;
chunk__30650_31954 = G__31975;
count__30651_31955 = G__31976;
i__30652_31956 = G__31977;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__30679){
var map__30680 = p__30679;
var map__30680__$1 = (((((!((map__30680 == null))))?(((((map__30680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30680):map__30680);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30680__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30680__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30680__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30680__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30680__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__30683_31990 = cljs.core.seq(protocols);
var chunk__30684_31991 = null;
var count__30685_31992 = (0);
var i__30686_31993 = (0);
while(true){
if((i__30686_31993 < count__30685_31992)){
var protocol_31994 = chunk__30684_31991.cljs$core$IIndexed$_nth$arity$2(null,i__30686_31993);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_31994)),"}");


var G__31995 = seq__30683_31990;
var G__31996 = chunk__30684_31991;
var G__31997 = count__30685_31992;
var G__31998 = (i__30686_31993 + (1));
seq__30683_31990 = G__31995;
chunk__30684_31991 = G__31996;
count__30685_31992 = G__31997;
i__30686_31993 = G__31998;
continue;
} else {
var temp__5735__auto___31999 = cljs.core.seq(seq__30683_31990);
if(temp__5735__auto___31999){
var seq__30683_32000__$1 = temp__5735__auto___31999;
if(cljs.core.chunked_seq_QMARK_(seq__30683_32000__$1)){
var c__4556__auto___32001 = cljs.core.chunk_first(seq__30683_32000__$1);
var G__32003 = cljs.core.chunk_rest(seq__30683_32000__$1);
var G__32004 = c__4556__auto___32001;
var G__32005 = cljs.core.count(c__4556__auto___32001);
var G__32006 = (0);
seq__30683_31990 = G__32003;
chunk__30684_31991 = G__32004;
count__30685_31992 = G__32005;
i__30686_31993 = G__32006;
continue;
} else {
var protocol_32009 = cljs.core.first(seq__30683_32000__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_32009)),"}");


var G__32010 = cljs.core.next(seq__30683_32000__$1);
var G__32011 = null;
var G__32012 = (0);
var G__32013 = (0);
seq__30683_31990 = G__32010;
chunk__30684_31991 = G__32011;
count__30685_31992 = G__32012;
i__30686_31993 = G__32013;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__30689_32017 = cljs.core.seq(fields__$1);
var chunk__30690_32018 = null;
var count__30691_32019 = (0);
var i__30692_32020 = (0);
while(true){
if((i__30692_32020 < count__30691_32019)){
var fld_32021 = chunk__30690_32018.cljs$core$IIndexed$_nth$arity$2(null,i__30692_32020);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_32021," = ",fld_32021,";");


var G__32022 = seq__30689_32017;
var G__32023 = chunk__30690_32018;
var G__32024 = count__30691_32019;
var G__32025 = (i__30692_32020 + (1));
seq__30689_32017 = G__32022;
chunk__30690_32018 = G__32023;
count__30691_32019 = G__32024;
i__30692_32020 = G__32025;
continue;
} else {
var temp__5735__auto___32026 = cljs.core.seq(seq__30689_32017);
if(temp__5735__auto___32026){
var seq__30689_32027__$1 = temp__5735__auto___32026;
if(cljs.core.chunked_seq_QMARK_(seq__30689_32027__$1)){
var c__4556__auto___32028 = cljs.core.chunk_first(seq__30689_32027__$1);
var G__32029 = cljs.core.chunk_rest(seq__30689_32027__$1);
var G__32030 = c__4556__auto___32028;
var G__32031 = cljs.core.count(c__4556__auto___32028);
var G__32032 = (0);
seq__30689_32017 = G__32029;
chunk__30690_32018 = G__32030;
count__30691_32019 = G__32031;
i__30692_32020 = G__32032;
continue;
} else {
var fld_32033 = cljs.core.first(seq__30689_32027__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_32033," = ",fld_32033,";");


var G__32035 = cljs.core.next(seq__30689_32027__$1);
var G__32036 = null;
var G__32037 = (0);
var G__32038 = (0);
seq__30689_32017 = G__32035;
chunk__30690_32018 = G__32036;
count__30691_32019 = G__32037;
i__30692_32020 = G__32038;
continue;
}
} else {
}
}
break;
}

var seq__30718_32039 = cljs.core.seq(pmasks);
var chunk__30719_32040 = null;
var count__30720_32041 = (0);
var i__30721_32042 = (0);
while(true){
if((i__30721_32042 < count__30720_32041)){
var vec__30730_32043 = chunk__30719_32040.cljs$core$IIndexed$_nth$arity$2(null,i__30721_32042);
var pno_32044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30730_32043,(0),null);
var pmask_32045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30730_32043,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_32044,"$ = ",pmask_32045,";");


var G__32046 = seq__30718_32039;
var G__32047 = chunk__30719_32040;
var G__32048 = count__30720_32041;
var G__32049 = (i__30721_32042 + (1));
seq__30718_32039 = G__32046;
chunk__30719_32040 = G__32047;
count__30720_32041 = G__32048;
i__30721_32042 = G__32049;
continue;
} else {
var temp__5735__auto___32054 = cljs.core.seq(seq__30718_32039);
if(temp__5735__auto___32054){
var seq__30718_32055__$1 = temp__5735__auto___32054;
if(cljs.core.chunked_seq_QMARK_(seq__30718_32055__$1)){
var c__4556__auto___32056 = cljs.core.chunk_first(seq__30718_32055__$1);
var G__32057 = cljs.core.chunk_rest(seq__30718_32055__$1);
var G__32058 = c__4556__auto___32056;
var G__32059 = cljs.core.count(c__4556__auto___32056);
var G__32060 = (0);
seq__30718_32039 = G__32057;
chunk__30719_32040 = G__32058;
count__30720_32041 = G__32059;
i__30721_32042 = G__32060;
continue;
} else {
var vec__30733_32061 = cljs.core.first(seq__30718_32055__$1);
var pno_32062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30733_32061,(0),null);
var pmask_32063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30733_32061,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_32062,"$ = ",pmask_32063,";");


var G__32064 = cljs.core.next(seq__30718_32055__$1);
var G__32065 = null;
var G__32066 = (0);
var G__32067 = (0);
seq__30718_32039 = G__32064;
chunk__30719_32040 = G__32065;
count__30720_32041 = G__32066;
i__30721_32042 = G__32067;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__30736){
var map__30737 = p__30736;
var map__30737__$1 = (((((!((map__30737 == null))))?(((((map__30737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30737):map__30737);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30737__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30737__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30737__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30737__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30737__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29850__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__30744){
var map__30745 = p__30744;
var map__30745__$1 = (((((!((map__30745 == null))))?(((((map__30745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30745):map__30745);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30745__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30745__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30745__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30745__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30745__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__29850__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29850__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__30768 = cljs.core.seq(table);
var chunk__30769 = null;
var count__30770 = (0);
var i__30771 = (0);
while(true){
if((i__30771 < count__30770)){
var vec__30781 = chunk__30769.cljs$core$IIndexed$_nth$arity$2(null,i__30771);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30781,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30781,(1),null);
var ns_32079 = cljs.core.namespace(sym);
var name_32080 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__32081 = seq__30768;
var G__32082 = chunk__30769;
var G__32083 = count__30770;
var G__32084 = (i__30771 + (1));
seq__30768 = G__32081;
chunk__30769 = G__32082;
count__30770 = G__32083;
i__30771 = G__32084;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30768);
if(temp__5735__auto__){
var seq__30768__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30768__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__30768__$1);
var G__32085 = cljs.core.chunk_rest(seq__30768__$1);
var G__32086 = c__4556__auto__;
var G__32087 = cljs.core.count(c__4556__auto__);
var G__32088 = (0);
seq__30768 = G__32085;
chunk__30769 = G__32086;
count__30770 = G__32087;
i__30771 = G__32088;
continue;
} else {
var vec__30784 = cljs.core.first(seq__30768__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30784,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30784,(1),null);
var ns_32092 = cljs.core.namespace(sym);
var name_32093 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__32094 = cljs.core.next(seq__30768__$1);
var G__32095 = null;
var G__32096 = (0);
var G__32097 = (0);
seq__30768 = G__32094;
chunk__30769 = G__32095;
count__30770 = G__32096;
i__30771 = G__32097;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__30789 = arguments.length;
switch (G__30789) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs():null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_32125 = cljs.core.first(ks);
var vec__30790_32126 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_32125);
var top_32127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30790_32126,(0),null);
var prefix_SINGLEQUOTE__32128 = vec__30790_32126;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_32125)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__32128) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_32127)) || (cljs.core.contains_QMARK_(known_externs,top_32127)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__32128)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_32127);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__32128)),";");
}
} else {
}

var m_32135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_32125);
if(cljs.core.empty_QMARK_(m_32135)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__32128,m_32135,top_level,known_externs);
}

var G__32137 = cljs.core.next(ks);
ks = G__32137;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
