(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7249,6501,7946],{"../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js":(p,_,s)=>{"use strict";s.d(_,{Z:()=>d});function d(){return d=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var r=arguments[l];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},d.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(p,_,s)=>{"use strict";var d;s.d(_,{L:()=>t,j:()=>c});var e=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=function(a){return a()},r=(d||(d=s.t(e,2)))["useInsertionEffect"]?(d||(d=s.t(e,2)))["useInsertionEffect"]:!1,t=r||l,c=r||e.useLayoutEffect},"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js":(p,_,s)=>{"use strict";s.r(_),s.d(_,{MDXContext:()=>e,MDXProvider:()=>c,useMDXComponents:()=>r,withMDXComponents:()=>l});var d=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const e=d.createContext({});function l(n){return a;function a(m){const i=r(m.components);return d.createElement(n,{...m,allComponents:i})}}function r(n){const a=d.useContext(e);return d.useMemo(()=>typeof n=="function"?n(a):{...a,...n},[a,n])}const t={};function c({components:n,children:a,disableParentContext:m}){let i;return m?i=typeof n=="function"?n({}):n||t:i=r(n),d.createElement(e.Provider,{value:i},a)}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":(p,_,s)=>{"use strict";var d=Object.defineProperty,e=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,r=Object.prototype.hasOwnProperty,t=(m,i,u,o)=>{if(i&&typeof i=="object"||typeof i=="function")for(let j of l(i))!r.call(m,j)&&j!==u&&d(m,j,{get:()=>i[j],enumerable:!(o=e(i,j))||o.enumerable});return m},c=(m,i,u)=>(t(m,i,"default"),u&&t(u,i,"default")),n=m=>t(d({},"__esModule",{value:!0}),m),a={};p.exports=n(a),c(a,s("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js"),p.exports)},"../components/components/dialog/stories/js-components.components.dialog.mdx":(p,_,s)=>{"use strict";s.r(_),s.d(_,{default:()=>i});var d=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=s("../../../node_modules/.pnpm/@storybook+addon-docs@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),r=s.n(l),t=s("../../../node_modules/.pnpm/@storybook+blocks@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),c=s("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js"),n=s("../components/components/dialog/stories/js-components.components.dialog.stories.js");function a(u){const o=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,l.useMDXComponents)(),u.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.h_,{of:n}),`
`,(0,e.jsx)(o.h1,{id:"dialog",children:"Dialog"}),`
`,(0,e.jsxs)(o.p,{children:["Render a two-sections layout simple composition, built based on the primary ",(0,e.jsx)("a",{href:"?path=/docs/js-packages-components-layout--default",children:"Layout component"}),"."]}),`
`,(0,e.jsx)(t.Hw,{language:"jsx",code:c.C`
  import Dialog from '@automattic/jetpack-components';
  // ...

  <Dialog
    primary={ <PrimaryComponent /> }
    secondary={ <SecondaryComponent /> }
    isTwoSections={ true }
  />
  `}),`
`,(0,e.jsx)(t.oG,{of:n.Readme}),`
`,(0,e.jsx)(o.p,{children:"The cols number for each section depends on the viewport width. The following table shows how they are defined:"}),`
`,(0,e.jsx)(o.p,{children:`\xA0 | Small (sm) | Medium (md) | Large (lg)
------|------|------|-----
primary | 4 | 5 | 7
secondary | 4 | 3 | 5`}),`
`,(0,e.jsxs)(o.p,{children:["Finally, when the Dialog is defined as not a two-sections layout (",(0,e.jsx)("a",{href:"#istwosections",children:"isTwoSections property"}),"), the secondary section won't show in Mobile (sm breakpoint)."]}),`
`,(0,e.jsx)(o.h2,{id:"api",children:"API"}),`
`,(0,e.jsx)(o.p,{children:"The components accepts the following properties:"}),`
`,(0,e.jsx)(o.h3,{id:"primary",children:"primary"}),`
`,(0,e.jsxs)(o.ul,{children:[`
`,(0,e.jsxs)(o.li,{children:["Type: ",(0,e.jsx)(o.code,{children:"React.ReactNode"}),", ",(0,e.jsx)(o.code,{children:"string"}),"."]}),`
`]}),`
`,(0,e.jsx)(o.p,{children:"Primary-section content."}),`
`,(0,e.jsx)(o.h3,{id:"secondary",children:"secondary"}),`
`,(0,e.jsxs)(o.ul,{children:[`
`,(0,e.jsxs)(o.li,{children:["Type: ",(0,e.jsx)(o.code,{children:"React.ReactNode"}),", ",(0,e.jsx)(o.code,{children:"string"}),"."]}),`
`,(0,e.jsx)(o.li,{children:"Optional."}),`
`]}),`
`,(0,e.jsx)(o.p,{children:"Primary-section content."}),`
`,(0,e.jsx)(o.h3,{id:"istwosections",children:"isTwoSections"}),`
`,(0,e.jsxs)(o.ul,{children:[`
`,(0,e.jsxs)(o.li,{children:["Type: ",(0,e.jsx)(o.code,{children:"boolean"}),"."]}),`
`,(0,e.jsx)(o.li,{children:"Optional."}),`
`,(0,e.jsxs)(o.li,{children:["Default: ",(0,e.jsx)(o.code,{children:"false"})]}),`
`]}),`
`,(0,e.jsx)(o.p,{children:"It handles two sections layout:"}),`
`,(0,e.jsxs)(o.ul,{children:[`
`,(0,e.jsx)(o.li,{children:"Add card styles to the main wrapper when it is not a two-sections layout."}),`
`,(0,e.jsx)(o.li,{children:"When it's false, the secondary section won't show in Mobile."}),`
`]})]})}function m(u={}){const{wrapper:o}=Object.assign({},(0,l.useMDXComponents)(),u.components);return o?(0,e.jsx)(o,Object.assign({},u,{children:(0,e.jsx)(a,u)})):a(u)}const i=m},"../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":(p,_,s)=>{"use strict";s.d(_,{Z:()=>l});var d=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function e(r){return r&&typeof window!="undefined"&&typeof window.matchMedia=="function"?window.matchMedia(r):null}function l(r){const t=(0,d.useMemo)(()=>{const c=e(r);return{subscribe(n){return c?(c.addEventListener("change",n),()=>{c.removeEventListener("change",n)}):()=>{}},getValue(){var n;return(n=c==null?void 0:c.matches)!==null&&n!==void 0?n:!1}}},[r]);return(0,d.useSyncExternalStore)(t.subscribe,t.getValue,()=>!1)}},"../components/components/dialog/stories/js-components.components.dialog.stories.js":(p,_,s)=>{var h,f,y;"use strict";s.r(_),s.d(_,{Readme:()=>j,__namedExportsOrder:()=>g,default:()=>o});var d=s("../components/components/dialog/index.tsx"),e=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=s.n(e),r=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss"),t={};t.insert="head",t.singleton=!1;var c=l()(r.Z,t);const n=r.Z.locals||{};var a=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=`import Dialog from '../index';
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
`,i={Readme:{startLoc:{col:22,line:19},endLoc:{col:1,line:25},startBody:{col:22,line:19},endBody:{col:1,line:25}}};const u=v=>{let{isTwoSections:x}=v;return(0,a.jsx)(d.Z,{primary:(0,a.jsxs)("div",{className:n.section,children:[(0,a.jsx)("div",{children:"Primary"}),(0,a.jsx)("strong",{children:"4 | 5 | 7"})]}),secondary:(0,a.jsxs)("div",{className:n.section,children:[(0,a.jsx)("div",{children:"Secondary"}),(0,a.jsx)("strong",{children:"4 | 3 | 5"}),(0,a.jsxs)("div",{children:["isTwoSections: ",(0,a.jsx)("strong",{children:x?"yes":"no"})]})]}),isTwoSections:x})};u.displayName="Template";const o={parameters:{storySource:{source:`import Dialog from '../index';
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
};`,locationsMap:{readme:{startLoc:{col:22,line:19},endLoc:{col:1,line:25},startBody:{col:22,line:19},endBody:{col:1,line:25}}}}},title:"JS Packages/Components/Dialog",component:d.Z},j={render:u.bind({}),name:"Readme",args:{isTwoSections:!0}};j.parameters={...j.parameters,docs:{...(h=j.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Readme',
  args: {
    isTwoSections: true
  }
}`,...(y=(f=j.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const g=["Readme"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(p,_)=>{var s,d;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var e={}.hasOwnProperty,l="[native code]";function r(){for(var t=[],c=0;c<arguments.length;c++){var n=arguments[c];if(n){var a=typeof n;if(a==="string"||a==="number")t.push(n);else if(Array.isArray(n)){if(n.length){var m=r.apply(null,n);m&&t.push(m)}}else if(a==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var i in n)e.call(n,i)&&n[i]&&t.push(i)}}}return t.join(" ")}p.exports?(r.default=r,p.exports=r):(s=[],d=function(){return r}.apply(_,s),d!==void 0&&(p.exports=d))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss":(p,_,s)=>{"use strict";s.d(_,{Z:()=>c});var d=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=s.n(d),l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=s.n(l),t=r()(e());t.push([p.id,".RTMIETP7fe2d9xWFfYKF{display:flex;padding:calc(var(--spacing-base)*6) 0;border:1px dotted var(--jp-green-60);box-sizing:border-box;align-items:center;color:var(--jp-white);flex-wrap:nowrap;flex-direction:column;justify-content:space-between;height:calc(var(--spacing-base)*20);flex-grow:2;background:repeating-linear-gradient(-45deg, var(--jp-green-50), var(--jp-green-50) 20px, var(--jp-green-60) 20px, var(--jp-green-60) 40px)}",""]),t.locals={section:"RTMIETP7fe2d9xWFfYKF"};const c=t}}]);})();
