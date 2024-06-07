(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7779,5850],{"../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.1_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(m,t,e)=>{"use strict";e.d(t,{Z:()=>c,a:()=>r});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const s={},i=d.createContext(s);function r(n){const a=d.useContext(i);return d.useMemo(function(){return typeof n=="function"?n(a):{...a,...n}},[a,n])}function c(n){let a;return n.disableParentContext?a=typeof n.components=="function"?n.components(s):n.components||s:a=r(n.components),d.createElement(i.Provider,{value:a},n.children)}},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.mdx":(m,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>p});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i=e("../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.1_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),r=e("../../../node_modules/.pnpm/@storybook+blocks@8.0.9_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@storybook/blocks/dist/index.mjs"),c=e("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),n=e("../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx");function a(l){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.a)(),...l.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h_,{of:n}),`
`,(0,s.jsx)(o.h1,{id:"clipboardbuttoninput",children:"ClipboardButtonInput"}),`
`,(0,s.jsx)(o.p,{children:"ClipboardButtonInput is a React component used to display a text input field containing a button for copying the value of the input to a user's clipboard."}),`
`,(0,s.jsx)(r.Xz,{sourceState:"shown",of:n._default}),`
`,(0,s.jsx)(o.h2,{id:"api",children:"API"}),`
`,(0,s.jsx)(o.h3,{id:"text",children:"text"}),`
`,(0,s.jsxs)(o.ul,{children:[`
`,(0,s.jsxs)(o.li,{children:["type: ",(0,s.jsx)(o.code,{children:"string"})]}),`
`]}),`
`,(0,s.jsx)(o.p,{children:`The text to show in the input element.
And, in case the value property is not defined, it represents the value be copied when clicking the copy button,`}),`
`,(0,s.jsx)(o.h3,{id:"value",children:"value"}),`
`,(0,s.jsxs)(o.ul,{children:[`
`,(0,s.jsxs)(o.li,{children:["type: ",(0,s.jsx)(o.code,{children:"string"})]}),`
`]}),`
`,(0,s.jsx)(o.p,{children:"The value to be copied when clicking the copy button. Optional."}),`
`,(0,s.jsx)(o.h3,{id:"oncopy",children:"onCopy"}),`
`,(0,s.jsxs)(o.ul,{children:[`
`,(0,s.jsxs)(o.li,{children:["type: ",(0,s.jsx)(o.code,{children:"function"})]}),`
`,(0,s.jsxs)(o.li,{children:["default: ",(0,s.jsx)(o.code,{children:"noop"})]}),`
`]}),`
`,(0,s.jsx)(o.p,{children:"Callback to be invoked when the text is successfully copied."}),`
`,(0,s.jsx)(o.h3,{id:"resettime",children:"resetTime"}),`
`,(0,s.jsxs)(o.ul,{children:[`
`,(0,s.jsxs)(o.li,{children:["type: ",(0,s.jsx)(o.code,{children:"number"})]}),`
`,(0,s.jsxs)(o.li,{children:["default: ",(0,s.jsx)(o.code,{children:"3000"})]}),`
`]}),`
`,(0,s.jsx)(o.p,{children:"Timer in miliseconds to reset the copy button to its initial state."})]})}function p(l={}){const{wrapper:o}={...(0,i.a)(),...l.components};return o?(0,s.jsx)(o,{...l,children:(0,s.jsx)(a,{...l})}):a(l)}},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx":(m,t,e)=>{var p,l,o;"use strict";e.r(t),e.d(t,{__namedExportsOrder:()=>a,_default:()=>n,default:()=>r});var d=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.0.9/node_modules/@storybook/addon-actions/dist/index.mjs"),s=e("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r={title:"Packages/VideoPress/Clipboard Button Input",component:s.Z},n=(j=>(0,i.jsx)(s.Z,{...j})).bind({});n.args={text:"Lorem Ipsum...",value:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",onCopy:(0,d.aD)("onCopy"),resetTime:3e3},n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <ClipboardButtonInput {...args} />;
}`,...(o=(l=n.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const a=["_default"]},"../components/components/button/index.tsx":(m,t,e)=>{"use strict";e.d(t,{Z:()=>k});var d=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),a=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),p=e.n(a),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=e.n(o),v=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),y={};y.insert="head",y.singleton=!1;var C=j()(v.Z,y);const _=v.Z.locals||{};var x=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=r.__,E=(0,l.forwardRef)((A,O)=>{var T,B;const{children:u,variant:w="primary",size:g="normal",weight:P="bold",icon:b,iconSize:I,disabled:D,isDestructive:V,isLoading:M,isExternalLink:f,className:L,text:S,fullWidth:R,...z}=A,X=p()(_.button,L,{[_.normal]:g==="normal",[_.small]:g==="small",[_.icon]:!!b,[_.loading]:M,[_.regular]:P==="regular",[_["full-width"]]:R,[_["is-icon-button"]]:!!b&&!u});z.ref=O;const Z=g==="normal"?20:16,G=f&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c.Z,{size:Z,icon:n.Z,className:_["external-icon"]}),(0,x.jsx)(d.Z,{as:"span",children:h("(opens in a new tab)","jetpack")})]}),K=f?"_blank":void 0,U=(u==null?void 0:u[0])&&u[0]!==null&&((B=(T=u==null?void 0:u[0])==null?void 0:T.props)==null?void 0:B.className)!=="components-tooltip";return(0,x.jsxs)(s.ZP,{target:K,variant:w,className:p()(X,{"has-text":!!b&&U}),icon:f?void 0:b,iconSize:I,disabled:D,"aria-disabled":D,isDestructive:V,text:S,...z,children:[M&&(0,x.jsx)(i.ZP,{}),(0,x.jsx)("span",{children:u}),G]})});E.displayName="Button";const k=E;try{E.displayName="Button",E.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:E.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(A){}},"../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx":(m,t,e)=>{"use strict";e.d(t,{Z:()=>C});var d=e("../components/components/button/index.tsx"),s=e("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-copy-to-clipboard/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(c),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/clipboard-button-input/style.module.scss"),p={};p.insert="head",p.singleton=!1;var l=n()(a.Z,p);const o=a.Z.locals||{};var j=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const v=i.__,C=({text:_,value:x,onCopy:h,resetTime:E=3e3})=>{const k=b=>{b.currentTarget.select()},A=v("Copied!","jetpack-videopress-pkg"),O=v("Copy","jetpack-videopress-pkg"),[u,w]=(0,r.useState)(!1),g=x||_,P=(0,s.Z)(g,()=>{const b=setTimeout(()=>{w(!1),clearTimeout(b)},E);w(!0),h==null||h()});return(0,j.jsxs)("div",{className:o.wrapper,children:[(0,j.jsx)("input",{type:"text",value:_||x,onClick:k,readOnly:!0}),(0,j.jsx)(d.Z,{weight:"regular",variant:"secondary",size:"small",ref:P,children:u?A:O})]})}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(m,t,e)=>{"use strict";e.d(t,{Z:()=>n});var d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(d),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(i),c=r()(s());c.push([m.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),c.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const n=c},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/clipboard-button-input/style.module.scss":(m,t,e)=>{"use strict";e.d(t,{Z:()=>n});var d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(d),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(i),c=r()(s());c.push([m.id,".Bjq3YC0ysP_tCAFtxVMj{display:flex;flex-direction:row;height:36px;border:1px solid var(--jp-gray-40);border-radius:calc(var(--jp-border-radius)/2);padding:calc(var(--spacing-base)*.5);padding-left:calc(var(--spacing-base)*1.5);background-color:var(--jp-white);box-sizing:border-box}.Bjq3YC0ysP_tCAFtxVMj:focus-within{box-shadow:0 0 0 1px var(--jp-black) inset}.Bjq3YC0ysP_tCAFtxVMj>input{all:unset;width:100%;border:0;font-size:var(--font-body-small);color:var(--jp-gray-80);outline:none;text-overflow:ellipsis;cursor:default}.Bjq3YC0ysP_tCAFtxVMj>input:focus{outline:none;box-shadow:none;border:none}.Bjq3YC0ysP_tCAFtxVMj .kRmJN_soKZTs4UmGPd9M{display:inline-flex}",""]),c.locals={wrapper:"Bjq3YC0ysP_tCAFtxVMj","button-wrapper":"kRmJN_soKZTs4UmGPd9M"};const n=c},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":m=>{function t(e){var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}t.keys=()=>[],t.resolve=t,t.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",m.exports=t}}]);})();