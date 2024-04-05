"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3450],{"./storybook/stories/docs/howto.mdx":(l,s,t)=>{t.r(s),t.d(s,{default:()=>a});var m=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=t("../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.2.74_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),r=t("../../../node_modules/.pnpm/@storybook+blocks@8.0.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),i=t("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js");function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,d.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h_,{title:"Docs/HowTo"}),`
`,(0,o.jsx)(e.h1,{id:"how-to-use-this-tool",children:"How to use this tool"}),`
`,(0,o.jsx)(e.p,{children:"The Jetpack Components Library allows you to discover, test and live-edit Jetpack visual component."}),`
`,(0,o.jsx)(e.h2,{id:"publish-component-stories",children:"Publish component stories"}),`
`,(0,o.jsxs)(e.p,{children:["Anywhere in a supported package, create one or more directories called ",(0,o.jsx)(e.code,{children:"stories"})," (e.g. src/components/my-component/stories)."]}),`
`,(0,o.jsx)(e.p,{children:"In that directory, create an index.stories.js or index.stories.jsx file, like this:"}),`
`,(0,o.jsx)(r.Hw,{language:"jsx",code:i.C`
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
`,(0,o.jsxs)(e.p,{children:["You can read more about writing stories in the ",(0,o.jsx)(e.a,{href:"https://storybook.js.org/docs/react/writing-stories/introduction",rel:"nofollow",children:"Storybook JS docs"})]}),`
`,(0,o.jsx)(e.h2,{id:"edit-components-live",children:"Edit components live"}),`
`,(0,o.jsx)(e.p,{children:"To run this locally, just run:"}),`
`,(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:`pnpm run storybook:dev
`})}),`
`,(0,o.jsx)(e.p,{children:"Any edits to SCSS, HTML, JSX or other files should be hot-loaded so you can see changes to styles or components."})]})}function a(n={}){const{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(c,{...n})}):c(n)}}}]);})();
