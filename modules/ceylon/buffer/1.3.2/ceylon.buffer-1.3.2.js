(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('ceylon/buffer/1.3.2/ceylon.buffer-1.3.2', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/buffer/1.3.2/ceylon.buffer-1.3.2-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.3.2/ceylon.language-1.3.2');
m$1.$addmod$(m$1,'ceylon.language/1.3.2');
m$1.$addmod$(ex$,'ceylon.buffer/1.3.2');
var m$2=require('ceylon/collection/1.3.2/ceylon.collection-1.3.2');
m$1.$addmod$(m$2,'ceylon.collection/1.3.2');
ex$.$mod$ans$=function(){return[m$1.doc$($CCMM$,'','$mod-anns'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud","Alex Szczuczko"],{t:m$1.$_String}))];};
ex$.$mod$imps=function(){return{
'ceylon.collection/1.3.2':[],
'java.base/7':function(){return[m$1.$_native(m$1.$arr$sa$(["jvm"],{t:m$1.$_String}))];},
'ceylon.interop.java/1.3.2':function(){return[m$1.$_native(m$1.$arr$sa$(["jvm"],{t:m$1.$_String}))];}
};};
function Buffer($$targs$$,buffer$){
$init$Buffer();
if(buffer$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.buffer::Buffer"),'?','?')
m$1.set_type_args(buffer$,$$targs$$);
m$1.Iterable({Absent$Iterable:{t:m$1.Null},Element$Iterable:$$targs$$.Element$Buffer/*ORALE!Element inv pero Element var*/},buffer$);
buffer$.resize$defs$growLimit=function($5,$6){return false;};
return buffer$;
}
Buffer.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],tp:{Element$Buffer:{}},sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$Buffer'}}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer:Buffer'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String})),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.buffer'),ByteBuffer),m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.buffer'),CharacterBuffer)],{t:m$1.ClassWithConstructorsDeclaration$meta$declaration}))];},d:['ceylon.buffer','Buffer']};};
ex$.Buffer=Buffer;
function $init$Buffer(){
if(Buffer.$$===undefined){
m$1.initTypeProto(Buffer,'ceylon.buffer::Buffer',m$1.Basic,m$1.Iterable);
(function(buffer$){
buffer$.$prop$getPosition={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Buffer,pa:1029,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer:Buffer:$at:position'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.3.2','$'),m$1.AssertionError),"On assignment if the new value would be invalid")];},d:['ceylon.buffer','Buffer','$at','position']};}};
buffer$.$prop$getCapacity={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Buffer,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer:Buffer:$at:capacity')];},d:['ceylon.buffer','Buffer','$at','capacity']};}};
buffer$.$prop$getLimit={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Buffer,pa:1029,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer:Buffer:$at:limit'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.3.2','$'),m$1.AssertionError),"On assignment if the new value would be invalid")];},d:['ceylon.buffer','Buffer','$at','limit']};}};
buffer$.resize={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'newSize',mt:'prm',$t:{t:m$1.Integer}},{nm:'growLimit',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:Buffer,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer:Buffer:$m:resize')];},d:['ceylon.buffer','Buffer','$m','resize']};}};m$1.atr$(buffer$,'hasAvailable',function(){
var buffer$=this;
return (buffer$.available>(0));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Buffer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer:Buffer:$at:hasAvailable')];},d:['ceylon.buffer','Buffer','$at','hasAvailable']};});
m$1.atr$(buffer$,'available',function(){
var buffer$=this;
return (buffer$.limit-buffer$.position);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Buffer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer:Buffer:$at:available')];},d:['ceylon.buffer','Buffer','$at','available']};});
buffer$.$_get={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$Buffer',ps:[],$cont:Buffer,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer:Buffer:$m:get'),m$1.$_throws("BufferUnderflowException","If [[position]] >= [[limit]]")];},d:['ceylon.buffer','Buffer','$m','get']};}};buffer$.put={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$Buffer'}],$cont:Buffer,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer:Buffer:$m:put'),m$1.$_throws("BufferOverflowException","If [[position]] >= [[limit]]")];},d:['ceylon.buffer','Buffer','$m','put']};}};buffer$.clear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Buffer,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer:Buffer:$m:clear')];},d:['ceylon.buffer','Buffer','$m','clear']};}};buffer$.flip={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Buffer,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer:Buffer:$m:flip')];},d:['ceylon.buffer','Buffer','$m','flip']};}};buffer$.iterator=function(){
var buffer$=this;
function $7($$targs$$){
var $7$=new $7.$$;$7$.outer$=buffer$;
$7$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:buffer$.$$targs$$.Element$Buffer/*ORALE!Element inv pero Element var*/},$7$);
return $7$;
};$7.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:buffer$.iterator,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$Buffer'}}],d:['ceylon.buffer','Buffer','$m','iterator','$o','it$b7396g']};};
function $init$$7(){
if($7.$$===undefined){
m$1.initTypeProto($7,'ceylon.buffer::Buffer.iterator.it',m$1.Basic,m$1.Iterator);
(function($7$){
$7$.next=function(){
var $7$=this;
if(buffer$.hasAvailable){
return buffer$.$_get();
}
return m$1.finished();
};$7$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$Buffer',{t:m$1.Finished}]},ps:[],$cont:$7,pa:3,d:['ceylon.buffer','Buffer','$m','iterator','$o','it$b7396g','$m','next']};};
$7$.toString=function(){return this.string.valueOf();};
})($7.$$.prototype);
}
return $7;
}
buffer$.$init$$7=$init$$7;$init$$7();var $9;
function $8(){
if($9===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'it\' before it was set"),'116:8-123:8','Buffer.ceylon');
if($9===undefined){$9=m$1.INIT$;$9=$init$$7()({Element$Iterator:buffer$.$$targs$$.Element$Buffer/*ORALE!Element inv pero Element var*/});$9.$crtmm$=$8.$crtmm$;}
return $9;
}
$8.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$$7()},$cont:buffer$.iterator,d:['ceylon.buffer','Buffer','$m','iterator','$o','it$b7396f']};};
$prop$get$7=$8;
$8();
return $8();
};buffer$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:'Element$Buffer'}},ps:[],$cont:Buffer,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer:Buffer:$m:iterator')];},d:['ceylon.buffer','Buffer','$m','iterator']};};
buffer$.$prop$getArray={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:'Element$Buffer'}},$cont:Buffer,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer:Buffer:$at:array')];},d:['ceylon.buffer','Buffer','$at','array']};}};
m$1.atr$(buffer$,'visible',function(){
var buffer$=this;
return (buffer$.hasAvailable?buffer$.array.sublist(buffer$.position,(buffer$.limit-(1))):m$1.empty());
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$Buffer'}},$cont:Buffer,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer:Buffer:$at:visible')];},d:['ceylon.buffer','Buffer','$at','visible']};});
buffer$.$prop$getImplementation={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Object}]},$cont:Buffer,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer:Buffer:$at:implementation')];},d:['ceylon.buffer','Buffer','$at','implementation']};}};
m$1.atr$(buffer$,'size',function(){
var buffer$=this;
return buffer$.available;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Buffer,pa:3,d:['ceylon.buffer','Buffer','$at','size']};});
buffer$.equals=function($a){
var buffer$=this;
var $b;
if(m$1.is$(($b=$a),{t:Buffer,a:{Element$Buffer:buffer$.$$targs$$.Element$Buffer}})){
if((buffer$===$b)){
return true;
}
var $c=buffer$.position;
var $d=$b.position;
var $e=(buffer$.limit-$c);
var $f=($b.limit-$d);
if(!m$1.$eq$($e,$f)){
return false;
}
var $g=$e;
var $h=buffer$.array;
var $i=$b.array;
var $k=(0),$l=$g;for(var $m=0;$m<$l;$m++,($k=$k.successor)){
var $n=$h.$_get(($c+$k));
var $o=$i.$_get(($d+$k));
var $p,$q;
m$1.asrt$((m$1.nn$(($p=$n))&&m$1.nn$(($q=$o))),"Assertion failed: "+"\n\tviolated exists thisElement, exists thatElement\n\tat Buffer.ceylon (170:23-170:62)",'170:16-170:63','Buffer.ceylon');
if(!m$1.$eq$($p,$q)){
return false;
}
}
return true;
}
else{
return false;
}
};buffer$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Buffer,pa:11,d:['ceylon.buffer','Buffer','$m','equals']};};
buffer$.toString=function(){return this.string.valueOf();};
})(Buffer.$$.prototype);
}
return Buffer;
}
ex$.$init$Buffer=$init$Buffer;$init$Buffer();

function ByteBuffer$$c(byteBuffer$){
}
function ByteBuffer(){return ByteBuffer$c_$c$.apply(undefined,arguments);}
function ByteBuffer$c_$c$$$a($r,byteBuffer$){
Buffer({Element$Buffer:{t:m$1.Byte}},byteBuffer$);
byteBuffer$.$d6k2li$s_=m$1.$_Array($r,{Element$Array:{t:m$1.Byte}});
m$1.atr$(byteBuffer$,'$d6k2li$s',function(){return this.$d6k2li$s_;},function($t){return this.$d6k2li$s_=$t;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:m$1.Byte}}},$cont:ByteBuffer,pa:1024,d:['ceylon.buffer','ByteBuffer','$at','buf$3fxrct']};});
return byteBuffer$;
};
function ByteBuffer$c_$c$($r,byteBuffer$){
$init$ByteBuffer();
if(byteBuffer$===undefined)byteBuffer$=new ByteBuffer.$$;
ByteBuffer$$c(byteBuffer$);
ByteBuffer$c_$c$$$a($r,byteBuffer$);
byteBuffer$.$d6k2li$u_=(0);
byteBuffer$.$d6k2li$v_=byteBuffer$.$d6k2li$s.size;
return byteBuffer$;
};
ByteBuffer$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'initialData',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}}],$cont:ByteBuffer,pa:1,an:function(){return[m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];},d:['ceylon.buffer','ByteBuffer','$cn','$def']};};
ByteBuffer.ByteBuffer$c_$c$=ByteBuffer$c_$c$;
ex$.ByteBuffer$c_$c$=ByteBuffer$c_$c$;
function ByteBuffer$c_ofArray$$a($w,byteBuffer$){
Buffer({Element$Buffer:{t:m$1.Byte}},byteBuffer$);
byteBuffer$.$d6k2li$s_=$w;
m$1.atr$(byteBuffer$,'$d6k2li$s',function(){return this.$d6k2li$s_;},function($x){return this.$d6k2li$s_=$x;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:m$1.Byte}}},$cont:ByteBuffer,pa:1024,d:['ceylon.buffer','ByteBuffer','$at','buf$3fxrct']};});
return byteBuffer$;
};
function ByteBuffer$c_ofArray($w,byteBuffer$){
$init$ByteBuffer();
if(byteBuffer$===undefined)byteBuffer$=new ByteBuffer.$$;
ByteBuffer$$c(byteBuffer$);
ByteBuffer$c_ofArray$$a($w,byteBuffer$);
byteBuffer$.$d6k2li$u_=(0);
byteBuffer$.$d6k2li$v_=byteBuffer$.$d6k2li$s.size;
return byteBuffer$;
};
ByteBuffer$c_ofArray.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'initialArray',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:m$1.Byte}}}}],$cont:ByteBuffer,pa:1,an:function(){return[m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];},d:['ceylon.buffer','ByteBuffer','$cn','ofArray']};};
ByteBuffer.ByteBuffer$c_ofArray=ByteBuffer$c_ofArray;
ex$.ByteBuffer$c_ofArray=ByteBuffer$c_ofArray;
function ByteBuffer$c_ofSize$$a($y,byteBuffer$){
Buffer({Element$Buffer:{t:m$1.Byte}},byteBuffer$);
byteBuffer$.$d6k2li$s_=m$1.$_Array$c_ofSize($y,(0).$_byte,{Element$Array:{t:m$1.Byte}});
m$1.atr$(byteBuffer$,'$d6k2li$s',function(){return this.$d6k2li$s_;},function($z){return this.$d6k2li$s_=$z;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:m$1.Byte}}},$cont:ByteBuffer,pa:1024,d:['ceylon.buffer','ByteBuffer','$at','buf$3fxrct']};});
return byteBuffer$;
};
function ByteBuffer$c_ofSize($y,byteBuffer$){
$init$ByteBuffer();
if(byteBuffer$===undefined)byteBuffer$=new ByteBuffer.$$;
ByteBuffer$$c(byteBuffer$);
ByteBuffer$c_ofSize$$a($y,byteBuffer$);
byteBuffer$.$d6k2li$u_=(0);
byteBuffer$.$d6k2li$v_=byteBuffer$.$d6k2li$s.size;
return byteBuffer$;
};
ByteBuffer$c_ofSize.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'initialCapacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:ByteBuffer,pa:1,an:function(){return[m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];},d:['ceylon.buffer','ByteBuffer','$cn','ofSize']};};
ByteBuffer.ByteBuffer$c_ofSize=ByteBuffer$c_ofSize;
ex$.ByteBuffer$c_ofSize=ByteBuffer$c_ofSize;
ByteBuffer.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Buffer,a:{Element$Buffer:{t:m$1.Byte}}},ps:[{nm:'initialData',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}}],pa:1,an:function(){return[m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];},d:['ceylon.buffer','ByteBuffer']};};
ex$.ByteBuffer=ByteBuffer;
function $init$ByteBuffer(){
if(ByteBuffer.$$===undefined){
m$1.initTypeProto(ByteBuffer,'ceylon.buffer::ByteBuffer',$init$Buffer());
(function(byteBuffer$){
m$1.atr$(byteBuffer$,'$d6k2li$s',function(){return this.$d6k2li$s_;},function($10){return this.$d6k2li$s_=$10;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:m$1.Byte}}},$cont:ByteBuffer,pa:1024,d:['ceylon.buffer','ByteBuffer','$at','buf$3fxrct']};});
m$1.atr$(byteBuffer$,'capacity',function(){
var byteBuffer$=this;
return byteBuffer$.$d6k2li$s.size;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ByteBuffer,pa:3,an:function(){return[m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];},d:['ceylon.buffer','ByteBuffer','$at','capacity']};});
m$1.atr$(byteBuffer$,'$d6k2li$u',function(){return this.$d6k2li$u_;},function($12){return this.$d6k2li$u_=$12;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ByteBuffer,pa:1024,d:['ceylon.buffer','ByteBuffer','$at','_position$9co3o0']};});
m$1.atr$(byteBuffer$,'position',function(){
var byteBuffer$=this;
return byteBuffer$.$d6k2li$u;
},function($14){
var byteBuffer$=this;
m$1.asrt$((($14>=(0))),"Assertion failed: "+"Position must be non-negative\n\tviolated position >= 0\n\tat ByteBuffer.ceylon (74:15-74:29)",'73:8-74:30','ByteBuffer.ceylon');
m$1.asrt$((($14<=byteBuffer$.limit)),"Assertion failed: "+"Position must be no larger than limit\n\tviolated position <= limit\n\tat ByteBuffer.ceylon (76:15-76:33)",'75:8-76:34','ByteBuffer.ceylon');
byteBuffer$.$d6k2li$u=$14;
},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ByteBuffer,pa:1027,an:function(){return[m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];},d:['ceylon.buffer','ByteBuffer','$at','position']};},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:ByteBuffer,an:function(){return[m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];},d:['ceylon.buffer','ByteBuffer','$at','position','$set']};});
m$1.atr$(byteBuffer$,'$d6k2li$v',function(){return this.$d6k2li$v_;},function($15){return this.$d6k2li$v_=$15;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ByteBuffer,pa:1024,d:['ceylon.buffer','ByteBuffer','$at','_limit$odgbx8']};});
m$1.atr$(byteBuffer$,'limit',function(){
var byteBuffer$=this;
return byteBuffer$.$d6k2li$v;
},function($17){
var byteBuffer$=this;
m$1.asrt$((($17>=(0))),"Assertion failed: "+"Limit must be non-negative\n\tviolated limit >= 0\n\tat ByteBuffer.ceylon (62:15-62:26)",'61:8-62:27','ByteBuffer.ceylon');
m$1.asrt$((($17<=byteBuffer$.capacity)),"Assertion failed: "+"Limit must be no larger than capacity\n\tviolated limit <= capacity\n\tat ByteBuffer.ceylon (64:15-64:33)",'63:8-64:34','ByteBuffer.ceylon');
if((byteBuffer$.position>$17)){
byteBuffer$.position=$17;
}
byteBuffer$.$d6k2li$v=$17;
},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ByteBuffer,pa:1027,an:function(){return[m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];},d:['ceylon.buffer','ByteBuffer','$at','limit']};},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:ByteBuffer,an:function(){return[m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];},d:['ceylon.buffer','ByteBuffer','$at','limit','$set']};});
byteBuffer$.$_get=function(){
var byteBuffer$=this;
var $18=byteBuffer$.$d6k2li$s.$_get(byteBuffer$.position);
var $19;
if(m$1.nn$(($19=$18))){
($1a=byteBuffer$.position,byteBuffer$.position=$1a.successor,$1a);
var $1a;
return $19;
}
else{
throw m$1.wrapexc(BufferUnderflowException("No byte at position "+(byteBuffer$.position.string)),'86:12-86:78','ceylon/buffer/ByteBuffer.ceylon');
}
};byteBuffer$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Byte},ps:[],$cont:ByteBuffer,pa:3,an:function(){return[m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];},d:['ceylon.buffer','ByteBuffer','$m','get']};};
byteBuffer$.put=function($1b){
var byteBuffer$=this;
if((byteBuffer$.position>byteBuffer$.limit)){
throw m$1.wrapexc(BufferOverflowException("No space at position "+(byteBuffer$.position.string)),'91:12-91:78','ceylon/buffer/ByteBuffer.ceylon');
}
($1c=$1b,byteBuffer$.$d6k2li$s.set(byteBuffer$.position,$1c), $1c);
var $1c;
($1d=byteBuffer$.position,byteBuffer$.position=$1d.successor,$1d);
var $1d;
};byteBuffer$.put.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:m$1.Byte}}],$cont:ByteBuffer,pa:3,an:function(){return[m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];},d:['ceylon.buffer','ByteBuffer','$m','put']};};
byteBuffer$.clear=function(){
var byteBuffer$=this;
byteBuffer$.position=(0);
byteBuffer$.limit=byteBuffer$.capacity;
};byteBuffer$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ByteBuffer,pa:3,an:function(){return[m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];},d:['ceylon.buffer','ByteBuffer','$m','clear']};};
byteBuffer$.flip=function(){
var byteBuffer$=this;
byteBuffer$.limit=byteBuffer$.position;
byteBuffer$.position=(0);
};byteBuffer$.flip.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ByteBuffer,pa:3,an:function(){return[m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];},d:['ceylon.buffer','ByteBuffer','$m','flip']};};
byteBuffer$.resize=function($1e,$1f){
var byteBuffer$=this;
if($1f===undefined){$1f=byteBuffer$.resize$defs$growLimit($1e,$1f);}
($1g=$1e,$1h=$1f,$1i=byteBuffer$,$1j=m$1.jsc$2((function(){
var $1k=m$1.$_Array$c_ofSize($1e,(0).$_byte,{Element$Array:{t:m$1.Byte}});
$prop$get$1k={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:m$1.Byte}}},$cont:byteBuffer$.resize,d:['ceylon.buffer','ByteBuffer','$m','resize','$at','dest$n1rf22']};}};
$prop$get$1k.get=function(){return $1k};
byteBuffer$.$d6k2li$s.copyTo($1k,0,0,byteBuffer$.available);
byteBuffer$.$d6k2li$s=$1k;
}),[],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}),resizeBuffer($1g,$1h,$1i,$1j,{Value$resizeBuffer:{t:m$1.Byte}}));
var $1g,$1h,$1i,$1j;
};byteBuffer$.resize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'newSize',mt:'prm',$t:{t:m$1.Integer}},{nm:'growLimit',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:ByteBuffer,pa:3,an:function(){return[m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];},d:['ceylon.buffer','ByteBuffer','$m','resize']};};
m$1.atr$(byteBuffer$,'array',function(){
var byteBuffer$=this;
return byteBuffer$.$d6k2li$s;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:m$1.Byte}}},$cont:ByteBuffer,pa:3,an:function(){return[m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];},d:['ceylon.buffer','ByteBuffer','$at','array']};});
m$1.atr$(byteBuffer$,'implementation',function(){
var byteBuffer$=this;
return byteBuffer$.$d6k2li$s;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Object}]},$cont:ByteBuffer,pa:3,an:function(){return[m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];},d:['ceylon.buffer','ByteBuffer','$at','implementation']};});
byteBuffer$.toString=function(){return this.string.valueOf();};
})(ByteBuffer.$$.prototype);
}
return ByteBuffer;
}
ex$.$init$ByteBuffer=$init$ByteBuffer;$init$ByteBuffer();
function CharacterBuffer$$c(characterBuffer$){
}
function CharacterBuffer(){return CharacterBuffer$c_$c$.apply(undefined,arguments);}
function CharacterBuffer$c_$c$$$a($1n,characterBuffer$){
Buffer({Element$Buffer:{t:m$1.Character}},characterBuffer$);
characterBuffer$.$d6k2li$1o_=m$1.$_Array($1n,{Element$Array:{t:m$1.Character}});
m$1.atr$(characterBuffer$,'$d6k2li$1o',function(){return this.$d6k2li$1o_;},function($1p){return this.$d6k2li$1o_=$1p;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:m$1.Character}}},$cont:CharacterBuffer,pa:1027,d:['ceylon.buffer','CharacterBuffer','$at','buf$eu2aek']};});
return characterBuffer$;
};
function CharacterBuffer$c_$c$($1n,characterBuffer$){
$init$CharacterBuffer();
if(characterBuffer$===undefined)characterBuffer$=new CharacterBuffer.$$;
CharacterBuffer$$c(characterBuffer$);
CharacterBuffer$c_$c$$$a($1n,characterBuffer$);
characterBuffer$.$d6k2li$1q_=(0);
characterBuffer$.$d6k2li$1r_=characterBuffer$.$d6k2li$1o.size;
return characterBuffer$;
};
CharacterBuffer$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'initialData',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}}}],$cont:CharacterBuffer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer:CharacterBuffer:$cn:$def')];},d:['ceylon.buffer','CharacterBuffer','$cn','$def']};};
CharacterBuffer.CharacterBuffer$c_$c$=CharacterBuffer$c_$c$;
ex$.CharacterBuffer$c_$c$=CharacterBuffer$c_$c$;
function CharacterBuffer$c_ofArray$$a($1s,characterBuffer$){
Buffer({Element$Buffer:{t:m$1.Character}},characterBuffer$);
characterBuffer$.$d6k2li$1o_=$1s;
m$1.atr$(characterBuffer$,'$d6k2li$1o',function(){return this.$d6k2li$1o_;},function($1t){return this.$d6k2li$1o_=$1t;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:m$1.Character}}},$cont:CharacterBuffer,pa:1027,d:['ceylon.buffer','CharacterBuffer','$at','buf$eu2aek']};});
return characterBuffer$;
};
function CharacterBuffer$c_ofArray($1s,characterBuffer$){
$init$CharacterBuffer();
if(characterBuffer$===undefined)characterBuffer$=new CharacterBuffer.$$;
CharacterBuffer$$c(characterBuffer$);
CharacterBuffer$c_ofArray$$a($1s,characterBuffer$);
characterBuffer$.$d6k2li$1q_=(0);
characterBuffer$.$d6k2li$1r_=characterBuffer$.$d6k2li$1o.size;
return characterBuffer$;
};
CharacterBuffer$c_ofArray.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'initialArray',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:m$1.Character}}}}],$cont:CharacterBuffer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer:CharacterBuffer:$cn:ofArray')];},d:['ceylon.buffer','CharacterBuffer','$cn','ofArray']};};
CharacterBuffer.CharacterBuffer$c_ofArray=CharacterBuffer$c_ofArray;
ex$.CharacterBuffer$c_ofArray=CharacterBuffer$c_ofArray;
function CharacterBuffer$c_ofSize$$a($1u,characterBuffer$){
Buffer({Element$Buffer:{t:m$1.Character}},characterBuffer$);
characterBuffer$.$d6k2li$1o_=m$1.$_Array$c_ofSize($1u,(0).character,{Element$Array:{t:m$1.Character}});
m$1.atr$(characterBuffer$,'$d6k2li$1o',function(){return this.$d6k2li$1o_;},function($1v){return this.$d6k2li$1o_=$1v;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:m$1.Character}}},$cont:CharacterBuffer,pa:1027,d:['ceylon.buffer','CharacterBuffer','$at','buf$eu2aek']};});
return characterBuffer$;
};
function CharacterBuffer$c_ofSize($1u,characterBuffer$){
$init$CharacterBuffer();
if(characterBuffer$===undefined)characterBuffer$=new CharacterBuffer.$$;
CharacterBuffer$$c(characterBuffer$);
CharacterBuffer$c_ofSize$$a($1u,characterBuffer$);
characterBuffer$.$d6k2li$1q_=(0);
characterBuffer$.$d6k2li$1r_=characterBuffer$.$d6k2li$1o.size;
return characterBuffer$;
};
CharacterBuffer$c_ofSize.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'initialCapacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:CharacterBuffer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer:CharacterBuffer:$cn:ofSize')];},d:['ceylon.buffer','CharacterBuffer','$cn','ofSize']};};
CharacterBuffer.CharacterBuffer$c_ofSize=CharacterBuffer$c_ofSize;
ex$.CharacterBuffer$c_ofSize=CharacterBuffer$c_ofSize;
CharacterBuffer.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Buffer,a:{Element$Buffer:{t:m$1.Character}}},ps:[{nm:'initialData',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer:CharacterBuffer'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud","Alex Szczuczko"],{t:m$1.$_String}))];},d:['ceylon.buffer','CharacterBuffer']};};
ex$.CharacterBuffer=CharacterBuffer;
function $init$CharacterBuffer(){
if(CharacterBuffer.$$===undefined){
m$1.initTypeProto(CharacterBuffer,'ceylon.buffer::CharacterBuffer',$init$Buffer());
(function(characterBuffer$){
m$1.atr$(characterBuffer$,'$d6k2li$1o',function(){return this.$d6k2li$1o_;},function($1w){return this.$d6k2li$1o_=$1w;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:m$1.Character}}},$cont:CharacterBuffer,pa:1027,d:['ceylon.buffer','CharacterBuffer','$at','buf$eu2aek']};});
m$1.atr$(characterBuffer$,'capacity',function(){
var characterBuffer$=this;
return characterBuffer$.$d6k2li$1o.size;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:CharacterBuffer,pa:3,d:['ceylon.buffer','CharacterBuffer','$at','capacity']};});
m$1.atr$(characterBuffer$,'$d6k2li$1q',function(){return this.$d6k2li$1q_;},function($1y){return this.$d6k2li$1q_=$1y;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:CharacterBuffer,pa:1027,d:['ceylon.buffer','CharacterBuffer','$at','_position$rmo5fd']};});
m$1.atr$(characterBuffer$,'position',function(){
var characterBuffer$=this;
return characterBuffer$.$d6k2li$1q;
},function($20){
var characterBuffer$=this;
m$1.asrt$((($20>=(0))),"Assertion failed: "+"Position must be non-negative\n\tviolated position >= 0\n\tat CharacterBuffer.ceylon (50:15-50:29)",'49:8-50:30','CharacterBuffer.ceylon');
m$1.asrt$((($20<=characterBuffer$.limit)),"Assertion failed: "+"Position must be no larger than limit\n\tviolated position <= limit\n\tat CharacterBuffer.ceylon (52:15-52:33)",'51:8-52:34','CharacterBuffer.ceylon');
characterBuffer$.$d6k2li$1q=$20;
},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:CharacterBuffer,pa:1027,d:['ceylon.buffer','CharacterBuffer','$at','position']};},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:CharacterBuffer,d:['ceylon.buffer','CharacterBuffer','$at','position','$set']};});
m$1.atr$(characterBuffer$,'$d6k2li$1r',function(){return this.$d6k2li$1r_;},function($21){return this.$d6k2li$1r_=$21;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:CharacterBuffer,pa:1027,d:['ceylon.buffer','CharacterBuffer','$at','_limit$63ga5v']};});
m$1.atr$(characterBuffer$,'limit',function(){
var characterBuffer$=this;
return characterBuffer$.$d6k2li$1r;
},function($23){
var characterBuffer$=this;
m$1.asrt$((($23>=(0))),"Assertion failed: "+"Limit must be non-negative\n\tviolated limit >= 0\n\tat CharacterBuffer.ceylon (38:15-38:26)",'37:8-38:27','CharacterBuffer.ceylon');
m$1.asrt$((($23<=characterBuffer$.capacity)),"Assertion failed: "+"Limit must be no larger than capacity\n\tviolated limit <= capacity\n\tat CharacterBuffer.ceylon (40:15-40:33)",'39:8-40:34','CharacterBuffer.ceylon');
if((characterBuffer$.position>$23)){
characterBuffer$.position=$23;
}
characterBuffer$.$d6k2li$1r=$23;
},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:CharacterBuffer,pa:1027,d:['ceylon.buffer','CharacterBuffer','$at','limit']};},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:CharacterBuffer,d:['ceylon.buffer','CharacterBuffer','$at','limit','$set']};});
characterBuffer$.$_get=function(){
var characterBuffer$=this;
var $24;
if(m$1.nn$(($24=characterBuffer$.$d6k2li$1o.$_get(characterBuffer$.position)))){
($25=characterBuffer$.position,characterBuffer$.position=$25.successor,$25);
var $25;
return $24;
}
else{
throw m$1.wrapexc(BufferUnderflowException("No Character at position "+(characterBuffer$.position.string)),'61:12-61:83','ceylon/buffer/CharacterBuffer.ceylon');
}
};characterBuffer$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Character},ps:[],$cont:CharacterBuffer,pa:3,d:['ceylon.buffer','CharacterBuffer','$m','get']};};
characterBuffer$.put=function($26){
var characterBuffer$=this;
if((characterBuffer$.position>characterBuffer$.limit)){
throw m$1.wrapexc(BufferOverflowException("No space at position "+(characterBuffer$.position.string)),'66:12-66:78','ceylon/buffer/CharacterBuffer.ceylon');
}
($27=$26,characterBuffer$.$d6k2li$1o.set(characterBuffer$.position,$27), $27);
var $27;
($28=characterBuffer$.position,characterBuffer$.position=$28.successor,$28);
var $28;
};characterBuffer$.put.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:m$1.Character}}],$cont:CharacterBuffer,pa:3,d:['ceylon.buffer','CharacterBuffer','$m','put']};};
characterBuffer$.clear=function(){
var characterBuffer$=this;
characterBuffer$.position=(0);
characterBuffer$.limit=characterBuffer$.capacity;
};characterBuffer$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:CharacterBuffer,pa:3,d:['ceylon.buffer','CharacterBuffer','$m','clear']};};
characterBuffer$.flip=function(){
var characterBuffer$=this;
characterBuffer$.limit=characterBuffer$.position;
characterBuffer$.position=(0);
};characterBuffer$.flip.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:CharacterBuffer,pa:3,d:['ceylon.buffer','CharacterBuffer','$m','flip']};};
characterBuffer$.resize=function($29,$2a){
var characterBuffer$=this;
if($2a===undefined){$2a=characterBuffer$.resize$defs$growLimit($29,$2a);}
($2b=$29,$2c=$2a,$2d=characterBuffer$,$2e=m$1.jsc$2((function(){
var $2f=m$1.$_Array$c_ofSize($29,(0).character,{Element$Array:{t:m$1.Character}});
$prop$get$2f={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:m$1.Character}}},$cont:characterBuffer$.resize,d:['ceylon.buffer','CharacterBuffer','$m','resize','$at','dest$czf9nn']};}};
$prop$get$2f.get=function(){return $2f};
characterBuffer$.$d6k2li$1o.copyTo($2f,0,0,characterBuffer$.available);
characterBuffer$.$d6k2li$1o=$2f;
}),[],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}),resizeBuffer($2b,$2c,$2d,$2e,{Value$resizeBuffer:{t:m$1.Character}}));
var $2b,$2c,$2d,$2e;
};characterBuffer$.resize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'newSize',mt:'prm',$t:{t:m$1.Integer}},{nm:'growLimit',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:CharacterBuffer,pa:3,d:['ceylon.buffer','CharacterBuffer','$m','resize']};};
m$1.atr$(characterBuffer$,'array',function(){
var characterBuffer$=this;
return characterBuffer$.$d6k2li$1o;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:m$1.Character}}},$cont:CharacterBuffer,pa:3,d:['ceylon.buffer','CharacterBuffer','$at','array']};});
m$1.atr$(characterBuffer$,'implementation',function(){
var characterBuffer$=this;
return characterBuffer$.$d6k2li$1o;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Object}]},$cont:CharacterBuffer,pa:3,d:['ceylon.buffer','CharacterBuffer','$at','implementation']};});
m$1.atr$(characterBuffer$,'string',function(){
var characterBuffer$=this;
return "".$_join(characterBuffer$);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:CharacterBuffer,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer:CharacterBuffer:$at:string')];},d:['ceylon.buffer','CharacterBuffer','$at','string']};});
characterBuffer$.toString=function(){return this.string.valueOf();};
})(CharacterBuffer.$$.prototype);
}
return CharacterBuffer;
}
ex$.$init$CharacterBuffer=$init$CharacterBuffer;$init$CharacterBuffer();
function ceiling$base($2j,$2k){
var $2l=$2j.$_float;
return m$1.f$div(m$1.Float(m$1.Float($2l+$2k)-(1)),$2k).integer;
};ceiling$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Float}}],an:function(){return[m$1.doc("ceylon.math is JVM only...")];},d:['ceylon.buffer.base','ceiling']};};
function toDecodeTable$base($2m,$2n,$2o,$2p,$lh8fgg$){
if($2o===undefined){$2o=(function($2q){return $2q;
});}
if($2p===undefined){$2p=(function($2r){return m$1.sarg$(function($2s){switch($2s){case 0:return $2r;}return m$1.finished();},undefined,{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:$lh8fgg$.ToSingle$toDecodeTable/*ORALE!ToSingle inv pero Element var*/});
});}
var $2t=($2u=m$1.for$(function(){
var $2v=$2m.indexed.iterator(),$2w=m$1.finished(),$2z,$30;
var n$2w=function(){
var $31;
if(($31=$2v.next())!==m$1.finished()){
$2z=$31.key,$30=$31.item;
$2x=$2p($30).iterator();
return $31;
}
return undefined;
}
var $2x=m$1.emptyIterator(),$2y=m$1.finished();
var n$2y=function(){return $2y=$2x.next();}
return function(){
do{
if(n$2y()!==m$1.finished()){
var $32=$2y,$33=m$1.Entry($2n($32),$2o($2z.$_byte),{Key$Entry:{t:m$1.Integer},Item$Entry:{t:m$1.Byte}});
return $33;
}
}while(n$2w()!==undefined);
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:{t:m$1.Integer},Item$Entry:{t:m$1.Byte}}}}).sequence(),m$1.$_map($2u,undefined,{Item$map:{t:m$1.Byte},Key$map:{t:m$1.Integer}}));
var $2u;
var $34;
m$1.asrt$((m$1.nn$(($34=m$1.max($2t.keys,{Absent$max:{t:m$1.Null},Value$max:{t:m$1.Integer}})))),"Assertion failed: "+"\n\tviolated exists max_ascii = max(ascii_map.keys)\n\tat base16.ceylon (45:11-45:50)",'45:4-45:51','base16.ceylon');
return m$1.tpl$([],m$1.for$(function(){
var $35=m$1.span((0),$34,{Element$span:{t:m$1.Integer}}).iterator(),$36=m$1.finished();
var n$36=function(){return $36=$35.next();}
return function(){
if(n$36()!==m$1.finished()){
var $37=$36,$38=function(){var $39;
if(m$1.nn$(($39=$2t.$_get($37))))return $39;else return (255).$_byte}();
return $38;
}
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}));
};toDecodeTable$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},ps:[{nm:'encodeTable',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'ToSingle$toDecodeTable'}}},{nm:'decodeToIndex',mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Integer},Arguments$Callable:{t:'T',l:['ToSingle$toDecodeTable']}}}},{nm:'fiddle',mt:'prm',def:1,$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Byte},Arguments$Callable:{t:'T',l:[{t:m$1.Byte}]}}}},{nm:'split',mt:'prm',def:1,$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:'ToSingle$toDecodeTable'}},Arguments$Callable:{t:'T',l:['ToSingle$toDecodeTable']}}}}],tp:{ToSingle$toDecodeTable:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.base:toDecodeTable')];},d:['ceylon.buffer.base','toDecodeTable']};};
function Base16$base($$targs$$,base16$){
$init$Base16$base();
if(base16$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.buffer.base::Base16"),'?','?')
m$1.set_type_args(base16$,$$targs$$);
IncrementalCodec$codec({FromMutable$IncrementalCodec:{t:ByteBuffer},FromSingle$IncrementalCodec:{t:m$1.Byte},ToMutable$IncrementalCodec:$$targs$$.ToMutable$Base16,FromImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ToSingle$IncrementalCodec:$$targs$$.ToSingle$Base16,ToImmutable$IncrementalCodec:$$targs$$.ToImmutable$Base16},base16$);
return base16$;
}
Base16$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],tp:{ToMutable$Base16:{sts:[{t:Buffer,a:{Element$Buffer:'ToSingle$Base16'}}]},ToImmutable$Base16:{sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'ToSingle$Base16'}}]},ToSingle$Base16:{sts:[{t:m$1.$_Object}]}},sts:[{t:IncrementalCodec$codec,a:{FromMutable$IncrementalCodec:{t:ByteBuffer},FromSingle$IncrementalCodec:{t:m$1.Byte},ToMutable$IncrementalCodec:'ToMutable$Base16',FromImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ToSingle$IncrementalCodec:'ToSingle$Base16',ToImmutable$IncrementalCodec:'ToImmutable$Base16'}}],pa:273,d:['ceylon.buffer.base','Base16']};};
ex$.Base16$base=Base16$base;
function $init$Base16$base(){
if(Base16$base.$$===undefined){
m$1.initTypeProto(Base16$base,'ceylon.buffer.base::Base16',m$1.Basic,$init$IncrementalCodec$codec());
(function(base16$){
base16$.averageDecodeSize=function($3a){var base16$=this;
return ceiling$base($3a,m$1.Float(2.0));
};
base16$.averageDecodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:Base16$base,pa:3,d:['ceylon.buffer.base','Base16','$m','averageDecodeSize']};};
base16$.maximumDecodeSize=function($3b){var base16$=this;
return ceiling$base($3b,m$1.Float(2.0));
};
base16$.maximumDecodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:Base16$base,pa:3,d:['ceylon.buffer.base','Base16','$m','maximumDecodeSize']};};
base16$.averageEncodeSize=function($3c){var base16$=this;
return ($3c*(2));
};
base16$.averageEncodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:Base16$base,pa:3,d:['ceylon.buffer.base','Base16','$m','averageEncodeSize']};};
base16$.maximumEncodeSize=function($3d){var base16$=this;
return ($3d*(2));
};
base16$.maximumEncodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:Base16$base,pa:3,d:['ceylon.buffer.base','Base16','$m','maximumEncodeSize']};};
base16$.$prop$getEncodeTable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Sequential,a:{Element$Sequential:'ToSingle$Base16'}}}},$cont:Base16$base,pa:5,d:['ceylon.buffer.base','Base16','$at','encodeTable']};}};
base16$.pieceEncoder=function($3e){var base16$=this;
if($3e===undefined){$3e=base16$.pieceEncoder$defs$error($3e);}
return function(){function $3f($$targs$$){
var $3f$=new $3f.$$;$3f$.outer$=base16$;
$3f$.$$targs$$=$$targs$$;
PieceConvert$codec({ToSingle$PieceConvert:base16$.$$targs$$.ToSingle$Base16,FromSingle$PieceConvert:{t:m$1.Byte}},$3f$);
return $3f$;
};$3f.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:base16$.pieceEncoder,sts:[{t:PieceConvert$codec,a:{ToSingle$PieceConvert:'ToSingle$Base16',FromSingle$PieceConvert:{t:m$1.Byte}}}],d:['ceylon.buffer.base','Base16','$m','pieceEncoder']};};
function $init$$3f(){
if($3f.$$===undefined){
m$1.initTypeProto($3f,'ceylon.buffer.base::Base16.pieceEncoder.anonymous#2',m$1.Basic,$init$PieceConvert$codec());
(function($3f$){
$3f$.more=function($3g){
var $3f$=this;
var $3h=base16$.encodeTable.$_get($3g.unsigned);
var $3i;
m$1.asrt$((m$1.nn$(($3i=$3h))),"Assertion failed: "+"Base16 encode table is invalid. Internal error.\n\tviolated exists r\n\tat base16.ceylon (69:27-69:36)",'68:20-69:37','base16.ceylon');
return $3i;
};$3f$.more.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'ToSingle$Base16'}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Byte}}],$cont:$3f,pa:3,d:['ceylon.buffer.base','Base16','$m','pieceEncoder','$m','more']};};
$3f$.toString=function(){return this.string.valueOf();};
})($3f.$$.prototype);
}
return $3f;
}
base16$.$init$$3f=$init$$3f;$init$$3f();return $3f();}();
};
base16$.pieceEncoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:'ToSingle$Base16',FromSingle$PieceConvert:{t:m$1.Byte}}},ps:[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:Base16$base,pa:3,d:['ceylon.buffer.base','Base16','$m','pieceEncoder']};};
base16$.decodeToIndex={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'input',mt:'prm',$t:'ToSingle$Base16'}],$cont:Base16$base,pa:5,d:['ceylon.buffer.base','Base16','$m','decodeToIndex']};}};base16$.$prop$getDecodeTableLeft={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:Base16$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.base:Base16:$at:decodeTableLeft')];},d:['ceylon.buffer.base','Base16','$at','decodeTableLeft']};}};
base16$.$prop$getDecodeTableRight={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:Base16$base,pa:5,an:function(){return[m$1.doc("The plain decode table")];},d:['ceylon.buffer.base','Base16','$at','decodeTableRight']};}};
base16$.pieceDecoder=function($3k){var base16$=this;
if($3k===undefined){$3k=base16$.pieceDecoder$defs$error($3k);}
return function(){function $3l($$targs$$){
var $3l$=new $3l.$$;$3l$.outer$=base16$;
$3l$.$$targs$$=$$targs$$;
PieceConvert$codec({ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:base16$.$$targs$$.ToSingle$Base16},$3l$);
$3l$.$d6k2li$3m_=null;
$3l$.$prop$get$d6k2li$3m={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Byte}]},$cont:$3l,pa:1024,d:['ceylon.buffer.base','Base16','$m','pieceDecoder','$at','leftwardNibble$t429wz']};}};
$3l$.$prop$get$d6k2li$3m.get=function(){return $d6k2li$3m};
return $3l$;
};$3l.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:base16$.pieceDecoder,sts:[{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:'ToSingle$Base16'}}],d:['ceylon.buffer.base','Base16','$m','pieceDecoder']};};
function $init$$3l(){
if($3l.$$===undefined){
m$1.initTypeProto($3l,'ceylon.buffer.base::Base16.pieceDecoder.anonymous#3',m$1.Basic,$init$PieceConvert$codec());
(function($3l$){
m$1.atr$($3l$,'$d6k2li$3m',function(){return this.$d6k2li$3m_;},function($3n){return this.$d6k2li$3m_=$3n;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Byte}]},$cont:$3l,pa:1024,d:['ceylon.buffer.base','Base16','$m','pieceDecoder','$at','leftwardNibble$t429wz']};});
$3l$.more=function($3o){
var $3l$=this;
var $3p;
if(m$1.nn$(($3p=$3l$.$d6k2li$3m))){
var $3q=(function(){var $3r=$3p;var $3s=base16$.decodeTableRight.$_get(base16$.decodeToIndex($3o));
var $3t;
if(m$1.nn$(($3t=$3s))&&!m$1.$eq$($3t,(255).$_byte)){
var $3u=(function(){var $3v=$3t;$3l$.$d6k2li$3m=null;
return m$1.sarg$(function($3w){switch($3w){case 0:return $3r.or($3v);}return m$1.finished();},undefined,{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:m$1.Byte}});
}());if($3u!==undefined){return $3u;}
}
}());if($3q!==undefined){return $3q;}
}
else{
var $3x=base16$.decodeTableLeft.$_get(base16$.decodeToIndex($3o));
var $3y;
if(m$1.nn$(($3y=$3x))&&!m$1.$eq$($3y,(255).$_byte)){
$3l$.$d6k2li$3m=$3y;
return m$1.empty();
}
}
var $3z=$3k;
if($3z===strict$codec()) {
throw m$1.wrapexc(($40="Input element "+($3o.string)+" is not valid ASCII hex",DecodeException$codec($40,undefined)),'99:24-101:25','ceylon/buffer/base/base16.ceylon');
var $40;
}
else if($3z===ignore$codec()) {
}
else if($3z===reset$codec()) {
$3l$.$d6k2li$3m=null;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
return m$1.empty();
};$3l$.more.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}},ps:[{nm:'input',mt:'prm',$t:'ToSingle$Base16'}],$cont:$3l,pa:3,d:['ceylon.buffer.base','Base16','$m','pieceDecoder','$m','more']};};
$3l$.done=function(){
var $3l$=this;
var $41;
var $42;
if(m$1.nn$(($42=$3l$.$d6k2li$3m))){
var $43=(function(){var $44=$42;$41=m$1.sarg$(function($45){switch($45){case 0:return $44;}return m$1.finished();},undefined,{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:m$1.Byte}});
}());if($43!==undefined){return $43;}
}
else{
$41=m$1.empty();
}
$3l$.$d6k2li$3m=null;
return $41;
};$3l$.done.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}},ps:[],$cont:$3l,pa:3,d:['ceylon.buffer.base','Base16','$m','pieceDecoder','$m','done']};};
$3l$.toString=function(){return this.string.valueOf();};
})($3l.$$.prototype);
}
return $3l;
}
base16$.$init$$3l=$init$$3l;$init$$3l();return $3l();}();
};
base16$.pieceDecoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:'ToSingle$Base16'}},ps:[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:Base16$base,pa:3,d:['ceylon.buffer.base','Base16','$m','pieceDecoder']};};
base16$.toString=function(){return this.string.valueOf();};
})(Base16$base.$$.prototype);
}
return Base16$base;
}
ex$.$init$Base16$base=$init$Base16$base;$init$Base16$base();
var $47$base;function $valinit$$47$base(){if($47$base===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'hexDigits\' before it was set"),'124:0-124:51','base16.ceylon');
if($47$base===undefined){$47$base=m$1.INIT$;$47$base=m$1.span(m$1.Character(48,true),m$1.Character(57,true),{Element$span:{t:m$1.Character}}).chain(m$1.span(m$1.Character(97,true),m$1.Character(102,true),{Element$span:{t:m$1.Character}}),{OtherAbsent$chain:{t:m$1.Nothing},Other$chain:{t:m$1.Character}})};return $47$base;};
function hexDigits$base(){return $valinit$$47$base();}
var $prop$getHexDigits$base={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:m$1.Character}}},d:['ceylon.buffer.base','hexDigits']};}};
ex$.$prop$getHexDigits$base=$prop$getHexDigits$base;
$prop$getHexDigits$base.get=hexDigits$base;
var $48$base;function $valinit$$48$base(){if($48$base===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'base16StringEncodeTable\' before it was set"),'125:0-128:12','base16.ceylon');
if($48$base===undefined){$48$base=m$1.INIT$;$48$base=m$1.for$(function(){
var $49=hexDigits$base().iterator(),$4a=m$1.finished();
var n$4a=function(){
if(($4a=$49.next())!==m$1.finished()){
var $4d=$4a;$4b=hexDigits$base().iterator();
return $4a;
}
return m$1.finished();
}
var $4b=m$1.emptyIterator(),$4c=m$1.finished();
var n$4c=function(){return $4c=$4b.next();}
return function(){
do{
if(n$4c()!==m$1.finished()){
var $4e=$4c,$4f=m$1.sarg$(function($4g){switch($4g){case 0:return $4a;case 1:return $4e;}return m$1.finished();},undefined,{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:m$1.Character}}).sequence();
return $4f;
}
}while(n$4a()!==m$1.finished());
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.Character}}}}).sequence()};return $48$base;};
function base16StringEncodeTable$base(){return $valinit$$48$base();}
var $prop$getBase16StringEncodeTable$base={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Character}}}}},d:['ceylon.buffer.base','base16StringEncodeTable']};}};
ex$.$prop$getBase16StringEncodeTable$base=$prop$getBase16StringEncodeTable$base;
$prop$getBase16StringEncodeTable$base.get=base16StringEncodeTable$base;
function Base16String$base(base16String$){
$init$Base16String$base();
if(base16String$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.buffer.base::Base16String"),'?','?')
CharacterToByteCodec$codec(base16String$);
Base16$base({ToImmutable$Base16:{t:m$1.$_String},ToSingle$Base16:{t:m$1.Character},ToMutable$Base16:{t:CharacterBuffer}},base16String$);
base16String$.$d6k2li$4h_=base16StringEncodeTable$base();
base16String$.$d6k2li$4i_=($4j=hexDigits$base(),$4k=m$1.jsc$2(m$1.jsc$3(base16String$,base16String$.decodeToIndex),[{nm:'input',mt:'prm',$t:{t:m$1.Character}}],{Return$Callable:{t:m$1.Integer},Arguments$Callable:m$1.mtt$([{t:m$1.Character}])}),$4l=m$1.jsc$2((function($4m){return $4m.leftLogicalShift(4);
}),[{nm:'b',mt:'prm',$t:{t:m$1.Byte}}],{Return$Callable:{t:m$1.Byte},Arguments$Callable:m$1.mtt$([{t:m$1.Byte}])}),$4n=m$1.jsc$2((function($4o){return m$1.sarg$(function($4p){switch($4p){case 0:return $4o;case 1:return $4o.uppercased;}return m$1.finished();},undefined,{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:m$1.Character}});
}),[{nm:'s',mt:'prm',$t:{t:m$1.Character}}],{Return$Callable:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:m$1.Character}}},Arguments$Callable:m$1.mtt$([{t:m$1.Character}])}),toDecodeTable$base($4j,$4k,$4l,$4n,{ToSingle$toDecodeTable:{t:m$1.Character}}));
var $4j,$4k,$4l,$4n;
base16String$.$d6k2li$4q_=($4r=hexDigits$base(),$4s=m$1.jsc$2(m$1.jsc$3(base16String$,base16String$.decodeToIndex),[{nm:'input',mt:'prm',$t:{t:m$1.Character}}],{Return$Callable:{t:m$1.Integer},Arguments$Callable:m$1.mtt$([{t:m$1.Character}])}),$4t=m$1.jsc$2((function($4u){return m$1.sarg$(function($4v){switch($4v){case 0:return $4u;case 1:return $4u.uppercased;}return m$1.finished();},undefined,{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:m$1.Character}});
}),[{nm:'s',mt:'prm',$t:{t:m$1.Character}}],{Return$Callable:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:m$1.Character}}},Arguments$Callable:m$1.mtt$([{t:m$1.Character}])}),toDecodeTable$base($4r,$4s,undefined,$4t,{ToSingle$toDecodeTable:{t:m$1.Character}}));
var $4r,$4s,$4t;
return base16String$;
}
Base16String$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base16$base,a:{ToSingle$Base16:{t:m$1.Character},ToImmutable$Base16:{t:m$1.$_String},ToMutable$Base16:{t:CharacterBuffer}}},ps:[],sts:[{t:CharacterToByteCodec$codec}],pa:257,d:['ceylon.buffer.base','Base16String']};};
ex$.Base16String$base=Base16String$base;
function $init$Base16String$base(){
if(Base16String$base.$$===undefined){
m$1.initTypeProto(Base16String$base,'ceylon.buffer.base::Base16String',$init$Base16$base(),$init$CharacterToByteCodec$codec());
(function(base16String$){
m$1.atr$(base16String$,'encodeTable',function(){return this.$d6k2li$4h_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Character}}}}},$cont:Base16String$base,pa:3,d:['ceylon.buffer.base','Base16String','$at','encodeTable']};});
base16String$.decodeToIndex=function($4w){var base16String$=this;
return $4w.integer;
};
base16String$.decodeToIndex.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Character}}],$cont:Base16String$base,pa:3,d:['ceylon.buffer.base','Base16String','$m','decodeToIndex']};};
m$1.atr$(base16String$,'decodeTableLeft',function(){return this.$d6k2li$4i_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:Base16String$base,pa:3,d:['ceylon.buffer.base','Base16String','$at','decodeTableLeft']};});
m$1.atr$(base16String$,'decodeTableRight',function(){return this.$d6k2li$4q_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:Base16String$base,pa:3,d:['ceylon.buffer.base','Base16String','$at','decodeTableRight']};});
base16String$.decodeBid=function($4x){
var base16String$=this;
if($4x.$_every(m$1.jsc$2((function($4y){return m$1.$cnt$(hexDigits$base(),$4y);
}),[{nm:'s',mt:'prm',$t:{t:m$1.Character}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:m$1.Character}])}))){
return 10;
}
else{
return 0;
}
};base16String$.decodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}}}],$cont:Base16String$base,pa:3,d:['ceylon.buffer.base','Base16String','$m','decodeBid']};};
base16String$.toString=function(){return this.string.valueOf();};
})(Base16String$base.$$.prototype);
}
return Base16String$base;
}
ex$.$init$Base16String$base=$init$Base16String$base;$init$Base16String$base();
var $4z$base;function $valinit$$4z$base(){if($4z$base===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'hexDigitsByte\' before it was set"),'158:0-158:48','base16.ceylon');
if($4z$base===undefined){$4z$base=m$1.INIT$;$4z$base=hexDigits$base().collect(function(e){return e.integer;},{Result$collect:{t:m$1.Integer}}).collect(function(e){return e.$_byte;},{Result$collect:{t:m$1.Byte}})};return $4z$base;};
function hexDigitsByte$base(){return $valinit$$4z$base();}
var $prop$getHexDigitsByte$base={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:m$1.Byte}}},d:['ceylon.buffer.base','hexDigitsByte']};}};
ex$.$prop$getHexDigitsByte$base=$prop$getHexDigitsByte$base;
$prop$getHexDigitsByte$base.get=hexDigitsByte$base;
var $50$base;function $valinit$$50$base(){if($50$base===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'base16ByteEncodeTable\' before it was set"),'159:0-162:12','base16.ceylon');
if($50$base===undefined){$50$base=m$1.INIT$;$50$base=m$1.for$(function(){
var $51=hexDigitsByte$base().iterator(),$52=m$1.finished();
var n$52=function(){
if(($52=$51.next())!==m$1.finished()){
var $55=$52;$53=hexDigitsByte$base().iterator();
return $52;
}
return m$1.finished();
}
var $53=m$1.emptyIterator(),$54=m$1.finished();
var n$54=function(){return $54=$53.next();}
return function(){
do{
if(n$54()!==m$1.finished()){
var $56=$54,$57=m$1.sarg$(function($58){switch($58){case 0:return $52;case 1:return $56;}return m$1.finished();},undefined,{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:m$1.Byte}}).sequence();
return $57;
}
}while(n$52()!==m$1.finished());
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.Byte}}}}).sequence()};return $50$base;};
function base16ByteEncodeTable$base(){return $valinit$$50$base();}
var $prop$getBase16ByteEncodeTable$base={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}}}},d:['ceylon.buffer.base','base16ByteEncodeTable']};}};
ex$.$prop$getBase16ByteEncodeTable$base=$prop$getBase16ByteEncodeTable$base;
$prop$getBase16ByteEncodeTable$base.get=base16ByteEncodeTable$base;
function Base16Byte$base(base16Byte$){
$init$Base16Byte$base();
if(base16Byte$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.buffer.base::Base16Byte"),'?','?')
ByteToByteCodec$codec(base16Byte$);
Base16$base({ToImmutable$Base16:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ToSingle$Base16:{t:m$1.Byte},ToMutable$Base16:{t:ByteBuffer}},base16Byte$);
base16Byte$.$d6k2li$59_=base16ByteEncodeTable$base();
base16Byte$.$d6k2li$5a_=($5b=hexDigitsByte$base(),$5c=m$1.jsc$2(m$1.jsc$3(base16Byte$,base16Byte$.decodeToIndex),[{nm:'input',mt:'prm',$t:{t:m$1.Byte}}],{Return$Callable:{t:m$1.Integer},Arguments$Callable:m$1.mtt$([{t:m$1.Byte}])}),$5d=m$1.jsc$2((function($5e){return $5e.leftLogicalShift(4);
}),[{nm:'b',mt:'prm',$t:{t:m$1.Byte}}],{Return$Callable:{t:m$1.Byte},Arguments$Callable:m$1.mtt$([{t:m$1.Byte}])}),$5f=m$1.jsc$2((function($5g){return m$1.sarg$(function($5h){switch($5h){case 0:return $5g;case 1:return $5g.unsigned.character.uppercased.integer.$_byte;}return m$1.finished();},undefined,{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:m$1.Byte}});
}),[{nm:'s',mt:'prm',$t:{t:m$1.Byte}}],{Return$Callable:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:m$1.Byte}}},Arguments$Callable:m$1.mtt$([{t:m$1.Byte}])}),toDecodeTable$base($5b,$5c,$5d,$5f,{ToSingle$toDecodeTable:{t:m$1.Byte}}));
var $5b,$5c,$5d,$5f;
base16Byte$.$d6k2li$5i_=($5j=hexDigitsByte$base(),$5k=m$1.jsc$2(m$1.jsc$3(base16Byte$,base16Byte$.decodeToIndex),[{nm:'input',mt:'prm',$t:{t:m$1.Byte}}],{Return$Callable:{t:m$1.Integer},Arguments$Callable:m$1.mtt$([{t:m$1.Byte}])}),$5l=m$1.jsc$2((function($5m){return m$1.sarg$(function($5n){switch($5n){case 0:return $5m;case 1:return $5m.unsigned.character.uppercased.integer.$_byte;}return m$1.finished();},undefined,{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:m$1.Byte}});
}),[{nm:'s',mt:'prm',$t:{t:m$1.Byte}}],{Return$Callable:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:m$1.Byte}}},Arguments$Callable:m$1.mtt$([{t:m$1.Byte}])}),toDecodeTable$base($5j,$5k,undefined,$5l,{ToSingle$toDecodeTable:{t:m$1.Byte}}));
var $5j,$5k,$5l;
return base16Byte$;
}
Base16Byte$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base16$base,a:{ToSingle$Base16:{t:m$1.Byte},ToImmutable$Base16:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ToMutable$Base16:{t:ByteBuffer}}},ps:[],sts:[{t:ByteToByteCodec$codec}],pa:257,d:['ceylon.buffer.base','Base16Byte']};};
ex$.Base16Byte$base=Base16Byte$base;
function $init$Base16Byte$base(){
if(Base16Byte$base.$$===undefined){
m$1.initTypeProto(Base16Byte$base,'ceylon.buffer.base::Base16Byte',$init$Base16$base(),$init$ByteToByteCodec$codec());
(function(base16Byte$){
m$1.atr$(base16Byte$,'encodeTable',function(){return this.$d6k2li$59_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}}}},$cont:Base16Byte$base,pa:3,d:['ceylon.buffer.base','Base16Byte','$at','encodeTable']};});
base16Byte$.decodeToIndex=function($5o){var base16Byte$=this;
return $5o.unsigned;
};
base16Byte$.decodeToIndex.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Byte}}],$cont:Base16Byte$base,pa:3,d:['ceylon.buffer.base','Base16Byte','$m','decodeToIndex']};};
m$1.atr$(base16Byte$,'decodeTableLeft',function(){return this.$d6k2li$5a_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:Base16Byte$base,pa:3,d:['ceylon.buffer.base','Base16Byte','$at','decodeTableLeft']};});
m$1.atr$(base16Byte$,'decodeTableRight',function(){return this.$d6k2li$5i_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:Base16Byte$base,pa:3,d:['ceylon.buffer.base','Base16Byte','$at','decodeTableRight']};});
base16Byte$.decodeBid=function($5p){
var base16Byte$=this;
if($5p.$_every(m$1.jsc$2((function($5q){return m$1.$cnt$(hexDigitsByte$base(),$5q);
}),[{nm:'s',mt:'prm',$t:{t:m$1.Byte}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:m$1.Byte}])}))){
return 10;
}
else{
return 0;
}
};base16Byte$.decodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}}],$cont:Base16Byte$base,pa:3,d:['ceylon.buffer.base','Base16Byte','$m','decodeBid']};};
base16Byte$.toString=function(){return this.string.valueOf();};
})(Base16Byte$base.$$.prototype);
}
return Base16Byte$base;
}
ex$.$init$Base16Byte$base=$init$Base16Byte$base;$init$Base16Byte$base();
function $5r$base(){
var base16String$=new $5r$base.$$;Base16String$base(base16String$);
base16String$.$d6k2li$5t_=m$1.tpl$(["base16","base-16","base_16"]);
base16String$.$prop$getAliases={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$5r$base,pa:3,d:['ceylon.buffer.base','base16String','$at','aliases']};}};
base16String$.$prop$getAliases.get=function(){return aliases};
return base16String$;
};$5r$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base16String$base},d:['ceylon.buffer.base','base16String']};};
function $init$base16String$base(){
if($5r$base.$$===undefined){
m$1.initTypeProto($5r$base,'ceylon.buffer.base::base16String',$init$Base16String$base());
(function(base16String$){
m$1.atr$(base16String$,'aliases',function(){return this.$d6k2li$5t_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$5r$base,pa:3,d:['ceylon.buffer.base','base16String','$at','aliases']};});
base16String$.encodeBid=function($5u){return 5};
base16String$.encodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}}],$cont:$5r$base,pa:3,d:['ceylon.buffer.base','base16String','$m','encodeBid']};};
base16String$.toString=function(){return this.string.valueOf();};
})($5r$base.$$.prototype);
}
return $5r$base;
}
ex$.$init$base16String$base=$init$base16String$base;$init$base16String$base();var $5v;
function base16String$base(){
if($5v===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'base16String\' before it was set"),'192:0-195:0','base16.ceylon');
if($5v===undefined){$5v=m$1.INIT$;$5v=$init$base16String$base()();$5v.$crtmm$=base16String$base.$crtmm$;}
return $5v;
}
ex$.base16String$base=base16String$base;
base16String$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$base16String$base()},pa:1,d:['ceylon.buffer.base','base16String']};};
$prop$getBase16String$base=base16String$base;
ex$.$prop$getBase16String$base=$prop$getBase16String$base;
function $5w$base(){
var base16Byte$=new $5w$base.$$;Base16Byte$base(base16Byte$);
base16Byte$.$d6k2li$5y_=m$1.tpl$(["base16","base-16","base_16"]);
base16Byte$.$prop$getAliases={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$5w$base,pa:3,d:['ceylon.buffer.base','base16Byte','$at','aliases']};}};
base16Byte$.$prop$getAliases.get=function(){return aliases};
return base16Byte$;
};$5w$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base16Byte$base},d:['ceylon.buffer.base','base16Byte']};};
function $init$base16Byte$base(){
if($5w$base.$$===undefined){
m$1.initTypeProto($5w$base,'ceylon.buffer.base::base16Byte',$init$Base16Byte$base());
(function(base16Byte$){
m$1.atr$(base16Byte$,'aliases',function(){return this.$d6k2li$5y_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$5w$base,pa:3,d:['ceylon.buffer.base','base16Byte','$at','aliases']};});
base16Byte$.encodeBid=function($5z){return 5};
base16Byte$.encodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}}],$cont:$5w$base,pa:3,d:['ceylon.buffer.base','base16Byte','$m','encodeBid']};};
base16Byte$.toString=function(){return this.string.valueOf();};
})($5w$base.$$.prototype);
}
return $5w$base;
}
ex$.$init$base16Byte$base=$init$base16Byte$base;$init$base16Byte$base();var $60;
function base16Byte$base(){
if($60===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'base16Byte\' before it was set"),'197:0-200:0','base16.ceylon');
if($60===undefined){$60=m$1.INIT$;$60=$init$base16Byte$base()();$60.$crtmm$=base16Byte$base.$crtmm$;}
return $60;
}
ex$.base16Byte$base=base16Byte$base;
base16Byte$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$base16Byte$base()},pa:1,d:['ceylon.buffer.base','base16Byte']};};
$prop$getBase16Byte$base=base16Byte$base;
ex$.$prop$getBase16Byte$base=$prop$getBase16Byte$base;
function Base32PieceEncoderState$base(base32PieceEncoderState$){
$init$Base32PieceEncoderState$base();
if(base32PieceEncoderState$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.buffer.base::Base32PieceEncoderState"),'?','?')
return base32PieceEncoderState$;
}
Base32PieceEncoderState$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getB32EncodeFirst$base,$prop$getB32EncodeSecond$base,$prop$getB32EncodeThird$base,$prop$getB32EncodeFourth$base,$prop$getB32EncodeFifth$base],pa:256,d:['ceylon.buffer.base','Base32PieceEncoderState']};};
ex$.Base32PieceEncoderState$base=Base32PieceEncoderState$base;
function $init$Base32PieceEncoderState$base(){
if(Base32PieceEncoderState$base.$$===undefined){
m$1.initTypeProto(Base32PieceEncoderState$base,'ceylon.buffer.base::Base32PieceEncoderState',m$1.Basic);
(function(base32PieceEncoderState$){
base32PieceEncoderState$.toString=function(){return this.string.valueOf();};
})(Base32PieceEncoderState$base.$$.prototype);
}
return Base32PieceEncoderState$base;
}
ex$.$init$Base32PieceEncoderState$base=$init$Base32PieceEncoderState$base;$init$Base32PieceEncoderState$base();
function $61$base(){
var b32EncodeFirst$=new $61$base.$$;Base32PieceEncoderState$base(b32EncodeFirst$);
return b32EncodeFirst$;
};$61$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base32PieceEncoderState$base},d:['ceylon.buffer.base','b32EncodeFirst']};};
function $init$b32EncodeFirst$base(){
if($61$base.$$===undefined){
m$1.initTypeProto($61$base,'ceylon.buffer.base::b32EncodeFirst',$init$Base32PieceEncoderState$base());
(function(b32EncodeFirst$){
b32EncodeFirst$.toString=function(){return this.string.valueOf();};
})($61$base.$$.prototype);
}
return $61$base;
}
ex$.$init$b32EncodeFirst$base=$init$b32EncodeFirst$base;$init$b32EncodeFirst$base();var $63;
function b32EncodeFirst$base(){
if($63===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'b32EncodeFirst\' before it was set"),'25:0-25:57','base32.ceylon');
if($63===undefined){$63=m$1.INIT$;$63=$init$b32EncodeFirst$base()();$63.$crtmm$=b32EncodeFirst$base.$crtmm$;}
return $63;
}
b32EncodeFirst$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$b32EncodeFirst$base()},d:['ceylon.buffer.base','b32EncodeFirst']};};
$prop$getB32EncodeFirst$base=b32EncodeFirst$base;
ex$.$prop$getB32EncodeFirst$base=$prop$getB32EncodeFirst$base;
function $64$base(){
var b32EncodeSecond$=new $64$base.$$;Base32PieceEncoderState$base(b32EncodeSecond$);
return b32EncodeSecond$;
};$64$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base32PieceEncoderState$base},d:['ceylon.buffer.base','b32EncodeSecond']};};
function $init$b32EncodeSecond$base(){
if($64$base.$$===undefined){
m$1.initTypeProto($64$base,'ceylon.buffer.base::b32EncodeSecond',$init$Base32PieceEncoderState$base());
(function(b32EncodeSecond$){
b32EncodeSecond$.toString=function(){return this.string.valueOf();};
})($64$base.$$.prototype);
}
return $64$base;
}
ex$.$init$b32EncodeSecond$base=$init$b32EncodeSecond$base;$init$b32EncodeSecond$base();var $66;
function b32EncodeSecond$base(){
if($66===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'b32EncodeSecond\' before it was set"),'26:0-26:58','base32.ceylon');
if($66===undefined){$66=m$1.INIT$;$66=$init$b32EncodeSecond$base()();$66.$crtmm$=b32EncodeSecond$base.$crtmm$;}
return $66;
}
b32EncodeSecond$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$b32EncodeSecond$base()},d:['ceylon.buffer.base','b32EncodeSecond']};};
$prop$getB32EncodeSecond$base=b32EncodeSecond$base;
ex$.$prop$getB32EncodeSecond$base=$prop$getB32EncodeSecond$base;
function $67$base(){
var b32EncodeThird$=new $67$base.$$;Base32PieceEncoderState$base(b32EncodeThird$);
return b32EncodeThird$;
};$67$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base32PieceEncoderState$base},d:['ceylon.buffer.base','b32EncodeThird']};};
function $init$b32EncodeThird$base(){
if($67$base.$$===undefined){
m$1.initTypeProto($67$base,'ceylon.buffer.base::b32EncodeThird',$init$Base32PieceEncoderState$base());
(function(b32EncodeThird$){
b32EncodeThird$.toString=function(){return this.string.valueOf();};
})($67$base.$$.prototype);
}
return $67$base;
}
ex$.$init$b32EncodeThird$base=$init$b32EncodeThird$base;$init$b32EncodeThird$base();var $69;
function b32EncodeThird$base(){
if($69===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'b32EncodeThird\' before it was set"),'27:0-27:57','base32.ceylon');
if($69===undefined){$69=m$1.INIT$;$69=$init$b32EncodeThird$base()();$69.$crtmm$=b32EncodeThird$base.$crtmm$;}
return $69;
}
b32EncodeThird$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$b32EncodeThird$base()},d:['ceylon.buffer.base','b32EncodeThird']};};
$prop$getB32EncodeThird$base=b32EncodeThird$base;
ex$.$prop$getB32EncodeThird$base=$prop$getB32EncodeThird$base;
function $6a$base(){
var b32EncodeFourth$=new $6a$base.$$;Base32PieceEncoderState$base(b32EncodeFourth$);
return b32EncodeFourth$;
};$6a$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base32PieceEncoderState$base},d:['ceylon.buffer.base','b32EncodeFourth']};};
function $init$b32EncodeFourth$base(){
if($6a$base.$$===undefined){
m$1.initTypeProto($6a$base,'ceylon.buffer.base::b32EncodeFourth',$init$Base32PieceEncoderState$base());
(function(b32EncodeFourth$){
b32EncodeFourth$.toString=function(){return this.string.valueOf();};
})($6a$base.$$.prototype);
}
return $6a$base;
}
ex$.$init$b32EncodeFourth$base=$init$b32EncodeFourth$base;$init$b32EncodeFourth$base();var $6c;
function b32EncodeFourth$base(){
if($6c===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'b32EncodeFourth\' before it was set"),'28:0-28:58','base32.ceylon');
if($6c===undefined){$6c=m$1.INIT$;$6c=$init$b32EncodeFourth$base()();$6c.$crtmm$=b32EncodeFourth$base.$crtmm$;}
return $6c;
}
b32EncodeFourth$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$b32EncodeFourth$base()},d:['ceylon.buffer.base','b32EncodeFourth']};};
$prop$getB32EncodeFourth$base=b32EncodeFourth$base;
ex$.$prop$getB32EncodeFourth$base=$prop$getB32EncodeFourth$base;
function $6d$base(){
var b32EncodeFifth$=new $6d$base.$$;Base32PieceEncoderState$base(b32EncodeFifth$);
return b32EncodeFifth$;
};$6d$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base32PieceEncoderState$base},d:['ceylon.buffer.base','b32EncodeFifth']};};
function $init$b32EncodeFifth$base(){
if($6d$base.$$===undefined){
m$1.initTypeProto($6d$base,'ceylon.buffer.base::b32EncodeFifth',$init$Base32PieceEncoderState$base());
(function(b32EncodeFifth$){
b32EncodeFifth$.toString=function(){return this.string.valueOf();};
})($6d$base.$$.prototype);
}
return $6d$base;
}
ex$.$init$b32EncodeFifth$base=$init$b32EncodeFifth$base;$init$b32EncodeFifth$base();var $6f;
function b32EncodeFifth$base(){
if($6f===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'b32EncodeFifth\' before it was set"),'29:0-29:57','base32.ceylon');
if($6f===undefined){$6f=m$1.INIT$;$6f=$init$b32EncodeFifth$base()();$6f.$crtmm$=b32EncodeFifth$base.$crtmm$;}
return $6f;
}
b32EncodeFifth$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$b32EncodeFifth$base()},d:['ceylon.buffer.base','b32EncodeFifth']};};
$prop$getB32EncodeFifth$base=b32EncodeFifth$base;
ex$.$prop$getB32EncodeFifth$base=$prop$getB32EncodeFifth$base;
function Base32PieceDecoderState$base(base32PieceDecoderState$){
$init$Base32PieceDecoderState$base();
if(base32PieceDecoderState$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.buffer.base::Base32PieceDecoderState"),'?','?')
return base32PieceDecoderState$;
}
Base32PieceDecoderState$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getB32DecodeFirst$base,$prop$getB32DecodeSecond$base,$prop$getB32DecodeThird$base,$prop$getB32DecodeFourth$base,$prop$getB32DecodeFifth$base,$prop$getB32DecodeSixth$base,$prop$getB32DecodeSeventh$base,$prop$getB32DecodeEighth$base],pa:256,d:['ceylon.buffer.base','Base32PieceDecoderState']};};
ex$.Base32PieceDecoderState$base=Base32PieceDecoderState$base;
function $init$Base32PieceDecoderState$base(){
if(Base32PieceDecoderState$base.$$===undefined){
m$1.initTypeProto(Base32PieceDecoderState$base,'ceylon.buffer.base::Base32PieceDecoderState',m$1.Basic);
(function(base32PieceDecoderState$){
base32PieceDecoderState$.toString=function(){return this.string.valueOf();};
})(Base32PieceDecoderState$base.$$.prototype);
}
return Base32PieceDecoderState$base;
}
ex$.$init$Base32PieceDecoderState$base=$init$Base32PieceDecoderState$base;$init$Base32PieceDecoderState$base();
function $6g$base(){
var b32DecodeFirst$=new $6g$base.$$;Base32PieceDecoderState$base(b32DecodeFirst$);
return b32DecodeFirst$;
};$6g$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base32PieceDecoderState$base},d:['ceylon.buffer.base','b32DecodeFirst']};};
function $init$b32DecodeFirst$base(){
if($6g$base.$$===undefined){
m$1.initTypeProto($6g$base,'ceylon.buffer.base::b32DecodeFirst',$init$Base32PieceDecoderState$base());
(function(b32DecodeFirst$){
b32DecodeFirst$.toString=function(){return this.string.valueOf();};
})($6g$base.$$.prototype);
}
return $6g$base;
}
ex$.$init$b32DecodeFirst$base=$init$b32DecodeFirst$base;$init$b32DecodeFirst$base();var $6i;
function b32DecodeFirst$base(){
if($6i===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'b32DecodeFirst\' before it was set"),'41:0-41:57','base32.ceylon');
if($6i===undefined){$6i=m$1.INIT$;$6i=$init$b32DecodeFirst$base()();$6i.$crtmm$=b32DecodeFirst$base.$crtmm$;}
return $6i;
}
b32DecodeFirst$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$b32DecodeFirst$base()},d:['ceylon.buffer.base','b32DecodeFirst']};};
$prop$getB32DecodeFirst$base=b32DecodeFirst$base;
ex$.$prop$getB32DecodeFirst$base=$prop$getB32DecodeFirst$base;
function $6j$base(){
var b32DecodeSecond$=new $6j$base.$$;Base32PieceDecoderState$base(b32DecodeSecond$);
return b32DecodeSecond$;
};$6j$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base32PieceDecoderState$base},d:['ceylon.buffer.base','b32DecodeSecond']};};
function $init$b32DecodeSecond$base(){
if($6j$base.$$===undefined){
m$1.initTypeProto($6j$base,'ceylon.buffer.base::b32DecodeSecond',$init$Base32PieceDecoderState$base());
(function(b32DecodeSecond$){
b32DecodeSecond$.toString=function(){return this.string.valueOf();};
})($6j$base.$$.prototype);
}
return $6j$base;
}
ex$.$init$b32DecodeSecond$base=$init$b32DecodeSecond$base;$init$b32DecodeSecond$base();var $6l;
function b32DecodeSecond$base(){
if($6l===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'b32DecodeSecond\' before it was set"),'42:0-42:58','base32.ceylon');
if($6l===undefined){$6l=m$1.INIT$;$6l=$init$b32DecodeSecond$base()();$6l.$crtmm$=b32DecodeSecond$base.$crtmm$;}
return $6l;
}
b32DecodeSecond$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$b32DecodeSecond$base()},d:['ceylon.buffer.base','b32DecodeSecond']};};
$prop$getB32DecodeSecond$base=b32DecodeSecond$base;
ex$.$prop$getB32DecodeSecond$base=$prop$getB32DecodeSecond$base;
function $6m$base(){
var b32DecodeThird$=new $6m$base.$$;Base32PieceDecoderState$base(b32DecodeThird$);
return b32DecodeThird$;
};$6m$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base32PieceDecoderState$base},d:['ceylon.buffer.base','b32DecodeThird']};};
function $init$b32DecodeThird$base(){
if($6m$base.$$===undefined){
m$1.initTypeProto($6m$base,'ceylon.buffer.base::b32DecodeThird',$init$Base32PieceDecoderState$base());
(function(b32DecodeThird$){
b32DecodeThird$.toString=function(){return this.string.valueOf();};
})($6m$base.$$.prototype);
}
return $6m$base;
}
ex$.$init$b32DecodeThird$base=$init$b32DecodeThird$base;$init$b32DecodeThird$base();var $6o;
function b32DecodeThird$base(){
if($6o===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'b32DecodeThird\' before it was set"),'43:0-43:57','base32.ceylon');
if($6o===undefined){$6o=m$1.INIT$;$6o=$init$b32DecodeThird$base()();$6o.$crtmm$=b32DecodeThird$base.$crtmm$;}
return $6o;
}
b32DecodeThird$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$b32DecodeThird$base()},d:['ceylon.buffer.base','b32DecodeThird']};};
$prop$getB32DecodeThird$base=b32DecodeThird$base;
ex$.$prop$getB32DecodeThird$base=$prop$getB32DecodeThird$base;
function $6p$base(){
var b32DecodeFourth$=new $6p$base.$$;Base32PieceDecoderState$base(b32DecodeFourth$);
return b32DecodeFourth$;
};$6p$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base32PieceDecoderState$base},d:['ceylon.buffer.base','b32DecodeFourth']};};
function $init$b32DecodeFourth$base(){
if($6p$base.$$===undefined){
m$1.initTypeProto($6p$base,'ceylon.buffer.base::b32DecodeFourth',$init$Base32PieceDecoderState$base());
(function(b32DecodeFourth$){
b32DecodeFourth$.toString=function(){return this.string.valueOf();};
})($6p$base.$$.prototype);
}
return $6p$base;
}
ex$.$init$b32DecodeFourth$base=$init$b32DecodeFourth$base;$init$b32DecodeFourth$base();var $6r;
function b32DecodeFourth$base(){
if($6r===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'b32DecodeFourth\' before it was set"),'44:0-44:58','base32.ceylon');
if($6r===undefined){$6r=m$1.INIT$;$6r=$init$b32DecodeFourth$base()();$6r.$crtmm$=b32DecodeFourth$base.$crtmm$;}
return $6r;
}
b32DecodeFourth$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$b32DecodeFourth$base()},d:['ceylon.buffer.base','b32DecodeFourth']};};
$prop$getB32DecodeFourth$base=b32DecodeFourth$base;
ex$.$prop$getB32DecodeFourth$base=$prop$getB32DecodeFourth$base;
function $6s$base(){
var b32DecodeFifth$=new $6s$base.$$;Base32PieceDecoderState$base(b32DecodeFifth$);
return b32DecodeFifth$;
};$6s$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base32PieceDecoderState$base},d:['ceylon.buffer.base','b32DecodeFifth']};};
function $init$b32DecodeFifth$base(){
if($6s$base.$$===undefined){
m$1.initTypeProto($6s$base,'ceylon.buffer.base::b32DecodeFifth',$init$Base32PieceDecoderState$base());
(function(b32DecodeFifth$){
b32DecodeFifth$.toString=function(){return this.string.valueOf();};
})($6s$base.$$.prototype);
}
return $6s$base;
}
ex$.$init$b32DecodeFifth$base=$init$b32DecodeFifth$base;$init$b32DecodeFifth$base();var $6u;
function b32DecodeFifth$base(){
if($6u===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'b32DecodeFifth\' before it was set"),'45:0-45:57','base32.ceylon');
if($6u===undefined){$6u=m$1.INIT$;$6u=$init$b32DecodeFifth$base()();$6u.$crtmm$=b32DecodeFifth$base.$crtmm$;}
return $6u;
}
b32DecodeFifth$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$b32DecodeFifth$base()},d:['ceylon.buffer.base','b32DecodeFifth']};};
$prop$getB32DecodeFifth$base=b32DecodeFifth$base;
ex$.$prop$getB32DecodeFifth$base=$prop$getB32DecodeFifth$base;
function $6v$base(){
var b32DecodeSixth$=new $6v$base.$$;Base32PieceDecoderState$base(b32DecodeSixth$);
return b32DecodeSixth$;
};$6v$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base32PieceDecoderState$base},d:['ceylon.buffer.base','b32DecodeSixth']};};
function $init$b32DecodeSixth$base(){
if($6v$base.$$===undefined){
m$1.initTypeProto($6v$base,'ceylon.buffer.base::b32DecodeSixth',$init$Base32PieceDecoderState$base());
(function(b32DecodeSixth$){
b32DecodeSixth$.toString=function(){return this.string.valueOf();};
})($6v$base.$$.prototype);
}
return $6v$base;
}
ex$.$init$b32DecodeSixth$base=$init$b32DecodeSixth$base;$init$b32DecodeSixth$base();var $6x;
function b32DecodeSixth$base(){
if($6x===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'b32DecodeSixth\' before it was set"),'46:0-46:57','base32.ceylon');
if($6x===undefined){$6x=m$1.INIT$;$6x=$init$b32DecodeSixth$base()();$6x.$crtmm$=b32DecodeSixth$base.$crtmm$;}
return $6x;
}
b32DecodeSixth$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$b32DecodeSixth$base()},d:['ceylon.buffer.base','b32DecodeSixth']};};
$prop$getB32DecodeSixth$base=b32DecodeSixth$base;
ex$.$prop$getB32DecodeSixth$base=$prop$getB32DecodeSixth$base;
function $6y$base(){
var b32DecodeSeventh$=new $6y$base.$$;Base32PieceDecoderState$base(b32DecodeSeventh$);
return b32DecodeSeventh$;
};$6y$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base32PieceDecoderState$base},d:['ceylon.buffer.base','b32DecodeSeventh']};};
function $init$b32DecodeSeventh$base(){
if($6y$base.$$===undefined){
m$1.initTypeProto($6y$base,'ceylon.buffer.base::b32DecodeSeventh',$init$Base32PieceDecoderState$base());
(function(b32DecodeSeventh$){
b32DecodeSeventh$.toString=function(){return this.string.valueOf();};
})($6y$base.$$.prototype);
}
return $6y$base;
}
ex$.$init$b32DecodeSeventh$base=$init$b32DecodeSeventh$base;$init$b32DecodeSeventh$base();var $70;
function b32DecodeSeventh$base(){
if($70===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'b32DecodeSeventh\' before it was set"),'47:0-47:59','base32.ceylon');
if($70===undefined){$70=m$1.INIT$;$70=$init$b32DecodeSeventh$base()();$70.$crtmm$=b32DecodeSeventh$base.$crtmm$;}
return $70;
}
b32DecodeSeventh$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$b32DecodeSeventh$base()},d:['ceylon.buffer.base','b32DecodeSeventh']};};
$prop$getB32DecodeSeventh$base=b32DecodeSeventh$base;
ex$.$prop$getB32DecodeSeventh$base=$prop$getB32DecodeSeventh$base;
function $71$base(){
var b32DecodeEighth$=new $71$base.$$;Base32PieceDecoderState$base(b32DecodeEighth$);
return b32DecodeEighth$;
};$71$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base32PieceDecoderState$base},d:['ceylon.buffer.base','b32DecodeEighth']};};
function $init$b32DecodeEighth$base(){
if($71$base.$$===undefined){
m$1.initTypeProto($71$base,'ceylon.buffer.base::b32DecodeEighth',$init$Base32PieceDecoderState$base());
(function(b32DecodeEighth$){
b32DecodeEighth$.toString=function(){return this.string.valueOf();};
})($71$base.$$.prototype);
}
return $71$base;
}
ex$.$init$b32DecodeEighth$base=$init$b32DecodeEighth$base;$init$b32DecodeEighth$base();var $73;
function b32DecodeEighth$base(){
if($73===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'b32DecodeEighth\' before it was set"),'48:0-48:58','base32.ceylon');
if($73===undefined){$73=m$1.INIT$;$73=$init$b32DecodeEighth$base()();$73.$crtmm$=b32DecodeEighth$base.$crtmm$;}
return $73;
}
b32DecodeEighth$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$b32DecodeEighth$base()},d:['ceylon.buffer.base','b32DecodeEighth']};};
$prop$getB32DecodeEighth$base=b32DecodeEighth$base;
ex$.$prop$getB32DecodeEighth$base=$prop$getB32DecodeEighth$base;
function Base32$base($d6k2li$74,$$targs$$,base32$){
$init$Base32$base();
if(base32$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.buffer.base::Base32"),'?','?')
m$1.set_type_args(base32$,$$targs$$);
base32$.$d6k2li$74_=$d6k2li$74;
IncrementalCodec$codec({FromMutable$IncrementalCodec:{t:ByteBuffer},FromSingle$IncrementalCodec:{t:m$1.Byte},ToMutable$IncrementalCodec:$$targs$$.ToMutable$Base32,FromImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ToSingle$IncrementalCodec:$$targs$$.ToSingle$Base32,ToImmutable$IncrementalCodec:$$targs$$.ToImmutable$Base32},base32$);
return base32$;
}
Base32$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'toMutableOfSize',mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:'ToMutable$Base32',Arguments$Callable:{t:'T',l:[{t:m$1.Integer}]}}}}],tp:{ToMutable$Base32:{sts:[{t:Buffer,a:{Element$Buffer:'ToSingle$Base32'}}]},ToImmutable$Base32:{sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'ToSingle$Base32'}}]},ToSingle$Base32:{sts:[{t:m$1.$_Object}]}},sts:[{t:IncrementalCodec$codec,a:{FromMutable$IncrementalCodec:{t:ByteBuffer},FromSingle$IncrementalCodec:{t:m$1.Byte},ToMutable$IncrementalCodec:'ToMutable$Base32',FromImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ToSingle$IncrementalCodec:'ToSingle$Base32',ToImmutable$IncrementalCodec:'ToImmutable$Base32'}}],pa:273,d:['ceylon.buffer.base','Base32']};};
ex$.Base32$base=Base32$base;
function $init$Base32$base(){
if(Base32$base.$$===undefined){
m$1.initTypeProto(Base32$base,'ceylon.buffer.base::Base32',m$1.Basic,$init$IncrementalCodec$codec());
(function(base32$){
m$1.atr$(base32$,'$d6k2li$74',function(){return this.$d6k2li$74_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Callable,a:{Return$Callable:'ToMutable$Base32',Arguments$Callable:{t:'T',l:[{t:m$1.Integer}]}}},$cont:Base32$base,d:['ceylon.buffer.base','Base32','$at','toMutableOfSize$ok7gzq']};});
base32$.$prop$getEncodeTable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:'ToSingle$Base32'}},$cont:Base32$base,pa:5,d:['ceylon.buffer.base','Base32','$at','encodeTable']};}};
base32$.decodeToIndex={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'input',mt:'prm',$t:'ToSingle$Base32'}],$cont:Base32$base,pa:5,d:['ceylon.buffer.base','Base32','$m','decodeToIndex']};}};base32$.$prop$getDecodeTable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:Base32$base,pa:5,d:['ceylon.buffer.base','Base32','$at','decodeTable']};}};
base32$.$prop$getPad={$crtmm$:function(){return{mod:$CCMM$,$t:'ToSingle$Base32',$cont:Base32$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.base:Base32:$at:pad')];},d:['ceylon.buffer.base','Base32','$at','pad']};}};
base32$.averageEncodeSize=function($75){var base32$=this;
return (ceiling$base($75,m$1.Float(5.0))*(8));
};
base32$.averageEncodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:Base32$base,pa:3,d:['ceylon.buffer.base','Base32','$m','averageEncodeSize']};};
base32$.maximumEncodeSize=function($76){var base32$=this;
return base32$.averageEncodeSize($76);
};
base32$.maximumEncodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:Base32$base,pa:3,d:['ceylon.buffer.base','Base32','$m','maximumEncodeSize']};};
base32$.averageDecodeSize=function($77){var base32$=this;
return ceiling$base(($77*(5)),m$1.Float(8.0));
};
base32$.averageDecodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:Base32$base,pa:3,d:['ceylon.buffer.base','Base32','$m','averageDecodeSize']};};
base32$.maximumDecodeSize=function($78){var base32$=this;
return base32$.averageDecodeSize($78);
};
base32$.maximumDecodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:Base32$base,pa:3,d:['ceylon.buffer.base','Base32','$m','maximumDecodeSize']};};
base32$.pieceEncoder=function($79){var base32$=this;
if($79===undefined){$79=base32$.pieceEncoder$defs$error($79);}
return function(){function $7a($$targs$$){
var $7a$=new $7a.$$;$7a$.outer$=base32$;
$7a$.$$targs$$=$$targs$$;
PieceConvert$codec({ToSingle$PieceConvert:base32$.$$targs$$.ToSingle$Base32,FromSingle$PieceConvert:{t:m$1.Byte}},$7a$);
$7a$.$d6k2li$7b_=base32$.$d6k2li$74(8);
$7a$.$prop$get$d6k2li$7b={$crtmm$:function(){return{mod:$CCMM$,$t:'ToMutable$Base32',$cont:$7a,d:['ceylon.buffer.base','Base32','$m','pieceEncoder','$at','output$e7u50u']};}};
$7a$.$prop$get$d6k2li$7b.get=function(){return $d6k2li$7b};
$7a$.$d6k2li$7c_=b32EncodeFirst$base();
$7a$.$prop$get$d6k2li$7c={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Base32PieceEncoderState$base},$cont:$7a,pa:1024,d:['ceylon.buffer.base','Base32','$m','pieceEncoder','$at','state$m86g3m']};}};
$7a$.$prop$get$d6k2li$7c.get=function(){return $d6k2li$7c};
$7a$.$d6k2li$7d_=null;
$7a$.$prop$get$d6k2li$7d={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Byte}]},$cont:$7a,pa:1024,d:['ceylon.buffer.base','Base32','$m','pieceEncoder','$at','remainder$30ndzi']};}};
$7a$.$prop$get$d6k2li$7d.get=function(){return $d6k2li$7d};
return $7a$;
};$7a.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:base32$.pieceEncoder,sts:[{t:PieceConvert$codec,a:{ToSingle$PieceConvert:'ToSingle$Base32',FromSingle$PieceConvert:{t:m$1.Byte}}}],d:['ceylon.buffer.base','Base32','$m','pieceEncoder']};};
function $init$$7a(){
if($7a.$$===undefined){
m$1.initTypeProto($7a,'ceylon.buffer.base::Base32.pieceEncoder.anonymous#0',m$1.Basic,$init$PieceConvert$codec());
(function($7a$){
m$1.atr$($7a$,'$d6k2li$7b',function(){return this.$d6k2li$7b_;},undefined,function(){return{mod:$CCMM$,$t:'ToMutable$Base32',$cont:$7a,d:['ceylon.buffer.base','Base32','$m','pieceEncoder','$at','output$e7u50u']};});
m$1.atr$($7a$,'$d6k2li$7c',function(){return this.$d6k2li$7c_;},function($7e){return this.$d6k2li$7c_=$7e;},function(){return{mod:$CCMM$,$t:{t:Base32PieceEncoderState$base},$cont:$7a,pa:1024,d:['ceylon.buffer.base','Base32','$m','pieceEncoder','$at','state$m86g3m']};});
m$1.atr$($7a$,'$d6k2li$7d',function(){return this.$d6k2li$7d_;},function($7f){return this.$d6k2li$7d_=$7f;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Byte}]},$cont:$7a,pa:1024,d:['ceylon.buffer.base','Base32','$m','pieceEncoder','$at','remainder$30ndzi']};});
$7a$.$d6k2li$7g=function(){
var $7a$=this;
$7a$.$d6k2li$7c=b32EncodeFirst$base();
$7a$.$d6k2li$7d=null;
};$7a$.$d6k2li$7g.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:$7a,d:['ceylon.buffer.base','Base32','$m','pieceEncoder','$m','reset$i5pix8']};};
$7a$.$d6k2li$7h=function($7i){
var $7a$=this;
m$1.asrt$((($7i.signed<(32))),"Assertion failed: "+"5 bit split is too large. Internal error.\n\tviolated byte.signed < 32\n\tat base32.ceylon (88:27-88:44)",'87:20-88:45','base32.ceylon');
m$1.asrt$((($7i.signed>=(0))),"Assertion failed: "+"5 bit split is negative. Internal error.\n\tviolated byte.signed >= 0\n\tat base32.ceylon (90:27-90:44)",'89:20-90:45','base32.ceylon');
var $7j;
m$1.asrt$((m$1.nn$(($7j=base32$.encodeTable.$_get($7i.signed)))),"Assertion failed: "+"Base32 table is invalid. Internal error.\n\tviolated exists char = encodeTable[byte.signed]\n\tat base32.ceylon (92:27-92:66)",'91:20-92:67','base32.ceylon');
return $7j;
};$7a$.$d6k2li$7h.$crtmm$=function(){return{mod:$CCMM$,$t:'ToSingle$Base32',ps:[{nm:'byte',mt:'prm',$t:{t:m$1.Byte}}],$cont:$7a,d:['ceylon.buffer.base','Base32','$m','pieceEncoder','$m','byteToChar$3cgwmy']};};
$7a$.more=function($7k){
var $7a$=this;
$7a$.$d6k2li$7b.clear();
var $7l=$7a$.$d6k2li$7c;
if($7l===b32EncodeFirst$base()) {
$7a$.$d6k2li$7d=$7k.and((7).$_byte);
$7a$.$d6k2li$7b.put($7a$.$d6k2li$7h($7k.rightLogicalShift(3)));
$7a$.$d6k2li$7c=b32EncodeSecond$base();
}
else if($7l===b32EncodeSecond$base()) {
var $7m;
m$1.asrt$((m$1.nn$(($7m=$7a$.$d6k2li$7d))),"Assertion failed: "+"\n\tviolated exists rem = remainder\n\tat base32.ceylon (108:31-108:54)",'108:24-108:55','base32.ceylon');
$7a$.$d6k2li$7d=$7k.and((1).$_byte);
$7a$.$d6k2li$7b.put(($7n=$7m.leftLogicalShift(2).or($7k.rightLogicalShift(6)),$7a$.$d6k2li$7h($7n)));
var $7n;
$7a$.$d6k2li$7b.put(($7o=$7k.rightLogicalShift(1).and((31).$_byte),$7a$.$d6k2li$7h($7o)));
var $7o;
$7a$.$d6k2li$7c=b32EncodeThird$base();
}
else if($7l===b32EncodeThird$base()) {
var $7p;
m$1.asrt$((m$1.nn$(($7p=$7a$.$d6k2li$7d))),"Assertion failed: "+"\n\tviolated exists rem = remainder\n\tat base32.ceylon (120:31-120:54)",'120:24-120:55','base32.ceylon');
$7a$.$d6k2li$7d=$7k.and((15).$_byte);
$7a$.$d6k2li$7b.put(($7q=$7p.leftLogicalShift(4).or($7k.rightLogicalShift(4)),$7a$.$d6k2li$7h($7q)));
var $7q;
$7a$.$d6k2li$7c=b32EncodeFourth$base();
}
else if($7l===b32EncodeFourth$base()) {
var $7r;
m$1.asrt$((m$1.nn$(($7r=$7a$.$d6k2li$7d))),"Assertion failed: "+"\n\tviolated exists rem = remainder\n\tat base32.ceylon (129:31-129:54)",'129:24-129:55','base32.ceylon');
$7a$.$d6k2li$7d=$7k.and((3).$_byte);
$7a$.$d6k2li$7b.put(($7s=$7r.leftLogicalShift(1).or($7k.rightLogicalShift(7)),$7a$.$d6k2li$7h($7s)));
var $7s;
$7a$.$d6k2li$7b.put(($7t=$7k.rightLogicalShift(2).and((31).$_byte),$7a$.$d6k2li$7h($7t)));
var $7t;
$7a$.$d6k2li$7c=b32EncodeFifth$base();
}
else if($7l===b32EncodeFifth$base()) {
var $7u;
m$1.asrt$((m$1.nn$(($7u=$7a$.$d6k2li$7d))),"Assertion failed: "+"\n\tviolated exists rem = remainder\n\tat base32.ceylon (141:31-141:54)",'141:24-141:55','base32.ceylon');
$7a$.$d6k2li$7b.put(($7v=$7u.leftLogicalShift(3).or($7k.rightLogicalShift(5)),$7a$.$d6k2li$7h($7v)));
var $7v;
$7a$.$d6k2li$7b.put(($7w=$7k.and((31).$_byte),$7a$.$d6k2li$7h($7w)));
var $7w;
$7a$.$d6k2li$7g();
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
$7a$.$d6k2li$7b.flip();
return $7a$.$d6k2li$7b;
};$7a$.more.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'ToSingle$Base32'}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Byte}}],$cont:$7a,pa:3,d:['ceylon.buffer.base','Base32','$m','pieceEncoder','$m','more']};};
$7a$.done=function(){
var $7a$=this;
$7a$.$d6k2li$7b.clear();
var $7x=$7a$.$d6k2li$7c;
if($7x===b32EncodeFirst$base()) {
}
else if($7x===b32EncodeSecond$base()) {
var $7y;
m$1.asrt$((m$1.nn$(($7y=$7a$.$d6k2li$7d))),"Assertion failed: "+"\n\tviolated exists rem = remainder\n\tat base32.ceylon (162:31-162:54)",'162:24-162:55','base32.ceylon');
$7a$.$d6k2li$7b.put($7a$.$d6k2li$7h($7y.leftLogicalShift(2)));
$7a$.$d6k2li$7b.put(base32$.pad);
$7a$.$d6k2li$7b.put(base32$.pad);
$7a$.$d6k2li$7b.put(base32$.pad);
$7a$.$d6k2li$7b.put(base32$.pad);
$7a$.$d6k2li$7b.put(base32$.pad);
$7a$.$d6k2li$7b.put(base32$.pad);
}
else if($7x===b32EncodeThird$base()) {
var $7z;
m$1.asrt$((m$1.nn$(($7z=$7a$.$d6k2li$7d))),"Assertion failed: "+"\n\tviolated exists rem = remainder\n\tat base32.ceylon (173:31-173:54)",'173:24-173:55','base32.ceylon');
$7a$.$d6k2li$7b.put($7a$.$d6k2li$7h($7z.leftLogicalShift(4)));
$7a$.$d6k2li$7b.put(base32$.pad);
$7a$.$d6k2li$7b.put(base32$.pad);
$7a$.$d6k2li$7b.put(base32$.pad);
$7a$.$d6k2li$7b.put(base32$.pad);
}
else if($7x===b32EncodeFourth$base()) {
var $80;
m$1.asrt$((m$1.nn$(($80=$7a$.$d6k2li$7d))),"Assertion failed: "+"\n\tviolated exists rem = remainder\n\tat base32.ceylon (182:31-182:54)",'182:24-182:55','base32.ceylon');
$7a$.$d6k2li$7b.put($7a$.$d6k2li$7h($80.leftLogicalShift(1)));
$7a$.$d6k2li$7b.put(base32$.pad);
$7a$.$d6k2li$7b.put(base32$.pad);
$7a$.$d6k2li$7b.put(base32$.pad);
}
else if($7x===b32EncodeFifth$base()) {
var $81;
m$1.asrt$((m$1.nn$(($81=$7a$.$d6k2li$7d))),"Assertion failed: "+"\n\tviolated exists rem = remainder\n\tat base32.ceylon (189:31-189:54)",'189:24-189:55','base32.ceylon');
$7a$.$d6k2li$7b.put($7a$.$d6k2li$7h($81.leftLogicalShift(3)));
$7a$.$d6k2li$7b.put(base32$.pad);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
$7a$.$d6k2li$7g();
$7a$.$d6k2li$7b.flip();
return $7a$.$d6k2li$7b;
};$7a$.done.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'ToSingle$Base32'}},ps:[],$cont:$7a,pa:3,d:['ceylon.buffer.base','Base32','$m','pieceEncoder','$m','done']};};
$7a$.toString=function(){return this.string.valueOf();};
})($7a.$$.prototype);
}
return $7a;
}
base32$.$init$$7a=$init$$7a;$init$$7a();return $7a();}();
};
base32$.pieceEncoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:'ToSingle$Base32',FromSingle$PieceConvert:{t:m$1.Byte}}},ps:[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:Base32$base,pa:3,d:['ceylon.buffer.base','Base32','$m','pieceEncoder']};};
base32$.pieceDecoder=function($83){var base32$=this;
if($83===undefined){$83=base32$.pieceDecoder$defs$error($83);}
return function(){function $84($$targs$$){
var $84$=new $84.$$;$84$.outer$=base32$;
$84$.$$targs$$=$$targs$$;
PieceConvert$codec({ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:base32$.$$targs$$.ToSingle$Base32},$84$);
$84$.$d6k2li$85_=ByteBuffer$c_ofSize(1);
$84$.$prop$get$d6k2li$85={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ByteBuffer},$cont:$84,d:['ceylon.buffer.base','Base32','$m','pieceDecoder','$at','output$vh8n8f']};}};
$84$.$prop$get$d6k2li$85.get=function(){return $d6k2li$85};
$84$.$d6k2li$86_=b32DecodeFirst$base();
$84$.$prop$get$d6k2li$86={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Base32PieceDecoderState$base},$cont:$84,pa:1024,d:['ceylon.buffer.base','Base32','$m','pieceDecoder','$at','state$4yrxw1']};}};
$84$.$prop$get$d6k2li$86.get=function(){return $d6k2li$86};
$84$.$d6k2li$87_=false;
$84$.$prop$get$d6k2li$87={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:$84,pa:1024,d:['ceylon.buffer.base','Base32','$m','pieceDecoder','$at','padSeen$gmthz0']};}};
$84$.$prop$get$d6k2li$87.get=function(){return $d6k2li$87};
$84$.$d6k2li$88_=null;
$84$.$prop$get$d6k2li$88={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Byte}]},$cont:$84,pa:1024,d:['ceylon.buffer.base','Base32','$m','pieceDecoder','$at','remainder$e8r483']};}};
$84$.$prop$get$d6k2li$88.get=function(){return $d6k2li$88};
return $84$;
};$84.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:base32$.pieceDecoder,sts:[{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:'ToSingle$Base32'}}],d:['ceylon.buffer.base','Base32','$m','pieceDecoder']};};
function $init$$84(){
if($84.$$===undefined){
m$1.initTypeProto($84,'ceylon.buffer.base::Base32.pieceDecoder.anonymous#1',m$1.Basic,$init$PieceConvert$codec());
(function($84$){
m$1.atr$($84$,'$d6k2li$85',function(){return this.$d6k2li$85_;},undefined,function(){return{mod:$CCMM$,$t:{t:ByteBuffer},$cont:$84,d:['ceylon.buffer.base','Base32','$m','pieceDecoder','$at','output$vh8n8f']};});
m$1.atr$($84$,'$d6k2li$86',function(){return this.$d6k2li$86_;},function($89){return this.$d6k2li$86_=$89;},function(){return{mod:$CCMM$,$t:{t:Base32PieceDecoderState$base},$cont:$84,pa:1024,d:['ceylon.buffer.base','Base32','$m','pieceDecoder','$at','state$4yrxw1']};});
m$1.atr$($84$,'$d6k2li$87',function(){return this.$d6k2li$87_;},function($8a){return this.$d6k2li$87_=$8a;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:$84,pa:1024,d:['ceylon.buffer.base','Base32','$m','pieceDecoder','$at','padSeen$gmthz0']};});
m$1.atr$($84$,'$d6k2li$88',function(){return this.$d6k2li$88_;},function($8b){return this.$d6k2li$88_=$8b;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Byte}]},$cont:$84,pa:1024,d:['ceylon.buffer.base','Base32','$m','pieceDecoder','$at','remainder$e8r483']};});
$84$.$d6k2li$8c=function(){
var $84$=this;
$84$.$d6k2li$86=b32DecodeFirst$base();
$84$.$d6k2li$87=false;
$84$.$d6k2li$88=null;
};$84$.$d6k2li$8c.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:$84,d:['ceylon.buffer.base','Base32','$m','pieceDecoder','$m','reset$zf414t']};};
$84$.more=function($8d){
var $84$=this;
$84$.$d6k2li$85.clear();
function $8e($8f,$8g,$8h){
if($8h===undefined){$8h=null;}
if(m$1.$eq$($8d,base32$.pad)){
var $8i;
if(m$1.nn$(($8i=$8h))){
$84$.$d6k2li$87=true;
var $8j;
if(m$1.nn$(($8j=$84$.$d6k2li$88))&&!m$1.$eq$($8j,(0).$_byte)){
$8i();
}
}
else{
var $8k=$83;
if($8k===strict$codec()) {
throw m$1.wrapexc(($8l="Pad element "+($8d.string)+" is not allowed here",DecodeException$codec($8l,undefined)),'229:36-231:37','ceylon/buffer/base/base32.ceylon');
var $8l;
}
else if($8k===ignore$codec()) {
}
else if($8k===reset$codec()) {
$84$.$d6k2li$8c();
$8f=$84$.$d6k2li$86;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
}
else{
if($84$.$d6k2li$87){
var $8m=$83;
if($8m===strict$codec()) {
throw m$1.wrapexc(($8n="Non-pad character "+($8d.string)+" is not allowed here",DecodeException$codec($8n,undefined)),'243:32-245:33','ceylon/buffer/base/base32.ceylon');
var $8n;
}
else if($8m===ignore$codec()) {
}
else if($8m===reset$codec()) {
$84$.$d6k2li$8c();
$8f=$84$.$d6k2li$86;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
else{
var $8o=base32$.decodeToIndex($8d);
var $8p;
if(m$1.nn$(($8p=base32$.decodeTable.$_get($8o)))&&!m$1.$eq$($8p,(255).$_byte)){
$8g($8p);
}
else{
var $8q=$83;
if($8q===strict$codec()) {
throw m$1.wrapexc(DecodeException$codec($8d.string+" is not a base32 character"),'260:36-260:96','ceylon/buffer/base/base32.ceylon');
}
else if($8q===ignore$codec()) {
}
else if($8q===reset$codec()) {
$84$.$d6k2li$8c();
$8f=$84$.$d6k2li$86;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
}
}
$84$.$d6k2li$86=$8f;
};$8e.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'nextState',mt:'prm',$t:{t:Base32PieceDecoderState$base}},{nm:'handleInputByte',mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{t:m$1.Byte}]}}}},{nm:'handlePad',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}}]}}],$cont:$84$.more,d:['ceylon.buffer.base','Base32','$m','pieceDecoder','$m','more','$m','handleState$f3xe90']};};
var $8r=$84$.$d6k2li$86;
if($8r===b32DecodeFirst$base()) {
($8s=b32DecodeSecond$base(),$8t=m$1.jsc$2((function($8u){return ($84$.$d6k2li$88=$8u);
}),[{nm:'b',mt:'prm',$t:{t:m$1.Byte}}],{Return$Callable:{t:m$1.Byte},Arguments$Callable:m$1.mtt$([{t:m$1.Byte}])}),$8e($8s,$8t,undefined));
var $8s,$8t;
}
else if($8r===b32DecodeSecond$base()) {
var $8v=(function(){var $8w;
m$1.asrt$((m$1.nn$(($8w=$84$.$d6k2li$88))),"Assertion failed: "+"\n\tviolated exists rem = remainder\n\tat base32.ceylon (282:31-282:54)",'282:24-282:55','base32.ceylon');
($8x=b32DecodeThird$base(),$8y=m$1.jsc$2((function($8z){
$84$.$d6k2li$88=$8z.and((3).$_byte);
($90=$8w.leftLogicalShift(3).or($8z.rightLogicalShift(2)),($91=$84$.$d6k2li$85,m$1.jsc$3($91,$91.put))($90));
var $90,$91;
}),[{nm:'b',mt:'prm',$t:{t:m$1.Byte}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([{t:m$1.Byte}])}),$92=m$1.jsc$2((function(){
$84$.$d6k2li$88=(0).$_byte;
$84$.$d6k2li$85.put($8w.leftLogicalShift(3));
}),[],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}),$8e($8x,$8y,$92));
var $8x,$8y,$92;
}());if($8v!==undefined){return $8v;}
}
else if($8r===b32DecodeThird$base()) {
var $93=(function(){var $94;
m$1.asrt$((m$1.nn$(($94=$84$.$d6k2li$88))),"Assertion failed: "+"\n\tviolated exists rem = remainder\n\tat base32.ceylon (300:31-300:54)",'300:24-300:55','base32.ceylon');
($95=b32DecodeFourth$base(),$96=m$1.jsc$2((function($97){
$84$.$d6k2li$88=$94.leftLogicalShift(5).or($97);
}),[{nm:'b',mt:'prm',$t:{t:m$1.Byte}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([{t:m$1.Byte}])}),$98=m$1.jsc$2((function(){
$84$.$d6k2li$88=(0).$_byte;
$84$.$d6k2li$85.put($94.leftLogicalShift(6));
}),[],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}),$8e($95,$96,$98));
var $95,$96,$98;
}());if($93!==undefined){return $93;}
}
else if($8r===b32DecodeFourth$base()) {
var $99=(function(){var $9a;
m$1.asrt$((m$1.nn$(($9a=$84$.$d6k2li$88))),"Assertion failed: "+"\n\tviolated exists rem = remainder\n\tat base32.ceylon (315:31-315:54)",'315:24-315:55','base32.ceylon');
($9b=b32DecodeFifth$base(),$9c=m$1.jsc$2((function($9d){
$84$.$d6k2li$88=$9d.and((15).$_byte);
($9e=$9a.leftLogicalShift(1).or($9d.rightLogicalShift(4)),($9f=$84$.$d6k2li$85,m$1.jsc$3($9f,$9f.put))($9e));
var $9e,$9f;
}),[{nm:'b',mt:'prm',$t:{t:m$1.Byte}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([{t:m$1.Byte}])}),$9g=m$1.jsc$2((function(){
$84$.$d6k2li$88=(0).$_byte;
$84$.$d6k2li$85.put($9a.leftLogicalShift(1));
}),[],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}),$8e($9b,$9c,$9g));
var $9b,$9c,$9g;
}());if($99!==undefined){return $99;}
}
else if($8r===b32DecodeFifth$base()) {
var $9h=(function(){var $9i;
m$1.asrt$((m$1.nn$(($9i=$84$.$d6k2li$88))),"Assertion failed: "+"\n\tviolated exists rem = remainder\n\tat base32.ceylon (333:31-333:54)",'333:24-333:55','base32.ceylon');
($9j=b32DecodeSixth$base(),$9k=m$1.jsc$2((function($9l){
$84$.$d6k2li$88=$9l.and((1).$_byte);
($9m=$9i.leftLogicalShift(4).or($9l.rightLogicalShift(1)),($9n=$84$.$d6k2li$85,m$1.jsc$3($9n,$9n.put))($9m));
var $9m,$9n;
}),[{nm:'b',mt:'prm',$t:{t:m$1.Byte}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([{t:m$1.Byte}])}),$9o=m$1.jsc$2((function(){
$84$.$d6k2li$88=(0).$_byte;
$84$.$d6k2li$85.put($9i.leftLogicalShift(4));
}),[],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}),$8e($9j,$9k,$9o));
var $9j,$9k,$9o;
}());if($9h!==undefined){return $9h;}
}
else if($8r===b32DecodeSixth$base()) {
var $9p=(function(){var $9q;
m$1.asrt$((m$1.nn$(($9q=$84$.$d6k2li$88))),"Assertion failed: "+"\n\tviolated exists rem = remainder\n\tat base32.ceylon (351:31-351:54)",'351:24-351:55','base32.ceylon');
($9r=b32DecodeSeventh$base(),$9s=m$1.jsc$2((function($9t){
$84$.$d6k2li$88=$9q.leftLogicalShift(5).or($9t);
}),[{nm:'b',mt:'prm',$t:{t:m$1.Byte}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([{t:m$1.Byte}])}),$9u=m$1.jsc$2((function(){
$84$.$d6k2li$88=(0).$_byte;
$84$.$d6k2li$85.put($9q.leftLogicalShift(7));
}),[],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}),$8e($9r,$9s,$9u));
var $9r,$9s,$9u;
}());if($9p!==undefined){return $9p;}
}
else if($8r===b32DecodeSeventh$base()) {
var $9v=(function(){var $9w;
m$1.asrt$((m$1.nn$(($9w=$84$.$d6k2li$88))),"Assertion failed: "+"\n\tviolated exists rem = remainder\n\tat base32.ceylon (366:31-366:54)",'366:24-366:55','base32.ceylon');
($9x=b32DecodeEighth$base(),$9y=m$1.jsc$2((function($9z){
$84$.$d6k2li$88=$9z.and((7).$_byte);
($a0=$9w.leftLogicalShift(2).or($9z.rightLogicalShift(3)),($a1=$84$.$d6k2li$85,m$1.jsc$3($a1,$a1.put))($a0));
var $a0,$a1;
}),[{nm:'b',mt:'prm',$t:{t:m$1.Byte}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([{t:m$1.Byte}])}),$a2=m$1.jsc$2((function(){
$84$.$d6k2li$88=(0).$_byte;
$84$.$d6k2li$85.put($9w.leftLogicalShift(2));
}),[],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}),$8e($9x,$9y,$a2));
var $9x,$9y,$a2;
}());if($9v!==undefined){return $9v;}
}
else if($8r===b32DecodeEighth$base()) {
var $a3=(function(){var $a4;
m$1.asrt$((m$1.nn$(($a4=$84$.$d6k2li$88))),"Assertion failed: "+"\n\tviolated exists rem = remainder\n\tat base32.ceylon (384:31-384:54)",'384:24-384:55','base32.ceylon');
($a5=b32DecodeFirst$base(),$a6=m$1.jsc$2((function($a7){
$84$.$d6k2li$88=(0).$_byte;
($a8=$a4.leftLogicalShift(5).or($a7),($a9=$84$.$d6k2li$85,m$1.jsc$3($a9,$a9.put))($a8));
var $a8,$a9;
}),[{nm:'b',mt:'prm',$t:{t:m$1.Byte}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([{t:m$1.Byte}])}),$aa=m$1.jsc$2((function(){
$84$.$d6k2li$88=(0).$_byte;
$84$.$d6k2li$85.put($a4.leftLogicalShift(5));
}),[],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}),$8e($a5,$a6,$aa));
var $a5,$a6,$aa;
$84$.$d6k2li$8c();
}());if($a3!==undefined){return $a3;}
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
$84$.$d6k2li$85.flip();
return $84$.$d6k2li$85;
};$84$.more.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}},ps:[{nm:'input',mt:'prm',$t:'ToSingle$Base32'}],$cont:$84,pa:3,d:['ceylon.buffer.base','Base32','$m','pieceDecoder','$m','more']};};
$84$.done=function(){
var $84$=this;
$84$.$d6k2li$85.clear();
if(!$84$.$d6k2li$87){
var $ab=$84$.$d6k2li$86;
if($ab===b32DecodeFirst$base()) {
}
else if($ab===b32DecodeSecond$base()) {
var $ac;
if(m$1.nn$(($ac=$84$.$d6k2li$88))&&!m$1.$eq$($ac,(0).$_byte)){
$84$.$d6k2li$85.put($ac.leftLogicalShift(3));
}
}
else if($ab===b32DecodeThird$base()) {
var $ad;
if(m$1.nn$(($ad=$84$.$d6k2li$88))&&!m$1.$eq$($ad,(0).$_byte)){
$84$.$d6k2li$85.put($ad.leftLogicalShift(6));
}
}
else if($ab===b32DecodeFourth$base()) {
var $ae;
if(m$1.nn$(($ae=$84$.$d6k2li$88))&&!m$1.$eq$($ae,(0).$_byte)){
$84$.$d6k2li$85.put($ae.leftLogicalShift(1));
}
}
else if($ab===b32DecodeFifth$base()) {
var $af;
if(m$1.nn$(($af=$84$.$d6k2li$88))&&!m$1.$eq$($af,(0).$_byte)){
$84$.$d6k2li$85.put($af.leftLogicalShift(4));
}
}
else if($ab===b32DecodeSixth$base()) {
var $ag;
if(m$1.nn$(($ag=$84$.$d6k2li$88))&&!m$1.$eq$($ag,(0).$_byte)){
$84$.$d6k2li$85.put($ag.leftLogicalShift(7));
}
}
else if($ab===b32DecodeSeventh$base()) {
var $ah;
if(m$1.nn$(($ah=$84$.$d6k2li$88))&&!m$1.$eq$($ah,(0).$_byte)){
$84$.$d6k2li$85.put($ah.leftLogicalShift(2));
}
}
else if($ab===b32DecodeEighth$base()) {
var $ai;
if(m$1.nn$(($ai=$84$.$d6k2li$88))&&!m$1.$eq$($ai,(0).$_byte)){
$84$.$d6k2li$85.put($ai.leftLogicalShift(5));
}
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
$84$.$d6k2li$8c();
$84$.$d6k2li$85.flip();
return $84$.$d6k2li$85;
};$84$.done.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}},ps:[],$cont:$84,pa:3,d:['ceylon.buffer.base','Base32','$m','pieceDecoder','$m','done']};};
$84$.toString=function(){return this.string.valueOf();};
})($84.$$.prototype);
}
return $84;
}
base32$.$init$$84=$init$$84;$init$$84();return $84();}();
};
base32$.pieceDecoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:'ToSingle$Base32'}},ps:[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:Base32$base,pa:3,d:['ceylon.buffer.base','Base32','$m','pieceDecoder']};};
base32$.decodeBid=function($ak){
var base32$=this;
if($ak.$_every(m$1.jsc$2((function($al){return (m$1.$eq$($al,base32$.pad)||m$1.$cnt$(base32$.encodeTable,$al));
}),[{nm:'s',mt:'prm',$t:base32$.$$targs$$.ToSingle$Base32}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([base32$.$$targs$$.ToSingle$Base32])}))){
return 50;
}
else{
return 0;
}
};base32$.decodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'ToSingle$Base32'}}}],$cont:Base32$base,pa:3,d:['ceylon.buffer.base','Base32','$m','decodeBid']};};
base32$.toString=function(){return this.string.valueOf();};
})(Base32$base.$$.prototype);
}
return Base32$base;
}
ex$.$init$Base32$base=$init$Base32$base;$init$Base32$base();
function Base32String$base(base32String$){
$init$Base32String$base();
if(base32String$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.buffer.base::Base32String"),'?','?')
CharacterToByteCodec$codec(base32String$);
Base32$base(m$1.jsc$2(CharacterBuffer$c_ofSize,[{nm:'_0',mt:'prm',$t:{t:CharacterBuffer}}],{}),{ToMutable$Base32:{t:CharacterBuffer},ToImmutable$Base32:{t:m$1.$_String},ToSingle$Base32:{t:m$1.Character}},base32String$);
base32String$.$d6k2li$am_=m$1.Character(61,true);
return base32String$;
}
Base32String$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base32$base,a:{ToSingle$Base32:{t:m$1.Character},ToImmutable$Base32:{t:m$1.$_String},ToMutable$Base32:{t:CharacterBuffer}}},ps:[],sts:[{t:CharacterToByteCodec$codec}],pa:257,d:['ceylon.buffer.base','Base32String']};};
ex$.Base32String$base=Base32String$base;
function $init$Base32String$base(){
if(Base32String$base.$$===undefined){
m$1.initTypeProto(Base32String$base,'ceylon.buffer.base::Base32String',$init$Base32$base(),$init$CharacterToByteCodec$codec());
(function(base32String$){
m$1.atr$(base32String$,'pad',function(){return this.$d6k2li$am_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Character},$cont:Base32String$base,pa:3,d:['ceylon.buffer.base','Base32String','$at','pad']};});
base32String$.toString=function(){return this.string.valueOf();};
})(Base32String$base.$$.prototype);
}
return Base32String$base;
}
ex$.$init$Base32String$base=$init$Base32String$base;$init$Base32String$base();
function Base32Byte$base(base32Byte$){
$init$Base32Byte$base();
if(base32Byte$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.buffer.base::Base32Byte"),'?','?')
ByteToByteCodec$codec(base32Byte$);
Base32$base(m$1.jsc$2(ByteBuffer$c_ofSize,[{nm:'_0',mt:'prm',$t:{t:ByteBuffer}}],{}),{ToMutable$Base32:{t:ByteBuffer},ToImmutable$Base32:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ToSingle$Base32:{t:m$1.Byte}},base32Byte$);
base32Byte$.$d6k2li$an_=m$1.Character(61,true).integer.$_byte;
return base32Byte$;
}
Base32Byte$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base32$base,a:{ToSingle$Base32:{t:m$1.Byte},ToImmutable$Base32:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ToMutable$Base32:{t:ByteBuffer}}},ps:[],sts:[{t:ByteToByteCodec$codec}],pa:257,d:['ceylon.buffer.base','Base32Byte']};};
ex$.Base32Byte$base=Base32Byte$base;
function $init$Base32Byte$base(){
if(Base32Byte$base.$$===undefined){
m$1.initTypeProto(Base32Byte$base,'ceylon.buffer.base::Base32Byte',$init$Base32$base(),$init$ByteToByteCodec$codec());
(function(base32Byte$){
m$1.atr$(base32Byte$,'pad',function(){return this.$d6k2li$an_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Byte},$cont:Base32Byte$base,pa:3,d:['ceylon.buffer.base','Base32Byte','$at','pad']};});
base32Byte$.toString=function(){return this.string.valueOf();};
})(Base32Byte$base.$$.prototype);
}
return Base32Byte$base;
}
ex$.$init$Base32Byte$base=$init$Base32Byte$base;$init$Base32Byte$base();
var $ao$base;function $valinit$$ao$base(){if($ao$base===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'standardBase32CharTable\' before it was set"),'477:0-481:1','base32.ceylon');
if($ao$base===undefined){$ao$base=m$1.INIT$;$ao$base=m$1.tpl$([m$1.Character(65,true),m$1.Character(66,true),m$1.Character(67,true),m$1.Character(68,true),m$1.Character(69,true),m$1.Character(70,true),m$1.Character(71,true),m$1.Character(72,true),m$1.Character(73,true),m$1.Character(74,true),m$1.Character(75,true),m$1.Character(76,true),m$1.Character(77,true),m$1.Character(78,true),m$1.Character(79,true),m$1.Character(80,true),m$1.Character(81,true),m$1.Character(82,true),m$1.Character(83,true),m$1.Character(84,true),m$1.Character(85,true),m$1.Character(86,true),m$1.Character(87,true),m$1.Character(88,true),m$1.Character(89,true),m$1.Character(90,true),m$1.Character(50,true),m$1.Character(51,true),m$1.Character(52,true),m$1.Character(53,true),m$1.Character(54,true),m$1.Character(55,true)])};return $ao$base;};
function standardBase32CharTable$base(){return $valinit$$ao$base();}
var $prop$getStandardBase32CharTable$base={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Character}}},d:['ceylon.buffer.base','standardBase32CharTable']};}};
ex$.$prop$getStandardBase32CharTable$base=$prop$getStandardBase32CharTable$base;
$prop$getStandardBase32CharTable$base.get=standardBase32CharTable$base;
function $ap$base(){
var base32StringStandard$=new $ap$base.$$;Base32String$base(base32StringStandard$);
base32StringStandard$.$d6k2li$ar_=standardBase32CharTable$base();
base32StringStandard$.$prop$getEncodeTable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Character}}},$cont:$ap$base,pa:3,d:['ceylon.buffer.base','base32StringStandard','$at','encodeTable']};}};
base32StringStandard$.$prop$getEncodeTable.get=function(){return encodeTable};
base32StringStandard$.$d6k2li$as_=toDecodeTable$base(base32StringStandard$.encodeTable,m$1.jsc$2(m$1.jsc$3(base32StringStandard$,base32StringStandard$.decodeToIndex),[{nm:'input',mt:'prm',$t:{t:m$1.Character}}],{}),undefined,undefined,{ToSingle$toDecodeTable:{t:m$1.Character}});
base32StringStandard$.$prop$getDecodeTable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$ap$base,pa:3,d:['ceylon.buffer.base','base32StringStandard','$at','decodeTable']};}};
base32StringStandard$.$prop$getDecodeTable.get=function(){return decodeTable};
base32StringStandard$.$d6k2li$at_=m$1.tpl$(["base32","base-32","base_32"]);
base32StringStandard$.$prop$getAliases={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$ap$base,pa:3,d:['ceylon.buffer.base','base32StringStandard','$at','aliases']};}};
base32StringStandard$.$prop$getAliases.get=function(){return aliases};
return base32StringStandard$;
};$ap$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base32String$base},d:['ceylon.buffer.base','base32StringStandard']};};
function $init$base32StringStandard$base(){
if($ap$base.$$===undefined){
m$1.initTypeProto($ap$base,'ceylon.buffer.base::base32StringStandard',$init$Base32String$base());
(function(base32StringStandard$){
m$1.atr$(base32StringStandard$,'encodeTable',function(){return this.$d6k2li$ar_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Character}}},$cont:$ap$base,pa:3,d:['ceylon.buffer.base','base32StringStandard','$at','encodeTable']};});
base32StringStandard$.decodeToIndex=function($au){var base32StringStandard$=this;
return $au.integer;
};
base32StringStandard$.decodeToIndex.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Character}}],$cont:$ap$base,pa:3,d:['ceylon.buffer.base','base32StringStandard','$m','decodeToIndex']};};
m$1.atr$(base32StringStandard$,'decodeTable',function(){return this.$d6k2li$as_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$ap$base,pa:3,d:['ceylon.buffer.base','base32StringStandard','$at','decodeTable']};});
m$1.atr$(base32StringStandard$,'aliases',function(){return this.$d6k2li$at_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$ap$base,pa:3,d:['ceylon.buffer.base','base32StringStandard','$at','aliases']};});
base32StringStandard$.encodeBid=function($av){return 10};
base32StringStandard$.encodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}}],$cont:$ap$base,pa:3,d:['ceylon.buffer.base','base32StringStandard','$m','encodeBid']};};
base32StringStandard$.toString=function(){return this.string.valueOf();};
})($ap$base.$$.prototype);
}
return $ap$base;
}
ex$.$init$base32StringStandard$base=$init$base32StringStandard$base;$init$base32StringStandard$base();var $aw;
function base32StringStandard$base(){
if($aw===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'base32StringStandard\' before it was set"),'482:0-488:0','base32.ceylon');
if($aw===undefined){$aw=m$1.INIT$;$aw=$init$base32StringStandard$base()();$aw.$crtmm$=base32StringStandard$base.$crtmm$;}
return $aw;
}
ex$.base32StringStandard$base=base32StringStandard$base;
base32StringStandard$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$base32StringStandard$base()},pa:1,d:['ceylon.buffer.base','base32StringStandard']};};
$prop$getBase32StringStandard$base=base32StringStandard$base;
ex$.$prop$getBase32StringStandard$base=$prop$getBase32StringStandard$base;
var $ax$base;function $valinit$$ax$base(){if($ax$base===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'standardBase32ByteTable\' before it was set"),'489:0-489:82','base32.ceylon');
if($ax$base===undefined){$ax$base=m$1.INIT$;$ax$base=standardBase32CharTable$base().collect(function(e){return e.integer;},{Result$collect:{t:m$1.Integer}}).collect(function(e){return e.$_byte;},{Result$collect:{t:m$1.Byte}}).sequence()};return $ax$base;};
function standardBase32ByteTable$base(){return $valinit$$ax$base();}
var $prop$getStandardBase32ByteTable$base={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},d:['ceylon.buffer.base','standardBase32ByteTable']};}};
ex$.$prop$getStandardBase32ByteTable$base=$prop$getStandardBase32ByteTable$base;
$prop$getStandardBase32ByteTable$base.get=standardBase32ByteTable$base;
function $ay$base(){
var base32ByteStandard$=new $ay$base.$$;Base32Byte$base(base32ByteStandard$);
base32ByteStandard$.$d6k2li$b0_=standardBase32ByteTable$base();
base32ByteStandard$.$prop$getEncodeTable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$ay$base,pa:3,d:['ceylon.buffer.base','base32ByteStandard','$at','encodeTable']};}};
base32ByteStandard$.$prop$getEncodeTable.get=function(){return encodeTable};
base32ByteStandard$.$d6k2li$b1_=toDecodeTable$base(base32ByteStandard$.encodeTable,m$1.jsc$2(m$1.jsc$3(base32ByteStandard$,base32ByteStandard$.decodeToIndex),[{nm:'input',mt:'prm',$t:{t:m$1.Byte}}],{}),undefined,undefined,{ToSingle$toDecodeTable:{t:m$1.Byte}});
base32ByteStandard$.$prop$getDecodeTable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$ay$base,pa:3,d:['ceylon.buffer.base','base32ByteStandard','$at','decodeTable']};}};
base32ByteStandard$.$prop$getDecodeTable.get=function(){return decodeTable};
base32ByteStandard$.$d6k2li$b2_=m$1.tpl$(["base32","base-32","base-32"]);
base32ByteStandard$.$prop$getAliases={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$ay$base,pa:3,d:['ceylon.buffer.base','base32ByteStandard','$at','aliases']};}};
base32ByteStandard$.$prop$getAliases.get=function(){return aliases};
return base32ByteStandard$;
};$ay$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base32Byte$base},d:['ceylon.buffer.base','base32ByteStandard']};};
function $init$base32ByteStandard$base(){
if($ay$base.$$===undefined){
m$1.initTypeProto($ay$base,'ceylon.buffer.base::base32ByteStandard',$init$Base32Byte$base());
(function(base32ByteStandard$){
m$1.atr$(base32ByteStandard$,'encodeTable',function(){return this.$d6k2li$b0_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$ay$base,pa:3,d:['ceylon.buffer.base','base32ByteStandard','$at','encodeTable']};});
base32ByteStandard$.decodeToIndex=function($b3){var base32ByteStandard$=this;
return $b3.unsigned;
};
base32ByteStandard$.decodeToIndex.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Byte}}],$cont:$ay$base,pa:3,d:['ceylon.buffer.base','base32ByteStandard','$m','decodeToIndex']};};
m$1.atr$(base32ByteStandard$,'decodeTable',function(){return this.$d6k2li$b1_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$ay$base,pa:3,d:['ceylon.buffer.base','base32ByteStandard','$at','decodeTable']};});
m$1.atr$(base32ByteStandard$,'aliases',function(){return this.$d6k2li$b2_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$ay$base,pa:3,d:['ceylon.buffer.base','base32ByteStandard','$at','aliases']};});
base32ByteStandard$.encodeBid=function($b4){return 10};
base32ByteStandard$.encodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}}],$cont:$ay$base,pa:3,d:['ceylon.buffer.base','base32ByteStandard','$m','encodeBid']};};
base32ByteStandard$.toString=function(){return this.string.valueOf();};
})($ay$base.$$.prototype);
}
return $ay$base;
}
ex$.$init$base32ByteStandard$base=$init$base32ByteStandard$base;$init$base32ByteStandard$base();var $b5;
function base32ByteStandard$base(){
if($b5===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'base32ByteStandard\' before it was set"),'490:0-496:0','base32.ceylon');
if($b5===undefined){$b5=m$1.INIT$;$b5=$init$base32ByteStandard$base()();$b5.$crtmm$=base32ByteStandard$base.$crtmm$;}
return $b5;
}
ex$.base32ByteStandard$base=base32ByteStandard$base;
base32ByteStandard$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$base32ByteStandard$base()},pa:1,d:['ceylon.buffer.base','base32ByteStandard']};};
$prop$getBase32ByteStandard$base=base32ByteStandard$base;
ex$.$prop$getBase32ByteStandard$base=$prop$getBase32ByteStandard$base;
var $b6$base;function $valinit$$b6$base(){if($b6$base===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'hexBase32CharTable\' before it was set"),'498:0-502:1','base32.ceylon');
if($b6$base===undefined){$b6$base=m$1.INIT$;$b6$base=m$1.tpl$([m$1.Character(48,true),m$1.Character(49,true),m$1.Character(50,true),m$1.Character(51,true),m$1.Character(52,true),m$1.Character(53,true),m$1.Character(54,true),m$1.Character(55,true),m$1.Character(56,true),m$1.Character(57,true),m$1.Character(65,true),m$1.Character(66,true),m$1.Character(67,true),m$1.Character(68,true),m$1.Character(69,true),m$1.Character(70,true),m$1.Character(71,true),m$1.Character(72,true),m$1.Character(73,true),m$1.Character(74,true),m$1.Character(75,true),m$1.Character(76,true),m$1.Character(77,true),m$1.Character(78,true),m$1.Character(79,true),m$1.Character(80,true),m$1.Character(81,true),m$1.Character(82,true),m$1.Character(83,true),m$1.Character(84,true),m$1.Character(85,true),m$1.Character(86,true)])};return $b6$base;};
function hexBase32CharTable$base(){return $valinit$$b6$base();}
var $prop$getHexBase32CharTable$base={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Character}}},d:['ceylon.buffer.base','hexBase32CharTable']};}};
ex$.$prop$getHexBase32CharTable$base=$prop$getHexBase32CharTable$base;
$prop$getHexBase32CharTable$base.get=hexBase32CharTable$base;
function $b7$base(){
var base32StringHex$=new $b7$base.$$;Base32String$base(base32StringHex$);
base32StringHex$.$d6k2li$b9_=hexBase32CharTable$base();
base32StringHex$.$prop$getEncodeTable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Character}}},$cont:$b7$base,pa:3,d:['ceylon.buffer.base','base32StringHex','$at','encodeTable']};}};
base32StringHex$.$prop$getEncodeTable.get=function(){return encodeTable};
base32StringHex$.$d6k2li$ba_=toDecodeTable$base(base32StringHex$.encodeTable,m$1.jsc$2(m$1.jsc$3(base32StringHex$,base32StringHex$.decodeToIndex),[{nm:'input',mt:'prm',$t:{t:m$1.Character}}],{}),undefined,undefined,{ToSingle$toDecodeTable:{t:m$1.Character}});
base32StringHex$.$prop$getDecodeTable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$b7$base,pa:3,d:['ceylon.buffer.base','base32StringHex','$at','decodeTable']};}};
base32StringHex$.$prop$getDecodeTable.get=function(){return decodeTable};
base32StringHex$.$d6k2li$bb_=m$1.tpl$(["base32hex","base-32-hex","base_32_hex"]);
base32StringHex$.$prop$getAliases={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$b7$base,pa:3,d:['ceylon.buffer.base','base32StringHex','$at','aliases']};}};
base32StringHex$.$prop$getAliases.get=function(){return aliases};
return base32StringHex$;
};$b7$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base32String$base},d:['ceylon.buffer.base','base32StringHex']};};
function $init$base32StringHex$base(){
if($b7$base.$$===undefined){
m$1.initTypeProto($b7$base,'ceylon.buffer.base::base32StringHex',$init$Base32String$base());
(function(base32StringHex$){
m$1.atr$(base32StringHex$,'encodeTable',function(){return this.$d6k2li$b9_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Character}}},$cont:$b7$base,pa:3,d:['ceylon.buffer.base','base32StringHex','$at','encodeTable']};});
base32StringHex$.decodeToIndex=function($bc){var base32StringHex$=this;
return $bc.integer;
};
base32StringHex$.decodeToIndex.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Character}}],$cont:$b7$base,pa:3,d:['ceylon.buffer.base','base32StringHex','$m','decodeToIndex']};};
m$1.atr$(base32StringHex$,'decodeTable',function(){return this.$d6k2li$ba_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$b7$base,pa:3,d:['ceylon.buffer.base','base32StringHex','$at','decodeTable']};});
m$1.atr$(base32StringHex$,'aliases',function(){return this.$d6k2li$bb_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$b7$base,pa:3,d:['ceylon.buffer.base','base32StringHex','$at','aliases']};});
base32StringHex$.encodeBid=function($bd){return 10};
base32StringHex$.encodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}}],$cont:$b7$base,pa:3,d:['ceylon.buffer.base','base32StringHex','$m','encodeBid']};};
base32StringHex$.toString=function(){return this.string.valueOf();};
})($b7$base.$$.prototype);
}
return $b7$base;
}
ex$.$init$base32StringHex$base=$init$base32StringHex$base;$init$base32StringHex$base();var $be;
function base32StringHex$base(){
if($be===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'base32StringHex\' before it was set"),'503:0-509:0','base32.ceylon');
if($be===undefined){$be=m$1.INIT$;$be=$init$base32StringHex$base()();$be.$crtmm$=base32StringHex$base.$crtmm$;}
return $be;
}
ex$.base32StringHex$base=base32StringHex$base;
base32StringHex$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$base32StringHex$base()},pa:1,d:['ceylon.buffer.base','base32StringHex']};};
$prop$getBase32StringHex$base=base32StringHex$base;
ex$.$prop$getBase32StringHex$base=$prop$getBase32StringHex$base;
var $bf$base;function $valinit$$bf$base(){if($bf$base===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'hexBase32ByteTable\' before it was set"),'510:0-510:72','base32.ceylon');
if($bf$base===undefined){$bf$base=m$1.INIT$;$bf$base=hexBase32CharTable$base().collect(function(e){return e.integer;},{Result$collect:{t:m$1.Integer}}).collect(function(e){return e.$_byte;},{Result$collect:{t:m$1.Byte}}).sequence()};return $bf$base;};
function hexBase32ByteTable$base(){return $valinit$$bf$base();}
var $prop$getHexBase32ByteTable$base={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},d:['ceylon.buffer.base','hexBase32ByteTable']};}};
ex$.$prop$getHexBase32ByteTable$base=$prop$getHexBase32ByteTable$base;
$prop$getHexBase32ByteTable$base.get=hexBase32ByteTable$base;
function $bg$base(){
var base32ByteHex$=new $bg$base.$$;Base32Byte$base(base32ByteHex$);
base32ByteHex$.$d6k2li$bi_=hexBase32ByteTable$base();
base32ByteHex$.$prop$getEncodeTable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$bg$base,pa:3,d:['ceylon.buffer.base','base32ByteHex','$at','encodeTable']};}};
base32ByteHex$.$prop$getEncodeTable.get=function(){return encodeTable};
base32ByteHex$.$d6k2li$bj_=toDecodeTable$base(base32ByteHex$.encodeTable,m$1.jsc$2(m$1.jsc$3(base32ByteHex$,base32ByteHex$.decodeToIndex),[{nm:'input',mt:'prm',$t:{t:m$1.Byte}}],{}),undefined,undefined,{ToSingle$toDecodeTable:{t:m$1.Byte}});
base32ByteHex$.$prop$getDecodeTable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$bg$base,pa:3,d:['ceylon.buffer.base','base32ByteHex','$at','decodeTable']};}};
base32ByteHex$.$prop$getDecodeTable.get=function(){return decodeTable};
base32ByteHex$.$d6k2li$bk_=m$1.tpl$(["base32hex","base-32-hex","base_32_hex"]);
base32ByteHex$.$prop$getAliases={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$bg$base,pa:3,d:['ceylon.buffer.base','base32ByteHex','$at','aliases']};}};
base32ByteHex$.$prop$getAliases.get=function(){return aliases};
return base32ByteHex$;
};$bg$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base32Byte$base},d:['ceylon.buffer.base','base32ByteHex']};};
function $init$base32ByteHex$base(){
if($bg$base.$$===undefined){
m$1.initTypeProto($bg$base,'ceylon.buffer.base::base32ByteHex',$init$Base32Byte$base());
(function(base32ByteHex$){
m$1.atr$(base32ByteHex$,'encodeTable',function(){return this.$d6k2li$bi_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$bg$base,pa:3,d:['ceylon.buffer.base','base32ByteHex','$at','encodeTable']};});
base32ByteHex$.decodeToIndex=function($bl){var base32ByteHex$=this;
return $bl.unsigned;
};
base32ByteHex$.decodeToIndex.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Byte}}],$cont:$bg$base,pa:3,d:['ceylon.buffer.base','base32ByteHex','$m','decodeToIndex']};};
m$1.atr$(base32ByteHex$,'decodeTable',function(){return this.$d6k2li$bj_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$bg$base,pa:3,d:['ceylon.buffer.base','base32ByteHex','$at','decodeTable']};});
m$1.atr$(base32ByteHex$,'aliases',function(){return this.$d6k2li$bk_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$bg$base,pa:3,d:['ceylon.buffer.base','base32ByteHex','$at','aliases']};});
base32ByteHex$.encodeBid=function($bm){return 10};
base32ByteHex$.encodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}}],$cont:$bg$base,pa:3,d:['ceylon.buffer.base','base32ByteHex','$m','encodeBid']};};
base32ByteHex$.toString=function(){return this.string.valueOf();};
})($bg$base.$$.prototype);
}
return $bg$base;
}
ex$.$init$base32ByteHex$base=$init$base32ByteHex$base;$init$base32ByteHex$base();var $bn;
function base32ByteHex$base(){
if($bn===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'base32ByteHex\' before it was set"),'511:0-517:0','base32.ceylon');
if($bn===undefined){$bn=m$1.INIT$;$bn=$init$base32ByteHex$base()();$bn.$crtmm$=base32ByteHex$base.$crtmm$;}
return $bn;
}
ex$.base32ByteHex$base=base32ByteHex$base;
base32ByteHex$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$base32ByteHex$base()},pa:1,d:['ceylon.buffer.base','base32ByteHex']};};
$prop$getBase32ByteHex$base=base32ByteHex$base;
ex$.$prop$getBase32ByteHex$base=$prop$getBase32ByteHex$base;
function Base64PieceEncoderState$base(base64PieceEncoderState$){
$init$Base64PieceEncoderState$base();
if(base64PieceEncoderState$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.buffer.base::Base64PieceEncoderState"),'?','?')
return base64PieceEncoderState$;
}
Base64PieceEncoderState$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getB64EncodeFirst$base,$prop$getB64EncodeSecond$base,$prop$getB64EncodeThird$base],pa:256,d:['ceylon.buffer.base','Base64PieceEncoderState']};};
ex$.Base64PieceEncoderState$base=Base64PieceEncoderState$base;
function $init$Base64PieceEncoderState$base(){
if(Base64PieceEncoderState$base.$$===undefined){
m$1.initTypeProto(Base64PieceEncoderState$base,'ceylon.buffer.base::Base64PieceEncoderState',m$1.Basic);
(function(base64PieceEncoderState$){
base64PieceEncoderState$.toString=function(){return this.string.valueOf();};
})(Base64PieceEncoderState$base.$$.prototype);
}
return Base64PieceEncoderState$base;
}
ex$.$init$Base64PieceEncoderState$base=$init$Base64PieceEncoderState$base;$init$Base64PieceEncoderState$base();
function $bo$base(){
var b64EncodeFirst$=new $bo$base.$$;Base64PieceEncoderState$base(b64EncodeFirst$);
return b64EncodeFirst$;
};$bo$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base64PieceEncoderState$base},d:['ceylon.buffer.base','b64EncodeFirst']};};
function $init$b64EncodeFirst$base(){
if($bo$base.$$===undefined){
m$1.initTypeProto($bo$base,'ceylon.buffer.base::b64EncodeFirst',$init$Base64PieceEncoderState$base());
(function(b64EncodeFirst$){
b64EncodeFirst$.toString=function(){return this.string.valueOf();};
})($bo$base.$$.prototype);
}
return $bo$base;
}
ex$.$init$b64EncodeFirst$base=$init$b64EncodeFirst$base;$init$b64EncodeFirst$base();var $bq;
function b64EncodeFirst$base(){
if($bq===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'b64EncodeFirst\' before it was set"),'23:0-23:57','base64.ceylon');
if($bq===undefined){$bq=m$1.INIT$;$bq=$init$b64EncodeFirst$base()();$bq.$crtmm$=b64EncodeFirst$base.$crtmm$;}
return $bq;
}
b64EncodeFirst$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$b64EncodeFirst$base()},d:['ceylon.buffer.base','b64EncodeFirst']};};
$prop$getB64EncodeFirst$base=b64EncodeFirst$base;
ex$.$prop$getB64EncodeFirst$base=$prop$getB64EncodeFirst$base;
function $br$base(){
var b64EncodeSecond$=new $br$base.$$;Base64PieceEncoderState$base(b64EncodeSecond$);
return b64EncodeSecond$;
};$br$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base64PieceEncoderState$base},d:['ceylon.buffer.base','b64EncodeSecond']};};
function $init$b64EncodeSecond$base(){
if($br$base.$$===undefined){
m$1.initTypeProto($br$base,'ceylon.buffer.base::b64EncodeSecond',$init$Base64PieceEncoderState$base());
(function(b64EncodeSecond$){
b64EncodeSecond$.toString=function(){return this.string.valueOf();};
})($br$base.$$.prototype);
}
return $br$base;
}
ex$.$init$b64EncodeSecond$base=$init$b64EncodeSecond$base;$init$b64EncodeSecond$base();var $bt;
function b64EncodeSecond$base(){
if($bt===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'b64EncodeSecond\' before it was set"),'24:0-24:58','base64.ceylon');
if($bt===undefined){$bt=m$1.INIT$;$bt=$init$b64EncodeSecond$base()();$bt.$crtmm$=b64EncodeSecond$base.$crtmm$;}
return $bt;
}
b64EncodeSecond$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$b64EncodeSecond$base()},d:['ceylon.buffer.base','b64EncodeSecond']};};
$prop$getB64EncodeSecond$base=b64EncodeSecond$base;
ex$.$prop$getB64EncodeSecond$base=$prop$getB64EncodeSecond$base;
function $bu$base(){
var b64EncodeThird$=new $bu$base.$$;Base64PieceEncoderState$base(b64EncodeThird$);
return b64EncodeThird$;
};$bu$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base64PieceEncoderState$base},d:['ceylon.buffer.base','b64EncodeThird']};};
function $init$b64EncodeThird$base(){
if($bu$base.$$===undefined){
m$1.initTypeProto($bu$base,'ceylon.buffer.base::b64EncodeThird',$init$Base64PieceEncoderState$base());
(function(b64EncodeThird$){
b64EncodeThird$.toString=function(){return this.string.valueOf();};
})($bu$base.$$.prototype);
}
return $bu$base;
}
ex$.$init$b64EncodeThird$base=$init$b64EncodeThird$base;$init$b64EncodeThird$base();var $bw;
function b64EncodeThird$base(){
if($bw===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'b64EncodeThird\' before it was set"),'25:0-25:57','base64.ceylon');
if($bw===undefined){$bw=m$1.INIT$;$bw=$init$b64EncodeThird$base()();$bw.$crtmm$=b64EncodeThird$base.$crtmm$;}
return $bw;
}
b64EncodeThird$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$b64EncodeThird$base()},d:['ceylon.buffer.base','b64EncodeThird']};};
$prop$getB64EncodeThird$base=b64EncodeThird$base;
ex$.$prop$getB64EncodeThird$base=$prop$getB64EncodeThird$base;
function Base64PieceDecoderState$base(base64PieceDecoderState$){
$init$Base64PieceDecoderState$base();
if(base64PieceDecoderState$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.buffer.base::Base64PieceDecoderState"),'?','?')
return base64PieceDecoderState$;
}
Base64PieceDecoderState$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getB64DecodeFirst$base,$prop$getB64DecodeSecond$base,$prop$getB64DecodeThird$base,$prop$getB64DecodeFourth$base],pa:256,d:['ceylon.buffer.base','Base64PieceDecoderState']};};
ex$.Base64PieceDecoderState$base=Base64PieceDecoderState$base;
function $init$Base64PieceDecoderState$base(){
if(Base64PieceDecoderState$base.$$===undefined){
m$1.initTypeProto(Base64PieceDecoderState$base,'ceylon.buffer.base::Base64PieceDecoderState',m$1.Basic);
(function(base64PieceDecoderState$){
base64PieceDecoderState$.toString=function(){return this.string.valueOf();};
})(Base64PieceDecoderState$base.$$.prototype);
}
return Base64PieceDecoderState$base;
}
ex$.$init$Base64PieceDecoderState$base=$init$Base64PieceDecoderState$base;$init$Base64PieceDecoderState$base();
function $bx$base(){
var b64DecodeFirst$=new $bx$base.$$;Base64PieceDecoderState$base(b64DecodeFirst$);
return b64DecodeFirst$;
};$bx$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base64PieceDecoderState$base},d:['ceylon.buffer.base','b64DecodeFirst']};};
function $init$b64DecodeFirst$base(){
if($bx$base.$$===undefined){
m$1.initTypeProto($bx$base,'ceylon.buffer.base::b64DecodeFirst',$init$Base64PieceDecoderState$base());
(function(b64DecodeFirst$){
b64DecodeFirst$.toString=function(){return this.string.valueOf();};
})($bx$base.$$.prototype);
}
return $bx$base;
}
ex$.$init$b64DecodeFirst$base=$init$b64DecodeFirst$base;$init$b64DecodeFirst$base();var $bz;
function b64DecodeFirst$base(){
if($bz===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'b64DecodeFirst\' before it was set"),'32:0-32:57','base64.ceylon');
if($bz===undefined){$bz=m$1.INIT$;$bz=$init$b64DecodeFirst$base()();$bz.$crtmm$=b64DecodeFirst$base.$crtmm$;}
return $bz;
}
b64DecodeFirst$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$b64DecodeFirst$base()},d:['ceylon.buffer.base','b64DecodeFirst']};};
$prop$getB64DecodeFirst$base=b64DecodeFirst$base;
ex$.$prop$getB64DecodeFirst$base=$prop$getB64DecodeFirst$base;
function $c0$base(){
var b64DecodeSecond$=new $c0$base.$$;Base64PieceDecoderState$base(b64DecodeSecond$);
return b64DecodeSecond$;
};$c0$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base64PieceDecoderState$base},d:['ceylon.buffer.base','b64DecodeSecond']};};
function $init$b64DecodeSecond$base(){
if($c0$base.$$===undefined){
m$1.initTypeProto($c0$base,'ceylon.buffer.base::b64DecodeSecond',$init$Base64PieceDecoderState$base());
(function(b64DecodeSecond$){
b64DecodeSecond$.toString=function(){return this.string.valueOf();};
})($c0$base.$$.prototype);
}
return $c0$base;
}
ex$.$init$b64DecodeSecond$base=$init$b64DecodeSecond$base;$init$b64DecodeSecond$base();var $c2;
function b64DecodeSecond$base(){
if($c2===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'b64DecodeSecond\' before it was set"),'33:0-33:58','base64.ceylon');
if($c2===undefined){$c2=m$1.INIT$;$c2=$init$b64DecodeSecond$base()();$c2.$crtmm$=b64DecodeSecond$base.$crtmm$;}
return $c2;
}
b64DecodeSecond$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$b64DecodeSecond$base()},d:['ceylon.buffer.base','b64DecodeSecond']};};
$prop$getB64DecodeSecond$base=b64DecodeSecond$base;
ex$.$prop$getB64DecodeSecond$base=$prop$getB64DecodeSecond$base;
function $c3$base(){
var b64DecodeThird$=new $c3$base.$$;Base64PieceDecoderState$base(b64DecodeThird$);
return b64DecodeThird$;
};$c3$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base64PieceDecoderState$base},d:['ceylon.buffer.base','b64DecodeThird']};};
function $init$b64DecodeThird$base(){
if($c3$base.$$===undefined){
m$1.initTypeProto($c3$base,'ceylon.buffer.base::b64DecodeThird',$init$Base64PieceDecoderState$base());
(function(b64DecodeThird$){
b64DecodeThird$.toString=function(){return this.string.valueOf();};
})($c3$base.$$.prototype);
}
return $c3$base;
}
ex$.$init$b64DecodeThird$base=$init$b64DecodeThird$base;$init$b64DecodeThird$base();var $c5;
function b64DecodeThird$base(){
if($c5===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'b64DecodeThird\' before it was set"),'34:0-34:57','base64.ceylon');
if($c5===undefined){$c5=m$1.INIT$;$c5=$init$b64DecodeThird$base()();$c5.$crtmm$=b64DecodeThird$base.$crtmm$;}
return $c5;
}
b64DecodeThird$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$b64DecodeThird$base()},d:['ceylon.buffer.base','b64DecodeThird']};};
$prop$getB64DecodeThird$base=b64DecodeThird$base;
ex$.$prop$getB64DecodeThird$base=$prop$getB64DecodeThird$base;
function $c6$base(){
var b64DecodeFourth$=new $c6$base.$$;Base64PieceDecoderState$base(b64DecodeFourth$);
return b64DecodeFourth$;
};$c6$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base64PieceDecoderState$base},d:['ceylon.buffer.base','b64DecodeFourth']};};
function $init$b64DecodeFourth$base(){
if($c6$base.$$===undefined){
m$1.initTypeProto($c6$base,'ceylon.buffer.base::b64DecodeFourth',$init$Base64PieceDecoderState$base());
(function(b64DecodeFourth$){
b64DecodeFourth$.toString=function(){return this.string.valueOf();};
})($c6$base.$$.prototype);
}
return $c6$base;
}
ex$.$init$b64DecodeFourth$base=$init$b64DecodeFourth$base;$init$b64DecodeFourth$base();var $c8;
function b64DecodeFourth$base(){
if($c8===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'b64DecodeFourth\' before it was set"),'35:0-35:58','base64.ceylon');
if($c8===undefined){$c8=m$1.INIT$;$c8=$init$b64DecodeFourth$base()();$c8.$crtmm$=b64DecodeFourth$base.$crtmm$;}
return $c8;
}
b64DecodeFourth$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$b64DecodeFourth$base()},d:['ceylon.buffer.base','b64DecodeFourth']};};
$prop$getB64DecodeFourth$base=b64DecodeFourth$base;
ex$.$prop$getB64DecodeFourth$base=$prop$getB64DecodeFourth$base;
function Base64$base($d6k2li$c9,$$targs$$,base64$){
$init$Base64$base();
if(base64$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.buffer.base::Base64"),'?','?')
m$1.set_type_args(base64$,$$targs$$);
base64$.$d6k2li$c9_=$d6k2li$c9;
IncrementalCodec$codec({FromMutable$IncrementalCodec:{t:ByteBuffer},FromSingle$IncrementalCodec:{t:m$1.Byte},ToMutable$IncrementalCodec:$$targs$$.ToMutable$Base64,FromImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ToSingle$IncrementalCodec:$$targs$$.ToSingle$Base64,ToImmutable$IncrementalCodec:$$targs$$.ToImmutable$Base64},base64$);
return base64$;
}
Base64$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'toMutableOfSize',mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:'ToMutable$Base64',Arguments$Callable:{t:'T',l:[{t:m$1.Integer}]}}}}],tp:{ToMutable$Base64:{sts:[{t:Buffer,a:{Element$Buffer:'ToSingle$Base64'}}]},ToImmutable$Base64:{sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'ToSingle$Base64'}}]},ToSingle$Base64:{sts:[{t:m$1.$_Object}]}},sts:[{t:IncrementalCodec$codec,a:{FromMutable$IncrementalCodec:{t:ByteBuffer},FromSingle$IncrementalCodec:{t:m$1.Byte},ToMutable$IncrementalCodec:'ToMutable$Base64',FromImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ToSingle$IncrementalCodec:'ToSingle$Base64',ToImmutable$IncrementalCodec:'ToImmutable$Base64'}}],pa:273,d:['ceylon.buffer.base','Base64']};};
ex$.Base64$base=Base64$base;
function $init$Base64$base(){
if(Base64$base.$$===undefined){
m$1.initTypeProto(Base64$base,'ceylon.buffer.base::Base64',m$1.Basic,$init$IncrementalCodec$codec());
(function(base64$){
m$1.atr$(base64$,'$d6k2li$c9',function(){return this.$d6k2li$c9_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Callable,a:{Return$Callable:'ToMutable$Base64',Arguments$Callable:{t:'T',l:[{t:m$1.Integer}]}}},$cont:Base64$base,d:['ceylon.buffer.base','Base64','$at','toMutableOfSize$6vodb1']};});
base64$.$prop$getEncodeTable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:'ToSingle$Base64'}},$cont:Base64$base,pa:5,d:['ceylon.buffer.base','Base64','$at','encodeTable']};}};
base64$.decodeToIndex={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'input',mt:'prm',$t:'ToSingle$Base64'}],$cont:Base64$base,pa:5,d:['ceylon.buffer.base','Base64','$m','decodeToIndex']};}};base64$.$prop$getDecodeTable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:Base64$base,pa:5,d:['ceylon.buffer.base','Base64','$at','decodeTable']};}};
base64$.$prop$getPad={$crtmm$:function(){return{mod:$CCMM$,$t:'ToSingle$Base64',$cont:Base64$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.base:Base64:$at:pad')];},d:['ceylon.buffer.base','Base64','$at','pad']};}};
base64$.averageEncodeSize=function($ca){var base64$=this;
return (ceiling$base($ca,m$1.Float(3.0))*(4));
};
base64$.averageEncodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:Base64$base,pa:3,d:['ceylon.buffer.base','Base64','$m','averageEncodeSize']};};
base64$.maximumEncodeSize=function($cb){var base64$=this;
return base64$.averageEncodeSize($cb);
};
base64$.maximumEncodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:Base64$base,pa:3,d:['ceylon.buffer.base','Base64','$m','maximumEncodeSize']};};
base64$.averageDecodeSize=function($cc){var base64$=this;
return ceiling$base(($cc*(3)),m$1.Float(4.0));
};
base64$.averageDecodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:Base64$base,pa:3,d:['ceylon.buffer.base','Base64','$m','averageDecodeSize']};};
base64$.maximumDecodeSize=function($cd){var base64$=this;
return base64$.averageDecodeSize($cd);
};
base64$.maximumDecodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:Base64$base,pa:3,d:['ceylon.buffer.base','Base64','$m','maximumDecodeSize']};};
base64$.pieceEncoder=function($ce){var base64$=this;
if($ce===undefined){$ce=base64$.pieceEncoder$defs$error($ce);}
return function(){function $cf($$targs$$){
var $cf$=new $cf.$$;$cf$.outer$=base64$;
$cf$.$$targs$$=$$targs$$;
PieceConvert$codec({ToSingle$PieceConvert:base64$.$$targs$$.ToSingle$Base64,FromSingle$PieceConvert:{t:m$1.Byte}},$cf$);
$cf$.$d6k2li$cg_=base64$.$d6k2li$c9(3);
$cf$.$prop$get$d6k2li$cg={$crtmm$:function(){return{mod:$CCMM$,$t:'ToMutable$Base64',$cont:$cf,d:['ceylon.buffer.base','Base64','$m','pieceEncoder','$at','output$swqs2t']};}};
$cf$.$prop$get$d6k2li$cg.get=function(){return $d6k2li$cg};
$cf$.$d6k2li$ch_=b64EncodeFirst$base();
$cf$.$prop$get$d6k2li$ch={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Base64PieceEncoderState$base},$cont:$cf,pa:1024,d:['ceylon.buffer.base','Base64','$m','pieceEncoder','$at','state$7j9t1n']};}};
$cf$.$prop$get$d6k2li$ch.get=function(){return $d6k2li$ch};
$cf$.$d6k2li$ci_=null;
$cf$.$prop$get$d6k2li$ci={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Byte}]},$cont:$cf,pa:1024,d:['ceylon.buffer.base','Base64','$m','pieceEncoder','$at','remainder$bo992h']};}};
$cf$.$prop$get$d6k2li$ci.get=function(){return $d6k2li$ci};
return $cf$;
};$cf.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:base64$.pieceEncoder,sts:[{t:PieceConvert$codec,a:{ToSingle$PieceConvert:'ToSingle$Base64',FromSingle$PieceConvert:{t:m$1.Byte}}}],d:['ceylon.buffer.base','Base64','$m','pieceEncoder']};};
function $init$$cf(){
if($cf.$$===undefined){
m$1.initTypeProto($cf,'ceylon.buffer.base::Base64.pieceEncoder.anonymous#0',m$1.Basic,$init$PieceConvert$codec());
(function($cf$){
m$1.atr$($cf$,'$d6k2li$cg',function(){return this.$d6k2li$cg_;},undefined,function(){return{mod:$CCMM$,$t:'ToMutable$Base64',$cont:$cf,d:['ceylon.buffer.base','Base64','$m','pieceEncoder','$at','output$swqs2t']};});
m$1.atr$($cf$,'$d6k2li$ch',function(){return this.$d6k2li$ch_;},function($cj){return this.$d6k2li$ch_=$cj;},function(){return{mod:$CCMM$,$t:{t:Base64PieceEncoderState$base},$cont:$cf,pa:1024,d:['ceylon.buffer.base','Base64','$m','pieceEncoder','$at','state$7j9t1n']};});
m$1.atr$($cf$,'$d6k2li$ci',function(){return this.$d6k2li$ci_;},function($ck){return this.$d6k2li$ci_=$ck;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Byte}]},$cont:$cf,pa:1024,d:['ceylon.buffer.base','Base64','$m','pieceEncoder','$at','remainder$bo992h']};});
$cf$.$d6k2li$cl=function(){
var $cf$=this;
$cf$.$d6k2li$ch=b64EncodeFirst$base();
$cf$.$d6k2li$ci=null;
};$cf$.$d6k2li$cl.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:$cf,d:['ceylon.buffer.base','Base64','$m','pieceEncoder','$m','reset$wum5z7']};};
$cf$.$d6k2li$cm=function($cn){
var $cf$=this;
m$1.asrt$((($cn.signed<(64))),"Assertion failed: "+"6 bit split is too large. Internal error.\n\tviolated byte.signed < 64\n\tat base64.ceylon (75:27-75:44)",'74:20-75:45','base64.ceylon');
m$1.asrt$((($cn.signed>=(0))),"Assertion failed: "+"6 bit split is negative. Internal error.\n\tviolated byte.signed >= 0\n\tat base64.ceylon (77:27-77:44)",'76:20-77:45','base64.ceylon');
var $co;
m$1.asrt$((m$1.nn$(($co=base64$.encodeTable.$_get($cn.signed)))),"Assertion failed: "+"Base64 table is invalid. Internal error.\n\tviolated exists char = encodeTable[byte.signed]\n\tat base64.ceylon (79:27-79:66)",'78:20-79:67','base64.ceylon');
return $co;
};$cf$.$d6k2li$cm.$crtmm$=function(){return{mod:$CCMM$,$t:'ToSingle$Base64',ps:[{nm:'byte',mt:'prm',$t:{t:m$1.Byte}}],$cont:$cf,d:['ceylon.buffer.base','Base64','$m','pieceEncoder','$m','byteToChar$bcfqf1']};};
$cf$.more=function($cp){
var $cf$=this;
$cf$.$d6k2li$cg.clear();
var $cq=$cf$.$d6k2li$ch;
if($cq===b64EncodeFirst$base()) {
$cf$.$d6k2li$ci=$cp.and((3).$_byte);
$cf$.$d6k2li$cg.put($cf$.$d6k2li$cm($cp.rightLogicalShift(2)));
$cf$.$d6k2li$ch=b64EncodeSecond$base();
}
else if($cq===b64EncodeSecond$base()) {
var $cr;
m$1.asrt$((m$1.nn$(($cr=$cf$.$d6k2li$ci))),"Assertion failed: "+"\n\tviolated exists rem = remainder\n\tat base64.ceylon (95:31-95:54)",'95:24-95:55','base64.ceylon');
$cf$.$d6k2li$ci=$cp.and((15).$_byte);
$cf$.$d6k2li$cg.put(($cs=$cp.rightLogicalShift(4).or($cr.leftLogicalShift(4)),$cf$.$d6k2li$cm($cs)));
var $cs;
$cf$.$d6k2li$ch=b64EncodeThird$base();
}
else if($cq===b64EncodeThird$base()) {
var $ct;
m$1.asrt$((m$1.nn$(($ct=$cf$.$d6k2li$ci))),"Assertion failed: "+"\n\tviolated exists rem = remainder\n\tat base64.ceylon (104:31-104:54)",'104:24-104:55','base64.ceylon');
$cf$.$d6k2li$cg.put(($cu=$cp.rightLogicalShift(6).or($ct.leftLogicalShift(2)),$cf$.$d6k2li$cm($cu)));
var $cu;
$cf$.$d6k2li$cg.put(($cv=$cp.and((63).$_byte),$cf$.$d6k2li$cm($cv)));
var $cv;
$cf$.$d6k2li$cl();
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
$cf$.$d6k2li$cg.flip();
return $cf$.$d6k2li$cg;
};$cf$.more.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'ToSingle$Base64'}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Byte}}],$cont:$cf,pa:3,d:['ceylon.buffer.base','Base64','$m','pieceEncoder','$m','more']};};
$cf$.done=function(){
var $cf$=this;
$cf$.$d6k2li$cg.clear();
var $cw=$cf$.$d6k2li$ch;
if($cw===b64EncodeFirst$base()) {
}
else if($cw===b64EncodeSecond$base()) {
var $cx;
m$1.asrt$((m$1.nn$(($cx=$cf$.$d6k2li$ci))),"Assertion failed: "+"\n\tviolated exists rem = remainder\n\tat base64.ceylon (125:31-125:54)",'125:24-125:55','base64.ceylon');
$cf$.$d6k2li$cg.put($cf$.$d6k2li$cm($cx.leftLogicalShift(4)));
$cf$.$d6k2li$cg.put(base64$.pad);
$cf$.$d6k2li$cg.put(base64$.pad);
}
else if($cw===b64EncodeThird$base()) {
var $cy;
m$1.asrt$((m$1.nn$(($cy=$cf$.$d6k2li$ci))),"Assertion failed: "+"\n\tviolated exists rem = remainder\n\tat base64.ceylon (132:31-132:54)",'132:24-132:55','base64.ceylon');
$cf$.$d6k2li$cg.put($cf$.$d6k2li$cm($cy.leftLogicalShift(2)));
$cf$.$d6k2li$cg.put(base64$.pad);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
$cf$.$d6k2li$cl();
$cf$.$d6k2li$cg.flip();
return $cf$.$d6k2li$cg;
};$cf$.done.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'ToSingle$Base64'}},ps:[],$cont:$cf,pa:3,d:['ceylon.buffer.base','Base64','$m','pieceEncoder','$m','done']};};
$cf$.toString=function(){return this.string.valueOf();};
})($cf.$$.prototype);
}
return $cf;
}
base64$.$init$$cf=$init$$cf;$init$$cf();return $cf();}();
};
base64$.pieceEncoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:'ToSingle$Base64',FromSingle$PieceConvert:{t:m$1.Byte}}},ps:[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:Base64$base,pa:3,d:['ceylon.buffer.base','Base64','$m','pieceEncoder']};};
base64$.pieceDecoder=function($d0){var base64$=this;
if($d0===undefined){$d0=base64$.pieceDecoder$defs$error($d0);}
return function(){function $d1($$targs$$){
var $d1$=new $d1.$$;$d1$.outer$=base64$;
$d1$.$$targs$$=$$targs$$;
PieceConvert$codec({ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:base64$.$$targs$$.ToSingle$Base64},$d1$);
$d1$.$d6k2li$d2_=ByteBuffer$c_ofSize(1);
$d1$.$prop$get$d6k2li$d2={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ByteBuffer},$cont:$d1,d:['ceylon.buffer.base','Base64','$m','pieceDecoder','$at','output$ouyroq']};}};
$d1$.$prop$get$d6k2li$d2.get=function(){return $d6k2li$d2};
$d1$.$d6k2li$d3_=b64DecodeFirst$base();
$d1$.$prop$get$d6k2li$d3={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Base64PieceDecoderState$base},$cont:$d1,pa:1024,d:['ceylon.buffer.base','Base64','$m','pieceDecoder','$at','state$9q4p5y']};}};
$d1$.$prop$get$d6k2li$d3.get=function(){return $d6k2li$d3};
$d1$.$d6k2li$d4_=false;
$d1$.$prop$get$d6k2li$d4={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:$d1,pa:1024,d:['ceylon.buffer.base','Base64','$m','pieceDecoder','$at','padSeen$1xwux1']};}};
$d1$.$prop$get$d6k2li$d4.get=function(){return $d6k2li$d4};
$d1$.$d6k2li$d5_=null;
$d1$.$prop$get$d6k2li$d5={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Byte}]},$cont:$d1,pa:1024,d:['ceylon.buffer.base','Base64','$m','pieceDecoder','$at','remainder$sxnra2']};}};
$d1$.$prop$get$d6k2li$d5.get=function(){return $d6k2li$d5};
return $d1$;
};$d1.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:base64$.pieceDecoder,sts:[{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:'ToSingle$Base64'}}],d:['ceylon.buffer.base','Base64','$m','pieceDecoder']};};
function $init$$d1(){
if($d1.$$===undefined){
m$1.initTypeProto($d1,'ceylon.buffer.base::Base64.pieceDecoder.anonymous#1',m$1.Basic,$init$PieceConvert$codec());
(function($d1$){
m$1.atr$($d1$,'$d6k2li$d2',function(){return this.$d6k2li$d2_;},undefined,function(){return{mod:$CCMM$,$t:{t:ByteBuffer},$cont:$d1,d:['ceylon.buffer.base','Base64','$m','pieceDecoder','$at','output$ouyroq']};});
m$1.atr$($d1$,'$d6k2li$d3',function(){return this.$d6k2li$d3_;},function($d6){return this.$d6k2li$d3_=$d6;},function(){return{mod:$CCMM$,$t:{t:Base64PieceDecoderState$base},$cont:$d1,pa:1024,d:['ceylon.buffer.base','Base64','$m','pieceDecoder','$at','state$9q4p5y']};});
m$1.atr$($d1$,'$d6k2li$d4',function(){return this.$d6k2li$d4_;},function($d7){return this.$d6k2li$d4_=$d7;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:$d1,pa:1024,d:['ceylon.buffer.base','Base64','$m','pieceDecoder','$at','padSeen$1xwux1']};});
m$1.atr$($d1$,'$d6k2li$d5',function(){return this.$d6k2li$d5_;},function($d8){return this.$d6k2li$d5_=$d8;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Byte}]},$cont:$d1,pa:1024,d:['ceylon.buffer.base','Base64','$m','pieceDecoder','$at','remainder$sxnra2']};});
$d1$.$d6k2li$d9=function(){
var $d1$=this;
$d1$.$d6k2li$d3=b64DecodeFirst$base();
$d1$.$d6k2li$d4=false;
$d1$.$d6k2li$d5=null;
};$d1$.$d6k2li$d9.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:$d1,d:['ceylon.buffer.base','Base64','$m','pieceDecoder','$m','reset$kx3dsc']};};
$d1$.more=function($da){
var $d1$=this;
$d1$.$d6k2li$d2.clear();
function $db($dc,$dd,$de){
if($de===undefined){$de=null;}
if(m$1.$eq$($da,base64$.pad)){
var $df;
if(m$1.nn$(($df=$de))){
$d1$.$d6k2li$d4=true;
var $dg;
if(m$1.nn$(($dg=$d1$.$d6k2li$d5))&&!m$1.$eq$($dg,(0).$_byte)){
$df();
}
}
else{
var $dh=$d0;
if($dh===strict$codec()) {
throw m$1.wrapexc(($di="Pad element "+($da.string)+" is not allowed here",DecodeException$codec($di,undefined)),'171:36-173:37','ceylon/buffer/base/base64.ceylon');
var $di;
}
else if($dh===ignore$codec()) {
}
else if($dh===reset$codec()) {
$d1$.$d6k2li$d9();
$dc=$d1$.$d6k2li$d3;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
}
else{
if($d1$.$d6k2li$d4){
var $dj=$d0;
if($dj===strict$codec()) {
throw m$1.wrapexc(($dk="Non-pad character "+($da.string)+" is not allowed here",DecodeException$codec($dk,undefined)),'185:32-187:33','ceylon/buffer/base/base64.ceylon');
var $dk;
}
else if($dj===ignore$codec()) {
}
else if($dj===reset$codec()) {
$d1$.$d6k2li$d9();
$dc=$d1$.$d6k2li$d3;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
else{
var $dl=base64$.decodeToIndex($da);
var $dm;
if(m$1.nn$(($dm=base64$.decodeTable.$_get($dl)))&&!m$1.$eq$($dm,(255).$_byte)){
$dd($dm);
}
else{
var $dn=$d0;
if($dn===strict$codec()) {
throw m$1.wrapexc(DecodeException$codec($da.string+" is not a base64 character"),'202:36-202:96','ceylon/buffer/base/base64.ceylon');
}
else if($dn===ignore$codec()) {
}
else if($dn===reset$codec()) {
$d1$.$d6k2li$d9();
$dc=$d1$.$d6k2li$d3;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
}
}
$d1$.$d6k2li$d3=$dc;
};$db.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'nextState',mt:'prm',$t:{t:Base64PieceDecoderState$base}},{nm:'handleInputByte',mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{t:m$1.Byte}]}}}},{nm:'handlePad',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}}]}}],$cont:$d1$.more,d:['ceylon.buffer.base','Base64','$m','pieceDecoder','$m','more','$m','handleState$yg5a77']};};
var $do=$d1$.$d6k2li$d3;
if($do===b64DecodeFirst$base()) {
($dp=b64DecodeSecond$base(),$dq=m$1.jsc$2((function($dr){return ($d1$.$d6k2li$d5=$dr);
}),[{nm:'b',mt:'prm',$t:{t:m$1.Byte}}],{Return$Callable:{t:m$1.Byte},Arguments$Callable:m$1.mtt$([{t:m$1.Byte}])}),$db($dp,$dq,undefined));
var $dp,$dq;
}
else if($do===b64DecodeSecond$base()) {
var $ds=(function(){var $dt;
m$1.asrt$((m$1.nn$(($dt=$d1$.$d6k2li$d5))),"Assertion failed: "+"\n\tviolated exists rem = remainder\n\tat base64.ceylon (224:31-224:54)",'224:24-224:55','base64.ceylon');
($du=b64DecodeThird$base(),$dv=m$1.jsc$2((function($dw){
$d1$.$d6k2li$d5=$dw.and((15).$_byte);
($dx=$dt.leftLogicalShift(2).or($dw.rightLogicalShift(4)),($dy=$d1$.$d6k2li$d2,m$1.jsc$3($dy,$dy.put))($dx));
var $dx,$dy;
}),[{nm:'b',mt:'prm',$t:{t:m$1.Byte}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([{t:m$1.Byte}])}),$dz=m$1.jsc$2((function(){
$d1$.$d6k2li$d5=(0).$_byte;
$d1$.$d6k2li$d2.put($dt.leftLogicalShift(2));
}),[],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}),$db($du,$dv,$dz));
var $du,$dv,$dz;
}());if($ds!==undefined){return $ds;}
}
else if($do===b64DecodeThird$base()) {
var $e0=(function(){var $e1;
m$1.asrt$((m$1.nn$(($e1=$d1$.$d6k2li$d5))),"Assertion failed: "+"\n\tviolated exists rem = remainder\n\tat base64.ceylon (242:31-242:54)",'242:24-242:55','base64.ceylon');
($e2=b64DecodeFourth$base(),$e3=m$1.jsc$2((function($e4){
$d1$.$d6k2li$d5=$e4.and((3).$_byte);
($e5=$e1.leftLogicalShift(4).or($e4.rightLogicalShift(2)),($e6=$d1$.$d6k2li$d2,m$1.jsc$3($e6,$e6.put))($e5));
var $e5,$e6;
}),[{nm:'b',mt:'prm',$t:{t:m$1.Byte}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([{t:m$1.Byte}])}),$e7=m$1.jsc$2((function(){
$d1$.$d6k2li$d5=(0).$_byte;
$d1$.$d6k2li$d2.put($e1.leftLogicalShift(4));
}),[],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}),$db($e2,$e3,$e7));
var $e2,$e3,$e7;
}());if($e0!==undefined){return $e0;}
}
else if($do===b64DecodeFourth$base()) {
var $e8=(function(){var $e9;
m$1.asrt$((m$1.nn$(($e9=$d1$.$d6k2li$d5))),"Assertion failed: "+"\n\tviolated exists rem = remainder\n\tat base64.ceylon (260:31-260:54)",'260:24-260:55','base64.ceylon');
($ea=b64DecodeFirst$base(),$eb=m$1.jsc$2((function($ec){
$d1$.$d6k2li$d5=(0).$_byte;
($ed=$e9.leftLogicalShift(6).or($ec),($ee=$d1$.$d6k2li$d2,m$1.jsc$3($ee,$ee.put))($ed));
var $ed,$ee;
}),[{nm:'b',mt:'prm',$t:{t:m$1.Byte}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([{t:m$1.Byte}])}),$ef=m$1.jsc$2((function(){
$d1$.$d6k2li$d5=(0).$_byte;
$d1$.$d6k2li$d2.put($e9.leftLogicalShift(6));
}),[],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}),$db($ea,$eb,$ef));
var $ea,$eb,$ef;
$d1$.$d6k2li$d9();
}());if($e8!==undefined){return $e8;}
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
$d1$.$d6k2li$d2.flip();
return $d1$.$d6k2li$d2;
};$d1$.more.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}},ps:[{nm:'input',mt:'prm',$t:'ToSingle$Base64'}],$cont:$d1,pa:3,d:['ceylon.buffer.base','Base64','$m','pieceDecoder','$m','more']};};
$d1$.done=function(){
var $d1$=this;
$d1$.$d6k2li$d2.clear();
if(!$d1$.$d6k2li$d4){
var $eg=$d1$.$d6k2li$d3;
if($eg===b64DecodeFirst$base()) {
}
else if($eg===b64DecodeSecond$base()) {
var $eh;
if(m$1.nn$(($eh=$d1$.$d6k2li$d5))&&!m$1.$eq$($eh,(0).$_byte)){
$d1$.$d6k2li$d2.put($eh.leftLogicalShift(2));
}
}
else if($eg===b64DecodeThird$base()) {
var $ei;
if(m$1.nn$(($ei=$d1$.$d6k2li$d5))&&!m$1.$eq$($ei,(0).$_byte)){
$d1$.$d6k2li$d2.put($ei.leftLogicalShift(4));
}
}
else if($eg===b64DecodeFourth$base()) {
var $ej;
if(m$1.nn$(($ej=$d1$.$d6k2li$d5))&&!m$1.$eq$($ej,(0).$_byte)){
$d1$.$d6k2li$d2.put($ej.leftLogicalShift(6));
}
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
$d1$.$d6k2li$d9();
$d1$.$d6k2li$d2.flip();
return $d1$.$d6k2li$d2;
};$d1$.done.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}},ps:[],$cont:$d1,pa:3,d:['ceylon.buffer.base','Base64','$m','pieceDecoder','$m','done']};};
$d1$.toString=function(){return this.string.valueOf();};
})($d1.$$.prototype);
}
return $d1;
}
base64$.$init$$d1=$init$$d1;$init$$d1();return $d1();}();
};
base64$.pieceDecoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:'ToSingle$Base64'}},ps:[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:Base64$base,pa:3,d:['ceylon.buffer.base','Base64','$m','pieceDecoder']};};
base64$.decodeBid=function($el){
var base64$=this;
if($el.$_every(m$1.jsc$2((function($em){return (m$1.$eq$($em,base64$.pad)||m$1.$cnt$(base64$.encodeTable,$em));
}),[{nm:'s',mt:'prm',$t:base64$.$$targs$$.ToSingle$Base64}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([base64$.$$targs$$.ToSingle$Base64])}))){
return 100;
}
else{
return 0;
}
};base64$.decodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'ToSingle$Base64'}}}],$cont:Base64$base,pa:3,d:['ceylon.buffer.base','Base64','$m','decodeBid']};};
base64$.toString=function(){return this.string.valueOf();};
})(Base64$base.$$.prototype);
}
return Base64$base;
}
ex$.$init$Base64$base=$init$Base64$base;$init$Base64$base();
function Base64String$base(base64String$){
$init$Base64String$base();
if(base64String$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.buffer.base::Base64String"),'?','?')
CharacterToByteCodec$codec(base64String$);
Base64$base(m$1.jsc$2(CharacterBuffer$c_ofSize,[{nm:'_0',mt:'prm',$t:{t:CharacterBuffer}}],{}),{ToSingle$Base64:{t:m$1.Character},ToMutable$Base64:{t:CharacterBuffer},ToImmutable$Base64:{t:m$1.$_String}},base64String$);
base64String$.$d6k2li$en_=m$1.Character(61,true);
return base64String$;
}
Base64String$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base64$base,a:{ToMutable$Base64:{t:CharacterBuffer},ToImmutable$Base64:{t:m$1.$_String},ToSingle$Base64:{t:m$1.Character}}},ps:[],sts:[{t:CharacterToByteCodec$codec}],pa:257,d:['ceylon.buffer.base','Base64String']};};
ex$.Base64String$base=Base64String$base;
function $init$Base64String$base(){
if(Base64String$base.$$===undefined){
m$1.initTypeProto(Base64String$base,'ceylon.buffer.base::Base64String',$init$Base64$base(),$init$CharacterToByteCodec$codec());
(function(base64String$){
m$1.atr$(base64String$,'pad',function(){return this.$d6k2li$en_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Character},$cont:Base64String$base,pa:3,d:['ceylon.buffer.base','Base64String','$at','pad']};});
base64String$.toString=function(){return this.string.valueOf();};
})(Base64String$base.$$.prototype);
}
return Base64String$base;
}
ex$.$init$Base64String$base=$init$Base64String$base;$init$Base64String$base();
function Base64Byte$base(base64Byte$){
$init$Base64Byte$base();
if(base64Byte$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.buffer.base::Base64Byte"),'?','?')
ByteToByteCodec$codec(base64Byte$);
Base64$base(m$1.jsc$2(ByteBuffer$c_ofSize,[{nm:'_0',mt:'prm',$t:{t:ByteBuffer}}],{}),{ToSingle$Base64:{t:m$1.Byte},ToMutable$Base64:{t:ByteBuffer},ToImmutable$Base64:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}}},base64Byte$);
base64Byte$.$d6k2li$eo_=m$1.Character(61,true).integer.$_byte;
return base64Byte$;
}
Base64Byte$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base64$base,a:{ToMutable$Base64:{t:ByteBuffer},ToImmutable$Base64:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ToSingle$Base64:{t:m$1.Byte}}},ps:[],sts:[{t:ByteToByteCodec$codec}],pa:257,d:['ceylon.buffer.base','Base64Byte']};};
ex$.Base64Byte$base=Base64Byte$base;
function $init$Base64Byte$base(){
if(Base64Byte$base.$$===undefined){
m$1.initTypeProto(Base64Byte$base,'ceylon.buffer.base::Base64Byte',$init$Base64$base(),$init$ByteToByteCodec$codec());
(function(base64Byte$){
m$1.atr$(base64Byte$,'pad',function(){return this.$d6k2li$eo_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Byte},$cont:Base64Byte$base,pa:3,d:['ceylon.buffer.base','Base64Byte','$at','pad']};});
base64Byte$.toString=function(){return this.string.valueOf();};
})(Base64Byte$base.$$.prototype);
}
return Base64Byte$base;
}
ex$.$init$Base64Byte$base=$init$Base64Byte$base;$init$Base64Byte$base();
var $ep$base;function $valinit$$ep$base(){if($ep$base===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'standardBase64CharTable\' before it was set"),'333:0-339:1','base64.ceylon');
if($ep$base===undefined){$ep$base=m$1.INIT$;$ep$base=m$1.tpl$([m$1.Character(65,true),m$1.Character(66,true),m$1.Character(67,true),m$1.Character(68,true),m$1.Character(69,true),m$1.Character(70,true),m$1.Character(71,true),m$1.Character(72,true),m$1.Character(73,true),m$1.Character(74,true),m$1.Character(75,true),m$1.Character(76,true),m$1.Character(77,true),m$1.Character(78,true),m$1.Character(79,true),m$1.Character(80,true),m$1.Character(81,true),m$1.Character(82,true),m$1.Character(83,true),m$1.Character(84,true),m$1.Character(85,true),m$1.Character(86,true),m$1.Character(87,true),m$1.Character(88,true),m$1.Character(89,true),m$1.Character(90,true),m$1.Character(97,true),m$1.Character(98,true),m$1.Character(99,true),m$1.Character(100,true),m$1.Character(101,true),m$1.Character(102,true),m$1.Character(103,true),m$1.Character(104,true),m$1.Character(105,true),m$1.Character(106,true),m$1.Character(107,true),m$1.Character(108,true),m$1.Character(109,true),m$1.Character(110,true),m$1.Character(111,true),m$1.Character(112,true),m$1.Character(113,true),m$1.Character(114,true),m$1.Character(115,true),m$1.Character(116,true),m$1.Character(117,true),m$1.Character(118,true),m$1.Character(119,true),m$1.Character(120,true),m$1.Character(121,true),m$1.Character(122,true),m$1.Character(48,true),m$1.Character(49,true),m$1.Character(50,true),m$1.Character(51,true),m$1.Character(52,true),m$1.Character(53,true),m$1.Character(54,true),m$1.Character(55,true),m$1.Character(56,true),m$1.Character(57,true),m$1.Character(43,true),m$1.Character(47,true)])};return $ep$base;};
function standardBase64CharTable$base(){return $valinit$$ep$base();}
var $prop$getStandardBase64CharTable$base={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Character}}},d:['ceylon.buffer.base','standardBase64CharTable']};}};
ex$.$prop$getStandardBase64CharTable$base=$prop$getStandardBase64CharTable$base;
$prop$getStandardBase64CharTable$base.get=standardBase64CharTable$base;
function $eq$base(){
var base64StringStandard$=new $eq$base.$$;Base64String$base(base64StringStandard$);
base64StringStandard$.$d6k2li$es_=standardBase64CharTable$base();
base64StringStandard$.$prop$getEncodeTable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Character}}},$cont:$eq$base,pa:3,d:['ceylon.buffer.base','base64StringStandard','$at','encodeTable']};}};
base64StringStandard$.$prop$getEncodeTable.get=function(){return encodeTable};
base64StringStandard$.$d6k2li$et_=toDecodeTable$base(base64StringStandard$.encodeTable,m$1.jsc$2(m$1.jsc$3(base64StringStandard$,base64StringStandard$.decodeToIndex),[{nm:'input',mt:'prm',$t:{t:m$1.Character}}],{}),undefined,undefined,{ToSingle$toDecodeTable:{t:m$1.Character}});
base64StringStandard$.$prop$getDecodeTable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$eq$base,pa:3,d:['ceylon.buffer.base','base64StringStandard','$at','decodeTable']};}};
base64StringStandard$.$prop$getDecodeTable.get=function(){return decodeTable};
base64StringStandard$.$d6k2li$eu_=m$1.tpl$(["base64","base-64","base_64"]);
base64StringStandard$.$prop$getAliases={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$eq$base,pa:3,d:['ceylon.buffer.base','base64StringStandard','$at','aliases']};}};
base64StringStandard$.$prop$getAliases.get=function(){return aliases};
return base64StringStandard$;
};$eq$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base64String$base},d:['ceylon.buffer.base','base64StringStandard']};};
function $init$base64StringStandard$base(){
if($eq$base.$$===undefined){
m$1.initTypeProto($eq$base,'ceylon.buffer.base::base64StringStandard',$init$Base64String$base());
(function(base64StringStandard$){
m$1.atr$(base64StringStandard$,'encodeTable',function(){return this.$d6k2li$es_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Character}}},$cont:$eq$base,pa:3,d:['ceylon.buffer.base','base64StringStandard','$at','encodeTable']};});
base64StringStandard$.decodeToIndex=function($ev){var base64StringStandard$=this;
return $ev.integer;
};
base64StringStandard$.decodeToIndex.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Character}}],$cont:$eq$base,pa:3,d:['ceylon.buffer.base','base64StringStandard','$m','decodeToIndex']};};
m$1.atr$(base64StringStandard$,'decodeTable',function(){return this.$d6k2li$et_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$eq$base,pa:3,d:['ceylon.buffer.base','base64StringStandard','$at','decodeTable']};});
m$1.atr$(base64StringStandard$,'aliases',function(){return this.$d6k2li$eu_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$eq$base,pa:3,d:['ceylon.buffer.base','base64StringStandard','$at','aliases']};});
base64StringStandard$.encodeBid=function($ew){return 55};
base64StringStandard$.encodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}}],$cont:$eq$base,pa:3,d:['ceylon.buffer.base','base64StringStandard','$m','encodeBid']};};
base64StringStandard$.toString=function(){return this.string.valueOf();};
})($eq$base.$$.prototype);
}
return $eq$base;
}
ex$.$init$base64StringStandard$base=$init$base64StringStandard$base;$init$base64StringStandard$base();var $ex;
function base64StringStandard$base(){
if($ex===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'base64StringStandard\' before it was set"),'340:0-348:0','base64.ceylon');
if($ex===undefined){$ex=m$1.INIT$;$ex=$init$base64StringStandard$base()();$ex.$crtmm$=base64StringStandard$base.$crtmm$;}
return $ex;
}
ex$.base64StringStandard$base=base64StringStandard$base;
base64StringStandard$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$base64StringStandard$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.base:base64StringStandard')];},d:['ceylon.buffer.base','base64StringStandard']};};
$prop$getBase64StringStandard$base=base64StringStandard$base;
ex$.$prop$getBase64StringStandard$base=$prop$getBase64StringStandard$base;
var $ey$base;function $valinit$$ey$base(){if($ey$base===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'standardBase64ByteTable\' before it was set"),'349:0-349:82','base64.ceylon');
if($ey$base===undefined){$ey$base=m$1.INIT$;$ey$base=standardBase64CharTable$base().collect(function(e){return e.integer;},{Result$collect:{t:m$1.Integer}}).collect(function(e){return e.$_byte;},{Result$collect:{t:m$1.Byte}}).sequence()};return $ey$base;};
function standardBase64ByteTable$base(){return $valinit$$ey$base();}
var $prop$getStandardBase64ByteTable$base={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},d:['ceylon.buffer.base','standardBase64ByteTable']};}};
ex$.$prop$getStandardBase64ByteTable$base=$prop$getStandardBase64ByteTable$base;
$prop$getStandardBase64ByteTable$base.get=standardBase64ByteTable$base;
function $ez$base(){
var base64ByteStandard$=new $ez$base.$$;Base64Byte$base(base64ByteStandard$);
base64ByteStandard$.$d6k2li$f1_=standardBase64ByteTable$base();
base64ByteStandard$.$prop$getEncodeTable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$ez$base,pa:3,d:['ceylon.buffer.base','base64ByteStandard','$at','encodeTable']};}};
base64ByteStandard$.$prop$getEncodeTable.get=function(){return encodeTable};
base64ByteStandard$.$d6k2li$f2_=toDecodeTable$base(base64ByteStandard$.encodeTable,m$1.jsc$2(m$1.jsc$3(base64ByteStandard$,base64ByteStandard$.decodeToIndex),[{nm:'input',mt:'prm',$t:{t:m$1.Byte}}],{}),undefined,undefined,{ToSingle$toDecodeTable:{t:m$1.Byte}});
base64ByteStandard$.$prop$getDecodeTable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$ez$base,pa:3,d:['ceylon.buffer.base','base64ByteStandard','$at','decodeTable']};}};
base64ByteStandard$.$prop$getDecodeTable.get=function(){return decodeTable};
base64ByteStandard$.$d6k2li$f3_=m$1.tpl$(["base64","base-64","base_64"]);
base64ByteStandard$.$prop$getAliases={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$ez$base,pa:3,d:['ceylon.buffer.base','base64ByteStandard','$at','aliases']};}};
base64ByteStandard$.$prop$getAliases.get=function(){return aliases};
return base64ByteStandard$;
};$ez$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base64Byte$base},d:['ceylon.buffer.base','base64ByteStandard']};};
function $init$base64ByteStandard$base(){
if($ez$base.$$===undefined){
m$1.initTypeProto($ez$base,'ceylon.buffer.base::base64ByteStandard',$init$Base64Byte$base());
(function(base64ByteStandard$){
m$1.atr$(base64ByteStandard$,'encodeTable',function(){return this.$d6k2li$f1_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$ez$base,pa:3,d:['ceylon.buffer.base','base64ByteStandard','$at','encodeTable']};});
base64ByteStandard$.decodeToIndex=function($f4){var base64ByteStandard$=this;
return $f4.unsigned;
};
base64ByteStandard$.decodeToIndex.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Byte}}],$cont:$ez$base,pa:3,d:['ceylon.buffer.base','base64ByteStandard','$m','decodeToIndex']};};
m$1.atr$(base64ByteStandard$,'decodeTable',function(){return this.$d6k2li$f2_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$ez$base,pa:3,d:['ceylon.buffer.base','base64ByteStandard','$at','decodeTable']};});
m$1.atr$(base64ByteStandard$,'aliases',function(){return this.$d6k2li$f3_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$ez$base,pa:3,d:['ceylon.buffer.base','base64ByteStandard','$at','aliases']};});
base64ByteStandard$.encodeBid=function($f5){return 55};
base64ByteStandard$.encodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}}],$cont:$ez$base,pa:3,d:['ceylon.buffer.base','base64ByteStandard','$m','encodeBid']};};
base64ByteStandard$.toString=function(){return this.string.valueOf();};
})($ez$base.$$.prototype);
}
return $ez$base;
}
ex$.$init$base64ByteStandard$base=$init$base64ByteStandard$base;$init$base64ByteStandard$base();var $f6;
function base64ByteStandard$base(){
if($f6===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'base64ByteStandard\' before it was set"),'350:0-358:0','base64.ceylon');
if($f6===undefined){$f6=m$1.INIT$;$f6=$init$base64ByteStandard$base()();$f6.$crtmm$=base64ByteStandard$base.$crtmm$;}
return $f6;
}
ex$.base64ByteStandard$base=base64ByteStandard$base;
base64ByteStandard$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$base64ByteStandard$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.base:base64ByteStandard')];},d:['ceylon.buffer.base','base64ByteStandard']};};
$prop$getBase64ByteStandard$base=base64ByteStandard$base;
ex$.$prop$getBase64ByteStandard$base=$prop$getBase64ByteStandard$base;
var $f7$base;function $valinit$$f7$base(){if($f7$base===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'urlBase64CharTable\' before it was set"),'360:0-366:1','base64.ceylon');
if($f7$base===undefined){$f7$base=m$1.INIT$;$f7$base=m$1.tpl$([m$1.Character(65,true),m$1.Character(66,true),m$1.Character(67,true),m$1.Character(68,true),m$1.Character(69,true),m$1.Character(70,true),m$1.Character(71,true),m$1.Character(72,true),m$1.Character(73,true),m$1.Character(74,true),m$1.Character(75,true),m$1.Character(76,true),m$1.Character(77,true),m$1.Character(78,true),m$1.Character(79,true),m$1.Character(80,true),m$1.Character(81,true),m$1.Character(82,true),m$1.Character(83,true),m$1.Character(84,true),m$1.Character(85,true),m$1.Character(86,true),m$1.Character(87,true),m$1.Character(88,true),m$1.Character(89,true),m$1.Character(90,true),m$1.Character(97,true),m$1.Character(98,true),m$1.Character(99,true),m$1.Character(100,true),m$1.Character(101,true),m$1.Character(102,true),m$1.Character(103,true),m$1.Character(104,true),m$1.Character(105,true),m$1.Character(106,true),m$1.Character(107,true),m$1.Character(108,true),m$1.Character(109,true),m$1.Character(110,true),m$1.Character(111,true),m$1.Character(112,true),m$1.Character(113,true),m$1.Character(114,true),m$1.Character(115,true),m$1.Character(116,true),m$1.Character(117,true),m$1.Character(118,true),m$1.Character(119,true),m$1.Character(120,true),m$1.Character(121,true),m$1.Character(122,true),m$1.Character(48,true),m$1.Character(49,true),m$1.Character(50,true),m$1.Character(51,true),m$1.Character(52,true),m$1.Character(53,true),m$1.Character(54,true),m$1.Character(55,true),m$1.Character(56,true),m$1.Character(57,true),m$1.Character(45,true),m$1.Character(95,true)])};return $f7$base;};
function urlBase64CharTable$base(){return $valinit$$f7$base();}
var $prop$getUrlBase64CharTable$base={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Character}}},d:['ceylon.buffer.base','urlBase64CharTable']};}};
ex$.$prop$getUrlBase64CharTable$base=$prop$getUrlBase64CharTable$base;
$prop$getUrlBase64CharTable$base.get=urlBase64CharTable$base;
function $f8$base(){
var base64StringUrl$=new $f8$base.$$;Base64String$base(base64StringUrl$);
base64StringUrl$.$d6k2li$fa_=urlBase64CharTable$base();
base64StringUrl$.$prop$getEncodeTable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Character}}},$cont:$f8$base,pa:3,d:['ceylon.buffer.base','base64StringUrl','$at','encodeTable']};}};
base64StringUrl$.$prop$getEncodeTable.get=function(){return encodeTable};
base64StringUrl$.$d6k2li$fb_=toDecodeTable$base(base64StringUrl$.encodeTable,m$1.jsc$2(m$1.jsc$3(base64StringUrl$,base64StringUrl$.decodeToIndex),[{nm:'input',mt:'prm',$t:{t:m$1.Character}}],{}),undefined,undefined,{ToSingle$toDecodeTable:{t:m$1.Character}});
base64StringUrl$.$prop$getDecodeTable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$f8$base,pa:3,d:['ceylon.buffer.base','base64StringUrl','$at','decodeTable']};}};
base64StringUrl$.$prop$getDecodeTable.get=function(){return decodeTable};
base64StringUrl$.$d6k2li$fc_=m$1.tpl$(["base64url","base-64-url","base_64_url"]);
base64StringUrl$.$prop$getAliases={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$f8$base,pa:3,d:['ceylon.buffer.base','base64StringUrl','$at','aliases']};}};
base64StringUrl$.$prop$getAliases.get=function(){return aliases};
return base64StringUrl$;
};$f8$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base64String$base},d:['ceylon.buffer.base','base64StringUrl']};};
function $init$base64StringUrl$base(){
if($f8$base.$$===undefined){
m$1.initTypeProto($f8$base,'ceylon.buffer.base::base64StringUrl',$init$Base64String$base());
(function(base64StringUrl$){
m$1.atr$(base64StringUrl$,'encodeTable',function(){return this.$d6k2li$fa_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Character}}},$cont:$f8$base,pa:3,d:['ceylon.buffer.base','base64StringUrl','$at','encodeTable']};});
base64StringUrl$.decodeToIndex=function($fd){var base64StringUrl$=this;
return $fd.integer;
};
base64StringUrl$.decodeToIndex.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Character}}],$cont:$f8$base,pa:3,d:['ceylon.buffer.base','base64StringUrl','$m','decodeToIndex']};};
m$1.atr$(base64StringUrl$,'decodeTable',function(){return this.$d6k2li$fb_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$f8$base,pa:3,d:['ceylon.buffer.base','base64StringUrl','$at','decodeTable']};});
m$1.atr$(base64StringUrl$,'aliases',function(){return this.$d6k2li$fc_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$f8$base,pa:3,d:['ceylon.buffer.base','base64StringUrl','$at','aliases']};});
base64StringUrl$.encodeBid=function($fe){return 50};
base64StringUrl$.encodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}}],$cont:$f8$base,pa:3,d:['ceylon.buffer.base','base64StringUrl','$m','encodeBid']};};
base64StringUrl$.toString=function(){return this.string.valueOf();};
})($f8$base.$$.prototype);
}
return $f8$base;
}
ex$.$init$base64StringUrl$base=$init$base64StringUrl$base;$init$base64StringUrl$base();var $ff;
function base64StringUrl$base(){
if($ff===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'base64StringUrl\' before it was set"),'367:0-375:0','base64.ceylon');
if($ff===undefined){$ff=m$1.INIT$;$ff=$init$base64StringUrl$base()();$ff.$crtmm$=base64StringUrl$base.$crtmm$;}
return $ff;
}
ex$.base64StringUrl$base=base64StringUrl$base;
base64StringUrl$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$base64StringUrl$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.base:base64StringUrl')];},d:['ceylon.buffer.base','base64StringUrl']};};
$prop$getBase64StringUrl$base=base64StringUrl$base;
ex$.$prop$getBase64StringUrl$base=$prop$getBase64StringUrl$base;
var $fg$base;function $valinit$$fg$base(){if($fg$base===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'urlBase64ByteTable\' before it was set"),'376:0-376:72','base64.ceylon');
if($fg$base===undefined){$fg$base=m$1.INIT$;$fg$base=urlBase64CharTable$base().collect(function(e){return e.integer;},{Result$collect:{t:m$1.Integer}}).collect(function(e){return e.$_byte;},{Result$collect:{t:m$1.Byte}}).sequence()};return $fg$base;};
function urlBase64ByteTable$base(){return $valinit$$fg$base();}
var $prop$getUrlBase64ByteTable$base={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},d:['ceylon.buffer.base','urlBase64ByteTable']};}};
ex$.$prop$getUrlBase64ByteTable$base=$prop$getUrlBase64ByteTable$base;
$prop$getUrlBase64ByteTable$base.get=urlBase64ByteTable$base;
function $fh$base(){
var base64ByteUrl$=new $fh$base.$$;Base64Byte$base(base64ByteUrl$);
base64ByteUrl$.$d6k2li$fj_=urlBase64ByteTable$base();
base64ByteUrl$.$prop$getEncodeTable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$fh$base,pa:3,d:['ceylon.buffer.base','base64ByteUrl','$at','encodeTable']};}};
base64ByteUrl$.$prop$getEncodeTable.get=function(){return encodeTable};
base64ByteUrl$.$d6k2li$fk_=toDecodeTable$base(base64ByteUrl$.encodeTable,m$1.jsc$2(m$1.jsc$3(base64ByteUrl$,base64ByteUrl$.decodeToIndex),[{nm:'input',mt:'prm',$t:{t:m$1.Byte}}],{}),undefined,undefined,{ToSingle$toDecodeTable:{t:m$1.Byte}});
base64ByteUrl$.$prop$getDecodeTable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$fh$base,pa:3,d:['ceylon.buffer.base','base64ByteUrl','$at','decodeTable']};}};
base64ByteUrl$.$prop$getDecodeTable.get=function(){return decodeTable};
base64ByteUrl$.$d6k2li$fl_=m$1.tpl$(["base64url","base-64-url","base_64_url"]);
base64ByteUrl$.$prop$getAliases={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$fh$base,pa:3,d:['ceylon.buffer.base','base64ByteUrl','$at','aliases']};}};
base64ByteUrl$.$prop$getAliases.get=function(){return aliases};
return base64ByteUrl$;
};$fh$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Base64Byte$base},d:['ceylon.buffer.base','base64ByteUrl']};};
function $init$base64ByteUrl$base(){
if($fh$base.$$===undefined){
m$1.initTypeProto($fh$base,'ceylon.buffer.base::base64ByteUrl',$init$Base64Byte$base());
(function(base64ByteUrl$){
m$1.atr$(base64ByteUrl$,'encodeTable',function(){return this.$d6k2li$fj_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$fh$base,pa:3,d:['ceylon.buffer.base','base64ByteUrl','$at','encodeTable']};});
base64ByteUrl$.decodeToIndex=function($fm){var base64ByteUrl$=this;
return $fm.unsigned;
};
base64ByteUrl$.decodeToIndex.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Byte}}],$cont:$fh$base,pa:3,d:['ceylon.buffer.base','base64ByteUrl','$m','decodeToIndex']};};
m$1.atr$(base64ByteUrl$,'decodeTable',function(){return this.$d6k2li$fk_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Byte}}},$cont:$fh$base,pa:3,d:['ceylon.buffer.base','base64ByteUrl','$at','decodeTable']};});
m$1.atr$(base64ByteUrl$,'aliases',function(){return this.$d6k2li$fl_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$fh$base,pa:3,d:['ceylon.buffer.base','base64ByteUrl','$at','aliases']};});
base64ByteUrl$.encodeBid=function($fn){return 50};
base64ByteUrl$.encodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}}],$cont:$fh$base,pa:3,d:['ceylon.buffer.base','base64ByteUrl','$m','encodeBid']};};
base64ByteUrl$.toString=function(){return this.string.valueOf();};
})($fh$base.$$.prototype);
}
return $fh$base;
}
ex$.$init$base64ByteUrl$base=$init$base64ByteUrl$base;$init$base64ByteUrl$base();var $fo;
function base64ByteUrl$base(){
if($fo===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'base64ByteUrl\' before it was set"),'377:0-385:0','base64.ceylon');
if($fo===undefined){$fo=m$1.INIT$;$fo=$init$base64ByteUrl$base()();$fo.$crtmm$=base64ByteUrl$base.$crtmm$;}
return $fo;
}
ex$.base64ByteUrl$base=base64ByteUrl$base;
base64ByteUrl$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$base64ByteUrl$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.base:base64ByteUrl')];},d:['ceylon.buffer.base','base64ByteUrl']};};
$prop$getBase64ByteUrl$base=base64ByteUrl$base;
ex$.$prop$getBase64ByteUrl$base=$prop$getBase64ByteUrl$base;
var $fp$base;function $valinit$$fp$base(){if($fp$base===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'baseStringByAlias\' before it was set"),'7:0-19:1','lookup.ceylon');
if($fp$base===undefined){$fp$base=m$1.INIT$;$fp$base=($fq=m$1.sarg$(function($fr){switch($fr){case 0:return base64StringStandard$base();case 1:return base64StringUrl$base();case 2:return base16String$base();}return m$1.finished();},undefined,{}),buildCodecLookup$codec($fq,{CodecOrLower$buildCodecLookup:m$1.mut$([{t:Base64String$base},{t:Base16String$base}])}))};return $fp$base;};
function baseStringByAlias$base(){return $valinit$$fp$base();}
ex$.baseStringByAlias$base=baseStringByAlias$base;
var $prop$getBaseStringByAlias$base={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:{t:m$1.$_String},Item$Map:{t:CharacterToByteCodec$codec}}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.base:baseStringByAlias')];},d:['ceylon.buffer.base','baseStringByAlias']};}};
ex$.$prop$getBaseStringByAlias$base=$prop$getBaseStringByAlias$base;
$prop$getBaseStringByAlias$base.get=baseStringByAlias$base;
baseStringByAlias$base.$crtmm$=$prop$getBaseStringByAlias$base.$crtmm$;
var $fq;
var $fs$base;function $valinit$$fs$base(){if($fs$base===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'baseByteByAlias\' before it was set"),'21:0-33:1','lookup.ceylon');
if($fs$base===undefined){$fs$base=m$1.INIT$;$fs$base=($ft=m$1.sarg$(function($fu){switch($fu){case 0:return base64ByteStandard$base();case 1:return base64ByteUrl$base();case 2:return base16Byte$base();}return m$1.finished();},undefined,{}),buildCodecLookup$codec($ft,{CodecOrLower$buildCodecLookup:m$1.mut$([{t:Base64Byte$base},{t:Base16Byte$base}])}))};return $fs$base;};
function baseByteByAlias$base(){return $valinit$$fs$base();}
ex$.baseByteByAlias$base=baseByteByAlias$base;
var $prop$getBaseByteByAlias$base={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:{t:m$1.$_String},Item$Map:{t:ByteToByteCodec$codec}}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.base:baseByteByAlias')];},d:['ceylon.buffer.base','baseByteByAlias']};}};
ex$.$prop$getBaseByteByAlias$base=$prop$getBaseByteByAlias$base;
$prop$getBaseByteByAlias$base.get=baseByteByAlias$base;
baseByteByAlias$base.$crtmm$=$prop$getBaseByteByAlias$base.$crtmm$;
var $ft;
function Charset$charset(charset$){
ByteToCharacterCodec$codec(charset$);
}
Charset$charset.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ByteToCharacterCodec$codec}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.charset:Charset')];},d:['ceylon.buffer.charset','Charset']};};
ex$.Charset$charset=Charset$charset;
function $init$Charset$charset(){
if(Charset$charset.$$===undefined){
m$1.initTypeProtoI(Charset$charset,'ceylon.buffer.charset::Charset',$init$ByteToCharacterCodec$codec());
(function(charset$){
charset$.toString=function(){return this.string.valueOf();};
})(Charset$charset.$$.prototype);
}
return Charset$charset;
}
ex$.$init$Charset$charset=$init$Charset$charset;$init$Charset$charset();
function $fv$charset(){
var ascii$=new $fv$charset.$$;Charset$charset(ascii$);
ascii$.$d6k2li$fx_=m$1.tpl$(["US-ASCII","ANSI_X3.4-1968","iso-ir-6","ANSI_X3.4-1986","ISO_646.irv:1991","ISO646-US","ASCII","us","IBM367","cp367"]);
ascii$.$prop$getAliases={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$fv$charset,pa:3,d:['ceylon.buffer.charset','ascii','$at','aliases']};}};
ascii$.$prop$getAliases.get=function(){return aliases};
return ascii$;
};$fv$charset.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:Charset$charset}],d:['ceylon.buffer.charset','ascii']};};
function $init$ascii$charset(){
if($fv$charset.$$===undefined){
m$1.initTypeProto($fv$charset,'ceylon.buffer.charset::ascii',m$1.Basic,$init$Charset$charset());
(function(ascii$){
m$1.atr$(ascii$,'aliases',function(){return this.$d6k2li$fx_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$fv$charset,pa:3,d:['ceylon.buffer.charset','ascii','$at','aliases']};});
ascii$.averageEncodeSize=function($fy){var ascii$=this;
return $fy;
};
ascii$.averageEncodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:$fv$charset,pa:3,d:['ceylon.buffer.charset','ascii','$m','averageEncodeSize']};};
ascii$.maximumEncodeSize=function($fz){var ascii$=this;
return $fz;
};
ascii$.maximumEncodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:$fv$charset,pa:3,d:['ceylon.buffer.charset','ascii','$m','maximumEncodeSize']};};
ascii$.averageDecodeSize=function($g0){var ascii$=this;
return $g0;
};
ascii$.averageDecodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:$fv$charset,pa:3,d:['ceylon.buffer.charset','ascii','$m','averageDecodeSize']};};
ascii$.maximumDecodeSize=function($g1){var ascii$=this;
return $g1;
};
ascii$.maximumDecodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:$fv$charset,pa:3,d:['ceylon.buffer.charset','ascii','$m','maximumDecodeSize']};};
ascii$.encodeBid=function($g2){
var ascii$=this;
return ($g2.$_every(m$1.jsc$2((function($g3){return ($g3.integer<=(127));
}),[{nm:'char',mt:'prm',$t:{t:m$1.Character}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:m$1.Character}])}))?(1):(0));
};ascii$.encodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}}}],$cont:$fv$charset,pa:3,d:['ceylon.buffer.charset','ascii','$m','encodeBid']};};
ascii$.decodeBid=function($g4){
var ascii$=this;
var $g5=(1);
var $g6;
var $g8;for(var $g7=$g4.iterator();($g8=$g7.next())!==m$1.finished();){
var $g9=$g8.signed;
if(($g9<(0))){
$g6=(0);
break;
}
if((!($ga=$g9,$ga.notSmallerThan((32))&&$ga.notLargerThan((126))))){
$g5=(0);
}
}
if(m$1.finished()===$g8){
$g6=(1);
}
return ($g6+$g5);
};ascii$.decodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}}],$cont:$fv$charset,pa:3,d:['ceylon.buffer.charset','ascii','$m','decodeBid']};};
ascii$.pieceEncoder=function($gb){var ascii$=this;
if($gb===undefined){$gb=ascii$.pieceEncoder$defs$error($gb);}
return function(){function $gc($$targs$$){
var $gc$=new $gc.$$;$gc$.outer$=ascii$;
$gc$.$$targs$$=$$targs$$;
PieceConvert$codec({ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:{t:m$1.Character}},$gc$);
$gc$.$d6k2li$gd_=ByteBuffer$c_ofSize(1);
$gc$.$prop$get$d6k2li$gd={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ByteBuffer},$cont:$gc,d:['ceylon.buffer.charset','ascii','$m','pieceEncoder','$at','output$g5vt2a']};}};
$gc$.$prop$get$d6k2li$gd.get=function(){return $d6k2li$gd};
return $gc$;
};$gc.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:ascii$.pieceEncoder,sts:[{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:{t:m$1.Character}}}],d:['ceylon.buffer.charset','ascii','$m','pieceEncoder']};};
function $init$$gc(){
if($gc.$$===undefined){
m$1.initTypeProto($gc,'ceylon.buffer.charset::ascii.pieceEncoder.anonymous#1',m$1.Basic,$init$PieceConvert$codec());
(function($gc$){
m$1.atr$($gc$,'$d6k2li$gd',function(){return this.$d6k2li$gd_;},undefined,function(){return{mod:$CCMM$,$t:{t:ByteBuffer},$cont:$gc,d:['ceylon.buffer.charset','ascii','$m','pieceEncoder','$at','output$g5vt2a']};});
$gc$.more=function($ge){
var $gc$=this;
$gc$.$d6k2li$gd.clear();
var $gf=$ge.integer;
if(($gf>(127))){
if(m$1.$eq$($gb,strict$codec())){
throw m$1.wrapexc(EncodeException$codec("Invalid ASCII byte value: "+($ge.string)),'64:20-64:80','ceylon/buffer/charset/ascii.ceylon');
}
}
else{
$gc$.$d6k2li$gd.put($gf.$_byte);
}
$gc$.$d6k2li$gd.flip();
return $gc$.$d6k2li$gd;
};$gc$.more.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Character}}],$cont:$gc,pa:3,d:['ceylon.buffer.charset','ascii','$m','pieceEncoder','$m','more']};};
$gc$.toString=function(){return this.string.valueOf();};
})($gc.$$.prototype);
}
return $gc;
}
ascii$.$init$$gc=$init$$gc;$init$$gc();return $gc();}();
};
ascii$.pieceEncoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:{t:m$1.Character}}},ps:[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:$fv$charset,pa:3,d:['ceylon.buffer.charset','ascii','$m','pieceEncoder']};};
ascii$.pieceDecoder=function($gh){var ascii$=this;
if($gh===undefined){$gh=ascii$.pieceDecoder$defs$error($gh);}
return function(){function $gi($$targs$$){
var $gi$=new $gi.$$;$gi$.outer$=ascii$;
$gi$.$$targs$$=$$targs$$;
PieceConvert$codec({ToSingle$PieceConvert:{t:m$1.Character},FromSingle$PieceConvert:{t:m$1.Byte}},$gi$);
$gi$.$d6k2li$gj_=CharacterBuffer$c_ofSize(1);
$gi$.$prop$get$d6k2li$gj={$crtmm$:function(){return{mod:$CCMM$,$t:{t:CharacterBuffer},$cont:$gi,d:['ceylon.buffer.charset','ascii','$m','pieceDecoder','$at','output$xfab9v']};}};
$gi$.$prop$get$d6k2li$gj.get=function(){return $d6k2li$gj};
return $gi$;
};$gi.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:ascii$.pieceDecoder,sts:[{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Character},FromSingle$PieceConvert:{t:m$1.Byte}}}],d:['ceylon.buffer.charset','ascii','$m','pieceDecoder']};};
function $init$$gi(){
if($gi.$$===undefined){
m$1.initTypeProto($gi,'ceylon.buffer.charset::ascii.pieceDecoder.anonymous#2',m$1.Basic,$init$PieceConvert$codec());
(function($gi$){
m$1.atr$($gi$,'$d6k2li$gj',function(){return this.$d6k2li$gj_;},undefined,function(){return{mod:$CCMM$,$t:{t:CharacterBuffer},$cont:$gi,d:['ceylon.buffer.charset','ascii','$m','pieceDecoder','$at','output$xfab9v']};});
$gi$.more=function($gk){
var $gi$=this;
$gi$.$d6k2li$gj.clear();
if(($gk.signed<(0))){
if(m$1.$eq$($gh,strict$codec())){
throw m$1.wrapexc(DecodeException$codec("Invalid ASCII byte value: "+($gk.string)),'81:20-81:80','ceylon/buffer/charset/ascii.ceylon');
}
}
else{
$gi$.$d6k2li$gj.put($gk.signed.character);
}
$gi$.$d6k2li$gj.flip();
return $gi$.$d6k2li$gj;
};$gi$.more.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Byte}}],$cont:$gi,pa:3,d:['ceylon.buffer.charset','ascii','$m','pieceDecoder','$m','more']};};
$gi$.toString=function(){return this.string.valueOf();};
})($gi.$$.prototype);
}
return $gi;
}
ascii$.$init$$gi=$init$$gi;$init$$gi();return $gi();}();
};
ascii$.pieceDecoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Character},FromSingle$PieceConvert:{t:m$1.Byte}}},ps:[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:$fv$charset,pa:3,d:['ceylon.buffer.charset','ascii','$m','pieceDecoder']};};
ascii$.toString=function(){return this.string.valueOf();};
})($fv$charset.$$.prototype);
}
return $fv$charset;
}
ex$.$init$ascii$charset=$init$ascii$charset;$init$ascii$charset();var $gm;
function ascii$charset(){
if($gm===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'ascii\' before it was set"),'13:0-90:0','ascii.ceylon');
if($gm===undefined){$gm=m$1.INIT$;$gm=$init$ascii$charset()();$gm.$crtmm$=ascii$charset.$crtmm$;}
return $gm;
}
ex$.ascii$charset=ascii$charset;
ascii$charset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$ascii$charset()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.charset:ascii'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.buffer.charset','ascii']};};
$prop$getAscii$charset=ascii$charset;
ex$.$prop$getAscii$charset=$prop$getAscii$charset;
function $gn$charset(){
var iso_8859_1$=new $gn$charset.$$;Charset$charset(iso_8859_1$);
iso_8859_1$.$d6k2li$gp_=m$1.tpl$(["ISO-8859-1","ISO_8859-1:1987","iso-ir-100","ISO_8859-1","latin1","l1","IBM819","CP819","csISOLatin1","iso-8859_1","iso_8859_1","iso8859-1","iso8859_1","latin-1","latin_1"]);
iso_8859_1$.$prop$getAliases={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$gn$charset,pa:3,d:['ceylon.buffer.charset','iso_8859_1','$at','aliases']};}};
iso_8859_1$.$prop$getAliases.get=function(){return aliases};
return iso_8859_1$;
};$gn$charset.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:Charset$charset}],d:['ceylon.buffer.charset','iso_8859_1']};};
function $init$iso_8859_1$charset(){
if($gn$charset.$$===undefined){
m$1.initTypeProto($gn$charset,'ceylon.buffer.charset::iso_8859_1',m$1.Basic,$init$Charset$charset());
(function(iso_8859_1$){
m$1.atr$(iso_8859_1$,'aliases',function(){return this.$d6k2li$gp_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$gn$charset,pa:3,d:['ceylon.buffer.charset','iso_8859_1','$at','aliases']};});
iso_8859_1$.averageEncodeSize=function($gq){var iso_8859_1$=this;
return $gq;
};
iso_8859_1$.averageEncodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:$gn$charset,pa:3,d:['ceylon.buffer.charset','iso_8859_1','$m','averageEncodeSize']};};
iso_8859_1$.maximumEncodeSize=function($gr){var iso_8859_1$=this;
return $gr;
};
iso_8859_1$.maximumEncodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:$gn$charset,pa:3,d:['ceylon.buffer.charset','iso_8859_1','$m','maximumEncodeSize']};};
iso_8859_1$.averageDecodeSize=function($gs){var iso_8859_1$=this;
return $gs;
};
iso_8859_1$.averageDecodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:$gn$charset,pa:3,d:['ceylon.buffer.charset','iso_8859_1','$m','averageDecodeSize']};};
iso_8859_1$.maximumDecodeSize=function($gt){var iso_8859_1$=this;
return $gt;
};
iso_8859_1$.maximumDecodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:$gn$charset,pa:3,d:['ceylon.buffer.charset','iso_8859_1','$m','maximumDecodeSize']};};
iso_8859_1$.encodeBid=function($gu){
var iso_8859_1$=this;
return ($gu.$_every(m$1.jsc$2((function($gv){return ($gv.integer<=(255));
}),[{nm:'char',mt:'prm',$t:{t:m$1.Character}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:m$1.Character}])}))?(1):(0));
};iso_8859_1$.encodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}}}],$cont:$gn$charset,pa:3,d:['ceylon.buffer.charset','iso_8859_1','$m','encodeBid']};};
iso_8859_1$.decodeBid=function($gw){
var iso_8859_1$=this;
var $gx=(1);
var $gy;
var $h0;for(var $gz=$gw.iterator();($h0=$gz.next())!==m$1.finished();){
var $h1=$h0.signed;
if(($h1<(0))){
$gy=(0);
break;
}
if((!(($h2=$h1,$h2.notSmallerThan((32))&&$h2.notLargerThan((126)))||($h3=$h1,$h3.notSmallerThan((160))&&$h3.notLargerThan((255)))))){
$gx=(0);
}
}
if(m$1.finished()===$h0){
$gy=(1);
}
return ($gy+$gx);
};iso_8859_1$.decodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}}],$cont:$gn$charset,pa:3,d:['ceylon.buffer.charset','iso_8859_1','$m','decodeBid']};};
iso_8859_1$.pieceEncoder=function($h4){var iso_8859_1$=this;
if($h4===undefined){$h4=iso_8859_1$.pieceEncoder$defs$error($h4);}
return function(){function $h5($$targs$$){
var $h5$=new $h5.$$;$h5$.outer$=iso_8859_1$;
$h5$.$$targs$$=$$targs$$;
PieceConvert$codec({ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:{t:m$1.Character}},$h5$);
$h5$.$d6k2li$h6_=ByteBuffer$c_ofSize(1);
$h5$.$prop$get$d6k2li$h6={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ByteBuffer},$cont:$h5,d:['ceylon.buffer.charset','iso_8859_1','$m','pieceEncoder','$at','output$ofeldz']};}};
$h5$.$prop$get$d6k2li$h6.get=function(){return $d6k2li$h6};
return $h5$;
};$h5.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:iso_8859_1$.pieceEncoder,sts:[{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:{t:m$1.Character}}}],d:['ceylon.buffer.charset','iso_8859_1','$m','pieceEncoder']};};
function $init$$h5(){
if($h5.$$===undefined){
m$1.initTypeProto($h5,'ceylon.buffer.charset::iso_8859_1.pieceEncoder.anonymous#1',m$1.Basic,$init$PieceConvert$codec());
(function($h5$){
m$1.atr$($h5$,'$d6k2li$h6',function(){return this.$d6k2li$h6_;},undefined,function(){return{mod:$CCMM$,$t:{t:ByteBuffer},$cont:$h5,d:['ceylon.buffer.charset','iso_8859_1','$m','pieceEncoder','$at','output$ofeldz']};});
$h5$.more=function($h7){
var $h5$=this;
$h5$.$d6k2li$h6.clear();
var $h8=$h7.integer;
if(($h8>(255))){
if(m$1.$eq$($h4,strict$codec())){
throw m$1.wrapexc(EncodeException$codec("Invalid ISO_8859-1 byte value: "+($h7.string)),'69:20-69:85','ceylon/buffer/charset/iso_8859_1.ceylon');
}
}
else{
$h5$.$d6k2li$h6.put($h8.$_byte);
}
$h5$.$d6k2li$h6.flip();
return $h5$.$d6k2li$h6;
};$h5$.more.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Character}}],$cont:$h5,pa:3,d:['ceylon.buffer.charset','iso_8859_1','$m','pieceEncoder','$m','more']};};
$h5$.toString=function(){return this.string.valueOf();};
})($h5.$$.prototype);
}
return $h5;
}
iso_8859_1$.$init$$h5=$init$$h5;$init$$h5();return $h5();}();
};
iso_8859_1$.pieceEncoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:{t:m$1.Character}}},ps:[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:$gn$charset,pa:3,d:['ceylon.buffer.charset','iso_8859_1','$m','pieceEncoder']};};
iso_8859_1$.pieceDecoder=function($ha){var iso_8859_1$=this;
if($ha===undefined){$ha=iso_8859_1$.pieceDecoder$defs$error($ha);}
return function(){function $hb($$targs$$){
var $hb$=new $hb.$$;$hb$.outer$=iso_8859_1$;
$hb$.$$targs$$=$$targs$$;
PieceConvert$codec({ToSingle$PieceConvert:{t:m$1.Character},FromSingle$PieceConvert:{t:m$1.Byte}},$hb$);
$hb$.$d6k2li$hc_=CharacterBuffer$c_ofSize(1);
$hb$.$prop$get$d6k2li$hc={$crtmm$:function(){return{mod:$CCMM$,$t:{t:CharacterBuffer},$cont:$hb,d:['ceylon.buffer.charset','iso_8859_1','$m','pieceDecoder','$at','output$76036e']};}};
$hb$.$prop$get$d6k2li$hc.get=function(){return $d6k2li$hc};
return $hb$;
};$hb.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:iso_8859_1$.pieceDecoder,sts:[{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Character},FromSingle$PieceConvert:{t:m$1.Byte}}}],d:['ceylon.buffer.charset','iso_8859_1','$m','pieceDecoder']};};
function $init$$hb(){
if($hb.$$===undefined){
m$1.initTypeProto($hb,'ceylon.buffer.charset::iso_8859_1.pieceDecoder.anonymous#2',m$1.Basic,$init$PieceConvert$codec());
(function($hb$){
m$1.atr$($hb$,'$d6k2li$hc',function(){return this.$d6k2li$hc_;},undefined,function(){return{mod:$CCMM$,$t:{t:CharacterBuffer},$cont:$hb,d:['ceylon.buffer.charset','iso_8859_1','$m','pieceDecoder','$at','output$76036e']};});
$hb$.more=function($hd){
var $hb$=this;
$hb$.$d6k2li$hc.clear();
$hb$.$d6k2li$hc.put($hd.unsigned.character);
$hb$.$d6k2li$hc.flip();
return $hb$.$d6k2li$hc;
};$hb$.more.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Byte}}],$cont:$hb,pa:3,d:['ceylon.buffer.charset','iso_8859_1','$m','pieceDecoder','$m','more']};};
$hb$.toString=function(){return this.string.valueOf();};
})($hb.$$.prototype);
}
return $hb;
}
iso_8859_1$.$init$$hb=$init$$hb;$init$$hb();return $hb();}();
};
iso_8859_1$.pieceDecoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Character},FromSingle$PieceConvert:{t:m$1.Byte}}},ps:[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:$gn$charset,pa:3,d:['ceylon.buffer.charset','iso_8859_1','$m','pieceDecoder']};};
iso_8859_1$.toString=function(){return this.string.valueOf();};
})($gn$charset.$$.prototype);
}
return $gn$charset;
}
ex$.$init$iso_8859_1$charset=$init$iso_8859_1$charset;$init$iso_8859_1$charset();var $hf;
function iso_8859_1$charset(){
if($hf===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'iso_8859_1\' before it was set"),'12:0-89:0','iso_8859_1.ceylon');
if($hf===undefined){$hf=m$1.INIT$;$hf=$init$iso_8859_1$charset()();$hf.$crtmm$=iso_8859_1$charset.$crtmm$;}
return $hf;
}
ex$.iso_8859_1$charset=iso_8859_1$charset;
iso_8859_1$charset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$iso_8859_1$charset()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.charset:iso_8859_1'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.buffer.charset','iso_8859_1']};};
$prop$getIso_8859_1$charset=iso_8859_1$charset;
ex$.$prop$getIso_8859_1$charset=$prop$getIso_8859_1$charset;
var $hg$charset;function $valinit$$hg$charset(){if($hg$charset===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'charsetsByAlias\' before it was set"),'5:0-19:1','lookup.ceylon');
if($hg$charset===undefined){$hg$charset=m$1.INIT$;$hg$charset=($hh=m$1.sarg$(function($hi){switch($hi){case 0:return utf8$charset();case 1:return utf16$charset();case 2:return iso_8859_1$charset();case 3:return ascii$charset();}return m$1.finished();},undefined,{}),buildCodecLookup$codec($hh,{CodecOrLower$buildCodecLookup:m$1.mit$([{t:m$1.Basic},{t:Charset$charset}])}))};return $hg$charset;};
function charsetsByAlias$charset(){return $valinit$$hg$charset();}
ex$.charsetsByAlias$charset=charsetsByAlias$charset;
var $prop$getCharsetsByAlias$charset={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:{t:m$1.$_String},Item$Map:{t:Charset$charset}}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.charset:charsetsByAlias')];},d:['ceylon.buffer.charset','charsetsByAlias']};}};
ex$.$prop$getCharsetsByAlias$charset=$prop$getCharsetsByAlias$charset;
$prop$getCharsetsByAlias$charset.get=charsetsByAlias$charset;
charsetsByAlias$charset.$crtmm$=$prop$getCharsetsByAlias$charset.$crtmm$;
var $hh;
function $hj$charset(){
var utf16$=new $hj$charset.$$;Charset$charset(utf16$);
utf16$.$d6k2li$hl_=m$1.tpl$(["UTF-16","UTF16","UTF_16"]);
utf16$.$prop$getAliases={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$hj$charset,pa:3,d:['ceylon.buffer.charset','utf16','$at','aliases']};}};
utf16$.$prop$getAliases.get=function(){return aliases};
return utf16$;
};$hj$charset.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:Charset$charset}],d:['ceylon.buffer.charset','utf16']};};
function $init$utf16$charset(){
if($hj$charset.$$===undefined){
m$1.initTypeProto($hj$charset,'ceylon.buffer.charset::utf16',m$1.Basic,$init$Charset$charset());
(function(utf16$){
m$1.atr$(utf16$,'aliases',function(){return this.$d6k2li$hl_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$hj$charset,pa:3,d:['ceylon.buffer.charset','utf16','$at','aliases']};});
utf16$.averageEncodeSize=function($hm){var utf16$=this;
return ($hm*(2));
};
utf16$.averageEncodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:$hj$charset,pa:3,d:['ceylon.buffer.charset','utf16','$m','averageEncodeSize']};};
utf16$.maximumEncodeSize=function($hn){var utf16$=this;
return ($hn*(4));
};
utf16$.maximumEncodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:$hj$charset,pa:3,d:['ceylon.buffer.charset','utf16','$m','maximumEncodeSize']};};
utf16$.averageDecodeSize=function($ho){var utf16$=this;
return m$1.i$div($ho,(2));
};
utf16$.averageDecodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:$hj$charset,pa:3,d:['ceylon.buffer.charset','utf16','$m','averageDecodeSize']};};
utf16$.maximumDecodeSize=function($hp){var utf16$=this;
return $hp;
};
utf16$.maximumDecodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:$hj$charset,pa:3,d:['ceylon.buffer.charset','utf16','$m','maximumDecodeSize']};};
utf16$.encodeBid=function($hq){return 10};
utf16$.encodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}}}],$cont:$hj$charset,pa:3,d:['ceylon.buffer.charset','utf16','$m','encodeBid']};};
utf16$.decodeBid=function($hr){
var utf16$=this;
var $hs=utf16$.pieceDecoder();
try{
$hr.each(m$1.jsc$2((function($ht){
$hs.more($ht);
}),[{nm:'byte',mt:'prm',$t:{t:m$1.Byte}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([{t:m$1.Byte}])}));
$hs.done();
return 10;
}
catch($hu){
if(!m$1.is$(($hu=$hu),{t:m$1.Throwable}))$hu=m$1.NatErr($hu);
if(m$1.is$($hu,{t:DecodeException$codec})){
return 0;
}else{throw $hu}
}
};utf16$.decodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}}],$cont:$hj$charset,pa:3,d:['ceylon.buffer.charset','utf16','$m','decodeBid']};};
utf16$.pieceEncoder=function($hv){var utf16$=this;
if($hv===undefined){$hv=utf16$.pieceEncoder$defs$error($hv);}
return function(){function $hw($$targs$$){
var $hw$=new $hw.$$;$hw$.outer$=utf16$;
$hw$.$$targs$$=$$targs$$;
PieceConvert$codec({ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:{t:m$1.Character}},$hw$);
$hw$.$d6k2li$hx_=ByteBuffer$c_ofSize(4);
$hw$.$prop$get$d6k2li$hx={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ByteBuffer},$cont:$hw,d:['ceylon.buffer.charset','utf16','$m','pieceEncoder','$at','output$w78ii3']};}};
$hw$.$prop$get$d6k2li$hx.get=function(){return $d6k2li$hx};
return $hw$;
};$hw.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:utf16$.pieceEncoder,sts:[{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:{t:m$1.Character}}}],d:['ceylon.buffer.charset','utf16','$m','pieceEncoder']};};
function $init$$hw(){
if($hw.$$===undefined){
m$1.initTypeProto($hw,'ceylon.buffer.charset::utf16.pieceEncoder.anonymous#1',m$1.Basic,$init$PieceConvert$codec());
(function($hw$){
m$1.atr$($hw$,'$d6k2li$hx',function(){return this.$d6k2li$hx_;},undefined,function(){return{mod:$CCMM$,$t:{t:ByteBuffer},$cont:$hw,d:['ceylon.buffer.charset','utf16','$m','pieceEncoder','$at','output$w78ii3']};});
$hw$.more=function($hy){
var $hw$=this;
$hw$.$d6k2li$hx.clear();
var $hz=$hy.integer;
if(($hz<(65536))){
var $i0=$hz.and(65280).rightLogicalShift(8).$_byte;
var $i1=$hz.and(255).$_byte;
$hw$.$d6k2li$hx.put($i0);
$hw$.$d6k2li$hx.put($i1);
}
else{
if(($hz<(1114112))){
var $i2=($hz-(65536));
var $i3=$i2.and(1047552).rightLogicalShift(10).or(55296);
var $i4=$i2.and(1023).or(56320);
var $i5=$i3.and(65280).rightLogicalShift(8).$_byte;
var $i6=$i3.and(255).$_byte;
var $i7=$i4.and(65280).rightLogicalShift(8).$_byte;
var $i8=$i4.and(255).$_byte;
$hw$.$d6k2li$hx.put($i5);
$hw$.$d6k2li$hx.put($i6);
$hw$.$d6k2li$hx.put($i7);
$hw$.$d6k2li$hx.put($i8);
}
else{
var $i9=$hv;
if($i9===strict$codec()) {
throw m$1.wrapexc(EncodeException$codec("Invalid unicode code point "+($hz.string)),'76:20-76:78','ceylon/buffer/charset/utf16.ceylon');
}
else if($i9===ignore$codec()) {
}
else if($i9===reset$codec()) {
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
}
$hw$.$d6k2li$hx.flip();
return $hw$.$d6k2li$hx;
};$hw$.more.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Character}}],$cont:$hw,pa:3,d:['ceylon.buffer.charset','utf16','$m','pieceEncoder','$m','more']};};
$hw$.toString=function(){return this.string.valueOf();};
})($hw.$$.prototype);
}
return $hw;
}
utf16$.$init$$hw=$init$$hw;$init$$hw();return $hw();}();
};
utf16$.pieceEncoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:{t:m$1.Character}}},ps:[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:$hj$charset,pa:3,d:['ceylon.buffer.charset','utf16','$m','pieceEncoder']};};
utf16$.pieceDecoder=function($ib){var utf16$=this;
if($ib===undefined){$ib=utf16$.pieceDecoder$defs$error($ib);}
return function(){function $ic($$targs$$){
var $ic$=new $ic.$$;$ic$.outer$=utf16$;
$ic$.$$targs$$=$$targs$$;
PieceConvert$codec({ToSingle$PieceConvert:{t:m$1.Character},FromSingle$PieceConvert:{t:m$1.Byte}},$ic$);
$ic$.$d6k2li$id_=true;
$ic$.$prop$get$d6k2li$id={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:$ic,pa:1024,d:['ceylon.buffer.charset','utf16','$m','pieceDecoder','$at','initialOutput$v042bu']};}};
$ic$.$prop$get$d6k2li$id.get=function(){return $d6k2li$id};
$ic$.$d6k2li$ie_=true;
$ic$.$prop$get$d6k2li$ie={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:$ic,pa:1024,d:['ceylon.buffer.charset','utf16','$m','pieceDecoder','$at','bigEndian$151cq8']};}};
$ic$.$prop$get$d6k2li$ie.get=function(){return $d6k2li$ie};
$ic$.$d6k2li$if_=null;
$ic$.$prop$get$d6k2li$if={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Byte}]},$cont:$ic,pa:1024,d:['ceylon.buffer.charset','utf16','$m','pieceDecoder','$at','firstByte$xnui4b']};}};
$ic$.$prop$get$d6k2li$if.get=function(){return $d6k2li$if};
$ic$.$d6k2li$ig_=null;
$ic$.$prop$get$d6k2li$ig={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:$ic,pa:1024,d:['ceylon.buffer.charset','utf16','$m','pieceDecoder','$at','firstWord$jpte2x']};}};
$ic$.$prop$get$d6k2li$ig.get=function(){return $d6k2li$ig};
$ic$.$d6k2li$ih();
return $ic$;
};$ic.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:utf16$.pieceDecoder,sts:[{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Character},FromSingle$PieceConvert:{t:m$1.Byte}}}],d:['ceylon.buffer.charset','utf16','$m','pieceDecoder']};};
function $init$$ic(){
if($ic.$$===undefined){
m$1.initTypeProto($ic,'ceylon.buffer.charset::utf16.pieceDecoder.anonymous#2',m$1.Basic,$init$PieceConvert$codec());
(function($ic$){
m$1.atr$($ic$,'$d6k2li$id',function(){return this.$d6k2li$id_;},function($ii){return this.$d6k2li$id_=$ii;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:$ic,pa:1024,d:['ceylon.buffer.charset','utf16','$m','pieceDecoder','$at','initialOutput$v042bu']};});
m$1.atr$($ic$,'$d6k2li$ie',function(){return this.$d6k2li$ie_;},function($ij){return this.$d6k2li$ie_=$ij;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:$ic,pa:1024,d:['ceylon.buffer.charset','utf16','$m','pieceDecoder','$at','bigEndian$151cq8']};});
m$1.atr$($ic$,'$d6k2li$if',function(){return this.$d6k2li$if_;},function($ik){return this.$d6k2li$if_=$ik;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Byte}]},$cont:$ic,pa:1024,d:['ceylon.buffer.charset','utf16','$m','pieceDecoder','$at','firstByte$xnui4b']};});
m$1.atr$($ic$,'$d6k2li$ig',function(){return this.$d6k2li$ig_;},function($il){return this.$d6k2li$ig_=$il;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:$ic,pa:1024,d:['ceylon.buffer.charset','utf16','$m','pieceDecoder','$at','firstWord$jpte2x']};});
$ic$.$d6k2li$ih=function(){
var $ic$=this;
$ic$.$d6k2li$if=null;
$ic$.$d6k2li$ig=null;
};$ic$.$d6k2li$ih.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:$ic,d:['ceylon.buffer.charset','utf16','$m','pieceDecoder','$m','reset$azyme4']};};
$ic$.more=function($im){
var $ic$=this;
var $in;
if(m$1.nn$(($in=$ic$.$d6k2li$if))){
var $io;
var $ip=($ic$.$d6k2li$ie?$in.unsigned.leftLogicalShift(8).or($im.unsigned):$in.unsigned.or($im.unsigned.leftLogicalShift(8)));
var $iq;
if(m$1.nn$(($iq=$ic$.$d6k2li$ig))){
var $ir=(function(){if((($ip<(56320))||($ip>(57343)))){
var $is=$ib;
if($is===strict$codec()) {
throw m$1.wrapexc(($it="Invalid UTF-16 low surrogate value: "+($ip.string),DecodeException$codec($it,undefined)),'114:28-116:29','ceylon/buffer/charset/utf16.ceylon');
var $it;
}
else if($is===ignore$codec()) {
}
else if($is===reset$codec()) {
$ic$.$d6k2li$ih();
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
return m$1.empty();
}
var $iu=$iq.and(1023).leftLogicalShift(10);
var $iv=$ip.and(1023);
var $iw=($iu.or($iv)+(65536));
$io=m$1.sarg$(function($ix){switch($ix){case 0:return $iw.character;}return m$1.finished();},undefined,{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:m$1.Character}});
}());if($ir!==undefined){return $ir;}
}
else{
var $iy=(function(){var $iz;
if((($ip<(55296))||($ip>(57343)))){
$iz=$ip;
}
else{
if(($ip>(56319))){
var $j0=$ib;
if($j0===strict$codec()) {
throw m$1.wrapexc(($j1="Invalid UTF-16 high surrogate value: "+($ip.string),DecodeException$codec($j1,undefined)),'138:28-140:29','ceylon/buffer/charset/utf16.ceylon');
var $j1;
}
else if($j0===ignore$codec()) {
}
else if($j0===reset$codec()) {
$ic$.$d6k2li$ih();
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
return m$1.empty();
}
else{
$ic$.$d6k2li$ig=$ip;
$ic$.$d6k2li$if=null;
return m$1.empty();
}
}
if((($iz==(65279))&&$ic$.$d6k2li$id)){
$io=m$1.empty();
}
else{
if((($iz==(65534))&&$ic$.$d6k2li$id)){
$ic$.$d6k2li$ie=false;
$io=m$1.empty();
}
else{
$io=m$1.sarg$(function($j2){switch($j2){case 0:return $iz.character;}return m$1.finished();},undefined,{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:m$1.Character}});
}
}
}());if($iy!==undefined){return $iy;}
}
$ic$.$d6k2li$id=false;
$ic$.$d6k2li$ih();
return $io;
}
else{
$ic$.$d6k2li$if=$im;
return m$1.empty();
}
};$ic$.more.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Byte}}],$cont:$ic,pa:3,d:['ceylon.buffer.charset','utf16','$m','pieceDecoder','$m','more']};};
$ic$.done=function(){
var $ic$=this;
if(m$1.nn$($ic$.$d6k2li$if)){
var $j3=$ib;
if($j3===strict$codec()) {
throw m$1.wrapexc(($j4="Invalid UTF-16 sequence: missing 1 byte",DecodeException$codec($j4,undefined)),'178:20-180:21','ceylon/buffer/charset/utf16.ceylon');
var $j4;
}
else if($j3===ignore$codec()) {
}
else if($j3===reset$codec()) {
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
$ic$.$d6k2li$ih();
return m$1.empty();
};$ic$.done.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}},ps:[],$cont:$ic,pa:3,d:['ceylon.buffer.charset','utf16','$m','pieceDecoder','$m','done']};};
$ic$.toString=function(){return this.string.valueOf();};
})($ic.$$.prototype);
}
return $ic;
}
utf16$.$init$$ic=$init$$ic;$init$$ic();return $ic();}();
};
utf16$.pieceDecoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Character},FromSingle$PieceConvert:{t:m$1.Byte}}},ps:[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:$hj$charset,pa:3,d:['ceylon.buffer.charset','utf16','$m','pieceDecoder']};};
utf16$.toString=function(){return this.string.valueOf();};
})($hj$charset.$$.prototype);
}
return $hj$charset;
}
ex$.$init$utf16$charset=$init$utf16$charset;$init$utf16$charset();var $j6;
function utf16$charset(){
if($j6===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'utf16\' before it was set"),'14:0-191:0','utf16.ceylon');
if($j6===undefined){$j6=m$1.INIT$;$j6=$init$utf16$charset()();$j6.$crtmm$=utf16$charset.$crtmm$;}
return $j6;
}
ex$.utf16$charset=utf16$charset;
utf16$charset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$utf16$charset()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.charset:utf16'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.buffer.charset','utf16']};};
$prop$getUtf16$charset=utf16$charset;
ex$.$prop$getUtf16$charset=$prop$getUtf16$charset;
function $j7$charset(){
var utf8$=new $j7$charset.$$;Charset$charset(utf8$);
utf8$.$d6k2li$j9_=m$1.tpl$(["UTF-8","UTF8","UTF_8"]);
utf8$.$prop$getAliases={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$j7$charset,pa:3,d:['ceylon.buffer.charset','utf8','$at','aliases']};}};
utf8$.$prop$getAliases.get=function(){return aliases};
return utf8$;
};$j7$charset.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:Charset$charset}],d:['ceylon.buffer.charset','utf8']};};
function $init$utf8$charset(){
if($j7$charset.$$===undefined){
m$1.initTypeProto($j7$charset,'ceylon.buffer.charset::utf8',m$1.Basic,$init$Charset$charset());
(function(utf8$){
m$1.atr$(utf8$,'aliases',function(){return this.$d6k2li$j9_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:$j7$charset,pa:3,d:['ceylon.buffer.charset','utf8','$at','aliases']};});
utf8$.averageEncodeSize=function($ja){var utf8$=this;
return ($ja*(2));
};
utf8$.averageEncodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:$j7$charset,pa:3,d:['ceylon.buffer.charset','utf8','$m','averageEncodeSize']};};
utf8$.maximumEncodeSize=function($jb){var utf8$=this;
return ($jb*(4));
};
utf8$.maximumEncodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:$j7$charset,pa:3,d:['ceylon.buffer.charset','utf8','$m','maximumEncodeSize']};};
utf8$.averageDecodeSize=function($jc){var utf8$=this;
return m$1.i$div($jc,(2));
};
utf8$.averageDecodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:$j7$charset,pa:3,d:['ceylon.buffer.charset','utf8','$m','averageDecodeSize']};};
utf8$.maximumDecodeSize=function($jd){var utf8$=this;
return $jd;
};
utf8$.maximumDecodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:$j7$charset,pa:3,d:['ceylon.buffer.charset','utf8','$m','maximumDecodeSize']};};
utf8$.encodeBid=function($je){return 15};
utf8$.encodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}}}],$cont:$j7$charset,pa:3,d:['ceylon.buffer.charset','utf8','$m','encodeBid']};};
utf8$.decodeBid=function($jf){
var utf8$=this;
var $jg=utf8$.pieceDecoder();
try{
$jf.each(m$1.jsc$2((function($jh){
$jg.more($jh);
}),[{nm:'byte',mt:'prm',$t:{t:m$1.Byte}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([{t:m$1.Byte}])}));
$jg.done();
return 15;
}
catch($ji){
if(!m$1.is$(($ji=$ji),{t:m$1.Throwable}))$ji=m$1.NatErr($ji);
if(m$1.is$($ji,{t:DecodeException$codec})){
return 0;
}else{throw $ji}
}
};utf8$.decodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}}],$cont:$j7$charset,pa:3,d:['ceylon.buffer.charset','utf8','$m','decodeBid']};};
utf8$.pieceEncoder=function($jj){var utf8$=this;
if($jj===undefined){$jj=utf8$.pieceEncoder$defs$error($jj);}
return function(){function $jk($$targs$$){
var $jk$=new $jk.$$;$jk$.outer$=utf8$;
$jk$.$$targs$$=$$targs$$;
PieceConvert$codec({ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:{t:m$1.Character}},$jk$);
$jk$.$d6k2li$jl_=ByteBuffer$c_ofSize(4);
$jk$.$prop$get$d6k2li$jl={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ByteBuffer},$cont:$jk,d:['ceylon.buffer.charset','utf8','$m','pieceEncoder','$at','output$vxs3r6']};}};
$jk$.$prop$get$d6k2li$jl.get=function(){return $d6k2li$jl};
return $jk$;
};$jk.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:utf8$.pieceEncoder,sts:[{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:{t:m$1.Character}}}],d:['ceylon.buffer.charset','utf8','$m','pieceEncoder']};};
function $init$$jk(){
if($jk.$$===undefined){
m$1.initTypeProto($jk,'ceylon.buffer.charset::utf8.pieceEncoder.anonymous#1',m$1.Basic,$init$PieceConvert$codec());
(function($jk$){
m$1.atr$($jk$,'$d6k2li$jl',function(){return this.$d6k2li$jl_;},undefined,function(){return{mod:$CCMM$,$t:{t:ByteBuffer},$cont:$jk,d:['ceylon.buffer.charset','utf8','$m','pieceEncoder','$at','output$vxs3r6']};});
$jk$.more=function($jm){
var $jk$=this;
$jk$.$d6k2li$jl.clear();
var $jn=$jm.integer;
if(($jn<(128))){
$jk$.$d6k2li$jl.put($jn.$_byte);
}
else{
if(($jn<(2048))){
var $jo=$jn.and(1984).rightLogicalShift(6).or(192).$_byte;
var $jp=$jn.and(63).or(128).$_byte;
$jk$.$d6k2li$jl.put($jo);
$jk$.$d6k2li$jl.put($jp);
}
else{
if(($jn<(65536))){
var $jq=$jn.and(61440).rightLogicalShift(12).or(224).$_byte;
var $jr=$jn.and(4032).rightLogicalShift(6).or(128).$_byte;
var $js=$jn.and(63).or(128).$_byte;
$jk$.$d6k2li$jl.put($jq);
$jk$.$d6k2li$jl.put($jr);
$jk$.$d6k2li$jl.put($js);
}
else{
if(($jn<(1114112))){
var $jt=$jn.and(1835008).rightLogicalShift(18).or(240).$_byte;
var $ju=$jn.and(258048).rightLogicalShift(12).or(128).$_byte;
var $jv=$jn.and(4032).rightLogicalShift(6).or(128).$_byte;
var $jw=$jn.and(63).or(128).$_byte;
$jk$.$d6k2li$jl.put($jt);
$jk$.$d6k2li$jl.put($ju);
$jk$.$d6k2li$jl.put($jv);
$jk$.$d6k2li$jl.put($jw);
}
else{
var $jx=$jj;
if($jx===strict$codec()) {
throw m$1.wrapexc(EncodeException$codec("Invalid unicode code point "+($jn.string)),'76:20-76:78','ceylon/buffer/charset/utf8.ceylon');
}
else if($jx===ignore$codec()) {
}
else if($jx===reset$codec()) {
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
}
}
}
$jk$.$d6k2li$jl.flip();
return $jk$.$d6k2li$jl;
};$jk$.more.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Character}}],$cont:$jk,pa:3,d:['ceylon.buffer.charset','utf8','$m','pieceEncoder','$m','more']};};
$jk$.toString=function(){return this.string.valueOf();};
})($jk.$$.prototype);
}
return $jk;
}
utf8$.$init$$jk=$init$$jk;$init$$jk();return $jk();}();
};
utf8$.pieceEncoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:{t:m$1.Character}}},ps:[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:$j7$charset,pa:3,d:['ceylon.buffer.charset','utf8','$m','pieceEncoder']};};
utf8$.pieceDecoder=function($jz){var utf8$=this;
if($jz===undefined){$jz=utf8$.pieceDecoder$defs$error($jz);}
return function(){function $k0($$targs$$){
var $k0$=new $k0.$$;$k0$.outer$=utf8$;
$k0$.$$targs$$=$$targs$$;
PieceConvert$codec({ToSingle$PieceConvert:{t:m$1.Character},FromSingle$PieceConvert:{t:m$1.Byte}},$k0$);
$k0$.$d6k2li$k1_=true;
$k0$.$prop$get$d6k2li$k1={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:$k0,pa:1024,d:['ceylon.buffer.charset','utf8','$m','pieceDecoder','$at','initialOutput$o40mlz']};}};
$k0$.$prop$get$d6k2li$k1.get=function(){return $d6k2li$k1};
$k0$.$d6k2li$k2_=ByteBuffer$c_ofSize(4);
$k0$.$prop$get$d6k2li$k2={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ByteBuffer},$cont:$k0,d:['ceylon.buffer.charset','utf8','$m','pieceDecoder','$at','intermediate$bno73f']};}};
$k0$.$prop$get$d6k2li$k2.get=function(){return $d6k2li$k2};
$k0$.$d6k2li$k3();
return $k0$;
};$k0.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:utf8$.pieceDecoder,sts:[{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Character},FromSingle$PieceConvert:{t:m$1.Byte}}}],d:['ceylon.buffer.charset','utf8','$m','pieceDecoder']};};
function $init$$k0(){
if($k0.$$===undefined){
m$1.initTypeProto($k0,'ceylon.buffer.charset::utf8.pieceDecoder.anonymous#2',m$1.Basic,$init$PieceConvert$codec());
(function($k0$){
m$1.atr$($k0$,'$d6k2li$k1',function(){return this.$d6k2li$k1_;},function($k4){return this.$d6k2li$k1_=$k4;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:$k0,pa:1024,d:['ceylon.buffer.charset','utf8','$m','pieceDecoder','$at','initialOutput$o40mlz']};});
m$1.atr$($k0$,'$d6k2li$k2',function(){return this.$d6k2li$k2_;},undefined,function(){return{mod:$CCMM$,$t:{t:ByteBuffer},$cont:$k0,d:['ceylon.buffer.charset','utf8','$m','pieceDecoder','$at','intermediate$bno73f']};});
$k0$.$d6k2li$k3=function(){
var $k0$=this;
$k0$.$d6k2li$k2.clear();
($k0$.$d6k2li$k2.limit=0);
};$k0$.$d6k2li$k3.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:$k0,d:['ceylon.buffer.charset','utf8','$m','pieceDecoder','$m','reset$hw223z']};};
$k0$.more=function($k5){
var $k0$=this;
var $k6=$k5.unsigned;
if(($k0$.$d6k2li$k2.limit==(0))){
if(($k6<(128))){
return m$1.sarg$(function($k7){switch($k7){case 0:return $k6.character;}return m$1.finished();},undefined,{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:m$1.Character}});
}
if(($k6<(192))){
var $k8=$jz;
if($k8===strict$codec()) {
throw m$1.wrapexc(DecodeException$codec("Invalid UTF-8 first byte value: "+($k5.string)),'113:24-113:90','ceylon/buffer/charset/utf8.ceylon');
}
else if($k8===ignore$codec()) {
}
else if($k8===reset$codec()) {
$k0$.$d6k2li$k3();
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
else{
if(($k6<(224))){
($k0$.$d6k2li$k2.limit=1);
}
else{
if(($k6<(240))){
($k0$.$d6k2li$k2.limit=2);
}
else{
if(($k6<(248))){
($k0$.$d6k2li$k2.limit=3);
}
else{
var $k9=$jz;
if($k9===strict$codec()) {
throw m$1.wrapexc(DecodeException$codec("Invalid UTF-8 first byte value: "+($k5.string)),'131:24-131:90','ceylon/buffer/charset/utf8.ceylon');
}
else if($k9===ignore$codec()) {
}
else if($k9===reset$codec()) {
$k0$.$d6k2li$k3();
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
return m$1.empty();
}
}
}
}
$k0$.$d6k2li$k2.put($k5);
return m$1.empty();
}
if((($k6<(128))||($k6>=(192)))){
var $ka=$jz;
if($ka===strict$codec()) {
throw m$1.wrapexc(($kb="Invalid UTF-8 "+($k0$.$d6k2li$k2.position.string)+" byte value: "+($k5.string),DecodeException$codec($kb,undefined)),'148:20-150:21','ceylon/buffer/charset/utf8.ceylon');
var $kb;
}
else if($ka===ignore$codec()) {
}
else if($ka===reset$codec()) {
$k0$.$d6k2li$k3();
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
return m$1.empty();
}
if(($k0$.$d6k2li$k2.available>(0))){
$k0$.$d6k2li$k2.put($k5);
return m$1.empty();
}
$k0$.$d6k2li$k2.flip();
var $kc;
if(($k0$.$d6k2li$k2.available==(1))){
var $kd=$k0$.$d6k2li$k2.$_get().and((31).$_byte).unsigned;
var $ke=$k5.and((63).$_byte).unsigned;
$kc=$kd.leftLogicalShift(6).or($ke);
}
else{
if(($k0$.$d6k2li$k2.available==(2))){
var $kf=$k0$.$d6k2li$k2.$_get().and((15).$_byte).unsigned;
var $kg=$k0$.$d6k2li$k2.$_get().and((63).$_byte).unsigned;
var $kh=$k5.and((63).$_byte).unsigned;
$kc=$kf.leftLogicalShift(12).or($kg.leftLogicalShift(6)).or($kh);
}
else{
var $ki=$k0$.$d6k2li$k2.$_get().and((7).$_byte).unsigned;
var $kj=$k0$.$d6k2li$k2.$_get().and((63).$_byte).unsigned;
var $kk=$k0$.$d6k2li$k2.$_get().and((63).$_byte).unsigned;
var $kl=$k5.and((63).$_byte).unsigned;
$kc=$ki.leftLogicalShift(18).or($kj.leftLogicalShift(12)).or($kk.leftLogicalShift(6)).or($kl);
}
}
var $km;
if(($k0$.$d6k2li$k1&&($kc==(65279)))){
$km=m$1.empty();
}
else{
$km=m$1.sarg$(function($kn){switch($kn){case 0:return $kc.character;}return m$1.finished();},undefined,{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:m$1.Character}});
}
$k0$.$d6k2li$k1=false;
$k0$.$d6k2li$k3();
return $km;
};$k0$.more.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Byte}}],$cont:$k0,pa:3,d:['ceylon.buffer.charset','utf8','$m','pieceDecoder','$m','more']};};
$k0$.done=function(){
var $k0$=this;
if(!m$1.$eq$($k0$.$d6k2li$k2.limit,(0))){
var $ko=$jz;
if($ko===strict$codec()) {
throw m$1.wrapexc(($kp="Invalid UTF-8 sequence: missing "+(($k0$.$d6k2li$k2.available+(1)).string)+" bytes",DecodeException$codec($kp,undefined)),'207:20-209:21','ceylon/buffer/charset/utf8.ceylon');
var $kp;
}
else if($ko===ignore$codec()) {
}
else if($ko===reset$codec()) {
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
$k0$.$d6k2li$k3();
return m$1.empty();
};$k0$.done.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}},ps:[],$cont:$k0,pa:3,d:['ceylon.buffer.charset','utf8','$m','pieceDecoder','$m','done']};};
$k0$.toString=function(){return this.string.valueOf();};
})($k0.$$.prototype);
}
return $k0;
}
utf8$.$init$$k0=$init$$k0;$init$$k0();return $k0();}();
};
utf8$.pieceDecoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Character},FromSingle$PieceConvert:{t:m$1.Byte}}},ps:[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:$j7$charset,pa:3,d:['ceylon.buffer.charset','utf8','$m','pieceDecoder']};};
utf8$.toString=function(){return this.string.valueOf();};
})($j7$charset.$$.prototype);
}
return $j7$charset;
}
ex$.$init$utf8$charset=$init$utf8$charset;$init$utf8$charset();var $kr;
function utf8$charset(){
if($kr===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'utf8\' before it was set"),'14:0-220:0','utf8.ceylon');
if($kr===undefined){$kr=m$1.INIT$;$kr=$init$utf8$charset()();$kr.$crtmm$=utf8$charset.$crtmm$;}
return $kr;
}
ex$.utf8$charset=utf8$charset;
utf8$charset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$utf8$charset()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.charset:utf8'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.buffer.charset','utf8']};};
$prop$getUtf8$charset=utf8$charset;
ex$.$prop$getUtf8$charset=$prop$getUtf8$charset;
function Codec$codec(codec$){
}
Codec$codec.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.buffer.codec','Codec']};};
ex$.Codec$codec=Codec$codec;
function $init$Codec$codec(){
if(Codec$codec.$$===undefined){
m$1.initTypeProtoI(Codec$codec,'ceylon.buffer.codec::Codec');
(function(codec$){
codec$.$prop$getAliases={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:Codec$codec,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:Codec:$at:aliases')];},d:['ceylon.buffer.codec','Codec','$at','aliases']};}};
m$1.atr$(codec$,'name',function(){
var codec$=this;
return codec$.aliases.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Codec$codec,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:Codec:$at:name')];},d:['ceylon.buffer.codec','Codec','$at','name']};});
codec$.averageEncodeSize={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:Codec$codec,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:Codec:$m:averageEncodeSize')];},d:['ceylon.buffer.codec','Codec','$m','averageEncodeSize']};}};codec$.maximumEncodeSize={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:Codec$codec,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:Codec:$m:maximumEncodeSize')];},d:['ceylon.buffer.codec','Codec','$m','maximumEncodeSize']};}};codec$.averageDecodeSize={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:Codec$codec,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:Codec:$m:averageDecodeSize')];},d:['ceylon.buffer.codec','Codec','$m','averageDecodeSize']};}};codec$.maximumDecodeSize={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:Codec$codec,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:Codec:$m:maximumDecodeSize')];},d:['ceylon.buffer.codec','Codec','$m','maximumDecodeSize']};}};codec$.toString=function(){return this.string.valueOf();};
})(Codec$codec.$$.prototype);
}
return Codec$codec;
}
ex$.$init$Codec$codec=$init$Codec$codec;$init$Codec$codec();
function PieceConvert$codec($$targs$$,pieceConvert$){
m$1.set_type_args(pieceConvert$,$$targs$$,PieceConvert$codec);
}
PieceConvert$codec.$crtmm$=function(){return{mod:$CCMM$,tp:{ToSingle$PieceConvert:{},FromSingle$PieceConvert:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:PieceConvert')];},d:['ceylon.buffer.codec','PieceConvert']};};
ex$.PieceConvert$codec=PieceConvert$codec;
function $init$PieceConvert$codec(){
if(PieceConvert$codec.$$===undefined){
m$1.initTypeProtoI(PieceConvert$codec,'ceylon.buffer.codec::PieceConvert');
(function(pieceConvert$){
pieceConvert$.more={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'ToSingle$PieceConvert'}},ps:[{nm:'input',mt:'prm',$t:'FromSingle$PieceConvert'}],$cont:PieceConvert$codec,pa:5,d:['ceylon.buffer.codec','PieceConvert','$m','more']};}};pieceConvert$.done=function(){return m$1.empty();
};
pieceConvert$.done.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'ToSingle$PieceConvert'}},ps:[],$cont:PieceConvert$codec,pa:9,d:['ceylon.buffer.codec','PieceConvert','$m','done']};};
pieceConvert$.toString=function(){return this.string.valueOf();};
})(PieceConvert$codec.$$.prototype);
}
return PieceConvert$codec;
}
ex$.$init$PieceConvert$codec=$init$PieceConvert$codec;$init$PieceConvert$codec();
function ChunkConvert$codec($d6k2li$ks,$d6k2li$kt,$$targs$$,chunkConvert$){
$init$ChunkConvert$codec();
if(chunkConvert$===undefined)chunkConvert$=new ChunkConvert$codec.$$;
m$1.set_type_args(chunkConvert$,$$targs$$);
chunkConvert$.$d6k2li$ks_=$d6k2li$ks;
chunkConvert$.$d6k2li$kt_=$d6k2li$kt;
chunkConvert$.$d6k2li$ku_=$d6k2li$ks($d6k2li$kt);
chunkConvert$.$d6k2li$kv_=m$2.LinkedList(undefined,{Element$LinkedList:chunkConvert$.$$targs$$.ToSingle$ChunkConvert});
return chunkConvert$;
}
ChunkConvert$codec.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'converter',mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:'ToSingle$ChunkConvert',FromSingle$PieceConvert:'FromSingle$ChunkConvert'}},Arguments$Callable:{t:'T',l:[{t:ErrorStrategy$codec}]}}}},{nm:'error',mt:'prm',$t:{t:ErrorStrategy$codec}}],tp:{ToMutable$ChunkConvert:{sts:[{t:Buffer,a:{Element$Buffer:'ToSingle$ChunkConvert'}}]},ToSingle$ChunkConvert:{},FromSingle$ChunkConvert:{}},pa:1,d:['ceylon.buffer.codec','ChunkConvert']};};
ex$.ChunkConvert$codec=ChunkConvert$codec;
function $init$ChunkConvert$codec(){
if(ChunkConvert$codec.$$===undefined){
m$1.initTypeProto(ChunkConvert$codec,'ceylon.buffer.codec::ChunkConvert',m$1.Basic);
(function(chunkConvert$){
m$1.atr$(chunkConvert$,'$d6k2li$ks',function(){return this.$d6k2li$ks_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Callable,a:{Return$Callable:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:'ToSingle$ChunkConvert',FromSingle$PieceConvert:'FromSingle$ChunkConvert'}},Arguments$Callable:{t:'T',l:[{t:ErrorStrategy$codec}]}}},$cont:ChunkConvert$codec,d:['ceylon.buffer.codec','ChunkConvert','$at','converter$fhdyu6']};});
m$1.atr$(chunkConvert$,'$d6k2li$kt',function(){return this.$d6k2li$kt_;},undefined,function(){return{mod:$CCMM$,$t:{t:ErrorStrategy$codec},$cont:ChunkConvert$codec,d:['ceylon.buffer.codec','ChunkConvert','$at','error$whpsfu']};});
m$1.atr$(chunkConvert$,'$d6k2li$ku',function(){return this.$d6k2li$ku_;},undefined,function(){return{mod:$CCMM$,$t:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:'ToSingle$ChunkConvert',FromSingle$PieceConvert:'FromSingle$ChunkConvert'}},$cont:ChunkConvert$codec,d:['ceylon.buffer.codec','ChunkConvert','$at','pieceConverter$8mz4ao']};});
m$1.atr$(chunkConvert$,'$d6k2li$kv',function(){return this.$d6k2li$kv_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2.LinkedList,a:{Element$LinkedList:'ToSingle$ChunkConvert'}},$cont:ChunkConvert$codec,d:['ceylon.buffer.codec','ChunkConvert','$at','remainder$3p12xx']};});
chunkConvert$.convert$defs$endOfInput=function($kw,$kx,$ky){return false;};
chunkConvert$.convert=function($kw,$kx,$ky){
var chunkConvert$=this;
if($ky===undefined){$ky=false;}
var $kz;
while($kw.hasAvailable&&m$1.nn$(($kz=chunkConvert$.$d6k2li$kv.$_pop()))){
$kw.put($kz);
}
if((!chunkConvert$.$d6k2li$kv.empty||!$kw.hasAvailable)){
return 0;
}
var $l0=(0);
while(true){
var $l1;
var $l2=$kx();
var $l3;
if(m$1.is$(($l3=$l2),{t:m$1.Finished})){
if($ky){
$l1=chunkConvert$.$d6k2li$ku.done().iterator();
}
else{
$l1=m$1.emptyIterator();
}
}
else{
($l4=$l0,$l0=$l4.successor,$l4);
var $l4;
$l1=chunkConvert$.$d6k2li$ku.more($l3).iterator();
}
var $l5;
while(!m$1.is$(($l5=$l1.next()),{t:m$1.Finished})){
if($kw.hasAvailable){
$kw.put($l5);
if(!$kw.hasAvailable){
var $l6;
while(!m$1.is$(($l6=$l1.next()),{t:m$1.Finished})){
chunkConvert$.$d6k2li$kv.offer($l6);
}
return $l0;
}
}
else{
chunkConvert$.$d6k2li$kv.offer($l5);
var $l7;
while(!m$1.is$(($l7=$l1.next()),{t:m$1.Finished})){
chunkConvert$.$d6k2li$kv.offer($l7);
}
return $l0;
}
}
var $l8;
if(m$1.is$(($l8=$l2),{t:m$1.Finished})){
return $l0;
}
}
};chunkConvert$.convert.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'output',mt:'prm',$t:'ToMutable$ChunkConvert'},{nm:'provider',mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:'u',l:['FromSingle$ChunkConvert',{t:m$1.Finished}]},Arguments$Callable:{t:m$1.Empty}}}},{nm:'endOfInput',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:ChunkConvert$codec,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:ChunkConvert:$m:convert')];},d:['ceylon.buffer.codec','ChunkConvert','$m','convert']};};
chunkConvert$.convertToSingle=function($l9){
var chunkConvert$=this;
var $la;
if(m$1.nn$(($la=chunkConvert$.$d6k2li$kv.$_pop()))){
return $la;
}
while(true){
var $lb;
var $lc=$l9();
var $ld;
if(m$1.is$(($ld=$lc),{t:m$1.Finished})){
$lb=chunkConvert$.$d6k2li$ku.done().iterator();
}
else{
$lb=chunkConvert$.$d6k2li$ku.more($ld).iterator();
}
var $le=$lb.next();
var $lf;
if(!m$1.is$(($lf=$le),{t:m$1.Finished})){
var $lg;
while(!m$1.is$(($lg=$lb.next()),{t:m$1.Finished})){
chunkConvert$.$d6k2li$kv.offer($lg);
}
return $lf;
}
function $lh(){return $le;}
var $li;
if(m$1.is$(($li=$lc),{t:m$1.Finished})){
return m$1.finished();
}
}
};chunkConvert$.convertToSingle.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['ToSingle$ChunkConvert',{t:m$1.Finished}]},ps:[{nm:'provider',mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:'u',l:['FromSingle$ChunkConvert',{t:m$1.Finished}]},Arguments$Callable:{t:m$1.Empty}}}}],$cont:ChunkConvert$codec,pa:1,d:['ceylon.buffer.codec','ChunkConvert','$m','convertToSingle']};};
chunkConvert$.toString=function(){return this.string.valueOf();};
})(ChunkConvert$codec.$$.prototype);
}
return ChunkConvert$codec;
}
ex$.$init$ChunkConvert$codec=$init$ChunkConvert$codec;$init$ChunkConvert$codec();
function CumulativeConvert$codec($d6k2li$lj,$d6k2li$lk,$d6k2li$ll,$d6k2li$lm,$d6k2li$ln,$d6k2li$lo,$$targs$$,cumulativeConvert$){
$init$CumulativeConvert$codec();
if(cumulativeConvert$===undefined)cumulativeConvert$=new CumulativeConvert$codec.$$;
m$1.set_type_args(cumulativeConvert$,$$targs$$);
cumulativeConvert$.$d6k2li$lj_=$d6k2li$lj;
cumulativeConvert$.$d6k2li$lk_=$d6k2li$lk;
cumulativeConvert$.$d6k2li$ll_=$d6k2li$ll;
cumulativeConvert$.$d6k2li$lm_=$d6k2li$lm;
cumulativeConvert$.$d6k2li$ln_=$d6k2li$ln;
cumulativeConvert$.$d6k2li$lo_=$d6k2li$lo;
m$1.asrt$((cumulativeConvert$.$d6k2li$ln.largerThan((1.0))),"Assertion failed: "+"Must be > 1 to allow for growth\n\tviolated growthFactor > 1.0\n\tat IncrementalCodec.ceylon (126:11-126:30)",'125:4-126:31','IncrementalCodec.ceylon');
cumulativeConvert$.$d6k2li$lp_=$d6k2li$lj($d6k2li$lk);
cumulativeConvert$.$d6k2li$lq_=$d6k2li$ll(function(){var $lr;
if(m$1.nn$(($lr=$d6k2li$lm)))return $d6k2li$lo($lr);else return (0)}());
return cumulativeConvert$;
}
CumulativeConvert$codec.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'converter',mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:'ToSingle$CumulativeConvert',FromSingle$PieceConvert:'FromSingle$CumulativeConvert'}},Arguments$Callable:{t:'T',l:[{t:ErrorStrategy$codec}]}}}},{nm:'error',mt:'prm',$t:{t:ErrorStrategy$codec}},{nm:'sizeOf',mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:'ToMutable$CumulativeConvert',Arguments$Callable:{t:'T',l:[{t:m$1.Integer}]}}}},{nm:'inputSize',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'growthFactor',mt:'prm',$t:{t:m$1.Float}},{nm:'averageSize',mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Integer},Arguments$Callable:{t:'T',l:[{t:m$1.Integer}]}}}}],tp:{ToMutable$CumulativeConvert:{sts:[{t:Buffer,a:{Element$Buffer:'ToSingle$CumulativeConvert'}}]},FromImmutable$CumulativeConvert:{sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'FromSingle$CumulativeConvert'}}]},ToSingle$CumulativeConvert:{},FromSingle$CumulativeConvert:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:CumulativeConvert')];},d:['ceylon.buffer.codec','CumulativeConvert']};};
ex$.CumulativeConvert$codec=CumulativeConvert$codec;
function $init$CumulativeConvert$codec(){
if(CumulativeConvert$codec.$$===undefined){
m$1.initTypeProto(CumulativeConvert$codec,'ceylon.buffer.codec::CumulativeConvert',m$1.Basic);
(function(cumulativeConvert$){
m$1.atr$(cumulativeConvert$,'$d6k2li$lj',function(){return this.$d6k2li$lj_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Callable,a:{Return$Callable:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:'ToSingle$CumulativeConvert',FromSingle$PieceConvert:'FromSingle$CumulativeConvert'}},Arguments$Callable:{t:'T',l:[{t:ErrorStrategy$codec}]}}},$cont:CumulativeConvert$codec,d:['ceylon.buffer.codec','CumulativeConvert','$at','converter$j9f2jc']};});
m$1.atr$(cumulativeConvert$,'$d6k2li$lk',function(){return this.$d6k2li$lk_;},undefined,function(){return{mod:$CCMM$,$t:{t:ErrorStrategy$codec},$cont:CumulativeConvert$codec,d:['ceylon.buffer.codec','CumulativeConvert','$at','error$3sl85s']};});
m$1.atr$(cumulativeConvert$,'$d6k2li$ll',function(){return this.$d6k2li$ll_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Callable,a:{Return$Callable:'ToMutable$CumulativeConvert',Arguments$Callable:{t:'T',l:[{t:m$1.Integer}]}}},$cont:CumulativeConvert$codec,d:['ceylon.buffer.codec','CumulativeConvert','$at','sizeOf$jm0egw']};});
m$1.atr$(cumulativeConvert$,'$d6k2li$lm',function(){return this.$d6k2li$lm_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:CumulativeConvert$codec,d:['ceylon.buffer.codec','CumulativeConvert','$at','inputSize$jvxoqj']};});
m$1.atr$(cumulativeConvert$,'$d6k2li$ln',function(){return this.$d6k2li$ln_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:CumulativeConvert$codec,d:['ceylon.buffer.codec','CumulativeConvert','$at','growthFactor$p0z836']};});
m$1.atr$(cumulativeConvert$,'$d6k2li$lo',function(){return this.$d6k2li$lo_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Integer},Arguments$Callable:{t:'T',l:[{t:m$1.Integer}]}}},$cont:CumulativeConvert$codec,d:['ceylon.buffer.codec','CumulativeConvert','$at','averageSize$tqq6s6']};});
m$1.atr$(cumulativeConvert$,'$d6k2li$lp',function(){return this.$d6k2li$lp_;},undefined,function(){return{mod:$CCMM$,$t:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:'ToSingle$CumulativeConvert',FromSingle$PieceConvert:'FromSingle$CumulativeConvert'}},$cont:CumulativeConvert$codec,d:['ceylon.buffer.codec','CumulativeConvert','$at','pieceConverter$q3tx2u']};});
m$1.atr$(cumulativeConvert$,'$d6k2li$lq',function(){return this.$d6k2li$lq_;},undefined,function(){return{mod:$CCMM$,$t:'ToMutable$CumulativeConvert',$cont:CumulativeConvert$codec,d:['ceylon.buffer.codec','CumulativeConvert','$at','output$l7clb3']};});
cumulativeConvert$.$d6k2li$ls=function($lt){
var cumulativeConvert$=this;
if(!cumulativeConvert$.$d6k2li$lq.hasAvailable){
cumulativeConvert$.$d6k2li$lq.resize(($lu=m$1.sarg$(function($lv){switch($lv){case 0:return m$1.Float(cumulativeConvert$.$d6k2li$lq.capacity*cumulativeConvert$.$d6k2li$ln);case 1:return m$1.Float(64.0);}return m$1.finished();},undefined,{}),m$1.max($lu,{Absent$max:{t:m$1.Nothing},Value$max:{t:m$1.Float}})).integer,true);
var $lu;
}
cumulativeConvert$.$d6k2li$lq.put($lt);
};cumulativeConvert$.$d6k2li$ls.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'ToSingle$CumulativeConvert'}],$cont:CumulativeConvert$codec,d:['ceylon.buffer.codec','CumulativeConvert','$m','add$gngmgx']};};
cumulativeConvert$.more=function($lw){
var cumulativeConvert$=this;
$lw.each(m$1.jsc$2((function($lx){return cumulativeConvert$.$d6k2li$lp.more($lx).each(m$1.jsc$2(m$1.jsc$3(cumulativeConvert$,cumulativeConvert$.$d6k2li$ls),[{nm:'element',mt:'prm',$t:cumulativeConvert$.$$targs$$.ToSingle$CumulativeConvert}],{FromSingle$CumulativeConvert:cumulativeConvert$.$$targs$$.FromSingle$CumulativeConvert,FromImmutable$CumulativeConvert:cumulativeConvert$.$$targs$$.FromImmutable$CumulativeConvert,ToMutable$CumulativeConvert:cumulativeConvert$.$$targs$$.ToMutable$CumulativeConvert,ToSingle$CumulativeConvert:cumulativeConvert$.$$targs$$.ToSingle$CumulativeConvert}));
}),[{nm:'inputElement',mt:'prm',$t:cumulativeConvert$.$$targs$$.FromSingle$CumulativeConvert}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([cumulativeConvert$.$$targs$$.FromSingle$CumulativeConvert])}));
};cumulativeConvert$.more.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'input',mt:'prm',$t:'FromImmutable$CumulativeConvert'}],$cont:CumulativeConvert$codec,pa:1,d:['ceylon.buffer.codec','CumulativeConvert','$m','more']};};
cumulativeConvert$.done=function(){
var cumulativeConvert$=this;
cumulativeConvert$.$d6k2li$lp.done().each(m$1.jsc$2(m$1.jsc$3(cumulativeConvert$,cumulativeConvert$.$d6k2li$ls),[{nm:'element',mt:'prm',$t:cumulativeConvert$.$$targs$$.ToSingle$CumulativeConvert}],{FromSingle$CumulativeConvert:cumulativeConvert$.$$targs$$.FromSingle$CumulativeConvert,FromImmutable$CumulativeConvert:cumulativeConvert$.$$targs$$.FromImmutable$CumulativeConvert,ToMutable$CumulativeConvert:cumulativeConvert$.$$targs$$.ToMutable$CumulativeConvert,ToSingle$CumulativeConvert:cumulativeConvert$.$$targs$$.ToSingle$CumulativeConvert}));
cumulativeConvert$.$d6k2li$lq.flip();
return cumulativeConvert$.$d6k2li$lq;
};cumulativeConvert$.done.$crtmm$=function(){return{mod:$CCMM$,$t:'ToMutable$CumulativeConvert',ps:[],$cont:CumulativeConvert$codec,pa:1,d:['ceylon.buffer.codec','CumulativeConvert','$m','done']};};
cumulativeConvert$.toString=function(){return this.string.valueOf();};
})(CumulativeConvert$codec.$$.prototype);
}
return CumulativeConvert$codec;
}
ex$.$init$CumulativeConvert$codec=$init$CumulativeConvert$codec;$init$CumulativeConvert$codec();
function IncrementalCodec$codec($$targs$$,incrementalCodec$){
m$1.set_type_args(incrementalCodec$,$$targs$$,IncrementalCodec$codec);
StatelessCodec$codec({FromImmutable$StatelessCodec:$$targs$$.FromImmutable$IncrementalCodec,ToImmutable$StatelessCodec:$$targs$$.ToImmutable$IncrementalCodec,ToMutable$StatelessCodec:$$targs$$.ToMutable$IncrementalCodec,FromSingle$StatelessCodec:$$targs$$.FromSingle$IncrementalCodec,FromMutable$StatelessCodec:$$targs$$.FromMutable$IncrementalCodec,ToSingle$StatelessCodec:$$targs$$.ToSingle$IncrementalCodec},incrementalCodec$);
incrementalCodec$.pieceEncoder$defs$error=function($ly){return strict$codec();};
incrementalCodec$.pieceDecoder$defs$error=function($lz){return strict$codec();};
incrementalCodec$.cumulativeEncoder$defs$inputSize=function($m0,$m1,$m2){return null;};
incrementalCodec$.cumulativeEncoder$defs$growthFactor=function($m0,$m1,$m2){return (1.5);};
incrementalCodec$.cumulativeEncoder$defs$error=function($m0,$m1,$m2){return strict$codec();};
incrementalCodec$.cumulativeDecoder$defs$inputSize=function($m3,$m4,$m5){return null;};
incrementalCodec$.cumulativeDecoder$defs$growthFactor=function($m3,$m4,$m5){return (1.5);};
incrementalCodec$.cumulativeDecoder$defs$error=function($m3,$m4,$m5){return strict$codec();};
}
IncrementalCodec$codec.$crtmm$=function(){return{mod:$CCMM$,tp:{ToMutable$IncrementalCodec:{sts:[{t:Buffer,a:{Element$Buffer:'ToSingle$IncrementalCodec'}}]},ToImmutable$IncrementalCodec:{sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'ToSingle$IncrementalCodec'}}]},ToSingle$IncrementalCodec:{},FromMutable$IncrementalCodec:{sts:[{t:Buffer,a:{Element$Buffer:'FromSingle$IncrementalCodec'}}]},FromImmutable$IncrementalCodec:{sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'FromSingle$IncrementalCodec'}}]},FromSingle$IncrementalCodec:{}},sts:[{t:StatelessCodec$codec,a:{FromImmutable$StatelessCodec:'FromImmutable$IncrementalCodec',ToImmutable$StatelessCodec:'ToImmutable$IncrementalCodec',ToMutable$StatelessCodec:'ToMutable$IncrementalCodec',FromSingle$StatelessCodec:'FromSingle$IncrementalCodec',FromMutable$StatelessCodec:'FromMutable$IncrementalCodec',ToSingle$StatelessCodec:'ToSingle$IncrementalCodec'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:IncrementalCodec')];},d:['ceylon.buffer.codec','IncrementalCodec']};};
ex$.IncrementalCodec$codec=IncrementalCodec$codec;
function $init$IncrementalCodec$codec(){
if(IncrementalCodec$codec.$$===undefined){
m$1.initTypeProtoI(IncrementalCodec$codec,'ceylon.buffer.codec::IncrementalCodec',$init$StatelessCodec$codec());
(function(incrementalCodec$){
incrementalCodec$.encodeBid={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'FromSingle$IncrementalCodec'}}}],$cont:IncrementalCodec$codec,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:IncrementalCodec:$m:encodeBid')];},d:['ceylon.buffer.codec','IncrementalCodec','$m','encodeBid']};}};incrementalCodec$.decodeBid={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'ToSingle$IncrementalCodec'}}}],$cont:IncrementalCodec$codec,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:IncrementalCodec:$m:decodeBid')];},d:['ceylon.buffer.codec','IncrementalCodec','$m','decodeBid']};}};incrementalCodec$.pieceEncoder={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:'ToSingle$IncrementalCodec',FromSingle$PieceConvert:'FromSingle$IncrementalCodec'}},ps:[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:IncrementalCodec$codec,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:IncrementalCodec:$m:pieceEncoder'),m$1.$_throws("EncodeException","When an error is encountered and [[error]] == [[strict]]")];},d:['ceylon.buffer.codec','IncrementalCodec','$m','pieceEncoder']};}};incrementalCodec$.pieceDecoder={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:'FromSingle$IncrementalCodec',FromSingle$PieceConvert:'ToSingle$IncrementalCodec'}},ps:[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:IncrementalCodec$codec,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:IncrementalCodec:$m:pieceDecoder'),m$1.$_throws("DecodeException","When an error is encountered and [[error]] == [[strict]]")];},d:['ceylon.buffer.codec','IncrementalCodec','$m','pieceDecoder']};}};incrementalCodec$.chunkEncoder$defs$error=function($m6){var incrementalCodec$=this;
return strict$codec();};
incrementalCodec$.chunkEncoder=function($m6){var incrementalCodec$=this;
if($m6===undefined){$m6=strict$codec();}
return ChunkConvert$codec(m$1.jsc$2(m$1.jsc$3(incrementalCodec$,incrementalCodec$.pieceEncoder),[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],{FromMutable$IncrementalCodec:incrementalCodec$.$$targs$$.FromMutable$IncrementalCodec,FromSingle$IncrementalCodec:incrementalCodec$.$$targs$$.FromSingle$IncrementalCodec,ToMutable$IncrementalCodec:incrementalCodec$.$$targs$$.ToMutable$IncrementalCodec,ToImmutable$IncrementalCodec:incrementalCodec$.$$targs$$.ToImmutable$IncrementalCodec,ToSingle$IncrementalCodec:incrementalCodec$.$$targs$$.ToSingle$IncrementalCodec,FromImmutable$IncrementalCodec:incrementalCodec$.$$targs$$.FromImmutable$IncrementalCodec}),$m6,{FromSingle$ChunkConvert:incrementalCodec$.$$targs$$.FromSingle$IncrementalCodec,ToMutable$ChunkConvert:incrementalCodec$.$$targs$$.ToMutable$IncrementalCodec,ToSingle$ChunkConvert:incrementalCodec$.$$targs$$.ToSingle$IncrementalCodec});
};
incrementalCodec$.chunkEncoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ChunkConvert$codec,a:{ToMutable$ChunkConvert:'ToMutable$IncrementalCodec',FromSingle$ChunkConvert:'FromSingle$IncrementalCodec',ToSingle$ChunkConvert:'ToSingle$IncrementalCodec'}},ps:[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:IncrementalCodec$codec,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:IncrementalCodec:$m:chunkEncoder'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.buffer.codec'),EncodeException$codec),"When an error is encountered and [[error]] == [[strict]]")];},d:['ceylon.buffer.codec','IncrementalCodec','$m','chunkEncoder']};};
incrementalCodec$.chunkDecoder$defs$error=function($m7){var incrementalCodec$=this;
return strict$codec();};
incrementalCodec$.chunkDecoder=function($m7){var incrementalCodec$=this;
if($m7===undefined){$m7=strict$codec();}
return ChunkConvert$codec(m$1.jsc$2(m$1.jsc$3(incrementalCodec$,incrementalCodec$.pieceDecoder),[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],{FromMutable$IncrementalCodec:incrementalCodec$.$$targs$$.FromMutable$IncrementalCodec,FromSingle$IncrementalCodec:incrementalCodec$.$$targs$$.FromSingle$IncrementalCodec,ToMutable$IncrementalCodec:incrementalCodec$.$$targs$$.ToMutable$IncrementalCodec,ToImmutable$IncrementalCodec:incrementalCodec$.$$targs$$.ToImmutable$IncrementalCodec,ToSingle$IncrementalCodec:incrementalCodec$.$$targs$$.ToSingle$IncrementalCodec,FromImmutable$IncrementalCodec:incrementalCodec$.$$targs$$.FromImmutable$IncrementalCodec}),$m7,{FromSingle$ChunkConvert:incrementalCodec$.$$targs$$.ToSingle$IncrementalCodec,ToMutable$ChunkConvert:incrementalCodec$.$$targs$$.FromMutable$IncrementalCodec,ToSingle$ChunkConvert:incrementalCodec$.$$targs$$.FromSingle$IncrementalCodec});
};
incrementalCodec$.chunkDecoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ChunkConvert$codec,a:{ToMutable$ChunkConvert:'FromMutable$IncrementalCodec',FromSingle$ChunkConvert:'ToSingle$IncrementalCodec',ToSingle$ChunkConvert:'FromSingle$IncrementalCodec'}},ps:[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:IncrementalCodec$codec,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:IncrementalCodec:$m:chunkDecoder'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.buffer.codec'),DecodeException$codec),"When an error is encountered and [[error]] == [[strict]]")];},d:['ceylon.buffer.codec','IncrementalCodec','$m','chunkDecoder']};};
incrementalCodec$.cumulativeEncoder={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:CumulativeConvert$codec,a:{FromSingle$CumulativeConvert:'FromSingle$IncrementalCodec',FromImmutable$CumulativeConvert:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'FromSingle$IncrementalCodec'}},ToMutable$CumulativeConvert:'ToMutable$IncrementalCodec',ToSingle$CumulativeConvert:'ToSingle$IncrementalCodec'}},ps:[{nm:'inputSize',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:IncrementalCodec$codec,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:IncrementalCodec:$m:cumulativeEncoder')];},d:['ceylon.buffer.codec','IncrementalCodec','$m','cumulativeEncoder']};}};incrementalCodec$.cumulativeDecoder={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:CumulativeConvert$codec,a:{FromSingle$CumulativeConvert:'ToSingle$IncrementalCodec',FromImmutable$CumulativeConvert:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'ToSingle$IncrementalCodec'}},ToMutable$CumulativeConvert:'FromMutable$IncrementalCodec',ToSingle$CumulativeConvert:'FromSingle$IncrementalCodec'}},ps:[{nm:'inputSize',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:IncrementalCodec$codec,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:IncrementalCodec:$m:cumulativeDecoder')];},d:['ceylon.buffer.codec','IncrementalCodec','$m','cumulativeDecoder']};}};incrementalCodec$.toString=function(){return this.string.valueOf();};
})(IncrementalCodec$codec.$$.prototype);
}
return IncrementalCodec$codec;
}
ex$.$init$IncrementalCodec$codec=$init$IncrementalCodec$codec;$init$IncrementalCodec$codec();
function ConvertException$codec($d6k2li$m8,$d6k2li$m9,convertException$){
$init$ConvertException$codec();
if(convertException$===undefined)convertException$=new ConvertException$codec.$$;
if($d6k2li$m8===undefined){$d6k2li$m8=$init$ConvertException$codec().$defs$description(convertException$,$d6k2li$m9);}
convertException$.$d6k2li$m8_=$d6k2li$m8;
if($d6k2li$m9===undefined){$d6k2li$m9=$init$ConvertException$codec().$defs$cause(convertException$,$d6k2li$m8);}
convertException$.$d6k2li$m9_=$d6k2li$m9;
m$1.Exception($d6k2li$m8,$d6k2li$m9,convertException$);
return convertException$;
}
ConvertException$codec.$defs$description=function(convertException$,$d6k2li$m9){return null};ConvertException$codec.$defs$cause=function(convertException$,$d6k2li$m8){return null};ConvertException$codec.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Exception},ps:[{nm:'description',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'cause',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]}}],pa:1,an:function(){return[m$1.doc("Thrown by failed conversion operations")];},d:['ceylon.buffer.codec','ConvertException']};};
ex$.ConvertException$codec=ConvertException$codec;
function $init$ConvertException$codec(){
if(ConvertException$codec.$$===undefined){
m$1.initTypeProto(ConvertException$codec,'ceylon.buffer.codec::ConvertException',m$1.Exception);
(function(convertException$){
m$1.atr$(convertException$,'$d6k2li$m8',function(){return this.$d6k2li$m8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:ConvertException$codec,d:['ceylon.buffer.codec','ConvertException','$at','description$yegb8g']};});
m$1.atr$(convertException$,'$d6k2li$m9',function(){return this.$d6k2li$m9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]},$cont:ConvertException$codec,d:['ceylon.buffer.codec','ConvertException','$at','cause$lsqmf9']};});
convertException$.toString=function(){return this.string.valueOf();};
})(ConvertException$codec.$$.prototype);
}
return ConvertException$codec;
}
ex$.$init$ConvertException$codec=$init$ConvertException$codec;$init$ConvertException$codec();
function EncodeException$codec($d6k2li$ma,$d6k2li$mb,encodeException$){
$init$EncodeException$codec();
if(encodeException$===undefined)encodeException$=new EncodeException$codec.$$;
if($d6k2li$ma===undefined){$d6k2li$ma=$init$EncodeException$codec().$defs$description(encodeException$,$d6k2li$mb);}
encodeException$.$d6k2li$ma_=$d6k2li$ma;
if($d6k2li$mb===undefined){$d6k2li$mb=$init$EncodeException$codec().$defs$cause(encodeException$,$d6k2li$ma);}
encodeException$.$d6k2li$mb_=$d6k2li$mb;
ConvertException$codec($d6k2li$ma,$d6k2li$mb,encodeException$);
return encodeException$;
}
EncodeException$codec.$defs$description=function(encodeException$,$d6k2li$mb){return null};EncodeException$codec.$defs$cause=function(encodeException$,$d6k2li$ma){return null};EncodeException$codec.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ConvertException$codec},ps:[{nm:'description',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'cause',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]}}],pa:1,an:function(){return[m$1.doc("Thrown by failed encode operations")];},d:['ceylon.buffer.codec','EncodeException']};};
ex$.EncodeException$codec=EncodeException$codec;
function $init$EncodeException$codec(){
if(EncodeException$codec.$$===undefined){
m$1.initTypeProto(EncodeException$codec,'ceylon.buffer.codec::EncodeException',$init$ConvertException$codec());
(function(encodeException$){
m$1.atr$(encodeException$,'$d6k2li$ma',function(){return this.$d6k2li$ma_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:EncodeException$codec,d:['ceylon.buffer.codec','EncodeException','$at','description$209ldn']};});
m$1.atr$(encodeException$,'$d6k2li$mb',function(){return this.$d6k2li$mb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]},$cont:EncodeException$codec,d:['ceylon.buffer.codec','EncodeException','$at','cause$gu6pp2']};});
encodeException$.toString=function(){return this.string.valueOf();};
})(EncodeException$codec.$$.prototype);
}
return EncodeException$codec;
}
ex$.$init$EncodeException$codec=$init$EncodeException$codec;$init$EncodeException$codec();
function DecodeException$codec($d6k2li$mc,$d6k2li$md,decodeException$){
$init$DecodeException$codec();
if(decodeException$===undefined)decodeException$=new DecodeException$codec.$$;
if($d6k2li$mc===undefined){$d6k2li$mc=$init$DecodeException$codec().$defs$description(decodeException$,$d6k2li$md);}
decodeException$.$d6k2li$mc_=$d6k2li$mc;
if($d6k2li$md===undefined){$d6k2li$md=$init$DecodeException$codec().$defs$cause(decodeException$,$d6k2li$mc);}
decodeException$.$d6k2li$md_=$d6k2li$md;
ConvertException$codec($d6k2li$mc,$d6k2li$md,decodeException$);
return decodeException$;
}
DecodeException$codec.$defs$description=function(decodeException$,$d6k2li$md){return null};DecodeException$codec.$defs$cause=function(decodeException$,$d6k2li$mc){return null};DecodeException$codec.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ConvertException$codec},ps:[{nm:'description',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'cause',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]}}],pa:1,an:function(){return[m$1.doc("Thrown by failed decode operations")];},d:['ceylon.buffer.codec','DecodeException']};};
ex$.DecodeException$codec=DecodeException$codec;
function $init$DecodeException$codec(){
if(DecodeException$codec.$$===undefined){
m$1.initTypeProto(DecodeException$codec,'ceylon.buffer.codec::DecodeException',$init$ConvertException$codec());
(function(decodeException$){
m$1.atr$(decodeException$,'$d6k2li$mc',function(){return this.$d6k2li$mc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:DecodeException$codec,d:['ceylon.buffer.codec','DecodeException','$at','description$igo2ct']};});
m$1.atr$(decodeException$,'$d6k2li$md',function(){return this.$d6k2li$md_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]},$cont:DecodeException$codec,d:['ceylon.buffer.codec','DecodeException','$at','cause$3mqy1e']};});
decodeException$.toString=function(){return this.string.valueOf();};
})(DecodeException$codec.$$.prototype);
}
return DecodeException$codec;
}
ex$.$init$DecodeException$codec=$init$DecodeException$codec;$init$DecodeException$codec();
function ErrorStrategy$codec(errorStrategy$){
$init$ErrorStrategy$codec();
if(errorStrategy$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.buffer.codec::ErrorStrategy"),'?','?')
return errorStrategy$;
}
ErrorStrategy$codec.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getStrict$codec,$prop$getIgnore$codec,$prop$getReset$codec],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:ErrorStrategy')];},d:['ceylon.buffer.codec','ErrorStrategy']};};
ex$.ErrorStrategy$codec=ErrorStrategy$codec;
function $init$ErrorStrategy$codec(){
if(ErrorStrategy$codec.$$===undefined){
m$1.initTypeProto(ErrorStrategy$codec,'ceylon.buffer.codec::ErrorStrategy',m$1.Basic);
(function(errorStrategy$){
errorStrategy$.toString=function(){return this.string.valueOf();};
})(ErrorStrategy$codec.$$.prototype);
}
return ErrorStrategy$codec;
}
ex$.$init$ErrorStrategy$codec=$init$ErrorStrategy$codec;$init$ErrorStrategy$codec();
function $me$codec(){
var strict$=new $me$codec.$$;ErrorStrategy$codec(strict$);
return strict$;
};$me$codec.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ErrorStrategy$codec},d:['ceylon.buffer.codec','strict']};};
function $init$strict$codec(){
if($me$codec.$$===undefined){
m$1.initTypeProto($me$codec,'ceylon.buffer.codec::strict',$init$ErrorStrategy$codec());
(function(strict$){
strict$.toString=function(){return this.string.valueOf();};
})($me$codec.$$.prototype);
}
return $me$codec;
}
ex$.$init$strict$codec=$init$strict$codec;$init$strict$codec();var $mg;
function strict$codec(){
if($mg===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'strict\' before it was set"),'26:0-27:46','StatelessCodec.ceylon');
if($mg===undefined){$mg=m$1.INIT$;$mg=$init$strict$codec()();$mg.$crtmm$=strict$codec.$crtmm$;}
return $mg;
}
ex$.strict$codec=strict$codec;
strict$codec.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$strict$codec()},pa:1,an:function(){return[m$1.doc("Throw a [[ConvertException]]")];},d:['ceylon.buffer.codec','strict']};};
$prop$getStrict$codec=strict$codec;
ex$.$prop$getStrict$codec=$prop$getStrict$codec;
function $mh$codec(){
var ignore$=new $mh$codec.$$;ErrorStrategy$codec(ignore$);
return ignore$;
};$mh$codec.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ErrorStrategy$codec},d:['ceylon.buffer.codec','ignore']};};
function $init$ignore$codec(){
if($mh$codec.$$===undefined){
m$1.initTypeProto($mh$codec,'ceylon.buffer.codec::ignore',$init$ErrorStrategy$codec());
(function(ignore$){
ignore$.toString=function(){return this.string.valueOf();};
})($mh$codec.$$.prototype);
}
return $mh$codec;
}
ex$.$init$ignore$codec=$init$ignore$codec;$init$ignore$codec();var $mj;
function ignore$codec(){
if($mj===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'ignore\' before it was set"),'28:0-29:46','StatelessCodec.ceylon');
if($mj===undefined){$mj=m$1.INIT$;$mj=$init$ignore$codec()();$mj.$crtmm$=ignore$codec.$crtmm$;}
return $mj;
}
ex$.ignore$codec=ignore$codec;
ignore$codec.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$ignore$codec()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:ignore')];},d:['ceylon.buffer.codec','ignore']};};
$prop$getIgnore$codec=ignore$codec;
ex$.$prop$getIgnore$codec=$prop$getIgnore$codec;
function $mk$codec(){
var reset$=new $mk$codec.$$;ErrorStrategy$codec(reset$);
return reset$;
};$mk$codec.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ErrorStrategy$codec},d:['ceylon.buffer.codec','reset']};};
function $init$reset$codec(){
if($mk$codec.$$===undefined){
m$1.initTypeProto($mk$codec,'ceylon.buffer.codec::reset',$init$ErrorStrategy$codec());
(function(reset$){
reset$.toString=function(){return this.string.valueOf();};
})($mk$codec.$$.prototype);
}
return $mk$codec;
}
ex$.$init$reset$codec=$init$reset$codec;$init$reset$codec();var $mm;
function reset$codec(){
if($mm===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'reset\' before it was set"),'30:0-31:45','StatelessCodec.ceylon');
if($mm===undefined){$mm=m$1.INIT$;$mm=$init$reset$codec()();$mm.$crtmm$=reset$codec.$crtmm$;}
return $mm;
}
ex$.reset$codec=reset$codec;
reset$codec.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$reset$codec()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:reset')];},d:['ceylon.buffer.codec','reset']};};
$prop$getReset$codec=reset$codec;
ex$.$prop$getReset$codec=$prop$getReset$codec;
function StatelessCodec$codec($$targs$$,statelessCodec$){
m$1.set_type_args(statelessCodec$,$$targs$$,StatelessCodec$codec);
Codec$codec(statelessCodec$);
statelessCodec$.encode$defs$error=function($mn,$mo){return strict$codec();};
statelessCodec$.decode$defs$error=function($mp,$mq){return strict$codec();};
statelessCodec$.encodeBuffer$defs$error=function($mr,$ms){return strict$codec();};
statelessCodec$.decodeBuffer$defs$error=function($mt,$mu){return strict$codec();};
}
StatelessCodec$codec.$crtmm$=function(){return{mod:$CCMM$,tp:{ToMutable$StatelessCodec:{sts:[{t:Buffer,a:{Element$Buffer:'ToSingle$StatelessCodec'}}]},ToImmutable$StatelessCodec:{sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'ToSingle$StatelessCodec'}}]},ToSingle$StatelessCodec:{},FromMutable$StatelessCodec:{sts:[{t:Buffer,a:{Element$Buffer:'FromSingle$StatelessCodec'}}]},FromImmutable$StatelessCodec:{sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'FromSingle$StatelessCodec'}}]},FromSingle$StatelessCodec:{}},sts:[{t:Codec$codec}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:StatelessCodec')];},d:['ceylon.buffer.codec','StatelessCodec']};};
ex$.StatelessCodec$codec=StatelessCodec$codec;
function $init$StatelessCodec$codec(){
if(StatelessCodec$codec.$$===undefined){
m$1.initTypeProtoI(StatelessCodec$codec,'ceylon.buffer.codec::StatelessCodec',$init$Codec$codec());
(function(statelessCodec$){
statelessCodec$.encode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'ToImmutable$StatelessCodec',ps:[{nm:'input',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'FromSingle$StatelessCodec'}}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:StatelessCodec$codec,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:StatelessCodec:$m:encode'),m$1.$_throws("EncodeException","When an error is encountered and [[error]] == [[strict]]")];},d:['ceylon.buffer.codec','StatelessCodec','$m','encode']};}};statelessCodec$.decode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'FromImmutable$StatelessCodec',ps:[{nm:'input',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'ToSingle$StatelessCodec'}}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:StatelessCodec$codec,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:StatelessCodec:$m:decode'),m$1.$_throws("DecodeException","When an error is encountered and [[error]] == [[strict]]")];},d:['ceylon.buffer.codec','StatelessCodec','$m','decode']};}};statelessCodec$.encodeBuffer={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'ToMutable$StatelessCodec',ps:[{nm:'input',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'FromSingle$StatelessCodec'}}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:StatelessCodec$codec,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:StatelessCodec:$m:encodeBuffer'),m$1.$_throws("EncodeException","When an error is encountered and [[error]] == [[strict]]")];},d:['ceylon.buffer.codec','StatelessCodec','$m','encodeBuffer']};}};statelessCodec$.decodeBuffer={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'FromMutable$StatelessCodec',ps:[{nm:'input',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'ToSingle$StatelessCodec'}}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:StatelessCodec$codec,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:StatelessCodec:$m:decodeBuffer'),m$1.$_throws("DecodeException","When an error is encountered and [[error]] == [[strict]]")];},d:['ceylon.buffer.codec','StatelessCodec','$m','decodeBuffer']};}};statelessCodec$.toString=function(){return this.string.valueOf();};
})(StatelessCodec$codec.$$.prototype);
}
return StatelessCodec$codec;
}
ex$.$init$StatelessCodec$codec=$init$StatelessCodec$codec;$init$StatelessCodec$codec();
function convertBuffer$codec($mv,$mw,$mx,$my,$mz,$n0,$uxt19r$){
var $n1=m$1.is$($mv,{t:m$1.List,a:{Element$List:{t:m$1.Anything}}});
var $n2=($n1?$mz($mv.size):(256));
var $n3=$my($n2);
function $n4($n5){
if(!$n3.hasAvailable){
var $n6=($n1?$n0($mv.size):m$1.Float($n3.capacity*(1.5)).integer);
$n3.resize($n6,true);
}
$n3.put($n5);
};$n4.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:$uxt19r$.To$convertBuffer}],$cont:convertBuffer$codec,d:['ceylon.buffer.codec','convertBuffer','$m','add$wcpndl']};};
var $n7=$mx($mw);
$mv.each(m$1.jsc$2((function($n8){return $n7.more($n8).each(m$1.jsc$3(0,$n4));
}),[{nm:'inputElement',mt:'prm',$t:$uxt19r$.From$convertBuffer}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([$uxt19r$.From$convertBuffer])}));
$n7.done().each(m$1.jsc$3(0,$n4));
$n3.flip();
return $n3;
};convertBuffer$codec.$crtmm$=function(){return{mod:$CCMM$,$t:'Buf$convertBuffer',ps:[{nm:'input',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'From$convertBuffer'}}},{nm:'error',mt:'prm',$t:{t:ErrorStrategy$codec}},{nm:'converter',mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:'To$convertBuffer',FromSingle$PieceConvert:'From$convertBuffer'}},Arguments$Callable:{t:'T',l:[{t:ErrorStrategy$codec}]}}}},{nm:'ofSize',mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:'Buf$convertBuffer',Arguments$Callable:{t:'T',l:[{t:m$1.Integer}]}}}},{nm:'averageSize',mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Integer},Arguments$Callable:{t:'T',l:[{t:m$1.Integer}]}}}},{nm:'maximumSize',mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Integer},Arguments$Callable:{t:'T',l:[{t:m$1.Integer}]}}}}],tp:{Buf$convertBuffer:{sts:[{t:Buffer,a:{Element$Buffer:'To$convertBuffer'}}]},To$convertBuffer:{},From$convertBuffer:{}},d:['ceylon.buffer.codec','convertBuffer']};};
function ByteToByteCodec$codec(byteToByteCodec$){
IncrementalCodec$codec({FromMutable$IncrementalCodec:{t:ByteBuffer},FromSingle$IncrementalCodec:{t:m$1.Byte},ToMutable$IncrementalCodec:{t:ByteBuffer},FromImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ToSingle$IncrementalCodec:{t:m$1.Byte},ToImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}}},byteToByteCodec$);
}
ByteToByteCodec$codec.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:IncrementalCodec$codec,a:{FromMutable$IncrementalCodec:{t:ByteBuffer},FromSingle$IncrementalCodec:{t:m$1.Byte},ToMutable$IncrementalCodec:{t:ByteBuffer},FromImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ToSingle$IncrementalCodec:{t:m$1.Byte},ToImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:ByteToByteCodec')];},d:['ceylon.buffer.codec','ByteToByteCodec']};};
ex$.ByteToByteCodec$codec=ByteToByteCodec$codec;
function $init$ByteToByteCodec$codec(){
if(ByteToByteCodec$codec.$$===undefined){
m$1.initTypeProtoI(ByteToByteCodec$codec,'ceylon.buffer.codec::ByteToByteCodec',$init$IncrementalCodec$codec());
(function(byteToByteCodec$){
byteToByteCodec$.encode=function($n9,$na){var byteToByteCodec$=this;
if($na===undefined){$na=byteToByteCodec$.encode$defs$error($n9,$na);}
return byteToByteCodec$.encodeBuffer($n9,$na).visible;
};
byteToByteCodec$.encode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:ByteToByteCodec$codec,pa:3,d:['ceylon.buffer.codec','ByteToByteCodec','$m','encode']};};
byteToByteCodec$.decode=function($nb,$nc){var byteToByteCodec$=this;
if($nc===undefined){$nc=byteToByteCodec$.decode$defs$error($nb,$nc);}
return byteToByteCodec$.decodeBuffer($nb,$nc).visible;
};
byteToByteCodec$.decode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:ByteToByteCodec$codec,pa:3,d:['ceylon.buffer.codec','ByteToByteCodec','$m','decode']};};
byteToByteCodec$.encodeBuffer=function($nd,$ne){var byteToByteCodec$=this;
if($ne===undefined){$ne=byteToByteCodec$.encodeBuffer$defs$error($nd,$ne);}
return convertBuffer$codec($nd,$ne,m$1.jsc$2(m$1.jsc$3(byteToByteCodec$,byteToByteCodec$.pieceEncoder),[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],{FromMutable$IncrementalCodec:{t:ByteBuffer},FromSingle$IncrementalCodec:{t:m$1.Byte},ToMutable$IncrementalCodec:{t:ByteBuffer},ToImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ToSingle$IncrementalCodec:{t:m$1.Byte},FromImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}}}),m$1.jsc$2(ByteBuffer$c_ofSize,[{nm:'_0',mt:'prm',$t:{t:ByteBuffer}}],{}),m$1.jsc$2(m$1.jsc$3(byteToByteCodec$,byteToByteCodec$.averageEncodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{}),m$1.jsc$2(m$1.jsc$3(byteToByteCodec$,byteToByteCodec$.maximumEncodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{}),{From$convertBuffer:{t:m$1.Byte},Buf$convertBuffer:{t:ByteBuffer},To$convertBuffer:{t:m$1.Byte}});
};
byteToByteCodec$.encodeBuffer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ByteBuffer},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:ByteToByteCodec$codec,pa:3,d:['ceylon.buffer.codec','ByteToByteCodec','$m','encodeBuffer']};};
byteToByteCodec$.decodeBuffer=function($nf,$ng){var byteToByteCodec$=this;
if($ng===undefined){$ng=byteToByteCodec$.decodeBuffer$defs$error($nf,$ng);}
return convertBuffer$codec($nf,$ng,m$1.jsc$2(m$1.jsc$3(byteToByteCodec$,byteToByteCodec$.pieceDecoder),[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],{FromMutable$IncrementalCodec:{t:ByteBuffer},FromSingle$IncrementalCodec:{t:m$1.Byte},ToMutable$IncrementalCodec:{t:ByteBuffer},ToImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ToSingle$IncrementalCodec:{t:m$1.Byte},FromImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}}}),m$1.jsc$2(ByteBuffer$c_ofSize,[{nm:'_0',mt:'prm',$t:{t:ByteBuffer}}],{}),m$1.jsc$2(m$1.jsc$3(byteToByteCodec$,byteToByteCodec$.averageDecodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{}),m$1.jsc$2(m$1.jsc$3(byteToByteCodec$,byteToByteCodec$.maximumDecodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{}),{From$convertBuffer:{t:m$1.Byte},Buf$convertBuffer:{t:ByteBuffer},To$convertBuffer:{t:m$1.Byte}});
};
byteToByteCodec$.decodeBuffer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ByteBuffer},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:ByteToByteCodec$codec,pa:3,d:['ceylon.buffer.codec','ByteToByteCodec','$m','decodeBuffer']};};
byteToByteCodec$.cumulativeEncoder=function($nh,$ni,$nj){var byteToByteCodec$=this;
if($nh===undefined){$nh=byteToByteCodec$.cumulativeEncoder$defs$inputSize($nh,$ni,$nj);}
if($ni===undefined){$ni=byteToByteCodec$.cumulativeEncoder$defs$growthFactor($nh,$ni,$nj);}
if($nj===undefined){$nj=byteToByteCodec$.cumulativeEncoder$defs$error($nh,$ni,$nj);}
return ($nk=$nj,$nl=m$1.jsc$2(m$1.jsc$3(byteToByteCodec$,byteToByteCodec$.pieceEncoder),[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],{Return$Callable:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:{t:m$1.Byte}}},Arguments$Callable:m$1.mut$([{t:m$1.Empty},m$1.mtt$([{t:ErrorStrategy$codec}])])}),$nm=$nh,$nn=m$1.jsc$2(m$1.jsc$3(byteToByteCodec$,byteToByteCodec$.averageEncodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{Return$Callable:{t:m$1.Integer},Arguments$Callable:m$1.mtt$([{t:m$1.Integer}])}),$no=m$1.jsc$2(ByteBuffer$c_ofSize,[{nm:'_0',mt:'prm',$t:{t:ByteBuffer}}],{Return$Callable:{t:ByteBuffer.$$.prototype.ofSize},Arguments$Callable:m$1.mtt$([{t:m$1.Integer}])}),$np=$ni,CumulativeConvert$codec($nl,$nk,$no,$nm,$np,$nn,{FromSingle$CumulativeConvert:{t:m$1.Byte},FromImmutable$CumulativeConvert:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}},ToMutable$CumulativeConvert:{t:ByteBuffer},ToSingle$CumulativeConvert:{t:m$1.Byte}}));
var $nk,$nl,$nm,$nn,$no,$np;
};
byteToByteCodec$.cumulativeEncoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CumulativeConvert$codec,a:{FromSingle$CumulativeConvert:{t:m$1.Byte},FromImmutable$CumulativeConvert:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}},ToMutable$CumulativeConvert:{t:ByteBuffer},ToSingle$CumulativeConvert:{t:m$1.Byte}}},ps:[{nm:'inputSize',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:ByteToByteCodec$codec,pa:3,d:['ceylon.buffer.codec','ByteToByteCodec','$m','cumulativeEncoder']};};
byteToByteCodec$.cumulativeDecoder=function($nq,$nr,$ns){var byteToByteCodec$=this;
if($nq===undefined){$nq=byteToByteCodec$.cumulativeDecoder$defs$inputSize($nq,$nr,$ns);}
if($nr===undefined){$nr=byteToByteCodec$.cumulativeDecoder$defs$growthFactor($nq,$nr,$ns);}
if($ns===undefined){$ns=byteToByteCodec$.cumulativeDecoder$defs$error($nq,$nr,$ns);}
return ($nt=$ns,$nu=m$1.jsc$2(m$1.jsc$3(byteToByteCodec$,byteToByteCodec$.pieceDecoder),[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],{Return$Callable:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:{t:m$1.Byte}}},Arguments$Callable:m$1.mut$([{t:m$1.Empty},m$1.mtt$([{t:ErrorStrategy$codec}])])}),$nv=$nq,$nw=m$1.jsc$2(m$1.jsc$3(byteToByteCodec$,byteToByteCodec$.averageDecodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{Return$Callable:{t:m$1.Integer},Arguments$Callable:m$1.mtt$([{t:m$1.Integer}])}),$nx=m$1.jsc$2(ByteBuffer$c_ofSize,[{nm:'_0',mt:'prm',$t:{t:ByteBuffer}}],{Return$Callable:{t:ByteBuffer.$$.prototype.ofSize},Arguments$Callable:m$1.mtt$([{t:m$1.Integer}])}),$ny=$nr,CumulativeConvert$codec($nu,$nt,$nx,$nv,$ny,$nw,{FromSingle$CumulativeConvert:{t:m$1.Byte},FromImmutable$CumulativeConvert:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}},ToMutable$CumulativeConvert:{t:ByteBuffer},ToSingle$CumulativeConvert:{t:m$1.Byte}}));
var $nt,$nu,$nv,$nw,$nx,$ny;
};
byteToByteCodec$.cumulativeDecoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CumulativeConvert$codec,a:{FromSingle$CumulativeConvert:{t:m$1.Byte},FromImmutable$CumulativeConvert:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}},ToMutable$CumulativeConvert:{t:ByteBuffer},ToSingle$CumulativeConvert:{t:m$1.Byte}}},ps:[{nm:'inputSize',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:ByteToByteCodec$codec,pa:3,d:['ceylon.buffer.codec','ByteToByteCodec','$m','cumulativeDecoder']};};
byteToByteCodec$.toString=function(){return this.string.valueOf();};
})(ByteToByteCodec$codec.$$.prototype);
}
return ByteToByteCodec$codec;
}
ex$.$init$ByteToByteCodec$codec=$init$ByteToByteCodec$codec;$init$ByteToByteCodec$codec();
function ByteToCharacterCodec$codec(byteToCharacterCodec$){
IncrementalCodec$codec({FromMutable$IncrementalCodec:{t:CharacterBuffer},FromSingle$IncrementalCodec:{t:m$1.Character},ToMutable$IncrementalCodec:{t:ByteBuffer},FromImmutable$IncrementalCodec:{t:m$1.$_String},ToSingle$IncrementalCodec:{t:m$1.Byte},ToImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}}},byteToCharacterCodec$);
}
ByteToCharacterCodec$codec.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:IncrementalCodec$codec,a:{FromMutable$IncrementalCodec:{t:CharacterBuffer},FromSingle$IncrementalCodec:{t:m$1.Character},ToMutable$IncrementalCodec:{t:ByteBuffer},FromImmutable$IncrementalCodec:{t:m$1.$_String},ToSingle$IncrementalCodec:{t:m$1.Byte},ToImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:ByteToCharacterCodec')];},d:['ceylon.buffer.codec','ByteToCharacterCodec']};};
ex$.ByteToCharacterCodec$codec=ByteToCharacterCodec$codec;
function $init$ByteToCharacterCodec$codec(){
if(ByteToCharacterCodec$codec.$$===undefined){
m$1.initTypeProtoI(ByteToCharacterCodec$codec,'ceylon.buffer.codec::ByteToCharacterCodec',$init$IncrementalCodec$codec());
(function(byteToCharacterCodec$){
byteToCharacterCodec$.encode=function($nz,$o0){var byteToCharacterCodec$=this;
if($o0===undefined){$o0=byteToCharacterCodec$.encode$defs$error($nz,$o0);}
return byteToCharacterCodec$.encodeBuffer($nz,$o0).visible;
};
byteToCharacterCodec$.encode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:ByteToCharacterCodec$codec,pa:3,d:['ceylon.buffer.codec','ByteToCharacterCodec','$m','encode']};};
byteToCharacterCodec$.decode=function($o1,$o2){var byteToCharacterCodec$=this;
if($o2===undefined){$o2=byteToCharacterCodec$.decode$defs$error($o1,$o2);}
return byteToCharacterCodec$.decodeBuffer($o1,$o2).string;
};
byteToCharacterCodec$.decode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:ByteToCharacterCodec$codec,pa:3,d:['ceylon.buffer.codec','ByteToCharacterCodec','$m','decode']};};
byteToCharacterCodec$.encodeBuffer=function($o3,$o4){var byteToCharacterCodec$=this;
if($o4===undefined){$o4=byteToCharacterCodec$.encodeBuffer$defs$error($o3,$o4);}
return convertBuffer$codec($o3,$o4,m$1.jsc$2(m$1.jsc$3(byteToCharacterCodec$,byteToCharacterCodec$.pieceEncoder),[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],{FromMutable$IncrementalCodec:{t:CharacterBuffer},FromSingle$IncrementalCodec:{t:m$1.Character},ToMutable$IncrementalCodec:{t:ByteBuffer},ToImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ToSingle$IncrementalCodec:{t:m$1.Byte},FromImmutable$IncrementalCodec:{t:m$1.$_String}}),m$1.jsc$2(ByteBuffer$c_ofSize,[{nm:'_0',mt:'prm',$t:{t:ByteBuffer}}],{}),m$1.jsc$2(m$1.jsc$3(byteToCharacterCodec$,byteToCharacterCodec$.averageEncodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{}),m$1.jsc$2(m$1.jsc$3(byteToCharacterCodec$,byteToCharacterCodec$.maximumEncodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{}),{From$convertBuffer:{t:m$1.Character},Buf$convertBuffer:{t:ByteBuffer},To$convertBuffer:{t:m$1.Byte}});
};
byteToCharacterCodec$.encodeBuffer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ByteBuffer},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:ByteToCharacterCodec$codec,pa:3,d:['ceylon.buffer.codec','ByteToCharacterCodec','$m','encodeBuffer']};};
byteToCharacterCodec$.decodeBuffer=function($o5,$o6){var byteToCharacterCodec$=this;
if($o6===undefined){$o6=byteToCharacterCodec$.decodeBuffer$defs$error($o5,$o6);}
return convertBuffer$codec($o5,$o6,m$1.jsc$2(m$1.jsc$3(byteToCharacterCodec$,byteToCharacterCodec$.pieceDecoder),[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],{FromMutable$IncrementalCodec:{t:CharacterBuffer},FromSingle$IncrementalCodec:{t:m$1.Character},ToMutable$IncrementalCodec:{t:ByteBuffer},ToImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ToSingle$IncrementalCodec:{t:m$1.Byte},FromImmutable$IncrementalCodec:{t:m$1.$_String}}),m$1.jsc$2(CharacterBuffer$c_ofSize,[{nm:'_0',mt:'prm',$t:{t:CharacterBuffer}}],{}),m$1.jsc$2(m$1.jsc$3(byteToCharacterCodec$,byteToCharacterCodec$.averageDecodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{}),m$1.jsc$2(m$1.jsc$3(byteToCharacterCodec$,byteToCharacterCodec$.maximumDecodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{}),{From$convertBuffer:{t:m$1.Byte},Buf$convertBuffer:{t:CharacterBuffer},To$convertBuffer:{t:m$1.Character}});
};
byteToCharacterCodec$.decodeBuffer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CharacterBuffer},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:ByteToCharacterCodec$codec,pa:3,d:['ceylon.buffer.codec','ByteToCharacterCodec','$m','decodeBuffer']};};
byteToCharacterCodec$.cumulativeEncoder=function($o7,$o8,$o9){var byteToCharacterCodec$=this;
if($o7===undefined){$o7=byteToCharacterCodec$.cumulativeEncoder$defs$inputSize($o7,$o8,$o9);}
if($o8===undefined){$o8=byteToCharacterCodec$.cumulativeEncoder$defs$growthFactor($o7,$o8,$o9);}
if($o9===undefined){$o9=byteToCharacterCodec$.cumulativeEncoder$defs$error($o7,$o8,$o9);}
return ($oa=$o9,$ob=m$1.jsc$2(m$1.jsc$3(byteToCharacterCodec$,byteToCharacterCodec$.pieceEncoder),[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],{Return$Callable:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:{t:m$1.Character}}},Arguments$Callable:m$1.mut$([{t:m$1.Empty},m$1.mtt$([{t:ErrorStrategy$codec}])])}),$oc=$o7,$od=m$1.jsc$2(m$1.jsc$3(byteToCharacterCodec$,byteToCharacterCodec$.averageEncodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{Return$Callable:{t:m$1.Integer},Arguments$Callable:m$1.mtt$([{t:m$1.Integer}])}),$oe=m$1.jsc$2(ByteBuffer$c_ofSize,[{nm:'_0',mt:'prm',$t:{t:ByteBuffer}}],{Return$Callable:{t:ByteBuffer.$$.prototype.ofSize},Arguments$Callable:m$1.mtt$([{t:m$1.Integer}])}),$of=$o8,CumulativeConvert$codec($ob,$oa,$oe,$oc,$of,$od,{FromSingle$CumulativeConvert:{t:m$1.Character},FromImmutable$CumulativeConvert:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}},ToMutable$CumulativeConvert:{t:ByteBuffer},ToSingle$CumulativeConvert:{t:m$1.Byte}}));
var $oa,$ob,$oc,$od,$oe,$of;
};
byteToCharacterCodec$.cumulativeEncoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CumulativeConvert$codec,a:{FromSingle$CumulativeConvert:{t:m$1.Character},FromImmutable$CumulativeConvert:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}},ToMutable$CumulativeConvert:{t:ByteBuffer},ToSingle$CumulativeConvert:{t:m$1.Byte}}},ps:[{nm:'inputSize',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:ByteToCharacterCodec$codec,pa:3,d:['ceylon.buffer.codec','ByteToCharacterCodec','$m','cumulativeEncoder']};};
byteToCharacterCodec$.cumulativeDecoder=function($og,$oh,$oi){var byteToCharacterCodec$=this;
if($og===undefined){$og=byteToCharacterCodec$.cumulativeDecoder$defs$inputSize($og,$oh,$oi);}
if($oh===undefined){$oh=byteToCharacterCodec$.cumulativeDecoder$defs$growthFactor($og,$oh,$oi);}
if($oi===undefined){$oi=byteToCharacterCodec$.cumulativeDecoder$defs$error($og,$oh,$oi);}
return ($oj=$oi,$ok=m$1.jsc$2(m$1.jsc$3(byteToCharacterCodec$,byteToCharacterCodec$.pieceDecoder),[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],{Return$Callable:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Character},FromSingle$PieceConvert:{t:m$1.Byte}}},Arguments$Callable:m$1.mut$([{t:m$1.Empty},m$1.mtt$([{t:ErrorStrategy$codec}])])}),$ol=$og,$om=m$1.jsc$2(m$1.jsc$3(byteToCharacterCodec$,byteToCharacterCodec$.averageDecodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{Return$Callable:{t:m$1.Integer},Arguments$Callable:m$1.mtt$([{t:m$1.Integer}])}),$on=m$1.jsc$2(CharacterBuffer$c_ofSize,[{nm:'_0',mt:'prm',$t:{t:CharacterBuffer}}],{Return$Callable:{t:CharacterBuffer.$$.prototype.ofSize},Arguments$Callable:m$1.mtt$([{t:m$1.Integer}])}),$oo=$oh,CumulativeConvert$codec($ok,$oj,$on,$ol,$oo,$om,{FromSingle$CumulativeConvert:{t:m$1.Byte},FromImmutable$CumulativeConvert:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}},ToMutable$CumulativeConvert:{t:CharacterBuffer},ToSingle$CumulativeConvert:{t:m$1.Character}}));
var $oj,$ok,$ol,$om,$on,$oo;
};
byteToCharacterCodec$.cumulativeDecoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CumulativeConvert$codec,a:{FromSingle$CumulativeConvert:{t:m$1.Byte},FromImmutable$CumulativeConvert:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}},ToMutable$CumulativeConvert:{t:CharacterBuffer},ToSingle$CumulativeConvert:{t:m$1.Character}}},ps:[{nm:'inputSize',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:ByteToCharacterCodec$codec,pa:3,d:['ceylon.buffer.codec','ByteToCharacterCodec','$m','cumulativeDecoder']};};
byteToCharacterCodec$.toString=function(){return this.string.valueOf();};
})(ByteToCharacterCodec$codec.$$.prototype);
}
return ByteToCharacterCodec$codec;
}
ex$.$init$ByteToCharacterCodec$codec=$init$ByteToCharacterCodec$codec;$init$ByteToCharacterCodec$codec();
function CharacterToByteCodec$codec(characterToByteCodec$){
IncrementalCodec$codec({FromMutable$IncrementalCodec:{t:ByteBuffer},FromSingle$IncrementalCodec:{t:m$1.Byte},ToMutable$IncrementalCodec:{t:CharacterBuffer},FromImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ToSingle$IncrementalCodec:{t:m$1.Character},ToImmutable$IncrementalCodec:{t:m$1.$_String}},characterToByteCodec$);
}
CharacterToByteCodec$codec.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:IncrementalCodec$codec,a:{FromMutable$IncrementalCodec:{t:ByteBuffer},FromSingle$IncrementalCodec:{t:m$1.Byte},ToMutable$IncrementalCodec:{t:CharacterBuffer},FromImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ToSingle$IncrementalCodec:{t:m$1.Character},ToImmutable$IncrementalCodec:{t:m$1.$_String}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:CharacterToByteCodec')];},d:['ceylon.buffer.codec','CharacterToByteCodec']};};
ex$.CharacterToByteCodec$codec=CharacterToByteCodec$codec;
function $init$CharacterToByteCodec$codec(){
if(CharacterToByteCodec$codec.$$===undefined){
m$1.initTypeProtoI(CharacterToByteCodec$codec,'ceylon.buffer.codec::CharacterToByteCodec',$init$IncrementalCodec$codec());
(function(characterToByteCodec$){
characterToByteCodec$.encode=function($op,$oq){var characterToByteCodec$=this;
if($oq===undefined){$oq=characterToByteCodec$.encode$defs$error($op,$oq);}
return characterToByteCodec$.encodeBuffer($op,$oq).string;
};
characterToByteCodec$.encode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:CharacterToByteCodec$codec,pa:3,d:['ceylon.buffer.codec','CharacterToByteCodec','$m','encode']};};
characterToByteCodec$.decode=function($or,$os){var characterToByteCodec$=this;
if($os===undefined){$os=characterToByteCodec$.decode$defs$error($or,$os);}
return characterToByteCodec$.decodeBuffer($or,$os).visible;
};
characterToByteCodec$.decode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:CharacterToByteCodec$codec,pa:3,d:['ceylon.buffer.codec','CharacterToByteCodec','$m','decode']};};
characterToByteCodec$.encodeBuffer=function($ot,$ou){var characterToByteCodec$=this;
if($ou===undefined){$ou=characterToByteCodec$.encodeBuffer$defs$error($ot,$ou);}
return convertBuffer$codec($ot,$ou,m$1.jsc$2(m$1.jsc$3(characterToByteCodec$,characterToByteCodec$.pieceEncoder),[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],{FromMutable$IncrementalCodec:{t:ByteBuffer},FromSingle$IncrementalCodec:{t:m$1.Byte},ToMutable$IncrementalCodec:{t:CharacterBuffer},ToImmutable$IncrementalCodec:{t:m$1.$_String},ToSingle$IncrementalCodec:{t:m$1.Character},FromImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}}}),m$1.jsc$2(CharacterBuffer$c_ofSize,[{nm:'_0',mt:'prm',$t:{t:CharacterBuffer}}],{}),m$1.jsc$2(m$1.jsc$3(characterToByteCodec$,characterToByteCodec$.averageEncodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{}),m$1.jsc$2(m$1.jsc$3(characterToByteCodec$,characterToByteCodec$.maximumEncodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{}),{From$convertBuffer:{t:m$1.Byte},Buf$convertBuffer:{t:CharacterBuffer},To$convertBuffer:{t:m$1.Character}});
};
characterToByteCodec$.encodeBuffer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CharacterBuffer},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:CharacterToByteCodec$codec,pa:3,d:['ceylon.buffer.codec','CharacterToByteCodec','$m','encodeBuffer']};};
characterToByteCodec$.decodeBuffer=function($ov,$ow){var characterToByteCodec$=this;
if($ow===undefined){$ow=characterToByteCodec$.decodeBuffer$defs$error($ov,$ow);}
return convertBuffer$codec($ov,$ow,m$1.jsc$2(m$1.jsc$3(characterToByteCodec$,characterToByteCodec$.pieceDecoder),[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],{FromMutable$IncrementalCodec:{t:ByteBuffer},FromSingle$IncrementalCodec:{t:m$1.Byte},ToMutable$IncrementalCodec:{t:CharacterBuffer},ToImmutable$IncrementalCodec:{t:m$1.$_String},ToSingle$IncrementalCodec:{t:m$1.Character},FromImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}}}),m$1.jsc$2(ByteBuffer$c_ofSize,[{nm:'_0',mt:'prm',$t:{t:ByteBuffer}}],{}),m$1.jsc$2(m$1.jsc$3(characterToByteCodec$,characterToByteCodec$.averageDecodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{}),m$1.jsc$2(m$1.jsc$3(characterToByteCodec$,characterToByteCodec$.maximumDecodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{}),{From$convertBuffer:{t:m$1.Character},Buf$convertBuffer:{t:ByteBuffer},To$convertBuffer:{t:m$1.Byte}});
};
characterToByteCodec$.decodeBuffer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ByteBuffer},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:CharacterToByteCodec$codec,pa:3,d:['ceylon.buffer.codec','CharacterToByteCodec','$m','decodeBuffer']};};
characterToByteCodec$.cumulativeEncoder=function($ox,$oy,$oz){var characterToByteCodec$=this;
if($ox===undefined){$ox=characterToByteCodec$.cumulativeEncoder$defs$inputSize($ox,$oy,$oz);}
if($oy===undefined){$oy=characterToByteCodec$.cumulativeEncoder$defs$growthFactor($ox,$oy,$oz);}
if($oz===undefined){$oz=characterToByteCodec$.cumulativeEncoder$defs$error($ox,$oy,$oz);}
return ($p0=$oz,$p1=m$1.jsc$2(m$1.jsc$3(characterToByteCodec$,characterToByteCodec$.pieceEncoder),[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],{Return$Callable:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Character},FromSingle$PieceConvert:{t:m$1.Byte}}},Arguments$Callable:m$1.mut$([{t:m$1.Empty},m$1.mtt$([{t:ErrorStrategy$codec}])])}),$p2=$ox,$p3=m$1.jsc$2(m$1.jsc$3(characterToByteCodec$,characterToByteCodec$.averageEncodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{Return$Callable:{t:m$1.Integer},Arguments$Callable:m$1.mtt$([{t:m$1.Integer}])}),$p4=m$1.jsc$2(CharacterBuffer$c_ofSize,[{nm:'_0',mt:'prm',$t:{t:CharacterBuffer}}],{Return$Callable:{t:CharacterBuffer.$$.prototype.ofSize},Arguments$Callable:m$1.mtt$([{t:m$1.Integer}])}),$p5=$oy,CumulativeConvert$codec($p1,$p0,$p4,$p2,$p5,$p3,{FromSingle$CumulativeConvert:{t:m$1.Byte},FromImmutable$CumulativeConvert:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}},ToMutable$CumulativeConvert:{t:CharacterBuffer},ToSingle$CumulativeConvert:{t:m$1.Character}}));
var $p0,$p1,$p2,$p3,$p4,$p5;
};
characterToByteCodec$.cumulativeEncoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CumulativeConvert$codec,a:{FromSingle$CumulativeConvert:{t:m$1.Byte},FromImmutable$CumulativeConvert:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}},ToMutable$CumulativeConvert:{t:CharacterBuffer},ToSingle$CumulativeConvert:{t:m$1.Character}}},ps:[{nm:'inputSize',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:CharacterToByteCodec$codec,pa:3,d:['ceylon.buffer.codec','CharacterToByteCodec','$m','cumulativeEncoder']};};
characterToByteCodec$.cumulativeDecoder=function($p6,$p7,$p8){var characterToByteCodec$=this;
if($p6===undefined){$p6=characterToByteCodec$.cumulativeDecoder$defs$inputSize($p6,$p7,$p8);}
if($p7===undefined){$p7=characterToByteCodec$.cumulativeDecoder$defs$growthFactor($p6,$p7,$p8);}
if($p8===undefined){$p8=characterToByteCodec$.cumulativeDecoder$defs$error($p6,$p7,$p8);}
return ($p9=$p8,$pa=m$1.jsc$2(m$1.jsc$3(characterToByteCodec$,characterToByteCodec$.pieceDecoder),[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],{Return$Callable:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Byte},FromSingle$PieceConvert:{t:m$1.Character}}},Arguments$Callable:m$1.mut$([{t:m$1.Empty},m$1.mtt$([{t:ErrorStrategy$codec}])])}),$pb=$p6,$pc=m$1.jsc$2(m$1.jsc$3(characterToByteCodec$,characterToByteCodec$.averageDecodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{Return$Callable:{t:m$1.Integer},Arguments$Callable:m$1.mtt$([{t:m$1.Integer}])}),$pd=m$1.jsc$2(ByteBuffer$c_ofSize,[{nm:'_0',mt:'prm',$t:{t:ByteBuffer}}],{Return$Callable:{t:ByteBuffer.$$.prototype.ofSize},Arguments$Callable:m$1.mtt$([{t:m$1.Integer}])}),$pe=$p7,CumulativeConvert$codec($pa,$p9,$pd,$pb,$pe,$pc,{FromSingle$CumulativeConvert:{t:m$1.Character},FromImmutable$CumulativeConvert:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}},ToMutable$CumulativeConvert:{t:ByteBuffer},ToSingle$CumulativeConvert:{t:m$1.Byte}}));
var $p9,$pa,$pb,$pc,$pd,$pe;
};
characterToByteCodec$.cumulativeDecoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CumulativeConvert$codec,a:{FromSingle$CumulativeConvert:{t:m$1.Character},FromImmutable$CumulativeConvert:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}},ToMutable$CumulativeConvert:{t:ByteBuffer},ToSingle$CumulativeConvert:{t:m$1.Byte}}},ps:[{nm:'inputSize',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:CharacterToByteCodec$codec,pa:3,d:['ceylon.buffer.codec','CharacterToByteCodec','$m','cumulativeDecoder']};};
characterToByteCodec$.toString=function(){return this.string.valueOf();};
})(CharacterToByteCodec$codec.$$.prototype);
}
return CharacterToByteCodec$codec;
}
ex$.$init$CharacterToByteCodec$codec=$init$CharacterToByteCodec$codec;$init$CharacterToByteCodec$codec();
function CharacterToCharacterCodec$codec(characterToCharacterCodec$){
IncrementalCodec$codec({FromMutable$IncrementalCodec:{t:CharacterBuffer},FromSingle$IncrementalCodec:{t:m$1.Character},ToMutable$IncrementalCodec:{t:CharacterBuffer},FromImmutable$IncrementalCodec:{t:m$1.$_String},ToSingle$IncrementalCodec:{t:m$1.Character},ToImmutable$IncrementalCodec:{t:m$1.$_String}},characterToCharacterCodec$);
}
CharacterToCharacterCodec$codec.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:IncrementalCodec$codec,a:{FromMutable$IncrementalCodec:{t:CharacterBuffer},FromSingle$IncrementalCodec:{t:m$1.Character},ToMutable$IncrementalCodec:{t:CharacterBuffer},FromImmutable$IncrementalCodec:{t:m$1.$_String},ToSingle$IncrementalCodec:{t:m$1.Character},ToImmutable$IncrementalCodec:{t:m$1.$_String}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec:CharacterToCharacterCodec')];},d:['ceylon.buffer.codec','CharacterToCharacterCodec']};};
ex$.CharacterToCharacterCodec$codec=CharacterToCharacterCodec$codec;
function $init$CharacterToCharacterCodec$codec(){
if(CharacterToCharacterCodec$codec.$$===undefined){
m$1.initTypeProtoI(CharacterToCharacterCodec$codec,'ceylon.buffer.codec::CharacterToCharacterCodec',$init$IncrementalCodec$codec());
(function(characterToCharacterCodec$){
characterToCharacterCodec$.encode=function($pf,$pg){var characterToCharacterCodec$=this;
if($pg===undefined){$pg=characterToCharacterCodec$.encode$defs$error($pf,$pg);}
return characterToCharacterCodec$.encodeBuffer($pf,$pg).string;
};
characterToCharacterCodec$.encode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:CharacterToCharacterCodec$codec,pa:3,d:['ceylon.buffer.codec','CharacterToCharacterCodec','$m','encode']};};
characterToCharacterCodec$.decode=function($ph,$pi){var characterToCharacterCodec$=this;
if($pi===undefined){$pi=characterToCharacterCodec$.decode$defs$error($ph,$pi);}
return characterToCharacterCodec$.decodeBuffer($ph,$pi).string;
};
characterToCharacterCodec$.decode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:CharacterToCharacterCodec$codec,pa:3,d:['ceylon.buffer.codec','CharacterToCharacterCodec','$m','decode']};};
characterToCharacterCodec$.encodeBuffer=function($pj,$pk){var characterToCharacterCodec$=this;
if($pk===undefined){$pk=characterToCharacterCodec$.encodeBuffer$defs$error($pj,$pk);}
return convertBuffer$codec($pj,$pk,m$1.jsc$2(m$1.jsc$3(characterToCharacterCodec$,characterToCharacterCodec$.pieceEncoder),[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],{FromMutable$IncrementalCodec:{t:CharacterBuffer},FromSingle$IncrementalCodec:{t:m$1.Character},ToMutable$IncrementalCodec:{t:CharacterBuffer},ToImmutable$IncrementalCodec:{t:m$1.$_String},ToSingle$IncrementalCodec:{t:m$1.Character},FromImmutable$IncrementalCodec:{t:m$1.$_String}}),m$1.jsc$2(CharacterBuffer$c_ofSize,[{nm:'_0',mt:'prm',$t:{t:CharacterBuffer}}],{}),m$1.jsc$2(m$1.jsc$3(characterToCharacterCodec$,characterToCharacterCodec$.averageEncodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{}),m$1.jsc$2(m$1.jsc$3(characterToCharacterCodec$,characterToCharacterCodec$.maximumEncodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{}),{From$convertBuffer:{t:m$1.Character},Buf$convertBuffer:{t:CharacterBuffer},To$convertBuffer:{t:m$1.Character}});
};
characterToCharacterCodec$.encodeBuffer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CharacterBuffer},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:CharacterToCharacterCodec$codec,pa:3,d:['ceylon.buffer.codec','CharacterToCharacterCodec','$m','encodeBuffer']};};
characterToCharacterCodec$.decodeBuffer=function($pl,$pm){var characterToCharacterCodec$=this;
if($pm===undefined){$pm=characterToCharacterCodec$.decodeBuffer$defs$error($pl,$pm);}
return convertBuffer$codec($pl,$pm,m$1.jsc$2(m$1.jsc$3(characterToCharacterCodec$,characterToCharacterCodec$.pieceDecoder),[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],{FromMutable$IncrementalCodec:{t:CharacterBuffer},FromSingle$IncrementalCodec:{t:m$1.Character},ToMutable$IncrementalCodec:{t:CharacterBuffer},ToImmutable$IncrementalCodec:{t:m$1.$_String},ToSingle$IncrementalCodec:{t:m$1.Character},FromImmutable$IncrementalCodec:{t:m$1.$_String}}),m$1.jsc$2(CharacterBuffer$c_ofSize,[{nm:'_0',mt:'prm',$t:{t:CharacterBuffer}}],{}),m$1.jsc$2(m$1.jsc$3(characterToCharacterCodec$,characterToCharacterCodec$.averageDecodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{}),m$1.jsc$2(m$1.jsc$3(characterToCharacterCodec$,characterToCharacterCodec$.maximumDecodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{}),{From$convertBuffer:{t:m$1.Character},Buf$convertBuffer:{t:CharacterBuffer},To$convertBuffer:{t:m$1.Character}});
};
characterToCharacterCodec$.decodeBuffer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CharacterBuffer},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:CharacterToCharacterCodec$codec,pa:3,d:['ceylon.buffer.codec','CharacterToCharacterCodec','$m','decodeBuffer']};};
characterToCharacterCodec$.cumulativeEncoder=function($pn,$po,$pp){var characterToCharacterCodec$=this;
if($pn===undefined){$pn=characterToCharacterCodec$.cumulativeEncoder$defs$inputSize($pn,$po,$pp);}
if($po===undefined){$po=characterToCharacterCodec$.cumulativeEncoder$defs$growthFactor($pn,$po,$pp);}
if($pp===undefined){$pp=characterToCharacterCodec$.cumulativeEncoder$defs$error($pn,$po,$pp);}
return ($pq=$pp,$pr=m$1.jsc$2(m$1.jsc$3(characterToCharacterCodec$,characterToCharacterCodec$.pieceEncoder),[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],{Return$Callable:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Character},FromSingle$PieceConvert:{t:m$1.Character}}},Arguments$Callable:m$1.mut$([{t:m$1.Empty},m$1.mtt$([{t:ErrorStrategy$codec}])])}),$ps=$pn,$pt=m$1.jsc$2(m$1.jsc$3(characterToCharacterCodec$,characterToCharacterCodec$.averageEncodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{Return$Callable:{t:m$1.Integer},Arguments$Callable:m$1.mtt$([{t:m$1.Integer}])}),$pu=m$1.jsc$2(CharacterBuffer$c_ofSize,[{nm:'_0',mt:'prm',$t:{t:CharacterBuffer}}],{Return$Callable:{t:CharacterBuffer.$$.prototype.ofSize},Arguments$Callable:m$1.mtt$([{t:m$1.Integer}])}),$pv=$po,CumulativeConvert$codec($pr,$pq,$pu,$ps,$pv,$pt,{FromSingle$CumulativeConvert:{t:m$1.Character},FromImmutable$CumulativeConvert:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}},ToMutable$CumulativeConvert:{t:CharacterBuffer},ToSingle$CumulativeConvert:{t:m$1.Character}}));
var $pq,$pr,$ps,$pt,$pu,$pv;
};
characterToCharacterCodec$.cumulativeEncoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CumulativeConvert$codec,a:{FromSingle$CumulativeConvert:{t:m$1.Character},FromImmutable$CumulativeConvert:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}},ToMutable$CumulativeConvert:{t:CharacterBuffer},ToSingle$CumulativeConvert:{t:m$1.Character}}},ps:[{nm:'inputSize',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:CharacterToCharacterCodec$codec,pa:3,d:['ceylon.buffer.codec','CharacterToCharacterCodec','$m','cumulativeEncoder']};};
characterToCharacterCodec$.cumulativeDecoder=function($pw,$px,$py){var characterToCharacterCodec$=this;
if($pw===undefined){$pw=characterToCharacterCodec$.cumulativeDecoder$defs$inputSize($pw,$px,$py);}
if($px===undefined){$px=characterToCharacterCodec$.cumulativeDecoder$defs$growthFactor($pw,$px,$py);}
if($py===undefined){$py=characterToCharacterCodec$.cumulativeDecoder$defs$error($pw,$px,$py);}
return ($pz=$py,$q0=m$1.jsc$2(m$1.jsc$3(characterToCharacterCodec$,characterToCharacterCodec$.pieceDecoder),[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],{Return$Callable:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Character},FromSingle$PieceConvert:{t:m$1.Character}}},Arguments$Callable:m$1.mut$([{t:m$1.Empty},m$1.mtt$([{t:ErrorStrategy$codec}])])}),$q1=$pw,$q2=m$1.jsc$2(m$1.jsc$3(characterToCharacterCodec$,characterToCharacterCodec$.averageDecodeSize),[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],{Return$Callable:{t:m$1.Integer},Arguments$Callable:m$1.mtt$([{t:m$1.Integer}])}),$q3=m$1.jsc$2(CharacterBuffer$c_ofSize,[{nm:'_0',mt:'prm',$t:{t:CharacterBuffer}}],{Return$Callable:{t:CharacterBuffer.$$.prototype.ofSize},Arguments$Callable:m$1.mtt$([{t:m$1.Integer}])}),$q4=$px,CumulativeConvert$codec($q0,$pz,$q3,$q1,$q4,$q2,{FromSingle$CumulativeConvert:{t:m$1.Character},FromImmutable$CumulativeConvert:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}},ToMutable$CumulativeConvert:{t:CharacterBuffer},ToSingle$CumulativeConvert:{t:m$1.Character}}));
var $pz,$q0,$q1,$q2,$q3,$q4;
};
characterToCharacterCodec$.cumulativeDecoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CumulativeConvert$codec,a:{FromSingle$CumulativeConvert:{t:m$1.Character},FromImmutable$CumulativeConvert:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}},ToMutable$CumulativeConvert:{t:CharacterBuffer},ToSingle$CumulativeConvert:{t:m$1.Character}}},ps:[{nm:'inputSize',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float}},{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:CharacterToCharacterCodec$codec,pa:3,d:['ceylon.buffer.codec','CharacterToCharacterCodec','$m','cumulativeDecoder']};};
characterToCharacterCodec$.toString=function(){return this.string.valueOf();};
})(CharacterToCharacterCodec$codec.$$.prototype);
}
return CharacterToCharacterCodec$codec;
}
ex$.$init$CharacterToCharacterCodec$codec=$init$CharacterToCharacterCodec$codec;$init$CharacterToCharacterCodec$codec();
function capitalizations$codec($q5){
var $q6=m$2.HashSet(undefined,undefined,undefined,{Element$HashSet:{t:m$1.$_String}});
var $q7;
if(m$1.nn$(($q7=$q5.first))){
var $q9;for(var $q8=capitalizations$codec($q5.spanFrom(1)).iterator();($q9=$q8.next())!==m$1.finished();){
$q6.add($q7.uppercased.string.plus($q9));
$q6.add($q7.lowercased.string.plus($q9));
}
}
else{
$q6.add($q5);
}
return $q6;
};capitalizations$codec.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:m$1.$_String}}},ps:[{nm:'base',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.buffer.codec','capitalizations']};};
function buildCodecLookup$codec($qa,$pb7fq4$){
return ($qb=m$1.for$(function(){
var $qc=$qa.iterator(),$qd=m$1.finished();
var n$qd=function(){
if(($qd=$qc.next())!==m$1.finished()){
$qe=$qd.aliases.iterator();
return $qd;
}
return m$1.finished();
}
var $qe=m$1.emptyIterator(),$qf=m$1.finished();
var n$qf=function(){
if(($qf=$qe.next())!==m$1.finished()){
$qg=capitalizations$codec($qf).iterator();
return $qf;
}
return m$1.finished();
}
var $qg=m$1.emptyIterator(),$qh=m$1.finished();
var n$qh=function(){return $qh=$qg.next();}
return function(){
do{
do{
if(n$qh()!==m$1.finished()){
var $qi=$qh,$qj=m$1.Entry($qi,$qd,{Key$Entry:{t:m$1.$_String},Item$Entry:$pb7fq4$.CodecOrLower$buildCodecLookup/*ORALE!CodecOrLower inv pero Item var*/});
return $qj;
}
}while(n$qf()!==m$1.finished());
}while(n$qd()!==m$1.finished());
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:{t:m$1.$_String},Item$Entry:$pb7fq4$.CodecOrLower$buildCodecLookup/*ORALE!CodecOrLower inv pero Item var*/}}}).sequence(),m$1.$_map($qb,undefined,{Item$map:$pb7fq4$.CodecOrLower$buildCodecLookup,Key$map:{t:m$1.$_String}}));
var $qb;
}
ex$.buildCodecLookup$codec=buildCodecLookup$codec;
buildCodecLookup$codec.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:{t:m$1.$_String},Item$Map:'CodecOrLower$buildCodecLookup'}},ps:[{nm:'codecs',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'CodecOrLower$buildCodecLookup'}}}],tp:{CodecOrLower$buildCodecLookup:{sts:[{t:Codec$codec}]}},pa:1,d:['ceylon.buffer.codec','buildCodecLookup']};};
function buildAuction$codec($qk,$uj9y9j$){
var $ql=function($qm){
var $qn=($qo=m$1.for$(function(){
var $qp=$qk.iterator(),$qq=m$1.finished();
var n$qq=function(){return $qq=$qp.next();}
return function(){
if(n$qq()!==m$1.finished()){
var $qr=$qq,$qs=m$1.Entry($qr.encodeBid($qm),$qr,{Key$Entry:{t:m$1.Integer},Item$Entry:{t:IncrementalCodec$codec,a:{FromMutable$IncrementalCodec:$uj9y9j$.FromMutable$buildAuction,FromSingle$IncrementalCodec:$uj9y9j$.FromSingle$buildAuction,ToMutable$IncrementalCodec:$uj9y9j$.ToMutable$buildAuction,FromImmutable$IncrementalCodec:$uj9y9j$.FromImmutable$buildAuction,ToSingle$IncrementalCodec:$uj9y9j$.ToSingle$buildAuction,ToImmutable$IncrementalCodec:$uj9y9j$.ToImmutable$buildAuction}}});
return $qs;
}
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:{t:m$1.Integer},Item$Entry:{t:IncrementalCodec$codec,a:{FromMutable$IncrementalCodec:$uj9y9j$.FromMutable$buildAuction,FromSingle$IncrementalCodec:$uj9y9j$.FromSingle$buildAuction,ToMutable$IncrementalCodec:$uj9y9j$.ToMutable$buildAuction,FromImmutable$IncrementalCodec:$uj9y9j$.FromImmutable$buildAuction,ToSingle$IncrementalCodec:$uj9y9j$.ToSingle$buildAuction,ToImmutable$IncrementalCodec:$uj9y9j$.ToImmutable$buildAuction}}}}}).sequence(),m$1.$_map($qo,undefined,{Item$map:{t:IncrementalCodec$codec,a:{FromMutable$IncrementalCodec:$uj9y9j$.FromMutable$buildAuction,FromSingle$IncrementalCodec:$uj9y9j$.FromSingle$buildAuction,ToMutable$IncrementalCodec:$uj9y9j$.ToMutable$buildAuction,FromImmutable$IncrementalCodec:$uj9y9j$.FromImmutable$buildAuction,ToSingle$IncrementalCodec:$uj9y9j$.ToSingle$buildAuction,ToImmutable$IncrementalCodec:$uj9y9j$.ToImmutable$buildAuction}},Key$map:{t:m$1.Integer}}));
var $qo;
return $qn.filterKeys(m$1.jsc$2((function($qt){return ($qt>(0));
}),[{nm:'k',mt:'prm',$t:{t:m$1.Integer}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:m$1.Integer}])})).$_sort(m$1.jsc$3(0,m$1.increasingKey,{Key$increasingKey:{t:m$1.Integer}})).collect(function(e){return e.item;},{Result$collect:{t:IncrementalCodec$codec,a:{FromMutable$IncrementalCodec:$uj9y9j$.FromMutable$buildAuction,FromSingle$IncrementalCodec:$uj9y9j$.FromSingle$buildAuction,ToMutable$IncrementalCodec:$uj9y9j$.ToMutable$buildAuction,FromImmutable$IncrementalCodec:$uj9y9j$.FromImmutable$buildAuction,ToSingle$IncrementalCodec:$uj9y9j$.ToSingle$buildAuction,ToImmutable$IncrementalCodec:$uj9y9j$.ToImmutable$buildAuction}}});
};
$ql.$crtmm$=function(){return{ps:[{nm:'lot',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'FromSingle$buildAuction'}}}],$t:{t:m$1.Sequential,a:{Element$Sequential:{t:IncrementalCodec$codec,a:{FromMutable$IncrementalCodec:$uj9y9j$.FromMutable$buildAuction,FromSingle$IncrementalCodec:$uj9y9j$.FromSingle$buildAuction,ToMutable$IncrementalCodec:$uj9y9j$.ToMutable$buildAuction,FromImmutable$IncrementalCodec:$uj9y9j$.FromImmutable$buildAuction,ToSingle$IncrementalCodec:$uj9y9j$.ToSingle$buildAuction,ToImmutable$IncrementalCodec:$uj9y9j$.ToImmutable$buildAuction}}}}};};return m$1.jsc$3(0,$ql);
}
ex$.buildAuction$codec=buildAuction$codec;
buildAuction$codec.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Sequential,a:{Element$Sequential:{t:IncrementalCodec$codec,a:{FromMutable$IncrementalCodec:'FromMutable$buildAuction',FromSingle$IncrementalCodec:'FromSingle$buildAuction',ToMutable$IncrementalCodec:'ToMutable$buildAuction',ToImmutable$IncrementalCodec:'ToImmutable$buildAuction',ToSingle$IncrementalCodec:'ToSingle$buildAuction',FromImmutable$IncrementalCodec:'FromImmutable$buildAuction'}}}},Arguments$Callable:{t:'T',l:[{t:m$1.Iterable,a:{Element$Iterable:'FromSingle$buildAuction',Absent$Iterable:{t:m$1.Null}}}]}}},ps:[{nm:'bidders',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:IncrementalCodec$codec,a:{FromMutable$IncrementalCodec:'FromMutable$buildAuction',FromSingle$IncrementalCodec:'FromSingle$buildAuction',ToMutable$IncrementalCodec:'ToMutable$buildAuction',FromImmutable$IncrementalCodec:'FromImmutable$buildAuction',ToSingle$IncrementalCodec:'ToSingle$buildAuction',ToImmutable$IncrementalCodec:'ToImmutable$buildAuction'}}}}}],tp:{ToMutable$buildAuction:{},ToImmutable$buildAuction:{},ToSingle$buildAuction:{},FromMutable$buildAuction:{},FromImmutable$buildAuction:{},FromSingle$buildAuction:{}},pa:1,d:['ceylon.buffer.codec','buildAuction']};};
var $qu$codec;function $valinit$$qu$codec(){if($qu$codec===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'auctionByteToByteEncode\' before it was set"),'46:0-50:1','lookup.ceylon');
if($qu$codec===undefined){$qu$codec=m$1.INIT$;$qu$codec=($qv=m$1.sarg$(function($qw){switch($qw){case 0:return base64ByteStandard$base();case 1:return base64ByteUrl$base();}return m$1.finished();},undefined,{}),buildAuction$codec($qv,{FromMutable$buildAuction:{t:ByteBuffer},ToSingle$buildAuction:{t:m$1.Byte},FromSingle$buildAuction:{t:m$1.Byte},FromImmutable$buildAuction:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ToImmutable$buildAuction:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ToMutable$buildAuction:{t:ByteBuffer}}))};return $qu$codec;};
function auctionByteToByteEncode$codec(){return $valinit$$qu$codec();}
ex$.auctionByteToByteEncode$codec=auctionByteToByteEncode$codec;
var $prop$getAuctionByteToByteEncode$codec={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Sequential,a:{Element$Sequential:{t:IncrementalCodec$codec,a:{FromMutable$IncrementalCodec:{t:ByteBuffer},FromSingle$IncrementalCodec:{t:m$1.Byte},ToMutable$IncrementalCodec:{t:ByteBuffer},FromImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}},ToSingle$IncrementalCodec:{t:m$1.Byte},ToImmutable$IncrementalCodec:{t:m$1.List,a:{Element$List:{t:m$1.Byte}}}}}}},Arguments$Callable:{t:'T',l:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Byte}}}]}}},pa:1,d:['ceylon.buffer.codec','auctionByteToByteEncode']};}};
ex$.$prop$getAuctionByteToByteEncode$codec=$prop$getAuctionByteToByteEncode$codec;
$prop$getAuctionByteToByteEncode$codec.get=auctionByteToByteEncode$codec;
auctionByteToByteEncode$codec.$crtmm$=$prop$getAuctionByteToByteEncode$codec.$crtmm$;
var $qv;
function asd$codec(){
var $qx=m$1.tpl$([(0).$_byte]);
var $qy=auctionByteToByteEncode$codec()($qx);
var $qz;
m$1.asrt$((m$1.ne$(($qz=$qy))),"Assertion failed: "+"\n\tviolated nonempty results\n\tat lookup.ceylon (55:11-55:28)",'55:4-55:29','lookup.ceylon');
$qz.first.encode($qx);
};asd$codec.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],d:['ceylon.buffer.codec','asd']};};
function resizeBuffer($r0,$r1,$r2,$r3,$br33o2$){
if(($r0==$r2.capacity)){
return;
}
m$1.asrt$((($r0>=(0))),"Assertion failed: "+"\n\tviolated newSize >= 0\n\tat common.ceylon (10:11-10:24)",'10:4-10:25','common.ceylon');
var $r4=m$1.smallest($r2.position,$r0,{Element$smallest:{t:m$1.Integer}});
var $r5;
if(($r0<$r2.capacity)){
$r5=m$1.smallest($r2.limit,$r0,{Element$smallest:{t:m$1.Integer}});
}
else{
if(($r1&&($r2.limit==$r2.capacity))){
$r5=$r0;
}
else{
$r5=$r2.limit;
}
}
var $r6=m$1.smallest($r2.capacity,$r0,{Element$smallest:{t:m$1.Integer}});
($r7=$r2,$r7.position=0,$r7.position);
var $r7;
($r8=$r2,$r8.limit=$r6,$r8.limit);
var $r8;
$r3();
($r9=$r2,$r9.limit=$r5,$r9.limit);
var $r9;
($ra=$r2,$ra.position=$r4,$ra.position);
var $ra;
};resizeBuffer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'newSize',mt:'prm',$t:{t:m$1.Integer}},{nm:'growLimit',mt:'prm',$t:{t:m$1.$_Boolean}},{nm:'current',mt:'prm',$t:{t:Buffer,a:{Element$Buffer:'Value$resizeBuffer'}}},{nm:'intoNew',mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}}}],tp:{Value$resizeBuffer:{}},d:['ceylon.buffer','resizeBuffer']};};
function BufferException($d6k2li$rb,$d6k2li$rc,bufferException$){
$init$BufferException();
if(bufferException$===undefined)bufferException$=new BufferException.$$;
if($d6k2li$rb===undefined){$d6k2li$rb=$init$BufferException().$defs$description(bufferException$,$d6k2li$rc);}
bufferException$.$d6k2li$rb_=$d6k2li$rb;
if($d6k2li$rc===undefined){$d6k2li$rc=$init$BufferException().$defs$cause(bufferException$,$d6k2li$rb);}
bufferException$.$d6k2li$rc_=$d6k2li$rc;
m$1.Exception($d6k2li$rb,$d6k2li$rc,bufferException$);
return bufferException$;
}
BufferException.$defs$description=function(bufferException$,$d6k2li$rc){return null};BufferException.$defs$cause=function(bufferException$,$d6k2li$rb){return null};BufferException.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Exception},ps:[{nm:'description',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'cause',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]}}],pa:1,d:['ceylon.buffer','BufferException']};};
ex$.BufferException=BufferException;
function $init$BufferException(){
if(BufferException.$$===undefined){
m$1.initTypeProto(BufferException,'ceylon.buffer::BufferException',m$1.Exception);
(function(bufferException$){
m$1.atr$(bufferException$,'$d6k2li$rb',function(){return this.$d6k2li$rb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:BufferException,d:['ceylon.buffer','BufferException','$at','description$eipb31']};});
m$1.atr$(bufferException$,'$d6k2li$rc',function(){return this.$d6k2li$rc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]},$cont:BufferException,d:['ceylon.buffer','BufferException','$at','cause$tcmfeg']};});
bufferException$.toString=function(){return this.string.valueOf();};
})(BufferException.$$.prototype);
}
return BufferException;
}
ex$.$init$BufferException=$init$BufferException;$init$BufferException();
function BufferUnderflowException($d6k2li$rd,$d6k2li$re,bufferUnderflowException$){
$init$BufferUnderflowException();
if(bufferUnderflowException$===undefined)bufferUnderflowException$=new BufferUnderflowException.$$;
if($d6k2li$rd===undefined){$d6k2li$rd=$init$BufferUnderflowException().$defs$description(bufferUnderflowException$,$d6k2li$re);}
bufferUnderflowException$.$d6k2li$rd_=$d6k2li$rd;
if($d6k2li$re===undefined){$d6k2li$re=$init$BufferUnderflowException().$defs$cause(bufferUnderflowException$,$d6k2li$rd);}
bufferUnderflowException$.$d6k2li$re_=$d6k2li$re;
BufferException($d6k2li$rd,$d6k2li$re,bufferUnderflowException$);
return bufferUnderflowException$;
}
BufferUnderflowException.$defs$description=function(bufferUnderflowException$,$d6k2li$re){return null};BufferUnderflowException.$defs$cause=function(bufferUnderflowException$,$d6k2li$rd){return null};BufferUnderflowException.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BufferException},ps:[{nm:'description',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'cause',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]}}],pa:1,d:['ceylon.buffer','BufferUnderflowException']};};
ex$.BufferUnderflowException=BufferUnderflowException;
function $init$BufferUnderflowException(){
if(BufferUnderflowException.$$===undefined){
m$1.initTypeProto(BufferUnderflowException,'ceylon.buffer::BufferUnderflowException',$init$BufferException());
(function(bufferUnderflowException$){
m$1.atr$(bufferUnderflowException$,'$d6k2li$rd',function(){return this.$d6k2li$rd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:BufferUnderflowException,d:['ceylon.buffer','BufferUnderflowException','$at','description$9i1enn']};});
m$1.atr$(bufferUnderflowException$,'$d6k2li$re',function(){return this.$d6k2li$re_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]},$cont:BufferUnderflowException,d:['ceylon.buffer','BufferUnderflowException','$at','cause$obyiz2']};});
bufferUnderflowException$.toString=function(){return this.string.valueOf();};
})(BufferUnderflowException.$$.prototype);
}
return BufferUnderflowException;
}
ex$.$init$BufferUnderflowException=$init$BufferUnderflowException;$init$BufferUnderflowException();
function BufferOverflowException($d6k2li$rf,$d6k2li$rg,bufferOverflowException$){
$init$BufferOverflowException();
if(bufferOverflowException$===undefined)bufferOverflowException$=new BufferOverflowException.$$;
if($d6k2li$rf===undefined){$d6k2li$rf=$init$BufferOverflowException().$defs$description(bufferOverflowException$,$d6k2li$rg);}
bufferOverflowException$.$d6k2li$rf_=$d6k2li$rf;
if($d6k2li$rg===undefined){$d6k2li$rg=$init$BufferOverflowException().$defs$cause(bufferOverflowException$,$d6k2li$rf);}
bufferOverflowException$.$d6k2li$rg_=$d6k2li$rg;
BufferException($d6k2li$rf,$d6k2li$rg,bufferOverflowException$);
return bufferOverflowException$;
}
BufferOverflowException.$defs$description=function(bufferOverflowException$,$d6k2li$rg){return null};BufferOverflowException.$defs$cause=function(bufferOverflowException$,$d6k2li$rf){return null};BufferOverflowException.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BufferException},ps:[{nm:'description',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'cause',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]}}],pa:1,d:['ceylon.buffer','BufferOverflowException']};};
ex$.BufferOverflowException=BufferOverflowException;
function $init$BufferOverflowException(){
if(BufferOverflowException.$$===undefined){
m$1.initTypeProto(BufferOverflowException,'ceylon.buffer::BufferOverflowException',$init$BufferException());
(function(bufferOverflowException$){
m$1.atr$(bufferOverflowException$,'$d6k2li$rf',function(){return this.$d6k2li$rf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:BufferOverflowException,d:['ceylon.buffer','BufferOverflowException','$at','description$nfjtip']};});
m$1.atr$(bufferOverflowException$,'$d6k2li$rg',function(){return this.$d6k2li$rg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]},$cont:BufferOverflowException,d:['ceylon.buffer','BufferOverflowException','$at','cause$8lmp7a']};});
bufferOverflowException$.toString=function(){return this.string.valueOf();};
})(BufferOverflowException.$$.prototype);
}
return BufferOverflowException;
}
ex$.$init$BufferOverflowException=$init$BufferOverflowException;$init$BufferOverflowException();
function Reader$readers(reader$){
$init$Reader$readers();
if(reader$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.buffer.readers::Reader"),'?','?')
reader$.$d6k2li$rh_=null;
reader$.$d6k2li$ri_=($rj=reader$.$d6k2li$rh,m$1.nn$($rj)?$rj:(reader$.$d6k2li$rh=ByteBuffer$c_ofSize(1)));
var $rj;
return reader$;
}
Reader$readers.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.readers:Reader'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.buffer.readers','Reader']};};
ex$.Reader$readers=Reader$readers;
function $init$Reader$readers(){
if(Reader$readers.$$===undefined){
m$1.initTypeProto(Reader$readers,'ceylon.buffer.readers::Reader',m$1.Basic);
(function(reader$){
reader$.read={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'buffer',mt:'prm',$t:{t:ByteBuffer}}],$cont:Reader$readers,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.readers:Reader:$m:read')];},d:['ceylon.buffer.readers','Reader','$m','read']};}};m$1.atr$(reader$,'$d6k2li$rh',function(){return this.$d6k2li$rh_;},function($rk){return this.$d6k2li$rh_=$rk;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:ByteBuffer}]},$cont:Reader$readers,pa:1024,d:['ceylon.buffer.readers','Reader','$at','byteBuffer$y9phdn']};});
m$1.atr$(reader$,'$d6k2li$ri',function(){return this.$d6k2li$ri_;},undefined,function(){return{mod:$CCMM$,$t:{t:ByteBuffer},$cont:Reader$readers,d:['ceylon.buffer.readers','Reader','$at','buffer$b77h7h']};});
reader$.readByte=function(){
var reader$=this;
reader$.$d6k2li$ri.clear();
while((reader$.read(reader$.$d6k2li$ri)>=(0))){
if(!reader$.$d6k2li$ri.hasAvailable){
reader$.$d6k2li$ri.flip();
return reader$.$d6k2li$ri.$_get();
}
}
return null;
};reader$.readByte.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Byte}]},ps:[],$cont:Reader$readers,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.readers:Reader:$m:readByte')];},d:['ceylon.buffer.readers','Reader','$m','readByte']};};
reader$.readByteArray=function($rl){var reader$=this;
return readByteArray$readers($rl,reader$);
};
reader$.readByteArray.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'array',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:m$1.Byte}}}}],$cont:Reader$readers,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.readers:Reader:$m:readByteArray')];},d:['ceylon.buffer.readers','Reader','$m','readByteArray']};};
reader$.toString=function(){return this.string.valueOf();};
})(Reader$readers.$$.prototype);
}
return Reader$readers;
}
ex$.$init$Reader$readers=$init$Reader$readers;$init$Reader$readers();
function readByteArray$readers($rm,$rn){
var $ro=ByteBuffer$c_ofArray($rm);
var $rp=$rn.read($ro);
return $rp;
}
ex$.readByteArray$readers=readByteArray$readers;
readByteArray$readers.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'array',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:m$1.Byte}}}},{nm:'reader',mt:'prm',$t:{t:Reader$readers}}],pa:1,d:['ceylon.buffer.readers','readByteArray']};};
function Substitution$text(encodeMapping,substitution$){
$init$Substitution$text();
if(substitution$===undefined)substitution$=new Substitution$text.$$;
substitution$.encodeMapping_=encodeMapping;
CharacterToCharacterCodec$codec(substitution$);
substitution$.$d6k2li$rq_=($rr=m$1.for$(function(){
var $rs=substitution$.encodeMapping.iterator(),$rt=m$1.finished();
var n$rt=function(){return $rt=$rs.next();}
return function(){
if(n$rt()!==m$1.finished()){
var $ru=$rt,$rv=m$1.Entry($ru.item,$ru.key,{Key$Entry:{t:m$1.Character},Item$Entry:{t:m$1.Character}});
return $rv;
}
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:{t:m$1.Character},Item$Entry:{t:m$1.Character}}}}).sequence(),m$1.$_map($rr,undefined,{Item$map:{t:m$1.Character},Key$map:{t:m$1.Character}}));
var $rr;
substitution$.$d6k2li$rw_=m$1.tpl$(["".$_join(m$1.sarg$(m$1.$lai$(["Substitution_"]),undefined,{Element$Iterable:{t:m$1.$_String},Absent$Iterable:{t:m$1.Nothing}},1).chain(substitution$.encodeMapping.keys.$_sort(m$1.jsc$3(substitution$,m$1.increasing,{Element$increasing:{t:m$1.Character}})),{OtherAbsent$chain:{t:m$1.Null},Other$chain:{t:m$1.Character}}).chain(m$1.sarg$(m$1.$lai$(["_"]),undefined,{Element$Iterable:{t:m$1.$_String},Absent$Iterable:{t:m$1.Nothing}},1),{OtherAbsent$chain:{t:m$1.Nothing},Other$chain:{t:m$1.$_String}}).chain(substitution$.decodeMapping.keys.$_sort(m$1.jsc$3(substitution$,m$1.increasing,{Element$increasing:{t:m$1.Character}})),{OtherAbsent$chain:{t:m$1.Null},Other$chain:{t:m$1.Character}}))]);
return substitution$;
}
Substitution$text.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'encodeMapping',mt:'prm',$t:{t:m$1.Map,a:{Key$Map:{t:m$1.Character},Item$Map:{t:m$1.Character}}},pa:1}],sts:[{t:CharacterToCharacterCodec$codec}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.text:Substitution')];},d:['ceylon.buffer.text','Substitution']};};
ex$.Substitution$text=Substitution$text;
function $init$Substitution$text(){
if(Substitution$text.$$===undefined){
m$1.initTypeProto(Substitution$text,'ceylon.buffer.text::Substitution',m$1.Basic,$init$CharacterToCharacterCodec$codec());
(function(substitution$){
m$1.atr$(substitution$,'encodeMapping',function(){return this.encodeMapping_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:{t:m$1.Character},Item$Map:{t:m$1.Character}}},$cont:Substitution$text,pa:1,d:['ceylon.buffer.text','Substitution','$at','encodeMapping']};});
m$1.atr$(substitution$,'decodeMapping',function(){return this.$d6k2li$rq_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:{t:m$1.Character},Item$Map:{t:m$1.Character}}},$cont:Substitution$text,pa:1,d:['ceylon.buffer.text','Substitution','$at','decodeMapping']};});
m$1.atr$(substitution$,'aliases',function(){return this.$d6k2li$rw_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.$_String}}},$cont:Substitution$text,pa:11,d:['ceylon.buffer.text','Substitution','$at','aliases']};});
substitution$.averageDecodeSize=function($rx){var substitution$=this;
return $rx;
};
substitution$.averageDecodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:Substitution$text,pa:3,d:['ceylon.buffer.text','Substitution','$m','averageDecodeSize']};};
substitution$.maximumDecodeSize=function($ry){var substitution$=this;
return $ry;
};
substitution$.maximumDecodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:Substitution$text,pa:3,d:['ceylon.buffer.text','Substitution','$m','maximumDecodeSize']};};
substitution$.averageEncodeSize=function($rz){var substitution$=this;
return $rz;
};
substitution$.averageEncodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:Substitution$text,pa:3,d:['ceylon.buffer.text','Substitution','$m','averageEncodeSize']};};
substitution$.maximumEncodeSize=function($s0){var substitution$=this;
return $s0;
};
substitution$.maximumEncodeSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'inputSize',mt:'prm',$t:{t:m$1.Integer}}],$cont:Substitution$text,pa:3,d:['ceylon.buffer.text','Substitution','$m','maximumEncodeSize']};};
substitution$.decodeBid=function($s1){
var substitution$=this;
return ($s1.$_every(m$1.jsc$2((function($s2){return m$1.$cnt$(substitution$.decodeMapping.keys,$s2);
}),[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:m$1.Character}])}))?(2):(1));
};substitution$.decodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}}}],$cont:Substitution$text,pa:3,d:['ceylon.buffer.text','Substitution','$m','decodeBid']};};
substitution$.encodeBid=function($s3){
var substitution$=this;
return ($s3.$_every(m$1.jsc$2((function($s4){return m$1.$cnt$(substitution$.encodeMapping.keys,$s4);
}),[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:m$1.Character}])}))?(2):(1));
};substitution$.encodeBid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'sample',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}}}],$cont:Substitution$text,pa:3,d:['ceylon.buffer.text','Substitution','$m','encodeBid']};};
substitution$.pieceDecoder=function($s5){var substitution$=this;
if($s5===undefined){$s5=substitution$.pieceDecoder$defs$error($s5);}
return function(){function $s6($$targs$$){
var $s6$=new $s6.$$;$s6$.outer$=substitution$;
$s6$.$$targs$$=$$targs$$;
PieceConvert$codec({ToSingle$PieceConvert:{t:m$1.Character},FromSingle$PieceConvert:{t:m$1.Character}},$s6$);
return $s6$;
};$s6.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:substitution$.pieceDecoder,sts:[{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Character},FromSingle$PieceConvert:{t:m$1.Character}}}],d:['ceylon.buffer.text','Substitution','$m','pieceDecoder']};};
function $init$$s6(){
if($s6.$$===undefined){
m$1.initTypeProto($s6,'ceylon.buffer.text::Substitution.pieceDecoder.anonymous#2',m$1.Basic,$init$PieceConvert$codec());
(function($s6$){
$s6$.more=function($s7){var $s6$=this;
return function(){var $s8;
if(m$1.nn$(($s8=substitution$.decodeMapping.$_get($s7))))return m$1.sarg$(function($s9){switch($s9){case 0:return $s8;}return m$1.finished();},undefined,{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:m$1.Character}});else return m$1.sarg$(function($sa){switch($sa){case 0:return $s7;}return m$1.finished();},undefined,{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:m$1.Character}})}();
};
$s6$.more.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Character}}],$cont:$s6,pa:3,d:['ceylon.buffer.text','Substitution','$m','pieceDecoder','$m','more']};};
$s6$.toString=function(){return this.string.valueOf();};
})($s6.$$.prototype);
}
return $s6;
}
substitution$.$init$$s6=$init$$s6;$init$$s6();return $s6();}();
};
substitution$.pieceDecoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Character},FromSingle$PieceConvert:{t:m$1.Character}}},ps:[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:Substitution$text,pa:3,d:['ceylon.buffer.text','Substitution','$m','pieceDecoder']};};
substitution$.pieceEncoder=function($sc){var substitution$=this;
if($sc===undefined){$sc=substitution$.pieceEncoder$defs$error($sc);}
return function(){function $sd($$targs$$){
var $sd$=new $sd.$$;$sd$.outer$=substitution$;
$sd$.$$targs$$=$$targs$$;
PieceConvert$codec({ToSingle$PieceConvert:{t:m$1.Character},FromSingle$PieceConvert:{t:m$1.Character}},$sd$);
return $sd$;
};$sd.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:substitution$.pieceEncoder,sts:[{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Character},FromSingle$PieceConvert:{t:m$1.Character}}}],d:['ceylon.buffer.text','Substitution','$m','pieceEncoder']};};
function $init$$sd(){
if($sd.$$===undefined){
m$1.initTypeProto($sd,'ceylon.buffer.text::Substitution.pieceEncoder.anonymous#3',m$1.Basic,$init$PieceConvert$codec());
(function($sd$){
$sd$.more=function($se){var $sd$=this;
return function(){var $sf;
if(m$1.nn$(($sf=substitution$.encodeMapping.$_get($se))))return m$1.sarg$(function($sg){switch($sg){case 0:return $sf;}return m$1.finished();},undefined,{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:m$1.Character}});else return m$1.sarg$(function($sh){switch($sh){case 0:return $se;}return m$1.finished();},undefined,{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:{t:m$1.Character}})}();
};
$sd$.more.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.Character}}],$cont:$sd,pa:3,d:['ceylon.buffer.text','Substitution','$m','pieceEncoder','$m','more']};};
$sd$.toString=function(){return this.string.valueOf();};
})($sd.$$.prototype);
}
return $sd;
}
substitution$.$init$$sd=$init$$sd;$init$$sd();return $sd();}();
};
substitution$.pieceEncoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:PieceConvert$codec,a:{ToSingle$PieceConvert:{t:m$1.Character},FromSingle$PieceConvert:{t:m$1.Character}}},ps:[{nm:'error',mt:'prm',def:1,$t:{t:ErrorStrategy$codec}}],$cont:Substitution$text,pa:3,d:['ceylon.buffer.text','Substitution','$m','pieceEncoder']};};
substitution$.toString=function(){return this.string.valueOf();};
})(Substitution$text.$$.prototype);
}
return Substitution$text;
}
ex$.$init$Substitution$text=$init$Substitution$text;$init$Substitution$text();
function caesarMapping$text($sj){
return m$1.$_map(($sk=m$1.for$(function(){
var $sl=m$1.span(m$1.Character(97,true),m$1.Character(122,true),{Element$span:{t:m$1.Character}}).iterator(),$sm=m$1.finished();
var n$sm=function(){return $sm=$sl.next();}
return function(){
if(n$sm()!==m$1.finished()){
var $sn=$sm,$so=m$1.Entry($sn,((($sn.integer-m$1.Character(97,true).integer)+$sj).remainder((26))+m$1.Character(97,true).integer).character,{Key$Entry:{t:m$1.Character},Item$Entry:{t:m$1.Character}});
return $so;
}
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:{t:m$1.Character},Item$Entry:{t:m$1.Character}}}}).sequence(),($sp=m$1.for$(function(){
var $sq=m$1.span(m$1.Character(65,true),m$1.Character(90,true),{Element$span:{t:m$1.Character}}).iterator(),$sr=m$1.finished();
var n$sr=function(){return $sr=$sq.next();}
return function(){
if(n$sr()!==m$1.finished()){
var $ss=$sr,$st=m$1.Entry($ss,((($ss.integer-m$1.Character(65,true).integer)+$sj).remainder((26))+m$1.Character(65,true).integer).character,{Key$Entry:{t:m$1.Character},Item$Entry:{t:m$1.Character}});
return $st;
}
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:{t:m$1.Character},Item$Entry:{t:m$1.Character}}}}),m$1.jsc$3($sp,$sp.chain,{OtherAbsent$chain:{t:m$1.Nothing},Other$chain:{t:m$1.Entry,a:{Key$Entry:{t:m$1.Character},Item$Entry:{t:m$1.Character}}}}))($sk,{OtherAbsent$chain:{t:m$1.Nothing},Other$chain:{t:m$1.Entry,a:{Key$Entry:{t:m$1.Character},Item$Entry:{t:m$1.Character}}}})),undefined,{Item$map:{t:m$1.Character},Key$map:{t:m$1.Character}});
var $sk,$sp;
}
ex$.caesarMapping$text=caesarMapping$text;
caesarMapping$text.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:{t:m$1.Character},Item$Map:{t:m$1.Character}}},ps:[{nm:'key',mt:'prm',$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.text:caesarMapping')];},d:['ceylon.buffer.text','caesarMapping']};};
function $su$text(){
var rot13$=new $su$text.$$;Substitution$text(caesarMapping$text(13),rot13$);
return rot13$;
};$su$text.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Substitution$text},d:['ceylon.buffer.text','rot13']};};
function $init$rot13$text(){
if($su$text.$$===undefined){
m$1.initTypeProto($su$text,'ceylon.buffer.text::rot13',$init$Substitution$text());
(function(rot13$){
rot13$.toString=function(){return this.string.valueOf();};
})($su$text.$$.prototype);
}
return $su$text;
}
ex$.$init$rot13$text=$init$rot13$text;$init$rot13$text();var $sw;
function rot13$text(){
if($sw===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'rot13\' before it was set"),'21:0-23:0','caesar.ceylon');
if($sw===undefined){$sw=m$1.INIT$;$sw=$init$rot13$text()();$sw.$crtmm$=rot13$text.$crtmm$;}
return $sw;
}
ex$.rot13$text=rot13$text;
rot13$text.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$rot13$text()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.buffer.text:rot13')];},d:['ceylon.buffer.text','rot13']};};
$prop$getRot13$text=rot13$text;
ex$.$prop$getRot13$text=$prop$getRot13$text;
ex$.$pkg$ans$ceylon$buffer$base=function(){return[m$1.doc$($CCMM$,'ceylon.buffer.base','$pkg-anns'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud","Alex Szczuczko"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$buffer$charset=function(){return[m$1.doc$($CCMM$,'ceylon.buffer.charset','$pkg-anns'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud","Alex Szczuczko"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$buffer$codec=function(){return[m$1.doc$($CCMM$,'ceylon.buffer.codec','$pkg-anns'),m$1.shared()];};
ex$.$pkg$ans$ceylon$buffer=function(){return[m$1.doc$($CCMM$,'ceylon.buffer','$pkg-anns'),m$1.see(m$1.$arr$sa$([m$1.findModuleOrThrow$('ceylon.buffer','1.3.2')],{t:m$1.Module$meta$declaration})),m$1.shared()];};
ex$.$pkg$ans$ceylon$buffer$readers=function(){return[m$1.shared()];};
ex$.$pkg$ans$ceylon$buffer$text=function(){return[m$1.doc$($CCMM$,'ceylon.buffer.text','$pkg-anns'),m$1.shared()];};
ex$.$pkgunsh$ceylon$buffer={'resizeBuffer':resizeBuffer};
ex$.$pkgunsh$ceylon$buffer$base={'ceiling':ceiling$base,'toDecodeTable':toDecodeTable$base,'hexDigits':$prop$getHexDigits$base,'base16StringEncodeTable':$prop$getBase16StringEncodeTable$base,'hexDigitsByte':$prop$getHexDigitsByte$base,'base16ByteEncodeTable':$prop$getBase16ByteEncodeTable$base,'Base32PieceEncoderState':Base32PieceEncoderState$base,'b32EncodeFirst':$prop$getB32EncodeFirst$base,'b32EncodeSecond':$prop$getB32EncodeSecond$base,'b32EncodeThird':$prop$getB32EncodeThird$base,'b32EncodeFourth':$prop$getB32EncodeFourth$base,'b32EncodeFifth':$prop$getB32EncodeFifth$base,'Base32PieceDecoderState':Base32PieceDecoderState$base,'b32DecodeFirst':$prop$getB32DecodeFirst$base,'b32DecodeSecond':$prop$getB32DecodeSecond$base,'b32DecodeThird':$prop$getB32DecodeThird$base,'b32DecodeFourth':$prop$getB32DecodeFourth$base,'b32DecodeFifth':$prop$getB32DecodeFifth$base,'b32DecodeSixth':$prop$getB32DecodeSixth$base,'b32DecodeSeventh':$prop$getB32DecodeSeventh$base,'b32DecodeEighth':$prop$getB32DecodeEighth$base,'standardBase32CharTable':$prop$getStandardBase32CharTable$base,'standardBase32ByteTable':$prop$getStandardBase32ByteTable$base,'hexBase32CharTable':$prop$getHexBase32CharTable$base,'hexBase32ByteTable':$prop$getHexBase32ByteTable$base,'Base64PieceEncoderState':Base64PieceEncoderState$base,'b64EncodeFirst':$prop$getB64EncodeFirst$base,'b64EncodeSecond':$prop$getB64EncodeSecond$base,'b64EncodeThird':$prop$getB64EncodeThird$base,'Base64PieceDecoderState':Base64PieceDecoderState$base,'b64DecodeFirst':$prop$getB64DecodeFirst$base,'b64DecodeSecond':$prop$getB64DecodeSecond$base,'b64DecodeThird':$prop$getB64DecodeThird$base,'b64DecodeFourth':$prop$getB64DecodeFourth$base,'standardBase64CharTable':$prop$getStandardBase64CharTable$base,'standardBase64ByteTable':$prop$getStandardBase64ByteTable$base,'urlBase64CharTable':$prop$getUrlBase64CharTable$base,'urlBase64ByteTable':$prop$getUrlBase64ByteTable$base};
ex$.$pkgunsh$ceylon$buffer$codec={'convertBuffer':convertBuffer$codec,'capitalizations':capitalizations$codec,'asd':asd$codec};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
