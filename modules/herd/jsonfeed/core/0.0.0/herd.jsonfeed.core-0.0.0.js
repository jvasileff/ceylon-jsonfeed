(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('herd/jsonfeed/core/0.0.0/herd.jsonfeed.core-0.0.0', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('herd/jsonfeed/core/0.0.0/herd.jsonfeed.core-0.0.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.3.2/ceylon.language-1.3.2');
m$1.$addmod$(m$1,'ceylon.language/1.3.2');
m$1.$addmod$(ex$,'herd.jsonfeed.core/0.0.0');
var m$2=require('ceylon/uri/1.3.2/ceylon.uri-1.3.2');
m$1.$addmod$(m$2,'ceylon.uri/1.3.2');
var m$3=require('ceylon/json/1.3.2/ceylon.json-1.3.2');
m$1.$addmod$(m$3,'ceylon.json/1.3.2');
var m$4=require('ceylon/time/1.3.2/ceylon.time-1.3.2');
m$1.$addmod$(m$4,'ceylon.time/1.3.2');
ex$.$mod$ans$=[];
ex$.$mod$imps=function(){return{
'ceylon.json/1.3.2':function(){return[m$1.shared()];},
'ceylon.uri/1.3.2':function(){return[m$1.shared()];},
'ceylon.time/1.3.2':function(){return[m$1.shared()];}
};};
function Attachment(url,mimeType,title,sizeInBytes,durationInSeconds,attachment$){
$init$Attachment();
if(attachment$===undefined)attachment$=new Attachment.$$;
attachment$.url_=url;
attachment$.mimeType_=mimeType;
attachment$.title_=title;
attachment$.sizeInBytes_=sizeInBytes;
attachment$.durationInSeconds_=durationInSeconds;
return attachment$;
}
Attachment.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'url',mt:'prm',$t:{t:m$2.Uri},pa:1,an:function(){return[m$1.doc("The location of the attachment.")];}},{nm:'mimeType',mt:'prm',$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Attachment:$at:mimeType')];}},{nm:'title',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Attachment:$at:title')];}},{nm:'sizeInBytes',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},pa:1,an:function(){return[m$1.doc("Specifies how large the file is.")];}},{nm:'durationInSeconds',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Attachment:$at:durationInSeconds')];}}],pa:1,d:['herd.jsonfeed.core','Attachment']};};
ex$.Attachment=Attachment;
function $init$Attachment(){
if(Attachment.$$===undefined){
m$1.initTypeProto(Attachment,'herd.jsonfeed.core::Attachment',m$1.Basic);
(function(attachment$){
m$1.atr$(attachment$,'url',function(){return this.url_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2.Uri},$cont:Attachment,pa:1,an:function(){return[m$1.doc("The location of the attachment.")];},d:['herd.jsonfeed.core','Attachment','$at','url']};});
m$1.atr$(attachment$,'mimeType',function(){return this.mimeType_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Attachment,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Attachment:$at:mimeType')];},d:['herd.jsonfeed.core','Attachment','$at','mimeType']};});
m$1.atr$(attachment$,'title',function(){return this.title_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Attachment,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Attachment:$at:title')];},d:['herd.jsonfeed.core','Attachment','$at','title']};});
m$1.atr$(attachment$,'sizeInBytes',function(){return this.sizeInBytes_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Attachment,pa:1,an:function(){return[m$1.doc("Specifies how large the file is.")];},d:['herd.jsonfeed.core','Attachment','$at','sizeInBytes']};});
m$1.atr$(attachment$,'durationInSeconds',function(){return this.durationInSeconds_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Attachment,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Attachment:$at:durationInSeconds')];},d:['herd.jsonfeed.core','Attachment','$at','durationInSeconds']};});
attachment$.toString=function(){return this.string.valueOf();};
})(Attachment.$$.prototype);
}
return Attachment;
}
ex$.$init$Attachment=$init$Attachment;$init$Attachment();
function Author(name,url,avatar,author$){
$init$Author();
if(author$===undefined)author$=new Author.$$;
author$.name_=name;
author$.url_=url;
author$.avatar_=avatar;
m$1.asrt$((((m$1.nn$(name)||m$1.nn$(url))||m$1.nn$(avatar))),"Assertion failed: "+"One of \'name\', \'url\', or \'avatar\' must not be null.\n\tviolated name exists || url exists || avatar exists\n\tat Author.ceylon (22:11-22:54)",'21:4-22:55','Author.ceylon');
return author$;
}
Author.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'name',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc("The author\u2019s name.")];}},{nm:'url',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Author:$at:url')];}},{nm:'avatar',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Author:$at:avatar')];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Author')];},d:['herd.jsonfeed.core','Author']};};
ex$.Author=Author;
function $init$Author(){
if(Author.$$===undefined){
m$1.initTypeProto(Author,'herd.jsonfeed.core::Author',m$1.Basic);
(function(author$){
m$1.atr$(author$,'name',function(){return this.name_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Author,pa:1,an:function(){return[m$1.doc("The author\u2019s name.")];},d:['herd.jsonfeed.core','Author','$at','name']};});
m$1.atr$(author$,'url',function(){return this.url_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]},$cont:Author,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Author:$at:url')];},d:['herd.jsonfeed.core','Author','$at','url']};});
m$1.atr$(author$,'avatar',function(){return this.avatar_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]},$cont:Author,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Author:$at:avatar')];},d:['herd.jsonfeed.core','Author','$at','avatar']};});
author$.toString=function(){return this.string.valueOf();};
})(Author.$$.prototype);
}
return Author;
}
ex$.$init$Author=$init$Author;$init$Author();
function Feed(version,title,homePageUrl,feedUrl,description,userComment,nextUrl,icon,favicon,author,expired,items,feed$){
$init$Feed();
if(feed$===undefined)feed$=new Feed.$$;
feed$.version_=version;
feed$.title_=title;
feed$.homePageUrl_=homePageUrl;
feed$.feedUrl_=feedUrl;
feed$.description_=description;
feed$.userComment_=userComment;
feed$.nextUrl_=nextUrl;
feed$.icon_=icon;
feed$.favicon_=favicon;
feed$.author_=author;
feed$.expired_=expired;
feed$.items_=items;
return feed$;
}
Feed.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'version',mt:'prm',$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Feed:$at:version')];}},{nm:'title',mt:'prm',$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Feed:$at:title')];}},{nm:'homePageUrl',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Feed:$at:homePageUrl')];}},{nm:'feedUrl',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Feed:$at:feedUrl')];}},{nm:'description',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Feed:$at:description')];}},{nm:'userComment',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Feed:$at:userComment')];}},{nm:'nextUrl',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Feed:$at:nextUrl')];}},{nm:'icon',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Feed:$at:icon')];}},{nm:'favicon',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Feed:$at:favicon')];}},{nm:'author',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Author}]},pa:1,an:function(){return[m$1.doc("Specifies the feed author.")];}},{nm:'expired',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Feed:$at:expired')];}},{nm:'items',mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:Item}}},pa:1,an:function(){return[m$1.doc("Feed items.")];}}],pa:1,d:['herd.jsonfeed.core','Feed']};};
ex$.Feed=Feed;
function $init$Feed(){
if(Feed.$$===undefined){
m$1.initTypeProto(Feed,'herd.jsonfeed.core::Feed',m$1.Basic);
(function(feed$){
m$1.atr$(feed$,'version',function(){return this.version_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Feed,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Feed:$at:version')];},d:['herd.jsonfeed.core','Feed','$at','version']};});
m$1.atr$(feed$,'title',function(){return this.title_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Feed,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Feed:$at:title')];},d:['herd.jsonfeed.core','Feed','$at','title']};});
m$1.atr$(feed$,'homePageUrl',function(){return this.homePageUrl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]},$cont:Feed,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Feed:$at:homePageUrl')];},d:['herd.jsonfeed.core','Feed','$at','homePageUrl']};});
m$1.atr$(feed$,'feedUrl',function(){return this.feedUrl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]},$cont:Feed,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Feed:$at:feedUrl')];},d:['herd.jsonfeed.core','Feed','$at','feedUrl']};});
m$1.atr$(feed$,'description',function(){return this.description_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Feed,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Feed:$at:description')];},d:['herd.jsonfeed.core','Feed','$at','description']};});
m$1.atr$(feed$,'userComment',function(){return this.userComment_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Feed,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Feed:$at:userComment')];},d:['herd.jsonfeed.core','Feed','$at','userComment']};});
m$1.atr$(feed$,'nextUrl',function(){return this.nextUrl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]},$cont:Feed,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Feed:$at:nextUrl')];},d:['herd.jsonfeed.core','Feed','$at','nextUrl']};});
m$1.atr$(feed$,'icon',function(){return this.icon_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]},$cont:Feed,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Feed:$at:icon')];},d:['herd.jsonfeed.core','Feed','$at','icon']};});
m$1.atr$(feed$,'favicon',function(){return this.favicon_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]},$cont:Feed,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Feed:$at:favicon')];},d:['herd.jsonfeed.core','Feed','$at','favicon']};});
m$1.atr$(feed$,'author',function(){return this.author_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Author}]},$cont:Feed,pa:1,an:function(){return[m$1.doc("Specifies the feed author.")];},d:['herd.jsonfeed.core','Feed','$at','author']};});
m$1.atr$(feed$,'expired',function(){return this.expired_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Feed,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Feed:$at:expired')];},d:['herd.jsonfeed.core','Feed','$at','expired']};});
m$1.atr$(feed$,'items',function(){return this.items_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:Item}}},$cont:Feed,pa:1,an:function(){return[m$1.doc("Feed items.")];},d:['herd.jsonfeed.core','Feed','$at','items']};});
m$1.atr$(feed$,'json',function(){
var feed$=this;
return ($7=m$1.sarg$(function($8){switch($8){case 0:return m$1.Entry("version",feed$.version,{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}});case 1:return m$1.Entry("title",feed$.title,{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}});case 2:return m$1.Entry("home_page_url",($9=feed$.homePageUrl,m$1.nn$($9)?$9.string:null),{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}});case 3:return m$1.Entry("feed_url",($a=feed$.feedUrl,m$1.nn$($a)?$a.string:null),{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}});case 4:return m$1.Entry("description",feed$.description,{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}});case 5:return m$1.Entry("user_comment",feed$.userComment,{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}});case 6:return m$1.Entry("next_url",($b=feed$.nextUrl,m$1.nn$($b)?$b.string:null),{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}});case 7:return m$1.Entry("icon",($c=feed$.icon,m$1.nn$($c)?$c.string:null),{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}});case 8:return m$1.Entry("favicon",($d=feed$.favicon,m$1.nn$($d)?$d.string:null),{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}});case 9:return m$1.Entry("expired",($e=feed$.expired,m$1.nn$($e)?$e.string:null),{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}});case 10:return m$1.Entry("items",($f=m$1.for$(function(){
var $g=feed$.items.iterator(),$h=m$1.finished();
var n$h=function(){return $h=$g.next();}
return function(){
if(n$h()!==m$1.finished()){
var $i=$h,$j=$i.json;
return $j;
}
return m$1.finished();
}
},{Element$Iterable:{t:m$3.$_Object},Absent$Iterable:{t:m$1.Null}}).sequence(),m$3.JsonArray($f)),{Item$Entry:{t:m$3.$_Array},Key$Entry:{t:m$1.$_String}});}return m$1.finished();},undefined,{Element$Iterable:m$1.mut$([{t:m$1.Entry,a:{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}}},{t:m$1.Entry,a:{Item$Entry:{t:m$3.$_Array},Key$Entry:{t:m$1.$_String}}}]),Absent$Iterable:{t:m$1.Nothing}}).$_filter(m$1.jsc$2((function($k){return m$1.nn$($k.item);
}),[{nm:'entry',mt:'prm',$t:{t:'u',l:[{t:m$1.Entry,a:{Item$Entry:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},Key$Entry:{t:m$1.$_String}}},{t:m$1.Entry,a:{Item$Entry:{t:m$3.$_Array},Key$Entry:{t:m$1.$_String}}}]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Entry,a:{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}}},{t:m$1.Entry,a:{Item$Entry:{t:m$3.$_Array},Key$Entry:{t:m$1.$_String}}}])]),Return$Callable:{t:m$1.$_Boolean}})),m$3.JsonObject($7));
var $7,$9,$a,$b,$c,$d,$e,$f;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$3.JsonObject},$cont:Feed,pa:1,d:['herd.jsonfeed.core','Feed','$at','json']};});
feed$.toString=function(){return this.string.valueOf();};
})(Feed.$$.prototype);
}
return Feed;
}
ex$.$init$Feed=$init$Feed;$init$Feed();
function Item(id,url,externalUrl,title,contentHtml,contentText,summary,image,bannerImage,datePublished,dateModified,author,tags,attachments,item$){
$init$Item();
if(item$===undefined)item$=new Item.$$;
item$.id_=id;
item$.url_=url;
item$.externalUrl_=externalUrl;
item$.title_=title;
item$.contentHtml_=contentHtml;
item$.contentText_=contentText;
item$.summary_=summary;
item$.image_=image;
item$.bannerImage_=bannerImage;
item$.datePublished_=datePublished;
item$.dateModified_=dateModified;
item$.author_=author;
item$.tags_=tags;
item$.attachments_=attachments;
m$1.asrt$(((m$1.nn$(item$.contentHtml)||m$1.nn$(item$.contentText))),"Assertion failed: "+"One of \'content_html\' or \'content_text\' must not be null.\n\tviolated contentHtml exists || contentText exists\n\tat Item.ceylon (79:11-79:52)",'78:4-79:53','Item.ceylon');
return item$;
}
Item.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'id',mt:'prm',$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:id')];}},{nm:'url',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:url')];}},{nm:'externalUrl',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:externalUrl')];}},{nm:'title',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:title')];}},{nm:'contentHtml',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:contentHtml')];}},{nm:'contentText',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:contentText')];}},{nm:'summary',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:summary')];}},{nm:'image',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:image')];}},{nm:'bannerImage',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:bannerImage')];}},{nm:'datePublished',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$4.ZoneDateTime$timezone}]},pa:1,an:function(){return[m$1.doc("Specifies the date in RFC 3339 format.")];}},{nm:'dateModified',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$4.ZoneDateTime$timezone}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:dateModified')];}},{nm:'author',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Author}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:author')];}},{nm:'tags',mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.$_String}}},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:tags')];}},{nm:'attachments',mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:Attachment}}},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:attachments')];}}],pa:1,d:['herd.jsonfeed.core','Item']};};
ex$.Item=Item;
function $init$Item(){
if(Item.$$===undefined){
m$1.initTypeProto(Item,'herd.jsonfeed.core::Item',m$1.Basic);
(function(item$){
m$1.atr$(item$,'id',function(){return this.id_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Item,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:id')];},d:['herd.jsonfeed.core','Item','$at','id']};});
m$1.atr$(item$,'url',function(){return this.url_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]},$cont:Item,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:url')];},d:['herd.jsonfeed.core','Item','$at','url']};});
m$1.atr$(item$,'externalUrl',function(){return this.externalUrl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]},$cont:Item,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:externalUrl')];},d:['herd.jsonfeed.core','Item','$at','externalUrl']};});
m$1.atr$(item$,'title',function(){return this.title_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Item,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:title')];},d:['herd.jsonfeed.core','Item','$at','title']};});
m$1.atr$(item$,'contentHtml',function(){return this.contentHtml_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Item,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:contentHtml')];},d:['herd.jsonfeed.core','Item','$at','contentHtml']};});
m$1.atr$(item$,'contentText',function(){return this.contentText_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Item,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:contentText')];},d:['herd.jsonfeed.core','Item','$at','contentText']};});
m$1.atr$(item$,'summary',function(){return this.summary_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Item,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:summary')];},d:['herd.jsonfeed.core','Item','$at','summary']};});
m$1.atr$(item$,'image',function(){return this.image_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]},$cont:Item,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:image')];},d:['herd.jsonfeed.core','Item','$at','image']};});
m$1.atr$(item$,'bannerImage',function(){return this.bannerImage_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Uri}]},$cont:Item,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:bannerImage')];},d:['herd.jsonfeed.core','Item','$at','bannerImage']};});
m$1.atr$(item$,'datePublished',function(){return this.datePublished_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$4.ZoneDateTime$timezone}]},$cont:Item,pa:1,an:function(){return[m$1.doc("Specifies the date in RFC 3339 format.")];},d:['herd.jsonfeed.core','Item','$at','datePublished']};});
m$1.atr$(item$,'dateModified',function(){return this.dateModified_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$4.ZoneDateTime$timezone}]},$cont:Item,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:dateModified')];},d:['herd.jsonfeed.core','Item','$at','dateModified']};});
m$1.atr$(item$,'author',function(){return this.author_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Author}]},$cont:Item,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:author')];},d:['herd.jsonfeed.core','Item','$at','author']};});
m$1.atr$(item$,'tags',function(){return this.tags_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.$_String}}},$cont:Item,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:tags')];},d:['herd.jsonfeed.core','Item','$at','tags']};});
m$1.atr$(item$,'attachments',function(){return this.attachments_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:Attachment}}},$cont:Item,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.jsonfeed.core:Item:$at:attachments')];},d:['herd.jsonfeed.core','Item','$at','attachments']};});
m$1.atr$(item$,'json',function(){
var item$=this;
return ($l=m$1.sarg$(function($m){switch($m){case 0:return m$1.Entry("id",item$.id,{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}});case 1:return m$1.Entry("url",($n=item$.url,m$1.nn$($n)?$n.string:null),{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}});case 2:return m$1.Entry("external_url",($o=item$.externalUrl,m$1.nn$($o)?$o.string:null),{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}});case 3:return m$1.Entry("title",item$.title,{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}});case 4:return m$1.Entry("content_html",item$.contentHtml,{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}});case 5:return m$1.Entry("content_text",item$.contentText,{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}});case 6:return m$1.Entry("image",($p=item$.image,m$1.nn$($p)?$p.string:null),{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}});case 7:return m$1.Entry("banner_image",($q=item$.bannerImage,m$1.nn$($q)?$q.string:null),{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}});case 8:return m$1.Entry("date_published",($r=item$.datePublished,m$1.nn$($r)?$r.string:null),{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}});case 9:return m$1.Entry("date_modified",($s=item$.dateModified,m$1.nn$($s)?$s.string:null),{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}});}return m$1.finished();},undefined,{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}}},Absent$Iterable:{t:m$1.Nothing}}).$_filter(m$1.jsc$2((function($t){return m$1.nn$($t.item);
}),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},Key$Entry:{t:m$1.$_String}}}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Entry,a:{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}}}]),Return$Callable:{t:m$1.$_Boolean}})),m$3.JsonObject($l));
var $l,$n,$o,$p,$q,$r,$s;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$3.JsonObject},$cont:Item,pa:1,d:['herd.jsonfeed.core','Item','$at','json']};});
item$.toString=function(){return this.string.valueOf();};
})(Item.$$.prototype);
}
return Item;
}
ex$.$init$Item=$init$Item;$init$Item();
function parseFeed($u){return ($v=$u.getString("version"),$w=$u.getString("title"),$x=parseFeedUri($u.getStringOrNull("home_page_url"),{Absent$parseFeedUri:{t:m$1.Null}}),$y=parseFeedUri($u.getStringOrNull("feed_url"),{Absent$parseFeedUri:{t:m$1.Null}}),$z=$u.getStringOrNull("description"),$10=$u.getStringOrNull("userComment"),$11=parseFeedUri($u.getStringOrNull("next_url"),{Absent$parseFeedUri:{t:m$1.Null}}),$12=parseFeedUri($u.getStringOrNull("icon"),{Absent$parseFeedUri:{t:m$1.Null}}),$13=parseFeedUri($u.getStringOrNull("favicon"),{Absent$parseFeedUri:{t:m$1.Null}}),$14=parseAuthor($u.getObjectOrNull("author")),$15=getBoolean($u.getStringOrNull("expired")),$16=m$1.tpl$([],m$1.for$(function(){
var $19;
var $17=$u.getArray("items").iterator(),$18=m$1.finished();
var n$18=function(){
while(($18=$17.next())!==m$1.finished()){
if(m$1.is$(($19=$18),{t:m$3.JsonObject})){
return $18;
}
}
return m$1.finished();
}
return function(){
if(n$18()!==m$1.finished()){
var $1a=$18,$1b=parseItem($19);
return $1b;
}
return m$1.finished();
}
},{Element$Iterable:{t:Item},Absent$Iterable:{t:m$1.Null}})),Feed($v,$w,$x,$y,$z,$10,$11,$12,$13,$14,$15,$16));
var $v,$w,$x,$y,$z,$10,$11,$12,$13,$14,$15,$16;
};
parseFeed.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Feed},ps:[{nm:'json',mt:'prm',$t:{t:m$3.JsonObject}}],pa:1,d:['herd.jsonfeed.core','parseFeed']};};
ex$.parseFeed=parseFeed;
function getBoolean($1c){return function(){var $1d;
if(m$1.nn$(($1d=$1c)))return m$1.$eq$($1d,"true");else return null}();
};
getBoolean.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},ps:[{nm:'string',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],d:['herd.jsonfeed.core','getBoolean']};};
function parseAuthor($1e){
var $1f;
if(m$1.nn$(($1f=$1e))){
return ($1g=$1f.getStringOrNull("name"),$1h=parseFeedUri($1f.getStringOrNull("url"),{Absent$parseFeedUri:{t:m$1.Null}}),$1i=parseFeedUri($1f.getStringOrNull("avatar"),{Absent$parseFeedUri:{t:m$1.Null}}),Author($1g,$1h,$1i));
var $1g,$1h,$1i;
}
function $1j(){return $1e;}
return null;
}
ex$.parseAuthor=parseAuthor;
parseAuthor.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Author}]},ps:[{nm:'json',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$3.JsonObject}]}}],pa:1,d:['herd.jsonfeed.core','parseAuthor']};};
function parseItem($1k){return ($1l=$1k.getString("id"),$1m=parseFeedUri($1k.getStringOrNull("url"),{Absent$parseFeedUri:{t:m$1.Null}}),$1n=parseFeedUri($1k.getStringOrNull("url"),{Absent$parseFeedUri:{t:m$1.Null}}),$1o=$1k.getStringOrNull("title"),$1p=$1k.getStringOrNull("content_html"),$1q=$1k.getStringOrNull("content_text"),$1r=$1k.getStringOrNull("summary"),$1s=parseFeedUri($1k.getStringOrNull("image"),{Absent$parseFeedUri:{t:m$1.Null}}),$1t=parseFeedUri($1k.getStringOrNull("banner_image"),{Absent$parseFeedUri:{t:m$1.Null}}),$1u=parseFeedDate($1k.getStringOrNull("date_published")),$1v=parseFeedDate($1k.getStringOrNull("date_modified")),$1w=parseAuthor($1k.getObjectOrNull("author")),$1x=($1y=$1k.getArrayOrNull("tags"),m$1.nn$($1y)?$1y:m$1.empty()).collect(m$1.jsc$2((function($1z){
var $20;
m$1.asrt$((m$1.is$(($20=$1z),{t:m$1.$_String})),"Assertion failed: "+"\n\tviolated is String tag\n\tat parse.ceylon (58:23-58:37)",'58:16-58:38','parse.ceylon');
return $20;
}),[{nm:'tag',mt:'prm',$t:m$3.Value()}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:m$3.$_Object},{t:m$3.$_Array},{t:m$1.Null}])]),Return$Callable:{t:m$1.$_String}}),{Result$collect:{t:m$1.$_String}}),$21=($22=$1k.getArrayOrNull("attachments"),m$1.nn$($22)?$22:m$1.empty()).collect(m$1.jsc$2((function($23){
var $24;
m$1.asrt$((m$1.is$(($24=$23),{t:m$3.JsonObject})),"Assertion failed: "+"\n\tviolated is JsonObject attachment\n\tat parse.ceylon (63:23-63:48)",'63:16-63:49','parse.ceylon');
return parseAttachment($24);
}),[{nm:'attachment',mt:'prm',$t:m$3.Value()}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:m$3.$_Object},{t:m$3.$_Array},{t:m$1.Null}])]),Return$Callable:{t:Attachment}}),{Result$collect:{t:Attachment}}),Item($1l,$1m,$1n,$1o,$1p,$1q,$1r,$1s,$1t,$1u,$1v,$1w,$1x,$21));
var $1l,$1m,$1n,$1o,$1p,$1q,$1r,$1s,$1t,$1u,$1v,$1w,$1x,$1y,$21,$22;
};
parseItem.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Item},ps:[{nm:'json',mt:'prm',$t:{t:m$3.JsonObject}}],pa:1,d:['herd.jsonfeed.core','parseItem']};};
ex$.parseItem=parseItem;
function parseAttachment($25){return ($26=parseFeedUri($25.getString("url"),{Absent$parseFeedUri:{t:m$1.Nothing}}),$27=$25.getString("mime_type"),$28=$25.getStringOrNull("title"),$29=$25.getIntegerOrNull("size_in_bytes"),$2a=$25.getIntegerOrNull("duration_in_seconds"),Attachment($26,$27,$28,$29,$2a));
var $26,$27,$28,$29,$2a;
};
parseAttachment.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Attachment},ps:[{nm:'json',mt:'prm',$t:{t:m$3.JsonObject}}],pa:1,d:['herd.jsonfeed.core','parseAttachment']};};
ex$.parseAttachment=parseAttachment;
function parseFeedDate($2b){
var $2c;
if(m$1.nn$(($2c=$2b))){
var $2d;
m$1.asrt$((m$1.nn$(($2d=m$4.parseZoneDateTime$iso8601($2c)))),"Assertion failed: "+("Must be a valid date: \'"+($2c)+"\'")+"\n\tviolated exists result = parseZoneDateTime(string)\n\tat parse.ceylon (80:15-80:57)",'79:8-80:58','parse.ceylon');
return $2d;
}
function $2e(){return $2b;}
return null;
};parseFeedDate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$4.ZoneDateTime$timezone}]},ps:[{nm:'string',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],d:['herd.jsonfeed.core','parseFeedDate']};};
function parseFeedUri($2f,$6fc0cd$){
var $2g;
if(m$1.nn$(($2g=$2f))){
return m$2.parse($2g);
}
function $2h(){return $2f;}
var $2i;
m$1.asrt$((m$1.is$(($2i=null),$6fc0cd$.Absent$parseFeedUri,$6fc0cd$)),"Assertion failed: "+"\n\tviolated is Absent null\n\tat parse.ceylon (91:11-91:26)",'91:4-91:27','parse.ceylon');
return $2i;
};parseFeedUri.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$2.Uri},'Absent$parseFeedUri']},ps:[{nm:'string',mt:'prm',$t:{t:'u',l:[{t:m$1.$_String},'Absent$parseFeedUri']}}],tp:{Absent$parseFeedUri:{sts:[{t:m$1.Null}]}},d:['herd.jsonfeed.core','parseFeedUri']};};
function run(){
var $2j;
m$1.asrt$((m$1.is$(($2j=m$3.parse(example())),{t:m$3.JsonObject})),"Assertion failed: "+"\n\tviolated is JsonObject json = parseJson(example)\n\tat run.ceylon (4:11-4:51)",'4:4-4:52','run.ceylon');
var $2k=parseFeed($2j);
m$1.print("\nRecent articles published on "+($2k.title)+":\n");
var $2m;for(var $2l=$2k.items.take(10).iterator();($2m=$2l.next())!==m$1.finished();){
m$1.print("\u2022 "+(($2n=$2m.title,m$1.nn$($2n)?$2n:"untitled"))+" ("+(($2o=($2p=$2m.datePublished,m$1.nn$($2p)?$2p.date:null),m$1.nn$($2o)?$2o:"nodate").string)+")");
var $2n,$2o,$2p;
}
}
ex$.run=run;
run.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],pa:1,d:['herd.jsonfeed.core','run']};};
var $2q;function $valinit$$2q(){if($2q===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'example\' before it was set"),'12:0-30:8','run.ceylon');
if($2q===undefined){$2q=m$1.INIT$;$2q="{\n    \"version\": \"https://jsonfeed.org/version/1\",\n    \"title\": \"My Example Feed\",\n    \"home_page_url\": \"https://example.org/\",\n    \"feed_url\": \"https://example.org/feed.json\",\n    \"items\": [\n        {\n            \"id\": \"2\",\n            \"content_text\": \"This is a second item.\",\n            \"url\": \"https://example.org/second-item\"\n        },\n        {\n            \"id\": \"1\",\n            \"content_html\": \"<p>Hello, world!</p>\",\n            \"url\": \"https://example.org/initial-post\"\n        }\n    ]\n}"};return $2q;};
function example(){return $valinit$$2q();}
var $prop$getExample={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},d:['herd.jsonfeed.core','example']};}};
ex$.$prop$getExample=$prop$getExample;
$prop$getExample.get=example;
ex$.$pkg$ans$herd$jsonfeed$core=function(){return[m$1.shared()];};
ex$.$pkgunsh$herd$jsonfeed$core={'getBoolean':getBoolean,'parseFeedDate':parseFeedDate,'parseFeedUri':parseFeedUri,'example':$prop$getExample};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
