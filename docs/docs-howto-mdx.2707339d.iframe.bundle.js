(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4762],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(c,e,n)=>{"use strict";n.d(e,{R:()=>m,x:()=>a});var s=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const o={},l=s.createContext(o);function m(r){const d=s.useContext(l);return s.useMemo(function(){return typeof r=="function"?r(d):{...d,...r}},[d,r])}function a(r){let d;return r.disableParentContext?d=typeof r.components=="function"?r.components(o):r.components||o:d=m(r.components),s.createElement(l.Provider,{value:d},r.children)}},"./storybook/stories/docs/howto.mdx":(c,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>d});var s=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),l=n("../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),m=n("../../../node_modules/.pnpm/@storybook+blocks@8.4.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.7/node_modules/@storybook/blocks/dist/index.mjs"),a=n("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js");function r(i){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...i.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.W8,{title:"Docs/HowTo"}),`
`,(0,o.jsx)(t.h1,{id:"how-to-use-this-tool",children:"How to use this tool"}),`
`,(0,o.jsx)(t.p,{children:"The Jetpack Components Library allows you to discover, test, and live-edit Jetpack UI components."}),`
`,(0,o.jsx)(t.h2,{id:"publish-component-stories",children:"Publish component stories"}),`
`,(0,o.jsxs)(t.p,{children:["Anywhere in a supported package, create one or more directories called ",(0,o.jsx)(t.code,{children:"stories"})," (e.g. ",(0,o.jsx)(t.code,{children:"src/components/my-component/stories"}),")."]}),`
`,(0,o.jsxs)(t.p,{children:["In that directory, create an ",(0,o.jsx)(t.code,{children:"index.stories.jsx"})," or ",(0,o.jsx)(t.code,{children:"index.stories.tsx"})," file, like this:"]}),`
`,(0,o.jsx)(m.kL,{language:"jsx",code:(0,a.A)`
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
`,(0,o.jsxs)(t.p,{children:["You can read more about writing stories in the ",(0,o.jsx)(t.a,{href:"https://storybook.js.org/docs/react/writing-stories/introduction",rel:"nofollow",children:"Storybook JS docs"}),"."]}),`
`,(0,o.jsx)(t.h2,{id:"edit-components-live",children:"Edit components live"}),`
`,(0,o.jsx)(t.p,{children:"To run this locally, just run:"}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:`# From projects/js-packages/storybook/
pnpm run storybook:dev

# Or from Jetpack repo root
pnpm -F @automattic/jetpack-storybook storybook:dev
`})}),`
`,(0,o.jsx)(t.p,{children:"Any edits to SCSS, HTML, JSX or other files should be hot-loaded so you can see changes to styles or components."}),`
`,(0,o.jsx)(t.h2,{id:"contributing",children:"Contributing"}),`
`,(0,o.jsxs)(t.p,{children:["Ready to contribute? Check out the Jetpack ",(0,o.jsx)(t.a,{href:"https://github.com/Automattic/jetpack/blob/trunk/docs/CONTRIBUTING.md",rel:"nofollow",children:"contributing guide"}),"."]})]})}function d(i={}){const{wrapper:t}={...(0,l.R)(),...i.components};return t?(0,o.jsx)(t,{...i,children:(0,o.jsx)(r,{...i})}):r(i)}},"../../../node_modules/.pnpm/@storybook+blocks@8.4.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.7/node_modules/@storybook/blocks/dist sync recursive":c=>{function e(n){var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}e.keys=()=>[],e.resolve=e,e.id="../../../node_modules/.pnpm/@storybook+blocks@8.4.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.7/node_modules/@storybook/blocks/dist sync recursive",c.exports=e},"../../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/components sync recursive":c=>{function e(n){var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}e.keys=()=>[],e.resolve=e,e.id="../../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/components sync recursive",c.exports=e},"../../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/theming sync recursive":c=>{function e(n){var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}e.keys=()=>[],e.resolve=e,e.id="../../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/theming sync recursive",c.exports=e}}]);})();
