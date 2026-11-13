"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7682],{19710(e,t,l){l.d(t,{A:()=>i});let i=l(22022).Tree},86954(e,t,l){l.d(t,{n:()=>u});var i=l(2445),r=l(27124),n=l(56030),a=l(60685),o=l(29138),s=l(90617);let d=1100,u=({showModal:e,onHide:t,handleSave:l,onConfirmNavigation:u,title:c="Unsaved Changes",body:p="If you don't save, changes will be lost.",zIndex:h=d})=>(0,i.Y)(n.aF,{centered:!0,responsive:!0,onHide:t,show:e,width:"444px",zIndex:h,title:(0,i.FD)(i.FK,{children:[(0,i.Y)(a.F.WarningOutlined,{iconSize:"m",style:{marginRight:8}}),c]}),footer:(0,i.FD)(i.FK,{children:[(0,i.Y)(o.$n,{buttonStyle:"secondary",onClick:u,children:(0,r.t)("Discard")}),(0,i.Y)(o.$n,{buttonStyle:"primary",onClick:l,children:(0,r.t)("Save")})]}),children:(0,i.Y)(s.o.Text,{children:p})})},93819(e,t,l){l.d(t,{A:()=>eG});var i,r,n,a=l(61225),o=l(82960),s=l(61581),d=l(98876),u=l(2445),c=l(24002),p=l(79924),h=l(27124),m=l(51281),v=l(25365),g=l(85614),f=l(3037),y=l(10020),b=l(97020),x=l(14121),S=l(15537),C=l(97126),w=l(71671),_=l(93120),F=((i={}).Explore="explore",i.Dashboard="dashboard",i),T=l(61287),A=l(4124),Y=l.n(A),$=l(2404),E=l.n($),k=l(88055),D=l.n(k),O=l(77092),z=l(13048),M=l(63748),R=l(63607),I=l(18036),N=l(19202),L=l(47451),U=l(58607),j=l(70399),H=l(72255),P=l(27243),q=l(17437),V=l(71519),B=l(29138),W=l(56030),G=l(68447),K=l(22022),Q=l(59554),X=l(76424),J=l(11047),Z=l(5379),ee=l(7070),et=l(12097),el=l(27664),ei=l(64163),er=((r={})[r.Chart=0]="Chart",r[r.Table=1]="Table",r);function en({formData:e,result:t,dataset:l,onContextMenu:i,inContextMenu:r}){let n=(0,c.useMemo)(()=>({onContextMenu:i}),[i]);return(0,u.Y)("div",{css:(0,q.AH)`
        width: 100%;
        height: 100%;
        min-height: 0;
      `,"data-test":"drill-by-chart",children:(0,u.Y)(R.A,{disableErrorBoundary:!0,chartType:e.viz_type,enableNoResults:!0,datasource:l,formData:e,queriesData:t,hooks:n,inContextMenu:r,height:"100%",width:"100%"})})}var ea=l(891),eo=l(36868),es=l(89920);let ed=g.styled.div`
  ${()=>(0,q.AH)`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
  `}
`;function eu(){return(eu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let ec="adhoc_filters",ep=({formData:e,closeModal:t})=>{let l=(0,a.wA)(),{addDangerToast:i}=(0,ee.Yf)(),r=(0,g.useTheme)(),[n,o]=(0,c.useState)(""),s=(0,c.useContext)(Q.DashboardPageIdContext),p=(0,c.useCallback)(()=>{l((0,d.logEvent)(S.Ro,{slice_id:e.slice_id}))},[l,e.slice_id]),m=(0,a.d4)(e=>{var t;return(0,et.L)("can_explore","Superset",null==(t=e.user)?void 0:t.roles)}),[v,f]=e.datasource.split("__");(0,c.useEffect)(()=>{(0,ei.n)()||(0,X.T)(Number(v),f,e,0).then(e=>{o(`/explore/?form_data_key=${e}&dashboard_page_id=${s}`)}).catch(()=>{i((0,h.t)("Failed to generate chart edit URL"))})},[i,s,v,f,e]);let y=!n||!m;return(0,u.FD)(u.FK,{children:[!(0,ei.n)()&&(0,u.Y)(B.$n,{buttonStyle:"secondary",buttonSize:"small",onClick:p,disabled:y,tooltip:y?(0,h.t)("You do not have sufficient permissions to edit the chart"):void 0,children:(0,u.Y)(V.N_,{css:(0,q.AH)`
              &:hover {
                text-decoration: none;
              }
            `,to:n,children:(0,h.t)("Edit chart")})}),(0,u.Y)(B.$n,{buttonStyle:"primary",buttonSize:"small",onClick:t,"data-test":"close-drill-by-modal",css:(0,q.AH)`
          margin-left: ${2*r.sizeUnit}px;
        `,children:(0,h.t)("Close")})]})};function eh({column:e,dataset:t,drillByConfig:l,formData:i,onHideModal:r,canDownload:n}){var o;let p=(0,a.wA)(),m=(0,g.useTheme)(),{addDangerToast:f}=(0,ee.Yf)(),[b,x]=(0,c.useState)(!0),[C,w]=(0,c.useState)([eu({},l,{column:e})]);(0,c.useEffect)(()=>{p((0,d.logEvent)(S.bD,{slice_id:i.slice_id}))},[p,i.slice_id]);let{column:_,groupbyFieldName:F=l.groupbyFieldName}=C[C.length-1]||{},T=(0,c.useMemo)(()=>(0,v.A)(i[F]).map(e=>{var l;return null==(l=t.columns)?void 0:l.find(t=>t.column_name===e)}).filter(H.A),[t.columns,i,F]),{displayModeToggle:A,drillByDisplayMode:Y}=(()=>{let[e,t]=(0,c.useState)(er.Chart);return{displayModeToggle:(0,c.useMemo)(()=>(0,u.Y)("div",{css:e=>(0,q.AH)`
          margin-bottom: ${6*e.sizeUnit}px;
        `,"data-test":"drill-by-display-toggle",children:(0,u.Y)(ea.s.GroupWrapper,{onChange:({target:{value:e}})=>{t(e)},defaultValue:er.Chart,options:[{label:(0,h.t)("Chart"),value:er.Chart},{label:(0,h.t)("Table"),value:er.Table}],optionType:"button",buttonStyle:"outline"})}),[]),drillByDisplayMode:e}})(),[$,E]=(0,c.useState)(),k=(o=i.datasource,(0,H.A)($)?1===$.length?(0,u.Y)(ed,{"data-test":"drill-by-results-table",children:(0,u.Y)(eo.U,{colnames:$[0].colnames,coltypes:$[0].coltypes,rowcount:$[0].sql_rowcount,data:$[0].data,datasourceId:o,isVisible:!0,canDownload:n})}):(0,u.Y)(es.Ay,{defaultActiveKey:"result-tab-0",items:$.map((e,t)=>({key:`result-tab-${t}`,label:(0,h.t)("Results %s",t+1),children:(0,u.Y)(ed,{children:(0,u.Y)(eo.U,{colnames:e.colnames,coltypes:e.coltypes,data:e.data,rowcount:e.sql_rowcount,datasourceId:o,isVisible:!0,canDownload:n})})}))}):(0,u.Y)("div",{})),[D,O]=(0,c.useState)(i),[z,M]=(0,c.useState)([...T,e].filter(H.A)),[R,I]=(0,c.useState)([{groupby:T,filters:l.filters},{groupby:e||[]}]),N=(0,c.useCallback)((e,t=F)=>Array.isArray(i[t])?[e.column_name]:e.column_name,[i,F]),L=(0,c.useCallback)(e=>e.reduce((e,t)=>{(null==t?void 0:t.groupbyFieldName)&&t.column&&(e.formData[t.groupbyFieldName]=N(t.column,t.groupbyFieldName),e.overriddenGroupbyFields.add(t.groupbyFieldName));let l=(null==t?void 0:t.adhocFilterFieldName)||ec;return e.formData[l]=[...(0,v.A)(e[l]),...(0,v.A)(t.filters).map(e=>(0,J.r)(e))],e.overriddenAdhocFilterFields.add(l),e},{formData:{},overriddenGroupbyFields:new Set,overriddenAdhocFilterFields:new Set}),[N]),U=(0,c.useCallback)(()=>C.reduce((e,t)=>{let l=t.adhocFilterFieldName||ec;return e[l]=[...e[l]||[],...t.filters.map(e=>(0,J.r)(e))],e},{}),[C]),j=(0,c.useCallback)((e,t)=>{p((0,d.logEvent)(S.g$,{slice_id:i.slice_id})),w(e=>e.slice(0,t)),I(e=>{let l=e.slice(0,t+1);return delete l[l.length-1].filters,l}),M(e=>e.slice(0,t)),O(()=>{if(0===t)return i;let{formData:e,overriddenAdhocFilterFields:l}=L(C.slice(0,t)),r=eu({},i,e);return l.forEach(t=>eu({},r,{[t]:[...i[t],...e[t]]})),r})},[p,C,i,L]),V=R.map((e,t)=>{let l=t<R.length-1,i=(0,v.A)(e.groupby).length>0,r=(0,v.A)(e.filters).length>0;if(!i&&!r)return;let n=(0,v.A)(e.groupby).map(e=>e.verbose_name||e.column_name).join(", "),a=r?`(${(0,v.A)(e.filters).map(e=>{var t;return null!=(t=e.formattedVal)?t:String(e.val)}).join(", ")})`:"";return{title:`${n} ${a}`.trim(),onClick:l?()=>j(e,t):void 0}}).filter(e=>void 0!==e),B=(0,c.useMemo)(()=>{let e=eu({},D);_&&F&&(e[F]=N(_));let t=U();return Object.keys(t).forEach(l=>{e=eu({},e,{[l]:[...(0,v.A)(i[l]),...t[l]]})}),e.slice_id=0,delete e.slice_name,delete e.dashboards,e},[D,_,F,U,N,i]);(0,c.useEffect)(()=>{M(e=>!_||e.some(e=>e.column_name===_.column_name)?e:[...e,_])},[_]);let Q=(0,c.useCallback)((e,t)=>{p((0,d.logEvent)(S.gi,{drill_depth:C.length+1,slice_id:i.slice_id})),O(B),w(l=>[...l,eu({},t,{column:e})]),I(l=>{let i=[...l,{groupby:e}];return i[i.length-2].filters=t.filters,i})},[p,C.length,B,i.slice_id]),X=(0,c.useMemo)(()=>({drillBy:{excludedColumns:z,openNewModal:!1}}),[z]),{contextMenu:et,inContextMenu:ei,onContextMenu:em}=((e,t,l,i,r)=>{let n=(0,c.useRef)(null),[a,o]=(0,c.useState)(!1),s=(0,c.useCallback)((...e)=>{o(!1),null==l||l(...e)},[l]),d=(0,c.useCallback)(()=>{o(!1)},[]);return{contextMenu:(0,c.useMemo)(()=>(0,u.Y)(eE,{ref:n,id:e,formData:t,onSelection:s,onClose:d,displayedItems:i,additionalConfig:r}),[r,e,i,t,d,s]),inContextMenu:a,onContextMenu:(e,t,l)=>{var i;null==(i=n.current)||i.open(e,t,l),o(!0)}}})(0,D,Q,e$.DrillBy,X),ev=(0,a.d4)(e=>{let t=Object.values(e.dashboardLayout.present).find(e=>{var t;return(null==(t=e.meta)?void 0:t.chartId)===i.slice_id});return(null==t?void 0:t.meta.sliceNameOverride)||(null==t?void 0:t.meta.sliceName)});(0,c.useEffect)(()=>{if(B){let[e]=(0,el.Mp)(B);x(!0),E(void 0),(0,s.getChartDataRequest)({formData:B}).then(({response:t,json:l})=>(0,s.handleChartDataResponse)(t,l,e)).then(e=>{E(e)}).catch(()=>{f((0,h.t)("Failed to load chart data."))}).finally(()=>{x(!1)})}},[f,B]);let{metadataBar:eg}=(0,Z.M)({dataset:t});return(0,u.Y)(W.aF,{css:(0,q.AH)`
        .ant-modal-footer {
          border-top: none;
        }
      `,show:!0,onHide:null!=r?r:()=>null,name:(0,h.t)("Drill by: %s",ev),title:(0,h.t)("Drill by: %s",ev),footer:(0,u.Y)(ep,{formData:B}),responsive:!0,resizable:!0,resizableConfig:{minHeight:128*m.sizeUnit,minWidth:128*m.sizeUnit,defaultSize:{width:"auto",height:"80vh"}},draggable:!0,destroyOnHidden:!0,maskClosable:!1,children:(0,u.FD)(G.s,{vertical:!0,gap:m.sizeUnit,css:(0,q.AH)`
          height: 100%;
        `,children:[eg,(0,u.Y)(K.Breadcrumb,{css:(0,q.AH)`
            margin-bottom: ${2*m.sizeUnit}px;
          `,items:V,itemRender:(e,t,l,i)=>l.indexOf(e)===l.length-1?(0,u.FD)("span",{"data-test":"drill-by-breadcrumb-item",children:[e.title,i]}):(0,u.Y)("span",{"data-test":"drill-by-breadcrumb-item",role:"button",tabIndex:0,onClick:e.onClick,css:(0,q.AH)`
                  cursor: pointer;
                `,children:e.title})}),A,b&&(0,u.Y)(y.R,{}),!b&&!$&&(0,u.Y)(P.F,{type:"error",message:(0,h.t)("There was an error loading the chart data")}),Y===er.Chart&&$&&(0,u.Y)(en,{dataset:t,formData:B,result:$,onContextMenu:em,inContextMenu:ei}),Y===er.Table&&$&&k,et]})})}var em=l(64751),ev=l(41698),eg=l(92006),ef=l(47036),ey=l(60685),eb=l(73825),ex=l(38221),eS=l.n(ex),eC=l(5373),ew=l(42300),e_=l(79764);function eF(){return(eF=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let eT=e=>{let t,{drillByConfig:l,formData:i,onSelection:r=()=>{},onClick:n=()=>{},onCloseMenu:a=()=>{},openNewModal:o=!0,excludedColumns:s,onDrillBy:d,dataset:p,isLoadingDataset:m=!1}=e,f=function(e,t){if(null==e)return{};var l,i,r={},n=Object.getOwnPropertyNames(e);for(i=0;i<n.length;i++)!(t.indexOf(l=n[i])>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l]);return r}(e,["drillByConfig","formData","onSelection","onClick","onCloseMenu","openNewModal","excludedColumns","onDrillBy","dataset","isLoadingDataset"]),b=(0,g.useTheme)(),[x,S]=(0,c.useState)(""),[C,w]=(0,c.useState)(""),[_,F]=(0,c.useState)(!1),T=(0,c.useRef)(null),A=(0,c.useRef)(null),Y=(0,c.useMemo)(()=>p?(0,v.A)(p.drillable_columns):[],[p]),$=Y.length>10,E=(0,c.useCallback)((e,t)=>{n(e),r(t,l),o&&d&&p&&d(t,p),F(!1),a()},[l,n,r,o,d,p,a]);(0,c.useEffect)(()=>{let e;return _?e=setTimeout(()=>{var e,t;null==(t=T.current)||null==(e=t.input)||e.focus({preventScroll:!0})},100):(S(""),w("")),()=>{e&&clearTimeout(e)}},[_]);let k=null==l?void 0:l.groupbyFieldName,D=(0,c.useMemo)(()=>{var e;return null==(e=(0,M.A)().get(i.viz_type))?void 0:e.behaviors.find(e=>e===O.nS.DrillBy)},[i.viz_type]),z=(0,c.useMemo)(()=>eS()(e=>{w(e)},ef.Y.FAST_DEBOUNCE),[]),R=(0,c.useMemo)(()=>Y.filter(e=>!((null==s?void 0:s.map(e=>e.column_name))||[]).includes(e.column_name)).filter(e=>(e.verbose_name||e.column_name).toLowerCase().includes(C.toLowerCase())),[Y,C,s]);if(D?k||(t=(0,h.t)("Drill by is not available for this data point")):t=(0,h.t)("Drill by is not yet supported for this chart type"),!0===i.matrixify_enable&&(void 0!==i.matrixify_mode_rows&&"disabled"!==i.matrixify_mode_rows||void 0!==i.matrixify_mode_columns&&"disabled"!==i.matrixify_mode_columns))return null;let I=!D||!k,N=(0,u.FD)("div",{role:"menu",tabIndex:0,"data-test":"drill-by-submenu",css:(0,q.AH)`
        width: 220px;
        max-width: 220px;
        .ant-input-affix-wrapper {
          margin-bottom: ${2*b.sizeUnit}px;
        }
      `,onClick:e=>e.stopPropagation(),children:[$&&(0,u.Y)(K.Input,{ref:T,prefix:(0,u.Y)(ey.F.SearchOutlined,{iconSize:"l",iconColor:b.colorIcon}),onChange:e=>{var t;e.stopPropagation(),S(t=e.target.value),z(t)},placeholder:(0,h.t)("Search columns"),onClick:e=>{e.nativeEvent.stopImmediatePropagation()},allowClear:!0,css:(0,q.AH)`
            width: 100%;
            box-shadow: none;
          `,value:x}),m?(0,u.Y)("div",{css:(0,q.AH)`
            padding: ${3*b.sizeUnit}px 0;
          `,children:(0,u.Y)(y.R,{position:"inline-centered"})}):R.length?(0,u.Y)(eC.Y1,{width:"100%",height:200,itemSize:35,itemCount:R.length,itemData:{columns:R},overscanCount:20,children:({index:e,data:t,style:l})=>{let{columns:i}=t,r=i[e];return(0,u.Y)(e_.Gn,{tooltipText:r.verbose_name||r.column_name,onClick:e=>E(e,r),style:l,children:r.verbose_name||r.column_name})}}):(0,u.Y)("div",{css:(0,q.AH)`
            padding: ${2*b.sizeUnit}px;
            color: ${b.colorTextDisabled};
            text-align: center;
          `,children:(0,h.t)("No columns found")})]}),L=(0,u.FD)("div",{ref:A,role:"button",tabIndex:I?-1:0,css:(0,q.AH)`
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: ${I?"not-allowed":"pointer"};
        color: ${I?b.colorTextDisabled:"inherit"};
        &:hover {
          background: transparent;
        }
      `,onClick:()=>!I&&F(!_),onKeyDown:e=>{I||"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),F(!_))},children:[(0,u.Y)("span",{children:(0,h.t)("Drill by")}),I?(0,u.Y)(ew.C,{title:t}):(0,u.Y)(ey.F.RightOutlined,{iconSize:"s",iconColor:b.colorTextTertiary})]});return I?L:(0,u.Y)(eb.A,eF({content:N,placement:"rightTop",open:_,onOpenChange:F,trigger:["hover","click"],arrow:!1,styles:{root:{paddingLeft:0},body:{padding:2*b.sizeUnit,boxShadow:b.boxShadow,borderRadius:b.borderRadius}}},f,{children:L}))};var eA=l(37128);function eY(){return(eY=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}var e$=((n={})[n.CrossFilter=0]="CrossFilter",n[n.DrillToDetail=1]="DrillToDetail",n[n.DrillBy=2]="DrillBy",n[n.All=3]="All",n);let eE=(0,c.forwardRef)(({id:e,formData:t,onSelection:l,onClose:i,displayedItems:r=3,additionalConfig:n},o)=>{var s,d,p,f,y,b,x,S,C;let w=(0,a.wA)(),_=(0,g.useTheme)(),{canDrillToDetail:F,canDrillBy:A,canDownload:Y}=(0,L.S)(),$=(0,a.d4)(({dashboardInfo:e})=>e.crossFiltersEnabled),E=(0,a.d4)(({dashboardInfo:e})=>e.id),[k,D]=(0,c.useState)([]),[z,R]=(0,c.useState)(!1),H=e=>3===r||(0,v.A)(r).includes(e),[{filters:P,clientX:q,clientY:V},B]=(0,c.useState)({clientX:0,clientY:0}),W=(0,c.useMemo)(()=>{if(!P)return P;let e=null==P?void 0:P.matrixifyContext;if(!e)return P;let t=P.drillBy?eY({},P.drillBy,{filters:[...P.drillBy.filters||[],...e.cellFilters||[]]}):void 0;return eY({},P,{drillBy:t})},[P]),G=(0,c.useMemo)(()=>{let e=null==P?void 0:P.matrixifyContext;return(null==e?void 0:e.cellFormData)||t},[P,t]),[K,Q]=(0,c.useState)(!1),[X,J]=(0,c.useState)(),[Z,ee]=(0,c.useState)(!1),et=(0,c.useCallback)(()=>{R(!1),i()},[i]),el=(0,c.useCallback)(e=>{J(e),ee(!0)},[]),ei=(0,N.a)().get("load.drillby.options"),er=(0,c.useCallback)(()=>{ee(!1)},[]),en=[],ea=(0,m.G7)(m.TO.DrillToDetail)&&F&&H(1),eo=(0,m.G7)(m.TO.DrillBy)&&A&&H(2)&&(!0!==t.matrixify_enable||(void 0===t.matrixify_mode_rows||"disabled"===t.matrixify_mode_rows)&&(void 0===t.matrixify_mode_columns||"disabled"===t.matrixify_mode_columns)),es=(0,em.t_)(t.datasource,E,t,!F&&!A),ed=es.status===T.bk.Loading,eu=(0,c.useMemo)(()=>{if(es.status!==T.bk.Complete)return;if(!eo)return es.result;let e=es.result,l=(0,v.A)(e.columns).filter(e=>{var l,i,r,a;return(!ei||e.groupby)&&!(0,v.A)(t[null!=(l=null==P||null==(i=P.drillBy)?void 0:i.groupbyFieldName)?l:""]).includes(e.column_name)&&e.column_name!==t.x_axis&&(null==(r=(0,v.A)(null==n||null==(a=n.drillBy)?void 0:a.excludedColumns))?void 0:r.every(t=>t.column_name!==e.column_name))});return eY({},e,{drillable_columns:l})},[es.status,es.result,eo,null==W||null==(d=W.drillBy)?void 0:d.groupbyFieldName,t.x_axis,t[null!=(s=null==W||null==(p=W.drillBy)?void 0:p.groupbyFieldName)?s:""],null==n||null==(f=n.drillBy)?void 0:f.excludedColumns,ei]),ec=H(0),ep=null==(b=(0,M.A)().get(t.viz_type))||null==(y=b.behaviors)?void 0:y.includes(O.nS.InteractiveChart),ef=0;ec&&(ef+=1),ea&&(ef+=2),eo&&(ef+=1),0===ef&&(ef=1);let ey=(0,ev.R)(eY({formData:G,filters:null==P?void 0:P.drillToDetail,setFilters:D,isContextMenu:!0,contextMenuY:V,onSelection:l,submenuIndex:ec?2:1,setShowModal:Q,dataset:eu,isLoadingDataset:ed},null==n?void 0:n.drillToDetail));if(ec){let t=!ep||!$||!(null==P?void 0:P.crossFilter),l=null;t?$?ep?(null==P?void 0:P.crossFilter)||(l=(0,u.Y)(u.FK,{children:(0,u.Y)("div",{children:(0,h.t)("You can't apply cross-filter on this data point.")})})):l=(0,u.Y)(u.FK,{children:(0,u.Y)("div",{children:(0,h.t)("This visualization type does not support cross-filtering.")})}):l=(0,u.Y)(u.FK,{children:(0,u.Y)("div",{children:(0,h.t)("Cross-filtering is not enabled for this dashboard.")})}):l=(0,u.FD)(u.FK,{children:[(0,u.Y)("div",{children:(0,h.t)("Cross-filter will be applied to all of the charts that use this dataset.")}),(0,u.Y)("div",{children:(0,h.t)("You can also just click on the chart to apply cross-filter.")})]}),en.push({key:"cross-filtering-menu-item",label:(null==P||null==(x=P.crossFilter)?void 0:x.isCurrentValueSelected)?(0,h.t)("Remove cross-filter"):(0,u.FD)("span",{children:[(0,h.t)("Add cross-filter"),(0,u.Y)(ew.C,{title:l,color:t?void 0:_.colorIcon})]}),disabled:t,onClick:()=>{(null==P?void 0:P.crossFilter)&&w((0,j.Mv)(e,P.crossFilter.dataMask))}},...ef>1?[{key:"divider-1",type:"divider"}]:[])}if(ea&&en.push(...ey),eo){en.length>0&&en.push({key:"divider-drill-by",type:"divider"});let e=null==W||null==(S=W.drillBy)?void 0:S.groupbyFieldName,i=null==(C=(0,M.A)().get(t.viz_type))?void 0:C.behaviors.find(e=>e===O.nS.DrillBy);en.push({key:"drill-by-submenu",disabled:!i||!e,label:(0,u.Y)(eT,eY({drillByConfig:null==W?void 0:W.drillBy,onSelection:l,onCloseMenu:et,formData:t,onDrillBy:el,dataset:eu,isLoadingDataset:ed},(null==n?void 0:n.drillBy)||{}))})}let eb=(0,c.useCallback)((t,l,i)=>{var r;B({clientX:t,clientY:(0,eg.x4)(l,ef),filters:i}),null==(r=document.getElementById(`hidden-span-${e}`))||r.click()},[e,ef]);return(0,c.useImperativeHandle)(o,()=>({open:eb}),[eb]),I.createPortal((0,u.FD)(u.FK,{children:[(0,u.Y)(U.ms,{menu:{items:en.length>0?en:[{key:"no-actions",label:(0,h.t)("No actions"),disabled:!0}],onClick:()=>{R(!1),i()}},dropdownRender:e=>(0,u.Y)("div",{"data-test":"chart-context-menu",children:e}),trigger:["click"],onOpenChange:e=>{R(e),e||i()},open:z,children:(0,u.Y)("span",{id:`hidden-span-${e}`,css:{visibility:"hidden",position:"fixed",top:V,left:q,width:1,height:1}})}),ea&&(0,u.Y)(eA.A,{initialFilters:k,chartId:e,formData:G,showModal:K,onHideModal:()=>{Q(!1)},dataset:eu}),Z&&X&&eu&&(null==W?void 0:W.drillBy)&&(0,u.Y)(eh,{column:X,drillByConfig:null==W?void 0:W.drillBy,formData:t,onHideModal:er,dataset:eu,canDownload:Y})]}),document.body)});function ek(){return(ek=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let eD={},eO=[O.nS.InteractiveChart];class ez extends c.Component{shouldComponentUpdate(e,t){var l,i;if(e.queriesResponse&&["success","rendered"].indexOf(e.chartStatus)>-1&&!(null==(i=e.queriesResponse)||null==(l=i[0])?void 0:l.error)){if(!E()(this.state,t))return!0;this.hasQueryResponseChange=e.queriesResponse!==this.props.queriesResponse,this.hasQueryResponseChange&&(this.mutableQueriesResponse=D()(e.queriesResponse));let l=()=>{let t=e.formData,l=this.props.formData;return!0===t.matrixify_enable&&(void 0!==t.matrixify_mode_rows&&"disabled"!==t.matrixify_mode_rows||void 0!==t.matrixify_mode_columns&&"disabled"!==t.matrixify_mode_columns)&&Object.keys(t).filter(e=>e.startsWith("matrixify_")).some(e=>!E()(t[e],l[e]))},i=e.formData,r=this.props.formData;return this.hasQueryResponseChange||!E()(e.datasource,this.props.datasource)||e.annotationData!==this.props.annotationData||e.ownState!==this.props.ownState||e.filterState!==this.props.filterState||e.height!==this.props.height||e.width!==this.props.width||!0===e.triggerRender||e.labelsColor!==this.props.labelsColor||e.labelsColorMap!==this.props.labelsColorMap||i.color_scheme!==r.color_scheme||i.stack!==r.stack||i.subcategories!==r.subcategories||e.cacheBusterProp!==this.props.cacheBusterProp||e.emitCrossFilters!==this.props.emitCrossFilters||e.postTransformProps!==this.props.postTransformProps||l()}return!1}handleAddFilter(e,t,l=!0,i=!0){null==this.props.addFilter||this.props.addFilter.call(this.props,e,t,l,i)}handleRenderSuccess(){let{actions:e,chartStatus:t,chartId:l,vizType:i}=this.props;0>["loading","rendered"].indexOf(t)&&e.chartRenderingSucceeded(l),this.hasQueryResponseChange&&e.logEvent(S.tE,{slice_id:l,viz_type:i,start_offset:this.renderStartTime,ts:new Date().getTime(),duration:S.Vy.getTimestamp()-this.renderStartTime})}handleRenderFailure(e,t){let{actions:l,chartId:i}=this.props;p.A.warn(e),l.chartRenderingFailed(e.toString(),i,t?t.componentStack:null),this.hasQueryResponseChange&&l.logEvent(S.tE,{slice_id:i,has_err:!0,error_details:e.toString(),start_offset:this.renderStartTime,ts:new Date().getTime(),duration:S.Vy.getTimestamp()-this.renderStartTime})}handleSetControlValue(e,t){let{setControlValue:l}=this.props;l&&l(e,t)}handleOnContextMenu(e,t,l){var i;null==(i=this.contextMenuRef.current)||i.open(e,t,l),this.setState({inContextMenu:!0})}handleContextMenuSelected(){this.setState({inContextMenu:!1})}handleContextMenuClosed(){this.setState({inContextMenu:!1})}handleLegendStateChanged(e){this.setState({legendState:e})}onContextMenuFallback(e){this.state.inContextMenu||(e.preventDefault(),this.handleOnContextMenu(e.clientX,e.clientY))}handleLegendScroll(e){this.setState({legendIndex:e})}render(){var e,t,l,i,r,n;let a,{chartAlert:o,chartStatus:s,chartId:d,emitCrossFilters:c}=this.props,p=null==(l=this.props.queriesResponse)?void 0:l.some(e=>null==e?void 0:e.error),m=(null!=(e=null==(i=this.props.queriesResponse)?void 0:i.length)?e:0)>0&&!p;if(o||null===s||"loading"===s&&(!this.props.suppressLoadingSpinner||!m))return null;this.renderStartTime=S.Vy.getTimestamp();let{width:v,height:g,datasource:f,annotationData:y,initialValues:x,ownState:C,filterState:w,chartIsStale:_,formData:T,latestQueryFormData:A,postTransformProps:$}=this.props,E=_&&A?A:T,k=E.viz_type||this.props.vizType,D=Y()(k),I=k===z.Y.Table?`superset-chart-${D}`:D,N=(0,h.t)("No results were returned for this query"),L=this.props.source===F.Explore?(0,h.t)("Make sure that the controls are configured properly and the datasource contains data for the selected time range"):void 0,U="chart.svg";a=(null!=v?v:0)>300&&(null!=g?g:0)>220?(0,u.Y)(b.p,{size:"large",title:N,description:L,image:U}):(0,u.Y)(b.p,{title:N,image:U,size:"small"});let j=(null==(r=(0,M.A)().get(k))?void 0:r.behaviors.find(e=>e===O.nS.DrillToDetail))?{inContextMenu:this.state.inContextMenu}:{},H=((null==C||null==(n=C.searchText)?void 0:n.length)||0)>0,P=(null==C?void 0:C.agGridFilterModel)&&Object.keys(C.agGridFilterModel).length>0,q=!((null==E?void 0:E.server_pagination)&&(H||P));return(0,u.FD)(u.FK,{children:[this.state.showContextMenu&&(0,u.Y)(eE,{ref:this.contextMenuRef,id:d,formData:E,onSelection:this.handleContextMenuSelected,onClose:this.handleContextMenuClosed}),(0,u.Y)("div",{onContextMenu:this.state.showContextMenu?this.onContextMenuFallback:void 0,children:(0,u.Y)(R.A,ek({disableErrorBoundary:!0,id:`chart-id-${d}`,className:I,chartType:k,width:v,height:g,annotationData:y,datasource:f,initialValues:x,formData:E,ownState:C,filterState:w,hooks:this.hooks,behaviors:eO,queriesData:null!=(t=this.mutableQueriesResponse)?t:void 0,onRenderSuccess:this.handleRenderSuccess,onRenderFailure:this.handleRenderFailure,noResults:a,postTransformProps:$,emitCrossFilters:c,legendState:this.state.legendState,enableNoResults:q,legendIndex:this.state.legendIndex,isRefreshing:!!this.props.suppressLoadingSpinner&&"loading"===s},j),`${d}`)})]})}constructor(e){var t,l;super(e);const i=null==(l=(0,M.A)().get(null!=(t=e.formData.viz_type)?t:e.vizType))?void 0:l.suppressContextMenu;this.state={showContextMenu:e.source===F.Dashboard&&!i&&(0,m.G7)(m.TO.DrillToDetail),inContextMenu:!1,legendState:void 0,legendIndex:0},this.hasQueryResponseChange=!1,this.renderStartTime=0,this.contextMenuRef=(0,c.createRef)(),this.handleAddFilter=this.handleAddFilter.bind(this),this.handleRenderSuccess=this.handleRenderSuccess.bind(this),this.handleRenderFailure=this.handleRenderFailure.bind(this),this.handleSetControlValue=this.handleSetControlValue.bind(this),this.handleOnContextMenu=this.handleOnContextMenu.bind(this),this.handleContextMenuSelected=this.handleContextMenuSelected.bind(this),this.handleContextMenuClosed=this.handleContextMenuClosed.bind(this),this.handleLegendStateChanged=this.handleLegendStateChanged.bind(this),this.onContextMenuFallback=this.onContextMenuFallback.bind(this),this.handleLegendScroll=this.handleLegendScroll.bind(this),this.hooks={onAddFilter:this.handleAddFilter,onContextMenu:this.state.showContextMenu?this.handleOnContextMenu:void 0,onError:this.handleRenderFailure,setControlValue:this.handleSetControlValue,onFilterMenuOpen:this.props.onFilterMenuOpen,onFilterMenuClose:this.props.onFilterMenuClose,onLegendStateChanged:this.handleLegendStateChanged,setDataMask:e=>{var t,l;null==(l=this.props.actions)||null==(t=l.updateDataMask)||t.call(l,this.props.chartId,e)},onLegendScroll:this.handleLegendScroll,onChartStateChange:this.props.onChartStateChange},this.mutableQueriesResponse=D()(this.props.queriesResponse)}}ez.defaultProps={addFilter:()=>eD,onFilterMenuOpen:()=>eD,onFilterMenuClose:()=>eD,initialValues:eD,setControlValue:()=>{},triggerRender:!1};var eM=l(8251);function eR(){return(eR=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let eI=e=>{let{chartId:t,error:l}=e,i=function(e,t){if(null==e)return{};var l,i,r={},n=Object.getOwnPropertyNames(e);for(i=0;i<n.length;i++)!(t.indexOf(l=n[i])>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l]);return r}(e,["chartId","error"]),{result:r}=(0,eM.RG)(t),n=l&&eR({},l,{extra:eR({},l.extra,{owners:r})});return(0,u.Y)(x.x6,eR({},i,{error:n,title:"Data error",closable:!1}))};var eN=l(63150);function eL(){return(eL=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let eU={},ej=(0,h.t)("The dataset associated with this chart no longer exists"),eH=g.styled.div`
  min-height: ${e=>e.height}px;
  position: relative;

  .chart-tooltip {
    opacity: 0.75;
    font-size: ${({theme:e})=>e.fontSizeSM}px;
  }

  .slice_container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: ${e=>e.height}px;

    .pivot_table tbody tr {
      font-feature-settings: 'tnum' 1;
    }

    .alert {
      margin: ${({theme:e})=>2*e.sizeUnit}px;
    }
  }
`,eP=g.styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80%;
  transform: translate(-50%, -50%);
`,eq=g.styled.div`
  height: ${e=>e.height}px;
  overflow: auto;
`,eV=g.styled.span`
  display: block;
  text-align: center;
  margin: ${({theme:e})=>4*e.sizeUnit}px auto;
  width: fit-content;
  color: ${({theme:e})=>e.colorText};
`;class eB extends c.PureComponent{componentDidMount(){this.props.triggerQuery&&this.runQuery()}componentDidUpdate(){this.props.triggerQuery&&this.runQuery()}shouldRenderChart(){return this.props.isInView||!(0,m.G7)(m.TO.DashboardVirtualization)||(0,_.a)()}runQuery(){(!(0,m.G7)(m.TO.DashboardVirtualizationDeferData)||this.shouldRenderChart())&&this.props.actions.postChartFormData(this.props.formData,!!(this.props.force||(0,w.P3)(C.vX.force)),this.props.timeout,this.props.chartId,this.props.dashboardId,this.props.ownState)}handleRenderContainerFailure(e,t){let{actions:l,chartId:i}=this.props;p.A.warn(e),l.chartRenderingFailed(e.toString(),i,t?t.componentStack:null),l.logEvent(S.tE,{slice_id:i,has_err:!0,error_details:e.toString(),start_offset:this.renderStartTime,ts:new Date().getTime(),duration:S.Vy.getTimestamp()-this.renderStartTime})}renderErrorMessage(e){var t;let{chartId:l,chartAlert:i,chartStackTrace:r,datasource:n,dashboardId:a,height:o,datasetsStatus:s}=this.props,d=null==e||null==(t=e.errors)?void 0:t[0],c=i||(null==e?void 0:e.message);return d||void 0===i||i===ej||n!==f.As||s===T.bk.Error?(0,u.Y)(eI,{chartId:l,error:d,subtitle:c,link:e?e.link:void 0,source:a?F.Dashboard:F.Explore,stackTrace:r},l):(0,u.Y)(eH,{"data-ui-anchor":"chart",className:"chart-container","data-test":"chart-container",height:o,children:(0,u.Y)(y.R,{size:this.props.dashboardId?"s":"m",muted:!!this.props.dashboardId})},l)}renderSpinner(e){let t=e?(0,h.t)("Waiting on %s",e):(0,h.t)("Waiting on database...");return(0,u.FD)(eP,{children:[(0,u.Y)(y.R,{position:"inline-centered",size:this.props.dashboardId?"s":"m",muted:!!this.props.dashboardId}),(0,u.Y)(eV,{children:t})]})}renderChartContainer(){return(0,u.Y)("div",{className:"slice_container","data-test":"slice-container",children:this.shouldRenderChart()?(0,u.Y)(ez,eL({},this.props,{source:this.props.dashboardId?F.Dashboard:F.Explore,"data-test":this.props.vizType})):(0,u.Y)(y.R,{size:this.props.dashboardId?"s":"m",muted:!!this.props.dashboardId})})}render(){var e;let{height:t,chartAlert:l,chartStatus:i,datasource:r,errorMessage:n,chartIsStale:a,queriesResponse:o=[],width:s}=this.props,d=null==r||null==(e=r.database)?void 0:e.name,c="loading"===i,p=c&&!this.props.suppressLoadingSpinner;return"failed"===i?(0,u.Y)(eq,{height:t,children:null==o?void 0:o.map(e=>this.renderErrorMessage(e))}):n&&0===(0,v.A)(o).length?(0,u.Y)(b.p,{size:"large",title:(0,h.t)("Add required control values to preview chart"),description:(0,eN.w)(!0),image:"chart.svg"}):c||l||n||!a||0!==(0,v.A)(o).length?(0,u.Y)(x.tH,{onError:this.handleRenderContainerFailure,showMessage:!1,children:(0,u.Y)(eH,{"data-ui-anchor":"chart",className:"chart-container","data-test":"chart-container",height:t,width:s,children:p?this.renderSpinner(d):this.renderChartContainer()})}):(0,u.Y)(b.p,{size:"large",title:(0,h.t)("Your chart is ready to go!"),description:(0,u.FD)("span",{children:[(0,h.t)('Click on "Create chart" button in the control panel on the left to preview a visualization or')," ",(0,u.Y)("span",{role:"button",tabIndex:0,onClick:this.props.onQuery,children:(0,h.t)("click here")}),"."]}),image:"chart.svg"})}constructor(e){super(e),this.handleRenderContainerFailure=this.handleRenderContainerFailure.bind(this)}}function eW(){return(eW=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}eB.defaultProps={addFilter:()=>eU,onFilterMenuOpen:()=>eU,onFilterMenuClose:()=>eU,initialValues:eU,setControlValue:()=>eU,triggerRender:!1,dashboardId:void 0,chartStackTrace:void 0,force:!1,isInView:!0};let eG=(0,a.Ng)(null,function(e){return{actions:(0,o.zH)(eW({},s,{updateDataMask:j.Mv,logEvent:d.logEvent}),e)}})(eB)},42300(e,t,l){l.d(t,{C:()=>o});var i=l(2445),r=l(17437),n=l(60685),a=l(8563);let o=({title:e,color:t})=>(0,i.Y)(a.m,{title:e,placement:"top",children:(0,i.Y)(n.F.InfoCircleOutlined,{"data-test":"tooltip-trigger",css:e=>(0,r.AH)`
        color: ${t||e.colorTextLabel};
        margin-left: ${2*e.sizeUnit}px;
        &.anticon {
          font-size: unset;
          .anticon {
            line-height: unset;
            vertical-align: unset;
          }
        }
      `})})},37128(e,t,l){l.d(t,{A:()=>B});var i,r=l(2445),n=l(24002),a=l(61574),o=l(27124),s=l(85614),d=l(17437),u=l(29138),c=l(56030),p=l(61225),h=l(59554),m=l(64163),v=l(12097),g=l(25365),f=l(63021),y=l(98250),b=l(47036);let x=function({value:e}){return(0,r.Y)("span",{children:e?b.Y.BOOL_TRUE_DISPLAY:b.Y.BOOL_FALSE_DISPLAY})},S=s.styled.span`
  color: ${({theme:e})=>e.colorTextSecondary};
`,C=function(){return(0,r.Y)(S,{children:b.Y.NULL_DISPLAY})};var w=l(10531),_=l(50267);let F=function({format:e=w.A.DATABASE_DATETIME,value:t}){return t?(0,r.Y)("span",{children:(0,_.mo)(e).format(t)}):(0,r.Y)(C,{})};var T=l(10020),A=l(97020),Y=l(61581),$=l(20422),E=l(73825),k=l(891),D=l(60685);let O=function(e){let{headerTitle:t,groupTitle:l,groupOptions:i,value:a,onChange:o}=e,u=(0,s.useTheme)(),[c,p]=(0,n.useState)(!1);return(0,r.FD)("div",{css:(0,d.AH)`
        display: flex;
        align-items: center;
      `,children:[(0,r.Y)(E.A,{trigger:"click",open:c,content:(0,r.FD)("div",{children:[(0,r.Y)("div",{css:(0,d.AH)`
                font-weight: ${u.fontWeightStrong};
                margin-bottom: ${u.sizeUnit}px;
              `,children:l}),(0,r.Y)(k.s.GroupWrapper,{spaceConfig:{direction:"vertical",size:4,wrap:!1,align:"start"},value:a,onChange:e=>{o(e.target.value),p(!1)},options:i})]}),placement:"bottomLeft",arrow:{pointAtCenter:!0},children:(0,r.Y)(D.F.SettingOutlined,{iconSize:"m",iconColor:u.colorIcon,css:(0,d.AH)`
            margin-top: ${.75*u.sizeUnit}px;
            margin-right: ${u.sizeUnit}px;
          `,onClick:()=>p(!0)})}),t]})};var z=l(5379),M=l(83881),R=l(73503),I=l(96252);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}function L({filters:e,setFilters:t,totalCount:l,loading:i,onReload:a}){let u=(0,s.useTheme)(),c=(0,n.useMemo)(()=>Object.assign({},...e.map(e=>({[(0,R.q0)(e.col)?e.col.label:e.col]:e}))),[e]),p=(0,n.useCallback)(e=>{let l=N({},c);delete l[e],t(Object.values(l))},[c,t]),h=(0,n.useMemo)(()=>Object.entries(c).map(([e,{val:t,formattedVal:l}])=>({colName:e,val:null!=l?l:t})).sort((e,t)=>e.colName.localeCompare(t.colName)),[c]);return(0,r.FD)("div",{css:(0,d.AH)`
        display: flex;
        justify-content: space-between;
        padding: ${u.sizeUnit/2}px 0;
        margin-bottom: ${2*u.sizeUnit}px;
      `,children:[(0,r.Y)("div",{css:(0,d.AH)`
          display: flex;
          flex-wrap: wrap;
        `,children:h.map(({colName:e,val:t},l)=>(0,r.FD)(M.v,{editable:!0,onDelete:p.bind(null,e),index:l,id:l,name:`${e}=${t}`,"data-test":"filter-col",children:[(0,r.Y)("span",{css:(0,d.AH)`
                margin-right: ${u.sizeUnit}px;
              `,children:e}),(0,r.Y)("strong",{"data-test":"filter-val",children:t})]},e))}),(0,r.FD)("div",{css:(0,d.AH)`
          display: flex;
          align-items: center;
          height: min-content;
        `,children:[(0,r.Y)(I.A,{loading:i&&!l,rowcount:l}),(0,r.Y)(D.F.ReloadOutlined,{iconColor:u.colorIcon,iconSize:"l","aria-label":(0,o.t)("Reload"),role:"button",onClick:a})]})]})}var U=l(17641);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}function H({children:e}){let{ref:t,height:l}=(0,y.uZ)();return(0,r.Y)("div",{ref:t,css:{flex:1},children:(0,n.cloneElement)(e,{height:l})})}var P=((i=P||{})[i.Original=0]="Original",i[i.Formatted=1]="Formatted",i);function q({formData:e,initialFilters:t,dataset:l}){var i;let a=(0,s.useTheme)(),[u,c]=(0,n.useState)(0),h=(0,n.useRef)(u),[m,v]=(0,n.useState)(t),[y,b]=(0,n.useState)(!1),[S,w]=(0,n.useState)(""),[_,E]=(0,n.useState)(new Map),[k,D]=(0,n.useState)({}),M=(0,p.d4)(({dashboardInfo:e})=>e.id),R=(0,p.d4)(e=>e.common.conf.SAMPLES_ROW_LIMIT),[I,N]=(0,n.useMemo)(()=>e.datasource.split("__"),[e.datasource]),{metadataBar:P}=(0,z.M)({dataset:l}),V=(0,n.useMemo)(()=>{let e=_.get(u);return e?(h.current=u,e):_.get(h.current)},[u,_]),B=(0,n.useMemo)(()=>(null==V?void 0:V.colNames.map((e,t)=>{var i,n;return{key:e,dataIndex:e,title:(null==V?void 0:V.colTypes[t])===f.GenericDataType.Temporal?(0,r.Y)(O,{headerTitle:(null==l||null==(i=l.verbose_map)?void 0:i[e])||e,groupTitle:(0,o.t)("Formatting"),groupOptions:[{label:(0,o.t)("Original value"),value:0},{label:(0,o.t)("Formatted value"),value:1}],value:+(0!==k[e]),onChange:t=>D(l=>j({},l,{[e]:parseInt(t,10)}))}):(null==l||null==(n=l.verbose_map)?void 0:n[e])||e,render:l=>!0===l||!1===l?(0,r.Y)(x,{value:l}):null===l?(0,r.Y)(C,{}):(null==V?void 0:V.colTypes[t])===f.GenericDataType.Temporal&&0!==k[e]&&("number"==typeof l||l instanceof Date)?(0,r.Y)(F,{value:l}):String(l),width:150}}))||[],[null==V?void 0:V.colNames,null==V?void 0:V.colTypes,k,null==l?void 0:l.verbose_map]),W=(0,n.useMemo)(()=>(null==V?void 0:V.data.map((e,t)=>null==V?void 0:V.colNames.reduce((t,l)=>j({},t,{[l]:e[l]}),{key:t})))||[],[null==V?void 0:V.colNames,null==V?void 0:V.data]),G=(0,n.useCallback)(()=>{w(""),E(new Map),c(0)},[]);(0,n.useEffect)(()=>{w(""),E(new Map),c(0)},[m]),(0,n.useEffect)(()=>{if(_.has(u)&&[..._.keys()].at(-1)!==u){let e=new Map(_);e.delete(u),E(e.set(u,_.get(u)))}},[u,_]),(0,n.useEffect)(()=>{if(!S&&!y&&!_.has(u)){var t;b(!0);let l=null!=(t=(0,U.o)(e,m))?t:{},i=Math.ceil(R/50);(0,Y.getDatasourceSamples)(N,Number(I),!1,l,50,u+1,M).then(e=>{E(new Map([...[..._.entries()].slice(-i+1),[u,{total:e.total_count,data:e.data,colNames:(0,g.A)(e.colnames),colTypes:(0,g.A)(e.coltypes)}]])),w("")}).catch(e=>{w(`${e.name}: ${e.message}`)}).finally(()=>{b(!1)})}},[R,I,N,m,e,y,u,S,_]);let K=!S&&!_.size,Q=null==(i=e.allow_render_html)||i,X=null;if(S)X=(0,r.Y)("pre",{css:(0,d.AH)`
          margin-top: ${4*a.sizeUnit}px;
        `,children:S});else if(K)X=(0,r.Y)(T.R,{});else if((null==V?void 0:V.total)===0){let e=(0,o.t)("No rows were returned for this dataset");X=(0,r.Y)(A.p,{image:"document.svg",title:e})}else X=(0,r.Y)(H,{children:(0,r.Y)($.Ay,{data:W,columns:B,size:$.QS.Small,defaultPageSize:50,recordCount:null==V?void 0:V.total,usePagination:!0,loading:y,onChange:e=>c(e.current?e.current-1:0),resizable:!0,virtualize:!0,allowHTML:Q})});return(0,r.FD)(r.FK,{children:[!K&&P,!K&&(0,r.Y)(L,{filters:m,setFilters:v,totalCount:null==V?void 0:V.total,loading:y,onReload:G}),X]})}let V=({canExplore:e,closeModal:t,exploreChart:l})=>{let i=(0,s.useTheme)();return(0,r.FD)(r.FK,{children:[!(0,m.n)()&&(0,r.Y)(u.$n,{buttonStyle:"secondary",buttonSize:"small",onClick:l,disabled:!e,tooltip:e?void 0:(0,o.t)("You do not have sufficient permissions to edit the chart"),children:(0,o.t)("Edit chart")}),(0,r.Y)(u.$n,{buttonStyle:"primary",buttonSize:"small",onClick:t,"data-test":"close-drilltodetail-modal",css:(0,d.AH)`
          margin-left: ${2*i.sizeUnit}px;
        `,children:(0,o.t)("Close")})]})};function B({chartId:e,formData:t,initialFilters:l,showModal:i,onHideModal:u,dataset:m}){let g=(0,s.useTheme)(),f=(0,a.W6)(),y=(0,n.useContext)(h.DashboardPageIdContext),{slice_name:b}=(0,p.d4)(t=>{var l,i;return(null==(i=t.sliceEntities)||null==(l=i.slices)?void 0:l[e])||{}}),x=(0,p.d4)(e=>{var t;return(0,v.L)("can_explore","Superset",null==(t=e.user)?void 0:t.roles)}),S=(0,n.useMemo)(()=>`/explore/?dashboard_page_id=${y}&slice_id=${e}`,[e,y]),C=(0,n.useCallback)(()=>{f.push(S)},[S,f]);return(0,r.Y)(c.aF,{show:i,onHide:null!=u?u:()=>null,css:(0,d.AH)`
        .ant-modal-body {
          display: flex;
          flex-direction: column;
        }
      `,name:(0,o.t)("Drill to detail: %s",b),title:(0,o.t)("Drill to detail: %s",b),footer:(0,r.Y)(V,{exploreChart:C,canExplore:x}),responsive:!0,resizable:!0,resizableConfig:{minHeight:128*g.sizeUnit,minWidth:128*g.sizeUnit,defaultSize:{width:"auto",height:"75vh"}},draggable:!0,destroyOnHidden:!0,maskClosable:!1,children:(0,r.Y)(q,{formData:t,initialFilters:l,dataset:m})})}},17641(e,t,l){l.d(t,{o:()=>o});var i=l(90179),r=l.n(i),n=l(25365),a=l(29944);function o(e,t){if(!e)return;let l=(0,a.A)(e),i=r()(l.extras,"having"),o=[...(0,n.A)(l.filters),...(0,n.A)(t).map(e=>r()(e,"formattedVal"))];return{granularity:l.granularity,time_range:l.time_range,filters:o,extras:i}}},79764(e,t,l){l.d(t,{Gn:()=>u,i2:()=>d});var i=l(2445);l(24002);var r=l(4392),n=l(85614),a=l(17437),o=l(68447),s=l(8563);let d=({tooltipText:e,children:t})=>{let[l,n]=(0,r.A)();return(0,i.Y)(s.m,{title:n?e:null,children:(0,i.Y)("div",{ref:l,css:(0,a.AH)`
          max-width: 100%;
          ${r.P};
        `,children:t})})},u=({tooltipText:e,children:t,onClick:l,style:d})=>{let u=(0,n.useTheme)(),[c,p]=(0,r.A)();return(0,i.Y)(o.s,{role:"menuitem",tabIndex:0,onClick:l,align:"center",style:d,css:(0,a.AH)`
        cursor: pointer;
        padding-left: ${u.paddingXS}px;
        &:hover {
          background-color: ${u.colorBgTextHover};
        }
        &:active {
          background-color: ${u.colorBgTextActive};
        }
      `,children:(0,i.Y)(s.m,{title:p?e:null,children:(0,i.Y)("div",{ref:c,css:(0,a.AH)`
            max-width: 100%;
            ${r.P};
          `,children:t})})})}},41698(e,t,l){l.d(t,{R:()=>w});var i=l(2445),r=l(24002),n=l(62193),a=l.n(n),o=l(27124),s=l(63748),d=l(91125),u=l(77092),c=l(79927),p=l(85614),h=l(17437),m=l(61225),v=l(92006),g=l(42300),f=l(79764);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let b=(0,o.t)("Drill to detail"),x=(0,o.t)("Drill to detail by"),S={DATABASE:(0,o.t)("Drill to detail is disabled for this database. Change the database settings to enable it."),NO_AGGREGATIONS:(0,o.t)("Drill to detail is disabled because this chart does not group data by dimension value."),NO_FILTERS:(0,o.t)("Right-click on a dimension value to drill to detail by that value."),NOT_SUPPORTED:(0,o.t)("Drill to detail by value is not yet supported for this chart type.")},C=(0,p.styled)(({children:e,stripHTML:t=!1})=>{let l=t&&"string"==typeof e?(0,c.zF)(e):e;return(0,i.Y)("span",{children:l})})`
  ${({theme:e})=>`
     font-weight: ${e.fontWeightStrong};
     color: ${e.colorPrimary};
   `}
`,w=e=>{let t,l,{formData:n,filters:c=[],isContextMenu:p=!1,contextMenuY:w=0,onSelection:_=()=>null,onClick:F=()=>null,submenuIndex:T=0,setFilters:A,setShowModal:Y,key:$}=e,E=function(e,t){if(null==e)return{};var l,i,r={},n=Object.getOwnPropertyNames(e);for(i=0;i<n.length;i++)!(t.indexOf(l=n[i])>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l]);return r}(e,["formData","filters","isContextMenu","contextMenuY","onSelection","onClick","submenuIndex","setFilters","setShowModal","key"]),k=(0,m.d4)(({datasources:e})=>{var t,l;return null==(l=e[n.datasource])||null==(t=l.database)?void 0:t.disable_drill_to_detail}),D=(0,r.useCallback)((e,t)=>{F(t),_(),A(e),Y(!0)},[F,_,A,Y]),O=(0,r.useMemo)(()=>{var e;return null==(e=(0,s.A)().get(n.viz_type))?void 0:e.behaviors.find(e=>e===u.nS.DrillToDetail)},[n.viz_type]),z=(0,r.useMemo)(()=>{let{metrics:e}=(0,d.A)(n);return a()(e)},[n]),M=(0,r.useMemo)(()=>(0,v.Gs)(w,c.length>1?c.length+1:c.length,T),[w,c.length,T]);k?(t=S.DATABASE,l=S.DATABASE):O?z?(t=S.NO_AGGREGATIONS,l=S.NO_AGGREGATIONS):(null==c?void 0:c.length)||(l=S.NO_FILTERS):l=S.NOT_SUPPORTED;let R=t?y({key:"drill-to-detail-disabled",disabled:!0,label:(0,i.FD)("div",{css:(0,h.AH)`
              white-space: normal;
              max-width: 160px;
            `,children:[b,(0,i.Y)(g.C,{title:t})]})},E):{key:"drill-to-detail",onClick:D.bind(null,[]),label:b},I=p?l?y({key:"drill-to-detail-by-disabled",disabled:!0,label:(0,i.FD)("div",{css:(0,h.AH)`
                white-space: normal;
                max-width: 160px;
              `,children:[x,(0,i.Y)(g.C,{title:l})]})},E):y({key:$||"drill-to-detail-by",label:x,popupOffset:[0,M],popupClassName:"chart-context-submenu",children:[...c.map((e,t)=>({key:`drill-detail-filter-${t}`,onClick:D.bind(null,[e]),label:(0,i.Y)("div",{css:(0,h.AH)`
                    max-width: 200px;
                  `,children:(0,i.Y)(f.i2,{tooltipText:`${x} ${e.formattedVal}`,"aria-label":`${x} ${e.formattedVal}`,children:(0,i.FD)("span",{css:(0,h.AH)`
                        display: inline;
                      `,children:[x," ",(0,i.Y)(C,{stripHTML:!0,children:e.formattedVal})]})})})})),...c.length>1?[{key:"drill-detail-filter-all",onClick:D.bind(null,c),label:(0,i.FD)("div",{"aria-label":`${x} ${(0,o.t)("all")}`,css:(0,h.AH)`
                          max-width: 200px;
                        `,children:[`${x} `,(0,i.Y)(C,{stripHTML:!1,children:(0,o.t)("all")})]})}]:[]]},E):null,N=[R];return I&&N.push(I),N}},92006(e,t,l){l.d(t,{Gs:()=>r,x4:()=>i});let i=(e,t,l=Number.MAX_SAFE_INTEGER,i=0)=>{let r=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),n=Math.min(32*t,l)+32+i;return r-e<n?r-n:e},r=(e,t,l=0,r=Number.MAX_SAFE_INTEGER,n=0)=>{let a=e+4+32*l+4;return i(a,t,r,n)-a}},37292(e,t,l){l.d(t,{A:()=>s});var i=l(2445),r=l(27124),n=l(85614),a=l(17437),o=l(45507);let s=({queriedDttm:e})=>{let t=(0,n.useTheme)();if(!e)return null;let l=o.XV.utc(e);if(!l.isValid())return null;let s=l.local().format("L LTS");return(0,i.FD)("div",{css:(0,a.AH)`
        font-size: ${t.fontSizeSM}px;
        color: ${t.colorTextLabel};
        padding: ${t.sizeUnit/2}px ${t.sizeUnit}px;
        text-align: right;
      `,"data-test":"last-queried-label",children:[(0,r.t)("Last queried at"),": ",s]})}},96252(e,t,l){l.d(t,{A:()=>d});var i=l(2445),r=l(27124),n=l(18349),a=l(8563),o=l(59272);let s=(0,r.t)("The row limit set for the chart was reached. The chart may show partial data.");function d(e){let{rowcount:t=0,limit:l=null,loading:d,label:u}=e,c=l&&t>=l,p=c||0===t&&!d?"error":"default",h=(0,n.gV)()(t),m=(0,i.Y)(o.JU,{type:p,monospace:!0,children:d?(0,r.t)("Loading..."):(0,i.Y)("span",{"data-test":"row-count-label",children:(0,r.tn)("%s row","%s rows",t,h)})});return c?(0,i.Y)(a.m,{id:"tt-rowcount-tooltip",title:(0,i.Y)("span",{children:s}),children:u||m}):u||m}},22919(e,t,l){l.d(t,{A:()=>g});var i=l(2445),r=l(24002),n=l(27124),a=l(73815),o=l(85614),s=l(60685),d=l(29138),u=l(68447),c=l(8563),p=l(76399);function h(e,t,l,i,r,n,a){try{var o=e[n](a),s=o.value}catch(e){l(e);return}o.done?t(s):Promise.resolve(s).then(i,r)}let m=o.styled.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.sizeUnit}px;
  color: ${({theme:e,isError:t,isUnverified:l,isValidating:i})=>l||i?e.colorTextTertiary:t?e.colorErrorText:e.colorSuccessText};
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  flex: 1;
  min-width: 0;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,v=(0,r.forwardRef)(({value:e,onChange:t,showValidation:l=!1,expressionType:o="column",datasourceId:v,datasourceType:g,clause:f,onValidationComplete:y,height:b,width:x,lineNumbers:S,wordWrap:C,keywords:w},_)=>{var F;let[T,A]=(0,r.useState)(!1),[Y,$]=(0,r.useState)(null);(0,r.useEffect)(()=>{(null!==Y||T)&&($(null),A(!1))},[e]);let E=(0,r.useCallback)(()=>{var t;return(t=function*(){if(!e||!v||!g){let t={message:e?(0,n.t)("Datasource is required for validation"):(0,n.t)("Expression cannot be empty")};$({isValid:!1,errors:[t]}),null==y||y(!1,[t]);return}A(!0),$(null);try{let t=`/api/v1/datasource/${g}/${v}/validate_expression/`,l=(yield a.A.post({endpoint:t,body:JSON.stringify({expression:e,expression_type:o,clause:f}),headers:{"Content-Type":"application/json"}})).json;l.result&&l.result.length>0?($({isValid:!1,errors:l.result}),null==y||y(!1,l.result)):($({isValid:!0}),null==y||y(!0))}catch(t){console.error("Error validating expression:",t);let e={message:(0,n.t)("Failed to validate expression. Please try again.")};$({isValid:!1,errors:[e]}),null==y||y(!1,[e])}finally{A(!1)}},function(){var e=this,l=arguments;return new Promise(function(i,r){var n=t.apply(e,l);function a(e){h(n,i,r,a,o,"next",e)}function o(e){h(n,i,r,a,o,"throw",e)}a(void 0)})})()},[e,o,v,g,f,y]),k=(0,r.useCallback)(e=>{t(e),null!==Y&&$(null)},[t,Y]);return(0,i.FD)(u.s,{vertical:!0,gap:"middle",children:[(0,i.Y)(p.AE,{ref:_,id:"sql-editor-with-validation",value:e,onChange:k,language:"sql",lineNumbers:S,wordWrap:C,height:b,width:x,keywords:w}),l&&(0,i.FD)(u.s,{align:"center",gap:"small",style:{minHeight:32},children:[(0,i.Y)(c.m,{title:(0,n.t)("Validate your expression"),children:(0,i.Y)(d.$n,{buttonSize:"small",buttonStyle:Y?"secondary":"primary",loading:T,onClick:E,disabled:!e||!v||T,icon:(0,i.Y)(s.F.CaretRightFilled,{}),"aria-label":(0,n.t)("Validate your expression")})}),(0,i.Y)(m,{isError:!!Y&&!Y.isValid,isUnverified:!Y&&!T,isValidating:T,children:T?(0,i.Y)("span",{children:(0,n.t)("Validating...")}):Y?(0,i.Y)(i.FK,{children:Y.isValid?(0,i.FD)(i.FK,{children:[(0,i.Y)(s.F.CheckCircleOutlined,{}),(0,i.Y)("span",{children:(0,n.t)("Valid SQL expression")})]}):(0,i.FD)(i.FK,{children:[(0,i.Y)(s.F.WarningOutlined,{}),(0,i.Y)(c.m,{title:(null==(F=Y.errors)?void 0:F.map(e=>e.message).join(`
`))||(0,n.t)("Invalid expression"),placement:"top",children:(0,i.Y)("span",{children:Y.errors&&Y.errors.length>0?Y.errors[0].message:(0,n.t)("Invalid expression")})})]})}):(0,i.FD)(i.FK,{children:[(0,i.Y)(s.F.WarningOutlined,{}),(0,i.Y)("span",{children:(0,n.t)("Unverified")})]})})]})]})});v.displayName="SQLEditorWithValidation";let g=v},34685(e,t,l){l.d(t,{w2:()=>Y,xU:()=>E});var i,r=l(2445),n=l(85614),a=l(17437),o=l(63021),s=l(24002),d=l(65611),u=l.n(d),c=l(22022),p=l(27124),h=l(50267),m=l(10531),v=l(38221),g=l.n(v),f=l(29138),y=l(60685),b=l(47036),x=l(14121),S=l(62388),C=l(25365),w=l(21804);(0,n.styled)("span")`
  color: ${({theme:e})=>e.colorTextTertiary};
`,(0,n.styled)(f.$n)`
  font-size: ${({theme:e})=>e.fontSizeSM}px;

  // needed to override button's first-of-type margin: 0
  && {
    margin: 0 ${({theme:e})=>2*e.sizeUnit}px;
  }

  i {
    padding: 0 ${({theme:e})=>e.sizeUnit}px;
  }
`;let _=({data:e,columns:t})=>(0,r.Y)(x.$r,{text:e&&t?(0,S.L)(e,t):"",wrapped:!1,copyNode:(0,r.Y)(y.F.CopyOutlined,{iconSize:"l","aria-label":(0,p.t)("Copy"),role:"button",css:(0,a.AH)`
          &.anticon > * {
            line-height: 0;
          }
        `})}),F=({onChangeHandler:e,shouldFocus:t=!1})=>{let l=(0,s.useRef)(null);(0,s.useEffect)(()=>{l.current&&t&&l.current.focus()},[]);let i=(0,n.useTheme)(),o=g()(e,b.Y.SLOW_DEBOUNCE);return(0,r.Y)(c.Input,{prefix:(0,r.Y)(y.F.SearchOutlined,{iconSize:"l"}),placeholder:(0,p.t)("Search"),onChange:e=>{o(e.target.value)},css:(0,a.AH)`
        width: 200px;
        margin-right: ${2*i.sizeUnit}px;
      `,ref:l})};var T=((i=T||{}).Formatted="formatted",i.Original="original",i);n.styled.div`
  display: flex;
  flex-direction: column;

  padding: ${({theme:e})=>`${4*e.sizeUnit}px`};
`,n.styled.span`
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  color: ${({theme:e})=>e.colorText};
  margin-bottom: ${({theme:e})=>2*e.sizeUnit}px;
`,(0,h.mo)(m.A.DATABASE_DATETIME);var A=l(96252);let Y=[{value:100,label:"100 rows"},{value:500,label:"500 rows"},{value:1e3,label:"1k rows"},{value:5e3,label:"5k rows"},{value:1e4,label:"10k rows"}],$=n.styled.div`
  ${({theme:e})=>`
    display: flex;
    align-items: center;
    padding-top: ${2*e.sizeUnit}px;
    padding-bottom: ${2*e.sizeUnit}px;
    justify-content: space-between;

    span {
      flex-shrink: 0;
    }
  `}
`,E=({data:e,datasourceId:t,onInputChange:l,columnNames:i,columnTypes:n,rowcount:d,isLoading:p,canDownload:h,rowLimit:m,rowLimitOptions:v,onRowLimitChange:g})=>{let f,y=(f=(0,w.Gq)(w.Hh.ExploreDataTableOriginalFormattedTimeColumns,{}),void 0===t?[]:(0,C.A)(f[t])),b=u()(i,n).filter(([e,t])=>t===o.GenericDataType.Temporal&&e&&!y.includes(e)).map(([e])=>e).filter(e=>void 0!==e),x=(0,s.useMemo)(()=>(0,S.bE)(e,b),[e,b]);return(0,r.FD)($,{children:[(0,r.Y)(F,{onChangeHandler:l,shouldFocus:!0}),(0,r.FD)("div",{css:(0,a.AH)`
          display: flex;
          align-items: center;
          gap: 8px;
        `,children:[g&&(0,r.Y)(c.Select,{value:m,onChange:g,options:v,size:"small",css:(0,a.AH)`
              min-width: 110px;
            `}),(!g||d<(null!=m?m:1/0))&&(0,r.Y)(A.A,{rowcount:d,loading:p}),h&&(0,r.Y)(_,{data:x,columns:i})]})]})}},36868(e,t,l){l.d(t,{U:()=>h});var i=l(2445),r=l(24002),n=l(85614),a=l(61466),o=l(56902),s=l(62811),d=l(34685);let u=n.styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`,c=n.styled.div`
  flex: 1;
  min-height: 0;
  position: relative;
`,p=n.styled.div`
  position: absolute;
  inset: 0;
`,h=({data:e,colnames:t,coltypes:l,rowcount:n,datasourceId:h,canDownload:m,columnDisplayNames:v,rowLimit:g,rowLimitOptions:f,onRowLimitChange:y})=>{let[b,x]=(0,r.useState)(""),{gridHeight:S,measuredRef:C}=(0,s.x9)(),w=(0,s.ZN)(t,l,e,v),_=(0,s.Bq)(b),F=(0,r.useCallback)(e=>x(e),[]);return(0,i.FD)(u,{children:[(0,i.Y)(d.xU,{data:e,columnNames:t,columnTypes:l,rowcount:n,datasourceId:h,onInputChange:F,isLoading:!1,canDownload:m,rowLimit:g,rowLimitOptions:f,onRowLimitChange:y}),(0,i.Y)(c,{children:(0,i.Y)(p,{ref:C,children:(0,i.Y)(a.d,{data:e,columns:w,height:S,size:o.w.Small,externalFilter:_,showRowNumber:!0})})})]})}},62811(e,t,l){l.d(t,{Bq:()=>p,ZN:()=>c,x9:()=>h});var i=l(2445),r=l(24002),n=l(10531),a=l(50267),o=l(79927),s=l(47036),d=l(63021);let u=(0,a.mo)(n.A.DATABASE_DATETIME);function c(e,t,l,n){return(0,r.useMemo)(()=>e&&(null==l?void 0:l.length)?e.filter(e=>Object.keys(l[0]).includes(e)).map((e,l)=>{var r;let a=null==t?void 0:t[l],c=null!=(r=null==n?void 0:n[e])?r:e;return{label:e,headerName:c,render:({value:e})=>!0===e?s.Y.BOOL_TRUE_DISPLAY:!1===e?s.Y.BOOL_FALSE_DISPLAY:null===e?(0,i.Y)("span",{style:{color:"var(--ant-color-text-tertiary)"},children:s.Y.NULL_DISPLAY}):a===d.GenericDataType.Temporal&&"number"==typeof e?u(e):"string"==typeof e?(0,o.nn)(e):String(e)}}):[],[e,l,t,n])}function p(e){return(0,r.useCallback)(t=>{if(e&&t.data){let l=e.toLowerCase();return Object.values(t.data).some(e=>null!=e&&String(e).toLowerCase().includes(l))}return!0},[e])}function h(e=400){let[t,l]=(0,r.useState)(e),i=(0,r.useRef)(null);return{gridHeight:t,measuredRef:(0,r.useCallback)(e=>{if(i.current&&(i.current.disconnect(),i.current=null),!e)return;let t=new ResizeObserver(e=>{let t=e[0];if(t){let e=Math.floor(t.contentRect.height);e>0&&l(t=>t!==e?e:t)}});t.observe(e),i.current=t},[])}}},46159(e,t,l){l.d(t,{_h:()=>L,ih:()=>A});var i,r=l(2445),n=l(24002),a=l(27124),o=l(51281),s=l(85614),d=l(60685),u=l(89920),c=l(21804),p=((i={}).Results="results",i.Samples="samples",i),h=l(63748),m=l(25365),v=l(68655),g=l(10020),f=l(97020),y=l(61581),b=l(36868),x=l(34685);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let C=s.styled.pre`
  margin-top: ${({theme:e})=>`${4*e.sizeUnit}px`};
`,w=s.styled.div`
  ${()=>`
    display: flex;
    height: 100%;
    flex-direction: column;
    `}
`,_=new WeakMap,F=({isRequest:e,queryFormData:t,queryForce:l,ownState:i,errorMessage:o,setForceQuery:s,isVisible:d,canDownload:u,columnDisplayNames:c})=>{var p;let F=(0,h.A)().get((null==t?void 0:t.viz_type)||(null==t?void 0:t.vizType)),T=Number(null==t?void 0:t.row_limit)||1e4,[A,Y]=(0,n.useState)(1e3),[$,E]=(0,n.useState)([]),[k,D]=(0,n.useState)(!0),[O,z]=(0,n.useState)(""),M=null!=(p=null==F?void 0:F.queryObjectCount)?p:1,R=null==F?void 0:F.dynamicQueryObjectCount,I=(0,n.useCallback)(()=>{},[]),N=Math.min(A,T),L=(0,n.useMemo)(()=>S({},t,{row_limit:N}),[t,N]),U=(0,n.useCallback)(e=>{Y(e),_.delete(L)},[L]);if((0,n.useEffect)(()=>{o||(e&&_.has(L)&&(E((0,m.A)(_.get(L))),z(""),l&&(null==s||s(!1)),D(!1)),e&&!_.has(L)&&(D(!0),(0,y.getChartDataRequest)({formData:L,force:l,resultFormat:"json",resultType:"results",ownState:i}).then(({json:e})=>{E((0,m.A)(e.result)),z(""),_.set(L,e.result),l&&(null==s||s(!1))}).catch(e=>{(0,v.h4)(e).then(({error:e,message:t})=>{z(e||t||(0,a.t)("Sorry, an error occurred"))})}).finally(()=>{D(!1)})))},[L,e]),(0,n.useEffect)(()=>{o&&D(!1)},[o]),k)return Array(M).fill((0,r.Y)(g.R,{}));if(o){let e=(0,a.t)("Run a query to display results");return Array(M).fill((0,r.Y)(f.p,{image:"document.svg",title:e,size:"small"}))}if(O){let e=(0,r.FD)(r.FK,{children:[(0,r.Y)(x.xU,{data:[],columnNames:[],columnTypes:[],rowcount:0,datasourceId:t.datasource,onInputChange:I,isLoading:!1,canDownload:u}),(0,r.Y)(C,{children:O})]});return Array(M).fill(e)}if(0===$.length){let e=(0,a.t)("No results were returned for this query");return Array(M).fill((0,r.Y)(f.p,{image:"document.svg",title:e,size:"small"}))}return(R?$:$.slice(0,M)).map((e,l)=>(0,r.Y)(w,{children:(0,r.Y)(b.U,{data:e.data,colnames:e.colnames,coltypes:e.coltypes,rowcount:e.rowcount,datasourceId:t.datasource,isVisible:d,canDownload:u,columnDisplayNames:c,rowLimit:A,rowLimitOptions:x.w2,onRowLimitChange:U})},l))},T=s.styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .ant-tabs {
    height: 100%;
  }

  .ant-tabs-content {
    height: 100%;
  }

  .ant-tabs-tabpane {
    display: flex;
    flex-direction: column;
  }

  .table-condensed {
    overflow: auto;
  }
`,A=({isRequest:e,queryFormData:t,queryForce:l,ownState:i,errorMessage:n,setForceQuery:o,isVisible:s,dataSize:d=50,canDownload:c,columnDisplayNames:h})=>{let m=F({errorMessage:n,queryFormData:t,queryForce:l,ownState:i,isRequest:e,setForceQuery:o,dataSize:d,isVisible:s,canDownload:c,columnDisplayNames:h});if(1===m.length)return(0,r.Y)(T,{children:m[0]});let v=m.map((e,t)=>({key:0===t?p.Results:`${p.Results} ${t+1}`,label:0===t?(0,a.t)("Results"):(0,a.t)("Results %s",t+1),children:e}));return(0,r.Y)(T,{children:(0,r.Y)(u.Ay,{items:v})})};var Y=l(61466),$=l(56902),E=l(17641),k=l(62811);let D=s.styled.pre`
  margin-top: ${({theme:e})=>`${4*e.sizeUnit}px`};
`,O=s.styled.div`
  flex: 1;
  min-height: 0;
  position: relative;
`,z=s.styled.div`
  position: absolute;
  inset: 0;
`,M=new WeakMap,R=({isRequest:e,datasource:t,queryFormData:l,queryForce:i,setForceQuery:o,isVisible:s,canDownload:d})=>{let[u,c]=(0,n.useState)(""),[p,h]=(0,n.useState)(100),[v,b]=(0,n.useState)([]),[S,C]=(0,n.useState)([]),[w,_]=(0,n.useState)([]),[F,T]=(0,n.useState)(!1),[A,R]=(0,n.useState)(0),[I,N]=(0,n.useState)(""),{gridHeight:L,measuredRef:U}=(0,k.x9)(),j=(0,n.useMemo)(()=>`${t.id}__${t.type}`,[t]),H=(0,n.useCallback)(e=>{h(e),M.delete(l)},[l]);(0,n.useEffect)(()=>{if(e&&i&&M.delete(l),e&&!M.has(l)){var r;T(!0);let e=null!=(r=(0,E.o)(l))?r:{};(0,y.getDatasourceSamples)(t.type,t.id,i,e,p,1).then(e=>{b((0,m.A)(e.data)),C((0,m.A)(e.colnames)),_((0,m.A)(e.coltypes)),R(e.rowcount),N(""),M.set(l,!0),i&&(null==o||o(!1))}).catch(e=>{b([]),C([]),_([]),N(`${e.name}: ${e.message}`)}).finally(()=>{T(!1)})}},[t,l,e,i,p]);let P=(0,k.ZN)(S,w,v),q=(0,k.Bq)(u),V=(0,n.useCallback)(e=>c(e),[]);if(F)return(0,r.Y)(g.R,{});if(I)return(0,r.FD)(r.FK,{children:[(0,r.Y)(x.xU,{data:v,columnNames:S,columnTypes:w,rowcount:A,datasourceId:j,onInputChange:V,isLoading:F,canDownload:d,rowLimit:p,rowLimitOptions:x.w2,onRowLimitChange:H}),(0,r.Y)(D,{children:I})]});if(0===v.length){let e=(0,a.t)("No samples were returned for this dataset");return(0,r.Y)(f.p,{image:"document.svg",title:e})}return(0,r.FD)(r.FK,{children:[(0,r.Y)(x.xU,{data:v,columnNames:S,columnTypes:w,rowcount:A,datasourceId:j,onInputChange:V,isLoading:F,canDownload:d,rowLimit:p,rowLimitOptions:x.w2,onRowLimitChange:H}),(0,r.Y)(O,{children:(0,r.Y)(z,{ref:U,children:(0,r.Y)(Y.d,{data:v,columns:P,height:L,size:$.w.Small,externalFilter:q,showRowNumber:!0})})})]})},I=s.styled.div`
  ${()=>`
    display: flex;
    height: 100%;
    flex-direction: column;
    `}
`,N=s.styled.div`
  ${({theme:e})=>`
    position: relative;
    background-color: ${e.colorBgContainer};
    z-index: 5;
    overflow: hidden;

    .ant-tabs {
      height: 100%;
    }

    .ant-tabs-content-holder {
      height: 100%;
    }

    .ant-tabs-content {
      height: 100%;
    }

    .ant-tabs-tabpane {
      height: 100%;
      position: relative;

      .table-condensed {
        height: 100%;
        overflow: auto;
        margin-bottom: ${4*e.sizeUnit}px;

        .table {
          margin-bottom: ${2*e.sizeUnit}px;
        }
      }
     .pagination-container > ul[role='navigation'] {
        margin-top: 0;
      }
    }
  `}
`,L=({queryFormData:e,datasource:t,queryForce:l,onCollapseChange:i,chartStatus:s,ownState:h,errorMessage:m,setForceQuery:v,canDownload:g})=>{let[f,y]=(0,n.useState)(p.Results),[b,x]=(0,n.useState)({results:!1,samples:!1}),[S,C]=(0,n.useState)(!(0,o.G7)(o.TO.DatapanelClosedByDefault)&&(0,c.Gq)(c.Hh.IsDatapanelOpen,!1));(0,n.useEffect)(()=>{(0,o.G7)(o.TO.DatapanelClosedByDefault)||(0,c.SO)(c.Hh.IsDatapanelOpen,S)},[S]),(0,n.useEffect)(()=>{S||x({results:!1,samples:!1}),S&&f.startsWith(p.Results)&&s&&"loading"!==s&&x({results:!0,samples:!1}),S&&f===p.Samples&&x({results:!1,samples:!0})},[S,f,s]);let w=(0,n.useCallback)(e=>{i(e),C(e)},[i]),_=(0,n.useCallback)((e,t)=>{S?e===f&&(t.preventDefault(),w(!1)):w(!0),y(e)},[f,w,S]),T=(0,n.useMemo)(()=>{let e=S?(0,r.Y)(d.F.UpOutlined,{"aria-label":(0,a.t)("Collapse data panel")}):(0,r.Y)(d.F.DownOutlined,{"aria-label":(0,a.t)("Expand data panel")});return(0,r.Y)("div",{children:S?(0,r.Y)("span",{role:"button",tabIndex:0,onClick:()=>w(!1),children:e}):(0,r.Y)("span",{role:"button",tabIndex:0,onClick:()=>w(!0),children:e})})},[w,S]),A=[...F({errorMessage:m,queryFormData:e,queryForce:l,ownState:h,isRequest:b.results,setForceQuery:v,isVisible:p.Results===f,canDownload:g}).map((e,t)=>({key:0===t?p.Results:`${p.Results} ${t+1}`,label:0===t?(0,a.t)("Results"):(0,a.t)("Results %s",t+1),children:e})),{key:p.Samples,label:(0,a.t)("Samples"),children:(0,r.Y)(I,{children:(0,r.Y)(R,{datasource:t,queryFormData:e,queryForce:l,isRequest:b.samples,setForceQuery:v,isVisible:p.Samples===f,canDownload:g})})}];return(0,r.Y)(N,{"data-test":"some-purposeful-instance",children:(0,r.Y)(u.Ay,{tabBarExtraContent:T,activeKey:S?f:"",onTabClick:_,items:A})})}},7297(e,t,l){l.d(t,{S:()=>r});var i,r=((i={}).Column="column",i.ColumnOption="columnOption",i.AdhocColumnOption="adhocColumn",i.Metric="metric",i.MetricOption="metricOption",i.AdhocMetricOption="adhocMetric",i.FilterOption="filterOption",i)},13717(e,t,l){l.d(t,{A:()=>h});var i=l(2445),r=l(24002),n=l(17437),a=l(27124),o=l(22022),s=l(90617),d=l(14121),u=l(97126),c=l(71671),p=l(60685);let h=({formData:e,addDangerToast:t})=>{let[l,h]=(0,r.useState)("400"),[m,v]=(0,r.useState)("600"),[g,f]=(0,r.useState)(""),[y,b]=(0,r.useState)(""),x=(0,r.useCallback)(e=>{let{value:t,name:l}=e.currentTarget;"width"===l&&v(t),"height"===l&&h(t)},[]),S=(0,r.useCallback)(()=>{f(""),(null==e?void 0:e.datasource)&&(0,c.Kx)(e).then(e=>{(null==e?void 0:e.url)&&(f(e.url),b(""))}).catch(()=>{b((0,a.t)("Error")),null==t||t((0,a.t)("Sorry, something went wrong. Try again later."))})},[t,e]);(0,r.useEffect)(()=>{S()},[]);let C=(0,r.useMemo)(()=>{if(!g)return"";let e=`${g}?${u.vX.standalone.name}=1&height=${l}`;return`<iframe
  width="${m}"
  height="${l}"
  seamless
  frameBorder="0"
  scrolling="no"
  src="${e}"
>
</iframe>`},[l,g,m]),w=y||C||(0,a.t)("Generating link, please wait..");return(0,i.FD)("div",{id:"embed-code-popover","data-test":"embed-code-popover",children:[(0,i.FD)("div",{css:(0,n.AH)`
          display: flex;
          flex-direction: column;
        `,children:[(0,i.Y)(d.$r,{shouldShowText:!1,text:C,copyNode:(0,i.Y)("span",{role:"button","aria-label":(0,a.t)("Copy to clipboard"),children:(0,i.Y)(p.F.CopyOutlined,{})})}),(0,i.Y)(o.Input.TextArea,{"data-test":"embed-code-textarea",name:"embedCode",disabled:!C,value:w,rows:4,readOnly:!0,css:e=>(0,n.AH)`
            resize: vertical;
            margin-top: ${2*e.sizeUnit}px;
            padding: ${2*e.sizeUnit}px;
            font-size: ${e.fontSizeSM}px;
            border-radius: 4px;
            background-color: ${e.colorBgElevated};
          `})]}),(0,i.FD)(o.Space,{direction:"horizontal",css:e=>(0,n.AH)`
          margin-top: ${e.margin}px;
        `,children:[(0,i.FD)("div",{children:[(0,i.Y)(s.o.Text,{type:"secondary",children:(0,a.t)("Chart height")}),(0,i.Y)(o.Input,{type:"number",defaultValue:l,name:"height",onChange:x})]}),(0,i.FD)("div",{children:[(0,i.Y)(s.o.Text,{type:"secondary",children:(0,a.t)("Chart width")}),(0,i.Y)(o.Input,{type:"number",defaultValue:m,name:"width",onChange:x,id:"embed-width"})]})]})]})}},79035(e,t,l){l.d(t,{y:()=>r});var i=l(85614);let r=i.styled.div`
  .edit-popover-resize {
    transform: scaleX(-1);
    float: right;
    margin-top: ${({theme:e})=>4*e.sizeUnit}px;
    margin-right: ${({theme:e})=>-1*e.sizeUnit}px;
    color: ${({theme:e})=>e.colorIcon};
    cursor: nwse-resize;
  }
  .filter-sql-editor {
    border: ${({theme:e})=>e.colorBorder} solid thin;
  }
`},80299(e,t,l){l.d(t,{Ay:()=>s,tb:()=>d});var i=l(78418),r=l(94736),n=l(77366);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let o=[...i.Wy].map(e=>i.nS[e].operation);class s{duplicateWith(e){return new s(a({expressionType:this.expressionType,subject:this.subject,operator:this.operator,operatorId:this.operatorId,comparator:this.comparator,clause:this.clause,sqlExpression:this.sqlExpression,isExtra:this.isExtra,isNew:!1,datasourceWarning:this.datasourceWarning,deck_slices:this.deck_slices,layerFilterScope:this.layerFilterScope,filterOptionName:this.filterOptionName},e))}equals(e){return e.clause===this.clause&&e.expressionType===this.expressionType&&e.sqlExpression===this.sqlExpression&&e.operator===this.operator&&e.operatorId===this.operatorId&&e.comparator===this.comparator&&e.subject===this.subject}isValid(){if(this.expressionType===n.A.Simple){if(this.operator&&i.Sd.map(e=>i.nS[e].operation).indexOf(this.operator)>=0)return!!this.subject;if(this.operator&&this.subject&&this.clause)return Array.isArray(this.comparator)?this.comparator.length>0:null!==this.comparator}return this.expressionType===n.A.Sql&&!!(this.sqlExpression&&this.clause)}getDefaultLabel(){let e=this.translateToSql();return e.length<43?e:`${e.substring(0,40)}...`}getTooltipTitle(){return this.translateToSql()}translateToSql(){return(0,r.e)(this)}constructor(e){if(this.expressionType=e.expressionType||n.A.Simple,this.expressionType===n.A.Simple){var t;this.subject=e.subject,this.operator=null==(t=e.operator)?void 0:t.toUpperCase(),this.operatorId=e.operatorId,this.comparator=e.comparator,e.operatorId&&i.Sd.indexOf(e.operatorId)>=0&&(this.comparator=void 0),this.clause=e.clause||n.v.Where,this.sqlExpression=null}else this.expressionType===n.A.Sql&&(this.sqlExpression="string"==typeof e.sqlExpression?e.sqlExpression:(0,r.e)(e,{useSimple:!0}),this.clause=e.clause,e.operator&&o.indexOf(e.operator)>=0?(this.subject=e.subject,this.operator=e.operator,this.operatorId=e.operatorId):(this.subject=null,this.operator=null),this.comparator=null);this.isExtra=!!e.isExtra,this.isNew=!!e.isNew,this.datasourceWarning=!!e.datasourceWarning,this.deck_slices=null==e?void 0:e.deck_slices,this.layerFilterScope=null==e?void 0:e.layerFilterScope,this.filterOptionName=e.filterOptionName||`filter_${Math.random().toString(36).substring(2,15)}_${Math.random().toString(36).substring(2,15)}`}}function d(e){return"object"==typeof e&&null!==e&&!(e instanceof s)&&("expressionType"in e||"subject"in e||"operator"in e||"sqlExpression"in e||"clause"in e)}},28122(e,t,l){l.d(t,{A:()=>Y});var i=l(2445),r=l(24002),n=l(25365),a=l(73815),o=l(79924),s=l(27124),d=l(98837),u=l(36320),c=l(82828),p=l(78418),h=l(1293),m=l(90809),v=l(60685),g=l(56030),f=l(82698),y=l(7297),b=l(77573);function x({adhocFilter:e,options:t,datasource:l,onFilterEdit:r,onRemoveFilter:n,partitionColumn:a,onMoveLabel:o,onDropLabel:s,index:d,sections:u,operators:c}){let{actualTimeRange:p,title:h}=(0,b.K)(e);return(0,i.Y)(f.A,{sections:u,operators:c,adhocFilter:e,options:t,datasource:l||{},onFilterEdit:r,partitionColumn:null!=a?a:void 0,children:(0,i.Y)(m.Px,{label:null!=p?p:e.getDefaultLabel(),tooltipTitle:null!=h?h:e.getTooltipTitle(),onRemove:()=>n({stopPropagation:()=>{}}),onMoveLabel:o,onDropLabel:s,index:d,type:y.S.FilterOption,withCaret:!0,isExtra:e.isExtra})})}var S=l(80299),C=l(71671),w=l(77366);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let{warning:F}=g.aF;function T(e){return[...e.columns||[],...(0,n.A)(e.selectedMetrics).map(e=>e&&("string"==typeof e?{saved_metric_name:e}:(0,c.jz)(e)?new c.Ay(e):e))].filter(e=>e).reduce((e,t)=>(t.saved_metric_name?e.push(_({},t,{filterOptionName:t.saved_metric_name})):t.column_name?e.push(_({},t,{filterOptionName:`_col_${t.column_name}`})):t instanceof c.Ay&&e.push(_({},t,{filterOptionName:`_adhocmetric_${t.label}`})),e),[]).sort((e,t)=>(e.saved_metric_name||e.column_name||e.label||"").localeCompare(t.saved_metric_name||t.column_name||t.label||""))}class A extends r.Component{componentDidMount(){let{datasource:e}=this.props;if(e&&"table"===e.type){var t;let l=null==(t=e.database)?void 0:t.id,{datasource_name:i,catalog:r,schema:n,is_sqllab_view:s}=e;!s&&l&&i&&n&&a.A.get({endpoint:`/api/v1/database/${l}/table_metadata/extra/${(0,C.zJ)({name:i,catalog:r,schema:n})}`}).then(({json:e})=>{if(e&&e.partitions){let{partitions:t}=e;t&&t.cols&&1===Object.keys(t.cols).length&&this.setState({partitionColumn:t.cols[0]})}}).catch(e=>{o.A.error("fetch extra_table_metadata:",e.statusText)})}}componentDidUpdate(e){this.props.columns!==e.columns&&this.setState({options:T(this.props)}),this.props.value!==e.value&&this.setState({values:(this.props.value||[]).map(e=>(0,S.tb)(e)?new S.Ay(e):e)})}removeFilter(e){let t=[...this.state.values];t.splice(e,1),this.setState(e=>_({},e,{values:t})),null==this.props.onChange||this.props.onChange.call(this.props,t)}onRemoveFilter(e){let{canDelete:t}=this.props,{values:l}=this.state,i=null==t?void 0:t(l[e],l);"string"==typeof i?F({title:(0,s.t)("Warning"),content:i}):this.removeFilter(e)}onNewFilter(e){let t=this.mapOption(e);t&&this.setState(e=>_({},e,{values:[...e.values,t]}),()=>{null==this.props.onChange||this.props.onChange.call(this.props,this.state.values)})}onFilterEdit(e){null==this.props.onChange||this.props.onChange.call(this.props,this.state.values.map(t=>t.filterOptionName===e.filterOptionName?e:t))}onChange(e){let t=(e||[]).map(e=>this.mapOption(e)).filter(e=>null!==e);null==this.props.onChange||this.props.onChange.call(this.props,t)}getMetricExpression(e){var t,l;let i=null==(l=this.props.savedMetrics)?void 0:l.find(t=>t.metric_name===e);return null!=(t=null==i?void 0:i.expression)?t:""}moveLabel(e,t){let{values:l}=this.state,i=[...l];[i[t],i[e]]=[i[e],i[t]],this.setState({values:i})}mapOption(e){return e instanceof S.Ay?e:e.saved_metric_name?new S.Ay({expressionType:w.A.Sql,subject:this.getMetricExpression(e.saved_metric_name),operator:p.nS[p.ux.GreaterThan].operation,comparator:0,clause:w.v.Having}):e.label?new S.Ay({expressionType:w.A.Sql,subject:new c.Ay(e).translateToSql(),operator:p.nS[p.ux.GreaterThan].operation,comparator:0,clause:w.v.Having}):e.column_name?new S.Ay({expressionType:w.A.Simple,subject:e.column_name,operator:p.nS[p.ux.Equals].operation,comparator:"",clause:w.v.Where,isNew:!0}):null}addNewFilterPopoverTrigger(e){var t;return(0,i.Y)(f.A,{operators:this.props.operators,sections:this.props.sections,adhocFilter:new S.Ay({}),datasource:this.props.datasource||{},options:this.state.options,onFilterEdit:this.onNewFilter,partitionColumn:null!=(t=this.state.partitionColumn)?t:void 0,children:e})}render(){return(0,i.FD)("div",{className:"metrics-select","data-test":"adhoc-filter-control",children:[(0,i.Y)(m.B3,{children:(0,i.Y)(u.A,_({},this.props))}),(0,i.Y)(m.p6,{children:[...this.state.values.length>0?this.state.values.map((e,t)=>this.valueRenderer(e,t)):[],this.addNewFilterPopoverTrigger((0,i.FD)(m.JG,{role:"button","data-test":"add-filter-button",children:[(0,i.Y)(v.F.PlusOutlined,{iconSize:"m"}),(0,s.t)("Add filter")]}))]})]})}constructor(e){super(e),this.onRemoveFilter=this.onRemoveFilter.bind(this),this.onNewFilter=this.onNewFilter.bind(this),this.onFilterEdit=this.onFilterEdit.bind(this),this.moveLabel=this.moveLabel.bind(this),this.onChange=this.onChange.bind(this),this.mapOption=this.mapOption.bind(this),this.getMetricExpression=this.getMetricExpression.bind(this),this.removeFilter=this.removeFilter.bind(this);const t=(this.props.value||[]).map(e=>(0,S.tb)(e)?new S.Ay(e):e);this.optionRenderer=e=>(0,i.Y)(h.A,{option:e}),this.valueRenderer=(e,t)=>(0,i.Y)(x,{index:t,adhocFilter:e,onFilterEdit:this.onFilterEdit,options:this.state.options,sections:this.props.sections,operators:this.props.operators,datasource:this.props.datasource,onRemoveFilter:e=>{e.stopPropagation(),this.onRemoveFilter(t)},onMoveLabel:this.moveLabel,onDropLabel:()=>null==this.props.onChange?void 0:this.props.onChange.call(this.props,this.state.values),partitionColumn:this.state.partitionColumn},t),this.state={values:t,options:T(this.props),partitionColumn:null}}}A.defaultProps={name:"",onChange:()=>{},columns:[],savedMetrics:[],selectedMetrics:[]};let Y=(0,d.b)(A)},82698(e,t,l){l.d(t,{A:()=>J});var i,r=l(2445),n=l(24002),a=l(68292),o=l(29138),s=l(60685),d=l(14121),u=l(73815),c=l(27124),p=l(85614),h=l(89920),m=l(8563),v=l(22022),g=l(72255),f=l(51281),y=l(17437),b=l(78418),x=l(1293),S=l(62388),C=l(22823),w=l(25365),_=l(38221),F=l.n(_),T=l(58561),A=l.n(T);let Y={parsedAdvancedDataType:"",advancedDataTypeOperatorList:[],errorMessage:""};var $=l(77573),E=l(90609),k=l(77366);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let O=(0,p.styled)(a.A)`
  .ant-select-selector::after {
    content: ${({labelText:e})=>e||"\\A0"};
    display: inline-block;
    white-space: nowrap;
    color: ${({theme:e})=>e.colorTextSecondary};
    width: max-content;
  }
`,z=e=>{var t,l;let i,o,{onSubjectChange:s,onOperatorChange:d,isOperatorRelevant:h,onComparatorChange:_,onDatePickerChange:T}=(i=(0,E.IM)(),{onSubjectChange:t=>{let l,r=e.options.find(e=>"column_name"in e&&e.column_name===t||"optionName"in e&&e.optionName===t),n="";r&&"column_name"in r?(n=r.column_name,l=k.v.Where):r&&"saved_metric_name"in r?(n=r.saved_metric_name,l=k.v.Having):(null==r?void 0:r.label)&&(n=r.label,l=k.v.Having);let{operator:a,operatorId:s,comparator:d}=e.adhocFilter;a=a&&s&&o(s,n)?b.nS[s].operation:null,(0,g.A)(a)||(a=b.ux.In,s=b.ux.In,d=void 0),(0,C.D)(t,e.datasource)&&(n=t,a=b.ux.TemporalRange,s=b.ux.TemporalRange,d=i),e.onChange(e.adhocFilter.duplicateWith({subject:n,clause:l,operator:a,expressionType:k.A.Simple,operatorId:s,comparator:d}))},onOperatorChange:t=>{let l,i=e.adhocFilter.comparator;l=b.sJ.has(t)?Array.isArray(i)?i:[i].filter(e=>null!=e):Array.isArray(i)?i[0]:i,t&&b.Wy.has(t)?e.onChange(e.adhocFilter.duplicateWith({subject:e.adhocFilter.subject,clause:k.v.Where,operatorId:t,operator:b.nS[t].operation,expressionType:k.A.Sql,datasource:e.datasource})):e.onChange(e.adhocFilter.duplicateWith({operatorId:t,operator:b.nS[t].operation,comparator:l,expressionType:k.A.Simple}))},onComparatorChange:t=>{e.onChange(e.adhocFilter.duplicateWith({comparator:t,expressionType:k.A.Simple}))},isOperatorRelevant:o=(t,l)=>{var i;let r=null==(i=e.datasource.columns)?void 0:i.find(e=>e.column_name===l),n=!!r&&("BOOL"===r.type||"BOOLEAN"===r.type),a=!!r&&("INT"===r.type||"INTEGER"===r.type),o=!!r&&!!r.expression;if(t&&t===b.ux.LatestPartition){let{partitionColumn:t}=e;return t&&l&&l===t}return(!t||t!==b.ux.TemporalRange)&&(t===b.ux.IsTrue||t===b.ux.IsFalse?n||a||o:n?t===b.ux.IsNull||t===b.ux.IsNotNull:e.adhocFilter.clause!==k.v.Having||-1!==b._T.indexOf(t))},clearOperator:()=>{e.onChange(e.adhocFilter.duplicateWith({operatorId:void 0,operator:void 0}))},onDatePickerChange:(t,l)=>{e.onChange(e.adhocFilter.duplicateWith({subject:t,operator:b.ux.TemporalRange,comparator:l,expressionType:k.A.Simple}))}}),[z,M]=(0,n.useState)(e.adhocFilter.comparator),R=(0,n.useRef)(null),[I,N]=(0,n.useState)([]),[L,U]=(0,n.useState)(!1),[j,H]=(0,n.useState)(!1),{advancedDataTypesState:P,subjectAdvancedDataType:q,fetchAdvancedDataTypeValueCallback:V,fetchSubjectAdvancedDataType:B}=(e=>{let[t,l]=(0,n.useState)(Y),[i,r]=(0,n.useState)(),a=(0,n.useCallback)((t,i,r)=>{let n=(0,w.A)(t);r?F()(()=>{let t=A().encode({type:r,values:n}),a=`/api/v1/advanced_data_type/convert?q=${t}`;u.A.get({endpoint:a}).then(({json:t})=>{l({parsedAdvancedDataType:t.result.display_value,advancedDataTypeOperatorList:t.result.valid_filter_operators,errorMessage:t.result.error_message}),e(!t.result.error_message)}).catch(()=>{l({parsedAdvancedDataType:"",advancedDataTypeOperatorList:i.advancedDataTypeOperatorList,errorMessage:(0,c.t)("Failed to retrieve advanced type")}),e(!1)})},600)():l(Y)},[e]);return{advancedDataTypesState:t,subjectAdvancedDataType:i,setAdvancedDataTypesState:l,fetchAdvancedDataTypeValueCallback:a,fetchSubjectAdvancedDataType:(0,n.useCallback)((e,t,l)=>{let i=e.find(e=>"column_name"in e&&e.column_name===t||"optionName"in e&&e.optionName===t);i&&"advanced_data_type"in i?r(i.advanced_data_type):l(!0)},[])}})(e.validHandler),W=(e,t)=>q?h(e,t)&&P.advancedDataTypeOperatorList.includes(e):h(e,t),G=()=>{let e,t=(e=Array.isArray(z)?z.filter(e=>I.includes(e)).length:0,I?I.length-e:0),l=(0,c.t)("%s option(s)",t);return t?l:""},K=e.options,{subject:Q,operator:X,operatorId:J}=e.adhocFilter,Z="string"==typeof Q?Q:Q&&"column_name"in Q?Q.column_name:void 0,ee={ariaLabel:(0,c.t)("Select subject"),value:Z,onChange:e=>{M(void 0),s(e)},notFoundContent:(0,c.t)("No such column found. To filter on a metric, try the Custom SQL tab."),autoFocus:!Q,placeholder:""};ee.placeholder=e.adhocFilter.clause===k.v.Where?(0,c.t)("%s column(s)",K.length):(0,c.t)("To filter on a metric, use Custom SQL tab."),K=e.options.filter(e=>"column_name"in e&&e.column_name);let et="string"==typeof Q?Q:"",el={placeholder:(0,c.t)("%s operator(s)",(null!=(t=e.operators)?t:b.RX).filter(e=>W(e,et)).length),value:J,onChange:d,autoFocus:!!ee.value&&!X,ariaLabel:(0,c.t)("Select operator")},ei=!!ee.value&&!!el.value,er={allowClear:!0,allowNewOptions:!0,ariaLabel:(0,c.t)("Comparator option"),mode:J&&b.sJ.has(J)?"multiple":"single",loading:L,value:z,onChange:_,notFoundContent:(0,c.t)("Type a value here"),disabled:void 0!==J&&b.Sd.includes(J),placeholder:G()},en=null!=z&&""!==z&&(Array.isArray(z)?z.length>0:String(z).length>0)?G():"",ea=(0,$.w)({columnName:"string"==typeof e.adhocFilter.subject?e.adhocFilter.subject:void 0,timeRange:e.adhocFilter.operator===b.ux.TemporalRange?e.adhocFilter.comparator:void 0,datasource:e.datasource,onChange:T});(0,n.useEffect)(()=>{ea||(()=>{let{datasource:t}=e,l=e.adhocFilter.subject,i=e.adhocFilter.clause===k.v.Having;if(l&&t&&t.filter_select&&!i){let e=new AbortController,{signal:i}=e;L&&e.abort(),U(!0),u.A.get({signal:i,endpoint:`/api/v1/datasource/${t.type}/${t.id}/column/${l}/values/`}).then(({json:e})=>{N(e.result.map(e=>({value:e,label:(0,S.ed)(e)}))),U(!1)}).catch(()=>{N([]),U(!1)})}})()},[e.adhocFilter.subject,e.adhocFilter.clause,e.datasource,ea]),(0,n.useEffect)(()=>{(0,f.G7)(f.TO.EnableAdvancedDataTypes)&&B(e.options,e.adhocFilter.subject,e.validHandler)},[e.adhocFilter.subject,e.options,e.validHandler,B]),(0,n.useEffect)(()=>{(0,f.G7)(f.TO.EnableAdvancedDataTypes)&&V(void 0===z?"":"string"==typeof z?z:String(z),P,q)},[z,q,V]),(0,n.useEffect)(()=>{(0,f.G7)(f.TO.EnableAdvancedDataTypes)&&M(e.adhocFilter.comparator)},[e.adhocFilter.comparator]),(0,n.useEffect)(()=>{ei&&!j&&R.current&&(R.current.focus(),H(!0)),ei||H(!1)},[ei,j]);let eo=(0,p.useTheme)(),es=(0,r.Y)(a.A,D({css:{marginTop:4*eo.sizeUnit,marginBottom:4*eo.sizeUnit},"data-test":"select-element",options:K.map(e=>({value:"column_name"in e&&e.column_name||"optionName"in e&&e.optionName||"",key:"id"in e&&e.id||"optionName"in e&&e.optionName||void 0,label:(0,r.Y)(x.A,{option:e})}))},ee)),ed=(0,r.FD)(r.FK,{children:[(0,r.Y)(a.A,D({options:(null!=(l=e.operators)?l:b.RX).filter(e=>W(e,et)).map((e,t)=>({value:e,label:b.nS[e].display,key:e,order:t}))},el)),J&&b.sJ.has(J)||I.length>0?(0,r.Y)(m.m,{title:P.errorMessage||P.parsedAdvancedDataType,children:(0,r.Y)(O,D({css:(0,y.AH)`
              margin-top: ${4*eo.sizeUnit}px;
            `,labelText:en,options:I},er))}):(0,r.FD)(m.m,{title:P.errorMessage||P.parsedAdvancedDataType,children:[(0,r.Y)("div",{css:(0,y.AH)`
              margin-top: ${4*eo.sizeUnit}px;
            `}),(0,r.Y)(v.Input,{"data-test":"adhoc-filter-simple-value",name:"filter-value",ref:R,onChange:e=>{let{value:t}=e.target;M(t),_(t)},value:"string"==typeof z?z:void 0,placeholder:(0,c.t)("Filter value (case sensitive)"),disabled:void 0!==J&&b.Sd.includes(J)})]})]});return(0,r.FD)(r.FK,{children:[es,null!=ea?ea:ed]})};var M=l(60917),R=l(74424),I=l(22919),N=((i={}).COLUMN="column",i.METRIC="metric",i.WHERE="where",i.HAVING="having",i);let L=(0,p.styled)(a.A)`
  ${({theme:e})=>`
    width: ${30*e.sizeUnit}px;
    marginRight: ${e.sizeUnit}px;
  `}
`;function U({adhocFilter:e,onChange:t,options:l,height:i,datasource:a}){let o=(0,n.useRef)(null),s=(0,p.useTheme)();(0,n.useEffect)(()=>{var e;null==(e=o.current)||e.resize()},[e]);let d=(0,n.useMemo)(()=>M.A.concat((0,R.r)(l.filter(e=>"object"==typeof e&&null!==e&&"column_name"in e&&"string"==typeof e.column_name&&"type"in e))),[l]),u=(0,n.useMemo)(()=>Object.values(k.v).map(e=>({label:e,value:e})),[]);return(0,r.FD)("span",{children:[(0,r.FD)("div",{className:"filter-edit-clause-section",children:[(0,r.Y)("div",{children:(0,r.Y)(L,{options:u,ariaLabel:(0,c.t)("Select column"),placeholder:(0,c.t)("choose WHERE or HAVING..."),value:e.clause,onChange:l=>{t(e.duplicateWith({clause:l,expressionType:k.A.Sql}))}})}),(0,r.FD)("span",{className:"filter-edit-clause-info",children:[(0,r.Y)("strong",{children:"WHERE"})," ",(0,c.t)("Filters by columns"),(0,r.Y)("br",{}),(0,r.Y)("strong",{children:"HAVING"})," ",(0,c.t)("Filters by metrics")]})]}),(0,r.Y)("div",{css:(0,y.AH)`
          margin-top: ${4*s.sizeUnit}px;
        `,children:(0,r.Y)(I.A,{ref:o,keywords:d,height:`${i-130}px`,onChange:l=>{t(e.duplicateWith({sqlExpression:l,expressionType:k.A.Sql}))},width:"100%",lineNumbers:!1,value:e.sqlExpression||e.translateToSql(),wordWrap:!0,showValidation:!0,expressionType:"HAVING"===e.clause?N.HAVING:N.WHERE,datasourceId:null==a?void 0:a.id,datasourceType:null==a?void 0:a.type})})]})}var j=l(23805),H=l.n(j);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var l,i,r={},n=Object.getOwnPropertyNames(e);for(i=0;i<n.length;i++)l=n[i],!(t.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l]);return r}let V=p.styled.div`
  .adhoc-filter-edit-tabs > .nav-tabs {
    margin-bottom: ${({theme:e})=>2*e.sizeUnit}px;

    & > li > a {
      padding: ${({theme:e})=>e.sizeUnit}px;
    }
  }

  #filter-edit-popover {
    max-width: none;
  }

  .filter-edit-clause-info {
    font-size: ${({theme:e})=>e.fontSizeXS}px;
  }

  .filter-edit-clause-section {
    display: flex;
    flex-direction: row;
    gap: ${({theme:e})=>5*e.sizeUnit}px;
  }

  .adhoc-filter-simple-column-dropdown {
    margin-top: ${({theme:e})=>5*e.sizeUnit}px;
  }
`,B=p.styled.div`
  margin-top: ${({theme:e})=>2*e.sizeUnit}px;
`,W=p.styled.div`
  margin-top: ${({theme:e})=>2*e.sizeUnit}px;
  margin-bottom: ${({theme:e})=>12*e.sizeUnit}px;
`;class G extends n.Component{componentDidMount(){var e;document.addEventListener("mouseup",this.onMouseUp);let t=null==(e=this.props.adhocFilter)?void 0:e.deck_slices;t&&t.length>0&&this.loadLayerOptions(0,100).then(e=>{var t;this.setState({layerOptions:e.data});let l=null==(t=this.props.adhocFilter)?void 0:t.layerFilterScope;if(l){let t=l.map(t=>e.data.find(e=>e.value===t));this.setState({selectedLayers:t.filter(Boolean)})}})}componentWillUnmount(){document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("mousemove",this.onMouseMove)}onAdhocFilterChange(e){this.setState({adhocFilter:e})}setSimpleTabIsValid(e){this.setState({isSimpleTabValid:e})}onSave(){let e=this.state.adhocFilter.deck_slices;if(!(e&&e.length>0)){this.props.onChange(this.state.adhocFilter),this.props.onClose();return}let t=this.state.selectedLayers.map(e=>H()(e)?e.value:e),l=this.state.adhocFilter.duplicateWith({layerFilterScope:t});this.setState({hasLayerFilterScopeChanged:!1}),this.props.onChange(l),this.props.onClose()}onDragDown(e){this.dragStartX=e.clientX,this.dragStartY=e.clientY,this.dragStartWidth=this.state.width,this.dragStartHeight=this.state.height,document.addEventListener("mousemove",this.onMouseMove)}onMouseMove(e){this.props.onResize(),this.setState({width:Math.max(this.dragStartWidth+(e.clientX-this.dragStartX),b._R),height:Math.max(this.dragStartHeight+(e.clientY-this.dragStartY),b.Z_)})}onMouseUp(){document.removeEventListener("mousemove",this.onMouseMove)}onTabChange(e){this.setState({activeKey:e})}adjustHeight(e){this.setState(t=>({height:t.height+e}))}loadLayerOptions(e,t){let l=A().encode({columns:["id","slice_name","viz_type"],filters:[{col:"viz_type",opr:"sw",value:"deck"}],page:e,page_size:t,order_column:"slice_name",order_direction:"asc"});return u.A.get({endpoint:`/api/v1/chart/?q=${l}`}).then(e=>{var t,l;if(!(null==e||null==(t=e.json)?void 0:t.result))return{data:[{id:null,value:-1,label:"All"}],totalCount:1};let i=(null==(l=this.props.adhocFilter)?void 0:l.deck_slices)||[],r=[{id:null,value:-1,label:"All"},...e.json.result.map(e=>{let t=i.indexOf(e.id);return{id:e.id,value:t>=0?t:e.id,label:e.slice_name,sliceIndex:t}}).filter(e=>-1!==e.sliceIndex).map(e=>{let{sliceIndex:t}=e;return q(e,["sliceIndex"])})];return{data:r,totalCount:r.length}})}onLayerChange(e){let t=e||[];if(e&&0!==e.length){if(e.length>1&&e.some(e=>"object"==typeof e&&-1===e.value||-1===e)){let l=e[e.length-1];t="object"==typeof l&&-1===l.value||-1===l?[{id:null,value:-1,label:"All"}]:e.filter(e=>-1!==e.value)}}else t=[{id:null,value:-1,label:"All"}];this.setState({selectedLayers:t}),this.setState({hasLayerFilterScopeChanged:!0})}render(){let e=this.props,{adhocFilter:t,options:l,onChange:i,onClose:n,onResize:u,datasource:p,partitionColumn:m,theme:v,operators:g,requireSave:f}=e,y=q(e,["adhocFilter","options","onChange","onClose","onResize","datasource","partitionColumn","theme","operators","requireSave"]),{adhocFilter:b,selectedLayers:x,hasLayerFilterScopeChanged:S}=this.state,C=b.isValid(),w=f||!b.equals(t)||S,_=b.deck_slices,F=_&&_.length>0;return(0,r.FD)(V,P({id:"filter-edit-popover"},y,{"data-test":"filter-edit-popover",ref:this.popoverContentRef,children:[(0,r.Y)(h.Ay,{id:"adhoc-filter-edit-tabs",defaultActiveKey:b.expressionType,className:"adhoc-filter-edit-tabs","data-test":"adhoc-filter-edit-tabs",style:{minHeight:this.state.height,width:this.state.width},allowOverflow:!0,onChange:this.onTabChange,items:[{key:k.A.Simple,label:(0,c.t)("Simple"),children:(0,r.Y)(d.tH,{children:(0,r.Y)(z,{operators:g,adhocFilter:this.state.adhocFilter,onChange:this.onAdhocFilterChange,options:l,datasource:p,onHeightChange:this.adjustHeight,partitionColumn:m,popoverRef:this.popoverContentRef.current,validHandler:this.setSimpleTabIsValid})})},{key:k.A.Sql,label:(0,c.t)("Custom SQL"),children:(0,r.Y)(d.tH,{children:(0,r.Y)(U,{adhocFilter:this.state.adhocFilter,onChange:this.onAdhocFilterChange,options:this.props.options,height:this.state.height,datasource:p})})}]}),F&&(0,r.Y)(W,{children:(0,r.Y)(a.A,{options:this.state.layerOptions,onChange:this.onLayerChange,value:x,mode:"multiple"})}),(0,r.FD)(B,{children:[(0,r.Y)(o.$n,{buttonStyle:"secondary",buttonSize:"small",onClick:this.props.onClose,cta:!0,children:(0,c.t)("Close")}),(0,r.Y)(o.$n,{"data-test":"adhoc-filter-edit-popover-save-button",disabled:!C||!this.state.isSimpleTabValid||!w,buttonStyle:"primary",buttonSize:"small",onClick:this.onSave,cta:!0,children:(0,c.t)("Save")}),(0,r.Y)(s.F.ArrowsAltOutlined,{role:"button","aria-label":(0,c.t)("Resize"),tabIndex:0,onMouseDown:this.onDragDown,className:"edit-popover-resize"})]})]}))}constructor(e){var t,l;super(e),this.dragStartX=0,this.dragStartY=0,this.dragStartWidth=0,this.dragStartHeight=0,this.onSave=this.onSave.bind(this),this.onDragDown=this.onDragDown.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onAdhocFilterChange=this.onAdhocFilterChange.bind(this),this.setSimpleTabIsValid=this.setSimpleTabIsValid.bind(this),this.adjustHeight=this.adjustHeight.bind(this),this.onTabChange=this.onTabChange.bind(this),this.loadLayerOptions=this.loadLayerOptions.bind(this),this.onLayerChange=this.onLayerChange.bind(this),this.state={adhocFilter:this.props.adhocFilter,width:b._R,height:b.Z_,activeKey:(null==(l=this.props)||null==(t=l.adhocFilter)?void 0:t.expressionType)||"SIMPLE",isSimpleTabValid:!0,selectedLayers:[{id:null,value:-1,label:"All"}],layerOptions:[],hasLayerFilterScopeChanged:!1},this.popoverContentRef=(0,n.createRef)()}}var K=l(79035),Q=l(79126);class X extends n.PureComponent{onPopoverResize(){this.forceUpdate()}closePopover(){this.togglePopover(!1)}togglePopover(e){this.setState({popoverVisible:e})}render(){let{adhocFilter:e,isControlledComponent:t}=this.props,{visible:l,togglePopover:i,closePopover:n}=t?{visible:this.props.visible,togglePopover:this.props.togglePopover,closePopover:this.props.closePopover}:{visible:this.state.popoverVisible,togglePopover:this.togglePopover,closePopover:this.closePopover},a=(0,r.Y)(K.y,{children:(0,r.Y)(G,{adhocFilter:e,options:this.props.options,datasource:this.props.datasource,partitionColumn:this.props.partitionColumn,onResize:this.onPopoverResize,onClose:null!=n?n:()=>{},sections:this.props.sections,operators:this.props.operators,onChange:this.props.onFilterEdit,requireSave:this.props.requireSave})});return(0,r.Y)(Q.A,{trigger:"click",content:a,defaultOpen:l,open:l,onOpenChange:i,destroyTooltipOnHide:!0,children:this.props.children})}constructor(e){super(e),this.onPopoverResize=this.onPopoverResize.bind(this),this.closePopover=this.closePopover.bind(this),this.togglePopover=this.togglePopover.bind(this),this.state={popoverVisible:!1}}}let J=X},77366(e,t,l){l.d(t,{A:()=>n,v:()=>a});var i,r,n=((i={}).Simple="SIMPLE",i.Sql="SQL",i),a=((r={}).Having="HAVING",r.Where="WHERE",r)},77573(e,t,l){l.d(t,{w:()=>v,K:()=>s});var i=l(24002),r=l(65802),n=l(2426),a=l(78418),o=l(77366);let s=e=>{let[t,l]=(0,i.useState)({});return(0,i.useEffect)(()=>{(e.operator!==a.ux.TemporalRange||e.expressionType!==o.A.Simple)&&l({}),e.operator===a.ux.TemporalRange&&e.comparator===r.WC&&l({actualTimeRange:`${e.subject} (${r.WC})`,title:r.WC}),e.operator===a.ux.TemporalRange&&e.expressionType===o.A.Simple&&e.comparator!==r.WC&&t.title!==e.comparator&&(0,n.x9)(e.comparator,e.subject).then(({value:t,error:i})=>{i?l({actualTimeRange:`${e.subject} (${e.comparator})`,title:i}):l({actualTimeRange:null!=t?t:"",title:e.comparator})})},[e]),t};var d=l(2445),u=l(27124),c=l(19202),p=l(22823),h=l(18827),m=l(36320);let v=({columnName:e,timeRange:t,datasource:l,onChange:i})=>{let r=(0,c.a)().get("filter.dateFilterControl"),n=null!=r?r:h.A;return e&&(0,p.D)(e,l)?(0,d.FD)(d.FK,{children:[(0,d.Y)(m.A,{label:(0,u.t)("Time Range")}),(0,d.Y)(n,{value:t,name:"time_range",onChange:t=>i(null!=e?e:"",t)})]}):void 0}},94736(e,t,l){l.d(t,{e:()=>o});var i=l(79599),r=l(78418),n=l(27664);let a={"==":"=","!=":"<>",">":">","<":"<",">=":">=","<=":"<=",IN:"IN","NOT IN":"NOT IN",LIKE:"LIKE",ILIKE:"ILIKE",REGEX:"REGEX","IS NOT NULL":"IS NOT NULL","IS NULL":"IS NULL","IS TRUE":"IS TRUE","IS FALSE":"IS FALSE","LATEST PARTITION":({datasource:e})=>`= '{{ presto.latest_partition('${e.schema}.${e.datasource_name}') }}'`},o=(e,{useSimple:t}={useSimple:!1})=>{if((0,i.md)(e)||t){let{subject:t,operator:l}=e,i="comparator"in e?e.comparator:void 0,o=l&&l===r.nS[r.ux.LatestPartition].operation?a[l](e):a[l];return(0,n.zJ)(t,o,i)}return(0,i.wF)(e)?e.sqlExpression:""}},82828(e,t,l){l.d(t,{Ay:()=>s,jz:()=>d,tA:()=>n});var i=l(78418);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let n={SIMPLE:"SIMPLE",SQL:"SQL"};function a(e){if(e.sqlExpression&&i.Vw.test(e.sqlExpression)){let t=e.sqlExpression.indexOf(")"),l=e.sqlExpression.substring(0,t).lastIndexOf("(");if(t>0&&l>0)return e.sqlExpression.substring(l+1,t)}return null}function o(e){if(e.sqlExpression&&i.Vw.test(e.sqlExpression)){let t=e.sqlExpression.indexOf("(");if(t>0)return e.sqlExpression.substring(0,t)}return null}class s{getDefaultLabel(){return this.translateToSql({useVerboseName:!0})}translateToSql(e={useVerboseName:!1,transformCountDistinct:!1}){var t,l,r;if(this.expressionType===n.SIMPLE){let r=this.aggregate||"",n=e.useVerboseName&&(null==(t=this.column)?void 0:t.verbose_name)?`(${this.column.verbose_name})`:(null==(l=this.column)?void 0:l.column_name)?`(${this.column.column_name})`:"";return e.transformCountDistinct&&r===i.dq.COUNT_DISTINCT&&/^\(.*\)$/.test(n)?`COUNT(DISTINCT ${n.slice(1,-1)})`:r+n}return this.expressionType===n.SQL&&null!=(r=this.sqlExpression)?r:""}duplicateWith(e){return new s(r({},this,e))}equals(e){return e.label===this.label&&e.expressionType===this.expressionType&&e.sqlExpression===this.sqlExpression&&e.aggregate===this.aggregate&&(e.column&&e.column.column_name)===(this.column&&this.column.column_name)}isValid(){return this.expressionType===n.SIMPLE?!!(this.column&&this.aggregate):this.expressionType===n.SQL&&!!this.sqlExpression}inferSqlExpressionAggregate(){return o(this)}inferSqlExpressionColumn(){return a(this)}constructor(e){var t,l;if(this.expressionType=e.expressionType||n.SIMPLE,this.expressionType===n.SIMPLE){const t=a(e);this.column=null!=(l=e.column)?l:t?{column_name:t}:null,this.aggregate=e.aggregate||o(e),this.sqlExpression=null}else this.expressionType===n.SQL&&(this.sqlExpression=e.sqlExpression,this.column=null,this.aggregate=null);this.datasourceWarning=!!e.datasourceWarning,this.hasCustomLabel=!!(e.hasCustomLabel&&e.label),this.label=this.hasCustomLabel&&null!=(t=e.label)?t:this.getDefaultLabel(),this.optionName=e.optionName||`metric_${Math.random().toString(36).substring(2,15)}_${Math.random().toString(36).substring(2,15)}`}}function d(e){return"object"==typeof e&&null!==e&&!(e instanceof s)&&("expressionType"in e||"column"in e||"aggregate"in e||"sqlExpression"in e||"metric_name"in e)}},1293(e,t,l){l.d(t,{A:()=>n});var i=l(2445),r=l(79001);function n({option:e}){return e.saved_metric_name?(0,i.Y)(r.V,{column:{column_name:e.saved_metric_name,type:"metric"},showType:!0}):e.column_name?(0,i.Y)(r.V,{column:e,showType:!0}):e.label?(0,i.Y)(r.V,{column:{column_name:e.label,type:"metric"},showType:!0}):null}},90809(e,t,l){l.d(t,{B3:()=>C,Bt:()=>b,Gh:()=>x,JG:()=>T,JU:()=>f,Px:()=>Y,XB:()=>A,a2:()=>g,f$:()=>F,p6:()=>w,yJ:()=>v});var i=l(2445),r=l(24002),n=l(30535),a=l(26206),o=l(27124),s=l(85614),d=l(17437),u=l(60685),c=l(8563),p=l(80967),h=l(79001);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let v=s.styled.div`
  margin-bottom: ${({theme:e})=>e.sizeUnit}px;
  :last-child {
    margin-bottom: 0;
  }
`,g=s.styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  height: ${({theme:e})=>6*e.sizeUnit}px;
  background-color: ${({theme:e})=>e.colorBgLayout};
  border-radius: 3px;
  cursor: ${({withCaret:e})=>e?"pointer":"default"};
  :hover {
    background-color: ${({theme:e})=>e.colorPrimaryBgHover};
  }
`,f=s.styled.div`
  ${({theme:e})=>`
    display: flex;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    align-items: center;
    white-space: nowrap;
    padding-left: ${e.sizeUnit}px;
    svg {
      margin-right: ${e.sizeUnit}px;
    }
    .type-label {
      margin-right: ${2*e.sizeUnit}px;
      margin-left: ${e.sizeUnit}px;
      font-weight: ${e.fontWeightNormal};
      width: auto;
    }
    .option-label {
      display: inline;
    }
  `}
`,y=s.styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`,b=s.styled.div`
  height: 100%;
  border-left: solid 1px ${({theme:e})=>e.colorSplit};
  margin-left: auto;
`,x=s.styled.div`
  height: auto;
  width: ${({theme:e})=>6*e.sizeUnit}px;
  border-right: solid 1px ${({theme:e})=>e.colorBorder};
  cursor: pointer;
`,S=(0,s.styled)(p.I)`
  margin: 0 ${({theme:e})=>e.sizeUnit}px;
`,C=s.styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,w=s.styled.div`
  padding: ${({theme:e})=>e.sizeUnit}px;
  border: solid 1px ${({theme:e})=>e.colorSplit};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,_=(0,d.i7)`
  0% {
    right: 100%;
  }
  50% {
    left: 4px;
  }
  90% {
    right: 4px;
  }
  100% {
    left: 100%;
  }
`,F=s.styled.div`
  ${({theme:e,isLoading:t,canDrop:l,isDragging:i,isOver:r})=>`
  position: relative;
  padding: ${e.sizeUnit}px;
  border: ${!t&&i?`dashed 1px ${l?e.colorSplit:e.colorErrorBgHover}`:`solid 1px ${t&&i?e.colorWarningBgHover:e.colorBorder}`};
  border-radius: ${e.borderRadius}px;
  &:before,
  &:after {
    content: ' ';
    position: absolute;
    border-radius: ${e.borderRadius}px;
  }
  &:before {
    display: ${i||t?"block":"none"};
    background-color: ${l?e.colorPrimary:e.colorErrorBgHover};
    z-index: 10;
    opacity: 10%;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
  }
  &:after {
    display: ${t||l&&r?"block":"none"};
    background-color: ${t?e.colorFillTertiary:e.colorPrimary};
    z-index: 11;
    opacity: 35%;
    top: ${-e.sizeUnit}px;
    right: ${-e.sizeUnit}px;
    bottom: ${-e.sizeUnit}px;
    left: ${-e.sizeUnit}px;
    cursor: ${t?"wait":"auto"};
  }
  `}

  &:before {
    ${({theme:e,isLoading:t})=>t&&(0,d.AH)`
        animation: ${_} 2s ease-in infinite;
        background: linear-gradient(currentColor 0 0) 0 100%/0% 3px no-repeat;
        background-size: 100% ${e.sizeUnit/2}px;
        top: auto;
        right: ${e.sizeUnit}px;
        left: ${e.sizeUnit}px;
        bottom: -${e.sizeUnit/2}px;
        height: ${e.sizeUnit/2}px;
      `};
  }
`,T=s.styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({theme:e})=>6*e.sizeUnit}px;
  padding-left: ${({theme:e})=>e.sizeUnit}px;
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  color: ${({theme:e})=>e.colorTextSecondary};
  border: dashed 1px ${({theme:e})=>e.colorSplit};
  border-radius: ${({theme:e})=>e.borderRadius}px;
  cursor: ${({cancelHover:e})=>e?"inherit":"pointer"};

  :hover {
    background-color: ${({cancelHover:e,theme:t})=>e?"inherit":t.colorFillSecondary};
  }

  :active {
    background-color: ${({cancelHover:e,theme:t})=>e?"inherit":t.colorFillTertiary};
  }
  svg {
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,A=s.styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({theme:e})=>4*e.sizeUnit}px;
  width: ${({theme:e})=>4*e.sizeUnit}px;
  padding: 0;
  background-color: ${({theme:e})=>e.colorPrimaryText};
  border: none;
  border-radius: 2px;
  cursor: pointer;

  :disabled {
    cursor: not-allowed;
    background-color: ${({theme:e})=>e.colorBgContainerDisabled};
  }
`,Y=e=>{let t,{label:l,savedMetric:p,adhocMetric:C,onRemove:w,onMoveLabel:_,onDropLabel:F,withCaret:T,isFunction:A,type:Y,index:$,isExtra:E,datasourceWarningMessage:k,tooltipTitle:D,multi:O=!0}=e,z=function(e,t){if(null==e)return{};var l,i,r={},n=Object.getOwnPropertyNames(e);for(i=0;i<n.length;i++)!(t.indexOf(l=n[i])>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l]);return r}(e,["label","savedMetric","adhocMetric","onRemove","onMoveLabel","onDropLabel","withCaret","isFunction","type","index","isExtra","datasourceWarningMessage","tooltipTitle","multi"]),M=(0,s.useTheme)(),R=(0,r.useRef)(null),I=(0,r.useRef)(null),N=null==p?void 0:p.metric_name,[,L]=(0,a.H)({accept:Y,drop(){O&&(null==F||F())},hover(e,t){var l;if(!O||!R.current)return;let{dragIndex:i}=e;if(i===$)return;let r=null==(l=R.current)?void 0:l.getBoundingClientRect(),n=(r.bottom-r.top)/2,a=t.getClientOffset(),o=(null==a?void 0:a.y)?(null==a?void 0:a.y)-r.top:0;i<$&&o<n||i>$&&o>n||(null==_||_(i,$),e.dragIndex=$)}}),[{isDragging:U},j]=(0,n.i)({item:{type:Y,dragIndex:$,value:(null==p?void 0:p.metric_name)?p:C},collect:e=>({isDragging:e.isDragging()})});return j(L(R)),(0,i.Y)(v,{ref:R,children:(0,i.FD)(g,m({withCaret:T,"data-test":"option-label"},z,{css:(0,d.AH)`
        text-align: center;
      `,children:[(0,i.Y)(x,{role:"button","data-test":"remove-control-button",onClick:w,children:(0,i.Y)(u.F.CloseOutlined,{iconSize:"m",iconColor:M.colorIcon,css:(0,d.AH)`
            vertical-align: sub;
          `})}),(0,i.FD)(f,{"data-test":"control-label",children:[A&&(0,i.Y)(u.F.FunctionOutlined,{iconSize:"m"}),(t=!U&&"string"==typeof l&&D&&l&&D!==l||!U&&I&&I.current&&I.current.scrollWidth>I.current.clientWidth,p&&N?(0,i.Y)(h.b,{metric:p,labelRef:I,shouldShowTooltip:!U}):t?(0,i.Y)(c.m,{title:D||l,children:(0,i.Y)(y,{ref:I,children:l})}):(0,i.Y)(y,{ref:I,children:l}))]}),(!!k||E)&&(0,i.Y)(S,{type:"warning",placement:"top",tooltip:k||(0,o.t)(`
                This filter was inherited from the dashboard's context.
                It won't be saved when saving the chart.
              `)}),T&&(0,i.Y)(b,{children:(0,i.Y)(u.F.RightOutlined,{iconSize:"m",css:(0,d.AH)`
              margin: ${M.sizeUnit}px;
            `,iconColor:M.colorIcon})})]}))})}},40924(e,t,l){l.d(t,{A:()=>F});var i=l(2445),r=l(24002),n=l(61225),a=l(58561),o=l.n(a),s=l(27124),d=l(73815),u=l(85614),c=l(22022),p=l(60685),h=l(29138),m=l(79592),v=l(14121),g=l(12097),f=l(22389),y=l(74469),b=l(61574);function x(e,t,l,i,r,n,a){try{var o=e[n](a),s=o.value}catch(e){l(e);return}o.done?t(s):Promise.resolve(s).then(i,r)}let S=u.styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`,C=(0,u.styled)(y.Ay)`
  flex: 1;
`,w=u.styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,_={keys:["none"],columns:["database.backend"]},F=e=>{var t;let{sql:l,language:a="sql",datasource:F}=e,T=(0,u.useTheme)(),A=null==F?void 0:F.split("__")[0],Y=(0,n.d4)(e=>{var t,l,i;return null==(i=e.explore)||null==(l=i.datasource)||null==(t=l.database)?void 0:t.backend}),[$,E]=(0,r.useState)(),[k,D]=(0,r.useState)(!0),O=(0,b.W6)(),z=null!=(t=k?$:l)?t:l,M=(0,n.d4)(e=>{var t;return(0,g.L)("menu_access","SQL Lab",null==(t=e.user)?void 0:t.roles)});(0,r.useEffect)(()=>{(0,y.Fq)([a])},[a]);let R=(0,r.useCallback)(()=>{var e;return(e=function*(){if($)return void D(e=>!e);try{let e=Y;if(!e){let t=o().encode(_),{backend:l}=(yield d.A.get({endpoint:`/api/v1/dataset/${A}?q=${t}`})).json.result.database;e=l}let t=yield d.A.post({endpoint:"/api/v1/sqllab/format_sql/",body:JSON.stringify({sql:l,engine:e}),headers:{"Content-Type":"application/json"}});E(t.json.result),D(!0)}catch(e){D(!1)}},function(){var t=this,l=arguments;return new Promise(function(i,r){var n=e.apply(t,l);function a(e){x(n,i,r,a,o,"next",e)}function o(e){x(n,i,r,a,o,"throw",e)}a(void 0)})})()},[l,A,$]),I=(0,r.useCallback)(e=>{e.metaKey||e.ctrlKey?(e.preventDefault(),window.open((0,f.G)(`/sqllab?datasourceKey=${F}&sql=${encodeURIComponent(z)}`),"_blank")):O.push({pathname:"/sqllab",state:{requestedQuery:{datasourceKey:F,sql:z}}})},[O,F,z]);return(0,r.useEffect)(()=>{R()},[l]),(0,i.Y)(m.Z,{bodyStyle:{padding:4*T.sizeUnit},children:(0,i.FD)(S,{children:[!$&&k?(0,i.Y)(c.Skeleton,{active:!0}):(0,i.Y)(C,{language:a,customStyle:{flex:1,marginBottom:3*T.sizeUnit},children:z}),(0,i.FD)(w,{children:[(0,i.FD)(c.Space,{size:2*T.sizeUnit,children:[(0,i.Y)(v.$r,{text:z,shouldShowText:!1,copyNode:(0,i.Y)(h.$n,{buttonStyle:"secondary",buttonSize:"small",icon:(0,i.Y)(p.F.CopyOutlined,{}),children:(0,s.t)("Copy")})}),M&&(0,i.Y)(h.$n,{buttonStyle:"secondary",buttonSize:"small",onClick:I,children:(0,s.t)("View in SQL Lab")})]}),(0,i.FD)(c.Space,{size:2*T.sizeUnit,align:"center",children:[(0,i.Y)(p.F.ConsoleSqlOutlined,{}),(0,i.Y)(c.Switch,{id:"formatSwitch",checked:k,onChange:R,checkedChildren:(0,s.t)("formatted"),unCheckedChildren:(0,s.t)("original")})]})]})]},l)})}},12861(e,t,l){l.d(t,{A:()=>m});var i=l(2445),r=l(24002),n=l(27124),a=l(25365),o=l(68655),s=l(27243),d=l(85614),u=l(10020),c=l(61581),p=l(40924);let h=d.styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>4*e.sizeUnit}px;
`,m=({latestQueryFormData:e})=>{let[t,l]=(0,r.useState)([]),[d,m]=(0,r.useState)(!1),[v,g]=(0,r.useState)(null);return((0,r.useEffect)(()=>{m(!0),(0,c.getChartDataRequest)({formData:e,resultFormat:"json",resultType:"query"}).then(({json:e})=>{l((0,a.A)(e.result)),m(!1),g(null)}).catch(e=>{(0,o.h4)(e).then(({error:t,message:l})=>{g(t||l||e.statusText||(0,n.t)("Sorry, An error occurred")),m(!1)})})},[JSON.stringify(e)]),d)?(0,i.Y)(u.R,{}):v?(0,i.Y)("pre",{children:v}):(0,i.Y)(h,{children:t.map((t,l)=>(0,i.FD)(r.Fragment,{children:[t.error&&(0,i.Y)(s.F,{type:"error",message:t.error,closable:!1}),t.query&&(0,i.Y)(p.A,{datasource:e.datasource,sql:t.query,language:t.language})]},l))})}},36079(e,t,l){l.d(t,{t3:()=>I,oU:()=>N});var i=l(2445),r=l(24002),n=l(61225),a=l(25819),o=l(13048),s=l(51281),d=l(85614),u=l(17437),c=l(27124),p=l(29138),h=l(22022),m=l(60685),v=l(97887),g=l(63748),f=l(75495),y=l(7070),b=l(97126),x=l(27664),S=l(37664),C=l(71671),w=l(26168),_=l(17182),F=l(98876),T=l(15537),A=l(64922),Y=l(71362),$=l(12861),E=l(13717),k=l(71519);function D(e,t,l,i,r,n,a){try{var o=e[n](a),s=o.value}catch(e){l(e);return}o.done?t(s):Promise.resolve(s).then(i,r)}function O(e){return function(){var t=this,l=arguments;return new Promise(function(i,r){var n=e.apply(t,l);function a(e){D(n,i,r,a,o,"next",e)}function o(e){D(n,i,r,a,o,"throw",e)}a(void 0)})}}function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let M="export_to_csv",R=[o.Y.PivotTable],I=d.styled.div`
  ${({theme:e})=>(0,u.AH)`
    display: flex;
    align-items: center;

    & svg {
      width: ${3*e.sizeUnit}px;
      height: ${3*e.sizeUnit}px;
    }

    & span[role='checkbox'] {
      display: inline-flex;
      margin-right: ${e.sizeUnit}px;
    }
  `}
`;(0,d.styled)(p.$n)`
  ${({theme:e})=>(0,u.AH)`
    width: ${8*e.sizeUnit}px;
    height: ${8*e.sizeUnit}px;
    padding: 0;
    border: 1px solid ${e.colorPrimary};

    &.ant-btn > span.anticon {
      line-height: 0;
      transition: inherit;
    }

    &:hover:not(:focus) > span.anticon {
      color: ${e.colorPrimary};
    }
  `}
`;let N=(e,t,o,p,D,I,N,L,U,...j)=>{var H,P;let q=(0,d.useTheme)(),{addDangerToast:V,addSuccessToast:B}=(0,y.Yf)(),W=(0,n.wA)(),[G,K]=(0,r.useState)(!1),[Q,X]=(0,r.useState)(""),J=(0,a.Q)(Q,300),Z=(0,n.d4)(e=>{var t;return e.explore?null==(t=e.charts)?void 0:t[(0,x.kD)(e.explore)]:void 0}),ee=(0,n.d4)(e=>{var t,l;return(null==(l=e.common)||null==(t=l.conf)?void 0:t.CSV_STREAMING_ROW_THRESHOLD)||b.l8}),et=(0,n.d4)(e=>{var t,l;let i=e.explore?(0,x.kD)(e.explore):void 0;return null!=i?null==(l=e.explore)||null==(t=l.chartStates)?void 0:t[i]:void 0}),[el,ei]=(0,r.useState)(!1),{progress:er,isExporting:en,startExport:ea,cancelExport:eo,resetExport:es,retryExport:ed}=(0,Y.K)({onComplete:()=>{},onError:()=>{V((0,c.t)("Export failed - please try again"))}}),eu=(0,r.useCallback)(()=>{ei(!1),es()},[es]),ec=(0,r.useCallback)(()=>{B((0,c.t)("CSV file downloaded successfully"))},[B]),ep=(0,_.k)({chart:Z,showReportModal:L,setCurrentReportDeleting:U}),{datasource:eh}=e,em=(({chartId:e,dashboards:t=[],searchTerm:l=""})=>{let n=(0,d.useTheme)(),a=(0,r.useMemo)(()=>l?t.filter(e=>e.dashboard_title.toLowerCase().includes(l.toLowerCase())):t,[t,l]),o=e?`?focused_chart=${e}`:"",s=0===t.length,p=l&&0===a.length;return(0,r.useMemo)(()=>{let e=[];return s?e.push({key:"no-dashboards",label:(0,c.t)("None"),disabled:!0}):p?e.push({key:"no-results",label:(0,c.t)("No results found"),disabled:!0}):a.forEach(t=>{e.push({key:String(t.id),label:(0,i.FD)(k.N_,{target:"_blank",rel:"noreferer noopener",to:`/superset/dashboard/${t.id}${o}`,css:(0,u.AH)`
                display: flex;
                flex-direction: row;
                align-items: center;
                width: 200px;
                justify-self: center;
              `,children:[(0,i.Y)("div",{css:(0,u.AH)`
                  white-space: normal;
                  flex: 1;
                `,children:t.dashboard_title}),(0,i.Y)(m.F.Full,{iconSize:"l",css:{marginLeft:2*n.sizeUnit}})]})})}),e},[a,o,s,p,n.sizeUnit])})({chartId:null==o?void 0:o.slice_id,dashboards:N,searchTerm:J}),ev=(null!=(H=null==N?void 0:N.length)?H:0)>10,eg=null==e?void 0:e.viz_type,ef=eg?(0,g.A)().get(eg):void 0,ey=!!(null==ef||null==(P=ef.behaviors)?void 0:P.includes("EXPORT_CURRENT_VIEW")),eb=null==et?void 0:et.state,ex=(0,r.useCallback)(()=>O(function*(){try{let t=(0,c.t)("Superset Chart");if(!(null==e?void 0:e.datasource))throw Error("No datasource available");let l=yield(0,C.Kx)(e,void 0,eb);if(!(null==l?void 0:l.url))throw Error("Failed to generate permalink");let i=encodeURIComponent((0,c.t)("%s%s","Check out this chart: ",l.url));window.location.href=`mailto:?Subject=${t}%20&Body=${i}`}catch(e){V((0,c.t)("Sorry, something went wrong. Try again later."))}})(),[V,e,eb]),eS=(0,r.useCallback)(()=>{var l,i,r,n,a;let s,d;if(!t)return null;let u=(null==e?void 0:e.viz_type)==="table",c=null==Z?void 0:Z.queriesResponse,p=(s=u&&c&&c.length>1&&(null==(r=c[1])||null==(i=r.data)||null==(l=i[0])?void 0:l.rowcount)?c[1].data[0].rowcount:c&&(null==(n=c[0])?void 0:n.sql_rowcount)!=null?c[0].sql_rowcount:c&&(null==(a=c[0])?void 0:a.rowcount)!=null?c[0].rowcount:null==e?void 0:e.row_limit)&&s>=ee;if(p){let t=new Date,l=t.toISOString().slice(0,10),i=t.toISOString().slice(11,19).replace(/:/g,""),r=`_${l}_${i}`,n=((null==o?void 0:o.slice_name)||e.viz_type||"chart").replace(/[^a-zA-Z0-9_-]/g,"_");d=`${n}${r}.csv`}return(0,x.RY)({formData:e,ownState:I,resultType:"full",resultFormat:"csv",onStartStreamingExport:p?e=>{e.url&&(ei(!0),ea(z({},e,{url:e.url,filename:d,expectedRows:s,exportType:e.exportType})))}:null})},[t,e,I,Z,ee,o,ea]),eC=(0,r.useCallback)(()=>t?(0,x.RY)({formData:e,ownState:I,resultType:"post_processed",resultFormat:"csv"}):null,[t,e,I]),ew=(0,r.useCallback)(()=>t?(0,x.RY)({formData:e,ownState:I,resultType:"results",resultFormat:"json"}):null,[t,e,I]),e_=(0,r.useCallback)(()=>t?(0,x.RY)({formData:e,ownState:I,resultType:"results",resultFormat:"xlsx"}):null,[t,e,I]),eF=(0,r.useCallback)(()=>O(function*(){try{if(!(null==e?void 0:e.datasource))throw Error("No datasource available");yield(0,w.A)(()=>O(function*(){let t=yield(0,C.Kx)(e,void 0,eb);if(!(null==t?void 0:t.url))throw Error("Failed to generate permalink");return t.url})()),B((0,c.t)("Copied to clipboard!"))}catch(e){V((0,c.t)("Sorry, something went wrong. Try again later."))}})(),[V,B,e,eb]),eT=(e,t,l)=>{if(!(null==e?void 0:e.length)||!(null==t?void 0:t.length))return;let i=e=>{if(null==e)return"";let t=String(e);return/[",\n]/.test(t)?`"${t.replace(/"/g,'""')}"`:t},r=t.map(e=>{var t,l;return i(null!=(t=null!=(l=e.label)?l:e.key)?t:"")}).join(","),n=e.map(e=>t.map(t=>i(e[t.key])).join(",")).join(`
`),a=new Blob([`${r}
${n}`],{type:"text/csv;charset=utf-8;"}),o=document.createElement("a");o.href=URL.createObjectURL(a),o.download=`${l||"current_view"}.csv`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(o.href)};return[(0,r.useMemo)(()=>{let r=[];o&&r.push({key:"edit_properties",label:(0,c.t)("Edit chart properties"),onClick:()=>{D(),K(!1)}});let n=[];ev&&n.push({key:"dashboard-search",label:(0,i.Y)(h.Input,{allowClear:!0,placeholder:(0,c.t)("Search"),prefix:(0,i.Y)(m.F.SearchOutlined,{iconSize:"l"}),css:(0,u.AH)`
              width: 220px;
              margin: ${2*q.sizeUnit}px ${3*q.sizeUnit}px;
            `,value:Q,onChange:e=>X(e.currentTarget.value),onClick:e=>e.stopPropagation()}),disabled:!0}),em.forEach(e=>{n.push(e)}),r.push({key:"dashboards_added_to",type:"submenu",label:(0,c.t)("On dashboards"),children:n,popupStyle:{maxHeight:"300px",overflow:"auto"}}),r.push({type:"divider"});let a=[];e.viz_type&&R.includes(e.viz_type)?a.push({key:M,label:(0,c.t)("Export to original .CSV"),icon:(0,i.Y)(m.F.FileOutlined,{}),disabled:!t,onClick:()=>{eS(),K(!1),W((0,F.logEvent)(T.xb,{chartId:null==o?void 0:o.slice_id,chartName:null==o?void 0:o.slice_name}))}},{key:"export_to_csv_pivoted",label:(0,c.t)("Export to pivoted .CSV"),icon:(0,i.Y)(m.F.FileOutlined,{}),disabled:!t,onClick:()=>{eC(),K(!1),W((0,F.logEvent)(T.vp,{chartId:null==o?void 0:o.slice_id,chartName:null==o?void 0:o.slice_name}))}},{key:"export_to_pivot_xlsx",label:(0,c.t)("Export to Pivoted Excel"),icon:(0,i.Y)(m.F.FileOutlined,{}),disabled:!t,onClick:()=>{var e;let t=`#chart-id-${null==o?void 0:o.slice_id}`;(0,A.A)(`${t} .pvtTable`,null!=(e=null==o?void 0:o.slice_name)?e:(0,c.t)("pivoted_xlsx")),K(!1),W((0,F.logEvent)(T.k8,{chartId:null==o?void 0:o.slice_id,chartName:null==o?void 0:o.slice_name}))}}):a.push({key:M,label:(0,c.t)("Export to .CSV"),icon:(0,i.Y)(m.F.FileOutlined,{}),disabled:!t,onClick:()=>{eS(),K(!1),W((0,F.logEvent)(T.xb,{chartId:null==o?void 0:o.slice_id,chartName:null==o?void 0:o.slice_name}))}}),a.push({key:"export_to_json",label:(0,c.t)("Export to .JSON"),icon:(0,i.Y)(m.F.FileOutlined,{}),disabled:!t,onClick:()=>{ew(),K(!1),W((0,F.logEvent)(T.v2,{chartId:null==o?void 0:o.slice_id,chartName:null==o?void 0:o.slice_name}))}},{key:"export_all_screenshot",label:(0,c.t)("Export screenshot (jpeg)"),icon:(0,i.Y)(m.F.FileImageOutlined,{}),onClick:e=>{var t;(0,S.A)(".panel-body .chart-container",null!=(t=null==o?void 0:o.slice_name)?t:(0,c.t)("New chart"),!0,q)(e.domEvent),K(!1),W((0,F.logEvent)(T.C7,{chartId:null==o?void 0:o.slice_id,chartName:null==o?void 0:o.slice_name}))}},{key:"export_to_xlsx",label:(0,c.t)("Export to Excel"),icon:(0,i.Y)(m.F.FileOutlined,{}),disabled:!t,onClick:()=>{e_(),K(!1),W((0,F.logEvent)(T.k8,{chartId:null==o?void 0:o.slice_id,chartName:null==o?void 0:o.slice_name}))}});let d=[{key:"export_current_to_csv",label:(0,c.t)("Export to .CSV"),icon:(0,i.Y)(m.F.FileOutlined,{}),disabled:!t,onClick:()=>{var t,l,i,r;if(!(null==e?void 0:e.server_pagination)&&(null==I||null==(l=I.clientView)||null==(t=l.rows)?void 0:t.length)&&(null==I||null==(r=I.clientView)||null==(i=r.columns)?void 0:i.length)){let{rows:e,columns:t}=I.clientView;eT(e,t,(null==o?void 0:o.slice_name)||"current_view")}else(0,x.RY)({formData:e,ownState:I,resultType:"results",resultFormat:"csv"});K(!1),W((0,F.logEvent)(T.xb,{chartId:null==o?void 0:o.slice_id,chartName:null==o?void 0:o.slice_name}))}},{key:"export_current_to_json",label:(0,c.t)("Export to .JSON"),icon:(0,i.Y)(m.F.FileOutlined,{}),disabled:!t,onClick:()=>{var t,l,i,r;if(!(null==e?void 0:e.server_pagination)&&(null==I||null==(l=I.clientView)||null==(t=l.rows)?void 0:t.length)&&(null==I||null==(r=I.clientView)||null==(i=r.columns)?void 0:i.length)){let{rows:e,columns:t}=I.clientView;((e,t,l)=>{if(!(null==e?void 0:e.length)||!(null==t?void 0:t.length))return;let i=e.map(e=>{let l={};return t.forEach(t=>{l[t.key]=(e=>{if(e instanceof Date)return e.toISOString();if(e&&"object"==typeof e&&"input"in e&&"formatter"in e){var t,l,i;let r=null!=(t=null!=(l=null!=(i=e.input)?i:e.value)?l:null==e.toString?void 0:e.toString.call(e))?t:"";return r instanceof Date?r.toISOString():r}return e})(e[t.key])}),l}),r=new Blob([JSON.stringify({meta:{columns:t.map(e=>{var t;return{key:e.key,label:null!=(t=e.label)?t:e.key}}),count:e.length},data:i},null,2)],{type:"application/json;charset=utf-8;"}),n=document.createElement("a");n.href=URL.createObjectURL(r),n.download=`${l||"current_view"}.json`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(n.href)})(e,t,(null==o?void 0:o.slice_name)||"current_view")}else ew();K(!1),W((0,F.logEvent)(T.v2,{chartId:null==o?void 0:o.slice_id,chartName:null==o?void 0:o.slice_name}))}},{key:"export_current_screenshot",label:(0,c.t)("Export screenshot (jpeg)"),icon:(0,i.Y)(m.F.FileImageOutlined,{}),onClick:e=>{var t;(0,S.A)(".panel-body .chart-container",null!=(t=null==o?void 0:o.slice_name)?t:(0,c.t)("New chart"),!0,q)(e.domEvent),K(!1),W((0,F.logEvent)(T.C7,{chartId:null==o?void 0:o.slice_id,chartName:null==o?void 0:o.slice_name}))}},{key:"export_current_xlsx",label:(0,c.t)("Export to Excel"),icon:(0,i.Y)(m.F.FileOutlined,{}),disabled:!t,onClick:()=>O(function*(){var t,i,r,n;if(!(null==e?void 0:e.server_pagination)&&(null==I||null==(i=I.clientView)||null==(t=i.rows)?void 0:t.length)&&(null==I||null==(n=I.clientView)||null==(r=n.columns)?void 0:r.length)){let e,{rows:t,columns:i}=I.clientView;yield(e=(null==o?void 0:o.slice_name)||"current_view",O(function*(){if((null==t?void 0:t.length)&&(null==i?void 0:i.length))try{let r=(yield Promise.resolve().then(l.bind(l,3959))).default,n=t.map(e=>{let t={};return i.forEach(l=>{var i,r,n,a,o;let s=e[l.key];s&&"object"==typeof s&&"input"in s&&"formatter"in s?t[null!=(i=l.label)?i:l.key]=s.input instanceof Date?s.input.toISOString():null!=(r=null!=(n=s.input)?n:s.value)?r:"":s instanceof Date?t[null!=(a=l.label)?a:l.key]=s.toISOString():t[null!=(o=l.label)?o:l.key]=s}),t}),a=r.utils.json_to_sheet(n,{skipHeader:!1}),o=r.utils.book_new();r.utils.book_append_sheet(o,a,"Current View");let s=Object.keys(n[0]||{}).map(e=>({wch:Math.max(10,String(e).length+2)}));a["!cols"]=s,r.writeFile(o,`${e||"current_view"}.xlsx`)}catch(l){eT(t,i,e||"current_view"),null==V||V((0,c.t)("Falling back to CSV; Excel export library not available."))}})())}else yield e_();K(!1),W((0,F.logEvent)(T.k8,{chartId:null==o?void 0:o.slice_id,chartName:null==o?void 0:o.slice_name}))})()}];r.push({key:"data_export_options",type:"submenu",label:(0,c.t)("Data Export Options"),children:[{key:"export_all_data_group",type:"submenu",label:(0,c.t)("Export All Data"),children:a},...ey?[{key:"export_current_view_group",type:"submenu",label:(0,c.t)("Export Current View"),children:d}]:[]]});let g=[{key:"copy_permalink",label:(0,c.t)("Copy permalink to clipboard"),onClick:()=>{eF(),K(!1)}},{key:"share_by_email",label:(0,c.t)("Share chart by email"),onClick:()=>{ex(),K(!1)}}];return(0,s.G7)(s.TO.EmbeddableCharts)&&g.push({key:"embed_code",label:(0,i.Y)(v.g,{triggerNode:(0,i.Y)("div",{"data-test":"embed-code-button",children:(0,c.t)("Embed code")}),modalTitle:(0,c.t)("Embed code"),modalBody:(0,i.Y)(E.A,{formData:e,addDangerToast:V}),maxWidth:`${100*q.sizeUnit}px`,destroyOnHidden:!0,responsive:!0}),onClick:()=>K(!1)}),r.push({key:"share_submenu",type:"submenu",label:(0,c.t)("Share"),children:g}),r.push({type:"divider"}),ep&&r.push(ep),r.push({key:"view_query",label:(0,i.Y)(v.g,{triggerNode:(0,i.Y)("div",{"data-test":"view-query-menu-item",children:(0,c.t)("View query")}),modalTitle:(0,c.t)("View query"),modalBody:(0,i.Y)($.A,{latestQueryFormData:e}),draggable:!0,resizable:!0,responsive:!0}),onClick:()=>K(!1)}),eh&&r.push({key:"run_in_sql_lab",label:(0,c.t)("Run in SQL Lab"),onClick:t=>{var l;p(e,!!(null==(l=t.domEvent)?void 0:l.metaKey)),K(!1)}}),(0,i.Y)(f.W1,z({selectable:!1,items:r},j))},[V,t,eF,N,em,Q,J,eh,W,eS,eC,e_,ew,e,p,D,ep,ex,ev,o,q.sizeUnit,I,ey]),G,K,{isVisible:el,progress:er,onCancel:eu,onRetry:ed,onDownload:ec}]}},74424(e,t,l){l.d(t,{r:()=>a});var i=l(27124),r=l(99418),n=l(70258);function a(e){return e.map(({column_name:e,verbose_name:t,is_certified:l,certified_by:a,description:o,type:s})=>({name:t||e,value:e,documentation:function({title:e,body:t,footer:l}){let i=`
    <div class="tooltip-detail">
      ${e?`<div class="tooltip-detail-title">${e}</div>`:""}
      ${t?`<div class="tooltip-detail-body">${t}</div>`:""}
      ${l?`<div class="tooltip-detail-footer">${l}</div>`:""}
    </div>
  `;return r.default.sanitize(i)}({title:e,body:`type: ${s||"unknown"}<br />${o?`description: ${o}`:""}`,footer:l?(0,i.t)("Certified by %s",a):void 0}),score:n.v9,meta:"column"}))}},5379(e,t,l){l.d(t,{M:()=>c});var i=l(2445),r=l(24002),n=l(27124),a=l(85614),o=l(17437),s=l(86204),d=l(12913),u=l(64163);let c=({dataset:e})=>{let t=(0,a.useTheme)();return{metadataBar:(0,r.useMemo)(()=>{if((0,u.n)())return null;let l=[];if(e){var r,a;let{changed_on_humanized:t,created_on_humanized:i,description:o,table_name:s,changed_by:u,created_by:c,owners:p}=e,h=(0,n.t)("Not available"),m=`${null!=(r=null==c?void 0:c.first_name)?r:""} ${null!=(a=null==c?void 0:c.last_name)?a:""}`.trim()||h,v=u?`${u.first_name} ${u.last_name}`:h,g=p&&p.length>0?p.map(e=>`${e.first_name} ${e.last_name}`):[h];l.push({type:d.Q.Table,title:s||h}),l.push({type:d.Q.LastModified,value:t||h,modifiedBy:v}),l.push({type:d.Q.Owner,createdBy:m,owners:g,createdOn:i||h}),o&&l.push({type:d.Q.Description,value:o})}return(0,i.Y)("div",{css:(0,o.AH)`
          display: flex;
          margin-bottom: ${4*t.sizeUnit}px;
        `,children:l.length>0&&(0,i.Y)(s.Ay,{items:l,tooltipPlacement:"bottom"})})},[e,t.sizeUnit])}}},17182(e,t,l){l.d(t,{k:()=>S,v:()=>y});var i,r=l(2445),n=l(24002),a=l(61225),o=l(27124),s=l(19202),d=l(36732),u=l(51281),c=l(85614),p=l(17437),h=l(22022),m=l(62388),v=l(33920),g=l(36079);let f=(0,s.a)();var y=((i={}).Charts="charts",i.Dashboards="dashboards",i);let b=c.styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > *:first-child {
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,x=f.get("report-modal.dropdown.item.icon"),S=({dashboardId:e,chart:t,showReportModal:l,setCurrentReportDeleting:i})=>{let s=(0,a.wA)(),c=e||(null==t?void 0:t.id),f=e?"dashboards":"charts",y=(0,a.d4)(e=>c&&((e.reports||{})[f]||{})[c]||null),S=(0,a.d4)(e=>e.user),C=(0,d.Z)(e),w=()=>!!(0,u.G7)(u.TO.AlertReports)&&!!(null==S?void 0:S.userId)&&!!c&&Object.keys(S.roles||[]).map(e=>S.roles[e].filter(e=>"menu_access"===e[0]&&"Manage"===e[1])).some(e=>e.length>0),_=w()&&!!(e&&C!==e||(null==t?void 0:t.id));if((0,n.useEffect)(()=>{_&&c&&s((0,v.LQ)({userId:S.userId,filterField:e?"dashboard_id":"chart_id",creationMethod:e?"dashboards":"charts",resourceId:c}))},[s,_,null==S?void 0:S.userId,e,c]),!w())return null;let F=()=>l();return y&&y.id?{key:"email-report-manage",type:"submenu",label:(0,o.t)("Manage email report"),children:[{key:"toggle-active",label:(0,r.FD)(g.t3,{children:[(0,r.Y)(h.Checkbox,{checked:y.active||!1,onChange:m.fZ,css:e=>(0,p.AH)`
                margin-right: ${e.sizeUnit}px;
              `}),(0,o.t)("Email reports active")]}),onClick:()=>{(null==y?void 0:y.id)&&void 0!==y.active&&s((0,v.PM)(y,!y.active))}},{key:"edit-report",label:(0,o.t)("Edit email report"),onClick:F},{key:"delete-report",label:(0,o.t)("Delete email report"),onClick:()=>i(y),danger:!0}]}:{key:"email-report-setup",type:"submenu",label:(0,o.t)("Manage email report"),children:[{key:"set-up-report",label:x?(0,r.FD)(b,{children:[(0,r.Y)("div",{children:(0,o.t)("Set up an email report")}),(0,r.Y)(x,{})]}):(0,o.t)("Set up an email report"),onClick:F}]}}},10434(e,t,l){l.d(t,{A:()=>q});var i,r=l(2445),n=l(24002),a=l(27124),o=l(13048),s=l(68655),d=l(27243),u=l(61225),c=l(33920),p=l(22022),h=l(34835),m=l(10164),v=l(60685),g=l(90617),f=l(891),y=l(7070),b=((i={}).Text="TEXT",i.PNG="PNG",i.CSV="CSV",i),x=l(18847),S=l(63039),C=l(17182),w=l(85614),_=l(17437),F=l(56030),T=l(61920),A=l(29138);let Y=(0,w.styled)(F.aF)`
  .ant-modal-body {
    padding: 0;
  }
`,$=w.styled.div`
  padding: ${({theme:e})=>`${3*e.sizeUnit}px ${4*e.sizeUnit}px ${2*e.sizeUnit}px`};
  label {
    font-size: ${({theme:e})=>e.fontSizeSM}px;
    color: ${({theme:e})=>e.colorTextSecondary};
  }
`,E=w.styled.div`
  border-top: 1px solid ${({theme:e})=>e.colorSplit};
  padding: ${({theme:e})=>`${4*e.sizeUnit}px ${4*e.sizeUnit}px ${6*e.sizeUnit}px`};
  .ant-select {
    width: 100%;
  }
  .control-label {
    font-size: ${({theme:e})=>e.fontSizeSM}px;
    color: ${({theme:e})=>e.colorTextSecondary};
  }
`,k=w.styled.span`
  span {
    margin-right: ${({theme:e})=>2*e.sizeUnit}px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
`,D=w.styled.div`
  margin-bottom: ${({theme:e})=>7*e.sizeUnit}px;

  h4 {
    margin-bottom: ${({theme:e})=>3*e.sizeUnit}px;
  }
`,O=(0,w.styled)(T.l)`
  margin-bottom: ${({theme:e})=>3*e.sizeUnit}px;
  width: ${({theme:e})=>120*e.sizeUnit}px;
`,z=w.styled.p`
  color: ${({theme:e})=>e.colorError};
`,M=(0,_.AH)`
  margin-bottom: 0;
`,R=(0,w.styled)(A.$n)`
  width: ${({theme:e})=>40*e.sizeUnit}px;
`,I=e=>(0,_.AH)`
  margin: ${3*e.sizeUnit}px 0 ${2*e.sizeUnit}px;
`,N=w.styled.div`
  margin: ${({theme:e})=>8*e.sizeUnit}px 0
    ${({theme:e})=>4*e.sizeUnit}px;
`;function L(e,t,l,i,r,n,a){try{var o=e[n](a),s=o.value}catch(e){l(e);return}o.done?t(s):Promise.resolve(s).then(i,r)}function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}(0,w.styled)(f.s)`
  display: block;
  line-height: ${({theme:e})=>8*e.sizeUnit}px;
`;let j=[o.Y.PivotTable,"table",o.Y.PairedTTest],H={crontab:"0 12 * * 1"},P={},q=(0,y.Ay)(function({onHide:e,show:t=!1,dashboardId:l,chart:i,userId:o,userEmail:y,ccEmail:w,bccEmail:F,creationMethod:T,dashboardName:A,chartName:q}){var V;let B=null==i||null==(V=i.sliceFormData)?void 0:V.viz_type,W=!!i,G=W&&B&&j.includes(B),K=G?b.Text:b.PNG,Q=A||q,X=(0,n.useMemo)(()=>U({},H,{name:Q?(0,a.t)("Weekly Report for %s",Q):(0,a.t)("Weekly Report")}),[Q]),J=(0,n.useCallback)((e,t)=>"reset"===t?X:U({},e,t),[X]),[Z,ee]=(0,n.useReducer)(J,X),[et,el]=(0,n.useState)(),ei=(0,u.wA)(),er=(0,u.d4)(e=>{let t=l?C.v.Dashboards:C.v.Charts;return(0,x.oi)(e,t,l||(null==i?void 0:i.id))||P}),en=er&&Object.keys(er).length;(0,n.useEffect)(()=>{en?ee(er):ee("reset")},[en,er]);let ea=(0,r.FD)(k,{children:[(0,r.Y)(v.F.CalendarOutlined,{}),(0,r.Y)("span",{className:"text",children:en?(0,a.t)("Edit email report"):(0,a.t)("Schedule a new email report")})]}),eo=(0,r.FD)(r.FK,{children:[(0,r.Y)(R,{onClick:e,children:(0,a.t)("Cancel")},"back"),(0,r.Y)(R,{buttonStyle:"primary",onClick:()=>{var t;return(t=function*(){let t={type:"Report",active:!0,force_screenshot:!1,custom_width:Z.custom_width,creation_method:T,dashboard:l,chart:null==i?void 0:i.id,owners:[o],recipients:[{recipient_config_json:{target:y,ccTarget:w,bccTarget:F},type:"Email"}],name:Z.name,description:Z.description,crontab:Z.crontab,report_format:Z.report_format||K,timezone:Z.timezone};ee({isSubmitting:!0,error:void 0});try{en&&Z.id?yield ei((0,c.Zp)(Z.id,t)):yield ei((0,c.ef)(t)),e()}catch(t){let{error:e}=yield(0,s.h4)(t);ee({error:e})}ee({isSubmitting:!1})},function(){var e=this,l=arguments;return new Promise(function(i,r){var n=t.apply(e,l);function a(e){L(n,i,r,a,o,"next",e)}function o(e){L(n,i,r,a,o,"throw",e)}a(void 0)})})()},disabled:!Z.name,loading:Z.isSubmitting,children:en?(0,a.t)("Save"):(0,a.t)("Add")},"submit")]}),es=(0,r.FD)(r.FK,{children:[(0,r.Y)(N,{children:(0,r.Y)(g.o.Title,{level:4,children:(0,a.t)("Message content")})}),(0,r.Y)("div",{className:"inline-container",children:(0,r.Y)(f.s.GroupWrapper,{spaceConfig:{direction:"vertical",size:"middle",align:"start",wrap:!1},onChange:e=>{ee({report_format:e.target.value})},value:Z.report_format||K,options:[{label:(0,a.t)("Text embedded in email"),value:b.Text},{label:(0,a.t)("Image (PNG) embedded in email"),value:b.PNG},{label:(0,a.t)("Formatted CSV attached in email"),value:b.CSV}]})})]}),ed=(0,r.FD)(S.tu,{children:[(0,r.Y)("div",{className:"control-label",css:I,children:(0,a.t)("Screenshot width")}),(0,r.Y)("div",{className:"input-container",children:(0,r.Y)(p.Input,{type:"number",name:"custom_width",value:(null==Z?void 0:Z.custom_width)||"",placeholder:(0,a.t)("Input custom width in pixels"),onChange:e=>{ee({custom_width:parseInt(e.target.value,10)||null})}})})]});return(0,r.FD)(Y,{show:t,onHide:e,title:ea,footer:eo,width:"432",centered:!0,children:[(0,r.FD)($,{children:[(0,r.Y)(h.M,{id:"name",name:"name",value:Z.name||"",placeholder:X.name,required:!0,validationMethods:{onChange:({target:e})=>ee({name:e.value})},label:(0,a.t)("Report Name"),"data-test":"report-name-test"}),(0,r.Y)(h.M,{id:"description",name:"description",value:(null==Z?void 0:Z.description)||"",validationMethods:{onChange:({target:e})=>{ee({description:e.value})}},label:(0,a.t)("Description"),placeholder:(0,a.t)("Include a description that will be sent with your report"),css:M,"data-test":"report-description-test"})]}),(0,r.FD)(E,{children:[(0,r.FD)(D,{children:[(0,r.Y)(g.o.Title,{level:5,css:e=>(0,_.AH)`
  margin: ${3*e.sizeUnit}px 0;
`,children:(0,a.t)("Schedule")}),(0,r.Y)("p",{children:(0,a.t)("The report will be sent to your email at")})]}),(0,r.Y)(O,{clearButton:!1,value:Z.crontab||"0 12 * * 1",setValue:e=>{ee({crontab:e})},onError:el}),(0,r.Y)(z,{children:et}),(0,r.Y)("div",{className:"control-label",css:e=>(0,_.AH)`
  margin: ${3*e.sizeUnit}px 0 ${2*e.sizeUnit}px;
`,children:(0,a.t)("Timezone")}),(0,r.Y)(m.A,{timezone:Z.timezone,onTimezoneChange:e=>{ee({timezone:e})}}),W&&es,(!W||!G)&&ed]}),Z.error&&(0,r.Y)(d.F,{type:"error",css:e=>(0,_.AH)`
  margin: ${4*e.sizeUnit}px;
  margin-top: 0;
`,message:en?(0,a.t)("Failed to update report"):(0,a.t)("Failed to create report"),description:Z.error})]})})},64751(e,t,l){l.d(t,{t_:()=>c});var i=l(19202),r=l(25365),n=l(79924),a=l(24002),o=l(58414),s=l(61287);function d(e,t,l,i,r,n,a){try{var o=e[n](a),s=o.value}catch(e){l(e);return}o.done?t(s):Promise.resolve(s).then(i,r)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let c=(e,t,l,c=!1)=>{let[p,h]=(0,a.useState)({status:s.bk.Loading,result:null,error:null});return(0,a.useEffect)(()=>{var a;c?h({status:s.bk.Complete,result:{},error:null}):(a=function*(){try{var a,d;let c,p,m="string"==typeof e?Number(e.split("__")[0]):Number(e),v=(0,i.a)().get("load.drillby.options");if(v&&l){let e=yield v(m,l);c=null==e||null==(a=e.json)?void 0:a.result}else{let e=`/api/v1/dataset/${m}/drill_info/?q=(dashboard_id:${t})`;try{let{json:t}=yield(0,o.wW)({endpoint:e}),{result:l}=t;c=l}catch(t){throw n.A.error("Failed to load dataset: ",t),o.el.delete(e),t}}let g=(d=c,p={},(0,r.A)(null==d?void 0:d.columns).forEach(e=>{p[e.column_name]=e.verbose_name||e.column_name}),(0,r.A)(null==d?void 0:d.metrics).forEach(e=>{p[e.metric_name]=e.verbose_name||e.metric_name}),p);h({status:s.bk.Complete,result:u({},c,{verbose_map:g}),error:null})}catch(e){h({status:s.bk.Error,result:null,error:e instanceof Error?e:Error(String(e))})}},function(){var e=this,t=arguments;return new Promise(function(l,i){var r=a.apply(e,t);function n(e){d(r,l,i,n,o,"next",e)}function o(e){d(r,l,i,n,o,"throw",e)}n(void 0)})})()},[e,t,l,c]),p}},69580(e,t,l){l.d(t,{K:()=>r});var i=l(24002);let r=(e,t)=>{(0,i.useEffect)(()=>{let l=l=>{e&&(l.preventDefault(),l.returnValue=t||"")};return window.addEventListener("beforeunload",l),()=>window.removeEventListener("beforeunload",l)},[e,t])}},47451(e,t,l){l.d(t,{S:()=>n});var i=l(61225),r=l(12097);let n=()=>{let e=(0,i.d4)(e=>{var t;return(0,r.L)("can_explore","Superset",null==(t=e.user)?void 0:t.roles)}),t=(0,i.d4)(e=>{var t;return(0,r.L)("can_write","ExploreFormDataRestApi",null==(t=e.user)?void 0:t.roles)}),l=(0,i.d4)(e=>{var t;return(0,r.L)("can_samples","Datasource",null==(t=e.user)?void 0:t.roles)}),n=(0,i.d4)(e=>{var t;return(0,r.L)("can_csv","Superset",null==(t=e.user)?void 0:t.roles)}),a=(0,i.d4)(e=>{var t;return(0,r.L)("can_drill","Dashboard",null==(t=e.user)?void 0:t.roles)}),o=(0,i.d4)(e=>{var t;return(0,r.L)("can_get_drill_info","Dataset",null==(t=e.user)?void 0:t.roles)});return{canExplore:e,canWriteExploreFormData:t,canDatasourceSamples:l,canDownload:n,canDrill:a,canDrillBy:(e||a)&&t&&o,canDrillToDetail:(e||a)&&l&&o,canViewQuery:(0,i.d4)(e=>{var t;return(0,r.L)("can_view_query","Dashboard",null==(t=e.user)?void 0:t.roles)}),canViewTable:(0,i.d4)(e=>{var t;return(0,r.L)("can_view_chart_as_table","Dashboard",null==(t=e.user)?void 0:t.roles)})}}},39503(e,t,l){l.d(t,{w:()=>a});var i=l(24002),r=l(43561);let n=new BroadcastChannel("tab_id_channel");function a(){let[e,t]=(0,i.useState)();return(0,i.useEffect)(()=>{let l;if(!function(){try{return window.localStorage&&window.sessionStorage}catch(e){return!1}}()){e||t((0,r.Ak)());return}let i=()=>{let e;try{e=window.localStorage.getItem("last_tab_id")}catch(e){}let l=String(e?Number.parseInt(e,10)+1:1);try{window.sessionStorage.setItem("tab_id",l),window.localStorage.setItem("last_tab_id",l)}catch(e){}t(l)};try{l=window.sessionStorage.getItem("tab_id")}catch(e){}l?(n.postMessage({type:"REQUESTING_TAB_ID",tabId:l}),t(l)):i(),n.onmessage=t=>{if(t.data.tabId===e)if("REQUESTING_TAB_ID"===t.data.type){let e={type:"TAB_ID_DENIED",tabId:t.data.tabId};n.postMessage(e)}else"TAB_ID_DENIED"===t.data.type&&i()}},[e]),e}},24807(e,t,l){l.d(t,{P:()=>d});var i=l(27124),r=l(68655),n=l(24002),a=l(61574),o=l(69580);function s(e,t,l,i,r,n,a){try{var o=e[n](a),s=o.value}catch(e){l(e);return}o.done?t(s):Promise.resolve(s).then(i,r)}let d=({hasUnsavedChanges:e,onSave:t,isSaveModalVisible:l=!1,manualSaveOnUnsavedChanges:d=!1})=>{let u=(0,a.W6)(),[c,p]=(0,n.useState)(!1),h=(0,n.useRef)(null),m=(0,n.useRef)(()=>{}),v=(0,n.useRef)(!1),g=(0,n.useCallback)(()=>{p(!1),null==h.current||h.current.call(h)},[]),f=(0,n.useCallback)(()=>{var e;return(e=function*(){try{d&&(v.current=!0),yield t(),p(!1)}catch(t){let e=yield(0,r.h4)(t);throw Error(e.message||e.error||(0,i.t)("Sorry, an error occurred"),{cause:t})}},function(){var t=this,l=arguments;return new Promise(function(i,r){var n=e.apply(t,l);function a(e){s(n,i,r,a,o,"next",e)}function o(e){s(n,i,r,a,o,"throw",e)}a(void 0)})})()},[d,t]),y=(0,n.useCallback)(()=>{v.current=!0,t()},[t]),b=(0,n.useCallback)(({pathname:e,search:t,state:l},i)=>{if("REPLACE"!==i){if(v.current){v.current=!1;return}return h.current=()=>{null==m.current||m.current.call(m),"POP"===i?u.go(-1):u.push({pathname:e,search:t},l)},p(!0),!1}},[u]);return(0,n.useEffect)(()=>{if(!e)return;let t=u.block(b);return m.current=t,()=>t()},[b,e,u]),(0,n.useEffect)(()=>{!l&&v.current&&(p(!1),v.current=!1)},[l]),(0,o.K)(e),{showModal:c,setShowModal:p,handleConfirmNavigation:g,handleSaveAndCloseModal:f,triggerManualSave:y}}},37664(e,t,l){l.d(t,{A:()=>h});var i=l(67390),r=l.n(i),n=l(20249),a=l.n(n),o=l(27124),s=l(7047);function d(e,t,l,i,r,n,a){try{var o=e[n](a),s=o.value}catch(e){l(e);return}o.done?t(s):Promise.resolve(s).then(i,r)}let u=(e,t=new Date)=>`${a()(e)}-${t.toISOString().replace(/[: ]/g,"-")}`,c=new Set(["display","position","width","height","max-width","max-height","margin","padding","top","right","bottom","left","font","font-family","font-size","font-weight","font-style","line-height","letter-spacing","word-spacing","text-align","text-decoration","color","background-color","border","border-width","border-style","border-color","opacity","visibility","overflow","z-index","transform","flex","flex-direction","justify-content","align-items","grid","grid-template","grid-area","table-layout","vertical-align","text-align","box-sizing","min-height","min-width"]),p=new WeakMap;function h(e,t,l=!1,i){return n=>{var a;return(a=function*(){var a,d;let h=l?document.querySelector(e):n.currentTarget.closest(e);if(!h)return void(0,s.Zd)((0,o.t)("Image download failed, please refresh and try again."));let m=e=>"string"!=typeof e.className||!e.className.includes("mapboxgl-control-container")&&!e.className.includes("header-controls"),v=h.classList.contains("dashboard")?[]:h.querySelectorAll("[data-themed-ag-grid]"),g=1===v.length?v[0]:null,f=g?g.querySelector(".ag-root-wrapper"):null;if(g&&f){let e=g._agGridApi;if(!0!==g._agGridFirstDataRendered)return void(0,s.Zd)((0,o.t)("The chart is still loading. Please wait a moment and try again."));let l=null==e||null==(d=e.getColumnState)?void 0:d.call(e),n=null!=(a=null==l?void 0:l.filter(e=>!e.hide))?a:[],c=n.reduce((e,t)=>{var l;return e+(null!=(l=t.width)?l:0)},0)||f.offsetWidth,p=[];try{yield document.fonts.ready,e&&(e.setGridOption("domLayout","print"),yield new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(()=>e()))),n.length>0&&(null==e.applyColumnState||e.applyColumnState.call(e,{state:n.map(e=>({colId:e.colId,width:e.width,flex:null})),applyOrder:!1})),null==e.resetRowHeights||e.resetRowHeights.call(e),yield((e,t=5e3,l=2)=>new Promise(i=>{let r=Date.now()+t,n=e.scrollHeight,a=0,o=()=>{if(Date.now()>=r)return void i();try{let t=e.scrollHeight;if(t===n){if((a+=1)>=l)return void i()}else a=0,n=t}catch(e){i();return}setTimeout(o,100)};setTimeout(o,100)}))(f,5e3,5)),f.querySelectorAll(".ag-cell").forEach(e=>{var t,l;let i=null!=(t=null==(l=e.parentElement)?void 0:l.offsetHeight)?t:0,r=Math.max(i,e.scrollHeight);p.push({el:e,minHeight:e.style.minHeight,overflow:e.style.overflow}),e.style.minHeight=r>0?`${r}px`:"0px",e.style.overflow="hidden"});let l=f.scrollHeight,a=yield r().toJpeg(f,{bgcolor:null==i?void 0:i.colorBgContainer,filter:m,quality:.95,height:l,width:c,cacheBust:!0}),o=document.createElement("a");o.download=`${u(t)}.jpg`,o.href=a,o.click()}catch(e){console.error("Creating image failed",e),(0,s.Zd)((0,o.t)("Image download failed, please refresh and try again."))}finally{p.forEach(({el:e,minHeight:t,overflow:l})=>{e.style.minHeight=t,e.style.overflow=l}),e&&(e.setGridOption("domLayout","normal"),l&&(null==e.applyColumnState||e.applyColumnState.call(e,{state:l,applyOrder:!1})))}return}let y=null;try{let e,l,n,a,o,{clone:s,cleanup:d}=(e=h.cloneNode(!0),((e,t,l)=>{let i=[[e,t]],r=new WeakSet;for(;i.length;){var n;let[e,t]=i.shift();if(r.has(e))continue;r.add(e);let a=p.get(e);for(let l of(a||(a=window.getComputedStyle(e),p.set(e,a)),c)){let e=a.getPropertyValue(l);e&&"initial"!==e&&"inherit"!==e&&t.style.setProperty(l,e,a.getPropertyPriority(l))}if(null==(n=e.textContent)?void 0:n.trim()){let{color:e}=a;e&&"transparent"!==e&&"transparent"!==e||(t.style.color=(null==l?void 0:l.colorTextBase)||"black"),t.style.visibility="visible","none"===a.display&&(t.style.display="block")}for(let l=0;l<e.children.length;l+=1)i.push([e.children[l],t.children[l]])}})(h,e,i),l=h.querySelectorAll("canvas"),n=e.querySelectorAll("canvas"),l.forEach((e,t)=>{if(l[t]&&n[t]){let l=n[t],i=l.getContext("2d");i&&(l.width=e.width,l.height=e.height,i.drawImage(e,0,0))}}),(a=document.createElement("div")).style.cssText=`
    position: absolute;
    left: -20000px;
    top: -20000px;
    visibility: hidden;
    pointer-events: none;
    z-index: -1000;
  `,a.appendChild(e),document.body.appendChild(a),(o=e.style).height="auto",o.maxHeight="none",['[style*="overflow"]',".scrollable",".table-responsive",".ant-table-body",".table-container",".ant-table-container",".table-wrapper",".ant-table-tbody","tbody",".table-body",".virtual-table",".react-window",".react-virtualized"].forEach(t=>{e.querySelectorAll(t).forEach(e=>{e.style.overflow="visible",e.style.height="auto",e.style.maxHeight="none"})}),e.querySelectorAll("table, .ant-table, .table-container, .data-table").forEach(e=>{e.style.margin="0 auto",e.style.display="table",e.style.width="100%",e.style.tableLayout="auto"}),e.querySelectorAll("tr, .ant-table-row, .table-row, .data-row").forEach(e=>{e.style.display="table-row",e.style.visibility="visible",e.style.height="auto"}),e.querySelectorAll("td, th, .ant-table-cell, .table-cell").forEach(e=>{e.style.display="table-cell",e.style.visibility="visible"}),e.querySelectorAll("*").forEach(e=>{var t;if(null==(t=e.textContent)?void 0:t.trim()){let t=window.getComputedStyle(e);"transparent"===t.color&&(e.style.color="black"),e.style.visibility="visible","none"===t.display&&(e.style.display="block")}}),e.querySelectorAll("[data-virtualized], .virtualized, .lazy-load").forEach(e=>{e.style.height="auto",e.style.maxHeight="none"}),{clone:e,cleanup:()=>{null==p.delete||p.delete.call(p,h),a.parentElement&&a.parentElement.removeChild(a)}});y=d;let v=yield r().toJpeg(s,{bgcolor:null==i?void 0:i.colorBgContainer,filter:m,quality:.95,height:s.scrollHeight,width:s.scrollWidth,cacheBust:!0});y(),y=null;let g=document.createElement("a");g.download=`${u(t)}.jpg`,g.href=v,g.click()}catch(e){console.error("Creating image failed",e),(0,s.Zd)((0,o.t)("Image download failed, please refresh and try again."))}finally{y&&y()}},function(){var e=this,t=arguments;return new Promise(function(l,i){var r=a.apply(e,t);function n(e){d(r,l,i,n,o,"next",e)}function o(e){d(r,l,i,n,o,"throw",e)}n(void 0)})})()}}},64922(e,t,l){l.d(t,{A:()=>r});var i=l(3959);function r(e,t){let l=document.querySelector(e),r=i.utils.table_to_book(l);(0,i.writeFile)(r,`${t}.xlsx`)}},63150(e,t,l){l.d(t,{w:()=>a});var i=l(27124);let r=(0,i.t)("Create chart"),n=(0,i.t)("Update chart"),a=e=>(0,i.t)("Select values in highlighted field(s) in the control panel. Then run the query by clicking on the %s button.",`"${e?r:n}"`)},93120(e,t,l){l.d(t,{a:()=>i});let i=()=>{var e,t;return null==(t=window)||null==(e=t.navigator)?void 0:e.webdriver}},11047(e,t,l){l.d(t,{r:()=>o});var i=l(73503),r=l(77366),n=l(78418),a=l(94736);let o=(e,t=r.v.Where)=>{var l,o;let s,d=(e=>{if(!e.filterDataMapping)return null;let{col:t,op:l}=e,i="val"in e?e.val:void 0;for(let[r,n]of Object.entries(e.filterDataMapping))if(Array.isArray(n)&&n.find(e=>e.col===t&&e.op===l&&JSON.stringify(e.val)===JSON.stringify(i)))return r;return null})(e),u=d?null==(l=e.layerFilterScope)?void 0:l[d]:void 0;return s=(0,i.q0)(e.col)?{expressionType:"SQL",clause:t,sqlExpression:(0,a.e)({expressionType:r.A.Simple,subject:`(${e.col.sqlExpression})`,operator:e.op,comparator:"val"in e?e.val:void 0})}:{expressionType:"SIMPLE",clause:t,operator:e.op,operatorId:null==(o=Object.entries(n.nS).find(t=>t[1].operation===e.op))?void 0:o[0],subject:e.col,comparator:"val"in e?e.val:void 0},e.isExtra&&Object.assign(s,{isExtra:!0,layerFilterScope:u,filterOptionName:`filter_${Math.random().toString(36).substring(2,15)}_${Math.random().toString(36).substring(2,15)}`}),s}}}]);