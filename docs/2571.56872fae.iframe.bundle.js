"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2571],{"../../../node_modules/.pnpm/@floating-ui+react-dom@2.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs":(K,w,r)=>{r.d(w,{RR:()=>x,YF:()=>h,cv:()=>y,dp:()=>U,dr:()=>D,uY:()=>R,x7:()=>E});var n=r("../../../node_modules/.pnpm/@floating-ui+dom@1.6.10/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),t=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=r("../../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js"),p=typeof document!="undefined"?t.useLayoutEffect:t.useEffect;function s(e,o){if(e===o)return!0;if(typeof e!=typeof o)return!1;if(typeof e=="function"&&e.toString()===o.toString())return!0;let l,i,O;if(e&&o&&typeof e=="object"){if(Array.isArray(e)){if(l=e.length,l!==o.length)return!1;for(i=l;i--!==0;)if(!s(e[i],o[i]))return!1;return!0}if(O=Object.keys(e),l=O.length,l!==Object.keys(o).length)return!1;for(i=l;i--!==0;)if(!{}.hasOwnProperty.call(o,O[i]))return!1;for(i=l;i--!==0;){const k=O[i];if(!(k==="_owner"&&e.$$typeof)&&!s(e[k],o[k]))return!1}return!0}return e!==e&&o!==o}function d(e){return typeof window=="undefined"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function c(e,o){const l=d(e);return Math.round(o*l)/l}function A(e){const o=t.useRef(e);return p(()=>{o.current=e}),o}function h(e){e===void 0&&(e={});const{placement:o="bottom",strategy:l="absolute",middleware:i=[],platform:O,elements:{reference:k,floating:Q}={},transform:V=!0,whileElementsMounted:Y,open:H}=e,[j,z]=t.useState({x:0,y:0,strategy:l,placement:o,middlewareData:{},isPositioned:!1}),[u,m]=t.useState(i);s(u,i)||m(i);const[_,C]=t.useState(null),[B,S]=t.useState(null),T=t.useCallback(g=>{g!==L.current&&(L.current=g,C(g))},[]),v=t.useCallback(g=>{g!==W.current&&(W.current=g,S(g))},[]),b=k||_,P=Q||B,L=t.useRef(null),W=t.useRef(null),G=t.useRef(j),ne=Y!=null,J=A(Y),q=A(O),N=t.useCallback(()=>{if(!L.current||!W.current)return;const g={placement:o,strategy:l,middleware:u};q.current&&(g.platform=q.current),(0,n.oo)(L.current,W.current,g).then(X=>{const F={...X,isPositioned:!0};ee.current&&!s(G.current,F)&&(G.current=F,f.flushSync(()=>{z(F)}))})},[u,o,l,q]);p(()=>{H===!1&&G.current.isPositioned&&(G.current.isPositioned=!1,z(g=>({...g,isPositioned:!1})))},[H]);const ee=t.useRef(!1);p(()=>(ee.current=!0,()=>{ee.current=!1}),[]),p(()=>{if(b&&(L.current=b),P&&(W.current=P),b&&P){if(J.current)return J.current(b,P,N);N()}},[b,P,N,J,ne]);const oe=t.useMemo(()=>({reference:L,floating:W,setReference:T,setFloating:v}),[T,v]),I=t.useMemo(()=>({reference:b,floating:P}),[b,P]),te=t.useMemo(()=>{const g={position:l,left:0,top:0};if(!I.floating)return g;const X=c(I.floating,j.x),F=c(I.floating,j.y);return V?{...g,transform:"translate("+X+"px, "+F+"px)",...d(I.floating)>=1.5&&{willChange:"transform"}}:{position:l,left:X,top:F}},[l,V,I.floating,j.x,j.y]);return t.useMemo(()=>({...j,update:N,refs:oe,elements:I,floatingStyles:te}),[j,N,oe,I,te])}const a=e=>{function o(l){return{}.hasOwnProperty.call(l,"current")}return{name:"arrow",options:e,fn(l){const{element:i,padding:O}=typeof e=="function"?e(l):e;return i&&o(i)?i.current!=null?(0,n.x7)({element:i.current,padding:O}).fn(l):{}:i?(0,n.x7)({element:i,padding:O}).fn(l):{}}}},y=(e,o)=>({...(0,n.cv)(e),options:[e,o]}),R=(e,o)=>({...(0,n.uY)(e),options:[e,o]}),D=(e,o)=>({...(0,n.dr)(e),options:[e,o]}),x=(e,o)=>({...(0,n.RR)(e),options:[e,o]}),U=(e,o)=>({...(0,n.dp)(e),options:[e,o]}),Z=(e,o)=>({...autoPlacement$1(e),options:[e,o]}),$=(e,o)=>({...hide$1(e),options:[e,o]}),M=(e,o)=>({...inline$1(e),options:[e,o]}),E=(e,o)=>({...a(e),options:[e,o]})},"../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-dialog/index.js":(K,w,r)=>{r.d(w,{Z:()=>h});var n=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=r("../../../node_modules/.pnpm/@wordpress+keycodes@4.5.0/node_modules/@wordpress/keycodes/build-module/index.js"),f=r("../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-constrained-tabbing/index.js"),p=r("../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-on-mount/index.js"),s=r("../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-return/index.js"),d=r("../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-outside/index.js"),c=r("../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js");function A(a){const y=(0,n.useRef)(),{constrainTabbing:R=a.focusOnMount!==!1}=a;(0,n.useEffect)(()=>{y.current=a},Object.values(a));const D=(0,f.Z)(),x=(0,p.Z)(a.focusOnMount),U=(0,s.Z)(),Z=(0,d.Z)(M=>{var E,e;(E=y.current)!=null&&E.__unstableOnClose?y.current.__unstableOnClose("focus-outside",M):(e=y.current)!=null&&e.onClose&&y.current.onClose()}),$=(0,n.useCallback)(M=>{M&&M.addEventListener("keydown",E=>{var e;E.keyCode===t.hY&&!E.defaultPrevented&&((e=y.current)!=null&&e.onClose)&&(E.preventDefault(),y.current.onClose())})},[]);return[(0,c.Z)([R?D:null,a.focusOnMount!==!1?U:null,a.focusOnMount!==!1?x:null,$]),{...Z,tabIndex:-1}]}const h=A},"../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-outside/index.js":(K,w,r)=>{r.d(w,{Z:()=>p});var n=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const t=["button","submit"];function f(s){if(!(s instanceof window.HTMLElement))return!1;switch(s.nodeName){case"A":case"BUTTON":return!0;case"INPUT":return t.includes(s.type)}return!1}function p(s){const d=(0,n.useRef)(s);(0,n.useEffect)(()=>{d.current=s},[s]);const c=(0,n.useRef)(!1),A=(0,n.useRef)(),h=(0,n.useCallback)(()=>{clearTimeout(A.current)},[]);(0,n.useEffect)(()=>()=>h(),[]),(0,n.useEffect)(()=>{s||h()},[s,h]);const a=(0,n.useCallback)(R=>{const{type:D,target:x}=R;["mouseup","touchend"].includes(D)?c.current=!1:f(x)&&(c.current=!0)},[]),y=(0,n.useCallback)(R=>{var x;if(R.persist(),c.current)return;const D=R.target.getAttribute("data-unstable-ignore-focus-outside-for-relatedtarget");D&&((x=R.relatedTarget)!=null&&x.closest(D))||(A.current=setTimeout(()=>{if(!document.hasFocus()){R.preventDefault();return}typeof d.current=="function"&&d.current(R)},0))},[]);return{onFocus:h,onMouseDown:a,onMouseUp:a,onTouchStart:a,onTouchEnd:a,onBlur:y}}},"../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-observable-value/index.js":(K,w,r)=>{r.d(w,{Z:()=>t});var n=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function t(f,p){const[s,d]=(0,n.useMemo)(()=>[c=>f.subscribe(p,c),()=>f.get(p)],[f,p]);return(0,n.useSyncExternalStore)(s,d,d)}},"../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js":(K,w,r)=>{r.d(w,{Z:()=>A});var n=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=r("../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js");const f={xhuge:1920,huge:1440,wide:1280,xlarge:1080,large:960,medium:782,small:600,mobile:480},p={">=":"min-width","<":"max-width"},s={">=":(h,a)=>a>=h,"<":(h,a)=>a<h},d=(0,n.createContext)(null),c=(h,a=">=")=>{const y=(0,n.useContext)(d),R=!y&&`(${p[a]}: ${f[h]}px)`,D=(0,t.Z)(R||void 0);return y?s[a](f[h],y):D};c.__experimentalWidthProvider=d.Provider;const A=c},"../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/observable-map/index.js":(K,w,r)=>{r.d(w,{s:()=>n});function n(){const t=new Map,f=new Map;function p(s){const d=f.get(s);if(d)for(const c of d)c()}return{get(s){return t.get(s)},set(s,d){t.set(s,d),p(s)},delete(s){t.delete(s),p(s)},subscribe(s,d){let c=f.get(s);return c||(c=new Set,f.set(s,c)),c.add(d),()=>{c.delete(d),c.size===0&&f.delete(s)}}}}},"../../../node_modules/.pnpm/@wordpress+element@6.5.0/node_modules/@wordpress/element/build-module/utils.js":(K,w,r)=>{r.d(w,{V:()=>n});const n=t=>typeof t=="number"?!1:typeof(t==null?void 0:t.valueOf())=="string"||Array.isArray(t)?!t.length:!t},"../../../node_modules/.pnpm/@wordpress+keycodes@4.5.0/node_modules/@wordpress/keycodes/build-module/index.js":(K,w,r)=>{r.d(w,{Ac:()=>Q,Bi:()=>h,E_:()=>Y,J3:()=>H,K5:()=>s,L_:()=>c,Mf:()=>p,RL:()=>R,Sd:()=>y,UP:()=>D,WV:()=>U,ZH:()=>f,hY:()=>d,kC:()=>$,pX:()=>x,uR:()=>a,vd:()=>z,wx:()=>A,yY:()=>Z});var n=r("../../../node_modules/.pnpm/@wordpress+i18n@5.5.0/node_modules/@wordpress/i18n/build-module/index.js"),t=r("../../../node_modules/.pnpm/@wordpress+keycodes@4.5.0/node_modules/@wordpress/keycodes/build-module/platform.js");const f=8,p=9,s=13,d=27,c=32,A=33,h=34,a=35,y=36,R=37,D=38,x=39,U=40,Z=46,$=121,M="alt",E="ctrl",e="meta",o="shift",l=48;function i(u){return u.length<2?u.toUpperCase():u.charAt(0).toUpperCase()+u.slice(1)}function O(u,m){return Object.fromEntries(Object.entries(u).map(([_,C])=>[_,m(C)]))}const k={primary:u=>u()?[e]:[E],primaryShift:u=>u()?[o,e]:[E,o],primaryAlt:u=>u()?[M,e]:[E,M],secondary:u=>u()?[o,M,e]:[E,o,M],access:u=>u()?[E,M]:[o,M],ctrl:()=>[E],alt:()=>[M],ctrlShift:()=>[E,o],shift:()=>[o],shiftAlt:()=>[o,M],undefined:()=>[]},Q=O(k,u=>(m,_=t.R)=>[...u(_),m.toLowerCase()].join("+")),V=O(k,u=>(m,_=t.R)=>{const C=_(),B={[M]:C?"\u2325":"Alt",[E]:C?"\u2303":"Ctrl",[e]:"\u2318",[o]:C?"\u21E7":"Shift"};return[...u(_).reduce((T,v)=>{var b;const P=(b=B[v])!==null&&b!==void 0?b:v;return C?[...T,P]:[...T,P,"+"]},[]),i(m)]}),Y=O(V,u=>(m,_=t.R)=>u(m,_).join("")),H=O(k,u=>(m,_=t.R)=>{const C=_(),B={[o]:"Shift",[e]:C?"Command":"Control",[E]:"Control",[M]:C?"Option":"Alt",",":(0,n.__)("Comma"),".":(0,n.__)("Period"),"`":(0,n.__)("Backtick"),"~":(0,n.__)("Tilde")};return[...u(_),m].map(S=>{var T;return i((T=B[S])!==null&&T!==void 0?T:S)}).join(C?" ":" + ")});function j(u){return[M,E,e,o].filter(m=>u[`${m}Key`])}const z=O(k,u=>(m,_,C=t.R)=>{const B=u(C),S=j(m),T={Comma:",",Backslash:"\\",IntlRo:"\\",IntlYen:"\\"},v=B.filter(L=>!S.includes(L)),b=S.filter(L=>!B.includes(L));if(v.length>0||b.length>0)return!1;let P=m.key.toLowerCase();return _?(m.altKey&&_.length===1&&(P=String.fromCharCode(m.keyCode).toLowerCase()),m.shiftKey&&_.length===1&&T[m.code]&&(P=T[m.code]),_==="del"&&(_="delete"),P===_.toLowerCase()):B.includes(P)})},"../../../node_modules/.pnpm/@wordpress+keycodes@4.5.0/node_modules/@wordpress/keycodes/build-module/platform.js":(K,w,r)=>{r.d(w,{R:()=>n});function n(t=null){if(!t){if(typeof window=="undefined")return!1;t=window}const{platform:f}=t.navigator;return f.indexOf("Mac")!==-1||["iPad","iPhone"].includes(f)}}}]);})();
