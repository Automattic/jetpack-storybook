(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7779,5850],{"../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.1_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(_,r,e)=>{"use strict";e.d(r,{Z:()=>i,a:()=>a});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const o={},d=t.createContext(o);function a(s){const p=t.useContext(d);return t.useMemo(function(){return typeof s=="function"?s(p):{...p,...s}},[p,s])}function i(s){let p;return s.disableParentContext?p=typeof s.components=="function"?s.components(o):s.components||o:p=a(s.components),t.createElement(d.Provider,{value:p},s.children)}},"../../../node_modules/.pnpm/@storybook+addon-actions@8.0.6/node_modules/@storybook/addon-actions/dist/index.mjs":(_,r,e)=>{"use strict";e.d(r,{aD:()=>j});var t=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),o=e("@storybook/preview-api"),d=e("@storybook/global"),a=e("@storybook/core-events/preview-errors"),i="actions",s="storybook/actions",p=`${s}/panel`,v=`${s}/action-event`,g=`${s}/action-clear`,n="$___storybook.isCyclic",x={depth:10,clearOnStoryChange:!0,limit:50},w=(u={})=>{Object.assign(x,u)},A=(u,m)=>{let c=Object.getPrototypeOf(u);return!c||m(c)?c:A(c,m)},C=u=>!!(typeof u=="object"&&u&&A(u,m=>/^Synthetic(?:Base)?Event$/.test(m.constructor.name))&&typeof u.persist=="function"),b=u=>{if(C(u)){let m=Object.create(u.constructor.prototype,Object.getOwnPropertyDescriptors(u));m.persist();let c=Object.getOwnPropertyDescriptor(m,"view"),l=c==null?void 0:c.value;return typeof l=="object"&&(l==null?void 0:l.constructor.name)==="Window"&&Object.defineProperty(m,"view",{...c,value:Object.create(l.constructor.prototype)}),m}return u},E=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,t.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function j(u,m={}){let c={...x,...m},l=function(...y){var k,D;if(m.implicit){let T=(k="__STORYBOOK_PREVIEW__"in d.global?d.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:k.storyRenders.find(P=>P.phase==="playing"||P.phase==="rendering");if(T){let P=!((D=window==null?void 0:window.FEATURES)!=null&&D.disallowImplicitActionsInRenderV8),M=new a.ImplicitActionsDuringRendering({phase:T.phase,name:u,deprecated:P});if(P)console.warn(M);else throw M}}let h=o.addons.getChannel(),S=E(),O=5,B=y.map(b),R=y.length>1?B:B[0],I={id:S,count:0,data:{name:u,args:R},options:{...c,maxDepth:O+(c.depth||3),allowFunction:c.allowFunction||!1}};h.emit(v,I)};return l.isAction=!0,l.implicit=m.implicit,l}var f=(...u)=>{let m=x,c=u;c.length===1&&Array.isArray(c[0])&&([c]=c),c.length!==1&&typeof c[c.length-1]!="string"&&(m={...x,...c.pop()});let l=c[0];(c.length!==1||typeof l=="string")&&(l={},c.forEach(h=>{l[h]=h}));let y={};return Object.keys(l).forEach(h=>{y[h]=j(l[h],m)}),y}},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.mdx":(_,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>v});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=e("../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.1_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),a=e("../../../node_modules/.pnpm/@storybook+blocks@8.0.6_@types+react@18.3.1_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),i=e("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),s=e("../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx");function p(g){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,d.a)(),...g.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h_,{of:s}),`
`,(0,o.jsx)(n.h1,{id:"clipboardbuttoninput",children:"ClipboardButtonInput"}),`
`,(0,o.jsx)(n.p,{children:"ClipboardButtonInput is a React component used to display a text input field containing a button for copying the value of the input to a user's clipboard."}),`
`,(0,o.jsx)(a.Xz,{sourceState:"shown",of:s._default}),`
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
`,(0,o.jsx)(n.p,{children:"Timer in miliseconds to reset the copy button to its initial state."})]})}function v(g={}){const{wrapper:n}={...(0,d.a)(),...g.components};return n?(0,o.jsx)(n,{...g,children:(0,o.jsx)(p,{...g})}):p(g)}},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx":(_,r,e)=>{var v,g,n;"use strict";e.r(r),e.d(r,{__namedExportsOrder:()=>p,_default:()=>s,default:()=>a});var t=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.0.6/node_modules/@storybook/addon-actions/dist/index.mjs"),o=e("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const a={title:"Packages/VideoPress/Clipboard Button Input",component:o.Z},s=(x=>(0,d.jsx)(o.Z,{...x})).bind({});s.args={text:"Lorem Ipsum...",value:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",onCopy:(0,t.aD)("onCopy"),resetTime:3e3},s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return <ClipboardButtonInput {...args} />;
}`,...(n=(g=s.parameters)==null?void 0:g.docs)==null?void 0:n.source}}};const p=["_default"]},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.3.1_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(_,r,e)=>{"use strict";e.d(r,{ZP:()=>E});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=e.n(o),a=e("../../../node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.1_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),i=e("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.1_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.3.1_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.3.1_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function v(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const g=i.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,n=(0,a.Z)("svg",{target:"ea4tfvq2"})("width:",s.Z.spinnerSize,"px;height:",s.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",p.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),x={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},w=(0,a.Z)("circle",{target:"ea4tfvq1"})(x,";stroke:",p.D.gray[300],";"),A=(0,a.Z)("path",{target:"ea4tfvq0"})(x,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",g,";");function C({className:j,...f},u){return(0,t.createElement)(n,{className:d()("components-spinner",j),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...f,ref:u},(0,t.createElement)(w,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,t.createElement)(A,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const E=(0,t.forwardRef)(C)},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.3.1_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(_,r,e)=>{"use strict";e.d(r,{Z:()=>p});var t=e("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.3.1_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.3.1_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const d="36px",a="12px",i={controlSurfaceColor:o.D.white,controlTextActiveColor:o.D.theme.accent,controlPaddingX:a,controlPaddingXLarge:`calc(${a} * 1.3334)`,controlPaddingXSmall:`calc(${a} / 1.3334)`,controlBackgroundColor:o.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${o.D.theme.accent}`,controlDestructiveBorderColor:o.D.alert.red,controlHeight:d,controlHeightXSmall:`calc( ${d} * 0.6 )`,controlHeightSmall:`calc( ${d} * 0.8 )`,controlHeightLarge:`calc( ${d} * 1.2 )`,controlHeightXLarge:`calc( ${d} * 1.4 )`},s={toggleGroupControlBackgroundColor:i.controlBackgroundColor,toggleGroupControlBorderColor:o.D.ui.border,toggleGroupControlBackdropBackgroundColor:i.controlSurfaceColor,toggleGroupControlBackdropBorderColor:o.D.ui.border,toggleGroupControlButtonColorActive:i.controlBackgroundColor},p=Object.assign({},i,s,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.4",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,t.D)(2)}`,cardPaddingSmall:`${(0,t.D)(4)}`,cardPaddingMedium:`${(0,t.D)(4)} ${(0,t.D)(6)}`,cardPaddingLarge:`${(0,t.D)(6)} ${(0,t.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:o.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:o.D.white,surfaceColor:o.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+compose@6.32.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js":(_,r,e)=>{"use strict";e.d(r,{Z:()=>o});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function o(d,a){const i=(0,t.useRef)();return(0,t.useCallback)(s=>{s?i.current=d(s):i.current&&i.current()},a)}},"../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(_,r,e)=>{"use strict";e.d(r,{Z:()=>d});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function o({icon:a,size:i=24,...s},p){return(0,t.cloneElement)(a,{width:i,height:i,...s,ref:p})}const d=(0,t.forwardRef)(o)},"../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(_,r,e)=>{"use strict";e.d(r,{Z:()=>a});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.53.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const a=(0,t.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(o.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../components/components/button/index.tsx":(_,r,e)=>{"use strict";e.d(r,{Z:()=>u});var t=e("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.3.1_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.3.1_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.3.1_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+i18n@4.55.0/node_modules/@wordpress/i18n/build-module/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),p=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),v=e.n(p),g=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),x=e.n(n),w=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),A={};A.insert="head",A.singleton=!1;var C=x()(w.Z,A);const b=w.Z.locals||{};var E=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const j=a.__,f=(0,g.forwardRef)((m,c)=>{var z,V;const{children:l,variant:y="primary",size:h="normal",weight:S="bold",icon:O,iconSize:B,disabled:R,isDestructive:I,isLoading:k,isExternalLink:D,className:T,text:P,fullWidth:M,...L}=m,X=v()(b.button,T,{[b.normal]:h==="normal",[b.small]:h==="small",[b.icon]:!!O,[b.loading]:k,[b.regular]:S==="regular",[b["full-width"]]:M,[b["is-icon-button"]]:!!O&&!l});L.ref=c;const Z=h==="normal"?20:16,K=D&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(i.Z,{size:Z,icon:s.Z,className:b["external-icon"]}),(0,E.jsx)(t.Z,{as:"span",children:j("(opens in a new tab)","jetpack")})]}),G=D?"_blank":void 0,U=(l==null?void 0:l[0])&&l[0]!==null&&((V=(z=l==null?void 0:l[0])==null?void 0:z.props)==null?void 0:V.className)!=="components-tooltip";return(0,E.jsxs)(o.ZP,{target:G,variant:y,className:v()(X,{"has-text":!!O&&U}),icon:D?void 0:O,iconSize:B,disabled:R,"aria-disabled":R,isDestructive:I,text:P,...L,children:[k&&(0,E.jsx)(d.ZP,{}),(0,E.jsx)("span",{children:l}),K]})});f.displayName="Button";const u=f;try{f.displayName="Button",f.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:f.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(m){}},"../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx":(_,r,e)=>{"use strict";e.d(r,{Z:()=>C});var t=e("../components/components/button/index.tsx"),o=e("../../../node_modules/.pnpm/@wordpress+compose@6.32.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-copy-to-clipboard/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+i18n@4.55.0/node_modules/@wordpress/i18n/build-module/index.js"),a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(i),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/clipboard-button-input/style.module.scss"),v={};v.insert="head",v.singleton=!1;var g=s()(p.Z,v);const n=p.Z.locals||{};var x=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const w=d.__,C=({text:b,value:E,onCopy:j,resetTime:f=3e3})=>{const u=O=>{O.currentTarget.select()},m=w("Copied!","jetpack-videopress-pkg"),c=w("Copy","jetpack-videopress-pkg"),[l,y]=(0,a.useState)(!1),h=E||b,S=(0,o.Z)(h,()=>{const O=setTimeout(()=>{y(!1),clearTimeout(O)},f);y(!0),j==null||j()});return(0,x.jsxs)("div",{className:n.wrapper,children:[(0,x.jsx)("input",{type:"text",value:b||E,onClick:u,readOnly:!0}),(0,x.jsx)(t.Z,{weight:"regular",variant:"secondary",size:"small",ref:S,children:l?m:c})]})}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(_,r,e)=>{"use strict";e.d(r,{Z:()=>s});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(d),i=a()(o());i.push([_.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),i.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const s=i},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/clipboard-button-input/style.module.scss":(_,r,e)=>{"use strict";e.d(r,{Z:()=>s});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(d),i=a()(o());i.push([_.id,".Bjq3YC0ysP_tCAFtxVMj{display:flex;flex-direction:row;height:36px;border:1px solid var(--jp-gray-40);border-radius:calc(var(--jp-border-radius)/2);padding:calc(var(--spacing-base)*.5);padding-left:calc(var(--spacing-base)*1.5);background-color:var(--jp-white);box-sizing:border-box}.Bjq3YC0ysP_tCAFtxVMj:focus-within{box-shadow:0 0 0 1px var(--jp-black) inset}.Bjq3YC0ysP_tCAFtxVMj>input{all:unset;width:100%;border:0;font-size:var(--font-body-small);color:var(--jp-gray-80);outline:none;text-overflow:ellipsis;cursor:default}.Bjq3YC0ysP_tCAFtxVMj>input:focus{outline:none;box-shadow:none;border:none}.Bjq3YC0ysP_tCAFtxVMj .kRmJN_soKZTs4UmGPd9M{display:inline-flex}",""]),i.locals={wrapper:"Bjq3YC0ysP_tCAFtxVMj","button-wrapper":"kRmJN_soKZTs4UmGPd9M"};const s=i},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":_=>{function r(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=()=>[],r.resolve=r,r.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",_.exports=r}}]);})();
