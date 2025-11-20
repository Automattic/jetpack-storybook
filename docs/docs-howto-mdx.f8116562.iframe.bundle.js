"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4762],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":((_,i,n)=>{n.d(i,{R:()=>a,x:()=>l});var c=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},r=c.createContext(e);function a(t){const s=c.useContext(r);return c.useMemo(function(){return typeof t=="function"?t(s):{...s,...t}},[s,t])}function l(t){let s;return t.disableParentContext?s=typeof t.components=="function"?t.components(e):t.components||e:s=a(t.components),c.createElement(r.Provider,{value:s},t.children)}}),"./storybook/stories/docs/howto.mdx":((_,i,n)=>{n.r(i),n.d(i,{default:()=>s});var c=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),r=n("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),a=n("../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_storybook@10.0.8_@testing-library+dom_3ee74e4cfe19437fa57f3470c4a9b62f/node_modules/@storybook/addon-docs/dist/blocks.js"),l=n("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js");function t(d){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...d.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.W8,{title:"Docs/HowTo"}),`
`,(0,e.jsx)(o.h1,{id:"how-to-use-this-tool",children:"How to use this tool"}),`
`,(0,e.jsx)(o.p,{children:"The Jetpack Components Library allows you to discover, test, and live-edit Jetpack UI components."}),`
`,(0,e.jsx)(o.h2,{id:"publish-component-stories",children:"Publish component stories"}),`
`,(0,e.jsxs)(o.p,{children:["Anywhere in a supported package, create one or more directories called ",(0,e.jsx)(o.code,{children:"stories"})," (e.g. ",(0,e.jsx)(o.code,{children:"src/components/my-component/stories"}),")."]}),`
`,(0,e.jsxs)(o.p,{children:["In that directory, create an ",(0,e.jsx)(o.code,{children:"index.stories.jsx"})," or ",(0,e.jsx)(o.code,{children:"index.stories.tsx"})," file, like this:"]}),`
`,(0,e.jsx)(a.kL,{language:"jsx",code:(0,l.A)`
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
`,(0,e.jsxs)(o.p,{children:["Ready to contribute? Check out the Jetpack ",(0,e.jsx)(o.a,{href:"https://github.com/Automattic/jetpack/blob/trunk/docs/CONTRIBUTING.md",rel:"nofollow",children:"contributing guide"}),"."]})]})}function s(d={}){const{wrapper:o}={...(0,r.R)(),...d.components};return o?(0,e.jsx)(o,{...d,children:(0,e.jsx)(t,{...d})}):t(d)}})}]);
