(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('ceylon/collection/1.3.2/ceylon.collection-1.3.2', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/collection/1.3.2/ceylon.collection-1.3.2-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.3.2/ceylon.language-1.3.2');
m$1.$addmod$(m$1,'ceylon.language/1.3.2');
m$1.$addmod$(ex$,'ceylon.collection/1.3.2');
ex$.$mod$ans$=function(){return[m$1.doc$($CCMM$,'','$mod-anns'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String})),m$1.license("Apache Software License")];};
function ArrayList$$c($$targs$$,arrayList$){
m$1.set_type_args(arrayList$,$$targs$$);
m$1.SearchableList({Element$SearchableList:$$targs$$.Element$ArrayList},arrayList$);
MutableList({Element$MutableList:$$targs$$.Element$ArrayList},arrayList$);
Stack({Element$Stack:$$targs$$.Element$ArrayList},arrayList$);
Queue({Element$Queue:$$targs$$.Element$ArrayList},arrayList$);
}
function ArrayList(){return ArrayList$c_$c$.apply(undefined,arguments);}
function ArrayList$c_$c$$$a($sx,$sy,$sz,$$targs$$,arrayList$){
if($sx===undefined){$sx=(0);}
if($sy===undefined){$sy=(1.5);}
if($sz===undefined){$sz=m$1.empty();}
arrayList$.$1dkeuw$t0_=$sx;
m$1.atr$(arrayList$,'$1dkeuw$t0',function(){return this.$1dkeuw$t0_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};});
arrayList$.$1dkeuw$t1_=$sy;
m$1.atr$(arrayList$,'$1dkeuw$t1',function(){return this.$1dkeuw$t1_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};});
arrayList$.$1dkeuw$t2_=m$1.$_Array($sz,{Element$Array:m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])});
m$1.atr$(arrayList$,'$1dkeuw$t2',function(){return this.$1dkeuw$t2_;},function($t3){return this.$1dkeuw$t2_=$t3;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc("The underlying array.")];},d:['ceylon.collection','ArrayList','$at','array$i32poi']};});
arrayList$.$1dkeuw$t4_=arrayList$.$1dkeuw$t2.size;
m$1.atr$(arrayList$,'$1dkeuw$t4',function(){return this.$1dkeuw$t4_;},function($t5){return this.$1dkeuw$t4_=$t5;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:length$u7by4j')];},d:['ceylon.collection','ArrayList','$at','length$u7by4j']};});
return arrayList$;
};
function ArrayList$c_$c$($sx,$sy,$sz,$$targs$$,arrayList$){
$init$ArrayList();
if(arrayList$===undefined)arrayList$=new ArrayList.$$;
if($sx===undefined){$sx=(0);}
if($sy===undefined){$sy=(1.5);}
if($sz===undefined){$sz=m$1.empty();}
ArrayList$$c($$targs$$,arrayList$);
ArrayList$c_$c$$$a($sx,$sy,$sz,$$targs$$,arrayList$);
m$1.asrt$(((arrayList$.$1dkeuw$t0>=(0))),"Assertion failed: "+"initial capacity cannot be negative\n\tviolated initialCapacity >= 0\n\tat ArrayList.ceylon (87:11-87:32)",'86:4-87:33','ArrayList.ceylon');
m$1.asrt$(((arrayList$.$1dkeuw$t0<=m$1.runtime().maxArraySize)),"Assertion failed: "+"initial capacity too large\n\tviolated initialCapacity <= runtime.maxArraySize\n\tat ArrayList.ceylon (90:11-90:51)",'89:4-90:52','ArrayList.ceylon');
m$1.asrt$((arrayList$.$1dkeuw$t1.notSmallerThan((1.0))),"Assertion failed: "+"growth factor must be at least 1.0\n\tviolated growthFactor >= 1.0\n\tat ArrayList.ceylon (93:11-93:31)",'92:4-93:32','ArrayList.ceylon');
m$1.atr$(arrayList$,'size',function(){
return arrayList$.$1dkeuw$t4;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
if((arrayList$.$1dkeuw$t4<arrayList$.$1dkeuw$t0)){
var $t6=arrayList$.$1dkeuw$t7(arrayList$.$1dkeuw$t0);
arrayList$.$1dkeuw$t2.copyTo($t6,0,0,arrayList$.$1dkeuw$t4);
arrayList$.$1dkeuw$t2=$t6;
}
arrayList$.getFromFirst=function($t8){return (($t9=$t8,$t9.notSmallerThan((0))&&$t9.smallerThan(arrayList$.$1dkeuw$t4))?arrayList$.$1dkeuw$t2.$_get($t8):null);
};
arrayList$.iterator=function(){return function(){function $ta($$targs$$){
var $ta$=new $ta.$$;$ta$.outer$=arrayList$;
$ta$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList/*ORALE!Element inv pero Element var*/},$ta$);
$ta$.$1dkeuw$tb_=(0);
$ta$.$prop$get$1dkeuw$tb={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$ta,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};}};
$ta$.$prop$get$1dkeuw$tb.get=function(){return $1dkeuw$tb};
return $ta$;
};$ta.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:ArrayList,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}}],d:['ceylon.collection','ArrayList']};};
function $init$$ta(){
if($ta.$$===undefined){
m$1.initTypeProto($ta,'ceylon.collection::ArrayList.anonymous#0',m$1.Basic,m$1.Iterator);
(function($ta$){
m$1.atr$($ta$,'$1dkeuw$tb',function(){return this.$1dkeuw$tb_;},function($tc){return this.$1dkeuw$tb_=$tc;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$ta,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};});
$ta$.next=function(){
var $ta$=this;
if(($ta$.$1dkeuw$tb<arrayList$.$1dkeuw$t4)){
var $td;
if(m$1.nn$(($td=arrayList$.$1dkeuw$t2.$_get(($te=$ta$.$1dkeuw$tb,$ta$.$1dkeuw$tb=$te.successor,$te))))){
return $td;
}
else{
var $tf;
m$1.asrt$((m$1.is$(($tf=null),arrayList$.$$targs$$.Element$ArrayList)),"Assertion failed: "+"\n\tviolated is Element null\n\tat ArrayList.ceylon (203:27-203:43)",'203:20-203:44','ArrayList.ceylon');
return $tf;
}
var $te;
}
else{
return m$1.finished();
}
};$ta$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Finished},'Element$ArrayList']},ps:[],$cont:$ta,pa:3,d:['ceylon.collection','ArrayList','$m','next']};};
$ta$.toString=function(){return this.string.valueOf();};
})($ta.$$.prototype);
}
return $ta;
}
arrayList$.$init$$ta=$init$$ta;$init$$ta();return $ta();}();
};
arrayList$.measure=function($th,$ti){return arrayList$.span(($tj=measureToSpan($th,$ti),$tj.$_get(0)),$tj.$_get(1));
};
arrayList$.deleteMeasure=function($tk,$tl){return arrayList$.deleteSpan(($tm=measureToSpan($tk,$tl),$tm.$_get(0)),$tm.$_get(1));
};
arrayList$.spanFrom=function($tn){return ($to=(($tn>=arrayList$.$1dkeuw$t4)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($to)?$to:arrayList$.span($tn,(arrayList$.$1dkeuw$t4-(1))));
var $to;
};
arrayList$.spanTo=function($tp){return ($tq=(($tp<(0))?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($tq)?$tq:arrayList$.span(0,$tp));
var $tq;
};
m$1.atr$(arrayList$,'first',function(){
return ((arrayList$.$1dkeuw$t4>(0))?arrayList$.$1dkeuw$t2.$_get(0):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','first']};});
m$1.atr$(arrayList$,'lastIndex',function(){
return ((arrayList$.$1dkeuw$t4>=(1))?(arrayList$.$1dkeuw$t4-(1)):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
arrayList$.equals=function($tr){return arrayList$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(arrayList$,$tr);
};
m$1.atr$(arrayList$,'hash',function(){
return m$1.attrGetter(arrayList$.getT$all()['ceylon.language::List'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','hash']};});
arrayList$.$_push=function($ts){return arrayList$.add($ts);
};
arrayList$.$_pop=function(){return arrayList$.deleteLast();
};
m$1.atr$(arrayList$,'top',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
arrayList$.offer=function($tt){return arrayList$.add($tt);
};
arrayList$.accept=function(){return arrayList$.deleteFirst();
};
m$1.atr$(arrayList$,'back',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
m$1.atr$(arrayList$,'front',function(){
return arrayList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
arrayList$.find=function($tu){return arrayList$.$1dkeuw$t2.find($tu);
};
arrayList$.findLast=function($tv){return arrayList$.$1dkeuw$t2.findLast($tv);
};
arrayList$.occursAt=function($tw,$tx){return (($tw<arrayList$.$1dkeuw$t4)?arrayList$.$1dkeuw$t2.occursAt($tw,$tx):false);
};
arrayList$.firstOccurrence=function($ty,$tz,$u0){if($tz===undefined){$tz=arrayList$.firstOccurrence$defs$from($ty,$tz,$u0);}
if($u0===undefined){$u0=arrayList$.firstOccurrence$defs$length($ty,$tz,$u0);}
return function(){var $u1;
if(m$1.nn$(($u1=($u2=$ty,$u3=$tz,$u4=(smallest(($tz+$u0),arrayList$.size)-$tz),($u5=arrayList$.$1dkeuw$t2,m$1.jsc$3($u5,$u5.firstOccurrence))($u2,$u3,$u4)))))return $u1;else return null}();
var $u2,$u3,$u4,$u5;
};
arrayList$.lastOccurrence=function($u6,$u7,$u8){if($u7===undefined){$u7=arrayList$.lastOccurrence$defs$from($u6,$u7,$u8);}
if($u8===undefined){$u8=arrayList$.lastOccurrence$defs$length($u6,$u7,$u8);}
return function(){var $u9;
if(m$1.nn$(($u9=($ua=$u6,$ub=largest($u7,(arrayList$.$1dkeuw$t2.size-arrayList$.size)),$uc=$u8,($ud=arrayList$.$1dkeuw$t2,m$1.jsc$3($ud,$ud.lastOccurrence))($ua,$ub,$uc)))))return $u9;else return null}();
var $ua,$ub,$uc,$ud;
};
arrayList$.occurs=function($ue,$uf,$ug){if($uf===undefined){$uf=arrayList$.occurs$defs$from($ue,$uf,$ug);}
if($ug===undefined){$ug=arrayList$.occurs$defs$length($ue,$uf,$ug);}
return ($uh=$ue,$ui=$uf,$uj=(smallest(($uf+$ug),arrayList$.size)-$uf),($uk=arrayList$.$1dkeuw$t2,m$1.jsc$3($uk,$uk.occurs))($uh,$ui,$uj));
var $uh,$ui,$uj,$uk;
};
arrayList$.occurrences=function($ul,$um,$un){if($um===undefined){$um=arrayList$.occurrences$defs$from($ul,$um,$un);}
if($un===undefined){$un=arrayList$.occurrences$defs$length($ul,$um,$un);}
return ($uo=$ul,$up=$um,$uq=(smallest(($um+$un),arrayList$.size)-$um),($ur=arrayList$.$1dkeuw$t2,m$1.jsc$3($ur,$ur.occurrences))($uo,$up,$uq));
var $uo,$up,$uq,$ur;
};
return arrayList$;
};
ArrayList$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("The initial size of the backing array.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:$def:$at:growthFactor$6olvvh')];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$ArrayList'}},an:function(){return[m$1.doc("The initial elements of the list.")];}}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:$def')];},d:['ceylon.collection','ArrayList','$cn','$def']};};
ArrayList.ArrayList$c_$c$=ArrayList$c_$c$;
ex$.ArrayList$c_$c$=ArrayList$c_$c$;
function ArrayList$c_copy$$a($us,$ut,$$targs$$,arrayList$){
if($ut===undefined){$ut=(1.5);}
arrayList$.$1dkeuw$t0_=$us.size;
m$1.atr$(arrayList$,'$1dkeuw$t0',function(){return this.$1dkeuw$t0_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};});
arrayList$.$1dkeuw$t1_=$ut;
m$1.atr$(arrayList$,'$1dkeuw$t1',function(){return this.$1dkeuw$t1_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};});
arrayList$.$1dkeuw$t2_=$us.$1dkeuw$t2.clone();
m$1.atr$(arrayList$,'$1dkeuw$t2',function(){return this.$1dkeuw$t2_;},function($uu){return this.$1dkeuw$t2_=$uu;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc("The underlying array.")];},d:['ceylon.collection','ArrayList','$at','array$i32poi']};});
arrayList$.$1dkeuw$t4_=$us.size;
m$1.atr$(arrayList$,'$1dkeuw$t4',function(){return this.$1dkeuw$t4_;},function($uv){return this.$1dkeuw$t4_=$uv;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:length$u7by4j')];},d:['ceylon.collection','ArrayList','$at','length$u7by4j']};});
return arrayList$;
};
function ArrayList$c_copy($us,$ut,$$targs$$,arrayList$){
$init$ArrayList();
if(arrayList$===undefined)arrayList$=new ArrayList.$$;
if($ut===undefined){$ut=(1.5);}
ArrayList$$c($$targs$$,arrayList$);
ArrayList$c_copy$$a($us,$ut,$$targs$$,arrayList$);
m$1.asrt$(((arrayList$.$1dkeuw$t0>=(0))),"Assertion failed: "+"initial capacity cannot be negative\n\tviolated initialCapacity >= 0\n\tat ArrayList.ceylon (87:11-87:32)",'86:4-87:33','ArrayList.ceylon');
m$1.asrt$(((arrayList$.$1dkeuw$t0<=m$1.runtime().maxArraySize)),"Assertion failed: "+"initial capacity too large\n\tviolated initialCapacity <= runtime.maxArraySize\n\tat ArrayList.ceylon (90:11-90:51)",'89:4-90:52','ArrayList.ceylon');
m$1.asrt$((arrayList$.$1dkeuw$t1.notSmallerThan((1.0))),"Assertion failed: "+"growth factor must be at least 1.0\n\tviolated growthFactor >= 1.0\n\tat ArrayList.ceylon (93:11-93:31)",'92:4-93:32','ArrayList.ceylon');
m$1.atr$(arrayList$,'size',function(){
return arrayList$.$1dkeuw$t4;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
if((arrayList$.$1dkeuw$t4<arrayList$.$1dkeuw$t0)){
var $t6=arrayList$.$1dkeuw$t7(arrayList$.$1dkeuw$t0);
arrayList$.$1dkeuw$t2.copyTo($t6,0,0,arrayList$.$1dkeuw$t4);
arrayList$.$1dkeuw$t2=$t6;
}
arrayList$.getFromFirst=function($t8){return (($uw=$t8,$uw.notSmallerThan((0))&&$uw.smallerThan(arrayList$.$1dkeuw$t4))?arrayList$.$1dkeuw$t2.$_get($t8):null);
};
arrayList$.iterator=function(){return function(){function $ta($$targs$$){
var $ta$=new $ta.$$;$ta$.outer$=arrayList$;
$ta$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList/*ORALE!Element inv pero Element var*/},$ta$);
$ta$.$1dkeuw$tb_=(0);
$ta$.$prop$get$1dkeuw$tb.get=function(){return $1dkeuw$tb};
return $ta$;
};$ta.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:ArrayList,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}}],d:['ceylon.collection','ArrayList']};};
function $init$$ta(){
if($ta.$$===undefined){
m$1.initTypeProto($ta,'ceylon.collection::ArrayList.anonymous#0',m$1.Basic,m$1.Iterator);
(function($ta$){
m$1.atr$($ta$,'$1dkeuw$tb',function(){return this.$1dkeuw$tb_;},function($ux){return this.$1dkeuw$tb_=$ux;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$ta,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};});
$ta$.next=function(){
var $ta$=this;
if(($ta$.$1dkeuw$tb<arrayList$.$1dkeuw$t4)){
var $td;
if(m$1.nn$(($td=arrayList$.$1dkeuw$t2.$_get(($uy=$ta$.$1dkeuw$tb,$ta$.$1dkeuw$tb=$uy.successor,$uy))))){
return $td;
}
else{
var $tf;
m$1.asrt$((m$1.is$(($tf=null),arrayList$.$$targs$$.Element$ArrayList)),"Assertion failed: "+"\n\tviolated is Element null\n\tat ArrayList.ceylon (203:27-203:43)",'203:20-203:44','ArrayList.ceylon');
return $tf;
}
var $uy;
}
else{
return m$1.finished();
}
};$ta$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Finished},'Element$ArrayList']},ps:[],$cont:$ta,pa:3,d:['ceylon.collection','ArrayList','$m','next']};};
$ta$.toString=function(){return this.string.valueOf();};
})($ta.$$.prototype);
}
return $ta;
}
arrayList$.$init$$ta=$init$$ta;$init$$ta();return $ta();}();
};
arrayList$.measure=function($th,$ti){return arrayList$.span(($v0=measureToSpan($th,$ti),$v0.$_get(0)),$v0.$_get(1));
};
arrayList$.deleteMeasure=function($tk,$tl){return arrayList$.deleteSpan(($v1=measureToSpan($tk,$tl),$v1.$_get(0)),$v1.$_get(1));
};
arrayList$.spanFrom=function($tn){return ($v2=(($tn>=arrayList$.$1dkeuw$t4)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($v2)?$v2:arrayList$.span($tn,(arrayList$.$1dkeuw$t4-(1))));
var $v2;
};
arrayList$.spanTo=function($tp){return ($v3=(($tp<(0))?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($v3)?$v3:arrayList$.span(0,$tp));
var $v3;
};
m$1.atr$(arrayList$,'first',function(){
return ((arrayList$.$1dkeuw$t4>(0))?arrayList$.$1dkeuw$t2.$_get(0):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','first']};});
m$1.atr$(arrayList$,'lastIndex',function(){
return ((arrayList$.$1dkeuw$t4>=(1))?(arrayList$.$1dkeuw$t4-(1)):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
arrayList$.equals=function($tr){return arrayList$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(arrayList$,$tr);
};
m$1.atr$(arrayList$,'hash',function(){
return m$1.attrGetter(arrayList$.getT$all()['ceylon.language::List'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','hash']};});
arrayList$.$_push=function($ts){return arrayList$.add($ts);
};
arrayList$.$_pop=function(){return arrayList$.deleteLast();
};
m$1.atr$(arrayList$,'top',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
arrayList$.offer=function($tt){return arrayList$.add($tt);
};
arrayList$.accept=function(){return arrayList$.deleteFirst();
};
m$1.atr$(arrayList$,'back',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
m$1.atr$(arrayList$,'front',function(){
return arrayList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
arrayList$.find=function($tu){return arrayList$.$1dkeuw$t2.find($tu);
};
arrayList$.findLast=function($tv){return arrayList$.$1dkeuw$t2.findLast($tv);
};
arrayList$.occursAt=function($tw,$tx){return (($tw<arrayList$.$1dkeuw$t4)?arrayList$.$1dkeuw$t2.occursAt($tw,$tx):false);
};
arrayList$.firstOccurrence=function($ty,$tz,$u0){if($tz===undefined){$tz=arrayList$.firstOccurrence$defs$from($ty,$tz,$u0);}
if($u0===undefined){$u0=arrayList$.firstOccurrence$defs$length($ty,$tz,$u0);}
return function(){var $u1;
if(m$1.nn$(($u1=($v4=$ty,$v5=$tz,$v6=(smallest(($tz+$u0),arrayList$.size)-$tz),($v7=arrayList$.$1dkeuw$t2,m$1.jsc$3($v7,$v7.firstOccurrence))($v4,$v5,$v6)))))return $u1;else return null}();
var $v4,$v5,$v6,$v7;
};
arrayList$.lastOccurrence=function($u6,$u7,$u8){if($u7===undefined){$u7=arrayList$.lastOccurrence$defs$from($u6,$u7,$u8);}
if($u8===undefined){$u8=arrayList$.lastOccurrence$defs$length($u6,$u7,$u8);}
return function(){var $u9;
if(m$1.nn$(($u9=($v8=$u6,$v9=largest($u7,(arrayList$.$1dkeuw$t2.size-arrayList$.size)),$va=$u8,($vb=arrayList$.$1dkeuw$t2,m$1.jsc$3($vb,$vb.lastOccurrence))($v8,$v9,$va)))))return $u9;else return null}();
var $v8,$v9,$va,$vb;
};
arrayList$.occurs=function($ue,$uf,$ug){if($uf===undefined){$uf=arrayList$.occurs$defs$from($ue,$uf,$ug);}
if($ug===undefined){$ug=arrayList$.occurs$defs$length($ue,$uf,$ug);}
return ($vc=$ue,$vd=$uf,$ve=(smallest(($uf+$ug),arrayList$.size)-$uf),($vf=arrayList$.$1dkeuw$t2,m$1.jsc$3($vf,$vf.occurs))($vc,$vd,$ve));
var $vc,$vd,$ve,$vf;
};
arrayList$.occurrences=function($ul,$um,$un){if($um===undefined){$um=arrayList$.occurrences$defs$from($ul,$um,$un);}
if($un===undefined){$un=arrayList$.occurrences$defs$length($ul,$um,$un);}
return ($vg=$ul,$vh=$um,$vi=(smallest(($um+$un),arrayList$.size)-$um),($vj=arrayList$.$1dkeuw$t2,m$1.jsc$3($vj,$vj.occurrences))($vg,$vh,$vi));
var $vg,$vh,$vi,$vj;
};
return arrayList$;
};
ArrayList$c_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'arrayList',mt:'prm',$t:{t:ArrayList,a:{Element$ArrayList:'Element$ArrayList'}},an:function(){return[m$1.doc("The `ArrayList` to copy.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:copy:$at:growthFactor$o4kg6')];}}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:copy')];},d:['ceylon.collection','ArrayList','$cn','copy']};};
ArrayList.ArrayList$c_copy=ArrayList$c_copy;
ex$.ArrayList$c_copy=ArrayList$c_copy;
function ArrayList$c_ofSize$$a($vk,$vl,$vm,$$targs$$,arrayList$){
if($vm===undefined){$vm=(1.5);}
arrayList$.$1dkeuw$t0_=($vn=(($vk<(0))?(0):null),m$1.nn$($vn)?$vn:$vk);
m$1.atr$(arrayList$,'$1dkeuw$t0',function(){return this.$1dkeuw$t0_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};});
var $vn;
arrayList$.$1dkeuw$t1_=$vm;
m$1.atr$(arrayList$,'$1dkeuw$t1',function(){return this.$1dkeuw$t1_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};});
arrayList$.$1dkeuw$t2_=m$1.$_Array$c_ofSize($vk,$vl,{Element$Array:m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])});
m$1.atr$(arrayList$,'$1dkeuw$t2',function(){return this.$1dkeuw$t2_;},function($vo){return this.$1dkeuw$t2_=$vo;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc("The underlying array.")];},d:['ceylon.collection','ArrayList','$at','array$i32poi']};});
arrayList$.$1dkeuw$t4_=$vk;
m$1.atr$(arrayList$,'$1dkeuw$t4',function(){return this.$1dkeuw$t4_;},function($vp){return this.$1dkeuw$t4_=$vp;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:length$u7by4j')];},d:['ceylon.collection','ArrayList','$at','length$u7by4j']};});
return arrayList$;
};
function ArrayList$c_ofSize($vk,$vl,$vm,$$targs$$,arrayList$){
$init$ArrayList();
if(arrayList$===undefined)arrayList$=new ArrayList.$$;
if($vm===undefined){$vm=(1.5);}
ArrayList$$c($$targs$$,arrayList$);
ArrayList$c_ofSize$$a($vk,$vl,$vm,$$targs$$,arrayList$);
m$1.asrt$(((arrayList$.$1dkeuw$t0>=(0))),"Assertion failed: "+"initial capacity cannot be negative\n\tviolated initialCapacity >= 0\n\tat ArrayList.ceylon (87:11-87:32)",'86:4-87:33','ArrayList.ceylon');
m$1.asrt$(((arrayList$.$1dkeuw$t0<=m$1.runtime().maxArraySize)),"Assertion failed: "+"initial capacity too large\n\tviolated initialCapacity <= runtime.maxArraySize\n\tat ArrayList.ceylon (90:11-90:51)",'89:4-90:52','ArrayList.ceylon');
m$1.asrt$((arrayList$.$1dkeuw$t1.notSmallerThan((1.0))),"Assertion failed: "+"growth factor must be at least 1.0\n\tviolated growthFactor >= 1.0\n\tat ArrayList.ceylon (93:11-93:31)",'92:4-93:32','ArrayList.ceylon');
m$1.atr$(arrayList$,'size',function(){
return arrayList$.$1dkeuw$t4;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
if((arrayList$.$1dkeuw$t4<arrayList$.$1dkeuw$t0)){
var $t6=arrayList$.$1dkeuw$t7(arrayList$.$1dkeuw$t0);
arrayList$.$1dkeuw$t2.copyTo($t6,0,0,arrayList$.$1dkeuw$t4);
arrayList$.$1dkeuw$t2=$t6;
}
arrayList$.getFromFirst=function($t8){return (($vq=$t8,$vq.notSmallerThan((0))&&$vq.smallerThan(arrayList$.$1dkeuw$t4))?arrayList$.$1dkeuw$t2.$_get($t8):null);
};
arrayList$.iterator=function(){return function(){function $ta($$targs$$){
var $ta$=new $ta.$$;$ta$.outer$=arrayList$;
$ta$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList/*ORALE!Element inv pero Element var*/},$ta$);
$ta$.$1dkeuw$tb_=(0);
$ta$.$prop$get$1dkeuw$tb.get=function(){return $1dkeuw$tb};
return $ta$;
};$ta.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:ArrayList,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}}],d:['ceylon.collection','ArrayList']};};
function $init$$ta(){
if($ta.$$===undefined){
m$1.initTypeProto($ta,'ceylon.collection::ArrayList.anonymous#0',m$1.Basic,m$1.Iterator);
(function($ta$){
m$1.atr$($ta$,'$1dkeuw$tb',function(){return this.$1dkeuw$tb_;},function($vr){return this.$1dkeuw$tb_=$vr;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$ta,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};});
$ta$.next=function(){
var $ta$=this;
if(($ta$.$1dkeuw$tb<arrayList$.$1dkeuw$t4)){
var $td;
if(m$1.nn$(($td=arrayList$.$1dkeuw$t2.$_get(($vs=$ta$.$1dkeuw$tb,$ta$.$1dkeuw$tb=$vs.successor,$vs))))){
return $td;
}
else{
var $tf;
m$1.asrt$((m$1.is$(($tf=null),arrayList$.$$targs$$.Element$ArrayList)),"Assertion failed: "+"\n\tviolated is Element null\n\tat ArrayList.ceylon (203:27-203:43)",'203:20-203:44','ArrayList.ceylon');
return $tf;
}
var $vs;
}
else{
return m$1.finished();
}
};$ta$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Finished},'Element$ArrayList']},ps:[],$cont:$ta,pa:3,d:['ceylon.collection','ArrayList','$m','next']};};
$ta$.toString=function(){return this.string.valueOf();};
})($ta.$$.prototype);
}
return $ta;
}
arrayList$.$init$$ta=$init$$ta;$init$$ta();return $ta();}();
};
arrayList$.measure=function($th,$ti){return arrayList$.span(($vu=measureToSpan($th,$ti),$vu.$_get(0)),$vu.$_get(1));
};
arrayList$.deleteMeasure=function($tk,$tl){return arrayList$.deleteSpan(($vv=measureToSpan($tk,$tl),$vv.$_get(0)),$vv.$_get(1));
};
arrayList$.spanFrom=function($tn){return ($vw=(($tn>=arrayList$.$1dkeuw$t4)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($vw)?$vw:arrayList$.span($tn,(arrayList$.$1dkeuw$t4-(1))));
var $vw;
};
arrayList$.spanTo=function($tp){return ($vx=(($tp<(0))?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($vx)?$vx:arrayList$.span(0,$tp));
var $vx;
};
m$1.atr$(arrayList$,'first',function(){
return ((arrayList$.$1dkeuw$t4>(0))?arrayList$.$1dkeuw$t2.$_get(0):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','first']};});
m$1.atr$(arrayList$,'lastIndex',function(){
return ((arrayList$.$1dkeuw$t4>=(1))?(arrayList$.$1dkeuw$t4-(1)):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
arrayList$.equals=function($tr){return arrayList$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(arrayList$,$tr);
};
m$1.atr$(arrayList$,'hash',function(){
return m$1.attrGetter(arrayList$.getT$all()['ceylon.language::List'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','hash']};});
arrayList$.$_push=function($ts){return arrayList$.add($ts);
};
arrayList$.$_pop=function(){return arrayList$.deleteLast();
};
m$1.atr$(arrayList$,'top',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
arrayList$.offer=function($tt){return arrayList$.add($tt);
};
arrayList$.accept=function(){return arrayList$.deleteFirst();
};
m$1.atr$(arrayList$,'back',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
m$1.atr$(arrayList$,'front',function(){
return arrayList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
arrayList$.find=function($tu){return arrayList$.$1dkeuw$t2.find($tu);
};
arrayList$.findLast=function($tv){return arrayList$.$1dkeuw$t2.findLast($tv);
};
arrayList$.occursAt=function($tw,$tx){return (($tw<arrayList$.$1dkeuw$t4)?arrayList$.$1dkeuw$t2.occursAt($tw,$tx):false);
};
arrayList$.firstOccurrence=function($ty,$tz,$u0){if($tz===undefined){$tz=arrayList$.firstOccurrence$defs$from($ty,$tz,$u0);}
if($u0===undefined){$u0=arrayList$.firstOccurrence$defs$length($ty,$tz,$u0);}
return function(){var $u1;
if(m$1.nn$(($u1=($vy=$ty,$vz=$tz,$w0=(smallest(($tz+$u0),arrayList$.size)-$tz),($w1=arrayList$.$1dkeuw$t2,m$1.jsc$3($w1,$w1.firstOccurrence))($vy,$vz,$w0)))))return $u1;else return null}();
var $vy,$vz,$w0,$w1;
};
arrayList$.lastOccurrence=function($u6,$u7,$u8){if($u7===undefined){$u7=arrayList$.lastOccurrence$defs$from($u6,$u7,$u8);}
if($u8===undefined){$u8=arrayList$.lastOccurrence$defs$length($u6,$u7,$u8);}
return function(){var $u9;
if(m$1.nn$(($u9=($w2=$u6,$w3=largest($u7,(arrayList$.$1dkeuw$t2.size-arrayList$.size)),$w4=$u8,($w5=arrayList$.$1dkeuw$t2,m$1.jsc$3($w5,$w5.lastOccurrence))($w2,$w3,$w4)))))return $u9;else return null}();
var $w2,$w3,$w4,$w5;
};
arrayList$.occurs=function($ue,$uf,$ug){if($uf===undefined){$uf=arrayList$.occurs$defs$from($ue,$uf,$ug);}
if($ug===undefined){$ug=arrayList$.occurs$defs$length($ue,$uf,$ug);}
return ($w6=$ue,$w7=$uf,$w8=(smallest(($uf+$ug),arrayList$.size)-$uf),($w9=arrayList$.$1dkeuw$t2,m$1.jsc$3($w9,$w9.occurs))($w6,$w7,$w8));
var $w6,$w7,$w8,$w9;
};
arrayList$.occurrences=function($ul,$um,$un){if($um===undefined){$um=arrayList$.occurrences$defs$from($ul,$um,$un);}
if($un===undefined){$un=arrayList$.occurrences$defs$length($ul,$um,$un);}
return ($wa=$ul,$wb=$um,$wc=(smallest(($um+$un),arrayList$.size)-$um),($wd=arrayList$.$1dkeuw$t2,m$1.jsc$3($wd,$wd.occurrences))($wa,$wb,$wc));
var $wa,$wb,$wc,$wd;
};
return arrayList$;
};
ArrayList$c_ofSize.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:ofSize:$at:size$g4dtg8')];}},{nm:'element',mt:'prm',$t:'Element$ArrayList',an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:ofSize:$at:element$qjcx79')];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:ofSize:$at:growthFactor$6i6pjp')];}}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:ofSize')];},d:['ceylon.collection','ArrayList','$cn','ofSize']};};
ArrayList.ArrayList$c_ofSize=ArrayList$c_ofSize;
ex$.ArrayList$c_ofSize=ArrayList$c_ofSize;
ArrayList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("The initial size of the backing array.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:$def:$at:growthFactor$6olvvh')];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$ArrayList'}},an:function(){return[m$1.doc("The initial elements of the list.")];}}],tp:{Element$ArrayList:{}},sts:[{t:MutableList,a:{Element$MutableList:'Element$ArrayList'}},{t:m$1.SearchableList,a:{Element$SearchableList:'Element$ArrayList'}},{t:Stack,a:{Element$Stack:'Element$ArrayList'}},{t:Queue,a:{Element$Queue:'Element$ArrayList'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','ArrayList']};};
ex$.ArrayList=ArrayList;
function $init$ArrayList(){
if(ArrayList.$$===undefined){
m$1.initTypeProto(ArrayList,'ceylon.collection::ArrayList',m$1.Basic,m$1.SearchableList,$init$MutableList(),$init$Stack(),$init$Queue());
(function(arrayList$){
m$1.atr$(arrayList$,'$1dkeuw$t0',function(){return this.$1dkeuw$t0_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};});
m$1.atr$(arrayList$,'$1dkeuw$t1',function(){return this.$1dkeuw$t1_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};});
m$1.atr$(arrayList$,'$1dkeuw$t2',function(){return this.$1dkeuw$t2_;},function($we){return this.$1dkeuw$t2_=$we;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc("The underlying array.")];},d:['ceylon.collection','ArrayList','$at','array$i32poi']};});
m$1.atr$(arrayList$,'$1dkeuw$t4',function(){return this.$1dkeuw$t4_;},function($wf){return this.$1dkeuw$t4_=$wf;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:length$u7by4j')];},d:['ceylon.collection','ArrayList','$at','length$u7by4j']};});
arrayList$.$1dkeuw$t7=function($wg){var arrayList$=this;
return m$1.$_Array$c_ofSize($wg,null,{Element$Array:m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])});
};
arrayList$.$1dkeuw$t7.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},ps:[{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,d:['ceylon.collection','ArrayList','$m','store$4f5qdi']};};
m$1.atr$(arrayList$,'size',function(){
var arrayList$=this;
return arrayList$.$1dkeuw$t4;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
arrayList$.$1dkeuw$wh=function($wi){
var arrayList$=this;
var $wj=(arrayList$.$1dkeuw$t4+$wi);
var $wk=m$1.runtime().maxArraySize;
if(($wj>$wk)){
throw m$1.wrapexc(m$1.OverflowException(),'110:12-110:37','ceylon/collection/ArrayList.ceylon');
}
if(($wj>arrayList$.$1dkeuw$t2.size)){
var $wl=m$1.Float($wj*arrayList$.$1dkeuw$t1).integer;
var $wm=($wn=((($wl<$wj)||($wl>$wk))?$wj:null),m$1.nn$($wn)?$wn:$wl);
var $wn;
var $wo=arrayList$.$1dkeuw$t7($wm);
arrayList$.$1dkeuw$t2.copyTo($wo);
arrayList$.$1dkeuw$t2=$wo;
}
};arrayList$.$1dkeuw$wh.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'increment',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,d:['ceylon.collection','ArrayList','$m','grow$67gtuw']};};
arrayList$.add=function($wp){
var arrayList$=this;
arrayList$.$1dkeuw$wh(1);
($wq=$wp,arrayList$.$1dkeuw$t2.set(($wr=arrayList$.$1dkeuw$t4,arrayList$.$1dkeuw$t4=$wr.successor,$wr),$wq), $wq);
var $wq,$wr;
};arrayList$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','add']};};
arrayList$.addAll=function($ws){
var arrayList$=this;
var $wt=$ws.sequence();
arrayList$.$1dkeuw$wh($wt.size);
var $wv;for(var $wu=$wt.iterator();($wv=$wu.next())!==m$1.finished();){
($ww=$wv,arrayList$.$1dkeuw$t2.set(($wx=arrayList$.$1dkeuw$t4,arrayList$.$1dkeuw$t4=$wx.successor,$wx),$ww), $ww);
var $ww,$wx;
}
};arrayList$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$ArrayList'}}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','addAll']};};
arrayList$.swap=function($wy,$wz){
var arrayList$=this;
m$1.asrt$((($x0=$wy,$x0.notSmallerThan((0))&&$x0.smallerThan(arrayList$.$1dkeuw$t4))&&($x1=$wz,$x1.notSmallerThan((0))&&$x1.smallerThan(arrayList$.$1dkeuw$t4))),"Assertion failed: "+"index may not be negative or greater than the\nlast index in the list\n\tviolated 0<=i<length, 0<=j<length\n\tat ArrayList.ceylon (145:15-145:40)",'143:8-145:41','ArrayList.ceylon');
arrayList$.$1dkeuw$t2.swap($wy,$wz);
};arrayList$.swap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:11,d:['ceylon.collection','ArrayList','$m','swap']};};
arrayList$.move=function($x2,$x3){
var arrayList$=this;
m$1.asrt$((($x4=$x2,$x4.notSmallerThan((0))&&$x4.smallerThan(arrayList$.$1dkeuw$t4))&&($x5=$x3,$x5.notSmallerThan((0))&&$x5.smallerThan(arrayList$.$1dkeuw$t4))),"Assertion failed: "+"index may not be negative or greater than the\nlast index in the list\n\tviolated 0<=i<length, 0<=j<length\n\tat ArrayList.ceylon (153:15-153:40)",'151:8-153:41','ArrayList.ceylon');
arrayList$.$1dkeuw$t2.move($x2,$x3);
};arrayList$.move.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:11,d:['ceylon.collection','ArrayList','$m','move']};};
arrayList$.clear=function(){
var arrayList$=this;
arrayList$.$1dkeuw$t4=(0);
arrayList$.$1dkeuw$t2=arrayList$.$1dkeuw$t7(arrayList$.$1dkeuw$t0);
};arrayList$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','clear']};};
m$1.atr$(arrayList$,'capacity',function(){
var arrayList$=this;
return arrayList$.$1dkeuw$t2.size;
},function($x6){
var arrayList$=this;
m$1.asrt$((($x6>=arrayList$.size)),"Assertion failed: "+"capacity must be at least as large as list size\n\tviolated capacity >= size\n\tat ArrayList.ceylon (168:15-168:32)",'167:8-168:33','ArrayList.ceylon');
m$1.asrt$((($x6<=m$1.runtime().maxArraySize)),"Assertion failed: "+"capacity too large\n\tviolated capacity <= runtime.maxArraySize\n\tat ArrayList.ceylon (170:15-170:48)",'169:8-170:49','ArrayList.ceylon');
var $x7=arrayList$.$1dkeuw$t7($x6);
arrayList$.$1dkeuw$t2.copyTo($x7,0,0,arrayList$.$1dkeuw$t4);
arrayList$.$1dkeuw$t2=$x7;
},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1025,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:capacity')];},d:['ceylon.collection','ArrayList','$at','capacity']};},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:capacity:$set')];},d:['ceylon.collection','ArrayList','$at','capacity','$set']};});
arrayList$.getFromFirst=function($t8){var arrayList$=this;
return (($x8=$t8,$x8.notSmallerThan((0))&&$x8.smallerThan(arrayList$.$1dkeuw$t4))?arrayList$.$1dkeuw$t2.$_get($t8):null);
};arrayList$.contains=function($x9){
var arrayList$=this;
var $xb;for(var $xa=m$1.measure((0),arrayList$.size,{Element$measure:{t:m$1.Integer}}).iterator();($xb=$xa.next())!==m$1.finished();){
var $xc;
if(m$1.nn$(($xc=arrayList$.$1dkeuw$t2.$_get($xb)))){
if(m$1.$eq$($xc,$x9)){
return true;
}
}
}
if(m$1.finished()===$xb){
return false;
}
};arrayList$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','contains']};};
arrayList$.iterator=function(){var arrayList$=this;
return function(){function $ta($$targs$$){
var $ta$=new $ta.$$;$ta$.outer$=arrayList$;
$ta$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList/*ORALE!Element inv pero Element var*/},$ta$);
$ta$.$1dkeuw$tb_=(0);
$ta$.$prop$get$1dkeuw$tb.get=function(){return $1dkeuw$tb};
return $ta$;
};$ta.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:ArrayList,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}}],d:['ceylon.collection','ArrayList']};};
function $init$$ta(){
if($ta.$$===undefined){
m$1.initTypeProto($ta,'ceylon.collection::ArrayList.anonymous#0',m$1.Basic,m$1.Iterator);
(function($ta$){
m$1.atr$($ta$,'$1dkeuw$tb',function(){return this.$1dkeuw$tb_;},function($xd){return this.$1dkeuw$tb_=$xd;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$ta,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};});
$ta$.next=function(){
var $ta$=this;
if(($ta$.$1dkeuw$tb<arrayList$.$1dkeuw$t4)){
var $td;
if(m$1.nn$(($td=arrayList$.$1dkeuw$t2.$_get(($xe=$ta$.$1dkeuw$tb,$ta$.$1dkeuw$tb=$xe.successor,$xe))))){
return $td;
}
else{
var $tf;
m$1.asrt$((m$1.is$(($tf=null),arrayList$.$$targs$$.Element$ArrayList)),"Assertion failed: "+"\n\tviolated is Element null\n\tat ArrayList.ceylon (203:27-203:43)",'203:20-203:44','ArrayList.ceylon');
return $tf;
}
var $xe;
}
else{
return m$1.finished();
}
};$ta$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Finished},'Element$ArrayList']},ps:[],$cont:$ta,pa:3,d:['ceylon.collection','ArrayList','$m','next']};};
$ta$.toString=function(){return this.string.valueOf();};
})($ta.$$.prototype);
}
return $ta;
}
arrayList$.$init$$ta=$init$$ta;$init$$ta();return $ta();}();
};arrayList$.insert=function($xg,$xh){
var arrayList$=this;
m$1.asrt$((($xi=$xg,$xi.notSmallerThan((0))&&$xi.notLargerThan(arrayList$.$1dkeuw$t4))),"Assertion failed: "+"index may not be negative or greater than the\nlength of the list\n\tviolated 0 <= index <= length\n\tat ArrayList.ceylon (217:15-217:36)",'215:8-217:37','ArrayList.ceylon');
arrayList$.$1dkeuw$wh(1);
if(($xg<arrayList$.$1dkeuw$t4)){
arrayList$.$1dkeuw$t2.copyTo(arrayList$.$1dkeuw$t2,$xg,($xg+(1)),(arrayList$.$1dkeuw$t4-$xg));
}
($xj=arrayList$.$1dkeuw$t4,arrayList$.$1dkeuw$t4=$xj.successor,$xj);
var $xj;
($xk=$xh,arrayList$.$1dkeuw$t2.set($xg,$xk), $xk);
var $xk;
};arrayList$.insert.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','insert']};};
arrayList$.insertAll=function($xl,$xm){
var arrayList$=this;
m$1.asrt$((($xn=$xl,$xn.notSmallerThan((0))&&$xn.notLargerThan(arrayList$.$1dkeuw$t4))),"Assertion failed: "+"index may not be negative or greater than the\nlength of the list\n\tviolated 0 <= index <= length\n\tat ArrayList.ceylon (231:15-231:36)",'229:8-231:37','ArrayList.ceylon');
var $xo=$xm.sequence();
var $xp=$xo.size;
if(($xp>(0))){
arrayList$.$1dkeuw$wh($xp);
if(($xl<arrayList$.$1dkeuw$t4)){
arrayList$.$1dkeuw$t2.copyTo(arrayList$.$1dkeuw$t2,$xl,($xl+$xp),(arrayList$.$1dkeuw$t4-$xl));
}
var $xq=$xl;
var $xs;for(var $xr=$xo.iterator();($xs=$xr.next())!==m$1.finished();){
($xt=$xs,arrayList$.$1dkeuw$t2.set(($xu=$xq,$xq=$xu.successor,$xu),$xt), $xt);
var $xt,$xu;
}
(arrayList$.$1dkeuw$t4=arrayList$.$1dkeuw$t4+$xp);
}
};arrayList$.insertAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$ArrayList'}}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','insertAll']};};
arrayList$.$_delete=function($xv){
var arrayList$=this;
if(($xw=$xv,$xw.notSmallerThan((0))&&$xw.smallerThan(arrayList$.$1dkeuw$t4))){
var $xx=arrayList$.$1dkeuw$t2.$_get($xv);
arrayList$.$1dkeuw$t2.copyTo(arrayList$.$1dkeuw$t2,($xv+(1)),$xv,((arrayList$.$1dkeuw$t4-$xv)-(1)));
($xy=arrayList$.$1dkeuw$t4,arrayList$.$1dkeuw$t4=$xy.predecessor,$xy);
var $xy;
($xz=null,arrayList$.$1dkeuw$t2.set(arrayList$.$1dkeuw$t4,$xz), $xz);
var $xz;
return $xx;
}
else{
return null;
}
};arrayList$.$_delete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','delete']};};
arrayList$.remove=function($y0){
var arrayList$=this;
var $y1=(0);
var $y2=(0);
while(($y1<arrayList$.$1dkeuw$t4)){
var $y3;
if(m$1.nn$(($y3=arrayList$.$1dkeuw$t2.$_get(($y4=$y1,$y1=$y4.successor,$y4))))){
if(!m$1.$eq$($y3,$y0)){
($y5=$y3,arrayList$.$1dkeuw$t2.set(($y6=$y2,$y2=$y6.successor,$y6),$y5), $y5);
var $y5,$y6;
}
}
else{
($y7=null,arrayList$.$1dkeuw$t2.set(($y8=$y2,$y2=$y8.successor,$y8),$y7), $y7);
var $y7,$y8;
}
var $y4;
}
arrayList$.$1dkeuw$t4=$y2;
while(($y2<$y1)){
($y9=null,arrayList$.$1dkeuw$t2.set(($ya=$y2,$y2=$ya.successor,$ya),$y9), $y9);
var $y9,$ya;
}
return ($y1-arrayList$.$1dkeuw$t4);
};arrayList$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','remove']};};
arrayList$.removeAll=function($yb){
var arrayList$=this;
var $yc=($yd=$yb,HashSet(undefined,undefined,$yd,{Element$HashSet:m$1.mit$([arrayList$.$$targs$$.Element$ArrayList,{t:m$1.$_Object}])}));
var $yd;
var $ye=(0);
var $yf=(0);
while(($ye<arrayList$.$1dkeuw$t4)){
var $yg;
if(m$1.nn$(($yg=arrayList$.$1dkeuw$t2.$_get(($yh=$ye,$ye=$yh.successor,$yh))))){
if(!m$1.$cnt$($yc,$yg)){
($yi=$yg,arrayList$.$1dkeuw$t2.set(($yj=$yf,$yf=$yj.successor,$yj),$yi), $yi);
var $yi,$yj;
}
}
else{
($yk=null,arrayList$.$1dkeuw$t2.set(($yl=$yf,$yf=$yl.successor,$yl),$yk), $yk);
var $yk,$yl;
}
var $yh;
}
arrayList$.$1dkeuw$t4=$yf;
while(($yf<$ye)){
($ym=null,arrayList$.$1dkeuw$t2.set(($yn=$yf,$yf=$yn.successor,$yn),$ym), $ym);
var $ym,$yn;
}
return ($ye-arrayList$.$1dkeuw$t4);
};arrayList$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeAll']};};
arrayList$.removeFirst=function($yo){
var arrayList$=this;
var $yp;
if(m$1.nn$(($yp=arrayList$.firstOccurrence($yo)))){
arrayList$.$_delete($yp);
return true;
}
else{
return false;
}
};arrayList$.removeFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeFirst']};};
arrayList$.removeLast=function($yq){
var arrayList$=this;
var $yr;
if(m$1.nn$(($yr=arrayList$.lastOccurrence($yq)))){
arrayList$.$_delete($yr);
return true;
}
else{
return false;
}
};arrayList$.removeLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeLast']};};
arrayList$.findAndRemoveFirst=function($ys){
var arrayList$=this;
var $yt;
if(m$1.nn$(($yt=arrayList$.firstIndexWhere($ys)))){
return arrayList$.$_delete($yt);
}
else{
return null;
}
};arrayList$.findAndRemoveFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','findAndRemoveFirst']};};
arrayList$.findAndRemoveLast=function($yu){
var arrayList$=this;
var $yv;
if(m$1.nn$(($yv=arrayList$.lastIndexWhere($yu)))){
return arrayList$.$_delete($yv);
}
else{
return null;
}
};arrayList$.findAndRemoveLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','findAndRemoveLast']};};
arrayList$.removeWhere=function($yw){
var arrayList$=this;
var $yx=(0);
var $yy=(0);
while(($yx<arrayList$.$1dkeuw$t4)){
var $yz;
if(m$1.nn$(($yz=arrayList$.$1dkeuw$t2.$_get(($z0=$yx,$yx=$z0.successor,$z0))))){
if(!$yw($yz)){
($z1=$yz,arrayList$.$1dkeuw$t2.set(($z2=$yy,$yy=$z2.successor,$z2),$z1), $z1);
var $z1,$z2;
}
}
else{
($z3=null,arrayList$.$1dkeuw$t2.set(($z4=$yy,$yy=$z4.successor,$z4),$z3), $z3);
var $z3,$z4;
}
var $z0;
}
arrayList$.$1dkeuw$t4=$yy;
while(($yy<$yx)){
($z5=null,arrayList$.$1dkeuw$t2.set(($z6=$yy,$yy=$z6.successor,$z6),$z5), $z5);
var $z5,$z6;
}
return ($yx-arrayList$.$1dkeuw$t4);
};arrayList$.removeWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeWhere']};};
arrayList$.prune=function(){
var arrayList$=this;
var $z7=(0);
var $z8=(0);
while(($z7<arrayList$.$1dkeuw$t4)){
var $z9;
if(m$1.nn$(($z9=arrayList$.$1dkeuw$t2.$_get(($za=$z7,$z7=$za.successor,$za))))){
($zb=$z9,arrayList$.$1dkeuw$t2.set(($zc=$z8,$z8=$zc.successor,$zc),$zb), $zb);
var $zb,$zc;
}
var $za;
}
var $zd=($z7-$z8);
arrayList$.$1dkeuw$t4=$z8;
while(($z8<$z7)){
($ze=null,arrayList$.$1dkeuw$t2.set(($zf=$z8,$z8=$zf.successor,$zf),$ze), $ze);
var $ze,$zf;
}
return $zd;
};arrayList$.prune.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','prune']};};
arrayList$.$_replace=function($zg,$zh){
var arrayList$=this;
var $zi=(0);
var $zj=(0);
while(($zj<arrayList$.$1dkeuw$t4)){
var $zk;
if(m$1.nn$(($zk=arrayList$.$1dkeuw$t2.$_get($zj)))&&m$1.$eq$($zk,$zg)){
($zl=$zh,arrayList$.$1dkeuw$t2.set($zj,$zl), $zl);
var $zl;
($zm=$zi,$zi=$zm.successor,$zm);
var $zm;
}
($zn=$zj,$zj=$zn.successor,$zn);
var $zn;
}
return $zi;
};arrayList$.$_replace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replace']};};
arrayList$.replaceFirst=function($zo,$zp){
var arrayList$=this;
var $zq;
if(m$1.nn$(($zq=arrayList$.firstOccurrence($zo)))){
($zr=$zp,arrayList$.$1dkeuw$t2.set($zq,$zr), $zr);
var $zr;
return true;
}
else{
return false;
}
};arrayList$.replaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replaceFirst']};};
arrayList$.replaceLast=function($zs,$zt){
var arrayList$=this;
var $zu;
if(m$1.nn$(($zu=arrayList$.lastOccurrence($zs)))){
($zv=$zt,arrayList$.$1dkeuw$t2.set($zu,$zv), $zv);
var $zv;
return true;
}
else{
return false;
}
};arrayList$.replaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replaceLast']};};
arrayList$.findAndReplaceFirst=function($zw,$zx){
var arrayList$=this;
var $zy;
if(m$1.nn$(($zy=arrayList$.firstIndexWhere($zw)))){
var $zz=arrayList$.getFromFirst($zy);
($100=$zx,arrayList$.$1dkeuw$t2.set($zy,$100), $100);
var $100;
return $zz;
}
else{
return null;
}
};arrayList$.findAndReplaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','findAndReplaceFirst']};};
arrayList$.findAndReplaceLast=function($101,$102){
var arrayList$=this;
var $103;
if(m$1.nn$(($103=arrayList$.lastIndexWhere($101)))){
var $104=arrayList$.getFromFirst($103);
($105=$102,arrayList$.$1dkeuw$t2.set($103,$105), $105);
var $105;
return $104;
}
else{
return null;
}
};arrayList$.findAndReplaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','findAndReplaceLast']};};
arrayList$.replaceWhere=function($106,$107){
var arrayList$=this;
var $108=(0);
var $109=(0);
while(($109<arrayList$.$1dkeuw$t4)){
var $10a;
if(m$1.nn$(($10a=arrayList$.$1dkeuw$t2.$_get($109)))&&$106($10a)){
($10b=$107,arrayList$.$1dkeuw$t2.set($109,$10b), $10b);
var $10b;
($10c=$108,$108=$10c.successor,$10c);
var $10c;
}
($10d=$109,$109=$10d.successor,$10d);
var $10d;
}
return $108;
};arrayList$.replaceWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replaceWhere']};};
arrayList$.infill=function($10e){
var arrayList$=this;
var $10f=(0);
while(($10f<arrayList$.$1dkeuw$t4)){
if(!m$1.nn$(arrayList$.$1dkeuw$t2.$_get($10f))){
($10g=$10e,arrayList$.$1dkeuw$t2.set($10f,$10g), $10g);
var $10g;
}
($10h=$10f,$10f=$10h.successor,$10h);
var $10h;
}
};arrayList$.infill.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','infill']};};
arrayList$.set=function($10i,$10j){
var arrayList$=this;
m$1.asrt$((($10k=$10i,$10k.notSmallerThan((0))&&$10k.smallerThan(arrayList$.$1dkeuw$t4))),"Assertion failed: "+"index may not be negative or greater than the\nlast index in the list\n\tviolated 0<=index<length\n\tat ArrayList.ceylon (494:15-494:31)",'492:8-494:32','ArrayList.ceylon');
($10l=$10j,arrayList$.$1dkeuw$t2.set($10i,$10l), $10l);
var $10l;
};arrayList$.set.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','set']};};
arrayList$.span=function($10m,$10n){
var arrayList$=this;
var $10o=spanToMeasure($10m,$10n,arrayList$.$1dkeuw$t4),$10p=$10o.$_get(0),$10q=$10o.$_get(1),$10r=$10o.$_get(2);
var $10s=($10t=$10q,$10u=arrayList$.$1dkeuw$t1,$10v=arrayList$.skip($10p).take($10q),ArrayList($10t,$10u,$10v,{Element$ArrayList:arrayList$.$$targs$$.Element$ArrayList}));
var $10t,$10u,$10v;
return ($10w=($10r?$10s.reversed:null),m$1.nn$($10w)?$10w:$10s);
var $10w;
};arrayList$.span.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$ArrayList'}},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','span']};};
arrayList$.deleteSpan=function($10x,$10y){
var arrayList$=this;
var $10z=spanToMeasure($10x,$10y,arrayList$.$1dkeuw$t4),$110=$10z.$_get(0),$111=$10z.$_get(1),$112=$10z.$_get(2);
if((($110<arrayList$.$1dkeuw$t4)&&($111>(0)))){
var $113=($110+$111);
arrayList$.$1dkeuw$t2.copyTo(arrayList$.$1dkeuw$t2,$113,$110,(arrayList$.$1dkeuw$t4-$113));
var $114=(arrayList$.$1dkeuw$t4-$111);
while(($114<arrayList$.$1dkeuw$t4)){
($115=null,arrayList$.$1dkeuw$t2.set(($116=$114,$114=$116.successor,$116),$115), $115);
var $115,$116;
}
(arrayList$.$1dkeuw$t4=arrayList$.$1dkeuw$t4-$111);
}
};arrayList$.deleteSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','deleteSpan']};};
arrayList$.measure=function($th,$ti){var arrayList$=this;
return arrayList$.span(($117=measureToSpan($th,$ti),$117.$_get(0)),$117.$_get(1));
};arrayList$.deleteMeasure=function($tk,$tl){var arrayList$=this;
return arrayList$.deleteSpan(($118=measureToSpan($tk,$tl),$118.$_get(0)),$118.$_get(1));
};arrayList$.truncate=function($119){
var arrayList$=this;
m$1.asrt$((($119>=(0))),"Assertion failed: "+"\n\tviolated size >= 0\n\tat ArrayList.ceylon (534:15-534:25)",'534:8-534:26','ArrayList.ceylon');
if(($119<arrayList$.$1dkeuw$t4)){
var $11a=$119;
while(($11a<arrayList$.$1dkeuw$t4)){
($11b=null,arrayList$.$1dkeuw$t2.set(($11c=$11a,$11a=$11c.successor,$11c),$11b), $11b);
var $11b,$11c;
}
arrayList$.$1dkeuw$t4=$119;
}
};arrayList$.truncate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','truncate']};};
arrayList$.spanFrom=function($tn){var arrayList$=this;
return ($11d=(($tn>=arrayList$.$1dkeuw$t4)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($11d)?$11d:arrayList$.span($tn,(arrayList$.$1dkeuw$t4-(1))));
var $11d;
};arrayList$.spanTo=function($tp){var arrayList$=this;
return ($11e=(($tp<(0))?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($11e)?$11e:arrayList$.span(0,$tp));
var $11e;
};m$1.atr$(arrayList$,'first',function(){
var arrayList$=this;
return ((arrayList$.$1dkeuw$t4>(0))?arrayList$.$1dkeuw$t2.$_get(0):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','first']};});
m$1.atr$(arrayList$,'lastIndex',function(){
var arrayList$=this;
return ((arrayList$.$1dkeuw$t4>=(1))?(arrayList$.$1dkeuw$t4-(1)):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
arrayList$.equals=function($tr){var arrayList$=this;
return arrayList$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(arrayList$,$tr);
};m$1.atr$(arrayList$,'hash',function(){
var arrayList$=this;
return m$1.attrGetter(arrayList$.getT$all()['ceylon.language::List'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','hash']};});
arrayList$.$_push=function($ts){var arrayList$=this;
return arrayList$.add($ts);
};arrayList$.$_pop=function(){var arrayList$=this;
return arrayList$.deleteLast();
};m$1.atr$(arrayList$,'top',function(){
var arrayList$=this;
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
arrayList$.offer=function($tt){var arrayList$=this;
return arrayList$.add($tt);
};arrayList$.accept=function(){var arrayList$=this;
return arrayList$.deleteFirst();
};m$1.atr$(arrayList$,'back',function(){
var arrayList$=this;
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
m$1.atr$(arrayList$,'front',function(){
var arrayList$=this;
return arrayList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
arrayList$.clone=function(){var arrayList$=this;
return ArrayList$c_copy(arrayList$,undefined,{Element$ArrayList:arrayList$.$$targs$$.Element$ArrayList});
};
arrayList$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ArrayList,a:{Element$ArrayList:'Element$ArrayList'}},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','clone']};};
arrayList$.find=function($tu){var arrayList$=this;
return arrayList$.$1dkeuw$t2.find($tu);
};arrayList$.findLast=function($tv){var arrayList$=this;
return arrayList$.$1dkeuw$t2.findLast($tv);
};arrayList$.sortInPlace=function($11f){var arrayList$=this;
return arrayList$.$1dkeuw$t2.sortInPlace(m$1.jsc$2((function($11g,$11h){return function(){var $11i,$11j;
if(m$1.nn$(($11i=$11g))&&m$1.nn$(($11j=$11h)))return $11f($11i,$11j);else return m$1.nn$($11g)&&!m$1.nn$($11h)?m$1.smaller():(m$1.nn$($11h)&&!m$1.nn$($11g)?m$1.larger():m$1.equal())}();
}),[{nm:'x',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}},{nm:'y',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]),m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}));
};
arrayList$.sortInPlace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'comparing',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]},{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'y',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$m:sortInPlace')];},d:['ceylon.collection','ArrayList','$m','sortInPlace']};};
arrayList$.each=function($11k){
var arrayList$=this;
var $11l;
if(m$1.is$(($11l=null),arrayList$.$$targs$$.Element$ArrayList)){
var $11m=(function(){var $11n=$11l;arrayList$.$1dkeuw$t2.take(arrayList$.$1dkeuw$t4).each(m$1.jsc$2((function($11o){
$11k(($11p=$11o,m$1.nn$($11p)?$11p:$11n));
var $11p;
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}));
}());if($11m!==undefined){return $11m;}
}
else{
arrayList$.$1dkeuw$t2.take(arrayList$.$1dkeuw$t4).each(m$1.jsc$2((function($11q){
var $11r;
m$1.asrt$((m$1.nn$(($11r=$11q))),"Assertion failed: "+"\n\tviolated exists e\n\tat ArrayList.ceylon (613:23-613:32)",'613:16-613:33','ArrayList.ceylon');
$11k($11r);
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}));
}
};arrayList$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:['Element$ArrayList']}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','each']};};
arrayList$.count=function($11s){
var arrayList$=this;
var $11t;
if(m$1.is$(($11t=null),arrayList$.$$targs$$.Element$ArrayList)){
var $11u=(function(){var $11v=$11t;return arrayList$.$1dkeuw$t2.take(arrayList$.$1dkeuw$t4).count(m$1.jsc$2((function($11w){return $11s(($11x=$11w,m$1.nn$($11x)?$11x:$11v));
var $11x;
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}));
}());if($11u!==undefined){return $11u;}
}
else{
return arrayList$.$1dkeuw$t2.take(arrayList$.$1dkeuw$t4).count(m$1.jsc$2((function($11y){
var $11z;
m$1.asrt$((m$1.nn$(($11z=$11y))),"Assertion failed: "+"\n\tviolated exists e\n\tat ArrayList.ceylon (628:23-628:32)",'628:16-628:33','ArrayList.ceylon');
return $11s($11z);
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}));
}
};arrayList$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:['Element$ArrayList']}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','count']};};
arrayList$.$_every=function($120){
var arrayList$=this;
var $121;
if(m$1.is$(($121=null),arrayList$.$$targs$$.Element$ArrayList)){
var $122=(function(){var $123=$121;return arrayList$.$1dkeuw$t2.take(arrayList$.$1dkeuw$t4).$_every(m$1.jsc$2((function($124){return $120(($125=$124,m$1.nn$($125)?$125:$123));
var $125;
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}));
}());if($122!==undefined){return $122;}
}
else{
return arrayList$.$1dkeuw$t2.take(arrayList$.$1dkeuw$t4).$_every(m$1.jsc$2((function($126){
var $127;
m$1.asrt$((m$1.nn$(($127=$126))),"Assertion failed: "+"\n\tviolated exists e\n\tat ArrayList.ceylon (643:23-643:32)",'643:16-643:33','ArrayList.ceylon');
return $120($127);
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}));
}
};arrayList$.$_every.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:['Element$ArrayList']}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','every']};};
arrayList$.any=function($128){
var arrayList$=this;
var $129;
if(m$1.is$(($129=null),arrayList$.$$targs$$.Element$ArrayList)){
var $12a=(function(){var $12b=$129;return arrayList$.$1dkeuw$t2.take(arrayList$.$1dkeuw$t4).any(m$1.jsc$2((function($12c){return $128(($12d=$12c,m$1.nn$($12d)?$12d:$12b));
var $12d;
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}));
}());if($12a!==undefined){return $12a;}
}
else{
return arrayList$.$1dkeuw$t2.take(arrayList$.$1dkeuw$t4).any(m$1.jsc$2((function($12e){
var $12f;
m$1.asrt$((m$1.nn$(($12f=$12e))),"Assertion failed: "+"\n\tviolated exists e\n\tat ArrayList.ceylon (658:23-658:32)",'658:16-658:33','ArrayList.ceylon');
return $128($12f);
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}));
}
};arrayList$.any.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:['Element$ArrayList']}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','any']};};
arrayList$.$_reduce=function($12g,$g1hi5x$){
var arrayList$=this;
var $12h;
if(m$1.is$(($12h=null),arrayList$.$$targs$$.Element$ArrayList)){
var $12i=(function(){var $12j=$12h;return arrayList$.$1dkeuw$t2.take(arrayList$.$1dkeuw$t4).$_reduce(m$1.jsc$2((function($12k,$12l){return $12g(($12m=$12k,m$1.nn$($12m)?$12m:$12j),($12n=$12l,m$1.nn$($12n)?$12n:$12j));
var $12m,$12n;
}),[{nm:'partial',mt:'prm',$t:{t:'u',l:[$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}},{nm:'element',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Return$Callable:$g1hi5x$.Result$reduce/*ORALE!Result inv pero Return var*/,Arguments$Callable:{t:m$1.Tuple,a:{Rest$Tuple:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Element$Tuple:m$1.mut$([$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]),First$Tuple:m$1.mut$([$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])}}}),{Result$reduce:$g1hi5x$.Result$reduce});
}());if($12i!==undefined){return $12i;}
}
else{
return arrayList$.$1dkeuw$t2.take(arrayList$.$1dkeuw$t4).$_reduce(m$1.jsc$2((function($12o,$12p){
var $12q,$12r;
m$1.asrt$((m$1.nn$(($12q=$12o))&&m$1.nn$(($12r=$12p))),"Assertion failed: "+"\n\tviolated exists partial, exists element\n\tat ArrayList.ceylon (677:23-677:54)",'677:16-677:55','ArrayList.ceylon');
return $12g($12q,$12r);
}),[{nm:'partial',mt:'prm',$t:{t:'u',l:[$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}},{nm:'element',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Return$Callable:$g1hi5x$.Result$reduce/*ORALE!Result inv pero Return var*/,Arguments$Callable:{t:m$1.Tuple,a:{Rest$Tuple:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Element$Tuple:m$1.mut$([$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]),First$Tuple:m$1.mut$([$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])}}}),{Result$reduce:$g1hi5x$.Result$reduce});
}
};arrayList$.$_reduce.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Result$reduce','Element$ArrayList',{t:m$1.Null}]},ps:[{nm:'accumulating',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:'Result$reduce',Arguments$Callable:{t:'T',l:[{t:'u',l:['Result$reduce','Element$ArrayList']},'Element$ArrayList']}}},$rt:'Result$reduce',ps:[{nm:'partial',mt:'prm',$t:{t:'u',l:['Result$reduce','Element$ArrayList']}},{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,tp:{Result$reduce:{}},pa:3,d:['ceylon.collection','ArrayList','$m','reduce']};};
arrayList$.occursAt=function($tw,$tx){var arrayList$=this;
return (($tw<arrayList$.$1dkeuw$t4)?arrayList$.$1dkeuw$t2.occursAt($tw,$tx):false);
};arrayList$.firstOccurrence=function($ty,$tz,$u0){var arrayList$=this;
if($tz===undefined){$tz=arrayList$.firstOccurrence$defs$from($ty,$tz,$u0);}
if($u0===undefined){$u0=arrayList$.firstOccurrence$defs$length($ty,$tz,$u0);}
return function(){var $u1;
if(m$1.nn$(($u1=($12s=$ty,$12t=$tz,$12u=(smallest(($tz+$u0),arrayList$.size)-$tz),($12v=arrayList$.$1dkeuw$t2,m$1.jsc$3($12v,$12v.firstOccurrence))($12s,$12t,$12u)))))return $u1;else return null}();
var $12s,$12t,$12u,$12v;
};arrayList$.lastOccurrence=function($u6,$u7,$u8){var arrayList$=this;
if($u7===undefined){$u7=arrayList$.lastOccurrence$defs$from($u6,$u7,$u8);}
if($u8===undefined){$u8=arrayList$.lastOccurrence$defs$length($u6,$u7,$u8);}
return function(){var $u9;
if(m$1.nn$(($u9=($12w=$u6,$12x=largest($u7,(arrayList$.$1dkeuw$t2.size-arrayList$.size)),$12y=$u8,($12z=arrayList$.$1dkeuw$t2,m$1.jsc$3($12z,$12z.lastOccurrence))($12w,$12x,$12y)))))return $u9;else return null}();
var $12w,$12x,$12y,$12z;
};arrayList$.occurs=function($ue,$uf,$ug){var arrayList$=this;
if($uf===undefined){$uf=arrayList$.occurs$defs$from($ue,$uf,$ug);}
if($ug===undefined){$ug=arrayList$.occurs$defs$length($ue,$uf,$ug);}
return ($130=$ue,$131=$uf,$132=(smallest(($uf+$ug),arrayList$.size)-$uf),($133=arrayList$.$1dkeuw$t2,m$1.jsc$3($133,$133.occurs))($130,$131,$132));
var $130,$131,$132,$133;
};arrayList$.occurrences=function($ul,$um,$un){var arrayList$=this;
if($um===undefined){$um=arrayList$.occurrences$defs$from($ul,$um,$un);}
if($un===undefined){$un=arrayList$.occurrences$defs$length($ul,$um,$un);}
return ($134=$ul,$135=$um,$136=(smallest(($um+$un),arrayList$.size)-$um),($137=arrayList$.$1dkeuw$t2,m$1.jsc$3($137,$137.occurrences))($134,$135,$136));
var $134,$135,$136,$137;
};arrayList$.copyTo$defs$sourcePosition=function($138,$139,$13a,$13b){return 0;};
arrayList$.copyTo$defs$destinationPosition=function($138,$139,$13a,$13b){return 0;};
arrayList$.copyTo$defs$length=function($138,$139,$13a,$13b){var arrayList$=this;
return smallest((arrayList$.size-$139),($138.size-$13a));};
arrayList$.copyTo=function($138,$139,$13a,$13b){
var arrayList$=this;
if($139===undefined){$139=(0);}
if($13a===undefined){$13a=(0);}
if($13b===undefined){$13b=smallest((arrayList$.size-$139),($138.size-$13a));}
m$1.asrt$((($13c=$139,$13c.notSmallerThan((0))&&$13c.notLargerThan((arrayList$.size-$13b)))),"Assertion failed: "+"illegal starting position in source list\n\tviolated 0<=sourcePosition<=size-length\n\tat ArrayList.ceylon (762:15-762:46)",'761:8-762:47','ArrayList.ceylon');
m$1.asrt$((($13d=$13a,$13d.notSmallerThan((0))&&$13d.notLargerThan(($138.size-$13b)))),"Assertion failed: "+"illegal starting position in destination list\n\tviolated 0<=destinationPosition<=destination.size-length\n\tat ArrayList.ceylon (764:15-764:63)",'763:8-764:64','ArrayList.ceylon');
($13e=$13b,$13f=$139,$13g=$13a,$13h=function($13i){if(m$1.is$($13i,{t:m$1.$_Array,a:{Element$Array:m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])}}))return $13i;else if(m$1.is$($13i,{t:ArrayList,a:{Element$ArrayList:arrayList$.$$targs$$.Element$ArrayList}}))return $13i.$1dkeuw$t2;else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')}($138),($13j=arrayList$.$1dkeuw$t2,m$1.jsc$3($13j,$13j.copyTo))($13h,$13f,$13g,$13e));
var $13e,$13f,$13g,$13h,$13j;
};arrayList$.copyTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'destination',mt:'prm',$t:{t:'u',l:[{t:ArrayList,a:{Element$ArrayList:'Element$ArrayList'}},{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}}]}},{nm:'sourcePosition',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'destinationPosition',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'length',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$m:copyTo'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.3.2','$'),m$1.AssertionError),"if the arguments do not identify meaningful ranges \nwithin the two lists:\n\n- if the given [[sourcePosition]] or \n  [[destinationPosition]] is negative, \n- if `size < sourcePosition+length`, or \n- if `destination.size < destinationPosition+length`.")];},d:['ceylon.collection','ArrayList','$m','copyTo']};};
arrayList$.shrink=function(){
var arrayList$=this;
if((arrayList$.$1dkeuw$t2.size>arrayList$.$1dkeuw$t4)){
var $13k=arrayList$.$1dkeuw$t7(arrayList$.$1dkeuw$t4);
arrayList$.$1dkeuw$t2.copyTo($13k,0,0,arrayList$.$1dkeuw$t4);
arrayList$.$1dkeuw$t2=$13k;
}
};arrayList$.shrink.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$m:shrink')];},d:['ceylon.collection','ArrayList','$m','shrink']};};
arrayList$.toString=function(){return this.string.valueOf();};
})(ArrayList.$$.prototype);
}
return ArrayList;
}
ex$.$init$ArrayList=$init$ArrayList;$init$ArrayList();ArrayList.inst$$=function($13l){
var arrayList$=new ArrayList.$$;
m$1.set_type_args(arrayList$,{Element$ArrayList:$13l.$$targs$$.Type$Class.a.Element$ArrayList});
m$1.set_type_args(arrayList$,{Element$MutableList:arrayList$.$$targs$$.Element$ArrayList,Element$List:arrayList$.$$targs$$.Element$ArrayList,Element$Collection:arrayList$.$$targs$$.Element$ArrayList,Absent$Iterable:{t:m$1.Null},Element$Iterable:arrayList$.$$targs$$.Element$ArrayList,Element$Category:{t:m$1.$_Object},Item$Correspondence:arrayList$.$$targs$$.Element$ArrayList,Key$Correspondence:{t:m$1.Integer},Element$Ranged:arrayList$.$$targs$$.Element$ArrayList,Subrange$Ranged:{t:m$1.List,a:{Element$List:arrayList$.$$targs$$.Element$ArrayList/*ORALE!Element inv pero Element var*/}},Index$Ranged:{t:m$1.Integer},Element$ListMutator:arrayList$.$$targs$$.Element$ArrayList,Element$IndexedCorrespondenceMutator:arrayList$.$$targs$$.Element$ArrayList,Item$CorrespondenceMutator:arrayList$.$$targs$$.Element$ArrayList,Element$SearchableList:arrayList$.$$targs$$.Element$ArrayList,Element$Stack:arrayList$.$$targs$$.Element$ArrayList,Element$Queue:arrayList$.$$targs$$.Element$ArrayList});
return arrayList$;
};
ArrayList.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::ArrayList.initialCapacity')return o.$1dkeuw$t0_;
else if(n==='ceylon.collection::ArrayList.growthFactor')return o.$1dkeuw$t1_;
else if(n==='ceylon.collection::ArrayList.array')return o.$1dkeuw$t2_;
else if(n==='ceylon.collection::ArrayList.length')return o.$1dkeuw$t4_;
else throw new TypeError('unknown attribute');
};
ArrayList.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::ArrayList.initialCapacity')o.$1dkeuw$t0_=i;
else if(n==='ceylon.collection::ArrayList.growthFactor')o.$1dkeuw$t1_=i;
else if(n==='ceylon.collection::ArrayList.array')o.$1dkeuw$t2_=i;
else if(n==='ceylon.collection::ArrayList.length')o.$1dkeuw$t4_=i;
else throw new TypeError('unknown attribute');
};
ArrayList.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$t0)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$t1)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$t2)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$t4))];
};
function Cell(element,rest,$$targs$$,cell$){
$init$Cell();
if(cell$===undefined)cell$=new Cell.$$;
m$1.set_type_args(cell$,$$targs$$);
cell$.element_=element;
cell$.rest_=rest;
return cell$;
}
Cell.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'element',mt:'prm',$t:'Element$Cell',pa:1025,an:function(){return[m$1.doc("The element belonging to this link.")];}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$Cell'}}]},pa:1025,an:function(){return[m$1.doc("The next link in the list.")];}}],tp:{Element$Cell:{}},pa:2048,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Cell')];},d:['ceylon.collection','Cell']};};
ex$.Cell=Cell;
function $init$Cell(){
if(Cell.$$===undefined){
m$1.initTypeProto(Cell,'ceylon.collection::Cell',m$1.Basic);
(function(cell$){
m$1.atr$(cell$,'element',function(){return this.element_;},function($13m){return this.element_=$13m;},function(){return{mod:$CCMM$,$t:'Element$Cell',$cont:Cell,pa:1025,an:function(){return[m$1.doc("The element belonging to this link.")];},d:['ceylon.collection','Cell','$at','element']};});
m$1.atr$(cell$,'rest',function(){return this.rest_;},function($13n){return this.rest_=$13n;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$Cell'}}]},$cont:Cell,pa:1025,an:function(){return[m$1.doc("The next link in the list.")];},d:['ceylon.collection','Cell','$at','rest']};});
cell$.clone=function(){var cell$=this;
return Cell(cell$.element,($13o=cell$.rest,m$1.jsc$3($13o,m$1.nn$($13o)?$13o.clone:null))(),{Element$Cell:cell$.$$targs$$.Element$Cell});
var $13o;
};
cell$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Cell,a:{Element$Cell:'Element$Cell'}},ps:[],$cont:Cell,pa:1,d:['ceylon.collection','Cell','$m','clone']};};
cell$.toString=function(){return this.string.valueOf();};
})(Cell.$$.prototype);
}
return Cell;
}
ex$.$init$Cell=$init$Cell;$init$Cell();Cell.inst$$=function($13p){
var cell$=new Cell.$$;
m$1.set_type_args(cell$,{Element$Cell:$13p.$$targs$$.Type$Class.a.Element$Cell});
return cell$;
};
Cell.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::Cell.element')return o.element_;
else if(n==='ceylon.collection::Cell.rest')return o.rest_;
else throw new TypeError('unknown attribute');
};
Cell.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::Cell.element')o.element_=i;
else if(n==='ceylon.collection::Cell.rest')o.rest_=i;
else throw new TypeError('unknown attribute');
};
Cell.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getElement)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getRest))];
};
function CellIterator($1dkeuw$13q,$$targs$$,cellIterator$){
$init$CellIterator();
if(cellIterator$===undefined)cellIterator$=new CellIterator.$$;
m$1.set_type_args(cellIterator$,$$targs$$);
cellIterator$.$1dkeuw$13q_=$1dkeuw$13q;
m$1.Iterator({Element$Iterator:$$targs$$.Element$CellIterator/*ORALE!Element inv pero Element var*/},cellIterator$);
return cellIterator$;
}
CellIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'iter',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$CellIterator'}}]},pa:1024}],tp:{Element$CellIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$CellIterator'}}],d:['ceylon.collection','CellIterator']};};
ex$.CellIterator=CellIterator;
function $init$CellIterator(){
if(CellIterator.$$===undefined){
m$1.initTypeProto(CellIterator,'ceylon.collection::CellIterator',m$1.Basic,m$1.Iterator);
(function(cellIterator$){
m$1.atr$(cellIterator$,'$1dkeuw$13q',function(){return this.$1dkeuw$13q_;},function($13r){return this.$1dkeuw$13q_=$13r;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$CellIterator'}}]},$cont:CellIterator,pa:1024,d:['ceylon.collection','CellIterator','$at','iter$5t8f0a']};});
cellIterator$.next=function(){
var cellIterator$=this;
var $13s;
if(m$1.nn$(($13s=cellIterator$.$1dkeuw$13q))){
cellIterator$.$1dkeuw$13q=$13s.rest;
return $13s.element;
}
return m$1.finished();
};cellIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$CellIterator',{t:m$1.Finished}]},ps:[],$cont:CellIterator,pa:3,d:['ceylon.collection','CellIterator','$m','next']};};
cellIterator$.toString=function(){return this.string.valueOf();};
})(CellIterator.$$.prototype);
}
return CellIterator;
}
ex$.$init$CellIterator=$init$CellIterator;$init$CellIterator();
function CachingCell(element,keyHash,rest,$$targs$$,cachingCell$){
$init$CachingCell();
if(cachingCell$===undefined)cachingCell$=new CachingCell.$$;
m$1.set_type_args(cachingCell$,$$targs$$);
cachingCell$.element_=element;
cachingCell$.keyHash_=keyHash;
cachingCell$.rest_=rest;
return cachingCell$;
}
CachingCell.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'element',mt:'prm',$t:'Element$CachingCell',pa:1025,an:function(){return[m$1.doc("The element belonging to this link.")];}},{nm:'keyHash',mt:'prm',$t:{t:m$1.Integer},pa:1025,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:CachingCell:$at:keyHash')];}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$CachingCell'}}]},pa:1025,an:function(){return[m$1.doc("The next link in the list.")];}}],tp:{Element$CachingCell:{}},pa:2048,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:CachingCell')];},d:['ceylon.collection','CachingCell']};};
ex$.CachingCell=CachingCell;
function $init$CachingCell(){
if(CachingCell.$$===undefined){
m$1.initTypeProto(CachingCell,'ceylon.collection::CachingCell',m$1.Basic);
(function(cachingCell$){
m$1.atr$(cachingCell$,'element',function(){return this.element_;},function($13t){return this.element_=$13t;},function(){return{mod:$CCMM$,$t:'Element$CachingCell',$cont:CachingCell,pa:1025,an:function(){return[m$1.doc("The element belonging to this link.")];},d:['ceylon.collection','CachingCell','$at','element']};});
m$1.atr$(cachingCell$,'keyHash',function(){return this.keyHash_;},function($13u){return this.keyHash_=$13u;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:CachingCell,pa:1025,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:CachingCell:$at:keyHash')];},d:['ceylon.collection','CachingCell','$at','keyHash']};});
m$1.atr$(cachingCell$,'rest',function(){return this.rest_;},function($13v){return this.rest_=$13v;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$CachingCell'}}]},$cont:CachingCell,pa:1025,an:function(){return[m$1.doc("The next link in the list.")];},d:['ceylon.collection','CachingCell','$at','rest']};});
cachingCell$.clone=function(){var cachingCell$=this;
return CachingCell(cachingCell$.element,cachingCell$.keyHash,($13w=cachingCell$.rest,m$1.jsc$3($13w,m$1.nn$($13w)?$13w.clone:null))(),{Element$CachingCell:cachingCell$.$$targs$$.Element$CachingCell});
var $13w;
};
cachingCell$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CachingCell,a:{Element$CachingCell:'Element$CachingCell'}},ps:[],$cont:CachingCell,pa:1,d:['ceylon.collection','CachingCell','$m','clone']};};
cachingCell$.toString=function(){return this.string.valueOf();};
})(CachingCell.$$.prototype);
}
return CachingCell;
}
ex$.$init$CachingCell=$init$CachingCell;$init$CachingCell();CachingCell.inst$$=function($13x){
var cachingCell$=new CachingCell.$$;
m$1.set_type_args(cachingCell$,{Element$CachingCell:$13x.$$targs$$.Type$Class.a.Element$CachingCell});
return cachingCell$;
};
CachingCell.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::CachingCell.element')return o.element_;
else if(n==='ceylon.collection::CachingCell.keyHash')return o.keyHash_;
else if(n==='ceylon.collection::CachingCell.rest')return o.rest_;
else throw new TypeError('unknown attribute');
};
CachingCell.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::CachingCell.element')o.element_=i;
else if(n==='ceylon.collection::CachingCell.keyHash')o.keyHash_=i;
else if(n==='ceylon.collection::CachingCell.rest')o.rest_=i;
else throw new TypeError('unknown attribute');
};
CachingCell.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getElement)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getKeyHash)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getRest))];
};
function CachingCellIterator($1dkeuw$13y,$$targs$$,cachingCellIterator$){
$init$CachingCellIterator();
if(cachingCellIterator$===undefined)cachingCellIterator$=new CachingCellIterator.$$;
m$1.set_type_args(cachingCellIterator$,$$targs$$);
cachingCellIterator$.$1dkeuw$13y_=$1dkeuw$13y;
m$1.Iterator({Element$Iterator:$$targs$$.Element$CachingCellIterator/*ORALE!Element inv pero Element var*/},cachingCellIterator$);
return cachingCellIterator$;
}
CachingCellIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'iter',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$CachingCellIterator'}}]},pa:1024}],tp:{Element$CachingCellIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$CachingCellIterator'}}],d:['ceylon.collection','CachingCellIterator']};};
ex$.CachingCellIterator=CachingCellIterator;
function $init$CachingCellIterator(){
if(CachingCellIterator.$$===undefined){
m$1.initTypeProto(CachingCellIterator,'ceylon.collection::CachingCellIterator',m$1.Basic,m$1.Iterator);
(function(cachingCellIterator$){
m$1.atr$(cachingCellIterator$,'$1dkeuw$13y',function(){return this.$1dkeuw$13y_;},function($13z){return this.$1dkeuw$13y_=$13z;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$CachingCellIterator'}}]},$cont:CachingCellIterator,pa:1024,d:['ceylon.collection','CachingCellIterator','$at','iter$ndjelf']};});
cachingCellIterator$.next=function(){
var cachingCellIterator$=this;
var $140;
if(m$1.nn$(($140=cachingCellIterator$.$1dkeuw$13y))){
cachingCellIterator$.$1dkeuw$13y=$140.rest;
return $140.element;
}
return m$1.finished();
};cachingCellIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$CachingCellIterator',{t:m$1.Finished}]},ps:[],$cont:CachingCellIterator,pa:3,d:['ceylon.collection','CachingCellIterator','$m','next']};};
cachingCellIterator$.toString=function(){return this.string.valueOf();};
})(CachingCellIterator.$$.prototype);
}
return CachingCellIterator;
}
ex$.$init$CachingCellIterator=$init$CachingCellIterator;$init$CachingCellIterator();
function HashMap$$c($$targs$$,hashMap$){
m$1.set_type_args(hashMap$,$$targs$$);
MutableMap({Key$MutableMap:$$targs$$.Key$HashMap,Item$MutableMap:$$targs$$.Item$HashMap},hashMap$);
}
function HashMap(){return HashMap$c_$c$.apply(undefined,arguments);}
function HashMap$c_$c$$$a($141,$142,$143,$$targs$$,hashMap$){
if($141===undefined){$141=linked();}
if($142===undefined){$142=Hashtable();}
if($143===undefined){$143=m$1.empty();}
hashMap$.$1dkeuw$144_=null;
hashMap$.$1dkeuw$145_=null;
hashMap$.$1dkeuw$146_=$141;
m$1.atr$(hashMap$,'$1dkeuw$146',function(){return this.$1dkeuw$146_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:stability$b6pnod')];},d:['ceylon.collection','HashMap','$at','stability$b6pnod']};});
hashMap$.$1dkeuw$147_=$142;
m$1.atr$(hashMap$,'$1dkeuw$147',function(){return this.$1dkeuw$147_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:hashtable$uda49w')];},d:['ceylon.collection','HashMap','$at','hashtable$uda49w']};});
hashMap$.$1dkeuw$148_=$143;
m$1.atr$(hashMap$,'$1dkeuw$148',function(){return this.$1dkeuw$148_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}},$cont:HashMap,pa:3,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','HashMap','$at','entries$ujasno']};});
hashMap$.$1dkeuw$149_=(0);
m$1.atr$(hashMap$,'$1dkeuw$149',function(){return this.$1dkeuw$149_;},function($14a){return this.$1dkeuw$149_=$14a;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:1027,an:function(){return[m$1.doc("Number of elements in this map.")];},d:['ceylon.collection','HashMap','$at','length$g7vp02']};});
hashMap$.$1dkeuw$14b_=m$1.is$($143,{t:m$1.Collection,a:{Element$Collection:{t:m$1.Anything}}});
m$1.atr$(hashMap$,'$1dkeuw$14b',function(){return this.$1dkeuw$14b_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','accurateInitialCapacity$qwzvpy']};});
var $14c=($14d=(hashMap$.$1dkeuw$14b?$142.initialCapacityForSize($143.size):null),m$1.nn$($14d)?$14d:$142.initialCapacityForUnknownSize());
$prop$get$14c={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,d:['ceylon.collection','HashMap','$cn','$def','$at','initialCapacity$vvzb8c']};}};
$prop$get$14c.get=function(){return $14c};
var $14d;
hashMap$.$1dkeuw$14e_=cachingEntryStore($14c,{Item$cachingEntryStore:hashMap$.$$targs$$.Item$HashMap,Key$cachingEntryStore:hashMap$.$$targs$$.Key$HashMap});
m$1.atr$(hashMap$,'$1dkeuw$14e',function(){return this.$1dkeuw$14e_;},function($14f){return this.$1dkeuw$14e_=$14f;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]}}},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:store$9kaiqz')];},d:['ceylon.collection','HashMap','$at','store$9kaiqz']};});
return hashMap$;
};
function HashMap$c_$c$($141,$142,$143,$$targs$$,hashMap$){
$init$HashMap();
if(hashMap$===undefined)hashMap$=new HashMap.$$;
if($141===undefined){$141=linked();}
if($142===undefined){$142=Hashtable();}
if($143===undefined){$143=m$1.empty();}
HashMap$$c($$targs$$,hashMap$);
HashMap$c_$c$$$a($141,$142,$143,$$targs$$,hashMap$);
var $14h;for(var $14g=hashMap$.$1dkeuw$148.iterator();($14h=$14g.next())!==m$1.finished();){
if(hashMap$.$1dkeuw$14i(hashMap$.$1dkeuw$14e,$14h)){
($14j=hashMap$.$1dkeuw$149,hashMap$.$1dkeuw$149=$14j.successor,$14j);
var $14j;
}
}
if(!hashMap$.$1dkeuw$14b){
hashMap$.$1dkeuw$14k();
}
return hashMap$;
};
HashMap$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def:$at:stability$8yo5l5')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def:$at:entries$kcfg1y')];}}],$cont:HashMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def')];},d:['ceylon.collection','HashMap','$cn','$def']};};
HashMap.HashMap$c_$c$=HashMap$c_$c$;
ex$.HashMap$c_$c$=HashMap$c_$c$;
function HashMap$c_copy$$a($14l,$14m,$14n,$$targs$$,hashMap$){
if($14m===undefined){$14m=$14l.$1dkeuw$146;}
if($14n===undefined){$14n=Hashtable();}
hashMap$.$1dkeuw$144_=null;
hashMap$.$1dkeuw$145_=null;
hashMap$.$1dkeuw$146_=$14m;
m$1.atr$(hashMap$,'$1dkeuw$146',function(){return this.$1dkeuw$146_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:stability$b6pnod')];},d:['ceylon.collection','HashMap','$at','stability$b6pnod']};});
hashMap$.$1dkeuw$147_=$14n;
m$1.atr$(hashMap$,'$1dkeuw$147',function(){return this.$1dkeuw$147_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:hashtable$uda49w')];},d:['ceylon.collection','HashMap','$at','hashtable$uda49w']};});
hashMap$.$1dkeuw$14b_=true;
m$1.atr$(hashMap$,'$1dkeuw$14b',function(){return this.$1dkeuw$14b_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','accurateInitialCapacity$qwzvpy']};});
hashMap$.$1dkeuw$14e_=cachingEntryStore($14l.$1dkeuw$14e.size,{Item$cachingEntryStore:hashMap$.$$targs$$.Item$HashMap,Key$cachingEntryStore:hashMap$.$$targs$$.Key$HashMap});
m$1.atr$(hashMap$,'$1dkeuw$14e',function(){return this.$1dkeuw$14e_;},function($14o){return this.$1dkeuw$14e_=$14o;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]}}},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:store$9kaiqz')];},d:['ceylon.collection','HashMap','$at','store$9kaiqz']};});
if(m$1.$eq$($14m,unlinked())){
hashMap$.$1dkeuw$148_=m$1.empty();
hashMap$.$1dkeuw$149=$14l.$1dkeuw$149;
var $14p=(0);
$prop$get$14p={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:1024,d:['ceylon.collection','HashMap','$cn','copy','$at','index$3a26oa']};}};
$prop$get$14p.get=function(){return $14p};
while(($14p<$14l.$1dkeuw$14e.size)){
var $14q;
if(m$1.nn$(($14q=$14l.$1dkeuw$14e.$_get($14p)))){
($14r=$14q.clone(),hashMap$.$1dkeuw$14e.set($14p,$14r), $14r);
var $14r;
}
($14s=$14p,$14p=$14s.successor,$14s);
var $14s;
}
}
else{
hashMap$.$1dkeuw$149=(0);
hashMap$.$1dkeuw$148_=$14l;
}
return hashMap$;
};
function HashMap$c_copy($14l,$14m,$14n,$$targs$$,hashMap$){
$init$HashMap();
if(hashMap$===undefined)hashMap$=new HashMap.$$;
if($14m===undefined){$14m=$14l.$1dkeuw$146;}
if($14n===undefined){$14n=Hashtable();}
HashMap$$c($$targs$$,hashMap$);
HashMap$c_copy$$a($14l,$14m,$14n,$$targs$$,hashMap$);
var $14h;for(var $14t=hashMap$.$1dkeuw$148.iterator();($14h=$14t.next())!==m$1.finished();){
if(hashMap$.$1dkeuw$14i(hashMap$.$1dkeuw$14e,$14h)){
($14u=hashMap$.$1dkeuw$149,hashMap$.$1dkeuw$149=$14u.successor,$14u);
var $14u;
}
}
if(!hashMap$.$1dkeuw$14b){
hashMap$.$1dkeuw$14k();
}
return hashMap$;
};
HashMap$c_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'hashMap',mt:'prm',$t:{t:HashMap,a:{Item$HashMap:'Item$HashMap',Key$HashMap:'Key$HashMap'}},an:function(){return[m$1.doc("The `HashMap` to copy.")];}},{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:copy:$at:stability$gbelws')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}}],$cont:HashMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:copy')];},d:['ceylon.collection','HashMap','$cn','copy']};};
HashMap.HashMap$c_copy=HashMap$c_copy;
ex$.HashMap$c_copy=HashMap$c_copy;
HashMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def:$at:stability$8yo5l5')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def:$at:entries$kcfg1y')];}}],tp:{Key$HashMap:{sts:[{t:m$1.$_Object}]},Item$HashMap:{}},sts:[{t:MutableMap,a:{Key$MutableMap:'Key$HashMap',Item$MutableMap:'Item$HashMap'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.collection','HashMap']};};
ex$.HashMap=HashMap;
function $init$HashMap(){
if(HashMap.$$===undefined){
m$1.initTypeProto(HashMap,'ceylon.collection::HashMap',m$1.Basic,$init$MutableMap());
(function(hashMap$){
m$1.atr$(hashMap$,'$1dkeuw$146',function(){return this.$1dkeuw$146_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:stability$b6pnod')];},d:['ceylon.collection','HashMap','$at','stability$b6pnod']};});
m$1.atr$(hashMap$,'$1dkeuw$148',function(){return this.$1dkeuw$148_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}},$cont:HashMap,pa:3,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','HashMap','$at','entries$ujasno']};});
m$1.atr$(hashMap$,'$1dkeuw$147',function(){return this.$1dkeuw$147_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:hashtable$uda49w')];},d:['ceylon.collection','HashMap','$at','hashtable$uda49w']};});
m$1.atr$(hashMap$,'$1dkeuw$14b',function(){return this.$1dkeuw$14b_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','accurateInitialCapacity$qwzvpy']};});
m$1.atr$(hashMap$,'$1dkeuw$14e',function(){return this.$1dkeuw$14e_;},function($14v){return this.$1dkeuw$14e_=$14v;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]}}},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:store$9kaiqz')];},d:['ceylon.collection','HashMap','$at','store$9kaiqz']};});
m$1.atr$(hashMap$,'$1dkeuw$149',function(){return this.$1dkeuw$149_;},function($14w){return this.$1dkeuw$149_=$14w;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:1027,an:function(){return[m$1.doc("Number of elements in this map.")];},d:['ceylon.collection','HashMap','$at','length$g7vp02']};});
m$1.atr$(hashMap$,'$1dkeuw$144',function(){return this.$1dkeuw$144_;},function($14x){return this.$1dkeuw$144_=$14x;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:head$7e95fo')];},d:['ceylon.collection','HashMap','$at','head$7e95fo']};});
m$1.atr$(hashMap$,'$1dkeuw$145',function(){return this.$1dkeuw$145_;},function($14y){return this.$1dkeuw$145_=$14y;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:tip$66h29t')];},d:['ceylon.collection','HashMap','$at','tip$66h29t']};});
hashMap$.$1dkeuw$14z=function($150){var hashMap$=this;
return function(){var $151=$150.hash;return $151.xor($151.rightLogicalShift(16));
}();
};
hashMap$.$1dkeuw$14z.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','hashCode$39nm0x']};};
hashMap$.$1dkeuw$152=function($153,$154){var hashMap$=this;
return $153.and(($154.size-(1)));
};
hashMap$.$1dkeuw$152.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'keyHash',mt:'prm',$t:{t:m$1.Integer}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]}}}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','storeIndex$e9z3xh']};};
hashMap$.$1dkeuw$155=function($156,$157,$158){
var hashMap$=this;
if(m$1.$eq$(hashMap$.$1dkeuw$146,linked())){
var $159=LinkedCell($156,$157,$158,hashMap$.$1dkeuw$145,{Element$LinkedCell:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/,Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/}}});
var $15a;
if(m$1.nn$(($15a=hashMap$.$1dkeuw$145))){
($15a.next=$159);
}
hashMap$.$1dkeuw$145=$159;
if(!m$1.nn$(hashMap$.$1dkeuw$144)){
hashMap$.$1dkeuw$144=$159;
}
return $159;
}
else{
return CachingCell($156,$157,$158,{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/,Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/}}});
}
};hashMap$.$1dkeuw$155.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}},{nm:'keyHash',mt:'prm',$t:{t:m$1.Integer}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','createCell$a7w20a']};};
hashMap$.$1dkeuw$15b=function($15c){
var hashMap$=this;
if(m$1.$eq$(hashMap$.$1dkeuw$146,linked())){
var $15d;
m$1.asrt$((m$1.is$(($15d=$15c),{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/,Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/}}}})),"Assertion failed: "+"\n\tviolated is LinkedCell<Key->Item> cell\n\tat HashMap.ceylon (167:19-167:49)",'167:12-167:50','HashMap.ceylon');
var $15e;
if(m$1.nn$(($15e=$15d.previous))){
($15e.next=$15d.next);
}
else{
hashMap$.$1dkeuw$144=$15d.next;
}
var $15f;
if(m$1.nn$(($15f=$15d.next))){
($15f.previous=$15d.previous);
}
else{
hashMap$.$1dkeuw$145=$15d.previous;
}
}
};hashMap$.$1dkeuw$15b.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'cell',mt:'prm',$t:{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','deleteCell$bxnuyp']};};
hashMap$.$1dkeuw$14i=function($15g,$15h){
var hashMap$=this;
var $15i=hashMap$.$1dkeuw$14z($15h.key);
var $15j=hashMap$.$1dkeuw$152($15i,$15g);
var $15k=$15g.$_get($15j);
var $15l=$15k;
var $15m;
while(m$1.nn$(($15m=$15l))){
if((($15m.keyHash==$15i)&&m$1.$eq$($15m.element.key,$15h.key))){
($15m.element=$15h);
return false;
}
$15l=$15m.rest;
}
($15n=hashMap$.$1dkeuw$155($15h,$15i,$15k),$15g.set($15j,$15n), $15n);
var $15n;
return true;
};hashMap$.$1dkeuw$14i.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]}}}},{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','addToStore$vlhtif']};};
hashMap$.$1dkeuw$14k=function(){
var hashMap$=this;
if(hashMap$.$1dkeuw$147.rehash(hashMap$.$1dkeuw$149,hashMap$.$1dkeuw$14e.size)){
var $15o=cachingEntryStore(hashMap$.$1dkeuw$147.capacity(hashMap$.$1dkeuw$149),{Item$cachingEntryStore:hashMap$.$$targs$$.Item$HashMap,Key$cachingEntryStore:hashMap$.$$targs$$.Key$HashMap});
var $15p=(0);
while(($15p<hashMap$.$1dkeuw$14e.size)){
var $15q=hashMap$.$1dkeuw$14e.$_get($15p);
var $15r;
while(m$1.nn$(($15r=$15q))){
$15q=$15r.rest;
var $15s=hashMap$.$1dkeuw$152($15r.keyHash,$15o);
var $15t=$15o.$_get($15s);
($15r.rest=$15t);
($15u=$15r,$15o.set($15s,$15u), $15u);
var $15u;
}
($15v=$15p,$15p=$15v.successor,$15v);
var $15v;
}
hashMap$.$1dkeuw$14e=$15o;
}
};hashMap$.$1dkeuw$14k.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashMap,d:['ceylon.collection','HashMap','$m','checkRehash$glqfdp']};};
hashMap$.put=function($15w,$15x){
var hashMap$=this;
var $15y=hashMap$.$1dkeuw$14z($15w);
var $15z=hashMap$.$1dkeuw$152($15y,hashMap$.$1dkeuw$14e);
var $160=m$1.Entry($15w,$15x,{Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/,Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/});
var $161=hashMap$.$1dkeuw$14e.$_get($15z);
var $162=$161;
var $163;
while(m$1.nn$(($163=$162))){
if((($163.keyHash==$15y)&&m$1.$eq$($163.element.key,$15w))){
var $164=$163.element.item;
($163.element=$160);
return $164;
}
$162=$163.rest;
}
($165=hashMap$.$1dkeuw$155($160,$15y,$161),hashMap$.$1dkeuw$14e.set($15z,$165), $165);
var $165;
($166=hashMap$.$1dkeuw$149,hashMap$.$1dkeuw$149=$166.successor,$166);
var $166;
hashMap$.$1dkeuw$14k();
return null;
};hashMap$.put.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$HashMap']},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'},{nm:'item',mt:'prm',$t:'Item$HashMap'}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','put']};};
hashMap$.replaceEntry=function($167,$168,$169){
var hashMap$=this;
var $16a=hashMap$.$1dkeuw$14z($167);
var $16b=hashMap$.$1dkeuw$152($16a,hashMap$.$1dkeuw$14e);
var $16c=hashMap$.$1dkeuw$14e.$_get($16b);
var $16d;
while(m$1.nn$(($16d=$16c))){
if((($16d.keyHash==$16a)&&m$1.$eq$($16d.element.key,$167))){
var $16e;
if(m$1.nn$(($16e=$16d.element.item))&&m$1.$eq$($16e,$168)){
($16d.element=m$1.Entry($167,$169,{Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/,Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/}));
return true;
}
else{
return false;
}
}
$16c=$16d.rest;
}
return false;
};hashMap$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$HashMap',{t:m$1.$_Object}]}},{nm:'newItem',mt:'prm',$t:'Item$HashMap'}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','replaceEntry']};};
hashMap$.putAll=function($16f){
var hashMap$=this;
var $16h;for(var $16g=$16f.iterator();($16h=$16g.next())!==m$1.finished();){
if(hashMap$.$1dkeuw$14i(hashMap$.$1dkeuw$14e,$16h)){
($16i=hashMap$.$1dkeuw$149,hashMap$.$1dkeuw$149=$16i.successor,$16i);
var $16i;
}
}
hashMap$.$1dkeuw$14k();
};hashMap$.putAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','putAll']};};
hashMap$.remove=function($16j){
var hashMap$=this;
var $16k=hashMap$.$1dkeuw$14z($16j);
var $16l=hashMap$.$1dkeuw$152($16k,hashMap$.$1dkeuw$14e);
var $16m;
if(m$1.nn$(($16m=hashMap$.$1dkeuw$14e.$_get($16l)))&&($16m.keyHash==$16k)&&m$1.$eq$($16m.element.key,$16j)){
($16n=$16m.rest,hashMap$.$1dkeuw$14e.set($16l,$16n), $16n);
var $16n;
hashMap$.$1dkeuw$15b($16m);
($16o=hashMap$.$1dkeuw$149,hashMap$.$1dkeuw$149=$16o.predecessor,$16o);
var $16o;
return $16m.element.item;
}
var $16p=hashMap$.$1dkeuw$14e.$_get($16l);
var $16q;
while(m$1.nn$(($16q=$16p))){
var $16r=$16q.rest;
var $16s;
if(m$1.nn$(($16s=$16r))&&m$1.$eq$($16s.element.key,$16j)){
($16q.rest=$16s.rest);
hashMap$.$1dkeuw$15b($16s);
($16t=hashMap$.$1dkeuw$149,hashMap$.$1dkeuw$149=$16t.predecessor,$16t);
var $16t;
return $16s.element.item;
}
else{
$16p=$16r;
}
}
return null;
};hashMap$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$HashMap']},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','remove']};};
hashMap$.removeEntry=function($16u,$16v){
var hashMap$=this;
var $16w=hashMap$.$1dkeuw$14z($16u);
var $16x=hashMap$.$1dkeuw$152($16w,hashMap$.$1dkeuw$14e);
var $16y;
while(m$1.nn$(($16y=hashMap$.$1dkeuw$14e.$_get($16x)))&&($16y.keyHash==$16w)&&m$1.$eq$($16y.element.key,$16u)){
var $16z;
if(m$1.nn$(($16z=$16y.element.item))&&m$1.$eq$($16z,$16v)){
($170=$16y.rest,hashMap$.$1dkeuw$14e.set($16x,$170), $170);
var $170;
($171=hashMap$.$1dkeuw$149,hashMap$.$1dkeuw$149=$171.predecessor,$171);
var $171;
return true;
}
else{
return false;
}
}
var $172=hashMap$.$1dkeuw$14e.$_get($16x);
var $173;
while(m$1.nn$(($173=$172))){
var $174=$173.rest;
var $175;
if(m$1.nn$(($175=$174))&&m$1.$eq$($175.element.key,$16u)){
var $176;
if(m$1.nn$(($176=$175.element.item))&&m$1.$eq$($176,$16v)){
($173.rest=$175.rest);
hashMap$.$1dkeuw$15b($175);
($177=hashMap$.$1dkeuw$149,hashMap$.$1dkeuw$149=$177.predecessor,$177);
var $177;
return true;
}
else{
return false;
}
}
else{
$172=$174;
}
}
return false;
};hashMap$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$HashMap',{t:m$1.$_Object}]}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','removeEntry']};};
hashMap$.clear=function(){
var hashMap$=this;
var $178=(0);
while(($178<hashMap$.$1dkeuw$14e.size)){
($179=null,hashMap$.$1dkeuw$14e.set(($17a=$178,$178=$17a.successor,$17a),$179), $179);
var $179,$17a;
}
hashMap$.$1dkeuw$149=(0);
hashMap$.$1dkeuw$144=null;
hashMap$.$1dkeuw$145=null;
};hashMap$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','clear']};};
m$1.atr$(hashMap$,'size',function(){
var hashMap$=this;
return hashMap$.$1dkeuw$149;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','size']};});
m$1.atr$(hashMap$,'empty',function(){
var hashMap$=this;
return (hashMap$.$1dkeuw$149==(0));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','empty']};});
hashMap$.$_get=function($17b){
var hashMap$=this;
if(hashMap$.empty){
return null;
}
var $17c=hashMap$.$1dkeuw$14z($17b);
var $17d=hashMap$.$1dkeuw$152($17c,hashMap$.$1dkeuw$14e);
var $17e=hashMap$.$1dkeuw$14e.$_get($17d);
var $17f;
while(m$1.nn$(($17f=$17e))){
if((($17f.keyHash==$17c)&&m$1.$eq$($17f.element.key,$17b))){
return $17f.element.item;
}
$17e=$17f.rest;
}
return null;
};hashMap$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$HashMap']},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','get']};};
hashMap$.getOrDefault=function($17g,$17h,$6rx8ao$){
var hashMap$=this;
if(hashMap$.empty){
return $17h;
}
var $17i=hashMap$.$1dkeuw$14z($17g);
var $17j=hashMap$.$1dkeuw$152($17i,hashMap$.$1dkeuw$14e);
var $17k=hashMap$.$1dkeuw$14e.$_get($17j);
var $17l;
while(m$1.nn$(($17l=$17k))){
if((($17l.keyHash==$17i)&&m$1.$eq$($17l.element.key,$17g))){
return $17l.element.item;
}
$17k=$17l.rest;
}
return $17h;
};hashMap$.getOrDefault.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Item$HashMap','Default$getOrDefault']},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}},{nm:'default',mt:'prm',$t:'Default$getOrDefault'}],$cont:HashMap,tp:{Default$getOrDefault:{}},pa:3,d:['ceylon.collection','HashMap','$m','getOrDefault']};};
m$1.atr$(hashMap$,'first',function(){
var hashMap$=this;
return (m$1.$eq$(hashMap$.$1dkeuw$146,linked())?($17n=hashMap$.$1dkeuw$144,m$1.nn$($17n)?$17n.element:null):($17o=hashMap$.$1dkeuw$14e.coalesced.first,m$1.nn$($17o)?$17o.element:null));
var $17n,$17o;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}]},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','first']};});
m$1.atr$(hashMap$,'last',function(){
var hashMap$=this;
if(m$1.$eq$(hashMap$.$1dkeuw$146,linked())){
return ($17p=hashMap$.$1dkeuw$145,m$1.nn$($17p)?$17p.element:null);
var $17p;
}
else{
var $17q=hashMap$.$1dkeuw$14e.reversed.coalesced.first;
var $17r;
while(m$1.nn$(($17r=($17s=$17q,m$1.nn$($17s)?$17s.rest:null)))){
$17q=$17r;
}
var $17s;
return ($17t=$17q,m$1.nn$($17t)?$17t.element:null);
var $17t;
}
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}]},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','last']};});hashMap$.iterator=function(){var hashMap$=this;
return ($17u=(m$1.$eq$(hashMap$.$1dkeuw$146,linked())?LinkedCellIterator(hashMap$.$1dkeuw$144,{Element$LinkedCellIterator:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/,Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/}}}):null),m$1.nn$($17u)?$17u:CachingStoreIterator(hashMap$.$1dkeuw$14e,{Element$CachingStoreIterator:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/,Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/}}}));
var $17u;
};hashMap$.count=function($17v){
var hashMap$=this;
var $17w=(0);
var $17x=(0);
while(($17w<hashMap$.$1dkeuw$14e.size)){
var $17y=hashMap$.$1dkeuw$14e.$_get($17w);
var $17z;
while(m$1.nn$(($17z=$17y))){
if($17v($17z.element)){
($180=$17x,$17x=$180.successor,$180);
var $180;
}
$17y=$17z.rest;
}
($181=$17w,$17w=$181.successor,$181);
var $181;
}
return $17x;
};hashMap$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}]}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','count']};};
hashMap$.each=function($182){
var hashMap$=this;
hashMap$.$1dkeuw$14e.each(m$1.jsc$2((function($183){
var $184=$183;
$prop$get$184={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]},$cont:hashMap$.each,pa:1027,d:['ceylon.collection','HashMap','$m','each','$at','iter$edjelw']};}};
$prop$get$184.get=function(){return $184};
var $185;
while(m$1.nn$(($185=$184))){
$182($185.element);
$184=$185.rest;
}
}),[{nm:'bucket',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap,Item$Entry:hashMap$.$$targs$$.Item$HashMap}}}}]}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/,Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/}}}}])])}));
};hashMap$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}]}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}]}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','each']};};
m$1.atr$(hashMap$,'hash',function(){
var hashMap$=this;
var $186=(0);
var $187=(0);
while(($186<hashMap$.$1dkeuw$14e.size)){
var $188=hashMap$.$1dkeuw$14e.$_get($186);
var $189;
while(m$1.nn$(($189=$188))){
($187=$187+$189.element.hash);
$188=$189.rest;
}
($18a=$186,$186=$18a.successor,$18a);
var $18a;
}
return $187;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','hash']};});hashMap$.equals=function($18b){
var hashMap$=this;
var $18c;
if(m$1.is$(($18c=$18b),{t:m$1.Map,a:{Key$Map:{t:m$1.$_Object},Item$Map:{t:m$1.Anything}}})&&(hashMap$.size==$18c.size)){
var $18d=(0);
while(($18d<hashMap$.$1dkeuw$14e.size)){
var $18e=hashMap$.$1dkeuw$14e.$_get($18d);
var $18f;
while(m$1.nn$(($18f=$18e))){
var $18g=$18c.$_get($18f.element.key);
var $18h;
if(m$1.nn$(($18h=$18f.element.item))){
var $18i;
if(m$1.nn$(($18i=$18g))){
if(!m$1.$eq$($18i,$18h)){
return false;
}
}
else{
return false;
}
}
else{
if(m$1.nn$($18g)){
return false;
}
}
$18e=$18f.rest;
}
($18j=$18d,$18d=$18j.successor,$18j);
var $18j;
}
return true;
}
return false;
};hashMap$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','equals']};};
hashMap$.clone=function(){var hashMap$=this;
return HashMap$c_copy(hashMap$,undefined,undefined,{Item$HashMap:hashMap$.$$targs$$.Item$HashMap,Key$HashMap:hashMap$.$$targs$$.Key$HashMap});
};
hashMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashMap,a:{Item$HashMap:'Item$HashMap',Key$HashMap:'Key$HashMap'}},ps:[],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','clone']};};
hashMap$.defines=function($18k){
var hashMap$=this;
if(hashMap$.empty){
return false;
}
else{
var $18l=hashMap$.$1dkeuw$14z($18k);
var $18m=hashMap$.$1dkeuw$152($18l,hashMap$.$1dkeuw$14e);
var $18n=hashMap$.$1dkeuw$14e.$_get($18m);
var $18o;
while(m$1.nn$(($18o=$18n))){
if((($18o.keyHash==$18l)&&m$1.$eq$($18o.element.key,$18k))){
return true;
}
$18n=$18o.rest;
}
return false;
}
};hashMap$.defines.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','defines']};};
hashMap$.contains=function($18p){
var hashMap$=this;
if(hashMap$.empty){
return false;
}
else{
var $18q;
if(m$1.is$(($18q=$18p),{t:m$1.Entry,a:{Key$Entry:{t:m$1.$_Object},Item$Entry:{t:m$1.Anything}}})){
var $18r=$18q.key;
var $18s=hashMap$.$1dkeuw$14z($18r);
var $18t=hashMap$.$1dkeuw$152($18s,hashMap$.$1dkeuw$14e);
var $18u=hashMap$.$1dkeuw$14e.$_get($18t);
var $18v;
while(m$1.nn$(($18v=$18u))){
if((($18v.keyHash==$18s)&&m$1.$eq$($18v.element.key,$18r))){
var $18w;
if(m$1.nn$(($18w=$18v.element.item))){
var $18x;
if(m$1.nn$(($18x=$18q.item))){
return m$1.$eq$($18w,$18x);
}
else{
return false;
}
}
else{
return !m$1.nn$($18q.item);
}
}
$18u=$18v.rest;
}
return false;
}
else{
return false;
}
}
};hashMap$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','contains']};};
hashMap$.toString=function(){return this.string.valueOf();};
})(HashMap.$$.prototype);
}
return HashMap;
}
ex$.$init$HashMap=$init$HashMap;$init$HashMap();HashMap.inst$$=function($18y){
var hashMap$=new HashMap.$$;
m$1.set_type_args(hashMap$,{Key$HashMap:$18y.$$targs$$.Type$Class.a.Key$HashMap,Item$HashMap:$18y.$$targs$$.Type$Class.a.Item$HashMap});
m$1.set_type_args(hashMap$,{Key$MutableMap:hashMap$.$$targs$$.Key$HashMap,Item$MutableMap:hashMap$.$$targs$$.Item$HashMap,Key$Map:hashMap$.$$targs$$.Key$HashMap,Item$Map:hashMap$.$$targs$$.Item$HashMap,Element$Collection:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/,Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/}},Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/,Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/}},Element$Category:{t:m$1.$_Object},Item$Correspondence:hashMap$.$$targs$$.Item$HashMap,Key$Correspondence:{t:m$1.$_Object},Key$MapMutator:hashMap$.$$targs$$.Key$HashMap,Item$MapMutator:hashMap$.$$targs$$.Item$HashMap,Key$KeyedCorrespondenceMutator:hashMap$.$$targs$$.Key$HashMap,Item$KeyedCorrespondenceMutator:hashMap$.$$targs$$.Item$HashMap,Item$CorrespondenceMutator:hashMap$.$$targs$$.Item$HashMap});
return hashMap$;
};
HashMap.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::HashMap.stability')return o.$1dkeuw$146_;
else if(n==='ceylon.collection::HashMap.hashtable')return o.$1dkeuw$147_;
else if(n==='ceylon.collection::HashMap.store')return o.$1dkeuw$14e_;
else if(n==='ceylon.collection::HashMap.length')return o.$1dkeuw$149_;
else if(n==='ceylon.collection::HashMap.head')return o.$1dkeuw$144_;
else if(n==='ceylon.collection::HashMap.tip')return o.$1dkeuw$145_;
else throw new TypeError('unknown attribute');
};
HashMap.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::HashMap.stability')o.$1dkeuw$146_=i;
else if(n==='ceylon.collection::HashMap.hashtable')o.$1dkeuw$147_=i;
else if(n==='ceylon.collection::HashMap.store')o.$1dkeuw$14e_=i;
else if(n==='ceylon.collection::HashMap.length')o.$1dkeuw$149_=i;
else if(n==='ceylon.collection::HashMap.head')o.$1dkeuw$144_=i;
else if(n==='ceylon.collection::HashMap.tip')o.$1dkeuw$145_=i;
else throw new TypeError('unknown attribute');
};
HashMap.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$146)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$147)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$14e)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$149)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$144)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$145))];
};
function HashSet$$c($$targs$$,hashSet$){
m$1.set_type_args(hashSet$,$$targs$$);
MutableSet({Element$MutableSet:$$targs$$.Element$HashSet},hashSet$);
}
function HashSet(){return HashSet$c_$c$.apply(undefined,arguments);}
function HashSet$c_$c$$$a($18z,$190,$191,$$targs$$,hashSet$){
if($18z===undefined){$18z=linked();}
if($190===undefined){$190=Hashtable();}
if($191===undefined){$191=m$1.empty();}
hashSet$.$1dkeuw$192_=null;
hashSet$.$1dkeuw$193_=null;
hashSet$.$1dkeuw$194_=$18z;
m$1.atr$(hashSet$,'$1dkeuw$194',function(){return this.$1dkeuw$194_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:stability$82jphv')];},d:['ceylon.collection','HashSet','$at','stability$82jphv']};});
hashSet$.$1dkeuw$195_=$190;
m$1.atr$(hashSet$,'$1dkeuw$195',function(){return this.$1dkeuw$195_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:hashtable$xhg2ge')];},d:['ceylon.collection','HashSet','$at','hashtable$xhg2ge']};});
hashSet$.$1dkeuw$196_=$191;
m$1.atr$(hashSet$,'$1dkeuw$196',function(){return this.$1dkeuw$196_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$HashSet'}},$cont:HashSet,pa:3,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','HashSet','$at','elements$ce2sq9']};});
hashSet$.$1dkeuw$197_=(0);
m$1.atr$(hashSet$,'$1dkeuw$197',function(){return this.$1dkeuw$197_;},function($198){return this.$1dkeuw$197_=$198;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:1027,an:function(){return[m$1.doc("Number of elements in this set.")];},d:['ceylon.collection','HashSet','$at','length$d3pqtk']};});
hashSet$.$1dkeuw$199_=m$1.is$($191,{t:m$1.Collection,a:{Element$Collection:{t:m$1.Anything}}});
m$1.atr$(hashSet$,'$1dkeuw$199',function(){return this.$1dkeuw$199_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','accurateInitialCapacity$nstxjg']};});
var $19a=($19b=(hashSet$.$1dkeuw$199?$190.initialCapacityForSize($191.size):null),m$1.nn$($19b)?$19b:$190.initialCapacityForUnknownSize());
$prop$get$19a={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,d:['ceylon.collection','HashSet','$cn','$def','$at','initialCapacity$l7lsqi']};}};
$prop$get$19a.get=function(){return $19a};
var $19b;
hashSet$.$1dkeuw$19c_=cachingElementStore($19a,{Element$cachingElementStore:hashSet$.$$targs$$.Element$HashSet});
m$1.atr$(hashSet$,'$1dkeuw$19c',function(){return this.$1dkeuw$19c_;},function($19d){return this.$1dkeuw$19c_=$19d;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}]}}},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:store$coggxh')];},d:['ceylon.collection','HashSet','$at','store$coggxh']};});
return hashSet$;
};
function HashSet$c_$c$($18z,$190,$191,$$targs$$,hashSet$){
$init$HashSet();
if(hashSet$===undefined)hashSet$=new HashSet.$$;
if($18z===undefined){$18z=linked();}
if($190===undefined){$190=Hashtable();}
if($191===undefined){$191=m$1.empty();}
HashSet$$c($$targs$$,hashSet$);
HashSet$c_$c$$$a($18z,$190,$191,$$targs$$,hashSet$);
var $19f;for(var $19e=hashSet$.$1dkeuw$196.iterator();($19f=$19e.next())!==m$1.finished();){
if(hashSet$.$1dkeuw$19g(hashSet$.$1dkeuw$19c,$19f)){
($19h=hashSet$.$1dkeuw$197,hashSet$.$1dkeuw$197=$19h.successor,$19h);
var $19h;
}
}
if(!hashSet$.$1dkeuw$199){
hashSet$.$1dkeuw$19i();
}
return hashSet$;
};
HashSet$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:$def:$at:stability$qw73lf')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$HashSet'}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:$def:$at:elements$mko0d1')];}}],$cont:HashSet,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:$def')];},d:['ceylon.collection','HashSet','$cn','$def']};};
HashSet.HashSet$c_$c$=HashSet$c_$c$;
ex$.HashSet$c_$c$=HashSet$c_$c$;
function HashSet$c_copy$$a($19j,$19k,$19l,$$targs$$,hashSet$){
if($19k===undefined){$19k=$19j.$1dkeuw$194;}
if($19l===undefined){$19l=Hashtable();}
hashSet$.$1dkeuw$192_=null;
hashSet$.$1dkeuw$193_=null;
hashSet$.$1dkeuw$194_=$19k;
m$1.atr$(hashSet$,'$1dkeuw$194',function(){return this.$1dkeuw$194_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:stability$82jphv')];},d:['ceylon.collection','HashSet','$at','stability$82jphv']};});
hashSet$.$1dkeuw$195_=$19l;
m$1.atr$(hashSet$,'$1dkeuw$195',function(){return this.$1dkeuw$195_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:hashtable$xhg2ge')];},d:['ceylon.collection','HashSet','$at','hashtable$xhg2ge']};});
hashSet$.$1dkeuw$199_=true;
m$1.atr$(hashSet$,'$1dkeuw$199',function(){return this.$1dkeuw$199_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','accurateInitialCapacity$nstxjg']};});
hashSet$.$1dkeuw$19c_=cachingElementStore($19j.$1dkeuw$19c.size,{Element$cachingElementStore:hashSet$.$$targs$$.Element$HashSet});
m$1.atr$(hashSet$,'$1dkeuw$19c',function(){return this.$1dkeuw$19c_;},function($19m){return this.$1dkeuw$19c_=$19m;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}]}}},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:store$coggxh')];},d:['ceylon.collection','HashSet','$at','store$coggxh']};});
if(m$1.$eq$($19k,unlinked())){
hashSet$.$1dkeuw$196_=m$1.empty();
hashSet$.$1dkeuw$197=$19j.$1dkeuw$197;
var $19n=(0);
$prop$get$19n={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:1024,d:['ceylon.collection','HashSet','$cn','copy','$at','index$fnnc8k']};}};
$prop$get$19n.get=function(){return $19n};
while(($19n<$19j.$1dkeuw$19c.size)){
var $19o;
if(m$1.nn$(($19o=$19j.$1dkeuw$19c.$_get($19n)))){
($19p=$19o.clone(),hashSet$.$1dkeuw$19c.set($19n,$19p), $19p);
var $19p;
}
($19q=$19n,$19n=$19q.successor,$19q);
var $19q;
}
}
else{
hashSet$.$1dkeuw$197=(0);
hashSet$.$1dkeuw$196_=$19j;
}
return hashSet$;
};
function HashSet$c_copy($19j,$19k,$19l,$$targs$$,hashSet$){
$init$HashSet();
if(hashSet$===undefined)hashSet$=new HashSet.$$;
if($19k===undefined){$19k=$19j.$1dkeuw$194;}
if($19l===undefined){$19l=Hashtable();}
HashSet$$c($$targs$$,hashSet$);
HashSet$c_copy$$a($19j,$19k,$19l,$$targs$$,hashSet$);
var $19f;for(var $19r=hashSet$.$1dkeuw$196.iterator();($19f=$19r.next())!==m$1.finished();){
if(hashSet$.$1dkeuw$19g(hashSet$.$1dkeuw$19c,$19f)){
($19s=hashSet$.$1dkeuw$197,hashSet$.$1dkeuw$197=$19s.successor,$19s);
var $19s;
}
}
if(!hashSet$.$1dkeuw$199){
hashSet$.$1dkeuw$19i();
}
return hashSet$;
};
HashSet$c_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'hashSet',mt:'prm',$t:{t:HashSet,a:{Element$HashSet:'Element$HashSet'}},an:function(){return[m$1.doc("The `HashSet` to copy.")];}},{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:copy:$at:stability$y8xjx2')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}}],$cont:HashSet,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:copy')];},d:['ceylon.collection','HashSet','$cn','copy']};};
HashSet.HashSet$c_copy=HashSet$c_copy;
ex$.HashSet$c_copy=HashSet$c_copy;
HashSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:$def:$at:stability$qw73lf')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$HashSet'}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:$def:$at:elements$mko0d1')];}}],tp:{Element$HashSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:MutableSet,a:{Element$MutableSet:'Element$HashSet'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud","Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','HashSet']};};
ex$.HashSet=HashSet;
function $init$HashSet(){
if(HashSet.$$===undefined){
m$1.initTypeProto(HashSet,'ceylon.collection::HashSet',m$1.Basic,$init$MutableSet());
(function(hashSet$){
m$1.atr$(hashSet$,'$1dkeuw$194',function(){return this.$1dkeuw$194_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:stability$82jphv')];},d:['ceylon.collection','HashSet','$at','stability$82jphv']};});
m$1.atr$(hashSet$,'$1dkeuw$195',function(){return this.$1dkeuw$195_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:hashtable$xhg2ge')];},d:['ceylon.collection','HashSet','$at','hashtable$xhg2ge']};});
m$1.atr$(hashSet$,'$1dkeuw$19c',function(){return this.$1dkeuw$19c_;},function($19t){return this.$1dkeuw$19c_=$19t;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}]}}},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:store$coggxh')];},d:['ceylon.collection','HashSet','$at','store$coggxh']};});
m$1.atr$(hashSet$,'$1dkeuw$196',function(){return this.$1dkeuw$196_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$HashSet'}},$cont:HashSet,pa:3,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','HashSet','$at','elements$ce2sq9']};});
m$1.atr$(hashSet$,'$1dkeuw$197',function(){return this.$1dkeuw$197_;},function($19u){return this.$1dkeuw$197_=$19u;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:1027,an:function(){return[m$1.doc("Number of elements in this set.")];},d:['ceylon.collection','HashSet','$at','length$d3pqtk']};});
m$1.atr$(hashSet$,'$1dkeuw$192',function(){return this.$1dkeuw$192_;},function($19v){return this.$1dkeuw$192_=$19v;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$HashSet'}}]},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:head$aif3m6')];},d:['ceylon.collection','HashSet','$at','head$aif3m6']};});
m$1.atr$(hashSet$,'$1dkeuw$193',function(){return this.$1dkeuw$193_;},function($19w){return this.$1dkeuw$193_=$19w;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$HashSet'}}]},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:tip$9an0gb')];},d:['ceylon.collection','HashSet','$at','tip$9an0gb']};});
m$1.atr$(hashSet$,'$1dkeuw$199',function(){return this.$1dkeuw$199_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','accurateInitialCapacity$nstxjg']};});
hashSet$.$1dkeuw$19x=function($19y){var hashSet$=this;
return function(){var $19z=$19y.hash;return $19z.xor($19z.rightLogicalShift(16));
}();
};
hashSet$.$1dkeuw$19x.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','hashCode$6dtk7f']};};
hashSet$.$1dkeuw$1a0=function($1a1,$1a2){var hashSet$=this;
return $1a1.and(($1a2.size-(1)));
};
hashSet$.$1dkeuw$1a0.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elemHash',mt:'prm',$t:{t:m$1.Integer}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}]}}}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','storeIndex$b5t5qz']};};
hashSet$.$1dkeuw$1a3=function($1a4,$1a5,$1a6){
var hashSet$=this;
if(m$1.$eq$(hashSet$.$1dkeuw$194,linked())){
var $1a7=LinkedCell($1a4,$1a5,$1a6,hashSet$.$1dkeuw$193,{Element$LinkedCell:hashSet$.$$targs$$.Element$HashSet});
var $1a8;
if(m$1.nn$(($1a8=hashSet$.$1dkeuw$193))){
($1a8.next=$1a7);
}
hashSet$.$1dkeuw$193=$1a7;
if(!m$1.nn$(hashSet$.$1dkeuw$192)){
hashSet$.$1dkeuw$192=$1a7;
}
return $1a7;
}
else{
return CachingCell($1a4,$1a5,$1a6,{Element$CachingCell:hashSet$.$$targs$$.Element$HashSet});
}
};hashSet$.$1dkeuw$1a3.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}},ps:[{nm:'elem',mt:'prm',$t:'Element$HashSet'},{nm:'elemHash',mt:'prm',$t:{t:m$1.Integer}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}]}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','createCell$73q3ts']};};
hashSet$.$1dkeuw$1a9=function($1aa){
var hashSet$=this;
if(m$1.$eq$(hashSet$.$1dkeuw$194,linked())){
var $1ab;
m$1.asrt$((m$1.is$(($1ab=$1aa),{t:LinkedCell,a:{Element$LinkedCell:hashSet$.$$targs$$.Element$HashSet}})),"Assertion failed: "+"\n\tviolated is LinkedCell<Element> cell\n\tat HashSet.ceylon (166:19-166:47)",'166:12-166:48','HashSet.ceylon');
var $1ac;
if(m$1.nn$(($1ac=$1ab.previous))){
($1ac.next=$1ab.next);
}
else{
hashSet$.$1dkeuw$192=$1ab.next;
}
var $1ad;
if(m$1.nn$(($1ad=$1ab.next))){
($1ad.previous=$1ab.previous);
}
else{
hashSet$.$1dkeuw$193=$1ab.previous;
}
}
};hashSet$.$1dkeuw$1a9.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'cell',mt:'prm',$t:{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','deleteCell$8thws7']};};
hashSet$.$1dkeuw$19g=function($1ae,$1af){
var hashSet$=this;
var $1ag=hashSet$.$1dkeuw$19x($1af);
var $1ah=hashSet$.$1dkeuw$1a0($1ag,$1ae);
var $1ai=$1ae.$_get($1ah);
var $1aj=$1ai;
var $1ak;
while(m$1.nn$(($1ak=$1aj))){
if((($1ak.keyHash==$1ag)&&m$1.$eq$($1ak.element,$1af))){
($1ak.element=$1af);
return false;
}
$1aj=$1ak.rest;
}
($1al=hashSet$.$1dkeuw$1a3($1af,$1ag,$1ai),$1ae.set($1ah,$1al), $1al);
var $1al;
return true;
};hashSet$.$1dkeuw$19g.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}]}}}},{nm:'element',mt:'prm',$t:'Element$HashSet'}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','addToStore$ypnrox']};};
hashSet$.$1dkeuw$19i=function(){
var hashSet$=this;
if(hashSet$.$1dkeuw$195.rehash(hashSet$.$1dkeuw$197,hashSet$.$1dkeuw$19c.size)){
var $1am=cachingElementStore(hashSet$.$1dkeuw$195.capacity(hashSet$.$1dkeuw$197),{Element$cachingElementStore:hashSet$.$$targs$$.Element$HashSet});
var $1an=(0);
while(($1an<hashSet$.$1dkeuw$19c.size)){
var $1ao=hashSet$.$1dkeuw$19c.$_get($1an);
var $1ap;
while(m$1.nn$(($1ap=$1ao))){
$1ao=$1ap.rest;
var $1aq=hashSet$.$1dkeuw$1a0($1ap.keyHash,$1am);
var $1ar=$1am.$_get($1aq);
($1ap.rest=$1ar);
($1as=$1ap,$1am.set($1aq,$1as), $1as);
var $1as;
}
($1at=$1an,$1an=$1at.successor,$1at);
var $1at;
}
hashSet$.$1dkeuw$19c=$1am;
}
};hashSet$.$1dkeuw$19i.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashSet,d:['ceylon.collection','HashSet','$m','checkRehash$dhkh77']};};
hashSet$.add=function($1au){
var hashSet$=this;
if(hashSet$.$1dkeuw$19g(hashSet$.$1dkeuw$19c,$1au)){
($1av=hashSet$.$1dkeuw$197,hashSet$.$1dkeuw$197=$1av.successor,$1av);
var $1av;
hashSet$.$1dkeuw$19i();
return true;
}
return false;
};hashSet$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$HashSet'}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','add']};};
hashSet$.addAll=function($1aw){
var hashSet$=this;
var $1ax=false;
var $1az;for(var $1ay=$1aw.iterator();($1az=$1ay.next())!==m$1.finished();){
if(hashSet$.$1dkeuw$19g(hashSet$.$1dkeuw$19c,$1az)){
($1b0=hashSet$.$1dkeuw$197,hashSet$.$1dkeuw$197=$1b0.successor,$1b0);
var $1b0;
$1ax=true;
}
}
if($1ax){
hashSet$.$1dkeuw$19i();
}
return $1ax;
};hashSet$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$HashSet'}}}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','addAll']};};
hashSet$.remove=function($1b1){
var hashSet$=this;
var $1b2=hashSet$.$1dkeuw$19x($1b1);
var $1b3=hashSet$.$1dkeuw$1a0($1b2,hashSet$.$1dkeuw$19c);
var $1b4;
if(m$1.nn$(($1b4=hashSet$.$1dkeuw$19c.$_get($1b3)))&&m$1.$eq$($1b4.element,$1b1)){
($1b5=$1b4.rest,hashSet$.$1dkeuw$19c.set($1b3,$1b5), $1b5);
var $1b5;
hashSet$.$1dkeuw$1a9($1b4);
($1b6=hashSet$.$1dkeuw$197,hashSet$.$1dkeuw$197=$1b6.predecessor,$1b6);
var $1b6;
return true;
}
var $1b7=hashSet$.$1dkeuw$19c.$_get($1b3);
var $1b8;
while(m$1.nn$(($1b8=$1b7))){
var $1b9=$1b8.rest;
var $1ba;
if(m$1.nn$(($1ba=$1b9))&&($1ba.keyHash==$1b2)&&m$1.$eq$($1ba.element,$1b1)){
($1b8.rest=$1ba.rest);
hashSet$.$1dkeuw$1a9($1ba);
($1bb=hashSet$.$1dkeuw$197,hashSet$.$1dkeuw$197=$1bb.predecessor,$1bb);
var $1bb;
return true;
}
else{
$1b7=$1b9;
}
}
return false;
};hashSet$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$HashSet'}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','remove']};};
hashSet$.clear=function(){
var hashSet$=this;
var $1bc=(0);
while(($1bc<hashSet$.$1dkeuw$19c.size)){
($1bd=null,hashSet$.$1dkeuw$19c.set(($1be=$1bc,$1bc=$1be.successor,$1be),$1bd), $1bd);
var $1bd,$1be;
}
hashSet$.$1dkeuw$197=(0);
hashSet$.$1dkeuw$192=null;
hashSet$.$1dkeuw$193=null;
};hashSet$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','clear']};};
m$1.atr$(hashSet$,'size',function(){
var hashSet$=this;
return hashSet$.$1dkeuw$197;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','size']};});
hashSet$.iterator=function(){var hashSet$=this;
return ($1bf=(m$1.$eq$(hashSet$.$1dkeuw$194,linked())?LinkedCellIterator(hashSet$.$1dkeuw$192,{Element$LinkedCellIterator:hashSet$.$$targs$$.Element$HashSet}):null),m$1.nn$($1bf)?$1bf:CachingStoreIterator(hashSet$.$1dkeuw$19c,{Element$CachingStoreIterator:hashSet$.$$targs$$.Element$HashSet}));
var $1bf;
};hashSet$.count=function($1bg){
var hashSet$=this;
var $1bh=(0);
var $1bi=(0);
while(($1bi<hashSet$.$1dkeuw$19c.size)){
var $1bj=hashSet$.$1dkeuw$19c.$_get($1bi);
var $1bk;
while(m$1.nn$(($1bk=$1bj))){
if($1bg($1bk.element)){
($1bl=$1bh,$1bh=$1bl.successor,$1bl);
var $1bl;
}
$1bj=$1bk.rest;
}
($1bm=$1bi,$1bi=$1bm.successor,$1bm);
var $1bm;
}
return $1bh;
};hashSet$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:['Element$HashSet']}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$HashSet'}]}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','count']};};
hashSet$.each=function($1bn){
var hashSet$=this;
hashSet$.$1dkeuw$19c.each(m$1.jsc$2((function($1bo){
var $1bp=$1bo;
$prop$get$1bp={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}]},$cont:hashSet$.each,pa:1027,d:['ceylon.collection','HashSet','$m','each','$at','iter$e3zwaq']};}};
$prop$get$1bp.get=function(){return $1bp};
var $1bq;
while(m$1.nn$(($1bq=$1bp))){
$1bn($1bq.element);
$1bp=$1bq.rest;
}
}),[{nm:'bucket',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:hashSet$.$$targs$$.Element$HashSet}}]}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:hashSet$.$$targs$$.Element$HashSet}}])])}));
};hashSet$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:['Element$HashSet']}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$HashSet'}]}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','each']};};
m$1.atr$(hashSet$,'hash',function(){
var hashSet$=this;
var $1br=(0);
var $1bs=(0);
while(($1br<hashSet$.$1dkeuw$19c.size)){
var $1bt=hashSet$.$1dkeuw$19c.$_get($1br);
var $1bu;
while(m$1.nn$(($1bu=$1bt))){
($1bs=$1bs+$1bu.element.hash);
$1bt=$1bu.rest;
}
($1bv=$1br,$1br=$1bv.successor,$1bv);
var $1bv;
}
return $1bs;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','hash']};});hashSet$.equals=function($1bw){
var hashSet$=this;
var $1bx;
if(m$1.is$(($1bx=$1bw),{t:m$1.Set,a:{Element$Set:{t:m$1.$_Object}}})&&(hashSet$.size==$1bx.size)){
var $1by=(0);
while(($1by<hashSet$.$1dkeuw$19c.size)){
var $1bz=hashSet$.$1dkeuw$19c.$_get($1by);
var $1c0;
while(m$1.nn$(($1c0=$1bz))){
if(!m$1.$cnt$($1bx,$1c0.element)){
return false;
}
$1bz=$1c0.rest;
}
($1c1=$1by,$1by=$1c1.successor,$1c1);
var $1c1;
}
return true;
}
return false;
};hashSet$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','equals']};};
hashSet$.clone=function(){var hashSet$=this;
return HashSet$c_copy(hashSet$,undefined,undefined,{Element$HashSet:hashSet$.$$targs$$.Element$HashSet});
};
hashSet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:'Element$HashSet'}},ps:[],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','clone']};};
hashSet$.contains=function($1c2){
var hashSet$=this;
if(hashSet$.empty){
return false;
}
else{
var $1c3=hashSet$.$1dkeuw$19x($1c2);
var $1c4=hashSet$.$1dkeuw$1a0($1c3,hashSet$.$1dkeuw$19c);
var $1c5=hashSet$.$1dkeuw$19c.$_get($1c4);
var $1c6;
while(m$1.nn$(($1c6=$1c5))){
if((($1c6.keyHash==$1c3)&&m$1.$eq$($1c6.element,$1c2))){
return true;
}
$1c5=$1c6.rest;
}
return false;
}
};hashSet$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','contains']};};
hashSet$.complement=function($1c7,$4pzcs8$){
var hashSet$=this;
var $1c8=HashSet(undefined,undefined,undefined,{Element$HashSet:hashSet$.$$targs$$.Element$HashSet});
var $1ca;for(var $1c9=hashSet$.iterator();($1ca=$1c9.next())!==m$1.finished();){
if((!m$1.$cnt$($1c7,$1ca))){
$1c8.add($1ca);
}
}
return $1c8;
};hashSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:'Element$HashSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:HashSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','complement']};};
hashSet$.exclusiveUnion=function($1cb,$rk6eqr$){
var hashSet$=this;
var $1cc=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([hashSet$.$$targs$$.Element$HashSet,$rk6eqr$.Other$exclusiveUnion])});
var $1ce;for(var $1cd=hashSet$.iterator();($1ce=$1cd.next())!==m$1.finished();){
if((!m$1.$cnt$($1cb,$1ce))){
$1cc.add($1ce);
}
}
var $1cg;for(var $1cf=$1cb.iterator();($1cg=$1cf.next())!==m$1.finished();){
if((!m$1.$cnt$(hashSet$,$1cg))){
$1cc.add($1cg);
}
}
return $1cc;
};hashSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$HashSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:HashSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','exclusiveUnion']};};
hashSet$.intersection=function($1ch,$4hlnq3$){
var hashSet$=this;
var $1ci=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mit$([hashSet$.$$targs$$.Element$HashSet,$4hlnq3$.Other$intersection])});
var $1ck;for(var $1cj=hashSet$.iterator();($1ck=$1cj.next())!==m$1.finished();){
var $1cl;
if(m$1.$cnt$($1ch,$1ck)&&m$1.is$(($1cl=$1ck),$4hlnq3$.Other$intersection,$4hlnq3$)){
$1ci.add($1cl);
}
}
return $1ci;
};hashSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'i',l:['Element$HashSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:HashSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','intersection']};};
hashSet$.union=function($1cm,$hc5war$){
var hashSet$=this;
var $1cn=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([hashSet$.$$targs$$.Element$HashSet,$hc5war$.Other$union])});
$1cn.addAll(hashSet$);
$1cn.addAll($1cm);
return $1cn;
};hashSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$HashSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:HashSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','union']};};
m$1.atr$(hashSet$,'first',function(){
var hashSet$=this;
return (m$1.$eq$(hashSet$.$1dkeuw$194,linked())?($1cp=hashSet$.$1dkeuw$192,m$1.nn$($1cp)?$1cp.element:null):($1cq=hashSet$.$1dkeuw$19c.coalesced.first,m$1.nn$($1cq)?$1cq.element:null));
var $1cp,$1cq;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$HashSet']},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','first']};});
m$1.atr$(hashSet$,'last',function(){
var hashSet$=this;
if(m$1.$eq$(hashSet$.$1dkeuw$194,linked())){
return ($1cr=hashSet$.$1dkeuw$193,m$1.nn$($1cr)?$1cr.element:null);
var $1cr;
}
else{
var $1cs=hashSet$.$1dkeuw$19c.reversed.coalesced.first;
var $1ct;
while(m$1.nn$(($1ct=($1cu=$1cs,m$1.nn$($1cu)?$1cu.rest:null)))){
$1cs=$1ct;
}
var $1cu;
return ($1cv=$1cs,m$1.nn$($1cv)?$1cv.element:null);
var $1cv;
}
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$HashSet']},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','last']};});hashSet$.toString=function(){return this.string.valueOf();};
})(HashSet.$$.prototype);
}
return HashSet;
}
ex$.$init$HashSet=$init$HashSet;$init$HashSet();HashSet.inst$$=function($1cw){
var hashSet$=new HashSet.$$;
m$1.set_type_args(hashSet$,{Element$HashSet:$1cw.$$targs$$.Type$Class.a.Element$HashSet});
m$1.set_type_args(hashSet$,{Element$MutableSet:hashSet$.$$targs$$.Element$HashSet,Element$Set:hashSet$.$$targs$$.Element$HashSet,Element$Collection:hashSet$.$$targs$$.Element$HashSet,Absent$Iterable:{t:m$1.Null},Element$Iterable:hashSet$.$$targs$$.Element$HashSet,Element$Category:{t:m$1.$_Object},Element$SetMutator:hashSet$.$$targs$$.Element$HashSet});
return hashSet$;
};
HashSet.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::HashSet.stability')return o.$1dkeuw$194_;
else if(n==='ceylon.collection::HashSet.hashtable')return o.$1dkeuw$195_;
else if(n==='ceylon.collection::HashSet.store')return o.$1dkeuw$19c_;
else if(n==='ceylon.collection::HashSet.length')return o.$1dkeuw$197_;
else if(n==='ceylon.collection::HashSet.head')return o.$1dkeuw$192_;
else if(n==='ceylon.collection::HashSet.tip')return o.$1dkeuw$193_;
else throw new TypeError('unknown attribute');
};
HashSet.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::HashSet.stability')o.$1dkeuw$194_=i;
else if(n==='ceylon.collection::HashSet.hashtable')o.$1dkeuw$195_=i;
else if(n==='ceylon.collection::HashSet.store')o.$1dkeuw$19c_=i;
else if(n==='ceylon.collection::HashSet.length')o.$1dkeuw$197_=i;
else if(n==='ceylon.collection::HashSet.head')o.$1dkeuw$192_=i;
else if(n==='ceylon.collection::HashSet.tip')o.$1dkeuw$193_=i;
else throw new TypeError('unknown attribute');
};
HashSet.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$194)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$195)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$19c)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$197)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$192)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$193))];
};
function Hashtable(initialCapacity,loadFactor,growthFactor,hashtable$){
$init$Hashtable();
if(hashtable$===undefined)hashtable$=new Hashtable.$$;
if(initialCapacity===undefined){initialCapacity=$init$Hashtable().$defs$initialCapacity(hashtable$,loadFactor,growthFactor);}
hashtable$.initialCapacity_=initialCapacity;
if(loadFactor===undefined){loadFactor=$init$Hashtable().$defs$loadFactor(hashtable$,initialCapacity,growthFactor);}
hashtable$.loadFactor_=loadFactor;
if(growthFactor===undefined){growthFactor=$init$Hashtable().$defs$growthFactor(hashtable$,initialCapacity,loadFactor);}
hashtable$.growthFactor_=growthFactor;
m$1.asrt$(((hashtable$.initialCapacity>=(0))),"Assertion failed: "+"initial capacity cannot be negative\n\tviolated initialCapacity>=0\n\tat Hashtable.ceylon (32:11-32:30)",'31:4-32:31','Hashtable.ceylon');
m$1.asrt$(((hashtable$.initialCapacity<=m$1.runtime().maxArraySize)),"Assertion failed: "+"initial capacity too large\n\tviolated initialCapacity<=runtime.maxArraySize\n\tat Hashtable.ceylon (35:11-35:49)",'34:4-35:50','Hashtable.ceylon');
m$1.asrt$((hashtable$.loadFactor.largerThan((0.0))),"Assertion failed: "+"load factor must be positive\n\tviolated loadFactor>0.0\n\tat Hashtable.ceylon (38:11-38:26)",'37:4-38:27','Hashtable.ceylon');
m$1.asrt$((hashtable$.growthFactor.notSmallerThan((1.0))),"Assertion failed: "+"growth factor must be at least 1.0\n\tviolated growthFactor>=1.0\n\tat Hashtable.ceylon (41:11-41:29)",'40:4-41:30','Hashtable.ceylon');
return hashtable$;
}
Hashtable.$defs$initialCapacity=function(hashtable$,loadFactor,growthFactor){return (16)};Hashtable.$defs$loadFactor=function(hashtable$,initialCapacity,growthFactor){return (0.75)};Hashtable.$defs$growthFactor=function(hashtable$,initialCapacity,loadFactor){return m$1.Float(2.0)};Hashtable.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc("The initial capacity of the backing array.")];}},{nm:'loadFactor',mt:'prm',def:1,$t:{t:m$1.Float},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:loadFactor')];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:growthFactor')];}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable')];},d:['ceylon.collection','Hashtable']};};
ex$.Hashtable=Hashtable;
function $init$Hashtable(){
if(Hashtable.$$===undefined){
m$1.initTypeProto(Hashtable,'ceylon.collection::Hashtable',m$1.Basic);
(function(hashtable$){
m$1.atr$(hashtable$,'initialCapacity',function(){return this.initialCapacity_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Hashtable,pa:1,an:function(){return[m$1.doc("The initial capacity of the backing array.")];},d:['ceylon.collection','Hashtable','$at','initialCapacity']};});
m$1.atr$(hashtable$,'loadFactor',function(){return this.loadFactor_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:Hashtable,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:loadFactor')];},d:['ceylon.collection','Hashtable','$at','loadFactor']};});
m$1.atr$(hashtable$,'growthFactor',function(){return this.growthFactor_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:Hashtable,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:growthFactor')];},d:['ceylon.collection','Hashtable','$at','growthFactor']};});
hashtable$.rehash=function($1cx,$1cy){var hashtable$=this;
return (($1cx>m$1.Float($1cy*hashtable$.loadFactor).integer)&&(hashtable$.capacity($1cx)>$1cy));
};
hashtable$.rehash.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'length',mt:'prm',$t:{t:m$1.Integer}},{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:Hashtable,pa:1,d:['ceylon.collection','Hashtable','$m','rehash']};};
hashtable$.capacity=function($1cz){var hashtable$=this;
return hashtable$.$1dkeuw$1d0(m$1.Float($1cz*hashtable$.growthFactor).integer);
};
hashtable$.capacity.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'length',mt:'prm',$t:{t:m$1.Integer}}],$cont:Hashtable,pa:1,d:['ceylon.collection','Hashtable','$m','capacity']};};
hashtable$.initialCapacityForSize=function($1d1){var hashtable$=this;
return hashtable$.$1dkeuw$1d0(largest(hashtable$.initialCapacity,m$1.Float($1d1.divided(hashtable$.loadFactor)+(1)).integer));
};
hashtable$.initialCapacityForSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:Hashtable,pa:1,d:['ceylon.collection','Hashtable','$m','initialCapacityForSize']};};
hashtable$.initialCapacityForUnknownSize=function(){var hashtable$=this;
return hashtable$.$1dkeuw$1d0(hashtable$.initialCapacity);
};
hashtable$.initialCapacityForUnknownSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:Hashtable,pa:1,d:['ceylon.collection','Hashtable','$m','initialCapacityForUnknownSize']};};
hashtable$.$1dkeuw$1d0=function($1d2){
var hashtable$=this;
var $1d3=($1d2-(1));
$1d3=$1d3.rightLogicalShift(1).or($1d3);
$1d3=$1d3.rightLogicalShift(2).or($1d3);
$1d3=$1d3.rightLogicalShift(4).or($1d3);
$1d3=$1d3.rightLogicalShift(8).or($1d3);
$1d3=$1d3.rightLogicalShift(16).or($1d3);
if(($1d3<(0))){
return 1;
}
else{
if(($1d3>=maximumCapacity())){
return maximumCapacity();
}
else{
return ($1d3+(1));
}
}
};hashtable$.$1dkeuw$1d0.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:Hashtable,d:['ceylon.collection','Hashtable','$m','powerOf2$bh7ri4']};};
hashtable$.toString=function(){return this.string.valueOf();};
})(Hashtable.$$.prototype);
}
return Hashtable;
}
ex$.$init$Hashtable=$init$Hashtable;$init$Hashtable();Hashtable.inst$$=function($1d4){
var hashtable$=new Hashtable.$$;
return hashtable$;
};
Hashtable.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::Hashtable.initialCapacity')return o.initialCapacity_;
else if(n==='ceylon.collection::Hashtable.loadFactor')return o.loadFactor_;
else if(n==='ceylon.collection::Hashtable.growthFactor')return o.growthFactor_;
else throw new TypeError('unknown attribute');
};
Hashtable.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::Hashtable.initialCapacity')o.initialCapacity_=i;
else if(n==='ceylon.collection::Hashtable.loadFactor')o.loadFactor_=i;
else if(n==='ceylon.collection::Hashtable.growthFactor')o.growthFactor_=i;
else throw new TypeError('unknown attribute');
};
Hashtable.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getInitialCapacity)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getLoadFactor)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getGrowthFactor))];
};
var $1d5;function $valinit$$1d5(){if($1d5===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'maximumCapacity\' before it was set"),'77:0-77:48','Hashtable.ceylon');
if($1d5===undefined){$1d5=m$1.INIT$;$1d5=(1).leftLogicalShift(30)};return $1d5;};
function maximumCapacity(){return $valinit$$1d5();}
var $prop$getMaximumCapacity={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},d:['ceylon.collection','maximumCapacity']};}};
ex$.$prop$getMaximumCapacity=$prop$getMaximumCapacity;
$prop$getMaximumCapacity.get=maximumCapacity;
function IdentityMap($1dkeuw$1d6,$1dkeuw$1d7,$$targs$$,identityMap$){
$init$IdentityMap();
if(identityMap$===undefined)identityMap$=new IdentityMap.$$;
m$1.set_type_args(identityMap$,$$targs$$);
if($1dkeuw$1d6===undefined){$1dkeuw$1d6=$init$IdentityMap().$defs$hashtable(identityMap$,$1dkeuw$1d7);}
identityMap$.$1dkeuw$1d6_=$1dkeuw$1d6;
if($1dkeuw$1d7===undefined){$1dkeuw$1d7=$init$IdentityMap().$defs$entries(identityMap$,$1dkeuw$1d6);}
identityMap$.$1dkeuw$1d7_=$1dkeuw$1d7;
m$1.Correspondence({Item$Correspondence:$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Correspondence:$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/},identityMap$);
m$1.Iterable({Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/,Item$Entry:$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/}}},identityMap$);
m$1.Collection({Element$Collection:{t:m$1.Entry,a:{Key$Entry:$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/,Item$Entry:$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/}}},identityMap$);
identityMap$.$1dkeuw$1d8_=entryStore(identityMap$.$1dkeuw$1d6.initialCapacity,{Item$entryStore:identityMap$.$$targs$$.Item$IdentityMap,Key$entryStore:identityMap$.$$targs$$.Key$IdentityMap});
identityMap$.$1dkeuw$1d9_=(0);
var $1db;for(var $1da=$1dkeuw$1d7.iterator();($1db=$1da.next())!==m$1.finished();){
if(identityMap$.$1dkeuw$1dc(identityMap$.$1dkeuw$1d8,$1db)){
($1dd=identityMap$.$1dkeuw$1d9,identityMap$.$1dkeuw$1d9=$1dd.successor,$1dd);
var $1dd;
}
}
identityMap$.$1dkeuw$1de();
return identityMap$;
}
IdentityMap.$defs$hashtable=function(identityMap$,$1dkeuw$1d7){return Hashtable()};IdentityMap.$defs$entries=function(identityMap$,$1dkeuw$1d6){return m$1.empty()};IdentityMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}},an:function(){return[m$1.doc("The initial entries in the map.")];}}],tp:{Key$IdentityMap:{sts:[{t:m$1.Identifiable}]},Item$IdentityMap:{}},sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}},{t:m$1.Collection,a:{Element$Collection:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}},{t:m$1.Correspondence,a:{Item$Correspondence:'Item$IdentityMap',Key$Correspondence:'Key$IdentityMap'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentityMap'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','IdentityMap']};};
ex$.IdentityMap=IdentityMap;
function $init$IdentityMap(){
if(IdentityMap.$$===undefined){
m$1.initTypeProto(IdentityMap,'ceylon.collection::IdentityMap',m$1.Basic,m$1.Correspondence,m$1.Iterable,m$1.Collection);
(function(identityMap$){
m$1.atr$(identityMap$,'$1dkeuw$1d6',function(){return this.$1dkeuw$1d6_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:IdentityMap,an:function(){return[m$1.doc("Performance-related settings for the backing array.")];},d:['ceylon.collection','IdentityMap','$at','hashtable$ysu1qs']};});
m$1.atr$(identityMap$,'$1dkeuw$1d7',function(){return this.$1dkeuw$1d7_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}},$cont:IdentityMap,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','IdentityMap','$at','entries$yyuq4k']};});
m$1.atr$(identityMap$,'$1dkeuw$1d8',function(){return this.$1dkeuw$1d8_;},function($1df){return this.$1dkeuw$1d8_=$1df;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}}]}}},$cont:IdentityMap,pa:1027,d:['ceylon.collection','IdentityMap','$at','store$dzug7v']};});
m$1.atr$(identityMap$,'$1dkeuw$1d9',function(){return this.$1dkeuw$1d9_;},function($1dg){return this.$1dkeuw$1d9_=$1dg;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:1027,d:['ceylon.collection','IdentityMap','$at','length$bsbrj6']};});
identityMap$.$1dkeuw$1dh=function($1di,$1dj){var identityMap$=this;
return m$1.identityHash($1di).remainder($1dj.size).magnitude;
};
identityMap$.$1dkeuw$1dh.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'key',mt:'prm',$t:{t:m$1.Identifiable}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}}]}}}}],$cont:IdentityMap,d:['ceylon.collection','IdentityMap','$m','storeIndex$9uf6gl']};};
identityMap$.$1dkeuw$1dc=function($1dk,$1dl){
var identityMap$=this;
var $1dm=identityMap$.$1dkeuw$1dh($1dl.key,$1dk);
var $1dn=$1dk.$_get($1dm);
var $1do=$1dn;
var $1dp;
while(m$1.nn$(($1dp=$1do))){
if(($1dp.element.key===$1dl.key)){
($1dp.element=$1dl);
return false;
}
$1do=$1dp.rest;
}
($1dq=Cell($1dl,$1dn,{Element$Cell:{t:m$1.Entry,a:{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/}}}),$1dk.set($1dm,$1dq), $1dq);
var $1dq;
return true;
};identityMap$.$1dkeuw$1dc.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}}]}}}},{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}],$cont:IdentityMap,d:['ceylon.collection','IdentityMap','$m','addToStore$z02azt']};};
identityMap$.$1dkeuw$1de=function(){
var identityMap$=this;
if(identityMap$.$1dkeuw$1d6.rehash(identityMap$.$1dkeuw$1d9,identityMap$.$1dkeuw$1d8.size)){
var $1dr=entryStore(identityMap$.$1dkeuw$1d6.capacity(identityMap$.$1dkeuw$1d9),{Item$entryStore:identityMap$.$$targs$$.Item$IdentityMap,Key$entryStore:identityMap$.$$targs$$.Key$IdentityMap});
var $1ds=(0);
while(($1ds<identityMap$.$1dkeuw$1d8.size)){
var $1dt=identityMap$.$1dkeuw$1d8.$_get($1ds);
var $1du;
while(m$1.nn$(($1du=$1dt))){
$1dt=$1du.rest;
var $1dv=identityMap$.$1dkeuw$1dh($1du.element.key,$1dr);
var $1dw=$1dr.$_get($1dv);
($1du.rest=$1dw);
($1dx=$1du,$1dr.set($1dv,$1dx), $1dx);
var $1dx;
}
($1dy=$1ds,$1ds=$1dy.successor,$1dy);
var $1dy;
}
identityMap$.$1dkeuw$1d8=$1dr;
}
};identityMap$.$1dkeuw$1de.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentityMap,d:['ceylon.collection','IdentityMap','$m','checkRehash$c66hwt']};};
identityMap$.put=function($1dz,$1e0){
var identityMap$=this;
var $1e1=identityMap$.$1dkeuw$1dh($1dz,identityMap$.$1dkeuw$1d8);
var $1e2=m$1.Entry($1dz,$1e0,{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/});
var $1e3=identityMap$.$1dkeuw$1d8.$_get($1e1);
var $1e4=$1e3;
var $1e5;
while(m$1.nn$(($1e5=$1e4))){
if(($1e5.element.key===$1dz)){
var $1e6=$1e5.element.item;
($1e5.element=$1e2);
return $1e6;
}
$1e4=$1e5.rest;
}
($1e7=Cell($1e2,$1e3,{Element$Cell:{t:m$1.Entry,a:{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/}}}),identityMap$.$1dkeuw$1d8.set($1e1,$1e7), $1e7);
var $1e7;
($1e8=identityMap$.$1dkeuw$1d9,identityMap$.$1dkeuw$1d9=$1e8.successor,$1e8);
var $1e8;
identityMap$.$1dkeuw$1de();
return null;
};identityMap$.put.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$IdentityMap']},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'},{nm:'item',mt:'prm',$t:'Item$IdentityMap'}],$cont:IdentityMap,pa:1,d:['ceylon.collection','IdentityMap','$m','put']};};
identityMap$.putAll=function($1e9){
var identityMap$=this;
var $1eb;for(var $1ea=$1e9.iterator();($1eb=$1ea.next())!==m$1.finished();){
if(identityMap$.$1dkeuw$1dc(identityMap$.$1dkeuw$1d8,$1eb)){
($1ec=identityMap$.$1dkeuw$1d9,identityMap$.$1dkeuw$1d9=$1ec.successor,$1ec);
var $1ec;
}
}
identityMap$.$1dkeuw$1de();
};identityMap$.putAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}}}],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentityMap:$m:putAll')];},d:['ceylon.collection','IdentityMap','$m','putAll']};};
identityMap$.replaceEntry=function($1ed,$1ee,$1ef){
var identityMap$=this;
var $1eg=identityMap$.$1dkeuw$1dh($1ed,identityMap$.$1dkeuw$1d8);
var $1eh=identityMap$.$1dkeuw$1d8.$_get($1eg);
var $1ei;
while(m$1.nn$(($1ei=$1eh))){
if(($1ei.element.key===$1ed)){
var $1ej;
if(m$1.nn$(($1ej=$1ei.element.item))&&m$1.$eq$($1ej,$1ee)){
($1ei.element=m$1.Entry($1ed,$1ef,{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/}));
return true;
}
else{
return false;
}
}
$1eh=$1ei.rest;
}
return false;
};identityMap$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$IdentityMap',{t:m$1.$_Object}]}},{nm:'newItem',mt:'prm',$t:'Item$IdentityMap'}],$cont:IdentityMap,pa:1,d:['ceylon.collection','IdentityMap','$m','replaceEntry']};};
identityMap$.remove=function($1ek){
var identityMap$=this;
var $1el=identityMap$.$1dkeuw$1dh($1ek,identityMap$.$1dkeuw$1d8);
var $1em;
if(m$1.nn$(($1em=identityMap$.$1dkeuw$1d8.$_get($1el)))&&($1em.element.key===$1ek)){
($1en=$1em.rest,identityMap$.$1dkeuw$1d8.set($1el,$1en), $1en);
var $1en;
($1eo=identityMap$.$1dkeuw$1d9,identityMap$.$1dkeuw$1d9=$1eo.predecessor,$1eo);
var $1eo;
return $1em.element.item;
}
var $1ep=identityMap$.$1dkeuw$1d8.$_get($1el);
var $1eq;
while(m$1.nn$(($1eq=$1ep))){
var $1er=$1eq.rest;
var $1es;
if(m$1.nn$(($1es=$1er))&&($1es.element.key===$1ek)){
($1eq.rest=$1es.rest);
($1et=identityMap$.$1dkeuw$1d9,identityMap$.$1dkeuw$1d9=$1et.predecessor,$1et);
var $1et;
return $1es.element.item;
}
else{
$1ep=$1er;
}
}
return null;
};identityMap$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$IdentityMap']},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'}],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc("Removes a key/value mapping if it exists")];},d:['ceylon.collection','IdentityMap','$m','remove']};};
identityMap$.removeAll=function($1eu){
var identityMap$=this;
var $1ew;for(var $1ev=$1eu.iterator();($1ew=$1ev.next())!==m$1.finished();){
identityMap$.remove($1ew);
}
};identityMap$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'keys',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Key$IdentityMap'}}}],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentityMap:$m:removeAll')];},d:['ceylon.collection','IdentityMap','$m','removeAll']};};
identityMap$.removeEntry=function($1ex,$1ey){
var identityMap$=this;
var $1ez=identityMap$.$1dkeuw$1dh($1ex,identityMap$.$1dkeuw$1d8);
var $1f0;
while(m$1.nn$(($1f0=identityMap$.$1dkeuw$1d8.$_get($1ez)))&&($1f0.element.key===$1ex)){
var $1f1;
if(m$1.nn$(($1f1=$1f0.element.item))&&m$1.$eq$($1f1,$1ey)){
($1f2=$1f0.rest,identityMap$.$1dkeuw$1d8.set($1ez,$1f2), $1f2);
var $1f2;
($1f3=identityMap$.$1dkeuw$1d9,identityMap$.$1dkeuw$1d9=$1f3.predecessor,$1f3);
var $1f3;
return true;
}
else{
return false;
}
}
var $1f4=identityMap$.$1dkeuw$1d8.$_get($1ez);
var $1f5;
while(m$1.nn$(($1f5=$1f4))){
var $1f6=$1f5.rest;
var $1f7;
if(m$1.nn$(($1f7=$1f6))&&($1f7.element.key===$1ex)){
var $1f8;
if(m$1.nn$(($1f8=$1f7.element.item))&&m$1.$eq$($1f8,$1ey)){
($1f5.rest=$1f7.rest);
($1f9=identityMap$.$1dkeuw$1d9,identityMap$.$1dkeuw$1d9=$1f9.predecessor,$1f9);
var $1f9;
return true;
}
else{
return false;
}
}
else{
$1f4=$1f6;
}
}
return false;
};identityMap$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$IdentityMap',{t:m$1.$_Object}]}}],$cont:IdentityMap,pa:1,d:['ceylon.collection','IdentityMap','$m','removeEntry']};};
identityMap$.clear=function(){
var identityMap$=this;
var $1fa=(0);
while(($1fa<identityMap$.$1dkeuw$1d8.size)){
($1fb=null,identityMap$.$1dkeuw$1d8.set(($1fc=$1fa,$1fa=$1fc.successor,$1fc),$1fb), $1fb);
var $1fb,$1fc;
}
identityMap$.$1dkeuw$1d9=(0);
};identityMap$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc("Removes every key/value mapping")];},d:['ceylon.collection','IdentityMap','$m','clear']};};
m$1.atr$(identityMap$,'size',function(){
var identityMap$=this;
return identityMap$.$1dkeuw$1d9;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$at','size']};});
identityMap$.$_get=function($1fd){
var identityMap$=this;
if(identityMap$.empty){
return null;
}
var $1fe=identityMap$.$1dkeuw$1dh($1fd,identityMap$.$1dkeuw$1d8);
var $1ff=identityMap$.$1dkeuw$1d8.$_get($1fe);
var $1fg;
while(m$1.nn$(($1fg=$1ff))){
if(($1fg.element.key===$1fd)){
return $1fg.element.item;
}
$1ff=$1fg.rest;
}
return null;
};identityMap$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$IdentityMap']},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','get']};};
identityMap$.iterator=function(){var identityMap$=this;
return StoreIterator(identityMap$.$1dkeuw$1d8,{Element$StoreIterator:{t:m$1.Entry,a:{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/}}});
};identityMap$.count=function($1fh){
var identityMap$=this;
var $1fi=(0);
var $1fj=(0);
while(($1fi<identityMap$.$1dkeuw$1d8.size)){
var $1fk=identityMap$.$1dkeuw$1d8.$_get($1fi);
var $1fl;
while(m$1.nn$(($1fl=$1fk))){
if($1fh($1fl.element)){
($1fm=$1fj,$1fj=$1fm.successor,$1fm);
var $1fm;
}
$1fk=$1fl.rest;
}
($1fn=$1fi,$1fi=$1fn.successor,$1fn);
var $1fn;
}
return $1fj;
};identityMap$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}]}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','count']};};
identityMap$.each=function($1fo){
var identityMap$=this;
identityMap$.$1dkeuw$1d8.each(m$1.jsc$2((function($1fp){
var $1fq=$1fp;
$prop$get$1fq={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}}]},$cont:identityMap$.each,pa:1027,d:['ceylon.collection','IdentityMap','$m','each','$at','iter$4io6c']};}};
$prop$get$1fq.get=function(){return $1fq};
var $1fr;
while(m$1.nn$(($1fr=$1fq))){
$1fo($1fr.element);
$1fq=$1fr.rest;
}
}),[{nm:'bucket',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap}}}}]}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/}}}}])])}));
};identityMap$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}]}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}]}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','each']};};
m$1.atr$(identityMap$,'hash',function(){
var identityMap$=this;
var $1fs=(0);
var $1ft=(17);
while(($1fs<identityMap$.$1dkeuw$1d8.size)){
var $1fu=identityMap$.$1dkeuw$1d8.$_get($1fs);
var $1fv;
while(m$1.nn$(($1fv=$1fu))){
$1ft=((($1ft*(31))+m$1.identityHash($1fv.element.key))*(31));
var $1fw;
if(m$1.nn$(($1fw=$1fv.element.item))){
($1ft=$1ft+$1fw.hash);
}
$1fu=$1fv.rest;
}
($1fx=$1fs,$1fs=$1fx.successor,$1fx);
var $1fx;
}
return $1ft;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$at','hash']};});identityMap$.equals=function($1fy){
var identityMap$=this;
var $1fz;
if(m$1.is$(($1fz=$1fy),{t:IdentityMap,a:{Key$IdentityMap:{t:m$1.$_Object},Item$IdentityMap:{t:m$1.$_Object}}})&&(identityMap$.size==$1fz.size)){
var $1g0=(0);
while(($1g0<identityMap$.$1dkeuw$1d8.size)){
var $1g1=identityMap$.$1dkeuw$1d8.$_get($1g0);
var $1g2;
while(m$1.nn$(($1g2=$1g1))){
var $1g3=$1fz.$_get($1g2.element.key);
var $1g4;
if(m$1.nn$(($1g4=$1g2.element.item))){
var $1g5;
if(m$1.nn$(($1g5=$1g3))){
if(!m$1.$eq$($1g5,$1g4)){
return false;
}
}
else{
return false;
}
}
else{
if(m$1.nn$($1g3)){
return false;
}
}
$1g1=$1g2.rest;
}
($1g6=$1g0,$1g0=$1g6.successor,$1g6);
var $1g6;
}
return true;
}
return false;
};identityMap$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','equals']};};
identityMap$.clone=function(){
var identityMap$=this;
var $1g7=IdentityMap(undefined,undefined,{Key$IdentityMap:identityMap$.$$targs$$.Key$IdentityMap,Item$IdentityMap:identityMap$.$$targs$$.Item$IdentityMap});
($1g7.$1dkeuw$1d9=identityMap$.$1dkeuw$1d9);
($1g7.$1dkeuw$1d8=entryStore(identityMap$.$1dkeuw$1d8.size,{Item$entryStore:identityMap$.$$targs$$.Item$IdentityMap,Key$entryStore:identityMap$.$$targs$$.Key$IdentityMap}));
var $1g8=(0);
while(($1g8<identityMap$.$1dkeuw$1d8.size)){
var $1g9;
if(m$1.nn$(($1g9=identityMap$.$1dkeuw$1d8.$_get($1g8)))){
($1ga=$1g9.clone(),$1g7.$1dkeuw$1d8.set($1g8,$1ga), $1ga);
var $1ga;
}
($1gb=$1g8,$1g8=$1gb.successor,$1gb);
var $1gb;
}
return $1g7;
};identityMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentityMap,a:{Key$IdentityMap:'Key$IdentityMap',Item$IdentityMap:'Item$IdentityMap'}},ps:[],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','clone']};};
identityMap$.defines=function($1gc){
var identityMap$=this;
var $1gd=(0);
while(($1gd<identityMap$.$1dkeuw$1d8.size)){
var $1ge=identityMap$.$1dkeuw$1d8.$_get($1gd);
var $1gf;
while(m$1.nn$(($1gf=$1ge))){
if(($1gf.element.key===$1gc)){
return true;
}
$1ge=$1gf.rest;
}
($1gg=$1gd,$1gd=$1gg.successor,$1gg);
var $1gg;
}
return false;
};identityMap$.defines.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','defines']};};
identityMap$.contains=function($1gh){
var identityMap$=this;
var $1gi=(0);
while(($1gi<identityMap$.$1dkeuw$1d8.size)){
var $1gj=identityMap$.$1dkeuw$1d8.$_get($1gi);
var $1gk;
while(m$1.nn$(($1gk=$1gj))){
var $1gl;
if(m$1.nn$(($1gl=$1gk.element.item))&&m$1.$eq$($1gl,$1gh)){
return true;
}
$1gj=$1gk.rest;
}
($1gm=$1gi,$1gi=$1gm.successor,$1gm);
var $1gm;
}
return false;
};identityMap$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','contains']};};
identityMap$.toString=function(){return this.string.valueOf();};
})(IdentityMap.$$.prototype);
}
return IdentityMap;
}
ex$.$init$IdentityMap=$init$IdentityMap;$init$IdentityMap();IdentityMap.inst$$=function($1gn){
var identityMap$=new IdentityMap.$$;
m$1.set_type_args(identityMap$,{Key$IdentityMap:$1gn.$$targs$$.Type$Class.a.Key$IdentityMap,Item$IdentityMap:$1gn.$$targs$$.Type$Class.a.Item$IdentityMap});
m$1.set_type_args(identityMap$,{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/}},Element$Category:{t:m$1.$_Object},Element$Collection:{t:m$1.Entry,a:{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/}},Item$Correspondence:identityMap$.$$targs$$.Item$IdentityMap,Key$Correspondence:identityMap$.$$targs$$.Key$IdentityMap});
return identityMap$;
};
IdentityMap.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::IdentityMap.hashtable')return o.$1dkeuw$1d6_;
else if(n==='ceylon.collection::IdentityMap.store')return o.$1dkeuw$1d8_;
else if(n==='ceylon.collection::IdentityMap.length')return o.$1dkeuw$1d9_;
else throw new TypeError('unknown attribute');
};
IdentityMap.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::IdentityMap.hashtable')o.$1dkeuw$1d6_=i;
else if(n==='ceylon.collection::IdentityMap.store')o.$1dkeuw$1d8_=i;
else if(n==='ceylon.collection::IdentityMap.length')o.$1dkeuw$1d9_=i;
else throw new TypeError('unknown attribute');
};
IdentityMap.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1d6)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1d8)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1d9))];
};
function IdentitySet($1dkeuw$1go,$1dkeuw$1gp,$$targs$$,identitySet$){
$init$IdentitySet();
if(identitySet$===undefined)identitySet$=new IdentitySet.$$;
m$1.set_type_args(identitySet$,$$targs$$);
if($1dkeuw$1go===undefined){$1dkeuw$1go=$init$IdentitySet().$defs$hashtable(identitySet$,$1dkeuw$1gp);}
identitySet$.$1dkeuw$1go_=$1dkeuw$1go;
if($1dkeuw$1gp===undefined){$1dkeuw$1gp=$init$IdentitySet().$defs$elements(identitySet$,$1dkeuw$1go);}
identitySet$.$1dkeuw$1gp_=$1dkeuw$1gp;
m$1.Iterable({Absent$Iterable:{t:m$1.Null},Element$Iterable:$$targs$$.Element$IdentitySet/*ORALE!Element inv pero Element var*/},identitySet$);
m$1.Collection({Element$Collection:$$targs$$.Element$IdentitySet/*ORALE!Element inv pero Element var*/},identitySet$);
identitySet$.$1dkeuw$1gq_=elementStore(identitySet$.$1dkeuw$1go.initialCapacity,{Element$elementStore:identitySet$.$$targs$$.Element$IdentitySet});
identitySet$.$1dkeuw$1gr_=(0);
var $1gt;for(var $1gs=$1dkeuw$1gp.iterator();($1gt=$1gs.next())!==m$1.finished();){
if(identitySet$.$1dkeuw$1gu(identitySet$.$1dkeuw$1gq,$1gt)){
($1gv=identitySet$.$1dkeuw$1gr,identitySet$.$1dkeuw$1gr=$1gv.successor,$1gv);
var $1gv;
}
}
identitySet$.$1dkeuw$1gw();
return identitySet$;
}
IdentitySet.$defs$hashtable=function(identitySet$,$1dkeuw$1gp){return Hashtable()};IdentitySet.$defs$elements=function(identitySet$,$1dkeuw$1go){return m$1.empty()};IdentitySet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$IdentitySet'}},an:function(){return[m$1.doc("The initial elements of the set.")];}}],tp:{Element$IdentitySet:{sts:[{t:m$1.Identifiable}]}},sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$IdentitySet'}},{t:m$1.Collection,a:{Element$Collection:'Element$IdentitySet'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentitySet'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','IdentitySet']};};
ex$.IdentitySet=IdentitySet;
function $init$IdentitySet(){
if(IdentitySet.$$===undefined){
m$1.initTypeProto(IdentitySet,'ceylon.collection::IdentitySet',m$1.Basic,m$1.Iterable,m$1.Collection);
(function(identitySet$){
m$1.atr$(identitySet$,'$1dkeuw$1go',function(){return this.$1dkeuw$1go_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:IdentitySet,an:function(){return[m$1.doc("Performance-related settings for the backing array.")];},d:['ceylon.collection','IdentitySet','$at','hashtable$x4421u']};});
m$1.atr$(identitySet$,'$1dkeuw$1gp',function(){return this.$1dkeuw$1gp_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$IdentitySet'}},$cont:IdentitySet,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','IdentitySet','$at','elements$7yiv9d']};});
m$1.atr$(identitySet$,'$1dkeuw$1gq',function(){return this.$1dkeuw$1gq_;},function($1gx){return this.$1dkeuw$1gq_=$1gx;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}},$cont:IdentitySet,pa:1027,d:['ceylon.collection','IdentitySet','$at','store$h40eed']};});
m$1.atr$(identitySet$,'$1dkeuw$1gr',function(){return this.$1dkeuw$1gr_;},function($1gy){return this.$1dkeuw$1gr_=$1gy;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:1027,d:['ceylon.collection','IdentitySet','$at','length$8o5tco']};});
identitySet$.$1dkeuw$1gz=function($1h0,$1h1){var identitySet$=this;
return m$1.identityHash($1h0).remainder($1h1.size).magnitude;
};
identitySet$.$1dkeuw$1gz.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elem',mt:'prm',$t:{t:m$1.Identifiable}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}}}],$cont:IdentitySet,d:['ceylon.collection','IdentitySet','$m','storeIndex$6q98a3']};};
identitySet$.$1dkeuw$1gu=function($1h2,$1h3){
var identitySet$=this;
var $1h4=identitySet$.$1dkeuw$1gz($1h3,$1h2);
var $1h5=$1h2.$_get($1h4);
var $1h6=$1h5;
var $1h7;
while(m$1.nn$(($1h7=$1h6))){
if(($1h7.element===$1h3)){
($1h7.element=$1h3);
return false;
}
$1h6=$1h7.rest;
}
($1h8=Cell($1h3,$1h5,{Element$Cell:identitySet$.$$targs$$.Element$IdentitySet}),$1h2.set($1h4,$1h8), $1h8);
var $1h8;
return true;
};identitySet$.$1dkeuw$1gu.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}}},{nm:'element',mt:'prm',$t:'Element$IdentitySet'}],$cont:IdentitySet,d:['ceylon.collection','IdentitySet','$m','addToStore$vvwctb']};};
identitySet$.$1dkeuw$1gw=function(){
var identitySet$=this;
if(identitySet$.$1dkeuw$1go.rehash(identitySet$.$1dkeuw$1gr,identitySet$.$1dkeuw$1gq.size)){
var $1h9=elementStore(identitySet$.$1dkeuw$1go.capacity(identitySet$.$1dkeuw$1gr),{Element$elementStore:identitySet$.$$targs$$.Element$IdentitySet});
var $1ha=(0);
while(($1ha<identitySet$.$1dkeuw$1gq.size)){
var $1hb=identitySet$.$1dkeuw$1gq.$_get($1ha);
var $1hc;
while(m$1.nn$(($1hc=$1hb))){
$1hb=$1hc.rest;
var $1hd=identitySet$.$1dkeuw$1gz($1hc.element,$1h9);
var $1he=$1h9.$_get($1hd);
($1hc.rest=$1he);
($1hf=$1hc,$1h9.set($1hd,$1hf), $1hf);
var $1hf;
}
($1hg=$1ha,$1ha=$1hg.successor,$1hg);
var $1hg;
}
identitySet$.$1dkeuw$1gq=$1h9;
}
};identitySet$.$1dkeuw$1gw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentitySet,d:['ceylon.collection','IdentitySet','$m','checkRehash$920jqb']};};
identitySet$.add=function($1hh){
var identitySet$=this;
if(identitySet$.$1dkeuw$1gu(identitySet$.$1dkeuw$1gq,$1hh)){
($1hi=identitySet$.$1dkeuw$1gr,identitySet$.$1dkeuw$1gr=$1hi.successor,$1hi);
var $1hi;
identitySet$.$1dkeuw$1gw();
return true;
}
return false;
};identitySet$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','add']};};
identitySet$.addAll=function($1hj){
var identitySet$=this;
var $1hk=false;
var $1hm;for(var $1hl=$1hj.iterator();($1hm=$1hl.next())!==m$1.finished();){
($1hk=$1hk||identitySet$.add($1hm));
}
if($1hk){
identitySet$.$1dkeuw$1gw();
}
return $1hk;
};identitySet$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$IdentitySet'}}}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','addAll']};};
identitySet$.remove=function($1hn){
var identitySet$=this;
var $1ho=identitySet$.$1dkeuw$1gz($1hn,identitySet$.$1dkeuw$1gq);
var $1hp;
if(m$1.nn$(($1hp=identitySet$.$1dkeuw$1gq.$_get($1ho)))&&($1hp.element===$1hn)){
($1hq=$1hp.rest,identitySet$.$1dkeuw$1gq.set($1ho,$1hq), $1hq);
var $1hq;
($1hr=identitySet$.$1dkeuw$1gr,identitySet$.$1dkeuw$1gr=$1hr.predecessor,$1hr);
var $1hr;
return true;
}
var $1hs=identitySet$.$1dkeuw$1gq.$_get($1ho);
var $1ht;
while(m$1.nn$(($1ht=$1hs))){
var $1hu=$1ht.rest;
var $1hv;
if(m$1.nn$(($1hv=$1hu))&&($1hv.element===$1hn)){
($1ht.rest=$1hv.rest);
($1hw=identitySet$.$1dkeuw$1gr,identitySet$.$1dkeuw$1gr=$1hw.predecessor,$1hw);
var $1hw;
return true;
}
else{
$1hs=$1hu;
}
}
return false;
};identitySet$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','remove']};};
identitySet$.removeAll=function($1hx){
var identitySet$=this;
var $1hy=false;
var $1i0;for(var $1hz=$1hx.iterator();($1i0=$1hz.next())!==m$1.finished();){
if(identitySet$.remove($1i0)){
$1hy=true;
}
}
return $1hy;
};identitySet$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$IdentitySet'}}}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','removeAll']};};
identitySet$.clear=function(){
var identitySet$=this;
var $1i1=(0);
while(($1i1<identitySet$.$1dkeuw$1gq.size)){
($1i2=null,identitySet$.$1dkeuw$1gq.set(($1i3=$1i1,$1i1=$1i3.successor,$1i3),$1i2), $1i2);
var $1i2,$1i3;
}
identitySet$.$1dkeuw$1gr=(0);
};identitySet$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentitySet,pa:1,an:function(){return[m$1.doc("Removes every element")];},d:['ceylon.collection','IdentitySet','$m','clear']};};
m$1.atr$(identitySet$,'size',function(){
var identitySet$=this;
return identitySet$.$1dkeuw$1gr;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$at','size']};});
identitySet$.iterator=function(){var identitySet$=this;
return StoreIterator(identitySet$.$1dkeuw$1gq,{Element$StoreIterator:identitySet$.$$targs$$.Element$IdentitySet});
};identitySet$.count=function($1i4){
var identitySet$=this;
var $1i5=(0);
var $1i6=(0);
while(($1i6<identitySet$.$1dkeuw$1gq.size)){
var $1i7=identitySet$.$1dkeuw$1gq.$_get($1i6);
var $1i8;
while(m$1.nn$(($1i8=$1i7))){
if($1i4($1i8.element)){
($1i9=$1i5,$1i5=$1i9.successor,$1i9);
var $1i9;
}
$1i7=$1i8.rest;
}
($1ia=$1i6,$1i6=$1ia.successor,$1ia);
var $1ia;
}
return $1i5;
};identitySet$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:['Element$IdentitySet']}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}]}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','count']};};
identitySet$.each=function($1ib){
var identitySet$=this;
identitySet$.$1dkeuw$1gq.each(m$1.jsc$2((function($1ic){
var $1id=$1ic;
$prop$get$1id={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]},$cont:identitySet$.each,pa:1027,d:['ceylon.collection','IdentitySet','$m','each','$at','iter$sd0mqa']};}};
$prop$get$1id.get=function(){return $1id};
var $1ie;
while(m$1.nn$(($1ie=$1id))){
$1ib($1ie.element);
$1id=$1ie.rest;
}
}),[{nm:'bucket',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:identitySet$.$$targs$$.Element$IdentitySet}}]}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:identitySet$.$$targs$$.Element$IdentitySet}}])])}));
};identitySet$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:['Element$IdentitySet']}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}]}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','each']};};
m$1.atr$(identitySet$,'hash',function(){
var identitySet$=this;
var $1if=(0);
var $1ig=(17);
while(($1if<identitySet$.$1dkeuw$1gq.size)){
var $1ih=identitySet$.$1dkeuw$1gq.$_get($1if);
var $1ii;
while(m$1.nn$(($1ii=$1ih))){
$1ig=(($1ig*(31))+m$1.identityHash($1ii));
$1ih=$1ii.rest;
}
($1ij=$1if,$1if=$1ij.successor,$1ij);
var $1ij;
}
return $1ig;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$at','hash']};});identitySet$.equals=function($1ik){
var identitySet$=this;
var $1il;
if(m$1.is$(($1il=$1ik),{t:IdentitySet,a:{Element$IdentitySet:{t:m$1.$_Object}}})&&(identitySet$.size==$1il.size)){
var $1im=(0);
while(($1im<identitySet$.$1dkeuw$1gq.size)){
var $1in=identitySet$.$1dkeuw$1gq.$_get($1im);
var $1io;
while(m$1.nn$(($1io=$1in))){
if(!m$1.$cnt$($1il,$1io.element)){
return false;
}
$1in=$1io.rest;
}
($1ip=$1im,$1im=$1ip.successor,$1ip);
var $1ip;
}
return true;
}
return false;
};identitySet$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','equals']};};
identitySet$.clone=function(){
var identitySet$=this;
var $1iq=IdentitySet(undefined,undefined,{Element$IdentitySet:identitySet$.$$targs$$.Element$IdentitySet});
($1iq.$1dkeuw$1gr=identitySet$.$1dkeuw$1gr);
($1iq.$1dkeuw$1gq=elementStore(identitySet$.$1dkeuw$1gq.size,{Element$elementStore:identitySet$.$$targs$$.Element$IdentitySet}));
var $1ir=(0);
while(($1ir<identitySet$.$1dkeuw$1gq.size)){
var $1is;
if(m$1.nn$(($1is=identitySet$.$1dkeuw$1gq.$_get($1ir)))){
($1it=$1is.clone(),$1iq.$1dkeuw$1gq.set($1ir,$1it), $1it);
var $1it;
}
($1iu=$1ir,$1ir=$1iu.successor,$1iu);
var $1iu;
}
return $1iq;
};identitySet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:'Element$IdentitySet'}},ps:[],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','clone']};};
identitySet$.contains=function($1iv){
var identitySet$=this;
var $1iw;
if(m$1.is$(($1iw=$1iv),{t:m$1.Identifiable})){
var $1ix=(0);
while(($1ix<identitySet$.$1dkeuw$1gq.size)){
var $1iy=identitySet$.$1dkeuw$1gq.$_get($1ix);
var $1iz;
while(m$1.nn$(($1iz=$1iy))){
if(($1iz.element===$1iw)){
return true;
}
$1iy=$1iz.rest;
}
($1j0=$1ix,$1ix=$1j0.successor,$1j0);
var $1j0;
}
}
return false;
};identitySet$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','contains']};};
identitySet$.superset=function($1j1,$1dp37t$){
var identitySet$=this;
var $1j3;for(var $1j2=$1j1.iterator();($1j3=$1j2.next())!==m$1.finished();){
if(!m$1.$cnt$(identitySet$,$1j3)){
return false;
}
}
if(m$1.finished()===$1j3){
return true;
}
};identitySet$.superset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$superset'}}}],$cont:IdentitySet,tp:{Other$superset:{sts:[{t:m$1.Identifiable}]}},pa:9,d:['ceylon.collection','IdentitySet','$m','superset']};};
identitySet$.subset=function($1j4,$emo084$){
var identitySet$=this;
var $1j6;for(var $1j5=identitySet$.iterator();($1j6=$1j5.next())!==m$1.finished();){
if(!m$1.$cnt$($1j4,$1j6)){
return false;
}
}
if(m$1.finished()===$1j6){
return true;
}
};identitySet$.subset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$subset'}}}],$cont:IdentitySet,tp:{Other$subset:{sts:[{t:m$1.Identifiable}]}},pa:9,d:['ceylon.collection','IdentitySet','$m','subset']};};
identitySet$.complement=function($1j7,$3sj2l4$){
var identitySet$=this;
var $1j8=IdentitySet(undefined,undefined,{Element$IdentitySet:identitySet$.$$targs$$.Element$IdentitySet});
var $1ja;for(var $1j9=identitySet$.iterator();($1ja=$1j9.next())!==m$1.finished();){
if(!m$1.$cnt$($1j7,$1ja)){
$1j8.add($1ja);
}
}
return $1j8;
};identitySet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:'Element$IdentitySet'}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$complement'}}}],$cont:IdentitySet,tp:{Other$complement:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','complement']};};
identitySet$.exclusiveUnion=function($1jb,$iggrmb$){
var identitySet$=this;
var $1jc=IdentitySet(undefined,undefined,{Element$IdentitySet:m$1.mut$([identitySet$.$$targs$$.Element$IdentitySet,$iggrmb$.Other$exclusiveUnion])});
var $1je;for(var $1jd=identitySet$.iterator();($1je=$1jd.next())!==m$1.finished();){
if(!m$1.$cnt$($1jb,$1je)){
$1jc.add($1je);
}
}
var $1jg;for(var $1jf=$1jb.iterator();($1jg=$1jf.next())!==m$1.finished();){
if(!identitySet$.contains($1jg)){
$1jc.add($1jg);
}
}
return $1jc;
};identitySet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:{t:'u',l:['Element$IdentitySet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$exclusiveUnion'}}}],$cont:IdentitySet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','exclusiveUnion']};};
identitySet$.intersection=function($1jh,$94cc1h$){
var identitySet$=this;
var $1ji=IdentitySet(undefined,undefined,{Element$IdentitySet:m$1.mit$([identitySet$.$$targs$$.Element$IdentitySet,$94cc1h$.Other$intersection])});
var $1jk;for(var $1jj=identitySet$.iterator();($1jk=$1jj.next())!==m$1.finished();){
var $1jl;
if(m$1.$cnt$($1jh,$1jk)&&m$1.is$(($1jl=$1jk),$94cc1h$.Other$intersection,$94cc1h$)){
$1ji.add($1jl);
}
}
return $1ji;
};identitySet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:{t:'i',l:['Element$IdentitySet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$intersection'}}}],$cont:IdentitySet,tp:{Other$intersection:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','intersection']};};
identitySet$.union=function($1jm,$mewmlv$){
var identitySet$=this;
var $1jn=IdentitySet(undefined,undefined,{Element$IdentitySet:m$1.mut$([identitySet$.$$targs$$.Element$IdentitySet,$mewmlv$.Other$union])});
$1jn.addAll(identitySet$);
$1jn.addAll($1jm);
return $1jn;
};identitySet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:{t:'u',l:['Element$IdentitySet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$union'}}}],$cont:IdentitySet,tp:{Other$union:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','union']};};
identitySet$.toString=function(){return this.string.valueOf();};
})(IdentitySet.$$.prototype);
}
return IdentitySet;
}
ex$.$init$IdentitySet=$init$IdentitySet;$init$IdentitySet();IdentitySet.inst$$=function($1jo){
var identitySet$=new IdentitySet.$$;
m$1.set_type_args(identitySet$,{Element$IdentitySet:$1jo.$$targs$$.Type$Class.a.Element$IdentitySet});
m$1.set_type_args(identitySet$,{Absent$Iterable:{t:m$1.Null},Element$Iterable:identitySet$.$$targs$$.Element$IdentitySet,Element$Category:{t:m$1.$_Object},Element$Collection:identitySet$.$$targs$$.Element$IdentitySet});
return identitySet$;
};
IdentitySet.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::IdentitySet.hashtable')return o.$1dkeuw$1go_;
else if(n==='ceylon.collection::IdentitySet.store')return o.$1dkeuw$1gq_;
else if(n==='ceylon.collection::IdentitySet.length')return o.$1dkeuw$1gr_;
else throw new TypeError('unknown attribute');
};
IdentitySet.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::IdentitySet.hashtable')o.$1dkeuw$1go_=i;
else if(n==='ceylon.collection::IdentitySet.store')o.$1dkeuw$1gq_=i;
else if(n==='ceylon.collection::IdentitySet.length')o.$1dkeuw$1gr_=i;
else throw new TypeError('unknown attribute');
};
IdentitySet.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1go)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1gq)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1gr))];
};
function LinkedCell($1dkeuw$1jp,$1dkeuw$1jq,$1dkeuw$1jr,previous,$$targs$$,linkedCell$){
$init$LinkedCell();
if(linkedCell$===undefined)linkedCell$=new LinkedCell.$$;
m$1.set_type_args(linkedCell$,$$targs$$);
linkedCell$.$1dkeuw$1jp_=$1dkeuw$1jp;
linkedCell$.$1dkeuw$1jq_=$1dkeuw$1jq;
linkedCell$.$1dkeuw$1jr_=$1dkeuw$1jr;
linkedCell$.previous_=previous;
CachingCell($1dkeuw$1jp,$1dkeuw$1jq,$1dkeuw$1jr,{Element$CachingCell:linkedCell$.$$targs$$.Element$LinkedCell},linkedCell$);
linkedCell$.$1dkeuw$1js_=null;
return linkedCell$;
}
LinkedCell.$crtmm$=function(){return{mod:$CCMM$,'super':{t:CachingCell,a:{Element$CachingCell:'Element$LinkedCell'}},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedCell'},{nm:'keyHash',mt:'prm',$t:{t:m$1.Integer}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$LinkedCell'}}]}},{nm:'previous',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},pa:1025}],tp:{Element$LinkedCell:{}},pa:2048,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:LinkedCell')];},d:['ceylon.collection','LinkedCell']};};
ex$.LinkedCell=LinkedCell;
function $init$LinkedCell(){
if(LinkedCell.$$===undefined){
m$1.initTypeProto(LinkedCell,'ceylon.collection::LinkedCell',$init$CachingCell());
(function(linkedCell$){
m$1.atr$(linkedCell$,'$1dkeuw$1jp',function(){return this.$1dkeuw$1jp_;},undefined,function(){return{mod:$CCMM$,$t:'Element$LinkedCell',$cont:LinkedCell,d:['ceylon.collection','LinkedCell','$at','element$8ang99']};});
m$1.atr$(linkedCell$,'$1dkeuw$1jq',function(){return this.$1dkeuw$1jq_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedCell,d:['ceylon.collection','LinkedCell','$at','keyHash$70kw6u']};});
m$1.atr$(linkedCell$,'$1dkeuw$1jr',function(){return this.$1dkeuw$1jr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$LinkedCell'}}]},$cont:LinkedCell,d:['ceylon.collection','LinkedCell','$at','rest$hy1p2d']};});
m$1.atr$(linkedCell$,'previous',function(){return this.previous_;},function($1jt){return this.previous_=$1jt;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},$cont:LinkedCell,pa:1025,d:['ceylon.collection','LinkedCell','$at','previous']};});
m$1.atr$(linkedCell$,'next',function(){return this.$1dkeuw$1js_;},function($1ju){return this.$1dkeuw$1js_=$1ju;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},$cont:LinkedCell,pa:1025,d:['ceylon.collection','LinkedCell','$at','next']};});
linkedCell$.toString=function(){return this.string.valueOf();};
})(LinkedCell.$$.prototype);
}
return LinkedCell;
}
ex$.$init$LinkedCell=$init$LinkedCell;$init$LinkedCell();LinkedCell.inst$$=function($1jv){
var linkedCell$=new LinkedCell.$$;
m$1.set_type_args(linkedCell$,{Element$LinkedCell:$1jv.$$targs$$.Type$Class.a.Element$LinkedCell});
m$1.set_type_args(linkedCell$,{Element$CachingCell:linkedCell$.$$targs$$.Element$LinkedCell});
return linkedCell$;
};
LinkedCell.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::LinkedCell.next')return o.next_;
else if(n==='ceylon.collection::LinkedCell.previous')return o.previous_;
else return CachingCell.ser$get$(ref,o);
};
LinkedCell.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::LinkedCell.next')o.next_=i;
else if(n==='ceylon.collection::LinkedCell.previous')o.previous_=i;
else CachingCell.ser$get$(ref,o,i);
};
LinkedCell.ser$refs$=function(o){var a=CachingCell.ser$refs$(o);a.push(m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getNext)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getPrevious)));return a;
};
function LinkedCellIterator($1dkeuw$1jw,$$targs$$,linkedCellIterator$){
$init$LinkedCellIterator();
if(linkedCellIterator$===undefined)linkedCellIterator$=new LinkedCellIterator.$$;
m$1.set_type_args(linkedCellIterator$,$$targs$$);
linkedCellIterator$.$1dkeuw$1jw_=$1dkeuw$1jw;
m$1.Iterator({Element$Iterator:$$targs$$.Element$LinkedCellIterator/*ORALE!Element inv pero Element var*/},linkedCellIterator$);
return linkedCellIterator$;
}
LinkedCellIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'iter',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCellIterator'}}]},pa:1024}],tp:{Element$LinkedCellIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$LinkedCellIterator'}}],d:['ceylon.collection','LinkedCellIterator']};};
ex$.LinkedCellIterator=LinkedCellIterator;
function $init$LinkedCellIterator(){
if(LinkedCellIterator.$$===undefined){
m$1.initTypeProto(LinkedCellIterator,'ceylon.collection::LinkedCellIterator',m$1.Basic,m$1.Iterator);
(function(linkedCellIterator$){
m$1.atr$(linkedCellIterator$,'$1dkeuw$1jw',function(){return this.$1dkeuw$1jw_;},function($1jx){return this.$1dkeuw$1jw_=$1jx;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCellIterator'}}]},$cont:LinkedCellIterator,pa:1024,d:['ceylon.collection','LinkedCellIterator','$at','iter$rxmm2v']};});
linkedCellIterator$.next=function(){
var linkedCellIterator$=this;
var $1jy;
if(m$1.nn$(($1jy=linkedCellIterator$.$1dkeuw$1jw))){
linkedCellIterator$.$1dkeuw$1jw=$1jy.next;
return $1jy.element;
}
return m$1.finished();
};linkedCellIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$LinkedCellIterator',{t:m$1.Finished}]},ps:[],$cont:LinkedCellIterator,pa:3,d:['ceylon.collection','LinkedCellIterator','$m','next']};};
linkedCellIterator$.toString=function(){return this.string.valueOf();};
})(LinkedCellIterator.$$.prototype);
}
return LinkedCellIterator;
}
ex$.$init$LinkedCellIterator=$init$LinkedCellIterator;$init$LinkedCellIterator();
function LinkedList$$c($$targs$$,linkedList$){
m$1.set_type_args(linkedList$,$$targs$$);
MutableList({Element$MutableList:$$targs$$.Element$LinkedList},linkedList$);
Stack({Element$Stack:$$targs$$.Element$LinkedList},linkedList$);
Queue({Element$Queue:$$targs$$.Element$LinkedList},linkedList$);
}
function LinkedList(){return LinkedList$c_$c$.apply(undefined,arguments);}
function LinkedList$c_$c$$$a($1jz,$$targs$$,linkedList$){
if($1jz===undefined){$1jz=m$1.empty();}
linkedList$.$1dkeuw$1k0_=null;
linkedList$.$1dkeuw$1k1_=null;
linkedList$.$1dkeuw$1k2_=(0);
var $1k4;for(var $1k3=$1jz.iterator();($1k4=$1k3.next())!==m$1.finished();){
linkedList$.$1dkeuw$1k5($1k4);
}
return linkedList$;
};
function LinkedList$c_$c$($1jz,$$targs$$,linkedList$){
$init$LinkedList();
if(linkedList$===undefined)linkedList$=new LinkedList.$$;
if($1jz===undefined){$1jz=m$1.empty();}
LinkedList$$c($$targs$$,linkedList$);
LinkedList$c_$c$$$a($1jz,$$targs$$,linkedList$);
return linkedList$;
};
LinkedList$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$LinkedList'}},an:function(){return[m$1.doc("The initial elements of the list.")];}}],$cont:LinkedList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:LinkedList:$cn:$def')];},d:['ceylon.collection','LinkedList','$cn','$def']};};
LinkedList.LinkedList$c_$c$=LinkedList$c_$c$;
ex$.LinkedList$c_$c$=LinkedList$c_$c$;
function LinkedList$c_copy$$a($1k6,$$targs$$,linkedList$){
linkedList$.$1dkeuw$1k0_=null;
linkedList$.$1dkeuw$1k1_=null;
linkedList$.$1dkeuw$1k2_=(0);
var $1k7=$1k6.$1dkeuw$1k0;
$prop$get$1k7={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$cn','copy','$at','iter$vnorsk']};}};
$prop$get$1k7.get=function(){return $1k7};
var $1k8;
while(m$1.nn$(($1k8=$1k7))){
linkedList$.$1dkeuw$1k5($1k8.element);
$1k7=$1k8.rest;
}
return linkedList$;
};
function LinkedList$c_copy($1k6,$$targs$$,linkedList$){
$init$LinkedList();
if(linkedList$===undefined)linkedList$=new LinkedList.$$;
LinkedList$$c($$targs$$,linkedList$);
LinkedList$c_copy$$a($1k6,$$targs$$,linkedList$);
return linkedList$;
};
LinkedList$c_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'linkedList',mt:'prm',$t:{t:LinkedList,a:{Element$LinkedList:'Element$LinkedList'}},an:function(){return[m$1.doc("The `LinkedList` to copy.")];}}],$cont:LinkedList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:LinkedList:$cn:copy')];},d:['ceylon.collection','LinkedList','$cn','copy']};};
LinkedList.LinkedList$c_copy=LinkedList$c_copy;
ex$.LinkedList$c_copy=LinkedList$c_copy;
LinkedList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$LinkedList'}},an:function(){return[m$1.doc("The initial elements of the list.")];}}],tp:{Element$LinkedList:{}},sts:[{t:MutableList,a:{Element$MutableList:'Element$LinkedList'}},{t:Stack,a:{Element$Stack:'Element$LinkedList'}},{t:Queue,a:{Element$Queue:'Element$LinkedList'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:LinkedList'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.collection','LinkedList']};};
ex$.LinkedList=LinkedList;
function $init$LinkedList(){
if(LinkedList.$$===undefined){
m$1.initTypeProto(LinkedList,'ceylon.collection::LinkedList',m$1.Basic,$init$MutableList(),$init$Stack(),$init$Queue());
(function(linkedList$){
m$1.atr$(linkedList$,'$1dkeuw$1k0',function(){return this.$1dkeuw$1k0_;},function($1k9){return this.$1dkeuw$1k0_=$1k9;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','head$hmoq6r']};});
m$1.atr$(linkedList$,'$1dkeuw$1k1',function(){return this.$1dkeuw$1k1_;},function($1ka){return this.$1dkeuw$1k1_=$1ka;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','tail$9m8bs3']};});
m$1.atr$(linkedList$,'$1dkeuw$1k2',function(){return this.$1dkeuw$1k2_;},function($1kb){return this.$1dkeuw$1k2_=$1kb;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','length$5zg48z']};});
linkedList$.$1dkeuw$1k5=function($1kc){
var linkedList$=this;
var $1kd=Cell($1kc,null,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList});
var $1ke;
if(m$1.nn$(($1ke=linkedList$.$1dkeuw$1k1))){
($1ke.rest=$1kd);
linkedList$.$1dkeuw$1k1=$1kd;
}
else{
linkedList$.$1dkeuw$1k1=(linkedList$.$1dkeuw$1k0=$1kd);
}
($1kf=linkedList$.$1dkeuw$1k2,linkedList$.$1dkeuw$1k2=$1kf.successor,$1kf);
var $1kf;
};linkedList$.$1dkeuw$1k5.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,d:['ceylon.collection','LinkedList','$m','addToTail$qbzc49']};};
linkedList$.set=function($1kg,$1kh){
var linkedList$=this;
m$1.asrt$((($1ki=$1kg,$1ki.notSmallerThan((0))&&$1ki.smallerThan(linkedList$.$1dkeuw$1k2))),"Assertion failed: "+"index may not be negative or greater than the\nlast index in the list\n\tviolated 0<=index<length\n\tat LinkedList.ceylon (61:15-61:31)",'59:8-61:32','LinkedList.ceylon');
var $1kj=linkedList$.$1dkeuw$1k0;
var $1kk=(0);
var $1kl;
while(m$1.nn$(($1kl=$1kj))){
if((($1km=$1kk,$1kk=$1km.successor,$1km)==$1kg)){
($1kl.element=$1kh);
return;
}
var $1km;
$1kj=$1kl.rest;
}
};linkedList$.set.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','set']};};
linkedList$.insert=function($1kn,$1ko){
var linkedList$=this;
m$1.asrt$((($1kp=$1kn,$1kp.notSmallerThan((0))&&$1kp.notLargerThan(linkedList$.$1dkeuw$1k2))),"Assertion failed: "+"index may not be negative or greater than the\nlength of the list\n\tviolated 0<=index<=length\n\tat LinkedList.ceylon (77:15-77:32)",'75:8-77:33','LinkedList.ceylon');
if(($1kn==linkedList$.$1dkeuw$1k2)){
linkedList$.add($1ko);
}
else{
if(($1kn==(0))){
linkedList$.$1dkeuw$1k0=Cell($1ko,linkedList$.$1dkeuw$1k0,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList});
($1kq=linkedList$.$1dkeuw$1k2,linkedList$.$1dkeuw$1k2=$1kq.successor,$1kq);
var $1kq;
}
else{
var $1kr=linkedList$.$1dkeuw$1k0;
var $1ks=(0);
var $1kt;
while(m$1.nn$(($1kt=$1kr))){
var $1ku=$1kt.rest;
if((($1ks=$1ks.successor)==$1kn)){
($1kt.rest=Cell($1ko,$1ku,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}));
($1kv=linkedList$.$1dkeuw$1k2,linkedList$.$1dkeuw$1k2=$1kv.successor,$1kv);
var $1kv;
return;
}
$1kr=$1ku;
}
m$1.asrt$((false),"Assertion failed: "+"\n\tviolated false\n\tat LinkedList.ceylon (99:23-99:29)",'99:16-99:30','LinkedList.ceylon');
}
}
};linkedList$.insert.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','insert']};};
linkedList$.insertAll=function($1kw,$1kx){
var linkedList$=this;
m$1.asrt$((($1ky=$1kw,$1ky.notSmallerThan((0))&&$1ky.notLargerThan(linkedList$.$1dkeuw$1k2))),"Assertion failed: "+"index may not be negative or greater than the\nlength of the list\n\tviolated 0<=index<=length\n\tat LinkedList.ceylon (109:15-109:32)",'107:8-109:33','LinkedList.ceylon');
if(($1kw==linkedList$.$1dkeuw$1k2)){
linkedList$.addAll($1kx);
}
else{
var $1kz=m$1.$_Array($1kx,{Element$Array:linkedList$.$$targs$$.Element$LinkedList});
$1kz.reverseInPlace();
if(($1kw==(0))){
linkedList$.$1dkeuw$1k0=$1kz.fold(linkedList$.$1dkeuw$1k0,{Result$fold:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}])})(m$1.jsc$2((function($1l0,$1l1){return Cell($1l1,$1l0,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList});
}),[{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}]}},{nm:'element',mt:'prm',$t:linkedList$.$$targs$$.Element$LinkedList}],{Return$Callable:{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}},Arguments$Callable:{t:m$1.Tuple,a:{Rest$Tuple:m$1.mtt$([linkedList$.$$targs$$.Element$LinkedList]),Element$Tuple:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}},linkedList$.$$targs$$.Element$LinkedList]),First$Tuple:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}])}}}));
(linkedList$.$1dkeuw$1k2=linkedList$.$1dkeuw$1k2+$1kz.size);
}
else{
var $1l2=linkedList$.$1dkeuw$1k0;
var $1l3=(0);
var $1l4;
while(m$1.nn$(($1l4=$1l2))){
var $1l5=$1l4.rest;
if((($1l3=$1l3.successor)==$1kw)){
($1l4.rest=$1kz.fold($1l5,{Result$fold:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}])})(m$1.jsc$2((function($1l6,$1l7){return Cell($1l7,$1l6,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList});
}),[{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}]}},{nm:'element',mt:'prm',$t:linkedList$.$$targs$$.Element$LinkedList}],{Return$Callable:{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}},Arguments$Callable:{t:m$1.Tuple,a:{Rest$Tuple:m$1.mtt$([linkedList$.$$targs$$.Element$LinkedList]),Element$Tuple:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}},linkedList$.$$targs$$.Element$LinkedList]),First$Tuple:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}])}}})));
(linkedList$.$1dkeuw$1k2=linkedList$.$1dkeuw$1k2+$1kz.size);
return;
}
$1l2=$1l5;
}
m$1.asrt$((false),"Assertion failed: "+"\n\tviolated false\n\tat LinkedList.ceylon (135:23-135:29)",'135:16-135:30','LinkedList.ceylon');
}
}
};linkedList$.insertAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$LinkedList'}}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','insertAll']};};
linkedList$.add=function($1l8){var linkedList$=this;
return linkedList$.$1dkeuw$1k5($1l8);
};
linkedList$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','add']};};
linkedList$.addAll=function($1l9){
var linkedList$=this;
var $1lb;for(var $1la=$1l9.iterator();($1lb=$1la.next())!==m$1.finished();){
linkedList$.add($1lb);
}
};linkedList$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$LinkedList'}}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','addAll']};};
linkedList$.$_delete=function($1lc){
var linkedList$=this;
if(($1lc==(0))){
var $1ld;
if(m$1.nn$(($1ld=linkedList$.$1dkeuw$1k0))){
var $1le;
if(m$1.nn$(($1le=$1ld.rest))){
linkedList$.$1dkeuw$1k0=$1le;
}
else{
linkedList$.$1dkeuw$1k0=(linkedList$.$1dkeuw$1k1=null);
}
($1lf=linkedList$.$1dkeuw$1k2,linkedList$.$1dkeuw$1k2=$1lf.predecessor,$1lf);
var $1lf;
return $1ld.element;
}
else{
return null;
}
}
else{
if(($1lg=$1lc,$1lg.largerThan((0))&&$1lg.smallerThan(linkedList$.$1dkeuw$1k2))){
var $1lh=linkedList$.$1dkeuw$1k0;
var $1li=(0);
var $1lj;
while(m$1.nn$(($1lj=$1lh))){
var $1lk=$1lj.rest;
if((($1li=$1li.successor)==$1lc)){
var $1ll;
if(m$1.nn$(($1ll=($1lm=$1lk,m$1.nn$($1lm)?$1lm.rest:null)))){
($1lj.rest=$1ll);
}
else{
linkedList$.$1dkeuw$1k1=$1lj;
($1lj.rest=null);
}
var $1lm;
($1ln=linkedList$.$1dkeuw$1k2,linkedList$.$1dkeuw$1k2=$1ln.predecessor,$1ln);
var $1ln;
return ($1lo=$1lk,m$1.nn$($1lo)?$1lo.element:null);
var $1lo;
}
else{
$1lh=$1lk;
}
}
m$1.asrt$((false),"Assertion failed: "+"\n\tviolated false\n\tat LinkedList.ceylon (187:19-187:25)",'187:12-187:26','LinkedList.ceylon');
}
else{
return null;
}
}
};linkedList$.$_delete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','delete']};};
linkedList$.removeAll=function($1lp){
var linkedList$=this;
var $1lq=($1lr=$1lp,HashSet(undefined,undefined,$1lr,{Element$HashSet:m$1.mit$([linkedList$.$$targs$$.Element$LinkedList,{t:m$1.$_Object}])}));
var $1lr;
var $1ls=(0);
var $1lt,$1lu;
while(m$1.nn$(($1lt=linkedList$.$1dkeuw$1k0))&&m$1.nn$(($1lu=$1lt.element))&&m$1.$cnt$($1lq,$1lu)){
var $1lv;
if(m$1.nn$(($1lv=$1lt.rest))){
linkedList$.$1dkeuw$1k0=$1lv;
}
else{
linkedList$.$1dkeuw$1k0=(linkedList$.$1dkeuw$1k1=null);
}
($1lw=linkedList$.$1dkeuw$1k2,linkedList$.$1dkeuw$1k2=$1lw.predecessor,$1lw);
var $1lw;
($1lx=$1ls,$1ls=$1lx.successor,$1lx);
var $1lx;
}
var $1ly=linkedList$.$1dkeuw$1k0;
var $1lz;
while(m$1.nn$(($1lz=$1ly))){
var $1m0=$1lz.rest;
var $1m1,$1m2;
if(m$1.nn$(($1m1=$1m0))&&m$1.nn$(($1m2=$1m1.element))&&m$1.$cnt$($1lq,$1m2)){
var $1m3;
if(m$1.nn$(($1m3=$1m1.rest))){
($1lz.rest=$1m3);
}
else{
($1lz.rest=(linkedList$.$1dkeuw$1k1=null));
}
($1m4=linkedList$.$1dkeuw$1k2,linkedList$.$1dkeuw$1k2=$1m4.predecessor,$1m4);
var $1m4;
($1m5=$1ls,$1ls=$1m5.successor,$1m5);
var $1m5;
}
else{
$1ly=$1m0;
}
}
return $1ls;
};linkedList$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','removeAll']};};
linkedList$.findAndRemoveFirst=function($1m6){
var linkedList$=this;
var $1m7,$1m8;
if(m$1.nn$(($1m7=linkedList$.$1dkeuw$1k0))&&m$1.nn$(($1m8=$1m7.element))&&$1m6($1m8)){
var $1m9;
if(m$1.nn$(($1m9=$1m7.rest))){
linkedList$.$1dkeuw$1k0=$1m9;
}
else{
linkedList$.$1dkeuw$1k0=(linkedList$.$1dkeuw$1k1=null);
}
($1ma=linkedList$.$1dkeuw$1k2,linkedList$.$1dkeuw$1k2=$1ma.predecessor,$1ma);
var $1ma;
return $1m8;
}
var $1mb=linkedList$.$1dkeuw$1k0;
var $1mc;
while(m$1.nn$(($1mc=$1mb))){
var $1md=$1mc.rest;
var $1me,$1mf;
if(m$1.nn$(($1me=$1md))&&m$1.nn$(($1mf=$1me.element))&&$1m6($1mf)){
var $1mg;
if(m$1.nn$(($1mg=$1me.rest))){
($1mc.rest=$1mg);
}
else{
($1mc.rest=(linkedList$.$1dkeuw$1k1=null));
}
($1mh=linkedList$.$1dkeuw$1k2,linkedList$.$1dkeuw$1k2=$1mh.predecessor,$1mh);
var $1mh;
return $1mf;
}
$1mb=$1md;
}
return null;
};linkedList$.findAndRemoveFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','findAndRemoveFirst']};};
linkedList$.findAndRemoveLast=function($1mi){
var linkedList$=this;
var $1mj;
if(m$1.nn$(($1mj=linkedList$.lastIndexWhere($1mi)))){
return linkedList$.$_delete($1mj);
}
else{
return null;
}
};linkedList$.findAndRemoveLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','findAndRemoveLast']};};
linkedList$.removeWhere=function($1mk){
var linkedList$=this;
var $1ml=(0);
var $1mm,$1mn;
while(m$1.nn$(($1mm=linkedList$.$1dkeuw$1k0))&&m$1.nn$(($1mn=$1mm.element))&&$1mk($1mn)){
var $1mo;
if(m$1.nn$(($1mo=$1mm.rest))){
linkedList$.$1dkeuw$1k0=$1mo;
}
else{
linkedList$.$1dkeuw$1k0=(linkedList$.$1dkeuw$1k1=null);
}
($1mp=linkedList$.$1dkeuw$1k2,linkedList$.$1dkeuw$1k2=$1mp.predecessor,$1mp);
var $1mp;
($1mq=$1ml,$1ml=$1mq.successor,$1mq);
var $1mq;
}
var $1mr=linkedList$.$1dkeuw$1k0;
var $1ms;
while(m$1.nn$(($1ms=$1mr))){
var $1mt=$1ms.rest;
var $1mu,$1mv;
if(m$1.nn$(($1mu=$1mt))&&m$1.nn$(($1mv=$1mu.element))&&$1mk($1mv)){
var $1mw;
if(m$1.nn$(($1mw=$1mu.rest))){
($1ms.rest=$1mw);
}
else{
($1ms.rest=(linkedList$.$1dkeuw$1k1=null));
}
($1mx=linkedList$.$1dkeuw$1k2,linkedList$.$1dkeuw$1k2=$1mx.predecessor,$1mx);
var $1mx;
($1my=$1ml,$1ml=$1my.successor,$1my);
var $1my;
}
else{
$1mr=$1mt;
}
}
return $1ml;
};linkedList$.removeWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','removeWhere']};};
linkedList$.prune=function(){
var linkedList$=this;
var $1mz=linkedList$.$1dkeuw$1k2;
var $1n0;
while(m$1.nn$(($1n0=linkedList$.$1dkeuw$1k0))&&!m$1.nn$($1n0.element)){
var $1n1;
if(m$1.nn$(($1n1=$1n0.rest))){
linkedList$.$1dkeuw$1k0=$1n1;
}
else{
linkedList$.$1dkeuw$1k0=(linkedList$.$1dkeuw$1k1=null);
}
($1n2=linkedList$.$1dkeuw$1k2,linkedList$.$1dkeuw$1k2=$1n2.predecessor,$1n2);
var $1n2;
}
var $1n3=linkedList$.$1dkeuw$1k0;
var $1n4;
while(m$1.nn$(($1n4=$1n3))){
var $1n5=$1n4.rest;
var $1n6;
if(m$1.nn$(($1n6=$1n5))&&!m$1.nn$($1n6.element)){
var $1n7;
if(m$1.nn$(($1n7=$1n6.rest))){
($1n4.rest=$1n7);
}
else{
($1n4.rest=(linkedList$.$1dkeuw$1k1=null));
}
($1n8=linkedList$.$1dkeuw$1k2,linkedList$.$1dkeuw$1k2=$1n8.predecessor,$1n8);
var $1n8;
}
else{
$1n3=$1n5;
}
}
return ($1mz-linkedList$.$1dkeuw$1k2);
};linkedList$.prune.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','prune']};};
linkedList$.findAndReplaceFirst=function($1n9,$1na){
var linkedList$=this;
var $1nb=linkedList$.$1dkeuw$1k0;
var $1nc;
while(m$1.nn$(($1nc=$1nb))){
var $1nd;
if(m$1.nn$(($1nd=$1nc.element))&&$1n9($1nd)){
($1nc.element=$1na);
return $1nd;
}
$1nb=$1nc.rest;
}
return null;
};linkedList$.findAndReplaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','findAndReplaceFirst']};};
linkedList$.findAndReplaceLast=function($1ne,$1nf){
var linkedList$=this;
var $1ng=null;
var $1nh=linkedList$.$1dkeuw$1k0;
var $1ni;
while(m$1.nn$(($1ni=$1nh))){
var $1nj;
if(m$1.nn$(($1nj=$1ni.element))&&$1ne($1nj)){
$1ng=$1ni;
}
$1nh=$1ni.rest;
}
var $1nk;
if(m$1.nn$(($1nk=$1ng))){
var $1nl=$1nk.element;
($1nk.element=$1nf);
return $1nl;
}
else{
return null;
}
};linkedList$.findAndReplaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','findAndReplaceLast']};};
linkedList$.replaceWhere=function($1nm,$1nn){
var linkedList$=this;
var $1no=(0);
var $1np=linkedList$.$1dkeuw$1k0;
var $1nq;
while(m$1.nn$(($1nq=$1np))){
var $1nr;
if(m$1.nn$(($1nr=$1nq.element))&&$1nm($1nr)){
($1nq.element=$1nn);
($1ns=$1no,$1no=$1ns.successor,$1ns);
var $1ns;
}
$1np=$1nq.rest;
}
return $1no;
};linkedList$.replaceWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','replaceWhere']};};
linkedList$.infill=function($1nt){
var linkedList$=this;
var $1nu=linkedList$.$1dkeuw$1k0;
var $1nv;
while(m$1.nn$(($1nv=$1nu))){
if(!m$1.nn$($1nv.element)){
($1nv.element=$1nt);
}
$1nu=$1nv.rest;
}
};linkedList$.infill.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','infill']};};
linkedList$.clear=function(){
var linkedList$=this;
linkedList$.$1dkeuw$1k2=(0);
linkedList$.$1dkeuw$1k0=(linkedList$.$1dkeuw$1k1=null);
};linkedList$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','clear']};};
linkedList$.getFromFirst=function($1nw){
var linkedList$=this;
var $1nx=linkedList$.$1dkeuw$1k0;
var $1ny=(0);
var $1nz;
while(m$1.nn$(($1nz=$1nx))){
if((($1o0=$1ny,$1ny=$1o0.successor,$1o0)==$1nw)){
return $1nz.element;
}
var $1o0;
$1nx=$1nz.rest;
}
return null;
};linkedList$.getFromFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','getFromFirst']};};
linkedList$.spanFrom=function($1o1){
var linkedList$=this;
var $1o2=LinkedList(undefined,{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
var $1o3=linkedList$.$1dkeuw$1k0;
var $1o4=(0);
var $1o5;
while(m$1.nn$(($1o5=$1o3))){
if(($1o4>=$1o1)){
$1o2.add($1o5.element);
}
($1o6=$1o4,$1o4=$1o6.successor,$1o6);
var $1o6;
$1o3=$1o5.rest;
}
return $1o2;
};linkedList$.spanFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$LinkedList'}},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','spanFrom']};};
linkedList$.spanTo=function($1o7){
var linkedList$=this;
var $1o8=LinkedList(undefined,{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
var $1o9=linkedList$.$1dkeuw$1k0;
var $1oa=(0);
var $1ob;
while(m$1.nn$(($1ob=$1o9))){
if(($1oa>$1o7)){
break;
}
$1o8.add($1ob.element);
($1oc=$1oa,$1oa=$1oc.successor,$1oc);
var $1oc;
$1o9=$1ob.rest;
}
return $1o8;
};linkedList$.spanTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$LinkedList'}},ps:[{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','spanTo']};};
linkedList$.span=function($1od,$1oe){
var linkedList$=this;
var $1of=spanToMeasure($1od,$1oe,linkedList$.$1dkeuw$1k2),$1og=$1of.$_get(0),$1oh=$1of.$_get(1),$1oi=$1of.$_get(2);
var $1oj=LinkedList(linkedList$.skip($1og).take($1oh),{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
return ($1ok=($1oi?$1oj.reversed:null),m$1.nn$($1ok)?$1ok:$1oj);
var $1ok;
};linkedList$.span.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$LinkedList'}},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','span']};};
linkedList$.deleteSpan=function($1ol,$1om){
var linkedList$=this;
var $1on=spanToMeasure($1ol,$1om,linkedList$.$1dkeuw$1k2),$1oo=$1on.$_get(0),$1op=$1on.$_get(1),$1oq=$1on.$_get(2);
if((($1oo<linkedList$.$1dkeuw$1k2)&&($1op>(0)))){
var $1or=($1oo>(0));
var $1os=linkedList$.$1dkeuw$1ot(($1oo-(1)),linkedList$.$1dkeuw$1k0);
var $1ou=($1op+($1ov=($1or?(1):null),m$1.nn$($1ov)?$1ov:(0)));
var $1ov;
var $1ow=linkedList$.$1dkeuw$1ot($1ou,($1ox=$1os,m$1.nn$($1ox)?$1ox:linkedList$.$1dkeuw$1k0));
var $1ox;
if(!$1or){
linkedList$.$1dkeuw$1k0=($1oy=$1os,m$1.nn$($1oy)?$1oy:$1ow);
var $1oy;
}
var $1oz;
if(m$1.nn$(($1oz=$1os))){
($1oz.rest=$1ow);
}
if(($1op>=linkedList$.$1dkeuw$1k2)){
linkedList$.$1dkeuw$1k1=null;
}
(linkedList$.$1dkeuw$1k2=linkedList$.$1dkeuw$1k2-$1op);
}
};linkedList$.deleteSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','deleteSpan']};};
linkedList$.$1dkeuw$1ot=function($1p0,$1p1){
var linkedList$=this;
if(($1p0<(0))){
return null;
}
var $1p2=$1p1;
var $1p3;
if(m$1.nn$(($1p3=$1p1))&&($1p0>(0))){
var $1p5=(1),$1p4=$1p0,$1p6=$1p5.compare($1p4),$1p7=$1p6===m$1.smaller()?'successor':'predecessor';for(var $1p8=m$1.eorl$($1p6);$1p8($1p4,$1p5);$1p5=$1p5[$1p7]){
$1p2=($1p9=$1p2,m$1.nn$($1p9)?$1p9.rest:null);
var $1p9;
}
}
return $1p2;
};linkedList$.$1dkeuw$1ot.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},ps:[{nm:'cells',mt:'prm',$t:{t:m$1.Integer}},{nm:'start',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]}}],$cont:LinkedList,d:['ceylon.collection','LinkedList','$m','advanceBy$cg1mjm']};};
linkedList$.measure=function($1pa,$1pb){var linkedList$=this;
return linkedList$.span(($1pc=measureToSpan($1pa,$1pb),$1pc.$_get(0)),$1pc.$_get(1));
};linkedList$.deleteMeasure=function($1pd,$1pe){var linkedList$=this;
return linkedList$.deleteSpan(($1pf=measureToSpan($1pd,$1pe),$1pf.$_get(0)),$1pf.$_get(1));
};linkedList$.defines=function($1pg){var linkedList$=this;
return (($1pg>=(0))&&($1pg<linkedList$.$1dkeuw$1k2));
};linkedList$.contains=function($1ph){
var linkedList$=this;
var $1pi=linkedList$.$1dkeuw$1k0;
var $1pj;
while(m$1.nn$(($1pj=$1pi))){
var $1pk;
if(m$1.nn$(($1pk=$1pj.element))){
if(m$1.$eq$($1pk,$1ph)){
return true;
}
}
$1pi=$1pj.rest;
}
return false;
};linkedList$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','contains']};};
m$1.atr$(linkedList$,'size',function(){
var linkedList$=this;
return linkedList$.$1dkeuw$1k2;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','size']};});
linkedList$.count=function($1pl){
var linkedList$=this;
var $1pm=linkedList$.$1dkeuw$1k0;
var $1pn=(0);
var $1po;
while(m$1.nn$(($1po=$1pm))){
if($1pl($1po.element)){
($1pp=$1pn,$1pn=$1pp.successor,$1pp);
var $1pp;
}
$1pm=$1po.rest;
}
return $1pn;
};linkedList$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:['Element$LinkedList']}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','count']};};
m$1.atr$(linkedList$,'lastIndex',function(){
var linkedList$=this;
return (!linkedList$.empty?(linkedList$.$1dkeuw$1k2-(1)):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','lastIndex']};});
linkedList$.iterator=function(){var linkedList$=this;
return CellIterator(linkedList$.$1dkeuw$1k0,{Element$CellIterator:linkedList$.$$targs$$.Element$LinkedList});
};linkedList$.clone=function(){var linkedList$=this;
return LinkedList$c_copy(linkedList$,{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
};
linkedList$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:LinkedList,a:{Element$LinkedList:'Element$LinkedList'}},ps:[],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','clone']};};
linkedList$.each=function($1pq){
var linkedList$=this;
var $1pr=linkedList$.$1dkeuw$1k0;
var $1ps;
while(m$1.nn$(($1ps=$1pr))){
$1pq($1ps.element);
$1pr=$1ps.rest;
}
};linkedList$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:['Element$LinkedList']}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','each']};};
linkedList$.find=function($1pt){
var linkedList$=this;
var $1pu=linkedList$.$1dkeuw$1k0;
var $1pv;
while(m$1.nn$(($1pv=$1pu))){
var $1pw=$1pv.element;
var $1px;
if(m$1.nn$(($1px=$1pw))&&$1pt($1px)){
return $1px;
}
$1pu=$1pv.rest;
}
return null;
};linkedList$.find.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'elem',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','find']};};
linkedList$.findLast=function($1py){
var linkedList$=this;
var $1pz=null;
var $1q0=linkedList$.$1dkeuw$1k0;
var $1q1;
while(m$1.nn$(($1q1=$1q0))){
var $1q2=$1q1.element;
var $1q3;
if(m$1.nn$(($1q3=$1q2))&&$1py($1q3)){
$1pz=$1q3;
}
$1q0=$1q1.rest;
}
return $1pz;
};linkedList$.findLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'elem',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','findLast']};};
linkedList$.$_every=function($1q4){
var linkedList$=this;
var $1q5=linkedList$.$1dkeuw$1k0;
var $1q6;
while(m$1.nn$(($1q6=$1q5))){
if(!$1q4($1q6.element)){
return false;
}
$1q5=$1q6.rest;
}
return true;
};linkedList$.$_every.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:['Element$LinkedList']}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','every']};};
linkedList$.any=function($1q7){
var linkedList$=this;
var $1q8=linkedList$.$1dkeuw$1k0;
var $1q9;
while(m$1.nn$(($1q9=$1q8))){
if($1q7($1q9.element)){
return true;
}
$1q8=$1q9.rest;
}
return false;
};linkedList$.any.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:['Element$LinkedList']}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','any']};};
linkedList$.$_reduce=function($1qa,$z4x6x1$){
var linkedList$=this;
var $1qb;
if(m$1.nn$(($1qb=linkedList$.$1dkeuw$1k0))){
var $1qc=$1qb.element;
var $1qd=$1qb.rest;
var $1qe;
while(m$1.nn$(($1qe=$1qd))){
$1qc=$1qa($1qc,$1qe.element);
$1qd=$1qe.rest;
}
return $1qc;
}
else{
return null;
}
};linkedList$.$_reduce.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Result$reduce','Element$LinkedList',{t:m$1.Null}]},ps:[{nm:'accumulating',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:'Result$reduce',Arguments$Callable:{t:'T',l:[{t:'u',l:['Result$reduce','Element$LinkedList']},'Element$LinkedList']}}},$rt:'Result$reduce',ps:[{nm:'partial',mt:'prm',$t:{t:'u',l:['Result$reduce','Element$LinkedList']}},{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,tp:{Result$reduce:{}},pa:3,d:['ceylon.collection','LinkedList','$m','reduce']};};
m$1.atr$(linkedList$,'hash',function(){
var linkedList$=this;
var $1qf=(17);
var $1qg=linkedList$.$1dkeuw$1k0;
var $1qh;
while(m$1.nn$(($1qh=$1qg))){
var $1qi;
if(m$1.nn$(($1qi=$1qh.element))){
$1qf=(($1qf*(31))+$1qi.hash);
}
else{
$1qf=($1qf*(31));
}
$1qg=$1qh.rest;
}
return $1qf;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','hash']};});linkedList$.equals=function($1qj){
var linkedList$=this;
var $1qk;
if(m$1.is$(($1qk=$1qj),{t:m$1.List,a:{Element$List:{t:m$1.Anything}}})&&(linkedList$.$1dkeuw$1k2==$1qk.size)){
var $1ql=linkedList$.$1dkeuw$1k0;
var $1qm=$1qk.iterator();
var $1qn;
while(m$1.nn$(($1qn=$1ql))){
var $1qo;
if(!m$1.is$(($1qo=$1qm.next()),{t:m$1.Finished})){
var $1qp=$1qn.element;
var $1qq;
if(m$1.nn$(($1qq=$1qo))){
var $1qr;
if(m$1.nn$(($1qr=$1qp))&&m$1.$eq$($1qr,$1qq)){
$1ql=$1qn.rest;
}
else{
return false;
}
}
else{
var $1qs;
if(m$1.nn$(($1qs=$1qp))){
return false;
}
else{
$1ql=$1qn.rest;
}
}
}
else{
return false;
}
}
return true;
}
return false;
};linkedList$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','equals']};};
linkedList$.truncate=function($1qt){
var linkedList$=this;
m$1.asrt$((($1qt>=(0))),"Assertion failed: "+"\n\tviolated size>=0\n\tat LinkedList.ceylon (838:15-838:23)",'838:8-838:24','LinkedList.ceylon');
if(($1qt==(0))){
linkedList$.$1dkeuw$1k0=(linkedList$.$1dkeuw$1k1=null);
linkedList$.$1dkeuw$1k2=(0);
}
else{
var $1qu=(0);
var $1qv=linkedList$.$1dkeuw$1k0;
var $1qw;
while((($1qu=$1qu.successor)<$1qt)&&m$1.nn$(($1qw=$1qv))){
$1qv=$1qw.rest;
}
var $1qx;
if(m$1.nn$(($1qx=$1qv))){
($1qx.rest=null);
linkedList$.$1dkeuw$1k1=$1qx;
linkedList$.$1dkeuw$1k2=$1qt;
}
}
};linkedList$.truncate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','truncate']};};
linkedList$.firstIndexWhere=function($1qy){
var linkedList$=this;
var $1qz=(0);
var $1r1;for(var $1r0=linkedList$.iterator();($1r1=$1r0.next())!==m$1.finished();){
var $1r2;
if(m$1.nn$(($1r2=$1r1))&&$1qy($1r2)){
return $1qz;
}
($1r3=$1qz,$1qz=$1r3.successor,$1r3);
var $1r3;
}
return null;
};linkedList$.firstIndexWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','firstIndexWhere']};};
linkedList$.lastIndexWhere=function($1r4){
var linkedList$=this;
var $1r5=(0);
var $1r6=null;
var $1r8;for(var $1r7=linkedList$.iterator();($1r8=$1r7.next())!==m$1.finished();){
var $1r9;
if(m$1.nn$(($1r9=$1r8))&&$1r4($1r9)){
$1r6=$1r5;
}
($1ra=$1r5,$1r5=$1ra.successor,$1ra);
var $1ra;
}
return $1r6;
};linkedList$.lastIndexWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','lastIndexWhere']};};
linkedList$.collect=function($1rb,$ljywq3$){var linkedList$=this;
return m$1.tpl$([],m$1.for$(function(){
var $1rc=linkedList$.iterator(),$1rd=m$1.finished();
var n$1rd=function(){return $1rd=$1rc.next();}
return function(){
if(n$1rd()!==m$1.finished()){
var $1re=$1rd,$1rf=$1rb($1re);
return $1rf;
}
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:$ljywq3$.Result$collect/*ORALE!Result inv pero Element var*/}));
};
linkedList$.collect.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:'Result$collect'}},ps:[{nm:'collecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:'Result$collect',Arguments$Callable:{t:'T',l:['Element$LinkedList']}}},$rt:'Result$collect',ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,tp:{Result$collect:{}},pa:3,d:['ceylon.collection','LinkedList','$m','collect']};};
m$1.atr$(linkedList$,'first',function(){
var linkedList$=this;
return ($1rg=linkedList$.$1dkeuw$1k0,m$1.nn$($1rg)?$1rg.element:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','first']};});
m$1.atr$(linkedList$,'last',function(){
var linkedList$=this;
return ($1rh=linkedList$.$1dkeuw$1k1,m$1.nn$($1rh)?$1rh.element:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','last']};});
linkedList$.$_push=function($1ri){var linkedList$=this;
return linkedList$.insert(0,$1ri);
};linkedList$.$_pop=function(){var linkedList$=this;
return linkedList$.deleteFirst();
};m$1.atr$(linkedList$,'top',function(){
var linkedList$=this;
return linkedList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','top']};});
linkedList$.offer=function($1rj){var linkedList$=this;
return linkedList$.add($1rj);
};linkedList$.accept=function(){var linkedList$=this;
return linkedList$.deleteFirst();
};m$1.atr$(linkedList$,'back',function(){
var linkedList$=this;
return linkedList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','back']};});
m$1.atr$(linkedList$,'front',function(){
var linkedList$=this;
return linkedList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','front']};});
linkedList$.sequence=function(){var linkedList$=this;
return m$1.$_Array(linkedList$,{Element$Array:linkedList$.$$targs$$.Element$LinkedList}).sequence();
};linkedList$.toString=function(){return this.string.valueOf();};
})(LinkedList.$$.prototype);
}
return LinkedList;
}
ex$.$init$LinkedList=$init$LinkedList;$init$LinkedList();LinkedList.inst$$=function($1rk){
var linkedList$=new LinkedList.$$;
m$1.set_type_args(linkedList$,{Element$LinkedList:$1rk.$$targs$$.Type$Class.a.Element$LinkedList});
m$1.set_type_args(linkedList$,{Element$MutableList:linkedList$.$$targs$$.Element$LinkedList,Element$List:linkedList$.$$targs$$.Element$LinkedList,Element$Collection:linkedList$.$$targs$$.Element$LinkedList,Absent$Iterable:{t:m$1.Null},Element$Iterable:linkedList$.$$targs$$.Element$LinkedList,Element$Category:{t:m$1.$_Object},Item$Correspondence:linkedList$.$$targs$$.Element$LinkedList,Key$Correspondence:{t:m$1.Integer},Element$Ranged:linkedList$.$$targs$$.Element$LinkedList,Subrange$Ranged:{t:m$1.List,a:{Element$List:linkedList$.$$targs$$.Element$LinkedList/*ORALE!Element inv pero Element var*/}},Index$Ranged:{t:m$1.Integer},Element$ListMutator:linkedList$.$$targs$$.Element$LinkedList,Element$IndexedCorrespondenceMutator:linkedList$.$$targs$$.Element$LinkedList,Item$CorrespondenceMutator:linkedList$.$$targs$$.Element$LinkedList,Element$Stack:linkedList$.$$targs$$.Element$LinkedList,Element$Queue:linkedList$.$$targs$$.Element$LinkedList});
return linkedList$;
};
LinkedList.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::LinkedList.head')return o.$1dkeuw$1k0_;
else if(n==='ceylon.collection::LinkedList.tail')return o.$1dkeuw$1k1_;
else if(n==='ceylon.collection::LinkedList.length')return o.$1dkeuw$1k2_;
else throw new TypeError('unknown attribute');
};
LinkedList.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::LinkedList.head')o.$1dkeuw$1k0_=i;
else if(n==='ceylon.collection::LinkedList.tail')o.$1dkeuw$1k1_=i;
else if(n==='ceylon.collection::LinkedList.length')o.$1dkeuw$1k2_=i;
else throw new TypeError('unknown attribute');
};
LinkedList.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1k0)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1k1)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1k2))];
};
var $1rg,$1rh;
function MutableList($$targs$$,mutableList$){
m$1.set_type_args(mutableList$,$$targs$$,MutableList);
m$1.List({Element$List:$$targs$$.Element$MutableList/*ORALE!Element inv pero Element var*/},mutableList$);
ListMutator({Element$ListMutator:$$targs$$.Element$MutableList/*ORALE!Element inv pero Element var*/},mutableList$);
}
MutableList.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$MutableList:{def:{t:m$1.Anything}}},sts:[{t:m$1.List,a:{Element$List:'Element$MutableList'}},{t:ListMutator,a:{Element$ListMutator:'Element$MutableList'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),LinkedList),m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),ArrayList)],{t:m$1.ClassWithConstructorsDeclaration$meta$declaration})),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.collection','MutableList']};};
ex$.MutableList=MutableList;
function $init$MutableList(){
if(MutableList.$$===undefined){
m$1.initTypeProtoI(MutableList,'ceylon.collection::MutableList',m$1.List,$init$ListMutator());
(function(mutableList$){
mutableList$.$_delete={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:MutableList,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:delete')];},d:['ceylon.collection','MutableList','$m','delete']};}};mutableList$.deleteFirst=function(){var mutableList$=this;
return mutableList$.$_delete(0);
};
mutableList$.deleteFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[],$cont:MutableList,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:deleteFirst')];},d:['ceylon.collection','MutableList','$m','deleteFirst']};};
mutableList$.deleteLast=function(){var mutableList$=this;
return mutableList$.$_delete((mutableList$.size-(1)));
};
mutableList$.deleteLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[],$cont:MutableList,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:deleteLast')];},d:['ceylon.collection','MutableList','$m','deleteLast']};};
mutableList$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:MutableList,a:{Element$MutableList:'Element$MutableList'}},ps:[],$cont:MutableList,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:clone')];},d:['ceylon.collection','MutableList','$m','clone']};}};mutableList$.swap=function($1rl,$1rm){
var mutableList$=this;
m$1.asrt$((($1rn=$1rl,$1rn.notSmallerThan((0))&&$1rn.smallerThan(mutableList$.size))&&($1ro=$1rm,$1ro.notSmallerThan((0))&&$1ro.smallerThan(mutableList$.size))),"Assertion failed: "+"index may not be negative or greater than the\nlast index in the list\n\tviolated 0<=i<size, 0<=j<size\n\tat MutableList.ceylon (30:15-30:36)",'28:8-30:37','MutableList.ceylon');
if(!m$1.$eq$($1rl,$1rm)){
var $1rp,$1rq;
m$1.asrt$((m$1.is$(($1rp=mutableList$.getFromFirst($1rl)),mutableList$.$$targs$$.Element$MutableList)&&m$1.is$(($1rq=mutableList$.getFromFirst($1rm)),mutableList$.$$targs$$.Element$MutableList)),"Assertion failed: "+"\n\tviolated is Element x = getFromFirst(i),\n                    is Element y = getFromFirst(j)\n\tat MutableList.ceylon (32:19-33:50)",'32:12-33:51','MutableList.ceylon');
mutableList$.set($1rl,$1rq);
mutableList$.set($1rm,$1rp);
}
};mutableList$.swap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','swap']};};
mutableList$.move=function($1rr,$1rs){
var mutableList$=this;
m$1.asrt$((($1rt=$1rr,$1rt.notSmallerThan((0))&&$1rt.smallerThan(mutableList$.size))&&($1ru=$1rs,$1ru.notSmallerThan((0))&&$1ru.smallerThan(mutableList$.size))),"Assertion failed: "+"index may not be negative or greater than the\nlast index in the list\n\tviolated 0<=i<size, 0<=j<size\n\tat MutableList.ceylon (42:15-42:36)",'40:8-42:37','MutableList.ceylon');
if(!m$1.$eq$($1rr,$1rs)){
var $1rv;
m$1.asrt$((m$1.is$(($1rv=mutableList$.$_delete($1rr)),mutableList$.$$targs$$.Element$MutableList)),"Assertion failed: "+"\n\tviolated is Element x = delete(i)\n\tat MutableList.ceylon (44:19-44:44)",'44:12-44:45','MutableList.ceylon');
mutableList$.insert($1rs,$1rv);
}
};mutableList$.move.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','move']};};
mutableList$.removeWhere=function($1rw){
var mutableList$=this;
var $1rx=(0);
var $1ry=(0);
while(($1rx<mutableList$.size)){
var $1rz;
if(m$1.nn$(($1rz=mutableList$.getFromFirst($1rx)))&&$1rw($1rz)){
mutableList$.$_delete($1rx);
($1s0=$1ry,$1ry=$1s0.successor,$1s0);
var $1s0;
}
else{
($1s1=$1rx,$1rx=$1s1.successor,$1s1);
var $1s1;
}
}
return $1ry;
};mutableList$.removeWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:removeWhere')];},d:['ceylon.collection','MutableList','$m','removeWhere']};};
mutableList$.prune=function(){
var mutableList$=this;
var $1s2=(0);
var $1s3=(0);
while(($1s2<mutableList$.size)){
if(!m$1.nn$(mutableList$.getFromFirst($1s2))){
($1s4=$1s3,$1s3=$1s4.successor,$1s4);
var $1s4;
mutableList$.$_delete($1s2);
}
else{
($1s5=$1s2,$1s2=$1s5.successor,$1s5);
var $1s5;
}
}
return $1s3;
};mutableList$.prune.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','prune']};};
mutableList$.remove=function($1s6){var mutableList$=this;
return mutableList$.removeWhere(m$1.jsc$2(($1s7=$1s6,m$1.jsc$3($1s7,$1s7.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}));
var $1s7;
};
mutableList$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','remove']};};
mutableList$.findAndRemoveFirst=function($1s8){
var mutableList$=this;
var $1s9;
if(m$1.nn$(($1s9=mutableList$.firstIndexWhere($1s8)))){
return mutableList$.$_delete($1s9);
}
else{
return null;
}
};mutableList$.findAndRemoveFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:findAndRemoveFirst')];},d:['ceylon.collection','MutableList','$m','findAndRemoveFirst']};};
mutableList$.removeFirst=function($1sa){var mutableList$=this;
return m$1.nn$(mutableList$.findAndRemoveFirst(m$1.jsc$2(($1sb=$1sa,m$1.jsc$3($1sb,$1sb.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{})));
var $1sb;
};
mutableList$.removeFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','removeFirst']};};
mutableList$.findAndRemoveLast=function($1sc){
var mutableList$=this;
var $1sd;
if(m$1.nn$(($1sd=mutableList$.lastIndexWhere($1sc)))){
return mutableList$.$_delete($1sd);
}
else{
return null;
}
};mutableList$.findAndRemoveLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:findAndRemoveLast')];},d:['ceylon.collection','MutableList','$m','findAndRemoveLast']};};
mutableList$.removeLast=function($1se){var mutableList$=this;
return m$1.nn$(mutableList$.findAndRemoveLast(m$1.jsc$2(($1sf=$1se,m$1.jsc$3($1sf,$1sf.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{})));
var $1sf;
};
mutableList$.removeLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','removeLast']};};
mutableList$.replaceWhere=function($1sg,$1sh){
var mutableList$=this;
var $1si=(0);
var $1sj=(0);
while(($1si<mutableList$.size)){
var $1sk;
if(m$1.nn$(($1sk=mutableList$.getFromFirst($1si)))&&$1sg($1sk)){
mutableList$.set($1si,$1sh);
($1sl=$1sj,$1sj=$1sl.successor,$1sl);
var $1sl;
}
($1sm=$1si,$1si=$1sm.successor,$1sm);
var $1sm;
}
return $1sj;
};mutableList$.replaceWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:replaceWhere')];},d:['ceylon.collection','MutableList','$m','replaceWhere']};};
mutableList$.infill=function($1sn){
var mutableList$=this;
var $1so=(0);
while(($1so<mutableList$.size)){
if(!m$1.nn$(mutableList$.getFromFirst($1so))){
mutableList$.set($1so,$1sn);
}
($1sp=$1so,$1so=$1sp.successor,$1sp);
var $1sp;
}
};mutableList$.infill.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','infill']};};
mutableList$.$_replace=function($1sq,$1sr){var mutableList$=this;
return mutableList$.replaceWhere(m$1.jsc$2(($1ss=$1sq,m$1.jsc$3($1ss,$1ss.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}),$1sr);
var $1ss;
};
mutableList$.$_replace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','replace']};};
mutableList$.findAndReplaceFirst=function($1st,$1su){
var mutableList$=this;
var $1sv;
if(m$1.nn$(($1sv=mutableList$.firstIndexWhere($1st)))){
var $1sw=mutableList$.getFromFirst($1sv);
mutableList$.set($1sv,$1su);
return $1sw;
}
else{
return null;
}
};mutableList$.findAndReplaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:findAndReplaceFirst')];},d:['ceylon.collection','MutableList','$m','findAndReplaceFirst']};};
mutableList$.replaceFirst=function($1sx,$1sy){var mutableList$=this;
return m$1.nn$(mutableList$.findAndReplaceFirst(m$1.jsc$2(($1sz=$1sx,m$1.jsc$3($1sz,$1sz.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}),$1sy));
var $1sz;
};
mutableList$.replaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','replaceFirst']};};
mutableList$.findAndReplaceLast=function($1t0,$1t1){
var mutableList$=this;
var $1t2;
if(m$1.nn$(($1t2=mutableList$.lastIndexWhere($1t0)))){
var $1t3=mutableList$.getFromFirst($1t2);
mutableList$.set($1t2,$1t1);
return $1t3;
}
else{
return null;
}
};mutableList$.findAndReplaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:findAndReplaceLast')];},d:['ceylon.collection','MutableList','$m','findAndReplaceLast']};};
mutableList$.replaceLast=function($1t4,$1t5){var mutableList$=this;
return m$1.nn$(mutableList$.findAndReplaceLast(m$1.jsc$2(($1t6=$1t4,m$1.jsc$3($1t6,$1t6.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}),$1t5));
var $1t6;
};
mutableList$.replaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','replaceLast']};};
mutableList$.toString=function(){return this.string.valueOf();};
})(MutableList.$$.prototype);
}
return MutableList;
}
ex$.$init$MutableList=$init$MutableList;$init$MutableList();
function ListMutator($$targs$$,listMutator$){
m$1.set_type_args(listMutator$,$$targs$$,ListMutator);
m$1.IndexedCorrespondenceMutator({Element$IndexedCorrespondenceMutator:$$targs$$.Element$ListMutator},listMutator$);
m$1.List({Element$List:{t:m$1.Anything}},listMutator$);
}
ListMutator.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$ListMutator:{dv:'in',def:{t:m$1.Anything}}},sts:[{t:m$1.List,a:{Element$List:{t:m$1.Anything}}},{t:m$1.IndexedCorrespondenceMutator,a:{Element$IndexedCorrespondenceMutator:'Element$ListMutator'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),MutableList)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.collection','ListMutator']};};
ex$.ListMutator=ListMutator;
function $init$ListMutator(){
if(ListMutator.$$===undefined){
m$1.initTypeProtoI(ListMutator,'ceylon.collection::ListMutator',m$1.IndexedCorrespondenceMutator,m$1.List);
(function(listMutator$){
listMutator$.add={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:add')];},d:['ceylon.collection','ListMutator','$m','add']};}};listMutator$.addAll=function($1t7){
var listMutator$=this;
var $1t9;for(var $1t8=$1t7.iterator();($1t9=$1t8.next())!==m$1.finished();){
listMutator$.add($1t9);
}
};listMutator$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$ListMutator'}}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:addAll')];},d:['ceylon.collection','ListMutator','$m','addAll']};};
listMutator$.set={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:set'),m$1.$_throws("AssertionError","if the given index is out of bounds, that\nis, if `index<0` or if `index>lastIndex`")];},d:['ceylon.collection','ListMutator','$m','set']};}};listMutator$.insert={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:insert'),m$1.$_throws("AssertionError","if the given index is out of bounds, that\nis, if `index<0` or if `index>lastIndex+1`")];},d:['ceylon.collection','ListMutator','$m','insert']};}};listMutator$.insertAll=function($1ta,$1tb){
var listMutator$=this;
var $1tc=$1ta;
var $1te;for(var $1td=$1tb.iterator();($1te=$1td.next())!==m$1.finished();){
listMutator$.insert(($1tf=$1tc,$1tc=$1tf.successor,$1tf),$1te);
var $1tf;
}
};listMutator$.insertAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$ListMutator'}}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:insertAll'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.3.2','$'),m$1.AssertionError),"if the given index is out of bounds, that\nis, if `index<0` or if `index>lastIndex+1`")];},d:['ceylon.collection','ListMutator','$m','insertAll']};};
listMutator$.$_delete={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:delete')];},d:['ceylon.collection','ListMutator','$m','delete']};}};listMutator$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:remove')];},d:['ceylon.collection','ListMutator','$m','remove']};}};listMutator$.removeAll=function($1tg){
var listMutator$=this;
var $1th=(0);
var $1tj;for(var $1ti=$1tg.iterator();($1tj=$1ti.next())!==m$1.finished();){
($1th=$1th+listMutator$.remove($1tj));
}
return $1th;
};listMutator$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}}}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:removeAll')];},d:['ceylon.collection','ListMutator','$m','removeAll']};};
listMutator$.removeFirst={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:removeFirst')];},d:['ceylon.collection','ListMutator','$m','removeFirst']};}};listMutator$.removeLast={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:removeLast')];},d:['ceylon.collection','ListMutator','$m','removeLast']};}};listMutator$.prune={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:prune')];},d:['ceylon.collection','ListMutator','$m','prune']};}};listMutator$.$_replace={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:replace')];},d:['ceylon.collection','ListMutator','$m','replace']};}};listMutator$.replaceFirst={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:replaceFirst')];},d:['ceylon.collection','ListMutator','$m','replaceFirst']};}};listMutator$.replaceLast={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:replaceLast')];},d:['ceylon.collection','ListMutator','$m','replaceLast']};}};listMutator$.infill={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:infill')];},d:['ceylon.collection','ListMutator','$m','infill']};}};listMutator$.swap={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:swap'),m$1.$_throws("AssertionError","if either of the given indices is out of bounds")];},d:['ceylon.collection','ListMutator','$m','swap']};}};listMutator$.move={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:move'),m$1.$_throws("AssertionError","if either of the given indices is out of bounds")];},d:['ceylon.collection','ListMutator','$m','move']};}};listMutator$.clear=function(){var listMutator$=this;
return listMutator$.deleteMeasure(0,listMutator$.size);
};
listMutator$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:clear')];},d:['ceylon.collection','ListMutator','$m','clear']};};
listMutator$.deleteFirst=function(){var listMutator$=this;
return listMutator$.$_delete(0);
};
listMutator$.deleteFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteFirst')];},d:['ceylon.collection','ListMutator','$m','deleteFirst']};};
listMutator$.deleteLast=function(){var listMutator$=this;
return listMutator$.$_delete((listMutator$.size-(1)));
};
listMutator$.deleteLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteLast')];},d:['ceylon.collection','ListMutator','$m','deleteLast']};};
listMutator$.deleteSpan=function($1tk,$1tl){var listMutator$=this;
return ($1tm=smallest($1tk,$1tl),$1tn=(($1tl-$1tk).magnitude+(1)),listMutator$.deleteMeasure($1tm,$1tn));
var $1tm,$1tn;
};
listMutator$.deleteSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteSpan')];},d:['ceylon.collection','ListMutator','$m','deleteSpan']};};
listMutator$.deleteMeasure=function($1to,$1tp){
var listMutator$=this;
if(($1to<(0))){
($1tp=$1tp+$1to);
$1to=(0);
}
$1tp=smallest($1tp,(listMutator$.size-$1to));
while((($1tq=$1tp,$1tp=$1tq.predecessor,$1tq)>(0))){
listMutator$.$_delete($1to);
}
var $1tq;
};listMutator$.deleteMeasure.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer},pa:9},{nm:'length',mt:'prm',$t:{t:m$1.Integer},pa:9}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteMeasure')];},d:['ceylon.collection','ListMutator','$m','deleteMeasure']};};
listMutator$.truncate=function($1tr){
var listMutator$=this;
m$1.asrt$((($1tr>=(0))),"Assertion failed: "+"\n\tviolated size >= 0\n\tat MutableList.ceylon (425:15-425:25)",'425:8-425:26','MutableList.ceylon');
listMutator$.deleteMeasure($1tr,(listMutator$.size-$1tr));
};listMutator$.truncate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:truncate'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.3.2','$'),m$1.AssertionError),"if `size<0`")];},d:['ceylon.collection','ListMutator','$m','truncate']};};
listMutator$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:ListMutator,a:{Element$ListMutator:'Element$ListMutator'}},ps:[],$cont:ListMutator,pa:7,d:['ceylon.collection','ListMutator','$m','clone']};}};listMutator$.toString=function(){return this.string.valueOf();};
})(ListMutator.$$.prototype);
}
return ListMutator;
}
ex$.$init$ListMutator=$init$ListMutator;$init$ListMutator();
function measureToSpan($1ts,$1tt){return ($1tu=(($1tt<=(0))?m$1.tpl$([(-1),(-1)]):null),m$1.nn$($1tu)?$1tu:m$1.tpl$([$1ts,(($1ts+$1tt)-(1))]));
var $1tu;
};
measureToSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer}]},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'length',mt:'prm',$t:{t:m$1.Integer}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:measureToSpan')];},d:['ceylon.collection','measureToSpan']};};
function spanToMeasure($1tv,$1tw,$1tx){
if((($1tx==(0))||(($1tv<(0))&&($1tw<(0))))){
return m$1.tpl$([0,0,false]);
}
var $1ty=($1tv>$1tw);
var $1tz=largest(0,($1u0=($1ty?$1tw:null),m$1.nn$($1u0)?$1u0:$1tv));
var $1u0;
var $1u1=smallest(($1tx-(1)),($1u2=($1ty?$1tv:null),m$1.nn$($1u2)?$1u2:$1tw));
var $1u2;
return m$1.tpl$([$1tz,(((1)+$1u1)-$1tz),$1ty]);
};spanToMeasure.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.$_Boolean}]},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}},{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:spanToMeasure')];},d:['ceylon.collection','spanToMeasure']};};
function largest($1u3,$1u4){return ($1u5=(($1u3>$1u4)?$1u3:null),m$1.nn$($1u5)?$1u5:$1u4);
var $1u5;
};
largest.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],d:['ceylon.collection','largest']};};
function smallest($1u6,$1u7){return ($1u8=(($1u6<$1u7)?$1u6:null),m$1.nn$($1u8)?$1u8:$1u7);
var $1u8;
};
smallest.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],d:['ceylon.collection','smallest']};};
function MutableMap($$targs$$,mutableMap$){
m$1.set_type_args(mutableMap$,$$targs$$,MutableMap);
m$1.Map({Key$Map:$$targs$$.Key$MutableMap/*ORALE!Key inv pero Key var*/,Item$Map:$$targs$$.Item$MutableMap/*ORALE!Item inv pero Item var*/},mutableMap$);
MapMutator({Item$MapMutator:$$targs$$.Item$MutableMap/*ORALE!Item inv pero Item var*/,Key$MapMutator:$$targs$$.Key$MutableMap/*ORALE!Key inv pero Key var*/},mutableMap$);
}
MutableMap.$crtmm$=function(){return{mod:$CCMM$,tp:{Key$MutableMap:{sts:[{t:m$1.$_Object}],def:{t:m$1.$_Object}},Item$MutableMap:{def:{t:m$1.Anything}}},sts:[{t:m$1.Map,a:{Key$Map:'Key$MutableMap',Item$Map:'Item$MutableMap'}},{t:MapMutator,a:{Item$MapMutator:'Item$MutableMap',Key$MapMutator:'Key$MutableMap'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableMap'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),HashMap)],{t:m$1.ClassWithConstructorsDeclaration$meta$declaration})),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.collection','MutableMap']};};
ex$.MutableMap=MutableMap;
function $init$MutableMap(){
if(MutableMap.$$===undefined){
m$1.initTypeProtoI(MutableMap,'ceylon.collection::MutableMap',m$1.Map,$init$MapMutator());
(function(mutableMap$){
mutableMap$.put={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$MutableMap']},ps:[{nm:'key',mt:'prm',$t:'Key$MutableMap'},{nm:'item',mt:'prm',$t:'Item$MutableMap'}],$cont:MutableMap,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableMap:$m:put')];},d:['ceylon.collection','MutableMap','$m','put']};}};mutableMap$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$MutableMap']},ps:[{nm:'key',mt:'prm',$t:'Key$MutableMap'}],$cont:MutableMap,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableMap:$m:remove')];},d:['ceylon.collection','MutableMap','$m','remove']};}};mutableMap$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:MutableMap,a:{Key$MutableMap:'Key$MutableMap',Item$MutableMap:'Item$MutableMap'}},ps:[],$cont:MutableMap,pa:7,d:['ceylon.collection','MutableMap','$m','clone']};}};mutableMap$.toString=function(){return this.string.valueOf();};
})(MutableMap.$$.prototype);
}
return MutableMap;
}
ex$.$init$MutableMap=$init$MutableMap;$init$MutableMap();
function MapMutator($$targs$$,mapMutator$){
m$1.set_type_args(mapMutator$,$$targs$$,MapMutator);
m$1.KeyedCorrespondenceMutator({Key$KeyedCorrespondenceMutator:$$targs$$.Key$MapMutator,Item$KeyedCorrespondenceMutator:$$targs$$.Item$MapMutator},mapMutator$);
m$1.Map({Key$Map:{t:m$1.$_Object},Item$Map:{t:m$1.Anything}},mapMutator$);
}
MapMutator.$crtmm$=function(){return{mod:$CCMM$,tp:{Key$MapMutator:{dv:'in',sts:[{t:m$1.$_Object}],def:{t:m$1.$_Object}},Item$MapMutator:{dv:'in',def:{t:m$1.Anything}}},sts:[{t:m$1.Map,a:{Key$Map:{t:m$1.$_Object},Item$Map:{t:m$1.Anything}}},{t:m$1.KeyedCorrespondenceMutator,a:{Key$KeyedCorrespondenceMutator:'Key$MapMutator',Item$KeyedCorrespondenceMutator:'Item$MapMutator'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),MutableMap)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.collection','MapMutator']};};
ex$.MapMutator=MapMutator;
function $init$MapMutator(){
if(MapMutator.$$===undefined){
m$1.initTypeProtoI(MapMutator,'ceylon.collection::MapMutator',m$1.KeyedCorrespondenceMutator,m$1.Map);
(function(mapMutator$){
mapMutator$.put={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'},{nm:'item',mt:'prm',$t:'Item$MapMutator'}],$cont:MapMutator,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:put')];},d:['ceylon.collection','MapMutator','$m','put']};}};mapMutator$.putAll=function($1u9){
var mapMutator$=this;
var $1ub;for(var $1ua=$1u9.iterator();($1ub=$1ua.next())!==m$1.finished();){
var $1uc=$1ub.key,$1ud=$1ub.item;
mapMutator$.put($1uc,$1ud);
}
};mapMutator$.putAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$MapMutator',Item$Entry:'Item$MapMutator'}}}}}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:putAll')];},d:['ceylon.collection','MapMutator','$m','putAll']};};
mapMutator$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'}],$cont:MapMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:remove')];},d:['ceylon.collection','MapMutator','$m','remove']};}};mapMutator$.removeEntry=function($1ue,$1uf){
var mapMutator$=this;
var $1ug;
if(m$1.nn$(($1ug=mapMutator$.$_get($1ue)))&&m$1.$eq$($1ug,$1uf)){
mapMutator$.remove($1ue);
return true;
}
else{
return false;
}
};mapMutator$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$MapMutator',{t:m$1.$_Object}]}}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:removeEntry')];},d:['ceylon.collection','MapMutator','$m','removeEntry']};};
mapMutator$.replaceEntry=function($1uh,$1ui,$1uj){
var mapMutator$=this;
var $1uk;
if(m$1.nn$(($1uk=mapMutator$.$_get($1uh)))&&m$1.$eq$($1uk,$1ui)){
mapMutator$.put($1uh,$1ui);
return true;
}
else{
return false;
}
};mapMutator$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$MapMutator',{t:m$1.$_Object}]}},{nm:'newItem',mt:'prm',$t:'Item$MapMutator'}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:replaceEntry')];},d:['ceylon.collection','MapMutator','$m','replaceEntry']};};
mapMutator$.removeAll=function($1ul){
var mapMutator$=this;
var $1un;for(var $1um=$1ul.iterator();($1un=$1um.next())!==m$1.finished();){
mapMutator$.remove($1un);
}
};mapMutator$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'keys',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Key$MapMutator'}}}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:removeAll')];},d:['ceylon.collection','MapMutator','$m','removeAll']};};
mapMutator$.clear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:MapMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:clear')];},d:['ceylon.collection','MapMutator','$m','clear']};}};mapMutator$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:MapMutator,a:{Item$MapMutator:'Item$MapMutator',Key$MapMutator:'Key$MapMutator'}},ps:[],$cont:MapMutator,pa:7,d:['ceylon.collection','MapMutator','$m','clone']};}};mapMutator$.toString=function(){return this.string.valueOf();};
})(MapMutator.$$.prototype);
}
return MapMutator;
}
ex$.$init$MapMutator=$init$MapMutator;$init$MapMutator();
function MutableSet($$targs$$,mutableSet$){
m$1.set_type_args(mutableSet$,$$targs$$,MutableSet);
m$1.Set({Element$Set:$$targs$$.Element$MutableSet/*ORALE!Element inv pero Element var*/},mutableSet$);
SetMutator({Element$SetMutator:$$targs$$.Element$MutableSet/*ORALE!Element inv pero Element var*/},mutableSet$);
}
MutableSet.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$MutableSet:{sts:[{t:m$1.$_Object}],def:{t:m$1.$_Object}}},sts:[{t:m$1.Set,a:{Element$Set:'Element$MutableSet'}},{t:SetMutator,a:{Element$SetMutator:'Element$MutableSet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableSet'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String})),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),HashSet)],{t:m$1.ClassWithConstructorsDeclaration$meta$declaration}))];},d:['ceylon.collection','MutableSet']};};
ex$.MutableSet=MutableSet;
function $init$MutableSet(){
if(MutableSet.$$===undefined){
m$1.initTypeProtoI(MutableSet,'ceylon.collection::MutableSet',m$1.Set,$init$SetMutator());
(function(mutableSet$){
mutableSet$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:MutableSet,a:{Element$MutableSet:'Element$MutableSet'}},ps:[],$cont:MutableSet,pa:7,d:['ceylon.collection','MutableSet','$m','clone']};}};mutableSet$.toString=function(){return this.string.valueOf();};
})(MutableSet.$$.prototype);
}
return MutableSet;
}
ex$.$init$MutableSet=$init$MutableSet;$init$MutableSet();
function SetMutator($$targs$$,setMutator$){
m$1.set_type_args(setMutator$,$$targs$$,SetMutator);
m$1.Set({Element$Set:{t:m$1.$_Object}},setMutator$);
}
SetMutator.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$SetMutator:{dv:'in',sts:[{t:m$1.$_Object}],def:{t:m$1.$_Object}}},sts:[{t:m$1.Set,a:{Element$Set:{t:m$1.$_Object}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),MutableSet)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.collection','SetMutator']};};
ex$.SetMutator=SetMutator;
function $init$SetMutator(){
if(SetMutator.$$===undefined){
m$1.initTypeProtoI(SetMutator,'ceylon.collection::SetMutator',m$1.Set);
(function(setMutator$){
setMutator$.add={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$SetMutator'}],$cont:SetMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:add')];},d:['ceylon.collection','SetMutator','$m','add']};}};setMutator$.addAll=function($1uo){
var setMutator$=this;
var $1up=false;
var $1ur;for(var $1uq=$1uo.iterator();($1ur=$1uq.next())!==m$1.finished();){
if(setMutator$.add($1ur)){
$1up=true;
}
}
return $1up;
};setMutator$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$SetMutator'}}}],$cont:SetMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:addAll')];},d:['ceylon.collection','SetMutator','$m','addAll']};};
setMutator$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$SetMutator'}],$cont:SetMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:remove')];},d:['ceylon.collection','SetMutator','$m','remove']};}};setMutator$.removeAll=function($1us){
var setMutator$=this;
var $1ut=false;
var $1uv;for(var $1uu=$1us.iterator();($1uv=$1uu.next())!==m$1.finished();){
if(setMutator$.remove($1uv)){
$1ut=true;
}
}
return $1ut;
};setMutator$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$SetMutator'}}}],$cont:SetMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:removeAll')];},d:['ceylon.collection','SetMutator','$m','removeAll']};};
setMutator$.clear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:SetMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:clear')];},d:['ceylon.collection','SetMutator','$m','clear']};}};setMutator$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:SetMutator,a:{Element$SetMutator:'Element$SetMutator'}},ps:[],$cont:SetMutator,pa:7,d:['ceylon.collection','SetMutator','$m','clone']};}};setMutator$.toString=function(){return this.string.valueOf();};
})(SetMutator.$$.prototype);
}
return SetMutator;
}
ex$.$init$SetMutator=$init$SetMutator;$init$SetMutator();
function PriorityQueue($1dkeuw$1uw,$1dkeuw$1ux,$1dkeuw$1uy,$1dkeuw$1uz,$$targs$$,priorityQueue$){
$init$PriorityQueue();
if(priorityQueue$===undefined)priorityQueue$=new PriorityQueue.$$;
m$1.set_type_args(priorityQueue$,$$targs$$);
priorityQueue$.$1dkeuw$1uw_=$1dkeuw$1uw;
if($1dkeuw$1ux===undefined){$1dkeuw$1ux=$init$PriorityQueue().$defs$initialCapacity(priorityQueue$,$1dkeuw$1uw,$1dkeuw$1uy,$1dkeuw$1uz);}
priorityQueue$.$1dkeuw$1ux_=$1dkeuw$1ux;
if($1dkeuw$1uy===undefined){$1dkeuw$1uy=$init$PriorityQueue().$defs$growthFactor(priorityQueue$,$1dkeuw$1uw,$1dkeuw$1ux,$1dkeuw$1uz);}
priorityQueue$.$1dkeuw$1uy_=$1dkeuw$1uy;
if($1dkeuw$1uz===undefined){$1dkeuw$1uz=$init$PriorityQueue().$defs$elements(priorityQueue$,$1dkeuw$1uw,$1dkeuw$1ux,$1dkeuw$1uy);}
priorityQueue$.$1dkeuw$1uz_=$1dkeuw$1uz;
Queue({Element$Queue:$$targs$$.Element$PriorityQueue},priorityQueue$);
m$1.Collection({Element$Collection:$$targs$$.Element$PriorityQueue/*ORALE!Element inv pero Element var*/},priorityQueue$);
priorityQueue$.$1dkeuw$1uw=$1dkeuw$1uw;
if(priorityQueue$.$1dkeuw$1v0(priorityQueue$.$1dkeuw$1uz)){
priorityQueue$.$1dkeuw$1v1=priorityQueue$.$1dkeuw$1uz.size;
priorityQueue$.$1dkeuw$1v2=priorityQueue$.$1dkeuw$1v3(($1v4=((priorityQueue$.$1dkeuw$1v1>$1dkeuw$1ux)?priorityQueue$.$1dkeuw$1v1:null),m$1.nn$($1v4)?$1v4:$1dkeuw$1ux));
var $1v4;
}
else{
priorityQueue$.$1dkeuw$1v1=(0);
priorityQueue$.$1dkeuw$1v2=priorityQueue$.$1dkeuw$1v3($1dkeuw$1ux);
}
priorityQueue$.$1dkeuw$1v5();
return priorityQueue$;
}
PriorityQueue.$defs$initialCapacity=function(priorityQueue$,$1dkeuw$1uw,$1dkeuw$1uy,$1dkeuw$1uz){return (0)};PriorityQueue.$defs$growthFactor=function(priorityQueue$,$1dkeuw$1uw,$1dkeuw$1ux,$1dkeuw$1uz){return (1.5)};PriorityQueue.$defs$elements=function(priorityQueue$,$1dkeuw$1uw,$1dkeuw$1ux,$1dkeuw$1uy){return m$1.empty()};PriorityQueue.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:['Element$PriorityQueue','Element$PriorityQueue']}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$PriorityQueue'},{nm:'y',mt:'prm',$t:'Element$PriorityQueue'}],an:function(){return[m$1.doc("A comparator function used to order elements.")];}},{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("The initial size of the backing array.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:growthFactor$k15cw7')];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$PriorityQueue'}},an:function(){return[m$1.doc("The initial elements of the queue.")];}}],tp:{Element$PriorityQueue:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Collection,a:{Element$Collection:'Element$PriorityQueue'}},{t:Queue,a:{Element$Queue:'Element$PriorityQueue'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue'),m$1.by(m$1.$arr$sa$(["Loic Rouchon"],{t:m$1.$_String}))];},d:['ceylon.collection','PriorityQueue']};};
ex$.PriorityQueue=PriorityQueue;
function $init$PriorityQueue(){
if(PriorityQueue.$$===undefined){
m$1.initTypeProto(PriorityQueue,'ceylon.collection::PriorityQueue',m$1.Basic,$init$Queue(),m$1.Collection);
(function(priorityQueue$){
m$1.atr$(priorityQueue$,'$1dkeuw$1uw',function(){return this.$1dkeuw$1uw_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$PriorityQueue'},{nm:'y',mt:'prm',$t:'Element$PriorityQueue'}],$cont:PriorityQueue,an:function(){return[m$1.doc("A comparator function used to order elements.")];},d:['ceylon.collection','PriorityQueue','$m','compare$gs4c5s']};});
m$1.atr$(priorityQueue$,'$1dkeuw$1ux',function(){return this.$1dkeuw$1ux_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','PriorityQueue','$at','initialCapacity$gi6pup']};});
m$1.atr$(priorityQueue$,'$1dkeuw$1uy',function(){return this.$1dkeuw$1uy_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:growthFactor$k15cw7')];},d:['ceylon.collection','PriorityQueue','$at','growthFactor$k15cw7']};});
m$1.atr$(priorityQueue$,'$1dkeuw$1uz',function(){return this.$1dkeuw$1uz_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$PriorityQueue'}},$cont:PriorityQueue,an:function(){return[m$1.doc("The initial elements of the queue.")];},d:['ceylon.collection','PriorityQueue','$at','elements$ra338u']};});
priorityQueue$.$1dkeuw$1v3=function($1v6){var priorityQueue$=this;
return m$1.$_Array$c_ofSize($1v6,null,{Element$Array:m$1.mut$([{t:m$1.Null},priorityQueue$.$$targs$$.Element$PriorityQueue])});
};
priorityQueue$.$1dkeuw$1v3.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']}}},ps:[{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','store$iohp2k']};};
priorityQueue$.$1dkeuw$1v0=function($1v7){var priorityQueue$=this;
return m$1.is$($1v7,m$1.mut$([{t:m$1.Collection,a:{Element$Collection:priorityQueue$.$$targs$$.Element$PriorityQueue/*ORALE!Element inv pero Element var*/}},{t:m$1.Sequential,a:{Element$Sequential:priorityQueue$.$$targs$$.Element$PriorityQueue/*ORALE!Element inv pero Element var*/}}]));
};
priorityQueue$.$1dkeuw$1v0.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$PriorityQueue'}}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','haveKnownSize$7k454f']};};
m$1.atr$(priorityQueue$,'$1dkeuw$1v2',function(){return this.$1dkeuw$1v2_;},function($1v8){return this.$1dkeuw$1v2_=$1v8;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']}}},$cont:PriorityQueue,pa:1027,d:['ceylon.collection','PriorityQueue','$at','array$3tqqzg']};});
m$1.atr$(priorityQueue$,'$1dkeuw$1v1',function(){return this.$1dkeuw$1v1_;},function($1v9){return this.$1dkeuw$1v1_=$1v9;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,pa:1027,d:['ceylon.collection','PriorityQueue','$at','length$qkg55j']};});
priorityQueue$.$1dkeuw$1va=function($1vb){
var priorityQueue$=this;
var $1vc=(priorityQueue$.$1dkeuw$1v1+$1vb);
var $1vd=m$1.runtime().maxArraySize;
if(($1vc>$1vd)){
throw m$1.wrapexc(m$1.OverflowException(),'51:12-51:37','ceylon/collection/PriorityQueue.ceylon');
}
if(($1vc>priorityQueue$.$1dkeuw$1v2.size)){
var $1ve=m$1.Float($1vc*priorityQueue$.$1dkeuw$1uy).integer;
var $1vf=($1vg=((($1ve<$1vc)||($1ve>$1vd))?$1vd:null),m$1.nn$($1vg)?$1vg:$1ve);
var $1vg;
var $1vh=priorityQueue$.$1dkeuw$1v3($1vf);
priorityQueue$.$1dkeuw$1v2.copyTo($1vh);
priorityQueue$.$1dkeuw$1v2=$1vh;
}
};priorityQueue$.$1dkeuw$1va.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'increment',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','grow$kgssjy']};};
priorityQueue$.$1dkeuw$1vi=function($1vj){
var priorityQueue$=this;
priorityQueue$.$1dkeuw$1va(1);
($1vk=$1vj,priorityQueue$.$1dkeuw$1v2.set(priorityQueue$.$1dkeuw$1v1,$1vk), $1vk);
var $1vk;
($1vl=priorityQueue$.$1dkeuw$1v1,priorityQueue$.$1dkeuw$1v1=$1vl.successor,$1vl);
var $1vl;
};priorityQueue$.$1dkeuw$1vi.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$PriorityQueue'}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','add$lnahnw']};};
priorityQueue$.$1dkeuw$1vm=function($1vn){var priorityQueue$=this;
return (m$1.i$div(($1vn+(1)),(2))-(1));
};
priorityQueue$.$1dkeuw$1vm.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:parent$w5yb7')];},d:['ceylon.collection','PriorityQueue','$m','parent$w5yb7']};};
priorityQueue$.$1dkeuw$1vo=function($1vp){var priorityQueue$=this;
return (($1vp*(2))+(1));
};
priorityQueue$.$1dkeuw$1vo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:leftChild$bif9ts')];},d:['ceylon.collection','PriorityQueue','$m','leftChild$bif9ts']};};
priorityQueue$.$1dkeuw$1vq=function($1vr){var priorityQueue$=this;
return (($1vr*(2))+(2));
};
priorityQueue$.$1dkeuw$1vq.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:rightChild$rhsywd')];},d:['ceylon.collection','PriorityQueue','$m','rightChild$rhsywd']};};
priorityQueue$.$1dkeuw$1vs=function($1vt){
var priorityQueue$=this;
var $1vu;
m$1.asrt$((m$1.nn$(($1vu=priorityQueue$.$1dkeuw$1v2.$_get($1vt)))),"Assertion failed: "+"\n\tviolated exists element = array[index]\n\tat PriorityQueue.ceylon (91:14-91:44)",'91:8-91:45','PriorityQueue.ceylon');
return $1vu;
};priorityQueue$.$1dkeuw$1vs.$crtmm$=function(){return{mod:$CCMM$,$t:'Element$PriorityQueue',ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','elt$lqn120']};};
priorityQueue$.$1dkeuw$1vv=function($1vw,$1vx){var priorityQueue$=this;
return priorityQueue$.$1dkeuw$1uw(priorityQueue$.$1dkeuw$1vs($1vw),priorityQueue$.$1dkeuw$1vs($1vx));
};
priorityQueue$.$1dkeuw$1vv.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'first',mt:'prm',$t:{t:m$1.Integer}},{nm:'second',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','compareIndexes$ilkd5i']};};
priorityQueue$.$1dkeuw$1vy=function($1vz,$1w0){
var priorityQueue$=this;
var $1w1=priorityQueue$.$1dkeuw$1v2.$_get($1vz);
($1w2=priorityQueue$.$1dkeuw$1v2.$_get($1w0),priorityQueue$.$1dkeuw$1v2.set($1vz,$1w2), $1w2);
var $1w2;
($1w3=$1w1,priorityQueue$.$1dkeuw$1v2.set($1w0,$1w3), $1w3);
var $1w3;
};priorityQueue$.$1dkeuw$1vy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'first',mt:'prm',$t:{t:m$1.Integer}},{nm:'second',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','swap$snqivi']};};
priorityQueue$.$1dkeuw$1w4=function($1w5){
var priorityQueue$=this;
if(($1w5==(0))){
return;
}
var $1w6=priorityQueue$.$1dkeuw$1vm($1w5);
if(m$1.$eq$(priorityQueue$.$1dkeuw$1vv($1w5,$1w6),m$1.smaller())){
priorityQueue$.$1dkeuw$1vy($1w5,$1w6);
priorityQueue$.$1dkeuw$1w4($1w6);
}
};priorityQueue$.$1dkeuw$1w4.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','bubbleUp$yevw4e']};};
priorityQueue$.$1dkeuw$1w7=function($1w8){
var priorityQueue$=this;
var $1w9=priorityQueue$.$1dkeuw$1vo($1w8);
if(($1w9>=priorityQueue$.$1dkeuw$1v1)){
return null;
}
var $1wa=priorityQueue$.$1dkeuw$1vq($1w8);
if(($1wa>=priorityQueue$.$1dkeuw$1v1)){
return $1w9;
}
var $1wb=priorityQueue$.$1dkeuw$1vv($1w9,$1wa);
if(m$1.$eq$($1wb,m$1.smaller())){
return $1w9;
}
return $1wa;
};priorityQueue$.$1dkeuw$1w7.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','minChildrenIndex$1y297w']};};
priorityQueue$.$1dkeuw$1wc=function($1wd){
var priorityQueue$=this;
var $1we;
if(m$1.nn$(($1we=priorityQueue$.$1dkeuw$1w7($1wd)))&&m$1.$eq$(priorityQueue$.$1dkeuw$1vv($1we,$1wd),m$1.smaller())){
priorityQueue$.$1dkeuw$1vy($1wd,$1we);
priorityQueue$.$1dkeuw$1wc($1we);
}
};priorityQueue$.$1dkeuw$1wc.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','bubbleDown$daf9xt']};};
priorityQueue$.$1dkeuw$1v5=function(){
var priorityQueue$=this;
if(priorityQueue$.$1dkeuw$1v0(priorityQueue$.$1dkeuw$1uz)){
var $1wf=(0);
var $1wh;for(var $1wg=priorityQueue$.$1dkeuw$1uz.iterator();($1wh=$1wg.next())!==m$1.finished();){
($1wi=$1wh,priorityQueue$.$1dkeuw$1v2.set(($1wj=$1wf,$1wf=$1wj.successor,$1wj),$1wi), $1wi);
var $1wi,$1wj;
}
}
else{
var $1wl;for(var $1wk=priorityQueue$.$1dkeuw$1uz.iterator();($1wl=$1wk.next())!==m$1.finished();){
priorityQueue$.$1dkeuw$1vi($1wl);
}
}
if((priorityQueue$.$1dkeuw$1v1>(0))){
var $1wn=priorityQueue$.$1dkeuw$1vm((priorityQueue$.$1dkeuw$1v1-(1))),$1wm=(0),$1wo=$1wn.compare($1wm),$1wp=$1wo===m$1.smaller()?'successor':'predecessor';for(var $1wq=m$1.eorl$($1wo);$1wq($1wm,$1wn);$1wn=$1wn[$1wp]){
priorityQueue$.$1dkeuw$1wc($1wn);
}
}
};priorityQueue$.$1dkeuw$1v5.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','addInitialElements$lh42w3']};};
m$1.atr$(priorityQueue$,'size',function(){
var priorityQueue$=this;
return priorityQueue$.$1dkeuw$1v1;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,pa:3,d:['ceylon.collection','PriorityQueue','$at','size']};});
m$1.atr$(priorityQueue$,'front',function(){
var priorityQueue$=this;
return priorityQueue$.$1dkeuw$1v2.$_get(0);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:front')];},d:['ceylon.collection','PriorityQueue','$at','front']};});
m$1.atr$(priorityQueue$,'last',function(){
var priorityQueue$=this;
return priorityQueue$.$1dkeuw$1v2.$_get((priorityQueue$.$1dkeuw$1v1-(1)));
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:last')];},d:['ceylon.collection','PriorityQueue','$at','last']};});
m$1.atr$(priorityQueue$,'back',function(){
var priorityQueue$=this;
return priorityQueue$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:back')];},d:['ceylon.collection','PriorityQueue','$at','back']};});
priorityQueue$.offer=function($1wu){
var priorityQueue$=this;
priorityQueue$.$1dkeuw$1vi($1wu);
priorityQueue$.$1dkeuw$1w4((priorityQueue$.$1dkeuw$1v1-(1)));
};priorityQueue$.offer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$PriorityQueue'}],$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc("Add a new element to the queue.")];},d:['ceylon.collection','PriorityQueue','$m','offer']};};
priorityQueue$.accept=function(){
var priorityQueue$=this;
var $1wv=priorityQueue$.front;
if((priorityQueue$.$1dkeuw$1v1>(0))){
($1ww=priorityQueue$.last,priorityQueue$.$1dkeuw$1v2.set((0),$1ww), $1ww);
var $1ww;
($1wx=null,priorityQueue$.$1dkeuw$1v2.set((priorityQueue$.$1dkeuw$1v1=priorityQueue$.$1dkeuw$1v1.predecessor),$1wx), $1wx);
var $1wx;
priorityQueue$.$1dkeuw$1wc(0);
}
return $1wv;
};priorityQueue$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},ps:[],$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:accept')];},d:['ceylon.collection','PriorityQueue','$m','accept']};};
priorityQueue$.iterator=function(){
var priorityQueue$=this;
if((priorityQueue$.$1dkeuw$1v1>(0))){
var $1wy=(function(){function $1wz($$targs$$){
var $1wz$=new $1wz.$$;$1wz$.outer$=priorityQueue$;
$1wz$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:priorityQueue$.$$targs$$.Element$PriorityQueue/*ORALE!Element inv pero Element var*/},$1wz$);
$1wz$.$1dkeuw$1x1_=(0);
$1wz$.$prop$get$1dkeuw$1x1={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1wz,pa:1024,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q','$at','index$epjk09']};}};
$1wz$.$prop$get$1dkeuw$1x1.get=function(){return $1dkeuw$1x1};
return $1wz$;
};$1wz.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:priorityQueue$.iterator,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$PriorityQueue'}}],d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q']};};
function $init$$1wz(){
if($1wz.$$===undefined){
m$1.initTypeProto($1wz,'ceylon.collection::PriorityQueue.iterator.it',m$1.Basic,m$1.Iterator);
(function($1wz$){
m$1.atr$($1wz$,'$1dkeuw$1x1',function(){return this.$1dkeuw$1x1_;},function($1x2){return this.$1dkeuw$1x1_=$1x2;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1wz,pa:1024,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q','$at','index$epjk09']};});
$1wz$.next=function(){
var $1wz$=this;
var $1x3=priorityQueue$.$1dkeuw$1v2.$_get($1wz$.$1dkeuw$1x1);
var $1x4;
if(m$1.nn$(($1x4=$1x3))){
($1x5=$1wz$.$1dkeuw$1x1,$1wz$.$1dkeuw$1x1=$1x5.successor,$1x5);
var $1x5;
return $1x4;
}
function $1x6(){return $1x3;}
m$1.asrt$((($1wz$.$1dkeuw$1x1==priorityQueue$.$1dkeuw$1v1)),"Assertion failed: "+"\n\tviolated index == length\n\tat PriorityQueue.ceylon (209:26-209:42)",'209:20-209:43','PriorityQueue.ceylon');
return m$1.finished();
};$1wz$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$PriorityQueue',{t:m$1.Finished}]},ps:[],$cont:$1wz,pa:3,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q','$m','next']};};
$1wz$.toString=function(){return this.string.valueOf();};
})($1wz.$$.prototype);
}
return $1wz;
}
priorityQueue$.$init$$1wz=$init$$1wz;$init$$1wz();var $1x7;
function $1x0(){
if($1x7===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'it\' before it was set"),'201:12-213:12','PriorityQueue.ceylon');
if($1x7===undefined){$1x7=m$1.INIT$;$1x7=$init$$1wz()({Element$Iterator:priorityQueue$.$$targs$$.Element$PriorityQueue/*ORALE!Element inv pero Element var*/});$1x7.$crtmm$=$1x0.$crtmm$;}
return $1x7;
}
$1x0.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$$1wz()},$cont:priorityQueue$.iterator,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3p']};};
$prop$get$1wz=$1x0;
$1x0();
return $1x0();
}());if($1wy!==undefined){return $1wy;}
}
else{
return m$1.emptyIterator();
}
};priorityQueue$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:'Element$PriorityQueue'}},ps:[],$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:iterator')];},d:['ceylon.collection','PriorityQueue','$m','iterator']};};
priorityQueue$.clone=function(){
var priorityQueue$=this;
var $1x8=($1x9=m$1.jsc$2(priorityQueue$.$1dkeuw$1uw,[{nm:'x',mt:'prm',$t:priorityQueue$.$$targs$$.Element$PriorityQueue},{nm:'y',mt:'prm',$t:priorityQueue$.$$targs$$.Element$PriorityQueue}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:m$1.mtt$([priorityQueue$.$$targs$$.Element$PriorityQueue,priorityQueue$.$$targs$$.Element$PriorityQueue])}),$1xa=priorityQueue$.$1dkeuw$1v1,$1xb=priorityQueue$.$1dkeuw$1uy,PriorityQueue($1x9,$1xa,$1xb,undefined,{Element$PriorityQueue:priorityQueue$.$$targs$$.Element$PriorityQueue}));
var $1x9,$1xa,$1xb;
($1x8.$1dkeuw$1v1=priorityQueue$.$1dkeuw$1v1);
($1x8.$1dkeuw$1v2=priorityQueue$.$1dkeuw$1v2.clone());
return $1x8;
};priorityQueue$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:PriorityQueue,a:{Element$PriorityQueue:'Element$PriorityQueue'}},ps:[],$cont:PriorityQueue,pa:3,d:['ceylon.collection','PriorityQueue','$m','clone']};};
priorityQueue$.toString=function(){return this.string.valueOf();};
})(PriorityQueue.$$.prototype);
}
return PriorityQueue;
}
ex$.$init$PriorityQueue=$init$PriorityQueue;$init$PriorityQueue();PriorityQueue.inst$$=function($1xc){
var priorityQueue$=new PriorityQueue.$$;
m$1.set_type_args(priorityQueue$,{Element$PriorityQueue:$1xc.$$targs$$.Type$Class.a.Element$PriorityQueue});
m$1.set_type_args(priorityQueue$,{Element$Collection:priorityQueue$.$$targs$$.Element$PriorityQueue,Absent$Iterable:{t:m$1.Null},Element$Iterable:priorityQueue$.$$targs$$.Element$PriorityQueue,Element$Category:{t:m$1.$_Object},Element$Queue:priorityQueue$.$$targs$$.Element$PriorityQueue});
return priorityQueue$;
};
PriorityQueue.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::PriorityQueue.growthFactor')return o.$1dkeuw$1uy_;
else if(n==='ceylon.collection::PriorityQueue.elements')return o.$1dkeuw$1uz_;
else if(n==='ceylon.collection::PriorityQueue.array')return o.$1dkeuw$1v2_;
else if(n==='ceylon.collection::PriorityQueue.length')return o.$1dkeuw$1v1_;
else throw new TypeError('unknown attribute');
};
PriorityQueue.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::PriorityQueue.growthFactor')o.$1dkeuw$1uy_=i;
else if(n==='ceylon.collection::PriorityQueue.elements')o.$1dkeuw$1uz_=i;
else if(n==='ceylon.collection::PriorityQueue.array')o.$1dkeuw$1v2_=i;
else if(n==='ceylon.collection::PriorityQueue.length')o.$1dkeuw$1v1_=i;
else throw new TypeError('unknown attribute');
};
PriorityQueue.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1uy)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1uz)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1v2)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1v1))];
};
function Queue($$targs$$,queue$){
m$1.set_type_args(queue$,$$targs$$,Queue);
}
Queue.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$Queue:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),LinkedList),m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),ArrayList),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),Stack)],m$1.mut$([{t:m$1.ClassWithConstructorsDeclaration$meta$declaration},{t:m$1.InterfaceDeclaration$meta$declaration}])))];},d:['ceylon.collection','Queue']};};
ex$.Queue=Queue;
function $init$Queue(){
if(Queue.$$===undefined){
m$1.initTypeProtoI(Queue,'ceylon.collection::Queue');
(function(queue$){
queue$.offer={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$Queue'}],$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$m:offer')];},d:['ceylon.collection','Queue','$m','offer']};}};queue$.accept={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Queue']},ps:[],$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$m:accept')];},d:['ceylon.collection','Queue','$m','accept']};}};queue$.$prop$getFront={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Queue']},$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$at:front')];},d:['ceylon.collection','Queue','$at','front']};}};
queue$.$prop$getBack={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Queue']},$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$at:back')];},d:['ceylon.collection','Queue','$at','back']};}};
queue$.toString=function(){return this.string.valueOf();};
})(Queue.$$.prototype);
}
return Queue;
}
ex$.$init$Queue=$init$Queue;$init$Queue();
function SingletonMap(entry,$$targs$$,singletonMap$){
$init$SingletonMap();
if(singletonMap$===undefined)singletonMap$=new SingletonMap.$$;
m$1.set_type_args(singletonMap$,$$targs$$);
singletonMap$.entry_=entry;
m$1.Map({Key$Map:$$targs$$.Key$SingletonMap/*ORALE!Key inv pero Key var*/,Item$Map:$$targs$$.Item$SingletonMap/*ORALE!Item inv pero Item var*/},singletonMap$);
return singletonMap$;
}
SingletonMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$SingletonMap',Item$Entry:'Item$SingletonMap'}},pa:1}],tp:{Key$SingletonMap:{sts:[{t:m$1.$_Object}]},Item$SingletonMap:{}},sts:[{t:m$1.Map,a:{Key$Map:'Key$SingletonMap',Item$Map:'Item$SingletonMap'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SingletonMap'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),SingletonSet),m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.3.2','$'),m$1.Singleton)],{t:m$1.ClassWithInitializerDeclaration$meta$declaration}))];},d:['ceylon.collection','SingletonMap']};};
ex$.SingletonMap=SingletonMap;
function $init$SingletonMap(){
if(SingletonMap.$$===undefined){
m$1.initTypeProto(SingletonMap,'ceylon.collection::SingletonMap',m$1.Basic,m$1.Map);
(function(singletonMap$){
m$1.atr$(singletonMap$,'entry',function(){return this.entry_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Entry,a:{Key$Entry:'Key$SingletonMap',Item$Entry:'Item$SingletonMap'}},$cont:SingletonMap,pa:1,d:['ceylon.collection','SingletonMap','$at','entry']};});
singletonMap$.defines=function($1xd){var singletonMap$=this;
return m$1.$eq$(singletonMap$.entry.key,$1xd);
};singletonMap$.$_get=function($1xe){
var singletonMap$=this;
if(m$1.$eq$(singletonMap$.entry.key,$1xe)){
return singletonMap$.entry.item;
}
else{
return null;
}
};singletonMap$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$SingletonMap']},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:SingletonMap,pa:3,d:['ceylon.collection','SingletonMap','$m','get']};};
singletonMap$.contains=function($1xf){var singletonMap$=this;
return m$1.$eq$(singletonMap$.entry,$1xf);
};singletonMap$.iterator=function(){var singletonMap$=this;
return m$1.Singleton(singletonMap$.entry,{Element$Singleton:{t:m$1.Entry,a:{Key$Entry:singletonMap$.$$targs$$.Key$SingletonMap/*ORALE!Key inv pero Key var*/,Item$Entry:singletonMap$.$$targs$$.Item$SingletonMap/*ORALE!Item inv pero Item var*/}}}).iterator();
};singletonMap$.equals=function($1xg){var singletonMap$=this;
return singletonMap$.getT$all()['ceylon.language::Map'].$$.prototype.equals.call(singletonMap$,$1xg);
};m$1.atr$(singletonMap$,'hash',function(){
var singletonMap$=this;
return m$1.attrGetter(singletonMap$.getT$all()['ceylon.language::Map'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:SingletonMap,pa:3,d:['ceylon.collection','SingletonMap','$at','hash']};});
singletonMap$.each=function($1xh){var singletonMap$=this;
return $1xh(singletonMap$.entry);
};singletonMap$.clone=function(){var singletonMap$=this;
return singletonMap$;
};
singletonMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:SingletonMap,a:{Key$SingletonMap:'Key$SingletonMap',Item$SingletonMap:'Item$SingletonMap'}},ps:[],$cont:SingletonMap,pa:3,d:['ceylon.collection','SingletonMap','$m','clone']};};
singletonMap$.toString=function(){return this.string.valueOf();};
})(SingletonMap.$$.prototype);
}
return SingletonMap;
}
ex$.$init$SingletonMap=$init$SingletonMap;$init$SingletonMap();SingletonMap.inst$$=function($1xi){
var singletonMap$=new SingletonMap.$$;
m$1.set_type_args(singletonMap$,{Key$SingletonMap:$1xi.$$targs$$.Type$Class.a.Key$SingletonMap,Item$SingletonMap:$1xi.$$targs$$.Type$Class.a.Item$SingletonMap});
m$1.set_type_args(singletonMap$,{Key$Map:singletonMap$.$$targs$$.Key$SingletonMap,Item$Map:singletonMap$.$$targs$$.Item$SingletonMap,Element$Collection:{t:m$1.Entry,a:{Key$Entry:singletonMap$.$$targs$$.Key$SingletonMap/*ORALE!Key inv pero Key var*/,Item$Entry:singletonMap$.$$targs$$.Item$SingletonMap/*ORALE!Item inv pero Item var*/}},Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:singletonMap$.$$targs$$.Key$SingletonMap/*ORALE!Key inv pero Key var*/,Item$Entry:singletonMap$.$$targs$$.Item$SingletonMap/*ORALE!Item inv pero Item var*/}},Element$Category:{t:m$1.$_Object},Item$Correspondence:singletonMap$.$$targs$$.Item$SingletonMap,Key$Correspondence:{t:m$1.$_Object}});
return singletonMap$;
};
SingletonMap.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::SingletonMap.entry')return o.entry_;
else throw new TypeError('unknown attribute');
};
SingletonMap.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::SingletonMap.entry')o.entry_=i;
else throw new TypeError('unknown attribute');
};
SingletonMap.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getEntry))];
};
function SingletonSet(element,$$targs$$,singletonSet$){
$init$SingletonSet();
if(singletonSet$===undefined)singletonSet$=new SingletonSet.$$;
m$1.set_type_args(singletonSet$,$$targs$$);
singletonSet$.element_=element;
m$1.Set({Element$Set:$$targs$$.Element$SingletonSet/*ORALE!Element inv pero Element var*/},singletonSet$);
return singletonSet$;
}
SingletonSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'element',mt:'prm',$t:'Element$SingletonSet',pa:1}],tp:{Element$SingletonSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$SingletonSet'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SingletonSet'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),SingletonMap),m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.3.2','$'),m$1.Singleton)],{t:m$1.ClassWithInitializerDeclaration$meta$declaration}))];},d:['ceylon.collection','SingletonSet']};};
ex$.SingletonSet=SingletonSet;
function $init$SingletonSet(){
if(SingletonSet.$$===undefined){
m$1.initTypeProto(SingletonSet,'ceylon.collection::SingletonSet',m$1.Basic,m$1.Set);
(function(singletonSet$){
m$1.atr$(singletonSet$,'element',function(){return this.element_;},undefined,function(){return{mod:$CCMM$,$t:'Element$SingletonSet',$cont:SingletonSet,pa:1,d:['ceylon.collection','SingletonSet','$at','element']};});
singletonSet$.contains=function($1xj){var singletonSet$=this;
return m$1.$eq$(singletonSet$.element,$1xj);
};singletonSet$.complement=function($1xk,$4ycb5n$){var singletonSet$=this;
return ($1xl=(m$1.$cnt$($1xk,singletonSet$.element)?m$1.emptySet():null),m$1.nn$($1xl)?$1xl:singletonSet$);
var $1xl;
};
singletonSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$SingletonSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:SingletonSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','SingletonSet','$m','complement']};};
singletonSet$.intersection=function($1xm,$b7yrl4$){
var singletonSet$=this;
var $1xn;
if(m$1.is$(($1xn=singletonSet$.element),$b7yrl4$.Other$intersection,$b7yrl4$)&&m$1.$cnt$($1xm,$1xn)){
return SingletonSet($1xn,{Element$SingletonSet:m$1.mit$([singletonSet$.$$targs$$.Element$SingletonSet,$b7yrl4$.Other$intersection])});
}
else{
return m$1.emptySet();
}
};singletonSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'i',l:['Element$SingletonSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:SingletonSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','SingletonSet','$m','intersection']};};
singletonSet$.union=function($1xo,$t5idbk$){
var singletonSet$=this;
var $1xp=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([singletonSet$.$$targs$$.Element$SingletonSet,$t5idbk$.Other$union])});
$1xp.addAll($1xo);
$1xp.add(singletonSet$.element);
return UnmodifiableSet($1xp,{Element$UnmodifiableSet:m$1.mut$([singletonSet$.$$targs$$.Element$SingletonSet,$t5idbk$.Other$union])});
};singletonSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$SingletonSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:SingletonSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','SingletonSet','$m','union']};};
singletonSet$.exclusiveUnion=function($1xq,$xiti9c$){
var singletonSet$=this;
var $1xr=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([singletonSet$.$$targs$$.Element$SingletonSet,$xiti9c$.Other$exclusiveUnion])});
$1xr.addAll($1xq);
if(m$1.$cnt$($1xq,singletonSet$.element)){
$1xr.remove(singletonSet$.element);
}
else{
$1xr.add(singletonSet$.element);
}
return UnmodifiableSet($1xr,{Element$UnmodifiableSet:m$1.mut$([singletonSet$.$$targs$$.Element$SingletonSet,$xiti9c$.Other$exclusiveUnion])});
};singletonSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$SingletonSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:SingletonSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','SingletonSet','$m','exclusiveUnion']};};
singletonSet$.iterator=function(){var singletonSet$=this;
return m$1.Singleton(singletonSet$.element,{Element$Singleton:singletonSet$.$$targs$$.Element$SingletonSet/*ORALE!Element inv pero Element var*/}).iterator();
};singletonSet$.equals=function($1xs){var singletonSet$=this;
return singletonSet$.getT$all()['ceylon.language::Set'].$$.prototype.equals.call(singletonSet$,$1xs);
};m$1.atr$(singletonSet$,'hash',function(){
var singletonSet$=this;
return m$1.attrGetter(singletonSet$.getT$all()['ceylon.language::Set'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:SingletonSet,pa:3,d:['ceylon.collection','SingletonSet','$at','hash']};});
singletonSet$.each=function($1xt){var singletonSet$=this;
return $1xt(singletonSet$.element);
};singletonSet$.clone=function(){var singletonSet$=this;
return singletonSet$;
};
singletonSet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:SingletonSet,a:{Element$SingletonSet:'Element$SingletonSet'}},ps:[],$cont:SingletonSet,pa:3,d:['ceylon.collection','SingletonSet','$m','clone']};};
singletonSet$.toString=function(){return this.string.valueOf();};
})(SingletonSet.$$.prototype);
}
return SingletonSet;
}
ex$.$init$SingletonSet=$init$SingletonSet;$init$SingletonSet();SingletonSet.inst$$=function($1xu){
var singletonSet$=new SingletonSet.$$;
m$1.set_type_args(singletonSet$,{Element$SingletonSet:$1xu.$$targs$$.Type$Class.a.Element$SingletonSet});
m$1.set_type_args(singletonSet$,{Element$Set:singletonSet$.$$targs$$.Element$SingletonSet,Element$Collection:singletonSet$.$$targs$$.Element$SingletonSet,Absent$Iterable:{t:m$1.Null},Element$Iterable:singletonSet$.$$targs$$.Element$SingletonSet,Element$Category:{t:m$1.$_Object}});
return singletonSet$;
};
SingletonSet.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::SingletonSet.element')return o.element_;
else throw new TypeError('unknown attribute');
};
SingletonSet.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::SingletonSet.element')o.element_=i;
else throw new TypeError('unknown attribute');
};
SingletonSet.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getElement))];
};
function SortedMap($$targs$$,sortedMap$){
m$1.set_type_args(sortedMap$,$$targs$$,SortedMap);
m$1.Ranged({Subrange$Ranged:{t:SortedMap,a:{Item$SortedMap:$$targs$$.Item$SortedMap,Key$SortedMap:$$targs$$.Key$SortedMap}},Element$Ranged:{t:m$1.Entry,a:{Key$Entry:$$targs$$.Key$SortedMap/*ORALE!Key inv pero Key var*/,Item$Entry:$$targs$$.Item$SortedMap}},Index$Ranged:$$targs$$.Key$SortedMap/*ORALE!Key inv pero Index var*/},sortedMap$);
m$1.Map({Key$Map:$$targs$$.Key$SortedMap/*ORALE!Key inv pero Key var*/,Item$Map:$$targs$$.Item$SortedMap},sortedMap$);
}
SortedMap.$crtmm$=function(){return{mod:$CCMM$,tp:{Key$SortedMap:{sts:[{t:m$1.$_Object}]},Item$SortedMap:{dv:'out'}},sts:[{t:m$1.Map,a:{Key$Map:'Key$SortedMap',Item$Map:'Item$SortedMap'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:SortedMap,a:{Item$SortedMap:'Item$SortedMap',Key$SortedMap:'Key$SortedMap'}},Element$Ranged:{t:m$1.Entry,a:{Key$Entry:'Key$SortedMap',Item$Entry:'Item$SortedMap'}},Index$Ranged:'Key$SortedMap'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','SortedMap']};};
ex$.SortedMap=SortedMap;
function $init$SortedMap(){
if(SortedMap.$$===undefined){
m$1.initTypeProtoI(SortedMap,'ceylon.collection::SortedMap',m$1.Ranged,m$1.Map);
(function(sortedMap$){
sortedMap$.higherEntries={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$SortedMap',Item$Entry:'Item$SortedMap'}}}},ps:[{nm:'key',mt:'prm',$t:'Key$SortedMap'}],$cont:SortedMap,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap:$m:higherEntries')];},d:['ceylon.collection','SortedMap','$m','higherEntries']};}};sortedMap$.lowerEntries={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$SortedMap',Item$Entry:'Item$SortedMap'}}}},ps:[{nm:'key',mt:'prm',$t:'Key$SortedMap'}],$cont:SortedMap,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap:$m:lowerEntries')];},d:['ceylon.collection','SortedMap','$m','lowerEntries']};}};sortedMap$.ascendingEntries={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$SortedMap',Item$Entry:'Item$SortedMap'}}}},ps:[{nm:'from',mt:'prm',$t:'Key$SortedMap'},{nm:'to',mt:'prm',$t:'Key$SortedMap'}],$cont:SortedMap,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap:$m:ascendingEntries')];},d:['ceylon.collection','SortedMap','$m','ascendingEntries']};}};sortedMap$.descendingEntries={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$SortedMap',Item$Entry:'Item$SortedMap'}}}},ps:[{nm:'from',mt:'prm',$t:'Key$SortedMap'},{nm:'to',mt:'prm',$t:'Key$SortedMap'}],$cont:SortedMap,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap:$m:descendingEntries')];},d:['ceylon.collection','SortedMap','$m','descendingEntries']};}};sortedMap$.toString=function(){return this.string.valueOf();};
})(SortedMap.$$.prototype);
}
return SortedMap;
}
ex$.$init$SortedMap=$init$SortedMap;$init$SortedMap();
function SortedSet($$targs$$,sortedSet$){
m$1.set_type_args(sortedSet$,$$targs$$,SortedSet);
m$1.Ranged({Subrange$Ranged:{t:SortedSet,a:{Element$SortedSet:$$targs$$.Element$SortedSet}},Element$Ranged:$$targs$$.Element$SortedSet/*ORALE!Element inv pero Element var*/,Index$Ranged:$$targs$$.Element$SortedSet/*ORALE!Element inv pero Index var*/},sortedSet$);
m$1.Set({Element$Set:$$targs$$.Element$SortedSet/*ORALE!Element inv pero Element var*/},sortedSet$);
}
SortedSet.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$SortedSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$SortedSet'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:SortedSet,a:{Element$SortedSet:'Element$SortedSet'}},Element$Ranged:'Element$SortedSet',Index$Ranged:'Element$SortedSet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','SortedSet']};};
ex$.SortedSet=SortedSet;
function $init$SortedSet(){
if(SortedSet.$$===undefined){
m$1.initTypeProtoI(SortedSet,'ceylon.collection::SortedSet',m$1.Ranged,m$1.Set);
(function(sortedSet$){
sortedSet$.higherElements={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$SortedSet'}},ps:[{nm:'element',mt:'prm',$t:'Element$SortedSet'}],$cont:SortedSet,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet:$m:higherElements')];},d:['ceylon.collection','SortedSet','$m','higherElements']};}};sortedSet$.lowerElements={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$SortedSet'}},ps:[{nm:'element',mt:'prm',$t:'Element$SortedSet'}],$cont:SortedSet,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet:$m:lowerElements')];},d:['ceylon.collection','SortedSet','$m','lowerElements']};}};sortedSet$.ascendingElements={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$SortedSet'}},ps:[{nm:'from',mt:'prm',$t:'Element$SortedSet'},{nm:'to',mt:'prm',$t:'Element$SortedSet'}],$cont:SortedSet,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet:$m:ascendingElements')];},d:['ceylon.collection','SortedSet','$m','ascendingElements']};}};sortedSet$.descendingElements={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$SortedSet'}},ps:[{nm:'from',mt:'prm',$t:'Element$SortedSet'},{nm:'to',mt:'prm',$t:'Element$SortedSet'}],$cont:SortedSet,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet:$m:descendingElements')];},d:['ceylon.collection','SortedSet','$m','descendingElements']};}};sortedSet$.toString=function(){return this.string.valueOf();};
})(SortedSet.$$.prototype);
}
return SortedSet;
}
ex$.$init$SortedSet=$init$SortedSet;$init$SortedSet();
function Stability(stability$){
$init$Stability();
if(stability$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.collection::Stability"),'?','?')
return stability$;
}
Stability.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getUnlinked,$prop$getLinked],pa:257,d:['ceylon.collection','Stability']};};
ex$.Stability=Stability;
function $init$Stability(){
if(Stability.$$===undefined){
m$1.initTypeProto(Stability,'ceylon.collection::Stability',m$1.Basic);
(function(stability$){
stability$.toString=function(){return this.string.valueOf();};
})(Stability.$$.prototype);
}
return Stability;
}
ex$.$init$Stability=$init$Stability;$init$Stability();
function $1xv(){
var unlinked$=new $1xv.$$;Stability(unlinked$);
return unlinked$;
};$1xv.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Stability},d:['ceylon.collection','unlinked']};};
function $init$unlinked(){
if($1xv.$$===undefined){
m$1.initTypeProto($1xv,'ceylon.collection::unlinked',$init$Stability());
(function(unlinked$){
unlinked$.toString=function(){return this.string.valueOf();};
})($1xv.$$.prototype);
}
return $1xv;
}
ex$.$init$unlinked=$init$unlinked;$init$unlinked();var $1xx;
function unlinked(){
if($1xx===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'unlinked\' before it was set"),'2:0-2:44','Stability.ceylon');
if($1xx===undefined){$1xx=m$1.INIT$;$1xx=$init$unlinked()();$1xx.$crtmm$=unlinked.$crtmm$;}
return $1xx;
}
ex$.unlinked=unlinked;
unlinked.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$unlinked()},pa:1,d:['ceylon.collection','unlinked']};};
$prop$getUnlinked=unlinked;
ex$.$prop$getUnlinked=$prop$getUnlinked;
function $1xy(){
var linked$=new $1xy.$$;Stability(linked$);
return linked$;
};$1xy.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Stability},d:['ceylon.collection','linked']};};
function $init$linked(){
if($1xy.$$===undefined){
m$1.initTypeProto($1xy,'ceylon.collection::linked',$init$Stability());
(function(linked$){
linked$.toString=function(){return this.string.valueOf();};
})($1xy.$$.prototype);
}
return $1xy;
}
ex$.$init$linked=$init$linked;$init$linked();var $1y0;
function linked(){
if($1y0===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'linked\' before it was set"),'3:0-3:42','Stability.ceylon');
if($1y0===undefined){$1y0=m$1.INIT$;$1y0=$init$linked()();$1y0.$crtmm$=linked.$crtmm$;}
return $1y0;
}
ex$.linked=linked;
linked.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$linked()},pa:1,d:['ceylon.collection','linked']};};
$prop$getLinked=linked;
ex$.$prop$getLinked=$prop$getLinked;
function Stack($$targs$$,stack$){
m$1.set_type_args(stack$,$$targs$$,Stack);
}
Stack.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$Stack:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),LinkedList),m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),ArrayList),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),Queue)],m$1.mut$([{t:m$1.ClassWithConstructorsDeclaration$meta$declaration},{t:m$1.InterfaceDeclaration$meta$declaration}])))];},d:['ceylon.collection','Stack']};};
ex$.Stack=Stack;
function $init$Stack(){
if(Stack.$$===undefined){
m$1.initTypeProtoI(Stack,'ceylon.collection::Stack');
(function(stack$){
stack$.$_push={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$Stack'}],$cont:Stack,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack:$m:push')];},d:['ceylon.collection','Stack','$m','push']};}};stack$.$_pop={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Stack']},ps:[],$cont:Stack,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack:$m:pop')];},d:['ceylon.collection','Stack','$m','pop']};}};stack$.$prop$getTop={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Stack']},$cont:Stack,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack:$at:top')];},d:['ceylon.collection','Stack','$at','top']};}};
stack$.toString=function(){return this.string.valueOf();};
})(Stack.$$.prototype);
}
return Stack;
}
ex$.$init$Stack=$init$Stack;$init$Stack();
function StoreIterator($1dkeuw$1y1,$$targs$$,storeIterator$){
$init$StoreIterator();
if(storeIterator$===undefined)storeIterator$=new StoreIterator.$$;
m$1.set_type_args(storeIterator$,$$targs$$);
storeIterator$.$1dkeuw$1y1_=$1dkeuw$1y1;
m$1.Iterator({Element$Iterator:$$targs$$.Element$StoreIterator/*ORALE!Element inv pero Element var*/},storeIterator$);
storeIterator$.$1dkeuw$1y2_=(0);
storeIterator$.$1dkeuw$1y3_=storeIterator$.$1dkeuw$1y1.$_get(storeIterator$.$1dkeuw$1y2);
return storeIterator$;
}
StoreIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$StoreIterator'}}]}}}}],tp:{Element$StoreIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$StoreIterator'}}],d:['ceylon.collection','StoreIterator']};};
ex$.StoreIterator=StoreIterator;
function $init$StoreIterator(){
if(StoreIterator.$$===undefined){
m$1.initTypeProto(StoreIterator,'ceylon.collection::StoreIterator',m$1.Basic,m$1.Iterator);
(function(storeIterator$){
m$1.atr$(storeIterator$,'$1dkeuw$1y1',function(){return this.$1dkeuw$1y1_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$StoreIterator'}}]}}},$cont:StoreIterator,d:['ceylon.collection','StoreIterator','$at','store$ds37oi']};});
m$1.atr$(storeIterator$,'$1dkeuw$1y2',function(){return this.$1dkeuw$1y2_;},function($1y4){return this.$1dkeuw$1y2_=$1y4;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StoreIterator,pa:1024,d:['ceylon.collection','StoreIterator','$at','index$e2or89']};});
m$1.atr$(storeIterator$,'$1dkeuw$1y3',function(){return this.$1dkeuw$1y3_;},function($1y5){return this.$1dkeuw$1y3_=$1y5;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$StoreIterator'}}]},$cont:StoreIterator,pa:1027,d:['ceylon.collection','StoreIterator','$at','bucket$xzowap']};});
storeIterator$.next=function(){
var storeIterator$=this;
if(!m$1.nn$(storeIterator$.$1dkeuw$1y3)){
while(((storeIterator$.$1dkeuw$1y2=storeIterator$.$1dkeuw$1y2.successor)<storeIterator$.$1dkeuw$1y1.size)){
storeIterator$.$1dkeuw$1y3=storeIterator$.$1dkeuw$1y1.$_get(storeIterator$.$1dkeuw$1y2);
if(m$1.nn$(storeIterator$.$1dkeuw$1y3)){
break;
}
}
}
var $1y6;
if(m$1.nn$(($1y6=storeIterator$.$1dkeuw$1y3))){
var $1y7=$1y6.element;
storeIterator$.$1dkeuw$1y3=$1y6.rest;
return $1y7;
}
return m$1.finished();
};storeIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$StoreIterator',{t:m$1.Finished}]},ps:[],$cont:StoreIterator,pa:3,d:['ceylon.collection','StoreIterator','$m','next']};};
storeIterator$.toString=function(){return this.string.valueOf();};
})(StoreIterator.$$.prototype);
}
return StoreIterator;
}
ex$.$init$StoreIterator=$init$StoreIterator;$init$StoreIterator();
function CachingStoreIterator($1dkeuw$1y8,$$targs$$,cachingStoreIterator$){
$init$CachingStoreIterator();
if(cachingStoreIterator$===undefined)cachingStoreIterator$=new CachingStoreIterator.$$;
m$1.set_type_args(cachingStoreIterator$,$$targs$$);
cachingStoreIterator$.$1dkeuw$1y8_=$1dkeuw$1y8;
m$1.Iterator({Element$Iterator:$$targs$$.Element$CachingStoreIterator/*ORALE!Element inv pero Element var*/},cachingStoreIterator$);
cachingStoreIterator$.$1dkeuw$1y9_=(0);
cachingStoreIterator$.$1dkeuw$1ya_=cachingStoreIterator$.$1dkeuw$1y8.$_get(cachingStoreIterator$.$1dkeuw$1y9);
return cachingStoreIterator$;
}
CachingStoreIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$CachingStoreIterator'}}]}}}}],tp:{Element$CachingStoreIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$CachingStoreIterator'}}],d:['ceylon.collection','CachingStoreIterator']};};
ex$.CachingStoreIterator=CachingStoreIterator;
function $init$CachingStoreIterator(){
if(CachingStoreIterator.$$===undefined){
m$1.initTypeProto(CachingStoreIterator,'ceylon.collection::CachingStoreIterator',m$1.Basic,m$1.Iterator);
(function(cachingStoreIterator$){
m$1.atr$(cachingStoreIterator$,'$1dkeuw$1y8',function(){return this.$1dkeuw$1y8_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$CachingStoreIterator'}}]}}},$cont:CachingStoreIterator,d:['ceylon.collection','CachingStoreIterator','$at','store$9zckx3']};});
m$1.atr$(cachingStoreIterator$,'$1dkeuw$1y9',function(){return this.$1dkeuw$1y9_;},function($1yb){return this.$1dkeuw$1y9_=$1yb;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:CachingStoreIterator,pa:1024,d:['ceylon.collection','CachingStoreIterator','$at','index$9or1dc']};});
m$1.atr$(cachingStoreIterator$,'$1dkeuw$1ya',function(){return this.$1dkeuw$1ya_;},function($1yc){return this.$1dkeuw$1ya_=$1yc;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$CachingStoreIterator'}}]},$cont:CachingStoreIterator,pa:1027,d:['ceylon.collection','CachingStoreIterator','$at','bucket$a893p4']};});
cachingStoreIterator$.next=function(){
var cachingStoreIterator$=this;
if(!m$1.nn$(cachingStoreIterator$.$1dkeuw$1ya)){
while(((cachingStoreIterator$.$1dkeuw$1y9=cachingStoreIterator$.$1dkeuw$1y9.successor)<cachingStoreIterator$.$1dkeuw$1y8.size)){
cachingStoreIterator$.$1dkeuw$1ya=cachingStoreIterator$.$1dkeuw$1y8.$_get(cachingStoreIterator$.$1dkeuw$1y9);
if(m$1.nn$(cachingStoreIterator$.$1dkeuw$1ya)){
break;
}
}
}
var $1yd;
if(m$1.nn$(($1yd=cachingStoreIterator$.$1dkeuw$1ya))){
var $1ye=$1yd.element;
cachingStoreIterator$.$1dkeuw$1ya=$1yd.rest;
return $1ye;
}
return m$1.finished();
};cachingStoreIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$CachingStoreIterator',{t:m$1.Finished}]},ps:[],$cont:CachingStoreIterator,pa:3,d:['ceylon.collection','CachingStoreIterator','$m','next']};};
cachingStoreIterator$.toString=function(){return this.string.valueOf();};
})(CachingStoreIterator.$$.prototype);
}
return CachingStoreIterator;
}
ex$.$init$CachingStoreIterator=$init$CachingStoreIterator;$init$CachingStoreIterator();
function TreeMap$$c($$targs$$,treeMap$){
m$1.set_type_args(treeMap$,$$targs$$);
SortedMap({Item$SortedMap:$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/,Key$SortedMap:$$targs$$.Key$TreeMap},treeMap$);
MutableMap({Key$MutableMap:$$targs$$.Key$TreeMap,Item$MutableMap:$$targs$$.Item$TreeMap},treeMap$);
m$1.Ranged({Subrange$Ranged:{t:TreeMap,a:{Key$TreeMap:$$targs$$.Key$TreeMap,Item$TreeMap:$$targs$$.Item$TreeMap}},Element$Ranged:{t:m$1.Entry,a:{Key$Entry:$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/,Item$Entry:$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/}},Index$Ranged:$$targs$$.Key$TreeMap/*ORALE!Key inv pero Index var*/},treeMap$);
}
function TreeMap(){return TreeMap$c_$c$.apply(undefined,arguments);}
function TreeMap$c_$c$$$a($1yf,$1yg,$$targs$$,treeMap$){
if($1yg===undefined){$1yg=m$1.empty();}
treeMap$.$1dkeuw$1yh_=null;
treeMap$.$1dkeuw$1yi_=$1yf;
m$1.atr$(treeMap$,'$1dkeuw$1yi',function(){return this.$1dkeuw$1yi_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$m:compare$l83nqh')];},d:['ceylon.collection','TreeMap','$m','compare$l83nqh']};});
treeMap$.$1dkeuw$1yj_=$1yg;
m$1.atr$(treeMap$,'$1dkeuw$1yj',function(){return this.$1dkeuw$1yj_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','TreeMap','$at','entries$25gqqk']};});
treeMap$.$1dkeuw$1yk_=null;
m$1.atr$(treeMap$,'$1dkeuw$1yk',function(){return this.$1dkeuw$1yk_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("Alternatively, a node to clone.")];},d:['ceylon.collection','TreeMap','$at','nodeToClone$bq245o']};});
return treeMap$;
};
function TreeMap$c_$c$($1yf,$1yg,$$targs$$,treeMap$){
$init$TreeMap();
if(treeMap$===undefined)treeMap$=new TreeMap.$$;
if($1yg===undefined){$1yg=m$1.empty();}
TreeMap$$c($$targs$$,treeMap$);
TreeMap$c_$c$$$a($1yf,$1yg,$$targs$$,treeMap$);
treeMap$.$1dkeuw$1yh=function(){var $1yl;
if(m$1.nn$(($1yl=treeMap$.$1dkeuw$1yk)))return treeMap$.$1dkeuw$1ym($1yl);else return null}();
var $1yo;for(var $1yn=treeMap$.$1dkeuw$1yj.iterator();($1yo=$1yn.next())!==m$1.finished();){
var $1yp=$1yo.key,$1yq=$1yo.item;
treeMap$.put($1yp,$1yq);
}
treeMap$.$1dkeuw$1yr_=treeMap$.$1dkeuw$1ys();
return treeMap$;
};
TreeMap$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:['Key$TreeMap','Key$TreeMap']}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],an:function(){return[m$1.doc("A comparator function used to sort the entries.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}},an:function(){return[m$1.doc("The initial entries in the map.")];}}],$cont:TreeMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$cn:$def')];},d:['ceylon.collection','TreeMap','$cn','$def']};};
TreeMap.TreeMap$c_$c$=TreeMap$c_$c$;
ex$.TreeMap$c_$c$=TreeMap$c_$c$;
function TreeMap$c_copy$$a($1yt,$$targs$$,treeMap$){
treeMap$.$1dkeuw$1yh_=null;
treeMap$.$1dkeuw$1yi_=($1yu=$1yt,m$1.jsc$3($1yu,$1yu.$1dkeuw$1yi));
m$1.atr$(treeMap$,'$1dkeuw$1yi',function(){return this.$1dkeuw$1yi_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$m:compare$l83nqh')];},d:['ceylon.collection','TreeMap','$m','compare$l83nqh']};});
var $1yu;
treeMap$.$1dkeuw$1yj_=m$1.empty();
m$1.atr$(treeMap$,'$1dkeuw$1yj',function(){return this.$1dkeuw$1yj_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','TreeMap','$at','entries$25gqqk']};});
treeMap$.$1dkeuw$1yk_=$1yt.$1dkeuw$1yh;
m$1.atr$(treeMap$,'$1dkeuw$1yk',function(){return this.$1dkeuw$1yk_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("Alternatively, a node to clone.")];},d:['ceylon.collection','TreeMap','$at','nodeToClone$bq245o']};});
return treeMap$;
};
function TreeMap$c_copy($1yt,$$targs$$,treeMap$){
$init$TreeMap();
if(treeMap$===undefined)treeMap$=new TreeMap.$$;
TreeMap$$c($$targs$$,treeMap$);
TreeMap$c_copy$$a($1yt,$$targs$$,treeMap$);
treeMap$.$1dkeuw$1yh=function(){var $1yl;
if(m$1.nn$(($1yl=treeMap$.$1dkeuw$1yk)))return treeMap$.$1dkeuw$1ym($1yl);else return null}();
var $1yw;for(var $1yv=treeMap$.$1dkeuw$1yj.iterator();($1yw=$1yv.next())!==m$1.finished();){
var $1yp=$1yw.key,$1yq=$1yw.item;
treeMap$.put($1yp,$1yq);
}
treeMap$.$1dkeuw$1yr_=treeMap$.$1dkeuw$1ys();
return treeMap$;
};
TreeMap$c_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'treeMap',mt:'prm',$t:{t:TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:TreeMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$cn:copy')];},d:['ceylon.collection','TreeMap','$cn','copy']};};
TreeMap.TreeMap$c_copy=TreeMap$c_copy;
ex$.TreeMap$c_copy=TreeMap$c_copy;
TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:['Key$TreeMap','Key$TreeMap']}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],an:function(){return[m$1.doc("A comparator function used to sort the entries.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}},an:function(){return[m$1.doc("The initial entries in the map.")];}}],tp:{Key$TreeMap:{sts:[{t:m$1.$_Object}]},Item$TreeMap:{}},sts:[{t:MutableMap,a:{Key$MutableMap:'Key$TreeMap',Item$MutableMap:'Item$TreeMap'}},{t:SortedMap,a:{Item$SortedMap:'Item$TreeMap',Key$SortedMap:'Key$TreeMap'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},Element$Ranged:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}},Index$Ranged:'Key$TreeMap'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap'),m$1.see(m$1.$arr$sa$([m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.collection'),naturalOrderTreeMap)],{t:m$1.FunctionDeclaration$meta$declaration})),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','TreeMap']};};
ex$.TreeMap=TreeMap;
function $init$TreeMap(){
if(TreeMap.$$===undefined){
m$1.initTypeProto(TreeMap,'ceylon.collection::TreeMap',m$1.Basic,$init$SortedMap(),$init$MutableMap(),m$1.Ranged);
(function(treeMap$){
m$1.atr$(treeMap$,'$1dkeuw$1yh',function(){return this.$1dkeuw$1yh_;},function($1yx){return this.$1dkeuw$1yh_=$1yx;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:TreeMap,pa:1027,an:function(){return[m$1.doc("The root node of the tree.")];},d:['ceylon.collection','TreeMap','$at','root$w9iz1a']};});
m$1.atr$(treeMap$,'$1dkeuw$1yj',function(){return this.$1dkeuw$1yj_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','TreeMap','$at','entries$25gqqk']};});
m$1.atr$(treeMap$,'$1dkeuw$1yk',function(){return this.$1dkeuw$1yk_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("Alternatively, a node to clone.")];},d:['ceylon.collection','TreeMap','$at','nodeToClone$bq245o']};});
treeMap$.$1dkeuw$1ym=function($1yy){
var treeMap$=this;
var $1yz=($1z0=$1yy.key,$1z1=$1yy.item,$1z2=$1yy.red,treeMap$.Node$TreeMap($1z0,$1z1,$1z2));
var $1z0,$1z1,$1z2;
var $1z3;
if(m$1.nn$(($1z3=$1yy.left))){
var $1z4=treeMap$.$1dkeuw$1ym($1z3);
($1z4.parent=$1yz);
($1yz.left=$1z4);
}
var $1z5;
if(m$1.nn$(($1z5=$1yy.right))){
var $1z6=treeMap$.$1dkeuw$1ym($1z5);
($1z6.parent=$1yz);
($1yz.right=$1z6);
}
return $1yz;
};treeMap$.$1dkeuw$1ym.$crtmm$=function(){return{mod:$CCMM$,$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},ps:[{nm:'node',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','copyNode$paf63']};};
treeMap$.$1dkeuw$1z7=function($1z8){var treeMap$=this;
return function(){var $1z9;
if(m$1.nn$(($1z9=$1z8)))return $1z9.red;else return false}();
};
treeMap$.$1dkeuw$1z7.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'node',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','isRed$pt60u3']};};
treeMap$.$1dkeuw$1za=function($1zb){
var treeMap$=this;
var $1zc=treeMap$.$1dkeuw$1yh;
var $1zd;
while(m$1.nn$(($1zd=$1zc))){
var $1ze=treeMap$.$1dkeuw$1yi($1zb,$1zd.key);
if($1ze===m$1.equal()) {
return $1zd;
}
else if($1ze===m$1.smaller()) {
$1zc=$1zd.left;
}
else if($1ze===m$1.larger()) {
$1zc=$1zd.right;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
return $1zc;
};treeMap$.$1dkeuw$1za.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','lookup$pd1hl6']};};
treeMap$.$1dkeuw$1zf=function($1zg){
var treeMap$=this;
var $1zh=treeMap$.$1dkeuw$1yh;
var $1zi;
while(m$1.nn$(($1zi=$1zh))){
var $1zj=treeMap$.$1dkeuw$1yi($1zg,$1zi.key);
if($1zj===m$1.equal()) {
return $1zi;
}
else if($1zj===m$1.smaller()) {
if(!m$1.nn$($1zi.left)){
var $1zk=$1zi;
var $1zl;
while(m$1.nn$(($1zl=$1zk.parent))&&$1zk.onLeft){
$1zk=$1zl;
}
return $1zk.parent;
}
$1zh=$1zi.left;
}
else if($1zj===m$1.larger()) {
if(!m$1.nn$($1zi.right)){
return $1zi;
}
$1zh=$1zi.right;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
return $1zh;
};treeMap$.$1dkeuw$1zf.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','ceiling$by99mn']};};
treeMap$.$1dkeuw$1zm=function($1zn){
var treeMap$=this;
var $1zo=treeMap$.$1dkeuw$1yh;
var $1zp;
while(m$1.nn$(($1zp=$1zo))){
var $1zq=treeMap$.$1dkeuw$1yi($1zn,$1zp.key);
if($1zq===m$1.equal()) {
return $1zp;
}
else if($1zq===m$1.smaller()) {
if(!m$1.nn$($1zp.left)){
return $1zp;
}
$1zo=$1zp.left;
}
else if($1zq===m$1.larger()) {
if(!m$1.nn$($1zp.right)){
var $1zr=$1zp;
var $1zs;
while(m$1.nn$(($1zs=$1zr.parent))&&$1zr.onRight){
$1zr=$1zs;
}
return $1zr.parent;
}
$1zo=$1zp.right;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
return $1zo;
};treeMap$.$1dkeuw$1zm.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','floor$u13blk']};};
treeMap$.$1dkeuw$1zt=function($1zu,$1zv){
var treeMap$=this;
var $1zw;
if(m$1.nn$(($1zw=$1zu.parent))){
if($1zu.onLeft){
($1zw.left=$1zv);
}
else{
if($1zu.onRight){
($1zw.right=$1zv);
}
else{
m$1.asrt$((false),"Assertion failed: "+"\n\tviolated false\n\tat TreeMap.ceylon (242:23-242:29)",'242:16-242:30','TreeMap.ceylon');
}
}
}
else{
treeMap$.$1dkeuw$1yh=$1zv;
}
var $1zx;
if(m$1.nn$(($1zx=$1zv))){
($1zx.parent=$1zu.parent);
}
};treeMap$.$1dkeuw$1zt.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'old',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'node',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','replaceNode$sb7ik2']};};
treeMap$.$1dkeuw$1zy=function($1zz,$200){
var treeMap$=this;
($1zz.left=$200);
var $201;
if(m$1.nn$(($201=$200))){
($201.parent=$1zz);
}
};treeMap$.$1dkeuw$1zy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'left',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','setLeftChild$7ba4nt']};};
treeMap$.$1dkeuw$202=function($203,$204){
var treeMap$=this;
($203.right=$204);
var $205;
if(m$1.nn$(($205=$204))){
($205.parent=$203);
}
};treeMap$.$1dkeuw$202.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'right',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','setRightChild$y2zjj6']};};
treeMap$.$1dkeuw$206=function($207){
var treeMap$=this;
var $208;
m$1.asrt$((m$1.nn$(($208=$207.right))),"Assertion failed: "+"\n\tviolated exists right = node.right\n\tat TreeMap.ceylon (268:15-268:41)",'268:8-268:42','TreeMap.ceylon');
treeMap$.$1dkeuw$1zt($207,$208);
var $209=$208.left;
treeMap$.$1dkeuw$202($207,$209);
treeMap$.$1dkeuw$1zy($208,$207);
};treeMap$.$1dkeuw$206.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','rotateLeft$bf2pku']};};
treeMap$.$1dkeuw$20a=function($20b){
var treeMap$=this;
var $20c;
m$1.asrt$((m$1.nn$(($20c=$20b.left))),"Assertion failed: "+"\n\tviolated exists left = node.left\n\tat TreeMap.ceylon (276:15-276:39)",'276:8-276:40','TreeMap.ceylon');
var $20d=$20c.right;
treeMap$.$1dkeuw$1zt($20b,$20c);
treeMap$.$1dkeuw$1zy($20b,$20d);
treeMap$.$1dkeuw$202($20c,$20b);
};treeMap$.$1dkeuw$20a.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','rotateRight$lztmmz']};};
treeMap$.$1dkeuw$20e=function($20f){
var treeMap$=this;
var $20g;
if(m$1.nn$(($20g=$20f.parent))){
if(treeMap$.$1dkeuw$1z7($20g)){
var $20h;
if(m$1.nn$(($20h=$20f.uncle))&&treeMap$.$1dkeuw$1z7($20h)){
($20g.red=false);
($20h.red=false);
var $20i;
m$1.asrt$((m$1.nn$(($20i=$20f.grandparent))),"Assertion failed: "+"\n\tviolated exists grandparent=newNode.grandparent\n\tat TreeMap.ceylon (293:27-293:66)",'293:20-293:67','TreeMap.ceylon');
($20i.red=true);
treeMap$.$1dkeuw$20e($20i);
}
else{
var $20j;
if(($20f.onRight&&$20g.onLeft)){
treeMap$.$1dkeuw$206($20g);
var $20k;
m$1.asrt$((m$1.nn$(($20k=$20f.left))),"Assertion failed: "+"\n\tviolated exists nl=newNode.left\n\tat TreeMap.ceylon (302:31-302:54)",'302:24-302:55','TreeMap.ceylon');
$20j=$20k;
}
else{
if(($20f.onLeft&&$20g.onRight)){
treeMap$.$1dkeuw$20a($20g);
var $20l;
m$1.asrt$((m$1.nn$(($20l=$20f.right))),"Assertion failed: "+"\n\tviolated exists nr=newNode.right\n\tat TreeMap.ceylon (307:31-307:55)",'307:24-307:56','TreeMap.ceylon');
$20j=$20l;
}
else{
$20j=$20f;
}
}
var $20m;
m$1.asrt$((m$1.nn$(($20m=$20j.parent))),"Assertion failed: "+"\n\tviolated exists adjustedParent=adjustedNode.parent\n\tat TreeMap.ceylon (314:27-314:69)",'314:20-314:70','TreeMap.ceylon');
($20m.red=false);
var $20n;
m$1.asrt$((m$1.nn$(($20n=$20j.grandparent))),"Assertion failed: "+"\n\tviolated exists grandparent=adjustedNode.grandparent\n\tat TreeMap.ceylon (316:27-316:71)",'316:20-316:72','TreeMap.ceylon');
($20n.red=true);
if(($20j.onLeft&&$20m.onLeft)){
treeMap$.$1dkeuw$20a($20n);
}
else{
if(($20j.onRight&&$20m.onRight)){
treeMap$.$1dkeuw$206($20n);
}
else{
m$1.asrt$((false),"Assertion failed: "+"\n\tviolated false\n\tat TreeMap.ceylon (325:31-325:37)",'325:24-325:38','TreeMap.ceylon');
}
}
}
}
}
else{
($20f.red=false);
}
};treeMap$.$1dkeuw$20e.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'newNode',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','balanceAfterInsert$9owhr7']};};
treeMap$.put=function($20o,$20p){
var treeMap$=this;
var $20q=treeMap$.Node$TreeMap($20o,$20p,true);
var $20r;
if(m$1.nn$(($20r=treeMap$.$1dkeuw$1yh))){
var $20s=$20r;
while(true){
var $20t=treeMap$.$1dkeuw$1yi($20o,$20s.key);
if($20t===m$1.larger()) {
var $20u;
if(m$1.nn$(($20u=$20s.right))){
$20s=$20u;
}
else{
($20s.right=$20q);
break;
}
}
else if($20t===m$1.smaller()) {
var $20v;
if(m$1.nn$(($20v=$20s.left))){
$20s=$20v;
}
else{
($20s.left=$20q);
break;
}
}
else if($20t===m$1.equal()) {
var $20w=$20s.item;
($20s.item=$20p);
return $20w;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
($20q.parent=$20s);
}
else{
treeMap$.$1dkeuw$1yh=$20q;
}
treeMap$.$1dkeuw$20e($20q);
return null;
};treeMap$.put.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$TreeMap']},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:'Item$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','put']};};
function $1dkeuw$1ys(){
var treeMap$=this;
var $1ys$=new this.$1dkeuw$1ys.$$;$1ys$.outer$=this;
return $1ys$;
};$1dkeuw$1ys.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:TreeMap,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e']};};
function $init$removeCases(){
if($1dkeuw$1ys.$$===undefined){
m$1.initTypeProto($1dkeuw$1ys,'ceylon.collection::TreeMap.removeCases',m$1.Basic);
TreeMap.$1dkeuw$1ys=$1dkeuw$1ys;
(function($1ys$){
$1ys$.$1dkeuw$20x=function($20y){
var $1ys$=this;
var $20z;
if(m$1.nn$(($20z=$20y.left))){
m$1.asrt$((!m$1.nn$($20y.right)),"Assertion failed: "+"\n\tviolated !node.right exists\n\tat TreeMap.ceylon (389:23-389:42)",'389:16-389:43','TreeMap.ceylon');
return $20z;
}
else{
var $210;
if(m$1.nn$(($210=$20y.right))){
m$1.asrt$((!m$1.nn$($20y.left)),"Assertion failed: "+"\n\tviolated !node.left exists\n\tat TreeMap.ceylon (393:23-393:41)",'393:16-393:42','TreeMap.ceylon');
return $210;
}
else{
return null;
}
}
};$1ys$.$1dkeuw$20x.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},{t:m$1.Null}]},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:treeMap$.$1dkeuw$1ys,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','getAndEnsureAtMostOneChild$j2uuc0']};};
$1ys$.removeNodeWithAtMostOneChild=function($211){
var $1ys$=this,treeMap$=$1ys$.outer$;
var $212=$1ys$.$1dkeuw$20x($211);
if(!$211.red&&$1ys$.outer$.$1dkeuw$1z7($212)){
var $213;
m$1.asrt$((m$1.nn$(($213=$212))),"Assertion failed: "+"\n\tviolated exists child\n\tat TreeMap.ceylon (404:22-404:35)",'404:16-404:36','TreeMap.ceylon');
($213.red=false);
}
else{
if(!$211.red){
$1ys$.$1dkeuw$214($211,$211.sibling);
}
}
$1ys$.outer$.$1dkeuw$1zt($211,$212);
};$1ys$.removeNodeWithAtMostOneChild.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:treeMap$.$1dkeuw$1ys,pa:1,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','removeNodeWithAtMostOneChild']};};
$1ys$.$1dkeuw$214=function($215,$216){
var $1ys$=this,treeMap$=$1ys$.outer$;
var $217;
if(m$1.nn$(($217=$1ys$.outer$.$1dkeuw$1yh))&&!($217===$215)){
$1ys$.$1dkeuw$218($215,$216);
}
};$1ys$.$1dkeuw$214.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'sibling',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:treeMap$.$1dkeuw$1ys,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case1$l9jgd2']};};
$1ys$.$1dkeuw$218=function($219,$21a){
var $1ys$=this,treeMap$=$1ys$.outer$;
var $21b;
m$1.asrt$((m$1.nn$(($21b=$219.parent))),"Assertion failed: "+"\n\tviolated exists p = node.parent\n\tat TreeMap.ceylon (421:18-421:41)",'421:12-421:42','TreeMap.ceylon');
var $21c;
if(m$1.nn$(($21c=$21a))&&$21c.red){
($21b.red=true);
($21c.red=false);
if($219.onLeft){
$1ys$.outer$.$1dkeuw$206($21b);
}
else{
$1ys$.outer$.$1dkeuw$20a($21b);
}
}
var $21d;
m$1.asrt$((m$1.nn$(($21d=$219.parent))),"Assertion failed: "+"\n\tviolated exists newParent = node.parent\n\tat TreeMap.ceylon (432:18-432:49)",'432:12-432:50','TreeMap.ceylon');
$1ys$.$1dkeuw$21e($219,$21d,$219.sibling);
};$1ys$.$1dkeuw$218.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'sibling',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:treeMap$.$1dkeuw$1ys,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case2$l9jhf3']};};
$1ys$.$1dkeuw$21e=function($21f,$21g,$21h){
var $1ys$=this,treeMap$=$1ys$.outer$;
var $21i;
m$1.asrt$((m$1.nn$(($21i=$21h))),"Assertion failed: "+"\n\tviolated exists s\n\tat TreeMap.ceylon (437:18-437:27)",'437:12-437:28','TreeMap.ceylon');
var $21j=$1ys$.outer$.$1dkeuw$1z7($21i.left);
var $21k=$1ys$.outer$.$1dkeuw$1z7($21i.right);
if(!$21i.red&&!$21g.red&&!$21j&&!$21k){
($21i.red=true);
$1ys$.$1dkeuw$214($21g,$21g.sibling);
}
else{
$1ys$.$1dkeuw$21l($21f,$21g,$21i,$21j,$21k);
}
};$1ys$.$1dkeuw$21e.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'p',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'s',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:treeMap$.$1dkeuw$1ys,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case3$l9jih4']};};
$1ys$.$1dkeuw$21l=function($21m,$21n,$21o,$21p,$21q){
var $1ys$=this,treeMap$=$1ys$.outer$;
if(!$21o.red&&$21n.red&&!$21p&&!$21q){
($21o.red=true);
($21n.red=false);
}
else{
$1ys$.$1dkeuw$21r($21m,$21n,$21o,$21p,$21q);
}
};$1ys$.$1dkeuw$21l.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'p',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'s',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'sLeftRed',mt:'prm',$t:{t:m$1.$_Boolean}},{nm:'sRightRed',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:treeMap$.$1dkeuw$1ys,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case4$l9jjj5']};};
$1ys$.$1dkeuw$21r=function($21s,$21t,$21u,$21v,$21w){
var $1ys$=this,treeMap$=$1ys$.outer$;
if(!$21u.red&&$21v&&!$21w&&$21s.onLeft){
($21u.red=true);
var $21x;
m$1.asrt$((m$1.nn$(($21x=$21u.left))),"Assertion failed: "+"\n\tviolated exists sl = s.left\n\tat TreeMap.ceylon (462:23-462:42)",'462:16-462:43','TreeMap.ceylon');
($21x.red=false);
$1ys$.outer$.$1dkeuw$20a($21u);
}
else{
if(!$21u.red&&!$21v&&$21w&&$21s.onRight){
($21u.red=true);
var $21y;
m$1.asrt$((m$1.nn$(($21y=$21u.right))),"Assertion failed: "+"\n\tviolated exists sr = s.right\n\tat TreeMap.ceylon (468:23-468:43)",'468:16-468:44','TreeMap.ceylon');
($21y.red=false);
$1ys$.outer$.$1dkeuw$206($21u);
}
}
var $21z,$220;
m$1.asrt$((m$1.nn$(($21z=$21s.parent))&&m$1.nn$(($220=$21s.sibling))),"Assertion failed: "+"\n\tviolated exists newParent = node.parent, exists newS = node.sibling\n\tat TreeMap.ceylon (472:18-472:77)",'472:12-472:78','TreeMap.ceylon');
$1ys$.$1dkeuw$221($21s,$21z,$220);
};$1ys$.$1dkeuw$21r.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'p',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'s',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'sLeftRed',mt:'prm',$t:{t:m$1.$_Boolean}},{nm:'sRightRed',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:treeMap$.$1dkeuw$1ys,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case5$l9jkl6']};};
$1ys$.$1dkeuw$221=function($222,$223,$224){
var $1ys$=this,treeMap$=$1ys$.outer$;
($224.red=$223.red);
($223.red=false);
var $225;
if($222.onLeft&&m$1.nn$(($225=$224.right))){
($225.red=false);
$1ys$.outer$.$1dkeuw$206($223);
}
else{
var $226;
if(m$1.nn$(($226=$224.left))){
($226.red=false);
$1ys$.outer$.$1dkeuw$20a($223);
}
}
};$1ys$.$1dkeuw$221.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'p',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'s',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:treeMap$.$1dkeuw$1ys,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case6$l9jln7']};};
$1ys$.toString=function(){return this.string.valueOf();};
})($1dkeuw$1ys.$$.prototype);
}
return $1dkeuw$1ys;
}
treeMap$.$init$removeCases=$init$removeCases;m$1.atr$(treeMap$,'$1dkeuw$1yr',function(){return this.$1dkeuw$1yr_;},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap.$$.prototype.$init$removeCases()},$cont:TreeMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$o:removeCases$osfi1f')];},d:['ceylon.collection','TreeMap','$o','removeCases$osfi1f']};});
treeMap$.$1dkeuw$1ys=$1dkeuw$1ys;treeMap$.$1dkeuw$1ys.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeMap.$$.prototype.$init$removeCases()},$cont:TreeMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$o:removeCases$osfi1f')];},d:['ceylon.collection','TreeMap','$o','removeCases$osfi1f']};};
treeMap$.remove=function($228){
var treeMap$=this;
var $229;
if(m$1.nn$(($229=treeMap$.$1dkeuw$1za($228)))){
var $22a;
var $22b,$22c;
if(m$1.nn$(($22b=$229.left))&&m$1.nn$(($22c=$229.right))){
$22a=$22b.rightmostChild;
($229.key=$22a.key);
($229.item=$22a.item);
}
else{
$22a=$229;
}
treeMap$.$1dkeuw$1yr.removeNodeWithAtMostOneChild($22a);
return $229.item;
}
else{
return null;
}
};treeMap$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$TreeMap']},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','remove']};};
treeMap$.removeEntry=function($22d,$22e){
var treeMap$=this;
var $22f,$22g;
if(m$1.nn$(($22f=treeMap$.$1dkeuw$1za($22d)))&&m$1.nn$(($22g=$22f.item))&&m$1.$eq$($22g,$22e)){
var $22h;
var $22i,$22j;
if(m$1.nn$(($22i=$22f.left))&&m$1.nn$(($22j=$22f.right))){
$22h=$22i.rightmostChild;
($22f.key=$22h.key);
($22f.item=$22h.item);
}
else{
$22h=$22f;
}
treeMap$.$1dkeuw$1yr.removeNodeWithAtMostOneChild($22h);
return true;
}
else{
return false;
}
};treeMap$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$TreeMap',{t:m$1.$_Object}]}}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','removeEntry']};};
treeMap$.replaceEntry=function($22k,$22l,$22m){
var treeMap$=this;
var $22n;
if(m$1.nn$(($22n=treeMap$.$1dkeuw$1yh))){
var $22o=$22n;
while(true){
var $22p=treeMap$.$1dkeuw$1yi($22k,$22o.key);
if($22p===m$1.larger()) {
var $22q;
if(m$1.nn$(($22q=$22o.right))){
$22o=$22q;
}
else{
break;
}
}
else if($22p===m$1.smaller()) {
var $22r;
if(m$1.nn$(($22r=$22o.left))){
$22o=$22r;
}
else{
break;
}
}
else if($22p===m$1.equal()) {
var $22s;
if(m$1.nn$(($22s=$22o.item))&&m$1.$eq$($22s,$22l)){
($22o.item=$22m);
return true;
}
else{
return false;
}
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
}
return false;
};treeMap$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$TreeMap',{t:m$1.$_Object}]}},{nm:'newItem',mt:'prm',$t:'Item$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','replaceEntry']};};
treeMap$.iterator=function(){var treeMap$=this;
return treeMap$.NodeIterator$TreeMap();
};treeMap$.$_get=function($22t){var treeMap$=this;
return function(){var $22u;
if(m$1.is$(($22u=$22t),treeMap$.$$targs$$.Key$TreeMap))return ($22v=treeMap$.$1dkeuw$1za($22u),m$1.nn$($22v)?$22v.item:null);else return ($22w=treeMap$.find(m$1.forKey(m$1.jsc$2(($22x=$22u,m$1.jsc$3($22x,$22x.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}),{Key$forKey:{t:m$1.$_Object},Result$forKey:{t:m$1.$_Boolean}})),m$1.nn$($22w)?$22w.item:null)}();
var $22v,$22w,$22x;
};treeMap$.defines=function($22y){var treeMap$=this;
return function(){var $22z;
if(m$1.is$(($22z=$22y),treeMap$.$$targs$$.Key$TreeMap))return m$1.nn$(treeMap$.$1dkeuw$1za($22z));else return treeMap$.keys.any(m$1.jsc$2(($230=$22z,m$1.jsc$3($230,$230.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}))}();
var $230;
};treeMap$.getOrDefault=function($231,$232,$608kkw$){
var treeMap$=this;
var $233;
if(m$1.is$(($233=$231),treeMap$.$$targs$$.Key$TreeMap)){
return function(){var $234;
if(m$1.nn$(($234=treeMap$.$1dkeuw$1za($233))))return $234.item;else return $232}();
}
else{
return function(){var $235;
if(m$1.nn$(($235=treeMap$.find(m$1.forKey(m$1.jsc$2(($236=$233,m$1.jsc$3($236,$236.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}),{Key$forKey:{t:m$1.$_Object},Result$forKey:{t:m$1.$_Boolean}})))))return $235.item;else return $232}();
var $236;
}
};treeMap$.getOrDefault.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Item$TreeMap','Default$getOrDefault']},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}},{nm:'default',mt:'prm',$t:'Default$getOrDefault'}],$cont:TreeMap,tp:{Default$getOrDefault:{}},pa:3,d:['ceylon.collection','TreeMap','$m','getOrDefault']};};
treeMap$.higherEntries=function($237){var treeMap$=this;
return function(){function $238($$targs$$){
var $238$=new $238.$$;$238$.outer$=treeMap$;
$238$.$$targs$$=$$targs$$;
m$1.Iterable({Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/,Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/}}},$238$);
return $238$;
};$238.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:TreeMap,sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}}],d:['ceylon.collection','TreeMap']};};
function $init$$238(){
if($238.$$===undefined){
m$1.initTypeProto($238,'ceylon.collection::TreeMap.anonymous#0',m$1.Basic,m$1.Iterable);
(function($238$){
$238$.iterator=function(){var $238$=this;
return treeMap$.NodeIterator$TreeMap(treeMap$.$1dkeuw$1zm($237));
};$238$.toString=function(){return this.string.valueOf();};
})($238.$$.prototype);
}
return $238;
}
treeMap$.$init$$238=$init$$238;$init$$238();return $238();}();
};treeMap$.lowerEntries=function($23a){var treeMap$=this;
return function(){function $23b($$targs$$){
var $23b$=new $23b.$$;$23b$.outer$=treeMap$;
$23b$.$$targs$$=$$targs$$;
m$1.Iterable({Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/,Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/}}},$23b$);
return $23b$;
};$23b.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:TreeMap,sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}}],d:['ceylon.collection','TreeMap']};};
function $init$$23b(){
if($23b.$$===undefined){
m$1.initTypeProto($23b,'ceylon.collection::TreeMap.anonymous#1',m$1.Basic,m$1.Iterable);
(function($23b$){
$23b$.iterator=function(){var $23b$=this;
return treeMap$.ReverseNodeIterator$TreeMap(treeMap$.$1dkeuw$1zf($23a));
};$23b$.toString=function(){return this.string.valueOf();};
})($23b.$$.prototype);
}
return $23b;
}
treeMap$.$init$$23b=$init$$23b;$init$$23b();return $23b();}();
};treeMap$.ascendingEntries=function($23d,$23e){var treeMap$=this;
return treeMap$.higherEntries($23d).takeWhile(m$1.jsc$2((function($23f){return !m$1.$eq$(treeMap$.$1dkeuw$1yi($23f.key,$23e),m$1.larger());
}),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap}}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/,Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/}}])}));
};treeMap$.descendingEntries=function($23g,$23h){var treeMap$=this;
return treeMap$.lowerEntries($23g).takeWhile(m$1.jsc$2((function($23i){return !m$1.$eq$(treeMap$.$1dkeuw$1yi($23i.key,$23h),m$1.smaller());
}),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap}}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/,Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/}}])}));
};treeMap$.contains=function($23j){
var treeMap$=this;
var $23k,$23l;
if(m$1.is$(($23k=$23j),{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/,Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/}})&&m$1.nn$(($23l=treeMap$.$1dkeuw$1za($23k.key)))){
var $23m;
if(m$1.nn$(($23m=$23l.item))){
var $23n;
if(m$1.nn$(($23n=$23k.item))){
return m$1.$eq$($23n,$23m);
}
else{
return false;
}
}
else{
return !m$1.nn$($23k.item);
}
}
else{
return false;
}
};treeMap$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.$_Object}}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','contains']};};
treeMap$.clear=function(){var treeMap$=this;
return (treeMap$.$1dkeuw$1yh=null);
};m$1.atr$(treeMap$,'size',function(){
var treeMap$=this;
return ($23o=($23p=treeMap$.$1dkeuw$1yh,m$1.nn$($23p)?$23p.size:null),m$1.nn$($23o)?$23o:(0));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','size']};});
m$1.atr$(treeMap$,'first',function(){
var treeMap$=this;
return function(){var $23q;
if(m$1.nn$(($23q=($23r=treeMap$.$1dkeuw$1yh,m$1.nn$($23r)?$23r.leftmostChild:null))))return m$1.Entry($23q.key,$23q.item,{Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/,Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/});else return null}();
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}]},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','first']};});
m$1.atr$(treeMap$,'last',function(){
var treeMap$=this;
return function(){var $23s;
if(m$1.nn$(($23s=($23t=treeMap$.$1dkeuw$1yh,m$1.nn$($23t)?$23t.rightmostChild:null))))return m$1.Entry($23s.key,$23s.item,{Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/,Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/});else return null}();
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}]},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','last']};});
treeMap$.measure=function($23u,$23v){var treeMap$=this;
return TreeMap(m$1.jsc$2(m$1.jsc$3(treeMap$,treeMap$.$1dkeuw$1yi),[{nm:'x',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap},{nm:'y',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap}],{Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap,Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap}),treeMap$.higherEntries($23u).take($23v),{Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap,Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap});
};treeMap$.span=function($23w,$23x){var treeMap$=this;
return function(){var $23y=m$1.$eq$(treeMap$.$1dkeuw$1yi($23w,$23x),m$1.larger());return ($23z=m$1.jsc$2((function($240,$241){return ($242=($23y?treeMap$.$1dkeuw$1yi($241,$240):null),m$1.nn$($242)?$242:treeMap$.$1dkeuw$1yi($240,$241));
var $242;
}),[{nm:'x',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap},{nm:'y',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:m$1.mtt$([{t:m$1.$_String}])}),$243=($244=($23y?treeMap$.descendingEntries($23w,$23x):null),m$1.nn$($244)?$244:treeMap$.ascendingEntries($23w,$23x)),TreeMap($23z,$243,{Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap,Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap}));
var $23z,$243,$244;
}();
};treeMap$.spanFrom=function($245){var treeMap$=this;
return TreeMap(m$1.jsc$2(m$1.jsc$3(treeMap$,treeMap$.$1dkeuw$1yi),[{nm:'x',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap},{nm:'y',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap}],{Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap,Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap}),treeMap$.higherEntries($245),{Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap,Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap});
};treeMap$.spanTo=function($246){var treeMap$=this;
return TreeMap(m$1.jsc$2(m$1.jsc$3(treeMap$,treeMap$.$1dkeuw$1yi),[{nm:'x',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap},{nm:'y',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap}],{Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap,Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap}),treeMap$.takeWhile(m$1.jsc$2((function($247){return !m$1.$eq$(treeMap$.$1dkeuw$1yi($247.key,$246),m$1.larger());
}),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap}}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/,Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/}}])})),{Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap,Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap});
};treeMap$.clone=function(){var treeMap$=this;
return TreeMap$c_copy(treeMap$,{Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap,Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap});
};
treeMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},ps:[],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','clone']};};
m$1.atr$(treeMap$,'string',function(){
var treeMap$=this;
return function(){var $248;
if(m$1.nn$(($248=treeMap$.$1dkeuw$1yh)))return "{ ".plus($248.string).plus(" }");else return "{}"}();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','string']};});
treeMap$.equals=function($249){var treeMap$=this;
return treeMap$.getT$all()['ceylon.language::Map'].$$.prototype.equals.call(treeMap$,$249);
};m$1.atr$(treeMap$,'hash',function(){
var treeMap$=this;
return m$1.attrGetter(treeMap$.getT$all()['ceylon.language::Map'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','hash']};});
treeMap$.assertInvariants=function(){
var treeMap$=this;
treeMap$.$1dkeuw$24a();
treeMap$.$1dkeuw$24b();
treeMap$.$1dkeuw$24c();
};treeMap$.assertInvariants.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:TreeMap,pa:1,d:['ceylon.collection','TreeMap','$m','assertInvariants']};};
treeMap$.$1dkeuw$24a=function(){
var treeMap$=this;
m$1.asrt$((!treeMap$.$1dkeuw$1z7(treeMap$.$1dkeuw$1yh)),"Assertion failed: "+"\n\tviolated !isRed(root)\n\tat TreeMap.ceylon (749:15-749:28)",'749:8-749:29','TreeMap.ceylon');
};treeMap$.$1dkeuw$24a.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','assertBlackRoot$37b14f']};};
treeMap$.$1dkeuw$24b$defs$node=function($24d){var treeMap$=this;
return treeMap$.$1dkeuw$1yh;};
treeMap$.$1dkeuw$24b=function($24d){
var treeMap$=this;
if($24d===undefined){$24d=treeMap$.$1dkeuw$1yh;}
var $24e;
if(m$1.nn$(($24e=$24d))){
if(treeMap$.$1dkeuw$1z7($24e)){
m$1.asrt$((!treeMap$.$1dkeuw$1z7($24e.left)),"Assertion failed: "+"\n\tviolated !isRed(node.left)\n\tat TreeMap.ceylon (755:23-755:41)",'755:16-755:42','TreeMap.ceylon');
m$1.asrt$((!treeMap$.$1dkeuw$1z7($24e.right)),"Assertion failed: "+"\n\tviolated !isRed(node.right)\n\tat TreeMap.ceylon (756:23-756:42)",'756:16-756:43','TreeMap.ceylon');
m$1.asrt$((!treeMap$.$1dkeuw$1z7($24e.parent)),"Assertion failed: "+"\n\tviolated !isRed(node.parent)\n\tat TreeMap.ceylon (757:23-757:43)",'757:16-757:44','TreeMap.ceylon');
}
treeMap$.$1dkeuw$24b($24e.left);
treeMap$.$1dkeuw$24b($24e.right);
}
};treeMap$.$1dkeuw$24b.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','assertColors$bbyw4y']};};
treeMap$.$1dkeuw$24c$defs$node=function($24f,$24g,$24h){var treeMap$=this;
return treeMap$.$1dkeuw$1yh;};
treeMap$.$1dkeuw$24c$defs$blackCount=function($24f,$24g,$24h){return 0;};
treeMap$.$1dkeuw$24c$defs$pathBlackCount=function($24f,$24g,$24h){return null;};
treeMap$.$1dkeuw$24c=function($24f,$24g,$24h){
var treeMap$=this;
if($24f===undefined){$24f=treeMap$.$1dkeuw$1yh;}
if($24g===undefined){$24g=(0);}
if($24h===undefined){$24h=null;}
if(!treeMap$.$1dkeuw$1z7($24f)){
($24i=$24g,$24g=$24i.successor,$24i);
var $24i;
}
var $24j;
if(m$1.nn$(($24j=$24f))){
$24h=treeMap$.$1dkeuw$24c($24j.left,$24g,$24h);
$24h=treeMap$.$1dkeuw$24c($24j.right,$24g,$24h);
return $24h;
}
else{
var $24k;
if(m$1.nn$(($24k=$24h))){
m$1.asrt$((($24g==$24k)),"Assertion failed: "+"\n\tviolated blackCount == count\n\tat TreeMap.ceylon (781:23-781:43)",'781:16-781:44','TreeMap.ceylon');
}
else{
$24h=$24g;
}
return $24h;
}
};treeMap$.$1dkeuw$24c.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'node',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}},{nm:'blackCount',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'pathBlackCount',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','assertBlackNodesInPaths$9l267p']};};
function Node$TreeMap$$c($24l$){
}
function Node$TreeMap(){return Node$TreeMap$c_$c$.apply(this,arguments);}
function Node$TreeMap$c_$c$$$a($24m,$24n,$24o,$24l$){
$24l$.$1dkeuw$24p_=null;
$24l$.$1dkeuw$24q_=null;
$24l$.$1dkeuw$24r_=null;
$24l$.key_=$24m;
m$1.atr$($24l$,'key',function(){return this.key_;},function($24s){return this.key_=$24s;},function(){return{mod:$CCMM$,$t:'Key$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','key']};});
$24l$.item_=$24n;
m$1.atr$($24l$,'item',function(){return this.item_;},function($24t){return this.item_=$24t;},function(){return{mod:$CCMM$,$t:'Item$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','item']};});
$24l$.red_=$24o;
m$1.atr$($24l$,'red',function(){return this.red_;},function($24u){return this.red_=$24u;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','red']};});
return $24l$;
};
function Node$TreeMap$c_$c$($24m,$24n,$24o,$24l$){
$init$Node$TreeMap();
if($24l$===undefined)$24l$=new this.Node$TreeMap.$$;
$24l$.outer$=this;
Node$TreeMap$$c($24l$);
Node$TreeMap$c_$c$$$a($24m,$24n,$24o,$24l$);
return $24l$;
};
Node$TreeMap$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:'Item$TreeMap'},{nm:'red',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$cn','$def']};};
Node$TreeMap.Node$TreeMap$c_$c$=Node$TreeMap$c_$c$;
treeMap$.Node$TreeMap$c_$c$=Node$TreeMap$c_$c$;
Node$TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:'Item$TreeMap'},{nm:'red',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$c','Node$7z3hge']};};
function $init$Node$TreeMap(){
if(Node$TreeMap.$$===undefined){
m$1.initTypeProto(Node$TreeMap,'ceylon.collection::TreeMap.Node',m$1.Basic);
TreeMap.Node$TreeMap=Node$TreeMap;
(function($24l$){
m$1.atr$($24l$,'key',function(){return this.key_;},function($24v){return this.key_=$24v;},function(){return{mod:$CCMM$,$t:'Key$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','key']};});
m$1.atr$($24l$,'item',function(){return this.item_;},function($24w){return this.item_=$24w;},function(){return{mod:$CCMM$,$t:'Item$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','item']};});
m$1.atr$($24l$,'left',function(){return this.$1dkeuw$24p_;},function($24x){return this.$1dkeuw$24p_=$24x;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','left']};});
m$1.atr$($24l$,'right',function(){return this.$1dkeuw$24q_;},function($24y){return this.$1dkeuw$24q_=$24y;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','right']};});
m$1.atr$($24l$,'parent',function(){return this.$1dkeuw$24r_;},function($24z){return this.$1dkeuw$24r_=$24z;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','parent']};});
m$1.atr$($24l$,'red',function(){return this.red_;},function($250){return this.red_=$250;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','red']};});
m$1.atr$($24l$,'onLeft',function(){
var $24l$=this;
return function(){var $251;
if(m$1.nn$(($251=($252=$24l$.parent,m$1.nn$($252)?$252.left:null))))return m$1.$eq$($24l$,$251);else return false}();
var $252;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','onLeft']};});
m$1.atr$($24l$,'onRight',function(){
var $24l$=this;
return function(){var $253;
if(m$1.nn$(($253=($254=$24l$.parent,m$1.nn$($254)?$254.right:null))))return m$1.$eq$($24l$,$253);else return false}();
var $254;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','onRight']};});
m$1.atr$($24l$,'grandparent',function(){
var $24l$=this;
return ($255=$24l$.parent,m$1.nn$($255)?$255.parent:null);
var $255;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','grandparent']};});
m$1.atr$($24l$,'sibling',function(){
var $24l$=this;
var $256;
if(m$1.nn$(($256=$24l$.parent))){
if($24l$.onLeft){
return $256.right;
}
else{
if($24l$.onRight){
return $256.left;
}
else{
m$1.asrt$((false),"Assertion failed: "+"\n\tviolated false\n\tat TreeMap.ceylon (81:27-81:33)",'81:20-81:34','TreeMap.ceylon');
}
}
}
else{
return null;
}
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','sibling']};});m$1.atr$($24l$,'uncle',function(){
var $24l$=this;
return ($257=$24l$.parent,m$1.nn$($257)?$257.sibling:null);
var $257;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','uncle']};});
m$1.atr$($24l$,'rightmostChild',function(){
var $24l$=this;
var $258=$24l$;
var $259;
while(m$1.nn$(($259=$258.right))){
$258=$259;
}
return $258;
},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','rightmostChild']};});m$1.atr$($24l$,'leftmostChild',function(){
var $24l$=this;
var $25a=$24l$;
var $25b;
while(m$1.nn$(($25b=$25a.left))){
$25a=$25b;
}
return $25a;
},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','leftmostChild']};});m$1.atr$($24l$,'string',function(){
var $24l$=this;
var $25c=m$1.StringBuilder();
var $25d;
if(m$1.nn$(($25d=$24l$.left))){
$25c.append($25d.string).append(", ");
}
$25c.append($24l$.key.string).append("->").append(($25e=($25f=$24l$.item,m$1.nn$($25f)?$25f.string:null),m$1.nn$($25e)?$25e:"<null>"));
var $25e,$25f;
var $25g;
if(m$1.nn$(($25g=$24l$.right))){
$25c.append(", ").append($25g.string);
}
return $25c.string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:treeMap$.Node$TreeMap,pa:3,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','string']};});m$1.atr$($24l$,'size',function(){
var $24l$=this;
var $25h=(1);
var $25i;
if(m$1.nn$(($25i=$24l$.left))){
($25h=$25h+$25i.size);
}
var $25j;
if(m$1.nn$(($25j=$24l$.right))){
($25h=$25h+$25j.size);
}
return $25h;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','size']};});$24l$.toString=function(){return this.string.valueOf();};
})(Node$TreeMap.$$.prototype);
}
return Node$TreeMap;
}
treeMap$.$init$Node$TreeMap=$init$Node$TreeMap;treeMap$.Node$TreeMap=Node$TreeMap;
function NodeIterator$TreeMap($1dkeuw$25k,$25l$){
$init$NodeIterator$TreeMap();
if($25l$===undefined)$25l$=new this.NodeIterator$TreeMap.$$;
$25l$.outer$=this;
if($1dkeuw$25k===undefined){$1dkeuw$25k=$init$TreeMap().$$.prototype.$init$NodeIterator$TreeMap().$defs$current($25l$);}
$25l$.$1dkeuw$25k_=$1dkeuw$25k;
m$1.Iterator({Element$Iterator:{t:m$1.Entry,a:{Key$Entry:$25l$.outer$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/,Item$Entry:$25l$.outer$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/}}},$25l$);
return $25l$;
}
NodeIterator$TreeMap.$defs$current=function($25l$){return ($25m=$25l$.outer$.$1dkeuw$1yh,m$1.nn$($25m)?$25m.leftmostChild:null)};NodeIterator$TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'current',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},pa:1027}],$cont:TreeMap,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}}],d:['ceylon.collection','TreeMap','$c','NodeIterator$6tiwsc']};};
function $init$NodeIterator$TreeMap(){
if(NodeIterator$TreeMap.$$===undefined){
m$1.initTypeProto(NodeIterator$TreeMap,'ceylon.collection::TreeMap.NodeIterator',m$1.Basic,m$1.Iterator);
TreeMap.NodeIterator$TreeMap=NodeIterator$TreeMap;
(function($25l$){
m$1.atr$($25l$,'$1dkeuw$25k',function(){return this.$1dkeuw$25k_;},function($25n){return this.$1dkeuw$25k_=$25n;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.NodeIterator$TreeMap,pa:1027,d:['ceylon.collection','TreeMap','$c','NodeIterator$6tiwsc','$at','current$5dq3a0']};});
$25l$.next=function(){
var $25l$=this;
var $25o=function(){var $25p;
if(m$1.nn$(($25p=$25l$.$1dkeuw$25k)))return m$1.Entry($25p.key,$25p.item,{Key$Entry:$25l$.outer$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/,Item$Entry:$25l$.outer$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/});else return m$1.finished()}();
var $25q,$25r;
if(m$1.nn$(($25q=$25l$.$1dkeuw$25k))&&m$1.nn$(($25r=$25q.right))){
$25l$.$1dkeuw$25k=$25r;
var $25s;
while(m$1.nn$(($25s=($25t=$25l$.$1dkeuw$25k,m$1.nn$($25t)?$25t.left:null)))){
$25l$.$1dkeuw$25k=$25s;
}
var $25t;
}
else{
var $25u;
if(m$1.nn$(($25u=$25l$.$1dkeuw$25k))){
var $25v=$25u;
var $25w;
while(m$1.nn$(($25w=$25v.parent))&&$25v.onRight){
$25v=$25w;
}
$25l$.$1dkeuw$25k=$25v.parent;
}
else{
$25l$.$1dkeuw$25k=null;
}
}
return $25o;
};$25l$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}},{t:m$1.Finished}]},ps:[],$cont:treeMap$.NodeIterator$TreeMap,pa:3,d:['ceylon.collection','TreeMap','$c','NodeIterator$6tiwsc','$m','next']};};
$25l$.toString=function(){return this.string.valueOf();};
})(NodeIterator$TreeMap.$$.prototype);
}
return NodeIterator$TreeMap;
}
treeMap$.$init$NodeIterator$TreeMap=$init$NodeIterator$TreeMap;treeMap$.NodeIterator$TreeMap=NodeIterator$TreeMap;
function ReverseNodeIterator$TreeMap($1dkeuw$25x,$25y$){
$init$ReverseNodeIterator$TreeMap();
if($25y$===undefined)$25y$=new this.ReverseNodeIterator$TreeMap.$$;
$25y$.outer$=this;
if($1dkeuw$25x===undefined){$1dkeuw$25x=$init$TreeMap().$$.prototype.$init$ReverseNodeIterator$TreeMap().$defs$current($25y$);}
$25y$.$1dkeuw$25x_=$1dkeuw$25x;
m$1.Iterator({Element$Iterator:{t:m$1.Entry,a:{Key$Entry:$25y$.outer$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/,Item$Entry:$25y$.outer$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/}}},$25y$);
return $25y$;
}
ReverseNodeIterator$TreeMap.$defs$current=function($25y$){return ($25z=$25y$.outer$.$1dkeuw$1yh,m$1.nn$($25z)?$25z.rightmostChild:null)};ReverseNodeIterator$TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'current',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},pa:1027}],$cont:TreeMap,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}}],d:['ceylon.collection','TreeMap','$c','ReverseNodeIterator$z6e966']};};
function $init$ReverseNodeIterator$TreeMap(){
if(ReverseNodeIterator$TreeMap.$$===undefined){
m$1.initTypeProto(ReverseNodeIterator$TreeMap,'ceylon.collection::TreeMap.ReverseNodeIterator',m$1.Basic,m$1.Iterator);
TreeMap.ReverseNodeIterator$TreeMap=ReverseNodeIterator$TreeMap;
(function($25y$){
m$1.atr$($25y$,'$1dkeuw$25x',function(){return this.$1dkeuw$25x_;},function($260){return this.$1dkeuw$25x_=$260;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.ReverseNodeIterator$TreeMap,pa:1027,d:['ceylon.collection','TreeMap','$c','ReverseNodeIterator$z6e966','$at','current$suzjhm']};});
$25y$.next=function(){
var $25y$=this;
var $261=function(){var $262;
if(m$1.nn$(($262=$25y$.$1dkeuw$25x)))return m$1.Entry($262.key,$262.item,{Key$Entry:$25y$.outer$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/,Item$Entry:$25y$.outer$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/});else return m$1.finished()}();
var $263,$264;
if(m$1.nn$(($263=$25y$.$1dkeuw$25x))&&m$1.nn$(($264=$263.left))){
$25y$.$1dkeuw$25x=$264;
var $265;
while(m$1.nn$(($265=($266=$25y$.$1dkeuw$25x,m$1.nn$($266)?$266.right:null)))){
$25y$.$1dkeuw$25x=$265;
}
var $266;
}
else{
var $267;
if(m$1.nn$(($267=$25y$.$1dkeuw$25x))){
$25y$.$1dkeuw$25x=$267.parent;
var $268=$267;
var $269;
while(m$1.nn$(($269=$25y$.$1dkeuw$25x))&&$268.onLeft){
$268=$269;
$25y$.$1dkeuw$25x=$269.parent;
}
}
else{
$25y$.$1dkeuw$25x=null;
}
}
return $261;
};$25y$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}},{t:m$1.Finished}]},ps:[],$cont:treeMap$.ReverseNodeIterator$TreeMap,pa:3,d:['ceylon.collection','TreeMap','$c','ReverseNodeIterator$z6e966','$m','next']};};
$25y$.toString=function(){return this.string.valueOf();};
})(ReverseNodeIterator$TreeMap.$$.prototype);
}
return ReverseNodeIterator$TreeMap;
}
treeMap$.$init$ReverseNodeIterator$TreeMap=$init$ReverseNodeIterator$TreeMap;treeMap$.ReverseNodeIterator$TreeMap=ReverseNodeIterator$TreeMap;
$init$removeCases();
$init$Node$TreeMap();
$init$NodeIterator$TreeMap();
$init$ReverseNodeIterator$TreeMap();
treeMap$.toString=function(){return this.string.valueOf();};
})(TreeMap.$$.prototype);
}
return TreeMap;
}
ex$.$init$TreeMap=$init$TreeMap;$init$TreeMap();TreeMap.inst$$=function($26a){
var treeMap$=new TreeMap.$$;
m$1.set_type_args(treeMap$,{Key$TreeMap:$26a.$$targs$$.Type$Class.a.Key$TreeMap,Item$TreeMap:$26a.$$targs$$.Type$Class.a.Item$TreeMap});
m$1.set_type_args(treeMap$,{Key$MutableMap:treeMap$.$$targs$$.Key$TreeMap,Item$MutableMap:treeMap$.$$targs$$.Item$TreeMap,Key$Map:treeMap$.$$targs$$.Key$TreeMap,Item$Map:treeMap$.$$targs$$.Item$TreeMap,Element$Collection:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/,Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/}},Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/,Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/}},Element$Category:{t:m$1.$_Object},Item$Correspondence:treeMap$.$$targs$$.Item$TreeMap,Key$Correspondence:{t:m$1.$_Object},Key$MapMutator:treeMap$.$$targs$$.Key$TreeMap,Item$MapMutator:treeMap$.$$targs$$.Item$TreeMap,Key$KeyedCorrespondenceMutator:treeMap$.$$targs$$.Key$TreeMap,Item$KeyedCorrespondenceMutator:treeMap$.$$targs$$.Item$TreeMap,Item$CorrespondenceMutator:treeMap$.$$targs$$.Item$TreeMap,Item$SortedMap:treeMap$.$$targs$$.Item$TreeMap,Key$SortedMap:treeMap$.$$targs$$.Key$TreeMap,Element$Ranged:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/,Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/}},Subrange$Ranged:{t:SortedMap,a:{Key$SortedMap:treeMap$.$$targs$$.Key$TreeMap,Item$SortedMap:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/}},Index$Ranged:treeMap$.$$targs$$.Key$TreeMap});
return treeMap$;
};
TreeMap.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::TreeMap.root')return o.$1dkeuw$1yh_;
else if(n==='ceylon.collection::TreeMap.removeCases')return o.$1dkeuw$1yr_;
else throw new TypeError('unknown attribute');
};
TreeMap.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::TreeMap.root')o.$1dkeuw$1yh_=i;
else if(n==='ceylon.collection::TreeMap.removeCases')o.$1dkeuw$1yr_=i;
else throw new TypeError('unknown attribute');
};
TreeMap.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1yh)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1yr))];
};
var $23o,$23p,$23r,$23t,$25m,$25z;
function naturalOrderTreeMap($26b,$fl191b$){return TreeMap(m$1.jsc$2((function($26c,$26d){return $26c.compare($26d);
}),[{nm:'x',mt:'prm',$t:$fl191b$.Key$naturalOrderTreeMap},{nm:'y',mt:'prm',$t:$fl191b$.Key$naturalOrderTreeMap}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:m$1.mtt$([$fl191b$.Key$naturalOrderTreeMap,$fl191b$.Key$naturalOrderTreeMap])}),$26b,{Item$TreeMap:$fl191b$.Item$naturalOrderTreeMap,Key$TreeMap:$fl191b$.Key$naturalOrderTreeMap});
};
naturalOrderTreeMap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Key$naturalOrderTreeMap',Item$TreeMap:'Item$naturalOrderTreeMap'}},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$naturalOrderTreeMap',Item$Entry:'Item$naturalOrderTreeMap'}}}}}],tp:{Key$naturalOrderTreeMap:{sts:[{t:m$1.Comparable,a:{Other$Comparable:'Key$naturalOrderTreeMap'}}]},Item$naturalOrderTreeMap:{sts:[{t:m$1.$_Object}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:naturalOrderTreeMap')];},d:['ceylon.collection','naturalOrderTreeMap']};};
ex$.naturalOrderTreeMap=naturalOrderTreeMap;
function TreeSet$$c($$targs$$,treeSet$){
m$1.set_type_args(treeSet$,$$targs$$);
SortedSet({Element$SortedSet:$$targs$$.Element$TreeSet},treeSet$);
MutableSet({Element$MutableSet:$$targs$$.Element$TreeSet},treeSet$);
m$1.Ranged({Subrange$Ranged:{t:TreeSet,a:{Element$TreeSet:$$targs$$.Element$TreeSet}},Element$Ranged:$$targs$$.Element$TreeSet/*ORALE!Element inv pero Element var*/,Index$Ranged:$$targs$$.Element$TreeSet/*ORALE!Element inv pero Index var*/},treeSet$);
}
function TreeSet(){return TreeSet$c_$c$.apply(undefined,arguments);}
function TreeSet$c_$c$$$a($26e,$26f,$$targs$$,treeSet$){
if($26f===undefined){$26f=m$1.empty();}
treeSet$.$1dkeuw$26g_=$26e;
m$1.atr$(treeSet$,'$1dkeuw$26g',function(){return this.$1dkeuw$26g_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],$cont:TreeSet,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet:$m:compare$i3xpjz')];},d:['ceylon.collection','TreeSet','$m','compare$i3xpjz']};});
treeSet$.$1dkeuw$26h_=($26i=$26e,$26j=$26f.$_map(m$1.jsc$2((function($26k){return m$1.Entry($26k,$26k,{Key$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Key var*/,Item$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Item var*/});
}),[{nm:'elem',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Return$Callable:{t:m$1.Entry,a:{Key$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Key var*/,Item$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Item var*/}},Arguments$Callable:m$1.mtt$([treeSet$.$$targs$$.Element$TreeSet])}),{Result$map:{t:m$1.Entry,a:{Key$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Key var*/,Item$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Item var*/}}}),TreeMap($26i,$26j,{Item$TreeMap:treeSet$.$$targs$$.Element$TreeSet,Key$TreeMap:treeSet$.$$targs$$.Element$TreeSet}));
m$1.atr$(treeSet$,'$1dkeuw$26h',function(){return this.$1dkeuw$26h_;},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Element$TreeSet',Item$TreeMap:'Element$TreeSet'}},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','map$n8fv26']};});
var $26i,$26j;
return treeSet$;
};
function TreeSet$c_$c$($26e,$26f,$$targs$$,treeSet$){
$init$TreeSet();
if(treeSet$===undefined)treeSet$=new TreeSet.$$;
if($26f===undefined){$26f=m$1.empty();}
TreeSet$$c($$targs$$,treeSet$);
TreeSet$c_$c$$$a($26e,$26f,$$targs$$,treeSet$);
return treeSet$;
};
TreeSet$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:['Element$TreeSet','Element$TreeSet']}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],an:function(){return[m$1.doc("A comparator function used to sort the elements.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$TreeSet'}},an:function(){return[m$1.doc("The initial elements of the set.")];}}],$cont:TreeSet,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet:$cn:$def')];},d:['ceylon.collection','TreeSet','$cn','$def']};};
TreeSet.TreeSet$c_$c$=TreeSet$c_$c$;
ex$.TreeSet$c_$c$=TreeSet$c_$c$;
function TreeSet$c_copy$$a($26l,$$targs$$,treeSet$){
treeSet$.$1dkeuw$26g_=($26m=$26l,m$1.jsc$3($26m,$26m.$1dkeuw$26g));
m$1.atr$(treeSet$,'$1dkeuw$26g',function(){return this.$1dkeuw$26g_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],$cont:TreeSet,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet:$m:compare$i3xpjz')];},d:['ceylon.collection','TreeSet','$m','compare$i3xpjz']};});
var $26m;
treeSet$.$1dkeuw$26h_=$26l.$1dkeuw$26h.clone();
m$1.atr$(treeSet$,'$1dkeuw$26h',function(){return this.$1dkeuw$26h_;},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Element$TreeSet',Item$TreeMap:'Element$TreeSet'}},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','map$n8fv26']};});
return treeSet$;
};
function TreeSet$c_copy($26l,$$targs$$,treeSet$){
$init$TreeSet();
if(treeSet$===undefined)treeSet$=new TreeSet.$$;
TreeSet$$c($$targs$$,treeSet$);
TreeSet$c_copy$$a($26l,$$targs$$,treeSet$);
return treeSet$;
};
TreeSet$c_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'treeSet',mt:'prm',$t:{t:TreeSet,a:{Element$TreeSet:'Element$TreeSet'}}}],$cont:TreeSet,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet:$cn:copy')];},d:['ceylon.collection','TreeSet','$cn','copy']};};
TreeSet.TreeSet$c_copy=TreeSet$c_copy;
ex$.TreeSet$c_copy=TreeSet$c_copy;
TreeSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:['Element$TreeSet','Element$TreeSet']}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],an:function(){return[m$1.doc("A comparator function used to sort the elements.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$TreeSet'}},an:function(){return[m$1.doc("The initial elements of the set.")];}}],tp:{Element$TreeSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:MutableSet,a:{Element$MutableSet:'Element$TreeSet'}},{t:SortedSet,a:{Element$SortedSet:'Element$TreeSet'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:TreeSet,a:{Element$TreeSet:'Element$TreeSet'}},Element$Ranged:'Element$TreeSet',Index$Ranged:'Element$TreeSet'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet'),m$1.see(m$1.$arr$sa$([m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.collection'),naturalOrderTreeSet)],{t:m$1.FunctionDeclaration$meta$declaration})),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','TreeSet']};};
ex$.TreeSet=TreeSet;
function $init$TreeSet(){
if(TreeSet.$$===undefined){
m$1.initTypeProto(TreeSet,'ceylon.collection::TreeSet',m$1.Basic,$init$SortedSet(),$init$MutableSet(),m$1.Ranged);
(function(treeSet$){
m$1.atr$(treeSet$,'$1dkeuw$26h',function(){return this.$1dkeuw$26h_;},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Element$TreeSet',Item$TreeMap:'Element$TreeSet'}},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','map$n8fv26']};});
treeSet$.contains=function($26n){var treeSet$=this;
return treeSet$.$1dkeuw$26h.defines($26n);
};treeSet$.add=function($26o){var treeSet$=this;
return !m$1.nn$(treeSet$.$1dkeuw$26h.put($26o,$26o));
};treeSet$.remove=function($26p){var treeSet$=this;
return m$1.nn$(treeSet$.$1dkeuw$26h.remove($26p));
};treeSet$.clear=function(){var treeSet$=this;
return treeSet$.$1dkeuw$26h.clear();
};treeSet$.iterator=function(){var treeSet$=this;
return treeSet$.$1dkeuw$26h.keys.iterator();
};m$1.atr$(treeSet$,'first',function(){
var treeSet$=this;
return ($26q=treeSet$.$1dkeuw$26h.first,m$1.nn$($26q)?$26q.key:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$TreeSet']},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','first']};});
m$1.atr$(treeSet$,'last',function(){
var treeSet$=this;
return ($26r=treeSet$.$1dkeuw$26h.last,m$1.nn$($26r)?$26r.key:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$TreeSet']},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','last']};});
treeSet$.higherElements=function($26s){var treeSet$=this;
return treeSet$.$1dkeuw$26h.higherEntries($26s).$_map(m$1.jsc$2(function($O$){return $O$.key;},[{nm:'_0',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:treeSet$.$$targs$$.Element$TreeSet,Item$Entry:treeSet$.$$targs$$.Element$TreeSet}}}],{Key$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Key var*/,Item$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Item var*/}),{Result$map:treeSet$.$$targs$$.Element$TreeSet});
};treeSet$.lowerElements=function($26t){var treeSet$=this;
return treeSet$.$1dkeuw$26h.lowerEntries($26t).$_map(m$1.jsc$2(function($O$){return $O$.key;},[{nm:'_0',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:treeSet$.$$targs$$.Element$TreeSet,Item$Entry:treeSet$.$$targs$$.Element$TreeSet}}}],{Key$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Key var*/,Item$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Item var*/}),{Result$map:treeSet$.$$targs$$.Element$TreeSet});
};treeSet$.ascendingElements=function($26u,$26v){var treeSet$=this;
return treeSet$.higherElements($26u).takeWhile(m$1.jsc$2((function($26w){return !m$1.$eq$(treeSet$.$1dkeuw$26g($26w,$26v),m$1.larger());
}),[{nm:'element',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([treeSet$.$$targs$$.Element$TreeSet])}));
};treeSet$.descendingElements=function($26x,$26y){var treeSet$=this;
return treeSet$.lowerElements($26x).takeWhile(m$1.jsc$2((function($26z){return !m$1.$eq$(treeSet$.$1dkeuw$26g($26z,$26y),m$1.smaller());
}),[{nm:'element',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([treeSet$.$$targs$$.Element$TreeSet])}));
};treeSet$.measure=function($270,$271){var treeSet$=this;
return TreeSet(m$1.jsc$2(m$1.jsc$3(treeSet$,treeSet$.$1dkeuw$26g),[{nm:'x',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet},{nm:'y',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet}),treeSet$.higherElements($270).take($271),{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});
};treeSet$.span=function($272,$273){var treeSet$=this;
return function(){var $274=m$1.$eq$(treeSet$.$1dkeuw$26g($272,$273),m$1.larger());return ($275=m$1.jsc$2((function($276,$277){return ($278=($274?treeSet$.$1dkeuw$26g($277,$276):null),m$1.nn$($278)?$278:treeSet$.$1dkeuw$26g($276,$277));
var $278;
}),[{nm:'x',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet},{nm:'y',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:m$1.mtt$([{t:m$1.$_String}])}),$279=($27a=($274?treeSet$.descendingElements($272,$273):null),m$1.nn$($27a)?$27a:treeSet$.ascendingElements($272,$273)),TreeSet($275,$279,{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet}));
var $275,$279,$27a;
}();
};treeSet$.spanFrom=function($27b){var treeSet$=this;
return TreeSet(m$1.jsc$2(m$1.jsc$3(treeSet$,treeSet$.$1dkeuw$26g),[{nm:'x',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet},{nm:'y',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet}),treeSet$.higherElements($27b),{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});
};treeSet$.spanTo=function($27c){var treeSet$=this;
return TreeSet(m$1.jsc$2(m$1.jsc$3(treeSet$,treeSet$.$1dkeuw$26g),[{nm:'x',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet},{nm:'y',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet}),treeSet$.takeWhile(m$1.jsc$2((function($27d){return !m$1.$eq$(treeSet$.$1dkeuw$26g($27d,$27c),m$1.larger());
}),[{nm:'element',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([treeSet$.$$targs$$.Element$TreeSet])})),{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});
};treeSet$.clone=function(){var treeSet$=this;
return TreeSet$c_copy(treeSet$,{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});
};
treeSet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeSet,a:{Element$TreeSet:'Element$TreeSet'}},ps:[],$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$m','clone']};};
treeSet$.complement=function($27e,$hn5pfs$){
var treeSet$=this;
var $27f=HashSet(undefined,undefined,undefined,{Element$HashSet:treeSet$.$$targs$$.Element$TreeSet});
var $27h;for(var $27g=treeSet$.iterator();($27h=$27g.next())!==m$1.finished();){
if((!m$1.$cnt$($27e,$27h))){
$27f.add($27h);
}
}
return $27f;
};treeSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:'Element$TreeSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:TreeSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','complement']};};
treeSet$.exclusiveUnion=function($27i,$w5s243$){
var treeSet$=this;
var $27j=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([treeSet$.$$targs$$.Element$TreeSet,$w5s243$.Other$exclusiveUnion])});
var $27l;for(var $27k=treeSet$.iterator();($27l=$27k.next())!==m$1.finished();){
if((!m$1.$cnt$($27i,$27l))){
$27j.add($27l);
}
}
var $27n;for(var $27m=$27i.iterator();($27n=$27m.next())!==m$1.finished();){
if((!m$1.$cnt$(treeSet$,$27n))){
$27j.add($27n);
}
}
return $27j;
};treeSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$TreeSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:TreeSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','exclusiveUnion']};};
treeSet$.intersection=function($27o,$8ak55h$){
var treeSet$=this;
var $27p=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mit$([treeSet$.$$targs$$.Element$TreeSet,$8ak55h$.Other$intersection])});
var $27r;for(var $27q=treeSet$.iterator();($27r=$27q.next())!==m$1.finished();){
var $27s;
if(m$1.$cnt$($27o,$27r)&&m$1.is$(($27s=$27r),$8ak55h$.Other$intersection,$8ak55h$)){
$27p.add($27s);
}
}
return $27p;
};treeSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'i',l:['Element$TreeSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:TreeSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','intersection']};};
treeSet$.union=function($27t,$vdkdyl$){
var treeSet$=this;
var $27u=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([treeSet$.$$targs$$.Element$TreeSet,$vdkdyl$.Other$union])});
$27u.addAll(treeSet$);
$27u.addAll($27t);
return $27u;
};treeSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$TreeSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:TreeSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','union']};};
treeSet$.equals=function($27v){var treeSet$=this;
return treeSet$.getT$all()['ceylon.language::Set'].$$.prototype.equals.call(treeSet$,$27v);
};m$1.atr$(treeSet$,'hash',function(){
var treeSet$=this;
return m$1.attrGetter(treeSet$.getT$all()['ceylon.language::Set'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','hash']};});
treeSet$.toString=function(){return this.string.valueOf();};
})(TreeSet.$$.prototype);
}
return TreeSet;
}
ex$.$init$TreeSet=$init$TreeSet;$init$TreeSet();TreeSet.inst$$=function($27w){
var treeSet$=new TreeSet.$$;
m$1.set_type_args(treeSet$,{Element$TreeSet:$27w.$$targs$$.Type$Class.a.Element$TreeSet});
m$1.set_type_args(treeSet$,{Element$MutableSet:treeSet$.$$targs$$.Element$TreeSet,Element$Set:treeSet$.$$targs$$.Element$TreeSet,Element$Collection:treeSet$.$$targs$$.Element$TreeSet,Absent$Iterable:{t:m$1.Null},Element$Iterable:treeSet$.$$targs$$.Element$TreeSet,Element$Category:{t:m$1.$_Object},Element$SetMutator:treeSet$.$$targs$$.Element$TreeSet,Element$SortedSet:treeSet$.$$targs$$.Element$TreeSet,Element$Ranged:treeSet$.$$targs$$.Element$TreeSet,Subrange$Ranged:{t:SortedSet,a:{Element$SortedSet:treeSet$.$$targs$$.Element$TreeSet}},Index$Ranged:treeSet$.$$targs$$.Element$TreeSet});
return treeSet$;
};
TreeSet.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::TreeSet.map')return o.$1dkeuw$26h_;
else throw new TypeError('unknown attribute');
};
TreeSet.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::TreeSet.map')o.$1dkeuw$26h_=i;
else throw new TypeError('unknown attribute');
};
TreeSet.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$26h))];
};
var $26q,$26r;
function naturalOrderTreeSet($27x,$fl14hl$){return TreeSet(m$1.jsc$2((function($27y,$27z){return $27y.compare($27z);
}),[{nm:'x',mt:'prm',$t:$fl14hl$.Element$naturalOrderTreeSet},{nm:'y',mt:'prm',$t:$fl14hl$.Element$naturalOrderTreeSet}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:m$1.mtt$([$fl14hl$.Element$naturalOrderTreeSet,$fl14hl$.Element$naturalOrderTreeSet])}),$27x,{Element$TreeSet:$fl14hl$.Element$naturalOrderTreeSet});
};
naturalOrderTreeSet.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeSet,a:{Element$TreeSet:'Element$naturalOrderTreeSet'}},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$naturalOrderTreeSet'}}}],tp:{Element$naturalOrderTreeSet:{sts:[{t:m$1.Comparable,a:{Other$Comparable:'Element$naturalOrderTreeSet'}}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:naturalOrderTreeSet')];},d:['ceylon.collection','naturalOrderTreeSet']};};
ex$.naturalOrderTreeSet=naturalOrderTreeSet;
function UnmodifiableList($1dkeuw$280,$$targs$$,unmodifiableList$){
$init$UnmodifiableList();
if(unmodifiableList$===undefined)unmodifiableList$=new UnmodifiableList.$$;
m$1.set_type_args(unmodifiableList$,$$targs$$);
unmodifiableList$.$1dkeuw$280_=$1dkeuw$280;
m$1.List({Element$List:$$targs$$.Element$UnmodifiableList},unmodifiableList$);
return unmodifiableList$;
}
UnmodifiableList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'list',mt:'prm',$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}}}],tp:{Element$UnmodifiableList:{dv:'out'}},sts:[{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}}],pa:2048,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:UnmodifiableList'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','UnmodifiableList']};};
ex$.UnmodifiableList=UnmodifiableList;
function $init$UnmodifiableList(){
if(UnmodifiableList.$$===undefined){
m$1.initTypeProto(UnmodifiableList,'ceylon.collection::UnmodifiableList',m$1.Basic,m$1.List);
(function(unmodifiableList$){
m$1.atr$(unmodifiableList$,'$1dkeuw$280',function(){return this.$1dkeuw$280_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}},$cont:UnmodifiableList,d:['ceylon.collection','UnmodifiableList','$at','list$1bhyan']};});
unmodifiableList$.getFromFirst=function($281){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$280.getFromFirst($281);
};m$1.atr$(unmodifiableList$,'size',function(){
var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$280.size;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','size']};});
m$1.atr$(unmodifiableList$,'lastIndex',function(){
var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$280.lastIndex;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','lastIndex']};});
m$1.atr$(unmodifiableList$,'first',function(){
var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$280.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$UnmodifiableList']},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','first']};});
m$1.atr$(unmodifiableList$,'rest',function(){
var unmodifiableList$=this;
return UnmodifiableList(unmodifiableList$.$1dkeuw$280.rest,{Element$UnmodifiableList:unmodifiableList$.$$targs$$.Element$UnmodifiableList});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','rest']};});
unmodifiableList$.iterator=function(){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$280.iterator();
};m$1.atr$(unmodifiableList$,'reversed',function(){
var unmodifiableList$=this;
return UnmodifiableList(unmodifiableList$.$1dkeuw$280.reversed,{Element$UnmodifiableList:unmodifiableList$.$$targs$$.Element$UnmodifiableList});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','reversed']};});
unmodifiableList$.measure=function($282,$283){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$280.measure($282,$283);
};unmodifiableList$.span=function($284,$285){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$280.span($284,$285);
};unmodifiableList$.spanFrom=function($286){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$280.spanFrom($286);
};unmodifiableList$.spanTo=function($287){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$280.spanTo($287);
};unmodifiableList$.equals=function($288){var unmodifiableList$=this;
return m$1.$eq$(unmodifiableList$.$1dkeuw$280,$288);
};m$1.atr$(unmodifiableList$,'hash',function(){
var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$280.hash;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','hash']};});
unmodifiableList$.clone=function(){var unmodifiableList$=this;
return UnmodifiableList(unmodifiableList$.$1dkeuw$280.clone(),{Element$UnmodifiableList:unmodifiableList$.$$targs$$.Element$UnmodifiableList});
};unmodifiableList$.each=function($289){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$280.each($289);
};unmodifiableList$.toString=function(){return this.string.valueOf();};
})(UnmodifiableList.$$.prototype);
}
return UnmodifiableList;
}
ex$.$init$UnmodifiableList=$init$UnmodifiableList;$init$UnmodifiableList();UnmodifiableList.inst$$=function($28a){
var unmodifiableList$=new UnmodifiableList.$$;
m$1.set_type_args(unmodifiableList$,{Element$UnmodifiableList:$28a.$$targs$$.Type$Class.a.Element$UnmodifiableList});
m$1.set_type_args(unmodifiableList$,{Element$List:unmodifiableList$.$$targs$$.Element$UnmodifiableList,Element$Collection:unmodifiableList$.$$targs$$.Element$UnmodifiableList,Absent$Iterable:{t:m$1.Null},Element$Iterable:unmodifiableList$.$$targs$$.Element$UnmodifiableList,Element$Category:{t:m$1.$_Object},Item$Correspondence:unmodifiableList$.$$targs$$.Element$UnmodifiableList,Key$Correspondence:{t:m$1.Integer},Element$Ranged:unmodifiableList$.$$targs$$.Element$UnmodifiableList,Subrange$Ranged:{t:m$1.List,a:{Element$List:unmodifiableList$.$$targs$$.Element$UnmodifiableList}},Index$Ranged:{t:m$1.Integer}});
return unmodifiableList$;
};
UnmodifiableList.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::UnmodifiableList.list')return o.$1dkeuw$280_;
else throw new TypeError('unknown attribute');
};
UnmodifiableList.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::UnmodifiableList.list')o.$1dkeuw$280_=i;
else throw new TypeError('unknown attribute');
};
UnmodifiableList.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$280))];
};
function unmodifiableList($28b,$apctt9$){return UnmodifiableList($28b,{Element$UnmodifiableList:$apctt9$.Element$unmodifiableList/*ORALE!Element inv pero Element var*/});
};
unmodifiableList.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$unmodifiableList'}},ps:[{nm:'list',mt:'prm',$t:{t:m$1.List,a:{Element$List:'Element$unmodifiableList'}}}],tp:{Element$unmodifiableList:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:unmodifiableList')];},d:['ceylon.collection','unmodifiableList']};};
ex$.unmodifiableList=unmodifiableList;
function UnmodifiableMap($1dkeuw$28c,$$targs$$,unmodifiableMap$){
$init$UnmodifiableMap();
if(unmodifiableMap$===undefined)unmodifiableMap$=new UnmodifiableMap.$$;
m$1.set_type_args(unmodifiableMap$,$$targs$$);
unmodifiableMap$.$1dkeuw$28c_=$1dkeuw$28c;
m$1.Map({Key$Map:$$targs$$.Key$UnmodifiableMap,Item$Map:$$targs$$.Item$UnmodifiableMap},unmodifiableMap$);
unmodifiableMap$.$1dkeuw$28d_=unmodifiableMap$.$1dkeuw$28c.items;
return unmodifiableMap$;
}
UnmodifiableMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'map',mt:'prm',$t:{t:m$1.Map,a:{Key$Map:'Key$UnmodifiableMap',Item$Map:'Item$UnmodifiableMap'}}}],tp:{Key$UnmodifiableMap:{dv:'out',sts:[{t:m$1.$_Object}]},Item$UnmodifiableMap:{dv:'out'}},sts:[{t:m$1.Map,a:{Key$Map:'Key$UnmodifiableMap',Item$Map:'Item$UnmodifiableMap'}}],pa:2048,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:UnmodifiableMap'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','UnmodifiableMap']};};
ex$.UnmodifiableMap=UnmodifiableMap;
function $init$UnmodifiableMap(){
if(UnmodifiableMap.$$===undefined){
m$1.initTypeProto(UnmodifiableMap,'ceylon.collection::UnmodifiableMap',m$1.Basic,m$1.Map);
(function(unmodifiableMap$){
m$1.atr$(unmodifiableMap$,'$1dkeuw$28c',function(){return this.$1dkeuw$28c_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Key$UnmodifiableMap',Item$Map:'Item$UnmodifiableMap'}},$cont:UnmodifiableMap,d:['ceylon.collection','UnmodifiableMap','$at','map$7h6pyp']};});
unmodifiableMap$.$_get=function($28e){var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$28c.$_get($28e);
};unmodifiableMap$.defines=function($28f){var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$28c.defines($28f);
};unmodifiableMap$.iterator=function(){var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$28c.iterator();
};m$1.atr$(unmodifiableMap$,'size',function(){
var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$28c.size;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','size']};});
m$1.atr$(unmodifiableMap$,'keys',function(){
var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$28c.keys;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Collection,a:{Element$Collection:'Key$UnmodifiableMap'}},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','keys']};});
m$1.atr$(unmodifiableMap$,'items',function(){return this.$1dkeuw$28d_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Collection,a:{Element$Collection:'Item$UnmodifiableMap'}},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','items']};});
unmodifiableMap$.equals=function($28g){var unmodifiableMap$=this;
return m$1.$eq$(unmodifiableMap$.$1dkeuw$28c,$28g);
};m$1.atr$(unmodifiableMap$,'hash',function(){
var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$28c.hash;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','hash']};});
unmodifiableMap$.clone=function(){var unmodifiableMap$=this;
return UnmodifiableMap(unmodifiableMap$.$1dkeuw$28c.clone(),{Key$UnmodifiableMap:unmodifiableMap$.$$targs$$.Key$UnmodifiableMap,Item$UnmodifiableMap:unmodifiableMap$.$$targs$$.Item$UnmodifiableMap});
};unmodifiableMap$.each=function($28h){var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$28c.each($28h);
};unmodifiableMap$.toString=function(){return this.string.valueOf();};
})(UnmodifiableMap.$$.prototype);
}
return UnmodifiableMap;
}
ex$.$init$UnmodifiableMap=$init$UnmodifiableMap;$init$UnmodifiableMap();UnmodifiableMap.inst$$=function($28i){
var unmodifiableMap$=new UnmodifiableMap.$$;
m$1.set_type_args(unmodifiableMap$,{Key$UnmodifiableMap:$28i.$$targs$$.Type$Class.a.Key$UnmodifiableMap,Item$UnmodifiableMap:$28i.$$targs$$.Type$Class.a.Item$UnmodifiableMap});
m$1.set_type_args(unmodifiableMap$,{Key$Map:unmodifiableMap$.$$targs$$.Key$UnmodifiableMap,Item$Map:unmodifiableMap$.$$targs$$.Item$UnmodifiableMap,Element$Collection:{t:m$1.Entry,a:{Key$Entry:unmodifiableMap$.$$targs$$.Key$UnmodifiableMap,Item$Entry:unmodifiableMap$.$$targs$$.Item$UnmodifiableMap}},Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:unmodifiableMap$.$$targs$$.Key$UnmodifiableMap,Item$Entry:unmodifiableMap$.$$targs$$.Item$UnmodifiableMap}},Element$Category:{t:m$1.$_Object},Item$Correspondence:unmodifiableMap$.$$targs$$.Item$UnmodifiableMap,Key$Correspondence:{t:m$1.$_Object}});
return unmodifiableMap$;
};
UnmodifiableMap.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::UnmodifiableMap.map')return o.$1dkeuw$28c_;
else if(n==='ceylon.collection::UnmodifiableMap.items')return o.items_;
else throw new TypeError('unknown attribute');
};
UnmodifiableMap.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::UnmodifiableMap.map')o.$1dkeuw$28c_=i;
else if(n==='ceylon.collection::UnmodifiableMap.items')o.items_=i;
else throw new TypeError('unknown attribute');
};
UnmodifiableMap.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$28c)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getItems))];
};
function unmodifiableMap($28j,$pjsjp5$){return UnmodifiableMap($28j,{Key$UnmodifiableMap:$pjsjp5$.Key$unmodifiableMap/*ORALE!Key inv pero Key var*/,Item$UnmodifiableMap:$pjsjp5$.Item$unmodifiableMap/*ORALE!Item inv pero Item var*/});
};
unmodifiableMap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Key$unmodifiableMap',Item$Map:'Item$unmodifiableMap'}},ps:[{nm:'map',mt:'prm',$t:{t:m$1.Map,a:{Key$Map:'Key$unmodifiableMap',Item$Map:'Item$unmodifiableMap'}}}],tp:{Key$unmodifiableMap:{sts:[{t:m$1.$_Object}]},Item$unmodifiableMap:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:unmodifiableMap')];},d:['ceylon.collection','unmodifiableMap']};};
ex$.unmodifiableMap=unmodifiableMap;
function UnmodifiableSet($1dkeuw$28k,$$targs$$,unmodifiableSet$){
$init$UnmodifiableSet();
if(unmodifiableSet$===undefined)unmodifiableSet$=new UnmodifiableSet.$$;
m$1.set_type_args(unmodifiableSet$,$$targs$$);
unmodifiableSet$.$1dkeuw$28k_=$1dkeuw$28k;
m$1.Set({Element$Set:$$targs$$.Element$UnmodifiableSet},unmodifiableSet$);
return unmodifiableSet$;
}
UnmodifiableSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}}}],tp:{Element$UnmodifiableSet:{dv:'out',sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}}],pa:2048,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:UnmodifiableSet'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','UnmodifiableSet']};};
ex$.UnmodifiableSet=UnmodifiableSet;
function $init$UnmodifiableSet(){
if(UnmodifiableSet.$$===undefined){
m$1.initTypeProto(UnmodifiableSet,'ceylon.collection::UnmodifiableSet',m$1.Basic,m$1.Set);
(function(unmodifiableSet$){
m$1.atr$(unmodifiableSet$,'$1dkeuw$28k',function(){return this.$1dkeuw$28k_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}},$cont:UnmodifiableSet,d:['ceylon.collection','UnmodifiableSet','$at','set$4htprx']};});
unmodifiableSet$.iterator=function(){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28k.iterator();
};m$1.atr$(unmodifiableSet$,'size',function(){
var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28k.size;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableSet,pa:3,d:['ceylon.collection','UnmodifiableSet','$at','size']};});
unmodifiableSet$.contains=function($28l){var unmodifiableSet$=this;
return m$1.$cnt$(unmodifiableSet$.$1dkeuw$28k,$28l);
};unmodifiableSet$.complement=function($28m,$rdd3zt$){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28k.complement($28m,{Other$complement:$rdd3zt$.Other$complement});
};
unmodifiableSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:UnmodifiableSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','complement']};};
unmodifiableSet$.exclusiveUnion=function($28n,$acz99u$){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28k.exclusiveUnion($28n,{Other$exclusiveUnion:$acz99u$.Other$exclusiveUnion});
};
unmodifiableSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$UnmodifiableSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:UnmodifiableSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','exclusiveUnion']};};
unmodifiableSet$.intersection=function($28o,$9faf6e$){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28k.intersection($28o,{Other$intersection:$9faf6e$.Other$intersection});
};
unmodifiableSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'i',l:['Element$UnmodifiableSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:UnmodifiableSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','intersection']};};
unmodifiableSet$.union=function($28p,$tnhkj6$){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28k.union($28p,{Other$union:$tnhkj6$.Other$union});
};
unmodifiableSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$UnmodifiableSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:UnmodifiableSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','union']};};
unmodifiableSet$.superset=function($28q){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28k.superset($28q);
};unmodifiableSet$.subset=function($28r){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28k.subset($28r);
};unmodifiableSet$.equals=function($28s){var unmodifiableSet$=this;
return m$1.$eq$(unmodifiableSet$.$1dkeuw$28k,$28s);
};m$1.atr$(unmodifiableSet$,'hash',function(){
var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28k.hash;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableSet,pa:3,d:['ceylon.collection','UnmodifiableSet','$at','hash']};});
unmodifiableSet$.clone=function(){var unmodifiableSet$=this;
return UnmodifiableSet(unmodifiableSet$.$1dkeuw$28k.clone(),{Element$UnmodifiableSet:unmodifiableSet$.$$targs$$.Element$UnmodifiableSet});
};unmodifiableSet$.each=function($28t){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28k.each($28t);
};unmodifiableSet$.toString=function(){return this.string.valueOf();};
})(UnmodifiableSet.$$.prototype);
}
return UnmodifiableSet;
}
ex$.$init$UnmodifiableSet=$init$UnmodifiableSet;$init$UnmodifiableSet();UnmodifiableSet.inst$$=function($28u){
var unmodifiableSet$=new UnmodifiableSet.$$;
m$1.set_type_args(unmodifiableSet$,{Element$UnmodifiableSet:$28u.$$targs$$.Type$Class.a.Element$UnmodifiableSet});
m$1.set_type_args(unmodifiableSet$,{Element$Set:unmodifiableSet$.$$targs$$.Element$UnmodifiableSet,Element$Collection:unmodifiableSet$.$$targs$$.Element$UnmodifiableSet,Absent$Iterable:{t:m$1.Null},Element$Iterable:unmodifiableSet$.$$targs$$.Element$UnmodifiableSet,Element$Category:{t:m$1.$_Object}});
return unmodifiableSet$;
};
UnmodifiableSet.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::UnmodifiableSet.set')return o.$1dkeuw$28k_;
else throw new TypeError('unknown attribute');
};
UnmodifiableSet.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::UnmodifiableSet.set')o.$1dkeuw$28k_=i;
else throw new TypeError('unknown attribute');
};
UnmodifiableSet.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$28k))];
};
function unmodifiableSet($28v,$pjsf5f$){return UnmodifiableSet($28v,{Element$UnmodifiableSet:$pjsf5f$.Element$unmodifiableSet/*ORALE!Element inv pero Element var*/});
};
unmodifiableSet.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$unmodifiableSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Element$unmodifiableSet'}}}],tp:{Element$unmodifiableSet:{sts:[{t:m$1.$_Object}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:unmodifiableSet')];},d:['ceylon.collection','unmodifiableSet']};};
ex$.unmodifiableSet=unmodifiableSet;
function frequencies($28w,$a5yoou$){
var $28x=HashMap(undefined,undefined,undefined,{Key$HashMap:$a5yoou$.Element$frequencies,Item$HashMap:{t:Counter}});
var $28z;for(var $28y=$28w.iterator();($28z=$28y.next())!==m$1.finished();){
var $290;
if(m$1.nn$(($290=$28x.$_get($28z)))){
($291=$290,$292=$291.count,$291.count=$292.successor,$292);
var $291,$292;
}
else{
($293=Counter(1),$28x.put($28z,$293), $293);
var $293;
}
}
return $28x.mapItems(m$1.jsc$2((function($294,$295){return $295.count;
}),[{nm:'e',mt:'prm',$t:$a5yoou$.Element$frequencies},{nm:'c',mt:'prm',$t:{t:Counter}}],{Return$Callable:{t:m$1.Integer},Arguments$Callable:{t:m$1.Tuple,a:{Rest$Tuple:m$1.mtt$([{t:Counter}]),Element$Tuple:m$1.mut$([$a5yoou$.Element$frequencies,{t:Counter}]),First$Tuple:$a5yoou$.Element$frequencies/*ORALE!Element inv pero First var*/}}}),{Result$mapItems:{t:m$1.Integer}});
}
ex$.frequencies=frequencies;
frequencies.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Element$frequencies',Item$Map:{t:m$1.Integer}}},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$frequencies'}}}],tp:{Element$frequencies:{sts:[{t:m$1.$_Object}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:frequencies')];},d:['ceylon.collection','frequencies']};};
function Counter(count,counter$){
$init$Counter();
if(counter$===undefined)counter$=new Counter.$$;
counter$.count_=count;
return counter$;
}
Counter.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'count',mt:'prm',$t:{t:m$1.Integer},pa:1025}],d:['ceylon.collection','Counter']};};
ex$.Counter=Counter;
function $init$Counter(){
if(Counter.$$===undefined){
m$1.initTypeProto(Counter,'ceylon.collection::Counter',m$1.Basic);
(function(counter$){
m$1.atr$(counter$,'count',function(){return this.count_;},function($296){return this.count_=$296;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Counter,pa:1025,d:['ceylon.collection','Counter','$at','count']};});
counter$.toString=function(){return this.string.valueOf();};
})(Counter.$$.prototype);
}
return Counter;
}
ex$.$init$Counter=$init$Counter;$init$Counter();
function group($297,$298,$bkwzr$){
var $299=HashMap(undefined,undefined,undefined,{Key$HashMap:$bkwzr$.Group$group,Item$HashMap:{t:ArrayList,a:{Element$ArrayList:$bkwzr$.Element$group}}});
var $29b;for(var $29a=$297.iterator();($29b=$29a.next())!==m$1.finished();){
var $29c=$298($29b);
var $29d;
if(m$1.nn$(($29d=$299.$_get($29c)))){
$29d.add($29b);
}
else{
var $29e=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$bkwzr$.Element$group});
$29e.add($29b);
($29f=$29e,$299.put($29c,$29f), $29f);
var $29f;
}
}
function $29g($29h,$29i){
var $29j;
m$1.asrt$((m$1.is$(($29j=$29i.sequence()),{t:m$1.Sequence,a:{Element$Sequence:$bkwzr$.Element$group/*ORALE!Element inv pero Element var*/}})),"Assertion failed: "+"\n\tviolated is [Element+] result = list.sequence()\n\tat group.ceylon (30:14-30:53)",'30:8-30:54','group.ceylon');
return $29j;
};$29g.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:$bkwzr$.Element$group}},ps:[{nm:'group',mt:'prm',$t:$bkwzr$.Group$group},{nm:'list',mt:'prm',$t:{t:ArrayList,a:{Element$ArrayList:$bkwzr$.Element$group}}}],$cont:group,d:['ceylon.collection','group','$m','mapping$dp6ds0']};};
return $299.mapItems(m$1.jsc$3(0,$29g),{Result$mapItems:{t:m$1.Sequence,a:{Element$Sequence:$bkwzr$.Element$group/*ORALE!Element inv pero Element var*/}}});
}
ex$.group=group;
group.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Group$group',Item$Map:{t:m$1.Sequence,a:{Element$Sequence:'Element$group'}}}},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$group'}}},{nm:'grouping',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:'Group$group',Arguments$Callable:{t:'T',l:['Element$group']}}},$rt:'Group$group',ps:[{nm:'element',mt:'prm',$t:'Element$group'}]}],tp:{Group$group:{sts:[{t:m$1.$_Object}]},Element$group:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:group')];},d:['ceylon.collection','group']};};
function invert($29k,$av0mdq$){
var $29l=HashMap(undefined,undefined,undefined,{Key$HashMap:$av0mdq$.Item$invert,Item$HashMap:{t:ArrayList,a:{Element$ArrayList:$av0mdq$.Key$invert}}});
var $29n;for(var $29m=$29k.iterator();($29n=$29m.next())!==m$1.finished();){
var $29o=$29n.key,$29p=$29n.item;
var $29q;
if(m$1.nn$(($29q=$29l.$_get($29p)))){
$29q.add($29o);
}
else{
var $29r=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$av0mdq$.Key$invert});
$29r.add($29o);
$29l.put($29p,$29r);
}
}
function $29s($29t,$29u){
var $29v;
m$1.asrt$((m$1.is$(($29v=$29u.sequence()),{t:m$1.Sequence,a:{Element$Sequence:$av0mdq$.Key$invert/*ORALE!Key inv pero Element var*/}})),"Assertion failed: "+"\n\tviolated is [Key+] result = sa.sequence()\n\tat invert.ceylon (21:14-21:47)",'21:8-21:48','invert.ceylon');
return $29v;
};$29s.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:$av0mdq$.Key$invert}},ps:[{nm:'item',mt:'prm',$t:$av0mdq$.Item$invert},{nm:'sa',mt:'prm',$t:{t:ArrayList,a:{Element$ArrayList:$av0mdq$.Key$invert}}}],$cont:invert,d:['ceylon.collection','invert','$m','mapping$ii3181']};};
return $29l.mapItems(m$1.jsc$3(0,$29s),{Result$mapItems:{t:m$1.Sequence,a:{Element$Sequence:$av0mdq$.Key$invert/*ORALE!Key inv pero Element var*/}}});
};invert.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Item$invert',Item$Map:{t:m$1.Sequence,a:{Element$Sequence:'Key$invert'}}}},ps:[{nm:'map',mt:'prm',$t:{t:m$1.Map,a:{Key$Map:'Key$invert',Item$Map:'Item$invert'}}}],tp:{Key$invert:{sts:[{t:m$1.$_Object}]},Item$invert:{sts:[{t:m$1.$_Object}]}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:invert')];},d:['ceylon.collection','invert']};};
function entryStore($29w,$leqrr$){return m$1.$_Array$c_ofSize($29w,null,{Element$Array:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:$leqrr$.Key$entryStore/*ORALE!Key inv pero Key var*/,Item$Entry:$leqrr$.Item$entryStore/*ORALE!Item inv pero Item var*/}}}}])});
};
entryStore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$entryStore',Item$Entry:'Item$entryStore'}}}}]}}},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],tp:{Key$entryStore:{sts:[{t:m$1.$_Object}]},Item$entryStore:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:entryStore')];},d:['ceylon.collection','entryStore']};};
function elementStore($29x,$9ap29p$){return m$1.$_Array$c_ofSize($29x,null,{Element$Array:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:$9ap29p$.Element$elementStore}}])});
};
elementStore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$elementStore'}}]}}},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],tp:{Element$elementStore:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:elementStore')];},d:['ceylon.collection','elementStore']};};
function cachingEntryStore($29y,$gyeaiy$){return m$1.$_Array$c_ofSize($29y,null,{Element$Array:m$1.mut$([{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:$gyeaiy$.Key$cachingEntryStore/*ORALE!Key inv pero Key var*/,Item$Entry:$gyeaiy$.Item$cachingEntryStore/*ORALE!Item inv pero Item var*/}}}}])});
};
cachingEntryStore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:'Key$cachingEntryStore',Item$Entry:'Item$cachingEntryStore'}}}}]}}},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],tp:{Key$cachingEntryStore:{sts:[{t:m$1.$_Object}]},Item$cachingEntryStore:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:cachingEntryStore')];},d:['ceylon.collection','cachingEntryStore']};};
function cachingElementStore($29z,$m3pk2c$){return m$1.$_Array$c_ofSize($29z,null,{Element$Array:m$1.mut$([{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:$m3pk2c$.Element$cachingElementStore}}])});
};
cachingElementStore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$cachingElementStore'}}]}}},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],tp:{Element$cachingElementStore:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:cachingElementStore')];},d:['ceylon.collection','cachingElementStore']};};
function partition($2a0,$2a1,$zgqkqa$){
var $2a2=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$zgqkqa$.Element$partition});
var $2a3=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$zgqkqa$.Element$partition});
var $2a5;for(var $2a4=$2a0.iterator();($2a5=$2a4.next())!==m$1.finished();){
if($2a1($2a5)){
$2a2.add($2a5);
}
else{
$2a3.add($2a5);
}
}
return m$1.tpl$([$2a2.sequence(),$2a3.sequence()]);
}
ex$.partition=partition;
partition.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$1.Sequential,a:{Element$Sequential:'Element$partition'}},{t:m$1.Sequential,a:{Element$Sequential:'Element$partition'}}]},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$partition'}}},{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:['Element$partition']}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$partition'}]}],tp:{Element$partition:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:partition')];},d:['ceylon.collection','partition']};};
ex$.$pkg$ans$ceylon$collection=function(){return[m$1.shared()];};
ex$.$pkgunsh$ceylon$collection={'Cell':Cell,'CellIterator':CellIterator,'CachingCell':CachingCell,'CachingCellIterator':CachingCellIterator,'maximumCapacity':$prop$getMaximumCapacity,'LinkedCell':LinkedCell,'LinkedCellIterator':LinkedCellIterator,'measureToSpan':measureToSpan,'spanToMeasure':spanToMeasure,'largest':largest,'smallest':smallest,'StoreIterator':StoreIterator,'CachingStoreIterator':CachingStoreIterator,'UnmodifiableList':UnmodifiableList,'UnmodifiableMap':UnmodifiableMap,'UnmodifiableSet':UnmodifiableSet,'Counter':Counter,'invert':invert,'entryStore':entryStore,'elementStore':elementStore,'cachingEntryStore':cachingEntryStore,'cachingElementStore':cachingElementStore};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
