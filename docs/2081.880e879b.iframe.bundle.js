"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2081],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.7_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(_,t,e)=>{e.d(t,{aD:()=>P});var s="actions",o="storybook/actions",l=`${o}/panel`,n=`${o}/action-event`,r=`${o}/action-clear`,c="$___storybook.isCyclic",i=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),v=e("@storybook/preview-api"),w={depth:10,clearOnStoryChange:!0,limit:50},O=(a={})=>{Object.assign(w,a)},E=(a,m)=>{let d=Object.getPrototypeOf(a);return!d||m(d)?d:E(d,m)},f=a=>!!(typeof a=="object"&&a&&E(a,m=>/^Synthetic(?:Base)?Event$/.test(m.constructor.name))&&typeof a.persist=="function"),D=a=>{if(f(a)){let m=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));m.persist();let d=Object.getOwnPropertyDescriptor(m,"view"),u=d==null?void 0:d.value;return typeof u=="object"&&(u==null?void 0:u.constructor.name)==="Window"&&Object.defineProperty(m,"view",{...d,value:Object.create(u.constructor.prototype)}),m}return a};function P(a,m={}){let d={...w,...m},u=function(...h){let g=v.addons.getChannel(),p=(0,i.Z)(),x=5,b=h.map(D),A=h.length>1?b:b[0],T={id:p,count:0,data:{name:a,args:A},options:{...d,maxDepth:x+(d.depth||3),allowFunction:d.allowFunction||!1}};g.emit(n,T)};return u.isAction=!0,u}var j=(...a)=>{let m=config,d=a;d.length===1&&Array.isArray(d[0])&&([d]=d),d.length!==1&&typeof d[d.length-1]!="string"&&(m={...config,...d.pop()});let u=d[0];(d.length!==1||typeof u=="string")&&(u={},d.forEach(g=>{u[g]=g}));let h={};return Object.keys(u).forEach(g=>{h[g]=action(u[g],m)}),h}},"../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js":(_,t,e)=>{e.d(t,{Z:()=>f});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=e.n(o),n=e("../../../node_modules/.pnpm/@wordpress+compose@6.21.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+deprecated@3.44.0/node_modules/@wordpress/deprecated/build-module/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),i=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js"),v=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js"),w=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js");const O=(D,P)=>{const{renderContent:j,renderToggle:a,className:m,contentClassName:d,expandOnMobile:u,headerTitle:h,focusOnMount:g,popoverProps:p,onClose:x,onToggle:b,style:A,open:T,defaultOpen:K,position:R,variant:U}=(0,c.y)(D,"Dropdown");R!==void 0&&(0,r.Z)("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[z,F]=(0,s.useState)(null),y=(0,s.useRef)(),[B,S]=(0,v.O)({defaultValue:K,value:T,onChange:b});function Z(){var W;if(!y.current)return;const{ownerDocument:C}=y.current,I=(W=C==null?void 0:C.activeElement)==null?void 0:W.closest('[role="dialog"]');!y.current.contains(C.activeElement)&&(!I||I.contains(y.current))&&M()}function M(){x==null||x(),S(!1)}const L={isOpen:!!B,onToggle:()=>S(!B),onClose:M},k=!!(p!=null&&p.anchor)||!!(p!=null&&p.anchorRef)||!!(p!=null&&p.getAnchorRect)||!!(p!=null&&p.anchorRect);return(0,s.createElement)("div",{className:m,ref:(0,n.Z)([y,P,F]),tabIndex:-1,style:A},a(L),B&&(0,s.createElement)(w.ZP,{position:R,onClose:M,onFocusOutside:Z,expandOnMobile:u,headerTitle:h,focusOnMount:g,offset:13,anchor:k?void 0:z,variant:U,...p,className:l()("components-dropdown__content",p==null?void 0:p.className,d)},j(L)))},f=(0,i.Iq)(O,"Dropdown")},"../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(_,t,e)=>{e.d(t,{ZP:()=>a});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=e.n(o),n=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.2.19_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),r=e("../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.19_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),i=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function v(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const w=r.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,O=(0,n.Z)("svg",{target:"ea4tfvq2"})("width:",c.Z.spinnerSize,"px;height:",c.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",i.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),E={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},f=(0,n.Z)("circle",{target:"ea4tfvq1"})(E,";stroke:",i.D.gray[300],";"),D=(0,n.Z)("path",{target:"ea4tfvq0"})(E,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",w,";");function P({className:m,...d},u){return(0,s.createElement)(O,{className:l()("components-spinner",m),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...d,ref:u},(0,s.createElement)(f,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,s.createElement)(D,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const a=(0,s.forwardRef)(P)},"../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(_,t,e)=>{e.d(t,{Z:()=>i});var s=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const l="36px",n="12px",r={controlSurfaceColor:o.D.white,controlTextActiveColor:o.D.theme.accent,controlPaddingX:n,controlPaddingXLarge:`calc(${n} * 1.3334)`,controlPaddingXSmall:`calc(${n} / 1.3334)`,controlBackgroundColor:o.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${o.D.theme.accent}`,controlDestructiveBorderColor:o.D.alert.red,controlHeight:l,controlHeightXSmall:`calc( ${l} * 0.6 )`,controlHeightSmall:`calc( ${l} * 0.8 )`,controlHeightLarge:`calc( ${l} * 1.2 )`,controlHeightXLarge:`calc( ${l} * 1.4 )`},c={toggleGroupControlBackgroundColor:r.controlBackgroundColor,toggleGroupControlBorderColor:o.D.ui.border,toggleGroupControlBackdropBackgroundColor:r.controlSurfaceColor,toggleGroupControlBackdropBorderColor:o.D.ui.border,toggleGroupControlButtonColorActive:r.controlBackgroundColor},i=Object.assign({},r,c,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,s.D)(2)}`,cardPaddingSmall:`${(0,s.D)(4)}`,cardPaddingMedium:`${(0,s.D)(4)} ${(0,s.D)(6)}`,cardPaddingLarge:`${(0,s.D)(6)} ${(0,s.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:o.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:o.D.white,surfaceColor:o.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js":(_,t,e)=>{e.d(t,{O:()=>o});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function o({defaultValue:l,onChange:n,value:r}){const c=typeof r!="undefined",i=c?r:l,[v,w]=(0,s.useState)(i),O=c?r:v;let E;return c&&typeof n=="function"?E=n:!c&&typeof n=="function"?E=f=>{n(f),w(f)}:E=w,[O,E]}},"../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(_,t,e)=>{e.d(t,{Z:()=>l});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function o({icon:n,size:r=24,...c},i){return(0,s.cloneElement)(n,{width:r,height:r,...c,ref:i})}const l=(0,s.forwardRef)(o)},"../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/cloud.js":(_,t,e)=>{e.d(t,{Z:()=>n});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.42.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,s.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(o.y$,{d:"M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-9c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4h1.3l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8-.1 1-.9 1.8-1.8 1.8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/edit.js":(_,t,e)=>{e.d(t,{Z:()=>o});var s=e("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/pencil.js");const o=s.Z},"../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(_,t,e)=>{e.d(t,{Z:()=>n});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.42.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,s.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(o.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/image.js":(_,t,e)=>{e.d(t,{Z:()=>n});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.42.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,s.createElement)(o.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,s.createElement)(o.y$,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/media.js":(_,t,e)=>{e.d(t,{Z:()=>n});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.42.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,s.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(o.y$,{d:"m7 6.5 4 2.5-4 2.5z"}),(0,s.createElement)(o.y$,{fillRule:"evenodd",clipRule:"evenodd",d:"m5 3c-1.10457 0-2 .89543-2 2v14c0 1.1046.89543 2 2 2h14c1.1046 0 2-.8954 2-2v-14c0-1.10457-.8954-2-2-2zm14 1.5h-14c-.27614 0-.5.22386-.5.5v10.7072l3.62953-2.6465c.25108-.1831.58905-.1924.84981-.0234l2.92666 1.8969 3.5712-3.4719c.2911-.2831.7545-.2831 1.0456 0l2.9772 2.8945v-9.3568c0-.27614-.2239-.5-.5-.5zm-14.5 14.5v-1.4364l4.09643-2.987 2.99567 1.9417c.2936.1903.6798.1523.9307-.0917l3.4772-3.3806 3.4772 3.3806.0228-.0234v2.5968c0 .2761-.2239.5-.5.5h-14c-.27614 0-.5-.2239-.5-.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/pencil.js":(_,t,e)=>{e.d(t,{Z:()=>n});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.42.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,s.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(o.y$,{d:"m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/video.js":(_,t,e)=>{e.d(t,{Z:()=>n});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.42.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,s.createElement)(o.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,s.createElement)(o.y$,{d:"M18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3zm.8 15.7c0 .4-.4.8-.8.8H5.3c-.4 0-.8-.4-.8-.8V5.3c0-.4.4-.8.8-.8h13.4c.4 0 .8.4.8.8v13.4zM10 15l5-3-5-3v6z"}))},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.44.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js":(_,t,e)=>{e.d(t,{ZP:()=>l});var s=e("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.44.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js");function o(n,r){if(n===r)return!0;if(n.length!==r.length)return!1;for(let c=0,i=n.length;c<i;c++)if(n[c]!==r[c])return!1;return!0}function l(n,r){if(n&&r){if(n.constructor===Object&&r.constructor===Object)return(0,s.Z)(n,r);if(Array.isArray(n)&&Array.isArray(r))return o(n,r)}return n===r}},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.44.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js":(_,t,e)=>{e.d(t,{Z:()=>s});function s(o,l){if(o===l)return!0;const n=Object.keys(o),r=Object.keys(l);if(n.length!==r.length)return!1;let c=0;for(;c<n.length;){const i=n[c],v=o[i];if(v===void 0&&!l.hasOwnProperty(i)||v!==l[i])return!1;c++}return!0}}}]);})();
