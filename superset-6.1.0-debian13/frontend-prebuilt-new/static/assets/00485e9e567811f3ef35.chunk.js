"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4063,6455],{79951(e,t,i){i.d(t,{O:()=>o});function o({dataBounds:e,getBinId:t,padding:i=0}){let s=[e[0],e[1],[e[0][0],e[1][1]],[e[1][0],e[0][1]]].map(e=>t(e)),n=Math.min(...s.map(e=>e[0]))-i,r=Math.min(...s.map(e=>e[1]))-i;return[[n,Math.max(...s.map(e=>e[0]))+i+1],[r,Math.max(...s.map(e=>e[1]))+i+1]]}},14063(e,t,i){i.d(t,{Pu:()=>r,QO:()=>o,Y5:()=>s,cp:()=>a});let o=[[255,255,178],[254,217,118],[254,178,76],[253,141,60],[240,59,32],[189,0,38]];function s(e,t=!1,i=Float32Array){let o;if(Number.isFinite(e[0]))o=new i(e);else{o=new i(4*e.length);let t=0;for(let i=0;i<e.length;i++){let s=e[i];o[t++]=s[0],o[t++]=s[1],o[t++]=s[2],o[t++]=Number.isFinite(s[3])?s[3]:255}}if(t)for(let e=0;e<o.length;e++)o[e]/=255;return o}let n={linear:"linear",quantile:"nearest",quantize:"nearest",ordinal:"nearest"};function r(e,t){e.setSampler({minFilter:n[t],magFilter:n[t]})}function a(e,t,i="linear"){let o=s(t,!1,Uint8Array);return e.createTexture({format:"rgba8unorm",sampler:{minFilter:n[i],magFilter:n[i],addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"},data:o,width:o.length/4,height:1})}},80330(e,t,i){i.d(t,{bg:()=>o});class o{constructor(e,t){this.props={scaleType:"linear",lowerPercentile:0,upperPercentile:100},this.domain=null,this.cutoff=null,this.input=e,this.inputLength=t,this.attribute=e}getScalePercentile(){if(!this._percentile){let e=s(this.input,this.inputLength);this._percentile=function(e,t=100){let i=Array.from(e).filter(Number.isFinite).sort(n),o=0,s=Math.max(1,t),r=Array(s-1);for(;++o<s;)r[o-1]=function(e,t){let i=e.length;if(t<=0||i<2)return e[0];if(t>=1)return e[i-1];let o=(i-1)*t,s=Math.floor(o),n=e[s];return n+(e[s+1]-n)*(o-s)}(i,o/s);return{attribute:{value:e.map(e=>Number.isFinite(e)?function(e,t){let i=0,o=e.length;for(;i<o;){let s=i+o>>>1;e[s]>t?o=s:i=s+1}return i}(r,e):NaN),type:"float32",size:1},domain:r}}(e)}return this._percentile}getScaleOrdinal(){if(!this._ordinal){let e=s(this.input,this.inputLength);this._ordinal=function(e){let t=new Set;for(let i of e)Number.isFinite(i)&&t.add(i);let i=Array.from(t).sort(),o=new Map;for(let e=0;e<i.length;e++)o.set(i[e],e);return{attribute:{value:e.map(e=>Number.isFinite(e)?o.get(e):NaN),type:"float32",size:1},domain:i}}(e)}return this._ordinal}getCutoff({scaleType:e,lowerPercentile:t,upperPercentile:i}){if("quantile"===e)return[t,i-1];if(t>0||i<100){let{domain:o}=this.getScalePercentile(),s=o[Math.floor(t)-1]??-1/0,n=o[Math.floor(i)-1]??1/0;if("ordinal"===e){let{domain:e}=this.getScaleOrdinal();s=e.findIndex(e=>e>=s),-2==(n=e.findIndex(e=>e>n)-1)&&(n=e.length-1)}return[s,n]}return null}update(e){let t=this.props;if(e.scaleType!==t.scaleType)switch(e.scaleType){case"quantile":{let{attribute:e}=this.getScalePercentile();this.attribute=e,this.domain=[0,99];break}case"ordinal":{let{attribute:e,domain:t}=this.getScaleOrdinal();this.attribute=e,this.domain=[0,t.length-1];break}default:this.attribute=this.input,this.domain=null}return(e.scaleType!==t.scaleType||e.lowerPercentile!==t.lowerPercentile||e.upperPercentile!==t.upperPercentile)&&(this.cutoff=this.getCutoff(e)),this.props=e,this}}function s(e,t){let i=(e.stride??4)/4,o=(e.offset??0)/4,s=e.value;if(!s){let o=e.buffer?.readSyncWebGL(0,4*i*t);o&&(e.value=s=new Float32Array(o.buffer))}if(1===i)return s.subarray(0,t);let n=new Float32Array(t);for(let e=0;e<t;e++)n[e]=s[e*i+o];return n}function n(e,t){return e-t}},52208(e,t,i){i.d(t,{A:()=>_});var o=i(15473),s=i(38706),n=i(82849),r=i(59),a=i(63583),l=i(53014),c=i(23479);let u={name:"phongMaterial",dependencies:[a.x],source:l.X,vs:c.X,fs:c.l,defines:{LIGHTING_FRAGMENT:!0},uniformTypes:{ambient:"f32",diffuse:"f32",shininess:"f32",specularColor:"vec3<f32>"},defaultUniforms:{ambient:.35,diffuse:.6,shininess:32,specularColor:[.15,.15,.15]},getUniforms(e){let t={...e};return t.specularColor&&(t.specularColor=t.specularColor.map(e=>e/255)),{...u.defaultUniforms,...t}}};var d=i(34521),f=i(65771),h=i(48186),m=i(25140),p=i(82050);class g extends m.V{constructor(e){const{indices:t,attributes:i}=function(e){let{radius:t,height:i=1,nradial:o=10}=e,{vertices:s}=e;s&&(h.A.assert(s.length>=o),s=s.flatMap(e=>[e[0],e[1]]),(0,p.UD)(s,p.rJ.COUNTER_CLOCKWISE));let n=i>0,r=o+1,a=n?3*r+1:o,l=2*Math.PI/o,c=new Uint16Array(n?3*o*2:0),u=new Float32Array(3*a),d=new Float32Array(3*a),f=0;if(n){for(let e=0;e<r;e++){let n=e*l,r=e%o,a=Math.sin(n),c=Math.cos(n);for(let e=0;e<2;e++)u[f+0]=s?s[2*r]:c*t,u[f+1]=s?s[2*r+1]:a*t,u[f+2]=(.5-e)*i,d[f+0]=s?s[2*r]:c,d[f+1]=s?s[2*r+1]:a,f+=3}u[f+0]=u[f-3],u[f+1]=u[f-2],u[f+2]=u[f-1],f+=3}for(let e=+!n;e<r;e++){let n=Math.floor(e/2)*Math.sign(.5-e%2),r=n*l,a=(n+o)%o,c=Math.sin(r),h=Math.cos(r);u[f+0]=s?s[2*a]:h*t,u[f+1]=s?s[2*a+1]:c*t,u[f+2]=i/2,d[f+2]=1,f+=3}if(n){let e=0;for(let t=0;t<o;t++)c[e++]=2*t+0,c[e++]=2*t+2,c[e++]=2*t+0,c[e++]=2*t+1,c[e++]=2*t+1,c[e++]=2*t+3}return{indices:c,attributes:{POSITION:{size:3,value:u},NORMAL:{size:3,value:d}}}}(e);super({...e,indices:t,attributes:i})}}let v=`\
uniform columnUniforms {
  float radius;
  float angle;
  vec2 offset;
  bool extruded;
  bool stroked;
  bool isStroke;
  float coverage;
  float elevationScale;
  float edgeDistance;
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  highp int radiusUnits;
  highp int widthUnits;
} column;
`,y={name:"column",vs:v,fs:v,uniformTypes:{radius:"f32",angle:"f32",offset:"vec2<f32>",extruded:"f32",stroked:"f32",isStroke:"f32",coverage:"f32",elevationScale:"f32",edgeDistance:"f32",widthScale:"f32",widthMinPixels:"f32",widthMaxPixels:"f32",radiusUnits:"i32",widthUnits:"i32"}},P=`#version 300 es
#define SHADER_NAME column-layer-vertex-shader
in vec3 positions;
in vec3 normals;
in vec3 instancePositions;
in float instanceElevations;
in vec3 instancePositions64Low;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
in float instanceStrokeWidths;
in vec3 instancePickingColors;
out vec4 vColor;
#ifdef FLAT_SHADING
out vec3 cameraPosition;
out vec4 position_commonspace;
#endif
void main(void) {
geometry.worldPosition = instancePositions;
vec4 color = column.isStroke ? instanceLineColors : instanceFillColors;
mat2 rotationMatrix = mat2(cos(column.angle), sin(column.angle), -sin(column.angle), cos(column.angle));
float elevation = 0.0;
float strokeOffsetRatio = 1.0;
if (column.extruded) {
elevation = instanceElevations * (positions.z + 1.0) / 2.0 * column.elevationScale;
} else if (column.stroked) {
float widthPixels = clamp(
project_size_to_pixel(instanceStrokeWidths * column.widthScale, column.widthUnits),
column.widthMinPixels, column.widthMaxPixels) / 2.0;
float halfOffset = project_pixel_size(widthPixels) / project_size(column.edgeDistance * column.coverage * column.radius);
if (column.isStroke) {
strokeOffsetRatio -= sign(positions.z) * halfOffset;
} else {
strokeOffsetRatio -= halfOffset;
}
}
float shouldRender = float(color.a > 0.0 && instanceElevations >= 0.0);
float dotRadius = column.radius * column.coverage * shouldRender;
geometry.pickingColor = instancePickingColors;
vec3 centroidPosition = vec3(instancePositions.xy, instancePositions.z + elevation);
vec3 centroidPosition64Low = instancePositions64Low;
vec2 offset = (rotationMatrix * positions.xy * strokeOffsetRatio + column.offset) * dotRadius;
if (column.radiusUnits == UNIT_METERS) {
offset = project_size(offset);
}
vec3 pos = vec3(offset, 0.);
DECKGL_FILTER_SIZE(pos, geometry);
gl_Position = project_position_to_clipspace(centroidPosition, centroidPosition64Low, pos, geometry.position);
geometry.normal = project_normal(vec3(rotationMatrix * normals.xy, normals.z));
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
if (column.extruded && !column.isStroke) {
#ifdef FLAT_SHADING
cameraPosition = project.cameraPosition;
position_commonspace = geometry.position;
vColor = vec4(color.rgb, color.a * layer.opacity);
#else
vec3 lightColor = lighting_getLightColor(color.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, color.a * layer.opacity);
#endif
} else {
vColor = vec4(color.rgb, color.a * layer.opacity);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,x=`#version 300 es
#define SHADER_NAME column-layer-fragment-shader
precision highp float;
out vec4 fragColor;
in vec4 vColor;
#ifdef FLAT_SHADING
in vec3 cameraPosition;
in vec4 position_commonspace;
#endif
void main(void) {
fragColor = vColor;
geometry.uv = vec2(0.);
#ifdef FLAT_SHADING
if (column.extruded && !column.isStroke && !bool(picking.isActive)) {
vec3 normal = normalize(cross(dFdx(position_commonspace.xyz), dFdy(position_commonspace.xyz)));
fragColor.rgb = lighting_getLightColor(vColor.rgb, cameraPosition, position_commonspace.xyz, normal);
}
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,C=[0,0,0,255],S={diskResolution:{type:"number",min:4,value:20},vertices:null,radius:{type:"number",min:0,value:1e3},angle:{type:"number",value:0},offset:{type:"array",value:[0,0]},coverage:{type:"number",min:0,max:1,value:1},elevationScale:{type:"number",min:0,value:1},radiusUnits:"meters",lineWidthUnits:"meters",lineWidthScale:1,lineWidthMinPixels:0,lineWidthMaxPixels:Number.MAX_SAFE_INTEGER,extruded:!0,wireframe:!1,filled:!0,stroked:!1,flatShading:!1,getPosition:{type:"accessor",value:e=>e.position},getFillColor:{type:"accessor",value:C},getLineColor:{type:"accessor",value:C},getLineWidth:{type:"accessor",value:1},getElevation:{type:"accessor",value:1e3},material:!0,getColor:{deprecatedFor:["getFillColor","getLineColor"]}};class M extends o.A{getShaders(){let e={},{flatShading:t}=this.props;return t&&(e.FLAT_SHADING=1),super.getShaders({vs:P,fs:x,defines:e,modules:[s.A,t?u:d.J,n.A,y]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceElevations:{size:1,transition:!0,accessor:"getElevation"},instanceFillColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getFillColor",defaultValue:C},instanceLineColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getLineColor",defaultValue:C},instanceStrokeWidths:{size:1,accessor:"getLineWidth",transition:!0}})}updateState(e){super.updateState(e);let{props:t,oldProps:i,changeFlags:o}=e,s=o.extensionsChanged||t.flatShading!==i.flatShading;s&&(this.state.models?.forEach(e=>e.destroy()),this.setState(this._getModels()),this.getAttributeManager().invalidateAll());let n=this.getNumInstances();this.state.fillModel.setInstanceCount(n),this.state.wireframeModel.setInstanceCount(n),(s||t.diskResolution!==i.diskResolution||t.vertices!==i.vertices||(t.extruded||t.stroked)!==(i.extruded||i.stroked))&&this._updateGeometry(t)}getGeometry(e,t,i){let o=new g({radius:1,height:2*!!i,vertices:t,nradial:e}),s=0;if(t)for(let i=0;i<e;i++){let o=t[i];s+=Math.sqrt(o[0]*o[0]+o[1]*o[1])/e}else s=1;return this.setState({edgeDistance:Math.cos(Math.PI/e)*s}),o}_getModels(){let e=this.getShaders(),t=this.getAttributeManager().getBufferLayouts(),i=new f.K(this.context.device,{...e,id:`${this.props.id}-fill`,bufferLayout:t,isInstanced:!0}),o=new f.K(this.context.device,{...e,id:`${this.props.id}-wireframe`,bufferLayout:t,isInstanced:!0});return{fillModel:i,wireframeModel:o,models:[o,i]}}_updateGeometry({diskResolution:e,vertices:t,extruded:i,stroked:o}){let s=this.getGeometry(e,t,i||o);this.setState({fillVertexCount:s.attributes.POSITION.value.length/3});let n=this.state.fillModel,r=this.state.wireframeModel;n.setGeometry(s),n.setTopology("triangle-strip"),n.setIndexBuffer(null),r.setGeometry(s),r.setTopology("line-list")}draw({uniforms:e}){let{lineWidthUnits:t,lineWidthScale:i,lineWidthMinPixels:o,lineWidthMaxPixels:s,radiusUnits:n,elevationScale:a,extruded:l,filled:c,stroked:u,wireframe:d,offset:f,coverage:h,radius:m,angle:p}=this.props,g=this.state.fillModel,v=this.state.wireframeModel,{fillVertexCount:y,edgeDistance:P}=this.state,x={radius:m,angle:p/180*Math.PI,offset:f,extruded:l,stroked:u,coverage:h,elevationScale:a,edgeDistance:P,radiusUnits:r.p5[n],widthUnits:r.p5[t],widthScale:i,widthMinPixels:o,widthMaxPixels:s};l&&d&&(v.shaderInputs.setProps({column:{...x,isStroke:!0}}),v.draw(this.context.renderPass)),c&&(g.setVertexCount(y),g.shaderInputs.setProps({column:{...x,isStroke:!1}}),g.draw(this.context.renderPass)),!l&&u&&(g.setVertexCount(2*y/3),g.shaderInputs.setProps({column:{...x,isStroke:!0}}),g.draw(this.context.renderPass))}}M.layerName="ColumnLayer",M.defaultProps=S;let _=M}}]);