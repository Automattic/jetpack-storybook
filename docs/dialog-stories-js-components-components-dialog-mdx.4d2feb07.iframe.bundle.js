(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7249,6501],{"../../../node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/extends.js":(m,l,n)=>{"use strict";n.d(l,{Z:()=>r});function r(){return r=Object.assign?Object.assign.bind():function(e){for(var c=1;c<arguments.length;c++){var o=arguments[c];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},r.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(m,l,n)=>{"use strict";var r;n.d(l,{L:()=>t,j:()=>i});var e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=function(a){return a()},o=(r||(r=n.t(e,2)))["useInsertionEffect"]?(r||(r=n.t(e,2)))["useInsertionEffect"]:!1,t=o||c,i=o||e.useLayoutEffect},"../components/components/dialog/stories/js-components.components.dialog.mdx":(m,l,n)=>{"use strict";n.r(l),n.d(l,{default:()=>a});var r=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=n("../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.2.67_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),o=n("../../../node_modules/.pnpm/@storybook+blocks@8.0.4_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),t=n("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js"),i=n("../components/components/dialog/stories/js-components.components.dialog.stories.js");function d(_){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),..._.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.h_,{of:i}),`
`,(0,e.jsx)(s.h1,{id:"dialog",children:"Dialog"}),`
`,(0,e.jsxs)(s.p,{children:["Render a two-sections layout simple composition, built based on the primary ",(0,e.jsx)("a",{href:"?path=/docs/js-packages-components-layout--default",children:"Layout component"}),"."]}),`
`,(0,e.jsx)(o.Hw,{language:"jsx",code:t.C`
  import Dialog from '@automattic/jetpack-components';
  // ...

  <Dialog
    primary={ <PrimaryComponent /> }
    secondary={ <SecondaryComponent /> }
    isTwoSections={ true }
  />
  `}),`
`,(0,e.jsx)(o.oG,{of:i.Readme}),`
`,(0,e.jsx)(s.p,{children:"The cols number for each section depends on the viewport width. The following table shows how they are defined:"}),`
`,(0,e.jsxs)(s.table,{children:[(0,e.jsx)(s.thead,{children:(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.th,{children:"\xA0"}),(0,e.jsx)(s.th,{children:"Small (sm)"}),(0,e.jsx)(s.th,{children:"Medium (md)"}),(0,e.jsx)(s.th,{children:"Large (lg)"})]})}),(0,e.jsxs)(s.tbody,{children:[(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:"primary"}),(0,e.jsx)(s.td,{children:"4"}),(0,e.jsx)(s.td,{children:"5"}),(0,e.jsx)(s.td,{children:"7"})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:"secondary"}),(0,e.jsx)(s.td,{children:"4"}),(0,e.jsx)(s.td,{children:"3"}),(0,e.jsx)(s.td,{children:"5"})]})]})]}),`
`,(0,e.jsxs)(s.p,{children:["Finally, when the Dialog is defined as not a two-sections layout (",(0,e.jsx)("a",{href:"#istwosections",children:"isTwoSections property"}),"), the secondary section won't show in Mobile (sm breakpoint)."]}),`
`,(0,e.jsx)(s.h2,{id:"api",children:"API"}),`
`,(0,e.jsx)(s.p,{children:"The components accepts the following properties:"}),`
`,(0,e.jsx)(s.h3,{id:"primary",children:"primary"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:["Type: ",(0,e.jsx)(s.code,{children:"React.ReactNode"}),", ",(0,e.jsx)(s.code,{children:"string"}),"."]}),`
`]}),`
`,(0,e.jsx)(s.p,{children:"Primary-section content."}),`
`,(0,e.jsx)(s.h3,{id:"secondary",children:"secondary"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:["Type: ",(0,e.jsx)(s.code,{children:"React.ReactNode"}),", ",(0,e.jsx)(s.code,{children:"string"}),"."]}),`
`,(0,e.jsx)(s.li,{children:"Optional."}),`
`]}),`
`,(0,e.jsx)(s.p,{children:"Primary-section content."}),`
`,(0,e.jsx)(s.h3,{id:"istwosections",children:"isTwoSections"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:["Type: ",(0,e.jsx)(s.code,{children:"boolean"}),"."]}),`
`,(0,e.jsx)(s.li,{children:"Optional."}),`
`,(0,e.jsxs)(s.li,{children:["Default: ",(0,e.jsx)(s.code,{children:"false"})]}),`
`]}),`
`,(0,e.jsx)(s.p,{children:"It handles two sections layout:"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsx)(s.li,{children:"Add card styles to the main wrapper when it is not a two-sections layout."}),`
`,(0,e.jsx)(s.li,{children:"When it's false, the secondary section won't show in Mobile."}),`
`]})]})}function a(_={}){const{wrapper:s}={...(0,c.a)(),..._.components};return s?(0,e.jsx)(s,{..._,children:(0,e.jsx)(d,{..._})}):d(_)}},"../components/components/dialog/stories/js-components.components.dialog.stories.js":(m,l,n)=>{var u,h,j;"use strict";n.r(l),n.d(l,{Readme:()=>p,__namedExportsOrder:()=>f,default:()=>s});var r=n("../components/components/dialog/index.tsx"),e=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=n.n(e),o=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss"),t={};t.insert="head",t.singleton=!1;var i=c()(o.Z,t);const d=o.Z.locals||{};var a=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const _=({isTwoSections:x})=>(0,a.jsx)(r.Z,{primary:(0,a.jsxs)("div",{className:d.section,children:[(0,a.jsx)("div",{children:"Primary"}),(0,a.jsx)("strong",{children:"4 | 5 | 7"})]}),secondary:(0,a.jsxs)("div",{className:d.section,children:[(0,a.jsx)("div",{children:"Secondary"}),(0,a.jsx)("strong",{children:"4 | 3 | 5"}),(0,a.jsxs)("div",{children:["isTwoSections: ",(0,a.jsx)("strong",{children:x?"yes":"no"})]})]}),isTwoSections:x}),s={title:"JS Packages/Components/Dialog",component:r.Z},p={render:_.bind({}),name:"Readme",args:{isTwoSections:!0}};p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Readme',
  args: {
    isTwoSections: true
  }
}`,...(j=(h=p.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const f=["Readme"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(m,l)=>{var n,r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var e={}.hasOwnProperty,c="[native code]";function o(){for(var t=[],i=0;i<arguments.length;i++){var d=arguments[i];if(d){var a=typeof d;if(a==="string"||a==="number")t.push(d);else if(Array.isArray(d)){if(d.length){var _=o.apply(null,d);_&&t.push(_)}}else if(a==="object"){if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]")){t.push(d.toString());continue}for(var s in d)e.call(d,s)&&d[s]&&t.push(s)}}}return t.join(" ")}m.exports?(o.default=o,m.exports=o):(n=[],r=function(){return o}.apply(l,n),r!==void 0&&(m.exports=r))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss":(m,l,n)=>{"use strict";n.d(l,{Z:()=>i});var r=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=n.n(r),c=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),o=n.n(c),t=o()(e());t.push([m.id,".RTMIETP7fe2d9xWFfYKF{display:flex;padding:calc(var(--spacing-base)*6) 0;border:1px dotted var(--jp-green-60);box-sizing:border-box;align-items:center;color:var(--jp-white);flex-wrap:nowrap;flex-direction:column;justify-content:space-between;height:calc(var(--spacing-base)*20);flex-grow:2;background:repeating-linear-gradient(-45deg, var(--jp-green-50), var(--jp-green-50) 20px, var(--jp-green-60) 20px, var(--jp-green-60) 40px)}",""]),t.locals={section:"RTMIETP7fe2d9xWFfYKF"};const i=t}}]);})();
