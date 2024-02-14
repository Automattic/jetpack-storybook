"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5161],{"../components/components/boost-score-graph/stories/tooltip.stories.tsx":(u,d,t)=>{var o,e,l;t.r(d),t.d(d,{__namedExportsOrder:()=>x,_default:()=>c,default:()=>i});var a=t("../components/components/boost-score-graph/tooltip.tsx"),r=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=`import { Tooltip } from '../tooltip';
import type { Meta } from '@storybook/react';

const meta: Meta< typeof Tooltip > = {
	title: 'JS Packages/Components/Boost Score Tooltip',
	component: Tooltip,
	argTypes: {
		period: {
			control: 'object',
		},
	},
	decorators: [
		Story => (
			<div style={ { width: '300px', margin: '200px auto', fontSize: '16px' } }>
				<Story />
			</div>
		),
	],
};

export default meta;

const Template = args => {
	return <Tooltip { ...args } />;
};
export const _default = Template.bind( {} );
_default.args = {
	period: {
		timestamp: 1689772803000,
		dimensions: {
			desktop_overall_score: 75,
			mobile_overall_score: 52,
			desktop_cls: 0.088,
			desktop_lcp: 3.2,
			desktop_tbt: 0,
			mobile_cls: 0.088,
			mobile_lcp: 3.2,
			mobile_tbt: 0,
		},
	},
};
`,m={_default:{startLoc:{col:17,line:23},endLoc:{col:1,line:25},startBody:{col:17,line:23},endBody:{col:1,line:25}}};const i={parameters:{storySource:{source:`import { Tooltip } from '../tooltip';
import type { Meta } from '@storybook/react';

const meta: Meta< typeof Tooltip > = {
	title: 'JS Packages/Components/Boost Score Tooltip',
	component: Tooltip,
	argTypes: {
		period: {
			control: 'object',
		},
	},
	decorators: [
		Story => (
			<div style={ { width: '300px', margin: '200px auto', fontSize: '16px' } }>
				<Story />
			</div>
		),
	],
};

export default meta;

const Template = args => {
	return <Tooltip { ...args } />;
};
export const _default = Template.bind( {} );
_default.args = {
	period: {
		timestamp: 1689772803000,
		dimensions: {
			desktop_overall_score: 75,
			mobile_overall_score: 52,
			desktop_cls: 0.088,
			desktop_lcp: 3.2,
			desktop_tbt: 0,
			mobile_cls: 0.088,
			mobile_lcp: 3.2,
			mobile_tbt: 0,
		},
	},
};
`,locationsMap:{default:{startLoc:{col:17,line:23},endLoc:{col:1,line:25},startBody:{col:17,line:23},endBody:{col:1,line:25}}}}},title:"JS Packages/Components/Boost Score Tooltip",component:a.u,argTypes:{period:{control:"object"}},decorators:[n=>(0,r.jsx)("div",{style:{width:"300px",margin:"200px auto",fontSize:"16px"},children:(0,r.jsx)(n,{})})]},_=n=>(0,r.jsx)(a.u,{...n});_.displayName="Template";const c=_.bind({});c.args={period:{timestamp:1689772803e3,dimensions:{desktop_overall_score:75,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}}},c.parameters={...c.parameters,docs:{...(o=c.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  return <Tooltip {...args} />;
}`,...(l=(e=c.parameters)==null?void 0:e.docs)==null?void 0:l.source}}};const x=["_default"]},"../components/components/boost-score-graph/tooltip.tsx":(u,d,t)=>{t.d(d,{u:()=>l});var a=t("../boost-score-api/build/index.js"),r=t("../../../node_modules/.pnpm/@wordpress+date@4.51.0/node_modules/@wordpress/date/build-module/index.js"),s=t("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js"),m=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=t.n(m),i=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/boost-score-graph/style-tooltip.scss"),_={};_.insert="head",_.singleton=!1;var c=p()(i.Z,_);const x=i.Z.locals||{};var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const e=s.__,l=({period:n})=>{if(!n||!n.dimensions||!n.timestamp)return null;const{mobile_overall_score:j,desktop_overall_score:b,desktop_cls:f,desktop_lcp:h,desktop_tbt:v,mobile_cls:g,mobile_lcp:y,mobile_tbt:T}=n.dimensions,k=(0,a.getScoreLetter)(j,b),S=(0,r.K_)("F j, Y",new Date(n.timestamp),!1);return!k||!j||!b||!S?null:(0,o.jsxs)("div",{className:"jb-score-tooltip",children:[(0,o.jsx)("div",{className:"jb-score-tooltip__date",children:S}),(0,o.jsxs)("div",{className:"jb-score-tooltip__row",children:[(0,o.jsx)("div",{className:"jb-score-tooltip__column",children:e("Overall score","jetpack")}),(0,o.jsx)("div",{className:"jb-score-tooltip__column",children:k})]}),(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{className:"jb-score-tooltip__row",children:[(0,o.jsx)("div",{className:"jb-score-tooltip__column",children:e("Desktop score","jetpack")}),(0,o.jsx)("div",{className:"jb-score-tooltip__column",children:(0,s.gB)(e("%d / 100","jetpack"),b)})]}),typeof h=="number"&&(0,o.jsxs)("div",{className:"jb-score-tooltip__row jb-score-tooltip__row--secondary",children:[(0,o.jsx)("div",{className:"jb-score-tooltip__column",children:e("Largest Contentful Paint","jetpack")}),(0,o.jsx)("div",{className:"jb-score-tooltip__column",children:(0,s.gB)("%0.2fs",h)})]}),typeof v=="number"&&(0,o.jsxs)("div",{className:"jb-score-tooltip__row jb-score-tooltip__row--secondary",children:[(0,o.jsx)("div",{className:"jb-score-tooltip__column",children:e("Total Blocking Time","jetpack")}),(0,o.jsx)("div",{className:"jb-score-tooltip__column",children:(0,s.gB)("%0.2fs",v)})]}),typeof f=="number"&&(0,o.jsxs)("div",{className:"jb-score-tooltip__row jb-score-tooltip__row--secondary",children:[(0,o.jsx)("div",{className:"jb-score-tooltip__column",children:e("Cumulative Layout Shift","jetpack")}),(0,o.jsx)("div",{className:"jb-score-tooltip__column",children:(0,s.gB)("%0.2f",f)})]}),(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{className:"jb-score-tooltip__row",children:[(0,o.jsx)("div",{className:"jb-score-tooltip__column",children:e("Mobile score","jetpack")}),(0,o.jsx)("div",{className:"jb-score-tooltip__column",children:(0,s.gB)(e("%d / 100","jetpack"),j)})]}),typeof y=="number"&&(0,o.jsxs)("div",{className:"jb-score-tooltip__row jb-score-tooltip__row--secondary",children:[(0,o.jsx)("div",{className:"jb-score-tooltip__column",children:e("Largest Contentful Paint","jetpack")}),(0,o.jsx)("div",{className:"jb-score-tooltip__column",children:(0,s.gB)("%0.2fs",y)})]}),typeof T=="number"&&(0,o.jsxs)("div",{className:"jb-score-tooltip__row jb-score-tooltip__row--secondary",children:[(0,o.jsx)("div",{className:"jb-score-tooltip__column",children:e("Total Blocking Time","jetpack")}),(0,o.jsx)("div",{className:"jb-score-tooltip__column",children:(0,s.gB)("%0.2fs",T)})]}),typeof g=="number"&&(0,o.jsxs)("div",{className:"jb-score-tooltip__row jb-score-tooltip__row--secondary",children:[(0,o.jsx)("div",{className:"jb-score-tooltip__column",children:e("Cumulative Layout Shift","jetpack")}),(0,o.jsx)("div",{className:"jb-score-tooltip__column",children:(0,s.gB)("%0.2f",g)})]}),(0,o.jsx)("div",{className:"jb-score-tooltip__pointer"})]})};l.displayName="Tooltip";try{l.displayName="Tooltip",l.__docgenInfo={description:"",displayName:"Tooltip",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/boost-score-graph/tooltip.tsx#Tooltip"]={docgenInfo:l.__docgenInfo,name:"Tooltip",path:"../components/components/boost-score-graph/tooltip.tsx#Tooltip"})}catch(n){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/boost-score-graph/style-tooltip.scss":(u,d,t)=>{t.d(d,{Z:()=>i});var a=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(a),s=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),m=t.n(s),p=m()(r());p.push([u.id,".jb-score-tooltip{background-color:#101517;color:#fff;width:-moz-fit-content;width:fit-content;padding:16px 24px;border-radius:4px;font-size:14px;width:20em;position:relative;box-shadow:0px 1px 2px 0px rgba(0,0,0,.05)}.jb-score-tooltip hr{border-top:1px solid #8e8e8e;border-bottom:none;border-left:none;border-right:none}.jb-score-tooltip__date{font-size:1em;font-weight:600;line-height:1.6em}.jb-score-tooltip__row{display:flex;flex-direction:row;justify-content:space-between;margin:.9em 0}.jb-score-tooltip__row--secondary{color:#8e8e8e;margin-left:1em}.jb-score-tooltip__pointer{width:0;height:0;border-left:8px solid rgba(0,0,0,0);border-right:8px solid rgba(0,0,0,0);border-bottom:8px solid #101517;position:absolute;top:-7px;left:50%;transform:translateX(-50%)}",""]);const i=p}}]);})();
