(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{787:function(t,e,r){"use strict";r.r(e);r(55),r(784);var n=r(24),l=r(789),o=r.n(l),c=r(792),d=r.n(c),f={props:{listName:{type:String,default:""},listTitle:{type:String,default:""},detailTitle:{type:String,default:""},id:{type:Number,default:0},sorts:{type:Array,default:function(){return[]}}},computed:{sortData:function(){if(!this.id)return[];var t=o()(this.sorts,{id:this.id});if(!t)return[];for(var data=[t],e=[t.id];t.pid&&-1===d()(e,t.pid);)data=[t=o()(this.sorts,{id:t.pid})].concat(Object(n.a)(data)),e=[t.id].concat(Object(n.a)(e));return data}}},m=r(44),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-breadcrumb",{staticStyle:{"margin-bottom":"20px"}},[r("a-breadcrumb-item",[r("nuxt-link",{attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),r("a-breadcrumb-item",[r("nuxt-link",{attrs:{to:{name:t.listName}}},[t._v(t._s(t.listTitle))])],1),t._v(" "),t._l(t.sortData,(function(e){return r("a-breadcrumb-item",{key:e.id},[r("nuxt-link",{attrs:{to:{name:t.listName,query:{sort:e.id}}}},[t._v("\n      "+t._s(e.name)+"\n    ")])],1)})),t._v(" "),t.detailTitle?r("a-breadcrumb-item",[t._v(t._s(t.detailTitle))]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},788:function(t,e,r){"use strict";r.r(e);r(51),r(784);var n={props:{uid:{type:Number,default:0}},data:function(){return{val:""}},mounted:function(){var t=this;this.uid&&this.$getUser(this.uid).then((function(data){t.val=data&&(data.name||"uid(".concat(data.id,")"))}))}},l=r(44),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("client-only",[e("span",[this._v(this._s(this.val))])])}),[],!1,null,null,null);e.default=component.exports},791:function(t,e,r){var content=r(802);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(166).default)("1be87112",content,!0,{sourceMap:!1})},801:function(t,e,r){"use strict";r(791)},802:function(t,e,r){(e=r(165)(!1)).push([t.i,".ql-snow{margin-top:20px}.ql-editor{padding:0}.ql-editor .ql-video{max-width:640px;min-height:360px;width:100%}",""]),t.exports=e},803:function(t,e,r){"use strict";r.r(e);r(20),r(55),r(25),r(26),r(35),r(36),r(30),r(46),r(58),r(27);var n=r(24),l=r(12),o=r(807),c=r.n(o);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=f(f({},c.a.defaults),{},{allowedTags:[].concat(Object(n.a)(c.a.defaults.allowedTags),["img","iframe","pre"]),allowedAttributes:!1}),h={props:{value:{type:String,default:""}},computed:{val:function(){var t=this;return this.value?c()(this.value,m).replace(/<img data-hash="([a-z0-9]{32})"/g,(function(img,e){return img.replace('data-hash="'.concat(e),'src="'.concat(t.$options.filters.hashToCDN(e)))})):""}}},v=(r(801),r(44)),component=Object(v.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ql-snow"},[e("div",{staticClass:"ql-editor",domProps:{innerHTML:this._s(this.val)}})])}),[],!1,null,null,null);e.default=component.exports},804:function(t,e){},811:function(t,e){},813:function(t,e){},820:function(t,e){},910:function(t,e,r){"use strict";r.r(e);r(20),r(25),r(26),r(35),r(36),r(30),r(27);var n=r(12),l=(r(56),r(18)),o=r(400),c=r.n(o),d=r(94);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},fetch:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,n,l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$api,n=t.params,t.store,e.next=3,r.getExample(n.id);case 3:if(l=e.sent,o=c()(l,"collection.id"),e.t0=o,!e.t0){e.next=9;break}return e.next=9,r.getExampleCollectionList(o);case 9:case"end":return e.stop()}}),e)})))()},computed:m(m({},Object(d.b)({detail:function(t){return t.example.detail},collectionAll:function(t){return t.exampleCollection.all}})),{},{sorts:function(){return c()(this.detail,"extraData.cascader_example_sort")||[]},exampleList:function(){var t=c()(this.detail,"collection.id");return t&&this.collectionAll[t]}}),head:function(){return{title:this.detail.title}}},v=r(44),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("breadcrumb",{attrs:{id:t.detail.sort,"detail-title":t.detail.title,sorts:t.sorts,"list-name":"examples","list-title":"示例"}}),t._v(" "),t.detail.loading?r("a-skeleton",{attrs:{active:""}}):t.detail.id?r("div",{staticStyle:{overflow:"hidden"}},[r("a-row",{attrs:{gutter:[20,20],type:"flex",justify:"space-between"}},[r("a-col",{attrs:{xs:24,lg:t.exampleList?19:24}},[r("a-card",{attrs:{bordered:!1}},[r("a-row",{attrs:{type:"flex",justify:"center"}},[r("h1",{staticClass:"ant-page-header-heading-title"},[t._v(t._s(t.detail.title))])]),t._v(" "),r("a-row",{attrs:{type:"flex",justify:"center"}},[r("span",{staticClass:"ant-page-header-heading-sub-title"},[r("user-name",{staticStyle:{"margin-right":"8px"},attrs:{uid:t.detail.created_by_uid}}),t._v("\n              发布于 "+t._s(t._f("unixFormat")(t.detail.created_at,"MM-DD HH:mm"))+"\n            ")],1)]),t._v(" "),r("rich-text",{attrs:{value:t.detail.content}})],1)],1),t._v(" "),t.exampleList?r("a-col",{attrs:{xs:24,lg:5}},[r("a-menu",{staticStyle:{"min-height":"100%","border-right":"none"},attrs:{"default-selected-keys":[t.detail.id],"default-open-keys":["0"],mode:"inline"}},[r("a-sub-menu",{key:"0",attrs:{title:t.detail.collection.name}},t._l(t.exampleList,(function(e){return r("a-menu-item",{key:e.id},[r("nuxt-link",{staticClass:"ellipsis",attrs:{to:{name:t.$route.name,params:{id:e.id}},title:e.title}},[t._v("\n                "+t._s(e.title)+"\n              ")])],1)})),1)],1)],1):t._e()],1)],1):r("a-empty")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Breadcrumb:r(787).default,UserName:r(788).default,RichText:r(803).default})}}]);