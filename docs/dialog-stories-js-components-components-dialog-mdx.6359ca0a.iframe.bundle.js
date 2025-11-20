"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1900,5274],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":((m,a,o)=>{o.d(a,{R:()=>t,x:()=>r});var c=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},i=c.createContext(e);function t(n){const d=c.useContext(i);return c.useMemo(function(){return typeof n=="function"?n(d):{...d,...n}},[d,n])}function r(n){let d;return n.disableParentContext?d=typeof n.components=="function"?n.components(e):n.components||e:d=t(n.components),c.createElement(i.Provider,{value:d},n.children)}}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((m,a,o)=>{o.d(a,{A:()=>i});function c(t){var r,n,d="";if(typeof t=="string"||typeof t=="number")d+=t;else if(typeof t=="object")if(Array.isArray(t)){var l=t.length;for(r=0;r<l;r++)t[r]&&(n=c(t[r]))&&(d&&(d+=" "),d+=n)}else for(n in t)t[n]&&(d&&(d+=" "),d+=n);return d}function e(){for(var t,r,n=0,d="",l=arguments.length;n<l;n++)(t=arguments[n])&&(r=c(t))&&(d&&(d+=" "),d+=r);return d}const i=e}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/dialog/stories/style.module.scss":((m,a,o)=>{o.d(a,{A:()=>n});var c=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=o.n(c),i=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),t=o.n(i),r=t()(e());r.push([m.id,".RTMIETP7fe2d9xWFfYKF{display:flex;padding:calc(var(--spacing-base)*6) 0;border:1px dotted var(--jp-green-60);box-sizing:border-box;align-items:center;color:var(--jp-white);flex-wrap:nowrap;flex-direction:column;justify-content:space-between;height:calc(var(--spacing-base)*20);flex-grow:2;background:repeating-linear-gradient(-45deg, var(--jp-green-50), var(--jp-green-50) 20px, var(--jp-green-60) 20px, var(--jp-green-60) 40px)}",""]),r.locals={section:"RTMIETP7fe2d9xWFfYKF"};const n=r}),"../components/components/dialog/stories/js-components.components.dialog.mdx":((m,a,o)=>{o.r(a),o.d(a,{default:()=>l});var c=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i=o("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),t=o("../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_storybook@10.0.8_@testing-library+dom_3ee74e4cfe19437fa57f3470c4a9b62f/node_modules/@storybook/addon-docs/dist/blocks.js"),r=o("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js"),n=o("../components/components/dialog/stories/js-components.components.dialog.stories.js");function d(_){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),..._.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.W8,{of:n}),`
`,(0,e.jsx)(s.h1,{id:"dialog",children:"Dialog"}),`
`,(0,e.jsxs)(s.p,{children:["Render a two-sections layout simple composition, built based on the primary ",(0,e.jsx)("a",{href:"?path=/docs/js-packages-components-layout--default",children:"Layout component"}),"."]}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:(0,r.A)`
import Dialog from '@automattic/jetpack-components';
// ...

<Dialog
  primary={ <PrimaryComponent /> }
  secondary={ <SecondaryComponent /> }
  isTwoSections={ true }
/>
`}),`
`,(0,e.jsx)(t.gG,{of:n.Readme}),`
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
`]})]})}function l(_={}){const{wrapper:s}={...(0,i.R)(),..._.components};return s?(0,e.jsx)(s,{..._,children:(0,e.jsx)(d,{..._})}):d(_)}}),"../components/components/dialog/stories/js-components.components.dialog.stories.js":((m,a,o)=>{o.r(a),o.d(a,{Readme:()=>p,__namedExportsOrder:()=>j,default:()=>s});var c=o("../components/components/dialog/index.tsx"),e=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=o.n(e),t=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/dialog/stories/style.module.scss"),r={};r.insert="head",r.singleton=!1;var n=i()(t.A,r);const d=t.A.locals||{};var l=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _=({isTwoSections:u})=>(0,l.jsx)(c.A,{primary:(0,l.jsxs)("div",{className:d.section,children:[(0,l.jsx)("div",{children:"Primary"}),(0,l.jsx)("strong",{children:"4 | 5 | 7"})]}),secondary:(0,l.jsxs)("div",{className:d.section,children:[(0,l.jsx)("div",{children:"Secondary"}),(0,l.jsx)("strong",{children:"4 | 3 | 5"}),(0,l.jsxs)("div",{children:["isTwoSections: ",(0,l.jsx)("strong",{children:u?"yes":"no"})]})]}),isTwoSections:u}),s={title:"JS Packages/Components/Dialog",component:c.A},p={render:_.bind({}),name:"Readme",args:{isTwoSections:!0}},j=["Readme"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Readme',
  args: {
    isTwoSections: true
  }
}`,...p.parameters?.docs?.source}}}})}]);
