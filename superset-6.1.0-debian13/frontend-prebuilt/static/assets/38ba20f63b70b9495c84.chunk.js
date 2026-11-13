"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[2886],{93225(e,t,n){n.d(t,{e:()=>a});var l=n(22022),r=n(85614);let a=(0,r.styled)(l.Form.Item)`
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
`},32886(e,t,n){n.r(t),n.d(t,{default:()=>f});var l=n(2445),r=n(27124),a=n(25365),o=n(63021),i=n(24002),s=n(68292),u=n(93225),d=n(54299);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function f(e){let{data:t,formData:n,height:f,width:p,setDataMask:h,setHoveredFilter:m,unsetHoveredFilter:g,setFocusedFilter:v,unsetFocusedFilter:b,setFilterActive:y,filterState:S,inputRef:$}=e,{defaultValue:w}=n,[x,M]=(0,i.useState)(null!=w?w:[]),z=e=>{let t=(0,a.A)(e);M(t);let n={};t.length&&(n.granularity_sqla=t[0]),h({extraFormData:n,filterState:{value:t.length?t:null}})};(0,i.useEffect)(()=>{z(null!=w?w:null)},[JSON.stringify(w)]),(0,i.useEffect)(()=>{var e;z(null!=(e=S.value)?e:null)},[JSON.stringify(S.value)]);let k=(t||[]).filter(e=>e.dtype===o.GenericDataType.Temporal),O=0===k.length?(0,r.t)("No time columns"):(0,r.tn)("%s option","%s options",k.length,k.length),Y={};S.validateMessage&&(Y.extra=(0,l.Y)(d.Mo,{status:S.validateStatus,children:S.validateMessage}));let C=k.map(e=>{let{column_name:t,verbose_name:n}=e;return{label:null!=n?n:t,value:t}});return(0,l.Y)(d.j3,{height:f,width:p,children:(0,l.Y)(u.e,c({validateStatus:S.validateStatus},Y,{children:(0,l.Y)("div",{onMouseEnter:m,onMouseLeave:g,children:(0,l.Y)(s.A,{name:n.nativeFilterId,allowClear:!0,value:x,placeholder:O,onChange:e=>z(e),onBlur:b,onFocus:v,ref:$,options:C,onOpenChange:y})})}))})}},54299(e,t,n){n.d(t,{Mo:()=>i,YH:()=>a,j3:()=>o});var l=n(85614),r=n(93225);let a=0,o=l.styled.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>e===a?"100%":`${e}px`};
`;(0,l.styled)(r.e)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`;let i=l.styled.div`
  color: ${({theme:e,status:t="error"})=>{if("help"===t)return e.colorTextSecondary;switch(t){case"error":default:return e.colorError;case"warning":return e.colorWarning;case"info":return e.colorInfo}}};
  text-align: ${({centerText:e})=>e?"center":"left"};
  width: 100%;
`}}]);