webpackJsonp([16],{ERLx:function(t,e){},k8W5:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r("X0ld"),d={components:{},data:function(){return{data:[{name:"London","月份":"Jan.","月均降雨量":18.9},{name:"London","月份":"Feb.","月均降雨量":28.8},{name:"London","月份":"Mar.","月均降雨量":39.3},{name:"London","月份":"Apr.","月均降雨量":81.4},{name:"London","月份":"May","月均降雨量":47},{name:"London","月份":"Jun.","月均降雨量":20.3},{name:"London","月份":"Jul.","月均降雨量":24},{name:"London","月份":"Aug.","月均降雨量":35.6},{name:"Berlin","月份":"Jan.","月均降雨量":12.4},{name:"Berlin","月份":"Feb.","月均降雨量":23.2},{name:"Berlin","月份":"Mar.","月均降雨量":34.5},{name:"Berlin","月份":"Apr.","月均降雨量":99.7},{name:"Berlin","月份":"May","月均降雨量":52.6},{name:"Berlin","月份":"Jun.","月均降雨量":35.5},{name:"Berlin","月份":"Jul.","月均降雨量":37.4},{name:"Berlin","月份":"Aug.","月均降雨量":42.4}],datalist:[{product_type:"办公用品",sex:"男",order_amt:8,product_sub_type:"橡皮擦"},{product_type:"办公用品",sex:"男",order_amt:10,product_sub_type:"书架"},{product_type:"办公用品",sex:"男",order_amt:20,product_sub_type:"砚台"},{product_type:"办公用品",sex:"女",order_amt:13,product_sub_type:"砚台"},{product_type:"办公用品",sex:"女",order_amt:21,product_sub_type:"橡皮擦"},{product_type:"办公用品",sex:"女",order_amt:21,product_sub_type:"书架"},{product_type:"家电家具",sex:"男",order_amt:13,product_sub_type:"洗衣机"},{product_type:"家电家具",sex:"女",order_amt:2,product_sub_type:"洗衣机"},{product_type:"家电家具",sex:"男",order_amt:5,product_sub_type:"微波炉"},{product_type:"家电家具",sex:"男",order_amt:14,product_sub_type:"电磁炉"},{product_type:"家电家具",sex:"女",order_amt:23,product_sub_type:"微波炉"},{product_type:"家电家具",sex:"女",order_amt:23,product_sub_type:"电磁炉"},{product_type:"电子产品",sex:"男",order_amt:33,product_sub_type:"电脑"},{product_type:"电子产品",sex:"女",order_amt:4,product_sub_type:"电脑"},{product_type:"电子产品",sex:"女",order_amt:23,product_sub_type:"switch"},{product_type:"电子产品",sex:"男",order_amt:20.9,product_sub_type:"switch"},{product_type:"电子产品",sex:"男",order_amt:5.9,product_sub_type:"鼠标"},{product_type:"电子产品",sex:"女",order_amt:5.9,product_sub_type:"鼠标"}]}},mounted:function(){var t=this.data;new o.Column("container",{data:t,isGroup:!0,xField:"月份",yField:"月均降雨量",seriesField:"name",label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]}}).render(),this.containerg2()},methods:{containerg2:function(){var t=this.datalist;new o.Column("containerg2",{data:t,xField:"product_type",yField:"order_amt",isGroup:!0,isStack:!0,seriesField:"product_sub_type",groupField:"sex"}).render()}},created:function(){}},n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo"},[e("div",{staticClass:"box"},[e("h3",[this._v("分组柱状图")]),this._v(" "),e("div",{attrs:{id:"container"}})]),this._v(" "),e("div",{staticClass:"box"},[e("h3",[this._v("堆叠分组柱状图")]),this._v(" "),e("div",{attrs:{id:"containerg2"}})])])}]};var a=r("VU/8")(d,n,!1,function(t){r("ERLx")},"data-v-1f0be069",null);e.default=a.exports}});
//# sourceMappingURL=16.b002da85a09d28b554e8.js.map