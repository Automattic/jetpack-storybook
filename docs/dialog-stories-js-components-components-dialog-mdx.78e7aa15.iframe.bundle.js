(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5274,1900],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(a,n,o)=>{"use strict";o.d(n,{R:()=>r,x:()=>i});var c=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},_=c.createContext(e);function r(t){const d=c.useContext(_);return c.useMemo(function(){return typeof t=="function"?t(d):{...d,...t}},[d,t])}function i(t){let d;return t.disableParentContext?d=typeof t.components=="function"?t.components(e):t.components||e:d=r(t.components),c.createElement(_.Provider,{value:d},t.children)}},"../components/components/dialog/stories/js-components.components.dialog.mdx":(a,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>l});var c=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),_=o("../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),r=o("../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist/index.mjs"),i=o("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js"),t=o("../components/components/dialog/stories/js-components.components.dialog.stories.js");function d(m){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,_.R)(),...m.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.W8,{of:t}),`
`,(0,e.jsx)(s.h1,{id:"dialog",children:"Dialog"}),`
`,(0,e.jsxs)(s.p,{children:["Render a two-sections layout simple composition, built based on the primary ",(0,e.jsx)("a",{href:"?path=/docs/js-packages-components-layout--default",children:"Layout component"}),"."]}),`
`,(0,e.jsx)(r.kL,{language:"jsx",code:(0,i.A)`
  import Dialog from '@automattic/jetpack-components';
  // ...

  <Dialog
    primary={ <PrimaryComponent /> }
    secondary={ <SecondaryComponent /> }
    isTwoSections={ true }
  />
  `}),`
`,(0,e.jsx)(r.gG,{of:t.Readme}),`
`,(0,e.jsx)(s.p,{children:"The cols number for each section depends on the viewport width. The following table shows how they are defined:"}),`
`,(0,e.jsxs)(s.table,{children:[(0,e.jsx)(s.thead,{children:(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.th,{children:"\xA0"}),(0,e.jsx)(s.th,{children:"Small (sm)"}),(0,e.jsx)(s.th,{children:"Medium (md)"}),(0,e.jsx)(s.th,{children:"Large (lg)"})]})}),(0,e.jsxs)(s.tbody,{children:[(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:"primary"}),(0,e.jsx)(s.td,{children:"4"}),(0,e.jsx)(s.td,{children:"5"}),(0,e.jsx)(s.td,{children:"7"})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:"secondary"}),(0,e.jsx)(s.td,{children:"4"}),(0,e.jsx)(s.td,{children:"3"}),(0,e.jsx)(s.td,{children:"5"})]})]})]}),`
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
`]})]})}function l(m={}){const{wrapper:s}={...(0,_.R)(),...m.components};return s?(0,e.jsx)(s,{...m,children:(0,e.jsx)(d,{...m})}):d(m)}},"../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist sync recursive":a=>{function n(o){var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}n.keys=()=>[],n.resolve=n,n.id="../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist sync recursive",a.exports=n},"../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/components sync recursive":a=>{function n(o){var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}n.keys=()=>[],n.resolve=n,n.id="../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/components sync recursive",a.exports=n},"../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/theming sync recursive":a=>{function n(o){var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}n.keys=()=>[],n.resolve=n,n.id="../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/theming sync recursive",a.exports=n},"../components/components/dialog/stories/js-components.components.dialog.stories.js":(a,n,o)=>{"use strict";o.r(n),o.d(n,{Readme:()=>p,__namedExportsOrder:()=>h,default:()=>x});var c=o("../components/components/dialog/index.tsx"),e=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=o.n(e),r=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss"),i={};i.insert="head",i.singleton=!1;var t=_()(r.A,i);const d=r.A.locals||{};var l=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=`import Dialog from '../index.tsx';
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
`,s={Readme:{startLoc:{col:22,line:33},endLoc:{col:1,line:39},startBody:{col:22,line:33},endBody:{col:1,line:39}}};const j=({isTwoSections:u})=>(0,l.jsx)(c.A,{primary:(0,l.jsxs)("div",{className:d.section,children:[(0,l.jsx)("div",{children:"Primary"}),(0,l.jsx)("strong",{children:"4 | 5 | 7"})]}),secondary:(0,l.jsxs)("div",{className:d.section,children:[(0,l.jsx)("div",{children:"Secondary"}),(0,l.jsx)("strong",{children:"4 | 3 | 5"}),(0,l.jsxs)("div",{children:["isTwoSections: ",(0,l.jsx)("strong",{children:u?"yes":"no"})]})]}),isTwoSections:u}),x={parameters:{storySource:{source:`import Dialog from '../index.tsx';
import styles from './style.module.scss';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Template = ({
  isTwoSections
}) => /*#__PURE__*/_jsx(Dialog, {
  primary: /*#__PURE__*/_jsxs("div", {
    className: styles.section,
    children: [/*#__PURE__*/_jsx("div", {
      children: "Primary"
    }), /*#__PURE__*/_jsx("strong", {
      children: "4 | 5 | 7"
    })]
  }),
  secondary: /*#__PURE__*/_jsxs("div", {
    className: styles.section,
    children: [/*#__PURE__*/_jsx("div", {
      children: "Secondary"
    }), /*#__PURE__*/_jsx("strong", {
      children: "4 | 3 | 5"
    }), /*#__PURE__*/_jsxs("div", {
      children: ["isTwoSections: ", /*#__PURE__*/_jsx("strong", {
        children: isTwoSections ? 'yes' : 'no'
      })]
    })]
  }),
  isTwoSections: isTwoSections
});
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
};`,locationsMap:{readme:{startLoc:{col:22,line:33},endLoc:{col:1,line:39},startBody:{col:22,line:33},endBody:{col:1,line:39}}}}},title:"JS Packages/Components/Dialog",component:c.A},p={render:j.bind({}),name:"Readme",args:{isTwoSections:!0}},h=["Readme"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Readme',
  args: {
    isTwoSections: true
  }
}`,...p.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(a,n,o)=>{"use strict";o.d(n,{A:()=>_});function c(r){var i,t,d="";if(typeof r=="string"||typeof r=="number")d+=r;else if(typeof r=="object")if(Array.isArray(r)){var l=r.length;for(i=0;i<l;i++)r[i]&&(t=c(r[i]))&&(d&&(d+=" "),d+=t)}else for(t in r)r[t]&&(d&&(d+=" "),d+=t);return d}function e(){for(var r,i,t=0,d="",l=arguments.length;t<l;t++)(r=arguments[t])&&(i=c(r))&&(d&&(d+=" "),d+=i);return d}const _=e},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss":(a,n,o)=>{"use strict";o.d(n,{A:()=>t});var c=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=o.n(c),_=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=o.n(_),i=r()(e());i.push([a.id,".RTMIETP7fe2d9xWFfYKF{display:flex;padding:calc(var(--spacing-base)*6) 0;border:1px dotted var(--jp-green-60);box-sizing:border-box;align-items:center;color:var(--jp-white);flex-wrap:nowrap;flex-direction:column;justify-content:space-between;height:calc(var(--spacing-base)*20);flex-grow:2;background:repeating-linear-gradient(-45deg, var(--jp-green-50), var(--jp-green-50) 20px, var(--jp-green-60) 20px, var(--jp-green-60) 40px)}",""]),i.locals={section:"RTMIETP7fe2d9xWFfYKF"};const t=i}}]);
