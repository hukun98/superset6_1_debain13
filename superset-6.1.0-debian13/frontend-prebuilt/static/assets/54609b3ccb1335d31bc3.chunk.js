"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7437],{93225(e,t,a){a.d(t,{e:()=>l});var n=a(22022),r=a(85614);let l=(0,r.styled)(n.Form.Item)`
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
`},37437(e,t,a){a.r(t),a.d(t,{default:()=>c});var n=a(2445),r=a(27124),l=a(25365),o=a(24002),i=a(68292),s=a(93225),u=a(96526);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}let m={};function c(e){let{data:t,formData:a,height:c,width:f,setDataMask:p,setHoveredFilter:v,unsetHoveredFilter:h,setFocusedFilter:g,unsetFocusedFilter:b,setFilterActive:S,filterState:y,inputRef:x}=e,{defaultValue:M}=a,[$,w]=(0,o.useState)((0,l.A)(null!=M?M:[])),z=e=>{let t=(0,l.A)(e);w(t),p({extraFormData:{custom_form_data:{groupby:t}},filterState:{label:t.join(", "),value:t.length?t:null}})};(0,o.useEffect)(()=>{z(null!=M?M:[])},[JSON.stringify(M)]),(0,o.useEffect)(()=>{var e;z(null!=(e=y.value)?e:[])},[JSON.stringify(y.value)]);let k=0===(t||[]).length?(0,r.t)("No data"):(0,r.tn)("%s option","%s options",t.length,t.length),O=(0,o.useMemo)(()=>y.validateMessage?{extra:(0,n.Y)(u.Mo,{status:y.validateStatus,children:y.validateMessage})}:m,[y.validateMessage,y.validateStatus]),_=(0,o.useMemo)(()=>(t||[]).map(e=>{let t="column_name"in e?e.column_name:e.value;return{label:"verbose_name"in e&&e.verbose_name||"label"in e&&e.label||t,value:t}}),[t]);return(0,n.Y)(u.j3,{height:c,width:f,children:(0,n.Y)(s.e,d({validateStatus:y.validateStatus},O,{children:(0,n.Y)("div",{onMouseEnter:v,onMouseLeave:h,children:(0,n.Y)(i.A,{name:a.nativeFilterId,allowClear:!0,mode:"multiple",value:$,placeholder:k,onChange:z,onBlur:b,onFocus:g,ref:x,options:_,onOpenChange:S})})}))})}},96526(e,t,a){a.d(t,{Mo:()=>o,j3:()=>l});var n=a(85614),r=a(93225);let l=n.styled.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>0===e?"100%":`${e}px`};
`;(0,n.styled)(r.e)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`;let o=n.styled.div`
  color: ${({theme:e,status:t="error"})=>{if("help"===t)return e.colorTextSecondary;switch(t){case"error":default:return e.colorError;case"warning":return e.colorWarning;case"info":return e.colorInfo}}};
  text-align: ${({centerText:e})=>e?"center":"left"};
  width: 100%;
`}}]);