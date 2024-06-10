"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9496],{"../components/components/copy-to-clipboard/stories/index.stories.tsx":(x,d,o)=>{var f,_,w,h,k,l,T,j,D;o.r(d),o.d(d,{IconText:()=>u,OnlyText:()=>a,__namedExportsOrder:()=>m,_default:()=>c,default:()=>O});var s=o("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-copy-to-clipboard/index.js"),e=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=o("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),r=o("../components/components/button/index.tsx"),t=o("../components/components/icons/index.tsx"),i=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const p=n.__,E=({buttonStyle:g="icon",textToCopy:R,onCopy:A,...L})=>{const[P,y]=(0,e.useState)(!1),v=(0,e.useRef)(),I=(0,s.Z)(R,()=>{v.current&&clearTimeout(v.current),y(!0),A==null||A(),v.current=setTimeout(()=>{y(!1),v.current=void 0},3e3)});(0,e.useEffect)(()=>()=>{v.current&&clearTimeout(v.current)},[]);let B=null,C=null;g!=="text"&&(B=P?(0,i.jsx)(t.CheckmarkIcon,{}):(0,i.jsx)(t.ClipboardIcon,{}));const z=p("Copy to clipboard","jetpack");return g!=="icon"&&(C=P?p("Copied!","jetpack"):z),(0,i.jsx)(r.Z,{"aria-label":z,icon:B,children:C,ref:I,...L})},O={title:"JS Packages/Components/CopyToClipboard",component:E},b=g=>(0,i.jsx)(E,{...g}),c=b.bind({});c.args={textToCopy:"Some text to copy"};const u=b.bind({});u.args={buttonStyle:"icon-text",textToCopy:"Some text to copy"};const a=b.bind({});a.args={buttonStyle:"text",textToCopy:"Some text to copy"},c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:"args => <CopyToClipboard {...args} />",...(w=(_=c.parameters)==null?void 0:_.docs)==null?void 0:w.source}}},u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:"args => <CopyToClipboard {...args} />",...(l=(k=u.parameters)==null?void 0:k.docs)==null?void 0:l.source}}},a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:"args => <CopyToClipboard {...args} />",...(D=(j=a.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};const m=["_default","IconText","OnlyText"]},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(x,d,o)=>{o.d(d,{ZP:()=>f});var s=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),e=o("../../../node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.1_react@18.3.1__@types+react@18.3.1_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),n=o("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),r=o("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),t=o("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function i(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const p=n.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,S=(0,e.Z)("svg",{target:"ea4tfvq2"})("width:",r.Z.spinnerSize,"px;height:",r.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",t.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),E={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},O=(0,e.Z)("circle",{target:"ea4tfvq1"})(E,";stroke:",t.D.gray[300],";"),b=(0,e.Z)("path",{target:"ea4tfvq0"})(E,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",p,";");var c=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function a({className:_,...w},h){return(0,u.jsxs)(S,{className:(0,s.Z)("components-spinner",_),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...w,ref:h,children:[(0,u.jsx)(O,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,u.jsx)(b,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const f=(0,c.forwardRef)(a)},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js":(x,d,o)=>{o.d(d,{Z:()=>p});var s=o("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js"),e=o("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");const n="36px",r="12px",t={controlSurfaceColor:e.D.white,controlTextActiveColor:e.D.theme.accent,controlPaddingX:r,controlPaddingXLarge:`calc(${r} * 1.3334)`,controlPaddingXSmall:`calc(${r} / 1.3334)`,controlBackgroundColor:e.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${e.D.theme.accent}`,controlDestructiveBorderColor:e.D.alert.red,controlHeight:n,controlHeightXSmall:`calc( ${n} * 0.6 )`,controlHeightSmall:`calc( ${n} * 0.8 )`,controlHeightLarge:`calc( ${n} * 1.2 )`,controlHeightXLarge:`calc( ${n} * 1.4 )`},i={toggleGroupControlBackgroundColor:t.controlBackgroundColor,toggleGroupControlBorderColor:e.D.ui.border,toggleGroupControlBackdropBackgroundColor:t.controlSurfaceColor,toggleGroupControlBackdropBorderColor:e.D.ui.border,toggleGroupControlButtonColorActive:t.controlBackgroundColor},p=Object.assign({},t,i,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.4",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,s.D)(2)}`,cardPaddingSmall:`${(0,s.D)(4)}`,cardPaddingMedium:`${(0,s.D)(4)} ${(0,s.D)(6)}`,cardPaddingLarge:`${(0,s.D)(6)} ${(0,s.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:e.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:e.D.white,surfaceColor:e.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js":(x,d,o)=>{o.d(d,{Z:()=>e});var s=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function e(n,r){const t=(0,s.useRef)();return(0,s.useCallback)(i=>{i?t.current=n(i):t.current&&t.current()},r)}},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(x,d,o)=>{o.d(d,{Z:()=>n});var s=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function e({icon:r,size:t=24,...i},p){return(0,s.cloneElement)(r,{width:t,height:t,...i,ref:p})}const n=(0,s.forwardRef)(e)},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(x,d,o)=>{o.d(d,{Z:()=>r});var s=o("../../../node_modules/.pnpm/@wordpress+primitives@4.0.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),e=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,e.jsx)(s.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,e.jsx)(s.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../components/components/button/index.tsx":(x,d,o)=>{o.d(d,{Z:()=>w});var s=o("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),e=o("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),n=o("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),r=o("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),t=o("../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),i=o("../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),p=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),S=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),E=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),O=o.n(E),b=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),c={};c.insert="head",c.singleton=!1;var u=O()(b.Z,c);const a=b.Z.locals||{};var m=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=r.__,_=(0,S.forwardRef)((h,k)=>{var V,X;const{children:l,variant:T="primary",size:j="normal",weight:D="bold",icon:g,iconSize:R,disabled:A,isDestructive:L,isLoading:P,isExternalLink:y,className:v,text:I,fullWidth:B,...C}=h,z=(0,p.Z)(a.button,v,{[a.normal]:j==="normal",[a.small]:j==="small",[a.icon]:!!g,[a.loading]:P,[a.regular]:D==="regular",[a["full-width"]]:B,[a["is-icon-button"]]:!!g&&!l});C.ref=k;const G=j==="normal"?20:16,Z=y&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.Z,{size:G,icon:i.Z,className:a["external-icon"]}),(0,m.jsx)(s.Z,{as:"span",children:f("(opens in a new tab)","jetpack")})]}),M=y?"_blank":void 0,N=(l==null?void 0:l[0])&&l[0]!==null&&((X=(V=l==null?void 0:l[0])==null?void 0:V.props)==null?void 0:X.className)!=="components-tooltip";return(0,m.jsxs)(e.ZP,{target:M,variant:T,className:(0,p.Z)(z,{"has-text":!!g&&N}),icon:y?void 0:g,iconSize:R,disabled:A,"aria-disabled":A,isDestructive:L,text:I,...C,children:[P&&(0,m.jsx)(n.ZP,{}),(0,m.jsx)("span",{children:l}),Z]})});_.displayName="Button";const w=_;try{_.displayName="Button",_.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:_.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(h){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(x,d,o)=>{o.d(d,{Z:()=>i});var s=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=o.n(s),n=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),r=o.n(n),t=r()(e());t.push([x.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),t.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const i=t}}]);})();
