"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1986],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.0.9/node_modules/@storybook/addon-actions/dist/index.mjs":(p,d,e)=>{e.d(d,{aD:()=>y});var n=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),o=e("@storybook/preview-api"),i=e("@storybook/global"),r=e("@storybook/core-events/preview-errors"),a="actions",_="storybook/actions",O=`${_}/panel`,x=`${_}/action-event`,u=`${_}/action-clear`,g="$___storybook.isCyclic",m={depth:10,clearOnStoryChange:!0,limit:50},f=(c={})=>{Object.assign(m,c)},j=(c,l)=>{let t=Object.getPrototypeOf(c);return!t||l(t)?t:j(t,l)},D=c=>!!(typeof c=="object"&&c&&j(c,l=>/^Synthetic(?:Base)?Event$/.test(l.constructor.name))&&typeof c.persist=="function"),A=c=>{if(D(c)){let l=Object.create(c.constructor.prototype,Object.getOwnPropertyDescriptors(c));l.persist();let t=Object.getOwnPropertyDescriptor(l,"view"),s=t==null?void 0:t.value;return typeof s=="object"&&(s==null?void 0:s.constructor.name)==="Window"&&Object.defineProperty(l,"view",{...t,value:Object.create(s.constructor.prototype)}),l}return c},P=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,n.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function y(c,l={}){let t={...m,...l},s=function(...v){var C,I;if(l.implicit){let h=(C="__STORYBOOK_PREVIEW__"in i.global?i.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:C.storyRenders.find(w=>w.phase==="playing"||w.phase==="rendering");if(h){let w=!((I=window==null?void 0:window.FEATURES)!=null&&I.disallowImplicitActionsInRenderV8),R=new r.ImplicitActionsDuringRendering({phase:h.phase,name:c,deprecated:w});if(w)console.warn(R);else throw R}}let E=o.addons.getChannel(),L=P(),W=5,b=v.map(A),T=v.length>1?b:b[0],K={id:L,count:0,data:{name:c,args:T},options:{...t,maxDepth:W+(t.depth||3),allowFunction:t.allowFunction||!1}};E.emit(x,K)};return s.isAction=!0,s.implicit=l.implicit,s}var M=(...c)=>{let l=m,t=c;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(l={...m,...t.pop()});let s=t[0];(t.length!==1||typeof s=="string")&&(s={},t.forEach(E=>{s[E]=E}));let v={};return Object.keys(s).forEach(E=>{v[E]=y(s[E],l)}),v}},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/dropdown/index.js":(p,d,e)=>{e.d(d,{Z:()=>f});var n=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+deprecated@4.0.0/node_modules/@wordpress/deprecated/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js"),O=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js"),x=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/popover/index.js"),u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g=(j,D)=>{const{renderContent:A,renderToggle:P,className:y,contentClassName:M,expandOnMobile:c,headerTitle:l,focusOnMount:t,popoverProps:s,onClose:v,onToggle:E,style:L,open:W,defaultOpen:b,position:T,variant:K}=(0,a.y)(j,"Dropdown");T!==void 0&&(0,r.Z)("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[C,I]=(0,o.useState)(null),h=(0,o.useRef)(),[w,R]=(0,O.O)({defaultValue:b,value:W,onChange:E});function F(){var V;if(!h.current)return;const{ownerDocument:B}=h.current,Z=(V=B==null?void 0:B.activeElement)==null?void 0:V.closest('[role="dialog"]');!h.current.contains(B.activeElement)&&(!Z||Z.contains(h.current))&&U()}function U(){v==null||v(),R(!1)}const S={isOpen:!!w,onToggle:()=>R(!w),onClose:U},z=!!(s!=null&&s.anchor)||!!(s!=null&&s.anchorRef)||!!(s!=null&&s.getAnchorRect)||!!(s!=null&&s.anchorRect);return(0,u.jsxs)("div",{className:y,ref:(0,i.Z)([h,D,I]),tabIndex:-1,style:L,children:[P(S),w&&(0,u.jsx)(x.ZP,{position:T,onClose:U,onFocusOutside:F,expandOnMobile:c,headerTitle:l,focusOnMount:t,offset:13,anchor:z?void 0:C,variant:K,...s,className:(0,n.Z)("components-dropdown__content",s==null?void 0:s.className,M),children:A(S)})]})},f=(0,_.Iq)(g,"Dropdown")},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(p,d,e)=>{e.d(d,{ZP:()=>P});var n=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.1_react@18.3.1__@types+react@18.3.1_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),i=e("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function _(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const O=i.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,x=(0,o.Z)("svg",{target:"ea4tfvq2"})("width:",r.Z.spinnerSize,"px;height:",r.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",a.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),u={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},g=(0,o.Z)("circle",{target:"ea4tfvq1"})(u,";stroke:",a.D.gray[300],";"),m=(0,o.Z)("path",{target:"ea4tfvq0"})(u,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",O,";");var f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),j=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function D({className:y,...M},c){return(0,j.jsxs)(x,{className:(0,n.Z)("components-spinner",y),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...M,ref:c,children:[(0,j.jsx)(g,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,j.jsx)(m,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const P=(0,f.forwardRef)(D)},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js":(p,d,e)=>{e.d(d,{O:()=>o});var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function o({defaultValue:i,onChange:r,value:a}){const _=typeof a!="undefined",O=_?a:i,[x,u]=(0,n.useState)(O),g=_?a:x;let m;return _&&typeof r=="function"?m=r:!_&&typeof r=="function"?m=f=>{r(f),u(f)}:m=u,[g,m]}},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(p,d,e)=>{e.d(d,{Z:()=>i});var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function o({icon:r,size:a=24,..._},O){return(0,n.cloneElement)(r,{width:a,height:a,..._,ref:O})}const i=(0,n.forwardRef)(o)},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/cloud.js":(p,d,e)=>{e.d(d,{Z:()=>r});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.0.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,o.jsx)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(n.y$,{d:"M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-9c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4h1.3l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8-.1 1-.9 1.8-1.8 1.8z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/edit.js":(p,d,e)=>{e.d(d,{Z:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/pencil.js");const o=n.Z},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(p,d,e)=>{e.d(d,{Z:()=>r});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.0.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,o.jsx)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(n.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/image.js":(p,d,e)=>{e.d(d,{Z:()=>r});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.0.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,o.jsx)(n.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)(n.y$,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/media.js":(p,d,e)=>{e.d(d,{Z:()=>r});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.0.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,o.jsxs)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[(0,o.jsx)(n.y$,{d:"m7 6.5 4 2.5-4 2.5z"}),(0,o.jsx)(n.y$,{fillRule:"evenodd",clipRule:"evenodd",d:"m5 3c-1.10457 0-2 .89543-2 2v14c0 1.1046.89543 2 2 2h14c1.1046 0 2-.8954 2-2v-14c0-1.10457-.8954-2-2-2zm14 1.5h-14c-.27614 0-.5.22386-.5.5v10.7072l3.62953-2.6465c.25108-.1831.58905-.1924.84981-.0234l2.92666 1.8969 3.5712-3.4719c.2911-.2831.7545-.2831 1.0456 0l2.9772 2.8945v-9.3568c0-.27614-.2239-.5-.5-.5zm-14.5 14.5v-1.4364l4.09643-2.987 2.99567 1.9417c.2936.1903.6798.1523.9307-.0917l3.4772-3.3806 3.4772 3.3806.0228-.0234v2.5968c0 .2761-.2239.5-.5.5h-14c-.27614 0-.5-.2239-.5-.5z"})]})},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/pencil.js":(p,d,e)=>{e.d(d,{Z:()=>r});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.0.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,o.jsx)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(n.y$,{d:"m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/video.js":(p,d,e)=>{e.d(d,{Z:()=>r});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.0.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,o.jsx)(n.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)(n.y$,{d:"M18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3zm.8 15.7c0 .4-.4.8-.8.8H5.3c-.4 0-.8-.4-.8-.8V5.3c0-.4.4-.8.8-.8h13.4c.4 0 .8.4.8.8v13.4zM10 15l5-3-5-3v6z"})})}}]);})();
