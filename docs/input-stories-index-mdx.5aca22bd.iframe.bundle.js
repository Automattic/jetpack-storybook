"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[156],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"(p,a,s){s.d(a,{R:()=>i,x:()=>x});var c=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},_=c.createContext(e);function i(t){const r=c.useContext(_);return c.useMemo(function(){return typeof t=="function"?t(r):{...r,...t}},[r,t])}function x(t){let r;return t.disableParentContext?r=typeof t.components=="function"?t.components(e):t.components||e:r=i(t.components),c.createElement(_.Provider,{value:r},t.children)}},"../../packages/videopress/src/client/admin/components/input/stories/index.mdx"(p,a,s){s.r(a),s.d(a,{default:()=>m});var c=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),_=s("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),i=s("../../../node_modules/.pnpm/@storybook+addon-docs@10.2.3_@types+react@18.3.26_storybook@10.2.3_@testing-library+dom_8f15e18183591511035590598674a462/node_modules/@storybook/addon-docs/dist/blocks.js"),x=s("../../packages/videopress/src/client/admin/components/input/index.tsx"),t=s("../../packages/videopress/src/client/admin/components/input/stories/index.stories.tsx");function r(l){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...(0,_.R)(),...l.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.W8,{of:t}),`
`,(0,e.jsx)(n.h1,{id:"input",children:"Input"}),`
`,(0,e.jsx)(n.p,{children:"A simple input field."}),`
`,(0,e.jsx)(i.Hl,{withSource:"open",children:(0,e.jsx)(i.gG,{id:"packages-videopress-input--default"})}),`
`,(0,e.jsx)(n.h2,{id:"api",children:"API"}),`
`,(0,e.jsx)(n.h3,{id:"value",children:"value"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"string"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"The input value."}),`
`,(0,e.jsx)(n.h3,{id:"placeholder",children:"placeholder"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"string"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"The input placeholder."}),`
`,(0,e.jsx)(n.h3,{id:"disabled",children:"disabled"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"boolean"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"Whether the input is disabled."}),`
`,(0,e.jsx)(n.h3,{id:"icon",children:"icon"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"ReactNode"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"An optional icon."}),`
`,(0,e.jsx)(n.h3,{id:"onchange",children:"onChange"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"function"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"Callback to be invoked when the input value changes."}),`
`,(0,e.jsx)(n.h3,{id:"onenter",children:"onEnter"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"function"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"Callback to be invoked when the user presses the Enter key."}),`
`,(0,e.jsx)(n.hr,{}),`
`,(0,e.jsx)(n.h1,{id:"searchinput",children:"SearchInput"}),`
`,(0,e.jsx)(n.p,{children:"A search input field."}),`
`,(0,e.jsx)(i.Hl,{withSource:"open",children:(0,e.jsx)(i.gG,{id:"packages-videopress-input--search"})})]})}function m(l={}){const{wrapper:n}={...(0,_.R)(),...l.components};return n?(0,e.jsx)(n,{...l,children:(0,e.jsx)(r,{...l})}):r(l)}},"../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js"(p,a,s){/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function e(o,d){return o===d&&(o!==0||1/o===1/d)||o!==o&&d!==d}var _=typeof Object.is=="function"?Object.is:e,i=c.useState,x=c.useEffect,t=c.useLayoutEffect,r=c.useDebugValue;function m(o,d){var h=d(),j=i({inst:{value:h,getSnapshot:d}}),u=j[0].inst,f=j[1];return t(function(){u.value=h,u.getSnapshot=d,l(u)&&f({inst:u})},[o,h,d]),x(function(){return l(u)&&f({inst:u}),o(function(){l(u)&&f({inst:u})})},[o]),r(h),h}function l(o){var d=o.getSnapshot;o=o.value;try{var h=d();return!_(o,h)}catch{return!0}}function n(o,d){return d()}var y=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?n:m;a.useSyncExternalStore=c.useSyncExternalStore!==void 0?c.useSyncExternalStore:y},"../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/shim/index.js"(p,a,s){p.exports=s("../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js")}}]);
