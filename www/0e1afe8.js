(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{784:function(t,e,r){"use strict";var n=r(28),o=r(13),c=r(165),l=r(45),f=r(31),d=r(82),h=r(399),y=r(118),m=r(16),O=r(166),v=r(119).f,j=r(57).f,w=r(38).f,N=r(785).trim,_=o.Number,E=_.prototype,P="Number"==d(O(E)),I=function(t){var e,r,n,o,c,l,f,code,d=y(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=N(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(l=(c=d.slice(2)).length,f=0;f<l;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(c("Number",!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var k,x=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof x&&(P?m((function(){E.valueOf.call(r)})):"Number"!=d(r))?h(new _(I(e)),r,x):I(e)},S=n?v(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;S.length>A;A++)f(_,k=S[A])&&!f(x,k)&&w(x,k,j(_,k));x.prototype=E,E.constructor=x,l(o,"Number",x)}},785:function(t,e,r){var n=r(37),o="["+r(786)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),f=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(l,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},786:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},795:function(t,e,r){"use strict";r.r(e);r(20),r(25),r(26),r(51),r(784),r(35),r(36),r(30),r(27);var n=r(12);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{current:{type:Number,default:0},total:{type:Number,default:0}},methods:{onChange:function(t){var e=this.$route,r=e.name,n=e.query;this.$router.push({name:r,query:c(c({},n),{},{current:t})})},itemRender:function(t,e,r){var n=this.$createElement;if("page"!==e)return r;var o=this.$route;return n("nuxt-link",{class:"ant-pagination-item-link",attrs:{to:{name:o.name,query:c(c({},o.query),{},{current:t})}}},[t])}}},f=r(44),component=Object(f.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return this.total?e("a-row",{attrs:{type:"flex",justify:"end"}},[e("a-pagination",{attrs:{"show-quick-jumper":"",current:this.current,total:this.total,"show-total":function(t){return"共"+t+"条记录"},"item-render":this.itemRender},on:{change:this.onChange}})],1):this._e()}),[],!1,null,null,null);e.default=component.exports},823:function(t,e,r){"use strict";r.r(e);var n={props:{dataSource:{type:Array,default:function(){return[]}}}},o=r(44),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-list",{attrs:{grid:{gutter:16,xs:1,md:2},"data-source":t.dataSource},scopedSlots:t._u([{key:"renderItem",fn:function(e){return[r("a-list-item",{key:"item.id"},[r("nuxt-link",{attrs:{to:"/products/"+e.id}},[r("a-card",{attrs:{hoverable:"",bordered:!1}},[r("a-list-item-meta",{attrs:{description:e.description},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n              "+t._s(e.name)+"\n              "),t._l(e.topics,(function(e){return r("a-tag",{key:e.id,staticStyle:{"margin-left":"8px"}},[t._v("\n                "+t._s(e.name)+"\n              ")])}))]},proxy:!0},e.logo?{key:"avatar",fn:function(){return[r("client-only",[r("img",{staticStyle:{width:"50px"},attrs:{src:t._f("hashToCDN")(e.logo)}})])]},proxy:!0}:null],null,!0)})],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports},911:function(t,e,r){"use strict";r.r(e);r(20),r(25),r(26),r(35),r(36),r(30),r(27);var n=r(12),o=(r(56),r(18)),c=r(94);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$api,n=t.query,e.next=3,r.getProducts(n);case 3:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({list:function(t){return t.product.list}})),beforeRouteUpdate:function(t,e,r){this.$api.getProducts(t.query);var n=document.getElementsByClassName("ant-back-top")[0];n&&n.click(),r()},head:function(){return{title:"作品"}}},d=r(44),component=Object(d.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",staticStyle:{overflow:"hidden"}},[e("product-list",{attrs:{"data-source":this.list.data}}),this._v(" "),e("pagination",{attrs:{current:this.list.current,total:this.list.total}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductList:r(823).default,Pagination:r(795).default})}}]);