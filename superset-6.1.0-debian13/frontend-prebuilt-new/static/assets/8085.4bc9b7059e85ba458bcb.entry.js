"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[2976,8085],{54303(e,a,t){t.d(a,{hT:()=>e7,Ay:()=>aa});var n,l,i,r,o,s=t(2445),d=t(27124),c=t(19202),u=t(27243),h=t(85614),p=t(24002),m=t(61574),g=t(21804),b=t(22389),v=t(89920),f=t(33296),_=t(68292),y=t(17437),x=t(90617),Y=t(60685),w=t(79592),S=t(8563);function C(){return(C=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let k=e=>{let{buttonText:a,icon:t,altText:n}=e,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.getOwnPropertyNames(e);for(n=0;n<i.length;n++)!(a.indexOf(t=i[n])>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t]);return l}(e,["buttonText","icon","altText"]);return(0,s.Y)(w.Z,C({hoverable:!0,role:"button",tabIndex:0,"aria-label":a,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(l.onClick&&l.onClick(e)," "===e.key&&e.preventDefault()),null==l.onKeyDown||l.onKeyDown.call(l,e)},cover:(0,s.Y)("div",{css:(0,y.AH)`
          display: flex;
          align-content: center;
          align-items: center;
          height: 100px;
        `,children:t?(0,s.Y)("img",{src:t,alt:n||a,css:(0,y.AH)`
              width: 100%;
              object-fit: contain;
              height: 48px;
            `}):(0,s.Y)(Y.F.DatabaseOutlined,{iconSize:"xxl","aria-label":"default-icon"})}),css:e=>C({padding:3*e.sizeUnit,textAlign:"center"},l.style)},l,{children:(0,s.Y)(S.m,{title:a,children:(0,s.Y)(x.o.Text,{ellipsis:!0,children:a})})}))};var F=t(34835),D=t(29138),$=t(56030),A=t(80967),N=t(22022),O=t(10020),E=t(14121),T=t(7070),z=t(18847),P=t(98267),U=t(62193),L=t.n(U),q=t(44383),I=t.n(q),M=t(84151),R=((n={}).SqlalchemyUri="sqlalchemy_form",n.DynamicForm="dynamic_form",n),H=((l={}).GSheet="gsheets",l.BigQuery="bigquery",l.Snowflake="snowflake",l),j=t(46942),K=t.n(j),B=t(51281),V=t(10938),J=t(80023),G=t(35630),Q=t(87552);let W=(0,y.AH)`
  margin-bottom: 0;
`,X=h.styled.header`
  padding: ${({theme:e})=>2*e.sizeUnit}px
    ${({theme:e})=>4*e.sizeUnit}px;
  line-height: ${({theme:e})=>6*e.sizeUnit}px;

  .helper-top {
    padding-bottom: 0;
    color: ${({theme:e})=>e.colorText};
    font-size: ${({theme:e})=>e.fontSizeSM}px;
    margin: 0;
  }

  .subheader-text {
    line-height: ${({theme:e})=>4.25*e.sizeUnit}px;
  }

  .helper-bottom {
    padding-top: 0;
    color: ${({theme:e})=>e.colorText};
    font-size: ${({theme:e})=>e.fontSizeSM}px;
    margin: 0;
  }

  h4 {
    color: ${({theme:e})=>e.colorText};
    font-size: ${({theme:e})=>e.fontSizeLG}px;
    margin: 0;
    padding: 0;
    line-height: ${({theme:e})=>8*e.sizeUnit}px;
  }

  .select-db {
    padding-bottom: ${({theme:e})=>2*e.sizeUnit}px;
    .helper {
      margin: 0;
    }

    h4 {
      margin: 0 0 ${({theme:e})=>4*e.sizeUnit}px;
    }
  }
`,Z=(0,y.AH)`
  .ant-tabs-top {
    margin-top: 0;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 0;
  }
  .ant-tabs-tab {
    margin-right: 0;
  }
`,ee=(0,y.AH)`
  .ant-modal-body {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
`,ea=e=>(0,y.AH)`
  margin-bottom: ${5*e.sizeUnit}px;
  svg {
    margin-bottom: ${.25*e.sizeUnit}px;
  }
  display: flex;
  align-items: center;
`,et=e=>(0,y.AH)`
  padding-left: ${2*e.sizeUnit}px;
  padding-right: ${2*e.sizeUnit}px;
`,en=e=>(0,y.AH)`
  padding: ${4*e.sizeUnit}px ${4*e.sizeUnit}px 0;
`,el=e=>(0,y.AH)`
  .ant-select-dropdown {
    height: ${40*e.sizeUnit}px;
  }

  .ant-modal-header {
    padding: ${4.5*e.sizeUnit}px ${4*e.sizeUnit}px
      ${4*e.sizeUnit}px;
  }

  .ant-modal-close-x .close {
    opacity: 1;
  }

  .ant-modal-body {
    height: ${180.5*e.sizeUnit}px;
  }

  .ant-modal-footer {
    height: ${16.25*e.sizeUnit}px;
  }
`,ei=e=>(0,y.AH)`
  margin: ${4*e.sizeUnit}px 0;
`,er=h.styled.div`
  ${({theme:e})=>(0,y.AH)`
    margin: 0 ${4*e.sizeUnit}px ${4*e.sizeUnit}px;
  `}
`,eo=e=>(0,y.AH)`
  .required {
    margin-left: ${e.sizeUnit/2}px;
    color: ${e.colorError};
  }

  .helper {
    display: block;
    padding: ${e.sizeUnit}px 0;
    color: ${e.colorTextSecondary};
    font-size: ${e.fontSizeSM}px;
    text-align: left;
  }
`,es=e=>(0,y.AH)`
  .form-group {
    margin-bottom: ${4*e.sizeUnit}px;
    &-w-50 {
      display: inline-block;
      width: ${`calc(50% - ${4*e.sizeUnit}px)`};
      & + .form-group-w-50 {
        margin-left: ${8*e.sizeUnit}px;
      }
    }
  }
  .helper {
    color: ${e.colorTextSecondary};
    font-size: ${e.fontSizeSM}px;
    margin-top: ${1.5*e.sizeUnit}px;
  }
  .ant-tabs-content-holder {
    overflow: auto;
    max-height: 480px;
  }
`,ed=h.styled.div`
  ${({theme:e})=>(0,y.AH)`
    margin-bottom: ${6*e.sizeUnit}px;
    &.mb-0 {
      margin-bottom: 0;
    }
    &.mb-8 {
      margin-bottom: ${2*e.sizeUnit}px;
    }

    &.extra-container {
      padding-top: ${2*e.sizeUnit}px;
    }

    .input-container {
      display: flex;
      align-items: top;

      label {
        display: flex;
        margin-left: ${2*e.sizeUnit}px;
        margin-top: ${.75*e.sizeUnit}px;
        font-family: ${e.fontFamily};
        font-size: ${e.fontSize}px;
      }

      i {
        margin: 0 ${e.sizeUnit}px;
      }
    }

    input,
    textarea {
      flex: 1 1 auto;
    }

    textarea {
      height: 160px;
      resize: none;
    }

    input::placeholder,
    textarea::placeholder {
      color: ${e.colorTextPlaceholder};
    }

    textarea,
    input[type='text'],
    input[type='number'] {
      padding: ${1.5*e.sizeUnit}px ${2*e.sizeUnit}px;
      border-style: none;
      border: 1px solid ${e.colorBorder};
      border-radius: ${e.borderRadius}px;

      &[name='name'] {
        flex: 0 1 auto;
        width: 40%;
      }
    }
    &.expandable {
      height: 0;
      overflow: hidden;
      transition: height 0.25s;
      margin-left: ${8*e.sizeUnit}px;
      margin-bottom: 0;
      padding: 0;
      &.open {
        height: ${108}px;
        padding-right: ${5*e.sizeUnit}px;
      }
    }
  `}
`,ec=(0,h.styled)(Q.iN)`
  flex: 1 1 auto;
  /* Border is already applied by AceEditor itself */
`,eu=h.styled.div`
  padding-top: ${({theme:e})=>e.sizeUnit}px;
  .input-container {
    padding-top: ${({theme:e})=>e.sizeUnit}px;
    padding-bottom: ${({theme:e})=>e.sizeUnit}px;
  }
  &.expandable {
    height: 0;
    overflow: hidden;
    transition: height 0.25s;
    margin-left: ${({theme:e})=>7*e.sizeUnit}px;
    &.open {
      height: ${261}px;
      &.ctas-open {
        height: ${363}px;
      }
    }
  }
`,eh=h.styled.div`
  padding: 0 ${({theme:e})=>4*e.sizeUnit}px;
  margin-top: ${({theme:e})=>6*e.sizeUnit}px;
`,ep=e=>(0,y.AH)`
  text-transform: initial;
  padding: 0 ${4*e.sizeUnit}px;
  padding-right: ${2*e.sizeUnit}px;
`,em=e=>(0,y.AH)`
  font-size: ${3.5*e.sizeUnit}px;
  text-transform: initial;
  padding-right: ${2*e.sizeUnit}px;
`,eg=h.styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;

  .helper {
    color: ${({theme:e})=>e.colorTextSecondary};
    font-size: ${({theme:e})=>e.fontSizeSM}px;
    margin: 0px;
  }
`;h.styled.div`
  color: ${({theme:e})=>e.colorText};
  font-weight: ${({theme:e})=>e.fontWeightStrong};
  font-size: ${({theme:e})=>e.fontSize}px;
`,h.styled.div`
  color: ${({theme:e})=>e.colorText};
  font-size: ${({theme:e})=>e.fontSizeSM}px;
`;let eb=h.styled.div`
  color: ${({theme:e})=>e.colorTextSecondary};
  font-size: ${({theme:e})=>e.fontSizeSM}px;
`,ev=h.styled.div`
  color: ${({theme:e})=>e.colorText};
  font-size: ${({theme:e})=>e.fontSizeLG}px;
  font-weight: ${({theme:e})=>e.fontWeightStrong};
`,ef=h.styled.div`
  .catalog-type-select {
    margin: 0 0 20px;
  }

  .label-select {
    color: ${({theme:e})=>e.colorText};
    font-size: 11px;
    margin: 0 5px ${({theme:e})=>2*e.sizeUnit}px;
  }

  .label-paste {
    color: ${({theme:e})=>e.colorTextSecondary};
    font-size: 11px;
    line-height: 16px;
  }

  .input-container {
    margin: ${({theme:e})=>4*e.sizeUnit}px 0;
    display: flex;
    flex-direction: column;
}
  }
  .input-form {
    height: 100px;
    width: 100%;
    border: 1px solid ${({theme:e})=>e.colorBorder};
    border-radius: ${({theme:e})=>e.borderRadius}px;
    resize: vertical;
    padding: ${({theme:e})=>1.5*e.sizeUnit}px
      ${({theme:e})=>2*e.sizeUnit}px;
    &::placeholder {
      color: ${({theme:e})=>e.colorTextPlaceholder};
    }
  }

  .input-container {
    width: 100%;

    button {
      width: fit-content;
    }

    .credentials-uploaded {
      display: flex;
      align-items: center;
      gap: ${({theme:e})=>3*e.sizeUnit}px;
      width: fit-content;
    }

    .credentials-uploaded-btn, .credentials-uploaded-remove {
      flex: 0 0 auto;
    }

    /* hide native file upload input element */
    .input-upload {
      display: none !important;
    }
  }`,e_=h.styled.div`
  .preferred {
    .superset-button {
      margin-left: 0;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: ${({theme:e})=>4*e.sizeUnit}px;
  }

  .preferred-item {
    width: 32%;
    margin-bottom: ${({theme:e})=>2.5*e.sizeUnit}px;
  }

  .available {
    margin: ${({theme:e})=>4*e.sizeUnit}px;
    .available-label {
      font-size: ${({theme:e})=>e.fontSizeLG}px;
      font-weight: ${({theme:e})=>e.fontWeightStrong};
      margin: ${({theme:e})=>6*e.sizeUnit}px 0;
    }
    .available-select {
      width: 100%;
    }
  }

  .label-available-select {
    font-size: ${({theme:e})=>e.fontSizeSM}px;
  }
`,ey=(0,h.styled)(D.$n)`
  width: ${({theme:e})=>40*e.sizeUnit}px;
`,ex=h.styled.div`
  position: sticky;
  top: 0;
  z-index: ${({theme:e})=>e.zIndexPopupBase};
  background: ${({theme:e})=>e.colorBgLayout};
  height: auto;
`,eY=h.styled.div`
  margin-bottom: 16px;

  .catalog-type-select {
    margin: 0 0 20px;
  }

  .gsheet-title {
    font-size: ${({theme:e})=>e.fontSizeLG}px;
    font-weight: ${({theme:e})=>e.fontWeightStrong};
    margin: ${({theme:e})=>10*e.sizeUnit}px 0 16px;
  }

  .catalog-label {
    margin: 0 0 7px;
  }

  .catalog-name {
    display: flex;
    .catalog-name-input {
      width: 95%;
      margin-bottom: 0px;
    }
  }

  .catalog-name-url {
    margin: 4px 0;
    width: 95%;
  }

  .catalog-add-btn {
    width: 95%;
  }
`,ew=h.styled.div`
  margin: ${({theme:e})=>4*e.sizeUnit}px;
  .ant-progress-inner {
    display: none;
  }

  .ant-upload-list-item-card-actions {
    display: none;
  }
`;function eS(){return(eS=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let eC=({db:e,onInputChange:a,onTextChange:t,onEditorChange:n,onExtraInputChange:l,onExtraEditorChange:i,extraExtension:r})=>{var o,c,u,m,g;let b=!!(null==e?void 0:e.expose_in_sqllab),v=!!((null==e?void 0:e.allow_ctas)||(null==e?void 0:e.allow_cvas)),f=null==e||null==(o=e.engine_information)?void 0:o.supports_file_upload,_=null==e||null==(c=e.engine_information)?void 0:c.supports_dynamic_catalog,y=JSON.parse((null==e?void 0:e.extra)||"{}",(e,a)=>"engine_params"===e&&"object"==typeof a?JSON.stringify(a):a),x=(0,G.p)(null==e?void 0:e.masked_encrypted_extra,{errorPrefix:"Invalid secure extra JSON"}),Y=Object.keys((null==y?void 0:y.metadata_params)||{}).length?"string"==typeof(null==y?void 0:y.metadata_params)?null==y?void 0:y.metadata_params:JSON.stringify(null==y?void 0:y.metadata_params):"",w=(0,G.p)(Y,{errorPrefix:"Invalid metadata parameters JSON"}),S=Object.keys((null==y?void 0:y.engine_params)||{}).length?"string"==typeof(null==y?void 0:y.engine_params)?null==y?void 0:y.engine_params:JSON.stringify(null==y?void 0:y.engine_params):"",C=(0,G.p)(S,{errorPrefix:"Invalid engine parameters JSON"}),k=(0,h.useTheme)(),F=null==r?void 0:r.component,D=null==r?void 0:r.logo,$=null==r?void 0:r.description,O=!!(0,B.G7)(B.TO.ForceSqlLabRunAsync)||!!(null==e?void 0:e.allow_run_async),E=(0,B.G7)(B.TO.ForceSqlLabRunAsync),[T,z]=(0,p.useState)(),[P,U]=(0,p.useState)("");return(0,p.useEffect)(()=>{e&&U(((null==y?void 0:y.schemas_allowed_for_file_upload)||[]).join(","))},[null==e?void 0:e.extra]),(0,p.useEffect)(()=>{b||void 0===T||z(void 0)},[b]),(0,s.Y)(V.S,{expandIconPosition:"end",accordion:!0,modalMode:!0,activeKey:T,onChange:e=>z(e),items:[{key:"sql-lab",label:(0,s.Y)(J.s,{title:(0,d.t)("SQL Lab"),subtitle:(0,d.t)("Adjust how this database will interact with SQL Lab."),testId:"sql-lab-label-test"}),children:(0,s.Y)(s.FK,{children:(0,s.FD)(ed,{css:W,children:[(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(N.Checkbox,{id:"expose_in_sqllab",name:"expose_in_sqllab",indeterminate:!1,checked:!!(null==e?void 0:e.expose_in_sqllab),onChange:a,children:(0,d.t)("Expose database in SQL Lab")}),(0,s.Y)(A.I,{tooltip:(0,d.t)("Allow this database to be queried in SQL Lab")})]}),(0,s.FD)(eu,{className:K()("expandable",{open:b,"ctas-open":v}),children:[(0,s.Y)(ed,{css:W,children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(N.Checkbox,{id:"allow_ctas",name:"allow_ctas",indeterminate:!1,checked:!!(null==e?void 0:e.allow_ctas),onChange:a,children:(0,d.t)("Allow CREATE TABLE AS")}),(0,s.Y)(A.I,{tooltip:(0,d.t)("Allow creation of new tables based on queries")})]})}),(0,s.FD)(ed,{css:W,children:[(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(N.Checkbox,{id:"allow_cvas",name:"allow_cvas",indeterminate:!1,checked:!!(null==e?void 0:e.allow_cvas),onChange:a,children:(0,d.t)("Allow CREATE VIEW AS")}),(0,s.Y)(A.I,{tooltip:(0,d.t)("Allow creation of new views based on queries")})]}),(0,s.FD)(ed,{className:K()("expandable",{open:v}),children:[(0,s.Y)("div",{className:"control-label",children:(0,d.t)("CTAS & CVAS SCHEMA")}),(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(N.Input,{type:"text",name:"force_ctas_schema",placeholder:(0,d.t)("Create or select schema..."),onChange:a,value:(null==e?void 0:e.force_ctas_schema)||""})}),(0,s.Y)("div",{className:"helper",children:(0,d.t)("Force all tables and views to be created in this schema when clicking CTAS or CVAS in SQL Lab.")})]})]}),(0,s.Y)(ed,{css:W,children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(N.Checkbox,{id:"allow_dml",name:"allow_dml",indeterminate:!1,checked:!!(null==e?void 0:e.allow_dml),onChange:a,children:(0,d.t)("Allow DDL and DML")}),(0,s.Y)(A.I,{tooltip:(0,d.t)("Allow the execution of DDL (Data Definition Language: CREATE, DROP, TRUNCATE, etc.) and DML (Data Modification Language: INSERT, UPDATE, DELETE, etc)")})]})}),(0,s.Y)(ed,{css:W,children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(N.Checkbox,{id:"cost_estimate_enabled",name:"cost_estimate_enabled",indeterminate:!1,checked:!!(null==y?void 0:y.cost_estimate_enabled),onChange:l,children:(0,d.t)("Enable query cost estimation")}),(0,s.Y)(A.I,{tooltip:(0,d.t)("For Bigquery, Presto and Postgres, shows a button to compute cost before running a query.")})]})}),(0,s.Y)(ed,{css:W,children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(N.Checkbox,{id:"allows_virtual_table_explore",name:"allows_virtual_table_explore",indeterminate:!1,checked:(null==y?void 0:y.allows_virtual_table_explore)!==!1,onChange:l,children:(0,d.t)("Allow this database to be explored")}),(0,s.Y)(A.I,{tooltip:(0,d.t)("When enabled, users are able to visualize SQL Lab results in Explore.")})]})}),(0,s.Y)(ed,{css:W,children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(N.Checkbox,{id:"disable_data_preview",name:"disable_data_preview",indeterminate:!1,checked:!!(null==y?void 0:y.disable_data_preview),onChange:l,children:(0,d.t)("Disable SQL Lab data preview queries")}),(0,s.Y)(A.I,{tooltip:(0,d.t)("Disable data preview when fetching table metadata in SQL Lab.  Useful to avoid browser performance issues when using  databases with very wide tables.")})]})}),(0,s.Y)(ed,{children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(N.Checkbox,{id:"expand_rows",name:"expand_rows",indeterminate:!1,checked:!!(null==y||null==(u=y.schema_options)?void 0:u.expand_rows),onChange:l,children:(0,d.t)("Enable row expansion in schemas")}),(0,s.Y)(A.I,{tooltip:(0,d.t)("For Trino, describe full schemas of nested ROW types, expanding them with dotted paths")})]})})]})]})})},{key:"performance",label:(0,s.Y)(J.s,{title:(0,d.t)("Performance"),subtitle:(0,d.t)("Adjust performance settings of this database."),testId:"performance-label-test"}),children:(0,s.FD)(s.FK,{children:[(0,s.FD)(ed,{className:"mb-8",children:[(0,s.Y)("div",{className:"control-label",children:(0,d.t)("Chart cache timeout")}),(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(N.Input,{type:"number",name:"cache_timeout",value:(null==e?void 0:e.cache_timeout)||"",placeholder:(0,d.t)("Enter duration in seconds"),onChange:a,"data-test":"cache-timeout-test"})}),(0,s.Y)("div",{className:"helper",children:(0,d.t)("Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires, and -1 bypasses the cache. Note this defaults to the global timeout if undefined.")})]}),(0,s.FD)(ed,{children:[(0,s.Y)("div",{className:"control-label",children:(0,d.t)("Schema cache timeout")}),(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(N.Input,{type:"number",name:"schema_cache_timeout",value:(null==y||null==(m=y.metadata_cache_timeout)?void 0:m.schema_cache_timeout)||"",placeholder:(0,d.t)("Enter duration in seconds"),onChange:l,"data-test":"schema-cache-timeout-test"})}),(0,s.Y)("div",{className:"helper",children:(0,d.t)("Duration (in seconds) of the metadata caching timeout for schemas of this database. If left unset, the cache never expires.")})]}),(0,s.FD)(ed,{children:[(0,s.Y)("div",{className:"control-label",children:(0,d.t)("Table cache timeout")}),(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(N.Input,{type:"number",name:"table_cache_timeout",value:(null==y||null==(g=y.metadata_cache_timeout)?void 0:g.table_cache_timeout)||"",placeholder:(0,d.t)("Enter duration in seconds"),onChange:l,"data-test":"table-cache-timeout-test"})}),(0,s.Y)("div",{className:"helper",children:(0,d.t)("Duration (in seconds) of the metadata caching timeout for tables of this database. If left unset, the cache never expires. ")})]}),(0,s.Y)(ed,{css:{no_margin_bottom:W},children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(N.Checkbox,{id:"allow_run_async",name:"allow_run_async",indeterminate:!1,checked:O,onChange:a,children:(0,d.t)("Asynchronous query execution")}),(0,s.Y)(A.I,{tooltip:(0,d.t)("Operate the database in asynchronous mode, meaning that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.")}),E&&(0,s.Y)(A.I,{iconStyle:{color:k.colorError},tooltip:(0,d.t)("This option has been disabled by the administrator.")})]})}),(0,s.Y)(ed,{css:{no_margin_bottom:W},children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(N.Checkbox,{id:"cancel_query_on_windows_unload",name:"cancel_query_on_windows_unload",indeterminate:!1,checked:!!(null==y?void 0:y.cancel_query_on_windows_unload),onChange:l,children:(0,d.t)("Cancel query on window unload event")}),(0,s.Y)(A.I,{tooltip:(0,d.t)("Terminate running queries when browser window closed or navigated to another page. Available for Presto, Hive, MySQL, Postgres and Snowflake databases.")})]})})]})},{key:"security",label:(0,s.Y)(J.s,{title:(0,d.t)("Security"),testId:"security-label-test",subtitle:(0,d.t)("Add extra connection information.")}),children:(0,s.FD)(s.FK,{children:[(0,s.Y)(ed,{children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(N.Checkbox,{id:"per_user_caching",name:"per_user_caching",indeterminate:!1,checked:!!(null==y?void 0:y.per_user_caching),onChange:l,children:(0,d.t)("Per user caching")}),(0,s.Y)(A.I,{tooltip:(0,d.t)("Cache data separately for each user based on their data access roles and permissions. When disabled, a single cache will be used for all users.")})]})}),(0,s.Y)(ed,{children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(N.Checkbox,{id:"impersonate_user",name:"impersonate_user",indeterminate:!1,checked:!!(null==e?void 0:e.impersonate_user),onChange:a,children:(0,d.t)("Impersonate logged in user (Presto, Trino, Drill, Hive, and Google Sheets)")}),(0,s.Y)(A.I,{tooltip:(0,d.t)("If Presto or Trino, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them. If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.")})]})}),f&&(0,s.Y)(ed,{children:(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(N.Checkbox,{id:"allow_file_upload",name:"allow_file_upload",indeterminate:!1,checked:!!(null==e?void 0:e.allow_file_upload),onChange:a,children:(0,d.t)("Allow file uploads to database")})})}),f&&!!(null==e?void 0:e.allow_file_upload)&&(0,s.FD)(ed,{className:"extra-container",children:[(0,s.Y)("div",{className:"control-label",children:(0,d.t)("Schemas allowed for File upload")}),(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(N.Input,{type:"text",name:"schemas_allowed_for_file_upload",value:P,placeholder:(0,d.t)("schema1,schema2"),onChange:e=>U(e.target.value),onBlur:()=>l({target:{type:"text",name:"schemas_allowed_for_file_upload",value:P}})})}),(0,s.Y)("div",{className:"helper",children:(0,d.t)("A comma-separated list of schemas that files are allowed to upload to.")})]}),(0,s.FD)(ed,{children:[(0,s.Y)("div",{className:"control-label",children:(0,d.t)("Secure extra")}),(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(ec,{name:"masked_encrypted_extra",value:(null==e?void 0:e.masked_encrypted_extra)||"",placeholder:(0,d.t)("Secure extra"),onChange:e=>n({json:e,name:"masked_encrypted_extra"}),width:"100%",height:"160px",annotations:x})}),(0,s.Y)("div",{className:"helper",children:(0,s.Y)("div",{children:(0,d.t)("JSON string containing additional connection configuration. This is used to provide connection information for systems like Hive, Presto and BigQuery which do not conform to the username:password syntax normally used by SQLAlchemy.")})})]}),(0,s.FD)(ed,{children:[(0,s.Y)("div",{className:"control-label",children:(0,d.t)("Root certificate")}),(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(N.Input.TextArea,{name:"server_cert",value:(null==e?void 0:e.server_cert)||"",placeholder:(0,d.t)("Enter CA_BUNDLE"),onChange:t})}),(0,s.Y)("div",{className:"helper",children:(0,d.t)("Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.")})]})]})},...r&&F&&$?[eS({key:null==r?void 0:r.title},(null==r.enabled?void 0:r.enabled.call(r))?{}:{collapsible:"disabled"},{label:(0,s.Y)(J.s,{title:(0,s.FD)(s.FK,{children:[D&&(0,s.Y)(D,{}),null==r?void 0:r.title]}),subtitle:(0,s.Y)($,{})},null==r?void 0:r.title),children:(0,s.Y)(ed,{css:W,children:(0,s.Y)(F,{db:e,onEdit:r.onEdit})})})]:[],{key:"other",label:(0,s.Y)(J.s,{title:(0,d.t)("Other"),subtitle:(0,d.t)("Additional settings."),testId:"other-label-test"}),children:(0,s.FD)(s.FK,{children:[(0,s.FD)(ed,{children:[(0,s.Y)("div",{className:"control-label",children:(0,d.t)("Metadata Parameters")}),(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(ec,{name:"metadata_params",placeholder:(0,d.t)("Metadata Parameters"),onChange:e=>i({json:e,name:"metadata_params"}),width:"100%",height:"160px",value:Object.keys((null==y?void 0:y.metadata_params)||{}).length?"string"==typeof(null==y?void 0:y.metadata_params)?null==y?void 0:y.metadata_params:JSON.stringify(null==y?void 0:y.metadata_params):"",annotations:w})}),(0,s.Y)("div",{className:"helper",children:(0,s.Y)("div",{children:(0,d.t)("The metadata_params object gets unpacked into the sqlalchemy.MetaData call.")})})]}),(0,s.FD)(ed,{children:[(0,s.Y)("div",{className:"control-label",children:(0,d.t)("Engine Parameters")}),(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(ec,{name:"engine_params",placeholder:(0,d.t)("Engine Parameters"),onChange:e=>i({json:e,name:"engine_params"}),width:"100%",height:"160px",value:Object.keys((null==y?void 0:y.engine_params)||{}).length?null==y?void 0:y.engine_params:"",annotations:C})}),(0,s.Y)("div",{className:"helper",children:(0,s.Y)("div",{children:(0,d.t)("The engine_params object gets unpacked into the sqlalchemy.create_engine call.")})})]}),(0,s.FD)(ed,{children:[(0,s.Y)("div",{className:"control-label","data-test":"version-label-test",children:(0,d.t)("Version")}),(0,s.Y)("div",{className:"input-container","data-test":"version-spinbutton-test",children:(0,s.Y)(N.Input,{type:"text",name:"version",placeholder:(0,d.t)("Version number"),onChange:l,value:(null==y?void 0:y.version)||""})}),(0,s.Y)("div",{className:"helper",children:(0,d.t)("Specify the database version. This is used with Presto for query cost estimation, and Dremio for syntax changes, among others.")})]}),(0,s.Y)(ed,{css:W,children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(N.Checkbox,{id:"disable_drill_to_detail",name:"disable_drill_to_detail",indeterminate:!1,checked:!!(null==y?void 0:y.disable_drill_to_detail),onChange:l,children:(0,d.t)("Disable drill to detail")}),(0,s.Y)(A.I,{tooltip:(0,d.t)("Disables the drill to detail feature for this database.")})]})}),_&&(0,s.Y)(ed,{css:W,children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(N.Checkbox,{id:"allow_multi_catalog",name:"allow_multi_catalog",indeterminate:!1,checked:!!(null==y?void 0:y.allow_multi_catalog),onChange:l,children:(0,d.t)("Allow changing catalogs")}),(0,s.Y)(A.I,{tooltip:(0,d.t)("Give access to multiple catalogs in a single database connection.")})]})})]})}]})};var ek=t(89333);let eF=({db:e,onInputChange:a,testConnection:t,conf:n,testInProgress:l=!1,children:i})=>{var r,o;let c=(null==ek.A||null==(r=ek.A.DB_MODAL_SQLALCHEMY_FORM)?void 0:r.SQLALCHEMY_DOCS_URL)||"https://docs.sqlalchemy.org/en/13/core/engines.html",u=(null==ek.A||null==(o=ek.A.DB_MODAL_SQLALCHEMY_FORM)?void 0:o.SQLALCHEMY_DISPLAY_TEXT)||"SQLAlchemy docs";return(0,s.FD)(s.FK,{children:[(0,s.FD)(ed,{children:[(0,s.FD)("div",{className:"control-label",children:[(0,d.t)("Display Name"),(0,s.Y)("span",{className:"required",children:"*"})]}),(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(N.Input,{name:"database_name","data-test":"database-name-input",value:(null==e?void 0:e.database_name)||"",placeholder:(0,d.t)("Name your database"),onChange:a})}),(0,s.Y)("div",{className:"helper",children:(0,d.t)("Pick a name to help you identify this database.")})]}),(0,s.FD)(ed,{children:[(0,s.FD)("div",{className:"control-label",children:[(0,d.t)("SQLAlchemy URI"),(0,s.Y)("span",{className:"required",children:"*"})]}),(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(N.Input,{name:"sqlalchemy_uri","data-test":"sqlalchemy-uri-input",value:(null==e?void 0:e.sqlalchemy_uri)||"",autoComplete:"off",placeholder:(null==e?void 0:e.sqlalchemy_uri_placeholder)||(0,d.t)("dialect+driver://username:password@host:port/database"),onChange:a})}),(0,s.FD)("div",{className:"helper",children:[(0,d.t)("Refer to the")," ",(0,s.Y)("a",{href:c||(null==n?void 0:n.SQLALCHEMY_DOCS_URL)||"",target:"_blank",rel:"noopener noreferrer",children:u||(null==n?void 0:n.SQLALCHEMY_DISPLAY_TEXT)||""})," ",(0,d.t)("for more information on how to structure your URI.")]})]}),i,(0,s.Y)(D.$n,{onClick:t,loading:l,cta:!0,buttonStyle:"link",css:e=>[(0,y.AH)`
  width: 100%;
  border: 1px solid ${e.colorPrimaryText};
  color: ${e.colorPrimaryText};
  &:hover,
  &:focus {
    border: 1px solid ${e.colorPrimary};
    color: ${e.colorPrimary};
  }
`,(0,y.AH)`
  margin-bottom: ${4*e.sizeUnit}px;
`],children:(0,d.t)("Test connection")})]})};var eD=t(57832),e$=t(93225);function eA(){return(eA=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let eN={CLIENT_ID:(0,d.t)("Client ID"),SECRET:(0,d.t)("Client Secret"),AUTH_URI:(0,d.t)("Authorization Request URI"),TOKEN_URI:(0,d.t)("Token Request URI"),SCOPE:(0,d.t)("Scope")},eO={account:{label:(0,d.t)("Account"),helpText:(0,d.t)("Copy the identifier of the account you are trying to connect to."),placeholder:(0,d.t)("e.g. xy12345.us-east-2.aws")},warehouse:{label:(0,d.t)("Warehouse"),placeholder:(0,d.t)("e.g. compute_wh"),className:"form-group-w-50"},role:{label:(0,d.t)("Role"),placeholder:(0,d.t)("e.g. AccountAdmin"),className:"form-group-w-50"}},eE=({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,field:i})=>{var r,o;return(0,s.Y)(F.M,{id:i,name:i,required:e,value:null==l||null==(r=l.parameters)?void 0:r[i],validationMethods:{onBlur:t},errorMessage:null==n?void 0:n[i],placeholder:eO[i].placeholder,helpText:null==(o=eO[i])?void 0:o.helpText,label:eO[i].label||i,onChange:a.onParametersChange,className:eO[i].className||i})};function eT(e,a,t,n,l,i,r){try{var o=e[i](r),s=o.value}catch(e){t(e);return}o.done?a(s):Promise.resolve(s).then(n,l)}var ez=((i=ez||{})[i.JsonUpload=0]="JsonUpload",i[i.CopyPaste=1]="CopyPaste",i);let eP={gsheets:"service_account_info",bigquery:"credentials_info",datastore:"credentials_info"},eU=({changeMethods:e,isEditMode:a,db:t,editNewDb:n})=>{var l;let[i,r]=(0,p.useState)([]),[o,c]=(0,p.useState)(0..valueOf()),{addDangerToast:u}=(0,T.Yf)(),h=!a,m=(null==t?void 0:t.engine)&&eP[t.engine],g=null==t||null==(l=t.parameters)?void 0:l[m],b=g&&"object"==typeof g?JSON.stringify(g):g;return(0,p.useEffect)(()=>{e.onParametersChange({target:{name:m,value:""}})},[]),(0,s.FD)(ef,{children:[h&&(0,s.FD)(s.FK,{children:[(0,s.Y)(f.l,{children:(0,d.t)("How do you want to enter service account credentials?")}),(0,s.Y)(_.A,{defaultValue:o,css:(0,y.AH)`
              width: 100%;
            `,onChange:e=>c(e),options:[{value:0,label:(0,d.t)("Upload JSON file")},{value:1,label:(0,d.t)("Copy and Paste JSON credentials")}]})]}),1===o||a||n?(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(f.l,{children:(0,d.t)("Service Account")}),(0,s.Y)(N.Input.TextArea,{className:"input-form",name:m,value:"boolean"==typeof b?String(b):b,onChange:e.onParametersChange,placeholder:(0,d.t)("Paste content of service credentials JSON file here")})]}):h&&(0,s.Y)("div",{className:"input-container",css:e=>ea(e),children:(0,s.Y)(N.Upload,{accept:".json",maxCount:1,fileList:i,beforeUpload:()=>!1,onRemove:()=>(r([]),e.onParametersChange({target:{name:m,value:""}}),!0),onChange:a=>{var t;return(t=function*(){var t,n;let l=null==(n=a.fileList)||null==(t=n[0])?void 0:t.originFileObj;if(l)try{let t=yield new Promise((e,a)=>{let t=new FileReader;t.readAsText(l),t.onload=()=>e(t.result),t.onerror=a});e.onParametersChange({target:{type:null,name:m,value:t,checked:!1}}),r(a.fileList)}catch(e){r([]),u((0,d.t)("Unable to read the file, please refresh and try again."))}else e.onParametersChange({target:{name:m,value:""}})},function(){var e=this,a=arguments;return new Promise(function(n,l){var i=t.apply(e,a);function r(e){eT(i,n,l,r,o,"next",e)}function o(e){eT(i,n,l,r,o,"throw",e)}r(void 0)})})()},children:(0,s.Y)(D.$n,{icon:(0,s.Y)(Y.F.LinkOutlined,{iconSize:"m"}),children:(0,d.t)("Upload credentials")})})})]})},eL=({clearValidationErrors:e,changeMethods:a,db:t,dbModel:n})=>{var l,i,r;let[o,c]=(0,p.useState)(!1),u=(0,B.G7)(B.TO.SshTunneling),h=(null==n||null==(l=n.engine_information)?void 0:l.disable_ssh_tunneling)||!1,m=u&&!h;return(0,p.useEffect)(()=>{var e;m&&(null==t||null==(e=t.parameters)?void 0:e.ssh)!==void 0&&c(t.parameters.ssh)},[null==t||null==(i=t.parameters)?void 0:i.ssh,m]),(0,p.useEffect)(()=>{var e;m&&(null==t||null==(e=t.parameters)?void 0:e.ssh)===void 0&&!L()(null==t?void 0:t.ssh_tunnel)&&a.onParametersChange({target:{type:"toggle",name:"ssh",checked:!0,value:!0}})},[a,null==t||null==(r=t.parameters)?void 0:r.ssh,null==t?void 0:t.ssh_tunnel,m]),m?(0,s.FD)("div",{css:e=>ea(e),children:[(0,s.Y)(N.Switch,{checked:o,onChange:t=>{c(t),a.onParametersChange({target:{type:"toggle",name:"ssh",checked:!0,value:t}}),e()},"data-test":"ssh-tunnel-switch"}),(0,s.Y)("span",{css:et,children:(0,d.t)("SSH Tunnel")}),(0,s.Y)(A.I,{tooltip:(0,d.t)("SSH Tunnel configuration parameters"),placement:"right"})]}):null},eq=["host","port","database","default_catalog","default_schema","username","password","access_token","http_path","http_path_field","database_name","project_id","catalog","credentials_info","service_account_info","query","encryption","account","warehouse","role","ssh","oauth2_client_info"],eI={host:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>{var r;return(0,s.Y)(F.M,{isValidating:i,id:"host",name:"host",value:null==l||null==(r=l.parameters)?void 0:r.host,required:e,hasTooltip:!0,tooltipText:(0,d.t)("This can be either an IP address (e.g. 127.0.0.1) or a domain name (e.g. mydatabase.com)."),validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.host,placeholder:(0,d.t)("e.g. 127.0.0.1"),className:"form-group-w-50",label:(0,d.t)("Host"),onChange:a.onParametersChange})},http_path:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>{var r,o;let c=JSON.parse((null==l?void 0:l.extra)||"{}");return(0,s.Y)(F.M,{isValidating:i,id:"http_path",name:"http_path",required:e,value:null==(o=c.engine_params)||null==(r=o.connect_args)?void 0:r.http_path,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.http_path,placeholder:(0,d.t)("e.g. sql/protocolv1/o/12345"),label:(0,d.t)("HTTP Path"),onChange:a.onExtraInputChange,helpText:(0,d.t)("Copy the name of the HTTP Path of your cluster.")})},http_path_field:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>{var r;return(0,s.Y)(F.M,{id:"http_path_field",name:"http_path_field",required:e,isValidating:i,value:null==l||null==(r=l.parameters)?void 0:r.http_path_field,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.http_path,placeholder:(0,d.t)("e.g. sql/protocolv1/o/12345"),label:(0,d.t)("HTTP Path"),onChange:a.onParametersChange,helpText:(0,d.t)("Copy the name of the HTTP Path of your cluster.")})},port:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>{var r;return(0,s.Y)(s.FK,{children:(0,s.Y)(F.M,{id:"port",name:"port",type:"number",isValidating:i,required:e,value:null==l||null==(r=l.parameters)?void 0:r.port,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.port,placeholder:(0,d.t)("e.g. 5432"),className:"form-group-w-50",label:(0,d.t)("Port"),onChange:a.onParametersChange})})},database:({required:e,changeMethods:a,getValidation:t,validationErrors:n,placeholder:l,db:i,isValidating:r})=>{var o;return(0,s.Y)(F.M,{isValidating:r,id:"database",name:"database",required:e,value:null==i||null==(o=i.parameters)?void 0:o.database,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.database,placeholder:null!=l?l:(0,d.t)("e.g. world_population"),label:(0,d.t)("Database name"),onChange:a.onParametersChange,helpText:(0,d.t)("Copy the name of the database you are trying to connect to.")})},default_catalog:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>{var r;return(0,s.Y)(F.M,{isValidating:i,id:"default_catalog",name:"default_catalog",required:e,value:null==l||null==(r=l.parameters)?void 0:r.default_catalog,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.default_catalog,placeholder:(0,d.t)("e.g. hive_metastore"),label:(0,d.t)("Default Catalog"),onChange:a.onParametersChange,helpText:(0,d.t)("The default catalog that should be used for the connection.")})},default_schema:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>{var r;return(0,s.Y)(F.M,{id:"default_schema",name:"default_schema",required:e,isValidating:i,value:null==l||null==(r=l.parameters)?void 0:r.default_schema,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.default_schema,placeholder:(0,d.t)("e.g. default"),label:(0,d.t)("Default Schema"),onChange:a.onParametersChange,helpText:(0,d.t)("The default schema that should be used for the connection.")})},username:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>{var r;return(0,s.Y)(F.M,{id:"username",name:"username",required:e,isValidating:i,value:null==l||null==(r=l.parameters)?void 0:r.username,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.username,placeholder:(0,d.t)("e.g. Analytics"),label:(0,d.t)("Username"),onChange:a.onParametersChange})},password:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isEditMode:i,isValidating:r})=>{var o;return(0,s.Y)(F.M,{id:"password",name:"password",required:e,isValidating:r,visibilityToggle:!i,value:null==l||null==(o=l.parameters)?void 0:o.password,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.password,placeholder:(0,d.t)("e.g. ********"),label:(0,d.t)("Password"),onChange:a.onParametersChange})},oauth2_client_info:({changeMethods:e,db:a,default_value:t})=>{var n,l,i,r,o;let c=JSON.parse((null==a?void 0:a.masked_encrypted_extra)||"{}"),[u,h]=(0,p.useState)({id:(null==(n=c.oauth2_client_info)?void 0:n.id)||"",secret:(null==(l=c.oauth2_client_info)?void 0:l.secret)||"",authorization_request_uri:(null==(i=c.oauth2_client_info)?void 0:i.authorization_request_uri)||(null==t?void 0:t.authorization_request_uri)||"",token_request_uri:(null==(r=c.oauth2_client_info)?void 0:r.token_request_uri)||(null==t?void 0:t.token_request_uri)||"",scope:(null==(o=c.oauth2_client_info)?void 0:o.scope)||(null==t?void 0:t.scope)||""}),m=a=>t=>{let n=eA({},u,{[a]:t.target.value});h(n),e.onParametersChange({target:{type:"object",name:"oauth2_client_info",value:n}})};return(0,s.Y)(V.S,{items:[{key:"oauth2-client-information",label:(0,d.t)("OAuth2 client information"),children:(0,s.FD)(s.FK,{children:[(0,s.Y)(e$.e,{label:eN.CLIENT_ID,children:(0,s.Y)(N.Input,{"data-test":"client-id",value:u.id,onChange:m("id")})}),(0,s.Y)(e$.e,{label:eN.SECRET,children:(0,s.Y)(N.Input,{"data-test":"client-secret",type:"password",value:u.secret,onChange:m("secret")})}),(0,s.Y)(e$.e,{label:eN.AUTH_URI,children:(0,s.Y)(N.Input,{"data-test":"client-authorization-request-uri",placeholder:"https://",value:u.authorization_request_uri,onChange:m("authorization_request_uri")})}),(0,s.Y)(e$.e,{label:eN.TOKEN_URI,children:(0,s.Y)(N.Input,{"data-test":"client-token-request-uri",placeholder:"https://",value:u.token_request_uri,onChange:m("token_request_uri")})}),(0,s.Y)(e$.e,{label:eN.SCOPE,children:(0,s.Y)(N.Input,{"data-test":"client-scope",value:u.scope,onChange:m("scope")})})]})}]})},access_token:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isEditMode:i,default_value:r,description:o})=>{var c;return(0,s.Y)(F.M,{id:"access_token",name:"access_token",required:e,visibilityToggle:!i,value:null==l||null==(c=l.parameters)?void 0:c.access_token,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.access_token,placeholder:(0,d.t)("Paste your access token here"),get_url:"string"==typeof r&&r.includes("https://")?r:null,description:o,label:(0,d.t)("Access token"),onChange:a.onParametersChange})},database_name:({changeMethods:e,getValidation:a,validationErrors:t,db:n,isValidating:l})=>(0,s.Y)(s.FK,{children:(0,s.Y)(F.M,{id:"database_name",name:"database_name",required:!0,isValidating:l,value:null==n?void 0:n.database_name,validationMethods:{onBlur:a},errorMessage:null==t?void 0:t.database_name,placeholder:"",label:(0,d.t)("Display Name"),onChange:e.onChange,helpText:(0,d.t)("Pick a nickname for how the database will display in Superset.")})}),query:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>(0,s.Y)(F.M,{id:"query_input",name:"query_input",required:e,isValidating:i,value:(null==l?void 0:l.query_input)||"",validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.query,placeholder:(0,d.t)("e.g. param1=value1&param2=value2"),label:(0,d.t)("Additional Parameters"),onChange:a.onQueryChange,helpText:(0,d.t)("Add additional custom parameters")}),encryption:({isEditMode:e,changeMethods:a,db:t,sslForced:n})=>{var l;return(0,s.FD)("div",{css:e=>ea(e),children:[(0,s.Y)(N.Switch,{disabled:n&&!e,checked:(null==t||null==(l=t.parameters)?void 0:l.encryption)||n,onChange:e=>{a.onParametersChange({target:{type:"toggle",name:"encryption",checked:!0,value:e}})}}),(0,s.Y)("span",{css:et,children:(0,d.t)("SSL")}),(0,s.Y)(A.I,{tooltip:(0,d.t)('SSL Mode "require" will be used.'),placement:"right"})]})},credentials_info:eU,service_account_info:eU,catalog:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l})=>{let i=(null==l?void 0:l.catalog)||[],r=n||{};return(0,s.FD)(eY,{children:[(0,s.Y)(x.o.Title,{level:4,className:"gsheet-title",children:(0,d.t)("Connect Google Sheets as tables to this database")}),(0,s.FD)("div",{children:[null==i?void 0:i.map((n,l)=>{var o,c;return(0,s.FD)(s.FK,{children:[(0,s.Y)(f.l,{className:"catalog-label",children:(0,d.t)("Google Sheet Name and URL")}),(0,s.FD)("div",{className:"catalog-name",children:[(0,s.Y)(F.M,{className:"catalog-name-input",required:e,validationMethods:{onBlur:t},errorMessage:null==(o=r[l])?void 0:o.name,placeholder:(0,d.t)("Enter a name for this sheet"),onChange:e=>{a.onParametersChange({target:{type:`catalog-${l}`,name:"name",value:e.target.value}})},value:n.name}),(null==i?void 0:i.length)>1&&(0,s.Y)(Y.F.CloseOutlined,{css:e=>(0,y.AH)`
                    align-self: center;
                    background: ${e.colorFillSecondary};
                    margin: 5px 5px 8px 5px;

                    &.anticon > * {
                      line-height: 0;
                    }
                  `,iconSize:"m",onClick:()=>a.onRemoveTableCatalog(l)})]}),(0,s.Y)(F.M,{className:"catalog-name-url",required:e,validationMethods:{onBlur:t},errorMessage:null==(c=r[l])?void 0:c.url,placeholder:(0,d.t)("Paste the shareable Google Sheet URL here"),onChange:e=>a.onParametersChange({target:{type:`catalog-${l}`,name:"value",value:e.target.value}}),value:n.value})]})}),(0,s.FD)(ey,{className:"catalog-add-btn",onClick:()=>{a.onAddTableCatalog()},children:["+ ",(0,d.t)("Add sheet")]})]}),(0,s.Y)("div",{className:"helper",children:(0,s.Y)("div",{children:(0,d.t)("In order to connect to non-public sheets you need to either provide a service account or configure an OAuth2 client.")})})]})},warehouse:eE,role:eE,account:eE,ssh:null!=(o=(0,c.a)().get("ssh_tunnel.form.switch"))?o:eL,project_id:({changeMethods:e,getValidation:a,validationErrors:t,db:n,isValidating:l})=>{var i;return(0,s.Y)(s.FK,{children:(0,s.Y)(F.M,{id:"project_id",name:"project_id",required:!0,isValidating:l,value:null==n||null==(i=n.parameters)?void 0:i.project_id,validationMethods:{onBlur:a},errorMessage:null==t?void 0:t.project_id,placeholder:(0,d.t)("your-project-1234-a1"),label:(0,d.t)("Project Id"),onChange:e.onParametersChange,helpText:(0,d.t)("Enter the unique project id for your database.")})})}},eM=({dbModel:e,db:a,editNewDb:t,getPlaceholder:n,getValidation:l,isEditMode:i=!1,onAddTableCatalog:r,onChange:o,onExtraInputChange:d,onEncryptedExtraInputChange:c,onParametersChange:u,onParametersUploadFileChange:h,onQueryChange:p,onRemoveTableCatalog:m,sslForced:g,validationErrors:b,clearValidationErrors:v,isValidating:f})=>{let _=null==e?void 0:e.parameters;return(0,s.Y)(eD.l,{children:(0,s.Y)("div",{css:e=>[en,(0,y.AH)`
  label {
    color: ${e.colorText};
    font-size: ${e.fontSizeSM}px;
    margin-bottom: 0;
  }
`],children:_&&eq.filter(e=>Object.keys(_.properties).includes(e)||"database_name"===e).map(e=>{var s,y,x;return eI[e]({required:null==(s=_.required)?void 0:s.includes(e),changeMethods:{onParametersChange:u,onChange:o,onQueryChange:p,onParametersUploadFileChange:h,onAddTableCatalog:r,onRemoveTableCatalog:m,onExtraInputChange:d,onEncryptedExtraInputChange:c},validationErrors:b,getValidation:l,clearValidationErrors:v,db:a,key:e,field:e,default_value:null==(y=_.properties[e])?void 0:y.default,description:null==(x=_.properties[e])?void 0:x.description,isEditMode:i,sslForced:g,editNewDb:t,isValidating:f,placeholder:n?n(e):void 0})})})})},eR=(0,z.xK)(),eH=eR?eR.support:"https://superset.apache.org/user-docs/databases/#installing-database-drivers",ej={postgresql:"https://superset.apache.org",mssql:"https://superset.apache.org/user-docs/databases/supported/microsoft-sql-server",gsheets:"https://superset.apache.org/user-docs/databases/supported/google-sheets"},eK=({isLoading:e,isEditMode:a,useSqlAlchemyForm:t,hasConnectedDb:n,db:l,dbName:i,dbModel:r,editNewDb:o,fileList:c})=>{var u;let h=c&&(null==c?void 0:c.length)>0,p=(0,s.FD)(X,{children:[(0,s.Y)(eb,{children:null==l?void 0:l.backend}),(0,s.Y)(ev,{children:i})]}),m=(0,s.FD)(X,{children:[(0,s.Y)("p",{className:"helper-top",children:(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:2})}),(0,s.Y)(x.o.Title,{level:4,children:(0,d.t)("Enter Primary Credentials")}),(0,s.FD)("p",{className:"helper-bottom",children:[(0,d.t)("Need help? Learn how to connect your database")," ",(0,s.Y)("a",{href:(null==eR?void 0:eR.default)||eH,target:"_blank",rel:"noopener noreferrer",children:(0,d.t)("here")}),"."]})]}),g=(0,s.Y)(ex,{children:(0,s.FD)(X,{children:[(0,s.Y)("p",{className:"helper-top",children:(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:3,stepLast:3})}),(0,s.Y)(x.o.Title,{level:4,className:"step-3-text",children:(0,d.t)("Database connected")}),(0,s.Y)("p",{className:"subheader-text",children:(0,d.t)(`Create a dataset to begin visualizing your data as a chart or go to
          SQL Lab to query your data.`)})]})}),b=(0,s.Y)(ex,{children:(0,s.FD)(X,{children:[(0,s.Y)("p",{className:"helper-top",children:(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:3})}),(0,s.Y)(x.o.Title,{level:4,children:(0,d.t)("Enter the required %(dbModelName)s credentials",{dbModelName:r.name})}),(0,s.FD)("p",{className:"helper-bottom",children:[(0,d.t)("Need help? Learn more about")," ",(0,s.FD)("a",{href:(u=null==l?void 0:l.engine)?eR?eR[u]||eR.default:ej[u]?ej[u]:`https://superset.apache.org/docs/databases/${u}`:null,target:"_blank",rel:"noopener noreferrer",children:[(0,d.t)("connecting to %(dbModelName)s",{dbModelName:r.name}),"."]})]})]})}),v=(0,s.Y)(ex,{children:(0,s.Y)(X,{children:(0,s.FD)("div",{className:"select-db",children:[(0,s.Y)("p",{className:"helper-top",children:(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:1,stepLast:3})}),(0,s.Y)(x.o.Title,{level:4,children:(0,d.t)("Select a database to connect")})]})})}),f=(0,s.Y)(ex,{children:(0,s.FD)(X,{children:[(0,s.Y)("p",{className:"helper-top",children:(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:2})}),(0,s.Y)(x.o.Title,{level:4,children:(0,d.t)("Enter the required %(dbModelName)s credentials",{dbModelName:r.name})}),(0,s.Y)("p",{className:"helper-bottom",children:h?c[0].name:""})]})});return h?f:e?(0,s.Y)(s.FK,{}):a?p:t?m:n&&!o?g:l||o?b:v};var eB=t(891);let eV=h.styled.div`
  padding-top: ${({theme:e})=>2*e.sizeUnit}px;
  label {
    color: ${({theme:e})=>e.colorText};
    margin-bottom: ${({theme:e})=>2*e.sizeUnit}px;
  }
`,eJ=(0,h.styled)(N.Row)`
  padding-bottom: ${({theme:e})=>2*e.sizeUnit}px;
`,eG=(0,h.styled)(eD.l.Item)`
  margin-bottom: 0 !important;
`,eQ=(0,h.styled)(N.Input.Password)`
  margin: ${({theme:e})=>`${e.sizeUnit}px 0 ${2*e.sizeUnit}px`};
`,eW=({db:e,onSSHTunnelParametersChange:a,setSSHTunnelLoginMethod:t})=>{var n,l,i,r,o,c;let[u,h]=(0,p.useState)(e7.Password);return(0,s.FD)(eD.l,{children:[(0,s.FD)(eJ,{gutter:16,children:[(0,s.Y)(N.Col,{xs:24,md:12,children:(0,s.FD)(eV,{children:[(0,s.Y)(f.l,{htmlFor:"server_address",required:!0,children:(0,d.t)("SSH Host")}),(0,s.Y)(N.Input,{name:"server_address",type:"text",placeholder:(0,d.t)("e.g. 127.0.0.1"),value:(null==e||null==(n=e.ssh_tunnel)?void 0:n.server_address)||"",onChange:a,"data-test":"ssh-tunnel-server_address-input"})]})}),(0,s.Y)(N.Col,{xs:24,md:12,children:(0,s.FD)(eV,{children:[(0,s.Y)(f.l,{htmlFor:"server_port",required:!0,children:(0,d.t)("SSH Port")}),(0,s.Y)(N.Input,{name:"server_port",placeholder:(0,d.t)("22"),type:"number",value:null==e||null==(l=e.ssh_tunnel)?void 0:l.server_port,onChange:a,"data-test":"ssh-tunnel-server_port-input"})]})})]}),(0,s.Y)(eJ,{gutter:16,children:(0,s.Y)(N.Col,{xs:24,children:(0,s.FD)(eV,{children:[(0,s.Y)(f.l,{htmlFor:"username",required:!0,children:(0,d.t)("Username")}),(0,s.Y)(N.Input,{name:"username",type:"text",placeholder:(0,d.t)("e.g. Analytics"),value:(null==e||null==(i=e.ssh_tunnel)?void 0:i.username)||"",onChange:a,"data-test":"ssh-tunnel-username-input"})]})})}),(0,s.Y)(eJ,{gutter:16,children:(0,s.Y)(N.Col,{xs:24,children:(0,s.FD)(eV,{children:[(0,s.Y)(f.l,{htmlFor:"use_password",required:!0,children:(0,d.t)("Login with")}),(0,s.Y)(eG,{name:"use_password",initialValue:u,children:(0,s.FD)(eB.s.Group,{onChange:({target:{value:e}})=>{h(e),t(e)},children:[(0,s.Y)(eB.s,{value:e7.Password,"data-test":"ssh-tunnel-use_password-radio",children:(0,d.t)("Password")}),(0,s.Y)(eB.s,{value:e7.PrivateKey,"data-test":"ssh-tunnel-use_private_key-radio",children:(0,d.t)("Private Key & Password")})]})})]})})}),u===e7.Password&&(0,s.Y)(eJ,{gutter:16,children:(0,s.Y)(N.Col,{xs:24,children:(0,s.FD)(eV,{children:[(0,s.Y)(f.l,{htmlFor:"password",required:!0,children:(0,d.t)("SSH Password")}),(0,s.Y)(eQ,{name:"password",placeholder:(0,d.t)("e.g. ********"),value:(null==e||null==(r=e.ssh_tunnel)?void 0:r.password)||"",onChange:a,"data-test":"ssh-tunnel-password-input",iconRender:e=>e?(0,s.Y)(S.m,{title:(0,d.t)("Hide password."),children:(0,s.Y)(Y.F.EyeInvisibleOutlined,{})}):(0,s.Y)(S.m,{title:(0,d.t)("Show password."),children:(0,s.Y)(Y.F.EyeOutlined,{})}),role:"textbox"})]})})}),u===e7.PrivateKey&&(0,s.FD)(s.FK,{children:[(0,s.Y)(eJ,{gutter:16,children:(0,s.Y)(N.Col,{xs:24,children:(0,s.FD)(eV,{children:[(0,s.Y)(f.l,{htmlFor:"private_key",required:!0,children:(0,d.t)("Private Key")}),(0,s.Y)(N.Input.TextArea,{name:"private_key",placeholder:(0,d.t)("Paste Private Key here"),value:(null==e||null==(o=e.ssh_tunnel)?void 0:o.private_key)||"",onChange:a,"data-test":"ssh-tunnel-private_key-input",rows:4})]})})}),(0,s.Y)(eJ,{gutter:16,children:(0,s.Y)(N.Col,{xs:24,children:(0,s.FD)(eV,{children:[(0,s.Y)(f.l,{htmlFor:"private_key_password",required:!0,children:(0,d.t)("Private Key Password")}),(0,s.Y)(eQ,{name:"private_key_password",placeholder:(0,d.t)("e.g. ********"),value:(null==e||null==(c=e.ssh_tunnel)?void 0:c.private_key_password)||"",onChange:a,"data-test":"ssh-tunnel-private_key_password-input",iconRender:e=>e?(0,s.Y)(S.m,{title:(0,d.t)("Hide password."),children:(0,s.Y)(Y.F.EyeInvisibleOutlined,{})}):(0,s.Y)(S.m,{title:(0,d.t)("Show password."),children:(0,s.Y)(Y.F.EyeOutlined,{})}),role:"textbox"})]})})})]})]})};function eX(e,a,t,n,l,i,r){try{var o=e[i](r),s=o.value}catch(e){t(e);return}o.done?a(s):Promise.resolve(s).then(n,l)}function eZ(e){return function(){var a=this,t=arguments;return new Promise(function(n,l){var i=e.apply(a,t);function r(e){eX(i,n,l,r,o,"next",e)}function o(e){eX(i,n,l,r,o,"throw",e)}r(void 0)})}}function e0(){return(e0=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let e1=(0,c.a)(),e2=JSON.stringify({allows_virtual_table_explore:!0}),e4="basic",e5={[H.GSheet]:{message:(0,d.t)("Why do I need to create a database?"),description:(0,d.t)("To begin using your Google Sheets, you need to create a database first. Databases are used as a way to identify your data so that it can be queried and visualized. This database will hold all of your individual Google Sheets you choose to connect here.")}},e8=(0,h.styled)(v.Ay)`
  .ant-tabs-content {
    width: 100%;
    overflow: inherit;

    & > .ant-tabs-tabpane {
      position: relative;
    }
  }
`,e6=h.styled.div`
  ${({theme:e})=>`
    margin: ${8*e.sizeUnit}px ${4*e.sizeUnit}px;
  `};
`,e3=h.styled.div`
  ${({theme:e})=>`
    padding: 0px ${4*e.sizeUnit}px;
  `};
`;var e7=((r={})[r.Password=0]="Password",r[r.PrivateKey=1]="PrivateKey",r);let e9=h.styled.div`
  display: flex;
  justify-content: center;
  padding: ${({theme:e})=>5*e.sizeUnit}px;
`;function ae(e,a){var t,n,l,i,r,o,s,d,c,u;let h,p,m=e0({},e),g="",b=JSON.parse(m.extra||"{}");switch(a.type){case 4:try{p=JSON.parse(a.payload.json||"{}")}catch(e){p=a.payload.json}return e0({},m,{extra:JSON.stringify(e0({},b,{[a.payload.name]:p}))});case 6:return e0({},m,{masked_encrypted_extra:JSON.stringify(e0({},JSON.parse(m.masked_encrypted_extra||"{}"),{[a.payload.name]:a.payload.value}))});case 5:if("schema_cache_timeout"===a.payload.name||"table_cache_timeout"===a.payload.name)return e0({},m,{extra:JSON.stringify(e0({},b,{metadata_cache_timeout:e0({},null==b?void 0:b.metadata_cache_timeout,{[a.payload.name]:Number(a.payload.value)})}))});if("schemas_allowed_for_file_upload"===a.payload.name){let e=(a.payload.value||"").split(",").map(e=>e.trim()).filter(e=>e.length>0);return e0({},m,{extra:JSON.stringify(e0({},b,{schemas_allowed_for_file_upload:e}))})}if("http_path"===a.payload.name)return e0({},m,{extra:JSON.stringify(e0({},b,{engine_params:{connect_args:{[a.payload.name]:null==(t=a.payload.value)?void 0:t.trim()}}}))});if("expand_rows"===a.payload.name)return e0({},m,{extra:JSON.stringify(e0({},b,{schema_options:e0({},null==b?void 0:b.schema_options,{[a.payload.name]:"checked"in a.payload?!!a.payload.checked:!!a.payload.value})}))});return e0({},m,{extra:JSON.stringify(e0({},b,{[a.payload.name]:"checkbox"===a.payload.type?a.payload.checked:a.payload.value}))});case 8:if("checkbox"===a.payload.type)return e0({},m,{[a.payload.name]:a.payload.checked});return e0({},m,{[a.payload.name]:a.payload.value});case 9:if((null==(n=a.payload.type)?void 0:n.startsWith("catalog"))&&void 0!==m.catalog){let e=[...m.catalog],t=null==(l=a.payload.type)?void 0:l.split("-")[1],n=e[parseInt(t,10)]||{};return void 0!==a.payload.value&&(n[a.payload.name]=a.payload.value),e.splice(parseInt(t,10),1,n),h=e.reduce((e,a)=>{let t=e0({},e);return t[a.name]=a.value,t},{}),e0({},m,{catalog:e,parameters:e0({},m.parameters,{catalog:h})})}return e0({},m,{parameters:e0({},m.parameters,{[a.payload.name]:a.payload.value})});case 14:return e0({},m,{ssh_tunnel:e0({},m.ssh_tunnel,{[a.payload.name]:a.payload.value})});case 15:{let e={};if((null==m?void 0:m.ssh_tunnel)&&(e=I()(m.ssh_tunnel,["id","server_address","server_port","username"])),1===a.payload.login_method)return e0({},m,{ssh_tunnel:e0({private_key:null==m||null==(i=m.ssh_tunnel)?void 0:i.private_key,private_key_password:null==m||null==(r=m.ssh_tunnel)?void 0:r.private_key_password},e)});if(0===a.payload.login_method)return e0({},m,{ssh_tunnel:e0({password:null==m||null==(o=m.ssh_tunnel)?void 0:o.password},e)});return e0({},m)}case 16:return e0({},m,{ssh_tunnel:void 0});case 0:if(void 0!==m.catalog)return e0({},m,{catalog:[...m.catalog,{name:"",value:""}]});return e0({},m,{catalog:[{name:"",value:""}]});case 11:return null==(s=m.catalog)||s.splice(a.payload.indexToDelete,1),e0({},m);case 3:return e0({},m,{[a.payload.name]:a.payload.json});case 10:return e0({},m,{parameters:e0({},m.parameters,{query:Object.fromEntries(new URLSearchParams(a.payload.value))}),query_input:a.payload.value});case 13:return e0({},m,{[a.payload.name]:a.payload.value});case 7:if(g=Object.entries((null==(c=a.payload)||null==(d=c.parameters)?void 0:d.query)||{}).map(([e,a])=>`${e}=${a}`).join("&"),a.payload.masked_encrypted_extra&&a.payload.configuration_method===R.DynamicForm){let e=null==(u=e0({},JSON.parse(a.payload.extra||"{}")).engine_params)?void 0:u.catalog,t=Object.entries(e||{}).map(([e,a])=>({name:e,value:a}));return e0({},a.payload,{engine:a.payload.backend||m.engine,configuration_method:a.payload.configuration_method,catalog:t,parameters:e0({},a.payload.parameters||m.parameters,{catalog:e}),query_input:g})}return e0({},a.payload,{masked_encrypted_extra:a.payload.masked_encrypted_extra||"",engine:a.payload.backend||m.engine,configuration_method:a.payload.configuration_method,parameters:a.payload.parameters||m.parameters,ssh_tunnel:a.payload.ssh_tunnel||m.ssh_tunnel,query_input:g});case 2:return e0({},a.payload,{extra:e2,expose_in_sqllab:!0});case 1:return e0({},a.payload);default:return null}}let aa=(0,T.Ay)(({addDangerToast:e,addSuccessToast:a,onDatabaseAdd:t,onHide:n,show:l,databaseId:i,dbEngine:r})=>{var o,c,h,v,x,w,S,C,T;let[U,q]=(0,p.useReducer)(ae,null),{state:{loading:I,resource:j,error:K},fetchResource:B,createResource:V,updateResource:J,clearError:G}=(0,z.fn)("database",(0,d.t)("database"),e,"connection"),[Q,W]=(0,p.useState)(e4),[X,et]=(0,z.d5)(),[ed,ec,eu,eb,ev,ef]=(0,z.Y8)(),[eY,eS]=(0,p.useState)(!1),[ek,eD]=(0,p.useState)(!1),[e$,eA]=(0,p.useState)(""),[eN,eO]=(0,p.useState)(!1),[eE,eT]=(0,p.useState)(!1),[ez,eP]=(0,p.useState)(!1),[eU,eq]=(0,p.useState)({}),[eI,eR]=(0,p.useState)({}),[ej,eB]=(0,p.useState)({}),[eV,eJ]=(0,p.useState)({}),[eG,eQ]=(0,p.useState)(!1),[eX,e2]=(0,p.useState)([]),[e7,aa]=(0,p.useState)(!1),[at,an]=(0,p.useState)(),[al,ai]=(0,p.useState)([]),[ar,ao]=(0,p.useState)([]),[as,ad]=(0,p.useState)([]),[ac,au]=(0,p.useState)([]),[ah,ap]=(0,p.useState)([]),[am,ag]=(0,p.useState)({}),[ab,av]=(0,p.useState)({}),af=null!=(o=e1.get("ssh_tunnel.form.switch"))?o:eL,[a_,ay]=(0,p.useState)(void 0),ax=e1.get("databaseconnection.extraOption");ax&&(ax=e0({},ax,{onEdit:e=>{av(e0({},ab,e))}}));let aY=(0,P.B)(),aw=(0,z.g9)(),aS=(0,z.Fp)(),aC=!!i,ak=aS||!!((null==U?void 0:U.engine)&&e5[U.engine]),aF=(null==U?void 0:U.configuration_method)===R.SqlalchemyUri,aD=aC||aF,a$=ed||K,aA=(0,m.W6)(),aN=(null==X||null==(c=X.databases)?void 0:c.find(e=>e.engine===(aC?null==U?void 0:U.backend:null==U?void 0:U.engine)&&e.default_driver===(null==U?void 0:U.driver)))||(null==X||null==(h=X.databases)?void 0:h.find(e=>e.engine===(aC?null==U?void 0:U.backend:null==U?void 0:U.engine)))||{},aO=(0,p.useCallback)(()=>{eu(null),ef(!1),G()},[eu,ef,G]),aE=e=>{if("database"===e)return(0,d.t)("e.g. world_population")},aT=(0,p.useCallback)((e,a)=>{q({type:e,payload:a})},[]),az=(0,p.useCallback)(({target:e})=>{aT(9,{type:e.type,name:e.name,checked:e.checked,value:e.value})},[aT]),aP=(0,p.useCallback)((e,a)=>{aT(e,a),aO()},[aT,aO]),aU=()=>{q({type:12}),eS(!1),aO(),G(),eO(!1),e2([]),aa(!1),an(""),ai([]),ao([]),ad([]),au([]),eq({}),eR({}),eB({}),eJ({}),ap([]),ag({}),eQ(!1),ay(void 0),n()},aL=e=>{aA.push(e)},{state:{alreadyExists:aq,passwordsNeeded:aI,sshPasswordNeeded:aM,sshPrivateKeyNeeded:aR,sshPrivateKeyPasswordNeeded:aH,encryptedExtraFieldsNeeded:aj,loading:aK,failed:aB},importResource:aV}=(0,z.bN)("database",(0,d.t)("database"),e=>{an(e)}),aJ=()=>eZ(function*(){var n,l,i;let r;if(eT(!0),ef(!1),null==ax||ax.onSave(ab,U).then(({error:a})=>{a&&(r=a,e(a))}),r)return void eT(!1);let o=e0({},U);if(o.configuration_method===R.DynamicForm){(null==o||null==(l=o.parameters)?void 0:l.catalog)&&(o.extra=JSON.stringify(e0({},JSON.parse(o.extra||"{}"),{engine_params:{catalog:o.parameters.catalog}})));let a=yield ec(o,!0);if(!L()(ed)||(null==a?void 0:a.length)){e((0,d.t)("Connection failed, please check your connection settings.")),eT(!1);return}let t=aC?null==(i=o.parameters_schema)?void 0:i.properties:null==aN?void 0:aN.parameters.properties,n=JSON.parse(o.masked_encrypted_extra||"{}");Object.keys(t||{}).forEach(e=>{var a,l,i,r;t[e]["x-encrypted-extra"]&&(null==(a=o.parameters)?void 0:a[e])&&("object"==typeof(null==(l=o.parameters)?void 0:l[e])?(n[e]=null==(i=o.parameters)?void 0:i[e],o.parameters[e]=JSON.stringify(o.parameters[e])):n[e]=JSON.parse((null==(r=o.parameters)?void 0:r[e])||"{}"))}),o.masked_encrypted_extra=JSON.stringify(n),o.engine===H.GSheet&&(o.impersonate_user=!0)}if((null==o||null==(n=o.parameters)?void 0:n.catalog)&&(o.extra=JSON.stringify(e0({},JSON.parse(o.extra||"{}"),{engine_params:{catalog:o.parameters.catalog}}))),!1===a_&&(o.ssh_tunnel=null),null==U?void 0:U.id){if(yield J(U.id,o,o.configuration_method===R.DynamicForm)){if(t&&t(),null==ax||ax.onSave(ab,U).then(({error:a})=>{a&&(r=a,e(a))}),r)return void eT(!1);eN||(aU(),a((0,d.t)("Database settings updated")))}}else if(U){if(yield V(o,o.configuration_method===R.DynamicForm)){if(eS(!0),t&&t(),null==ax||ax.onSave(ab,U).then(({error:a})=>{a&&(r=a,e(a))}),r)return void eT(!1);aD&&(aU(),a((0,d.t)("Database connected")))}}else{if(aa(!0),!(eX[0].originFileObj instanceof File))return;(yield aV(eX[0].originFileObj,eU,eI,ej,eV,am,eG))&&(t&&t(),aU(),a((0,d.t)("Database connected")))}eD(!0),eO(!1),eT(!1)})(),aG=e=>{if("Other"===e)q({type:2,payload:{database_name:e,configuration_method:R.SqlalchemyUri,engine:void 0,engine_information:{supports_file_upload:!0}}});else{let a=null==X?void 0:X.databases.filter(a=>a.name===e)[0];if(!a)return;let{engine:t,parameters:n,engine_information:l,default_driver:i,sqlalchemy_uri_placeholder:r}=a;q({type:2,payload:{database_name:e,engine:t,configuration_method:void 0!==n?R.DynamicForm:R.SqlalchemyUri,engine_information:l,driver:i,sqlalchemy_uri_placeholder:r}}),t===H.GSheet&&q({type:0})}},aQ=()=>{j&&B(j.id),eD(!1),eO(!0)},aW=()=>{aO(),eN&&eS(!1),e7&&aa(!1),aB&&(aa(!1),an(""),ai([]),ao([]),ad([]),au([]),ap([]),eq({}),eR({}),eB({}),eJ({}),ag({})),q({type:12}),e2([])},aX=()=>{if(U)return!eY||eN?(0,s.FD)(s.FK,{children:[(0,s.Y)(ey,{onClick:aW,buttonStyle:"secondary",children:(0,d.t)("Back")},"back"),(0,s.Y)(ey,{"data-test":"btn-submit-connection",buttonStyle:"primary",onClick:aJ,loading:eE,disabled:!!(!ev||eb||ed&&Object.keys(ed).length>0),children:(0,d.t)("Connect")},"submit")]}):(0,s.FD)(s.FK,{children:[(0,s.Y)(ey,{onClick:aQ,children:(0,d.t)("Back")},"back"),(0,s.Y)(ey,{buttonStyle:"primary",onClick:aJ,"data-test":"modal-confirm-button",loading:eE,children:(0,d.t)("Finish")},"submit")]});if(e7){let e;return(0,s.FD)(s.FK,{children:[(0,s.Y)(ey,{onClick:aW,children:(0,d.t)("Back")},"back"),(0,s.Y)(ey,{buttonStyle:"primary",onClick:aJ,disabled:(e=ah.some(({fileName:e,fields:a})=>a.some(a=>{var t;return!(null==(t=am[e])?void 0:t[a.path])})),!!aK||!!aq.length&&!eG||!!aI.length&&"{}"===JSON.stringify(eU)||!!aM.length&&"{}"===JSON.stringify(eI)||!!aR.length&&"{}"===JSON.stringify(ej)||!!aH.length&&"{}"===JSON.stringify(eV)||!!ah.length&&!!e||!1),loading:eE,children:(0,d.t)("Connect")},"submit")]})}return(0,s.Y)(s.FK,{})},aZ=(0,p.useRef)(!0);(0,p.useEffect)(()=>{if(aZ.current){aZ.current=!1;return}aK||aq.length||aI.length||aM.length||aR.length||aH.length||aj.length||eE||aB||(aU(),a((0,d.t)("Database connected")))},[aq,aI,aK,aB,aM,aR,aH,aj]),(0,p.useEffect)(()=>{l&&(W(e4),eT(!0),et()),i&&l&&aC&&i&&!I&&B(i).catch(a=>e((0,d.t)("Sorry there was an error fetching database information: %s",a.message)))},[l,i]),(0,p.useEffect)(()=>{j&&(q({type:7,payload:j}),eA(j.database_name))},[j]),(0,p.useEffect)(()=>{eE&&eT(!1),X&&r&&aG(r)},[X]),(0,p.useEffect)(()=>{if(e7){var e,a;null==(a=document)||null==(e=a.getElementsByClassName("ant-upload-list-item-name")[0])||e.scrollIntoView()}},[e7]),(0,p.useEffect)(()=>{ai([...aI])},[aI]),(0,p.useEffect)(()=>{ao([...aM])},[aM]),(0,p.useEffect)(()=>{ad([...aR])},[aR]),(0,p.useEffect)(()=>{au([...aH])},[aH]),(0,p.useEffect)(()=>{ap([...aj])},[aj]),(0,p.useEffect)(()=>{var e;(null==U||null==(e=U.parameters)?void 0:e.ssh)!==void 0&&ay(U.parameters.ssh)},[null==U||null==(v=U.parameters)?void 0:v.ssh]);let a0=()=>at?(0,s.Y)(er,{children:(0,s.Y)(E.$p,{message:at})}):null,a1=()=>{let e=[];return(L()(K)?L()(ed)||(null==ed?void 0:ed.error_type)!=="GENERIC_DB_ENGINE_ERROR"||(e=[(null==ed?void 0:ed.description)||(null==ed?void 0:ed.message)]):e="object"==typeof K?Object.values(K):"string"==typeof K?[K]:[],e.length)?(0,s.Y)(e6,{children:(0,s.Y)(E.x6,{title:(0,d.t)("Database Creation Error"),subtitle:(0,d.t)("We are unable to connect to your database."),descriptionDetails:(null==e?void 0:e[0])||(null==ed?void 0:ed.description),copyText:null==ed?void 0:ed.description})}):(0,s.Y)(s.FK,{})},a2=()=>{eT(!0),B(null==j?void 0:j.id).then(e=>{(0,g.SO)(g.Hh.Database,e)})},a4=()=>(0,s.Y)(eW,{db:U,onSSHTunnelParametersChange:({target:e})=>{aT(14,{type:e.type,name:e.name,value:e.value}),aO()},setSSHTunnelLoginMethod:e=>q({type:15,payload:{login_method:e}})}),a5=()=>(0,s.FD)(s.FK,{children:[(0,s.Y)(eM,{isValidating:eb,isEditMode:aC,db:U,sslForced:!1,dbModel:aN,onAddTableCatalog:()=>{q({type:0})},onQueryChange:({target:e})=>aP(10,{name:e.name,value:e.value}),onExtraInputChange:({target:e})=>aP(5,{name:e.name,value:e.value}),onEncryptedExtraInputChange:({target:e})=>aP(6,{name:e.name,value:e.value}),onRemoveTableCatalog:e=>{q({type:11,payload:{indexToDelete:e}})},onParametersChange:az,onChange:({target:e})=>aP(13,{name:e.name,value:e.value}),getValidation:()=>ec(U),validationErrors:ed,getPlaceholder:aE,clearValidationErrors:aO}),a_&&(0,s.Y)(e3,{children:a4()})]});if(eX.length>0&&(aq.length||al.length||ar.length||as.length||ac.length||ah.length))return(0,s.FD)($.aF,{centered:!0,css:e=>[ee,el(e),eo(e),es(e)],footer:aX(),maskClosable:!1,name:"database",onHide:aU,onHandledPrimaryAction:aJ,primaryButtonName:(0,d.t)("Connect"),show:l,title:(0,s.Y)(M.r,{title:(0,d.t)("Connect a database"),icon:(0,s.Y)(Y.F.InsertRowAboveOutlined,{})}),width:"500px",children:[(0,s.Y)(eK,{db:U,dbName:e$,dbModel:aN,fileList:eX,hasConnectedDb:eY,isEditMode:aC,isLoading:eE,useSqlAlchemyForm:aF}),aq.length?(0,s.FD)(s.FK,{children:[(0,s.Y)(er,{children:(0,s.Y)(u.F,{closable:!1,css:e=>(0,y.AH)`
  margin: ${4*e.sizeUnit}px 0;

  .ant-alert-message {
    margin: 0;
  }
`,type:"warning",showIcon:!0,message:"",description:(0,d.t)("You are importing one or more databases that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?")})}),(0,s.Y)(F.M,{id:"confirm_overwrite",name:"confirm_overwrite",isValidating:eb,required:!0,validationMethods:{onBlur:()=>{}},errorMessage:null==ed?void 0:ed.confirm_overwrite,label:(0,d.t)('Type "%s" to confirm',(0,d.t)("OVERWRITE")),onChange:e=>{var a,t;eQ((null!=(a=null==(t=e.currentTarget)?void 0:t.value)?a:"").toUpperCase()===(0,d.t)("OVERWRITE"))},css:en})]}):null,a0(),al.length||ar.length||as.length||ac.length?[...new Set([...al,...ar,...as,...ac])].map(e=>(0,s.FD)(s.FK,{children:[(0,s.Y)(er,{children:(0,s.Y)(u.F,{closable:!1,css:e=>ei(e),type:"info",showIcon:!0,message:"Database passwords",description:(0,d.t)("The passwords for the databases below are needed in order to import them.")})}),(null==al?void 0:al.indexOf(e))>=0&&(0,s.Y)(F.M,{id:"password_needed",name:"password_needed",required:!0,value:eU[e],onChange:a=>eq(e0({},eU,{[e]:a.target.value})),isValidating:eb,validationMethods:{onBlur:()=>{}},errorMessage:null==ed?void 0:ed.password_needed,label:(0,d.t)("%s PASSWORD",e.slice(10)),css:en}),(null==ar?void 0:ar.indexOf(e))>=0&&(0,s.Y)(F.M,{isValidating:eb,id:"ssh_tunnel_password_needed",name:"ssh_tunnel_password_needed",required:!0,value:eI[e],onChange:a=>eR(e0({},eI,{[e]:a.target.value})),validationMethods:{onBlur:()=>{}},errorMessage:null==ed?void 0:ed.ssh_tunnel_password_needed,label:(0,d.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),css:en}),(null==as?void 0:as.indexOf(e))>=0&&(0,s.Y)(F.M,{id:"ssh_tunnel_private_key_needed",name:"ssh_tunnel_private_key_needed",isValidating:eb,required:!0,value:ej[e],onChange:a=>eB(e0({},ej,{[e]:a.target.value})),validationMethods:{onBlur:()=>{}},errorMessage:null==ed?void 0:ed.ssh_tunnel_private_key_needed,label:(0,d.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),css:en}),(null==ac?void 0:ac.indexOf(e))>=0&&(0,s.Y)(F.M,{id:"ssh_tunnel_private_key_password_needed",name:"ssh_tunnel_private_key_password_needed",isValidating:eb,required:!0,value:eV[e],onChange:a=>eJ(e0({},eV,{[e]:a.target.value})),validationMethods:{onBlur:()=>{}},errorMessage:null==ed?void 0:ed.ssh_tunnel_private_key_password_needed,label:(0,d.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),css:en})]})):null,ah.length?ah.map(({fileName:e,fields:a})=>(0,s.FD)("div",{children:[(0,s.Y)(er,{children:(0,s.Y)(u.F,{closable:!1,css:e=>ei(e),type:"info",showIcon:!0,message:(0,d.t)("Encrypted extra fields"),description:(0,d.t)("The following fields contain sensitive information that was masked during export. Please provide the values to import this database.")})}),a.map(a=>{var t;return(0,s.Y)(F.M,{id:`encrypted_extra_${a.path}`,name:`encrypted_extra_${a.path}`,required:!0,visibilityToggle:!0,value:(null==(t=am[e])?void 0:t[a.path])||"",onChange:t=>ag(e0({},am,{[e]:e0({},am[e],{[a.path]:t.target.value})})),isValidating:eb,validationMethods:{onBlur:()=>{}},label:(0,d.t)("%s %s",e.slice(10),a.label),css:en},`${e}-${a.path}`)})]},e)):null]});let a8=aC?(0,s.FD)(s.FK,{children:[(0,s.Y)(ey,{onClick:aU,buttonStyle:"secondary",children:(0,d.t)("Close")},"close"),(0,s.Y)(ey,{buttonStyle:"primary",onClick:aJ,disabled:null==U?void 0:U.is_managed_externally,loading:eE,tooltip:(null==U?void 0:U.is_managed_externally)?(0,d.t)("This database is managed externally, and can't be edited in Superset"):"",children:(0,d.t)("Finish")},"submit")]}):aX();return aD?(0,s.FD)($.aF,{css:e=>[Z,ee,el(e),eo(e),es(e)],name:"database","data-test":"database-modal",onHandledPrimaryAction:aJ,onHide:aU,primaryButtonName:aC?(0,d.t)("Save"):(0,d.t)("Connect"),width:"500px",centered:!0,show:l,title:(0,s.Y)(M.r,{isEditMode:aC,title:aC?(0,d.t)("Edit database"):(0,d.t)("Connect a database"),icon:aC?(0,s.Y)(Y.F.EditOutlined,{iconSize:"l"}):(0,s.Y)(Y.F.InsertRowAboveOutlined,{iconSize:"l"})}),footer:a8,maskClosable:!1,children:[(0,s.Y)(ex,{children:(0,s.Y)(eg,{children:(0,s.Y)(eK,{isLoading:eE,isEditMode:aC,useSqlAlchemyForm:aF,hasConnectedDb:eY,db:U,dbName:e$,dbModel:aN})})}),(0,s.Y)(e8,{defaultActiveKey:e4,activeKey:Q,onTabClick:e=>W(e),animated:{inkBar:!0,tabPane:!0},items:[{key:e4,label:(0,s.Y)("span",{children:(0,d.t)("Basic")}),children:(0,s.FD)(s.FK,{children:[aF?(0,s.FD)(eh,{children:[(0,s.FD)(eF,{db:U,onInputChange:({target:e})=>{ef(!1),aT(8,{type:e.type,name:e.name,checked:e.checked,value:e.value})},conf:aY,testConnection:()=>{var t;if(aO(),!(null==U?void 0:U.sqlalchemy_uri))return void e((0,d.t)("Please enter a SQLAlchemy URI to test"));let n={sqlalchemy_uri:(null==U?void 0:U.sqlalchemy_uri)||"",database_name:(null==U||null==(t=U.database_name)?void 0:t.trim())||void 0,impersonate_user:(null==U?void 0:U.impersonate_user)||void 0,extra:null==U?void 0:U.extra,masked_encrypted_extra:(null==U?void 0:U.masked_encrypted_extra)||"",server_cert:(null==U?void 0:U.server_cert)||void 0,ssh_tunnel:!L()(null==U?void 0:U.ssh_tunnel)&&a_?e0({},U.ssh_tunnel,{server_port:Number(U.ssh_tunnel.server_port)}):void 0};eP(!0),(0,z.ym)(n,a=>{eP(!1),e(a),ef(!1)},e=>{eP(!1),a(e),ef(!0)})},testInProgress:ez,children:[(0,s.Y)(af,{dbModel:aN,db:U,changeMethods:{onParametersChange:az},clearValidationErrors:aO}),a_&&a4()]}),(x=(null==U?void 0:U.backend)||(null==U?void 0:U.engine),(null==X||null==(S=X.databases)||null==(w=S.find(e=>e.backend===x||e.engine===x))?void 0:w.parameters)!==void 0&&!aC&&(0,s.FD)("div",{css:e=>ea(e),children:[(0,s.Y)(D.$n,{buttonStyle:"link",onClick:()=>q({type:1,payload:{database_name:null==U?void 0:U.database_name,configuration_method:R.DynamicForm,engine:null==U?void 0:U.engine}}),css:e=>(0,y.AH)`
  text-transform: initial;
  margin-left: 0px;
  padding: 0 ${2*e.sizeUnit}px 0 0;
`,children:(0,d.t)("Connect this database using the dynamic form instead")}),(0,s.Y)(A.I,{tooltip:(0,d.t)("Click this link to switch to an alternate form that exposes only the required fields needed to connect this database.")})]}))]}):a5(),!aC&&(0,s.Y)(er,{children:(0,s.Y)(u.F,{closable:!1,css:e=>ei(e),message:(0,d.t)("Additional fields may be required"),showIcon:!0,description:(0,s.FD)(s.FK,{children:[(0,d.t)("Select databases require additional fields to be completed in the Advanced tab to successfully connect the database. Learn what requirements your databases has "),(0,s.Y)("a",{href:eH,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description",children:(0,d.t)("here")}),"."]}),type:"info"})}),a$&&a1()]})},{key:"advanced",label:(0,s.Y)("span",{children:(0,d.t)("Advanced")}),children:(0,s.Y)(eC,{extraExtension:ax,db:U,onInputChange:e=>{let{target:a}=e;aP(8,{type:a.type,name:a.name,checked:a.checked,value:a.value})},onTextChange:({target:e})=>aP(13,{name:e.name,value:e.value}),onEditorChange:e=>aP(3,e),onExtraInputChange:e=>{let{target:a}=e;aP(5,{type:a.type,name:a.name,checked:a.checked,value:a.value})},onExtraEditorChange:e=>aP(4,e)})}]})]}):(0,s.FD)($.aF,{css:e=>[ee,el(e),eo(e),es(e)],name:"database",onHandledPrimaryAction:aJ,onHide:aU,primaryButtonName:eY?(0,d.t)("Finish"):(0,d.t)("Connect"),width:"500px",centered:!0,show:l,title:(0,s.Y)(M.r,{title:(0,d.t)("Connect a database"),icon:(0,s.Y)(Y.F.InsertRowAboveOutlined,{})}),footer:aX(),maskClosable:!1,children:[!eE&&eY?(0,s.FD)(s.FK,{children:[(0,s.Y)(eK,{isLoading:eE,isEditMode:aC,useSqlAlchemyForm:aF,hasConnectedDb:eY,db:U,dbName:e$,dbModel:aN,editNewDb:eN}),ek&&(0,s.FD)(e9,{children:[(0,s.Y)(D.$n,{buttonStyle:"secondary",onClick:()=>{eT(!0),a2(),aL("/dataset/add/")},children:(0,d.t)("Create dataset")}),(0,s.Y)(D.$n,{buttonStyle:"secondary",onClick:()=>{eT(!0),a2(),aL((0,b.G)("/sqllab?db=true"))},children:(0,d.t)("Query data in SQL Lab")})]}),eN?a5():(0,s.Y)(eC,{extraExtension:ax,db:U,onInputChange:e=>{let{target:a}=e;aP(8,{type:a.type,name:a.name,checked:"checked"in a&&a.checked,value:a.value})},onTextChange:({target:e})=>aP(13,{name:e.name,value:e.value}),onEditorChange:e=>aP(3,e),onExtraInputChange:e=>{let{target:a}=e;aP(5,{type:a.type,name:a.name,checked:"checked"in a&&a.checked,value:a.value})},onExtraEditorChange:e=>aP(4,e)})]}):(0,s.Y)(s.FK,{children:!eE&&(U?(0,s.FD)(s.FK,{children:[(0,s.Y)(eK,{isLoading:eE,isEditMode:aC,useSqlAlchemyForm:aF,hasConnectedDb:eY,db:U,dbName:e$,dbModel:aN}),ak&&(()=>{var e,a,t,n,l;let{hostname:i}=window.location,r=(null==aS||null==(e=aS.REGIONAL_IPS)?void 0:e.default)||"";return Object.entries((null==aS?void 0:aS.REGIONAL_IPS)||{}).forEach(([e,a])=>{let t=new RegExp(e);i.match(t)&&(r=a)}),(null==U?void 0:U.engine)&&(0,s.Y)(er,{children:(0,s.Y)(u.F,{closable:!1,css:e=>ei(e),type:"info",showIcon:!0,message:(null==(a=e5[U.engine])?void 0:a.message)||(null==aS||null==(t=aS.DEFAULT)?void 0:t.message),description:(null==(n=e5[U.engine])?void 0:n.description)||(null==aS||null==(l=aS.DEFAULT)?void 0:l.description)+r})})})(),a5(),(0,s.Y)("div",{css:e=>ea(e),children:aN.engine!==H.GSheet&&(0,s.FD)(s.FK,{children:[(0,s.Y)(D.$n,{"data-test":"sqla-connect-btn",buttonStyle:"link",onClick:()=>{aO(),q({type:1,payload:{engine:U.engine,configuration_method:R.SqlalchemyUri,database_name:U.database_name}})},css:ep,children:(0,d.t)("Connect this database with a SQLAlchemy URI string instead")}),(0,s.Y)(A.I,{tooltip:(0,d.t)("Click this link to switch to an alternate form that allows you to input the SQLAlchemy URL for this database manually.")})]})}),a$&&a1()]}):(0,s.FD)(e_,{children:[(0,s.Y)(eK,{isLoading:eE,isEditMode:aC,useSqlAlchemyForm:aF,hasConnectedDb:eY,db:U,dbName:e$,dbModel:aN}),(0,s.Y)("div",{className:"preferred",children:null==X||null==(C=X.databases)?void 0:C.filter(e=>e.preferred).map(e=>(0,s.Y)(k,{className:"preferred-item",onClick:()=>aG(e.name),buttonText:e.name,icon:null==aw?void 0:aw[e.engine]},`${e.name}`))}),(0,s.FD)("div",{className:"available",children:[(0,s.Y)("h4",{className:"available-label",children:(0,d.t)("Or choose from a list of other databases we support:")}),(0,s.Y)(f.l,{className:"control-label",children:(0,d.t)("Supported databases")}),(0,s.Y)(_.A,{className:"available-select",onChange:aG,placeholder:(0,d.t)("Choose a database..."),options:[...((null==X?void 0:X.databases)||[]).map((e,a)=>({value:e.name,label:e.name,key:`database-${a}`})),{value:"Other",label:(0,d.t)("Other"),key:"Other"}],showSearch:!0,sortComparator:(e,a)=>"Other"===e.value?1:"Other"===a.value?-1:String(e.label).localeCompare(String(a.label)),getPopupContainer:e=>e.parentElement||document.body,dropdownStyle:{maxHeight:400,overflow:"auto"}}),(0,s.Y)(u.F,{showIcon:!0,closable:!1,css:e=>ei(e),type:"info",message:(null==aS||null==(T=aS.ADD_DATABASE)?void 0:T.message)||(0,d.t)("Want to add a new database?"),description:(null==aS?void 0:aS.ADD_DATABASE)?(0,s.FD)(s.FK,{children:[(0,d.t)("Any databases that allow connections via SQL Alchemy URIs can be added. "),(0,s.Y)("a",{href:null==aS?void 0:aS.ADD_DATABASE.contact_link,target:"_blank",rel:"noopener noreferrer",children:null==aS?void 0:aS.ADD_DATABASE.contact_description_link})," ",null==aS?void 0:aS.ADD_DATABASE.description]}):(0,s.FD)(s.FK,{children:[(0,d.t)("Any databases that allow connections via SQL Alchemy URIs can be added. Learn about how to connect a database driver "),(0,s.Y)("a",{href:eH,target:"_blank",rel:"noopener noreferrer",children:(0,d.t)("here")}),"."]})})]}),(0,s.Y)(ew,{children:(0,s.Y)(N.Upload,{name:"databaseFile",id:"databaseFile","data-test":"database-file-input",accept:".yaml,.json,.yml,.zip",customRequest:()=>{},onChange:e=>eZ(function*(){an(""),ai([]),ao([]),ad([]),au([]),ap([]),eq({}),eR({}),eB({}),eJ({}),ag({}),aa(!0),e2([e0({},e.file,{status:"done"})]),e.file.originFileObj instanceof File&&(yield aV(e.file.originFileObj,eU,eI,ej,eV,am,eG))&&(null==t||t())})(),onRemove:e=>(e2(eX.filter(a=>a.uid!==e.uid)),!1),children:(0,s.Y)(D.$n,{"data-test":"import-database-btn",buttonStyle:"link",css:em,children:(0,d.t)("Import database from file")})})}),a0()]}))}),eE&&(0,s.Y)(O.R,{})]})})},49107(e,a,t){t.d(a,{A:()=>K});var n=t(2445),l=t(24002),i=t(27124),r=t(73815),o=t(68655),s=t(57832),d=t(56030),c=t(10938),u=t(90617),h=t(22022),p=t(29138),m=t(62858),g=t(68292),b=t(60685),v=t(58561),f=t.n(v),_=t(7070),y=t(84151),x=t(93225),Y=t(85614),w=t(17437);let S=(0,Y.styled)(x.e)`
  ${({theme:e})=>(0,w.AH)`
    flex: 1;
    margin-top: 0;
    margin-bottom: ${2.5*e.sizeUnit}px;
  }
  `}
`,C=Y.styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
`,k=(0,w.AH)`
  .ant-modal-body {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
`;var F=t(14121);let D=Y.styled.div`
  //margin-top: 10px;
  //margin-bottom: 10px;
`,$=({columns:e,maxColumnsToShow:a=4})=>{let t=e.map(e=>({name:e}));return(0,n.FD)(D,{children:[(0,n.FD)(u.o.Text,{type:"secondary",children:[(0,i.t)("Columns"),":"]}),0===e.length?(0,n.Y)("p",{className:"help-block",children:(0,i.t)("Upload file to preview columns")}):(0,n.Y)(F.Sk,{tags:t,maxTags:a})]})};var A=t(80967);let N=({label:e,tip:a,children:t,name:l,rules:i})=>(0,n.Y)(S,{label:(0,n.FD)("div",{children:[e,(0,n.Y)(A.I,{tooltip:a})]}),name:l,rules:i,children:t});function O(e,a,t,n,l,i,r){try{var o=e[i](r),s=o.value}catch(e){t(e);return}o.done?a(s):Promise.resolve(s).then(n,l)}function E(){return(E=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let T=["delimiter","skip_initial_space","skip_blank_lines","day_first","column_data_types","column_dates","decimal_character","null_values","index_column","header_row","rows_to_read","skip_rows"],z=["sheet_name","column_dates","decimal_character","null_values","index_column","header_row","rows_to_read","skip_rows"],P=[],U=["rows_to_read","index_column"],L=[...T,...z,...P],q={csv:T,excel:z,columnar:P},I=(e,a)=>q[a].includes(e),M={table_name:"",schema:"",sheet_name:void 0,delimiter:",",already_exists:"fail",skip_initial_space:!1,skip_blank_lines:!1,day_first:!1,decimal_character:".",null_values:[],header_row:"0",rows_to_read:null,skip_rows:"0",column_dates:[],index_column:null,dataframe_index:!1,index_label:"",columns_read:[],column_data_types:""},R={csv:".csv, .tsv",excel:".xls, .xlsx",columnar:".parquet, .zip"},H={csv:"CSV",excel:"Excel",columnar:"Columnar"},j=e=>{let{label:a,dataTest:t,children:l}=e,i=function(e,a){if(null==e)return{};var t,n,l={},i=Object.getOwnPropertyNames(e);for(n=0;n<i.length;n++)!(a.indexOf(t=i[n])>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t]);return l}(e,["label","dataTest","children"]);return(0,n.FD)(C,{children:[(0,n.Y)(h.Switch,E({"data-test":t},i)),(0,n.Y)("div",{className:"switch-label",children:a}),l]})},K=(0,_.Ay)(({addDangerToast:e,addSuccessToast:a,onHide:t,show:v,allowedExtensions:_,type:x="csv",fileListOverride:Y})=>{let[C]=s.l.useForm(),[F,D]=(0,l.useState)(0),[A,T]=(0,l.useState)([]),[z,P]=(0,l.useState)([]),[K,B]=(0,l.useState)([]),[V,J]=(0,l.useState)({}),[G,Q]=(0,l.useState)(","),[W,X]=(0,l.useState)(!1),[Z,ee]=(0,l.useState)(),[ea,et]=(0,l.useState)(!1),[en,el]=(0,l.useState)(!0),[ei,er]=(0,l.useState)(!1),[eo,es]=(0,l.useState)("general"),ed=(0,l.useMemo)(()=>(e="",a,t)=>{let n=f().encode_uri({filters:[{col:"allow_file_upload",opr:"eq",value:!0}],page:a,page_size:t});return r.A.get({endpoint:`/api/v1/database/?q=${n}`}).then(e=>({data:e.json.result.map(e=>({value:e.id,label:e.database_name})),totalCount:e.json.count}))},[]),ec=(0,l.useMemo)(()=>(e="",a,t)=>F?r.A.get({endpoint:`/api/v1/database/${F}/schemas/?q=(upload_allowed:!t)`}).then(e=>({data:e.json.result.map(e=>({value:e,label:e})),totalCount:e.json.count})):Promise.resolve({data:[],totalCount:0}),[F]),eu=a=>{let t=C.getFieldsValue(),n=E({},M,t),l=new FormData;return l.append("file",a),"csv"===x&&l.append("delimiter",n.delimiter),l.append("type",x),er(!0),r.A.post({endpoint:"/api/v1/database/upload_metadata/",body:l,headers:{Accept:"application/json"}}).then(e=>{let{items:a}=e.json.result;if(a&&"excel"!==x)P(a[0].column_names);else{let{allSheetNames:e,sheetColumnNamesMap:t}=a.reduce((e,a)=>(e.allSheetNames.push(a.sheet_name),e.sheetColumnNamesMap[a.sheet_name]=a.column_names,e),{allSheetNames:[],sheetColumnNamesMap:{}});P(a[0].column_names),B(e),C.setFieldsValue({sheet_name:e[0]}),J(t)}}).catch(a=>(0,o.h4)(a).then(a=>{e(a.error||"Error"),P([]),C.setFieldsValue({sheet_name:void 0}),B([])})).finally(()=>{er(!1)})},eh=()=>{T([]),P([]),ee(""),D(0),B([]),X(!1),Q(","),el(!0),er(!1),J({}),C.resetFields(),t()},ep=()=>z.map(e=>({value:e,label:e}));(0,l.useEffect)(()=>{(null==Y?void 0:Y.length)&&(T(Y.map(e=>({uid:e.name,name:e.name,originFileObj:e,status:"done"}))),en&&eu(Y[0]).then(e=>e))},[Y,en]),(0,l.useEffect)(()=>{z.length>0&&A.length>0&&A[0].originFileObj instanceof File&&en&&eu(A[0].originFileObj).then(e=>e)},[G]),(0,l.useEffect)(()=>{v&&es("general")},[v]);let em={csv:(0,i.t)("CSV upload"),excel:(0,i.t)("Excel upload"),columnar:(0,i.t)("Columnar upload")};return(0,n.Y)(d.aF,{css:e=>[k,(0,w.AH)`
  .ant-modal-header {
    padding: ${4.5*e.sizeUnit}px ${4*e.sizeUnit}px
      ${4*e.sizeUnit}px;
  }

  .ant-modal-close-x .close {
    opacity: 1;
  }

  .ant-modal-body {
    height: ${180.5*e.sizeUnit}px;
  }

  .ant-modal-footer {
    height: ${16.25*e.sizeUnit}px;
  }

  .info-solid-small {
    vertical-align: bottom;
  }
`,(0,w.AH)`
  .switch-label {
    color: ${e.colorTextSecondary};
    margin-left: ${4*e.sizeUnit}px;
  }
`],primaryButtonLoading:W,name:"database","data-test":"upload-modal",onHandledPrimaryAction:C.submit,onHide:eh,width:"500px",primaryButtonName:(0,i.t)("Upload"),centered:!0,show:v,title:(0,n.Y)(()=>{let e=em[x]||(0,i.t)("Upload");return(0,n.Y)(y.r,{title:e})},{}),children:(0,n.Y)(s.l,{form:C,onFinish:()=>{var t;let n,l,s=C.getFieldsValue();delete s.database,s.schema=Z;let d=E({},M,s),c=new FormData,u=null==(t=A[0])?void 0:t.originFileObj;u&&c.append("file",u),n=q[x]||[],l=[...L].filter(e=>!n.includes(e)),Object.entries(d).forEach(([e,a])=>{l.includes(e)||U.includes(e)&&null==a||c.append(e,a)}),X(!0);let h=`/api/v1/database/${F}/upload/`;return c.append("type",x),r.A.post({endpoint:h,body:c,headers:{Accept:"application/json"}}).then(()=>{a((0,i.t)("Data imported")),X(!1),eh()}).catch(a=>(0,o.h4)(a).then(a=>{e(a.error||"Error")})).finally(()=>{X(!1)})},"data-test":"dashboard-edit-properties-form",layout:"vertical",initialValues:M,children:(0,n.Y)(c.S,{expandIconPosition:"end",accordion:!0,activeKey:eo,onChange:e=>es(e),defaultActiveKey:"general",modalMode:!0,items:[{key:"general",label:(0,n.Y)(u.o.Text,{strong:!0,children:(0,i.t)("General information")}),children:(0,n.FD)(n.FK,{children:[(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{label:(0,i.t)("%(label)s file",{label:H[x]}),name:"file",required:!0,rules:[{validator:(e,a)=>0===A.length?Promise.reject((0,i.t)("Uploading a file is required")):((e,a)=>{let t=e.name.match(/.+\.([^.]+)$/);if(!t)return!1;let n=t[1].toLowerCase();return a.map(e=>e.toLowerCase()).includes(n)})(A[0],_)?Promise.resolve():Promise.reject((0,i.t)("Upload a file with a valid extension. Valid: [%s]",_.join(",")))}],children:(0,n.Y)(h.Upload,{name:"modelFile",id:"modelFile","data-test":"model-file-input",accept:R[x],fileList:A,onChange:e=>{var a;return(a=function*(){T([E({},e.file,{status:"done"})]),en&&(yield eu(e.file.originFileObj))},function(){var e=this,t=arguments;return new Promise(function(n,l){var i=a.apply(e,t);function r(e){O(i,n,l,r,o,"next",e)}function o(e){O(i,n,l,r,o,"throw",e)}r(void 0)})})()},onRemove:e=>(T(A.filter(a=>a.uid!==e.uid)),P([]),B([]),C.setFieldsValue({sheet_name:void 0}),!1),customRequest:()=>{},children:(0,n.Y)(p.$n,{"aria-label":(0,i.t)("Select"),icon:(0,n.Y)(b.F.UploadOutlined,{}),loading:ei,children:(0,i.t)("Select")})})})})}),(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{children:(0,n.Y)(j,{label:(0,i.t)("Preview uploaded file"),dataTest:"previewUploadedFile",onChange:e=>{el(e)},checked:en})})})}),en&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)($,{columns:z})})}),(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{label:(0,i.t)("Database"),required:!0,name:"database",rules:[{validator:(e,a)=>F?Promise.resolve():Promise.reject((0,i.t)("Selecting a database is required"))}],children:(0,n.Y)(m.A,{ariaLabel:(0,i.t)("Select a database"),options:ed,onChange:e=>{D(null==e?void 0:e.value),ee(void 0),C.setFieldsValue({schema:void 0})},allowClear:!0,placeholder:(0,i.t)("Select a database to upload the file to")})})})}),(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{label:(0,i.t)("Schema"),name:"schema",children:(0,n.Y)(m.A,{ariaLabel:(0,i.t)("Select a schema"),options:ec,onChange:e=>{ee(null==e?void 0:e.value)},allowClear:!0,placeholder:(0,i.t)("Select a schema if the database supports this")})})})}),(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{label:(0,i.t)("Table name"),name:"table_name",required:!0,rules:[{required:!0,message:(0,i.t)("Table name is required")}],children:(0,n.Y)(h.Input,{"aria-label":(0,i.t)("Table Name"),name:"table_name","data-test":"properties-modal-name-input",type:"text",placeholder:(0,i.t)("Name of table to be created")})})})}),I("delimiter",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(N,{label:(0,i.t)("Delimiter"),tip:(0,i.t)("Select a delimiter for this data"),name:"delimiter",children:(0,n.Y)(g.A,{ariaLabel:(0,i.t)("Choose a delimiter"),options:[{value:",",label:'Comma ","'},{value:";",label:'Semicolon ";"'},{value:"	",label:'Tab "\\t"'},{value:"|",label:"Pipe"}],onChange:e=>{Q(e)},allowNewOptions:!0})})})}),I("sheet_name",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{label:(0,i.t)("Sheet name"),name:"sheet_name",children:(0,n.Y)(g.A,{ariaLabel:(0,i.t)("Choose sheet name"),options:K.map(e=>({value:e,label:e})),onChange:e=>{var a;P(null!=(a=V[e])?a:[])},allowNewOptions:!0,placeholder:(0,i.t)("Select a sheet name from the uploaded file")})})})})]})},{key:"file-settings",label:(0,n.Y)(u.o.Text,{strong:!0,children:(0,i.t)("File settings")}),children:(0,n.FD)(n.FK,{children:[(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(N,{label:(0,i.t)("If table already exists"),tip:(0,i.t)("What should happen if the table already exists"),name:"already_exists",children:(0,n.Y)(g.A,{ariaLabel:(0,i.t)("Choose already exists"),options:[{value:"fail",label:"Fail"},{value:"replace",label:"Replace"},{value:"append",label:"Append"}],onChange:()=>{}})})})}),I("column_dates",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{label:(0,i.t)("Columns to be parsed as dates"),name:"column_dates",children:(0,n.Y)(g.A,{ariaLabel:(0,i.t)("Choose columns to be parsed as dates"),mode:"multiple",options:ep(),allowClear:!0,allowNewOptions:!0,placeholder:(0,i.t)("A comma separated list of columns that should be parsed as dates")})})})}),I("decimal_character",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(N,{label:(0,i.t)("Decimal character"),tip:(0,i.t)("Character to interpret as decimal point"),name:"decimal_character",children:(0,n.Y)(h.Input,{type:"text"})})})}),I("null_values",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(N,{label:(0,i.t)("Null Values"),tip:(0,i.t)("Choose values that should be treated as null. Warning: Hive database supports only a single value"),name:"null_values",children:(0,n.Y)(g.A,{mode:"multiple",options:[{value:'""',label:'Empty Strings ""'},{value:"None",label:"None"},{value:"nan",label:"nan"},{value:"null",label:"null"},{value:"N/A",label:"N/A"}],allowClear:!0,allowNewOptions:!0})})})}),I("skip_initial_space",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{name:"skip_initial_space",children:(0,n.Y)(j,{label:(0,i.t)("Skip spaces after delimiter"),dataTest:"skipInitialSpace"})})})}),I("skip_blank_lines",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{name:"skip_blank_lines",children:(0,n.Y)(j,{label:(0,i.t)("Skip blank lines rather than interpreting them as Not A Number values"),dataTest:"skipBlankLines"})})})}),I("day_first",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{name:"day_first",children:(0,n.Y)(j,{label:(0,i.t)("DD/MM format dates, international and European format"),dataTest:"dayFirst"})})})})]})},{key:"columns",label:(0,n.Y)(u.o.Text,{strong:!0,children:(0,i.t)("Columns")}),children:(0,n.FD)(n.FK,{children:[(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{label:(0,i.t)("Columns to read"),name:"columns_read",children:(0,n.Y)(g.A,{ariaLabel:(0,i.t)("Choose columns to read"),mode:"multiple",options:ep(),allowClear:!0,allowNewOptions:!0,placeholder:(0,i.t)("List of the column names that should be read")})})})}),I("column_data_types",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(N,{label:(0,i.t)("Column data types"),tip:(0,i.t)('A dictionary with column names and their data types if you need to change the defaults. Example: {"user_id":"int"}. Check Python\'s Pandas library for supported data types.'),name:"column_data_types",children:(0,n.Y)(h.Input,{"aria-label":(0,i.t)("Column data types"),type:"text"})})})}),(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{name:"dataframe_index",children:(0,n.Y)(j,{label:(0,i.t)("Create dataframe index"),dataTest:"dataFrameIndex",onChange:et})})})}),ea&&I("index_column",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(N,{label:(0,i.t)("Index column"),tip:(0,i.t)("Column to use as the index of the dataframe. If None is given, Index label is used."),name:"index_column",children:(0,n.Y)(g.A,{ariaLabel:(0,i.t)("Choose index column"),options:z.map(e=>({value:e,label:e})),allowClear:!0,allowNewOptions:!0})})})}),ea&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(N,{label:(0,i.t)("Index label"),tip:(0,i.t)("Label for the index column. Don't use an existing column name."),name:"index_label",children:(0,n.Y)(h.Input,{"aria-label":(0,i.t)("Index label"),type:"text"})})})})]})},...I("header_row",x)&&I("rows_to_read",x)&&I("skip_rows",x)?[{key:"rows",label:(0,n.Y)(u.o.Text,{strong:!0,children:(0,i.t)("Rows")}),children:(0,n.FD)(h.Row,{children:[(0,n.Y)(h.Col,{span:8,children:(0,n.Y)(N,{label:(0,i.t)("Header row"),tip:(0,i.t)("Row containing the headers to use as column names (0 is first line of data)."),name:"header_row",rules:[{required:!0,message:(0,i.t)("Header row is required")}],children:(0,n.Y)(h.InputNumber,{"aria-label":(0,i.t)("Header row"),type:"text",min:0})})}),(0,n.Y)(h.Col,{span:8,children:(0,n.Y)(N,{label:(0,i.t)("Rows to read"),tip:(0,i.t)("Number of rows of file to read. Leave empty (default) to read all rows"),name:"rows_to_read",children:(0,n.Y)(h.InputNumber,{"aria-label":(0,i.t)("Rows to read"),min:1})})}),(0,n.Y)(h.Col,{span:8,children:(0,n.Y)(N,{label:(0,i.t)("Skip rows"),tip:(0,i.t)("Number of rows to skip at start of file."),name:"skip_rows",rules:[{required:!0,message:(0,i.t)("Skip rows is required")}],children:(0,n.Y)(h.InputNumber,{"aria-label":(0,i.t)("Skip rows"),min:0})})})]})}]:[]]})})})})},28085(e,a,t){t.d(a,{A:()=>ed});var n=t(2445),l=t(24002),i=t(85614),r=t(17437),o=t(6148),s=t(22389),d=t(71671),c=t(75495),u=t(22022),h=t(8563),p=t(14121),m=t(61574),g=t(71519),b=t(60685),v=t(90617),f=t(71368),_=t(97126),y=t(58561),x=t.n(y),Y=t(61225),w=t(27937),S=t(62193),C=t.n(S),k=t(27124),F=t(19202),D=t(73815),$=t(51281);let A=({version:e="unknownVersion",sha:a="unknownSHA",build:t="unknownBuild"})=>{let l=`https://apachesuperset.gateway.scarf.sh/pixel/0d3461e1-abb1-4691-a0aa-5ed50de66af0/${e}/${a}/${t}`;return(0,n.Y)("img",{referrerPolicy:"no-referrer-when-downgrade",src:l,width:0,height:0,alt:""})};var N=t(64163),O=t(12097),E=t(70836),T=t(54303),z=t(49107),P=t(37254),U=t(99175),L=t(91648),q=t(58977);let I=i.styled.div`
  display: flex;
  align-items: center;

  & i {
    margin-right: ${({theme:e})=>2*e.sizeUnit}px;
  }

  & a {
    display: block;
    width: 150px;
    word-wrap: break-word;
    text-decoration: none;
  }
`;var M=t(63542);function R(){return(R=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let H=(0,F.a)(),j=i.styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: ${({align:e})=>e};
  align-items: center;
`,K=i.styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,B=i.styled.a`
  padding-right: ${({theme:e})=>e.sizeUnit}px;
  padding-left: ${({theme:e})=>e.sizeUnit}px;
`,V=i.styled.div`
  ${({theme:e,disabled:a})=>(0,r.AH)`
    &&:hover {
      color: ${!a&&e.colorPrimary};
      cursor: ${!a?"pointer":"not-allowed"};
    }
    ${a&&(0,r.AH)`
      color: ${e.colorTextDisabled};
    `}
  `}
`,J=({align:e,settings:a,navbarRight:t,isFrontendRoute:o,environmentTag:d,setQuery:p})=>{let m,f=(0,i.useTheme)(),_=(0,Y.d4)(e=>e.user),y=(0,Y.d4)(e=>{var a;return null==(a=e.dashboardInfo)?void 0:a.id}),{roles:w}=_||{},{CSV_EXTENSIONS:S,COLUMNAR_EXTENSIONS:F,EXCEL_EXTENSIONS:R,ALLOWED_EXTENSIONS:J,HAS_GSHEETS_INSTALLED:G}=(0,Y.d4)(e=>e.common.conf),[Q,W]=(0,l.useState)(!1),[X,Z]=(0,l.useState)(!1),[ee,ea]=(0,l.useState)(!1),[et,en]=(0,l.useState)(!1),[el,ei]=(0,l.useState)(""),er=(0,O.L)("can_sqllab","Superset",w),eo=(0,O.L)("can_write","Dashboard",w),es=(0,O.L)("can_write","Chart",w),ed=(0,O.L)("can_write","Database",w),ec=(0,O.L)("can_write","Dataset",w),{canUploadData:eu,canUploadCSV:eh,canUploadColumnar:ep,canUploadExcel:em}=(0,P.c8)(w,S,F,R,J),eg=er||es||eo,[eb,ev]=(0,l.useState)(!1),[ef,e_]=(0,l.useState)(!1),ey=(0,E.N6)(_),ex=eb||ey,{setThemeMode:eY,themeMode:ew,clearLocalOverrides:eS,hasDevOverride:eC,canSetMode:ek,canDetectOSPreference:eF}=(0,U.w)(),eD=[{label:(0,k.t)("Data"),icon:(0,n.Y)(b.F.DatabaseOutlined,{"data-test":`menu-item-${(0,k.t)("Data")}`}),childs:[{label:(0,k.t)("Connect database"),name:M.$.DbConnection,perm:ed&&!ef},{label:(0,k.t)("Create dataset"),name:M.$.DatasetCreation,url:"/dataset/add/",perm:ec&&ef},{label:(0,k.t)("Connect Google Sheet"),name:M.$.GoogleSheets,perm:ed&&G},{label:(0,k.t)("Upload CSV to database"),name:M.$.CSVUpload,perm:eh&&ex,disable:ey&&!eb},{label:(0,k.t)("Upload Excel to database"),name:M.$.ExcelUpload,perm:em&&ex,disable:ey&&!eb},{label:(0,k.t)("Upload Columnar file to database"),name:M.$.ColumnarUpload,perm:ep&&ex,disable:ey&&!eb}]},{label:(0,k.t)("SQL query"),url:(0,s.G)("/sqllab?new=true"),icon:(0,n.Y)(b.F.SearchOutlined,{"data-test":`menu-item-${(0,k.t)("SQL query")}`}),perm:"can_sqllab",view:"Superset"},{label:(0,k.t)("Chart"),url:Number.isInteger(y)?`/chart/add?dashboard_id=${y}`:"/chart/add",icon:(0,n.Y)(b.F.BarChartOutlined,{"data-test":`menu-item-${(0,k.t)("Chart")}`}),perm:"can_write",view:"Chart"},{label:(0,k.t)("Dashboard"),url:"/dashboard/new",icon:(0,n.Y)(b.F.DashboardOutlined,{"data-test":`menu-item-${(0,k.t)("Dashboard")}`}),perm:"can_write",view:"Dashboard"}],e$=()=>{D.A.get({endpoint:`/api/v1/database/?q=${x().encode({filters:[{col:"allow_file_upload",opr:"upload_is_enabled",value:!0}]})}`}).then(({json:e})=>{var a;let t=(null==e||null==(a=e.result)?void 0:a.filter(e=>{var a;return null==e||null==(a=e.engine_information)?void 0:a.supports_file_upload}))||[];ev((null==t?void 0:t.length)>=1)})},eA=()=>{D.A.get({endpoint:`/api/v1/database/?q=${x().encode({filters:[{col:"database_name",opr:"neq",value:"examples"}]})}`}).then(({json:e})=>{e_(e.count>=1)})};(0,l.useEffect)(()=>{eu&&e$()},[eu]),(0,l.useEffect)(()=>{(ed||ec)&&eA()},[ed,ec]);let eN=(0,k.t)("Enable 'Allow file uploads to database' in any database's settings"),eO=e=>({key:e.name||e.label,label:e.disable?(0,n.Y)(V,{disabled:!0,children:(0,n.Y)(h.m,{placement:"top",title:eN,children:e.label})}):e.url?(0,n.Y)(v.o.Link,{href:(0,s.A)(e.url),children:e.label}):e.label,disabled:e.disable}),eE=H.get("navbar.right"),eT=H.get("navbar.right-menu.item.icon"),ez=()=>{try{window.localStorage.removeItem("redux"),window.sessionStorage.removeItem("login_attempted")}catch(e){console.warn("Failed to clear storage on logout:",e)}},eP=(({setThemeMode:e,themeMode:a,hasLocalOverride:t=!1,onClearLocalSettings:i,allowOSPreference:r=!0})=>{let o=a=>{e(a)},s=(0,l.useMemo)(()=>({[L.lJ.DEFAULT]:(0,n.Y)(b.F.SunOutlined,{}),[L.lJ.DARK]:(0,n.Y)(b.F.MoonOutlined,{}),[L.lG.SYSTEM]:(0,n.Y)(b.F.FormatPainterOutlined,{}),[L.lJ.COMPACT]:(0,n.Y)(b.F.CompressOutlined,{})}),[]),d=(0,l.useMemo)(()=>t?(0,n.Y)(h.m,{title:(0,k.t)("This theme is set locally"),placement:"bottom",children:(0,n.Y)(b.F.ThunderboltOutlined,{})}):s[a],[t,s,a]),c=[{key:L.lG.DEFAULT,label:(0,n.FD)(n.FK,{children:[(0,n.Y)(b.F.SunOutlined,{})," ",(0,k.t)("Light")]}),onClick:()=>o(L.lG.DEFAULT)},{key:L.lG.DARK,label:(0,n.FD)(n.FK,{children:[(0,n.Y)(b.F.MoonOutlined,{})," ",(0,k.t)("Dark")]}),onClick:()=>o(L.lG.DARK)},...r?[{key:L.lG.SYSTEM,label:(0,n.FD)(n.FK,{children:[(0,n.Y)(b.F.FormatPainterOutlined,{})," ",(0,k.t)("Match system")]}),onClick:()=>o(L.lG.SYSTEM)}]:[]];i&&t&&(c.push({type:"divider",key:"theme-divider"}),c.push({key:"clear-local",label:(0,n.FD)(n.FK,{children:[(0,n.Y)(b.F.ClearOutlined,{})," ",(0,k.t)("Clear local theme")]}),onClick:i}));let u=[{type:"group",label:(0,k.t)("Theme"),key:"theme-group",children:c}];return{key:"theme-sub-menu",label:d,icon:(0,n.Y)(b.F.DownOutlined,{iconSize:"xs"}),className:"submenu-with-caret",children:u,popupOffset:q.K}})({setThemeMode:eY,themeMode:ew,hasLocalOverride:eC(),onClearLocalSettings:eS,allowOSPreference:eF()}),eU=(({locale:e,languages:a})=>(0,l.useMemo)(()=>{let t=Object.keys(a).map(e=>({key:e,label:(0,n.FD)(I,{className:"f16",children:[(0,n.Y)("i",{className:`flag ${a[e].flag}`}),(0,n.Y)(v.o.Link,{href:a[e].url,children:a[e].name})]}),style:{whiteSpace:"normal",height:"auto"}}));return{key:"language-submenu",type:"submenu",label:(0,n.Y)("span",{className:"f16","aria-label":(0,k.t)("Languages"),children:(0,n.Y)("i",{className:`flag ${a[e].flag}`})}),icon:(0,n.Y)(b.F.CaretDownOutlined,{iconSize:"xs"}),children:t,className:"submenu-with-caret",popupClassName:"language-picker-popup"}},[a,e]))({locale:t.locale||"en",languages:t.languages||{}}),eL=(0,l.useMemo)(()=>{let e,l=[];return eE&&l.push({key:"extension",label:(0,n.Y)(eE,{})}),!t.user_is_anonymous&&eg&&l.push({key:"new-dropdown",label:(0,n.Y)(b.F.PlusOutlined,{"data-test":"new-dropdown-icon"}),className:"submenu-with-caret",icon:(0,n.Y)(b.F.DownOutlined,{iconSize:"xs"}),children:(e=[],null==eD||eD.forEach(a=>{var t;let l=null==(t=a.childs)?void 0:t.some(e=>"object"==typeof e&&!!e.perm);if(a.childs)if(l){let t=[];a.childs.forEach((e,a)=>{"string"!=typeof e&&e.name&&e.perm&&(3===a&&t.push({type:"divider",key:`divider-${a}`}),t.push(eO(e)))}),e.push({key:`sub2_${a.label}`,label:a.label,icon:a.icon,children:t,popupOffset:q.K})}else a.url&&(0,O.L)(a.perm,a.view,w)&&e.push({key:a.label,label:o(a.url)?(0,n.Y)(g.N_,{to:a.url||"",children:a.label}):(0,n.Y)(v.o.Link,{href:(0,s.A)(a.url||""),children:a.label}),icon:a.icon});else(0,O.L)(a.perm,a.view,w)&&e.push({key:a.label,label:o(a.url)?(0,n.Y)(g.N_,{to:a.url||"",children:a.label}):(0,n.Y)(v.o.Link,{href:(0,s.A)(a.url||""),children:a.label}),icon:a.icon})}),e),popupOffset:q.K}),ek()&&l.push(eP),t.show_language_picker&&eU&&l.push(eU),l.push({key:"settings",label:(0,k.t)("Settings"),icon:(0,n.Y)(b.F.DownOutlined,{iconSize:"xs"}),children:(()=>{let e=[];if(null==a||a.forEach((t,l)=>{var i;let s=[];null==(i=t.childs)||i.forEach(e=>{if("string"!=typeof e){let a=eT?(0,n.FD)(K,{children:[e.label,(0,n.Y)(eT,{menuChild:e})]}):e.label;s.push({key:e.label,label:o(e.url)?(0,n.Y)(g.N_,{to:e.url||"",children:a}):(0,n.Y)(v.o.Link,{href:e.url||"",css:(0,r.AH)`
                    display: flex;
                    align-items: center;
                    line-height: ${10*f.sizeUnit}px;
                  `,children:a})})}}),e.push({type:"group",label:t.label,key:t.label,children:s}),l<a.length-1&&e.push({type:"divider",key:`divider_${l}`})}),!t.user_is_anonymous){e.push({type:"divider",key:"user-divider"});let a=[];t.user_info_url&&a.push({key:"info",label:(0,n.Y)(v.o.Link,{href:(0,s.A)(t.user_info_url),children:(0,k.t)("Info")})}),(0,N.n)()&&(0,$.G7)($.TO.DisableEmbeddedSupersetLogout)||a.push({key:"logout",label:(0,n.Y)(v.o.Link,{href:(0,s.A)(t.user_logout_url),children:(0,k.t)("Logout")}),onClick:ez}),e.push({type:"group",label:(0,k.t)("User"),key:"user-section",children:a})}if(t.version_string||t.version_sha){e.push({type:"divider",key:"version-info-divider"});let a={type:"group",label:(0,k.t)("About"),key:"about-section",children:[{key:"about-info",style:{height:"auto",minHeight:"auto"},label:(0,n.Y)("div",{css:e=>(0,r.AH)`
                    font-size: ${e.fontSizeSM}px;
                    color: ${e.colorTextSecondary||e.colorText};
                    white-space: pre-wrap;
                    padding: ${e.sizeUnit}px ${2*e.sizeUnit}px;
                  `,children:[t.show_watermark&&(0,k.t)("Powered by Apache Superset"),t.version_string&&`${(0,k.t)("Version")}: ${t.version_string}`,t.version_sha&&`${(0,k.t)("SHA")}: ${t.version_sha}`,t.build_number&&`${(0,k.t)("Build")}: ${t.build_number}`].filter(Boolean).join(`
`)})}]};e.push(a)}return e})(),className:"submenu-with-caret",popupOffset:q.K}),l},[eE,t,eg,ek,f.colorPrimary,eP,eU,eD,w,a,eT,eO,ez]);return(0,n.FD)(j,{align:e,children:[ed&&(0,n.Y)(T.Ay,{onHide:()=>{ei(""),W(!1)},show:Q,dbEngine:el,onDatabaseAdd:()=>p({databaseAdded:!0})}),eh&&(0,n.Y)(z.A,{onHide:()=>Z(!1),show:X,allowedExtensions:S,type:"csv"}),em&&(0,n.Y)(z.A,{onHide:()=>ea(!1),show:ee,allowedExtensions:R,type:"excel"}),ep&&(0,n.Y)(z.A,{onHide:()=>en(!1),show:et,allowedExtensions:F,type:"columnar"}),(null==d?void 0:d.text)&&(m=["error","warning","success","processing","default"].includes(d.color)?d.color:"default",(0,n.Y)(u.Tag,{color:m,css:(0,r.AH)`
                border-radius: ${125*f.sizeUnit}px;
              `,children:d.text})),(0,n.Y)(c.W1,{css:(0,r.AH)`
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 100%;
          border-bottom: none !important;

          /* Remove the underline from menu items */
          .ant-menu-item:after,
          .ant-menu-submenu:after {
            content: none !important;
          }

          .submenu-with-caret {
            height: 100%;
            padding: 0;
            .ant-menu-submenu-title {
              align-items: center;
              display: flex;
              gap: ${2*f.sizeUnit}px;
              flex-direction: row-reverse;
              height: 100%;
            }
            &.ant-menu-submenu::after {
              inset-inline: ${f.sizeUnit}px;
            }
            &.ant-menu-submenu:hover,
            &.ant-menu-submenu-active {
              .ant-menu-title-content {
                color: ${f.colorPrimary};
              }
            }
          }
        `,selectable:!1,mode:"horizontal",onClick:e=>{e.key===M.$.DbConnection?W(!0):e.key===M.$.GoogleSheets?(W(!0),ei("Google Sheets")):e.key===M.$.CSVUpload?Z(!0):e.key===M.$.ExcelUpload?ea(!0):e.key===M.$.ColumnarUpload&&en(!0)},onOpenChange:e=>(e.length>1&&!C()(null==e?void 0:e.filter(e=>{var a;return e.includes(`sub2_${null==eD||null==(a=eD[0])?void 0:a.label}`)}))&&(eu&&e$(),(ed||ec)&&eA()),null),disabledOverflow:!0,items:eL}),t.documentation_url&&(0,n.FD)(n.FK,{children:[(0,n.Y)(B,{href:t.documentation_url,target:"_blank",rel:"noreferrer",title:t.documentation_text||(0,k.t)("Documentation"),children:t.documentation_icon?(0,n.Y)(b.F.BookOutlined,{}):(0,n.Y)(b.F.QuestionCircleOutlined,{})}),(0,n.Y)("span",{children:" "})]}),t.bug_report_url&&(0,n.FD)(n.FK,{children:[(0,n.Y)(B,{href:t.bug_report_url,target:"_blank",rel:"noreferrer",title:t.bug_report_text||(0,k.t)("Report a bug"),children:t.bug_report_icon?(0,n.Y)("i",{className:t.bug_report_icon}):(0,n.Y)(b.F.BugOutlined,{})}),(0,n.Y)("span",{children:" "})]}),t.user_is_anonymous&&(0,n.FD)(B,{href:t.user_login_url,children:[(0,n.Y)(b.F.LoginOutlined,{})," ",(0,k.t)("Login")]}),(0,n.Y)(A,{version:t.version_string,sha:t.version_sha,build:t.build_number})]})},G=e=>{let[,a]=(0,w.useQueryParams)({databaseAdded:w.BooleanParam,datasetAdded:w.BooleanParam});return(0,n.Y)(J,R({setQuery:a},e))};class Q extends l.PureComponent{static getDerivedStateFromError(){return{hasError:!0}}render(){return this.state.hasError?(0,n.Y)(J,R({setQuery:this.noop},this.props)):this.props.children}constructor(...e){super(...e),this.state={hasError:!1},this.noop=()=>{}}}let W=e=>(0,n.Y)(Q,R({},e,{children:(0,n.Y)(G,R({},e))}));function X(){return(X=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let Z=i.styled.header`
  ${({theme:e})=>(0,r.AH)`
    background-color: ${e.colorBgContainer};
    border-bottom: 1px solid ${e.colorBorderSecondary};
    padding: 0 ${4*e.sizeUnit}px;
    z-index: 10;

    &:nth-last-of-type(2) nav {
      margin-bottom: 2px;
    }

    .caret {
      display: none;
    }
  `}
`,ee=i.styled.div`
  ${({theme:e})=>(0,r.AH)`
    border-left: 1px solid ${e.colorBorderSecondary};
    border-right: 1px solid ${e.colorBorderSecondary};
    height: 100%;
    color: ${e.colorText};
    padding-left: ${4*e.sizeUnit}px;
    padding-right: ${4*e.sizeUnit}px;
    font-size: ${e.fontSizeLG}px;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      max-width: ${58*e.sizeUnit}px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    @media (max-width: 1127px) {
      display: none;
    }
  `}
`,ea=(0,i.styled)(c.NG)`
  ${({theme:e})=>(0,r.AH)`
    .ant-menu-item .ant-menu-item-icon + span,
    .ant-menu-submenu-title .ant-menu-item-icon + span,
    .ant-menu-item .anticon + span,
    .ant-menu-submenu-title .anticon + span {
      margin-inline-start: 0;
    }

    .ant-menu-submenu.ant-menu-submenu-horizontal {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0;

      .ant-menu-submenu-title {
        display: flex;
        gap: ${2*e.sizeUnit}px;
        flex-direction: row-reverse;
        align-items: center;
        height: 100%;
        padding: 0 ${4*e.sizeUnit}px;
      }

      &:hover,
      &.ant-menu-submenu-active {
        .ant-menu-title-content {
          color: ${e.colorPrimary};
        }
      }

      &::after {
        content: '';
        position: absolute;
        width: 98%;
        height: 2px;
        background-color: ${e.colorPrimaryBorderHover};
        bottom: ${e.sizeUnit/8}px;
        left: 1%;
        right: auto;
        inset-inline-start: 1%;
        inset-inline-end: auto;
        transform: scale(0);
        transition: 0.2s all ease-out;
      }

      &:hover::after,
      &.ant-menu-submenu-open::after {
        transform: scale(1);
      }
    }

    .ant-menu-submenu-selected.ant-menu-submenu-horizontal::after {
      transform: scale(1);
    }
  `}
`,et=i.styled.div`
  ${({margin:e})=>(0,r.AH)`
    height: ${e?"auto":"100%"};
    margin: ${null!=e?e:0};
  `}
`,en=(0,i.styled)(v.o.Link)`
  ${({theme:e})=>(0,r.AH)`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;

    &:focus {
      border-color: transparent;
    }

    &:focus-visible {
      border-color: ${e.colorPrimaryText};
    }
  `}
`,el=(0,i.styled)(u.Row)`
  height: 100%;
`,ei=(0,i.styled)(u.Col)`
  ${({theme:e})=>(0,r.AH)`
    display: flex;
    gap: ${4*e.sizeUnit}px;
    flex-wrap: wrap;
  `}
`,er=(0,i.styled)(u.Image)`
  object-fit: contain;
`,{useBreakpoint:eo}=u.Grid;function es({data:{menu:e,brand:a,navbar_right:t,settings:r,environment_tag:c},isFrontendRoute:y=()=>!1}){let x,Y=eo(),w=(0,f.Q1)(),S=(0,i.useTheme)(),C=[],[k,F]=(0,l.useState)(C),D=(0,m.zy)();return((0,l.useEffect)(()=>{let e=D.pathname;switch(!0){case e.startsWith("/dashboard"):F(["Dashboards"]);break;case e.startsWith("/chart")||e.startsWith("/explore"):F(["Charts"]);break;case e.startsWith("/tablemodelview"):F(["Datasets"]);break;case e.startsWith("/sqllab")||e.startsWith("/savedqueryview"):F(["SQL"]);break;default:F(C)}},[D.pathname]),(0,d.P3)(_.vX.standalone)||w.hideNav)?(0,n.Y)(n.FK,{}):(0,n.Y)(Z,{className:"top",id:"main-menu",role:"navigation",children:(0,n.FD)(el,{children:[(0,n.FD)(ei,{md:16,xs:24,children:[(0,n.Y)(h.m,{id:"brand-tooltip",placement:"bottomLeft",title:a.tooltip,arrow:{pointAtCenter:!0},children:(x=S.brandLogoUrl?(0,n.Y)(et,{margin:S.brandLogoMargin,children:(0,n.Y)(en,{href:(0,s.A)(S.brandLogoHref),children:(0,n.Y)(er,{preview:!1,src:(0,o.V)(S.brandLogoUrl),alt:S.brandLogoAlt||"Apache Superset",height:S.brandLogoHeight})})}):y(window.location.pathname)?(0,n.Y)(p.Kt,{className:"navbar-brand",to:a.path,children:(0,n.Y)(er,{preview:!1,src:(0,o.V)(a.icon),alt:a.alt})}):(0,n.Y)(v.o.Link,{className:"navbar-brand",href:(0,s.A)(a.path),tabIndex:-1,children:(0,n.Y)(er,{preview:!1,src:(0,o.V)(a.icon),alt:a.alt})}),(0,n.Y)(n.FK,{children:x}))}),a.text&&(0,n.Y)(ee,{children:(0,n.Y)("span",{children:a.text})}),(0,n.Y)(ea,{mode:Y.md?"horizontal":"inline","data-test":"navbar-top",className:"main-nav",selectedKeys:k,disabledOverflow:!0,items:e.map(e=>{var a;return(({label:e,childs:a,url:t,isFrontendRoute:l})=>{if(t&&l)return{key:e,label:(0,n.Y)(g.k2,{role:"button",to:t,activeClassName:"is-active",children:e})};if(t)return{key:e,label:(0,n.Y)(v.o.Link,{href:t,children:e})};let i=[];return null==a||a.forEach((a,t)=>{"string"==typeof a&&"-"===a&&"Data"!==e?i.push({type:"divider",key:`divider-${t}`}):"string"!=typeof a&&i.push({key:`${a.label}`,label:a.isFrontendRoute?(0,n.Y)(g.k2,{to:a.url||"",exact:!0,activeClassName:"is-active",children:a.label}):(0,n.Y)(v.o.Link,{href:a.url,children:a.label})})}),X({key:e,label:e},Y.md&&{icon:(0,n.Y)(b.F.DownOutlined,{iconSize:"xs"}),popupOffset:q.K},{children:i})})(X({},e,{isFrontendRoute:y(e.url),childs:null==(a=e.childs)?void 0:a.map(e=>"string"==typeof e?e:X({},e,{isFrontendRoute:y(e.url)}))}))})})]}),(0,n.Y)(u.Col,{md:8,xs:24,children:(0,n.Y)(W,{align:Y.md?"flex-end":"flex-start",settings:r,navbarRight:t,isFrontendRoute:y,environmentTag:c})})]})})}function ed(e){let{data:a}=e,t=function(e,a){if(null==e)return{};var t,n,l={},i=Object.getOwnPropertyNames(e);for(n=0;n<i.length;n++)!(a.indexOf(t=i[n])>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t]);return l}(e,["data"]),l=X({},a),i={Data:!0,Security:!0,Manage:!0},r=[],o=[];return l.menu.forEach(e=>{if(!e)return;let a=[],t=X({},e);e.childs&&(e.childs.forEach(e=>{"string"==typeof e?a.push(e):e.label&&a.push(e)}),t.childs=a),i.hasOwnProperty(e.name)?o.push(t):r.push(t)}),l.menu=r,l.settings=o,(0,n.Y)(es,X({data:l},t))}},58977(e,a,t){t.d(a,{F:()=>i,K:()=>l});var n=t(27124);let l=[0,-8],i={name:(0,n.t)("SQL"),tabs:[{name:"Saved queries",label:(0,n.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,n.t)("Query history"),url:"/sqllab/history/",usesRouter:!0}]}},21804(e,a,t){t.d(a,{Gq:()=>o,Hh:()=>l,SO:()=>s,SX:()=>i,Wr:()=>r});var n,l=((n={}).Database="db",n.ChartSplitSizes="chart_split_sizes",n.ControlsWidth="controls_width",n.DatasourceWidth="datasource_width",n.IsDatapanelOpen="is_datapanel_open",n.HomepageChartFilter="homepage_chart_filter",n.HomepageDashboardFilter="homepage_dashboard_filter",n.HomepageCollapseState="homepage_collapse_state",n.HomepageActivityFilter="homepage_activity_filter",n.DatasetnameSetSuccessful="datasetname_set_successful",n.SqllabIsAutocompleteEnabled="sqllab__is_autocomplete_enabled",n.SqllabIsRenderHtmlEnabled="sqllab__is_render_html_enabled",n.SqllabPinnedSchemas="sqllab__pinned_schemas",n.ExploreDataTableOriginalFormattedTimeColumns="explore__data_table_original_formatted_time_columns",n.DashboardCustomFilterBarWidths="dashboard__custom_filter_bar_widths",n.DashboardExploreContext="dashboard__explore_context",n.DashboardEditorShowOnlyMyCharts="dashboard__editor_show_only_my_charts",n.CommonResizableSidebarWidths="common__resizable_sidebar_widths",n);function i(e,a){try{let t=localStorage.getItem(e);if(null===t)return a;return JSON.parse(t)}catch(e){return a}}function r(e,a){try{localStorage.setItem(e,JSON.stringify(a))}catch(e){}}function o(e,a){return i(e,a)}function s(e,a){r(e,a)}}}]);