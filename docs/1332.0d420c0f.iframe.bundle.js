"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1332],{"../../../node_modules/.pnpm/@floating-ui+react-dom@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs":(B,w,r)=>{r.d(w,{BN:()=>P,ER:()=>b,Ej:()=>v,UE:()=>E,UU:()=>k,cY:()=>h,we:()=>y});var n=r("../../../node_modules/.pnpm/@floating-ui+dom@1.6.11/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),t=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=r("../../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js"),p=typeof document!="undefined"?t.useLayoutEffect:t.useEffect;function s(e,o){if(e===o)return!0;if(typeof e!=typeof o)return!1;if(typeof e=="function"&&e.toString()===o.toString())return!0;let l,i,O;if(e&&o&&typeof e=="object"){if(Array.isArray(e)){if(l=e.length,l!==o.length)return!1;for(i=l;i--!==0;)if(!s(e[i],o[i]))return!1;return!0}if(O=Object.keys(e),l=O.length,l!==Object.keys(o).length)return!1;for(i=l;i--!==0;)if(!{}.hasOwnProperty.call(o,O[i]))return!1;for(i=l;i--!==0;){const x=O[i];if(!(x==="_owner"&&e.$$typeof)&&!s(e[x],o[x]))return!1}return!0}return e!==e&&o!==o}function d(e){return typeof window=="undefined"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function c(e,o){const l=d(e);return Math.round(o*l)/l}function D(e){const o=t.useRef(e);return p(()=>{o.current=e}),o}function y(e){e===void 0&&(e={});const{placement:o="bottom",strategy:l="absolute",middleware:i=[],platform:O,elements:{reference:x,floating:ee}={},transform:V=!0,whileElementsMounted:z,open:G}=e,[U,Y]=t.useState({x:0,y:0,strategy:l,placement:o,middlewareData:{},isPositioned:!1}),[u,m]=t.useState(i);s(u,i)||m(i);const[_,R]=t.useState(null),[L,S]=t.useState(null),T=t.useCallback(C=>{C!==j.current&&(j.current=C,R(C))},[]),K=t.useCallback(C=>{C!==W.current&&(W.current=C,S(C))},[]),A=x||_,g=ee||L,j=t.useRef(null),W=t.useRef(null),X=t.useRef(U),se=z!=null,Z=D(z),J=D(O),oe=D(G),F=t.useCallback(()=>{if(!j.current||!W.current)return;const C={placement:o,strategy:l,middleware:u};J.current&&(C.platform=J.current),(0,n.rD)(j.current,W.current,C).then(Q=>{const N={...Q,isPositioned:oe.current!==!1};q.current&&!s(X.current,N)&&(X.current=N,f.flushSync(()=>{Y(N)}))})},[u,o,l,J,oe]);p(()=>{G===!1&&X.current.isPositioned&&(X.current.isPositioned=!1,Y(C=>({...C,isPositioned:!1})))},[G]);const q=t.useRef(!1);p(()=>(q.current=!0,()=>{q.current=!1}),[]),p(()=>{if(A&&(j.current=A),g&&(W.current=g),A&&g){if(Z.current)return Z.current(A,g,F);F()}},[A,g,F,Z,se]);const te=t.useMemo(()=>({reference:j,floating:W,setReference:T,setFloating:K}),[T,K]),I=t.useMemo(()=>({reference:A,floating:g}),[A,g]),ne=t.useMemo(()=>{const C={position:l,left:0,top:0};if(!I.floating)return C;const Q=c(I.floating,U.x),N=c(I.floating,U.y);return V?{...C,transform:"translate("+Q+"px, "+N+"px)",...d(I.floating)>=1.5&&{willChange:"transform"}}:{position:l,left:Q,top:N}},[l,V,I.floating,U.x,U.y]);return t.useMemo(()=>({...U,update:F,refs:te,elements:I,floatingStyles:ne}),[U,F,te,I,ne])}const a=e=>{function o(l){return{}.hasOwnProperty.call(l,"current")}return{name:"arrow",options:e,fn(l){const{element:i,padding:O}=typeof e=="function"?e(l):e;return i&&o(i)?i.current!=null?(0,n.UE)({element:i.current,padding:O}).fn(l):{}:i?(0,n.UE)({element:i,padding:O}).fn(l):{}}}},h=(e,o)=>({...(0,n.cY)(e),options:[e,o]}),P=(e,o)=>({...(0,n.BN)(e),options:[e,o]}),b=(e,o)=>({...(0,n.ER)(e),options:[e,o]}),k=(e,o)=>({...(0,n.UU)(e),options:[e,o]}),v=(e,o)=>({...(0,n.Ej)(e),options:[e,o]}),$=(e,o)=>({...autoPlacement$1(e),options:[e,o]}),H=(e,o)=>({...hide$1(e),options:[e,o]}),M=(e,o)=>({...inline$1(e),options:[e,o]}),E=(e,o)=>({...a(e),options:[e,o]})},"../../../node_modules/.pnpm/@wordpress+compose@7.8.3_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-dialog/index.js":(B,w,r)=>{r.d(w,{A:()=>y});var n=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=r("../../../node_modules/.pnpm/@wordpress+keycodes@4.8.2/node_modules/@wordpress/keycodes/build-module/index.js"),f=r("../../../node_modules/.pnpm/@wordpress+compose@7.8.3_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-constrained-tabbing/index.js"),p=r("../../../node_modules/.pnpm/@wordpress+compose@7.8.3_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-on-mount/index.js"),s=r("../../../node_modules/.pnpm/@wordpress+compose@7.8.3_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-return/index.js"),d=r("../../../node_modules/.pnpm/@wordpress+compose@7.8.3_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-outside/index.js"),c=r("../../../node_modules/.pnpm/@wordpress+compose@7.8.3_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js");function D(a){const h=(0,n.useRef)(),{constrainTabbing:P=a.focusOnMount!==!1}=a;(0,n.useEffect)(()=>{h.current=a},Object.values(a));const b=(0,f.A)(),k=(0,p.A)(a.focusOnMount),v=(0,s.A)(),$=(0,d.A)(M=>{var E,e;(E=h.current)!=null&&E.__unstableOnClose?h.current.__unstableOnClose("focus-outside",M):(e=h.current)!=null&&e.onClose&&h.current.onClose()}),H=(0,n.useCallback)(M=>{M&&M.addEventListener("keydown",E=>{var e;E.keyCode===t._f&&!E.defaultPrevented&&((e=h.current)!=null&&e.onClose)&&(E.preventDefault(),h.current.onClose())})},[]);return[(0,c.A)([P?b:null,a.focusOnMount!==!1?v:null,a.focusOnMount!==!1?k:null,H]),{...$,tabIndex:-1}]}const y=D},"../../../node_modules/.pnpm/@wordpress+compose@7.8.3_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-outside/index.js":(B,w,r)=>{r.d(w,{A:()=>p});var n=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const t=["button","submit"];function f(s){if(!(s instanceof window.HTMLElement))return!1;switch(s.nodeName){case"A":case"BUTTON":return!0;case"INPUT":return t.includes(s.type)}return!1}function p(s){const d=(0,n.useRef)(s);(0,n.useEffect)(()=>{d.current=s},[s]);const c=(0,n.useRef)(!1),D=(0,n.useRef)(),y=(0,n.useCallback)(()=>{clearTimeout(D.current)},[]);(0,n.useEffect)(()=>()=>y(),[]),(0,n.useEffect)(()=>{s||y()},[s,y]);const a=(0,n.useCallback)(P=>{const{type:b,target:k}=P;["mouseup","touchend"].includes(b)?c.current=!1:f(k)&&(c.current=!0)},[]),h=(0,n.useCallback)(P=>{var k;if(P.persist(),c.current)return;const b=P.target.getAttribute("data-unstable-ignore-focus-outside-for-relatedtarget");b&&((k=P.relatedTarget)!=null&&k.closest(b))||(D.current=setTimeout(()=>{if(!document.hasFocus()){P.preventDefault();return}typeof d.current=="function"&&d.current(P)},0))},[]);return{onFocus:y,onMouseDown:a,onMouseUp:a,onTouchStart:a,onTouchEnd:a,onBlur:h}}},"../../../node_modules/.pnpm/@wordpress+compose@7.8.3_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-observable-value/index.js":(B,w,r)=>{r.d(w,{A:()=>t});var n=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function t(f,p){const[s,d]=(0,n.useMemo)(()=>[c=>f.subscribe(p,c),()=>f.get(p)],[f,p]);return(0,n.useSyncExternalStore)(s,d,d)}},"../../../node_modules/.pnpm/@wordpress+compose@7.8.3_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js":(B,w,r)=>{r.d(w,{A:()=>D});var n=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=r("../../../node_modules/.pnpm/@wordpress+compose@7.8.3_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js");const f={xhuge:1920,huge:1440,wide:1280,xlarge:1080,large:960,medium:782,small:600,mobile:480},p={">=":"min-width","<":"max-width"},s={">=":(y,a)=>a>=y,"<":(y,a)=>a<y},d=(0,n.createContext)(null),c=(y,a=">=")=>{const h=(0,n.useContext)(d),P=!h&&`(${p[a]}: ${f[y]}px)`,b=(0,t.A)(P||void 0);return h?s[a](f[y],h):b};c.__experimentalWidthProvider=d.Provider;const D=c},"../../../node_modules/.pnpm/@wordpress+compose@7.8.3_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/observable-map/index.js":(B,w,r)=>{r.d(w,{u:()=>n});function n(){const t=new Map,f=new Map;function p(s){const d=f.get(s);if(d)for(const c of d)c()}return{get(s){return t.get(s)},set(s,d){t.set(s,d),p(s)},delete(s){t.delete(s),p(s)},subscribe(s,d){let c=f.get(s);return c||(c=new Set,f.set(s,c)),c.add(d),()=>{c.delete(d),c.size===0&&f.delete(s)}}}}},"../../../node_modules/.pnpm/@wordpress+element@6.8.1/node_modules/@wordpress/element/build-module/utils.js":(B,w,r)=>{r.d(w,{s:()=>n});const n=t=>typeof t=="number"?!1:typeof(t==null?void 0:t.valueOf())=="string"||Array.isArray(t)?!t.length:!t},"../../../node_modules/.pnpm/@wordpress+keycodes@4.8.2/node_modules/@wordpress/keycodes/build-module/index.js":(B,w,r)=>{r.d(w,{EN:()=>H,Fm:()=>s,G_:()=>f,Kp:()=>a,M3:()=>P,NS:()=>k,Nx:()=>D,PX:()=>v,SJ:()=>$,UP:()=>b,W3:()=>y,_f:()=>d,dz:()=>z,kx:()=>Y,t6:()=>c,wn:()=>p,yZ:()=>h});var n=r("../../../node_modules/.pnpm/@wordpress+i18n@5.8.2/node_modules/@wordpress/i18n/build-module/index.js"),t=r("../../../node_modules/.pnpm/@wordpress+keycodes@4.8.2/node_modules/@wordpress/keycodes/build-module/platform.js");const f=8,p=9,s=13,d=27,c=32,D=33,y=34,a=35,h=36,P=37,b=38,k=39,v=40,$=46,H=121,M="alt",E="ctrl",e="meta",o="shift",l=48;function i(u){return u.length<2?u.toUpperCase():u.charAt(0).toUpperCase()+u.slice(1)}function O(u,m){return Object.fromEntries(Object.entries(u).map(([_,R])=>[_,m(R)]))}const x={primary:u=>u()?[e]:[E],primaryShift:u=>u()?[o,e]:[E,o],primaryAlt:u=>u()?[M,e]:[E,M],secondary:u=>u()?[o,M,e]:[E,o,M],access:u=>u()?[E,M]:[o,M],ctrl:()=>[E],alt:()=>[M],ctrlShift:()=>[E,o],shift:()=>[o],shiftAlt:()=>[o,M],undefined:()=>[]},ee=O(x,u=>(m,_=t.H)=>[...u(_),m.toLowerCase()].join("+")),V=O(x,u=>(m,_=t.H)=>{const R=_(),L={[M]:R?"\u2325":"Alt",[E]:R?"\u2303":"Ctrl",[e]:"\u2318",[o]:R?"\u21E7":"Shift"};return[...u(_).reduce((T,K)=>{var A;const g=(A=L[K])!==null&&A!==void 0?A:K;return R?[...T,g]:[...T,g,"+"]},[]),i(m)]}),z=O(V,u=>(m,_=t.H)=>u(m,_).join("")),G=O(x,u=>(m,_=t.H)=>{const R=_(),L={[o]:"Shift",[e]:R?"Command":"Control",[E]:"Control",[M]:R?"Option":"Alt",",":(0,n.__)("Comma"),".":(0,n.__)("Period"),"`":(0,n.__)("Backtick"),"~":(0,n.__)("Tilde")};return[...u(_),m].map(S=>{var T;return i((T=L[S])!==null&&T!==void 0?T:S)}).join(R?" ":" + ")});function U(u){return[M,E,e,o].filter(m=>u[`${m}Key`])}const Y=O(x,u=>(m,_,R=t.H)=>{const L=u(R),S=U(m),T={Comma:",",Backslash:"\\",IntlRo:"\\",IntlYen:"\\"},K=L.filter(j=>!S.includes(j)),A=S.filter(j=>!L.includes(j));if(K.length>0||A.length>0)return!1;let g=m.key.toLowerCase();return _?(m.altKey&&_.length===1&&(g=String.fromCharCode(m.keyCode).toLowerCase()),m.shiftKey&&_.length===1&&T[m.code]&&(g=T[m.code]),_==="del"&&(_="delete"),g===_.toLowerCase()):L.includes(g)})},"../../../node_modules/.pnpm/@wordpress+keycodes@4.8.2/node_modules/@wordpress/keycodes/build-module/platform.js":(B,w,r)=>{r.d(w,{H:()=>n});function n(t=null){if(!t){if(typeof window=="undefined")return!1;t=window}const{platform:f}=t.navigator;return f.indexOf("Mac")!==-1||["iPad","iPhone"].includes(f)}}}]);})();