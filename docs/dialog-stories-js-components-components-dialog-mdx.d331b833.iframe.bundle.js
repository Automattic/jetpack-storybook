(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7249,6501],{"../../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/extends.js":(l,d,n)=>{"use strict";n.d(d,{Z:()=>t});function t(){return t=Object.assign?Object.assign.bind():function(e){for(var c=1;c<arguments.length;c++){var a=arguments[c];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},t.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(l,d,n)=>{"use strict";var t;n.d(d,{L:()=>o,j:()=>_});var e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=function(r){return r()},a=(t||(t=n.t(e,2)))["useInsertionEffect"]?(t||(t=n.t(e,2)))["useInsertionEffect"]:!1,o=a||c,_=a||e.useLayoutEffect},"../components/components/dialog/stories/js-components.components.dialog.stories.js":(l,d,n)=>{var h,y,f;"use strict";n.r(d),n.d(d,{Readme:()=>j,__namedExportsOrder:()=>g,default:()=>s});var t=n("../components/components/dialog/index.tsx"),e=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=n.n(e),a=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss"),o={};o.insert="head",o.singleton=!1;var _=c()(a.Z,o);const i=a.Z.locals||{};var r=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=`import Dialog from '../index';
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
`,p={Readme:{startLoc:{col:22,line:30},endLoc:{col:1,line:37},startBody:{col:22,line:30},endBody:{col:1,line:37}}};const m=({isTwoSections:x})=>(0,r.jsx)(t.Z,{primary:(0,r.jsxs)("div",{className:i.section,children:[(0,r.jsx)("div",{children:"Primary"}),(0,r.jsx)("strong",{children:"4 | 5 | 7"})]}),secondary:(0,r.jsxs)("div",{className:i.section,children:[(0,r.jsx)("div",{children:"Secondary"}),(0,r.jsx)("strong",{children:"4 | 3 | 5"}),(0,r.jsxs)("div",{children:["isTwoSections: ",(0,r.jsx)("strong",{children:x?"yes":"no"})]})]}),isTwoSections:x});m.displayName="Template";const s={parameters:{storySource:{source:`import Dialog from '../index';
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
`,locationsMap:{readme:{startLoc:{col:22,line:30},endLoc:{col:1,line:37},startBody:{col:22,line:30},endBody:{col:1,line:37}}}}},title:"JS Packages/Components/Dialog",component:t.Z},j={render:m.bind({}),name:"Readme",args:{isTwoSections:!0}};j.parameters={...j.parameters,docs:{...(h=j.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Readme',
  args: {
    isTwoSections: true
  }
}`,...(f=(y=j.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const g=["Readme"]},"../components/components/dialog/stories/js-components.components.dialog.mdx":(l,d,n)=>{"use strict";n.r(d),n.d(d,{default:()=>p});var t=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=n("../../../node_modules/.pnpm/@storybook+addon-docs@7.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),a=n.n(c),o=n("../../../node_modules/.pnpm/@storybook+blocks@7.6.5_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_=n("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js"),i=n("../components/components/dialog/stories/js-components.components.dialog.stories.js");function r(m){const s=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,c.useMDXComponents)(),m.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.h_,{of:i}),`
`,(0,e.jsx)(s.h1,{id:"dialog",children:"Dialog"}),`
`,(0,e.jsxs)(s.p,{children:["Render a two-sections layout simple composition, built based on the primary ",(0,e.jsx)("a",{href:"?path=/docs/js-packages-components-layout--default",children:"Layout component"}),"."]}),`
`,(0,e.jsx)(o.Hw,{language:"jsx",code:_.C`
  import Dialog from '@automattic/jetpack-components';
  // ...

  <Dialog
    primary={ <PrimaryComponent /> }
    secondary={ <SecondaryComponent /> }
    isTwoSections={ true }
  />
  `}),`
`,(0,e.jsx)(o.oG,{of:i.Readme}),`
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
`]})]})}function u(m={}){const{wrapper:s}=Object.assign({},(0,c.useMDXComponents)(),m.components);return s?(0,e.jsx)(s,Object.assign({},m,{children:(0,e.jsx)(r,m)})):r(m)}const p=u},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(l,d)=>{var n,t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var e={}.hasOwnProperty,c="[native code]";function a(){for(var o=[],_=0;_<arguments.length;_++){var i=arguments[_];if(i){var r=typeof i;if(r==="string"||r==="number")o.push(i);else if(Array.isArray(i)){if(i.length){var u=a.apply(null,i);u&&o.push(u)}}else if(r==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){o.push(i.toString());continue}for(var p in i)e.call(i,p)&&i[p]&&o.push(p)}}}return o.join(" ")}l.exports?(a.default=a,l.exports=a):(n=[],t=function(){return a}.apply(d,n),t!==void 0&&(l.exports=t))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss":(l,d,n)=>{"use strict";n.d(d,{Z:()=>_});var t=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=n.n(t),c=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=n.n(c),o=a()(e());o.push([l.id,".RTMIETP7fe2d9xWFfYKF{display:flex;padding:calc(var(--spacing-base)*6) 0;border:1px dotted var(--jp-green-60);box-sizing:border-box;align-items:center;color:var(--jp-white);flex-wrap:nowrap;flex-direction:column;justify-content:space-between;height:calc(var(--spacing-base)*20);flex-grow:2;background:repeating-linear-gradient(-45deg, var(--jp-green-50), var(--jp-green-50) 20px, var(--jp-green-60) 20px, var(--jp-green-60) 40px)}",""]),o.locals={section:"RTMIETP7fe2d9xWFfYKF"};const _=o},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":l=>{function d(n){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}d.keys=()=>[],d.resolve=d,d.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",l.exports=d}}]);})();
