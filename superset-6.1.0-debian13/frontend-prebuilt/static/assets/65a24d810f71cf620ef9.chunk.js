"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8365],{80715(e,t,o){o.d(t,{c:()=>w,y:()=>S});var a=o(2445),r=o(24002),i=o(2404),s=o.n(i),n=o(36732),l=o(17361),c=o(14230),u=o(92214),g=o(47282),d=o(54967),p=o(5218),f=o(99236),m=o(41567),h=o(74006);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}let{getScale:_}=c;function x(e,t){let o=e.color_picker||{r:0,g:0,b:0,a:1},a=[o.r,o.g,o.b,255*o.a],r=_(e.color_scheme),i={};return e.color_scheme_type===f.wP.color_breakpoints?i=(0,m.BK)(e.color_breakpoints):t.forEach(t=>{if(null!=t.cat_color&&!i.hasOwnProperty(t.cat_color)){let s;s=e.dimension?(0,g.hexToRGB)(r(t.cat_color,e.sliceId),255*o.a):a,i[t.cat_color]={color:s,enabled:!0}}}),i}let P=(0,r.memo)(e=>{let t=(0,r.useRef)(null),o=(0,r.useCallback)(()=>{let t=v({},e.viewport);return e.formData.autozoom&&(t=(0,p.A)(t,{width:e.width,height:e.height,points:e.getPoints(e.payload.data.features||[])})),t.zoom<0&&(t.zoom=0),t},[e]),[i,s]=(0,r.useState)(x(e.formData,e.payload.data.features||[])),[n,c]=(0,r.useState)(e.payload.form_data),[m,P]=(0,r.useState)(o());(0,r.useEffect)(()=>{if(e.payload.form_data!==n){let t=e.payload.data.features||[],a=x(e.formData,t);P(o()),c(e.payload.form_data),s(a)}},[o,e,n]);let y=(0,r.useCallback)(e=>{let{current:o}=t;o&&o.setTooltip(e)},[]),S=(0,r.useCallback)((e,t,o)=>{let a,r=_(t.color_scheme);switch(o){case f.wP.fixed_color:{let o=[(a=t.color_picker||{r:0,g:0,b:0,a:100}).r,a.g,a.b,255*a.a];return e.map(e=>v({},e,{color:o}))}case f.wP.categorical_palette:if(!t.dimension){let o=t.color_picker||{r:0,g:0,b:0,a:100},a=[o.r,o.g,o.b,255*o.a];return e.map(e=>v({},e,{color:a}))}return e.map(e=>v({},e,{color:(0,g.hexToRGB)(r(e.cat_color,t.slice_id))}));case f.wP.color_breakpoints:{let o=t.default_breakpoint_color?[t.default_breakpoint_color.r,t.default_breakpoint_color.g,t.default_breakpoint_color.b,255*t.default_breakpoint_color.a]:[h.DL.r,h.DL.g,h.DL.b,255*h.DL.a];return e.map(e=>{var a;let r=null==(a=t.color_breakpoints)?void 0:a.find(t=>e.metric>=t.minValue&&e.metric<=t.maxValue);if(r){let t=[r.color.r,r.color.g,r.color.b,255*r.color.a];return v({},e,{color:t})}return v({},e,{color:o})})}default:return[]}},[]),w=(0,r.useCallback)(()=>{let{getLayer:t,getHighlightLayer:o,payload:a,formData:r,onAddFilter:s,onContextMenu:n,filterState:l,setDataMask:c,emitCrossFilters:u}=e,g=a.data.features?[...a.data.features]:[],p=r.color_scheme_type;g=S(g,r,p),r.js_data_mutator&&(g=(0,d.A)(r.js_data_mutator)(g)),r.dimension&&(g=g.filter(e=>{var t;return null==(t=i[e.cat_color])?void 0:t.enabled}));let f={formData:r,payload:v({},a,{data:v({},a.data,{features:g})}),onAddFilter:s,setTooltip:y,datasource:e.datasource,onContextMenu:n,filterState:l,setDataMask:c,emitCrossFilters:u},m=t(f);return u&&(null==l?void 0:l.value)&&o?[m,o(f)]:[m]},[S,i,e,y]),b=(0,r.useCallback)(e=>{let t=i[e],o=v({},i,{[e]:v({},t,{enabled:!t.enabled})});Object.values(o).every(e=>!e.enabled)&&Object.values(o).forEach(e=>{e.enabled=!0}),s(o)},[i]),C=(0,r.useCallback)(e=>{let t=v({},i);Object.values(t).forEach(e=>{e.enabled=!1}),t[e].enabled=!0,s(t)},[i]);return(0,a.FD)("div",{style:{position:"relative"},children:[(0,a.Y)(l.S,{ref:t,viewport:m,layers:w(),setControlValue:e.setControlValue,mapStyle:e.formData.mapbox_style,mapboxApiAccessToken:e.mapboxApiKey,width:e.width,height:e.height}),(0,a.Y)(u.A,{forceCategorical:!0,categories:i,format:e.formData.legend_format,position:e.formData.legend_position,showSingleCategory:C,toggleCategory:b})]})});function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function S(e,t,o){return(0,r.memo)(i=>{let c=(0,r.useRef)(),g=(0,n.Z)(i.formData),d=(0,n.Z)(i.filterState),f=(0,n.Z)(i.payload),[h,v]=(0,r.useState)((0,m.BK)(i.formData.color_breakpoints)||[]),[_,x]=(0,r.useState)((()=>{let{width:e,height:o,formData:a}=i;return a.autozoom?(0,p.A)(i.viewport,{width:e,height:o,points:t(i.payload.data.features)}):i.viewport})()),P=(0,r.useCallback)(e=>{let{current:t}=c;t&&(null==t||t.setTooltip(e))},[]),S=(0,r.useCallback)(t=>{let{formData:a,payload:r,onAddFilter:i,filterState:s,setDataMask:n,onContextMenu:l,emitCrossFilters:c}=t,u={formData:a,payload:r,onAddFilter:i,setTooltip:P,setDataMask:n,onContextMenu:l,filterState:s,emitCrossFilters:c},g=e(u);return c&&(null==s?void 0:s.value)&&o?[g,o(u)]:[g]},[P]);(0,r.useEffect)(()=>{v((0,m.BK)(i.formData.color_breakpoints))},[i]);let[w,b]=(0,r.useState)(S(i));(0,r.useEffect)(()=>{let e=y({},g,d,{viewport:null}),t=y({},i.formData,i.filterState,{viewport:null});s()(e,t)&&f===i.payload||b(S(i))},[S,g,d,f,i]);let{formData:C,payload:R,setControlValue:D,height:T,width:L}=i;return(0,a.FD)("div",{style:{position:"relative"},children:[(0,a.Y)(l.S,{ref:c,mapboxApiAccessToken:R.data.mapboxApiKey,viewport:_,layers:w,mapStyle:C.mapbox_style,setControlValue:D,width:L,height:T,onViewportChange:x}),(0,a.Y)(u.A,{forceCategorical:!0,categories:h,format:i.formData.legend_format,position:i.formData.legend_position})]})})}function w(e,t,o){return function(r){let{datasource:i,formData:s,height:n,payload:l,setControlValue:c,viewport:u,width:g,setDataMask:d,filterState:p,onContextMenu:f,emitCrossFilters:m}=r;return(0,a.Y)(P,{datasource:i,formData:s,mapboxApiKey:l.data.mapboxApiKey,setControlValue:c,viewport:u,getLayer:e,getHighlightLayer:o,payload:l,getPoints:t,width:g,height:n,setDataMask:d,onContextMenu:f,filterState:p,emitCrossFilters:m})}}},68365(e,t,o){o.r(t),o.d(t,{default:()=>C,getHighlightLayer:()=>b,getLayer:()=>w,getPoints:()=>S});var a=o(2445),r=o(15473),i=o(38706),s=o(82849),n=o(59),l=o(65771);let c=`\
uniform arcUniforms {
  bool greatCircle;
  bool useShortestPath;
  float numSegments;
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  highp int widthUnits;
} arc;
`,u={name:"arc",vs:c,fs:c,uniformTypes:{greatCircle:"f32",useShortestPath:"f32",numSegments:"f32",widthScale:"f32",widthMinPixels:"f32",widthMaxPixels:"f32",widthUnits:"i32"}},g=`\
#version 300 es
#define SHADER_NAME arc-layer-vertex-shader
in vec4 instanceSourceColors;
in vec4 instanceTargetColors;
in vec3 instanceSourcePositions;
in vec3 instanceSourcePositions64Low;
in vec3 instanceTargetPositions;
in vec3 instanceTargetPositions64Low;
in vec3 instancePickingColors;
in float instanceWidths;
in float instanceHeights;
in float instanceTilts;
out vec4 vColor;
out vec2 uv;
out float isValid;
float paraboloid(float distance, float sourceZ, float targetZ, float ratio) {
float deltaZ = targetZ - sourceZ;
float dh = distance * instanceHeights;
if (dh == 0.0) {
return sourceZ + deltaZ * ratio;
}
float unitZ = deltaZ / dh;
float p2 = unitZ * unitZ + 1.0;
float dir = step(deltaZ, 0.0);
float z0 = mix(sourceZ, targetZ, dir);
float r = mix(ratio, 1.0 - ratio, dir);
return sqrt(r * (p2 - r)) * dh + z0;
}
vec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction, float width) {
vec2 dir_screenspace = normalize(line_clipspace * project.viewportSize);
dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
return dir_screenspace * offset_direction * width / 2.0;
}
float getSegmentRatio(float index) {
return smoothstep(0.0, 1.0, index / (arc.numSegments - 1.0));
}
vec3 interpolateFlat(vec3 source, vec3 target, float segmentRatio) {
float distance = length(source.xy - target.xy);
float z = paraboloid(distance, source.z, target.z, segmentRatio);
float tiltAngle = radians(instanceTilts);
vec2 tiltDirection = normalize(target.xy - source.xy);
vec2 tilt = vec2(-tiltDirection.y, tiltDirection.x) * z * sin(tiltAngle);
return vec3(
mix(source.xy, target.xy, segmentRatio) + tilt,
z * cos(tiltAngle)
);
}
float getAngularDist (vec2 source, vec2 target) {
vec2 sourceRadians = radians(source);
vec2 targetRadians = radians(target);
vec2 sin_half_delta = sin((sourceRadians - targetRadians) / 2.0);
vec2 shd_sq = sin_half_delta * sin_half_delta;
float a = shd_sq.y + cos(sourceRadians.y) * cos(targetRadians.y) * shd_sq.x;
return 2.0 * asin(sqrt(a));
}
vec3 interpolateGreatCircle(vec3 source, vec3 target, vec3 source3D, vec3 target3D, float angularDist, float t) {
vec2 lngLat;
if(abs(angularDist - PI) < 0.001) {
lngLat = (1.0 - t) * source.xy + t * target.xy;
} else {
float a = sin((1.0 - t) * angularDist);
float b = sin(t * angularDist);
vec3 p = source3D.yxz * a + target3D.yxz * b;
lngLat = degrees(vec2(atan(p.y, -p.x), atan(p.z, length(p.xy))));
}
float z = paraboloid(angularDist * EARTH_RADIUS, source.z, target.z, t);
return vec3(lngLat, z);
}
void main(void) {
geometry.worldPosition = instanceSourcePositions;
geometry.worldPositionAlt = instanceTargetPositions;
float segmentIndex = float(gl_VertexID / 2);
float segmentSide = mod(float(gl_VertexID), 2.) == 0. ? -1. : 1.;
float segmentRatio = getSegmentRatio(segmentIndex);
float prevSegmentRatio = getSegmentRatio(max(0.0, segmentIndex - 1.0));
float nextSegmentRatio = getSegmentRatio(min(arc.numSegments - 1.0, segmentIndex + 1.0));
float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));
isValid = 1.0;
uv = vec2(segmentRatio, segmentSide);
geometry.uv = uv;
geometry.pickingColor = instancePickingColors;
vec4 curr;
vec4 next;
vec3 source;
vec3 target;
if ((arc.greatCircle || project.projectionMode == PROJECTION_MODE_GLOBE) && project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
source = project_globe_(vec3(instanceSourcePositions.xy, 0.0));
target = project_globe_(vec3(instanceTargetPositions.xy, 0.0));
float angularDist = getAngularDist(instanceSourcePositions.xy, instanceTargetPositions.xy);
vec3 prevPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, prevSegmentRatio);
vec3 currPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, segmentRatio);
vec3 nextPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, nextSegmentRatio);
if (abs(currPos.x - prevPos.x) > 180.0) {
indexDir = -1.0;
isValid = 0.0;
} else if (abs(currPos.x - nextPos.x) > 180.0) {
indexDir = 1.0;
isValid = 0.0;
}
nextPos = indexDir < 0.0 ? prevPos : nextPos;
nextSegmentRatio = indexDir < 0.0 ? prevSegmentRatio : nextSegmentRatio;
if (isValid == 0.0) {
nextPos.x += nextPos.x > 0.0 ? -360.0 : 360.0;
float t = ((currPos.x > 0.0 ? 180.0 : -180.0) - currPos.x) / (nextPos.x - currPos.x);
currPos = mix(currPos, nextPos, t);
segmentRatio = mix(segmentRatio, nextSegmentRatio, t);
}
vec3 currPos64Low = mix(instanceSourcePositions64Low, instanceTargetPositions64Low, segmentRatio);
vec3 nextPos64Low = mix(instanceSourcePositions64Low, instanceTargetPositions64Low, nextSegmentRatio);
curr = project_position_to_clipspace(currPos, currPos64Low, vec3(0.0), geometry.position);
next = project_position_to_clipspace(nextPos, nextPos64Low, vec3(0.0));
} else {
vec3 source_world = instanceSourcePositions;
vec3 target_world = instanceTargetPositions;
if (arc.useShortestPath) {
source_world.x = mod(source_world.x + 180., 360.0) - 180.;
target_world.x = mod(target_world.x + 180., 360.0) - 180.;
float deltaLng = target_world.x - source_world.x;
if (deltaLng > 180.) target_world.x -= 360.;
if (deltaLng < -180.) source_world.x -= 360.;
}
source = project_position(source_world, instanceSourcePositions64Low);
target = project_position(target_world, instanceTargetPositions64Low);
float antiMeridianX = 0.0;
if (arc.useShortestPath) {
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
antiMeridianX = -(project.coordinateOrigin.x + 180.) / 360. * TILE_SIZE;
}
float thresholdRatio = (antiMeridianX - source.x) / (target.x - source.x);
if (prevSegmentRatio <= thresholdRatio && nextSegmentRatio > thresholdRatio) {
isValid = 0.0;
indexDir = sign(segmentRatio - thresholdRatio);
segmentRatio = thresholdRatio;
}
}
nextSegmentRatio = indexDir < 0.0 ? prevSegmentRatio : nextSegmentRatio;
vec3 currPos = interpolateFlat(source, target, segmentRatio);
vec3 nextPos = interpolateFlat(source, target, nextSegmentRatio);
if (arc.useShortestPath) {
if (nextPos.x < antiMeridianX) {
currPos.x += TILE_SIZE;
nextPos.x += TILE_SIZE;
}
}
curr = project_common_position_to_clipspace(vec4(currPos, 1.0));
next = project_common_position_to_clipspace(vec4(nextPos, 1.0));
geometry.position = vec4(currPos, 1.0);
}
float widthPixels = clamp(
project_size_to_pixel(instanceWidths * arc.widthScale, arc.widthUnits),
arc.widthMinPixels, arc.widthMaxPixels
);
vec3 offset = vec3(
getExtrusionOffset((next.xy - curr.xy) * indexDir, segmentSide, widthPixels),
0.0);
DECKGL_FILTER_SIZE(offset, geometry);
DECKGL_FILTER_GL_POSITION(curr, geometry);
gl_Position = curr + vec4(project_pixel_size_to_clipspace(offset.xy), 0.0, 0.0);
vec4 color = mix(instanceSourceColors, instanceTargetColors, segmentRatio);
vColor = vec4(color.rgb, color.a * layer.opacity);
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,d=`\
#version 300 es
#define SHADER_NAME arc-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 uv;
in float isValid;
out vec4 fragColor;
void main(void) {
if (isValid == 0.0) {
discard;
}
fragColor = vColor;
geometry.uv = uv;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,p=[0,0,0,255],f={getSourcePosition:{type:"accessor",value:e=>e.sourcePosition},getTargetPosition:{type:"accessor",value:e=>e.targetPosition},getSourceColor:{type:"accessor",value:p},getTargetColor:{type:"accessor",value:p},getWidth:{type:"accessor",value:1},getHeight:{type:"accessor",value:1},getTilt:{type:"accessor",value:0},greatCircle:!1,numSegments:{type:"number",value:50,min:1},widthUnits:"pixels",widthScale:{type:"number",value:1,min:0},widthMinPixels:{type:"number",value:0,min:0},widthMaxPixels:{type:"number",value:Number.MAX_SAFE_INTEGER,min:0}};class m extends r.A{getBounds(){return this.getAttributeManager()?.getBounds(["instanceSourcePositions","instanceTargetPositions"])}getShaders(){return super.getShaders({vs:g,fs:d,modules:[i.A,s.A,u]})}get wrapLongitude(){return!1}initializeState(){this.getAttributeManager().addInstanced({instanceSourcePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getSourcePosition"},instanceTargetPositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getTargetPosition"},instanceSourceColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getSourceColor",defaultValue:p},instanceTargetColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getTargetColor",defaultValue:p},instanceWidths:{size:1,transition:!0,accessor:"getWidth",defaultValue:1},instanceHeights:{size:1,transition:!0,accessor:"getHeight",defaultValue:1},instanceTilts:{size:1,transition:!0,accessor:"getTilt",defaultValue:0}})}updateState(e){super.updateState(e),e.changeFlags.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{widthUnits:t,widthScale:o,widthMinPixels:a,widthMaxPixels:r,greatCircle:i,wrapLongitude:s,numSegments:l}=this.props,c={numSegments:l,widthUnits:n.p5[t],widthScale:o,widthMinPixels:a,widthMaxPixels:r,greatCircle:i,useShortestPath:s},u=this.state.model;u.shaderInputs.setProps({arc:c}),u.setVertexCount(2*l),u.draw(this.context.renderPass)}_getModel(){return new l.K(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),topology:"triangle-strip",isInstanced:!0})}}m.layerName="ArcLayer",m.defaultProps=f;var h=o(99236),v=o(4678),_=o(80715),x=o(50626),P=o(41567);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function S(e){let t=[];return e.forEach(e=>{t.push(e.sourcePosition),t.push(e.targetPosition)}),t}let w=function({formData:e,payload:t,setTooltip:o,filterState:r,setDataMask:i,onContextMenu:s,emitCrossFilters:n}){let l=t.data.features,c=e.color_picker,u=e.target_color_picker,g=e.color_scheme_type;return new m(y({data:l,getSourceColor:e=>g===h.wP.fixed_color?[c.r,c.g,c.b,255*c.a]:e.sourceColor||e.color||[c.r,c.g,c.b,255*c.a],getTargetColor:e=>g===h.wP.fixed_color?[u.r,u.g,u.b,255*u.a]:e.targetColor||e.color||[u.r,u.g,u.b,255*u.a],id:`path-layer-${e.slice_id}`,getWidth:e.stroke_width?e.stroke_width:3},(0,v.T$)({formData:e,setTooltip:o,setTooltipContent:(0,x.j1)(e,e=>(0,a.FD)("div",{className:"deckgl-tooltip",children:[x.EO.arcPositions(e),x.EO.category(e)]})),onContextMenu:s,setDataMask:i,filterState:r,emitCrossFilters:n}),{opacity:(null==r?void 0:r.value)?.1:1}))},b=function({formData:e,payload:t,filterState:o}){let a=t.data.features,r=e=>{let t=null==o?void 0:o.value[0],a=null==o?void 0:o.value[1];return t&&a&&e.sourcePosition[0]===t[0]&&e.sourcePosition[1]===t[1]&&e.targetPosition[0]===a[0]&&e.targetPosition[1]===a[1]?P.Fe:P.LC};return new m({data:a,getSourceColor:r,getTargetColor:r,id:`path-hihglight-layer-${e.slice_id}`,getWidth:e.stroke_width?e.stroke_width:3})},C=(0,_.c)(w,S,b)}}]);