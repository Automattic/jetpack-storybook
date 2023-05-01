(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[196],{"../components/components/text/stories/title.index.stories.tsx":(r,d,e)=>{var u,T,y;"use strict";e.r(d),e.d(d,{Default:()=>a,__namedExportsOrder:()=>p,default:()=>s});var n=e("../components/components/text/index.tsx"),c=e("../components/components/text/stories/style.module.scss"),_=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),t=`import { Title } from '../index';
import styles from './style.module.scss';
import type { TitleProps } from '../types';

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
`,o={Default:{startLoc:{col:17,line:22},endLoc:{col:10,line:28},startBody:{col:17,line:22},endBody:{col:10,line:28}}};const l=["medium","small"],s={parameters:{storySource:{source:`import { Title } from '../index';
import styles from './style.module.scss';
import type { TitleProps } from '../types';
const TIPOGRAPHY_SIZES: Array<TitleProps['size']> = ['medium', 'small'];
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
const Template = args => <div className={styles.instance}>
        <span>Text above to the the component...</span>
        <Title {...args}>
            {args?.children || 'Title Medium - Secure, grow, and increase your site speed'}
        </Title>
        <span>Text below to the the component...</span>
    </div>;
export const Default = Template.bind({});
Default.args = ({
  size: 'medium'
} as TitleProps);
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <div className={styles.instance}>\\n        <span>Text above to the the component...</span>\\n        <Title {...args}>\\n            {args?.children || 'Title Medium - Secure, grow, and increase your site speed'}\\n        </Title>\\n        <span>Text below to the the component...</span>\\n    </div>",
      ...Default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:22},endLoc:{col:10,line:28},startBody:{col:17,line:22},endBody:{col:10,line:28}}}}},title:"JS Packages/Components/Text/Title",component:n.Dx,argTypes:{children:{control:{type:"text"}},size:{control:{type:"select"},options:l}}},i=m=>(0,_.jsxs)("div",{className:c.Z.instance,children:[(0,_.jsx)("span",{children:"Text above to the the component..."}),(0,_.jsx)(n.Dx,{...m,children:(m==null?void 0:m.children)||"Title Medium - Secure, grow, and increase your site speed"}),(0,_.jsx)("span",{children:"Text below to the the component..."})]});i.displayName="Template";const a=i.bind({});a.args={size:"medium"},a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => <div className={styles.instance}>
        <span>Text above to the the component...</span>
        <Title {...args}>
            {args?.children || 'Title Medium - Secure, grow, and increase your site speed'}
        </Title>
        <span>Text below to the the component...</span>
    </div>`,...(y=(T=a.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const p=["Default"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(r,d)=>{var e,n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var c={}.hasOwnProperty,_="[native code]";function t(){for(var o=[],l=0;l<arguments.length;l++){var s=arguments[l];if(s){var i=typeof s;if(i==="string"||i==="number")o.push(s);else if(Array.isArray(s)){if(s.length){var a=t.apply(null,s);a&&o.push(a)}}else if(i==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){o.push(s.toString());continue}for(var p in s)c.call(s,p)&&s[p]&&o.push(p)}}}return o.join(" ")}r.exports?(t.default=t,r.exports=t):(e=[],n=function(){return t}.apply(d,e),n!==void 0&&(r.exports=n))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss":(r,d,e)=>{"use strict";e.d(d,{Z:()=>l});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(n),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(_),o=t()(c());o.push([r.id,'.w736mVCf7VOQpYIxPcJe span{color:var(--jp-gray-40);display:inline-block;width:100%;background-color:var(--jp-white-off)}.WpIUNBUwwqx8Hr_k06mr{height:100%;display:flex;margin-top:50px}.MJuFkehZttz46HmFOosb,.BCVIHJZOaIcvBKbR78IJ{flex-grow:1}.K7dHaXc83Er_lSr0dXyw{background-color:#a68169;position:relative}.K7dHaXc83Er_lSr0dXyw:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p{background-color:#b9c386;position:relative}.K7dHaXc83Er_lSr0dXyw>p:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0{min-width:200px;min-height:50px;line-height:50px;background-color:#8fafba;text-align:center;position:relative}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0:after{content:" ";border:1px dashed rgba(0,0,0,.4);display:block;position:absolute;top:0;left:0;height:100%;width:100%}',""]),o.locals={instance:"w736mVCf7VOQpYIxPcJe","box-model-wrapper":"WpIUNBUwwqx8Hr_k06mr","box-model-side-left":"MJuFkehZttz46HmFOosb","box-model-side-right":"BCVIHJZOaIcvBKbR78IJ","box-model-side-center":"K7dHaXc83Er_lSr0dXyw","box-model-inner":"c8PNEHkZltBtBayh_np0"};const l=o},"../components/components/text/stories/style.module.scss":(r,d,e)=>{"use strict";e.d(d,{Z:()=>l});var n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(n),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss"),t={};t.insert="head",t.singleton=!1;var o=c()(_.Z,t);const l=_.Z.locals||{}}}]);})();
