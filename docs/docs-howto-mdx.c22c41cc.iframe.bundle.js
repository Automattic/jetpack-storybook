(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4762],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(c,e,t)=>{"use strict";t.d(e,{R:()=>m,x:()=>l});var s=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const o={},i=s.createContext(o);function m(r){const d=s.useContext(i);return s.useMemo(function(){return typeof r=="function"?r(d):{...d,...r}},[d,r])}function l(r){let d;return r.disableParentContext?d=typeof r.components=="function"?r.components(o):r.components||o:d=m(r.components),s.createElement(i.Provider,{value:d},r.children)}},"./storybook/stories/docs/howto.mdx":(c,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>d});var s=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i=t("../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),m=t("../../../node_modules/.pnpm/@storybook+blocks@8.4.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.7/node_modules/@storybook/blocks/dist/index.mjs"),l=t("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js");function r(_){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),..._.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.W8,{title:"Docs/HowTo"}),`
`,(0,o.jsx)(n.h1,{id:"how-to-use-this-tool",children:"How to use this tool"}),`
`,(0,o.jsx)(n.p,{children:"The Jetpack Components Library allows you to discover, test and live-edit Jetpack visual component."}),`
`,(0,o.jsx)(n.h2,{id:"publish-component-stories",children:"Publish component stories"}),`
`,(0,o.jsxs)(n.p,{children:["Anywhere in a supported package, create one or more directories called ",(0,o.jsx)(n.code,{children:"stories"})," (e.g. src/components/my-component/stories)."]}),`
`,(0,o.jsx)(n.p,{children:"In that directory, create an index.stories.js or index.stories.jsx file, like this:"}),`
`,(0,o.jsx)(m.kL,{language:"jsx",code:(0,l.A)`
		/**
		 * Internal dependencies
		 */
		import MyComponent from '../index.jsx';
		// the default export is metadata about the component
		export default {
			title: 'Components/My Component',
		};
		// the export called __default is the default state of the component
		export const _default = () => {
			return <MyComponent foo="bar"/>;
		};
	`}),`
`,(0,o.jsxs)(n.p,{children:["You can read more about writing stories in the ",(0,o.jsx)(n.a,{href:"https://storybook.js.org/docs/react/writing-stories/introduction",rel:"nofollow",children:"Storybook JS docs"})]}),`
`,(0,o.jsx)(n.h2,{id:"edit-components-live",children:"Edit components live"}),`
`,(0,o.jsx)(n.p,{children:"To run this locally, just run:"}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:`pnpm run storybook:dev
`})}),`
`,(0,o.jsx)(n.p,{children:"Any edits to SCSS, HTML, JSX or other files should be hot-loaded so you can see changes to styles or components."})]})}function d(_={}){const{wrapper:n}={...(0,i.R)(),..._.components};return n?(0,o.jsx)(n,{..._,children:(0,o.jsx)(r,{..._})}):r(_)}},"../../../node_modules/.pnpm/@storybook+blocks@8.4.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.7/node_modules/@storybook/blocks/dist sync recursive":c=>{function e(t){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}e.keys=()=>[],e.resolve=e,e.id="../../../node_modules/.pnpm/@storybook+blocks@8.4.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.7/node_modules/@storybook/blocks/dist sync recursive",c.exports=e},"../../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/components sync recursive":c=>{function e(t){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}e.keys=()=>[],e.resolve=e,e.id="../../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/components sync recursive",c.exports=e},"../../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/theming sync recursive":c=>{function e(t){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}e.keys=()=>[],e.resolve=e,e.id="../../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/theming sync recursive",c.exports=e}}]);})();
