"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[851],{"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(x,p,e)=>{e.d(p,{ZP:()=>s});var n=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/@emotion+styled@11.13.0_@emotion+react@11.13.0_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),c=e("../../../node_modules/.pnpm/@emotion+react@11.13.0_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function w(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const f=c.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,j=(0,t.Z)("svg",{target:"ea4tfvq2"})("width:",r.Z.spinnerSize,"px;height:",r.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",m.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),g={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},b=(0,t.Z)("circle",{target:"ea4tfvq1"})(g,";stroke:",m.D.gray[300],";"),O=(0,t.Z)("path",{target:"ea4tfvq0"})(g,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",f,";");var E=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function T({className:d,...a},l){return(0,v.jsxs)(j,{className:(0,n.Z)("components-spinner",d),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...a,ref:l,children:[(0,v.jsx)(b,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,v.jsx)(O,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const s=(0,E.forwardRef)(T)},"../../../node_modules/.pnpm/@wordpress+element@6.5.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(x,p,e)=>{e.d(p,{Z:()=>y});var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let t,c,r,m;const w=/<(\/)?(\w+)\s*(\/)?>/g;function f(s,d,a,l,o){return{element:s,tokenStart:d,tokenLength:a,prevOffset:l,leadingTextStart:o,children:[]}}const j=(s,d)=>{if(t=s,c=0,r=[],m=[],w.lastIndex=0,!g(d))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(b(d));return(0,n.createElement)(n.Fragment,null,...r)},g=s=>{const d=typeof s=="object",a=d&&Object.values(s);return d&&a.length&&a.every(l=>(0,n.isValidElement)(l))};function b(s){const d=O(),[a,l,o,i]=d,u=m.length,h=o>c?c:null;if(!s[l])return E(),!1;switch(a){case"no-more-tokens":if(u!==0){const{leadingTextStart:D,tokenStart:L}=m.pop();r.push(t.substr(D,L))}return E(),!1;case"self-closed":return u===0?(h!==null&&r.push(t.substr(h,o-h)),r.push(s[l]),c=o+i,!0):(v(f(s[l],o,i)),c=o+i,!0);case"opener":return m.push(f(s[l],o,i,o+i,h)),c=o+i,!0;case"closer":if(u===1)return T(o),c=o+i,!0;const _=m.pop(),k=t.substr(_.prevOffset,o-_.prevOffset);_.children.push(k),_.prevOffset=o+i;const P=f(_.element,_.tokenStart,_.tokenLength,o+i);return P.children=_.children,v(P),c=o+i,!0;default:return E(),!1}}function O(){const s=w.exec(t);if(s===null)return["no-more-tokens"];const d=s.index,[a,l,o,i]=s,u=a.length;return i?["self-closed",o,d,u]:l?["closer",o,d,u]:["opener",o,d,u]}function E(){const s=t.length-c;s!==0&&r.push(t.substr(c,s))}function v(s){const{element:d,tokenStart:a,tokenLength:l,prevOffset:o,children:i}=s,u=m[m.length-1],h=t.substr(u.prevOffset,a-u.prevOffset);h&&u.children.push(h),u.children.push((0,n.cloneElement)(d,null,...i)),u.prevOffset=o||a+l}function T(s){const{element:d,leadingTextStart:a,prevOffset:l,tokenStart:o,children:i}=m.pop(),u=s?t.substr(l,s-l):t.substr(l);u&&i.push(u),a!==null&&r.push(t.substr(a,o-a)),r.push((0,n.cloneElement)(d,null,...i))}const y=j},"../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(x,p,e)=>{e.d(p,{Z:()=>c});var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function t({icon:r,size:m=24,...w},f){return(0,n.cloneElement)(r,{width:m,height:m,...w,ref:f})}const c=(0,n.forwardRef)(t)},"../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js":(x,p,e)=>{e.d(p,{Z:()=>r});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.5.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,t.jsx)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(n.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close-small.js":(x,p,e)=>{e.d(p,{Z:()=>r});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.5.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,t.jsx)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(n.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(x,p,e)=>{e.d(p,{Z:()=>r});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.5.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,t.jsx)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(n.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})}}]);})();
