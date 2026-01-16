(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1900,5274],{"../../../node_modules/.pnpm/@storybook+addon-docs@10.1.10_@types+react@18.3.27_storybook@10.1.10_@testing-library+d_486c6509fdfe2be64b4e30c6761707fc/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive":(j=>{function l(n){var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}l.keys=()=>[],l.resolve=l,l.id="../../../node_modules/.pnpm/@storybook+addon-docs@10.1.10_@types+react@18.3.27_storybook@10.1.10_@testing-library+d_486c6509fdfe2be64b4e30c6761707fc/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive",j.exports=l}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((j,l,n)=>{"use strict";n.d(l,{A:()=>m});function a(t){var d,o,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var _=t.length;for(d=0;d<_;d++)t[d]&&(o=a(t[d]))&&(r&&(r+=" "),r+=o)}else for(o in t)t[o]&&(r&&(r+=" "),r+=o);return r}function e(){for(var t,d,o=0,r="",_=arguments.length;o<_;o++)(t=arguments[o])&&(d=a(t))&&(r&&(r+=" "),r+=d);return r}const m=e}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../components/components/dialog/stories/style.module.scss":((j,l,n)=>{"use strict";n.d(l,{A:()=>o});var a=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=n.n(a),m=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),t=n.n(m),d=t()(e());d.push([j.id,".RTMIETP7fe2d9xWFfYKF{display:flex;padding:calc(var(--spacing-base)*6) 0;border:1px dotted var(--jp-green-60);box-sizing:border-box;align-items:center;color:var(--jp-white);flex-wrap:nowrap;flex-direction:column;justify-content:space-between;height:calc(var(--spacing-base)*20);flex-grow:2;background:repeating-linear-gradient(-45deg, var(--jp-green-50), var(--jp-green-50) 20px, var(--jp-green-60) 20px, var(--jp-green-60) 40px)}",""]),d.locals={section:"RTMIETP7fe2d9xWFfYKF"};const o=d}),"../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js":((j,l,n)=>{"use strict";n.d(l,{A:()=>e,T:()=>a});function a(m){for(var t=[],d=1;d<arguments.length;d++)t[d-1]=arguments[d];var o=Array.from(typeof m=="string"?[m]:m);o[o.length-1]=o[o.length-1].replace(/\r?\n([\t ]*)$/,"");var r=o.reduce(function(s,h){var c=h.match(/\n([\t ]+|(?!\s).)/g);return c?s.concat(c.map(function(i){var p,x;return(x=(p=i.match(/[\t ]/g))===null||p===void 0?void 0:p.length)!==null&&x!==void 0?x:0})):s},[]);if(r.length){var _=new RegExp(`
[	 ]{`+Math.min.apply(Math,r)+"}","g");o=o.map(function(s){return s.replace(_,`
`)})}o[0]=o[0].replace(/^\r?\n/,"");var u=o[0];return t.forEach(function(s,h){var c=u.match(/(?:^|\n)( *)$/),i=c?c[1]:"",p=s;typeof s=="string"&&s.includes(`
`)&&(p=String(s).split(`
`).map(function(x,y){return y===0?x:""+i+x}).join(`
`)),u+=p+o[h+1]}),u}const e=a}),"../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js":((j,l,n)=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function e(c,i){return c===i&&(c!==0||1/c===1/i)||c!==c&&i!==i}var m=typeof Object.is=="function"?Object.is:e,t=a.useState,d=a.useEffect,o=a.useLayoutEffect,r=a.useDebugValue;function _(c,i){var p=i(),x=t({inst:{value:p,getSnapshot:i}}),y=x[0].inst,f=x[1];return o(function(){y.value=p,y.getSnapshot=i,u(y)&&f({inst:y})},[c,p,i]),d(function(){return u(y)&&f({inst:y}),c(function(){u(y)&&f({inst:y})})},[c]),r(p),p}function u(c){var i=c.getSnapshot;c=c.value;try{var p=i();return!m(c,p)}catch{return!0}}function s(c,i){return i()}var h=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?s:_;l.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:h}),"../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/shim/index.js":((j,l,n)=>{"use strict";j.exports=n("../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js")}),"../components/components/dialog/stories/js-components.components.dialog.mdx":((j,l,n)=>{"use strict";n.r(l),n.d(l,{default:()=>_});var a=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=n("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),t=n("../../../node_modules/.pnpm/@storybook+addon-docs@10.1.10_@types+react@18.3.27_storybook@10.1.10_@testing-library+d_486c6509fdfe2be64b4e30c6761707fc/node_modules/@storybook/addon-docs/dist/blocks.js"),d=n("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js"),o=n("../components/components/dialog/stories/js-components.components.dialog.stories.js");function r(u){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,m.R)(),...u.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.W8,{of:o}),`
`,(0,e.jsx)(s.h1,{id:"dialog",children:"Dialog"}),`
`,(0,e.jsxs)(s.p,{children:["Render a two-sections layout simple composition, built based on the primary ",(0,e.jsx)("a",{href:"?path=/docs/js-packages-components-layout--default",children:"Layout component"}),"."]}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:(0,d.A)`
import Dialog from '@automattic/jetpack-components';
// ...

<Dialog
  primary={ <PrimaryComponent /> }
  secondary={ <SecondaryComponent /> }
  isTwoSections={ true }
/>
`}),`
`,(0,e.jsx)(t.gG,{of:o.Readme}),`
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
`]})]})}function _(u={}){const{wrapper:s}={...(0,m.R)(),...u.components};return s?(0,e.jsx)(s,{...u,children:(0,e.jsx)(r,{...u})}):r(u)}}),"../components/components/dialog/stories/js-components.components.dialog.stories.js":((j,l,n)=>{"use strict";n.r(l),n.d(l,{Readme:()=>h,__namedExportsOrder:()=>c,default:()=>s});var a=n("../components/components/dialog/index.tsx"),e=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=n.n(e),t=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../components/components/dialog/stories/style.module.scss"),d={};d.insert="head",d.singleton=!1;var o=m()(t.A,d);const r=t.A.locals||{};var _=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u=({isTwoSections:i})=>(0,_.jsx)(a.A,{primary:(0,_.jsxs)("div",{className:r.section,children:[(0,_.jsx)("div",{children:"Primary"}),(0,_.jsx)("strong",{children:"4 | 5 | 7"})]}),secondary:(0,_.jsxs)("div",{className:r.section,children:[(0,_.jsx)("div",{children:"Secondary"}),(0,_.jsx)("strong",{children:"4 | 3 | 5"}),(0,_.jsxs)("div",{children:["isTwoSections: ",(0,_.jsx)("strong",{children:i?"yes":"no"})]})]}),isTwoSections:i}),s={title:"JS Packages/Components/Dialog",component:a.A},h={render:u.bind({}),name:"Readme",args:{isTwoSections:!0}},c=["Readme"];h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Readme',
  args: {
    isTwoSections: true
  }
}`,...h.parameters?.docs?.source}}}})}]);
