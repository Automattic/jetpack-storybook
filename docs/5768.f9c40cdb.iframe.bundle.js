"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5768],{"../../../node_modules/.pnpm/@emotion+react@11.13.0_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(E,a,s)=>{s.d(a,{F4:()=>b,iv:()=>v});var f=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=s("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.1.0_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),i=s("../../../node_modules/.pnpm/@emotion+serialize@1.3.0/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js"),d=s("../../../node_modules/.pnpm/@emotion+cache@11.13.1/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),m=s("../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),h=s.n(m),y=function(r,o){var c=arguments;if(o==null||!hasOwn.call(o,"css"))return React.createElement.apply(void 0,c);var t=c.length,n=new Array(t);n[0]=Emotion,n[1]=createEmotionProps(r,o);for(var e=2;e<t;e++)n[e]=c[e];return React.createElement.apply(null,n)},k=null;function v(){for(var p=arguments.length,r=new Array(p),o=0;o<p;o++)r[o]=arguments[o];return(0,i.O)(r)}var b=function(){var r=v.apply(void 0,arguments),o="animation-"+r.name;return{name:o,styles:"@keyframes "+o+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},O=function p(r){for(var o=r.length,c=0,t="";c<o;c++){var n=r[c];if(n!=null){var e=void 0;switch(typeof n){case"boolean":break;case"object":{if(Array.isArray(n))e=p(n);else{e="";for(var u in n)n[u]&&u&&(e&&(e+=" "),e+=u)}break}default:e=n}e&&(t&&(t+=" "),t+=e)}}return t};function P(p,r,o){var c=[],t=getRegisteredStyles(p,c,o);return c.length<2?o:t+r(c)}var w=function(r){var o=r.cache,c=r.serializedArr;return useInsertionEffectAlwaysWithSyncFallback(function(){for(var t=0;t<c.length;t++)insertStyles(o,c[t],!1)}),null},S=null},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js":(E,a,s)=>{s.d(a,{D:()=>h});const f="#fff",l={900:"#1e1e1e",800:"#2f2f2f",700:"#757575",600:"#949494",400:"#ccc",300:"#ddd",200:"#e0e0e0",100:"#f0f0f0"},i={yellow:"#f0b849",red:"#d94f4f",green:"#4ab866"},d={accent:"var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))",accentDarker10:"var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #2145e6))",accentDarker20:"var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6))",accentInverted:`var(--wp-components-color-accent-inverted, ${f})`,background:`var(--wp-components-color-background, ${f})`,foreground:`var(--wp-components-color-foreground, ${l[900]})`,foregroundInverted:`var(--wp-components-color-foreground-inverted, ${f})`,gray:{900:`var(--wp-components-color-foreground, ${l[900]})`,800:`var(--wp-components-color-gray-800, ${l[800]})`,700:`var(--wp-components-color-gray-700, ${l[700]})`,600:`var(--wp-components-color-gray-600, ${l[600]})`,400:`var(--wp-components-color-gray-400, ${l[400]})`,300:`var(--wp-components-color-gray-300, ${l[300]})`,200:`var(--wp-components-color-gray-200, ${l[200]})`,100:`var(--wp-components-color-gray-100, ${l[100]})`}},m={background:d.background,backgroundDisabled:d.gray[100],border:d.gray[600],borderHover:d.gray[700],borderFocus:d.accent,borderDisabled:d.gray[400],textDisabled:d.gray[600],darkGrayPlaceholder:`color-mix(in srgb, ${d.foreground}, transparent 38%)`,lightGrayPlaceholder:`color-mix(in srgb, ${d.background}, transparent 35%)`},h=Object.freeze({gray:l,white:f,alert:i,theme:d,ui:m});var y=null},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js":(E,a,s)=>{s.d(a,{D:()=>l});const f="4px";function l(i){var m,h;if(typeof i=="undefined")return;if(!i)return"0";const d=typeof i=="number"?i:Number(i);return typeof window!="undefined"&&((h=(m=window.CSS)==null?void 0:m.supports)!=null&&h.call(m,"margin",i.toString()))||Number.isNaN(d)?i.toString():`calc(${f} * ${i})`}},"../../../node_modules/.pnpm/@wordpress+data@10.5.0_react@18.3.1/node_modules/@wordpress/data/build-module/dispatch.js":(E,a,s)=>{s.d(a,{W:()=>l});var f=s("../../../node_modules/.pnpm/@wordpress+data@10.5.0_react@18.3.1/node_modules/@wordpress/data/build-module/default-registry.js");function l(i){return f.Z.dispatch(i)}},"../../../node_modules/.pnpm/@wordpress+data@10.5.0_react@18.3.1/node_modules/@wordpress/data/build-module/select.js":(E,a,s)=>{s.d(a,{Y:()=>l});var f=s("../../../node_modules/.pnpm/@wordpress+data@10.5.0_react@18.3.1/node_modules/@wordpress/data/build-module/default-registry.js");function l(i){return f.Z.select(i)}},"../../../node_modules/.pnpm/@wordpress+element@6.5.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(E,a,s)=>{s.d(a,{Z:()=>p});var f=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let l,i,d,m;const h=/<(\/)?(\w+)\s*(\/)?>/g;function y(r,o,c,t,n){return{element:r,tokenStart:o,tokenLength:c,prevOffset:t,leadingTextStart:n,children:[]}}const k=(r,o)=>{if(l=r,i=0,d=[],m=[],h.lastIndex=0,!v(o))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(b(o));return(0,f.createElement)(f.Fragment,null,...d)},v=r=>{const o=typeof r=="object",c=o&&Object.values(r);return o&&c.length&&c.every(t=>(0,f.isValidElement)(t))};function b(r){const o=O(),[c,t,n,e]=o,u=m.length,_=n>i?i:null;if(!r[t])return P(),!1;switch(c){case"no-more-tokens":if(u!==0){const{leadingTextStart:$,tokenStart:j}=m.pop();d.push(l.substr($,j))}return P(),!1;case"self-closed":return u===0?(_!==null&&d.push(l.substr(_,n-_)),d.push(r[t]),i=n+e,!0):(w(y(r[t],n,e)),i=n+e,!0);case"opener":return m.push(y(r[t],n,e,n+e,_)),i=n+e,!0;case"closer":if(u===1)return S(n),i=n+e,!0;const g=m.pop(),R=l.substr(g.prevOffset,n-g.prevOffset);g.children.push(R),g.prevOffset=n+e;const T=y(g.element,g.tokenStart,g.tokenLength,n+e);return T.children=g.children,w(T),i=n+e,!0;default:return P(),!1}}function O(){const r=h.exec(l);if(r===null)return["no-more-tokens"];const o=r.index,[c,t,n,e]=r,u=c.length;return e?["self-closed",n,o,u]:t?["closer",n,o,u]:["opener",n,o,u]}function P(){const r=l.length-i;r!==0&&d.push(l.substr(i,r))}function w(r){const{element:o,tokenStart:c,tokenLength:t,prevOffset:n,children:e}=r,u=m[m.length-1],_=l.substr(u.prevOffset,c-u.prevOffset);_&&u.children.push(_),u.children.push((0,f.cloneElement)(o,null,...e)),u.prevOffset=n||c+t}function S(r){const{element:o,leadingTextStart:c,prevOffset:t,tokenStart:n,children:e}=m.pop(),u=r?l.substr(t,r-t):l.substr(t);u&&e.push(u),c!==null&&d.push(l.substr(c,n-c)),d.push((0,f.cloneElement)(o,null,...e))}const p=k},"../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(E,a,s)=>{var f=s("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"),l={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},d={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},m={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},h={};h[f.ForwardRef]=d,h[f.Memo]=m;function y(p){return f.isMemo(p)?m:h[p.$$typeof]||l}var k=Object.defineProperty,v=Object.getOwnPropertyNames,b=Object.getOwnPropertySymbols,O=Object.getOwnPropertyDescriptor,P=Object.getPrototypeOf,w=Object.prototype;function S(p,r,o){if(typeof r!="string"){if(w){var c=P(r);c&&c!==w&&S(p,c,o)}var t=v(r);b&&(t=t.concat(b(r)));for(var n=y(p),e=y(r),u=0;u<t.length;++u){var _=t[u];if(!i[_]&&!(o&&o[_])&&!(e&&e[_])&&!(n&&n[_])){var g=O(r,_);try{k(p,_,g)}catch(R){}}}}return p}E.exports=S},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":(E,a)=>{/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=typeof Symbol=="function"&&Symbol.for,f=s?Symbol.for("react.element"):60103,l=s?Symbol.for("react.portal"):60106,i=s?Symbol.for("react.fragment"):60107,d=s?Symbol.for("react.strict_mode"):60108,m=s?Symbol.for("react.profiler"):60114,h=s?Symbol.for("react.provider"):60109,y=s?Symbol.for("react.context"):60110,k=s?Symbol.for("react.async_mode"):60111,v=s?Symbol.for("react.concurrent_mode"):60111,b=s?Symbol.for("react.forward_ref"):60112,O=s?Symbol.for("react.suspense"):60113,P=s?Symbol.for("react.suspense_list"):60120,w=s?Symbol.for("react.memo"):60115,S=s?Symbol.for("react.lazy"):60116,p=s?Symbol.for("react.block"):60121,r=s?Symbol.for("react.fundamental"):60117,o=s?Symbol.for("react.responder"):60118,c=s?Symbol.for("react.scope"):60119;function t(e){if(typeof e=="object"&&e!==null){var u=e.$$typeof;switch(u){case f:switch(e=e.type,e){case k:case v:case i:case m:case d:case O:return e;default:switch(e=e&&e.$$typeof,e){case y:case b:case S:case w:case h:return e;default:return u}}case l:return u}}}function n(e){return t(e)===v}a.AsyncMode=k,a.ConcurrentMode=v,a.ContextConsumer=y,a.ContextProvider=h,a.Element=f,a.ForwardRef=b,a.Fragment=i,a.Lazy=S,a.Memo=w,a.Portal=l,a.Profiler=m,a.StrictMode=d,a.Suspense=O,a.isAsyncMode=function(e){return n(e)||t(e)===k},a.isConcurrentMode=n,a.isContextConsumer=function(e){return t(e)===y},a.isContextProvider=function(e){return t(e)===h},a.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===f},a.isForwardRef=function(e){return t(e)===b},a.isFragment=function(e){return t(e)===i},a.isLazy=function(e){return t(e)===S},a.isMemo=function(e){return t(e)===w},a.isPortal=function(e){return t(e)===l},a.isProfiler=function(e){return t(e)===m},a.isStrictMode=function(e){return t(e)===d},a.isSuspense=function(e){return t(e)===O},a.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===i||e===v||e===m||e===d||e===O||e===P||typeof e=="object"&&e!==null&&(e.$$typeof===S||e.$$typeof===w||e.$$typeof===h||e.$$typeof===y||e.$$typeof===b||e.$$typeof===r||e.$$typeof===o||e.$$typeof===c||e.$$typeof===p)},a.typeOf=t},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":(E,a,s)=>{E.exports=s("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js")}}]);})();
