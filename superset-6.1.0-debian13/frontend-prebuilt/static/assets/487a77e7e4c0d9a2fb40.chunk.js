"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6457],{16457(e,t,i){i.d(t,{A:()=>E});let r=new Float32Array(12);function s(e,t=2){let i=0;for(let s of e)for(let e=0;e<t;e++)r[i++]=s[e]||0;return r}var o=i(74951),a=i(65771),n=i(55025);class u{device;model;sampler;currentIndex=0;samplerTextureMap=null;bindings=[];resources={};constructor(e,t){this.device=e,this.sampler=e.createSampler({addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",minFilter:"nearest",magFilter:"nearest",mipmapFilter:"nearest"}),this.model=new a.K(this.device,{id:t.id||(0,n.L)("texture-transform-model"),fs:t.fs||(0,o.Wk)({input:t.targetTextureVarying,inputChannels:t.targetTextureChannels,output:"transform_output"}),vertexCount:t.vertexCount,...t}),this._initialize(t),Object.seal(this)}destroy(){for(let e of(this.model.destroy(),this.bindings))e.framebuffer?.destroy()}delete(){this.destroy()}run(e){let{framebuffer:t}=this.bindings[this.currentIndex],i=this.device.beginRenderPass({framebuffer:t,...e});this.model.draw(i),i.end(),this.device.submit()}getTargetTexture(){let{targetTexture:e}=this.bindings[this.currentIndex];return e}getFramebuffer(){return this.bindings[this.currentIndex].framebuffer}_initialize(e){this._updateBindings(e)}_updateBindings(e){this.bindings[this.currentIndex]=this._updateBinding(this.bindings[this.currentIndex],e)}_updateBinding(e,{sourceBuffers:t,sourceTextures:i,targetTexture:r}){if(e||(e={sourceBuffers:{},sourceTextures:{},targetTexture:null}),Object.assign(e.sourceTextures,i),Object.assign(e.sourceBuffers,t),r){e.targetTexture=r;let{width:t,height:i}=r;e.framebuffer&&e.framebuffer.destroy(),e.framebuffer=this.device.createFramebuffer({id:"transform-framebuffer",width:t,height:i,colorAttachments:[r]}),e.framebuffer.resize({width:t,height:i})}return e}_setSourceTextureParameters(){let e=this.currentIndex,{sourceTextures:t}=this.bindings[e];for(let e in t)t[e].sampler=this.sampler}}var l=i(38706),d=i(59),h=i(10421),g=i(48186),p=i(15473);let m=`\
#version 300 es
#define SHADER_NAME heatp-map-layer-vertex-shader
uniform sampler2D maxTexture;
in vec3 positions;
in vec2 texCoords;
out vec2 vTexCoords;
out float vIntensityMin;
out float vIntensityMax;
void main(void) {
gl_Position = project_position_to_clipspace(positions, vec3(0.0), vec3(0.0));
vTexCoords = texCoords;
vec4 maxTexture = texture(maxTexture, vec2(0.5));
float maxValue = triangle.aggregationMode < 0.5 ? maxTexture.r : maxTexture.g;
float minValue = maxValue * triangle.threshold;
if (triangle.colorDomain[1] > 0.) {
maxValue = triangle.colorDomain[1];
minValue = triangle.colorDomain[0];
}
vIntensityMax = triangle.intensity / maxValue;
vIntensityMin = triangle.intensity / minValue;
}
`,c=`\
#version 300 es
#define SHADER_NAME triangle-layer-fragment-shader
precision highp float;
uniform sampler2D weightsTexture;
uniform sampler2D colorTexture;
in vec2 vTexCoords;
in float vIntensityMin;
in float vIntensityMax;
out vec4 fragColor;
vec4 getLinearColor(float value) {
float factor = clamp(value * vIntensityMax, 0., 1.);
vec4 color = texture(colorTexture, vec2(factor, 0.5));
color.a *= min(value * vIntensityMin, 1.0);
return color;
}
void main(void) {
vec4 weights = texture(weightsTexture, vTexCoords);
float weight = weights.r;
if (triangle.aggregationMode > 0.5) {
weight /= max(1.0, weights.a);
}
if (weight <= 0.) {
discard;
}
vec4 linearColor = getLinearColor(weight);
linearColor.a *= layer.opacity;
fragColor = linearColor;
}
`,x=`\
uniform triangleUniforms {
  float aggregationMode;
  vec2 colorDomain;
  float intensity;
  float threshold;
} triangle;
`,f={name:"triangle",vs:x,fs:x,uniformTypes:{aggregationMode:"f32",colorDomain:"vec2<f32>",intensity:"f32",threshold:"f32"}};class v extends p.A{getShaders(){return super.getShaders({vs:m,fs:c,modules:[l.A,f]})}initializeState({device:e}){this.setState({model:this._getModel(e)})}_getModel(e){let{vertexCount:t,data:i}=this.props;return new a.K(e,{...this.getShaders(),id:this.props.id,attributes:i.attributes,bufferLayout:[{name:"positions",format:"float32x3"},{name:"texCoords",format:"float32x2"}],topology:"triangle-strip",vertexCount:t})}draw(){let{model:e}=this.state,{aggregationMode:t,colorDomain:i,intensity:r,threshold:s,colorTexture:o,maxTexture:a,weightsTexture:n}=this.props;e.shaderInputs.setProps({triangle:{aggregationMode:t,colorDomain:i,intensity:r,threshold:s,colorTexture:o,maxTexture:a,weightsTexture:n}}),e.draw(this.context.renderPass)}}v.layerName="TriangleLayer";var y=i(71677),T=i(1903);class b extends y.A{initializeAggregationLayer(e){super.initializeState(this.context),this.setState({ignoreProps:function(e,t){let i={};for(let r in e)t.includes(r)||(i[r]=e[r]);return i}(this.constructor._propTypes,e.data.props),dimensions:e})}updateState(e){super.updateState(e);let{changeFlags:t}=e;if(t.extensionsChanged){let e=this.getShaders({});e&&e.defines&&(e.defines.NON_INSTANCED_MODEL=1),this.updateShaders(e)}this._updateAttributes()}updateAttributes(e){this.setState({changedAttributes:e})}getAttributes(){return this.getAttributeManager().getAttributes()}getModuleSettings(){let{viewport:e,mousePosition:t,device:i}=this.context;return Object.assign(Object.create(this.props),{viewport:e,mousePosition:t,picking:{isActive:0},devicePixelRatio:i.canvasContext.cssToDeviceRatio()})}updateShaders(e){}isAggregationDirty(e,t={}){let{props:i,oldProps:r,changeFlags:s}=e,{compareAll:o=!1,dimension:a}=t,{ignoreProps:n}=this.state,{props:u,accessors:l=[]}=a,{updateTriggersChanged:d}=s;if(s.dataChanged)return!0;if(d){if(d.all)return!0;for(let e of l)if(d[e])return!0}if(o)return!!s.extensionsChanged||(0,T.Me)({oldProps:r,newProps:i,ignoreProps:n,propTypes:this.constructor._propTypes});for(let e of u)if(i[e]!==r[e])return!0;return!1}isAttributeChanged(e){let{changedAttributes:t}=this.state;return e?t&&void 0!==t[e]:!function(e){let t=!0;for(let i in e){t=!1;break}return t}(t)}_getAttributeManager(){return new h.A(this.context.device,{id:this.props.id,stats:this.context.stats})}}b.layerName="AggregationLayer";let w=b;var _=i(14063);let S=`\
#version 300 es
in vec3 positions;
in vec3 positions64Low;
in float weights;
out vec4 weightsTexture;
void main()
{
weightsTexture = vec4(weights * weight.weightsScale, 0., 0., 1.);
float radiusTexels = project_pixel_size(weight.radiusPixels) * weight.textureWidth / (weight.commonBounds.z - weight.commonBounds.x);
gl_PointSize = radiusTexels * 2.;
vec3 commonPosition = project_position(positions, positions64Low);
gl_Position.xy = (commonPosition.xy - weight.commonBounds.xy) / (weight.commonBounds.zw - weight.commonBounds.xy) ;
gl_Position.xy = (gl_Position.xy * 2.) - (1.);
gl_Position.w = 1.0;
}
`,C=`\
#version 300 es
in vec4 weightsTexture;
out vec4 fragColor;
float gaussianKDE(float u){
return pow(2.71828, -u*u/0.05555)/(1.77245385*0.166666);
}
void main()
{
float dist = length(gl_PointCoord - vec2(0.5, 0.5));
if (dist > 0.5) {
discard;
}
fragColor = weightsTexture * gaussianKDE(2. * dist);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,M=`\
#version 300 es
uniform sampler2D inTexture;
out vec4 outTexture;
void main()
{
int yIndex = gl_VertexID / int(maxWeight.textureSize);
int xIndex = gl_VertexID - (yIndex * int(maxWeight.textureSize));
vec2 uv = (0.5 + vec2(float(xIndex), float(yIndex))) / maxWeight.textureSize;
outTexture = texture(inTexture, uv);
gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
gl_PointSize = 1.0;
}
`,A=`\
#version 300 es
in vec4 outTexture;
out vec4 fragColor;
void main() {
fragColor = outTexture;
fragColor.g = outTexture.r / max(1.0, outTexture.a);
}
`,P={name:"weight",vs:`\
uniform weightUniforms {
  vec4 commonBounds;
  float radiusPixels;
  float textureWidth;
  float weightsScale;
} weight;
`,uniformTypes:{commonBounds:"vec4<f32>",radiusPixels:"f32",textureWidth:"f32",weightsScale:"f32"}},D={name:"maxWeight",vs:`\
uniform maxWeightUniforms {
  float textureSize;
} maxWeight;
`,uniformTypes:{textureSize:"f32"}},W={format:"rgba8unorm",dimension:"2d",width:1,height:1,sampler:{minFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}},B=[0,0],L={SUM:0,MEAN:1},z={getPosition:{type:"accessor",value:e=>e.position},getWeight:{type:"accessor",value:1},intensity:{type:"number",min:0,value:1},radiusPixels:{type:"number",min:1,max:100,value:50},colorRange:_.QO,threshold:{type:"number",min:0,max:1,value:.05},colorDomain:{type:"array",value:null,optional:!0},aggregation:"SUM",weightsTextureSize:{type:"number",min:128,max:2048,value:2048},debounceTimeout:{type:"number",min:0,max:1e3,value:500}},I=["float32-renderable-webgl","texture-blend-float-webgl"],F={data:{props:["radiusPixels"]}};class j extends w{getShaders(e){let t=[l.A];return e.modules&&(t=[...t,...e.modules]),super.getShaders({...e,modules:t})}initializeState(){super.initializeAggregationLayer(F),this.setState({colorDomain:B}),this._setupTextureParams(),this._setupAttributes(),this._setupResources()}shouldUpdateState({changeFlags:e}){return e.somethingChanged}updateState(e){super.updateState(e),this._updateHeatmapState(e)}_updateHeatmapState(e){let{props:t,oldProps:i}=e,r=this._getChangeFlags(e);if((r.dataChanged||r.viewportChanged)&&(r.boundsChanged=this._updateBounds(r.dataChanged),this._updateTextureRenderingBounds()),r.dataChanged||r.boundsChanged){if(clearTimeout(this.state.updateTimer),this.setState({isWeightMapDirty:!0}),r.dataChanged){let e=this.getShaders({vs:S,fs:C});this._createWeightsTransform(e)}}else r.viewportZoomChanged&&this._debouncedUpdateWeightmap();t.colorRange!==i.colorRange&&this._updateColorTexture(e),this.state.isWeightMapDirty&&this._updateWeightmap(),this.setState({zoom:e.context.viewport.zoom})}renderLayers(){let{weightsTexture:e,triPositionBuffer:t,triTexCoordBuffer:i,maxWeightsTexture:r,colorTexture:s,colorDomain:o}=this.state,{updateTriggers:a,intensity:n,threshold:u,aggregation:l}=this.props;return new(this.getSubLayerClass("triangle",v))(this.getSubLayerProps({id:"triangle-layer",updateTriggers:a}),{coordinateSystem:d.rf.DEFAULT,data:{attributes:{positions:t,texCoords:i}},vertexCount:4,maxTexture:r,colorTexture:s,aggregationMode:L[l]||0,weightsTexture:e,intensity:n,threshold:u,colorDomain:o})}finalizeState(e){super.finalizeState(e);let{weightsTransform:t,weightsTexture:i,maxWeightTransform:r,maxWeightsTexture:s,triPositionBuffer:o,triTexCoordBuffer:a,colorTexture:n,updateTimer:u}=this.state;t?.destroy(),i?.destroy(),r?.destroy(),s?.destroy(),o?.destroy(),a?.destroy(),n?.destroy(),u&&clearTimeout(u)}_getAttributeManager(){return new h.A(this.context.device,{id:this.props.id,stats:this.context.stats})}_getChangeFlags(e){let t={},{dimensions:i}=this.state;t.dataChanged=this.isAttributeChanged()&&"attribute changed"||this.isAggregationDirty(e,{compareAll:!0,dimension:i.data})&&"aggregation is dirty",t.viewportChanged=e.changeFlags.viewportChanged;let{zoom:r}=this.state;return e.context.viewport&&e.context.viewport.zoom===r||(t.viewportZoomChanged=!0),t}_createTextures(){let{textureSize:e,format:t}=this.state;this.setState({weightsTexture:this.context.device.createTexture({...W,width:e,height:e,format:t}),maxWeightsTexture:this.context.device.createTexture({...W,width:1,height:1,format:t})})}_setupAttributes(){this.getAttributeManager().add({positions:{size:3,type:"float64",accessor:"getPosition"},weights:{size:1,accessor:"getWeight"}}),this.setState({positionAttributeName:"positions"})}_setupTextureParams(){let{device:e}=this.context,{weightsTextureSize:t}=this.props,i=Math.min(t,e.limits.maxTextureDimension2D),r=I.every(t=>e.features.has(t));this.setState({textureSize:i,format:r?"rgba32float":"rgba8unorm",weightsScale:r?1:1/255}),r||g.A.warn(`HeatmapLayer: ${this.id} rendering to float texture not supported, falling back to low precision format`)()}_createWeightsTransform(e){let{weightsTransform:t}=this.state,{weightsTexture:i}=this.state,r=this.getAttributeManager();t?.destroy(),t=new u(this.context.device,{id:`${this.id}-weights-transform`,bufferLayout:r.getBufferLayouts(),vertexCount:1,targetTexture:i,parameters:{depthWriteEnabled:!1,blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one"},topology:"point-list",...e,modules:[...e.modules,P]}),this.setState({weightsTransform:t})}_setupResources(){this._createTextures();let{device:e}=this.context,{textureSize:t,weightsTexture:i,maxWeightsTexture:r}=this.state,s=this.getShaders({vs:S,fs:C});this._createWeightsTransform(s);let o=this.getShaders({vs:M,fs:A,modules:[D]}),a=new u(e,{id:`${this.id}-max-weights-transform`,targetTexture:r,...o,vertexCount:t*t,topology:"point-list",parameters:{depthWriteEnabled:!1,blendColorOperation:"max",blendAlphaOperation:"max",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one"}});a.model.shaderInputs.setProps({maxWeight:{inTexture:i,textureSize:t}}),this.setState({weightsTexture:i,maxWeightsTexture:r,maxWeightTransform:a,zoom:null,triPositionBuffer:e.createBuffer({byteLength:48}),triTexCoordBuffer:e.createBuffer({byteLength:48})})}updateShaders(e){this._createWeightsTransform({vs:S,fs:C,...e})}_updateMaxWeightValue(){let{maxWeightTransform:e}=this.state;e.run({parameters:{viewport:[0,0,1,1]},clearColor:[0,0,0,0]})}_updateBounds(e=!1){var t;let i,r,s,o,{viewport:a}=this.context,n=[a.unproject([0,0]),a.unproject([a.width,0]),a.unproject([0,a.height]),a.unproject([a.width,a.height])].map(e=>e.map(Math.fround)),u=(i=n.map(e=>e[0]),r=n.map(e=>e[1]),s=Math.min.apply(null,i),o=Math.max.apply(null,i),[s,Math.min.apply(null,r),o,Math.max.apply(null,r)]),l={visibleWorldBounds:u,viewportCorners:n},h=!1;if(e||!this.state.worldBounds||(t=this.state.worldBounds,(!(u[0]>=t[0])||!(u[2]<=t[2])||!(u[1]>=t[1])||!(u[3]<=t[3]))&&1)){let e=this._worldToCommonBounds(u),t=this._commonToWorldBounds(e);this.props.coordinateSystem===d.rf.LNGLAT&&(t[1]=Math.max(t[1],-85.051129),t[3]=Math.min(t[3],85.051129),t[0]=Math.max(t[0],-360),t[2]=Math.min(t[2],360));let i=this._worldToCommonBounds(t);l.worldBounds=t,l.normalizedCommonBounds=i,h=!0}return this.setState(l),h}_updateTextureRenderingBounds(){let{triPositionBuffer:e,triTexCoordBuffer:t,normalizedCommonBounds:i,viewportCorners:r}=this.state,{viewport:o}=this.context;e.write(s(r,3));let a=r.map(e=>(function(e,t){let[i,r,s,o]=t;return[(e[0]-i)/(s-i),(e[1]-r)/(o-r)]})(o.projectPosition(e),i));t.write(s(a,2))}_updateColorTexture(e){let{colorRange:t}=e.props,{colorTexture:i}=this.state,r=(0,_.Y5)(t,!1,Uint8Array);i?.destroy(),i=this.context.device.createTexture({...W,data:r,width:t.length,height:1}),this.setState({colorTexture:i})}_updateWeightmap(){let{radiusPixels:e,colorDomain:t,aggregation:i}=this.props,{worldBounds:r,textureSize:s,weightsScale:o,weightsTexture:a}=this.state,n=this.state.weightsTransform;this.state.isWeightMapDirty=!1;let u=this._worldToCommonBounds(r,{useLayerCoordinateSystem:!0});if(t&&"SUM"===i){let{viewport:e}=this.context,i=e.distanceScales.metersPerUnit[2]*(u[2]-u[0])/s;this.state.colorDomain=t.map(e=>e*i*o)}else this.state.colorDomain=t||B;let l=this.getAttributeManager().getAttributes(),d=this.getModuleSettings();this._setModelAttributes(n.model,l),n.model.setVertexCount(this.getNumInstances());let{viewport:h,devicePixelRatio:g,coordinateSystem:p,coordinateOrigin:m}=d,{modelMatrix:c}=this.props;n.model.shaderInputs.setProps({project:{viewport:h,devicePixelRatio:g,modelMatrix:c,coordinateSystem:p,coordinateOrigin:m},weight:{radiusPixels:e,commonBounds:u,textureWidth:s,weightsScale:o,weightsTexture:a}}),n.run({parameters:{viewport:[0,0,s,s]},clearColor:[0,0,0,0]}),this._updateMaxWeightValue()}_debouncedUpdateWeightmap(e=!1){let{updateTimer:t}=this.state,{debounceTimeout:i}=this.props;e?(t=null,this._updateBounds(!0),this._updateTextureRenderingBounds(),this.setState({isWeightMapDirty:!0})):(this.setState({isWeightMapDirty:!1}),clearTimeout(t),t=setTimeout(this._debouncedUpdateWeightmap.bind(this,!0),i)),this.setState({updateTimer:t})}_worldToCommonBounds(e,t={}){let i,r,{useLayerCoordinateSystem:s=!1}=t,[o,a,n,u]=e,{viewport:l}=this.context,{textureSize:h}=this.state,{coordinateSystem:g}=this.props,p=s&&(g===d.rf.LNGLAT_OFFSETS||g===d.rf.METER_OFFSETS),m=p?l.projectPosition(this.props.coordinateOrigin):[0,0],c=2*h/l.scale;return s&&!p?(i=this.projectPosition([o,a,0]),r=this.projectPosition([n,u,0])):(i=l.projectPosition([o,a,0]),r=l.projectPosition([n,u,0])),function(e,t,i){let[r,s,o,a]=e,n=o-r,u=a-s,l=n,d=u;n/u<t/i?l=t/i*u:d=i/t*n,l<t&&(l=t,d=i);let h=(o+r)/2,g=(a+s)/2;return[h-l/2,g-d/2,h+l/2,g+d/2]}([i[0]-m[0],i[1]-m[1],r[0]-m[0],r[1]-m[1]],c,c)}_commonToWorldBounds(e){let[t,i,r,s]=e,{viewport:o}=this.context,a=o.unprojectPosition([t,i]),n=o.unprojectPosition([r,s]);return a.slice(0,2).concat(n.slice(0,2))}}j.layerName="HeatmapLayer",j.defaultProps=z;let E=j}}]);