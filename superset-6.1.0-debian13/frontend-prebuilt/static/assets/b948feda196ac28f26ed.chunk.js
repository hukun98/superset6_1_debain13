"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3039],{61920(e,t,l){l.d(t,{l:()=>d});var a=l(2445),n=l(27124),i=l(85614),r=l(54295);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}let s={everyText:(0,n.t)("every"),emptyMonths:(0,n.t)("every month"),emptyMonthDays:(0,n.t)("every day of the month"),emptyMonthDaysShort:(0,n.t)("day of the month"),emptyWeekDays:(0,n.t)("every day of the week"),emptyWeekDaysShort:(0,n.t)("day of the week"),emptyHours:(0,n.t)("every hour"),emptyMinutes:(0,n.t)("every minute"),emptyMinutesForHourPeriod:(0,n.t)("every"),yearOption:(0,n.t)("year"),monthOption:(0,n.t)("month"),weekOption:(0,n.t)("week"),dayOption:(0,n.t)("day"),hourOption:(0,n.t)("hour"),minuteOption:(0,n.t)("minute"),rebootOption:(0,n.t)("reboot"),prefixPeriod:(0,n.t)("Every"),prefixMonths:(0,n.t)("in"),prefixMonthDays:(0,n.t)("on"),prefixWeekDays:(0,n.t)("on"),prefixWeekDaysForMonthAndYearPeriod:(0,n.t)("or"),prefixHours:(0,n.t)("at"),prefixMinutes:(0,n.t)(":"),prefixMinutesForHourPeriod:(0,n.t)("at"),suffixMinutesForHourPeriod:(0,n.t)("minute(s)"),errorInvalidCron:(0,n.t)("Invalid cron expression"),clearButtonText:(0,n.t)("Clear"),weekDays:[(0,n.t)("Sunday"),(0,n.t)("Monday"),(0,n.t)("Tuesday"),(0,n.t)("Wednesday"),(0,n.t)("Thursday"),(0,n.t)("Friday"),(0,n.t)("Saturday")],months:[(0,n.t)("January"),(0,n.t)("February"),(0,n.t)("March"),(0,n.t)("April"),(0,n.t)("May"),(0,n.t)("June"),(0,n.t)("July"),(0,n.t)("August"),(0,n.t)("September"),(0,n.t)("October"),(0,n.t)("November"),(0,n.t)("December")],altWeekDays:[(0,n.t)("SUN"),(0,n.t)("MON"),(0,n.t)("TUE"),(0,n.t)("WED"),(0,n.t)("THU"),(0,n.t)("FRI"),(0,n.t)("SAT")],altMonths:[(0,n.t)("JAN"),(0,n.t)("FEB"),(0,n.t)("MAR"),(0,n.t)("APR"),(0,n.t)("MAY"),(0,n.t)("JUN"),(0,n.t)("JUL"),(0,n.t)("AUG"),(0,n.t)("SEP"),(0,n.t)("OCT"),(0,n.t)("NOV"),(0,n.t)("DEC")]},d=(0,i.styled)(e=>(0,a.Y)(r.Ay,o({locale:s},e)))`
  ${({theme:e})=>`

    /* Boilerplate styling for ReactCronPicker imported explicitly in GlobalStyles.tsx */

    /* When year period is selected */

    :has(.react-js-cron-months) {
      display: grid !important;
      grid-template-columns: repeat(2, 50%);
      column-gap: ${e.sizeUnit}px;
      row-gap: ${2*e.sizeUnit}px;
      div:has(.react-js-cron-hours) {
        grid-column: span 2;
        display: flex;
        justify-content: space-between;
        .react-js-cron-field {
          width: 50%;
        }
      }
    }

    /* When month period is selected */

    :not(:has(.react-js-cron-months)) {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      column-gap: ${e.sizeUnit}px;
      row-gap: ${2*e.sizeUnit}px;
      .react-js-cron-period {
        grid-column: span 2;
      }
      div:has(.react-js-cron-hours) {
        grid-column: span 2;
        display: flex;
        justify-content: space-between;
        .react-js-cron-field {
          width: 50%;
        }
      }
    }

    /* When week period is selected */

    :not(:has(.react-js-cron-month-days)) {
      .react-js-cron-week-days {
        grid-column: span 2;
      }
    }

    /* For proper alignment of inputs and span elements */

    :not(div:has(.react-js-cron-hours)) {
      display: flex;
      flex-wrap: nowrap;
    }

    div:has(.react-js-cron-hours) {
      width: 100%;
    }

    .react-js-cron-minutes > span {
      padding-left: ${e.sizeUnit}px;
    }

    /* Sizing of select container */

    .react-js-cron-select.ant-select {
      width: 100%;
      .ant-select-selector {
        flex-wrap: nowrap;
      }
    }

    .react-js-cron-field {
      width: 100%;
      margin-bottom: 0px;
      > span {
        margin-left: 0px;
      }
    }

    .react-js-cron-custom-select .ant-select-selection-placeholder {
      flex: auto;
      border-radius: ${e.borderRadius}px;
    }

    .react-js-cron-custom-select .ant-select-selection-overflow-item {
      align-self: center;
    }

    .react-js-cron-select > div:first-of-type,
    .react-js-cron-custom-select {
      border-radius: ${e.borderRadius}px;
    }
  `}
`},82165(e,t,l){l.d(t,{GI:()=>n,hp:()=>s,sy:()=>d});var a=l(45507);l(88569);let n={name:"GMT Standard Time",value:"Africa/Abidjan"},i=a.XV.tz("2021-01-01"),r=a.XV.tz("2021-07-01"),o={"-300-240":["Eastern Standard Time","Eastern Daylight Time"],"-360-300":["Central Standard Time","Central Daylight Time"],"-420-360":["Mountain Standard Time","Mountain Daylight Time"],"-420-420":["Mountain Standard Time - Phoenix","Mountain Standard Time - Phoenix"],"-480-420":["Pacific Standard Time","Pacific Daylight Time"],"-540-480":["Alaska Standard Time","Alaska Daylight Time"],"-600-600":["Hawaii Standard Time","Hawaii Daylight Time"],60120:["Central European Time","Central European Daylight Time"],"00":[n.name,n.name],"060":["GMT Standard Time - London","British Summer Time"]};function s(e){return i.tz(e).utcOffset().toString()+r.tz(e).utcOffset().toString()}let d=new class{isCached(){return null!==this.cachedOptions}getOptions(){return this.cachedOptions}computeOptions(){let e=(0,a.XV)(new Date),t=Intl.supportedValuesOf("timeZone"),l=new Set,n=[];for(let i of t){let t=this.getOffsetKey(i),r=function(e,t,l,n){let i=l(e),r=t.tz(e),o=(0,a._q)(r,e),s=n[i];return s?o?s[1]:s[0]:e}(i,e,this.getOffsetKey,this.offsetsToName),o=e.tz(i).format("Z"),s=`GMT ${o} (${r})`;l.has(s)||(l.add(s),n.push({label:s,value:i,offsets:t,timezoneName:i}))}return this.cachedOptions=n,n}getOptionsAsync(){return this.cachedOptions?Promise.resolve(this.cachedOptions):(this.computePromise||(this.computePromise=new Promise((e,t)=>{let l=()=>{try{let t=this.computeOptions();e(t)}catch(e){t(e)}finally{this.computePromise=null}};"function"==typeof queueMicrotask?queueMicrotask(l):setTimeout(l,0)})),this.computePromise)}constructor(e,t){this.getOffsetKey=e,this.offsetsToName=t,this.cachedOptions=null,this.computePromise=null}}(s,o)},10164(e,t,l){l.d(t,{A:()=>u});var a=l(2445),n=l(24002),i=l(27124),r=l(68292),o=l(45507),s=l(82165);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}function c(e,t){let l,a=e||o.XV.tz.guess(),n=(0,s.hp)(a);for(let e of t){if(e.offsets===n&&e.timezoneName===a)return e.value;l||e.offsets!==n||(l=e.value)}return l||s.GI.value}function u(e){let{onTimezoneChange:t,timezone:l,minWidth:u="400px",placeholder:h}=e,p=function(e,t){if(null==e)return{};var l,a,n={},i=Object.getOwnPropertyNames(e);for(a=0;a<i.length;a++)!(t.indexOf(l=i[a])>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l]);return n}(e,["onTimezoneChange","timezone","minWidth","placeholder"]),[m,v]=(0,n.useState)(s.sy.getOptions()),[f,b]=(0,n.useState)(!1),g=(0,n.useRef)(!1),_=(0,n.useCallback)(e=>{!e||m||f||(b(!0),s.sy.getOptionsAsync().then(e=>{v(e)}).finally(()=>b(!1)))},[m,f]),y=(0,n.useMemo)(()=>{if(!m)return;let e=(0,o.XV)();return(t,l)=>e.tz(t.timezoneName).utcOffset()-e.tz(l.timezoneName).utcOffset()},[m]),T=(0,n.useMemo)(()=>m?c(l,m):l||void 0,[l,m]);(0,n.useEffect)(()=>{m||f||(b(!0),s.sy.getOptionsAsync().then(e=>{v(e),l||g.current||(t(c(null,e)),g.current=!0)}).finally(()=>{b(!1)}))},[m,f,l,t]),(0,n.useEffect)(()=>{!m||l||g.current||(t(c(null,m)),g.current=!0)},[m,l,t]);let E=m?T:void 0;return(0,a.Y)(r.A,d({ariaLabel:(0,i.t)("Timezone selector"),onChange:e=>{t(e)},onOpenChange:_,value:E,options:m||[],sortComparator:y,loading:f,placeholder:f?(0,i.t)("Loading timezones..."):h,placement:"topLeft"},p))}l(88569)},97616(e,t,l){l.d(t,{A:()=>b});var a=l(2445),n=l(24002),i=l(38221),r=l.n(i),o=l(22022),s=l(87552),d=l(29138),c=l(97887),u=l(8563),h=l(27124),p=l(98837);l(15850);var m=l(36320);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}class f extends n.Component{componentDidUpdate(e){this.props.onChange!==e.onChange&&this.props.debounceDelay&&this.props.onChange&&(this.debouncedOnChange&&this.debouncedOnChange.cancel(),this.debouncedOnChange=r()(this.props.onChange,this.props.debounceDelay))}handleChange(e){let t="object"==typeof e?e.target.value:e;this.debouncedOnChange?this.debouncedOnChange(t):null==this.props.onChange||this.props.onChange.call(this.props,t)}componentWillUnmount(){this.debouncedOnChange&&this.debouncedOnChange.flush()}renderEditor(e=!1){let t=this.props,{theme:l,height:n,offerEditInModal:i,aboveEditorSection:r,resize:d,textAreaStyles:c,tooltipOptions:p,hotkeys:m,debounceDelay:f,language:b,initialValue:g,readOnly:_,name:y,onChange:T,value:E,minLines:N,maxLines:S}=t,C=function(e,t){if(null==e)return{};var l,a,n={},i=Object.getOwnPropertyNames(e);for(a=0;a<i.length;a++)!(t.indexOf(l=i[a])>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l]);return n}(t,["theme","height","offerEditInModal","aboveEditorSection","resize","textAreaStyles","tooltipOptions","hotkeys","debounceDelay","language","initialValue","readOnly","name","onChange","value","minLines","maxLines"]),O=e?40:N||12;if(b){let t=v({border:(null==l?void 0:l.colorBorder)?`1px solid ${l.colorBorder}`:void 0,minHeight:`${O}em`,width:"auto"},c);d&&(t.resize=d,t.overflow="auto"),_&&(t.backgroundColor=null==l?void 0:l.colorBgMask);let n=(0,a.Y)("div",{children:(0,a.Y)(s.S9,v({mode:b,style:t,minLines:O,maxLines:e?1e3:S,editorProps:{$blockScrolling:!0},onLoad:e=>{null==m||m.forEach(t=>{e.commands.addCommand({name:t.name,bindKey:{win:t.key,mac:t.key},exec:t.func})})},defaultValue:null!=g?g:E,readOnly:_},C,{onChange:this.handleChange.bind(this)}),y)});return p?(0,a.Y)(u.m,v({},p,{children:n})):n}let R=(0,a.Y)("div",{children:(0,a.Y)(o.Input.TextArea,{placeholder:(0,h.t)("textarea"),onChange:this.handleChange.bind(this),defaultValue:this.props.initialValue,disabled:this.props.readOnly,style:{height:this.props.height},"aria-required":this.props["aria-required"]})});return this.props.tooltipOptions?(0,a.Y)(u.m,v({},this.props.tooltipOptions,{children:R})):R}renderModalBody(){return(0,a.FD)(a.FK,{children:[(0,a.Y)("div",{children:this.props.aboveEditorSection}),this.renderEditor(!0)]})}render(){var e,t;let l=(0,a.Y)(m.A,v({},this.props));return(0,a.FD)("div",{children:[l,this.renderEditor(),this.props.offerEditInModal&&(0,a.Y)(c.g,{modalTitle:l,triggerNode:(0,a.Y)(d.$n,{buttonSize:"small",style:{marginTop:null!=(e=null==(t=this.props.theme)?void 0:t.sizeUnit)?e:4},children:(0,h.t)("Edit %s in modal",this.props.language)}),modalBody:this.renderModalBody(),responsive:!0})]})}constructor(e){super(e),e.debounceDelay&&e.onChange&&(this.debouncedOnChange=r()(e.onChange,e.debounceDelay))}}f.defaultProps={onChange:()=>{},height:250,minLines:3,maxLines:10,offerEditInModal:!0,readOnly:!1,resize:null,textAreaStyles:{},tooltipOptions:{},hotkeys:[],debounceDelay:null};let b=(0,p.b)(f)},63039(e,t,l){l.d(t,{tu:()=>em,b5:()=>eg,Ay:()=>ey});var a,n=l(2445),i=l(24002),r=l(27124),o=l(13048),s=l(19202),d=l(51281),c=l(73815),u=l(85614),h=l(17437),p=l(58561),m=l.n(p),v=l(18847),f=l(7070),b=l(44222),g=l(57885),_=l(22022),y=l(68292),T=l(10938),E=l(80023),N=l(62858),S=l(80967),C=l(57832),O=l(29138),R=l(10020),x=l(10164),A=l(82165),I=l(97616),F=l(98267),D=l(50170),Y=l(54299),L=l(61225),w=l(61581),k=l(48511),M=l(60685),z=l(81549);function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}function V(e){let{timeUnit:t,min:l,name:a,value:r,placeholder:o,onChange:s}=e,d=function(e,t){if(null==e)return{};var l,a,n={},i=Object.getOwnPropertyNames(e);for(a=0;a<i.length;a++)!(t.indexOf(l=i[a])>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l]);return n}(e,["timeUnit","min","name","value","placeholder","onChange"]),[c,u]=(0,i.useState)(!1);return(0,n.Y)(_.Input,$({type:"text",min:l,name:a,value:r?`${r}${!c?` ${t}`:""}`:"",placeholder:o,onFocus:()=>u(!0),onBlur:()=>u(!1),onChange:s},d))}var j=l(61920),P=((a=P||{}).Picker="picker",a.Input="input",a);let U=[{label:(0,r.t)("Recurring (every)"),value:"picker"},{label:(0,r.t)("CRON Schedule"),value:"input"}],q=({value:e,onChange:t})=>{let l=(0,u.useTheme)(),[a,o]=(0,i.useState)("picker"),s=(0,i.useCallback)(e=>{t(e)},[t]),d=(0,i.useCallback)(e=>{t(e.target.value)},[t]),c=(0,i.useCallback)(()=>{t(e||"")},[t,e]),[h,p]=(0,i.useState)();return(0,n.FD)(n.FK,{children:[(0,n.FD)(em,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,r.t)("Schedule type"),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(y.A,{ariaLabel:(0,r.t)("Schedule type"),placeholder:(0,r.t)("Schedule type"),onChange:e=>{o(e)},value:a,options:U})})]}),(0,n.FD)(em,{"data-test":"input-content",className:"styled-input",children:[(0,n.FD)("div",{className:"control-label",children:[(0,r.t)("Schedule"),(0,n.Y)("span",{className:"required",children:"*"})]}),"input"===a&&(0,n.Y)(_.Input,{type:"text",name:"crontab",style:h?{borderColor:l.colorError}:{},placeholder:(0,r.t)("CRON expression"),value:e,onBlur:d,onChange:e=>s(e.target.value),onPressEnter:c}),"picker"===a&&(0,n.Y)(j.l,{clearButton:!1,value:e,setValue:s,displayError:"picker"===a,onError:p})]})]})};var G=l(41947);function X(e,t,l,a,n,i,r){try{var o=e[i](r),s=o.value}catch(e){l(e);return}o.done?t(s):Promise.resolve(s).then(a,n)}function B(e){return function(){var t=this,l=arguments;return new Promise(function(a,n){var i=e.apply(t,l);function r(e){X(i,a,n,r,o,"next",e)}function o(e){X(i,a,n,r,o,"throw",e)}r(void 0)})}}function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}let Z=u.styled.div`
  ${({theme:e})=>`
    margin-bottom: ${3*e.sizeUnit}px;

    .input-container {
      textarea {
        height: auto;
      }

      &.error {
        input {
          border-color: ${e.colorError};
        }
      }

      .helper {
        margin-top: ${2*e.sizeUnit}px;
        font-size: ${e.fontSizeSM}px;
        color: ${e.colorTextSecondary};
      }
    }

    .inline-container {
      margin-bottom: ${2*e.sizeUnit}px;

      > div {
        margin: 0px;
      }

      .delete-button {
        margin-left: ${2*e.sizeUnit}px;
        padding-top: ${e.sizeUnit}px;
      }
      .anticon {
        margin-left: ${e.sizeUnit}px;
      }
    }

    .ghost-button {
      color: ${e.colorPrimaryText};
      display: inline-flex;
      align-items: center;
      font-size: ${e.fontSizeSM}px;
      cursor: pointer;

      .icon {
        width: ${3*e.sizeUnit}px;
        height: ${3*e.sizeUnit}px;
        font-size: ${e.fontSizeSM}px;
        margin-right: ${e.sizeUnit}px;
      }
    }

    .ghost-button + .ghost-button {
      margin-left: ${4*e.sizeUnit}px;
    }

    .ghost-button:first-child[style*='none'] + .ghost-button {
      margin-left: 0px; /* Remove margin when the first button is hidden */
    }
  `}
`,K={EMAIL_CC_NAME:(0,r.t)("CC recipients"),EMAIL_BCC_NAME:(0,r.t)("BCC recipients"),EMAIL_SUBJECT_NAME:(0,r.t)("Email subject name (optional)"),EMAIL_SUBJECT_ERROR_TEXT:(0,r.t)("Please enter valid text. Spaces alone are not permitted.")},H=({setting:e=null,index:t,onUpdate:l,onRemove:a,onInputChange:o,email_subject:s,defaultSubject:h,setErrorSubject:p})=>{let{method:v,recipients:f,cc:b,bcc:g,options:T}=e||{},[E,N]=(0,i.useState)(f||""),[S,C]=(0,i.useState)([]),[O,R]=(0,i.useState)(!1),[x,A]=(0,i.useState)(!!b),[I,F]=(0,i.useState)(!!g),[Y,L]=(0,i.useState)(b||""),[w,k]=(0,i.useState)(g||""),z=(0,u.useTheme)(),[$,V]=(0,i.useState)(!0),[j,P]=(0,i.useState)([{label:"",options:[]}]),[U,q]=(0,i.useState)(!1),[X,H]=(0,i.useState)(!0),J=({force:e}={})=>B(function*(){H(!0),(({searchString:e="",types:t=[],exactMatch:l=!1,force:a=!1}={})=>B(function*(){let n=m().encode({searchString:e,types:t,exactMatch:l,force:a}),i=`/api/v1/report/slack_channels/?q=${n}`;return c.A.get({endpoint:i})})())({types:["public_channel","private_channel"],force:e}).then(({json:e})=>{let t,l,{result:a}=e,n=(t=[],l=[],a.forEach(e=>{e.is_private?l.push(e):t.push(e)}),[{label:"Public Channels",options:t.map(e=>({label:`${e.name} ${e.is_member?"":(0,r.t)("(Bot not in channel)")}`,value:e.id,key:e.id})),key:"public"},{label:(0,r.t)("Private Channels (Bot in channel)"),options:l.map(e=>({label:e.name,value:e.id,key:e.id})),key:"private"}]);if(P(n),(0,d.G7)(d.TO.AlertReportSlackV2)){let[e,t]=n;v&&[D.yV.SlackV2,D.yV.Slack].includes(v)&&C((({method:e,recipientValue:t,slackOptions:l})=>{let a=e===D.yV.SlackV2?"value":"label";return t.split(",").map(e=>l.find(t=>t[a].trim().toLowerCase()===e.trim().toLowerCase())).filter(e=>!!e)})({method:v,recipientValue:E,slackOptions:[...e.options,...t.options]}))}}).catch(e=>{q(!0)}).finally(()=>{V(!1),H(!1)})})();(0,i.useEffect)(()=>{var e;(null==T?void 0:T.some(e=>e===D.yV.Slack||e===D.yV.SlackV2))&&!(null==(e=j[0])?void 0:e.options.length)&&J()},[]);let Q=(0,i.useMemo)(()=>(T||[]).filter(e=>(0,d.G7)(d.TO.AlertReportSlackV2)&&!U&&e===D.yV.SlackV2||(!(0,d.G7)(d.TO.AlertReportSlackV2)||U)&&e===D.yV.Slack||(0,d.G7)(d.TO.AlertReportWebhook)&&e===D.yV.Webhook||e===D.yV.Email).map(e=>({label:e===D.yV.SlackV2?D.yV.Slack:e,value:e})),[T,U]);if(!e)return null;let ee=a=>{let{target:n}=a;N(n.value),l&&l(t,W({},e,{recipients:n.value}))};return f&&E!==f&&N(f),b&&Y!==b&&L(b),g&&w!==g&&k(g),(0,n.FD)(Z,{children:[(0,n.Y)("div",{className:"inline-container",children:(0,n.FD)(em,{children:[(0,n.Y)("div",{className:"control-label",children:(0,r.t)("Notification Method")}),(0,n.FD)("div",{className:"input-container",children:[(0,n.Y)(y.A,{ariaLabel:(0,r.t)("Delivery method"),"data-test":"select-delivery-method",labelInValue:!0,onChange:a=>{N(""),L(""),k(""),l&&e&&l(t,W({},e,{method:a.value,recipients:"",cc:"",bcc:""}))},placeholder:(0,r.t)("Select Delivery Method"),options:Q,showSearch:!0,value:Q.find(e=>e.value===v),loading:$}),0!==t&&a?(0,n.Y)("span",{role:"button",tabIndex:0,className:"delete-button",onClick:()=>a(t),children:(0,n.Y)(M.F.DeleteOutlined,{iconSize:"l"})}):null]})]})}),void 0!==v?(0,n.FD)(n.FK,{children:[v===D.yV.Email?(0,n.Y)("div",{className:"inline-container",children:(0,n.Y)(em,{children:(0,n.FD)(n.FK,{children:[(0,n.Y)("div",{className:"control-label",children:K.EMAIL_SUBJECT_NAME}),(0,n.Y)("div",{className:`input-container ${O?"error":""}`,children:(0,n.Y)(_.Input,{type:"text",name:"email_subject",value:s,placeholder:h,onChange:e=>{let{value:t}=e.target;o&&o(e);let l=t.length>0&&0===t.trim().length;R(l),p&&p(l)}})}),O&&(0,n.Y)("div",{style:{color:z.colorError,fontSize:3*z.sizeUnit},children:K.EMAIL_SUBJECT_ERROR_TEXT})]})})}):null,v!==D.yV.Webhook?(0,n.Y)("div",{className:"inline-container",children:(0,n.FD)(em,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,r.t)("%s recipients",v===D.yV.SlackV2?D.yV.Slack:v),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)("div",{children:[D.yV.Email,D.yV.Slack].includes(v)?(0,n.FD)(n.FK,{children:[(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(_.Input.TextArea,{name:"To","data-test":"recipients",value:E,onChange:ee})}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)("div",{className:"helper",children:(0,r.t)('Recipients are separated by "," or ";"')})})]}):(0,n.FD)("div",{className:"input-container",children:[(0,n.Y)(y.A,{ariaLabel:(0,r.t)("Select channels"),mode:"multiple",name:"recipients",value:S,options:j,onChange:a=>{C(a),l&&l(t,W({},e,{recipients:null==a?void 0:a.map(e=>e.value).join(",")}))},allowClear:!0,"data-test":"recipients",loading:X,allowSelectAll:!1,labelInValue:!0}),(0,n.Y)(G.A,{onClick:()=>J({force:!0}),tooltipContent:(0,r.t)("Force refresh Slack channels list"),disabled:X})]})})]})}):(0,n.Y)("div",{className:"inline-container",children:(0,n.FD)(em,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,r.t)("%s URL",v),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)("div",{children:(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(_.Input,{name:"To","data-test":"recipients",value:E,onChange:ee})})})]})}),v===D.yV.Email&&(0,n.FD)(em,{children:[x&&(0,n.FD)(n.FK,{children:[(0,n.Y)("div",{className:"control-label",children:K.EMAIL_CC_NAME}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(_.Input.TextArea,{name:"CC","data-test":"cc",value:Y,onChange:a=>{let{target:n}=a;L(n.value),l&&l(t,W({},e,{cc:n.value}))}})}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)("div",{className:"helper",children:(0,r.t)('Recipients are separated by "," or ";"')})})]}),I&&(0,n.FD)(n.FK,{children:[(0,n.Y)("div",{className:"control-label",children:K.EMAIL_BCC_NAME}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(_.Input.TextArea,{name:"BCC","data-test":"bcc",value:w,onChange:a=>{let{target:n}=a;k(n.value),l&&l(t,W({},e,{bcc:n.value}))}})}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)("div",{className:"helper",children:(0,r.t)('Recipients are separated by "," or ";"')})})]}),(0,n.FD)("div",{className:"ghost-button",children:[(0,n.FD)("span",{className:"ghost-button",role:"button",tabIndex:0,onClick:()=>A(!0),style:{display:x?"none":"inline-flex"},children:[(0,n.Y)(M.F.MailOutlined,{iconSize:"xs",className:"icon"}),(0,r.t)("Add CC Recipients")]}),(0,n.FD)("span",{className:"ghost-button",role:"button",tabIndex:0,onClick:()=>F(!0),style:{display:I?"none":"inline-flex"},children:[(0,n.Y)(M.F.MailOutlined,{iconSize:"xs",className:"icon"}),(0,r.t)("Add BCC Recipients")]})]})]})]}):null]})};var J=l(42178);function Q(e,t,l,a,n,i,r){try{var o=e[i](r),s=o.value}catch(e){l(e);return}o.done?t(s):Promise.resolve(s).then(a,n)}function ee(){return(ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}let et=[o.Y.PivotTable,"table",o.Y.PairedTTest],el=u.styled.span`
  margin: 0 ${({theme:e})=>3*e.sizeUnit}px;
  color: ${({theme:e})=>e.colorSplit};
  font-weight: ${({theme:e})=>e.fontWeightStrong};
  font-size: ${({theme:e})=>e.fontSize}px;
  align-content: center;
`,ea=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,en=[D.yV.Email,D.yV.Webhook],ei={dashboard:{anchor:""}},er=[{label:(0,r.t)("< (Smaller than)"),value:"<"},{label:(0,r.t)("> (Larger than)"),value:">"},{label:(0,r.t)("<= (Smaller or equal)"),value:"<="},{label:(0,r.t)(">= (Larger or equal)"),value:">="},{label:(0,r.t)("== (Is equal)"),value:"=="},{label:(0,r.t)("!= (Is not equal)"),value:"!="},{label:(0,r.t)("Not null"),value:"not null"}],eo=[{label:(0,r.t)("None"),value:0},{label:(0,r.t)("30 days"),value:30},{label:(0,r.t)("60 days"),value:60},{label:(0,r.t)("90 days"),value:90}],es=[{label:(0,r.t)("Dashboard"),value:"dashboard"},{label:(0,r.t)("Chart"),value:"chart"}],ed={pdf:{label:(0,r.t)("Send as PDF"),value:"PDF"},png:{label:(0,r.t)("Send as PNG"),value:"PNG"},csv:{label:(0,r.t)("Send as CSV"),value:"CSV"},txt:{label:(0,r.t)("Send as text"),value:"TEXT"}},ec=(0,h.AH)`
  margin-bottom: 0;
`,eu=(0,h.AH)`
  .inline-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    &.wrap {
      flex-wrap: wrap;
    }

    > div {
      flex: 1 1 auto;
    }
  }
`,eh=(0,u.styled)(_.TreeSelect)`
  width: 100%;
`,ep=u.styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  .switch-label {
    margin-left: 10px;
  }
`,em=u.styled.div`
  ${({theme:e})=>(0,h.AH)`
    flex: 1;
    margin-top: 0px;
    margin-bottom: ${4*e.sizeUnit}px;

    .helper {
      display: block;
      color: ${e.colorTextTertiary};
      font-size: ${e.fontSizeSM}px;
      padding: ${e.sizeUnit}px 0;
      text-align: left;
    }

    .required {
      margin-left: ${e.sizeUnit/2}px;
      color: ${e.colorError};
    }

    .control-label {
      margin-bottom: ${2*e.sizeUnit}px;
      color: ${e.colorText};
      font-size: ${e.fontSize}px;
    }

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

    input[disabled] {
      color: ${e.colorTextDisabled};
    }

    textarea {
      height: 300px;
      resize: none;
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

    .input-label {
      margin-left: 10px;
    }

    .filters {
      margin: ${3*e.sizeUnit}px 0;

      .filters-container {
        display: flex;
        align-items: flex-start;
        margin: ${2*e.sizeUnit}px 0;
      }

      .filters-dash-container {
        display: flex;
        flex-direction: column;
        max-width: 174px;
        flex: 1;
        margin-right: ${4*e.sizeUnit}px;

        .control-label {
          flex: 1;
          margin-bottom: ${2*e.sizeUnit}px;

          .label-with-tooltip {
            margin-right: ${2*e.sizeUnit}px;
          }
        }
      }

      .filters-dash-select {
        flex: 1;
      }

      .filters-dashvalue-container {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-width: 200px;
      }

      .filters-delete {
        display: flex;
        margin-top: ${10*e.sizeUnit}px;
        margin-left: ${4*e.sizeUnit}px;
      }

      .filters-trashcan {
        display: 'flex';
        color: ${e.colorIcon};
      }
    }
  `}
`,ev=u.styled.div`
  ${({theme:e})=>(0,h.AH)`
    color: ${e.colorPrimaryText};
    cursor: pointer;

    i {
      margin-right: ${2*e.sizeUnit}px;
    }

    &.disabled {
      color: ${e.colorTextDisabled};
      cursor: default;
    }
  `}
`,ef=u.styled.div`
  .inline-container .input-container {
    margin-left: 0;
  }
`,eb=e=>(0,h.AH)`
  margin-right: ${3*e.sizeUnit}px;
`,eg={GENERAL_TITLE:(0,r.t)("General information"),ALERT_CONDITION_TITLE:(0,r.t)("Alert condition"),ALERT_CONTENTS_TITLE:(0,r.t)("Alert contents"),REPORT_CONTENTS_TITLE:(0,r.t)("Report contents"),SCHEDULE_TITLE:(0,r.t)("Schedule"),NOTIFICATION_TITLE:(0,r.t)("Notification method"),NAME_ERROR_TEXT:(0,r.t)("name"),OWNERS_ERROR_TEXT:(0,r.t)("owners"),CONTENT_ERROR_TEXT:(0,r.t)("content type"),DATABASE_ERROR_TEXT:(0,r.t)("database"),SQL_ERROR_TEXT:(0,r.t)("sql"),ALERT_CONDITION_ERROR_TEXT:(0,r.t)("alert condition"),CRONTAB_ERROR_TEXT:(0,r.t)("crontab"),WORKING_TIMEOUT_ERROR_TEXT:(0,r.t)("working timeout"),RECIPIENTS_ERROR_TEXT:(0,r.t)("recipients"),EMAIL_SUBJECT_ERROR_TEXT:(0,r.t)("email subject"),EMAIL_VALIDATION_ERROR_TEXT:(0,r.t)("invalid email"),ERROR_TOOLTIP_MESSAGE:(0,r.t)("Not all required fields are complete. Please provide the following:"),NATIVE_FILTER_COLUMN_ERROR_TEXT:(0,r.t)("Native filter column is required"),NATIVE_FILTER_NO_VALUES_ERROR_TEXT:(0,r.t)("Native filter values has no values")},e_=({status:e="active",onClick:t})=>"hidden"===e?null:(0,n.FD)(ev,{className:e,onClick:()=>{"disabled"!==e&&t()},children:[(0,n.Y)(M.F.PlusOutlined,{iconSize:"m"}),"active"===e?(0,r.t)("Add another notification method"):(0,r.t)("Add delivery method")]}),ey=(0,f.Ay)(({addDangerToast:e,onAdd:t,onHide:l,show:a,alert:o=null,isReport:p=!1,addSuccessToast:f})=>{var $,j,P,U,G,X,B,W,Z,K;let ev=(0,u.useTheme)(),ey=(0,s.a)().get("filter.dateFilterControl"),eT=null!=ey?ey:k.Ay,eE=(0,L.d4)(e=>e.user),eN=(0,F.B)(),eS=(null==eN?void 0:eN.ALERT_REPORTS_NOTIFICATION_METHODS)||en,[eC,eO]=(0,i.useState)(!0),[eR,ex]=(0,i.useState)(),[eA,eI]=(0,i.useState)(!0),[eF,eD]=(0,i.useState)("general"),[eY,eL]=(0,i.useState)(!1),[ew,ek]=(0,i.useState)("dashboard"),[eM,ez]=(0,i.useState)("PNG"),[e$,eV]=(0,i.useState)(!1),[ej,eP]=(0,i.useState)(!1);(0,i.useEffect)(()=>{eP("PNG"===eM||"PDF"===eM)},[eM]);let[eU,eq]=(0,i.useState)(!1),[eG,eX]=(0,i.useState)([]),[eB,eW]=(0,i.useState)([]),[eZ,eK]=(0,i.useState)([]),[eH,eJ]=(0,i.useState)([]),[eQ,e0]=(0,i.useState)([]),[e1,e2]=(0,i.useState)({}),[e4,e5]=(0,i.useState)([{nativeFilterId:null,filterName:"",filterType:"",columnLabel:"",columnName:"",filterValues:[]}]),[e6,e8]=(0,i.useState)({[D.Z_.General]:{hasErrors:!1,name:eg.GENERAL_TITLE,errors:[]},[D.Z_.Content]:{hasErrors:!1,name:p?eg.REPORT_CONTENTS_TITLE:eg.ALERT_CONTENTS_TITLE,errors:[]},[D.Z_.Alert]:{hasErrors:!1,name:eg.ALERT_CONDITION_TITLE,errors:[]},[D.Z_.Schedule]:{hasErrors:!1,name:eg.SCHEDULE_TITLE,errors:[]},[D.Z_.Notification]:{hasErrors:!1,name:eg.NOTIFICATION_TITLE,errors:[]}}),[e3,e7]=(0,i.useState)(""),e9=(e,t)=>{e8(l=>ee({},l,{[e]:{hasErrors:t.length>0,name:l[e].name,errors:t}}))},[te,tt]=(0,i.useState)(""),tl=p?"report":"alert",ta=null!==o,tn=(0,d.G7)(d.TO.AlertsAttachReports)||p,ti=(0,d.G7)(d.TO.AlertReportTabs),tr=(0,d.G7)(d.TO.AlertReportsFilter),[to,ts]=(0,i.useState)("active"),[td,tc]=(0,i.useState)([]),[tu,th]=(0,i.useState)(""),[tp,tm]=(0,i.useState)(!1),tv=(0,i.useMemo)(()=>eS.reduce((e,t)=>e.some(e=>e.includes("slack"))&&t.toLowerCase().includes("slack")?e:[...e,t.toLowerCase()],[]).length,[eS]),{ALERT_REPORTS_DEFAULT_WORKING_TIMEOUT:tf,ALERT_REPORTS_DEFAULT_CRON_VALUE:tb,ALERT_REPORTS_DEFAULT_RETENTION:tg}=(0,L.d4)(e=>{var t,l,a,n;let i=null==(n=e.common)?void 0:n.conf;return{ALERT_REPORTS_DEFAULT_WORKING_TIMEOUT:null!=(t=null==i?void 0:i.ALERT_REPORTS_DEFAULT_WORKING_TIMEOUT)?t:3600,ALERT_REPORTS_DEFAULT_CRON_VALUE:null!=(l=null==i?void 0:i.ALERT_REPORTS_DEFAULT_CRON_VALUE)?l:"0 0 * * *",ALERT_REPORTS_DEFAULT_RETENTION:null!=(a=null==i?void 0:i.ALERT_REPORTS_DEFAULT_RETENTION)?a:90}}),t_={active:!0,creation_method:"alerts_reports",crontab:tb,extra:ei,log_retention:tg,working_timeout:tf,name:"",owners:[],recipients:[],sql:"",email_subject:"",validator_config_json:{},validator_type:"",force_screenshot:!1,grace_period:void 0},ty=(e,t,l,a="filter_select",n=[])=>{var i;return(i=function*(){if("filter_time"===a)return;let i={formData:{datasource:`${l}__table`,groupby:[t],metrics:["count"],row_limit:1e3,showSearch:!0,viz_type:a,type:"NATIVE_FILTER",dashboardId:e,adhoc_filters:n},force:!1,ownState:{}};return yield(0,w.getChartDataRequest)(i).then(e=>{let l=e.json.result[0].data,n=l;return"filter_timecolumn"===a&&(n=l.filter(e=>2===e.dtype)),n.map(e=>"filter_timegrain"===a?{value:e.duration,label:e.name}:"filter_timecolumn"===a?{value:e.column_name,label:e.verbose_name||e.column_name}:{value:e[t],label:e[t]})})},function(){var e=this,t=arguments;return new Promise(function(l,a){var n=i.apply(e,t);function r(e){Q(n,l,a,r,o,"next",e)}function o(e){Q(n,l,a,r,o,"throw",e)}r(void 0)})})()},tT=e=>eQ.filter(t=>!e4.some((l,a)=>l.nativeFilterId===t.value&&a!==e)),tE=(e,t)=>{let l=[...td];l[e]=t,td[e].method!==t.method?(td[e]=t,tc(td.filter((t,l)=>l<=e)),td.length-1>e&&ts("active"),void 0!==t.method&&"hidden"!==to&&ts("active")):tc(l)},tN=e=>{let t=td.slice();t.splice(e,1),tc(t),ts("active")},tS=e=>{ex(t=>{var l;let a=null==t||null==(l=t.extra)?void 0:l.dashboard,n={dashboard:ee({},a,{anchor:e})};return ee({},t,{extra:n})})},{state:{loading:tC,resource:tO,error:tR},fetchResource:tx,createResource:tA,updateResource:tI,clearError:tF}=(0,v.fn)("report",(0,r.t)("report"),e),tD=()=>{tF(),eI(!0),l(),tc([]),ex(ee({},t_)),ts("active")},tY=(0,i.useMemo)(()=>(e="",t,l)=>{let a=m().encode({filter:e,page:t,page_size:l});return c.A.get({endpoint:`/api/v1/report/related/created_by?q=${a}`}).then(e=>({data:e.json.result.map(e=>{var t,l,a;return{value:e.value,label:(0,b.I6)({name:e.text,email:null==(l=e.extra)?void 0:l.email}),[b.N6]:e.text,[b.rb]:null!=(t=null==(a=e.extra)?void 0:a.email)?t:""}}),totalCount:e.json.count}))},[]),tL=(0,i.useCallback)(e=>{let t,l=e||(null==eR?void 0:eR.database);return!l||l.label?null:(eG.forEach(e=>{(e.value===l.value||e.value===l.id)&&(t=e)}),t)},[null==eR?void 0:eR.database,eG]),tw=(e,t)=>{ex(l=>ee({},l,{[e]:t}))},tk=(0,i.useMemo)(()=>(e="",t,l)=>{let a=m().encode({filter:e,page:t,page_size:l});return c.A.get({endpoint:`/api/v1/report/related/database?q=${a}`}).then(e=>{let t=e.json.result.map(e=>({value:e.value,label:e.text}));return eX(t),{data:t,totalCount:e.json.count}})},[]),tM=null==eR?void 0:eR.dashboard;(0,i.useEffect)(()=>{(ti||tr)&&(null==tM?void 0:tM.value)&&c.A.get({endpoint:`/api/v1/dashboard/${tM.value}/tabs`}).then(e=>{var t,l,a,n;let{tab_tree:i,all_tabs:r,native_filters:o}=e.json.result,s=i.map(e=>e.value);s.length>1&&i.push({title:"All Tabs",value:JSON.stringify(s)}),eJ(i),e2(null!=o?o:{}),ta&&(null==o?void 0:o.all)&&(n=o.all,e4.map(e=>{var t,l;if(!e.nativeFilterId)return;let a=n.filter(t=>t.id===e.nativeFilterId)[0],{datasetId:i}=a.targets[0],r=a.name,o=(null==(t=a.targets[0].column)?void 0:t.name)||r,s=null==eR||null==(l=eR.dashboard)?void 0:l.value,{filterType:d}=a;if("filter_time"!==d)return ty(s,o,i,d).then(t=>{e5(l=>l.map(l=>l.nativeFilterId===e.nativeFilterId?ee({},l,{filterType:d,filterName:r,optionFilterValues:t}):l))})}),e0(o.all.map(e=>({value:e.id,label:e.name}))));let d=null==eR||null==(l=eR.extra)||null==(t=l.dashboard)?void 0:t.anchor;if(d)try{let e=JSON.parse(d);if(!Array.isArray(e)){let e=null!=(a=null==o?void 0:o[d])?a:[];e0(e.map(e=>({value:e.id,label:e.name})))}if(Array.isArray(e))r&&e.every(e=>e in r)||tS(void 0);else throw Error("Parsed value is not an array")}catch(e){r&&d in r||tS(void 0)}else(null==o?void 0:o.all)&&e0(o.all.map(e=>({value:e.id,label:e.name})))}).catch(t=>{e((0,r.t)("There was an error retrieving dashboard tabs."))})},[tM,ti,tr,null==eR?void 0:eR.extra,e]);let tz=(null==eR?void 0:eR.database)&&!eR.database.label;(0,i.useEffect)(()=>{tz&&tw("database",tL())},[tz,tL]);let t$=(0,i.useMemo)(()=>(e="",t,l)=>{let a=m().encode_uri({filter:e,page:t,page_size:l});return c.A.get({endpoint:`/api/v1/report/related/dashboard?q=${a}`}).then(e=>{let t=e.json.result.map(e=>({value:e.value,label:e.text}));return eW(t),{data:t,totalCount:e.json.count}})},[]),tV=(0,i.useCallback)(e=>{let t,l=e||(null==eR?void 0:eR.chart);return!l||l.label?null:(eZ.forEach(e=>{(e.value===l.value||e.value===l.id)&&(t=e)}),t)},[eZ,null==eR?void 0:eR.chart]),tj=(null==eR?void 0:eR.chart)&&!(null==eR?void 0:eR.chart.label);(0,i.useEffect)(()=>{tj&&tw("chart",tV())},[tV,tj]);let tP=(0,i.useMemo)(()=>(e="",t,l)=>{let a=m().encode_uri({filter:e,page:t,page_size:l});return c.A.get({endpoint:`/api/v1/report/related/chart?q=${a}`}).then(e=>{let t=e.json.result.map(e=>({value:e.value,label:e.text}));return eK(t),{data:t,totalCount:e.json.count}})},[]),tU=()=>{var e,t;let l=null==eR||null==(e=eR.chart)?void 0:e.label,a=null==eR||null==(t=eR.dashboard)?void 0:t.label;if(!(null==eR?void 0:eR.name))return void th("");switch(ew){case D.cM.Chart:th(`${null==eR?void 0:eR.name}: ${l||""}`);break;case D.cM.Dashboard:th(`${null==eR?void 0:eR.name}: ${a||""}`);break;default:th("")}},tq=e=>{let{target:{type:t,value:l,name:a}}=e;tw(a,"number"===t?parseInt(l,10)||null:l),"name"===a&&tU()},tG=e=>{let{target:t}=e,l=+t.value;0===l?tw(t.name,void 0):tw(t.name,l?Math.max(l,1):l)},tX=(e,t)=>{let l;l="string"==typeof t?[t]:t,e5(e4.map((t,a)=>a===e?ee({},t,{filterValues:l}):t))};(0,i.useEffect)(()=>{if(ta&&(!(null==eR?void 0:eR.id)||(null==o?void 0:o.id)!==eR.id||eA&&a))(null==o?void 0:o.id)===null||tC||tR||tx(o.id||0);else if(!ta&&(!eR||eR.id||eA&&a)){var e;ex(ee({},t_,{owners:eE?[{value:eE.userId,label:(0,b.I6)({name:`${eE.firstName} ${eE.lastName}`,email:eE.email}),[b.N6]:`${eE.firstName} ${eE.lastName}`,[b.rb]:null!=(e=eE.email)?e:""}]:[]})),tc([{recipients:"",cc:"",bcc:"",options:eS,method:D.yV.Email}]),ts("active")}},[o]),(0,i.useEffect)(()=>{if(tO){var e,t;let l,a;if(eL(!0),null==(t=tO.extra)||null==(e=t.dashboard)?void 0:e.nativeFilters){let e=tO.extra.dashboard.nativeFilters;e5(e);let t=e.filter(e=>e.nativeFilterId&&e.filterName).map(e=>({value:e.nativeFilterId,label:e.filterName}));t.length>0&&e0(t)}let n=(tO.recipients||[]).map(e=>{let t="string"==typeof e.recipient_config_json?JSON.parse(e.recipient_config_json):{};return{method:e.type,recipients:t.target||e.recipient_config_json,options:eS,cc:t.ccTarget||"",bcc:t.bccTarget||""}});tc(n),ts(n.length===eS.length?"hidden":"active"),ek(tO.chart?D.cM.Chart:D.cM.Dashboard),ez(tO.report_format||"PNG");let i="string"==typeof tO.validator_config_json?JSON.parse(tO.validator_config_json):tO.validator_config_json;eq("not null"===tO.validator_type),tO.chart&&tt(tO.chart.viz_type),eV(tO.force_screenshot),ex(ee({},tO,{chart:tO.chart?tV(tO.chart)||{value:tO.chart.id,label:tO.chart.slice_name}:void 0,dashboard:tO.dashboard?((a=tO.dashboard||(null==eR?void 0:eR.dashboard))&&!a.label?(eB.forEach(e=>{(e.value===a.value||e.value===a.id)&&(l=e)}),l):null)||{value:tO.dashboard.id,label:tO.dashboard.dashboard_title}:void 0,database:tO.database?tL(tO.database)||{value:tO.database.id,label:tO.database.database_name}:void 0,owners:(tO.owners||[]).map(e=>{var t;let l=e.label||`${e.first_name} ${e.last_name}`;return{value:e.value||e.id,label:(0,b.I6)({name:"string"==typeof l?l:"",email:e.email}),[b.N6]:"string"==typeof l?l:"",[b.rb]:null!=(t=e.email)?t:""}}),validator_config_json:"not null"===tO.validator_type?{op:"not null"}:i}))}},[tO]);let tB=eR||{};(0,i.useEffect)(()=>{var e,t,l,a,n,i;let r,o,s,d,c;r=[],(null==eR||null==(e=eR.name)?void 0:e.length)||r.push(eg.NAME_ERROR_TEXT),(null==eR||null==(t=eR.owners)?void 0:t.length)||r.push(eg.OWNERS_ERROR_TEXT),e9(D.Z_.General,r),o=[],ew===D.cM.Dashboard&&(null==eR?void 0:eR.dashboard)||ew===D.cM.Chart&&(null==eR?void 0:eR.chart)||o.push(eg.CONTENT_ERROR_TEXT),e4.forEach(e=>{let t=!e.columnName||""===e.columnName,l=!e.filterValues||0===e.filterValues.length;t&&l||(t&&o.push(eg.NATIVE_FILTER_COLUMN_ERROR_TEXT),l&&o.push(eg.NATIVE_FILTER_NO_VALUES_ERROR_TEXT))}),e9(D.Z_.Content,o),p||(s=[],(null==eR?void 0:eR.database)||s.push(eg.DATABASE_ERROR_TEXT),(null==eR||null==(l=eR.sql)?void 0:l.length)||s.push(eg.SQL_ERROR_TEXT),(eU||(null==eR||null==(a=eR.validator_config_json)?void 0:a.op))&&(eU||(null==eR||null==(n=eR.validator_config_json)?void 0:n.threshold)!==void 0)||s.push(eg.ALERT_CONDITION_ERROR_TEXT),e9(D.Z_.Alert,s)),d=[],(null==eR||null==(i=eR.crontab)?void 0:i.length)||d.push(eg.CRONTAB_ERROR_TEXT),(null==eR?void 0:eR.working_timeout)||d.push(eg.WORKING_TIMEOUT_ERROR_TEXT),e9(D.Z_.Schedule,d),c=[],(()=>{if(!td.length)return!1;let e=!1;return td.forEach(t=>{var l;t.method&&(null==(l=t.recipients)?void 0:l.length)&&(e=!0)}),e})()?(()=>{if(!td.length)return!0;let e=e=>!e||e.split(/[,;]/).every(e=>ea.test(e.trim()));return td.every(t=>{if(t.method&&"Email"===t.method){var l;return(!(null==(l=t.recipients)?void 0:l.length)||e(t.recipients))&&(!t.cc||e(t.cc))&&(!t.bcc||e(t.bcc))}return!0})})()||c.push(eg.EMAIL_VALIDATION_ERROR_TEXT):c.push(eg.RECIPIENTS_ERROR_TEXT),tp&&c.push(eg.EMAIL_SUBJECT_ERROR_TEXT),e9(D.Z_.Notification,c),tU()},[tB.name,tB.owners,tB.database,tB.sql,tB.validator_config_json,tB.crontab,tB.working_timeout,tB.dashboard,tB.chart,ew,e4,td,eU,tp]),(0,i.useEffect)(()=>{let e,t=[D.Z_.General,D.Z_.Content,p?void 0:D.Z_.Alert,D.Z_.Schedule,D.Z_.Notification].some(e=>e&&e6[e].hasErrors);e7(t?(e=[],Object.values(e6).forEach(t=>{if(t.hasErrors){let l=`${t.name}: `;e.push(l+t.errors.join(", "))}}),(0,n.FD)("div",{children:[eg.ERROR_TOOLTIP_MESSAGE,(0,n.Y)(J.B,{dataSource:e,renderItem:e=>(0,n.FD)(J.B.Item,{css:e=>(0,h.AH)`
              &&& {
                color: ${e.colorWhite};
              }
            `,compact:!0,children:["• ",e]}),size:"small",split:!1})]})):""),eO(t)},[e6]),eA&&a&&eI(!1);let tW=e=>{tm(e)};return(0,n.Y)(z.xQ,{show:a,onHide:tD,onSave:()=>{var e,l,a,n;let i=[];td.forEach(e=>{e.method&&e.recipients.length&&i.push({recipient_config_json:{target:e.recipients,ccTarget:e.cc,bccTarget:e.bcc},type:e.method})});let o=ew===D.cM.Chart&&!p;if(null==eR||null==(e=eR.extra)?void 0:e.dashboard){let e=e4.filter(e=>{let t=e.filterName&&""!==e.filterName.trim(),l=e.filterValues&&e.filterValues.length>0;return t||l});eR.extra.dashboard.nativeFilters=e.map(({columnName:e,columnLabel:t,nativeFilterId:l,filterValues:a,filterType:n,filterName:i})=>({filterName:i,filterType:n,columnName:e,columnLabel:t,nativeFilterId:l,filterValues:a}))}let s=ee({},eR,{type:p?"Report":"Alert",force_screenshot:o||e$,validator_type:eU?"not null":"operator",validator_config_json:eU?{}:null==eR?void 0:eR.validator_config_json,chart:ew===D.cM.Chart?null==eR||null==(l=eR.chart)?void 0:l.value:null,dashboard:ew===D.cM.Dashboard?null==eR||null==(a=eR.dashboard)?void 0:a.value:null,custom_width:ej?null==eR?void 0:eR.custom_width:void 0,database:null==eR||null==(n=eR.database)?void 0:n.value,owners:((null==eR?void 0:eR.owners)||[]).map(e=>e.value||e.id),recipients:i,report_format:eM||"PNG",extra:ew===D.cM.Dashboard?null==eR?void 0:eR.extra:{}});if(s.recipients&&!s.recipients.length&&delete s.recipients,s.context_markdown="string",ta){if(null==eR?void 0:eR.id){let e=eR.id;delete s.id,delete s.created_by,delete s.last_eval_dttm,delete s.last_state,delete s.last_value,delete s.last_value_row_json,tI(e,s).then(e=>{e&&(f((0,r.t)("%s updated",s.type)),t&&t(),tD())})}}else eR&&tA(s).then(e=>{e&&(f((0,r.t)("%s updated",s.type)),t&&t(e),tD())})},saveDisabled:eC,saveText:ta?(0,r.t)("Save"):(0,r.t)("Add"),errorTooltip:e3,title:(()=>{let e;switch(!0){case ta&&p:e=(0,r.t)("Edit report");break;case ta:e=(0,r.t)("Edit alert");break;case p:e=(0,r.t)("Add report");break;default:e=(0,r.t)("Add alert")}return e})(),isEditMode:ta,width:500,wrapProps:{"data-test":"alert-report-modal"},children:(0,n.Y)("div",{css:eu,children:(0,n.Y)(T.S,{expandIconPosition:"end",activeKey:eF,onChange:e=>{eD(e),(Array.isArray(e)?e.includes("schedule"):"schedule"===e)&&(A.sy.isCached()?eL(!0):setTimeout(()=>{eL(!0)},220))},accordion:!0,modalMode:!0,items:[{key:"general",label:(0,n.Y)(E.s,{title:eg.GENERAL_TITLE,subtitle:(0,r.t)("Set up basic details, such as name and description."),validateCheckStatus:!e6[D.Z_.General].hasErrors,testId:"general-information-panel"}),children:(0,n.FD)("div",{className:"header-section",children:[(0,n.Y)(z.Gk,{label:p?(0,r.t)("Report name"):(0,r.t)("Alert name"),required:!0,children:(0,n.Y)(_.Input,{name:"name",placeholder:p?(0,r.t)("Enter report name"):(0,r.t)("Enter alert name"),value:eR?eR.name:"",onChange:tq})}),(0,n.Y)(z.Gk,{label:(0,r.t)("Owners"),required:!0,children:(0,n.Y)(N.A,{ariaLabel:(0,r.t)("Owners"),allowClear:!0,name:"owners",mode:"multiple",placeholder:(0,r.t)("Select owners"),value:(null==eR?void 0:eR.owners)||[],options:tY,onChange:e=>{tw("owners",e||[])},"data-test":"owners-select",optionFilterProps:b.un})}),(0,n.Y)(z.Gk,{label:(0,r.t)("Description"),children:(0,n.Y)(_.Input,{name:"description",value:eR&&eR.description||"",placeholder:(0,r.t)("Include description to be sent with %s",tl),onChange:tq})}),(0,n.FD)(ep,{children:[(0,n.Y)(_.Switch,{checked:!!eR&&eR.active,defaultChecked:!0,onChange:e=>{tw("active",e)}}),(0,n.Y)("div",{className:"switch-label",children:p?(0,r.t)("Report is active"):(0,r.t)("Alert is active")})]})]})},...p?[]:[{key:"condition",label:(0,n.Y)(E.s,{title:eg.ALERT_CONDITION_TITLE,subtitle:(0,r.t)("Define the database, SQL query, and triggering conditions for alert."),validateCheckStatus:!e6[D.Z_.Alert].hasErrors,testId:"alert-condition-panel"}),children:(0,n.FD)("div",{children:[(0,n.FD)(em,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,r.t)("Database"),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(N.A,{ariaLabel:(0,r.t)("Database"),name:"source",placeholder:(0,r.t)("Select database"),value:(null==eR||null==($=eR.database)?void 0:$.label)&&(null==eR||null==(j=eR.database)?void 0:j.value)?{value:eR.database.value,label:eR.database.label}:void 0,options:tk,onChange:e=>{tw("database",e||[])}})})]}),(0,n.FD)(em,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,r.t)("SQL Query"),(0,n.Y)(S.I,{tooltip:(0,r.t)('The result of this query must be a value capable of numeric interpretation e.g. 1, 1.0, or "1" (compatible with Python\'s float() function).')}),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)(I.A,{name:"sql",language:"sql",offerEditInModal:!1,minLines:15,maxLines:15,onChange:e=>{tw("sql",e||"")},readOnly:!1,initialValue:null==tO?void 0:tO.sql},null==eR?void 0:eR.id)]}),(0,n.FD)("div",{className:"inline-container wrap",css:(0,h.AH)`
                            gap: ${ev.sizeUnit}px;
                          `,children:[(0,n.FD)(em,{css:ec,children:[(0,n.FD)("div",{className:"control-label",css:eb,children:[(0,r.t)("Trigger Alert If..."),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(y.A,{ariaLabel:(0,r.t)("Condition"),onChange:e=>{var t;eq("not null"===e),tw("validator_config_json",{op:e,threshold:eR?null==(t=eR.validator_config_json)?void 0:t.threshold:void 0})},placeholder:(0,r.t)("Condition"),value:(null==eR||null==(P=eR.validator_config_json)?void 0:P.op)||void 0,options:er})})]}),(0,n.FD)(em,{css:ec,children:[(0,n.FD)("div",{className:"control-label",children:[(0,r.t)("Value")," ",!eU&&(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(_.InputNumber,{disabled:eU,type:"number",name:"threshold",value:(null==eR||null==(U=eR.validator_config_json)?void 0:U.threshold)===void 0||eU?"":eR.validator_config_json.threshold,min:0,placeholder:(0,r.t)("Value"),onChange:e=>{var t;tw("validator_config_json",{op:eR?null==(t=eR.validator_config_json)?void 0:t.op:void 0,threshold:e})}})})]})]})]})}],{key:"contents",label:(0,n.Y)(E.s,{title:p?eg.REPORT_CONTENTS_TITLE:eg.ALERT_CONTENTS_TITLE,subtitle:(0,r.t)("Customize data source, filters, and layout."),validateCheckStatus:!e6[D.Z_.Content].hasErrors,testId:"contents-panel"}),children:(0,n.FD)(n.FK,{children:[(0,n.FD)(em,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,r.t)("Content type"),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)(y.A,{ariaLabel:(0,r.t)("Select content type"),onChange:e=>{eV(!1),ek(e)},value:ew,options:es,placeholder:(0,r.t)("Select content type")})]}),(0,n.Y)(em,{children:ew===D.cM.Chart?(0,n.FD)(n.FK,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,r.t)("Select chart"),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)(N.A,{ariaLabel:(0,r.t)("Chart"),name:"chart",value:(null==eR||null==(G=eR.chart)?void 0:G.label)&&(null==eR||null==(X=eR.chart)?void 0:X.value)?{value:eR.chart.value,label:eR.chart.label}:void 0,options:tP,onChange:e=>{c.A.get({endpoint:`/api/v1/chart/${e.value}`}).then(e=>tt(e.json.result.viz_type)),tw("chart",e||void 0),tw("dashboard",null)},placeholder:(0,r.t)("Select chart to use")})]}):(0,n.FD)(n.FK,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,r.t)("Select dashboard"),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)(N.A,{ariaLabel:(0,r.t)("Dashboard"),name:"dashboard",value:(null==eR||null==(B=eR.dashboard)?void 0:B.label)&&(null==eR||null==(W=eR.dashboard)?void 0:W.value)?{value:eR.dashboard.value,label:eR.dashboard.label}:void 0,options:t$,onChange:e=>{tw("dashboard",e||void 0),tw("chart",null),ti&&(eJ([]),tS("")),(ti||tr)&&e0([]),tr&&e5([{filterName:"",filterType:"",nativeFilterId:null,columnLabel:"",columnName:"",filterValues:[]}])},placeholder:(0,r.t)("Select dashboard to use")})]})}),(0,n.Y)(em,{css:["PDF","TEXT","CSV"].includes(eM)&&ec,children:tn&&(0,n.FD)(n.FK,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,r.t)("Content format"),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)(y.A,{ariaLabel:(0,r.t)("Select format"),onChange:e=>{ez(e)},value:eM,options:ew===D.cM.Dashboard?["pdf","png"].map(e=>ed[e]):et.includes(te)?Object.values(ed):["pdf","png","csv"].map(e=>ed[e]),placeholder:(0,r.t)("Select format")})]})}),ti&&ew===D.cM.Dashboard&&(0,n.Y)(em,{children:(0,n.FD)(n.FK,{children:[(0,n.Y)("div",{className:"control-label",children:(0,r.t)("Select tab")}),(0,n.Y)(eh,{disabled:(null==eH?void 0:eH.length)===0,treeData:eH,value:null==eR||null==(K=eR.extra)||null==(Z=K.dashboard)?void 0:Z.anchor,onSelect:tS,placeholder:(0,r.t)("Select a tab")})]})}),tr&&ew===D.cM.Dashboard&&(0,n.Y)(em,{children:(0,n.Y)(C.l,{className:"filters",name:"form",autoComplete:"off",children:(0,n.Y)(C.l.List,{name:"filters",initialValue:e4,children:(t,{add:l,remove:a})=>(0,n.FD)("div",{children:[t.map(({key:t,name:l})=>{var i,o;return(0,n.FD)("div",{className:"filters-container",children:[(0,n.FD)("div",{className:"filters-dash-container",children:[(0,n.FD)("div",{className:"control-label",children:[(0,n.Y)("span",{className:"label-with-tooltip",children:(0,r.t)("Dashboard Filter")}),(0,n.Y)(S.I,{tooltip:(0,r.t)("Choose from existing dashboard filters and select a value to refine your report results.")})]}),(0,n.Y)(y.A,{disabled:(null==eQ?void 0:eQ.length)<1&&!(null==(i=e4[l])?void 0:i.filterName),ariaLabel:(0,r.t)("Select Filter"),placeholder:(0,r.t)("Select Filter"),value:null==(o=e4[l])?void 0:o.nativeFilterId,options:tT(l),onChange:t=>((t,l)=>{var a;let n;if(!l||"undefined"===l||"null"===l)return;let i=Object.values(e1).flatMap(e=>null!=e?e:[]).filter(e=>e.id===l)[0],{filterType:o,adhoc_filters:s}=i;if(e4.some(e=>e.nativeFilterId===l))return void e((0,r.t)("This filter already exist on the report"));let d=i.name;n="filter_time"===o||"filter_timecolumn"===o||"filter_timegrain"===o?i.name:i.targets[0].column.name;let c=i.targets[0].datasetId||null,u=eQ.filter(e=>e.value===l)[0].label,h=null==eR||null==(a=eR.dashboard)?void 0:a.value,p={formData:{datasource:`${c}__table`,groupby:[n],metrics:["count"],row_limit:1e3,showSearch:!0,viz_type:"filter_select",type:"NATIVE_FILTER",dashboardId:h,adhoc_filters:s},force:!1,ownState:{}};if("filter_time"===o||"filter_timecolumn"===o||"filter_timegrain"===o){ty(h,n,c,o,s).then(e=>{e5(e4.map((a,i)=>i===t?ee({},a,{filterName:d,filterType:o,nativeFilterId:l,columnLabel:u,columnName:n,optionFilterValues:e,filterValues:[]}):a))}),e5(e4.map((e,a)=>a===t?ee({},e,{filterName:d,filterType:o,nativeFilterId:l,columnLabel:u,columnName:n,optionFilterValues:[],filterValues:[]}):e));return}(0,w.getChartDataRequest)(p).then(e=>{let a=e.json.result[0].data.map(e=>({value:e[n],label:e[n]}));e5(e4.map((e,i)=>i===t?ee({},e,{filterName:d,filterType:o,nativeFilterId:l,columnLabel:u,columnName:n,optionFilterValues:a,filterValues:[]}):e))})})(l,String(t)),onClear:()=>{let e=[...e4];e[l]={nativeFilterId:null,columnLabel:"",columnName:"",filterName:"",filterValues:[]},e5(e)},css:(0,h.AH)`
                                        flex: 1;
                                      `,oneLine:!0,allowClear:!0})]}),(0,n.FD)("div",{className:"filters-dashvalue-container",children:[(0,n.Y)("div",{className:"control-label",children:(0,r.t)("Value")}),((e,t)=>{if(!e)return null;let{filterType:l,filterValues:a}=e,i="multiple";if("filter_time"===l)return(0,n.Y)(eT,{name:"time_range",onChange:t=>{e5(e4.map(l=>e.nativeFilterId===l.nativeFilterId?ee({},l,{filterValues:[t]}):l))},value:null==a?void 0:a[0]});if("filter_range"===l){let t=null==a?void 0:a[0],l=null==a?void 0:a[1];return(0,n.FD)("div",{children:[(0,n.FD)("div",{className:"inline-container",children:[(0,n.Y)(_.InputNumber,{value:t,onChange:t=>{e5(e4.map(l=>l.nativeFilterId===e.nativeFilterId?ee({},l,{filterValues:[t,null==a?void 0:a[1]]}):l))}}),(0,n.Y)(el,{children:"-"}),(0,n.Y)(_.InputNumber,{value:l,onChange:t=>{e5(e4.map(l=>l.nativeFilterId===e.nativeFilterId?ee({},l,{filterValues:[null==a?void 0:a[0],t]}):l))}})]}),(0,n.Y)(Y.Mo,{status:"help",children:(0,r.t)("Enter minimum and maximum values for the range filter")})]})}return("filter_timegrain"===l||"filter_timecolumn"===l)&&(i="single"),(0,n.Y)(y.A,{ariaLabel:(0,r.t)("Select Value"),placeholder:(0,r.t)("Select Value"),disabled:!(null==e?void 0:e.optionFilterValues),value:null==e?void 0:e.filterValues,options:(null==e?void 0:e.optionFilterValues)||[],onChange:e=>tX(t,e),mode:i,onClear:()=>{tX(t,[])},allowClear:!0})})(e4[l],l)]}),(0!==l||ta)&&(0,n.Y)("div",{className:"filters-delete",children:(0,n.Y)(M.F.DeleteOutlined,{iconSize:"xl",className:"filters-trashcan",onClick:()=>{let e;(e=e4||[]).splice(l,1),e5(e),a(l)}})})]},t)}),tT().length>0&&(0,n.FD)(O.$n,{buttonStyle:"link",onClick:()=>{e5([...e4,{nativeFilterId:null,columnLabel:"",columnName:"",filterValues:[]}]),l()},children:["+ ",(0,r.t)("Apply another dashboard filter")]})]})})})}),ej&&(0,n.FD)(em,{css:!p&&ew===D.cM.Chart&&ec,children:[(0,n.Y)("div",{className:"control-label",children:(0,r.t)("Screenshot width")}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(_.InputNumber,{type:"number",name:"custom_width",value:(null==eR?void 0:eR.custom_width)||void 0,min:600,max:2400,placeholder:(0,r.t)("Input custom width in pixels"),onChange:e=>{tw("custom_width",null==e||"string"==typeof e&&Number.isNaN(Number(e))?null:Number(e))}})})]}),(p||ew===D.cM.Dashboard)&&(0,n.Y)("div",{className:"inline-container",children:(0,n.Y)(_.Checkbox,{"data-test":"bypass-cache",checked:e$,onChange:e=>{eV(e.target.checked)},children:(0,r.t)("Ignore cache when generating report")})})]})},{key:"schedule",label:(0,n.Y)(E.s,{title:eg.SCHEDULE_TITLE,subtitle:(0,r.t)("Define delivery schedule, timezone, and frequency settings."),validateCheckStatus:!e6[D.Z_.Schedule].hasErrors,testId:"schedule-panel"}),children:(0,n.FD)(n.FK,{children:[(0,n.Y)(q,{value:(null==eR?void 0:eR.crontab)||"",onChange:e=>tw("crontab",e)}),(0,n.FD)(em,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,r.t)("Timezone")," ",(0,n.Y)("span",{className:"required",children:"*"})]}),eY?(0,n.Y)(x.A,{onTimezoneChange:e=>{tw("timezone",e)},timezone:null==eR?void 0:eR.timezone,minWidth:"100%"}):(0,n.Y)(R.R,{size:"s",muted:!0,position:"normal"})]}),(0,n.FD)(em,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,r.t)("Log retention"),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(y.A,{ariaLabel:(0,r.t)("Log retention"),placeholder:(0,r.t)("Log retention"),onChange:e=>{tw("log_retention",e)},value:null==eR?void 0:eR.log_retention,options:eo,sortComparator:(0,g.qw)("value")})})]}),(0,n.Y)(em,{css:ec,children:p?(0,n.FD)(n.FK,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,r.t)("Working timeout"),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(V,{min:1,name:"working_timeout",value:(null==eR?void 0:eR.working_timeout)||"",placeholder:(0,r.t)("Time in seconds"),onChange:tG,timeUnit:(0,r.t)("seconds")})})]}):(0,n.FD)(n.FK,{children:[(0,n.Y)("div",{className:"control-label",children:(0,r.t)("Grace period")}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(V,{min:1,name:"grace_period",value:(null==eR?void 0:eR.grace_period)||"",placeholder:(0,r.t)("Time in seconds"),onChange:tG,timeUnit:(0,r.t)("seconds")})})]})})]})},{key:"notification",label:(0,n.Y)(E.s,{title:eg.NOTIFICATION_TITLE,subtitle:(0,r.t)("Choose notification method and recipients."),validateCheckStatus:!e6[D.Z_.Notification].hasErrors,testId:"notification-method-panel"}),children:(0,n.FD)(n.FK,{children:[td.map((e,t)=>(0,n.Y)(ef,{children:(0,n.Y)(H,{setting:e,index:t,onUpdate:tE,onRemove:tN,onInputChange:tq,email_subject:(null==eR?void 0:eR.email_subject)||"",defaultSubject:tu||"",setErrorSubject:tW},`NotificationMethod-${t}`)})),tv>td.length&&(0,n.Y)(e_,{"data-test":"notification-add",status:to,onClick:()=>{tc([...td,{recipients:"",options:eS.filter(e=>!td.reduce((t,l)=>t||e===l.method,!1))}]),ts(td.length===tv?"hidden":"disabled")}})]})}]})})})})},50170(e,t,l){l.d(t,{Or:()=>s,Z_:()=>d,cM:()=>c,yV:()=>o});var a,n,i,r,o=((a={}).Email="Email",a.Slack="Slack",a.SlackV2="SlackV2",a.Webhook="Webhook",a),s=((n={}).Success="Success",n.Working="Working",n.Error="Error",n.Noop="Not triggered",n.Grace="On Grace",n),d=((i={}).General="generalSection",i.Content="contentSection",i.Alert="alertConditionSection",i.Schedule="scheduleSection",i.Notification="notificationSection",i),c=((r={}).Dashboard="dashboard",r.Chart="chart",r)}}]);