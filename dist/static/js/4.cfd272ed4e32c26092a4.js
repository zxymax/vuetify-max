webpackJsonp([4],{ty6V:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{dialog:!1,fullScreen:!0,search:"",pagination:{},selected:[],headers:[{text:"Dessert (100g serving)",align:"left",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Sodium (mg)",value:"sodium"},{text:"Calcium (%)",value:"calcium"},{text:"Iron (%)",value:"iron"}],meetups:[{value:!1,name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"},{value:!1,name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:"8%",iron:"1%"},{value:!1,name:"Eclair",calories:262,fat:16,carbs:23,protein:6,sodium:337,calcium:"6%",iron:"7%"},{value:!1,name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,sodium:413,calcium:"3%",iron:"8%"},{value:!1,name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,sodium:327,calcium:"7%",iron:"16%"},{value:!1,name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,sodium:50,calcium:"0%",iron:"0%"},{value:!1,name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,sodium:38,calcium:"0%",iron:"2%"},{value:!1,name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,sodium:562,calcium:"0%",iron:"45%"},{value:!1,name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,sodium:326,calcium:"2%",iron:"22%"},{value:!1,name:"KitKat",calories:518,fat:26,carbs:65,protein:7,sodium:54,calcium:"12%",iron:"6%"}]}},computed:{pages:function(){return this.pagination.rowsPerPage?Math.ceil(this.meetups.length/this.pagination.rowsPerPage):0}},methods:{}},n={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-app",{attrs:{id:"inspire"}},[t("v-card",[t("v-btn",{attrs:{color:"primary"},on:{click:function(e){a.dialog=!0}}},[a._v("Open Dialog")]),a._v(" "),t("v-dialog",{attrs:{fullscreen:a.fullScreen,transition:"dialog-bottom-transition",overlay:!1,scrollable:""},model:{value:a.dialog,callback:function(e){a.dialog=e},expression:"dialog"}},[t("v-card",[t("v-toolbar",{staticClass:"primary",staticStyle:{flex:"0 0 auto"},attrs:{dark:""}},[t("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(e){a.dialog=!1}}},[t("v-icon",[a._v("close")])],1),a._v(" "),t("v-toolbar-title",[a._v("Data")]),a._v(" "),t("v-spacer")],1),a._v(" "),t("v-card-text",[t("v-card-title",[a._v("\n            Nutrition\n            "),t("v-spacer")],1),a._v(" "),t("div",[t("v-data-table",{staticClass:"elevation-1",attrs:{items:a.meetups,pagination:a.pagination,"hide-actions":""},on:{"update:pagination":function(e){a.pagination=e}},scopedSlots:a._u([{key:"items",fn:function(e){return[t("td",[a._v(a._s(e.item.name))])]}}])}),a._v(" "),t("div",{staticClass:"text-xs-center pt-2"},[t("v-pagination",{attrs:{length:a.pages},model:{value:a.pagination.page,callback:function(e){a.$set(a.pagination,"page",e)},expression:"pagination.page"}})],1)],1)],1),a._v(" "),t("div",{staticStyle:{flex:"1 1 auto"}})],1)],1)],1)],1)},staticRenderFns:[]},o=t("VU/8")(i,n,!1,null,null,null);e.default=o.exports}});
//# sourceMappingURL=4.cfd272ed4e32c26092a4.js.map