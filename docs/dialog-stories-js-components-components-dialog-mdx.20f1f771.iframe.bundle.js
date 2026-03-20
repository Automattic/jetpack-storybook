"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1900,5274],{"../components/components/dialog/stories/js-components.components.dialog.mdx"(j,_,n){n.r(_),n.d(_,{default:()=>c});var i=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),u=n("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.28_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),o=n("../../../node_modules/.pnpm/@storybook+addon-docs@10.3.1_@types+react@18.3.28_storybook@10.3.1_@testing-library+dom_f723e8232cb2bbabbde2003e64dfd316/node_modules/@storybook/addon-docs/dist/blocks.js"),d=n("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js"),r=n("../components/components/dialog/stories/js-components.components.dialog.stories.js");function t(m){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,u.R)(),...m.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.W8,{of:r}),`
`,(0,e.jsx)(s.h1,{id:"dialog",children:"Dialog"}),`
`,(0,e.jsxs)(s.p,{children:["Render a two-sections layout simple composition, built based on the primary ",(0,e.jsx)("a",{href:"?path=/docs/js-packages-components-layout--default",children:"Layout component"}),"."]}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:(0,d.A)`
import Dialog from '@automattic/jetpack-components';
// ...

<Dialog
  primary={ <PrimaryComponent /> }
  secondary={ <SecondaryComponent /> }
  isTwoSections={ true }
/>
`}),`
`,(0,e.jsx)(o.gG,{of:r.Readme}),`
`,(0,e.jsx)(s.p,{children:"The cols number for each section depends on the viewport width. The following table shows how they are defined:"}),`
`,(0,e.jsxs)(s.table,{children:[(0,e.jsx)(s.thead,{children:(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.th,{children:"\xA0"}),(0,e.jsx)(s.th,{children:"Small (sm)"}),(0,e.jsx)(s.th,{children:"Medium (md)"}),(0,e.jsx)(s.th,{children:"Large (lg)"})]})}),(0,e.jsxs)(s.tbody,{children:[(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:"primary"}),(0,e.jsx)(s.td,{children:"4"}),(0,e.jsx)(s.td,{children:"5"}),(0,e.jsx)(s.td,{children:"7"})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:"secondary"}),(0,e.jsx)(s.td,{children:"4"}),(0,e.jsx)(s.td,{children:"3"}),(0,e.jsx)(s.td,{children:"5"})]})]})]}),`
`,(0,e.jsxs)(s.p,{children:["Finally, when the Dialog is defined as not a two-sections layout (",(0,e.jsx)("a",{href:"#istwosections",children:"isTwoSections property"}),"), the secondary section won't show in Mobile (sm breakpoint)."]}),`
`,(0,e.jsx)(s.h2,{id:"api",children:"API"}),`
`,(0,e.jsx)(s.p,{children:"The components accepts the following properties:"}),`
`,(0,e.jsx)(s.h3,{id:"primary",children:"primary"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:["Type: ",(0,e.jsx)(s.code,{children:"ReactNode"}),", ",(0,e.jsx)(s.code,{children:"string"}),"."]}),`
`]}),`
`,(0,e.jsx)(s.p,{children:"Primary-section content."}),`
`,(0,e.jsx)(s.h3,{id:"secondary",children:"secondary"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:["Type: ",(0,e.jsx)(s.code,{children:"ReactNode"}),", ",(0,e.jsx)(s.code,{children:"string"}),"."]}),`
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
`]})]})}function c(m={}){const{wrapper:s}={...(0,u.R)(),...m.components};return s?(0,e.jsx)(s,{...m,children:(0,e.jsx)(t,{...m})}):t(m)}},"../components/components/dialog/stories/js-components.components.dialog.stories.js"(j,_,n){n.r(_),n.d(_,{Readme:()=>h,__namedExportsOrder:()=>l,default:()=>s});var i=n("../components/components/dialog/index.tsx"),e=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=n.n(e),o=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../components/components/dialog/stories/style.module.scss"),d={};d.insert="head",d.singleton=!1;var r=u()(o.A,d);const t=o.A.locals||{};var c=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=({isTwoSections:a})=>(0,c.jsx)(i.A,{primary:(0,c.jsxs)("div",{className:t.section,children:[(0,c.jsx)("div",{children:"Primary"}),(0,c.jsx)("strong",{children:"4 | 5 | 7"})]}),secondary:(0,c.jsxs)("div",{className:t.section,children:[(0,c.jsx)("div",{children:"Secondary"}),(0,c.jsx)("strong",{children:"4 | 3 | 5"}),(0,c.jsxs)("div",{children:["isTwoSections: ",(0,c.jsx)("strong",{children:a?"yes":"no"})]})]}),isTwoSections:a}),s={title:"JS Packages/Components/Dialog",component:i.A},h={render:m.bind({}),name:"Readme",args:{isTwoSections:!0}},l=["Readme"];h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Readme',
  args: {
    isTwoSections: true
  }
}`,...h.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(j,_,n){n.d(_,{A:()=>u});function i(o){var d,r,t="";if(typeof o=="string"||typeof o=="number")t+=o;else if(typeof o=="object")if(Array.isArray(o)){var c=o.length;for(d=0;d<c;d++)o[d]&&(r=i(o[d]))&&(t&&(t+=" "),t+=r)}else for(r in o)o[r]&&(t&&(t+=" "),t+=r);return t}function e(){for(var o,d,r=0,t="",c=arguments.length;r<c;r++)(o=arguments[r])&&(d=i(o))&&(t&&(t+=" "),t+=d);return t}const u=e},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../components/components/dialog/stories/style.module.scss"(j,_,n){n.d(_,{A:()=>r});var i=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=n.n(i),u=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),o=n.n(u),d=o()(e());d.push([j.id,".RTMIETP7fe2d9xWFfYKF{display:flex;padding:calc(var(--spacing-base)*6) 0;border:1px dotted var(--jp-green-60);box-sizing:border-box;align-items:center;color:var(--jp-white);flex-wrap:nowrap;flex-direction:column;justify-content:space-between;height:calc(var(--spacing-base)*20);flex-grow:2;background:repeating-linear-gradient(-45deg, var(--jp-green-50), var(--jp-green-50) 20px, var(--jp-green-60) 20px, var(--jp-green-60) 40px)}",""]),d.locals={section:"RTMIETP7fe2d9xWFfYKF"};const r=d},"../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js"(j,_,n){/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function e(l,a){return l===a&&(l!==0||1/l===1/a)||l!==l&&a!==a}var u=typeof Object.is=="function"?Object.is:e,o=i.useState,d=i.useEffect,r=i.useLayoutEffect,t=i.useDebugValue;function c(l,a){var x=a(),y=o({inst:{value:x,getSnapshot:a}}),p=y[0].inst,f=y[1];return r(function(){p.value=x,p.getSnapshot=a,m(p)&&f({inst:p})},[l,x,a]),d(function(){return m(p)&&f({inst:p}),l(function(){m(p)&&f({inst:p})})},[l]),t(x),x}function m(l){var a=l.getSnapshot;l=l.value;try{var x=a();return!u(l,x)}catch{return!0}}function s(l,a){return a()}var h=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?s:c;_.useSyncExternalStore=i.useSyncExternalStore!==void 0?i.useSyncExternalStore:h},"../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/shim/index.js"(j,_,n){j.exports=n("../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js")}}]);
