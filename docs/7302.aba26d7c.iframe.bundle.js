"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7302],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.2.9_storybook@8.2.9/node_modules/@storybook/addon-actions/dist/index.mjs":(j,f,r)=>{r.d(f,{aD:()=>i});var p=r("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),a=r("storybook/internal/preview-api"),l=r("@storybook/global"),d=r("storybook/internal/preview-errors"),m="actions",h="storybook/actions",v=`${h}/panel`,y=`${h}/action-event`,b=`${h}/action-clear`,R="$___storybook.isCyclic",E={depth:10,clearOnStoryChange:!0,limit:50},O=(n={})=>{Object.assign(E,n)},g=(n,t)=>{let e=Object.getPrototypeOf(n);return!e||t(e)?e:g(e,t)},w=n=>!!(typeof n=="object"&&n&&g(n,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof n.persist=="function"),S=n=>{if(w(n)){let t=Object.create(n.constructor.prototype,Object.getOwnPropertyDescriptors(n));t.persist();let e=Object.getOwnPropertyDescriptor(t,"view"),o=e==null?void 0:e.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...e,value:Object.create(o.constructor.prototype)}),t}return n},s=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,p.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function i(n,t={}){let e={...E,...t},o=function(..._){var P,I;if(t.implicit){let C=(P="__STORYBOOK_PREVIEW__"in l.global?l.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:P.storyRenders.find(x=>x.phase==="playing"||x.phase==="rendering");if(C){let x=!((I=window==null?void 0:window.FEATURES)!=null&&I.disallowImplicitActionsInRenderV8),L=new d.ImplicitActionsDuringRendering({phase:C.phase,name:n,deprecated:x});if(x)console.warn(L);else throw L}}let u=a.addons.getChannel(),D=s(),T=5,k=_.map(S),A=_.length>1?k:k[0],B={id:D,count:0,data:{name:n,args:A},options:{...e,maxDepth:T+(e.depth||3),allowFunction:e.allowFunction||!1}};u.emit(y,B)};return o.isAction=!0,o.implicit=t.implicit,o}var c=(...n)=>{let t=E,e=n;e.length===1&&Array.isArray(e[0])&&([e]=e),e.length!==1&&typeof e[e.length-1]!="string"&&(t={...E,...e.pop()});let o=e[0];(e.length!==1||typeof o=="string")&&(o={},e.forEach(u=>{o[u]=u}));let _={};return Object.keys(o).forEach(u=>{_[u]=i(o[u],t)}),_}},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(j,f,r)=>{r.d(f,{ZP:()=>s});var p=r("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=r("../../../node_modules/.pnpm/@emotion+styled@11.13.0_@emotion+react@11.13.0_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),l=r("../../../node_modules/.pnpm/@emotion+react@11.13.0_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),d=r("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),m=r("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function h(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const v=l.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,y=(0,a.Z)("svg",{target:"ea4tfvq2"})("width:",d.Z.spinnerSize,"px;height:",d.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",m.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),b={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},R=(0,a.Z)("circle",{target:"ea4tfvq1"})(b,";stroke:",m.D.gray[300],";"),E=(0,a.Z)("path",{target:"ea4tfvq0"})(b,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",v,";");var O=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function w({className:i,...c},n){return(0,g.jsxs)(y,{className:(0,p.Z)("components-spinner",i),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...c,ref:n,children:[(0,g.jsx)(R,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,g.jsx)(E,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const s=(0,O.forwardRef)(w)},"../../../node_modules/.pnpm/@wordpress+element@6.5.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(j,f,r)=>{r.d(f,{Z:()=>S});var p=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let a,l,d,m;const h=/<(\/)?(\w+)\s*(\/)?>/g;function v(s,i,c,n,t){return{element:s,tokenStart:i,tokenLength:c,prevOffset:n,leadingTextStart:t,children:[]}}const y=(s,i)=>{if(a=s,l=0,d=[],m=[],h.lastIndex=0,!b(i))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(R(i));return(0,p.createElement)(p.Fragment,null,...d)},b=s=>{const i=typeof s=="object",c=i&&Object.values(s);return i&&c.length&&c.every(n=>(0,p.isValidElement)(n))};function R(s){const i=E(),[c,n,t,e]=i,o=m.length,_=t>l?l:null;if(!s[n])return O(),!1;switch(c){case"no-more-tokens":if(o!==0){const{leadingTextStart:k,tokenStart:A}=m.pop();d.push(a.substr(k,A))}return O(),!1;case"self-closed":return o===0?(_!==null&&d.push(a.substr(_,t-_)),d.push(s[n]),l=t+e,!0):(g(v(s[n],t,e)),l=t+e,!0);case"opener":return m.push(v(s[n],t,e,t+e,_)),l=t+e,!0;case"closer":if(o===1)return w(t),l=t+e,!0;const u=m.pop(),D=a.substr(u.prevOffset,t-u.prevOffset);u.children.push(D),u.prevOffset=t+e;const T=v(u.element,u.tokenStart,u.tokenLength,t+e);return T.children=u.children,g(T),l=t+e,!0;default:return O(),!1}}function E(){const s=h.exec(a);if(s===null)return["no-more-tokens"];const i=s.index,[c,n,t,e]=s,o=c.length;return e?["self-closed",t,i,o]:n?["closer",t,i,o]:["opener",t,i,o]}function O(){const s=a.length-l;s!==0&&d.push(a.substr(l,s))}function g(s){const{element:i,tokenStart:c,tokenLength:n,prevOffset:t,children:e}=s,o=m[m.length-1],_=a.substr(o.prevOffset,c-o.prevOffset);_&&o.children.push(_),o.children.push((0,p.cloneElement)(i,null,...e)),o.prevOffset=t||c+n}function w(s){const{element:i,leadingTextStart:c,prevOffset:n,tokenStart:t,children:e}=m.pop(),o=s?a.substr(n,s-n):a.substr(n);o&&e.push(o),c!==null&&d.push(a.substr(c,t-c)),d.push((0,p.cloneElement)(i,null,...e))}const S=y},"../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(j,f,r)=>{r.d(f,{Z:()=>l});var p=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function a({icon:d,size:m=24,...h},v){return(0,p.cloneElement)(d,{width:m,height:m,...h,ref:v})}const l=(0,p.forwardRef)(a)},"../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(j,f,r)=>{r.d(f,{Z:()=>d});var p=r("../../../node_modules/.pnpm/@wordpress+primitives@4.5.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d=(0,a.jsx)(p.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(p.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})}}]);})();
