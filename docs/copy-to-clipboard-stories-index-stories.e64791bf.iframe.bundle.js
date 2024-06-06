(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9496],{"../components/components/copy-to-clipboard/stories/index.stories.tsx":(l,i,e)=>{var u,w,x,j,P,k,m,T,A;"use strict";e.r(i),e.d(i,{IconText:()=>c,OnlyText:()=>h,__namedExportsOrder:()=>p,_default:()=>_,default:()=>E});var t=e("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-copy-to-clipboard/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),n=e("../components/components/button/index.tsx"),s=e("../components/components/icons/index.tsx"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=d.__,g=({buttonStyle:y="icon",textToCopy:O,onCopy:S,...B})=>{const[z,C]=(0,o.useState)(!1),b=(0,o.useRef)(),L=(0,t.Z)(O,()=>{b.current&&clearTimeout(b.current),C(!0),S==null||S(),b.current=setTimeout(()=>{C(!1),b.current=void 0},3e3)});(0,o.useEffect)(()=>()=>{b.current&&clearTimeout(b.current)},[]);let R=null,I=null;y!=="text"&&(R=z?(0,a.jsx)(s.CheckmarkIcon,{}):(0,a.jsx)(s.ClipboardIcon,{}));const D=r("Copy to clipboard","jetpack");return y!=="icon"&&(I=z?r("Copied!","jetpack"):D),(0,a.jsx)(n.Z,{"aria-label":D,icon:R,children:I,ref:L,...B})},E={title:"JS Packages/Components/CopyToClipboard",component:g},f=y=>(0,a.jsx)(g,{...y}),_=f.bind({});_.args={textToCopy:"Some text to copy"};const c=f.bind({});c.args={buttonStyle:"icon-text",textToCopy:"Some text to copy"};const h=f.bind({});h.args={buttonStyle:"text",textToCopy:"Some text to copy"},_.parameters={..._.parameters,docs:{...(u=_.parameters)==null?void 0:u.docs,source:{originalSource:"args => <CopyToClipboard {...args} />",...(x=(w=_.parameters)==null?void 0:w.docs)==null?void 0:x.source}}},c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:"args => <CopyToClipboard {...args} />",...(k=(P=c.parameters)==null?void 0:P.docs)==null?void 0:k.source}}},h.parameters={...h.parameters,docs:{...(m=h.parameters)==null?void 0:m.docs,source:{originalSource:"args => <CopyToClipboard {...args} />",...(A=(T=h.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};const p=["_default","IconText","OnlyText"]},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(l,i,e)=>{"use strict";e.d(i,{ZP:()=>u});var t=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.1_react@18.3.1__@types+react@18.3.1_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),d=e("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),n=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function a(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const r=d.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,v=(0,o.Z)("svg",{target:"ea4tfvq2"})("width:",n.Z.spinnerSize,"px;height:",n.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",s.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),g={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},E=(0,o.Z)("circle",{target:"ea4tfvq1"})(g,";stroke:",s.D.gray[300],";"),f=(0,o.Z)("path",{target:"ea4tfvq0"})(g,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",r,";");var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function h({className:w,...x},j){return(0,c.jsxs)(v,{className:(0,t.Z)("components-spinner",w),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...x,ref:j,children:[(0,c.jsx)(E,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,c.jsx)(f,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const u=(0,_.forwardRef)(h)},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js":(l,i,e)=>{"use strict";e.d(i,{Z:()=>r});var t=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");const d="36px",n="12px",s={controlSurfaceColor:o.D.white,controlTextActiveColor:o.D.theme.accent,controlPaddingX:n,controlPaddingXLarge:`calc(${n} * 1.3334)`,controlPaddingXSmall:`calc(${n} / 1.3334)`,controlBackgroundColor:o.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${o.D.theme.accent}`,controlDestructiveBorderColor:o.D.alert.red,controlHeight:d,controlHeightXSmall:`calc( ${d} * 0.6 )`,controlHeightSmall:`calc( ${d} * 0.8 )`,controlHeightLarge:`calc( ${d} * 1.2 )`,controlHeightXLarge:`calc( ${d} * 1.4 )`},a={toggleGroupControlBackgroundColor:s.controlBackgroundColor,toggleGroupControlBorderColor:o.D.ui.border,toggleGroupControlBackdropBackgroundColor:s.controlSurfaceColor,toggleGroupControlBackdropBorderColor:o.D.ui.border,toggleGroupControlButtonColorActive:s.controlBackgroundColor},r=Object.assign({},s,a,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.4",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,t.D)(2)}`,cardPaddingSmall:`${(0,t.D)(4)}`,cardPaddingMedium:`${(0,t.D)(4)} ${(0,t.D)(6)}`,cardPaddingLarge:`${(0,t.D)(6)} ${(0,t.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:o.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:o.D.white,surfaceColor:o.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js":(l,i,e)=>{"use strict";e.d(i,{Z:()=>o});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function o(d,n){const s=(0,t.useRef)();return(0,t.useCallback)(a=>{a?s.current=d(a):s.current&&s.current()},n)}},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(l,i,e)=>{"use strict";e.d(i,{Z:()=>d});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function o({icon:n,size:s=24,...a},r){return(0,t.cloneElement)(n,{width:s,height:s,...a,ref:r})}const d=(0,t.forwardRef)(o)},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(l,i,e)=>{"use strict";e.d(i,{Z:()=>n});var t=e("../../../node_modules/.pnpm/@wordpress+primitives@4.0.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=(0,o.jsx)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(t.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../components/components/button/index.tsx":(l,i,e)=>{"use strict";e.d(i,{Z:()=>j});var t=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),r=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),v=e.n(r),g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),E=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(E),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),c={};c.insert="head",c.singleton=!1;var h=f()(_.Z,c);const p=_.Z.locals||{};var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const w=n.__,x=(0,g.forwardRef)((P,k)=>{var V,X;const{children:m,variant:T="primary",size:A="normal",weight:y="bold",icon:O,iconSize:S,disabled:B,isDestructive:z,isLoading:C,isExternalLink:b,className:L,text:R,fullWidth:I,...D}=P,G=v()(p.button,L,{[p.normal]:A==="normal",[p.small]:A==="small",[p.icon]:!!O,[p.loading]:C,[p.regular]:y==="regular",[p["full-width"]]:I,[p["is-icon-button"]]:!!O&&!m});D.ref=k;const Z=A==="normal"?20:16,M=b&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.Z,{size:Z,icon:a.Z,className:p["external-icon"]}),(0,u.jsx)(t.Z,{as:"span",children:w("(opens in a new tab)","jetpack")})]}),N=b?"_blank":void 0,K=(m==null?void 0:m[0])&&m[0]!==null&&((X=(V=m==null?void 0:m[0])==null?void 0:V.props)==null?void 0:X.className)!=="components-tooltip";return(0,u.jsxs)(o.ZP,{target:N,variant:T,className:v()(G,{"has-text":!!O&&K}),icon:b?void 0:O,iconSize:S,disabled:B,"aria-disabled":B,isDestructive:z,text:R,...D,children:[C&&(0,u.jsx)(d.ZP,{}),(0,u.jsx)("span",{children:m}),M]})});x.displayName="Button";const j=x;try{x.displayName="Button",x.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:x.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(P){}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(l,i)=>{var e,t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var o={}.hasOwnProperty,d="[native code]";function n(){for(var s=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var v=typeof r;if(v==="string"||v==="number")s.push(r);else if(Array.isArray(r)){if(r.length){var g=n.apply(null,r);g&&s.push(g)}}else if(v==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){s.push(r.toString());continue}for(var E in r)o.call(r,E)&&r[E]&&s.push(E)}}}return s.join(" ")}l.exports?(n.default=n,l.exports=n):(e=[],t=function(){return n}.apply(i,e),t!==void 0&&(l.exports=t))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(l,i,e)=>{"use strict";e.d(i,{Z:()=>a});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),n=e.n(d),s=n()(o());s.push([l.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),s.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const a=s}}]);})();
