"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3002],{28471(e,t,r){r.d(t,{A:()=>a});var o=r(2445),n=r(24002);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function a(e,t){class r extends n.Component{componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,(null==t?void 0:t.componentWillUnmount)&&t.componentWillUnmount.bind(this)()}setContainerRef(e){this.container=e}execute(){this.container&&e(this.container,this.props)}render(){let{id:e,className:t}=this.props;return(0,o.Y)("div",{ref:this.setContainerRef,id:e,className:t})}constructor(e){super(e),this.setContainerRef=this.setContainerRef.bind(this)}}return e.displayName&&(r.displayName=e.displayName),e.propTypes&&(r.propTypes=l({},r.propTypes,e.propTypes)),e.defaultProps&&(r.defaultProps=e.defaultProps),r}},23002(e,t,r){r.r(t),r.d(t,{default:()=>m});var o=r(2445),n=r(28471),l=r(85614),a=r(24143),s=r.n(a),i=r(18349),c=r(10216),p=r(14230),u=r(49175);function d(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}let f={};function h(e,t){let r,{data:o,width:n,height:l,country:a,linearColorScheme:h,numberFormat:y,colorScheme:g,sliceId:m}=t,v=(0,i.gV)(y),b=function(e,t){let r,o;if(void 0===t)for(let t of e)null!=t&&(void 0===r?t>=t&&(r=o=t):(r>t&&(r=t),o<t&&(o=t)));else{let n=-1;for(let l of e)null!=(l=t(l,++n,e))&&(void 0===r?l>=l&&(r=o=l):(r>l&&(r=l),o<l&&(o=l)))}return[r,o]}(o,e=>e.metric),$=null!=b[0]&&null!=b[1]?[b[0],b[1]]:[0,1],x=(0,c.A)().get(h),k=x?x.createLinearScale($):()=>"#ccc",C=p.getScale(g),O={};o.forEach(e=>{var t;O[e.country_id]=g?C(e.country_id,m):null!=(t=k(e.metric))?t:""});let N=e=>O[e.properties.ISO]||"none",w=s().geo.path(),A=s().select(e);A.classed("superset-legacy-chart-country-map",!0),A.selectAll("*").remove(),e.style.height=`${l}px`,e.style.width=`${n}px`;let S=A.append("svg:svg").attr("width",n).attr("height",l).attr("preserveAspectRatio","xMidYMid meet"),j=S.append("rect").attr("class","background").attr("width",n).attr("height",l),T=S.append("g"),M=T.append("g").classed("map-layer",!0),B=A.append("div").attr("class","hover-popup"),E=function(e){let t,o,a,s=n/2,i=l/2;if(e&&r!==e){let n=w.centroid(e);[t,o]=n,a=4,r=e}else t=s,o=i,a=1,r=null;T.transition().duration(750).attr("transform",`translate(${s},${i})scale(${a})translate(${-t},${-o})`)};j.on("click",E);let P=function(e){var t;let r=N(e);"none"!==r&&(r=s().rgb(r).darker().toString()),s().select(this).style("fill",r);let n=o.filter(t=>t.country_id===e.properties.ISO),l=s().mouse(S.node());B.style("display","block").style("top",`${l[1]+30}px`).style("left",`${l[0]}px`).html(`<div><strong>${(t=e)&&t.properties?t.properties.ID_2?t.properties.NAME_2||"":t.properties.NAME_1||"":""}</strong><br>${n.length>0?v(n[0].metric):""}</div>`)},_=function(){let e=s().mouse(S.node());B.style("top",`${e[1]+30}px`).style("left",`${e[0]}px`)},R=function(){s().select(this).style("fill",N),B.style("display","none")};function I(e){let{features:t}=e,r=s().geo.centroid(e),o=s().geo.mercator().scale(100).center(r).translate([n/2,l/2]);w.projection(o);let a=w.bounds(e),i=100*n/(a[1][0]-a[0][0]),c=100*l/(a[1][1]-a[0][1]);o.scale(i<c?i:c);let p=w.bounds(e);o.translate([n-(p[0][0]+p[1][0])/2,l-(p[0][1]+p[1][1])/2]),M.selectAll("path").data(t).enter().append("path").attr("d",w).attr("class","region").attr("vector-effect","non-scaling-stroke").style("fill",N).on("mouseenter",P).on("mousemove",_).on("mouseout",R).on("click",E)}let U=f[a];if(U)I(U);else{let t=u.Ay[a];if(!t){var Y;let t=(null==(Y=u.JK.find(e=>e[0]===a))?void 0:Y[1])||a;s().select(e).html(`<div class="alert alert-danger">No map data available for ${d(t)}</div>`);return}s().json(t,(t,r)=>{if(t){var o;let t=(null==(o=u.JK.find(e=>e[0]===a))?void 0:o[1])||a;s().select(e).html(`<div class="alert alert-danger">Could not load map data for ${d(t)}</div>`)}else f[a]=r,I(r)})}}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}h.displayName="CountryMap";let g=(0,n.A)(h),m=(0,l.styled)(e=>{let{className:t=""}=e,r=function(e,t){if(null==e)return{};var r,o,n={},l=Object.getOwnPropertyNames(e);for(o=0;o<l.length;o++)!(t.indexOf(r=l[o])>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r]);return n}(e,["className"]);return(0,o.Y)("div",{className:t,children:(0,o.Y)(g,y({},r))})})`
  ${({theme:e})=>`
    .superset-legacy-chart-country-map svg {
      background-color: ${e.colorBgContainer};
    }

    .superset-legacy-chart-country-map {
      position: relative;
    }

    .superset-legacy-chart-country-map .background {
      fill: ${e.colorBgContainer};
      pointer-events: all;
    }

    .superset-legacy-chart-country-map .hover-popup {
      position: absolute;
      color: ${e.colorTextSecondary};
      display: none;
      padding: 4px;
      border-radius: 1px;
      background-color: ${e.colorBgElevated};
      box-shadow: ${e.boxShadow};
      font-size: 12px;
      border: 1px solid ${e.colorBorder};
      z-index: 10001;
    }

    .superset-legacy-chart-country-map .map-layer {
      fill: ${e.colorBgContainer};
      stroke: ${e.colorBorderSecondary};
      pointer-events: all;
    }

    .superset-legacy-chart-country-map .effect-layer {
      pointer-events: none;
    }

    .superset-legacy-chart-country-map path.region {
      cursor: pointer;
      stroke: ${e.colorSplit};
    }
  `}
`}}]);