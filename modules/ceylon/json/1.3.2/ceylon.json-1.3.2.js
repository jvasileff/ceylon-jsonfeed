(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('ceylon/json/1.3.2/ceylon.json-1.3.2', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/json/1.3.2/ceylon.json-1.3.2-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.3.2/ceylon.language-1.3.2');
m$1.$addmod$(m$1,'ceylon.language/1.3.2');
m$1.$addmod$(ex$,'ceylon.json/1.3.2');
var m$2=require('ceylon/collection/1.3.2/ceylon.collection-1.3.2');
m$1.$addmod$(m$2,'ceylon.collection/1.3.2');
ex$.$mod$ans$=function(){return[m$1.doc$($CCMM$,'','$mod-anns'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud","Tom Bentley"],{t:m$1.$_String})),m$1.license("Apache Software License")];};
ex$.$mod$imps=function(){return{
'ceylon.collection/1.3.2':function(){return[m$1.shared()];}
};};
function JsonArray($wghd6m$3xy, jsonArray$){return $_Array($wghd6m$3xy,jsonArray$);}
JsonArray.$$=$_Array.$$;
JsonArray.$crtmm$=function(){return{mod:$CCMM$,'super':{t:$_Array},ps:[{nm:'values',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:Value()}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:JsonArray')];},d:['ceylon.json','JsonArray']};};
ex$.JsonArray=JsonArray;
function $_Array($wghd6m$3xz,array$){
$init$$_Array();
if(array$===undefined)array$=new $_Array.$$;
if($wghd6m$3xz===undefined){$wghd6m$3xz=$init$$_Array().$defs$values(array$);}
array$.$wghd6m$3xz_=$wghd6m$3xz;
m$2.MutableList({Element$MutableList:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}])},array$);
array$.$wghd6m$3y0_=m$2.LinkedList(array$.$wghd6m$3xz,{Element$LinkedList:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}])});
return array$;
}
$_Array.$defs$values=function(array$){return m$1.empty()};$_Array.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'values',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:Value()}}}],sts:[{t:m$2.MutableList,a:{Element$MutableList:Value()}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Array'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.json','Array']};};
ex$.$_Array=$_Array;
function $init$$_Array(){
if($_Array.$$===undefined){
m$1.initTypeProto($_Array,'ceylon.json::Array',m$1.Basic,m$2.MutableList);
(function(array$){
m$1.atr$(array$,'$wghd6m$3xz',function(){return this.$wghd6m$3xz_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:Value()}},$cont:$_Array,d:['ceylon.json','Array','$at','values$vcoj45']};});
m$1.atr$(array$,'$wghd6m$3y0',function(){return this.$wghd6m$3y0_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2.LinkedList,a:{Element$LinkedList:Value()}},$cont:$_Array,d:['ceylon.json','Array','$at','list$eh7yhj']};});
array$.iterator=function(){var array$=this;
return array$.$wghd6m$3y0.iterator();
};array$.getFromFirst=function($3y1){var array$=this;
return array$.$wghd6m$3y0.getFromFirst($3y1);
};array$.add=function($3y2){var array$=this;
return array$.$wghd6m$3y0.add($3y2);
};
array$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'val',mt:'prm',$t:Value()}],$cont:$_Array,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Array:$m:add')];},d:['ceylon.json','Array','$m','add']};};
m$1.atr$(array$,'size',function(){
var array$=this;
return array$.$wghd6m$3y0.size;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$_Array,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Array:$at:size')];},d:['ceylon.json','Array','$at','size']};});
m$1.atr$(array$,'string',function(){
var array$=this;
var $3y4=StringEmitter();
visit(array$,$3y4);
return $3y4.string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$_Array,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Array:$at:string')];},d:['ceylon.json','Array','$at','string']};});m$1.atr$(array$,'pretty',function(){
var array$=this;
var $3y5=StringEmitter(true);
visit(array$,$3y5,true);
return $3y5.string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$_Array,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Array:$at:pretty')];},d:['ceylon.json','Array','$at','pretty']};});array$.clone=function(){var array$=this;
return $_Array(array$.$wghd6m$3y0);
};
array$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Array},ps:[],$cont:$_Array,pa:3,d:['ceylon.json','Array','$m','clone']};};
m$1.atr$(array$,'lastIndex',function(){
var array$=this;
return array$.$wghd6m$3y0.lastIndex;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:$_Array,pa:3,d:['ceylon.json','Array','$at','lastIndex']};});
m$1.atr$(array$,'reversed',function(){
var array$=this;
return $_Array(array$.$wghd6m$3y0.reversed);
},undefined,function(){return{mod:$CCMM$,$t:{t:$_Array},$cont:$_Array,pa:3,d:['ceylon.json','Array','$at','reversed']};});
m$1.atr$(array$,'rest',function(){
var array$=this;
return $_Array(array$.$wghd6m$3y0.rest);
},undefined,function(){return{mod:$CCMM$,$t:{t:$_Array},$cont:$_Array,pa:3,d:['ceylon.json','Array','$at','rest']};});
array$.measure=function($3y9,$3ya){var array$=this;
return $_Array(array$.$wghd6m$3y0.measure($3y9,$3ya));
};
array$.measure.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Array},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'length',mt:'prm',$t:{t:m$1.Integer}}],$cont:$_Array,pa:3,d:['ceylon.json','Array','$m','measure']};};
array$.span=function($3yb,$3yc){var array$=this;
return $_Array(array$.$wghd6m$3y0.span($3yb,$3yc));
};
array$.span.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Array},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:$_Array,pa:3,d:['ceylon.json','Array','$m','span']};};
array$.spanFrom=function($3yd){var array$=this;
return $_Array(array$.$wghd6m$3y0.spanFrom($3yd));
};
array$.spanFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Array},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}}],$cont:$_Array,pa:3,d:['ceylon.json','Array','$m','spanFrom']};};
array$.spanTo=function($3ye){var array$=this;
return $_Array(array$.$wghd6m$3y0.spanTo($3ye));
};
array$.spanTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Array},ps:[{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:$_Array,pa:3,d:['ceylon.json','Array','$m','spanTo']};};
array$.addAll=function($3yf){var array$=this;
return array$.$wghd6m$3y0.addAll($3yf);
};array$.clear=function(){var array$=this;
return array$.$wghd6m$3y0.clear();
};array$.insert=function($3yg,$3yh){var array$=this;
return array$.$wghd6m$3y0.insert($3yg,$3yh);
};array$.insertAll=function($3yi,$3yj){var array$=this;
return array$.$wghd6m$3y0.insertAll($3yi,$3yj);
};array$.$_delete=function($3yk){var array$=this;
return array$.$wghd6m$3y0.$_delete($3yk);
};array$.deleteMeasure=function($3yl,$3ym){var array$=this;
return array$.$wghd6m$3y0.deleteMeasure($3yl,$3ym);
};array$.deleteSpan=function($3yn,$3yo){var array$=this;
return array$.$wghd6m$3y0.deleteSpan($3yn,$3yo);
};array$.remove=function($3yp){var array$=this;
return array$.$wghd6m$3y0.remove($3yp);
};array$.removeAll=function($3yq){var array$=this;
return array$.$wghd6m$3y0.removeAll($3yq);
};array$.removeFirst=function($3yr){var array$=this;
return array$.$wghd6m$3y0.removeFirst($3yr);
};array$.removeLast=function($3ys){var array$=this;
return array$.$wghd6m$3y0.removeLast($3ys);
};array$.prune=function(){var array$=this;
return array$.$wghd6m$3y0.prune();
};array$.truncate=function($3yt){var array$=this;
return array$.$wghd6m$3y0.truncate($3yt);
};array$.$_replace=function($3yu,$3yv){var array$=this;
return array$.$wghd6m$3y0.$_replace($3yu,$3yv);
};array$.replaceFirst=function($3yw,$3yx){var array$=this;
return array$.$wghd6m$3y0.replaceFirst($3yw,$3yx);
};array$.replaceLast=function($3yy,$3yz){var array$=this;
return array$.$wghd6m$3y0.replaceLast($3yy,$3yz);
};array$.infill=function($3z0){var array$=this;
return array$.$wghd6m$3y0.infill($3z0);
};array$.set=function($3z1,$3z2){var array$=this;
return array$.$wghd6m$3y0.set($3z1,$3z2);
};m$1.atr$(array$,'hash',function(){
var array$=this;
return array$.$wghd6m$3y0.hash;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$_Array,pa:3,d:['ceylon.json','Array','$at','hash']};});
array$.equals=function($3z3){
var array$=this;
var $3z4;
if(m$1.is$(($3z4=$3z3),{t:$_Array})){
return (($3z4===array$)||m$1.$eq$(array$.$wghd6m$3y0,$3z4.$wghd6m$3y0));
}
function $3z5(){return $3z3;}
return false;
};array$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:$_Array,pa:3,d:['ceylon.json','Array','$m','equals']};};
array$.$wghd6m$3z6=function($3z7){
var array$=this;
var $3z8;
if(m$1.is$(($3z8=$3z7),{t:$_Object})){
return $3z8;
}
function $3z9(){return $3z7;}
throw m$1.wrapexc(InvalidTypeException("Expecting Object but got "+(($3za=$3z9(),m$1.nn$($3za)?$3za:"null").string)),'122:8-123:61','ceylon/json/Array.ceylon');
var $3za;
};array$.$wghd6m$3z6.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Object},ps:[{nm:'val',mt:'prm',$t:Value()}],$cont:$_Array,an:function(){return[m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkObject$ioowmw']};};
m$1.atr$(array$,'objects',function(){
var array$=this;
return m$1.for$(function(){
var $3zb=array$.$wghd6m$3y0.iterator(),$3zc=m$1.finished();
var n$3zc=function(){return $3zc=$3zb.next();}
return function(){
if(n$3zc()!==m$1.finished()){
var $3zd=$3zc,$3ze=array$.$wghd6m$3z6($3zd);
return $3ze;
}
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:$_Object}});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:$_Object}}},$cont:$_Array,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Array:$at:objects'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If one element in this array is not an [[Object]].")];},d:['ceylon.json','Array','$at','objects']};});
array$.$wghd6m$3zf=function($3zg){
var array$=this;
var $3zh;
if(m$1.is$(($3zh=$3zg),{t:m$1.$_String})){
return $3zh;
}
function $3zi(){return $3zg;}
throw m$1.wrapexc(InvalidTypeException("Expecting String but got "+(($3zj=$3zi(),m$1.nn$($3zj)?$3zj:"null").string)),'137:8-138:61','ceylon/json/Array.ceylon');
var $3zj;
};array$.$wghd6m$3zf.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'val',mt:'prm',$t:Value()}],$cont:$_Array,an:function(){return[m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkString$9ziptm']};};
m$1.atr$(array$,'strings',function(){
var array$=this;
return m$1.for$(function(){
var $3zk=array$.$wghd6m$3y0.iterator(),$3zl=m$1.finished();
var n$3zl=function(){return $3zl=$3zk.next();}
return function(){
if(n$3zl()!==m$1.finished()){
var $3zm=$3zl,$3zn=array$.$wghd6m$3zf($3zm);
return $3zn;
}
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.$_String}});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.$_String}}},$cont:$_Array,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Array:$at:strings'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If one element in this array is not a [[String]].")];},d:['ceylon.json','Array','$at','strings']};});
array$.$wghd6m$3zo=function($3zp){
var array$=this;
var $3zq;
if(m$1.is$(($3zq=$3zp),{t:m$1.Integer})){
return $3zq;
}
function $3zr(){return $3zp;}
throw m$1.wrapexc(InvalidTypeException("Expecting Integer but got "+(($3zs=$3zr(),m$1.nn$($3zs)?$3zs:"null").string)),'152:8-153:62','ceylon/json/Array.ceylon');
var $3zs;
};array$.$wghd6m$3zo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'val',mt:'prm',$t:Value()}],$cont:$_Array,an:function(){return[m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkInteger$4waw35']};};
m$1.atr$(array$,'integers',function(){
var array$=this;
return m$1.for$(function(){
var $3zt=array$.$wghd6m$3y0.iterator(),$3zu=m$1.finished();
var n$3zu=function(){return $3zu=$3zt.next();}
return function(){
if(n$3zu()!==m$1.finished()){
var $3zv=$3zu,$3zw=array$.$wghd6m$3zo($3zv);
return $3zw;
}
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Integer}});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Integer}}},$cont:$_Array,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Array:$at:integers'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If one element in this array is not a [[Integer]].")];},d:['ceylon.json','Array','$at','integers']};});
array$.$wghd6m$3zx=function($3zy){
var array$=this;
var $3zz;
if(m$1.is$(($3zz=$3zy),{t:m$1.Float})){
return $3zz;
}
function $400(){return $3zy;}
throw m$1.wrapexc(InvalidTypeException("Expecting Float but got "+(($401=$400(),m$1.nn$($401)?$401:"null").string)),'167:8-168:60','ceylon/json/Array.ceylon');
var $401;
};array$.$wghd6m$3zx.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Float},ps:[{nm:'val',mt:'prm',$t:Value()}],$cont:$_Array,an:function(){return[m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkFloat$zgce4d']};};
m$1.atr$(array$,'floats',function(){
var array$=this;
return m$1.for$(function(){
var $402=array$.$wghd6m$3y0.iterator(),$403=m$1.finished();
var n$403=function(){return $403=$402.next();}
return function(){
if(n$403()!==m$1.finished()){
var $404=$403,$405=array$.$wghd6m$3zx($404);
return $405;
}
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Float}});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Float}}},$cont:$_Array,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Array:$at:floats'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If one element in this array is not a [[Float]].")];},d:['ceylon.json','Array','$at','floats']};});
array$.$wghd6m$406=function($407){
var array$=this;
var $408;
if(m$1.is$(($408=$407),{t:m$1.$_Boolean})){
return $408;
}
function $409(){return $407;}
throw m$1.wrapexc(InvalidTypeException("Expecting Boolean but got "+(($40a=$409(),m$1.nn$($40a)?$40a:"null").string)),'182:8-183:62','ceylon/json/Array.ceylon');
var $40a;
};array$.$wghd6m$406.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'val',mt:'prm',$t:Value()}],$cont:$_Array,an:function(){return[m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkBoolean$v3xsa1']};};
m$1.atr$(array$,'booleans',function(){
var array$=this;
return m$1.for$(function(){
var $40b=array$.$wghd6m$3y0.iterator(),$40c=m$1.finished();
var n$40c=function(){return $40c=$40b.next();}
return function(){
if(n$40c()!==m$1.finished()){
var $40d=$40c,$40e=array$.$wghd6m$406($40d);
return $40e;
}
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.$_Boolean}});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.$_Boolean}}},$cont:$_Array,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Array:$at:booleans'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If one element in this array is not a [[Boolean]].")];},d:['ceylon.json','Array','$at','booleans']};});
array$.$wghd6m$40f=function($40g){
var array$=this;
var $40h;
if(m$1.is$(($40h=$40g),{t:$_Array})){
return $40h;
}
function $40i(){return $40g;}
throw m$1.wrapexc(InvalidTypeException("Expecting Array but got "+(($40j=$40i(),m$1.nn$($40j)?$40j:"null").string)),'197:8-198:60','ceylon/json/Array.ceylon');
var $40j;
};array$.$wghd6m$40f.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Array},ps:[{nm:'val',mt:'prm',$t:Value()}],$cont:$_Array,an:function(){return[m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkArray$61ubg2']};};
m$1.atr$(array$,'arrays',function(){
var array$=this;
return m$1.for$(function(){
var $40k=array$.$wghd6m$3y0.iterator(),$40l=m$1.finished();
var n$40l=function(){return $40l=$40k.next();}
return function(){
if(n$40l()!==m$1.finished()){
var $40m=$40l,$40n=array$.$wghd6m$40f($40m);
return $40n;
}
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:$_Array}});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:$_Array}}},$cont:$_Array,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Array:$at:arrays'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If one element in this array is not an [[Array]].")];},d:['ceylon.json','Array','$at','arrays']};});
array$.findAndRemoveFirst=function($40o){var array$=this;
return array$.$wghd6m$3y0.findAndRemoveFirst($40o);
};array$.findAndRemoveLast=function($40p){var array$=this;
return array$.$wghd6m$3y0.findAndRemoveLast($40p);
};array$.findAndReplaceFirst=function($40q,$40r){var array$=this;
return array$.$wghd6m$3y0.findAndReplaceFirst($40q,$40r);
};array$.findAndReplaceLast=function($40s,$40t){var array$=this;
return array$.$wghd6m$3y0.findAndReplaceLast($40s,$40t);
};array$.removeWhere=function($40u){var array$=this;
return array$.$wghd6m$3y0.removeWhere($40u);
};array$.replaceWhere=function($40v,$40w){var array$=this;
return array$.$wghd6m$3y0.replaceWhere($40v,$40w);
};array$.toString=function(){return this.string.valueOf();};
})($_Array.$$.prototype);
}
return $_Array;
}
ex$.$init$$_Array=$init$$_Array;$init$$_Array();
function Builder(builder$){
$init$Builder();
if(builder$===undefined)builder$=new Builder.$$;
Visitor(builder$);
builder$.$wghd6m$40x_=m$2.ArrayList(undefined,undefined,undefined,{Element$ArrayList:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}])});
builder$.$wghd6m$40y_=null;
return builder$;
}
Builder.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:Visitor}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Builder'),m$1.by(m$1.$arr$sa$(["Tom Bentley"],{t:m$1.$_String}))];},d:['ceylon.json','Builder']};};
ex$.Builder=Builder;
function $init$Builder(){
if(Builder.$$===undefined){
m$1.initTypeProto(Builder,'ceylon.json::Builder',m$1.Basic,$init$Visitor());
(function(builder$){
m$1.atr$(builder$,'$wghd6m$40x',function(){return this.$wghd6m$40x_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2.ArrayList,a:{Element$ArrayList:Value()}},$cont:Builder,d:['ceylon.json','Builder','$at','stack$utn8fx']};});
m$1.atr$(builder$,'$wghd6m$40y',function(){return this.$wghd6m$40y_;},function($40z){return this.$wghd6m$40y_=$40z;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Builder,pa:1027,d:['ceylon.json','Builder','$at','currentKey$xesi29']};});
m$1.atr$(builder$,'result',function(){
var builder$=this;
if((builder$.$wghd6m$40x.size==(1))&&!m$1.nn$(builder$.$wghd6m$40y)){
return builder$.$wghd6m$40x.$_pop();
}
else{
throw m$1.wrapexc(m$1.AssertionError("currenyKey="+(($410=builder$.$wghd6m$40y,m$1.nn$($410)?$410:"null"))+", stack="+(builder$.$wghd6m$40x.string)),'27:12-27:91','ceylon/json/Builder.ceylon');
var $410;
}
},undefined,function(){return{mod:$CCMM$,$t:Value(),$cont:Builder,pa:1,an:function(){return[m$1.doc("The constructed [[Value]]."),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.3.2','$'),m$1.AssertionError),"The builder has not yet seen enough input to return a fully formed JSON value.")];},d:['ceylon.json','Builder','$at','result']};});builder$.$wghd6m$411=function($412){
var builder$=this;
var $413=builder$.$wghd6m$40x.last;
var $414=$413;
if(m$1.is$($414,{t:$_Object})) {
var $415;
if(m$1.nn$(($415=builder$.$wghd6m$40y))){
var $416;
if(m$1.nn$(($416=$414.put($415,$412)))){
throw m$1.wrapexc(m$1.AssertionError("duplicate key "+($415)),'37:20-37:64','ceylon/json/Builder.ceylon');
}
builder$.$wghd6m$40y=null;
}
else{
m$1.asrt$((false),"Assertion failed: "+"value within object without key\n\tviolated false\n\tat Builder.ceylon (42:22-42:28)",'41:16-42:29','Builder.ceylon');
}
}
else if(m$1.is$($414,{t:$_Array})) {
$414.add($412);
}
else if(m$1.is$($414,{t:m$1.Null})) {
}
else{
throw m$1.wrapexc(m$1.AssertionError("cannot add value to "+(m$1.type$meta($414,{Type$type:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float}])}).string)),'52:12-52:73','ceylon/json/Builder.ceylon');
}
};builder$.$wghd6m$411.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'v',mt:'prm',$t:Value()}],$cont:Builder,d:['ceylon.json','Builder','$m','addToCurrent$lxw5io']};};
builder$.$wghd6m$417=function($418){
var builder$=this;
if(builder$.$wghd6m$40x.empty){
builder$.$wghd6m$40x.$_push($418);
}
if(m$1.is$($418,m$1.mut$([{t:$_Object},{t:$_Array}]))){
builder$.$wghd6m$40x.$_push($418);
}
};builder$.$wghd6m$417.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'v',mt:'prm',$t:Value()}],$cont:Builder,d:['ceylon.json','Builder','$m','push$ml0ud7']};};
builder$.$wghd6m$419=function(){
var builder$=this;
builder$.$wghd6m$40x.$_pop();
};builder$.$wghd6m$419.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Builder,d:['ceylon.json','Builder','$m','pop$r7gvbw']};};
builder$.onStartObject=function(){
var builder$=this;
var $41a=($_Object(undefined));
builder$.$wghd6m$411($41a);
builder$.$wghd6m$417($41a);
};builder$.onStartObject.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Builder,pa:3,d:['ceylon.json','Builder','$m','onStartObject']};};
builder$.onKey=function($41b){
var builder$=this;
builder$.$wghd6m$40y=$41b;
};builder$.onKey.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:Builder,pa:3,d:['ceylon.json','Builder','$m','onKey']};};
builder$.onEndObject=function(){
var builder$=this;
builder$.$wghd6m$419();
};builder$.onEndObject.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Builder,pa:3,d:['ceylon.json','Builder','$m','onEndObject']};};
builder$.onStartArray=function(){
var builder$=this;
var $41c=$_Array();
builder$.$wghd6m$411($41c);
builder$.$wghd6m$417($41c);
};builder$.onStartArray.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Builder,pa:3,d:['ceylon.json','Builder','$m','onStartArray']};};
builder$.onEndArray=function(){
var builder$=this;
builder$.$wghd6m$419();
};builder$.onEndArray.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Builder,pa:3,d:['ceylon.json','Builder','$m','onEndArray']};};
builder$.onNumber=function($41d){
var builder$=this;
builder$.$wghd6m$411($41d);
builder$.$wghd6m$417($41d);
};builder$.onNumber.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'num',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Float}]}}],$cont:Builder,pa:3,d:['ceylon.json','Builder','$m','onNumber']};};
builder$.onBoolean=function($41e){
var builder$=this;
builder$.$wghd6m$411($41e);
builder$.$wghd6m$417($41e);
};builder$.onBoolean.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'bool',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:Builder,pa:3,d:['ceylon.json','Builder','$m','onBoolean']};};
builder$.onNull=function(){
var builder$=this;
builder$.$wghd6m$411(null);
builder$.$wghd6m$417(null);
};builder$.onNull.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Builder,pa:3,d:['ceylon.json','Builder','$m','onNull']};};
builder$.onString=function($41f){
var builder$=this;
builder$.$wghd6m$411($41f);
builder$.$wghd6m$417($41f);
};builder$.onString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],$cont:Builder,pa:3,d:['ceylon.json','Builder','$m','onString']};};
builder$.toString=function(){return this.string.valueOf();};
})(Builder.$$.prototype);
}
return Builder;
}
ex$.$init$Builder=$init$Builder;$init$Builder();
function Emitter($wghd6m$41g,emitter$){
$init$Emitter();
if(emitter$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.json::Emitter"),'?','?')
emitter$.$wghd6m$41g_=$wghd6m$41g;
Visitor(emitter$);
emitter$.$wghd6m$41h_=m$2.ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Integer}});
return emitter$;
}
Emitter.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'pretty',mt:'prm',$t:{t:m$1.$_Boolean}}],sts:[{t:Visitor}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Emitter'),m$1.by(m$1.$arr$sa$(["Tom Bentley"],{t:m$1.$_String}))];},d:['ceylon.json','Emitter']};};
ex$.Emitter=Emitter;
function $init$Emitter(){
if(Emitter.$$===undefined){
m$1.initTypeProto(Emitter,'ceylon.json::Emitter',m$1.Basic,$init$Visitor());
(function(emitter$){
m$1.atr$(emitter$,'$wghd6m$41g',function(){return this.$wghd6m$41g_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Emitter,d:['ceylon.json','Emitter','$at','pretty$8sysk4']};});
m$1.atr$(emitter$,'$wghd6m$41h',function(){return this.$wghd6m$41h_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2.ArrayList,a:{Element$ArrayList:{t:m$1.Integer}}},$cont:Emitter,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Emitter:$at:state$ilnlu7')];},d:['ceylon.json','Emitter','$at','state$ilnlu7']};});
m$1.atr$(emitter$,'$wghd6m$41i',function(){
var emitter$=this;
return emitter$.$wghd6m$41h.size;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Emitter,d:['ceylon.json','Emitter','$at','level$4mlxvu']};});
emitter$.$wghd6m$41j=function(){
var emitter$=this;
if(emitter$.$wghd6m$41g){
emitter$.print("\n");
if((emitter$.$wghd6m$41i>(0))){
var $41l=(0),$41k=(emitter$.$wghd6m$41i-(1)),$41m=$41l.compare($41k),$41n=$41m===m$1.smaller()?'successor':'predecessor';for(var $41o=m$1.eorl$($41m);$41o($41k,$41l);$41l=$41l[$41n]){
emitter$.print(" ");
}
}
}
};emitter$.$wghd6m$41j.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Emitter,d:['ceylon.json','Emitter','$m','indent$dqjjny']};};
emitter$.print={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],$cont:Emitter,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Emitter:$m:print')];},d:['ceylon.json','Emitter','$m','print']};}};emitter$.$wghd6m$41p=function(){
var emitter$=this;
var $41q;
if(m$1.nn$(($41q=emitter$.$wghd6m$41h.last))){
if(($41q<(-1))){
emitter$.print(",");
emitter$.$wghd6m$41j();
}
else{
if(($41q==(-1))){
emitter$.$wghd6m$41j();
}
}
if(($41q<(0))){
($41r=($41q-(1)),emitter$.$wghd6m$41h.set((emitter$.$wghd6m$41h.size-(1)),$41r), $41r);
var $41r;
}
else{
($41s=($41q+(1)),emitter$.$wghd6m$41h.set((emitter$.$wghd6m$41h.size-(1)),$41s), $41s);
var $41s;
}
}
};emitter$.$wghd6m$41p.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Emitter,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Emitter:$m:emitValue$jk96z8')];},d:['ceylon.json','Emitter','$m','emitValue$jk96z8']};};
emitter$.onStartObject=function(){
var emitter$=this;
emitter$.$wghd6m$41p();
emitter$.print("{");
emitter$.$wghd6m$41h.$_push(1);
};emitter$.onStartObject.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Emitter,pa:3,an:function(){return[m$1.doc("Prints an `Object`")];},d:['ceylon.json','Emitter','$m','onStartObject']};};
emitter$.onKey=function($41t){
var emitter$=this;
var $41u;
if(m$1.nn$(($41u=emitter$.$wghd6m$41h.last))&&($41u>(1))){
emitter$.print(",");
}
emitter$.$wghd6m$41j();
emitter$.$wghd6m$41v($41t);
emitter$.print(":");
if(emitter$.$wghd6m$41g){
emitter$.print(" ");
}
};emitter$.onKey.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:Emitter,pa:3,d:['ceylon.json','Emitter','$m','onKey']};};
emitter$.onEndObject=function(){
var emitter$=this;
var $41w;
if(m$1.nn$(($41w=emitter$.$wghd6m$41h.$_pop()))&&!m$1.$eq$($41w,(1))){
emitter$.$wghd6m$41j();
}
emitter$.print("}");
};emitter$.onEndObject.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Emitter,pa:3,d:['ceylon.json','Emitter','$m','onEndObject']};};
emitter$.onStartArray=function(){
var emitter$=this;
emitter$.$wghd6m$41p();
emitter$.print("[");
emitter$.$wghd6m$41h.$_push((-1));
};emitter$.onStartArray.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Emitter,pa:3,d:['ceylon.json','Emitter','$m','onStartArray']};};
emitter$.onEndArray=function(){
var emitter$=this;
var $41x;
if(m$1.nn$(($41x=emitter$.$wghd6m$41h.$_pop()))&&!m$1.$eq$($41x,(-1))){
emitter$.$wghd6m$41j();
}
emitter$.print("]");
};emitter$.onEndArray.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Emitter,pa:3,d:['ceylon.json','Emitter','$m','onEndArray']};};
emitter$.onString=function($41y){
var emitter$=this;
emitter$.$wghd6m$41p();
emitter$.$wghd6m$41v($41y);
};emitter$.onString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'s',mt:'prm',$t:{t:m$1.$_String}}],$cont:Emitter,pa:3,d:['ceylon.json','Emitter','$m','onString']};};
emitter$.$wghd6m$41v=function($41z){
var emitter$=this;
emitter$.print("\"");
var $421;for(var $420=$41z.iterator();($421=$420.next())!==m$1.finished();){
if(m$1.$eq$($421,m$1.Character(34,true))){
emitter$.print("\\".plus("\""));
}
else{
if(m$1.$eq$($421,m$1.Character(92,true))){
emitter$.print("\\\\");
}
else{
if(m$1.$eq$($421,m$1.Character(47,true))){
emitter$.print("\\".plus("/"));
}
else{
if(m$1.$eq$($421,(8).character)){
emitter$.print("\\".plus("b"));
}
else{
if(m$1.$eq$($421,(12).character)){
emitter$.print("\\".plus("f"));
}
else{
if(m$1.$eq$($421,(10).character)){
emitter$.print("\\".plus("n"));
}
else{
if(m$1.$eq$($421,(13).character)){
emitter$.print("\\".plus("r"));
}
else{
if(m$1.$eq$($421,(9).character)){
emitter$.print("\\".plus("t"));
}
else{
emitter$.print($421.string);
}
}
}
}
}
}
}
}
}
emitter$.print("\"");
};emitter$.$wghd6m$41v.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'s',mt:'prm',$t:{t:m$1.$_String}}],$cont:Emitter,an:function(){return[m$1.doc("Prints a `String`")];},d:['ceylon.json','Emitter','$m','printString$38as7o']};};
emitter$.onNumber=function($422){
var emitter$=this;
emitter$.$wghd6m$41p();
emitter$.print(formatNumber($422));
};emitter$.onNumber.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'n',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Float}]}}],$cont:Emitter,pa:3,d:['ceylon.json','Emitter','$m','onNumber']};};
emitter$.onBoolean=function($423){
var emitter$=this;
emitter$.$wghd6m$41p();
emitter$.print($423.string);
};emitter$.onBoolean.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'v',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:Emitter,pa:3,d:['ceylon.json','Emitter','$m','onBoolean']};};
emitter$.onNull=function(){
var emitter$=this;
emitter$.$wghd6m$41p();
emitter$.print("null");
};emitter$.onNull.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Emitter,pa:3,d:['ceylon.json','Emitter','$m','onNull']};};
emitter$.toString=function(){return this.string.valueOf();};
})(Emitter.$$.prototype);
}
return Emitter;
}
ex$.$init$Emitter=$init$Emitter;$init$Emitter();
function StringEmitter($wghd6m$424,stringEmitter$){
$init$StringEmitter();
if(stringEmitter$===undefined)stringEmitter$=new StringEmitter.$$;
if($wghd6m$424===undefined){$wghd6m$424=$init$StringEmitter().$defs$pretty(stringEmitter$);}
stringEmitter$.$wghd6m$424_=$wghd6m$424;
Emitter($wghd6m$424,stringEmitter$);
stringEmitter$.$wghd6m$425_=m$1.StringBuilder();
return stringEmitter$;
}
StringEmitter.$defs$pretty=function(stringEmitter$){return false};StringEmitter.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Emitter},ps:[{nm:'pretty',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:StringEmitter'),m$1.by(m$1.$arr$sa$(["Tom Bentley"],{t:m$1.$_String}))];},d:['ceylon.json','StringEmitter']};};
ex$.StringEmitter=StringEmitter;
function $init$StringEmitter(){
if(StringEmitter.$$===undefined){
m$1.initTypeProto(StringEmitter,'ceylon.json::StringEmitter',$init$Emitter());
(function(stringEmitter$){
m$1.atr$(stringEmitter$,'$wghd6m$424',function(){return this.$wghd6m$424_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:StringEmitter,d:['ceylon.json','StringEmitter','$at','pretty$c2sib1']};});
m$1.atr$(stringEmitter$,'$wghd6m$425',function(){return this.$wghd6m$425_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.StringBuilder},$cont:StringEmitter,d:['ceylon.json','StringEmitter','$at','builder$b3xuq8']};});
stringEmitter$.print=function($426){var stringEmitter$=this;
return stringEmitter$.$wghd6m$425.append($426);
};
stringEmitter$.print.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],$cont:StringEmitter,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:StringEmitter:$m:print')];},d:['ceylon.json','StringEmitter','$m','print']};};
m$1.atr$(stringEmitter$,'string',function(){
var stringEmitter$=this;
return stringEmitter$.$wghd6m$425.string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:StringEmitter,pa:11,an:function(){return[m$1.doc("Returns the printed JSON")];},d:['ceylon.json','StringEmitter','$at','string']};});
stringEmitter$.toString=function(){return this.string.valueOf();};
})(StringEmitter.$$.prototype);
}
return StringEmitter;
}
ex$.$init$StringEmitter=$init$StringEmitter;$init$StringEmitter();
function InvalidTypeException($wghd6m$428,invalidTypeException$){
$init$InvalidTypeException();
if(invalidTypeException$===undefined)invalidTypeException$=new InvalidTypeException.$$;
invalidTypeException$.$wghd6m$428_=$wghd6m$428;
m$1.Exception($wghd6m$428,undefined,invalidTypeException$);
return invalidTypeException$;
}
InvalidTypeException.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Exception},ps:[{nm:'message',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:InvalidTypeException')];},d:['ceylon.json','InvalidTypeException']};};
ex$.InvalidTypeException=InvalidTypeException;
function $init$InvalidTypeException(){
if(InvalidTypeException.$$===undefined){
m$1.initTypeProto(InvalidTypeException,'ceylon.json::InvalidTypeException',m$1.Exception);
(function(invalidTypeException$){
m$1.atr$(invalidTypeException$,'$wghd6m$428',function(){return this.$wghd6m$428_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:InvalidTypeException,d:['ceylon.json','InvalidTypeException','$at','message$jqbjmt']};});
invalidTypeException$.toString=function(){return this.string.valueOf();};
})(InvalidTypeException.$$.prototype);
}
return InvalidTypeException;
}
ex$.$init$InvalidTypeException=$init$InvalidTypeException;$init$InvalidTypeException();
function JsonObject($wghd6m$429, jsonObject$){return $_Object($wghd6m$429,jsonObject$);}
JsonObject.$$=$_Object.$$;
JsonObject.$crtmm$=function(){return{mod:$CCMM$,'super':{t:$_Object},ps:[{nm:'values',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:{t:m$1.$_String},Item$Entry:Value()}}}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:JsonObject')];},d:['ceylon.json','JsonObject']};};
ex$.JsonObject=JsonObject;
function $_Object($wghd6m$42a,object$){
$init$$_Object();
if(object$===undefined)object$=new $_Object.$$;
if($wghd6m$42a===undefined){$wghd6m$42a=$init$$_Object().$defs$values(object$);}
object$.$wghd6m$42a_=$wghd6m$42a;
m$2.MutableMap({Key$MutableMap:{t:m$1.$_String},Item$MutableMap:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}])},object$);
object$.$wghd6m$42b_=($42c=object$.$wghd6m$42a,m$2.HashMap(undefined,undefined,$42c,{Key$HashMap:{t:m$1.$_String},Item$HashMap:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}])}));
var $42c;
return object$;
}
$_Object.$defs$values=function(object$){return m$1.empty()};$_Object.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'values',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:{t:m$1.$_String},Item$Entry:Value()}}}}}],sts:[{t:m$2.MutableMap,a:{Key$MutableMap:{t:m$1.$_String},Item$MutableMap:Value()}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Object'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.json','Object']};};
ex$.$_Object=$_Object;
function $init$$_Object(){
if($_Object.$$===undefined){
m$1.initTypeProto($_Object,'ceylon.json::Object',m$1.Basic,m$2.MutableMap);
(function(object$){
m$1.atr$(object$,'$wghd6m$42a',function(){return this.$wghd6m$42a_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:{t:m$1.$_String},Item$Entry:Value()}}}},$cont:$_Object,d:['ceylon.json','Object','$at','values$6zuosx']};});
m$1.atr$(object$,'$wghd6m$42b',function(){return this.$wghd6m$42b_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2.HashMap,a:{Item$HashMap:Value(),Key$HashMap:{t:m$1.$_String}}},$cont:$_Object,d:['ceylon.json','Object','$at','contents$adyvg7']};});
m$1.atr$(object$,'string',function(){
var object$=this;
var $42d=StringEmitter();
visit(object$,$42d);
return $42d.string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$_Object,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Object:$at:string')];},d:['ceylon.json','Object','$at','string']};});m$1.atr$(object$,'pretty',function(){
var object$=this;
var $42e=StringEmitter(true);
visit(object$,$42e,true);
return $42e.string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$_Object,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Object:$at:pretty')];},d:['ceylon.json','Object','$at','pretty']};});object$.clear=function(){var object$=this;
return object$.$wghd6m$42b.clear();
};
object$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:$_Object,pa:3,d:['ceylon.json','Object','$m','clear']};};
object$.clone=function(){var object$=this;
return $_Object(object$.$wghd6m$42b);
};
object$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Object},ps:[],$cont:$_Object,pa:3,d:['ceylon.json','Object','$m','clone']};};
object$.$_get=function($42f){var object$=this;
return object$.$wghd6m$42b.$_get($42f);
};object$.defines=function($42g){var object$=this;
return object$.$wghd6m$42b.defines($42g);
};object$.iterator=function(){var object$=this;
return object$.$wghd6m$42b.iterator();
};object$.put=function($42h,$42i){var object$=this;
return object$.$wghd6m$42b.put($42h,$42i);
};object$.putAll=function($42j){var object$=this;
return object$.$wghd6m$42b.putAll($42j);
};object$.remove=function($42k){var object$=this;
return object$.$wghd6m$42b.remove($42k);
};m$1.atr$(object$,'size',function(){
var object$=this;
return object$.$wghd6m$42b.size;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$_Object,pa:3,d:['ceylon.json','Object','$at','size']};});
m$1.atr$(object$,'hash',function(){
var object$=this;
return object$.$wghd6m$42b.hash;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$_Object,pa:3,d:['ceylon.json','Object','$at','hash']};});
object$.equals=function($42l){
var object$=this;
var $42m;
if(m$1.is$(($42m=$42l),{t:$_Object})){
return ((object$===$42m)||m$1.$eq$(object$.$wghd6m$42b,$42m.$wghd6m$42b));
}
function $42n(){return $42l;}
return false;
};object$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:$_Object,pa:3,d:['ceylon.json','Object','$m','equals']};};
object$.getInteger=function($42o){
var object$=this;
var $42p=object$.$_get($42o);
var $42q;
if(m$1.is$(($42q=$42p),{t:m$1.Integer})){
return $42q;
}
function $42r(){return $42p;}
throw m$1.wrapexc(InvalidTypeException("Expecting an Integer but got: "+(($42s=$42r(),m$1.nn$($42s)?$42s:"null").string)),'73:8-75:32','ceylon/json/Object.ceylon');
var $42s;
};object$.getInteger.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc("Returns an [[Integer]] value."),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key dot not exist or points to a type that \nis not [[Integer]].")];},d:['ceylon.json','Object','$m','getInteger']};};
object$.getFloat=function($42t){
var object$=this;
var $42u=object$.$_get($42t);
var $42v;
if(m$1.is$(($42v=$42u),{t:m$1.Float})){
return $42v;
}
function $42w(){return $42u;}
throw m$1.wrapexc(InvalidTypeException("Expecting a Float but got: "+(($42x=$42w(),m$1.nn$($42x)?$42x:"null").string)),'87:8-89:32','ceylon/json/Object.ceylon');
var $42x;
};object$.getFloat.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Float},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc("Returns an [[Float]] value."),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key dot not exist or points to a type that \nis not [[Float]].")];},d:['ceylon.json','Object','$m','getFloat']};};
object$.getBoolean=function($42y){
var object$=this;
var $42z=object$.$_get($42y);
var $430;
if(m$1.is$(($430=$42z),{t:m$1.$_Boolean})){
return $430;
}
function $431(){return $42z;}
throw m$1.wrapexc(InvalidTypeException("Expecting a Boolean but got: "+(($432=$431(),m$1.nn$($432)?$432:"null").string)),'101:8-103:32','ceylon/json/Object.ceylon');
var $432;
};object$.getBoolean.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc("Returns an [[Boolean]] value."),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key dot not exist or points to a type that \nis not [[Boolean]].")];},d:['ceylon.json','Object','$m','getBoolean']};};
object$.getString=function($433){
var object$=this;
var $434=object$.$_get($433);
var $435;
if(m$1.is$(($435=$434),{t:m$1.$_String})){
return $435;
}
function $436(){return $434;}
throw m$1.wrapexc(InvalidTypeException("Expecting a String but got: "+(($437=$436(),m$1.nn$($437)?$437:"null").string)),'115:8-117:32','ceylon/json/Object.ceylon');
var $437;
};object$.getString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc("Returns an [[String]] value."),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key dot not exist or points to a type that \nis not [[String]].")];},d:['ceylon.json','Object','$m','getString']};};
object$.getObject=function($438){
var object$=this;
var $439=object$.$_get($438);
var $43a;
if(m$1.is$(($43a=$439),{t:$_Object})){
return $43a;
}
function $43b(){return $439;}
throw m$1.wrapexc(InvalidTypeException("Expecting an Object but got: "+(($43c=$43b(),m$1.nn$($43c)?$43c:"null").string)),'129:8-131:32','ceylon/json/Object.ceylon');
var $43c;
};object$.getObject.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Object},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc("Returns an [[Object]] value."),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key dot not exist or points to a type that \nis not [[Object]].")];},d:['ceylon.json','Object','$m','getObject']};};
object$.getArray=function($43d){
var object$=this;
var $43e=object$.$_get($43d);
var $43f;
if(m$1.is$(($43f=$43e),{t:$_Array})){
return $43f;
}
function $43g(){return $43e;}
throw m$1.wrapexc(InvalidTypeException("Expecting an Array but got: "+(($43h=$43g(),m$1.nn$($43h)?$43h:"null").string)),'143:8-145:32','ceylon/json/Object.ceylon');
var $43h;
};object$.getArray.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Array},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc("Returns an [[Array]] value."),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key dot not exist or points to a type that \nis not [[Array]].")];},d:['ceylon.json','Object','$m','getArray']};};
object$.getIntegerOrNull=function($43i){
var object$=this;
var $43j=object$.$_get($43i);
var $43k;
if(m$1.is$(($43k=$43j),m$1.mut$([{t:m$1.Null},{t:m$1.Integer}]))){
return $43k;
}
else{
throw m$1.wrapexc(InvalidTypeException("Expecting an Integer but got: "+($43k.string)),'161:12-162:56','ceylon/json/Object.ceylon');
}
};object$.getIntegerOrNull.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Object:$m:getIntegerOrNull'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key points to a type that is neither \n[[Integer]] nor [[Null]].")];},d:['ceylon.json','Object','$m','getIntegerOrNull']};};
object$.getFloatOrNull=function($43l){
var object$=this;
var $43m=object$.$_get($43l);
var $43n;
if(m$1.is$(($43n=$43m),m$1.mut$([{t:m$1.Null},{t:m$1.Float}]))){
return $43n;
}
else{
throw m$1.wrapexc(InvalidTypeException("Expecting a Float but got: "+($43n.string)),'177:12-178:53','ceylon/json/Object.ceylon');
}
};object$.getFloatOrNull.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Float}]},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Object:$m:getFloatOrNull'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key points to a type that is neither \n[[Float]] nor [[Null]].")];},d:['ceylon.json','Object','$m','getFloatOrNull']};};
object$.getBooleanOrNull=function($43o){
var object$=this;
var $43p=object$.$_get($43o);
var $43q;
if(m$1.is$(($43q=$43p),m$1.mut$([{t:m$1.Null},{t:m$1.$_Boolean}]))){
return $43q;
}
else{
throw m$1.wrapexc(InvalidTypeException("Expecting a Boolean but got: "+($43q.string)),'193:12-194:55','ceylon/json/Object.ceylon');
}
};object$.getBooleanOrNull.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Object:$m:getBooleanOrNull'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key points to a type that is neither \n[[Boolean]] nor [[Null]].")];},d:['ceylon.json','Object','$m','getBooleanOrNull']};};
object$.getStringOrNull=function($43r){
var object$=this;
var $43s=object$.$_get($43r);
var $43t;
if(m$1.is$(($43t=$43s),m$1.mut$([{t:m$1.$_String},{t:m$1.Null}]))){
return $43t;
}
else{
throw m$1.wrapexc(InvalidTypeException("Expecting a String but got: "+($43t.string)),'209:12-210:54','ceylon/json/Object.ceylon');
}
};object$.getStringOrNull.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Object:$m:getStringOrNull'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key points to a type that is neither \n[[String]] nor [[Null]].")];},d:['ceylon.json','Object','$m','getStringOrNull']};};
object$.getObjectOrNull=function($43u){
var object$=this;
var $43v=object$.$_get($43u);
var $43w;
if(m$1.is$(($43w=$43v),m$1.mut$([{t:m$1.Null},{t:$_Object}]))){
return $43w;
}
else{
throw m$1.wrapexc(InvalidTypeException("Expecting an Object but got: "+($43w.string)),'225:12-226:55','ceylon/json/Object.ceylon');
}
};object$.getObjectOrNull.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$_Object}]},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Object:$m:getObjectOrNull'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key points to a type that is neither \n[[Object]] nor [[Null]].")];},d:['ceylon.json','Object','$m','getObjectOrNull']};};
object$.getArrayOrNull=function($43x){
var object$=this;
var $43y=object$.$_get($43x);
var $43z;
if(m$1.is$(($43z=$43y),m$1.mut$([{t:m$1.Null},{t:$_Array}]))){
return $43z;
}
else{
throw m$1.wrapexc(InvalidTypeException("Expecting an Array but got: "+($43z.string)),'241:12-242:54','ceylon/json/Object.ceylon');
}
};object$.getArrayOrNull.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$_Array}]},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Object:$m:getArrayOrNull'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key points to a type that is neither \n[[Array]] nor [[Null]].")];},d:['ceylon.json','Object','$m','getArrayOrNull']};};
object$.toString=function(){return this.string.valueOf();};
})($_Object.$$.prototype);
}
return $_Object;
}
ex$.$init$$_Object=$init$$_Object;$init$$_Object();
function ParseException($wghd6m$440,line,column,parseException$){
$init$ParseException();
if(parseException$===undefined)parseException$=new ParseException.$$;
parseException$.$wghd6m$440_=$wghd6m$440;
parseException$.line_=line;
parseException$.column_=column;
m$1.Exception($wghd6m$440+" at "+(line.string)+":"+(column.string)+" (line:column)",undefined,parseException$);
return parseException$;
}
ParseException.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Exception},ps:[{nm:'message',mt:'prm',$t:{t:m$1.$_String}},{nm:'line',mt:'prm',$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc("The error line (1-based)")];}},{nm:'column',mt:'prm',$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc("The error column (1-based)")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:ParseException')];},d:['ceylon.json','ParseException']};};
ex$.ParseException=ParseException;
function $init$ParseException(){
if(ParseException.$$===undefined){
m$1.initTypeProto(ParseException,'ceylon.json::ParseException',m$1.Exception);
(function(parseException$){
m$1.atr$(parseException$,'$wghd6m$440',function(){return this.$wghd6m$440_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:ParseException,d:['ceylon.json','ParseException','$at','message$55bchf']};});
m$1.atr$(parseException$,'line',function(){return this.line_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ParseException,pa:1,an:function(){return[m$1.doc("The error line (1-based)")];},d:['ceylon.json','ParseException','$at','line']};});
m$1.atr$(parseException$,'column',function(){return this.column_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ParseException,pa:1,an:function(){return[m$1.doc("The error column (1-based)")];},d:['ceylon.json','ParseException','$at','column']};});
parseException$.toString=function(){return this.string.valueOf();};
})(ParseException.$$.prototype);
}
return ParseException;
}
ex$.$init$ParseException=$init$ParseException;$init$ParseException();
function Printer($wghd6m$441,printer$){
$init$Printer();
if(printer$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.json::Printer"),'?','?')
if($wghd6m$441===undefined){$wghd6m$441=$init$Printer().$defs$pretty(printer$);}
printer$.$wghd6m$441_=$wghd6m$441;
printer$.$wghd6m$442_=(0);
return printer$;
}
Printer.$defs$pretty=function(printer$){return false};Printer.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'pretty',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],pa:257,an:function(){return[m$1.doc("A JSON Printer"),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.json','Printer']};};
ex$.Printer=Printer;
function $init$Printer(){
if(Printer.$$===undefined){
m$1.initTypeProto(Printer,'ceylon.json::Printer',m$1.Basic);
(function(printer$){
m$1.atr$(printer$,'$wghd6m$441',function(){return this.$wghd6m$441_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Printer,d:['ceylon.json','Printer','$at','pretty$6ma7eg']};});
m$1.atr$(printer$,'$wghd6m$442',function(){return this.$wghd6m$442_;},function($443){return this.$wghd6m$442_=$443;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Printer,pa:1024,d:['ceylon.json','Printer','$at','level$k1uxue']};});
printer$.$wghd6m$444=function(){
var printer$=this;
($445=printer$.$wghd6m$442,printer$.$wghd6m$442=$445.successor,$445);
var $445;
};printer$.$wghd6m$444.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Printer,d:['ceylon.json','Printer','$m','enter$lrxp1m']};};
printer$.$wghd6m$446=function(){
var printer$=this;
($447=printer$.$wghd6m$442,printer$.$wghd6m$442=$447.predecessor,$447);
var $447;
};printer$.$wghd6m$446.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Printer,d:['ceylon.json','Printer','$m','leave$jlu1e9']};};
printer$.$wghd6m$448=function(){
var printer$=this;
if(printer$.$wghd6m$441){
printer$.print("\n");
if((printer$.$wghd6m$442>(0))){
var $44a=(0),$449=(printer$.$wghd6m$442-(1)),$44b=$44a.compare($449),$44c=$44b===m$1.smaller()?'successor':'predecessor';for(var $44d=m$1.eorl$($44b);$44d($449,$44a);$44a=$44a[$44c]){
printer$.print(" ");
}
}
}
};printer$.$wghd6m$448.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Printer,d:['ceylon.json','Printer','$m','indent$1opgam']};};
printer$.print={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],$cont:Printer,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Printer:$m:print')];},d:['ceylon.json','Printer','$m','print']};}};printer$.printObject=function($44e){
var printer$=this;
printer$.print("{");
printer$.$wghd6m$444();
var $44f=true;
var $44h;for(var $44g=$44e.$_sort(compareKeys).iterator();($44h=$44g.next())!==m$1.finished();){
if($44f){
$44f=false;
}
else{
printer$.print(",");
}
printer$.$wghd6m$448();
printer$.printString($44h.key);
printer$.print(":");
if(printer$.$wghd6m$441){
printer$.print(" ");
}
printer$.printValue($44h.item);
}
printer$.$wghd6m$446();
if(!$44f){
printer$.$wghd6m$448();
}
printer$.print("}");
};printer$.printObject.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'o',mt:'prm',$t:{t:$_Object}}],$cont:Printer,pa:9,an:function(){return[m$1.doc("Prints an `Object`")];},d:['ceylon.json','Printer','$m','printObject']};};
printer$.printArray=function($44i){
var printer$=this;
printer$.print("[");
printer$.$wghd6m$444();
var $44j=true;
var $44l;for(var $44k=$44i.iterator();($44l=$44k.next())!==m$1.finished();){
if($44j){
$44j=false;
}
else{
printer$.print(",");
}
printer$.$wghd6m$448();
printer$.printValue($44l);
}
printer$.$wghd6m$446();
if(!$44j){
printer$.$wghd6m$448();
}
printer$.print("]");
};printer$.printArray.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'o',mt:'prm',$t:{t:$_Array}}],$cont:Printer,pa:9,an:function(){return[m$1.doc("Prints an `Array`")];},d:['ceylon.json','Printer','$m','printArray']};};
printer$.printString=function($44m){
var printer$=this;
printer$.print("\"");
var $44o;for(var $44n=$44m.iterator();($44o=$44n.next())!==m$1.finished();){
if(m$1.$eq$($44o,m$1.Character(34,true))){
printer$.print("\\".plus("\""));
}
else{
if(m$1.$eq$($44o,m$1.Character(92,true))){
printer$.print("\\\\");
}
else{
if(m$1.$eq$($44o,m$1.Character(47,true))){
printer$.print("\\".plus("/"));
}
else{
if(m$1.$eq$($44o,(8).character)){
printer$.print("\\".plus("b"));
}
else{
if(m$1.$eq$($44o,(12).character)){
printer$.print("\\".plus("f"));
}
else{
if(m$1.$eq$($44o,(10).character)){
printer$.print("\\".plus("n"));
}
else{
if(m$1.$eq$($44o,(13).character)){
printer$.print("\\".plus("r"));
}
else{
if(m$1.$eq$($44o,(9).character)){
printer$.print("\\".plus("t"));
}
else{
printer$.print($44o.string);
}
}
}
}
}
}
}
}
}
printer$.print("\"");
};printer$.printString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'s',mt:'prm',$t:{t:m$1.$_String}}],$cont:Printer,pa:9,an:function(){return[m$1.doc("Prints a `String`")];},d:['ceylon.json','Printer','$m','printString']};};
printer$.printNumber=function($44p){
var printer$=this;
printer$.print(formatNumber($44p));
};printer$.printNumber.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'n',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Float}]}}],$cont:Printer,pa:9,an:function(){return[m$1.doc("Prints an `Integer|Float`")];},d:['ceylon.json','Printer','$m','printNumber']};};
printer$.printBoolean=function($44q){var printer$=this;
return printer$.print($44q.string);
};
printer$.printBoolean.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'v',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:Printer,pa:9,an:function(){return[m$1.doc("Prints a `Boolean`")];},d:['ceylon.json','Printer','$m','printBoolean']};};
printer$.printNull=function(){var printer$=this;
return printer$.print("null");
};
printer$.printNull.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Printer,pa:9,an:function(){return[m$1.doc("Prints `null`")];},d:['ceylon.json','Printer','$m','printNull']};};
printer$.printValue=function($44r){
var printer$=this;
var $44s=$44r;
if(m$1.is$($44s,{t:m$1.$_String})) {
printer$.printString($44s);
}
else if(m$1.is$($44s,{t:m$1.Integer})) {
printer$.printNumber($44s);
}
else if(m$1.is$($44s,{t:m$1.Float})) {
printer$.printNumber($44s);
}
else if(m$1.is$($44s,{t:m$1.$_Boolean})) {
printer$.printBoolean($44s);
}
else if(m$1.is$($44s,{t:$_Object})) {
printer$.printObject($44s);
}
else if(m$1.is$($44s,{t:$_Array})) {
printer$.printArray($44s);
}
else if(m$1.is$($44s,{t:m$1.Null})) {
printer$.printNull();
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};printer$.printValue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'val',mt:'prm',$t:Value()}],$cont:Printer,pa:9,an:function(){return[m$1.doc("Prints a JSON value")];},d:['ceylon.json','Printer','$m','printValue']};};
printer$.toString=function(){return this.string.valueOf();};
})(Printer.$$.prototype);
}
return Printer;
}
ex$.$init$Printer=$init$Printer;$init$Printer();
function formatNumber($44t){
var $44u;
var $44v;
if(m$1.is$(($44v=$44t),{t:m$1.Float})){
if(($44v.infinite||$44v.$_undefined)){
$44u="null";
}
else{
$44u=$44v.string;
}
}
else{
$44u=$44v.string;
}
return $44u;
};formatNumber.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'n',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Float}]}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.json:formatNumber')];},d:['ceylon.json','formatNumber']};};
function compareKeys($44w,$44x){return $44w.key.compare($44x.key);
};
compareKeys.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:{t:m$1.$_String},Item$Entry:Value()}}},{nm:'y',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:{t:m$1.$_String},Item$Entry:Value()}}}],d:['ceylon.json','compareKeys']};};
function StringPrinter($wghd6m$44y,stringPrinter$){
$init$StringPrinter();
if(stringPrinter$===undefined)stringPrinter$=new StringPrinter.$$;
if($wghd6m$44y===undefined){$wghd6m$44y=$init$StringPrinter().$defs$pretty(stringPrinter$);}
stringPrinter$.$wghd6m$44y_=$wghd6m$44y;
Printer($wghd6m$44y,stringPrinter$);
stringPrinter$.$wghd6m$44z_=m$1.StringBuilder();
return stringPrinter$;
}
StringPrinter.$defs$pretty=function(stringPrinter$){return false};StringPrinter.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Printer},ps:[{nm:'pretty',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:StringPrinter'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.json','StringPrinter']};};
ex$.StringPrinter=StringPrinter;
function $init$StringPrinter(){
if(StringPrinter.$$===undefined){
m$1.initTypeProto(StringPrinter,'ceylon.json::StringPrinter',$init$Printer());
(function(stringPrinter$){
m$1.atr$(stringPrinter$,'$wghd6m$44y',function(){return this.$wghd6m$44y_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:StringPrinter,d:['ceylon.json','StringPrinter','$at','pretty$3cghnj']};});
m$1.atr$(stringPrinter$,'$wghd6m$44z',function(){return this.$wghd6m$44z_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.StringBuilder},$cont:StringPrinter,d:['ceylon.json','StringPrinter','$at','builder$4bb58c']};});
stringPrinter$.print=function($450){var stringPrinter$=this;
return stringPrinter$.$wghd6m$44z.append($450);
};
stringPrinter$.print.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],$cont:StringPrinter,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:StringPrinter:$m:print')];},d:['ceylon.json','StringPrinter','$m','print']};};
m$1.atr$(stringPrinter$,'string',function(){
var stringPrinter$=this;
return stringPrinter$.$wghd6m$44z.string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:StringPrinter,pa:11,an:function(){return[m$1.doc("Returns the printed JSON")];},d:['ceylon.json','StringPrinter','$at','string']};});
stringPrinter$.toString=function(){return this.string.valueOf();};
})(StringPrinter.$$.prototype);
}
return StringPrinter;
}
ex$.$init$StringPrinter=$init$StringPrinter;$init$StringPrinter();
function Value(){var $452=m$1.mut$([ObjectValue(),{t:m$1.Null}]);$452.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Value')];},d:['ceylon.json','Value']};};return $452;}
ex$.Value=Value;
function ObjectValue(){var $453=m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array}]);$453.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:ObjectValue')];},d:['ceylon.json','ObjectValue']};};return $453;}
ex$.ObjectValue=ObjectValue;
function Visitor(visitor$){
}
Visitor.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Visitor'),m$1.by(m$1.$arr$sa$(["Tom Bentley"],{t:m$1.$_String}))];},d:['ceylon.json','Visitor']};};
ex$.Visitor=Visitor;
function $init$Visitor(){
if(Visitor.$$===undefined){
m$1.initTypeProtoI(Visitor,'ceylon.json::Visitor');
(function(visitor$){
visitor$.onStartObject={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Visitor,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Visitor:$m:onStartObject')];},d:['ceylon.json','Visitor','$m','onStartObject']};}};visitor$.onKey={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:Visitor,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Visitor:$m:onKey')];},d:['ceylon.json','Visitor','$m','onKey']};}};visitor$.onEndObject={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Visitor,pa:5,an:function(){return[m$1.doc("Called at the end of an object.")];},d:['ceylon.json','Visitor','$m','onEndObject']};}};visitor$.onStartArray={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Visitor,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Visitor:$m:onStartArray')];},d:['ceylon.json','Visitor','$m','onStartArray']};}};visitor$.onEndArray={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Visitor,pa:5,an:function(){return[m$1.doc("Called at the end of an array.")];},d:['ceylon.json','Visitor','$m','onEndArray']};}};visitor$.onNumber={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'number',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Float}]}}],$cont:Visitor,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Visitor:$m:onNumber')];},d:['ceylon.json','Visitor','$m','onNumber']};}};visitor$.onBoolean={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'boolean',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:Visitor,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Visitor:$m:onBoolean')];},d:['ceylon.json','Visitor','$m','onBoolean']};}};visitor$.onNull={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Visitor,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Visitor:$m:onNull')];},d:['ceylon.json','Visitor','$m','onNull']};}};visitor$.onString={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],$cont:Visitor,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Visitor:$m:onString')];},d:['ceylon.json','Visitor','$m','onString']};}};visitor$.toString=function(){return this.string.valueOf();};
})(Visitor.$$.prototype);
}
return Visitor;
}
ex$.$init$Visitor=$init$Visitor;$init$Visitor();
function visit($454,$455,$456){
if($456===undefined){$456=false;}
var $457=$454;
if(m$1.is$($457,{t:$_Object})) {
$455.onStartObject();
var $458=($459=($456?$457:null),m$1.nn$($459)?$459:$457.$_sort(compareKeys));
var $459;
var $45b;for(var $45a=$458.iterator();($45b=$45a.next())!==m$1.finished();){
var $45c=$45b.key,$45d=$45b.item;
$455.onKey($45c);
visit($45d,$455);
}
$455.onEndObject();
}
else if(m$1.is$($457,{t:$_Array})) {
$455.onStartArray();
var $45f;for(var $45e=$457.iterator();($45f=$45e.next())!==m$1.finished();){
visit($45f,$455);
}
$455.onEndArray();
}
else if(m$1.is$($457,{t:m$1.$_String})) {
$455.onString($457);
}
else if(m$1.is$($457,m$1.mut$([{t:m$1.Float},{t:m$1.Integer}]))) {
$455.onNumber($457);
}
else if(m$1.is$($457,{t:m$1.$_Boolean})) {
$455.onBoolean($457);
}
else if(m$1.is$($457,{t:m$1.Null})) {
$455.onNull();
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
ex$.visit=visit;
visit.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'subject',mt:'prm',$t:Value()},{nm:'visitor',mt:'prm',$t:{t:Visitor}},{nm:'sortedKeys',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:visit'),m$1.by(m$1.$arr$sa$(["Tom Bentley"],{t:m$1.$_String}))];},d:['ceylon.json','visit']};};
function parseTrue($45g){
$45g.eatSpacesUntil(m$1.Character(116,true));
$45g.eat(m$1.Character(114,true));
$45g.eat(m$1.Character(117,true));
$45g.eat(m$1.Character(101,true));
return true;
}
ex$.parseTrue=parseTrue;
parseTrue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'tokenizer',mt:'prm',$t:{t:Tokenizer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:parseTrue')];},d:['ceylon.json','parseTrue']};};
function parseFalse($45h){
$45h.eatSpacesUntil(m$1.Character(102,true));
$45h.eat(m$1.Character(97,true));
$45h.eat(m$1.Character(108,true));
$45h.eat(m$1.Character(115,true));
$45h.eat(m$1.Character(101,true));
return false;
}
ex$.parseFalse=parseFalse;
parseFalse.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'tokenizer',mt:'prm',$t:{t:Tokenizer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:parseFalse')];},d:['ceylon.json','parseFalse']};};
function parseNull($45i){
$45i.eatSpacesUntil(m$1.Character(110,true));
$45i.eat(m$1.Character(117,true));
$45i.eat(m$1.Character(108,true));
$45i.eat(m$1.Character(108,true));
return null;
}
ex$.parseNull=parseNull;
parseNull.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Null},ps:[{nm:'tokenizer',mt:'prm',$t:{t:Tokenizer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:parseNull')];},d:['ceylon.json','parseNull']};};
function parseKeyOrString($45j){
$45j.eatSpacesUntil(m$1.Character(34,true));
var $45k=m$1.StringBuilder();
while(!$45j.check(m$1.Character(34,true))){
var $45l=$45j.eatChar();
if(m$1.$eq$($45l,m$1.Character(92,true))){
$45k.append(parseStringEscape($45j).string);
}
else{
$45k.append($45l.string);
}
}
return $45k.string;
}
ex$.parseKeyOrString=parseKeyOrString;
parseKeyOrString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'tokenizer',mt:'prm',$t:{t:Tokenizer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:parseKeyOrString')];},d:['ceylon.json','parseKeyOrString']};};
function parseStringEscape($45m){
var $45n=$45m.eatChar();
if(((m$1.$eq$($45n,m$1.Character(34,true))||m$1.$eq$($45n,m$1.Character(92,true)))||m$1.$eq$($45n,m$1.Character(47,true)))){
return $45n;
}
if(m$1.$eq$($45n,m$1.Character(98,true))){
return m$1.Character(8,true);
}
if(m$1.$eq$($45n,m$1.Character(102,true))){
return m$1.Character(12,true);
}
if(m$1.$eq$($45n,m$1.Character(114,true))){
return m$1.Character(13,true);
}
if(m$1.$eq$($45n,m$1.Character(110,true))){
return m$1.Character(10,true);
}
if(m$1.$eq$($45n,m$1.Character(116,true))){
return m$1.Character(9,true);
}
if(m$1.$eq$($45n,m$1.Character(117,true))){
return parseStringUnicode($45m);
}
throw m$1.wrapexc(ParseException("Expected String escape sequence, got "+($45n.string)+" TERM ",$45m.line,$45m.column),'66:4-68:41','ceylon/json/parse.ceylon');
};parseStringEscape.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Character},ps:[{nm:'tokenizer',mt:'prm',$t:{t:Tokenizer}}],d:['ceylon.json','parseStringEscape']};};
function parseStringUnicode($45o){
var $45p=((((parseHex($45o)*(16).power((3)))+(parseHex($45o)*(16).power((2))))+(parseHex($45o)*(16)))+parseHex($45o));
return $45p.character;
};parseStringUnicode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Character},ps:[{nm:'tokenizer',mt:'prm',$t:{t:Tokenizer}}],d:['ceylon.json','parseStringUnicode']};};
function parseHex($45q){
var $45r=$45q.eatChar();
var $45s=$45r.integer;
if((($45s>=m$1.Character(48,true).integer)&&($45s<=m$1.Character(57,true).integer))){
return ($45s-m$1.Character(48,true).integer);
}
if((($45s>=m$1.Character(97,true).integer)&&($45s<=m$1.Character(102,true).integer))){
return (((10)+$45s)-m$1.Character(97,true).integer);
}
if((($45s>=m$1.Character(65,true).integer)&&($45s<=m$1.Character(70,true).integer))){
return (((10)+$45s)-m$1.Character(65,true).integer);
}
throw m$1.wrapexc(ParseException("Expecting hex number, got "+($45r.string),$45q.line,$45q.column),'93:4-95:41','ceylon/json/parse.ceylon');
};parseHex.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'tokenizer',mt:'prm',$t:{t:Tokenizer}}],d:['ceylon.json','parseHex']};};
function parseNumber($45t){
$45t.eatSpaces();
var $45u=$45t.check(m$1.Character(45,true));
var $45v=parseDigits($45t,true);
var $45w;
m$1.asrt$((m$1.is$(($45w=m$1.Integer.$st$.parse($45v)),{t:m$1.Integer})),"Assertion failed: "+"\n\tviolated is Integer wholePart = Integer.parse(wholePartString)\n\tat parse.ceylon (103:11-103:65)",'103:4-103:66','parse.ceylon');
if(($45t.hasMore&&$45t.check(m$1.Character(46,true)))){
var $45x=parseDigits($45t,false);
var $45y=parseExponent($45t);
var $45z=function(){var $460;
if(m$1.nn$(($460=$45y)))return "e"+($460.string);else return ""}();
var $461=($462=($45u?"-":null),m$1.nn$($462)?$462:"");
var $462;
var $463=$461+""+($45w.string)+"."+($45x)+""+($45z);
var $464=function(){var $465;
if(m$1.is$(($465=m$1.Float.$st$.parse($463)),{t:m$1.Float}))return $465;else return null}();
var $466;
m$1.asrt$((m$1.nn$(($466=$464))),"Assertion failed: "+"\n\tviolated exists float\n\tat parse.ceylon (113:14-113:27)",'113:8-113:28','parse.ceylon');
return $466;
}
var $467=($468=($45u?(-$45w):null),m$1.nn$($468)?$468:$45w);
var $468;
var $469=parseExponent($45t);
var $46a;
if(m$1.nn$(($46a=$469))){
return m$1.Float($467.$_float*(10).$_float.$fpower($46a.$_float));
}
function $46b(){return $469;}
return $467;
}
ex$.parseNumber=parseNumber;
parseNumber.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Float}]},ps:[{nm:'tokenizer',mt:'prm',$t:{t:Tokenizer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:parseNumber')];},d:['ceylon.json','parseNumber']};};
function parseDigits($46c,$46d){
var $46e=$46c.eatChar();
if(!$46c.isDigit($46e)){
throw m$1.wrapexc(ParseException("Expected digit, got: "+($46e.string),$46c.line,$46c.column),'128:8-130:45','ceylon/json/parse.ceylon');
}
if(((($46d&&m$1.$eq$($46e,m$1.Character(48,true)))&&$46c.hasMore)&&$46c.isDigit($46c.character()))){
throw m$1.wrapexc(ParseException("Expected non-zero digit, got: "+($46e.string),$46c.line,$46c.column),'134:8-136:45','ceylon/json/parse.ceylon');
}
var $46f=m$1.StringBuilder();
$46f.appendCharacter($46e);
while(($46c.hasMore&&$46c.isDigit($46c.character()))){
$46f.appendCharacter($46c.eatChar());
}
return $46f.string;
};parseDigits.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'tokenizer',mt:'prm',$t:{t:Tokenizer}},{nm:'requireNonZeroFirstChar',mt:'prm',$t:{t:m$1.$_Boolean}}],d:['ceylon.json','parseDigits']};};
function parseDigit($46g){return ($46g.integer-m$1.Character(48,true).integer);
};
parseDigit.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],d:['ceylon.json','parseDigit']};};
function parseExponent($46h){
if(($46h.hasMore&&($46h.check(m$1.Character(101,true))||$46h.check(m$1.Character(69,true))))){
var $46i;
if($46h.check(m$1.Character(45,true))){
$46i=true;
}
else{
if($46h.check(m$1.Character(43,true))){
$46i=false;
}
else{
$46i=false;
}
}
var $46j;
m$1.asrt$((m$1.is$(($46j=m$1.Integer.$st$.parse(parseDigits($46h,false))),{t:m$1.Integer})),"Assertion failed: "+"\n\tviolated is Integer exponentPart\n            = Integer.parse(parseDigits(tokenizer, false))\n\tat parse.ceylon (158:15-159:58)",'158:8-159:59','parse.ceylon');
return ($46k=($46i?(-$46j):null),m$1.nn$($46k)?$46k:$46j);
var $46k;
}
return null;
};parseExponent.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'tokenizer',mt:'prm',$t:{t:Tokenizer}}],d:['ceylon.json','parseExponent']};};
function Parser($wghd6m$46l,visitor,parser$){
$init$Parser();
if(parser$===undefined)parser$=new Parser.$$;
parser$.$wghd6m$46l_=$wghd6m$46l;
parser$.visitor_=visitor;
return parser$;
}
Parser.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'tokenizer',mt:'prm',$t:{t:Tokenizer},an:function(){return[m$1.doc("The data to be parsed.")];}},{nm:'visitor',mt:'prm',$t:{t:Visitor},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Parser:$at:visitor')];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Parser'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.json','Parser']};};
ex$.Parser=Parser;
function $init$Parser(){
if(Parser.$$===undefined){
m$1.initTypeProto(Parser,'ceylon.json::Parser',m$1.Basic);
(function(parser$){
m$1.atr$(parser$,'$wghd6m$46l',function(){return this.$wghd6m$46l_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tokenizer},$cont:Parser,an:function(){return[m$1.doc("The data to be parsed.")];},d:['ceylon.json','Parser','$at','tokenizer$6turdq']};});
m$1.atr$(parser$,'visitor',function(){return this.visitor_;},undefined,function(){return{mod:$CCMM$,$t:{t:Visitor},$cont:Parser,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Parser:$at:visitor')];},d:['ceylon.json','Parser','$at','visitor']};});
parser$.$wghd6m$46m=function(){
var parser$=this;
parser$.visitor.onStartObject();
parser$.$wghd6m$46l.eatSpacesUntil(m$1.Character(123,true));
parser$.$wghd6m$46l.eatSpaces();
if(!parser$.$wghd6m$46l.check(m$1.Character(125,true))){
while(true){
var $46n=parseKeyOrString(parser$.$wghd6m$46l);
parser$.$wghd6m$46l.eatSpacesUntil(m$1.Character(58,true));
parser$.visitor.onKey($46n);
parser$.parseValue();
parser$.$wghd6m$46l.eatSpaces();
if(parser$.$wghd6m$46l.check(m$1.Character(125,true))){
break;
}
if(!parser$.$wghd6m$46l.check(m$1.Character(44,true))){
throw m$1.wrapexc(ParseException("Expected \'}\' or \',\' but got "+(parser$.$wghd6m$46l.character().string),parser$.$wghd6m$46l.line,parser$.$wghd6m$46l.column),'198:20-200:57','ceylon/json/parse.ceylon');
}
}
}
parser$.visitor.onEndObject();
};parser$.$wghd6m$46m.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseObject$jwd68v']};};
parser$.$wghd6m$46o=function(){
var parser$=this;
parser$.visitor.onStartArray();
parser$.$wghd6m$46l.eatSpacesUntil(m$1.Character(91,true));
parser$.$wghd6m$46l.eatSpaces();
if(!parser$.$wghd6m$46l.check(m$1.Character(93,true))){
while(true){
parser$.parseValue();
parser$.$wghd6m$46l.eatSpaces();
if(parser$.$wghd6m$46l.check(m$1.Character(93,true))){
break;
}
if(!parser$.$wghd6m$46l.check(m$1.Character(44,true))){
throw m$1.wrapexc(ParseException("Expected \']\' or \',\' but got "+(parser$.$wghd6m$46l.character().string),parser$.$wghd6m$46l.line,parser$.$wghd6m$46l.column),'220:20-222:57','ceylon/json/parse.ceylon');
}
}
}
parser$.visitor.onEndArray();
};parser$.$wghd6m$46o.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseArray$qjniqd']};};
parser$.parseValue=function(){
var parser$=this;
parser$.$wghd6m$46l.eatSpaces();
var $46p=parser$.$wghd6m$46l.character();
if(m$1.$eq$($46p,m$1.Character(123,true))){
parser$.$wghd6m$46m();
return;
}
if(m$1.$eq$($46p,m$1.Character(91,true))){
parser$.$wghd6m$46o();
return;
}
if(m$1.$eq$($46p,m$1.Character(34,true))){
parser$.$wghd6m$46q();
return;
}
if(m$1.$eq$($46p,m$1.Character(116,true))){
parser$.visitor.onBoolean(parseTrue(parser$.$wghd6m$46l));
return;
}
if(m$1.$eq$($46p,m$1.Character(102,true))){
parser$.visitor.onBoolean(parseFalse(parser$.$wghd6m$46l));
return;
}
if(m$1.$eq$($46p,m$1.Character(110,true))){
parseNull(parser$.$wghd6m$46l);
parser$.visitor.onNull();
return;
}
if((parser$.$wghd6m$46l.isDigit($46p)||m$1.$eq$($46p,m$1.Character(45,true)))){
parser$.visitor.onNumber(parseNumber(parser$.$wghd6m$46l));
return;
}
throw m$1.wrapexc(ParseException("Invalid value: expecting object, array, string, ".plus("number, true, false, null but got "+($46p.string)),parser$.$wghd6m$46l.line,parser$.$wghd6m$46l.column),'264:8-267:45','ceylon/json/parse.ceylon');
};parser$.parseValue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Parser,pa:1,an:function(){return[m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),ParseException),"If the specified string cannot be parsed")];},d:['ceylon.json','Parser','$m','parseValue']};};
parser$.$wghd6m$46q=function(){
var parser$=this;
parser$.visitor.onString(parseKeyOrString(parser$.$wghd6m$46l));
};parser$.$wghd6m$46q.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseString$sljd25']};};
parser$.parse=function(){
var parser$=this;
parser$.parseValue();
parser$.$wghd6m$46l.eatSpaces();
if(parser$.$wghd6m$46l.hasMore){
throw m$1.wrapexc(ParseException("Unexpected extra characters",parser$.$wghd6m$46l.line,parser$.$wghd6m$46l.column),'277:12-277:97','ceylon/json/parse.ceylon');
}
};parser$.parse.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Parser,pa:1,d:['ceylon.json','Parser','$m','parse']};};
parser$.toString=function(){return this.string.valueOf();};
})(Parser.$$.prototype);
}
return Parser;
}
ex$.$init$Parser=$init$Parser;$init$Parser();
function StringParser($wghd6m$46r,$wghd6m$46s,stringParser$){
$init$StringParser();
if(stringParser$===undefined)stringParser$=new StringParser.$$;
stringParser$.$wghd6m$46r_=$wghd6m$46r;
stringParser$.$wghd6m$46s_=$wghd6m$46s;
Parser(StringTokenizer($wghd6m$46r),$wghd6m$46s,stringParser$);
return stringParser$;
}
StringParser.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Parser},ps:[{nm:'str',mt:'prm',$t:{t:m$1.$_String},an:function(){return[m$1.doc("The string of JSON data to be parsed.")];}},{nm:'visitor',mt:'prm',$t:{t:Visitor}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:StringParser'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.json','StringParser']};};
ex$.StringParser=StringParser;
function $init$StringParser(){
if(StringParser.$$===undefined){
m$1.initTypeProto(StringParser,'ceylon.json::StringParser',$init$Parser());
(function(stringParser$){
m$1.atr$(stringParser$,'$wghd6m$46r',function(){return this.$wghd6m$46r_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:StringParser,an:function(){return[m$1.doc("The string of JSON data to be parsed.")];},d:['ceylon.json','StringParser','$at','str$puzo67']};});
m$1.atr$(stringParser$,'$wghd6m$46s',function(){return this.$wghd6m$46s_;},undefined,function(){return{mod:$CCMM$,$t:{t:Visitor},$cont:StringParser,d:['ceylon.json','StringParser','$at','visitor$qsoxsm']};});
stringParser$.toString=function(){return this.string.valueOf();};
})(StringParser.$$.prototype);
}
return StringParser;
}
ex$.$init$StringParser=$init$StringParser;$init$StringParser();
function parse($46t){
var $46u=Builder();
var $46v=StringParser($46t,$46u);
$46v.parse();
return $46u.result;
}
ex$.parse=parse;
parse.$crtmm$=function(){return{mod:$CCMM$,$t:Value(),ps:[{nm:'str',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:parse'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String})),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.3.2','$'),m$1.Exception),"If the JSON string is invalid")];},d:['ceylon.json','parse']};};
function parse$stream($46w){
return buildValue$stream(StreamParser$stream(StringTokenizer($46w)));
};parse$stream.$crtmm$=function(){return{mod:$CCMM$,$t:Value(),ps:[{nm:'json',mt:'prm',$t:{t:m$1.$_String}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:parse')];},d:['ceylon.json.stream','parse']};};
function buildValue$stream($46x){
var $46y=$46x.next();
var $46z=$46y;
if(m$1.is$($46z,m$1.mut$([{t:m$1.$_String},{t:m$1.Integer},{t:m$1.Float},{t:m$1.$_Boolean},{t:m$1.Null}]))) {
return $46z;
}
else if(m$1.is$($46z,{t:ObjectStartEvent$stream})) {
return buildObject$stream($46x);
}
else if(m$1.is$($46z,{t:KeyEvent$stream})) {
m$1.asrt$((false),"Assertion failed: "+"unexpected key\n\tviolated false\n\tat Builder.ceylon (28:14-28:20)",'27:8-28:21','Builder.ceylon');
}
else if(m$1.is$($46z,{t:ObjectEndEvent$stream})) {
m$1.asrt$((false),"Assertion failed: "+"unexpected object end\n\tviolated false\n\tat Builder.ceylon (32:14-32:20)",'31:8-32:21','Builder.ceylon');
}
else if(m$1.is$($46z,{t:ArrayStartEvent$stream})) {
return buildArray$stream($46x);
}
else if(m$1.is$($46z,{t:ArrayEndEvent$stream})) {
m$1.asrt$((false),"Assertion failed: "+"unexpected array end\n\tviolated false\n\tat Builder.ceylon (39:14-39:20)",'38:8-39:21','Builder.ceylon');
}
else if(m$1.is$($46z,{t:m$1.Finished})) {
m$1.asrt$((false),"Assertion failed: "+"unexpected end of input\n\tviolated false\n\tat Builder.ceylon (43:14-43:20)",'42:8-43:21','Builder.ceylon');
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};buildValue$stream.$crtmm$=function(){return{mod:$CCMM$,$t:Value(),ps:[{nm:'events',mt:'prm',$t:{t:'i',l:[{t:m$1.Iterator,a:{Element$Iterator:Event$stream()}},{t:Positioned}]}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:buildValue')];},d:['ceylon.json.stream','buildValue']};};
function buildObject$stream($470){
var $471=$_Object();
var $472=null;
while(true){
var $473=$470.next();
var $474=$473;
if(m$1.is$($474,m$1.mut$([{t:m$1.$_String},{t:m$1.Integer},{t:m$1.Float},{t:m$1.$_Boolean},{t:m$1.Null}]))) {
var $475;
m$1.asrt$((m$1.nn$(($475=$472))),"Assertion failed: "+"no key in object\n\tviolated exists k=key\n\tat Builder.ceylon (55:18-55:31)",'54:12-55:32','Builder.ceylon');
$471.put($475,$474);
$472=null;
}
else if(m$1.is$($474,{t:ObjectStartEvent$stream})) {
var $476;
m$1.asrt$((m$1.nn$(($476=$472))),"Assertion failed: "+"no key in object\n\tviolated exists k=key\n\tat Builder.ceylon (61:18-61:31)",'60:12-61:32','Builder.ceylon');
$471.put($476,buildObject$stream($470));
$472=null;
}
else if(m$1.is$($474,{t:KeyEvent$stream})) {
m$1.asrt$((!m$1.nn$($472)),"Assertion failed: "+"two consecutive keys in object\n\tviolated !key exists\n\tat Builder.ceylon (67:18-67:30)",'66:12-67:31','Builder.ceylon');
$472=$474.key;
}
else if(m$1.is$($474,{t:ObjectEndEvent$stream})) {
return $471;
}
else if(m$1.is$($474,{t:ArrayStartEvent$stream})) {
var $477;
m$1.asrt$((m$1.nn$(($477=$472))),"Assertion failed: "+"no key in object\n\tviolated exists k=key\n\tat Builder.ceylon (75:18-75:31)",'74:12-75:32','Builder.ceylon');
$471.put($477,buildArray$stream($470));
$472=null;
}
else if(m$1.is$($474,{t:ArrayEndEvent$stream})) {
m$1.asrt$((false),"Assertion failed: "+"object ended by array end\n\tviolated false\n\tat Builder.ceylon (81:18-81:24)",'80:12-81:25','Builder.ceylon');
}
else if(m$1.is$($474,{t:m$1.Finished})) {
m$1.asrt$((false),"Assertion failed: "+"unexpected end of input\n\tviolated false\n\tat Builder.ceylon (85:18-85:24)",'84:12-85:25','Builder.ceylon');
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
};buildObject$stream.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Object},ps:[{nm:'events',mt:'prm',$t:{t:'i',l:[{t:m$1.Iterator,a:{Element$Iterator:Event$stream()}},{t:Positioned}]}}],d:['ceylon.json.stream','buildObject']};};
function buildArray$stream($478){
var $479=$_Array();
while(true){
var $47a=$478.next();
var $47b=$47a;
if(m$1.is$($47b,m$1.mut$([{t:m$1.$_String},{t:m$1.Integer},{t:m$1.Float},{t:m$1.$_Boolean},{t:m$1.Null}]))) {
$479.add($47b);
}
else if(m$1.is$($47b,{t:ObjectStartEvent$stream})) {
$479.add(buildObject$stream($478));
}
else if(m$1.is$($47b,{t:KeyEvent$stream})) {
m$1.asrt$((false),"Assertion failed: "+"key unexpected in array\n\tviolated false\n\tat Builder.ceylon (102:18-102:24)",'101:12-102:25','Builder.ceylon');
}
else if(m$1.is$($47b,{t:ObjectEndEvent$stream})) {
m$1.asrt$((false),"Assertion failed: "+"array ended by object end\n\tviolated false\n\tat Builder.ceylon (106:18-106:24)",'105:12-106:25','Builder.ceylon');
}
else if(m$1.is$($47b,{t:ArrayStartEvent$stream})) {
$479.add(buildArray$stream($478));
}
else if(m$1.is$($47b,{t:ArrayEndEvent$stream})) {
return $479;
}
else if(m$1.is$($47b,{t:m$1.Finished})) {
m$1.asrt$((false),"Assertion failed: "+"unexpected end of input\n\tviolated false\n\tat Builder.ceylon (116:18-116:24)",'115:12-116:25','Builder.ceylon');
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
};buildArray$stream.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Array},ps:[{nm:'events',mt:'prm',$t:{t:'i',l:[{t:m$1.Iterator,a:{Element$Iterator:Event$stream()}},{t:Positioned}]}}],d:['ceylon.json.stream','buildArray']};};
function StreamState$stream(parent,last,keys,streamState$){
$init$StreamState$stream();
if(streamState$===undefined)streamState$=new StreamState$stream.$$;
streamState$.parent_=parent;
streamState$.last_=last;
streamState$.keys_=keys;
streamState$.$wghd6m$47c_=(0);
return streamState$;
}
StreamState$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'parent',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:StreamState$stream}]},pa:1},{nm:'last',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},Event$stream()]},pa:1025},{nm:'keys',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$2.HashSet,a:{Element$HashSet:{t:m$1.$_String}}}]},pa:1}],an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:StreamState')];},d:['ceylon.json.stream','StreamState']};};
ex$.StreamState$stream=StreamState$stream;
function $init$StreamState$stream(){
if(StreamState$stream.$$===undefined){
m$1.initTypeProto(StreamState$stream,'ceylon.json.stream::StreamState',m$1.Basic);
(function(streamState$){
m$1.atr$(streamState$,'parent',function(){return this.parent_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:StreamState$stream}]},$cont:StreamState$stream,pa:1,d:['ceylon.json.stream','StreamState','$at','parent']};});
m$1.atr$(streamState$,'last',function(){return this.last_;},function($47d){return this.last_=$47d;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},Event$stream()]},$cont:StreamState$stream,pa:1025,d:['ceylon.json.stream','StreamState','$at','last']};});
m$1.atr$(streamState$,'keys',function(){return this.keys_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$2.HashSet,a:{Element$HashSet:{t:m$1.$_String}}}]},$cont:StreamState$stream,pa:1,d:['ceylon.json.stream','StreamState','$at','keys']};});
m$1.atr$(streamState$,'num',function(){return this.$wghd6m$47c_;},function($47e){return this.$wghd6m$47c_=$47e;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StreamState$stream,pa:1025,an:function(){return[m$1.doc("The number of events yielded so far")];},d:['ceylon.json.stream','StreamState','$at','num']};});
m$1.atr$(streamState$,'string',function(){
var streamState$=this;
return ($47g=streamState$.parent,m$1.nn$($47g)?$47g:"<top>").string+", "+(($47h=streamState$.last,m$1.nn$($47h)?$47h:"<null>").string);
var $47g,$47h;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:StreamState$stream,pa:3,d:['ceylon.json.stream','StreamState','$at','string']};});
streamState$.toString=function(){return this.string.valueOf();};
})(StreamState$stream.$$.prototype);
}
return StreamState$stream;
}
ex$.$init$StreamState$stream=$init$StreamState$stream;$init$StreamState$stream();
function StreamParser$stream($wghd6m$47i,$wghd6m$47j,streamParser$){
$init$StreamParser$stream();
if(streamParser$===undefined)streamParser$=new StreamParser$stream.$$;
streamParser$.$wghd6m$47i_=$wghd6m$47i;
if($wghd6m$47j===undefined){$wghd6m$47j=$init$StreamParser$stream().$defs$trackKeys(streamParser$,$wghd6m$47i);}
streamParser$.$wghd6m$47j_=$wghd6m$47j;
m$1.Iterator({Element$Iterator:m$1.mut$([{t:ObjectStartEvent$stream},{t:ObjectEndEvent$stream},{t:ArrayStartEvent$stream},{t:ArrayEndEvent$stream},{t:KeyEvent$stream},{t:m$1.$_String},{t:m$1.Float},{t:m$1.Integer},{t:m$1.$_Boolean},{t:m$1.Null}])},streamParser$);
Positioned(streamParser$);
streamParser$.$wghd6m$47k_=streamParser$.$wghd6m$47l(null,null);
return streamParser$;
}
StreamParser$stream.$defs$trackKeys=function(streamParser$,$wghd6m$47i){return false};StreamParser$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'input',mt:'prm',$t:{t:Tokenizer},an:function(){return[m$1.doc("The tokenizer to read input from")];}},{nm:'trackKeys',mt:'prm',def:1,$t:{t:m$1.$_Boolean},an:function(){return[m$1.doc("Whether to validate the uniqueness of keys")];}}],sts:[{t:m$1.Iterator,a:{Element$Iterator:Event$stream()}},{t:Positioned}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:StreamParser')];},d:['ceylon.json.stream','StreamParser']};};
ex$.StreamParser$stream=StreamParser$stream;
function $init$StreamParser$stream(){
if(StreamParser$stream.$$===undefined){
m$1.initTypeProto(StreamParser$stream,'ceylon.json.stream::StreamParser',m$1.Basic,m$1.Iterator,$init$Positioned());
(function(streamParser$){
m$1.atr$(streamParser$,'$wghd6m$47i',function(){return this.$wghd6m$47i_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tokenizer},$cont:StreamParser$stream,an:function(){return[m$1.doc("The tokenizer to read input from")];},d:['ceylon.json.stream','StreamParser','$at','input$rh2j6r']};});
m$1.atr$(streamParser$,'$wghd6m$47j',function(){return this.$wghd6m$47j_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:StreamParser$stream,an:function(){return[m$1.doc("Whether to validate the uniqueness of keys")];},d:['ceylon.json.stream','StreamParser','$at','trackKeys$4hlw5s']};});
streamParser$.$wghd6m$47l=function($47m,$47n){
var streamParser$=this;
var $47o;
if((streamParser$.$wghd6m$47j&&m$1.is$($47n,{t:ObjectStartEvent$stream}))){
$47o=m$2.HashSet(undefined,undefined,undefined,{Element$HashSet:{t:m$1.$_String}});
}
else{
$47o=null;
}
var $47p=StreamState$stream($47m,$47n,$47o);
var $47q;
if(streamParser$.$wghd6m$47j&&m$1.is$(($47q=$47n),{t:KeyEvent$stream})){
var $47r;
m$1.asrt$((m$1.nn$(($47r=$47m))),"Assertion failed: "+"\n\tviolated exists p=parent\n\tat StreamParser.ceylon (235:19-235:35)",'235:12-235:36','StreamParser.ceylon');
var $47s;
if(m$1.nn$(($47s=$47r.keys))&&!$47s.add($47q.key)){
throw m$1.wrapexc(ParseException("Duplicate key: \'"+($47q.key)+"\'",streamParser$.$wghd6m$47i.line,streamParser$.$wghd6m$47i.column),'237:16-237:92','ceylon/json/stream/StreamParser.ceylon');
}
}
return $47p;
};streamParser$.$wghd6m$47l.$crtmm$=function(){return{mod:$CCMM$,$t:{t:StreamState$stream},ps:[{nm:'parent',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:StreamState$stream}]}},{nm:'last',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},Event$stream()]}}],$cont:StreamParser$stream,d:['ceylon.json.stream','StreamParser','$m','pushState$9cmfiw']};};
m$1.atr$(streamParser$,'$wghd6m$47k',function(){return this.$wghd6m$47k_;},function($47t){return this.$wghd6m$47k_=$47t;},function(){return{mod:$CCMM$,$t:{t:StreamState$stream},$cont:StreamParser$stream,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:StreamParser:$at:state$r6yb4i')];},d:['ceylon.json.stream','StreamParser','$at','state$r6yb4i']};});
streamParser$.$wghd6m$47u=function(){
var streamParser$=this;
streamParser$.$wghd6m$47i.eatSpaces();
var $47v=streamParser$.$wghd6m$47i.character();
if($47v.equals(m$1.Character(123,true))) {
streamParser$.$wghd6m$47i.moveOne();
return objectStart$stream();
}
else if($47v.equals(m$1.Character(91,true))) {
streamParser$.$wghd6m$47i.moveOne();
return arrayStart$stream();
}
else if($47v.equals(m$1.Character(34,true))) {
return parseKeyOrString(streamParser$.$wghd6m$47i);
}
else if($47v.equals(m$1.Character(110,true))) {
parseNull(streamParser$.$wghd6m$47i);
streamParser$.$wghd6m$47w("null");
return null;
}
else if($47v.equals(m$1.Character(116,true))) {
parseTrue(streamParser$.$wghd6m$47i);
streamParser$.$wghd6m$47w("true");
return true;
}
else if($47v.equals(m$1.Character(102,true))) {
parseFalse(streamParser$.$wghd6m$47i);
streamParser$.$wghd6m$47w("false");
return false;
}
else if($47v.equals(m$1.Character(45,true)) || $47v.equals(m$1.Character(48,true)) || $47v.equals(m$1.Character(49,true)) || $47v.equals(m$1.Character(50,true)) || $47v.equals(m$1.Character(51,true)) || $47v.equals(m$1.Character(52,true)) || $47v.equals(m$1.Character(53,true)) || $47v.equals(m$1.Character(54,true)) || $47v.equals(m$1.Character(55,true)) || $47v.equals(m$1.Character(56,true)) || $47v.equals(m$1.Character(57,true))) {
return parseNumber(streamParser$.$wghd6m$47i);
}
else{
throw m$1.wrapexc(streamParser$.$wghd6m$47i.unexpectedCharacter("a value"),'283:12-283:54','ceylon/json/stream/StreamParser.ceylon');
}
};streamParser$.$wghd6m$47u.$crtmm$=function(){return{mod:$CCMM$,$t:Event$stream(),ps:[],$cont:StreamParser$stream,an:function(){return[m$1.doc("Parse any JSON value and return an event")];},d:['ceylon.json.stream','StreamParser','$m','parseValue$abikp']};};
streamParser$.$wghd6m$47w=function($47x){
var streamParser$=this;
if(streamParser$.$wghd6m$47i.hasMore){
var $47y=streamParser$.$wghd6m$47i.character();
if((((!m$1.$eq$($47y,m$1.Character(44,true))&&!m$1.$eq$($47y,m$1.Character(125,true)))&&!m$1.$eq$($47y,m$1.Character(93,true)))&&!streamParser$.$wghd6m$47i.isSpace($47y))){
throw m$1.wrapexc(ParseException("Expected "+($47x)+" but got "+($47x)+""+($47y.string),streamParser$.$wghd6m$47i.line,streamParser$.$wghd6m$47i.column),'294:16-294:125','ceylon/json/stream/StreamParser.ceylon');
}
}
};streamParser$.$wghd6m$47w.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'expectedIdent',mt:'prm',$t:{t:m$1.$_String}}],$cont:StreamParser$stream,d:['ceylon.json.stream','StreamParser','$m','checkNext$rguf2k']};};
streamParser$.next=function(){
var streamParser$=this;
streamParser$.$wghd6m$47i.eatSpaces();
var $47z;
if(streamParser$.$wghd6m$47i.hasMore){
var $480=streamParser$.$wghd6m$47i.character();
if($480.equals(m$1.Character(93,true))) {
streamParser$.$wghd6m$47i.moveOne();
$47z=arrayEnd$stream();
}
else if($480.equals(m$1.Character(125,true))) {
streamParser$.$wghd6m$47i.moveOne();
$47z=objectEnd$stream();
}
else if($480.equals(m$1.Character(44,true))) {
if(m$1.is$(streamParser$.$wghd6m$47k.last,{t:ObjectStartEvent$stream})){
streamParser$.$wghd6m$47i.moveOne();
streamParser$.$wghd6m$47i.eatSpaces();
if(m$1.$eq$(streamParser$.$wghd6m$47i.character(),m$1.Character(34,true))){
$47z=KeyEvent$stream(parseKeyOrString(streamParser$.$wghd6m$47i));
}
else{
throw m$1.wrapexc(streamParser$.$wghd6m$47i.unexpectedCharacter("a key"),'321:24-321:64','ceylon/json/stream/StreamParser.ceylon');
}
}
else{
if(m$1.is$(streamParser$.$wghd6m$47k.last,{t:ArrayStartEvent$stream})){
streamParser$.$wghd6m$47i.moveOne();
streamParser$.$wghd6m$47i.eatSpaces();
$47z=streamParser$.$wghd6m$47u();
}
else{
if(m$1.nn$(streamParser$.$wghd6m$47k.last)){
throw m$1.wrapexc(streamParser$.$wghd6m$47i.unexpectedCharacter("a value"),'328:20-328:62','ceylon/json/stream/StreamParser.ceylon');
}
else{
throw m$1.wrapexc(streamParser$.$wghd6m$47i.unexpectedCharacter(((streamParser$.$wghd6m$47k.num==(0))?"a value":"end of input")),'330:20-330:107','ceylon/json/stream/StreamParser.ceylon');
}
}
}
}
else if($480.equals(m$1.Character(58,true))) {
if(m$1.is$(streamParser$.$wghd6m$47k.last,{t:KeyEvent$stream})){
streamParser$.$wghd6m$47i.moveOne();
streamParser$.$wghd6m$47i.eatSpaces();
$47z=streamParser$.$wghd6m$47u();
}
else{
if(m$1.nn$(streamParser$.$wghd6m$47k.last)){
throw m$1.wrapexc(streamParser$.$wghd6m$47i.unexpectedCharacter(((streamParser$.$wghd6m$47k.num==(0))?"a value":m$1.Character(44,true))),'339:20-339:96','ceylon/json/stream/StreamParser.ceylon');
}
else{
throw m$1.wrapexc(streamParser$.$wghd6m$47i.unexpectedCharacter(((streamParser$.$wghd6m$47k.num==(0))?"a value":"end of input")),'341:20-341:107','ceylon/json/stream/StreamParser.ceylon');
}
}
}
else{
if(!m$1.nn$(streamParser$.$wghd6m$47k.last)&&(streamParser$.$wghd6m$47k.num>(0))){
throw m$1.wrapexc(streamParser$.$wghd6m$47i.unexpectedCharacter("end of input"),'347:20-347:67','ceylon/json/stream/StreamParser.ceylon');
}
else{
if(m$1.is$(streamParser$.$wghd6m$47k.last,{t:ObjectStartEvent$stream})){
if((streamParser$.$wghd6m$47k.num>(0))){
throw m$1.wrapexc(streamParser$.$wghd6m$47i.unexpectedCharacter(m$1.Character(44,true)),'350:24-350:60','ceylon/json/stream/StreamParser.ceylon');
}
$47z=KeyEvent$stream(parseKeyOrString(streamParser$.$wghd6m$47i));
}
else{
if(m$1.is$(streamParser$.$wghd6m$47k.last,{t:ArrayStartEvent$stream})){
if((streamParser$.$wghd6m$47k.num>(0))){
throw m$1.wrapexc(streamParser$.$wghd6m$47i.unexpectedCharacter(m$1.Character(44,true)),'355:24-355:60','ceylon/json/stream/StreamParser.ceylon');
}
$47z=streamParser$.$wghd6m$47u();
}
else{
if(m$1.is$(streamParser$.$wghd6m$47k.last,{t:KeyEvent$stream})){
throw m$1.wrapexc(streamParser$.$wghd6m$47i.unexpectedCharacter(m$1.Character(58,true)),'361:24-361:60','ceylon/json/stream/StreamParser.ceylon');
}
$47z=streamParser$.$wghd6m$47u();
}
}
}
}
}
else{
$47z=m$1.finished();
}
return streamParser$.$wghd6m$481($47z);
};streamParser$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[Event$stream(),{t:m$1.Finished}]},ps:[],$cont:StreamParser$stream,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:StreamParser:$m:next'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),ParseException))];},d:['ceylon.json.stream','StreamParser','$m','next']};};
streamParser$.$wghd6m$481=function($482){
var streamParser$=this;
var $483=streamParser$.$wghd6m$47k.last;
($484=streamParser$.$wghd6m$47k,$485=$484.num,$484.num=$485.successor,$485);
var $484,$485;
var $486=$482;
if(m$1.is$($486,{t:ObjectStartEvent$stream})) {
var $487;
if(m$1.is$(($487=$483),{t:KeyEvent$stream})){
var $488;
if(m$1.nn$(($488=streamParser$.$wghd6m$47k.parent))){
streamParser$.$wghd6m$47k=$488;
}
else{
throw m$1.wrapexc(streamParser$.$wghd6m$47i.unexpectedCharacter(streamParser$.$wghd6m$47i.character()),'381:20-381:70','ceylon/json/stream/StreamParser.ceylon');
}
}
streamParser$.$wghd6m$47k=streamParser$.$wghd6m$47l(streamParser$.$wghd6m$47k,$486);
}
else if(m$1.is$($486,{t:KeyEvent$stream})) {
var $489;
if(!m$1.is$(($489=$483),{t:ObjectStartEvent$stream})){
throw m$1.wrapexc(ParseException("Key not expected",streamParser$.$wghd6m$47i.line,streamParser$.$wghd6m$47i.column),'388:16-388:82','ceylon/json/stream/StreamParser.ceylon');
}
function $48a(){return $483;}
streamParser$.$wghd6m$47k=streamParser$.$wghd6m$47l(streamParser$.$wghd6m$47k,$486);
}
else if(m$1.is$($486,{t:ObjectEndEvent$stream})) {
var $48b;
if(m$1.is$(($48b=$483),{t:ObjectStartEvent$stream})){
var $48c;
if(m$1.nn$(($48c=streamParser$.$wghd6m$47k.parent))){
streamParser$.$wghd6m$47k=$48c;
}
else{
throw m$1.wrapexc(streamParser$.$wghd6m$47i.unexpectedCharacter(streamParser$.$wghd6m$47i.character()),'397:20-397:70','ceylon/json/stream/StreamParser.ceylon');
}
}
else{
throw m$1.wrapexc(ParseException("Got \'"+($486.string)+"\' but in "+(($48d=$48b,m$1.nn$($48d)?$48d:"null").string)+" not in object",streamParser$.$wghd6m$47i.line,streamParser$.$wghd6m$47i.column),'400:16-401:45','ceylon/json/stream/StreamParser.ceylon');
var $48d;
}
}
else if(m$1.is$($486,{t:ArrayStartEvent$stream})) {
var $48e;
if(m$1.is$(($48e=$483),{t:KeyEvent$stream})){
var $48f;
if(m$1.nn$(($48f=streamParser$.$wghd6m$47k.parent))){
streamParser$.$wghd6m$47k=$48f;
}
else{
throw m$1.wrapexc(streamParser$.$wghd6m$47i.unexpectedCharacter(streamParser$.$wghd6m$47i.character()),'409:20-409:70','ceylon/json/stream/StreamParser.ceylon');
}
}
streamParser$.$wghd6m$47k=streamParser$.$wghd6m$47l(streamParser$.$wghd6m$47k,$486);
}
else if(m$1.is$($486,{t:ArrayEndEvent$stream})) {
var $48g;
if(m$1.is$(($48g=$483),{t:ArrayStartEvent$stream})){
var $48h;
if(m$1.nn$(($48h=streamParser$.$wghd6m$47k.parent))){
streamParser$.$wghd6m$47k=$48h;
}
else{
throw m$1.wrapexc(streamParser$.$wghd6m$47i.unexpectedCharacter(streamParser$.$wghd6m$47i.character()),'419:20-419:70','ceylon/json/stream/StreamParser.ceylon');
}
}
else{
throw m$1.wrapexc(ParseException("Got \'"+($486.string)+"\' but in "+(($48i=$48g,m$1.nn$($48i)?$48i:"null").string)+" not array",streamParser$.$wghd6m$47i.line,streamParser$.$wghd6m$47i.column),'422:16-423:45','ceylon/json/stream/StreamParser.ceylon');
var $48i;
}
}
else if(m$1.is$($486,m$1.mut$([{t:m$1.$_String},{t:m$1.Float},{t:m$1.Integer},{t:m$1.$_Boolean},{t:m$1.Null}]))) {
var $48j;
if(m$1.is$(($48j=$483),{t:KeyEvent$stream})){
var $48k;
if(m$1.nn$(($48k=streamParser$.$wghd6m$47k.parent))){
streamParser$.$wghd6m$47k=$48k;
}
else{
throw m$1.wrapexc(streamParser$.$wghd6m$47i.unexpectedCharacter(streamParser$.$wghd6m$47i.character()),'431:20-431:70','ceylon/json/stream/StreamParser.ceylon');
}
}
}
else if($486===m$1.finished()) {
if(m$1.nn$(streamParser$.$wghd6m$47k.parent)){
throw m$1.wrapexc(streamParser$.$wghd6m$47i.unexpectedEnd,'437:16-437:41','ceylon/json/stream/StreamParser.ceylon');
}
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
return $482;
};streamParser$.$wghd6m$481.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[Event$stream(),{t:m$1.Finished}]},ps:[{nm:'yielding',mt:'prm',$t:{t:'u',l:[Event$stream(),{t:m$1.Finished}]}}],$cont:StreamParser$stream,d:['ceylon.json.stream','StreamParser','$m','yield$38y73i']};};
m$1.atr$(streamParser$,'string',function(){
var streamParser$=this;
return streamParser$.$wghd6m$47i.string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:StreamParser$stream,pa:3,d:['ceylon.json.stream','StreamParser','$at','string']};});
m$1.atr$(streamParser$,'column',function(){
var streamParser$=this;
return streamParser$.$wghd6m$47i.column;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StreamParser$stream,pa:3,d:['ceylon.json.stream','StreamParser','$at','column']};});
m$1.atr$(streamParser$,'line',function(){
var streamParser$=this;
return streamParser$.$wghd6m$47i.line;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StreamParser$stream,pa:3,d:['ceylon.json.stream','StreamParser','$at','line']};});
m$1.atr$(streamParser$,'position',function(){
var streamParser$=this;
return streamParser$.$wghd6m$47i.position;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StreamParser$stream,pa:3,d:['ceylon.json.stream','StreamParser','$at','position']};});
streamParser$.toString=function(){return this.string.valueOf();};
})(StreamParser$stream.$$.prototype);
}
return StreamParser$stream;
}
ex$.$init$StreamParser$stream=$init$StreamParser$stream;$init$StreamParser$stream();
function LookAhead$stream($wghd6m$48p,$wghd6m$48q,$$targs$$,lookAhead$){
$init$LookAhead$stream();
if(lookAhead$===undefined)lookAhead$=new LookAhead$stream.$$;
m$1.set_type_args(lookAhead$,$$targs$$);
lookAhead$.$wghd6m$48p_=$wghd6m$48p;
if($wghd6m$48q===undefined){$wghd6m$48q=$init$LookAhead$stream().$defs$lookAhead(lookAhead$,$wghd6m$48p);}
lookAhead$.$wghd6m$48q_=$wghd6m$48q;
m$1.Iterator({Element$Iterator:$$targs$$.T$LookAhead/*ORALE!T inv pero Element var*/},lookAhead$);
Positioned(lookAhead$);
lookAhead$.$wghd6m$48r_=m$2.ArrayList(($48s=lookAhead$.$wghd6m$48q,m$1.nn$($48s)?$48s:(2)),undefined,undefined,{Element$ArrayList:m$1.mut$([lookAhead$.$$targs$$.T$LookAhead,{t:m$1.Finished}])});
var $48s;
return lookAhead$;
}
LookAhead$stream.$defs$lookAhead=function(lookAhead$,$wghd6m$48p){return (1)};LookAhead$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'stream',mt:'prm',$t:{t:'i',l:[{t:m$1.Iterator,a:{Element$Iterator:'T$LookAhead'}},{t:Positioned}]}},{nm:'lookAhead',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:LookAhead:$at:lookAhead$xft3nu')];}}],tp:{T$LookAhead:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'T$LookAhead'}},{t:Positioned}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:LookAhead')];},d:['ceylon.json.stream','LookAhead']};};
ex$.LookAhead$stream=LookAhead$stream;
function $init$LookAhead$stream(){
if(LookAhead$stream.$$===undefined){
m$1.initTypeProto(LookAhead$stream,'ceylon.json.stream::LookAhead',m$1.Basic,m$1.Iterator,$init$Positioned());
(function(lookAhead$){
m$1.atr$(lookAhead$,'$wghd6m$48p',function(){return this.$wghd6m$48p_;},undefined,function(){return{mod:$CCMM$,$t:{t:'i',l:[{t:m$1.Iterator,a:{Element$Iterator:'T$LookAhead'}},{t:Positioned}]},$cont:LookAhead$stream,d:['ceylon.json.stream','LookAhead','$at','stream$4v9nbw']};});
m$1.atr$(lookAhead$,'$wghd6m$48q',function(){return this.$wghd6m$48q_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:LookAhead$stream,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:LookAhead:$at:lookAhead$xft3nu')];},d:['ceylon.json.stream','LookAhead','$at','lookAhead$xft3nu']};});
m$1.atr$(lookAhead$,'$wghd6m$48r',function(){return this.$wghd6m$48r_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2.ArrayList,a:{Element$ArrayList:{t:'u',l:['T$LookAhead',{t:m$1.Finished}]}}},$cont:LookAhead$stream,an:function(){return[m$1.doc("The buffer")];},d:['ceylon.json.stream','LookAhead','$at','peeked$1afwi6']};});
m$1.atr$(lookAhead$,'$wghd6m$48t',function(){if(this.$wghd6m$48t_===undefined)throw m$1.InitializationError('Attempt to read uninitialized attribute \u00ab$wghd6m$48t\u00bb');return this.$wghd6m$48t_;},function($48u){return this.$wghd6m$48t_=$48u;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LookAhead$stream,pa:1155,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:LookAhead:$at:col$jx4yhw')];},d:['ceylon.json.stream','LookAhead','$at','col$jx4yhw']};});
m$1.atr$(lookAhead$,'$wghd6m$48v',function(){if(this.$wghd6m$48v_===undefined)throw m$1.InitializationError('Attempt to read uninitialized attribute \u00ab$wghd6m$48v\u00bb');return this.$wghd6m$48v_;},function($48w){return this.$wghd6m$48v_=$48w;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LookAhead$stream,pa:1155,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:LookAhead:$at:lin$k41cb1')];},d:['ceylon.json.stream','LookAhead','$at','lin$k41cb1']};});
m$1.atr$(lookAhead$,'$wghd6m$48x',function(){if(this.$wghd6m$48x_===undefined)throw m$1.InitializationError('Attempt to read uninitialized attribute \u00ab$wghd6m$48x\u00bb');return this.$wghd6m$48x_;},function($48y){return this.$wghd6m$48x_=$48y;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LookAhead$stream,pa:1155,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:LookAhead:$at:pos$k7bql4')];},d:['ceylon.json.stream','LookAhead','$at','pos$k7bql4']};});
lookAhead$.peek$defs$n=function($48z){return 1;};
lookAhead$.peek=function($48z){
var lookAhead$=this;
if($48z===undefined){$48z=(1);}
m$1.asrt$((($48z>=(1))),"Assertion failed: "+"\n\tviolated n >= 1\n\tat StreamParser.ceylon (468:14-468:21)",'468:8-468:22','StreamParser.ceylon');
var $490;
if(m$1.nn$(($490=lookAhead$.$wghd6m$48q))&&($48z>$490)){
throw m$1.wrapexc(m$1.AssertionError("lookahead limited to "+($490.string)+" elements"),'470:12-470:79','ceylon/json/stream/StreamParser.ceylon');
}
while((lookAhead$.$wghd6m$48r.size<$48z)){
lookAhead$.$wghd6m$48r.offer(lookAhead$.$wghd6m$48p.next());
}
var $491;
m$1.asrt$((m$1.is$(($491=lookAhead$.$wghd6m$48r.$_get(($48z-(1)))),m$1.mut$([lookAhead$.$$targs$$.T$LookAhead,{t:m$1.Finished}]))),"Assertion failed: "+"\n\tviolated is T|Finished p=peeked[n-1]\n\tat StreamParser.ceylon (475:14-475:42)",'475:8-475:43','StreamParser.ceylon');
return $491;
};lookAhead$.peek.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['T$LookAhead',{t:m$1.Finished}]},ps:[{nm:'n',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:LookAhead$stream,pa:1,an:function(){return[m$1.doc("Get the *n*th element ahead")];},d:['ceylon.json.stream','LookAhead','$m','peek']};};
lookAhead$.next=function(){
var lookAhead$=this;
var $492;
if((lookAhead$.$wghd6m$48r.size>(0))){
var $493;
m$1.asrt$((m$1.is$(($493=lookAhead$.$wghd6m$48r.accept()),m$1.mut$([lookAhead$.$$targs$$.T$LookAhead,{t:m$1.Finished}]))),"Assertion failed: "+"\n\tviolated is T|Finished p=peeked.accept()\n\tat StreamParser.ceylon (482:18-482:50)",'482:12-482:51','StreamParser.ceylon');
$492=$493;
}
else{
$492=lookAhead$.$wghd6m$48p.next();
}
lookAhead$.$wghd6m$48t=lookAhead$.$wghd6m$48p.column;
lookAhead$.$wghd6m$48v=lookAhead$.$wghd6m$48p.line;
lookAhead$.$wghd6m$48x=lookAhead$.$wghd6m$48p.position;
return $492;
};lookAhead$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['T$LookAhead',{t:m$1.Finished}]},ps:[],$cont:LookAhead$stream,pa:3,d:['ceylon.json.stream','LookAhead','$m','next']};};
m$1.atr$(lookAhead$,'column',function(){
var lookAhead$=this;
return lookAhead$.$wghd6m$48t;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LookAhead$stream,pa:3,d:['ceylon.json.stream','LookAhead','$at','column']};});
m$1.atr$(lookAhead$,'line',function(){
var lookAhead$=this;
return lookAhead$.$wghd6m$48v;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LookAhead$stream,pa:3,d:['ceylon.json.stream','LookAhead','$at','line']};});
m$1.atr$(lookAhead$,'position',function(){
var lookAhead$=this;
return lookAhead$.$wghd6m$48x;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LookAhead$stream,pa:3,d:['ceylon.json.stream','LookAhead','$at','position']};});
lookAhead$.toString=function(){return this.string.valueOf();};
})(LookAhead$stream.$$.prototype);
}
return LookAhead$stream;
}
ex$.$init$LookAhead$stream=$init$LookAhead$stream;$init$LookAhead$stream();
function errorReporting$stream($497,$yfvm0i$){return function(){function $498($$targs$$){
var $498$=new $498.$$;$498$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:m$1.mut$([$yfvm0i$.T$errorReporting,{t:m$1.Exception}])},$498$);
Positioned($498$);
$498$.$wghd6m$499_=null;
$498$.$prop$get$wghd6m$499={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Exception}]},$cont:$498,pa:1024,d:['ceylon.json.stream','errorReporting','$at','error$u00e7j']};}};
$498$.$prop$get$wghd6m$499.get=function(){return $wghd6m$499};
$498$.$prop$getColumn={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$498,pa:3,d:['ceylon.json.stream','errorReporting','$at','column']};}};
$498$.$prop$getColumn.get=function(){return column};
$498$.$prop$getLine={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$498,pa:3,d:['ceylon.json.stream','errorReporting','$at','line']};}};
$498$.$prop$getLine.get=function(){return line};
$498$.$prop$getPosition={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$498,pa:3,d:['ceylon.json.stream','errorReporting','$at','position']};}};
$498$.$prop$getPosition.get=function(){return position};
return $498$;
};$498.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:errorReporting$stream,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:'u',l:[$yfvm0i$.T$errorReporting,{t:m$1.Exception}]}}},{t:Positioned}],d:['ceylon.json.stream','errorReporting']};};
function $init$$498(){
if($498.$$===undefined){
m$1.initTypeProto($498,'ceylon.json.stream::errorReporting.anonymous#0',m$1.Basic,m$1.Iterator,$init$Positioned());
(function($498$){
m$1.atr$($498$,'$wghd6m$499',function(){return this.$wghd6m$499_;},function($49a){return this.$wghd6m$499_=$49a;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Exception}]},$cont:$498,pa:1024,d:['ceylon.json.stream','errorReporting','$at','error$u00e7j']};});
$498$.next=function(){
var $498$=this;
var $49b;
if(m$1.nn$(($49b=$498$.$wghd6m$499))){
return $49b;
}
else{
try{
return $497.next();
}
catch($49c){
if(!m$1.is$(($49c=$49c),{t:m$1.Throwable}))$49c=m$1.NatErr($49c);
if(m$1.is$($49c,{t:m$1.Exception})){
return ($498$.$wghd6m$499=$49c);
}else{throw $49c}
}
}
};$498$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[$yfvm0i$.T$errorReporting,{t:m$1.Exception},{t:m$1.Finished}]},ps:[],$cont:$498,pa:3,d:['ceylon.json.stream','errorReporting','$m','next']};};
m$1.atr$($498$,'column',function(){
var $498$=this;
return $497.column;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$498,pa:3,d:['ceylon.json.stream','errorReporting','$at','column']};});
m$1.atr$($498$,'line',function(){
var $498$=this;
return $497.line;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$498,pa:3,d:['ceylon.json.stream','errorReporting','$at','line']};});
m$1.atr$($498$,'position',function(){
var $498$=this;
return $497.position;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$498,pa:3,d:['ceylon.json.stream','errorReporting','$at','position']};});
$498$.toString=function(){return this.string.valueOf();};
})($498.$$.prototype);
}
return $498;
}
$init$$498();return $498();}();
};
errorReporting$stream.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'i',l:[{t:m$1.Iterator,a:{Element$Iterator:{t:'u',l:['T$errorReporting',{t:m$1.Exception}]}}},{t:Positioned}]},ps:[{nm:'stream',mt:'prm',$t:{t:'i',l:[{t:m$1.Iterator,a:{Element$Iterator:'T$errorReporting'}},{t:Positioned}]}}],tp:{T$errorReporting:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:errorReporting')];},d:['ceylon.json.stream','errorReporting']};};
function streamToVisitor$stream($49h,$49i){
var $49j;
while(!m$1.is$(($49j=$49h.next()),{t:m$1.Finished})){
var $49k=$49j;
if(m$1.is$($49k,{t:ObjectStartEvent$stream})) {
$49i.onStartObject();
}
else if(m$1.is$($49k,{t:KeyEvent$stream})) {
$49i.onKey($49k.key);
}
else if(m$1.is$($49k,{t:ObjectEndEvent$stream})) {
$49i.onEndObject();
}
else if(m$1.is$($49k,{t:ArrayStartEvent$stream})) {
$49i.onStartArray();
}
else if(m$1.is$($49k,{t:ArrayEndEvent$stream})) {
$49i.onEndArray();
}
else if(m$1.is$($49k,{t:m$1.$_String})) {
$49i.onString($49k);
}
else if(m$1.is$($49k,{t:m$1.$_Boolean})) {
$49i.onBoolean($49k);
}
else if(m$1.is$($49k,m$1.mut$([{t:m$1.Integer},{t:m$1.Float}]))) {
$49i.onNumber($49k);
}
else if($49k===null) {
$49i.onNull();
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
}
ex$.streamToVisitor$stream=streamToVisitor$stream;
streamToVisitor$stream.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'stream',mt:'prm',$t:{t:m$1.Iterator,a:{Element$Iterator:Event$stream()}}},{nm:'visitor',mt:'prm',$t:{t:Visitor}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:streamToVisitor')];},d:['ceylon.json.stream','streamToVisitor']};};
function None$stream(none$){
$init$None$stream();
if(none$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.json.stream::None"),'?','?')
return none$;
}
None$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getNone$stream],pa:256,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:None')];},d:['ceylon.json.stream','None']};};
ex$.None$stream=None$stream;
function $init$None$stream(){
if(None$stream.$$===undefined){
m$1.initTypeProto(None$stream,'ceylon.json.stream::None',m$1.Basic);
(function(none$){
none$.toString=function(){return this.string.valueOf();};
})(None$stream.$$.prototype);
}
return None$stream;
}
ex$.$init$None$stream=$init$None$stream;$init$None$stream();
function $49l$stream(){
var none$=new $49l$stream.$$;None$stream(none$);
return none$;
};$49l$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:None$stream},d:['ceylon.json.stream','none']};};
function $init$none$stream(){
if($49l$stream.$$===undefined){
m$1.initTypeProto($49l$stream,'ceylon.json.stream::none',$init$None$stream());
(function(none$){
none$.toString=function(){return this.string.valueOf();};
})($49l$stream.$$.prototype);
}
return $49l$stream;
}
ex$.$init$none$stream=$init$none$stream;$init$none$stream();var $49n;
function none$stream(){
if($49n===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'none\' before it was set"),'46:0-46:28','StreamingVisitor.ceylon');
if($49n===undefined){$49n=m$1.INIT$;$49n=$init$none$stream()();$49n.$crtmm$=none$stream.$crtmm$;}
return $49n;
}
none$stream.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$none$stream()},d:['ceylon.json.stream','none']};};
$prop$getNone$stream=none$stream;
ex$.$prop$getNone$stream=$prop$getNone$stream;
function PushIterator$stream($wghd6m$49o,$$targs$$,pushIterator$){
$init$PushIterator$stream();
if(pushIterator$===undefined)pushIterator$=new PushIterator$stream.$$;
m$1.set_type_args(pushIterator$,$$targs$$);
pushIterator$.$wghd6m$49o_=$wghd6m$49o;
m$1.Iterator({Element$Iterator:$$targs$$.T$PushIterator},pushIterator$);
pushIterator$.$wghd6m$49p_=none$stream();
return pushIterator$;
}
PushIterator$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'it',mt:'prm',$t:{t:m$1.Iterator,a:{Element$Iterator:'T$PushIterator'}}}],tp:{T$PushIterator:{dv:'out'}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'T$PushIterator'}}],d:['ceylon.json.stream','PushIterator']};};
ex$.PushIterator$stream=PushIterator$stream;
function $init$PushIterator$stream(){
if(PushIterator$stream.$$===undefined){
m$1.initTypeProto(PushIterator$stream,'ceylon.json.stream::PushIterator',m$1.Basic,m$1.Iterator);
(function(pushIterator$){
m$1.atr$(pushIterator$,'$wghd6m$49o',function(){return this.$wghd6m$49o_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:'T$PushIterator'}},$cont:PushIterator$stream,d:['ceylon.json.stream','PushIterator','$at','it$vje6a5']};});
m$1.atr$(pushIterator$,'$wghd6m$49p',function(){return this.$wghd6m$49p_;},function($49q){return this.$wghd6m$49p_=$49q;},function(){return{mod:$CCMM$,$t:{t:'u',l:['T$PushIterator',{t:None$stream}]},$cont:PushIterator$stream,pa:1027,d:['ceylon.json.stream','PushIterator','$at','pushed$3u4iln']};});
pushIterator$.$_push=function($49r){
var pushIterator$=this;
var $49s;
m$1.asrt$((m$1.is$(($49s=$49r),{t:None$stream})),"Assertion failed: "+"cannot push more than one item\n\tviolated is None p=pushed\n\tat StreamingVisitor.ceylon (52:15-52:32)",'51:8-52:33','StreamingVisitor.ceylon');
var $49t;
m$1.asrt$((m$1.is$(($49t=$49s),pushIterator$.$$targs$$.T$PushIterator)),"Assertion failed: "+"\n\tviolated is T p\n\tat StreamingVisitor.ceylon (53:15-53:22)",'53:8-53:23','StreamingVisitor.ceylon');
pushIterator$.$wghd6m$49p=$49t;
};pushIterator$.$_push.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'pushed',mt:'prm',$t:{t:m$1.Anything}}],$cont:PushIterator$stream,pa:1,d:['ceylon.json.stream','PushIterator','$m','push']};};
pushIterator$.next=function(){
var pushIterator$=this;
var $49u;
if(!m$1.is$(($49u=pushIterator$.$wghd6m$49p),{t:None$stream})){
pushIterator$.$wghd6m$49p=none$stream();
return $49u;
}
else{
return pushIterator$.$wghd6m$49o.next();
}
};pushIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['T$PushIterator',{t:m$1.Finished}]},ps:[],$cont:PushIterator$stream,pa:3,d:['ceylon.json.stream','PushIterator','$m','next']};};
pushIterator$.toString=function(){return this.string.valueOf();};
})(PushIterator$stream.$$.prototype);
}
return PushIterator$stream;
}
ex$.$init$PushIterator$stream=$init$PushIterator$stream;$init$PushIterator$stream();
function StreamingVisitor$stream($wghd6m$49v,streamingVisitor$){
$init$StreamingVisitor$stream();
if(streamingVisitor$===undefined)streamingVisitor$=new StreamingVisitor$stream.$$;
streamingVisitor$.$wghd6m$49v_=$wghd6m$49v;
m$1.Iterator({Element$Iterator:m$1.mut$([{t:ObjectStartEvent$stream},{t:ObjectEndEvent$stream},{t:ArrayStartEvent$stream},{t:ArrayEndEvent$stream},{t:KeyEvent$stream},{t:m$1.$_String},{t:m$1.Float},{t:m$1.Integer},{t:m$1.$_Boolean},{t:m$1.Null}])},streamingVisitor$);
streamingVisitor$.$wghd6m$49w_=m$2.ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:PushIterator$stream,a:{T$PushIterator:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null},{t:m$1.Entry,a:{Key$Entry:{t:m$1.$_String},Item$Entry:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}])}}])}}});
streamingVisitor$.$wghd6m$49x_=PushIterator$stream(m$1.emptyIterator(),{T$PushIterator:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null},{t:m$1.Entry,a:{Key$Entry:{t:m$1.$_String},Item$Entry:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}])}}])});
streamingVisitor$.$wghd6m$49x.$_push($wghd6m$49v);
streamingVisitor$.$wghd6m$49w.$_push(streamingVisitor$.$wghd6m$49x);
return streamingVisitor$;
}
StreamingVisitor$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'root',mt:'prm',$t:Value()}],sts:[{t:m$1.Iterator,a:{Element$Iterator:Event$stream()}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:StreamingVisitor')];},d:['ceylon.json.stream','StreamingVisitor']};};
ex$.StreamingVisitor$stream=StreamingVisitor$stream;
function $init$StreamingVisitor$stream(){
if(StreamingVisitor$stream.$$===undefined){
m$1.initTypeProto(StreamingVisitor$stream,'ceylon.json.stream::StreamingVisitor',m$1.Basic,m$1.Iterator);
(function(streamingVisitor$){
m$1.atr$(streamingVisitor$,'$wghd6m$49v',function(){return this.$wghd6m$49v_;},undefined,function(){return{mod:$CCMM$,$t:Value(),$cont:StreamingVisitor$stream,d:['ceylon.json.stream','StreamingVisitor','$at','root$tvqdbk']};});
m$1.atr$(streamingVisitor$,'$wghd6m$49w',function(){return this.$wghd6m$49w_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2.ArrayList,a:{Element$ArrayList:{t:PushIterator$stream,a:{T$PushIterator:{t:'u',l:[Value(),{t:m$1.Entry,a:{Key$Entry:{t:m$1.$_String},Item$Entry:Value()}}]}}}}},$cont:StreamingVisitor$stream,d:['ceylon.json.stream','StreamingVisitor','$at','stack$vozhl2']};});
m$1.atr$(streamingVisitor$,'$wghd6m$49x',function(){return this.$wghd6m$49x_;},undefined,function(){return{mod:$CCMM$,$t:{t:PushIterator$stream,a:{T$PushIterator:{t:'u',l:[Value(),{t:m$1.Entry,a:{Key$Entry:{t:m$1.$_String},Item$Entry:Value()}}]}}},$cont:StreamingVisitor$stream,d:['ceylon.json.stream','StreamingVisitor','$at','pi$wvgdfz']};});
streamingVisitor$.next=function(){
var streamingVisitor$=this;
var $49y;
if(m$1.nn$(($49y=streamingVisitor$.$wghd6m$49w.$_pop()))){
var $49z=$49y.next();
var $4a0=$49z;
if(m$1.is$($4a0,m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:m$1.Null}]))) {
return $4a0;
}
else if(m$1.is$($4a0,{t:$_Object})) {
streamingVisitor$.$wghd6m$49w.$_push(PushIterator$stream($4a0.iterator(),{T$PushIterator:{t:m$1.Entry,a:{Key$Entry:{t:m$1.$_String},Item$Entry:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}])}}}));
return objectStart$stream();
}
else if(m$1.is$($4a0,{t:$_Array})) {
streamingVisitor$.$wghd6m$49w.$_push(PushIterator$stream($4a0.iterator(),{T$PushIterator:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}])}));
return arrayStart$stream();
}
else if(m$1.is$($4a0,{t:m$1.Entry,a:{Key$Entry:{t:m$1.$_String},Item$Entry:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}])}})) {
$49y.$_push($4a0.item);
return KeyEvent$stream($4a0.key);
}
else if(m$1.is$($4a0,{t:m$1.Finished})) {
var $4a1=$49y;
if(m$1.is$($4a1,{t:m$1.Iterator,a:{Element$Iterator:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}])}})) {
return arrayEnd$stream();
}
else{
return objectEnd$stream();
}
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
else{
return m$1.finished();
}
};streamingVisitor$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[Event$stream(),{t:m$1.Finished}]},ps:[],$cont:StreamingVisitor$stream,pa:3,d:['ceylon.json.stream','StreamingVisitor','$m','next']};};
streamingVisitor$.toString=function(){return this.string.valueOf();};
})(StreamingVisitor$stream.$$.prototype);
}
return StreamingVisitor$stream;
}
ex$.$init$StreamingVisitor$stream=$init$StreamingVisitor$stream;$init$StreamingVisitor$stream();
function NestingEvent$stream($$targs$$,nestingEvent$){
m$1.set_type_args(nestingEvent$,$$targs$$,NestingEvent$stream);
}
NestingEvent$stream.$crtmm$=function(){return{mod:$CCMM$,tp:{Self$NestingEvent:{sts:[{t:NestingEvent$stream,a:{Other$NestingEvent:'Other$NestingEvent',Self$NestingEvent:'Self$NestingEvent'}}]},Other$NestingEvent:{dv:'out',sts:[{t:NestingEvent$stream,a:{Other$NestingEvent:'Self$NestingEvent',Self$NestingEvent:'Other$NestingEvent'}}]}},pa:17,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:NestingEvent')];},d:['ceylon.json.stream','NestingEvent']};};
ex$.NestingEvent$stream=NestingEvent$stream;
function $init$NestingEvent$stream(){
if(NestingEvent$stream.$$===undefined){
m$1.initTypeProtoI(NestingEvent$stream,'ceylon.json.stream::NestingEvent');
(function(nestingEvent$){
nestingEvent$.$prop$getOther={$crtmm$:function(){return{mod:$CCMM$,$t:'Other$NestingEvent',$cont:NestingEvent$stream,pa:5,an:function(){return[m$1.doc("The value associated with this event")];},d:['ceylon.json.stream','NestingEvent','$at','other']};}};
nestingEvent$.toString=function(){return this.string.valueOf();};
})(NestingEvent$stream.$$.prototype);
}
return NestingEvent$stream;
}
ex$.$init$NestingEvent$stream=$init$NestingEvent$stream;$init$NestingEvent$stream();
function ObjectStartEvent$stream(objectStartEvent$){
$init$ObjectStartEvent$stream();
if(objectStartEvent$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.json.stream::ObjectStartEvent"),'?','?')
NestingEvent$stream({Other$NestingEvent:{t:ObjectEndEvent$stream},Self$NestingEvent:{t:ObjectStartEvent$stream}},objectStartEvent$);
return objectStartEvent$;
}
ObjectStartEvent$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:NestingEvent$stream,a:{Other$NestingEvent:{t:ObjectEndEvent$stream},Self$NestingEvent:{t:ObjectStartEvent$stream}}}],of:[$prop$getObjectStart$stream],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:ObjectStartEvent')];},d:['ceylon.json.stream','ObjectStartEvent']};};
ex$.ObjectStartEvent$stream=ObjectStartEvent$stream;
function $init$ObjectStartEvent$stream(){
if(ObjectStartEvent$stream.$$===undefined){
m$1.initTypeProto(ObjectStartEvent$stream,'ceylon.json.stream::ObjectStartEvent',m$1.Basic,$init$NestingEvent$stream());
(function(objectStartEvent$){
objectStartEvent$.toString=function(){return this.string.valueOf();};
})(ObjectStartEvent$stream.$$.prototype);
}
return ObjectStartEvent$stream;
}
ex$.$init$ObjectStartEvent$stream=$init$ObjectStartEvent$stream;$init$ObjectStartEvent$stream();
function $4a2$stream(){
var objectStart$=new $4a2$stream.$$;ObjectStartEvent$stream(objectStart$);
objectStart$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$4a2$stream,pa:3,d:['ceylon.json.stream','objectStart','$at','string']};}};
objectStart$.$prop$getString.get=function(){return string};
objectStart$.$prop$getOther={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ObjectEndEvent$stream},$cont:$4a2$stream,pa:3,d:['ceylon.json.stream','objectStart','$at','other']};}};
objectStart$.$prop$getOther.get=function(){return other};
return objectStart$;
};$4a2$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ObjectStartEvent$stream},d:['ceylon.json.stream','objectStart']};};
function $init$objectStart$stream(){
if($4a2$stream.$$===undefined){
m$1.initTypeProto($4a2$stream,'ceylon.json.stream::objectStart',$init$ObjectStartEvent$stream());
(function(objectStart$){
m$1.atr$(objectStart$,'string',function(){
return "{";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$4a2$stream,pa:3,d:['ceylon.json.stream','objectStart','$at','string']};});
m$1.atr$(objectStart$,'other',function(){
var objectStart$=this;
return objectEnd$stream();
},undefined,function(){return{mod:$CCMM$,$t:{t:ObjectEndEvent$stream},$cont:$4a2$stream,pa:3,d:['ceylon.json.stream','objectStart','$at','other']};});
objectStart$.toString=function(){return this.string.valueOf();};
})($4a2$stream.$$.prototype);
}
return $4a2$stream;
}
ex$.$init$objectStart$stream=$init$objectStart$stream;$init$objectStart$stream();var $4a6;
function objectStart$stream(){
if($4a6===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'objectStart\' before it was set"),'14:0-19:0','events.ceylon');
if($4a6===undefined){$4a6=m$1.INIT$;$4a6=$init$objectStart$stream()();$4a6.$crtmm$=objectStart$stream.$crtmm$;}
return $4a6;
}
ex$.objectStart$stream=objectStart$stream;
objectStart$stream.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$objectStart$stream()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:objectStart')];},d:['ceylon.json.stream','objectStart']};};
$prop$getObjectStart$stream=objectStart$stream;
ex$.$prop$getObjectStart$stream=$prop$getObjectStart$stream;
function ObjectEndEvent$stream(objectEndEvent$){
$init$ObjectEndEvent$stream();
if(objectEndEvent$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.json.stream::ObjectEndEvent"),'?','?')
NestingEvent$stream({Other$NestingEvent:{t:ObjectStartEvent$stream},Self$NestingEvent:{t:ObjectEndEvent$stream}},objectEndEvent$);
return objectEndEvent$;
}
ObjectEndEvent$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:NestingEvent$stream,a:{Other$NestingEvent:{t:ObjectStartEvent$stream},Self$NestingEvent:{t:ObjectEndEvent$stream}}}],of:[$prop$getObjectEnd$stream],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:ObjectEndEvent')];},d:['ceylon.json.stream','ObjectEndEvent']};};
ex$.ObjectEndEvent$stream=ObjectEndEvent$stream;
function $init$ObjectEndEvent$stream(){
if(ObjectEndEvent$stream.$$===undefined){
m$1.initTypeProto(ObjectEndEvent$stream,'ceylon.json.stream::ObjectEndEvent',m$1.Basic,$init$NestingEvent$stream());
(function(objectEndEvent$){
objectEndEvent$.toString=function(){return this.string.valueOf();};
})(ObjectEndEvent$stream.$$.prototype);
}
return ObjectEndEvent$stream;
}
ex$.$init$ObjectEndEvent$stream=$init$ObjectEndEvent$stream;$init$ObjectEndEvent$stream();
function $4a7$stream(){
var objectEnd$=new $4a7$stream.$$;ObjectEndEvent$stream(objectEnd$);
objectEnd$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$4a7$stream,pa:3,d:['ceylon.json.stream','objectEnd','$at','string']};}};
objectEnd$.$prop$getString.get=function(){return string};
objectEnd$.$prop$getOther={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ObjectStartEvent$stream},$cont:$4a7$stream,pa:3,d:['ceylon.json.stream','objectEnd','$at','other']};}};
objectEnd$.$prop$getOther.get=function(){return other};
return objectEnd$;
};$4a7$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ObjectEndEvent$stream},d:['ceylon.json.stream','objectEnd']};};
function $init$objectEnd$stream(){
if($4a7$stream.$$===undefined){
m$1.initTypeProto($4a7$stream,'ceylon.json.stream::objectEnd',$init$ObjectEndEvent$stream());
(function(objectEnd$){
m$1.atr$(objectEnd$,'string',function(){
return "}";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$4a7$stream,pa:3,d:['ceylon.json.stream','objectEnd','$at','string']};});
m$1.atr$(objectEnd$,'other',function(){
var objectEnd$=this;
return objectStart$stream();
},undefined,function(){return{mod:$CCMM$,$t:{t:ObjectStartEvent$stream},$cont:$4a7$stream,pa:3,d:['ceylon.json.stream','objectEnd','$at','other']};});
objectEnd$.toString=function(){return this.string.valueOf();};
})($4a7$stream.$$.prototype);
}
return $4a7$stream;
}
ex$.$init$objectEnd$stream=$init$objectEnd$stream;$init$objectEnd$stream();var $4ab;
function objectEnd$stream(){
if($4ab===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'objectEnd\' before it was set"),'26:0-31:0','events.ceylon');
if($4ab===undefined){$4ab=m$1.INIT$;$4ab=$init$objectEnd$stream()();$4ab.$crtmm$=objectEnd$stream.$crtmm$;}
return $4ab;
}
ex$.objectEnd$stream=objectEnd$stream;
objectEnd$stream.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$objectEnd$stream()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:objectEnd')];},d:['ceylon.json.stream','objectEnd']};};
$prop$getObjectEnd$stream=objectEnd$stream;
ex$.$prop$getObjectEnd$stream=$prop$getObjectEnd$stream;
function ArrayStartEvent$stream(arrayStartEvent$){
$init$ArrayStartEvent$stream();
if(arrayStartEvent$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.json.stream::ArrayStartEvent"),'?','?')
NestingEvent$stream({Other$NestingEvent:{t:ArrayEndEvent$stream},Self$NestingEvent:{t:ArrayStartEvent$stream}},arrayStartEvent$);
return arrayStartEvent$;
}
ArrayStartEvent$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:NestingEvent$stream,a:{Other$NestingEvent:{t:ArrayEndEvent$stream},Self$NestingEvent:{t:ArrayStartEvent$stream}}}],of:[$prop$getArrayStart$stream],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:ArrayStartEvent')];},d:['ceylon.json.stream','ArrayStartEvent']};};
ex$.ArrayStartEvent$stream=ArrayStartEvent$stream;
function $init$ArrayStartEvent$stream(){
if(ArrayStartEvent$stream.$$===undefined){
m$1.initTypeProto(ArrayStartEvent$stream,'ceylon.json.stream::ArrayStartEvent',m$1.Basic,$init$NestingEvent$stream());
(function(arrayStartEvent$){
arrayStartEvent$.toString=function(){return this.string.valueOf();};
})(ArrayStartEvent$stream.$$.prototype);
}
return ArrayStartEvent$stream;
}
ex$.$init$ArrayStartEvent$stream=$init$ArrayStartEvent$stream;$init$ArrayStartEvent$stream();
function $4ac$stream(){
var arrayStart$=new $4ac$stream.$$;ArrayStartEvent$stream(arrayStart$);
arrayStart$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$4ac$stream,pa:3,d:['ceylon.json.stream','arrayStart','$at','string']};}};
arrayStart$.$prop$getString.get=function(){return string};
arrayStart$.$prop$getOther={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ArrayEndEvent$stream},$cont:$4ac$stream,pa:3,d:['ceylon.json.stream','arrayStart','$at','other']};}};
arrayStart$.$prop$getOther.get=function(){return other};
return arrayStart$;
};$4ac$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ArrayStartEvent$stream},d:['ceylon.json.stream','arrayStart']};};
function $init$arrayStart$stream(){
if($4ac$stream.$$===undefined){
m$1.initTypeProto($4ac$stream,'ceylon.json.stream::arrayStart',$init$ArrayStartEvent$stream());
(function(arrayStart$){
m$1.atr$(arrayStart$,'string',function(){
return "[";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$4ac$stream,pa:3,d:['ceylon.json.stream','arrayStart','$at','string']};});
m$1.atr$(arrayStart$,'other',function(){
var arrayStart$=this;
return arrayEnd$stream();
},undefined,function(){return{mod:$CCMM$,$t:{t:ArrayEndEvent$stream},$cont:$4ac$stream,pa:3,d:['ceylon.json.stream','arrayStart','$at','other']};});
arrayStart$.toString=function(){return this.string.valueOf();};
})($4ac$stream.$$.prototype);
}
return $4ac$stream;
}
ex$.$init$arrayStart$stream=$init$arrayStart$stream;$init$arrayStart$stream();var $4ag;
function arrayStart$stream(){
if($4ag===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'arrayStart\' before it was set"),'38:0-43:0','events.ceylon');
if($4ag===undefined){$4ag=m$1.INIT$;$4ag=$init$arrayStart$stream()();$4ag.$crtmm$=arrayStart$stream.$crtmm$;}
return $4ag;
}
ex$.arrayStart$stream=arrayStart$stream;
arrayStart$stream.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$arrayStart$stream()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:arrayStart')];},d:['ceylon.json.stream','arrayStart']};};
$prop$getArrayStart$stream=arrayStart$stream;
ex$.$prop$getArrayStart$stream=$prop$getArrayStart$stream;
function ArrayEndEvent$stream(arrayEndEvent$){
$init$ArrayEndEvent$stream();
if(arrayEndEvent$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.json.stream::ArrayEndEvent"),'?','?')
NestingEvent$stream({Other$NestingEvent:{t:ArrayStartEvent$stream},Self$NestingEvent:{t:ArrayEndEvent$stream}},arrayEndEvent$);
return arrayEndEvent$;
}
ArrayEndEvent$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:NestingEvent$stream,a:{Other$NestingEvent:{t:ArrayStartEvent$stream},Self$NestingEvent:{t:ArrayEndEvent$stream}}}],of:[$prop$getArrayEnd$stream],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:ArrayEndEvent')];},d:['ceylon.json.stream','ArrayEndEvent']};};
ex$.ArrayEndEvent$stream=ArrayEndEvent$stream;
function $init$ArrayEndEvent$stream(){
if(ArrayEndEvent$stream.$$===undefined){
m$1.initTypeProto(ArrayEndEvent$stream,'ceylon.json.stream::ArrayEndEvent',m$1.Basic,$init$NestingEvent$stream());
(function(arrayEndEvent$){
arrayEndEvent$.toString=function(){return this.string.valueOf();};
})(ArrayEndEvent$stream.$$.prototype);
}
return ArrayEndEvent$stream;
}
ex$.$init$ArrayEndEvent$stream=$init$ArrayEndEvent$stream;$init$ArrayEndEvent$stream();
function $4ah$stream(){
var arrayEnd$=new $4ah$stream.$$;ArrayEndEvent$stream(arrayEnd$);
arrayEnd$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$4ah$stream,pa:3,d:['ceylon.json.stream','arrayEnd','$at','string']};}};
arrayEnd$.$prop$getString.get=function(){return string};
arrayEnd$.$prop$getOther={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ArrayStartEvent$stream},$cont:$4ah$stream,pa:3,d:['ceylon.json.stream','arrayEnd','$at','other']};}};
arrayEnd$.$prop$getOther.get=function(){return other};
return arrayEnd$;
};$4ah$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ArrayEndEvent$stream},d:['ceylon.json.stream','arrayEnd']};};
function $init$arrayEnd$stream(){
if($4ah$stream.$$===undefined){
m$1.initTypeProto($4ah$stream,'ceylon.json.stream::arrayEnd',$init$ArrayEndEvent$stream());
(function(arrayEnd$){
m$1.atr$(arrayEnd$,'string',function(){
return "]";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$4ah$stream,pa:3,d:['ceylon.json.stream','arrayEnd','$at','string']};});
m$1.atr$(arrayEnd$,'other',function(){
var arrayEnd$=this;
return arrayStart$stream();
},undefined,function(){return{mod:$CCMM$,$t:{t:ArrayStartEvent$stream},$cont:$4ah$stream,pa:3,d:['ceylon.json.stream','arrayEnd','$at','other']};});
arrayEnd$.toString=function(){return this.string.valueOf();};
})($4ah$stream.$$.prototype);
}
return $4ah$stream;
}
ex$.$init$arrayEnd$stream=$init$arrayEnd$stream;$init$arrayEnd$stream();var $4al;
function arrayEnd$stream(){
if($4al===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'arrayEnd\' before it was set"),'50:0-55:0','events.ceylon');
if($4al===undefined){$4al=m$1.INIT$;$4al=$init$arrayEnd$stream()();$4al.$crtmm$=arrayEnd$stream.$crtmm$;}
return $4al;
}
ex$.arrayEnd$stream=arrayEnd$stream;
arrayEnd$stream.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$arrayEnd$stream()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:arrayEnd')];},d:['ceylon.json.stream','arrayEnd']};};
$prop$getArrayEnd$stream=arrayEnd$stream;
ex$.$prop$getArrayEnd$stream=$prop$getArrayEnd$stream;
function KeyEvent$stream(key,keyEvent$){
$init$KeyEvent$stream();
if(keyEvent$===undefined)keyEvent$=new KeyEvent$stream.$$;
keyEvent$.key_=key;
return keyEvent$;
}
KeyEvent$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String},pa:1}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:KeyEvent')];},d:['ceylon.json.stream','KeyEvent']};};
ex$.KeyEvent$stream=KeyEvent$stream;
function $init$KeyEvent$stream(){
if(KeyEvent$stream.$$===undefined){
m$1.initTypeProto(KeyEvent$stream,'ceylon.json.stream::KeyEvent',m$1.Basic);
(function(keyEvent$){
m$1.atr$(keyEvent$,'key',function(){return this.key_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:KeyEvent$stream,pa:1,d:['ceylon.json.stream','KeyEvent','$at','key']};});
m$1.atr$(keyEvent$,'string',function(){
var keyEvent$=this;
return "\""+(keyEvent$.key)+"\":";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:KeyEvent$stream,pa:3,d:['ceylon.json.stream','KeyEvent','$at','string']};});
keyEvent$.toString=function(){return this.string.valueOf();};
})(KeyEvent$stream.$$.prototype);
}
return KeyEvent$stream;
}
ex$.$init$KeyEvent$stream=$init$KeyEvent$stream;$init$KeyEvent$stream();
function Event$stream(){var $4an=m$1.mut$([{t:ObjectStartEvent$stream},{t:ObjectEndEvent$stream},{t:ArrayStartEvent$stream},{t:ArrayEndEvent$stream},{t:KeyEvent$stream},{t:m$1.$_String},{t:m$1.Float},{t:m$1.Integer},{t:m$1.$_Boolean},{t:m$1.Null}]);$4an.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:Event')];},d:['ceylon.json.stream','Event']};};return $4an;}
ex$.Event$stream=Event$stream;
function Positioned(positioned$){
}
Positioned.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Positioned')];},d:['ceylon.json','Positioned']};};
ex$.Positioned=Positioned;
function $init$Positioned(){
if(Positioned.$$===undefined){
m$1.initTypeProtoI(Positioned,'ceylon.json::Positioned');
(function(positioned$){
positioned$.$prop$getPosition={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Positioned,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Positioned:$at:position')];},d:['ceylon.json','Positioned','$at','position']};}};
positioned$.$prop$getLine={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Positioned,pa:5,an:function(){return[m$1.doc("The line number within the input.")];},d:['ceylon.json','Positioned','$at','line']};}};
positioned$.$prop$getColumn={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Positioned,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Positioned:$at:column')];},d:['ceylon.json','Positioned','$at','column']};}};
m$1.atr$(positioned$,'location',function(){
var positioned$=this;
return positioned$.line.string+":"+(positioned$.column.string)+" (line:column)";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Positioned,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Positioned:$at:location')];},d:['ceylon.json','Positioned','$at','location']};});
positioned$.toString=function(){return this.string.valueOf();};
})(Positioned.$$.prototype);
}
return Positioned;
}
ex$.$init$Positioned=$init$Positioned;$init$Positioned();
function Tokenizer(tokenizer$){
$init$Tokenizer();
if(tokenizer$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.json::Tokenizer"),'?','?')
Positioned(tokenizer$);
tokenizer$.$wghd6m$4ao_=(0);
tokenizer$.$wghd6m$4ap_=(1);
tokenizer$.$wghd6m$4aq_=(1);
return tokenizer$;
}
Tokenizer.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:Positioned}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Tokenizer')];},d:['ceylon.json','Tokenizer']};};
ex$.Tokenizer=Tokenizer;
function $init$Tokenizer(){
if(Tokenizer.$$===undefined){
m$1.initTypeProto(Tokenizer,'ceylon.json::Tokenizer',m$1.Basic,$init$Positioned());
(function(tokenizer$){
m$1.atr$(tokenizer$,'$wghd6m$4ao',function(){return this.$wghd6m$4ao_;},function($4ar){return this.$wghd6m$4ao_=$4ar;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Tokenizer,pa:1024,d:['ceylon.json','Tokenizer','$at','index$axh4m1']};});
m$1.atr$(tokenizer$,'$wghd6m$4ap',function(){return this.$wghd6m$4ap_;},function($4as){return this.$wghd6m$4ap_=$4as;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Tokenizer,pa:1024,d:['ceylon.json','Tokenizer','$at','line_$j1cqe']};});
m$1.atr$(tokenizer$,'$wghd6m$4aq',function(){return this.$wghd6m$4aq_;},function($4at){return this.$wghd6m$4aq_=$4at;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Tokenizer,pa:1027,d:['ceylon.json','Tokenizer','$at','column_$7ybrm0']};});
m$1.atr$(tokenizer$,'position',function(){
var tokenizer$=this;
return tokenizer$.$wghd6m$4ao;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Tokenizer,pa:3,d:['ceylon.json','Tokenizer','$at','position']};});
m$1.atr$(tokenizer$,'line',function(){
var tokenizer$=this;
return tokenizer$.$wghd6m$4ap;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Tokenizer,pa:3,d:['ceylon.json','Tokenizer','$at','line']};});
m$1.atr$(tokenizer$,'column',function(){
var tokenizer$=this;
return tokenizer$.$wghd6m$4aq;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Tokenizer,pa:3,d:['ceylon.json','Tokenizer','$at','column']};});
tokenizer$.$prop$getHasMore={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Tokenizer,pa:5,an:function(){return[m$1.doc("Whether there is another character")];},d:['ceylon.json','Tokenizer','$at','hasMore']};}};
tokenizer$.character={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Character},ps:[],$cont:Tokenizer,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Tokenizer:$m:character')];},d:['ceylon.json','Tokenizer','$m','character']};}};tokenizer$.moveOne=function(){
var tokenizer$=this;
var $4ax=tokenizer$.character();
var $4ay=$4ax;
if($4ay.equals(m$1.Character(10,true))) {
($4az=tokenizer$.$wghd6m$4ap,tokenizer$.$wghd6m$4ap=$4az.successor,$4az);
var $4az;
tokenizer$.$wghd6m$4aq=(1);
}
else if($4ay.equals(m$1.Character(13,true))) {
tokenizer$.$wghd6m$4aq=(1);
}
else{
($4b0=tokenizer$.$wghd6m$4aq,tokenizer$.$wghd6m$4aq=$4b0.successor,$4b0);
var $4b0;
}
($4b1=tokenizer$.$wghd6m$4ao,tokenizer$.$wghd6m$4ao=$4b1.successor,$4b1);
var $4b1;
};tokenizer$.moveOne.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Tokenizer,pa:1,an:function(){return[m$1.doc("Move to the next character")];},d:['ceylon.json','Tokenizer','$m','moveOne']};};
tokenizer$.eatSpaces=function(){
var tokenizer$=this;
while((tokenizer$.hasMore&&tokenizer$.isSpace(tokenizer$.character()))){
tokenizer$.moveOne();
}
};tokenizer$.eatSpaces.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Tokenizer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Tokenizer:$m:eatSpaces')];},d:['ceylon.json','Tokenizer','$m','eatSpaces']};};
tokenizer$.eatSpacesUntil=function($4b2){
var tokenizer$=this;
tokenizer$.eatSpaces();
tokenizer$.eat($4b2);
};tokenizer$.eatSpacesUntil.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:Tokenizer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Tokenizer:$m:eatSpacesUntil')];},d:['ceylon.json','Tokenizer','$m','eatSpacesUntil']};};
tokenizer$.check=function($4b3){
var tokenizer$=this;
if(!m$1.$eq$(tokenizer$.character(),$4b3)){
return false;
}
tokenizer$.moveOne();
return true;
};tokenizer$.check.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:Tokenizer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Tokenizer:$m:check')];},d:['ceylon.json','Tokenizer','$m','check']};};
tokenizer$.eat=function($4b4){
var tokenizer$=this;
if(!m$1.$eq$(tokenizer$.character(),$4b4)){
throw m$1.wrapexc(tokenizer$.unexpectedCharacter($4b4),'83:12-83:40','ceylon/json/tokenize.ceylon');
}
tokenizer$.moveOne();
};tokenizer$.eat.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:Tokenizer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Tokenizer:$m:eat')];},d:['ceylon.json','Tokenizer','$m','eat']};};
tokenizer$.eatChar=function(){
var tokenizer$=this;
var $4b5=tokenizer$.character();
tokenizer$.moveOne();
return $4b5;
};tokenizer$.eatChar.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Character},ps:[],$cont:Tokenizer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Tokenizer:$m:eatChar')];},d:['ceylon.json','Tokenizer','$m','eatChar']};};
tokenizer$.isSpace=function($4b6){var tokenizer$=this;
return (((m$1.$eq$($4b6,m$1.Character(32,true))||m$1.$eq$($4b6,m$1.Character(10,true)))||m$1.$eq$($4b6,m$1.Character(13,true)))||m$1.$eq$($4b6,m$1.Character(9,true)));
};
tokenizer$.isSpace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:Tokenizer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Tokenizer:$m:isSpace')];},d:['ceylon.json','Tokenizer','$m','isSpace']};};
tokenizer$.isDigit=function($4b7){
var tokenizer$=this;
var $4b8=$4b7.integer;
return (($4b8>=m$1.Character(48,true).integer)&&($4b8<=m$1.Character(57,true).integer));
};tokenizer$.isDigit.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:Tokenizer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Tokenizer:$m:isDigit')];},d:['ceylon.json','Tokenizer','$m','isDigit']};};
tokenizer$.exception=function($4b9){var tokenizer$=this;
return ParseException($4b9,tokenizer$.line,tokenizer$.column);
};
tokenizer$.exception.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ParseException},ps:[{nm:'message',mt:'prm',$t:{t:m$1.$_String}}],$cont:Tokenizer,pa:1,d:['ceylon.json','Tokenizer','$m','exception']};};
m$1.atr$(tokenizer$,'unexpectedEnd',function(){
var tokenizer$=this;
return tokenizer$.exception("Unexpected end of input");
},undefined,function(){return{mod:$CCMM$,$t:{t:ParseException},$cont:Tokenizer,pa:1,d:['ceylon.json','Tokenizer','$at','unexpectedEnd']};});
tokenizer$.unexpectedCharacter=function($4ba){var tokenizer$=this;
return tokenizer$.exception("Expected "+(($4bb=$4ba,m$1.nn$($4bb)?$4bb:"end of input").string)+" but got "+(tokenizer$.character().string));
var $4bb;
};
tokenizer$.unexpectedCharacter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ParseException},ps:[{nm:'expected',mt:'prm',$t:{t:'u',l:[{t:m$1.Character},{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}]}}],$cont:Tokenizer,pa:1,d:['ceylon.json','Tokenizer','$m','unexpectedCharacter']};};
tokenizer$.toString=function(){return this.string.valueOf();};
})(Tokenizer.$$.prototype);
}
return Tokenizer;
}
ex$.$init$Tokenizer=$init$Tokenizer;$init$Tokenizer();
function StringTokenizer($wghd6m$4bc,stringTokenizer$){
$init$StringTokenizer();
if(stringTokenizer$===undefined)stringTokenizer$=new StringTokenizer.$$;
stringTokenizer$.$wghd6m$4bc_=$wghd6m$4bc;
Tokenizer(stringTokenizer$);
stringTokenizer$.$wghd6m$4bd_=(-1);
stringTokenizer$.$wghd6m$4be_=stringTokenizer$.$wghd6m$4bc.size;
stringTokenizer$.$wghd6m$4bf_=stringTokenizer$.$wghd6m$4bc.iterator();
stringTokenizer$.$wghd6m$4bg_=null;
return stringTokenizer$;
}
StringTokenizer.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Tokenizer},ps:[{nm:'chars',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:StringTokenizer')];},d:['ceylon.json','StringTokenizer']};};
ex$.StringTokenizer=StringTokenizer;
function $init$StringTokenizer(){
if(StringTokenizer.$$===undefined){
m$1.initTypeProto(StringTokenizer,'ceylon.json::StringTokenizer',$init$Tokenizer());
(function(stringTokenizer$){
m$1.atr$(stringTokenizer$,'$wghd6m$4bc',function(){return this.$wghd6m$4bc_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:StringTokenizer,d:['ceylon.json','StringTokenizer','$at','chars$3ibitv']};});
m$1.atr$(stringTokenizer$,'$wghd6m$4bd',function(){return this.$wghd6m$4bd_;},function($4bh){return this.$wghd6m$4bd_=$4bh;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StringTokenizer,pa:1024,d:['ceylon.json','StringTokenizer','$at','count$8nuut1']};});
m$1.atr$(stringTokenizer$,'$wghd6m$4be',function(){return this.$wghd6m$4be_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StringTokenizer,d:['ceylon.json','StringTokenizer','$at','size$zp8k7']};});
m$1.atr$(stringTokenizer$,'$wghd6m$4bf',function(){return this.$wghd6m$4bf_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:m$1.Character}}},$cont:StringTokenizer,d:['ceylon.json','StringTokenizer','$at','it$7u8mvj']};});
m$1.atr$(stringTokenizer$,'$wghd6m$4bg',function(){return this.$wghd6m$4bg_;},function($4bi){return this.$wghd6m$4bg_=$4bi;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Character},{t:'u',l:[{t:m$1.Null},{t:m$1.Finished}]}]},$cont:StringTokenizer,pa:1027,d:['ceylon.json','StringTokenizer','$at','char$9u7k64']};});
m$1.atr$(stringTokenizer$,'hasMore',function(){
var stringTokenizer$=this;
return (stringTokenizer$.position<stringTokenizer$.$wghd6m$4be);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:StringTokenizer,pa:3,an:function(){return[m$1.doc("Whether there is another character")];},d:['ceylon.json','StringTokenizer','$at','hasMore']};});
stringTokenizer$.character=function(){
var stringTokenizer$=this;
while((stringTokenizer$.$wghd6m$4bd<stringTokenizer$.position)){
var $4bk=stringTokenizer$.$wghd6m$4bf.next();
var $4bl;
if(m$1.is$(($4bl=$4bk),{t:m$1.Finished})){
throw m$1.wrapexc(stringTokenizer$.unexpectedEnd,'138:16-138:35','ceylon/json/tokenize.ceylon');
}
function $4bm(){return $4bk;}
($4bn=stringTokenizer$.$wghd6m$4bd,stringTokenizer$.$wghd6m$4bd=$4bn.successor,$4bn);
var $4bn;
stringTokenizer$.$wghd6m$4bg=$4bm();
}
var $4bo;
m$1.asrt$((m$1.is$(($4bo=stringTokenizer$.$wghd6m$4bg),{t:m$1.Character})),"Assertion failed: "+"\n\tviolated is Character last = char\n\tat tokenize.ceylon (144:14-144:39)",'144:8-144:40','tokenize.ceylon');
return $4bo;
};stringTokenizer$.character.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Character},ps:[],$cont:StringTokenizer,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:StringTokenizer:$m:character')];},d:['ceylon.json','StringTokenizer','$m','character']};};
stringTokenizer$.toString=function(){return this.string.valueOf();};
})(StringTokenizer.$$.prototype);
}
return StringTokenizer;
}
ex$.$init$StringTokenizer=$init$StringTokenizer;$init$StringTokenizer();
ex$.$pkg$ans$ceylon$json=function(){return[m$1.doc$($CCMM$,'ceylon.json','$pkg-anns'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$json$stream=function(){return[m$1.doc$($CCMM$,'ceylon.json.stream','$pkg-anns'),m$1.shared()];};
ex$.$pkgunsh$ceylon$json={'formatNumber':formatNumber,'compareKeys':compareKeys,'parseStringEscape':parseStringEscape,'parseStringUnicode':parseStringUnicode,'parseHex':parseHex,'parseDigits':parseDigits,'parseDigit':parseDigit,'parseExponent':parseExponent};
ex$.$pkgunsh$ceylon$json$stream={'parse':parse$stream,'buildValue':buildValue$stream,'buildObject':buildObject$stream,'buildArray':buildArray$stream,'StreamState':StreamState$stream,'errorReporting':errorReporting$stream,'None':None$stream,'none':$prop$getNone$stream,'PushIterator':PushIterator$stream};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
