"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1991],{81991(e,t,i){i.d(t,{Ay:()=>V,rE:()=>C});var l,r=i(2445),o=i(24002),a=i(25929),n=i(46942),s=i.n(n),d=i(27124),c=i(77092),p=i(85614),u=i(17437),m=i(95297),g=i(22022),h=i(10938),x=i(8563),b=i(59272),v=i(60685),f=i(72624),y=i(14121),$=i(13130);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e}).apply(this,arguments)}var Y=((l=Y||{}).AllCharts="ALL_CHARTS",l.Featured="FEATURED",l.Category="CATEGORY",l.Tags="TAGS",l);let C=1090,U=(0,d.t)("Other"),w=(0,d.t)("All charts"),A=(0,d.t)("Featured"),k=[A,(0,d.t)("ECharts"),(0,d.t)("Advanced-Analytics")],S="viz-type-control",E=p.styled.div`
  ${({isSelectedVizMetadata:e})=>`
    display: grid;
    grid-template-rows: ${e?"auto minmax(100px, 1fr) minmax(200px, 35%)":"auto minmax(100px, 1fr)"};
    // em is used here because the sidebar should be sized to fit the longest standard tag
    grid-template-columns: minmax(14em, auto) 5fr;
    grid-template-areas:
      'sidebar search'
      'sidebar main'
      'details details';
    height: 70vh;
    overflow: auto;
  `}
`,T=p.styled.h3`
  margin-top: 0;
  margin-bottom: ${({theme:e})=>2*e.sizeUnit}px;
  font-size: ${({theme:e})=>e.fontSizeLG}px;
  font-weight: ${({theme:e})=>e.fontWeightStrong};
  line-height: ${({theme:e})=>6*e.sizeUnit}px;
`,F=p.styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({theme:e})=>e.colorBorder};
  overflow: auto;

  .ant-collapse .ant-collapse-item {
    .ant-collapse-header {
      font-size: ${({theme:e})=>e.fontSizeSM}px;
      color: ${({theme:e})=>e.colorText};
      padding-left: ${({theme:e})=>2*e.sizeUnit}px;
      padding-bottom: ${({theme:e})=>e.sizeUnit}px;
    }

    .ant-collapse-content .ant-collapse-content-box {
      display: flex;
      flex-direction: column;
      padding: 0 ${({theme:e})=>2*e.sizeUnit}px;
    }
  }
`,O=p.styled.div`
  grid-area: main;
  overflow-y: auto;
`,R=p.styled.div`
  ${({theme:e})=>`
    grid-area: search;
    margin-top: ${3*e.sizeUnit}px;
    margin-bottom: ${e.sizeUnit}px;
    margin-left: ${3*e.sizeUnit}px;
    margin-right: ${3*e.sizeUnit}px;
    .ant-input-affix-wrapper {
      padding-left: ${2*e.sizeUnit}px;
    }
  `}
`,D=p.styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.colorIcon};
`,M=p.styled.button`
  ${({theme:e})=>`
    all: unset; // remove default button styles
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    margin: ${e.sizeUnit}px 0;
    padding: 0 ${e.sizeUnit}px;
    border-radius: ${e.borderRadius}px;
    line-height: 2em;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    color: ${e.colorText};

    &:focus {
      outline: initial;
    }

    &.selected {
      background-color: ${e.colorPrimary};
      color: ${e.colorTextLightSolid};

      svg {
        color: ${e.colorTextLightSolid};
      }

      &:hover {
        .cancel {
          visibility: visible;
        }
      }
    }

    & > span[role="img"] {
      margin-right: ${2*e.sizeUnit}px;
    }

    .cancel {
      visibility: hidden;
    }
  `}
`,H=p.styled.div`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    ${({theme:e})=>24*e.sizeUnit}px
  );
  grid-auto-rows: max-content;
  justify-content: space-evenly;
  grid-gap: ${({theme:e})=>2*e.sizeUnit}px;
  justify-items: center;
  // for some reason this padding doesn't seem to apply at the bottom of the container. Why is a mystery.
  padding: ${({theme:e})=>2*e.sizeUnit}px;
`,L=p.styled.div`
  grid-area: viz-tags;
  width: ${({theme:e})=>120*e.sizeUnit}px;
  padding-right: ${({theme:e})=>14*e.sizeUnit}px;
  padding-bottom: ${({theme:e})=>2*e.sizeUnit}px;
`,j=p.styled.p`
  grid-area: description;
  overflow: auto;
  padding-right: ${({theme:e})=>14*e.sizeUnit}px;
  margin: 0;
`,G=p.styled.div`
  grid-area: examples;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;
  gap: ${({theme:e})=>4*e.sizeUnit}px;

  img {
    height: 100%;
    border-radius: ${({theme:e})=>e.borderRadius}px;
    border: 1px solid ${({theme:e})=>e.colorBorder};
    background-color: ${({theme:e})=>e.colorBgContainer};
  }
`,B=p.styled.div`
  ${({theme:e})=>`
    border: 1px solid ${e.colorPrimaryText};
    box-sizing: border-box;
    border-radius: ${e.borderRadius}px;
    background: ${e.colorBgContainer};
    line-height: ${2.5*e.sizeUnit}px;
    color: ${e.colorPrimaryText};
    font-size: ${e.fontSizeSM}px;
    font-weight: ${e.fontWeightStrong};
    text-align: center;
    padding: ${.5*e.sizeUnit}px ${e.sizeUnit}px;
    cursor: pointer;

    div {
      transform: scale(0.83,0.83);
    }
  `}
`,_=p.styled.div`
  position: absolute;
  right: ${({theme:e})=>e.sizeUnit}px;
  top: ${({theme:e})=>19*e.sizeUnit}px;
`,I=p.styled.div`
  display: inline-block !important;
  margin-left: ${({theme:e})=>2*e.sizeUnit}px;
`,N=({entry:e,selectedViz:t,setSelectedViz:i,onDoubleClick:l})=>{let o=(0,p.useTheme)(),a=(0,m.Mw)(o),{key:n,value:s}=e,c=t===e.key;return(0,r.FD)("div",{role:"button",css:(0,u.AH)`
  cursor: pointer;
  width: ${24*o.sizeUnit}px;
  position: relative;
  outline: none; /* Remove focus outline to show only selected state */

  img {
    min-width: ${24*o.sizeUnit}px;
    min-height: ${24*o.sizeUnit}px;
    border: 1px solid ${o.colorBorder};
    border-radius: ${o.borderRadius}px;
    transition: border-color ${o.motionDurationMid};
    background-color: ${o.colorBgContainer};
  }

  &.selected img {
    border: 2px solid ${o.colorPrimaryBorder};
  }

  &:hover:not(.selected) img {
    border: 1px solid ${o.colorBorder};
  }

  .viztype-label {
    margin-top: ${2*o.sizeUnit}px;
    text-align: center;
  }
`,tabIndex:0,className:c?"selected":"",onClick:()=>i(n),onDoubleClick:l,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),i(n))},onFocus:()=>{i(n)},"data-test":"viztype-selector-container",children:[(0,r.Y)("img",{alt:s.name,width:"100%",className:`viztype-selector ${c?"selected":""}`,src:a&&s.thumbnailDark?s.thumbnailDark:s.thumbnail}),(0,r.Y)("div",{className:"viztype-label","data-test":`${S}__viztype-label`,children:s.name}),s.label&&(0,r.Y)(_,{children:(0,r.Y)(B,{children:(0,r.Y)("div",{children:(0,d.t)(s.label)})})})]})},P=e=>{let{vizEntries:t}=e,i=function(e,t){if(null==e)return{};var i,l,r={},o=Object.getOwnPropertyNames(e);for(l=0;l<o.length;l++)!(t.indexOf(i=o[l])>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i]);return r}(e,["vizEntries"]);return(0,r.Y)(H,{"data-test":`${S}__viz-row`,children:t.map(e=>(0,r.Y)(N,z({},i,{entry:e}),e.key))})},K=({selector:e,sectionId:t,icon:i,isSelected:l,onClick:a,className:n})=>{let c=(0,o.useRef)(null);return(0,o.useEffect)(()=>{l&&queueMicrotask(()=>(0,$.A)(c.current,{behavior:"smooth",scrollMode:"if-needed"}))},[]),(0,r.FD)(M,{"aria-label":e,"aria-selected":l,ref:c,name:e,className:s()(n,l&&"selected"),onClick:()=>a(e,t),tabIndex:0,role:"tab",children:[i,(0,d.t)(e)]},e)};function V(e){var t,i;let l=(0,p.useTheme)(),n=(0,m.Mw)(l),{selectedViz:s,onChange:$,onDoubleClick:z,className:Y,denyList:C}=e,{mountedPluginMetadata:M}=(0,y.Q)(),H=(0,o.useRef)(),[_,N]=(0,o.useState)(""),[V,W]=(0,o.useState)(!0),q=V&&!!_,J=s?M[s]:null,Q=(0,o.useMemo)(()=>Object.entries(M).map(([e,t])=>({key:e,value:t})).filter(({key:e})=>!C.includes(e)).filter(({value:e})=>(0,f.px)(e.behaviors||[])&&!e.deprecated).sort((e,t)=>e.value.name.localeCompare(t.value.name)),[M,C]),X=(0,o.useMemo)(()=>{let e={};return Q.forEach(t=>{let i=t.value.category||U;e[i]||(e[i]=[]),e[i].push(t)}),e},[Q]),Z=(0,o.useMemo)(()=>Object.keys(X).sort((e,t)=>e===U?1:t===U?-1:e.localeCompare(t)),[X]),ee=(0,o.useMemo)(()=>{let e={};return Q.forEach(t=>{(t.value.tags||[]).forEach(i=>{e[i]||(e[i]=[]),e[i].push(t)})}),e},[Q]),et=(0,o.useMemo)(()=>Object.keys(ee).sort((e,t)=>e.localeCompare(t)).filter(e=>-1===k.indexOf(e)),[ee]),ei=(0,o.useMemo)(()=>Q.sort((e,t)=>e.value.name.localeCompare(t.value.name)),[Q]),[el,er]=(0,o.useState)(()=>(null==J?void 0:J.category)||A),[eo,ea]=(0,o.useState)(()=>(null==J?void 0:J.category)?"CATEGORY":"FEATURED"),en=(0,o.useMemo)(()=>new a.A(Q,{ignoreLocation:!0,threshold:.3,keys:[{name:"value.name",weight:4},{name:"value.tags",weight:2},"value.description"]}),[Q]),es=(0,o.useMemo)(()=>""===_.trim()?[]:en.search(_).map(e=>e.item).sort((e,t)=>{var i,l;let r=null==(i=e.value)?void 0:i.label,o=null==(l=t.value)?void 0:l.label,a=r&&c.l7[r]?c.l7[r].weight:0;return(o&&c.l7[o]?c.l7[o].weight:0)-a}),[_,en]),ed=(0,o.useCallback)(()=>{W(!0)},[]);(0,o.useEffect)(()=>{H.current&&H.current.focus()},[]);let ec=(0,o.useCallback)(e=>N(e.target.value),[]),ep=(0,o.useCallback)(()=>{W(!1),N(""),H.current.blur()},[]),eu=(0,o.useCallback)((e,t)=>{V&&ep(),er(e),ea(t);let i=J&&(e===J.category||e===U&&null==J.category||(J.tags||[]).indexOf(e)>-1);e===el||i||$(null)},[ep,V,el,J,$]),em=(0,o.useMemo)(()=>({CATEGORY:{title:(0,d.t)("Category"),icon:(0,r.Y)(v.F.Category,{iconSize:"m"}),selectors:Z},TAGS:{title:(0,d.t)("Tags"),icon:(0,r.Y)(v.F.NumberOutlined,{iconSize:"m"}),selectors:et}}),[Z,et]);return(0,r.FD)(E,{className:Y,isSelectedVizMetadata:!!J,children:[(0,r.FD)(F,{"aria-label":(0,d.t)("Choose chart type"),role:"tablist",children:[(0,r.Y)(K,{css:({sizeUnit:e})=>(0,u.AH)`
              margin: ${2*e}px;
              margin-bottom: 0;
            `,sectionId:"ALL_CHARTS",selector:w,icon:(0,r.Y)(v.F.Ballot,{iconSize:"m"}),isSelected:!q&&w===el&&"ALL_CHARTS"===eo,onClick:eu}),(0,r.Y)(K,{css:({sizeUnit:e})=>(0,u.AH)`
              margin: ${2*e}px;
              margin-bottom: 0;
            `,sectionId:"FEATURED",selector:A,icon:(0,r.Y)(v.F.FireOutlined,{iconSize:"m"}),isSelected:!q&&A===el&&"FEATURED"===eo,onClick:eu}),(0,r.Y)(h.S,{expandIconPosition:"end",ghost:!0,defaultActiveKey:"CATEGORY",items:Object.keys(em).map(e=>{let t=em[e];return{key:e,label:(0,r.Y)("span",{className:"header",children:t.title}),children:(0,r.Y)(r.FK,{children:t.selectors.map(i=>(0,r.Y)(K,{selector:i,sectionId:e,icon:t.icon,isSelected:!q&&i===el&&e===eo,onClick:eu},i))})}})})]}),(0,r.Y)(R,{children:(0,r.Y)(g.Input,{type:"text",ref:H,value:_,placeholder:(0,d.t)("Search all charts"),onChange:ec,onFocus:ed,"data-test":`${S}__search-input`,prefix:(0,r.Y)(D,{children:(0,r.Y)(v.F.SearchOutlined,{iconSize:"m"})}),suffix:(0,r.Y)(D,{children:_&&(0,r.Y)(v.F.CloseOutlined,{iconSize:"m",onClick:ep})})})}),(0,r.Y)(O,{children:(0,r.Y)(P,{vizEntries:q?es:el===w&&"ALL_CHARTS"===eo?ei:el===A&&"FEATURED"===eo&&ee[A]?ee[A]:"CATEGORY"===eo&&X[el]?X[el]:"TAGS"===eo&&ee[el]?ee[el]:[],selectedViz:s,setSelectedViz:$,onDoubleClick:z})}),J?(0,r.Y)("div",{css:e=>[(0,u.AH)`
  grid-area: details;
  border-top: 1px solid ${e.colorBorder};
`,(0,u.AH)`
  padding: ${4*e.sizeUnit}px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    'viz-name examples-header'
    'viz-tags examples'
    'description examples';
`],children:(0,r.FD)(r.FK,{children:[(0,r.FD)(T,{css:(0,u.AH)`
                grid-area: viz-name;
                position: relative;
              `,children:[null==J?void 0:J.name,(null==J?void 0:J.label)&&(0,r.Y)(x.m,{id:"viz-badge-tooltip",placement:"top",title:null!=(t=J.labelExplanation)?t:c.HE[J.label],children:(0,r.Y)(I,{children:(0,r.Y)(B,{children:(0,r.Y)("div",{children:(0,d.t)(J.label)})})})})]}),(0,r.Y)(L,{children:null==J?void 0:J.tags.map(e=>(0,r.Y)(b.JU,{css:({sizeUnit:e})=>(0,u.AH)`
                    margin-bottom: ${2*e}px;
                  `,children:e},e))}),(0,r.Y)(j,{children:(0,d.t)((null==J?void 0:J.description)||"No description available.")}),(0,r.Y)(T,{css:(0,u.AH)`
                grid-area: examples-header;
              `,children:(0,d.t)("Examples")}),(0,r.Y)(G,{children:((null==J||null==(i=J.exampleGallery)?void 0:i.length)?J.exampleGallery:[{url:null==J?void 0:J.thumbnail,caption:null==J?void 0:J.name}]).map(e=>(0,r.Y)("img",{src:n&&e.urlDark?e.urlDark:e.url,alt:e.caption,title:e.caption},e.url))})]})}):null]})}}}]);