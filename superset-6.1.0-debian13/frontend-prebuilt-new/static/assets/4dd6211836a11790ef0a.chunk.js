"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9918],{72624(e,t,a){a.d(t,{Kg:()=>g,J8:()=>u,Pz:()=>b,tg:()=>h,pY:()=>p,px:()=>m});var i=a(27124),s=a(65802),n=a(77092),r=a(80873);let o=e=>null!=e&&"function"==typeof e[Symbol.iterator];var l=a(52149),d=a(89495);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}let h=({datasetId:e,dependencies:t={},groupby:a,defaultDataMask:i,controlValues:s,filterType:n,sortMetric:o,adhoc_filters:l,time_range:h,granularity_sqla:p,type:u,dashboardId:m,id:g})=>{var b,f,v;let y,x={};return e&&(x.datasource=`${e}__table`),a&&(x.groupby=[a]),o&&(x.sortMetric=o),c({},s,x,{adhoc_filters:null!=l?l:[],extra_filters:[],extra_form_data:t,granularity_sqla:p,metrics:["count"],row_limit:(null==(y=(0,d.Ay)())||null==(v=y.common)||null==(f=v.conf)?void 0:f.NATIVE_FILTER_DEFAULT_ROW_LIMIT)||1e3,showSearch:!0,defaultValue:null==i||null==(b=i.filterState)?void 0:b.value,time_range:h,url_params:(0,r.A)("regular"),inView:!0,viz_type:n,type:u,dashboardId:m,native_filter_id:g})};function p(e={},t={}){let a={};return s.t1.forEach(i=>{let s=e[i],n=t[i],r=[...o(s)?s:[],...o(n)?n:[]];r.length&&(a[i]=r)}),s.zk.forEach(i=>{let s=e[i];void 0!==s&&(a[i]=s);let n=t[i];void 0!==n&&(a[i]=n)}),a}function u(e,t){let a={};return t.forEach(t=>{var i,s;a=p(a,null!=(i=null==(s=e[t])?void 0:s.extraFormData)?i:{})}),a}function m(e){return!e.includes(n.nS.NativeFilter)||e.includes(n.nS.InteractiveChart)}let g=(e,t)=>new Set(t.map(t=>{var a,i;return null==(i=e.find(e=>{var a;return(null==e||null==(a=e.meta)?void 0:a.chartId)===t}))||null==(a=i.parents)?void 0:a.filter(e=>e.startsWith(`${l.B8}-`))}).filter(e=>void 0!==e).flat()),b=e=>null==e?"":"string"==typeof e||"number"==typeof e?`${e}`:Array.isArray(e)?e.join(", "):"object"==typeof e?JSON.stringify(e):(0,i.t)("Unknown value")},58348(e,t,a){a.d(t,{$:()=>u});var i=a(2445),s=a(8563),n=a(27124),r=a(85614);let o=r.styled.div`
  ${({theme:e})=>`
    .tooltip-header {
      font-size: ${e.fontSize}px;
      font-weight: ${e.fontWeightStrong};
    }

    .tooltip-description {
      margin-top: ${2*e.sizeUnit}px;
      display: -webkit-box;
      -webkit-line-clamp: 20;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `}
`,l=r.styled.div`
  ${({theme:e})=>`
    left: ${3*e.sizeUnit}px;
    right: ${3*e.sizeUnit}px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  `}
`,d=r.styled.span`
  ${({theme:e})=>`
    left: ${3*e.sizeUnit}px;
    right: ${3*e.sizeUnit}px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  `}
`,c=r.styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  width: 100%;
`,h=r.styled.span`
  ${({theme:{fontSizeSM:e,colorTextSecondary:t}})=>`
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${e}px;
    color: ${t};
    line-height: 1.6;
  `}
`,p=e=>!["null","none"].includes(e.toLowerCase())&&""!==e.trim(),u=e=>(0,i.Y)(s.m,{mouseEnterDelay:.2,placement:"right",title:(0,i.FD)(o,{children:[(0,i.Y)("div",{className:"tooltip-header",children:e.table_name&&p(e.table_name)?e.table_name:(0,n.t)("Not defined")}),(0,i.FD)("div",{className:"tooltip-description",children:[(0,i.FD)("div",{children:[(0,n.t)("Database"),": ",e.database.database_name]}),(0,i.FD)("div",{children:[(0,n.t)("Schema"),":"," ",e.schema&&p(e.schema)?e.schema:(0,n.t)("Not defined")]})]})]}),children:(0,i.FD)(l,{children:[(0,i.Y)(d,{children:e.table_name&&p(e.table_name)?e.table_name:e.database.database_name}),(0,i.FD)(c,{children:[(0,i.Y)(h,{children:e.database.database_name}),e.schema&&p(e.schema)&&(0,i.FD)(h,{children:[" - ",e.schema]})]})]})})},134(e,t,a){a.r(t),a.d(t,{ChartCreation:()=>Y,default:()=>k});var i=a(2445),s=a(24002),n=a(58561),r=a.n(n),o=a(27124),l=a(73815),d=a(72255),c=a(85614),h=a(98837),p=a(71671),u=a(97126),m=a(71519),g=a(61574),b=a(22022),f=a(62858),v=a(29138),y=a(10020),x=a(7070),$=a(81991),w=a(12097),_=a(89495),D=a(58348),z=a(60685);let S=((0,_.Ay)().common.conf.VIZ_TYPE_DENYLIST||[]).concat(Object.values(u.fJ)),C=c.styled.div`
  ${({theme:e})=>`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: ${$.rE}px;
    max-height: calc(100vh - 56px);
    border-radius: ${e.borderRadius}px;
    background-color: ${e.colorBgContainer};
    margin-left: auto;
    margin-right: auto;
    padding-left: ${e.padding}px;
    padding-right: ${e.padding}px;
    padding-bottom: ${e.padding}px;

    h3 {
      padding-bottom: ${e.paddingSM}px;
    }

    & .dataset {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: ${e.marginMD}px;

      & > div {
        min-width: 200px;
        width: 300px;
      }

      & > span {
        color: ${e.colorText};
        margin-left: ${e.margin}px;
      }
    }

    & .viz-gallery {
      border: 1px solid ${e.colorBorder};
      border-radius: ${e.borderRadius}px;
      margin: ${e.marginXXS}px 0px;
      max-height: calc(100vh - 306px);
      flex: 1;
    }

    & .footer {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;

      & > span {
        color: ${e.colorText};
        margin-right: ${e.margin}px;
      }
    }

    /* The following extra ampersands (&&&&) are used to boost selector specificity */

    &&&& .ant-steps-item-tail {
      display: none;
    }

    &&&& .ant-steps-item-icon {
      margin-right: ${e.marginXS}px;
      width: ${5*e.sizeUnit}px;
      height: ${5*e.sizeUnit}px;
      line-height: ${5*e.sizeUnit}px;
    }

    &&&& .ant-steps-item-title {
      line-height: ${5*e.sizeUnit}px;
    }

    &&&& .ant-steps-item-content {
      overflow: unset;

      .ant-steps-item-description {
        margin-top: ${e.sizeUnit}px;
        padding-bottom: ${e.sizeUnit}px;
      }
    }

    &&&& .ant-tooltip-open {
      display: inline;
    }
  `}
`,T=c.styled.span`
  ${({theme:{fontSize:e,fontWeightStrong:t}})=>`
      font-size: ${e}px;
      font-weight: ${t};
    `}
`,F=c.styled.div`
  ${({theme:e})=>`
    margin-top: ${e.margin}px;
    margin-bottom: ${e.marginSM}px;
    margin-left: ${e.marginMD}px;
  `}
`;class Y extends s.PureComponent{componentDidMount(){let e=new URLSearchParams(window.location.search).get("dataset");e&&(this.loadDatasources(e,0,1,!0).then(e=>{let t=e.data[0];this.setState({datasource:t,loading:!1})}).catch(()=>{this.setState({loading:!1})}),this.props.addSuccessToast((0,o.t)("The dataset has been saved")))}exploreUrl(){var e;let t=(0,p.P3)(u.vX.dashboardId),a=`/explore/?viz_type=${this.state.vizType}&datasource=${null==(e=this.state.datasource)?void 0:e.value}`;return(0,d.A)(t)&&(a+=`&dashboard_id=${t}`),a}gotoSlice(){this.props.history.push(this.exploreUrl())}changeDatasource(e){this.setState({datasource:e})}changeVizType(e){this.setState({vizType:e})}isBtnDisabled(){var e;return!((null==(e=this.state.datasource)?void 0:e.value)&&this.state.vizType)}onVizTypeDoubleClick(){this.isBtnDisabled()||this.gotoSlice()}loadDatasources(e,t,a,i=!1){let s=r().encode({columns:["id","table_name","datasource_type","database.database_name","schema"],filters:[{col:"table_name",opr:i?"eq":"ct",value:e}],page:t,page_size:a,order_column:"table_name",order_direction:"asc"});return l.A.get({endpoint:`/api/v1/dataset/?q=${s}`}).then(e=>({data:e.json.result.map(e=>({id:e.id,value:`${e.id}__${e.datasource_type}`,label:(0,D.$)(e),table_name:e.table_name})),totalCount:e.json.count}))}render(){var e;let{theme:t}=this.props,a=this.isBtnDisabled(),s=(0,o.t)("view instructions"),n=this.state.canCreateDataset?(0,i.FD)("span",{"data-test":"dataset-write",children:[(0,i.Y)(m.N_,{to:"/dataset/add/","data-test":"add-chart-new-dataset",children:(0,o.t)("Add a dataset")})," ",(0,o.t)("or")," ",(0,i.FD)("a",{href:"https://superset.apache.org/docs/creating-charts-dashboards/creating-your-first-dashboard/#registering-a-new-table",rel:"noopener noreferrer",target:"_blank","data-test":"add-chart-new-dataset-instructions",children:[`${s} `,(0,i.Y)(z.F.Full,{iconSize:"m",iconColor:t.colorPrimary})]}),"."]}):(0,i.FD)("span",{"data-test":"no-dataset-write",children:[(0,i.FD)("a",{href:"https://superset.apache.org/docs/creating-charts-dashboards/creating-your-first-dashboard/#registering-a-new-table",rel:"noopener noreferrer",target:"_blank",children:[`${s} `,(0,i.Y)(z.F.Full,{iconSize:"m",iconColor:t.colorPrimary})]}),"."]});return this.state.loading?(0,i.Y)(y.R,{}):(0,i.FD)(C,{children:[(0,i.Y)("h3",{children:(0,o.t)("Create a new chart")}),(0,i.FD)(b.Steps,{direction:"vertical",size:"small",children:[(0,i.Y)(b.Steps.Step,{title:(0,i.Y)(T,{children:(0,o.t)("Choose a dataset")}),status:(null==(e=this.state.datasource)?void 0:e.value)?"finish":"process",description:(0,i.FD)(F,{className:"dataset",children:[(0,i.Y)(f.A,{autoFocus:!0,ariaLabel:(0,o.t)("Dataset"),name:"select-datasource",onChange:this.changeDatasource,options:this.loadDatasources,optionFilterProps:["id","table_name"],placeholder:(0,o.t)("Choose a dataset"),showSearch:!0,value:this.state.datasource}),n]})}),(0,i.Y)(b.Steps.Step,{title:(0,i.Y)(T,{children:(0,o.t)("Choose chart type")}),status:this.state.vizType?"finish":"process",description:(0,i.Y)(F,{children:(0,i.Y)($.Ay,{denyList:S,className:"viz-gallery",onChange:this.changeVizType,onDoubleClick:this.onVizTypeDoubleClick,selectedViz:this.state.vizType})})})]}),(0,i.FD)("div",{className:"footer",children:[a&&(0,i.Y)("span",{children:(0,o.t)("Please select both a Dataset and a Chart type to proceed")}),(0,i.Y)(v.$n,{buttonStyle:"primary",disabled:a,onClick:this.gotoSlice,children:(0,o.t)("Create new chart")})]})]})}constructor(e){super(e);const t=new URLSearchParams(window.location.search).has("dataset");this.state={vizType:null,canCreateDataset:(0,w.L)("can_write","Dataset",e.user.roles),loading:t},this.changeDatasource=this.changeDatasource.bind(this),this.changeVizType=this.changeVizType.bind(this),this.gotoSlice=this.gotoSlice.bind(this),this.loadDatasources=this.loadDatasources.bind(this),this.onVizTypeDoubleClick=this.onVizTypeDoubleClick.bind(this)}}let k=(0,g.y)((0,x.Ay)((0,h.b)(Y)))}}]);