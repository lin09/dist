(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{907:function(t,e,r){"use strict";r.r(e);r(20),r(25),r(26),r(51),r(35),r(36),r(30),r(27);var n=r(12),o=(r(56),r(18)),c=r(401),l=r.n(c),d=r(94);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$api,n=t.query,e.next=3,r.getExamples(n);case 3:return e.next=5,r.getExampleSorts(n.sort);case 5:if(!n.sort){e.next=8;break}return e.next=8,r.getExampleSorts();case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{sortData:[]}},computed:m(m({},Object(d.b)({list:function(t){return t.example.list},sortAll:function(t){return t.exampleSort.all}})),{},{sorts:function(){return l()(this.list,"extraData.cascader_example_sort")||[]}}),mounted:function(){this.sortData=l()(this.$refs,"breadcrumb.sortData")||[]},beforeRouteUpdate:function(t,e,r){this.$api.getExamples(t.query),t.query.sort&&this.$api.getExampleSorts(t.query.sort);var n=document.getElementsByClassName("ant-back-top")[0];n&&n.click(),r()},methods:{onSearch:function(t){this.$router.push({name:this.$route.name,query:m({},t)})}},head:function(){return{title:"示例"}}},v=r(44),component=Object(v.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("breadcrumb",{ref:"breadcrumb",attrs:{id:1*t.$route.query.sort,sorts:t.sorts,"list-name":t.$route.name,"list-title":"示例"}}),t._v(" "),r("client-only",[r("a-card",{staticStyle:{margin:"20px 0"},attrs:{bordered:!1}},[r("sort-search",{attrs:{"api-name":"getExampleSorts","list-data":t.sortData,loading:t.list.loading},on:{search:t.onSearch}})],1)],1),t._v(" "),r("div",{staticStyle:{overflow:"hidden"}},[r("a-row",{attrs:{gutter:[20,20],type:"flex",justify:"space-between"}},[r("a-col",{attrs:{xs:24,lg:20}},[r("a-card",{attrs:{bordered:!1}},[r("a-list",{attrs:{"item-layout":"vertical",size:"large","data-source":t.list.data},scopedSlots:t._u([{key:"renderItem",fn:function(e){return[r("a-list-item",{key:"item.id"},[r("a-list-item-meta",{scopedSlots:t._u([{key:"title",fn:function(){return[r("nuxt-link",{attrs:{to:"/examples/"+e.id}},[t._v("\n                      "+t._s(e.title)+"\n                    ")]),t._v(" "),e.collection.name?r("a-tag",[t._v("\n                      "+t._s(e.collection.name)+"\n                    ")]):t._e()]},proxy:!0},{key:"avatar",fn:function(){return[r("user-avatar",{attrs:{uid:e.created_by_uid}})]},proxy:!0},{key:"description",fn:function(){return[r("user-name",{attrs:{uid:e.created_by_uid}}),t._v(" "),r("client-only",[r("span",{staticStyle:{margin:"0 8px"}},[t._v("•")])]),t._v("\n                    "+t._s(t._f("unixFormat")(e.created_at,"MM-DD HH:mm"))+"\n                  ")]},proxy:!0}],null,!0)})],1)]}}])}),t._v(" "),r("pagination",{attrs:{current:t.list.current,total:t.list.total}})],1)],1),t._v(" "),r("a-col",{attrs:{xs:24,lg:4}},[r("sort-list",{attrs:{"list-data":t.sortAll}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Breadcrumb:r(788).default,SortSearch:r(853).default,UserAvatar:r(794).default,UserName:r(789).default,Pagination:r(796).default,SortList:r(854).default})}}]);