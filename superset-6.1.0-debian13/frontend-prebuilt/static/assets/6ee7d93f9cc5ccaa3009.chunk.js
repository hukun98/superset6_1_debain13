"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7606],{93225(e,r,t){t.d(r,{e:()=>a});var o=t(22022),i=t(85614);let a=(0,i.styled)(o.Form.Item)`
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
`},64414(e,r,t){t.r(r),t.d(r,{default:()=>c});var o=t(2445),i=t(19202),a=t(65802),l=t(85614),n=t(24002),d=t(48511),s=t(54299);let u=(0,l.styled)(s.j3)`
  display: flex;
  align-items: center;
  overflow-x: visible;

  & .ant-tag {
    margin-right: 0;
  }
`,f=l.styled.div`
  display: flex;
  height: 100%;
  max-width: 100%;
  width: 100%;
  & > div,
  & > div:hover {
    ${({validateStatus:e,theme:r})=>{if(!e)return"";switch(e){case"error":default:return`border-color: ${r.colorError}`;case"warning":return`border-color: ${r.colorWarning}`;case"info":return`border-color: ${r.colorInfo}`}}}
  }
  & > div {
    width: 100%;
  }

  &:focus > div {
    border-color: ${({theme:e})=>e.colorPrimary};
    box-shadow: ${({theme:e})=>`0 0 0 2px ${e.controlOutline}`};
    outline: 0;
  }
`;function c(e){var r;let{setDataMask:t,setHoveredFilter:l,unsetHoveredFilter:s,setFocusedFilter:c,unsetFocusedFilter:m,setFilterActive:v,width:p,height:b,filterState:h,inputRef:g,isOverflowingFilterBar:x=!1}=e,$=(0,i.a)().get("filter.dateFilterControl"),w=null!=$?$:d.Ay,y=(0,n.useCallback)(e=>{let r=e&&e!==a.WC;t({extraFormData:r?{time_range:e}:{},filterState:{value:r?e:void 0}})},[t]);return(0,n.useEffect)(()=>{y(h.value)},[h.value]),(null==(r=e.formData)?void 0:r.inView)?(0,o.Y)(u,{width:p,height:b,children:(0,o.Y)(f,{ref:g,validateStatus:h.validateStatus,onFocus:c,onBlur:m,onMouseEnter:l,onMouseLeave:s,tabIndex:-1,children:(0,o.Y)(w,{value:h.value||a.WC,name:e.formData.nativeFilterId||"time_range",onChange:y,onOpenPopover:()=>v(!0),onClosePopover:()=>{v(!1),s(),m()},isOverflowingFilterBar:x})})}):null}}}]);