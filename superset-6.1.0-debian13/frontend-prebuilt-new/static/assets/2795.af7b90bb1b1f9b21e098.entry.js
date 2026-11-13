(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[2795],{48158(e,t,r){"use strict";r.d(t,{T:()=>s});var a=r(2445),l=r(27124),n=r(85614),o=r(60685),i=r(8563);function s({certifiedBy:e,details:t,size:r="l"}){let d=(0,n.useTheme)();return(0,a.Y)(i.m,{id:"certified-details-tooltip",title:(0,a.FD)(a.FK,{children:[e&&(0,a.Y)("div",{children:(0,a.Y)("strong",{children:(0,l.t)("Certified by %s",e)})}),(0,a.Y)("div",{children:t})]}),children:(0,a.Y)(o.F.Certified,{iconColor:d.colorPrimary,iconSize:r})})}},74469(e,t,r){"use strict";r.d(t,{Ay:()=>x,Fq:()=>w});var a=r(2445),l=r(24002),n=r(41435),o=r(99005),i=r(35086),s=r(85614),d=r(17437),c=r(95297),u=r(27124),h=r(41561),p=r(60685);function m(e,t,r,a,l,n,o){try{var i=e[n](o),s=i.value}catch(e){r(e);return}i.done?t(s):Promise.resolve(s).then(a,l)}function g(e){return function(){var t=this,r=arguments;return new Promise(function(a,l){var n=e.apply(t,r);function o(e){m(n,a,l,o,i,"next",e)}function i(e){m(n,a,l,o,i,"throw",e)}o(void 0)})}}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}let v=new Set,b={sql:()=>r.e(427).then(r.bind(r,30427)),htmlbars:()=>r.e(5696).then(r.bind(r,65696)),markdown:()=>r.e(4282).then(r.bind(r,64282)),json:()=>r.e(3117).then(r.bind(r,83117))},y=e=>g(function*(){if(!v.has(e))try{let t=yield b[e]();n.A.registerLanguage(e,t.default),v.add(e)}catch(t){console.warn(`Failed to load language ${e}:`,t)}})(),w=e=>g(function*(){let t=e.filter(e=>!v.has(e)).map(y);yield Promise.all(t)})(),x=({children:e,language:t="sql",customStyle:r={},showLineNumbers:m=!1,wrapLines:b=!0,style:w,showCopyButton:x=!0})=>{let S=(0,s.useTheme)(),[C,T]=(0,l.useState)(v.has(t)),[A,E]=(0,l.useState)(!1),$=(0,l.useRef)(null);(0,l.useEffect)(()=>{g(function*(){v.has(t)||(yield y(t),T(!0))})()},[t]),(0,l.useEffect)(()=>()=>{$.current&&clearTimeout($.current)},[]);let Y=(0,l.useCallback)(()=>{(0,h.A)(()=>Promise.resolve(e)).then(()=>{$.current&&clearTimeout($.current),E(!0),$.current=setTimeout(()=>E(!1),1500)})},[e]),k=(0,c.Mw)(S),O=w||(k?i.A:o.A),z=f({background:S.colorBgElevated,padding:4*S.sizeUnit,border:0,borderRadius:S.borderRadius},r),P=x&&(0,a.Y)("button",{type:"button",onClick:e=>{e.stopPropagation(),Y()},title:A?(0,u.t)("Copied!"):(0,u.t)("Copy to clipboard"),css:(0,d.AH)`
        position: absolute;
        top: ${S.sizeUnit}px;
        right: ${S.sizeUnit}px;
        background: none;
        border: none;
        cursor: pointer;
        padding: ${S.sizeUnit}px;
        color: ${A?S.colorSuccess:S.colorTextSecondary};
        line-height: 1;
        border-radius: ${S.borderRadius}px;
        &:hover {
          color: ${A?S.colorSuccess:S.colorText};
          background: ${S.colorBgTextHover};
        }
      `,children:A?(0,a.Y)(p.F.CheckOutlined,{style:{fontSize:S.fontSizeSM}}):(0,a.Y)(p.F.CopyOutlined,{style:{fontSize:S.fontSizeSM}})});return C?(0,a.FD)("div",{css:(0,d.AH)`
        position: relative;
      `,children:[P,(0,a.Y)(n.A,{language:t,style:O,customStyle:z,showLineNumbers:m,wrapLines:b,children:e})]}):(0,a.FD)("div",{css:(0,d.AH)`
          position: relative;
        `,children:[P,(0,a.Y)("pre",{style:f({},z,{fontFamily:"monospace",whiteSpace:"pre-wrap",margin:0}),children:e})]})}},426(e,t,r){"use strict";r.d(t,{T:()=>u});var a=r(2445),l=r(27124),n=r(85614),o=r(24002),i=r(33296),s=r(22022),d=r(56030);let c=n.styled.div`
  padding-top: 8px;
  width: 50%;
  label {
    color: ${({theme:e})=>e.colorTextLabel};
  }
`;function u({description:e,onConfirm:t,onHide:r,open:n,title:h,name:p}){let[m,g]=(0,o.useState)(!0),[f,v]=(0,o.useState)(""),b=(0,o.useRef)(null);(0,o.useEffect)(()=>{n&&b.current&&b.current.focus()},[n]);let y=()=>{v(""),t()};return(0,a.FD)(d.aF,{disablePrimaryButton:m,onHide:()=>{v(""),r()},onHandledPrimaryAction:y,primaryButtonName:(0,l.t)("Delete"),primaryButtonStyle:"danger",show:n,name:p,title:h,centered:!0,children:[e,(0,a.FD)(c,{children:[(0,a.Y)(i.l,{htmlFor:"delete",children:(0,l.t)('Type "%s" to confirm',(0,l.t)("DELETE"))}),(0,a.Y)(s.Input,{"data-test":"delete-modal-input",type:"text",id:"delete",autoComplete:"off",value:f,onChange:e=>{var t;let r=null!=(t=e.target.value)?t:"";g(r.toUpperCase()!==(0,l.t)("DELETE")),v(r)},onPressEnter:()=>{m||y()},ref:b})]})]})}},59854(e,t,r){"use strict";r.d(t,{$:()=>u});var a=r(2445),l=r(24002),n=r(27124),o=r(85614),i=r(17437),s=r(60685),d=r(8563);let c=o.styled.a`
  ${({theme:e})=>(0,i.AH)`
    font-size: ${e.fontSizeXL}px;
    display: flex;
    padding: 0 0 0 ${2*e.sizeUnit}px;
  `};
`,u=({itemId:e,isStarred:t,showTooltip:r,saveFaveStar:i,fetchFaveStar:u})=>{let h=(0,o.useTheme)();(0,l.useEffect)(()=>{null==u||u(e)},[u,e]);let p=(0,l.useCallback)(r=>{r.preventDefault(),i(e,!!t)},[t,e,i]),m=(0,a.Y)(c,{href:"#",onClick:p,className:"fave-unfave-icon","data-test":"fave-unfave-icon",role:"button",children:t?(0,a.Y)(s.F.StarFilled,{"aria-label":"starred",iconSize:"l",iconColor:h.colorWarning,name:"favorite-selected"}):(0,a.Y)(s.F.StarOutlined,{"aria-label":"unstarred",iconSize:"l",iconColor:h.colorTextTertiary,name:"favorite-unselected"})});return r?(0,a.Y)(d.m,{id:"fave-unfave-tooltip",title:(0,n.t)("Click to favorite/unfavorite"),children:m}):m}},56550(e,t,r){"use strict";r.d(t,{x:()=>s});var a=r(2445),l=r(60685),n=r(27124),o=r(85614),i=r(59272);let s=({isPublished:e,onClick:t})=>{let r=(0,o.useTheme)(),s=e?(0,n.t)("Published"):(0,n.t)("Draft"),d=e?(0,a.Y)(l.F.CheckCircleOutlined,{iconSize:"s",iconColor:r.colorSuccess}):(0,a.Y)(l.F.MinusCircleOutlined,{iconSize:"s",iconColor:r.colorPrimary});return(0,a.Y)(i.JU,{type:e?"success":"primary",icon:d,onClick:t,style:{color:e?r.colorSuccessText:r.colorPrimaryText},children:s})}},47349(e,t,r){"use strict";r.d(t,{$:()=>d});var a=r(2445),l=r(24002),n=r(79924),o=r(85614);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}let s=o.styled.div`
  background-image: url(${({src:e})=>e});
  background-size: cover;
  background-position: center ${({position:e})=>e};
  display: inline-block;
  height: calc(100% - 1px);
  width: calc(100% - 2px);
  margin: 1px 1px 0 1px;
`;function d(e){let{src:t,fallback:r,isLoading:o,position:d}=e,c=function(e,t){if(null==e)return{};var r,a,l={},n=Object.getOwnPropertyNames(e);for(a=0;a<n.length;a++)!(t.indexOf(r=n[a])>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r]);return l}(e,["src","fallback","isLoading","position"]),[u,h]=(0,l.useState)(r);return(0,l.useEffect)(()=>(t&&fetch(t).then(e=>e.blob()).then(e=>{/image/.test(e.type)&&h(URL.createObjectURL(e))}).catch(e=>{n.A.error(e),h(r)}),()=>{h(r)}),[t,r]),(0,a.Y)(s,i({"data-test":"image-loader",src:o?r:u},c,{position:d}))}},81549(e,t,r){"use strict";r.d(t,{Gk:()=>s,xQ:()=>g,IQ:()=>y});var a=r(2445),l=r(85614),n=r(17437),o=r(80967);let i=l.styled.div`
  ${({theme:e,bottomSpacing:t})=>(0,n.AH)`
    flex: 1;
    margin-top: 0px;
    margin-bottom: ${t?4*e.sizeUnit:0}px;

    .control-label {
      margin-top: ${e.sizeUnit}px;
      margin-bottom: ${2*e.sizeUnit}px;
      color: ${e.colorText};
      font-size: ${e.fontSize}px;
    }

    .required {
      margin-left: ${e.sizeUnit/2}px;
      color: ${e.colorError};
    }

    .helper {
      display: block;
      color: ${e.colorTextTertiary};
      font-size: ${e.fontSizeSM}px;
      padding: ${e.sizeUnit}px 0;
      text-align: left;
    }

    .error {
      color: ${e.colorError};
      font-size: ${e.fontSizeSM}px;
      margin-top: ${e.sizeUnit}px;
    }

    .input-container {
      display: flex;
      align-items: center;

      > div {
        width: 100%;
      }

      label {
        display: flex;
        margin-right: ${2*e.sizeUnit}px;
      }

      i {
        margin: 0 ${e.sizeUnit}px;
      }
    }

    input,
    textarea {
      flex: 1 1 auto;
    }

    input[disabled] {
      color: ${e.colorTextDisabled};
    }

    textarea {
      resize: vertical;
    }

    input::placeholder,
    textarea::placeholder {
      color: ${e.colorTextPlaceholder};
    }

    textarea,
    input[type='text'],
    input[type='number'] {
      padding: ${e.sizeUnit}px ${2*e.sizeUnit}px;
      border-style: none;
      border: 1px solid ${e.colorBorder};
      border-radius: ${e.borderRadius}px;

      &[name='description'] {
        flex: 1 1 auto;
      }
    }
  `}
`;function s({label:e,required:t=!1,tooltip:r,error:l,helperText:n,bottomSpacing:d=!0,children:c,testId:u,validateStatus:h,hasFeedback:p=!1}){return(0,a.FD)(i,{bottomSpacing:d,"data-test":u,children:[(0,a.FD)("div",{className:"control-label",children:[e,r&&(0,a.Y)(o.I,{tooltip:r}),t&&(0,a.Y)("span",{className:"required",children:"*"})]}),(0,a.Y)("div",{className:"input-container",children:c}),n&&(0,a.Y)("div",{className:"helper",children:n}),l&&(0,a.Y)("div",{className:"error",children:l})]})}l.styled.div`
  ${({theme:e})=>`
    padding: ${2*e.sizeUnit}px 0;
  `}
`;var d=r(27124),c=r(56030),u=r(68447),h=r(10020),p=r(84151);let m=(0,l.styled)(c.aF)`
  .ant-modal-body {
    max-height: 80vh;
    height: auto;
    overflow-y: auto;
    padding: 0;
  }

  .ant-modal-header {
    padding: ${({theme:e})=>3*e.sizeUnit}px
      ${({theme:e})=>4*e.sizeUnit}px
      ${({theme:e})=>3*e.sizeUnit}px;
    margin-bottom: 0;
    border-bottom: 1px solid ${({theme:e})=>e.colorBorder};
  }

  .ant-modal-footer {
    height: ${({theme:e})=>16.25*e.sizeUnit}px;
  }

  .control-label {
    margin-top: ${({theme:e})=>e.sizeUnit}px;
  }

  /* Remove top margin from collapse component */
  .ant-collapse {
    border: none;

    > .ant-collapse-item:first-child {
      border-top: none;
    }

    /* Remove margin from collapse headers */
    .ant-collapse-header {
      padding-bottom: 0 !important;

      /* Remove margin from the CollapseLabelInModal component */
      > div {
        margin-bottom: 0;
      }
    }
  }

  /* Ensure collapse sections have proper padding */
  .ant-collapse-content-box {
    padding: ${({theme:e})=>4*e.sizeUnit}px;
  }
`;function g({width:e=500,title:t,icon:r,show:l,onHide:n,onSave:o,saveDisabled:i=!1,saveLoading:s=!1,saveText:c,cancelText:f,errorTooltip:v,children:b,isEditMode:y=!1,centered:w=!0,destroyOnClose:x=!0,maskClosable:S=!1,wrapProps:C,contentLoading:T=!1}){let A=c||(y?(0,d.t)("Save"):(0,d.t)("Add"));return(0,a.Y)(m,{disablePrimaryButton:i||s||T,primaryButtonLoading:s,primaryTooltipMessage:v,onHandledPrimaryAction:o,onHide:n,primaryButtonName:A,show:l,width:`${e}px`,wrapProps:C,centered:w,title:r?(0,a.Y)(p.r,{isEditMode:y,title:t,"data-test":"standard-modal-title"}):t,children:T?(0,a.Y)(u.s,{justify:"center",align:"center",style:{minHeight:200},children:(0,a.Y)(h.R,{})}):b})}var f=r(24002),v=r(42178);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function y({sections:e,onValidationChange:t}){let r=(0,f.useMemo)(()=>e.reduce((e,t)=>(e[t.key]={hasErrors:!1,errors:[],name:t.name},e),{}),[e]),[l,o]=(0,f.useState)(r),i=(0,f.useCallback)((e,r)=>{o(a=>{let l=b({},a,{[e]:{hasErrors:r.length>0,name:a[e].name,errors:r}});return t&&t(Object.values(l).some(e=>e.hasErrors)),l})},[t]),s=(0,f.useCallback)(t=>{let r=e.find(e=>e.key===t);r&&i(t,r.validator())},[e,i]),c=(0,f.useCallback)(()=>{let t=!1;return e.forEach(e=>{let r=e.validator();i(e.key,r),r.length>0&&(t=!0)}),!t},[e,i]),u=(0,f.useMemo)(()=>Object.values(l).some(e=>e.hasErrors),[l]),h=(0,f.useMemo)(()=>{let e;return u?(e=[],(Object.values(l).forEach(t=>{if(t.hasErrors){let r=`${t.name}: `;e.push(r+t.errors.join(", "))}}),0===e.length)?"":(0,a.FD)("div",{children:[(0,d.t)("Please fix the following errors"),(0,a.Y)(v.B,{dataSource:e,renderItem:e=>(0,a.FD)(v.B.Item,{css:e=>(0,n.AH)`
              &&& {
                color: ${e.colorWhite};
              }
            `,compact:!0,children:["• ",e]}),size:"small",split:!1})]})):""},[l,u]);return{validationStatus:l,validateSection:s,validateAll:c,errorTooltip:h,hasErrors:u,updateValidationStatus:i}}},20567(e,t,r){"use strict";r.d(t,{U:()=>l});var a,l=((a={})[a.Custom=1]="Custom",a[a.Type=2]="Type",a[a.Owner=3]="Owner",a[a.FavoritedBy=4]="FavoritedBy",a)},76399(e,t,r){"use strict";r.d(t,{AE:()=>g,VM:()=>f});var a=r(60957);class l{subscribe(e){return this.listeners.add(e),new a.jG(()=>{this.listeners.delete(e)})}fire(e){this.listeners.forEach(t=>{try{t(e)}catch(e){console.error("Error in event listener:",e)}})}constructor(){this.listeners=new Set}}class n{static getInstance(){return n.instance||(n.instance=new n),n.instance}registerProvider(e,t){let{id:r,languages:l}=e;return this.providers.has(r)?(console.warn(`Editor provider with id "${r}" is already registered.`),new a.jG(()=>{})):(this.providers.set(r,{editor:e,component:t}),l.forEach(e=>{this.languageToProvider.set(e,r)}),this.registerEmitter.fire({editor:e}),new a.jG(()=>{this.unregisterProvider(r)}))}unregisterProvider(e){let t=this.providers.get(e);if(!t)return;let{editor:r}=t;r.languages.forEach(t=>{this.languageToProvider.get(t)===e&&this.languageToProvider.delete(t)}),this.providers.delete(e),this.unregisterEmitter.fire({editor:r})}getProvider(e){let t=this.languageToProvider.get(e);if(t)return this.providers.get(t)}hasProvider(e){return this.languageToProvider.has(e)}getAllProviders(){return Array.from(this.providers.values())}onDidRegister(e){return this.registerEmitter.subscribe(e)}onDidUnregister(e){return this.unregisterEmitter.subscribe(e)}reset(){this.providers.clear(),this.languageToProvider.clear()}constructor(){this.providers=new Map,this.languageToProvider=new Map,this.registerEmitter=new l,this.unregisterEmitter=new l}}var o=r(2445),i=r(24002),s=r(85614),d=r(87552);let c=e=>{var t;return{row:e.line,column:null!=(t=e.column)?t:0,text:e.message,type:e.severity}},u=e=>{var t,r,a;return{name:e.name,value:null!=(t=e.value)?t:e.name,score:null!=(r=e.score)?r:0,meta:null!=(a=e.meta)?a:"",docText:e.detail,docHTML:e.documentation}},h=(0,i.forwardRef)((e,t)=>{let{id:r,value:l,onChange:n,onBlur:s,onCursorPositionChange:h,onSelectionChange:p,language:m,readOnly:g,tabSize:f,lineNumbers:v,wordWrap:b,annotations:y,hotkeys:w,keywords:x,height:S="100%",width:C="100%",onReady:T}=e,A=(0,i.useRef)(null),E=(0,i.useRef)(new Map),$=(0,i.useRef)(h),Y=(0,i.useRef)(p);(0,i.useEffect)(()=>{$.current=h},[h]),(0,i.useEffect)(()=>{Y.current=p},[p]);let k=(0,i.useMemo)(()=>({focus:()=>{var e,t;null==(t=A.current)||null==(e=t.editor)||e.focus()},getValue:()=>{var e,t,r;return null!=(e=null==(r=A.current)||null==(t=r.editor)?void 0:t.getValue())?e:""},setValue:e=>{var t,r;null==(r=A.current)||null==(t=r.editor)||t.setValue(e,-1)},getCursorPosition:()=>{var e,t,r,a;let l=null==(a=A.current)||null==(r=a.editor)?void 0:r.getCursorPosition();return{line:null!=(e=null==l?void 0:l.row)?e:0,column:null!=(t=null==l?void 0:l.column)?t:0}},moveCursorToPosition:e=>{var t;let r=null==(t=A.current)?void 0:t.editor;r&&(r.clearSelection(),r.moveCursorToPosition({row:e.line,column:e.column}))},getSelections:()=>{var e,t;let r=null==(t=A.current)||null==(e=t.editor)?void 0:e.getSelection();if(!r)return[];let a=r.getRange();return[{start:{line:a.start.row,column:a.start.column},end:{line:a.end.row,column:a.end.column}}]},setSelection:e=>{var t;let r=null==(t=A.current)?void 0:t.editor;r&&r.selection.setSelectionRange({start:{row:e.start.line,column:e.start.column},end:{row:e.end.line,column:e.end.column}})},getSelectedText:()=>{var e,t,r;return null!=(e=null==(r=A.current)||null==(t=r.editor)?void 0:t.getSelectedText())?e:""},insertText:e=>{var t,r;null==(r=A.current)||null==(t=r.editor)||t.insert(e)},executeCommand:e=>{var t;let r=null==(t=A.current)?void 0:t.editor;(null==r?void 0:r.commands)&&r.commands.exec(e,r,{})},scrollToLine:e=>{var t,r;null==(r=A.current)||null==(t=r.editor)||t.scrollToLine(e,!0,!0)},setAnnotations:e=>{var t,r;let a=null==(r=A.current)||null==(t=r.editor)?void 0:t.getSession();a&&a.setAnnotations(e.map(c))},clearAnnotations:()=>{var e,t;let r=null==(t=A.current)||null==(e=t.editor)?void 0:e.getSession();r&&r.clearAnnotations()},registerCompletionProvider:e=>(E.current.set(e.id,e),new a.jG(()=>{E.current.delete(e.id)})),resize:()=>{var e,t;null==(t=A.current)||null==(e=t.editor)||e.resize()},onDidChangeContent:(e,t)=>{var r;let l=null==(r=A.current)?void 0:r.editor;if(!l)return new a.jG(()=>{});let n=t?e.bind(t):e,o=e=>{let t=l.session.doc.positionToIndex(e.start),r=e.lines.join(l.session.doc.getNewLineCharacter());n({getValue:()=>l.getValue(),changes:["insert"===e.action?{rangeOffset:t,rangeLength:0,text:r}:{rangeOffset:t,rangeLength:r.length,text:""}]})};return l.session.on("change",o),new a.jG(()=>{l.session.off("change",o)})}}),[]);(0,i.useImperativeHandle)(t,()=>k,[k]);let O=(0,i.useRef)(!1),z=(0,i.useRef)(!1),P=(0,i.useCallback)(e=>{w&&w.forEach(t=>{e.commands.addCommand({name:t.name,bindKey:{win:t.key,mac:t.key},exec:()=>t.exec(k)})}),z.current||(z.current=!0,e.selection.on("changeCursor",()=>{if($.current){let t=e.getCursorPosition();$.current({line:t.row,column:t.column})}}),e.selection.on("changeSelection",()=>{if(Y.current){let t=e.getSelection().getRange();Y.current([{start:{line:t.start.row,column:t.start.column},end:{line:t.end.row,column:t.end.column}}])}})),T&&!O.current&&(O.current=!0,T(k)),e.focus()},[w,k,T]),_=(0,i.useCallback)(()=>{s&&s(l)},[s,l]),F=(e=>{switch(e){case"sql":return d.pw;case"json":return d.iN;case"markdown":return d.nt;case"css":return d.rN;case"yaml":return d._p;case"javascript":return d.LI;default:return console.warn(`Unknown editor language "${e}", falling back to SQL editor`),d.pw}})(m),D=null==y?void 0:y.map(c),j=null==x?void 0:x.map(u);return(0,o.Y)(F,{ref:A,name:r,mode:m,value:l,onChange:n,onBlur:_,onLoad:P,height:S,width:C,readOnly:g,tabSize:f,showGutter:!1!==v,wrapEnabled:b,annotations:D,keywords:j,enableLiveAutocompletion:!0,editorProps:{$blockScrolling:!0},showLoadingForImport:!0})});function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}h.displayName="AceEditorProvider";let m=(0,i.forwardRef)((e,t)=>{let{language:r}=e,a=(0,s.useTheme)(),l=(e=>{let t=n.getInstance(),[r,a]=(0,i.useState)(()=>t.getProvider(e));return(0,i.useEffect)(()=>{let r=()=>{a(r=>{let a=t.getProvider(e);return a!==r?a:r})},l=t.onDidRegister(t=>{t.editor.languages.includes(e)&&r()}),n=t.onDidUnregister(t=>{t.editor.languages.includes(e)&&r()});return r(),()=>{l.dispose(),n.dispose()}},[e,t]),r})(r),d=p({},e,{theme:a});if(l){let e=l.component;return(0,o.Y)(e,p({ref:t},d))}return(0,o.Y)(h,p({ref:t},d))});m.displayName="EditorHost";let g=m,f={registerEditor:(e,t)=>n.getInstance().registerProvider(e,t),getEditor:e=>n.getInstance().getProvider(e),hasEditor:e=>n.getInstance().hasProvider(e),getAllEditors:()=>n.getInstance().getAllProviders(),onDidRegisterEditor:e=>n.getInstance().onDidRegister(e),onDidUnregisterEditor:e=>n.getInstance().onDidUnregister(e)}},60957(e,t,r){"use strict";r.d(t,{Wm:()=>a,jG:()=>l});class a{addCatalog(e){this.catalogs.push(e)}addSchema(e){this.schemas.push(e)}constructor(e,t,r,a){this.id=e,this.name=t,this.catalogs=r,this.schemas=a}}class l{static from(...e){return new l(()=>{e.forEach(e=>{e.dispose()})})}dispose(){this.dispose()}constructor(e){this.dispose=e}}},47103(e,t,r){"use strict";r.d(t,{A:()=>ec});var a=r(2445),l=r(24002),n=r(90179),o=r.n(n),i=r(75086),s=r.n(i),d=r(57832),c=r(10938),u=r(80023),h=r(35630),p=r(58561),m=r.n(p),g=r(27124),f=r(23399),v=r(68655),b=r(73815),y=r(25365),w=r(51281),x=r(7070),S=r(44222),C=r(36652),T=r(28681),A=r(61225),E=r(34235),$=r(22908),Y=r(32924),k=r(81549),O=r(91129),z=r(93225),P=r(22022);let _=({form:e,validationStatus:t})=>{var r;let l=e.getFieldValue("title"),n=(null==(r=t.basic)?void 0:r.hasErrors)&&(!l||0===l.trim().length);return(0,a.FD)(a.FK,{children:[(0,a.Y)(k.Gk,{label:(0,g.t)("Name"),required:!0,testId:"dashboard-name-field",error:n?(0,g.t)("Dashboard name is required"):void 0,children:(0,a.Y)(z.e,{name:"title",noStyle:!0,rules:[{required:!0,message:(0,g.t)("Dashboard name is required"),whitespace:!0}],children:(0,a.Y)(P.Input,{placeholder:(0,g.t)("The display name of your dashboard"),"data-test":"dashboard-title-input",type:"text"})})}),(0,a.Y)(k.Gk,{label:(0,g.t)("URL Slug"),testId:"dashboard-slug-field",bottomSpacing:!1,children:(0,a.Y)(z.e,{name:"slug",noStyle:!0,children:(0,a.Y)(P.Input,{placeholder:(0,g.t)("A readable URL for your dashboard"),"data-test":"dashboard-slug-input",type:"text"})})})]})};var F=r(62858),D=r(80446),j=r(24477);let R=({isLoading:e,owners:t,roles:r,tags:n,onChangeOwners:o,onChangeRoles:i,onChangeTags:s,onClearTags:d})=>{let{loadAccessOptions:c}={loadAccessOptions:(0,l.useCallback)((e="owners",t="",r,a)=>{let l=m().encode({filter:t,page:r,page_size:a});return b.A.get({endpoint:`/api/v1/dashboard/related/${e}?q=${l}`}).then(t=>({data:t.json.result.filter(e=>void 0===e.extra.active||e.extra.active).map(t=>{if("owners"===e){var r,a,l;return{value:t.value,label:(0,S.I6)({name:t.text,email:null==(a=t.extra)?void 0:a.email}),[S.N6]:t.text,[S.rb]:null!=(r=null==(l=t.extra)?void 0:l.email)?r:""}}return{value:t.value,label:t.text}}),totalCount:t.json.count}))},[])},u=(0,l.useMemo)(()=>(t||[]).map(e=>{var t;return{value:e.id,label:(0,S.I6)({name:(0,j.A)(e),email:e.email}),[S.N6]:(0,j.A)(e),[S.rb]:null!=(t=e.email)?t:""}}),[t]),h=(0,l.useMemo)(()=>(r||[]).map(e=>({value:e.id,label:`${e.name}`})),[r]),p=(0,l.useMemo)(()=>n.map(e=>({value:e.id,label:e.name})),[n]);return(0,a.FD)(a.FK,{children:[(0,a.Y)(k.Gk,{label:(0,g.t)("Owners"),testId:"dashboard-owners-field",helperText:(0,g.t)("Owners is a list of users who can alter the dashboard. Searchable by name or username."),children:(0,a.Y)(F.A,{"data-test":"dashboard-owners-select",allowClear:!0,ariaLabel:(0,g.t)("Owners"),disabled:e,mode:"multiple",onChange:o,options:(e,t,r)=>c("owners",e,t,r),value:u,showSearch:!0,placeholder:(0,g.t)("Search owners"),optionFilterProps:S.un})}),(0,w.G7)(w.TO.DashboardRbac)&&(0,a.Y)(k.Gk,{label:(0,g.t)("Roles"),testId:"dashboard-roles-field",helperText:(0,g.t)("Roles is a list which defines access to the dashboard. Granting a role access to a dashboard will bypass dataset level checks. If no roles are defined, regular access permissions apply."),bottomSpacing:!(0,w.G7)(w.TO.TaggingSystem),children:(0,a.Y)(F.A,{"data-test":"dashboard-roles-select",allowClear:!0,ariaLabel:(0,g.t)("Roles"),disabled:e,mode:"multiple",onChange:i,options:(e,t,r)=>c("roles",e,t,r),value:h,showSearch:!0,placeholder:(0,g.t)("Search roles")})}),(0,w.G7)(w.TO.TaggingSystem)&&(0,a.Y)(k.Gk,{label:(0,g.t)("Tags"),testId:"dashboard-tags-field",helperText:(0,g.t)("A list of tags that have been applied to this dashboard."),bottomSpacing:!1,children:(0,a.Y)(F.A,{"data-test":"dashboard-tags-select",ariaLabel:"Tags",mode:"multiple",value:p,options:D.m,onChange:s,onClear:d,allowClear:!0,showSearch:!0,placeholder:(0,g.t)("Search tags")})})]})};var U=r(27243),I=r(85614),L=r(68292),M=r(76399),N=r(35501),G=r(17437),H=r(55412),q=r.n(H),B=r(8563),J=r(60685),V=r(74821);function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}let K=(0,g.t)(`The colors of this chart might be overridden by custom label colors of the related dashboard.
    Check the JSON metadata in the Advanced settings.`),Q=({value:e,onChange:t,clearable:r=!0,hasCustomLabelsColor:n=!1,showWarning:o=!1})=>{let i=(0,I.useTheme)(),s=(0,f.A)(),d=(0,l.useMemo)(()=>s.getMap(),[s]),c=(0,l.useMemo)(()=>s.keys().map(e=>[e,e]),[s]),u=(0,l.useMemo)(()=>{let t=e;if("SUPERSET_DEFAULT"===t){let e=null==d?void 0:d.SUPERSET_DEFAULT;e&&"function"!=typeof e&&"id"in e&&(t=e.id)}return t},[e,d]),h=(0,l.useMemo)(()=>{let e=[],t=Object.values(c.filter(t=>{let r=t[0],a="SUPERSET_DEFAULT"!==r&&!e.includes(r);return e.push(r),a}).reduce((e,[t])=>{var r;let l=d[t];if(!l||"function"==typeof l)return e;let n=[];"colors"in l&&({colors:n}=l);let o={label:(0,a.Y)(V.A,{id:l.id,label:l.label,colors:n}),value:t,searchText:l.label};return e[null!=(r=l.group)?r:N.w.Other].options.push(o),e},{[N.w.Custom]:{title:N.w.Custom,label:(0,g.t)("Custom color palettes"),options:[]},[N.w.Featured]:{title:N.w.Featured,label:(0,g.t)("Featured color palettes"),options:[]},[N.w.Other]:{title:N.w.Other,label:(0,g.t)("Other color palettes"),options:[]}})).filter(e=>e.options.length>0).map(e=>W({},e,{options:q()(e.options,e=>e.label)}));return 1===t.length&&t[0].title===N.w.Other?t[0].options.map(e=>({value:e.value,label:e.customLabel||e.label})):t.map(e=>({label:e.label,options:e.options.map(e=>({value:e.value,label:e.customLabel||e.label,searchText:e.searchText}))}))},[c,d]);return(0,a.FD)(a.FK,{children:[(0,a.Y)(L.A,{css:(0,G.AH)`
          width: 100%;
          & .ant-select-item.ant-select-item-group {
            padding-left: ${i.sizeUnit}px;
            font-size: ${i.fontSize}px;
          }
          & .ant-select-item-option-grouped {
            padding-left: ${3*i.sizeUnit}px;
          }
        `,"aria-label":(0,g.t)("Select color scheme"),allowClear:r,onChange:t,placeholder:(0,g.t)("Select scheme"),value:u,showSearch:!0,getPopupContainer:e=>e.parentNode,options:h,optionFilterProps:["label","value","searchText"]}),o&&n&&(0,a.Y)(B.m,{title:K,children:(0,a.Y)(J.F.WarningOutlined,{iconColor:i.colorWarning,css:(0,G.AH)`
              margin-left: ${2*i.sizeUnit}px;
              vertical-align: baseline;
            `,iconSize:"s"})})]})};function X(e,t,r,a,l,n,o){try{var i=e[n](o),s=i.value}catch(e){r(e);return}i.done?t(s):Promise.resolve(s).then(a,l)}let Z=(0,I.styled)(M.AE)`
  border-radius: ${({theme:e})=>e.borderRadius}px;
  border: 1px solid ${({theme:e})=>e.colorBorder};
`,ee=(0,I.styled)(U.F)`
  margin-bottom: ${({theme:e})=>4*e.sizeUnit}px;
`,et=I.styled.div`
  ${({theme:e})=>`
    display: flex;
    flex-direction: column;
    margin-bottom: ${4*e.sizeUnit}px;

    .switch-row {
      display: flex;
      align-items: center;
      gap: ${2*e.sizeUnit}px;
    }

    .switch-label {
      color: ${e.colorText};
      font-size: ${e.fontSize}px;
    }

    .switch-helper {
      display: block;
      color: ${e.colorTextTertiary};
      font-size: ${e.fontSizeSM}px;
      margin-top: ${e.sizeUnit}px;
    }
  `}
`,er=({themes:e,selectedThemeId:t,colorScheme:r,customCss:n,hasCustomLabelsColor:o,showChartTimestamps:i,onThemeChange:s,onColorSchemeChange:d,onCustomCssChange:c,onShowChartTimestampsChange:u,addDangerToast:h})=>{let[p,f]=(0,l.useState)([]),[v,y]=(0,l.useState)(!1),[x,S]=(0,l.useState)(null),[C,T]=(0,l.useState)(""),A=(0,l.useCallback)(()=>{var e;return(e=function*(){if((0,w.G7)(w.TO.CssTemplates)){y(!0);try{let e=m().encode({columns:["template_name","css"]}),t=yield b.A.get({endpoint:`/api/v1/css_template/?q=${e}`});f(t.json.result||[])}catch(e){h&&h((0,g.t)("An error occurred while fetching available CSS templates"))}finally{y(!1)}}},function(){var t=this,r=arguments;return new Promise(function(a,l){var n=e.apply(t,r);function o(e){X(n,a,l,o,i,"next",e)}function i(e){X(n,a,l,o,i,"throw",e)}o(void 0)})})()},[h]);(0,l.useEffect)(()=>{A()},[A]);let E=(0,l.useCallback)(e=>{if(!e){S(null),T("");return}let t=p.find(t=>t.template_name===e);t&&(S(e),T(t.css),c(t.css))},[p,c]),$=x&&n!==C;return(0,a.FD)(a.FK,{children:[e.length>0&&(0,a.Y)(k.Gk,{label:(0,g.t)("Theme"),testId:"dashboard-theme-field",helperText:(0,g.t)("Clear the selection to revert to the system default theme"),children:(0,a.Y)(L.A,{"data-test":"dashboard-theme-select",value:t,onChange:s,options:e.map(e=>({value:e.id,label:e.theme_name})),allowClear:!0,placeholder:(0,g.t)("Select a theme")})}),(0,a.Y)(k.Gk,{label:(0,g.t)("Color scheme"),testId:"dashboard-colorscheme-field",helperText:(0,g.t)("Any color palette selected here will override the colors applied to this dashboard's individual charts"),children:(0,a.Y)(Q,{"data-test":"dashboard-colorscheme-select",value:r,onChange:d,hasCustomLabelsColor:o,showWarning:o})}),(0,a.FD)(et,{"data-test":"dashboard-show-timestamps-field",children:[(0,a.FD)("div",{className:"switch-row",children:[(0,a.Y)(P.Switch,{"data-test":"dashboard-show-timestamps-switch",checked:i,onChange:u}),(0,a.Y)("span",{className:"switch-label",children:(0,g.t)("Show chart query timestamps")})]}),(0,a.Y)("span",{className:"switch-helper",children:(0,g.t)("Display the last queried timestamp on charts in the dashboard view")})]}),(0,w.G7)(w.TO.CssTemplates)&&p.length>0&&(0,a.Y)(k.Gk,{label:(0,g.t)("Load CSS template (optional)"),testId:"dashboard-css-template-field",helperText:(0,g.t)("Select a predefined CSS template to apply to your dashboard"),children:(0,a.Y)(L.A,{"data-test":"dashboard-css-template-select",onChange:E,options:p.map(e=>({value:e.template_name,label:e.template_name})),placeholder:(0,g.t)("Select a CSS template"),loading:v,allowClear:!0,value:x})}),$&&(0,a.Y)(ee,{type:"warning",message:(0,g.t)('Modified from "%s" template',x),showIcon:!0,closable:!1,"data-test":"css-template-modified-warning"}),(0,a.Y)(k.Gk,{label:(0,g.t)("CSS"),testId:"dashboard-css-field",helperText:(0,g.t)("Apply custom CSS to the dashboard. Use class names or element selectors to target specific components."),bottomSpacing:!1,children:(0,a.Y)(Z,{id:"dashboard-css-editor","data-test":"dashboard-css-editor",onChange:c,value:n,language:"css",width:"100%",height:"160px"})})]})};var ea=r(4298);let el=({refreshFrequency:e,onRefreshFrequencyChange:t})=>(0,a.Y)(k.Gk,{label:(0,g.t)("Refresh frequency"),helperText:(0,g.t)("Set the automatic refresh frequency for this dashboard. The dashboard will reload its data at the specified interval."),bottomSpacing:!1,children:(0,a.Y)(ea.ux,{value:e,onChange:t})}),en=({isLoading:e})=>(0,a.FD)(a.FK,{children:[(0,a.Y)(k.Gk,{label:(0,g.t)("Certified by"),helperText:(0,g.t)("Person or group that has certified this dashboard."),children:(0,a.Y)(z.e,{name:"certifiedBy",noStyle:!0,children:(0,a.Y)(P.Input,{type:"text",disabled:e})})}),(0,a.Y)(k.Gk,{label:(0,g.t)("Certification details"),helperText:(0,g.t)("Any additional detail to show in the certification tooltip."),bottomSpacing:!1,children:(0,a.Y)(z.e,{name:"certificationDetails",noStyle:!0,children:(0,a.Y)(P.Input,{type:"text",disabled:e})})})]}),eo=(0,I.styled)(M.AE)`
  /* Border is already applied by AceEditor itself */
`,ei=({jsonMetadata:e,jsonAnnotations:t,validationStatus:r,onJsonMetadataChange:l})=>{var n;return(0,a.Y)(k.Gk,{label:(0,g.t)("JSON Metadata"),testId:"dashboard-metadata-field",helperText:(0,g.t)("This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter specific parameters."),error:(null==(n=r.advanced)?void 0:n.hasErrors)&&t.length>0?(0,g.t)("Invalid JSON metadata"):void 0,bottomSpacing:!1,children:(0,a.Y)(eo,{id:"dashboard-json-metadata","data-test":"dashboard-metadata-editor",value:e,onChange:l,language:"json",tabSize:2,wordWrap:!0,width:"100%",height:"60vh",annotations:t.map(e=>({severity:e.type,line:e.row,column:e.column,message:e.text}))})})};function es(e,t,r,a,l,n,o){try{var i=e[n](o),s=i.value}catch(e){r(e);return}i.done?t(s):Promise.resolve(s).then(a,l)}function ed(){return(ed=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}let ec=(0,x.Ay)(({addSuccessToast:e,addDangerToast:t,colorScheme:r,dashboardId:n,dashboardInfo:i,dashboardTitle:p,onHide:x=()=>{},onlyApply:z=!1,onSubmit:P=()=>{},show:F=!1})=>{var D,j,U,I,L,M,N;let G=(0,A.wA)(),[H]=d.l.useForm(),[q,B]=(0,l.useState)(!0),[J,V]=(0,l.useState)(!1),[W,K]=(0,l.useState)(r),[Q,X]=(0,l.useState)(""),[Z,ee]=(0,l.useState)(),et=(0,h.p)(Q,{errorPrefix:"Invalid JSON metadata"}),[ea,eo]=(0,l.useState)([]),[ec,eu]=(0,l.useState)([]),eh=z?(0,g.t)("Apply"):(0,g.t)("Save"),[ep,em]=(0,l.useState)([]),[eg,ef]=(0,l.useState)(""),[ev,eb]=(0,l.useState)(0),[ey,ew]=(0,l.useState)(null),[ex,eS]=(0,l.useState)(!1),[eC,eT]=(0,l.useState)([]),eA=(0,f.A)(),eE=(0,l.useRef)({}),e$=(0,l.useRef)(null),eY=(0,l.useRef)(null),ek=e=>{var r;return(r=function*(){let{error:r,statusText:a,message:l}=yield(0,v.h4)(e),n=r||a||(0,g.t)("An error has occurred");"object"==typeof l&&"json_metadata"in l&&"string"==typeof l.json_metadata?n=l.json_metadata:"string"==typeof l&&(n=l,"Forbidden"===l&&(n=(0,g.t)("You do not have permission to edit this dashboard"))),t(String(n))},function(){var e=this,t=arguments;return new Promise(function(a,l){var n=r.apply(e,t);function o(e){es(n,a,l,o,i,"next",e)}function i(e){es(n,a,l,o,i,"throw",e)}o(void 0)})})()},eO=(0,l.useCallback)(e=>{var t;let{id:r,dashboard_title:a,slug:l,certified_by:n,certification_details:i,owners:d,roles:c,metadata:u,is_managed_externally:h,theme:p,css:m}=e,g={id:r,title:a,slug:l||"",certifiedBy:n||"",certificationDetails:i||"",isManagedExternally:h||!1,css:m||"",metadata:u};H.setFieldsValue(g),ee(g),eo(d),eu(c),ef(m||""),null===e$.current&&(e$.current=m||""),K(null==u?void 0:u.color_scheme),ew((null==p?void 0:p.id)||null);let f=o()(u,["positions","shared_label_colors","map_label_colors","color_scheme_domain","show_chart_timestamps"]);X(f?s()(f):""),eb((null==u?void 0:u.refresh_frequency)||0),eS(null!=(t=null==u?void 0:u.show_chart_timestamps)&&t),eE.current=u},[H]),ez=(0,l.useCallback)(()=>{b.A.get({endpoint:`/api/v1/dashboard/${n}`}).then(e=>{var t;let r=e.json.result,a=(null==(t=r.json_metadata)?void 0:t.length)?JSON.parse(r.json_metadata):{};eO(ed({},r,{metadata:a})),B(!1)},ek)},[n,eO]),eP=()=>{try{return(null==Q?void 0:Q.length)?JSON.parse(Q):{}}catch(e){return{}}},e_=(e="",{updateMetadata:r=!0}={})=>{let a=eA.keys(),l=eP();if(e&&!a.includes(e))throw t((0,g.t)("A valid color scheme is required")),x(),Error("A valid color scheme is required");l.color_scheme=e,l.label_colors=l.label_colors||{},K(e),G((0,E.r7)(e)),r&&X(s()(l))};(0,l.useEffect)(()=>{F&&(e$.current=null)},[F]),(0,l.useEffect)(()=>{if(F){B(!0),i?(eO(i),B(!1)):ez();let e=m().encode({columns:["id","theme_name","is_system","json_data"],filters:[{col:"is_system",opr:"eq",value:!1}]});b.A.get({endpoint:`/api/v1/theme/?q=${e}`}).then(({json:e})=>{eT(e.result)}).catch(()=>{t((0,g.t)("An error occurred while fetching available themes"))})}},[i,ez,eO,F,t]),(0,l.useEffect)(()=>{p&&Z&&Z.title!==p&&H.setFieldsValue(ed({},Z,{title:p}))},[Z,p,H]),(0,l.useEffect)(()=>{if((0,w.G7)(w.TO.TaggingSystem))try{(0,C.un)({objectType:C.iQ.DASHBOARD,objectId:n,includeTypes:!1},e=>em(e),e=>{t(`Error fetching tags: ${e.text}`)})}catch(e){ek(e)}},[n]);let eF=!!Object.keys((null==(D=eP())?void 0:D.label_colors)||{}).length,eD=(0,l.useMemo)(()=>[{key:"basic",name:(0,g.t)("General information"),validator:()=>{let e=[],t=H.getFieldsValue();return t.title&&0!==t.title.trim().length||e.push((0,g.t)("Dashboard name is required")),e}},{key:"access",name:(0,g.t)("Access & ownership"),validator:()=>[]},{key:"styling",name:(0,g.t)("Styling"),validator:()=>[]},{key:"refresh",name:(0,g.t)("Refresh settings"),validator:()=>{var e,t;let r=null==Z||null==(t=Z.common)||null==(e=t.conf)?void 0:e.SUPERSET_DASHBOARD_PERIODICAL_REFRESH_LIMIT;return(0,O.ec)(ev,r)}},{key:"certification",name:(0,g.t)("Certification"),validator:()=>[]},{key:"advanced",name:(0,g.t)("Advanced settings"),validator:()=>et.length>0?[(0,g.t)("Invalid JSON metadata")]:[]}],[H,et,ev,Z]),{validationStatus:ej,validateAll:eR,validateSection:eU,errorTooltip:eI,hasErrors:eL}=(0,k.IQ)({sections:eD}),eM=!q&&Z,eN=(0,l.useCallback)(e=>{ef(e),eY.current&&(clearTimeout(eY.current),eY.current=null),eY.current=setTimeout(()=>{G((0,$.PD)({css:e}))},500)},[G]);return(0,l.useEffect)(()=>()=>{eY.current&&(clearTimeout(eY.current),eY.current=null)},[]),(0,l.useEffect)(()=>{eM&&eU("basic")},[p,eU,eM]),(0,l.useEffect)(()=>{eM&&eU("advanced")},[Q,eU,eM]),(0,l.useEffect)(()=>{eM&&eU("refresh")},[ev,eU,eM]),(0,a.Y)(k.xQ,{show:F,onHide:()=>{if(eY.current&&(clearTimeout(eY.current),eY.current=null),null!==e$.current){var e;G((0,$.PD)({css:e$.current})),G((0,E.r7)(null!=(e=eE.current.color_scheme)?e:""))}x()},onSave:()=>{eR()&&H.submit()},title:(0,g.t)("Dashboard properties"),isEditMode:!0,saveDisabled:(null==Z?void 0:Z.isManagedExternally)||eL,saveLoading:J,contentLoading:q,errorTooltip:(null==Z?void 0:Z.isManagedExternally)?(0,g.t)("This dashboard is managed externally, and can't be edited in Superset"):eI,saveText:eh,wrapProps:{"data-test":"properties-edit-modal"},children:(0,a.Y)(d.l,{form:H,onFinish:()=>{let a,{title:l,slug:o,certifiedBy:i,certificationDetails:d}=H.getFieldsValue(),c=Q;try{if(!c.startsWith("{")||!c.endsWith("}"))throw Error();a=JSON.parse(c)}catch(e){t((0,g.t)("JSON metadata is invalid!"));return}let u=(0,T.Z6)(null==a?void 0:a.color_namespace),h=(null==a?void 0:a.color_scheme)||W,p=h!==eE.current.color_scheme,m=!(0,Y.r$)(eE.current.label_colors||{},(null==a?void 0:a.label_colors)||{}),f=Object.keys((null==a?void 0:a.label_colors)||{}),v=Object.keys(eE.current.label_colors||{}),y=f.length>0?f:v,S=!!m&&y.length>0&&y,C=eP();C.refresh_frequency=ev,C.show_chart_timestamps=!!ex;let A=C.label_colors||{},$=ed({},eE.current,{label_colors:A,color_scheme:h,show_chart_timestamps:ex});eE.current=$,(0,T.D2)($,p||S),G((0,E.Qn)(ed({},$,{map_label_colors:(0,T.xV)(A)}))),e_(h,{updateMetadata:!1}),c=s()(C);let k={},O={};(0,w.G7)(w.TO.DashboardRbac)&&(k.roles=ec,O.roles=(ec||[]).map(e=>e.id)),(0,w.G7)(w.TO.TaggingSystem)&&(k.tags=ep,O.tags=ep.map(e=>e.id));let _=ed({id:n,title:l,slug:o,jsonMetadata:c,owners:ea,colorScheme:r,colorNamespace:u,certifiedBy:i,certificationDetails:d,theme:ey?eC.find(e=>e.id===ey):null,css:eg},k);if(z){V(!0);try{P(_),x(),e((0,g.t)("Dashboard properties updated"))}catch(e){console.error("Apply failed:",e)}finally{V(!1)}}else{let t=ed({dashboard_title:l,slug:o||null,json_metadata:c||null,owners:(ea||[]).map(e=>e.id),certified_by:i||null,certification_details:i&&d?d:null,css:eg||null,theme_id:ey},O);b.A.put({endpoint:`/api/v1/dashboard/${n}`,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(()=>{P(_),x(),e((0,g.t)("The dashboard has been saved"))},ek)}},onFieldsChange:()=>{eM&&eU("basic")},"data-test":"dashboard-edit-properties-form",layout:"vertical",initialValues:Z,children:(0,a.Y)(c.S,{expandIconPosition:"end",defaultActiveKey:"basic",accordion:!0,modalMode:!0,items:[{key:"basic",label:(0,a.Y)(u.s,{title:(0,g.t)("General information"),subtitle:(0,g.t)("Dashboard name and URL configuration"),validateCheckStatus:!(null==(j=ej.basic)?void 0:j.hasErrors),testId:"basic-section"}),children:(0,a.Y)(_,{form:H,validationStatus:ej})},{key:"access",label:(0,a.Y)(u.s,{title:(0,g.t)("Access & ownership"),subtitle:(0,g.t)("Manage dashboard owners and access permissions"),validateCheckStatus:!(null==(U=ej.access)?void 0:U.hasErrors),testId:"access-section"}),children:(0,a.Y)(R,{isLoading:q,owners:ea,roles:ec,tags:ep,onChangeOwners:(e,t)=>{eo((0,y.A)(e).map((e,r)=>{var a,l;return{id:e.value,full_name:(null==t||null==(a=t[r])?void 0:a[S.N6])||("string"==typeof e.label?e.label:""),email:(null==t||null==(l=t[r])?void 0:l[S.rb])||""}}))},onChangeRoles:e=>{eu((0,y.A)(e).map(e=>({id:e.value,name:e.label})))},onChangeTags:e=>{em((0,y.A)(e).map(e=>({id:e.value,name:e.label})))},onClearTags:()=>{em([])}})},{key:"styling",label:(0,a.Y)(u.s,{title:(0,g.t)("Styling"),subtitle:(0,g.t)("Configure dashboard appearance, colors, and custom CSS"),validateCheckStatus:!(null==(I=ej.styling)?void 0:I.hasErrors),testId:"styling-section"}),children:(0,a.Y)(er,{themes:eC,selectedThemeId:ey,colorScheme:W,customCss:eg,hasCustomLabelsColor:eF,showChartTimestamps:ex,onThemeChange:e=>ew(e||null),onColorSchemeChange:e_,onCustomCssChange:eN,onShowChartTimestampsChange:eS,addDangerToast:t})},{key:"refresh",label:(0,a.Y)(u.s,{title:(0,g.t)("Refresh settings"),subtitle:(0,g.t)("Configure automatic dashboard refresh"),validateCheckStatus:!(null==(L=ej.refresh)?void 0:L.hasErrors),testId:"refresh-section"}),children:(0,a.Y)(el,{refreshFrequency:ev,onRefreshFrequencyChange:e=>eb(e)})},{key:"certification",label:(0,a.Y)(u.s,{title:(0,g.t)("Certification"),subtitle:(0,g.t)("Add certification details for this dashboard"),validateCheckStatus:!(null==(M=ej.certification)?void 0:M.hasErrors),testId:"certification-section"}),children:(0,a.Y)(en,{isLoading:q})},{key:"advanced",label:(0,a.Y)(u.s,{title:(0,g.t)("Advanced settings"),subtitle:(0,g.t)("JSON metadata and advanced configuration"),validateCheckStatus:!(null==(N=ej.advanced)?void 0:N.hasErrors),testId:"advanced-section"}),children:(0,a.Y)(ei,{jsonMetadata:Q,jsonAnnotations:et,validationStatus:ej,onJsonMetadataChange:X})}]})})})})},4298(e,t,r){"use strict";r.d(t,{Jc:()=>v,ec:()=>f,ux:()=>g});var a=r(2445),l=r(24002),n=r(27124),o=r(85614),i=r(22022),s=r(891);let d=(0,o.styled)(s.s.Group)`
  padding-left: ${({theme:e})=>2*e.sizeUnit}px;

  .ant-radio-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: ${({theme:e})=>.5*e.sizeUnit}px;

    &:last-child {
      margin-bottom: ${({theme:e})=>e.sizeUnit}px;
    }
  }
`,c=o.styled.div`
  display: flex;
  align-items: center;

  .ant-input {
    width: 80px;
    margin-left: ${({theme:e})=>e.sizeUnit}px;
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,u=[{value:0,label:(0,n.t)("Don't refresh")},{value:10,label:(0,n.t)("10 seconds")},{value:30,label:(0,n.t)("30 seconds")},{value:60,label:(0,n.t)("1 minute")},{value:300,label:(0,n.t)("5 minutes")},{value:1800,label:(0,n.t)("30 minutes")},{value:3600,label:(0,n.t)("1 hour")},{value:21600,label:(0,n.t)("6 hours")},{value:43200,label:(0,n.t)("12 hours")},{value:86400,label:(0,n.t)("24 hours")},{value:-1,label:(0,n.t)("Custom")}],h=e=>u.some(t=>t.value===e&&-1!==t.value),p=e=>!h(e)&&e>0?e.toString():"",m=e=>{if(e&&!(e<=0))return e>=1e3&&e%1e3==0?e/1e3:e},g=({value:e,onChange:t})=>{let[r,o]=(0,l.useState)(()=>h(e)?e:-1),[m,g]=(0,l.useState)(()=>p(e));return(0,l.useEffect)(()=>{let t=h(e)?e:-1;o(t),g(-1===t?p(e):"")},[e]),(0,a.FD)(d,{value:r,onChange:e=>{let r=Number(e.target.value);o(r),-1===r?(t(parseInt(m,10)||1),m||g("1")):t(r)},children:[u.slice(0,-1).map(e=>(0,a.Y)(s.s,{value:e.value,children:e.label},e.value)),(0,a.Y)(s.s,{value:-1,children:(0,a.FD)(c,{children:[(0,n.t)("Custom"),(0,a.Y)(i.Input,{type:"number",min:1,value:m,onChange:e=>{let r=e.target.value;g(r);let a=parseInt(r,10);a>=1&&t(a)},placeholder:"1+",disabled:-1!==r,onClick:e=>e.stopPropagation()}),(0,a.Y)("span",{children:(0,n.t)("seconds")})]})})]})},f=(e,t)=>{let r=[],a=m(t);return a&&e>0&&e<a&&r.push((0,n.t)("Refresh frequency must be at least %s seconds",a)),r},v=(e,t,r)=>{let a=m(t);return e>0&&a&&e<a&&r?r:null}},91129(e,t,r){"use strict";r.d(t,{Jc:()=>a.Jc,ec:()=>a.ec,ux:()=>a.ux});var a=r(4298)},74821(e,t,r){"use strict";r.d(t,{A:()=>i});var a=r(2445),l=r(17437),n=r(24002),o=r(8563);function i(e){let{id:t,label:r,colors:i}=e,[s,d]=(0,n.useState)(!1),c=(0,n.useRef)(null),u=(0,n.useRef)(null),h=()=>i.map((e,r)=>(0,a.Y)("span",{"data-test":"color",css:t=>(0,l.AH)`
          padding-left: ${t.sizeUnit/2}px;
          :before {
            content: '';
            display: inline-block;
            background-color: ${e};
            border: 1px solid ${"white"===e?"black":e};
            width: 9px;
            height: 10px;
          }
        `},`${t}-${r}`));return(0,a.Y)(o.m,{"data-testid":"tooltip",overlayClassName:"color-scheme-tooltip",title:()=>(0,a.FD)(a.FK,{children:[(0,a.Y)("span",{children:r}),(0,a.Y)("div",{children:h()})]}),open:s,children:(0,a.FD)("span",{className:"color-scheme-option",onMouseEnter:()=>{let e=c.current,t=u.current;e&&t&&(e.scrollWidth>e.offsetWidth||e.scrollHeight>e.offsetHeight||t.scrollWidth>t.offsetWidth||t.scrollHeight>t.offsetHeight)&&d(!0)},onMouseLeave:()=>{d(!1)},css:(0,l.AH)`
          display: flex;
          align-items: center;
          justify-content: flex-start;
        `,"data-test":t,children:[(0,a.Y)("span",{className:"color-scheme-label",ref:c,css:e=>(0,l.AH)`
            min-width: 125px;
            padding-right: ${2*e.sizeUnit}px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          `,children:r}),(0,a.Y)("span",{ref:u,css:e=>(0,l.AH)`
            flex: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            padding-right: ${e.sizeUnit}px;
          `,children:h()})]})},t)}},36652(e,t,r){"use strict";r.d(t,{FA:()=>d,Ik:()=>h,dH:()=>u,iQ:()=>s,un:()=>c});var a=r(73815),l=r(58561),n=r.n(l),o=r(20567);let i=Object.freeze(["dashboard","chart","saved_query"]),s=Object.freeze({DASHBOARD:"dashboard",CHART:"chart",QUERY:"saved_query"});function d(e,t,r){a.A.get({endpoint:`/api/v1/tag/${e}`}).then(({json:e})=>t(e.result)).catch(e=>r(e))}function c({objectType:e,objectId:t},r,l){if(void 0===e||void 0===t)throw Error("Need to specify objectType and objectId");if(!i.includes(e))throw Error(`objectType ${e} is invalid`);a.A.get({endpoint:`/api/v1/${e}/${t}`}).then(({json:e})=>r(e.result.tags.filter(e=>e.type===o.U.Custom))).catch(e=>l(e))}function u(e,t,r){let l=e.map(e=>e.name);a.A.delete({endpoint:`/api/v1/tag/?q=${n().encode(l)}`}).then(({json:e})=>e.message?t(e.message):t("Successfully Deleted Tag")).catch(e=>{let t=e.message;return t?r(t):r("Error Deleting Tag")})}function h({tagIds:e=[],types:t},r,l){let n=`/api/v1/tag/get_objects/?tagIds=${e}`;t&&(n+=`&types=${t}`),a.A.get({endpoint:n}).then(({json:e})=>r(e.result)).catch(e=>l(e))}},79923(e,t,r){"use strict";r.d(t,{A:()=>c});var a=r(73815),l=r(79924),n=r(58561),o=r.n(n),i=r(71164),s=r.n(i);function d(e,t,r,a,l,n,o){try{var i=e[n](o),s=i.value}catch(e){r(e);return}i.done?t(s):Promise.resolve(s).then(a,l)}function c(e,t,r){var n;return(n=function*(){let n=`/api/v1/${e}/export/?q=${o().encode(t)}`;try{let t=yield a.A.get({endpoint:n,headers:{Accept:"application/zip, application/x-zip-compressed, text/plain"},parseMethod:"raw"}),o=t.headers.get("Content-Length");o&&parseInt(o,10)>0x6400000&&l.A.warn(`Export file size (${o} bytes) exceeds maximum blob size (104857600 bytes). Large exports may cause memory issues.`);let u=t.headers.get("Content-Disposition"),h=`${e}_export.zip`;if(u)try{var i;let e=s().parse(u);(null==e||null==(i=e.parameters)?void 0:i.filename)&&(h=e.parameters.filename)}catch(e){l.A.warn("Failed to parse Content-Disposition header:",e)}var d=yield t.blob(),c=h;let p=window.URL.createObjectURL(d);try{let e=document.createElement("a");e.href=p,e.download=c,e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e)}finally{window.URL.revokeObjectURL(p)}r()}catch(e){throw l.A.error("Resource export failed:",e),r(),e}},function(){var e=this,t=arguments;return new Promise(function(r,a){var l=n.apply(e,t);function o(e){d(l,r,a,o,i,"next",e)}function i(e){d(l,r,a,o,i,"throw",e)}o(void 0)})})()}},9603(){}}]);