(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('ceylon/uri/1.3.2/ceylon.uri-1.3.2', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/uri/1.3.2/ceylon.uri-1.3.2-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.3.2/ceylon.language-1.3.2');
m$1.$addmod$(m$1,'ceylon.language/1.3.2');
m$1.$addmod$(ex$,'ceylon.uri/1.3.2');
var m$4=require('ceylon/buffer/1.3.2/ceylon.buffer-1.3.2');
m$1.$addmod$(m$4,'ceylon.buffer/1.3.2');
ex$.$mod$ans$=function(){return[m$1.doc$($CCMM$,'','$mod-anns'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud","Matej Lazar"],{t:m$1.$_String})),m$1.license("Apache Software License")];};
ex$.$mod$imps=function(){return{
'ceylon.buffer/1.3.2':[]
};};
function Authority(user,password,host,port,ipLiteral,authority$){
$init$Authority();
if(authority$===undefined)authority$=new Authority.$$;
if(user===undefined){user=$init$Authority().$defs$user(authority$,password,host,port,ipLiteral);}
authority$.user_=user;
if(password===undefined){password=$init$Authority().$defs$password(authority$,user,host,port,ipLiteral);}
authority$.password_=password;
if(host===undefined){host=$init$Authority().$defs$host(authority$,user,password,port,ipLiteral);}
authority$.host_=host;
if(port===undefined){port=$init$Authority().$defs$port(authority$,user,password,host,ipLiteral);}
authority$.port_=port;
if(ipLiteral===undefined){ipLiteral=$init$Authority().$defs$ipLiteral(authority$,user,password,host,port);}
authority$.ipLiteral_=ipLiteral;
return authority$;
}
Authority.$defs$user=function(authority$,password,host,port,ipLiteral){return null};Authority.$defs$password=function(authority$,user,host,port,ipLiteral){return null};Authority.$defs$host=function(authority$,user,password,port,ipLiteral){return null};Authority.$defs$port=function(authority$,user,password,host,ipLiteral){return null};Authority.$defs$ipLiteral=function(authority$,user,password,host,port){return false};Authority.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'user',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc("The optional user")];}},{nm:'password',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc("The optional password")];}},{nm:'host',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc("The optional host")];}},{nm:'port',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},pa:1,an:function(){return[m$1.doc("The optional port number")];}},{nm:'ipLiteral',mt:'prm',def:1,$t:{t:m$1.$_Boolean},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Authority:$at:ipLiteral')];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Authority'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.uri','Authority']};};
ex$.Authority=Authority;
function $init$Authority(){
if(Authority.$$===undefined){
m$1.initTypeProto(Authority,'ceylon.uri::Authority',m$1.Basic);
(function(authority$){
m$1.atr$(authority$,'user',function(){return this.user_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Authority,pa:1,an:function(){return[m$1.doc("The optional user")];},d:['ceylon.uri','Authority','$at','user']};});
m$1.atr$(authority$,'password',function(){return this.password_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Authority,pa:1,an:function(){return[m$1.doc("The optional password")];},d:['ceylon.uri','Authority','$at','password']};});
m$1.atr$(authority$,'host',function(){return this.host_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Authority,pa:1,an:function(){return[m$1.doc("The optional host")];},d:['ceylon.uri','Authority','$at','host']};});
m$1.atr$(authority$,'port',function(){return this.port_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Authority,pa:1,an:function(){return[m$1.doc("The optional port number")];},d:['ceylon.uri','Authority','$at','port']};});
m$1.atr$(authority$,'ipLiteral',function(){return this.ipLiteral_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Authority,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Authority:$at:ipLiteral')];},d:['ceylon.uri','Authority','$at','ipLiteral']};});
m$1.atr$(authority$,'specified',function(){
var authority$=this;
return m$1.nn$(authority$.host);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Authority,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Authority:$at:specified')];},d:['ceylon.uri','Authority','$at','specified']};});m$1.atr$(authority$,'string',function(){
var authority$=this;
return authority$.toRepresentation(false);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Authority,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Authority:$at:string')];},d:['ceylon.uri','Authority','$at','string']};});m$1.atr$(authority$,'humanRepresentation',function(){
var authority$=this;
return authority$.toRepresentation(true);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Authority,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Authority:$at:humanRepresentation')];},d:['ceylon.uri','Authority','$at','humanRepresentation']};});authority$.toRepresentation=function($710){
var authority$=this;
var $711;
if(m$1.nn$(($711=authority$.host))){
var $712=m$1.StringBuilder();
var $713;
if(m$1.nn$(($713=authority$.user))){
$712.append(($714=($710?$713:null),m$1.nn$($714)?$714:percentEncoder().encodeUser($713)));
var $714;
var $715;
if(m$1.nn$(($715=authority$.password))){
$712.appendCharacter(m$1.Character(58,true));
$712.append(($716=($710?$715:null),m$1.nn$($716)?$716:percentEncoder().encodePassword($715)));
var $716;
}
$712.appendCharacter(m$1.Character(64,true));
}
if(authority$.ipLiteral){
$712.append("[");
$712.append($711);
$712.append("]");
}
else{
$712.append(($717=($710?$711:null),m$1.nn$($717)?$717:percentEncoder().encodeRegName($711)));
var $717;
}
var $718;
if(m$1.nn$(($718=authority$.port))){
$712.appendCharacter(m$1.Character(58,true));
$712.append($718.string);
}
return $712.string;
}
return "";
};authority$.toRepresentation.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'human',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:Authority,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Authority:$m:toRepresentation')];},d:['ceylon.uri','Authority','$m','toRepresentation']};};
authority$.withUser=function($719){var authority$=this;
return Authority($719,authority$.password,authority$.host,authority$.port,authority$.ipLiteral);
};
authority$.withUser.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Authority},ps:[{nm:'user',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],$cont:Authority,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Authority:$m:withUser')];},d:['ceylon.uri','Authority','$m','withUser']};};
authority$.withPassword=function($71a){var authority$=this;
return Authority(authority$.user,$71a,authority$.host,authority$.port,authority$.ipLiteral);
};
authority$.withPassword.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Authority},ps:[{nm:'password',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],$cont:Authority,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Authority:$m:withPassword')];},d:['ceylon.uri','Authority','$m','withPassword']};};
authority$.withHost$defs$ipLiteral=function($71b,$71c){return false;};
authority$.withHost=function($71b,$71c){var authority$=this;
if($71c===undefined){$71c=false;}
return Authority(authority$.user,authority$.password,$71b,authority$.port,$71c);
};
authority$.withHost.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Authority},ps:[{nm:'host',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'ipLiteral',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:Authority,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Authority:$m:withHost')];},d:['ceylon.uri','Authority','$m','withHost']};};
authority$.withPort=function($71d){var authority$=this;
return Authority(authority$.user,authority$.password,authority$.host,$71d,authority$.ipLiteral);
};
authority$.withPort.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Authority},ps:[{nm:'port',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}}],$cont:Authority,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Authority:$m:withPort')];},d:['ceylon.uri','Authority','$m','withPort']};};
authority$.$_with$defs$user=function($71e,$71f,$71g,$71h,$71i){var authority$=this;
return authority$.user;};
authority$.$_with$defs$password=function($71e,$71f,$71g,$71h,$71i){var authority$=this;
return authority$.password;};
authority$.$_with$defs$host=function($71e,$71f,$71g,$71h,$71i){var authority$=this;
return authority$.host;};
authority$.$_with$defs$port=function($71e,$71f,$71g,$71h,$71i){var authority$=this;
return authority$.port;};
authority$.$_with$defs$ipLiteral=function($71e,$71f,$71g,$71h,$71i){var authority$=this;
return authority$.ipLiteral;};
authority$.$_with=function($71e,$71f,$71g,$71h,$71i){var authority$=this;
if($71e===undefined){$71e=authority$.user;}
if($71f===undefined){$71f=authority$.password;}
if($71g===undefined){$71g=authority$.host;}
if($71h===undefined){$71h=authority$.port;}
if($71i===undefined){$71i=authority$.ipLiteral;}
return Authority($71e,$71f,$71g,$71h,$71i);
};
authority$.$_with.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Authority},ps:[{nm:'user',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'password',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'host',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'port',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'ipLiteral',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:Authority,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Authority:$m:with')];},d:['ceylon.uri','Authority','$m','with']};};
authority$.equals=function($71j){
var authority$=this;
var $71k;
if(m$1.is$(($71k=$71j),{t:Authority})){
if((authority$===$71k)){
return true;
}
return ((((eq(authority$.user,$71k.user)&&eq(authority$.password,$71k.password))&&eq(authority$.host,$71k.host))&&eq(authority$.port,$71k.port))&&(authority$.ipLiteral==$71k.ipLiteral));
}
function $71l(){return $71j;}
return false;
};authority$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Authority,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Authority:$m:equals')];},d:['ceylon.uri','Authority','$m','equals']};};
m$1.atr$(authority$,'hash',function(){
var authority$=this;
var $71m=(1);
$71m=(((31)*$71m)+($71n=($71o=authority$.user,m$1.nn$($71o)?$71o.hash:null),m$1.nn$($71n)?$71n:(0)));
var $71n,$71o;
$71m=(((31)*$71m)+($71p=($71q=authority$.password,m$1.nn$($71q)?$71q.hash:null),m$1.nn$($71p)?$71p:(0)));
var $71p,$71q;
$71m=(((31)*$71m)+($71r=($71s=authority$.host,m$1.nn$($71s)?$71s.hash:null),m$1.nn$($71r)?$71r:(0)));
var $71r,$71s;
$71m=(((31)*$71m)+($71t=($71u=authority$.port,m$1.nn$($71u)?$71u.hash:null),m$1.nn$($71t)?$71t:(0)));
var $71t,$71u;
$71m=(((31)*$71m)+authority$.ipLiteral.hash);
return $71m;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Authority,pa:3,d:['ceylon.uri','Authority','$at','hash']};});authority$.toString=function(){return this.string.valueOf();};
})(Authority.$$.prototype);
}
return Authority;
}
ex$.$init$Authority=$init$Authority;$init$Authority();
function InvalidUriException($aer11u$71v,invalidUriException$){
$init$InvalidUriException();
if(invalidUriException$===undefined)invalidUriException$=new InvalidUriException.$$;
invalidUriException$.$aer11u$71v_=$aer11u$71v;
m$1.Exception($aer11u$71v,null,invalidUriException$);
return invalidUriException$;
}
InvalidUriException.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Exception},ps:[{nm:'message',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc("Thrown when a URI is invalid"),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.uri','InvalidUriException']};};
ex$.InvalidUriException=InvalidUriException;
function $init$InvalidUriException(){
if(InvalidUriException.$$===undefined){
m$1.initTypeProto(InvalidUriException,'ceylon.uri::InvalidUriException',m$1.Exception);
(function(invalidUriException$){
m$1.atr$(invalidUriException$,'$aer11u$71v',function(){return this.$aer11u$71v_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:InvalidUriException,d:['ceylon.uri','InvalidUriException','$at','message$kuk0fl']};});
invalidUriException$.toString=function(){return this.string.valueOf();};
})(InvalidUriException.$$.prototype);
}
return InvalidUriException;
}
ex$.$init$InvalidUriException=$init$InvalidUriException;$init$InvalidUriException();
function Parameter(name,val,parameter$){
$init$Parameter();
if(parameter$===undefined)parameter$=new Parameter.$$;
parameter$.name_=name;
if(val===undefined){val=$init$Parameter().$defs$val(parameter$,name);}
parameter$.val_=val;
return parameter$;
}
Parameter.$defs$val=function(parameter$,name){return null};Parameter.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String},pa:1},{nm:'val',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Parameter'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.uri','Parameter']};};
ex$.Parameter=Parameter;
function $init$Parameter(){
if(Parameter.$$===undefined){
m$1.initTypeProto(Parameter,'ceylon.uri::Parameter',m$1.Basic);
(function(parameter$){
m$1.atr$(parameter$,'name',function(){return this.name_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Parameter,pa:1,d:['ceylon.uri','Parameter','$at','name']};});
m$1.atr$(parameter$,'val',function(){return this.val_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Parameter,pa:1,d:['ceylon.uri','Parameter','$at','val']};});
parameter$.toRepresentation=function($71w){
var parameter$=this;
var $71x;
if(m$1.nn$(($71x=parameter$.val))){
return ($71y=($71w?parameter$.name.plus("=").plus($71x):null),m$1.nn$($71y)?$71y:percentEncoder().encodePathSegmentParamName(parameter$.name).plus("=").plus(percentEncoder().encodePathSegmentParamName($71x)));
var $71y;
}
else{
return percentEncoder().encodePathSegmentParamName(parameter$.name);
}
};parameter$.toRepresentation.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'human',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:Parameter,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Parameter:$m:toRepresentation')];},d:['ceylon.uri','Parameter','$m','toRepresentation']};};
m$1.atr$(parameter$,'string',function(){
var parameter$=this;
return parameter$.toRepresentation(false);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Parameter,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Parameter:$at:string')];},d:['ceylon.uri','Parameter','$at','string']};});m$1.atr$(parameter$,'humanRepresentation',function(){
var parameter$=this;
return parameter$.toRepresentation(true);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Parameter,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Parameter:$at:humanRepresentation')];},d:['ceylon.uri','Parameter','$at','humanRepresentation']};});parameter$.equals=function($71z){
var parameter$=this;
var $720;
if(m$1.is$(($720=$71z),{t:Parameter})){
if((parameter$===$720)){
return true;
}
return (m$1.$eq$(parameter$.name,$720.name)&&eq(parameter$.val,$720.val));
}
function $721(){return $71z;}
return false;
};parameter$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Parameter,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Parameter:$m:equals')];},d:['ceylon.uri','Parameter','$m','equals']};};
m$1.atr$(parameter$,'hash',function(){
var parameter$=this;
var $722=(1);
$722=(((31)*$722)+parameter$.name.hash);
$722=(((31)*$722)+($723=($724=parameter$.val,m$1.nn$($724)?$724.hash:null),m$1.nn$($723)?$723:(0)));
var $723,$724;
return $722;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Parameter,pa:3,d:['ceylon.uri','Parameter','$at','hash']};});parameter$.toString=function(){return this.string.valueOf();};
})(Parameter.$$.prototype);
}
return Parameter;
}
ex$.$init$Parameter=$init$Parameter;$init$Parameter();
function Path(absolute,segments,path$){
$init$Path();
if(path$===undefined)path$=new Path.$$;
if(absolute===undefined){absolute=$init$Path().$defs$absolute(path$,segments);}
path$.absolute_=absolute;
if(segments===undefined){segments=m$1.empty();}
path$.segments_=segments;
return path$;
}
Path.$defs$absolute=function(path$,segments){return false};Path.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'absolute',mt:'prm',def:1,$t:{t:m$1.$_Boolean},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Path:$at:absolute')];}},{nm:'segments',mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:PathSegment}}},pa:1,an:function(){return[m$1.doc("The list of path segments")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Path'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.uri','Path']};};
ex$.Path=Path;
function $init$Path(){
if(Path.$$===undefined){
m$1.initTypeProto(Path,'ceylon.uri::Path',m$1.Basic);
(function(path$){
m$1.atr$(path$,'absolute',function(){return this.absolute_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Path,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Path:$at:absolute')];},d:['ceylon.uri','Path','$at','absolute']};});
m$1.atr$(path$,'segments',function(){return this.segments_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:PathSegment}}},$cont:Path,pa:1,an:function(){return[m$1.doc("The list of path segments")];},d:['ceylon.uri','Path','$at','segments']};});
path$.equals=function($725){
var path$=this;
var $726;
if(m$1.is$(($726=$725),{t:Path})){
if((path$===$726)){
return true;
}
return ((path$.absolute==$726.absolute)&&m$1.$eq$(path$.segments,$726.segments));
}
function $727(){return $725;}
return false;
};path$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Path,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Path:$m:equals')];},d:['ceylon.uri','Path','$m','equals']};};
m$1.atr$(path$,'hash',function(){
var path$=this;
var $728=(1);
$728=(((31)*$728)+path$.absolute.hash);
$728=(((31)*$728)+path$.segments.hash);
return $728;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Path,pa:3,d:['ceylon.uri','Path','$at','hash']};});path$.toRepresentation=function($729){
var path$=this;
if(path$.segments.empty){
return "";
}
var $72a=m$1.StringBuilder();
if(path$.absolute){
$72a.appendCharacter(m$1.Character(47,true));
}
var $72b=(0);
var $72d;for(var $72c=path$.segments.iterator();($72d=$72c.next())!==m$1.finished();){
if((($72e=$72b,$72b=$72e.successor,$72e)>(0))){
$72a.appendCharacter(m$1.Character(47,true));
}
var $72e;
$72a.append($72d.toRepresentation($729));
}
return $72a.string;
};path$.toRepresentation.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'human',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:Path,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Path:$m:toRepresentation')];},d:['ceylon.uri','Path','$m','toRepresentation']};};
m$1.atr$(path$,'string',function(){
var path$=this;
return path$.toRepresentation(false);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Path,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Path:$at:string')];},d:['ceylon.uri','Path','$at','string']};});m$1.atr$(path$,'humanRepresentation',function(){
var path$=this;
return path$.toRepresentation(true);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Path,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Path:$at:humanRepresentation')];},d:['ceylon.uri','Path','$at','humanRepresentation']};});path$.toString=function(){return this.string.valueOf();};
})(Path.$$.prototype);
}
return Path;
}
ex$.$init$Path=$init$Path;$init$Path();
function PathSegment(name,parameters,pathSegment$){
$init$PathSegment();
if(pathSegment$===undefined)pathSegment$=new PathSegment.$$;
pathSegment$.name_=name;
if(parameters===undefined){parameters=m$1.empty();}
pathSegment$.parameters_=parameters;
return pathSegment$;
}
PathSegment.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc("The path segment name")];}},{nm:'parameters',mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:Parameter}}},pa:1,an:function(){return[m$1.doc("The path segment parameters")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:PathSegment'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.uri','PathSegment']};};
ex$.PathSegment=PathSegment;
function $init$PathSegment(){
if(PathSegment.$$===undefined){
m$1.initTypeProto(PathSegment,'ceylon.uri::PathSegment',m$1.Basic);
(function(pathSegment$){
m$1.atr$(pathSegment$,'name',function(){return this.name_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:PathSegment,pa:1,an:function(){return[m$1.doc("The path segment name")];},d:['ceylon.uri','PathSegment','$at','name']};});
m$1.atr$(pathSegment$,'parameters',function(){return this.parameters_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:Parameter}}},$cont:PathSegment,pa:1,an:function(){return[m$1.doc("The path segment parameters")];},d:['ceylon.uri','PathSegment','$at','parameters']};});
pathSegment$.equals=function($72f){
var pathSegment$=this;
var $72g;
if(m$1.is$(($72g=$72f),{t:PathSegment})){
if((pathSegment$===$72g)){
return true;
}
return (m$1.$eq$(pathSegment$.name,$72g.name)&&m$1.$eq$(pathSegment$.parameters,$72g.parameters));
}
function $72h(){return $72f;}
return false;
};pathSegment$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:PathSegment,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:PathSegment:$m:equals')];},d:['ceylon.uri','PathSegment','$m','equals']};};
m$1.atr$(pathSegment$,'hash',function(){
var pathSegment$=this;
var $72i=(1);
$72i=(((31)*$72i)+pathSegment$.name.hash);
$72i=(((31)*$72i)+pathSegment$.parameters.hash);
return $72i;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PathSegment,pa:3,d:['ceylon.uri','PathSegment','$at','hash']};});pathSegment$.$aer11u$72j=function($72k,$72l){
var pathSegment$=this;
if($72l){
return $72k.toRepresentation(true);
}
var $72m;
if(m$1.nn$(($72m=$72k.val))){
return percentEncoder().encodePathSegmentParamName($72k.name).plus("=").plus(percentEncoder().encodePathSegmentParamValue($72m));
}
else{
return percentEncoder().encodePathSegmentParamName($72k.name);
}
};pathSegment$.$aer11u$72j.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'param',mt:'prm',$t:{t:Parameter}},{nm:'human',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:PathSegment,d:['ceylon.uri','PathSegment','$m','serialiseParameter$6ff1nc']};};
pathSegment$.toRepresentation=function($72n){
var pathSegment$=this;
if(pathSegment$.parameters.empty){
return ($72o=($72n?pathSegment$.name:null),m$1.nn$($72o)?$72o:percentEncoder().encodePathSegmentName(pathSegment$.name));
var $72o;
}
else{
var $72p=m$1.StringBuilder();
$72p.append(($72q=($72n?pathSegment$.name:null),m$1.nn$($72q)?$72q:percentEncoder().encodePathSegmentName(pathSegment$.name)));
var $72q;
var $72s;for(var $72r=pathSegment$.parameters.iterator();($72s=$72r.next())!==m$1.finished();){
$72p.appendCharacter(m$1.Character(59,true));
$72p.append(pathSegment$.$aer11u$72j($72s,$72n));
}
return $72p.string;
}
};pathSegment$.toRepresentation.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'human',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:PathSegment,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:PathSegment:$m:toRepresentation')];},d:['ceylon.uri','PathSegment','$m','toRepresentation']};};
m$1.atr$(pathSegment$,'string',function(){
var pathSegment$=this;
return pathSegment$.toRepresentation(false);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:PathSegment,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:PathSegment:$at:string')];},d:['ceylon.uri','PathSegment','$at','string']};});m$1.atr$(pathSegment$,'humanRepresentation',function(){
var pathSegment$=this;
return pathSegment$.toRepresentation(true);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:PathSegment,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:PathSegment:$at:humanRepresentation')];},d:['ceylon.uri','PathSegment','$at','humanRepresentation']};});pathSegment$.toString=function(){return this.string.valueOf();};
})(PathSegment.$$.prototype);
}
return PathSegment;
}
ex$.$init$PathSegment=$init$PathSegment;$init$PathSegment();
function Query(parameters,query$){
$init$Query();
if(query$===undefined)query$=new Query.$$;
if(parameters===undefined){parameters=m$1.empty();}
query$.parameters_=parameters;
return query$;
}
Query.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'parameters',mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:Parameter}}},pa:1,an:function(){return[m$1.doc("The list of query parameters")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Query'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.uri','Query']};};
ex$.Query=Query;
function $init$Query(){
if(Query.$$===undefined){
m$1.initTypeProto(Query,'ceylon.uri::Query',m$1.Basic);
(function(query$){
m$1.atr$(query$,'parameters',function(){return this.parameters_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:Parameter}}},$cont:Query,pa:1,an:function(){return[m$1.doc("The list of query parameters")];},d:['ceylon.uri','Query','$at','parameters']};});
m$1.atr$(query$,'specified',function(){
var query$=this;
return !query$.parameters.empty;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Query,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Query:$at:specified')];},d:['ceylon.uri','Query','$at','specified']};});
query$.equals=function($72t){
var query$=this;
var $72u;
if(m$1.is$(($72u=$72t),{t:Query})){
if((query$===$72u)){
return true;
}
return m$1.$eq$(query$.parameters,$72u.parameters);
}
function $72v(){return $72t;}
return false;
};query$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Query,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Query:$m:equals')];},d:['ceylon.uri','Query','$m','equals']};};
m$1.atr$(query$,'hash',function(){
var query$=this;
var $72w=(1);
$72w=(((31)*$72w)+query$.parameters.hash);
return $72w;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Query,pa:3,d:['ceylon.uri','Query','$at','hash']};});query$.$aer11u$72x=function($72y,$72z){
var query$=this;
if($72z){
return $72y.toRepresentation(true);
}
var $730;
if(m$1.nn$(($730=$72y.val))){
return percentEncoder().encodeQueryPart($72y.name).plus("=").plus(percentEncoder().encodeQueryPart($730));
}
else{
return percentEncoder().encodeQueryPart($72y.name);
}
};query$.$aer11u$72x.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'param',mt:'prm',$t:{t:Parameter}},{nm:'human',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:Query,d:['ceylon.uri','Query','$m','serialiseParameter$kcf3jm']};};
query$.toRepresentation=function($731){
var query$=this;
if(query$.parameters.empty){
return "";
}
var $732=m$1.StringBuilder();
var $733=(0);
var $735;for(var $734=query$.parameters.iterator();($735=$734.next())!==m$1.finished();){
if((($736=$733,$733=$736.successor,$736)>(0))){
$732.appendCharacter(m$1.Character(38,true));
}
var $736;
$732.append(query$.$aer11u$72x($735,$731));
}
return $732.string;
};query$.toRepresentation.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'human',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:Query,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Query:$m:toRepresentation')];},d:['ceylon.uri','Query','$m','toRepresentation']};};
m$1.atr$(query$,'string',function(){
var query$=this;
return query$.toRepresentation(false);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Query,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Query:$at:string')];},d:['ceylon.uri','Query','$at','string']};});
m$1.atr$(query$,'humanRepresentation',function(){
var query$=this;
return query$.toRepresentation(true);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Query,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Query:$at:humanRepresentation')];},d:['ceylon.uri','Query','$at','humanRepresentation']};});
query$.toString=function(){return this.string.valueOf();};
})(Query.$$.prototype);
}
return Query;
}
ex$.$init$Query=$init$Query;$init$Query();
function Uri(scheme,authority,path,query,fragment,uri$){
$init$Uri();
if(uri$===undefined)uri$=new Uri.$$;
if(scheme===undefined){scheme=$init$Uri().$defs$scheme(uri$,authority,path,query,fragment);}
uri$.scheme_=scheme;
if(authority===undefined){authority=$init$Uri().$defs$authority(uri$,scheme,path,query,fragment);}
uri$.authority_=authority;
if(path===undefined){path=$init$Uri().$defs$path(uri$,scheme,authority,query,fragment);}
uri$.path_=path;
if(query===undefined){query=$init$Uri().$defs$query(uri$,scheme,authority,path,fragment);}
uri$.query_=query;
if(fragment===undefined){fragment=$init$Uri().$defs$fragment(uri$,scheme,authority,path,query);}
uri$.fragment_=fragment;
return uri$;
}
Uri.$defs$scheme=function(uri$,authority,path,query,fragment){return null};Uri.$defs$authority=function(uri$,scheme,path,query,fragment){return defaultAuthority()};Uri.$defs$path=function(uri$,scheme,authority,query,fragment){return defaultPath()};Uri.$defs$query=function(uri$,scheme,authority,path,fragment){return defaultQuery()};Uri.$defs$fragment=function(uri$,scheme,authority,path,query){return null};Uri.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'scheme',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Uri:$at:scheme')];}},{nm:'authority',mt:'prm',def:1,$t:{t:Authority},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Uri:$at:authority')];}},{nm:'path',mt:'prm',def:1,$t:{t:Path},pa:1,an:function(){return[m$1.doc("The optional Path part")];}},{nm:'query',mt:'prm',def:1,$t:{t:Query},pa:1,an:function(){return[m$1.doc("The optional query part")];}},{nm:'fragment',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Uri:$at:fragment')];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Uri'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.uri','Uri']};};
ex$.Uri=Uri;
function $init$Uri(){
if(Uri.$$===undefined){
m$1.initTypeProto(Uri,'ceylon.uri::Uri',m$1.Basic);
(function(uri$){
m$1.atr$(uri$,'scheme',function(){return this.scheme_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Uri,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Uri:$at:scheme')];},d:['ceylon.uri','Uri','$at','scheme']};});
m$1.atr$(uri$,'authority',function(){return this.authority_;},undefined,function(){return{mod:$CCMM$,$t:{t:Authority},$cont:Uri,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Uri:$at:authority')];},d:['ceylon.uri','Uri','$at','authority']};});
m$1.atr$(uri$,'path',function(){return this.path_;},undefined,function(){return{mod:$CCMM$,$t:{t:Path},$cont:Uri,pa:1,an:function(){return[m$1.doc("The optional Path part")];},d:['ceylon.uri','Uri','$at','path']};});
m$1.atr$(uri$,'query',function(){return this.query_;},undefined,function(){return{mod:$CCMM$,$t:{t:Query},$cont:Uri,pa:1,an:function(){return[m$1.doc("The optional query part")];},d:['ceylon.uri','Uri','$at','query']};});
m$1.atr$(uri$,'fragment',function(){return this.fragment_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Uri,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Uri:$at:fragment')];},d:['ceylon.uri','Uri','$at','fragment']};});
m$1.atr$(uri$,'relative',function(){
var uri$=this;
return !m$1.nn$(uri$.scheme);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Uri,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Uri:$at:relative')];},d:['ceylon.uri','Uri','$at','relative']};});m$1.atr$(uri$,'pathPart',function(){
var uri$=this;
return uri$.path.string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Uri,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Uri:$at:pathPart')];},d:['ceylon.uri','Uri','$at','pathPart']};});m$1.atr$(uri$,'queryPart',function(){
var uri$=this;
return (uri$.query.specified?uri$.query.string:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Uri,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Uri:$at:queryPart')];},d:['ceylon.uri','Uri','$at','queryPart']};});uri$.$aer11u$738=function($739){
var uri$=this;
var $73a=m$1.StringBuilder();
var $73b;
if(m$1.nn$(($73b=uri$.scheme))){
$73a.append($73b);
$73a.append(":");
}
if(uri$.authority.specified){
$73a.append("//");
$73a.append(uri$.authority.toRepresentation($739));
}
$73a.append(uri$.path.toRepresentation($739));
if(uri$.query.specified){
$73a.append("?");
$73a.append(uri$.query.toRepresentation($739));
}
var $73c;
if(m$1.nn$(($73c=uri$.fragment))){
$73a.append("#");
$73a.append(($73d=($739?$73c:null),m$1.nn$($73d)?$73d:percentEncoder().encodeFragment($73c)));
var $73d;
}
return $73a.string;
};uri$.$aer11u$738.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'human',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:Uri,d:['ceylon.uri','Uri','$m','toRepresentation$g6tzg']};};
m$1.atr$(uri$,'string',function(){
var uri$=this;
return uri$.$aer11u$738(false);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Uri,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Uri:$at:string')];},d:['ceylon.uri','Uri','$at','string']};});m$1.atr$(uri$,'humanRepresentation',function(){
var uri$=this;
return uri$.$aer11u$738(true);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Uri,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Uri:$at:humanRepresentation')];},d:['ceylon.uri','Uri','$at','humanRepresentation']};});uri$.withScheme=function($73e){var uri$=this;
return Uri($73e,uri$.authority,uri$.path,uri$.query,uri$.fragment);
};
uri$.withScheme.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Uri},ps:[{nm:'scheme',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],$cont:Uri,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Uri:$m:withScheme')];},d:['ceylon.uri','Uri','$m','withScheme']};};
uri$.withAuthority=function($73f){var uri$=this;
return Uri(uri$.scheme,$73f,uri$.path,uri$.query,uri$.fragment);
};
uri$.withAuthority.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Uri},ps:[{nm:'authority',mt:'prm',$t:{t:Authority}}],$cont:Uri,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Uri:$m:withAuthority')];},d:['ceylon.uri','Uri','$m','withAuthority']};};
uri$.$aer11u$73g=function($73h,$73i){
var uri$=this;
if((!$73i.absolute&&$73h.specified)){
return Path(true,$73i.segments);
}
else{
return $73i;
}
};uri$.$aer11u$73g.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Path},ps:[{nm:'authority',mt:'prm',$t:{t:Authority}},{nm:'path',mt:'prm',$t:{t:Path}}],$cont:Uri,d:['ceylon.uri','Uri','$m','makePathAbsoluteIfRequired$lufv46']};};
uri$.withPath=function($73j){
var uri$=this;
return Uri(uri$.scheme,uri$.authority,uri$.$aer11u$73g(uri$.authority,$73j),uri$.query,uri$.fragment);
};uri$.withPath.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Uri},ps:[{nm:'path',mt:'prm',$t:{t:Path}}],$cont:Uri,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Uri:$m:withPath')];},d:['ceylon.uri','Uri','$m','withPath']};};
uri$.withQuery=function($73k){var uri$=this;
return Uri(uri$.scheme,uri$.authority,uri$.path,$73k,uri$.fragment);
};
uri$.withQuery.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Uri},ps:[{nm:'query',mt:'prm',$t:{t:Query}}],$cont:Uri,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Uri:$m:withQuery')];},d:['ceylon.uri','Uri','$m','withQuery']};};
uri$.withFragment=function($73l){var uri$=this;
return Uri(uri$.scheme,uri$.authority,uri$.path,uri$.query,$73l);
};
uri$.withFragment.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Uri},ps:[{nm:'fragment',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],$cont:Uri,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Uri:$m:withFragment')];},d:['ceylon.uri','Uri','$m','withFragment']};};
uri$.$_with$defs$scheme=function($73m,$73n,$73o,$73p,$73q){var uri$=this;
return uri$.scheme;};
uri$.$_with$defs$authority=function($73m,$73n,$73o,$73p,$73q){var uri$=this;
return uri$.authority;};
uri$.$_with$defs$path=function($73m,$73n,$73o,$73p,$73q){var uri$=this;
return uri$.path;};
uri$.$_with$defs$query=function($73m,$73n,$73o,$73p,$73q){var uri$=this;
return uri$.query;};
uri$.$_with$defs$fragment=function($73m,$73n,$73o,$73p,$73q){var uri$=this;
return uri$.fragment;};
uri$.$_with=function($73m,$73n,$73o,$73p,$73q){var uri$=this;
if($73m===undefined){$73m=uri$.scheme;}
if($73n===undefined){$73n=uri$.authority;}
if($73o===undefined){$73o=uri$.path;}
if($73p===undefined){$73p=uri$.query;}
if($73q===undefined){$73q=uri$.fragment;}
return Uri($73m,$73n,uri$.$aer11u$73g($73n,$73o),$73p,$73q);
};
uri$.$_with.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Uri},ps:[{nm:'scheme',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'authority',mt:'prm',def:1,$t:{t:Authority}},{nm:'path',mt:'prm',def:1,$t:{t:Path}},{nm:'query',mt:'prm',def:1,$t:{t:Query}},{nm:'fragment',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],$cont:Uri,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Uri:$m:with')];},d:['ceylon.uri','Uri','$m','with']};};
uri$.equals=function($73r){
var uri$=this;
var $73s;
if(m$1.is$(($73s=$73r),{t:Uri})){
if((uri$===$73s)){
return true;
}
return ((((eq(uri$.scheme,$73s.scheme)&&m$1.$eq$(uri$.authority,$73s.authority))&&m$1.$eq$(uri$.path,$73s.path))&&m$1.$eq$(uri$.query,$73s.query))&&eq(uri$.fragment,$73s.fragment));
}
function $73t(){return $73r;}
return false;
};uri$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Uri,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:Uri:$m:equals')];},d:['ceylon.uri','Uri','$m','equals']};};
m$1.atr$(uri$,'hash',function(){
var uri$=this;
var $73u=(1);
$73u=(((31)*$73u)+($73v=($73w=uri$.scheme,m$1.nn$($73w)?$73w.hash:null),m$1.nn$($73v)?$73v:(0)));
var $73v,$73w;
$73u=(((31)*$73u)+uri$.authority.hash);
$73u=(((31)*$73u)+uri$.path.hash);
$73u=(((31)*$73u)+uri$.query.hash);
$73u=(((31)*$73u)+($73x=($73y=uri$.fragment,m$1.nn$($73y)?$73y.hash:null),m$1.nn$($73x)?$73x:(0)));
var $73x,$73y;
return $73u;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Uri,pa:3,d:['ceylon.uri','Uri','$at','hash']};});uri$.toString=function(){return this.string.valueOf();};
})(Uri.$$.prototype);
}
return Uri;
}
ex$.$init$Uri=$init$Uri;$init$Uri();
function fromHex($73z){
if((($73z>=m$1.Character(48,true).integer)&&($73z<=m$1.Character(57,true).integer))){
return ($73z-m$1.Character(48,true).integer);
}
if((($73z>=m$1.Character(65,true).integer)&&($73z<=m$1.Character(70,true).integer))){
return (((10)+$73z)-m$1.Character(65,true).integer);
}
if((($73z>=m$1.Character(97,true).integer)&&($73z<=m$1.Character(102,true).integer))){
return (((10)+$73z)-m$1.Character(97,true).integer);
}
throw m$1.wrapexc(m$1.Exception("Invalid hexadecimal number: ".plus($73z.string)),'15:4-15:62','ceylon/uri/decodePercentEncoded.ceylon');
};fromHex.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'hex',mt:'prm',$t:{t:m$1.Integer}}],d:['ceylon.uri','fromHex']};};
function decodePercentEncoded($740){
var $741=m$1.Character(37,true).integer.$_byte;
var $742=m$1.$_Array(m$4.ascii$charset().encode($740),{Element$Array:{t:m$1.Byte}});
var $743=(0);
var $744=(0);
while(($743<$742.size)){
var $745;
m$1.asrt$((m$1.nn$(($745=$742.$_get($743)))),"Assertion failed: "+"\n\tviolated exists char = array[r]\n\tat decodePercentEncoded.ceylon (26:15-26:38)",'26:8-26:39','decodePercentEncoded.ceylon');
if(m$1.$eq$($745,$741)){
var $746;
if(m$1.nn$(($746=$742.$_get(($743=$743.successor))))){
var $747;
if(m$1.nn$(($747=$742.$_get(($743=$743.successor))))){
($748=(((16)*fromHex($746.unsigned))+fromHex($747.unsigned)).$_byte,$742.set($744,$748), $748);
var $748;
}
else{
throw m$1.wrapexc(m$1.Exception("Missing second hex number"),'35:20-35:64','ceylon/uri/decodePercentEncoded.ceylon');
}
}
else{
throw m$1.wrapexc(m$1.Exception("Missing first hex number"),'38:16-38:59','ceylon/uri/decodePercentEncoded.ceylon');
}
}
else{
($749=$745,$742.set($744,$749), $749);
var $749;
}
($74a=$743,$743=$74a.successor,$74a);
var $74a;
($74b=$744,$744=$74b.successor,$74b);
var $74b;
}
return m$4.utf8$charset().decode($742.take($744));
}
ex$.decodePercentEncoded=decodePercentEncoded;
decodePercentEncoded.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'str',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:decodePercentEncoded'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.uri','decodePercentEncoded']};};
function eq($74c,$74d){
var $74e;
if(m$1.nn$(($74e=$74c))){
var $74f;
if(m$1.nn$(($74f=$74d))){
return m$1.$eq$($74e,$74f);
}
function $74g(){return $74d;}
return false;
}
function $74h(){return $74c;}
return !m$1.nn$($74d);
};eq.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'a',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Object}]}},{nm:'b',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Object}]}}],d:['ceylon.uri','eq']};};
function parseParameter($74i){
var $74j=$74i.firstOccurrence(m$1.Character(61,true));
var $74k;
if(m$1.nn$(($74k=$74j))){
return Parameter(decodePercentEncoded($74i.initial($74k)),decodePercentEncoded($74i.terminal((($74i.size-$74k)-(1)))));
}
else{
return Parameter(decodePercentEncoded($74i));
}
}
ex$.parseParameter=parseParameter;
parseParameter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Parameter},ps:[{nm:'part',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:parseParameter')];},d:['ceylon.uri','parseParameter']};};
var $74l;function $valinit$$74l(){if($74l===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'defaultAuthority\' before it was set"),'12:0-12:40','parsing.ceylon');
if($74l===undefined){$74l=m$1.INIT$;$74l=Authority()};return $74l;};
function defaultAuthority(){return $valinit$$74l();}
var $prop$getDefaultAuthority={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Authority},d:['ceylon.uri','defaultAuthority']};}};
ex$.$prop$getDefaultAuthority=$prop$getDefaultAuthority;
$prop$getDefaultAuthority.get=defaultAuthority;
var $74m;function $valinit$$74m(){if($74m===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'defaultQuery\' before it was set"),'13:0-13:28','parsing.ceylon');
if($74m===undefined){$74m=m$1.INIT$;$74m=Query()};return $74m;};
function defaultQuery(){return $valinit$$74m();}
var $prop$getDefaultQuery={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Query},d:['ceylon.uri','defaultQuery']};}};
ex$.$prop$getDefaultQuery=$prop$getDefaultQuery;
$prop$getDefaultQuery.get=defaultQuery;
var $74n;function $valinit$$74n(){if($74n===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'defaultPath\' before it was set"),'14:0-14:25','parsing.ceylon');
if($74n===undefined){$74n=m$1.INIT$;$74n=Path()};return $74n;};
function defaultPath(){return $valinit$$74n();}
var $prop$getDefaultPath={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Path},d:['ceylon.uri','defaultPath']};}};
ex$.$prop$getDefaultPath=$prop$getDefaultPath;
$prop$getDefaultPath.get=defaultPath;
function parse($74o){
var $74p=null;
var $74q=null;
var $74r=null;
var $74s=null;
var $74t=null;
var $74u=false;
var $74v=defaultPath();
var $74w=defaultQuery();
var $74x=null;
function $74y($74z){
var $750=$74z.firstInclusion(":");
var $751;
if(m$1.nn$(($751=$750))){
if(($751>(0))){
$74p=$74z.measure(0,$751);
return $74z.spanFrom(($751+(1)));
}
}
return $74z;
};$74y.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'uri',mt:'prm',$t:{t:m$1.$_String}}],$cont:parse,d:['ceylon.uri','parse','$m','parseScheme$m11988']};};
function $752($753){
var $754=$753.firstOccurrence(m$1.Character(58,true));
var $755;
if(m$1.nn$(($755=$754))){
$74q=decodePercentEncoded($753.measure(0,$755));
$74r=decodePercentEncoded($753.spanFrom(($755+(1))));
}
else{
$74q=decodePercentEncoded($753);
$74r=null;
}
};$752.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'userInfo',mt:'prm',$t:{t:m$1.$_String}}],$cont:parse,d:['ceylon.uri','parse','$m','parseUserInfo$mrmpb0']};};
function $756($757){
var $758;
if($757.startsWith("[")){
$74u=true;
var $759=$757.firstOccurrence(m$1.Character(93,true));
var $75a;
if(m$1.nn$(($75a=$759))){
$74s=$757.measure(1,($75a-(1)));
var $75b=$757.spanFrom(($75a+(1)));
if($75b.startsWith(":")){
$758=$75b.spanFrom(1);
}
else{
$758=null;
}
}
else{
throw m$1.wrapexc(InvalidUriException("Invalid IP literal: ".plus($757)),'70:16-70:79','ceylon/uri/parsing.ceylon');
}
}
else{
$74u=false;
var $75c=$757.lastOccurrence(m$1.Character(58,true));
var $75d;
if(m$1.nn$(($75d=$75c))){
$74s=decodePercentEncoded($757.measure(0,$75d));
$758=$757.spanFrom(($75d+(1)));
}
else{
$74s=decodePercentEncoded($757);
$758=null;
}
}
var $75e;
if(m$1.nn$(($75e=$758))){
$74t=function(){var $75f;
if(m$1.is$(($75f=m$1.Integer.$st$.parse($75e)),{t:m$1.Integer}))return $75f;else return null}();
var $75g;
if(m$1.nn$(($75g=$74t))){
if(($75g<(0))){
throw m$1.wrapexc(InvalidUriException("Invalid port number: ".plus($75e)),'89:20-89:81','ceylon/uri/parsing.ceylon');
}
}
else{
throw m$1.wrapexc(InvalidUriException("Invalid port number: ".plus($75e)),'92:16-92:77','ceylon/uri/parsing.ceylon');
}
}
else{
$74t=null;
}
};$756.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'hostAndPort',mt:'prm',$t:{t:m$1.$_String}}],$cont:parse,d:['ceylon.uri','parse','$m','parseHostAndPort$dtrlrv']};};
function $75h($75i){
if(!$75i.startsWith("//")){
return $75i;
}
var $75j=$75i.spanFrom(2);
var $75k=($75l=($75m=$75j.firstOccurrence(m$1.Character(47,true)),m$1.nn$($75m)?$75m:$75j.firstOccurrence(m$1.Character(63,true))),m$1.nn$($75l)?$75l:$75j.firstOccurrence(m$1.Character(35,true)));
var $75l,$75m;
var $75n;
var $75o;
var $75p;
if(m$1.nn$(($75p=$75k))){
$75n=$75j.measure(0,$75p);
$75o=$75j.spanFrom($75p);
}
else{
$75n=$75j;
$75o="";
}
var $75q=$75n.firstOccurrence(m$1.Character(64,true));
var $75r;
var $75s;
if(m$1.nn$(($75s=$75q))){
$752($75n.measure(0,$75s));
$75r=$75n.spanFrom(($75s+(1)));
}
else{
$75r=$75n;
}
$756($75r);
return $75o;
};$75h.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'uri',mt:'prm',$t:{t:m$1.$_String}}],$cont:parse,d:['ceylon.uri','parse','$m','parseAuthority$2cjt40']};};
var $75t=function($75u){return m$1.tpl$([],m$1.for$(function(){
var $75v=($75x=m$1.jsc$2(($75y=m$1.Character(59,true),m$1.jsc$3($75y,$75y.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:m$1.$_Object}])}),$75z=false,($760=$75u,m$1.jsc$3($760,$760.$_split))($75x,undefined,$75z,undefined)).iterator(),$75w=m$1.finished();
var n$75w=function(){return $75w=$75v.next();}
return function(){
if(n$75w()!==m$1.finished()){
var $761=$75w,$762=parseParameter($761);
return $762;
}
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:Parameter}}));
var $75x,$75y,$75z,$760;
};
$75t.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:Parameter}}},ps:[{nm:'part',mt:'prm',$t:{t:m$1.$_String}}],$cont:parse,d:['ceylon.uri','parse','$m','parsePathSegmentParameters$5c7b9v']};};
function $763($764){
var $765=$764.firstOccurrence(m$1.Character(59,true));
var $766;
var $767;
if(m$1.nn$(($767=$765))){
$766=$764.span(0,($767-(1)));
}
else{
$766=$764;
}
var $768;
var $769;
if(m$1.nn$(($769=$765))){
$768=m$1.spread$2(PathSegment,decodePercentEncoded($766),$75t($764.spanFrom(($769+(1)))).sequence());
}
else{
$768=PathSegment(decodePercentEncoded($766));
}
return $768;
};$763.$crtmm$=function(){return{mod:$CCMM$,$t:{t:PathSegment},ps:[{nm:'part',mt:'prm',$t:{t:m$1.$_String}}],$cont:parse,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:parse:$m:parseRawPathSegment$ql9kx')];},d:['ceylon.uri','parse','$m','parseRawPathSegment$ql9kx']};};
function $76a($76b){
var $76c=($76d=$76b.firstOccurrence(m$1.Character(63,true)),m$1.nn$($76d)?$76d:$76b.firstOccurrence(m$1.Character(35,true)));
var $76d;
var $76e;
var $76f;
var $76g;
if(m$1.nn$(($76g=$76c))){
$76e=$76b.measure(0,$76g);
$76f=$76b.spanFrom($76g);
}
else{
$76e=$76b;
$76f="";
}
if(!$76e.empty){
var $76h=($76i=m$1.jsc$2(($76j=m$1.Character(47,true),m$1.jsc$3($76j,$76j.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:m$1.$_Object}])}),$76k=false,($76l=$76e,m$1.jsc$3($76l,$76l.$_split))($76i,undefined,$76k,undefined)).sequence();
var $76i,$76j,$76k,$76l;
var $76m=$76h.first.empty;
$74v=($76n=$76m,$76o=($76m?$76h.rest.collect(m$1.jsc$3(0,$763),{Result$collect:{t:PathSegment}}):$76h.collect(m$1.jsc$3(0,$763),{Result$collect:{t:PathSegment}})),Path($76n,$76o));
var $76n,$76o;
}
return $76f;
};$76a.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'uri',mt:'prm',$t:{t:m$1.$_String}}],$cont:parse,d:['ceylon.uri','parse','$m','parsePath$o6l320']};};
var $76p=function($76q){return ($76r=($76s=m$1.jsc$2(($76t=m$1.Character(38,true),m$1.jsc$3($76t,$76t.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:m$1.$_Object}])}),$76u=false,($76v=$76q,m$1.jsc$3($76v,$76v.$_split))($76s,undefined,$76u,undefined)).collect(parseParameter,{Result$collect:{t:Parameter}}),Query($76r));
var $76r,$76s,$76t,$76u,$76v;
};
$76p.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Query},ps:[{nm:'queryPart',mt:'prm',$t:{t:m$1.$_String}}],$cont:parse,d:['ceylon.uri','parse','$m','parseQueryPart$owmuko']};};
function $76w($76x){
var $76y=$76x.$_get(0);
var $76z;
if(m$1.nn$(($76z=$76y))){
if(m$1.$eq$($76z,m$1.Character(63,true))){
var $770=($771=$76x.firstOccurrence(m$1.Character(35,true)),m$1.nn$($771)?$771:$76x.size);
var $771;
$74w=$76p($76x.measure(1,($770-(1))));
return $76x.spanFrom($770);
}
}
return $76x;
};$76w.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'uri',mt:'prm',$t:{t:m$1.$_String}}],$cont:parse,d:['ceylon.uri','parse','$m','parseQuery$le8u59']};};
function $772($773){
var $774=$773.$_get(0);
var $775;
if(m$1.nn$(($775=$774))){
if(m$1.$eq$($775,m$1.Character(35,true))){
$74x=decodePercentEncoded($773.spanFrom(1));
return "";
}
}
return $773;
};$772.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'uri',mt:'prm',$t:{t:m$1.$_String}}],$cont:parse,d:['ceylon.uri','parse','$m','parseFragment$oobhkr']};};
function $776($777){
var $778=$74y($777);
$778=$75h($778);
$778=$76a($778);
$778=$76w($778);
$778=$772($778);
};$776.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'uri',mt:'prm',$t:{t:m$1.$_String}}],$cont:parse,d:['ceylon.uri','parse','$m','parseURI$t1etcv']};};
$776($74o);
var $779=((((m$1.nn$($74q)||m$1.nn$($74r))||m$1.nn$($74s))||m$1.nn$($74t))?($77a=$74q,$77b=$74r,$77c=$74s,$77d=$74t,$77e=$74u,Authority($77a,$77b,$77c,$77d,$77e)):defaultAuthority());
var $77a,$77b,$77c,$77d,$77e;
return Uri($74p,$779,$74v,$74w,$74x);
}
ex$.parse=parse;
parse.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Uri},ps:[{nm:'uri',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc("Parses a URI"),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.uri'),InvalidUriException),"If the URI is invalid")];},d:['ceylon.uri','parse']};};
function $77f(){
var percentEncoder$=new $77f.$$;
percentEncoder$.$aer11u$77h=function $aer11u$77h($77i){return ($77j=($77k=m$1.sarg$(function($77l){switch($77l){case 0:return m$1.Character(58,true);case 1:return m$1.Character(47,true);case 2:return m$1.Character(63,true);case 3:return m$1.Character(35,true);case 4:return m$1.Character(91,true);case 5:return m$1.Character(93,true);case 6:return m$1.Character(64,true);}return m$1.finished();},undefined,{}),m$1.set($77k,undefined,{Element$set:{t:m$1.Character}})),m$1.jsc$3($77j,$77j.contains))($77i);};
var $77j,$77k;
percentEncoder$.$aer11u$77m=function $aer11u$77m($77n){return ($77o=($77p=m$1.sarg$(function($77q){switch($77q){case 0:return m$1.Character(33,true);case 1:return m$1.Character(36,true);case 2:return m$1.Character(38,true);case 3:return m$1.Character(39,true);case 4:return m$1.Character(40,true);case 5:return m$1.Character(41,true);case 6:return m$1.Character(42,true);case 7:return m$1.Character(43,true);case 8:return m$1.Character(44,true);case 9:return m$1.Character(59,true);case 10:return m$1.Character(61,true);}return m$1.finished();},undefined,{}),m$1.set($77p,undefined,{Element$set:{t:m$1.Character}})),m$1.jsc$3($77o,$77o.contains))($77n);};
var $77o,$77p;
return percentEncoder$;
};$77f.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},d:['ceylon.uri','percentEncoder']};};
function $init$percentEncoder(){
if($77f.$$===undefined){
m$1.initTypeProto($77f,'ceylon.uri::percentEncoder',m$1.Basic);
(function(percentEncoder$){
percentEncoder$.$aer11u$77r=function($77s){var percentEncoder$=this;
return ($77t=$77s,$77t.notSmallerThan(m$1.Character(97,true))&&$77t.notLargerThan(m$1.Character(122,true)));
};
percentEncoder$.$aer11u$77r.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:$77f,an:function(){return[m$1.doc("lowalpha = \'a\'..\'z\'")];},d:['ceylon.uri','percentEncoder','$m','isLowAlpha$kv7edy']};};
percentEncoder$.$aer11u$77u=function($77v){var percentEncoder$=this;
return ($77w=$77v,$77w.notSmallerThan(m$1.Character(65,true))&&$77w.notLargerThan(m$1.Character(90,true)));
};
percentEncoder$.$aer11u$77u.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:$77f,an:function(){return[m$1.doc("upalpha = \'A\'..\'Z\'")];},d:['ceylon.uri','percentEncoder','$m','isUpAlpha$994uqh']};};
percentEncoder$.$aer11u$77x=function($77y){var percentEncoder$=this;
return (percentEncoder$.$aer11u$77r($77y)||percentEncoder$.$aer11u$77u($77y));
};
percentEncoder$.$aer11u$77x.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:$77f,an:function(){return[m$1.doc("alpha = lowalpha | upalpha")];},d:['ceylon.uri','percentEncoder','$m','isAlpha$s8t8ga']};};
percentEncoder$.$aer11u$77z=function($780){var percentEncoder$=this;
return ($781=$780,$781.notSmallerThan(m$1.Character(48,true))&&$781.notLargerThan(m$1.Character(57,true)));
};
percentEncoder$.$aer11u$77z.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:$77f,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:percentEncoder:$m:isDigit$hq1gxt')];},d:['ceylon.uri','percentEncoder','$m','isDigit$hq1gxt']};};
percentEncoder$.$aer11u$782=function($783){var percentEncoder$=this;
return (percentEncoder$.$aer11u$77x($783)||percentEncoder$.$aer11u$77z($783));
};
percentEncoder$.$aer11u$782.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:$77f,an:function(){return[m$1.doc("alphanum = alpha | digit")];},d:['ceylon.uri','percentEncoder','$m','isAlphaNum$7ekm08']};};
percentEncoder$.$aer11u$784=function($785){var percentEncoder$=this;
return ((((percentEncoder$.$aer11u$782($785)||m$1.$eq$($785,m$1.Character(45,true)))||m$1.$eq$($785,m$1.Character(46,true)))||m$1.$eq$($785,m$1.Character(95,true)))||m$1.$eq$($785,m$1.Character(126,true)));
};
percentEncoder$.$aer11u$784.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:$77f,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:percentEncoder:$m:isUnreserved$xh6re1')];},d:['ceylon.uri','percentEncoder','$m','isUnreserved$xh6re1']};};
percentEncoder$.$aer11u$786=function($787){var percentEncoder$=this;
return (percentEncoder$.$aer11u$784($787)||percentEncoder$.$aer11u$77m($787));
};
percentEncoder$.$aer11u$786.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:$77f,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:percentEncoder:$m:isAuthority$vp4x21')];},d:['ceylon.uri','percentEncoder','$m','isAuthority$vp4x21']};};
percentEncoder$.$aer11u$788=function($789){var percentEncoder$=this;
return (((percentEncoder$.$aer11u$784($789)||percentEncoder$.$aer11u$77m($789))||m$1.$eq$($789,m$1.Character(58,true)))||m$1.$eq$($789,m$1.Character(64,true)));
};
percentEncoder$.$aer11u$788.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:$77f,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:percentEncoder:$m:isPChar$txcy8i')];},d:['ceylon.uri','percentEncoder','$m','isPChar$txcy8i']};};
percentEncoder$.$aer11u$78a=function($78b){var percentEncoder$=this;
return (percentEncoder$.$aer11u$788($78b)&&!m$1.$eq$($78b,m$1.Character(59,true)));
};
percentEncoder$.$aer11u$78a.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:$77f,an:function(){return[m$1.doc("path_segment = pchar <without> \";\"\n")];},d:['ceylon.uri','percentEncoder','$m','isPathSegment$yzw3cq']};};
percentEncoder$.$aer11u$78c=function($78d){var percentEncoder$=this;
return ((percentEncoder$.$aer11u$788($78d)&&!m$1.$eq$($78d,m$1.Character(59,true)))&&!m$1.$eq$($78d,m$1.Character(61,true)));
};
percentEncoder$.$aer11u$78c.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:$77f,an:function(){return[m$1.doc("path_param_name = pchar <without> \";\" | \"=\"\n")];},d:['ceylon.uri','percentEncoder','$m','isPathParamName$q892pj']};};
percentEncoder$.$aer11u$78e=function($78f){var percentEncoder$=this;
return (percentEncoder$.$aer11u$788($78f)&&(!m$1.$eq$($78f,m$1.Character(59,true))));
};
percentEncoder$.$aer11u$78e.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:$77f,an:function(){return[m$1.doc("path_param_value = pchar <without> \";\"\n")];},d:['ceylon.uri','percentEncoder','$m','isPathParamValue$2cicj3']};};
percentEncoder$.$aer11u$78g=function($78h){var percentEncoder$=this;
return (((((percentEncoder$.$aer11u$788($78h)||m$1.$eq$($78h,m$1.Character(47,true)))||m$1.$eq$($78h,m$1.Character(63,true)))&&!m$1.$eq$($78h,m$1.Character(61,true)))&&!m$1.$eq$($78h,m$1.Character(38,true)))&&!m$1.$eq$($78h,m$1.Character(43,true)));
};
percentEncoder$.$aer11u$78g.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:$77f,an:function(){return[m$1.doc("query = pchar / \"/\" / \"?\"\n")];},d:['ceylon.uri','percentEncoder','$m','isQuery$dh5bdw']};};
percentEncoder$.$aer11u$78i=function($78j){var percentEncoder$=this;
return ((percentEncoder$.$aer11u$788($78j)||m$1.$eq$($78j,m$1.Character(47,true)))||m$1.$eq$($78j,m$1.Character(63,true)));
};
percentEncoder$.$aer11u$78i.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:$77f,an:function(){return[m$1.doc("fragment = pchar / \"/\" / \"?\"\n")];},d:['ceylon.uri','percentEncoder','$m','isFragment$jbnhcw']};};
percentEncoder$.encodeUser=function($78k){var percentEncoder$=this;
return percentEncoder$.$aer11u$78l($78k,"UTF-8",m$1.jsc$2(m$1.jsc$3(percentEncoder$,percentEncoder$.$aer11u$786),[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],{}));
};
percentEncoder$.encodeUser.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'str',mt:'prm',$t:{t:m$1.$_String}}],$cont:$77f,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:percentEncoder:$m:encodeUser')];},d:['ceylon.uri','percentEncoder','$m','encodeUser']};};
percentEncoder$.encodePassword=function($78m){var percentEncoder$=this;
return percentEncoder$.$aer11u$78l($78m,"UTF-8",m$1.jsc$2(m$1.jsc$3(percentEncoder$,percentEncoder$.$aer11u$786),[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],{}));
};
percentEncoder$.encodePassword.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'str',mt:'prm',$t:{t:m$1.$_String}}],$cont:$77f,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:percentEncoder:$m:encodePassword')];},d:['ceylon.uri','percentEncoder','$m','encodePassword']};};
percentEncoder$.encodeRegName=function($78n){var percentEncoder$=this;
return percentEncoder$.$aer11u$78l($78n,"UTF-8",m$1.jsc$2(m$1.jsc$3(percentEncoder$,percentEncoder$.$aer11u$786),[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],{}));
};
percentEncoder$.encodeRegName.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'str',mt:'prm',$t:{t:m$1.$_String}}],$cont:$77f,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:percentEncoder:$m:encodeRegName')];},d:['ceylon.uri','percentEncoder','$m','encodeRegName']};};
percentEncoder$.encodePathSegmentName=function($78o){
var percentEncoder$=this;
return percentEncoder$.$aer11u$78l($78o,"UTF-8",m$1.jsc$2(m$1.jsc$3(percentEncoder$,percentEncoder$.$aer11u$78a),[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],{}));
};percentEncoder$.encodePathSegmentName.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'str',mt:'prm',$t:{t:m$1.$_String}}],$cont:$77f,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:percentEncoder:$m:encodePathSegmentName')];},d:['ceylon.uri','percentEncoder','$m','encodePathSegmentName']};};
percentEncoder$.encodePathSegmentParamName=function($78p){var percentEncoder$=this;
return percentEncoder$.$aer11u$78l($78p,"UTF-8",m$1.jsc$2(m$1.jsc$3(percentEncoder$,percentEncoder$.$aer11u$78c),[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],{}));
};
percentEncoder$.encodePathSegmentParamName.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'str',mt:'prm',$t:{t:m$1.$_String}}],$cont:$77f,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:percentEncoder:$m:encodePathSegmentParamName')];},d:['ceylon.uri','percentEncoder','$m','encodePathSegmentParamName']};};
percentEncoder$.encodePathSegmentParamValue=function($78q){var percentEncoder$=this;
return percentEncoder$.$aer11u$78l($78q,"UTF-8",m$1.jsc$2(m$1.jsc$3(percentEncoder$,percentEncoder$.$aer11u$78e),[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],{}));
};
percentEncoder$.encodePathSegmentParamValue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'str',mt:'prm',$t:{t:m$1.$_String}}],$cont:$77f,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:percentEncoder:$m:encodePathSegmentParamValue')];},d:['ceylon.uri','percentEncoder','$m','encodePathSegmentParamValue']};};
percentEncoder$.encodeQueryPart=function($78r){var percentEncoder$=this;
return percentEncoder$.$aer11u$78l($78r,"UTF-8",m$1.jsc$2(m$1.jsc$3(percentEncoder$,percentEncoder$.$aer11u$78g),[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],{}));
};
percentEncoder$.encodeQueryPart.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'str',mt:'prm',$t:{t:m$1.$_String}}],$cont:$77f,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:percentEncoder:$m:encodeQueryPart')];},d:['ceylon.uri','percentEncoder','$m','encodeQueryPart']};};
percentEncoder$.encodeFragment=function($78s){var percentEncoder$=this;
return percentEncoder$.$aer11u$78l($78s,"UTF-8",m$1.jsc$2(m$1.jsc$3(percentEncoder$,percentEncoder$.$aer11u$78i),[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],{}));
};
percentEncoder$.encodeFragment.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'str',mt:'prm',$t:{t:m$1.$_String}}],$cont:$77f,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:percentEncoder:$m:encodeFragment')];},d:['ceylon.uri','percentEncoder','$m','encodeFragment']};};
percentEncoder$.$aer11u$78l=function($78t,$78u,$78v){
var percentEncoder$=this;
var $78w=m$1.StringBuilder();
var $78y;for(var $78x=$78t.iterator();($78y=$78x.next())!==m$1.finished();){
if($78v($78y)){
$78w.append($78y.string);
}
else{
var $78z=m$4.charsetsByAlias$charset().$_get($78u);
var $790;
if(!m$1.nn$(($790=$78z))){
throw m$1.wrapexc(m$1.AssertionError("Encoding not supported: \'"+($78u)+"\'"),'153:20-153:82','ceylon/uri/percentEncoder.ceylon');
}
function $791(){return $78z;}
var $792=$791().encode($78y.string);
var $794;for(var $793=$792.iterator();($794=$793.next())!==m$1.finished();){
$78w.appendCharacter(m$1.Character(37,true));
$78w.append(m$1.Integer.$st$.format($794.unsigned,16).uppercased.pad(2,m$1.Character(48,true)));
}
}
}
return $78w.string;
};percentEncoder$.$aer11u$78l.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'str',mt:'prm',$t:{t:m$1.$_String}},{nm:'encoding',mt:'prm',$t:{t:m$1.$_String}},{nm:'allowed',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:m$1.Character}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}]}],$cont:$77f,d:['ceylon.uri','percentEncoder','$m','encodePart$uehecp']};};
percentEncoder$.toString=function(){return this.string.valueOf();};
})($77f.$$.prototype);
}
return $77f;
}
ex$.$init$percentEncoder=$init$percentEncoder;$init$percentEncoder();var $795;
function percentEncoder(){
if($795===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'percentEncoder\' before it was set"),'5:0-165:0','percentEncoder.ceylon');
if($795===undefined){$795=m$1.INIT$;$795=$init$percentEncoder()();$795.$crtmm$=percentEncoder.$crtmm$;}
return $795;
}
ex$.percentEncoder=percentEncoder;
percentEncoder.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$percentEncoder()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.uri:percentEncoder'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.uri','percentEncoder']};};
$prop$getPercentEncoder=percentEncoder;
ex$.$prop$getPercentEncoder=$prop$getPercentEncoder;
ex$.$pkg$ans$ceylon$uri=function(){return[m$1.doc$($CCMM$,'ceylon.uri','$pkg-anns'),m$1.shared()];};
ex$.$pkgunsh$ceylon$uri={'fromHex':fromHex,'eq':eq,'defaultAuthority':$prop$getDefaultAuthority,'defaultQuery':$prop$getDefaultQuery,'defaultPath':$prop$getDefaultPath};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
