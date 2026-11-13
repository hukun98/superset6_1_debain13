(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[2104],{62216(e){e.exports=function(e){return void 0===e}},93225(e,t,l){"use strict";l.d(t,{e:()=>a});var r=l(22022),n=l(85614);let a=(0,n.styled)(r.Form.Item)`
  ${({theme:e})=>`
    &.ant-form-item > .ant-row > .ant-form-item-label {
      padding-bottom: ${e.paddingXXS}px;
    }
    .ant-form-item-label {
      & > label {
        font-size: ${e.fontSizeSM}px;
        &.ant-form-item-required:not(.ant-form-item-required-mark-optional) {
          &::before {
            display: none;
          }
          &::after {
            display: inline-block;
            visibility: visible;
            color: ${e.colorError};
            font-size: ${e.fontSizeSM}px;
            content: '*';
          }
        }
      }
    }
    .ant-form-item-extra {
      margin-top: ${e.sizeUnit}px;
      font-size: ${e.fontSizeSM}px;
    }
  `}
`},75786(e,t,l){"use strict";l.d(t,{A:()=>i});var r=l(53705),n=l(59808),a=l(73966);function i(e,t=!1){let l=t?r.DC:r.aL,o=l("%Y-%m-%d %H:%M:%S.%L"),u=l("%Y-%m-%d %H:%M:%S"),s=l("%Y-%m-%d %H:%M"),d=l("%Y-%m-%d %H:%M"),f=l("%Y-%m-%d"),c=l("%Y-%m-%d"),p=l("%Y"),{hasMillisecond:v,hasSecond:m,hasMinute:g,hasHour:S,isNotFirstDayOfMonth:h,isNotFirstMonth:y}=t?n.m:n.w,b=p;return e.forEach(e=>{"bigint"!=typeof e&&(b===p&&y(e)&&(b=c),b===c&&h(e)&&(b=f),b===f&&S(e)&&(b=d),b===d&&g(e)&&(b=s),b===s&&m(e)&&(b=u),b===u&&v(e)&&(b=o))}),new a.A({description:"Use the finest grain in an array of dates to format all dates in the array",formatFunc:b,id:"finest_temporal_grain",label:"Format temporal columns with the finest grain",useLocalTime:t})}},77366(e,t,l){"use strict";l.d(t,{A:()=>a,v:()=>i});var r,n,a=((r={}).Simple="SIMPLE",r.Sql="SQL",r),i=((n={}).Having="HAVING",n.Where="WHERE",n)},42104(e,t,l){"use strict";l.r(t),l.d(t,{default:()=>A});var r=l(2445),n=l(24002),a=l(27124),i=l(25365),o=l(7979),u=l(75786),s=l(77092),d=l(85614),f=l(38221),c=l.n(f),p=l(62216),v=l.n(p),m=l(93634),g=l(22022),S=l(68292),h=l(93225),y=l(47036),b=l(57885),w=l(44057),x=l(86814),M=l(54299);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function F(e,t){switch(t.type){case"ownState":return e.ownState=C({},e.ownState,t.ownState),e;case"filterState":return JSON.stringify(e.extraFormData)!==JSON.stringify(t.extraFormData)&&(e.extraFormData=t.extraFormData),JSON.stringify(e.filterState)!==JSON.stringify(t.filterState)&&(e.filterState=C({},e.filterState,t.filterState)),e;default:return e}}let N=(0,d.styled)(g.Space)`
  display: flex;
  align-items: center;
  width: 100%;

  .exclude-select {
    width: 80px;
    flex-shrink: 0;
  }

  &.ant-space {
    .ant-space-item {
      width: ${({inverseSelection:e})=>e?"auto":"100%"};
    }
  }
`,O=new Map;function A(e){let{coltypeMap:t,data:l,filterState:d,formData:f,height:p,isRefreshing:g,width:A,setDataMask:$,setHoveredFilter:E,unsetHoveredFilter:D,setFocusedFilter:Y,unsetFocusedFilter:k,setFilterActive:I,appSection:q,showOverflow:z,parentRef:H,inputRef:T,filterBarOrientation:j,clearAllTrigger:J,onClearAllComplete:L}=e,{enableEmptyFilter:V,creatable:P,multiSelect:R,showSearch:U,inverseSelection:W,defaultToFirstItem:G,searchAllOptions:_}=f,B=(0,n.useMemo)(()=>(0,i.A)(f.groupby).map(o.A),[f.groupby]),[Q]=B,[X]=(0,n.useState)(t),[K,Z]=(0,n.useState)(""),ee=(0,n.useRef)(l),[et,el]=(0,m.A)(F,{extraFormData:{},filterState:d}),er=t[Q],en=(0,n.useMemo)(()=>(0,x.Sg)({timeFormatter:(0,u.A)(l.map(e=>e[Q]))}),[l,Q]),[ea,ei]=(0,n.useState)(!!v()(null==d?void 0:d.excludeFilterValues)||(null==d?void 0:d.excludeFilterValues)),eo=(0,n.useRef)(ea),eu=(0,n.useRef)(!1);(0,n.useEffect)(()=>{let e=O.get(f.nativeFilterId);void 0!==e&&e!==j?eu.current=!0:eu.current=!1,j&&O.set(f.nativeFilterId,j)},[j]);let es=(0,n.useCallback)(e=>{let t=V&&!W&&!(null==e?void 0:e.length),l=W&&(null==e?void 0:e.length)?(0,a.t)(" (excluded)"):"";el({type:"filterState",extraFormData:(0,x.pA)(Q,e,t,ea&&W),filterState:C({},d,{label:(null==e?void 0:e.length)?`${(e||[]).map(e=>en(e,er)).join(", ")}${l}`:void 0,value:q===s.$s.FilterConfigModal&&G?void 0:e,excludeFilterValues:ea})})},[q,Q,er,G,el,V,W,ea,JSON.stringify(d),en]),ed=q===s.$s.FilterConfigModal&&G,ef=(0,n.useMemo)(()=>c()(e=>{Z(e),_&&el({type:"ownState",ownState:{coltypeMap:X,search:e}})},y.Y.SLOW_DEBOUNCE),[el,X,_]),ec=(0,n.useCallback)(()=>{k(),ef("")},[ef,k]),ep=(0,n.useCallback)(e=>{let t=null===e?[null]:(0,i.A)(e);0===t.length?es(null):es(t)},[es,f.nativeFilterId,J]),ev=0===l.length?(0,a.t)("No data"):(0,a.tn)("%s option","%s options",l.length,l.length),em=(0,n.useMemo)(()=>{if(d.validateMessage)return(0,r.Y)(M.Mo,{status:d.validateStatus,children:d.validateMessage})},[d.validateMessage,d.validateStatus]),eg=(0,n.useMemo)(()=>[...new Set(l.map(e=>e[Q]))].map(e=>({label:en(e,er),value:e,isNewOption:!1})),[l,er,Q,en]),eS=(0,n.useMemo)(()=>(!K||R||(0,b.Kz)(K,eg,!0)||eg.unshift({label:K,value:K,isNewOption:!0}),eg),[R,K,eg]),eh=(0,n.useCallback)((e,t)=>{if(f.sortMetric)return 0;let l=(0,b.qw)("label");return f.sortAscending?l(e,t):l(t,e)},[f.sortAscending,f.sortMetric]);return(0,n.useEffect)(()=>{if(!eu.current){if(ed)return void es(null);if(void 0!==d.value)return void es(d.value);if(!J)if(G){let e=l[0]?B.map(e=>l[0][e]):null;(null==e?void 0:e[0])!==void 0&&es(e)}else(null==f?void 0:f.defaultValue)&&es(f.defaultValue)}},[ed,V,G,null==f?void 0:f.defaultValue,l,B,Q,W,J]),(0,n.useEffect)(()=>{let e=ee.current;((null==e?void 0:e.length)!==(null==l?void 0:l.length)||(null==e?void 0:e.some((e,t)=>{let r=e[Q],n=l[t][Q];return"bigint"==typeof r||"bigint"==typeof n?(null==r?void 0:r.toString())!==(null==n?void 0:n.toString()):r!==n})))&&(ee.current=l)},[l,Q]),(0,n.useEffect)(()=>{var e;if(null==(e=d.value)?void 0:e.every(e=>l.some(t=>t[Q]===e)))return;let t=l[0]?B.map(e=>l[0][e]):null;!J&&G&&Object.keys((null==f?void 0:f.extraFormData)||{}).length&&void 0!==d.value&&null!==t&&d.value!==t&&(null==t?void 0:t[0])!==void 0&&es(t)},[G,es,f,l,JSON.stringify(d.value),J]),(0,n.useEffect)(()=>{$(et)},[JSON.stringify(et)]),(0,n.useEffect)(()=>{J&&(el({type:"filterState",extraFormData:{},filterState:{value:void 0,label:void 0}}),es(null),Z(""),null==L||L(f.nativeFilterId))},[J,L,es]),(0,n.useEffect)(()=>{if(eo.current!==ea){var e;el({type:"filterState",extraFormData:(0,x.pA)(Q,d.value,!(null==(e=d.value)?void 0:e.length),ea&&W),filterState:C({},d,{excludeFilterValues:ea})}),eo.current=ea}},[ea]),(0,r.Y)(M.j3,{height:p,width:A,children:(0,r.Y)(h.e,{validateStatus:d.validateStatus,extra:em,children:(0,r.FD)(N,{appSection:q,inverseSelection:W,children:[q!==s.$s.FilterConfigModal&&W&&(0,r.Y)(S.A,{className:"exclude-select",value:`${ea}`,options:[{value:"true",label:(0,a.t)("is not")},{value:"false",label:(0,a.t)("is")}],onChange:e=>{ei("true"===e)}}),(0,r.Y)(S.A,{name:f.nativeFilterId,allowClear:!0,autoClearSearchValue:!0,allowNewOptions:!_&&!1!==P,allowSelectAll:!_,value:R?d.value||[]:d.value,disabled:ed,getPopupContainer:z?()=>(null==H?void 0:H.current)||document.body:e=>(null==e?void 0:e.parentNode)||document.body,showSearch:U,mode:R?"multiple":"single",placeholder:ev,onClear:()=>ef(""),onSearch:ef,onBlur:ec,onFocus:Y,onMouseEnter:E,onMouseLeave:D,onChange:ep,ref:T,loading:g,oneLine:j===w.QI.Horizontal,invertSelection:W&&ea,options:eS,sortComparator:eh,onOpenChange:I,className:"select-container"})]})})})}},54299(e,t,l){"use strict";l.d(t,{Mo:()=>o,YH:()=>a,j3:()=>i});var r=l(85614),n=l(93225);let a=0,i=r.styled.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>e===a?"100%":`${e}px`};
`;(0,r.styled)(n.e)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`;let o=r.styled.div`
  color: ${({theme:e,status:t="error"})=>{if("help"===t)return e.colorTextSecondary;switch(t){case"error":default:return e.colorError;case"warning":return e.colorWarning;case"info":return e.colorInfo}}};
  text-align: ${({centerText:e})=>e?"center":"left"};
  width: 100%;
`},86814(e,t,l){"use strict";l.d(t,{SO:()=>o,Sg:()=>u,pA:()=>i});var r=l(63021),n=l(62388),a=l(77366);let i=(e,t,l=!1,r=!1)=>{let n={};return l?n.adhoc_filters=[{expressionType:a.A.Sql,clause:a.v.Where,sqlExpression:"1 = 0"}]:null!=t&&0!==t.length&&(n.filters=[{col:e,op:r?"NOT IN":"IN",val:t}]),n},o=(e,t,l)=>{let r=[];return null!=t&&t!==l&&r.push({col:e,op:">=",val:t}),null!=l&&l!==t&&r.push({col:e,op:"<=",val:l}),null!=l&&null!=t&&l===t&&r.push({col:e,op:"==",val:l}),r.length?{filters:r}:{}};function u({timeFormatter:e,numberFormatter:t}={}){return(l,a)=>{if(null==l)return n.mu;if("boolean"==typeof l)return l?n.PU:n.qC;if(a===r.GenericDataType.Boolean)try{return JSON.parse(String(l).toLowerCase())?n.PU:n.qC}catch(e){return n.qC}return"string"==typeof l?l:"bigint"==typeof l?String(l):e&&a===r.GenericDataType.Temporal?e(l):t&&"number"==typeof l&&a===r.GenericDataType.Numeric?t(l):String(l)}}},93634(e,t,l){"use strict";l.d(t,{A:()=>i,e:()=>a});var r=l(1932),n=l(24002);function a(e){var t=(0,n.useState)(function(){return(0,r.CN)("function"==typeof e?e():e,!0)}),l=t[1];return[t[0],(0,n.useCallback)(function(e){l("function"==typeof e?(0,r.jM)(e):(0,r.CN)(e))},[])]}function i(e,t,l){var a=(0,n.useMemo)(function(){return(0,r.jM)(e)},[e]);return(0,n.useReducer)(a,t,l)}}}]);