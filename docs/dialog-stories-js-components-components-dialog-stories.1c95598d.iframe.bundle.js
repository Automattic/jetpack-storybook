"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1900],{"../components/components/dialog/stories/js-components.components.dialog.stories.js":(c,r,o)=>{o.r(r),o.d(r,{Readme:()=>i,__namedExportsOrder:()=>j,default:()=>u});var a=o("../components/components/dialog/index.tsx"),_=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=o.n(_),s=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.68.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss"),e={};e.insert="head",e.singleton=!1;var d=l()(s.A,e);const n=s.A.locals||{};var t=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),g=`import Dialog from '../index.tsx';
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
`,x={Readme:{startLoc:{col:22,line:33},endLoc:{col:1,line:39},startBody:{col:22,line:33},endBody:{col:1,line:39}}};const p=({isTwoSections:m})=>(0,t.jsx)(a.A,{primary:(0,t.jsxs)("div",{className:n.section,children:[(0,t.jsx)("div",{children:"Primary"}),(0,t.jsx)("strong",{children:"4 | 5 | 7"})]}),secondary:(0,t.jsxs)("div",{className:n.section,children:[(0,t.jsx)("div",{children:"Secondary"}),(0,t.jsx)("strong",{children:"4 | 3 | 5"}),(0,t.jsxs)("div",{children:["isTwoSections: ",(0,t.jsx)("strong",{children:m?"yes":"no"})]})]}),isTwoSections:m}),u={parameters:{storySource:{source:`import Dialog from '../index.tsx';
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
};`,locationsMap:{readme:{startLoc:{col:22,line:33},endLoc:{col:1,line:39},startBody:{col:22,line:33},endBody:{col:1,line:39}}}}},title:"JS Packages/Components/Dialog",component:a.A},i={render:p.bind({}),name:"Readme",args:{isTwoSections:!0}},j=["Readme"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Readme',
  args: {
    isTwoSections: true
  }
}`,...i.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(c,r,o)=>{o.d(r,{A:()=>l});function a(s){var e,d,n="";if(typeof s=="string"||typeof s=="number")n+=s;else if(typeof s=="object")if(Array.isArray(s)){var t=s.length;for(e=0;e<t;e++)s[e]&&(d=a(s[e]))&&(n&&(n+=" "),n+=d)}else for(d in s)s[d]&&(n&&(n+=" "),n+=d);return n}function _(){for(var s,e,d=0,n="",t=arguments.length;d<t;d++)(s=arguments[d])&&(e=a(s))&&(n&&(n+=" "),n+=e);return n}const l=_},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.68.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss":(c,r,o)=>{o.d(r,{A:()=>d});var a=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=o.n(a),l=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=o.n(l),e=s()(_());e.push([c.id,".RTMIETP7fe2d9xWFfYKF{display:flex;padding:calc(var(--spacing-base)*6) 0;border:1px dotted var(--jp-green-60);box-sizing:border-box;align-items:center;color:var(--jp-white);flex-wrap:nowrap;flex-direction:column;justify-content:space-between;height:calc(var(--spacing-base)*20);flex-grow:2;background:repeating-linear-gradient(-45deg, var(--jp-green-50), var(--jp-green-50) 20px, var(--jp-green-60) 20px, var(--jp-green-60) 40px)}",""]),e.locals={section:"RTMIETP7fe2d9xWFfYKF"};const d=e}}]);
