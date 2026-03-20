"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[156],{"../../packages/videopress/src/client/admin/components/input/stories/index.mdx"(h,a,o){o.r(a),o.d(a,{default:()=>x});var r=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),u=o("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.28_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),i=o("../../../node_modules/.pnpm/@storybook+addon-docs@10.3.1_@types+react@18.3.28_storybook@10.3.1_@testing-library+dom_f723e8232cb2bbabbde2003e64dfd316/node_modules/@storybook/addon-docs/dist/blocks.js"),f=o("../../packages/videopress/src/client/admin/components/input/index.tsx"),p=o("../../packages/videopress/src/client/admin/components/input/stories/index.stories.tsx");function _(d){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...(0,u.R)(),...d.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.W8,{of:p}),`
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
`,(0,e.jsx)(i.Hl,{withSource:"open",children:(0,e.jsx)(i.gG,{id:"packages-videopress-input--search"})})]})}function x(d={}){const{wrapper:n}={...(0,u.R)(),...d.components};return n?(0,e.jsx)(n,{...d,children:(0,e.jsx)(_,{...d})}):_(d)}},"../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js"(h,a,o){/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function e(s,t){return s===t&&(s!==0||1/s===1/t)||s!==s&&t!==t}var u=typeof Object.is=="function"?Object.is:e,i=r.useState,f=r.useEffect,p=r.useLayoutEffect,_=r.useDebugValue;function x(s,t){var l=t(),j=i({inst:{value:l,getSnapshot:t}}),c=j[0].inst,m=j[1];return p(function(){c.value=l,c.getSnapshot=t,d(c)&&m({inst:c})},[s,l,t]),f(function(){return d(c)&&m({inst:c}),s(function(){d(c)&&m({inst:c})})},[s]),_(l),l}function d(s){var t=s.getSnapshot;s=s.value;try{var l=t();return!u(s,l)}catch{return!0}}function n(s,t){return t()}var y=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?n:x;a.useSyncExternalStore=r.useSyncExternalStore!==void 0?r.useSyncExternalStore:y},"../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/shim/index.js"(h,a,o){h.exports=o("../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js")}}]);
