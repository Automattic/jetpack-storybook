"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4762],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"(h,i,s){s.d(i,{R:()=>_,x:()=>p});var d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},l=d.createContext(e);function _(t){const c=d.useContext(l);return d.useMemo(function(){return typeof t=="function"?t(c):{...c,...t}},[c,t])}function p(t){let c;return t.disableParentContext?c=typeof t.components=="function"?t.components(e):t.components||e:c=_(t.components),d.createElement(l.Provider,{value:c},t.children)}},"./storybook/stories/docs/howto.mdx"(h,i,s){s.r(i),s.d(i,{default:()=>c});var d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),l=s("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),_=s("../../../node_modules/.pnpm/@storybook+addon-docs@10.2.3_@types+react@18.3.26_storybook@10.2.3_@testing-library+dom_8f15e18183591511035590598674a462/node_modules/@storybook/addon-docs/dist/blocks.js"),p=s("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js");function t(a){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...a.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(_.W8,{title:"Docs/HowTo"}),`
`,(0,e.jsx)(o.h1,{id:"how-to-use-this-tool",children:"How to use this tool"}),`
`,(0,e.jsx)(o.p,{children:"The Jetpack Components Library allows you to discover, test, and live-edit Jetpack UI components."}),`
`,(0,e.jsx)(o.h2,{id:"publish-component-stories",children:"Publish component stories"}),`
`,(0,e.jsxs)(o.p,{children:["Anywhere in a supported package, create one or more directories called ",(0,e.jsx)(o.code,{children:"stories"})," (e.g. ",(0,e.jsx)(o.code,{children:"src/components/my-component/stories"}),")."]}),`
`,(0,e.jsxs)(o.p,{children:["In that directory, create an ",(0,e.jsx)(o.code,{children:"index.stories.jsx"})," or ",(0,e.jsx)(o.code,{children:"index.stories.tsx"})," file, like this:"]}),`
`,(0,e.jsx)(_.kL,{language:"jsx",code:(0,p.A)`
	/**
	 * Internal dependencies
	 */
	import MyComponent from '../index.jsx';
	// the default export is metadata about the component
	export default {
		title: 'Components/My Component',
		component: MyComponent,
	};
	// the export called __default is the default state of the component
	export const _default = {};
`}),`
`,(0,e.jsxs)(o.p,{children:["You can read more about writing stories in the ",(0,e.jsx)(o.a,{href:"https://storybook.js.org/docs/react/writing-stories/introduction",rel:"nofollow",children:"Storybook JS docs"}),"."]}),`
`,(0,e.jsx)(o.h2,{id:"edit-components-live",children:"Edit components live"}),`
`,(0,e.jsx)(o.p,{children:"To run this locally, just run:"}),`
`,(0,e.jsx)(o.pre,{children:(0,e.jsx)(o.code,{className:"language-bash",children:`# From projects/js-packages/storybook/
pnpm run storybook:dev

# Or from Jetpack repo root
pnpm -F @automattic/jetpack-storybook storybook:dev
`})}),`
`,(0,e.jsx)(o.p,{children:"Any edits to SCSS, HTML, JSX or other files should be hot-loaded so you can see changes to styles or components."}),`
`,(0,e.jsx)(o.h2,{id:"contributing",children:"Contributing"}),`
`,(0,e.jsxs)(o.p,{children:["Ready to contribute? Check out the Jetpack ",(0,e.jsx)(o.a,{href:"https://github.com/Automattic/jetpack/blob/trunk/docs/CONTRIBUTING.md",rel:"nofollow",children:"contributing guide"}),"."]})]})}function c(a={}){const{wrapper:o}={...(0,l.R)(),...a.components};return o?(0,e.jsx)(o,{...a,children:(0,e.jsx)(t,{...a})}):t(a)}},"../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js"(h,i,s){/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function e(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var l=typeof Object.is=="function"?Object.is:e,_=d.useState,p=d.useEffect,t=d.useLayoutEffect,c=d.useDebugValue;function a(n,r){var m=r(),x=_({inst:{value:m,getSnapshot:r}}),u=x[0].inst,j=x[1];return t(function(){u.value=m,u.getSnapshot=r,o(u)&&j({inst:u})},[n,m,r]),p(function(){return o(u)&&j({inst:u}),n(function(){o(u)&&j({inst:u})})},[n]),c(m),m}function o(n){var r=n.getSnapshot;n=n.value;try{var m=r();return!l(n,m)}catch{return!0}}function f(n,r){return r()}var y=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?f:a;i.useSyncExternalStore=d.useSyncExternalStore!==void 0?d.useSyncExternalStore:y},"../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/shim/index.js"(h,i,s){h.exports=s("../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js")}}]);
