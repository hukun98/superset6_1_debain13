"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8937],{70621(e,t,n){n.d(t,{c:()=>o});var a=n(2445),l=n(17437),r=n(22022);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e){return(0,a.Y)(r.Divider,i({css:e=>(0,l.AH)`
        margin: ${e.margin}px 0;
      `},e))}},4392(e,t,n){n.d(t,{A:()=>i,P:()=>r});var a=n(17437),l=n(24002);let r=(0,a.AH)("white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"),i=({isVertical:e,isHorizontal:t}={isVertical:!1,isHorizontal:!0})=>{let[n,a]=(0,l.useState)(!0),r=(0,l.useRef)(null),[i,o]=(0,l.useState)(0),[c,d]=(0,l.useState)(0),[s,u]=(0,l.useState)(0),[h,p]=(0,l.useState)(0);return(0,l.useEffect)(()=>{var e,t,n,a,l,i,c,s;o(null!=(e=null==(l=r.current)?void 0:l.offsetWidth)?e:0),d(null!=(t=null==(i=r.current)?void 0:i.scrollWidth)?t:0),u(null!=(n=null==(c=r.current)?void 0:c.offsetHeight)?n:0),p(null!=(a=null==(s=r.current)?void 0:s.scrollHeight)?a:0)}),(0,l.useEffect)(()=>{a(e&&s<h||t&&i<c)},[i,c,s,h,e,t]),[r,n]}},96003(e,t,n){n.d(t,{t:()=>m});var a=n(2426);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let r=String.raw`\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?(?:(?:[+-]\d\d:\d\d)|Z)?`,i=String.raw`(?:TODAY|NOW)`,o=String.raw`[+-]?[1-9][0-9]*`,c=String.raw`YEAR|QUARTER|MONTH|WEEK|DAY|HOUR|MINUTE|SECOND`,d=RegExp(String.raw`^DATEADD\(DATETIME\("(${r}|${i})"\),\s(${o}),\s(${c})\)$`,"i"),s=RegExp(String.raw`^${r}$|^${i}$`,"i"),u=["now","today"],h=new Date;h.setHours(0,0,0,0);let p=new Date;p.setHours(0,0,0,0);let v={sinceDatetime:h.setDate(h.getDate()-7).toString(),sinceMode:"relative",sinceGrain:"day",sinceGrainValue:-7,untilDatetime:p.toString(),untilMode:"specific",untilGrain:"day",untilGrainValue:7,anchorMode:"now",anchorValue:"now"},m=e=>{let t=e.split(a.wv);if(2===t.length){let[e,n]=t;if(s.test(e)&&s.test(n)){let t=u.includes(e)?e:"specific",a=u.includes(n)?n:"specific";return{customRange:l({},v,{sinceDatetime:e,untilDatetime:n,sinceMode:t,untilMode:a}),matchedFlag:!0}}let a=e.match(d);if(a&&s.test(n)&&e.includes(n)){let[e,t,r]=a.slice(1),i=u.includes(n)?n:"specific";return{customRange:l({},v,{sinceGrain:r,sinceGrainValue:parseInt(t,10),sinceDatetime:e,untilDatetime:e,sinceMode:"relative",untilMode:i}),matchedFlag:!0}}let r=n.match(d);if(s.test(e)&&r&&n.includes(e)){let[t,n,a]=r.slice(1),i=u.includes(e)?e:"specific";return{customRange:l({},v,{untilGrain:a,untilGrainValue:parseInt(n,10),sinceDatetime:t,untilDatetime:t,untilMode:"relative",sinceMode:i}),matchedFlag:!0}}if(a&&r){let[e,t,n]=a.slice(1),[i,o,c]=r.slice(1);if(e===i)return{customRange:l({},v,{sinceGrain:n,sinceGrainValue:parseInt(t,10),sinceDatetime:e,untilGrain:c,untilGrainValue:parseInt(o,10),untilDatetime:i,anchorValue:e,sinceMode:"relative",untilMode:"relative",anchorMode:"now"===e?"now":"specific"}),matchedFlag:!0}}}return{customRange:v,matchedFlag:!1}}},2426(e,t,n){n.d(t,{wv:()=>u,x9:()=>v});var a=n(58561),l=n.n(a),r=n(62193),i=n.n(r),o=n(73815),c=n(25365),d=n(68655);function s(e,t,n,a,l,r,i){try{var o=e[r](i),c=o.value}catch(e){n(e);return}o.done?t(c):Promise.resolve(c).then(a,l)}let u=" : ",h=(e,t)=>`${e}${u}${t}`,p=(e,t)=>e.replace("T00:00:00","")||(t?"-∞":"∞"),v=(e,t="col",n)=>{var a;return(a=function*(){let a,r;if(i()(n))a=l().encode_uri(e),r=`/api/v1/time_range/?q=${a}`;else{let t=(0,c.A)(n).map(t=>({timeRange:e,shift:t}));a=l().encode_uri([{timeRange:e},...t]),r=`/api/v1/time_range/?q=${a}`}try{var s,v,m,f,g;let e=yield o.A.get({endpoint:r});if(i()(n)){let n=h((null==e||null==(m=e.json)||null==(v=m.result[0])?void 0:v.since)||"",(null==e||null==(g=e.json)||null==(f=g.result[0])?void 0:f.until)||"");return{value:((e,t="col")=>{let n=e.split(u);return 1===n.length?e:`${p(n[0],!0)} ≤ ${t} < ${p(n[1])}`})(n,t)}}let a=null==e||null==(s=e.json)?void 0:s.result.map(e=>h(e.since,e.until));return{value:a.slice(1).map(e=>((e,t,n="col")=>{let a=e.split(u),l=t.split(u);return`${n}: ${p(a[0],!0)} to ${p(a[1])} vs
  ${p(l[0],!0)} to ${p(l[1])}`})(a[0],e,t))}}catch(t){let e=yield(0,d.h4)(t);return{error:e.message||e.error||t.statusText}}},function(){var e=this,t=arguments;return new Promise(function(n,l){var r=a.apply(e,t);function i(e){s(r,n,l,i,o,"next",e)}function o(e){s(r,n,l,i,o,"throw",e)}i(void 0)})})()}},36320(e,t,n){n.d(t,{A:()=>h});var a=n(2445),l=n(27124),r=n(85614),i=n(17437),o=n(33296),c=n(8563),d=n(80967),s=n(60685);let u=(0,i.AH)`
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
`,h=({name:e,label:t,description:n,validationErrors:h=[],renderTrigger:p=!1,rightNode:v,leftNode:m,onClick:f,hovered:g=!1,tooltipOnClick:y=()=>{},warning:b,danger:C})=>{let w=(0,r.useTheme)();return t?(0,a.FD)("div",{className:"ControlHeader","data-test":`${e}-header`,children:[(0,a.Y)("div",{className:"pull-left",children:(0,a.FD)(o.l,{css:e=>(0,i.AH)`
            margin-bottom: ${.5*e.sizeUnit}px;
            position: relative;
            font-size: ${e.fontSizeSM}px;
            overflow: visible;
            padding-bottom: 0.1em;
          `,htmlFor:e,children:[m&&(0,a.FD)("span",{children:[m," "]}),(0,a.Y)("span",{role:"button",tabIndex:0,onClick:f,style:{cursor:f?"pointer":""},children:t})," ",b&&(0,a.FD)("span",{children:[(0,a.Y)(c.m,{id:"error-tooltip",placement:"top",title:b,children:(0,a.Y)(s.F.WarningOutlined,{iconColor:w.colorWarning,css:(0,i.AH)`
                    vertical-align: baseline;
                  `,iconSize:"s"})})," "]}),C&&(0,a.FD)("span",{children:[(0,a.Y)(c.m,{id:"error-tooltip",placement:"top",title:C,children:(0,a.Y)(s.F.CloseCircleOutlined,{iconColor:w.colorErrorText,iconSize:"s"})})," "]}),(null==h?void 0:h.length)>0&&(0,a.FD)("span",{"data-test":"error-tooltip",css:(0,i.AH)`
                cursor: pointer;
              `,children:[(0,a.Y)(c.m,{id:"error-tooltip",placement:"top",title:null==h?void 0:h.join(" "),children:(0,a.Y)(s.F.ExclamationCircleOutlined,{iconColor:w.colorError})})," "]}),g?(0,a.FD)("span",{css:()=>(0,i.AH)`
          position: absolute;
          top: 50%;
          right: 0;
          padding-left: ${w.sizeUnit}px;
          transform: translate(100%, -50%);
          white-space: nowrap;
        `,children:[n&&(0,a.FD)("span",{children:[(0,a.Y)(c.m,{id:"description-tooltip",title:n,placement:"top",children:(0,a.Y)(s.F.InfoCircleOutlined,{css:u,onClick:y})})," "]}),p&&(0,a.FD)("span",{children:[(0,a.Y)(d.I,{label:(0,l.t)("bolt"),tooltip:(0,l.t)("Changing this control takes effect instantly"),placement:"top",type:"notice"})," "]})]}):null]})}),v&&(0,a.Y)("div",{className:"pull-right",children:v}),(0,a.Y)("div",{className:"clearfix"})]}):null}},79126(e,t,n){n.d(t,{A:()=>d,v:()=>o});var a=n(2445),l=n(24002),r=n(73825);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let o=()=>{var e;return null==(e=document.getElementById("controlSections"))?void 0:e.lastElementChild},c=e=>{var t,n;let a=null==(t=window)?void 0:t.innerHeight,l=null==(n=window)?void 0:n.innerWidth,r=null==e?void 0:e.getBoundingClientRect();return a&&l&&(null==r?void 0:r.top)?{yRatio:r.top/a,xRatio:r.left/l}:{yRatio:0,xRatio:0}},d=e=>{let{getPopupContainer:t,getVisibilityRatio:n=c,open:d,destroyTooltipOnHide:s=!1,placement:u="right"}=e,h=function(e,t){if(null==e)return{};var n,a,l={},r=Object.getOwnPropertyNames(e);for(a=0;a<r.length;a++)!(t.indexOf(n=r[a])>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n]);return l}(e,["getPopupContainer","getVisibilityRatio","open","destroyTooltipOnHide","placement"]),p=(0,l.useRef)(),[v,m]=(0,l.useState)(void 0===d?h.defaultOpen:d),[f,g]=l.useState(u),y=(0,l.useCallback)(()=>{if(!p.current||!v)return;let{yRatio:e,xRatio:t}=n(p.current),a=t<.35?"right":t>.65?"left":"",l=e<.35?a?"top":"bottom":e>.65?a?"bottom":"top":"",r=(a?a+l.charAt(0).toUpperCase()+l.slice(1):l)||"left";r!==f&&g(r)},[n,v,f]),b=(0,l.useCallback)(e=>{let t=o();t&&t.style.setProperty("overflow-y",e?"hidden":"auto","important")},[y]),C=(0,l.useCallback)(e=>(p.current=e,(null==t?void 0:t(e))||document.body),[y,t]),w=(0,l.useCallback)(e=>{void 0===e&&b(e),m(!!e),null==h.onOpenChange||h.onOpenChange.call(h,!!e)},[h,b]),Y=(0,l.useCallback)(e=>{"Escape"===e.key&&(m(!1),null==h.onOpenChange||h.onOpenChange.call(h,!1))},[h]),D=(0,l.useCallback)(e=>{e&&y()},[y]);return(0,l.useEffect)(()=>{void 0!==d&&m(!!d)},[d]),(0,l.useEffect)(()=>{void 0!==v&&b(v)},[v,b]),(0,l.useEffect)(()=>(v&&document.addEventListener("keydown",Y),()=>{document.removeEventListener("keydown",Y)}),[Y,v]),(0,l.useEffect)(()=>{if(!v||!p.current)return()=>{};let e=new ResizeObserver(()=>{requestAnimationFrame(()=>{y()})}),t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&y()})},{threshold:[0,.25,.5,.75,1]});return e.observe(p.current.parentElement||document.body),t.observe(p.current),()=>{e.disconnect(),t.disconnect()}},[v,y]),(0,a.Y)(r.A,i({},h,{open:v,arrow:{pointAtCenter:!0},placement:f,onOpenChange:w,getPopupContainer:C,destroyTooltipOnHide:s,afterOpenChange:D}))}},18827(e,t,n){n.d(t,{A:()=>K});var a=n(2445),l=n(24002),r=n(27124),i=n(4392),o=n(65802),c=n(2426),d=n(85614),s=n(17437),u=n(68292),h=n(47036),p=n(70621),v=n(29138),m=n(8563),f=n(36320),g=n(60685),y=n(27664),b=n(62388),C=n(79126),w=n(90609),Y=n(891);function D(e){let t="Last week";return w.Be.has(e.value)?t=e.value:e.onChange(t),(0,a.FD)(a.FK,{children:[(0,a.Y)("div",{className:"section-title","data-test":w.ad.CommonFrame,children:(0,r.t)("Configure Time Range: Last...")}),(0,a.Y)(Y.s.GroupWrapper,{spaceConfig:{direction:"vertical",size:15,align:"start",wrap:!1},size:"large",value:t,onChange:t=>e.onChange(t.target.value),options:w.z6})]})}var $=n(52522);function x({onChange:e,value:t}){return((0,l.useEffect)(()=>{w.oo.has(t)||e($.sw)},[e,t]),w.oo.has(t))?(0,a.FD)(a.FK,{children:[(0,a.Y)("div",{className:"section-title",children:(0,r.t)("Configure Time Range: Previous...")}),(0,a.Y)(Y.s.GroupWrapper,{spaceConfig:{direction:"vertical",size:15,align:"start",wrap:!1},size:"large",value:t,onChange:t=>e(t.target.value),options:w.cn})]}):null}function A({onChange:e,value:t}){return((0,l.useEffect)(()=>{w.yI.has(t)||e($.ke)},[t]),w.yI.has(t))?(0,a.FD)(a.FK,{children:[(0,a.Y)("div",{className:"section-title",children:(0,r.t)("Configure Time Range: Current...")}),(0,a.Y)(Y.s.GroupWrapper,{spaceConfig:{direction:"vertical",size:15,align:"start",wrap:!0},size:"large",onChange:t=>{let n=t.target.value;""!==(n=n.trim())&&e(n)},options:w.ZC})]}):null}var F=n(96003),O=n(10020),S=n(78921),E=n(22022),T=n(80967),N=n(10120),R=n(53557);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function I(e){let{customRange:t,matchedFlag:n}=(0,F.t)(e.value),l=(0,R.Y)();n||e.onChange((0,w.IS)(t));let{sinceDatetime:i,sinceMode:o,sinceGrain:c,sinceGrainValue:d,untilDatetime:s,untilMode:h,untilGrain:p,untilGrainValue:v,anchorValue:m,anchorMode:f}=k({},t);function g(n,a){e.onChange((0,w.IS)(k({},t,{[n]:a})))}function y(n,a){"number"==typeof a&&Number.isInteger(a)&&a>0&&e.onChange((0,w.IS)(k({},t,{[n]:a})))}return null===l?(0,a.Y)(O.R,{position:"inline-centered"}):(0,a.Y)(S.Q,{locale:l,children:(0,a.FD)("div",{"data-test":"custom-frame",children:[(0,a.Y)("div",{className:"section-title",children:(0,r.t)("Configure custom time range")}),(0,a.FD)(E.Row,{gutter:24,children:[(0,a.FD)(E.Col,{span:12,children:[(0,a.FD)("div",{className:"control-label",children:[(0,r.t)("Start (inclusive)")," ",(0,a.Y)(T.I,{tooltip:(0,r.t)("Start date included in time range"),placement:"right"})]}),(0,a.Y)(u.A,{ariaLabel:(0,r.t)("Start (inclusive)"),options:w.Wm,value:o,onChange:e=>g("sinceMode",e)}),"specific"===o&&(0,a.Y)(E.Row,{children:(0,a.Y)(N.l,{showTime:!0,defaultValue:(0,w.Ab)(i),onChange:e=>g("sinceDatetime",e.format(w.c1)),allowClear:!1,getPopupContainer:t=>e.isOverflowingFilterBar?t.parentNode:document.body})}),"relative"===o&&(0,a.FD)(E.Row,{gutter:8,children:[(0,a.Y)(E.Col,{span:11,children:(0,a.Y)(E.InputNumber,{placeholder:(0,r.t)("Relative quantity"),value:Math.abs(d),min:1,defaultValue:1,onChange:e=>y("sinceGrainValue",e||1),onStep:e=>y("sinceGrainValue",e||1)})}),(0,a.Y)(E.Col,{span:13,children:(0,a.Y)(u.A,{ariaLabel:(0,r.t)("Relative period"),options:w.IZ,value:c,onChange:e=>g("sinceGrain",e)})})]})]}),(0,a.FD)(E.Col,{span:12,children:[(0,a.FD)("div",{className:"control-label",children:[(0,r.t)("End (exclusive)")," ",(0,a.Y)(T.I,{tooltip:(0,r.t)("End date excluded from time range"),placement:"right"})]}),(0,a.Y)(u.A,{ariaLabel:(0,r.t)("End (exclusive)"),options:w.OP,value:h,onChange:e=>g("untilMode",e)}),"specific"===h&&(0,a.Y)(E.Row,{children:(0,a.Y)(N.l,{showTime:!0,defaultValue:(0,w.Ab)(s),onChange:e=>g("untilDatetime",e.format(w.c1)),allowClear:!1,getPopupContainer:t=>e.isOverflowingFilterBar?t.parentNode:document.body})}),"relative"===h&&(0,a.FD)(E.Row,{gutter:8,children:[(0,a.Y)(E.Col,{span:11,children:(0,a.Y)(E.InputNumber,{placeholder:(0,r.t)("Relative quantity"),value:v,min:1,defaultValue:1,onChange:e=>y("untilGrainValue",e||1),onStep:e=>y("untilGrainValue",e||1)})}),(0,a.Y)(E.Col,{span:13,children:(0,a.Y)(u.A,{ariaLabel:(0,r.t)("Relative period"),options:w.s6,value:p,onChange:e=>g("untilGrain",e)})})]})]})]}),"relative"===o&&"relative"===h&&(0,a.FD)("div",{className:"control-anchor-to",children:[(0,a.Y)("div",{className:"control-label",children:(0,r.t)("Anchor to")}),(0,a.FD)(E.Row,{align:"middle",children:[(0,a.Y)(E.Col,{children:(0,a.Y)(Y.s.GroupWrapper,{options:[{value:"now",label:(0,r.t)("Now")},{value:"specific",label:(0,r.t)("Date/Time")}],onChange:function(n){let a=n.target.value;"now"===a?e.onChange((0,w.IS)(k({},t,{anchorValue:"now",anchorMode:a}))):e.onChange((0,w.IS)(k({},t,{anchorValue:w.bd,anchorMode:a})))},defaultValue:"now",value:f})}),"now"!==f&&(0,a.Y)(E.Col,{children:(0,a.Y)(N.l,{showTime:!0,defaultValue:(0,w.Ab)(m),onChange:e=>g("anchorValue",e.format(w.c1)),allowClear:!1,className:"control-anchor-to-datetime",getPopupContainer:t=>e.isOverflowingFilterBar?t.parentNode:document.body})})]})]})]})})}function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let z=(0,a.FD)(a.FK,{children:[(0,a.FD)("div",{children:[(0,a.Y)("h3",{children:"DATETIME"}),(0,a.Y)("p",{children:(0,r.t)("Return to specific datetime.")}),(0,a.Y)("h4",{children:(0,r.t)("Syntax")}),(0,a.Y)("pre",{children:(0,a.Y)("code",{children:"datetime([string])"})}),(0,a.Y)("h4",{children:(0,r.t)("Example")}),(0,a.Y)("pre",{children:(0,a.Y)("code",{children:`datetime("2020-03-01 12:00:00")
datetime("now")
datetime("last year")`})})]}),(0,a.FD)("div",{children:[(0,a.Y)("h3",{children:"DATEADD"}),(0,a.Y)("p",{children:(0,r.t)("Moves the given set of dates by a specified interval.")}),(0,a.Y)("h4",{children:(0,r.t)("Syntax")}),(0,a.Y)("pre",{children:(0,a.Y)("code",{children:`dateadd([datetime], [integer], [dateunit])
dateunit = (year | quarter | month | week | day | hour | minute | second)`})}),(0,a.Y)("h4",{children:(0,r.t)("Example")}),(0,a.Y)("pre",{children:(0,a.Y)("code",{children:`dateadd(datetime("today"), -13, day)
dateadd(datetime("2020-03-01"), 2, day)`})})]}),(0,a.FD)("div",{children:[(0,a.Y)("h3",{children:"DATETRUNC"}),(0,a.Y)("p",{children:(0,r.t)("Truncates the specified date to the accuracy specified by the date unit.")}),(0,a.Y)("h4",{children:(0,r.t)("Syntax")}),(0,a.Y)("pre",{children:(0,a.Y)("code",{children:`datetrunc([datetime], [dateunit])
dateunit = (year | quarter | month | week)`})}),(0,a.Y)("h4",{children:(0,r.t)("Example")}),(0,a.Y)("pre",{children:(0,a.Y)("code",{children:`datetrunc(datetime("2020-03-01"), week)
datetrunc(datetime("2020-03-01"), month)`})})]}),(0,a.FD)("div",{children:[(0,a.Y)("h3",{children:"LASTDAY"}),(0,a.Y)("p",{children:(0,r.t)("Get the last date by the date unit.")}),(0,a.Y)("h4",{children:(0,r.t)("Syntax")}),(0,a.Y)("pre",{children:(0,a.Y)("code",{children:`lastday([datetime], [dateunit])
dateunit = (year | month | week)`})}),(0,a.Y)("h4",{children:(0,r.t)("Example")}),(0,a.Y)("pre",{children:(0,a.Y)("code",{children:'lastday(datetime("today"), month)'})})]}),(0,a.FD)("div",{children:[(0,a.Y)("h3",{children:"HOLIDAY"}),(0,a.Y)("p",{children:(0,r.t)("Get the specify date for the holiday")}),(0,a.Y)("h4",{children:(0,r.t)("Syntax")}),(0,a.Y)("pre",{children:(0,a.Y)("code",{children:`holiday([string])
holiday([holiday string], [datetime])
holiday([holiday string], [datetime], [country name])`})}),(0,a.Y)("h4",{children:(0,r.t)("Example")}),(0,a.Y)("pre",{children:(0,a.Y)("code",{children:`holiday("new year")
holiday("christmas", datetime("2019"))
holiday("christmas", dateadd(datetime("2019"), 1, year))
holiday("christmas", datetime("2 years ago"))
holiday("Easter Monday", datetime("2019"), "UK")`})})]})]}),L=e=>{let t=(0,d.useTheme)();return(0,a.Y)(s.Z2,{children:({css:n})=>(0,a.Y)(m.m,M({overlayClassName:n`
            .ant-tooltip-content {
              min-width: ${125*t.sizeUnit}px;
              max-height: 410px;
              overflow-y: scroll;

              .ant-tooltip-inner {
                max-width: ${125*t.sizeUnit}px;
                h3 {
                  font-size: ${t.fontSize}px;
                  font-weight: ${t.fontWeightStrong};
                }
                h4 {
                  font-size: ${t.fontSize}px;
                  font-weight: ${t.fontWeightStrong};
                }
                pre {
                  border: none;
                  text-align: left;
                  word-break: break-word;
                  font-size: ${t.fontSizeSM}px;
                }
              }
            }
          `},e))})};function P(e){return(0,a.Y)(L,M({title:z},e))}function W(e){return e.includes(c.wv)?e:e.startsWith("Last")?[e,""].join(c.wv):e.startsWith("Next")?["",e].join(c.wv):c.wv}function V(e){let t=W(e.value||""),[n,l]=t.split(c.wv);function i(t,a){"since"===t?e.onChange(`${a}${c.wv}${l}`):e.onChange(`${n}${c.wv}${a}`)}return t!==e.value&&e.onChange(W(e.value||"")),(0,a.FD)(a.FK,{children:[(0,a.FD)("div",{className:"section-title",children:[(0,r.t)("Configure Advanced Time Range "),(0,a.Y)(P,{placement:"rightBottom",children:(0,a.Y)(g.F.InfoCircleOutlined,{})})]}),(0,a.FD)("div",{className:"control-label",children:[(0,r.t)("Start (inclusive)")," ",(0,a.Y)(T.I,{tooltip:(0,r.t)("Start date included in time range"),placement:"right"})]}),(0,a.Y)(E.Input,{value:n,onChange:e=>i("since",e.target.value)},"since"),(0,a.FD)("div",{className:"control-label",children:[(0,r.t)("End (exclusive)")," ",(0,a.Y)(T.I,{tooltip:(0,r.t)("End date excluded from time range"),placement:"right"})]}),(0,a.Y)(E.Input,{value:l,onChange:e=>i("until",e.target.value)},"until")]})}function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let j=d.styled.div`
  ${({theme:e,isActive:t,isPlaceholder:n})=>(0,s.AH)`
    height: ${8*e.sizeUnit}px;

    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    padding: 0 ${3*e.sizeUnit}px;

    background-color: ${e.colorBgContainer};

    border: 1px solid ${t?e.colorPrimary:e.colorBorder};
    border-radius: ${e.borderRadius}px;

    cursor: pointer;

    transition: border-color 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
    :hover,
    :focus {
      border-color: ${e.colorPrimary};
    }

    .date-label-content {
      color: ${n?e.colorTextPlaceholder:e.colorText};
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
      flex-shrink: 1;
      white-space: nowrap;
    }

    span[role='img'] {
      color: ${n?e.colorTextPlaceholder:e.colorText};
      margin-left: auto;
      padding-left: ${e.sizeUnit}px;

      & > span[role='img'] {
        line-height: 0;
      }
    }
  `}
`,G=(0,l.forwardRef)((e,t)=>(0,a.FD)(j,H({},e,{tabIndex:0,role:"button",children:[(0,a.Y)("span",{id:`date-label-${e.name}`,className:"date-label-content",ref:t,children:"string"==typeof e.label?(0,r.t)(e.label):e.label}),(0,a.Y)(g.F.CalendarOutlined,{iconSize:"s"})]})));function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let U=(0,d.styled)(u.A)`
  width: 272px;
`,q=d.styled.div`
  ${({theme:e})=>(0,s.AH)`
    .ant-row {
      margin-top: 8px;
    }

    .ant-picker {
      padding: 4px 17px 4px;
      border-radius: 4px;
    }

    .ant-divider-horizontal {
      margin: 16px 0;
    }

    .control-label {
      font-size: ${e.fontSizeSM}px;
      line-height: 16px;
      margin: 8px 0;
    }

    .section-title {
      font-style: normal;
      font-weight: ${e.fontWeightStrong};
      font-size: 15px;
      line-height: 24px;
      margin-bottom: 8px;
    }

    .control-anchor-to {
      margin-top: 16px;
    }

    .control-anchor-to-datetime {
      width: 217px;
    }

    .footer {
      text-align: right;
    }
  `}
`,_=d.styled.span`
  span {
    margin-right: ${({theme:e})=>2*e.sizeUnit}px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
  .error {
    color: ${({theme:e})=>e.colorError};
  }
`,Z=(e,t,n)=>e?(0,a.FD)("div",{children:[t&&(0,a.Y)("strong",{children:t}),n&&(0,a.Y)("div",{css:e=>(0,s.AH)`
            margin-top: ${e.sizeUnit}px;
          `,children:n})]}):n||null;function K(e){var t;let{name:n,onChange:s,onOpenPopover:u=b.fZ,onClosePopover:Y=b.fZ,isOverflowingFilterBar:$=!1}=e,F=(0,w.IM)(),O=null!=(t=e.value)?t:F,[S,E]=(0,l.useState)(O),[T,N]=(0,l.useState)(!1),R=(0,l.useMemo)(()=>(0,w.J5)(O),[O]),[k,M]=(0,l.useState)(R),[z,L]=(0,l.useState)(O),[P,W]=(0,l.useState)(O),[H,j]=(0,l.useState)(!1),[K,J]=(0,l.useState)(O),[X,Q]=(0,l.useState)(O),ee=(0,d.useTheme)(),[et,en]=(0,i.A)();function ea(){W(O),M(R),N(!1),Y()}(0,l.useEffect)(()=>{if(O===o.WC){E(o.WC),Q(null),j(!0);return}(0,c.x9)(O).then(({value:e,error:t})=>{t?(J(t||""),j(!1),Q(O||null)):("Common"===R||"Calendar"===R||"Current"===R||"No filter"===R?(E(O),Q(Z(en,O,e))):(E(e||""),Q(Z(en,e,O))),j(!0)),L(O),J(e||O)})},[R,en,et,O]),(0,y.sv)(()=>{if(P===o.WC){J(o.WC),L(o.WC),j(!0);return}z!==P&&(0,c.x9)(P).then(({value:e,error:t})=>{t?(J(t||""),j(!1)):(J(e||""),j(!0)),L(P)})},h.Y.SLOW_DEBOUNCE,[P]);let el=(0,a.FD)(q,{children:[(0,a.Y)("div",{className:"control-label",children:(0,r.t)("Range type")}),(0,a.Y)(U,{ariaLabel:(0,r.t)("Range type"),options:w.BJ,value:k,onChange:function(e){e===o.WC&&W(o.WC),M(e)}}),"No filter"!==k&&(0,a.Y)(p.c,{}),"Common"===k&&(0,a.Y)(D,{value:P,onChange:W}),"Calendar"===k&&(0,a.Y)(x,{value:P,onChange:W}),"Current"===k&&(0,a.Y)(A,{value:P,onChange:W}),"Advanced"===k&&(0,a.Y)(V,{value:P,onChange:W}),"Custom"===k&&(0,a.Y)(I,{value:P,onChange:W,isOverflowingFilterBar:$}),"No filter"===k&&(0,a.Y)("div",{"data-test":w.ad.NoFilter}),(0,a.Y)(p.c,{}),(0,a.FD)("div",{children:[(0,a.Y)("div",{className:"section-title",children:(0,r.t)("Actual time range")}),H&&(0,a.Y)("div",{children:"No filter"===K?(0,r.t)("No filter"):K}),!H&&(0,a.FD)(_,{className:"warning",children:[(0,a.Y)(g.F.ExclamationCircleOutlined,{iconColor:ee.colorError}),(0,a.Y)("span",{className:"text error",children:K})]})]}),(0,a.Y)(p.c,{}),(0,a.FD)("div",{className:"footer",children:[(0,a.Y)(v.$n,{buttonStyle:"secondary",cta:!0,onClick:ea,"data-test":w.ad.CancelButton,children:(0,r.t)("CANCEL")},"cancel"),(0,a.Y)(v.$n,{buttonStyle:"primary",cta:!0,disabled:!H,onClick:function(){s(P),N(!1),Y()},"data-test":w.ad.ApplyButton,children:(0,r.t)("APPLY")},"apply")]})]}),er=(0,a.Y)(C.A,{autoAdjustOverflow:!1,trigger:"click",placement:"right",content:el,title:(0,a.FD)(_,{children:[(0,a.Y)(g.F.EditOutlined,{}),(0,a.Y)("span",{className:"text",children:(0,r.t)("Edit time range")})]}),defaultOpen:T,open:T,onOpenChange:()=>{T?ea():(W(O),M(R),N(!0),u())},overlayStyle:{width:"600px"},destroyTooltipOnHide:!0,getPopupContainer:e=>$?e.parentNode:document.body,overlayClassName:"time-range-popover",children:(0,a.Y)(m.m,{placement:"top",title:X,children:(0,a.Y)(G,{name:n,"aria-labelledby":`filter-name-${e.name}`,"aria-describedby":`date-label-${e.name}`,label:S,isActive:T,isPlaceholder:S===o.WC,"data-test":w.ad.PopoverOverlay,ref:et})})});return(0,a.FD)(a.FK,{children:[(0,a.Y)(f.A,B({},e)),er]})}},48511(e,t,n){n.d(t,{Ay:()=>a.A});var a=n(18827);n(90609)},52522(e,t,n){n.d(t,{RV:()=>s,be:()=>i,cJ:()=>d,ke:()=>c,kw:()=>u,o6:()=>r,oF:()=>l,sw:()=>a,u_:()=>o});let a="previous calendar week",l="previous calendar month",r="previous calendar quarter",i="previous calendar year",o="Current day",c="Current week",d="Current month",s="Current year",u="Current quarter"},90609(e,t,n){n.d(t,{cn:()=>s,oo:()=>C,nS:()=>u,z6:()=>c,Be:()=>b,OL:()=>d,yI:()=>w,ZC:()=>h,Ex:()=>p,c1:()=>Y,ad:()=>$,BJ:()=>o,bd:()=>D,IZ:()=>m,Wm:()=>g,s6:()=>f,OP:()=>y,IS:()=>T,Ab:()=>S,J5:()=>I,IM:()=>M});var a,l=n(45507),r=n(27124),i=n(52522);let o=[{value:"Common",label:(0,r.t)("Last")},{value:"Calendar",label:(0,r.t)("Previous")},{value:"Current",label:(0,r.t)("Current")},{value:"Custom",label:(0,r.t)("Custom")},{value:"Advanced",label:(0,r.t)("Advanced")},{value:"No filter",label:(0,r.t)("No filter")}],c=[{value:"Last day",label:(0,r.t)("Last day")},{value:"Last week",label:(0,r.t)("Last week")},{value:"Last month",label:(0,r.t)("Last month")},{value:"Last quarter",label:(0,r.t)("Last quarter")},{value:"Last year",label:(0,r.t)("Last year")}],d=new Set(c.map(e=>e.value)),s=[{value:i.sw,label:(0,r.t)("previous calendar week")},{value:i.oF,label:(0,r.t)("previous calendar month")},{value:i.o6,label:(0,r.t)("previous calendar quarter")},{value:i.be,label:(0,r.t)("previous calendar year")}],u=new Set(s.map(e=>e.value)),h=[{value:i.u_,label:(0,r.t)("Current day")},{value:i.ke,label:(0,r.t)("Current week")},{value:i.cJ,label:(0,r.t)("Current month")},{value:i.kw,label:(0,r.t)("Current quarter")},{value:i.RV,label:(0,r.t)("Current year")}],p=new Set(h.map(e=>e.value)),v=[{value:"second",label:e=>(0,r.t)("Seconds %s",e)},{value:"minute",label:e=>(0,r.t)("Minutes %s",e)},{value:"hour",label:e=>(0,r.t)("Hours %s",e)},{value:"day",label:e=>(0,r.t)("Days %s",e)},{value:"week",label:e=>(0,r.t)("Weeks %s",e)},{value:"month",label:e=>(0,r.t)("Months %s",e)},{value:"quarter",label:e=>(0,r.t)("Quarters %s",e)},{value:"year",label:e=>(0,r.t)("Years %s",e)}],m=v.map(e=>({value:e.value,label:e.label((0,r.t)("Before"))})),f=v.map(e=>({value:e.value,label:e.label((0,r.t)("After"))})),g=[{value:"specific",label:(0,r.t)("Specific Date/Time")},{value:"relative",label:(0,r.t)("Relative Date/Time")},{value:"now",label:(0,r.t)("Now")},{value:"today",label:(0,r.t)("Midnight")}],y=g.slice(),b=new Set(["Last day","Last week","Last month","Last quarter","Last year"]),C=new Set([i.sw,i.oF,i.o6,i.be]),w=new Set([i.u_,i.ke,i.cJ,i.kw,i.RV]),Y="YYYY-MM-DD[T]HH:mm:ss";(0,l.XV)().utc().startOf("day").subtract(7,"days").format(Y);let D=(0,l.XV)().utc().startOf("day").format(Y);var $=((a={}).CommonFrame="common-frame",a.ModalOverlay="modal-overlay",a.PopoverOverlay="time-range-trigger",a.NoFilter="no-filter",a.CancelButton="cancel-button",a.ApplyButton="date-filter-control__apply-button",a);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let A=String.raw`\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?(?:(?:[+-]\d\d:\d\d)|Z)?`,F=String.raw`(?:TODAY|NOW)`;RegExp(String.raw`^${A}$|^${F}$`,"i");let O=["specific","today","now"],S=e=>"now"===e?(0,l.XV)().utc().startOf("second"):"today"===e?(0,l.XV)().utc().startOf("day"):(0,l.XV)(e),E=e=>S(e).format(Y),T=e=>{let{sinceDatetime:t,sinceMode:n,sinceGrain:a,sinceGrainValue:l,untilDatetime:r,untilMode:i,untilGrain:o,untilGrainValue:c,anchorValue:d}=x({},e);if(O.includes(n)&&O.includes(i)){let e="specific"===n?E(t):n,a="specific"===i?E(r):i;return`${e} : ${a}`}if(O.includes(n)&&"relative"===i){let e="specific"===n?E(t):n,a=`DATEADD(DATETIME("${e}"), ${c}, ${o})`;return`${e} : ${a}`}if("relative"===n&&O.includes(i)){let e="specific"===i?E(r):i,t=`DATEADD(DATETIME("${e}"), ${-Math.abs(l)}, ${a})`;return`${t} : ${e}`}let s=`DATEADD(DATETIME("${d}"), ${-Math.abs(l)}, ${a})`,u=`DATEADD(DATETIME("${d}"), ${c}, ${o})`;return`${s} : ${u}`};var N=n(65802),R=n(96003),k=n(61225);let I=e=>d.has(e)?"Common":u.has(e)?"Calendar":p.has(e)?"Current":e===N.WC?"No filter":(0,R.t)(e).matchedFlag?"Custom":"Advanced";function M(){var e;return null!=(e=(0,k.d4)(e=>{var t,n;return null==e||null==(n=e.common)||null==(t=n.conf)?void 0:t.DEFAULT_TIME_FILTER}))?e:N.WC}},54299(e,t,n){n.d(t,{Mo:()=>o,YH:()=>r,j3:()=>i});var a=n(85614),l=n(93225);let r=0,i=a.styled.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>e===r?"100%":`${e}px`};
`;(0,a.styled)(l.e)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`;let o=a.styled.div`
  color: ${({theme:e,status:t="error"})=>{if("help"===t)return e.colorTextSecondary;switch(t){case"error":default:return e.colorError;case"warning":return e.colorWarning;case"info":return e.colorInfo}}};
  text-align: ${({centerText:e})=>e?"center":"left"};
  width: 100%;
`}}]);