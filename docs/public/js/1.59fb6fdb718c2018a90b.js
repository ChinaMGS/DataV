webpackJsonp([1],{Mn4V:function(e,t){},"qG+7":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("X0ld"),i={components:{},data:function(){return{data:[{year:"1991",value:3},{year:"1992",value:6},{year:"1993",value:3.5},{year:"1994",value:5},{year:"1995",value:4.9},{year:"1996",value:6},{year:"1997",value:7},{year:"1998",value:3},{year:"1999",value:13}]}},mounted:function(){this.lineFun()},methods:{lineFun:function(){var e=this.data,t=new a.Line("container",{data:e,xField:"year",yField:"value",point:{size:5,shape:"diamond",style:{stroke:"#FE740C",lineWidth:2,fillOpacity:.6}},yAxis:{label:{formatter:function(e){return e+"k"},style:{fill:"#FE740C"}}},label:{fill:"#FE740C"},annotations:[{type:"regionFilter",start:["min","median"],end:["max","0"],color:"#F4664A"},{type:"text",position:["min","median"],content:"辅助标记",offsetY:-4,style:{textBaseline:"bottom"}},{type:"line",start:["min","median"],end:["max","median"],style:{stroke:"#F4664A",lineDash:[2,2]}}]});t.on("element:click",function(e){console.log(e)}),t.on("annotation:click",function(e){console.log(e)}),t.on("axis-label:click",function(e){console.log(e)}),t.render()}},created:function(){}},l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"demo"},[t("div",{staticClass:"box"},[t("h3",[this._v("带有辅助标记的折线图")]),this._v(" "),t("div",{attrs:{id:"container"}})])])}]};var o=n("VU/8")(i,l,!1,function(e){n("Mn4V")},"data-v-0c4085ec",null);t.default=o.exports}});
//# sourceMappingURL=1.59fb6fdb718c2018a90b.js.map