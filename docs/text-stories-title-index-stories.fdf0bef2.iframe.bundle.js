"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4116],{"../components/components/text/stories/title.index.stories.tsx":(m,s,t)=>{t.r(s),t.d(s,{Default:()=>e,__namedExportsOrder:()=>c,default:()=>i});var o=t("../components/components/text/index.tsx"),a=t("../components/components/text/stories/style.module.scss"),n=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),p=`import { Title } from '../index.tsx';
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
`,d={Default:{startLoc:{col:17,line:22},endLoc:{col:2,line:32},startBody:{col:17,line:22},endBody:{col:2,line:32}}};const r=["medium","small"],i={parameters:{storySource:{source:`import { Title } from '../index.tsx';
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
};`,locationsMap:{default:{startLoc:{col:17,line:22},endLoc:{col:2,line:32},startBody:{col:17,line:22},endBody:{col:2,line:32}}}}},title:"JS Packages/Components/Text/Title",component:o.hE,argTypes:{children:{control:{type:"text"}},size:{control:{type:"select"},options:r}}},e=(l=>(0,n.jsxs)("div",{className:a.A.instance,children:[(0,n.jsx)("span",{children:"Text above to the the component..."}),(0,n.jsx)(o.hE,{...l,children:l?.children||"Title Medium - Secure, grow, and increase your site speed"}),(0,n.jsx)("span",{children:"Text below to the the component..."})]})).bind({});e.args={size:"medium"};const c=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => <div className={styles.instance}>
        <span>Text above to the the component...</span>
        <Title {...args}>
            {args?.children || 'Title Medium - Secure, grow, and increase your site speed'}
        </Title>
        <span>Text below to the the component...</span>
    </div>`,...e.parameters?.docs?.source}}}}}]);
