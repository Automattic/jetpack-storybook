(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6282],{"../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/typeof.js":(F,o,l)=>{"use strict";l.d(o,{Z:()=>_});function _(d){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},_(d)}},"../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/higher-order/compose.js":(F,o,l)=>{"use strict";l.d(o,{Z:()=>f});var _=l("../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/higher-order/pipe.js");const f=(0,_.d)(!0)},"../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/higher-order/pipe.js":(F,o,l)=>{"use strict";l.d(o,{Z:()=>f,d:()=>_});const _=(w=!1)=>(...c)=>(...u)=>{const n=c.flat();return w&&n.reverse(),n.reduce((a,i)=>[i(...a)],u)[0]},f=_()},"../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/registry-provider/context.js":(F,o,l)=>{"use strict";l.d(o,{ZP:()=>n,_y:()=>f,yE:()=>u});var _=l("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=l("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");const f=(0,_.createContext)(d.Z),{Consumer:w,Provider:c}=f,u=w,n=c},"../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js":(F,o,l)=>{"use strict";l.d(o,{Z:()=>f});var _=l("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=l("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/registry-provider/context.js");function f(){return(0,_.useContext)(d._y)}},"../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js":(F,o,l)=>{"use strict";l.d(o,{Z:()=>d});var _=l("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/registry.js");const d=(0,_.p)()},"../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js":(F,o,l)=>{"use strict";l.d(o,{M:()=>_,R:()=>d});function _(f){const w=(...c)=>f(w.registry.select)(...c);return w.isRegistrySelector=!0,w}function d(f){return f.isRegistryControl=!0,f}},"../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/lock-unlock.js":(F,o,l)=>{"use strict";l.d(o,{U:()=>f,d:()=>d});var _=l("../../../node_modules/.pnpm/@wordpress+private-apis@0.19.0/node_modules/@wordpress/private-apis/build-module/implementation.js");const{lock:d,unlock:f}=(0,_.es)("I know using unstable features means my plugin or theme will inevitably break on the next WordPress release.","@wordpress/data")},"../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js":(F,o,l)=>{"use strict";l.d(o,{Z:()=>at});var _={};l.r(_),l.d(_,{getCachedResolvers:()=>Qe,getIsResolving:()=>He,getResolutionError:()=>Je,getResolutionState:()=>se,hasFinishedResolution:()=>ze,hasResolutionFailed:()=>$e,hasResolvingSelectors:()=>qe,hasStartedResolution:()=>Ee,isResolving:()=>Ye});var d={};l.r(d),l.d(d,{failResolution:()=>Ae,failResolutions:()=>rt,finishResolution:()=>je,finishResolutions:()=>tt,invalidateResolution:()=>nt,invalidateResolutionForStore:()=>ot,invalidateResolutionForStoreSelector:()=>st,startResolution:()=>Oe,startResolutions:()=>et});var f=l("../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/typeof.js");function w(e,t){if((0,f.Z)(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var s=r.call(e,t||"default");if((0,f.Z)(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function c(e){var t=w(e,"string");return(0,f.Z)(t)==="symbol"?t:String(t)}function u(e,t,r){return t=c(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(m){return Object.getOwnPropertyDescriptor(e,m).enumerable})),r.push.apply(r,s)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(s){u(e,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})}return e}function i(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var p=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),g=function(){return Math.random().toString(36).substring(7).split("").join(".")},y={INIT:"@@redux/INIT"+g(),REPLACE:"@@redux/REPLACE"+g(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+g()}};function A(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function h(e){if(e===void 0)return"undefined";if(e===null)return"null";var t=typeof e;switch(t){case"boolean":case"string":case"number":case"symbol":case"function":return t}if(Array.isArray(e))return"array";if(R(e))return"date";if(C(e))return"error";var r=O(e);switch(r){case"Symbol":case"Promise":case"WeakMap":case"WeakSet":case"Map":case"Set":return r}return t.slice(8,-1).toLowerCase().replace(/\s/g,"")}function O(e){return typeof e.constructor=="function"?e.constructor.name:null}function C(e){return e instanceof Error||typeof e.message=="string"&&e.constructor&&typeof e.constructor.stackTraceLimit=="number"}function R(e){return e instanceof Date?!0:typeof e.toDateString=="function"&&typeof e.getDate=="function"&&typeof e.setDate=="function"}function S(e){var t=typeof e;return t}function L(e,t,r){var s;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(i(0));if(typeof t=="function"&&typeof r=="undefined"&&(r=t,t=void 0),typeof r!="undefined"){if(typeof r!="function")throw new Error(i(1));return r(L)(e,t)}if(typeof e!="function")throw new Error(i(2));var m=e,P=t,T=[],b=T,N=!1;function V(){b===T&&(b=T.slice())}function I(){if(N)throw new Error(i(3));return P}function Z(K){if(typeof K!="function")throw new Error(i(4));if(N)throw new Error(i(5));var q=!0;return V(),b.push(K),function(){if(q){if(N)throw new Error(i(6));q=!1,V();var G=b.indexOf(K);b.splice(G,1),T=null}}}function W(K){if(!A(K))throw new Error(i(7));if(typeof K.type=="undefined")throw new Error(i(8));if(N)throw new Error(i(9));try{N=!0,P=m(P,K)}finally{N=!1}for(var q=T=b,Y=0;Y<q.length;Y++){var G=q[Y];G()}return K}function Q(K){if(typeof K!="function")throw new Error(i(10));m=K,W({type:y.REPLACE})}function J(){var K,q=Z;return K={subscribe:function(G){if(typeof G!="object"||G===null)throw new Error(i(11));function oe(){G.next&&G.next(I())}oe();var te=q(oe);return{unsubscribe:te}}},K[p]=function(){return this},K}return W({type:y.INIT}),s={dispatch:W,subscribe:Z,getState:I,replaceReducer:Q},s[p]=J,s}var v=null;function U(e){typeof console!="undefined"&&typeof console.error=="function"&&console.error(e);try{throw new Error(e)}catch(t){}}function k(e,t,r,s){var m=Object.keys(t),P=r&&r.type===y.INIT?"preloadedState argument passed to createStore":"previous state received by the reducer";if(m.length===0)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!A(e))return"The "+P+' has unexpected type of "'+S(e)+'". Expected argument to be an object with the following '+('keys: "'+m.join('", "')+'"');var T=Object.keys(e).filter(function(b){return!t.hasOwnProperty(b)&&!s[b]});if(T.forEach(function(b){s[b]=!0}),!(r&&r.type===y.REPLACE)&&T.length>0)return"Unexpected "+(T.length>1?"keys":"key")+" "+('"'+T.join('", "')+'" found in '+P+". ")+"Expected to find one of the known reducer keys instead: "+('"'+m.join('", "')+'". Unexpected keys will be ignored.')}function D(e){Object.keys(e).forEach(function(t){var r=e[t],s=r(void 0,{type:y.INIT});if(typeof s=="undefined")throw new Error(i(12));if(typeof r(void 0,{type:y.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error(i(13))})}function H(e){for(var t=Object.keys(e),r={},s=0;s<t.length;s++){var m=t[s];typeof e[m]=="function"&&(r[m]=e[m])}var P=Object.keys(r),T,b;try{D(r)}catch(N){b=N}return function(V,I){if(V===void 0&&(V={}),b)throw b;if(!1)var Z;for(var W=!1,Q={},J=0;J<P.length;J++){var K=P[J],q=r[K],Y=V[K],G=q(Y,I);if(typeof G=="undefined"){var oe=I&&I.type;throw new Error(i(14))}Q[K]=G,W=W||G!==Y}return W=W||P.length!==Object.keys(V).length,W?Q:V}}function ee(e,t){return function(){return t(e.apply(this,arguments))}}function z(e,t){if(typeof e=="function")return ee(e,t);if(typeof e!="object"||e===null)throw new Error(i(16));var r={};for(var s in e){var m=e[s];typeof m=="function"&&(r[s]=ee(m,t))}return r}function ae(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(s){return s}:t.length===1?t[0]:t.reduce(function(s,m){return function(){return s(m.apply(void 0,arguments))}})}function ue(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(s){return function(){var m=s.apply(void 0,arguments),P=function(){throw new Error(i(15))},T={getState:m.getState,dispatch:function(){return P.apply(void 0,arguments)}},b=t.map(function(N){return N(T)});return P=ae.apply(void 0,b)(m.dispatch),a(a({},m),{},{dispatch:P})}}}var E=l("../../../node_modules/.pnpm/turbo-combine-reducers@1.0.2/node_modules/turbo-combine-reducers/index.js"),j=l.n(E),M=l("../../../node_modules/.pnpm/equivalent-key-map@0.2.2/node_modules/equivalent-key-map/equivalent-key-map.js"),$=l.n(M);function ce(e){return!!e&&typeof e[Symbol.iterator]=="function"&&typeof e.next=="function"}var le=l("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/index.js");function ie(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}var Le=l("../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs");function he(e){return(0,Le.P)(e)&&typeof e.type=="string"}function Me(e,t){return he(e)&&e.type===t}function ke(e={},t){const r=Object.entries(e).map(([P,T])=>(b,N,V,I,Z)=>{if(!Me(b,P))return!1;const W=T(b);return ie(W)?W.then(I,Z):I(W),!0}),s=(P,T)=>he(P)?(t(P),T(),!0):!1;r.push(s);const m=(0,le.create)(r);return P=>new Promise((T,b)=>m(P,N=>{he(N)&&t(N),T(N)},b))}function Ue(e={}){return t=>{const r=ke(e,t.dispatch);return s=>m=>ce(m)?r(m):s(m)}}var Ne=l("../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/higher-order/compose.js"),_e=l("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const ve="@@data/SELECT",we="@@data/RESOLVE_SELECT",Se="@@data/DISPATCH";function ge(e){return e!==null&&typeof e=="object"}function De(e,t,...r){return{type:ve,storeKey:ge(e)?e.name:e,selectorName:t,args:r}}function Fe(e,t,...r){return{type:we,storeKey:ge(e)?e.name:e,selectorName:t,args:r}}function We(e,t,...r){return{type:Se,storeKey:ge(e)?e.name:e,actionName:t,args:r}}const wt={select:De,resolveSelect:Fe,dispatch:We},Ke={[ve]:(0,_e.R)(e=>({storeKey:t,selectorName:r,args:s})=>e.select(t)[r](...s)),[we]:(0,_e.R)(e=>({storeKey:t,selectorName:r,args:s})=>{const m=e.select(t)[r].hasResolver?"resolveSelect":"select";return e[m](t)[r](...s)}),[Se]:(0,_e.R)(e=>({storeKey:t,actionName:r,args:s})=>e.dispatch(t)[r](...s))};var de=l("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/lock-unlock.js");const xe=()=>e=>t=>ie(t)?t.then(r=>{if(r)return e(r)}):e(t);var Re=l("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/store/index.js");const Ze=(e,t)=>()=>r=>s=>{const m=e.select(Re.Z).getCachedResolvers(t);return Object.entries(m).forEach(([P,T])=>{var N,V,I;const b=(I=(V=(N=e.stores)==null?void 0:N[t])==null?void 0:V.resolvers)==null?void 0:I[P];!b||!b.shouldInvalidate||T.forEach((Z,W)=>{(Z==null?void 0:Z.status)!=="finished"&&(Z==null?void 0:Z.status)!=="error"||!b.shouldInvalidate(s,...W)||e.dispatch(Re.Z).invalidateResolution(t,P,W)})}),r(s)};function Be(e){return()=>t=>r=>typeof r=="function"?r(e):t(r)}const Ve=e=>t=>(r={},s)=>{const m=s[e];if(m===void 0)return r;const P=t(r[m],s);return P===r[m]?r:{...r,[m]:P}};function re(e){if(e==null)return[];const t=e.length;let r=t;for(;r>0&&e[r-1]===void 0;)r--;return r===t?e:e.slice(0,r)}const Ge=Ve("selectorName")((e=new($()),t)=>{switch(t.type){case"START_RESOLUTION":{const r=new($())(e);return r.set(re(t.args),{status:"resolving"}),r}case"FINISH_RESOLUTION":{const r=new($())(e);return r.set(re(t.args),{status:"finished"}),r}case"FAIL_RESOLUTION":{const r=new($())(e);return r.set(re(t.args),{status:"error",error:t.error}),r}case"START_RESOLUTIONS":{const r=new($())(e);for(const s of t.args)r.set(re(s),{status:"resolving"});return r}case"FINISH_RESOLUTIONS":{const r=new($())(e);for(const s of t.args)r.set(re(s),{status:"finished"});return r}case"FAIL_RESOLUTIONS":{const r=new($())(e);return t.args.forEach((s,m)=>{const P={status:"error",error:void 0},T=t.errors[m];T&&(P.error=T),r.set(re(s),P)}),r}case"INVALIDATE_RESOLUTION":{const r=new($())(e);return r.delete(re(t.args)),r}}return e}),Xe=(e={},t)=>{switch(t.type){case"INVALIDATE_RESOLUTION_FOR_STORE":return{};case"INVALIDATE_RESOLUTION_FOR_STORE_SELECTOR":{if(t.selectorName in e){const{[t.selectorName]:r,...s}=e;return s}return e}case"START_RESOLUTION":case"FINISH_RESOLUTION":case"FAIL_RESOLUTION":case"START_RESOLUTIONS":case"FINISH_RESOLUTIONS":case"FAIL_RESOLUTIONS":case"INVALIDATE_RESOLUTION":return Ge(e,t)}return e};function se(e,t,r){const s=e[t];if(s)return s.get(re(r))}function He(e,t,r){const s=se(e,t,r);return s&&s.status==="resolving"}function Ee(e,t,r){return se(e,t,r)!==void 0}function ze(e,t,r){var m;const s=(m=se(e,t,r))==null?void 0:m.status;return s==="finished"||s==="error"}function $e(e,t,r){var s;return((s=se(e,t,r))==null?void 0:s.status)==="error"}function Je(e,t,r){const s=se(e,t,r);return(s==null?void 0:s.status)==="error"?s.error:null}function Ye(e,t,r){var s;return((s=se(e,t,r))==null?void 0:s.status)==="resolving"}function Qe(e){return e}function qe(e){return Object.values(e).some(t=>Array.from(t._map.values()).some(r=>{var s;return((s=r[1])==null?void 0:s.status)==="resolving"}))}function Oe(e,t){return{type:"START_RESOLUTION",selectorName:e,args:t}}function je(e,t){return{type:"FINISH_RESOLUTION",selectorName:e,args:t}}function Ae(e,t,r){return{type:"FAIL_RESOLUTION",selectorName:e,args:t,error:r}}function et(e,t){return{type:"START_RESOLUTIONS",selectorName:e,args:t}}function tt(e,t){return{type:"FINISH_RESOLUTIONS",selectorName:e,args:t}}function rt(e,t,r){return{type:"FAIL_RESOLUTIONS",selectorName:e,args:t,errors:r}}function nt(e,t){return{type:"INVALIDATE_RESOLUTION",selectorName:e,args:t}}function ot(){return{type:"INVALIDATE_RESOLUTION_FOR_STORE"}}function st(e){return{type:"INVALIDATE_RESOLUTION_FOR_STORE_SELECTOR",selectorName:e}}const ye=e=>{const t=[...e];for(let r=t.length-1;r>=0;r--)t[r]===void 0&&t.splice(r,1);return t},ne=(e,t)=>Object.fromEntries(Object.entries(e!=null?e:{}).map(([r,s])=>[r,t(s,r)])),ut=(e,t)=>t instanceof Map?Object.fromEntries(t):t;function it(){const e={};return{isRunning(t,r){return e[t]&&e[t].get(ye(r))},clear(t,r){e[t]&&e[t].delete(ye(r))},markAsRunning(t,r){e[t]||(e[t]=new($())),e[t].set(ye(r),!0)}}}function Pe(e){const t=new WeakMap;return{get(r,s){let m=t.get(r);return m||(m=e(r,s),t.set(r,m)),m}}}function at(e,t){const r={},s={},m={privateActions:r,registerPrivateActions:T=>{Object.assign(r,T)},privateSelectors:s,registerPrivateSelectors:T=>{Object.assign(s,T)}},P={name:e,instantiate:T=>{const b=new Set,N=t.reducer,I=ct(e,t,T,{registry:T,get dispatch(){return q},get select(){return Te},get resolveSelect(){return Ie()}});(0,de.d)(I,m);const Z=it();function W(B){return(...x)=>Promise.resolve(I.dispatch(B(...x)))}const Q={...ne(d,W),...ne(t.actions,W)},J=Pe(W),K=new Proxy(()=>{},{get:(B,x)=>{const X=r[x];return X?J.get(X,x):Q[x]}}),q=new Proxy(K,{apply:(B,x,[X])=>I.dispatch(X)});(0,de.d)(Q,K);const Y=t.resolvers?ft(t.resolvers):{};function G(B,x){B.isRegistrySelector&&(B.registry=T);const X=(...bt)=>{const vt=I.__unstableOriginalGetState();return B(vt.root,...bt)},me=Y[x];return me?pt(X,x,me,I,Z):(X.hasResolver=!1,X)}function oe(B){const x=(...X)=>{const me=I.__unstableOriginalGetState();return B(me.metadata,...X)};return x.hasResolver=!1,x}const te={...ne(_,oe),...ne(t.selectors,G)},fe=Pe(G);for(const[B,x]of Object.entries(s))fe.get(x,B);const pe=new Proxy(()=>{},{get:(B,x)=>{const X=s[x];return X?fe.get(X,x):te[x]}}),Te=new Proxy(pe,{apply:(B,x,[X])=>X(I.__unstableOriginalGetState())});(0,de.d)(te,pe);const be=lt(te,I),mt=dt(te,I),ht=()=>te,_t=()=>Q,Ie=()=>be,gt=()=>mt;I.__unstableOriginalGetState=I.getState,I.getState=()=>I.__unstableOriginalGetState().root;const yt=I&&(B=>(b.add(B),()=>b.delete(B)));let Ce=I.__unstableOriginalGetState();return I.subscribe(()=>{const B=I.__unstableOriginalGetState(),x=B!==Ce;if(Ce=B,x)for(const X of b)X()}),{reducer:N,store:I,actions:Q,selectors:te,resolvers:Y,getSelectors:ht,getResolveSelectors:Ie,getSuspendSelectors:gt,getActions:_t,subscribe:yt}}};return(0,de.d)(P,m),P}function ct(e,t,r,s){const m={...t.controls,...Ke},P=ne(m,Z=>Z.isRegistryControl?Z(r):Z),T=[Ze(r,e),xe,Ue(P),Be(s)],b=[ue(...T)];typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION__&&b.push(window.__REDUX_DEVTOOLS_EXTENSION__({name:e,instanceId:e,serialize:{replacer:ut}}));const{reducer:N,initialState:V}=t,I=j()({metadata:Xe,root:N});return L(I,{root:V},(0,Ne.Z)(b))}function lt(e,t){const{getIsResolving:r,hasStartedResolution:s,hasFinishedResolution:m,hasResolutionFailed:P,isResolving:T,getCachedResolvers:b,getResolutionState:N,getResolutionError:V,hasResolvingSelectors:I,...Z}=e;return ne(Z,(W,Q)=>W.hasResolver?(...J)=>new Promise((K,q)=>{const Y=()=>e.hasFinishedResolution(Q,J),G=pe=>{if(e.hasResolutionFailed(Q,J)){const be=e.getResolutionError(Q,J);q(be)}else K(pe)},oe=()=>W.apply(null,J),te=oe();if(Y())return G(te);const fe=t.subscribe(()=>{Y()&&(fe(),G(oe()))})}):async(...J)=>W.apply(null,J))}function dt(e,t){return ne(e,(r,s)=>r.hasResolver?(...m)=>{const P=r.apply(null,m);if(e.hasFinishedResolution(s,m)){if(e.hasResolutionFailed(s,m))throw e.getResolutionError(s,m);return P}throw new Promise(T=>{const b=t.subscribe(()=>{e.hasFinishedResolution(s,m)&&(T(),b())})})}:r)}function ft(e){return ne(e,t=>t.fulfill?t:{...t,fulfill:t})}function pt(e,t,r,s,m){function P(b){const N=s.getState();if(m.isRunning(t,b)||typeof r.isFulfilled=="function"&&r.isFulfilled(N,...b))return;const{metadata:V}=s.__unstableOriginalGetState();Ee(V,t,b)||(m.markAsRunning(t,b),setTimeout(async()=>{m.clear(t,b),s.dispatch(Oe(t,b));try{const I=r.fulfill(...b);I&&await s.dispatch(I),s.dispatch(je(t,b))}catch(I){s.dispatch(Ae(t,b,I))}},0))}const T=(...b)=>(P(b),e(...b));return T.hasResolver=!0,T}},"../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/registry.js":(F,o,l)=>{"use strict";l.d(o,{p:()=>n});var _=l("../../../node_modules/.pnpm/@wordpress+deprecated@3.38.0/node_modules/@wordpress/deprecated/build-module/index.js"),d=l("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js"),f=l("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/store/index.js");function w(){let a=!1,i=!1;const p=new Set,g=()=>Array.from(p).forEach(y=>y());return{get isPaused(){return a},subscribe(y){return p.add(y),()=>p.delete(y)},pause(){a=!0},resume(){a=!1,i&&(i=!1,g())},emit(){if(a){i=!0;return}g()}}}var c=l("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/lock-unlock.js");function u(a){return typeof a=="string"?a:a.name}function n(a={},i=null){const p={},g=w();let y=null;function A(){g.emit()}const h=(E,j)=>{if(!j)return g.subscribe(E);const M=u(j),$=p[M];return $?$.subscribe(E):i?i.subscribe(E,j):g.subscribe(E)};function O(E){const j=u(E);y==null||y.add(j);const M=p[j];return M?M.getSelectors():i==null?void 0:i.select(j)}function C(E,j){y=new Set;try{return E.call(this)}finally{j.current=Array.from(y),y=null}}function R(E){const j=u(E);y==null||y.add(j);const M=p[j];return M?M.getResolveSelectors():i&&i.resolveSelect(j)}function S(E){const j=u(E);y==null||y.add(j);const M=p[j];return M?M.getSuspendSelectors():i&&i.suspendSelect(j)}function L(E){const j=u(E),M=p[j];return M?M.getActions():i&&i.dispatch(j)}function v(E){return Object.fromEntries(Object.entries(E).map(([j,M])=>typeof M!="function"?[j,M]:[j,function(){return z[j].apply(null,arguments)}]))}function U(E,j){if(p[E])return console.error('Store "'+E+'" is already registered.'),p[E];const M=j();if(typeof M.getSelectors!="function")throw new TypeError("store.getSelectors must be a function");if(typeof M.getActions!="function")throw new TypeError("store.getActions must be a function");if(typeof M.subscribe!="function")throw new TypeError("store.subscribe must be a function");M.emitter=w();const $=M.subscribe;if(M.subscribe=ce=>{const le=M.emitter.subscribe(ce),ie=$(()=>{if(M.emitter.isPaused){M.emitter.emit();return}ce()});return()=>{ie==null||ie(),le==null||le()}},p[E]=M,M.subscribe(A),i)try{(0,c.U)(M.store).registerPrivateActions((0,c.U)(i).privateActionsOf(E)),(0,c.U)(M.store).registerPrivateSelectors((0,c.U)(i).privateSelectorsOf(E))}catch(ce){}return M}function k(E){U(E.name,()=>E.instantiate(z))}function D(E,j){(0,_.Z)("wp.data.registerGenericStore",{since:"5.9",alternative:"wp.data.register( storeDescriptor )"}),U(E,()=>j)}function H(E,j){if(!j.reducer)throw new TypeError("Must specify store reducer");return U(E,()=>(0,d.Z)(E,j).instantiate(z)).store}function ee(E){if(g.isPaused){E();return}g.pause(),Object.values(p).forEach(j=>j.emitter.pause()),E(),g.resume(),Object.values(p).forEach(j=>j.emitter.resume())}let z={batch:ee,stores:p,namespaces:p,subscribe:h,select:O,resolveSelect:R,suspendSelect:S,dispatch:L,use:ae,register:k,registerGenericStore:D,registerStore:H,__unstableMarkListeningStores:C};function ae(E,j){if(E)return z={...z,...E(z,j)},z}z.register(f.Z);for(const[E,j]of Object.entries(a))z.register((0,d.Z)(E,j));i&&i.subscribe(A);const ue=v(z);return(0,c.d)(ue,{privateActionsOf:E=>{try{return(0,c.U)(p[E].store).privateActions}catch(j){return{}}},privateSelectorsOf:E=>{try{return(0,c.U)(p[E].store).privateSelectors}catch(j){return{}}}}),ue}},"../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/store/index.js":(F,o,l)=>{"use strict";l.d(o,{Z:()=>d});const d={name:"core/data",instantiate(f){const w=u=>(n,...a)=>f.select(n)[u](...a),c=u=>(n,...a)=>f.dispatch(n)[u](...a);return{getSelectors(){return Object.fromEntries(["getIsResolving","hasStartedResolution","hasFinishedResolution","isResolving","getCachedResolvers"].map(u=>[u,w(u)]))},getActions(){return Object.fromEntries(["startResolution","finishResolution","invalidateResolution","invalidateResolutionForStore","invalidateResolutionForStoreSelector"].map(u=>[u,c(u)]))},subscribe(){return()=>()=>{}}}}}},"../../../node_modules/.pnpm/@wordpress+private-apis@0.19.0/node_modules/@wordpress/private-apis/build-module/implementation.js":(F,o,l)=>{"use strict";l.d(o,{es:()=>u});var _=l("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");const d=["@wordpress/block-editor","@wordpress/block-library","@wordpress/blocks","@wordpress/commands","@wordpress/components","@wordpress/core-commands","@wordpress/core-data","@wordpress/customize-widgets","@wordpress/data","@wordpress/edit-post","@wordpress/edit-site","@wordpress/edit-widgets","@wordpress/editor","@wordpress/router"],f=[],w="I know using unstable features means my plugin or theme will inevitably break on the next WordPress release.";let c;try{c=!_.env.IS_WORDPRESS_CORE}catch(h){c=!0}const u=(h,O)=>{if(!d.includes(O))throw new Error(`You tried to opt-in to unstable APIs as module "${O}". This feature is only for JavaScript modules shipped with WordPress core. Please do not use it in plugins and themes as the unstable APIs will be removed without a warning. If you ignore this error and depend on unstable features, your product will inevitably break on one of the next WordPress releases.`);if(!c&&f.includes(O))throw new Error(`You tried to opt-in to unstable APIs as module "${O}" which is already registered. This feature is only for JavaScript modules shipped with WordPress core. Please do not use it in plugins and themes as the unstable APIs will be removed without a warning. If you ignore this error and depend on unstable features, your product will inevitably break on one of the next WordPress releases.`);if(h!==w)throw new Error("You tried to opt-in to unstable APIs without confirming you know the consequences. This feature is only for JavaScript modules shipped with WordPress core. Please do not use it in plugins and themes as the unstable APIs will removed without a warning. If you ignore this error and depend on unstable features, your product will inevitably break on the next WordPress release.");return f.push(O),{lock:n,unlock:a}};function n(h,O){if(!h)throw new Error("Cannot lock an undefined object.");p in h||(h[p]={}),i.set(h[p],O)}function a(h){if(!h)throw new Error("Cannot unlock an undefined object.");if(!(p in h))throw new Error("Cannot unlock an object that was not locked before. ");return i.get(h[p])}const i=new WeakMap,p=Symbol("Private API ID");function g(h){d.push(h)}function y(){for(;d.length;)d.pop()}function A(){for(;f.length;)f.pop()}},"../../../node_modules/.pnpm/equivalent-key-map@0.2.2/node_modules/equivalent-key-map/equivalent-key-map.js":F=>{"use strict";function o(c){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?o=function(u){return typeof u}:o=function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},o(c)}function l(c,u){if(!(c instanceof u))throw new TypeError("Cannot call a class as a function")}function _(c,u){for(var n=0;n<u.length;n++){var a=u[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(c,a.key,a)}}function d(c,u,n){return u&&_(c.prototype,u),n&&_(c,n),c}function f(c,u){var n=c._map,a=c._arrayTreeMap,i=c._objectTreeMap;if(n.has(u))return n.get(u);for(var p=Object.keys(u).sort(),g=Array.isArray(u)?a:i,y=0;y<p.length;y++){var A=p[y];if(g=g.get(A),g===void 0)return;var h=u[A];if(g=g.get(h),g===void 0)return}var O=g.get("_ekm_value");if(O)return n.delete(O[0]),O[0]=u,g.set("_ekm_value",O),n.set(u,O),O}var w=function(){function c(u){if(l(this,c),this.clear(),u instanceof c){var n=[];u.forEach(function(i,p){n.push([p,i])}),u=n}if(u!=null)for(var a=0;a<u.length;a++)this.set(u[a][0],u[a][1])}return d(c,[{key:"set",value:function(n,a){if(n===null||o(n)!=="object")return this._map.set(n,a),this;for(var i=Object.keys(n).sort(),p=[n,a],g=Array.isArray(n)?this._arrayTreeMap:this._objectTreeMap,y=0;y<i.length;y++){var A=i[y];g.has(A)||g.set(A,new c),g=g.get(A);var h=n[A];g.has(h)||g.set(h,new c),g=g.get(h)}var O=g.get("_ekm_value");return O&&this._map.delete(O[0]),g.set("_ekm_value",p),this._map.set(n,p),this}},{key:"get",value:function(n){if(n===null||o(n)!=="object")return this._map.get(n);var a=f(this,n);if(a)return a[1]}},{key:"has",value:function(n){return n===null||o(n)!=="object"?this._map.has(n):f(this,n)!==void 0}},{key:"delete",value:function(n){return this.has(n)?(this.set(n,void 0),!0):!1}},{key:"forEach",value:function(n){var a=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this;this._map.forEach(function(p,g){g!==null&&o(g)==="object"&&(p=p[1]),n.call(i,p,g,a)})}},{key:"clear",value:function(){this._map=new Map,this._arrayTreeMap=new Map,this._objectTreeMap=new Map}},{key:"size",get:function(){return this._map.size}}]),c}();F.exports=w},"../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/controls/async.js":(F,o,l)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.race=o.join=o.fork=o.promise=void 0;var _=l("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/is.js"),d=u(_),f=l("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/helpers.js"),w=l("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/dispatcher.js"),c=u(w);function u(A){return A&&A.__esModule?A:{default:A}}var n=o.promise=function(h,O,C,R,S){return d.default.promise(h)?(h.then(O,S),!0):!1},a=new Map,i=o.fork=function(h,O,C){if(!d.default.fork(h))return!1;var R=Symbol("fork"),S=(0,c.default)();a.set(R,S),C(h.iterator.apply(null,h.args),function(v){return S.dispatch(v)},function(v){return S.dispatch((0,f.error)(v))});var L=S.subscribe(function(){L(),a.delete(R)});return O(R),!0},p=o.join=function(h,O,C,R,S){if(!d.default.join(h))return!1;var L=a.get(h.task);return L?function(){var v=L.subscribe(function(U){v(),O(U)})}():S("join error : task not found"),!0},g=o.race=function(h,O,C,R,S){if(!d.default.race(h))return!1;var L=!1,v=function(D,H,ee){L||(L=!0,D[H]=ee,O(D))},U=function(D){L||S(D)};return d.default.array(h.competitors)?function(){var k=h.competitors.map(function(){return!1});h.competitors.forEach(function(D,H){C(D,function(ee){return v(k,H,ee)},U)})}():function(){var k=Object.keys(h.competitors).reduce(function(D,H){return D[H]=!1,D},{});Object.keys(h.competitors).forEach(function(D){C(h.competitors[D],function(H){return v(k,D,H)},U)})}(),!0},y=function(h,O){if(!d.default.subscribe(h))return!1;if(!d.default.channel(h.channel))throw new Error('the first argument of "subscribe" must be a valid channel');var C=h.channel.subscribe(function(R){C&&C(),O(R)});return!0};o.default=[n,i,p,g,y]},"../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/controls/builtin.js":(F,o,l)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.iterator=o.array=o.object=o.error=o.any=void 0;var _=l("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/is.js"),d=f(_);function f(i){return i&&i.__esModule?i:{default:i}}var w=o.any=function(p,g,y,A){return A(p),!0},c=o.error=function(p,g,y,A,h){return d.default.error(p)?(h(p.error),!0):!1},u=o.object=function(p,g,y,A,h){if(!d.default.all(p)||!d.default.obj(p.value))return!1;var O={},C=Object.keys(p.value),R=0,S=!1,L=function(k,D){S||(O[k]=D,R++,R===C.length&&A(O))},v=function(k,D){S||(S=!0,h(D))};return C.map(function(U){y(p.value[U],function(k){return L(U,k)},function(k){return v(U,k)})}),!0},n=o.array=function(p,g,y,A,h){if(!d.default.all(p)||!d.default.array(p.value))return!1;var O=[],C=0,R=!1,S=function(U,k){R||(O[U]=k,C++,C===p.value.length&&A(O))},L=function(U,k){R||(R=!0,h(k))};return p.value.map(function(v,U){y(v,function(k){return S(U,k)},function(k){return L(U,k)})}),!0},a=o.iterator=function(p,g,y,A,h){return d.default.iterator(p)?(y(p,g,h),!0):!1};o.default=[c,a,n,u,w]},"../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/controls/wrap.js":(F,o,l)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.cps=o.call=void 0;var _=l("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/is.js"),d=f(_);function f(n){return n&&n.__esModule?n:{default:n}}function w(n){if(Array.isArray(n)){for(var a=0,i=Array(n.length);a<n.length;a++)i[a]=n[a];return i}else return Array.from(n)}var c=o.call=function(a,i,p,g,y){if(!d.default.call(a))return!1;try{i(a.func.apply(a.context,a.args))}catch(A){y(A)}return!0},u=o.cps=function(a,i,p,g,y){var A;return d.default.cps(a)?((A=a.func).call.apply(A,[null].concat(w(a.args),[function(h,O){h?y(h):i(O)}])),!0):!1};o.default=[c,u]},"../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/create.js":(F,o,l)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var _=l("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/controls/builtin.js"),d=c(_),f=l("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/is.js"),w=c(f);function c(a){return a&&a.__esModule?a:{default:a}}function u(a){if(Array.isArray(a)){for(var i=0,p=Array(a.length);i<a.length;i++)p[i]=a[i];return p}else return Array.from(a)}var n=function(){var i=arguments.length<=0||arguments[0]===void 0?[]:arguments[0],p=[].concat(u(i),u(d.default)),g=function y(A){var h=arguments.length<=1||arguments[1]===void 0?function(){}:arguments[1],O=arguments.length<=2||arguments[2]===void 0?function(){}:arguments[2],C=function(L){var v=function(D){return function(H){try{var ee=D?L.throw(H):L.next(H),z=ee.value,ae=ee.done;if(ae)return h(z);U(z)}catch(ue){return O(ue)}}},U=function k(D){p.some(function(H){return H(D,k,y,v(!1),v(!0))})};v(!1)()},R=w.default.iterator(A)?A:regeneratorRuntime.mark(function S(){return regeneratorRuntime.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,A;case 2:return v.abrupt("return",v.sent);case 3:case"end":return v.stop()}},S,this)})();C(R,h,O)};return g};o.default=n},"../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/index.js":(F,o,l)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.wrapControls=o.asyncControls=o.create=void 0;var _=l("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/helpers.js");Object.keys(_).forEach(function(i){i!=="default"&&Object.defineProperty(o,i,{enumerable:!0,get:function(){return _[i]}})});var d=l("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/create.js"),f=a(d),w=l("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/controls/async.js"),c=a(w),u=l("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/controls/wrap.js"),n=a(u);function a(i){return i&&i.__esModule?i:{default:i}}o.create=f.default,o.asyncControls=c.default,o.wrapControls=n.default},"../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/dispatcher.js":(F,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var l=function(){var d=[];return{subscribe:function(w){return d.push(w),function(){d=d.filter(function(c){return c!==w})}},dispatch:function(w){d.slice().forEach(function(c){return c(w)})}}};o.default=l},"../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/helpers.js":(F,o,l)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.createChannel=o.subscribe=o.cps=o.apply=o.call=o.invoke=o.delay=o.race=o.join=o.fork=o.error=o.all=void 0;var _=l("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/keys.js"),d=f(_);function f(C){return C&&C.__esModule?C:{default:C}}var w=o.all=function(R){return{type:d.default.all,value:R}},c=o.error=function(R){return{type:d.default.error,error:R}},u=o.fork=function(R){for(var S=arguments.length,L=Array(S>1?S-1:0),v=1;v<S;v++)L[v-1]=arguments[v];return{type:d.default.fork,iterator:R,args:L}},n=o.join=function(R){return{type:d.default.join,task:R}},a=o.race=function(R){return{type:d.default.race,competitors:R}},i=o.delay=function(R){return new Promise(function(S){setTimeout(function(){return S(!0)},R)})},p=o.invoke=function(R){for(var S=arguments.length,L=Array(S>1?S-1:0),v=1;v<S;v++)L[v-1]=arguments[v];return{type:d.default.call,func:R,context:null,args:L}},g=o.call=function(R,S){for(var L=arguments.length,v=Array(L>2?L-2:0),U=2;U<L;U++)v[U-2]=arguments[U];return{type:d.default.call,func:R,context:S,args:v}},y=o.apply=function(R,S,L){return{type:d.default.call,func:R,context:S,args:L}},A=o.cps=function(R){for(var S=arguments.length,L=Array(S>1?S-1:0),v=1;v<S;v++)L[v-1]=arguments[v];return{type:d.default.cps,func:R,args:L}},h=o.subscribe=function(R){return{type:d.default.subscribe,channel:R}},O=o.createChannel=function(R){var S=[],L=function(k){return S.push(k),function(){return S.splice(S.indexOf(k),1)}},v=function(k){return S.forEach(function(D){return D(k)})};return R(v),{subscribe:L}}},"../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/is.js":(F,o,l)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol?"symbol":typeof u},d=l("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/keys.js"),f=w(d);function w(u){return u&&u.__esModule?u:{default:u}}var c={obj:function(n){return(typeof n=="undefined"?"undefined":_(n))==="object"&&!!n},all:function(n){return c.obj(n)&&n.type===f.default.all},error:function(n){return c.obj(n)&&n.type===f.default.error},array:Array.isArray,func:function(n){return typeof n=="function"},promise:function(n){return n&&c.func(n.then)},iterator:function(n){return n&&c.func(n.next)&&c.func(n.throw)},fork:function(n){return c.obj(n)&&n.type===f.default.fork},join:function(n){return c.obj(n)&&n.type===f.default.join},race:function(n){return c.obj(n)&&n.type===f.default.race},call:function(n){return c.obj(n)&&n.type===f.default.call},cps:function(n){return c.obj(n)&&n.type===f.default.cps},subscribe:function(n){return c.obj(n)&&n.type===f.default.subscribe},channel:function(n){return c.obj(n)&&c.func(n.subscribe)}};o.default=c},"../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/keys.js":(F,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var l={all:Symbol("all"),error:Symbol("error"),fork:Symbol("fork"),join:Symbol("join"),race:Symbol("race"),call:Symbol("call"),cps:Symbol("cps"),subscribe:Symbol("subscribe")};o.default=l},"../../../node_modules/.pnpm/turbo-combine-reducers@1.0.2/node_modules/turbo-combine-reducers/index.js":F=>{function o(l){var _=Object.keys(l),d;return d=function(){var f,w,c;for(f="return {",w=0;w<_.length;w++)c=JSON.stringify(_[w]),f+=c+":r["+c+"](s["+c+"],a),";return f+="}",new Function("r,s,a",f)}(),function(w,c){var u,n,a;if(w===void 0)return d(l,{},c);for(u=d(l,w,c),n=_.length;n--;)if(a=_[n],w[a]!==u[a])return u;return w}}F.exports=o}}]);})();
