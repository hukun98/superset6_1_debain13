"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5659],{20817(e,t,l){l.r(t),l.d(t,{default:()=>B});var a,i=l(2445),n=l(27124),r=l(73815),s=l(24002),o=l(8563),d=l(66016),u=l(14121),c=l(60685),p=l(7070),h=l(79294),m=l(58561),f=l.n(m),y=l(18847),g=l(17437),b=l(85614),v=l(84151),w=l(56030),_=l(22022),x=l(34835),k=l(80967),Y=l(68292),F=l(62858);let S=[{label:(0,n.t)("Regular"),value:"Regular"},{label:(0,n.t)("Base"),value:"Base"}];var T=((a={}).Regular="Regular",a.Base="Base",a);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}let C=(0,g.AH)`
  margin: 0;

  .ant-input {
    margin: 0;
  }
`,A=(0,b.styled)(w.aF)`
  max-width: 1200px;
  min-width: min-content;
  width: 100%;
  .ant-modal-footer {
    white-space: nowrap;
  }
`,R=b.styled.div`
  ${({theme:e})=>(0,g.AH)`
    display: flex;
    flex-direction: column;
    padding: ${3*e.sizeUnit}px ${4*e.sizeUnit}px
      ${2*e.sizeUnit}px;

    label,
    .control-label {
      display: flex;
      font-size: ${e.fontSizeSM}px;
      color: ${e.colorTextLabel};
      align-items: center;
    }

    .info-solid-small {
      vertical-align: middle;
      padding-bottom: ${e.sizeUnit/2}px;
    }
  `}
`,D=b.styled.div`
  ${({theme:e})=>(0,g.AH)`
    display: flex;
    flex-direction: column;
    margin: ${e.sizeUnit}px;
    margin-bottom: ${4*e.sizeUnit}px;

    .input-container {
      display: flex;
      align-items: center;

      > div {
        width: 100%;
      }
    }

    input,
    textarea {
      flex: 1 1 auto;
    }

    .required {
      margin-left: ${e.sizeUnit/2}px;
      color: ${e.colorErrorText};
    }
  `}
`,N=(0,b.styled)(_.Input.TextArea)`
  resize: none;
  margin-top: ${({theme:e})=>e.sizeUnit}px;
`,E={name:"",filter_type:T.Regular,tables:[],roles:[],clause:"",group_key:"",description:""},H=function(e){let{rule:t,addDangerToast:l,addSuccessToast:a,onHide:o,show:d}=e,[u,c]=(0,s.useState)(z({},E)),[p,h]=(0,s.useState)(!0),m=null!==t,{state:{loading:g,resource:b,error:w},fetchResource:_,createResource:H,updateResource:$,clearError:M}=(0,y.fn)("rowlevelsecurity",(0,n.t)("rowlevelsecurity"),l),B=(e,t)=>{c(l=>z({},l,{[e]:t}))},O=(0,s.useCallback)(()=>{var e,t;if(!b)return null;let l=[],a=[];return null==(e=b.tables)||e.forEach(e=>{l.push({key:e.id,label:e.schema?`${e.schema}.${e.table_name}`:e.table_name,value:e.id})}),null==(t=b.roles)||t.forEach(e=>{a.push({key:e.id,label:e.name,value:e.id})}),{tables:l,roles:a}},[null==b?void 0:b.tables,null==b?void 0:b.roles]);(0,s.useEffect)(()=>{m?(null==t?void 0:t.id)===null||g||w||_(t.id):c(z({},E))},[t]),(0,s.useEffect)(()=>{if(b){c(z({},b,{id:null==t?void 0:t.id}));let e=O();B("tables",(null==e?void 0:e.tables)||[]),B("roles",(null==e?void 0:e.roles)||[])}},[b]);let q=u||{};(0,s.useEffect)(()=>{var e;(null==u?void 0:u.name)&&(null==u?void 0:u.clause)&&(null==(e=u.tables)?void 0:e.length)?h(!1):h(!0)},[q.name,q.clause,null==q?void 0:q.tables]);let L=e=>{B(e.name,e.value)},U=()=>{M(),c(z({},E)),o()},I=(0,s.useMemo)(()=>(e="",t,l)=>{let a=f().encode({filter:e,page:t,page_size:l});return r.A.get({endpoint:`/api/v1/rowlevelsecurity/related/tables?q=${a}`}).then(e=>({data:e.json.result.map(e=>({label:e.text,value:e.value})),totalCount:e.json.count}))},[]),P=(0,s.useMemo)(()=>(e="",t,l)=>{let a=f().encode({filter:e,page:t,page_size:l});return r.A.get({endpoint:`/api/v1/rowlevelsecurity/related/roles?q=${a}`}).then(e=>({data:e.json.result.map(e=>({label:e.text,value:e.value})),totalCount:e.json.count}))},[]);return(0,i.Y)(A,{className:"no-content-padding",responsive:!0,show:d,onHide:U,primaryButtonName:m?(0,n.t)("Save"):(0,n.t)("Add"),disablePrimaryButton:p,onHandledPrimaryAction:()=>{var e,t;let l=[],i=[];null==(e=u.tables)||e.forEach(e=>l.push(e.key)),null==(t=u.roles)||t.forEach(e=>i.push(e.key));let r=z({},u,{tables:l,roles:i});if(m&&u.id){let e=u.id;delete r.id,$(e,r).then(e=>{e&&(a("Rule updated"),U())})}else u&&H(r).then(e=>{e&&(a((0,n.t)("Rule added")),U())})},width:"30%",maxWidth:"1450px",title:(0,i.Y)(v.r,{isEditMode:m,title:m?(0,n.t)("Edit Rule"):(0,n.t)("Add Rule"),"data-test":"rls-modal-title"}),children:(0,i.Y)(R,{children:(0,i.FD)("div",{className:"main-section",children:[(0,i.Y)(D,{children:(0,i.Y)(x.M,{id:"name",name:"name",className:"labeled-input",value:u?u.name:"",required:!0,validationMethods:{onChange:({target:e})=>L(e)},css:C,label:(0,n.t)("Rule Name"),"data-test":"rule-name-test",tooltipText:(0,n.t)("The name of the rule must be unique"),hasTooltip:!0})}),(0,i.FD)(D,{children:[(0,i.FD)("div",{className:"control-label",children:[(0,n.t)("Filter Type")," ",(0,i.Y)(k.I,{tooltip:(0,n.t)("Regular filters add where clauses to queries if a user belongs to a role referenced in the filter, base filters apply filters to all queries except the roles defined in the filter, and can be used to define what users can see if no RLS filters within a filter group apply to them.")})]}),(0,i.Y)("div",{className:"input-container",children:(0,i.Y)(Y.A,{name:"filter_type",ariaLabel:(0,n.t)("Filter Type"),placeholder:(0,n.t)("Filter Type"),onChange:e=>{B("filter_type",e)},value:null==u?void 0:u.filter_type,options:S,"data-test":"rule-filter-type-test"})})]}),(0,i.FD)(D,{children:[(0,i.FD)("div",{className:"control-label",children:[(0,n.t)("Datasets")," ",(0,i.Y)("span",{className:"required",children:"*"}),(0,i.Y)(k.I,{tooltip:(0,n.t)("These are the datasets this filter will be applied to.")})]}),(0,i.Y)("div",{className:"input-container",children:(0,i.Y)(F.A,{ariaLabel:(0,n.t)("Tables"),mode:"multiple",onChange:e=>{B("tables",e||[])},value:(null==u?void 0:u.tables)||[],options:I})})]}),(0,i.FD)(D,{children:[(0,i.FD)("div",{className:"control-label",children:[u.filter_type===T.Base?(0,n.t)("Excluded roles"):(0,n.t)("Roles")," ",(0,i.Y)(k.I,{tooltip:(0,n.t)("For regular filters, these are the roles this filter will be applied to. For base filters, these are the roles that the filter DOES NOT apply to, e.g. Admin if admin should see all data.")})]}),(0,i.Y)("div",{className:"input-container",children:(0,i.Y)(F.A,{ariaLabel:(0,n.t)("Roles"),mode:"multiple",onChange:e=>{B("roles",e||[])},value:(null==u?void 0:u.roles)||[],options:P})})]}),(0,i.Y)(D,{children:(0,i.Y)(x.M,{id:"group_key",name:"group_key",value:u?u.group_key:"",validationMethods:{onChange:({target:e})=>L(e)},css:C,label:(0,n.t)("Group Key"),hasTooltip:!0,tooltipText:(0,n.t)("Filters with the same group key will be ORed together within the group, while different filter groups will be ANDed together. Undefined group keys are treated as unique groups, i.e. are not grouped together. For example, if a table has three filters, of which two are for departments Finance and Marketing (group key = 'department'), and one refers to the region Europe (group key = 'region'), the filter clause would apply the filter (department = 'Finance' OR department = 'Marketing') AND (region = 'Europe')."),"data-test":"group-key-test"})}),(0,i.Y)(D,{children:(0,i.Y)(x.M,{id:"clause",name:"clause",value:u?u.clause:"",required:!0,validationMethods:{onChange:({target:e})=>L(e)},css:C,label:(0,n.t)("Clause"),hasTooltip:!0,tooltipText:(0,n.t)("This is the condition that will be added to the WHERE clause. For example, to only return rows for a particular client, you might define a regular filter with the clause `client_id = 9`. To display no rows unless a user belongs to a RLS filter role, a base filter can be created with the clause `1 = 0` (always false)."),"data-test":"clause-test"})}),(0,i.FD)(D,{children:[(0,i.Y)("div",{className:"control-label",children:(0,n.t)("Description")}),(0,i.Y)("div",{className:"input-container",children:(0,i.Y)(N,{rows:4,name:"description",value:u?u.description:"",onChange:e=>L(e.target),"data-test":"description-test"})})]})]})})})};var $=l(37254),M=l(16598);let B=(0,p.Ay)(function(e){let{addDangerToast:t,addSuccessToast:l,user:a}=e,[p,m]=(0,s.useState)(!1),[g,b]=(0,s.useState)(null),{state:{loading:v,resourceCount:w,resourceCollection:_,bulkSelectEnabled:x},hasPerm:k,fetchData:Y,refreshData:F,toggleBulkSelect:S}=(0,y.RU)("rowlevelsecurity",(0,n.t)("Row Level Security"),t,!0,void 0,void 0,!0),T=(0,s.useCallback)(e=>{b(e),m(!0)},[]),z=(0,s.useCallback)(({id:e,name:t},l,a,i)=>r.A.delete({endpoint:`/api/v1/rowlevelsecurity/${e}`}).then(()=>{l(),a((0,n.t)("Deleted %s",t))},(0,$.JF)(e=>i((0,n.t)("There was an issue deleting %s: %s",t,e)))),[]);function C(){b(null),m(!1),F()}let A=k("can_write"),R=k("can_write"),D=k("can_export"),N=(0,s.useMemo)(()=>[{accessor:"name",Header:(0,n.t)("Name"),size:"xxl",id:"name"},{accessor:"filter_type",Header:(0,n.t)("Filter Type"),size:"lg",id:"filter_type"},{accessor:"group_key",Header:(0,n.t)("Group Key"),size:"lg",id:"group_key"},{accessor:"clause",Header:(0,n.t)("Clause"),size:"xl",id:"clause"},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>(0,i.Y)(u.UW,{date:e,user:t}),Header:(0,n.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl",id:"changed_on_delta_humanized"},{Cell:({row:{original:e}})=>(0,i.FD)("div",{className:"actions",children:[R&&(0,i.Y)(o.m,{id:"edit-action-tooltip",title:(0,n.t)("Edit"),placement:"bottom",children:(0,i.Y)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>T(e),children:(0,i.Y)(c.F.EditOutlined,{"data-test":"edit-alt",iconSize:"l"})})}),A&&(0,i.Y)(d.h,{title:(0,n.t)("Please confirm"),description:(0,i.FD)(i.FK,{children:[(0,n.t)("Are you sure you want to delete")," ",(0,i.Y)("b",{children:e.name})]}),onConfirm:()=>z(e,F,l,t),children:e=>(0,i.Y)(o.m,{id:"delete-action-tooltip",title:(0,n.t)("Delete"),placement:"bottom",children:(0,i.Y)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e,children:(0,i.Y)(c.F.DeleteOutlined,{"data-test":"rls-list-trash-icon",iconSize:"l"})})})})]}),Header:(0,n.t)("Actions"),id:"actions",hidden:!R&&!A&&!D,disableSortBy:!0,size:"lg"},{accessor:M.H.ChangedBy,hidden:!0,id:M.H.ChangedBy}],[R,A,D,F,t,l,z,T]),E={title:(0,n.t)("No Rules yet"),image:"filter-results.svg",buttonAction:()=>T(null),buttonIcon:R?(0,i.Y)(c.F.PlusOutlined,{iconSize:"m","data-test":"add-rule-empty"}):void 0,buttonText:R?(0,n.t)("Rule"):null},B=(0,s.useMemo)(()=>[{Header:(0,n.t)("Name"),key:"search",id:"name",input:"search",operator:u.c0.StartsWith,inputName:"rls_list_search"},{Header:(0,n.t)("Filter Type"),key:"filter_type",id:"filter_type",input:"select",operator:u.c0.Equals,unfilteredLabel:(0,n.t)("Any"),selects:[{label:(0,n.t)("Regular"),value:"Regular"},{label:(0,n.t)("Base"),value:"Base"}]},{Header:(0,n.t)("Group Key"),key:"search",id:"group_key",input:"search",operator:u.c0.StartsWith},{Header:(0,n.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:u.c0.RelationOneMany,unfilteredLabel:(0,n.t)("All"),fetchSelects:(0,$.u1)("rowlevelsecurity","changed_by",(0,$.JF)(e=>(0,n.t)("An error occurred while fetching dataset datasource values: %s",e)),a),paginate:!0}],[a]),O=[{id:"changed_on_delta_humanized",desc:!0}],q=[];return A&&(q.push({name:(0,n.t)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:S}),q.push({name:(0,n.t)("Rule"),icon:(0,i.Y)(c.F.PlusOutlined,{iconSize:"m","data-test":"add-rule"}),buttonStyle:"primary",onClick:()=>T(null)})),(0,i.FD)(i.FK,{children:[(0,i.Y)(h.A,{name:(0,n.t)("Row Level Security"),buttons:q}),(0,i.Y)(d.h,{title:(0,n.t)("Please confirm"),description:(0,n.t)("Are you sure you want to delete the selected rules?"),onConfirm:function(e){let a=e.map(({id:e})=>e);return r.A.delete({endpoint:`/api/v1/rowlevelsecurity/?q=${f().encode(a)}`}).then(()=>{F(),l((0,n.t)("Deleted"))},(0,$.JF)(e=>t((0,n.t)("There was an issue deleting rules: %s",e))))},children:e=>{let a=[];return A&&a.push({key:"delete",name:(0,n.t)("Delete"),type:"danger",onSelect:e}),(0,i.FD)(i.FK,{children:[(0,i.Y)(H,{rule:g,addDangerToast:t,onHide:C,addSuccessToast:l,show:p}),(0,i.Y)(u.uO,{className:"rls-list-view",bulkActions:a,bulkSelectEnabled:x,disableBulkSelect:S,columns:N,count:w,data:_,emptyState:E,fetchData:Y,filters:B,initialSort:O,loading:v,addDangerToast:t,addSuccessToast:l,refreshData:()=>{},pageSize:25})]})}})]})})}}]);