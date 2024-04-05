"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[716],{"../../../node_modules/.pnpm/@wordpress+a11y@3.55.0/node_modules/@wordpress/a11y/build-module/index.js":(A,_,a)=>{a.d(_,{D:()=>b});function h(n){if(typeof document!="undefined"){if(document.readyState==="complete"||document.readyState==="interactive")return void n();document.addEventListener("DOMContentLoaded",n)}}var m=a("../../../node_modules/.pnpm/@wordpress+i18n@4.55.0/node_modules/@wordpress/i18n/build-module/index.js");function c(){const n=document.createElement("p");n.id="a11y-speak-intro-text",n.className="a11y-speak-intro-text",n.textContent=(0,m.__)("Notifications"),n.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),n.setAttribute("hidden","hidden");const{body:s}=document;return s&&s.appendChild(n),n}function u(n="polite"){const s=document.createElement("div");s.id=`a11y-speak-${n}`,s.className="a11y-speak-region",s.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),s.setAttribute("aria-live",n),s.setAttribute("aria-relevant","additions text"),s.setAttribute("aria-atomic","true");const{body:l}=document;return l&&l.appendChild(s),s}function f(){const n=document.getElementsByClassName("a11y-speak-region"),s=document.getElementById("a11y-speak-intro-text");for(let l=0;l<n.length;l++)n[l].textContent="";s&&s.setAttribute("hidden","hidden")}let p="";function y(n){return n=n.replace(/<[^<>]+>/g," "),p===n&&(n+="\xA0"),p=n,n}function k(){const n=document.getElementById("a11y-speak-intro-text"),s=document.getElementById("a11y-speak-assertive"),l=document.getElementById("a11y-speak-polite");n===null&&c(),s===null&&u("assertive"),l===null&&u("polite")}h(k);function b(n,s){f(),n=y(n);const l=document.getElementById("a11y-speak-intro-text"),S=document.getElementById("a11y-speak-assertive"),E=document.getElementById("a11y-speak-polite");S&&s==="assertive"?S.textContent=n:E&&(E.textContent=n),l&&l.removeAttribute("hidden")}},"../../../node_modules/.pnpm/@wordpress+element@5.32.0/node_modules/@wordpress/element/build-module/raw-html.js":(A,_,a)=>{a.d(_,{Z:()=>m});var h=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function m({children:c,...u}){let f="";return h.Children.toArray(c).forEach(p=>{typeof p=="string"&&p.trim()!==""&&(f+=p)}),(0,h.createElement)("div",{dangerouslySetInnerHTML:{__html:f},...u})}},"../../../node_modules/.pnpm/@wordpress+element@5.32.0/node_modules/@wordpress/element/build-module/serialize.js":(A,_,a)=>{a.d(_,{ZP:()=>N});var h=a("../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs"),m=a("../../../node_modules/.pnpm/param-case@3.0.4/node_modules/param-case/dist.es2015/index.js"),c=a("../../../node_modules/.pnpm/@wordpress+escape-html@2.55.0/node_modules/@wordpress/escape-html/build-module/index.js"),u=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=a("../../../node_modules/.pnpm/@wordpress+element@5.32.0/node_modules/@wordpress/element/build-module/raw-html.js");const{Provider:p,Consumer:y}=(0,u.createContext)(void 0),k=(0,u.forwardRef)(()=>null),b=new Set(["string","boolean","number"]),n=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),s=new Set(["allowfullscreen","allowpaymentrequest","allowusermedia","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","typemustmatch"]),l=new Set(["autocapitalize","autocomplete","charset","contenteditable","crossorigin","decoding","dir","draggable","enctype","formenctype","formmethod","http-equiv","inputmode","kind","method","preload","scope","shape","spellcheck","translate","type","wrap"]),S=new Set(["animation","animationIterationCount","baselineShift","borderImageOutset","borderImageSlice","borderImageWidth","columnCount","cx","cy","fillOpacity","flexGrow","flexShrink","floodOpacity","fontWeight","gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart","lineHeight","opacity","order","orphans","r","rx","ry","shapeImageThreshold","stopOpacity","strokeDasharray","strokeDashoffset","strokeMiterlimit","strokeOpacity","strokeWidth","tabSize","widows","x","y","zIndex","zoom"]);function E(t,e){return e.some(i=>t.indexOf(i)===0)}function C(t){return t==="key"||t==="children"}function P(t,e){switch(t){case"style":return U(e)}return e}const v=["accentHeight","alignmentBaseline","arabicForm","baselineShift","capHeight","clipPath","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","dominantBaseline","enableBackground","fillOpacity","fillRule","floodColor","floodOpacity","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","horizAdvX","horizOriginX","imageRendering","letterSpacing","lightingColor","markerEnd","markerMid","markerStart","overlinePosition","overlineThickness","paintOrder","panose1","pointerEvents","renderingIntent","shapeRendering","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","textAnchor","textDecoration","textRendering","underlinePosition","underlineThickness","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","vHanging","vIdeographic","vMathematical","vectorEffect","vertAdvY","vertOriginX","vertOriginY","wordSpacing","writingMode","xmlnsXlink","xHeight"].reduce((t,e)=>(t[e.toLowerCase()]=e,t),{}),x=["allowReorder","attributeName","attributeType","autoReverse","baseFrequency","baseProfile","calcMode","clipPathUnits","contentScriptType","contentStyleType","diffuseConstant","edgeMode","externalResourcesRequired","filterRes","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","suppressContentEditableWarning","suppressHydrationWarning","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector"].reduce((t,e)=>(t[e.toLowerCase()]=e,t),{}),I=["xlink:actuate","xlink:arcrole","xlink:href","xlink:role","xlink:show","xlink:title","xlink:type","xml:base","xml:lang","xml:space","xmlns:xlink"].reduce((t,e)=>(t[e.replace(":","").toLowerCase()]=e,t),{});function R(t){switch(t){case"htmlFor":return"for";case"className":return"class"}const e=t.toLowerCase();return x[e]?x[e]:v[e]?(0,m.o)(v[e]):I[e]?I[e]:e}function M(t){return t.startsWith("--")?t:E(t,["ms","O","Moz","Webkit"])?"-"+(0,m.o)(t):(0,m.o)(t)}function L(t,e){return typeof e=="number"&&e!==0&&!S.has(t)?e+"px":e}function g(t,e,i={}){if(t==null||t===!1)return"";if(Array.isArray(t))return w(t,e,i);switch(typeof t){case"string":return(0,c.r)(t);case"number":return t.toString()}const{type:o,props:r}=t;switch(o){case u.StrictMode:case u.Fragment:return w(r.children,e,i);case f.Z:const{children:d,...T}=r;return O(Object.keys(T).length?"div":null,{...T,dangerouslySetInnerHTML:{__html:d}},e,i)}switch(typeof o){case"string":return O(o,r,e,i);case"function":return o.prototype&&typeof o.prototype.render=="function"?B(o,r,e,i):g(o(r,i),e,i)}switch(o&&o.$$typeof){case p.$$typeof:return w(r.children,r.value,i);case y.$$typeof:return g(r.children(e||o._currentValue),e,i);case k.$$typeof:return g(o.render(r),e,i)}return""}function O(t,e,i,o={}){let r="";if(t==="textarea"&&e.hasOwnProperty("value")){r=w(e.value,i,o);const{value:T,...j}=e;e=j}else e.dangerouslySetInnerHTML&&typeof e.dangerouslySetInnerHTML.__html=="string"?r=e.dangerouslySetInnerHTML.__html:typeof e.children!="undefined"&&(r=w(e.children,i,o));if(!t)return r;const d=D(e);return n.has(t)?"<"+t+d+"/>":"<"+t+d+">"+r+"</"+t+">"}function B(t,e,i,o={}){const r=new t(e,o);return typeof r.getChildContext=="function"&&Object.assign(o,r.getChildContext()),g(r.render(),i,o)}function w(t,e,i={}){let o="";t=Array.isArray(t)?t:[t];for(let r=0;r<t.length;r++){const d=t[r];o+=g(d,e,i)}return o}function D(t){let e="";for(const i in t){const o=R(i);if(!(0,c.$b)(o))continue;let r=P(i,t[i]);if(!b.has(typeof r)||C(i))continue;const d=s.has(o);if(d&&r===!1)continue;const T=d||E(i,["data-","aria-"])||l.has(o);typeof r=="boolean"&&!T||(e+=" "+o,!d&&(typeof r=="string"&&(r=(0,c.kb)(r)),e+='="'+r+'"'))}return e}function U(t){if(!(0,h.P)(t))return t;let e;for(const i in t){const o=t[i];if(o==null)continue;e?e+=";":e="";const r=M(i),d=L(i,o);e+=r+":"+d}return e}const N=g},"../../../node_modules/.pnpm/@wordpress+escape-html@2.55.0/node_modules/@wordpress/escape-html/build-module/index.js":(A,_,a)=>{a.d(_,{kb:()=>p,N2:()=>k,r:()=>y,$b:()=>b});function h(n){return n.replace(/>/g,"&gt;")}const m=/[\u007F-\u009F "'>/="\uFDD0-\uFDEF]/;function c(n){return n.replace(/&(?!([a-z0-9]+|#[0-9]+|#x[a-f0-9]+);)/gi,"&amp;")}function u(n){return n.replace(/"/g,"&quot;")}function f(n){return n.replace(/</g,"&lt;")}function p(n){return h(u(c(n)))}function y(n){return f(c(n))}function k(n){return f(n.replace(/&/g,"&amp;"))}function b(n){return!m.test(n)}}}]);})();
