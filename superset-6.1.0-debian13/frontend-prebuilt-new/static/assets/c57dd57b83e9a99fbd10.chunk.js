"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3678],{9100(e,t,i){i.d(t,{A:()=>o});var s=i(10421),n=i(71677);class r extends n.A{get isDrawable(){return!0}initializeState(){this.getAttributeManager().remove(["instancePickingColors"])}updateState(e){super.updateState(e);let t=this.getAggregatorType();if(e.changeFlags.extensionsChanged||this.state.aggregatorType!==t){this.state.aggregator?.destroy();let e=this.createAggregator(t);return e.setProps({attributes:this.getAttributeManager()?.attributes}),this.setState({aggregator:e,aggregatorType:t}),!0}return!1}finalizeState(e){super.finalizeState(e),this.state.aggregator.destroy()}updateAttributes(e){let{aggregator:t}=this.state;for(let i in t.setProps({attributes:e}),e)this.onAttributeChange(i);t.update()}draw({shaderModuleProps:e}){let{aggregator:t}=this.state;t.setProps({shaderModuleProps:e}),t.preDraw()}_getAttributeManager(){return new s.A(this.context.device,{id:this.props.id,stats:this.context.stats})}}r.layerName="AggregationLayer";let o=r},39585(e,t,i){i.d(t,{M:()=>a});var s=i(89877);let n=(e,t)=>{let i=0;for(let s of e)i+=t(s);return i},r={COUNT:e=>e.length,SUM:n,MEAN:(e,t)=>0===e.length?NaN:n(e,t)/e.length,MIN:(e,t)=>{let i=1/0;for(let s of e){let e=t(s);e<i&&(i=e)}return i},MAX:(e,t)=>{let i=-1/0;for(let s of e){let e=t(s);e>i&&(i=e)}return i}};function o(e,t,i){let s={};for(let i of e.sources||[]){let e=t[i];if(e)s[i]=function(e){let t,i=e.value,{offset:s=0,stride:n,size:r}=e.getAccessor(),o=i.BYTES_PER_ELEMENT,a=s/o,l=n?n/o:r;return 1===r?e.isConstant?()=>i[0]:e=>i[a+l*e]:e.isConstant?(t=Array.from(i),()=>t):(t=Array(r),e=>{let s=a+l*e;for(let e=0;e<r;e++)t[e]=i[s+e];return t})}(e);else throw Error(`Cannot find attribute ${i}`)}let n={};return t=>{for(let e in s)n[e]=s[e](t);return e.getValue(n,t,i)}}class a{constructor(e){this.bins=[],this.binIds=null,this.results=[],this.dimensions=e.dimensions,this.channelCount=e.getValue.length,this.props={...e,binOptions:{},pointCount:0,operations:[],customOperations:[],attributes:{}},this.needsUpdate=!0,this.setProps(e)}destroy(){}get binCount(){return this.bins.length}setProps(e){let t=this.props;if(e.binOptions&&!(0,s.b)(e.binOptions,t.binOptions,2)&&this.setNeedsUpdate(),e.operations)for(let i=0;i<this.channelCount;i++)e.operations[i]!==t.operations[i]&&this.setNeedsUpdate(i);if(e.customOperations)for(let i=0;i<this.channelCount;i++)!!e.customOperations[i]!=!!t.customOperations[i]&&this.setNeedsUpdate(i);void 0!==e.pointCount&&e.pointCount!==t.pointCount&&this.setNeedsUpdate(),e.attributes&&(e.attributes={...t.attributes,...e.attributes}),Object.assign(this.props,e)}setNeedsUpdate(e){void 0===e?this.needsUpdate=!0:!0!==this.needsUpdate&&(this.needsUpdate=this.needsUpdate||[],this.needsUpdate[e]=!0)}update(){if(!0===this.needsUpdate){this.bins=function({pointCount:e,getBinId:t}){let i=new Map;for(let s=0;s<e;s++){let e=t(s);if(null===e)continue;let n=i.get(String(e));n?n.points.push(s):(n={id:e,index:i.size,points:[s]},i.set(String(e),n))}return Array.from(i.values())}({pointCount:this.props.pointCount,getBinId:o(this.props.getBin,this.props.attributes,this.props.binOptions)});let e=function({bins:e,dimensions:t,target:i}){let s=e.length*t;(!i||i.length<s)&&(i=new Float32Array(s));for(let s=0;s<e.length;s++){let{id:n}=e[s];Array.isArray(n)?i.set(n,s*t):i[s]=n}return i}({bins:this.bins,dimensions:this.dimensions,target:this.binIds?.value});this.binIds={value:e,type:"float32",size:this.dimensions}}for(let e=0;e<this.channelCount;e++)if(!0===this.needsUpdate||this.needsUpdate[e]){let t=this.props.customOperations[e]||r[this.props.operations[e]],{value:i,domain:s}=function({bins:e,getValue:t,operation:i,target:s}){(!s||s.length<e.length)&&(s=new Float32Array(e.length));let n=1/0,r=-1/0;for(let o=0;o<e.length;o++){let{points:a}=e[o];s[o]=i(a,t),s[o]<n&&(n=s[o]),s[o]>r&&(r=s[o])}return{value:s,domain:[n,r]}}({bins:this.bins,getValue:o(this.props.getValue[e],this.props.attributes,void 0),operation:t,target:this.results[e]?.value});this.results[e]={value:i,domain:s,type:"float32",size:1},this.props.onUpdate?.({channel:e})}this.needsUpdate=!1}preDraw(){}getBins(){return this.binIds}getResult(e){return this.results[e]}getResultDomain(e){return this.results[e]?.domain??[1/0,-1/0]}getBin(e){let t=this.bins[e];if(!t)return null;let i=Array(this.channelCount);for(let t=0;t<i.length;t++){let s=this.results[t];i[t]=s?.value[e]}return{id:t.id,value:i,count:t.points.length,pointIndices:t.points}}}},2379(e,t,i){i.d(t,{V:()=>p});var s=i(65771);function n(e,t,i){return e.createFramebuffer({width:t,height:i,colorAttachments:[e.createTexture({width:t,height:i,format:"rgba32float",sampler:{minFilter:"nearest",magFilter:"nearest"}})]})}let r={name:"binSorter",vs:`\
uniform binSorterUniforms {
  ivec4 binIdRange;
  ivec2 targetSize;
} binSorter;
`,uniformTypes:{binIdRange:"vec4<i32>",targetSize:"vec2<i32>"}},o=[1,2,4,8],a={SUM:0,MEAN:0,MIN:0,MAX:0,COUNT:0};class l{constructor(e,t){this.binsFBO=null,this.device=e,this.model=function(e,t){let i=t.vs;2===t.dimensions&&(i+=`
void getBin(out int binId) {
  ivec2 binId2;
  getBin(binId2);
  if (binId2.x < binSorter.binIdRange.x || binId2.x >= binSorter.binIdRange.y) {
    binId = -1;
  } else {
    binId = (binId2.y - binSorter.binIdRange.z) * (binSorter.binIdRange.y - binSorter.binIdRange.x) + binId2.x;
  }
}
`);let n=`\
#version 300 es
#define SHADER_NAME gpu-aggregation-sort-bins-vertex

${i}

out vec3 v_Value;

void main() {
  int binIndex;
  getBin(binIndex);
  binIndex = binIndex - binSorter.binIdRange.x;
  if (binIndex < 0) {
    gl_Position = vec4(0.);
    return;
  }
  int row = binIndex / binSorter.targetSize.x;
  int col = binIndex - row * binSorter.targetSize.x;
  vec2 position = (vec2(col, row) + 0.5) / vec2(binSorter.targetSize) * 2.0 - 1.0;
  gl_Position = vec4(position, 0.0, 1.0);
  gl_PointSize = 1.0;

#if NUM_CHANNELS == 3
  getValue(v_Value);
#elif NUM_CHANNELS == 2
  getValue(v_Value.xy);
#else
  getValue(v_Value.x);
#endif
}
`,o=`\
#version 300 es
#define SHADER_NAME gpu-aggregation-sort-bins-fragment

precision highp float;

in vec3 v_Value;
out vec4 fragColor;

void main() {
  fragColor.xyz = v_Value;

  #ifdef MODULE_GEOMETRY
  geometry.uv = vec2(0.);
  DECKGL_FILTER_COLOR(fragColor, geometry);
  #endif

  fragColor.w = 1.0;
}
`;return new s.K(e,{bufferLayout:t.bufferLayout,modules:[...t.modules||[],r],defines:{...t.defines,NON_INSTANCED_MODEL:1,NUM_CHANNELS:t.channelCount},isInstanced:!1,vs:n,fs:o,topology:"point-list",disableWarnings:!0})}(e,t)}get texture(){return this.binsFBO?this.binsFBO.colorAttachments[0].texture:null}destroy(){this.model.destroy(),this.binsFBO?.colorAttachments[0].texture.destroy(),this.binsFBO?.destroy()}getBinValues(e){if(!this.binsFBO)return null;let t=Math.floor(e/1024);return new Float32Array(this.device.readPixelsToArrayWebGL(this.binsFBO,{sourceX:e%1024,sourceY:t,sourceWidth:1,sourceHeight:1}).buffer)}setDimensions(e,t){let i=Math.ceil(e/1024);this.binsFBO?this.binsFBO.height<i&&this.binsFBO.resize({width:1024,height:i}):this.binsFBO=n(this.device,1024,i);let s={binIdRange:[t[0][0],t[0][1],t[1]?.[0]||0,t[1]?.[1]||0],targetSize:[this.binsFBO.width,this.binsFBO.height]};this.model.shaderInputs.setProps({binSorter:s})}setModelProps(e){let t=this.model;e.attributes&&t.setAttributes(e.attributes),e.constantAttributes&&t.setConstantAttributes(e.constantAttributes),void 0!==e.vertexCount&&t.setVertexCount(e.vertexCount),e.shaderModuleProps&&t.shaderInputs.setProps(e.shaderModuleProps)}update(e){if(!this.binsFBO)return;let t=function(e){let t={...a};for(let i=0;i<e.length;i++){let s=e[i];s&&(t[s]+=o[i])}return t}(e);this._updateBins("SUM",t.SUM+t.MEAN),this._updateBins("MIN",t.MIN),this._updateBins("MAX",t.MAX)}_updateBins(e,t){if(0===t)return;t|=o[3];let i=this.model,s=this.binsFBO,n="MAX"===e?-3e38:3e38*("MIN"===e),r=this.device.beginRenderPass({id:`gpu-aggregation-${e}`,framebuffer:s,parameters:{viewport:[0,0,s.width,s.height],colorMask:t},clearColor:[n,n,n,0],clearDepth:!1,clearStencil:!1});i.setParameters({blend:!0,blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one",blendColorOperation:"MAX"===e?"max":"MIN"===e?"min":"add",blendAlphaOperation:"add"}),i.draw(r),r.end()}}var u=i(97876);let h={name:"aggregatorTransform",vs:`\
uniform aggregatorTransformUniforms {
  ivec4 binIdRange;
  bvec3 isCount;
  bvec3 isMean;
  float naN;
} aggregatorTransform;
`,uniformTypes:{binIdRange:"vec4<i32>",isCount:"vec3<f32>",isMean:"vec3<f32>"}};class d{constructor(e,t){this.binBuffer=null,this.valueBuffer=null,this._domains=null,this.device=e,this.channelCount=t.channelCount,this.transform=function(e,t){let i=`\
#version 300 es
#define SHADER_NAME gpu-aggregation-domain-vertex

uniform sampler2D bins;

#if NUM_DIMS == 1
out float binIds;
#else
out vec2 binIds;
#endif

#if NUM_CHANNELS == 1
flat out float values;
#elif NUM_CHANNELS == 2
flat out vec2 values;
#else
flat out vec3 values;
#endif

const float NAN = intBitsToFloat(-1);

void main() {
  int row = gl_VertexID / SAMPLER_WIDTH;
  int col = gl_VertexID - row * SAMPLER_WIDTH;
  vec4 weights = texelFetch(bins, ivec2(col, row), 0);
  vec3 value3 = mix(
    mix(weights.rgb, vec3(weights.a), aggregatorTransform.isCount),
    weights.rgb / max(weights.a, 1.0),
    aggregatorTransform.isMean
  );
  if (weights.a == 0.0) {
    value3 = vec3(NAN);
  }

#if NUM_DIMS == 1
  binIds = float(gl_VertexID + aggregatorTransform.binIdRange.x);
#else
  int y = gl_VertexID / (aggregatorTransform.binIdRange.y - aggregatorTransform.binIdRange.x);
  int x = gl_VertexID - y * (aggregatorTransform.binIdRange.y - aggregatorTransform.binIdRange.x);
  binIds.y = float(y + aggregatorTransform.binIdRange.z);
  binIds.x = float(x + aggregatorTransform.binIdRange.x);
#endif

#if NUM_CHANNELS == 3
  values = value3;
#elif NUM_CHANNELS == 2
  values = value3.xy;
#else
  values = value3.x;
#endif

  gl_Position = vec4(0., 0., 0., 1.);
  // This model renders into a 2x1 texture to obtain min and max simultaneously.
  // See comments in fragment shader
  gl_PointSize = 2.0;
}
`,s=`\
#version 300 es
#define SHADER_NAME gpu-aggregation-domain-fragment

precision highp float;

#if NUM_CHANNELS == 1
flat in float values;
#elif NUM_CHANNELS == 2
flat in vec2 values;
#else
flat in vec3 values;
#endif

out vec4 fragColor;

void main() {
  vec3 value3;
#if NUM_CHANNELS == 3
  value3 = values;
#elif NUM_CHANNELS == 2
  value3.xy = values;
#else
  value3.x = values;
#endif
  if (isnan(value3.x)) discard;
  // This shader renders into a 2x1 texture with blending=max
  // The left pixel yields the max value of each channel
  // The right pixel yields the min value of each channel
  if (gl_FragCoord.x < 1.0) {
    fragColor = vec4(value3, 1.0);
  } else {
    fragColor = vec4(-value3, 1.0);
  }
}
`;return new u.p(e,{vs:i,fs:s,topology:"point-list",modules:[h],parameters:{blend:!0,blendColorSrcFactor:"one",blendColorDstFactor:"one",blendColorOperation:"max",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one",blendAlphaOperation:"max"},defines:{NUM_DIMS:t.dimensions,NUM_CHANNELS:t.channelCount,SAMPLER_WIDTH:1024},varyings:["binIds","values"],disableWarnings:!0})}(e,t),this.domainFBO=n(e,2,1)}destroy(){this.transform.destroy(),this.binBuffer?.destroy(),this.valueBuffer?.destroy(),this.domainFBO.colorAttachments[0].texture.destroy(),this.domainFBO.destroy()}get domains(){if(!this._domains){let e=new Float32Array(this.device.readPixelsToArrayWebGL(this.domainFBO).buffer);this._domains=[[-e[4],e[0]],[-e[5],e[1]],[-e[6],e[2]]].slice(0,this.channelCount)}return this._domains}setDimensions(e,t){let{model:i,transformFeedback:s}=this.transform;i.setVertexCount(e);let n={binIdRange:[t[0][0],t[0][1],t[1]?.[0]||0,t[1]?.[1]||0]};i.shaderInputs.setProps({aggregatorTransform:n});let r=e*t.length*4;(!this.binBuffer||this.binBuffer.byteLength<r)&&(this.binBuffer?.destroy(),this.binBuffer=this.device.createBuffer({byteLength:r}),s.setBuffer("binIds",this.binBuffer));let o=e*this.channelCount*4;(!this.valueBuffer||this.valueBuffer.byteLength<o)&&(this.valueBuffer?.destroy(),this.valueBuffer=this.device.createBuffer({byteLength:o}),s.setBuffer("values",this.valueBuffer))}update(e,t){if(!e)return;let i=this.transform,s=this.domainFBO,n=[0,1,2].map(e=>+("COUNT"===t[e])),r=[0,1,2].map(e=>+("MEAN"===t[e]));i.model.shaderInputs.setProps({aggregatorTransform:{isCount:n,isMean:r,bins:e}}),i.run({id:"gpu-aggregation-domain",framebuffer:s,parameters:{viewport:[0,0,2,1]},clearColor:[-3e38,-3e38,-3e38,0],clearDepth:!1,clearStencil:!1}),this._domains=null}}var g=i(89877),f=i(48186);class p{static isSupported(e){return e.features.has("float32-renderable-webgl")&&e.features.has("texture-blend-float-webgl")}constructor(e,t){this.binCount=0,this.binIds=null,this.results=[],this.device=e,this.dimensions=t.dimensions,this.channelCount=t.channelCount,this.props={...t,pointCount:0,binIdRange:[[0,0]],operations:[],attributes:{},binOptions:{}},this.needsUpdate=Array(this.channelCount).fill(!0),this.binSorter=new l(e,t),this.aggregationTransform=new d(e,t),this.setProps(t)}getBins(){let e=this.aggregationTransform.binBuffer;return e?(this.binIds?.buffer!==e&&(this.binIds={buffer:e,type:"float32",size:this.dimensions}),this.binIds):null}getResult(e){let t=this.aggregationTransform.valueBuffer;return!t||e>=this.channelCount?null:(this.results[e]?.buffer!==t&&(this.results[e]={buffer:t,type:"float32",size:1,stride:4*this.channelCount,offset:4*e}),this.results[e])}getResultDomain(e){return this.aggregationTransform.domains[e]}getBin(e){let t;if(e<0||e>=this.binCount)return null;let{binIdRange:i}=this.props;if(1===this.dimensions)t=[e+i[0][0]];else{let[[s,n],[r]]=i,o=n-s;t=[e%o+s,Math.floor(e/o)+r]}let s=this.binSorter.getBinValues(e);if(!s)return null;let n=s[3],r=[];for(let e=0;e<this.channelCount;e++){let t=this.props.operations[e];"COUNT"===t?r[e]=n:0===n?r[e]=NaN:r[e]="MEAN"===t?s[e]/n:s[e]}return{id:t,value:r,count:n}}destroy(){this.binSorter.destroy(),this.aggregationTransform.destroy()}setProps(e){let t=this.props;if("binIdRange"in e&&!(0,g.b)(e.binIdRange,t.binIdRange,2)){let t=e.binIdRange;if(f.A.assert(t.length===this.dimensions),1===this.dimensions){let[[e,i]]=t;this.binCount=i-e}else{let[[e,i],[s,n]]=t;this.binCount=(i-e)*(n-s)}this.binSorter.setDimensions(this.binCount,t),this.aggregationTransform.setDimensions(this.binCount,t),this.setNeedsUpdate()}if(e.operations)for(let i=0;i<this.channelCount;i++)e.operations[i]!==t.operations[i]&&this.setNeedsUpdate(i);if(void 0!==e.pointCount&&e.pointCount!==t.pointCount&&(this.binSorter.setModelProps({vertexCount:e.pointCount}),this.setNeedsUpdate()),e.binOptions&&((0,g.b)(e.binOptions,t.binOptions,2)||this.setNeedsUpdate(),this.binSorter.model.shaderInputs.setProps({binOptions:e.binOptions})),e.attributes){let t={},i={};for(let s of Object.values(e.attributes))for(let[e,n]of Object.entries(s.getValue()))ArrayBuffer.isView(n)?i[e]=n:n&&(t[e]=n);this.binSorter.setModelProps({attributes:t,constantAttributes:i})}e.shaderModuleProps&&this.binSorter.setModelProps({shaderModuleProps:e.shaderModuleProps}),Object.assign(this.props,e)}setNeedsUpdate(e){void 0===e?this.needsUpdate.fill(!0):this.needsUpdate[e]=!0}update(){}preDraw(){if(!this.needsUpdate.some(Boolean))return;let{operations:e}=this.props,t=this.needsUpdate.map((t,i)=>t?e[i]:null);this.binSorter.update(t),this.aggregationTransform.update(this.binSorter.texture,e);for(let e=0;e<this.channelCount;e++)this.needsUpdate[e]&&(this.needsUpdate[e]=!1,this.props.onUpdate?.({channel:e}))}}}}]);