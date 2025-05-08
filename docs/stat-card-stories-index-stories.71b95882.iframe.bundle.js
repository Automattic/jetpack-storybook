"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[47],{"../components/components/stat-card/stories/index.stories.tsx":(_,l,e)=>{e.r(l),e.d(l,{Horizontal:()=>a,__namedExportsOrder:()=>C,_default:()=>s,default:()=>T});var i=e("../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/post-list.js"),d=e("../number-formatters/src/index.ts"),m=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js"),t=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=e("../components/components/text/index.tsx"),j=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=e.n(j),g=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/stat-card/style.module.scss"),u={};u.insert="head",u.singleton=!1;var w=A()(g.A,u);const o=g.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const v=({className:c,hideValue:x,icon:P,label:L,value:b,variant:S="square"})=>{const h=(0,d.ZV)(b),O=(0,d.qe)(b);return(0,n.jsxs)("div",{className:(0,t.A)(c,o.wrapper,o[S]),children:[(0,n.jsx)("div",{className:(0,t.A)(o.icon),children:P}),(0,n.jsxs)("div",{className:(0,t.A)(o.info),children:[(0,n.jsx)(r.Ay,{className:o.label,children:L}),S==="square"?(0,n.jsx)(m.Ay,{text:h,placement:"top",children:(0,n.jsx)(r.Ay,{variant:"headline-small",className:(0,t.A)(o.value),children:x?"-":O})}):(0,n.jsx)(r.Ay,{variant:"title-medium-semi-bold",className:(0,t.A)(o.value),children:x?"-":h})]})]})};try{statcard.displayName="statcard",statcard.__docgenInfo={description:"StatCard component",displayName:"statcard",props:{className:{defaultValue:null,description:"Custom className to be inserted.",name:"className",required:!1,type:{name:"string"}},hideValue:{defaultValue:null,description:"Whether to hide the value.",name:"hideValue",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"The stat card icon.",name:"icon",required:!0,type:{name:"Element"}},label:{defaultValue:null,description:"The stat label.",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"The stat value.",name:"value",required:!0,type:{name:"number"}},variant:{defaultValue:{value:"square"},description:"The component variant.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/stat-card/index.tsx#statcard"]={docgenInfo:statcard.__docgenInfo,name:"statcard",path:"../components/components/stat-card/index.tsx#statcard"})}catch{}var I=`import { Icon, postList } from '@wordpress/icons';
import StatCard from '../index.tsx';
import type { StoryFn, Meta } from '@storybook/react';

const meta: Meta< typeof StatCard > = {
	title: 'JS Packages/Components/Stat Card',
	component: StatCard,
	argTypes: {
		variant: {
			control: { type: 'radio' },
			options: [ 'square', 'horizontal' ],
		},
		label: {
			control: { type: 'text' },
		},
		value: {
			control: { type: 'number' },
		},
		icon: {
			table: {
				disable: true,
			},
		},
		hideValue: {
			control: { type: 'boolean' },
		},
	},
};

export default meta;

const defaultArgs = {
	icon: <Icon icon={ postList } color="green" />,
	label: 'Posted this month',
	value: 1806,
};

const Template: StoryFn< typeof StatCard > = args => {
	return <StatCard { ...args } />;
};

export const _default = Template.bind( {} );
_default.args = defaultArgs;

export const Horizontal = Template.bind( {} );
Horizontal.args = { ...defaultArgs, variant: 'horizontal' };
`,U={_default:{startLoc:{col:17,line:45},endLoc:{col:1,line:49},startBody:{col:17,line:45},endBody:{col:1,line:49}},Horizontal:{startLoc:{col:17,line:45},endLoc:{col:1,line:49},startBody:{col:17,line:45},endBody:{col:1,line:49}}};const T={parameters:{storySource:{source:`import { Icon, postList } from '@wordpress/icons';
import StatCard from '../index.tsx';
import { jsx as _jsx } from "react/jsx-runtime";
const meta = {
  title: 'JS Packages/Components/Stat Card',
  component: StatCard,
  argTypes: {
    variant: {
      control: {
        type: 'radio'
      },
      options: ['square', 'horizontal']
    },
    label: {
      control: {
        type: 'text'
      }
    },
    value: {
      control: {
        type: 'number'
      }
    },
    icon: {
      table: {
        disable: true
      }
    },
    hideValue: {
      control: {
        type: 'boolean'
      }
    }
  }
};
export default meta;
const defaultArgs = {
  icon: /*#__PURE__*/_jsx(Icon, {
    icon: postList,
    color: "green"
  }),
  label: 'Posted this month',
  value: 1806
};
const Template = args => {
  return /*#__PURE__*/_jsx(StatCard, {
    ...args
  });
};
export const _default = Template.bind({});
_default.args = defaultArgs;
export const Horizontal = Template.bind({});
Horizontal.args = {
  ...defaultArgs,
  variant: 'horizontal'
};`,locationsMap:{default:{startLoc:{col:17,line:45},endLoc:{col:1,line:49},startBody:{col:17,line:45},endBody:{col:1,line:49}},horizontal:{startLoc:{col:17,line:45},endLoc:{col:1,line:49},startBody:{col:17,line:45},endBody:{col:1,line:49}}}}},title:"JS Packages/Components/Stat Card",component:v,argTypes:{variant:{control:{type:"radio"},options:["square","horizontal"]},label:{control:{type:"text"}},value:{control:{type:"number"}},icon:{table:{disable:!0}},hideValue:{control:{type:"boolean"}}}},f={icon:(0,n.jsx)(i.A,{icon:p.A,color:"green"}),label:"Posted this month",value:1806},y=c=>(0,n.jsx)(v,{...c}),s=y.bind({});s.args=f;const a=y.bind({});a.args={...f,variant:"horizontal"};const C=["_default","Horizontal"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  return <StatCard {...args} />;
}`,...s.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  return <StatCard {...args} />;
}`,...a.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/stat-card/style.module.scss":(_,l,e)=>{e.d(l,{A:()=>r});var i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(i),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),m=e.n(d),t=m()(p());t.push([_.id,".lPa7eIQuUOgL8dp33Ywf{background-color:var(--jp-white);box-shadow:0 4px 40px rgba(0,0,0,.08);border-radius:calc(var(--jp-border-radius)*2);display:flex}.lPa7eIQuUOgL8dp33Ywf.rRdS2nmNkNaUtHcRLRUI{align-items:center;padding:calc(var(--spacing-base)*2);width:358px}.lPa7eIQuUOgL8dp33Ywf.rRdS2nmNkNaUtHcRLRUI .ogNSHs9dYlP_btX1GBJH{display:flex;align-items:center;width:100%;overflow:hidden}.lPa7eIQuUOgL8dp33Ywf.rRdS2nmNkNaUtHcRLRUI .HUitGTo5TvApYTcvn6yd{margin:0 calc(var(--spacing-base)*2);flex-grow:1}.lPa7eIQuUOgL8dp33Ywf.wg9WJA3G78cX5lVcezNR{--square-stat-vertical-spacing: calc( var( --spacing-base ) * 2	);--square-stat-horizontal-spacing: calc( var( --spacing-base ) * 3	);flex-direction:column;justify-content:space-between;height:168px;width:168px;padding:var(--square-stat-vertical-spacing) var(--square-stat-horizontal-spacing)}.lPa7eIQuUOgL8dp33Ywf.wg9WJA3G78cX5lVcezNR .HUitGTo5TvApYTcvn6yd{margin-bottom:calc(var(--spacing-base)/2)}.lPa7eIQuUOgL8dp33Ywf .CeFrPvsyYcbSuZQDtFP8{overflow:hidden;text-overflow:ellipsis}.lPa7eIQuUOgL8dp33Ywf .t9u2HAsO2rlDzXGGi7Qq{display:flex;color:var(--jp-green-40);fill:var(--jp-green-40)}",""]),t.locals={wrapper:"lPa7eIQuUOgL8dp33Ywf",horizontal:"rRdS2nmNkNaUtHcRLRUI",info:"ogNSHs9dYlP_btX1GBJH",label:"HUitGTo5TvApYTcvn6yd",square:"wg9WJA3G78cX5lVcezNR",value:"CeFrPvsyYcbSuZQDtFP8",icon:"t9u2HAsO2rlDzXGGi7Qq"};const r=t}}]);
