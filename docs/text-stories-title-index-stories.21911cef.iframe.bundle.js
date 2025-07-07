"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4116],{"../components/components/text/stories/title.index.stories.tsx":(m,n,a)=>{a.r(n),a.d(n,{Default:()=>e,__namedExportsOrder:()=>r,default:()=>i});var u=a("../components/components/text/index.tsx"),s=a("../components/components/text/stories/style.module.scss"),l=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),d=`import { Title } from '../index.tsx';
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
`,v={Default:{startLoc:{col:17,line:22},endLoc:{col:2,line:32},startBody:{col:17,line:22},endBody:{col:2,line:32}}};const o=["medium","small"],i={parameters:{storySource:{source:`import { Title } from '../index.tsx';
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
};`,locationsMap:{default:{startLoc:{col:17,line:22},endLoc:{col:2,line:32},startBody:{col:17,line:22},endBody:{col:2,line:32}}}}},title:"JS Packages/Components/Text/Title",component:u.hE,argTypes:{children:{control:{type:"text"}},size:{control:{type:"select"},options:o}}},e=(t=>(0,l.jsxs)("div",{className:s.A.instance,children:[(0,l.jsx)("span",{children:"Text above to the the component..."}),(0,l.jsx)(u.hE,{...t,children:t?.children||"Title Medium - Secure, grow, and increase your site speed"}),(0,l.jsx)("span",{children:"Text below to the the component..."})]})).bind({});e.args={size:"medium"};const r=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => <div className={styles.instance}>
        <span>Text above to the the component...</span>
        <Title {...args}>
            {args?.children || 'Title Medium - Secure, grow, and increase your site speed'}
        </Title>
        <span>Text below to the the component...</span>
    </div>`,...e.parameters?.docs?.source}}};try{Title.displayName="Title",Title.__docgenInfo={description:"Title component, based on Text component.",displayName:"Title",props:{variant:{defaultValue:{value:"body"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"headline-medium"'},{value:'"headline-small"'},{value:'"headline-small-regular"'},{value:'"title-medium"'},{value:'"title-medium-semi-bold"'},{value:'"title-small"'},{value:'"body"'},{value:'"body-small"'},{value:'"body-extra-small"'},{value:'"body-extra-small-bold"'}]}},m:{defaultValue:null,description:"margin",name:"m",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"3"},{value:"4"},{value:"6"},{value:"7"},{value:"8"}]}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"3"},{value:"4"},{value:"6"},{value:"7"},{value:"8"}]}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"3"},{value:"4"},{value:"6"},{value:"7"},{value:"8"}]}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"3"},{value:"4"},{value:"6"},{value:"7"},{value:"8"}]}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"3"},{value:"4"},{value:"6"},{value:"7"},{value:"8"}]}},mx:{defaultValue:null,description:"margin left and right",name:"mx",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"3"},{value:"4"},{value:"6"},{value:"7"},{value:"8"}]}},my:{defaultValue:null,description:"margin top and bottom",name:"my",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"3"},{value:"4"},{value:"6"},{value:"7"},{value:"8"}]}},p:{defaultValue:null,description:"padding",name:"p",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"3"},{value:"4"},{value:"6"},{value:"7"},{value:"8"}]}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"3"},{value:"4"},{value:"6"},{value:"7"},{value:"8"}]}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"3"},{value:"4"},{value:"6"},{value:"7"},{value:"8"}]}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"3"},{value:"4"},{value:"6"},{value:"7"},{value:"8"}]}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"3"},{value:"4"},{value:"6"},{value:"7"},{value:"8"}]}},px:{defaultValue:null,description:"padding left and right",name:"px",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"3"},{value:"4"},{value:"6"},{value:"7"},{value:"8"}]}},py:{defaultValue:null,description:"padding top and bottom",name:"py",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"3"},{value:"4"},{value:"6"},{value:"7"},{value:"8"}]}},className:{defaultValue:null,description:"HTML Class",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The text itself that will be rendered.",name:"children",required:!0,type:{name:"ReactNode"}},component:{defaultValue:null,description:"Force an specific tag (span, div) or use a custom component that will receive className and children",name:"component",required:!1,type:{name:"FC<{ [prop: string]: unknown; }> | ElementType"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},size:{defaultValue:{value:"medium"},description:"Heading size: 'medium' (default) | 'small'.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/text/stories/title.index.stories.tsx#Title"]={docgenInfo:Title.__docgenInfo,name:"Title",path:"../components/components/text/stories/title.index.stories.tsx#Title"})}catch{}}}]);
