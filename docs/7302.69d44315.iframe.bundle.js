"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7302],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.2.9_storybook@8.2.9/node_modules/@storybook/addon-actions/dist/index.mjs":(O,f,s)=>{s.d(f,{aD:()=>i});var c=s("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),r=s("storybook/internal/preview-api"),l=s("@storybook/global"),d=s("storybook/internal/preview-errors"),u="actions",g="storybook/actions",h=`${g}/panel`,E=`${g}/action-event`,S=`${g}/action-clear`,D="$___storybook.isCyclic",x={depth:10,clearOnStoryChange:!0,limit:50},v=(o={})=>{Object.assign(x,o)},b=(o,t)=>{let e=Object.getPrototypeOf(o);return!e||t(e)?e:b(e,t)},y=o=>!!(typeof o=="object"&&o&&b(o,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof o.persist=="function"),C=o=>{if(y(o)){let t=Object.create(o.constructor.prototype,Object.getOwnPropertyDescriptors(o));t.persist();let e=Object.getOwnPropertyDescriptor(t,"view"),n=e==null?void 0:e.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...e,value:Object.create(n.constructor.prototype)}),t}return o},a=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,c.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function i(o,t={}){let e={...x,...t},n=function(..._){var B,k;if(t.implicit){let A=(B="__STORYBOOK_PREVIEW__"in l.global?l.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:B.storyRenders.find(w=>w.phase==="playing"||w.phase==="rendering");if(A){let w=!((k=window==null?void 0:window.FEATURES)!=null&&k.disallowImplicitActionsInRenderV8),I=new d.ImplicitActionsDuringRendering({phase:A.phase,name:o,deprecated:w});if(w)console.warn(I);else throw I}}let m=r.addons.getChannel(),R=a(),j=5,T=_.map(C),P=_.length>1?T:T[0],L={id:R,count:0,data:{name:o,args:P},options:{...e,maxDepth:j+(e.depth||3),allowFunction:e.allowFunction||!1}};m.emit(E,L)};return n.isAction=!0,n.implicit=t.implicit,n}var p=(...o)=>{let t=x,e=o;e.length===1&&Array.isArray(e[0])&&([e]=e),e.length!==1&&typeof e[e.length-1]!="string"&&(t={...x,...e.pop()});let n=e[0];(e.length!==1||typeof n=="string")&&(n={},e.forEach(m=>{n[m]=m}));let _={};return Object.keys(n).forEach(m=>{_[m]=i(n[m],t)}),_}},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(O,f,s)=>{s.d(f,{ZP:()=>a});var c=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=s("../../../node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),l=s("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),d=s("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),u=s("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function g(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const h=l.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,E=(0,r.Z)("svg",{target:"ea4tfvq2"})("width:",d.Z.spinnerSize,"px;height:",d.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",u.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),S={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},D=(0,r.Z)("circle",{target:"ea4tfvq1"})(S,";stroke:",u.D.gray[300],";"),x=(0,r.Z)("path",{target:"ea4tfvq0"})(S,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",h,";");var v=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),b=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function y({className:i,...p},o){return(0,b.jsxs)(E,{className:(0,c.Z)("components-spinner",i),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...p,ref:o,children:[(0,b.jsx)(D,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,b.jsx)(x,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const a=(0,v.forwardRef)(y)},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js":(O,f,s)=>{s.d(f,{Z:()=>h});var c=s("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js"),r=s("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");const l="36px",d="12px",u={controlSurfaceColor:r.D.white,controlTextActiveColor:r.D.theme.accent,controlPaddingX:d,controlPaddingXLarge:`calc(${d} * 1.3334)`,controlPaddingXSmall:`calc(${d} / 1.3334)`,controlBackgroundColor:r.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${r.D.theme.accent}`,controlDestructiveBorderColor:r.D.alert.red,controlHeight:l,controlHeightXSmall:`calc( ${l} * 0.6 )`,controlHeightSmall:`calc( ${l} * 0.8 )`,controlHeightLarge:`calc( ${l} * 1.2 )`,controlHeightXLarge:`calc( ${l} * 1.4 )`},g={toggleGroupControlBackgroundColor:u.controlBackgroundColor,toggleGroupControlBorderColor:r.D.ui.border,toggleGroupControlBackdropBackgroundColor:u.controlSurfaceColor,toggleGroupControlBackdropBorderColor:r.D.ui.border,toggleGroupControlButtonColorActive:u.controlBackgroundColor},h=Object.assign({},u,g,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusXSmall:"1px",radiusSmall:"2px",radiusMedium:"4px",radiusLarge:"8px",radiusFull:"9999px",radiusRound:"50%",radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.4",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,c.D)(2)}`,cardPaddingSmall:`${(0,c.D)(4)}`,cardPaddingMedium:`${(0,c.D)(4)} ${(0,c.D)(6)}`,cardPaddingLarge:`${(0,c.D)(6)} ${(0,c.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:r.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:r.D.white,surfaceColor:r.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+element@6.5.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(O,f,s)=>{s.d(f,{Z:()=>C});var c=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let r,l,d,u;const g=/<(\/)?(\w+)\s*(\/)?>/g;function h(a,i,p,o,t){return{element:a,tokenStart:i,tokenLength:p,prevOffset:o,leadingTextStart:t,children:[]}}const E=(a,i)=>{if(r=a,l=0,d=[],u=[],g.lastIndex=0,!S(i))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(D(i));return(0,c.createElement)(c.Fragment,null,...d)},S=a=>{const i=typeof a=="object",p=i&&Object.values(a);return i&&p.length&&p.every(o=>(0,c.isValidElement)(o))};function D(a){const i=x(),[p,o,t,e]=i,n=u.length,_=t>l?l:null;if(!a[o])return v(),!1;switch(p){case"no-more-tokens":if(n!==0){const{leadingTextStart:T,tokenStart:P}=u.pop();d.push(r.substr(T,P))}return v(),!1;case"self-closed":return n===0?(_!==null&&d.push(r.substr(_,t-_)),d.push(a[o]),l=t+e,!0):(b(h(a[o],t,e)),l=t+e,!0);case"opener":return u.push(h(a[o],t,e,t+e,_)),l=t+e,!0;case"closer":if(n===1)return y(t),l=t+e,!0;const m=u.pop(),R=r.substr(m.prevOffset,t-m.prevOffset);m.children.push(R),m.prevOffset=t+e;const j=h(m.element,m.tokenStart,m.tokenLength,t+e);return j.children=m.children,b(j),l=t+e,!0;default:return v(),!1}}function x(){const a=g.exec(r);if(a===null)return["no-more-tokens"];const i=a.index,[p,o,t,e]=a,n=p.length;return e?["self-closed",t,i,n]:o?["closer",t,i,n]:["opener",t,i,n]}function v(){const a=r.length-l;a!==0&&d.push(r.substr(l,a))}function b(a){const{element:i,tokenStart:p,tokenLength:o,prevOffset:t,children:e}=a,n=u[u.length-1],_=r.substr(n.prevOffset,p-n.prevOffset);_&&n.children.push(_),n.children.push((0,c.cloneElement)(i,null,...e)),n.prevOffset=t||p+o}function y(a){const{element:i,leadingTextStart:p,prevOffset:o,tokenStart:t,children:e}=u.pop(),n=a?r.substr(o,a-o):r.substr(o);n&&e.push(n),p!==null&&d.push(r.substr(p,t-p)),d.push((0,c.cloneElement)(i,null,...e))}const C=E},"../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(O,f,s)=>{s.d(f,{Z:()=>l});var c=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function r({icon:d,size:u=24,...g},h){return(0,c.cloneElement)(d,{width:u,height:u,...g,ref:h})}const l=(0,c.forwardRef)(r)},"../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(O,f,s)=>{s.d(f,{Z:()=>d});var c=s("../../../node_modules/.pnpm/@wordpress+primitives@4.5.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),r=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d=(0,r.jsx)(c.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(c.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})}}]);})();
