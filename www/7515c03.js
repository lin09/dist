(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{784:function(t,e,n){"use strict";var r=n(28),l=n(13),o=n(165),c=n(45),d=n(31),f=n(82),v=n(399),m=n(118),_=n(16),y=n(166),h=n(119).f,x=n(57).f,w=n(38).f,k=n(785).trim,N=l.Number,O=N.prototype,S="Number"==f(y(O)),j=function(t){var e,n,r,l,o,c,d,code,f=m(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=k(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+f}for(c=(o=f.slice(2)).length,d=0;d<c;d++)if((code=o.charCodeAt(d))<48||code>l)return NaN;return parseInt(o,r)}return+f};if(o("Number",!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var I,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(S?_((function(){O.valueOf.call(n)})):"Number"!=f(n))?v(new N(j(e)),n,E):j(e)},$=r?h(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;$.length>A;A++)d(N,I=$[A])&&!d(E,I)&&w(E,I,x(N,I));E.prototype=O,O.constructor=E,c(l,"Number",E)}},785:function(t,e,n){var r=n(37),l="["+n(786)+"]",o=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},786:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},787:function(t,e,n){"use strict";n.r(e);n(55),n(784);var r=n(24),l=n(789),o=n.n(l),c=n(792),d=n.n(c),f={props:{listName:{type:String,default:""},listTitle:{type:String,default:""},detailTitle:{type:String,default:""},id:{type:Number,default:0},sorts:{type:Array,default:function(){return[]}}},computed:{sortData:function(){if(!this.id)return[];var t=o()(this.sorts,{id:this.id});if(!t)return[];for(var data=[t],e=[t.id];t.pid&&-1===d()(e,t.pid);)data=[t=o()(this.sorts,{id:t.pid})].concat(Object(r.a)(data)),e=[t.id].concat(Object(r.a)(e));return data}}},v=n(44),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-breadcrumb",{staticStyle:{"margin-bottom":"20px"}},[n("a-breadcrumb-item",[n("nuxt-link",{attrs:{to:"/home"}},[t._v("首页")])],1),t._v(" "),n("a-breadcrumb-item",[n("nuxt-link",{attrs:{to:{name:t.listName}}},[t._v(t._s(t.listTitle))])],1),t._v(" "),t._l(t.sortData,(function(e){return n("a-breadcrumb-item",{key:e.id},[n("nuxt-link",{attrs:{to:{name:t.listName,query:{sort:e.id}}}},[t._v("\n      "+t._s(e.name)+"\n    ")])],1)})),t._v(" "),t.detailTitle?n("a-breadcrumb-item",[t._v(t._s(t.detailTitle))]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},789:function(t,e,n){var r=n(796)(n(797));t.exports=r},790:function(t,e,n){var r=n(798);t.exports=function(t){var e=r(t),n=e%1;return e==e?n?e-n:e:0}},792:function(t,e,n){var r=n(402),l=n(790),o=Math.max;t.exports=function(t,e,n){var c=null==t?0:t.length;if(!c)return-1;var d=null==n?0:l(n);return d<0&&(d=o(c+d,0)),r(t,e,d)}},796:function(t,e,n){var r=n(236),l=n(120),o=n(95);t.exports=function(t){return function(e,n,c){var d=Object(e);if(!l(e)){var f=r(n,3);e=o(e),n=function(t){return f(d[t],t,d)}}var v=t(e,n,c);return v>-1?d[f?e[v]:v]:void 0}}},797:function(t,e,n){var r=n(403),l=n(236),o=n(790),c=Math.max;t.exports=function(t,e,n){var d=null==t?0:t.length;if(!d)return-1;var f=null==n?0:o(n);return f<0&&(f=c(d+f,0)),r(t,l(e,3),f)}},798:function(t,e,n){var r=n(401);t.exports=function(t){return t?(t=r(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}},850:function(t,e,n){var content=n(901);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(164).default)("790b230a",content,!0,{sourceMap:!1})},851:function(t,e,n){var content=n(903);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(164).default)("7413c11b",content,!0,{sourceMap:!1})},900:function(t,e,n){"use strict";n(850)},901:function(t,e,n){(e=n(163)(!1)).push([t.i,".ant-descriptions-view{background:#fff}",""]),t.exports=e},902:function(t,e,n){"use strict";n(851)},903:function(t,e,n){(e=n(163)(!1)).push([t.i,".skill-name[data-v-fc5ccb66]{display:inline-block;padding-right:8px;min-width:130px;text-align:right}",""]),t.exports=e},916:function(t,e,n){"use strict";n.r(e);n(20),n(25),n(26),n(51),n(35),n(36),n(30),n(27);var r=n(12),l=(n(56),n(18)),o=n(94);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},fetch:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$api,r=t.params,t.store,e.next=3,n.getResume(r.id);case 3:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({detail:function(t){return t.resume.detail}})),methods:{handlePrint:function(){var t=this,e=this.$refs.detail.$el.parentNode,n=document.createElement("div");n.innerHTML='<h1 style="text-align: center">'.concat(this.detail.name,"的简历</h1>"),n.appendChild(this.$refs.detail.$el),document.body.appendChild(n),window.onbeforeprint=function(){t.$nuxt.$el.style.display="none"},window.onafterprint=function(){e.appendChild(t.$refs.detail.$el),t.$nuxt.$el.style.display="",document.body.removeChild(n)},window.print()}},head:function(){return{title:this.detail.name+"的简历"}}},f=(n(900),n(902),n(44)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("breadcrumb",{attrs:{"detail-title":t.detail.name,"list-name":"resumes","list-title":"简历"}}),t._v(" "),t.detail.loading||t.detail.id?n("div",[n("a-row",{attrs:{type:"flex",justify:"space-between"}},[n("a-col",{attrs:{flex:"1"}},[n("h1",{staticStyle:{"padding-left":"64px","text-align":"center"}},[t._v("\n          "+t._s(t.detail.name)+"的简历\n        ")])]),t._v(" "),n("a-button",{on:{click:t.handlePrint}},[t._v("打印")])],1),t._v(" "),n("a-descriptions",{ref:"detail",staticStyle:{"margin-top":"10px"},attrs:{bordered:"",layout:"vertical",column:{lg:4,md:2,sm:2,xs:1}}},[n("a-descriptions-item",{attrs:{label:"名称"}},[t._v("\n        "+t._s(t.detail.name)+"\n      ")]),t._v(" "),n("a-descriptions-item",{attrs:{label:"职业"}},[t._v("\n        "+t._s(t.detail.profession)+"\n      ")]),t._v(" "),n("a-descriptions-item",{attrs:{label:"工作年龄"}},[t._v("\n        "+t._s(t.detail.working_age)+"年\n      ")]),t._v(" "),n("a-descriptions-item",{attrs:{label:"求职状态"}},[t._v("\n        "+t._s(t.detail.job_status.label)+"\n      ")]),t._v(" "),n("a-descriptions-item",{attrs:{label:"电子邮箱"}},[t._v("\n        "+t._s(t.detail.email)+"\n      ")]),t._v(" "),n("a-descriptions-item",{attrs:{label:"微信"}},[t._v("\n        "+t._s(t.detail.wechat)+"\n      ")]),t._v(" "),n("a-descriptions-item",{attrs:{label:"出生年月"}},[t._v("\n        "+t._s(t._f("unixFormat")(t.detail.birthday,"YYYY/MM"))+"\n      ")]),t._v(" "),n("a-descriptions-item",{attrs:{label:"学历"}},[t._v("\n        "+t._s(t.detail.education)+"\n      ")]),t._v(" "),n("a-descriptions-item",{attrs:{label:"个人优势",span:4}},[n("div",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.detail.introduction))])]),t._v(" "),n("a-descriptions-item",{attrs:{label:"技能",span:4}},t._l(t.detail.skills,(function(e){return n("div",{key:e.id},[n("span",{staticClass:"skill-name"},[t._v("\n            "+t._s(e.name)+"\n          ")]),t._v(" "),n("client-only",[n("a-rate",{attrs:{"default-value":e.rate,disabled:""}})],1)],1)})),0),t._v(" "),n("a-descriptions-item",{attrs:{label:"工作经历",span:4}},[n("a-list",{attrs:{"item-layout":"vertical","data-source":t.detail.work_experiences},scopedSlots:t._u([{key:"renderItem",fn:function(e){return[n("a-list-item",{key:"item.id"},[n("a-list-item-meta",{attrs:{description:e.position},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n                  "+t._s(e.company)+"\n                  "),n("a-tag",{staticStyle:{"margin-left":"8px"}},[t._v(t._s(e.date))])]},proxy:!0}],null,!0)}),t._v(" "),n("div",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(e.content))])],1)]}}])})],1),t._v(" "),n("a-descriptions-item",{attrs:{label:"项目经历",span:4}},[n("a-list",{attrs:{"item-layout":"vertical","data-source":t.detail.project_experiences},scopedSlots:t._u([{key:"renderItem",fn:function(e){return[n("a-list-item",{key:"item.id",scopedSlots:t._u([{key:"actions",fn:function(){return[n("a",{attrs:{target:"_blank",href:e.href}},[t._v("\n                  "+t._s(e.href)+"\n                ")])]},proxy:!0}],null,!0)},[n("a-list-item-meta",{attrs:{description:e.role},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n                  "+t._s(e.name)+"\n                  "),n("a-tag",{staticStyle:{"margin-left":"8px"}},[t._v(t._s(e.date))])]},proxy:!0}],null,!0)}),t._v(" "),n("div",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(e.description))])],1)]}}])})],1),t._v(" "),n("a-descriptions-item",{attrs:{label:"教育经历",span:4}},[n("a-list",{attrs:{"item-layout":"vertical","data-source":t.detail.education_experiences},scopedSlots:t._u([{key:"renderItem",fn:function(e){return[n("a-list-item",{key:"item.id"},[n("a-list-item-meta",{attrs:{description:e.profession+" | "+e.education},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n                  "+t._s(e.name)+"\n                  "),n("a-tag",{staticStyle:{"margin-left":"8px"}},[t._v(t._s(e.date))])]},proxy:!0}],null,!0)}),t._v(" "),n("div",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(e.experience))])],1)]}}])})],1),t._v(" "),n("a-descriptions-item",{attrs:{label:"社交主页",span:4}},t._l(t.detail.social_pages,(function(e){return n("div",{key:e.id},[n("a",{attrs:{target:"_blank",href:e.href}},[t._v("\n            "+t._s(e.href)+"\n          ")])])})),0)],1)],1):n("a-empty")],1)}),[],!1,null,"fc5ccb66",null);e.default=component.exports;installComponents(component,{Breadcrumb:n(787).default})}}]);