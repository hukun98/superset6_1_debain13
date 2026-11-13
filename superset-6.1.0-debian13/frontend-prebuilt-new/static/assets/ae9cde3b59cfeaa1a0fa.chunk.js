"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7768],{60917(e,r,t){t.d(r,{A:()=>l});var o=t(70258);let l=["AND","AS","ASC","AVG","BY","CASE","COUNT","CREATE","CROSS","DATABASE","DEFAULT","DELETE","DESC","DISTINCT","DROP","ELSE","END","FOREIGN","FROM","GRANT","GROUP","HAVING","IF","INNER","INSERT","JOIN","KEY","LEFT","LIMIT","MAX","MIN","NATURAL","NOT","NULL","OFFSET","ON","OR","ORDER","OUTER","PRIMARY","REFERENCES","RIGHT","SELECT","SUM","TABLE","THEN","TYPE","UNION","UPDATE","WHEN","WHERE"].concat(["BIGINT","BINARY","BIT","CHAR","DATE","DECIMAL","DOUBLE","FLOAT","INT","INTEGER","MONEY","NUMBER","NUMERIC","REAL","SET","TEXT","TIMESTAMP","VARCHAR"]).map(e=>({meta:"sql",name:e,score:o.lI,value:e}))},83030(e,r,t){t.d(r,{l:()=>E,A:()=>x});var o,l=t(2445),n=t(27124),c=t(85614),s=t(90617);let a=t(22022).Progress;var i=t(29138),d=t(56030),u=t(60685);function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}let{Text:f}=s.o;var E=((o={}).STREAMING="streaming",o.COMPLETED="completed",o.ERROR="error",o.CANCELLED="cancelled",o);let h=c.styled.div`
  ${({theme:e})=>`
    padding: ${4*e.sizeUnit}px 0 ${2*e.sizeUnit}px;
  `}
`,R=c.styled.div`
  ${({theme:e})=>`
    margin: ${6*e.sizeUnit}px 0;
    position: relative;
  `}
`,b=c.styled.div`
  ${({theme:e})=>`
    display: flex;
    align-items: center;
    gap: ${3*e.sizeUnit}px;
  `}
`,S=(0,c.styled)(a)`
  flex: 1;
`,g=(0,c.styled)(u.F.CheckCircleFilled)`
  ${({theme:e})=>`
    color: ${e.colorSuccess};
    font-size: ${6*e.sizeUnit}px;
    flex-shrink: 0;
  `}
`,m=c.styled.div`
  ${({theme:e})=>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${4*e.sizeUnit}px;
    height: ${4*e.sizeUnit}px;
    background-color: ${e.colorError};
    border-radius: 50%;
    flex-shrink: 0;
  `}
`,$=(0,c.styled)(u.F.CloseOutlined)`
  ${({theme:e})=>`
    color: ${e.colorWhite};
    font-size: ${2.5*e.sizeUnit}px;
  `}
`,T=c.styled.div`
  ${({theme:e})=>`
    display: flex;
    gap: ${2*e.sizeUnit}px;
    justify-content: flex-end;
  `}
`,y=(0,c.styled)(f)`
  ${({theme:e})=>`
    display: block;
    text-align: center;
    margin-top: ${4*e.sizeUnit}px;
  `}
`,C=(0,c.styled)(y)`
  ${({theme:e})=>`
    color: ${e.colorError};
  `}
`,v=(0,c.styled)(i.$n)`
  ${({theme:e})=>`
    background-color: ${e.colorSuccessBg};
    color: ${e.colorSuccess};
    border-color: ${e.colorSuccessBg};

    &:hover {
      background-color: ${e.colorSuccessBg};
      color: ${e.colorSuccess};
      border-color: ${e.colorSuccess};
    }

    &:focus {
      background-color: ${e.colorSuccessBg};
      color: ${e.colorSuccess};
      border-color: ${e.colorSuccess};
    }
  `}
`,A=(0,c.styled)(i.$n)`
  ${({theme:e})=>`
    background-color: ${e.colorSuccess};
    border-color: ${e.colorSuccess};
    color: ${e.colorWhite};

    &:hover:not(:disabled) {
      background-color: ${e.colorSuccessActive};
      border-color: ${e.colorSuccessActive};
      color: ${e.colorWhite};
    }

    &:focus:not(:disabled) {
      background-color: ${e.colorSuccess};
      border-color: ${e.colorSuccess};
      color: ${e.colorWhite};
    }

    &:disabled {
      background-color: ${e.colorBgContainerDisabled};
      border-color: ${e.colorBgContainerDisabled};
      color: ${e.colorTextDisabled};
    }
  `}
`,w=({status:e,progress:r,onCancel:t,onRetry:o,onDownload:s,getProgressPercentage:i})=>{let d=(0,c.useTheme)(),{downloadUrl:u,filename:f,error:E}=r,w="error"===e,x="cancelled"===e,k="completed"===e,N="streaming"===e,O=w||k,U=(w||x)&&o,I=(e=>{switch(e){case"completed":return"success";case"error":case"cancelled":return"exception";default:return"normal"}})(e),L=k?100:i(),P=((e,r,t)=>{switch(e){case"error":return t||(0,n.t)("Export failed");case"cancelled":return(0,n.t)("Export cancelled");case"completed":return(0,n.t)("Export successful: %s",r||"export");default:return r?(0,n.t)("Processing export for %s",r):(0,n.t)("Processing export...")}})(e,f,E),D=(e=>{switch(e){case"error":case"cancelled":case"completed":return(0,n.t)("Close");default:return(0,n.t)("Cancel")}})(e),M=p({percent:L,status:I,showInfo:N},N&&{strokeColor:d.colorSuccess,format:e=>`${Math.round(e||0)}%`});return(0,l.FD)(h,{children:[(0,l.FD)(R,{children:[O?(0,l.FD)(b,{children:[(0,l.Y)(S,p({},M)),w&&(0,l.Y)(m,{children:(0,l.Y)($,{})}),k&&(0,l.Y)(g,{})]}):(0,l.Y)(a,p({},M)),w?(0,l.Y)(C,{children:P}):(0,l.Y)(y,{children:P})]}),(0,l.FD)(T,{children:[(0,l.Y)(v,{onClick:t,children:D}),U?(0,l.Y)(A,{onClick:o,children:(0,n.t)("Retry")}):(0,l.Y)(A,{onClick:s,disabled:!k||!u,children:(0,n.t)("Download")})]})]})},x=({visible:e,onCancel:r,onRetry:t,onDownload:o,progress:c})=>{let{status:s,downloadUrl:a,filename:i}=c;return(0,l.Y)(d.aF,{title:(0,n.t)("CSV Export"),show:e,onHide:r,hideFooter:!0,width:600,maskClosable:!1,centered:!0,children:(0,l.Y)(w,{status:s,progress:c,onCancel:r,onRetry:t,onDownload:()=>{if(a&&i){let e;(e=document.createElement("a")).href=a,e.download=i,document.body.appendChild(e),e.click(),document.body.removeChild(e),null==o||o(),r()}},getProgressPercentage:()=>{var e,r;return e=c.totalRows,r=c.rowsProcessed,"completed"===s?100:e&&!(e<=0)&&r?Math.floor(r/e*100):0}})})}},71362(e,r,t){t.d(r,{K:()=>l.K,O:()=>o.A});var o=t(83030),l=t(7411)},7411(e,r,t){t.d(r,{K:()=>p});var o=t(24002),l=t(73815),n=t(83030),c=t(22389),s=t(89495);function a(e,r,t,o,l,n,c){try{var s=e[n](c),a=s.value}catch(e){t(e);return}s.done?r(a):Promise.resolve(a).then(o,l)}function i(e){return function(){var r=this,t=arguments;return new Promise(function(o,l){var n=e.apply(r,t);function c(e){a(n,o,l,c,s,"next",e)}function s(e){a(n,o,l,c,s,"throw",e)}c(void 0)})}}function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}let u=e=>e.filter(e=>10===e).length,p=(e={})=>{let[r,t]=(0,o.useState)({rowsProcessed:0,totalRows:void 0,totalSize:0,speed:0,mbPerSecond:0,elapsedTime:0,status:n.l.STREAMING}),[a,p]=(0,o.useState)(0),f=(0,o.useRef)(null),E=(0,o.useRef)(null),h=(0,o.useRef)(null),R=(0,o.useRef)(!1),b=(0,o.useCallback)(e=>{t(r=>d({},r,e))},[]),S=(0,o.useCallback)(r=>i(function*(){let{url:t,payload:o,filename:a,exportType:d,expectedRows:p}=r;if(!R.current){R.current=!0,f.current=new AbortController,b({rowsProcessed:0,totalRows:p,totalSize:0,speed:0,mbPerSecond:0,elapsedTime:0,status:n.l.STREAMING,filename:a});try{var E;let r,S,g=yield(r=f.current.signal,i(function*(){let e={"Content-Type":"application/x-www-form-urlencoded"},t=yield l.A.getCSRFToken();t&&(e["X-CSRFToken"]=t);let n={};return a&&(n.filename=a),void 0!==p&&(n.expected_rows=p.toString()),"client_id"in o?n.client_id=String(o.client_id):n.form_data=JSON.stringify(o),{method:"POST",headers:e,body:new URLSearchParams(n),signal:r,credentials:"same-origin"}})()),m=(S=(0,s.N8)(),t.startsWith("//")||t.match(/^https?:\/\//)?t:t.startsWith("/")?!S||t===S||t.startsWith(`${S}/`)||t.startsWith(`${S}?`)||t.startsWith(`${S}#`)?t:(0,c.G)(t):(0,c.G)(`/${t}`)),$=yield fetch(m,g);if(!$.ok)throw Error(`Export failed: ${$.status} ${$.statusText}`);if(!$.body)throw Error("Response body is not available for streaming");let T=$.headers.get("Content-Disposition"),y=`export.${d}`;if(T){let e=T.match(/filename="?([^"]+)"?/);e&&e[1]&&(y=e[1])}let C=$.body.getReader(),v=[],A=0,w=0,x=!1;for(;;){let{done:r,value:t}=yield C.read();if(r)break;if(null==(E=f.current)?void 0:E.signal.aborted)throw Error("Export cancelled by user");let o=new TextDecoder().decode(t);if(o.includes("__STREAM_ERROR__")){let r=o.match(/__STREAM_ERROR__:(.+)/),t=r?r[1].trim():"Export failed. Please try again.";b({status:n.l.ERROR,error:t,rowsProcessed:w,totalRows:p,totalSize:A}),R.current=!1,null==e.onError||e.onError.call(e,t),x=!0;break}v.push(t),A+=t.length,w+=u(t),b({status:n.l.STREAMING,rowsProcessed:w,totalRows:p,totalSize:A,filename:y})}if(x)return;let k=((e,r,t)=>{let o=new Uint8Array(r),l=0;for(let r of e)o.set(r,l),l+=r.length;return new Blob([o],{type:"csv"===t?"text/csv;charset=utf-8":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})})(v,A,d);h.current&&URL.revokeObjectURL(h.current);let N=URL.createObjectURL(k);h.current=N,b({status:n.l.COMPLETED,downloadUrl:N,filename:y}),R.current=!1,null==e.onComplete||e.onComplete.call(e,N,y)}catch(t){let r=t instanceof Error?t.message:"Unknown error occurred";r.includes("cancelled")||r.includes("aborted")?b({status:n.l.CANCELLED}):(b({status:n.l.ERROR,error:r}),null==e.onError||e.onError.call(e,r)),R.current=!1}finally{f.current=null}}})(),[b,e]),g=(0,o.useCallback)(e=>i(function*(){R.current||(p(0),E.current=e,b({rowsProcessed:0,totalRows:e.expectedRows,totalSize:0,speed:0,mbPerSecond:0,elapsedTime:0,status:n.l.STREAMING,filename:e.filename}),S(e))})(),[b,S]),m=(0,o.useCallback)(()=>{!E.current||R.current||(p(0),S(E.current))},[S]),$=(0,o.useCallback)(()=>{f.current&&(f.current.abort(),b({status:n.l.CANCELLED}))},[b]),T=(0,o.useCallback)(()=>{h.current&&(URL.revokeObjectURL(h.current),h.current=null),R.current=!1,f.current=null,t({rowsProcessed:0,totalRows:void 0,totalSize:0,speed:0,mbPerSecond:0,elapsedTime:0,status:n.l.STREAMING})},[]);return(0,o.useEffect)(()=>()=>{h.current&&URL.revokeObjectURL(h.current)},[]),{progress:r,isExporting:R.current,retryCount:a,startExport:g,cancelExport:$,resetExport:T,retryExport:m}}},76424(e,r,t){t.d(r,{T:()=>s,c:()=>a});var o=t(73815),l=t(13711);let n=(e,r)=>{let t="api/v1/explore/form_data";return e&&(t=t.concat(`/${e}`)),r&&(t=t.concat(`?tab_id=${r}`)),t},c=(e,r,t,o)=>{let n={datasource_id:e,datasource_type:r,form_data:JSON.stringify((0,l.k)(t))};return o&&(n.chart_id=o),n},s=(e,r,t,l,s)=>o.A.post({endpoint:n(void 0,s),jsonPayload:c(e,r,t,l)}).then(e=>e.json.key),a=(e,r,t,l,s,a)=>o.A.put({endpoint:n(t,a),jsonPayload:c(e,r,l,s)}).then(e=>e.json.message)},58414(e,r,t){t.d(r,{wW:()=>n,SM:()=>c,el:()=>l});var o=t(73815);let l=new Map,n=((e,r,t=(...e)=>JSON.stringify([...e]))=>(...o)=>{let l=t(...o);if(r.has(l))return r.get(l);let n=e(...o);return r.set(l,n),n})(o.A.get,l,({endpoint:e})=>e||"");function c(e){if(null==e||""===e)return;let r=String(e);l.forEach((e,t)=>{for(let e of[`/api/v1/dataset/${r}`,`/api/v1/dataset/${r}/`,`/api/v1/dataset/${r}?`])if(t.includes(e)){let r=t.substring(t.indexOf(e)+e.length);if(e.endsWith("/")||e.endsWith("?")||""===r||r.startsWith("/")||r.startsWith("?")){l.delete(t);break}}})}},13711(e,r,t){t.d(r,{k:()=>c});var o=t(90179),l=t.n(o);let n=["url_params"],c=e=>l()(e,n)}}]);