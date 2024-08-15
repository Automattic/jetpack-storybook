(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3450],{"../../../node_modules/.pnpm/@babel+runtime@7.24.7/node_modules/@babel/runtime/helpers/esm/extends.js":(m,o,n)=>{"use strict";n.d(o,{Z:()=>t});function t(){return t=Object.assign?Object.assign.bind():function(e){for(var d=1;d<arguments.length;d++){var c=arguments[d];for(var l in c)({}).hasOwnProperty.call(c,l)&&(e[l]=c[l])}return e},t.apply(null,arguments)}},"../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(m,o,n)=>{"use strict";n.d(o,{Z:()=>l,a:()=>c});var t=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},d=t.createContext(e);function c(r){const i=t.useContext(d);return t.useMemo(function(){return typeof r=="function"?r(i):{...i,...r}},[i,r])}function l(r){let i;return r.disableParentContext?i=typeof r.components=="function"?r.components(e):r.components||e:i=c(r.components),t.createElement(d.Provider,{value:i},r.children)}},"./storybook/stories/docs/howto.mdx":(m,o,n)=>{"use strict";n.r(o),n.d(o,{default:()=>i});var t=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),d=n("../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),c=n("../../../node_modules/.pnpm/@storybook+blocks@8.2.9_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.2.9/node_modules/@storybook/blocks/dist/index.mjs"),l=n("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js");function r(a){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,d.a)(),...a.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(c.h_,{title:"Docs/HowTo"}),`
`,(0,e.jsx)(s.h1,{id:"how-to-use-this-tool",children:"How to use this tool"}),`
`,(0,e.jsx)(s.p,{children:"The Jetpack Components Library allows you to discover, test and live-edit Jetpack visual component."}),`
`,(0,e.jsx)(s.h2,{id:"publish-component-stories",children:"Publish component stories"}),`
`,(0,e.jsxs)(s.p,{children:["Anywhere in a supported package, create one or more directories called ",(0,e.jsx)(s.code,{children:"stories"})," (e.g. src/components/my-component/stories)."]}),`
`,(0,e.jsx)(s.p,{children:"In that directory, create an index.stories.js or index.stories.jsx file, like this:"}),`
`,(0,e.jsx)(c.Hw,{language:"jsx",code:l.C`
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
`,(0,e.jsxs)(s.p,{children:["You can read more about writing stories in the ",(0,e.jsx)(s.a,{href:"https://storybook.js.org/docs/react/writing-stories/introduction",rel:"nofollow",children:"Storybook JS docs"})]}),`
`,(0,e.jsx)(s.h2,{id:"edit-components-live",children:"Edit components live"}),`
`,(0,e.jsx)(s.p,{children:"To run this locally, just run:"}),`
`,(0,e.jsx)(s.pre,{children:(0,e.jsx)(s.code,{children:`pnpm run storybook:dev
`})}),`
`,(0,e.jsx)(s.p,{children:"Any edits to SCSS, HTML, JSX or other files should be hot-loaded so you can see changes to styles or components."})]})}function i(a={}){const{wrapper:s}={...(0,d.a)(),...a.components};return s?(0,e.jsx)(s,{...a,children:(0,e.jsx)(r,{...a})}):r(a)}},"../../../node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/components sync recursive":m=>{function o(n){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/components sync recursive",m.exports=o},"../../../node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/theming sync recursive":m=>{function o(n){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/theming sync recursive",m.exports=o},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":m=>{function o(n){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",m.exports=o}}]);})();
