"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4116],{"../components/components/text/stories/title.index.stories.tsx":(c,d,s)=>{s.r(d),s.d(d,{Default:()=>r,__namedExportsOrder:()=>m,default:()=>o});var l=s("../components/components/text/index.tsx"),a=s("../components/components/text/stories/style.module.scss"),_=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),e=`import { Title } from '../index.tsx';
import styles from './style.module.scss';
import type { TitleProps } from '../types.ts';

const TIPOGRAPHY_SIZES: Array< TitleProps[ 'size' ] > = [ 'medium', 'small' ];

export default {
	title: 'JS Packages/Components/Text/Title',
	component: Title,
	argTypes: {
		children: {
			control: { type: 'text' },
		},
		size: {
			control: { type: 'select' },
			options: TIPOGRAPHY_SIZES,
		},
	},
};

const Template = args => (
	<div className={ styles.instance }>
		<span>Text above to the the component...</span>
		<Title { ...args }>
			{ args?.children || 'Title Medium - Secure, grow, and increase your site speed' }
		</Title>
		<span>Text below to the the component...</span>
	</div>
);

export const Default = Template.bind( {} );
Default.args = {
	size: 'medium',
} as TitleProps;
`,n={Default:{startLoc:{col:17,line:22},endLoc:{col:2,line:32},startBody:{col:17,line:22},endBody:{col:2,line:32}}};const t=["medium","small"],o={parameters:{storySource:{source:`import { Title } from '../index.tsx';
import styles from './style.module.scss';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const TIPOGRAPHY_SIZES = ['medium', 'small'];
export default {
  title: 'JS Packages/Components/Text/Title',
  component: Title,
  argTypes: {
    children: {
      control: {
        type: 'text'
      }
    },
    size: {
      control: {
        type: 'select'
      },
      options: TIPOGRAPHY_SIZES
    }
  }
};
const Template = args => /*#__PURE__*/_jsxs("div", {
  className: styles.instance,
  children: [/*#__PURE__*/_jsx("span", {
    children: "Text above to the the component..."
  }), /*#__PURE__*/_jsx(Title, {
    ...args,
    children: args?.children || 'Title Medium - Secure, grow, and increase your site speed'
  }), /*#__PURE__*/_jsx("span", {
    children: "Text below to the the component..."
  })]
});
export const Default = Template.bind({});
Default.args = {
  size: 'medium'
};`,locationsMap:{default:{startLoc:{col:17,line:22},endLoc:{col:2,line:32},startBody:{col:17,line:22},endBody:{col:2,line:32}}}}},title:"JS Packages/Components/Text/Title",component:l.hE,argTypes:{children:{control:{type:"text"}},size:{control:{type:"select"},options:t}}},r=(i=>(0,_.jsxs)("div",{className:a.A.instance,children:[(0,_.jsx)("span",{children:"Text above to the the component..."}),(0,_.jsx)(l.hE,{...i,children:i?.children||"Title Medium - Secure, grow, and increase your site speed"}),(0,_.jsx)("span",{children:"Text below to the the component..."})]})).bind({});r.args={size:"medium"};const m=["Default"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <div className={styles.instance}>
        <span>Text above to the the component...</span>
        <Title {...args}>
            {args?.children || 'Title Medium - Secure, grow, and increase your site speed'}
        </Title>
        <span>Text below to the the component...</span>
    </div>`,...r.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(c,d,s)=>{s.d(d,{A:()=>_});function l(e){var n,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var p=e.length;for(n=0;n<p;n++)e[n]&&(t=l(e[n]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function a(){for(var e,n,t=0,o="",p=arguments.length;t<p;t++)(e=arguments[t])&&(n=l(e))&&(o&&(o+=" "),o+=n);return o}const _=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss":(c,d,s)=>{s.d(d,{A:()=>t});var l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=s.n(l),_=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),e=s.n(_),n=e()(a());n.push([c.id,'.w736mVCf7VOQpYIxPcJe span{color:var(--jp-gray-40);display:inline-block;width:100%;background-color:var(--jp-white-off)}.WpIUNBUwwqx8Hr_k06mr{height:100%;display:flex;margin-top:50px}.MJuFkehZttz46HmFOosb,.BCVIHJZOaIcvBKbR78IJ{flex-grow:1}.K7dHaXc83Er_lSr0dXyw{background-color:#a68169;position:relative}.K7dHaXc83Er_lSr0dXyw::after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p{background-color:#b9c386;position:relative}.K7dHaXc83Er_lSr0dXyw>p::after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0{min-width:200px;min-height:50px;line-height:50px;background-color:#8fafba;text-align:center;position:relative}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0::after{content:" ";border:1px dashed rgba(0,0,0,.4);display:block;position:absolute;top:0;left:0;height:100%;width:100%}',""]),n.locals={instance:"w736mVCf7VOQpYIxPcJe","box-model-wrapper":"WpIUNBUwwqx8Hr_k06mr","box-model-side-left":"MJuFkehZttz46HmFOosb","box-model-side-right":"BCVIHJZOaIcvBKbR78IJ","box-model-side-center":"K7dHaXc83Er_lSr0dXyw","box-model-inner":"c8PNEHkZltBtBayh_np0"};const t=n},"../components/components/text/stories/style.module.scss":(c,d,s)=>{s.d(d,{A:()=>t});var l=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=s.n(l),_=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss"),e={};e.insert="head",e.singleton=!1;var n=a()(_.A,e);const t=_.A.locals||{}}}]);
