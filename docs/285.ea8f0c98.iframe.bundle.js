"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[285],{"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/external-link/index.js":(b,p,e)=>{e.d(p,{Z:()=>x});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),m=e.n(o),d=e("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),v=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),h=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),O=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js");function y(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const j=(0,h.Z)(O.Z,{target:"esh4a730"})({name:"rvs7bx",styles:"width:1em;height:1em;margin:0;vertical-align:middle;fill:currentColor"});function E(w,T){const{href:n,children:r,className:a,rel:l="",...s}=w,i=[...new Set([...l.split(" "),"external","noreferrer","noopener"].filter(Boolean))].join(" "),c=m()("components-external-link",a),f=!!(n!=null&&n.startsWith("#")),_=k=>{f&&k.preventDefault(),w.onClick&&w.onClick(k)};return(0,t.createElement)("a",{...s,className:c,href:n,onClick:_,target:"_blank",rel:i,ref:T},r,(0,t.createElement)(v.Z,{as:"span"},(0,d.__)("(opens in a new tab)")),(0,t.createElement)(j,{icon:u.Z,className:"components-external-link__icon"}))}const x=(0,t.forwardRef)(E)},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(b,p,e)=>{e.d(p,{ZP:()=>n});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),m=e.n(o),d=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),u=e("../../../node_modules/.pnpm/@emotion+react@11.11.3_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),v=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),h=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function O(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const y=u.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,j=(0,d.Z)("svg",{target:"ea4tfvq2"})("width:",v.Z.spinnerSize,"px;height:",v.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",h.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),E={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},g=(0,d.Z)("circle",{target:"ea4tfvq1"})(E,";stroke:",h.D.gray[300],";"),x=(0,d.Z)("path",{target:"ea4tfvq0"})(E,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",y,";");function w({className:r,...a},l){return(0,t.createElement)(j,{className:m()("components-spinner",r),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...a,ref:l},(0,t.createElement)(g,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,t.createElement)(x,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const n=(0,t.forwardRef)(w)},"../../../node_modules/.pnpm/@wordpress+element@5.28.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(b,p,e)=>{e.d(p,{Z:()=>T});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let o,m,d,u;const v=/<(\/)?(\w+)\s*(\/)?>/g;function h(n,r,a,l,s){return{element:n,tokenStart:r,tokenLength:a,prevOffset:l,leadingTextStart:s,children:[]}}const O=(n,r)=>{if(o=n,m=0,d=[],u=[],v.lastIndex=0,!y(r))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(j(r));return(0,t.createElement)(t.Fragment,null,...d)},y=n=>{const r=typeof n=="object",a=r&&Object.values(n);return r&&a.length&&a.every(l=>(0,t.isValidElement)(l))};function j(n){const r=E(),[a,l,s,i]=r,c=u.length,f=s>m?m:null;if(!n[l])return g(),!1;switch(a){case"no-more-tokens":if(c!==0){const{leadingTextStart:P,tokenStart:S}=u.pop();d.push(o.substr(P,S))}return g(),!1;case"self-closed":return c===0?(f!==null&&d.push(o.substr(f,s-f)),d.push(n[l]),m=s+i,!0):(x(h(n[l],s,i)),m=s+i,!0);case"opener":return u.push(h(n[l],s,i,s+i,f)),m=s+i,!0;case"closer":if(c===1)return w(s),m=s+i,!0;const _=u.pop(),k=o.substr(_.prevOffset,s-_.prevOffset);_.children.push(k),_.prevOffset=s+i;const C=h(_.element,_.tokenStart,_.tokenLength,s+i);return C.children=_.children,x(C),m=s+i,!0;default:return g(),!1}}function E(){const n=v.exec(o);if(n===null)return["no-more-tokens"];const r=n.index,[a,l,s,i]=n,c=a.length;return i?["self-closed",s,r,c]:l?["closer",s,r,c]:["opener",s,r,c]}function g(){const n=o.length-m;n!==0&&d.push(o.substr(m,n))}function x(n){const{element:r,tokenStart:a,tokenLength:l,prevOffset:s,children:i}=n,c=u[u.length-1],f=o.substr(c.prevOffset,a-c.prevOffset);f&&c.children.push(f),c.children.push((0,t.cloneElement)(r,null,...i)),c.prevOffset=s||a+l}function w(n){const{element:r,leadingTextStart:a,prevOffset:l,tokenStart:s,children:i}=u.pop(),c=n?o.substr(l,n-l):o.substr(l);c&&i.push(c),a!==null&&d.push(o.substr(a,s-a)),d.push((0,t.cloneElement)(r,null,...i))}const T=O},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js":(b,p,e)=>{e.d(p,{Z:()=>d});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const d=(0,t.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(o.y$,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/plus.js":(b,p,e)=>{e.d(p,{Z:()=>d});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const d=(0,t.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(o.y$,{d:"M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js":(b,p,e)=>{e.d(p,{Z:()=>d});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const d=(0,t.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,t.createElement)(o.y$,{d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"}))}}]);})();
