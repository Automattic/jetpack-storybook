"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3450,7946],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js":(p,i,s)=>{s.r(i),s.d(i,{MDXContext:()=>e,MDXProvider:()=>l,useMDXComponents:()=>m,withMDXComponents:()=>a});var _=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const e=_.createContext({});function a(n){return d;function d(r){const o=m(r.components);return _.createElement(n,{...r,allComponents:o})}}function m(n){const d=_.useContext(e);return _.useMemo(()=>typeof n=="function"?n(d):{...d,...n},[d,n])}const c={};function l({components:n,children:d,disableParentContext:r}){let o;return r?o=typeof n=="function"?n({}):n||c:o=m(n),_.createElement(e.Provider,{value:o},d)}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":(p,i,s)=>{var _=Object.defineProperty,e=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,m=Object.prototype.hasOwnProperty,c=(r,o,t,h)=>{if(o&&typeof o=="object"||typeof o=="function")for(let u of a(o))!m.call(r,u)&&u!==t&&_(r,u,{get:()=>o[u],enumerable:!(h=e(o,u))||h.enumerable});return r},l=(r,o,t)=>(c(r,o,"default"),t&&c(t,o,"default")),n=r=>c(_({},"__esModule",{value:!0}),r),d={};p.exports=n(d),l(d,s("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js"),p.exports)},"./storybook/stories/docs/howto.mdx":(p,i,s)=>{s.r(i),s.d(i,{default:()=>r});var _=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=s("../../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),m=s.n(a),c=s("../../../node_modules/.pnpm/@storybook+blocks@7.4.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),l=s("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js");function n(o){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",pre:"pre"},(0,a.useMDXComponents)(),o.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(c.h_,{title:"Docs/HowTo"}),`
`,(0,e.jsx)(t.h1,{id:"how-to-use-this-tool",children:"How to use this tool"}),`
`,(0,e.jsx)(t.p,{children:"The Jetpack Components Library allows you to discover, test and live-edit Jetpack visual component."}),`
`,(0,e.jsx)(t.h2,{id:"publish-component-stories",children:"Publish component stories"}),`
`,(0,e.jsxs)(t.p,{children:["Anywhere in a supported package, create one or more directories called ",(0,e.jsx)(t.code,{children:"stories"})," (e.g. src/components/my-component/stories)."]}),`
`,(0,e.jsx)(t.p,{children:"In that directory, create an index.stories.js or index.stories.jsx file, like this:"}),`
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
`,(0,e.jsxs)(t.p,{children:["You can read more about writing stories in the ",(0,e.jsx)(t.a,{href:"https://storybook.js.org/docs/react/writing-stories/introduction",target:"_blank",rel:"nofollow noopener noreferrer",children:"Storybook JS docs"})]}),`
`,(0,e.jsx)(t.h2,{id:"edit-components-live",children:"Edit components live"}),`
`,(0,e.jsx)(t.p,{children:"To run this locally, just run:"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{children:`pnpm run storybook:dev
`})}),`
`,(0,e.jsx)(t.p,{children:"Any edits to SCSS, HTML, JSX or other files should be hot-loaded so you can see changes to styles or components."})]})}function d(o={}){const{wrapper:t}=Object.assign({},(0,a.useMDXComponents)(),o.components);return t?(0,e.jsx)(t,Object.assign({},o,{children:(0,e.jsx)(n,o)})):n(o)}const r=d}}]);})();
