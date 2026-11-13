"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[2246],{43907(e,t,i){i.d(t,{E:()=>r});var n=i(2445),a=i(85614),l=i(22022);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}let r=(0,a.styled)(e=>(0,n.Y)(l.Badge,o({},e)))`
  ${({theme:e,color:t,count:i})=>`
    & > sup,
    & > sup.ant-badge-count {
      box-shadow: none;
      ${void 0!==i?`background: ${t||e.colorPrimary};`:""}
    }
  `}
`},81861(e,t,i){i.d(t,{g:()=>u});var n=i(2445),a=i(22022),l=i(20249),o=i.n(l),r=i(85614),s=i(17437),d=i(8563);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}let u=e=>{let{popupRender:t,tooltip:i,tooltipPlacement:l,children:u}=e,p=function(e,t){if(null==e)return{};var i,n,a={},l=Object.getOwnPropertyNames(e);for(n=0;n<l.length;n++)!(t.indexOf(i=l[n])>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i]);return a}(e,["popupRender","tooltip","tooltipPlacement","children"]),h=(0,r.useTheme)(),{type:m}=p,g=(0,s.AH)`
    ${(!m||"default"===m)&&`.ant-dropdown-trigger {
      position: relative;
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        height: 100%;
      }
      .anticon {
        vertical-align: middle;
      }
    }`}
  `,b=(0,n.Y)(a.Dropdown.Button,c({popupRender:t},p,{css:[g,(0,s.AH)`
          .ant-btn {
            height: 30px;
            box-shadow: none;
            font-size: ${h.fontSizeSM}px;
            font-weight: ${h.fontWeightStrong};
          }
        `],children:u}));return i?(0,n.Y)(d.m,{placement:l,id:`${o()(i)}-tooltip`,title:i,children:b}):b}},98110(e,t,i){i.d(t,{U:()=>w});var n=i(2445),a=i(27124),l=i(17437),o=i(85614),r=i(60685),s=i(59854),d=i(24002),c=i(52747),u=i(8563),p=i(22022);let h=e=>(0,l.AH)`
  display: flex;
  font-size: ${e.fontSizeXL}px;
  font-weight: ${e.fontWeightStrong};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & .dynamic-title-input {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0;
    color: ${e.colorText};
    background-color: ${e.colorBgContainer};

    &::placeholder {
      color: ${e.colorTextTertiary};
    }
  }

  & .input-sizer {
    position: absolute;
    left: -9999px;
    display: inline-block;
    white-space: pre;
  }
`,m=(0,d.memo)(({title:e,placeholder:t,onSave:i,canEdit:r,label:s})=>{let m=(0,o.useTheme)(),[g,b]=(0,d.useState)(!1),[f,v]=(0,d.useState)(!1),[y,x]=(0,d.useState)(e||""),{width:$,ref:z}=(0,c.uZ)(),{width:w,ref:S}=(0,c.uZ)({refreshMode:"debounce"});(0,d.useEffect)(()=>{x(e)},[e]),(0,d.useEffect)(()=>{if(g&&(null==z?void 0:z.current)&&z.current.setSelectionRange){let{length:e}=z.current.value;z.current.setSelectionRange(e,e),z.current.scrollLeft=z.current.scrollWidth}},[g]),(0,d.useLayoutEffect)(()=>{(null==z?void 0:z.current)&&(z.current.textContent=y||t)},[y,t,z]),(0,d.useEffect)(()=>{var e;let t=null==(e=z.current)?void 0:e.input;t&&(t.scrollWidth>t.clientWidth?v(!0):v(!1))},[$,w]);let Y=(0,d.useCallback)(()=>{r&&!g&&b(!0)},[r,g]),U=(0,d.useCallback)(()=>{if(!r)return;let t=y.trim();x(t),e!==t&&i(t),b(!1)},[r,y,i,e]),C=(0,d.useCallback)(e=>{r&&g&&x(e.target.value)},[r,g]),T=(0,d.useCallback)(e=>{if(!r)return;e.preventDefault();let{activeElement:t}=document;t&&t instanceof HTMLElement&&t.blur()},[r]);return(0,n.FD)("div",{css:h,ref:S,children:[(0,n.Y)(u.m,{id:"title-tooltip",title:f&&y&&!g?y:null,children:(0,n.Y)(p.Input,{"data-test":"editable-title-input",variant:"borderless","aria-label":null!=s?s:(0,a.t)("Title"),className:"dynamic-title-input",value:y,onChange:C,onBlur:U,onClick:Y,onPressEnter:T,placeholder:t,css:(0,l.AH)`
              ${!r&&`&[disabled] {
                  cursor: default;
                }
              `}
              font-size: ${m.fontSizeXL}px;
              transition: auto;
              ${$&&$>0&&(0,l.AH)`
                width: ${$}px;
              `}
            `,disabled:!r})}),(0,n.Y)("span",{ref:z,className:"input-sizer","aria-hidden":!0,tabIndex:-1})]})});var g=i(58607),b=i(48158),f=i(29138);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}let y=e=>(0,l.AH)`
  width: ${8*e.sizeUnit}px;
  height: ${8*e.sizeUnit}px;
  padding: 0;
  border: 1px solid ${e.colorPrimary};

  &.ant-btn > span.anticon {
    line-height: 0;
    transition: inherit;
  }
`,x=e=>(0,l.AH)`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: ${e.colorBgContainer};
  height: ${16*e.sizeUnit}px;
  padding: 0 ${4*e.sizeUnit}px;

  .editable-title {
    overflow: hidden;

    & > input[type='button'],
    & > span {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      white-space: nowrap;
    }
  }

  span[role='button'] {
    display: flex;
    height: 100%;
  }

  .title-panel {
    display: flex;
    align-items: center;
    min-width: 0;
    margin-right: ${12*e.sizeUnit}px;
  }

  .right-button-panel {
    display: flex;
    align-items: center;
  }
`,$=e=>(0,l.AH)`
  display: flex;
  align-items: center;
  padding-left: ${2*e.sizeUnit}px;

  & .anticon-star {
    padding: 0 ${e.sizeUnit}px;

    &:first-of-type {
      padding-left: 0;
    }
  }
`,z=e=>(0,l.AH)`
  margin-left: ${2*e.sizeUnit}px;
`,w=({editableTitleProps:e,showTitlePanelItems:t,certificatiedBadgeProps:i,showFaveStar:l,faveStarProps:d,titlePanelAdditionalItems:c,rightPanelAdditionalItems:u,additionalActionsMenu:p,menuDropdownProps:h,showMenuDropdown:w=!0,tooltipProps:S})=>{let Y=(0,o.useTheme)();return(0,n.FD)("div",{css:x,className:"header-with-actions",children:[(0,n.FD)("div",{className:"title-panel",children:[(0,n.Y)(m,v({},e)),t&&(0,n.FD)("div",{css:$,children:[(null==i?void 0:i.certifiedBy)&&(0,n.Y)(b.T,v({},i)),l&&(0,n.Y)(s.$,v({},d)),c]})]}),(0,n.FD)("div",{className:"right-button-panel",children:[u,(0,n.Y)("div",{css:z,children:w&&(0,n.Y)(g.ms,v({trigger:["click"],popupRender:()=>p},h,{children:(0,n.Y)(f.$n,{css:y,buttonStyle:"tertiary","aria-label":(0,a.t)("Menu actions trigger"),tooltip:null==S?void 0:S.text,placement:null==S?void 0:S.placement,"data-test":"actions-trigger",children:(0,n.Y)(r.F.EllipsisOutlined,{iconColor:Y.colorPrimary,iconSize:"l"})})}))})]})]})}},17402(e,t,i){i.d(t,{A:()=>s});var n=i(2445),a=i(85614),l=i(60685),o=i(8563),r=i(49508);let s=function({warningMarkdown:e,size:t,marginRight:i}){let s=(0,a.useTheme)();return(0,n.Y)(o.m,{id:"warning-tooltip",title:(0,n.Y)(r.z,{source:e}),children:(0,n.Y)(l.F.WarningOutlined,{iconColor:s.colorWarning,iconSize:t,css:{marginRight:null!=i?i:2*s.sizeUnit}})})}},42114(e,t,i){i.d(t,{A:()=>s});var n=i(2445),a=i(33149),l=i(85614),o=i(52234);let r=l.styled.div`
  position: absolute;
  height: 100%;

  :hover .sidebar-resizer::after {
    background-color: ${({theme:e})=>e.colorPrimary};
  }

  .sidebar-resizer {
    // @z-index-above-sticky-header (100) + 1 = 101
    z-index: 101;
  }

  .sidebar-resizer::after {
    display: block;
    content: '';
    width: 1px;
    height: 100%;
    margin: 0 auto;
  }
`,s=({id:e,initialWidth:t,minWidth:i,maxWidth:l,enable:s,children:d})=>{let[c,u]=(0,o.A)(e,t);return(0,n.FD)(n.FK,{children:[(0,n.Y)(r,{children:(0,n.Y)(a.c,{enable:{right:s},handleClasses:{right:"sidebar-resizer",bottom:"hidden",bottomRight:"hidden",bottomLeft:"hidden"},size:{width:c,height:"100%"},minWidth:i,maxWidth:l,onResizeStop:(e,t,i,n)=>u(c+n.width)})}),d(c)]})}},52234(e,t,i){i.d(t,{A:()=>o});var n=i(24002),a=i(21804);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function o(e,t){let i=(0,n.useRef)(),[o,r]=(0,n.useState)(t);return(0,n.useEffect)(()=>{var t;i.current=null!=(t=i.current)?t:(0,a.Gq)(a.Hh.CommonResizableSidebarWidths,{}),i.current[e]&&r(i.current[e])},[e]),[o,function(t){r(t),(0,a.SO)(a.Hh.CommonResizableSidebarWidths,l({},i.current,{[e]:t}))}]}},37350(e,t,i){i.d(t,{Ay:()=>y,cs:()=>v});var n=i(2445),a=i(24002),l=i(27124),o=i(85614),r=i(68292),s=i(48158),d=i(14121),c=i(60685),u=i(38955),p=i(41947),h=i(17402),m=i(7070),g=i(8251);let b=o.styled.div`
  ${({theme:e})=>`
    .refresh {
      display: flex;
      align-items: center;
      width: 30px;
      margin-left: ${e.sizeUnit}px;
    }

    .section {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .divider {
      border-bottom: 1px solid ${e.colorSplit};
      margin: 15px 0;
    }

    .table-length {
      color: ${e.colorTextSecondary};
    }

    .select {
      flex: 1;
      max-width: calc(100% - ${e.sizeUnit+30}px)
    }
  `}
`,f=o.styled.span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  svg,
  small {
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,v=({table:e})=>{let{value:t,type:i,extra:a}=e;return(0,n.FD)(f,{title:t,children:["view"===i?(0,n.Y)(c.F.FunctionOutlined,{iconSize:"m"}):"materialized_view"===i?(0,n.Y)(c.F.ProfileOutlined,{iconSize:"m"}):(0,n.Y)(c.F.TableOutlined,{iconSize:"m"}),(null==a?void 0:a.certification)&&(0,n.Y)(s.T,{certifiedBy:a.certification.certified_by,details:a.certification.details,size:"l"}),(null==a?void 0:a.warning_markdown)&&(0,n.Y)(h.A,{warningMarkdown:a.warning_markdown,size:"l",marginRight:4}),t]})},y=({database:e,emptyState:t,formMode:i=!1,getDbList:o,handleError:s,isDatabaseSelectEnabled:c=!0,onDbChange:h,onCatalogChange:f,onSchemaChange:y,readOnly:x=!1,onEmptyResults:$,catalog:z,schema:w,tableSelectMode:S="single",tableValue:Y,onTableSelectChange:U,customTableOptionLabelRenderer:C})=>{let T,D,k,{addSuccessToast:F}=(0,m.Yf)(),[A,E]=(0,a.useState)(z),[O,_]=(0,a.useState)(w),[I,P]=(0,a.useState)(void 0),[R,j]=(0,a.useState)(null),{currentData:N,isFetching:L,refetch:B}=(0,g.ty)({dbId:null==e?void 0:e.id,catalog:A,schema:O,onSuccess:(e,t)=>{j(null),t&&F((0,l.t)("List updated"))},onError:e=>{if(null==e?void 0:e.errors){var t,i;j(null!=(t=null==e||null==(i=e.errors)?void 0:i[0])?t:null)}else s((null==e?void 0:e.error)||(0,l.t)("There was an error loading the tables"))}}),W=(0,a.useMemo)(()=>N?N.options.map(e=>({value:e.value,label:C?C(e):(0,n.Y)(v,{table:e}),text:e.value})):[],[N,C]);(0,a.useEffect)(()=>{void 0===e&&(E(void 0),_(void 0),P(void 0))},[e,S]),(0,a.useEffect)(()=>{"single"===S?P(W.find(e=>e.value===Y)):P((null==W?void 0:W.filter(e=>e&&(null==Y?void 0:Y.includes(e.value))))||[])},[W,Y,S]);let M=(0,a.useMemo)(()=>(e,t)=>{let i=e.trim().toLowerCase(),{value:n}=t;return n.toLowerCase().includes(i)},[]);return(0,n.FD)(b,{children:[(0,n.Y)(d.RA,{db:e,emptyState:t,formMode:i,getDbList:o,handleError:s,onDbChange:x?void 0:e=>{h&&h(e),E(void 0),_(void 0),P("single"===S?void 0:[])},onEmptyResults:$,onCatalogChange:x?void 0:e=>{E(e),f&&f(e),_(void 0),P("single"===S?void 0:[])},catalog:A,onSchemaChange:x?void 0:e=>{_(e),y&&y(e),P("single"===S?void 0:[])},schema:O,isDatabaseSelectEnabled:c&&!x,readOnly:x}),!i&&(0,n.Y)("div",{className:"divider"}),R?(0,n.Y)(d.x6,{error:R,source:"crud"}):null,(T=(0,l.t)("Table"),D=(0,n.Y)(r.A,{ariaLabel:(0,l.t)("Select table or type to search tables"),disabled:O&&!i&&x||!O,filterOption:M,labelInValue:!0,loading:L,name:"select-table",onChange:e=>{O?null==U||U(Array.isArray(e)?e.map(e=>null==e?void 0:e.value):null==e?void 0:e.value,A,O):P(e)},options:W,placeholder:(0,l.t)("Select table or type to search tables"),showSearch:!0,mode:S,value:I,allowClear:"multiple"===S,allowSelectAll:!1}),k=!x&&(0,n.Y)(p.A,{onClick:()=>B(),tooltipContent:(0,l.t)("Force refresh table list")}),(0,n.FD)(n.FK,{children:[(0,n.Y)(u.q,{children:T}),(0,n.FD)("div",{className:"section",children:[(0,n.Y)("span",{className:"select",children:D}),(0,n.Y)("span",{className:"refresh",children:k})]})]}))]})}},48905(e,t,i){i.r(t),i.d(t,{datasetReducer:()=>eq,default:()=>eK});var n,a,l=i(2445),o=i(24002),r=i(61574),s=i(27124),d=i(73815),c=i(79924),u=i(58561),p=i.n(u),h=i(7047);function m(e,t,i,n,a,l,o){try{var r=e[l](o),s=r.value}catch(e){i(e);return}r.done?t(s):Promise.resolve(s).then(n,a)}var g=i(98110),b=i(29138),f=i(60685),v=i(75495),y=((n={})[n.SelectDatabase=0]="SelectDatabase",n[n.SelectCatalog=1]="SelectCatalog",n[n.SelectSchema=2]="SelectSchema",n[n.SelectTable=3]="SelectTable",n[n.ChangeDataset=4]="ChangeDataset",n),x=i(85614),$=i(17437);let z=x.styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.colorBgContainer};
`,w=x.styled.div`
  width: ${({theme:e,width:t})=>null!=t?t:80*e.sizeUnit}px;
  max-width: ${({theme:e,width:t})=>null!=t?t:80*e.sizeUnit}px;
  flex-direction: column;
  flex: 1 0 auto;
`,S=x.styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,Y=x.styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`,U=(0,x.styled)(Y)`
  flex: 1 0 0;
  min-height: 0;
  position: relative;
`,C=(0,x.styled)(Y)`
  flex: 1 0 auto;
  height: auto;
`,T=(0,x.styled)(Y)`
  flex: 0 0 auto;
  height: ${({theme:e})=>16*e.sizeUnit}px;
  z-index: 0;
`,D=x.styled.div`
  ${({theme:e})=>`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  height: ${16*e.sizeUnit}px;
  border-bottom: 1px solid ${e.colorBorder};

  .header-with-actions {
    height: ${15.5*e.sizeUnit}px;
  }
  `}
`,k=x.styled.div`
  ${({theme:e})=>`
  margin: ${4*e.sizeUnit}px;
  font-size: ${e.fontSizeXL}px;
  font-weight: ${e.fontWeightStrong};
  `}
`,F=x.styled.div`
  ${({theme:e})=>`
  height: 100%;
  border-right: 1px solid ${e.colorBorderSecondary};
  `}
`,A=x.styled.div`
  width: 100%;
  position: relative;
`,E=x.styled.div`
  ${({theme:e})=>`
  border-left: 1px solid ${e.colorBorderSecondary};
  color: ${e.colorSuccess};
  `}
`,O=x.styled.div`
  ${({theme:e})=>`
  height: ${16*e.sizeUnit}px;
  width: 100%;
  border-top: 1px solid ${e.colorBorderSecondary};
  border-bottom: 1px solid ${e.colorBorderSecondary};
  color: ${e.colorInfo};
  border-top: ${e.sizeUnit/4}px solid
    ${e.colorBorderSecondary};
  padding: ${4*e.sizeUnit}px;
  display: flex;
  justify-content: flex-end;
  background-color: ${e.colorBgContainer};
  z-index: ${e.zIndexPopupBase}
  `}
`,_=x.styled.div`
  .ant-btn {
    span {
      margin-right: 0;
    }

    &:disabled {
      svg {
        color: ${({theme:e})=>e.colorIconHover};
      }
    }
  }
`,I=e=>(0,$.AH)`
  width: ${21.5*e.sizeUnit}px;

  &:disabled {
    background-color: ${e.colorBgContainerDisabled};
    color: ${e.colorTextDisabled};
  }
`,P=(0,s.t)("New dataset"),R={text:(0,s.t)("Select a database table and create dataset"),placement:"bottomRight"};function j({setDataset:e,title:t=P,editing:i=!1}){let n={title:null!=t?t:P,placeholder:P,onSave:t=>{e({type:y.ChangeDataset,payload:{name:"dataset_name",value:t}})},canEdit:!1,label:(0,s.t)("dataset name")};return(0,l.Y)(_,{children:i?(0,l.Y)(g.U,{editableTitleProps:n,showTitlePanelItems:!1,showFaveStar:!1,faveStarProps:{itemId:1,saveFaveStar:()=>{}},titlePanelAdditionalItems:(0,l.Y)(l.FK,{}),rightPanelAdditionalItems:(0,l.FD)(b.$n,{buttonStyle:"primary",tooltip:null==R?void 0:R.text,placement:null==R?void 0:R.placement,disabled:!0,css:I,children:[(0,l.Y)(f.F.SaveOutlined,{iconSize:"m"}),(0,s.t)("Save")]}),additionalActionsMenu:(0,l.Y)(v.W1,{items:[{key:"settings",label:(0,s.t)("Settings")},{key:"delete",label:(0,s.t)("Delete")}]}),menuDropdownProps:{disabled:!0},tooltipProps:R}):(0,l.Y)(k,{children:t||P})})}var N=i(43907),L=i(89920);let B=(0,x.styled)(L.Ay)`
  ${({theme:e})=>`
  margin-top: ${8.5*e.sizeUnit}px;
  padding-left: ${4*e.sizeUnit}px;
  padding-right: ${4*e.sizeUnit}px;

  .ant-tabs-top > .ant-tabs-nav::before {
    width: ${50*e.sizeUnit}px;
  }
  `}
`,W=x.styled.div`
  ${({theme:e})=>`
  .ant-badge {
    width: ${8*e.sizeUnit}px;
    margin-left: ${2.5*e.sizeUnit}px;
  }
  `}
`,M={USAGE_TEXT:(0,s.t)("Usage"),COLUMNS_TEXT:(0,s.t)("Columns"),METRICS_TEXT:(0,s.t)("Metrics")},H=({id:e})=>{let{usageCount:t}=(e=>{let[t,i]=(0,o.useState)(0),n=(0,o.useCallback)(()=>d.A.get({endpoint:`/api/v1/dataset/${e}/related_objects`}).then(({json:e})=>{i(null==e?void 0:e.charts.count)}).catch(e=>{(0,h.iB)((0,s.t)("There was an error fetching dataset's related objects")),c.A.error(e)}),[e]);return(0,o.useEffect)(()=>{e&&n()},[e,n]),{usageCount:t}})(e),i=(0,l.FD)(W,{children:[(0,l.Y)("span",{children:M.USAGE_TEXT}),t>0&&(0,l.Y)(N.E,{count:t})]}),n=[{key:"COLUMNS",label:M.COLUMNS_TEXT,children:null},{key:"METRICS",label:M.METRICS_TEXT,children:null},{key:"USAGE",label:i,children:null}];return(0,l.Y)(B,{moreIcon:null,items:n})};var q=i(71671),K=i(27243),X=i(10020),G=i(20422),Q=i(97020),V=i(71519);let Z=x.styled.div`
  padding: ${({theme:e})=>8*e.sizeUnit}px
    ${({theme:e})=>6*e.sizeUnit}px;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`,J=(0,x.styled)(Q.p)`
  max-width: 50%;

  p {
    width: ${({theme:e})=>115*e.sizeUnit}px;
  }
`,ee=(0,s.t)("Datasets can be created from database tables or SQL queries. Select a database table to the left or "),et=(0,s.t)("create dataset from SQL query"),ei=(0,s.t)(" to open SQL Lab. From there you can save the query as a dataset."),en=(0,s.t)("Select dataset source"),ea=(0,s.t)("No table columns"),el=(0,s.t)("This database table does not contain any data. Please select a different table."),eo=(0,s.t)("An Error Occurred"),er=(0,s.t)("Unable to load columns for the selected table. Please select a different table."),es=e=>{let{hasError:t,tableName:i,hasColumns:n}=e,a="empty-dataset.svg",o=en,r=(0,l.FD)(l.FK,{children:[ee,(0,l.Y)(V.N_,{to:"/sqllab",children:(0,l.Y)("span",{role:"button",tabIndex:0,children:et})}),ei]});return t?(o=eo,r=(0,l.Y)(l.FK,{children:er}),a=void 0):i&&!n&&(a="no-columns.svg",o=ea,r=(0,l.Y)(l.FK,{children:el})),(0,l.Y)(Z,{children:(0,l.Y)(J,{image:a,size:"medium",textSize:"large",title:o,description:r})})};var ed=((a=ed||{}).ABSOLUTE="absolute",a.RELATIVE="relative",a);let ec=x.styled.div`
  ${({theme:e,position:t})=>`
  position: ${t};
  display: flex;
  align-items: center;
  margin: ${4*e.sizeUnit}px
    ${3*e.sizeUnit}px
    ${3*e.sizeUnit}px
    ${6*e.sizeUnit}px;
  font-size: ${5*e.sizeUnit}px;
  font-weight: ${e.fontWeightStrong};
  padding-bottom: ${3*e.sizeUnit}px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  .anticon:first-of-type {
    margin-right: ${2*e.sizeUnit}px;
  }

  `}
`,eu=x.styled.div`
  ${({theme:e})=>`
  margin-left: ${6*e.sizeUnit}px;
  margin-bottom: ${3*e.sizeUnit}px;
  font-weight: ${e.fontWeightStrong};
  `}
`,ep=x.styled.div`
  ${({theme:e})=>`
  padding: ${8*e.sizeUnit}px
    ${6*e.sizeUnit}px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  `}
`,eh=x.styled.div`
  ${({theme:e})=>`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin-top: ${3*e.sizeUnit}px;
    text-align: center;
    font-weight: ${e.fontWeightNormal};
    font-size: ${e.fontSize}px;
    color: ${e.colorTextSecondary};
  }
  `}
`,em=x.styled.div`
  ${({theme:e})=>`
  position: relative;
  margin: ${3*e.sizeUnit}px;
  margin-left: ${6*e.sizeUnit}px;
  height: calc(100% - ${60*e.sizeUnit}px);
  overflow: auto;
  `}
`,eg=x.styled.div`
  ${({theme:e})=>`
  position: relative;
  margin: ${3*e.sizeUnit}px;
  margin-left: ${6*e.sizeUnit}px;
  height: calc(100% - ${30*e.sizeUnit}px);
  overflow: auto;
  `}
`,eb=x.styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`,ef=(0,x.styled)(K.F)`
  ${({theme:e})=>`
  border: 1px solid ${e.colorInfoText};
  padding: ${4*e.sizeUnit}px;
  margin: ${6*e.sizeUnit}px ${6*e.sizeUnit}px
    ${8*e.sizeUnit}px;
  .view-dataset-button {
    position: absolute;
    top: ${4*e.sizeUnit}px;
    right: ${4*e.sizeUnit}px;

    &:hover {
      color: ${e.colorPrimary};
      text-decoration: underline;
    }
  }
  `}
`,ev=(0,s.t)("Refreshing columns"),ey=(0,s.t)("Table columns"),ex=["5","10","15","25"],e$=[{title:"Column Name",dataIndex:"name",key:"name",sorter:(e,t)=>e.name.localeCompare(t.name)},{title:"Datatype",dataIndex:"type",key:"type",width:"100px",sorter:(e,t)=>e.name.localeCompare(t.name)}],ez=(0,s.t)(`This table already has a dataset associated with it. You can only associate one dataset with a table.
`),ew=(0,s.t)("View Dataset"),eS=({tableName:e,columnList:t,loading:i,hasError:n,datasets:a})=>{let o,r,d=(null==t?void 0:t.length)>0,c=null==a?void 0:a.map(e=>e.table_name),u=null==a?void 0:a.find(t=>t.table_name===e);return i&&(r=(0,l.Y)(ep,{children:(0,l.FD)(eh,{children:[(0,l.Y)(X.R,{position:"inline-centered",size:"m"}),(0,l.Y)("div",{children:ev})]})})),i||(o=!i&&e&&d&&!n?(0,l.FD)(l.FK,{children:[(0,l.Y)(eu,{title:ey,children:ey}),u?(0,l.Y)(em,{children:(0,l.Y)(eb,{children:(0,l.Y)(G.Ay,{loading:i,size:G.QS.Small,columns:e$,data:t,pageSizeOptions:ex,defaultPageSize:25})})}):(0,l.Y)(eg,{children:(0,l.Y)(eb,{children:(0,l.Y)(G.Ay,{loading:i,size:G.QS.Small,columns:e$,data:t,pageSizeOptions:ex,defaultPageSize:25})})})]}):(0,l.Y)(es,{hasColumns:d,hasError:n,tableName:e})),(0,l.FD)(l.FK,{children:[e&&(0,l.FD)(l.FK,{children:[(null==c?void 0:c.includes(e))&&(0,l.Y)(ef,{closable:!1,type:"info",showIcon:!0,message:(0,s.t)("This table already has a dataset"),description:(0,l.FD)(l.FK,{children:[ez,(0,l.Y)("span",{role:"button",onClick:()=>{window.open(null==u?void 0:u.explore_url,"_blank","noreferrer noopener popup=false")},tabIndex:0,className:"view-dataset-button",children:ew})]})}),(0,l.FD)(ec,{position:!i&&d?"relative":"absolute",title:e||"",children:[(0,l.Y)(f.F.InsertRowAboveOutlined,{iconSize:"xl"}),e]})]}),o,r]})};function eY(e,t,i,n,a,l,o){try{var r=e[l](o),s=r.value}catch(e){i(e);return}r.done?t(s):Promise.resolve(s).then(n,a)}let eU=({tableName:e,dbId:t,catalog:i,schema:n,setHasColumns:a,datasets:r})=>{let[u,p]=(0,o.useState)([]),[m,g]=(0,o.useState)(!1),[b,f]=(0,o.useState)(!1),v=(0,o.useRef)(e);return(0,o.useEffect)(()=>{var l,o;v.current=e,e&&n&&t&&(l={tableName:e,dbId:t,schema:n},(o=function*(){let{dbId:e,tableName:t,schema:n}=l;g(!0),null==a||a(!1);let o=`/api/v1/database/${e}/table_metadata/${(0,q.zJ)({name:t,catalog:i,schema:n})}`;try{var r;let e,t=yield d.A.get({endpoint:o});if(r=null==t?void 0:t.json,e=!0,"string"!=typeof(null==r?void 0:r.name)&&(e=!1),e&&!Array.isArray(r.columns)&&(e=!1),e&&r.columns.length>0&&(e=!r.columns.some((e,t)=>{let i,n,a=(i=!0,n="The object provided to isITableColumn does match the interface.","string"!=typeof(null==e?void 0:e.name)&&(i=!1,console.error(`${n} The property 'name' is required and must be a string`)),i&&"string"!=typeof(null==e?void 0:e.type)&&(i=!1,console.error(`${n} The property 'type' is required and must be a string`)),i);return a||console.error(`The provided object does not match the IDatabaseTable interface. columns[${t}] is invalid and does not match the ITableColumn interface`),!a})),e){let e=t.json;e.name===v.current&&(p(e.columns),null==a||a(e.columns.length>0),f(!1))}else p([]),null==a||a(!1),f(!0),(0,h.iB)((0,s.t)("The API response from %s does not match the IDatabaseTable interface.",o)),c.A.error((0,s.t)("The API response from %s does not match the IDatabaseTable interface.",o))}catch(e){p([]),null==a||a(!1),f(!0)}finally{g(!1)}},function(){var e=this,t=arguments;return new Promise(function(i,n){var a=o.apply(e,t);function l(e){eY(a,i,n,l,r,"next",e)}function r(e){eY(a,i,n,l,r,"throw",e)}l(void 0)})})())},[e,t,n]),(0,l.Y)(eS,{columnList:u,hasError:b,loading:m,tableName:e,datasets:r})};var eC=i(37350),eT=i(7070),eD=i(21804),ek=i(90617),eF=i(22389);function eA(){return(eA=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}let eE=x.styled.div`
  ${({theme:e})=>`
    padding: ${4*e.sizeUnit}px;
    height: 100%;
    background-color: ${e.colorBgContainer};
    position: relative;
    .emptystate {
      height: auto;
      margin-top: ${17.5*e.sizeUnit}px;
    }
    .section-title {
      margin-top: ${5.5*e.sizeUnit}px;
      margin-bottom: ${11*e.sizeUnit}px;
      font-weight: ${e.fontWeightStrong};
    }
    .table-title {
      margin-top: ${11*e.sizeUnit}px;
      margin-bottom: ${6*e.sizeUnit}px;
      font-weight: ${e.fontWeightStrong};
    }
    .options-list {
      overflow: auto;
      position: absolute;
      bottom: 0;
      top: ${92.25*e.sizeUnit}px;
      left: ${3.25*e.sizeUnit}px;
      right: 0;

      .no-scrollbar {
        margin-right: ${4*e.sizeUnit}px;
      }

      .options {
        cursor: pointer;
        padding: ${1.75*e.sizeUnit}px;
        border-radius: ${e.borderRadius}px;
        :hover {
          background-color: ${e.colorFillTertiary}
        }
      }

      .options-highlighted {
        cursor: pointer;
        padding: ${1.75*e.sizeUnit}px;
        border-radius: ${e.borderRadius}px;
        background-color: ${e.colorPrimaryText};
        color: ${e.colorTextLightSolid};
      }

      .options, .options-highlighted {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    form > span[aria-label="refresh"] {
      position: absolute;
      top: ${69*e.sizeUnit}px;
      left: ${42.75*e.sizeUnit}px;
      font-size: ${4.25*e.sizeUnit}px;
    }
    .table-form {
      margin-bottom: ${8*e.sizeUnit}px;
    }
    .loading-container {
      position: absolute;
      top: ${89.75*e.sizeUnit}px;
      left: 0;
      right: 0;
      text-align: center;
      img {
        width: ${20*e.sizeUnit}px;
        margin-bottom: ${2.5*e.sizeUnit}px;
      }
      p {
        color: ${e.colorTextSecondary};
      }
    }
`}
`;function eO({setDataset:e,dataset:t,datasetNames:i}){let{addDangerToast:n}=(0,eT.Yf)(),a=(0,o.useCallback)(t=>{e({type:y.SelectDatabase,payload:{db:t}})},[e]);(0,o.useEffect)(()=>{let e=(0,eD.Gq)(eD.Hh.Database,null);e&&a(e)},[a]);let r=(0,o.useCallback)(e=>(0,l.Y)(eC.cs,{table:(null==i?void 0:i.includes(e.value))?eA({},e,{extra:{warning_markdown:(0,s.t)("This table already has a dataset")}}):e}),[i]);return(0,l.Y)(eE,{children:(0,l.Y)(eC.Ay,eA({database:null==t?void 0:t.db,handleError:n,emptyState:(0,l.Y)(Q.p,{image:"empty.svg",title:(0,s.t)("No databases available"),description:(0,l.FD)("span",{children:[(0,s.t)("Manage your databases")," ",(0,l.Y)(ek.o.Link,{href:(0,eF.A)("/databaseview/list"),children:(0,s.t)("here")})]}),size:"small"}),onDbChange:a,onCatalogChange:t=>{t&&e({type:y.SelectCatalog,payload:{name:"catalog",value:t}})},onSchemaChange:t=>{t&&e({type:y.SelectSchema,payload:{name:"schema",value:t}})},onTableSelectChange:t=>{e({type:y.SelectTable,payload:{name:"table_name",value:t}})},customTableOptionLabelRenderer:r},(null==t?void 0:t.catalog)&&{catalog:t.catalog},(null==t?void 0:t.schema)&&{schema:t.schema}))})}var e_=i(68447),eI=i(81861),eP=i(18847),eR=i(98876),ej=i(15537);let eN=["db","schema","table_name"],eL=[ej.ci,ej.q0,ej.ar,ej.R2],eB=(0,eT.Ay)(function({datasetObject:e,addDangerToast:t,hasColumns:i=!1,datasets:n}){let a=(0,r.W6)(),o=(0,x.useTheme)(),{createResource:d,state:c}=(0,eP.fn)("dataset",(0,s.t)("dataset"),t),{loading:u}=c,p=(0,s.t)("Select a database table."),h=(t=!0)=>{if(e){var i;d({database:null==(i=e.db)?void 0:i.id,catalog:e.catalog,schema:e.schema,table_name:e.table_name}).then(i=>{i&&"number"==typeof i&&((0,eR.logEvent)(ej.oA,e),t?a.push(`/chart/add/?dataset=${e.table_name}`):a.push("/tablemodelview/list/"))})}},m=(0,s.t)("Create and explore dataset"),g=(0,s.t)("Create dataset"),y=!(null==e?void 0:e.table_name)||!i||(null==n?void 0:n.includes(null==e?void 0:e.table_name)),$=(0,l.Y)(v.W1,{items:[{key:"create-only",onClick:()=>{h(!1)},label:g}]});return(0,l.FD)(e_.s,{align:"center",justify:"flex-end",gap:"8px",children:[(0,l.Y)(b.$n,{buttonStyle:"secondary",onClick:()=>{if(e){let t,i=(t=0,eL[Object.keys(e).reduce((i,n)=>(eN.includes(n)&&e[n]&&(t+=1),t),0)]);(0,eR.logEvent)(i,e)}else(0,eR.logEvent)(ej.ci,{});a.goBack()},children:(0,s.t)("Cancel")}),(0,l.Y)(eI.g,{type:"primary",disabled:y,loading:u,tooltip:(null==e?void 0:e.table_name)?void 0:p,onClick:()=>h(!0),popupRender:()=>$,icon:(0,l.Y)(f.F.DownOutlined,{iconSize:"xs",iconColor:o.colorTextLightSolid}),trigger:["click"],children:m})]})});var eW=i(42114);function eM({header:e,leftPanel:t,datasetPanel:i,rightPanel:n,footer:a}){let o=(0,x.useTheme)();return(0,l.FD)(z,{"data-test":"dataset-layout-wrapper",children:[e&&(0,l.Y)(D,{children:e}),(0,l.FD)(U,{children:[t&&(0,l.Y)(eW.A,{id:"dataset",initialWidth:80*o.sizeUnit,minWidth:80*o.sizeUnit,enable:!0,children:e=>(0,l.Y)(w,{width:e,children:(0,l.Y)(F,{children:t})})}),(0,l.FD)(S,{children:[(0,l.FD)(C,{children:[i&&(0,l.Y)(A,{children:i}),n&&(0,l.Y)(E,{children:n})]}),(0,l.Y)(T,{children:a&&(0,l.Y)(O,{children:a})})]})]})]})}function eH(){return(eH=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function eq(e,t){let i=eH({},e);switch(t.type){case y.SelectDatabase:return eH({},i,t.payload,{catalog:null,schema:null,table_name:null});case y.SelectCatalog:return eH({},i,{[t.payload.name]:t.payload.value,schema:null,table_name:null});case y.SelectSchema:return eH({},i,{[t.payload.name]:t.payload.value,table_name:null});case y.SelectTable:case y.ChangeDataset:return eH({},i,{[t.payload.name]:t.payload.value});default:return null}}function eK(){var e;let[t,i]=(0,o.useReducer)(eq,null),[n,a]=(0,o.useState)(!1),[u,g]=(0,o.useState)(!1),{datasets:b,datasetNames:f}=((e,t)=>{let[i,n]=(0,o.useState)([]),a=t?encodeURIComponent(t):void 0,l=(0,o.useCallback)(e=>{var t;return(t=function*(){let t,i=[],a=0;for(;void 0===t||i.length<t;){let n=p().encode_uri({filters:e,page:a});try{let e=yield d.A.get({endpoint:`/api/v1/dataset/?q=${n}`});({count:t}=e.json);let{json:{result:l}}=e;i=[...i,...l],a+=1}catch(e){(0,h.iB)((0,s.t)("There was an error fetching dataset")),c.A.error((0,s.t)("There was an error fetching dataset"),e);break}}n(i)},function(){var e=this,i=arguments;return new Promise(function(n,a){var l=t.apply(e,i);function o(e){m(l,n,a,o,r,"next",e)}function r(e){m(l,n,a,o,r,"throw",e)}o(void 0)})})()},[]);(0,o.useEffect)(()=>{let i=[{col:"database",opr:"rel_o_m",value:null==e?void 0:e.id},{col:"schema",opr:"eq",value:a},{col:"sql",opr:"dataset_is_null_or_empty",value:!0}];t&&(null==e?void 0:e.id)!==void 0&&l(i)},[null==e?void 0:e.id,t,a,l]);let r=(0,o.useMemo)(()=>null==i?void 0:i.map(e=>e.table_name),[i]);return{datasets:i,datasetNames:r}})(null==t?void 0:t.db,null==t?void 0:t.schema),{datasetId:v}=(0,r.g)();return(0,o.useEffect)(()=>{Number.isNaN(parseInt(v,10))||g(!0)},[v]),(0,l.Y)(eM,{header:(0,l.Y)(j,{setDataset:i,title:null==t?void 0:t.table_name}),leftPanel:u?null:(0,l.Y)(eO,{setDataset:i,dataset:t,datasetNames:f}),datasetPanel:u?(0,l.Y)(H,{id:v}):(0,l.Y)(eU,{tableName:null==t?void 0:t.table_name,dbId:null==t||null==(e=t.db)?void 0:e.id,catalog:null==t?void 0:t.catalog,schema:null==t?void 0:t.schema,setHasColumns:a,datasets:b}),footer:(0,l.Y)(eB,{url:"/tablemodelview/list/?pageIndex=0&sortColumn=changed_on_delta_humanized&sortOrder=desc",datasetObject:t,hasColumns:n,datasets:f})})}}}]);