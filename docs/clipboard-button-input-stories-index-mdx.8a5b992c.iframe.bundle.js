"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7779,5850],{"../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.2.61_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(b,l,e)=>{e.d(l,{Z:()=>a,a:()=>r});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const o={},d=t.createContext(o);function r(s){const p=t.useContext(d);return t.useMemo(function(){return typeof s=="function"?s(p):{...p,...s}},[p,s])}function a(s){let p;return s.disableParentContext?p=typeof s.components=="function"?s.components(o):s.components||o:p=r(s.components),t.createElement(d.Provider,{value:p},s.children)}},"../../../node_modules/.pnpm/@storybook+addon-actions@8.0.4/node_modules/@storybook/addon-actions/dist/index.mjs":(b,l,e)=>{e.d(l,{aD:()=>j});var t=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),o=e("@storybook/preview-api"),d=e("@storybook/global"),r=e("@storybook/core-events/preview-errors"),a="actions",s="storybook/actions",p=`${s}/panel`,h=`${s}/action-event`,_=`${s}/action-clear`,n="$___storybook.isCyclic",g={depth:10,clearOnStoryChange:!0,limit:50},P=(u={})=>{Object.assign(g,u)},A=(u,m)=>{let i=Object.getPrototypeOf(u);return!i||m(i)?i:A(i,m)},C=u=>!!(typeof u=="object"&&u&&A(u,m=>/^Synthetic(?:Base)?Event$/.test(m.constructor.name))&&typeof u.persist=="function"),x=u=>{if(C(u)){let m=Object.create(u.constructor.prototype,Object.getOwnPropertyDescriptors(u));m.persist();let i=Object.getOwnPropertyDescriptor(m,"view"),c=i==null?void 0:i.value;return typeof c=="object"&&(c==null?void 0:c.constructor.name)==="Window"&&Object.defineProperty(m,"view",{...i,value:Object.create(c.constructor.prototype)}),m}return u},v=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,t.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function j(u,m={}){let i={...g,...m},c=function(...y){var B,D;if(m.implicit){let T=(B="__STORYBOOK_PREVIEW__"in d.global?d.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:B.storyRenders.find(w=>w.phase==="playing"||w.phase==="rendering");if(T){let w=!((D=window==null?void 0:window.FEATURES)!=null&&D.disallowImplicitActionsInRenderV8),I=new r.ImplicitActionsDuringRendering({phase:T.phase,name:u,deprecated:w});if(w)console.warn(I);else throw I}}let E=o.addons.getChannel(),S=v(),O=5,k=y.map(x),R=y.length>1?k:k[0],M={id:S,count:0,data:{name:u,args:R},options:{...i,maxDepth:O+(i.depth||3),allowFunction:i.allowFunction||!1}};E.emit(h,M)};return c.isAction=!0,c.implicit=m.implicit,c}var f=(...u)=>{let m=g,i=u;i.length===1&&Array.isArray(i[0])&&([i]=i),i.length!==1&&typeof i[i.length-1]!="string"&&(m={...g,...i.pop()});let c=i[0];(i.length!==1||typeof c=="string")&&(c={},i.forEach(E=>{c[E]=E}));let y={};return Object.keys(c).forEach(E=>{y[E]=j(c[E],m)}),y}},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.mdx":(b,l,e)=>{e.r(l),e.d(l,{default:()=>h});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=e("../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.2.61_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),r=e("../../../node_modules/.pnpm/@storybook+blocks@8.0.4_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),a=e("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),s=e("../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx");function p(_){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,d.a)(),..._.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h_,{of:s}),`
`,(0,o.jsx)(n.h1,{id:"clipboardbuttoninput",children:"ClipboardButtonInput"}),`
`,(0,o.jsx)(n.p,{children:"ClipboardButtonInput is a React component used to display a text input field containing a button for copying the value of the input to a user's clipboard."}),`
`,(0,o.jsx)(r.Xz,{sourceState:"shown",of:s._default}),`
`,(0,o.jsx)(n.h2,{id:"api",children:"API"}),`
`,(0,o.jsx)(n.h3,{id:"text",children:"text"}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsxs)(n.li,{children:["type: ",(0,o.jsx)(n.code,{children:"string"})]}),`
`]}),`
`,(0,o.jsx)(n.p,{children:`The text to show in the input element.
And, in case the value property is not defined, it represents the value be copied when clicking the copy button,`}),`
`,(0,o.jsx)(n.h3,{id:"value",children:"value"}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsxs)(n.li,{children:["type: ",(0,o.jsx)(n.code,{children:"string"})]}),`
`]}),`
`,(0,o.jsx)(n.p,{children:"The value to be copied when clicking the copy button. Optional."}),`
`,(0,o.jsx)(n.h3,{id:"oncopy",children:"onCopy"}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsxs)(n.li,{children:["type: ",(0,o.jsx)(n.code,{children:"function"})]}),`
`,(0,o.jsxs)(n.li,{children:["default: ",(0,o.jsx)(n.code,{children:"noop"})]}),`
`]}),`
`,(0,o.jsx)(n.p,{children:"Callback to be invoked when the text is successfully copied."}),`
`,(0,o.jsx)(n.h3,{id:"resettime",children:"resetTime"}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsxs)(n.li,{children:["type: ",(0,o.jsx)(n.code,{children:"number"})]}),`
`,(0,o.jsxs)(n.li,{children:["default: ",(0,o.jsx)(n.code,{children:"3000"})]}),`
`]}),`
`,(0,o.jsx)(n.p,{children:"Timer in miliseconds to reset the copy button to its initial state."})]})}function h(_={}){const{wrapper:n}={...(0,d.a)(),..._.components};return n?(0,o.jsx)(n,{..._,children:(0,o.jsx)(p,{..._})}):p(_)}},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx":(b,l,e)=>{var h,_,n;e.r(l),e.d(l,{__namedExportsOrder:()=>p,_default:()=>s,default:()=>r});var t=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.0.4/node_modules/@storybook/addon-actions/dist/index.mjs"),o=e("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const r={title:"Packages/VideoPress/Clipboard Button Input",component:o.Z},s=(g=>(0,d.jsx)(o.Z,{...g})).bind({});s.args={text:"Lorem Ipsum...",value:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",onCopy:(0,t.aD)("onCopy"),resetTime:3e3},s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <ClipboardButtonInput {...args} />;
}`,...(n=(_=s.parameters)==null?void 0:_.docs)==null?void 0:n.source}}};const p=["_default"]},"../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(b,l,e)=>{e.d(l,{ZP:()=>v});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=e.n(o),r=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.4_@types+react@18.2.61_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),a=e("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.2.61_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function h(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const _=a.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,n=(0,r.Z)("svg",{target:"ea4tfvq2"})("width:",s.Z.spinnerSize,"px;height:",s.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",p.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),g={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},P=(0,r.Z)("circle",{target:"ea4tfvq1"})(g,";stroke:",p.D.gray[300],";"),A=(0,r.Z)("path",{target:"ea4tfvq0"})(g,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",_,";");function C({className:j,...f},u){return(0,t.createElement)(n,{className:d()("components-spinner",j),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...f,ref:u},(0,t.createElement)(P,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,t.createElement)(A,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const v=(0,t.forwardRef)(C)},"../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(b,l,e)=>{e.d(l,{Z:()=>p});var t=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const d="36px",r="12px",a={controlSurfaceColor:o.D.white,controlTextActiveColor:o.D.theme.accent,controlPaddingX:r,controlPaddingXLarge:`calc(${r} * 1.3334)`,controlPaddingXSmall:`calc(${r} / 1.3334)`,controlBackgroundColor:o.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${o.D.theme.accent}`,controlDestructiveBorderColor:o.D.alert.red,controlHeight:d,controlHeightXSmall:`calc( ${d} * 0.6 )`,controlHeightSmall:`calc( ${d} * 0.8 )`,controlHeightLarge:`calc( ${d} * 1.2 )`,controlHeightXLarge:`calc( ${d} * 1.4 )`},s={toggleGroupControlBackgroundColor:a.controlBackgroundColor,toggleGroupControlBorderColor:o.D.ui.border,toggleGroupControlBackdropBackgroundColor:a.controlSurfaceColor,toggleGroupControlBackdropBorderColor:o.D.ui.border,toggleGroupControlButtonColorActive:a.controlBackgroundColor},p=Object.assign({},a,s,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,t.D)(2)}`,cardPaddingSmall:`${(0,t.D)(4)}`,cardPaddingMedium:`${(0,t.D)(4)} ${(0,t.D)(6)}`,cardPaddingLarge:`${(0,t.D)(6)} ${(0,t.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:o.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:o.D.white,surfaceColor:o.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+compose@6.30.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js":(b,l,e)=>{e.d(l,{Z:()=>o});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function o(d,r){const a=(0,t.useRef)();return(0,t.useCallback)(s=>{s?a.current=d(s):a.current&&a.current()},r)}},"../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(b,l,e)=>{e.d(l,{Z:()=>d});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function o({icon:r,size:a=24,...s},p){return(0,t.cloneElement)(r,{width:a,height:a,...s,ref:p})}const d=(0,t.forwardRef)(o)},"../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(b,l,e)=>{e.d(l,{Z:()=>r});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.51.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,t.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(o.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../components/components/button/index.tsx":(b,l,e)=>{e.d(l,{Z:()=>u});var t=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),p=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),h=e.n(p),_=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(n),P=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),A={};A.insert="head",A.singleton=!1;var C=g()(P.Z,A);const x=P.Z.locals||{};var v=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const j=r.__,f=(0,_.forwardRef)((m,i)=>{var z,V;const{children:c,variant:y="primary",size:E="normal",weight:S="bold",icon:O,iconSize:k,disabled:R,isDestructive:M,isLoading:B,isExternalLink:D,className:T,text:w,fullWidth:I,...L}=m,X=h()(x.button,T,{[x.normal]:E==="normal",[x.small]:E==="small",[x.icon]:!!O,[x.loading]:B,[x.regular]:S==="regular",[x["full-width"]]:I,[x["is-icon-button"]]:!!O&&!c});L.ref=i;const Z=E==="normal"?20:16,K=D&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a.Z,{size:Z,icon:s.Z,className:x["external-icon"]}),(0,v.jsx)(t.Z,{as:"span",children:j("(opens in a new tab)","jetpack")})]}),G=D?"_blank":void 0,U=(c==null?void 0:c[0])&&c[0]!==null&&((V=(z=c==null?void 0:c[0])==null?void 0:z.props)==null?void 0:V.className)!=="components-tooltip";return(0,v.jsxs)(o.ZP,{target:G,variant:y,className:h()(X,{"has-text":!!O&&U}),icon:D?void 0:O,iconSize:k,disabled:R,"aria-disabled":R,isDestructive:M,text:w,...L,children:[B&&(0,v.jsx)(d.ZP,{}),(0,v.jsx)("span",{children:c}),K]})});f.displayName="Button";const u=f;try{f.displayName="Button",f.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:f.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(m){}},"../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx":(b,l,e)=>{e.d(l,{Z:()=>C});var t=e("../components/components/button/index.tsx"),o=e("../../../node_modules/.pnpm/@wordpress+compose@6.30.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-copy-to-clipboard/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(a),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/clipboard-button-input/style.module.scss"),h={};h.insert="head",h.singleton=!1;var _=s()(p.Z,h);const n=p.Z.locals||{};var g=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const P=d.__,C=({text:x,value:v,onCopy:j,resetTime:f=3e3})=>{const u=O=>{O.currentTarget.select()},m=P("Copied!","jetpack-videopress-pkg"),i=P("Copy","jetpack-videopress-pkg"),[c,y]=(0,r.useState)(!1),E=v||x,S=(0,o.Z)(E,()=>{const O=setTimeout(()=>{y(!1),clearTimeout(O)},f);y(!0),j==null||j()});return(0,g.jsxs)("div",{className:n.wrapper,children:[(0,g.jsx)("input",{type:"text",value:x||v,onClick:u,readOnly:!0}),(0,g.jsx)(t.Z,{weight:"regular",variant:"secondary",size:"small",ref:S,children:c?m:i})]})}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(b,l,e)=>{e.d(l,{Z:()=>s});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(d),a=r()(o());a.push([b.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),a.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const s=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/clipboard-button-input/style.module.scss":(b,l,e)=>{e.d(l,{Z:()=>s});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(d),a=r()(o());a.push([b.id,".Bjq3YC0ysP_tCAFtxVMj{display:flex;flex-direction:row;height:36px;border:1px solid var(--jp-gray-40);border-radius:calc(var(--jp-border-radius)/2);padding:calc(var(--spacing-base)*.5);padding-left:calc(var(--spacing-base)*1.5);background-color:var(--jp-white);box-sizing:border-box}.Bjq3YC0ysP_tCAFtxVMj:focus-within{box-shadow:0 0 0 1px var(--jp-black) inset}.Bjq3YC0ysP_tCAFtxVMj>input{all:unset;width:100%;border:0;font-size:var(--font-body-small);color:var(--jp-gray-80);outline:none;text-overflow:ellipsis;cursor:default}.Bjq3YC0ysP_tCAFtxVMj>input:focus{outline:none;box-shadow:none;border:none}.Bjq3YC0ysP_tCAFtxVMj .kRmJN_soKZTs4UmGPd9M{display:inline-flex}",""]),a.locals={wrapper:"Bjq3YC0ysP_tCAFtxVMj","button-wrapper":"kRmJN_soKZTs4UmGPd9M"};const s=a}}]);})();
