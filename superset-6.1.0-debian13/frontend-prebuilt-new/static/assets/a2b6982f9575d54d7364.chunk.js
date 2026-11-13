"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6648],{96003(e,t,n){n.d(t,{t:()=>p});var r=n(2426);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let i=String.raw`\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?(?:(?:[+-]\d\d:\d\d)|Z)?`,a=String.raw`(?:TODAY|NOW)`,o=String.raw`[+-]?[1-9][0-9]*`,s=String.raw`YEAR|QUARTER|MONTH|WEEK|DAY|HOUR|MINUTE|SECOND`,u=RegExp(String.raw`^DATEADD\(DATETIME\("(${i}|${a})"\),\s(${o}),\s(${s})\)$`,"i"),c=RegExp(String.raw`^${i}$|^${a}$`,"i"),d=["now","today"],m=new Date;m.setHours(0,0,0,0);let f=new Date;f.setHours(0,0,0,0);let g={sinceDatetime:m.setDate(m.getDate()-7).toString(),sinceMode:"relative",sinceGrain:"day",sinceGrainValue:-7,untilDatetime:f.toString(),untilMode:"specific",untilGrain:"day",untilGrainValue:7,anchorMode:"now",anchorValue:"now"},p=e=>{let t=e.split(r.wv);if(2===t.length){let[e,n]=t;if(c.test(e)&&c.test(n)){let t=d.includes(e)?e:"specific",r=d.includes(n)?n:"specific";return{customRange:l({},g,{sinceDatetime:e,untilDatetime:n,sinceMode:t,untilMode:r}),matchedFlag:!0}}let r=e.match(u);if(r&&c.test(n)&&e.includes(n)){let[e,t,i]=r.slice(1),a=d.includes(n)?n:"specific";return{customRange:l({},g,{sinceGrain:i,sinceGrainValue:parseInt(t,10),sinceDatetime:e,untilDatetime:e,sinceMode:"relative",untilMode:a}),matchedFlag:!0}}let i=n.match(u);if(c.test(e)&&i&&n.includes(e)){let[t,n,r]=i.slice(1),a=d.includes(e)?e:"specific";return{customRange:l({},g,{untilGrain:r,untilGrainValue:parseInt(n,10),sinceDatetime:t,untilDatetime:t,untilMode:"relative",sinceMode:a}),matchedFlag:!0}}if(r&&i){let[e,t,n]=r.slice(1),[a,o,s]=i.slice(1);if(e===a)return{customRange:l({},g,{sinceGrain:n,sinceGrainValue:parseInt(t,10),sinceDatetime:e,untilGrain:s,untilGrainValue:parseInt(o,10),untilDatetime:a,anchorValue:e,sinceMode:"relative",untilMode:"relative",anchorMode:"now"===e?"now":"specific"}),matchedFlag:!0}}}return{customRange:g,matchedFlag:!1}}},2426(e,t,n){n.d(t,{wv:()=>d,x9:()=>g});var r=n(58561),l=n.n(r),i=n(62193),a=n.n(i),o=n(73815),s=n(25365),u=n(68655);function c(e,t,n,r,l,i,a){try{var o=e[i](a),s=o.value}catch(e){n(e);return}o.done?t(s):Promise.resolve(s).then(r,l)}let d=" : ",m=(e,t)=>`${e}${d}${t}`,f=(e,t)=>e.replace("T00:00:00","")||(t?"-∞":"∞"),g=(e,t="col",n)=>{var r;return(r=function*(){let r,i;if(a()(n))r=l().encode_uri(e),i=`/api/v1/time_range/?q=${r}`;else{let t=(0,s.A)(n).map(t=>({timeRange:e,shift:t}));r=l().encode_uri([{timeRange:e},...t]),i=`/api/v1/time_range/?q=${r}`}try{var c,g,p,h,v;let e=yield o.A.get({endpoint:i});if(a()(n)){let n=m((null==e||null==(p=e.json)||null==(g=p.result[0])?void 0:g.since)||"",(null==e||null==(v=e.json)||null==(h=v.result[0])?void 0:h.until)||"");return{value:((e,t="col")=>{let n=e.split(d);return 1===n.length?e:`${f(n[0],!0)} ≤ ${t} < ${f(n[1])}`})(n,t)}}let r=null==e||null==(c=e.json)?void 0:c.result.map(e=>m(e.since,e.until));return{value:r.slice(1).map(e=>((e,t,n="col")=>{let r=e.split(d),l=t.split(d);return`${n}: ${f(r[0],!0)} to ${f(r[1])} vs
  ${f(l[0],!0)} to ${f(l[1])}`})(r[0],e,t))}}catch(t){let e=yield(0,u.h4)(t);return{error:e.message||e.error||t.statusText}}},function(){var e=this,t=arguments;return new Promise(function(n,l){var i=r.apply(e,t);function a(e){c(i,n,l,a,o,"next",e)}function o(e){c(i,n,l,a,o,"throw",e)}a(void 0)})})()}},95980(e,t,n){n.d(t,{M9:()=>u,TX:()=>c,cy:()=>s});var r=n(62193),l=n.n(r),i=n(25365),a=n(96003);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let s=(e,t=!1,n=!1)=>{let r=new Date;if("now"===e||"No filter"===e||""===e)return r;if("today"===e)return r.setHours(0,0,0,0),r;if(n?r.setHours(-r.getTimezoneOffset()/60,0,0,0):r.setHours(0,0,0,0),t&&(null==e?void 0:e.includes("Last")))return r;switch(e){case"Last day":return r.setUTCDate(r.getUTCDate()-1),r;case"Last week":return r.setUTCDate(r.getUTCDate()-7),r;case"Last month":return r.setUTCMonth(r.getUTCMonth()-1),r;case"Last quarter":return r.setUTCMonth(r.getUTCMonth()-3),r;case"Last year":return r.setUTCFullYear(r.getUTCFullYear()-1),r;case"previous calendar week":return t?r.setDate(r.getDate()-r.getDay()+1):r.setDate(r.getDate()-r.getDay()-6),r;case"previous calendar month":return t?r.setDate(1):(r.setDate(1),r.setMonth(r.getMonth()-1)),r;case"previous calendar year":return t?r.setFullYear(r.getFullYear(),0,1):r.setFullYear(r.getFullYear()-1,0,1),r}if(null==e?void 0:e.includes("ago")){let t=e.split(" "),n=parseInt(t[0],10);switch(t[1]){case"day":case"days":r.setUTCDate(r.getUTCDate()-n);break;case"week":case"weeks":r.setUTCDate(r.getUTCDate()-7*n);break;case"month":case"months":r.setUTCMonth(r.getUTCMonth()-n);break;case"year":case"years":r.setUTCFullYear(r.getUTCFullYear()-n)}return r}let i=null==e?void 0:e.split("-"),a=null;return(a=i&&!l()(i)?1===i.length?new Date(Date.UTC(parseInt(i[0],10),0)):2===i.length?new Date(Date.UTC(parseInt(i[0],10),parseInt(i[1],10)-1)):3===i.length?new Date(parseInt(i[0],10),parseInt(i[1],10)-1,parseInt(i[2],10)):new Date(e):new Date(e))&&!Number.isNaN(a.getTime())?(n?a.setHours(-a.getTimezoneOffset()/60,0,0,0):a.setHours(0,0,0,0),a):null},u=(e,t,n)=>{let r;if(!Number.isNaN((r="now"===e||"today"===e?new Date:new Date(e)).getTime())){switch(t){case"second":r.setSeconds(r.getSeconds()+n);break;case"minute":r.setMinutes(r.getMinutes()+n);break;case"hour":r.setHours(r.getHours()+n);break;case"day":r.setDate(r.getDate()+n);break;case"week":r.setDate(r.getDate()+7*n);break;case"month":r.setMonth(r.getMonth()+n);break;case"quarter":r.setMonth(r.getMonth()+3*n);break;case"year":r.setFullYear(r.getFullYear()+n)}return r}return null},c=({timeRangeFilter:e,shifts:t,startDate:n,includeFutureOffsets:r=!0})=>{var l,c,d,m,f;let g,{customRange:p,matchedFlag:h}=(0,a.t)(null!=(l=null==e?void 0:e.comparator)?l:""),v=null,y=null;if(h){let{sinceDatetime:e,sinceMode:t,sinceGrain:n,sinceGrainValue:r,untilDatetime:l,untilMode:i,untilGrain:a,untilGrainValue:c}=o({},p);null==(v="relative"!==t?"specific"===t?new Date(e):s(e,!1,!0):u(e,n,r))||v.setHours(0,0,0,0),null==(y="relative"!==i?"specific"===i?new Date(l):s(l,!1,!0):u(l,a,c))||y.setHours(0,0,0,0)}let D=null==t?void 0:t.includes("custom"),w=null==t?void 0:t.includes("inherit");D&&(g=h?new Date(new Date(n).setUTCHours(new Date(n).getTimezoneOffset()/60,0,0,0)).getTime():null==(f=s(n))?void 0:f.getTime());let[$,T]=(null!=(c=null==e?void 0:e.comparator)?c:"").split(" : ").map(e=>e.trim()),b=(null==(d=null!=v?v:s($,!1,!1))?void 0:d.getTime())||0,x=(null==(m=null!=y?y:s(T||$,!0,!1))?void 0:m.getTime())||0,C=g&&b&&Math.round((b-g)/864e5),M=w&&x&&b&&Math.round((x-b)/864e5),U=(0,i.A)(t).map(e=>{if("custom"===e&&void 0!==C&&!Number.isNaN(C)){if(r&&C<0)return`${-1*C} days after`;if(C>=0&&b)return`${C} days ago`}if("inherit"===e&&M&&!Number.isNaN(M)){if(r&&M<0)return`${-1*M} days after`;if(M>0)return`${M} days ago`}return e}).filter(e=>"custom"!==e&&"inherit"!==e);return(0,i.A)(U)}},36648(e,t,n){n.r(t),n.d(t,{default:()=>b});var r=n(2445),l=n(24002),i=n(27124),a=n(2426),o=n(95980),s=n(25365),u=n(85614),c=n(17437),d=n(8563),m=n(37123),f=n(66155),g=n(62193),p=n.n(g),h=n(38221),v=n.n(h);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let D=u.styled.div`
  ${({theme:e,metricNameFontSize:t})=>`
    font-family: ${e.fontFamily};
    font-weight: ${e.fontWeightNormal};
    font-size: ${t||2*e.fontSizeSM}px;
    text-align: center;
    margin-bottom: ${3*e.sizeUnit}px;
  `}
`,w=u.styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 12px;
`,$=u.styled.div`
  ${({theme:e,subheaderFontSize:t})=>`
    font-weight: ${e.fontWeightLight};
    display: flex;
    justify-content: center;
    font-size: ${String(t)||20}px;
    flex: 1 1 0px;
  `}
`,T=u.styled.span`
  ${({theme:e,backgroundColor:t,textColor:n})=>`
    background-color: ${t};
    color: ${n};
    padding: ${e.sizeUnit}px ${2*e.sizeUnit}px;
    border-radius: ${e.borderRadius}px;
    margin-right: ${e.sizeUnit}px;
  `}
`;function b(e){let{height:t,width:n,bigNumber:g,prevNumber:h,valueDifference:b,percentDifferenceFormattedString:x,metricName:C,metricNameFontSize:M,headerFontSize:U,subheaderFontSize:S,comparisonColorEnabled:H,comparisonColorScheme:F,percentDifferenceNumber:k,currentTimeRangeFilter:N,startDateOffset:A,shift:Y,subtitle:z,subtitleFontSize:E,dashboardTimeRange:O,showMetricName:R}=e,[j,I]=(0,l.useState)("");(0,l.useEffect)(()=>{N&&(Y||A)?(!p()(Y)||A)&&Promise.resolve((0,a.x9)(null!=O?O:N.comparator,N.subject)).then(e=>{var t;let n=null==e||null==(t=e.value)?void 0:t.match(m.Io),[r,l]=null!=n?n:[],i=(0,o.TX)({timeRangeFilter:y({},N,{comparator:`${r} : ${l}`}),shifts:(0,s.A)(Y),startDate:A||""});(0,a.x9)(null!=O?O:N.comparator,N.subject,(0,s.A)(i)).then(e=>{let t=(0,s.A)(e.value).flat()[0].split(`vs
`);I(t.length>1?t[1].trim():t[0])})}):I("")},[N,Y,A,O]);let G=(0,u.useTheme)(),K=5*G.sizeUnit,P=(0,c.AH)`
    font-family: ${G.fontFamily};
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${t}px;
    width: ${n}px;
    overflow: auto;
  `,V=(0,c.AH)`
    font-size: ${String(U)||60}px;
    font-weight: ${G.fontWeightNormal};
    text-align: center;
    margin-bottom: ${4*G.sizeUnit}px;
  `,W=u.styled.div`
    ${({theme:e})=>`
    font-family: ${e.fontFamily};
    font-weight: ${e.fontWeightNormal};
    text-align: center;
    margin-top: -10px;
    margin-bottom: ${4*e.sizeUnit}px;
  `}
  `,L=(0,c.AH)`
    color: ${!H||0===k?G.colorTextTertiary:k>0?F===f.mH.Green?G.colorSuccess:G.colorError:F===f.mH.Red?G.colorSuccess:G.colorError};
    margin-left: ${G.sizeUnit}px;
  `,q=G.colorBgContainer,_=G.colorTextTertiary,{backgroundColor:B,textColor:X}=(0,l.useMemo)(()=>{let e=q,t=_;if(H&&0!==k){let n=k>0&&F===f.mH.Green||k<0&&F===f.mH.Red;e=n?G.colorSuccessBg:G.colorErrorBg,t=n?G.colorSuccessText:G.colorErrorText}return{backgroundColor:e,textColor:t}},[G,F,H,k]),Q=(0,l.useMemo)(()=>[{defaultSymbol:"#",value:h,tooltipText:(0,i.t)("Data for %s",j||"previous range"),columnKey:"Previous value"},{defaultSymbol:"△",value:b,tooltipText:(0,i.t)("Value difference between the time periods"),columnKey:"Delta"},{defaultSymbol:"%",value:x,tooltipText:(0,i.t)("Percentage difference between the time periods"),columnKey:"Percent change"}].map(t=>{var n;let r=null==(n=e.columnConfig)?void 0:n[t.columnKey];return y({},t,{symbol:(null==r?void 0:r.displayTypeIcon)===!1?"":t.defaultSymbol,label:(null==r?void 0:r.customColumnName)||t.columnKey})}),[j,h,b,x,e.columnConfig]).filter(t=>{var n,r;return(null==(r=e.columnConfig)||null==(n=r[t.columnKey])?void 0:n.visible)!==!1}),{isOverflowing:Z,symbolContainerRef:J,wrapperRef:ee}=(e=>{let t=(0,l.useRef)(null),n=(0,l.useRef)(null),[r,i]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let r,l=t.current,a=n.current;if(l&&a){let t=Array.from(l.children);(r=new ResizeObserver(v()(()=>{t.reduce((e,t)=>{var n,r;return e+(null!=(n=null==(r=t.firstElementChild)?void 0:r.scrollWidth)?n:0)},0)+e*Math.max(t.length-1,0)>a.clientWidth?i(!0):i(!1)},500))).observe(document.body),t.forEach(e=>{r.observe(e)})}return()=>null==r?void 0:r.disconnect()},[e]),{isOverflowing:r,symbolContainerRef:t,wrapperRef:n}})(K);return(0,r.Y)("div",{css:P,ref:ee,children:(0,r.FD)(w,{css:Z&&(0,c.AH)`
            width: fit-content;
            margin: auto;
            align-items: flex-start;
            overflow: auto;
          `,children:[R&&C&&(0,r.Y)(D,{metricNameFontSize:M,children:C}),(0,r.FD)("div",{css:V,children:[g,0!==k&&(0,r.Y)("span",{css:L,children:k>0?"↑":"↓"})]}),z&&(0,r.Y)(W,{style:{fontSize:`${E*t*.4}px`},children:z}),Q.length>0&&(0,r.Y)("div",{css:[(0,c.AH)`
                display: flex;
                justify-content: space-around;
                gap: ${K}px;
                min-width: 0;
                flex-shrink: 1;
              `,Z?(0,c.AH)`
                    flex-direction: column;
                    align-items: flex-start;
                    width: fit-content;
                  `:(0,c.AH)`
                    align-items: center;
                    width: 100%;
                  `],ref:J,children:Q.map((t,n)=>{var l,i;return(0,r.Y)($,{subheaderFontSize:S,children:(0,r.FD)(d.m,{id:"tooltip",placement:"top",title:t.tooltipText,children:[t.symbol&&(0,r.Y)(T,{backgroundColor:n>0?B:q,textColor:n>0?X:_,children:t.symbol}),t.value," ",(null==(i=e.columnConfig)||null==(l=i[t.columnKey])?void 0:l.customColumnName)||""]})},`comparison-symbol-${t.columnKey}`)})})]})})}}}]);