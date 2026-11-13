"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6187],{28471(t,e,r){r.d(e,{A:()=>o});var n=r(2445),i=r(24002);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function o(t,e){class r extends i.Component{componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,(null==e?void 0:e.componentWillUnmount)&&e.componentWillUnmount.bind(this)()}setContainerRef(t){this.container=t}execute(){this.container&&t(this.container,this.props)}render(){let{id:t,className:e}=this.props;return(0,n.Y)("div",{ref:this.setContainerRef,id:t,className:e})}constructor(t){super(t),this.setContainerRef=this.setContainerRef.bind(this)}}return t.displayName&&(r.displayName=t.displayName),t.propTypes&&(r.propTypes=a({},r.propTypes,t.propTypes)),t.defaultProps&&(r.defaultProps=t.defaultProps),r}},26187(t,e,r){let n;r.r(e),r.d(e,{default:()=>k});var i=r(2445),a=r(28471),o=r(85614),l=r(24143),s=r.n(l),p=r(5556),c=r.n(p);function h(t){var e=0,r=t.children,n=r&&r.length;if(n)for(;--n>=0;)e+=r[n].value;else e=1;t.value=e}function d(t,e){t instanceof Map?(t=[void 0,t],void 0===e&&(e=f)):void 0===e&&(e=u);for(var r,n,i,a,o,l=new m(t),s=[l];r=s.pop();)if((i=e(r.data))&&(o=(i=Array.from(i)).length))for(r.children=i,a=o-1;a>=0;--a)s.push(n=i[a]=new m(i[a])),n.parent=r,n.depth=r.depth+1;return l.eachBefore(y)}function u(t){return t.children}function f(t){return Array.isArray(t)?t[1]:null}function g(t){void 0!==t.data.value&&(t.value=t.data.value),t.data=t.data.data}function y(t){var e=0;do t.height=e;while((t=t.parent)&&t.height<++e)}function m(t){this.data=t,this.depth=this.height=0,this.parent=null}m.prototype=d.prototype={constructor:m,count:function(){return this.eachAfter(h)},each:function(t,e){let r=-1;for(let n of this)t.call(e,n,++r,this);return this},eachAfter:function(t,e){for(var r,n,i,a=this,o=[a],l=[],s=-1;a=o.pop();)if(l.push(a),r=a.children)for(n=0,i=r.length;n<i;++n)o.push(r[n]);for(;a=l.pop();)t.call(e,a,++s,this);return this},eachBefore:function(t,e){for(var r,n,i=this,a=[i],o=-1;i=a.pop();)if(t.call(e,i,++o,this),r=i.children)for(n=r.length-1;n>=0;--n)a.push(r[n]);return this},find:function(t,e){let r=-1;for(let n of this)if(t.call(e,n,++r,this))return n},sum:function(t){return this.eachAfter(function(e){for(var r=+t(e.data)||0,n=e.children,i=n&&n.length;--i>=0;)r+=n[i].value;e.value=r})},sort:function(t){return this.eachBefore(function(e){e.children&&e.children.sort(t)})},path:function(t){for(var e=this,r=function(t,e){if(t===e)return t;var r=t.ancestors(),n=e.ancestors(),i=null;for(t=r.pop(),e=n.pop();t===e;)i=t,t=r.pop(),e=n.pop();return i}(e,t),n=[e];e!==r;)n.push(e=e.parent);for(var i=n.length;t!==r;)n.splice(i,0,t),t=t.parent;return n},ancestors:function(){for(var t=this,e=[t];t=t.parent;)e.push(t);return e},descendants:function(){return Array.from(this)},leaves:function(){var t=[];return this.eachBefore(function(e){e.children||t.push(e)}),t},links:function(){var t=this,e=[];return t.each(function(r){r!==t&&e.push({source:r.parent,target:r})}),e},copy:function(){return d(this).eachBefore(g)},[Symbol.iterator]:function*(){var t,e,r,n,i=this,a=[i];do for(t=a.reverse(),a=[];i=t.pop();)if(yield i,e=i.children)for(r=0,n=e.length;r<n;++r)a.push(e[r]);while(a.length)}};var v=r(18349),x=r(50267),b=r(14230);let $=c().shape({name:c().string,val:c().number.isRequired}),w={name:c().string,val:c().number.isRequired,children:c().arrayOf(c().oneOfType([c().shape((n=()=>w,function(...t){return n().apply(this,t)})),$]))},O=c().oneOfType([c().shape(w),$]),T={data:c().arrayOf(O),width:c().number,height:c().number,colorScheme:c().string,dateTimeFormat:c().string,equalDateSize:c().bool,levels:c().arrayOf(c().string),metrics:c().arrayOf(c().oneOfType([c().string,c().object])),numberFormat:c().string,partitionLimit:c().number,partitionThreshold:c().number,timeSeriesOption:c().string,useLogScale:c().bool,useRichTooltip:c().bool};function A(t,e){let{width:r,height:n,data:i,colorScheme:a,dateTimeFormat:o,equalDateSize:l,levels:p,useLogScale:c=!1,metrics:h=[],numberFormat:u,partitionLimit:f,partitionThreshold:g,useRichTooltip:y,timeSeriesOption:m="not_time",sliceId:$}=e,w=s().select(t);w.classed("superset-legacy-chart-partition",!0);let O=["adv_anal","time_series"].includes(m),T=(0,v.gV)(u),A=(0,x.mo)(o),S=b.getScale(a);w.selectAll("*").remove();let N=w.append("div").classed("partition-tooltip",!0);function k(t){return h.includes(t.data.name)&&O}function B(t){return t?O&&1===t?"Date":p[t-(O?2:1)]:"Metric"}for(let e=0;e<i.length;e+=1)!function(e,a){let o,p,h,u=a[e],m=n/i.length,v=s().scale.linear().range([0,r]),x=s().scale.linear().range([0,m]),b=w.append("div").attr("class","chart").style("width",`${r}px`).style("height",`${m}px`).append("svg:svg").attr("width",r).attr("height",m);e!==i.length-1&&i.length>1&&b.style("padding-bottom","3px"),0!==e&&i.length>1&&b.style("padding-top","3px");let O=d(u);function R(e,r){let n="<table>";y?(function(t){let e=[t],r=t;for(;r.parent;)e.push(r.parent),r=r.parent;return e})(r).reverse().forEach(t=>{n+=`<tbody><tr><td><div style='border: 2px solid transparent;background-color: ${t.color};'></div></td><td>${B(t.depth)}</td><td>${t.name}</td><td>${t.disp}</td></tr>`}):n+=`<thead><tr><td colspan="3"><strong>${B(r.depth)}</strong></td></tr></thead><tbody><tr><td><div style='border: thin solid grey; background-color: ${r.color};'></div></td><td>${r.name}</td><td>${r.disp}</td></tr>`,n+="</tbody></table>";let[i,a]=s().mouse(t);e.html(n).style("left",`${i+15}px`).style("top",`${a}px`)}O.eachAfter(t=>{t.disp=t.data.val,t.value=t.disp<0?-t.disp:t.disp,t.weight=t.value,t.name=t.data.name,t.parent&&k(t.parent)&&(t.weight=l?1:t.value,t.value=t.name,t.name=A(t.name)),c&&(t.weight=Math.log(t.weight+1)),t.disp=t.disp&&!Number.isNaN(t.disp)&&Number.isFinite(t.disp)?T(t.disp):""}),O.sort((t,e)=>{let r=e.value-t.value;return 0===r?e.name>t.name?1:-1:r}),g&&g>=0&&O.each(t=>{if(t.sum=t.children&&t.children.reduce((t,e)=>t+e.weight,0)||1,t.children)if(k(t)){if(l)return;let e=[];for(let r=1;r<t.children.length;r+=1)t.children[r].weight/t.sum<g&&e.push(r);for(let r=e.length-1;r>=0;r-=1)t.children.splice(e[r],1)}else{let e;for(e=1;e<t.children.length&&!(t.children[e].weight/t.sum<g);e+=1);t.children=t.children.slice(0,e)}}),f&&f>=0&&O.each(t=>{t.children&&t.children.length>f&&!k(t)&&(t.children=t.children.slice(0,f))}),O.eachAfter(t=>{t.sum=t.children&&t.children.reduce((t,e)=>t+e.weight,0)||1});let j=(o=[],p=1/(O.height+1),h=null,O.each(t=>{t.y=p*t.depth,t.dy=p,t.parent?(t.x=h.depth===t.parent.depth?0:h.x+h.dx,t.dx=t.weight/t.parent.sum*t.parent.dx):(t.x=0,t.dx=1),h=t,o.push(t)}),o),z=r/O.dx,C=m/1;function P(t){return`translate(8,${t.dx*C/2})`}let M=b.selectAll("g").data(j).enter().append("svg:g").attr("transform",t=>`translate(${v(t.y)},${x(t.x)})`).on("mouseover",t=>{N.interrupt().transition().duration(100).style("opacity",.9),R(N,t)}).on("mousemove",t=>{R(N,t)}).on("mouseout",()=>{N.interrupt().transition().duration(250).style("opacity",0)});M.on("click",function t(e){if(!e.children)return!!e.parent&&t(e.parent);z=(e.y?r-40:r)/(1-e.y),C=m/e.dx,v.domain([e.y,1]).range([40*!!e.y,r]),x.domain([e.x,e.x+e.dx]);let n=M.transition().duration(s().event.altKey?7500:750).attr("transform",t=>`translate(${v(t.y)},${x(t.x)})`);return n.select("rect").attr("width",e.dy*z).attr("height",t=>t.dx*C),n.select("text").attr("transform",P).style("opacity",t=>+(t.dx*C>12)),s().event.stopPropagation(),!0}),M.append("svg:rect").attr("width",O.dy*z).attr("height",t=>t.dx*C),M.append("svg:text").attr("transform",P).attr("dy","0.35em").style("opacity",t=>+(t.dx*C>12)).text(t=>t.disp?`${t.name}: ${t.disp}`:t.name),M.selectAll("rect").style("fill",t=>(t.color=S(t.name,$),t.color))}(e,i)}function S(){return(S=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}A.displayName="Icicle",A.propTypes=T;let N=(0,a.A)(A),k=(0,o.styled)(t=>{let{className:e}=t,r=function(t,e){if(null==t)return{};var r,n,i={},a=Object.getOwnPropertyNames(t);for(n=0;n<a.length;n++)!(e.indexOf(r=a[n])>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r]);return i}(t,["className"]);return(0,i.Y)("div",{className:e,children:(0,i.Y)(N,S({},r))})})`
  ${({theme:t})=>`
    .superset-legacy-chart-partition {
      position: relative;
    }

    .superset-legacy-chart-partition .chart {
      display: block;
      margin: auto;
      font-size: ${t.fontSizeSM}px;
    }

    .superset-legacy-chart-partition rect {
      stroke: ${t.colorBorderSecondary};
      fill: ${t.colorBgLayout};
      fill-opacity: 80%;
      transition: fill-opacity 180ms linear;
      cursor: pointer;
    }

    .superset-legacy-chart-partition rect:hover {
      fill-opacity: 1;
    }

    .superset-legacy-chart-partition g text {
      font-weight: ${t.fontWeightStrong};
      fill: ${t.colorText};
    }

    .superset-legacy-chart-partition g:hover text {
      fill: ${t.colorTextHeading};
    }

    .superset-legacy-chart-partition .partition-tooltip {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      padding: ${t.sizeUnit}px;
      pointer-events: none;
      background-color: ${t.colorBgElevated};
      border-radius: ${t.borderRadius}px;
    }

    .partition-tooltip td {
      padding-left: ${t.sizeUnit}px;
      font-size: ${t.fontSizeSM}px;
      color: ${t.colorTextSecondary};
    }
  `}
`}}]);