"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[884],{"../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.55_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/external-link/index.js":(h,u,e)=>{e.d(u,{Z:()=>b});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),a=e.n(n),r=e("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),w=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.55_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),v=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.55_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),y=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js");function O(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const j=(0,v.Z)(y.Z,{target:"esh4a730"})({name:"rvs7bx",styles:"width:1em;height:1em;margin:0;vertical-align:middle;fill:currentColor"});function g(E,P){const{href:t,children:d,className:i,rel:l="",...o}=E,c=[...new Set([...l.split(" "),"external","noreferrer","noopener"].filter(Boolean))].join(" "),m=a()("components-external-link",i),f=!!(t!=null&&t.startsWith("#")),_=T=>{f&&T.preventDefault(),E.onClick&&E.onClick(T)};return(0,s.createElement)("a",{...o,className:m,href:t,onClick:_,target:"_blank",rel:c,ref:P},d,(0,s.createElement)(w.Z,{as:"span"},(0,r.__)("(opens in a new tab)")),(0,s.createElement)(j,{icon:p.Z,className:"components-external-link__icon"}))}const b=(0,s.forwardRef)(g)},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.55_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(h,u,e)=>{e.d(u,{ZP:()=>t});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),a=e.n(n),r=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.55_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),p=e("../../../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.55_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),w=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.55_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),v=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.55_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function y(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const O=p.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,j=(0,r.Z)("svg",{target:"ea4tfvq2"})("width:",w.Z.spinnerSize,"px;height:",w.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",v.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),g={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},x=(0,r.Z)("circle",{target:"ea4tfvq1"})(g,";stroke:",v.D.gray[300],";"),b=(0,r.Z)("path",{target:"ea4tfvq0"})(g,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",O,";");function E({className:d,...i},l){return(0,s.createElement)(j,{className:a()("components-spinner",d),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...i,ref:l},(0,s.createElement)(x,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,s.createElement)(b,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const t=(0,s.forwardRef)(E)},"../../../node_modules/.pnpm/@wordpress+element@5.28.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(h,u,e)=>{e.d(u,{Z:()=>P});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let n,a,r,p;const w=/<(\/)?(\w+)\s*(\/)?>/g;function v(t,d,i,l,o){return{element:t,tokenStart:d,tokenLength:i,prevOffset:l,leadingTextStart:o,children:[]}}const y=(t,d)=>{if(n=t,a=0,r=[],p=[],w.lastIndex=0,!O(d))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(j(d));return(0,s.createElement)(s.Fragment,null,...r)},O=t=>{const d=typeof t=="object",i=d&&Object.values(t);return d&&i.length&&i.every(l=>(0,s.isValidElement)(l))};function j(t){const d=g(),[i,l,o,c]=d,m=p.length,f=o>a?a:null;if(!t[l])return x(),!1;switch(i){case"no-more-tokens":if(m!==0){const{leadingTextStart:C,tokenStart:k}=p.pop();r.push(n.substr(C,k))}return x(),!1;case"self-closed":return m===0?(f!==null&&r.push(n.substr(f,o-f)),r.push(t[l]),a=o+c,!0):(b(v(t[l],o,c)),a=o+c,!0);case"opener":return p.push(v(t[l],o,c,o+c,f)),a=o+c,!0;case"closer":if(m===1)return E(o),a=o+c,!0;const _=p.pop(),T=n.substr(_.prevOffset,o-_.prevOffset);_.children.push(T),_.prevOffset=o+c;const D=v(_.element,_.tokenStart,_.tokenLength,o+c);return D.children=_.children,b(D),a=o+c,!0;default:return x(),!1}}function g(){const t=w.exec(n);if(t===null)return["no-more-tokens"];const d=t.index,[i,l,o,c]=t,m=i.length;return c?["self-closed",o,d,m]:l?["closer",o,d,m]:["opener",o,d,m]}function x(){const t=n.length-a;t!==0&&r.push(n.substr(a,t))}function b(t){const{element:d,tokenStart:i,tokenLength:l,prevOffset:o,children:c}=t,m=p[p.length-1],f=n.substr(m.prevOffset,i-m.prevOffset);f&&m.children.push(f),m.children.push((0,s.cloneElement)(d,null,...c)),m.prevOffset=o||i+l}function E(t){const{element:d,leadingTextStart:i,prevOffset:l,tokenStart:o,children:c}=p.pop(),m=t?n.substr(l,t-l):n.substr(l);m&&c.push(m),i!==null&&r.push(n.substr(i,o-i)),r.push((0,s.cloneElement)(d,null,...c))}const P=y},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(h,u,e)=>{e.d(u,{Z:()=>r});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,s.createElement)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(n.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(h,u,e)=>{e.d(u,{Z:()=>r});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,s.createElement)(n.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,s.createElement)(n.y$,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js":(h,u,e)=>{e.d(u,{Z:()=>r});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,s.createElement)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(n.y$,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/plus.js":(h,u,e)=>{e.d(u,{Z:()=>r});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,s.createElement)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(n.y$,{d:"M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js":(h,u,e)=>{e.d(u,{Z:()=>r});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,s.createElement)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,s.createElement)(n.y$,{d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"}))}}]);})();