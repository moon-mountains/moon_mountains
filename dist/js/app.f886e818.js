(function(e){function t(t){for(var a,r,i=t[0],c=t[1],l=t[2],f=0,h=[];f<i.length;f++)r=i[f],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&h.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(h.length)h.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],a=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},o=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("85ec"),n=s.n(a);n.a},"4f8d":function(e,t,s){console.log("---process.env",Object({NODE_ENV:"production",BASE_URL:""}));var a="http://47.106.183.152:8088";t.api={getWxUserInfo:"".concat(a,"/auth/wx/login"),queryAllSalesman:"".concat(a,"/auth/wx/queryAllSalesman"),saveReportCaseBaseInfo:"".concat(a,"/auth/wx/saveWxCaseBaseInfo"),queryWxCaseStatusList:"".concat(a,"/auth/wx/queryWxCaseStatusList"),queryWxCaseLog:"".concat(a,"/auth/wx/queryWxCaseLog"),queryWxNewCaseStatus:"".concat(a,"/auth/wx/queryWxNewCaseStatus")}},"56d7":function(e,t,s){"use strict";s.r(t);s("d3b7"),s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("5aea");var a=s("2b0e"),n=s("2f62"),o=s("bc3a"),r=s.n(o),i=s("4f8d"),c={state:{userInfo:{openid:""}},mutations:{getWxUserInfo:function(e,t){e.userInfo=t||{}}},actions:{getWxUserInfo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r()({method:"post",url:i["api"].getWxUserInfo,data:t}).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(200===t.code){var s=t.data;console.log("getWxUserInfo-----",s),e.commit("getWxUserInfo",s)}return t})).catch((function(e){console.log("getWxUserInfo----err",e)}))},saveReportCaseBaseInfo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return console.log("--get--token",e.state.userInfo.token),r()({headers:{Authorization:e.state.userInfo.token||""},method:"post",url:i["api"].saveReportCaseBaseInfo,data:t}).then((function(e){return console.log("saveReportCaseBaseInfo-----",e),e})).catch((function(e){console.log("saveReportCaseBaseInfo----err",e)}))},queryAllSalesman:function(e){return r()({headers:{Authorization:e.state.userInfo.token||""},method:"post",url:i["api"].queryAllSalesman}).then((function(e){return console.log("queryAllSalesman-----",e),e})).catch((function(e){console.log("queryAllSalesman----err",e)}))},queryWxCaseStatusList:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return console.log("queryWxCaseStatusList--get--token",e.state.userInfo.token),r()({headers:{Authorization:e.state.userInfo.token||""},method:"post",url:i["api"].queryWxCaseStatusList,data:t}).then((function(e){return console.log("queryWxCaseStatusList-----",e),e})).catch((function(e){console.log("queryWxCaseStatusList----err",e)}))},queryWxCaseLog:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return console.log("queryWxCaseLog--get--token",e.state.userInfo.token),r()({headers:{Authorization:e.state.userInfo.token||""},method:"post",url:i["api"].queryWxCaseLog,data:t}).then((function(e){return console.log("queryWxCaseLog-----",e),e})).catch((function(e){console.log("queryWxCaseLog----err",e)}))},queryWxNewCaseStatus:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return console.log("queryWxNewCaseStatus--get--token",e.state.userInfo.token),r()({headers:{Authorization:e.state.userInfo.token||""},method:"post",url:i["api"].queryWxNewCaseStatus,data:t}).then((function(e){return console.log("queryWxNewCaseStatus-----",e),e})).catch((function(e){console.log("queryWxNewCaseStatus----err",e)}))}},getters:{}},l=c;a["a"].use(n["a"]);var u=new n["a"].Store({modules:{caseInfo:l}}),f=u,h=s("b970"),d=(s("499a"),s("157a"),s("8c4f")),m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.isShowAll?e._e():s("section",[s("van-form",{attrs:{autocomplete:"off"},on:{submit:e.onSubmit}},[s("van-field",{staticClass:"m_1",attrs:{"input-align":"right",name:"业务员",label:"业务员",placeholder:"业务员",rules:[{required:!0,message:"请填写业务员"}]},model:{value:e.caseInfoForm.saleAgentName,callback:function(t){e.$set(e.caseInfoForm,"saleAgentName",t)},expression:"caseInfoForm.saleAgentName"}}),s("van-field",{staticClass:"m_1",attrs:{"input-align":"right",name:"公司名称",label:"公司名称",placeholder:"公司名称",rules:[{required:!0,message:"请填写公司名称"}]},model:{value:e.caseInfoForm.insurePersion,callback:function(t){e.$set(e.caseInfoForm,"insurePersion",t)},expression:"caseInfoForm.insurePersion"}}),s("van-field",{staticClass:"m_1",attrs:{"input-align":"right",name:"联系人",label:"联系人",placeholder:"联系人",rules:[{required:!0,message:"请填写联系人"}]},model:{value:e.caseInfoForm.linkPerson,callback:function(t){e.$set(e.caseInfoForm,"linkPerson",t)},expression:"caseInfoForm.linkPerson"}}),s("van-field",{staticClass:"m_1",attrs:{"input-align":"right",name:"联系人电话",label:"联系人电话",placeholder:"联系人电话",rules:[{required:!0,message:"请填写联系人电话"}]},model:{value:e.caseInfoForm.customerPhone,callback:function(t){e.$set(e.caseInfoForm,"customerPhone",t)},expression:"caseInfoForm.customerPhone"}}),s("van-cell",{attrs:{title:"出险时间","is-link":"",value:e.caseInfoForm.insureHappenTime},on:{click:e.showPopup}}),s("van-popup",{attrs:{position:"bottom"},model:{value:e.showTime,callback:function(t){e.showTime=t},expression:"showTime"}},[s("van-datetime-picker",{attrs:{type:"datetime",title:"选择年月日小时","min-date":e.minDate,"max-date":e.maxDate,loading:e.isLoadingShow,formatter:e.formatter},on:{cancel:function(t){e.showTime=!1},confirm:e.confirmPicker},model:{value:e.currentDate,callback:function(t){e.currentDate=t},expression:"currentDate"}})],1),s("van-field",{staticClass:"m_1",attrs:{"input-align":"right",name:"事故原因",label:"事故原因",placeholder:"事故原因",rules:[{required:!0,message:"请填写事故原因"}]},model:{value:e.caseInfoForm.accidentReason,callback:function(t){e.$set(e.caseInfoForm,"accidentReason",t)},expression:"caseInfoForm.accidentReason"}}),s("van-field",{staticClass:"m_1",attrs:{"input-align":"right",name:"事故经过",label:"事故经过",placeholder:"事故经过"},model:{value:e.caseInfoForm.accidentDes,callback:function(t){e.$set(e.caseInfoForm,"accidentDes",t)},expression:"caseInfoForm.accidentDes"}}),s("van-action-sheet",{attrs:{round:!1,actions:e.renderPopList},on:{select:e.selectReason},model:{value:e.isShowSelection,callback:function(t){e.isShowSelection=t},expression:"isShowSelection"}}),s("div",{staticClass:"m_16"},[s("van-button",{attrs:{block:"",type:"primary","native-type":"submit"}},[e._v("提交")])],1)],1)],1)},p=[],v=(s("99af"),s("4160"),s("b0c0"),s("159b"),s("5530")),g={className:"b_g_g"},S=(s("c975"),s("ac1f"),s("841c"),s("1276"),function(e){var t=decodeURIComponent(location.search),s=new Object;if(-1!=t.indexOf("?"))for(var a=t.substr(1),n=a.split("&"),o=0;o<n.length;o++)s[n[o].split("=")[0]]=unescape(n[o].split("=")[1]);return Object.assign(s,e),s?s.code:""}),b={data:function(){return{typeFlag:"",isShowAll:!1,showTime:!1,isShowSelection:!1,isLoadingShow:!1,minDate:new Date(2020,0,1),maxDate:new Date(2050,11,30),currentDate:new Date,caseInfoForm:{openid:"",saleAgentNo:"",caseInfoStatus:"0",saleAgentName:"",insurePersion:"",linkPerson:"",customerPhone:"",insureHappenTime:"",accidentReason:"",accidentDes:""},renderPopList:[],reasonList:[{name:"车泡水",className:g.className},{name:"车晒爆了",className:g.className}]}},created:function(){this.isShowAll=!1,this.getCode()},computed:Object(v["a"])({},Object(n["c"])({userInfo:function(e){return e.caseInfo.userInfo||{}}})),methods:Object(v["a"])(Object(v["a"])({},Object(n["b"])(["saveReportCaseBaseInfo","getWxUserInfo","queryAllSalesman"])),{},{getqueryAllSalesman:function(){var e=this;this.queryAllSalesman().then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(200===t.code){var s=t.data;e.renderPopList=s,e.renderPopList.forEach((function(e){e.name=e.nickName})),e.isShowSelection=!0}else e.$notify(t.message||"暂无信息")}))},getCode:function(){if(this.userInfo.nickname)return this.wxUserInfo=this.userInfo,void(this.isShowAll=!0);var e=S(this.$route.query)||"";this.getOpenId(e)},getOpenId:function(e){var t=this;console.log("code---",e),this.getWxUserInfo({code:e}).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(200===e.code){console.log("getWxUserInfo---200",e);var s=e.data;if(!s.nickname)return void t.$notify("未授权成功，请重新进入");t.wxUserInfo=s,console.log("--token",s.token),window.sessionStorage.setItem("token",s.token||""),t.isShowAll=!0}else t.$notify("请重新进入")}))},showPopup:function(){var e=this;this.showTime=!0,this.isLoadingShow=!0,setTimeout((function(){e.isLoadingShow=!1}),500)},confirmPicker:function(e){var t=e.getFullYear(),s=e.getMonth()+1,a=e.getDate(),n=e.getHours(),o=e.getMinutes(),r=e.getSeconds();s>=1&&s<=9&&(s="0".concat(s)),a>=1&&a<=9&&(a="0".concat(a)),n>=0&&n<=9&&(n="0".concat(n)),o>=0&&o<=9&&(o="0".concat(o)),r>=0&&r<=9&&(r="0".concat(r)),this.caseInfoForm.insureHappenTime="".concat(t,"-").concat(s,"-").concat(a," ").concat(n,":").concat(o,":").concat(r),this.showTime=!1},formatter:function(e,t){return"year"===e?"".concat(t,"年"):"month"===e?"".concat(t,"月"):"day"===e?"".concat(t,"日"):"hour"===e?"".concat(t,"时"):t},selectReason:function(e){switch(this.typeFlag){case 1:this.caseInfoForm.saleAgentNo=e.userId,this.caseInfoForm.saleAgentName=e.name;break;case 2:this.caseInfoForm.accidentReason=e.name;break}this.isShowSelection=!1},onSubmit:function(){var e=this;console.log("onSubmit-----",this.caseInfoForm),this.saveReportCaseBaseInfo(this.caseInfoForm).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log("saveReportCaseBaseInfo-----",t),200===t.code&&e.$router.push("userCenter"),"-2"==t.code?e.$notify(t.message||"请填写正确的业务员"):e.$notify(t.message||"提交失败了")}))},showPop:function(e){switch(e){case 1:this.typeFlag=e,this.getqueryAllSalesman();break;case 2:this.typeFlag=e,this.renderPopList=this.reasonList,this.isShowSelection=!0;break}}})},x=b,_=s("2877"),w=Object(_["a"])(x,m,p,!1,null,null,null),I=w.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.isShowAll?s("section",[s("van-nav-bar",{attrs:{title:"个人中心"}}),s("van-row",{staticClass:"m_t_1 b_g_white"},[s("van-col",{staticClass:"h_15",attrs:{span:"6"}},[e.wxUserInfo.headimgurl?s("div",{staticClass:"head_b_img_box"},[s("div",{staticClass:"head_borer"},[s("img",{staticClass:"head_b_img",attrs:{src:e.wxUserInfo.headimgurl}})])]):e._e()]),s("van-col",{staticClass:"h_15",attrs:{span:"18"}},[s("div",[e._v("用户"+e._s(e.wxUserInfo.nickname||"sddgfdfsg"))])])],1),s("van-row",{staticClass:"m_t_1 b_g_white"},[s("van-col",{attrs:{span:"6"}},[e.wxUserInfo.headimgurl?s("div",{staticClass:"head_b_img_b"},[s("div",{staticClass:"head_b"},[s("img",{staticClass:"head_b_img",attrs:{src:e.wxUserInfo.headimgurl}})])]):e._e()]),s("van-col",{attrs:{span:"18"}},[s("div",{staticClass:"my_case",on:{click:e.toCaseListPage}},[s("div",[e._v("我的案件")]),s("van-icon",{attrs:{name:"arrow",size:".4rem",color:"#7c7c7d"}})],1)])],1)],1):e._e()},C=[],L={data:function(){return{isShowAll:!1,avatarUrl:"",wxUserInfo:{}}},created:function(){this.getCode()},computed:Object(v["a"])({},Object(n["c"])({userInfo:function(e){return e.caseInfo.userInfo||{}}})),methods:Object(v["a"])(Object(v["a"])({},Object(n["b"])(["getWxUserInfo"])),{},{getCode:function(){if(this.userInfo.nickname)return this.wxUserInfo=this.userInfo,void(this.isShowAll=!0);var e=S(this.$route.query)||"";this.getOpenId(e)},getOpenId:function(e){var t=this;console.log("code---",e),this.getWxUserInfo({code:e}).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(200===e.code){console.log("getWxUserInfo---200",e);var s=e.data;if(!s.nickname)return void t.$notify("未授权成功，请重新进入");t.wxUserInfo=s||{},t.isShowAll=!0}else t.$notify("请重新进入")}))},toCaseListPage:function(){this.$router.push("caseList")}})},k=L,q=(s("fda1"),Object(_["a"])(k,y,C,!1,null,"0654865f",null)),W=q.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("van-nav-bar",{attrs:{title:"案件列表"}}),e._l(e.caseList,(function(t,a){return s("van-row",{key:a,staticClass:"m_t_2 b_g_white"},[s("van-col",[s("div",{staticClass:"h_117 f_4 m_l_5"},[e._v("案件号:"+e._s(t.caseNo))])]),s("van-col",{attrs:{span:24}},[s("van-cell",{attrs:{title:"状态:",value:e._f("translateStatus")(t.caseStatus),"is-link":""},on:{click:function(s){return e.toCaseDetailPage(t)}}})],1)],1)}))],2)},N=[],P=(s("caad"),{data:function(){return{caseList:[]}},filters:{translateStatus:function(e){var t=["01","02","03","04"],s=["05","06","07"];return t.includes(e)?"处理中":s.includes(e)?"已完成":"待处理"}},created:function(){this.getqueryWxCaseStatusList()},methods:Object(v["a"])(Object(v["a"])({},Object(n["b"])(["queryWxCaseStatusList"])),{},{getqueryWxCaseStatusList:function(){var e=this;this.queryWxCaseStatusList().then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};200===t.code?e.caseList=t.data||[]:e.$notify(t.message||"暂无数据")}))},toCaseDetailPage:function(e){window.localStorage.setItem("caseNo",e.caseNo||""),this.$router.push("caseDetail")}})}),j=P,A=Object(_["a"])(j,O,N,!1,null,null,null),F=A.exports,$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("van-nav-bar",{attrs:{title:"案件详情"}}),s("van-steps",{staticStyle:{"font-size":".2rem"},attrs:{active:e.sureActiv,direction:"vertical"}},e._l(e.renderStepList,(function(t,a){return s("van-step",{key:a},[e._v(e._s(t.text))])})),1),s("van-divider",{staticClass:"h_117 b_g_white",staticStyle:{margin:".13rem 0"},attrs:{"content-position":"left"}},[e._v("案件处理日志")]),e._l(e.caseDetailList,(function(e,t){return s("van-cell-group",{key:t,staticStyle:{"margin-top":".1rem"}},[s("van-cell",{attrs:{"value-class":"over_f_unset",title:"案件号码:",value:e.caseNo||"--"}}),s("van-cell",{attrs:{"value-class":"over_f_unset",title:"报案时间:",value:e.reportCaseTime||"--"}}),s("van-cell",{attrs:{"value-class":"over_f_unset",title:"日志日期:",value:e.caseLogDate||"--"}}),s("van-cell",{attrs:{"value-class":"over_f_unset",title:"日志描述:",value:e.caseLogRemarks||"--"}}),s("van-cell",{attrs:{"value-class":"over_f_unset",title:"操作人员:",value:e.operationName||"--"}})],1)}))],2)},D=[],U={data:function(){return{caseDetailList:[],caseStatus:"0",endStepLineList:[[{caseStatus:"08",lineClass:"l_dis",text:"结案"}],[{caseStatus:"09",lineClass:"l_dis",text:"拒赔"}],[{caseStatus:"10",lineClass:"l_dis",text:"销案"}]],stepLineList:[{caseStatus:"0",lineClass:"l_dis",text:"案件待处理"},{caseStatus:"01",lineClass:"l_dis",text:"案件信息补充"},{caseStatus:"02",lineClass:"l_dis",text:"现场指导客户"},{caseStatus:"03",lineClass:"l_dis",text:"收集资料中"},{caseStatus:"04",lineClass:"l_dis",text:"收集资料待审核"},{caseStatus:"05",lineClass:"l_dis",text:"待定损"},{caseStatus:"06",lineClass:"l_dis",text:"定损"},{caseStatus:"07",lineClass:"l_dis",text:"结案待审核"}],renderStepList:[],allCaseStatusList:[],caseNo:window.localStorage.getItem("caseNo")||""}},created:function(){this.toqueryWxCaseLog(),this.toqueryWxNewCaseStatus(),this.renderline()},computed:{sureActiv:function(){for(var e=0,t=0;t<this.renderStepList.length;t++)if(this.renderStepList[t].caseStatus===this.caseStatus){e=t;break}return e}},methods:Object(v["a"])(Object(v["a"])({},Object(n["b"])(["queryWxCaseLog","queryWxNewCaseStatus"])),{},{toqueryWxCaseLog:function(){var e=this;this.queryWxCaseLog({caseNo:this.caseNo}).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};200===t.code?(e.caseDetailList=t.data||{},console.log("caseDetailList--",e.caseDetailList)):e.$notify(t.message||"暂无数据")}))},toqueryWxNewCaseStatus:function(){var e=this;this.queryWxNewCaseStatus({caseNo:this.caseNo}).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(200===t.code){var s=t.data;e.caseStatus=s.caseStatus||"",e.renderline()}}))},renderline:function(){switch(this.caseStatus){case"08":this.stepLineList.push(this.endStepLineList[0][0]);break;case"09":this.stepLineList.push(this.endStepLineList[1][0]);break;case"10":this.stepLineList.push(this.endStepLineList[2][0]);break}this.renderStepList=this.stepLineList},translateStatus:function(e){var t="";return this.renderStepList.forEach((function(s){s.caseStatus===e&&(t=s.text)})),t}})},R=U,T=Object(_["a"])(R,$,D,!1,null,null,null),E=T.exports,B=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"b_g_grey"},[s("van-overlay",{attrs:{show:e.show},on:{click:function(t){e.show=!1}}},[s("van-loading",{staticClass:"lod_box"})],1),s("router-view")],1)},z=[],M={name:"App",components:{},data:function(){return{show:!1}},created:function(){this.show=this.$IsLoadding}},H=M,J=(s("034f"),Object(_["a"])(H,B,z,!1,null,null,null)),V=J.exports,Y=[{path:"/",component:V,redirect:"caseInfo",children:[{name:"caseInfo",path:"/caseInfo",component:I},{name:"userCenter",path:"/userCenter",component:W},{name:"caseList",path:"/caseList",component:F},{name:"caseDetail",path:"/caseDetail",component:E}]}],G=Y,K=new d["a"]({routes:G}),Q=K,X=s("3a34"),Z=s.n(X),ee=d["a"].prototype.push;d["a"].prototype.push=function(e){return ee.call(this,e).catch((function(e){return e}))},r.a.interceptors.request.use((function(e){return a["a"].prototype.$IsLoadding=!0,e}),(function(e){return Promise.reject(e)})),r.a.interceptors.response.use((function(e){if(a["a"].prototype.$IsLoadding=!1,401!=e.data.code&&401!=e.data.status)return e.data;console.log("当前路由地址：",Q.currentRoute.fullPath)}),(function(e){return Promise.reject(e.response)})),a["a"].use(d["a"]),a["a"].use(r.a),a["a"].use(h["a"]),a["a"].use(new Z.a),Q.beforeEach((function(e,t,s){console.log("--router to",e.fullPath),s()})),new a["a"]({router:Q,store:f,render:function(e){return e("router-view")}}).$mount("#app")},"5aea":function(e,t,s){},"7cf7":function(e,t,s){},"85ec":function(e,t,s){},fda1:function(e,t,s){"use strict";var a=s("7cf7"),n=s.n(a);n.a}});
//# sourceMappingURL=app.f886e818.js.map