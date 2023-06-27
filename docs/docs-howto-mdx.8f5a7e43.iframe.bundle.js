(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3450,7946],{"../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/extends.js":(u,l,t)=>{"use strict";t.d(l,{Z:()=>s});function s(){return s=Object.assign?Object.assign.bind():function(e){for(var _=1;_<arguments.length;_++){var i=arguments[_];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e[d]=i[d])}return e},s.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(u,l,t)=>{"use strict";var s;t.d(l,{L:()=>d,j:()=>m});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=function(a){return a()},i=(s||(s=t.t(e,2)))["useInsertionEffect"]?(s||(s=t.t(e,2)))["useInsertionEffect"]:!1,d=i||_,m=i||e.useLayoutEffect},"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js":(u,l,t)=>{"use strict";t.r(l),t.d(l,{MDXContext:()=>e,MDXProvider:()=>m,useMDXComponents:()=>i,withMDXComponents:()=>_});var s=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const e=s.createContext({});function _(r){return a;function a(c){const o=i(c.components);return s.createElement(r,{...c,allComponents:o})}}function i(r){const a=s.useContext(e);return s.useMemo(()=>typeof r=="function"?r(a):{...a,...r},[a,r])}const d={};function m({components:r,children:a,disableParentContext:c}){let o;return c?o=typeof r=="function"?r({}):r||d:o=i(r),s.createElement(e.Provider,{value:o},a)}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":(u,l,t)=>{var s=Object.defineProperty,e=Object.getOwnPropertyDescriptor,_=Object.getOwnPropertyNames,i=Object.prototype.hasOwnProperty,d=(c,o,n,h)=>{if(o&&typeof o=="object"||typeof o=="function")for(let p of _(o))!i.call(c,p)&&p!==n&&s(c,p,{get:()=>o[p],enumerable:!(h=e(o,p))||h.enumerable});return c},m=(c,o,n)=>(d(c,o,"default"),n&&d(n,o,"default")),r=c=>d(s({},"__esModule",{value:!0}),c),a={};u.exports=r(a),m(a,t("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js"),u.exports)},"./storybook/stories/docs/howto.mdx":(u,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>c});var s=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=t("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),i=t.n(_),d=t("../../../node_modules/.pnpm/@storybook+blocks@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),m=t("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js");function r(o){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",pre:"pre"},(0,_.useMDXComponents)(),o.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(d.h_,{title:"Docs/HowTo"}),`
`,(0,e.jsx)(n.h1,{id:"how-to-use-this-tool",children:"How to use this tool"}),`
`,(0,e.jsx)(n.p,{children:"The Jetpack Components Library allows you to discover, test and live-edit Jetpack visual component."}),`
`,(0,e.jsx)(n.h2,{id:"publish-component-stories",children:"Publish component stories"}),`
`,(0,e.jsxs)(n.p,{children:["Anywhere in a supported package, create one or more directories called ",(0,e.jsx)(n.code,{children:"stories"})," (e.g. src/components/my-component/stories)."]}),`
`,(0,e.jsx)(n.p,{children:"In that directory, create an index.stories.js or index.stories.jsx file, like this:"}),`
`,(0,e.jsx)(d.Hw,{language:"jsx",code:m.C`
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
`,(0,e.jsxs)(n.p,{children:["You can read more about writing stories in the ",(0,e.jsx)(n.a,{href:"https://storybook.js.org/docs/react/writing-stories/introduction",target:"_blank",rel:"nofollow noopener noreferrer",children:"Storybook JS docs"})]}),`
`,(0,e.jsx)(n.h2,{id:"edit-components-live",children:"Edit components live"}),`
`,(0,e.jsx)(n.p,{children:"To run this locally, just run:"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{children:`pnpm run storybook:dev
`})}),`
`,(0,e.jsx)(n.p,{children:"Any edits to SCSS, HTML, JSX or other files should be hot-loaded so you can see changes to styles or components."})]})}function a(o={}){const{wrapper:n}=Object.assign({},(0,_.useMDXComponents)(),o.components);return n?(0,e.jsx)(n,Object.assign({},o,{children:(0,e.jsx)(r,o)})):r(o)}const c=a}}]);})();
