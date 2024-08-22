(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7779,5850],{"../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(u,o,e)=>{"use strict";e.d(o,{Z:()=>i,a:()=>a});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const s={},c=d.createContext(s);function a(t){const p=d.useContext(c);return d.useMemo(function(){return typeof t=="function"?t(p):{...p,...t}},[p,t])}function i(t){let p;return t.disableParentContext?p=typeof t.components=="function"?t.components(s):t.components||s:p=a(t.components),d.createElement(c.Provider,{value:p},t.children)}},"../../../node_modules/.pnpm/@storybook+addon-actions@8.2.9_storybook@8.2.9/node_modules/@storybook/addon-actions/dist/index.mjs":(u,o,e)=>{"use strict";e.d(o,{aD:()=>h});var d=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),s=e("storybook/internal/preview-api"),c=e("@storybook/global"),a=e("storybook/internal/preview-errors"),i="actions",t="storybook/actions",p=`${t}/panel`,E=`${t}/action-event`,b=`${t}/action-clear`,n="$___storybook.isCyclic",x={depth:10,clearOnStoryChange:!0,limit:50},w=(l={})=>{Object.assign(x,l)},f=(l,_)=>{let r=Object.getPrototypeOf(l);return!r||_(r)?r:f(r,_)},v=l=>!!(typeof l=="object"&&l&&f(l,_=>/^Synthetic(?:Base)?Event$/.test(_.constructor.name))&&typeof l.persist=="function"),j=l=>{if(v(l)){let _=Object.create(l.constructor.prototype,Object.getOwnPropertyDescriptors(l));_.persist();let r=Object.getOwnPropertyDescriptor(_,"view"),m=r==null?void 0:r.value;return typeof m=="object"&&(m==null?void 0:m.constructor.name)==="Window"&&Object.defineProperty(_,"view",{...r,value:Object.create(m.constructor.prototype)}),_}return l},O=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,d.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function h(l,_={}){let r={...x,..._},m=function(...g){var D,T;if(_.implicit){let S=(D="__STORYBOOK_PREVIEW__"in c.global?c.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:D.storyRenders.find(k=>k.phase==="playing"||k.phase==="rendering");if(S){let k=!((T=window==null?void 0:window.FEATURES)!=null&&T.disallowImplicitActionsInRenderV8),M=new a.ImplicitActionsDuringRendering({phase:S.phase,name:l,deprecated:k});if(k)console.warn(M);else throw M}}let y=s.addons.getChannel(),A=O(),P=5,R=g.map(j),B=g.length>1?R:R[0],I={id:A,count:0,data:{name:l,args:B},options:{...r,maxDepth:P+(r.depth||3),allowFunction:r.allowFunction||!1}};y.emit(E,I)};return m.isAction=!0,m.implicit=_.implicit,m}var C=(...l)=>{let _=x,r=l;r.length===1&&Array.isArray(r[0])&&([r]=r),r.length!==1&&typeof r[r.length-1]!="string"&&(_={...x,...r.pop()});let m=r[0];(r.length!==1||typeof m=="string")&&(m={},r.forEach(y=>{m[y]=y}));let g={};return Object.keys(m).forEach(y=>{g[y]=h(m[y],_)}),g}},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.mdx":(u,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>E});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),c=e("../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),a=e("../../../node_modules/.pnpm/@storybook+blocks@8.2.9_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.2.9/node_modules/@storybook/blocks/dist/index.mjs"),i=e("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),t=e("../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx");function p(b){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,c.a)(),...b.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h_,{of:t}),`
`,(0,s.jsx)(n.h1,{id:"clipboardbuttoninput",children:"ClipboardButtonInput"}),`
`,(0,s.jsx)(n.p,{children:"ClipboardButtonInput is a React component used to display a text input field containing a button for copying the value of the input to a user's clipboard."}),`
`,(0,s.jsx)(a.Xz,{sourceState:"shown",of:t._default}),`
`,(0,s.jsx)(n.h2,{id:"api",children:"API"}),`
`,(0,s.jsx)(n.h3,{id:"text",children:"text"}),`
`,(0,s.jsxs)(n.ul,{children:[`
`,(0,s.jsxs)(n.li,{children:["type: ",(0,s.jsx)(n.code,{children:"string"})]}),`
`]}),`
`,(0,s.jsx)(n.p,{children:`The text to show in the input element.
And, in case the value property is not defined, it represents the value be copied when clicking the copy button,`}),`
`,(0,s.jsx)(n.h3,{id:"value",children:"value"}),`
`,(0,s.jsxs)(n.ul,{children:[`
`,(0,s.jsxs)(n.li,{children:["type: ",(0,s.jsx)(n.code,{children:"string"})]}),`
`]}),`
`,(0,s.jsx)(n.p,{children:"The value to be copied when clicking the copy button. Optional."}),`
`,(0,s.jsx)(n.h3,{id:"oncopy",children:"onCopy"}),`
`,(0,s.jsxs)(n.ul,{children:[`
`,(0,s.jsxs)(n.li,{children:["type: ",(0,s.jsx)(n.code,{children:"function"})]}),`
`,(0,s.jsxs)(n.li,{children:["default: ",(0,s.jsx)(n.code,{children:"noop"})]}),`
`]}),`
`,(0,s.jsx)(n.p,{children:"Callback to be invoked when the text is successfully copied."}),`
`,(0,s.jsx)(n.h3,{id:"resettime",children:"resetTime"}),`
`,(0,s.jsxs)(n.ul,{children:[`
`,(0,s.jsxs)(n.li,{children:["type: ",(0,s.jsx)(n.code,{children:"number"})]}),`
`,(0,s.jsxs)(n.li,{children:["default: ",(0,s.jsx)(n.code,{children:"3000"})]}),`
`]}),`
`,(0,s.jsx)(n.p,{children:"Timer in miliseconds to reset the copy button to its initial state."})]})}function E(b={}){const{wrapper:n}={...(0,c.a)(),...b.components};return n?(0,s.jsx)(n,{...b,children:(0,s.jsx)(p,{...b})}):p(b)}},"../../../node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/components sync recursive":u=>{function o(e){var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/components sync recursive",u.exports=o},"../../../node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/theming sync recursive":u=>{function o(e){var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/theming sync recursive",u.exports=o},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx":(u,o,e)=>{var E,b,n;"use strict";e.r(o),e.d(o,{__namedExportsOrder:()=>p,_default:()=>t,default:()=>a});var d=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.2.9_storybook@8.2.9/node_modules/@storybook/addon-actions/dist/index.mjs"),s=e("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a={title:"Packages/VideoPress/Clipboard Button Input",component:s.Z},t=(x=>(0,c.jsx)(s.Z,{...x})).bind({});t.args={text:"Lorem Ipsum...",value:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",onCopy:(0,d.aD)("onCopy"),resetTime:3e3};const p=["_default"];t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  return <ClipboardButtonInput {...args} />;
}`,...(n=(b=t.parameters)==null?void 0:b.docs)==null?void 0:n.source}}}},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(u,o,e)=>{"use strict";e.d(o,{ZP:()=>O});var d=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),s=e("../../../node_modules/.pnpm/@emotion+styled@11.13.0_@emotion+react@11.13.0_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),c=e("../../../node_modules/.pnpm/@emotion+react@11.13.0_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),i=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function t(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const p=c.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,E=(0,s.Z)("svg",{target:"ea4tfvq2"})("width:",a.Z.spinnerSize,"px;height:",a.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",i.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),b={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},n=(0,s.Z)("circle",{target:"ea4tfvq1"})(b,";stroke:",i.D.gray[300],";"),x=(0,s.Z)("path",{target:"ea4tfvq0"})(b,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",p,";");var w=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function v({className:h,...C},l){return(0,f.jsxs)(E,{className:(0,d.Z)("components-spinner",h),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...C,ref:l,children:[(0,f.jsx)(n,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,f.jsx)(x,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const O=(0,w.forwardRef)(v)},"../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js":(u,o,e)=>{"use strict";e.d(o,{Z:()=>s});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function s(c,a){const i=(0,d.useRef)();return(0,d.useCallback)(t=>{t?i.current=c(t):i.current&&i.current()},a)}},"../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(u,o,e)=>{"use strict";e.d(o,{Z:()=>c});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function s({icon:a,size:i=24,...t},p){return(0,d.cloneElement)(a,{width:i,height:i,...t,ref:p})}const c=(0,d.forwardRef)(s)},"../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(u,o,e)=>{"use strict";e.d(o,{Z:()=>a});var d=e("../../../node_modules/.pnpm/@wordpress+primitives@4.5.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a=(0,s.jsx)(d.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(d.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../components/components/button/index.tsx":(u,o,e)=>{"use strict";e.d(o,{Z:()=>C});var d=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+i18n@5.5.0/node_modules/@wordpress/i18n/build-module/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),p=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),E=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),b=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(b),x=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),w={};w.insert="head",w.singleton=!1;var f=n()(x.Z,w);const v=x.Z.locals||{};var j=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const O=a.__,h=(0,E.forwardRef)((l,_)=>{var L,V;const{children:r,variant:m="primary",size:g="normal",weight:y="bold",icon:A,iconSize:P,disabled:R,isDestructive:B,isLoading:I,isExternalLink:D,className:T,text:S,fullWidth:k,...M}=l,z=(0,p.Z)(v.button,T,{[v.normal]:g==="normal",[v.small]:g==="small",[v.icon]:!!A,[v.loading]:I,[v.regular]:y==="regular",[v["full-width"]]:k,[v["is-icon-button"]]:!!A&&!r});M.ref=_;const Z=g==="normal"?20:16,U=D&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i.Z,{size:Z,icon:t.Z,className:v["external-icon"]}),(0,j.jsx)(d.Z,{as:"span",children:O("(opens in a new tab)","jetpack")})]}),X=D?"_blank":void 0,K=(r==null?void 0:r[0])&&r[0]!==null&&((V=(L=r==null?void 0:r[0])==null?void 0:L.props)==null?void 0:V.className)!=="components-tooltip";return(0,j.jsxs)(s.ZP,{target:X,variant:m,className:(0,p.Z)(z,{"has-text":!!A&&K}),icon:D?void 0:A,iconSize:P,disabled:R,"aria-disabled":R,isDestructive:B,text:S,...M,children:[I&&(0,j.jsx)(c.ZP,{}),(0,j.jsx)("span",{children:r}),U]})});h.displayName="Button";const C=h;try{h.displayName="Button",h.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:h.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(l){}},"../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx":(u,o,e)=>{"use strict";e.d(o,{Z:()=>v});var d=e("../components/components/button/index.tsx"),s=e("../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-copy-to-clipboard/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+i18n@5.5.0/node_modules/@wordpress/i18n/build-module/index.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(i),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/clipboard-button-input/style.module.scss"),E={};E.insert="head",E.singleton=!1;var b=t()(p.Z,E);const n=p.Z.locals||{};var x=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const w=c.__,v=({text:j,value:O,onCopy:h,resetTime:C=3e3})=>{const l=P=>{P.currentTarget.select()},_=w("Copied!","jetpack-videopress-pkg"),r=w("Copy","jetpack-videopress-pkg"),[m,g]=(0,a.useState)(!1),y=O||j,A=(0,s.Z)(y,()=>{const P=setTimeout(()=>{g(!1),clearTimeout(P)},C);g(!0),h==null||h()});return(0,x.jsxs)("div",{className:n.wrapper,children:[(0,x.jsx)("input",{type:"text",value:j||O,onClick:l,readOnly:!0}),(0,x.jsx)(d.Z,{weight:"regular",variant:"secondary",size:"small",ref:A,children:m?_:r})]})}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(u,o,e)=>{"use strict";e.d(o,{Z:()=>t});var d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(d),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(c),i=a()(s());i.push([u.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),i.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const t=i},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/clipboard-button-input/style.module.scss":(u,o,e)=>{"use strict";e.d(o,{Z:()=>t});var d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(d),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(c),i=a()(s());i.push([u.id,".Bjq3YC0ysP_tCAFtxVMj{display:flex;flex-direction:row;height:36px;border:1px solid var(--jp-gray-40);border-radius:calc(var(--jp-border-radius)/2);padding:calc(var(--spacing-base)*.5);padding-left:calc(var(--spacing-base)*1.5);background-color:var(--jp-white);box-sizing:border-box}.Bjq3YC0ysP_tCAFtxVMj:focus-within{box-shadow:0 0 0 1px var(--jp-black) inset}.Bjq3YC0ysP_tCAFtxVMj>input{all:unset;width:100%;border:0;font-size:var(--font-body-small);color:var(--jp-gray-80);outline:none;text-overflow:ellipsis;cursor:default}.Bjq3YC0ysP_tCAFtxVMj>input:focus{outline:none;box-shadow:none;border:none}.Bjq3YC0ysP_tCAFtxVMj .kRmJN_soKZTs4UmGPd9M{display:inline-flex}",""]),i.locals={wrapper:"Bjq3YC0ysP_tCAFtxVMj","button-wrapper":"kRmJN_soKZTs4UmGPd9M"};const t=i},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":u=>{function o(e){var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",u.exports=o}}]);})();