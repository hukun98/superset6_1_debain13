"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5426],{28471(e,t,a){a.d(t,{A:()=>o});var i=a(2445),r=a(24002);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function o(e,t){class a extends r.Component{componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,(null==t?void 0:t.componentWillUnmount)&&t.componentWillUnmount.bind(this)()}setContainerRef(e){this.container=e}execute(){this.container&&e(this.container,this.props)}render(){let{id:e,className:t}=this.props;return(0,i.Y)("div",{ref:this.setContainerRef,id:e,className:t})}constructor(e){super(e),this.setContainerRef=this.setContainerRef.bind(this)}}return e.displayName&&(a.displayName=e.displayName),e.propTypes&&(a.propTypes=n({},a.propTypes,e.propTypes)),e.defaultProps&&(a.defaultProps=e.defaultProps),a}},95426(e,t,a){a.r(t),a.d(t,{default:()=>ei});var i=a(2445),r=a(28471),n=a(85614),o=a(5556),s=a.n(o),l=a(20249),c=a.n(l),h=a(7350),u=a.n(h),p=a(24143),m=a.n(p),d=a(83826),y=a.n(d),x=a(71111),g=a.n(x),f=a(50267),b=a(11005),v=a(14230),A=a(13048),w=a(18349),k=a(73371),T=a(72255),L=a(93620),$=a(27124),O=a(45507);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function N(e){return Object.keys(e).reduce((e,t)=>(e[t]=t,e),{})}let E=N({FORMULA:{value:"FORMULA",label:(0,$.t)("Formula")},EVENT:{value:"EVENT",label:(0,$.t)("Event"),supportNativeSource:!0},INTERVAL:{value:"INTERVAL",label:(0,$.t)("Interval"),supportNativeSource:!0},TIME_SERIES:{value:"TIME_SERIES",label:(0,$.t)("Time Series")}});E.FORMULA;let M=N({NATIVE:{value:"NATIVE",label:"Superset annotation"}}),S={descriptionColumns:["long_descr"],intervalEndColumn:"end_dttm",timeColumn:"start_dttm",titleColumn:"short_descr"};function D(e){return e.sourceType===M.NATIVE?C({},e,S):e}var F=a(38719),I=a(96460);let R=s().oneOfType([s().number,s().oneOf(["auto"])]),B=s().oneOfType([s().string,s().shape({label:s().string})]),P=s().shape({r:s().number.isRequired,g:s().number.isRequired,b:s().number.isRequired}),Y=s().shape({x:s().number,y:s().number}),_=s().shape({x:s().string,y:s().number}),z=s().shape({outliers:s().arrayOf(s().number),Q1:s().number,Q2:s().number,Q3:s().number,whisker_high:s().number,whisker_low:s().number}),V=s().shape({markerLabels:s().arrayOf(s().string),markerLineLabels:s().arrayOf(s().string),markerLines:s().arrayOf(s().number),markers:s().arrayOf(s().number),measures:s().arrayOf(s().number),rangeLabels:s().arrayOf(s().string),ranges:s().arrayOf(s().number)}),j=s().shape({annotationType:s().oneOf(Object.keys(E)),color:s().string,hideLine:s().bool,name:s().string,opacity:s().string,show:s().bool,showMarkers:s().bool,sourceType:s().string,style:s().string,value:s().oneOfType([s().number,s().string]),width:s().number});function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}let W=[{text:"No data",dy:"-.75em",class:"header"},{text:"Adjust filters or check the Datasource.",dy:".75em",class:"body"}];O.XV.extend(y());let G=(0,f.mo)(b.M);g().utils.noData=function(e,t){let a=e.options().margin(),i=g().utils.availableHeight(null,t,a),r=g().utils.availableWidth(null,t,a),n=a.left+r/2,o=a.top+i/2;t.selectAll("g").remove();let s=t.selectAll(".nv-noData").data(W);s.enter().append("text").attr("class",e=>`nvd3 nv-noData ${e.class}`).attr("dy",e=>e.dy).style("text-anchor","middle"),s.attr("x",n).attr("y",o).text(e=>e.text)};let{getColor:q,getScale:X}=v,H=[A.Y.Compare,A.Y.TimePivot],Q={data:s().oneOfType([s().arrayOf(s().oneOfType([_,s().shape({key:s().string,values:s().arrayOf(_)}),s().shape({key:s().arrayOf(s().string),values:s().arrayOf(Y)}),s().shape({classed:s().string,key:s().string,type:s().string,values:s().arrayOf(Y),yAxis:s().number}),s().shape({label:s().string,values:s().arrayOf(z)}),s().shape({key:s().string,values:s().arrayOf(s().object)})])),V]),width:s().number,height:s().number,annotationData:s().object,annotationLayers:s().arrayOf(j),bottomMargin:R,colorScheme:s().string,comparisonType:s().string,contribution:s().bool,leftMargin:R,onError:s().func,showLegend:s().bool,showMarkers:s().bool,vizType:s().oneOf([A.Y.BoxPlot,"bubble",A.Y.Bullet,A.Y.Compare,"column",A.Y.TimePivot,"pie"]),xAxisFormat:s().string,numberFormat:s().string,xAxisLabel:s().string,xAxisShowMinMax:s().bool,xIsLogScale:s().bool,xTicksLayout:s().oneOf(["auto","staggered","45°"]),yAxisFormat:s().string,yAxisBounds:s().arrayOf(s().number),yAxisLabel:s().string,yAxisShowMinMax:s().bool,yIsLogScale:s().bool,isBarStacked:s().bool,showBarValue:s().bool,showBrush:s().oneOf([!0,"yes",!1,"no","auto"]),onBrushEnd:s().func,yAxis2Format:s().string,lineInterpolation:s().string,isDonut:s().bool,isPieLabelOutside:s().bool,pieLabelType:s().oneOf(["key","value","percent","key_value","key_percent","key_value_percent"]),showLabels:s().bool,entity:s().string,maxBubbleSize:s().number,xField:B,yField:B,sizeField:B,baseColor:P},J=()=>{},K=(0,w.gV)();function Z(e,t){let a,{data:i,width:r,height:n,annotationData:o,annotationLayers:s=[],baseColor:l,bottomMargin:h,colorScheme:p,comparisonType:d,contribution:y,entity:x,isBarStacked:b,isDonut:v,isPieLabelOutside:C,leftMargin:N,lineInterpolation:M="linear",markerLabels:S,markerLines:R,markerLineLabels:B,markers:P,maxBubbleSize:Y,onBrushEnd:_=J,onError:z=J,pieLabelType:V,rangeLabels:j,ranges:W,showBarValue:Q,showBrush:Z,showLabels:ee,showLegend:et,showMarkers:ea,sizeField:ei,vizType:er,xAxisFormat:en,numberFormat:eo,xAxisLabel:es,xAxisShowMinMax:el=!1,xField:ec,xIsLogScale:eh,xTicksLayout:eu,yAxisFormat:ep,yAxisBounds:em,yAxisLabel:ed,yAxisShowMinMax:ey=!1,yAxis2ShowMinMax:ex=!1,yField:eg,yIsLogScale:ef,sliceId:eb}=t,ev=null!==document.querySelector("#explorer-container");e.innerHTML="";let eA=s.filter(e=>e.show),ew=e,ek=null;for(;ew.parentElement;){if(ew.parentElement.id.startsWith("chart-id-")){ek=ew.parentElement.id;break}ew=ew.parentElement}let eT="key";function eL(e){return e.includes(er)}e.style.width=`${r}px`,e.style.height=`${n}px`,ek?(0,I.G0)(ek):(0,I.$v)(!0),g().addGraph(function(){let t,s=m().select(e);s.classed("superset-legacy-chart-nvd3",!0),s.classed(`superset-legacy-chart-nvd3-${c()(er)}`,!0);let ew=s.select("svg");ew.empty()&&(ew=s.append("svg"));let e$=er===A.Y.Bullet?Math.min(n,50):n,eO=eL(H),eC="staggered"===eu,eN=45*("45°"===eu);if(45===eN&&(0,F.A)(Z))return z((0,$.t)("You cannot use 45° tick layout along with the time range filter")),null;let eE=(0,F.A)(Z)||"auto"===Z&&n>=480&&"45°"!==eu,eM=(0,w.gV)(eo);switch(er){case A.Y.TimePivot:(a=g().models.lineChart()).xScale(m().time.scale.utc()),a.interpolate(M);break;case A.Y.Pie:if(a=g().models.pieChart(),eT="x",a.valueFormat(eM),v&&a.donut(!0),a.showLabels(ee),a.labelsOutside(C),a.labelThreshold(.05),a.cornerRadius(!0),["key","value","percent"].includes(V))a.labelType(V);else if("key_value"===V)a.labelType(e=>`${e.data.x}: ${eM(e.data.y)}`);else{let e=m().sum(i,e=>e.y),t=(0,w.gV)(k.A.PERCENT_2_POINT);"key_percent"===V?(a.tooltip.valueFormatter(e=>t(e)),a.labelType(a=>`${a.data.x}: ${t(a.data.y/e)}`)):(a.tooltip.valueFormatter(a=>`${eM(a)} (${t(a/e)})`),a.labelType(a=>`${a.data.x}: ${eM(a.data.y)} (${t(a.data.y/e)})`))}a.margin({top:0});break;case"column":a=g().models.multiBarChart().reduceXTicks(!1);break;case A.Y.Compare:(a=g().models.cumulativeLineChart()).xScale(m().time.scale.utc()),a.useInteractiveGuideline(!0),a.xAxis.showMaxMin(!1);break;case A.Y.LegacyBubble:(a=g().models.scatterChart()).showDistX(!1),a.showDistY(!1),a.tooltip.contentGenerator(e=>(0,I.oh)({point:e.point,entity:x,xField:ec,yField:eg,sizeField:ei,xFormatter:(0,I.wn)(en),yFormatter:(0,I.wn)(ep),sizeFormatter:K})),a.pointRange([5,Math.pow(Y,2)]),a.pointDomain([0,m().max(i,e=>m().max(e.values,e=>e.size))]);break;case A.Y.BoxPlot:eT="label",(a=g().models.boxPlotChart()).x(e=>e.label),a.maxBoxWidth(75);break;case A.Y.Bullet:a=g().models.bulletChart(),i.rangeLabels=j,i.ranges=W,i.markerLabels=S,i.markerLines=R,i.markerLineLabels=B,i.markers=P;break;default:throw Error(`Unrecognized visualization for nvd3${er}`)}a.margin({left:0,bottom:0}),Q&&((0,I.C$)(ew,i,b,ep),a.dispatch.on("stateChange.drawBarValues",()=>{(0,I.C$)(ew,i,b,ep)})),eE&&_!==J&&a.focus&&a.focus.dispatch.on("brush",e=>{let t=(0,I.EF)(e.extent);t&&e.brush.on("brushend",()=>{_(t)})}),a.xAxis&&a.xAxis.staggerLabels&&a.xAxis.staggerLabels(eC),a.xAxis&&a.xAxis.rotateLabels&&a.xAxis.rotateLabels(eN),a.x2Axis&&a.x2Axis.staggerLabels&&a.x2Axis.staggerLabels(eC),a.x2Axis&&a.x2Axis.rotateLabels&&a.x2Axis.rotateLabels(eN),"showLegend"in a&&void 0!==et&&(r<340&&er!==A.Y.Pie?a.showLegend(!1):a.showLegend(et)),ef&&a.yScale(m().scale.log()),eh&&a.xScale(m().scale.log()),eO?(t=(0,f.mo)(en),a.interactiveLayer.tooltip.headerFormatter(G)):t=(0,I.wn)(en),a.x2Axis&&a.x2Axis.tickFormat&&a.x2Axis.tickFormat(t),a.xAxis&&a.xAxis.tickFormat&&(eL([A.Y.BoxPlot])?a.xAxis.tickFormat(e=>e.length>40?`${e.slice(0,40)}…`:e):a.xAxis.tickFormat(t));let eS=(0,I.wn)(ep);if(a.yAxis&&a.yAxis.tickFormat&&((y||"percentage"===d)&&(!ep||ep===k.A.SMART_NUMBER||ep===k.A.SMART_NUMBER_SIGNED)&&(eS=(0,w.gV)(k.A.PERCENT_1_POINT)),a.yAxis.tickFormat(eS)),a.y2Axis&&a.y2Axis.tickFormat&&a.y2Axis.tickFormat(eS),a.yAxis&&a.yAxis.ticks(5),a.y2Axis&&a.y2Axis.ticks(5),(0,I.dw)(a.xAxis,el),(0,I.dw)(a.x2Axis,el),(0,I.dw)(a.yAxis,ey),(0,I.dw)(a.y2Axis,ex||ey),er===A.Y.TimePivot){if(l){let{r:e,g:t,b:i}=l;a.color(a=>{let r=a.rank>0?.5*a.perc:1;return`rgba(${e}, ${t}, ${i}, ${r})`})}a.useInteractiveGuideline(!0),a.interactiveLayer.tooltip.contentGenerator(e=>(0,I.qY)(e,t,eS))}else if(er!==A.Y.Bullet){let e=X(p);a.color(t=>t.color||e((0,I.n0)(t[eT]),eb))}eL([A.Y.Compare])&&a.interactiveLayer.tooltip.contentGenerator(e=>(0,I.Jy)(e,eS)),a.width(r),a.height(e$),ew.datum(i).transition().duration(500).attr("height",e$).attr("width",r).call(a),ef&&a.yAxis.tickFormat(e=>0!==e&&Math.log10(e)%1==0?eS(e):""),eN>0&&ew.select(".nv-x.nv-axis > g").selectAll("g").selectAll("text").attr("dx",-6.5);let eD=()=>{if(a.yDomain&&Array.isArray(em)&&2===em.length){let[e,t]=em,r=(0,T.A)(e)&&!Number.isNaN(e),n=(0,T.A)(t)&&!Number.isNaN(t);if(r&&n)a.yDomain([e,t]),a.clipEdge(!0);else if(r||n){let[o,s]=(0,I.B2)(i);a.yDomain([r?e:o,n?t:s]),a.clipEdge(!0)}}};if(eD(),a.dispatch&&a.dispatch.stateChange&&a.dispatch.on("stateChange.applyYAxisBounds",eD),ea&&(ew.selectAll(".nv-point").style("stroke-opacity",1).style("fill-opacity",1),a.dispatch.on("stateChange.showMarkers",()=>{setTimeout(()=>{ew.selectAll(".nv-point").style("stroke-opacity",1).style("fill-opacity",1)},10)})),void 0!==a.yAxis||void 0!==a.yAxis2){let t=Math.ceil(Math.min(r*(ev?.01:.03),30)),n=a.margin();a.xAxis&&(n.bottom=28);let s=(0,I.cm)(ew,a.yAxis2?"nv-y1":"nv-y"),l=(0,I.cm)(ew,"nv-x");if(n.left=s+t,ed&&""!==ed&&(n.left+=25),Q&&(n.top+=24),el&&(n.right=Math.max(20,l/2)+t),45===eN?(n.bottom=l*Math.sin(Math.PI*eN/180)+t+30,n.right=l*Math.cos(Math.PI*eN/180)+t):eC&&(n.bottom=40),h&&"auto"!==h&&(n.bottom=parseInt(h,10)),N&&"auto"!==N&&(n.left=N),es&&""!==es&&a.xAxis){n.bottom+=25;let e=0;n.bottom&&!Number.isNaN(n.bottom)&&(e=n.bottom-45),a.xAxis.axisLabel(es).axisLabelDistance(e)}if(ed&&""!==ed&&a.yAxis){let e=0;n.left&&!Number.isNaN(n.left)&&(e=n.left-70),a.yAxis.axisLabel(ed).axisLabelDistance(e)}if(eO&&o&&eA.length>0){let e=eA.filter(e=>e.annotationType===E.TIME_SERIES).reduce((e,t)=>e.concat((o[t.name]||[]).map(e=>{if(!e)return{};let a=Array.isArray(e.key)?`${t.name}, ${e.key.join(", ")}`:`${t.name}, ${e.key}`;return U({},e,{key:a,color:t.color,strokeWidth:t.width,classed:`${t.opacity} ${t.style} nv-timeseries-annotation-layer showMarkers${t.showMarkers} hideLine${t.hideLine}`})})),[]);i.push(...e)}if(ek&&(a&&a.interactiveLayer&&a.interactiveLayer.tooltip&&a.interactiveLayer.tooltip.classes([(0,I.Ir)(ek)]),a&&a.tooltip&&a.tooltip.classes([(0,I.Ir)(ek)])),a.margin(n),ew.datum(i).transition().duration(500).attr("width",r).attr("height",e$).call(a),window.addEventListener("scroll",u()(()=>(0,I.$v)(!1),250)),eO&&eA.length>0){let t,n=eA.filter(e=>e.annotationType===E.FORMULA),s=a.xAxis.scale().domain()[1].valueOf(),l=a.xAxis.scale().domain()[0].valueOf();if((t=a.xScale?a.xScale():a.xAxis.scale?a.xAxis.scale():m().scale.linear())&&t.clamp&&t.clamp(!0),n.length>0){let e=[],t=Math.min(...i.map(e=>Math.min(...e.values.slice(1).map((t,a)=>t.x-e.values[a].x)))),a=(s-l)/(t||1);t=a<100?(s-l)/100:t,t=a>500?(s-l)/500:t,e.push(l);for(let a=l;a<s;a+=t)e.push(a);e.push(s);let r=n.map(t=>{let{value:a}=t;return{key:t.name,values:e.map(e=>({x:e,y:(0,L.p)(a,e)})),color:t.color,strokeWidth:t.width,classed:`${t.opacity} ${t.style}`}});i.push(...r)}let c=a.xAxis1?a.xAxis1:a.xAxis,h=a.yAxis1?a.yAxis1:a.yAxis,u=c.scale().range()[1],d=h.scale().range()[0];o&&(eA.filter(e=>e.annotationType===E.EVENT&&o&&o[e.name]).forEach((i,r)=>{let n=D(i),s=m().select(e).select(".nv-wrap").append("g").attr("class",`nv-event-annotation-layer-${r}`),l=n.color||q((0,I.n0)(n.name),p),c=(0,I.AN)(U({},n,{annotationTipClass:`arrow-down nv-event-annotation-layer-${i.sourceType}`})),h=(o[n.name].records||[]).map(e=>{let t=new Date(O.XV.utc(e[n.timeColumn]));return U({},e,{[n.timeColumn]:t})}).filter(e=>!Number.isNaN(e[n.timeColumn].getMilliseconds()));h.length>0&&s.selectAll("line").data(h).enter().append("line").attr({x1:e=>t(new Date(e[n.timeColumn])),y1:0,x2:e=>t(new Date(e[n.timeColumn])),y2:d}).attr("class",`${n.opacity} ${n.style}`).style("stroke",l).style("stroke-width",n.width).on("mouseover",c.show).on("mouseout",c.hide).call(c),a.focus&&a.focus.dispatch.on("onBrush.event-annotation",()=>{s.selectAll("line").data(h).attr({x1:e=>t(new Date(e[n.timeColumn])),y1:0,x2:e=>t(new Date(e[n.timeColumn])),y2:d,opacity:e=>{let a=t(new Date(e[n.timeColumn]));return+(a>0&&a<u)}})})}),eA.filter(e=>e.annotationType===E.INTERVAL&&o&&o[e.name]).forEach((i,r)=>{let n=D(i),s=m().select(e).select(".nv-wrap").append("g").attr("class",`nv-interval-annotation-layer-${r}`),l=n.color||q((0,I.n0)(n.name),p),c=(0,I.AN)(n),h=(o[n.name].records||[]).map(e=>{let t=new Date(O.XV.utc(e[n.timeColumn])),a=new Date(O.XV.utc(e[n.intervalEndColumn]));return U({},e,{[n.timeColumn]:t,[n.intervalEndColumn]:a})}).filter(e=>!Number.isNaN(e[n.timeColumn].getMilliseconds())&&!Number.isNaN(e[n.intervalEndColumn].getMilliseconds()));h.length>0&&s.selectAll("rect").data(h).enter().append("rect").attr({x:e=>Math.min(t(new Date(e[n.timeColumn])),t(new Date(e[n.intervalEndColumn]))),y:0,width:e=>Math.max(Math.abs(t(new Date(e[n.intervalEndColumn]))-t(new Date(e[n.timeColumn]))),1),height:d}).attr("class",`${n.opacity} ${n.style}`).style("stroke-width",n.width).style("stroke",l).style("fill",l).style("fill-opacity",.2).on("mouseover",c.show).on("mouseout",c.hide).call(c),a.focus&&a.focus.dispatch.on("onBrush.interval-annotation",()=>{s.selectAll("rect").data(h).attr({x:e=>t(new Date(e[n.timeColumn])),width:e=>{let a=t(new Date(e[n.timeColumn]));return t(new Date(e[n.intervalEndColumn]))-a}})})})),ew.datum(i).attr("height",e$).attr("width",r).call(a),a.dispatch.on("renderEnd.timeseries-annotation",()=>{m().selectAll(".slice_container .nv-timeseries-annotation-layer.showMarkerstrue .nv-point").style("stroke-opacity",1).style("fill-opacity",1),m().selectAll(".slice_container .nv-timeseries-annotation-layer.hideLinetrue").style("stroke-width",0)})}}return(0,I.OK)(a),a})}function ee(){return(ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}Z.displayName="NVD3",Z.propTypes=Q;let et=(0,r.A)(Z,{componentWillUnmount:function(){let{id:e}=this.props;null!=e?(0,I.G0)(e):(0,I.$v)(!0)}}),ea=e=>{let{className:t}=e,a=function(e,t){if(null==e)return{};var a,i,r={},n=Object.getOwnPropertyNames(e);for(i=0;i<n.length;i++)!(t.indexOf(a=n[i])>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a]);return r}(e,["className"]);return(0,i.Y)("div",{className:t,children:(0,i.Y)(et,ee({},a))})};ea.propTypes={className:s().string.isRequired};let ei=(0,n.styled)(ea)`
  .superset-legacy-chart-nvd3-dist-bar,
  .superset-legacy-chart-nvd3-bar {
    overflow-x: auto !important;
    svg {
      &.nvd3-svg {
        width: auto;
        font-size: ${({theme:e})=>e.fontSize};
      }
    }
  }
  .superset-legacy-chart-nvd3 {
    nv-x text {
      font-size: ${({theme:e})=>e.fontSize};
    }
    g.superset path {
      stroke-dasharray: 5, 5;
    }
    .nvtooltip {
      table td {
        font-size: @font-size-s !important;
      }
    }
    .nvtooltip tr.highlight td {
      font-weight: ${({theme:e})=>e.fontWeightStrong};
      font-size: ${({theme:e})=>e.fontSize}px !important;
    }
    text.nv-axislabel {
      font-size: ${({theme:e})=>e.fontSize} !important;
    }
    g.nv-axis text {
      fill: ${({theme:e})=>e.colorText};
    }
    g.nv-series text {
      fill: ${({theme:e})=>e.colorText};
    }
    g.solid path,
    line.solid {
      stroke-dasharray: unset;
    }
    g.dashed path,
    line.dashed {
      stroke-dasharray: 5, 5;
    }
    g.longDashed path,
    line.dotted {
      stroke-dasharray: 1, 1;
    }

    g.opacityLow path,
    line.opacityLow {
      stroke-opacity: 0.2;
    }

    g.opacityMedium path,
    line.opacityMedium {
      stroke-opacity: 0.5;
    }
    g.opacityHigh path,
    line.opacityHigh {
      stroke-opacity: 0.8;
    }
    g.time-shift-0 path,
    line.time-shift-0 {
      stroke-dasharray: 5, 5;
    }
    g.time-shift-1 path,
    line.time-shift-1 {
      stroke-dasharray: 1, 5;
    }
    g.time-shift-2 path,
    line.time-shift-3 {
      stroke-dasharray: 5, 1;
    }
    g.time-shift-3 path,
    line.time-shift-3 {
      stroke-dasharray: 5, 1;
    }
    g.time-shift-4 path,
    line.time-shift-4 {
      stroke-dasharray: 5, 10;
    }
    g.time-shift-5 path,
    line.time-shift-5 {
      stroke-dasharray: 0.9;
    }
    g.time-shift-6 path,
    line.time-shift-6 {
      stroke-dasharray: 15, 10, 5;
    }
    g.time-shift-7 path,
    line.time-shift-7 {
      stroke-dasharray: 15, 10, 5, 10;
    }
    g.time-shift-8 path,
    line.time-shift-8 {
      stroke-dasharray: 15, 10, 5, 10, 15;
    }
    g.time-shift-9 path,
    line.time-shift-9 {
      stroke-dasharray: 5, 5, 1, 5;
    }
    .nv-noData.body {
      font-size: ${({theme:e})=>e.fontSize};
      font-weight: ${({theme:e})=>e.fontWeightNormal};
    }
  }
  .superset-legacy-chart-nvd3-tr-highlight {
    border-top: 1px solid;
    border-bottom: 1px solid;
    font-weight: ${({theme:e})=>e.fontWeightStrong};
  }
  .superset-legacy-chart-nvd3-tr-total {
    font-weight: ${({theme:e})=>e.fontWeightStrong};
  }
  .nvtooltip {
    .tooltip-header {
      white-space: nowrap;
      font-weight: ${({theme:e})=>e.fontWeightStrong};
    }
    tbody tr:not(.tooltip-header) td:nth-of-type(2) {
      word-break: break-word;
    }
  }
  .d3-tip.nv-event-annotation-layer-table,
  .d3-tip.nv-event-annotation-layer-NATIVE {
    width: 200px;
    border-radius: 2px;
    background-color: ${({theme:e})=>e.colorBgContainer};
    fill-opacity: 0.6;
    margin: ${({theme:e})=>2*e.sizeUnit}px;
    padding: ${({theme:e})=>2*e.sizeUnit}px;
    color: ${({theme:e})=>e.colorTextLightSolid};
    &:after {
      content: '\\25BC';
      font-size: ${({theme:e})=>e.fontSize};
      color: ${({theme:e})=>e.colorText};
      position: absolute;
      bottom: -14px;
      left: 94px;
    }
  }
`}}]);