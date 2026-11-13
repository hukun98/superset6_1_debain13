"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3323],{33323(e,t,o){o.r(t),o.d(t,{default:()=>m});var r=o(2445),l=o(24002);function a(e,t){let o,r;if(void 0===t)for(let t of e)null!=t&&(void 0===o?t>=t&&(o=r=t):(o>t&&(o=t),r<t&&(r=t)));else{let l=-1;for(let a of e)null!=(a=t(a,++l,e))&&(void 0===o?a>=a&&(o=r=a):(o>a&&(o=a),r<a&&(r=a)))}return[o,r]}var n=o(25365),s=o(85614),i=o(57480);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}let c=["#313695","#4575b4","#74add1","#abd9e9","#fee090","#fdae61","#f46d43","#d73027"],d={className:"",width:800,height:20,bands:c.length>>1,colors:c,colorScale:"series",mode:"offset",offsetX:0,title:"",yDomain:void 0};class f extends l.PureComponent{componentDidMount(){this.drawChart()}componentDidUpdate(){this.drawChart()}componentWillUnmount(){this.canvas=null}drawChart(){if(this.canvas){let e,t,{data:o,yDomain:r,width:l=800,height:n=20,bands:s=c.length>>1,colors:d=c,colorScale:f,offsetX:u=0,mode:p}=this.props,g="change"===f?o.map(e=>h({},e,{y:e.y-o[0].y})):o,m=this.canvas.getContext("2d");if(!m)return;m.imageSmoothingEnabled=!1,m.clearRect(0,0,l,n),m.setTransform(1,0,0,1,0,0),m.translate(.5,.5);let v=l/g.length,y=Math.floor(Math.max(0,-(u/v))),b=Math.floor(Math.min(g.length,y+l/v));if(y>g.length)return;let[w,z]=r||a(g,e=>e.y),S=(0,i.A)().domain([0,Math.max(-w,z)]).range([0,n]),x=!1;for(let o=0;o<s;o+=1){m.fillStyle=d[s+o],t=(o+1-s)*n,S.range([s*n+t,t]);for(let t=y;t<b;t+=1){if((e=g[t].y)<=0){x=!0;continue}void 0!==e&&m.fillRect(u+t*v,S(e),v+1,S(0)-S(e))}}if(x){"offset"===p&&(m.translate(0,n),m.scale(1,-1));for(let o=0;o<s;o+=1){m.fillStyle=d[s-o-1],t=(o+1-s)*n,S.range([s*n+t,t]);for(let t=y;t<b;t+=1)(e=g[t].y)>=0||m.fillRect(u+t*v,S(-e),v+1,S(0)-S(-e))}}}}render(){let{className:e,title:t,width:o,height:l}=this.props;return(0,r.FD)("div",{className:`horizon-row ${e}`,children:[(0,r.Y)("span",{className:"title",children:t}),(0,r.Y)("canvas",{ref:e=>{this.canvas=e},width:o,height:l})]})}constructor(...e){super(...e),this.canvas=null}}f.defaultProps=d;let u={className:"",width:800,height:600,seriesHeight:20,bands:Math.floor(c.length/2),colors:c,colorScale:"series",mode:"offset",offsetX:0},p=s.styled.div`
  ${({theme:e})=>`
    .superset-legacy-chart-horizon {
      overflow: auto;
      position: relative;
    }

    .superset-legacy-chart-horizon .horizon-row {
      border-bottom: solid 1px ${e.colorBorderSecondary};
      border-top: 0;
      padding: 0;
      margin: 0;
    }

    .superset-legacy-chart-horizon .horizon-row span.title {
      position: absolute;
      color: ${e.colorText};
      font-size: ${e.fontSizeSM}px;
      margin: 0;
    }
  `}
`;class g extends l.PureComponent{render(){let e,{className:t,width:o,height:l,data:s,seriesHeight:i,bands:h,colors:c,colorScale:d,mode:u,offsetX:g}=this.props;if("overall"===d){let t=a(s.reduce((e,t)=>e.concat(t.values),[]),e=>e.y);null!=t[0]&&null!=t[1]&&(e=[t[0],t[1]])}return(0,r.Y)(p,{children:(0,r.Y)("div",{className:`superset-legacy-chart-horizon ${t}`,style:{height:l},children:s.map(t=>(0,r.Y)(f,{width:o,height:i,title:(0,n.A)(t.key).join(", "),data:t.values,bands:h,colors:c,colorScale:d,mode:u,offsetX:g,yDomain:e},t.key.join(",")))})})}}g.defaultProps=u;let m=g}}]);