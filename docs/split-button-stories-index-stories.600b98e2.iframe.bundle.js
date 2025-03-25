"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5149],{"../components/components/split-button/stories/index.stories.tsx":(u,s,t)=>{t.r(s),t.d(s,{__namedExportsOrder:()=>b,_default:()=>e,default:()=>j});var r=t("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex/component.js"),a=t("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),p=t("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/dropdown-menu/index.js"),i=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=t.n(i),d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/split-button/style.module.scss"),c={};c.insert="head",c.singleton=!1;var x=n()(d.A,c);const _=d.A.locals||{};var o=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=()=>(0,o.jsx)("svg",{width:"15",height:"9",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"10 9 4 7",children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m18.004 10.555-6.005 5.459-6.004-5.459 1.009-1.11 4.995 4.542 4.996-4.542 1.009 1.11Z"})}),m=({variant:l,controls:w,popoverProps:S,toggleProps:f,label:g,...v})=>(0,o.jsx)(r.A,{className:_["split-button"],children:(0,o.jsxs)("div",{role:"group",className:"components-button-group",children:[(0,o.jsx)(a.Ay,{variant:l,...v,className:_.button}),(0,o.jsx)(p.A,{toggleProps:{variant:l,className:_.button,...f},popoverProps:{noArrow:!1,...S},icon:(0,o.jsx)(y,{}),disableOpenOnArrowDown:!0,controls:w,label:g})]})});var B=`import SplitButton from '../index.js';
import type { StoryFn, Meta } from '@storybook/react';

const meta: Meta< typeof SplitButton > = {
	title: 'JS Packages/Components/Split Button',
	component: SplitButton,
	argTypes: {
		variant: { type: 'select', options: [ undefined, 'secondary', 'primary', 'tertiary', 'link' ] },
	},
	args: {
		controls: [
			{
				title: 'Add to cart',
				icon: null,
				onClick: () => null,
			},
			{
				title: 'Add to wishlist',
				icon: null,
				onClick: () => null,
			},
		],
	},
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},
};

export default meta;

const Template: StoryFn< typeof SplitButton > = args => (
	<SplitButton { ...args }>Buy now!</SplitButton>
);

export const _default = Template.bind( {} );
`,k={_default:{startLoc:{col:17,line:30},endLoc:{col:2,line:33},startBody:{col:17,line:30},endBody:{col:2,line:33}}};const j={title:"JS Packages/Components/Split Button",component:m,argTypes:{variant:{type:"select",options:[void 0,"secondary","primary","tertiary","link"]}},args:{controls:[{title:"Add to cart",icon:null,onClick:()=>null},{title:"Add to wishlist",icon:null,onClick:()=>null}]},parameters:{storySource:{source:`import SplitButton from '../index.js';
import { jsx as _jsx } from "react/jsx-runtime";
const meta = {
  title: 'JS Packages/Components/Split Button',
  component: SplitButton,
  argTypes: {
    variant: {
      type: 'select',
      options: [undefined, 'secondary', 'primary', 'tertiary', 'link']
    }
  },
  args: {
    controls: [{
      title: 'Add to cart',
      icon: null,
      onClick: () => null
    }, {
      title: 'Add to wishlist',
      icon: null,
      onClick: () => null
    }]
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
};
export default meta;
const Template = args => /*#__PURE__*/_jsx(SplitButton, {
  ...args,
  children: "Buy now!"
});
export const _default = Template.bind({});`,locationsMap:{default:{startLoc:{col:17,line:30},endLoc:{col:2,line:33},startBody:{col:17,line:30},endBody:{col:2,line:33}}}},backgrounds:{default:"dark"}}},e=(l=>(0,o.jsx)(m,{...l,children:"Buy now!"})).bind({}),b=["_default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <SplitButton {...args}>Buy now!</SplitButton>",...e.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/split-button/style.module.scss":(u,s,t)=>{t.d(s,{A:()=>d});var r=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=t.n(r),p=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),i=t.n(p),n=i()(a());n.push([u.id,".LtrV_wYOdwb7dDaFAONw{--actions-size: 28px;display:flex;height:var(--actions-size);border-radius:var(--jp-border-radius)}.LtrV_wYOdwb7dDaFAONw .components-button-group{display:flex;height:100%}.LtrV_wYOdwb7dDaFAONw>.IF9UNoGSlG2nG7LQhiCq:first-child{border-radius:var(--jp-border-radius) 0 0 var(--jp-border-radius)}.LtrV_wYOdwb7dDaFAONw>.components-dropdown>.IF9UNoGSlG2nG7LQhiCq{border-radius:0 var(--jp-border-radius) var(--jp-border-radius) 0}.IF9UNoGSlG2nG7LQhiCq{font-size:var(--font-body-extra-small);border-radius:var(--jp-border-radius);height:var(--actions-size);line-height:var(--actions-size)}",""]),n.locals={"split-button":"LtrV_wYOdwb7dDaFAONw",button:"IF9UNoGSlG2nG7LQhiCq"};const d=n}}]);
