(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{784:function(t,e,r){"use strict";var n=r(28),o=r(13),l=r(165),c=r(45),d=r(31),f=r(82),v=r(399),m=r(118),y=r(16),_=r(166),x=r(119).f,h=r(57).f,k=r(38).f,S=r(785).trim,N=o.Number,I=N.prototype,w="Number"==f(_(I)),A=function(t){var e,r,n,o,l,c,d,code,f=m(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=S(f)).charCodeAt(0))||45===e){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(c=(l=f.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,n)}return+f};if(l("Number",!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var E,z=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof z&&(w?y((function(){I.valueOf.call(r)})):"Number"!=f(r))?v(new N(A(e)),r,z):A(e)},O=n?x(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),$=0;O.length>$;$++)d(N,E=O[$])&&!d(z,E)&&k(z,E,h(N,E));z.prototype=I,I.constructor=z,c(o,"Number",z)}},785:function(t,e,r){var n=r(37),o="["+r(786)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),d=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(l,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},786:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},788:function(t,e,r){"use strict";r.r(e);r(51),r(784);var n={props:{uid:{type:Number,default:0}},data:function(){return{val:""}},mounted:function(){var t=this;this.uid&&this.$getUser(this.uid).then((function(data){t.val=data&&(data.name||"uid(".concat(data.id,")"))}))}},o=r(44),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("client-only",[e("span",[this._v(this._s(this.val))])])}),[],!1,null,null,null);e.default=component.exports},793:function(t,e,r){"use strict";r.r(e);r(784);var n={props:{uid:{type:Number,default:0}},data:function(){return{val:""}},mounted:function(){var t=this;this.uid&&this.$getUser(this.uid).then((function(data){t.val=data&&data.avatar}))}},o=r(44),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("client-only",[this.val?e("a-avatar",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:this.val,expression:"val",arg:"background-image"}]}):e("a-avatar",{attrs:{icon:"user"}})],1)}),[],!1,null,null,null);e.default=component.exports},821:function(t,e,r){"use strict";r.r(e);var n={props:{dataSource:{type:Array,default:function(){return[]}}}},o=r(44),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-list",{attrs:{"item-layout":"vertical",size:"large","data-source":t.dataSource},scopedSlots:t._u([{key:"renderItem",fn:function(e){return[r("a-list-item",{key:"item.id",scopedSlots:t._u([e.cover?{key:"extra",fn:function(){return[r("nuxt-link",{attrs:{to:"/articles/"+e.id}},[r("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.cover,expression:"item.cover",arg:"background-image"}],staticStyle:{width:"272px",height:"168px"}})])]},proxy:!0}:null],null,!0)},[r("a-list-item-meta",{scopedSlots:t._u([{key:"title",fn:function(){return[r("nuxt-link",{attrs:{to:"/articles/"+e.id}},[t._v("\n            "+t._s(e.title)+"\n          ")])]},proxy:!0},{key:"avatar",fn:function(){return[r("user-avatar",{attrs:{uid:e.created_by_uid}})]},proxy:!0},{key:"description",fn:function(){return[r("user-name",{attrs:{uid:e.created_by_uid}}),t._v(" "),r("span",{staticStyle:{margin:"0 8px"}},[t._v("•")]),t._v("\n          "+t._s(t._f("unixFormat")(e.created_at,"MM-DD HH:mm"))+"\n        ")]},proxy:!0}],null,!0)}),t._v("\n      "+t._s(e.sub_title)+"\n      ")],1)]}}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UserAvatar:r(793).default,UserName:r(788).default})},822:function(t,e,r){"use strict";r.r(e);var n={props:{dataSource:{type:Array,default:function(){return[]}}}},o=r(44),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-list",{attrs:{"item-layout":"vertical",size:"large","data-source":t.dataSource},scopedSlots:t._u([{key:"renderItem",fn:function(e){return[r("a-list-item",{key:"item.id"},[r("a-list-item-meta",{attrs:{description:e.profession},scopedSlots:t._u([{key:"title",fn:function(){return[r("nuxt-link",{attrs:{to:"/resumes/"+e.id}},[t._v("\n            "+t._s(e.name)+"\n          ")]),t._v(" "),r("a-tag",{staticStyle:{"margin-left":"8px"}},[t._v("\n            "+t._s(e.working_age)+"年工作经验\n          ")])]},proxy:!0},{key:"avatar",fn:function(){return[r("nuxt-link",{attrs:{to:"/resumes/"+e.id}},[r("user-avatar",{attrs:{uid:e.created_by_uid}})],1)]},proxy:!0}],null,!0)}),t._v("\n      "+t._s(e.introduction)+"\n    ")],1)]}}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UserAvatar:r(793).default})},823:function(t,e,r){"use strict";r.r(e);var n={props:{dataSource:{type:Array,default:function(){return[]}}}},o=r(44),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-list",{attrs:{grid:{gutter:16,xs:1,md:2},"data-source":t.dataSource},scopedSlots:t._u([{key:"renderItem",fn:function(e){return[r("a-list-item",{key:"item.id"},[r("nuxt-link",{attrs:{to:"/products/"+e.id}},[r("a-card",{attrs:{hoverable:"",bordered:!1}},[r("a-list-item-meta",{attrs:{description:e.description},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n              "+t._s(e.name)+"\n              "),t._l(e.topics,(function(e){return r("a-tag",{key:e.id,staticStyle:{"margin-left":"8px"}},[t._v("\n                "+t._s(e.name)+"\n              ")])}))]},proxy:!0},e.logo?{key:"avatar",fn:function(){return[r("client-only",[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.logo,expression:"item.logo"}],staticStyle:{width:"50px"}})])]},proxy:!0}:null],null,!0)})],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports},824:function(t,e,r){var content=r(859);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(164).default)("37bbcec6",content,!0,{sourceMap:!1})},858:function(t,e,r){"use strict";r(824)},859:function(t,e,r){(e=r(163)(!1)).push([t.i,".ant-carousel[data-v-599a5e3e] .slick-slider{overflow:hidden;height:400px}",""]),t.exports=e},910:function(t,e,r){"use strict";r.r(e);r(56);var n=r(18),o={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$api,e.next=3,r.getHomeBanners();case 3:return n=e.sent,e.next=6,r.getHomeResumes();case 6:return o=e.sent,e.next=9,r.getHomeProducts();case 9:return l=e.sent,e.next=12,r.getArticles();case 12:return c=e.sent,d=c.data,e.abrupt("return",{banners:n,resumes:o,products:l,articles:d});case 15:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"首页"}}},l=(r(858),r(44)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("a-carousel",{attrs:{arrows:"",autoplay:""},scopedSlots:t._u([{key:"prevArrow",fn:function(){return[r("client-only",[r("a-icon",{attrs:{type:"left-circle"}})],1)]},proxy:!0},{key:"nextArrow",fn:function(){return[r("client-only",[r("a-icon",{attrs:{type:"right-circle"}})],1)]},proxy:!0}])},[t._v(" "),t._v(" "),t._l(t.banners,(function(e){return r("div",{key:e.image},[r("a",{attrs:{href:e.href,target:"_blank",title:e.title}},[r("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.image,expression:"item.image",arg:"background-image"}],staticStyle:{height:"400px"}}),t._v(" "),r("h3",[t._v(t._s(e.title))])])])}))],2),t._v(" "),r("a-card",{staticStyle:{"margin-top":"30px"},attrs:{bordered:!1,title:"简历"},scopedSlots:t._u([{key:"extra",fn:function(){return[r("nuxt-link",{attrs:{to:"/resumes"}},[t._v("更多")])]},proxy:!0}])},[t._v(" "),r("resume-list",{attrs:{"data-source":t.resumes}})],1),t._v(" "),r("a-card",{staticStyle:{"margin-top":"30px"},attrs:{bordered:!1,title:"作品","body-style":{paddingBottom:0}},scopedSlots:t._u([{key:"extra",fn:function(){return[r("nuxt-link",{attrs:{to:"/products"}},[t._v("更多")])]},proxy:!0}])},[t._v(" "),r("product-list",{attrs:{"data-source":t.products}})],1),t._v(" "),r("a-card",{staticStyle:{"margin-top":"30px"},attrs:{bordered:!1,title:"文章"},scopedSlots:t._u([{key:"extra",fn:function(){return[r("nuxt-link",{attrs:{to:"/articles"}},[t._v("更多")])]},proxy:!0}])},[t._v(" "),r("article-list",{attrs:{"data-source":t.articles}})],1)],1)}),[],!1,null,"599a5e3e",null);e.default=component.exports;installComponents(component,{ResumeList:r(822).default,ProductList:r(823).default,ArticleList:r(821).default})}}]);