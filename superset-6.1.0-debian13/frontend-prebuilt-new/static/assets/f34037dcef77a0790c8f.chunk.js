"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[249],{9836(e,t,n){n.r(t),n.d(t,{default:()=>T});var r=n(2445),l=n(24002),i=n(27124),a=n(85614),o=n(17437),d=n(68447),c=n(79592),s=n(90617),u=n(22022),h=n(29138),p=n(60685);let g="superset_trusted_urls",y=["http:","https:"];function x(e){try{let t=new URL(e);return t.origin+t.pathname.replace(/\/$/,"")+t.search}catch(t){return e}}function $(e){try{let t=new URL(e);return y.includes(t.protocol)}catch(e){return!0}}function f(){try{let e=localStorage.getItem(g);if(!e)return[];let t=JSON.parse(e);return Array.isArray(t)?t:[]}catch(e){return[]}}let m=(0,a.styled)(d.s)`
  ${({theme:e})=>(0,o.AH)`
    height: calc(100vh - 64px);
    background-color: ${e.colorBgLayout};
    padding: ${e.padding}px;
  `}
`,b=(0,a.styled)(c.Z)`
  ${({theme:e})=>(0,o.AH)`
    max-width: 520px;
    width: 100%;
    box-shadow: ${e.boxShadowSecondary};
  `}
`,k=(0,a.styled)(d.s)`
  ${({theme:e})=>(0,o.AH)`
    padding: ${e.paddingLG}px ${e.paddingXL}px;
    border-bottom: 1px solid ${e.colorBorderSecondary};
  `}
`,w=a.styled.div`
  ${({theme:e})=>(0,o.AH)`
    padding: ${e.paddingXL}px;
  `}
`,S=(0,a.styled)(d.s)`
  ${({theme:e})=>(0,o.AH)`
    background-color: ${e.colorFillQuaternary};
    border-radius: ${e.borderRadiusSM}px;
    padding: ${e.paddingSM}px ${e.padding}px;
    margin-bottom: ${e.margin}px;
  `}
`,Y=(0,a.styled)(s.o.Text)`
  ${({theme:e})=>(0,o.AH)`
    font-family: ${e.fontFamilyCode};
    font-size: ${e.fontSize}px;
    word-break: break-all;
  `}
`,C=(0,a.styled)(d.s)`
  ${({theme:e})=>(0,o.AH)`
    padding: ${e.padding}px ${e.paddingXL}px;
    background-color: ${e.colorFillAlter};
    border-top: 1px solid ${e.colorBorderSecondary};
  `}
`,L=(0,a.styled)(s.o.Title)`
  && {
    margin: 0;
  }
`;function T(){let e=(0,a.useTheme)(),[t,n]=(0,l.useState)(!1),o=(0,l.useMemo)(()=>{var e;return(null!=(e=new URLSearchParams(window.location.search).get("url"))?e:"").trim()},[]);(0,l.useEffect)(()=>{let e;o&&$(o)&&(e=x(o),f().some(t=>x(t)===e))&&(window.location.href=o)},[o]);let c=(0,l.useCallback)(()=>{o&&$(o)&&(t&&function(e){let t=x(e),n=f();if(!n.some(e=>x(e)===t)){n.push(e);let t=n.length>100?n.slice(-100):n;try{localStorage.setItem(g,JSON.stringify(t))}catch(e){}}}(o),window.location.href=o)},[t,o]),y=(0,l.useCallback)(()=>{window.location.href="/"},[]);return o?(0,r.Y)(m,{justify:"center",align:"center",children:(0,r.FD)(b,{children:[(0,r.FD)(k,{align:"center",gap:"middle",children:[(0,r.Y)(p.F.WarningOutlined,{iconColor:e.colorWarning,iconSize:"xl"}),(0,r.Y)(L,{level:4,children:(0,i.t)("External link warning")})]}),(0,r.FD)(w,{children:[(0,r.Y)(s.o.Paragraph,{type:"secondary",children:(0,i.t)("This link will take you to an external website. We cannot guarantee the safety of external destinations.")}),(0,r.FD)(S,{align:"center",gap:"small",children:[(0,r.Y)(p.F.LinkOutlined,{iconColor:e.colorTextTertiary}),(0,r.Y)(Y,{children:o})]}),(0,r.Y)(d.s,{align:"center",gap:"small",children:(0,r.Y)(u.Checkbox,{checked:t,onChange:e=>n(e.target.checked),children:(0,i.t)("Trust this URL and don't ask again")})}),(0,r.Y)(s.o.Text,{type:"secondary",children:(0,i.t)("Only proceed if you trust the destination or its source.")})]}),(0,r.FD)(C,{justify:"flex-end",gap:"small",children:[(0,r.Y)(h.$n,{onClick:y,children:(0,i.t)("Return to Superset")}),(0,r.Y)(h.$n,{type:"primary",onClick:c,children:(0,i.t)("Continue")})]})]})}):(0,r.Y)(m,{justify:"center",align:"center",children:(0,r.Y)(b,{children:(0,r.Y)(w,{children:(0,r.Y)(s.o.Text,{type:"danger",children:(0,i.t)("Missing URL parameter")})})})})}}}]);