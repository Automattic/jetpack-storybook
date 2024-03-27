"use strict";(()=>{var xe=(O,y,u)=>{if(!y.has(O))throw TypeError("Cannot "+u)};var r=(O,y,u)=>(xe(O,y,"read from private field"),u?u.call(O):y.get(O)),h=(O,y,u)=>{if(y.has(O))throw TypeError("Cannot add the same private member more than once");y instanceof WeakSet?y.add(O):y.set(O,u)},c=(O,y,u,d)=>(xe(O,y,"write to private field"),d?d.call(O,u):y.set(O,u),u);var S=(O,y,u)=>(xe(O,y,"access private method"),u);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7187],{"../../../node_modules/.pnpm/@tanstack+query-core@5.20.5/node_modules/@tanstack/query-core/build/modern/notifyManager.js":(O,y,u)=>{u.d(y,{V:()=>j});function d(){let P=[],A=0,Z=f=>{f()},F=f=>{f()},I=f=>setTimeout(f,0);const be=f=>{I=f},B=f=>{let M;A++;try{M=f()}finally{A--,A||Le()}return M},V=f=>{A?P.push(f):I(()=>{Z(f)})},ve=f=>(...M)=>{V(()=>{f(...M)})},Le=()=>{const f=P;P=[],f.length&&I(()=>{F(()=>{f.forEach(M=>{Z(M)})})})};return{batch:B,batchCalls:ve,schedule:V,setNotifyFunction:f=>{Z=f},setBatchNotifyFunction:f=>{F=f},setScheduler:be}}var j=d()},"../../../node_modules/.pnpm/@tanstack+query-core@5.20.5/node_modules/@tanstack/query-core/build/modern/subscribable.js":(O,y,u)=>{u.d(y,{l:()=>d});var d=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(j){return this.listeners.add(j),this.onSubscribe(),()=>{this.listeners.delete(j),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},"../../../node_modules/.pnpm/@tanstack+query-core@5.20.5/node_modules/@tanstack/query-core/build/modern/utils.js":(O,y,u)=>{u.d(y,{Kp:()=>Z,PN:()=>A,VS:()=>Le,Ym:()=>B,ZT:()=>j,oE:()=>Qe,sk:()=>d});var d=typeof window=="undefined"||"Deno"in window;function j(){}function P(n,i){return typeof n=="function"?n(i):n}function A(n){return typeof n=="number"&&n>=0&&n!==1/0}function Z(n,i){return Math.max(n+(i||0)-Date.now(),0)}function F(n,i){const{type:a="all",exact:w,fetchStatus:L,predicate:U,queryKey:z,stale:W}=n;if(z){if(w){if(i.queryHash!==be(z,i.options))return!1}else if(!V(i.queryKey,z))return!1}if(a!=="all"){const $=i.isActive();if(a==="active"&&!$||a==="inactive"&&$)return!1}return!(typeof W=="boolean"&&i.isStale()!==W||typeof L!="undefined"&&L!==i.state.fetchStatus||U&&!U(i))}function I(n,i){const{exact:a,status:w,predicate:L,mutationKey:U}=n;if(U){if(!i.options.mutationKey)return!1;if(a){if(B(i.options.mutationKey)!==B(U))return!1}else if(!V(i.options.mutationKey,U))return!1}return!(w&&i.state.status!==w||L&&!L(i))}function be(n,i){return((i==null?void 0:i.queryKeyHashFn)||B)(n)}function B(n){return JSON.stringify(n,(i,a)=>ie(a)?Object.keys(a).sort().reduce((w,L)=>(w[L]=a[L],w),{}):a)}function V(n,i){return n===i?!0:typeof n!=typeof i?!1:n&&i&&typeof n=="object"&&typeof i=="object"?!Object.keys(i).some(a=>!V(n[a],i[a])):!1}function ve(n,i){if(n===i)return n;const a=Re(n)&&Re(i);if(a||ie(n)&&ie(i)){const w=a?n:Object.keys(n),L=w.length,U=a?i:Object.keys(i),z=U.length,W=a?[]:{};let $=0;for(let oe=0;oe<z;oe++){const Q=a?oe:U[oe];!a&&n[Q]===void 0&&i[Q]===void 0&&w.includes(Q)?(W[Q]=void 0,$++):(W[Q]=ve(n[Q],i[Q]),W[Q]===n[Q]&&n[Q]!==void 0&&$++)}return L===z&&$===L?n:W}return i}function Le(n,i){if(n&&!i||i&&!n)return!1;for(const a in n)if(n[a]!==i[a])return!1;return!0}function Re(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function ie(n){if(!f(n))return!1;const i=n.constructor;if(typeof i=="undefined")return!0;const a=i.prototype;return!(!f(a)||!a.hasOwnProperty("isPrototypeOf"))}function f(n){return Object.prototype.toString.call(n)==="[object Object]"}function M(n){return new Promise(i=>{setTimeout(i,n)})}function Qe(n,i,a){return typeof a.structuralSharing=="function"?a.structuralSharing(n,i):a.structuralSharing!==!1?ve(n,i):i}function Ie(n){return n}function ze(n,i,a=0){const w=[...n,i];return a&&w.length>a?w.slice(1):w}function K(n,i,a=0){const w=[i,...n];return a&&w.length>a?w.slice(0,-1):w}},"../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.2.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js":(O,y,u)=>{u.d(y,{NL:()=>A});var d=u("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=u("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),P=d.createContext(void 0),A=F=>{const I=d.useContext(P);if(F)return F;if(!I)throw new Error("No QueryClient set, use QueryClientProvider to set one");return I},Z=({client:F,children:I})=>(React.useEffect(()=>(F.mount(),()=>{F.unmount()}),[F]),jsx(P.Provider,{value:F,children:I}))},"../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.2.0/node_modules/@tanstack/react-query/build/modern/useQuery.js":(O,y,u)=>{var ee,J,ae,We,ue,Y,ce,He,k,m,Ce,g,te,le,N,Ee,he,de,se,re,G,fe,ne,Fe,Oe,De,we,Ae,Se,Ke,ge,Ne,_e,qe,je,Be,ke,Ve,Me,Ye,Ze;u.d(y,{a:()=>rt});var d=u("../../../node_modules/.pnpm/@tanstack+query-core@5.20.5/node_modules/@tanstack/query-core/build/modern/utils.js"),j=u("../../../node_modules/.pnpm/@tanstack+query-core@5.20.5/node_modules/@tanstack/query-core/build/modern/notifyManager.js"),P=u("../../../node_modules/.pnpm/@tanstack+query-core@5.20.5/node_modules/@tanstack/query-core/build/modern/subscribable.js"),A=(We=class extends P.l{constructor(){super();h(this,ee,void 0);h(this,J,void 0);h(this,ae,void 0);c(this,ae,e=>{if(!d.sk&&window.addEventListener){const s=()=>e();return window.addEventListener("visibilitychange",s,!1),()=>{window.removeEventListener("visibilitychange",s)}}})}onSubscribe(){r(this,J)||this.setEventListener(r(this,ae))}onUnsubscribe(){var e;this.hasListeners()||((e=r(this,J))==null||e.call(this),c(this,J,void 0))}setEventListener(e){var s;c(this,ae,e),(s=r(this,J))==null||s.call(this),c(this,J,e(o=>{typeof o=="boolean"?this.setFocused(o):this.onFocus()}))}setFocused(e){r(this,ee)!==e&&(c(this,ee,e),this.onFocus())}onFocus(){this.listeners.forEach(e=>{e()})}isFocused(){var e;return typeof r(this,ee)=="boolean"?r(this,ee):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},ee=new WeakMap,J=new WeakMap,ae=new WeakMap,We),Z=new A,F=(He=class extends P.l{constructor(){super();h(this,ue,!0);h(this,Y,void 0);h(this,ce,void 0);c(this,ce,e=>{if(!d.sk&&window.addEventListener){const s=()=>e(!0),o=()=>e(!1);return window.addEventListener("online",s,!1),window.addEventListener("offline",o,!1),()=>{window.removeEventListener("online",s),window.removeEventListener("offline",o)}}})}onSubscribe(){r(this,Y)||this.setEventListener(r(this,ce))}onUnsubscribe(){var e;this.hasListeners()||((e=r(this,Y))==null||e.call(this),c(this,Y,void 0))}setEventListener(e){var s;c(this,ce,e),(s=r(this,Y))==null||s.call(this),c(this,Y,e(this.setOnline.bind(this)))}setOnline(e){r(this,ue)!==e&&(c(this,ue,e),this.listeners.forEach(o=>{o(e)}))}isOnline(){return r(this,ue)}},ue=new WeakMap,Y=new WeakMap,ce=new WeakMap,He),I=new F;function be(t){return Math.min(1e3*2**t,3e4)}function B(t){return(t!=null?t:"online")==="online"?I.isOnline():!0}var V=class{constructor(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function ve(t){return t instanceof V}function Le(t){let e=!1,s=0,o=!1,R,b,p;const E=new Promise((l,v)=>{b=l,p=v}),T=l=>{var v;o||(H(new V(l)),(v=t.abort)==null||v.call(t))},X=()=>{e=!0},C=()=>{e=!1},ye=()=>!focusManager.isFocused()||t.networkMode!=="always"&&!onlineManager.isOnline(),Ue=l=>{var v;o||(o=!0,(v=t.onSuccess)==null||v.call(t,l),R==null||R(),b(l))},H=l=>{var v;o||(o=!0,(v=t.onError)==null||v.call(t,l),R==null||R(),p(l))},x=()=>new Promise(l=>{var v;R=D=>{const q=o||!ye();return q&&l(D),q},(v=t.onPause)==null||v.call(t)}).then(()=>{var l;R=void 0,o||(l=t.onContinue)==null||l.call(t)}),pe=()=>{if(o)return;let l;try{l=t.fn()}catch(v){l=Promise.reject(v)}Promise.resolve(l).then(Ue).catch(v=>{var Pe,_,me;if(o)return;const D=(Pe=t.retry)!=null?Pe:isServer?0:3,q=(_=t.retryDelay)!=null?_:be,Te=typeof q=="function"?q(s,v):q,Je=D===!0||typeof D=="number"&&s<D||typeof D=="function"&&D(s,v);if(e||!Je){H(v);return}s++,(me=t.onFail)==null||me.call(t,s,v),sleep(Te).then(()=>{if(ye())return x()}).then(()=>{e?H(v):pe()})})};return B(t.networkMode)?pe():x().then(pe),{promise:E,cancel:T,continue:()=>(R==null?void 0:R())?E:Promise.resolve(),cancelRetry:X,continueRetry:C}}var Re=(Ze=class extends P.l{constructor(e,s){super();h(this,ne);h(this,Oe);h(this,we);h(this,Se);h(this,ge);h(this,_e);h(this,je);h(this,ke);h(this,Me);h(this,k,void 0);h(this,m,void 0);h(this,Ce,void 0);h(this,g,void 0);h(this,te,void 0);h(this,le,void 0);h(this,N,void 0);h(this,Ee,void 0);h(this,he,void 0);h(this,de,void 0);h(this,se,void 0);h(this,re,void 0);h(this,G,void 0);h(this,fe,new Set);this.options=s,c(this,k,e),c(this,N,null),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(r(this,m).addObserver(this),f(r(this,m),this.options)?S(this,ne,Fe).call(this):this.updateResult(),S(this,ge,Ne).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return M(r(this,m),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return M(r(this,m),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,S(this,_e,qe).call(this),S(this,je,Be).call(this),r(this,m).removeObserver(this)}setOptions(e,s){const o=this.options,R=r(this,m);if(this.options=r(this,k).defaultQueryOptions(e),(0,d.VS)(o,this.options)||r(this,k).getQueryCache().notify({type:"observerOptionsUpdated",query:r(this,m),observer:this}),typeof this.options.enabled!="undefined"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=o.queryKey),S(this,ke,Ve).call(this);const b=this.hasListeners();b&&Qe(r(this,m),R,this.options,o)&&S(this,ne,Fe).call(this),this.updateResult(s),b&&(r(this,m)!==R||this.options.enabled!==o.enabled||this.options.staleTime!==o.staleTime)&&S(this,Oe,De).call(this);const p=S(this,we,Ae).call(this);b&&(r(this,m)!==R||this.options.enabled!==o.enabled||p!==r(this,G))&&S(this,Se,Ke).call(this,p)}getOptimisticResult(e){const s=r(this,k).getQueryCache().build(r(this,k),e),o=this.createResult(s,e);return ze(this,o)&&(c(this,g,o),c(this,le,this.options),c(this,te,r(this,m).state)),o}getCurrentResult(){return r(this,g)}trackResult(e){const s={};return Object.keys(e).forEach(o=>{Object.defineProperty(s,o,{configurable:!1,enumerable:!0,get:()=>(r(this,fe).add(o),e[o])})}),s}getCurrentQuery(){return r(this,m)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const s=r(this,k).defaultQueryOptions(e),o=r(this,k).getQueryCache().build(r(this,k),s);return o.isFetchingOptimistic=!0,o.fetch().then(()=>this.createResult(o,s))}fetch(e){var s;return S(this,ne,Fe).call(this,{...e,cancelRefetch:(s=e.cancelRefetch)!=null?s:!0}).then(()=>(this.updateResult(),r(this,g)))}createResult(e,s){var Pe;const o=r(this,m),R=this.options,b=r(this,g),p=r(this,te),E=r(this,le),X=e!==o?e.state:r(this,Ce),{state:C}=e;let{error:ye,errorUpdatedAt:Ue,fetchStatus:H,status:x}=C,pe=!1,l;if(s._optimisticResults){const _=this.hasListeners(),me=!_&&f(e,s),nt=_&&Qe(e,o,s,R);(me||nt)&&(H=B(e.options.networkMode)?"fetching":"paused",C.dataUpdatedAt||(x="pending")),s._optimisticResults==="isRestoring"&&(H="idle")}if(s.select&&typeof C.data!="undefined")if(b&&C.data===(p==null?void 0:p.data)&&s.select===r(this,Ee))l=r(this,he);else try{c(this,Ee,s.select),l=s.select(C.data),l=(0,d.oE)(b==null?void 0:b.data,l,s),c(this,he,l),c(this,N,null)}catch(_){c(this,N,_)}else l=C.data;if(typeof s.placeholderData!="undefined"&&typeof l=="undefined"&&x==="pending"){let _;if(b!=null&&b.isPlaceholderData&&s.placeholderData===(E==null?void 0:E.placeholderData))_=b.data;else if(_=typeof s.placeholderData=="function"?s.placeholderData((Pe=r(this,de))==null?void 0:Pe.state.data,r(this,de)):s.placeholderData,s.select&&typeof _!="undefined")try{_=s.select(_),c(this,N,null)}catch(me){c(this,N,me)}typeof _!="undefined"&&(x="success",l=(0,d.oE)(b==null?void 0:b.data,_,s),pe=!0)}r(this,N)&&(ye=r(this,N),l=r(this,he),Ue=Date.now(),x="error");const v=H==="fetching",D=x==="pending",q=x==="error",Te=D&&v;return{status:x,fetchStatus:H,isPending:D,isSuccess:x==="success",isError:q,isInitialLoading:Te,isLoading:Te,data:l,dataUpdatedAt:C.dataUpdatedAt,error:ye,errorUpdatedAt:Ue,failureCount:C.fetchFailureCount,failureReason:C.fetchFailureReason,errorUpdateCount:C.errorUpdateCount,isFetched:C.dataUpdateCount>0||C.errorUpdateCount>0,isFetchedAfterMount:C.dataUpdateCount>X.dataUpdateCount||C.errorUpdateCount>X.errorUpdateCount,isFetching:v,isRefetching:v&&!D,isLoadingError:q&&C.dataUpdatedAt===0,isPaused:H==="paused",isPlaceholderData:pe,isRefetchError:q&&C.dataUpdatedAt!==0,isStale:Ie(e,s),refetch:this.refetch}}updateResult(e){const s=r(this,g),o=this.createResult(r(this,m),this.options);if(c(this,te,r(this,m).state),c(this,le,this.options),r(this,te).data!==void 0&&c(this,de,r(this,m)),(0,d.VS)(o,s))return;c(this,g,o);const R={},b=()=>{if(!s)return!0;const{notifyOnChangeProps:p}=this.options,E=typeof p=="function"?p():p;if(E==="all"||!E&&!r(this,fe).size)return!0;const T=new Set(E!=null?E:r(this,fe));return this.options.throwOnError&&T.add("error"),Object.keys(r(this,g)).some(X=>{const C=X;return r(this,g)[C]!==s[C]&&T.has(C)})};(e==null?void 0:e.listeners)!==!1&&b()&&(R.listeners=!0),S(this,Me,Ye).call(this,{...R,...e})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&S(this,ge,Ne).call(this)}},k=new WeakMap,m=new WeakMap,Ce=new WeakMap,g=new WeakMap,te=new WeakMap,le=new WeakMap,N=new WeakMap,Ee=new WeakMap,he=new WeakMap,de=new WeakMap,se=new WeakMap,re=new WeakMap,G=new WeakMap,fe=new WeakMap,ne=new WeakSet,Fe=function(e){S(this,ke,Ve).call(this);let s=r(this,m).fetch(this.options,e);return e!=null&&e.throwOnError||(s=s.catch(d.ZT)),s},Oe=new WeakSet,De=function(){if(S(this,_e,qe).call(this),d.sk||r(this,g).isStale||!(0,d.PN)(this.options.staleTime))return;const s=(0,d.Kp)(r(this,g).dataUpdatedAt,this.options.staleTime)+1;c(this,se,setTimeout(()=>{r(this,g).isStale||this.updateResult()},s))},we=new WeakSet,Ae=function(){var e;return(e=typeof this.options.refetchInterval=="function"?this.options.refetchInterval(r(this,m)):this.options.refetchInterval)!=null?e:!1},Se=new WeakSet,Ke=function(e){S(this,je,Be).call(this),c(this,G,e),!(d.sk||this.options.enabled===!1||!(0,d.PN)(r(this,G))||r(this,G)===0)&&c(this,re,setInterval(()=>{(this.options.refetchIntervalInBackground||Z.isFocused())&&S(this,ne,Fe).call(this)},r(this,G)))},ge=new WeakSet,Ne=function(){S(this,Oe,De).call(this),S(this,Se,Ke).call(this,S(this,we,Ae).call(this))},_e=new WeakSet,qe=function(){r(this,se)&&(clearTimeout(r(this,se)),c(this,se,void 0))},je=new WeakSet,Be=function(){r(this,re)&&(clearInterval(r(this,re)),c(this,re,void 0))},ke=new WeakSet,Ve=function(){const e=r(this,k).getQueryCache().build(r(this,k),this.options);if(e===r(this,m))return;const s=r(this,m);c(this,m,e),c(this,Ce,e.state),this.hasListeners()&&(s==null||s.removeObserver(this),e.addObserver(this))},Me=new WeakSet,Ye=function(e){j.V.batch(()=>{e.listeners&&this.listeners.forEach(s=>{s(r(this,g))}),r(this,k).getQueryCache().notify({query:r(this,m),type:"observerResultsUpdated"})})},Ze);function ie(t,e){return e.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&e.retryOnMount===!1)}function f(t,e){return ie(t,e)||t.state.dataUpdatedAt>0&&M(t,e,e.refetchOnMount)}function M(t,e,s){if(e.enabled!==!1){const o=typeof s=="function"?s(t):s;return o==="always"||o!==!1&&Ie(t,e)}return!1}function Qe(t,e,s,o){return s.enabled!==!1&&(t!==e||o.enabled===!1)&&(!s.suspense||t.state.status!=="error")&&Ie(t,s)}function Ie(t,e){return t.isStaleByTime(e.staleTime)}function ze(t,e){return!(0,d.VS)(t.getCurrentResult(),e)}var K=u("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=u("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function i(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var a=K.createContext(i()),w=()=>K.useContext(a),L=({children:t})=>{const[e]=React.useState(()=>i());return jsx(a.Provider,{value:e,children:typeof t=="function"?t(e):t})},U=u("../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.2.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),z=K.createContext(!1),W=()=>K.useContext(z),$=z.Provider,oe=u("../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.2.0/node_modules/@tanstack/react-query/build/modern/utils.js"),Q=(t,e)=>{(t.suspense||t.throwOnError)&&(e.isReset()||(t.retryOnMount=!1))},Ge=t=>{K.useEffect(()=>{t.clearReset()},[t])},Xe=({result:t,errorResetBoundary:e,throwOnError:s,query:o})=>t.isError&&!e.isReset()&&!t.isFetching&&o&&(0,oe.L)(s,[t.error,o]),it=(t,e)=>typeof e.state.data=="undefined",$e=t=>{t.suspense&&typeof t.staleTime!="number"&&(t.staleTime=1e3)},ot=(t,e)=>t.isLoading&&t.isFetching&&!e,et=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,tt=(t,e,s)=>e.fetchOptimistic(t).catch(()=>{s.clearReset()});function st(t,e,s){const o=(0,U.NL)(s),R=W(),b=w(),p=o.defaultQueryOptions(t);p._optimisticResults=R?"isRestoring":"optimistic",$e(p),Q(p,b),Ge(b);const[E]=K.useState(()=>new e(o,p)),T=E.getOptimisticResult(p);if(K.useSyncExternalStore(K.useCallback(X=>{const C=R?()=>{}:E.subscribe(j.V.batchCalls(X));return E.updateResult(),C},[E,R]),()=>E.getCurrentResult(),()=>E.getCurrentResult()),K.useEffect(()=>{E.setOptions(p,{listeners:!1})},[p,E]),et(p,T))throw tt(p,E,b);if(Xe({result:T,errorResetBoundary:b,throwOnError:p.throwOnError,query:o.getQueryCache().get(p.queryHash)}))throw T.error;return p.notifyOnChangeProps?T:E.trackResult(T)}function rt(t,e){return st(t,Re,e)}},"../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.2.0/node_modules/@tanstack/react-query/build/modern/utils.js":(O,y,u)=>{u.d(y,{L:()=>d});function d(j,P){return typeof j=="function"?j(...P):!!j}}}]);})();