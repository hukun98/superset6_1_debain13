"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4419],{24419(e,t,o){o.d(t,{A:()=>R});var i=o(48186),a=o(38706),n=o(37604),r=o(26630),s=o(2379),l=o(39585),g=o(9100),c=o(14063),u=o(80330),p=o(79951),m=o(52208),d=o(25140),v=o(55025);class h extends d.V{constructor(e={}){const{id:t=(0,v.L)("cube-geometry"),indices:o=!0}=e;super(o?{...e,id:t,topology:"triangle-list",indices:{size:1,value:f},attributes:{...A,...e.attributes}}:{...e,id:t,topology:"triangle-list",indices:void 0,attributes:{...z,...e.attributes}})}}let f=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),y=new Float32Array([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]),C=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]),b=new Float32Array([0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1]),S=new Float32Array([1,-1,1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,-1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,1,1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,1,-1,1,1,1,-1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1]),V=new Float32Array([1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0]),x=new Float32Array([1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1]),A={POSITION:{size:3,value:y},NORMAL:{size:3,value:C},TEXCOORD_0:{size:2,value:b}},z={POSITION:{size:3,value:S},TEXCOORD_0:{size:2,value:V},COLOR_0:{size:3,value:x}},P=`#version 300 es
#define SHADER_NAME grid-cell-layer-vertex-shader
in vec3 positions;
in vec3 normals;
in vec2 instancePositions;
in float instanceElevationValues;
in float instanceColorValues;
in vec3 instancePickingColors;
uniform sampler2D colorRange;
out vec4 vColor;
float interp(float value, vec2 domain, vec2 range) {
float r = min(max((value - domain.x) / (domain.y - domain.x), 0.), 1.);
return mix(range.x, range.y, r);
}
vec4 interp(float value, vec2 domain, sampler2D range) {
float r = (value - domain.x) / (domain.y - domain.x);
return texture(range, vec2(r, 0.5));
}
void main(void) {
geometry.pickingColor = instancePickingColors;
if (isnan(instanceColorValues) ||
instanceColorValues < grid.colorDomain.z ||
instanceColorValues > grid.colorDomain.w ||
instanceElevationValues < grid.elevationDomain.z ||
instanceElevationValues > grid.elevationDomain.w
) {
gl_Position = vec4(0.);
return;
}
vec2 commonPosition = (instancePositions + (positions.xy + 1.0) / 2.0 * column.coverage) * grid.sizeCommon + grid.originCommon - project.commonOrigin.xy;
geometry.position = vec4(commonPosition, 0.0, 1.0);
geometry.normal = project_normal(normals);
float elevation = 0.0;
if (column.extruded) {
elevation = interp(instanceElevationValues, grid.elevationDomain.xy, grid.elevationRange);
elevation = project_size(elevation);
geometry.position.z = (positions.z + 1.0) / 2.0 * elevation;
}
gl_Position = project_common_position_to_clipspace(geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vColor = interp(instanceColorValues, grid.colorDomain.xy, colorRange);
vColor.a *= layer.opacity;
if (column.extruded) {
vColor.rgb = lighting_getLightColor(vColor.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,w={name:"grid",vs:`\
uniform gridUniforms {
  vec4 colorDomain;
  vec4 elevationDomain;
  vec2 elevationRange;
  vec2 originCommon;
  vec2 sizeCommon;
} grid;
`,uniformTypes:{colorDomain:"vec4<f32>",elevationDomain:"vec4<f32>",elevationRange:"vec2<f32>",originCommon:"vec2<f32>",sizeCommon:"vec2<f32>"}};class D extends m.A{getShaders(){let e=super.getShaders();return e.modules.push(w),{...e,vs:P}}initializeState(){super.initializeState();let e=this.getAttributeManager();e.remove(["instanceElevations","instanceFillColors","instanceLineColors","instanceStrokeWidths"]),e.addInstanced({instancePositions:{size:2,type:"float32",accessor:"getBin"},instanceColorValues:{size:1,type:"float32",accessor:"getColorValue"},instanceElevationValues:{size:1,type:"float32",accessor:"getElevationValue"}})}updateState(e){super.updateState(e);let{props:t,oldProps:o}=e,i=this.state.fillModel;if(o.colorRange!==t.colorRange){this.state.colorTexture?.destroy(),this.state.colorTexture=(0,c.cp)(this.context.device,t.colorRange,t.colorScaleType);let e={colorRange:this.state.colorTexture};i.shaderInputs.setProps({grid:e})}else o.colorScaleType!==t.colorScaleType&&(0,c.Pu)(this.state.colorTexture,t.colorScaleType)}finalizeState(e){super.finalizeState(e),this.state.colorTexture?.destroy()}_updateGeometry(){let e=new h;this.state.fillModel.setGeometry(e)}draw({uniforms:e}){let{cellOriginCommon:t,cellSizeCommon:o,elevationRange:i,elevationScale:a,extruded:n,coverage:r,colorDomain:s,elevationDomain:l}=this.props,g=this.props.colorCutoff||[-1/0,1/0],c=this.props.elevationCutoff||[-1/0,1/0],u=this.state.fillModel,p={colorDomain:[Math.max(s[0],g[0]),Math.min(s[1],g[1]),Math.max(s[0]-1,g[0]),Math.min(s[1]+1,g[1])],elevationDomain:[Math.max(l[0],c[0]),Math.min(l[1],c[1]),Math.max(l[0]-1,c[0]),Math.min(l[1]+1,c[1])],elevationRange:[i[0]*a,i[1]*a],originCommon:t,sizeCommon:o};u.shaderInputs.setProps({column:{extruded:n,coverage:r},grid:p}),u.draw(this.context.renderPass)}}D.layerName="GridCellLayer";let O={name:"binOptions",vs:`\
uniform binOptionsUniforms {
  vec2 cellOriginCommon;
  vec2 cellSizeCommon;
} binOptions;
`,uniformTypes:{cellOriginCommon:"vec2<f32>",cellSizeCommon:"vec2<f32>"}};function T(){}let E={gpuAggregation:!0,colorDomain:null,colorRange:c.QO,getColorValue:{type:"accessor",value:null},getColorWeight:{type:"accessor",value:1},colorAggregation:"SUM",lowerPercentile:{type:"number",min:0,max:100,value:0},upperPercentile:{type:"number",min:0,max:100,value:100},colorScaleType:"quantize",onSetColorDomain:T,elevationDomain:null,elevationRange:[0,1e3],getElevationValue:{type:"accessor",value:null},getElevationWeight:{type:"accessor",value:1},elevationAggregation:"SUM",elevationScale:{type:"number",min:0,value:1},elevationLowerPercentile:{type:"number",min:0,max:100,value:0},elevationUpperPercentile:{type:"number",min:0,max:100,value:100},elevationScaleType:"linear",onSetElevationDomain:T,cellSize:{type:"number",min:0,value:1e3},coverage:{type:"number",min:0,max:1,value:1},getPosition:{type:"accessor",value:e=>e.position},gridAggregator:{type:"function",optional:!0,value:null},extruded:!1,material:!0};class M extends g.A{getAggregatorType(){let{gpuAggregation:e,gridAggregator:t,getColorValue:o,getElevationValue:a}=this.props;return e&&(t||o||a)?(i.A.warn("Features not supported by GPU aggregation, falling back to CPU")(),"cpu"):e&&s.V.isSupported(this.context.device)?"gpu":"cpu"}createAggregator(e){if("cpu"===e){let{gridAggregator:e,cellSize:t}=this.props;return new l.M({dimensions:2,getBin:{sources:["positions"],getValue:({positions:o},i,a)=>{if(e)return e(o,t);let n=this.state.aggregatorViewport.projectPosition(o),{cellSizeCommon:r,cellOriginCommon:s}=a;return[Math.floor((n[0]-s[0])/r[0]),Math.floor((n[1]-s[1])/r[1])]}},getValue:[{sources:["colorWeights"],getValue:({colorWeights:e})=>e},{sources:["elevationWeights"],getValue:({elevationWeights:e})=>e}]})}return new s.V(this.context.device,{dimensions:2,channelCount:2,bufferLayout:this.getAttributeManager().getBufferLayouts({isInstanced:!1}),...super.getShaders({modules:[a.A,O],vs:`
  in vec3 positions;
  in vec3 positions64Low;
  in float colorWeights;
  in float elevationWeights;

  void getBin(out ivec2 binId) {
    vec3 positionCommon = project_position(positions, positions64Low);
    vec2 gridCoords = floor(positionCommon.xy / binOptions.cellSizeCommon);
    binId = ivec2(gridCoords);
  }
  void getValue(out vec2 value) {
    value = vec2(colorWeights, elevationWeights);
  }
  `})})}initializeState(){super.initializeState(),this.getAttributeManager().add({positions:{size:3,accessor:"getPosition",type:"float64",fp64:this.use64bitPositions()},colorWeights:{size:1,accessor:"getColorWeight"},elevationWeights:{size:1,accessor:"getElevationWeight"}})}updateState(e){let t=super.updateState(e),{props:o,oldProps:i,changeFlags:a}=e,{aggregator:r}=this.state;if((a.dataChanged||!this.state.dataAsArray)&&(o.getColorValue||o.getElevationValue)&&(this.state.dataAsArray=Array.from((0,n.X)(o.data).iterable)),t||a.dataChanged||o.cellSize!==i.cellSize||o.getColorValue!==i.getColorValue||o.getElevationValue!==i.getElevationValue||o.colorAggregation!==i.colorAggregation||o.elevationAggregation!==i.elevationAggregation){this._updateBinOptions();let{cellSizeCommon:e,cellOriginCommon:t,binIdRange:i,dataAsArray:a}=this.state;if(r.setProps({binIdRange:i,pointCount:this.getNumInstances(),operations:[o.colorAggregation,o.elevationAggregation],binOptions:{cellSizeCommon:e,cellOriginCommon:t},onUpdate:this._onAggregationUpdate.bind(this)}),a){let{getColorValue:e,getElevationValue:t}=this.props;r.setProps({customOperations:[e&&(t=>e(t.map(e=>a[e]),{indices:t,data:o.data})),t&&(e=>t(e.map(e=>a[e]),{indices:e,data:o.data}))]})}}return a.updateTriggersChanged&&a.updateTriggersChanged.getColorValue&&r.setNeedsUpdate(0),a.updateTriggersChanged&&a.updateTriggersChanged.getElevationValue&&r.setNeedsUpdate(1),t}_updateBinOptions(){let e=this.getBounds(),t=[1,1],o=[0,0],i=[[0,1],[0,1]],a=this.context.viewport;if(e&&Number.isFinite(e[0][0])){let n=[(e[0][0]+e[1][0])/2,(e[0][1]+e[1][1])/2],{cellSize:s}=this.props,{unitsPerMeter:l}=a.getDistanceScales(n);t[0]=l[0]*s,t[1]=l[1]*s;let g=a.projectFlat(n);o=[Math.floor(g[0]/t[0])*t[0],Math.floor(g[1]/t[1])*t[1]],n=a.unprojectFlat(o);let c=a.constructor;o=[Math.fround((a=a.isGeospatial?new c({longitude:n[0],latitude:n[1],zoom:12}):new r.A({position:[n[0],n[1],0],zoom:12})).center[0]),Math.fround(a.center[1])],i=(0,p.O)({dataBounds:e,getBinId:e=>{let i=a.projectFlat(e);return[Math.floor((i[0]-o[0])/t[0]),Math.floor((i[1]-o[1])/t[1])]}})}this.setState({cellSizeCommon:t,cellOriginCommon:o,binIdRange:i,aggregatorViewport:a})}draw(e){e.shaderModuleProps.project&&(e.shaderModuleProps.project.viewport=this.state.aggregatorViewport),super.draw(e)}_onAggregationUpdate({channel:e}){let t=this.getCurrentLayer().props,{aggregator:o}=this.state;if(0===e){let e=o.getResult(0);this.setState({colors:new u.bg(e,o.binCount)}),t.onSetColorDomain(o.getResultDomain(0))}else if(1===e){let e=o.getResult(1);this.setState({elevations:new u.bg(e,o.binCount)}),t.onSetElevationDomain(o.getResultDomain(1))}}onAttributeChange(e){let{aggregator:t}=this.state;switch(e){case"positions":t.setNeedsUpdate(),this._updateBinOptions();let{cellSizeCommon:o,cellOriginCommon:i,binIdRange:a}=this.state;t.setProps({binIdRange:a,binOptions:{cellSizeCommon:o,cellOriginCommon:i}});break;case"colorWeights":t.setNeedsUpdate(0);break;case"elevationWeights":t.setNeedsUpdate(1)}}renderLayers(){let{aggregator:e,cellOriginCommon:t,cellSizeCommon:o}=this.state,{elevationScale:i,colorRange:a,elevationRange:n,extruded:r,coverage:s,material:l,transitions:g,colorScaleType:c,lowerPercentile:u,upperPercentile:p,colorDomain:m,elevationScaleType:d,elevationLowerPercentile:v,elevationUpperPercentile:h,elevationDomain:f}=this.props,y=this.getSubLayerClass("cells",D),C=e.getBins(),b=this.state.colors?.update({scaleType:c,lowerPercentile:u,upperPercentile:p}),S=this.state.elevations?.update({scaleType:d,lowerPercentile:v,upperPercentile:h});return b&&S?new y(this.getSubLayerProps({id:"cells"}),{data:{length:e.binCount,attributes:{getBin:C,getColorValue:b.attribute,getElevationValue:S.attribute}},dataComparator:(e,t)=>e.length===t.length,updateTriggers:{getBin:[C],getColorValue:[b.attribute],getElevationValue:[S.attribute]},cellOriginCommon:t,cellSizeCommon:o,elevationScale:i,colorRange:a,colorScaleType:c,elevationRange:n,extruded:r,coverage:s,material:l,colorDomain:b.domain||m||e.getResultDomain(0),elevationDomain:S.domain||f||e.getResultDomain(1),colorCutoff:b.cutoff,elevationCutoff:S.cutoff,transitions:g&&{getFillColor:g.getColorValue||g.getColorWeight,getElevation:g.getElevationValue||g.getElevationWeight},extensions:[]}):null}getPickingInfo(e){let t=e.info,{index:o}=t;if(o>=0){let e,i=this.state.aggregator.getBin(o);i&&(e={col:i.id[0],row:i.id[1],colorValue:i.value[0],elevationValue:i.value[1],count:i.count},i.pointIndices&&(e.pointIndices=i.pointIndices,e.points=Array.isArray(this.props.data)?i.pointIndices.map(e=>this.props.data[e]):[])),t.object=e}return t}}M.layerName="GridLayer",M.defaultProps=E;let R=M}}]);