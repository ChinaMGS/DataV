webpackJsonp([21],{"+co1":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={DateTimeFormat:function(e){if(!e)return"";var t=new Date(parseInt(e));return t.getFullYear()+"-"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-"+(t.getDate()<10?"0"+t.getDate():t.getDate())+" "+(t.getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())},DateFormat:function(e){if(!e)return"";var t=new Date(parseInt(e));return t.getFullYear()+"-"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-"+(t.getDate()<10?"0"+t.getDate():t.getDate())},DayHourMinuteSecondsFormat:function(e){if(!e)return"";var t=new Date(parseInt(e));return(t.getDate()<10?"0"+t.getDate():t.getDate())+"天"+(t.getHours()<10?"0"+t.getHours():t.getHours())+"小时"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+"分"+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())+"秒"},YearFormat:function(e){return e?new Date(parseInt(e)).getFullYear():""},MonthDayFormat:function(e){if(!e)return"";var t=new Date(parseInt(e));return(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-"+(t.getDate()<10?"0"+t.getDate():t.getDate())},houseMiuntesFormat:function(e){if(!e)return"";var t=new Date(parseInt(e));return(t.getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())},DateFormatAll:function(e){if(!e)return"";var t=new Date(parseInt(e));return t.getFullYear()+"/"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"/"+(t.getDate()<10?"0"+t.getDate():t.getDate())+" "+(t.getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":"+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())},DateFormatAllText:function(e){if(!e)return"";var t=new Date(parseInt(e));return t.getFullYear()+"年"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"月"+(t.getDate()<10?"0"+t.getDate():t.getDate())+"日 "+(t.getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":"+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())},YMDHMText:function(e){if(!e)return"";var t=new Date(parseInt(e));return t.getFullYear()+"年"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"月"+(t.getDate()<10?"0"+t.getDate():t.getDate())+"日 "+(t.getHours()<10?"0"+t.getHours():t.getHours())+"时"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+"分"},DateFormatAllAllText:function(e){if(!e)return"";var t=new Date(parseInt(e));return t.getFullYear()+"年"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"月"+(t.getDate()<10?"0"+t.getDate():t.getDate())+"日 "+(t.getHours()<10?"0"+t.getHours():t.getHours())+"时"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+"分"+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())+"秒"},ChineseTimerFilter:function(e){if(!e)return"";var t=new Date(parseInt(e));return t.getFullYear()+"年"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"月"+(t.getDate()<10?"0"+t.getDate():t.getDate())+"日"},YMDHText:function(e){if(!e)return"";var t=new Date(parseInt(e));return t.getFullYear()+"年"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"月"+(t.getDate()<10?"0"+t.getDate():t.getDate())+"日 "+(t.getHours()<10?"0"+t.getHours():t.getHours())+"时"},DateFormatXie:function(e){if(!e)return"";var t=new Date(parseInt(e));return t.getFullYear()+"/"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"/"+(t.getDate()<10?"0"+t.getDate():t.getDate())}}},"76E/":function(e,t){},"7T/y":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("YaEn"),a={addKeepAliveArr:function(e){e.keepAliveArr.push(r.a.currentRoute.name)},removeKeepAliveArr:function(e){e.keepAliveArr=[]}};t.default={namespaced:!0,state:{keepAliveArr:[]},getters:{},actions:{},mutations:a}},Ib9y:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("woOf"),a=n.n(r),o=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var u=n("VU/8")({name:"App"},i,!1,function(e){n("Ib9y")},null,null).exports,s=n("YaEn"),l=n("mtWM"),c=n.n(l),g=n("NYxO"),d={};o.default.use(g.a);var p=n("w+hY"),f=p.keys().reduce(function(e,t){var n=t.replace(/^\.\/(.*)\.\w+$/,"$1"),r=p(t);return e[n]=r.default,e},{}),h=new g.a.Store({modules:f,getters:d,mutations:{refreshToken:function(){}}}),m=n("BUS2"),v={user:"/api/user/v1",file:"/api/standardfile/v1",auth:"/api/auth/v1",dev:"/api/development/v1",pay:"/api/standardpay/v2",standardarea:"/api/standardarea/v1"},M=n("//Fk"),w=n.n(M),b=n("zL8q"),D=n.n(b);function y(){var e=window.sessionStorage.getItem("tokenTime"),t=parseInt(window.sessionStorage.getItem("tokenQueryTime")),n=(new Date).getTime();return e-(Math.ceil(n/1e3)-t)<300}"127.0.0.1"===location.hostname||"localhost"===location.hostname||"127.0.0.1"===location.hostname?c.a.defaults.baseURL="/api/yifd":c.a.defaults.baseURL="https://"+location.hostname+"/proxy",window.isRefreshing=!1,window.tokenOverdue=!1,window.isLoginOverdue=!1,y();var k=function(e){var t=e.status,n=e.data.msg;switch(t){case 401:sessionStorage.getItem("token")?(window.isLoginOverdue||(window.isLoginOverdue=!0,setTimeout(function(){window.isLoginOverdue=!1},1500)),b.Message.warning("登陆过期请重新登陆！"),window.sessionStorage.clear(),window.location="#/"):window.location="#/";break;case 403:s.a.push({path:"/403"});break;case 404:break;case 500:b.Message.error(n);break;default:console.log(n)}},S=c.a.create({timeout:1e5});S.interceptors.request.use(function(e){var t=window.sessionStorage.getItem("token");return t?(e.headers.Authorization=t,e.url.includes("ossUpload")?e.timeout=6e5:e.timeout=1e5,!y()||e.url.includes("oauth/token")?e:(window.isRefreshing||(window.isRefreshing=!0),e)):e},function(e){return console.log(e),w.a.reject(e)}),S.interceptors.response.use(function(e){return 200===e.status?w.a.resolve(e):w.a.reject(e),e},function(e){var t=e.response;return console.log(e),console.log(t),t?(console.log(t),k(t),w.a.reject(t)):w.a.reject(e)});var H=S,I=n("mw3O"),j=n.n(I),P={userCenterApi:{apiSignPicture:function(){return H.post(v.dev+"/sign/getSignPicture")},apiApplyPersonalSign:function(e){return H.post(v.dev+"/sign/applyPersonalSign",e)},apiUserCore:function(){return H.post(v.user+"/sysOperator/getOperInfo")},apiUserLogoUpdate:function(e){return H.post(v.user+"/sysOperator/saveDeptLogo",j.a.stringify(e))}}},F=n("fZjL"),x=n.n(F),A=n("z80Y"),Y=A.keys().reduce(function(e,t){var n=t.replace(/^\.\/(.*)\.\w+$/,"$1"),r=A(t);return e[n]=r.default,e},{});x()(Y).forEach(function(e){var t=Y[e];x()(t).forEach(function(e){o.default.filter(e,t[e])})});n("bkxe"),n("76E/"),n("jVjy"),n("dnow");var L=function(e,t,n){e.addEventListener(t,n,!1)},$=function(e){L(e,"keyup",function(){var t=String(e.value).replace(/[^(\d|.)]/g,"");e.value=function(e){for(var t=e.toString().split("."),n=t[0],r="",a=0;a<n.length;a++)r+=n.substr(a,1).replace(",","");for(var o=0;o<Math.floor((r.length-(1+o))/3);o++)r=r.substring(0,r.length-(4*o+3))+","+r.substring(r.length-(4*o+3));return 2===t.length?r+"."+t[1]:r}(t)})},O={bind:function(e,t){switch("input"!==e.tagName.toLowerCase()&&(e=e.getElementsByTagName("input")[0]),function(e){L(e,"keyup",function(){e.value=e.value.replace(/\s+/,"")})}(e),t.arg){case"int":!function(e){L(e,"keyup",function(){e.value=e.value.replace(/\D/g,"")})}(e);break;case"price":!function(e){L(e,"keyup",function(){e.value=e.value.replace(/[^\d.]*/g,""),isNaN(e.value)&&(e.value="")})}(e);break;case"financeMoney":$(e)}}},T=function(e){e.directive("inputFilter",O)};window.Vue&&(window.inputFilter=O,o.default.use(T)),O.install=T;var N=O,_={forbidRetreat:function(){history.pushState(null,null,document.URL),window.addEventListener("popstate",function(){history.pushState(null,null,document.URL)})}},E={regPhone:/^[1][3-9][0-9]{9}$/,regBank:/^([1-9]{1})(\d{14}|\d{18})$/,regId:/(^\d{15}$)|(^\d{17}([0-9]|X|x)$)/,regSocialCreditCode:/^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g,regUserName:/^[\u4E00-\u9FA5\uf900-\ufa2d]{2,20}$/,regPassword:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{6,18}$/,regNoteVerify:/^\d{6}$/,regImgVerify:/^[a-zA-Z0-9]{4}$/,regMoney:/((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/,regIntMoney:/((^[1-9]\d{0,6})|10000000)$/,regRangeMoney:/((^[1-9]\d{0,7})|100000000)$/};o.default.config.productionTip=!1,o.default.use(D.a),o.default.use(_),a()(o.default.prototype,{$api:P,axios:c.a,$sha256:m.sha256,$regular:E,$baseJs:_}),o.default.directive("preventReClick",{inserted:function(e,t){e.addEventListener("click",function(){e.disabled||(e.disabled=!0,setTimeout(function(){e.disabled=!1},t.value||1500))})}}),o.default.directive("inputFilter",N),new o.default({router:s.a,store:h,render:function(e){return e(u)}}).$mount("#app")},YaEn:function(e,t,n){"use strict";var r=n("BO1k"),a=n.n(r),o=n("7+uW"),i=n("/ocq"),u=i.a.prototype.push;i.a.prototype.push=function(e){return u.call(this,e).catch(function(e){return e})},o.default.use(i.a);var s=[{path:"/",name:"index",component:function(){return n.e(6).then(n.bind(null,"8hXn"))},redirect:"/histogram",children:[{path:"/ss",name:"line_index",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"qG+7"))}},{path:"/line_index",name:"Line_indexs",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"qG+7"))}},{path:"/multiLine",name:"MultiLine",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"XN9x"))}},{path:"/ladderLine",name:"LadderLine",component:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"Vyjn"))}},{path:"/area_index",name:"Area_index",component:function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,"9wvY"))}},{path:"/stackingArea",name:"StackingArea",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"++lv"))}},{path:"/percentageHeap",name:"PercentageHeap",component:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"7nzh"))}},{path:"/histogram",name:"Histogram",component:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"Qc2h"))}},{path:"/histogramStacking",name:"HistogramStacking",component:function(){return Promise.all([n.e(0),n.e(19)]).then(n.bind(null,"TNoY"))}},{path:"/groupingHistogram",name:"GroupingHistogram",component:function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"k8W5"))}},{path:"/linkageHistogram",name:"LinkageHistogram",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"Iryl"))}},{path:"/intervalHistogram",name:"IntervalHistogram",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"Z9v/"))}},{path:"/barChart",name:"BarChart",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"Yqcb"))}},{path:"/stacked-bar-chart",name:"Stacked-bar-chart",component:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"Pnj3"))}},{path:"/grouping-bar-chart",name:"Grouping-bar-chart",component:function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"dGTl"))}},{path:"/bar-chart",name:"Bar-chart",component:function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"aWnb"))}},{path:"/Interval-bar-chart",name:"Interval-bar-chart",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"R8hw"))}},{path:"/pieChart",name:"PieChart",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"am5M"))}}]},{path:"/demoIndex",name:"demoIndex",component:function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,"+RJ3"))}}],l=function(){return new i.a({scrollBehavior:function(){return{y:0}},routes:s})},c=l();c.beforeEach(function(e,t,n){sessionStorage.getItem("menuData")&&"null"!==sessionStorage.getItem("menuData")&&function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments[1],r=!0,o=!1,i=void 0;try{for(var u,s=a()(t);!(r=(u=s.next()).done);r=!0){var l=u.value;l.path&&"/"!==l.path&&l.path===n.path&&(n.meta.keepalive=!0),l.children&&0!==l.children.length&&e(l.children,n)}}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}}(JSON.parse(sessionStorage.getItem("menuData")),e),n()}),t.a=c},bkxe:function(e,t){},dnow:function(e,t){},jVjy:function(e,t){},vxy7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={MoneyFormat:function(e){if(e&&null!=e){var t=Number(e);"number"==typeof t&&0!==t&&(e=t.toFixed(2));var n=(e=String(e)).split(".")[0];if(e.split(".")[1])var r=e.split(".")[1];var a=n.split("").reverse().join("").match(/(\d{1,3})/g);return e.split(".")[1]?(Number(e)<0?"-":"")+a.join(",").split("").reverse().join("")+"."+r:(Number(e)<0?"-":"")+a.join(",").split("").reverse().join("")}return 0===e?"0":""},WanMoneyFormat:function(e){if(e&&null!=e){e=Math.ceil(e/1e3)/10;var t=(e=String(e)).split(".")[0];if(e.split(".")[1])var n=e.split(".")[1];var r=t.split("").reverse().join("").match(/(\d{1,3})/g);return e.split(".")[1]?(Number(e)<0?"-":"")+r.join(",").split("").reverse().join("")+"."+n:(Number(e)<0?"-":"")+r.join(",").split("").reverse().join("")}return 0===e?"0":""},numToText:function(e){if(e&&null!=e){var t=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],n=["","拾","佰","仟","萬","亿"],r="",a=0;return e.toString().split("").reverse().join("").replace(/\d{1,4}/g,function(e){0!==a&&(e=a%2!=0?n[4]+e:n[5]+e),e=e.replace(/\d/g,function(e,r){return"0"!==e?n[a>0?r-1:r]+t[e]:t[e]}),r+=e,a+=1}),(r=(r=r.replace(/[零]{2,}/g,function(e){return"零"}).split("").reverse().join("")).replace(/(零仟)|(零拾)/g,function(e){return""}).replace(/(零亿)|(零亿零萬)/g,function(e){return"亿"}).replace(/(零萬)/g,function(e){return"萬"}).replace(/(亿萬)/g,function(e){return"亿"}).replace(/零$/,function(e){return""}))&&(r+="元整"),r}return 0===e?"零元整":""}}},"w+hY":function(e,t,n){var r={"./keepAlive.js":"7T/y"};function a(e){return n(o(e))}function o(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="w+hY"},z80Y:function(e,t,n){var r={"./date.js":"+co1","./price.js":"vxy7"};function a(e){return n(o(e))}function o(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="z80Y"}},["NHnr"]);
//# sourceMappingURL=app.72d4874366f854e0b3d5.js.map