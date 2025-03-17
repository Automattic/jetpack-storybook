"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1019],{"../components/components/admin-page/stories/index.stories.tsx":(_,n,e)=>{e.r(n),e.d(n,{CustomHeader:()=>o,__namedExportsOrder:()=>f,_default:()=>t,default:()=>x});var p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../components/components/jetpack-logo/index.tsx"),r=e("../components/components/text/index.tsx"),a=e("../components/components/admin-page/index.tsx"),s=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(s),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-page/stories/style.module.scss"),c={};c.insert="head",c.singleton=!1;var y=m()(i.A,c);const u=i.A.locals||{};var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),h=`import React from 'react';
import JetpackLogo from '../../jetpack-logo/index.js';
import Text from '../../text/index.js';
import AdminPage from '../index.js';
import styles from './style.module.scss';
import type { StoryFn, Meta } from '@storybook/react';

const meta: Meta< typeof AdminPage > = {
	title: 'JS Packages/Components/Admin Page',
	component: AdminPage,
	argTypes: {
		moduleName: { control: 'text', defaultValue: 'Jetpack' },
		showHeader: { control: 'boolean', defaultValue: true },
		showFooter: { control: 'boolean', defaultValue: true },
		showBackground: { control: 'boolean', defaultValue: true },
	},
};

export default meta;

// Export additional stories using pre-defined values
const Template: StoryFn< typeof AdminPage > = args => <AdminPage { ...args } />;

// Export Default story
export const _default = Template.bind( {} );

export const CustomHeader = Template.bind( {} );
CustomHeader.args = {
	header: (
		<div className={ styles[ 'custom-header' ] }>
			<JetpackLogo height={ 40 } />
			<Text className={ styles[ 'logo-title' ] }>Next Product is coming up</Text>
		</div>
	),
};
`,P={_default:{startLoc:{col:17,line:32},endLoc:{col:2,line:34},startBody:{col:17,line:32},endBody:{col:2,line:34}},CustomHeader:{startLoc:{col:17,line:32},endLoc:{col:2,line:34},startBody:{col:17,line:32},endBody:{col:2,line:34}}};const x={parameters:{storySource:{source:`import React from 'react';
import JetpackLogo from '../../jetpack-logo/index.js';
import Text from '../../text/index.js';
import AdminPage from '../index.js';
import styles from './style.module.scss';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const meta = {
  title: 'JS Packages/Components/Admin Page',
  component: AdminPage,
  argTypes: {
    moduleName: {
      control: 'text',
      defaultValue: 'Jetpack'
    },
    showHeader: {
      control: 'boolean',
      defaultValue: true
    },
    showFooter: {
      control: 'boolean',
      defaultValue: true
    },
    showBackground: {
      control: 'boolean',
      defaultValue: true
    }
  }
};
export default meta;

// Export additional stories using pre-defined values
const Template = args => /*#__PURE__*/_jsx(AdminPage, {
  ...args
});

// Export Default story
export const _default = Template.bind({});
export const CustomHeader = Template.bind({});
CustomHeader.args = {
  header: /*#__PURE__*/_jsxs("div", {
    className: styles['custom-header'],
    children: [/*#__PURE__*/_jsx(JetpackLogo, {
      height: 40
    }), /*#__PURE__*/_jsx(Text, {
      className: styles['logo-title'],
      children: "Next Product is coming up"
    })]
  })
};`,locationsMap:{default:{startLoc:{col:17,line:32},endLoc:{col:2,line:34},startBody:{col:17,line:32},endBody:{col:2,line:34}},"custom-header":{startLoc:{col:17,line:32},endLoc:{col:2,line:34},startBody:{col:17,line:32},endBody:{col:2,line:34}}}}},title:"JS Packages/Components/Admin Page",component:a.A,argTypes:{moduleName:{control:"text",defaultValue:"Jetpack"},showHeader:{control:"boolean",defaultValue:!0},showFooter:{control:"boolean",defaultValue:!0},showBackground:{control:"boolean",defaultValue:!0}}},g=j=>(0,d.jsx)(a.A,{...j}),t=g.bind({}),o=g.bind({});o.args={header:(0,d.jsxs)("div",{className:u["custom-header"],children:[(0,d.jsx)(l.A,{height:40}),(0,d.jsx)(r.Ay,{className:u["logo-title"],children:"Next Product is coming up"})]})};const f=["_default","CustomHeader"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <AdminPage {...args} />",...t.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <AdminPage {...args} />",...o.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-page/stories/style.module.scss":(_,n,e)=>{e.d(n,{A:()=>m});var p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(p),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(r),s=a()(l());s.push([_.id,".k5g13oYfCGQoIs51Nj9L{display:flex}.hltGSN4kKqfmGJ3KUj_t{flex:1;line-height:30px;font-size:30px;margin-top:2px;margin-left:4px;font-weight:300;letter-spacing:.0625em}",""]),s.locals={"custom-header":"k5g13oYfCGQoIs51Nj9L","logo-title":"hltGSN4kKqfmGJ3KUj_t"};const m=s}}]);
