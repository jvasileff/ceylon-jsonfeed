(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('herd/jsonfeed/jsSample/0.0.0/herd.jsonfeed.jsSample-0.0.0', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('herd/jsonfeed/jsSample/0.0.0/herd.jsonfeed.jsSample-0.0.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.3.2/ceylon.language-1.3.2');
m$1.$addmod$(m$1,'ceylon.language/1.3.2');
m$1.$addmod$(ex$,'herd.jsonfeed.jsSample/0.0.0');
var m$3=require('ceylon/json/1.3.2/ceylon.json-1.3.2');
m$1.$addmod$(m$3,'ceylon.json/1.3.2');
var m$2=require('ceylon/uri/1.3.2/ceylon.uri-1.3.2');
m$1.$addmod$(m$2,'ceylon.uri/1.3.2');
var m$5=require('ceylon/html/1.3.2/ceylon.html-1.3.2');
m$1.$addmod$(m$5,'ceylon.html/1.3.2');
var m$6=require('herd/jsonfeed/core/0.0.0/herd.jsonfeed.core-0.0.0');
m$1.$addmod$(m$6,'herd.jsonfeed.core/0.0.0');
ex$.$mod$ans$=function(){return[m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];};
ex$.$mod$imps=function(){return{
'herd.jsonfeed.core/0.0.0':[],
'ceylon.html/1.3.2':[]
};};
function run(){
attachOnChange("feedSelection",m$1.jsc$2((function($2r){
var $2s=(typeof document==='undefined'||document===null?m$1.throwexc(m$1.Exception("Undefined or null reference: document"),'9:29-9:36','run.ceylon'):document).getElementById("feedSelection");
$prop$get$2s={$crtmm$:function(){return{mod:$CCMM$,$t:'$U',$cont:run,d:['herd.jsonfeed.jsSample','run','$at','select$pyxl16']};}};
$prop$get$2s.get=function(){return $2s};
var $2t=m$1.ndtc$($2s.value,m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),'run.ceylon 10:26-10:37');
$prop$get$2t={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:run,d:['herd.jsonfeed.jsSample','run','$at','url$dok5o5']};}};
$prop$get$2t.get=function(){return $2t};
var $2u;
if(m$1.nn$(($2u=$2t))&&!$2u.empty){
setInnerHtml("container",($2v=m$1.sarg$(function($2w){switch($2w){case 0:return "loading...";}return m$1.finished();},undefined,{}),m$5.H3(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$2v)).string);
var $2v;
processUrlContent($2u,processFeed);
}
}),[{nm:'event',mt:'prm',$t:{t:m$1.Anything}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Anything}]),Return$Callable:{t:m$1.Anything}}));
}
ex$.run=run;
run.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],pa:1,d:['herd.jsonfeed.jsSample','run']};};
function processFeed($2x){
var $2y;
m$1.asrt$((m$1.is$(($2y=m$3.parse($2x)),{t:m$3.JsonObject})),"Assertion failed: "+"\n\tviolated is JsonObject jsonObject = parseJson(json)\n\tat run.ceylon (20:11-20:54)",'20:4-20:55','run.ceylon');
var $2z=m$6.parseFeed($2y);
setInnerHtml("container",feedToHtml($2z).string);
};processFeed.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'json',mt:'prm',$t:{t:m$1.$_String}}],d:['herd.jsonfeed.jsSample','processFeed']};};
function processUrlContent($30,$31){
var $32=($33=(typeof XMLHttpRequest==='undefined'?m$1.throwexc(m$1.Exception("Undefined type XMLHttpRequest"),'27:22-27:35','run.ceylon'):XMLHttpRequest),$33.$$===undefined?new $33():$33());
$32.open("GET",$30);
$32.onload=m$1.jsc$2((function($34){return $31(m$1.ndtc$($32.responseText,{t:m$1.$_String},'run.ceylon 29:48-29:63'));
})/*TODO: callable targs 6.2*/);
$32.send();
};processUrlContent.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'url',mt:'prm',$t:{t:m$1.$_String}},{nm:'consume',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.$_String}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'s',mt:'prm',$t:{t:m$1.$_String}}]}],d:['herd.jsonfeed.jsSample','processUrlContent']};};
function setInnerHtml($35,$36){
var $37=(typeof document==='undefined'||document===null?m$1.throwexc(m$1.Exception("Undefined or null reference: document"),'36:26-36:33','run.ceylon'):document).getElementById($35);
$37.innerHTML=$36;
};setInnerHtml.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'id',mt:'prm',$t:{t:m$1.$_String}},{nm:'html',mt:'prm',$t:{t:m$1.$_String}}],d:['herd.jsonfeed.jsSample','setInnerHtml']};};
function attachOnChange($38,$39){
var $3a=(typeof document==='undefined'||document===null?m$1.throwexc(m$1.Exception("Undefined or null reference: document"),'43:26-43:33','run.ceylon'):document).getElementById($38);
$3a.onchange=$39;
};attachOnChange.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'id',mt:'prm',$t:{t:m$1.$_String}},{nm:'consume',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Anything}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:m$1.Anything}}]}],d:['herd.jsonfeed.jsSample','attachOnChange']};};
function feedToHtml($3b){return ($3c=m$1.sarg$(function($3d){switch($3d){case 0:return ($3e=m$1.sarg$(function($3f){switch($3f){case 0:return "Recent articles published on ";case 1:return ($3g=$3b.homePageUrl,$3h=($3i=m$1.sarg$(function($3j){switch($3j){case 0:return $3b.title;}return m$1.finished();},undefined,{Element$Iterable:{t:m$1.$_String},Absent$Iterable:{t:m$1.Nothing}}),m$5.Em(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$3i)),$_anchor($3g,$3h));case 2:return ":";}return m$1.finished();},undefined,{}),m$5.H3(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$3e));case 1:return m$1.for$(function(){
var $3k=$3b.items.take(10).iterator(),$3l=m$1.finished();
var n$3l=function(){return $3l=$3k.next();}
return function(){
if(n$3l()!==m$1.finished()){
var $3m=$3l,$3n=($3o=m$1.sarg$(function($3p){switch($3p){case 0:return ($3q=m$1.sarg$(function($3r){switch($3r){case 0:return ($3s=($3t=$3m.datePublished,m$1.nn$($3t)?$3t.date:null),m$1.nn$($3s)?$3s:"unknown date").string+": ";case 1:return ($3u=$3m.url,$3v=defaultedString($3m.title,"untitled"),anchorFlow($3u,$3v));}return m$1.finished();},undefined,{Element$Iterable:m$1.mut$([{t:m$1.$_String},{t:m$5.Raw},{t:m$5.Comment},{t:m$5.ProcessingInstruction},m$1.mit$([{t:m$5.FlowCategory},{t:m$5.Node}]),{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:m$1.mut$([{t:m$1.$_String},{t:m$5.Raw},{t:m$5.Comment},{t:m$5.ProcessingInstruction},m$1.mit$([{t:m$5.FlowCategory},{t:m$5.Node}])])}},{t:m$1.Iterable,a:{Element$Iterable:m$1.mut$([{t:m$1.$_String},{t:m$5.Raw},{t:m$5.Comment},{t:m$5.ProcessingInstruction},m$1.mit$([{t:m$5.FlowCategory},{t:m$5.Node}])]),Absent$Iterable:{t:m$1.Null}}},{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Iterable,a:{Element$Iterable:m$1.mut$([{t:m$1.$_String},{t:m$5.Raw},{t:m$5.Comment},{t:m$5.ProcessingInstruction},m$1.mit$([{t:m$5.FlowCategory},{t:m$5.Node}])]),Absent$Iterable:{t:m$1.Null}}}}},{t:m$1.Null}]),Absent$Iterable:{t:m$1.Nothing}}),m$5.Li(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$3q));}return m$1.finished();},undefined,{}),m$5.Ul(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$3o));
return $3n;
}
return m$1.finished();
}
},{Element$Iterable:{t:m$5.Ul},Absent$Iterable:{t:m$1.Null}});}return m$1.finished();},undefined,{}),m$5.Div(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$3c));
var $3c,$3e,$3g,$3h,$3i,$3o,$3q,$3s,$3t,$3u,$3v;
};
feedToHtml.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$5.Element},ps:[{nm:'feed',mt:'prm',$t:{t:m$6.Feed}}],d:['herd.jsonfeed.jsSample','feedToHtml']};};
function defaultedString($3w,$3x){return function(){var $3y;
if(m$1.nn$(($3y=$3w))&&!$3y.trimmed.empty)return $3y;else return $3x}();
};
defaultedString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'str',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'def',mt:'prm',$t:{t:m$1.$_String}}],d:['herd.jsonfeed.jsSample','defaultedString']};};
function $_anchor($3z,$40){
var $41;
if(m$1.nn$(($41=$3z))){
return ($42=$41.string,$43=m$1.sarg$(function($44){switch($44){case 0:return ($45=m$1.sarg$(function($46){switch($46){case 0:return $40;}return m$1.finished();},undefined,{Item$Content:{t:m$5.PhrasingCategory}}),m$5.Span(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$45));}return m$1.finished();},undefined,{}),m$5.A(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$42,undefined,undefined,undefined,undefined,undefined,$43));
var $42,$43,$45;
}
function $47(){return $3z;}
return $40;
};$_anchor.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[m$5.Content(),{t:m$5.A}]},ps:[{nm:'href',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]}},{nm:'element',mt:'prm',$t:m$5.Content()}],d:['herd.jsonfeed.jsSample','anchor']};};
function anchorFlow($48,$49){
var $4a;
if(m$1.nn$(($4a=$48))){
return ($4b=$4a.string,$4c=m$1.sarg$(function($4d){switch($4d){case 0:return $49;}return m$1.finished();},undefined,{Item$Content:{t:m$5.FlowCategory}}),m$5.A(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$4b,undefined,undefined,undefined,undefined,undefined,$4c));
var $4b,$4c;
}
function $4e(){return $48;}
return $49;
};anchorFlow.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[m$5.Content(),{t:m$5.A}]},ps:[{nm:'href',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]}},{nm:'element',mt:'prm',$t:m$5.Content()}],d:['herd.jsonfeed.jsSample','anchorFlow']};};
ex$.$pkg$ans$herd$jsonfeed$jsSample=function(){return[m$1.shared()];};
ex$.$pkgunsh$herd$jsonfeed$jsSample={'processFeed':processFeed,'processUrlContent':processUrlContent,'setInnerHtml':setInnerHtml,'attachOnChange':attachOnChange,'feedToHtml':feedToHtml,'defaultedString':defaultedString,'anchor':$_anchor,'anchorFlow':anchorFlow};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
