(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9730],{51545(e,t,r){"use strict";r.d(t,{Ht:()=>a,cG:()=>o});var n=r(70731),l=r.n(n);let o={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0},i=(e,t)=>String(e.rankedValue).localeCompare(String(t.rankedValue));function a(e,t,r){void 0===r&&(r={});let{keys:n,threshold:l=o.MATCHES,baseSort:a=i,sorter:u=e=>e.sort((e,t)=>(function(e,t,r){let{rank:n,keyIndex:l}=e,{rank:o,keyIndex:i}=t;return n!==o?n>o?-1:1:l===i?r(e,t):l<i?-1:1})(e,t,a))}=r;return u(e.reduce(function(e,i,a){var u,d,h,p;let f=(u=i,d=n,h=t,p=r,d?(function(e,t){let r=[];for(let l=0,o=t.length;l<o;l++){var n;let o=t[l],i="string"==typeof(n=o)?s:{...s,...n},a=function(e,t){let r;if("object"==typeof t&&(t=t.key),"function"==typeof t)r=t(e);else if(null==e)r=null;else if(Object.hasOwnProperty.call(e,t))r=e[t];else{if(t.includes("."))return function(e,t){let r=e.split("."),n=[t];for(let e=0,t=r.length;e<t;e++){let t=r[e],l=[];for(let e=0,r=n.length;e<r;e++){let r=n[e];if(null!=r)if(Object.hasOwnProperty.call(r,t)){let e=r[t];null!=e&&l.push(e)}else"*"===t&&(l=l.concat(r))}n=l}return Array.isArray(n[0])?[].concat(...n):n}(t,e);r=null}return null==r?[]:Array.isArray(r)?r:[String(r)]}(e,o);for(let e=0,t=a.length;e<t;e++)r.push({itemValue:a[e],attributes:i})}return r})(u,d).reduce((e,t,r)=>{let{rank:n,rankedValue:l,keyIndex:i,keyThreshold:a}=e,{itemValue:u,attributes:s}=t,d=c(u,h,p),f=l,{minRanking:g,maxRanking:m,threshold:y}=s;return d<g&&d>=o.MATCHES?d=g:d>m&&(d=m),d>n&&(n=d,i=r,a=y,f=u),{rankedValue:f,rank:n,keyIndex:i,keyThreshold:a}},{rankedValue:u,rank:o.NO_MATCH,keyIndex:-1,keyThreshold:p.threshold}):{rankedValue:u,rank:c(u,h,p),keyIndex:-1,keyThreshold:p.threshold}),{rank:g,keyThreshold:m=l}=f;return g>=m&&e.push({...f,item:i,index:a}),e},[])).map(e=>{let{item:t}=e;return t})}function c(e,t,r){let n;return(e=u(e,r),(t=u(t,r)).length>e.length)?o.NO_MATCH:e===t?o.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase())===(t=t.toLowerCase())?o.EQUAL:e.startsWith(t)?o.STARTS_WITH:e.includes(` ${t}`)?o.WORD_STARTS_WITH:e.includes(t)?o.CONTAINS:1===t.length?o.NO_MATCH:(n="",e.split(" ").forEach(e=>{e.split("-").forEach(e=>{n+=e.substr(0,1)})}),n).includes(t)?o.ACRONYM:function(e,t){var r;let n,l=0,i=0;function a(e,t,r){for(let n=r,o=t.length;n<o;n++)if(t[n]===e)return l+=1,n+1;return -1}let c=a(t[0],e,0);if(c<0)return o.NO_MATCH;i=c;for(let r=1,n=t.length;r<n;r++)if(!((i=a(t[r],e,i))>-1))return o.NO_MATCH;return r=i-c,n=l/t.length,o.MATCHES+1/r*n}(e,t)}function u(e,t){let{keepDiacritics:r}=t;return e=`${e}`,r||(e=l()(e)),e}a.rankings=o;let s={maxRanking:1/0,minRanking:-1/0}},7452(e){var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,l=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,r,n,o){var i,a,c,u,s=Object.create((r&&r.prototype instanceof m?r:m).prototype);return l(s,"_invoke",{value:(i=e,a=n,c=new N(o||[]),u=h,function(e,r){if(u===p)throw Error("Generator is already running");if(u===f){if("throw"===e)throw r;return{value:t,done:!0}}for(c.method=e,c.arg=r;;){var n=c.delegate;if(n){var l=function e(r,n){var l=n.method,o=r.iterator[l];if(t===o)return(n.delegate=null,"throw"===l&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))?g:("return"!==l&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+l+"' method")),g);var i=d(o,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(n,c);if(l){if(l===g)continue;return l}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===h)throw u=f,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=p;var o=d(i,a,c);if("normal"===o.type){if(u=c.done?f:"suspendedYield",o.arg===g)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u=f,c.method="throw",c.arg=o.arg)}})}),s}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var h="suspendedStart",p="executing",f="completed",g={};function m(){}function y(){}function v(){}var b={};u(b,i,function(){return this});var S=Object.getPrototypeOf,w=S&&S(S(O([])));w&&w!==r&&n.call(w,i)&&(b=w);var k=v.prototype=m.prototype=Object.create(b);function x(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function C(e,t){var r;l(this,"_invoke",{value:function(l,o){function i(){return new t(function(r,i){!function r(l,o,i,a){var c=d(e[l],e,o);if("throw"===c.type)a(c.arg);else{var u=c.arg,s=u.value;return s&&"object"==typeof s&&n.call(s,"__await")?t.resolve(s.__await).then(function(e){r("next",e,i,a)},function(e){r("throw",e,i,a)}):t.resolve(s).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,a)})}}(l,o,r,i)})}return r=r?r.then(i,i):i()}})}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function O(e){if(null!=e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var l=-1,o=function r(){for(;++l<e.length;)if(n.call(e,l))return r.value=e[l],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=v,l(k,"constructor",{value:v,configurable:!0}),l(v,"constructor",{value:y,configurable:!0}),y.displayName=u(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},x(C.prototype),u(C.prototype,a,function(){return this}),e.AsyncIterator=C,e.async=function(t,r,n,l,o){void 0===o&&(o=Promise);var i=new C(s(t,r,n,l),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},x(k),u(k,c,"Generator"),u(k,i,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function l(n,l){return a.type="throw",a.arg=e,r.next=n,l&&(r.method="next",r.arg=t),!!l}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return l("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return l(i.catchLoc,!0);else if(this.prev<i.finallyLoc)return l(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return l(i.catchLoc,!0)}else if(u){if(this.prev<i.finallyLoc)return l(i.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r];if(l.tryLoc<=this.prev&&n.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var o=l;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return(i.type=e,i.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),A(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var l=n.arg;A(r)}return l}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},70731(e){var t={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ả:"A",Ạ:"A",Ẩ:"A",Ẫ:"A",Ậ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ẻ:"E",Ẽ:"E",Ẹ:"E",Ể:"E",Ễ:"E",Ệ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ỉ:"I",Ị:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ỏ:"O",Ọ:"O",Ổ:"O",Ỗ:"O",Ộ:"O",Ờ:"O",Ở:"O",Ỡ:"O",Ớ:"O",Ợ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ủ:"U",Ụ:"U",Ử:"U",Ữ:"U",Ự:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ả:"a",ạ:"a",ẩ:"a",ẫ:"a",ậ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ẻ:"e",ẽ:"e",ẹ:"e",ể:"e",ễ:"e",ệ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ỉ:"i",ị:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ỏ:"o",ọ:"o",ổ:"o",ỗ:"o",ộ:"o",ờ:"o",ở:"o",ỡ:"o",ớ:"o",ợ:"o",ù:"u",ú:"u",û:"u",ü:"u",ủ:"u",ụ:"u",ử:"u",ữ:"u",ự:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z",й:"и",Й:"И",ё:"е",Ё:"Е"},r=Object.keys(t).join("|"),n=RegExp(r,"g"),l=RegExp(r,"");function o(e){return t[e]}var i=function(e){return e.replace(n,o)};e.exports=i,e.exports.has=function(e){return!!e.match(l)},e.exports.remove=i},45664(e,t,r){"use strict";r.d(t,{j:()=>n});let n=()=>{var e;return null==(e=window.getSelection())?void 0:e.toString()}},26216(e,t,r){"use strict";r.d(t,{v:()=>n});let n=r(24002).memo},79730(e,t,r){"use strict";let n;r.r(t),r.d(t,{default:()=>eC,sanitizeHeaderId:()=>ev});var l=r(2445),o=r(24002),i=r(70937),a=r(46942),c=r.n(a),u=r(50267),s=r(65802),d=r(25365),h=r(79927),p=r(45664),f=r(85614),g=r(17437),m=r(27124),y=r(63021),v=r(22022),b=r(58607),S=r(8563),w=r(26067),k=r(13341),x=r(14103),C=r(39822),E=r(35709),A=r(29248),N=r(62193),O=r.n(N),T=r(38221),$=r.n(T),F=r(2404),Y=r.n(F),M=r(66155),I=r(3102),R=r(26216),H=r(36732),L=r(32885),D=r(51545),P=r(68447);r(7452);let z=new Map;function j({count:e,value:t,onChange:r,onBlur:n,inputRef:o}){return(0,l.FD)(v.Space,{direction:"horizontal",size:4,className:"dt-global-filter",children:[(0,m.t)("Search"),(0,l.Y)(v.Input,{size:"small",ref:o,placeholder:(0,m.tn)("%s record...","%s records...",e,e),value:t,onChange:r,onBlur:n,className:"form-control input-sm"})]})}let B=(0,o.memo)(function({preGlobalFilteredRows:e,filterValue:t="",searchInput:r,setGlobalFilter:n,id:i="",serverPagination:a,rowCount:c}){let u=a?c:e.length,s=(0,o.useRef)(null),[d,h]=function(e,t,r=200){let[n,l]=(0,o.useState)(e),i=(0,o.useRef)(e),a=(0,L.useAsyncDebounce)(t,r);return i.current!==e&&(i.current=e,n!==e&&l(e)),[n,e=>{l(e),a(e)}]}(t,e=>{n(e||void 0)},200);return(0,o.useEffect)(()=>{if(a&&z.get(i)&&document.activeElement!==s.current){var e;null==(e=s.current)||e.focus()}},[d,a]),(0,l.Y)(r||j,{count:u,value:d,inputRef:s,onChange:e=>{let t=e.target;e.preventDefault(),z.set(i,!0),h(t.value)},onBlur:()=>{z.set(i,!1)}})});var _=r(78486);function U({current:e,options:t,onChange:r}){let{Option:n}=v.Select;return(0,l.FD)("span",{className:"dt-select-page-size form-inline",children:[(0,m.t)("Show")," ",(0,l.Y)(v.Select,{value:e,onChange:e=>r(e),size:"small",css:e=>(0,g.AH)`
          width: ${18*e.sizeUnit}px;
        `,children:t.map(e=>{let[t,r]=Array.isArray(e)?e:[e,e],o=0===t?(0,m.t)("all"):t;return(0,l.Y)(n,{value:Number(t),"aria-label":(0,m.t)("Show %s entries",o),children:r},t)})})," ",(0,m.t)("entries")]})}function G(e){return Array.isArray(e)?e[0]:e}let W=(0,o.memo)(function({total:e,options:t,current:r,selectRenderer:n,onChange:o}){let i=t.map(G),a=[...t];void 0===r||r===e&&i.includes(0)||i.includes(r)||(a=[...t]).splice(i.findIndex(e=>e>r),0,(0,_.u)([r])[0]);let c=void 0===r?i[0]:r;return(0,l.Y)(n||U,{current:c,options:a,onChange:o})}),V=(0,o.memo)((0,o.forwardRef)(function({style:e,pageCount:t,currentPage:r=0,maxPageItemCount:n=9,onPageChange:o},i){let a=function(e,t,r){if(r<7)throw Error("Must allow at least 7 page items");if(r%2==0)throw Error("Must allow odd number of page items");if(e<r)return Array.from({length:e},(e,t)=>t);let n=Math.max(0,Math.min(e-r,t-Math.floor(r/2))),l=Array.from({length:r},(e,t)=>t+n);"number"==typeof l[0]&&l[0]>0&&(l[0]=0,l[1]="prev-more");let o=l[l.length-1];return"number"==typeof o&&o<e-1&&(l[l.length-1]=e-1,l[l.length-2]="next-more"),l}(t,r,n);return(0,l.Y)("div",{ref:i,className:"dt-pagination",style:e,children:(0,l.Y)("ul",{className:"pagination pagination-sm",children:a.map(e=>"number"==typeof e?(0,l.Y)("li",{className:r===e?"active":void 0,children:(0,l.Y)("a",{href:`#page-${e}`,role:"button",onClick:t=>{t.preventDefault(),o(e)},children:e+1})},e):(0,l.Y)("li",{className:"dt-pagination-ellipsis",children:(0,l.Y)("span",{children:"…"})},e))})})})),X=e=>e.join(`
`);function K(e=!1){if("u"<typeof document)return 0;if(void 0===n||e){let e=document.createElement("div"),t=document.createElement("div");e.style.cssText=X`
      width: auto;
      height: 100%;
      overflow: scroll;
    `,t.style.cssText=X`
      position: absolute;
      visibility: hidden;
      overflow: hidden;
      width: 100px;
      height: 50px;
    `,t.append(e),document.body.append(t),n=t.clientWidth-e.clientWidth,t.remove()}return n}function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let Z=(e,t)=>e+t,J=(e,t)=>({style:Q({},e.props.style,t)}),q={tableLayout:"fixed"};function ee({sticky:e={},width:t,height:r,children:n,setStickyState:i}){let a,c,u,s,d,h,p,m=(0,f.useTheme)();if(!n||"table"!==n.type)throw Error("<StickyWrap> must have only one <table> element as child");if(o.Children.forEach(n.props.children,e=>{e&&("thead"===e.type?a=e:"tbody"===e.type?c=e:"tfoot"===e.type&&(u=e))}),!a||!c)throw Error("<table> in <StickyWrap> must contain both thead and tbody.");let y=(0,o.useMemo)(()=>o.Children.toArray(null==a?void 0:a.props.children).pop().props.children.length,[a]),v=(0,o.useRef)(null),b=(0,o.useRef)(null),S=(0,o.useRef)(null),w=(0,o.useRef)(null),k=(0,o.useRef)(null),x=K(),{bodyHeight:C,columnWidths:E,hasVerticalScroll:A}=e,N=!E||e.width!==t||e.height!==r||e.setStickyState!==i;(0,o.useLayoutEffect)(()=>{var e,n;if(!v.current)return;let l=v.current,o=l.clientHeight,a=b.current?b.current.clientHeight:0;if(!o)return;let c=l.parentNode.clientHeight,u=Array.from(null==(n=l.childNodes)?void 0:n[(null==(e=l.childNodes)?void 0:e.length)-1||0].childNodes).map(e=>{var t;return(null==(t=e.getBoundingClientRect())?void 0:t.width)||e.clientWidth}),[s,d]=function({width:e,height:t,innerHeight:r,innerWidth:n,scrollBarSize:l}){let o=r>t;return[o,n>e-(o?l:0)]}({width:t,height:r-o-a,innerHeight:c,innerWidth:u.reduce(Z),scrollBarSize:x}),h=Math.min(r,d?c+x:c);i({hasVerticalScroll:s,hasHorizontalScroll:d,setStickyState:i,width:t,height:r,realHeight:h,tableHeight:c,bodyHeight:h-o-a,columnWidths:u})},[t,r,i,x]);let O=(0,g.AH)`
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-track {
      background: ${m.colorFillQuaternary};
    }
    &::-webkit-scrollbar-thumb {
      background: ${m.colorFillSecondary};
      border-radius: ${m.borderRadiusSM}px;
      &:hover {
        background: ${m.colorFillTertiary};
      }
    }
    &::-webkit-scrollbar-corner {
      background: ${m.colorFillQuaternary};
    }
  `;if(N){let e=(0,o.cloneElement)(a,{ref:v}),t=u&&(0,o.cloneElement)(u,{ref:b});s=(0,l.Y)("div",{style:{height:r,overflow:"auto",visibility:"hidden",scrollbarGutter:"stable"},css:O,role:"presentation",children:(0,o.cloneElement)(n,{role:"presentation"},e,c,t)},"sizer")}let T=null==E?void 0:E.slice(0,y);if(T&&C){let r=(0,l.Y)("colgroup",{children:T.map((e,t)=>(0,l.Y)("col",{width:e},t))}),i=A?t-x:t;d=(0,l.FD)("div",{ref:S,style:{overflow:"hidden",width:i,boxSizing:"border-box"},role:"presentation",children:[(0,o.cloneElement)((0,o.cloneElement)(n,{role:"presentation"}),J(n,q),r,a),d]},"header"),h=u&&(0,l.FD)("div",{ref:w,style:{overflow:"hidden",width:i,boxSizing:"border-box"},role:"presentation",children:[(0,o.cloneElement)((0,o.cloneElement)(n,{role:"presentation"}),J(n,q),r,u),h]},"footer"),p=(0,l.Y)("div",{ref:k,style:{height:C,overflow:"auto",scrollbarGutter:A?"stable":void 0,width:t,boxSizing:"border-box"},css:O,onScroll:e.hasHorizontalScroll?e=>{S.current&&(S.current.scrollLeft=e.currentTarget.scrollLeft),w.current&&(w.current.scrollLeft=e.currentTarget.scrollLeft)}:void 0,role:"presentation",children:(0,o.cloneElement)((0,o.cloneElement)(n,{role:"presentation"}),J(n,q),r,c)},"body")}return(0,l.FD)("div",{style:{width:t,height:e.realHeight||r,overflow:"hidden"},role:"table",children:[d,p,h,s]})}function et(e){let{dispatch:t,state:{sticky:r},data:n,page:i,rows:a,allColumns:c,getTableSize:u=()=>void 0}=e,s=(0,o.useCallback)(e=>{t({type:"setStickyState",size:e})},[t,u,i,a]);Object.assign(e,{setStickyState:s,wrapStickyTable:e=>{var t;let d,{width:h,height:p}=(t=[u],d=(0,o.useRef)(),(0,o.useLayoutEffect)(()=>{d.current=u}),(0,o.useMemo)(()=>{if(d.current)return u()},[d.current,d.current===u,...t||[]])||r),f=(0,o.useMemo)(e,[i,a,c]);return((0,o.useLayoutEffect)(()=>{h&&p||s()},[h,p]),h&&p)?0===n.length?f:(0,l.Y)(ee,{width:h,height:p,sticky:r,setStickyState:s,children:f}):null}})}function er(e){e.useInstance.push(et),e.stateReducers.push((e,t,r)=>{if("init"===t.type)return Q({},e,{sticky:Q({},null==r?void 0:r.sticky)});if("setStickyState"===t.type){let{size:n}=t;return n?Q({},e,{sticky:Q({},null==r?void 0:r.sticky,null==e?void 0:e.sticky,t.size)}):Q({},e)}return e})}er.pluginName="useSticky";var en=r(83442);let el=(0,f.styled)(v.Select)`
  width: 120px;
  margin-right: 8px;
`,eo=function({value:e,onChange:t,searchOptions:r}){var n,o;return(0,l.Y)(el,{className:"search-select",value:e||(null!=(n=null==r||null==(o=r[0])?void 0:o.value)?n:""),options:r,onChange:t})};function ei(){return(ei=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ea(e,t){if(null==e)return{};var r,n,l={},o=Object.getOwnPropertyNames(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r]);return l}let ec={alphanumeric:(e,t,r)=>{let n=e.values[r],l=t.values[r];return n&&"string"==typeof n?l&&"string"==typeof l?n.localeCompare(l):1:-1}},eu=(0,R.v)(function(e){let{tableClassName:t,columns:r,data:n,serverPaginationData:i,width:a="100%",height:c=300,pageSize:u=0,initialState:s={},pageSizeOptions:d=en.x,maxPageItemCount:h=9,sticky:p,searchInput:f=!0,onServerPaginationChange:g,rowCount:y,selectPageSize:b,noResults:S="No data found",hooks:w,serverPagination:k,wrapperRef:x,onColumnOrderChange:C,renderGroupingHeaders:E,renderTimeComparisonDropdown:A,handleSortByChange:N,sortByFromParent:O=[],manualSearch:T=!1,onSearchChange:$,initialSearchText:F,searchInputId:M,onSearchColChange:I,searchOptions:R,onFilteredDataChange:z,onFilteredRowsChange:j}=e,_=ea(e,["tableClassName","columns","data","serverPaginationData","width","height","pageSize","initialState","pageSizeOptions","maxPageItemCount","sticky","searchInput","onServerPaginationChange","rowCount","selectPageSize","noResults","hooks","serverPagination","wrapperRef","onColumnOrderChange","renderGroupingHeaders","renderTimeComparisonDropdown","handleSortByChange","sortByFromParent","manualSearch","onSearchChange","initialSearchText","searchInputId","onSearchColChange","searchOptions","onFilteredDataChange","onFilteredRowsChange"]),U=[L.useGlobalFilter,L.useSortBy,L.usePagination,L.useColumnOrder,p?er:[],w||[]].flat(),G=r.map((e,t)=>{var r,n,l;let o="string"==typeof e.accessor?e.accessor:void 0;return null!=(r=null!=(n=null!=(l=e.columnKey)?l:e.id)?n:o)?r:String(t)}),X=(0,H.Z)(G),K=k?y:n.length,Q=(0,o.useRef)([]),Z=(0,o.useRef)([u,K]),J=u>0&&K>0,q=J||!!f||A,ee=ei({},s,{sortBy:k?O:Q.current,pageSize:u>0?u:K||10}),et=(0,o.useRef)(null),el=(0,o.useRef)(null),eu=(0,o.useRef)(null),es=x||et,ed=JSON.stringify(i),eh=(0,o.useCallback)(()=>{if(es.current){var e,t;return{width:Number(a)||es.current.clientWidth,height:(Number(c)||es.current.clientHeight)-((null==(e=el.current)?void 0:e.clientHeight)||0)-((null==(t=eu.current)?void 0:t.clientHeight)||0)}}},[c,a,es,J,q,eu,K,ed]),ep=(0,o.useCallback)((e,t,r)=>(0,D.Ht)(e,r,{keys:[...t,e=>t.map(t=>e.values[t]).join(" ")],threshold:D.cG.ACRONYM}),[]),{rows:ef,getTableProps:eg,getTableBodyProps:em,prepareRow:ey,headerGroups:ev,footerGroups:eb,page:eS,pageCount:ew,gotoPage:ek,preGlobalFilteredRows:ex,setGlobalFilter:eC,setPageSize:eE,wrapStickyTable:eA,setColumnOrder:eN,allColumns:eO,state:{pageIndex:eT,pageSize:e$,globalFilter:eF,sticky:eY={},sortBy:eM}}=(0,L.useTable)(ei({columns:r,data:n,initialState:ee,getTableSize:eh,globalFilter:ep,sortTypes:ec,autoResetGlobalFilter:!Y()(G,X),autoResetSortBy:!Y()(G,X),manualSortBy:!!k},_),...U),eI=(0,o.useMemo)(()=>ef.map((e,t)=>{var r;return null!=(r=e.id)?r:t}).sort().join("|"),[ef]),eR=(0,o.useRef)(ef);eR.current=ef,(0,o.useEffect)(()=>{if(!z)return;let e="string"==typeof eF?eF:void 0;z(eR.current,e)},[eF,z,eI]);let eH=(0,o.useCallback)(e=>{T&&$?$(e):eC(e)},[T,$,eC]);(0,o.useEffect)(()=>{let e=(null==i?void 0:i.sortBy)||[];if(k&&!Y()(eM,e))if(Array.isArray(eM)&&eM.length>0){let[e]=eM,t=r.find(t=>(null==t?void 0:t.id)===(null==e?void 0:e.id));t&&"columnKey"in t&&N([ei({},e,{key:t.columnKey})])}else N([])},[eM]);let eL=e=>{k&&g(0,e),(e||0!==K)&&eE(0===e?K:e)},eD="function"==typeof S?S(eF):S,eP=()=>(0,l.Y)("div",{className:"dt-no-results",children:eD});if(!r||0===r.length)return eA?eA(eP):eP();let ez=r.some(e=>!!e.Footer),ej=-1,eB=e=>{let t=e.target;ej=eO.findIndex(e=>e.id===t.dataset.columnName),e.dataTransfer.setData("text/plain",`${ej}`)},e_=e=>{let t=e.target,r=eO.findIndex(e=>e.id===t.dataset.columnName);if(-1!==r){let e=eO.map(e=>e.id),t=e.splice(ej,1);e.splice(r,0,t[0]),eN(e),null==C||C()}e.preventDefault()},eU=()=>(0,l.FD)("table",ei({},eg({className:t}),{children:[(0,l.FD)("thead",{children:[E?E():null,ev.map(e=>{let t=e.getHeaderGroupProps(),{key:r}=t,n=ea(t,["key"]);return(0,l.Y)("tr",ei({},n,{children:e.headers.map(e=>e.render("Header",ei({key:e.id},e.getSortByToggleProps(),{onDragStart:eB,onDrop:e_})))}),r||e.id)})]}),(0,l.Y)("tbody",ei({},em(),{children:eS&&eS.length>0?eS.map(e=>{ey(e);let t=e.getRowProps(),{key:r}=t,n=ea(t,["key"]);return(0,l.Y)("tr",ei({},n,{role:"row",children:e.cells.map(e=>e.render("Cell",{key:e.column.id}))}),r||e.id)}):(0,l.Y)("tr",{children:(0,l.Y)("td",{className:"dt-no-results",colSpan:r.length,children:eD})})})),ez&&(0,l.Y)("tfoot",{children:eb.map(e=>{let t=e.getHeaderGroupProps(),{key:r}=t,n=ea(t,["key"]);return(0,l.Y)("tr",ei({},n,{role:"row",children:e.headers.map(e=>e.render("Footer",{key:e.id}))}),r||e.id)})})]}));(Z.current[0]!==u||0===u&&Z.current[1]!==K)&&(Z.current=[u,K],eL(u));let eG=eY.height?{}:{visibility:"hidden"},eW=ew,eV=e$,eX=eT,eK=ek;if(k){var eQ,eZ;let e=null!=(eQ=null==i?void 0:i.pageSize)?eQ:u;Number.isFinite(eW=Math.ceil(y/e))||(eW=0),eV=e,-1===d.findIndex(([e])=>e>=eV)&&(eV=0),eX=null!=(eZ=null==i?void 0:i.currentPage)?eZ:0,eK=t=>g(t,e)}let eJ=(0,o.useRef)(!0);(0,o.useEffect)(()=>(eJ.current=!0,()=>{eJ.current=!1}),[]);let eq=(0,o.useRef)(null),e0=(0,o.useRef)("");function e1(e){let t=e.original;if(t){var r,n,l;let e=null!=(r=null!=(n=null!=(l=t.id)?l:t.ID)?n:t.key)?r:t.uuid;if(null!=e)return String(e)}let o=e.values;return Object.keys(o).sort().map(e=>{var t;return String(null!=(t=o[e])?t:"")}).join("|")}return(0,o.useEffect)(()=>{var e,t;let r,n,l,o,i;if(k||"function"!=typeof j)return;let a=(n=(r=ef.map(e1)).length,l=null!=(e=r[0])?e:"",o=null!=(t=r[n-1])?t:"",i=function(e){let t=0;for(let r=0;r<e.length;r+=1)t=31*t+e.charCodeAt(r)|0;return String(t)}(r.join("\x01")),`${n}|${l}|${o}|${i}`);return a!==e0.current&&(e0.current=a,null!=eq.current&&cancelAnimationFrame(eq.current),eq.current=requestAnimationFrame(()=>{eJ.current&&j(ef.map(e=>e.original))})),()=>{null!=eq.current&&(cancelAnimationFrame(eq.current),eq.current=null)}},[ef,k,j]),(0,l.FD)("div",{ref:es,style:{width:a,height:c},children:[q?(0,l.Y)("div",{ref:el,className:"form-inline dt-controls",children:(0,l.FD)(P.s,{wrap:!0,className:"row",align:"center",justify:"space-between",gap:"middle",children:[J?(0,l.Y)(W,{total:K,current:eV,options:d,selectRenderer:"boolean"==typeof b?void 0:b,onChange:eL}):null,(0,l.FD)(P.s,{wrap:!0,align:"center",gap:"middle",children:[k&&(0,l.FD)(v.Space,{size:"small",className:"search-select-container",children:[(0,l.FD)("span",{className:"search-by-label",children:[(0,m.t)("Search by"),":"]}),(0,l.Y)(eo,{searchOptions:R,value:(null==i?void 0:i.searchColumn)||"",onChange:I})]}),f&&(0,l.Y)(B,{searchInput:"boolean"==typeof f?void 0:f,preGlobalFilteredRows:ex,setGlobalFilter:T?eH:eC,filterValue:T?F:eF,id:M,serverPagination:!!k,rowCount:y}),A?A():null]})]})}):null,eA?eA(eU):eU(),J&&eW>1?(0,l.Y)(V,{ref:eu,style:eG,maxPageItemCount:h,pageCount:eW,currentPage:eX,onPageChange:eK}):null]})}),es=f.styled.div`
  ${({theme:e})=>(0,g.AH)`
    /* Base table styles */
    table {
      width: 100%;
      min-width: auto;
      max-width: none;
      margin: 0;
      border-collapse: collapse;
    }

    /* Cell styling */
    th,
    td {
      min-width: 4.3em;
      padding: 0.75rem;
      vertical-align: top;
    }

    /* Header styling */
    thead > tr > th {
      padding-right: 0;
      position: relative;
      background-color: ${e.colorBgBase};
      text-align: left;
      border-bottom: 2px solid ${e.colorSplit};
      color: ${e.colorText};
      vertical-align: bottom;
    }

    /* Icons in header */
    th svg {
      margin: 1px ${e.sizeUnit/2}px;
      fill-opacity: 0.2;
    }

    th.is-sorted svg {
      color: ${e.colorText};
      fill-opacity: 1;
    }

    /* Table body styling */
    .table > tbody > tr:first-of-type > td,
    .table > tbody > tr:first-of-type > th {
      border-top: 0;
    }

    .table > tbody tr td {
      font-feature-settings: 'tnum' 1;
      border-top: 1px solid ${e.colorSplit};
    }

    /* Bootstrap-like condensed table styles */
    table.table-condensed,
    table.table-sm {
      font-size: ${e.fontSizeSM}px;
    }

    table.table-condensed th,
    table.table-condensed td,
    table.table-sm th,
    table.table-sm td {
      padding: 0.3rem;
    }

    /* Bootstrap-like bordered table styles */
    table.table-bordered {
      border: 1px solid ${e.colorSplit};
    }

    table.table-bordered th,
    table.table-bordered td {
      border: 1px solid ${e.colorSplit};
    }

    /* Bootstrap-like striped table styles */
    table.table-striped tbody tr:nth-of-type(odd) {
      background-color: ${e.colorBgLayout};
    }

    /* Controls and metrics */
    .dt-controls {
      padding-bottom: 0.65em;
    }

    .dt-metric {
      text-align: right;
    }

    .dt-totals {
      font-weight: ${e.fontWeightStrong};
    }

    .dt-is-null {
      color: ${e.colorTextTertiary};
    }

    td.dt-is-filter {
      cursor: pointer;
    }

    td.dt-is-filter:hover {
      background-color: ${e.colorFillContentHover};
    }

    td.dt-is-active-filter,
    td.dt-is-active-filter:hover {
      background-color: ${e.colorFillContentHover};
    }

    .dt-global-filter {
      float: right;
    }

    /* Cell truncation */
    .dt-truncate-cell {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .dt-truncate-cell:hover {
      overflow: visible;
      white-space: normal;
      height: auto;
    }

    /* Pagination styling */
    .dt-pagination {
      text-align: right;
      /* use padding instead of margin so clientHeight can capture it */
      padding: ${e.paddingXXS}px 0px;
    }

    .dt-pagination .pagination > li {
      display: inline;
      margin: 0 ${e.marginXXS}px;
    }

    .dt-pagination .pagination > li > a,
    .dt-pagination .pagination > li > span {
      background-color: ${e.colorBgBase};
      color: ${e.colorText};
      border-color: ${e.colorBorderSecondary};
      padding: ${e.paddingXXS}px ${e.paddingXS}px;
      border-radius: ${e.borderRadius}px;
    }

    .dt-pagination .pagination > li.active > a,
    .dt-pagination .pagination > li.active > span,
    .dt-pagination .pagination > li.active > a:focus,
    .dt-pagination .pagination > li.active > a:hover,
    .dt-pagination .pagination > li.active > span:focus,
    .dt-pagination .pagination > li.active > span:hover {
      background-color: ${e.colorPrimary};
      color: ${e.colorBgContainer};
      border-color: ${e.colorBorderSecondary};
    }

    .pagination > li > span.dt-pagination-ellipsis:focus,
    .pagination > li > span.dt-pagination-ellipsis:hover {
      background: ${e.colorBgLayout};
      border-color: ${e.colorBorderSecondary};
    }

    .dt-no-results {
      text-align: center;
      padding: 1em 0.6em;
    }

    .right-border-only {
      border-right: 2px solid ${e.colorSplit};
    }

    table .right-border-only:last-child {
      border-right: none;
    }
  `}
`;var ed=r(58097),eh=r(18349),ep=r(24196);function ef(e,t,r){let{dataType:n,formatter:l,config:o={},currencyCodeColumn:i}=e,a=n===y.GenericDataType.Numeric,c=void 0===o.d3SmallNumberFormat?l:o.currencyFormat?new ed.Ay({d3Format:o.d3SmallNumberFormat,currency:o.currencyFormat}):(0,eh.gV)(o.d3SmallNumberFormat);var u=a&&"number"==typeof t&&1>Math.abs(t)?c:l;return void 0===t?[!1,""]:null===t||t instanceof ep.A&&null===t.input?[!1,"N/A"]:u?u instanceof ed.Ay?[!1,u(t,r,i)]:[!1,u(t)]:"string"==typeof t?(0,h.fE)(t)?[!0,(0,h.pn)(t)]:[!1,t]:[!1,t.toString()]}var eg=r(48179);function em(){return(em=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let ey={enter:"Enter",spacebar:"Spacebar",space:" "};function ev(e){return e.replace(/%/g,"percent").replace(/#/g,"hash").replace(/△/g,"delta").replace(/\s+/g,"_").replace(/[^a-zA-Z0-9_-]/g,"_").replace(/_+/g,"_").replace(/^_+|_+$/g,"")}function eb({column:e}){let{isSorted:t,isSortedDesc:r}=e,n=(0,l.Y)(i.MjW,{});return t&&(n=r?(0,l.Y)(i.GOR,{}):(0,l.Y)(i.XhJ,{})),n}let eS=f.styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;function ew({count:e,value:t,onChange:r,onBlur:n,inputRef:o}){return(0,l.FD)(v.Space,{direction:"horizontal",size:4,className:"dt-global-filter",children:[(0,m.t)("Search"),(0,l.Y)(v.Input,{"aria-label":(0,m.t)("Search %s records",e),placeholder:(0,m.tn)("%s record","%s records...",e,e),value:t,onChange:r,onBlur:n,ref:o})]})}function ek({options:e,current:t,onChange:r}){let{Option:n}=v.Select;return(0,l.FD)("span",{className:"dt-select-page-size",children:[(0,l.Y)(eS,{htmlFor:"pageSizeSelect",children:(0,m.t)("Select page size")}),(0,m.t)("Show")," ",(0,l.Y)(v.Select,{id:"pageSizeSelect",value:t,onChange:e=>r(e),size:"small",css:e=>(0,g.AH)`
          width: ${18*e.sizeUnit}px;
        `,"aria-label":(0,m.t)("Show entries per page"),children:e.map(e=>{let[t,r]=Array.isArray(e)?e:[e,e];return(0,l.Y)(n,{value:Number(t),children:r},t)})})," ",(0,m.t)("entries per page")]})}let ex=e=>e?(0,m.t)("No matching records found"):(0,m.t)("No records found");function eC(e){let{timeGrain:t,height:r,width:n,data:i,totals:a,isRawRecords:v,rowCount:N=0,columns:T,alignPositiveNegative:F=!1,colorPositiveNegative:R=!1,includeSearch:H=!1,pageSize:L=0,serverPagination:D=!1,serverPaginationData:P,setDataMask:z,showCellBars:j=!0,sortDesc:B=!1,filters:_,sticky:U=!0,columnColorFormatters:G,allowRearrangeColumns:W=!1,allowRenderHtml:V=!0,onContextMenu:X,emitCrossFilters:Q,isUsingTimeComparison:Z,basicColorFormatters:J,basicColorColumnFormatters:q,hasServerPageLengthChanged:ee,serverPageLength:et,slice_id:er,columnLabelToNameMap:el={}}=e,eo=(0,o.useMemo)(()=>[{key:"all",label:(0,m.t)("Display all")},{key:"#",label:"#"},{key:"△",label:"△"},{key:"%",label:"%"}],[]),ei=(0,o.useCallback)(e=>v?String(null!=e?e:""):(0,u.PT)(t)(e),[t,v]),[ea,ec]=(0,o.useState)({width:0,height:0}),[ed,eh]=(0,o.useState)(!1),[eS,eC]=(0,o.useState)(!1),[eE,eA]=(0,o.useState)([eo[0].key]),[eN,eO]=(0,o.useState)([]),[eT,e$]=(0,o.useState)(a),eF=(0,f.useTheme)();(0,o.useEffect)(()=>{e$(a)},[a]);let eY=(0,o.useMemo)(()=>(D?en.D:en.x).filter(([e])=>D?e<=N:e<=2*i.length),[i.length,N,D]),eM=(0,o.useCallback)(function(e,t){let r=null==i?void 0:i.map(t=>null==t?void 0:t[e]).filter(e=>"number"==typeof e);return r.length>0?t?[0,function(e){let t;for(let r of e)null!=r&&(t<r||void 0===t&&r>=r)&&(t=r);return t}(r.map(Math.abs))]:function(e){let t,r;for(let n of e)null!=n&&(void 0===t?n>=n&&(t=r=n):(t>n&&(t=n),r<n&&(r=n)));return[t,r]}(r):null},[i]),eI=(0,o.useCallback)(function(e,t){return!!_&&!!_[e]&&_[e].some(e=>e===t||e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime())},[_]),eR=(0,o.useCallback)((e,r)=>{let n=em({},_);Array.isArray((n=_&&eI(e,r)?{}:{[e]:[r]})[e])&&0===n[e].length&&delete n[e];let l=Object.keys(n),o=Object.values(n),i=[];return l.forEach(e=>{let t=e===s.Tf,r=(0,d.A)(null==n?void 0:n[e]);if(r.length){let e=r.map(e=>t?ei(e):e);i.push(`${e.join(", ")}`)}}),{dataMask:{extraFormData:{filters:0===l.length?[]:l.map(e=>{var r;let l=null!=(r=el[e])?r:e,o=(0,d.A)(null==n?void 0:n[e]);return o.length?{col:l,op:"IN",val:o.map(e=>e instanceof Date?e.getTime():e),grain:l===s.Tf?t:void 0}:{col:l,op:"IS NULL"}})},filterState:{label:i.join(", "),value:o.length?o:null,filters:n&&Object.keys(n).length?n:null}},isCurrentValueSelected:eI(e,r)}},[_,eI,ei,t,el]),eH=(0,o.useCallback)(function(e,t){Q&&z(eR(e,t).dataMask)},[Q,eR,z]),eL=(0,o.useCallback)(e=>{let{isNumeric:t,config:r={}}=e;return{textAlign:r.horizontalAlign||(t&&!Z?"right":"left")}},[Z]),eD=(0,o.useMemo)(()=>[(0,m.t)("Main"),"#","△","%"],[]),eP=(0,o.useMemo)(()=>{if(!Z)return T;let e=eo[0].key,t=eD[0],r=eE.includes(e);return T.filter(({label:e,key:n})=>{let l=n.substring(e.length),o=eN.includes(l);return e===t||!o&&(!eD.includes(e)||r||eE.includes(e))})},[T,eo,eD,Z,eN,eE]),ez=(0,o.useMemo)(()=>{if(X&&!v)return(e,t,r,n)=>{let l=[];eP.forEach(t=>{if(!t.isMetric){let r=e[t.key];r=(0,h.y4)(r),l.push({col:t.key,op:"==",val:r,formattedVal:ef(t,r)[1]})}}),X(r,n,{drillToDetail:l,crossFilter:t.isMetric?void 0:eR(t.key,t.value),drillBy:t.isMetric?void 0:{filters:[{col:t.key,op:"==",val:(0,h.y4)(t.value)}],groupbyFieldName:"groupby"}})}},[X,v,eP,eR]),ej=(0,o.useCallback)((e,t)=>{let r={};return t&&e.forEach((e,t)=>{if(eD.includes(e.label)){let n=e.key.substring(e.label.length);r[n]?r[n].push(t):r[n]=[t]}}),r},[eD]),eB=(0,o.useMemo)(()=>eP.filter(e=>{var t;return(null==(t=e.config)?void 0:t.visible)!==!1}),[eP]),e_=(0,o.useMemo)(()=>ej(eB,Z),[eB,ej,Z]),eU=(0,o.useCallback)((e,t)=>{var r;let{key:n,label:o,dataType:i,isMetric:a,isPercentMetric:u,config:s={},description:d}=e,h=s.customColumnName||o,b=h;["#","△","%",(0,m.t)("Main")].includes(e.label)&&(e.label===(0,m.t)("Main")?b=s.customColumnName||e.originalLabel||"":s.customColumnName?b=!1!==s.displayTypeIcon?`${e.label} ${s.customColumnName}`:s.customColumnName:!1===s.displayTypeIcon&&(b=""));let w=Number.isNaN(Number(s.columnWidth))?s.columnWidth:Number(s.columnWidth),k=eL(e),x=void 0===s.alignPositiveNegative?F:s.alignPositiveNegative,C=void 0===s.colorPositiveNegative?R:s.colorPositiveNegative,{truncateLongCells:E}=s,N=Array.isArray(G)&&G.length>0,O=Z&&Array.isArray(J)&&J.length>0,T=void 0===s.showCellBars?j:s.showCellBars,$=!O&&T&&(a||v||u)&&eM(n,x),Y="";if(Q&&!a&&(Y+=" dt-is-filter"),a||u){if(eD.includes(h)){let e=e_[n.substring(h.length)]||[];t===e[e.length-1]&&(Y+=" right-border-only")}}else Y+=" right-border-only";let H=ev(null!=(r=e.originalLabel)?r:e.key);return{id:String(t),columnKey:n,accessor:e=>e[n],Cell:({value:t,row:r})=>{var o,i,u,s,d,h;let m,y,v,[b,S]=ef(e,t,r.original),A=b&&V?{__html:S}:void 0,F=!0,R="",L=e.key.substring(e.label.length).trim();if(!N&&O&&(m=null==(i=J[r.index][L])?void 0:i.backgroundColor,R=e.label===eD[0]?null==(u=J[r.index][L])?void 0:u.mainArrow:""),N){let n=(e,t)=>{let r=e.getColorFromValue(t);r&&(e.objectFormatting===M.yQ.TEXT_COLOR||e.toTextColor?y=r:e.objectFormatting===M.yQ.CELL_BAR?T&&(v=r.slice(0,-2)):(m=r,F=!1))};G.filter(t=>t.columnFormatting?t.columnFormatting===e.key:t.column===e.key).forEach(e=>{let l;l=e.columnFormatting?r.original[e.column]:t,n(e,l)}),G.filter(e=>e.columnFormatting===M.yQ.ENTIRE_ROW).forEach(e=>n(e,r.original[e.column]))}q&&(null==q?void 0:q.length)>0&&(m=(null==(s=q[r.index][e.key])?void 0:s.backgroundColor)||m,R=e.label===eD[0]?null==(d=q[r.index][e.key])?void 0:d.mainArrow:"");let D=r.index%2==0?eF.colorBgLayout:eF.colorBgBase,P=(0,I.sg)({backgroundColor:m,color:y},D),z=f.styled.td`
            text-align: ${k.textAlign};
            white-space: ${t instanceof Date?"nowrap":void 0};
            position: relative;
            font-weight: ${y?`${eF.fontWeightBold}`:`${eF.fontWeightNormal}`};
            background: ${m||void 0};
            padding-left: ${e.isChildColumn?`${5*eF.sizeUnit}px`:`${eF.sizeUnit}px`};
          `,j=(0,g.AH)`
            position: absolute;
            height: 100%;
            display: block;
            top: 0;
            ${$&&"number"==typeof t&&F&&`
                width: ${function({value:e,valueRange:t,alignPositiveNegative:r}){let[n,l]=t;return r?Math.abs(Math.round(e/l*100)):Math.round(Math.abs(e)/(Math.abs(Math.max(l,0))+Math.abs(Math.min(n,0)))*100)}({value:t,valueRange:$,alignPositiveNegative:x})}%;
                left: ${function({value:e,valueRange:t,alignPositiveNegative:r}){if(r)return 0;let[n,l]=t,o=Math.abs(Math.min(n,0));return Math.round(Math.min(o+e,o)/(Math.abs(Math.max(l,0))+o)*100)}({value:t,valueRange:$,alignPositiveNegative:x})}%;
                background-color: ${v&&`${v}99`||function({value:e,colorPositiveNegative:t=!1,theme:r}){return t?e<0?`${r.colorError}50`:`${r.colorSuccess}50`:`${r.colorFill}`}({value:t,colorPositiveNegative:C,theme:eF})};
              `}
          `,B=(0,g.AH)`
            color: ${J&&(null==(o=J[r.index][L])?void 0:o.arrowColor)===M.mH.Green?eF.colorSuccess:eF.colorError};
            margin-right: ${eF.sizeUnit}px;
          `;q&&(null==q?void 0:q.length)>0&&(B=(0,g.AH)`
              color: ${(null==(h=q[r.index][e.key])?void 0:h.arrowColor)===M.mH.Green?eF.colorSuccess:eF.colorError};
              margin-right: ${eF.sizeUnit}px;
            `);let _={"aria-labelledby":`header-${H}`,role:"cell",title:"number"==typeof t?String(t):void 0,onClick:!Q||$||a?void 0:()=>{(0,p.j)()||eH(n,t)},onContextMenu:e=>{ez&&(e.preventDefault(),e.stopPropagation(),ez(r.original,{key:n,value:t,isMetric:a},e.nativeEvent.clientX,e.nativeEvent.clientY))},className:[Y,null==t||t instanceof ep.A&&null==t.input?"dt-is-null":"",eI(n,t)?" dt-is-active-filter":""].join(" "),style:P?{color:P}:void 0,tabIndex:0};return A?E?(0,l.Y)(z,em({},_,{children:(0,l.Y)("div",{className:"dt-truncate-cell",style:w?{width:w}:void 0,dangerouslySetInnerHTML:A})})):(0,l.Y)(z,em({},_,{dangerouslySetInnerHTML:A})):(0,l.FD)(z,em({},_,{children:[$&&(0,l.Y)("div",{className:c()("cell-bar","number"==typeof t&&t<0?"negative":"positive"),css:j,role:"presentation"}),E?(0,l.FD)("div",{className:"dt-truncate-cell",style:w?{width:w}:void 0,children:[R&&(0,l.Y)("span",{css:B,children:R}),S]}):(0,l.FD)(l.FK,{children:[R&&(0,l.Y)("span",{css:B,children:R}),S]})]}))},Header:({column:e,onClick:t,style:r,onDragStart:n,onDrop:o})=>(0,l.FD)("th",em({id:`header-${H}`,title:d||(0,m.t)("Shift + Click to sort by multiple columns"),className:[Y,e.isSorted?"is-sorted":""].join(" "),style:em({},k,r),onKeyDown:t=>{Object.values(ey).includes(t.key)&&e.toggleSortBy()},role:"columnheader button",onClick:t,"data-column-name":e.id},W&&{draggable:"true",onDragStart:n,onDragOver:e=>e.preventDefault(),onDragEnter:e=>e.preventDefault(),onDrop:o},{tabIndex:0,children:[s.columnWidth?(0,l.Y)("div",{style:{width:w,height:.01}}):null,(0,l.FD)("div",{"data-column-name":e.id,css:{display:"inline-flex",alignItems:"flex-end"},children:[(0,l.Y)("span",{"data-column-name":e.id,children:b}),(0,l.Y)(eb,{column:e})]})]})),Footer:eT?0===t?(0,l.Y)("th",{children:(0,l.FD)("div",{css:(0,g.AH)`
                  display: flex;
                  align-items: center;
                  & svg {
                    margin-left: ${eF.sizeUnit}px;
                    color: ${eF.colorBorder} !important;
                  }
                `,children:[(0,m.t)("Summary"),(0,l.Y)(S.m,{overlay:(0,m.t)("Show total aggregations of selected metrics. Note that row limit does not apply to the result."),children:(0,l.Y)(A.A,{})})]})},`footer-summary-${t}`):(0,l.Y)("td",{style:k,children:(0,l.Y)("strong",{children:ef(e,eT[n])[1]})},`footer-total-${t}`):void 0,sortDescFirst:B,sortType:i===y.GenericDataType.Temporal?"datetime":i===y.GenericDataType.String?"alphanumeric":"basic"}},[eL,F,R,G,Z,J,j,v,eM,Q,eD,eT,eF,B,e_,V,q,eI,eH,ez,W]),eG=(0,o.useMemo)(()=>eB.map(eU),[eB,eU]),[eW,eV]=(0,o.useState)([]),eX=(0,o.useCallback)((e,t)=>{if(!a||D)return;if(!(null==t?void 0:t.trim()))return void e$(a);let r=em({},a);eP.forEach(t=>{if(t.isMetric||t.isPercentMetric){let n=e.reduce((e,r)=>{var n;let l=null==(n=r.original)?void 0:n[t.key],o=Number(String(null!=l?l:"").replace(/,/g,""));return Number.isFinite(o)?e+o:e},0);r[t.key]=n}}),e$(r)},[eP,D,a]);(0,o.useEffect)(()=>{let e=eG.filter(e=>(null==e?void 0:e.sortType)==="alphanumeric").map(e=>({value:e.columnKey,label:e.columnKey}));Y()(e,eW)||eV(e||[])},[eG,eW]);let eK=(0,o.useCallback)((e,t)=>{let r=em({},P,{currentPage:e,pageSize:t});(0,eg.F)(z,r)},[P,z]);(0,o.useEffect)(()=>{if(ee){let e=em({},P,{currentPage:0,pageSize:et});(0,eg.F)(z,e)}},[ee,et,P,z]);let eQ=(0,o.useCallback)(({width:e,height:t})=>{ec({width:e,height:t})},[]);(0,o.useLayoutEffect)(()=>{let e=K(),{width:t,height:l}=ea;n-t>e||r-l>e?eQ({width:n-e,height:r-e}):(t-n>e||l-r>e)&&eQ({width:n,height:r})},[n,r,eQ,ea]);let{width:eZ,height:eJ}=ea,eq=(0,o.useCallback)(e=>{if(!D)return;let t=em({},P,{sortBy:e});(0,eg.F)(z,t)},[D,P,z]),e0=$()(e=>{var t;let r=em({},P,{searchColumn:(null==P?void 0:P.searchColumn)||(null==(t=eW[0])?void 0:t.value),searchText:e,currentPage:0});(0,eg.F)(z,r)},800),[e1,e2]=(0,o.useState)([]),e4=(0,o.useMemo)(()=>eB.map(e=>{var t;return{key:e.key,label:(null==(t=e.config)?void 0:t.customColumnName)||e.originalLabel||e.key}}),[eB]),e3=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(D)return;let e=e3.current,t=!e||!Y()(e.rows,e1),r=!e||!Y()(e.columns,e4);(t||r)&&(e3.current={rows:e1,columns:e4},(0,eg.F)(z,em({},P,{clientView:{rows:e1,columns:e4,count:e1.length}})))},[e1,e4,D,z,P]),(0,l.Y)(es,{children:(0,l.Y)(eu,{columns:eG,data:i,rowCount:N,tableClassName:"table table-striped table-condensed",pageSize:L,serverPaginationData:P,pageSizeOptions:eY,width:eZ,height:eJ,serverPagination:D,onServerPaginationChange:eK,onColumnOrderChange:()=>eh(!ed),initialSearchText:(null==P?void 0:P.searchText)||"",sortByFromParent:(null==P?void 0:P.sortBy)||[],searchInputId:`${er}-search`,maxPageItemCount:n>340?9:7,noResults:ex,searchInput:H&&ew,selectPageSize:null!==L&&ek,sticky:U,renderGroupingHeaders:O()(e_)?void 0:()=>{let e=[],t=0;return Object.entries(e_||{}).sort((e,t)=>e[1][0]-t[1][0]).forEach(([r,n])=>{var o;let i=n[0],a=n.length,c=eB[i],u=c&&(null==(o=T.find(e=>e.key===c.key))?void 0:o.originalLabel)||r;for(let r=t;r<i;r+=1)e.push((0,l.Y)("th",{style:{borderBottom:0},"aria-label":`Header-${r}`},`placeholder-${r}`));e.push((0,l.FD)("th",{colSpan:a,style:{borderBottom:0},children:[u,(0,l.Y)("span",{css:(0,g.AH)`
              float: right;
              & svg {
                color: ${eF.colorIcon} !important;
              }
            `,children:eN.includes(r)?(0,l.Y)(C.A,{onClick:()=>eO(eN.filter(e=>e!==r))}):(0,l.Y)(E.A,{onClick:()=>eO([...eN,r])})})]},`header-${r}`)),t=i+a}),(0,l.Y)("tr",{css:(0,g.AH)`
          th {
            border-right: 1px solid ${eF.colorSplit};
          }
          th:first-child {
            border-left: none;
          }
          th:last-child {
            border-right: none;
          }
        `,children:e})},renderTimeComparisonDropdown:Z?()=>{let e=eo[0].key;return(0,l.Y)(b.ms,{placement:"bottomRight",open:eS,onOpenChange:e=>{eC(e)},menu:{multiple:!0,onClick:t=>{let{key:r}=t;r===e?eA([e]):eE.includes(e)?eA([r]):eA(eE.includes(r)?eE.filter(e=>e!==r):[...eE,r])},onBlur:()=>{3===eE.length&&eA([eo[0].key])},selectedKeys:eE,items:[{key:"all",label:(0,l.Y)("div",{css:(0,g.AH)`
                    max-width: 242px;
                    padding: 0 ${2*eF.sizeUnit}px;
                    color: ${eF.colorText};
                    font-size: ${eF.fontSizeSM}px;
                  `,children:(0,m.t)("Select columns that will be displayed in the table. You can multiselect columns.")}),type:"group",children:eo.map(e=>({key:e.key,label:(0,l.FD)(l.FK,{children:[(0,l.Y)("span",{css:(0,g.AH)`
                          color: ${eF.colorText};
                        `,children:e.label}),(0,l.Y)("span",{css:(0,g.AH)`
                          float: right;
                          font-size: ${eF.fontSizeSM}px;
                        `,children:eE.includes(e.key)&&(0,l.Y)(w.A,{})})]})}))}]},trigger:["click"],children:(0,l.FD)("span",{children:[(0,l.Y)(k.A,{})," ",(0,l.Y)(x.A,{})]})})}:void 0,handleSortByChange:eq,onSearchColChange:e=>{if(!Y()(e,null==P?void 0:P.searchColumn)){let t=em({},P,{searchColumn:e,searchText:""});(0,eg.F)(z,t)}},manualSearch:D,onSearchChange:e0,searchOptions:eW,onFilteredDataChange:eX,onFilteredRowsChange:e2})})}}}]);