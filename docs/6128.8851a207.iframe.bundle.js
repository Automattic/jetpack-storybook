"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6128],{"../../../node_modules/.pnpm/@babel+runtime@7.24.7/node_modules/@babel/runtime/helpers/esm/extends.js":(me,Y,K)=>{K.d(Y,{A:()=>m});function m(){return m=Object.assign?Object.assign.bind():function(D){for(var b=1;b<arguments.length;b++){var $=arguments[b];for(var U in $)({}).hasOwnProperty.call($,U)&&(D[U]=$[U])}return D},m.apply(null,arguments)}},"../../../node_modules/.pnpm/react-router-dom@6.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router-dom/index.js":(me,Y,K)=>{K.d(Y,{I9:()=>Ke,k2:()=>Fe});var m=K("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),D=K("../../../node_modules/.pnpm/@babel+runtime@7.24.7/node_modules/@babel/runtime/helpers/esm/extends.js"),b;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(b||(b={}));var $=function(e){return e};function U(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch(n){}}}var F="beforeunload",ge="hashchange",ne="popstate";function Ge(e){e===void 0&&(e={});var t=e,n=t.window,a=n===void 0?document.defaultView:n,r=a.history;function o(){var f=a.location,s=f.pathname,u=f.search,y=f.hash,w=r.state||{};return[w.idx,$({pathname:s,search:u,hash:y,state:w.usr||null,key:w.key||"default"})]}var i=null;function l(){if(i)p.call(i),i=null;else{var f=b.Pop,s=o(),u=s[0],y=s[1];if(p.length){if(u!=null){var w=h-u;w&&(i={action:f,location:y,retry:function(){_(w*-1)}},_(w))}}else B(f)}}a.addEventListener(ne,l);var c=b.Pop,v=o(),h=v[0],x=v[1],k=I(),p=I();h==null&&(h=0,r.replaceState(_extends({},r.state,{idx:h}),""));function P(f){return typeof f=="string"?f:W(f)}function R(f,s){return s===void 0&&(s=null),$(_extends({pathname:x.pathname,hash:"",search:""},typeof f=="string"?N(f):f,{state:s,key:G()}))}function j(f,s){return[{usr:f.state,key:f.key,idx:s},P(f)]}function E(f,s,u){return!p.length||(p.call({action:f,location:s,retry:u}),!1)}function B(f){c=f;var s=o();h=s[0],x=s[1],k.call({action:c,location:x})}function d(f,s){var u=b.Push,y=R(f,s);function w(){d(f,s)}if(E(u,y,w)){var S=j(y,h+1),O=S[0],H=S[1];try{r.pushState(O,"",H)}catch(T){a.location.assign(H)}B(u)}}function g(f,s){var u=b.Replace,y=R(f,s);function w(){g(f,s)}if(E(u,y,w)){var S=j(y,h),O=S[0],H=S[1];r.replaceState(O,"",H),B(u)}}function _(f){r.go(f)}var C={get action(){return c},get location(){return x},createHref:P,push:d,replace:g,go:_,back:function(){_(-1)},forward:function(){_(1)},listen:function(s){return k.push(s)},block:function(s){var u=p.push(s);return p.length===1&&a.addEventListener(F,z),function(){u(),p.length||a.removeEventListener(F,z)}}};return C}function ye(e){e===void 0&&(e={});var t=e,n=t.window,a=n===void 0?document.defaultView:n,r=a.history;function o(){var s=N(a.location.hash.substr(1)),u=s.pathname,y=u===void 0?"/":u,w=s.search,S=w===void 0?"":w,O=s.hash,H=O===void 0?"":O,T=r.state||{};return[T.idx,$({pathname:y,search:S,hash:H,state:T.usr||null,key:T.key||"default"})]}var i=null;function l(){if(i)p.call(i),i=null;else{var s=b.Pop,u=o(),y=u[0],w=u[1];if(p.length){if(y!=null){var S=h-y;S&&(i={action:s,location:w,retry:function(){C(S*-1)}},C(S))}}else d(s)}}a.addEventListener(ne,l),a.addEventListener(ge,function(){var s=o(),u=s[1];W(u)!==W(x)&&l()});var c=b.Pop,v=o(),h=v[0],x=v[1],k=I(),p=I();h==null&&(h=0,r.replaceState((0,D.A)({},r.state,{idx:h}),""));function P(){var s=document.querySelector("base"),u="";if(s&&s.getAttribute("href")){var y=a.location.href,w=y.indexOf("#");u=w===-1?y:y.slice(0,w)}return u}function R(s){return P()+"#"+(typeof s=="string"?s:W(s))}function j(s,u){return u===void 0&&(u=null),$((0,D.A)({pathname:x.pathname,hash:"",search:""},typeof s=="string"?N(s):s,{state:u,key:G()}))}function E(s,u){return[{usr:s.state,key:s.key,idx:u},R(s)]}function B(s,u,y){return!p.length||(p.call({action:s,location:u,retry:y}),!1)}function d(s){c=s;var u=o();h=u[0],x=u[1],k.call({action:c,location:x})}function g(s,u){var y=b.Push,w=j(s,u);function S(){g(s,u)}if(B(y,w,S)){var O=E(w,h+1),H=O[0],T=O[1];try{r.pushState(H,"",T)}catch(ht){a.location.assign(T)}d(y)}}function _(s,u){var y=b.Replace,w=j(s,u);function S(){_(s,u)}if(B(y,w,S)){var O=E(w,h),H=O[0],T=O[1];r.replaceState(H,"",T),d(y)}}function C(s){r.go(s)}var f={get action(){return c},get location(){return x},createHref:R,push:g,replace:_,go:C,back:function(){C(-1)},forward:function(){C(1)},listen:function(u){return k.push(u)},block:function(u){var y=p.push(u);return p.length===1&&a.addEventListener(F,z),function(){y(),p.length||a.removeEventListener(F,z)}}};return f}function Qe(e){e===void 0&&(e={});var t=e,n=t.initialEntries,a=n===void 0?["/"]:n,r=t.initialIndex,o=a.map(function(d){var g=$(_extends({pathname:"/",search:"",hash:"",state:null,key:G()},typeof d=="string"?N(d):d));return g}),i=ae(r==null?o.length-1:r,0,o.length-1),l=b.Pop,c=o[i],v=I(),h=I();function x(d){return typeof d=="string"?d:W(d)}function k(d,g){return g===void 0&&(g=null),$(_extends({pathname:c.pathname,search:"",hash:""},typeof d=="string"?N(d):d,{state:g,key:G()}))}function p(d,g,_){return!h.length||(h.call({action:d,location:g,retry:_}),!1)}function P(d,g){l=d,c=g,v.call({action:l,location:c})}function R(d,g){var _=b.Push,C=k(d,g);function f(){R(d,g)}p(_,C,f)&&(i+=1,o.splice(i,o.length,C),P(_,C))}function j(d,g){var _=b.Replace,C=k(d,g);function f(){j(d,g)}p(_,C,f)&&(o[i]=C,P(_,C))}function E(d){var g=ae(i+d,0,o.length-1),_=b.Pop,C=o[g];function f(){E(d)}p(_,C,f)&&(i=g,P(_,C))}var B={get index(){return i},get action(){return l},get location(){return c},createHref:x,push:R,replace:j,go:E,back:function(){E(-1)},forward:function(){E(1)},listen:function(g){return v.push(g)},block:function(g){return h.push(g)}};return B}function ae(e,t,n){return Math.min(Math.max(e,t),n)}function z(e){e.preventDefault(),e.returnValue=""}function I(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(a){return a!==n})}},call:function(n){e.forEach(function(a){return a&&a(n)})}}}function G(){return Math.random().toString(36).substr(2,8)}function W(e){var t=e.pathname,n=t===void 0?"/":t,a=e.search,r=a===void 0?"":a,o=e.hash,i=o===void 0?"":o;return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function N(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}/**
 * React Router v6.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function L(e,t){if(!e)throw new Error(t)}function Xe(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch(n){}}}const re={};function Ye(e,t,n){!t&&!re[e]&&(re[e]=!0)}const Z=(0,m.createContext)(null),Q=(0,m.createContext)(null),V=(0,m.createContext)({outlet:null,matches:[]});function Ze(e){let{basename:t,children:n,initialEntries:a,initialIndex:r}=e,o=useRef();o.current==null&&(o.current=createMemoryHistory({initialEntries:a,initialIndex:r}));let i=o.current,[l,c]=useState({action:i.action,location:i.location});return useLayoutEffect(()=>i.listen(c),[i]),createElement(ie,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i})}function qe(e){let{to:t,replace:n,state:a}=e;A()||L(!1);let r=oe();return useEffect(()=>{r(t,{replace:n,state:a})}),null}function et(e){return we(e.context)}function xe(e){L(!1)}function ie(e){let{basename:t="/",children:n=null,location:a,navigationType:r=b.Pop,navigator:o,static:i=!1}=e;A()&&L(!1);let l=de(t),c=(0,m.useMemo)(()=>({basename:l,navigator:o,static:i}),[l,o,i]);typeof a=="string"&&(a=N(a));let{pathname:v="/",search:h="",hash:x="",state:k=null,key:p="default"}=a,P=(0,m.useMemo)(()=>{let R=pe(v,l);return R==null?null:{pathname:R,search:h,hash:x,state:k,key:p}},[l,v,h,x,k,p]);return P==null?null:(0,m.createElement)(Z.Provider,{value:c},(0,m.createElement)(Q.Provider,{children:n,value:{location:P,navigationType:r}}))}function tt(e){let{children:t,location:n}=e;return be(ee(t),n)}function Pe(e){A()||L(!1);let{basename:t,navigator:n}=(0,m.useContext)(Z),{hash:a,pathname:r,search:o}=q(e),i=r;if(t!=="/"){let l=We(e),c=l!=null&&l.endsWith("/");i=r==="/"?t+(c?"/":""):M([t,r])}return n.createHref({pathname:i,search:o,hash:a})}function A(){return(0,m.useContext)(Q)!=null}function J(){return A()||L(!1),(0,m.useContext)(Q).location}function nt(){return useContext(Q).navigationType}function at(e){A()||L(!1);let{pathname:t}=J();return useMemo(()=>fe(e,t),[t,e])}function oe(){A()||L(!1);let{basename:e,navigator:t}=(0,m.useContext)(Z),{matches:n}=(0,m.useContext)(V),{pathname:a}=J(),r=JSON.stringify(n.map(l=>l.pathnameBase)),o=(0,m.useRef)(!1);return(0,m.useEffect)(()=>{o.current=!0}),(0,m.useCallback)(function(l,c){if(c===void 0&&(c={}),!o.current)return;if(typeof l=="number"){t.go(l);return}let v=he(l,JSON.parse(r),a);e!=="/"&&(v.pathname=M([e,v.pathname])),(c.replace?t.replace:t.push)(v,c.state)},[e,t,r,a])}const le=null;function rt(){return useContext(le)}function we(e){let t=useContext(V).outlet;return t&&createElement(le.Provider,{value:e},t)}function it(){let{matches:e}=useContext(V),t=e[e.length-1];return t?t.params:{}}function q(e){let{matches:t}=(0,m.useContext)(V),{pathname:n}=J(),a=JSON.stringify(t.map(r=>r.pathnameBase));return(0,m.useMemo)(()=>he(e,JSON.parse(a),n),[e,a,n])}function be(e,t){A()||L(!1);let{matches:n}=useContext(V),a=n[n.length-1],r=a?a.params:{},o=a?a.pathname:"/",i=a?a.pathnameBase:"/",l=a&&a.route,c=J(),v;if(t){var h;let P=typeof t=="string"?parsePath(t):t;i==="/"||(h=P.pathname)!=null&&h.startsWith(i)||L(!1),v=P}else v=c;let x=v.pathname||"/",k=i==="/"?x:x.slice(i.length)||"/",p=ke(e,{pathname:k});return ue(p&&p.map(P=>Object.assign({},P,{params:Object.assign({},r,P.params),pathname:M([i,P.pathname]),pathnameBase:P.pathnameBase==="/"?i:M([i,P.pathnameBase])})),n)}function ee(e){let t=[];return Children.forEach(e,n=>{if(!isValidElement(n))return;if(n.type===Fragment){t.push.apply(t,ee(n.props.children));return}n.type!==xe&&L(!1);let a={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(a.children=ee(n.props.children)),t.push(a)}),t}function ot(e,t){return t===void 0&&(t={}),e.replace(/:(\w+)/g,(n,a)=>(t[a]==null&&L(!1),t[a])).replace(/\/*\*$/,n=>t["*"]==null?"":t["*"].replace(/^\/*/,"/"))}function ke(e,t,n){n===void 0&&(n="/");let a=typeof t=="string"?parsePath(t):t,r=pe(a.pathname||"/",n);if(r==null)return null;let o=se(e);_e(o);let i=null;for(let l=0;i==null&&l<o.length;++l)i=Be(o[l],r);return i}function se(e,t,n,a){return t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a=""),e.forEach((r,o)=>{let i={relativePath:r.path||"",caseSensitive:r.caseSensitive===!0,childrenIndex:o,route:r};i.relativePath.startsWith("/")&&(i.relativePath.startsWith(a)||L(!1),i.relativePath=i.relativePath.slice(a.length));let l=M([a,i.relativePath]),c=n.concat(i);r.children&&r.children.length>0&&(r.index===!0&&L(!1),se(r.children,t,c,l)),!(r.path==null&&!r.index)&&t.push({path:l,score:$e(l,r.index),routesMeta:c})}),t}function _e(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:je(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const Ce=/^:\w+$/,Re=3,Se=2,Ee=1,Le=10,Oe=null,ce=e=>e==="*";function $e(e,t){let n=e.split("/"),a=n.length;return n.some(ce)&&(a+=Oe),t&&(a+=Se),n.filter(r=>!ce(r)).reduce((r,o)=>r+(Ce.test(o)?Re:o===""?Ee:Le),a)}function je(e,t){return e.length===t.length&&e.slice(0,-1).every((a,r)=>a===t[r])?e[e.length-1]-t[t.length-1]:0}function Be(e,t){let{routesMeta:n}=e,a={},r="/",o=[];for(let i=0;i<n.length;++i){let l=n[i],c=i===n.length-1,v=r==="/"?t:t.slice(r.length)||"/",h=fe({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},v);if(!h)return null;Object.assign(a,h.params);let x=l.route;o.push({params:a,pathname:M([r,h.pathname]),pathnameBase:de(M([r,h.pathnameBase])),route:x}),h.pathnameBase!=="/"&&(r=M([r,h.pathnameBase]))}return o}function lt(e){return ue(e)}function ue(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,a,r)=>createElement(V.Provider,{children:a.route.element!==void 0?a.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,r+1))}}),null)}function fe(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=He(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let o=r[0],i=o.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:a.reduce((v,h,x)=>{if(h==="*"){let k=l[x]||"";i=o.slice(0,o.length-k.length).replace(/(.)\/+$/,"$1")}return v[h]=Ne(l[x]||"",h),v},{}),pathname:o,pathnameBase:i,pattern:e}}function He(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(i,l)=>(a.push(l),"([^\\/]+)"));return e.endsWith("*")?(a.push("*"),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(r,t?void 0:"i"),a]}function Ne(e,t){try{return decodeURIComponent(e)}catch(n){return e}}function Te(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?N(e):e;return{pathname:n?n.startsWith("/")?n:Me(n,t):t,search:Ae(a),hash:Ie(r)}}function Me(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function he(e,t,n){let a=typeof e=="string"?N(e):e,r=e===""||a.pathname===""?"/":a.pathname,o;if(r==null)o=n;else{let l=t.length-1;if(r.startsWith("..")){let c=r.split("/");for(;c[0]==="..";)c.shift(),l-=1;a.pathname=c.join("/")}o=l>=0?t[l]:"/"}let i=Te(a,o);return r&&r!=="/"&&r.endsWith("/")&&!i.pathname.endsWith("/")&&(i.pathname+="/"),i}function We(e){return e===""||e.pathname===""?"/":typeof e=="string"?N(e).pathname:e.pathname}function pe(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const M=e=>e.join("/").replace(/\/\/+/g,"/"),de=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ae=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ie=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;/**
 * React Router DOM v6.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function X(){return X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},X.apply(this,arguments)}function ve(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,o;for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}const Ve=["onClick","reloadDocument","replace","state","target","to"],Je=["aria-current","caseSensitive","className","end","style","to","children"];function st(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch(n){}}}function ct(e){let{basename:t,children:n,window:a}=e,r=useRef();r.current==null&&(r.current=createBrowserHistory({window:a}));let o=r.current,[i,l]=useState({action:o.action,location:o.location});return useLayoutEffect(()=>o.listen(l),[o]),createElement(Router,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:o})}function Ke(e){let{basename:t,children:n,window:a}=e,r=(0,m.useRef)();r.current==null&&(r.current=ye({window:a}));let o=r.current,[i,l]=(0,m.useState)({action:o.action,location:o.location});return(0,m.useLayoutEffect)(()=>o.listen(l),[o]),(0,m.createElement)(ie,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:o})}function ut(e){let{basename:t,children:n,history:a}=e;const[r,o]=useState({action:a.action,location:a.location});return useLayoutEffect(()=>a.listen(o),[a]),createElement(Router,{basename:t,children:n,location:r.location,navigationType:r.action,navigator:a})}function De(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const Ue=(0,m.forwardRef)(function(t,n){let{onClick:a,reloadDocument:r,replace:o=!1,state:i,target:l,to:c}=t,v=ve(t,Ve),h=Pe(c),x=ze(c,{replace:o,state:i,target:l});function k(p){a&&a(p),!p.defaultPrevented&&!r&&x(p)}return(0,m.createElement)("a",X({},v,{href:h,onClick:k,ref:n,target:l}))}),Fe=(0,m.forwardRef)(function(t,n){let{"aria-current":a="page",caseSensitive:r=!1,className:o="",end:i=!1,style:l,to:c,children:v}=t,h=ve(t,Je),x=J(),k=q(c),p=x.pathname,P=k.pathname;r||(p=p.toLowerCase(),P=P.toLowerCase());let R=p===P||!i&&p.startsWith(P)&&p.charAt(P.length)==="/",j=R?a:void 0,E;typeof o=="function"?E=o({isActive:R}):E=[o,R?"active":null].filter(Boolean).join(" ");let B=typeof l=="function"?l({isActive:R}):l;return(0,m.createElement)(Ue,X({},h,{"aria-current":j,className:E,ref:n,style:B,to:c}),typeof v=="function"?v({isActive:R}):v)});function ze(e,t){let{target:n,replace:a,state:r}=t===void 0?{}:t,o=oe(),i=J(),l=q(e);return(0,m.useCallback)(c=>{if(c.button===0&&(!n||n==="_self")&&!De(c)){c.preventDefault();let v=!!a||W(i)===W(l);o(e,{replace:v,state:r})}},[i,o,l,a,r,n,e])}function ft(e){let t=useRef(te(e)),n=useLocation(),a=useMemo(()=>{let i=te(n.search);for(let l of t.current.keys())i.has(l)||t.current.getAll(l).forEach(c=>{i.append(l,c)});return i},[n.search]),r=useNavigate(),o=useCallback((i,l)=>{r("?"+te(i),l)},[r]);return[a,o]}function te(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let a=e[n];return t.concat(Array.isArray(a)?a.map(r=>[n,r]):[[n,a]])},[]))}}}]);})();