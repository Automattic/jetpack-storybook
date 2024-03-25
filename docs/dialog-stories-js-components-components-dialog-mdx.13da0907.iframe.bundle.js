(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7249,6501],{"../../../node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/extends.js":(m,i,n)=>{"use strict";n.d(i,{Z:()=>d});function d(){return d=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},d.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(m,i,n)=>{"use strict";var d;n.d(i,{L:()=>r,j:()=>a});var e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=function(c){return c()},t=(d||(d=n.t(e,2)))["useInsertionEffect"]?(d||(d=n.t(e,2)))["useInsertionEffect"]:!1,r=t||l,a=t||e.useLayoutEffect},"../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.2.61_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(m,i,n)=>{"use strict";n.d(i,{Z:()=>r,a:()=>t});var d=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const e={},l=d.createContext(e);function t(a){const o=d.useContext(l);return d.useMemo(function(){return typeof a=="function"?a(o):{...o,...a}},[o,a])}function r(a){let o;return a.disableParentContext?o=typeof a.components=="function"?a.components(e):a.components||e:o=t(a.components),d.createElement(l.Provider,{value:o},a.children)}},"../components/components/dialog/stories/js-components.components.dialog.mdx":(m,i,n)=>{"use strict";n.r(i),n.d(i,{default:()=>c});var d=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=n("../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.2.61_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),t=n("../../../node_modules/.pnpm/@storybook+blocks@8.0.4_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),r=n("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js"),a=n("../components/components/dialog/stories/js-components.components.dialog.stories.js");function o(_){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),..._.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.h_,{of:a}),`
`,(0,e.jsx)(s.h1,{id:"dialog",children:"Dialog"}),`
`,(0,e.jsxs)(s.p,{children:["Render a two-sections layout simple composition, built based on the primary ",(0,e.jsx)("a",{href:"?path=/docs/js-packages-components-layout--default",children:"Layout component"}),"."]}),`
`,(0,e.jsx)(t.Hw,{language:"jsx",code:r.C`
  import Dialog from '@automattic/jetpack-components';
  // ...

  <Dialog
    primary={ <PrimaryComponent /> }
    secondary={ <SecondaryComponent /> }
    isTwoSections={ true }
  />
  `}),`
`,(0,e.jsx)(t.oG,{of:a.Readme}),`
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
`]})]})}function c(_={}){const{wrapper:s}={...(0,l.a)(),..._.components};return s?(0,e.jsx)(s,{..._,children:(0,e.jsx)(o,{..._})}):o(_)}},"../components/components/dialog/stories/js-components.components.dialog.stories.js":(m,i,n)=>{var u,h,j;"use strict";n.r(i),n.d(i,{Readme:()=>p,__namedExportsOrder:()=>f,default:()=>s});var d=n("../components/components/dialog/index.tsx"),e=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=n.n(e),t=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss"),r={};r.insert="head",r.singleton=!1;var a=l()(t.Z,r);const o=t.Z.locals||{};var c=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const _=({isTwoSections:x})=>(0,c.jsx)(d.Z,{primary:(0,c.jsxs)("div",{className:o.section,children:[(0,c.jsx)("div",{children:"Primary"}),(0,c.jsx)("strong",{children:"4 | 5 | 7"})]}),secondary:(0,c.jsxs)("div",{className:o.section,children:[(0,c.jsx)("div",{children:"Secondary"}),(0,c.jsx)("strong",{children:"4 | 3 | 5"}),(0,c.jsxs)("div",{children:["isTwoSections: ",(0,c.jsx)("strong",{children:x?"yes":"no"})]})]}),isTwoSections:x}),s={title:"JS Packages/Components/Dialog",component:d.Z},p={render:_.bind({}),name:"Readme",args:{isTwoSections:!0}};p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Readme',
  args: {
    isTwoSections: true
  }
}`,...(j=(h=p.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const f=["Readme"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(m,i)=>{var n,d;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var e={}.hasOwnProperty,l="[native code]";function t(){for(var r=[],a=0;a<arguments.length;a++){var o=arguments[a];if(o){var c=typeof o;if(c==="string"||c==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var _=t.apply(null,o);_&&r.push(_)}}else if(c==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var s in o)e.call(o,s)&&o[s]&&r.push(s)}}}return r.join(" ")}m.exports?(t.default=t,m.exports=t):(n=[],d=function(){return t}.apply(i,n),d!==void 0&&(m.exports=d))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss":(m,i,n)=>{"use strict";n.d(i,{Z:()=>a});var d=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=n.n(d),l=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=n.n(l),r=t()(e());r.push([m.id,".RTMIETP7fe2d9xWFfYKF{display:flex;padding:calc(var(--spacing-base)*6) 0;border:1px dotted var(--jp-green-60);box-sizing:border-box;align-items:center;color:var(--jp-white);flex-wrap:nowrap;flex-direction:column;justify-content:space-between;height:calc(var(--spacing-base)*20);flex-grow:2;background:repeating-linear-gradient(-45deg, var(--jp-green-50), var(--jp-green-50) 20px, var(--jp-green-60) 20px, var(--jp-green-60) 40px)}",""]),r.locals={section:"RTMIETP7fe2d9xWFfYKF"};const a=r}}]);})();
