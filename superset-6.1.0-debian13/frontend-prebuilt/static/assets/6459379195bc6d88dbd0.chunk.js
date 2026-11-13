"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4849],{34849(e,t,l){l.r(t),l.d(t,{default:()=>eG});var n=l(2445),r=l(27124),i=l(50267),o=l(63021),a=l(24002),u=l(2404),s=l.n(u),d=l(47036),c=l(74284),p=l(80346),g=l(42877),v=l(38221),h=l.n(v),f=l(17451),m=l(50329),y=l(68e3),C=l(97),b=l(68292),x=l(85614),w=l(17437);let S=x.styled.div`
  ${({theme:e})=>`
    display: flex;
    width: 100%;

    .three-dots-menu {
      align-self: center;
      margin-left: ${e.sizeUnit}px;
      cursor: pointer;
      padding: ${e.sizeUnit/2}px;
      border-radius: ${e.borderRadius}px;
      margin-top: ${.75*e.sizeUnit}px;
    }
  `}
`,F=x.styled.div`
  ${({theme:e})=>`
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 ${2*e.sizeUnit}px;
    overflow: hidden;
  `}
`,$=x.styled.span`
  ${({theme:e})=>`
    font-weight: ${e.fontWeightStrong};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    max-width: 100%;
  `}
`,k=x.styled.div`
  ${({theme:e})=>`
    display: flex;
    align-items: center;
    margin-left: ${2*e.sizeUnit}px;
  `}
`,M=x.styled.div`
  align-self: flex-end;
  margin-left: auto;
  cursor: pointer;

  padding: 3px 4px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 4px;

  ${({isFilterActive:e})=>e&&(0,w.AH)`
      background: linear-gradient(
        var(--ag-icon-button-active-background-color),
        var(--ag-icon-button-active-background-color)
      );
      ::after {
        background-color: var(--ag-accent-color);
        border-radius: 50%;
        content: '';
        height: 6px;
        position: absolute;
        right: 4px;
        width: 6px;
      }
    `}

  svg {
    ${({isFilterActive:e})=>e&&(0,w.AH)`
        clip-path: path('M8,0C8,4.415 11.585,8 16,8L16,16L0,16L0,0L8,0Z');
        color: var(--ag-icon-button-active-color);
      `}

    :hover {
      ${({isFilterActive:e})=>!e&&(0,w.AH)`
          background-color: var(--ag-icon-button-hover-background-color);
          box-shadow: 0 0 0 var(--ag-icon-button-background-spread)
            var(--ag-icon-button-hover-background-color);
          color: var(--ag-icon-button-hover-color);
          border-radius: var(--ag-icon-button-border-radius);
        `}
    }
  }
`,T=x.styled.div`
  ${({theme:e})=>`
    min-width: ${45*e.sizeUnit}px;
    padding: ${e.sizeUnit}px 0;

    .menu-item {
      padding: ${2*e.sizeUnit}px ${4*e.sizeUnit}px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: ${2*e.sizeUnit}px;

      &:hover {
        background-color: ${e.colorPrimaryBgHover};
      }
    }

    .menu-divider {
      height: 1px;
      background-color: ${e.colorBorderSecondary};
      margin: ${e.sizeUnit}px 0;
    }
  `}
`,z=x.styled.div`
  position: relative;
  display: inline-block;
`,D=x.styled.div`
  ${({theme:e})=>`
      position: fixed;
      box-shadow: var(--ag-menu-shadow);
      border-radius: ${e.sizeUnit}px;
      z-index: 99;
      min-width: ${50*e.sizeUnit}px;
      background: var(--ag-menu-background-color);
      border: var(--ag-menu-border);
      box-shadow: var(--ag-menu-shadow);
      color: var(--ag-menu-text-color);

    `}
`,N=x.styled.div`
  ${({theme:e})=>`
    border: 1px solid ${e.colorBorderSecondary};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: ${2*e.sizeUnit}px ${4*e.sizeUnit}px;
    border-top: 1px solid ${e.colorBorderSecondary};
    font-size: ${e.fontSize}px;
    color: ${e.colorTextBase};
    transform: translateY(-${e.sizeUnit}px);
    background: ${e.colorBgBase};
  `}
`,P=x.styled.div`
  ${({theme:e})=>`
    position: relative;
    margin-left: ${2*e.sizeUnit}px;
    display: inline-block;
    min-width: ${17*e.sizeUnit}px;
    overflow: hidden;
  `}
`,A=x.styled.span`
  ${({theme:e})=>`
    margin: 0 ${6*e.sizeUnit}px;
    span {
      font-weight: ${e.fontWeightStrong};
    }
  `}
`,Y=x.styled.span`
  ${({theme:e})=>`
    span {
      font-weight: ${e.fontWeightStrong};
    }
  `}
`,I=x.styled.div`
  ${({theme:e})=>`
    display: flex;
    gap: ${3*e.sizeUnit}px;
  `}
`,O=x.styled.div`
  ${({theme:e,disabled:t})=>`
    cursor: ${t?"not-allowed":"pointer"};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: ${3*e.sizeUnit}px;
      width: ${3*e.sizeUnit}px;
      fill: ${t?e.colorTextQuaternary:e.colorTextSecondary};
    }
  `}
`,E=(0,x.styled)(b.A)`
  ${({theme:e})=>`
    width: ${30*e.sizeUnit}px;
    margin-right: ${2*e.sizeUnit}px;
  `}
`,B=x.styled.div`
  max-width: 242px;
  ${({theme:e})=>`
    padding: 0 ${2*e.sizeUnit}px;
    color: ${e.colorTextBase};
    font-size: ${e.fontSizeSM}px;
  `}
`,U=x.styled.span`
  ${({theme:e})=>`
    color: ${e.colorTextLabel};
  `}
`,G=x.styled.span`
  ${({theme:e})=>`
    float: right;
    font-size: ${e.fontSizeSM}px;
  `}
`,L=x.styled.div`
  ${({theme:e})=>`
    display: flex;
    align-items: center;
    gap: ${e.sizeUnit}px;
  `}
`,R=x.styled.div`
  ${({theme:e})=>`
    font-weight: ${e.fontWeightStrong};
  `}
`,W=x.styled.div`
  ${({theme:e,height:t})=>(0,w.AH)`
    height: ${t}px;

    --ag-background-color: ${e.colorBgBase};
    --ag-foreground-color: ${e.colorText};
    --ag-header-background-color: ${e.colorBgBase};
    --ag-header-foreground-color: ${e.colorText};

    .dt-is-filter {
      cursor: pointer;
      :hover {
        background-color: ${e.colorFillContentHover};
      }
    }

    .dt-is-active-filter {
      background: ${e.colorPrimaryBg};
      :hover {
        background-color: ${e.colorFillContentHover};
      }
    }

    .dt-truncate-cell {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .dt-truncate-cell:hover {
      overflow: visible;
      white-space: normal;
      height: auto;
    }

    .ag-cell {
      color: var(--ag-cell-value-color, inherit);
    }

    .ag-row-hover .ag-cell {
      color: var(
        --ag-cell-value-hover-color,
        var(--ag-cell-value-color, inherit)
      );
    }

    .ag-container {
      border-radius: 0px;
      border: var(--ag-wrapper-border);
    }

    .ag-input-wrapper {
      ::before {
        z-index: 100;
      }
    }

    .filter-popover {
      z-index: 1 !important;
    }

    .search-container {
      display: flex;
      justify-content: flex-end;
      margin-bottom: ${4*e.sizeUnit}px;
    }

    .dropdown-controls-container {
      display: flex;
      justify-content: flex-end;
    }

    .time-comparison-dropdown {
      display: flex;
      padding-right: ${4*e.sizeUnit}px;
      padding-top: ${1.75*e.sizeUnit}px;
      height: fit-content;
    }

    .ag-header {
      font-size: ${e.fontSizeSM}px;
      font-weight: ${e.fontWeightStrong};
    }

    .ag-row {
      font-size: ${e.fontSizeSM}px;
    }

    .ag-spanned-row {
      font-size: ${e.fontSizeSM}px;
      font-weight: ${e.fontWeightStrong};
    }

    .ag-root-wrapper {
      border-radius: 0px;
    }
    .search-by-text-container {
      display: flex;
      align-items: center;
    }

    .search-by-text {
      margin-right: ${2*e.sizeUnit}px;
    }

    .ant-popover-inner {
      padding: 0px;
    }

    .input-container {
      margin-left: auto;
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      overflow: visible;
    }

    .input-wrapper svg {
      pointer-events: none;
      transform: translate(${7*e.sizeUnit}px, ${e.sizeUnit/2}px);
      color: ${e.colorTextBase};
    }

    .input-wrapper input {
      color: ${e.colorText};
      font-size: ${e.fontSizeSM}px;
      padding: ${1.5*e.sizeUnit}px ${3*e.sizeUnit}px
        ${1.5*e.sizeUnit}px ${8*e.sizeUnit}px;
      line-height: 1.8;
      border-radius: ${e.borderRadius}px;
      border: 1px solid ${e.colorBorderSecondary};
      background-color: transparent;
      outline: none;

      &:focus {
        border-color: ${e.colorPrimary};
      }

      &::placeholder {
        color: ${e.colorTextQuaternary};
      }
    }
  `}
`,H=({currentPage:e=0,pageSize:t=10,totalRows:l=0,pageSizeOptions:i=[10,20,50,100,200],onServerPaginationChange:o=()=>{},onServerPageSizeChange:a=()=>{},sliceId:u})=>{let s,d,c,p,g=Math.ceil(l/t),v=Math.min((e+1)*t,l),h=i.map(e=>({value:e,label:e}));return(0,n.FD)(N,{children:[(0,n.Y)("span",{children:(0,r.t)("Page Size:")}),(0,n.Y)(P,{children:(0,n.Y)(b.A,{value:`${t}`,options:h,onChange:e=>{a(Number(e))},getPopupContainer:()=>document.getElementById(`chart-id-${u}`)})}),(0,n.FD)(A,{children:[(0,n.Y)("span",{children:e*t+1})," ",(0,r.t)("to")," ",(0,n.Y)("span",{children:v})," ",(0,r.t)("of")," ",(0,n.Y)("span",{children:l})]}),(0,n.FD)(I,{children:[(0,n.Y)(O,{onClick:(s=0===e,()=>{s||o(0,t)}),disabled:0===e,children:(0,n.Y)(f.A,{})}),(0,n.Y)(O,{onClick:(d=0===e,()=>{d||o(e-1,t)}),disabled:0===e,children:(0,n.Y)(m.A,{})}),(0,n.FD)(Y,{children:[(0,r.t)("Page")," ",(0,n.Y)("span",{children:e+1})," ",(0,r.t)("of")," ",(0,n.Y)("span",{children:g})]}),(0,n.Y)(O,{onClick:(c=e>=g-1,()=>{c||o(e+1,t)}),disabled:e>=g-1,children:(0,n.Y)(y.A,{})}),(0,n.Y)(O,{onClick:(p=e>=g-1,()=>{p||o(g-1,t)}),disabled:e>=g-1,children:(0,n.Y)(C.A,{})})]})]})},j=function({value:e,onChange:t,searchOptions:l}){var r,i;return(0,n.Y)(E,{className:"search-select",value:e||(null!=(r=null==l||null==(i=l[0])?void 0:i.value)?r:""),options:l,onChange:t})},q=e=>{if(Array.isArray(e)&&e.length>0){var t,l;return[{colId:null==(t=e[0])?void 0:t.id,sort:(null==(l=e[0])?void 0:l.desc)?"desc":"asc"}]}return[]};var K=l(62193),Q=l.n(K),V=l(61036),Z=l(89866);function J(e,t,l,n,r,i,o){try{var a=e[i](o),u=a.value}catch(e){l(e);return}a.done?t(u):Promise.resolve(u).then(n,r)}function _(e){return function(){var t=this,l=arguments;return new Promise(function(n,r){var i=e.apply(t,l);function o(e){J(i,n,r,o,a,"next",e)}function a(e){J(i,n,r,o,a,"throw",e)}o(void 0)})}}function X(e,t,l,n,r,i,o){try{var a=e[i](o),u=a.value}catch(e){l(e);return}a.done?t(u):Promise.resolve(u).then(n,r)}function ee(){return(ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}p.syG.registerModules([p.JKr,p.Q90]);let et=new Map,el=(0,a.memo)(({gridHeight:e,data:t=[],colDefsFromProps:l,includeSearch:i,allowRearrangeColumns:o,pagination:u,pageSize:p,serverPagination:v,rowCount:f,onServerPaginationChange:m,serverPaginationData:y,onServerPageSizeChange:C,searchOptions:b,onSearchColChange:x,onSearchChange:w,onSortChange:S,id:F,percentMetrics:$,serverPageLength:k,hasServerPageLengthChanged:M,handleCellClicked:T,handleSelectionChanged:z,filters:D,renderTimeComparisonDropdown:N,cleanedTotals:P,showTotals:A,width:Y,onColumnStateChange:I,onFilterChanged:O,metricColumns:E=[],chartState:B})=>{let U,G,L=(0,a.useRef)(null),R=(0,a.useRef)(null),W=(0,a.useMemo)(()=>t,[t]),K=(0,a.useRef)(null),J=(0,a.useRef)(null),el=(0,a.useRef)(0),en=`search-${F}`,er=(U=(null==B?void 0:B.filterModel)&&!Q()(B.filterModel)?B.filterModel:void 0,G=v&&(null==y?void 0:y.agGridFilterModel)&&!Q()(y.agGridFilterModel)?y.agGridFilterModel:void 0,null!=U?U:G),ei=ee({},v&&{sort:{sortModel:q((null==y?void 0:y.sortBy)||[])}},er&&{filter:{filterModel:er}}),eo=(0,a.useMemo)(()=>({filter:!0,sortable:!0,resizable:!0,minWidth:100}),[]),ea=(0,a.useMemo)(()=>({height:e,width:Y}),[e,Y]),[eu,es]=(0,a.useState)(),[ed,ec]=(0,a.useState)((null==y?void 0:y.searchText)||""),ep=(0,a.useMemo)(()=>h()(e=>{w(e)},500),[w]);(0,a.useEffect)(()=>()=>{ep.cancel()},[ep]),(0,a.useEffect)(()=>{if(v&&et.get(en)&&document.activeElement!==R.current){var e;null==(e=R.current)||e.focus()}},[ed,v,en]);let eg=(0,a.useCallback)(()=>{et.set(en,!0)},[en]),ev=(0,a.useCallback)(()=>{et.set(en,!1)},[en]),eh=(0,a.useCallback)(({target:{value:e}})=>{v?(ec(e),ep(e)):es(e)},[v,ep,en]),ef=(0,a.useCallback)(e=>{var t,l;((e,t)=>{var l;if((({colId:e,sortDir:t,percentMetrics:l,serverPagination:n,gridInitialState:r})=>{var i,o;if(l.includes(e)||!n)return!1;let{colId:a="",sort:u}=(null==r||null==(o=r.sort)||null==(i=o.sortModel)?void 0:i[0])||{};return a!==e||u!==t})({colId:e,sortDir:t,percentMetrics:$,serverPagination:!!v,gridInitialState:ei})){if(v&&(null==(l=L.current)?void 0:l.api)&&I){let{api:l}=L.current;null==t?l.applyColumnState({defaultState:{sort:null}}):l.applyColumnState({defaultState:{sort:null},state:[{colId:e,sort:t,sortIndex:0}]});let n=(null==l.getColumnState?void 0:l.getColumnState.call(l))||[];I({columnState:n,sortModel:t?[{colId:e,sort:t,sortIndex:0}]:[],filterModel:(null==l.getFilterModel?void 0:l.getFilterModel.call(l))||{},timestamp:Date.now()})}if(null==t)return S([]);S([{id:e,key:e,desc:"desc"===t}])}})(null==e||null==(t=e.column)?void 0:t.colId,null==e||null==(l=e.column)?void 0:l.sort)},[v,ei,$,S]),em=(0,a.useCallback)(h()(()=>{var e;if(I&&(null==(e=L.current)?void 0:e.api))try{let{api:e}=L.current,t=e.getColumnState?e.getColumnState():[],l=e.getFilterModel?e.getFilterModel():{},n=t.filter(e=>e.sort).map(e=>({colId:e.colId,sort:e.sort,sortIndex:e.sortIndex||0})).sort((e,t)=>(e.sortIndex||0)-(t.sortIndex||0)),r={columnState:t,sortModel:n,filterModel:l,timestamp:Date.now()},i=JSON.stringify({columnOrder:t.map(e=>e.colId),sorts:n,filters:l});i!==J.current&&(J.current=i,I(r))}catch(e){console.warn("Error capturing AG Grid state:",e)}},d.Y.SLOW_DEBOUNCE),[I]),ey=(0,a.useCallback)(()=>{var e;return(e=function*(){el.current+=1;let e=el.current,t=yield _(function*(){var e,t;let l=document.activeElement;if(!(null==(e=L.current)?void 0:e.api))return{originalFilterModel:{},simpleFilters:[],complexWhere:void 0,havingClause:void 0,lastFilteredColumn:void 0,inputPosition:V.dZ.UNKNOWN};let n=L.current.api.getFilterModel(),r=(0,Z.Am)(n,E),{lastFilteredColumn:i,inputPosition:o}=yield(t=L.current.api,_(function*(){let e,r=V.dZ.UNKNOWN;for(let[s]of Object.entries(n)){var i,o,a,u;let n=yield t.getColumnFilterInstance(s);if(n){if(n.eConditionBodies){let t=n.eConditionBodies;if(null==(i=t[V.v3.FIRST])?void 0:i.contains(l)){r=V.dZ.FIRST,e=s;break}if(null==(o=t[V.v3.SECOND])?void 0:o.contains(l)){r=V.dZ.SECOND,e=s;break}}if(n.eJoinAnds){for(let t of n.eJoinAnds)if(null==(a=t.eGui)?void 0:a.contains(l)){r=V.dZ.FIRST,e=s;break}if(e)break}if(n.eJoinOrs){for(let t of n.eJoinOrs)if(null==(u=t.eGui)?void 0:u.contains(l)){r=V.dZ.FIRST,e=s;break}if(e)break}}}return{lastFilteredColumn:e,inputPosition:r}})());return{originalFilterModel:n,simpleFilters:r.simpleFilters,complexWhere:r.complexWhere,havingClause:r.havingClause,lastFilteredColumn:i,inputPosition:o}})();if(e===el.current){if(t.originalFilterModel&&Object.entries(t.originalFilterModel).some(([e,t])=>!!((null==t?void 0:t.filterType)==="text"&&(null==E?void 0:E.includes(e)))))return;!s()(null==y?void 0:y.agGridFilterModel,t.originalFilterModel)&&O&&O(t)}},function(){var t=this,l=arguments;return new Promise(function(n,r){var i=e.apply(t,l);function o(e){X(i,n,r,o,a,"next",e)}function a(e){X(i,n,r,o,a,"throw",e)}o(void 0)})})()},[O,E,null==y?void 0:y.agGridFilterModel]);return(0,a.useEffect)(()=>{M&&(null==y?void 0:y.pageSize)&&!s()(null==y?void 0:y.pageSize,k)&&C(k)},[M]),(0,a.useEffect)(()=>{var e;(null==(e=L.current)?void 0:e.api)&&L.current.api.sizeColumnsToFit()},[Y]),(0,a.useEffect)(()=>{var e,t;(!D||0===Object.keys(D).length)&&(null==(t=L.current)||null==(e=t.api)?void 0:e.getSelectedRows().length)&&L.current.api.deselectAll()},[D]),(0,n.FD)("div",{style:ea,ref:K,children:[(0,n.FD)("div",{className:"dropdown-controls-container",children:[N&&(0,n.Y)("div",{className:"time-comparison-dropdown",children:N()}),i&&(0,n.FD)("div",{className:"search-container",children:[v&&(0,n.FD)("div",{className:"search-by-text-container",children:[(0,n.FD)("span",{className:"search-by-text",children:[" ",(0,r.t)("Search by"),":"]}),(0,n.Y)(j,{onChange:x,searchOptions:b,value:(null==y?void 0:y.searchColumn)||""})]}),(0,n.Y)("div",{className:"input-wrapper",children:(0,n.FD)("div",{className:"input-container",children:[(0,n.Y)(g.A,{}),(0,n.Y)("input",{ref:R,value:v?ed:eu||"",type:"text",id:"filter-text-box",placeholder:(0,r.t)("Search"),onInput:eh,onFocus:eg,onBlur:ev})]})})]})]}),(0,n.Y)(c.lQ,{ref:L,onGridReady:e=>{if(e.api.sizeColumnsToFit(),(null==B?void 0:B.columnState)&&e.api)try{let t=function(e,t){if(!Array.isArray(e)||0===e.length)return null;let l=function e(t){return t.flatMap(t=>"children"in t&&Array.isArray(t.children)&&t.children.length>0?e(t.children):"string"==typeof t.field?[t.field]:[])}(t),n=new Set(l),r=e.filter(e=>"string"==typeof e.colId&&n.has(e.colId));if(0===r.length)return null;let i=new Set(r.map(e=>e.colId));return{columnState:r,applyOrder:l.length===i.size&&l.every(e=>i.has(e))}}(B.columnState,l);t&&(null==e.api.applyColumnState||e.api.applyColumnState.call(e.api,{state:t.columnState,applyOrder:t.applyOrder}))}catch(e){}},className:"ag-container",rowData:W,headerHeight:36,rowHeight:30,columnDefs:l,defaultColDef:eo,onColumnGroupOpened:e=>e.api.sizeColumnsToFit(),rowSelection:"multiple",animateRows:!0,onCellClicked:T,onSelectionChanged:z,onFilterChanged:ey,onStateUpdated:em,initialState:ei,maintainColumnOrder:!0,suppressAggFuncInHeader:!0,enableCellTextSelection:!0,quickFilterText:v?"":eu,suppressMovableColumns:!o,pagination:u,paginationPageSize:p,paginationPageSizeSelector:V.xp,suppressDragLeaveHidesColumns:!0,pinnedBottomRowData:A?[P]:void 0,localeText:{next:(0,r.t)("Next"),previous:(0,r.t)("Previous"),page:(0,r.t)("Page"),more:(0,r.t)("More"),to:(0,r.t)("to"),of:(0,r.t)("of"),first:(0,r.t)("First"),last:(0,r.t)("Last"),loadingOoo:(0,r.t)("Loading..."),selectAll:(0,r.t)("Select All"),searchOoo:(0,r.t)("Search..."),blanks:(0,r.t)("Blanks"),filterOoo:(0,r.t)("Filter"),applyFilter:(0,r.t)("Apply Filter"),equals:(0,r.t)("Equals"),notEqual:(0,r.t)("Not Equal"),lessThan:(0,r.t)("Less Than"),greaterThan:(0,r.t)("Greater Than"),lessThanOrEqual:(0,r.t)("Less Than or Equal"),greaterThanOrEqual:(0,r.t)("Greater Than or Equal"),inRange:(0,r.t)("In Range"),contains:(0,r.t)("Contains"),notContains:(0,r.t)("Not Contains"),startsWith:(0,r.t)("Starts With"),endsWith:(0,r.t)("Ends With"),andCondition:(0,r.t)("AND"),orCondition:(0,r.t)("OR"),group:(0,r.t)("Group"),columns:(0,r.t)("Columns"),filters:(0,r.t)("Filters"),valueColumns:(0,r.t)("Value Columns"),pivotMode:(0,r.t)("Pivot Mode"),groups:(0,r.t)("Groups"),values:(0,r.t)("Values"),pivots:(0,r.t)("Pivots"),toolPanelButton:(0,r.t)("Tool Panel"),pinColumn:(0,r.t)("Pin Column"),valueAggregation:(0,r.t)("Value Aggregation"),autosizeThiscolumn:(0,r.t)("Autosize This Column"),autosizeAllColumns:(0,r.t)("Autosize All Columns"),groupBy:(0,r.t)("Group By"),ungroupBy:(0,r.t)("Ungroup By"),resetColumns:(0,r.t)("Reset Columns"),expandAll:(0,r.t)("Expand All"),collapseAll:(0,r.t)("Collapse All"),toolPanel:(0,r.t)("Tool Panel"),export:(0,r.t)("Export"),csvExport:(0,r.t)("CSV Export"),excelExport:(0,r.t)("Excel Export"),excelXmlExport:(0,r.t)("Excel XML Export"),sum:(0,r.t)("Sum"),min:(0,r.t)("Min"),max:(0,r.t)("Max"),none:(0,r.t)("None"),count:(0,r.t)("Count"),average:(0,r.t)("Average"),copy:(0,r.t)("Copy"),copyWithHeaders:(0,r.t)("Copy with Headers"),paste:(0,r.t)("Paste"),sortAscending:(0,r.t)("Sort Ascending"),sortDescending:(0,r.t)("Sort Descending"),sortUnSort:(0,r.t)("Clear Sort")},context:{onColumnHeaderClicked:ef,initialSortState:q((null==y?void 0:y.sortBy)||[]),lastFilteredColumn:null==y?void 0:y.lastFilteredColumn,lastFilteredInputPosition:null==y?void 0:y.lastFilteredInputPosition}}),v&&(0,n.Y)(H,{currentPage:(null==y?void 0:y.currentPage)||0,pageSize:M?k:(null==y?void 0:y.pageSize)||10,totalRows:f||0,pageSizeOptions:[10,20,50,100,200],onServerPaginationChange:m,onServerPageSizeChange:C,sliceId:F})]})});el.displayName="AgGridDataTable";let en=(0,a.memo)(el);var er=l(656),ei=l(22022),eo=l(26067),ea=l(13341),eu=l(14103);let es=({comparisonColumns:e,selectedComparisonColumns:t,onSelectionChange:l})=>{let[i,o]=(0,a.useState)(!1),u=e[0].key;return(0,n.Y)(ei.Dropdown,{placement:"bottomRight",open:i,onOpenChange:e=>{o(e)},menu:{multiple:!0,onClick:e=>{let{key:n}=e;n===u?l([u]):t.includes(u)?l([n]):l(t.includes(n)?t.filter(e=>e!==n):[...t,n])},onBlur:()=>{3===t.length&&l([e[0].key])},selectedKeys:t,items:[{key:"all",label:(0,n.Y)(B,{children:(0,r.t)("Select columns that will be displayed in the table. You can multiselect columns.")}),type:"group",children:e.map(e=>({key:e.key,label:(0,n.FD)(n.FK,{children:[(0,n.Y)(U,{children:e.label}),(0,n.Y)(G,{children:t.includes(e.key)&&(0,n.Y)(eo.A,{})})]})}))}]},trigger:["click"],children:(0,n.FD)("span",{children:[(0,n.Y)(ea.A,{})," ",(0,n.Y)(eu.A,{})]})})},ed=e=>{let t=e.data[e.colDef.field],l=e.colDef.valueFormatter;if(!t||!l)return null;let n=parseFloat(String(l({value:t})).replace("%","").trim());return Number.isNaN(n)?null:n},ec=(e,t)=>{if(null==t)return -1;let l=new Date(t);if(Number.isNaN(l.getTime()))return -1;let n=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),r=Date.UTC(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate());return r<n?-1:+(r>n)};var ep=l(58442);let eg=e=>e.isMetric||e.isPercentMetric?V.QH.queryTotal:e.isNumeric?"sum":void 0;var ev=l(79927),eh=l(29248),ef=l(8563);let em=(0,r.t)("Show total aggregations of selected metrics. Note that row limit does not apply to the result.");var ey=l(84140);let eC=x.styled.div`
  ${()=>`
    font-weight: bold;
  `}
`,eb=x.styled.div`
  display: flex;
  background-color: ${({backgroundColor:e})=>e||"transparent"};
  justify-content: ${({align:e})=>e||"left"};
`,ex=x.styled.div`
  margin-right: 10px;
  color: ${({arrowColor:e})=>e||"inherit"};
`,ew=x.styled.div`
  position: absolute;
  left: ${({offset:e})=>`${e}%`};
  top: 0;
  height: 100%;
  width: ${({percentage:e})=>`${e}%`};
  background-color: ${({background:e})=>e};
  z-index: 1;
`;var eS=l(31656),eF=l(75163);let e$=()=>(0,n.FD)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:[(0,n.Y)("rect",{x:"3",y:"6",width:"18",height:"2",rx:"1"}),(0,n.Y)("rect",{x:"6",y:"11",width:"12",height:"2",rx:"1"}),(0,n.Y)("rect",{x:"9",y:"16",width:"6",height:"2",rx:"1"})]}),ek=({size:e=14})=>(0,n.FD)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.Y)("circle",{cx:"8",cy:"3",r:"1.2"}),(0,n.Y)("circle",{cx:"8",cy:"8",r:"1.2"}),(0,n.Y)("circle",{cx:"8",cy:"13",r:"1.2"})]}),eM=({content:e,children:t,isOpen:l,onClose:r})=>{let[i,o]=(0,a.useState)({top:0,left:0}),u=(0,a.useRef)(null),s=(0,a.useRef)(null),d=e=>{var t;!s.current||s.current.contains(e.target)||(null==(t=u.current)?void 0:t.contains(e.target))||r()};return(0,a.useEffect)(()=>{let e=()=>{var e,t,l;let n=null==(e=u.current)?void 0:e.getBoundingClientRect();if(n){let e=(null==(t=s.current)?void 0:t.offsetWidth)||200,r=window.innerWidth,i=n.left+10+160+e;o({top:n.bottom+8,left:Math.max(0,n.right-((null==(l=s.current)?void 0:l.offsetWidth)||0)+170*(i<=r))})}};return l&&(e(),document.addEventListener("mousedown",d),window.addEventListener("scroll",e),window.addEventListener("resize",e)),()=>{document.removeEventListener("mousedown",d),window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}},[l]),(0,n.FD)(z,{children:[(0,a.cloneElement)(t,{ref:u}),l&&(0,n.Y)(D,{ref:s,style:{top:`${i.top}px`,left:`${i.left}px`},children:e})]})};function eT(e,t,l,n,r,i,o){try{var a=e[i](o),u=a.value}catch(e){l(e);return}a.done?t(u):Promise.resolve(u).then(n,r)}function ez(e){return function(){var t=this,l=arguments;return new Promise(function(n,r){var i=e.apply(t,l);function o(e){eT(i,n,r,o,a,"next",e)}function a(e){eT(i,n,r,o,a,"throw",e)}o(void 0)})}}let eD=({displayName:e,enableSorting:t,setSort:l,context:i,column:o,api:u})=>{var s;let{initialSortState:d,onColumnHeaderClicked:c,lastFilteredColumn:p,lastFilteredInputPosition:g}=i,v=null==o?void 0:o.getColId(),h=null==o?void 0:o.getColDef(),f=o.getUserProvidedColDef(),m=null==h||null==(s=h.context)?void 0:s.isPercentMetric,[y,C]=(0,a.useState)(!1),[b,x]=(0,a.useState)(!1),w=(0,a.useRef)(null),z=null==o?void 0:o.isFilterActive(),D=null==d?void 0:d[0],N=null==f?void 0:f.isMain,P=!N&&(null==f?void 0:f.timeComparisonKey),A=N?v.replace("Main","").trim():v,Y=()=>{c({column:{colId:A,sort:null}}),l(null,!1)},I=e=>{c({column:{colId:A,sort:e}}),l(e,!1)};(0,a.useEffect)(()=>{if(p===v&&!y){let e=setTimeout(()=>ez(function*(){C(!0);let e=yield u.getColumnFilterInstance(o),t=null==e?void 0:e.eGui;if(t&&w.current&&(w.current.innerHTML="",w.current.appendChild(t),null==e?void 0:e.eConditionBodies)){let t=e.eConditionBodies[g===V.dZ.SECOND?V.v3.SECOND:V.v3.FIRST];if(t){let e=t.querySelector(V.cH);null==e||e.focus()}}})(),V.in);return()=>clearTimeout(e)}},[p,v,g]);let O=(null==D?void 0:D.colId)===v?null==D?void 0:D.sort:null,E=(0,n.FD)(T,{children:[!P&&(!O||"desc"===O)&&(0,n.FD)("div",{onClick:()=>I("asc"),className:"menu-item",children:[(0,n.Y)(eS.A,{})," ",(0,r.t)("Sort Ascending")]}),!P&&(!O||"asc"===O)&&(0,n.FD)("div",{onClick:()=>I("desc"),className:"menu-item",children:[(0,n.Y)(eF.A,{})," ",(0,r.t)("Sort Descending")]}),D&&(null==D?void 0:D.colId)===v&&(0,n.FD)("div",{onClick:Y,className:"menu-item",children:[(0,n.Y)("span",{style:{fontSize:16},children:"↻"})," ",(0,r.t)("Clear Sort")]})]});return(0,n.FD)(S,{children:[(0,n.FD)(F,{onClick:()=>{if(!t||P)return;let e=(null==D?void 0:D.colId)!==v?"asc":(null==D?void 0:D.sort)==="asc"?"desc":null;e?I(e):Y()},className:"custom-header",children:[(0,n.Y)($,{children:e}),(0,n.Y)(k,{children:((e,t)=>{if(!(null==e?void 0:e.length)||!t)return null;let{colId:l,sort:r}=e[0];return l===t?"asc"===r?(0,n.Y)(eS.A,{}):"desc"===r?(0,n.Y)(eF.A,{}):null:null})(d,v)})]}),(0,n.Y)(eM,{content:(0,n.Y)("div",{ref:w}),isOpen:y,onClose:()=>C(!1),children:(0,n.Y)(M,{className:"header-filter",onClick:e=>ez(function*(){e.stopPropagation(),C(!y);let t=yield u.getColumnFilterInstance(o),l=null==t?void 0:t.eGui;l&&w.current&&(w.current.innerHTML="",w.current.appendChild(l))})(),isFilterActive:z,children:(0,n.Y)(e$,{})})}),!m&&!P&&(0,n.Y)(eM,{content:E,isOpen:b,onClose:()=>x(!1),children:(0,n.Y)("div",{className:"three-dots-menu",onClick:e=>{e.stopPropagation(),x(!b)},children:(0,n.Y)(ek,{})})})]})};var eN=l(72255),eP=l(66155),eA=l(3102);function eY(){return(eY=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}let eI=e=>{var t;let l=null==(t=e.data)?void 0:t[e.colDef.field];return l instanceof ep.A&&null===l.input?null:l},eO=[{displayKey:"serverEquals",displayName:"Equals",predicate:()=>!0,numberOfInputs:1},{displayKey:"serverNotEqual",displayName:"Not Equal",predicate:()=>!0,numberOfInputs:1},{displayKey:"serverBefore",displayName:"Before",predicate:()=>!0,numberOfInputs:1},{displayKey:"serverAfter",displayName:"After",predicate:()=>!0,numberOfInputs:1},{displayKey:"serverInRange",displayName:"In Range",predicate:()=>!0,numberOfInputs:2},{displayKey:"serverBlank",displayName:"Blank",predicate:()=>!0,numberOfInputs:0},{displayKey:"serverNotBlank",displayName:"Not blank",predicate:()=>!0,numberOfInputs:0}];var eE=l(65802);let eB=({key:e,values:t,timeGrain:l,timestampFormatter:n})=>{if(0===t.length)return{dataMask:{extraFormData:{filters:[]},filterState:{label:null,value:null,filters:null}}};let r=e===eE.Tf,i=t.map(e=>r?n(e):e).join(", ");return{dataMask:{extraFormData:{filters:[{col:e,op:"IN",val:t.map(e=>e instanceof Date?e.getTime():e),grain:r?l:void 0}]},filterState:{label:i,value:[t],filters:{[e]:t}}}}};function eU(){return(eU=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}function eG(e){var t;let l,{height:u,columns:d,data:c,includeSearch:p,allowRearrangeColumns:g,pageSize:v,serverPagination:h,rowCount:f,setDataMask:m,serverPaginationData:y,slice_id:C,percentMetrics:b,hasServerPageLengthChanged:w,serverPageLength:S,emitCrossFilters:F,filters:$,timeGrain:k,isRawRecords:M,alignPositiveNegative:T,showCellBars:z,isUsingTimeComparison:D,colorPositiveNegative:N,totals:P,showTotals:A,columnColorFormatters:Y,basicColorFormatters:I,width:O,onChartStateChange:E,chartState:B,metricSqlExpressions:U}=e,[G,H]=(0,a.useState)([]),j=(0,a.useMemo)(()=>d.filter(e=>e.isMetric||e.isPercentMetric).map(e=>e.key),[d]);(0,a.useEffect)(()=>{let e=d.filter(e=>(null==e?void 0:e.dataType)===o.GenericDataType.String).map(e=>({value:e.key,label:e.label}));s()(e,G)||H(e||[])},[d]),(0,a.useEffect)(()=>{var e,t;if(!h||!y||!f)return;let l=null!=(e=y.currentPage)?e:0,n=Math.ceil(f/(null!=(t=y.pageSize)?t:S));if(l>=n&&n>0){let e=eU({},y,{currentPage:Math.max(0,n-1)});(0,er.F)(m,e)}},[f,h,y,S,m]);let q=[{key:"all",label:(0,r.t)("Display all")},{key:"#",label:"#"},{key:"△",label:"△"},{key:"%",label:"%"}],[K,Q]=(0,a.useState)([null==q||null==(t=q[0])?void 0:t.key]),Z=(0,a.useCallback)(e=>{E&&E(e)},[E]),J=(0,a.useCallback)(e=>{if(!h)return;if(E&&B){let t=e.originalFilterModel&&Object.keys(e.originalFilterModel).length>0?e.originalFilterModel:void 0;E(eU({},B,{filterModel:t,timestamp:Date.now()}))}let t=eU({},y,{agGridFilterModel:e.originalFilterModel&&Object.keys(e.originalFilterModel).length>0?e.originalFilterModel:void 0,agGridSimpleFilters:e.simpleFilters,agGridComplexWhere:e.complexWhere,agGridHavingClause:e.havingClause,lastFilteredColumn:e.lastFilteredColumn,lastFilteredInputPosition:e.inputPosition,currentPage:0,metricSqlExpressions:U});(0,er.F)(m,t)},[m,h,y,E,B,U]),_=(0,a.useMemo)(()=>D?0===K.length||K.includes("all")?null==d?void 0:d.filter(e=>{var t;return(null==e||null==(t=e.config)?void 0:t.visible)!==!1}):d.filter(e=>!e.originalLabel||((null==e?void 0:e.label)||"").includes("Main")||K.includes(e.label)).filter(e=>{var t;return(null==e||null==(t=e.config)?void 0:t.visible)!==!1}):d,[d,K]),X=(({columns:e,data:t,serverPagination:l,isRawRecords:i,defaultAlignPN:u,showCellBars:s,colorPositiveNegative:d,totals:c,columnColorFormatters:p,allowRearrangeColumns:g,basicColorFormatters:v,isUsingTimeComparison:h,emitCrossFilters:f,alignPositiveNegative:m,slice_id:y})=>{let C=(0,x.useTheme)(),b=(0,a.useCallback)(a=>{var c,b,w,S,F;let $,k,M,T,{config:z,isMetric:D,isPercentMetric:N,isNumeric:P,key:A,dataType:Y,originalLabel:I}=a,O=void 0===z.alignPositiveNegative?u:z.alignPositiveNegative,E=P&&Array.isArray(p)&&p.length>0,B=h&&Array.isArray(v)&&v.length>0,U=null==A?void 0:A.includes("Main"),G=U?A.replace("Main","").trim():A,W=Y===o.GenericDataType.String||Y===o.GenericDataType.Temporal,H=Y===o.GenericDataType.Boolean,j=!B&&!E&&s&&(null==(c=z.showCellBars)||c)&&(D||i||N)&&function(e,t,l){let n=l.map(t=>{let l=t[e];return l instanceof Number?l.valueOf():l}).filter(e=>"number"==typeof e&&Number.isFinite(e));if(n.length>0){let e=function(e){let t;for(let l of e)null!=l&&(t<l||void 0===t&&l>=l)&&(t=l);return t}(n.map(Math.abs));if(t)return[0,null!=e?e:0];let l=function(e){let t,l;for(let n of e)null!=n&&(void 0===t?n>=n&&(t=l=n):(t>n&&(t=n),l<n&&(l=n)));return[t,l]}(n);return null!=l?l:[0,0]}return null}(A,O||m,t),q=(e=>{switch(e.dataType){case o.GenericDataType.Numeric:return"agNumberColumnFilter";case o.GenericDataType.String:return"agTextColumnFilter";case o.GenericDataType.Temporal:return"agDateColumnFilter";default:return!0}})(a);return eY({field:G,headerName:($=!!(null==a?void 0:a.originalLabel),k=null==a||null==(w=a.key)?void 0:w.includes("Main"),M=(null==a||null==(S=a.config)?void 0:S.displayTypeIcon)!==!1,T=!!(null==a||null==(F=a.config)?void 0:F.customColumnName),($&&T?"displayTypeIcon"in a.config&&M&&!k?`${a.label} ${a.config.customColumnName}`:a.config.customColumnName:$&&k?a.originalLabel:$&&!M?"":null==a?void 0:a.label)||""),valueFormatter:e=>((e,t)=>{let{value:l,node:n}=e;return(0,eN.A)(l)&&""!==l&&!(l instanceof ep.A&&null===l.input)?(null==t.formatter?void 0:t.formatter.call(t,l))||l:(null==n?void 0:n.level)===-1?"":"N/A"})(e,a),valueGetter:e=>((e,t)=>{var l,n;if(null==e||null==(l=e.colDef)?void 0:l.isMain){let t=`Main ${e.column.getColId()}`;return e.data[t]}return(0,eN.A)(null==(n=e.data)?void 0:n[e.column.getColId()])?e.data[e.column.getColId()]:t.isNumeric?void 0:""})(e,a),cellStyle:e=>{var t,l;let n=(null==(t=e.node)?void 0:t.rowPinned)!=null||e.rowIndex%2==0?C.colorBgBase:C.colorFillQuaternary,r=(null==(l=e.node)?void 0:l.rowPinned)!=null?n:C.colorFillSecondary;return(e=>{var t,l,n;let r,i,{value:o,colDef:a,rowIndex:u,hasBasicColorFormatters:s,basicColorFormatters:d,hasColumnColorFormatters:c,columnColorFormatters:p,col:g,node:v,cellSurfaceColor:h,hoverCellSurfaceColor:f}=e;c&&p.filter(e=>{var t,l;return((null==e||null==(t=e.column)?void 0:t.includes("Main"))?null==e||null==(l=e.column)?void 0:l.replace("Main","").trim():null==e?void 0:e.column)===a.field}).forEach(e=>{let t=(!!o||0===o)&&e.getColorFromValue(o);t&&(e.objectFormatting===eP.yQ.TEXT_COLOR||e.toTextColor?i=t:e.objectFormatting!==eP.yQ.CELL_BAR&&(r=t))}),s&&(null==g?void 0:g.metricName)&&(null==v?void 0:v.rowPinned)!=="bottom"&&(r=null==d||null==(n=d[u])||null==(l=n[g.metricName])?void 0:l.backgroundColor);let m=(null==g||null==(t=g.config)?void 0:t.horizontalAlign)||((null==g?void 0:g.isNumeric)?"right":"left"),y=(0,eA.sg)({backgroundColor:r,color:i},h),C=(0,eA.sg)({backgroundColor:r,color:i},f);return{backgroundColor:r||"",color:"","--ag-cell-value-color":y||"","--ag-cell-value-hover-color":C||"",textAlign:m}})(eY({},e,{hasColumnColorFormatters:E,columnColorFormatters:p,hasBasicColorFormatters:B,basicColorFormatters:v,col:a,cellSurfaceColor:n,hoverCellSurfaceColor:r}))},cellClass:e=>(e=>{let{col:t,emitCrossFilters:l}=e,n="";if(l){var r;(null==t?void 0:t.isMetric)||(n+=" dt-is-filter"),(null==t||null==(r=t.config)?void 0:r.truncateLongCells)&&(n+=" dt-truncate-cell")}return n})(eY({},e,{col:a,emitCrossFilters:f})),minWidth:null!=(b=null==z?void 0:z.columnWidth)?b:100,filter:q},N&&{filterValueGetter:ed},Y===o.GenericDataType.Temporal&&{filterValueGetter:eI,filterParams:l?{filterOptions:eO,comparator:V.L1}:{comparator:ec}},{cellDataType:(e=>{switch(e.dataType){case o.GenericDataType.Numeric:return"number";case o.GenericDataType.Temporal:return"date";case o.GenericDataType.Boolean:return"boolean";default:return"text"}})(a),defaultAggFunc:eg(a),initialAggFunc:eg(a)},!(D||N)&&{allowedAggFuncs:["sum","min","max","count","avg","first","last"]},H?{cellRenderer:"agCheckboxCellRenderer",cellRendererParams:{disabled:!0}}:{cellRenderer:e=>W?(e=>{let{node:t,api:l,colDef:i,columns:o,allowRenderHtml:a,value:u,valueFormatted:s}=e;if((null==t?void 0:t.rowPinned)==="bottom"){let e=l.getAllGridColumns().filter(e=>e.isVisible()),t=!e[0].getAggFunc();if(e.length>1&&t&&o[0].key===(null==i?void 0:i.field))return(0,n.FD)(L,{children:[(0,n.Y)(R,{children:(0,r.t)("Summary")}),(0,n.Y)(ef.m,{overlay:em,children:(0,n.Y)(eh.A,{})})]});if(!u)return null}if(!("string"==typeof u||u instanceof Date))return null!=s?s:u;if("string"==typeof u){if(u.startsWith("http://")||u.startsWith("https://"))return(0,n.Y)("a",{href:u,target:"_blank",rel:"noopener noreferrer",children:u});if(a&&(0,ev.fE)(u))return(0,n.Y)("div",{dangerouslySetInnerHTML:{__html:(0,ev.pn)(u)}})}return(0,n.Y)("div",{children:null!=s?s:u})})(e):(e=>{var t,l,r,i,o,a;let u,{value:s,valueFormatted:d,node:c,hasBasicColorFormatters:p,col:g,basicColorFormatters:v,valueRange:h,alignPositiveNegative:f,colorPositiveNegative:m}=e,y=(u=(0,x.useTheme)(),(0,ey.A)(u.colorBgContainer).isDark()),C=m?(0,x.useTheme)():null;if((null==c?void 0:c.rowPinned)==="bottom")return(0,n.Y)(eC,{children:null!=d?d:s});let b="",w="";p&&(null==g?void 0:g.metricName)&&(b=null==v||null==(r=v[null==c?void 0:c.rowIndex])||null==(l=r[g.metricName])?void 0:l.mainArrow,w=null==v||null==(a=v[null==c?void 0:c.rowIndex])||null==(o=a[g.metricName])||null==(i=o.arrowColor)?void 0:i.toLowerCase());let S=(null==g||null==(t=g.config)?void 0:t.horizontalAlign)||((null==g?void 0:g.isNumeric)?"right":"left");if(!h)return(0,n.FD)(eb,{align:S,children:[b&&(0,n.Y)(ex,{arrowColor:w,children:b}),(0,n.Y)("div",{children:null!=d?d:s})]});let F=function({value:e,valueRange:t,alignPositiveNegative:l}){let[n,r]=t;return l?Math.abs(Math.round(e/r*100)):Math.round(Math.abs(e)/(Math.abs(Math.max(r,0))+Math.abs(Math.min(n,0)))*100)}({value:s,valueRange:h,alignPositiveNegative:f}),$=function({value:e,valueRange:t,alignPositiveNegative:l}){if(l)return 0;let[n,r]=t,i=Math.abs(Math.min(n,0));return Math.round(Math.min(i+e,i)/(Math.abs(Math.max(r,0))+i)*100)}({value:s,valueRange:h,alignPositiveNegative:f}),k=function({value:e,colorPositiveNegative:t=!1,isDarkTheme:l=!1,theme:n}){return t?`rgba(${150*(e<0)},${150*(e>=0)},0,0.2)`:"transparent"}({value:s,colorPositiveNegative:m,isDarkTheme:y,theme:C});return(0,n.FD)("div",{children:[(0,n.Y)(ew,{offset:$,percentage:F,background:k}),null!=d?d:s]})})(e),cellRendererParams:{allowRenderHtml:!0,columns:e,hasBasicColorFormatters:B,col:a,basicColorFormatters:v,valueRange:j,alignPositiveNegative:O||m,colorPositiveNegative:d}},{context:{isMetric:D,isPercentMetric:N,isNumeric:P},lockPinned:!g,sortable:!l||!N},l&&{headerComponent:eD,comparator:()=>0,headerComponentParams:{slice_id:y}},{isMain:U},!U&&I&&{columnGroupShow:"open"},I&&{timeComparisonKey:I},{wrapText:!(null==z?void 0:z.truncateLongCells),autoHeight:!(null==z?void 0:z.truncateLongCells)})},[e,t,u,p,v,s,d,h,i,f,g,l,m,C.colorBgBase,C.colorFillSecondary,C.colorFillQuaternary]),w=JSON.stringify(e);return(0,a.useMemo)(()=>{let t=new Map;return e.reduce((e,l)=>{let n=b(l);if(null==l?void 0:l.originalLabel)if(t.has(l.originalLabel))e[t.get(l.originalLabel)].children.push(n);else{let r={headerName:l.originalLabel,marryChildren:!0,openByDefault:!0,children:[n]};t.set(l.originalLabel,e.length),e.push(r)}else e.push(n);return e},[])},[w,b])})({columns:D?_:d,data:c,serverPagination:h,isRawRecords:M,defaultAlignPN:T,showCellBars:z,colorPositiveNegative:N,totals:P,columnColorFormatters:Y,allowRearrangeColumns:g,basicColorFormatters:I,isUsingTimeComparison:D,emitCrossFilters:F,alignPositiveNegative:T,slice_id:C}),ee=(l=u,p&&(l-=16),l-80),et=(0,a.useCallback)(function(e,t){return!!$&&!!$[e]&&$[e].some(e=>e===t||e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime())},[$]),el=(0,a.useCallback)(e=>M?String(null!=e?e:""):(0,i.PT)(k)(e),[k,M]),ei=(0,a.useRef)(null),eo=(0,a.useCallback)(e=>{var t,l;if(!F||!e.column)return;let n=e.column.getColDef();if((null==(t=n.context)?void 0:t.isMetric)||(null==(l=n.context)?void 0:l.isPercentMetric))return;let r=e.column.getColId();ei.current=r;let i=e.api.getSelectedNodes();1===i.length&&i[0]===e.node&&et(r,e.value)&&(e.node.setSelected(!1),m(eB({key:r,values:[],timeGrain:k,timestampFormatter:el}).dataMask))},[F,et,m,k,el]),ea=(0,a.useCallback)(e=>{if(!F||!ei.current)return;let t=ei.current,l=e.api.getSelectedRows().map(e=>e[t]).filter(e=>null!=e);m(eB({key:t,values:l,timeGrain:k,timestampFormatter:el}).dataMask)},[F,m,k,el]),eu=(0,a.useCallback)((e,t)=>{let l=eU({},y,{currentPage:e,pageSize:t,lastFilteredColumn:void 0,lastFilteredInputPosition:void 0});(0,er.F)(m,l)},[m]),eS=(0,a.useCallback)(e=>{let t=eU({},y,{currentPage:0,pageSize:e,lastFilteredColumn:void 0,lastFilteredInputPosition:void 0});(0,er.F)(m,t)},[m]),eF=(0,a.useCallback)(e=>{var t;let l=eU({},y,{searchColumn:(null==y?void 0:y.searchColumn)||(null==(t=G[0])?void 0:t.value),searchText:e,currentPage:0,lastFilteredColumn:void 0,lastFilteredInputPosition:void 0});(0,er.F)(m,l)},[m,G]),e$=(0,a.useCallback)(e=>{if(!h)return;let t=eU({},y,{sortBy:e,lastFilteredColumn:void 0,lastFilteredInputPosition:void 0});(0,er.F)(m,t)},[m,h]);return(0,n.Y)(W,{height:u,children:(0,n.Y)(en,{gridHeight:ee,data:c||[],colDefsFromProps:X,includeSearch:!!p,allowRearrangeColumns:!!g,pagination:!!v&&!h,pageSize:v||0,serverPagination:h,rowCount:f,onServerPaginationChange:eu,onServerPageSizeChange:eS,serverPaginationData:y,searchOptions:G,onSearchColChange:e=>{if(!s()(e,null==y?void 0:y.searchColumn)){let t=eU({},y,{searchColumn:e,searchText:"",lastFilteredColumn:void 0,lastFilteredInputPosition:void 0});(0,er.F)(m,t)}},onSearchChange:eF,onSortChange:e$,onFilterChanged:J,metricColumns:j,id:C,handleCellClicked:eo,handleSelectionChanged:ea,filters:$,percentMetrics:b,serverPageLength:S,hasServerPageLengthChanged:w,renderTimeComparisonDropdown:D?()=>(0,n.Y)(es,{comparisonColumns:q,selectedComparisonColumns:K,onSelectionChange:Q}):()=>null,cleanedTotals:P||{},showTotals:A,width:O,onColumnStateChange:Z,chartState:B})})}}}]);