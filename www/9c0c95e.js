(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{787:function(t,e,r){"use strict";r.r(e);r(69),r(784);var n=r(24),l=r(789),o=r.n(l),c=r(792),d=r.n(c),f={props:{listName:{type:String,default:""},listTitle:{type:String,default:""},detailTitle:{type:String,default:""},id:{type:Number,default:0},sorts:{type:Array,default:function(){return[]}}},computed:{sortData:function(){if(!this.id)return[];var t=o()(this.sorts,{id:this.id});if(!t)return[];for(var data=[t],e=[t.id];t.pid&&-1===d()(e,t.pid);)data=[t=o()(this.sorts,{id:t.pid})].concat(Object(n.a)(data)),e=[t.id].concat(Object(n.a)(e));return data}}},v=r(44),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-breadcrumb",{staticStyle:{"margin-bottom":"20px"}},[r("a-breadcrumb-item",[r("nuxt-link",{attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),r("a-breadcrumb-item",[r("nuxt-link",{attrs:{to:{name:t.listName}}},[t._v(t._s(t.listTitle))])],1),t._v(" "),t._l(t.sortData,(function(e){return r("a-breadcrumb-item",{key:e.id},[r("nuxt-link",{attrs:{to:{name:t.listName,query:{sort:e.id}}}},[t._v("\n      "+t._s(e.name)+"\n    ")])],1)})),t._v(" "),t.detailTitle?r("a-breadcrumb-item",[t._v(t._s(t.detailTitle))]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},788:function(t,e,r){"use strict";r.r(e);r(51),r(784);var n={props:{uid:{type:Number,default:0}},data:function(){return{val:""}},mounted:function(){var t=this;this.uid&&this.$getUser(this.uid).then((function(data){t.val=data&&(data.name||"uid(".concat(data.id,")"))}))}},l=r(44),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("client-only",[e("span",[this._v(this._s(this.val))])])}),[],!1,null,null,null);e.default=component.exports},791:function(t,e,r){var content=r(802);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(166).default)("3ca7f312",content,!0,{sourceMap:!1})},801:function(t,e,r){"use strict";r(791)},802:function(t,e,r){(e=r(165)(!1)).push([t.i,".ql-snow{margin-top:20px}.ql-editor{padding:0}.ql-editor .ql-video{max-width:640px;min-height:360px;width:100%}",""]),t.exports=e},803:function(t,e,r){"use strict";r.r(e);r(20),r(69),r(25),r(26),r(35),r(36),r(30),r(46),r(57),r(27);var n=r(24),l=r(12),o=r(807),c=r.n(o);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=f(f({},c.a.defaults),{},{allowedTags:[].concat(Object(n.a)(c.a.defaults.allowedTags),["img","iframe","pre"]),allowedAttributes:!1}),m={props:{value:{type:String,default:""}},computed:{val:function(){var t=this;return this.value?c()(this.value,v).replace(/<img data-hash="([a-z0-9]{32})"/g,(function(img,e){return img.replace('data-hash="'.concat(e),'src="'.concat(t.$options.filters.hashToCDN(e)))})):""}}},y=(r(801),r(44)),component=Object(y.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ql-snow"},[e("div",{staticClass:"ql-editor",domProps:{innerHTML:this._s(this.val)}})])}),[],!1,null,null,null);e.default=component.exports},804:function(t,e){},811:function(t,e){},813:function(t,e){},820:function(t,e){},911:function(t,e,r){"use strict";r.r(e);r(20),r(25),r(26),r(51),r(35),r(36),r(30),r(27);var n=r(12),l=(r(55),r(18)),o=r(94);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},fetch:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$api,n=t.params,t.store,e.next=3,r.getProduct(n.id);case 3:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({detail:function(t){return t.product.detail}})),head:function(){return{title:this.detail.name}}},f=r(44),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("breadcrumb",{attrs:{"detail-title":t.detail.name,"list-name":"products","list-title":"作品"}}),t._v(" "),r("a-card",{attrs:{bordered:!1}},[r("a-descriptions",{attrs:{layout:"vertical"},scopedSlots:t._u([{key:"title",fn:function(){return[r("a-row",{attrs:{type:"flex",align:"middle",gutter:20}},[t.detail.logo?r("a-col",[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.detail.logo,expression:"detail.logo"}],staticStyle:{width:"50px"}})]):t._e(),t._v(" "),r("a-col",[r("div",[t._v(t._s(t.detail.name))]),t._v(" "),t._l(t.detail.topics,(function(e){return r("a-tag",{key:e.id,staticStyle:{"margin-right":"8px"}},[t._v("\n              "+t._s(e.name)+"\n            ")])}))],2)],1)]},proxy:!0}])},[t._v(" "),t.detail.website?r("a-descriptions-item",{attrs:{label:"网站"}},[r("a",{attrs:{href:t.detail.website,target:"_blank"}},[t._v("\n          "+t._s(t.detail.website)+"\n        ")])]):t._e(),t._v(" "),r("a-descriptions-item",{attrs:{label:"发布者"}},[r("user-name",{attrs:{uid:t.detail.created_by_uid}})],1),t._v(" "),r("a-descriptions-item",{attrs:{label:"发布时间"}},[t._v("\n        "+t._s(t._f("unixFormat")(t.detail.created_at,"YYYY-MM-DD HH:mm"))+"\n      ")])],1)],1),t._v(" "),r("client-only",[t.detail.screenshots.length?r("a-card",{staticStyle:{"margin-top":"20px"},attrs:{bordered:!1,title:"截图"}},[r("a-carousel",{attrs:{arrows:"",autoplay:""},scopedSlots:t._u([{key:"prevArrow",fn:function(){return[r("a-icon",{attrs:{type:"left-circle"}})]},proxy:!0},{key:"nextArrow",fn:function(){return[r("a-icon",{attrs:{type:"right-circle"}})]},proxy:!0}],null,!1,3091447684)},[t._v(" "),t._v(" "),t._l(t.detail.screenshots,(function(t){return r("div",{key:t},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"hash"}],staticStyle:{width:"100%"}})])}))],2)],1):t._e()],1),t._v(" "),r("a-card",{staticStyle:{"margin-top":"20px"},attrs:{bordered:!1,title:"概览"}},[r("rich-text",{staticStyle:{"margin-top":"0"},attrs:{value:t.detail.overview}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Breadcrumb:r(787).default,UserName:r(788).default,RichText:r(803).default})}}]);