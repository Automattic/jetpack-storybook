"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[143],{"../../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.3.1_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs":(O,S,l)=>{l.d(S,{F:()=>C,e:()=>E});var c=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function n(a,v){typeof a=="function"?a(v):a!=null&&(a.current=v)}function C(...a){return v=>a.forEach(u=>n(u,v))}function E(...a){return(0,c.useCallback)(C(...a),a)}},"../../../node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.3.1_react@18.3.1/node_modules/@radix-ui/react-context/dist/index.mjs":(O,S,l)=>{l.d(S,{b:()=>C,k:()=>n});var c=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function n(a,v){const u=(0,c.createContext)(v);function _(i){const{children:h,...s}=i,p=(0,c.useMemo)(()=>s,Object.values(s));return(0,c.createElement)(u.Provider,{value:p},h)}function y(i){const h=(0,c.useContext)(u);if(h)return h;if(v!==void 0)return v;throw new Error(`\`${i}\` must be used within \`${a}\``)}return _.displayName=a+"Provider",[_,y]}function C(a,v=[]){let u=[];function _(i,h){const s=(0,c.createContext)(h),p=u.length;u=[...u,h];function $(P){const{scope:w,children:T,...I}=P,Q=(w==null?void 0:w[a][p])||s,J=(0,c.useMemo)(()=>I,Object.values(I));return(0,c.createElement)(Q.Provider,{value:J},T)}function R(P,w){const T=(w==null?void 0:w[a][p])||s,I=(0,c.useContext)(T);if(I)return I;if(h!==void 0)return h;throw new Error(`\`${P}\` must be used within \`${i}\``)}return $.displayName=i+"Provider",[$,R]}const y=()=>{const i=u.map(h=>(0,c.createContext)(h));return function(s){const p=(s==null?void 0:s[a])||i;return(0,c.useMemo)(()=>({[`__scope${a}`]:{...s,[a]:p}}),[s,p])}};return y.scopeName=a,[_,E(y,...v)]}function E(...a){const v=a[0];if(a.length===1)return v;const u=()=>{const _=a.map(y=>({useScope:y(),scopeName:y.scopeName}));return function(i){const h=_.reduce((s,{useScope:p,scopeName:$})=>{const P=p(i)[`__scope${$}`];return{...s,...P}},{});return(0,c.useMemo)(()=>({[`__scope${v.scopeName}`]:h}),[h])}};return u.scopeName=v.scopeName,u}},"../../../node_modules/.pnpm/@radix-ui+react-focus-guards@1.0.1_@types+react@18.3.1_react@18.3.1/node_modules/@radix-ui/react-focus-guards/dist/index.mjs":(O,S,l)=>{l.d(S,{EW:()=>E});var c=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let n=0;function C(u){return E(),u.children}function E(){(0,c.useEffect)(()=>{var u,_;const y=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(u=y[0])!==null&&u!==void 0?u:a()),document.body.insertAdjacentElement("beforeend",(_=y[1])!==null&&_!==void 0?_:a()),n++,()=>{n===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(i=>i.remove()),n--}},[])}function a(){const u=document.createElement("span");return u.setAttribute("data-radix-focus-guard",""),u.tabIndex=0,u.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",u}const v=null},"../../../node_modules/.pnpm/@radix-ui+react-id@1.0.1_@types+react@18.3.1_react@18.3.1/node_modules/@radix-ui/react-id/dist/index.mjs":(O,S,l)=>{var c;l.d(S,{M:()=>v});var n=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),C=l("../../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.3.1_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");const E=(c||(c=l.t(n,2)))["useId".toString()]||(()=>{});let a=0;function v(u){const[_,y]=n.useState(E());return(0,C.b)(()=>{u||y(i=>i!=null?i:String(a++))},[u]),u||(_?`radix-${_}`:"")}},"../../../node_modules/.pnpm/@radix-ui+react-slot@1.0.2_@types+react@18.3.1_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs":(O,S,l)=>{l.d(S,{g7:()=>E});var c=l("../../../node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/extends.js"),n=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),C=l("../../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.3.1_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs");const E=(0,n.forwardRef)((i,h)=>{const{children:s,...p}=i,$=n.Children.toArray(s),R=$.find(u);if(R){const P=R.props.children,w=$.map(T=>T===R?n.Children.count(P)>1?n.Children.only(null):(0,n.isValidElement)(P)?P.props.children:null:T);return(0,n.createElement)(a,(0,c.Z)({},p,{ref:h}),(0,n.isValidElement)(P)?(0,n.cloneElement)(P,void 0,w):null)}return(0,n.createElement)(a,(0,c.Z)({},p,{ref:h}),s)});E.displayName="Slot";const a=(0,n.forwardRef)((i,h)=>{const{children:s,...p}=i;return(0,n.isValidElement)(s)?(0,n.cloneElement)(s,{..._(p,s.props),ref:h?(0,C.F)(h,s.ref):s.ref}):n.Children.count(s)>1?n.Children.only(null):null});a.displayName="SlotClone";const v=({children:i})=>(0,n.createElement)(n.Fragment,null,i);function u(i){return(0,n.isValidElement)(i)&&i.type===v}function _(i,h){const s={...h};for(const p in h){const $=i[p],R=h[p];/^on[A-Z]/.test(p)?$&&R?s[p]=(...w)=>{R(...w),$(...w)}:$&&(s[p]=$):p==="style"?s[p]={...$,...R}:p==="className"&&(s[p]=[$,R].filter(Boolean).join(" "))}return{...i,...s}}const y=null},"../../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.3.1_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs":(O,S,l)=>{l.d(S,{W:()=>n});var c=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function n(C){const E=(0,c.useRef)(C);return(0,c.useEffect)(()=>{E.current=C}),(0,c.useMemo)(()=>(...a)=>{var v;return(v=E.current)===null||v===void 0?void 0:v.call(E,...a)},[])}},"../../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.3.1_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs":(O,S,l)=>{l.d(S,{T:()=>C});var c=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=l("../../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.3.1_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");function C({prop:a,defaultProp:v,onChange:u=()=>{}}){const[_,y]=E({defaultProp:v,onChange:u}),i=a!==void 0,h=i?a:_,s=(0,n.W)(u),p=(0,c.useCallback)($=>{if(i){const P=typeof $=="function"?$(a):$;P!==a&&s(P)}else y($)},[i,a,y,s]);return[h,p]}function E({defaultProp:a,onChange:v}){const u=(0,c.useState)(a),[_]=u,y=(0,c.useRef)(_),i=(0,n.W)(v);return(0,c.useEffect)(()=>{y.current!==_&&(i(_),y.current=_)},[_,y,i]),u}},"../../../node_modules/.pnpm/@radix-ui+react-use-escape-keydown@1.0.3_@types+react@18.3.1_react@18.3.1/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs":(O,S,l)=>{l.d(S,{e:()=>C});var c=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=l("../../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.3.1_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");function C(E,a=globalThis==null?void 0:globalThis.document){const v=(0,n.W)(E);(0,c.useEffect)(()=>{const u=_=>{_.key==="Escape"&&v(_)};return a.addEventListener("keydown",u),()=>a.removeEventListener("keydown",u)},[v,a])}},"../../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.3.1_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs":(O,S,l)=>{l.d(S,{b:()=>n});var c=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const n=globalThis!=null&&globalThis.document?c.useLayoutEffect:()=>{}},"../../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.3.1_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/Combination.js":(O,S,l)=>{l.d(S,{Z:()=>Ae});var c=l("../../../node_modules/.pnpm/tslib@2.5.0/node_modules/tslib/tslib.es6.js"),n=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),C="right-scroll-bar-position",E="width-before-scroll-bar",a="with-scroll-bars-hidden",v="--removed-body-scroll-bar-size";function u(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function _(e,t){var r=(0,n.useState)(function(){return{value:e,callback:t,facade:{get current(){return r.value},set current(o){var f=r.value;f!==o&&(r.value=o,r.callback(o,f))}}}})[0];return r.callback=t,r.facade}var y=typeof window!="undefined"?n.useLayoutEffect:n.useEffect,i=new WeakMap;function h(e,t){var r=_(t||null,function(o){return e.forEach(function(f){return u(f,o)})});return y(function(){var o=i.get(r);if(o){var f=new Set(o),g=new Set(e),b=r.current;f.forEach(function(m){g.has(m)||u(m,null)}),g.forEach(function(m){f.has(m)||u(m,b)})}i.set(r,e)},[e]),r}function s(e){return e}function p(e,t){t===void 0&&(t=s);var r=[],o=!1,f={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(g){var b=t(g,o);return r.push(b),function(){r=r.filter(function(m){return m!==b})}},assignSyncMedium:function(g){for(o=!0;r.length;){var b=r;r=[],b.forEach(g)}r={push:function(m){return g(m)},filter:function(){return r}}},assignMedium:function(g){o=!0;var b=[];if(r.length){var m=r;r=[],m.forEach(g),b=r}var L=function(){var k=b;b=[],k.forEach(g)},j=function(){return Promise.resolve().then(L)};j(),r={push:function(k){b.push(k),j()},filter:function(k){return b=b.filter(k),r}}}};return f}function $(e,t){return t===void 0&&(t=s),p(e,t)}function R(e){e===void 0&&(e={});var t=p(null);return t.options=(0,c.pi)({async:!0,ssr:!1},e),t}var P=R(),w=function(){},T=n.forwardRef(function(e,t){var r=n.useRef(null),o=n.useState({onScrollCapture:w,onWheelCapture:w,onTouchMoveCapture:w}),f=o[0],g=o[1],b=e.forwardProps,m=e.children,L=e.className,j=e.removeScrollBar,k=e.enabled,N=e.shards,U=e.sideCar,K=e.noIsolation,V=e.inert,d=e.allowPinchZoom,x=e.as,B=x===void 0?"div":x,A=(0,c._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),D=U,W=h([r,t]),M=(0,c.pi)((0,c.pi)({},A),f);return n.createElement(n.Fragment,null,k&&n.createElement(D,{sideCar:P,removeScrollBar:j,shards:N,noIsolation:K,inert:V,setCallbacks:g,allowPinchZoom:!!d,lockRef:r}),b?n.cloneElement(n.Children.only(m),(0,c.pi)((0,c.pi)({},M),{ref:W})):n.createElement(B,(0,c.pi)({},M,{className:L,ref:W}),m))});T.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},T.classNames={fullWidth:E,zeroRight:C};var I=function(e){var t=e.sideCar,r=(0,c._T)(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return n.createElement(o,(0,c.pi)({},r))};I.isSideCarExport=!0;function Q(e,t){return e.useMedium(t),I}var J=l("../../../node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js");function fe(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=(0,J.V)();return t&&e.setAttribute("nonce",t),e}function me(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function ve(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var he=function(){var e=0,t=null;return{add:function(r){e==0&&(t=fe())&&(me(t,r),ve(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},pe=function(){var e=he();return function(t,r){n.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&r])}},ne=function(){var e=pe(),t=function(r){var o=r.styles,f=r.dynamic;return e(o,f),null};return t},_e={left:0,top:0,right:0,gap:0},q=function(e){return parseInt(e||"",10)||0},be=function(e){var t=window.getComputedStyle(document.body),r=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],f=t[e==="padding"?"paddingRight":"marginRight"];return[q(r),q(o),q(f)]},ge=function(e){if(e===void 0&&(e="margin"),typeof window=="undefined")return _e;var t=be(e),r=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-r+t[2]-t[0])}},Ee=ne(),H="data-scroll-locked",xe=function(e,t,r,o){var f=e.left,g=e.top,b=e.right,m=e.gap;return r===void 0&&(r="margin"),`
  .`.concat(a,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(m,"px ").concat(o,`;
  }
  body[`).concat(H,`] {
    overflow: hidden `).concat(o,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(o,";"),r==="margin"&&`
    padding-left: `.concat(f,`px;
    padding-top: `).concat(g,`px;
    padding-right: `).concat(b,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(m,"px ").concat(o,`;
    `),r==="padding"&&"padding-right: ".concat(m,"px ").concat(o,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(C,` {
    right: `).concat(m,"px ").concat(o,`;
  }
  
  .`).concat(E,` {
    margin-right: `).concat(m,"px ").concat(o,`;
  }
  
  .`).concat(C," .").concat(C,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(E," .").concat(E,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(H,`] {
    `).concat(v,": ").concat(m,`px;
  }
`)},re=function(){var e=parseInt(document.body.getAttribute(H)||"0",10);return isFinite(e)?e:0},ye=function(){n.useEffect(function(){return document.body.setAttribute(H,(re()+1).toString()),function(){var e=re()-1;e<=0?document.body.removeAttribute(H):document.body.setAttribute(H,e.toString())}},[])},Ce=function(e){var t=e.noRelative,r=e.noImportant,o=e.gapMode,f=o===void 0?"margin":o;ye();var g=n.useMemo(function(){return ge(f)},[f]);return n.createElement(Ee,{styles:xe(g,!t,f,r?"":"!important")})},ee=!1;if(typeof window!="undefined")try{var Z=Object.defineProperty({},"passive",{get:function(){return ee=!0,!0}});window.addEventListener("test",Z,Z),window.removeEventListener("test",Z,Z)}catch(e){ee=!1}var X=ee?{passive:!1}:!1,$e=function(e){return e.tagName==="TEXTAREA"},oe=function(e,t){var r=window.getComputedStyle(e);return r[t]!=="hidden"&&!(r.overflowY===r.overflowX&&!$e(e)&&r[t]==="visible")},Se=function(e){return oe(e,"overflowY")},Pe=function(e){return oe(e,"overflowX")},ae=function(e,t){var r=t;do{typeof ShadowRoot!="undefined"&&r instanceof ShadowRoot&&(r=r.host);var o=ce(e,r);if(o){var f=ue(e,r),g=f[1],b=f[2];if(g>b)return!0}r=r.parentNode}while(r&&r!==document.body);return!1},we=function(e){var t=e.scrollTop,r=e.scrollHeight,o=e.clientHeight;return[t,r,o]},Re=function(e){var t=e.scrollLeft,r=e.scrollWidth,o=e.clientWidth;return[t,r,o]},ce=function(e,t){return e==="v"?Se(t):Pe(t)},ue=function(e,t){return e==="v"?we(t):Re(t)},Me=function(e,t){return e==="h"&&t==="rtl"?-1:1},ke=function(e,t,r,o,f){var g=Me(e,window.getComputedStyle(t).direction),b=g*o,m=r.target,L=t.contains(m),j=!1,k=b>0,N=0,U=0;do{var K=ue(e,m),V=K[0],d=K[1],x=K[2],B=d-x-g*V;(V||B)&&ce(e,m)&&(N+=B,U+=V),m=m.parentNode}while(!L&&m!==document.body||L&&(t.contains(m)||t===m));return(k&&(f&&N===0||!f&&b>N)||!k&&(f&&U===0||!f&&-b>U))&&(j=!0),j},G=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ie=function(e){return[e.deltaX,e.deltaY]},le=function(e){return e&&"current"in e?e.current:e},Te=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Le=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},je=0,Y=[];function Be(e){var t=n.useRef([]),r=n.useRef([0,0]),o=n.useRef(),f=n.useState(je++)[0],g=n.useState(function(){return ne()})[0],b=n.useRef(e);n.useEffect(function(){b.current=e},[e]),n.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(f));var d=(0,c.ev)([e.lockRef.current],(e.shards||[]).map(le),!0).filter(Boolean);return d.forEach(function(x){return x.classList.add("allow-interactivity-".concat(f))}),function(){document.body.classList.remove("block-interactivity-".concat(f)),d.forEach(function(x){return x.classList.remove("allow-interactivity-".concat(f))})}}},[e.inert,e.lockRef.current,e.shards]);var m=n.useCallback(function(d,x){if("touches"in d&&d.touches.length===2)return!b.current.allowPinchZoom;var B=G(d),A=r.current,D="deltaX"in d?d.deltaX:A[0]-B[0],W="deltaY"in d?d.deltaY:A[1]-B[1],M,te=d.target,F=Math.abs(D)>Math.abs(W)?"h":"v";if("touches"in d&&F==="h"&&te.type==="range")return!1;var z=ae(F,te);if(!z)return!0;if(z?M=F:(M=F==="v"?"h":"v",z=ae(F,te)),!z)return!1;if(!o.current&&"changedTouches"in d&&(D||W)&&(o.current=M),!M)return!0;var se=o.current||M;return ke(se,x,d,se==="h"?D:W,!0)},[]),L=n.useCallback(function(d){var x=d;if(!(!Y.length||Y[Y.length-1]!==g)){var B="deltaY"in x?ie(x):G(x),A=t.current.filter(function(M){return M.name===x.type&&M.target===x.target&&Te(M.delta,B)})[0];if(A&&A.should){x.cancelable&&x.preventDefault();return}if(!A){var D=(b.current.shards||[]).map(le).filter(Boolean).filter(function(M){return M.contains(x.target)}),W=D.length>0?m(x,D[0]):!b.current.noIsolation;W&&x.cancelable&&x.preventDefault()}}},[]),j=n.useCallback(function(d,x,B,A){var D={name:d,delta:x,target:B,should:A};t.current.push(D),setTimeout(function(){t.current=t.current.filter(function(W){return W!==D})},1)},[]),k=n.useCallback(function(d){r.current=G(d),o.current=void 0},[]),N=n.useCallback(function(d){j(d.type,ie(d),d.target,m(d,e.lockRef.current))},[]),U=n.useCallback(function(d){j(d.type,G(d),d.target,m(d,e.lockRef.current))},[]);n.useEffect(function(){return Y.push(g),e.setCallbacks({onScrollCapture:N,onWheelCapture:N,onTouchMoveCapture:U}),document.addEventListener("wheel",L,X),document.addEventListener("touchmove",L,X),document.addEventListener("touchstart",k,X),function(){Y=Y.filter(function(d){return d!==g}),document.removeEventListener("wheel",L,X),document.removeEventListener("touchmove",L,X),document.removeEventListener("touchstart",k,X)}},[]);var K=e.removeScrollBar,V=e.inert;return n.createElement(n.Fragment,null,V?n.createElement(g,{styles:Le(f)}):null,K?n.createElement(Ce,{gapMode:"margin"}):null)}const De=Q(P,Be);var de=n.forwardRef(function(e,t){return n.createElement(T,(0,c.pi)({},e,{ref:t,sideCar:De}))});de.classNames=T.classNames;const Ae=de}}]);})();
