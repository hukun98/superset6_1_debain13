"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9915],{26773(e,t,r){r.d(t,{A:()=>p});var i=r(2445),o=r(24002),a=r(27124),n=r(85614),l=r(74469),s=r(60685),c=r(26168);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}let u=n.styled.div`
  position: relative;

  &:hover {
    .copy-button {
      visibility: visible;
    }
  }

  .copy-button {
    position: absolute;
    top: 40px;
    right: 16px;
    z-index: 10;
    visibility: hidden;
    margin: -4px;
    padding: 4px;
    background: ${({theme:e})=>e.colorBgContainer};
    border-radius: ${({theme:e})=>e.borderRadius}px;
    color: ${({theme:e})=>e.colorIcon};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: ${({theme:e})=>e.colorFillContentHover};
      color: ${({theme:e})=>e.colorIconHover};
    }

    &:focus {
      visibility: visible;
      outline: 2px solid ${({theme:e})=>e.colorPrimary};
      outline-offset: 2px;
    }
  }
`;function p(e){let{addDangerToast:t,addSuccessToast:r,children:n,language:p}=e,h=function(e,t){if(null==e)return{};var r,i,o={},a=Object.getOwnPropertyNames(e);for(i=0;i<a.length;i++)!(t.indexOf(r=a[i])>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r]);return o}(e,["addDangerToast","addSuccessToast","children","language"]);function y(e){(0,c.A)(()=>Promise.resolve(e)).then(()=>{r&&r((0,a.t)("Code Copied!"))}).catch(()=>{t&&t((0,a.t)("Sorry, your browser does not support copying."))})}return(0,o.useEffect)(()=>{(0,l.Fq)([p])},[p]),(0,i.FD)(u,{children:[(0,i.Y)(s.F.CopyOutlined,{className:"copy-button",tabIndex:0,role:"button","aria-label":(0,a.t)("Copy code to clipboard"),onClick:e=>{e.preventDefault(),e.stopPropagation(),e.currentTarget.blur(),y(n)},onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),y(n))}}),(0,i.Y)(l.Ay,d({language:p,showCopyButton:!1},h,{children:n}))]})}},14243(e,t,r){r.d(t,{A:()=>o});var i=r(24002);function o({queries:e,fetchData:t,currentQueryId:r}){let a=e.findIndex(e=>e.id===r),[n,l]=(0,i.useState)(a),[s,c]=(0,i.useState)(!1),[d,u]=(0,i.useState)(!1);function p(){c(0===n),u(n===e.length-1)}function h(r){let i=n+(r?-1:1);i>=0&&i<e.length&&(t(e[i].id),l(i),p())}return(0,i.useEffect)(()=>{p()}),{handleKeyPress:function(t){n>=0&&n<e.length&&("ArrowDown"===t.key||"k"===t.key?(t.preventDefault(),h(!1)):("ArrowUp"===t.key||"j"===t.key)&&(t.preventDefault(),h(!0)))},handleDataChange:h,disablePrevious:s,disableNext:d}}},91020(e,t,r){r.r(t),r.d(t,{default:()=>j});var i=r(2445),o=r(24002),a=r(61574),n=r(71519),l=r(27124),s=r(73815),c=r(42513),d=r(85614),u=r(17437),p=r(37254),h=r(7070),y=r(18847),b=r(79294),g=r(59272),m=r(8563),f=r(73825),v=r(58977),S=r(14121),x=r(74469),H=r(97126),k=r(16598),q=r(60685),w=r(46942),C=r.n(w),F=r(56030),z=r(29138),Y=r(26773),T=r(14243);let $=d.styled.div`
  color: ${({theme:e})=>e.colorTextSecondary};
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  margin-bottom: 0;
`,D=d.styled.div`
  color: ${({theme:e})=>e.colorText};
  font-size: ${({theme:e})=>e.fontSize}px;
  padding: 4px 0 24px 0;
`,A=d.styled.div`
  display: flex;
`,O=d.styled.div`
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  padding: ${({theme:e})=>2*e.sizeUnit}px
    ${({theme:e})=>4*e.sizeUnit}px;
  margin-right: ${({theme:e})=>4*e.sizeUnit}px;
  color: ${({theme:e})=>e.colorPrimaryText};

  &.active,
  &:focus,
  &:hover {
    background: ${({theme:e})=>e.colorPrimaryBg};
    border-radius: ${({theme:e})=>e.borderRadius}px;
  }

  &:hover:not(.active) {
    background: ${({theme:e})=>e.colorPrimaryBgHover};
  }
`,U=(0,d.styled)(F.aF)`
  .ant-modal-body {
    padding: ${({theme:e})=>6*e.sizeUnit}px;
    padding-top: 0;
  }
`,N=(0,h.Ay)(function({onHide:e,openInSqlLab:t,queries:r,query:a,fetchData:n,show:s,addDangerToast:c,addSuccessToast:u}){let{handleKeyPress:p,handleDataChange:h,disablePrevious:y,disableNext:b}=(0,T.A)({queries:r,currentQueryId:a.id,fetchData:n}),g=(0,d.useTheme)(),m={border:1,borderColor:g.colorBorder,borderStyle:"solid",marginTop:4*g.sizeUnit,fontSize:.75*g.fontSize,height:100*g.sizeUnit},[f,v]=(0,o.useState)("user"),{id:S,sql:x,executed_sql:H}=a;return(0,i.Y)("div",{role:"none",onKeyUp:p,children:(0,i.FD)(U,{onHide:e,show:s,title:(0,l.t)("Query preview"),footer:(0,i.FD)(i.FK,{children:[(0,i.Y)(z.$n,{"data-test":"previous-query",buttonStyle:"secondary",disabled:y,onClick:()=>h(!0),children:(0,l.t)("Previous")},"previous-query"),(0,i.Y)(z.$n,{"data-test":"next-query",buttonStyle:"secondary",disabled:b,onClick:()=>h(!1),children:(0,l.t)("Next")},"next-query"),(0,i.Y)(z.$n,{"data-test":"open-in-sql-lab",onClick:()=>t(S),children:(0,l.t)("Open in SQL Lab")},"open-in-sql-lab")]}),children:[(0,i.Y)($,{children:(0,l.t)("Tab name")}),(0,i.Y)(D,{children:a.tab_name}),(0,i.FD)(A,{children:[(0,i.Y)(O,{role:"button","data-test":"toggle-user-sql",className:C()({active:"user"===f}),onClick:()=>v("user"),children:(0,l.t)("User query")}),(0,i.Y)(O,{role:"button","data-test":"toggle-executed-sql",className:C()({active:"executed"===f}),onClick:()=>v("executed"),children:(0,l.t)("Executed query")})]}),(0,i.Y)(Y.A,{addDangerToast:c,addSuccessToast:u,language:"sql",customStyle:m,children:("user"===f?x:H)||""})]})})});var P=r(7047),I=r(24477),R=r(45507);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}let L=(0,d.styled)(S.uO)`
  table .ant-table-cell {
    vertical-align: top;
  }
`,B=(0,d.styled)(x.Ay)`
  height: ${({theme:e})=>26*e.sizeUnit}px;
  overflow: hidden !important; /* needed to override inline styles */
  text-overflow: ellipsis;
  white-space: nowrap;

  /* Ensure the syntax highlighter content respects the container constraints */
  & > div {
    height: 100%;
    overflow: hidden;
  }

  pre {
    height: 100% !important;
    overflow: hidden !important;
    margin: 0 !important;
  }
`,Q=d.styled.div`
  .count {
    margin-left: 5px;
    color: ${({theme:e})=>e.colorPrimary};
    text-decoration: underline;
    cursor: pointer;
  }
`,Z=d.styled.div`
  color: ${({theme:e})=>e.colorText};
`,K=(0,d.styled)(g.JU)`
  text-align: left;
  font-family: ${({theme:e})=>e.fontFamilyCode};
`,j=(0,h.Ay)(function({addDangerToast:e}){let{state:{loading:t,resourceCount:r,resourceCollection:h},fetchData:g}=(0,y.RU)("query",(0,l.t)("Query history"),e,!1),[w,C]=(0,o.useState)(),F=(0,d.useTheme)(),z=(0,a.W6)();(0,o.useEffect)(()=>{(0,x.Fq)(["sql"])},[]);let Y=(0,o.useCallback)(t=>{s.A.get({endpoint:`/api/v1/query/${t}`}).then(({json:e={}})=>{C(E({},e.result))},(0,p.JF)(t=>e((0,l.t)("There was an issue previewing the selected query. %s",t))))},[e]),T=E({activeChild:"Query history"},v.F),$=[{id:k.H.StartTime,desc:!0}],D=(0,o.useMemo)(()=>[{Cell:({row:{original:{status:e}}})=>{let t={name:null,label:""};return e===c.kZ.Success?(t.name=(0,i.Y)(q.F.CheckOutlined,{iconSize:"m",iconColor:F.colorSuccess,css:(0,u.AH)`
                  vertical-align: -webkit-baseline-middle;
                `}),t.label=(0,l.t)("Success")):e===c.kZ.Failed||e===c.kZ.Stopped?(t.name=(0,i.Y)(q.F.CloseOutlined,{iconSize:"m",iconColor:e===c.kZ.Failed?F.colorError:F.colorIcon}),t.label=(0,l.t)("Failed")):e===c.kZ.Running?(t.name=(0,i.Y)(q.F.LoadingOutlined,{iconSize:"m",iconColor:F.colorPrimary}),t.label=(0,l.t)("Running")):e===c.kZ.TimedOut?(t.name=(0,i.Y)(q.F.CircleSolid,{iconSize:"m",iconColor:F.colorIcon}),t.label=(0,l.t)("Offline")):(e===c.kZ.Scheduled||e===c.kZ.Pending)&&(t.name=(0,i.Y)(q.F.Queued,{iconSize:"m"}),t.label=(0,l.t)("Scheduled")),(0,i.Y)(m.m,{title:t.label,placement:"bottom",children:(0,i.Y)("span",{children:t.name})})},accessor:k.H.Status,size:"xs",disableSortBy:!0,id:k.H.Status},{accessor:k.H.StartTime,Header:(0,l.t)("Time"),size:"lg",Cell:({row:{original:{start_time:e}}})=>{let t=R.XV.utc(e).local().format(H.QU).split(" ");return(0,i.FD)(i.FK,{children:[t[0]," ",(0,i.Y)("br",{}),t[1]]})},id:k.H.StartTime},{Header:(0,l.t)("Duration"),size:"lg",Cell:({row:{original:{status:e,start_time:t,start_running_time:r,end_time:o}}})=>{let a=e===c.kZ.Failed?"danger":e,n=r||t,l=o&&n?(0,R.XV)(R.XV.utc(o-n)).format(H.os):"00:00:00.000";return(0,i.Y)(K,{type:a,role:"timer",children:l})},id:"duration"},{accessor:k.H.TabName,Header:(0,l.t)("Tab name"),size:"xl",id:k.H.TabName},{accessor:k.H.DatabaseName,Header:(0,l.t)("Database"),size:"lg",id:k.H.DatabaseName},{accessor:k.H.Database,hidden:!0,id:k.H.Database},{accessor:k.H.Schema,Header:(0,l.t)("Schema"),size:"lg",id:k.H.Schema},{Cell:({row:{original:{sql_tables:e=[]}}})=>{let t=e.map(e=>e.table),r=t.length>0?t.shift():"";return t.length?(0,i.FD)(Q,{children:[(0,i.Y)("span",{children:r}),(0,i.Y)(f.A,{placement:"right",title:(0,l.t)("TABLES"),trigger:"click",content:(0,i.Y)(i.FK,{children:t.map(e=>(0,i.Y)(Z,{children:e},e))}),children:(0,i.FD)("span",{className:"count",children:["(+",t.length,")"]})})]}):r},accessor:k.H.SqlTables,Header:(0,l.t)("Tables"),size:"lg",disableSortBy:!0,id:k.H.SqlTables},{accessor:k.H.UserFirstName,Header:(0,l.t)("User"),size:"xl",Cell:({row:{original:{user:e}}})=>(0,I.A)(e),id:k.H.UserFirstName},{accessor:k.H.User,hidden:!0,id:k.H.User},{accessor:k.H.Rows,Header:(0,l.t)("Rows"),size:"sm",id:k.H.Rows},{accessor:k.H.Sql,Header:(0,l.t)("SQL"),Cell:({row:{original:e,id:t}})=>(0,i.Y)("div",{tabIndex:0,role:"button","data-test":`open-sql-preview-${t}`,onClick:()=>C(e),onKeyDown:t=>{("Enter"===t.key||" "===t.key)&&(t.preventDefault(),C(e))},style:{cursor:"pointer"},children:(0,i.Y)(B,{language:"sql",customStyle:{cursor:"pointer",userSelect:"none"},children:(0,p.s4)(e.sql,4)})}),size:"xxl",id:k.H.Sql},{Header:(0,l.t)("Actions"),id:"actions",disableSortBy:!0,size:"sm",Cell:({row:{original:{id:e}}})=>(0,i.Y)(m.m,{title:(0,l.t)("Open query in SQL Lab"),placement:"bottom",children:(0,i.Y)(n.N_,{to:`/sqllab?queryId=${e}`,children:(0,i.Y)(q.F.Full,{iconSize:"l"})})})}],[F]),A=(0,o.useMemo)(()=>[{Header:(0,l.t)("Database"),key:"database",id:"database",input:"select",operator:S.c0.RelationOneMany,unfilteredLabel:(0,l.t)("All"),fetchSelects:(0,p.u1)("query","database",(0,p.JF)(t=>e((0,l.t)("An error occurred while fetching database values: %s",t)))),paginate:!0},{Header:(0,l.t)("State"),key:"state",id:"status",input:"select",operator:S.c0.Equals,unfilteredLabel:"All",fetchSelects:(0,p.$C)("query","status",(0,p.JF)(t=>e((0,l.t)("An error occurred while fetching schema values: %s",t)))),paginate:!0},{Header:(0,l.t)("User"),key:"user",id:"user",input:"select",operator:S.c0.RelationOneMany,unfilteredLabel:"All",fetchSelects:(0,p.u1)("query","user",(0,p.JF)(t=>e((0,l.t)("An error occurred while fetching user values: %s",t)))),paginate:!0},{Header:(0,l.t)("Time range"),key:"start_time",id:"start_time",input:"datetime_range",operator:S.c0.Between},{Header:(0,l.t)("Search by query text"),key:"sql",id:"sql",input:"search",operator:S.c0.Contains}],[e]);return(0,i.FD)(i.FK,{children:[(0,i.Y)(b.A,E({},T)),w&&(0,i.Y)(N,{onHide:()=>C(void 0),query:w,queries:h,fetchData:Y,openInSqlLab:e=>z.push(`/sqllab?queryId=${e}`),show:!0}),(0,i.Y)(L,{className:"query-history-list-view",columns:D,count:r,data:h,fetchData:g,filters:A,initialSort:$,loading:t,pageSize:25,highlightRowId:null==w?void 0:w.id,refreshData:()=>{},addDangerToast:e,addSuccessToast:P.WR})]})})}}]);