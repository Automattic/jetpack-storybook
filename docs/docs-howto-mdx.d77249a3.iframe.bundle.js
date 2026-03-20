"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4762],{"./storybook/stories/docs/howto.mdx"(p,i,s){s.r(i),s.d(i,{default:()=>h});var c=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),u=s("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.28_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),l=s("../../../node_modules/.pnpm/@storybook+addon-docs@10.3.1_@types+react@18.3.28_storybook@10.3.1_@testing-library+dom_f723e8232cb2bbabbde2003e64dfd316/node_modules/@storybook/addon-docs/dist/blocks.js"),m=s("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js");function _(r){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,u.R)(),...r.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.W8,{title:"Docs/HowTo"}),`
`,(0,e.jsx)(o.h1,{id:"how-to-use-this-tool",children:"How to use this tool"}),`
`,(0,e.jsx)(o.p,{children:"The Jetpack Components Library allows you to discover, test, and live-edit Jetpack UI components."}),`
`,(0,e.jsx)(o.h2,{id:"publish-component-stories",children:"Publish component stories"}),`
`,(0,e.jsxs)(o.p,{children:["Anywhere in a supported package, create one or more directories called ",(0,e.jsx)(o.code,{children:"stories"})," (e.g. ",(0,e.jsx)(o.code,{children:"src/components/my-component/stories"}),")."]}),`
`,(0,e.jsxs)(o.p,{children:["In that directory, create an ",(0,e.jsx)(o.code,{children:"index.stories.jsx"})," or ",(0,e.jsx)(o.code,{children:"index.stories.tsx"})," file, like this:"]}),`
`,(0,e.jsx)(l.kL,{language:"jsx",code:(0,m.A)`
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
`,(0,e.jsxs)(o.p,{children:["Ready to contribute? Check out the Jetpack ",(0,e.jsx)(o.a,{href:"https://github.com/Automattic/jetpack/blob/trunk/docs/CONTRIBUTING.md",rel:"nofollow",children:"contributing guide"}),"."]})]})}function h(r={}){const{wrapper:o}={...(0,u.R)(),...r.components};return o?(0,e.jsx)(o,{...r,children:(0,e.jsx)(_,{...r})}):_(r)}},"../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js"(p,i,s){/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function e(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var u=typeof Object.is=="function"?Object.is:e,l=c.useState,m=c.useEffect,_=c.useLayoutEffect,h=c.useDebugValue;function r(t,n){var a=n(),x=l({inst:{value:a,getSnapshot:n}}),d=x[0].inst,j=x[1];return _(function(){d.value=a,d.getSnapshot=n,o(d)&&j({inst:d})},[t,a,n]),m(function(){return o(d)&&j({inst:d}),t(function(){o(d)&&j({inst:d})})},[t]),h(a),a}function o(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!u(t,a)}catch{return!0}}function y(t,n){return n()}var f=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?y:r;i.useSyncExternalStore=c.useSyncExternalStore!==void 0?c.useSyncExternalStore:f},"../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/shim/index.js"(p,i,s){p.exports=s("../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js")}}]);
