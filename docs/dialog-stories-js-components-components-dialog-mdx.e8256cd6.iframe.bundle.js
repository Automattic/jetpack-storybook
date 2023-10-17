(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7249,6501],{"../../../node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/extends.js":(_,c,n)=>{"use strict";n.d(c,{Z:()=>d});function d(){return d=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},d.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(_,c,n)=>{"use strict";var d;n.d(c,{L:()=>o,j:()=>l});var e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=function(i){return i()},a=(d||(d=n.t(e,2)))["useInsertionEffect"]?(d||(d=n.t(e,2)))["useInsertionEffect"]:!1,o=a||r,l=a||e.useLayoutEffect},"../components/components/dialog/stories/js-components.components.dialog.mdx":(_,c,n)=>{"use strict";n.r(c),n.d(c,{default:()=>p});var d=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),r=n("../../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),a=n.n(r),o=n("../../../node_modules/.pnpm/@storybook+blocks@7.4.6_@types+react-dom@18.2.7_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),l=n("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js"),t=n("../components/components/dialog/stories/js-components.components.dialog.stories.js");function i(m){const s=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,r.useMDXComponents)(),m.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.h_,{of:t}),`
`,(0,e.jsx)(s.h1,{id:"dialog",children:"Dialog"}),`
`,(0,e.jsxs)(s.p,{children:["Render a two-sections layout simple composition, built based on the primary ",(0,e.jsx)("a",{href:"?path=/docs/js-packages-components-layout--default",children:"Layout component"}),"."]}),`
`,(0,e.jsx)(o.Hw,{language:"jsx",code:l.C`
  import Dialog from '@automattic/jetpack-components';
  // ...

  <Dialog
    primary={ <PrimaryComponent /> }
    secondary={ <SecondaryComponent /> }
    isTwoSections={ true }
  />
  `}),`
`,(0,e.jsx)(o.oG,{of:t.Readme}),`
`,(0,e.jsx)(s.p,{children:"The cols number for each section depends on the viewport width. The following table shows how they are defined:"}),`
`,(0,e.jsx)(s.p,{children:`\xA0 | Small (sm) | Medium (md) | Large (lg)
------|------|------|-----
primary | 4 | 5 | 7
secondary | 4 | 3 | 5`}),`
`,(0,e.jsxs)(s.p,{children:["Finally, when the Dialog is defined as not a two-sections layout (",(0,e.jsx)("a",{href:"#istwosections",children:"isTwoSections property"}),"), the secondary section won't show in Mobile (sm breakpoint)."]}),`
`,(0,e.jsx)(s.h2,{id:"api",children:"API"}),`
`,(0,e.jsx)(s.p,{children:"The components accepts the following properties:"}),`
`,(0,e.jsx)(s.h3,{id:"primary",children:"primary"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:["Type: ",(0,e.jsx)(s.code,{children:"React.ReactNode"}),", ",(0,e.jsx)(s.code,{children:"string"}),"."]}),`
`]}),`
`,(0,e.jsx)(s.p,{children:"Primary-section content."}),`
`,(0,e.jsx)(s.h3,{id:"secondary",children:"secondary"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:["Type: ",(0,e.jsx)(s.code,{children:"React.ReactNode"}),", ",(0,e.jsx)(s.code,{children:"string"}),"."]}),`
`,(0,e.jsx)(s.li,{children:"Optional."}),`
`]}),`
`,(0,e.jsx)(s.p,{children:"Primary-section content."}),`
`,(0,e.jsx)(s.h3,{id:"istwosections",children:"isTwoSections"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:["Type: ",(0,e.jsx)(s.code,{children:"boolean"}),"."]}),`
`,(0,e.jsx)(s.li,{children:"Optional."}),`
`,(0,e.jsxs)(s.li,{children:["Default: ",(0,e.jsx)(s.code,{children:"false"})]}),`
`]}),`
`,(0,e.jsx)(s.p,{children:"It handles two sections layout:"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsx)(s.li,{children:"Add card styles to the main wrapper when it is not a two-sections layout."}),`
`,(0,e.jsx)(s.li,{children:"When it's false, the secondary section won't show in Mobile."}),`
`]})]})}function u(m={}){const{wrapper:s}=Object.assign({},(0,r.useMDXComponents)(),m.components);return s?(0,e.jsx)(s,Object.assign({},m,{children:(0,e.jsx)(i,m)})):i(m)}const p=u},"../components/components/dialog/stories/js-components.components.dialog.stories.js":(_,c,n)=>{var h,y,x;"use strict";n.r(c),n.d(c,{Readme:()=>j,__namedExportsOrder:()=>f,default:()=>s});var d=n("../components/components/dialog/index.tsx"),e=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=n.n(e),a=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss"),o={};o.insert="head",o.singleton=!1;var l=r()(a.Z,o);const t=a.Z.locals||{};var i=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=`import Dialog from '../index';
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
`,p={Readme:{startLoc:{col:22,line:19},endLoc:{col:1,line:25},startBody:{col:22,line:19},endBody:{col:1,line:25}}};const m=v=>{let{isTwoSections:g}=v;return(0,i.jsx)(d.Z,{primary:(0,i.jsxs)("div",{className:t.section,children:[(0,i.jsx)("div",{children:"Primary"}),(0,i.jsx)("strong",{children:"4 | 5 | 7"})]}),secondary:(0,i.jsxs)("div",{className:t.section,children:[(0,i.jsx)("div",{children:"Secondary"}),(0,i.jsx)("strong",{children:"4 | 3 | 5"}),(0,i.jsxs)("div",{children:["isTwoSections: ",(0,i.jsx)("strong",{children:g?"yes":"no"})]})]}),isTwoSections:g})};m.displayName="Template";const s={parameters:{storySource:{source:`import Dialog from '../index';
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
};`,locationsMap:{readme:{startLoc:{col:22,line:19},endLoc:{col:1,line:25},startBody:{col:22,line:19},endBody:{col:1,line:25}}}}},title:"JS Packages/Components/Dialog",component:d.Z},j={render:m.bind({}),name:"Readme",args:{isTwoSections:!0}};j.parameters={...j.parameters,docs:{...(h=j.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Readme',
  args: {
    isTwoSections: true
  }
}`,...(x=(y=j.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const f=["Readme"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(_,c)=>{var n,d;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var e={}.hasOwnProperty,r="[native code]";function a(){for(var o=[],l=0;l<arguments.length;l++){var t=arguments[l];if(t){var i=typeof t;if(i==="string"||i==="number")o.push(t);else if(Array.isArray(t)){if(t.length){var u=a.apply(null,t);u&&o.push(u)}}else if(i==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){o.push(t.toString());continue}for(var p in t)e.call(t,p)&&t[p]&&o.push(p)}}}return o.join(" ")}_.exports?(a.default=a,_.exports=a):(n=[],d=function(){return a}.apply(c,n),d!==void 0&&(_.exports=d))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss":(_,c,n)=>{"use strict";n.d(c,{Z:()=>l});var d=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=n.n(d),r=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=n.n(r),o=a()(e());o.push([_.id,".RTMIETP7fe2d9xWFfYKF{display:flex;padding:calc(var(--spacing-base)*6) 0;border:1px dotted var(--jp-green-60);box-sizing:border-box;align-items:center;color:var(--jp-white);flex-wrap:nowrap;flex-direction:column;justify-content:space-between;height:calc(var(--spacing-base)*20);flex-grow:2;background:repeating-linear-gradient(-45deg, var(--jp-green-50), var(--jp-green-50) 20px, var(--jp-green-60) 20px, var(--jp-green-60) 40px)}",""]),o.locals={section:"RTMIETP7fe2d9xWFfYKF"};const l=o}}]);})();
