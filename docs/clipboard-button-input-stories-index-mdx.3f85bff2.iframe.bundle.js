(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7779,5850],{"../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(u,s,e)=>{"use strict";e.d(s,{Z:()=>i,a:()=>c});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const o={},a=t.createContext(o);function c(n){const l=t.useContext(a);return t.useMemo(function(){return typeof n=="function"?n(l):{...l,...n}},[l,n])}function i(n){let l;return n.disableParentContext?l=typeof n.components=="function"?n.components(o):n.components||o:l=c(n.components),t.createElement(a.Provider,{value:l},n.children)}},"../../../node_modules/.pnpm/@storybook+addon-actions@8.2.9_storybook@8.2.9/node_modules/@storybook/addon-actions/dist/index.mjs":(u,s,e)=>{"use strict";e.d(s,{aD:()=>h});var t=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),o=e("storybook/internal/preview-api"),a=e("@storybook/global"),c=e("storybook/internal/preview-errors"),i="actions",n="storybook/actions",l=`${n}/panel`,v=`${n}/action-event`,b=`${n}/action-clear`,r="$___storybook.isCyclic",x={depth:10,clearOnStoryChange:!0,limit:50},f=(p={})=>{Object.assign(x,p)},w=(p,_)=>{let d=Object.getPrototypeOf(p);return!d||_(d)?d:w(d,_)},g=p=>!!(typeof p=="object"&&p&&w(p,_=>/^Synthetic(?:Base)?Event$/.test(_.constructor.name))&&typeof p.persist=="function"),E=p=>{if(g(p)){let _=Object.create(p.constructor.prototype,Object.getOwnPropertyDescriptors(p));_.persist();let d=Object.getOwnPropertyDescriptor(_,"view"),m=d==null?void 0:d.value;return typeof m=="object"&&(m==null?void 0:m.constructor.name)==="Window"&&Object.defineProperty(_,"view",{...d,value:Object.create(m.constructor.prototype)}),_}return p},O=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,t.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function h(p,_={}){let d={...x,..._},m=function(...j){var D,T;if(_.implicit){let M=(D="__STORYBOOK_PREVIEW__"in a.global?a.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:D.storyRenders.find(k=>k.phase==="playing"||k.phase==="rendering");if(M){let k=!((T=window==null?void 0:window.FEATURES)!=null&&T.disallowImplicitActionsInRenderV8),B=new c.ImplicitActionsDuringRendering({phase:M.phase,name:p,deprecated:k});if(k)console.warn(B);else throw B}}let y=o.addons.getChannel(),A=O(),P=5,S=j.map(E),I=j.length>1?S:S[0],R={id:A,count:0,data:{name:p,args:I},options:{...d,maxDepth:P+(d.depth||3),allowFunction:d.allowFunction||!1}};y.emit(v,R)};return m.isAction=!0,m.implicit=_.implicit,m}var C=(...p)=>{let _=x,d=p;d.length===1&&Array.isArray(d[0])&&([d]=d),d.length!==1&&typeof d[d.length-1]!="string"&&(_={...x,...d.pop()});let m=d[0];(d.length!==1||typeof m=="string")&&(m={},d.forEach(y=>{m[y]=y}));let j={};return Object.keys(m).forEach(y=>{j[y]=h(m[y],_)}),j}},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.mdx":(u,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>v});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),a=e("../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),c=e("../../../node_modules/.pnpm/@storybook+blocks@8.2.9_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.2.9/node_modules/@storybook/blocks/dist/index.mjs"),i=e("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),n=e("../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx");function l(b){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.a)(),...b.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.h_,{of:n}),`
`,(0,o.jsx)(r.h1,{id:"clipboardbuttoninput",children:"ClipboardButtonInput"}),`
`,(0,o.jsx)(r.p,{children:"ClipboardButtonInput is a React component used to display a text input field containing a button for copying the value of the input to a user's clipboard."}),`
`,(0,o.jsx)(c.Xz,{sourceState:"shown",of:n._default}),`
`,(0,o.jsx)(r.h2,{id:"api",children:"API"}),`
`,(0,o.jsx)(r.h3,{id:"text",children:"text"}),`
`,(0,o.jsxs)(r.ul,{children:[`
`,(0,o.jsxs)(r.li,{children:["type: ",(0,o.jsx)(r.code,{children:"string"})]}),`
`]}),`
`,(0,o.jsx)(r.p,{children:`The text to show in the input element.
And, in case the value property is not defined, it represents the value be copied when clicking the copy button,`}),`
`,(0,o.jsx)(r.h3,{id:"value",children:"value"}),`
`,(0,o.jsxs)(r.ul,{children:[`
`,(0,o.jsxs)(r.li,{children:["type: ",(0,o.jsx)(r.code,{children:"string"})]}),`
`]}),`
`,(0,o.jsx)(r.p,{children:"The value to be copied when clicking the copy button. Optional."}),`
`,(0,o.jsx)(r.h3,{id:"oncopy",children:"onCopy"}),`
`,(0,o.jsxs)(r.ul,{children:[`
`,(0,o.jsxs)(r.li,{children:["type: ",(0,o.jsx)(r.code,{children:"function"})]}),`
`,(0,o.jsxs)(r.li,{children:["default: ",(0,o.jsx)(r.code,{children:"noop"})]}),`
`]}),`
`,(0,o.jsx)(r.p,{children:"Callback to be invoked when the text is successfully copied."}),`
`,(0,o.jsx)(r.h3,{id:"resettime",children:"resetTime"}),`
`,(0,o.jsxs)(r.ul,{children:[`
`,(0,o.jsxs)(r.li,{children:["type: ",(0,o.jsx)(r.code,{children:"number"})]}),`
`,(0,o.jsxs)(r.li,{children:["default: ",(0,o.jsx)(r.code,{children:"3000"})]}),`
`]}),`
`,(0,o.jsx)(r.p,{children:"Timer in miliseconds to reset the copy button to its initial state."})]})}function v(b={}){const{wrapper:r}={...(0,a.a)(),...b.components};return r?(0,o.jsx)(r,{...b,children:(0,o.jsx)(l,{...b})}):l(b)}},"../../../node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/components sync recursive":u=>{function s(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/components sync recursive",u.exports=s},"../../../node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/theming sync recursive":u=>{function s(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/theming sync recursive",u.exports=s},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx":(u,s,e)=>{var v,b,r;"use strict";e.r(s),e.d(s,{__namedExportsOrder:()=>l,_default:()=>n,default:()=>c});var t=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.2.9_storybook@8.2.9/node_modules/@storybook/addon-actions/dist/index.mjs"),o=e("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c={title:"Packages/VideoPress/Clipboard Button Input",component:o.Z},n=(x=>(0,a.jsx)(o.Z,{...x})).bind({});n.args={text:"Lorem Ipsum...",value:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",onCopy:(0,t.aD)("onCopy"),resetTime:3e3};const l=["_default"];n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return <ClipboardButtonInput {...args} />;
}`,...(r=(b=n.parameters)==null?void 0:b.docs)==null?void 0:r.source}}}},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(u,s,e)=>{"use strict";e.d(s,{ZP:()=>O});var t=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),a=e("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),i=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function n(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const l=a.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,v=(0,o.Z)("svg",{target:"ea4tfvq2"})("width:",c.Z.spinnerSize,"px;height:",c.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",i.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),b={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},r=(0,o.Z)("circle",{target:"ea4tfvq1"})(b,";stroke:",i.D.gray[300],";"),x=(0,o.Z)("path",{target:"ea4tfvq0"})(b,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",l,";");var f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),w=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function g({className:h,...C},p){return(0,w.jsxs)(v,{className:(0,t.Z)("components-spinner",h),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...C,ref:p,children:[(0,w.jsx)(r,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,w.jsx)(x,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const O=(0,f.forwardRef)(g)},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js":(u,s,e)=>{"use strict";e.d(s,{Z:()=>l});var t=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");const a="36px",c="12px",i={controlSurfaceColor:o.D.white,controlTextActiveColor:o.D.theme.accent,controlPaddingX:c,controlPaddingXLarge:`calc(${c} * 1.3334)`,controlPaddingXSmall:`calc(${c} / 1.3334)`,controlBackgroundColor:o.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${o.D.theme.accent}`,controlDestructiveBorderColor:o.D.alert.red,controlHeight:a,controlHeightXSmall:`calc( ${a} * 0.6 )`,controlHeightSmall:`calc( ${a} * 0.8 )`,controlHeightLarge:`calc( ${a} * 1.2 )`,controlHeightXLarge:`calc( ${a} * 1.4 )`},n={toggleGroupControlBackgroundColor:i.controlBackgroundColor,toggleGroupControlBorderColor:o.D.ui.border,toggleGroupControlBackdropBackgroundColor:i.controlSurfaceColor,toggleGroupControlBackdropBorderColor:o.D.ui.border,toggleGroupControlButtonColorActive:i.controlBackgroundColor},l=Object.assign({},i,n,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusXSmall:"1px",radiusSmall:"2px",radiusMedium:"4px",radiusLarge:"8px",radiusFull:"9999px",radiusRound:"50%",radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.4",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,t.D)(2)}`,cardPaddingSmall:`${(0,t.D)(4)}`,cardPaddingMedium:`${(0,t.D)(4)} ${(0,t.D)(6)}`,cardPaddingLarge:`${(0,t.D)(6)} ${(0,t.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:o.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:o.D.white,surfaceColor:o.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js":(u,s,e)=>{"use strict";e.d(s,{Z:()=>o});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function o(a,c){const i=(0,t.useRef)();return(0,t.useCallback)(n=>{n?i.current=a(n):i.current&&i.current()},c)}},"../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(u,s,e)=>{"use strict";e.d(s,{Z:()=>a});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function o({icon:c,size:i=24,...n},l){return(0,t.cloneElement)(c,{width:i,height:i,...n,ref:l})}const a=(0,t.forwardRef)(o)},"../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(u,s,e)=>{"use strict";e.d(s,{Z:()=>c});var t=e("../../../node_modules/.pnpm/@wordpress+primitives@4.5.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=(0,o.jsx)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(t.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../components/components/button/index.tsx":(u,s,e)=>{"use strict";e.d(s,{Z:()=>C});var t=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+i18n@5.5.0/node_modules/@wordpress/i18n/build-module/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),l=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),b=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(b),x=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),f={};f.insert="head",f.singleton=!1;var w=r()(x.Z,f);const g=x.Z.locals||{};var E=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const O=c.__,h=(0,v.forwardRef)((p,_)=>{var L,z;const{children:d,variant:m="primary",size:j="normal",weight:y="bold",icon:A,iconSize:P,disabled:S,isDestructive:I,isLoading:R,isExternalLink:D,className:T,text:M,fullWidth:k,...B}=p,V=(0,l.Z)(g.button,T,{[g.normal]:j==="normal",[g.small]:j==="small",[g.icon]:!!A,[g.loading]:R,[g.regular]:y==="regular",[g["full-width"]]:k,[g["is-icon-button"]]:!!A&&!d});B.ref=_;const X=j==="normal"?20:16,Z=D&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(i.Z,{size:X,icon:n.Z,className:g["external-icon"]}),(0,E.jsx)(t.Z,{as:"span",children:O("(opens in a new tab)","jetpack")})]}),U=D?"_blank":void 0,K=(d==null?void 0:d[0])&&d[0]!==null&&((z=(L=d==null?void 0:d[0])==null?void 0:L.props)==null?void 0:z.className)!=="components-tooltip";return(0,E.jsxs)(o.ZP,{target:U,variant:m,className:(0,l.Z)(V,{"has-text":!!A&&K}),icon:D?void 0:A,iconSize:P,disabled:S,"aria-disabled":S,isDestructive:I,text:M,...B,children:[R&&(0,E.jsx)(a.ZP,{}),(0,E.jsx)("span",{children:d}),Z]})});h.displayName="Button";const C=h;try{h.displayName="Button",h.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:h.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(p){}},"../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx":(u,s,e)=>{"use strict";e.d(s,{Z:()=>g});var t=e("../components/components/button/index.tsx"),o=e("../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-copy-to-clipboard/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+i18n@5.5.0/node_modules/@wordpress/i18n/build-module/index.js"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(i),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/clipboard-button-input/style.module.scss"),v={};v.insert="head",v.singleton=!1;var b=n()(l.Z,v);const r=l.Z.locals||{};var x=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=a.__,g=({text:E,value:O,onCopy:h,resetTime:C=3e3})=>{const p=P=>{P.currentTarget.select()},_=f("Copied!","jetpack-videopress-pkg"),d=f("Copy","jetpack-videopress-pkg"),[m,j]=(0,c.useState)(!1),y=O||E,A=(0,o.Z)(y,()=>{const P=setTimeout(()=>{j(!1),clearTimeout(P)},C);j(!0),h==null||h()});return(0,x.jsxs)("div",{className:r.wrapper,children:[(0,x.jsx)("input",{type:"text",value:E||O,onClick:p,readOnly:!0}),(0,x.jsx)(t.Z,{weight:"regular",variant:"secondary",size:"small",ref:A,children:m?_:d})]})}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(u,s,e)=>{"use strict";e.d(s,{Z:()=>n});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),c=e.n(a),i=c()(o());i.push([u.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),i.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const n=i},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/clipboard-button-input/style.module.scss":(u,s,e)=>{"use strict";e.d(s,{Z:()=>n});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),c=e.n(a),i=c()(o());i.push([u.id,".Bjq3YC0ysP_tCAFtxVMj{display:flex;flex-direction:row;height:36px;border:1px solid var(--jp-gray-40);border-radius:calc(var(--jp-border-radius)/2);padding:calc(var(--spacing-base)*.5);padding-left:calc(var(--spacing-base)*1.5);background-color:var(--jp-white);box-sizing:border-box}.Bjq3YC0ysP_tCAFtxVMj:focus-within{box-shadow:0 0 0 1px var(--jp-black) inset}.Bjq3YC0ysP_tCAFtxVMj>input{all:unset;width:100%;border:0;font-size:var(--font-body-small);color:var(--jp-gray-80);outline:none;text-overflow:ellipsis;cursor:default}.Bjq3YC0ysP_tCAFtxVMj>input:focus{outline:none;box-shadow:none;border:none}.Bjq3YC0ysP_tCAFtxVMj .kRmJN_soKZTs4UmGPd9M{display:inline-flex}",""]),i.locals={wrapper:"Bjq3YC0ysP_tCAFtxVMj","button-wrapper":"kRmJN_soKZTs4UmGPd9M"};const n=i},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":u=>{function s(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",u.exports=s}}]);})();
