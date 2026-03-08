"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1900,5274],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.28_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"(p,_,n){n.d(_,{R:()=>d,x:()=>r});var c=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},m=c.createContext(e);function d(o){const t=c.useContext(m);return c.useMemo(function(){return typeof o=="function"?o(t):{...t,...o}},[t,o])}function r(o){let t;return o.disableParentContext?t=typeof o.components=="function"?o.components(e):o.components||e:t=d(o.components),c.createElement(m.Provider,{value:t},o.children)}},"../components/components/dialog/stories/js-components.components.dialog.mdx"(p,_,n){n.r(_),n.d(_,{default:()=>l});var c=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=n("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.28_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),d=n("../../../node_modules/.pnpm/@storybook+addon-docs@10.2.11_@types+react@18.3.28_storybook@10.2.11_@testing-library+d_4d7730636c6f908b74b0bdaf8c75fcc1/node_modules/@storybook/addon-docs/dist/blocks.js"),r=n("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js"),o=n("../components/components/dialog/stories/js-components.components.dialog.stories.js");function t(u){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,m.R)(),...u.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(d.W8,{of:o}),`
`,(0,e.jsx)(s.h1,{id:"dialog",children:"Dialog"}),`
`,(0,e.jsxs)(s.p,{children:["Render a two-sections layout simple composition, built based on the primary ",(0,e.jsx)("a",{href:"?path=/docs/js-packages-components-layout--default",children:"Layout component"}),"."]}),`
`,(0,e.jsx)(d.kL,{language:"jsx",code:(0,r.A)`
import Dialog from '@automattic/jetpack-components';
// ...

<Dialog
  primary={ <PrimaryComponent /> }
  secondary={ <SecondaryComponent /> }
  isTwoSections={ true }
/>
`}),`
`,(0,e.jsx)(d.gG,{of:o.Readme}),`
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
`]})]})}function l(u={}){const{wrapper:s}={...(0,m.R)(),...u.components};return s?(0,e.jsx)(s,{...u,children:(0,e.jsx)(t,{...u})}):t(u)}},"../components/components/dialog/stories/js-components.components.dialog.stories.js"(p,_,n){n.r(_),n.d(_,{Readme:()=>h,__namedExportsOrder:()=>a,default:()=>s});var c=n("../components/components/dialog/index.tsx"),e=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=n.n(e),d=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../components/components/dialog/stories/style.module.scss"),r={};r.insert="head",r.singleton=!1;var o=m()(d.A,r);const t=d.A.locals||{};var l=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u=({isTwoSections:i})=>(0,l.jsx)(c.A,{primary:(0,l.jsxs)("div",{className:t.section,children:[(0,l.jsx)("div",{children:"Primary"}),(0,l.jsx)("strong",{children:"4 | 5 | 7"})]}),secondary:(0,l.jsxs)("div",{className:t.section,children:[(0,l.jsx)("div",{children:"Secondary"}),(0,l.jsx)("strong",{children:"4 | 3 | 5"}),(0,l.jsxs)("div",{children:["isTwoSections: ",(0,l.jsx)("strong",{children:i?"yes":"no"})]})]}),isTwoSections:i}),s={title:"JS Packages/Components/Dialog",component:c.A},h={render:u.bind({}),name:"Readme",args:{isTwoSections:!0}},a=["Readme"];h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Readme',
  args: {
    isTwoSections: true
  }
}`,...h.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(p,_,n){n.d(_,{A:()=>m});function c(d){var r,o,t="";if(typeof d=="string"||typeof d=="number")t+=d;else if(typeof d=="object")if(Array.isArray(d)){var l=d.length;for(r=0;r<l;r++)d[r]&&(o=c(d[r]))&&(t&&(t+=" "),t+=o)}else for(o in d)d[o]&&(t&&(t+=" "),t+=o);return t}function e(){for(var d,r,o=0,t="",l=arguments.length;o<l;o++)(d=arguments[o])&&(r=c(d))&&(t&&(t+=" "),t+=r);return t}const m=e},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../components/components/dialog/stories/style.module.scss"(p,_,n){n.d(_,{A:()=>o});var c=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=n.n(c),m=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),d=n.n(m),r=d()(e());r.push([p.id,".RTMIETP7fe2d9xWFfYKF{display:flex;padding:calc(var(--spacing-base)*6) 0;border:1px dotted var(--jp-green-60);box-sizing:border-box;align-items:center;color:var(--jp-white);flex-wrap:nowrap;flex-direction:column;justify-content:space-between;height:calc(var(--spacing-base)*20);flex-grow:2;background:repeating-linear-gradient(-45deg, var(--jp-green-50), var(--jp-green-50) 20px, var(--jp-green-60) 20px, var(--jp-green-60) 40px)}",""]),r.locals={section:"RTMIETP7fe2d9xWFfYKF"};const o=r},"../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js"(p,_,n){/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function e(a,i){return a===i&&(a!==0||1/a===1/i)||a!==a&&i!==i}var m=typeof Object.is=="function"?Object.is:e,d=c.useState,r=c.useEffect,o=c.useLayoutEffect,t=c.useDebugValue;function l(a,i){var x=i(),y=d({inst:{value:x,getSnapshot:i}}),j=y[0].inst,f=y[1];return o(function(){j.value=x,j.getSnapshot=i,u(j)&&f({inst:j})},[a,x,i]),r(function(){return u(j)&&f({inst:j}),a(function(){u(j)&&f({inst:j})})},[a]),t(x),x}function u(a){var i=a.getSnapshot;a=a.value;try{var x=i();return!m(a,x)}catch{return!0}}function s(a,i){return i()}var h=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?s:l;_.useSyncExternalStore=c.useSyncExternalStore!==void 0?c.useSyncExternalStore:h},"../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/shim/index.js"(p,_,n){p.exports=n("../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js")}}]);
