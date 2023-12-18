(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3450,7946],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js":(m,d,n)=>{"use strict";n.r(d),n.d(d,{MDXContext:()=>e,MDXProvider:()=>u,useMDXComponents:()=>l,withMDXComponents:()=>i});var _=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const e=_.createContext({});function i(s){return c;function c(r){const o=l(r.components);return _.createElement(s,{...r,allComponents:o})}}function l(s){const c=_.useContext(e);return _.useMemo(()=>typeof s=="function"?s(c):{...c,...s},[c,s])}const a={};function u({components:s,children:c,disableParentContext:r}){let o;return r?o=typeof s=="function"?s({}):s||a:o=l(s),_.createElement(e.Provider,{value:o},c)}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":(m,d,n)=>{"use strict";var _=Object.defineProperty,e=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,a=(r,o,t,h)=>{if(o&&typeof o=="object"||typeof o=="function")for(let p of i(o))!l.call(r,p)&&p!==t&&_(r,p,{get:()=>o[p],enumerable:!(h=e(o,p))||h.enumerable});return r},u=(r,o,t)=>(a(r,o,"default"),t&&a(t,o,"default")),s=r=>a(_({},"__esModule",{value:!0}),r),c={};m.exports=s(c),u(c,n("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js"),m.exports)},"./storybook/stories/docs/howto.mdx":(m,d,n)=>{"use strict";n.r(d),n.d(d,{default:()=>r});var _=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=n("../../../node_modules/.pnpm/@storybook+addon-docs@7.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),l=n.n(i),a=n("../../../node_modules/.pnpm/@storybook+blocks@7.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),u=n("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js");function s(o){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",pre:"pre"},(0,i.useMDXComponents)(),o.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.h_,{title:"Docs/HowTo"}),`
`,(0,e.jsx)(t.h1,{id:"how-to-use-this-tool",children:"How to use this tool"}),`
`,(0,e.jsx)(t.p,{children:"The Jetpack Components Library allows you to discover, test and live-edit Jetpack visual component."}),`
`,(0,e.jsx)(t.h2,{id:"publish-component-stories",children:"Publish component stories"}),`
`,(0,e.jsxs)(t.p,{children:["Anywhere in a supported package, create one or more directories called ",(0,e.jsx)(t.code,{children:"stories"})," (e.g. src/components/my-component/stories)."]}),`
`,(0,e.jsx)(t.p,{children:"In that directory, create an index.stories.js or index.stories.jsx file, like this:"}),`
`,(0,e.jsx)(a.Hw,{language:"jsx",code:u.C`
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
`,(0,e.jsxs)(t.p,{children:["You can read more about writing stories in the ",(0,e.jsx)(t.a,{href:"https://storybook.js.org/docs/react/writing-stories/introduction",target:"_blank",rel:"nofollow noopener noreferrer",children:"Storybook JS docs"})]}),`
`,(0,e.jsx)(t.h2,{id:"edit-components-live",children:"Edit components live"}),`
`,(0,e.jsx)(t.p,{children:"To run this locally, just run:"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{children:`pnpm run storybook:dev
`})}),`
`,(0,e.jsx)(t.p,{children:"Any edits to SCSS, HTML, JSX or other files should be hot-loaded so you can see changes to styles or components."})]})}function c(o={}){const{wrapper:t}=Object.assign({},(0,i.useMDXComponents)(),o.components);return t?(0,e.jsx)(t,Object.assign({},o,{children:(0,e.jsx)(s,o)})):s(o)}const r=c},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":m=>{function d(n){var _=new Error("Cannot find module '"+n+"'");throw _.code="MODULE_NOT_FOUND",_}d.keys=()=>[],d.resolve=d,d.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",m.exports=d}}]);})();
