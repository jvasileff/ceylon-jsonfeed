(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('ceylon/time/1.3.2/ceylon.time-1.3.2', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/time/1.3.2/ceylon.time-1.3.2-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.3.2/ceylon.language-1.3.2');
m$1.$addmod$(m$1,'ceylon.language/1.3.2');
m$1.$addmod$(ex$,'ceylon.time/1.3.2');
ex$.$mod$ans$=function(){return[m$1.doc$($CCMM$,'','$mod-anns'),m$1.by(m$1.$arr$sa$(["Diego Coronel","Roland Tepp"],{t:m$1.$_String}))];};
function Clock(clock$){
}
Clock.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Clock')];},d:['ceylon.time','Clock']};};
ex$.Clock=Clock;
function $init$Clock(){
if(Clock.$$===undefined){
m$1.initTypeProtoI(Clock,'ceylon.time::Clock');
(function(clock$){
clock$.milliseconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:Clock,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Clock:$m:milliseconds')];},d:['ceylon.time','Clock','$m','milliseconds']};}};clock$.instant={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Instant},ps:[],$cont:Clock,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Clock:$m:instant')];},d:['ceylon.time','Clock','$m','instant']};}};clock$.toString=function(){return this.string.valueOf();};
})(Clock.$$.prototype);
}
return Clock;
}
ex$.$init$Clock=$init$Clock;$init$Clock();
function $60w(){
var systemTime$=new $60w.$$;Clock(systemTime$);
systemTime$.$wgb6s9$60y_="System time";
systemTime$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$60w,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:systemTime:$at:string')];},d:['ceylon.time','systemTime','$at','string']};}};
systemTime$.$prop$getString.get=function(){return string};
return systemTime$;
};$60w.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:Clock}],d:['ceylon.time','systemTime']};};
function $init$systemTime(){
if($60w.$$===undefined){
m$1.initTypeProto($60w,'ceylon.time::systemTime',m$1.Basic,$init$Clock());
(function(systemTime$){
systemTime$.milliseconds=function(){return m$1.system().milliseconds;
};
systemTime$.milliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:$60w,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:systemTime:$m:milliseconds')];},d:['ceylon.time','systemTime','$m','milliseconds']};};
systemTime$.instant=function(){var systemTime$=this;
return Instant(systemTime$.milliseconds());
};
systemTime$.instant.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[],$cont:$60w,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:systemTime:$m:instant')];},d:['ceylon.time','systemTime','$m','instant']};};
m$1.atr$(systemTime$,'string',function(){return this.$wgb6s9$60y_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$60w,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:systemTime:$at:string')];},d:['ceylon.time','systemTime','$at','string']};});
systemTime$.toString=function(){return this.string.valueOf();};
})($60w.$$.prototype);
}
return $60w;
}
ex$.$init$systemTime=$init$systemTime;$init$systemTime();var $60z;
function systemTime(){
if($60z===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'systemTime\' before it was set"),'29:0-41:0','Clock.ceylon');
if($60z===undefined){$60z=m$1.INIT$;$60z=$init$systemTime()();$60z.$crtmm$=systemTime.$crtmm$;}
return $60z;
}
ex$.systemTime=systemTime;
systemTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$systemTime()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:systemTime')];},d:['ceylon.time','systemTime']};};
$prop$getSystemTime=systemTime;
ex$.$prop$getSystemTime=$prop$getSystemTime;
function fixedTime($610){
var $611=$610;
if(m$1.is$($611,{t:Instant})) {
return FixedInstant($611);
}
else if(m$1.is$($611,{t:m$1.Integer})) {
return FixedMilliseconds($611);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
ex$.fixedTime=fixedTime;
fixedTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Clock},ps:[{nm:'instant',mt:'prm',$t:{t:'u',l:[{t:Instant},{t:m$1.Integer}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:fixedTime')];},d:['ceylon.time','fixedTime']};};
function FixedInstant($wgb6s9$612,fixedInstant$){
$init$FixedInstant();
if(fixedInstant$===undefined)fixedInstant$=new FixedInstant.$$;
fixedInstant$.$wgb6s9$612_=$wgb6s9$612;
Clock(fixedInstant$);
fixedInstant$.$wgb6s9$613_="Fixed to "+(fixedInstant$.instant().string);
return fixedInstant$;
}
FixedInstant.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'fixedInstant',mt:'prm',$t:{t:Instant}}],sts:[{t:Clock}],an:function(){return[m$1.doc$($CCMM$,'ceylon.time:FixedInstant')];},d:['ceylon.time','FixedInstant']};};
ex$.FixedInstant=FixedInstant;
function $init$FixedInstant(){
if(FixedInstant.$$===undefined){
m$1.initTypeProto(FixedInstant,'ceylon.time::FixedInstant',m$1.Basic,$init$Clock());
(function(fixedInstant$){
m$1.atr$(fixedInstant$,'$wgb6s9$612',function(){return this.$wgb6s9$612_;},undefined,function(){return{mod:$CCMM$,$t:{t:Instant},$cont:FixedInstant,d:['ceylon.time','FixedInstant','$at','fixedInstant$dw5xdz']};});
fixedInstant$.milliseconds=function(){var fixedInstant$=this;
return fixedInstant$.$wgb6s9$612.millisecondsOfEpoch;
};
fixedInstant$.milliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:FixedInstant,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:FixedInstant:$m:milliseconds')];},d:['ceylon.time','FixedInstant','$m','milliseconds']};};
fixedInstant$.instant=function(){var fixedInstant$=this;
return fixedInstant$.$wgb6s9$612;
};
fixedInstant$.instant.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[],$cont:FixedInstant,pa:3,an:function(){return[m$1.doc("Returns the fixed instant.")];},d:['ceylon.time','FixedInstant','$m','instant']};};
m$1.atr$(fixedInstant$,'string',function(){return this.$wgb6s9$613_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:FixedInstant,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:FixedInstant:$at:string')];},d:['ceylon.time','FixedInstant','$at','string']};});
fixedInstant$.toString=function(){return this.string.valueOf();};
})(FixedInstant.$$.prototype);
}
return FixedInstant;
}
ex$.$init$FixedInstant=$init$FixedInstant;$init$FixedInstant();
function FixedMilliseconds($wgb6s9$614,fixedMilliseconds$){
$init$FixedMilliseconds();
if(fixedMilliseconds$===undefined)fixedMilliseconds$=new FixedMilliseconds.$$;
fixedMilliseconds$.$wgb6s9$614_=$wgb6s9$614;
Clock(fixedMilliseconds$);
fixedMilliseconds$.$wgb6s9$615_="Fixed to "+(fixedMilliseconds$.instant().string);
return fixedMilliseconds$;
}
FixedMilliseconds.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'fixedMilliseconds',mt:'prm',$t:{t:m$1.Integer}}],sts:[{t:Clock}],an:function(){return[m$1.doc$($CCMM$,'ceylon.time:FixedMilliseconds')];},d:['ceylon.time','FixedMilliseconds']};};
ex$.FixedMilliseconds=FixedMilliseconds;
function $init$FixedMilliseconds(){
if(FixedMilliseconds.$$===undefined){
m$1.initTypeProto(FixedMilliseconds,'ceylon.time::FixedMilliseconds',m$1.Basic,$init$Clock());
(function(fixedMilliseconds$){
m$1.atr$(fixedMilliseconds$,'$wgb6s9$614',function(){return this.$wgb6s9$614_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:FixedMilliseconds,d:['ceylon.time','FixedMilliseconds','$at','fixedMilliseconds$ip85yf']};});
fixedMilliseconds$.milliseconds=function(){var fixedMilliseconds$=this;
return fixedMilliseconds$.$wgb6s9$614;
};
fixedMilliseconds$.milliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:FixedMilliseconds,pa:3,an:function(){return[m$1.doc("Returns the fixed milliseconds.")];},d:['ceylon.time','FixedMilliseconds','$m','milliseconds']};};
fixedMilliseconds$.instant=function(){var fixedMilliseconds$=this;
return Instant(fixedMilliseconds$.$wgb6s9$614);
};
fixedMilliseconds$.instant.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[],$cont:FixedMilliseconds,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:FixedMilliseconds:$m:instant')];},d:['ceylon.time','FixedMilliseconds','$m','instant']};};
m$1.atr$(fixedMilliseconds$,'string',function(){return this.$wgb6s9$615_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:FixedMilliseconds,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:FixedMilliseconds:$at:string')];},d:['ceylon.time','FixedMilliseconds','$at','string']};});
fixedMilliseconds$.toString=function(){return this.string.valueOf();};
})(FixedMilliseconds.$$.prototype);
}
return FixedMilliseconds;
}
ex$.$init$FixedMilliseconds=$init$FixedMilliseconds;$init$FixedMilliseconds();
function offsetTime($616,$617){return OffsetClock($616,$617);
};
offsetTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Clock},ps:[{nm:'baseClock',mt:'prm',$t:{t:Clock}},{nm:'offset',mt:'prm',$t:{t:Duration}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:offsetTime')];},d:['ceylon.time','offsetTime']};};
ex$.offsetTime=offsetTime;
function OffsetClock($wgb6s9$618,$wgb6s9$619,offsetClock$){
$init$OffsetClock();
if(offsetClock$===undefined)offsetClock$=new OffsetClock.$$;
offsetClock$.$wgb6s9$618_=$wgb6s9$618;
offsetClock$.$wgb6s9$619_=$wgb6s9$619;
Clock(offsetClock$);
offsetClock$.$wgb6s9$61a_="Offset of "+(offsetClock$.$wgb6s9$619.period.normalized().string)+" from "+(offsetClock$.$wgb6s9$618.string);
return offsetClock$;
}
OffsetClock.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'baseClock',mt:'prm',$t:{t:Clock}},{nm:'offset',mt:'prm',$t:{t:Duration}}],sts:[{t:Clock}],an:function(){return[m$1.doc$($CCMM$,'ceylon.time:OffsetClock')];},d:['ceylon.time','OffsetClock']};};
ex$.OffsetClock=OffsetClock;
function $init$OffsetClock(){
if(OffsetClock.$$===undefined){
m$1.initTypeProto(OffsetClock,'ceylon.time::OffsetClock',m$1.Basic,$init$Clock());
(function(offsetClock$){
m$1.atr$(offsetClock$,'$wgb6s9$618',function(){return this.$wgb6s9$618_;},undefined,function(){return{mod:$CCMM$,$t:{t:Clock},$cont:OffsetClock,d:['ceylon.time','OffsetClock','$at','baseClock$wp0y7f']};});
m$1.atr$(offsetClock$,'$wgb6s9$619',function(){return this.$wgb6s9$619_;},undefined,function(){return{mod:$CCMM$,$t:{t:Duration},$cont:OffsetClock,d:['ceylon.time','OffsetClock','$at','offset$fimsw5']};});
offsetClock$.milliseconds=function(){var offsetClock$=this;
return (offsetClock$.$wgb6s9$618.milliseconds()+offsetClock$.$wgb6s9$619.milliseconds);
};
offsetClock$.milliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:OffsetClock,pa:3,d:['ceylon.time','OffsetClock','$m','milliseconds']};};
offsetClock$.instant=function(){var offsetClock$=this;
return Instant(offsetClock$.milliseconds());
};
offsetClock$.instant.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[],$cont:OffsetClock,pa:3,d:['ceylon.time','OffsetClock','$m','instant']};};
m$1.atr$(offsetClock$,'string',function(){return this.$wgb6s9$61a_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:OffsetClock,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:OffsetClock:$at:string')];},d:['ceylon.time','OffsetClock','$at','string']};});
offsetClock$.toString=function(){return this.string.valueOf();};
})(OffsetClock.$$.prototype);
}
return OffsetClock;
}
ex$.$init$OffsetClock=$init$OffsetClock;$init$OffsetClock();
function $_Date(date$){
ReadableDate$base(date$);
DateBehavior$base({Element$DateBehavior:{t:$_Date}},date$);
m$1.Ordinal({Other$Ordinal:{t:$_Date}},date$);
m$1.Comparable({Other$Comparable:{t:$_Date}},date$);
m$1.Enumerable({Other$Enumerable:{t:$_Date}},date$);
}
$_Date.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableDate$base},{t:DateBehavior$base,a:{Element$DateBehavior:{t:$_Date}}},{t:m$1.Ordinal,a:{Other$Ordinal:{t:$_Date}}},{t:m$1.Comparable,a:{Other$Comparable:{t:$_Date}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:$_Date}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date')];},d:['ceylon.time','Date']};};
ex$.$_Date=$_Date;
function $init$$_Date(){
if($_Date.$$===undefined){
m$1.initTypeProtoI($_Date,'ceylon.time::Date',$init$ReadableDate$base(),$init$DateBehavior$base(),m$1.Ordinal,m$1.Comparable,m$1.Enumerable);
(function(date$){
date$.plus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'period',mt:'prm',$t:{t:ReadableDatePeriod$base}}],$cont:$_Date,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date:$m:plus')];},d:['ceylon.time','Date','$m','plus']};}};date$.minus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'period',mt:'prm',$t:{t:ReadableDatePeriod$base}}],$cont:$_Date,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date:$m:minus')];},d:['ceylon.time','Date','$m','minus']};}};date$.periodFrom={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'start',mt:'prm',$t:{t:$_Date}}],$cont:$_Date,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date:$m:periodFrom')];},d:['ceylon.time','Date','$m','periodFrom']};}};date$.periodTo={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'end',mt:'prm',$t:{t:$_Date}}],$cont:$_Date,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date:$m:periodTo')];},d:['ceylon.time','Date','$m','periodTo']};}};date$.at={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'time',mt:'prm',$t:{t:Time}}],$cont:$_Date,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date:$m:at')];},d:['ceylon.time','Date','$m','at']};}};date$.rangeTo={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:DateRange},ps:[{nm:'other',mt:'prm',$t:{t:$_Date}}],$cont:$_Date,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date:$m:rangeTo')];},d:['ceylon.time','Date','$m','rangeTo']};}};date$.equals=function($61b){
var date$=this;
var $61c;
if(m$1.is$(($61c=$61b),{t:$_Date})){
return (((date$.year==$61c.year)&&m$1.$eq$(date$.month,$61c.month))&&(date$.day==$61c.day));
}
function $61d(){return $61b;}
return false;
};date$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:$_Date,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date:$m:equals')];},d:['ceylon.time','Date','$m','equals']};};
m$1.atr$(date$,'hash',function(){
var date$=this;
var $61e=(31);
var $61f=(7);
$61f=(($61e*$61f)+date$.year);
$61f=(($61e*$61f)+date$.month.integer);
$61f=(($61e*$61f)+date$.day);
return $61f;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$_Date,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date:$at:hash')];},d:['ceylon.time','Date','$at','hash']};});date$.toString=function(){return this.string.valueOf();};
})($_Date.$$.prototype);
}
return $_Date;
}
ex$.$init$$_Date=$init$$_Date;$init$$_Date();
function today$defs$clock($61g,$61h){return systemTime();};
function today$defs$timeZone($61g,$61h){return timeZone$timezone().system;};
function today($61g,$61h){if($61g===undefined){$61g=systemTime();}
if($61h===undefined){$61h=timeZone$timezone().system;}
return $61g.instant().date($61h);
};
today.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'clock',mt:'prm',def:1,$t:{t:Clock}},{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:today')];},d:['ceylon.time','today']};};
ex$.today=today;
function date($61i,$61j,$61k){return gregorianDate$internal($61i,$61j,$61k);
};
date.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}},{nm:'month',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:Month$base}]}},{nm:'day',mt:'prm',$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:date')];},d:['ceylon.time','date']};};
ex$.date=date;
function DateRange(from,to,step,dateRange$){
$init$DateRange();
if(dateRange$===undefined)dateRange$=new DateRange.$$;
dateRange$.$wgb6s9$61l_=from;
dateRange$.$wgb6s9$61m_=to;
if(step===undefined){step=$init$DateRange().$defs$step(dateRange$,from,to);}
dateRange$.$wgb6s9$61n_=step;
Range$base({StepBy$Range:{t:UnitOfDate$base},Element$Range:{t:$_Date}},dateRange$);
return dateRange$;
}
DateRange.$defs$step=function(dateRange$,from,to){return days$base()};DateRange.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'from',mt:'prm',$t:{t:$_Date},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:from')];}},{nm:'to',mt:'prm',$t:{t:$_Date},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:to')];}},{nm:'step',mt:'prm',def:1,$t:{t:UnitOfDate$base},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:step')];}}],sts:[{t:Range$base,a:{StepBy$Range:{t:UnitOfDate$base},Element$Range:{t:$_Date}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.base'),Range$base)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.time','DateRange']};};
ex$.DateRange=DateRange;
function $init$DateRange(){
if(DateRange.$$===undefined){
m$1.initTypeProto(DateRange,'ceylon.time::DateRange',m$1.Basic,$init$Range$base());
(function(dateRange$){
m$1.atr$(dateRange$,'from',function(){return this.$wgb6s9$61l_;},undefined,function(){return{mod:$CCMM$,$t:{t:$_Date},$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:from')];},d:['ceylon.time','DateRange','$at','from']};});
m$1.atr$(dateRange$,'to',function(){return this.$wgb6s9$61m_;},undefined,function(){return{mod:$CCMM$,$t:{t:$_Date},$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:to')];},d:['ceylon.time','DateRange','$at','to']};});
m$1.atr$(dateRange$,'step',function(){return this.$wgb6s9$61n_;},undefined,function(){return{mod:$CCMM$,$t:{t:UnitOfDate$base},$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:step')];},d:['ceylon.time','DateRange','$at','step']};});
m$1.atr$(dateRange$,'period',function(){
var dateRange$=this;
return dateRange$.from.periodTo(dateRange$.to);
},undefined,function(){return{mod:$CCMM$,$t:{t:Period},$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:period')];},d:['ceylon.time','DateRange','$at','period']};});
m$1.atr$(dateRange$,'duration',function(){
var dateRange$=this;
return Duration(((dateRange$.to.dayOfEra-dateRange$.from.dayOfEra)*milliseconds$base().perDay));
},undefined,function(){return{mod:$CCMM$,$t:{t:Duration},$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:duration')];},d:['ceylon.time','DateRange','$at','duration']};});
dateRange$.equals=function($61q){var dateRange$=this;
return dateRange$.getT$all()['ceylon.time.base::Range'].$$.prototype.equals.call(dateRange$,$61q);
};
dateRange$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$m:equals')];},d:['ceylon.time','DateRange','$m','equals']};};
m$1.atr$(dateRange$,'hash',function(){
var dateRange$=this;
return m$1.attrGetter(dateRange$.getT$all()['ceylon.time.base::Range'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:hash')];},d:['ceylon.time','DateRange','$at','hash']};});
dateRange$.overlap=function($61s){
var dateRange$=this;
var $61t=overlap$internal(m$1.tpl$([dateRange$.from,dateRange$.to]),m$1.tpl$([$61s.from,$61s.to]),{Value$overlap:{t:$_Date}});
var $61u;
if(m$1.is$(($61u=$61t),m$1.mtt$([{t:$_Date},{t:$_Date}]))){
return DateRange($61u.$_get(0),$61u.$_get(1));
}
else{
return $61u;
}
};dateRange$.overlap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:DateRange},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{StepBy$Range:{t:UnitOfDate$base},Element$Range:{t:$_Date}}}}],$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$m:overlap')];},d:['ceylon.time','DateRange','$m','overlap']};};
dateRange$.gap=function($61v){
var dateRange$=this;
var $61w=gap$internal(m$1.tpl$([dateRange$.from,dateRange$.to]),m$1.tpl$([$61v.from,$61v.to]),{Value$gap:{t:$_Date}});
var $61x=$61w;
if(m$1.is$($61x,m$1.mtt$([{t:$_Date},{t:$_Date}]))) {
return ($61y=($61x.$_get(0).successor.smallerThan($61x.$_get(1))?DateRange($61x.$_get(0).successor,$61x.$_get(1).predecessor):null),m$1.nn$($61y)?$61y:m$1.empty());
var $61y;
}
else if(m$1.is$($61x,{t:m$1.Empty})) {
return $61x;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};dateRange$.gap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:DateRange},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{StepBy$Range:{t:UnitOfDate$base},Element$Range:{t:$_Date}}}}],$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$m:gap')];},d:['ceylon.time','DateRange','$m','gap']};};
dateRange$.iterator=function(){
var dateRange$=this;
function $61z($$targs$$){
var $61z$=new $61z.$$;$61z$.outer$=dateRange$;
$61z$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:{t:$_Date}},$61z$);
$61z$.$wgb6s9$621_=(0);
$61z$.$prop$get$wgb6s9$621={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$61z,pa:1024,d:['ceylon.time','DateRange','$m','iterator','$o','listIterator$bgdwol','$at','count$1fh4vb']};}};
$61z$.$prop$get$wgb6s9$621.get=function(){return $wgb6s9$621};
return $61z$;
};$61z.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:dateRange$.iterator,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:$_Date}}}],d:['ceylon.time','DateRange','$m','iterator','$o','listIterator$bgdwol']};};
function $init$$61z(){
if($61z.$$===undefined){
m$1.initTypeProto($61z,'ceylon.time::DateRange.iterator.listIterator',m$1.Basic,m$1.Iterator);
(function($61z$){
m$1.atr$($61z$,'$wgb6s9$621',function(){return this.$wgb6s9$621_;},function($622){return this.$wgb6s9$621_=$622;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$61z,pa:1024,d:['ceylon.time','DateRange','$m','iterator','$o','listIterator$bgdwol','$at','count$1fh4vb']};});
$61z$.next=function(){
var $61z$=this;
var $623=($624=(dateRange$.from.largerThan(dateRange$.to)?dateRange$.$wgb6s9$625(($626=$61z$.$wgb6s9$621,$61z$.$wgb6s9$621=$626.successor,$626)):null),m$1.nn$($624)?$624:dateRange$.$wgb6s9$627(($628=$61z$.$wgb6s9$621,$61z$.$wgb6s9$621=$628.successor,$628)));
var $624,$626,$628;
var $629=($62a=(dateRange$.from.notLargerThan(dateRange$.to)?$623.notLargerThan(dateRange$.to):null),m$1.nn$($62a)?$62a:$623.notSmallerThan(dateRange$.to));
var $62a;
return ($62b=($629?$623:null),m$1.nn$($62b)?$62b:m$1.finished());
var $62b;
};$61z$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:$_Date},{t:m$1.Finished}]},ps:[],$cont:$61z,pa:3,d:['ceylon.time','DateRange','$m','iterator','$o','listIterator$bgdwol','$m','next']};};
$61z$.toString=function(){return this.string.valueOf();};
})($61z.$$.prototype);
}
return $61z;
}
dateRange$.$init$$61z=$init$$61z;$init$$61z();var $62c;
function $620(){
if($62c===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'listIterator\' before it was set"),'122:8-129:8','DateRange.ceylon');
if($62c===undefined){$62c=m$1.INIT$;$62c=$init$$61z()({Element$Iterator:{t:$_Date}});$62c.$crtmm$=$620.$crtmm$;}
return $62c;
}
$620.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$$61z()},$cont:dateRange$.iterator,d:['ceylon.time','DateRange','$m','iterator','$o','listIterator$bgdwom']};};
$prop$get$61z=$620;
$620();
return $620();
};dateRange$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:$_Date}}},ps:[],$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$m:iterator')];},d:['ceylon.time','DateRange','$m','iterator']};};
dateRange$.stepBy=function($62d){
var dateRange$=this;
return ($62e=(m$1.$eq$($62d,dateRange$.step)?dateRange$:null),m$1.nn$($62e)?$62e:DateRange(dateRange$.from,dateRange$.to,$62d));
var $62e;
};dateRange$.stepBy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateRange},ps:[{nm:'step',mt:'prm',$t:{t:UnitOfDate$base}}],$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$m:stepBy')];},d:['ceylon.time','DateRange','$m','stepBy']};};
dateRange$.$wgb6s9$627$defs$jump=function($62f){return 1;};
dateRange$.$wgb6s9$627=function($62f){
var dateRange$=this;
if($62f===undefined){$62f=(1);}
var $62g=dateRange$.step;
if(m$1.is$($62g,{t:UnitOfYear$base})) {
return dateRange$.from.plusYears($62f);
}
else if(m$1.is$($62g,{t:UnitOfMonth$base})) {
return dateRange$.from.plusMonths($62f);
}
else if(m$1.is$($62g,{t:UnitOfDay$base})) {
return dateRange$.from.plusDays($62f);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};dateRange$.$wgb6s9$627.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'jump',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:DateRange,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$m:nextByStep$x6l2vu')];},d:['ceylon.time','DateRange','$m','nextByStep$x6l2vu']};};
dateRange$.$wgb6s9$625$defs$jump=function($62h){return 1;};
dateRange$.$wgb6s9$625=function($62h){
var dateRange$=this;
if($62h===undefined){$62h=(1);}
var $62i=dateRange$.step;
if(m$1.is$($62i,{t:UnitOfYear$base})) {
return dateRange$.from.minusYears($62h);
}
else if(m$1.is$($62i,{t:UnitOfMonth$base})) {
return dateRange$.from.minusMonths($62h);
}
else if(m$1.is$($62i,{t:UnitOfDay$base})) {
return dateRange$.from.minusDays($62h);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};dateRange$.$wgb6s9$625.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'jump',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:DateRange,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$m:previousByStep$lx41mm')];},d:['ceylon.time','DateRange','$m','previousByStep$lx41mm']};};
dateRange$.toString=function(){return this.string.valueOf();};
})(DateRange.$$.prototype);
}
return DateRange;
}
ex$.$init$DateRange=$init$DateRange;$init$DateRange();
function DateTime(dateTime$){
ReadableDateTime$base(dateTime$);
DateTimeBehavior$base({Element$DateTimeBehavior:{t:DateTime},DateType$DateTimeBehavior:{t:$_Date},TimeType$DateTimeBehavior:{t:Time}},dateTime$);
m$1.Ordinal({Other$Ordinal:{t:DateTime}},dateTime$);
m$1.Enumerable({Other$Enumerable:{t:DateTime}},dateTime$);
m$1.Comparable({Other$Comparable:{t:DateTime}},dateTime$);
dateTime$.instant$defs$timeZone=function($62j){return timeZone$timezone().system;};
}
DateTime.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableDateTime$base},{t:DateTimeBehavior$base,a:{Element$DateTimeBehavior:{t:DateTime},DateType$DateTimeBehavior:{t:$_Date},TimeType$DateTimeBehavior:{t:Time}}},{t:m$1.Ordinal,a:{Other$Ordinal:{t:DateTime}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:DateTime}}},{t:m$1.Comparable,a:{Other$Comparable:{t:DateTime}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime')];},d:['ceylon.time','DateTime']};};
ex$.DateTime=DateTime;
function $init$DateTime(){
if(DateTime.$$===undefined){
m$1.initTypeProtoI(DateTime,'ceylon.time::DateTime',$init$ReadableDateTime$base(),$init$DateTimeBehavior$base(),m$1.Ordinal,m$1.Enumerable,m$1.Comparable);
(function(dateTime$){
dateTime$.plus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'period',mt:'prm',$t:{t:ReadablePeriod$base}}],$cont:DateTime,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime:$m:plus')];},d:['ceylon.time','DateTime','$m','plus']};}};dateTime$.minus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'period',mt:'prm',$t:{t:ReadablePeriod$base}}],$cont:DateTime,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime:$m:minus')];},d:['ceylon.time','DateTime','$m','minus']};}};dateTime$.periodFrom={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'start',mt:'prm',$t:{t:DateTime}}],$cont:DateTime,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime:$m:periodFrom')];},d:['ceylon.time','DateTime','$m','periodFrom']};}};dateTime$.periodTo={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'end',mt:'prm',$t:{t:DateTime}}],$cont:DateTime,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime:$m:periodTo')];},d:['ceylon.time','DateTime','$m','periodTo']};}};dateTime$.rangeTo={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:DateTimeRange},ps:[{nm:'other',mt:'prm',$t:{t:DateTime}}],$cont:DateTime,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime:$m:rangeTo')];},d:['ceylon.time','DateTime','$m','rangeTo']};}};dateTime$.instant={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Instant},ps:[{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone}}],$cont:DateTime,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime:$m:instant')];},d:['ceylon.time','DateTime','$m','instant']};}};dateTime$.equals=function($62k){
var dateTime$=this;
var $62l;
if(m$1.is$(($62l=$62k),{t:DateTime})){
return (m$1.$eq$(dateTime$.date,$62l.date)&&m$1.$eq$(dateTime$.time,$62l.time));
}
function $62m(){return $62k;}
return false;
};dateTime$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:DateTime,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime:$m:equals')];},d:['ceylon.time','DateTime','$m','equals']};};
m$1.atr$(dateTime$,'hash',function(){
var dateTime$=this;
var $62n=(31);
var $62o=(11);
$62o=(($62n*$62o)+dateTime$.date.hash);
$62o=(($62n*$62o)+dateTime$.time.hash);
return $62o;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:DateTime,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime:$at:hash')];},d:['ceylon.time','DateTime','$at','hash']};});dateTime$.toString=function(){return this.string.valueOf();};
})(DateTime.$$.prototype);
}
return DateTime;
}
ex$.$init$DateTime=$init$DateTime;$init$DateTime();
function dateTime$defs$hours($62p,$62q,$62r,$62s,$62t,$62u,$62v){return 0;};
function dateTime$defs$minutes($62p,$62q,$62r,$62s,$62t,$62u,$62v){return 0;};
function dateTime$defs$seconds($62p,$62q,$62r,$62s,$62t,$62u,$62v){return 0;};
function dateTime$defs$milliseconds($62p,$62q,$62r,$62s,$62t,$62u,$62v){return 0;};
function dateTime($62p,$62q,$62r,$62s,$62t,$62u,$62v){if($62s===undefined){$62s=(0);}
if($62t===undefined){$62t=(0);}
if($62u===undefined){$62u=(0);}
if($62v===undefined){$62v=(0);}
return ($62w=date($62p,$62q,$62r),$62x=time($62s,$62t,$62u,$62v),GregorianDateTime$internal($62w,$62x));
var $62w,$62x;
};
dateTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}},{nm:'month',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:Month$base}]}},{nm:'day',mt:'prm',$t:{t:m$1.Integer}},{nm:'hours',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'minutes',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'seconds',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'milliseconds',mt:'prm',def:1,$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:dateTime')];},d:['ceylon.time','dateTime']};};
ex$.dateTime=dateTime;
function DateTimeRange(from,to,step,dateTimeRange$){
$init$DateTimeRange();
if(dateTimeRange$===undefined)dateTimeRange$=new DateTimeRange.$$;
dateTimeRange$.$wgb6s9$62y_=from;
dateTimeRange$.$wgb6s9$62z_=to;
if(step===undefined){step=$init$DateTimeRange().$defs$step(dateTimeRange$,from,to);}
dateTimeRange$.$wgb6s9$630_=step;
Range$base({StepBy$Range:m$1.mut$([{t:UnitOfDate$base},{t:UnitOfTime$base}]),Element$Range:{t:DateTime}},dateTimeRange$);
return dateTimeRange$;
}
DateTimeRange.$defs$step=function(dateTimeRange$,from,to){return milliseconds$base()};DateTimeRange.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'from',mt:'prm',$t:{t:DateTime},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:from')];}},{nm:'to',mt:'prm',$t:{t:DateTime},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:to')];}},{nm:'step',mt:'prm',def:1,$t:{t:'u',l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:step')];}}],sts:[{t:Range$base,a:{StepBy$Range:{t:'u',l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},Element$Range:{t:DateTime}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange')];},d:['ceylon.time','DateTimeRange']};};
ex$.DateTimeRange=DateTimeRange;
function $init$DateTimeRange(){
if(DateTimeRange.$$===undefined){
m$1.initTypeProto(DateTimeRange,'ceylon.time::DateTimeRange',m$1.Basic,$init$Range$base());
(function(dateTimeRange$){
m$1.atr$(dateTimeRange$,'from',function(){return this.$wgb6s9$62y_;},undefined,function(){return{mod:$CCMM$,$t:{t:DateTime},$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:from')];},d:['ceylon.time','DateTimeRange','$at','from']};});
m$1.atr$(dateTimeRange$,'to',function(){return this.$wgb6s9$62z_;},undefined,function(){return{mod:$CCMM$,$t:{t:DateTime},$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:to')];},d:['ceylon.time','DateTimeRange','$at','to']};});
m$1.atr$(dateTimeRange$,'step',function(){return this.$wgb6s9$630_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:step')];},d:['ceylon.time','DateTimeRange','$at','step']};});
m$1.atr$(dateTimeRange$,'period',function(){
var dateTimeRange$=this;
return dateTimeRange$.from.periodTo(dateTimeRange$.to);
},undefined,function(){return{mod:$CCMM$,$t:{t:Period},$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:period')];},d:['ceylon.time','DateTimeRange','$at','period']};});
m$1.atr$(dateTimeRange$,'duration',function(){
var dateTimeRange$=this;
return Duration((dateTimeRange$.to.instant().millisecondsOfEpoch-dateTimeRange$.from.instant().millisecondsOfEpoch));
},undefined,function(){return{mod:$CCMM$,$t:{t:Duration},$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:duration')];},d:['ceylon.time','DateTimeRange','$at','duration']};});
dateTimeRange$.equals=function($633){var dateTimeRange$=this;
return dateTimeRange$.getT$all()['ceylon.time.base::Range'].$$.prototype.equals.call(dateTimeRange$,$633);
};
dateTimeRange$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$m:equals')];},d:['ceylon.time','DateTimeRange','$m','equals']};};
m$1.atr$(dateTimeRange$,'hash',function(){
var dateTimeRange$=this;
return m$1.attrGetter(dateTimeRange$.getT$all()['ceylon.time.base::Range'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:hash')];},d:['ceylon.time','DateTimeRange','$at','hash']};});
dateTimeRange$.overlap=function($635){
var dateTimeRange$=this;
var $636=overlap$internal(m$1.tpl$([dateTimeRange$.from,dateTimeRange$.to]),m$1.tpl$([$635.from,$635.to]),{Value$overlap:{t:DateTime}});
var $637;
if(m$1.is$(($637=$636),m$1.mtt$([{t:DateTime},{t:DateTime}]))){
return DateTimeRange(($638=$637,$638.$_get(0)),$638.$_get(1),m$1.nn$($638.$_get(2))?$638.$_get(2):undefined);
}
else{
return $637;
}
};dateTimeRange$.overlap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:DateTimeRange},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{StepBy$Range:{t:'u',l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},Element$Range:{t:DateTime}}}}],$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$m:overlap')];},d:['ceylon.time','DateTimeRange','$m','overlap']};};
dateTimeRange$.gap=function($639){
var dateTimeRange$=this;
var $63a=gap$internal(m$1.tpl$([dateTimeRange$.from,dateTimeRange$.to]),m$1.tpl$([$639.from,$639.to]),{Value$gap:{t:DateTime}});
var $63b=$63a;
if(m$1.is$($63b,m$1.mtt$([{t:DateTime},{t:DateTime}]))) {
return ($63c=($63b.$_get(0).successor.smallerThan($63b.$_get(1))?DateTimeRange($63b.$_get(0).successor,$63b.$_get(1).predecessor):null),m$1.nn$($63c)?$63c:m$1.empty());
var $63c;
}
else if(m$1.is$($63b,{t:m$1.Empty})) {
return $63b;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};dateTimeRange$.gap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:DateTimeRange},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{StepBy$Range:{t:'u',l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},Element$Range:{t:DateTime}}}}],$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$m:gap')];},d:['ceylon.time','DateTimeRange','$m','gap']};};
dateTimeRange$.iterator=function(){
var dateTimeRange$=this;
function $63d($$targs$$){
var $63d$=new $63d.$$;$63d$.outer$=dateTimeRange$;
$63d$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:{t:DateTime}},$63d$);
$63d$.$wgb6s9$63f_=(0);
$63d$.$prop$get$wgb6s9$63f={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$63d,pa:1024,d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator$tg8jkg','$at','count$xwt382']};}};
$63d$.$prop$get$wgb6s9$63f.get=function(){return $wgb6s9$63f};
return $63d$;
};$63d.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:dateTimeRange$.iterator,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:DateTime}}}],d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator$tg8jkg']};};
function $init$$63d(){
if($63d.$$===undefined){
m$1.initTypeProto($63d,'ceylon.time::DateTimeRange.iterator.listIterator',m$1.Basic,m$1.Iterator);
(function($63d$){
m$1.atr$($63d$,'$wgb6s9$63f',function(){return this.$wgb6s9$63f_;},function($63g){return this.$wgb6s9$63f_=$63g;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$63d,pa:1024,d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator$tg8jkg','$at','count$xwt382']};});
$63d$.next=function(){
var $63d$=this;
var $63h=($63i=(dateTimeRange$.from.largerThan(dateTimeRange$.to)?dateTimeRange$.$wgb6s9$63j(($63k=$63d$.$wgb6s9$63f,$63d$.$wgb6s9$63f=$63k.successor,$63k)):null),m$1.nn$($63i)?$63i:dateTimeRange$.$wgb6s9$63l(($63m=$63d$.$wgb6s9$63f,$63d$.$wgb6s9$63f=$63m.successor,$63m)));
var $63i,$63k,$63m;
var $63n=($63o=(dateTimeRange$.from.notLargerThan(dateTimeRange$.to)?$63h.notLargerThan(dateTimeRange$.to):null),m$1.nn$($63o)?$63o:$63h.notSmallerThan(dateTimeRange$.to));
var $63o;
return ($63p=($63n?$63h:null),m$1.nn$($63p)?$63p:m$1.finished());
var $63p;
};$63d$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:DateTime},{t:m$1.Finished}]},ps:[],$cont:$63d,pa:3,d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator$tg8jkg','$m','next']};};
$63d$.toString=function(){return this.string.valueOf();};
})($63d.$$.prototype);
}
return $63d;
}
dateTimeRange$.$init$$63d=$init$$63d;$init$$63d();var $63q;
function $63e(){
if($63q===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'listIterator\' before it was set"),'121:8-128:8','DateTimeRange.ceylon');
if($63q===undefined){$63q=m$1.INIT$;$63q=$init$$63d()({Element$Iterator:{t:DateTime}});$63q.$crtmm$=$63e.$crtmm$;}
return $63q;
}
$63e.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$$63d()},$cont:dateTimeRange$.iterator,d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator$tg8jkh']};};
$prop$get$63d=$63e;
$63e();
return $63e();
};dateTimeRange$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:DateTime}}},ps:[],$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$m:iterator')];},d:['ceylon.time','DateTimeRange','$m','iterator']};};
dateTimeRange$.stepBy=function($63r){
var dateTimeRange$=this;
return ($63s=(m$1.$eq$($63r,dateTimeRange$.step)?dateTimeRange$:null),m$1.nn$($63s)?$63s:DateTimeRange(dateTimeRange$.from,dateTimeRange$.to,$63r));
var $63s;
};dateTimeRange$.stepBy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTimeRange},ps:[{nm:'step',mt:'prm',$t:{t:'u',l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]}}],$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$m:stepBy')];},d:['ceylon.time','DateTimeRange','$m','stepBy']};};
dateTimeRange$.$wgb6s9$63l$defs$jump=function($63t){return 1;};
dateTimeRange$.$wgb6s9$63l=function($63t){
var dateTimeRange$=this;
if($63t===undefined){$63t=(1);}
var $63u;
if(m$1.is$(($63u=dateTimeRange$.step),{t:UnitOfDate$base})){
var $63v=$63u;
if(m$1.is$($63v,{t:UnitOfYear$base})) {
return dateTimeRange$.from.plusYears($63t);
}
else if(m$1.is$($63v,{t:UnitOfMonth$base})) {
return dateTimeRange$.from.plusMonths($63t);
}
else if(m$1.is$($63v,{t:UnitOfDay$base})) {
return dateTimeRange$.from.plusDays($63t);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
else{
var $63w=$63u;
if(m$1.is$($63w,{t:UnitOfHour$base})) {
return dateTimeRange$.from.plusHours($63t);
}
else if(m$1.is$($63w,{t:UnitOfMinute$base})) {
return dateTimeRange$.from.plusMinutes($63t);
}
else if(m$1.is$($63w,{t:UnitOfSecond$base})) {
return dateTimeRange$.from.plusSeconds($63t);
}
else if(m$1.is$($63w,{t:UnitOfMillisecond$base})) {
return dateTimeRange$.from.plusMilliseconds($63t);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
};dateTimeRange$.$wgb6s9$63l.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'jump',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:DateTimeRange,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$m:nextByStep$cusa3f')];},d:['ceylon.time','DateTimeRange','$m','nextByStep$cusa3f']};};
dateTimeRange$.$wgb6s9$63j$defs$jump=function($63x){return 1;};
dateTimeRange$.$wgb6s9$63j=function($63x){
var dateTimeRange$=this;
if($63x===undefined){$63x=(1);}
var $63y;
if(m$1.is$(($63y=dateTimeRange$.step),{t:UnitOfDate$base})){
var $63z=$63y;
if(m$1.is$($63z,{t:UnitOfYear$base})) {
return dateTimeRange$.from.minusYears($63x);
}
else if(m$1.is$($63z,{t:UnitOfMonth$base})) {
return dateTimeRange$.from.minusMonths($63x);
}
else if(m$1.is$($63z,{t:UnitOfDay$base})) {
return dateTimeRange$.from.minusDays($63x);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
else{
var $640=$63y;
if(m$1.is$($640,{t:UnitOfHour$base})) {
return dateTimeRange$.from.minusHours($63x);
}
else if(m$1.is$($640,{t:UnitOfMinute$base})) {
return dateTimeRange$.from.minusMinutes($63x);
}
else if(m$1.is$($640,{t:UnitOfSecond$base})) {
return dateTimeRange$.from.minusSeconds($63x);
}
else if(m$1.is$($640,{t:UnitOfMillisecond$base})) {
return dateTimeRange$.from.minusMilliseconds($63x);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
};dateTimeRange$.$wgb6s9$63j.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'jump',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:DateTimeRange,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$m:previousByStep$o49bcn')];},d:['ceylon.time','DateTimeRange','$m','previousByStep$o49bcn']};};
dateTimeRange$.toString=function(){return this.string.valueOf();};
})(DateTimeRange.$$.prototype);
}
return DateTimeRange;
}
ex$.$init$DateTimeRange=$init$DateTimeRange;$init$DateTimeRange();
function Duration(milliseconds,duration$){
$init$Duration();
if(duration$===undefined)duration$=new Duration.$$;
duration$.$wgb6s9$641_=milliseconds;
ReadableDuration$base(duration$);
m$1.Scalable({Scale$Scalable:{t:m$1.Integer},Value$Scalable:{t:Duration}},duration$);
return duration$;
}
Duration.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration:$at:milliseconds')];}}],sts:[{t:ReadableDuration$base},{t:m$1.Scalable,a:{Scale$Scalable:{t:m$1.Integer},Value$Scalable:{t:Duration}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration')];},d:['ceylon.time','Duration']};};
ex$.Duration=Duration;
function $init$Duration(){
if(Duration.$$===undefined){
m$1.initTypeProto(Duration,'ceylon.time::Duration',m$1.Basic,$init$ReadableDuration$base(),m$1.Scalable);
(function(duration$){
m$1.atr$(duration$,'milliseconds',function(){return this.$wgb6s9$641_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Duration,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration:$at:milliseconds')];},d:['ceylon.time','Duration','$at','milliseconds']};});
m$1.atr$(duration$,'period',function(){
var duration$=this;
return ($642=duration$.milliseconds,Period(undefined,undefined,undefined,undefined,undefined,undefined,$642));
var $642;
},undefined,function(){return{mod:$CCMM$,$t:{t:Period},$cont:Duration,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration:$at:period')];},d:['ceylon.time','Duration','$at','period']};});
m$1.atr$(duration$,'string',function(){
var duration$=this;
return duration$.milliseconds.string+"ms";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Duration,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration:$at:string')];},d:['ceylon.time','Duration','$at','string']};});
duration$.equals=function($644){
var duration$=this;
var $645;
if(m$1.is$(($645=$644),{t:Duration})){
return (duration$.milliseconds==$645.milliseconds);
}
function $646(){return $644;}
return false;
};duration$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Duration,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration:$m:equals')];},d:['ceylon.time','Duration','$m','equals']};};
m$1.atr$(duration$,'hash',function(){
var duration$=this;
var $647=(11);
var $648=(3);
return (($647*$648)+duration$.milliseconds.hash);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Duration,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration:$at:hash')];},d:['ceylon.time','Duration','$at','hash']};});duration$.scale=function($649){var duration$=this;
return Duration(($649*duration$.milliseconds));
};
duration$.scale.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Duration},ps:[{nm:'scale',mt:'prm',$t:{t:m$1.Integer}}],$cont:Duration,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration:$m:scale')];},d:['ceylon.time','Duration','$m','scale']};};
duration$.toString=function(){return this.string.valueOf();};
})(Duration.$$.prototype);
}
return Duration;
}
ex$.$init$Duration=$init$Duration;$init$Duration();
function now($64a){
if($64a===undefined){$64a=null;}
var $64b;
if(m$1.nn$(($64b=$64a))){
return $64b.instant();
}
function $64c(){return $64a;}
return systemTime().instant();
}
ex$.now=now;
now.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[{nm:'clock',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Clock}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:now')];},d:['ceylon.time','now']};};
function Instant(millisecondsOfEpoch,instant$){
$init$Instant();
if(instant$===undefined)instant$=new Instant.$$;
instant$.$wgb6s9$64d_=millisecondsOfEpoch;
ReadableInstant$base(instant$);
m$1.Comparable({Other$Comparable:{t:Instant}},instant$);
m$1.Enumerable({Other$Enumerable:{t:Instant}},instant$);
return instant$;
}
Instant.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'millisecondsOfEpoch',mt:'prm',$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$at:millisecondsOfEpoch')];}}],sts:[{t:ReadableInstant$base},{t:m$1.Comparable,a:{Other$Comparable:{t:Instant}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:Instant}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant')];},d:['ceylon.time','Instant']};};
ex$.Instant=Instant;
function $init$Instant(){
if(Instant.$$===undefined){
m$1.initTypeProto(Instant,'ceylon.time::Instant',m$1.Basic,$init$ReadableInstant$base(),m$1.Comparable,m$1.Enumerable);
(function(instant$){
m$1.atr$(instant$,'millisecondsOfEpoch',function(){return this.$wgb6s9$64d_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Instant,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$at:millisecondsOfEpoch')];},d:['ceylon.time','Instant','$at','millisecondsOfEpoch']};});
instant$.plus=function($64e){
var instant$=this;
var $64f=$64e;
if(m$1.is$($64f,{t:Duration})) {
return Instant((instant$.millisecondsOfEpoch+$64f.milliseconds));
}
else if(m$1.is$($64f,{t:Period})) {
return instant$.dateTime().plus($64f).instant();
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};instant$.plus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[{nm:'other',mt:'prm',$t:{t:'u',l:[{t:Duration},{t:Period}]}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:plus')];},d:['ceylon.time','Instant','$m','plus']};};
instant$.minus=function($64g){
var instant$=this;
var $64h=$64g;
if(m$1.is$($64h,{t:Duration})) {
return Instant((instant$.millisecondsOfEpoch-$64h.milliseconds));
}
else if(m$1.is$($64h,{t:Period})) {
return instant$.dateTime().minus($64h).instant();
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};instant$.minus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[{nm:'other',mt:'prm',$t:{t:'u',l:[{t:Duration},{t:Period}]}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:minus')];},d:['ceylon.time','Instant','$m','minus']};};
instant$.compare=function($64i){
var instant$=this;
return instant$.millisecondsOfEpoch.compare($64i.millisecondsOfEpoch);
};instant$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:Instant}}],$cont:Instant,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:compare')];},d:['ceylon.time','Instant','$m','compare']};};
instant$.dateTime$defs$timeZone=function($64j){return timeZone$timezone().system;};
instant$.dateTime=function($64j){
var instant$=this;
if($64j===undefined){$64j=timeZone$timezone().system;}
return GregorianDateTime$internal(instant$.date($64j),instant$.time($64j));
};instant$.dateTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:dateTime')];},d:['ceylon.time','Instant','$m','dateTime']};};
instant$.date$defs$timeZone=function($64k){return timeZone$timezone().system;};
instant$.date=function($64k){
var instant$=this;
if($64k===undefined){$64k=timeZone$timezone().system;}
return GregorianDate$internal(unixTime$chronology().fixedFromTime((instant$.millisecondsOfEpoch+$64k.offset(instant$))));
};instant$.date.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:date')];},d:['ceylon.time','Instant','$m','date']};};
instant$.time$defs$timeZone=function($64l){return timeZone$timezone().system;};
instant$.time=function($64l){
var instant$=this;
if($64l===undefined){$64l=timeZone$timezone().system;}
return TimeOfDay$internal(unixTime$chronology().timeOfDay((instant$.millisecondsOfEpoch+$64l.offset(instant$))));
};instant$.time.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:time')];},d:['ceylon.time','Instant','$m','time']};};
instant$.zoneDateTime$defs$timeZone=function($64m){return timeZone$timezone().system;};
instant$.zoneDateTime=function($64m){
var instant$=this;
if($64m===undefined){$64m=timeZone$timezone().system;}
return GregorianZonedDateTime$internal(instant$,$64m);
};instant$.zoneDateTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:zoneDateTime')];},d:['ceylon.time','Instant','$m','zoneDateTime']};};
instant$.durationTo=function($64n){
var instant$=this;
return Duration(($64n.millisecondsOfEpoch-instant$.millisecondsOfEpoch));
};instant$.durationTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Duration},ps:[{nm:'other',mt:'prm',$t:{t:Instant}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:durationTo')];},d:['ceylon.time','Instant','$m','durationTo']};};
instant$.durationFrom=function($64o){
var instant$=this;
return Duration((instant$.millisecondsOfEpoch-$64o.millisecondsOfEpoch));
};instant$.durationFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Duration},ps:[{nm:'other',mt:'prm',$t:{t:Instant}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:durationFrom')];},d:['ceylon.time','Instant','$m','durationFrom']};};
instant$.equals=function($64p){
var instant$=this;
var $64q;
if(m$1.is$(($64q=$64p),{t:Instant})){
return (instant$.millisecondsOfEpoch==$64q.millisecondsOfEpoch);
}
function $64r(){return $64p;}
return false;
};instant$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Instant,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:equals')];},d:['ceylon.time','Instant','$m','equals']};};
m$1.atr$(instant$,'hash',function(){
var instant$=this;
return ((31)+instant$.millisecondsOfEpoch.hash);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Instant,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$at:hash')];},d:['ceylon.time','Instant','$at','hash']};});m$1.atr$(instant$,'string',function(){
var instant$=this;
return instant$.zoneDateTime(timeZone$timezone().utc).string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Instant,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$at:string')];},d:['ceylon.time','Instant','$at','string']};});
instant$.neighbour=function($64t){var instant$=this;
return Instant((instant$.millisecondsOfEpoch+$64t));
};
instant$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:Instant,pa:3,d:['ceylon.time','Instant','$m','neighbour']};};
instant$.offset=function($64u){var instant$=this;
return (instant$.millisecondsOfEpoch-$64u.millisecondsOfEpoch);
};
instant$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:Instant}}],$cont:Instant,pa:3,d:['ceylon.time','Instant','$m','offset']};};
instant$.toString=function(){return this.string.valueOf();};
})(Instant.$$.prototype);
}
return Instant;
}
ex$.$init$Instant=$init$Instant;$init$Instant();
function Period(years,months,days,hours,minutes,seconds,milliseconds,period$){
$init$Period();
if(period$===undefined)period$=new Period.$$;
if(years===undefined){years=$init$Period().$defs$years(period$,months,days,hours,minutes,seconds,milliseconds);}
period$.$wgb6s9$64v_=years;
if(months===undefined){months=$init$Period().$defs$months(period$,years,days,hours,minutes,seconds,milliseconds);}
period$.$wgb6s9$64w_=months;
if(days===undefined){days=$init$Period().$defs$days(period$,years,months,hours,minutes,seconds,milliseconds);}
period$.$wgb6s9$64x_=days;
if(hours===undefined){hours=$init$Period().$defs$hours(period$,years,months,days,minutes,seconds,milliseconds);}
period$.$wgb6s9$64y_=hours;
if(minutes===undefined){minutes=$init$Period().$defs$minutes(period$,years,months,days,hours,seconds,milliseconds);}
period$.$wgb6s9$64z_=minutes;
if(seconds===undefined){seconds=$init$Period().$defs$seconds(period$,years,months,days,hours,minutes,milliseconds);}
period$.$wgb6s9$650_=seconds;
if(milliseconds===undefined){milliseconds=$init$Period().$defs$milliseconds(period$,years,months,days,hours,minutes,seconds);}
period$.$wgb6s9$651_=milliseconds;
ReadableTimePeriod$base(period$);
ReadableDatePeriod$base(period$);
ReadablePeriod$base(period$);
PeriodBehavior$base({Self$PeriodBehavior:{t:Period}},period$);
m$1.Comparable({Other$Comparable:{t:Period}},period$);
m$1.Summable({Other$Summable:{t:Period}},period$);
m$1.Scalable({Scale$Scalable:{t:m$1.Integer},Value$Scalable:{t:Period}},period$);
return period$;
}
Period.$defs$years=function(period$,months,days,hours,minutes,seconds,milliseconds){return (0)};Period.$defs$months=function(period$,years,days,hours,minutes,seconds,milliseconds){return (0)};Period.$defs$days=function(period$,years,months,hours,minutes,seconds,milliseconds){return (0)};Period.$defs$hours=function(period$,years,months,days,minutes,seconds,milliseconds){return (0)};Period.$defs$minutes=function(period$,years,months,days,hours,seconds,milliseconds){return (0)};Period.$defs$seconds=function(period$,years,months,days,hours,minutes,milliseconds){return (0)};Period.$defs$milliseconds=function(period$,years,months,days,hours,minutes,seconds){return (0)};Period.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'years',mt:'prm',def:1,$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("The number of years.")];}},{nm:'months',mt:'prm',def:1,$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("The number of months.")];}},{nm:'days',mt:'prm',def:1,$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("The number of days.")];}},{nm:'hours',mt:'prm',def:1,$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("The number of hours.")];}},{nm:'minutes',mt:'prm',def:1,$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("The number of minutes.")];}},{nm:'seconds',mt:'prm',def:1,$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("The number of seconds.")];}},{nm:'milliseconds',mt:'prm',def:1,$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("The number of milliseconds.")];}}],sts:[{t:ReadablePeriod$base},{t:ReadableTimePeriod$base},{t:ReadableDatePeriod$base},{t:PeriodBehavior$base,a:{Self$PeriodBehavior:{t:Period}}},{t:m$1.Comparable,a:{Other$Comparable:{t:Period}}},{t:m$1.Summable,a:{Other$Summable:{t:Period}}},{t:m$1.Scalable,a:{Scale$Scalable:{t:m$1.Integer},Value$Scalable:{t:Period}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period')];},d:['ceylon.time','Period']};};
ex$.Period=Period;
function $init$Period(){
if(Period.$$===undefined){
m$1.initTypeProto(Period,'ceylon.time::Period',m$1.Basic,$init$ReadableTimePeriod$base(),$init$ReadableDatePeriod$base(),$init$ReadablePeriod$base(),$init$PeriodBehavior$base(),m$1.Comparable,m$1.Summable,m$1.Scalable);
(function(period$){
m$1.atr$(period$,'years',function(){return this.$wgb6s9$64v_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc("The number of years.")];},d:['ceylon.time','Period','$at','years']};});
m$1.atr$(period$,'months',function(){return this.$wgb6s9$64w_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc("The number of months.")];},d:['ceylon.time','Period','$at','months']};});
m$1.atr$(period$,'days',function(){return this.$wgb6s9$64x_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc("The number of days.")];},d:['ceylon.time','Period','$at','days']};});
m$1.atr$(period$,'hours',function(){return this.$wgb6s9$64y_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc("The number of hours.")];},d:['ceylon.time','Period','$at','hours']};});
m$1.atr$(period$,'minutes',function(){return this.$wgb6s9$64z_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc("The number of minutes.")];},d:['ceylon.time','Period','$at','minutes']};});
m$1.atr$(period$,'seconds',function(){return this.$wgb6s9$650_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc("The number of seconds.")];},d:['ceylon.time','Period','$at','seconds']};});
m$1.atr$(period$,'milliseconds',function(){return this.$wgb6s9$651_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc("The number of milliseconds.")];},d:['ceylon.time','Period','$at','milliseconds']};});
period$.equals=function($652){
var period$=this;
var $653;
if(m$1.is$(($653=$652),{t:Period})){
if((period$===$653)){
return true;
}
return (((((((period$.years==$653.years)&&(period$.months==$653.months))&&(period$.days==$653.days))&&(period$.hours==$653.hours))&&(period$.minutes==$653.minutes))&&(period$.seconds==$653.seconds))&&(period$.milliseconds==$653.milliseconds));
}
function $654(){return $652;}
return false;
};period$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:equals')];},d:['ceylon.time','Period','$m','equals']};};
m$1.atr$(period$,'hash',function(){
var period$=this;
var $655=(31);
var $656=(17);
$656=(($655*$656)+period$.years.hash);
$656=(($655*$656)+period$.months.hash);
$656=(($655*$656)+period$.days.hash);
$656=(($655*$656)+period$.hours.hash);
$656=(($655*$656)+period$.minutes.hash);
$656=(($655*$656)+period$.seconds.hash);
$656=(($655*$656)+period$.milliseconds.hash);
return $656;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$at:hash')];},d:['ceylon.time','Period','$at','hash']};});period$.compare=function($657){
var period$=this;
var $658=period$.normalized();
var $659=$657.normalized();
return ($65a=(!m$1.$eq$($658.years,$659.years)?$658.years.compare($659.years):null),m$1.nn$($65a)?$65a:($65b=(!m$1.$eq$($658.months,$659.months)?$658.months.compare($659.months):null),m$1.nn$($65b)?$65b:($65c=(!m$1.$eq$($658.days,$659.days)?$658.days.compare($659.days):null),m$1.nn$($65c)?$65c:($65d=(!m$1.$eq$($658.hours,$659.hours)?$658.hours.compare($659.hours):null),m$1.nn$($65d)?$65d:($65e=(!m$1.$eq$($658.minutes,$659.minutes)?$658.minutes.compare($659.minutes):null),m$1.nn$($65e)?$65e:($65f=(!m$1.$eq$($658.seconds,$659.seconds)?$658.seconds.compare($659.seconds):null),m$1.nn$($65f)?$65f:$658.milliseconds.compare($659.milliseconds)))))));
var $65a,$65b,$65c,$65d,$65e,$65f;
};period$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:Period}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:compare')];},d:['ceylon.time','Period','$m','compare']};};
period$.isZero=function(){
var period$=this;
return m$1.$eq$(period$,zero());
};period$.isZero.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[],$cont:Period,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:isZero')];},d:['ceylon.time','Period','$m','isZero']};};
period$.withYears=function($65g){
var period$=this;
if(($65g==period$.years)){
return period$;
}
return Period($65g,period$.months,period$.days,period$.hours,period$.minutes,period$.seconds,period$.milliseconds);
};period$.withYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:withYears')];},d:['ceylon.time','Period','$m','withYears']};};
period$.withMonths=function($65h){
var period$=this;
if(($65h==period$.months)){
return period$;
}
return Period(period$.years,$65h,period$.days,period$.hours,period$.minutes,period$.seconds,period$.milliseconds);
};period$.withMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:withMonths')];},d:['ceylon.time','Period','$m','withMonths']};};
period$.withDays=function($65i){
var period$=this;
if(($65i==period$.days)){
return period$;
}
return Period(period$.years,period$.months,$65i,period$.hours,period$.minutes,period$.seconds,period$.milliseconds);
};period$.withDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:withDays')];},d:['ceylon.time','Period','$m','withDays']};};
period$.withHours=function($65j){
var period$=this;
if(($65j==period$.hours)){
return period$;
}
return Period(period$.years,period$.months,period$.days,$65j,period$.minutes,period$.seconds,period$.milliseconds);
};period$.withHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:withHours')];},d:['ceylon.time','Period','$m','withHours']};};
period$.withMinutes=function($65k){
var period$=this;
if(($65k==period$.minutes)){
return period$;
}
return Period(period$.years,period$.months,period$.days,period$.hours,$65k,period$.seconds,period$.milliseconds);
};period$.withMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:withMinutes')];},d:['ceylon.time','Period','$m','withMinutes']};};
period$.withSeconds=function($65l){
var period$=this;
if(($65l==period$.seconds)){
return period$;
}
return Period(period$.years,period$.months,period$.days,period$.hours,period$.minutes,$65l,period$.milliseconds);
};period$.withSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:withSeconds')];},d:['ceylon.time','Period','$m','withSeconds']};};
period$.withMilliseconds=function($65m){
var period$=this;
if(($65m==period$.milliseconds)){
return period$;
}
return Period(period$.years,period$.months,period$.days,period$.hours,period$.minutes,period$.seconds,$65m);
};period$.withMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:withMilliseconds')];},d:['ceylon.time','Period','$m','withMilliseconds']};};
period$.plusYears=function($65n){
var period$=this;
return period$.withYears((period$.years+$65n));
};period$.plusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plusYears')];},d:['ceylon.time','Period','$m','plusYears']};};
period$.plusMonths=function($65o){
var period$=this;
return period$.withMonths((period$.months+$65o));
};period$.plusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plusMonths')];},d:['ceylon.time','Period','$m','plusMonths']};};
period$.plusDays=function($65p){
var period$=this;
return period$.withDays((period$.days+$65p));
};period$.plusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plusDays')];},d:['ceylon.time','Period','$m','plusDays']};};
period$.plusHours=function($65q){
var period$=this;
return period$.withHours((period$.hours+$65q));
};period$.plusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plusHours')];},d:['ceylon.time','Period','$m','plusHours']};};
period$.plusMinutes=function($65r){
var period$=this;
return period$.withMinutes((period$.minutes+$65r));
};period$.plusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plusMinutes')];},d:['ceylon.time','Period','$m','plusMinutes']};};
period$.plusSeconds=function($65s){
var period$=this;
return period$.withSeconds((period$.seconds+$65s));
};period$.plusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plusSeconds')];},d:['ceylon.time','Period','$m','plusSeconds']};};
period$.plusMilliseconds=function($65t){
var period$=this;
return period$.withMilliseconds((period$.milliseconds+$65t));
};period$.plusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plusMilliseconds')];},d:['ceylon.time','Period','$m','plusMilliseconds']};};
period$.minusYears=function($65u){
var period$=this;
return period$.plusYears((-$65u));
};period$.minusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:minusYears')];},d:['ceylon.time','Period','$m','minusYears']};};
period$.minusMonths=function($65v){
var period$=this;
return period$.plusMonths((-$65v));
};period$.minusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:minusMonths')];},d:['ceylon.time','Period','$m','minusMonths']};};
period$.minusDays=function($65w){
var period$=this;
return period$.plusDays((-$65w));
};period$.minusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:minusDays')];},d:['ceylon.time','Period','$m','minusDays']};};
period$.minusHours=function($65x){
var period$=this;
return period$.plusHours((-$65x));
};period$.minusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:minusHours')];},d:['ceylon.time','Period','$m','minusHours']};};
period$.minusMinutes=function($65y){
var period$=this;
return period$.plusMinutes((-$65y));
};period$.minusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:minusMinutes')];},d:['ceylon.time','Period','$m','minusMinutes']};};
period$.minusSeconds=function($65z){
var period$=this;
return period$.plusSeconds((-$65z));
};period$.minusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:minusSeconds')];},d:['ceylon.time','Period','$m','minusSeconds']};};
period$.minusMilliseconds=function($660){
var period$=this;
return period$.plusMilliseconds((-$660));
};period$.minusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:minusMilliseconds')];},d:['ceylon.time','Period','$m','minusMilliseconds']};};
period$.plus=function($661){
var period$=this;
return ($662=(period$.years+$661.years),$663=(period$.months+$661.months),$664=(period$.days+$661.days),$665=(period$.hours+$661.hours),$666=(period$.minutes+$661.minutes),$667=(period$.seconds+$661.seconds),$668=(period$.milliseconds+$661.milliseconds),Period($662,$663,$664,$665,$666,$667,$668));
var $662,$663,$664,$665,$666,$667,$668;
};period$.plus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'other',mt:'prm',$t:{t:Period}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plus')];},d:['ceylon.time','Period','$m','plus']};};
m$1.atr$(period$,'dateOnly',function(){
var period$=this;
return period$;
},undefined,function(){return{mod:$CCMM$,$t:{t:ReadableDatePeriod$base},$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$at:dateOnly')];},d:['ceylon.time','Period','$at','dateOnly']};});m$1.atr$(period$,'timeOnly',function(){
var period$=this;
return period$;
},undefined,function(){return{mod:$CCMM$,$t:{t:ReadableTimePeriod$base},$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$at:timeOnly')];},d:['ceylon.time','Period','$at','timeOnly']};});period$.normalized=function(){
var period$=this;
if(m$1.$eq$(period$,zero())){
return zero();
}
var $669=(period$.years+m$1.i$div(period$.months,(12)));
var $66a=period$.months.remainder((12));
var $66b=(((period$.hours*seconds$base().perHour)+(period$.minutes*seconds$base().perMinute))+period$.seconds);
var $66c=period$.milliseconds.remainder(milliseconds$base().perSecond);
($66b=$66b+m$1.i$div(period$.milliseconds,milliseconds$base().perSecond));
var $66d=$66b.remainder(seconds$base().perMinute);
$66b=m$1.i$div($66b,seconds$base().perMinute);
var $66e=$66b.remainder(minutes$base().perHour);
var $66f=m$1.i$div($66b,minutes$base().perHour);
return ($66g=$669,$66h=$66a,$66i=period$.days,$66j=$66f,$66k=$66e,$66l=$66d,$66m=$66c,Period($66g,$66h,$66i,$66j,$66k,$66l,$66m));
var $66g,$66h,$66i,$66j,$66k,$66l,$66m;
};period$.normalized.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:normalized')];},d:['ceylon.time','Period','$m','normalized']};};
m$1.atr$(period$,'string',function(){
var period$=this;
if(m$1.$eq$(period$,zero())){
return "PT0S";
}
else{
var $66n=($66o=m$1.for$(function(){
var $66p=m$1.tpl$([m$1.tpl$([period$.years,"Y"]),m$1.tpl$([period$.months,"M"]),m$1.tpl$([period$.days,"D"])]).iterator(),$66q=m$1.finished();
var n$66q=function(){
while(($66q=$66p.next())!==m$1.finished()){
if(!m$1.$eq$($66q.$_get(0),(0))){
return $66q;
}
}
return m$1.finished();
}
return function(){
if(n$66q()!==m$1.finished()){
var $66r=$66q,$66s="".$_join($66r);
return $66s;
}
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.$_String}}).sequence(),($66t="",m$1.jsc$3($66t,$66t.$_join))($66o));
var $66o,$66t;
if(!m$1.$eq$(period$.hours.or(period$.minutes).or(period$.seconds).or(period$.milliseconds),(0))){
var $66u=($66v=m$1.for$(function(){
var $66w=m$1.tpl$([m$1.tpl$([period$.hours,0,"H"]),m$1.tpl$([period$.minutes,0,"M"]),m$1.tpl$([period$.seconds,period$.milliseconds,"S"])]).iterator(),$66x=m$1.finished();
var n$66x=function(){
while(($66x=$66w.next())!==m$1.finished()){
if(!m$1.$eq$($66x.$_get(0).or($66x.$_get(1)),(0))){
return $66x;
}
}
return m$1.finished();
}
return function(){
if(n$66x()!==m$1.finished()){
var $66y=$66x,$66z=($670=(($66y.$_get(1)==(0))?$66y.$_get(0).string.plus($66y.$_get(2)):null),m$1.nn$($670)?$670:$66y.$_get(0).string+"."+($66y.$_get(1).string.padLeading(3,m$1.Character(48,true))).plus($66y.$_get(2)));
return $66z;
}
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.$_String}}).sequence(),($671="",m$1.jsc$3($671,$671.$_join))($66v));
var $66v,$670,$671;
return "P"+($66n)+"T"+($66u);
}
else{
return "P"+($66n);
}
}
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$at:string')];},d:['ceylon.time','Period','$at','string']};});period$.scale=function($672){var period$=this;
return ($673=($672*period$.years),$674=($672*period$.months),$675=($672*period$.days),$676=($672*period$.hours),$677=($672*period$.minutes),$678=($672*period$.seconds),$679=($672*period$.milliseconds),Period($673,$674,$675,$676,$677,$678,$679));
var $673,$674,$675,$676,$677,$678,$679;
};
period$.scale.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'scale',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:scale')];},d:['ceylon.time','Period','$m','scale']};};
period$.toString=function(){return this.string.valueOf();};
})(Period.$$.prototype);
}
return Period;
}
ex$.$init$Period=$init$Period;$init$Period();
var $67a;function $valinit$$67a(){if($67a===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'zero\' before it was set"),'319:0-320:29','Period.ceylon');
if($67a===undefined){$67a=m$1.INIT$;$67a=Period()};return $67a;};
function zero(){return $valinit$$67a();}
ex$.zero=zero;
var $prop$getZero={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:zero')];},d:['ceylon.time','zero']};}};
ex$.$prop$getZero=$prop$getZero;
$prop$getZero.get=zero;
zero.$crtmm$=$prop$getZero.$crtmm$;
function Time(time$){
ReadableTime$base(time$);
TimeBehavior$base({Element$TimeBehavior:{t:Time}},time$);
m$1.Comparable({Other$Comparable:{t:Time}},time$);
m$1.Ordinal({Other$Ordinal:{t:Time}},time$);
m$1.Enumerable({Other$Enumerable:{t:Time}},time$);
}
Time.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableTime$base},{t:TimeBehavior$base,a:{Element$TimeBehavior:{t:Time}}},{t:m$1.Comparable,a:{Other$Comparable:{t:Time}}},{t:m$1.Ordinal,a:{Other$Ordinal:{t:Time}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:Time}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Time')];},d:['ceylon.time','Time']};};
ex$.Time=Time;
function $init$Time(){
if(Time.$$===undefined){
m$1.initTypeProtoI(Time,'ceylon.time::Time',$init$ReadableTime$base(),$init$TimeBehavior$base(),m$1.Comparable,m$1.Ordinal,m$1.Enumerable);
(function(time$){
time$.plus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'period',mt:'prm',$t:{t:ReadableTimePeriod$base}}],$cont:Time,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Time:$m:plus')];},d:['ceylon.time','Time','$m','plus']};}};time$.minus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'period',mt:'prm',$t:{t:ReadableTimePeriod$base}}],$cont:Time,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Time:$m:minus')];},d:['ceylon.time','Time','$m','minus']};}};time$.periodFrom={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'start',mt:'prm',$t:{t:Time}}],$cont:Time,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Time:$m:periodFrom')];},d:['ceylon.time','Time','$m','periodFrom']};}};time$.periodTo={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'end',mt:'prm',$t:{t:Time}}],$cont:Time,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Time:$m:periodTo')];},d:['ceylon.time','Time','$m','periodTo']};}};time$.rangeTo={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:TimeRange},ps:[{nm:'other',mt:'prm',$t:{t:Time}}],$cont:Time,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Time:$m:rangeTo')];},d:['ceylon.time','Time','$m','rangeTo']};}};time$.equals=function($67b){
var time$=this;
var $67c;
if(m$1.is$(($67c=$67b),{t:Time})){
return (time$.millisecondsOfDay==$67c.millisecondsOfDay);
}
function $67d(){return $67b;}
return false;
};time$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Time,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Time:$m:equals')];},d:['ceylon.time','Time','$m','equals']};};
m$1.atr$(time$,'hash',function(){
var time$=this;
return time$.millisecondsOfDay.hash;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Time,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Time:$at:hash')];},d:['ceylon.time','Time','$at','hash']};});time$.toString=function(){return this.string.valueOf();};
})(Time.$$.prototype);
}
return Time;
}
ex$.$init$Time=$init$Time;$init$Time();
function time($67e,$67f,$67g,$67h){
if($67g===undefined){$67g=(0);}
if($67h===undefined){$67h=(0);}
m$1.asrt$((($67i=$67e,$67i.notSmallerThan((0))&&$67i.smallerThan(hours$base().perDay))),"Assertion failed: "+"Hours value should be between 0 and 23.\n\tviolated  0 <= hours < h.perDay \n\tat Time.ceylon (75:10-75:34)",'74:4-75:35','Time.ceylon');
m$1.asrt$((($67j=$67f,$67j.notSmallerThan((0))&&$67j.smallerThan(minutes$base().perHour))),"Assertion failed: "+"Minutes value should be between 0 and 59.\n\tviolated  0 <= minutes < min.perHour \n\tat Time.ceylon (78:10-78:39)",'77:4-78:40','Time.ceylon');
m$1.asrt$((($67k=$67g,$67k.notSmallerThan((0))&&$67k.smallerThan(seconds$base().perMinute))),"Assertion failed: "+"Seconds value should be between 0 and 59.\n\tviolated  0 <= seconds < sec.perMinute \n\tat Time.ceylon (81:10-81:41)",'80:4-81:42','Time.ceylon');
m$1.asrt$((($67l=$67h,$67l.notSmallerThan((0))&&$67l.smallerThan(milliseconds$base().perSecond))),"Assertion failed: "+"Milliseconds value should be between 0 and 999.\n\tviolated  0 <= milliseconds < ms.perSecond \n\tat Time.ceylon (84:10-84:45)",'83:4-84:46','Time.ceylon');
var $67m=($67e*milliseconds$base().perHour);
var $67n=($67f*milliseconds$base().perMinute);
var $67o=($67g*milliseconds$base().perSecond);
return TimeOfDay$internal(((($67m+$67n)+$67o)+$67h));
}
ex$.time=time;
time.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}},{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}},{nm:'seconds',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'milliseconds',mt:'prm',def:1,$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:time')];},d:['ceylon.time','time']};};
function TimeRange(from,to,step,timeRange$){
$init$TimeRange();
if(timeRange$===undefined)timeRange$=new TimeRange.$$;
timeRange$.$wgb6s9$67p_=from;
timeRange$.$wgb6s9$67q_=to;
if(step===undefined){step=$init$TimeRange().$defs$step(timeRange$,from,to);}
timeRange$.$wgb6s9$67r_=step;
Range$base({StepBy$Range:{t:UnitOfTime$base},Element$Range:{t:Time}},timeRange$);
return timeRange$;
}
TimeRange.$defs$step=function(timeRange$,from,to){return milliseconds$base()};TimeRange.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'from',mt:'prm',$t:{t:Time},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:from')];}},{nm:'to',mt:'prm',$t:{t:Time},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:to')];}},{nm:'step',mt:'prm',def:1,$t:{t:UnitOfTime$base},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:step')];}}],sts:[{t:Range$base,a:{StepBy$Range:{t:UnitOfTime$base},Element$Range:{t:Time}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.base'),Range$base)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.time','TimeRange']};};
ex$.TimeRange=TimeRange;
function $init$TimeRange(){
if(TimeRange.$$===undefined){
m$1.initTypeProto(TimeRange,'ceylon.time::TimeRange',m$1.Basic,$init$Range$base());
(function(timeRange$){
m$1.atr$(timeRange$,'from',function(){return this.$wgb6s9$67p_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:from')];},d:['ceylon.time','TimeRange','$at','from']};});
m$1.atr$(timeRange$,'to',function(){return this.$wgb6s9$67q_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:to')];},d:['ceylon.time','TimeRange','$at','to']};});
m$1.atr$(timeRange$,'step',function(){return this.$wgb6s9$67r_;},undefined,function(){return{mod:$CCMM$,$t:{t:UnitOfTime$base},$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:step')];},d:['ceylon.time','TimeRange','$at','step']};});
m$1.atr$(timeRange$,'period',function(){
var timeRange$=this;
return timeRange$.from.periodTo(timeRange$.to);
},undefined,function(){return{mod:$CCMM$,$t:{t:Period},$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:period')];},d:['ceylon.time','TimeRange','$at','period']};});
m$1.atr$(timeRange$,'duration',function(){
var timeRange$=this;
return Duration((timeRange$.to.millisecondsOfDay-timeRange$.from.millisecondsOfDay));
},undefined,function(){return{mod:$CCMM$,$t:{t:Duration},$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:duration')];},d:['ceylon.time','TimeRange','$at','duration']};});
timeRange$.equals=function($67u){var timeRange$=this;
return timeRange$.getT$all()['ceylon.time.base::Range'].$$.prototype.equals.call(timeRange$,$67u);
};
timeRange$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$m:equals')];},d:['ceylon.time','TimeRange','$m','equals']};};
m$1.atr$(timeRange$,'hash',function(){
var timeRange$=this;
return m$1.attrGetter(timeRange$.getT$all()['ceylon.time.base::Range'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:hash')];},d:['ceylon.time','TimeRange','$at','hash']};});
timeRange$.overlap=function($67w){
var timeRange$=this;
var $67x=overlap$internal(m$1.tpl$([timeRange$.from,timeRange$.to]),m$1.tpl$([$67w.from,$67w.to]),{Value$overlap:{t:Time}});
var $67y;
if(m$1.is$(($67y=$67x),m$1.mtt$([{t:Time},{t:Time}]))){
return TimeRange($67y.$_get(0),$67y.$_get(1));
}
else{
return $67y;
}
};timeRange$.overlap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:TimeRange},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{StepBy$Range:{t:UnitOfTime$base},Element$Range:{t:Time}}}}],$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$m:overlap')];},d:['ceylon.time','TimeRange','$m','overlap']};};
timeRange$.gap=function($67z){
var timeRange$=this;
var $680=gap$internal(m$1.tpl$([timeRange$.from,timeRange$.to]),m$1.tpl$([$67z.from,$67z.to]),{Value$gap:{t:Time}});
var $681=$680;
if(m$1.is$($681,m$1.mtt$([{t:Time},{t:Time}]))) {
return ($682=($681.$_get(0).successor.smallerThan($681.$_get(1))?TimeRange($681.$_get(0).successor,$681.$_get(1).predecessor):null),m$1.nn$($682)?$682:m$1.empty());
var $682;
}
else if(m$1.is$($681,{t:m$1.Empty})) {
return $681;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};timeRange$.gap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:TimeRange},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{StepBy$Range:{t:UnitOfTime$base},Element$Range:{t:Time}}}}],$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$m:gap')];},d:['ceylon.time','TimeRange','$m','gap']};};
timeRange$.iterator=function(){
var timeRange$=this;
function $683($$targs$$){
var $683$=new $683.$$;$683$.outer$=timeRange$;
$683$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:{t:Time}},$683$);
$683$.$wgb6s9$685_=(0);
$683$.$prop$get$wgb6s9$685={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$683,pa:1024,d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator$itbwha','$at','count$dw3q34']};}};
$683$.$prop$get$wgb6s9$685.get=function(){return $wgb6s9$685};
return $683$;
};$683.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:timeRange$.iterator,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:Time}}}],d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator$itbwha']};};
function $init$$683(){
if($683.$$===undefined){
m$1.initTypeProto($683,'ceylon.time::TimeRange.iterator.listIterator',m$1.Basic,m$1.Iterator);
(function($683$){
m$1.atr$($683$,'$wgb6s9$685',function(){return this.$wgb6s9$685_;},function($686){return this.$wgb6s9$685_=$686;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$683,pa:1024,d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator$itbwha','$at','count$dw3q34']};});
$683$.next=function(){
var $683$=this;
var $687=($688=(timeRange$.from.largerThan(timeRange$.to)?timeRange$.$wgb6s9$689(($68a=$683$.$wgb6s9$685,$683$.$wgb6s9$685=$68a.successor,$68a)):null),m$1.nn$($688)?$688:timeRange$.$wgb6s9$68b(($68c=$683$.$wgb6s9$685,$683$.$wgb6s9$685=$68c.successor,$68c)));
var $688,$68a,$68c;
var $68d=($68e=(timeRange$.from.notLargerThan(timeRange$.to)?$687.notLargerThan(timeRange$.to):null),m$1.nn$($68e)?$68e:($687.notSmallerThan(timeRange$.to)&&$687.notLargerThan(timeRange$.from)));
var $68e;
return ($68f=($68d?$687:null),m$1.nn$($68f)?$68f:m$1.finished());
var $68f;
};$683$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:Time},{t:m$1.Finished}]},ps:[],$cont:$683,pa:3,d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator$itbwha','$m','next']};};
$683$.toString=function(){return this.string.valueOf();};
})($683.$$.prototype);
}
return $683;
}
timeRange$.$init$$683=$init$$683;$init$$683();var $68g;
function $684(){
if($68g===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'listIterator\' before it was set"),'121:8-128:8','TimeRange.ceylon');
if($68g===undefined){$68g=m$1.INIT$;$68g=$init$$683()({Element$Iterator:{t:Time}});$68g.$crtmm$=$684.$crtmm$;}
return $68g;
}
$684.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$$683()},$cont:timeRange$.iterator,d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator$itbwhb']};};
$prop$get$683=$684;
$684();
return $684();
};timeRange$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:Time}}},ps:[],$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$m:iterator')];},d:['ceylon.time','TimeRange','$m','iterator']};};
timeRange$.stepBy=function($68h){
var timeRange$=this;
return ($68i=(m$1.$eq$($68h,timeRange$.step)?timeRange$:null),m$1.nn$($68i)?$68i:TimeRange(timeRange$.from,timeRange$.to,$68h));
var $68i;
};timeRange$.stepBy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TimeRange},ps:[{nm:'step',mt:'prm',$t:{t:UnitOfTime$base}}],$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$m:stepBy')];},d:['ceylon.time','TimeRange','$m','stepBy']};};
timeRange$.$wgb6s9$68b$defs$jump=function($68j){return 1;};
timeRange$.$wgb6s9$68b=function($68j){
var timeRange$=this;
if($68j===undefined){$68j=(1);}
var $68k=timeRange$.step;
if(m$1.is$($68k,{t:UnitOfHour$base})) {
return timeRange$.from.plusHours($68j);
}
else if(m$1.is$($68k,{t:UnitOfMinute$base})) {
return timeRange$.from.plusMinutes($68j);
}
else if(m$1.is$($68k,{t:UnitOfSecond$base})) {
return timeRange$.from.plusSeconds($68j);
}
else if(m$1.is$($68k,{t:UnitOfMillisecond$base})) {
return timeRange$.from.plusMilliseconds($68j);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};timeRange$.$wgb6s9$68b.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'jump',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:TimeRange,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$m:nextByStep$9cla77')];},d:['ceylon.time','TimeRange','$m','nextByStep$9cla77']};};
timeRange$.$wgb6s9$689$defs$jump=function($68l){return 1;};
timeRange$.$wgb6s9$689=function($68l){
var timeRange$=this;
if($68l===undefined){$68l=(1);}
var $68m=timeRange$.step;
if(m$1.is$($68m,{t:UnitOfHour$base})) {
return timeRange$.from.minusHours($68l);
}
else if(m$1.is$($68m,{t:UnitOfMinute$base})) {
return timeRange$.from.minusMinutes($68l);
}
else if(m$1.is$($68m,{t:UnitOfSecond$base})) {
return timeRange$.from.minusSeconds($68l);
}
else if(m$1.is$($68m,{t:UnitOfMillisecond$base})) {
return timeRange$.from.minusMilliseconds($68l);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};timeRange$.$wgb6s9$689.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'jump',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:TimeRange,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$m:previousByStep$1wvr21')];},d:['ceylon.time','TimeRange','$m','previousByStep$1wvr21']};};
timeRange$.toString=function(){return this.string.valueOf();};
})(TimeRange.$$.prototype);
}
return TimeRange;
}
ex$.$init$TimeRange=$init$TimeRange;$init$TimeRange();
function YearMonth(yearMonth$){
ReadableYear$base(yearMonth$);
ReadableMonth$base(yearMonth$);
YearBehavior$base({Element$YearBehavior:{t:YearMonth}},yearMonth$);
MonthBehavior$base({Element$MonthBehavior:{t:YearMonth}},yearMonth$);
m$1.Ordinal({Other$Ordinal:{t:YearMonth}},yearMonth$);
m$1.Comparable({Other$Comparable:{t:YearMonth}},yearMonth$);
m$1.Enumerable({Other$Enumerable:{t:YearMonth}},yearMonth$);
}
YearMonth.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableYear$base},{t:ReadableMonth$base},{t:YearBehavior$base,a:{Element$YearBehavior:{t:YearMonth}}},{t:MonthBehavior$base,a:{Element$MonthBehavior:{t:YearMonth}}},{t:m$1.Ordinal,a:{Other$Ordinal:{t:YearMonth}}},{t:m$1.Comparable,a:{Other$Comparable:{t:YearMonth}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:YearMonth}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:YearMonth')];},d:['ceylon.time','YearMonth']};};
ex$.YearMonth=YearMonth;
function $init$YearMonth(){
if(YearMonth.$$===undefined){
m$1.initTypeProtoI(YearMonth,'ceylon.time::YearMonth',$init$ReadableYear$base(),$init$ReadableMonth$base(),$init$YearBehavior$base(),$init$MonthBehavior$base(),m$1.Ordinal,m$1.Comparable,m$1.Enumerable);
(function(yearMonth$){
yearMonth$.equals=function($68n){
var yearMonth$=this;
var $68o;
if(m$1.is$(($68o=$68n),{t:YearMonth})){
return ((yearMonth$.year==$68o.year)&&m$1.$eq$(yearMonth$.month,$68o.month));
}
else{
return false;
}
};yearMonth$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:YearMonth,pa:3,d:['ceylon.time','YearMonth','$m','equals']};};
m$1.atr$(yearMonth$,'hash',function(){
var yearMonth$=this;
var $68p=(1);
$68p=(((31)*$68p)+yearMonth$.year);
$68p=(((31)*$68p)+yearMonth$.month.hash);
return $68p;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:YearMonth,pa:3,d:['ceylon.time','YearMonth','$at','hash']};});yearMonth$.toString=function(){return this.string.valueOf();};
})(YearMonth.$$.prototype);
}
return YearMonth;
}
ex$.$init$YearMonth=$init$YearMonth;$init$YearMonth();
function yearMonth($68q,$68r){return gregorianYearMonth$internal($68q,$68r);
};
yearMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:YearMonth},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}},{nm:'month',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:Month$base}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:yearMonth')];},d:['ceylon.time','yearMonth']};};
ex$.yearMonth=yearMonth;
function DateBehavior$base($$targs$$,dateBehavior$){
m$1.set_type_args(dateBehavior$,$$targs$$,DateBehavior$base);
YearBehavior$base({Element$YearBehavior:$$targs$$.Element$DateBehavior},dateBehavior$);
MonthBehavior$base({Element$MonthBehavior:$$targs$$.Element$DateBehavior},dateBehavior$);
}
DateBehavior$base.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$DateBehavior:{sts:[{t:ReadableDate$base}]}},sts:[{t:YearBehavior$base,a:{Element$YearBehavior:'Element$DateBehavior'}},{t:MonthBehavior$base,a:{Element$MonthBehavior:'Element$DateBehavior'}}],pa:1,an:function(){return[m$1.doc("Common behavior for date types.")];},d:['ceylon.time.base','DateBehavior']};};
ex$.DateBehavior$base=DateBehavior$base;
function $init$DateBehavior$base(){
if(DateBehavior$base.$$===undefined){
m$1.initTypeProtoI(DateBehavior$base,'ceylon.time.base::DateBehavior',$init$YearBehavior$base(),$init$MonthBehavior$base());
(function(dateBehavior$){
dateBehavior$.withDay={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'dayOfMonth',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:withDay')];},d:['ceylon.time.base','DateBehavior','$m','withDay']};}};dateBehavior$.withWeekOfYear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'weekNumber',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:withWeekOfYear')];},d:['ceylon.time.base','DateBehavior','$m','withWeekOfYear']};}};dateBehavior$.withDayOfWeek={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:DayOfWeek$base}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:withDayOfWeek')];},d:['ceylon.time.base','DateBehavior','$m','withDayOfWeek']};}};dateBehavior$.withDayOfYear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'dayOfYear',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:withDayOfYear')];},d:['ceylon.time.base','DateBehavior','$m','withDayOfYear']};}};dateBehavior$.plusWeeks={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:plusWeeks')];},d:['ceylon.time.base','DateBehavior','$m','plusWeeks']};}};dateBehavior$.plusDays={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:plusDays')];},d:['ceylon.time.base','DateBehavior','$m','plusDays']};}};dateBehavior$.minusWeeks={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:minusWeeks')];},d:['ceylon.time.base','DateBehavior','$m','minusWeeks']};}};dateBehavior$.minusDays={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:minusDays')];},d:['ceylon.time.base','DateBehavior','$m','minusDays']};}};dateBehavior$.toString=function(){return this.string.valueOf();};
})(DateBehavior$base.$$.prototype);
}
return DateBehavior$base;
}
ex$.$init$DateBehavior$base=$init$DateBehavior$base;$init$DateBehavior$base();
function DateTimeBehavior$base($$targs$$,dateTimeBehavior$){
m$1.set_type_args(dateTimeBehavior$,$$targs$$,DateTimeBehavior$base);
DateBehavior$base({Element$DateBehavior:$$targs$$.Element$DateTimeBehavior},dateTimeBehavior$);
TimeBehavior$base({Element$TimeBehavior:$$targs$$.Element$DateTimeBehavior},dateTimeBehavior$);
}
DateTimeBehavior$base.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$DateTimeBehavior:{sts:[{t:ReadableDateTime$base}]},DateType$DateTimeBehavior:{dv:'out',sts:[{t:ReadableDate$base}]},TimeType$DateTimeBehavior:{dv:'out',sts:[{t:ReadableTime$base}]}},sts:[{t:DateBehavior$base,a:{Element$DateBehavior:'Element$DateTimeBehavior'}},{t:TimeBehavior$base,a:{Element$TimeBehavior:'Element$DateTimeBehavior'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateTimeBehavior'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),DateTime),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.base'),ReadableDateTime$base),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.base'),ReadableDate$base),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.base'),ReadableTime$base)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.time.base','DateTimeBehavior']};};
ex$.DateTimeBehavior$base=DateTimeBehavior$base;
function $init$DateTimeBehavior$base(){
if(DateTimeBehavior$base.$$===undefined){
m$1.initTypeProtoI(DateTimeBehavior$base,'ceylon.time.base::DateTimeBehavior',$init$DateBehavior$base(),$init$TimeBehavior$base());
(function(dateTimeBehavior$){
dateTimeBehavior$.$prop$getTime={$crtmm$:function(){return{mod:$CCMM$,$t:'TimeType$DateTimeBehavior',$cont:DateTimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateTimeBehavior:$at:time')];},d:['ceylon.time.base','DateTimeBehavior','$at','time']};}};
dateTimeBehavior$.$prop$getDate={$crtmm$:function(){return{mod:$CCMM$,$t:'DateType$DateTimeBehavior',$cont:DateTimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateTimeBehavior:$at:date')];},d:['ceylon.time.base','DateTimeBehavior','$at','date']};}};
dateTimeBehavior$.toString=function(){return this.string.valueOf();};
})(DateTimeBehavior$base.$$.prototype);
}
return DateTimeBehavior$base;
}
ex$.$init$DateTimeBehavior$base=$init$DateTimeBehavior$base;$init$DateTimeBehavior$base();
function DayOfWeek$base(integer,dayOfWeek$){
$init$DayOfWeek$base();
if(dayOfWeek$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.base::DayOfWeek"),'?','?')
dayOfWeek$.integer_=integer;
m$1.Ordinal({Other$Ordinal:{t:DayOfWeek$base}},dayOfWeek$);
m$1.Comparable({Other$Comparable:{t:DayOfWeek$base}},dayOfWeek$);
m$1.Enumerable({Other$Enumerable:{t:DayOfWeek$base}},dayOfWeek$);
return dayOfWeek$;
}
DayOfWeek$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'integer',mt:'prm',$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc("Numeric value of the DayOfWeek.")];}}],sts:[{t:m$1.Ordinal,a:{Other$Ordinal:{t:DayOfWeek$base}}},{t:m$1.Comparable,a:{Other$Comparable:{t:DayOfWeek$base}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:DayOfWeek$base}}}],of:[$prop$getMonday$base,$prop$getTuesday$base,$prop$getWednesday$base,$prop$getThursday$base,$prop$getFriday$base,$prop$getSaturday$base,$prop$getSunday$base],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DayOfWeek')];},d:['ceylon.time.base','DayOfWeek']};};
ex$.DayOfWeek$base=DayOfWeek$base;
function $init$DayOfWeek$base(){
if(DayOfWeek$base.$$===undefined){
m$1.initTypeProto(DayOfWeek$base,'ceylon.time.base::DayOfWeek',m$1.Basic,m$1.Ordinal,m$1.Comparable,m$1.Enumerable);
(function(dayOfWeek$){
m$1.atr$(dayOfWeek$,'integer',function(){return this.integer_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:DayOfWeek$base,pa:1,an:function(){return[m$1.doc("Numeric value of the DayOfWeek.")];},d:['ceylon.time.base','DayOfWeek','$at','integer']};});
dayOfWeek$.plusDays=function($68s){
var dayOfWeek$=this;
if(($68t=$68s,$68t.largerThan((-7))&&$68t.smallerThan((7)))){
var $68u=(((7)+dayOfWeek$.integer)+$68s).remainder((7));
var $68v;
m$1.asrt$((m$1.nn$(($68v=weekdays$base().$_get($68u)))),"Assertion failed: "+"\n\tviolated exists dow = weekdays[wd]\n\tat DayOfWeek.ceylon (32:19-32:45)",'32:12-32:46','DayOfWeek.ceylon');
return $68v;
}
else{
return dayOfWeek$.plusDays($68s.remainder((7)));
}
};dayOfWeek$.plusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},ps:[{nm:'number',mt:'prm',$t:{t:m$1.Integer}}],$cont:DayOfWeek$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DayOfWeek:$m:plusDays')];},d:['ceylon.time.base','DayOfWeek','$m','plusDays']};};
dayOfWeek$.minusDays=function($68w){var dayOfWeek$=this;
return dayOfWeek$.plusDays((-$68w));
};
dayOfWeek$.minusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},ps:[{nm:'number',mt:'prm',$t:{t:m$1.Integer}}],$cont:DayOfWeek$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DayOfWeek:$m:minusDays')];},d:['ceylon.time.base','DayOfWeek','$m','minusDays']};};
dayOfWeek$.compare=function($68x){var dayOfWeek$=this;
return dayOfWeek$.integer.compare($68x.integer);
};
dayOfWeek$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:DayOfWeek$base}}],$cont:DayOfWeek$base,pa:3,an:function(){return[m$1.doc("Compare days of week.")];},d:['ceylon.time.base','DayOfWeek','$m','compare']};};
dayOfWeek$.offset=function($68y){var dayOfWeek$=this;
return function(){var $68z=(dayOfWeek$.integer-$68y.integer);return (($68z<(0))?($68z+(7)):$68z);
}();
};
dayOfWeek$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:DayOfWeek$base}}],$cont:DayOfWeek$base,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DayOfWeek:$m:offset')];},d:['ceylon.time.base','DayOfWeek','$m','offset']};};
dayOfWeek$.neighbour=function($690){var dayOfWeek$=this;
return dayOfWeek$.plusDays($690);
};
dayOfWeek$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:DayOfWeek$base,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DayOfWeek:$m:neighbour')];},d:['ceylon.time.base','DayOfWeek','$m','neighbour']};};
dayOfWeek$.toString=function(){return this.string.valueOf();};
})(DayOfWeek$base.$$.prototype);
}
return DayOfWeek$base;
}
ex$.$init$DayOfWeek$base=$init$DayOfWeek$base;$init$DayOfWeek$base();
var $691$base;function $valinit$$691$base(){if($691$base===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'weekdays\' before it was set"),'69:0-70:96','DayOfWeek.ceylon');
if($691$base===undefined){$691$base=m$1.INIT$;$691$base=m$1.tpl$([sunday$base(),monday$base(),tuesday$base(),wednesday$base(),thursday$base(),friday$base(),saturday$base()])};return $691$base;};
function weekdays$base(){return $valinit$$691$base();}
ex$.weekdays$base=weekdays$base;
var $prop$getWeekdays$base={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:DayOfWeek$base}}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:weekdays')];},d:['ceylon.time.base','weekdays']};}};
ex$.$prop$getWeekdays$base=$prop$getWeekdays$base;
$prop$getWeekdays$base.get=weekdays$base;
weekdays$base.$crtmm$=$prop$getWeekdays$base.$crtmm$;
function dayOfWeek$base($692){
var $693=$692;
if(m$1.is$($693,{t:DayOfWeek$base})) {
return $693;
}
else if(m$1.is$($693,{t:m$1.Integer})) {
m$1.asrt$((($694=$693,$694.notSmallerThan((0))&&$694.smallerThan((7)))),"Assertion failed: "+"\n\tviolated 0 <= dayOfWeek < 7\n\tat DayOfWeek.ceylon (77:15-77:34)",'77:8-77:35','DayOfWeek.ceylon');
var $695;
m$1.asrt$((m$1.nn$(($695=weekdays$base().$_get($693)))),"Assertion failed: "+"\n\tviolated exists DayOfWeek dow = weekdays[dayOfWeek]\n\tat DayOfWeek.ceylon (78:15-78:58)",'78:8-78:59','DayOfWeek.ceylon');
return $695;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
ex$.dayOfWeek$base=dayOfWeek$base;
dayOfWeek$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:DayOfWeek$base}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:dayOfWeek')];},d:['ceylon.time.base','dayOfWeek']};};
function parseDayOfWeek$base($696){
var $697=$696.lowercased;
var $699;for(var $698=weekdays$base().iterator();($699=$698.next())!==m$1.finished();){
if(m$1.$eq$($699.string.lowercased,$697)){
return $699;
}
}
return null;
}
ex$.parseDayOfWeek$base=parseDayOfWeek$base;
parseDayOfWeek$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DayOfWeek$base}]},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:parseDayOfWeek')];},d:['ceylon.time.base','parseDayOfWeek']};};
function $69a$base(){
var sunday$=new $69a$base.$$;DayOfWeek$base(0,sunday$);
sunday$.$wgb6s9$69c_="sunday";
sunday$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$69a$base,pa:3,d:['ceylon.time.base','sunday','$at','string']};}};
sunday$.$prop$getString.get=function(){return string};
sunday$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$69a$base,pa:3,d:['ceylon.time.base','sunday','$at','predecessor']};}};
sunday$.$prop$getPredecessor.get=function(){return predecessor};
sunday$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$69a$base,pa:3,d:['ceylon.time.base','sunday','$at','successor']};}};
sunday$.$prop$getSuccessor.get=function(){return successor};
return sunday$;
};$69a$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DayOfWeek$base},d:['ceylon.time.base','sunday']};};
function $init$sunday$base(){
if($69a$base.$$===undefined){
m$1.initTypeProto($69a$base,'ceylon.time.base::sunday',$init$DayOfWeek$base());
(function(sunday$){
m$1.atr$(sunday$,'string',function(){return this.$wgb6s9$69c_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$69a$base,pa:3,d:['ceylon.time.base','sunday','$at','string']};});
m$1.atr$(sunday$,'predecessor',function(){
var sunday$=this;
return saturday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$69a$base,pa:3,d:['ceylon.time.base','sunday','$at','predecessor']};});
m$1.atr$(sunday$,'successor',function(){
var sunday$=this;
return monday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$69a$base,pa:3,d:['ceylon.time.base','sunday','$at','successor']};});
sunday$.toString=function(){return this.string.valueOf();};
})($69a$base.$$.prototype);
}
return $69a$base;
}
ex$.$init$sunday$base=$init$sunday$base;$init$sunday$base();var $69f;
function sunday$base(){
if($69f===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'sunday\' before it was set"),'104:0-109:0','DayOfWeek.ceylon');
if($69f===undefined){$69f=m$1.INIT$;$69f=$init$sunday$base()();$69f.$crtmm$=sunday$base.$crtmm$;}
return $69f;
}
ex$.sunday$base=sunday$base;
sunday$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$sunday$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:sunday')];},d:['ceylon.time.base','sunday']};};
$prop$getSunday$base=sunday$base;
ex$.$prop$getSunday$base=$prop$getSunday$base;
function $69g$base(){
var monday$=new $69g$base.$$;DayOfWeek$base(1,monday$);
monday$.$wgb6s9$69i_="monday";
monday$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$69g$base,pa:3,d:['ceylon.time.base','monday','$at','string']};}};
monday$.$prop$getString.get=function(){return string};
monday$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$69g$base,pa:3,d:['ceylon.time.base','monday','$at','predecessor']};}};
monday$.$prop$getPredecessor.get=function(){return predecessor};
monday$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$69g$base,pa:3,d:['ceylon.time.base','monday','$at','successor']};}};
monday$.$prop$getSuccessor.get=function(){return successor};
return monday$;
};$69g$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DayOfWeek$base},d:['ceylon.time.base','monday']};};
function $init$monday$base(){
if($69g$base.$$===undefined){
m$1.initTypeProto($69g$base,'ceylon.time.base::monday',$init$DayOfWeek$base());
(function(monday$){
m$1.atr$(monday$,'string',function(){return this.$wgb6s9$69i_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$69g$base,pa:3,d:['ceylon.time.base','monday','$at','string']};});
m$1.atr$(monday$,'predecessor',function(){
var monday$=this;
return sunday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$69g$base,pa:3,d:['ceylon.time.base','monday','$at','predecessor']};});
m$1.atr$(monday$,'successor',function(){
var monday$=this;
return tuesday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$69g$base,pa:3,d:['ceylon.time.base','monday','$at','successor']};});
monday$.toString=function(){return this.string.valueOf();};
})($69g$base.$$.prototype);
}
return $69g$base;
}
ex$.$init$monday$base=$init$monday$base;$init$monday$base();var $69l;
function monday$base(){
if($69l===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'monday\' before it was set"),'111:0-116:0','DayOfWeek.ceylon');
if($69l===undefined){$69l=m$1.INIT$;$69l=$init$monday$base()();$69l.$crtmm$=monday$base.$crtmm$;}
return $69l;
}
ex$.monday$base=monday$base;
monday$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$monday$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:monday')];},d:['ceylon.time.base','monday']};};
$prop$getMonday$base=monday$base;
ex$.$prop$getMonday$base=$prop$getMonday$base;
function $69m$base(){
var tuesday$=new $69m$base.$$;DayOfWeek$base(2,tuesday$);
tuesday$.$wgb6s9$69o_="tuesday";
tuesday$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$69m$base,pa:3,d:['ceylon.time.base','tuesday','$at','string']};}};
tuesday$.$prop$getString.get=function(){return string};
tuesday$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$69m$base,pa:3,d:['ceylon.time.base','tuesday','$at','predecessor']};}};
tuesday$.$prop$getPredecessor.get=function(){return predecessor};
tuesday$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$69m$base,pa:3,d:['ceylon.time.base','tuesday','$at','successor']};}};
tuesday$.$prop$getSuccessor.get=function(){return successor};
return tuesday$;
};$69m$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DayOfWeek$base},d:['ceylon.time.base','tuesday']};};
function $init$tuesday$base(){
if($69m$base.$$===undefined){
m$1.initTypeProto($69m$base,'ceylon.time.base::tuesday',$init$DayOfWeek$base());
(function(tuesday$){
m$1.atr$(tuesday$,'string',function(){return this.$wgb6s9$69o_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$69m$base,pa:3,d:['ceylon.time.base','tuesday','$at','string']};});
m$1.atr$(tuesday$,'predecessor',function(){
var tuesday$=this;
return monday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$69m$base,pa:3,d:['ceylon.time.base','tuesday','$at','predecessor']};});
m$1.atr$(tuesday$,'successor',function(){
var tuesday$=this;
return wednesday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$69m$base,pa:3,d:['ceylon.time.base','tuesday','$at','successor']};});
tuesday$.toString=function(){return this.string.valueOf();};
})($69m$base.$$.prototype);
}
return $69m$base;
}
ex$.$init$tuesday$base=$init$tuesday$base;$init$tuesday$base();var $69r;
function tuesday$base(){
if($69r===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'tuesday\' before it was set"),'118:0-123:0','DayOfWeek.ceylon');
if($69r===undefined){$69r=m$1.INIT$;$69r=$init$tuesday$base()();$69r.$crtmm$=tuesday$base.$crtmm$;}
return $69r;
}
ex$.tuesday$base=tuesday$base;
tuesday$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$tuesday$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:tuesday')];},d:['ceylon.time.base','tuesday']};};
$prop$getTuesday$base=tuesday$base;
ex$.$prop$getTuesday$base=$prop$getTuesday$base;
function $69s$base(){
var wednesday$=new $69s$base.$$;DayOfWeek$base(3,wednesday$);
wednesday$.$wgb6s9$69u_="wednesday";
wednesday$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$69s$base,pa:3,d:['ceylon.time.base','wednesday','$at','string']};}};
wednesday$.$prop$getString.get=function(){return string};
wednesday$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$69s$base,pa:3,d:['ceylon.time.base','wednesday','$at','predecessor']};}};
wednesday$.$prop$getPredecessor.get=function(){return predecessor};
wednesday$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$69s$base,pa:3,d:['ceylon.time.base','wednesday','$at','successor']};}};
wednesday$.$prop$getSuccessor.get=function(){return successor};
return wednesday$;
};$69s$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DayOfWeek$base},d:['ceylon.time.base','wednesday']};};
function $init$wednesday$base(){
if($69s$base.$$===undefined){
m$1.initTypeProto($69s$base,'ceylon.time.base::wednesday',$init$DayOfWeek$base());
(function(wednesday$){
m$1.atr$(wednesday$,'string',function(){return this.$wgb6s9$69u_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$69s$base,pa:3,d:['ceylon.time.base','wednesday','$at','string']};});
m$1.atr$(wednesday$,'predecessor',function(){
var wednesday$=this;
return tuesday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$69s$base,pa:3,d:['ceylon.time.base','wednesday','$at','predecessor']};});
m$1.atr$(wednesday$,'successor',function(){
var wednesday$=this;
return thursday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$69s$base,pa:3,d:['ceylon.time.base','wednesday','$at','successor']};});
wednesday$.toString=function(){return this.string.valueOf();};
})($69s$base.$$.prototype);
}
return $69s$base;
}
ex$.$init$wednesday$base=$init$wednesday$base;$init$wednesday$base();var $69x;
function wednesday$base(){
if($69x===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'wednesday\' before it was set"),'125:0-130:0','DayOfWeek.ceylon');
if($69x===undefined){$69x=m$1.INIT$;$69x=$init$wednesday$base()();$69x.$crtmm$=wednesday$base.$crtmm$;}
return $69x;
}
ex$.wednesday$base=wednesday$base;
wednesday$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$wednesday$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:wednesday')];},d:['ceylon.time.base','wednesday']};};
$prop$getWednesday$base=wednesday$base;
ex$.$prop$getWednesday$base=$prop$getWednesday$base;
function $69y$base(){
var thursday$=new $69y$base.$$;DayOfWeek$base(4,thursday$);
thursday$.$wgb6s9$6a0_="thursday";
thursday$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$69y$base,pa:3,d:['ceylon.time.base','thursday','$at','string']};}};
thursday$.$prop$getString.get=function(){return string};
thursday$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$69y$base,pa:3,d:['ceylon.time.base','thursday','$at','predecessor']};}};
thursday$.$prop$getPredecessor.get=function(){return predecessor};
thursday$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$69y$base,pa:3,d:['ceylon.time.base','thursday','$at','successor']};}};
thursday$.$prop$getSuccessor.get=function(){return successor};
return thursday$;
};$69y$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DayOfWeek$base},d:['ceylon.time.base','thursday']};};
function $init$thursday$base(){
if($69y$base.$$===undefined){
m$1.initTypeProto($69y$base,'ceylon.time.base::thursday',$init$DayOfWeek$base());
(function(thursday$){
m$1.atr$(thursday$,'string',function(){return this.$wgb6s9$6a0_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$69y$base,pa:3,d:['ceylon.time.base','thursday','$at','string']};});
m$1.atr$(thursday$,'predecessor',function(){
var thursday$=this;
return wednesday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$69y$base,pa:3,d:['ceylon.time.base','thursday','$at','predecessor']};});
m$1.atr$(thursday$,'successor',function(){
var thursday$=this;
return friday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$69y$base,pa:3,d:['ceylon.time.base','thursday','$at','successor']};});
thursday$.toString=function(){return this.string.valueOf();};
})($69y$base.$$.prototype);
}
return $69y$base;
}
ex$.$init$thursday$base=$init$thursday$base;$init$thursday$base();var $6a3;
function thursday$base(){
if($6a3===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'thursday\' before it was set"),'132:0-137:0','DayOfWeek.ceylon');
if($6a3===undefined){$6a3=m$1.INIT$;$6a3=$init$thursday$base()();$6a3.$crtmm$=thursday$base.$crtmm$;}
return $6a3;
}
ex$.thursday$base=thursday$base;
thursday$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$thursday$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:thursday')];},d:['ceylon.time.base','thursday']};};
$prop$getThursday$base=thursday$base;
ex$.$prop$getThursday$base=$prop$getThursday$base;
function $6a4$base(){
var friday$=new $6a4$base.$$;DayOfWeek$base(5,friday$);
friday$.$wgb6s9$6a6_="friday";
friday$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6a4$base,pa:3,d:['ceylon.time.base','friday','$at','string']};}};
friday$.$prop$getString.get=function(){return string};
friday$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$6a4$base,pa:3,d:['ceylon.time.base','friday','$at','predecessor']};}};
friday$.$prop$getPredecessor.get=function(){return predecessor};
friday$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$6a4$base,pa:3,d:['ceylon.time.base','friday','$at','successor']};}};
friday$.$prop$getSuccessor.get=function(){return successor};
return friday$;
};$6a4$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DayOfWeek$base},d:['ceylon.time.base','friday']};};
function $init$friday$base(){
if($6a4$base.$$===undefined){
m$1.initTypeProto($6a4$base,'ceylon.time.base::friday',$init$DayOfWeek$base());
(function(friday$){
m$1.atr$(friday$,'string',function(){return this.$wgb6s9$6a6_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6a4$base,pa:3,d:['ceylon.time.base','friday','$at','string']};});
m$1.atr$(friday$,'predecessor',function(){
var friday$=this;
return thursday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$6a4$base,pa:3,d:['ceylon.time.base','friday','$at','predecessor']};});
m$1.atr$(friday$,'successor',function(){
var friday$=this;
return saturday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$6a4$base,pa:3,d:['ceylon.time.base','friday','$at','successor']};});
friday$.toString=function(){return this.string.valueOf();};
})($6a4$base.$$.prototype);
}
return $6a4$base;
}
ex$.$init$friday$base=$init$friday$base;$init$friday$base();var $6a9;
function friday$base(){
if($6a9===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'friday\' before it was set"),'139:0-144:0','DayOfWeek.ceylon');
if($6a9===undefined){$6a9=m$1.INIT$;$6a9=$init$friday$base()();$6a9.$crtmm$=friday$base.$crtmm$;}
return $6a9;
}
ex$.friday$base=friday$base;
friday$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$friday$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:friday')];},d:['ceylon.time.base','friday']};};
$prop$getFriday$base=friday$base;
ex$.$prop$getFriday$base=$prop$getFriday$base;
function $6aa$base(){
var saturday$=new $6aa$base.$$;DayOfWeek$base(6,saturday$);
saturday$.$wgb6s9$6ac_="saturday";
saturday$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6aa$base,pa:3,d:['ceylon.time.base','saturday','$at','string']};}};
saturday$.$prop$getString.get=function(){return string};
saturday$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$6aa$base,pa:3,d:['ceylon.time.base','saturday','$at','predecessor']};}};
saturday$.$prop$getPredecessor.get=function(){return predecessor};
saturday$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$6aa$base,pa:3,d:['ceylon.time.base','saturday','$at','successor']};}};
saturday$.$prop$getSuccessor.get=function(){return successor};
return saturday$;
};$6aa$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DayOfWeek$base},d:['ceylon.time.base','saturday']};};
function $init$saturday$base(){
if($6aa$base.$$===undefined){
m$1.initTypeProto($6aa$base,'ceylon.time.base::saturday',$init$DayOfWeek$base());
(function(saturday$){
m$1.atr$(saturday$,'string',function(){return this.$wgb6s9$6ac_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6aa$base,pa:3,d:['ceylon.time.base','saturday','$at','string']};});
m$1.atr$(saturday$,'predecessor',function(){
var saturday$=this;
return friday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$6aa$base,pa:3,d:['ceylon.time.base','saturday','$at','predecessor']};});
m$1.atr$(saturday$,'successor',function(){
var saturday$=this;
return sunday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$6aa$base,pa:3,d:['ceylon.time.base','saturday','$at','successor']};});
saturday$.toString=function(){return this.string.valueOf();};
})($6aa$base.$$.prototype);
}
return $6aa$base;
}
ex$.$init$saturday$base=$init$saturday$base;$init$saturday$base();var $6af;
function saturday$base(){
if($6af===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'saturday\' before it was set"),'146:0-151:0','DayOfWeek.ceylon');
if($6af===undefined){$6af=m$1.INIT$;$6af=$init$saturday$base()();$6af.$crtmm$=saturday$base.$crtmm$;}
return $6af;
}
ex$.saturday$base=saturday$base;
saturday$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$saturday$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:saturday')];},d:['ceylon.time.base','saturday']};};
$prop$getSaturday$base=saturday$base;
ex$.$prop$getSaturday$base=$prop$getSaturday$base;
function Month$base(integer,month$){
$init$Month$base();
if(month$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.base::Month"),'?','?')
month$.integer_=integer;
m$1.Ordinal({Other$Ordinal:{t:Month$base}},month$);
m$1.Comparable({Other$Comparable:{t:Month$base}},month$);
m$1.Enumerable({Other$Enumerable:{t:Month$base}},month$);
return month$;
}
Month$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'integer',mt:'prm',$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$at:integer')];}}],sts:[{t:m$1.Ordinal,a:{Other$Ordinal:{t:Month$base}}},{t:m$1.Comparable,a:{Other$Comparable:{t:Month$base}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:Month$base}}}],of:[$prop$getJanuary$base,$prop$getFebruary$base,$prop$getMarch$base,$prop$getApril$base,$prop$getMay$base,$prop$getJune$base,$prop$getJuly$base,$prop$getAugust$base,$prop$getSeptember$base,$prop$getOctober$base,$prop$getNovember$base,$prop$getDecember$base],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month')];},d:['ceylon.time.base','Month']};};
ex$.Month$base=Month$base;
function $init$Month$base(){
if(Month$base.$$===undefined){
m$1.initTypeProto(Month$base,'ceylon.time.base::Month',m$1.Basic,m$1.Ordinal,m$1.Comparable,m$1.Enumerable);
(function(month$){
m$1.atr$(month$,'integer',function(){return this.integer_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Month$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$at:integer')];},d:['ceylon.time.base','Month','$at','integer']};});
month$.numberOfDays$defs$leapYear=function($6ag){return false;};
month$.numberOfDays=function($6ag){
var month$=this;
if($6ag===undefined){$6ag=false;}
var $6ah=month$;
if($6ah===february$base()) {
return ($6ai=($6ag?(29):null),m$1.nn$($6ai)?$6ai:(28));
var $6ai;
}
else if($6ah===april$base() || $6ah===june$base() || $6ah===september$base() || $6ah===november$base()) {
return 30;
}
else if($6ah===january$base() || $6ah===march$base() || $6ah===may$base() || $6ah===july$base() || $6ah===august$base() || $6ah===october$base() || $6ah===december$base()) {
return 31;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};month$.numberOfDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'leapYear',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:Month$base,pa:9,an:function(){return[m$1.doc("Returns number of days in this month.")];},d:['ceylon.time.base','Month','$m','numberOfDays']};};
month$.firstDayOfYear$defs$leapYear=function($6aj){return false;};
month$.firstDayOfYear=function($6aj){
var month$=this;
if($6aj===undefined){$6aj=false;}
var $6ak;
m$1.asrt$((m$1.nn$(($6ak=firstDayOfMonth$base().$_get((month$.integer-(1)))))),"Assertion failed: "+"\n\tviolated exists day = firstDayOfMonth[this.integer-1]\n\tat Month.ceylon (28:14-28:59)",'28:8-28:60','Month.ceylon');
if(($6aj&&month$.largerThan(february$base()))){
return ($6ak+(1));
}
return $6ak;
};month$.firstDayOfYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'leapYear',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:Month$base,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$m:firstDayOfYear')];},d:['ceylon.time.base','Month','$m','firstDayOfYear']};};
month$.compare=function($6al){var month$=this;
return month$.integer.compare($6al.integer);
};
month$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:Month$base}}],$cont:Month$base,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$m:compare')];},d:['ceylon.time.base','Month','$m','compare']};};
month$.plusMonths=function($6am){var month$=this;
return ($6an=(($6am==(0))?month$:null),m$1.nn$($6an)?$6an:month$.add($6am).month);
var $6an;
};
month$.plusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Month$base},ps:[{nm:'number',mt:'prm',$t:{t:m$1.Integer}}],$cont:Month$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$m:plusMonths')];},d:['ceylon.time.base','Month','$m','plusMonths']};};
month$.minusMonths=function($6ao){var month$=this;
return ($6ap=(($6ao==(0))?month$:null),m$1.nn$($6ap)?$6ap:month$.add((-$6ao)).month);
var $6ap;
};
month$.minusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Month$base},ps:[{nm:'number',mt:'prm',$t:{t:m$1.Integer}}],$cont:Month$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$m:minusMonths')];},d:['ceylon.time.base','Month','$m','minusMonths']};};
month$.add=function($6aq){
var month$=this;
var $6ar=((month$.integer-(1))+$6aq);
var $6as=floorMod$internal$math($6ar,months$base().perYear);
var $6at;
m$1.asrt$((m$1.nn$(($6at=months$base().all.$_get($6as)))),"Assertion failed: "+"\n\tviolated exists month = months.all[nextMonth]\n\tat Month.ceylon (61:15-61:52)",'61:8-61:53','Month.ceylon');
var $6au=floorDiv$internal$math($6ar,12);
return month$.Overflow$Month($6at,$6au);
};month$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:month$.Overflow$Month},ps:[{nm:'numberOfMonths',mt:'prm',$t:{t:m$1.Integer}}],$cont:Month$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$m:add')];},d:['ceylon.time.base','Month','$m','add']};};
month$.offset=function($6av){var month$=this;
return function(){var $6aw=(month$.integer-$6av.integer);return (($6aw<(0))?($6aw+(12)):$6aw);
}();
};
month$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:Month$base}}],$cont:Month$base,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$m:offset')];},d:['ceylon.time.base','Month','$m','offset']};};
month$.neighbour=function($6ax){var month$=this;
return month$.add($6ax).month;
};
month$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Month$base},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:Month$base,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$m:neighbour')];},d:['ceylon.time.base','Month','$m','neighbour']};};
function Overflow$Month(month,years,overflow$Month$){
$init$Overflow$Month();
if(overflow$Month$===undefined)overflow$Month$=new this.Overflow$Month.$$;
overflow$Month$.outer$=this;
overflow$Month$.month_=month;
overflow$Month$.years_=years;
return overflow$Month$;
}
Overflow$Month.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'month',mt:'prm',$t:{t:Month$base},pa:1,an:function(){return[m$1.doc("New month value.")];}},{nm:'years',mt:'prm',$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc("Number of years overflowed by calculation.")];}}],$cont:Month$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$c:Overflow')];},d:['ceylon.time.base','Month','$c','Overflow']};};
function $init$Overflow$Month(){
if(Overflow$Month.$$===undefined){
m$1.initTypeProto(Overflow$Month,'ceylon.time.base::Month.Overflow',m$1.Basic);
Month$base.Overflow$Month=Overflow$Month;
(function(overflow$Month$){
m$1.atr$(overflow$Month$,'month',function(){return this.month_;},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:month$.Overflow$Month,pa:1,an:function(){return[m$1.doc("New month value.")];},d:['ceylon.time.base','Month','$c','Overflow','$at','month']};});
m$1.atr$(overflow$Month$,'years',function(){return this.years_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:month$.Overflow$Month,pa:1,an:function(){return[m$1.doc("Number of years overflowed by calculation.")];},d:['ceylon.time.base','Month','$c','Overflow','$at','years']};});
overflow$Month$.toString=function(){return this.string.valueOf();};
})(Overflow$Month.$$.prototype);
}
return Overflow$Month;
}
month$.$init$Overflow$Month=$init$Overflow$Month;month$.Overflow$Month=Overflow$Month;
$init$Overflow$Month();
month$.toString=function(){return this.string.valueOf();};
})(Month$base.$$.prototype);
}
return Month$base;
}
ex$.$init$Month$base=$init$Month$base;$init$Month$base();
var $6ay$base;function $valinit$$6ay$base(){if($6ay$base===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'firstDayOfMonth\' before it was set"),'90:0-91:83','Month.ceylon');
if($6ay$base===undefined){$6ay$base=m$1.INIT$;$6ay$base=m$1.tpl$([1,32,60,91,121,152,182,213,244,274,305,335])};return $6ay$base;};
function firstDayOfMonth$base(){return $valinit$$6ay$base();}
var $prop$getFirstDayOfMonth$base={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Integer}}},an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:firstDayOfMonth')];},d:['ceylon.time.base','firstDayOfMonth']};}};
ex$.$prop$getFirstDayOfMonth$base=$prop$getFirstDayOfMonth$base;
$prop$getFirstDayOfMonth$base.get=firstDayOfMonth$base;
function monthOf$base($6az){
var $6b0=$6az;
if(m$1.is$($6b0,{t:Month$base})) {
return $6b0;
}
else if(m$1.is$($6b0,{t:m$1.Integer})) {
m$1.asrt$((($6b1=$6b0,$6b1.notSmallerThan(january$base().integer)&&$6b1.notLargerThan(december$base().integer))),"Assertion failed: "+"Invalid month.\n\tviolated  january.integer <= month <= december.integer \n\tat Month.ceylon (105:15-105:62)",'104:8-105:63','Month.ceylon');
var $6b2;
m$1.asrt$((m$1.nn$(($6b2=months$base().all.$_get(($6b0-(1)))))),"Assertion failed: "+"\n\tviolated  exists m = months.all[month-1] \n\tat Month.ceylon (106:15-106:48)",'106:8-106:49','Month.ceylon');
return $6b2;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
ex$.monthOf$base=monthOf$base;
monthOf$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Month$base},ps:[{nm:'month',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:Month$base}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:monthOf')];},d:['ceylon.time.base','monthOf']};};
function $6b3$base(){
var january$=new $6b3$base.$$;Month$base(gregorian$chronology().january,january$);
january$.$wgb6s9$6b5_="january";
january$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6b3$base,pa:3,d:['ceylon.time.base','january','$at','string']};}};
january$.$prop$getString.get=function(){return string};
january$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6b3$base,pa:3,d:['ceylon.time.base','january','$at','predecessor']};}};
january$.$prop$getPredecessor.get=function(){return predecessor};
january$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6b3$base,pa:3,d:['ceylon.time.base','january','$at','successor']};}};
january$.$prop$getSuccessor.get=function(){return successor};
return january$;
};$6b3$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','january']};};
function $init$january$base(){
if($6b3$base.$$===undefined){
m$1.initTypeProto($6b3$base,'ceylon.time.base::january',$init$Month$base());
(function(january$){
m$1.atr$(january$,'string',function(){return this.$wgb6s9$6b5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6b3$base,pa:3,d:['ceylon.time.base','january','$at','string']};});
m$1.atr$(january$,'predecessor',function(){
var january$=this;
return december$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6b3$base,pa:3,d:['ceylon.time.base','january','$at','predecessor']};});
m$1.atr$(january$,'successor',function(){
var january$=this;
return february$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6b3$base,pa:3,d:['ceylon.time.base','january','$at','successor']};});
january$.toString=function(){return this.string.valueOf();};
})($6b3$base.$$.prototype);
}
return $6b3$base;
}
ex$.$init$january$base=$init$january$base;$init$january$base();var $6b8;
function january$base(){
if($6b8===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'january\' before it was set"),'111:0-116:0','Month.ceylon');
if($6b8===undefined){$6b8=m$1.INIT$;$6b8=$init$january$base()();$6b8.$crtmm$=january$base.$crtmm$;}
return $6b8;
}
ex$.january$base=january$base;
january$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$january$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:january')];},d:['ceylon.time.base','january']};};
$prop$getJanuary$base=january$base;
ex$.$prop$getJanuary$base=$prop$getJanuary$base;
function $6b9$base(){
var february$=new $6b9$base.$$;Month$base(gregorian$chronology().february,february$);
february$.$wgb6s9$6bb_="february";
february$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6b9$base,pa:3,d:['ceylon.time.base','february','$at','string']};}};
february$.$prop$getString.get=function(){return string};
february$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6b9$base,pa:3,d:['ceylon.time.base','february','$at','predecessor']};}};
february$.$prop$getPredecessor.get=function(){return predecessor};
february$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6b9$base,pa:3,d:['ceylon.time.base','february','$at','successor']};}};
february$.$prop$getSuccessor.get=function(){return successor};
return february$;
};$6b9$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','february']};};
function $init$february$base(){
if($6b9$base.$$===undefined){
m$1.initTypeProto($6b9$base,'ceylon.time.base::february',$init$Month$base());
(function(february$){
m$1.atr$(february$,'string',function(){return this.$wgb6s9$6bb_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6b9$base,pa:3,d:['ceylon.time.base','february','$at','string']};});
m$1.atr$(february$,'predecessor',function(){
var february$=this;
return january$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6b9$base,pa:3,d:['ceylon.time.base','february','$at','predecessor']};});
m$1.atr$(february$,'successor',function(){
var february$=this;
return march$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6b9$base,pa:3,d:['ceylon.time.base','february','$at','successor']};});
february$.toString=function(){return this.string.valueOf();};
})($6b9$base.$$.prototype);
}
return $6b9$base;
}
ex$.$init$february$base=$init$february$base;$init$february$base();var $6be;
function february$base(){
if($6be===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'february\' before it was set"),'118:0-123:0','Month.ceylon');
if($6be===undefined){$6be=m$1.INIT$;$6be=$init$february$base()();$6be.$crtmm$=february$base.$crtmm$;}
return $6be;
}
ex$.february$base=february$base;
february$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$february$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:february')];},d:['ceylon.time.base','february']};};
$prop$getFebruary$base=february$base;
ex$.$prop$getFebruary$base=$prop$getFebruary$base;
function $6bf$base(){
var march$=new $6bf$base.$$;Month$base(gregorian$chronology().march,march$);
march$.$wgb6s9$6bh_="march";
march$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6bf$base,pa:3,d:['ceylon.time.base','march','$at','string']};}};
march$.$prop$getString.get=function(){return string};
march$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6bf$base,pa:3,d:['ceylon.time.base','march','$at','predecessor']};}};
march$.$prop$getPredecessor.get=function(){return predecessor};
march$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6bf$base,pa:3,d:['ceylon.time.base','march','$at','successor']};}};
march$.$prop$getSuccessor.get=function(){return successor};
return march$;
};$6bf$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','march']};};
function $init$march$base(){
if($6bf$base.$$===undefined){
m$1.initTypeProto($6bf$base,'ceylon.time.base::march',$init$Month$base());
(function(march$){
m$1.atr$(march$,'string',function(){return this.$wgb6s9$6bh_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6bf$base,pa:3,d:['ceylon.time.base','march','$at','string']};});
m$1.atr$(march$,'predecessor',function(){
var march$=this;
return february$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6bf$base,pa:3,d:['ceylon.time.base','march','$at','predecessor']};});
m$1.atr$(march$,'successor',function(){
var march$=this;
return april$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6bf$base,pa:3,d:['ceylon.time.base','march','$at','successor']};});
march$.toString=function(){return this.string.valueOf();};
})($6bf$base.$$.prototype);
}
return $6bf$base;
}
ex$.$init$march$base=$init$march$base;$init$march$base();var $6bk;
function march$base(){
if($6bk===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'march\' before it was set"),'125:0-130:0','Month.ceylon');
if($6bk===undefined){$6bk=m$1.INIT$;$6bk=$init$march$base()();$6bk.$crtmm$=march$base.$crtmm$;}
return $6bk;
}
ex$.march$base=march$base;
march$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$march$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:march')];},d:['ceylon.time.base','march']};};
$prop$getMarch$base=march$base;
ex$.$prop$getMarch$base=$prop$getMarch$base;
function $6bl$base(){
var april$=new $6bl$base.$$;Month$base(gregorian$chronology().april,april$);
april$.$wgb6s9$6bn_="april";
april$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6bl$base,pa:3,d:['ceylon.time.base','april','$at','string']};}};
april$.$prop$getString.get=function(){return string};
april$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6bl$base,pa:3,d:['ceylon.time.base','april','$at','predecessor']};}};
april$.$prop$getPredecessor.get=function(){return predecessor};
april$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6bl$base,pa:3,d:['ceylon.time.base','april','$at','successor']};}};
april$.$prop$getSuccessor.get=function(){return successor};
return april$;
};$6bl$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','april']};};
function $init$april$base(){
if($6bl$base.$$===undefined){
m$1.initTypeProto($6bl$base,'ceylon.time.base::april',$init$Month$base());
(function(april$){
m$1.atr$(april$,'string',function(){return this.$wgb6s9$6bn_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6bl$base,pa:3,d:['ceylon.time.base','april','$at','string']};});
m$1.atr$(april$,'predecessor',function(){
var april$=this;
return march$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6bl$base,pa:3,d:['ceylon.time.base','april','$at','predecessor']};});
m$1.atr$(april$,'successor',function(){
var april$=this;
return may$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6bl$base,pa:3,d:['ceylon.time.base','april','$at','successor']};});
april$.toString=function(){return this.string.valueOf();};
})($6bl$base.$$.prototype);
}
return $6bl$base;
}
ex$.$init$april$base=$init$april$base;$init$april$base();var $6bq;
function april$base(){
if($6bq===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'april\' before it was set"),'132:0-137:0','Month.ceylon');
if($6bq===undefined){$6bq=m$1.INIT$;$6bq=$init$april$base()();$6bq.$crtmm$=april$base.$crtmm$;}
return $6bq;
}
ex$.april$base=april$base;
april$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$april$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:april')];},d:['ceylon.time.base','april']};};
$prop$getApril$base=april$base;
ex$.$prop$getApril$base=$prop$getApril$base;
function $6br$base(){
var may$=new $6br$base.$$;Month$base(gregorian$chronology().may,may$);
may$.$wgb6s9$6bt_="may";
may$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6br$base,pa:3,d:['ceylon.time.base','may','$at','string']};}};
may$.$prop$getString.get=function(){return string};
may$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6br$base,pa:3,d:['ceylon.time.base','may','$at','predecessor']};}};
may$.$prop$getPredecessor.get=function(){return predecessor};
may$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6br$base,pa:3,d:['ceylon.time.base','may','$at','successor']};}};
may$.$prop$getSuccessor.get=function(){return successor};
return may$;
};$6br$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','may']};};
function $init$may$base(){
if($6br$base.$$===undefined){
m$1.initTypeProto($6br$base,'ceylon.time.base::may',$init$Month$base());
(function(may$){
m$1.atr$(may$,'string',function(){return this.$wgb6s9$6bt_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6br$base,pa:3,d:['ceylon.time.base','may','$at','string']};});
m$1.atr$(may$,'predecessor',function(){
var may$=this;
return april$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6br$base,pa:3,d:['ceylon.time.base','may','$at','predecessor']};});
m$1.atr$(may$,'successor',function(){
var may$=this;
return june$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6br$base,pa:3,d:['ceylon.time.base','may','$at','successor']};});
may$.toString=function(){return this.string.valueOf();};
})($6br$base.$$.prototype);
}
return $6br$base;
}
ex$.$init$may$base=$init$may$base;$init$may$base();var $6bw;
function may$base(){
if($6bw===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'may\' before it was set"),'139:0-144:0','Month.ceylon');
if($6bw===undefined){$6bw=m$1.INIT$;$6bw=$init$may$base()();$6bw.$crtmm$=may$base.$crtmm$;}
return $6bw;
}
ex$.may$base=may$base;
may$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$may$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:may')];},d:['ceylon.time.base','may']};};
$prop$getMay$base=may$base;
ex$.$prop$getMay$base=$prop$getMay$base;
function $6bx$base(){
var june$=new $6bx$base.$$;Month$base(gregorian$chronology().june,june$);
june$.$wgb6s9$6bz_="june";
june$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6bx$base,pa:3,d:['ceylon.time.base','june','$at','string']};}};
june$.$prop$getString.get=function(){return string};
june$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6bx$base,pa:3,d:['ceylon.time.base','june','$at','predecessor']};}};
june$.$prop$getPredecessor.get=function(){return predecessor};
june$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6bx$base,pa:3,d:['ceylon.time.base','june','$at','successor']};}};
june$.$prop$getSuccessor.get=function(){return successor};
return june$;
};$6bx$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','june']};};
function $init$june$base(){
if($6bx$base.$$===undefined){
m$1.initTypeProto($6bx$base,'ceylon.time.base::june',$init$Month$base());
(function(june$){
m$1.atr$(june$,'string',function(){return this.$wgb6s9$6bz_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6bx$base,pa:3,d:['ceylon.time.base','june','$at','string']};});
m$1.atr$(june$,'predecessor',function(){
var june$=this;
return may$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6bx$base,pa:3,d:['ceylon.time.base','june','$at','predecessor']};});
m$1.atr$(june$,'successor',function(){
var june$=this;
return july$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6bx$base,pa:3,d:['ceylon.time.base','june','$at','successor']};});
june$.toString=function(){return this.string.valueOf();};
})($6bx$base.$$.prototype);
}
return $6bx$base;
}
ex$.$init$june$base=$init$june$base;$init$june$base();var $6c2;
function june$base(){
if($6c2===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'june\' before it was set"),'146:0-151:0','Month.ceylon');
if($6c2===undefined){$6c2=m$1.INIT$;$6c2=$init$june$base()();$6c2.$crtmm$=june$base.$crtmm$;}
return $6c2;
}
ex$.june$base=june$base;
june$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$june$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:june')];},d:['ceylon.time.base','june']};};
$prop$getJune$base=june$base;
ex$.$prop$getJune$base=$prop$getJune$base;
function $6c3$base(){
var july$=new $6c3$base.$$;Month$base(gregorian$chronology().july,july$);
july$.$wgb6s9$6c5_="july";
july$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6c3$base,pa:3,d:['ceylon.time.base','july','$at','string']};}};
july$.$prop$getString.get=function(){return string};
july$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6c3$base,pa:3,d:['ceylon.time.base','july','$at','predecessor']};}};
july$.$prop$getPredecessor.get=function(){return predecessor};
july$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6c3$base,pa:3,d:['ceylon.time.base','july','$at','successor']};}};
july$.$prop$getSuccessor.get=function(){return successor};
return july$;
};$6c3$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','july']};};
function $init$july$base(){
if($6c3$base.$$===undefined){
m$1.initTypeProto($6c3$base,'ceylon.time.base::july',$init$Month$base());
(function(july$){
m$1.atr$(july$,'string',function(){return this.$wgb6s9$6c5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6c3$base,pa:3,d:['ceylon.time.base','july','$at','string']};});
m$1.atr$(july$,'predecessor',function(){
var july$=this;
return june$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6c3$base,pa:3,d:['ceylon.time.base','july','$at','predecessor']};});
m$1.atr$(july$,'successor',function(){
var july$=this;
return august$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6c3$base,pa:3,d:['ceylon.time.base','july','$at','successor']};});
july$.toString=function(){return this.string.valueOf();};
})($6c3$base.$$.prototype);
}
return $6c3$base;
}
ex$.$init$july$base=$init$july$base;$init$july$base();var $6c8;
function july$base(){
if($6c8===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'july\' before it was set"),'153:0-158:0','Month.ceylon');
if($6c8===undefined){$6c8=m$1.INIT$;$6c8=$init$july$base()();$6c8.$crtmm$=july$base.$crtmm$;}
return $6c8;
}
ex$.july$base=july$base;
july$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$july$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:july')];},d:['ceylon.time.base','july']};};
$prop$getJuly$base=july$base;
ex$.$prop$getJuly$base=$prop$getJuly$base;
function $6c9$base(){
var august$=new $6c9$base.$$;Month$base(gregorian$chronology().august,august$);
august$.$wgb6s9$6cb_="august";
august$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6c9$base,pa:3,d:['ceylon.time.base','august','$at','string']};}};
august$.$prop$getString.get=function(){return string};
august$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6c9$base,pa:3,d:['ceylon.time.base','august','$at','predecessor']};}};
august$.$prop$getPredecessor.get=function(){return predecessor};
august$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6c9$base,pa:3,d:['ceylon.time.base','august','$at','successor']};}};
august$.$prop$getSuccessor.get=function(){return successor};
return august$;
};$6c9$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','august']};};
function $init$august$base(){
if($6c9$base.$$===undefined){
m$1.initTypeProto($6c9$base,'ceylon.time.base::august',$init$Month$base());
(function(august$){
m$1.atr$(august$,'string',function(){return this.$wgb6s9$6cb_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6c9$base,pa:3,d:['ceylon.time.base','august','$at','string']};});
m$1.atr$(august$,'predecessor',function(){
var august$=this;
return july$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6c9$base,pa:3,d:['ceylon.time.base','august','$at','predecessor']};});
m$1.atr$(august$,'successor',function(){
var august$=this;
return september$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6c9$base,pa:3,d:['ceylon.time.base','august','$at','successor']};});
august$.toString=function(){return this.string.valueOf();};
})($6c9$base.$$.prototype);
}
return $6c9$base;
}
ex$.$init$august$base=$init$august$base;$init$august$base();var $6ce;
function august$base(){
if($6ce===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'august\' before it was set"),'160:0-165:0','Month.ceylon');
if($6ce===undefined){$6ce=m$1.INIT$;$6ce=$init$august$base()();$6ce.$crtmm$=august$base.$crtmm$;}
return $6ce;
}
ex$.august$base=august$base;
august$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$august$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:august')];},d:['ceylon.time.base','august']};};
$prop$getAugust$base=august$base;
ex$.$prop$getAugust$base=$prop$getAugust$base;
function $6cf$base(){
var september$=new $6cf$base.$$;Month$base(gregorian$chronology().september,september$);
september$.$wgb6s9$6ch_="september";
september$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6cf$base,pa:3,d:['ceylon.time.base','september','$at','string']};}};
september$.$prop$getString.get=function(){return string};
september$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6cf$base,pa:3,d:['ceylon.time.base','september','$at','predecessor']};}};
september$.$prop$getPredecessor.get=function(){return predecessor};
september$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6cf$base,pa:3,d:['ceylon.time.base','september','$at','successor']};}};
september$.$prop$getSuccessor.get=function(){return successor};
return september$;
};$6cf$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','september']};};
function $init$september$base(){
if($6cf$base.$$===undefined){
m$1.initTypeProto($6cf$base,'ceylon.time.base::september',$init$Month$base());
(function(september$){
m$1.atr$(september$,'string',function(){return this.$wgb6s9$6ch_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6cf$base,pa:3,d:['ceylon.time.base','september','$at','string']};});
m$1.atr$(september$,'predecessor',function(){
var september$=this;
return august$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6cf$base,pa:3,d:['ceylon.time.base','september','$at','predecessor']};});
m$1.atr$(september$,'successor',function(){
var september$=this;
return october$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6cf$base,pa:3,d:['ceylon.time.base','september','$at','successor']};});
september$.toString=function(){return this.string.valueOf();};
})($6cf$base.$$.prototype);
}
return $6cf$base;
}
ex$.$init$september$base=$init$september$base;$init$september$base();var $6ck;
function september$base(){
if($6ck===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'september\' before it was set"),'167:0-172:0','Month.ceylon');
if($6ck===undefined){$6ck=m$1.INIT$;$6ck=$init$september$base()();$6ck.$crtmm$=september$base.$crtmm$;}
return $6ck;
}
ex$.september$base=september$base;
september$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$september$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:september')];},d:['ceylon.time.base','september']};};
$prop$getSeptember$base=september$base;
ex$.$prop$getSeptember$base=$prop$getSeptember$base;
function $6cl$base(){
var october$=new $6cl$base.$$;Month$base(gregorian$chronology().october,october$);
october$.$wgb6s9$6cn_="october";
october$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6cl$base,pa:3,d:['ceylon.time.base','october','$at','string']};}};
october$.$prop$getString.get=function(){return string};
october$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6cl$base,pa:3,d:['ceylon.time.base','october','$at','predecessor']};}};
october$.$prop$getPredecessor.get=function(){return predecessor};
october$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6cl$base,pa:3,d:['ceylon.time.base','october','$at','successor']};}};
october$.$prop$getSuccessor.get=function(){return successor};
return october$;
};$6cl$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','october']};};
function $init$october$base(){
if($6cl$base.$$===undefined){
m$1.initTypeProto($6cl$base,'ceylon.time.base::october',$init$Month$base());
(function(october$){
m$1.atr$(october$,'string',function(){return this.$wgb6s9$6cn_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6cl$base,pa:3,d:['ceylon.time.base','october','$at','string']};});
m$1.atr$(october$,'predecessor',function(){
var october$=this;
return september$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6cl$base,pa:3,d:['ceylon.time.base','october','$at','predecessor']};});
m$1.atr$(october$,'successor',function(){
var october$=this;
return november$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6cl$base,pa:3,d:['ceylon.time.base','october','$at','successor']};});
october$.toString=function(){return this.string.valueOf();};
})($6cl$base.$$.prototype);
}
return $6cl$base;
}
ex$.$init$october$base=$init$october$base;$init$october$base();var $6cq;
function october$base(){
if($6cq===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'october\' before it was set"),'174:0-179:0','Month.ceylon');
if($6cq===undefined){$6cq=m$1.INIT$;$6cq=$init$october$base()();$6cq.$crtmm$=october$base.$crtmm$;}
return $6cq;
}
ex$.october$base=october$base;
october$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$october$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:october')];},d:['ceylon.time.base','october']};};
$prop$getOctober$base=october$base;
ex$.$prop$getOctober$base=$prop$getOctober$base;
function $6cr$base(){
var november$=new $6cr$base.$$;Month$base(gregorian$chronology().november,november$);
november$.$wgb6s9$6ct_="november";
november$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6cr$base,pa:3,d:['ceylon.time.base','november','$at','string']};}};
november$.$prop$getString.get=function(){return string};
november$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6cr$base,pa:3,d:['ceylon.time.base','november','$at','predecessor']};}};
november$.$prop$getPredecessor.get=function(){return predecessor};
november$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6cr$base,pa:3,d:['ceylon.time.base','november','$at','successor']};}};
november$.$prop$getSuccessor.get=function(){return successor};
return november$;
};$6cr$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','november']};};
function $init$november$base(){
if($6cr$base.$$===undefined){
m$1.initTypeProto($6cr$base,'ceylon.time.base::november',$init$Month$base());
(function(november$){
m$1.atr$(november$,'string',function(){return this.$wgb6s9$6ct_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6cr$base,pa:3,d:['ceylon.time.base','november','$at','string']};});
m$1.atr$(november$,'predecessor',function(){
var november$=this;
return october$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6cr$base,pa:3,d:['ceylon.time.base','november','$at','predecessor']};});
m$1.atr$(november$,'successor',function(){
var november$=this;
return december$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6cr$base,pa:3,d:['ceylon.time.base','november','$at','successor']};});
november$.toString=function(){return this.string.valueOf();};
})($6cr$base.$$.prototype);
}
return $6cr$base;
}
ex$.$init$november$base=$init$november$base;$init$november$base();var $6cw;
function november$base(){
if($6cw===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'november\' before it was set"),'181:0-186:0','Month.ceylon');
if($6cw===undefined){$6cw=m$1.INIT$;$6cw=$init$november$base()();$6cw.$crtmm$=november$base.$crtmm$;}
return $6cw;
}
ex$.november$base=november$base;
november$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$november$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:november')];},d:['ceylon.time.base','november']};};
$prop$getNovember$base=november$base;
ex$.$prop$getNovember$base=$prop$getNovember$base;
function $6cx$base(){
var december$=new $6cx$base.$$;Month$base(gregorian$chronology().december,december$);
december$.$wgb6s9$6cz_="december";
december$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6cx$base,pa:3,d:['ceylon.time.base','december','$at','string']};}};
december$.$prop$getString.get=function(){return string};
december$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6cx$base,pa:3,d:['ceylon.time.base','december','$at','predecessor']};}};
december$.$prop$getPredecessor.get=function(){return predecessor};
december$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6cx$base,pa:3,d:['ceylon.time.base','december','$at','successor']};}};
december$.$prop$getSuccessor.get=function(){return successor};
return december$;
};$6cx$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','december']};};
function $init$december$base(){
if($6cx$base.$$===undefined){
m$1.initTypeProto($6cx$base,'ceylon.time.base::december',$init$Month$base());
(function(december$){
m$1.atr$(december$,'string',function(){return this.$wgb6s9$6cz_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6cx$base,pa:3,d:['ceylon.time.base','december','$at','string']};});
m$1.atr$(december$,'predecessor',function(){
var december$=this;
return november$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6cx$base,pa:3,d:['ceylon.time.base','december','$at','predecessor']};});
m$1.atr$(december$,'successor',function(){
var december$=this;
return january$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6cx$base,pa:3,d:['ceylon.time.base','december','$at','successor']};});
december$.toString=function(){return this.string.valueOf();};
})($6cx$base.$$.prototype);
}
return $6cx$base;
}
ex$.$init$december$base=$init$december$base;$init$december$base();var $6d2;
function december$base(){
if($6d2===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'december\' before it was set"),'188:0-193:0','Month.ceylon');
if($6d2===undefined){$6d2=m$1.INIT$;$6d2=$init$december$base()();$6d2.$crtmm$=december$base.$crtmm$;}
return $6d2;
}
ex$.december$base=december$base;
december$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$december$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:december')];},d:['ceylon.time.base','december']};};
$prop$getDecember$base=december$base;
ex$.$prop$getDecember$base=$prop$getDecember$base;
function MonthBehavior$base($$targs$$,monthBehavior$){
m$1.set_type_args(monthBehavior$,$$targs$$,MonthBehavior$base);
}
MonthBehavior$base.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$MonthBehavior:{sts:[{t:ReadableMonth$base}]}},pa:1,an:function(){return[m$1.doc("Common behavior for month types.")];},d:['ceylon.time.base','MonthBehavior']};};
ex$.MonthBehavior$base=MonthBehavior$base;
function $init$MonthBehavior$base(){
if(MonthBehavior$base.$$===undefined){
m$1.initTypeProtoI(MonthBehavior$base,'ceylon.time.base::MonthBehavior');
(function(monthBehavior$){
monthBehavior$.withMonth={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$MonthBehavior',ps:[{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:MonthBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:MonthBehavior:$m:withMonth')];},d:['ceylon.time.base','MonthBehavior','$m','withMonth']};}};monthBehavior$.plusMonths={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$MonthBehavior',ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:MonthBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:MonthBehavior:$m:plusMonths')];},d:['ceylon.time.base','MonthBehavior','$m','plusMonths']};}};monthBehavior$.minusMonths={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$MonthBehavior',ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:MonthBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:MonthBehavior:$m:minusMonths')];},d:['ceylon.time.base','MonthBehavior','$m','minusMonths']};}};monthBehavior$.toString=function(){return this.string.valueOf();};
})(MonthBehavior$base.$$.prototype);
}
return MonthBehavior$base;
}
ex$.$init$MonthBehavior$base=$init$MonthBehavior$base;$init$MonthBehavior$base();
function PeriodBehavior$base($$targs$$,periodBehavior$){
m$1.set_type_args(periodBehavior$,$$targs$$,PeriodBehavior$base);
ReadablePeriod$base(periodBehavior$);
}
PeriodBehavior$base.$crtmm$=function(){return{mod:$CCMM$,tp:{Self$PeriodBehavior:{sts:[{t:PeriodBehavior$base,a:{Self$PeriodBehavior:'Self$PeriodBehavior'}},{t:ReadablePeriod$base}]}},sts:[{t:ReadablePeriod$base}],of:['Self$PeriodBehavior'],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior')];},d:['ceylon.time.base','PeriodBehavior']};};
ex$.PeriodBehavior$base=PeriodBehavior$base;
function $init$PeriodBehavior$base(){
if(PeriodBehavior$base.$$===undefined){
m$1.initTypeProtoI(PeriodBehavior$base,'ceylon.time.base::PeriodBehavior',$init$ReadablePeriod$base());
(function(periodBehavior$){
periodBehavior$.withYears={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:withYears')];},d:['ceylon.time.base','PeriodBehavior','$m','withYears']};}};periodBehavior$.withMonths={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'month',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:withMonths')];},d:['ceylon.time.base','PeriodBehavior','$m','withMonths']};}};periodBehavior$.withDays={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'daysOfMonth',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:withDays')];},d:['ceylon.time.base','PeriodBehavior','$m','withDays']};}};periodBehavior$.plusYears={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:plusYears')];},d:['ceylon.time.base','PeriodBehavior','$m','plusYears']};}};periodBehavior$.plusMonths={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:plusMonths')];},d:['ceylon.time.base','PeriodBehavior','$m','plusMonths']};}};periodBehavior$.plusDays={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:plusDays')];},d:['ceylon.time.base','PeriodBehavior','$m','plusDays']};}};periodBehavior$.minusYears={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:minusYears')];},d:['ceylon.time.base','PeriodBehavior','$m','minusYears']};}};periodBehavior$.minusMonths={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:minusMonths')];},d:['ceylon.time.base','PeriodBehavior','$m','minusMonths']};}};periodBehavior$.minusDays={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:minusDays')];},d:['ceylon.time.base','PeriodBehavior','$m','minusDays']};}};periodBehavior$.withHours={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:withHours')];},d:['ceylon.time.base','PeriodBehavior','$m','withHours']};}};periodBehavior$.withMinutes={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:withMinutes')];},d:['ceylon.time.base','PeriodBehavior','$m','withMinutes']};}};periodBehavior$.withSeconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:withSeconds')];},d:['ceylon.time.base','PeriodBehavior','$m','withSeconds']};}};periodBehavior$.withMilliseconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:withMilliseconds')];},d:['ceylon.time.base','PeriodBehavior','$m','withMilliseconds']};}};periodBehavior$.plusHours={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:plusHours')];},d:['ceylon.time.base','PeriodBehavior','$m','plusHours']};}};periodBehavior$.plusMinutes={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:plusMinutes')];},d:['ceylon.time.base','PeriodBehavior','$m','plusMinutes']};}};periodBehavior$.plusSeconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:plusSeconds')];},d:['ceylon.time.base','PeriodBehavior','$m','plusSeconds']};}};periodBehavior$.plusMilliseconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:plusMilliseconds')];},d:['ceylon.time.base','PeriodBehavior','$m','plusMilliseconds']};}};periodBehavior$.minusHours={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:minusHours')];},d:['ceylon.time.base','PeriodBehavior','$m','minusHours']};}};periodBehavior$.minusMinutes={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:minusMinutes')];},d:['ceylon.time.base','PeriodBehavior','$m','minusMinutes']};}};periodBehavior$.minusSeconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:minusSeconds')];},d:['ceylon.time.base','PeriodBehavior','$m','minusSeconds']};}};periodBehavior$.minusMilliseconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:minusMilliseconds')];},d:['ceylon.time.base','PeriodBehavior','$m','minusMilliseconds']};}};periodBehavior$.normalized={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:PeriodBehavior$base,a:{Self$PeriodBehavior:'Self$PeriodBehavior'}},ps:[],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:normalized')];},d:['ceylon.time.base','PeriodBehavior','$m','normalized']};}};periodBehavior$.toString=function(){return this.string.valueOf();};
})(PeriodBehavior$base.$$.prototype);
}
return PeriodBehavior$base;
}
ex$.$init$PeriodBehavior$base=$init$PeriodBehavior$base;$init$PeriodBehavior$base();
function Range$base($$targs$$,range$){
m$1.set_type_args(range$,$$targs$$,Range$base);
m$1.Iterable({Absent$Iterable:{t:m$1.Null},Element$Iterable:$$targs$$.Element$Range/*ORALE!Element inv pero Element var*/},range$);
}
Range$base.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$Range:{sts:[{t:m$1.Enumerable,a:{Other$Enumerable:'Element$Range'}}]},StepBy$Range:{}},sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$Range'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range')];},d:['ceylon.time.base','Range']};};
ex$.Range$base=Range$base;
function $init$Range$base(){
if(Range$base.$$===undefined){
m$1.initTypeProtoI(Range$base,'ceylon.time.base::Range',m$1.Iterable);
(function(range$){
range$.$prop$getFrom={$crtmm$:function(){return{mod:$CCMM$,$t:'Element$Range',$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$at:from')];},d:['ceylon.time.base','Range','$at','from']};}};
range$.$prop$getTo={$crtmm$:function(){return{mod:$CCMM$,$t:'Element$Range',$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$at:to')];},d:['ceylon.time.base','Range','$at','to']};}};
range$.$prop$getStep={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$at:step')];},d:['ceylon.time.base','Range','$at','step']};}};
range$.$prop$getDuration={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Duration},$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$at:duration')];},d:['ceylon.time.base','Range','$at','duration']};}};
range$.$prop$getPeriod={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$at:period')];},d:['ceylon.time.base','Range','$at','period']};}};
range$.overlap={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:Range$base,a:{StepBy$Range:'StepBy$Range',Element$Range:'Element$Range'}},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{StepBy$Range:'StepBy$Range',Element$Range:'Element$Range'}}}],$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$m:overlap')];},d:['ceylon.time.base','Range','$m','overlap']};}};range$.gap={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:Range$base,a:{StepBy$Range:'StepBy$Range',Element$Range:'Element$Range'}},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{StepBy$Range:'StepBy$Range',Element$Range:'Element$Range'}}}],$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$m:gap')];},d:['ceylon.time.base','Range','$m','gap']};}};range$.equals=function($6d3){
var range$=this;
var $6d4;
if(m$1.is$(($6d4=$6d3),{t:Range$base,a:{StepBy$Range:range$.$$targs$$.StepBy$Range,Element$Range:range$.$$targs$$.Element$Range}})){
return (m$1.$eq$(range$.from,$6d4.from)&&m$1.$eq$(range$.to,$6d4.to));
}
function $6d5(){return $6d3;}
return false;
};range$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Range$base,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$m:equals')];},d:['ceylon.time.base','Range','$m','equals']};};
m$1.atr$(range$,'hash',function(){
var range$=this;
var $6d6=(31);
var $6d7=(1);
$6d7=(($6d6*$6d7)+range$.from.hash);
$6d7=(($6d6*$6d7)+range$.to.hash);
return $6d7;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Range$base,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$at:hash')];},d:['ceylon.time.base','Range','$at','hash']};});range$.stepBy={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Range$base,a:{StepBy$Range:'StepBy$Range',Element$Range:'Element$Range'}},ps:[{nm:'step',mt:'prm',$t:'StepBy$Range'}],$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$m:stepBy')];},d:['ceylon.time.base','Range','$m','stepBy']};}};m$1.atr$(range$,'string',function(){
var range$=this;
return range$.from.string+"/"+(range$.to.string);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Range$base,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$at:string')];},d:['ceylon.time.base','Range','$at','string']};});
range$.toString=function(){return this.string.valueOf();};
})(Range$base.$$.prototype);
}
return Range$base;
}
ex$.$init$Range$base=$init$Range$base;$init$Range$base();
function ReadableDate$base(readableDate$){
ReadableYear$base(readableDate$);
ReadableMonth$base(readableDate$);
}
ReadableDate$base.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableYear$base},{t:ReadableMonth$base}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableDate'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),$_Date),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),Time),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),DateTime),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.timezone'),ZoneDateTime$timezone)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.time.base','ReadableDate']};};
ex$.ReadableDate$base=ReadableDate$base;
function $init$ReadableDate$base(){
if(ReadableDate$base.$$===undefined){
m$1.initTypeProtoI(ReadableDate$base,'ceylon.time.base::ReadableDate',$init$ReadableYear$base(),$init$ReadableMonth$base());
(function(readableDate$){
readableDate$.$prop$getDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDate$base,pa:5,an:function(){return[m$1.doc("Day of month value of the date.")];},d:['ceylon.time.base','ReadableDate','$at','day']};}};
readableDate$.$prop$getDayOfWeek={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:ReadableDate$base,pa:5,an:function(){return[m$1.doc("Day of the week.")];},d:['ceylon.time.base','ReadableDate','$at','dayOfWeek']};}};
readableDate$.$prop$getWeekOfYear={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDate$base,pa:5,an:function(){return[m$1.doc("Number of the week of the date.")];},d:['ceylon.time.base','ReadableDate','$at','weekOfYear']};}};
readableDate$.$prop$getDayOfYear={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDate$base,pa:5,an:function(){return[m$1.doc("Number of the day in year.")];},d:['ceylon.time.base','ReadableDate','$at','dayOfYear']};}};
readableDate$.$prop$getDayOfEra={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDate$base,pa:5,an:function(){return[m$1.doc("Number of calendar days since ERA.")];},d:['ceylon.time.base','ReadableDate','$at','dayOfEra']};}};
readableDate$.toString=function(){return this.string.valueOf();};
})(ReadableDate$base.$$.prototype);
}
return ReadableDate$base;
}
ex$.$init$ReadableDate$base=$init$ReadableDate$base;$init$ReadableDate$base();
function ReadableDateTime$base(readableDateTime$){
ReadableDate$base(readableDateTime$);
ReadableTime$base(readableDateTime$);
}
ReadableDateTime$base.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableDate$base},{t:ReadableTime$base}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableDateTime')];},d:['ceylon.time.base','ReadableDateTime']};};
ex$.ReadableDateTime$base=ReadableDateTime$base;
function $init$ReadableDateTime$base(){
if(ReadableDateTime$base.$$===undefined){
m$1.initTypeProtoI(ReadableDateTime$base,'ceylon.time.base::ReadableDateTime',$init$ReadableDate$base(),$init$ReadableTime$base());
(function(readableDateTime$){
readableDateTime$.toString=function(){return this.string.valueOf();};
})(ReadableDateTime$base.$$.prototype);
}
return ReadableDateTime$base;
}
ex$.$init$ReadableDateTime$base=$init$ReadableDateTime$base;$init$ReadableDateTime$base();
function ReadableDuration$base(readableDuration$){
}
ReadableDuration$base.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableDuration'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.time'),Duration)],{t:m$1.ClassWithInitializerDeclaration$meta$declaration}))];},d:['ceylon.time.base','ReadableDuration']};};
ex$.ReadableDuration$base=ReadableDuration$base;
function $init$ReadableDuration$base(){
if(ReadableDuration$base.$$===undefined){
m$1.initTypeProtoI(ReadableDuration$base,'ceylon.time.base::ReadableDuration');
(function(readableDuration$){
readableDuration$.$prop$getMilliseconds={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDuration$base,pa:5,an:function(){return[m$1.doc("Number of milliseconds.")];},d:['ceylon.time.base','ReadableDuration','$at','milliseconds']};}};
readableDuration$.toString=function(){return this.string.valueOf();};
})(ReadableDuration$base.$$.prototype);
}
return ReadableDuration$base;
}
ex$.$init$ReadableDuration$base=$init$ReadableDuration$base;$init$ReadableDuration$base();
function ReadableInstant$base(readableInstant$){
}
ReadableInstant$base.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableInstant'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.time'),Instant)],{t:m$1.ClassWithInitializerDeclaration$meta$declaration}))];},d:['ceylon.time.base','ReadableInstant']};};
ex$.ReadableInstant$base=ReadableInstant$base;
function $init$ReadableInstant$base(){
if(ReadableInstant$base.$$===undefined){
m$1.initTypeProtoI(ReadableInstant$base,'ceylon.time.base::ReadableInstant');
(function(readableInstant$){
readableInstant$.$prop$getMillisecondsOfEpoch={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableInstant$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableInstant:$at:millisecondsOfEpoch')];},d:['ceylon.time.base','ReadableInstant','$at','millisecondsOfEpoch']};}};
readableInstant$.toString=function(){return this.string.valueOf();};
})(ReadableInstant$base.$$.prototype);
}
return ReadableInstant$base;
}
ex$.$init$ReadableInstant$base=$init$ReadableInstant$base;$init$ReadableInstant$base();
function ReadableMonth$base(readableMonth$){
}
ReadableMonth$base.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableMonth'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),$_Date),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),DateTime),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.timezone'),ZoneDateTime$timezone)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.time.base','ReadableMonth']};};
ex$.ReadableMonth$base=ReadableMonth$base;
function $init$ReadableMonth$base(){
if(ReadableMonth$base.$$===undefined){
m$1.initTypeProtoI(ReadableMonth$base,'ceylon.time.base::ReadableMonth');
(function(readableMonth$){
readableMonth$.$prop$getMonth={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:ReadableMonth$base,pa:5,an:function(){return[m$1.doc("Month of the year value of the date.")];},d:['ceylon.time.base','ReadableMonth','$at','month']};}};
readableMonth$.toString=function(){return this.string.valueOf();};
})(ReadableMonth$base.$$.prototype);
}
return ReadableMonth$base;
}
ex$.$init$ReadableMonth$base=$init$ReadableMonth$base;$init$ReadableMonth$base();
function ReadablePeriod$base(readablePeriod$){
ReadableDatePeriod$base(readablePeriod$);
ReadableTimePeriod$base(readablePeriod$);
}
ReadablePeriod$base.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableDatePeriod$base},{t:ReadableTimePeriod$base}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadablePeriod')];},d:['ceylon.time.base','ReadablePeriod']};};
ex$.ReadablePeriod$base=ReadablePeriod$base;
function $init$ReadablePeriod$base(){
if(ReadablePeriod$base.$$===undefined){
m$1.initTypeProtoI(ReadablePeriod$base,'ceylon.time.base::ReadablePeriod',$init$ReadableDatePeriod$base(),$init$ReadableTimePeriod$base());
(function(readablePeriod$){
readablePeriod$.$prop$getDateOnly={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ReadableDatePeriod$base},$cont:ReadablePeriod$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadablePeriod:$at:dateOnly')];},d:['ceylon.time.base','ReadablePeriod','$at','dateOnly']};}};
readablePeriod$.$prop$getTimeOnly={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ReadableTimePeriod$base},$cont:ReadablePeriod$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadablePeriod:$at:timeOnly')];},d:['ceylon.time.base','ReadablePeriod','$at','timeOnly']};}};
readablePeriod$.toString=function(){return this.string.valueOf();};
})(ReadablePeriod$base.$$.prototype);
}
return ReadablePeriod$base;
}
ex$.$init$ReadablePeriod$base=$init$ReadablePeriod$base;$init$ReadablePeriod$base();
function ReadableDatePeriod$base(readableDatePeriod$){
}
ReadableDatePeriod$base.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableDatePeriod')];},d:['ceylon.time.base','ReadableDatePeriod']};};
ex$.ReadableDatePeriod$base=ReadableDatePeriod$base;
function $init$ReadableDatePeriod$base(){
if(ReadableDatePeriod$base.$$===undefined){
m$1.initTypeProtoI(ReadableDatePeriod$base,'ceylon.time.base::ReadableDatePeriod');
(function(readableDatePeriod$){
readableDatePeriod$.$prop$getYears={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDatePeriod$base,pa:5,an:function(){return[m$1.doc("The number of years.")];},d:['ceylon.time.base','ReadableDatePeriod','$at','years']};}};
readableDatePeriod$.$prop$getMonths={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDatePeriod$base,pa:5,an:function(){return[m$1.doc("The number of months.")];},d:['ceylon.time.base','ReadableDatePeriod','$at','months']};}};
readableDatePeriod$.$prop$getDays={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDatePeriod$base,pa:5,an:function(){return[m$1.doc("The number of days.")];},d:['ceylon.time.base','ReadableDatePeriod','$at','days']};}};
readableDatePeriod$.toString=function(){return this.string.valueOf();};
})(ReadableDatePeriod$base.$$.prototype);
}
return ReadableDatePeriod$base;
}
ex$.$init$ReadableDatePeriod$base=$init$ReadableDatePeriod$base;$init$ReadableDatePeriod$base();
function ReadableTimePeriod$base(readableTimePeriod$){
}
ReadableTimePeriod$base.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableTimePeriod')];},d:['ceylon.time.base','ReadableTimePeriod']};};
ex$.ReadableTimePeriod$base=ReadableTimePeriod$base;
function $init$ReadableTimePeriod$base(){
if(ReadableTimePeriod$base.$$===undefined){
m$1.initTypeProtoI(ReadableTimePeriod$base,'ceylon.time.base::ReadableTimePeriod');
(function(readableTimePeriod$){
readableTimePeriod$.$prop$getHours={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTimePeriod$base,pa:5,an:function(){return[m$1.doc("The number of hours")];},d:['ceylon.time.base','ReadableTimePeriod','$at','hours']};}};
readableTimePeriod$.$prop$getMinutes={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTimePeriod$base,pa:5,an:function(){return[m$1.doc("The number of minutes")];},d:['ceylon.time.base','ReadableTimePeriod','$at','minutes']};}};
readableTimePeriod$.$prop$getSeconds={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTimePeriod$base,pa:5,an:function(){return[m$1.doc("The number of seconds")];},d:['ceylon.time.base','ReadableTimePeriod','$at','seconds']};}};
readableTimePeriod$.$prop$getMilliseconds={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTimePeriod$base,pa:5,an:function(){return[m$1.doc("The number of milliseconds")];},d:['ceylon.time.base','ReadableTimePeriod','$at','milliseconds']};}};
readableTimePeriod$.toString=function(){return this.string.valueOf();};
})(ReadableTimePeriod$base.$$.prototype);
}
return ReadableTimePeriod$base;
}
ex$.$init$ReadableTimePeriod$base=$init$ReadableTimePeriod$base;$init$ReadableTimePeriod$base();
function ReadableTime$base(readableTime$){
}
ReadableTime$base.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableTime'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),Time),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),DateTime),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.timezone'),ZoneDateTime$timezone)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.time.base','ReadableTime']};};
ex$.ReadableTime$base=ReadableTime$base;
function $init$ReadableTime$base(){
if(ReadableTime$base.$$===undefined){
m$1.initTypeProtoI(ReadableTime$base,'ceylon.time.base::ReadableTime');
(function(readableTime$){
readableTime$.$prop$getHours={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTime$base,pa:5,an:function(){return[m$1.doc("Hour of day.")];},d:['ceylon.time.base','ReadableTime','$at','hours']};}};
readableTime$.$prop$getMinutes={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTime$base,pa:5,an:function(){return[m$1.doc("Number of minutes since last full hour.")];},d:['ceylon.time.base','ReadableTime','$at','minutes']};}};
readableTime$.$prop$getSeconds={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTime$base,pa:5,an:function(){return[m$1.doc("Number of seconds since last minute.")];},d:['ceylon.time.base','ReadableTime','$at','seconds']};}};
readableTime$.$prop$getMilliseconds={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTime$base,pa:5,an:function(){return[m$1.doc("Number of milliseconds since last second.")];},d:['ceylon.time.base','ReadableTime','$at','milliseconds']};}};
readableTime$.$prop$getMinutesOfDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTime$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableTime:$at:minutesOfDay')];},d:['ceylon.time.base','ReadableTime','$at','minutesOfDay']};}};
readableTime$.$prop$getSecondsOfDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTime$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableTime:$at:secondsOfDay')];},d:['ceylon.time.base','ReadableTime','$at','secondsOfDay']};}};
readableTime$.$prop$getMillisecondsOfDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTime$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableTime:$at:millisecondsOfDay')];},d:['ceylon.time.base','ReadableTime','$at','millisecondsOfDay']};}};
readableTime$.toString=function(){return this.string.valueOf();};
})(ReadableTime$base.$$.prototype);
}
return ReadableTime$base;
}
ex$.$init$ReadableTime$base=$init$ReadableTime$base;$init$ReadableTime$base();
function ReadableYear$base(readableYear$){
}
ReadableYear$base.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableYear'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),$_Date),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),DateTime),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.timezone'),ZoneDateTime$timezone)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.time.base','ReadableYear']};};
ex$.ReadableYear$base=ReadableYear$base;
function $init$ReadableYear$base(){
if(ReadableYear$base.$$===undefined){
m$1.initTypeProtoI(ReadableYear$base,'ceylon.time.base::ReadableYear');
(function(readableYear$){
readableYear$.$prop$getYear={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableYear$base,pa:5,an:function(){return[m$1.doc("The year of the date.")];},d:['ceylon.time.base','ReadableYear','$at','year']};}};
readableYear$.$prop$getLeapYear={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:ReadableYear$base,pa:5,an:function(){return[m$1.doc("True if the year of the date is a leap year.")];},d:['ceylon.time.base','ReadableYear','$at','leapYear']};}};
readableYear$.toString=function(){return this.string.valueOf();};
})(ReadableYear$base.$$.prototype);
}
return ReadableYear$base;
}
ex$.$init$ReadableYear$base=$init$ReadableYear$base;$init$ReadableYear$base();
function TimeBehavior$base($$targs$$,timeBehavior$){
m$1.set_type_args(timeBehavior$,$$targs$$,TimeBehavior$base);
}
TimeBehavior$base.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$TimeBehavior:{sts:[{t:ReadableTime$base}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior')];},d:['ceylon.time.base','TimeBehavior']};};
ex$.TimeBehavior$base=TimeBehavior$base;
function $init$TimeBehavior$base(){
if(TimeBehavior$base.$$===undefined){
m$1.initTypeProtoI(TimeBehavior$base,'ceylon.time.base::TimeBehavior');
(function(timeBehavior$){
timeBehavior$.withHours={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:withHours')];},d:['ceylon.time.base','TimeBehavior','$m','withHours']};}};timeBehavior$.withMinutes={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:withMinutes')];},d:['ceylon.time.base','TimeBehavior','$m','withMinutes']};}};timeBehavior$.withSeconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:withSeconds')];},d:['ceylon.time.base','TimeBehavior','$m','withSeconds']};}};timeBehavior$.withMilliseconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:withMilliseconds')];},d:['ceylon.time.base','TimeBehavior','$m','withMilliseconds']};}};timeBehavior$.plusHours={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:plusHours')];},d:['ceylon.time.base','TimeBehavior','$m','plusHours']};}};timeBehavior$.plusMinutes={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:plusMinutes')];},d:['ceylon.time.base','TimeBehavior','$m','plusMinutes']};}};timeBehavior$.plusSeconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:plusSeconds')];},d:['ceylon.time.base','TimeBehavior','$m','plusSeconds']};}};timeBehavior$.plusMilliseconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:plusMilliseconds')];},d:['ceylon.time.base','TimeBehavior','$m','plusMilliseconds']};}};timeBehavior$.minusHours={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:minusHours')];},d:['ceylon.time.base','TimeBehavior','$m','minusHours']};}};timeBehavior$.minusMinutes={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:minusMinutes')];},d:['ceylon.time.base','TimeBehavior','$m','minusMinutes']};}};timeBehavior$.minusSeconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:minusSeconds')];},d:['ceylon.time.base','TimeBehavior','$m','minusSeconds']};}};timeBehavior$.minusMilliseconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:minusMilliseconds')];},d:['ceylon.time.base','TimeBehavior','$m','minusMilliseconds']};}};timeBehavior$.toString=function(){return this.string.valueOf();};
})(TimeBehavior$base.$$.prototype);
}
return TimeBehavior$base;
}
ex$.$init$TimeBehavior$base=$init$TimeBehavior$base;$init$TimeBehavior$base();
function YearBehavior$base($$targs$$,yearBehavior$){
m$1.set_type_args(yearBehavior$,$$targs$$,YearBehavior$base);
}
YearBehavior$base.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$YearBehavior:{sts:[{t:ReadableYear$base}]}},pa:1,an:function(){return[m$1.doc("Common behavior for year types.")];},d:['ceylon.time.base','YearBehavior']};};
ex$.YearBehavior$base=YearBehavior$base;
function $init$YearBehavior$base(){
if(YearBehavior$base.$$===undefined){
m$1.initTypeProtoI(YearBehavior$base,'ceylon.time.base::YearBehavior');
(function(yearBehavior$){
yearBehavior$.withYear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$YearBehavior',ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:YearBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:YearBehavior:$m:withYear')];},d:['ceylon.time.base','YearBehavior','$m','withYear']};}};yearBehavior$.plusYears={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$YearBehavior',ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:YearBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:YearBehavior:$m:plusYears')];},d:['ceylon.time.base','YearBehavior','$m','plusYears']};}};yearBehavior$.minusYears={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$YearBehavior',ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:YearBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:YearBehavior:$m:minusYears')];},d:['ceylon.time.base','YearBehavior','$m','minusYears']};}};yearBehavior$.toString=function(){return this.string.valueOf();};
})(YearBehavior$base.$$.prototype);
}
return YearBehavior$base;
}
ex$.$init$YearBehavior$base=$init$YearBehavior$base;$init$YearBehavior$base();
function UnitOfDate$base(unitOfDate$){
}
UnitOfDate$base.$crtmm$=function(){return{mod:$CCMM$,of:[{t:UnitOfYear$base},{t:UnitOfMonth$base},{t:UnitOfDay$base}],pa:1,an:function(){return[m$1.doc("Represents units of Date")];},d:['ceylon.time.base','UnitOfDate']};};
ex$.UnitOfDate$base=UnitOfDate$base;
function $init$UnitOfDate$base(){
if(UnitOfDate$base.$$===undefined){
m$1.initTypeProtoI(UnitOfDate$base,'ceylon.time.base::UnitOfDate');
(function(unitOfDate$){
unitOfDate$.toString=function(){return this.string.valueOf();};
})(UnitOfDate$base.$$.prototype);
}
return UnitOfDate$base;
}
ex$.$init$UnitOfDate$base=$init$UnitOfDate$base;$init$UnitOfDate$base();
function UnitOfYear$base(unitOfYear$){
$init$UnitOfYear$base();
if(unitOfYear$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.base::UnitOfYear"),'?','?')
UnitOfDate$base(unitOfYear$);
return unitOfYear$;
}
UnitOfYear$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:UnitOfDate$base}],of:[$prop$getYears$base],pa:257,d:['ceylon.time.base','UnitOfYear']};};
ex$.UnitOfYear$base=UnitOfYear$base;
function $init$UnitOfYear$base(){
if(UnitOfYear$base.$$===undefined){
m$1.initTypeProto(UnitOfYear$base,'ceylon.time.base::UnitOfYear',m$1.Basic,$init$UnitOfDate$base());
(function(unitOfYear$){
unitOfYear$.toString=function(){return this.string.valueOf();};
})(UnitOfYear$base.$$.prototype);
}
return UnitOfYear$base;
}
ex$.$init$UnitOfYear$base=$init$UnitOfYear$base;$init$UnitOfYear$base();
function UnitOfMonth$base(unitOfMonth$){
$init$UnitOfMonth$base();
if(unitOfMonth$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.base::UnitOfMonth"),'?','?')
UnitOfDate$base(unitOfMonth$);
return unitOfMonth$;
}
UnitOfMonth$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:UnitOfDate$base}],of:[$prop$getMonths$base],pa:257,d:['ceylon.time.base','UnitOfMonth']};};
ex$.UnitOfMonth$base=UnitOfMonth$base;
function $init$UnitOfMonth$base(){
if(UnitOfMonth$base.$$===undefined){
m$1.initTypeProto(UnitOfMonth$base,'ceylon.time.base::UnitOfMonth',m$1.Basic,$init$UnitOfDate$base());
(function(unitOfMonth$){
unitOfMonth$.toString=function(){return this.string.valueOf();};
})(UnitOfMonth$base.$$.prototype);
}
return UnitOfMonth$base;
}
ex$.$init$UnitOfMonth$base=$init$UnitOfMonth$base;$init$UnitOfMonth$base();
function UnitOfDay$base(unitOfDay$){
$init$UnitOfDay$base();
if(unitOfDay$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.base::UnitOfDay"),'?','?')
UnitOfDate$base(unitOfDay$);
return unitOfDay$;
}
UnitOfDay$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:UnitOfDate$base}],of:[$prop$getDays$base],pa:257,d:['ceylon.time.base','UnitOfDay']};};
ex$.UnitOfDay$base=UnitOfDay$base;
function $init$UnitOfDay$base(){
if(UnitOfDay$base.$$===undefined){
m$1.initTypeProto(UnitOfDay$base,'ceylon.time.base::UnitOfDay',m$1.Basic,$init$UnitOfDate$base());
(function(unitOfDay$){
unitOfDay$.toString=function(){return this.string.valueOf();};
})(UnitOfDay$base.$$.prototype);
}
return UnitOfDay$base;
}
ex$.$init$UnitOfDay$base=$init$UnitOfDay$base;$init$UnitOfDay$base();
function UnitOfTime$base(unitOfTime$){
}
UnitOfTime$base.$crtmm$=function(){return{mod:$CCMM$,of:[{t:UnitOfHour$base},{t:UnitOfMinute$base},{t:UnitOfSecond$base},{t:UnitOfMillisecond$base}],pa:1,an:function(){return[m$1.doc("Represents units of Time")];},d:['ceylon.time.base','UnitOfTime']};};
ex$.UnitOfTime$base=UnitOfTime$base;
function $init$UnitOfTime$base(){
if(UnitOfTime$base.$$===undefined){
m$1.initTypeProtoI(UnitOfTime$base,'ceylon.time.base::UnitOfTime');
(function(unitOfTime$){
unitOfTime$.toString=function(){return this.string.valueOf();};
})(UnitOfTime$base.$$.prototype);
}
return UnitOfTime$base;
}
ex$.$init$UnitOfTime$base=$init$UnitOfTime$base;$init$UnitOfTime$base();
function UnitOfHour$base(unitOfHour$){
$init$UnitOfHour$base();
if(unitOfHour$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.base::UnitOfHour"),'?','?')
UnitOfTime$base(unitOfHour$);
return unitOfHour$;
}
UnitOfHour$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:UnitOfTime$base}],of:[$prop$getHours$base],pa:257,d:['ceylon.time.base','UnitOfHour']};};
ex$.UnitOfHour$base=UnitOfHour$base;
function $init$UnitOfHour$base(){
if(UnitOfHour$base.$$===undefined){
m$1.initTypeProto(UnitOfHour$base,'ceylon.time.base::UnitOfHour',m$1.Basic,$init$UnitOfTime$base());
(function(unitOfHour$){
unitOfHour$.toString=function(){return this.string.valueOf();};
})(UnitOfHour$base.$$.prototype);
}
return UnitOfHour$base;
}
ex$.$init$UnitOfHour$base=$init$UnitOfHour$base;$init$UnitOfHour$base();
function UnitOfMinute$base(unitOfMinute$){
$init$UnitOfMinute$base();
if(unitOfMinute$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.base::UnitOfMinute"),'?','?')
UnitOfTime$base(unitOfMinute$);
return unitOfMinute$;
}
UnitOfMinute$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:UnitOfTime$base}],of:[$prop$getMinutes$base],pa:257,d:['ceylon.time.base','UnitOfMinute']};};
ex$.UnitOfMinute$base=UnitOfMinute$base;
function $init$UnitOfMinute$base(){
if(UnitOfMinute$base.$$===undefined){
m$1.initTypeProto(UnitOfMinute$base,'ceylon.time.base::UnitOfMinute',m$1.Basic,$init$UnitOfTime$base());
(function(unitOfMinute$){
unitOfMinute$.toString=function(){return this.string.valueOf();};
})(UnitOfMinute$base.$$.prototype);
}
return UnitOfMinute$base;
}
ex$.$init$UnitOfMinute$base=$init$UnitOfMinute$base;$init$UnitOfMinute$base();
function UnitOfSecond$base(unitOfSecond$){
$init$UnitOfSecond$base();
if(unitOfSecond$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.base::UnitOfSecond"),'?','?')
UnitOfTime$base(unitOfSecond$);
return unitOfSecond$;
}
UnitOfSecond$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:UnitOfTime$base}],of:[$prop$getSeconds$base],pa:257,d:['ceylon.time.base','UnitOfSecond']};};
ex$.UnitOfSecond$base=UnitOfSecond$base;
function $init$UnitOfSecond$base(){
if(UnitOfSecond$base.$$===undefined){
m$1.initTypeProto(UnitOfSecond$base,'ceylon.time.base::UnitOfSecond',m$1.Basic,$init$UnitOfTime$base());
(function(unitOfSecond$){
unitOfSecond$.toString=function(){return this.string.valueOf();};
})(UnitOfSecond$base.$$.prototype);
}
return UnitOfSecond$base;
}
ex$.$init$UnitOfSecond$base=$init$UnitOfSecond$base;$init$UnitOfSecond$base();
function UnitOfMillisecond$base(unitOfMillisecond$){
$init$UnitOfMillisecond$base();
if(unitOfMillisecond$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.base::UnitOfMillisecond"),'?','?')
UnitOfTime$base(unitOfMillisecond$);
return unitOfMillisecond$;
}
UnitOfMillisecond$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:UnitOfTime$base}],of:[$prop$getMilliseconds$base],pa:257,d:['ceylon.time.base','UnitOfMillisecond']};};
ex$.UnitOfMillisecond$base=UnitOfMillisecond$base;
function $init$UnitOfMillisecond$base(){
if(UnitOfMillisecond$base.$$===undefined){
m$1.initTypeProto(UnitOfMillisecond$base,'ceylon.time.base::UnitOfMillisecond',m$1.Basic,$init$UnitOfTime$base());
(function(unitOfMillisecond$){
unitOfMillisecond$.toString=function(){return this.string.valueOf();};
})(UnitOfMillisecond$base.$$.prototype);
}
return UnitOfMillisecond$base;
}
ex$.$init$UnitOfMillisecond$base=$init$UnitOfMillisecond$base;$init$UnitOfMillisecond$base();
function $6d9$base(){
var years$=new $6d9$base.$$;UnitOfYear$base(years$);
years$.$wgb6s9$6db_=(-283456);
years$.$prop$getMinimum={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6d9$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:years:$at:minimum')];},d:['ceylon.time.base','years','$at','minimum']};}};
years$.$prop$getMinimum.get=function(){return minimum};
years$.$wgb6s9$6dc_=(287396);
years$.$prop$getMaximum={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6d9$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:years:$at:maximum')];},d:['ceylon.time.base','years','$at','maximum']};}};
years$.$prop$getMaximum.get=function(){return maximum};
return years$;
};$6d9$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:UnitOfYear$base},d:['ceylon.time.base','years']};};
function $init$years$base(){
if($6d9$base.$$===undefined){
m$1.initTypeProto($6d9$base,'ceylon.time.base::years',$init$UnitOfYear$base());
(function(years$){
m$1.atr$(years$,'minimum',function(){return this.$wgb6s9$6db_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6d9$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:years:$at:minimum')];},d:['ceylon.time.base','years','$at','minimum']};});
m$1.atr$(years$,'maximum',function(){return this.$wgb6s9$6dc_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6d9$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:years:$at:maximum')];},d:['ceylon.time.base','years','$at','maximum']};});
years$.toString=function(){return this.string.valueOf();};
})($6d9$base.$$.prototype);
}
return $6d9$base;
}
ex$.$init$years$base=$init$years$base;$init$years$base();var $6dd;
function years$base(){
if($6dd===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'years\' before it was set"),'16:0-26:0','constants.ceylon');
if($6dd===undefined){$6dd=m$1.INIT$;$6dd=$init$years$base()();$6dd.$crtmm$=years$base.$crtmm$;}
return $6dd;
}
ex$.years$base=years$base;
years$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$years$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:years')];},d:['ceylon.time.base','years']};};
$prop$getYears$base=years$base;
ex$.$prop$getYears$base=$prop$getYears$base;
function $6de$base(){
var months$=new $6de$base.$$;UnitOfMonth$base(months$);
months$.$wgb6s9$6dg_=m$1.$init$AppliedClass$jsint()(Month$base,{Type$Class:{t:Month$base},Arguments$Class:m$1.mtt$([{t:m$1.Integer}])}).caseValues;
months$.$prop$getAll={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:Month$base}}},$cont:$6de$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:months:$at:all')];},d:['ceylon.time.base','months','$at','all']};}};
months$.$prop$getAll.get=function(){return all};
months$.$wgb6s9$6dh_=(12);
months$.$prop$getPerYear={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6de$base,pa:1,an:function(){return[m$1.doc("Number of months per year.")];},d:['ceylon.time.base','months','$at','perYear']};}};
months$.$prop$getPerYear.get=function(){return perYear};
return months$;
};$6de$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:UnitOfMonth$base},d:['ceylon.time.base','months']};};
function $init$months$base(){
if($6de$base.$$===undefined){
m$1.initTypeProto($6de$base,'ceylon.time.base::months',$init$UnitOfMonth$base());
(function(months$){
m$1.atr$(months$,'all',function(){return this.$wgb6s9$6dg_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:Month$base}}},$cont:$6de$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:months:$at:all')];},d:['ceylon.time.base','months','$at','all']};});
m$1.atr$(months$,'perYear',function(){return this.$wgb6s9$6dh_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6de$base,pa:1,an:function(){return[m$1.doc("Number of months per year.")];},d:['ceylon.time.base','months','$at','perYear']};});
months$.$_valueOf=function($6di){var months$=this;
return months$.all.$_get(($6di-(1)));
};
months$.$_valueOf.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Month$base}]},ps:[{nm:'number',mt:'prm',$t:{t:m$1.Integer}}],$cont:$6de$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:months:$m:valueOf')];},d:['ceylon.time.base','months','$m','valueOf']};};
months$.toString=function(){return this.string.valueOf();};
})($6de$base.$$.prototype);
}
return $6de$base;
}
ex$.$init$months$base=$init$months$base;$init$months$base();var $6dj;
function months$base(){
if($6dj===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'months\' before it was set"),'28:0-39:0','constants.ceylon');
if($6dj===undefined){$6dj=m$1.INIT$;$6dj=$init$months$base()();$6dj.$crtmm$=months$base.$crtmm$;}
return $6dj;
}
ex$.months$base=months$base;
months$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$months$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:months')];},d:['ceylon.time.base','months']};};
$prop$getMonths$base=months$base;
ex$.$prop$getMonths$base=$prop$getMonths$base;
function $6dk$base(){
var days$=new $6dk$base.$$;UnitOfDay$base(days$);
days$.$prop$getPerYear={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6dk$base,pa:1,an:function(){return[m$1.doc("Number of days per normal year.")];},d:['ceylon.time.base','days','$at','perYear']};}};
days$.$prop$getPerYear.get=function(){return perYear};
days$.$prop$getPerLeapYear={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6dk$base,pa:1,an:function(){return[m$1.doc("Number of days per leap year.")];},d:['ceylon.time.base','days','$at','perLeapYear']};}};
days$.$prop$getPerLeapYear.get=function(){return perLeapYear};
days$.$wgb6s9$6dm_=m$1.tpl$([sunday$base(),monday$base(),tuesday$base(),wednesday$base(),thursday$base(),friday$base(),saturday$base()]);
days$.$prop$getOfWeek={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:DayOfWeek$base}}},$cont:$6dk$base,pa:1,d:['ceylon.time.base','days','$at','ofWeek']};}};
days$.$prop$getOfWeek.get=function(){return ofWeek};
days$.$wgb6s9$6dn_=days$.ofWeek.size;
days$.$prop$getPerWeek={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6dk$base,pa:1,an:function(){return[m$1.doc("Number of days per week (7).")];},d:['ceylon.time.base','days','$at','perWeek']};}};
days$.$prop$getPerWeek.get=function(){return perWeek};
days$.$wgb6s9$6do_=(146097);
days$.$prop$getPerCycle={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6dk$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:days:$at:perCycle')];},d:['ceylon.time.base','days','$at','perCycle']};}};
days$.$prop$getPerCycle.get=function(){return perCycle};
days$.$prop$getPerFourCenturies={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6dk$base,pa:1,an:function(){return[m$1.doc("The number of days in a 400 year cycle.")];},d:['ceylon.time.base','days','$at','perFourCenturies']};}};
days$.$prop$getPerFourCenturies.get=function(){return perFourCenturies};
days$.$wgb6s9$6dp_=(1461);
days$.$prop$getInFourYears={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6dk$base,pa:1,an:function(){return[m$1.doc("Number of days in four years.")];},d:['ceylon.time.base','days','$at','inFourYears']};}};
days$.$prop$getInFourYears.get=function(){return inFourYears};
days$.$wgb6s9$6dq_=(36524);
days$.$prop$getPerCentury={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6dk$base,pa:1,an:function(){return[m$1.doc("Number of of per century (100 years).")];},d:['ceylon.time.base','days','$at','perCentury']};}};
days$.$prop$getPerCentury.get=function(){return perCentury};
return days$;
};$6dk$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:UnitOfDay$base},d:['ceylon.time.base','days']};};
function $init$days$base(){
if($6dk$base.$$===undefined){
m$1.initTypeProto($6dk$base,'ceylon.time.base::days',$init$UnitOfDay$base());
(function(days$){
m$1.atr$(days$,'perYear',function(){
return 365
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6dk$base,pa:1,an:function(){return[m$1.doc("Number of days per normal year.")];},d:['ceylon.time.base','days','$at','perYear']};});
m$1.atr$(days$,'perLeapYear',function(){
return 366
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6dk$base,pa:1,an:function(){return[m$1.doc("Number of days per leap year.")];},d:['ceylon.time.base','days','$at','perLeapYear']};});
days$.perMonth$defs$leapYear=function($6dr,$6ds){return false;};
days$.perMonth=function($6dr,$6ds){var days$=this;
if($6ds===undefined){$6ds=false;}
return $6dr.numberOfDays($6ds);
};
days$.perMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'month',mt:'prm',$t:{t:Month$base}},{nm:'leapYear',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:$6dk$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:days:$m:perMonth')];},d:['ceylon.time.base','days','$m','perMonth']};};
days$.toMonth$defs$leapYear=function($6dt,$6du){return false;};
days$.toMonth=function($6dt,$6du){var days$=this;
if($6du===undefined){$6du=false;}
return ($6dt.firstDayOfYear($6du)-(1));
};
days$.toMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'month',mt:'prm',$t:{t:Month$base}},{nm:'leapYear',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:$6dk$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:days:$m:toMonth')];},d:['ceylon.time.base','days','$m','toMonth']};};
m$1.atr$(days$,'ofWeek',function(){return this.$wgb6s9$6dm_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:DayOfWeek$base}}},$cont:$6dk$base,pa:1,d:['ceylon.time.base','days','$at','ofWeek']};});
m$1.atr$(days$,'perWeek',function(){return this.$wgb6s9$6dn_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6dk$base,pa:1,an:function(){return[m$1.doc("Number of days per week (7).")];},d:['ceylon.time.base','days','$at','perWeek']};});
m$1.atr$(days$,'perCycle',function(){return this.$wgb6s9$6do_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6dk$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:days:$at:perCycle')];},d:['ceylon.time.base','days','$at','perCycle']};});
m$1.atr$(days$,'perFourCenturies',function(){
var days$=this;
return days$.perCycle;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6dk$base,pa:1,an:function(){return[m$1.doc("The number of days in a 400 year cycle.")];},d:['ceylon.time.base','days','$at','perFourCenturies']};});
m$1.atr$(days$,'inFourYears',function(){return this.$wgb6s9$6dp_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6dk$base,pa:1,an:function(){return[m$1.doc("Number of days in four years.")];},d:['ceylon.time.base','days','$at','inFourYears']};});
m$1.atr$(days$,'perCentury',function(){return this.$wgb6s9$6dq_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6dk$base,pa:1,an:function(){return[m$1.doc("Number of of per century (100 years).")];},d:['ceylon.time.base','days','$at','perCentury']};});
days$.fromMilliseconds$defs$millisecondsIn=function($6dv){return 0;};
days$.fromMilliseconds=function($6dv){var days$=this;
if($6dv===undefined){$6dv=(0);}
return floorDiv$internal$math($6dv,milliseconds$base().perDay);
};
days$.fromMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'millisecondsIn',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:$6dk$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:days:$m:fromMilliseconds')];},d:['ceylon.time.base','days','$m','fromMilliseconds']};};
days$.toString=function(){return this.string.valueOf();};
})($6dk$base.$$.prototype);
}
return $6dk$base;
}
ex$.$init$days$base=$init$days$base;$init$days$base();var $6dw;
function days$base(){
if($6dw===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'days\' before it was set"),'41:0-76:0','constants.ceylon');
if($6dw===undefined){$6dw=m$1.INIT$;$6dw=$init$days$base()();$6dw.$crtmm$=days$base.$crtmm$;}
return $6dw;
}
ex$.days$base=days$base;
days$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$days$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:days')];},d:['ceylon.time.base','days']};};
$prop$getDays$base=days$base;
ex$.$prop$getDays$base=$prop$getDays$base;
function $6dx$base(){
var hours$=new $6dx$base.$$;UnitOfHour$base(hours$);
hours$.$wgb6s9$6dz_=(24);
hours$.$prop$getPerDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6dx$base,pa:1,an:function(){return[m$1.doc("Number of hours per day.")];},d:['ceylon.time.base','hours','$at','perDay']};}};
hours$.$prop$getPerDay.get=function(){return perDay};
return hours$;
};$6dx$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:UnitOfHour$base},d:['ceylon.time.base','hours']};};
function $init$hours$base(){
if($6dx$base.$$===undefined){
m$1.initTypeProto($6dx$base,'ceylon.time.base::hours',$init$UnitOfHour$base());
(function(hours$){
m$1.atr$(hours$,'perDay',function(){return this.$wgb6s9$6dz_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6dx$base,pa:1,an:function(){return[m$1.doc("Number of hours per day.")];},d:['ceylon.time.base','hours','$at','perDay']};});
hours$.toString=function(){return this.string.valueOf();};
})($6dx$base.$$.prototype);
}
return $6dx$base;
}
ex$.$init$hours$base=$init$hours$base;$init$hours$base();var $6e0;
function hours$base(){
if($6e0===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'hours\' before it was set"),'78:0-84:0','constants.ceylon');
if($6e0===undefined){$6e0=m$1.INIT$;$6e0=$init$hours$base()();$6e0.$crtmm$=hours$base.$crtmm$;}
return $6e0;
}
ex$.hours$base=hours$base;
hours$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$hours$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:hours')];},d:['ceylon.time.base','hours']};};
$prop$getHours$base=hours$base;
ex$.$prop$getHours$base=$prop$getHours$base;
function $6e1$base(){
var minutes$=new $6e1$base.$$;UnitOfMinute$base(minutes$);
minutes$.$wgb6s9$6e3_=(60);
minutes$.$prop$getPerHour={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6e1$base,pa:1,an:function(){return[m$1.doc("Number of minutes per hour.")];},d:['ceylon.time.base','minutes','$at','perHour']};}};
minutes$.$prop$getPerHour.get=function(){return perHour};
minutes$.$prop$getPerDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6e1$base,pa:1,an:function(){return[m$1.doc("Number of minutes per day.")];},d:['ceylon.time.base','minutes','$at','perDay']};}};
minutes$.$prop$getPerDay.get=function(){return perDay};
return minutes$;
};$6e1$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:UnitOfMinute$base},d:['ceylon.time.base','minutes']};};
function $init$minutes$base(){
if($6e1$base.$$===undefined){
m$1.initTypeProto($6e1$base,'ceylon.time.base::minutes',$init$UnitOfMinute$base());
(function(minutes$){
m$1.atr$(minutes$,'perHour',function(){return this.$wgb6s9$6e3_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6e1$base,pa:1,an:function(){return[m$1.doc("Number of minutes per hour.")];},d:['ceylon.time.base','minutes','$at','perHour']};});
m$1.atr$(minutes$,'perDay',function(){
var minutes$=this;
return (hours$base().perDay*minutes$base().perHour);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6e1$base,pa:1,an:function(){return[m$1.doc("Number of minutes per day.")];},d:['ceylon.time.base','minutes','$at','perDay']};});
minutes$.toString=function(){return this.string.valueOf();};
})($6e1$base.$$.prototype);
}
return $6e1$base;
}
ex$.$init$minutes$base=$init$minutes$base;$init$minutes$base();var $6e4;
function minutes$base(){
if($6e4===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'minutes\' before it was set"),'86:0-94:0','constants.ceylon');
if($6e4===undefined){$6e4=m$1.INIT$;$6e4=$init$minutes$base()();$6e4.$crtmm$=minutes$base.$crtmm$;}
return $6e4;
}
ex$.minutes$base=minutes$base;
minutes$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$minutes$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:minutes')];},d:['ceylon.time.base','minutes']};};
$prop$getMinutes$base=minutes$base;
ex$.$prop$getMinutes$base=$prop$getMinutes$base;
function $6e5$base(){
var seconds$=new $6e5$base.$$;UnitOfSecond$base(seconds$);
seconds$.$wgb6s9$6e7_=(60);
seconds$.$prop$getPerMinute={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6e5$base,pa:1,an:function(){return[m$1.doc("Number of seconds per minute.")];},d:['ceylon.time.base','seconds','$at','perMinute']};}};
seconds$.$prop$getPerMinute.get=function(){return perMinute};
seconds$.$prop$getPerHour={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6e5$base,pa:1,an:function(){return[m$1.doc("Number of seconds per hour.")];},d:['ceylon.time.base','seconds','$at','perHour']};}};
seconds$.$prop$getPerHour.get=function(){return perHour};
seconds$.$prop$getPerDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6e5$base,pa:1,an:function(){return[m$1.doc("Number of seconds per day.")];},d:['ceylon.time.base','seconds','$at','perDay']};}};
seconds$.$prop$getPerDay.get=function(){return perDay};
return seconds$;
};$6e5$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:UnitOfSecond$base},d:['ceylon.time.base','seconds']};};
function $init$seconds$base(){
if($6e5$base.$$===undefined){
m$1.initTypeProto($6e5$base,'ceylon.time.base::seconds',$init$UnitOfSecond$base());
(function(seconds$){
m$1.atr$(seconds$,'perMinute',function(){return this.$wgb6s9$6e7_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6e5$base,pa:1,an:function(){return[m$1.doc("Number of seconds per minute.")];},d:['ceylon.time.base','seconds','$at','perMinute']};});
m$1.atr$(seconds$,'perHour',function(){
var seconds$=this;
return (minutes$base().perHour*seconds$base().perMinute);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6e5$base,pa:1,an:function(){return[m$1.doc("Number of seconds per hour.")];},d:['ceylon.time.base','seconds','$at','perHour']};});
m$1.atr$(seconds$,'perDay',function(){
var seconds$=this;
return (hours$base().perDay*seconds$base().perHour);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6e5$base,pa:1,an:function(){return[m$1.doc("Number of seconds per day.")];},d:['ceylon.time.base','seconds','$at','perDay']};});
seconds$.toString=function(){return this.string.valueOf();};
})($6e5$base.$$.prototype);
}
return $6e5$base;
}
ex$.$init$seconds$base=$init$seconds$base;$init$seconds$base();var $6e8;
function seconds$base(){
if($6e8===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'seconds\' before it was set"),'96:0-107:0','constants.ceylon');
if($6e8===undefined){$6e8=m$1.INIT$;$6e8=$init$seconds$base()();$6e8.$crtmm$=seconds$base.$crtmm$;}
return $6e8;
}
ex$.seconds$base=seconds$base;
seconds$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$seconds$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:seconds')];},d:['ceylon.time.base','seconds']};};
$prop$getSeconds$base=seconds$base;
ex$.$prop$getSeconds$base=$prop$getSeconds$base;
function $6e9$base(){
var milliseconds$=new $6e9$base.$$;UnitOfMillisecond$base(milliseconds$);
milliseconds$.$wgb6s9$6eb_=(1000);
milliseconds$.$prop$getPerSecond={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6e9$base,pa:1,an:function(){return[m$1.doc("Number of milliseconds per second.")];},d:['ceylon.time.base','milliseconds','$at','perSecond']};}};
milliseconds$.$prop$getPerSecond.get=function(){return perSecond};
milliseconds$.$prop$getPerMinute={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6e9$base,pa:1,an:function(){return[m$1.doc("Milliseconds per minute.")];},d:['ceylon.time.base','milliseconds','$at','perMinute']};}};
milliseconds$.$prop$getPerMinute.get=function(){return perMinute};
milliseconds$.$prop$getPerHour={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6e9$base,pa:1,an:function(){return[m$1.doc("Number of milliseconds per hour.")];},d:['ceylon.time.base','milliseconds','$at','perHour']};}};
milliseconds$.$prop$getPerHour.get=function(){return perHour};
milliseconds$.$prop$getPerDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6e9$base,pa:1,an:function(){return[m$1.doc("Number of milliseconds per day.")];},d:['ceylon.time.base','milliseconds','$at','perDay']};}};
milliseconds$.$prop$getPerDay.get=function(){return perDay};
return milliseconds$;
};$6e9$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:UnitOfMillisecond$base},d:['ceylon.time.base','milliseconds']};};
function $init$milliseconds$base(){
if($6e9$base.$$===undefined){
m$1.initTypeProto($6e9$base,'ceylon.time.base::milliseconds',$init$UnitOfMillisecond$base());
(function(milliseconds$){
m$1.atr$(milliseconds$,'perSecond',function(){return this.$wgb6s9$6eb_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6e9$base,pa:1,an:function(){return[m$1.doc("Number of milliseconds per second.")];},d:['ceylon.time.base','milliseconds','$at','perSecond']};});
m$1.atr$(milliseconds$,'perMinute',function(){
var milliseconds$=this;
return (seconds$base().perMinute*milliseconds$base().perSecond);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6e9$base,pa:1,an:function(){return[m$1.doc("Milliseconds per minute.")];},d:['ceylon.time.base','milliseconds','$at','perMinute']};});
m$1.atr$(milliseconds$,'perHour',function(){
var milliseconds$=this;
return (minutes$base().perHour*milliseconds$base().perMinute);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6e9$base,pa:1,an:function(){return[m$1.doc("Number of milliseconds per hour.")];},d:['ceylon.time.base','milliseconds','$at','perHour']};});
m$1.atr$(milliseconds$,'perDay',function(){
var milliseconds$=this;
return (hours$base().perDay*milliseconds$base().perHour);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6e9$base,pa:1,an:function(){return[m$1.doc("Number of milliseconds per day.")];},d:['ceylon.time.base','milliseconds','$at','perDay']};});
milliseconds$.toString=function(){return this.string.valueOf();};
})($6e9$base.$$.prototype);
}
return $6e9$base;
}
ex$.$init$milliseconds$base=$init$milliseconds$base;$init$milliseconds$base();var $6ec;
function milliseconds$base(){
if($6ec===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'milliseconds\' before it was set"),'109:0-124:0','constants.ceylon');
if($6ec===undefined){$6ec=m$1.INIT$;$6ec=$init$milliseconds$base()();$6ec.$crtmm$=milliseconds$base.$crtmm$;}
return $6ec;
}
ex$.milliseconds$base=milliseconds$base;
milliseconds$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$milliseconds$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:milliseconds')];},d:['ceylon.time.base','milliseconds']};};
$prop$getMilliseconds$base=milliseconds$base;
ex$.$prop$getMilliseconds$base=$prop$getMilliseconds$base;
function rd$chronology($6ed){
var $6ee=(0);
return ($6ed-$6ee);
}
ex$.rd$chronology=rd$chronology;
rd$chronology.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'t',mt:'prm',$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:rd')];},d:['ceylon.time.chronology','rd']};};
function $6ef$chronology(){
var unixTime$=new $6ef$chronology.$$;unixTime$.$prop$getEpoch={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6ef$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:unixTime:$at:epoch')];},d:['ceylon.time.chronology','unixTime','$at','epoch']};}};
unixTime$.$prop$getEpoch.get=function(){return epoch};
return unixTime$;
};$6ef$chronology.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},d:['ceylon.time.chronology','unixTime']};};
function $init$unixTime$chronology(){
if($6ef$chronology.$$===undefined){
m$1.initTypeProto($6ef$chronology,'ceylon.time.chronology::unixTime',m$1.Basic);
(function(unixTime$){
m$1.atr$(unixTime$,'epoch',function(){
var unixTime$=this;
return gregorian$chronology().fixedFrom(m$1.tpl$([1970,1,1]));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6ef$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:unixTime:$at:epoch')];},d:['ceylon.time.chronology','unixTime','$at','epoch']};});
unixTime$.fixedFromTime=function($6eh){
var unixTime$=this;
return (floorDiv$internal$math($6eh,milliseconds$base().perDay)+unixTime$.epoch);
};unixTime$.fixedFromTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'time',mt:'prm',$t:{t:m$1.Integer}}],$cont:$6ef$chronology,pa:1,an:function(){return[m$1.doc("Returns a _fixed date_ from the _unix time_ value.")];},d:['ceylon.time.chronology','unixTime','$m','fixedFromTime']};};
unixTime$.timeFromFixed=function($6ei){
var unixTime$=this;
return (($6ei-unixTime$.epoch)*milliseconds$base().perDay);
};unixTime$.timeFromFixed.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'date',mt:'prm',$t:{t:m$1.Integer}}],$cont:$6ef$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:unixTime:$m:timeFromFixed')];},d:['ceylon.time.chronology','unixTime','$m','timeFromFixed']};};
unixTime$.timeOfDay=function($6ej){
var unixTime$=this;
return floorMod$internal$math($6ej,milliseconds$base().perDay);
};unixTime$.timeOfDay.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'time',mt:'prm',$t:{t:m$1.Integer}}],$cont:$6ef$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:unixTime:$m:timeOfDay')];},d:['ceylon.time.chronology','unixTime','$m','timeOfDay']};};
unixTime$.toString=function(){return this.string.valueOf();};
})($6ef$chronology.$$.prototype);
}
return $6ef$chronology;
}
ex$.$init$unixTime$chronology=$init$unixTime$chronology;$init$unixTime$chronology();var $6ek;
function unixTime$chronology(){
if($6ek===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'unixTime\' before it was set"),'12:0-32:0','Chronology.ceylon');
if($6ek===undefined){$6ek=m$1.INIT$;$6ek=$init$unixTime$chronology()();$6ek.$crtmm$=unixTime$chronology.$crtmm$;}
return $6ek;
}
ex$.unixTime$chronology=unixTime$chronology;
unixTime$chronology.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$unixTime$chronology()},pa:1,an:function(){return[m$1.doc("Common properties of _Unix time_.")];},d:['ceylon.time.chronology','unixTime']};};
$prop$getUnixTime$chronology=unixTime$chronology;
ex$.$prop$getUnixTime$chronology=$prop$getUnixTime$chronology;
function Chronology$chronology($$targs$$,chronology$){
m$1.set_type_args(chronology$,$$targs$$,Chronology$chronology);
}
Chronology$chronology.$crtmm$=function(){return{mod:$CCMM$,tp:{Fields$Chronology:{sts:[{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Anything}}}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:Chronology')];},d:['ceylon.time.chronology','Chronology']};};
ex$.Chronology$chronology=Chronology$chronology;
function $init$Chronology$chronology(){
if(Chronology$chronology.$$===undefined){
m$1.initTypeProtoI(Chronology$chronology,'ceylon.time.chronology::Chronology');
(function(chronology$){
chronology$.$prop$getEpoch={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Chronology$chronology,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:Chronology:$at:epoch')];},d:['ceylon.time.chronology','Chronology','$at','epoch']};}};
chronology$.fixedFrom={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'date',mt:'prm',$t:'Fields$Chronology'}],$cont:Chronology$chronology,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:Chronology:$m:fixedFrom')];},d:['ceylon.time.chronology','Chronology','$m','fixedFrom']};}};chronology$.dateFrom={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Fields$Chronology',ps:[{nm:'fixed',mt:'prm',$t:{t:m$1.Integer}}],$cont:Chronology$chronology,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:Chronology:$m:dateFrom')];},d:['ceylon.time.chronology','Chronology','$m','dateFrom']};}};chronology$.checkDate={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'date',mt:'prm',$t:'Fields$Chronology'}],$cont:Chronology$chronology,pa:5,an:function(){return[m$1.doc("Validate the given date.")];},d:['ceylon.time.chronology','Chronology','$m','checkDate']};}};chronology$.toString=function(){return this.string.valueOf();};
})(Chronology$chronology.$$.prototype);
}
return Chronology$chronology;
}
ex$.$init$Chronology$chronology=$init$Chronology$chronology;$init$Chronology$chronology();
function LeapYear$chronology($$targs$$,leapYear$){
m$1.set_type_args(leapYear$,$$targs$$,LeapYear$chronology);
Chronology$chronology({Fields$Chronology:$$targs$$.Fields$LeapYear},leapYear$);
}
LeapYear$chronology.$crtmm$=function(){return{mod:$CCMM$,tp:{Self$LeapYear:{sts:[{t:Chronology$chronology,a:{Fields$Chronology:'Fields$LeapYear'}}]},Fields$LeapYear:{sts:[{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Anything}}}]}},sts:[{t:Chronology$chronology,a:{Fields$Chronology:'Fields$LeapYear'}}],of:['Self$LeapYear'],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:LeapYear')];},d:['ceylon.time.chronology','LeapYear']};};
ex$.LeapYear$chronology=LeapYear$chronology;
function $init$LeapYear$chronology(){
if(LeapYear$chronology.$$===undefined){
m$1.initTypeProtoI(LeapYear$chronology,'ceylon.time.chronology::LeapYear',$init$Chronology$chronology());
(function(leapYear$){
leapYear$.leapYear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'leapYear',mt:'prm',$t:{t:m$1.Integer}}],$cont:LeapYear$chronology,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:LeapYear:$m:leapYear')];},d:['ceylon.time.chronology','LeapYear','$m','leapYear']};}};leapYear$.toString=function(){return this.string.valueOf();};
})(LeapYear$chronology.$$.prototype);
}
return LeapYear$chronology;
}
ex$.$init$LeapYear$chronology=$init$LeapYear$chronology;$init$LeapYear$chronology();
function GregorianCalendar$chronology(gregorianCalendar$){
$init$GregorianCalendar$chronology();
if(gregorianCalendar$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.chronology::GregorianCalendar"),'?','?')
Chronology$chronology({Fields$Chronology:m$1.mtt$([{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}])},gregorianCalendar$);
LeapYear$chronology({Fields$LeapYear:m$1.mtt$([{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]),Self$LeapYear:{t:GregorianCalendar$chronology}},gregorianCalendar$);
return gregorianCalendar$;
}
GregorianCalendar$chronology.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:Chronology$chronology,a:{Fields$Chronology:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]}}},{t:LeapYear$chronology,a:{Fields$LeapYear:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]},Self$LeapYear:{t:GregorianCalendar$chronology}}}],of:[$prop$getGregorian$chronology],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:GregorianCalendar')];},d:['ceylon.time.chronology','GregorianCalendar']};};
ex$.GregorianCalendar$chronology=GregorianCalendar$chronology;
function $init$GregorianCalendar$chronology(){
if(GregorianCalendar$chronology.$$===undefined){
m$1.initTypeProto(GregorianCalendar$chronology,'ceylon.time.chronology::GregorianCalendar',m$1.Basic,$init$Chronology$chronology(),$init$LeapYear$chronology());
(function(gregorianCalendar$){
gregorianCalendar$.toString=function(){return this.string.valueOf();};
})(GregorianCalendar$chronology.$$.prototype);
}
return GregorianCalendar$chronology;
}
ex$.$init$GregorianCalendar$chronology=$init$GregorianCalendar$chronology;$init$GregorianCalendar$chronology();
function $6el$chronology(){
var gregorian$=new $6el$chronology.$$;GregorianCalendar$chronology(gregorian$);
gregorian$.$wgb6s9$6en_=rd$chronology(1);
gregorian$.$prop$getEpoch={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:3,an:function(){return[m$1.doc("Epoch of the gregorian calendar.")];},d:['ceylon.time.chronology','gregorian','$at','epoch']};}};
gregorian$.$prop$getEpoch.get=function(){return epoch};
gregorian$.$wgb6s9$6eo_=(1);
gregorian$.$prop$getJanuary={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','january']};}};
gregorian$.$prop$getJanuary.get=function(){return january};
gregorian$.$wgb6s9$6ep_=(2);
gregorian$.$prop$getFebruary={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','february']};}};
gregorian$.$prop$getFebruary.get=function(){return february};
gregorian$.$wgb6s9$6eq_=(3);
gregorian$.$prop$getMarch={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','march']};}};
gregorian$.$prop$getMarch.get=function(){return march};
gregorian$.$wgb6s9$6er_=(4);
gregorian$.$prop$getApril={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','april']};}};
gregorian$.$prop$getApril.get=function(){return april};
gregorian$.$wgb6s9$6es_=(5);
gregorian$.$prop$getMay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','may']};}};
gregorian$.$prop$getMay.get=function(){return may};
gregorian$.$wgb6s9$6et_=(6);
gregorian$.$prop$getJune={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','june']};}};
gregorian$.$prop$getJune.get=function(){return june};
gregorian$.$wgb6s9$6eu_=(7);
gregorian$.$prop$getJuly={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','july']};}};
gregorian$.$prop$getJuly.get=function(){return july};
gregorian$.$wgb6s9$6ev_=(8);
gregorian$.$prop$getAugust={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','august']};}};
gregorian$.$prop$getAugust.get=function(){return august};
gregorian$.$wgb6s9$6ew_=(9);
gregorian$.$prop$getSeptember={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','september']};}};
gregorian$.$prop$getSeptember.get=function(){return september};
gregorian$.$wgb6s9$6ex_=(10);
gregorian$.$prop$getOctober={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','october']};}};
gregorian$.$prop$getOctober.get=function(){return october};
gregorian$.$wgb6s9$6ey_=(11);
gregorian$.$prop$getNovember={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','november']};}};
gregorian$.$prop$getNovember.get=function(){return november};
gregorian$.$wgb6s9$6ez_=(12);
gregorian$.$prop$getDecember={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','december']};}};
gregorian$.$prop$getDecember.get=function(){return december};
return gregorian$;
};$6el$chronology.$crtmm$=function(){return{mod:$CCMM$,'super':{t:GregorianCalendar$chronology},d:['ceylon.time.chronology','gregorian']};};
function $init$gregorian$chronology(){
if($6el$chronology.$$===undefined){
m$1.initTypeProto($6el$chronology,'ceylon.time.chronology::gregorian',$init$GregorianCalendar$chronology());
(function(gregorian$){
m$1.atr$(gregorian$,'epoch',function(){return this.$wgb6s9$6en_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:3,an:function(){return[m$1.doc("Epoch of the gregorian calendar.")];},d:['ceylon.time.chronology','gregorian','$at','epoch']};});
m$1.atr$(gregorian$,'january',function(){return this.$wgb6s9$6eo_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','january']};});
m$1.atr$(gregorian$,'february',function(){return this.$wgb6s9$6ep_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','february']};});
m$1.atr$(gregorian$,'march',function(){return this.$wgb6s9$6eq_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','march']};});
m$1.atr$(gregorian$,'april',function(){return this.$wgb6s9$6er_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','april']};});
m$1.atr$(gregorian$,'may',function(){return this.$wgb6s9$6es_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','may']};});
m$1.atr$(gregorian$,'june',function(){return this.$wgb6s9$6et_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','june']};});
m$1.atr$(gregorian$,'july',function(){return this.$wgb6s9$6eu_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','july']};});
m$1.atr$(gregorian$,'august',function(){return this.$wgb6s9$6ev_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','august']};});
m$1.atr$(gregorian$,'september',function(){return this.$wgb6s9$6ew_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','september']};});
m$1.atr$(gregorian$,'october',function(){return this.$wgb6s9$6ex_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','october']};});
m$1.atr$(gregorian$,'november',function(){return this.$wgb6s9$6ey_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','november']};});
m$1.atr$(gregorian$,'december',function(){return this.$wgb6s9$6ez_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6el$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','december']};});
gregorian$.leapYear=function($6f0){
var gregorian$=this;
return ($6f1=(($6f0.remainder((100))==(0))?($6f0.remainder((400))==(0)):null),m$1.nn$($6f1)?$6f1:($6f0.remainder((4))==(0)));
var $6f1;
};gregorian$.leapYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:$6el$chronology,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:leapYear')];},d:['ceylon.time.chronology','gregorian','$m','leapYear']};};
gregorian$.$wgb6s9$6f2=function($6f3,$6f4,$6f5){
var gregorian$=this;
return ((((((((gregorian$.epoch-(1))+((365)*($6f3-(1))))+floor$internal$math(($6f3-(1)).divided(m$1.Float(4.0))))-floor$internal$math(($6f3-(1)).divided(m$1.Float(100.0))))+floor$internal$math(($6f3-(1)).divided(m$1.Float(400.0))))+floor$internal$math((((367)*$6f4)-(362)).divided(m$1.Float(12.0))))+($6f6=(($6f4>(2))?($6f7=(gregorian$.leapYear($6f3)?(-1):null),m$1.nn$($6f7)?$6f7:(-2)):null),m$1.nn$($6f6)?$6f6:(0)))+$6f5);
var $6f6,$6f7;
};gregorian$.$wgb6s9$6f2.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}},{nm:'month',mt:'prm',$t:{t:m$1.Integer}},{nm:'day',mt:'prm',$t:{t:m$1.Integer}}],$cont:$6el$chronology,an:function(){return[m$1.doc("Return the _day of era_ from a given date.")];},d:['ceylon.time.chronology','gregorian','$m','fixed$jr0536']};};
gregorian$.fixedFrom=function($6f8){
var gregorian$=this;
return gregorian$.$wgb6s9$6f2($6f8.$_get(0),$6f8.$_get(1),$6f8.$_get(2));
};gregorian$.fixedFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'date',mt:'prm',$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]}}],$cont:$6el$chronology,pa:3,an:function(){return[m$1.doc("Return the _day of era_ from a given date.")];},d:['ceylon.time.chronology','gregorian','$m','fixedFrom']};};
gregorian$.checkDate=function($6f9){
var gregorian$=this;
m$1.asrt$((((years$base().minimum<=$6f9.$_get(0))&&($6f9.$_get(0)<=years$base().maximum))),"Assertion failed: "+"Invalid year value\n\tviolated years.minimum <= date[0] && date[0] <= years.maximum\n\tat Chronology.ceylon (117:14-117:67)",'116:8-117:68','Chronology.ceylon');
m$1.asrt$((m$1.$eq$($6f9,gregorian$.dateFrom(gregorian$.fixedFrom($6f9)))),"Assertion failed: "+"Invalid date value\n\tviolated  date == dateFrom( fixedFrom(date) ) \n\tat Chronology.ceylon (120:14-120:52)",'119:8-120:53','Chronology.ceylon');
};gregorian$.checkDate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'date',mt:'prm',$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]}}],$cont:$6el$chronology,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:checkDate')];},d:['ceylon.time.chronology','gregorian','$m','checkDate']};};
gregorian$.newYear=function($6fa){
var gregorian$=this;
return gregorian$.$wgb6s9$6f2($6fa,gregorian$.january,1);
};gregorian$.newYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:$6el$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:newYear')];},d:['ceylon.time.chronology','gregorian','$m','newYear']};};
gregorian$.yearEnd=function($6fb){
var gregorian$=this;
return gregorian$.$wgb6s9$6f2($6fb,gregorian$.december,31);
};gregorian$.yearEnd.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:$6el$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:yearEnd')];},d:['ceylon.time.chronology','gregorian','$m','yearEnd']};};
gregorian$.yearFrom=function($6fc){
var gregorian$=this;
var $6fd=($6fc-gregorian$.epoch);
var $6fe=floorDiv$internal$math($6fd,days$base().perFourCenturies);
var $6ff=floorMod$internal$math($6fd,days$base().perFourCenturies);
var $6fg=floorDiv$internal$math($6ff,days$base().perCentury);
var $6fh=floorMod$internal$math($6ff,days$base().perCentury);
var $6fi=floorDiv$internal$math($6fh,days$base().inFourYears);
var $6fj=floorMod$internal$math($6fh,days$base().inFourYears);
var $6fk=floorDiv$internal$math($6fj,days$base().perYear);
var $6fl=(((((400)*$6fe)+((100)*$6fg))+((4)*$6fi))+$6fk);
return ($6fm=((($6fg==(4))||($6fk==(4)))?$6fl:null),m$1.nn$($6fm)?$6fm:($6fl+(1)));
var $6fm;
};gregorian$.yearFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'fixed',mt:'prm',$t:{t:m$1.Integer}}],$cont:$6el$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:yearFrom')];},d:['ceylon.time.chronology','gregorian','$m','yearFrom']};};
gregorian$.dateFrom=function($6fn){
var gregorian$=this;
var $6fo=gregorian$.yearFrom($6fn);
var $6fp=($6fn-gregorian$.newYear($6fo));
var $6fq=($6fr=(($6fn<gregorian$.$wgb6s9$6f2($6fo,gregorian$.march,1))?(0):null),m$1.nn$($6fr)?$6fr:($6fs=(gregorian$.leapYear($6fo)?(1):null),m$1.nn$($6fs)?$6fs:(2)));
var $6fr,$6fs;
var $6ft=floorDiv$internal$math((((12)*($6fp+$6fq))+(373)),367);
var $6fu=(((1)+$6fn)-gregorian$.$wgb6s9$6f2($6fo,$6ft,1));
return m$1.tpl$([$6fo,$6ft,$6fu]);
};gregorian$.dateFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]},ps:[{nm:'date',mt:'prm',$t:{t:m$1.Integer}}],$cont:$6el$chronology,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:dateFrom')];},d:['ceylon.time.chronology','gregorian','$m','dateFrom']};};
gregorian$.monthFrom=function($6fv){
var gregorian$=this;
return gregorian$.dateFrom($6fv).$_get(1);
};gregorian$.monthFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'date',mt:'prm',$t:{t:m$1.Integer}}],$cont:$6el$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:monthFrom')];},d:['ceylon.time.chronology','gregorian','$m','monthFrom']};};
gregorian$.dayFrom=function($6fw){
var gregorian$=this;
return gregorian$.dateFrom($6fw).$_get(2);
};gregorian$.dayFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'date',mt:'prm',$t:{t:m$1.Integer}}],$cont:$6el$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:dayFrom')];},d:['ceylon.time.chronology','gregorian','$m','dayFrom']};};
gregorian$.dayOfWeekFrom=function($6fx){
var gregorian$=this;
return floorMod$internal$math($6fx,7);
};gregorian$.dayOfWeekFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'date',mt:'prm',$t:{t:m$1.Integer}}],$cont:$6el$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:dayOfWeekFrom')];},d:['ceylon.time.chronology','gregorian','$m','dayOfWeekFrom']};};
gregorian$.toString=function(){return this.string.valueOf();};
})($6el$chronology.$$.prototype);
}
return $6el$chronology;
}
ex$.$init$gregorian$chronology=$init$gregorian$chronology;$init$gregorian$chronology();var $6fy;
function gregorian$chronology(){
if($6fy===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'gregorian\' before it was set"),'73:0-173:0','Chronology.ceylon');
if($6fy===undefined){$6fy=m$1.INIT$;$6fy=$init$gregorian$chronology()();$6fy.$crtmm$=gregorian$chronology.$crtmm$;}
return $6fy;
}
ex$.gregorian$chronology=gregorian$chronology;
gregorian$chronology.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$gregorian$chronology()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian')];},d:['ceylon.time.chronology','gregorian']};};
$prop$getGregorian$chronology=gregorian$chronology;
ex$.$prop$getGregorian$chronology=$prop$getGregorian$chronology;
function GregorianDate$internal(dayOfEra,gregorianDate$){
$init$GregorianDate$internal();
if(gregorianDate$===undefined)gregorianDate$=new GregorianDate$internal.$$;
gregorianDate$.$wgb6s9$6fz_=dayOfEra;
m$1.$_Object(gregorianDate$);
$_Date(gregorianDate$);
return gregorianDate$;
}
GregorianDate$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.$_Object},ps:[{nm:'dayOfEra',mt:'prm',$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:dayOfEra')];}}],sts:[{t:$_Date}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate')];},d:['ceylon.time.internal','GregorianDate']};};
ex$.GregorianDate$internal=GregorianDate$internal;
function $init$GregorianDate$internal(){
if(GregorianDate$internal.$$===undefined){
m$1.initTypeProto(GregorianDate$internal,'ceylon.time.internal::GregorianDate',m$1.$_Object,$init$$_Date());
(function(gregorianDate$){
m$1.atr$(gregorianDate$,'dayOfEra',function(){return this.$wgb6s9$6fz_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:dayOfEra')];},d:['ceylon.time.internal','GregorianDate','$at','dayOfEra']};});
m$1.atr$(gregorianDate$,'year',function(){
var gregorianDate$=this;
return gregorian$chronology().yearFrom(gregorianDate$.dayOfEra);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc("Returns year of this gregorian date.")];},d:['ceylon.time.internal','GregorianDate','$at','year']};});
m$1.atr$(gregorianDate$,'month',function(){
var gregorianDate$=this;
return monthOf$base(gregorian$chronology().monthFrom(gregorianDate$.dayOfEra));
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc("Returns month of this gregorian date.")];},d:['ceylon.time.internal','GregorianDate','$at','month']};});
m$1.atr$(gregorianDate$,'day',function(){
var gregorianDate$=this;
return gregorian$chronology().dayFrom(gregorianDate$.dayOfEra);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:day')];},d:['ceylon.time.internal','GregorianDate','$at','day']};});
m$1.atr$(gregorianDate$,'leapYear',function(){
var gregorianDate$=this;
return gregorian$chronology().leapYear(gregorianDate$.year);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:leapYear')];},d:['ceylon.time.internal','GregorianDate','$at','leapYear']};});
m$1.atr$(gregorianDate$,'dayOfYear',function(){
var gregorianDate$=this;
return ((gregorianDate$.month.firstDayOfYear(gregorianDate$.leapYear)+gregorianDate$.day)-(1));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:dayOfYear')];},d:['ceylon.time.internal','GregorianDate','$at','dayOfYear']};});
m$1.atr$(gregorianDate$,'predecessor',function(){
var gregorianDate$=this;
return gregorianDate$.minusDays(1);
},undefined,function(){return{mod:$CCMM$,$t:{t:$_Date},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:predecessor')];},d:['ceylon.time.internal','GregorianDate','$at','predecessor']};});
m$1.atr$(gregorianDate$,'successor',function(){
var gregorianDate$=this;
return gregorianDate$.plusDays(1);
},undefined,function(){return{mod:$CCMM$,$t:{t:$_Date},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:successor')];},d:['ceylon.time.internal','GregorianDate','$at','successor']};});
m$1.atr$(gregorianDate$,'dayOfWeek',function(){
var gregorianDate$=this;
return dayOfWeek$base(gregorian$chronology().dayOfWeekFrom(gregorianDate$.dayOfEra));
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc("Returns current day of the week.")];},d:['ceylon.time.internal','GregorianDate','$at','dayOfWeek']};});
gregorianDate$.plusDays=function($6g8){
var gregorianDate$=this;
if(($6g8==(0))){
return gregorianDate$;
}
return GregorianDate$internal((gregorianDate$.dayOfEra+$6g8));
};gregorianDate$.plusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:plusDays')];},d:['ceylon.time.internal','GregorianDate','$m','plusDays']};};
gregorianDate$.minusDays=function($6g9){var gregorianDate$=this;
return gregorianDate$.plusDays((-$6g9));
};
gregorianDate$.minusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:minusDays')];},d:['ceylon.time.internal','GregorianDate','$m','minusDays']};};
gregorianDate$.plusWeeks=function($6ga){var gregorianDate$=this;
return gregorianDate$.plusDays(($6ga*days$base().perWeek));
};
gregorianDate$.plusWeeks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:plusWeeks')];},d:['ceylon.time.internal','GregorianDate','$m','plusWeeks']};};
gregorianDate$.minusWeeks=function($6gb){var gregorianDate$=this;
return gregorianDate$.plusWeeks((-$6gb));
};
gregorianDate$.minusWeeks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:minusWeeks')];},d:['ceylon.time.internal','GregorianDate','$m','minusWeeks']};};
gregorianDate$.plusMonths=function($6gc){
var gregorianDate$=this;
if(($6gc==(0))){
return gregorianDate$;
}
var $6gd=gregorianDate$.month.add($6gc);
var $6ge=(gregorianDate$.year+$6gd.years);
var $6gf=$6gd.month.numberOfDays(gregorian$chronology().leapYear($6ge));
return GregorianDate$internal(gregorian$chronology().fixedFrom(m$1.tpl$([$6ge,$6gd.month.integer,m$1.min(m$1.tpl$([$6gf,gregorianDate$.day]),{Value$min:{t:m$1.Integer},Absent$min:{t:m$1.Nothing}})])));
};gregorianDate$.plusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:plusMonths')];},d:['ceylon.time.internal','GregorianDate','$m','plusMonths']};};
gregorianDate$.minusMonths=function($6gg){var gregorianDate$=this;
return gregorianDate$.plusMonths((-$6gg));
};
gregorianDate$.minusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:minusMonths')];},d:['ceylon.time.internal','GregorianDate','$m','minusMonths']};};
gregorianDate$.plusYears=function($6gh){
var gregorianDate$=this;
if(($6gh==(0))){
return gregorianDate$;
}
var $6gi=(gregorianDate$.year+$6gh);
var $6gj=gregorianDate$.month.numberOfDays(gregorian$chronology().leapYear($6gi));
return GregorianDate$internal(gregorian$chronology().fixedFrom(m$1.tpl$([$6gi,gregorianDate$.month.integer,($6gk=m$1.sarg$(function($6gl){switch($6gl){case 0:return gregorianDate$.day;case 1:return $6gj;}return m$1.finished();},undefined,{}),m$1.min($6gk,{Value$min:{t:m$1.Integer},Absent$min:{t:m$1.Nothing}}))])));
var $6gk;
};gregorianDate$.plusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:plusYears')];},d:['ceylon.time.internal','GregorianDate','$m','plusYears']};};
gregorianDate$.minusYears=function($6gm){var gregorianDate$=this;
return gregorianDate$.plusYears((-$6gm));
};
gregorianDate$.minusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:minusYears')];},d:['ceylon.time.internal','GregorianDate','$m','minusYears']};};
gregorianDate$.withDay=function($6gn){
var gregorianDate$=this;
if(($6gn==gregorianDate$.day)){
return gregorianDate$;
}
gregorian$chronology().checkDate(m$1.tpl$([gregorianDate$.year,gregorianDate$.month.integer,$6gn]));
return GregorianDate$internal(((gregorianDate$.dayOfEra-gregorianDate$.day)+$6gn));
};gregorianDate$.withDay.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'day',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:withDay')];},d:['ceylon.time.internal','GregorianDate','$m','withDay']};};
gregorianDate$.withMonth=function($6go){
var gregorianDate$=this;
var $6gp=monthOf$base($6go);
if(m$1.$eq$($6gp,gregorianDate$.month)){
return gregorianDate$;
}
gregorian$chronology().checkDate(m$1.tpl$([gregorianDate$.year,$6gp.integer,gregorianDate$.day]));
return GregorianDate$internal(gregorian$chronology().fixedFrom(m$1.tpl$([gregorianDate$.year,$6gp.integer,gregorianDate$.day])));
};gregorianDate$.withMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:withMonth')];},d:['ceylon.time.internal','GregorianDate','$m','withMonth']};};
gregorianDate$.withYear=function($6gq){
var gregorianDate$=this;
if(($6gq==gregorianDate$.year)){
return gregorianDate$;
}
gregorian$chronology().checkDate(m$1.tpl$([$6gq,gregorianDate$.month.integer,gregorianDate$.day]));
return GregorianDate$internal(gregorian$chronology().fixedFrom(m$1.tpl$([$6gq,gregorianDate$.month.integer,gregorianDate$.day])));
};gregorianDate$.withYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:withYear')];},d:['ceylon.time.internal','GregorianDate','$m','withYear']};};
gregorianDate$.withWeekOfYear=function($6gr){
var gregorianDate$=this;
var $6gs=gregorianDate$.weekOfYear;
if(($6gr==$6gs)){
return gregorianDate$;
}
m$1.asrt$((($6gt=$6gr,$6gt.notSmallerThan((0))&&$6gt.notLargerThan((53)))),"Assertion failed: "+"\n\tviolated 0 <= weekOfYear <= 53\n\tat GregorianDate.ceylon (164:14-164:36)",'164:8-164:37','GregorianDate.ceylon');
return gregorianDate$.plusWeeks(($6gr-$6gs));
};gregorianDate$.withWeekOfYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'weekOfYear',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:withWeekOfYear')];},d:['ceylon.time.internal','GregorianDate','$m','withWeekOfYear']};};
gregorianDate$.withDayOfWeek=function($6gu){
var gregorianDate$=this;
if(m$1.$eq$($6gu,gregorianDate$.dayOfWeek)){
return gregorianDate$;
}
return gregorianDate$.plusDays(($6gu.integer-gregorianDate$.dayOfWeek.integer));
};gregorianDate$.withDayOfWeek.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:DayOfWeek$base}}],$cont:GregorianDate$internal,pa:3,d:['ceylon.time.internal','GregorianDate','$m','withDayOfWeek']};};
gregorianDate$.withDayOfYear=function($6gv){
var gregorianDate$=this;
if(($6gv==gregorianDate$.dayOfYear)){
return gregorianDate$;
}
var $6gw=($6gx=(gregorianDate$.leapYear?days$base().perLeapYear:null),m$1.nn$($6gx)?$6gx:days$base().perYear);
var $6gx;
m$1.asrt$((($6gy=$6gv,$6gy.notSmallerThan((1))&&$6gy.notLargerThan($6gw))),"Assertion failed: "+"\n\tviolated 1 <= dayOfYear <= lastDayOfYear\n\tat GregorianDate.ceylon (182:14-182:46)",'182:8-182:47','GregorianDate.ceylon');
return gregorianDate$.plusDays(($6gv-gregorianDate$.dayOfYear));
};gregorianDate$.withDayOfYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'dayOfYear',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,d:['ceylon.time.internal','GregorianDate','$m','withDayOfYear']};};
gregorianDate$.plus=function($6gz){
var gregorianDate$=this;
return ($6h0=(($6gz.years*months$base().perYear)+$6gz.months),$6h1=$6gz.days,gregorianDate$.$wgb6s9$6h2($6h0,$6h1));
var $6h0,$6h1;
};gregorianDate$.plus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'amount',mt:'prm',$t:{t:ReadableDatePeriod$base}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:plus')];},d:['ceylon.time.internal','GregorianDate','$m','plus']};};
gregorianDate$.minus=function($6h3){
var gregorianDate$=this;
return ($6h4=(((-$6h3.years)*months$base().perYear)+(-$6h3.months)),$6h5=(-$6h3.days),gregorianDate$.$wgb6s9$6h2($6h4,$6h5));
var $6h4,$6h5;
};gregorianDate$.minus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'amount',mt:'prm',$t:{t:ReadableDatePeriod$base}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:minus')];},d:['ceylon.time.internal','GregorianDate','$m','minus']};};
gregorianDate$.$wgb6s9$6h2=function($6h6,$6h7){
var gregorianDate$=this;
var $6h8=gregorianDate$;
if(($6h7<(0))){
$6h8=$6h8.minusDays((-$6h7));
}
if(($6h6<(0))){
$6h8=$6h8.minusMonths((-$6h6));
}
if(($6h6>(0))){
$6h8=$6h8.plusMonths($6h6);
}
if(($6h7>(0))){
$6h8=$6h8.plusDays($6h7);
}
return $6h8;
};gregorianDate$.$wgb6s9$6h2.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}},{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:addPeriod$2sk1dc')];},d:['ceylon.time.internal','GregorianDate','$m','addPeriod$2sk1dc']};};
m$1.atr$(gregorianDate$,'weekOfYear',function(){
var gregorianDate$=this;
function $6h9($6ha){
var $6hb=gregorianDate$.withDay(1).withMonth(january$base()).withYear($6ha);
var $6hc=($6hb.dayOfWeek.integer-monday$base().integer);
return $6hb.minusDays($6hc).plusDays((($6hc>=(4))?weekdays$base().size:(0)));
};$6h9.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'yearNumber',mt:'prm',$t:{t:m$1.Integer}}],$cont:gregorianDate$.$prop$getWeekOfYear,d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$m','normalizeFirstWeek$7b8vj7']};};
var $6hd=function($6he){return $6h9(($6he+(1))).minusDays(1);
};
$6hd.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'yearNumber',mt:'prm',$t:{t:m$1.Integer}}],$cont:gregorianDate$.$prop$getWeekOfYear,d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$m','normalizeLastWeek$ekrdod']};};
var $6hf=$6h9(gregorianDate$.year);
var $6hg=(1);
if(gregorianDate$.smallerThan($6hf)){
var $6hh=$6h9((gregorianDate$.year-(1)));
var $6hi=(gregorianDate$.offset($6hh)+(1));
$6hg=(m$1.i$div($6hi,weekdays$base().size)+($6hj=(($6hi.remainder(weekdays$base().size)>(0))?(1):null),m$1.nn$($6hj)?$6hj:(0)));
var $6hj;
}
else{
var $6hk=$6hd(gregorianDate$.year);
if(gregorianDate$.notLargerThan($6hk)){
var $6hl=(gregorianDate$.offset($6hf)+(1));
$6hg=(m$1.i$div($6hl,weekdays$base().size)+($6hm=(($6hl.remainder(weekdays$base().size)>(0))?(1):null),m$1.nn$($6hm)?$6hm:(0)));
var $6hm;
}
}
return $6hg;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:weekOfYear')];},d:['ceylon.time.internal','GregorianDate','$at','weekOfYear']};});gregorianDate$.at=function($6hn){var gregorianDate$=this;
return GregorianDateTime$internal(gregorianDate$,$6hn);
};
gregorianDate$.at.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'time',mt:'prm',$t:{t:Time}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc("Returns new [[DateTime]] value.")];},d:['ceylon.time.internal','GregorianDate','$m','at']};};
m$1.atr$(gregorianDate$,'string',function(){
var gregorianDate$=this;
return gregorianDate$.year.string.padLeading(4,m$1.Character(48,true))+"-"+(gregorianDate$.month.integer.string.padLeading(2,m$1.Character(48,true)))+"-"+(gregorianDate$.day.string.padLeading(2,m$1.Character(48,true)));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:string')];},d:['ceylon.time.internal','GregorianDate','$at','string']};});
gregorianDate$.periodFrom=function($6hp){
var gregorianDate$=this;
var $6hq=($6hr=(gregorianDate$.smallerThan($6hp)?gregorianDate$:null),m$1.nn$($6hr)?$6hr:$6hp);
var $6hr;
var $6hs=($6ht=(gregorianDate$.smallerThan($6hp)?$6hp:null),m$1.nn$($6ht)?$6ht:gregorianDate$);
var $6ht;
var $6hu=$6hq.plusYears(1);
var $6hv=(0);
while($6hu.notLargerThan($6hs)){
$6hu=$6hu.plusYears(1);
($6hv=$6hv+1);
}
var $6hw=(0);
$6hu=$6hq.plusYears($6hv).plusMonths(($6hw+(1)));
while($6hu.notLargerThan($6hs)){
($6hw=$6hw+1);
$6hu=$6hq.plusYears($6hv).plusMonths(($6hw+(1)));
}
$6hu=$6hq.plusYears($6hv).plusMonths($6hw).plusDays(1);
var $6hx=(0);
while($6hu.notLargerThan($6hs)){
$6hu=$6hu.plusDays(1);
($6hx=$6hx+1);
}
var $6hy=$6hp.smallerThan(gregorianDate$);
return ($6hz=($6i0=($6hy?$6hv:null),m$1.nn$($6i0)?$6i0:(-$6hv)),$6i1=($6i2=($6hy?$6hw:null),m$1.nn$($6i2)?$6i2:(-$6hw)),$6i3=($6i4=($6hy?$6hx:null),m$1.nn$($6i4)?$6i4:(-$6hx)),Period($6hz,$6i1,$6i3,undefined,undefined,undefined,undefined));
var $6hz,$6i0,$6i1,$6i2,$6i3,$6i4;
};gregorianDate$.periodFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'start',mt:'prm',$t:{t:$_Date}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:periodFrom')];},d:['ceylon.time.internal','GregorianDate','$m','periodFrom']};};
gregorianDate$.compare=function($6i5){
var gregorianDate$=this;
return gregorianDate$.dayOfEra.compare($6i5.dayOfEra);
};gregorianDate$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:$_Date}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:compare')];},d:['ceylon.time.internal','GregorianDate','$m','compare']};};
gregorianDate$.periodTo=function($6i6){var gregorianDate$=this;
return $6i6.periodFrom(gregorianDate$);
};
gregorianDate$.periodTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'end',mt:'prm',$t:{t:$_Date}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:periodTo')];},d:['ceylon.time.internal','GregorianDate','$m','periodTo']};};
gregorianDate$.rangeTo=function($6i7){var gregorianDate$=this;
return DateRange(gregorianDate$,$6i7);
};
gregorianDate$.rangeTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateRange},ps:[{nm:'other',mt:'prm',$t:{t:$_Date}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:rangeTo')];},d:['ceylon.time.internal','GregorianDate','$m','rangeTo']};};
gregorianDate$.neighbour=function($6i8){var gregorianDate$=this;
return gregorianDate$.plusDays($6i8);
};
gregorianDate$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,d:['ceylon.time.internal','GregorianDate','$m','neighbour']};};
gregorianDate$.offset=function($6i9){var gregorianDate$=this;
return (gregorianDate$.dayOfEra-$6i9.dayOfEra);
};
gregorianDate$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:$_Date}}],$cont:GregorianDate$internal,pa:3,d:['ceylon.time.internal','GregorianDate','$m','offset']};};
gregorianDate$.toString=function(){return this.string.valueOf();};
})(GregorianDate$internal.$$.prototype);
}
return GregorianDate$internal;
}
ex$.$init$GregorianDate$internal=$init$GregorianDate$internal;$init$GregorianDate$internal();
function gregorianDate$internal($6ia,$6ib,$6ic){
gregorian$chronology().checkDate(m$1.tpl$([$6ia,monthOf$base($6ib).integer,$6ic]));
return GregorianDate$internal(gregorian$chronology().fixedFrom(m$1.tpl$([$6ia,monthOf$base($6ib).integer,$6ic])));
}
ex$.gregorianDate$internal=gregorianDate$internal;
gregorianDate$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}},{nm:'month',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:Month$base}]}},{nm:'day',mt:'prm',$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:gregorianDate')];},d:['ceylon.time.internal','gregorianDate']};};
function GregorianDateTime$internal(date,time,gregorianDateTime$){
$init$GregorianDateTime$internal();
if(gregorianDateTime$===undefined)gregorianDateTime$=new GregorianDateTime$internal.$$;
gregorianDateTime$.$wgb6s9$6id_=date;
gregorianDateTime$.$wgb6s9$6ie_=time;
m$1.$_Object(gregorianDateTime$);
DateTime(gregorianDateTime$);
return gregorianDateTime$;
}
GregorianDateTime$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.$_Object},ps:[{nm:'date',mt:'prm',$t:{t:$_Date},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:date')];}},{nm:'time',mt:'prm',$t:{t:Time},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:time')];}}],sts:[{t:DateTime}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime')];},d:['ceylon.time.internal','GregorianDateTime']};};
ex$.GregorianDateTime$internal=GregorianDateTime$internal;
function $init$GregorianDateTime$internal(){
if(GregorianDateTime$internal.$$===undefined){
m$1.initTypeProto(GregorianDateTime$internal,'ceylon.time.internal::GregorianDateTime',m$1.$_Object,$init$DateTime());
(function(gregorianDateTime$){
m$1.atr$(gregorianDateTime$,'date',function(){return this.$wgb6s9$6id_;},undefined,function(){return{mod:$CCMM$,$t:{t:$_Date},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:date')];},d:['ceylon.time.internal','GregorianDateTime','$at','date']};});
m$1.atr$(gregorianDateTime$,'time',function(){return this.$wgb6s9$6ie_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:time')];},d:['ceylon.time.internal','GregorianDateTime','$at','time']};});
gregorianDateTime$.compare=function($6if){
var gregorianDateTime$=this;
return ($6ig=(!m$1.$eq$(gregorianDateTime$.date,$6if.date)?gregorianDateTime$.date.compare($6if.date):null),m$1.nn$($6ig)?$6ig:gregorianDateTime$.time.compare($6if.time));
var $6ig;
};gregorianDateTime$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:DateTime}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:compare')];},d:['ceylon.time.internal','GregorianDateTime','$m','compare']};};
m$1.atr$(gregorianDateTime$,'day',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.day;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:day')];},d:['ceylon.time.internal','GregorianDateTime','$at','day']};});
m$1.atr$(gregorianDateTime$,'dayOfWeek',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.dayOfWeek;
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns current day of the week.")];},d:['ceylon.time.internal','GregorianDateTime','$at','dayOfWeek']};});
m$1.atr$(gregorianDateTime$,'dayOfYear',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.dayOfYear;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns _day of year_ value of this gregorian date.")];},d:['ceylon.time.internal','GregorianDateTime','$at','dayOfYear']};});
m$1.atr$(gregorianDateTime$,'dayOfEra',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.dayOfEra;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns _day of year_ value of this gregorian date.")];},d:['ceylon.time.internal','GregorianDateTime','$at','dayOfEra']};});
m$1.atr$(gregorianDateTime$,'year',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.year;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns year of this gregorian date.")];},d:['ceylon.time.internal','GregorianDateTime','$at','year']};});
m$1.atr$(gregorianDateTime$,'leapYear',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.leapYear;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:leapYear')];},d:['ceylon.time.internal','GregorianDateTime','$at','leapYear']};});
m$1.atr$(gregorianDateTime$,'weekOfYear',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.weekOfYear;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:weekOfYear')];},d:['ceylon.time.internal','GregorianDateTime','$at','weekOfYear']};});
m$1.atr$(gregorianDateTime$,'month',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.month;
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns month of this gregorian date.")];},d:['ceylon.time.internal','GregorianDateTime','$at','month']};});
m$1.atr$(gregorianDateTime$,'hours',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.time.hours;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of full hours elapsed since last midnight.")];},d:['ceylon.time.internal','GregorianDateTime','$at','hours']};});
m$1.atr$(gregorianDateTime$,'milliseconds',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.time.milliseconds;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of milliseconds since last full second.")];},d:['ceylon.time.internal','GregorianDateTime','$at','milliseconds']};});
m$1.atr$(gregorianDateTime$,'millisecondsOfDay',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.time.millisecondsOfDay;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of milliseconds since last midnight.")];},d:['ceylon.time.internal','GregorianDateTime','$at','millisecondsOfDay']};});
m$1.atr$(gregorianDateTime$,'minutes',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.time.minutes;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of minutes since last full hour.")];},d:['ceylon.time.internal','GregorianDateTime','$at','minutes']};});
m$1.atr$(gregorianDateTime$,'minutesOfDay',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.time.minutesOfDay;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of minutes since last midnight.")];},d:['ceylon.time.internal','GregorianDateTime','$at','minutesOfDay']};});
m$1.atr$(gregorianDateTime$,'seconds',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.time.seconds;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of seconds since last minute.")];},d:['ceylon.time.internal','GregorianDateTime','$at','seconds']};});
m$1.atr$(gregorianDateTime$,'secondsOfDay',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.time.secondsOfDay;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of seconds since last midnight.")];},d:['ceylon.time.internal','GregorianDateTime','$at','secondsOfDay']};});
gregorianDateTime$.plusYears=function($6iw){var gregorianDateTime$=this;
return ($6ix=gregorianDateTime$.date.plusYears($6iw),$6iy=gregorianDateTime$.time,GregorianDateTime$internal($6ix,$6iy));
var $6ix,$6iy;
};
gregorianDateTime$.plusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusYears')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusYears']};};
gregorianDateTime$.minusYears=function($6iz){var gregorianDateTime$=this;
return ($6j0=gregorianDateTime$.date.minusYears($6iz),$6j1=gregorianDateTime$.time,GregorianDateTime$internal($6j0,$6j1));
var $6j0,$6j1;
};
gregorianDateTime$.minusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusYears')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusYears']};};
gregorianDateTime$.plusMonths=function($6j2){var gregorianDateTime$=this;
return ($6j3=gregorianDateTime$.date.plusMonths($6j2),$6j4=gregorianDateTime$.time,GregorianDateTime$internal($6j3,$6j4));
var $6j3,$6j4;
};
gregorianDateTime$.plusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusMonths')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusMonths']};};
gregorianDateTime$.minusMonths=function($6j5){var gregorianDateTime$=this;
return gregorianDateTime$.plusMonths((-$6j5));
};
gregorianDateTime$.minusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusMonths')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusMonths']};};
gregorianDateTime$.plusWeeks=function($6j6){var gregorianDateTime$=this;
return ($6j7=gregorianDateTime$.date.plusWeeks($6j6),$6j8=gregorianDateTime$.time,GregorianDateTime$internal($6j7,$6j8));
var $6j7,$6j8;
};
gregorianDateTime$.plusWeeks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusWeeks')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusWeeks']};};
gregorianDateTime$.minusWeeks=function($6j9){var gregorianDateTime$=this;
return gregorianDateTime$.plusWeeks((-$6j9));
};
gregorianDateTime$.minusWeeks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusWeeks')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusWeeks']};};
gregorianDateTime$.plusDays=function($6ja){var gregorianDateTime$=this;
return ($6jb=gregorianDateTime$.date.plusDays($6ja),$6jc=gregorianDateTime$.time,GregorianDateTime$internal($6jb,$6jc));
var $6jb,$6jc;
};
gregorianDateTime$.plusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusDays')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusDays']};};
gregorianDateTime$.minusDays=function($6jd){var gregorianDateTime$=this;
return gregorianDateTime$.plusDays((-$6jd));
};
gregorianDateTime$.minusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusDays')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusDays']};};
gregorianDateTime$.plusHours=function($6je){
var gregorianDateTime$=this;
if(($6je==(0))){
return gregorianDateTime$;
}
var $6jf=($6jg=(($6je>=(0))?(1):null),m$1.nn$($6jg)?$6jg:(-1));
var $6jg;
return ($6jh=($6je*$6jf),$6ji=$6jf,gregorianDateTime$.$wgb6s9$6jj($6jh,undefined,undefined,undefined,$6ji));
var $6jh,$6ji;
};gregorianDateTime$.plusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusHours')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusHours']};};
gregorianDateTime$.minusHours=function($6jk){var gregorianDateTime$=this;
return gregorianDateTime$.plusHours((-$6jk));
};
gregorianDateTime$.minusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusHours')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusHours']};};
gregorianDateTime$.plusMinutes=function($6jl){
var gregorianDateTime$=this;
if(($6jl==(0))){
return gregorianDateTime$;
}
var $6jm=($6jn=(($6jl>=(0))?(1):null),m$1.nn$($6jn)?$6jn:(-1));
var $6jn;
return ($6jo=($6jl*$6jm),$6jp=$6jm,gregorianDateTime$.$wgb6s9$6jj(undefined,$6jo,undefined,undefined,$6jp));
var $6jo,$6jp;
};gregorianDateTime$.plusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusMinutes')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusMinutes']};};
gregorianDateTime$.minusMinutes=function($6jq){var gregorianDateTime$=this;
return gregorianDateTime$.plusMinutes((-$6jq));
};
gregorianDateTime$.minusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusMinutes')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusMinutes']};};
gregorianDateTime$.plusSeconds=function($6jr){
var gregorianDateTime$=this;
if(($6jr==(0))){
return gregorianDateTime$;
}
var $6js=($6jt=(($6jr>=(0))?(1):null),m$1.nn$($6jt)?$6jt:(-1));
var $6jt;
return ($6ju=($6jr*$6js),$6jv=$6js,gregorianDateTime$.$wgb6s9$6jj(undefined,undefined,$6ju,undefined,$6jv));
var $6ju,$6jv;
};gregorianDateTime$.plusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusSeconds')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusSeconds']};};
gregorianDateTime$.minusSeconds=function($6jw){var gregorianDateTime$=this;
return gregorianDateTime$.plusSeconds((-$6jw));
};
gregorianDateTime$.minusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusSeconds')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusSeconds']};};
gregorianDateTime$.plusMilliseconds=function($6jx){
var gregorianDateTime$=this;
if(($6jx==(0))){
return gregorianDateTime$;
}
var $6jy=($6jz=(($6jx>=(0))?(1):null),m$1.nn$($6jz)?$6jz:(-1));
var $6jz;
return ($6k0=($6jx*$6jy),$6k1=$6jy,gregorianDateTime$.$wgb6s9$6jj(undefined,undefined,undefined,$6k0,$6k1));
var $6k0,$6k1;
};gregorianDateTime$.plusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusMilliseconds')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusMilliseconds']};};
gregorianDateTime$.minusMilliseconds=function($6k2){var gregorianDateTime$=this;
return gregorianDateTime$.plusMilliseconds((-$6k2));
};
gregorianDateTime$.minusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusMilliseconds')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusMilliseconds']};};
gregorianDateTime$.withDay=function($6k3){var gregorianDateTime$=this;
return ($6k4=gregorianDateTime$.date.withDay($6k3),$6k5=gregorianDateTime$.time,GregorianDateTime$internal($6k4,$6k5));
var $6k4,$6k5;
};
gregorianDateTime$.withDay.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'dayOfMonth',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withDay')];},d:['ceylon.time.internal','GregorianDateTime','$m','withDay']};};
gregorianDateTime$.withHours=function($6k6){var gregorianDateTime$=this;
return ($6k7=gregorianDateTime$.date,$6k8=gregorianDateTime$.time.withHours($6k6),GregorianDateTime$internal($6k7,$6k8));
var $6k7,$6k8;
};
gregorianDateTime$.withHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withHours')];},d:['ceylon.time.internal','GregorianDateTime','$m','withHours']};};
gregorianDateTime$.withYear=function($6k9){var gregorianDateTime$=this;
return ($6ka=gregorianDateTime$.date.withYear($6k9),$6kb=gregorianDateTime$.time,GregorianDateTime$internal($6ka,$6kb));
var $6ka,$6kb;
};
gregorianDateTime$.withYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withYear')];},d:['ceylon.time.internal','GregorianDateTime','$m','withYear']};};
gregorianDateTime$.withMonth=function($6kc){var gregorianDateTime$=this;
return ($6kd=gregorianDateTime$.date.withMonth($6kc),$6ke=gregorianDateTime$.time,GregorianDateTime$internal($6kd,$6ke));
var $6kd,$6ke;
};
gregorianDateTime$.withMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withMonth')];},d:['ceylon.time.internal','GregorianDateTime','$m','withMonth']};};
gregorianDateTime$.withWeekOfYear=function($6kf){var gregorianDateTime$=this;
return ($6kg=gregorianDateTime$.date.withWeekOfYear($6kf),$6kh=gregorianDateTime$.time,GregorianDateTime$internal($6kg,$6kh));
var $6kg,$6kh;
};
gregorianDateTime$.withWeekOfYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'weekNumber',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withWeekOfYear')];},d:['ceylon.time.internal','GregorianDateTime','$m','withWeekOfYear']};};
gregorianDateTime$.withDayOfWeek=function($6ki){var gregorianDateTime$=this;
return ($6kj=gregorianDateTime$.date.withDayOfWeek($6ki),$6kk=gregorianDateTime$.time,GregorianDateTime$internal($6kj,$6kk));
var $6kj,$6kk;
};
gregorianDateTime$.withDayOfWeek.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:DayOfWeek$base}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withDayOfWeek')];},d:['ceylon.time.internal','GregorianDateTime','$m','withDayOfWeek']};};
gregorianDateTime$.withDayOfYear=function($6kl){var gregorianDateTime$=this;
return ($6km=gregorianDateTime$.date.withDayOfYear($6kl),$6kn=gregorianDateTime$.time,GregorianDateTime$internal($6km,$6kn));
var $6km,$6kn;
};
gregorianDateTime$.withDayOfYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'dayOfYear',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withDayOfYear')];},d:['ceylon.time.internal','GregorianDateTime','$m','withDayOfYear']};};
gregorianDateTime$.withMinutes=function($6ko){var gregorianDateTime$=this;
return ($6kp=gregorianDateTime$.date,$6kq=gregorianDateTime$.time.withMinutes($6ko),GregorianDateTime$internal($6kp,$6kq));
var $6kp,$6kq;
};
gregorianDateTime$.withMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withMinutes')];},d:['ceylon.time.internal','GregorianDateTime','$m','withMinutes']};};
gregorianDateTime$.withSeconds=function($6kr){var gregorianDateTime$=this;
return ($6ks=gregorianDateTime$.date,$6kt=gregorianDateTime$.time.withSeconds($6kr),GregorianDateTime$internal($6ks,$6kt));
var $6ks,$6kt;
};
gregorianDateTime$.withSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withSeconds')];},d:['ceylon.time.internal','GregorianDateTime','$m','withSeconds']};};
gregorianDateTime$.withMilliseconds=function($6ku){var gregorianDateTime$=this;
return ($6kv=gregorianDateTime$.date,$6kw=gregorianDateTime$.time.withMilliseconds($6ku),GregorianDateTime$internal($6kv,$6kw));
var $6kv,$6kw;
};
gregorianDateTime$.withMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withMilliseconds')];},d:['ceylon.time.internal','GregorianDateTime','$m','withMilliseconds']};};
m$1.atr$(gregorianDateTime$,'predecessor',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.minusMilliseconds(1);
},undefined,function(){return{mod:$CCMM$,$t:{t:DateTime},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:predecessor')];},d:['ceylon.time.internal','GregorianDateTime','$at','predecessor']};});
m$1.atr$(gregorianDateTime$,'successor',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.plusMilliseconds(1);
},undefined,function(){return{mod:$CCMM$,$t:{t:DateTime},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:successor')];},d:['ceylon.time.internal','GregorianDateTime','$at','successor']};});
gregorianDateTime$.plus=function($6kz){var gregorianDateTime$=this;
return ($6l0=(($6kz.years*months$base().perYear)+$6kz.months),$6l1=$6kz.days,$6l2=$6kz.hours,$6l3=$6kz.minutes,$6l4=$6kz.seconds,$6l5=$6kz.milliseconds,gregorianDateTime$.$wgb6s9$6l6($6l0,$6l1,$6l2,$6l3,$6l4,$6l5));
var $6l0,$6l1,$6l2,$6l3,$6l4,$6l5;
};
gregorianDateTime$.plus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'amount',mt:'prm',$t:{t:ReadablePeriod$base}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plus')];},d:['ceylon.time.internal','GregorianDateTime','$m','plus']};};
gregorianDateTime$.minus=function($6l7){var gregorianDateTime$=this;
return ($6l8=(((-$6l7.years)*months$base().perYear)+(-$6l7.months)),$6l9=(-$6l7.days),$6la=(-$6l7.hours),$6lb=(-$6l7.minutes),$6lc=(-$6l7.seconds),$6ld=(-$6l7.milliseconds),gregorianDateTime$.$wgb6s9$6l6($6l8,$6l9,$6la,$6lb,$6lc,$6ld));
var $6l8,$6l9,$6la,$6lb,$6lc,$6ld;
};
gregorianDateTime$.minus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'amount',mt:'prm',$t:{t:ReadablePeriod$base}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minus')];},d:['ceylon.time.internal','GregorianDateTime','$m','minus']};};
gregorianDateTime$.$wgb6s9$6l6=function($6le,$6lf,$6lg,$6lh,$6li,$6lj){
var gregorianDateTime$=this;
var $6lk=gregorianDateTime$;
var $6ll=(((($6lg*milliseconds$base().perHour)+($6lh*milliseconds$base().perMinute))+($6li*milliseconds$base().perSecond))+$6lj);
if(($6ll<(0))){
$6lk=$6lk.minusMilliseconds((-$6ll));
}
if(($6lf<(0))){
$6lk=$6lk.minusDays((-$6lf));
}
if(($6le<(0))){
$6lk=$6lk.minusMonths((-$6le));
}
if(($6le>(0))){
$6lk=$6lk.plusMonths($6le);
}
if(($6lf>(0))){
$6lk=$6lk.plusDays($6lf);
}
if(($6ll>(0))){
$6lk=$6lk.plusMilliseconds($6ll);
}
return $6lk;
};gregorianDateTime$.$wgb6s9$6l6.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}},{nm:'days',mt:'prm',$t:{t:m$1.Integer}},{nm:'hours',mt:'prm',$t:{t:m$1.Integer}},{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}},{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}},{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:addPeriod$g15ssb')];},d:['ceylon.time.internal','GregorianDateTime','$m','addPeriod$g15ssb']};};
gregorianDateTime$.instant=function($6lm){
var gregorianDateTime$=this;
if($6lm===undefined){$6lm=gregorianDateTime$.instant$defs$timeZone($6lm);}
var $6ln=Instant((unixTime$chronology().timeFromFixed(gregorianDateTime$.dayOfEra)+gregorianDateTime$.millisecondsOfDay));
return Instant(($6ln.millisecondsOfEpoch-$6lm.offset($6ln)));
};gregorianDateTime$.instant.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:instant')];},d:['ceylon.time.internal','GregorianDateTime','$m','instant']};};
m$1.atr$(gregorianDateTime$,'string',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.string+"T"+(gregorianDateTime$.time.string);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:string')];},d:['ceylon.time.internal','GregorianDateTime','$at','string']};});
gregorianDateTime$.periodFrom=function($6lp){
var gregorianDateTime$=this;
var $6lq=($6lr=(gregorianDateTime$.smallerThan($6lp)?gregorianDateTime$:null),m$1.nn$($6lr)?$6lr:$6lp);
var $6lr;
var $6ls=($6lt=(gregorianDateTime$.smallerThan($6lp)?$6lp:null),m$1.nn$($6lt)?$6lt:gregorianDateTime$);
var $6lt;
var $6lu=($6lv=($6ls.time.smallerThan($6lq.time)?(1):null),m$1.nn$($6lv)?$6lv:(0));
var $6lv;
var $6lw=($6lx=(($6ls.millisecondsOfDay>=$6lq.millisecondsOfDay)?($6ls.millisecondsOfDay-$6lq.millisecondsOfDay):null),m$1.nn$($6lx)?$6lx:((milliseconds$base().perDay+$6ls.millisecondsOfDay)-$6lq.millisecondsOfDay));
var $6lx;
var $6ly=m$1.i$div($6lw,milliseconds$base().perHour);
$6lw=$6lw.remainder(milliseconds$base().perHour);
var $6lz=m$1.i$div($6lw,milliseconds$base().perMinute);
$6lw=$6lw.remainder(milliseconds$base().perMinute);
var $6m0=m$1.i$div($6lw,milliseconds$base().perSecond);
var $6m1=$6lp.smallerThan(gregorianDateTime$);
return ($6m2=($6m3=($6m1?$6ly:null),m$1.nn$($6m3)?$6m3:(-$6ly)),$6m4=($6m5=($6m1?$6lz:null),m$1.nn$($6m5)?$6m5:(-$6lz)),$6m6=($6m7=($6m1?$6m0:null),m$1.nn$($6m7)?$6m7:(-$6m0)),$6m8=($6m9=($6m1?$6lw.remainder(milliseconds$base().perSecond):null),m$1.nn$($6m9)?$6m9:(-$6lw.remainder(milliseconds$base().perSecond))),Period(undefined,undefined,undefined,$6m2,$6m4,$6m6,$6m8)).plus(($6ma=($6m1?$6ls.date.minusDays($6lu).periodFrom($6lq.date):null),m$1.nn$($6ma)?$6ma:$6ls.date.minusDays($6lu).periodTo($6lq.date)));
var $6m2,$6m3,$6m4,$6m5,$6m6,$6m7,$6m8,$6m9,$6ma;
};gregorianDateTime$.periodFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'start',mt:'prm',$t:{t:DateTime}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:periodFrom')];},d:['ceylon.time.internal','GregorianDateTime','$m','periodFrom']};};
gregorianDateTime$.periodTo=function($6mb){var gregorianDateTime$=this;
return $6mb.periodFrom(gregorianDateTime$);
};
gregorianDateTime$.periodTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'end',mt:'prm',$t:{t:DateTime}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:periodTo')];},d:['ceylon.time.internal','GregorianDateTime','$m','periodTo']};};
gregorianDateTime$.rangeTo=function($6mc){var gregorianDateTime$=this;
return DateTimeRange(gregorianDateTime$,$6mc);
};
gregorianDateTime$.rangeTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTimeRange},ps:[{nm:'other',mt:'prm',$t:{t:DateTime}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:rangeTo')];},d:['ceylon.time.internal','GregorianDateTime','$m','rangeTo']};};
gregorianDateTime$.$wgb6s9$6jj$defs$hours=function($6md,$6me,$6mf,$6mg,$6mh){return 0;};
gregorianDateTime$.$wgb6s9$6jj$defs$minutes=function($6md,$6me,$6mf,$6mg,$6mh){return 0;};
gregorianDateTime$.$wgb6s9$6jj$defs$seconds=function($6md,$6me,$6mf,$6mg,$6mh){return 0;};
gregorianDateTime$.$wgb6s9$6jj$defs$millis=function($6md,$6me,$6mf,$6mg,$6mh){return 0;};
gregorianDateTime$.$wgb6s9$6jj$defs$signal=function($6md,$6me,$6mf,$6mg,$6mh){return 1;};
gregorianDateTime$.$wgb6s9$6jj=function($6md,$6me,$6mf,$6mg,$6mh){
var gregorianDateTime$=this;
if($6md===undefined){$6md=(0);}
if($6me===undefined){$6me=(0);}
if($6mf===undefined){$6mf=(0);}
if($6mg===undefined){$6mg=(0);}
if($6mh===undefined){$6mh=(1);}
var $6mi=(((($6md*milliseconds$base().perHour)+($6me*milliseconds$base().perMinute))+($6mf*milliseconds$base().perSecond))+$6mg);
var $6mj=(days$base().fromMilliseconds($6mi)*$6mh);
var $6mk=((floorMod$internal$math($6mi,milliseconds$base().perDay)*$6mh)+gregorianDateTime$.time.millisecondsOfDay);
var $6ml=($6mj+floorDiv$internal$math($6mk,milliseconds$base().perDay));
var $6mm=floorMod$internal$math($6mk,milliseconds$base().perDay);
var $6mn=($6mo=(($6mm==gregorianDateTime$.time.millisecondsOfDay)?gregorianDateTime$.time:null),m$1.nn$($6mo)?$6mo:TimeOfDay$internal($6mm));
var $6mo;
return GregorianDateTime$internal(gregorianDateTime$.date.plusDays($6ml),$6mn);
};gregorianDateTime$.$wgb6s9$6jj.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'hours',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'minutes',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'seconds',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'millis',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'signal',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:fromTime$uyune6')];},d:['ceylon.time.internal','GregorianDateTime','$m','fromTime$uyune6']};};
gregorianDateTime$.neighbour=function($6mp){var gregorianDateTime$=this;
return gregorianDateTime$.plusMilliseconds($6mp);
};
gregorianDateTime$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,d:['ceylon.time.internal','GregorianDateTime','$m','neighbour']};};
gregorianDateTime$.offset=function($6mq){var gregorianDateTime$=this;
return (gregorianDateTime$.instant(timeZone$timezone().utc).millisecondsOfEpoch-$6mq.instant(timeZone$timezone().utc).millisecondsOfEpoch);
};
gregorianDateTime$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:DateTime}}],$cont:GregorianDateTime$internal,pa:3,d:['ceylon.time.internal','GregorianDateTime','$m','offset']};};
gregorianDateTime$.toString=function(){return this.string.valueOf();};
})(GregorianDateTime$internal.$$.prototype);
}
return GregorianDateTime$internal;
}
ex$.$init$GregorianDateTime$internal=$init$GregorianDateTime$internal;$init$GregorianDateTime$internal();
function GregorianYearMonth$internal(year,month,gregorianYearMonth$){
$init$GregorianYearMonth$internal();
if(gregorianYearMonth$===undefined)gregorianYearMonth$=new GregorianYearMonth$internal.$$;
gregorianYearMonth$.$wgb6s9$6mr_=year;
gregorianYearMonth$.$wgb6s9$6ms_=month;
m$1.$_Object(gregorianYearMonth$);
YearMonth(gregorianYearMonth$);
return gregorianYearMonth$;
}
GregorianYearMonth$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.$_Object},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer},pa:3},{nm:'month',mt:'prm',$t:{t:Month$base},pa:3}],sts:[{t:YearMonth}],pa:1,d:['ceylon.time.internal','GregorianYearMonth']};};
ex$.GregorianYearMonth$internal=GregorianYearMonth$internal;
function $init$GregorianYearMonth$internal(){
if(GregorianYearMonth$internal.$$===undefined){
m$1.initTypeProto(GregorianYearMonth$internal,'ceylon.time.internal::GregorianYearMonth',m$1.$_Object,$init$YearMonth());
(function(gregorianYearMonth$){
m$1.atr$(gregorianYearMonth$,'year',function(){return this.$wgb6s9$6mr_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$at','year']};});
m$1.atr$(gregorianYearMonth$,'month',function(){return this.$wgb6s9$6ms_;},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$at','month']};});
gregorianYearMonth$.compare=function($6mt){var gregorianYearMonth$=this;
return function($6mu){if($6mu===m$1.equal())return gregorianYearMonth$.month.compare($6mt.month);else if($6mu===m$1.smaller())return m$1.smaller();else if($6mu===m$1.larger())return m$1.larger();else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')}(gregorianYearMonth$.year.compare($6mt.year));
};
gregorianYearMonth$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:YearMonth}}],$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$m','compare']};};
m$1.atr$(gregorianYearMonth$,'leapYear',function(){
var gregorianYearMonth$=this;
return gregorian$chronology().leapYear(gregorianYearMonth$.year);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$at','leapYear']};});
gregorianYearMonth$.plusMonths=function($6mw){
var gregorianYearMonth$=this;
if(($6mw==(0))){
return gregorianYearMonth$;
}
var $6mx=gregorianYearMonth$.month.add($6mw);
var $6my=(gregorianYearMonth$.year+$6mx.years);
return GregorianYearMonth$internal($6my,$6mx.month);
};gregorianYearMonth$.plusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:YearMonth},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$m','plusMonths']};};
gregorianYearMonth$.minusMonths=function($6mz){var gregorianYearMonth$=this;
return gregorianYearMonth$.plusMonths((-$6mz));
};
gregorianYearMonth$.minusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:YearMonth},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$m','minusMonths']};};
gregorianYearMonth$.withMonth=function($6n0){
var gregorianYearMonth$=this;
if(m$1.$eq$(gregorianYearMonth$.month,$6n0)){
return gregorianYearMonth$;
}
return GregorianYearMonth$internal(gregorianYearMonth$.year,$6n0);
};gregorianYearMonth$.withMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:YearMonth},ps:[{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$m','withMonth']};};
gregorianYearMonth$.plusYears=function($6n1){
var gregorianYearMonth$=this;
if(($6n1==(0))){
return gregorianYearMonth$;
}
return GregorianYearMonth$internal((gregorianYearMonth$.year+$6n1),gregorianYearMonth$.month);
};gregorianYearMonth$.plusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:YearMonth},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$m','plusYears']};};
gregorianYearMonth$.minusYears=function($6n2){var gregorianYearMonth$=this;
return gregorianYearMonth$.plusYears((-$6n2));
};
gregorianYearMonth$.minusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:YearMonth},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$m','minusYears']};};
gregorianYearMonth$.withYear=function($6n3){
var gregorianYearMonth$=this;
if((gregorianYearMonth$.year==$6n3)){
return gregorianYearMonth$;
}
return GregorianYearMonth$internal($6n3,gregorianYearMonth$.month);
};gregorianYearMonth$.withYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:YearMonth},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$m','withYear']};};
gregorianYearMonth$.neighbour=function($6n4){var gregorianYearMonth$=this;
return gregorianYearMonth$.plusMonths($6n4);
};
gregorianYearMonth$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:YearMonth},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$m','neighbour']};};
gregorianYearMonth$.offset=function($6n5){var gregorianYearMonth$=this;
return (gregorianYearMonth$.$wgb6s9$6n6(gregorianYearMonth$)-gregorianYearMonth$.$wgb6s9$6n6($6n5));
};
gregorianYearMonth$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:YearMonth}}],$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$m','offset']};};
gregorianYearMonth$.$wgb6s9$6n6=function($6n7){var gregorianYearMonth$=this;
return (($6n7.year*(12))+$6n7.month.integer);
};
gregorianYearMonth$.$wgb6s9$6n6.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'yearMonth',mt:'prm',$t:{t:YearMonth}}],$cont:GregorianYearMonth$internal,d:['ceylon.time.internal','GregorianYearMonth','$m','countInMonths$9amdcu']};};
m$1.atr$(gregorianYearMonth$,'string',function(){
var gregorianYearMonth$=this;
return gregorianYearMonth$.year.string.padLeading(4,m$1.Character(48,true))+"-"+(gregorianYearMonth$.month.integer.string.padLeading(2,m$1.Character(48,true)));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:GregorianYearMonth$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianYearMonth:$at:string')];},d:['ceylon.time.internal','GregorianYearMonth','$at','string']};});
gregorianYearMonth$.toString=function(){return this.string.valueOf();};
})(GregorianYearMonth$internal.$$.prototype);
}
return GregorianYearMonth$internal;
}
ex$.$init$GregorianYearMonth$internal=$init$GregorianYearMonth$internal;$init$GregorianYearMonth$internal();
function gregorianYearMonth$internal($6n9,$6na){
gregorian$chronology().checkDate(m$1.tpl$([$6n9,monthOf$base($6na).integer,1]));
return GregorianYearMonth$internal($6n9,monthOf$base($6na));
}
ex$.gregorianYearMonth$internal=gregorianYearMonth$internal;
gregorianYearMonth$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:YearMonth},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}},{nm:'month',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:Month$base}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:gregorianYearMonth')];},d:['ceylon.time.internal','gregorianYearMonth']};};
function GregorianZonedDateTime$internal(instant,timeZone,gregorianZonedDateTime$){
$init$GregorianZonedDateTime$internal();
if(gregorianZonedDateTime$===undefined)gregorianZonedDateTime$=new GregorianZonedDateTime$internal.$$;
gregorianZonedDateTime$.$wgb6s9$6nb_=instant;
if(timeZone===undefined){timeZone=$init$GregorianZonedDateTime$internal().$defs$timeZone(gregorianZonedDateTime$,instant);}
gregorianZonedDateTime$.$wgb6s9$6nc_=timeZone;
m$1.$_Object(gregorianZonedDateTime$);
ZoneDateTime$timezone(gregorianZonedDateTime$);
return gregorianZonedDateTime$;
}
GregorianZonedDateTime$internal.$defs$timeZone=function(gregorianZonedDateTime$,instant){return timeZone$timezone().system};GregorianZonedDateTime$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.$_Object},ps:[{nm:'instant',mt:'prm',$t:{t:Instant},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:instant')];}},{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone},pa:3,an:function(){return[m$1.doc("TimeZone to be applied in this implementation.")];}}],sts:[{t:ZoneDateTime$timezone}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime')];},d:['ceylon.time.internal','GregorianZonedDateTime']};};
ex$.GregorianZonedDateTime$internal=GregorianZonedDateTime$internal;
function $init$GregorianZonedDateTime$internal(){
if(GregorianZonedDateTime$internal.$$===undefined){
m$1.initTypeProto(GregorianZonedDateTime$internal,'ceylon.time.internal::GregorianZonedDateTime',m$1.$_Object,$init$ZoneDateTime$timezone());
(function(gregorianZonedDateTime$){
m$1.atr$(gregorianZonedDateTime$,'instant',function(){return this.$wgb6s9$6nb_;},undefined,function(){return{mod:$CCMM$,$t:{t:Instant},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:instant')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','instant']};});
m$1.atr$(gregorianZonedDateTime$,'timeZone',function(){return this.$wgb6s9$6nc_;},undefined,function(){return{mod:$CCMM$,$t:{t:TimeZone$timezone},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("TimeZone to be applied in this implementation.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','timeZone']};});
gregorianZonedDateTime$.compare=function($6nd){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.compare($6nd.instant);
};gregorianZonedDateTime$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:ZoneDateTime$timezone}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:compare')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','compare']};};
m$1.atr$(gregorianZonedDateTime$,'day',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).day;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns _day of month_ value of this gregorian date.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','day']};});
m$1.atr$(gregorianZonedDateTime$,'dayOfEra',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).dayOfEra;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns _day of year_ value of this gregorian date.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dayOfEra']};});
m$1.atr$(gregorianZonedDateTime$,'dayOfWeek',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).dayOfWeek;
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns current day of the week.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dayOfWeek']};});
m$1.atr$(gregorianZonedDateTime$,'dayOfYear',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).dayOfYear;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns _day of year_ value of this gregorian date.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dayOfYear']};});
m$1.atr$(gregorianZonedDateTime$,'hours',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).hours;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of full hours elapsed since last midnight.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','hours']};});
m$1.atr$(gregorianZonedDateTime$,'leapYear',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).leapYear;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:leapYear')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','leapYear']};});
m$1.atr$(gregorianZonedDateTime$,'milliseconds',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).milliseconds;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of milliseconds since last full second.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','milliseconds']};});
m$1.atr$(gregorianZonedDateTime$,'millisecondsOfDay',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).millisecondsOfDay;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of milliseconds since last midnight.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','millisecondsOfDay']};});
m$1.atr$(gregorianZonedDateTime$,'minutes',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minutes;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of minutes since last full hour.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','minutes']};});
m$1.atr$(gregorianZonedDateTime$,'minutesOfDay',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minutesOfDay;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of minutes since last midnight.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','minutesOfDay']};});
m$1.atr$(gregorianZonedDateTime$,'month',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).month;
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns month of this gregorian date.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','month']};});
m$1.atr$(gregorianZonedDateTime$,'seconds',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).seconds;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of seconds since last minute.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','seconds']};});
m$1.atr$(gregorianZonedDateTime$,'secondsOfDay',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).secondsOfDay;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of seconds since last midnight.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','secondsOfDay']};});
m$1.atr$(gregorianZonedDateTime$,'weekOfYear',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).weekOfYear;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:weekOfYear')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','weekOfYear']};});
m$1.atr$(gregorianZonedDateTime$,'year',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).year;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns year of this gregorian date.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','year']};});
m$1.atr$(gregorianZonedDateTime$,'date',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).date;
},undefined,function(){return{mod:$CCMM$,$t:{t:$_Date},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:date')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','date']};});
m$1.atr$(gregorianZonedDateTime$,'time',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).time;
},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:time')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','time']};});
m$1.atr$(gregorianZonedDateTime$,'dateTime',function(){
var gregorianZonedDateTime$=this;
return GregorianDateTime$internal(gregorianZonedDateTime$.date,gregorianZonedDateTime$.time);
},undefined,function(){return{mod:$CCMM$,$t:{t:DateTime},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:dateTime')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dateTime']};});
gregorianZonedDateTime$.minusDays=function($6nw){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusDays($6nw));
};
gregorianZonedDateTime$.minusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusDays')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusDays']};};
gregorianZonedDateTime$.minusHours=function($6ny){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusHours($6ny));
};
gregorianZonedDateTime$.minusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusHours')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusHours']};};
gregorianZonedDateTime$.minusMilliseconds=function($6nz){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusMilliseconds($6nz));
};
gregorianZonedDateTime$.minusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusMilliseconds')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusMilliseconds']};};
gregorianZonedDateTime$.minusMinutes=function($6o0){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusMinutes($6o0));
};
gregorianZonedDateTime$.minusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusMinutes')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusMinutes']};};
gregorianZonedDateTime$.minusMonths=function($6o1){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusMonths($6o1));
};
gregorianZonedDateTime$.minusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusMonths')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusMonths']};};
gregorianZonedDateTime$.minusSeconds=function($6o2){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusSeconds($6o2));
};
gregorianZonedDateTime$.minusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusSeconds')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusSeconds']};};
gregorianZonedDateTime$.minusWeeks=function($6o3){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusWeeks($6o3));
};
gregorianZonedDateTime$.minusWeeks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusWeeks')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusWeeks']};};
gregorianZonedDateTime$.minusYears=function($6o4){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusYears($6o4));
};
gregorianZonedDateTime$.minusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusYears')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusYears']};};
gregorianZonedDateTime$.plusDays=function($6o5){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusDays($6o5));
};
gregorianZonedDateTime$.plusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusDays')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusDays']};};
gregorianZonedDateTime$.plusHours=function($6o6){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusHours($6o6));
};
gregorianZonedDateTime$.plusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusHours')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusHours']};};
gregorianZonedDateTime$.plusMilliseconds=function($6o7){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusMilliseconds($6o7));
};
gregorianZonedDateTime$.plusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusMilliseconds')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusMilliseconds']};};
gregorianZonedDateTime$.plusMinutes=function($6o8){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusMinutes($6o8));
};
gregorianZonedDateTime$.plusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusMinutes')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusMinutes']};};
gregorianZonedDateTime$.plusMonths=function($6o9){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusMonths($6o9));
};
gregorianZonedDateTime$.plusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusMonths')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusMonths']};};
gregorianZonedDateTime$.plusSeconds=function($6oa){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusSeconds($6oa));
};
gregorianZonedDateTime$.plusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusSeconds')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusSeconds']};};
gregorianZonedDateTime$.plusWeeks=function($6ob){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusWeeks($6ob));
};
gregorianZonedDateTime$.plusWeeks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusWeeks')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusWeeks']};};
gregorianZonedDateTime$.plusYears=function($6oc){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusYears($6oc));
};
gregorianZonedDateTime$.plusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusYears')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusYears']};};
gregorianZonedDateTime$.withDay=function($6od){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withDay($6od));
};
gregorianZonedDateTime$.withDay.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'dayOfMonth',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withDay')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withDay']};};
gregorianZonedDateTime$.withHours=function($6oe){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withHours($6oe));
};
gregorianZonedDateTime$.withHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withHours')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withHours']};};
gregorianZonedDateTime$.withMilliseconds=function($6of){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withMilliseconds($6of));
};
gregorianZonedDateTime$.withMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withMilliseconds')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withMilliseconds']};};
gregorianZonedDateTime$.withMinutes=function($6og){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withMinutes($6og));
};
gregorianZonedDateTime$.withMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withMinutes')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withMinutes']};};
gregorianZonedDateTime$.withMonth=function($6oh){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withMonth($6oh));
};
gregorianZonedDateTime$.withMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withMonth')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withMonth']};};
gregorianZonedDateTime$.withSeconds=function($6oi){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withSeconds($6oi));
};
gregorianZonedDateTime$.withSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withSeconds')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withSeconds']};};
gregorianZonedDateTime$.withYear=function($6oj){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withYear($6oj));
};
gregorianZonedDateTime$.withYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withYear')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withYear']};};
gregorianZonedDateTime$.withWeekOfYear=function($6ok){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withWeekOfYear($6ok));
};
gregorianZonedDateTime$.withWeekOfYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'weekNumber',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withWeekOfYear')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withWeekOfYear']};};
gregorianZonedDateTime$.withDayOfWeek=function($6ol){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withDayOfWeek($6ol));
};
gregorianZonedDateTime$.withDayOfWeek.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:DayOfWeek$base}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withDayOfWeek')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withDayOfWeek']};};
gregorianZonedDateTime$.withDayOfYear=function($6om){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withDayOfYear($6om));
};
gregorianZonedDateTime$.withDayOfYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'dayOfYear',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withDayOfYear')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withDayOfYear']};};
m$1.atr$(gregorianZonedDateTime$,'predecessor',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).predecessor);
},undefined,function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:predecessor')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','predecessor']};});
m$1.atr$(gregorianZonedDateTime$,'successor',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).successor);
},undefined,function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:successor')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','successor']};});
m$1.atr$(gregorianZonedDateTime$,'string',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).string+""+(gregorianZonedDateTime$.timeZone.string);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:string')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','string']};});
gregorianZonedDateTime$.$wgb6s9$6nx=function($6oq){
var gregorianZonedDateTime$=this;
var $6or=(unixTime$chronology().timeFromFixed($6oq.dayOfEra)+$6oq.millisecondsOfDay);
var $6os=($6or-gregorianZonedDateTime$.timeZone.offset(gregorianZonedDateTime$.instant));
return GregorianZonedDateTime$internal(Instant($6os),gregorianZonedDateTime$.timeZone);
};gregorianZonedDateTime$.$wgb6s9$6nx.$crtmm$=function(){return{mod:$CCMM$,$t:{t:GregorianZonedDateTime$internal},ps:[{nm:'resolved',mt:'prm',$t:{t:DateTime}}],$cont:GregorianZonedDateTime$internal,an:function(){return[m$1.doc("Fix [[DateTime]] zone absence.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','adjust$npr8ju']};};
gregorianZonedDateTime$.neighbour=function($6ot){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6nx(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusMilliseconds($6ot));
};
gregorianZonedDateTime$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,d:['ceylon.time.internal','GregorianZonedDateTime','$m','neighbour']};};
gregorianZonedDateTime$.offset=function($6ou){var gregorianZonedDateTime$=this;
return (gregorianZonedDateTime$.instant.millisecondsOfEpoch-$6ou.instant.millisecondsOfEpoch);
};
gregorianZonedDateTime$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:ZoneDateTime$timezone}}],$cont:GregorianZonedDateTime$internal,pa:3,d:['ceylon.time.internal','GregorianZonedDateTime','$m','offset']};};
gregorianZonedDateTime$.toString=function(){return this.string.valueOf();};
})(GregorianZonedDateTime$internal.$$.prototype);
}
return GregorianZonedDateTime$internal;
}
ex$.$init$GregorianZonedDateTime$internal=$init$GregorianZonedDateTime$internal;$init$GregorianZonedDateTime$internal();
function TimeOfDay$internal(millisecondsOfDay,timeOfDay$){
$init$TimeOfDay$internal();
if(timeOfDay$===undefined)timeOfDay$=new TimeOfDay$internal.$$;
timeOfDay$.$wgb6s9$6ov_=millisecondsOfDay;
m$1.$_Object(timeOfDay$);
Time(timeOfDay$);
return timeOfDay$;
}
TimeOfDay$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.$_Object},ps:[{nm:'millisecondsOfDay',mt:'prm',$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("Number of milliseconds since last midnight.")];}}],sts:[{t:Time}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay')];},d:['ceylon.time.internal','TimeOfDay']};};
ex$.TimeOfDay$internal=TimeOfDay$internal;
function $init$TimeOfDay$internal(){
if(TimeOfDay$internal.$$===undefined){
m$1.initTypeProto(TimeOfDay$internal,'ceylon.time.internal::TimeOfDay',m$1.$_Object,$init$Time());
(function(timeOfDay$){
m$1.atr$(timeOfDay$,'millisecondsOfDay',function(){return this.$wgb6s9$6ov_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc("Number of milliseconds since last midnight.")];},d:['ceylon.time.internal','TimeOfDay','$at','millisecondsOfDay']};});
m$1.atr$(timeOfDay$,'hours',function(){
var timeOfDay$=this;
return m$1.i$div(timeOfDay$.millisecondsOfDay,milliseconds$base().perHour);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$at:hours')];},d:['ceylon.time.internal','TimeOfDay','$at','hours']};});
m$1.atr$(timeOfDay$,'minutes',function(){
var timeOfDay$=this;
return m$1.i$div(floorMod$internal$math(timeOfDay$.millisecondsOfDay,milliseconds$base().perHour),milliseconds$base().perMinute);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc("Number of minutes since last full hour.")];},d:['ceylon.time.internal','TimeOfDay','$at','minutes']};});
m$1.atr$(timeOfDay$,'seconds',function(){
var timeOfDay$=this;
return m$1.i$div(floorMod$internal$math(timeOfDay$.millisecondsOfDay,milliseconds$base().perMinute),milliseconds$base().perSecond);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc("Number of seconds since last minute.")];},d:['ceylon.time.internal','TimeOfDay','$at','seconds']};});
m$1.atr$(timeOfDay$,'milliseconds',function(){
var timeOfDay$=this;
return floorMod$internal$math(timeOfDay$.millisecondsOfDay,milliseconds$base().perSecond);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc("Number of milliseconds since last full second.")];},d:['ceylon.time.internal','TimeOfDay','$at','milliseconds']};});
m$1.atr$(timeOfDay$,'secondsOfDay',function(){
var timeOfDay$=this;
return m$1.i$div(timeOfDay$.millisecondsOfDay,milliseconds$base().perSecond);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc("Number of seconds since last midnight.")];},d:['ceylon.time.internal','TimeOfDay','$at','secondsOfDay']};});
m$1.atr$(timeOfDay$,'minutesOfDay',function(){
var timeOfDay$=this;
return m$1.i$div(timeOfDay$.secondsOfDay,seconds$base().perMinute);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc("Number of minutes since last midnight.")];},d:['ceylon.time.internal','TimeOfDay','$at','minutesOfDay']};});
timeOfDay$.compare=function($6p2){
var timeOfDay$=this;
return timeOfDay$.millisecondsOfDay.compare($6p2.millisecondsOfDay);
};timeOfDay$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:Time}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc("Compare two instances of _time of day_.")];},d:['ceylon.time.internal','TimeOfDay','$m','compare']};};
m$1.atr$(timeOfDay$,'predecessor',function(){
var timeOfDay$=this;
return timeOfDay$.minusMilliseconds(1);
},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$at:predecessor')];},d:['ceylon.time.internal','TimeOfDay','$at','predecessor']};});
m$1.atr$(timeOfDay$,'successor',function(){
var timeOfDay$=this;
return timeOfDay$.plusMilliseconds(1);
},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$at:successor')];},d:['ceylon.time.internal','TimeOfDay','$at','successor']};});
m$1.atr$(timeOfDay$,'string',function(){
var timeOfDay$=this;
return timeOfDay$.hours.string.padLeading(2,m$1.Character(48,true))+":"+(timeOfDay$.minutes.string.padLeading(2,m$1.Character(48,true)))+":"+(timeOfDay$.seconds.string.padLeading(2,m$1.Character(48,true)))+"."+(timeOfDay$.milliseconds.string.padLeading(3,m$1.Character(48,true)));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$at:string')];},d:['ceylon.time.internal','TimeOfDay','$at','string']};});
timeOfDay$.plusHours=function($6p6){var timeOfDay$=this;
return timeOfDay$.plusMilliseconds(($6p6*milliseconds$base().perHour));
};
timeOfDay$.plusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:plusHours')];},d:['ceylon.time.internal','TimeOfDay','$m','plusHours']};};
timeOfDay$.minusHours=function($6p7){var timeOfDay$=this;
return timeOfDay$.minusMilliseconds(($6p7*milliseconds$base().perHour));
};
timeOfDay$.minusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:minusHours')];},d:['ceylon.time.internal','TimeOfDay','$m','minusHours']};};
timeOfDay$.plusMinutes=function($6p8){var timeOfDay$=this;
return timeOfDay$.plusMilliseconds(($6p8*milliseconds$base().perMinute));
};
timeOfDay$.plusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:plusMinutes')];},d:['ceylon.time.internal','TimeOfDay','$m','plusMinutes']};};
timeOfDay$.minusMinutes=function($6p9){var timeOfDay$=this;
return timeOfDay$.minusMilliseconds(($6p9*milliseconds$base().perMinute));
};
timeOfDay$.minusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:minusMinutes')];},d:['ceylon.time.internal','TimeOfDay','$m','minusMinutes']};};
timeOfDay$.plusSeconds=function($6pa){var timeOfDay$=this;
return timeOfDay$.plusMilliseconds(($6pa*milliseconds$base().perSecond));
};
timeOfDay$.plusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:plusSeconds')];},d:['ceylon.time.internal','TimeOfDay','$m','plusSeconds']};};
timeOfDay$.minusSeconds=function($6pb){var timeOfDay$=this;
return timeOfDay$.minusMilliseconds(($6pb*milliseconds$base().perSecond));
};
timeOfDay$.minusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:minusSeconds')];},d:['ceylon.time.internal','TimeOfDay','$m','minusSeconds']};};
timeOfDay$.plusMilliseconds=function($6pc){
var timeOfDay$=this;
if(($6pc==(0))){
return timeOfDay$;
}
var $6pd=floorMod$internal$math((timeOfDay$.millisecondsOfDay+$6pc),milliseconds$base().perDay);
return ($6pe=(($6pd==timeOfDay$.millisecondsOfDay)?timeOfDay$:null),m$1.nn$($6pe)?$6pe:TimeOfDay$internal($6pd));
var $6pe;
};timeOfDay$.plusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:plusMilliseconds')];},d:['ceylon.time.internal','TimeOfDay','$m','plusMilliseconds']};};
timeOfDay$.minusMilliseconds=function($6pf){var timeOfDay$=this;
return timeOfDay$.plusMilliseconds((-$6pf));
};
timeOfDay$.minusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:minusMilliseconds')];},d:['ceylon.time.internal','TimeOfDay','$m','minusMilliseconds']};};
timeOfDay$.plus=function($6pg){
var timeOfDay$=this;
var $6ph=((((timeOfDay$.millisecondsOfDay+$6pg.milliseconds)+($6pg.seconds*milliseconds$base().perSecond))+($6pg.minutes*milliseconds$base().perMinute))+($6pg.hours*milliseconds$base().perHour));
var $6pi=floorMod$internal$math($6ph,milliseconds$base().perDay);
return ($6pj=(($6pi==timeOfDay$.millisecondsOfDay)?timeOfDay$:null),m$1.nn$($6pj)?$6pj:TimeOfDay$internal($6pi));
var $6pj;
};timeOfDay$.plus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'period',mt:'prm',$t:{t:ReadableTimePeriod$base}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:plus')];},d:['ceylon.time.internal','TimeOfDay','$m','plus']};};
timeOfDay$.minus=function($6pk){
var timeOfDay$=this;
var $6pl=((((timeOfDay$.millisecondsOfDay-$6pk.milliseconds)-($6pk.seconds*milliseconds$base().perSecond))-($6pk.minutes*milliseconds$base().perMinute))-($6pk.hours*milliseconds$base().perHour));
var $6pm=floorMod$internal$math($6pl,milliseconds$base().perDay);
return ($6pn=(($6pm==timeOfDay$.millisecondsOfDay)?timeOfDay$:null),m$1.nn$($6pn)?$6pn:TimeOfDay$internal($6pm));
var $6pn;
};timeOfDay$.minus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'period',mt:'prm',$t:{t:ReadableTimePeriod$base}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:minus')];},d:['ceylon.time.internal','TimeOfDay','$m','minus']};};
timeOfDay$.withHours=function($6po){
var timeOfDay$=this;
if((timeOfDay$.hours==$6po)){
return timeOfDay$;
}
return time($6po,timeOfDay$.minutes,timeOfDay$.seconds,timeOfDay$.milliseconds);
};timeOfDay$.withHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:withHours')];},d:['ceylon.time.internal','TimeOfDay','$m','withHours']};};
timeOfDay$.withMinutes=function($6pp){
var timeOfDay$=this;
if((timeOfDay$.minutes==$6pp)){
return timeOfDay$;
}
return time(timeOfDay$.hours,$6pp,timeOfDay$.seconds,timeOfDay$.milliseconds);
};timeOfDay$.withMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:withMinutes')];},d:['ceylon.time.internal','TimeOfDay','$m','withMinutes']};};
timeOfDay$.withSeconds=function($6pq){
var timeOfDay$=this;
if((timeOfDay$.seconds==$6pq)){
return timeOfDay$;
}
return time(timeOfDay$.hours,timeOfDay$.minutes,$6pq,timeOfDay$.milliseconds);
};timeOfDay$.withSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:withSeconds')];},d:['ceylon.time.internal','TimeOfDay','$m','withSeconds']};};
timeOfDay$.withMilliseconds=function($6pr){
var timeOfDay$=this;
if((timeOfDay$.milliseconds==$6pr)){
return timeOfDay$;
}
return time(timeOfDay$.hours,timeOfDay$.minutes,timeOfDay$.seconds,$6pr);
};timeOfDay$.withMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:withMilliseconds')];},d:['ceylon.time.internal','TimeOfDay','$m','withMilliseconds']};};
timeOfDay$.periodFrom=function($6ps){
var timeOfDay$=this;
var $6pt=($6pu=(timeOfDay$.smallerThan($6ps)?timeOfDay$:null),m$1.nn$($6pu)?$6pu:$6ps);
var $6pu;
var $6pv=($6pw=(timeOfDay$.smallerThan($6ps)?$6ps:null),m$1.nn$($6pw)?$6pw:timeOfDay$);
var $6pw;
var $6px=($6pv.millisecondsOfDay-$6pt.millisecondsOfDay);
var $6py=m$1.i$div($6px,milliseconds$base().perHour);
$6px=$6px.remainder(milliseconds$base().perHour);
var $6pz=m$1.i$div($6px,milliseconds$base().perMinute);
$6px=$6px.remainder(milliseconds$base().perMinute);
var $6q0=m$1.i$div($6px,milliseconds$base().perSecond);
var $6q1=$6ps.smallerThan(timeOfDay$);
return ($6q2=($6q3=($6q1?$6py:null),m$1.nn$($6q3)?$6q3:(-$6py)),$6q4=($6q5=($6q1?$6pz:null),m$1.nn$($6q5)?$6q5:(-$6pz)),$6q6=($6q7=($6q1?$6q0:null),m$1.nn$($6q7)?$6q7:(-$6q0)),$6q8=($6q9=($6q1?$6px.remainder(milliseconds$base().perSecond):null),m$1.nn$($6q9)?$6q9:(-$6px.remainder(milliseconds$base().perSecond))),Period(undefined,undefined,undefined,$6q2,$6q4,$6q6,$6q8));
var $6q2,$6q3,$6q4,$6q5,$6q6,$6q7,$6q8,$6q9;
};timeOfDay$.periodFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'start',mt:'prm',$t:{t:Time}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:periodFrom')];},d:['ceylon.time.internal','TimeOfDay','$m','periodFrom']};};
timeOfDay$.periodTo=function($6qa){var timeOfDay$=this;
return $6qa.periodFrom(timeOfDay$);
};
timeOfDay$.periodTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'end',mt:'prm',$t:{t:Time}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:periodTo')];},d:['ceylon.time.internal','TimeOfDay','$m','periodTo']};};
timeOfDay$.rangeTo=function($6qb){var timeOfDay$=this;
return TimeRange(timeOfDay$,$6qb);
};
timeOfDay$.rangeTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TimeRange},ps:[{nm:'other',mt:'prm',$t:{t:Time}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:rangeTo')];},d:['ceylon.time.internal','TimeOfDay','$m','rangeTo']};};
timeOfDay$.neighbour=function($6qc){var timeOfDay$=this;
return timeOfDay$.plusMilliseconds($6qc);
};
timeOfDay$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,d:['ceylon.time.internal','TimeOfDay','$m','neighbour']};};
timeOfDay$.offset=function($6qd){var timeOfDay$=this;
return (timeOfDay$.millisecondsOfDay-$6qd.millisecondsOfDay);
};
timeOfDay$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:Time}}],$cont:TimeOfDay$internal,pa:3,d:['ceylon.time.internal','TimeOfDay','$m','offset']};};
timeOfDay$.toString=function(){return this.string.valueOf();};
})(TimeOfDay$internal.$$.prototype);
}
return TimeOfDay$internal;
}
ex$.$init$TimeOfDay$internal=$init$TimeOfDay$internal;$init$TimeOfDay$internal();
function floor$internal$math($6qe){
if((!m$1.$eq$($6qe.fractionalPart,m$1.Float(0.0))&&$6qe.negative)){
return ($6qe.integer-(1));
}
var $6qf=$6qe.integer;
return $6qf;
}
ex$.floor$internal$math=floor$internal$math;
floor$internal$math.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Float}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal.math:floor')];},d:['ceylon.time.internal.math','floor']};};
function floorDiv$internal$math($6qg,$6qh){return floor$internal$math(m$1.f$div($6qg.$_float,$6qh.$_float));
};
floorDiv$internal$math.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal.math:floorDiv')];},d:['ceylon.time.internal.math','floorDiv']};};
ex$.floorDiv$internal$math=floorDiv$internal$math;
function round$internal$math($6qi){return floor$internal$math(m$1.Float($6qi+(0.5)));
};
round$internal$math.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'f',mt:'prm',$t:{t:m$1.Float}}],pa:1,an:function(){return[m$1.doc("Returns nearest integer to x")];},d:['ceylon.time.internal.math','round']};};
ex$.round$internal$math=round$internal$math;
function floorMod$internal$math($6qj,$6qk){
var $6ql=$6qj.$_float;
var $6qm=$6qk.$_float;
return m$1.Float($6ql-m$1.Float($6qm*floor$internal$math(m$1.f$div($6ql,$6qm)))).integer;
}
ex$.floorMod$internal$math=floorMod$internal$math;
floorMod$internal$math.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal.math:floorMod')];},d:['ceylon.time.internal.math','floorMod']};};
function adjustedMod$internal$math($6qn,$6qo){
var $6qp=floorMod$internal$math($6qn,$6qo);
if(($6qp==(0))){
return $6qo;
}
return $6qp;
}
ex$.adjustedMod$internal$math=adjustedMod$internal$math;
adjustedMod$internal$math.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal.math:adjustedMod')];},d:['ceylon.time.internal.math','adjustedMod']};};
function intersect$internal($6qq,$6qr,$6qs,$6qt,$rshjet$){
return ($6qq.notLargerThan($6qt)&&$6qr.notSmallerThan($6qs));
}
ex$.intersect$internal=intersect$internal;
intersect$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'start',mt:'prm',$t:'Value$intersect'},{nm:'end',mt:'prm',$t:'Value$intersect'},{nm:'otherStart',mt:'prm',$t:'Value$intersect'},{nm:'otherEnd',mt:'prm',$t:'Value$intersect'}],tp:{Value$intersect:{sts:[{t:m$1.Comparable,a:{Other$Comparable:'Value$intersect'}}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:intersect')];},d:['ceylon.time.internal','intersect']};};
function overlap$internal($6qu,$6qv,$l6u1r1$){
var $6qw=m$1.$_sort(m$1.concatenate(m$1.$arr$sa$([$6qu,$6qv],m$1.mtt$([$l6u1r1$.Value$overlap,$l6u1r1$.Value$overlap])),{Element$concatenate:$l6u1r1$.Value$overlap}),{Element$sort:$l6u1r1$.Value$overlap}).measure(1,2);
if((m$1.span(($6qx=$6qu,$6qx.$_get(0)),$6qx.$_get(1),{Element$span:$l6u1r1$.Value$overlap}).containsEvery($6qw)&&m$1.span(($6qy=$6qv,$6qy.$_get(0)),$6qy.$_get(1),{Element$span:$l6u1r1$.Value$overlap}).containsEvery($6qw))){
var $6qz;
m$1.asrt$((m$1.nn$(($6qz=$6qw.first))),"Assertion failed: "+"\n\tviolated exists start = ordered.first\n\tat utils.ceylon (21:14-21:43)",'21:8-21:44','utils.ceylon');
var $6r0;
m$1.asrt$((m$1.nn$(($6r0=$6qw.last))),"Assertion failed: "+"\n\tviolated exists end = ordered.last\n\tat utils.ceylon (22:14-22:40)",'22:8-22:41','utils.ceylon');
return m$1.tpl$([$6qz,$6r0]);
}
return m$1.empty();
}
ex$.overlap$internal=overlap$internal;
overlap$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:'T',l:['Value$overlap','Value$overlap']},{t:m$1.Empty}]},ps:[{nm:'first',mt:'prm',$t:{t:'T',l:['Value$overlap','Value$overlap']}},{nm:'second',mt:'prm',$t:{t:'T',l:['Value$overlap','Value$overlap']}}],tp:{Value$overlap:{sts:[{t:m$1.Enumerable,a:{Other$Enumerable:'Value$overlap'}},{t:m$1.Comparable,a:{Other$Comparable:'Value$overlap'}}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:overlap')];},d:['ceylon.time.internal','overlap']};};
function gap$internal($6r1,$6r2,$2l6pxq$){
var $6r3=m$1.$_sort(m$1.concatenate(m$1.$arr$sa$([$6r1,$6r2],m$1.mtt$([$2l6pxq$.Value$gap,$2l6pxq$.Value$gap])),{Element$concatenate:$2l6pxq$.Value$gap}),{Element$sort:$2l6pxq$.Value$gap}).measure(1,2);
if((m$1.span(($6r4=$6r1,$6r4.$_get(0)),$6r4.$_get(1),{Element$span:$2l6pxq$.Value$gap}).containsEvery($6r3)&&m$1.span(($6r5=$6r2,$6r5.$_get(0)),$6r5.$_get(1),{Element$span:$2l6pxq$.Value$gap}).containsEvery($6r3))){
return m$1.empty();
}
var $6r6;
m$1.asrt$((m$1.nn$(($6r6=$6r3.first))),"Assertion failed: "+"\n\tviolated exists start = ordered.first\n\tat utils.ceylon (49:10-49:39)",'49:4-49:40','utils.ceylon');
var $6r7;
m$1.asrt$((m$1.nn$(($6r7=$6r3.last))),"Assertion failed: "+"\n\tviolated exists end = ordered.last\n\tat utils.ceylon (50:10-50:36)",'50:4-50:37','utils.ceylon');
return m$1.tpl$([$6r6,$6r7]);
}
ex$.gap$internal=gap$internal;
gap$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:'T',l:['Value$gap','Value$gap']},{t:m$1.Empty}]},ps:[{nm:'first',mt:'prm',$t:{t:'T',l:['Value$gap','Value$gap']}},{nm:'second',mt:'prm',$t:{t:'T',l:['Value$gap','Value$gap']}}],tp:{Value$gap:{sts:[{t:m$1.Comparable,a:{Other$Comparable:'Value$gap'}},{t:m$1.Enumerable,a:{Other$Enumerable:'Value$gap'}}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:gap')];},d:['ceylon.time.internal','gap']};};
function parseDate$iso8601($6r8){
var $6r9=$6r8.indexesWhere(m$1.jsc$2(($6ra=m$1.Character(45,true),m$1.jsc$3($6ra,$6ra.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{})).sequence();
var $6ra;
if(($6r8.size==(10))){
var $6rb,$6rc,$6rd;
if(m$1.$eq$($6r9,m$1.tpl$([4,7]))&&m$1.nn$(($6rb=parseYear$iso8601($6r8.span(0,3))))&&m$1.nn$(($6rc=parseMonth$iso8601($6r8.span(5,6))))&&m$1.nn$(($6rd=parseDayOfMonth$iso8601($6r8.span(8,9),$6rb,$6rc)))){
return date($6rb,$6rc,$6rd);
}
else{
var $6re,$6rf,$6rg,$6rh;
if(m$1.$eq$($6r9,m$1.tpl$([4,8]))&&m$1.nn$(($6re=$6r8.$_get(5)))&&m$1.$eq$($6re,m$1.Character(87,true))&&m$1.nn$(($6rf=parseYear$iso8601($6r8.span(0,3))))&&m$1.nn$(($6rg=parseWeek$iso8601($6r8.span(6,7))))&&m$1.nn$(($6rh=parseDay$iso8601($6r8.span(9,9))))){
return date($6rf,1,1).withWeekOfYear($6rg).withDayOfWeek(dayOfWeek$base($6rh));
}
}
}
else{
if(($6r8.size==(8))){
var $6ri;
if(m$1.ne$(($6ri=$6r9))){
var $6rj,$6rk;
if(m$1.$eq$($6ri,m$1.tpl$([4]))&&m$1.nn$(($6rj=parseYear$iso8601($6r8.span(0,3))))&&m$1.nn$(($6rk=parseDay$iso8601($6r8.span(5,7))))){
return date($6rj,1,1).withDayOfYear($6rk);
}
}
else{
var $6rl,$6rm,$6rn,$6ro;
if(m$1.nn$(($6rl=$6r8.$_get(4)))&&m$1.$eq$($6rl,m$1.Character(87,true))&&m$1.nn$(($6rm=parseYear$iso8601($6r8.span(0,3))))&&m$1.nn$(($6rn=parseWeek$iso8601($6r8.span(5,6))))&&m$1.nn$(($6ro=parseDay$iso8601($6r8.span(7,7))))){
return date($6rm,1,1).withWeekOfYear($6rn).withDayOfWeek(dayOfWeek$base($6ro));
}
else{
var $6rp,$6rq,$6rr;
if(m$1.nn$(($6rp=parseYear$iso8601($6r8.span(0,3))))&&m$1.nn$(($6rq=parseMonth$iso8601($6r8.span(4,5))))&&m$1.nn$(($6rr=parseDay$iso8601($6r8.span(6,7))))){
return date($6rp,$6rq,$6rr);
}
}
}
}
else{
var $6rs,$6rt;
if(($6r8.size==(7))&&$6r9.empty&&m$1.nn$(($6rs=parseYear$iso8601($6r8.span(0,3))))&&m$1.nn$(($6rt=parseDay$iso8601($6r8.span(4,6))))){
return date($6rs,1,1).withDayOfYear($6rt);
}
}
}
return null;
}
ex$.parseDate$iso8601=parseDate$iso8601;
parseDate$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$_Date}]},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.iso8601:parseDate')];},d:['ceylon.time.iso8601','parseDate']};};
function parseInteger$iso8601($6ru){return function(){var $6rv;
if(m$1.is$(($6rv=m$1.Integer.$st$.parse($6ru)),{t:m$1.Integer}))return $6rv;else return null}();
};
parseInteger$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.iso8601','parseInteger']};};
function parseWeek$iso8601($6rw){return parseInteger$iso8601($6rw);
};
parseWeek$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.iso8601','parseWeek']};};
function parseDay$iso8601($6rx){return parseInteger$iso8601($6rx);
};
parseDay$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.iso8601','parseDay']};};
function parseYear$iso8601($6ry){return parseInteger$iso8601($6ry);
};
parseYear$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.iso8601','parseYear']};};
function parseMonth$iso8601($6rz){return function(){var $6s0,$6s1;
if(m$1.nn$(($6s0=parseInteger$iso8601($6rz)))&&m$1.nn$(($6s1=months$base().$_valueOf($6s0))))return $6s1;else return null}();
};
parseMonth$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Month$base}]},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.iso8601','parseMonth']};};
function parseDayOfMonth$iso8601($6s2,$6s3,$6s4){return function(){var $6s5;
if(m$1.nn$(($6s5=parseInteger$iso8601($6s2)))&&($6s6=$6s5,$6s6.notSmallerThan((1))&&$6s6.notLargerThan($6s4.numberOfDays())))return $6s5;else return null}();
};
parseDayOfMonth$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}},{nm:'year',mt:'prm',$t:{t:m$1.Integer}},{nm:'month',mt:'prm',$t:{t:Month$base}}],d:['ceylon.time.iso8601','parseDayOfMonth']};};
function parseDateTime$iso8601($6s7){
var $6s8;
if(m$1.nn$(($6s8=$6s7.firstOccurrence(m$1.Character(84,true))))){
var $6s9,$6sa;
if(m$1.nn$(($6s9=parseDate$iso8601($6s7.span(0,($6s8-(1))))))&&m$1.nn$(($6sa=parseTimeComponents$iso8601($6s7.spanFrom(($6s8+(1))))))){
var $6sb;
if(m$1.nn$(($6sb=convertToTime$iso8601($6sa)))){
if(($6sa.$_get(0)==(24))){
return createDateTime$iso8601($6s9.successor,$6sb);
}
else{
return createDateTime$iso8601($6s9,$6sb);
}
}
}
}
return null;
}
ex$.parseDateTime$iso8601=parseDateTime$iso8601;
parseDateTime$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DateTime}]},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.iso8601:parseDateTime'),m$1.see(m$1.$arr$sa$([m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.time.iso8601'),parseDate$iso8601),m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.time.iso8601'),parseTime$iso8601)],{t:m$1.FunctionDeclaration$meta$declaration}))];},d:['ceylon.time.iso8601','parseDateTime']};};
function createDateTime$iso8601($6sc,$6sd){return ($6se=$6sc.year,$6sf=$6sc.month,$6sg=$6sc.day,$6sh=$6sd.hours,$6si=$6sd.minutes,$6sj=$6sd.seconds,$6sk=$6sd.milliseconds,dateTime($6se,$6sf,$6sg,$6sh,$6si,$6sj,$6sk));
var $6se,$6sf,$6sg,$6sh,$6si,$6sj,$6sk;
};
createDateTime$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'date',mt:'prm',$t:{t:$_Date}},{nm:'time',mt:'prm',$t:{t:Time}}],d:['ceylon.time.iso8601','createDateTime']};};
function State$iso8601(){var $6sl={t:m$1.Integer};$6sl.$crtmm$=function(){return{mod:$CCMM$,d:['ceylon.time.iso8601','State']};};return $6sl;}
function parsePeriod$iso8601($6sm){
var $6sn;
if(m$1.nn$(($6sn=$6sm.first))&&m$1.$eq$($6sn,m$1.Character(80,true))&&!$6sm.rest.empty){
var $6so=zero();
var $6sp=(0);
var $6sq=(0);
var $6ss;for(var $6sr=$6sm.rest.indexed.iterator();($6ss=$6sr.next())!==m$1.finished();){
var $6st=$6ss.key,$6su=$6ss.item;
if($6su.digit&&($6sq<(7))&&!m$1.$eq$($6sq,(3))){
$6sp=(($6sp*(10))+($6su.integer-m$1.Character(48,true).integer));
continue;
}
if(m$1.$eq$($6su,m$1.Character(87,true))&&($6sq<(1))){
$6so=$6so.withDays(((7)*$6sp));
$6sp=(0);
$6sq=(7);
continue;
}
if(m$1.$eq$($6su,m$1.Character(89,true))&&($6sq<(1))){
$6so=$6so.withYears($6sp);
$6sp=(0);
$6sq=(1);
continue;
}
if(m$1.$eq$($6su,m$1.Character(77,true))&&($6sq<(2))){
$6so=$6so.withMonths($6sp);
$6sp=(0);
$6sq=(2);
continue;
}
if(m$1.$eq$($6su,m$1.Character(68,true))&&($6sq<(3))){
$6so=$6so.withDays($6sp);
$6sp=(0);
$6sq=(3);
continue;
}
if(m$1.$eq$($6su,m$1.Character(84,true))&&($6sq<(4))){
if(!m$1.$eq$($6sp,(0))){
return null;
}
$6sq=(4);
continue;
}
if(m$1.$eq$($6su,m$1.Character(72,true))&&($6sq==(4))){
$6so=$6so.withHours($6sp);
$6sp=(0);
$6sq=(5);
continue;
}
if(m$1.$eq$($6su,m$1.Character(77,true))&&($6sv=$6sq,$6sv.notSmallerThan((4))&&$6sv.smallerThan((6)))){
$6so=$6so.withMinutes($6sp);
$6sp=(0);
$6sq=(6);
continue;
}
if(m$1.$eq$($6su,m$1.Character(83,true))&&($6sw=$6sq,$6sw.notSmallerThan((4))&&$6sw.smallerThan((7)))){
$6so=$6so.withSeconds($6sp);
$6sp=(0);
$6sq=(7);
continue;
}
return null;
}
if(($6sp==(0))){
return $6so;
}
}
return null;
}
ex$.parsePeriod$iso8601=parsePeriod$iso8601;
parsePeriod$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Period}]},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.time.iso8601','parsePeriod']};};
function parseTime$iso8601($6sx){return convertToTime$iso8601(parseTimeComponents$iso8601($6sx));
};
parseTime$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Time}]},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.iso8601:parseTime')];},d:['ceylon.time.iso8601','parseTime']};};
ex$.parseTime$iso8601=parseTime$iso8601;
function convertToTime$iso8601($6sy){
var $6sz,$6t0,$6t1,$6t2;
if(function($6t3){if(!m$1.nn$($6t3))return false;return($6t2=$6t3.$_get(0),$6t1=$6t3.$_get(1),$6sz=$6t3.$_get(2),$6t0=$6t3.$_get(3),true);}($6sy)){
if(m$1.$eq$(m$1.tpl$([24,0,0,0]),m$1.tpl$([$6t2,$6t1,$6sz,$6t0]))){
return time(0,0);
}
if(($6t4=$6t2,$6t4.notSmallerThan((0))&&$6t4.notLargerThan((23)))&&($6t5=$6t1,$6t5.notSmallerThan((0))&&$6t5.notLargerThan((59)))&&($6t6=$6sz,$6t6.notSmallerThan((0))&&$6t6.notLargerThan((59)))&&($6t7=$6t0,$6t7.notSmallerThan((0))&&$6t7.notLargerThan((999)))){
return time($6t2,$6t1,$6sz,$6t0);
}
}
return null;
};convertToTime$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Time}]},ps:[{nm:'timeComponents',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]}]}}],d:['ceylon.time.iso8601','convertToTime']};};
function parseTimeComponents$iso8601($6t8){
var $6t9=function($6ta,$6tb){return ($6tb.empty?(0):function(){var $6tc;
if(m$1.is$(($6tc=m$1.Float.$st$.parse("0.".plus($6tb))),{t:m$1.Float}))return m$1.Float($6ta*$6tc).integer;else return null}());
};
$6t9.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Null}]},ps:[{nm:'magnitude',mt:'prm',$t:{t:m$1.Integer}},{nm:'fractionPart',mt:'prm',$t:{t:m$1.$_String}}],$cont:parseTimeComponents$iso8601,d:['ceylon.time.iso8601','parseTimeComponents','$m','calculateFraction$k42vha']};};
var $6td=function($6te){return ($6te.empty?(0):(($6te.size>(3))?null:function(){var $6tf;
if(m$1.is$(($6tf=m$1.Integer.$st$.parse($6te)),{t:m$1.Integer}))return ($6tf*(10).power(((3)-$6te.size)));else return null}()));
};
$6td.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Null}]},ps:[{nm:'fractionPart',mt:'prm',$t:{t:m$1.$_String}}],$cont:parseTimeComponents$iso8601,d:['ceylon.time.iso8601','parseTimeComponents','$m','parseMilliseconds$4qjv03']};};
var $6tg=function($6th,$6ti){return (($6ti==(0))?m$1.tpl$([$6th,0,0,0]):function(){var $6tj=m$1.i$div($6ti,milliseconds$base().perMinute),$6tk=m$1.i$div($6ti.remainder(milliseconds$base().perMinute),milliseconds$base().perSecond),$6tl=(($6ti-($6tk*milliseconds$base().perSecond))-($6tj*milliseconds$base().perMinute));return m$1.tpl$([$6th,$6tj,$6tk,$6tl]);
}());
};
$6tg.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]},ps:[{nm:'hh',mt:'prm',$t:{t:m$1.Integer}},{nm:'ms',mt:'prm',$t:{t:m$1.Integer}}],$cont:parseTimeComponents$iso8601,d:['ceylon.time.iso8601','parseTimeComponents','$m','fractionalHours$eqop0o']};};
var $6tm=function($6tn,$6to,$6tp){return (($6tp==(0))?m$1.tpl$([$6tn,$6to,0,0]):function(){var $6tq=m$1.i$div($6tp,milliseconds$base().perSecond),$6tr=$6tp.remainder(milliseconds$base().perSecond);return m$1.tpl$([$6tn,$6to,$6tq,$6tr]);
}());
};
$6tm.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]},ps:[{nm:'hh',mt:'prm',$t:{t:m$1.Integer}},{nm:'mm',mt:'prm',$t:{t:m$1.Integer}},{nm:'ms',mt:'prm',$t:{t:m$1.Integer}}],$cont:parseTimeComponents$iso8601,d:['ceylon.time.iso8601','parseTimeComponents','$m','fractionalMinutes$n7s8ug']};};
var $6ts;
var $6tt;
var $6tu;
if(m$1.nn$(($6tu=$6t8.firstIndexWhere(m$1.jsc$2((function($6tv){return m$1.$cnt$(m$1.tpl$([m$1.Character(46,true),m$1.Character(44,true)]),$6tv);
}),[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:m$1.Character}])}))))){
$6ts=$6t8.spanTo(($6tu-(1)));
$6tt=$6t8.spanFrom(($6tu+(1)));
}
else{
$6ts=$6t8;
$6tt="";
}
if(($6ts.size==(2))){
var $6tw,$6tx;
if(m$1.is$(($6tw=m$1.Integer.$st$.parse($6ts)),{t:m$1.Integer})&&m$1.nn$(($6tx=$6t9(milliseconds$base().perHour,$6tt)))){
return $6tg($6tw,$6tx);
}
}
else{
if(($6ts.size==(8))){
if($6ts.occursAt(2,m$1.Character(58,true))&&$6ts.occursAt(5,m$1.Character(58,true))){
var $6ty,$6tz,$6u0,$6u1;
if(m$1.is$(($6ty=m$1.Integer.$st$.parse($6ts.span(0,1))),{t:m$1.Integer})&&m$1.is$(($6tz=m$1.Integer.$st$.parse($6ts.span(3,4))),{t:m$1.Integer})&&m$1.is$(($6u0=m$1.Integer.$st$.parse($6ts.span(6,7))),{t:m$1.Integer})&&m$1.nn$(($6u1=$6td($6tt)))){
return m$1.tpl$([$6ty,$6tz,$6u0,$6u1]);
}
}
}
else{
if(($6ts.size==(6))){
var $6u2,$6u3,$6u4,$6u5;
if(m$1.is$(($6u2=m$1.Integer.$st$.parse($6ts.span(0,1))),{t:m$1.Integer})&&m$1.is$(($6u3=m$1.Integer.$st$.parse($6ts.span(2,3))),{t:m$1.Integer})&&m$1.is$(($6u4=m$1.Integer.$st$.parse($6ts.span(4,5))),{t:m$1.Integer})&&m$1.nn$(($6u5=$6td($6tt)))){
return m$1.tpl$([$6u2,$6u3,$6u4,$6u5]);
}
}
else{
if(($6ts.size==(5))){
if($6ts.occursAt(2,m$1.Character(58,true))){
var $6u6,$6u7,$6u8;
if(m$1.is$(($6u6=m$1.Integer.$st$.parse($6ts.span(0,1))),{t:m$1.Integer})&&m$1.is$(($6u7=m$1.Integer.$st$.parse($6ts.span(3,4))),{t:m$1.Integer})&&m$1.nn$(($6u8=$6t9(milliseconds$base().perMinute,$6tt)))){
return $6tm($6u6,$6u7,$6u8);
}
}
}
else{
if(($6ts.size==(4))){
var $6u9,$6ua,$6ub;
if(m$1.is$(($6u9=m$1.Integer.$st$.parse($6ts.span(0,1))),{t:m$1.Integer})&&m$1.is$(($6ua=m$1.Integer.$st$.parse($6ts.span(2,3))),{t:m$1.Integer})&&m$1.nn$(($6ub=$6t9(milliseconds$base().perMinute,$6tt)))){
return $6tm($6u9,$6ua,$6ub);
}
}
}
}
}
}
return null;
};parseTimeComponents$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]}]},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.iso8601','parseTimeComponents']};};
function parseTimeZone$iso8601($6uc){
if(m$1.$eq$($6uc,"Z")){
return timeZone$timezone().utc;
}
var $6ud=function($6ue){if($6ue!==null&&$6ue.equals(m$1.Character(43,true)))return (1);else if($6ue!==null&&$6ue.equals(m$1.Character(45,true)))return (-1);else return null}($6uc.$_get(0));
var $6uf;
if(m$1.nn$(($6uf=$6ud))){
var $6ug=(function(){var $6uh=$6uf;var $6ui=function($6uj,$6uk){return function(){var $6ul=(($6uj*milliseconds$base().perHour)+($6uk*milliseconds$base().perMinute));return (($6uh==(-1))&&($6ul==(0))?null:OffsetTimeZone$timezone(($6uh*$6ul)));
}();
};
$6ui.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:OffsetTimeZone$timezone}]},ps:[{nm:'hh',mt:'prm',$t:{t:m$1.Integer}},{nm:'mm',mt:'prm',$t:{t:m$1.Integer}}],$cont:parseTimeZone$iso8601,d:['ceylon.time.iso8601','parseTimeZone','$m','offsetTimeZone$mf7brt']};};
var $6um=$6uc.spanFrom(1);
var $6un,$6uo;
if(($6um.size==(5))&&m$1.is$(($6un=m$1.Integer.$st$.parse($6um.spanTo(1))),{t:m$1.Integer})&&m$1.is$(($6uo=m$1.Integer.$st$.parse($6um.spanFrom(3))),{t:m$1.Integer})){
return $6ui($6un,$6uo);
}
else{
var $6up,$6uq;
if(($6um.size==(4))&&m$1.is$(($6up=m$1.Integer.$st$.parse($6um.spanTo(1))),{t:m$1.Integer})&&m$1.is$(($6uq=m$1.Integer.$st$.parse($6um.spanFrom(2))),{t:m$1.Integer})){
return $6ui($6up,$6uq);
}
else{
var $6ur;
if(($6um.size==(2))&&m$1.is$(($6ur=m$1.Integer.$st$.parse($6um.spanTo(1))),{t:m$1.Integer})){
return $6ui($6ur,0);
}
}
}
}());if($6ug!==undefined){return $6ug;}
}
return null;
}
ex$.parseTimeZone$iso8601=parseTimeZone$iso8601;
parseTimeZone$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TimeZone$timezone}]},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.iso8601:parseTimeZone')];},d:['ceylon.time.iso8601','parseTimeZone']};};
function parseZoneDateTime$iso8601($6us){
var $6ut;
if(m$1.nn$(($6ut=$6us.last))&&m$1.$eq$($6ut,m$1.Character(90,true))){
var $6uu;
if(m$1.nn$(($6uu=parseDateTime$iso8601($6us.initial(($6us.size-(1))))))){
return $6uu.instant(timeZone$timezone().utc).zoneDateTime(timeZone$timezone().utc);
}
}
else{
var $6uv;
if(m$1.nn$(($6uv=$6us.lastIndexWhere(m$1.jsc$2((function($6uw){return m$1.$cnt$(m$1.tpl$([m$1.Character(43,true),m$1.Character(45,true)]),$6uw);
}),[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:m$1.Character}])}))))){
var $6ux,$6uy;
if(m$1.is$(($6ux=timeZone$timezone().parse($6us.spanFrom($6uv))),{t:TimeZone$timezone})&&m$1.nn$(($6uy=parseDateTime$iso8601($6us.spanTo(($6uv-(1))))))){
return $6uy.instant($6ux).zoneDateTime($6ux);
}
}
}
return null;
}
ex$.parseZoneDateTime$iso8601=parseZoneDateTime$iso8601;
parseZoneDateTime$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:ZoneDateTime$timezone}]},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.iso8601:parseZoneDateTime'),m$1.see(m$1.$arr$sa$([m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.time.iso8601'),parseDate$iso8601),m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.time.iso8601'),parseTime$iso8601),m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.time.iso8601'),parseTimeZone$iso8601)],{t:m$1.FunctionDeclaration$meta$declaration}))];},d:['ceylon.time.iso8601','parseZoneDateTime']};};
function ReadableTimeZone$timezone(readableTimeZone$){
}
ReadableTimeZone$timezone.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:ReadableTimeZone')];},d:['ceylon.time.timezone','ReadableTimeZone']};};
ex$.ReadableTimeZone$timezone=ReadableTimeZone$timezone;
function $init$ReadableTimeZone$timezone(){
if(ReadableTimeZone$timezone.$$===undefined){
m$1.initTypeProtoI(ReadableTimeZone$timezone,'ceylon.time.timezone::ReadableTimeZone');
(function(readableTimeZone$){
readableTimeZone$.$prop$getTimeZone={$crtmm$:function(){return{mod:$CCMM$,$t:{t:TimeZone$timezone},$cont:ReadableTimeZone$timezone,pa:5,an:function(){return[m$1.doc("Time zone value.")];},d:['ceylon.time.timezone','ReadableTimeZone','$at','timeZone']};}};
readableTimeZone$.toString=function(){return this.string.valueOf();};
})(ReadableTimeZone$timezone.$$.prototype);
}
return ReadableTimeZone$timezone;
}
ex$.$init$ReadableTimeZone$timezone=$init$ReadableTimeZone$timezone;$init$ReadableTimeZone$timezone();
function ReadableZoneDateTime$timezone(readableZoneDateTime$){
ReadableDate$base(readableZoneDateTime$);
ReadableTime$base(readableZoneDateTime$);
ReadableTimeZone$timezone(readableZoneDateTime$);
}
ReadableZoneDateTime$timezone.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableDate$base},{t:ReadableTime$base},{t:ReadableTimeZone$timezone}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:ReadableZoneDateTime')];},d:['ceylon.time.timezone','ReadableZoneDateTime']};};
ex$.ReadableZoneDateTime$timezone=ReadableZoneDateTime$timezone;
function $init$ReadableZoneDateTime$timezone(){
if(ReadableZoneDateTime$timezone.$$===undefined){
m$1.initTypeProtoI(ReadableZoneDateTime$timezone,'ceylon.time.timezone::ReadableZoneDateTime',$init$ReadableDate$base(),$init$ReadableTime$base(),$init$ReadableTimeZone$timezone());
(function(readableZoneDateTime$){
readableZoneDateTime$.toString=function(){return this.string.valueOf();};
})(ReadableZoneDateTime$timezone.$$.prototype);
}
return ReadableZoneDateTime$timezone;
}
ex$.$init$ReadableZoneDateTime$timezone=$init$ReadableZoneDateTime$timezone;$init$ReadableZoneDateTime$timezone();
function TimeZone$timezone(timeZone$){
}
TimeZone$timezone.$crtmm$=function(){return{mod:$CCMM$,of:[{t:OffsetTimeZone$timezone},{t:RuleBasedTimezone$timezone}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:TimeZone')];},d:['ceylon.time.timezone','TimeZone']};};
ex$.TimeZone$timezone=TimeZone$timezone;
function $init$TimeZone$timezone(){
if(TimeZone$timezone.$$===undefined){
m$1.initTypeProtoI(TimeZone$timezone,'ceylon.time.timezone::TimeZone');
(function(timeZone$){
timeZone$.offset={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'instant',mt:'prm',$t:{t:Instant}}],$cont:TimeZone$timezone,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:TimeZone:$m:offset')];},d:['ceylon.time.timezone','TimeZone','$m','offset']};}};timeZone$.toString=function(){return this.string.valueOf();};
})(TimeZone$timezone.$$.prototype);
}
return TimeZone$timezone;
}
ex$.$init$TimeZone$timezone=$init$TimeZone$timezone;$init$TimeZone$timezone();
function OffsetTimeZone$timezone(offsetMilliseconds,offsetTimeZone$){
$init$OffsetTimeZone$timezone();
if(offsetTimeZone$===undefined)offsetTimeZone$=new OffsetTimeZone$timezone.$$;
offsetTimeZone$.offsetMilliseconds_=offsetMilliseconds;
TimeZone$timezone(offsetTimeZone$);
return offsetTimeZone$;
}
OffsetTimeZone$timezone.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'offsetMilliseconds',mt:'prm',$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:OffsetTimeZone:$at:offsetMilliseconds')];}}],sts:[{t:TimeZone$timezone}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:OffsetTimeZone')];},d:['ceylon.time.timezone','OffsetTimeZone']};};
ex$.OffsetTimeZone$timezone=OffsetTimeZone$timezone;
function $init$OffsetTimeZone$timezone(){
if(OffsetTimeZone$timezone.$$===undefined){
m$1.initTypeProto(OffsetTimeZone$timezone,'ceylon.time.timezone::OffsetTimeZone',m$1.Basic,$init$TimeZone$timezone());
(function(offsetTimeZone$){
m$1.atr$(offsetTimeZone$,'offsetMilliseconds',function(){return this.offsetMilliseconds_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:OffsetTimeZone$timezone,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:OffsetTimeZone:$at:offsetMilliseconds')];},d:['ceylon.time.timezone','OffsetTimeZone','$at','offsetMilliseconds']};});
offsetTimeZone$.offset=function($6uz){var offsetTimeZone$=this;
return offsetTimeZone$.offsetMilliseconds;
};
offsetTimeZone$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'instant',mt:'prm',$t:{t:Instant}}],$cont:OffsetTimeZone$timezone,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:OffsetTimeZone:$m:offset')];},d:['ceylon.time.timezone','OffsetTimeZone','$m','offset']};};
offsetTimeZone$.equals=function($6v0){
var offsetTimeZone$=this;
var $6v1;
if(m$1.is$(($6v1=$6v0),{t:OffsetTimeZone$timezone})){
return (offsetTimeZone$.offsetMilliseconds==$6v1.offsetMilliseconds);
}
function $6v2(){return $6v0;}
return false;
};offsetTimeZone$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:OffsetTimeZone$timezone,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:OffsetTimeZone:$m:equals')];},d:['ceylon.time.timezone','OffsetTimeZone','$m','equals']};};
m$1.atr$(offsetTimeZone$,'hash',function(){
var offsetTimeZone$=this;
var $6v3=(31);
var $6v4=(7);
return (($6v3*$6v4)+offsetTimeZone$.offsetMilliseconds.hash);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:OffsetTimeZone$timezone,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:OffsetTimeZone:$at:hash')];},d:['ceylon.time.timezone','OffsetTimeZone','$at','hash']};});m$1.atr$(offsetTimeZone$,'string',function(){
var offsetTimeZone$=this;
var $6v5=m$1.i$div(offsetTimeZone$.offsetMilliseconds.magnitude,milliseconds$base().perHour).string.padLeading(2,m$1.Character(48,true));
var $6v6=m$1.i$div(offsetTimeZone$.offsetMilliseconds.magnitude.remainder(milliseconds$base().perHour),milliseconds$base().perMinute).string.padLeading(2,m$1.Character(48,true));
if((offsetTimeZone$.offsetMilliseconds>=(0))){
return "+"+($6v5)+":"+($6v6);
}
else{
return "-"+($6v5)+":"+($6v6);
}
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:OffsetTimeZone$timezone,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:OffsetTimeZone:$at:string')];},d:['ceylon.time.timezone','OffsetTimeZone','$at','string']};});offsetTimeZone$.toString=function(){return this.string.valueOf();};
})(OffsetTimeZone$timezone.$$.prototype);
}
return OffsetTimeZone$timezone;
}
ex$.$init$OffsetTimeZone$timezone=$init$OffsetTimeZone$timezone;$init$OffsetTimeZone$timezone();
function RuleBasedTimezone$timezone(ruleBasedTimezone$){
TimeZone$timezone(ruleBasedTimezone$);
}
RuleBasedTimezone$timezone.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:TimeZone$timezone}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:RuleBasedTimezone')];},d:['ceylon.time.timezone','RuleBasedTimezone']};};
ex$.RuleBasedTimezone$timezone=RuleBasedTimezone$timezone;
function $init$RuleBasedTimezone$timezone(){
if(RuleBasedTimezone$timezone.$$===undefined){
m$1.initTypeProtoI(RuleBasedTimezone$timezone,'ceylon.time.timezone::RuleBasedTimezone',$init$TimeZone$timezone());
(function(ruleBasedTimezone$){
ruleBasedTimezone$.toString=function(){return this.string.valueOf();};
})(RuleBasedTimezone$timezone.$$.prototype);
}
return RuleBasedTimezone$timezone;
}
ex$.$init$RuleBasedTimezone$timezone=$init$RuleBasedTimezone$timezone;$init$RuleBasedTimezone$timezone();
function $6v7$timezone(){
var timeZone$=new $6v7$timezone.$$;timeZone$.$wgb6s9$6v9_=timeZone$.$wgb6s9$6va();
timeZone$.$wgb6s9$6vb_=timeZone$.$wgb6s9$6vc();
return timeZone$;
};$6v7$timezone.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},d:['ceylon.time.timezone','timeZone']};};
function $init$timeZone$timezone(){
if($6v7$timezone.$$===undefined){
m$1.initTypeProto($6v7$timezone,'ceylon.time.timezone::timeZone',m$1.Basic);
(function(timeZone$){
function $wgb6s9$6va(){
var timeZone$=this;
var system$timeZone$=new this.$wgb6s9$6va.$$;system$timeZone$.outer$=this;
OffsetTimeZone$timezone(m$1.system().timezoneOffset,system$timeZone$);
return system$timeZone$;
};$wgb6s9$6va.$crtmm$=function(){return{mod:$CCMM$,'super':{t:OffsetTimeZone$timezone},$cont:$6v7$timezone,d:['ceylon.time.timezone','timeZone','$o','system']};};
function $init$system(){
if($wgb6s9$6va.$$===undefined){
m$1.initTypeProto($wgb6s9$6va,'ceylon.time.timezone::timeZone.system',$init$OffsetTimeZone$timezone());
$6v7$timezone.$wgb6s9$6va=$wgb6s9$6va;
(function(system$timeZone$){
system$timeZone$.toString=function(){return this.string.valueOf();};
})($wgb6s9$6va.$$.prototype);
}
return $wgb6s9$6va;
}
timeZone$.$init$system=$init$system;m$1.atr$(timeZone$,'system',function(){return this.$wgb6s9$6v9_;},undefined,function(){return{mod:$CCMM$,$t:{t:$6v7$timezone.$$.prototype.$init$system()},$cont:$6v7$timezone,pa:1,an:function(){return[m$1.doc("Current system time zone.")];},d:['ceylon.time.timezone','timeZone','$o','system']};});
timeZone$.$wgb6s9$6va=$wgb6s9$6va;timeZone$.$wgb6s9$6va.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$6v7$timezone.$$.prototype.$init$system()},$cont:$6v7$timezone,pa:1,an:function(){return[m$1.doc("Current system time zone.")];},d:['ceylon.time.timezone','timeZone','$o','system']};};
function $wgb6s9$6vc(){
var timeZone$=this;
var utc$timeZone$=new this.$wgb6s9$6vc.$$;utc$timeZone$.outer$=this;
OffsetTimeZone$timezone(0,utc$timeZone$);
utc$timeZone$.$wgb6s9$6ve_="Z";
utc$timeZone$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:timeZone$.$wgb6s9$6vc,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:timeZone:$o:utc:$at:string')];},d:['ceylon.time.timezone','timeZone','$o','utc','$at','string']};}};
utc$timeZone$.$prop$getString.get=function(){return string};
return utc$timeZone$;
};$wgb6s9$6vc.$crtmm$=function(){return{mod:$CCMM$,'super':{t:OffsetTimeZone$timezone},$cont:$6v7$timezone,d:['ceylon.time.timezone','timeZone','$o','utc']};};
function $init$utc(){
if($wgb6s9$6vc.$$===undefined){
m$1.initTypeProto($wgb6s9$6vc,'ceylon.time.timezone::timeZone.utc',$init$OffsetTimeZone$timezone());
$6v7$timezone.$wgb6s9$6vc=$wgb6s9$6vc;
(function(utc$timeZone$){
m$1.atr$(utc$timeZone$,'string',function(){return this.$wgb6s9$6ve_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:timeZone$.$wgb6s9$6vc,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:timeZone:$o:utc:$at:string')];},d:['ceylon.time.timezone','timeZone','$o','utc','$at','string']};});
utc$timeZone$.toString=function(){return this.string.valueOf();};
})($wgb6s9$6vc.$$.prototype);
}
return $wgb6s9$6vc;
}
timeZone$.$init$utc=$init$utc;m$1.atr$(timeZone$,'utc',function(){return this.$wgb6s9$6vb_;},undefined,function(){return{mod:$CCMM$,$t:{t:$6v7$timezone.$$.prototype.$init$utc()},$cont:$6v7$timezone,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:timeZone:$o:utc')];},d:['ceylon.time.timezone','timeZone','$o','utc']};});
timeZone$.$wgb6s9$6vc=$wgb6s9$6vc;timeZone$.$wgb6s9$6vc.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$6v7$timezone.$$.prototype.$init$utc()},$cont:$6v7$timezone,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:timeZone:$o:utc')];},d:['ceylon.time.timezone','timeZone','$o','utc']};};
timeZone$.parse=function($6vg){
var timeZone$=this;
return parseTimeZone$iso8601($6vg);
};timeZone$.parse.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TimeZone$timezone}]},ps:[{nm:'zone',mt:'prm',$t:{t:m$1.$_String}}],$cont:$6v7$timezone,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:timeZone:$m:parse')];},d:['ceylon.time.timezone','timeZone','$m','parse']};};
timeZone$.offset$defs$minutes=function($6vh,$6vi,$6vj){return 0;};
timeZone$.offset$defs$milliseconds=function($6vh,$6vi,$6vj){return 0;};
timeZone$.offset=function($6vh,$6vi,$6vj){
var timeZone$=this;
if($6vi===undefined){$6vi=(0);}
if($6vj===undefined){$6vj=(0);}
var $6vk=((($6vh*milliseconds$base().perHour)+($6vi*milliseconds$base().perMinute))+$6vj);
m$1.asrt$((($6vl=$6vk,$6vl.notSmallerThan(((-12)*milliseconds$base().perHour))&&$6vl.notLargerThan(((12)*milliseconds$base().perHour)))),"Assertion failed: "+"\n\tviolated -12 * ms.perHour <= offsetMilliseconds <= 12 * ms.perHour\n\tat TimeZone.ceylon (88:15-88:73)",'88:8-88:74','TimeZone.ceylon');
if(($6vk==(0))){
return timeZone$.utc;
}
return OffsetTimeZone$timezone($6vk);
};timeZone$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:OffsetTimeZone$timezone},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}},{nm:'minutes',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'milliseconds',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:$6v7$timezone,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:timeZone:$m:offset')];},d:['ceylon.time.timezone','timeZone','$m','offset']};};
$init$system();
$init$utc();
timeZone$.toString=function(){return this.string.valueOf();};
})($6v7$timezone.$$.prototype);
}
return $6v7$timezone;
}
ex$.$init$timeZone$timezone=$init$timeZone$timezone;$init$timeZone$timezone();var $6vm;
function timeZone$timezone(){
if($6vm===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'timeZone\' before it was set"),'63:0-95:0','TimeZone.ceylon');
if($6vm===undefined){$6vm=m$1.INIT$;$6vm=$init$timeZone$timezone()();$6vm.$crtmm$=timeZone$timezone.$crtmm$;}
return $6vm;
}
ex$.timeZone$timezone=timeZone$timezone;
timeZone$timezone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$timeZone$timezone()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:timeZone')];},d:['ceylon.time.timezone','timeZone']};};
$prop$getTimeZone$timezone=timeZone$timezone;
ex$.$prop$getTimeZone$timezone=$prop$getTimeZone$timezone;
function ZoneDateTime$timezone(zoneDateTime$){
ReadableZoneDateTime$timezone(zoneDateTime$);
ReadableDateTime$base(zoneDateTime$);
ReadableTimeZone$timezone(zoneDateTime$);
DateTimeBehavior$base({Element$DateTimeBehavior:{t:ZoneDateTime$timezone},DateType$DateTimeBehavior:{t:$_Date},TimeType$DateTimeBehavior:{t:Time}},zoneDateTime$);
m$1.Comparable({Other$Comparable:{t:ZoneDateTime$timezone}},zoneDateTime$);
m$1.Ordinal({Other$Ordinal:{t:ZoneDateTime$timezone}},zoneDateTime$);
m$1.Enumerable({Other$Enumerable:{t:ZoneDateTime$timezone}},zoneDateTime$);
}
ZoneDateTime$timezone.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableZoneDateTime$timezone},{t:ReadableDateTime$base},{t:ReadableTimeZone$timezone},{t:DateTimeBehavior$base,a:{Element$DateTimeBehavior:{t:ZoneDateTime$timezone},DateType$DateTimeBehavior:{t:$_Date},TimeType$DateTimeBehavior:{t:Time}}},{t:m$1.Comparable,a:{Other$Comparable:{t:ZoneDateTime$timezone}}},{t:m$1.Ordinal,a:{Other$Ordinal:{t:ZoneDateTime$timezone}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:ZoneDateTime$timezone}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:ZoneDateTime')];},d:['ceylon.time.timezone','ZoneDateTime']};};
ex$.ZoneDateTime$timezone=ZoneDateTime$timezone;
function $init$ZoneDateTime$timezone(){
if(ZoneDateTime$timezone.$$===undefined){
m$1.initTypeProtoI(ZoneDateTime$timezone,'ceylon.time.timezone::ZoneDateTime',$init$ReadableZoneDateTime$timezone(),$init$ReadableDateTime$base(),$init$ReadableTimeZone$timezone(),$init$DateTimeBehavior$base(),m$1.Comparable,m$1.Ordinal,m$1.Enumerable);
(function(zoneDateTime$){
zoneDateTime$.$prop$getInstant={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Instant},$cont:ZoneDateTime$timezone,pa:5,an:function(){return[m$1.doc("Instant used as base.")];},d:['ceylon.time.timezone','ZoneDateTime','$at','instant']};}};
m$1.atr$(zoneDateTime$,'currentOffsetMilliseconds',function(){
var zoneDateTime$=this;
return zoneDateTime$.timeZone.offset(zoneDateTime$.instant);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ZoneDateTime$timezone,pa:9,an:function(){return[m$1.doc("Returns current time zone offset from UTC in milliseconds")];},d:['ceylon.time.timezone','ZoneDateTime','$at','currentOffsetMilliseconds']};});
zoneDateTime$.$prop$getDateTime={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DateTime},$cont:ZoneDateTime$timezone,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:ZoneDateTime:$at:dateTime')];},d:['ceylon.time.timezone','ZoneDateTime','$at','dateTime']};}};
zoneDateTime$.equals=function($6vn){
var zoneDateTime$=this;
var $6vo;
if(m$1.is$(($6vo=$6vn),{t:ZoneDateTime$timezone})){
return (m$1.$eq$(zoneDateTime$.instant,$6vo.instant)&&m$1.$eq$(zoneDateTime$.timeZone,$6vo.timeZone));
}
function $6vp(){return $6vn;}
return false;
};zoneDateTime$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:ZoneDateTime$timezone,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:ZoneDateTime:$m:equals')];},d:['ceylon.time.timezone','ZoneDateTime','$m','equals']};};
m$1.atr$(zoneDateTime$,'hash',function(){
var zoneDateTime$=this;
var $6vq=(31);
var $6vr=(21);
$6vr=(($6vq*$6vr)+zoneDateTime$.instant.hash);
$6vr=(($6vq*$6vr)+zoneDateTime$.timeZone.hash);
return $6vr;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ZoneDateTime$timezone,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:ZoneDateTime:$at:hash')];},d:['ceylon.time.timezone','ZoneDateTime','$at','hash']};});zoneDateTime$.toString=function(){return this.string.valueOf();};
})(ZoneDateTime$timezone.$$.prototype);
}
return ZoneDateTime$timezone;
}
ex$.$init$ZoneDateTime$timezone=$init$ZoneDateTime$timezone;$init$ZoneDateTime$timezone();
function zoneDateTime$timezone($6vs,$6vt,$6vu,$6vv,$6vw,$6vx,$6vy,$6vz){
if($6vw===undefined){$6vw=(0);}
if($6vx===undefined){$6vx=(0);}
if($6vy===undefined){$6vy=(0);}
if($6vz===undefined){$6vz=(0);}
var $6w0=dateTime($6vt,$6vu,$6vv,$6vw,$6vx,$6vy,$6vz);
var $6w1=(unixTime$chronology().timeFromFixed($6w0.dayOfEra)+$6w0.millisecondsOfDay);
var $6w2=($6w1-$6vs.offset(Instant($6w1)));
return GregorianZonedDateTime$internal(Instant($6w2),$6vs);
}
ex$.zoneDateTime$timezone=zoneDateTime$timezone;
zoneDateTime$timezone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'timeZone',mt:'prm',$t:{t:TimeZone$timezone}},{nm:'year',mt:'prm',$t:{t:m$1.Integer}},{nm:'month',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:Month$base}]}},{nm:'date',mt:'prm',$t:{t:m$1.Integer}},{nm:'hour',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'minutes',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'seconds',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'millis',mt:'prm',def:1,$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:zoneDateTime')];},d:['ceylon.time.timezone','zoneDateTime']};};
function AtTime$timezone$model(time,letter,atTime$){
$init$AtTime$timezone$model();
if(atTime$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.timezone.model::AtTime"),'?','?')
atTime$.time_=time;
atTime$.letter_=letter;
return atTime$;
}
AtTime$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'time',mt:'prm',$t:{t:Time},pa:1},{nm:'letter',mt:'prm',$t:{t:m$1.$_String},pa:1}],of:[{t:AtWallClockTime$timezone$model},{t:AtLocalMeanTime$timezone$model},{t:AtGmtTime$timezone$model},{t:AtUtcTime$timezone$model},{t:AtNauticalTime$timezone$model}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:AtTime')];},d:['ceylon.time.timezone.model','AtTime']};};
ex$.AtTime$timezone$model=AtTime$timezone$model;
function $init$AtTime$timezone$model(){
if(AtTime$timezone$model.$$===undefined){
m$1.initTypeProto(AtTime$timezone$model,'ceylon.time.timezone.model::AtTime',m$1.Basic);
(function(atTime$){
m$1.atr$(atTime$,'time',function(){return this.time_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:AtTime$timezone$model,pa:1,d:['ceylon.time.timezone.model','AtTime','$at','time']};});
m$1.atr$(atTime$,'letter',function(){return this.letter_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:AtTime$timezone$model,pa:1,d:['ceylon.time.timezone.model','AtTime','$at','letter']};});
atTime$.equals=function($6w3){
var atTime$=this;
var $6w4;
if(m$1.is$(($6w4=$6w3),{t:AtTime$timezone$model})){
return (m$1.$eq$(atTime$.time,$6w4.time)&&m$1.$eq$(atTime$.letter,$6w4.letter));
}
function $6w5(){return $6w3;}
return false;
};atTime$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:AtTime$timezone$model,pa:3,d:['ceylon.time.timezone.model','AtTime','$m','equals']};};
m$1.atr$(atTime$,'string',function(){
var atTime$=this;
return "time: \'"+(atTime$.time.string)+"\', letter: \'"+(atTime$.letter)+"\'";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:AtTime$timezone$model,pa:3,d:['ceylon.time.timezone.model','AtTime','$at','string']};});
atTime$.toString=function(){return this.string.valueOf();};
})(AtTime$timezone$model.$$.prototype);
}
return AtTime$timezone$model;
}
ex$.$init$AtTime$timezone$model=$init$AtTime$timezone$model;$init$AtTime$timezone$model();
function AtWallClockTime$timezone$model($wgb6s9$6w6,atWallClockTime$){
$init$AtWallClockTime$timezone$model();
if(atWallClockTime$===undefined)atWallClockTime$=new AtWallClockTime$timezone$model.$$;
atWallClockTime$.$wgb6s9$6w6_=$wgb6s9$6w6;
AtTime$timezone$model($wgb6s9$6w6,"u",atWallClockTime$);
return atWallClockTime$;
}
AtWallClockTime$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:AtTime$timezone$model},ps:[{nm:'time',mt:'prm',$t:{t:Time}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:AtWallClockTime')];},d:['ceylon.time.timezone.model','AtWallClockTime']};};
ex$.AtWallClockTime$timezone$model=AtWallClockTime$timezone$model;
function $init$AtWallClockTime$timezone$model(){
if(AtWallClockTime$timezone$model.$$===undefined){
m$1.initTypeProto(AtWallClockTime$timezone$model,'ceylon.time.timezone.model::AtWallClockTime',$init$AtTime$timezone$model());
(function(atWallClockTime$){
m$1.atr$(atWallClockTime$,'$wgb6s9$6w6',function(){return this.$wgb6s9$6w6_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:AtWallClockTime$timezone$model,d:['ceylon.time.timezone.model','AtWallClockTime','$at','time$h07jro']};});
atWallClockTime$.toString=function(){return this.string.valueOf();};
})(AtWallClockTime$timezone$model.$$.prototype);
}
return AtWallClockTime$timezone$model;
}
ex$.$init$AtWallClockTime$timezone$model=$init$AtWallClockTime$timezone$model;$init$AtWallClockTime$timezone$model();
function AtLocalMeanTime$timezone$model($wgb6s9$6w7,atLocalMeanTime$){
$init$AtLocalMeanTime$timezone$model();
if(atLocalMeanTime$===undefined)atLocalMeanTime$=new AtLocalMeanTime$timezone$model.$$;
atLocalMeanTime$.$wgb6s9$6w7_=$wgb6s9$6w7;
AtTime$timezone$model($wgb6s9$6w7,"s",atLocalMeanTime$);
return atLocalMeanTime$;
}
AtLocalMeanTime$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:AtTime$timezone$model},ps:[{nm:'time',mt:'prm',$t:{t:Time}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:AtLocalMeanTime')];},d:['ceylon.time.timezone.model','AtLocalMeanTime']};};
ex$.AtLocalMeanTime$timezone$model=AtLocalMeanTime$timezone$model;
function $init$AtLocalMeanTime$timezone$model(){
if(AtLocalMeanTime$timezone$model.$$===undefined){
m$1.initTypeProto(AtLocalMeanTime$timezone$model,'ceylon.time.timezone.model::AtLocalMeanTime',$init$AtTime$timezone$model());
(function(atLocalMeanTime$){
m$1.atr$(atLocalMeanTime$,'$wgb6s9$6w7',function(){return this.$wgb6s9$6w7_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:AtLocalMeanTime$timezone$model,d:['ceylon.time.timezone.model','AtLocalMeanTime','$at','time$2ab90g']};});
atLocalMeanTime$.toString=function(){return this.string.valueOf();};
})(AtLocalMeanTime$timezone$model.$$.prototype);
}
return AtLocalMeanTime$timezone$model;
}
ex$.$init$AtLocalMeanTime$timezone$model=$init$AtLocalMeanTime$timezone$model;$init$AtLocalMeanTime$timezone$model();
function AtGmtTime$timezone$model($wgb6s9$6w8,atGmtTime$){
$init$AtGmtTime$timezone$model();
if(atGmtTime$===undefined)atGmtTime$=new AtGmtTime$timezone$model.$$;
atGmtTime$.$wgb6s9$6w8_=$wgb6s9$6w8;
AtTime$timezone$model($wgb6s9$6w8,"g",atGmtTime$);
return atGmtTime$;
}
AtGmtTime$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:AtTime$timezone$model},ps:[{nm:'time',mt:'prm',$t:{t:Time}}],pa:1,an:function(){return[m$1.doc("GMT time rule.")];},d:['ceylon.time.timezone.model','AtGmtTime']};};
ex$.AtGmtTime$timezone$model=AtGmtTime$timezone$model;
function $init$AtGmtTime$timezone$model(){
if(AtGmtTime$timezone$model.$$===undefined){
m$1.initTypeProto(AtGmtTime$timezone$model,'ceylon.time.timezone.model::AtGmtTime',$init$AtTime$timezone$model());
(function(atGmtTime$){
m$1.atr$(atGmtTime$,'$wgb6s9$6w8',function(){return this.$wgb6s9$6w8_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:AtGmtTime$timezone$model,d:['ceylon.time.timezone.model','AtGmtTime','$at','time$oxfz9q']};});
atGmtTime$.toString=function(){return this.string.valueOf();};
})(AtGmtTime$timezone$model.$$.prototype);
}
return AtGmtTime$timezone$model;
}
ex$.$init$AtGmtTime$timezone$model=$init$AtGmtTime$timezone$model;$init$AtGmtTime$timezone$model();
function AtUtcTime$timezone$model($wgb6s9$6w9,atUtcTime$){
$init$AtUtcTime$timezone$model();
if(atUtcTime$===undefined)atUtcTime$=new AtUtcTime$timezone$model.$$;
atUtcTime$.$wgb6s9$6w9_=$wgb6s9$6w9;
AtTime$timezone$model($wgb6s9$6w9,"u",atUtcTime$);
return atUtcTime$;
}
AtUtcTime$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:AtTime$timezone$model},ps:[{nm:'time',mt:'prm',$t:{t:Time}}],pa:1,an:function(){return[m$1.doc("UTC time rule.")];},d:['ceylon.time.timezone.model','AtUtcTime']};};
ex$.AtUtcTime$timezone$model=AtUtcTime$timezone$model;
function $init$AtUtcTime$timezone$model(){
if(AtUtcTime$timezone$model.$$===undefined){
m$1.initTypeProto(AtUtcTime$timezone$model,'ceylon.time.timezone.model::AtUtcTime',$init$AtTime$timezone$model());
(function(atUtcTime$){
m$1.atr$(atUtcTime$,'$wgb6s9$6w9',function(){return this.$wgb6s9$6w9_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:AtUtcTime$timezone$model,d:['ceylon.time.timezone.model','AtUtcTime','$at','time$cqe33g']};});
atUtcTime$.toString=function(){return this.string.valueOf();};
})(AtUtcTime$timezone$model.$$.prototype);
}
return AtUtcTime$timezone$model;
}
ex$.$init$AtUtcTime$timezone$model=$init$AtUtcTime$timezone$model;$init$AtUtcTime$timezone$model();
function AtNauticalTime$timezone$model($wgb6s9$6wa,atNauticalTime$){
$init$AtNauticalTime$timezone$model();
if(atNauticalTime$===undefined)atNauticalTime$=new AtNauticalTime$timezone$model.$$;
atNauticalTime$.$wgb6s9$6wa_=$wgb6s9$6wa;
AtTime$timezone$model($wgb6s9$6wa,"z",atNauticalTime$);
return atNauticalTime$;
}
AtNauticalTime$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:AtTime$timezone$model},ps:[{nm:'time',mt:'prm',$t:{t:Time}}],pa:1,an:function(){return[m$1.doc("Nautical time rule.")];},d:['ceylon.time.timezone.model','AtNauticalTime']};};
ex$.AtNauticalTime$timezone$model=AtNauticalTime$timezone$model;
function $init$AtNauticalTime$timezone$model(){
if(AtNauticalTime$timezone$model.$$===undefined){
m$1.initTypeProto(AtNauticalTime$timezone$model,'ceylon.time.timezone.model::AtNauticalTime',$init$AtTime$timezone$model());
(function(atNauticalTime$){
m$1.atr$(atNauticalTime$,'$wgb6s9$6wa',function(){return this.$wgb6s9$6wa_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:AtNauticalTime$timezone$model,d:['ceylon.time.timezone.model','AtNauticalTime','$at','time$5xyi0b']};});
atNauticalTime$.toString=function(){return this.string.valueOf();};
})(AtNauticalTime$timezone$model.$$.prototype);
}
return AtNauticalTime$timezone$model;
}
ex$.$init$AtNauticalTime$timezone$model=$init$AtNauticalTime$timezone$model;$init$AtNauticalTime$timezone$model();
function RealName$timezone$model(){var $6wb={t:m$1.$_String};$6wb.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:RealName')];},d:['ceylon.time.timezone.model','RealName']};};return $6wb;}
ex$.RealName$timezone$model=RealName$timezone$model;
function AliasName$timezone$model(){var $6wc={t:m$1.$_String};$6wc.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:AliasName')];},d:['ceylon.time.timezone.model','AliasName']};};return $6wc;}
ex$.AliasName$timezone$model=AliasName$timezone$model;
function Link$timezone$model(){var $6wd=m$1.mtt$([{t:m$1.$_String},{t:m$1.$_String}]);$6wd.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:Link')];},d:['ceylon.time.timezone.model','Link']};};return $6wd;}
ex$.Link$timezone$model=Link$timezone$model;
function DayOfMonth$timezone$model(){var $6we={t:m$1.Integer};$6we.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc("Alias to represent a specific day.")];},d:['ceylon.time.timezone.model','DayOfMonth']};};return $6we;}
ex$.DayOfMonth$timezone$model=DayOfMonth$timezone$model;
function OnDay$timezone$model(onDay$){
$init$OnDay$timezone$model();
if(onDay$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.timezone.model::OnDay"),'?','?')
return onDay$;
}
OnDay$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[{t:OnFixedDay$timezone$model},{t:OnFirstOfMonth$timezone$model},{t:OnLastOfMonth$timezone$model}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:OnDay')];},d:['ceylon.time.timezone.model','OnDay']};};
ex$.OnDay$timezone$model=OnDay$timezone$model;
function $init$OnDay$timezone$model(){
if(OnDay$timezone$model.$$===undefined){
m$1.initTypeProto(OnDay$timezone$model,'ceylon.time.timezone.model::OnDay',m$1.Basic);
(function(onDay$){
onDay$.date={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'year',mt:'prm',$t:Year$timezone$model()},{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:OnDay$timezone$model,pa:5,d:['ceylon.time.timezone.model','OnDay','$m','date']};}};onDay$.toString=function(){return this.string.valueOf();};
})(OnDay$timezone$model.$$.prototype);
}
return OnDay$timezone$model;
}
ex$.$init$OnDay$timezone$model=$init$OnDay$timezone$model;$init$OnDay$timezone$model();
function OnFixedDay$timezone$model(fixedDate,onFixedDay$){
$init$OnFixedDay$timezone$model();
if(onFixedDay$===undefined)onFixedDay$=new OnFixedDay$timezone$model.$$;
onFixedDay$.fixedDate_=fixedDate;
OnDay$timezone$model(onFixedDay$);
return onFixedDay$;
}
OnFixedDay$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:OnDay$timezone$model},ps:[{nm:'fixedDate',mt:'prm',$t:DayOfMonth$timezone$model(),pa:1}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:OnFixedDay')];},d:['ceylon.time.timezone.model','OnFixedDay']};};
ex$.OnFixedDay$timezone$model=OnFixedDay$timezone$model;
function $init$OnFixedDay$timezone$model(){
if(OnFixedDay$timezone$model.$$===undefined){
m$1.initTypeProto(OnFixedDay$timezone$model,'ceylon.time.timezone.model::OnFixedDay',$init$OnDay$timezone$model());
(function(onFixedDay$){
m$1.atr$(onFixedDay$,'fixedDate',function(){return this.fixedDate_;},undefined,function(){return{mod:$CCMM$,$t:DayOfMonth$timezone$model(),$cont:OnFixedDay$timezone$model,pa:1,d:['ceylon.time.timezone.model','OnFixedDay','$at','fixedDate']};});
onFixedDay$.equals=function($6wf){
var onFixedDay$=this;
var $6wg;
if(m$1.is$(($6wg=$6wf),{t:OnFixedDay$timezone$model})){
return m$1.$eq$(onFixedDay$.fixedDate,$6wg.fixedDate);
}
function $6wh(){return $6wf;}
return false;
};onFixedDay$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:OnFixedDay$timezone$model,pa:3,d:['ceylon.time.timezone.model','OnFixedDay','$m','equals']};};
onFixedDay$.date=function($6wi,$6wj){
var onFixedDay$=this;
return date($6wi,$6wj,onFixedDay$.fixedDate);
};onFixedDay$.date.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'year',mt:'prm',$t:Year$timezone$model()},{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:OnFixedDay$timezone$model,pa:3,d:['ceylon.time.timezone.model','OnFixedDay','$m','date']};};
onFixedDay$.toString=function(){return this.string.valueOf();};
})(OnFixedDay$timezone$model.$$.prototype);
}
return OnFixedDay$timezone$model;
}
ex$.$init$OnFixedDay$timezone$model=$init$OnFixedDay$timezone$model;$init$OnFixedDay$timezone$model();
function OnFirstOfMonth$timezone$model(dayOfWeek,onDateOrAfter,onFirstOfMonth$){
$init$OnFirstOfMonth$timezone$model();
if(onFirstOfMonth$===undefined)onFirstOfMonth$=new OnFirstOfMonth$timezone$model.$$;
onFirstOfMonth$.dayOfWeek_=dayOfWeek;
onFirstOfMonth$.onDateOrAfter_=onDateOrAfter;
OnDay$timezone$model(onFirstOfMonth$);
return onFirstOfMonth$;
}
OnFirstOfMonth$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:OnDay$timezone$model},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:DayOfWeek$base},pa:1},{nm:'onDateOrAfter',mt:'prm',$t:DayOfMonth$timezone$model(),pa:1}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:OnFirstOfMonth')];},d:['ceylon.time.timezone.model','OnFirstOfMonth']};};
ex$.OnFirstOfMonth$timezone$model=OnFirstOfMonth$timezone$model;
function $init$OnFirstOfMonth$timezone$model(){
if(OnFirstOfMonth$timezone$model.$$===undefined){
m$1.initTypeProto(OnFirstOfMonth$timezone$model,'ceylon.time.timezone.model::OnFirstOfMonth',$init$OnDay$timezone$model());
(function(onFirstOfMonth$){
m$1.atr$(onFirstOfMonth$,'dayOfWeek',function(){return this.dayOfWeek_;},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:OnFirstOfMonth$timezone$model,pa:1,d:['ceylon.time.timezone.model','OnFirstOfMonth','$at','dayOfWeek']};});
m$1.atr$(onFirstOfMonth$,'onDateOrAfter',function(){return this.onDateOrAfter_;},undefined,function(){return{mod:$CCMM$,$t:DayOfMonth$timezone$model(),$cont:OnFirstOfMonth$timezone$model,pa:1,d:['ceylon.time.timezone.model','OnFirstOfMonth','$at','onDateOrAfter']};});
onFirstOfMonth$.equals=function($6wk){
var onFirstOfMonth$=this;
var $6wl;
if(m$1.is$(($6wl=$6wk),{t:OnFirstOfMonth$timezone$model})){
return (m$1.$eq$(onFirstOfMonth$.onDateOrAfter,$6wl.onDateOrAfter)&&m$1.$eq$(onFirstOfMonth$.dayOfWeek,$6wl.dayOfWeek));
}
function $6wm(){return $6wk;}
return false;
};onFirstOfMonth$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:OnFirstOfMonth$timezone$model,pa:3,d:['ceylon.time.timezone.model','OnFirstOfMonth','$m','equals']};};
onFirstOfMonth$.date=function($6wn,$6wo){
var onFirstOfMonth$=this;
var $6wp=date($6wn,$6wo,onFirstOfMonth$.onDateOrAfter);
var $6wq;
m$1.asrt$((m$1.nn$(($6wq=$6wp.rangeTo($6wp.withDay($6wo.numberOfDays($6wp.leapYear))).find(m$1.jsc$2(m$1.jsc$3(onFirstOfMonth$,onFirstOfMonth$.$wgb6s9$6wr),[{nm:'dateTime',mt:'prm',$t:{t:$_Date}}],{}))))),"Assertion failed: "+"onDateOrAfter should always be a valid day for the month\n\tviolated exists result = initial.rangeTo(initial.withDay(month.numberOfDays(initial.leapYear))).find(matchesDayOfWeekAndDay)\n\tat OnDay.ceylon (66:14-66:130)",'65:8-66:131','OnDay.ceylon');
return $6wq;
};onFirstOfMonth$.date.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'year',mt:'prm',$t:Year$timezone$model()},{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:OnFirstOfMonth$timezone$model,pa:3,d:['ceylon.time.timezone.model','OnFirstOfMonth','$m','date']};};
onFirstOfMonth$.$wgb6s9$6wr=function($6ws){
var onFirstOfMonth$=this;
return ($6ws.day.notSmallerThan(onFirstOfMonth$.onDateOrAfter)&&m$1.$eq$($6ws.dayOfWeek,onFirstOfMonth$.dayOfWeek));
};onFirstOfMonth$.$wgb6s9$6wr.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'dateTime',mt:'prm',$t:{t:$_Date}}],$cont:OnFirstOfMonth$timezone$model,d:['ceylon.time.timezone.model','OnFirstOfMonth','$m','matchesDayOfWeekAndDay$42vt2u']};};
onFirstOfMonth$.toString=function(){return this.string.valueOf();};
})(OnFirstOfMonth$timezone$model.$$.prototype);
}
return OnFirstOfMonth$timezone$model;
}
ex$.$init$OnFirstOfMonth$timezone$model=$init$OnFirstOfMonth$timezone$model;$init$OnFirstOfMonth$timezone$model();
function OnLastOfMonth$timezone$model(dayOfWeek,onLastOfMonth$){
$init$OnLastOfMonth$timezone$model();
if(onLastOfMonth$===undefined)onLastOfMonth$=new OnLastOfMonth$timezone$model.$$;
onLastOfMonth$.dayOfWeek_=dayOfWeek;
OnDay$timezone$model(onLastOfMonth$);
return onLastOfMonth$;
}
OnLastOfMonth$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:OnDay$timezone$model},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:DayOfWeek$base},pa:1}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:OnLastOfMonth')];},d:['ceylon.time.timezone.model','OnLastOfMonth']};};
ex$.OnLastOfMonth$timezone$model=OnLastOfMonth$timezone$model;
function $init$OnLastOfMonth$timezone$model(){
if(OnLastOfMonth$timezone$model.$$===undefined){
m$1.initTypeProto(OnLastOfMonth$timezone$model,'ceylon.time.timezone.model::OnLastOfMonth',$init$OnDay$timezone$model());
(function(onLastOfMonth$){
m$1.atr$(onLastOfMonth$,'dayOfWeek',function(){return this.dayOfWeek_;},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:OnLastOfMonth$timezone$model,pa:1,d:['ceylon.time.timezone.model','OnLastOfMonth','$at','dayOfWeek']};});
onLastOfMonth$.equals=function($6wt){
var onLastOfMonth$=this;
var $6wu;
if(m$1.is$(($6wu=$6wt),{t:OnLastOfMonth$timezone$model})){
return m$1.$eq$(onLastOfMonth$.dayOfWeek,$6wu.dayOfWeek);
}
function $6wv(){return $6wt;}
return false;
};onLastOfMonth$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:OnLastOfMonth$timezone$model,pa:3,d:['ceylon.time.timezone.model','OnLastOfMonth','$m','equals']};};
onLastOfMonth$.date=function($6ww,$6wx){
var onLastOfMonth$=this;
var $6wy=date($6ww,$6wx,$6wx.numberOfDays(gregorian$chronology().leapYear($6ww)));
var $6wz=$6wy.rangeTo($6wy.withDay(1)).find(m$1.jsc$2((function($6x0){return m$1.$eq$($6x0.dayOfWeek,onLastOfMonth$.dayOfWeek);
}),[{nm:'element',mt:'prm',$t:{t:$_Date}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:$_Date}])}));
var $6x1;
m$1.asrt$((m$1.nn$(($6x1=$6wz))),"Assertion failed: "+"\n\tviolated exists result\n\tat OnDay.ceylon (98:14-98:28)",'98:8-98:29','OnDay.ceylon');
return $6x1;
};onLastOfMonth$.date.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'year',mt:'prm',$t:Year$timezone$model()},{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:OnLastOfMonth$timezone$model,pa:3,d:['ceylon.time.timezone.model','OnLastOfMonth','$m','date']};};
onLastOfMonth$.toString=function(){return this.string.valueOf();};
})(OnLastOfMonth$timezone$model.$$.prototype);
}
return OnLastOfMonth$timezone$model;
}
ex$.$init$OnLastOfMonth$timezone$model=$init$OnLastOfMonth$timezone$model;$init$OnLastOfMonth$timezone$model();
function Year$timezone$model(){var $6x2={t:m$1.Integer};$6x2.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:Year')];},d:['ceylon.time.timezone.model','Year']};};return $6x2;}
ex$.Year$timezone$model=Year$timezone$model;
function Rule$timezone$model(fromYear,toYear,inMonth,onDay,atTime,save,letter,rule$){
$init$Rule$timezone$model();
if(rule$===undefined)rule$=new Rule$timezone$model.$$;
rule$.fromYear_=fromYear;
rule$.toYear_=toYear;
rule$.inMonth_=inMonth;
rule$.onDay_=onDay;
rule$.atTime_=atTime;
rule$.save_=save;
rule$.letter_=letter;
return rule$;
}
Rule$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'fromYear',mt:'prm',$t:Year$timezone$model(),pa:1},{nm:'toYear',mt:'prm',$t:Year$timezone$model(),pa:1},{nm:'inMonth',mt:'prm',$t:{t:Month$base},pa:1},{nm:'onDay',mt:'prm',$t:{t:OnDay$timezone$model},pa:1},{nm:'atTime',mt:'prm',$t:{t:AtTime$timezone$model},pa:1},{nm:'save',mt:'prm',$t:{t:Period},pa:1},{nm:'letter',mt:'prm',$t:{t:m$1.$_String},pa:1}],pa:1,an:function(){return[m$1.doc("Timezone transition rule.")];},d:['ceylon.time.timezone.model','Rule']};};
ex$.Rule$timezone$model=Rule$timezone$model;
function $init$Rule$timezone$model(){
if(Rule$timezone$model.$$===undefined){
m$1.initTypeProto(Rule$timezone$model,'ceylon.time.timezone.model::Rule',m$1.Basic);
(function(rule$){
m$1.atr$(rule$,'fromYear',function(){return this.fromYear_;},undefined,function(){return{mod:$CCMM$,$t:Year$timezone$model(),$cont:Rule$timezone$model,pa:1,d:['ceylon.time.timezone.model','Rule','$at','fromYear']};});
m$1.atr$(rule$,'toYear',function(){return this.toYear_;},undefined,function(){return{mod:$CCMM$,$t:Year$timezone$model(),$cont:Rule$timezone$model,pa:1,d:['ceylon.time.timezone.model','Rule','$at','toYear']};});
m$1.atr$(rule$,'inMonth',function(){return this.inMonth_;},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:Rule$timezone$model,pa:1,d:['ceylon.time.timezone.model','Rule','$at','inMonth']};});
m$1.atr$(rule$,'onDay',function(){return this.onDay_;},undefined,function(){return{mod:$CCMM$,$t:{t:OnDay$timezone$model},$cont:Rule$timezone$model,pa:1,d:['ceylon.time.timezone.model','Rule','$at','onDay']};});
m$1.atr$(rule$,'atTime',function(){return this.atTime_;},undefined,function(){return{mod:$CCMM$,$t:{t:AtTime$timezone$model},$cont:Rule$timezone$model,pa:1,d:['ceylon.time.timezone.model','Rule','$at','atTime']};});
m$1.atr$(rule$,'save',function(){return this.save_;},undefined,function(){return{mod:$CCMM$,$t:{t:Period},$cont:Rule$timezone$model,pa:1,d:['ceylon.time.timezone.model','Rule','$at','save']};});
m$1.atr$(rule$,'letter',function(){return this.letter_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Rule$timezone$model,pa:1,d:['ceylon.time.timezone.model','Rule','$at','letter']};});
rule$.equals=function($6x3){
var rule$=this;
var $6x4;
if(m$1.is$(($6x4=$6x3),{t:Rule$timezone$model})){
return ((((((m$1.$eq$(rule$.fromYear,$6x4.fromYear)&&m$1.$eq$(rule$.toYear,$6x4.toYear))&&m$1.$eq$(rule$.inMonth,$6x4.inMonth))&&m$1.$eq$(rule$.onDay,$6x4.onDay))&&m$1.$eq$(rule$.atTime,$6x4.atTime))&&m$1.$eq$(rule$.save,$6x4.save))&&m$1.$eq$(rule$.letter,$6x4.letter));
}
function $6x5(){return $6x3;}
return false;
};rule$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Rule$timezone$model,pa:3,d:['ceylon.time.timezone.model','Rule','$m','equals']};};
m$1.atr$(rule$,'string',function(){
var rule$=this;
return "fromYear: \'"+(rule$.fromYear.string)+"\', toYear: \'"+(rule$.toYear.string)+"\', inMonth: \'"+(rule$.inMonth.string)+"\',\nonDay: \'"+(rule$.onDay.string)+"\', atTime: \'"+(rule$.atTime.string)+"\', save: \'"+(rule$.save.string)+"\', letter: \'"+(rule$.letter)+"\'";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Rule$timezone$model,pa:3,d:['ceylon.time.timezone.model','Rule','$at','string']};});
rule$.toString=function(){return this.string.valueOf();};
})(Rule$timezone$model.$$.prototype);
}
return Rule$timezone$model;
}
ex$.$init$Rule$timezone$model=$init$Rule$timezone$model;$init$Rule$timezone$model();
function ZoneFormat$timezone$model(zoneFormat$){
$init$ZoneFormat$timezone$model();
if(zoneFormat$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.timezone.model::ZoneFormat"),'?','?')
return zoneFormat$;
}
ZoneFormat$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getStandardZoneFormat$timezone$model,{t:AbbreviationZoneFormat$timezone$model},{t:PairAbbreviationZoneFormat$timezone$model},{t:ReplacedZoneFormat$timezone$model}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:ZoneFormat')];},d:['ceylon.time.timezone.model','ZoneFormat']};};
ex$.ZoneFormat$timezone$model=ZoneFormat$timezone$model;
function $init$ZoneFormat$timezone$model(){
if(ZoneFormat$timezone$model.$$===undefined){
m$1.initTypeProto(ZoneFormat$timezone$model,'ceylon.time.timezone.model::ZoneFormat',m$1.Basic);
(function(zoneFormat$){
zoneFormat$.toString=function(){return this.string.valueOf();};
})(ZoneFormat$timezone$model.$$.prototype);
}
return ZoneFormat$timezone$model;
}
ex$.$init$ZoneFormat$timezone$model=$init$ZoneFormat$timezone$model;$init$ZoneFormat$timezone$model();
function $6x6$timezone$model(){
var standardZoneFormat$=new $6x6$timezone$model.$$;ZoneFormat$timezone$model(standardZoneFormat$);
return standardZoneFormat$;
};$6x6$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ZoneFormat$timezone$model},d:['ceylon.time.timezone.model','standardZoneFormat']};};
function $init$standardZoneFormat$timezone$model(){
if($6x6$timezone$model.$$===undefined){
m$1.initTypeProto($6x6$timezone$model,'ceylon.time.timezone.model::standardZoneFormat',$init$ZoneFormat$timezone$model());
(function(standardZoneFormat$){
standardZoneFormat$.toString=function(){return this.string.valueOf();};
})($6x6$timezone$model.$$.prototype);
}
return $6x6$timezone$model;
}
ex$.$init$standardZoneFormat$timezone$model=$init$standardZoneFormat$timezone$model;$init$standardZoneFormat$timezone$model();var $6x8;
function standardZoneFormat$timezone$model(){
if($6x8===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'standardZoneFormat\' before it was set"),'12:0-12:54','ZoneFormat.ceylon');
if($6x8===undefined){$6x8=m$1.INIT$;$6x8=$init$standardZoneFormat$timezone$model()();$6x8.$crtmm$=standardZoneFormat$timezone$model.$crtmm$;}
return $6x8;
}
ex$.standardZoneFormat$timezone$model=standardZoneFormat$timezone$model;
standardZoneFormat$timezone$model.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$standardZoneFormat$timezone$model()},pa:1,d:['ceylon.time.timezone.model','standardZoneFormat']};};
$prop$getStandardZoneFormat$timezone$model=standardZoneFormat$timezone$model;
ex$.$prop$getStandardZoneFormat$timezone$model=$prop$getStandardZoneFormat$timezone$model;
function AbbreviationZoneFormat$timezone$model(abbreviation,abbreviationZoneFormat$){
$init$AbbreviationZoneFormat$timezone$model();
if(abbreviationZoneFormat$===undefined)abbreviationZoneFormat$=new AbbreviationZoneFormat$timezone$model.$$;
abbreviationZoneFormat$.abbreviation_=abbreviation;
ZoneFormat$timezone$model(abbreviationZoneFormat$);
return abbreviationZoneFormat$;
}
AbbreviationZoneFormat$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ZoneFormat$timezone$model},ps:[{nm:'abbreviation',mt:'prm',$t:{t:m$1.$_String},pa:1}],pa:1,d:['ceylon.time.timezone.model','AbbreviationZoneFormat']};};
ex$.AbbreviationZoneFormat$timezone$model=AbbreviationZoneFormat$timezone$model;
function $init$AbbreviationZoneFormat$timezone$model(){
if(AbbreviationZoneFormat$timezone$model.$$===undefined){
m$1.initTypeProto(AbbreviationZoneFormat$timezone$model,'ceylon.time.timezone.model::AbbreviationZoneFormat',$init$ZoneFormat$timezone$model());
(function(abbreviationZoneFormat$){
m$1.atr$(abbreviationZoneFormat$,'abbreviation',function(){return this.abbreviation_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:AbbreviationZoneFormat$timezone$model,pa:1,d:['ceylon.time.timezone.model','AbbreviationZoneFormat','$at','abbreviation']};});
abbreviationZoneFormat$.equals=function($6x9){
var abbreviationZoneFormat$=this;
var $6xa;
if(m$1.is$(($6xa=$6x9),{t:AbbreviationZoneFormat$timezone$model})){
return m$1.$eq$(abbreviationZoneFormat$.abbreviation,$6xa.abbreviation);
}
function $6xb(){return $6x9;}
return false;
};abbreviationZoneFormat$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:AbbreviationZoneFormat$timezone$model,pa:3,d:['ceylon.time.timezone.model','AbbreviationZoneFormat','$m','equals']};};
abbreviationZoneFormat$.toString=function(){return this.string.valueOf();};
})(AbbreviationZoneFormat$timezone$model.$$.prototype);
}
return AbbreviationZoneFormat$timezone$model;
}
ex$.$init$AbbreviationZoneFormat$timezone$model=$init$AbbreviationZoneFormat$timezone$model;$init$AbbreviationZoneFormat$timezone$model();
function PairAbbreviationZoneFormat$timezone$model(standardAbbreviation,daylightAbbreviation,pairAbbreviationZoneFormat$){
$init$PairAbbreviationZoneFormat$timezone$model();
if(pairAbbreviationZoneFormat$===undefined)pairAbbreviationZoneFormat$=new PairAbbreviationZoneFormat$timezone$model.$$;
pairAbbreviationZoneFormat$.standardAbbreviation_=standardAbbreviation;
pairAbbreviationZoneFormat$.daylightAbbreviation_=daylightAbbreviation;
ZoneFormat$timezone$model(pairAbbreviationZoneFormat$);
return pairAbbreviationZoneFormat$;
}
PairAbbreviationZoneFormat$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ZoneFormat$timezone$model},ps:[{nm:'standardAbbreviation',mt:'prm',$t:{t:m$1.$_String},pa:1},{nm:'daylightAbbreviation',mt:'prm',$t:{t:m$1.$_String},pa:1}],pa:1,d:['ceylon.time.timezone.model','PairAbbreviationZoneFormat']};};
ex$.PairAbbreviationZoneFormat$timezone$model=PairAbbreviationZoneFormat$timezone$model;
function $init$PairAbbreviationZoneFormat$timezone$model(){
if(PairAbbreviationZoneFormat$timezone$model.$$===undefined){
m$1.initTypeProto(PairAbbreviationZoneFormat$timezone$model,'ceylon.time.timezone.model::PairAbbreviationZoneFormat',$init$ZoneFormat$timezone$model());
(function(pairAbbreviationZoneFormat$){
m$1.atr$(pairAbbreviationZoneFormat$,'standardAbbreviation',function(){return this.standardAbbreviation_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:PairAbbreviationZoneFormat$timezone$model,pa:1,d:['ceylon.time.timezone.model','PairAbbreviationZoneFormat','$at','standardAbbreviation']};});
m$1.atr$(pairAbbreviationZoneFormat$,'daylightAbbreviation',function(){return this.daylightAbbreviation_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:PairAbbreviationZoneFormat$timezone$model,pa:1,d:['ceylon.time.timezone.model','PairAbbreviationZoneFormat','$at','daylightAbbreviation']};});
pairAbbreviationZoneFormat$.equals=function($6xc){
var pairAbbreviationZoneFormat$=this;
var $6xd;
if(m$1.is$(($6xd=$6xc),{t:PairAbbreviationZoneFormat$timezone$model})){
return (m$1.$eq$(pairAbbreviationZoneFormat$.standardAbbreviation,$6xd.standardAbbreviation)&&m$1.$eq$(pairAbbreviationZoneFormat$.daylightAbbreviation,$6xd.daylightAbbreviation));
}
function $6xe(){return $6xc;}
return false;
};pairAbbreviationZoneFormat$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:PairAbbreviationZoneFormat$timezone$model,pa:3,d:['ceylon.time.timezone.model','PairAbbreviationZoneFormat','$m','equals']};};
pairAbbreviationZoneFormat$.toString=function(){return this.string.valueOf();};
})(PairAbbreviationZoneFormat$timezone$model.$$.prototype);
}
return PairAbbreviationZoneFormat$timezone$model;
}
ex$.$init$PairAbbreviationZoneFormat$timezone$model=$init$PairAbbreviationZoneFormat$timezone$model;$init$PairAbbreviationZoneFormat$timezone$model();
function ReplacedZoneFormat$timezone$model(format,replacedZoneFormat$){
$init$ReplacedZoneFormat$timezone$model();
if(replacedZoneFormat$===undefined)replacedZoneFormat$=new ReplacedZoneFormat$timezone$model.$$;
replacedZoneFormat$.format_=format;
ZoneFormat$timezone$model(replacedZoneFormat$);
return replacedZoneFormat$;
}
ReplacedZoneFormat$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ZoneFormat$timezone$model},ps:[{nm:'format',mt:'prm',$t:{t:m$1.$_String},pa:1}],pa:1,d:['ceylon.time.timezone.model','ReplacedZoneFormat']};};
ex$.ReplacedZoneFormat$timezone$model=ReplacedZoneFormat$timezone$model;
function $init$ReplacedZoneFormat$timezone$model(){
if(ReplacedZoneFormat$timezone$model.$$===undefined){
m$1.initTypeProto(ReplacedZoneFormat$timezone$model,'ceylon.time.timezone.model::ReplacedZoneFormat',$init$ZoneFormat$timezone$model());
(function(replacedZoneFormat$){
m$1.atr$(replacedZoneFormat$,'format',function(){return this.format_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:ReplacedZoneFormat$timezone$model,pa:1,d:['ceylon.time.timezone.model','ReplacedZoneFormat','$at','format']};});
replacedZoneFormat$.equals=function($6xf){
var replacedZoneFormat$=this;
var $6xg;
if(m$1.is$(($6xg=$6xf),{t:ReplacedZoneFormat$timezone$model})){
return m$1.$eq$(replacedZoneFormat$.format,$6xg.format);
}
function $6xh(){return $6xf;}
return false;
};replacedZoneFormat$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:ReplacedZoneFormat$timezone$model,pa:3,d:['ceylon.time.timezone.model','ReplacedZoneFormat','$m','equals']};};
replacedZoneFormat$.toString=function(){return this.string.valueOf();};
})(ReplacedZoneFormat$timezone$model.$$.prototype);
}
return ReplacedZoneFormat$timezone$model;
}
ex$.$init$ReplacedZoneFormat$timezone$model=$init$ReplacedZoneFormat$timezone$model;$init$ReplacedZoneFormat$timezone$model();
function ZoneRule$timezone$model(zoneRule$){
$init$ZoneRule$timezone$model();
if(zoneRule$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.timezone.model::ZoneRule"),'?','?')
return zoneRule$;
}
ZoneRule$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getStandardZoneRule$timezone$model,{t:PeriodZoneRule$timezone$model},{t:BasedZoneRule$timezone$model}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:ZoneRule')];},d:['ceylon.time.timezone.model','ZoneRule']};};
ex$.ZoneRule$timezone$model=ZoneRule$timezone$model;
function $init$ZoneRule$timezone$model(){
if(ZoneRule$timezone$model.$$===undefined){
m$1.initTypeProto(ZoneRule$timezone$model,'ceylon.time.timezone.model::ZoneRule',m$1.Basic);
(function(zoneRule$){
zoneRule$.toString=function(){return this.string.valueOf();};
})(ZoneRule$timezone$model.$$.prototype);
}
return ZoneRule$timezone$model;
}
ex$.$init$ZoneRule$timezone$model=$init$ZoneRule$timezone$model;$init$ZoneRule$timezone$model();
function $6xi$timezone$model(){
var standardZoneRule$=new $6xi$timezone$model.$$;ZoneRule$timezone$model(standardZoneRule$);
return standardZoneRule$;
};$6xi$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ZoneRule$timezone$model},d:['ceylon.time.timezone.model','standardZoneRule']};};
function $init$standardZoneRule$timezone$model(){
if($6xi$timezone$model.$$===undefined){
m$1.initTypeProto($6xi$timezone$model,'ceylon.time.timezone.model::standardZoneRule',$init$ZoneRule$timezone$model());
(function(standardZoneRule$){
standardZoneRule$.toString=function(){return this.string.valueOf();};
})($6xi$timezone$model.$$.prototype);
}
return $6xi$timezone$model;
}
ex$.$init$standardZoneRule$timezone$model=$init$standardZoneRule$timezone$model;$init$standardZoneRule$timezone$model();var $6xk;
function standardZoneRule$timezone$model(){
if($6xk===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'standardZoneRule\' before it was set"),'15:0-15:50','ZoneRule.ceylon');
if($6xk===undefined){$6xk=m$1.INIT$;$6xk=$init$standardZoneRule$timezone$model()();$6xk.$crtmm$=standardZoneRule$timezone$model.$crtmm$;}
return $6xk;
}
ex$.standardZoneRule$timezone$model=standardZoneRule$timezone$model;
standardZoneRule$timezone$model.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$standardZoneRule$timezone$model()},pa:1,d:['ceylon.time.timezone.model','standardZoneRule']};};
$prop$getStandardZoneRule$timezone$model=standardZoneRule$timezone$model;
ex$.$prop$getStandardZoneRule$timezone$model=$prop$getStandardZoneRule$timezone$model;
function PeriodZoneRule$timezone$model(period,periodZoneRule$){
$init$PeriodZoneRule$timezone$model();
if(periodZoneRule$===undefined)periodZoneRule$=new PeriodZoneRule$timezone$model.$$;
periodZoneRule$.period_=period;
ZoneRule$timezone$model(periodZoneRule$);
return periodZoneRule$;
}
PeriodZoneRule$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ZoneRule$timezone$model},ps:[{nm:'period',mt:'prm',$t:{t:Period},pa:1}],pa:1,d:['ceylon.time.timezone.model','PeriodZoneRule']};};
ex$.PeriodZoneRule$timezone$model=PeriodZoneRule$timezone$model;
function $init$PeriodZoneRule$timezone$model(){
if(PeriodZoneRule$timezone$model.$$===undefined){
m$1.initTypeProto(PeriodZoneRule$timezone$model,'ceylon.time.timezone.model::PeriodZoneRule',$init$ZoneRule$timezone$model());
(function(periodZoneRule$){
m$1.atr$(periodZoneRule$,'period',function(){return this.period_;},undefined,function(){return{mod:$CCMM$,$t:{t:Period},$cont:PeriodZoneRule$timezone$model,pa:1,d:['ceylon.time.timezone.model','PeriodZoneRule','$at','period']};});
periodZoneRule$.toString=function(){return this.string.valueOf();};
})(PeriodZoneRule$timezone$model.$$.prototype);
}
return PeriodZoneRule$timezone$model;
}
ex$.$init$PeriodZoneRule$timezone$model=$init$PeriodZoneRule$timezone$model;$init$PeriodZoneRule$timezone$model();
function BasedZoneRule$timezone$model(ruleName,basedZoneRule$){
$init$BasedZoneRule$timezone$model();
if(basedZoneRule$===undefined)basedZoneRule$=new BasedZoneRule$timezone$model.$$;
basedZoneRule$.ruleName_=ruleName;
ZoneRule$timezone$model(basedZoneRule$);
return basedZoneRule$;
}
BasedZoneRule$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ZoneRule$timezone$model},ps:[{nm:'ruleName',mt:'prm',$t:{t:m$1.$_String},pa:1}],pa:1,d:['ceylon.time.timezone.model','BasedZoneRule']};};
ex$.BasedZoneRule$timezone$model=BasedZoneRule$timezone$model;
function $init$BasedZoneRule$timezone$model(){
if(BasedZoneRule$timezone$model.$$===undefined){
m$1.initTypeProto(BasedZoneRule$timezone$model,'ceylon.time.timezone.model::BasedZoneRule',$init$ZoneRule$timezone$model());
(function(basedZoneRule$){
m$1.atr$(basedZoneRule$,'ruleName',function(){return this.ruleName_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:BasedZoneRule$timezone$model,pa:1,d:['ceylon.time.timezone.model','BasedZoneRule','$at','ruleName']};});
basedZoneRule$.toString=function(){return this.string.valueOf();};
})(BasedZoneRule$timezone$model.$$.prototype);
}
return BasedZoneRule$timezone$model;
}
ex$.$init$BasedZoneRule$timezone$model=$init$BasedZoneRule$timezone$model;$init$BasedZoneRule$timezone$model();
function ZoneTimeline$timezone$model(offset,rule,format,until,zoneTimeline$){
$init$ZoneTimeline$timezone$model();
if(zoneTimeline$===undefined)zoneTimeline$=new ZoneTimeline$timezone$model.$$;
zoneTimeline$.offset_=offset;
zoneTimeline$.rule_=rule;
zoneTimeline$.format_=format;
zoneTimeline$.until_=until;
return zoneTimeline$;
}
ZoneTimeline$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'offset',mt:'prm',$t:{t:Period},pa:1},{nm:'rule',mt:'prm',$t:{t:ZoneRule$timezone$model},pa:1},{nm:'format',mt:'prm',$t:{t:ZoneFormat$timezone$model},pa:1},{nm:'until',mt:'prm',$t:{t:ZoneUntil$timezone$model},pa:1}],pa:1,d:['ceylon.time.timezone.model','ZoneTimeline']};};
ex$.ZoneTimeline$timezone$model=ZoneTimeline$timezone$model;
function $init$ZoneTimeline$timezone$model(){
if(ZoneTimeline$timezone$model.$$===undefined){
m$1.initTypeProto(ZoneTimeline$timezone$model,'ceylon.time.timezone.model::ZoneTimeline',m$1.Basic);
(function(zoneTimeline$){
m$1.atr$(zoneTimeline$,'offset',function(){return this.offset_;},undefined,function(){return{mod:$CCMM$,$t:{t:Period},$cont:ZoneTimeline$timezone$model,pa:1,d:['ceylon.time.timezone.model','ZoneTimeline','$at','offset']};});
m$1.atr$(zoneTimeline$,'rule',function(){return this.rule_;},undefined,function(){return{mod:$CCMM$,$t:{t:ZoneRule$timezone$model},$cont:ZoneTimeline$timezone$model,pa:1,d:['ceylon.time.timezone.model','ZoneTimeline','$at','rule']};});
m$1.atr$(zoneTimeline$,'format',function(){return this.format_;},undefined,function(){return{mod:$CCMM$,$t:{t:ZoneFormat$timezone$model},$cont:ZoneTimeline$timezone$model,pa:1,d:['ceylon.time.timezone.model','ZoneTimeline','$at','format']};});
m$1.atr$(zoneTimeline$,'until',function(){return this.until_;},undefined,function(){return{mod:$CCMM$,$t:{t:ZoneUntil$timezone$model},$cont:ZoneTimeline$timezone$model,pa:1,d:['ceylon.time.timezone.model','ZoneTimeline','$at','until']};});
zoneTimeline$.equals=function($6xl){
var zoneTimeline$=this;
var $6xm;
if(m$1.is$(($6xm=$6xl),{t:ZoneTimeline$timezone$model})){
return (((m$1.$eq$(zoneTimeline$.offset,$6xm.offset)&&m$1.$eq$(zoneTimeline$.rule,$6xm.rule))&&m$1.$eq$(zoneTimeline$.format,$6xm.format))&&m$1.$eq$(zoneTimeline$.until,$6xm.until));
}
function $6xn(){return $6xl;}
return false;
};zoneTimeline$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:ZoneTimeline$timezone$model,pa:3,d:['ceylon.time.timezone.model','ZoneTimeline','$m','equals']};};
zoneTimeline$.toString=function(){return this.string.valueOf();};
})(ZoneTimeline$timezone$model.$$.prototype);
}
return ZoneTimeline$timezone$model;
}
ex$.$init$ZoneTimeline$timezone$model=$init$ZoneTimeline$timezone$model;$init$ZoneTimeline$timezone$model();
var $6xo$timezone$model;function $valinit$$6xo$timezone$model(){if($6xo$timezone$model===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'untilPresent\' before it was set"),'11:0-11:113','ZoneUntil.ceylon');
if($6xo$timezone$model===undefined){$6xo$timezone$model=m$1.INIT$;$6xo$timezone$model=ZoneUntil$timezone$model(date(years$base().maximum,december$base(),31),AtWallClockTime$timezone$model(time(23,59,59,999)))};return $6xo$timezone$model;};
function untilPresent$timezone$model(){return $valinit$$6xo$timezone$model();}
ex$.untilPresent$timezone$model=untilPresent$timezone$model;
var $prop$getUntilPresent$timezone$model={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ZoneUntil$timezone$model},pa:1,d:['ceylon.time.timezone.model','untilPresent']};}};
ex$.$prop$getUntilPresent$timezone$model=$prop$getUntilPresent$timezone$model;
$prop$getUntilPresent$timezone$model.get=untilPresent$timezone$model;
untilPresent$timezone$model.$crtmm$=$prop$getUntilPresent$timezone$model.$crtmm$;
function ZoneUntil$timezone$model(date,ruleDefinition,zoneUntil$){
$init$ZoneUntil$timezone$model();
if(zoneUntil$===undefined)zoneUntil$=new ZoneUntil$timezone$model.$$;
zoneUntil$.date_=date;
zoneUntil$.ruleDefinition_=ruleDefinition;
return zoneUntil$;
}
ZoneUntil$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'date',mt:'prm',$t:{t:$_Date},pa:1},{nm:'ruleDefinition',mt:'prm',$t:{t:AtTime$timezone$model},pa:1}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:ZoneUntil')];},d:['ceylon.time.timezone.model','ZoneUntil']};};
ex$.ZoneUntil$timezone$model=ZoneUntil$timezone$model;
function $init$ZoneUntil$timezone$model(){
if(ZoneUntil$timezone$model.$$===undefined){
m$1.initTypeProto(ZoneUntil$timezone$model,'ceylon.time.timezone.model::ZoneUntil',m$1.Basic);
(function(zoneUntil$){
m$1.atr$(zoneUntil$,'date',function(){return this.date_;},undefined,function(){return{mod:$CCMM$,$t:{t:$_Date},$cont:ZoneUntil$timezone$model,pa:1,d:['ceylon.time.timezone.model','ZoneUntil','$at','date']};});
m$1.atr$(zoneUntil$,'ruleDefinition',function(){return this.ruleDefinition_;},undefined,function(){return{mod:$CCMM$,$t:{t:AtTime$timezone$model},$cont:ZoneUntil$timezone$model,pa:1,d:['ceylon.time.timezone.model','ZoneUntil','$at','ruleDefinition']};});
zoneUntil$.equals=function($6xp){
var zoneUntil$=this;
var $6xq;
if(m$1.is$(($6xq=$6xp),{t:ZoneUntil$timezone$model})){
return (m$1.$eq$(zoneUntil$.date,$6xq.date)&&m$1.$eq$(zoneUntil$.ruleDefinition,$6xq.ruleDefinition));
}
function $6xr(){return $6xp;}
return false;
};zoneUntil$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:ZoneUntil$timezone$model,pa:3,d:['ceylon.time.timezone.model','ZoneUntil','$m','equals']};};
zoneUntil$.toString=function(){return this.string.valueOf();};
})(ZoneUntil$timezone$model.$$.prototype);
}
return ZoneUntil$timezone$model;
}
ex$.$init$ZoneUntil$timezone$model=$init$ZoneUntil$timezone$model;$init$ZoneUntil$timezone$model();
function parseLinkLine$timezone$parser$iana($6xs){
var $6xt=$6xs.$_split(tokenDelimiter$timezone$parser$iana).iterator();
var $6xu;
m$1.asrt$((m$1.is$(($6xu=$6xt.next()),{t:m$1.$_String})&&m$1.$eq$($6xu,"Link")),"Assertion failed: "+"\n\tviolated is String link = token.next(), link == \"Link\"\n\tat parseLinkLine.ceylon (10:10-10:56)",'10:4-10:57','parseLinkLine.ceylon');
var $6xv;
m$1.asrt$((m$1.is$(($6xv=$6xt.next()),RealName$timezone$model())),"Assertion failed: "+"\n\tviolated is RealName realId = token.next()\n\tat parseLinkLine.ceylon (12:11-12:45)",'12:4-12:46','parseLinkLine.ceylon');
var $6xw;
m$1.asrt$((m$1.is$(($6xw=$6xt.next()),AliasName$timezone$model())),"Assertion failed: "+"\n\tviolated is AliasName aliasId = token.next()\n\tat parseLinkLine.ceylon (13:11-13:47)",'13:4-13:48','parseLinkLine.ceylon');
return m$1.tpl$([$6xv,$6xw]);
}
ex$.parseLinkLine$timezone$parser$iana=parseLinkLine$timezone$parser$iana;
parseLinkLine$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:Link$timezone$model(),ps:[{nm:'line',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseLinkLine']};};
function parseMonth$timezone$parser$iana($6xx){
var $6xy;
m$1.asrt$((m$1.nn$(($6xy=months$base().all.find(m$1.jsc$2((function($6xz){return $6xz.string.lowercased.startsWith($6xx.trimmed.lowercased);
}),[{nm:'elem',mt:'prm',$t:{t:Month$base}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:Month$base}])}))))),"Assertion failed: "+"Invalid Month for parse in timeZone\n\tviolated exists currentMonth = months.all.find((Month elem) \n        => elem.string.lowercased.startsWith(month.trimmed.lowercased))\n\tat parseMonth.ceylon (8:10-9:71)",'7:4-9:72','parseMonth.ceylon');
return $6xy;
}
ex$.parseMonth$timezone$parser$iana=parseMonth$timezone$parser$iana;
parseMonth$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Month$base},ps:[{nm:'month',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseMonth']};};
function parseOnDay$timezone$parser$iana($6y0){
var $6y1=parseOnDayToken$timezone$parser$iana($6y0);
var $6y2;
if(m$1.nn$(($6y2=$6y1.$_get(0)))){
var $6y3;
if(m$1.nn$(($6y3=$6y1.$_get(1)))){
return OnFirstOfMonth$timezone$model($6y3,$6y2);
}
else{
return OnFixedDay$timezone$model($6y2);
}
}
var $6y4;
m$1.asrt$((m$1.nn$(($6y4=$6y1.$_get(1)))),"Assertion failed: "+"\n\tviolated exists dayOfWeek = result[1]\n\tat parseOnDay.ceylon (24:10-24:39)",'24:4-24:40','parseOnDay.ceylon');
return OnLastOfMonth$timezone$model($6y4);
}
ex$.parseOnDay$timezone$parser$iana=parseOnDay$timezone$parser$iana;
parseOnDay$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:OnDay$timezone$model},ps:[{nm:'token',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseOnDay']};};
function parseOnDayToken$timezone$parser$iana($6y5){
var $6y6=m$1.tpl$([null,null,m$1.equal()]);
if($6y5.startsWith("last")){
$6y6=m$1.tpl$([null,findDayOfWeek$timezone$parser$iana($6y5.spanFrom(4)),m$1.larger()]);
}
else{
var $6y7=function($6y8){return function(){var $6y9;
if(m$1.is$(($6y9=m$1.Integer.$st$.parse($6y8)),{t:m$1.Integer}))return $6y9;else return null}();
};
$6y7.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Null}]},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],$cont:parseOnDayToken$timezone$parser$iana,d:['ceylon.time.timezone.parser.iana','parseOnDayToken','$m','parseInteger$bzuxq8']};};
var $6ya=$6y5.firstInclusion(">=");
var $6yb=$6y5.firstInclusion("<=");
var $6yc;
if(m$1.nn$(($6yc=$6ya))&&($6yc>(0))){
$6y6=m$1.tpl$([$6y7($6y5.spanFrom(($6yc+(2))).trimmed),findDayOfWeek$timezone$parser$iana($6y5.span(0,($6yc-(1)))),m$1.larger()]);
}
else{
var $6yd;
if(m$1.nn$(($6yd=$6yb))&&($6yd>(0))){
$6y6=m$1.tpl$([$6y7($6y5.spanFrom(($6yd+(2)))),findDayOfWeek$timezone$parser$iana($6y5.span(0,($6yd-(1)))),m$1.smaller()]);
}
else{
$6y6=m$1.tpl$([$6y7($6y5),null,m$1.equal()]);
}
}
}
return $6y6;
};parseOnDayToken$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:'u',l:[{t:m$1.Null},DayOfMonth$timezone$model()]},{t:'u',l:[{t:m$1.Null},{t:DayOfWeek$base}]},{t:m$1.Comparison}]},ps:[{nm:'token',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.timezone.parser.iana','parseOnDayToken']};};
function RuleName$timezone$parser$iana(){var $6ye={t:m$1.$_String};$6ye.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.parser.iana:RuleName')];},d:['ceylon.time.timezone.parser.iana','RuleName']};};return $6ye;}
ex$.RuleName$timezone$parser$iana=RuleName$timezone$parser$iana;
function parseRuleLine$timezone$parser$iana($6yf){
var $6yg=$6yf.$_split(tokenDelimiter$timezone$parser$iana).iterator();
var $6yh;
m$1.asrt$((m$1.is$(($6yh=$6yg.next()),{t:m$1.$_String})&&m$1.$eq$($6yh,"Rule")),"Assertion failed: "+"\n\tviolated  is String rule = token.next(), rule == \"Rule\" \n\tat parseRuleLine.ceylon (14:10-14:58)",'14:4-14:59','parseRuleLine.ceylon');
var $6yi;
m$1.asrt$((m$1.is$(($6yi=$6yg.next()),RuleName$timezone$parser$iana())),"Assertion failed: "+"\n\tviolated  is RuleName name = token.next() \n\tat parseRuleLine.ceylon (16:10-16:44)",'16:4-16:45','parseRuleLine.ceylon');
var $6yj;
m$1.asrt$((m$1.is$(($6yj=$6yg.next()),{t:m$1.$_String})),"Assertion failed: "+"\n\tviolated  is String startYearText = token.next() \n\tat parseRuleLine.ceylon (17:10-17:51)",'17:4-17:52','parseRuleLine.ceylon');
var $6yk;
m$1.asrt$((m$1.is$(($6yk=$6yg.next()),{t:m$1.$_String})),"Assertion failed: "+"\n\tviolated  is String endYearText = token.next() \n\tat parseRuleLine.ceylon (18:10-18:49)",'18:4-18:50','parseRuleLine.ceylon');
var $6yl;
m$1.asrt$((m$1.is$(($6yl=$6yg.next()),{t:m$1.$_String})),"Assertion failed: "+"\n\tviolated  is String typeText = token.next() \n\tat parseRuleLine.ceylon (19:10-19:46)",'19:4-19:47','parseRuleLine.ceylon');
var $6ym;
m$1.asrt$((m$1.is$(($6ym=$6yg.next()),{t:m$1.$_String})),"Assertion failed: "+"\n\tviolated  is String monthText = token.next() \n\tat parseRuleLine.ceylon (20:10-20:47)",'20:4-20:48','parseRuleLine.ceylon');
var $6yn;
m$1.asrt$((m$1.is$(($6yn=$6yg.next()),{t:m$1.$_String})),"Assertion failed: "+"\n\tviolated  is String dayRuleText = token.next() \n\tat parseRuleLine.ceylon (21:10-21:49)",'21:4-21:50','parseRuleLine.ceylon');
var $6yo;
m$1.asrt$((m$1.is$(($6yo=$6yg.next()),{t:m$1.$_String})),"Assertion failed: "+"\n\tviolated  is String timeRuleText = token.next() \n\tat parseRuleLine.ceylon (22:10-22:50)",'22:4-22:51','parseRuleLine.ceylon');
var $6yp;
m$1.asrt$((m$1.is$(($6yp=$6yg.next()),{t:m$1.$_String})),"Assertion failed: "+"\n\tviolated  is String savingAmountsText = token.next() \n\tat parseRuleLine.ceylon (23:10-23:55)",'23:4-23:56','parseRuleLine.ceylon');
var $6yq;
m$1.asrt$((m$1.is$(($6yq=$6yg.next()),{t:m$1.$_String})),"Assertion failed: "+"\n\tviolated  is String letterText = token.next() \n\tat parseRuleLine.ceylon (24:10-24:48)",'24:4-24:49','parseRuleLine.ceylon');
var $6yr=parseYear$timezone$parser$iana($6yj,0);
return m$1.tpl$([$6yi,($6ys=$6yr,$6yt=parseYear$timezone$parser$iana($6yk,$6yr),$6yu=parseMonth$timezone$parser$iana($6ym),$6yv=parseOnDay$timezone$parser$iana($6yn.trimmed),$6yw=parseTime$timezone$parser$iana($6yo.trimmed).$_get(0),$6yx=toPeriod$timezone$parser$iana(parseTime$timezone$parser$iana($6yp.trimmed)),$6yy=$6yq.trimmed,Rule$timezone$model($6ys,$6yt,$6yu,$6yv,$6yw,$6yx,$6yy))]);
var $6ys,$6yt,$6yu,$6yv,$6yw,$6yx,$6yy;
}
ex$.parseRuleLine$timezone$parser$iana=parseRuleLine$timezone$parser$iana;
parseRuleLine$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[RuleName$timezone$parser$iana(),{t:Rule$timezone$model}]},ps:[{nm:'line',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseRuleLine']};};
function Signal$timezone$parser$iana(){var $6yz={t:m$1.Integer};$6yz.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.parser.iana:Signal')];},d:['ceylon.time.timezone.parser.iana','Signal']};};return $6yz;}
ex$.Signal$timezone$parser$iana=Signal$timezone$parser$iana;
function parseTime$timezone$parser$iana($6z0){
if($6z0.equals("-")){
return m$1.tpl$([AtWallClockTime$timezone$model(time(0,0)),1]);
}
var $6z1=($6z2=($6z0.startsWith("-")?(-1):null),m$1.nn$($6z2)?$6z2:(1));
var $6z2;
var $6z3=($6z4=($6z0.startsWith("-")?(1):null),m$1.nn$($6z4)?$6z4:(0));
var $6z4;
if(!m$1.nn$($6z0.firstOccurrence(m$1.Character(58,true)))){
var $6z5;
m$1.asrt$((m$1.is$(($6z5=m$1.Integer.$st$.parse($6z0.spanFrom($6z3))),{t:m$1.Integer})),"Assertion failed: "+"\n\tviolated is Integer hours = Integer.parse(atTime.spanFrom(position))\n\tat parseTime.ceylon (27:14-27:74)",'27:8-27:75','parseTime.ceylon');
return m$1.tpl$([AtWallClockTime$timezone$model(adjustToEndOfDayIfNecessary$timezone$parser$iana($6z5,0)),$6z1]);
}
var $6z6=$6z0.indexesWhere(m$1.jsc$2(($6z7=m$1.Character(58,true),m$1.jsc$3($6z7,$6z7.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{})).sequence();
var $6z7;
var $6z8;
m$1.asrt$((m$1.nn$(($6z8=$6z6.$_get(0)))),"Assertion failed: "+"\n\tviolated  exists firstIndex = indexes[0] \n\tat parseTime.ceylon (33:10-33:43)",'33:4-33:44','parseTime.ceylon');
var $6z9;
m$1.asrt$((m$1.is$(($6z9=m$1.Integer.$st$.parse($6z0.span($6z3,($6z8-(1))))),{t:m$1.Integer})),"Assertion failed: "+"\n\tviolated  is Integer hours = Integer.parse(atTime.span(position, firstIndex-1))\n\tat parseTime.ceylon (34:10-34:81)",'34:4-34:82','parseTime.ceylon');
var $6za;
m$1.asrt$((m$1.is$(($6za=m$1.Integer.$st$.parse($6z0.span(($6z8+(1)),($6z8+(2))))),{t:m$1.Integer})),"Assertion failed: "+"\n\tviolated  is Integer minutes = Integer.parse(atTime.span(firstIndex +1,firstIndex  + 2 ))\n\tat parseTime.ceylon (35:10-35:91)",'35:4-35:92','parseTime.ceylon');
var $6zb=adjustToEndOfDayIfNecessary$timezone$parser$iana($6z9,$6za);
var $6zc;
if(($6z6.size==(1))){
$6zc=atTimeDefinition$timezone$parser$iana($6zb,$6z0.spanFrom(($6z8+(3))));
}
else{
var $6zd;
m$1.asrt$((m$1.nn$(($6zd=$6z6.$_get(1)))),"Assertion failed: "+"\n\tviolated  exists secondIndex = indexes[1] \n\tat parseTime.ceylon (41:14-41:48)",'41:8-41:49','parseTime.ceylon');
var $6ze;
m$1.asrt$((m$1.is$(($6ze=m$1.Integer.$st$.parse($6z0.span(($6zd+(1)),($6zd+(2))))),{t:m$1.Integer})),"Assertion failed: "+"\n\tviolated  is Integer seconds = Integer.parse(atTime.span(secondIndex + 1 ,secondIndex  + 2 ))\n\tat parseTime.ceylon (42:14-42:99)",'42:8-42:100','parseTime.ceylon');
$6zb=$6zb.plusSeconds($6ze);
$6zc=atTimeDefinition$timezone$parser$iana($6zb,$6z0.spanFrom(($6zd+(3))));
}
return m$1.tpl$([$6zc,$6z1]);
};parseTime$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:AtTime$timezone$model},Signal$timezone$parser$iana()]},ps:[{nm:'atTime',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.timezone.parser.iana','parseTime']};};
function atTimeDefinition$timezone$parser$iana($6zf,$6zg){
var $6zh=$6zg;
if("s".equals($6zh) || "S".equals($6zh)) {
return AtLocalMeanTime$timezone$model($6zf);
}
else if("u".equals($6zh) || "U".equals($6zh)) {
return AtUtcTime$timezone$model($6zf);
}
else if("z".equals($6zh) || "Z".equals($6zh)) {
return AtNauticalTime$timezone$model($6zf);
}
else if("g".equals($6zh) || "G".equals($6zh)) {
return AtGmtTime$timezone$model($6zf);
}
else if("w".equals($6zh) || "W".equals($6zh)) {
return AtWallClockTime$timezone$model($6zf);
}
else{
return AtWallClockTime$timezone$model($6zf);
}
};atTimeDefinition$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:AtTime$timezone$model},ps:[{nm:'time',mt:'prm',$t:{t:Time}},{nm:'token',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.timezone.parser.iana','atTimeDefinition']};};
function adjustToEndOfDayIfNecessary$timezone$parser$iana($6zi,$6zj){
if((($6zi==(24))&&($6zj==(0)))){
return time(23,59,59,999);
}
return time($6zi,$6zj);
};adjustToEndOfDayIfNecessary$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}},{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.parser.iana:adjustToEndOfDayIfNecessary')];},d:['ceylon.time.timezone.parser.iana','adjustToEndOfDayIfNecessary']};};
function parseUntil$timezone$parser$iana($6zk){
var $6zl=date(0,january$base(),1);
var $6zm;
if(m$1.nn$(($6zm=$6zk.$_get(0)))&&!m$1.$eq$($6zm,"")){
var $6zn;
m$1.asrt$((m$1.is$(($6zn=m$1.Integer.$st$.parse($6zm)),{t:m$1.Integer})),"Assertion failed: "+"\n\tviolated is Integer year = Integer.parse(yearText)\n\tat parseUntil.ceylon (22:14-22:56)",'22:8-22:57','parseUntil.ceylon');
$6zl=$6zl.withYear($6zn);
}
else{
return untilPresent$timezone$model();
}
var $6zo;
if(m$1.nn$(($6zo=$6zk.$_get(1)))&&!m$1.$eq$($6zo,"")){
$6zl=$6zl.withMonth(parseMonth$timezone$parser$iana($6zo));
}
var $6zp;
if(m$1.nn$(($6zp=$6zk.$_get(2)))&&!m$1.$eq$($6zp,"")){
var $6zq=parseOnDay$timezone$parser$iana($6zp);
var $6zr=$6zq;
if(m$1.is$($6zr,{t:OnFixedDay$timezone$model})) {
$6zl=$6zl.withDay($6zr.fixedDate);
}
else if(m$1.is$($6zr,{t:OnFirstOfMonth$timezone$model})) {
$6zl=$6zl.withDay($6zr.date($6zl.year,$6zl.month).day);
}
else if(m$1.is$($6zr,{t:OnLastOfMonth$timezone$model})) {
$6zl=$6zl.withDay($6zr.date($6zl.year,$6zl.month).day);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
var $6zs;
var $6zt;
if(m$1.nn$(($6zt=$6zk.$_get(3)))&&!m$1.$eq$($6zt,"")){
var $6zu=parseTime$timezone$parser$iana($6zt);
$6zs=$6zu.$_get(0);
}
else{
$6zs=AtWallClockTime$timezone$model(time(0,0));
}
return ZoneUntil$timezone$model($6zl,$6zs);
}
ex$.parseUntil$timezone$parser$iana=parseUntil$timezone$parser$iana;
parseUntil$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneUntil$timezone$model},ps:[{nm:'token',mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.$_String}}}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseUntil']};};
function findDayOfWeek$timezone$parser$iana($6zv){
var $6zw;
m$1.asrt$((m$1.nn$(($6zw=weekdays$base().find(m$1.jsc$2((function($6zx){return $6zx.string.lowercased.startsWith($6zv.trimmed.lowercased);
}),[{nm:'elem',mt:'prm',$t:{t:DayOfWeek$base}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:DayOfWeek$base}])}))))),"Assertion failed: "+"\n\tviolated exists dow = weekdays.find((DayOfWeek elem) => elem.string.lowercased.startsWith(dayOfWeek.trimmed.lowercased))\n\tat parseUtils.ceylon (13:10-13:122)",'13:4-13:123','parseUtils.ceylon');
return $6zw;
};findDayOfWeek$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.timezone.parser.iana','findDayOfWeek']};};
function toPeriod$timezone$parser$iana($6zy){
var $6zz=$6zy,$700=$6zz.$_get(0),$701=$6zz.$_get(1);
return ($702=($700.time.hours*$701),$703=($700.time.minutes*$701),$704=($700.time.seconds*$701),$705=($700.time.milliseconds*$701),Period(undefined,undefined,undefined,$702,$703,$704,$705));
var $702,$703,$704,$705;
};toPeriod$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'signedTime',mt:'prm',$t:{t:'T',l:[{t:AtTime$timezone$model},Signal$timezone$parser$iana()]}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.parser.iana:toPeriod')];},d:['ceylon.time.timezone.parser.iana','toPeriod']};};
function tokenDelimiter$timezone$parser$iana($706){
return (m$1.$eq$($706,m$1.Character(32,true))||m$1.$eq$($706,m$1.Character(9,true)));
}
ex$.tokenDelimiter$timezone$parser$iana=tokenDelimiter$timezone$parser$iana;
tokenDelimiter$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'char',mt:'prm',$t:{t:m$1.Character}}],pa:1,d:['ceylon.time.timezone.parser.iana','tokenDelimiter']};};
function parseYear$timezone$parser$iana($707,$708){
if("minimum".startsWith($707.trimmed.lowercased)){
return years$base().minimum;
}
else{
if("maximum".startsWith($707.trimmed.lowercased)){
return years$base().maximum;
}
else{
if($707.equals("only")){
return $708;
}
}
}
var $709;
m$1.asrt$((m$1.is$(($709=m$1.Integer.$st$.parse($707)),{t:m$1.Integer})),"Assertion failed: "+"\n\tviolated is Integer resultYear = Integer.parse(year) \n\tat parseYear.ceylon (14:10-14:55)",'14:4-14:56','parseYear.ceylon');
return $709;
};parseYear$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'year',mt:'prm',$t:{t:m$1.$_String}},{nm:'defaultYear',mt:'prm',$t:{t:m$1.Integer}}],d:['ceylon.time.timezone.parser.iana','parseYear']};};
function parseZoneFormat$timezone$parser$iana($70a){
if(m$1.$eq$($70a,"zzz")){
return standardZoneFormat$timezone$model();
}
else{
var $70b;
if(m$1.nn$(($70b=$70a.firstOccurrence(m$1.Character(47,true))))){
var $70c=$70a.spanTo(($70b-(1)));
var $70d=$70a.spanFrom(($70b+(1)));
return PairAbbreviationZoneFormat$timezone$model($70c,$70d);
}
else{
var $70e;
if(m$1.nn$(($70e=$70a.firstInclusion("%s")))){
return ReplacedZoneFormat$timezone$model($70a);
}
else{
if(!$70a.empty){
return AbbreviationZoneFormat$timezone$model($70a);
}
}
}
}
return standardZoneFormat$timezone$model();
}
ex$.parseZoneFormat$timezone$parser$iana=parseZoneFormat$timezone$parser$iana;
parseZoneFormat$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneFormat$timezone$model},ps:[{nm:'token',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseZoneFormat']};};
function ZoneName$timezone$parser$iana(){var $70f={t:m$1.$_String};$70f.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.time.timezone.parser.iana','ZoneName']};};return $70f;}
ex$.ZoneName$timezone$parser$iana=ZoneName$timezone$parser$iana;
function parseZoneLine$timezone$parser$iana($70g,$70h){
if($70h===undefined){$70h=null;}
var $70i=$70g.$_split(tokenDelimiter$timezone$parser$iana).iterator();
var $70j;
var $70k;
if(m$1.nn$(($70k=$70h))){
$70j=$70k;
}
else{
var $70l;
m$1.asrt$((m$1.is$(($70l=$70i.next()),{t:m$1.$_String})&&m$1.$eq$($70l,"Zone")),"Assertion failed: "+"\n\tviolated is String zone = token.next(), zone == \"Zone\"\n\tat parseZoneLine.ceylon (17:14-17:60)",'17:8-17:61','parseZoneLine.ceylon');
var $70m;
m$1.asrt$((m$1.is$(($70m=$70i.next()),ZoneName$timezone$parser$iana())),"Assertion failed: "+"\n\tviolated is ZoneName nameText = token.next()\n\tat parseZoneLine.ceylon (18:14-18:50)",'18:8-18:51','parseZoneLine.ceylon');
$70j=$70m;
}
var $70n;
m$1.asrt$((m$1.is$(($70n=$70i.next()),{t:m$1.$_String})),"Assertion failed: "+"\n\tviolated is String offsetText = token.next()\n\tat parseZoneLine.ceylon (22:10-22:46)",'22:4-22:47','parseZoneLine.ceylon');
var $70o;
m$1.asrt$((m$1.is$(($70o=$70i.next()),{t:m$1.$_String})),"Assertion failed: "+"\n\tviolated is String ruleText = token.next()\n\tat parseZoneLine.ceylon (23:10-23:44)",'23:4-23:45','parseZoneLine.ceylon');
var $70p;
m$1.asrt$((m$1.is$(($70p=$70i.next()),{t:m$1.$_String})),"Assertion failed: "+"\n\tviolated is String formatText     = token.next()\n\tat parseZoneLine.ceylon (24:10-24:50)",'24:4-24:51','parseZoneLine.ceylon');
var $70q=m$1.empty();
var $70r;
while(m$1.is$(($70r=$70i.next()),{t:m$1.$_String})){
$70q=m$1.tpl$([$70r],$70q);
}
return m$1.tpl$([$70j,($70s=toPeriod$timezone$parser$iana(parseTime$timezone$parser$iana($70n.trimmed)),$70t=parseZoneRule$timezone$parser$iana($70o.trimmed),$70u=parseZoneFormat$timezone$parser$iana($70p.trimmed),$70v=parseUntil$timezone$parser$iana($70q.reversed),ZoneTimeline$timezone$model($70s,$70t,$70u,$70v))]);
var $70s,$70t,$70u,$70v;
}
ex$.parseZoneLine$timezone$parser$iana=parseZoneLine$timezone$parser$iana;
parseZoneLine$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[ZoneName$timezone$parser$iana(),{t:ZoneTimeline$timezone$model}]},ps:[{nm:'line',mt:'prm',$t:{t:m$1.$_String}},{nm:'zoneName',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},ZoneName$timezone$parser$iana()]}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseZoneLine']};};
function parseZoneRule$timezone$parser$iana($70w){
if(m$1.$eq$($70w,"-")){
return standardZoneRule$timezone$model();
}
var $70x="".indexesWhere(m$1.jsc$2(($70y=m$1.Character(58,true),m$1.jsc$3($70y,$70y.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{})).sequence();
var $70y;
var $70z;
if(m$1.ne$(($70z=$70x))){
return PeriodZoneRule$timezone$model(toPeriod$timezone$parser$iana(parseTime$timezone$parser$iana($70w)));
}
else{
return standardZoneRule$timezone$model();
}
}
ex$.parseZoneRule$timezone$parser$iana=parseZoneRule$timezone$parser$iana;
parseZoneRule$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneRule$timezone$model},ps:[{nm:'token',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseZoneRule']};};
ex$.$pkg$ans$ceylon$time$base=function(){return[m$1.doc$($CCMM$,'ceylon.time.base','$pkg-anns'),m$1.by(m$1.$arr$sa$(["Diego Coronel","Roland Tepp"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$time$chronology=function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology','$pkg-anns'),m$1.by(m$1.$arr$sa$(["Diego Coronel","Roland Tepp"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$time$internal$math=function(){return[m$1.by(m$1.$arr$sa$(["Diego Coronel","Roland Tepp"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$time$internal=function(){return[m$1.by(m$1.$arr$sa$(["Diego Coronel","Roland Tepp"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$time$iso8601=function(){return[m$1.doc$($CCMM$,'ceylon.time.iso8601','$pkg-anns'),m$1.by(m$1.$arr$sa$(["Roland Tepp"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$time=function(){return[m$1.doc$($CCMM$,'ceylon.time','$pkg-anns'),m$1.by(m$1.$arr$sa$(["Diego Coronel","Roland Tepp"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$time$timezone$model=function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model','$pkg-anns'),m$1.by(m$1.$arr$sa$(["Diego Coronel","Roland Tepp"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$time$timezone=function(){return[m$1.by(m$1.$arr$sa$(["Diego Coronel","Roland Tepp"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$time$timezone$parser$iana=function(){return[m$1.by(m$1.$arr$sa$(["Diego Coronel","Roland Tepp"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkgunsh$ceylon$time={'FixedInstant':FixedInstant,'FixedMilliseconds':FixedMilliseconds,'OffsetClock':OffsetClock};
ex$.$pkgunsh$ceylon$time$base={'firstDayOfMonth':$prop$getFirstDayOfMonth$base};
ex$.$pkgunsh$ceylon$time$iso8601={'parseInteger':parseInteger$iso8601,'parseWeek':parseWeek$iso8601,'parseDay':parseDay$iso8601,'parseYear':parseYear$iso8601,'parseMonth':parseMonth$iso8601,'parseDayOfMonth':parseDayOfMonth$iso8601,'createDateTime':createDateTime$iso8601,'State':State$iso8601(),'convertToTime':convertToTime$iso8601,'parseTimeComponents':parseTimeComponents$iso8601};
ex$.$pkgunsh$ceylon$time$timezone$parser$iana={'parseOnDayToken':parseOnDayToken$timezone$parser$iana,'parseTime':parseTime$timezone$parser$iana,'atTimeDefinition':atTimeDefinition$timezone$parser$iana,'adjustToEndOfDayIfNecessary':adjustToEndOfDayIfNecessary$timezone$parser$iana,'findDayOfWeek':findDayOfWeek$timezone$parser$iana,'toPeriod':toPeriod$timezone$parser$iana,'parseYear':parseYear$timezone$parser$iana};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
