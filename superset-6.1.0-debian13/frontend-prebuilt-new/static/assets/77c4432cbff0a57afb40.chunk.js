"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7053],{93225(e,l,t){t.d(l,{e:()=>a});var r=t(22022),i=t(85614);let a=(0,i.styled)(r.Form.Item)`
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
`},47053(e,l,t){t.r(l),t.d(l,{default:()=>S});var r=t(2445),i=t(24002),a=t(27124),n=t(85614),o=t(93225),s=t(68447),d=t(8563),c=t(60685),u=t(68292),m=t(61225),h=t(10381),f=t(73815),v=t(58561),p=t.n(v);function y(e,l,t,r,i,a,n){try{var o=e[a](n),s=o.value}catch(e){t(e);return}o.done?l(s):Promise.resolve(s).then(r,i)}var g=t(96526);let b={},k=(0,h.Mz)([e=>{var l;return(null==(l=e.sliceEntities)?void 0:l.slices)||b}],e=>{let l=[];return Object.values(e).forEach(e=>{var t;if((null==(t=e.form_data)?void 0:t.viz_type)==="deck_multi"){let t=e.form_data.deck_slices;t&&Array.isArray(t)&&l.push(...t)}}),[...new Set(l)]});function S(e){let{formData:l,filterState:t,setDataMask:h,width:v,height:S}=e,_=(0,n.useTheme)(),[w,x]=(0,i.useState)((null==t?void 0:t.value)||[]),$=(0,i.useRef)(!1),z=(0,m.d4)(k),M=(0,m.d4)(e=>e.dataMask||b),Y=(0,i.useMemo)(()=>{var e;let l=Object.values(M).find(e=>{var l;return(null==e||null==(l=e.extraFormData)?void 0:l.visible_deckgl_layers)!==void 0});return null==l||null==(e=l.extraFormData)?void 0:e.visible_deckgl_layers},[M]),{layers:C,isLoading:E}=(e=>{let[l,t]=(0,i.useState)([]),[r,a]=(0,i.useState)(!1),[n,o]=(0,i.useState)(null);return(0,i.useEffect)(()=>{var l;e&&0!==e.length?(l=function*(){a(!0),o(null);try{let l=p().encode({columns:["id","slice_name","viz_type"],filters:[{col:"id",opr:"in",value:e}]}),r=`/api/v1/chart/?q=${l}`,i=((yield f.A.get({endpoint:r})).json.result||[]).map(e=>({sliceId:e.id,name:e.slice_name,type:e.viz_type}));t(i)}catch(l){o(l instanceof Error?l.message:"Unknown error"),t(e.map(e=>({sliceId:e,name:`Layer ${e}`,type:"unknown"})))}finally{a(!1)}},function(){var e=this,t=arguments;return new Promise(function(r,i){var a=l.apply(e,t);function n(e){y(a,r,i,n,o,"next",e)}function o(e){y(a,r,i,n,o,"throw",e)}n(void 0)})})():t([])},[e.join(",")]),{layers:l,isLoading:r,error:n}})(z),I=(0,i.useMemo)(()=>C.map(e=>e.sliceId),[C]);(0,i.useEffect)(()=>{$.current||!l.defaultToAllLayersVisible||!(C.length>0)||(null==t?void 0:t.value)||void 0!==Y||($.current=!0,x([]),h({filterState:{value:[]},extraFormData:{visible_deckgl_layers:I}}))},[l.defaultToAllLayersVisible,C.length,null==t?void 0:t.value,Y,I,h]);let j=(0,i.useCallback)(e=>{x(e);let l=I.filter(l=>!e.includes(l));h({filterState:{value:e},extraFormData:{visible_deckgl_layers:l}})},[I,h]),F=(0,i.useMemo)(()=>C.map(e=>({label:`${e.name} (${e.type})`,value:e.sliceId})),[C]);return E&&0===C.length?(0,r.Y)(g.j3,{height:S,width:v,children:(0,r.Y)("div",{children:(0,a.t)("Loading deck.gl layers...")})}):(0,r.Y)(g.j3,{height:S,width:v,children:0===C.length?(0,r.Y)("div",{children:(0,a.t)("No deck.gl multi layer charts found in this dashboard.")}):(0,r.Y)(o.e,{label:(0,r.FD)(s.s,{gap:_.sizeUnit,children:[(0,r.Y)("span",{children:(0,a.t)("Exclude layers (deck.gl)")}),(0,r.Y)(d.m,{title:(0,a.t)("Choose layers to hide from all deck.gl Multiple Layer charts in this dashboard."),children:(0,r.Y)("span",{className:"tooltip-icon",children:(0,r.Y)(c.F.InfoCircleOutlined,{iconSize:"m",iconColor:_.colorIcon})})})]}),children:(0,r.Y)(u.A,{mode:"multiple",value:w,onChange:j,options:F,placeholder:(0,a.t)("Select layers to hide"),allowClear:!0})})})}},96526(e,l,t){t.d(l,{Mo:()=>n,j3:()=>a});var r=t(85614),i=t(93225);let a=r.styled.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>0===e?"100%":`${e}px`};
`;(0,r.styled)(i.e)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`;let n=r.styled.div`
  color: ${({theme:e,status:l="error"})=>{if("help"===l)return e.colorTextSecondary;switch(l){case"error":default:return e.colorError;case"warning":return e.colorWarning;case"info":return e.colorInfo}}};
  text-align: ${({centerText:e})=>e?"center":"left"};
  width: 100%;
`}}]);