"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2929],{"../../../node_modules/.pnpm/@emotion+css@11.13.0/node_modules/@emotion/css/dist/emotion-css.esm.js":(B,x,v)=>{v.d(x,{cx:()=>G});var a=v("../../../node_modules/.pnpm/@emotion+cache@11.13.1/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),f=v("../../../node_modules/.pnpm/@emotion+serialize@1.3.0/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js"),p=v("../../../node_modules/.pnpm/@emotion+utils@1.4.0/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");function l(_,h){if(_.inserted[h.name]===void 0)return _.insert("",h,_.sheet,!0)}function w(_,h,y){var I=[],D=(0,p.fp)(_,I,y);return I.length<2?y:D+h(I)}var j=function(h){var y=(0,a.Z)(h);y.sheet.speedy=function(U){this.isSpeedy=U},y.compat=!0;var I=function(){for(var M=arguments.length,R=new Array(M),S=0;S<M;S++)R[S]=arguments[S];var Z=(0,f.O)(R,y.registered,void 0);return(0,p.My)(y,Z,!1),y.key+"-"+Z.name},D=function(){for(var M=arguments.length,R=new Array(M),S=0;S<M;S++)R[S]=arguments[S];var Z=(0,f.O)(R,y.registered),Q="animation-"+Z.name;return l(y,{name:Z.name,styles:"@keyframes "+Q+"{"+Z.styles+"}"}),Q},F=function(){for(var M=arguments.length,R=new Array(M),S=0;S<M;S++)R[S]=arguments[S];var Z=(0,f.O)(R,y.registered);l(y,Z)},H=function(){for(var M=arguments.length,R=new Array(M),S=0;S<M;S++)R[S]=arguments[S];return w(y.registered,I,K(R))};return{css:I,cx:H,injectGlobal:F,keyframes:D,hydrate:function(M){M.forEach(function(R){y.inserted[R]=!0})},flush:function(){y.registered={},y.inserted={},y.sheet.flush()},sheet:y.sheet,cache:y,getRegisteredStyles:p.fp.bind(null,y.registered),merge:w.bind(null,y.registered,I)}},K=function _(h){for(var y="",I=0;I<h.length;I++){var D=h[I];if(D!=null){var F=void 0;switch(typeof D){case"boolean":break;case"object":{if(Array.isArray(D))F=_(D);else{F="";for(var H in D)D[H]&&H&&(F&&(F+=" "),F+=H)}break}default:F=D}F&&(y&&(y+=" "),y+=F)}}return y},g=j({key:"css"}),P=g.flush,T=g.hydrate,G=g.cx,V=g.merge,J=g.getRegisteredStyles,C=g.injectGlobal,W=g.keyframes,i=g.css,d=g.sheet,m=g.cache},"../../../node_modules/.pnpm/@wordpress+warning@3.5.0/node_modules/@wordpress/warning/build-module/index.js":(B,x,v)=>{v.d(x,{Z:()=>p});const a=new Set;function f(){return globalThis.SCRIPT_DEBUG===!0}function p(l){if(f()&&!a.has(l)){console.warn(l);try{throw Error(l)}catch(w){}a.add(l)}}},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":B=>{var x=function(d){return v(d)&&!a(d)};function v(i){return!!i&&typeof i=="object"}function a(i){var d=Object.prototype.toString.call(i);return d==="[object RegExp]"||d==="[object Date]"||l(i)}var f=typeof Symbol=="function"&&Symbol.for,p=f?Symbol.for("react.element"):60103;function l(i){return i.$$typeof===p}function w(i){return Array.isArray(i)?[]:{}}function j(i,d){return d.clone!==!1&&d.isMergeableObject(i)?C(w(i),i,d):i}function K(i,d,m){return i.concat(d).map(function(_){return j(_,m)})}function g(i,d){if(!d.customMerge)return C;var m=d.customMerge(i);return typeof m=="function"?m:C}function P(i){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(i).filter(function(d){return Object.propertyIsEnumerable.call(i,d)}):[]}function T(i){return Object.keys(i).concat(P(i))}function G(i,d){try{return d in i}catch(m){return!1}}function V(i,d){return G(i,d)&&!(Object.hasOwnProperty.call(i,d)&&Object.propertyIsEnumerable.call(i,d))}function J(i,d,m){var _={};return m.isMergeableObject(i)&&T(i).forEach(function(h){_[h]=j(i[h],m)}),T(d).forEach(function(h){V(i,h)||(G(i,h)&&m.isMergeableObject(d[h])?_[h]=g(h,m)(i[h],d[h],m):_[h]=j(d[h],m))}),_}function C(i,d,m){m=m||{},m.arrayMerge=m.arrayMerge||K,m.isMergeableObject=m.isMergeableObject||x,m.cloneUnlessOtherwiseSpecified=j;var _=Array.isArray(d),h=Array.isArray(i),y=_===h;return y?_?m.arrayMerge(i,d,m):J(i,d,m):j(d,m)}C.all=function(d,m){if(!Array.isArray(d))throw new Error("first argument should be an array");return d.reduce(function(_,h){return C(_,h,m)},{})};var W=C;B.exports=W},"../../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/es6/index.js":B=>{var x=typeof BigInt64Array!="undefined";B.exports=function v(a,f){if(a===f)return!0;if(a&&f&&typeof a=="object"&&typeof f=="object"){if(a.constructor!==f.constructor)return!1;var p,l,w;if(Array.isArray(a)){if(p=a.length,p!=f.length)return!1;for(l=p;l--!==0;)if(!v(a[l],f[l]))return!1;return!0}if(a instanceof Map&&f instanceof Map){if(a.size!==f.size)return!1;for(l of a.entries())if(!f.has(l[0]))return!1;for(l of a.entries())if(!v(l[1],f.get(l[0])))return!1;return!0}if(a instanceof Set&&f instanceof Set){if(a.size!==f.size)return!1;for(l of a.entries())if(!f.has(l[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(f)){if(p=a.length,p!=f.length)return!1;for(l=p;l--!==0;)if(a[l]!==f[l])return!1;return!0}if(a.constructor===RegExp)return a.source===f.source&&a.flags===f.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===f.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===f.toString();if(w=Object.keys(a),p=w.length,p!==Object.keys(f).length)return!1;for(l=p;l--!==0;)if(!Object.prototype.hasOwnProperty.call(f,w[l]))return!1;for(l=p;l--!==0;){var j=w[l];if(!v(a[j],f[j]))return!1}return!0}return a!==a&&f!==f}},"../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs":(B,x,v)=>{v.d(x,{P:()=>f});/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function a(p){return Object.prototype.toString.call(p)==="[object Object]"}function f(p){var l,w;return a(p)===!1?!1:(l=p.constructor,l===void 0?!0:(w=l.prototype,!(a(w)===!1||w.hasOwnProperty("isPrototypeOf")===!1)))}},"../../../node_modules/.pnpm/no-case@3.0.4/node_modules/no-case/dist.es2015/index.js":(B,x,v)=>{v.d(x,{B:()=>j});var a={tr:{regexp:/\u0130|\u0049|\u0049\u0307/g,map:{\u0130:"i",I:"\u0131",I\u0307:"i"}},az:{regexp:/\u0130/g,map:{\u0130:"i",I:"\u0131",I\u0307:"i"}},lt:{regexp:/\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,map:{I:"i\u0307",J:"j\u0307",\u012E:"\u012F\u0307",\u00CC:"i\u0307\u0300",\u00CD:"i\u0307\u0301",\u0128:"i\u0307\u0303"}}};function f(g,P){var T=a[P.toLowerCase()];return p(T?g.replace(T.regexp,function(G){return T.map[G]}):g)}function p(g){return g.toLowerCase()}var l=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],w=/[^A-Z0-9]+/gi;function j(g,P){P===void 0&&(P={});for(var T=P.splitRegexp,G=T===void 0?l:T,V=P.stripRegexp,J=V===void 0?w:V,C=P.transform,W=C===void 0?p:C,i=P.delimiter,d=i===void 0?" ":i,m=K(K(g,G,"$1\0$2"),J,"\0"),_=0,h=m.length;m.charAt(_)==="\0";)_++;for(;m.charAt(h-1)==="\0";)h--;return m.slice(_,h).split("\0").map(W).join(d)}function K(g,P,T){return P instanceof RegExp?g.replace(P,T):P.reduce(function(G,V){return G.replace(V,T)},g)}},"../../../node_modules/.pnpm/param-case@3.0.4/node_modules/param-case/dist.es2015/index.js":(B,x,v)=>{v.d(x,{o:()=>l});var a=v("../../../node_modules/.pnpm/tslib@2.5.0/node_modules/tslib/tslib.es6.js"),f=v("../../../node_modules/.pnpm/no-case@3.0.4/node_modules/no-case/dist.es2015/index.js");function p(w,j){return j===void 0&&(j={}),(0,f.B)(w,(0,a.pi)({delimiter:"."},j))}function l(w,j){return j===void 0&&(j={}),p(w,(0,a.pi)({delimiter:"-"},j))}},"../../../node_modules/.pnpm/tslib@2.5.0/node_modules/tslib/tslib.es6.js":(B,x,v)=>{v.d(x,{ZT:()=>f,pi:()=>p});var a=function(e,r){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(t[u]=n[u])},a(e,r)};function f(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");a(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var p=function(){return p=Object.assign||function(r){for(var t,n=1,u=arguments.length;n<u;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},p.apply(this,arguments)};function l(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,n=Object.getOwnPropertySymbols(e);u<n.length;u++)r.indexOf(n[u])<0&&Object.prototype.propertyIsEnumerable.call(e,n[u])&&(t[n[u]]=e[n[u]]);return t}function w(e,r,t,n){var u=arguments.length,o=u<3?r:n===null?n=Object.getOwnPropertyDescriptor(r,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,r,t,n);else for(var b=e.length-1;b>=0;b--)(s=e[b])&&(o=(u<3?s(o):u>3?s(r,t,o):s(r,t))||o);return u>3&&o&&Object.defineProperty(r,t,o),o}function j(e,r){return function(t,n){r(t,n,e)}}function K(e,r,t,n,u,o){function s(Y){if(Y!==void 0&&typeof Y!="function")throw new TypeError("Function expected");return Y}for(var b=n.kind,z=b==="getter"?"get":b==="setter"?"set":"value",c=!r&&e?n.static?e:e.prototype:null,O=r||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),A,E=!1,L=t.length-1;L>=0;L--){var N={};for(var $ in n)N[$]=$==="access"?{}:n[$];for(var $ in n.access)N.access[$]=n.access[$];N.addInitializer=function(Y){if(E)throw new TypeError("Cannot add initializers after decoration has completed");o.push(s(Y||null))};var X=(0,t[L])(b==="accessor"?{get:O.get,set:O.set}:O[z],N);if(b==="accessor"){if(X===void 0)continue;if(X===null||typeof X!="object")throw new TypeError("Object expected");(A=s(X.get))&&(O.get=A),(A=s(X.set))&&(O.set=A),(A=s(X.init))&&u.push(A)}else(A=s(X))&&(b==="field"?u.push(A):O[z]=A)}c&&Object.defineProperty(c,n.name,O),E=!0}function g(e,r,t){for(var n=arguments.length>2,u=0;u<r.length;u++)t=n?r[u].call(e,t):r[u].call(e);return n?t:void 0}function P(e){return typeof e=="symbol"?e:"".concat(e)}function T(e,r,t){return typeof r=="symbol"&&(r=r.description?"[".concat(r.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:t?"".concat(t," ",r):r})}function G(e,r){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,r)}function V(e,r,t,n){function u(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function b(O){try{c(n.next(O))}catch(A){s(A)}}function z(O){try{c(n.throw(O))}catch(A){s(A)}}function c(O){O.done?o(O.value):u(O.value).then(b,z)}c((n=n.apply(e,r||[])).next())})}function J(e,r){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,u,o,s;return s={next:b(0),throw:b(1),return:b(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function b(c){return function(O){return z([c,O])}}function z(c){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(t=0)),t;)try{if(n=1,u&&(o=c[0]&2?u.return:c[0]?u.throw||((o=u.return)&&o.call(u),0):u.next)&&!(o=o.call(u,c[1])).done)return o;switch(u=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,u=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){t.label=c[1];break}if(c[0]===6&&t.label<o[1]){t.label=o[1],o=c;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(c);break}o[2]&&t.ops.pop(),t.trys.pop();continue}c=r.call(e,t)}catch(O){c=[6,O],u=0}finally{n=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}var C=Object.create?function(e,r,t,n){n===void 0&&(n=t);var u=Object.getOwnPropertyDescriptor(r,t);(!u||("get"in u?!r.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,n,u)}:function(e,r,t,n){n===void 0&&(n=t),e[n]=r[t]};function W(e,r){for(var t in e)t!=="default"&&!Object.prototype.hasOwnProperty.call(r,t)&&C(r,e,t)}function i(e){var r=typeof Symbol=="function"&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function d(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var n=t.call(e),u,o=[],s;try{for(;(r===void 0||r-- >0)&&!(u=n.next()).done;)o.push(u.value)}catch(b){s={error:b}}finally{try{u&&!u.done&&(t=n.return)&&t.call(n)}finally{if(s)throw s.error}}return o}function m(){for(var e=[],r=0;r<arguments.length;r++)e=e.concat(d(arguments[r]));return e}function _(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),u=0,r=0;r<t;r++)for(var o=arguments[r],s=0,b=o.length;s<b;s++,u++)n[u]=o[s];return n}function h(e,r,t){if(t||arguments.length===2)for(var n=0,u=r.length,o;n<u;n++)(o||!(n in r))&&(o||(o=Array.prototype.slice.call(r,0,n)),o[n]=r[n]);return e.concat(o||Array.prototype.slice.call(r))}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function I(e,r,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t.apply(e,r||[]),u,o=[];return u={},s("next"),s("throw"),s("return"),u[Symbol.asyncIterator]=function(){return this},u;function s(E){n[E]&&(u[E]=function(L){return new Promise(function(N,$){o.push([E,L,N,$])>1||b(E,L)})})}function b(E,L){try{z(n[E](L))}catch(N){A(o[0][3],N)}}function z(E){E.value instanceof y?Promise.resolve(E.value.v).then(c,O):A(o[0][2],E)}function c(E){b("next",E)}function O(E){b("throw",E)}function A(E,L){E(L),o.shift(),o.length&&b(o[0][0],o[0][1])}}function D(e){var r,t;return r={},n("next"),n("throw",function(u){throw u}),n("return"),r[Symbol.iterator]=function(){return this},r;function n(u,o){r[u]=e[u]?function(s){return(t=!t)?{value:y(e[u](s)),done:!1}:o?o(s):s}:o}}function F(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e[Symbol.asyncIterator],t;return r?r.call(e):(e=typeof i=="function"?i(e):e[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(o){t[o]=e[o]&&function(s){return new Promise(function(b,z){s=e[o](s),u(b,z,s.done,s.value)})}}function u(o,s,b,z){Promise.resolve(z).then(function(c){o({value:c,done:b})},s)}}function H(e,r){return Object.defineProperty?Object.defineProperty(e,"raw",{value:r}):e.raw=r,e}var U=Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r};function M(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)t!=="default"&&Object.prototype.hasOwnProperty.call(e,t)&&C(r,e,t);return U(r,e),r}function R(e){return e&&e.__esModule?e:{default:e}}function S(e,r,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof r=="function"?e!==r||!n:!r.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(e):n?n.value:r.get(e)}function Z(e,r,t,n,u){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!u)throw new TypeError("Private accessor was defined without a setter");if(typeof r=="function"?e!==r||!u:!r.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?u.call(e,t):u?u.value=t:r.set(e,t),t}function Q(e,r){if(r===null||typeof r!="object"&&typeof r!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e=="function"?r===e:e.has(r)}}}]);})();
