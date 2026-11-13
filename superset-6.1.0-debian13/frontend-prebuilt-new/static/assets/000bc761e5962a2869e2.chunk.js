"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4750],{43907(e,t,n){n.d(t,{E:()=>o});var r=n(2445),i=n(85614),a=n(22022);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let o=(0,i.styled)(e=>(0,r.Y)(a.Badge,l({},e)))`
  ${({theme:e,color:t,count:n})=>`
    & > sup,
    & > sup.ant-badge-count {
      box-shadow: none;
      ${void 0!==n?`background: ${t||e.colorPrimary};`:""}
    }
  `}
`},79592(e,t,n){n.d(t,{Z:()=>l});var r=n(2445),i=n(22022);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let l=Object.assign(e=>{let{padded:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},a=Object.getOwnPropertyNames(e);for(r=0;r<a.length;r++)!(t.indexOf(n=a[r])>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n]);return i}(e,["padded"]);return(0,r.Y)(i.Card,a({},n,{css:e=>({".ant-card-body":{padding:t?4*e.sizeUnit:e.sizeUnit}})}))},{Meta:i.Card.Meta})},48158(e,t,n){n.d(t,{T:()=>s});var r=n(2445),i=n(27124),a=n(85614),l=n(60685),o=n(8563);function s({certifiedBy:e,details:t,size:n="l"}){let d=(0,a.useTheme)();return(0,r.Y)(o.m,{id:"certified-details-tooltip",title:(0,r.FD)(r.FK,{children:[e&&(0,r.Y)("div",{children:(0,r.Y)("strong",{children:(0,i.t)("Certified by %s",e)})}),(0,r.Y)("div",{children:t})]}),children:(0,r.Y)(l.F.Certified,{iconColor:d.colorPrimary,iconSize:n})})}},70621(e,t,n){n.d(t,{c:()=>o});var r=n(2445),i=n(17437),a=n(22022);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e){return(0,r.Y)(a.Divider,l({css:e=>(0,i.AH)`
        margin: ${e.margin}px 0;
      `},e))}},70524(e,t,n){n.d(t,{z:()=>g});var r=n(2445),i=n(27124),a=n(85614),l=n(17437),o=n(24002),s=n(46942),d=n.n(s),c=n(8563),u=n(48158),h=n(22022);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let m=(0,a.styled)(u.T)`
  vertical-align: middle;
`,f=a.styled.span`
  &.editable-title {
    display: inline;
    &.editable-title--editing {
      width: 100%;
    }

    input,
    textarea {
      outline: none;
      background: transparent;
      box-shadow: none;
      cursor: initial;
      font-feature-settings:
        'liga' 0,
        'calt' 0;
      font-variant-ligatures: none;
      font-weight: bold;
    }

    input[type='text'],
    textarea {
      color: ${({theme:e})=>e.colorTextTertiary};
      border-radius: ${({theme:e})=>e.sizeUnit}px;
      font-size: ${({theme:e})=>e.fontSizeLG}px;
      padding: ${({theme:e})=>e.sizeUnit/2}px;
      min-height: 100px;
      width: 95%;
    }

    &.datasource-sql-expression {
      min-width: 315px;
      width: 100%;
    }
  }
`;function g(e){let{canEdit:t=!1,editing:n=!1,extraClasses:a,noPermitTooltip:s,onSaveTitle:u,showTooltip:g=!0,style:y,title:b="",defaultTitle:v="",placeholder:C="",certifiedBy:x,certificationDetails:S,renderLink:w,maxWidth:Y,autoSize:$=!0,onEditingChange:_}=e,F=function(e,t){if(null==e)return{};var n,r,i={},a=Object.getOwnPropertyNames(e);for(r=0;r<a.length;r++)!(t.indexOf(n=a[r])>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n]);return i}(e,["canEdit","editing","extraClasses","noPermitTooltip","onSaveTitle","showTooltip","style","title","defaultTitle","placeholder","certifiedBy","certificationDetails","renderLink","maxWidth","autoSize","onEditingChange"]),[D,E]=(0,o.useState)(n),[A,I]=(0,o.useState)(b),[T,M]=(0,o.useState)(b),[z,k]=(0,o.useState)(0),O=(0,o.useRef)(null);function L(){let e=A.trim();if(t){if(E(!1),null==_||_(!1),!e.length)return void I(T);T!==e&&M(e),b!==e&&u(e)}}(0,o.useLayoutEffect)(()=>{var e,t;let{font:n}=window.getComputedStyle((null==(t=O.current)||null==(e=t.resizableTextArea)?void 0:e.textArea)||document.body);k(Math.min(function(e,t="14px Arial"){let n=document.createElement("canvas").getContext("2d");return n?(n.font=t,n.measureText(e).width):0}(A||"",n)+20,"number"==typeof Y?Y:1/0))},[A,Y]),(0,o.useEffect)(()=>{b!==A&&(M(A),I(b))},[b]),(0,o.useEffect)(()=>{if(D&&O.current){var e;let t=null==(e=O.current.resizableTextArea)?void 0:e.textArea;if(t){t.focus();let{length:e}=t.value;t.setSelectionRange(e,e),t.scrollTop=t.scrollHeight}}},[D]);let U=A;D||A||(U=v||b);let P=(0,r.Y)(h.Input.TextArea,{size:"small","data-test":"textarea-editable-title-input",ref:O,value:U,className:b?void 0:"text-muted",onChange:function(e){t&&I(e.target.value)},onBlur:L,onClick:function(){var e,n;if(!t||D)return;let r=null==(n=O.current)||null==(e=n.resizableTextArea)?void 0:e.textArea;if(r){r.focus();let{length:e}=r.value;r.setSelectionRange(e,e)}E(!0),null==_||_(!0)},onKeyDown:function(e){["Backspace","Delete"," ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.key)&&e.stopPropagation(),"Enter"===e.key&&(e.preventDefault(),L())},onPressEnter:function(e){e.preventDefault(),L()},placeholder:C,variant:D?"outlined":"borderless",autoSize:!!$&&{minRows:1,maxRows:3},css:e=>(0,l.AH)`
        && {
          width: ${z}px;
          min-width: ${10*e.sizeUnit}px;
          transition: auto;
        }
      `});return g&&!D&&(P=(0,r.Y)(c.m,{id:"title-tooltip",placement:"topLeft",title:t?(0,i.t)("Click to edit"):s||(0,i.t)("You don't have the rights to alter this title."),children:P})),t||(P=w?w(U||""):(0,r.Y)("span",{"data-test":"span-title",children:U})),(0,r.FD)(f,p({"data-test":"editable-title",className:d()("editable-title",a,t&&"editable-title--editable",D&&"editable-title--editing"),style:y,editing:D,canEdit:t},F,{children:[x&&(0,r.FD)(r.FK,{children:[(0,r.Y)(m,{certifiedBy:x,details:S,size:"xl"})," "]}),P]}))}},57832(e,t,n){n.d(t,{l:()=>l});var r=n(2445),i=n(22022);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let l=Object.assign(function(e){return(0,r.Y)(i.Form,a({},e))},{useForm:i.Form.useForm,Item:i.Form.Item,List:i.Form.List,ErrorList:i.Form.ErrorList,Provider:i.Form.Provider})},93225(e,t,n){n.d(t,{e:()=>a});var r=n(22022),i=n(85614);let a=(0,i.styled)(r.Form.Item)`
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
`},89920(e,t,n){n.d(t,{Ay:()=>g,fn:()=>m,pX:()=>f});var r=n(2445),i=n(85614),a=n(17437),l=n(22022),o=n(60685);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let d=e=>{let{animated:t=!1,allowOverflow:n=!0,contentHeight:i="100%",fullHeight:o=!1,tabBarStyle:d,contentStyle:c,contentPadding:u}=e,h=function(e,t){if(null==e)return{};var n,r,i={},a=Object.getOwnPropertyNames(e);for(r=0;r<a.length;r++)!(t.indexOf(n=a[r])>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n]);return i}(e,["animated","allowOverflow","contentHeight","fullHeight","tabBarStyle","contentStyle","contentPadding"]);return(0,r.Y)(l.Tabs,s({animated:t},h,{tabBarStyle:d,css:e=>(0,a.AH)`
      overflow: ${n?"visible":"hidden"};
      ${o&&"height: 100%;"}

      .ant-tabs-content-holder {
        overflow: ${n?"visible":"auto"};
        ${o&&"height: 100%;"}
        ${i&&`height: ${"number"==typeof i?`${i}px`:i};`}
        ${u}
      }
      .ant-tabs-content {
        ${o&&"height: 100%;"}
      }
      .ant-tabs-tabpane {
        ${o&&"height: 100%;"}
        ${c}
      }
      .ant-tabs-nav {
        margin: 0;
      }
      .ant-tabs-nav-wrap {
        ${!(d&&"paddingLeft"in d)?`padding: 0 ${4*e.sizeUnit}px;`:""}
      }
      .ant-tabs-tab {
        flex: 1 1 auto;

        .short-link-trigger.btn {
          padding: 0 ${e.sizeUnit}px;
          & > .fa.fa-link {
            top: 0;
          }
        }
      }
      .ant-tabs-tab-btn {
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        font-size: ${e.fontSizeSM}px;
        text-align: center;
        user-select: none;
        .required {
          margin-left: ${e.sizeUnit/2}px;
          color: ${e.colorError};
        }
        &:focus-visible {
          box-shadow: none;
        }
      }
    `}))},c=(0,i.styled)(l.Tabs.TabPane)``,u=Object.assign(d,{TabPane:c}),h=(0,i.styled)(d)`
  ${({theme:e,contentStyle:t})=>`
    .ant-tabs-content-holder {
      background: ${e.colorBgContainer};
      ${t}
    }

    & > .ant-tabs-nav {
      margin-bottom: 0;
    }

    .ant-tabs-tab-remove {
      padding-top: 0;
      padding-bottom: 0;
      height: ${6*e.sizeUnit}px;
    }
  `}
`,p=(0,i.styled)(o.F.CloseOutlined)`
  color: ${({theme:e})=>e.colorIcon};
`,m=Object.assign(h,{TabPane:c});m.defaultProps={type:"editable-card",animated:{inkBar:!0,tabPane:!1}},m.TabPane.defaultProps={closeIcon:(0,r.Y)(p,{iconSize:"s",role:"button",tabIndex:0})};let f=Object.assign((0,i.styled)(m)`
  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab {
    margin: 0 ${({theme:e})=>4*e.sizeUnit}px;
    padding: ${({theme:e})=>`${3*e.sizeUnit}px ${e.sizeUnit}px`};
    background: transparent;
    border: none;
  }

  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-ink-bar {
    visibility: visible;
  }

  .ant-tabs-tab-btn {
    font-size: ${({theme:e})=>e.fontSize}px;

    .editable-title textarea,
    .editable-title input[type='text'] {
      font-size: inherit;
    }
  }

  .ant-tabs-tab-remove {
    margin-left: 0;
    padding-right: 0;
  }

  .ant-tabs-nav-add {
    min-width: unset !important;
    background: transparent !important;
    border: none !important;
  }
`,{TabPane:c}),g=u},6107(e,t,n){n.d(t,{F:()=>r,r:()=>i});let r="AUTO",i=/^[A-Z]{3}$/},58097(e,t,n){n.d(t,{Ay:()=>u,P1:()=>d,Qn:()=>o,vu:()=>s});var r=n(36826),i=n(73371),a=n(18349),l=n(6107);let o=e=>{var t;return null==(t=new Intl.NumberFormat("en-US",{style:"currency",currency:e.symbol}).formatToParts(1).find(e=>"currency"===e.type))?void 0:t.value};function s(e){if(null==e||"string"!=typeof e)return null;let t=e.trim().toUpperCase();return l.r.test(t)?t:null}function d(e){let t=null;for(let n of e){let e=s(n);if(null!==e){if(null===t)t=e;else if(e!==t)return!0}}return!1}class c extends r.A{hasValidCurrency(){var e;return!!(null==(e=this.currency)?void 0:e.symbol)}getNormalizedD3Format(){return this.d3Format.replace(/\$/g,"")}normalizeForCurrency(e){return e.replace(/%/g,"")}format(e,t,n){var r;let i=(0,a.gV)(this.getNormalizedD3Format())(e),d=(null==(r=this.currency)?void 0:r.symbol)===l.F;if(!this.hasValidCurrency()&&!d)return i;let c=this.normalizeForCurrency(i);if(d){if(t&&n&&t[n]){let e=s(t[n]);if(e)try{let t=o({symbol:e});if(t){if("prefix"===this.currency.symbolPosition)return`${t} ${c}`;return this.currency.symbolPosition,`${c} ${t}`}}catch(e){}}return i}try{let e=o(this.currency);if("prefix"===this.currency.symbolPosition)return`${e} ${c}`;return this.currency.symbolPosition,`${c} ${e}`}catch(e){return i}}constructor(e){super((e,t,n)=>this.format(e,t,n)),this.d3Format=e.d3Format||i.A.SMART_NUMBER,this.currency=e.currency,this.locale=e.locale||"en-US"}}let u=c},57409(e,t,n){n.d(t,{A:()=>r});function r(e,t){return e===t||!e&&!t||!!(e&&t&&e.length===t.length&&e.every((e,n)=>e===t[n]))}},62365(e,t,n){n.d(t,{A:()=>i});var r=n(27124);function i(e){return!!(e&&Number.isNaN(Number(e)))&&(0,r.t)("is expected to be a number")}},34106(e,t,n){let r;n.r(t),n.d(t,{default:()=>t0});var i,a=n(2445),l=n(58561),o=n.n(l),s=n(24002),d=n(61225),c=n(891),u=n(19202),h=n(51281),p=n(73815),m=n(68655),f=n(63021),g=n(27243),y=n(85614),b=n(17437),v=n(98837),C=n(27124),x=n(89920),S=n(17402),w=n(37350),Y=n(12079),$=n(560),_=n(97616),F=n(55990),D=n(7070),E=n(74206),A=n(43907),I=n(79592),T=n(68292),M=n(33296),z=n(90617),k=n(48158),O=n(70524),L=n(59272),U=n(62858),P=n(68447),q=n(80967),R=n(60685),j=n(70621),H=n(22022),B=n(29138),K=n(8563),N=n(10020),Q=n(14121);function W(e,t,n,r,i,a,l){try{var o=e[a](l),s=o.value}catch(e){n(e);return}o.done?t(s):Promise.resolve(s).then(r,i)}let G=(0,n(98987).A)({method:"POST",endpoint:"/api/v1/sqllab/execute"});function V(e){return{type:"SET_QUERY_IS_LOADING",payload:e}}var X=n(6411),J=n.n(X),Z=n(58414),ee=n(22389),et=n(44222),en=n(72863),er=n(43561),ei=n(20422),ea=n(57832);function el(e,t,n,r,i,a,l){try{var o=e[a](l),s=o.value}catch(e){n(e);return}o.done?t(s):Promise.resolve(s).then(r,i)}function eo(){return(eo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function es(e,t,n){return s.Children.map(e,e=>{let r=e;return(0,s.isValidElement)(e)&&e.type&&"function"==typeof e.type&&e.type.name===t.name&&(r=(0,s.cloneElement)(e,n(e))),(0,s.isValidElement)(r)&&r.props&&r.props.children&&(r=(0,s.cloneElement)(r,{children:es(r.props.children,t,n)})),r})}var ed=n(93225);function ec({fieldKey:e,value:t,label:n,description:r=null,control:i,additionalControl:l,onChange:o=()=>{},compact:d=!1,inline:c=!1,errorMessage:u}){let h=(0,s.useCallback)(t=>{o(e,t)},[o,e]),p=(0,y.useTheme)(),m=!d&&r?r:void 0,f=d&&r?(0,a.Y)(K.m,{css:(0,b.AH)`
          color: ${p.colorTextTertiary};
        `,id:"field-descr",placement:"right",title:r,children:(0,a.Y)(R.F.InfoCircleOutlined,{iconSize:"s",css:(0,b.AH)`
            margin-left: ${p.marginXXS}px;
          `,iconColor:p.colorTextTertiary})}):void 0,g=(0,s.cloneElement)(i,{value:t,onChange:h,label:(0,a.FD)(M.l,{children:[n||e,f]})});return(0,a.FD)("div",{css:l&&(0,b.AH)`
          position: relative;
        `,children:[l,(0,a.Y)(ed.e,{extra:m,css:!c&&(0,b.AH)`
            .ControlHeader {
              margin-bottom: ${p.marginXXS}px;
            }
          `,children:g}),u&&(0,a.Y)("div",{css:e=>({color:e.colorText,[c?"marginLeft":"marginTop"]:e.marginXXS}),children:u})]})}function eu(){return(eu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function eh({children:e,onChange:t,item:n={},title:r=null,compact:i=!1}){let l=(0,s.useCallback)((e,r)=>{null==t||t(eu({},n,{[e]:r}))},[t,n]);return(0,a.FD)(ea.l,{className:"CRUD",layout:"vertical",children:[r&&(0,a.FD)(z.o.Title,{level:5,css:(0,b.AH)`
            margin-top: 0.5em;
          `,children:[r," ",(0,a.Y)(j.c,{})]}),es(e,ec,e=>({onChange:l,value:null==n?void 0:n[e.props.fieldKey],compact:i}))]})}function ep(){return(ep=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let em=y.styled.div`
  text-align: right;
  ${({theme:e})=>`margin-bottom: ${2*e.sizeUnit}px`}
`,ef=y.styled.span`
  ${({theme:e})=>`
    margin-top: ${3*e.sizeUnit}px;
    margin-left: ${3*e.sizeUnit}px;
    button>span>:first-of-type {
      margin-right: 0;
    }
  `}
`;function eg(e){let t=e.map(e=>ep({},e,{id:e.id||(0,er.Ak)()})),n={};return t.forEach(e=>{n[e.id]=e}),{collection:n,collectionArray:t}}class ey extends s.PureComponent{componentDidUpdate(e){if(this.props.collection!==e.collection){let{collection:e,collectionArray:t}=eg(this.props.collection);this.setState(n=>({collection:e,collectionArray:t,expandedColumns:n.expandedColumns}))}}onCellChange(e,t,n){this.setState(r=>{let i=ep({},r.collection,{[e]:ep({},r.collection[e],{[t]:n})}),a=r.collectionArray.map(t=>t.id===e?i[e]:t);return this.props.onChange&&this.props.onChange(a),{collection:i,collectionArray:a}})}onAddItem(){if(this.props.itemGenerator){let e=this.props.itemGenerator(),t=!0===e.expanded;e.id||(e=ep({},e,{id:(0,er.Ak)()})),delete e.expanded,this.setState(n=>{let r=ep({},n.collection,{[e.id]:e}),i=t?ep({},n.expandedColumns,{[e.id]:!0}):n.expandedColumns;return{collection:r,collectionArray:[e,...n.collectionArray],expandedColumns:i}},()=>{this.props.onChange&&this.props.onChange(this.state.collectionArray)})}}onFieldsetChange(e){this.changeCollection(ep({},this.state.collection,{[e.id]:e}))}getLabel(e){let{columnLabels:t}=this.props,n=(null==t?void 0:t[e])?t[e]:e;return n.startsWith("__")&&(n=""),n}getTooltip(e){let{columnLabelTooltips:t}=this.props;return null==t?void 0:t[e]}changeCollection(e){let t=new Set(this.state.collectionArray.map(e=>e.id)),n=[];for(let t of this.state.collectionArray)e[t.id]&&n.push(e[t.id]);for(let r of Object.values(e))t.has(r.id)||n.push(r);this.setState({collection:e,collectionArray:n}),this.props.onChange&&this.props.onChange(n)}deleteItem(e){let t=ep({},this.state.collection);delete t[e],this.changeCollection(t)}toggleExpand(e){this.setState(t=>({expandedColumns:ep({},t.expandedColumns,{[e]:!t.expandedColumns[e]})}))}handleTableChange(e,t,n){void 0!==e.current&&void 0!==e.pageSize&&this.setState({currentPage:e.current,pageSize:e.pageSize});let r=Array.isArray(n)?n[0]:n,i="",a=0;(null==r?void 0:r.columnKey)&&(null==r?void 0:r.order)&&(i=r.columnKey,a="ascend"===r.order?1:2);let{sortColumns:l}=this.props,o=i;if((null==l?void 0:l.includes(o))||0===a){let e=[...this.props.collection];if(0!==a)e.sort((e,t)=>((e,t)=>{if("string"==typeof e&&"string"==typeof t)return(e||"").localeCompare(t||"");if("number"==typeof e&&"number"==typeof t)return e-t;if("boolean"==typeof e&&"boolean"==typeof t)return e===t?0:e?1:-1;let n=String(null!=e?e:""),r=String(null!=t?t:"");return n.localeCompare(r)})(e[o],t[o])),2===a&&e.reverse();else{let{collectionArray:t}=eg(this.props.collection);e=t}this.setState({collectionArray:e,sortColumn:i,sort:a})}}renderExpandableSection(e){let t=()=>({item:e,onChange:this.onFieldsetChange});return es(this.props.expandFieldset,eh,t)}renderCell(e,t){var n;let r=null==(n=this.props.itemRenderers)?void 0:n[t],i=e[t],a=this.onCellChange.bind(this,e.id,t);return r?r(i,a,this.getLabel(t),e):i}buildTableColumns(){let{tableColumns:e,allowDeletes:t,sortColumns:n=[]}=this.props,r=e.map(e=>{let t=this.getLabel(e),r=this.getTooltip(e),i=n.includes(e),l=this.state.sortColumn===e?1===this.state.sort?"ascend":2===this.state.sort?"descend":null:null;return{key:e,dataIndex:e,minWidth:100,title:(0,a.FD)(a.FK,{children:[t,r&&(0,a.FD)(a.FK,{children:[" ",(0,a.Y)(q.I,{label:(0,C.t)("description"),tooltip:r,placement:"top"})]})]}),render:(t,n)=>this.renderCell(n,e),onCell:n=>{var r;let i=null==(r=this.props.itemCellProps)?void 0:r[e],a=n[e];return i?i(a,t,n):{}},sorter:i,sortOrder:l}});return t&&r.push({key:"__actions",dataIndex:"__actions",sorter:!1,title:(0,a.Y)(a.FK,{}),onCell:()=>({}),sortOrder:null,minWidth:50,render:(e,t)=>(0,a.Y)("span",{"data-test":"crud-delete-option",className:"text-primary",css:e=>(0,b.AH)`
              display: flex;
              justify-content: center;
              color: ${e.colorTextTertiary};
            `,children:(0,a.Y)(R.F.DeleteOutlined,{"aria-label":(0,C.t)("Delete item"),className:"pointer","data-test":"crud-delete-icon",role:"button",tabIndex:0,onClick:()=>this.deleteItem(t.id),iconSize:"l",iconColor:"inherit"})})}),r}render(){let{stickyHeader:e,emptyMessage:t=(0,C.t)("No items"),expandFieldset:n,pagination:r=!1,filterTerm:i,filterFields:l}=this.props,o=i&&(null==l?void 0:l.length)?this.state.collectionArray.filter(e=>l.some(t=>{var n;return String(null!=(n=e[t])?n:"").toLowerCase().includes(i.toLowerCase())})):this.state.collectionArray,s=this.buildTableColumns(),d=Object.keys(this.state.expandedColumns).filter(e=>this.state.expandedColumns[e]),c=n?{expandedRowRender:e=>this.renderExpandableSection(e),rowExpandable:()=>!0,expandedRowKeys:d,onExpand:(e,t)=>{this.toggleExpand(t.id)}}:void 0,{pageSize:u,currentPage:h}=this.state,p=o.length,m=Math.min(h,p>0?Math.ceil(p/u):1),f=!1===r||void 0===r?r:ep({},"object"==typeof r?r:{},{current:m,pageSize:u,total:p});return(0,a.FD)(a.FK,{children:[(0,a.Y)(em,{children:this.props.allowAddItem&&(0,a.Y)(ef,{children:(0,a.FD)(B.$n,{buttonSize:"small",buttonStyle:"secondary",onClick:this.onAddItem,"data-test":"add-item-button",children:[(0,a.Y)(R.F.PlusOutlined,{iconSize:"m","data-test":"crud-add-table-item"}),(0,C.t)("Add item")]})})}),(0,a.Y)(ei.Ay,{"data-test":"crud-table",columns:s,data:o,rowKey:e=>String(e.id),sticky:e,pagination:f,onChange:this.handleTableChange,locale:{emptyText:t},css:e&&(0,b.AH)`
              overflow: auto;
            `,expandable:c,size:ei.QS.Middle,tableLayout:"auto"})]})}constructor(e){var t;super(e);const{collection:n,collectionArray:r}=eg(e.collection),i="object"==typeof e.pagination&&(null==(t=e.pagination)?void 0:t.pageSize)?e.pagination.pageSize:10;this.state={expandedColumns:{},collection:n,collectionArray:r,sortColumn:"",sort:0,currentPage:1,pageSize:i},this.onAddItem=this.onAddItem.bind(this),this.renderExpandableSection=this.renderExpandableSection.bind(this),this.getLabel=this.getLabel.bind(this),this.onFieldsetChange=this.onFieldsetChange.bind(this),this.changeCollection=this.changeCollection.bind(this),this.handleTableChange=this.handleTableChange.bind(this),this.buildTableColumns=this.buildTableColumns.bind(this),this.toggleExpand=this.toggleExpand.bind(this)}}var eb=n(37973);function ev(e,t,n,r,i,a,l){try{var o=e[a](l),s=o.value}catch(e){n(e);return}o.done?t(s):Promise.resolve(s).then(r,i)}let eC=y.styled.div`
  align-items: center;
  display: flex;
  gap: ${({theme:e})=>e.sizeUnit}px;

  a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.2;
  }

  svg {
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,ex=({datasourceId:e,charts:t,totalCount:n,onFetchCharts:r,addDangerToast:i})=>{let l=(0,s.useRef)(i),o=(0,s.useRef)(null),d=(0,s.useRef)(!1),c=(0,s.useRef)(!1);(0,s.useEffect)(()=>(c.current=!0,()=>{c.current=!1}),[]);let[u,h]=(0,s.useState)(!1),[p,m]=(0,s.useState)(1),[f,g]=(0,s.useState)("changed_on_delta_humanized"),[y,v]=(0,s.useState)("desc"),[x,S]=(0,s.useState)(""),w=(0,s.useCallback)((t=1,n=f,i=y)=>{var a;return(a=function*(){if(e){h(!0);try{yield r(t,25,n,i),c.current&&(m(t),g(n),v(i))}catch(e){if("AbortError"===e.name)return;l.current&&l.current((0,C.t)("Error fetching charts"))}finally{c.current&&h(!1)}}},function(){var e=this,t=arguments;return new Promise(function(n,r){var i=a.apply(e,t);function l(e){ev(i,n,r,l,o,"next",e)}function o(e){ev(i,n,r,l,o,"throw",e)}l(void 0)})})()},[e,r,f,y]);(0,s.useEffect)(()=>{l.current=i},[i]),(0,s.useEffect)(()=>{let e;return d.current&&!u&&(e=requestAnimationFrame(()=>{var e;let t=null==(e=o.current)?void 0:e.querySelector(".ant-table-body");t&&t.scrollTo({top:0,behavior:"smooth"})})),d.current=u,()=>{void 0!==e&&cancelAnimationFrame(e)}},[u]);let Y=(0,s.useCallback)(e=>{w(e)},[w]),$=(0,s.useCallback)(e=>{let t=e===f&&"desc"===y?"asc":"desc";w(1,e,t)},[w,f,y]),_=(0,s.useCallback)(e=>{(null==e?void 0:e.current)&&e.current!==p&&Y(e.current)},[p,Y]),F=(0,s.useMemo)(()=>[{title:(0,C.t)("Chart"),dataIndex:"slice_name",key:"slice_name",render:(e,t)=>(0,a.FD)(eC,{children:[(0,a.FD)(Q.Kt,{to:t.url,target:"_blank","data-test":`${t.slice_name}-usage-chart-title`,children:[t.certified_by&&(0,a.FD)(a.FK,{children:[(0,a.Y)(k.T,{certifiedBy:t.certified_by,details:t.certification_details})," "]}),t.slice_name]}),t.description&&(0,a.Y)(q.I,{tooltip:t.description})]}),sorter:!0,sortOrder:"slice_name"===f?"asc"===y?"ascend":"descend":void 0,onHeaderCell:()=>({onClick:()=>$("slice_name"),style:{cursor:"pointer"}}),width:300},{title:(0,C.t)("Chart owners"),dataIndex:"owners",key:"owners",render:(e,t)=>(0,a.Y)(Q.WM,{users:t.owners,maxCount:3}),sorter:!1,width:150},{title:(0,C.t)("Last modified"),dataIndex:"changed_on_delta_humanized",key:"changed_on_delta_humanized",render:(e,t)=>(0,a.Y)(Q.UW,{date:t.changed_on_delta_humanized,user:t.changed_by||void 0}),sorter:!0,sortOrder:"changed_on_delta_humanized"===f?"asc"===y?"ascend":"descend":void 0,onHeaderCell:()=>({onClick:()=>$("changed_on_delta_humanized"),style:{cursor:"pointer"}}),width:160},{title:(0,C.t)("Dashboard usage"),dataIndex:"dashboards",key:"dashboards",render:(e,t)=>(0,a.Y)(eb.o,{dashboards:t.dashboards.map(e=>({id:e.id,dashboard_title:e.dashboard_title})),external:!0}),sorter:!1,width:200}],[$,f,y]),D=(0,s.useMemo)(()=>{if(!x)return t;let e=x.toLowerCase();return t.filter(t=>{var n,r,i;return!!((null==(n=t.slice_name)?void 0:n.toLowerCase().includes(e))||(null==(r=t.owners)?void 0:r.some(t=>{var n,r;return(null==(n=t.first_name)?void 0:n.toLowerCase().includes(e))||(null==(r=t.last_name)?void 0:r.toLowerCase().includes(e))}))||(null==(i=t.dashboards)?void 0:i.some(t=>{var n;return null==(n=t.dashboard_title)?void 0:n.toLowerCase().includes(e)})))})},[t,x]);return(0,a.FD)("div",{ref:o,children:[(0,a.Y)(H.Input.Search,{placeholder:(0,C.t)("Search charts by name, owner, or dashboard"),value:x,onChange:e=>{S(e.target.value),e.target.value||m(1)},style:{marginBottom:16,width:400},allowClear:!0}),(0,a.Y)(ei.Ay,{sticky:!0,columns:F,data:D,pagination:!x&&{current:p,total:n,pageSize:25,onChange:Y,showSizeChanger:!1,size:"default"},loading:u,size:ei.QS.Middle,rowKey:e=>e.id?`chart-${e.id}`:`chart-${e.slice_name}`,tableLayout:"fixed",scroll:{y:293,x:"100%"},css:(0,b.AH)`
          .ant-table-pagination.ant-pagination {
            margin-bottom: 0;
          }
        `,locale:{emptyText:(0,C.t)("No items")},onChange:_})]})};var eS=n(44970),ew=n(13093);function eY(){return(eY=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function e$(e,t,n,r,i=eS.Mh,a){var l,o,s,d;let c,u,h,p,m=a?null!=(l=a.get(n))?l:-1:e.findIndex(({uuid:e})=>e===n),f=a?null!=(o=a.get(t))?o:-1:e.findIndex(({uuid:e})=>e===t),g=e[f];if(!g||-1===m)return null;f<m?(h=m,p=m+1):f>m?(h=m-1,p=m):(h=m-1,p=m+1),c=e[h],u=e[p],(null==c?void 0:c.uuid)===t&&(h-=1,c=e[h]),(null==u?void 0:u.uuid)===t&&(p+=1,u=e[p]);let y=function(e,t=eS.Mh){return Math.round(e/t)}(r,i),b=g.depth+y,v=(d=c)?d.type===ew.a.Folder?Math.min(d.depth+1,eS.lr):d.depth:0,C=(s=u,g.type!==ew.a.Folder?1:s?s.depth:0),x=b;b>=v?x=v:b<C&&(x=C);let S=null;if(x>0&&c)if(x===c.depth)({parentId:S}=c);else if(x>c.depth)S=c.uuid;else{let n=f<m?m:m-1;for(let r=n;r>=0;r-=1)if(e[r].uuid!==t&&e[r].depth===x){({parentId:S}=e[r]);break}}return{depth:x,maxDepth:v,minDepth:C,parentId:S}}function e_(e){return function e(t,n=null,r=0,i=[]){for(let a=0;a<t.length;a+=1){let l=t[a],o={uuid:l.uuid,type:l.type,name:l.name,description:"description"in l?l.description:void 0,children:"children"in l?l.children:void 0,parentId:n,depth:r,index:a,collapsed:"children"in l&&l.collapsed};i.push(o),l.type===ew.a.Folder&&"children"in l&&l.children&&e(l.children,l.uuid,r+1,i)}return i}(e)}function eF(e){let t=[],n=new Map;for(let t of e){let{uuid:e,type:r,name:i,description:a}=t,l=r===ew.a.Folder?{uuid:e,type:r,name:i,description:a,children:[]}:{uuid:e,type:r,name:i};n.set(e,l)}for(let r of e){let{uuid:e,parentId:i}=r,a=n.get(e);if(i){let e=n.get(i);e&&e.type===ew.a.Folder&&"children"in e?e.children.push(a):e||t.push(a)}else t.push(a)}return t}function eD(e){let t=e=>e&&0!==e.length?e.map(e=>{if(e.type===ew.a.Folder&&"children"in e){let n=t(e.children);return 0===n.length?null:{uuid:e.uuid,type:e.type,name:e.name,description:e.description,children:n}}return{uuid:e.uuid,type:e.type}}).filter(e=>null!==e):[];return e.filter(e=>e.type===ew.a.Folder).map(e=>{let n="children"in e?t(e.children):[];return 0===n.length?null:{uuid:e.uuid,type:e.type,name:e.name,description:"description"in e?e.description:void 0,children:n}}).filter(e=>null!==e)}function eE(e,t){let n=e=>{if(!e)return e;let r=!1,i=[];for(let a of e)if(a.type===ew.a.Folder&&"children"in a){let e=n(a.children);e!==a.children?(r=!0,i.push(eY({},a,{children:e}))):i.push(a)}else t.has(a.uuid)?i.push(a):r=!0;return r?i:e},r=!1,i=e.map(e=>{let t=n(e.children);return t!==e.children?(r=!0,eY({},e,{children:t})):e});return r?i:e}function eA(e){let t=0;for(let n of e)if(t+=1,n.children)for(let e of n.children)"children"in e&&(t+=eA([e]));return t}var eI=n(38221),eT=n.n(eI),eM=n(70713),ez=n(43375),ek=n(43627);let eO="u">typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),eL=new Uint8Array(16),eU=[];for(let e=0;e<256;++e)eU.push((e+256).toString(16).slice(1));let eP=function(e,t,n){if(eO&&!t&&!e)return eO();var i=e,a=n;let l=(i=i||{}).random??i.rng?.()??function(){if(!r){if("u"<typeof crypto||!crypto.getRandomValues)throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");r=crypto.getRandomValues.bind(crypto)}return r(eL)}();if(l.length<16)throw Error("Random bytes length must be >= 16");if(l[6]=15&l[6]|64,l[8]=63&l[8]|128,t){if((a=a||0)<0||a+16>t.length)throw RangeError(`UUID byte range ${a}:${a+15} is out of buffer bounds`);for(let e=0;e<16;++e)t[a+e]=l[e];return t}return function(e,t=0){return(eU[e[t+0]]+eU[e[t+1]]+eU[e[t+2]]+eU[e[t+3]]+"-"+eU[e[t+4]]+eU[e[t+5]]+"-"+eU[e[t+6]]+eU[e[t+7]]+"-"+eU[e[t+8]]+eU[e[t+9]]+"-"+eU[e[t+10]]+eU[e[t+11]]+eU[e[t+12]]+eU[e[t+13]]+eU[e[t+14]]+eU[e[t+15]]).toLowerCase()}(l)};function eq(){return(eq=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let eR=(e,t)=>[{uuid:eS.v3,type:ew.a.Folder,name:(0,C.t)("Metrics"),children:e.map(e=>({type:ew.a.Metric,uuid:e.uuid,name:e.metric_name||""}))},{uuid:eS.Lc,type:ew.a.Folder,name:(0,C.t)("Columns"),children:t.map(e=>({type:ew.a.Column,uuid:e.uuid,name:e.column_name||""}))}],ej={activationConstraint:{distance:8}},eH={droppable:{strategy:ez.MeasuringStrategy.BeforeDragging}},eB={enabled:!1},eK=y.styled.div`
  ${({theme:e,depth:t,isDragging:n,isOverlay:r})=>`
    margin: 0 ${e.marginMD}px;
    margin-left: ${Math.max(0,(t-1)*24+4)}px;
    padding-left: ${e.paddingSM}px;
    display: flex;
    align-items: center;
    cursor: pointer;
    opacity: ${n?.4:1};
    user-select: none;
    ${n||r?"will-change: transform;":""}
  `}
`,eN=y.styled.div`
  ${({theme:e,variant:t})=>{let n="visible"===t?e.marginSM:e.marginXS;return`
      height: ${1+2*n}px;
      display: flex;
      align-items: center;
      margin-left: ${e.marginSM}px;
      margin-right: ${e.marginMD}px;

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: ${"visible"===t?e.colorBorderSecondary:"transparent"};
      }
    `}}
`,eQ=(0,y.styled)(eK)`
  ${({theme:e,depth:t,isForbiddenDropTarget:n,isOverlay:r})=>`
    margin-top: 0;
    margin-bottom: 0;
    padding-top: ${e.paddingSM}px;
    padding-bottom: ${e.paddingSM}px;
    margin-left: ${24*t}px;
    border-radius: ${e.borderRadius}px;
    padding-left: ${e.paddingSM}px;
    padding-right: ${e.paddingSM}px;
    margin-right: ${e.marginMD}px;
    transition: background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:hover:not(:has(input)) [aria-label="move"] {
      color: ${e.colorText};
    }

    /* Drop target styles - controlled via data attributes for performance */
    &[data-drop-target="true"] {
      background-color: ${e.colorPrimaryBg};
      box-shadow: inset 0 0 0 2px ${e.colorPrimary};
    }

    &[data-drop-target="true"][data-forbidden-drop="true"],
    &[data-drop-target="true"]${n?"":'[data-forbidden-drop="true"]'} {
      background-color: ${e.colorErrorBg};
      box-shadow: inset 0 0 0 2px ${e.colorError};
      cursor: not-allowed;
    }

    /* Also support prop-based forbidden styling for initial render */
    ${n?`
      &[data-drop-target="true"] {
        background-color: ${e.colorErrorBg};
        box-shadow: inset 0 0 0 2px ${e.colorError};
        cursor: not-allowed;
      }
    `:""}
  `}
`,eW=y.styled.span`
  ${({theme:e})=>`
    color: ${e.colorTextTertiary};
    display: inline-flex;
    align-items: center;
    transition: color 0.15s ease-in-out;
  `}
`,eG=y.styled.span`
  ${({theme:e})=>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 12px;
    height: 12px;
    cursor: pointer;
    color: ${e.colorTextSecondary};
    margin-left: auto;

    &:hover {
      color: ${e.colorText};
    }
  `}
`,eV=y.styled.span`
  ${({theme:e})=>`
    display: inline-flex;
    align-items: center;
    color: ${e.colorTextSecondary};
    margin-right: ${e.marginXS}px;
  `}
`,eX=y.styled.span`
  ${({theme:e})=>`
    margin-right: ${e.marginMD}px;
    font-weight: ${e.fontWeightStrong};
    cursor: pointer;
  `}
`,eJ=y.styled.div`
  ${({theme:e})=>`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 ${e.sizeUnit}px;
    margin-left: auto;
    cursor: grab;
    color: ${e.colorTextTertiary};

    &:hover {
      color: ${e.colorText};
    }

    &:active {
      cursor: grabbing;
    }
  `}
`,eZ=y.styled.div`
  ${({theme:e,depth:t,isOver:n,isForbidden:r})=>(0,b.AH)`
    margin: ${e.marginXS}px ${e.marginMD}px 0;
    margin-left: ${24*t+4}px;
    padding: ${e.paddingLG}px;
    border: 2px dashed
      ${n?r?e.colorError:e.colorPrimary:"transparent"};
    border-radius: ${e.borderRadius}px;
    background: ${n?r?e.colorErrorBg:e.colorPrimaryBg:"transparent"};
    text-align: center;
    transition: all 0.2s ease-in-out;
    cursor: ${n&&r?"not-allowed":"default"};
    opacity: ${n&&r?.7:1};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;function e0(e){let t=eS.GY,n=eS.GY+e.paddingSM+e.marginXS,r=1+2*e.marginSM;return{regularItem:t,folderHeader:n,separatorVisible:r,separatorTransparent:1+2*e.marginXS,emptyFolderBase:240,folderIndentation:24,itemIndentation:4}}let e1=y.styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  gap: ${({theme:e})=>e.paddingMD}px;
`,e2=y.styled.div`
  ${({theme:e})=>`
    position: sticky;
    top: -${e.margin}px; // offsets tabs component bottom margin
    z-index: 10;
    background: ${e.colorBgContainer};
    display: flex;
    flex-direction: column;
    gap: ${e.paddingLG}px;
  `}
`,e4=y.styled.div`
  width: 100%;

  .ant-input-prefix {
    color: ${({theme:e})=>e.colorIcon};
  }
`,e3=y.styled.div`
  ${({theme:e})=>`
    display: flex;
    gap: ${e.paddingSM}px;
  `}
`,e5=y.styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.paddingXS}px;
`,e6=y.styled.div`
  ${({theme:e})=>`
    align-self: flex-end;
    font-size: ${e.fontSizeSM}px;
    color: ${e.colorTextSecondary};
  `}
`,e8=y.styled.div`
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,e7=y.styled.div`
  position: relative;
  width: ${({width:e})=>e?`${e}px`:"100%"};
  will-change: transform;
`,e9=y.styled.div`
  ${({theme:e,width:t})=>`
    width: ${t?`${t}px`:"100%"};
    will-change: transform;
    background: ${e.colorBgContainer};
    border-radius: ${e.borderRadius}px;
    box-shadow: ${e.boxShadowSecondary};
    pointer-events: none;
    overflow: hidden;
    opacity: 0.95;
  `}
`,te=y.styled.div`
  ${({theme:e,variant:t,separatorType:n})=>{let r=e0(e),i="folder"===t?r.folderHeader:r.regularItem;return"visible"===n?i+=r.separatorVisible:"transparent"===n&&(i+=r.separatorTransparent),`
      min-height: ${i}px;
      display: flex;
      align-items: stretch;

      > * {
        flex: 1;
        min-width: 0;
      }
    `}}
`,tt=y.styled.div`
  ${({theme:e})=>`
    padding: ${e.paddingXS}px ${e.paddingMD}px;
    color: ${e.colorTextSecondary};
    font-size: ${e.fontSizeSM}px;
    text-align: center;
  `}
`,tn=y.styled.div`
  ${({stackIndex:e,totalItems:t})=>{var n;let r=null!=(n=[1,.8,.6][e])?n:.6;return(0,b.AH)`
      position: ${0===e?"relative":"absolute"};
      top: ${14*e}px;
      left: ${4*e}px;
      right: ${0===e?0:-(4*e)}px;
      z-index: ${t-e};
      opacity: ${r};
      pointer-events: none;
    `}}
`;function tr(){return(tr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ti(){return(ti=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let ta=(0,s.memo)(function({onSearch:e,onAddFolder:t,onSelectAll:n,onResetToDefault:r,allVisibleSelected:i,selectedColumnsCount:l,selectedMetricsCount:o,totalColumnsCount:d,totalMetricsCount:c}){let u=l+o,h=d+c,p=(0,s.useMemo)(()=>u>0?(0,a.FD)(a.FK,{children:[(0,C.tn)("%s out of %s column","%s out of %s columns",d,l,d),(0,a.Y)("br",{}),(0,C.tn)("%s out of %s metric","%s out of %s metrics",c,o,c)]}):(0,a.FD)(a.FK,{children:[(0,C.tn)("%s column","%s columns",d,d),(0,a.Y)("br",{}),(0,C.tn)("%s metric","%s metrics",c,c)]}),[u,l,o,d,c]),m=u>0?(0,C.t)("%s out of %s selected",u,h):(0,C.tn)("%s item","%s items",h,h);return(0,a.FD)(e2,{children:[(0,a.Y)(e4,{children:(0,a.Y)(H.Input,{placeholder:(0,C.t)("Search all metrics & columns"),onChange:e,allowClear:!0,prefix:(0,a.Y)(R.F.SearchOutlined,{})})}),(0,a.FD)(e5,{children:[(0,a.FD)(e3,{children:[(0,a.Y)(B.$n,{buttonStyle:"link",onClick:t,icon:(0,a.Y)(R.F.PlusOutlined,{}),children:(0,C.t)("Add folder")}),(0,a.Y)(B.$n,{buttonStyle:"link",onClick:n,icon:(0,a.Y)(R.F.CheckOutlined,{}),children:i?(0,C.t)("Deselect all"):(0,C.t)("Select all")}),(0,a.Y)(B.$n,{buttonStyle:"link",onClick:r,icon:(0,a.Y)(R.F.HistoryOutlined,{}),children:(0,C.t)("Reset all folders to default")})]}),(0,a.Y)(K.m,{title:p,children:(0,a.Y)(e6,{children:m})})]})]})});var tl=n(56030);let to=(0,s.memo)(function({show:e,onCancel:t,onConfirm:n}){return(0,a.Y)(tl.aF,{title:(0,C.t)("Reset to default folders?"),show:e,onHide:t,onHandledPrimaryAction:n,primaryButtonName:(0,C.t)("Reset"),primaryButtonStyle:"danger",children:(0,C.t)("This will reorganize all metrics and columns into default folders. Any custom folders will be removed.")})});var ts=n(74979),td=n(97020),tc=n(62312),tu=n(90809);function th(){return(th=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let tp=(0,C.t)("Name your folder and to edit it later, click on the folder name"),tm=(0,s.memo)(function({id:e,type:t,name:n,depth:r,isCollapsed:i=!1,isFolder:l=!1,isSelected:o=!1,isEditing:d=!1,onToggleCollapse:c,onSelect:u,onStartEdit:h,onFinishEdit:p,isDefaultFolder:m=!1,showEmptyState:f=!1,separatorType:g,isForbiddenDrop:y=!1,isDropTarget:v=!1,metric:x,column:S,isOverlay:w=!1}){let[Y,$]=(0,s.useState)(n),{attributes:_,listeners:F,setNodeRef:D,transform:E,transition:A,isDragging:I,isOver:T}=(0,ek.gl)({id:e,data:{type:t,isFolder:l},disabled:w}),{setNodeRef:M,isOver:z}=(0,ez.useDroppable)({id:`${e}-empty`,data:{type:t,isFolder:l,parentId:e},disabled:w}),k=w?{}:{transform:ts.CSS.Transform.toString(E),transition:A},O=(0,s.useMemo)(()=>t===ew.a.Metric&&x?x.verbose_name||x.metric_name||n:t===ew.a.Column&&S&&(S.verbose_name||S.column_name)||n,[t,x,S,n]),L=(0,s.useMemo)(()=>t===ew.a.Metric?"metric":t===ew.a.Column&&S?S.expression&&S.expression!==S.column_name?"expression":S.type_generic:void 0,[t,S]),U=!n||""===n.trim(),P={ref:D,style:k,depth:r,isDragging:I,isOver:T,isOverlay:w},q=(0,a.FD)(a.FK,{children:[l&&(0,a.Y)(eW,{css:e=>(0,b.AH)`
            margin-right: ${e.marginSM}px;
          `,children:(0,a.Y)(R.F.Move,{iconSize:"xl"})}),(u||w&&!l)&&(0,a.Y)(H.Checkbox,{checked:o,disabled:w,onClick:t=>{w||(t.stopPropagation(),null==u||u(e,!o,t.shiftKey))},css:e=>(0,b.AH)`
            margin-right: ${e.marginSM}px;
          `}),l&&(0,a.Y)(eV,{children:m?(0,a.Y)(R.F.FolderViewOutlined,{}):(0,a.Y)(R.F.FolderOutlined,{})}),(d||U)&&!m?(0,a.Y)(H.Input,{value:Y,placeholder:tp,onChange:e=>$(e.target.value),onKeyDown:t=>{"Enter"===t.key?(t.preventDefault(),null==p||p(e,Y)):"Escape"===t.key&&($(n),null==p||p(e,n))},onBlur:()=>{Y.trim()?null==p||p(e,Y):($(n),null==p||p(e,n))},autoFocus:!0,onClick:e=>e.stopPropagation(),css:e=>(0,b.AH)`
            padding: 0;
            padding-right: ${e.marginMD}px;
          `,variant:"borderless"}):(()=>{if(l){let t=e===eS.Lc&&m,r=e===eS.v3&&m,i=(0,a.Y)(eX,{onClick:t=>{!m&&h&&(t.stopPropagation(),h(e))},children:n});return t?(0,a.Y)(K.m,{title:(0,C.t)("This is a default columns folder. Its name cannot be changed or removed. It can stay empty but will only accept column items."),children:i}):r?(0,a.Y)(K.m,{title:(0,C.t)("This is a default metrics folder. Its name cannot be changed or removed. It can stay empty but will only accept metric items."),children:i}):i}return(0,a.FD)(tu.a2,th({},_,F,{css:{cursor:"grab","&:active":{cursor:"grabbing"}},children:[(0,a.FD)(tu.JU,{children:[void 0!==L&&(0,a.Y)(tc.P,{type:L}),O]}),(0,a.Y)(eJ,{children:(0,a.Y)(R.F.Drag,{iconSize:"xl"})})]}))})(),l&&c&&(0,a.Y)(eG,{onClick:t=>{t.stopPropagation(),c(e)},children:i?(0,a.Y)(R.F.RightOutlined,{}):(0,a.Y)(R.F.DownOutlined,{})})]}),j=!l&&g,{style:B}=P,N=function(e,t){if(null==e)return{};var n,r,i={},a=Object.getOwnPropertyNames(e);for(r=0;r<a.length;r++)!(t.indexOf(n=a[r])>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n]);return i}(P,["style"]);return(0,a.FD)(a.FK,{children:[(0,a.FD)("div",{ref:D,style:B,children:[l?(0,a.Y)(eQ,th({},N,_,F,{"data-folder-id":e,"data-drop-target":v?"true":void 0,isForbiddenDropTarget:y,css:{cursor:"grab","&:active":{cursor:"grabbing"}},children:q})):(0,a.Y)(eK,th({},N,{children:q})),j&&(0,a.Y)(eN,{variant:g})]}),l&&f&&!i&&(0,a.Y)(eZ,{ref:M,depth:r,isOver:z,isForbidden:y,children:(0,a.Y)(td.p,{title:m?(0,C.t)("This is the default folder"):(0,C.t)("This folder is currently empty"),description:m?(0,C.t)("It won't be removed even if empty. It won't be shown in chart editing view if empty."):(0,C.t)("If it stays empty, it won't be saved and will be removed from the list. To remove folders, move metrics and columns to other folders."),size:"small"})})]})}),tf=(0,s.memo)(function({dragOverlayItems:e,dragOverlayWidth:t,selectedItemIds:n,metricsMap:r,columnsMap:i,itemSeparatorInfo:l}){if(0===e.length)return null;let o=e[0];if(o.type===ew.a.Folder&&e.length>1){let s=e.slice(0,9),d=e.length-9,c=o.depth;return(0,a.FD)(e9,{width:null!=t?t:void 0,children:[s.map((e,t)=>{let o=e.type===ew.a.Folder,u=l.get(e.uuid),h=t===s.length-1&&0===d?void 0:u;return(0,a.Y)(te,{variant:o?"folder":"item",separatorType:h,children:(0,a.Y)(tm,{id:e.uuid,type:e.type,name:e.name,depth:e.depth-c,isFolder:o,isDefaultFolder:(0,eS.kq)(e.uuid),isOverlay:!0,isSelected:n.has(e.uuid),metric:r.get(e.uuid),column:i.get(e.uuid),separatorType:h})},e.uuid)}),d>0&&(0,a.Y)(tt,{children:(0,C.t)("... and %d more",d)})]})}return(0,a.Y)(e7,{width:null!=t?t:void 0,children:[...e].reverse().map((t,l)=>{let o=e.length-1-l;return(0,a.Y)(tn,{stackIndex:o,totalItems:e.length,children:(0,a.Y)(tm,{id:t.uuid,type:t.type,name:t.name,depth:0,isFolder:t.type===ew.a.Folder,isOverlay:!0,isSelected:n.has(t.uuid),metric:r.get(t.uuid),column:i.get(t.uuid)})},t.uuid)})})});var tg=n(5373);function ty(){return(ty=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let tb=(0,s.memo)(function({id:e,style:t,type:n,isFolder:r}){let{setNodeRef:i}=(0,ez.useDroppable)({id:e,data:{type:n,isFolder:r}});return(0,a.Y)("div",{ref:i,style:ty({},t,{visibility:"hidden"})})}),tv=(0,s.memo)(function({item:e,style:t,isFolder:n,isCollapsed:r,isSelected:i,isEditing:l,showEmptyState:o,separatorType:s,isForbiddenDrop:d,isDropTarget:c,metric:u,column:h,onToggleCollapse:p,onSelect:m,onStartEdit:f,onFinishEdit:g}){return(0,a.Y)("div",{style:t,children:(0,a.Y)(tm,{id:e.uuid,type:e.type,name:e.name,depth:e.depth,isFolder:n,isCollapsed:r,isSelected:i,isEditing:l,isDefaultFolder:(0,eS.kq)(e.uuid),showEmptyState:o,separatorType:s,isForbiddenDrop:d,isDropTarget:c,onToggleCollapse:p,onSelect:m,onStartEdit:f,onFinishEdit:g,metric:u,column:h})})}),tC=(0,s.memo)(function({index:e,style:t,data:n}){var r;let{flattenedItems:i,collapsedIds:l,selectedItemIds:o,editingFolderId:s,folderChildCounts:d,itemSeparatorInfo:c,visibleItemIds:u,searchTerm:h,metricsMap:p,columnsMap:m,activeId:f,draggedFolderChildIds:g,forbiddenDropFolderIds:y,currentDropTargetId:b,onToggleCollapse:v,onSelect:C,onStartEdit:x,onFinishEdit:S}=n,w=i[e];if(!w)return null;let Y=w.type===ew.a.Folder;if(!Y&&h&&!u.has(w.uuid))return null;if(f===w.uuid)return(0,a.Y)(tb,{id:w.uuid,style:t,type:w.type,isFolder:Y});if(g.has(w.uuid))return(0,a.Y)("div",{style:ty({},t,{visibility:"hidden"})});let $=Y&&null!=(r=d.get(w.uuid))?r:0,_=Y&&0===$,F=Y&&y.has(w.uuid),D=Y&&b===w.uuid;return(0,a.Y)(tv,{item:w,style:t,isFolder:Y,isCollapsed:l.has(w.uuid),isSelected:o.has(w.uuid),isEditing:s===w.uuid,showEmptyState:_,separatorType:c.get(w.uuid),isForbiddenDrop:F,isDropTarget:D,metric:p.get(w.uuid),column:m.get(w.uuid),onToggleCollapse:Y?v:void 0,onSelect:Y?void 0:C,onStartEdit:Y?x:void 0,onFinishEdit:Y?S:void 0},w.uuid)});function tx({width:e,height:t,flattenedItems:n,itemHeights:r,heightCache:i,collapsedIds:l,selectedItemIds:o,editingFolderId:d,folderChildCounts:c,itemSeparatorInfo:u,visibleItemIds:h,searchTerm:p,metricsMap:m,columnsMap:f,isDragging:g,activeId:y,draggedFolderChildIds:b,forbiddenDropFolderIds:v,currentDropTargetId:C,onToggleCollapse:x,onSelect:S,onStartEdit:w,onFinishEdit:Y}){let $=(0,s.useRef)(null),_=(0,s.useRef)(null);!function({listRef:e,containerRef:t,isDragging:n,listHeight:r}){let i=(0,s.useRef)({direction:null,speed:0,mouseY:0,rafId:null,lastTime:0,isScrolling:!1});(0,s.useEffect)(()=>{if(!n){let e=i.current;null!==e.rafId&&(cancelAnimationFrame(e.rafId),e.rafId=null),e.direction=null,e.speed=0;return}let a=i.current,l=n=>{let r=e.current,i=null==r?void 0:r._outerRef;if(!r||!i||!a.direction){let e=t.current;e&&a.isScrolling&&(e.style.pointerEvents="",a.isScrolling=!1),a.rafId=null;return}let o=t.current;o&&!a.isScrolling&&(o.style.pointerEvents="none",a.isScrolling=!0);let s=a.lastTime?(n-a.lastTime)/16:1;a.lastTime=n;let d=i.scrollTop,c=i.scrollHeight-i.clientHeight,u=a.speed*s,h=d;"up"===a.direction?h=Math.max(0,d-u):"down"===a.direction&&(h=Math.min(c,d+u)),Math.abs(h-d)>.5&&(i.scrollTop=h),a.rafId=requestAnimationFrame(l)},o=e=>{a.mouseY=e.clientY,(()=>{let e=t.current;if(!e)return;let n=e.getBoundingClientRect(),i=a.mouseY-n.top;if(i<80&&i>=0){a.direction="up",a.speed=8*(1+(1-i/80)*2);return}if(i>r-80&&i<=r){let e=r-i;a.direction="down",a.speed=8*(1+(1-e/80)*2);return}a.direction=null,a.speed=0})(),a.direction&&null===a.rafId&&(a.lastTime=0,a.rafId=requestAnimationFrame(l))};return document.addEventListener("mousemove",o,{passive:!0}),()=>{document.removeEventListener("mousemove",o),null!==a.rafId&&(cancelAnimationFrame(a.rafId),a.rafId=null);let e=t.current;e&&a.isScrolling&&(e.style.pointerEvents=""),a.direction=null,a.speed=0,a.lastTime=0,a.isScrolling=!1}},[n,e,t,r])}({listRef:$,containerRef:_,isDragging:g,listHeight:t}),(0,s.useEffect)(()=>{if(!g){var e;null==(e=$.current)||e.resetAfterIndex(0)}},[n,l,c,u,h,g]);let F=(0,s.useCallback)(e=>{let t=n[e];if(!t)return 0;let a=t.type===ew.a.Folder;if(!a&&p&&!h.has(t.uuid))return 0;let o=0;if(a){var s,d;o=r.folderHeader;let e=null!=(s=c.get(t.uuid))?s:0,n=l.has(t.uuid);0!==e||n||(o+=null!=(d=i.getHeight(t.uuid))?d:r.emptyFolderBase)}else o=r.regularItem;let m=u.get(t.uuid);return"visible"===m?o+=r.separatorVisible:"transparent"===m&&(o+=r.separatorTransparent),o},[n,r,i,l,c,u,h,p]),D=(0,s.useMemo)(()=>({flattenedItems:n,collapsedIds:l,selectedItemIds:o,editingFolderId:d,folderChildCounts:c,itemSeparatorInfo:u,visibleItemIds:h,searchTerm:p,metricsMap:m,columnsMap:f,activeId:y,draggedFolderChildIds:b,forbiddenDropFolderIds:v,currentDropTargetId:C,onToggleCollapse:x,onSelect:S,onStartEdit:w,onFinishEdit:Y}),[n,l,o,d,c,u,h,p,m,f,y,b,v,C,x,S,w,Y]),E=g?20:5;return(0,a.Y)("div",{ref:_,style:{width:e,height:t,position:"relative"},children:(0,a.Y)(tg._m,{ref:$,width:e,height:t,itemCount:n.length,itemSize:F,itemData:D,overscanCount:E,children:tC})})}function tS(){return(tS=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function tw({folders:e,metrics:t,columns:n,onChange:r}){let i,l,o,d,c,u,h,p,{addWarningToast:m}=(0,D.Yf)(),f=(i=(0,y.useTheme)(),(0,s.useMemo)(()=>e0(i),[i])),g=(l=(0,s.useRef)(new Map),o=(0,s.useRef)(0),d=(0,s.useCallback)(e=>l.current.get(e),[]),c=(0,s.useCallback)((e,t)=>{l.current.get(e)!==t&&(l.current.set(e,t),o.current+=1)},[]),u=(0,s.useCallback)(e=>l.current.has(e),[]),{getHeight:d,setHeight:c,hasHeight:u,clearCache:(0,s.useCallback)(()=>{l.current.size>0&&(l.current.clear(),o.current+=1)},[]),getVersion:(0,s.useCallback)(()=>o.current,[])}),[b,v]=(0,s.useState)(()=>((e,t,n)=>{let r,i,a;if(0===e.length)return eR(t,n);let l=(r=new Map(t.map(e=>[e.uuid,e])),i=new Map(n.map(e=>[e.uuid,e])),a=e=>e?e.map(e=>{if(e.type===ew.a.Folder&&"children"in e)return eq({},e,{children:a(e.children)});if(!("name"in e)||!e.name||!("type"in e)){let t=r.get(e.uuid);if(t)return{uuid:e.uuid,type:ew.a.Metric,name:t.metric_name||""};let n=i.get(e.uuid);if(n)return{uuid:e.uuid,type:ew.a.Column,name:n.column_name||""}}return e}):[],e.map(e=>eq({},e,{children:a(e.children)}))),o=l.some(e=>e.uuid===eS.v3),s=l.some(e=>e.uuid===eS.Lc),d=new Set,c=e=>{if(e.children)for(let t of e.children)d.add(t.uuid),t.type===ew.a.Folder&&"children"in t&&c(t)};l.forEach(c);let u=t.filter(e=>!d.has(e.uuid)).map(e=>({type:ew.a.Metric,uuid:e.uuid,name:e.metric_name||""})),h=n.filter(e=>!d.has(e.uuid)).map(e=>({type:ew.a.Column,uuid:e.uuid,name:e.column_name||""})),p=l.map(e=>e.uuid===eS.v3&&u.length>0?eq({},e,{children:[...e.children||[],...u]}):e.uuid===eS.Lc&&h.length>0?eq({},e,{children:[...e.children||[],...h]}):e);return o||p.push({uuid:eS.v3,type:ew.a.Folder,name:(0,C.t)("Metrics"),children:u}),s||p.push({uuid:eS.Lc,type:ew.a.Folder,name:(0,C.t)("Columns"),children:h}),p})(e,t,n));(0,s.useEffect)(()=>{let e=new Set;n.forEach(t=>{t.uuid&&e.add(t.uuid)}),t.forEach(t=>{t.uuid&&e.add(t.uuid)}),v(t=>eE(t,e))},[n,t]);let[x,S]=(0,s.useState)(new Set),w=(0,s.useRef)(null),[Y,$]=(0,s.useState)(""),[_,F]=(0,s.useState)(new Set),[E,A]=(0,s.useState)(null),[I,T]=(0,s.useState)(null),[M,z]=(0,s.useState)(!1),k=(0,ez.useSensors)((0,ez.useSensor)(ez.PointerSensor,ej)),O=(0,s.useRef)(null),L=(h=(0,s.useRef)(null),(0,s.useEffect)(()=>{O.current&&(h.current=function(e){let t=e.parentElement;for(;t&&t!==document.documentElement;){let e=window.getComputedStyle(t);if(e.transform&&"none"!==e.transform||"transform"===e.willChange||e.filter&&"none"!==e.filter||e.perspective&&"none"!==e.perspective)return t;t=t.parentElement}return null}(O.current))},[O]),p=(0,s.useCallback)(({transform:e})=>{if(!h.current)return e;let t=h.current.getBoundingClientRect();return ti({},e,{x:e.x-t.left,y:e.y-t.top})},[]),(0,s.useMemo)(()=>[p],[p])),U=(0,s.useMemo)(()=>e_(b),[b]),{visibleItemIds:P,searchExpandedFolderIds:q,foldersWithMatches:R}=(0,s.useMemo)(()=>{let e,r;if(!Y){let e=new Set;return t.forEach(t=>e.add(t.uuid)),n.forEach(t=>e.add(t.uuid)),{visibleItemIds:e,searchExpandedFolderIds:new Set,foldersWithMatches:new Set}}let i=[...t,...n],a=(e=Y.toLowerCase(),r=new Set,i.forEach(t=>{let n="metric_name"in t?t.metric_name:t.column_name,{verbose_name:i,expression:a}=t;((null==n?void 0:n.toLowerCase().includes(e))||(null==i?void 0:i.toLowerCase().includes(e))||(null==a?void 0:a.toLowerCase().includes(e)))&&r.add(t.uuid)}),r),l=new Set,o=new Set,s=Y.toLowerCase(),d=e=>{var t;return e.type===ew.a.Folder&&(null==(t=e.name)?void 0:t.toLowerCase().includes(s))},c=e=>{var t;return e.type===ew.a.Folder&&!!(d(e)||(null==(t=e.children)?void 0:t.some(e=>e.type===ew.a.Folder?c(e):a.has(e.uuid))))},u=(e,t)=>{"children"in e&&e.children&&e.children.forEach(e=>{e.type===ew.a.Folder?u(e,t):t.add(e.uuid)})},h=new Set(a);return b.forEach(e=>{if(e.type===ew.a.Folder){if(d(e)){l.add(e.uuid),o.add(e.uuid),u(e,h);let t=e=>{"children"in e&&e.children&&e.children.forEach(e=>{e.type===ew.a.Folder&&(l.add(e.uuid),o.add(e.uuid),t(e))})};t(e)}else if(c(e)){l.add(e.uuid),o.add(e.uuid);let t=e=>{"children"in e&&e.children&&e.children.forEach(e=>{e.type===ew.a.Folder&&c(e)&&(l.add(e.uuid),o.add(e.uuid),t(e))})};t(e)}}}),{visibleItemIds:h,searchExpandedFolderIds:l,foldersWithMatches:o}},[Y,t,n,b]),j=(0,s.useMemo)(()=>{let e=[];for(let{uuid:t,type:n,children:r}of U)n===ew.a.Folder&&(null==r?void 0:r.length)&&(Y?q.has(t)||e.push(t):_.has(t)&&e.push(t));return e},[U,_,Y,q]),H=(0,s.useCallback)(e=>{var t;let n,r=U;return Y&&R&&(r=U.filter(e=>e.type===ew.a.Folder?R.has(e.uuid):P.has(e.uuid))),t=r,n=new Set(null!=e?[e,...j]:j),t.filter(e=>{if(e.parentId&&n.has(e.parentId)){var t;return(null==(t=e.children)?void 0:t.length)&&n.add(e.uuid),!1}return!0})},[U,j,Y,R,P]),B=(0,s.useMemo)(()=>new Map(t.map(e=>[e.uuid,e])),[t]),K=(0,s.useMemo)(()=>new Map(n.map(e=>[e.uuid,e])),[n]),{isDragging:N,activeId:Q,draggedFolderChildIds:W,dragOverlayWidth:G,flattenedItems:V,dragOverlayItems:X,forbiddenDropFolderIds:J,currentDropTargetId:Z,fullItemsByUuid:ee,handleDragStart:et,handleDragMove:en,handleDragOver:er,handleDragEnd:ei,handleDragCancel:ea}=function({setItems:e,computeFlattenedItems:t,fullFlattenedItems:n,selectedItemIds:r,onChange:i,addWarningToast:a}){let[l,o]=(0,s.useState)(null),[d,c]=(0,s.useState)(null),[u,h]=(0,s.useState)(null),p=(0,s.useRef)(0),[m,f]=(0,s.useState)(null),[g,y]=(0,s.useState)(new Set),[b,v]=(0,s.useState)(new Set),x=(0,s.useRef)(null),S=(0,s.useMemo)(()=>t(l),[t,l]),w=(0,s.useMemo)(()=>l&&x.current?x.current:S,[l,S]),Y=(0,s.useMemo)(()=>0===b.size?w:w.filter(e=>!b.has(e.uuid)),[w,b]),$=(0,s.useMemo)(()=>{let e=new Map;return Y.forEach((t,n)=>{e.set(t.uuid,n)}),e},[Y]),_=(0,s.useMemo)(()=>{let e=new Map;return n.forEach(t=>{e.set(t.uuid,t)}),e},[n]),F=(0,s.useMemo)(()=>{let e=new Map;return n.forEach((t,n)=>{e.set(t.uuid,n)}),e},[n]),D=(0,s.useMemo)(()=>{let e=new Map;return n.forEach(t=>{if(t.parentId){var n;let r=null!=(n=e.get(t.parentId))?n:[];r.push(t),e.set(t.parentId,r)}}),e},[n]),E=(0,s.useCallback)((e,t)=>{let n=D.get(e);if(!n||0===n.length)return t;let r=t;for(let e of n)e.type===ew.a.Folder&&(r=Math.max(r=Math.max(r,e.depth),E(e.uuid,e.depth)));return r},[D]),A=(0,s.useCallback)((e,t)=>{e&&t?a((0,C.t)("Columns and metrics should be inside folders")):e?a((0,C.t)("Columns should be inside folders")):t&&a((0,C.t)("Metrics should be inside folders"))},[a]),I=(0,s.useCallback)(()=>{o(null),c(null),p.current=0,f(null),y(new Set),v(new Set),h(null),x.current=null},[]),T=(0,s.useCallback)(({delta:e})=>{if(p.current=e.x,l&&d){var t;if("string"==typeof d&&d.endsWith("-empty"))return void f(d.replace("-empty",""));let n=e$(Y,l,d,e.x,eS.Mh,$);f(null!=(t=null==n?void 0:n.parentId)?t:null)}},[l,d,Y,$]),M=(0,s.useCallback)(({over:e})=>{var t,n;if(c(null!=(t=null==e?void 0:e.id)?t:null),l&&e){if("string"==typeof e.id&&e.id.endsWith("-empty"))return void f(e.id.replace("-empty",""));let t=e$(Y,l,e.id,p.current,eS.Mh,$);f(null!=(n=null==t?void 0:t.parentId)?n:null)}else f(null)},[l,Y,$]),z=(0,s.useMemo)(()=>{if(!l||0===g.size)return[];let e=_.get(l);return(null==e?void 0:e.type)===ew.a.Folder&&b.size>0?w.filter(e=>e.uuid===l||b.has(e.uuid)):n.filter(e=>g.has(e.uuid)).slice(0,3)},[l,g,b,w,n,_]),k=(0,s.useMemo)(()=>{let e=new Set;if(0===g.size)return e;let t=new Set,r=!1,i=0;g.forEach(e=>{let n=_.get(e);if(n&&(t.add(n.type),n.type===ew.a.Folder&&(0,eS.kq)(n.uuid)&&(r=!0),n.type===ew.a.Folder)){let e=E(n.uuid,n.depth)-n.depth;i=Math.max(i,e)}});let a=t.has(ew.a.Folder);return n.forEach(n=>{if(n.type!==ew.a.Folder)return;let l=(0,eS.kq)(n.uuid);if(r&&!l)return void e.add(n.uuid);let o=n.uuid===eS.v3&&l,s=n.uuid===eS.Lc&&l;(o||s)&&a||o&&t.has(ew.a.Column)||s&&t.has(ew.a.Metric)?e.add(n.uuid):a&&n.depth+1+i>=eS.lr&&e.add(n.uuid)}),e},[g,n,_,E]);return{isDragging:null!==l,activeId:l,draggedItemIds:g,draggedFolderChildIds:b,dragOverlayWidth:u,flattenedItems:w,dragOverlayItems:z,forbiddenDropFolderIds:k,currentDropTargetId:m,fullItemsByUuid:_,handleDragStart:({active:e})=>{let n=t(null);x.current=n,o(e.id);let i=e.rect.current.initial;i&&h(i.width),r.has(e.id)?y(new Set(r)):y(new Set([e.id]));let a=n.findIndex(t=>t.uuid===e.id),l=n[a];if((null==l?void 0:l.type)===ew.a.Folder){let e=new Set;for(let t=a+1;t<n.length;t+=1)if(n[t].depth>l.depth)e.add(n[t].uuid);else break;v(e)}},handleDragMove:T,handleDragOver:M,handleDragEnd:({active:t,over:r})=>{var l,o,s,d,c;let u=Array.from(g),h=p.current;if(I(),0===u.length)return;if(!r){let e=!1,t=!1;for(let n of u){let r=_.get(n);r&&(r.type===ew.a.Column?e=!0:r.type===ew.a.Metric&&(t=!0))}A(e,t);return}let m=r.id,f=!1;if("string"==typeof m&&m.endsWith("-empty")&&(m=m.replace("-empty",""),f=!0,u.includes(m))||b.has(m))return;let y=null!=(l=F.get(t.id))?l:-1,v=null!=(o=F.get(m))?o:-1;if(-1===y||-1===v)return;let x=new Set(u),S=n.filter(e=>x.has(e.uuid)),w=e$(Y,t.id,m,h,eS.Mh,$);if(f){let e=n[v];w={depth:e.depth+1,maxDepth:e.depth+1,minDepth:e.depth+1,parentId:m}}let T=n[y];if(t.id===m&&(null!=(s=null==w?void 0:w.parentId)?s:null)===T.parentId)return;let M=new Set,z=n.filter(e=>e.type===ew.a.Folder&&!(0,eS.kq)(e.uuid)&&!x.has(e.uuid));for(let e of(z.sort((e,t)=>t.depth-e.depth),z)){let t=D.get(e.uuid);t&&t.length>0&&t.every(e=>x.has(e.uuid)||M.has(e.uuid))&&M.add(e.uuid)}let k=!1,O=M.size>0,L=!1,U=!1,P=!1;for(let e of S)e.type===ew.a.Folder?(O=!0,(0,eS.kq)(e.uuid)&&(L=!0)):(k=!0,e.type===ew.a.Column&&(U=!0),e.type===ew.a.Metric&&(P=!0));if(k&&(!w||!w.parentId))return void A(U,P);if(w&&w.parentId){let e=_.get(w.parentId);if(e&&(0,eS.kq)(e.uuid)){if(M.size>0)return void a((0,C.t)("Cannot nest folders in default folders"));let t=e.uuid===eS.v3,n=e.uuid===eS.Lc;for(let e of S){if(e.type===ew.a.Folder)return void a((0,C.t)("Cannot nest folders in default folders"));if(t&&e.type===ew.a.Column)return void a((0,C.t)("This folder only supports metrics"));if(n&&e.type===ew.a.Metric)return void a((0,C.t)("This folder only supports columns"))}}}if(L&&(null==w?void 0:w.parentId))return void a((0,C.t)("Default folders cannot be nested"));if(O&&w){for(let e of S)if(e.type===ew.a.Folder){let t=e.depth,n=E(e.uuid,t)-t;if(w.depth+n>=eS.lr)return void a((0,C.t)("Maximum folder nesting depth reached"))}for(let e of M){let t=_.get(e);if(t){let n=E(e,t.depth)-t.depth;if(w.depth+n>=eS.lr)return void a((0,C.t)("Maximum folder nesting depth reached"))}}}let q=n;if(w){let e=w.depth-T.depth,r=new Map,i=[];for(let e of M){let t=_.get(e);t&&(t.parentId&&M.has(t.parentId)||i.push(t))}let a=new Map;for(let e of i){let t=w.depth-e.depth;a.set(e.uuid,t),r.set(e.uuid,{depth:w.depth,parentId:w.parentId})}for(let t of M){if(r.has(t))continue;let n=_.get(t);if(!n)continue;let i=n;for(;i.parentId&&M.has(i.parentId)&&!a.has(i.parentId);)i=_.get(i.parentId);let l=i.parentId&&null!=(d=a.get(i.parentId))?d:e;a.set(t,l),r.set(t,{depth:n.depth+l,parentId:void 0})}S.forEach(n=>{if(n.parentId&&M.has(n.parentId)){var i;let t=null!=(i=a.get(n.parentId))?i:e;r.set(n.uuid,{depth:n.depth+t,parentId:void 0})}else n.uuid===t.id?r.set(n.uuid,{depth:w.depth,parentId:w.parentId}):r.set(n.uuid,{depth:n.depth+e,parentId:w.parentId})});let l=(e,t)=>{let n=D.get(e);if(n)for(let e of n)r.has(e.uuid)||(r.set(e.uuid,{depth:e.depth+t,parentId:void 0}),e.type===ew.a.Folder&&l(e.uuid,t))};for(let t of(S.forEach(t=>{t.type===ew.a.Folder&&l(t.uuid,e)}),M)){let n=null!=(c=a.get(t))?c:e;l(t,n)}q=n.map(e=>{let t=r.get(e.uuid);if(t){let n=void 0===t.parentId?e.parentId:t.parentId;return tr({},e,{depth:t.depth,parentId:n})}return e})}let R=new Set(u),j=e=>{let t=D.get(e);if(t)for(let e of t)R.has(e.uuid)||(R.add(e.uuid),e.type===ew.a.Folder&&j(e.uuid))};if(S.forEach(e=>{e.type===ew.a.Folder&&j(e.uuid)}),w)for(let e of M)R.add(e),j(e);let H=[];n.forEach((e,t)=>{R.has(e.uuid)&&H.push(t)});let B=H.map(e=>q[e]),K=new Set(H),N=q.filter((e,t)=>!K.has(t)),Q=0;if(w&&w.parentId){let e=N.findIndex(e=>e.uuid===w.parentId);if(-1!==e)if(f)Q=e+1;else{let t=N.findIndex(e=>e.uuid===m);Q=-1!==t?N[t].parentId===w.parentId?y<v?t+1:t:t+1:e+1}}else{let e=v;H.forEach(t=>{t<v&&(e-=1)}),Q=e}let W=[...N.slice(0,Q),...B,...N.slice(Q)];if(W.length!==n.length)return;let G=eF(W);e(G),i(eD(G))},handleDragCancel:()=>{I()}}}({setItems:v,computeFlattenedItems:H,fullFlattenedItems:U,selectedItemIds:x,onChange:r,addWarningToast:m}),el=(0,s.useCallback)(eT()(e=>{!Y&&e&&T(new Set(_)),Y&&!e&&I&&(F(I),T(null)),$(e)},300),[Y,_,I]),eo=(0,s.useMemo)(()=>{let e=Array.from(P).filter(e=>{let t=ee.get(e);return t&&t.type!==ew.a.Folder});return e.length>0&&e.every(e=>x.has(e))},[ee,P,x]),es=(0,s.useCallback)(()=>{let e=new Set(Array.from(P).filter(e=>{let t=ee.get(e);return t&&t.type!==ew.a.Folder}));if(eo)S(new Set);else{S(e);let r=new Map;for(let e of U)r.set(e.uuid,e.parentId);let i=new Set;for(let a of e){var t,n;let e=null!=(t=r.get(a))?t:null;for(;e;)i.add(e),e=null!=(n=r.get(e))?n:null}F(e=>{let t=new Set(e);for(let e of i)t.delete(e);return t})}},[P,ee,U,eo]),ed=(0,s.useCallback)(e=>{F(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},[]),ec=(0,s.useCallback)((e,t,n)=>{let r=w.current;t&&(w.current=e),S(i=>{let a=new Set(i);if(n&&t&&r){let t=V.filter(e=>e.type!==ew.a.Folder&&P.has(e.uuid)),n=t.findIndex(t=>t.uuid===e),i=t.findIndex(e=>e.uuid===r);if(-1!==n&&-1!==i){let e=Math.min(n,i),r=Math.max(n,i);for(let n=e;n<=r;n+=1)a.add(t[n].uuid)}}else t?a.add(e):a.delete(e);return a})},[V,P]),eu=(0,s.useCallback)(e=>{A(e)},[]),eh=(0,s.useCallback)((e,t)=>{t.trim()&&t!==e&&v(n=>{let i=eF(e_(n).map(n=>n.uuid===e?tS({},n,{name:t}):n));return r(eD(i)),i}),A(null)},[r]),ep=(0,s.useMemo)(()=>{let e=new Set,t=new Map;return V.forEach(e=>{let n=e.parentId;t.has(n)||t.set(n,[]),t.get(n).push(e.uuid)}),t.forEach(t=>{t.length>0&&e.add(t[t.length-1])}),e},[V]),em=(0,s.useMemo)(()=>{let e=new Map;return V.forEach((t,n)=>{if(t.type===ew.a.Folder||!ep.has(t.uuid))return;let r=V[n+1];if(r){if(r.type===ew.a.Folder&&0===r.depth)return void e.set(t.uuid,"visible");t.depth>1&&r.depth<t.depth&&r.type!==ew.a.Folder&&e.set(t.uuid,"transparent")}}),e},[V,ep]),ef=(0,s.useMemo)(()=>W.size>0?V.filter(e=>!W.has(e.uuid)).map(({uuid:e})=>e):V.map(({uuid:e})=>e),[V,W]),eg=(0,s.useMemo)(()=>Q?e=>{var t;let n=(0,ez.rectIntersection)(e);if(0===n.length||(null==(t=n[0])?void 0:t.id)!==Q)return n;let r=(0,ez.pointerWithin)(e),i=r.find(e=>e.id!==Q);if(i)return[i,...n];if(r.length>0)return n;let a=(0,ez.closestCenter)(e).find(e=>e.id!==Q);return a?[a,...n]:n}:ez.rectIntersection,[Q]),ey=(0,s.useMemo)(()=>{let e=0;for(let t of x)B.has(t)&&(e+=1);return e},[x,B]),eb=(0,s.useMemo)(()=>{let e=new Map;for(let t of V)t.type===ew.a.Folder&&e.set(t.uuid,0);for(let t of V)t.parentId&&e.has(t.parentId)&&e.set(t.parentId,e.get(t.parentId)+1);return e},[V]);return(0,a.FD)(e1,{children:[(0,a.Y)(to,{show:M,onCancel:()=>{z(!1)},onConfirm:()=>{let e=eR(t,n);v(e),S(new Set),A(null),z(!1),r(eD(e))}}),(0,a.Y)(ta,{onSearch:e=>{el(e.target.value)},onAddFolder:()=>{let e={uuid:eP(),type:ew.a.Folder,name:"",children:[]},t=[e,...b];v(t),A(e.uuid),r(eD(t))},onSelectAll:es,onResetToDefault:()=>{z(!0)},allVisibleSelected:eo,selectedMetricsCount:ey,selectedColumnsCount:x.size-ey,totalMetricsCount:t.length,totalColumnsCount:n.length}),(0,a.Y)(e8,{ref:O,children:(0,a.FD)(ez.DndContext,{sensors:k,collisionDetection:eg,measuring:eH,autoScroll:eB,onDragStart:et,onDragMove:en,onDragOver:er,onDragEnd:ei,onDragCancel:ea,children:[(0,a.Y)(ek.gB,{items:ef,strategy:ek._G,children:(0,a.Y)(eM.Ay,{children:({height:e,width:t})=>(0,a.Y)(tx,{width:t,height:e,flattenedItems:V,itemHeights:f,heightCache:g,collapsedIds:_,selectedItemIds:x,editingFolderId:E,folderChildCounts:eb,itemSeparatorInfo:em,visibleItemIds:P,searchTerm:Y,metricsMap:B,columnsMap:K,isDragging:N,activeId:Q,draggedFolderChildIds:W,forbiddenDropFolderIds:J,currentDropTargetId:Z,onToggleCollapse:ed,onSelect:ec,onStartEdit:eu,onFinishEdit:eh})})}),(0,a.Y)(ez.DragOverlay,{modifiers:L,children:(0,a.Y)(tf,{dragOverlayItems:X,dragOverlayWidth:G,selectedItemIds:x,metricsMap:B,columnsMap:K,itemSeparatorInfo:em})})]})})]})}function tY(e,t,n,r,i,a,l){try{var o=e[a](l),s=o.value}catch(e){n(e);return}o.done?t(s):Promise.resolve(s).then(r,i)}function t$(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function l(e){tY(a,r,i,l,o,"next",e)}function o(e){tY(a,r,i,l,o,"throw",e)}l(void 0)})}}function t_(){return(t_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let tF=(0,u.a)(),tD=y.styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;

  .change-warning {
    margin: 16px 10px 0;
    color: ${({theme:e})=>e.colorWarning};
  }

  .change-warning .bold {
    font-weight: ${({theme:e})=>e.fontWeightStrong};
  }

  .form-group.has-feedback > .help-block {
    margin-top: 8px;
  }

  .form-group.form-group-md {
    margin-bottom: 8px;
  }
`,tE=y.styled.div`
  align-items: center;
  display: flex;

  svg {
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,tA=(0,y.styled)(x.Ay)`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;

  .ant-tabs-content-holder {
    flex: 1;
    min-height: 0;
    overflow: auto;
    padding-top: ${({theme:e})=>e.paddingMD}px;
  }

  .ant-tabs-content {
    height: 100%;
  }

  .ant-tabs-tabpane-active {
    height: 100%;
  }
`,tI=(0,y.styled)(A.E)`
  .ant-badge-count {
    line-height: ${({theme:e})=>4*e.sizeUnit}px;
    height: ${({theme:e})=>4*e.sizeUnit}px;
    margin-left: ${({theme:e})=>e.sizeUnit}px;
  }
`,tT=y.styled.div`
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  display: flex;
  align-items: center;
  padding: ${({theme:e})=>e.paddingSM}px 0;
  a {
    padding: 0 10px;
  }
`,tM=y.styled.div`
  text-align: right;
  ${({theme:e})=>`margin-bottom: ${2*e.sizeUnit}px`}
`,tz=y.styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,tk=y.styled.div`
  .table > tbody > tr > td {
    vertical-align: middle;
  }

  .ant-tag {
    margin-top: ${({theme:e})=>e.sizeUnit}px;
  }
`,tO=y.styled.div`
  ${({theme:e})=>(0,b.AH)`
    margin-bottom: ${4*e.sizeUnit}px;
  `}
`,tL=y.styled.h4`
  ${({theme:e})=>(0,b.AH)`
    margin: 0 0 ${2*e.sizeUnit}px 0;
    font-size: ${e.fontSizeLG}px;
    font-weight: ${e.fontWeightStrong};
    color: ${e.colorText};
  `}
`,tU=y.styled.div`
  ${({theme:e})=>(0,b.AH)`
    display: flex;
    align-items: center;
    gap: ${e.sizeUnit}px;
    font-size: ${e.fontSizeSM}px;
    color: ${e.colorTextLabel};
  `}
`,tP=y.styled.span`
  ${({theme:e})=>`
    margin-top: ${3*e.sizeUnit}px;
    margin-left: ${3*e.sizeUnit}px;
    button>span>:first-of-type {
      margin-right: 0;
    }
  `}
`,tq=(e,t)=>(0,a.Y)(Y.A,{value:e,onChange:t}),tR=[{value:"STRING",label:(0,C.t)("STRING")},{value:"NUMERIC",label:(0,C.t)("NUMERIC")},{value:"DATETIME",label:(0,C.t)("DATETIME")},{value:"BOOLEAN",label:(0,C.t)("BOOLEAN")}],tj="SOURCE",tH=[{key:"physical",label:(0,C.t)("Physical (table or view)")},{key:"virtual",label:(0,C.t)("Virtual (SQL)")}],tB={};function tK({title:e,collection:t,count:n}){return(0,a.FD)("div",{css:{display:"flex",alignItems:"center"},"data-test":`collection-tab-${e}`,children:[e," ",(0,a.Y)(tI,{count:null!=n?n:t?t.length:0,showZero:!0})]})}function tN({children:e}){return(0,a.Y)(I.Z,{padded:!0,style:{backgroundColor:y.themeObject.theme.colorBgLayout},children:e})}function tQ({columns:e,datasource:t,onColumnsChange:n,onDatasourceChange:r,editableColumnName:i=!1,showExpression:l=!1,allowAddItem:o=!1,allowEditDataType:s=!1,itemGenerator:d=()=>({column_name:(0,C.t)("<new column>"),filterable:!0,groupby:!0}),columnLabelTooltips:c,filterTerm:u,filterFields:p}){return(0,a.Y)(ey,{tableColumns:(0,h.G7)(h.TO.EnableAdvancedDataTypes)?["column_name","advanced_data_type","type","is_dttm","filterable","groupby"]:["column_name","type","is_dttm","filterable","groupby"],sortColumns:(0,h.G7)(h.TO.EnableAdvancedDataTypes)?["column_name","advanced_data_type","type","is_dttm","filterable","groupby"]:["column_name","type","is_dttm","filterable","groupby"],allowDeletes:!0,allowAddItem:o,itemGenerator:d,collection:e,columnLabelTooltips:c,filterTerm:u,filterFields:p,stickyHeader:!0,expandFieldset:(0,a.Y)(tN,{children:(0,a.FD)(eh,{compact:!0,children:[l&&(0,a.Y)(ec,{fieldKey:"expression",label:(0,C.t)("SQL expression"),control:(0,a.Y)(_.A,{language:"sql",offerEditInModal:!1,maxLines:25,debounceDelay:300})}),(0,a.Y)(ec,{fieldKey:"verbose_name",label:(0,C.t)("Label"),control:(0,a.Y)($.A,{controlId:"verbose_name",placeholder:(0,C.t)("Label")})}),(0,a.Y)(ec,{fieldKey:"description",label:(0,C.t)("Description"),control:(0,a.Y)($.A,{controlId:"description",placeholder:(0,C.t)("Description")})}),s&&(0,a.Y)(ec,{fieldKey:"type",label:(0,C.t)("Data type"),control:(0,a.Y)(T.A,{ariaLabel:(0,C.t)("Data type"),header:(0,a.Y)(M.l,{children:(0,C.t)("Data type")}),options:tR,name:"type",allowNewOptions:!0,allowClear:!0})}),(0,h.G7)(h.TO.EnableAdvancedDataTypes)?(0,a.Y)(ec,{fieldKey:"advanced_data_type",label:(0,C.t)("Advanced data type"),control:(0,a.Y)($.A,{controlId:"advanced_data_type",placeholder:(0,C.t)("Advanced Data type")})}):(0,a.Y)(a.FK,{}),(0,a.Y)(ec,{fieldKey:"python_date_format",label:(0,C.t)("Datetime format"),description:(0,a.FD)("div",{children:[(0,C.t)("The pattern of timestamp format. For strings use "),(0,a.Y)(z.o.Link,{href:"https://docs.python.org/2/library/datetime.html#strftime-strptime-behavior",children:(0,C.t)("Python datetime string pattern")}),(0,C.t)(" expression which needs to adhere to the "),(0,a.Y)(z.o.Link,{href:"https://en.wikipedia.org/wiki/ISO_8601",children:(0,C.t)("ISO 8601")}),(0,C.t)(` standard to ensure that the lexicographical ordering
                      coincides with the chronological ordering. If the
                      timestamp format does not adhere to the ISO 8601 standard
                      you will need to define an expression and type for
                      transforming the string into a date or timestamp. Note
                      currently time zones are not supported. If time is stored
                      in epoch format, put \`epoch_s\` or \`epoch_ms\`. If no pattern
                      is specified we fall back to using the optional defaults on a per
                      database/column name level via the extra parameter.`)]}),control:(0,a.Y)($.A,{controlId:"python_date_format",placeholder:"%Y-%m-%d"})}),(0,a.Y)(ec,{fieldKey:"certified_by",label:(0,C.t)("Certified By"),description:(0,C.t)("Person or group that has certified this metric"),control:(0,a.Y)($.A,{controlId:"certified",placeholder:(0,C.t)("Certified by")})}),(0,a.Y)(ec,{fieldKey:"certification_details",label:(0,C.t)("Certification details"),description:(0,C.t)("Details of the certification"),control:(0,a.Y)($.A,{controlId:"certificationDetails",placeholder:(0,C.t)("Certification details")})})]})}),columnLabels:(0,h.G7)(h.TO.EnableAdvancedDataTypes)?{column_name:(0,C.t)("Column"),advanced_data_type:(0,C.t)("Advanced data type"),type:(0,C.t)("Data type"),groupby:(0,C.t)("Is dimension"),is_dttm:(0,C.t)("Is temporal"),filterable:(0,C.t)("Is filterable")}:{column_name:(0,C.t)("Column"),type:(0,C.t)("Data type"),groupby:(0,C.t)("Is dimension"),is_dttm:(0,C.t)("Is temporal"),filterable:(0,C.t)("Is filterable")},onChange:n,itemRenderers:(0,h.G7)(h.TO.EnableAdvancedDataTypes)?{column_name:(e,t,n,r)=>i?(0,a.FD)(tz,{children:[r.is_certified&&(0,a.Y)(k.T,{certifiedBy:r.certified_by,details:r.certification_details}),(0,a.Y)(O.z,{canEdit:!0,title:e,onSaveTitle:t})]}):(0,a.FD)(tz,{children:[r.is_certified&&(0,a.Y)(k.T,{certifiedBy:r.certified_by,details:r.certification_details}),e]}),type:e=>e?(0,a.Y)(L.JU,{children:e}):null,advanced_data_type:e=>(0,a.Y)(L.JU,{children:e}),is_dttm:tq,filterable:tq,groupby:tq}:{column_name:(e,t,n,r)=>i?(0,a.FD)(tz,{children:[r.is_certified&&(0,a.Y)(k.T,{certifiedBy:r.certified_by,details:r.certification_details}),(0,a.Y)($.A,{value:e,onChange:t})]}):(0,a.FD)(tz,{children:[r.is_certified&&(0,a.Y)(k.T,{certifiedBy:r.certified_by,details:r.certification_details}),e]}),type:e=>e?(0,a.Y)(L.JU,{children:e}):null,is_dttm:tq,filterable:tq,groupby:tq}})}function tW({label:e,formElement:t}){return(0,a.FD)("div",{children:[(0,a.Y)("div",{children:(0,a.Y)("strong",{children:e})}),(0,a.Y)("div",{children:t})]})}function tG({datasource:e,onChange:t}){let n=(0,s.useCallback)((e="",t,n)=>{let r=o().encode({filter:e,page:t,page_size:n});return p.A.get({endpoint:`/api/v1/dataset/related/owners?q=${r}`}).then(e=>({data:e.json.result.filter(e=>e.extra.active).map(e=>{var t,n,r;return{value:e.value,label:(0,et.I6)({name:e.text,email:null==(n=e.extra)?void 0:n.email}),[et.N6]:e.text,[et.rb]:null!=(t=null==(r=e.extra)?void 0:r.email)?t:""}}),totalCount:e.json.count}))},[]);return(0,a.Y)(U.A,{ariaLabel:(0,C.t)("Select owners"),mode:"multiple",name:"owners",value:e.owners,options:n,onChange:e=>t(e),header:(0,a.Y)(M.l,{children:(0,C.t)("Owners")}),allowClear:!0,optionFilterProps:et.un})}tH.forEach(e=>{tB[e.key]=e});let tV=null!=(i=tF.get("sqleditor.extension.resultTable"))?i:Q.TR,tX=(0,d.Ng)(e=>({database:null==e?void 0:e.database}),e=>({runQuery:t=>e(function(e){var n;return(n=function*(){try{e(V(!0));let n=yield G(t);e({type:"SET_QUERY_RESULT",payload:n})}catch(t){e({type:"SET_QUERY_ERROR",payload:t.message})}finally{e(V(!1))}},function(){var e=this,t=arguments;return new Promise(function(r,i){var a=n.apply(e,t);function l(e){W(a,r,i,l,o,"next",e)}function o(e){W(a,r,i,l,o,"throw",e)}l(void 0)})})()}),resetQuery:()=>e({type:"RESET_DATABASE_STATE"}),formatQuery:(t,n)=>e(function(e){return p.A.post({endpoint:"/api/v1/sqllab/format_sql/",body:JSON.stringify({sql:t}),headers:{"Content-Type":"application/json"},signal:null==n?void 0:n.signal}).then(t=>(e({type:"SET_QUERY",payload:t.json.result}),t))})}));class tJ extends s.PureComponent{onChange(){var e;let{datasourceType:t,datasource:n}=this.state,r=t===tB.physical.key?"":n.sql,i=[...this.state.databaseColumns,...this.state.calculatedColumns],a=new Set;for(let e of i)e.uuid&&a.add(e.uuid);for(let t of null!=(e=n.metrics)?e:[])t.uuid&&a.add(t.uuid);let l=eE(this.state.folders,a),o=t_({},this.state.datasource,{sql:r,columns:i,folders:l});null==this.props.onChange||this.props.onChange.call(this.props,o,this.state.errors)}onChangeEditMode(){null==this.props.setIsEditing||this.props.setIsEditing.call(this.props,!this.state.isEditMode),this.setState(e=>({isEditMode:!e.isEditMode}))}onDatasourceChange(e,t=this.validateAndChange){this.setState({datasource:e},t)}onDatasourcePropChange(e,t){if(void 0===t)return;let n=t_({},this.state.datasource,{[e]:t});this.setState(n=>({datasource:t_({},n.datasource,{[e]:t})}),()=>"table_name"===e?this.onDatasourceChange(n,this.tableChangeAndSyncMetadata):this.onDatasourceChange(n,this.validateAndChange))}onDatasourceTypeChange(e){this.setState({datasourceType:e},this.onChange)}handleFoldersChange(e){let t=eA(e);this.setState({folders:e,folderCount:t},()=>{this.onDatasourceChange(t_({},this.state.datasource,{folders:e}))})}setColumns(e){this.setState(e,this.validateAndChange)}validateAndChange(){this.validate(this.onChange)}onQueryRun(){return t$(function*(){var e,t;let n=null==(e=this.state.datasource.database)?void 0:e.id,{sql:r}=this.state.datasource;n&&r&&this.props.runQuery({client_id:null==(t=this.props.database)?void 0:t.clientId,database_id:n,runAsync:!1,catalog:this.state.datasource.catalog,schema:this.state.datasource.schema,sql:r,tmp_table_name:"",select_as_cta:!1,ctas_method:"TABLE",queryLimit:25,expand_data:!0})}).call(this)}onQueryFormat(){return t$(function*(){let{datasource:e}=this.state;if(!e.sql||!this.state.isEditMode)return;this.abortControllers.formatQuery&&this.abortControllers.formatQuery.abort(),this.abortControllers.formatQuery=new AbortController;let{signal:t}=this.abortControllers.formatQuery;try{let n=yield this.props.formatQuery(e.sql,{signal:t});this.onDatasourcePropChange("sql",n.json.result),this.props.addSuccessToast((0,C.t)("SQL was formatted"))}catch(n){if("AbortError"===n.name)return;let{error:e,statusText:t}=yield(0,m.h4)(n);this.props.addDangerToast(e||t||(0,C.t)("An error occurred while formatting SQL"))}finally{this.abortControllers.formatQuery=null}}).call(this)}getSQLLabUrl(){var e,t,n,r,i;let a=new URLSearchParams({dbid:String(null!=(e=null==(i=this.state.datasource.database)?void 0:i.id)?e:""),sql:null!=(t=this.state.datasource.sql)?t:"",name:null!=(n=this.state.datasource.datasource_name)?n:"",schema:null!=(r=this.state.datasource.schema)?r:"",autorun:"true",isDataset:"true"});return(0,ee.G)(`/sqllab/?${a.toString()}`)}openOnSqlLab(){window.open(this.getSQLLabUrl(),"_blank","noopener,noreferrer")}tableChangeAndSyncMetadata(){this.validate(()=>{this.syncMetadata(),this.onChange()})}formatSql(){return t$(function*(){let{datasource:e}=this.state;if(!e.sql)return;this.abortControllers.formatSql&&this.abortControllers.formatSql.abort(),this.abortControllers.formatSql=new AbortController;let{signal:t}=this.abortControllers.formatSql;try{let n=yield p.A.post({endpoint:"/api/v1/sql/format",body:JSON.stringify({sql:e.sql}),headers:{"Content-Type":"application/json"},signal:t});this.onDatasourcePropChange("sql",n.json.result),this.props.addSuccessToast((0,C.t)("SQL was formatted"))}catch(n){if("AbortError"===n.name)return;let{error:e,statusText:t}=yield(0,m.h4)(n);this.props.addDangerToast(e||t||(0,C.t)("An error occurred while formatting SQL"))}finally{this.abortControllers.formatSql=null}}).call(this)}syncMetadata(){return t$(function*(){let{datasource:e}=this.state;this.abortControllers.syncMetadata&&this.abortControllers.syncMetadata.abort(),this.abortControllers.syncMetadata=new AbortController;let{signal:t}=this.abortControllers.syncMetadata;this.setState({metadataLoading:!0});try{var n,r,i;let a,l,s,d=yield(n=function*(){var n,r;let i={datasource_type:e.type||e.datasource_type,database_name:(null==(n=e.database)?void 0:n.database_name)||(null==(r=e.database)?void 0:r.name),catalog_name:e.catalog,schema_name:e.schema,table_name:e.table_name,normalize_columns:e.normalize_columns,always_filter_main_dttm:e.always_filter_main_dttm};Object.entries(i).forEach(([e,t])=>{void 0===t&&(i[e]=null)});let a=`/datasource/external_metadata_by_name/?q=${o().encode_uri(i)}`,{json:l}=yield p.A.get({endpoint:a,signal:t});return l},function(){var e=this,t=arguments;return new Promise(function(r,i){var a=n.apply(e,t);function l(e){el(a,r,i,l,o,"next",e)}function o(e){el(a,r,i,l,o,"throw",e)}l(void 0)})})(),c=(r=e.columns,i=this.props.addSuccessToast,a=d.map(e=>e.column_name),l=r.reduce((e,t)=>(e[t.column_name]=t,e),{}),s={added:[],modified:[],removed:r.filter(e=>!(e.expression||a.includes(e.column_name))).map(e=>e.column_name),finalColumns:[]},d.forEach(e=>{let t=l[e.column_name];t?t.type!==e.type||t.is_dttm!==e.is_dttm?(s.finalColumns.push(eo({},t,{type:e.type,is_dttm:t.is_dttm||e.is_dttm})),s.modified.push(e.column_name)):s.finalColumns.push(t):(s.finalColumns.push({id:(0,er.Ak)(),column_name:e.column_name,type:e.type,groupby:!0,filterable:!0,is_dttm:e.is_dttm}),s.added.push(e.column_name))}),r.filter(e=>e.expression).forEach(e=>{s.finalColumns.push(e)}),s.modified.length&&i((0,C.tn)("Modified 1 column in the virtual dataset","Modified %s columns in the virtual dataset",s.modified.length,s.modified.length)),s.removed.length&&i((0,C.tn)("Removed 1 column from the virtual dataset","Removed %s columns from the virtual dataset",s.removed.length,s.removed.length)),s.added.length&&i((0,C.tn)("Added 1 new column to the virtual dataset","Added %s new columns to the virtual dataset",s.added.length,s.added.length)),s);this.setColumns({databaseColumns:c.finalColumns.filter(e=>!e.expression)}),void 0!==e.id&&(0,Z.SM)(e.id),this.props.addSuccessToast((0,C.t)("Metadata has been synced")),this.setState({metadataLoading:!1})}catch(n){if("AbortError"===n.name){this.isComponentMounted&&this.setState({metadataLoading:!1});return}let{error:e,statusText:t}=yield(0,m.h4)(n);this.props.addDangerToast(e||t||(0,C.t)("An error has occurred")),this.setState({metadataLoading:!1})}finally{this.abortControllers.syncMetadata=null}}).call(this)}fetchUsageData(e=1,t=25,n="changed_on_delta_humanized",r="desc"){return t$(function*(){let{datasource:i}=this.state;this.abortControllers.fetchUsageData&&this.abortControllers.fetchUsageData.abort(),this.abortControllers.fetchUsageData=new AbortController;let{signal:a}=this.abortControllers.fetchUsageData;try{let l=o().encode({columns:["slice_name","url","certified_by","certification_details","description","owners.first_name","owners.last_name","owners.id","changed_on_delta_humanized","changed_on","changed_by.first_name","changed_by.last_name","changed_by.id","dashboards.id","dashboards.dashboard_title","dashboards.url"],filters:[{col:"datasource_id",opr:"eq",value:i.id}],order_column:n,order_direction:r,page:e-1,page_size:t}),{json:s={}}=yield p.A.get({endpoint:`/api/v1/chart/?q=${l}`,signal:a}),d=(null==s?void 0:s.result)||[],c=(null==s?void 0:s.ids)||[],u=d.map((e,t)=>t_({},e,{id:c[t]}));return!a.aborted&&this.isComponentMounted&&this.setState({usageCharts:u,usageChartsCount:(null==s?void 0:s.count)||0}),{charts:u,count:(null==s?void 0:s.count)||0,ids:c}}catch(n){if("AbortError"===n.name)throw n;let{error:e,statusText:t}=yield(0,m.h4)(n);return this.props.addDangerToast(e||t||(0,C.t)("An error occurred while fetching usage data")),this.setState({usageCharts:[],usageChartsCount:0}),{charts:[],count:0,ids:[]}}finally{this.abortControllers.fetchUsageData=null}}).call(this)}findDuplicates(e,t){let n={},r=[];return e.forEach(e=>{let i=t(e);i in n?r.push(i):n[i]=null}),r}validate(e){var t,n,r,i;let a,l=[],{datasource:o}=this.state;a=this.findDuplicates(o.columns,e=>e.column_name),l=l.concat(a.map(e=>(0,C.t)("Column name [%s] is duplicated",e))),a=this.findDuplicates(null!=(t=o.metrics)?t:[],e=>e.metric_name),l=l.concat(a.map(e=>(0,C.t)("Metric name [%s] is duplicated",e)));let s=this.state.calculatedColumns.filter(e=>!e.expression&&!e.json);l=l.concat(s.map(e=>(0,C.t)("Calculated column [%s] requires an expression",e.column_name)));try{null==(r=this.state.datasource.metrics)||r.forEach(e=>{var t;return(null==(t=e.currency)?void 0:t.symbol)&&"AUTO"!==e.currency.symbol&&new Intl.NumberFormat("en-US",{style:"currency",currency:e.currency.symbol})})}catch(e){l=l.concat([(0,C.t)("Invalid currency code in saved metrics")])}if((null==(n=this.state.folders)?void 0:n.length)>0){let e,t,n,r,a,o=(i=this.state.folders,e=[],t=[],n=e=>{e.forEach(e=>{var r;(null==(r=e.name)?void 0:r.trim())&&t.push(e.name.trim().toLowerCase()),e.children&&"folder"===e.type&&n(e.children.filter(e=>"folder"===e.type))})},r=t=>{t.forEach(t=>{var n;let i=t.children&&t.children.length>0,a=!(null==(n=t.name)?void 0:n.trim());i&&a&&e.push((0,C.t)("Folder with content must have a name")),t.uuid===eS.v3&&t.children&&t.children.some(e=>"column"===e.type)&&e.push((0,C.t)("Metrics folder can only contain metric items")),t.uuid===eS.Lc&&t.children&&t.children.some(e=>"metric"===e.type)&&e.push((0,C.t)("Columns folder can only contain column items")),t.children&&"folder"===t.type&&r(t.children.filter(e=>"folder"===e.type))})},n(i),a=new Map,t.forEach(e=>{a.set(e,(a.get(e)||0)+1)}),a.forEach((t,n)=>{t>1&&e.push((0,C.t)("Duplicate folder name: %s",n))}),r(i),{isValid:0===e.length,errors:e,warnings:[]});l=l.concat(o.errors)}this.setState({errors:l},e)}handleTabSelect(e){this.setState({activeTabKey:e})}sortMetrics(e){return e.sort(({id:e},{id:t})=>(null!=t?t:0)-(null!=e?e:0))}renderDefaultColumnSettings(){var e,t,n;let{datasource:r,databaseColumns:i,calculatedColumns:l}=this.state,{theme:o}=this.props,s=[...i,...l],d=s.filter(e=>e.is_dttm).map(e=>({value:e.column_name,label:e.verbose_name||e.column_name})),c=s.filter(e=>e.type_generic===f.GenericDataType.String||e.expression&&null==e.type_generic).map(e=>({value:e.column_name,label:e.verbose_name||e.column_name}));return(0,a.FD)(tO,{"data-test":"default-column-settings",children:[(0,a.Y)(tL,{children:(0,C.t)("Default Column Settings")}),(0,a.FD)(P.s,{vertical:!0,gap:(null!=(e=null==o?void 0:o.sizeUnit)?e:4)*3,children:[(0,a.FD)(P.s,{vertical:!0,gap:null!=(t=null==o?void 0:o.sizeUnit)?t:4,children:[(0,a.FD)(tU,{children:[(0,a.Y)("span",{children:(0,C.t)("Default datetime column")}),(0,a.Y)(q.I,{tooltip:(0,C.t)("Sets the default temporal column for this dataset. Automatically selected as the time column when building charts that require a time dimension and used in dashboard level time filters.")})]}),(0,a.Y)(T.A,{ariaLabel:(0,C.t)("Default datetime column"),options:d,value:r.main_dttm_col,onChange:e=>this.onDatasourceChange(t_({},r,{main_dttm_col:e})),placeholder:(0,C.t)("Select datetime column"),allowClear:!0,"data-test":"default-datetime-column-select"})]}),(0,a.FD)(P.s,{vertical:!0,gap:null!=(n=null==o?void 0:o.sizeUnit)?n:4,children:[(0,a.FD)(tU,{children:[(0,a.Y)("span",{children:(0,C.t)("Currency code column")}),(0,a.Y)(q.I,{tooltip:(0,C.t)("Select the column containing currency codes such as USD, EUR, GBP, etc. Used when building charts when 'Auto-detect' currency formatting is enabled. If this column is not set or if a chart metric contains multiple currencies, charts will fall back to neutral numeric formatting.")})]}),(0,a.Y)(T.A,{ariaLabel:(0,C.t)("Currency code column"),options:c,value:r.currency_code_column,onChange:e=>this.onDatasourceChange(t_({},r,{currency_code_column:e})),placeholder:(0,C.t)("Select currency code column"),allowClear:!0,"data-test":"currency-code-column-select"})]})]})]})}renderSettingsFieldset(){let{datasource:e}=this.state;return(0,a.FD)(eh,{title:(0,C.t)("Basic"),item:e,onChange:this.onDatasourceChange,children:[(0,a.Y)(ec,{fieldKey:"description",label:(0,C.t)("Description"),control:(0,a.Y)(_.A,{language:"markdown",offerEditInModal:!1,resize:"vertical"})}),(0,a.Y)(ec,{fieldKey:"default_endpoint",label:(0,C.t)("Default URL"),description:(0,a.FD)(a.FK,{children:[(0,C.t)("Default URL to redirect to when accessing from the dataset list page. Accepts relative URLs such as")," ",(0,a.FD)(z.o.Text,{code:!0,children:["/superset/dashboard/","{id}","/"]})]}),control:(0,a.Y)($.A,{controlId:"default_endpoint"})}),(0,a.Y)(ec,{inline:!0,fieldKey:"filter_select_enabled",label:(0,C.t)("Autocomplete filters"),description:(0,C.t)("Whether to populate autocomplete filters options"),control:(0,a.Y)(Y.A,{})}),this.state.isSqla&&(0,a.Y)(ec,{fieldKey:"fetch_values_predicate",label:(0,C.t)("Autocomplete query predicate"),description:(0,C.t)('When using "Autocomplete filters", this can be used to improve performance of the query fetching the values. Use this option to apply a predicate (WHERE clause) to the query selecting the distinct values from the table. Typically the intent would be to limit the scan by applying a relative time filter on a partitioned or indexed time-related field.'),control:(0,a.Y)(_.A,{language:"sql",controlId:"fetch_values_predicate",minLines:5,resize:"vertical"})}),this.state.isSqla&&(0,a.Y)(ec,{fieldKey:"extra",label:(0,C.t)("Extra"),description:(0,C.t)('Extra data to specify table metadata. Currently supports metadata of the format: `{ "certification": { "certified_by": "Data Platform Team", "details": "This table is the source of truth." }, "warning_markdown": "This is a warning." }`.'),control:(0,a.Y)(_.A,{controlId:"extra",language:"json",offerEditInModal:!1,resize:"vertical"})}),(0,a.Y)(tG,{datasource:e,onChange:t=>{this.onDatasourceChange(t_({},e,{owners:t}))}})]})}renderAdvancedFieldset(){let{datasource:e}=this.state;return(0,a.FD)(eh,{title:(0,C.t)("Advanced"),item:e,onChange:this.onDatasourceChange,children:[(0,a.Y)(ec,{fieldKey:"cache_timeout",label:(0,C.t)("Cache timeout"),description:(0,C.t)("The duration of time in seconds before the cache is invalidated. Set to -1 to bypass the cache."),control:(0,a.Y)($.A,{controlId:"cache_timeout"})}),(0,a.Y)(ec,{fieldKey:"offset",label:(0,C.t)("Hours offset"),control:(0,a.Y)($.A,{controlId:"offset"}),description:(0,C.t)("The number of hours, negative or positive, to shift the time column. This can be used to move UTC time to local time.")}),this.state.isSqla&&(0,a.Y)(ec,{fieldKey:"template_params",label:(0,C.t)("Template parameters"),description:(0,C.t)("A set of parameters that become available in the query using Jinja templating syntax"),control:(0,a.Y)($.A,{controlId:"template_params"})}),(0,a.Y)(ec,{inline:!0,fieldKey:"normalize_columns",label:(0,C.t)("Normalize column names"),description:(0,C.t)("Allow column names to be changed to case insensitive format, if supported (e.g. Oracle, Snowflake)."),control:(0,a.Y)(Y.A,{})}),(0,a.Y)(ec,{inline:!0,fieldKey:"always_filter_main_dttm",label:(0,C.t)("Always filter main datetime column"),description:(0,C.t)("When the secondary temporal columns are filtered, apply the same filter to the main datetime column."),control:(0,a.Y)(Y.A,{})})]})}renderSpatialTab(){let{datasource:e}=this.state,{spatials:t,all_cols:n}=e;return{key:"SPATIAL",label:(0,a.Y)(tK,{collection:t,title:(0,C.t)("Spatial")}),children:(0,a.Y)(ey,{tableColumns:["name","config"],sortColumns:["name"],onChange:this.onDatasourcePropChange.bind(this,"spatials"),itemGenerator:()=>({name:(0,C.t)("<new spatial>"),type:(0,C.t)("<no type>"),config:null}),collection:null!=t?t:[],allowDeletes:!0,itemRenderers:{name:(e,t)=>(0,a.Y)(O.z,{canEdit:!0,title:e,onSaveTitle:t}),config:(e,t)=>(0,a.Y)(F.A,{value:e,onChange:t,choices:null==n?void 0:n.map(e=>[e,e])})}})}}renderOpenInSqlLabLink(e=!1){return(0,a.Y)("a",{href:this.getSQLLabUrl(),target:"_blank",rel:"noopener noreferrer",css:t=>(0,b.AH)`
          color: ${e?t.colorErrorText:t.colorText};
          font-size: ${t.fontSizeSM}px;
          text-decoration: underline;
        `,children:(0,C.t)("Open in SQL lab")})}renderSourceFieldset(){var e,t,n,r,i,l,o,s,d,u,h,p,m,f,g,y,v,x,S,Y,F,D,E;let{datasource:A}=this.state;return(0,a.FD)("div",{children:[(0,a.FD)(tT,{children:[(0,a.Y)("span",{css:e=>(0,b.AH)`
              color: ${e.colorTextTertiary};
            `,role:"button",tabIndex:0,onClick:this.onChangeEditMode,children:this.state.isEditMode?(0,a.Y)(R.F.UnlockOutlined,{iconSize:"xl",css:e=>(0,b.AH)`
                  margin: auto ${e.sizeUnit}px auto 0;
                `}):(0,a.Y)(R.F.LockOutlined,{iconSize:"xl",css:e=>({margin:`auto ${e.sizeUnit}px auto 0`})})}),!this.state.isEditMode&&(0,a.Y)("div",{children:(0,C.t)("Click the lock to make changes.")}),this.state.isEditMode&&(0,a.Y)("div",{children:(0,C.t)("Click the lock to prevent further changes.")})]}),(0,a.Y)("div",{css:e=>(0,b.AH)`
            margin-top: ${3*e.sizeUnit}px;
            display: flex;
            gap: ${4*e.sizeUnit}px;
          `,children:tH.map(e=>(0,a.Y)(c.s,{value:e.key,onChange:this.onDatasourceTypeChange.bind(this,e.key),checked:this.state.datasourceType===e.key,disabled:!this.state.isEditMode,children:e.label},e.key))}),(0,a.Y)(j.c,{}),(0,a.FD)(eh,{item:A,onChange:this.onDatasourceChange,compact:!0,children:[this.state.datasourceType===tB.virtual.key&&(0,a.Y)("div",{children:this.state.isSqla&&(0,a.FD)(a.FK,{children:[(0,a.FD)(H.Col,{xs:24,md:12,children:[(0,a.Y)(ec,{fieldKey:"databaseSelector",label:(0,C.t)("Virtual"),control:(0,a.Y)("div",{css:{marginTop:8},children:(0,a.Y)(en.R,{db:(null==A?void 0:A.database)?{id:A.database.id,database_name:null!=(e=null!=(t=A.database.database_name)?t:A.database.name)?e:"",backend:A.database.backend}:null,catalog:A.catalog,schema:A.schema,onCatalogChange:e=>this.state.isEditMode&&this.onDatasourcePropChange("catalog",e),onSchemaChange:e=>this.state.isEditMode&&this.onDatasourcePropChange("schema",e),onDbChange:e=>this.state.isEditMode&&this.onDatasourcePropChange("database",e),formMode:!1,handleError:this.props.addDangerToast,readOnly:!this.state.isEditMode})})}),(0,a.Y)("div",{css:{width:"calc(100% - 34px)",marginTop:-16},children:(0,a.Y)(ec,{fieldKey:"table_name",label:(0,C.t)("Name"),control:(0,a.Y)($.A,{controlId:"table_name",onChange:e=>{this.onDatasourcePropChange("table_name",e)},placeholder:(0,C.t)("Dataset name"),disabled:!this.state.isEditMode})})})]}),(0,a.Y)(ec,{fieldKey:"sql",label:(0,C.t)("SQL"),description:(0,C.t)("When specifying SQL, the datasource acts as a view. Superset will use this statement as a subquery while grouping and filtering on the generated parent queries.If changes are made to your SQL query, columns in your dataset will be synced when saving the dataset."),control:(null==(s=this.props.database)?void 0:s.isLoading)?(0,a.FD)(a.FK,{children:[this.renderSqlEditorOverlay(),(0,a.Y)(_.A,{hotkeys:[{name:"formatQuery",key:"ctrl+shift+f",descr:(0,C.t)("Format SQL query"),func:()=>{this.onQueryFormat()}}],language:"sql",offerEditInModal:!1,minLines:10,maxLines:1/0,readOnly:!this.state.isEditMode,resize:"both"})]}):(0,a.Y)(_.A,{css:e=>(0,b.AH)`
                            margin-top: ${3*e.sizeUnit}px;
                          `,hotkeys:[{name:"formatQuery",key:"ctrl+shift+f",descr:(0,C.t)("Format SQL query"),func:()=>{this.onQueryFormat()}}],language:"sql",offerEditInModal:!1,minLines:10,maxLines:1/0,readOnly:!this.state.isEditMode,resize:"both"}),additionalControl:(0,a.FD)("div",{css:(0,b.AH)`
                          position: absolute;
                          right: 0;
                          top: 0;
                          z-index: 2;
                          display: flex;
                        `,children:[(0,a.Y)(B.$n,{disabled:null==(d=this.props.database)?void 0:d.isLoading,tooltip:(0,C.t)("Open SQL Lab in a new tab"),buttonStyle:"secondary",onClick:()=>{this.openOnSqlLab()},icon:(0,a.Y)(R.F.ExportOutlined,{iconSize:"s"})}),(0,a.Y)(B.$n,{disabled:null==(u=this.props.database)?void 0:u.isLoading,tooltip:(0,C.t)("Run query"),buttonStyle:"primary",onClick:()=>{this.onQueryRun()},icon:(0,a.Y)(R.F.CaretRightFilled,{iconSize:"s"})})]})}),(null==(h=this.props.database)?void 0:h.queryResult)&&(0,a.FD)(a.FK,{children:[(0,a.FD)("div",{css:e=>(0,b.AH)`
                          margin-bottom: ${e.sizeUnit}px;
                        `,children:[(0,a.Y)("span",{css:e=>(0,b.AH)`
                            color: ${e.colorText};
                            font-size: ${e.fontSizeSM}px;
                          `,children:(0,C.t)("In this view you can preview the first 25 rows. ")}),this.renderOpenInSqlLabLink(),(0,a.Y)("span",{css:e=>(0,b.AH)`
                            color: ${e.colorText};
                            font-size: ${e.fontSizeSM}px;
                          `,children:(0,C.t)(" to see details.")})]}),(0,a.Y)(tV,{data:null!=(n=null==(m=this.props.database)||null==(p=m.queryResult)?void 0:p.data)?n:[],queryId:null!=(r=null==(y=this.props.database)||null==(g=y.queryResult)||null==(f=g.query)?void 0:f.id)?r:"",orderedColumnKeys:null!=(i=null==(S=this.props.database)||null==(x=S.queryResult)||null==(v=x.columns)?void 0:v.map(e=>e.column_name))?i:[],expandedColumns:null==(D=this.props.database)||null==(F=D.queryResult)||null==(Y=F.expanded_columns)?void 0:Y.map(e=>e.column_name),height:300,allowHTML:!0})]}),(null==(E=this.props.database)?void 0:E.error)&&this.renderSqlErrorMessage()]})}),this.state.datasourceType===tB.physical.key&&(0,a.Y)(H.Col,{xs:24,md:12,children:this.state.isSqla&&(0,a.Y)(ec,{fieldKey:"tableSelector",label:(0,C.t)("Physical"),control:(0,a.Y)("div",{css:{marginTop:8},children:(0,a.Y)(w.Ay,{clearable:!1,database:A.database?{id:A.database.id,database_name:null!=(l=null!=(o=A.database.database_name)?o:A.database.name)?l:"",backend:A.database.backend}:null,handleError:this.props.addDangerToast,catalog:A.catalog,schema:A.schema,tableValue:A.table_name,onCatalogChange:this.state.isEditMode?e=>this.onDatasourcePropChange("catalog",e):void 0,onSchemaChange:this.state.isEditMode?e=>this.onDatasourcePropChange("schema",e):void 0,onDbChange:this.state.isEditMode?e=>this.onDatasourcePropChange("database",e):void 0,onTableSelectChange:this.state.isEditMode?e=>this.onDatasourcePropChange("table_name",e):void 0,readOnly:!this.state.isEditMode})}),description:(0,C.t)("The pointer to a physical table (or view). Keep in mind that the chart is associated to this Superset logical table, and this logical table points the physical table referenced here.")})})]})]})}renderErrors(){return this.state.errors.length>0?(0,a.Y)(g.F,{css:e=>({marginBottom:4*e.sizeUnit}),type:"error",message:(0,a.Y)(a.FK,{children:this.state.errors.map(e=>(0,a.Y)("div",{children:e},e))})}):null}renderMetricCollection(){let{datasource:e,metricSearchTerm:t}=this.state,{metrics:n}=e,r=(null==n?void 0:n.length)?this.sortMetrics(n):[];return(0,a.FD)("div",{children:[(0,a.Y)(H.Input.Search,{placeholder:(0,C.t)("Search metrics by key or label"),value:t,onChange:e=>this.setState({metricSearchTerm:e.target.value}),style:{marginBottom:16,width:300},allowClear:!0}),(0,a.Y)(ey,{tableColumns:["metric_name","verbose_name","expression"],sortColumns:["metric_name","verbose_name","expression"],filterTerm:t,filterFields:["metric_name","verbose_name"],columnLabels:{metric_name:(0,C.t)("Metric Key"),verbose_name:(0,C.t)("Label"),expression:(0,C.t)("SQL expression")},columnLabelTooltips:{metric_name:(0,C.t)("This field is used as a unique identifier to attach the metric to charts. It is also used as the alias in the SQL query.")},pagination:{pageSize:25,showSizeChanger:!0,pageSizeOptions:[10,25,50,100]},expandFieldset:(0,a.Y)(tN,{children:(0,a.FD)(eh,{compact:!0,children:[(0,a.Y)(ec,{fieldKey:"expression",label:(0,C.t)("SQL expression"),control:(0,a.Y)(_.A,{language:"sql",offerEditInModal:!1,minLines:3,maxLines:25,debounceDelay:300})}),(0,a.Y)(ec,{fieldKey:"description",label:(0,C.t)("Description"),control:(0,a.Y)($.A,{controlId:"description",placeholder:(0,C.t)("Description")})}),(0,a.Y)(ec,{fieldKey:"d3format",label:(0,C.t)("D3 format"),control:(0,a.Y)($.A,{controlId:"d3format",placeholder:"%y/%m/%d"})}),(0,a.Y)(ec,{fieldKey:"currency",label:(0,C.t)("Metric currency"),control:(0,a.Y)(E.A,{onChange:()=>{},currencySelectOverrideProps:{placeholder:(0,C.t)("Select or type currency symbol")},symbolSelectAdditionalStyles:(0,b.AH)`
                        max-width: 30%;
                      `})}),(0,a.Y)(ec,{label:(0,C.t)("Certified by"),fieldKey:"certified_by",description:(0,C.t)("Person or group that has certified this metric"),control:(0,a.Y)($.A,{controlId:"certified_by",placeholder:(0,C.t)("Certified by")})}),(0,a.Y)(ec,{label:(0,C.t)("Certification details"),fieldKey:"certification_details",description:(0,C.t)("Details of the certification"),control:(0,a.Y)($.A,{controlId:"certification_details",placeholder:(0,C.t)("Certification details")})}),(0,a.Y)(ec,{label:(0,C.t)("Warning"),fieldKey:"warning_markdown",description:(0,C.t)("Optional warning about use of this metric"),control:(0,a.Y)(_.A,{controlId:"warning_markdown",language:"markdown",offerEditInModal:!1,resize:"vertical"})})]})}),collection:r,allowAddItem:!0,onChange:this.onDatasourcePropChange.bind(this,"metrics"),itemGenerator:()=>({metric_name:(0,C.t)("<new metric>"),verbose_name:"",expression:""}),itemCellProps:{expression:()=>({style:{maxWidth:"240px",overflow:"hidden"}})},itemRenderers:{metric_name:(e,t,n,r)=>(0,a.FD)(tE,{children:[r.is_certified&&(0,a.Y)(k.T,{certifiedBy:r.certified_by,details:r.certification_details}),r.warning_markdown&&(0,a.Y)(S.A,{warningMarkdown:r.warning_markdown}),(0,a.Y)(O.z,{canEdit:!0,title:e,onSaveTitle:t,maxWidth:300})]}),verbose_name:(e,t)=>(0,a.Y)($.A,{value:e,onChange:t}),expression:e=>(0,a.Y)(K.m,{title:(0,C.t)("Expand row to edit"),children:(0,a.Y)(z.o.Text,{code:!0,ellipsis:!0,css:(0,b.AH)`
                    cursor: default;
                  `,children:e})}),description:(e,t,n)=>(0,a.Y)(tW,{label:n,formElement:(0,a.Y)($.A,{value:e,onChange:t})}),d3format:(e,t,n)=>(0,a.Y)(tW,{label:n,formElement:(0,a.Y)($.A,{value:e,onChange:t})})},allowDeletes:!0,stickyHeader:!0})]})}render(){var e;let{datasource:t,activeTabKey:n}=this.state,{metrics:r}=t,i=(null==r?void 0:r.length)?this.sortMetrics(r):[];return(0,a.FD)(tD,{"data-test":"datasource-editor",children:[this.renderErrors(),(0,a.Y)(g.F,{css:e=>({marginBottom:4*e.sizeUnit}),type:"warning",message:(0,a.FD)(a.FK,{children:[" ",(0,a.FD)("strong",{children:[(0,C.t)("Be careful.")," "]}),(0,C.t)("Changing these settings will affect all charts using this dataset, including charts owned by other people.")]})}),(0,a.Y)(tA,{id:"table-tabs","data-test":"edit-dataset-tabs",onChange:this.handleTabSelect,defaultActiveKey:n,items:[{key:tj,label:(0,C.t)("Source"),children:this.renderSourceFieldset()},{key:"METRICS",label:(0,a.Y)(tK,{collection:i,title:(0,C.t)("Metrics")}),children:this.renderMetricCollection()},{key:"COLUMNS",label:(0,a.Y)(tK,{collection:this.state.databaseColumns,title:(0,C.t)("Columns")}),children:(0,a.FD)(tk,{children:[this.renderDefaultColumnSettings(),(0,a.Y)(tM,{children:(0,a.Y)(tP,{children:(0,a.FD)(B.$n,{buttonSize:"small",buttonStyle:"tertiary",onClick:this.syncMetadata,className:"sync-from-source",disabled:this.state.isEditMode,children:[(0,a.Y)(R.F.DatabaseOutlined,{iconSize:"m"}),(0,C.t)("Sync columns from source")]})})}),(0,a.Y)(H.Input.Search,{placeholder:(0,C.t)("Search columns by name"),value:this.state.columnSearchTerm,onChange:e=>this.setState({columnSearchTerm:e.target.value}),style:{marginBottom:16,width:300},allowClear:!0}),(0,a.Y)(tQ,{className:"columns-table",columns:this.state.databaseColumns,filterTerm:this.state.columnSearchTerm,filterFields:["column_name"],datasource:t,onColumnsChange:e=>this.setColumns({databaseColumns:e}),onDatasourceChange:this.onDatasourceChange}),this.state.metadataLoading&&(0,a.Y)(N.R,{})]})},{key:"CALCULATED_COLUMNS",label:(0,a.Y)(tK,{collection:this.state.calculatedColumns,title:(0,C.t)("Calculated columns")}),children:(0,a.FD)(tk,{children:[this.renderDefaultColumnSettings(),(0,a.Y)(H.Input.Search,{placeholder:(0,C.t)("Search calculated columns by name"),value:this.state.calculatedColumnSearchTerm,onChange:e=>this.setState({calculatedColumnSearchTerm:e.target.value}),style:{marginBottom:16,width:300},allowClear:!0}),(0,a.Y)(tQ,{columns:this.state.calculatedColumns,filterTerm:this.state.calculatedColumnSearchTerm,filterFields:["column_name"],onColumnsChange:e=>this.setColumns({calculatedColumns:e}),columnLabelTooltips:{column_name:(0,C.t)("This field is used as a unique identifier to attach the calculated dimension to charts. It is also used as the alias in the SQL query.")},onDatasourceChange:this.onDatasourceChange,datasource:t,editableColumnName:!0,showExpression:!0,allowAddItem:!0,allowEditDataType:!0,itemGenerator:()=>({column_name:(0,C.t)("<new column>"),filterable:!0,groupby:!0,expression:(0,C.t)("<enter SQL expression here>"),expanded:!0})})]})},{key:"USAGE",label:(0,a.Y)(tK,{collection:{length:this.state.usageChartsCount},title:(0,C.t)("Usage")}),children:(0,a.Y)(tk,{children:(0,a.Y)(ex,{datasourceId:null!=(e=t.id)?e:0,charts:this.state.usageCharts,totalCount:this.state.usageChartsCount,onFetchCharts:this.fetchUsageData,addDangerToast:this.props.addDangerToast})})},...(0,h.G7)(h.TO.DatasetFolders)?[{key:"FOLDERS",label:(0,a.Y)(tK,{count:this.state.folderCount,title:(0,C.t)("Folders")}),children:(0,a.Y)(tw,{folders:this.state.folders,metrics:i,columns:[...this.state.databaseColumns,...this.state.calculatedColumns],onChange:this.handleFoldersChange})}]:[],{key:"SETTINGS",label:(0,C.t)("Settings"),children:(0,a.Y)("div",{style:{overflowX:"hidden"},children:(0,a.FD)(H.Row,{gutter:16,children:[(0,a.Y)(H.Col,{xs:24,md:12,children:(0,a.Y)(tN,{children:this.renderSettingsFieldset()})}),(0,a.Y)(H.Col,{xs:24,md:12,children:(0,a.Y)(tN,{children:this.renderAdvancedFieldset()})})]})})}]})]})}componentDidUpdate(e){if(this.props.datasource!==e.datasource){let e=this.props.datasource.columns.filter(e=>!!e.expression),t=this.state.calculatedColumns;if(e.length===t.length){let n=[],r=new Set;t.forEach(t=>{let i=t.id||t.column_name,a=e.find(e=>(e.id||e.column_name)===i);a&&(n.push(a),r.add(i))}),e.forEach(e=>{let t=e.id||e.column_name;r.has(t)||n.push(e)}),this.setState({calculatedColumns:n,databaseColumns:this.props.datasource.columns.filter(e=>!e.expression)})}}}componentDidMount(){this.isComponentMounted=!0,J().bind("ctrl+shift+f",e=>(e.preventDefault(),this.state.isEditMode&&this.onQueryFormat(),!1)),this.fetchUsageData().catch(e=>{if((null==e?void 0:e.name)!=="AbortError")throw e})}componentWillUnmount(){this.isComponentMounted=!1,Object.values(this.abortControllers).forEach(e=>{e&&e.abort()}),J().unbind("ctrl+shift+f"),this.props.resetQuery()}constructor(e){var t;super(e),this.renderSqlEditorOverlay=()=>(0,a.Y)("div",{css:e=>(0,b.AH)`
        position: absolute;
        background: ${e.colorBgLayout};
        align-items: center;
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
      `,children:(0,a.FD)("div",{children:[(0,a.Y)(N.R,{position:"inline-centered"}),(0,a.Y)("span",{css:e=>(0,b.AH)`
            display: block;
            margin: ${4*e.sizeUnit}px auto;
            width: fit-content;
            color: ${e.colorText};
          `,children:(0,C.t)("We are working on your query")})]})}),this.renderSqlErrorMessage=()=>{var e;return(0,a.FD)("span",{css:e=>(0,b.AH)`
        font-size: ${e.fontSizeSM}px;
        color: ${e.colorErrorText};
      `,children:[(null==(e=this.props.database)?void 0:e.error)&&(0,C.t)("Error executing query. "),this.renderOpenInSqlLabLink(!0),(0,C.t)(" to check for details.")]})},this.state={datasource:t_({},e.datasource,{owners:e.datasource.owners.map(e=>{var t;let n=e.label||`${e.first_name} ${e.last_name}`;return{value:e.value||e.id,label:(0,et.I6)({name:"string"==typeof n?n:"",email:e.email}),[et.N6]:"string"==typeof n?n:"",[et.rb]:null!=(t=e.email)?t:""}}),metrics:null==(t=e.datasource.metrics)?void 0:t.map(e=>{let{certified_by:t,certification_details:n}=e,{certification:{details:r,certified_by:i}={},warning_markdown:a}=JSON.parse(e.extra||"{}")||{};return t_({},e,{certification_details:n||r,warning_markdown:a||"",certified_by:i||t})})}),errors:[],isSqla:"table"===e.datasource.datasource_type||"table"===e.datasource.type,isEditMode:!1,databaseColumns:e.datasource.columns.filter(e=>!e.expression),calculatedColumns:e.datasource.columns.filter(e=>!!e.expression),folders:e.datasource.folders||[],folderCount:(()=>{let t=e.datasource.folders||[];return eA(t)+(t.some(e=>(0,eS.kq)(e.uuid))?0:eS.Et)})(),metadataLoading:!1,activeTabKey:tj,datasourceType:e.datasource.sql?tB.virtual.key:tB.physical.key,usageCharts:[],usageChartsCount:0,metricSearchTerm:"",columnSearchTerm:"",calculatedColumnSearchTerm:""},this.isComponentMounted=!1,this.abortControllers={formatQuery:null,formatSql:null,syncMetadata:null,fetchUsageData:null},this.onChange=this.onChange.bind(this),this.onChangeEditMode=this.onChangeEditMode.bind(this),this.onDatasourcePropChange=this.onDatasourcePropChange.bind(this),this.onDatasourceChange=this.onDatasourceChange.bind(this),this.tableChangeAndSyncMetadata=this.tableChangeAndSyncMetadata.bind(this),this.syncMetadata=this.syncMetadata.bind(this),this.setColumns=this.setColumns.bind(this),this.validateAndChange=this.validateAndChange.bind(this),this.handleTabSelect=this.handleTabSelect.bind(this),this.formatSql=this.formatSql.bind(this),this.fetchUsageData=this.fetchUsageData.bind(this),this.handleFoldersChange=this.handleFoldersChange.bind(this)}}tJ.defaultProps={onChange:()=>{},setIsEditing:()=>{}};let tZ=(0,v.b)(tJ),t0=(0,D.Ay)(tX(tZ))},37350(e,t,n){n.d(t,{Ay:()=>v,cs:()=>b});var r=n(2445),i=n(24002),a=n(27124),l=n(85614),o=n(68292),s=n(48158),d=n(14121),c=n(60685),u=n(38955),h=n(41947),p=n(17402),m=n(7070),f=n(8251);let g=l.styled.div`
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
`,y=l.styled.span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  svg,
  small {
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,b=({table:e})=>{let{value:t,type:n,extra:i}=e;return(0,r.FD)(y,{title:t,children:["view"===n?(0,r.Y)(c.F.FunctionOutlined,{iconSize:"m"}):"materialized_view"===n?(0,r.Y)(c.F.ProfileOutlined,{iconSize:"m"}):(0,r.Y)(c.F.TableOutlined,{iconSize:"m"}),(null==i?void 0:i.certification)&&(0,r.Y)(s.T,{certifiedBy:i.certification.certified_by,details:i.certification.details,size:"l"}),(null==i?void 0:i.warning_markdown)&&(0,r.Y)(p.A,{warningMarkdown:i.warning_markdown,size:"l",marginRight:4}),t]})},v=({database:e,emptyState:t,formMode:n=!1,getDbList:l,handleError:s,isDatabaseSelectEnabled:c=!0,onDbChange:p,onCatalogChange:y,onSchemaChange:v,readOnly:C=!1,onEmptyResults:x,catalog:S,schema:w,tableSelectMode:Y="single",tableValue:$,onTableSelectChange:_,customTableOptionLabelRenderer:F})=>{let D,E,A,{addSuccessToast:I}=(0,m.Yf)(),[T,M]=(0,i.useState)(S),[z,k]=(0,i.useState)(w),[O,L]=(0,i.useState)(void 0),[U,P]=(0,i.useState)(null),{currentData:q,isFetching:R,refetch:j}=(0,f.ty)({dbId:null==e?void 0:e.id,catalog:T,schema:z,onSuccess:(e,t)=>{P(null),t&&I((0,a.t)("List updated"))},onError:e=>{if(null==e?void 0:e.errors){var t,n;P(null!=(t=null==e||null==(n=e.errors)?void 0:n[0])?t:null)}else s((null==e?void 0:e.error)||(0,a.t)("There was an error loading the tables"))}}),H=(0,i.useMemo)(()=>q?q.options.map(e=>({value:e.value,label:F?F(e):(0,r.Y)(b,{table:e}),text:e.value})):[],[q,F]);(0,i.useEffect)(()=>{void 0===e&&(M(void 0),k(void 0),L(void 0))},[e,Y]),(0,i.useEffect)(()=>{"single"===Y?L(H.find(e=>e.value===$)):L((null==H?void 0:H.filter(e=>e&&(null==$?void 0:$.includes(e.value))))||[])},[H,$,Y]);let B=(0,i.useMemo)(()=>(e,t)=>{let n=e.trim().toLowerCase(),{value:r}=t;return r.toLowerCase().includes(n)},[]);return(0,r.FD)(g,{children:[(0,r.Y)(d.RA,{db:e,emptyState:t,formMode:n,getDbList:l,handleError:s,onDbChange:C?void 0:e=>{p&&p(e),M(void 0),k(void 0),L("single"===Y?void 0:[])},onEmptyResults:x,onCatalogChange:C?void 0:e=>{M(e),y&&y(e),k(void 0),L("single"===Y?void 0:[])},catalog:T,onSchemaChange:C?void 0:e=>{k(e),v&&v(e),L("single"===Y?void 0:[])},schema:z,isDatabaseSelectEnabled:c&&!C,readOnly:C}),!n&&(0,r.Y)("div",{className:"divider"}),U?(0,r.Y)(d.x6,{error:U,source:"crud"}):null,(D=(0,a.t)("Table"),E=(0,r.Y)(o.A,{ariaLabel:(0,a.t)("Select table or type to search tables"),disabled:z&&!n&&C||!z,filterOption:B,labelInValue:!0,loading:R,name:"select-table",onChange:e=>{z?null==_||_(Array.isArray(e)?e.map(e=>null==e?void 0:e.value):null==e?void 0:e.value,T,z):L(e)},options:H,placeholder:(0,a.t)("Select table or type to search tables"),showSearch:!0,mode:Y,value:O,allowClear:"multiple"===Y,allowSelectAll:!1}),A=!C&&(0,r.Y)(h.A,{onClick:()=>j(),tooltipContent:(0,a.t)("Force refresh table list")}),(0,r.FD)(r.FK,{children:[(0,r.Y)(u.q,{children:D}),(0,r.FD)("div",{className:"section",children:[(0,r.Y)("span",{className:"select",children:E}),(0,r.Y)("span",{className:"refresh",children:A})]})]}))]})}},36320(e,t,n){n.d(t,{A:()=>h});var r=n(2445),i=n(27124),a=n(85614),l=n(17437),o=n(33296),s=n(8563),d=n(80967),c=n(60685);let u=(0,l.AH)`
  &.anticon {
    font-size: unset;
    overflow: visible;
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
    padding-bottom: 0.1em;
    .anticon {
      line-height: unset;
      vertical-align: unset;
      overflow: visible;
    }
  }
`,h=({name:e,label:t,description:n,validationErrors:h=[],renderTrigger:p=!1,rightNode:m,leftNode:f,onClick:g,hovered:y=!1,tooltipOnClick:b=()=>{},warning:v,danger:C})=>{let x=(0,a.useTheme)();return t?(0,r.FD)("div",{className:"ControlHeader","data-test":`${e}-header`,children:[(0,r.Y)("div",{className:"pull-left",children:(0,r.FD)(o.l,{css:e=>(0,l.AH)`
            margin-bottom: ${.5*e.sizeUnit}px;
            position: relative;
            font-size: ${e.fontSizeSM}px;
            overflow: visible;
            padding-bottom: 0.1em;
          `,htmlFor:e,children:[f&&(0,r.FD)("span",{children:[f," "]}),(0,r.Y)("span",{role:"button",tabIndex:0,onClick:g,style:{cursor:g?"pointer":""},children:t})," ",v&&(0,r.FD)("span",{children:[(0,r.Y)(s.m,{id:"error-tooltip",placement:"top",title:v,children:(0,r.Y)(c.F.WarningOutlined,{iconColor:x.colorWarning,css:(0,l.AH)`
                    vertical-align: baseline;
                  `,iconSize:"s"})})," "]}),C&&(0,r.FD)("span",{children:[(0,r.Y)(s.m,{id:"error-tooltip",placement:"top",title:C,children:(0,r.Y)(c.F.CloseCircleOutlined,{iconColor:x.colorErrorText,iconSize:"s"})})," "]}),(null==h?void 0:h.length)>0&&(0,r.FD)("span",{"data-test":"error-tooltip",css:(0,l.AH)`
                cursor: pointer;
              `,children:[(0,r.Y)(s.m,{id:"error-tooltip",placement:"top",title:null==h?void 0:h.join(" "),children:(0,r.Y)(c.F.ExclamationCircleOutlined,{iconColor:x.colorError})})," "]}),y?(0,r.FD)("span",{css:()=>(0,l.AH)`
          position: absolute;
          top: 50%;
          right: 0;
          padding-left: ${x.sizeUnit}px;
          transform: translate(100%, -50%);
          white-space: nowrap;
        `,children:[n&&(0,r.FD)("span",{children:[(0,r.Y)(s.m,{id:"description-tooltip",title:n,placement:"top",children:(0,r.Y)(c.F.InfoCircleOutlined,{css:u,onClick:b})})," "]}),p&&(0,r.FD)("span",{children:[(0,r.Y)(d.I,{label:(0,i.t)("bolt"),tooltip:(0,i.t)("Changing this control takes effect instantly"),placement:"top",type:"notice"})," "]})]}):null]})}),m&&(0,r.Y)("div",{className:"pull-right",children:m}),(0,r.Y)("div",{className:"clearfix"})]}):null}},90809(e,t,n){n.d(t,{B3:()=>S,Bt:()=>v,Gh:()=>C,JG:()=>_,JU:()=>y,Px:()=>D,XB:()=>F,a2:()=>g,f$:()=>$,p6:()=>w,yJ:()=>f});var r=n(2445),i=n(24002),a=n(30535),l=n(26206),o=n(27124),s=n(85614),d=n(17437),c=n(60685),u=n(8563),h=n(80967),p=n(79001);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let f=s.styled.div`
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
`,y=s.styled.div`
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
`,b=s.styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`,v=s.styled.div`
  height: 100%;
  border-left: solid 1px ${({theme:e})=>e.colorSplit};
  margin-left: auto;
`,C=s.styled.div`
  height: auto;
  width: ${({theme:e})=>6*e.sizeUnit}px;
  border-right: solid 1px ${({theme:e})=>e.colorBorder};
  cursor: pointer;
`,x=(0,s.styled)(h.I)`
  margin: 0 ${({theme:e})=>e.sizeUnit}px;
`,S=s.styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,w=s.styled.div`
  padding: ${({theme:e})=>e.sizeUnit}px;
  border: solid 1px ${({theme:e})=>e.colorSplit};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,Y=(0,d.i7)`
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
`,$=s.styled.div`
  ${({theme:e,isLoading:t,canDrop:n,isDragging:r,isOver:i})=>`
  position: relative;
  padding: ${e.sizeUnit}px;
  border: ${!t&&r?`dashed 1px ${n?e.colorSplit:e.colorErrorBgHover}`:`solid 1px ${t&&r?e.colorWarningBgHover:e.colorBorder}`};
  border-radius: ${e.borderRadius}px;
  &:before,
  &:after {
    content: ' ';
    position: absolute;
    border-radius: ${e.borderRadius}px;
  }
  &:before {
    display: ${r||t?"block":"none"};
    background-color: ${n?e.colorPrimary:e.colorErrorBgHover};
    z-index: 10;
    opacity: 10%;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
  }
  &:after {
    display: ${t||n&&i?"block":"none"};
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
        animation: ${Y} 2s ease-in infinite;
        background: linear-gradient(currentColor 0 0) 0 100%/0% 3px no-repeat;
        background-size: 100% ${e.sizeUnit/2}px;
        top: auto;
        right: ${e.sizeUnit}px;
        left: ${e.sizeUnit}px;
        bottom: -${e.sizeUnit/2}px;
        height: ${e.sizeUnit/2}px;
      `};
  }
`,_=s.styled.div`
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
`,F=s.styled.button`
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
`,D=e=>{let t,{label:n,savedMetric:h,adhocMetric:S,onRemove:w,onMoveLabel:Y,onDropLabel:$,withCaret:_,isFunction:F,type:D,index:E,isExtra:A,datasourceWarningMessage:I,tooltipTitle:T,multi:M=!0}=e,z=function(e,t){if(null==e)return{};var n,r,i={},a=Object.getOwnPropertyNames(e);for(r=0;r<a.length;r++)!(t.indexOf(n=a[r])>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n]);return i}(e,["label","savedMetric","adhocMetric","onRemove","onMoveLabel","onDropLabel","withCaret","isFunction","type","index","isExtra","datasourceWarningMessage","tooltipTitle","multi"]),k=(0,s.useTheme)(),O=(0,i.useRef)(null),L=(0,i.useRef)(null),U=null==h?void 0:h.metric_name,[,P]=(0,l.H)({accept:D,drop(){M&&(null==$||$())},hover(e,t){var n;if(!M||!O.current)return;let{dragIndex:r}=e;if(r===E)return;let i=null==(n=O.current)?void 0:n.getBoundingClientRect(),a=(i.bottom-i.top)/2,l=t.getClientOffset(),o=(null==l?void 0:l.y)?(null==l?void 0:l.y)-i.top:0;r<E&&o<a||r>E&&o>a||(null==Y||Y(r,E),e.dragIndex=E)}}),[{isDragging:q},R]=(0,a.i)({item:{type:D,dragIndex:E,value:(null==h?void 0:h.metric_name)?h:S},collect:e=>({isDragging:e.isDragging()})});return R(P(O)),(0,r.Y)(f,{ref:O,children:(0,r.FD)(g,m({withCaret:_,"data-test":"option-label"},z,{css:(0,d.AH)`
        text-align: center;
      `,children:[(0,r.Y)(C,{role:"button","data-test":"remove-control-button",onClick:w,children:(0,r.Y)(c.F.CloseOutlined,{iconSize:"m",iconColor:k.colorIcon,css:(0,d.AH)`
            vertical-align: sub;
          `})}),(0,r.FD)(y,{"data-test":"control-label",children:[F&&(0,r.Y)(c.F.FunctionOutlined,{iconSize:"m"}),(t=!q&&"string"==typeof n&&T&&n&&T!==n||!q&&L&&L.current&&L.current.scrollWidth>L.current.clientWidth,h&&U?(0,r.Y)(p.b,{metric:h,labelRef:L,shouldShowTooltip:!q}):t?(0,r.Y)(u.m,{title:T||n,children:(0,r.Y)(b,{ref:L,children:n})}):(0,r.Y)(b,{ref:L,children:n}))]}),(!!I||A)&&(0,r.Y)(x,{type:"warning",placement:"top",tooltip:I||(0,o.t)(`
                This filter was inherited from the dashboard's context.
                It won't be saved when saving the chart.
              `)}),_&&(0,r.Y)(v,{children:(0,r.Y)(c.F.RightOutlined,{iconSize:"m",css:(0,d.AH)`
              margin: ${k.sizeUnit}px;
            `,iconColor:k.colorIcon})})]}))})}},97616(e,t,n){n.d(t,{A:()=>y});var r=n(2445),i=n(24002),a=n(38221),l=n.n(a),o=n(22022),s=n(87552),d=n(29138),c=n(97887),u=n(8563),h=n(27124),p=n(98837);n(15850);var m=n(36320);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}class g extends i.Component{componentDidUpdate(e){this.props.onChange!==e.onChange&&this.props.debounceDelay&&this.props.onChange&&(this.debouncedOnChange&&this.debouncedOnChange.cancel(),this.debouncedOnChange=l()(this.props.onChange,this.props.debounceDelay))}handleChange(e){let t="object"==typeof e?e.target.value:e;this.debouncedOnChange?this.debouncedOnChange(t):null==this.props.onChange||this.props.onChange.call(this.props,t)}componentWillUnmount(){this.debouncedOnChange&&this.debouncedOnChange.flush()}renderEditor(e=!1){let t=this.props,{theme:n,height:i,offerEditInModal:a,aboveEditorSection:l,resize:d,textAreaStyles:c,tooltipOptions:p,hotkeys:m,debounceDelay:g,language:y,initialValue:b,readOnly:v,name:C,onChange:x,value:S,minLines:w,maxLines:Y}=t,$=function(e,t){if(null==e)return{};var n,r,i={},a=Object.getOwnPropertyNames(e);for(r=0;r<a.length;r++)!(t.indexOf(n=a[r])>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n]);return i}(t,["theme","height","offerEditInModal","aboveEditorSection","resize","textAreaStyles","tooltipOptions","hotkeys","debounceDelay","language","initialValue","readOnly","name","onChange","value","minLines","maxLines"]),_=e?40:w||12;if(y){let t=f({border:(null==n?void 0:n.colorBorder)?`1px solid ${n.colorBorder}`:void 0,minHeight:`${_}em`,width:"auto"},c);d&&(t.resize=d,t.overflow="auto"),v&&(t.backgroundColor=null==n?void 0:n.colorBgMask);let i=(0,r.Y)("div",{children:(0,r.Y)(s.S9,f({mode:y,style:t,minLines:_,maxLines:e?1e3:Y,editorProps:{$blockScrolling:!0},onLoad:e=>{null==m||m.forEach(t=>{e.commands.addCommand({name:t.name,bindKey:{win:t.key,mac:t.key},exec:t.func})})},defaultValue:null!=b?b:S,readOnly:v},$,{onChange:this.handleChange.bind(this)}),C)});return p?(0,r.Y)(u.m,f({},p,{children:i})):i}let F=(0,r.Y)("div",{children:(0,r.Y)(o.Input.TextArea,{placeholder:(0,h.t)("textarea"),onChange:this.handleChange.bind(this),defaultValue:this.props.initialValue,disabled:this.props.readOnly,style:{height:this.props.height},"aria-required":this.props["aria-required"]})});return this.props.tooltipOptions?(0,r.Y)(u.m,f({},this.props.tooltipOptions,{children:F})):F}renderModalBody(){return(0,r.FD)(r.FK,{children:[(0,r.Y)("div",{children:this.props.aboveEditorSection}),this.renderEditor(!0)]})}render(){var e,t;let n=(0,r.Y)(m.A,f({},this.props));return(0,r.FD)("div",{children:[n,this.renderEditor(),this.props.offerEditInModal&&(0,r.Y)(c.g,{modalTitle:n,triggerNode:(0,r.Y)(d.$n,{buttonSize:"small",style:{marginTop:null!=(e=null==(t=this.props.theme)?void 0:t.sizeUnit)?e:4},children:(0,h.t)("Edit %s in modal",this.props.language)}),modalBody:this.renderModalBody(),responsive:!0})]})}constructor(e){super(e),e.debounceDelay&&e.onChange&&(this.debouncedOnChange=l()(e.onChange,e.debounceDelay))}}g.defaultProps={onChange:()=>{},height:250,minLines:3,maxLines:10,offerEditInModal:!0,readOnly:!1,resize:null,textAreaStyles:{},tooltipOptions:{},hotkeys:[],debounceDelay:null};let y=(0,p.b)(g)},58414(e,t,n){n.d(t,{wW:()=>a,SM:()=>l,el:()=>i});var r=n(73815);let i=new Map,a=((e,t,n=(...e)=>JSON.stringify([...e]))=>(...r)=>{let i=n(...r);if(t.has(i))return t.get(i);let a=e(...r);return t.set(i,a),a})(r.A.get,i,({endpoint:e})=>e||"");function l(e){if(null==e||""===e)return;let t=String(e);i.forEach((e,n)=>{for(let e of[`/api/v1/dataset/${t}`,`/api/v1/dataset/${t}/`,`/api/v1/dataset/${t}?`])if(n.includes(e)){let t=n.substring(n.indexOf(e)+e.length);if(e.endsWith("/")||e.endsWith("?")||""===t||t.startsWith("/")||t.startsWith("?")){i.delete(n);break}}})}}}]);