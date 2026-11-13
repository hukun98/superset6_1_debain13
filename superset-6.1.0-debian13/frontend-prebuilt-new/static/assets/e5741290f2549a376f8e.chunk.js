"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9554],{66718(e,t,n){n.d(t,{Au:()=>s,I8:()=>l,J:()=>d,l6:()=>o});var r=n(73815),i=n(79924);let a=(e,t,n)=>{let r=`/api/v1/dashboard/${e}/filter_state`;return t&&(r=r.concat(`/${t}`)),n&&(r=r.concat(`?tab_id=${n}`)),r},o=(e,t,n,o)=>r.A.put({endpoint:a(e,n,o),jsonPayload:{value:t}}).then(e=>e.json.message).catch(e=>(i.A.error(e),null)),s=(e,t,n)=>r.A.post({endpoint:a(e,void 0,n),jsonPayload:{value:t}}).then(e=>e.json.key).catch(e=>(i.A.error(e),null)),l=(e,t)=>r.A.get({endpoint:a(e,t)}).then(({json:e})=>JSON.parse(e.value)).catch(e=>(i.A.error(e),null)),d=e=>r.A.get({endpoint:`/api/v1/dashboard/permalink/${e}`}).then(({json:e})=>e).catch(e=>(i.A.error(e),null))},59554(e,t,n){n.r(t),n.d(t,{DashboardPage:()=>eu,DashboardPageIdContext:()=>eo,default:()=>eh});var r=n(2445),i=n(24002),a=n(17437),o=n(61574),s=n(27124),l=n(85614),d=n(61225),u=n(10381),h=n(7070),c=n(10020),p=n(8251),f=n(9648),v=n(72422),m=n(2904),b=n(25495),g=n(34260),y=n(21804),S=n(97126),w=n(71671),x=n(34235),C=n(66718),E=n(82960),A=n(14121),_=n(89495),O=n(52149);function $(e){return Object.values(e).reduce((e,t)=>(t&&t.type===O.oT&&t.meta&&t.meta.chartId&&e.push(t.meta.chartId),e),[])}var I=n(15537),U=n(32924),j=n(19370);let k=[O.oT,O.xY,O.rG];var D=n(55847);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}class z extends i.PureComponent{static onBeforeUnload(e){e?window.addEventListener("beforeunload",z.unload):window.removeEventListener("beforeunload",z.unload)}static unload(){let e=(0,s.t)("You have unsaved changes.");return window.event.returnValue=e,e}componentDidMount(){let e=(0,_.Ay)(),{editMode:t,isPublished:n,layout:r}=this.props,i={is_soft_navigation:I.Vy.timeOriginOffset>0,is_edit_mode:t,mount_duration:I.Vy.getTimestamp(),is_empty:!Object.values(r).some(({type:e})=>e&&k.includes(e)),is_published:n,bootstrap_data_length:JSON.stringify(e).length},a=(0,j.A)();a&&(i.target_id=a),this.props.actions.logEvent(I.es,i),"hidden"===document.visibilityState&&(this.visibilityEventData={start_offset:I.Vy.getTimestamp(),ts:new Date().getTime()}),window.addEventListener("visibilitychange",this.onVisibilityChange),this.applyCharts()}componentDidUpdate(e){this.applyCharts();let t=$(e.layout),n=$(this.props.layout);e.dashboardId===this.props.dashboardId&&(t.length<n.length?n.filter(e=>-1===t.indexOf(e)).forEach(e=>{var t;return this.props.actions.addSliceToDashboard(e,(t=this.props.layout,Object.values(t).find(t=>t&&t.type===O.oT&&t.meta&&t.meta.chartId===e)))}):t.length>n.length&&t.filter(e=>-1===n.indexOf(e)).forEach(e=>this.props.actions.removeSliceFromDashboard(e)))}applyCharts(){let{activeFilters:e,ownDataCharts:t,chartConfiguration:n,hasUnsavedChanges:r,editMode:i}=this.props,{appliedFilters:a,appliedOwnDataCharts:o}=this;n&&(i||(0,U.r$)(o,t,{ignoreUndefined:!0})&&(0,U.r$)(a,e,{ignoreUndefined:!0})||this.applyFilters(),r?z.onBeforeUnload(!0):z.onBeforeUnload(!1))}componentWillUnmount(){window.removeEventListener("visibilitychange",this.onVisibilityChange),this.props.actions.clearDataMaskState(),this.props.actions.clearAllChartStates()}onVisibilityChange(){if("hidden"===document.visibilityState)this.visibilityEventData={start_offset:I.Vy.getTimestamp(),ts:new Date().getTime()};else if("visible"===document.visibilityState){let e=this.visibilityEventData.start_offset;this.props.actions.logEvent(I.Xj,T({},this.visibilityEventData,{duration:I.Vy.getTimestamp()-e}))}}applyFilters(){var e;let t,n,r,{appliedFilters:i}=this,{activeFilters:a,ownDataCharts:o,slices:s}=this.props,l=Object.keys(a),d=Object.keys(i),u=new Set(l.concat(d)),h=(e=this.appliedOwnDataCharts,t=Object.keys(o),r=(n=Object.keys(e),[...t.filter(e=>!n.includes(e)),...n.filter(e=>!t.includes(e))]).filter(t=>o[t]||e[t]),new Set([...t,...n]).forEach(t=>{(0,U.r$)(o[t],e[t])||r.push(t)}),[...new Set(r)]);[...u].forEach(e=>{if(!l.includes(e)&&d.includes(e))h.push(...(0,D.z)(e,i[e],s));else if(d.includes(e)){if((0,U.r$)(i[e].values,a[e].values,{ignoreUndefined:!0})||h.push(...(0,D.z)(e,a[e],s)),!(0,U.r$)(i[e].scope,a[e].scope)){let t=(a[e].scope||[]).concat(i[e].scope||[]);h.push(...t)}}else h.push(...(0,D.z)(e,a[e],s))}),this.refreshCharts([...new Set(h)]),this.appliedFilters=a,this.appliedOwnDataCharts=o}refreshCharts(e){e.forEach(e=>{this.props.actions.triggerQuery(!0,e)})}render(){return this.context.loading?(0,r.Y)(c.R,{}):this.props.children}constructor(e){var t,n;super(e),this.appliedFilters=null!=(t=e.activeFilters)?t:{},this.appliedOwnDataCharts=null!=(n=e.ownDataCharts)?n:{},this.visibilityEventData={start_offset:0,ts:0},this.onVisibilityChange=this.onVisibilityChange.bind(this)}}z.contextType=A.bf,z.defaultProps={timeout:60,userId:""};var P=n(61581),F=n(98876),M=n(70399);let R=(0,d.Ng)(function(e){var t,n,r;let{datasources:i,sliceEntities:a,dashboardInfo:o,dashboardState:s,dashboardLayout:l,impressionId:d}=e;return{timeout:null==(n=o.common)||null==(t=n.conf)?void 0:t.SUPERSET_WEBSERVER_TIMEOUT,userId:o.userId,dashboardId:o.id,editMode:s.editMode,isPublished:s.isPublished,hasUnsavedChanges:s.hasUnsavedChanges,datasources:i,chartConfiguration:null==(r=o.metadata)?void 0:r.chart_configuration,slices:a.slices,layout:l.present,impressionId:d}},function(e){return{actions:(0,E.zH)({setDatasources:v.nC,clearDataMaskState:M.V9,clearAllChartStates:x.vP,addSliceToDashboard:x.ft,removeSliceFromDashboard:x.Hg,triggerQuery:P.triggerQuery,logEvent:F.logEvent},e)}})(z);var Y=n(79924),L=n(42043),V=n(95297),N=n(94921);function H({children:e,theme:t}){let{dashboardTheme:n,fontUrls:a}=(0,i.useMemo)(()=>{if(!(null==t?void 0:t.json_data))return{dashboardTheme:null,fontUrls:void 0};try{var e;let n=JSON.parse(t.json_data),r=(0,L.Zn)(n),i=(0,V.El)(r),{common:{theme:a}}=(0,_.Ay)(),o=i?a.dark:a.default,s=N.S.fromConfig(r,o||void 0),l=null==n||null==(e=n.token)?void 0:e.fontUrls,d=Array.isArray(l)?l:void 0;return{dashboardTheme:s,fontUrls:d}}catch(e){return Y.A.warn("Failed to load dashboard theme:",e),{dashboardTheme:null,fontUrls:void 0}}},[null==t?void 0:t.json_data]);return((0,i.useEffect)(()=>{if(!n||!(null==a?void 0:a.length))return;let e=a.map(e=>`@import url(${JSON.stringify(e)});`).join(`
`),t=document.createElement("style");return t.setAttribute("data-superset-fonts","true"),t.textContent=e,document.head.appendChild(t),()=>{t.remove()}},[n,a]),n)?(0,r.Y)(n.SupersetThemeProvider,{children:e}):(0,r.Y)(r.FK,{children:e})}var B=n(43561),W=n(44383),X=n.n(W),J=n(71086),K=n.n(J),Q=n(28681);function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let G={},Z=()=>{let e=(0,y.Gq)(y.Hh.DashboardExploreContext,{});return K()(e,e=>!e.isRedundant)},ee=(e,t)=>{let n=Z();(0,y.SO)(y.Hh.DashboardExploreContext,q({},n,{[e]:q({},t,{dashboardPageId:e})}))},et=(0,u.Mz)([e=>e.dashboardInfo.metadata,e=>e.dashboardInfo.id,e=>{var t;return null==(t=e.dashboardState)?void 0:t.colorScheme},e=>{var t;return null==(t=e.nativeFilters)?void 0:t.filters},e=>e.dataMask,e=>{var t;return(null==(t=e.dashboardState)?void 0:t.sliceIds)||[]}],(e,t,n,r,i,a)=>{let o=Object.keys(r).reduce((e,t)=>{let n=r[t];return"chartsInScope"in n&&(e[t]=X()(n,["chartsInScope"])),e},{}),s=(0,b.R)({chartConfiguration:(null==e?void 0:e.chart_configuration)||G,nativeFilters:r,dataMask:i,allSliceIds:a});return{labelsColor:(null==e?void 0:e.label_colors)||G,labelsColorMap:(null==e?void 0:e.map_label_colors)||G,sharedLabelsColors:(0,Q.ik)(null==e?void 0:e.shared_label_colors),colorScheme:n,chartConfiguration:(null==e?void 0:e.chart_configuration)||G,nativeFilters:o,dataMask:i,dashboardId:t,filterBoxFilters:(0,g.ug)(),activeFilters:s}}),en=({dashboardPageId:e})=>{let t=(0,d.d4)(et);return(0,i.useEffect)(()=>(ee(e,t),()=>{ee(e,q({},t,{isRedundant:!0}))}),[t,e]),null};var er=n(77432);function ei(e,t,n,r,i,a,o){try{var s=e[a](o),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}function ea(){return(ea=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let eo=(0,i.createContext)(""),es=(0,i.lazy)(()=>Promise.all([n.e(8096),n.e(7596),n.e(3377),n.e(2748),n.e(4295),n.e(1259),n.e(7634),n.e(3627),n.e(8937),n.e(3039),n.e(7099),n.e(7768),n.e(88),n.e(73),n.e(6707),n.e(7682),n.e(2795),n.e(5026)]).then(n.bind(n,46985))),el=(0,u.Mz)(e=>e.dataMask,e=>(0,b.W)(e,"ownState")),ed=(0,u.Mz)([e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration},e=>e.nativeFilters.filters,e=>e.dataMask,e=>e.dashboardState.sliceIds],(e,t,n,r)=>ea({},(0,g.ug)(),(0,b.R)({chartConfiguration:e,nativeFilters:t,dataMask:n,allSliceIds:r}))),eu=({idOrSlug:e})=>{let t=(0,l.useTheme)(),n=(0,d.wA)(),u=(0,o.W6)(),b=(0,i.useMemo)(()=>(0,B.Ak)(),[]),g=(0,d.d4)(({dashboardInfo:e})=>e&&Object.keys(e).length>0),E=(0,d.d4)(e=>e.dashboardInfo.theme),{addDangerToast:A}=(0,h.Yf)(),{result:_,error:O}=(0,p.MZ)(e),{result:$,error:I}=(0,p.DT)(e),{result:U,error:j,status:k}=(0,p.RO)(e),D=(0,i.useRef)(!1),T=O||I,z=!!(_&&$),{dashboard_title:P,id:F=0}=_||{},M=(0,d.d4)(e=>e.dashboardInfo.css)||(null==_?void 0:_.css);(0,i.useEffect)(()=>{let e=()=>{let e=Z();(0,y.SO)(y.Hh.DashboardExploreContext,ea({},e,{[b]:ea({},e[b],{isRedundant:!0})}))};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}},[b]),(0,i.useEffect)(()=>{n((0,x.wh)(k))},[n,k]),(0,i.useEffect)(()=>{var e;F&&(e=function*(){let e,t,r,i=(0,w.P3)(S.vX.permalinkKey),a=(0,w.P3)(S.vX.nativeFiltersKey),o=(0,w.P3)(S.vX.nativeFilters),s=a||{};if(i){let n=yield(0,C.J)(i);(null==n?void 0:n.state)&&({dataMask:s,activeTabs:e,anchor:r}=n.state,t=n.state.chartStates)}else a&&(s=yield(0,C.I8)(F,a));return o&&(s=o),z&&(D.current||(D.current=!0),n((0,f.M)({history:u,dashboard:_,charts:$,activeTabs:null!=e?e:null,dataMask:s,chartStates:null!=t?t:null})),r&&setTimeout(()=>{let e=document.getElementById(r);e&&e.scrollIntoView({behavior:"smooth"})},0)),null},function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){ei(a,r,i,o,s,"next",e)}function s(e){ei(a,r,i,o,s,"throw",e)}o(void 0)})})()},[z]);let Y=(0,i.useMemo)(()=>document.title,[]);(0,i.useEffect)(()=>{P&&(document.title=P)},[P]),(0,i.useEffect)(()=>()=>{document.title=Y||(null==t?void 0:t.brandAppName)||(null==t?void 0:t.brandLogoAlt)||"Superset"},[Y,null==t?void 0:t.brandAppName,null==t?void 0:t.brandLogoAlt]),(0,i.useEffect)(()=>"string"==typeof M?(0,m.A)(M):()=>{},[M]),(0,i.useEffect)(()=>{j?A((0,s.t)("Error loading chart datasources. Filters may not work correctly.")):n((0,v.nC)(U))},[A,U,j,n]);let L=(0,d.d4)(el),V=(0,d.d4)(ed);if(T)throw T;let N=(0,i.useMemo)(()=>[(0,a.AH)`
  .filter-card-tooltip {
    &.ant-tooltip-placement-bottom {
      padding-top: 0;
      & .ant-tooltip-arrow {
        top: -13px;
      }
    }
  }
`,(0,a.AH)`
  body {
    h1 {
      font-weight: ${t.fontWeightStrong};
      line-height: 1.4;
      font-size: ${t.fontSizeXXL}px;
      letter-spacing: -0.2px;
      margin-top: ${3*t.sizeUnit}px;
      margin-bottom: ${3*t.sizeUnit}px;
    }

    h2 {
      font-weight: ${t.fontWeightStrong};
      line-height: 1.4;
      font-size: ${t.fontSizeXL}px;
      margin-top: ${3*t.sizeUnit}px;
      margin-bottom: ${2*t.sizeUnit}px;
    }

    h3,
    h4,
    h5,
    h6 {
      font-weight: ${t.fontWeightStrong};
      line-height: 1.4;
      font-size: ${t.fontSizeLG}px;
      letter-spacing: 0.2px;
      margin-top: ${2*t.sizeUnit}px;
      margin-bottom: ${t.sizeUnit}px;
    }
  }
`,(0,a.AH)`
  .ant-dropdown-menu.chart-context-menu {
    min-width: ${43*t.sizeUnit}px;
  }
  .ant-dropdown-menu-submenu.chart-context-submenu {
    max-width: ${60*t.sizeUnit}px;
    min-width: ${40*t.sizeUnit}px;
  }
`,(0,a.AH)`
  a,
  .ant-tabs-tabpane,
  .ant-tabs-tab-btn,
  .superset-button,
  .superset-button.ant-dropdown-trigger,
  .header-controls span {
    &:focus-visible {
      box-shadow: 0 0 0 2px ${t.colorPrimaryText};
      border-radius: ${t.borderRadius}px;
      outline: none;
      text-decoration: none;
    }
    &:not(
      .superset-button,
      .ant-menu-item,
      a,
      .fave-unfave-icon,
      .ant-tabs-tabpane,
      .header-controls span
    ) {
      &:focus-visible {
        padding: ${t.sizeUnit/2}px;
      }
    }
  }
`,(0,a.AH)`
  .header-title a {
    margin: ${t.sizeUnit/2}px;
    padding: ${t.sizeUnit/2}px;
  }
  .header-controls {
    &,
    &:hover {
      margin-top: ${t.sizeUnit}px;
    }
  }
`],[t]);if(T)throw T;let W=(0,i.useMemo)(()=>(0,r.Y)(es,{}),[]);return(0,r.FD)(r.FK,{children:[(0,r.Y)(a.mL,{styles:[N]}),z&&g?(0,r.FD)(r.FK,{children:[(0,r.Y)(en,{dashboardPageId:b}),(0,r.Y)(eo.Provider,{value:b,children:(0,r.Y)(H,{theme:void 0!==E?E:null==_?void 0:_.theme,children:(0,r.Y)(er.kd,{children:(0,r.Y)(R,{activeFilters:V,ownDataCharts:L,children:W})})})})]}):(0,r.Y)(c.R,{})]})},eh=eu},77432(e,t,n){n.d(t,{A6:()=>l,BS:()=>s,US:()=>d,kd:()=>o});var r=n(2445),i=n(24002);let a=(0,i.createContext)({isAutoRefreshing:!1,isRefreshInFlight:!1,setIsAutoRefreshing:()=>{},setRefreshInFlight:()=>{},startAutoRefresh:()=>{},endAutoRefresh:()=>{}}),o=({children:e})=>{let[t,n]=(0,i.useState)(!1),[o,s]=(0,i.useState)(!1),l=(0,i.useCallback)(()=>{n(!0)},[]),d=(0,i.useCallback)(()=>{n(!1)},[]),u=(0,i.useMemo)(()=>({isAutoRefreshing:t,isRefreshInFlight:o,setIsAutoRefreshing:n,setRefreshInFlight:s,startAutoRefresh:l,endAutoRefresh:d}),[t,o,l,d]);return(0,r.Y)(a.Provider,{value:u,children:e})},s=()=>(0,i.useContext)(a),l=()=>{let{isAutoRefreshing:e}=(0,i.useContext)(a);return e},d=()=>{let{isRefreshInFlight:e}=(0,i.useContext)(a);return e}},55847(e,t,n){n.d(t,{d:()=>o,z:()=>a});var r=n(49977);function i(e,t){return e.length===Object.keys(t).length}function a(e,t,n){var a;let o=[],s=Object.keys(n).includes(e)&&(0,r.Ub)(t),l=Array.isArray(t.scope)?t.scope:null!=(a=t.chartsInScope)?a:[];return s&&(o=function(e,t,n){if(!t[e])return[];let r=[...n.filter(t=>String(t)!==e),Number(e)],a=new Set(n);return Object.values(t).reduce((n,o)=>(o.slice_id===Number(e)||(i(r,t)?n.push(o.slice_id):a.has(o.slice_id)&&n.push(o.slice_id)),n),[])}(e,n,l)),(!s||(0,r.ve)(t)||(0,r.qQ)(t))&&(o=function(e,t){if(i(t,e))return Object.keys(e).map(Number);let n=new Set(t);return Object.values(e).reduce((e,t)=>(n.has(t.slice_id)&&e.push(t.slice_id),e),[])}(n,l)),o}function o(e,t){var n;let{chartsInScope:r,targets:i}=e;if(Array.isArray(r))return r;let a=null==i||null==(n=i[0])?void 0:n.datasetId;if(!a)return[];let o=String(a);return Object.values(t).filter(e=>{var t;let n=null==(t=e.form_data)?void 0:t.datasource;return!!n&&String(n).split("__")[0]===o}).map(e=>e.slice_id)}},2904(e,t,n){n.d(t,{A:()=>r});function r(e){let t,n="CssEditor-css",r=document.head||document.getElementsByTagName("head")[0],i=document.querySelector(`.${n}`)||((t=document.createElement("style")).className=n,t.type="text/css",t);return"styleSheet"in i?i.styleSheet.cssText=e:i.innerHTML=e,r.appendChild(i),function(){i.remove()}}}}]);