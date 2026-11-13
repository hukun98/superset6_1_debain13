"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9019],{185(e,t,n){n.r(t),n.d(t,{default:()=>T});var a=n(2445),l=n(24002),i=n(58561),o=n.n(i),r=n(27124),d=n(73815),s=n(61574),c=n(71519),u=n(18847),h=n(37254),p=n(7070),y=n(79294),m=n(90617),b=n(426),g=n(66016),f=n(14121),v=n(85614),x=n(84151),A=n(56030),_=n(22022);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let S=v.styled.div`
  margin: ${({theme:e})=>2*e.sizeUnit}px auto
    ${({theme:e})=>4*e.sizeUnit}px auto;
`,C=v.styled.div`
  margin-bottom: ${({theme:e})=>10*e.sizeUnit}px;

  .control-label {
    margin-bottom: ${({theme:e})=>2*e.sizeUnit}px;
  }

  .required {
    margin-left: ${({theme:e})=>e.sizeUnit/2}px;
    color: ${({theme:e})=>e.colorError};
  }

  textarea,
  input[type='text'] {
    padding: ${({theme:e})=>1.5*e.sizeUnit}px
      ${({theme:e})=>2*e.sizeUnit}px;
    border: 1px solid ${({theme:e})=>e.colorBorder};
    border-radius: ${({theme:e})=>e.borderRadius}px;
    width: 50%;
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    width: 100%;
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({theme:e})=>e.colorTextPlaceholder};
  }
`,Y=(0,p.Ay)(({addDangerToast:e,addSuccessToast:t,onLayerAdd:n,onHide:i,show:o,layer:d=null})=>{let[s,c]=(0,l.useState)(!0),[h,p]=(0,l.useState)(),[y,b]=(0,l.useState)(!0),g=null!==d,{state:{loading:f,resource:v},fetchResource:Y,createResource:k,updateResource:z}=(0,u.fn)("annotation_layer",(0,r.t)("annotation_layer"),e),D=()=>{p({name:"",descr:""})},$=()=>{b(!0),D(),i()},T=e=>{let{target:t}=e,n=w({},h,{name:h?h.name:"",descr:h?h.descr:""});n[t.name]=t.value,p(n)};return(0,l.useEffect)(()=>{g&&(!(null==h?void 0:h.id)||d&&d.id!==h.id||y&&o)?o&&d&&null!==d.id&&!f&&Y(d.id||0):!g&&(!h||h.id||y&&o)&&D()},[d,o]),(0,l.useEffect)(()=>{v&&p(v)},[v]),(0,l.useEffect)(()=>{var e;(null==h||null==(e=h.name)?void 0:e.length)?c(!1):c(!0)},[h?h.name:"",h?h.descr:""]),y&&o&&b(!1),(0,a.FD)(A.aF,{disablePrimaryButton:s,onHandledPrimaryAction:()=>{if(g){if(null==h?void 0:h.id){let e=h.id;delete h.id,delete h.created_by,z(e,h).then(e=>{e&&($(),t((0,r.t)("Annotation template updated")))})}}else h&&k(h).then(e=>{e&&(n&&n(e),$(),t((0,r.t)("Annotation template created")))})},onHide:$,primaryButtonName:g?(0,r.t)("Save"):(0,r.t)("Add"),show:o,width:"55%",name:g?(0,r.t)("Edit annotation layer properties"):(0,r.t)("Add annotation layer"),title:(0,a.Y)(x.r,{isEditMode:g,title:g?(0,r.t)("Edit annotation layer properties"):(0,r.t)("Add annotation layer"),"data-test":"annotation-layer-modal-title"}),children:[(0,a.Y)(S,{children:(0,a.Y)(m.o.Title,{level:4,children:(0,r.t)("General information")})}),(0,a.FD)(C,{children:[(0,a.FD)("div",{className:"control-label",children:[(0,r.t)("Annotation layer name"),(0,a.Y)("span",{className:"required",children:"*"})]}),(0,a.Y)(_.Input,{name:"name",onChange:T,type:"text",value:null==h?void 0:h.name})]}),(0,a.FD)(C,{children:[(0,a.Y)("div",{className:"control-label",children:(0,r.t)("description")}),(0,a.Y)(_.Input.TextArea,{name:"descr",value:null==h?void 0:h.descr,placeholder:(0,r.t)("Description (this can be seen in the list)"),onChange:T})]})]})});var k=n(16598),z=n(60685),D=n(44418),$=n(91681);let T=(0,p.Ay)(function({addDangerToast:e,addSuccessToast:t,user:n}){let{state:{loading:i,resourceCount:p,resourceCollection:v,bulkSelectEnabled:x},hasPerm:A,fetchData:_,refreshData:w,toggleBulkSelect:S}=(0,u.RU)("annotation_layer",(0,r.t)("Annotation layers"),e),[C,T]=(0,l.useState)(!1),[F,H]=(0,l.useState)(null),[E,N]=(0,l.useState)(null),O=A("can_write"),U=A("can_write"),B=A("can_write");function P(e){H(e),T(!0)}let L=[{id:"name",desc:!0}],M=(0,l.useMemo)(()=>[{accessor:"name",Header:(0,r.t)("Name"),Cell:({row:{original:{id:e,name:t}}})=>{let n=!0;try{(0,s.W6)()}catch(e){n=!1}return n?(0,a.Y)(c.N_,{to:`/annotationlayer/${e}/annotation`,children:t}):(0,a.Y)(m.o.Link,{href:`/annotationlayer/${e}/annotation`,children:t})},size:"xxl",id:"name"},{accessor:"descr",Header:(0,r.t)("Description"),size:"xl",id:"descr"},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>(0,a.Y)(f.UW,{date:e,user:t}),Header:(0,r.t)("Last modified"),accessor:"changed_on",size:"xl",id:"changed_on"},{Cell:({row:{original:e}})=>{let t=[U?{label:"edit-action",tooltip:(0,r.t)("Edit template"),placement:"bottom",icon:"EditOutlined",onClick:()=>P(e)}:null,B?{label:"delete-action",tooltip:(0,r.t)("Delete template"),placement:"bottom",icon:"DeleteOutlined",onClick:()=>N(e)}:null].filter(e=>!!e);return(0,a.Y)(f.kv,{actions:t})},Header:(0,r.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!U&&!B,size:"xl"},{accessor:k.H.ChangedBy,hidden:!0,id:k.H.ChangedBy}],[B,O]),q=[];B&&q.push({name:(0,r.t)("Bulk select"),onClick:S,buttonStyle:"secondary"}),O&&q.push({icon:(0,a.Y)(z.F.PlusOutlined,{iconSize:"m"}),name:(0,r.t)("Annotation layer"),buttonStyle:"primary",onClick:()=>{P(null)}});let I=(0,l.useMemo)(()=>[{Header:(0,r.t)("Name"),key:"search",id:"name",input:"search",operator:f.c0.Contains,inputName:"annotation_layer_list_search"},{Header:(0,r.t)("Changed by"),key:"changed_by",id:"changed_by",input:"select",operator:f.c0.RelationOneMany,unfilteredLabel:(0,r.t)("All"),fetchSelects:(0,h.u1)("annotation_layer","changed_by",(0,h.JF)(e=>(0,r.t)("An error occurred while fetching dataset datasource values: %s",e)),n),paginate:!0,dropdownStyle:{minWidth:$.f8}}],[]),J={title:(0,r.t)("No annotation layers yet"),image:"filter-results.svg",buttonAction:()=>P(null),buttonText:(0,r.t)("Annotation layer"),buttonIcon:(0,a.Y)(z.F.PlusOutlined,{iconSize:"m"})};return(0,a.FD)(a.FK,{children:[(0,a.Y)(y.A,{name:(0,r.t)("Annotation layers"),buttons:q}),(0,a.Y)(Y,{addDangerToast:e,layer:F,onLayerAdd:e=>{(0,D.V)(`/annotationlayer/${e}/annotation`)},onHide:()=>{w(),T(!1)},show:C}),E&&(0,a.Y)(b.T,{description:(0,r.t)("This action will permanently delete the layer."),onConfirm:()=>{E&&(({id:n,name:a})=>{d.A.delete({endpoint:`/api/v1/annotation_layer/${n}`}).then(()=>{w(),N(null),t((0,r.t)("Deleted: %s",a))},(0,h.JF)(t=>e((0,r.t)("There was an issue deleting %s: %s",a,t))))})(E)},onHide:()=>N(null),open:!0,title:(0,r.t)("Delete Layer?")}),(0,a.Y)(g.h,{title:(0,r.t)("Please confirm"),description:(0,r.t)("Are you sure you want to delete the selected layers?"),onConfirm:n=>{d.A.delete({endpoint:`/api/v1/annotation_layer/?q=${o().encode(n.map(({id:e})=>e))}`}).then(({json:e={}})=>{w(),t(e.message)},(0,h.JF)(t=>e((0,r.t)("There was an issue deleting the selected layers: %s",t))))},children:n=>{let l=B?[{key:"delete",name:(0,r.t)("Delete"),onSelect:n,type:"danger"}]:[];return(0,a.Y)(f.uO,{className:"annotation-layers-list-view",columns:M,count:p,data:v,fetchData:_,filters:I,initialSort:L,loading:i,pageSize:25,bulkActions:l,bulkSelectEnabled:x,disableBulkSelect:S,addDangerToast:e,addSuccessToast:t,emptyState:J,refreshData:w})}})]})})}}]);