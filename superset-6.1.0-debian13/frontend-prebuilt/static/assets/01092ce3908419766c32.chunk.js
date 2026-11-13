"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1285],{70621(e,t,a){a.d(t,{c:()=>l});var n=a(2445),i=a(17437),r=a(22022);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e){return(0,n.Y)(r.Divider,o({css:e=>(0,i.AH)`
        margin: ${e.margin}px 0;
      `},e))}},60380(e,t,a){a.d(t,{A:()=>$});var n=a(2445),i=a(24002),r=a(58561),o=a.n(r),l=a(22022),s=a(62858),d=a(29138),c=a(70621),u=a(56030),h=a(68447),g=a(33296),p=a(27124),m=a(73815),b=a(85614),v=a(36652),f=a(84151);function y(e,t,a,n,i,r,o){try{var l=e[r](o),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(n,i)}function Y(e){return function(){var t=this,a=arguments;return new Promise(function(n,i){var r=e.apply(t,a);function o(e){y(r,n,i,o,l,"next",e)}function l(e){y(r,n,i,o,l,"throw",e)}o(void 0)})}}let x=b.styled.div`
  .ant-select-dropdown {
    max-height: ${({theme:e})=>40*e.sizeUnit}px;
  }
  .tag-input {
    margin-bottom: ${({theme:e})=>3*e.sizeUnit}px;
  }
`,$=({show:e,onHide:t,editTag:a,refreshData:r,addSuccessToast:y,addDangerToast:$,clearOnHide:w=!1})=>{let[S,T]=(0,i.useState)([]),[z,C]=(0,i.useState)([]),[F,_]=(0,i.useState)([]),[U,A]=(0,i.useState)(""),[D,P]=(0,i.useState)(""),k=(0,b.useTheme)(),E=!!a,N=()=>{A(""),P(""),T([]),C([]),_([])};(0,i.useEffect)(()=>{let e={dashboard:[],chart:[],query:[]},t=({id:t,name:a,type:n})=>{let i=e[n];i&&i.push({value:t,label:a,key:t})};T([]),C([]),_([]),E&&((0,v.Ik)({tagIds:[a.id],types:null},a=>{a.forEach(t),T(e.dashboard),C(e.chart),_(e.query)},e=>{$("Error Fetching Tagged Objects")}),A(a.name),P(a.description))},[a]);let j=(e,t,a,n,i,r,l)=>Y(function*(){let a=o().encode({columns:n,filters:[{col:i,opr:"ct",value:e}],page:t,order_column:r}),{json:s}=yield m.A.get({endpoint:`/api/v1/${l}/?q=${a}`}),{result:d,count:c}=s;return{data:d.map(e=>({value:e.id,label:e[i]})),totalCount:c}})(),q=(e,t)=>{"dashboard"===e?T(t):"chart"===e?C(t):"query"===e&&_(t)};return(0,n.Y)(u.aF,{name:E?(0,p.t)("Edit Tag"):(0,p.t)("Create Tag"),title:(0,n.Y)(f.r,{isEditMode:E,title:E?(0,p.t)("Edit Tag"):(0,p.t)("Create Tag")}),onHide:()=>{w&&N(),t()},show:e,footer:(0,n.FD)("div",{children:[(0,n.Y)(d.$n,{"data-test":"modal-save-dashboard-button",buttonStyle:"secondary",onClick:t,children:(0,p.t)("Cancel")}),(0,n.Y)(d.$n,{"data-test":"modal-save-dashboard-button",buttonStyle:"primary",onClick:()=>{let e=S.map(e=>["dashboard",e.value]),n=z.map(e=>["chart",e.value]),i=F.map(e=>["query",e.value]);E?m.A.put({endpoint:`/api/v1/tag/${a.id}`,jsonPayload:{description:D,name:U,objects_to_tag:[...e,...n,...i]}}).then(()=>{r(),N(),y((0,p.t)("Tag updated")),t()}).catch(e=>{$(e.message||"Error Updating Tag")}):m.A.post({endpoint:"/api/v1/tag/",jsonPayload:{description:D,name:U,objects_to_tag:[...e,...n,...i]}}).then(()=>{r(),N(),y((0,p.t)("Tag created")),t()}).catch(e=>$(e.message||"Error Creating Tag"))},children:(0,p.t)("Save")})]}),children:(0,n.FD)(x,{children:[(0,n.FD)(h.s,{vertical:!0,gap:k.sizeUnit,children:[(0,n.Y)(g.l,{htmlFor:"tag-name",children:(0,p.t)("Tag name")}),(0,n.Y)(l.Input,{id:"tag-name",className:"tag-input",onChange:e=>A(e.target.value),placeholder:(0,p.t)("Name of your tag"),value:U})]}),(0,n.FD)(h.s,{vertical:!0,gap:k.sizeUnit,children:[(0,n.Y)(g.l,{children:(0,p.t)("Description")}),(0,n.Y)(l.Input,{className:"tag-input",onChange:e=>P(e.target.value),placeholder:(0,p.t)("Add description of your tag"),value:D})]}),(0,n.Y)(c.c,{}),(0,n.Y)(s.A,{className:"tag-input",ariaLabel:(0,p.t)("Select dashboards"),mode:"multiple",name:"dashboards",value:S,options:(e,t,a)=>Y(function*(){return j(e,t,a,["id","dashboard_title"],"dashboard_title","dashboard_title","dashboard")})(),onChange:e=>q("dashboard",e),getPopupContainer:()=>document.body,header:(0,n.Y)(g.l,{children:(0,p.t)("Dashboards")}),allowClear:!0}),(0,n.Y)(s.A,{className:"tag-input",ariaLabel:(0,p.t)("Select charts"),mode:"multiple",name:"charts",value:z,options:(e,t,a)=>Y(function*(){return j(e,t,a,["id","slice_name"],"slice_name","slice_name","chart")})(),onChange:e=>q("chart",e),getPopupContainer:()=>document.body,header:(0,n.Y)(g.l,{children:(0,p.t)("Charts")}),allowClear:!0}),(0,n.Y)(s.A,{className:"tag-input",ariaLabel:(0,p.t)("Select saved queries"),mode:"multiple",name:"savedQueries",value:F,options:(e,t,a)=>Y(function*(){return j(e,t,a,["id","label"],"label","label","saved_query")})(),onChange:e=>q("query",e),getPopupContainer:()=>document.body,header:(0,n.Y)(g.l,{children:(0,p.t)("Saved queries")}),allowClear:!0})]})})}},14975(e,t,a){a.r(t),a.d(t,{default:()=>A});var n=a(2445),i=a(24002),r=a(27124),o=a(17437),l=a(85614),s=a(27937),d=a(45507),c=a(35494),u=a(97020),h=a(14121),g=a(90617);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}let m=l.styled.div`
  text-align: left;
  border-radius: ${({theme:e})=>e.borderRadius}px 0;
  .table {
    table-layout: fixed;
  }
  .td {
    width: 33%;
  }
  .entity-title {
    font-family: Inter;
    font-size: ${({theme:e})=>e.fontSize}px;
    font-weight: ${({theme:e})=>e.fontWeightStrong};
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
    margin: ${({theme:e})=>4*e.sizeUnit}px 0;
  }
`;function b({search:e="",setShowTagModal:t,objects:a,canEditTag:i}){let o=a.dashboard.length>0,l=a.chart.length>0,s=a.query.length>0,v=o||l||s,f=e=>{let t=a[e].map(t=>({[e]:(0,n.Y)(g.o.Link,{href:t.url,children:t.name}),modified:t.changed_on?d.XV.utc(t.changed_on).fromNow():"",tags:t.tags,owners:t.owners}));return(0,n.Y)(c.Q,{className:"table-condensed",emptyWrapperType:c.V.Small,data:t,pageSize:10,columns:[{accessor:e,Header:"Title",id:e},{Cell:({row:{original:{tags:e=[]}}})=>(0,n.Y)(h.Sk,{tags:e.filter(e=>void 0!==e.type&&["TagType.custom",1].includes(e.type)),maxTags:3}),Header:(0,r.t)("Tags"),accessor:"tags",disableSortBy:!0,id:"tags"},{Cell:({row:{original:{owners:e=[]}}})=>(0,n.Y)(h.WM,{users:e}),Header:(0,r.t)("Owners"),accessor:"owners",disableSortBy:!0,size:"xl",id:"owners"}]})};return(0,n.Y)(m,{children:v?(0,n.FD)(n.FK,{children:[o&&(0,n.FD)(n.FK,{children:[(0,n.Y)("div",{className:"entity-title",children:(0,r.t)("Dashboards")}),f("dashboard")]}),l&&(0,n.FD)(n.FK,{children:[(0,n.Y)("div",{className:"entity-title",children:(0,r.t)("Charts")}),f("chart")]}),s&&(0,n.FD)(n.FK,{children:[(0,n.Y)("div",{className:"entity-title",children:(0,r.t)("Queries")}),f("query")]})]}):(0,n.Y)(u.p,p({image:"dashboard.svg",size:"large",title:(0,r.t)("No entities have this tag currently assigned")},i&&{buttonAction:()=>t(!0),buttonText:(0,r.t)("Add tag to entities")}))})}var v=a(10020),f=a(29138),y=a(12913),Y=a(86204),x=a(98110),$=a(60380),w=a(7070),S=a(36652),T=a(24477),z=a(12097),C=a(61225);let F=e=>(0,o.AH)`
  display: flex;
  align-items: center;
  margin-left: ${e.sizeUnit}px;
  & > span {
    margin-right: ${3*e.sizeUnit}px;
  }
`,_=l.styled.div`
  ${({theme:e})=>`
  background-color: ${e.colorBgContainer};
  .select-control {
    margin-left: ${4*e.sizeUnit}px;
    margin-right: ${4*e.sizeUnit}px;
    margin-bottom: ${2*e.sizeUnit}px;
  }
  .select-control-label {
    font-size: ${3*e.sizeUnit}px;
    color: ${e.colorText};
    margin-bottom: ${+e.sizeUnit}px;
  }
  .entities {
    margin: ${6*e.sizeUnit}px; 0px;
  }
  .pagination-container {
    background-color: transparent;
  }
  `}
`,U=l.styled.div`
  ${({theme:e})=>`
  height: ${12.5*e.sizeUnit}px;
  background-color: ${e.colorBgBase};
  margin-bottom: ${4*e.sizeUnit}px;
  .navbar-brand {
    margin-left: ${2*e.sizeUnit}px;
    font-weight: ${e.fontWeightStrong};
  }
  .header {
    font-weight: ${e.fontWeightStrong};
    margin-right:  ${3*e.sizeUnit}px;
    text-align: left;
    font-size: ${4.5*e.sizeUnit}px;
    padding: ${3*e.sizeUnit}px;
    display: inline-block;
    line-height: ${9*e.sizeUnit}px;
  }
  `};
`,A=(0,w.Ay)(function(){let[e]=(0,s.useQueryParam)("id",s.NumberParam),[t,a]=(0,i.useState)(null),[o,l]=(0,i.useState)(!1),{addSuccessToast:d,addDangerToast:c}=(0,w.Yf)(),[u,h]=(0,i.useState)(!1),[g,p]=(0,i.useState)({dashboard:[],chart:[],query:[]}),m=(0,C.d4)(e=>{var t;return(0,z.L)("can_write","Tag",null==(t=e.user)?void 0:t.roles)}),A={title:(null==t?void 0:t.name)||"",placeholder:"testing",onSave:()=>{},canEdit:!1,label:(0,r.t)("dataset name")},D=[];if(null==t?void 0:t.description){let e={type:y.Q.Description,value:(null==t?void 0:t.description)||""};D.push(e)}let P={type:y.Q.Owner,createdBy:(0,T.A)(null==t?void 0:t.created_by),createdOn:(null==t?void 0:t.created_on_delta_humanized)||""};D.push(P);let k={type:y.Q.LastModified,value:(null==t?void 0:t.changed_on_delta_humanized)||"",modifiedBy:(0,T.A)(null==t?void 0:t.changed_by)};D.push(k);let E=()=>{(h(!0),t)?(0,S.Ik)({tagIds:(null==t?void 0:t.id)!==void 0?[t.id]:"",types:null},e=>{let t={dashboard:[],chart:[],query:[]};e.forEach(function(e){t[e.type].push(e)}),p(t),h(!1)},e=>{c("Error Fetching Tagged Objects"),h(!1)}):c("Error tag object is not referenced!")},N=e=>{(0,S.FA)(e,e=>{a(e),h(!1)},e=>{c((0,r.t)("Error Fetching Tagged Objects")),h(!1)})};return((0,i.useEffect)(()=>{e&&(h(!0),N(e))},[e]),(0,i.useEffect)(()=>{t&&E()},[t]),u)?(0,n.Y)(v.R,{}):(0,n.FD)(_,{children:[(0,n.Y)($.A,{show:o,onHide:()=>{l(!1)},editTag:t,addSuccessToast:d,addDangerToast:c,refreshData:()=>{E(),e&&N(e)}}),(0,n.Y)(U,{children:(0,n.Y)(x.U,{additionalActionsMenu:(0,n.Y)(n.FK,{}),editableTitleProps:A,faveStarProps:{itemId:1,saveFaveStar:()=>{}},showFaveStar:!1,showTitlePanelItems:!0,titlePanelAdditionalItems:(0,n.Y)("div",{css:F,children:(0,n.Y)(Y.Ay,{items:D,tooltipPlacement:"bottom"})}),rightPanelAdditionalItems:(0,n.Y)(n.FK,{children:m&&(0,n.FD)(f.$n,{"data-test":"bulk-select-action",buttonStyle:"secondary",onClick:()=>l(!0),showMarginRight:!1,children:[(0,r.t)("Edit tag")," "]})}),menuDropdownProps:{disabled:!0},showMenuDropdown:!1})}),(0,n.Y)("div",{className:"entities",children:(0,n.Y)(b,{search:(null==t?void 0:t.name)||"",setShowTagModal:l,objects:g,canEditTag:m})})]})})}}]);