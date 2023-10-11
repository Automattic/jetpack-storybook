(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7249,6501,7946],{"../../../node_modules/.pnpm/@babel+runtime@7.23.1/node_modules/@babel/runtime/helpers/esm/extends.js":(u,_,s)=>{"use strict";s.d(_,{Z:()=>r});function r(){return r=Object.assign?Object.assign.bind():function(e){for(var c=1;c<arguments.length;c++){var a=arguments[c];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},r.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(u,_,s)=>{"use strict";var r;s.d(_,{L:()=>t,j:()=>m});var e=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=function(d){return d()},a=(r||(r=s.t(e,2)))["useInsertionEffect"]?(r||(r=s.t(e,2)))["useInsertionEffect"]:!1,t=a||c,m=a||e.useLayoutEffect},"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js":(u,_,s)=>{"use strict";s.r(_),s.d(_,{MDXContext:()=>e,MDXProvider:()=>m,useMDXComponents:()=>a,withMDXComponents:()=>c});var r=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const e=r.createContext({});function c(o){return d;function d(l){const i=a(l.components);return r.createElement(o,{...l,allComponents:i})}}function a(o){const d=r.useContext(e);return r.useMemo(()=>typeof o=="function"?o(d):{...d,...o},[d,o])}const t={};function m({components:o,children:d,disableParentContext:l}){let i;return l?i=typeof o=="function"?o({}):o||t:i=a(o),r.createElement(e.Provider,{value:i},d)}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":(u,_,s)=>{"use strict";var r=Object.defineProperty,e=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,t=(l,i,p,n)=>{if(i&&typeof i=="object"||typeof i=="function")for(let j of c(i))!a.call(l,j)&&j!==p&&r(l,j,{get:()=>i[j],enumerable:!(n=e(i,j))||n.enumerable});return l},m=(l,i,p)=>(t(l,i,"default"),p&&t(p,i,"default")),o=l=>t(r({},"__esModule",{value:!0}),l),d={};u.exports=o(d),m(d,s("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js"),u.exports)},"../components/components/dialog/stories/js-components.components.dialog.mdx":(u,_,s)=>{"use strict";s.r(_),s.d(_,{default:()=>i});var r=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=s("../../../node_modules/.pnpm/@storybook+addon-docs@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),a=s.n(c),t=s("../../../node_modules/.pnpm/@storybook+blocks@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),m=s("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js"),o=s("../components/components/dialog/stories/js-components.components.dialog.stories.js");function d(p){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,c.useMDXComponents)(),p.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.h_,{of:o}),`
`,(0,e.jsx)(n.h1,{id:"dialog",children:"Dialog"}),`
`,(0,e.jsxs)(n.p,{children:["Render a two-sections layout simple composition, built based on the primary ",(0,e.jsx)("a",{href:"?path=/docs/js-packages-components-layout--default",children:"Layout component"}),"."]}),`
`,(0,e.jsx)(t.Hw,{language:"jsx",code:m.C`
  import Dialog from '@automattic/jetpack-components';
  // ...

  <Dialog
    primary={ <PrimaryComponent /> }
    secondary={ <SecondaryComponent /> }
    isTwoSections={ true }
  />
  `}),`
`,(0,e.jsx)(t.oG,{of:o.Readme}),`
`,(0,e.jsx)(n.p,{children:"The cols number for each section depends on the viewport width. The following table shows how they are defined:"}),`
`,(0,e.jsx)(n.p,{children:`\xA0 | Small (sm) | Medium (md) | Large (lg)
------|------|------|-----
primary | 4 | 5 | 7
secondary | 4 | 3 | 5`}),`
`,(0,e.jsxs)(n.p,{children:["Finally, when the Dialog is defined as not a two-sections layout (",(0,e.jsx)("a",{href:"#istwosections",children:"isTwoSections property"}),"), the secondary section won't show in Mobile (sm breakpoint)."]}),`
`,(0,e.jsx)(n.h2,{id:"api",children:"API"}),`
`,(0,e.jsx)(n.p,{children:"The components accepts the following properties:"}),`
`,(0,e.jsx)(n.h3,{id:"primary",children:"primary"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["Type: ",(0,e.jsx)(n.code,{children:"React.ReactNode"}),", ",(0,e.jsx)(n.code,{children:"string"}),"."]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"Primary-section content."}),`
`,(0,e.jsx)(n.h3,{id:"secondary",children:"secondary"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["Type: ",(0,e.jsx)(n.code,{children:"React.ReactNode"}),", ",(0,e.jsx)(n.code,{children:"string"}),"."]}),`
`,(0,e.jsx)(n.li,{children:"Optional."}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"Primary-section content."}),`
`,(0,e.jsx)(n.h3,{id:"istwosections",children:"isTwoSections"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["Type: ",(0,e.jsx)(n.code,{children:"boolean"}),"."]}),`
`,(0,e.jsx)(n.li,{children:"Optional."}),`
`,(0,e.jsxs)(n.li,{children:["Default: ",(0,e.jsx)(n.code,{children:"false"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"It handles two sections layout:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Add card styles to the main wrapper when it is not a two-sections layout."}),`
`,(0,e.jsx)(n.li,{children:"When it's false, the secondary section won't show in Mobile."}),`
`]})]})}function l(p={}){const{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),p.components);return n?(0,e.jsx)(n,Object.assign({},p,{children:(0,e.jsx)(d,p)})):d(p)}const i=l},"../components/components/dialog/stories/js-components.components.dialog.stories.js":(u,_,s)=>{var h,y,x;"use strict";s.r(_),s.d(_,{Readme:()=>j,__namedExportsOrder:()=>g,default:()=>n});var r=s("../components/components/dialog/index.tsx"),e=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=s.n(e),a=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss"),t={};t.insert="head",t.singleton=!1;var m=c()(a.Z,t);const o=a.Z.locals||{};var d=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=`import Dialog from '../index';
import styles from './style.module.scss';

const Template = ( { isTwoSections } ) => (
	<Dialog
		primary={
			<div className={ styles.section }>
				<div>Primary</div>
				<strong>4 | 5 | 7</strong>
			</div>
		}
		secondary={
			<div className={ styles.section }>
				<div>Secondary</div>
				<strong>4 | 3 | 5</strong>
				<div>
					isTwoSections: <strong>{ isTwoSections ? 'yes' : 'no' }</strong>
				</div>
			</div>
		}
		isTwoSections={ isTwoSections }
	/>
);

export default {
	title: 'JS Packages/Components/Dialog',
	component: Dialog,
};

export const Readme = {
	render: Template.bind( {} ),
	name: 'Readme',

	args: {
		isTwoSections: true,
	},
};
`,i={Readme:{startLoc:{col:22,line:19},endLoc:{col:1,line:25},startBody:{col:22,line:19},endBody:{col:1,line:25}}};const p=v=>{let{isTwoSections:f}=v;return(0,d.jsx)(r.Z,{primary:(0,d.jsxs)("div",{className:o.section,children:[(0,d.jsx)("div",{children:"Primary"}),(0,d.jsx)("strong",{children:"4 | 5 | 7"})]}),secondary:(0,d.jsxs)("div",{className:o.section,children:[(0,d.jsx)("div",{children:"Secondary"}),(0,d.jsx)("strong",{children:"4 | 3 | 5"}),(0,d.jsxs)("div",{children:["isTwoSections: ",(0,d.jsx)("strong",{children:f?"yes":"no"})]})]}),isTwoSections:f})};p.displayName="Template";const n={parameters:{storySource:{source:`import Dialog from '../index';
import styles from './style.module.scss';
const Template = ({
  isTwoSections
}) => <Dialog primary={<div className={styles.section}>
                <div>Primary</div>
                <strong>4 | 5 | 7</strong>
            </div>} secondary={<div className={styles.section}>
                <div>Secondary</div>
                <strong>4 | 3 | 5</strong>
                <div>
                    isTwoSections: <strong>{isTwoSections ? 'yes' : 'no'}</strong>
                </div>
            </div>} isTwoSections={isTwoSections} />;
export default {
  title: 'JS Packages/Components/Dialog',
  component: Dialog
};
export const Readme = {
  render: Template.bind({}),
  name: 'Readme',
  args: {
    isTwoSections: true
  }
};
Readme.parameters = {
  ...Readme.parameters,
  docs: {
    ...Readme.parameters?.docs,
    source: {
      originalSource: "{\\n  render: Template.bind({}),\\n  name: 'Readme',\\n  args: {\\n    isTwoSections: true\\n  }\\n}",
      ...Readme.parameters?.docs?.source
    }
  }
};`,locationsMap:{readme:{startLoc:{col:22,line:19},endLoc:{col:1,line:25},startBody:{col:22,line:19},endBody:{col:1,line:25}}}}},title:"JS Packages/Components/Dialog",component:r.Z},j={render:p.bind({}),name:"Readme",args:{isTwoSections:!0}};j.parameters={...j.parameters,docs:{...(h=j.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Readme',
  args: {
    isTwoSections: true
  }
}`,...(x=(y=j.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const g=["Readme"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(u,_)=>{var s,r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var e={}.hasOwnProperty,c="[native code]";function a(){for(var t=[],m=0;m<arguments.length;m++){var o=arguments[m];if(o){var d=typeof o;if(d==="string"||d==="number")t.push(o);else if(Array.isArray(o)){if(o.length){var l=a.apply(null,o);l&&t.push(l)}}else if(d==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){t.push(o.toString());continue}for(var i in o)e.call(o,i)&&o[i]&&t.push(i)}}}return t.join(" ")}u.exports?(a.default=a,u.exports=a):(s=[],r=function(){return a}.apply(_,s),r!==void 0&&(u.exports=r))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss":(u,_,s)=>{"use strict";s.d(_,{Z:()=>m});var r=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=s.n(r),c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=s.n(c),t=a()(e());t.push([u.id,".RTMIETP7fe2d9xWFfYKF{display:flex;padding:calc(var(--spacing-base)*6) 0;border:1px dotted var(--jp-green-60);box-sizing:border-box;align-items:center;color:var(--jp-white);flex-wrap:nowrap;flex-direction:column;justify-content:space-between;height:calc(var(--spacing-base)*20);flex-grow:2;background:repeating-linear-gradient(-45deg, var(--jp-green-50), var(--jp-green-50) 20px, var(--jp-green-60) 20px, var(--jp-green-60) 40px)}",""]),t.locals={section:"RTMIETP7fe2d9xWFfYKF"};const m=t}}]);})();
