webpackJsonp([37],{"7udc":function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=t("Dd8w"),r=t.n(a),o=t("X0ld"),l={components:{},data:function(){return{data:[{timePeriod:"2006 Q3",value:1},{timePeriod:"2006 Q4",value:1.08},{timePeriod:"2007 Q1",value:1.17},{timePeriod:"2007 Q2",value:1.26},{timePeriod:"2007 Q3",value:1.34},{timePeriod:"2007 Q4",value:1.41},{timePeriod:"2008 Q1",value:1.52},{timePeriod:"2008 Q2",value:1.67},{timePeriod:"2008 Q3",value:1.84},{timePeriod:"2008 Q4",value:2.07},{timePeriod:"2009 Q1",value:2.39},{timePeriod:"2009 Q2",value:2.71},{timePeriod:"2009 Q3",value:3.03},{timePeriod:"2009 Q4",value:3.33},{timePeriod:"2010 Q1",value:3.5},{timePeriod:"2010 Q2",value:3.37},{timePeriod:"2010 Q3",value:3.15},{timePeriod:"2010 Q4",value:3.01},{timePeriod:"2011 Q1",value:2.8},{timePeriod:"2011 Q2",value:2.8},{timePeriod:"2011 Q3",value:2.84},{timePeriod:"2011 Q4",value:2.75},{timePeriod:"2012 Q1",value:2.64},{timePeriod:"2012 Q2",value:2.55},{timePeriod:"2012 Q3",value:2.46},{timePeriod:"2012 Q4",value:2.45},{timePeriod:"2013 Q1",value:2.57},{timePeriod:"2013 Q2",value:2.68},{timePeriod:"2013 Q3",value:2.8},{timePeriod:"2013 Q4",value:2.89},{timePeriod:"2014 Q1",value:2.85},{timePeriod:"2014 Q2",value:2.73},{timePeriod:"2014 Q3",value:2.54},{timePeriod:"2014 Q4",value:2.32},{timePeriod:"2015 Q1",value:2.25},{timePeriod:"2015 Q2",value:2.33},{timePeriod:"2015 Q3",value:2.53},{timePeriod:"2015 Q4",value:2.74},{timePeriod:"2016 Q1",value:2.76},{timePeriod:"2016 Q2",value:2.61},{timePeriod:"2016 Q3",value:2.35},{timePeriod:"2016 Q4",value:2.11},{timePeriod:"2017 Q1",value:2.08},{timePeriod:"2017 Q2",value:2.2},{timePeriod:"2017 Q3",value:2.38},{timePeriod:"2017 Q4",value:2.59},{timePeriod:"2018 Q1",value:2.63},{timePeriod:"2018 Q2",value:2.67},{timePeriod:"2018 Q3",value:2.64},{timePeriod:"2018 Q4",value:2.5},{timePeriod:"2019 Q1",value:2.31},{timePeriod:"2019 Q2",value:2.04},{timePeriod:"2019 Q3",value:1.83},{timePeriod:"2019 Q4",value:1.71},{timePeriod:"2020 Q1",value:1.65},{timePeriod:"2020 Q2",value:1.59},{timePeriod:"2020 Q3",value:1.58}]}},mounted:function(){var e=[{type:"1-3秒",value:.16},{type:"4-10秒",value:.125},{type:"11-30秒",value:.24},{type:"31-60秒",value:.19},{type:"1-3分",value:.22},{type:"3-10分",value:.05},{type:"10-30分",value:.01},{type:"30+分",value:.015}],i=new o.Column("container",{data:e,xField:"type",yField:"value",seriesField:"value",color:function(e){return e.value<.05?"#F4664A":"#5B8FF9"},legend:!1});i.render(),setInterval(function(){i.changeData(e.map(function(e){return r()({},e,{value:e.value*Math.random()})}))},1200),this.containerGs(),this.containerGz()},methods:{containerGs:function(){var e=this.data,i=2,t=new o.Area("containerGs",{data:e.slice(0,i),xField:"timePeriod",yField:"value",xAxis:{range:[0,1]}});t.render();var a=setInterval(function(){i===e.length?clearInterval(a):(i+=1,t.changeData(e.slice(0,i)))},400)},containerGz:function(){var e=["#F4664A","#FAAD14","#30BF78"],i=function(i){return i<.4?e[0]:i<.6?e[1]:e[2]},t=new o.Gauge("containerGz",{percent:.2,range:{color:i(.2)},indicator:{pointer:{style:{stroke:"#D0D0D0"}},pin:{style:{stroke:"#D0D0D0"}}},axis:{label:{formatter:function(e){return 100*Number(e)}},subTickLine:{count:3}},statistic:{content:{formatter:function(e){return"Rate: "+(100*e.percent).toFixed(0)+"%"}},style:{fontSize:60}},animation:!1});t.render();var a=.2,r=setInterval(function(){a>=.85?clearInterval(r):(a+=.001,t.changeData(a),t.update({range:{color:i(a)}}))},100)}},created:function(){}},u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"demo"},[t("div",{staticClass:"box"},[t("h3",[e._v("动态更新的柱状图")]),e._v(" "),t("div",{attrs:{id:"container"}})]),e._v(" "),t("div",{staticClass:"box"},[t("h3",[e._v("动态更新的面积图")]),e._v(" "),t("div",{attrs:{id:"containerGs"}})]),e._v(" "),t("div",{staticClass:"box"},[t("h3",[e._v("动态更新的仪表盘")]),e._v(" "),t("div",{attrs:{id:"containerGz"}})])])}]};var n=t("VU/8")(l,u,!1,function(e){t("qKZW")},"data-v-18faccaf",null);i.default=n.exports},qKZW:function(e,i){}});
//# sourceMappingURL=37.520af18b33288d3b4cc5.js.map