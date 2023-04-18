(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6092],{"../components/components/admin-page/stories/index.stories.tsx":(a,r,e)=>{var x,y,h,j,P,C;"use strict";e.r(r),e.d(r,{CustomHeader:()=>c,__namedExportsOrder:()=>S,_default:()=>u,default:()=>A});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("../components/components/jetpack-logo/index.tsx"),s=e("../components/components/text/index.tsx"),t=e("../components/components/admin-page/index.tsx"),n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(n),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-page/stories/style.module.scss"),m={};m.insert="head",m.singleton=!1;var i=o()(l.Z,m);const f=l.Z.locals||{};var _=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),E=`import React from 'react';
import JetpackLogo from '../../jetpack-logo/index';
import Text from '../../text/index';
import AdminPage from '../index';
import styles from './style.module.scss';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Admin Page',
	component: AdminPage,
	argTypes: {
		moduleName: { control: 'text', defaultValue: 'Jetpack' },
		showHeader: { control: 'boolean', defaultValue: true },
		showFooter: { control: 'boolean', defaultValue: true },
		showBackground: { control: 'boolean', defaultValue: true },
	},
} as ComponentMeta< typeof AdminPage >;

// Export additional stories using pre-defined values
const Template: ComponentStory< typeof AdminPage > = args => <AdminPage { ...args } />;

// Export Default story
export const _default = Template.bind( {} );

export const CustomHeader = Template.bind( {} );
CustomHeader.args = {
	header: (
		<div className={ styles[ 'custom-header' ] }>
			<JetpackLogo height={ 40 } />
			<Text className={ styles[ 'logo-title' ] } weight="regular">
				Next Product is coming up
			</Text>
		</div>
	),
};
`,k={_default:{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}},CustomHeader:{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}}};const A={parameters:{storySource:{source:`import React from 'react';
import JetpackLogo from '../../jetpack-logo/index';
import Text from '../../text/index';
import AdminPage from '../index';
import styles from './style.module.scss';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
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
} as ComponentMeta<typeof AdminPage>);

// Export additional stories using pre-defined values
const Template: ComponentStory<typeof AdminPage> = args => <AdminPage {...args} />;

// Export Default story
export const _default = Template.bind({});
export const CustomHeader = Template.bind({});
CustomHeader.args = {
  header: <div className={styles['custom-header']}>
            <JetpackLogo height={40} />
            <Text className={styles['logo-title']} weight="regular">
                Next Product is coming up
            </Text>
        </div>
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <AdminPage {...args} />",
      ..._default.parameters?.docs?.source
    }
  }
};
CustomHeader.parameters = {
  ...CustomHeader.parameters,
  docs: {
    ...CustomHeader.parameters?.docs,
    source: {
      originalSource: "args => <AdminPage {...args} />",
      ...CustomHeader.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}},"custom-header":{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}}}}},title:"JS Packages/Components/Admin Page",component:t.Z,argTypes:{moduleName:{control:"text",defaultValue:"Jetpack"},showHeader:{control:"boolean",defaultValue:!0},showFooter:{control:"boolean",defaultValue:!0},showBackground:{control:"boolean",defaultValue:!0}}},g=v=>(0,_.jsx)(t.Z,{...v});g.displayName="Template";const u=g.bind({}),c=g.bind({});c.args={header:(0,_.jsxs)("div",{className:f["custom-header"],children:[(0,_.jsx)(p.Z,{height:40}),(0,_.jsx)(s.ZP,{className:f["logo-title"],weight:"regular",children:"Next Product is coming up"})]})},u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:"args => <AdminPage {...args} />",...(h=(y=u.parameters)==null?void 0:y.docs)==null?void 0:h.source}}},c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:"args => <AdminPage {...args} />",...(C=(P=c.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};const S=["_default","CustomHeader"]},"../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js":(a,r)=>{var e,d;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var p={}.hasOwnProperty;function s(){for(var t=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var l=typeof o;if(l==="string"||l==="number")t.push(o);else if(Array.isArray(o)){if(o.length){var m=s.apply(null,o);m&&t.push(m)}}else if(l==="object")if(o.toString===Object.prototype.toString)for(var i in o)p.call(o,i)&&o[i]&&t.push(i);else t.push(o.toString())}}return t.join(" ")}a.exports?(s.default=s,a.exports=s):(e=[],d=function(){return s}.apply(r,e),d!==void 0&&(a.exports=d))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-page/stories/style.module.scss":(a,r,e)=>{"use strict";e.d(r,{Z:()=>o});var d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(d),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(s),n=t()(p());n.push([a.id,".k5g13oYfCGQoIs51Nj9L{display:flex}.hltGSN4kKqfmGJ3KUj_t{flex:1;line-height:30px;font-size:30px;margin-top:2px;margin-left:4px;font-weight:300;letter-spacing:.0625em}",""]),n.locals={"custom-header":"k5g13oYfCGQoIs51Nj9L","logo-title":"hltGSN4kKqfmGJ3KUj_t"};const o=n}}]);})();
