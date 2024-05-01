(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3450],{"./storybook/stories/docs/howto.mdx":(r,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>a});var d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=t("../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.1_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),i=t("../../../node_modules/.pnpm/@storybook+blocks@8.0.9_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),m=t("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js");function l(s){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...s.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h_,{title:"Docs/HowTo"}),`
`,(0,e.jsx)(o.h1,{id:"how-to-use-this-tool",children:"How to use this tool"}),`
`,(0,e.jsx)(o.p,{children:"The Jetpack Components Library allows you to discover, test and live-edit Jetpack visual component."}),`
`,(0,e.jsx)(o.h2,{id:"publish-component-stories",children:"Publish component stories"}),`
`,(0,e.jsxs)(o.p,{children:["Anywhere in a supported package, create one or more directories called ",(0,e.jsx)(o.code,{children:"stories"})," (e.g. src/components/my-component/stories)."]}),`
`,(0,e.jsx)(o.p,{children:"In that directory, create an index.stories.js or index.stories.jsx file, like this:"}),`
`,(0,e.jsx)(i.Hw,{language:"jsx",code:m.C`
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
`,(0,e.jsxs)(o.p,{children:["You can read more about writing stories in the ",(0,e.jsx)(o.a,{href:"https://storybook.js.org/docs/react/writing-stories/introduction",rel:"nofollow",children:"Storybook JS docs"})]}),`
`,(0,e.jsx)(o.h2,{id:"edit-components-live",children:"Edit components live"}),`
`,(0,e.jsx)(o.p,{children:"To run this locally, just run:"}),`
`,(0,e.jsx)(o.pre,{children:(0,e.jsx)(o.code,{children:`pnpm run storybook:dev
`})}),`
`,(0,e.jsx)(o.p,{children:"Any edits to SCSS, HTML, JSX or other files should be hot-loaded so you can see changes to styles or components."})]})}function a(s={}){const{wrapper:o}={...(0,c.a)(),...s.components};return o?(0,e.jsx)(o,{...s,children:(0,e.jsx)(l,{...s})}):l(s)}},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":r=>{function n(t){var d=new Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}n.keys=()=>[],n.resolve=n,n.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",r.exports=n}}]);})();
