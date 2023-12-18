(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9535],{"../components/components/text/stories/headings.index.stories.tsx":(c,l,t)=>{var g,x,T,b,E,f,P,I,j;"use strict";t.r(l),t.d(l,{Default:()=>H,HeadlineH2:()=>i,HeadlineH3:()=>m,__namedExportsOrder:()=>S,default:()=>h});var r=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=t("../components/components/text/index.tsx"),_=t("../components/components/text/stories/style.module.scss"),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=`import React from 'react';
import { H2, H3 } from '../index';
import styles from './style.module.scss';
import type { H3Props } from '../types';

const TIPOGRAPHY_WEIGHTS: Array< H3Props[ 'weight' ] > = [ 'regular', 'bold' ];

export default {
	title: 'JS Packages/Components/Text/Heading',
	component: H2,
	argTypes: {
		children: {
			control: { type: 'text' },
		},
		weight: {
			control: { type: 'select' },
			options: TIPOGRAPHY_WEIGHTS,
		},
	},
};

/**
 * Helper component to create a the story.
 *
 * @param {object} props                   - Component props.
 * @param {React.Component} props.children - Icon component children.
 * @returns {React.Component}                Text component instance.
 */
function Instance( { children } ) {
	return (
		<div className={ styles.instance }>
			<span>Text above to the the component...</span>
			{ children }
			<span>Text below to the the component...</span>
		</div>
	);
}

const TemplateH2 = args => (
	<Instance>
		<H2 { ...args }>
			{ args?.children ||
				'Headline Medium - Manage your Jetpack plan and products all in one place' }
		</H2>
	</Instance>
);

const TemplateH3 = args => (
	<Instance>
		<H3 { ...args }>
			{ args?.children ||
				'Headline Small - Manage your Jetpack plan and products all in one place' }
		</H3>
	</Instance>
);

const Template = args => {
	return (
		<>
			<TemplateH2 { ...args } />
			<TemplateH3 { ...args } />
		</>
	);
};

const DefaultArgs = {};
export const Default = Template.bind( {} );
Default.args = DefaultArgs;

export const HeadlineH2 = TemplateH2.bind( {} );
HeadlineH2.storyName = 'H2';
HeadlineH2.args = {
	weight: 'bold',
} as H3Props;

export const HeadlineH3 = TemplateH3.bind( {} );
HeadlineH3.storyName = 'H3';
HeadlineH3.args = {
	weight: 'bold',
} as H3Props;
`,d={Default:{startLoc:{col:17,line:57},endLoc:{col:1,line:64},startBody:{col:17,line:57},endBody:{col:1,line:64}},HeadlineH2:{startLoc:{col:19,line:39},endLoc:{col:1,line:46},startBody:{col:19,line:39},endBody:{col:1,line:46}},HeadlineH3:{startLoc:{col:19,line:48},endLoc:{col:1,line:55},startBody:{col:19,line:48},endBody:{col:1,line:55}}};const n=["regular","bold"],h={parameters:{storySource:{source:`import React from 'react';
import { H2, H3 } from '../index';
import styles from './style.module.scss';
import type { H3Props } from '../types';

const TIPOGRAPHY_WEIGHTS: Array< H3Props[ 'weight' ] > = [ 'regular', 'bold' ];

export default {
	title: 'JS Packages/Components/Text/Heading',
	component: H2,
	argTypes: {
		children: {
			control: { type: 'text' },
		},
		weight: {
			control: { type: 'select' },
			options: TIPOGRAPHY_WEIGHTS,
		},
	},
};

/**
 * Helper component to create a the story.
 *
 * @param {object} props                   - Component props.
 * @param {React.Component} props.children - Icon component children.
 * @returns {React.Component}                Text component instance.
 */
function Instance( { children } ) {
	return (
		<div className={ styles.instance }>
			<span>Text above to the the component...</span>
			{ children }
			<span>Text below to the the component...</span>
		</div>
	);
}

const TemplateH2 = args => (
	<Instance>
		<H2 { ...args }>
			{ args?.children ||
				'Headline Medium - Manage your Jetpack plan and products all in one place' }
		</H2>
	</Instance>
);

const TemplateH3 = args => (
	<Instance>
		<H3 { ...args }>
			{ args?.children ||
				'Headline Small - Manage your Jetpack plan and products all in one place' }
		</H3>
	</Instance>
);

const Template = args => {
	return (
		<>
			<TemplateH2 { ...args } />
			<TemplateH3 { ...args } />
		</>
	);
};

const DefaultArgs = {};
export const Default = Template.bind( {} );
Default.args = DefaultArgs;

export const HeadlineH2 = TemplateH2.bind( {} );
HeadlineH2.storyName = 'H2';
HeadlineH2.args = {
	weight: 'bold',
} as H3Props;

export const HeadlineH3 = TemplateH3.bind( {} );
HeadlineH3.storyName = 'H3';
HeadlineH3.args = {
	weight: 'bold',
} as H3Props;
`,locationsMap:{default:{startLoc:{col:17,line:57},endLoc:{col:1,line:64},startBody:{col:17,line:57},endBody:{col:1,line:64}},"headline-h-2":{startLoc:{col:19,line:39},endLoc:{col:1,line:46},startBody:{col:19,line:39},endBody:{col:1,line:46}},"headline-h-3":{startLoc:{col:19,line:48},endLoc:{col:1,line:55},startBody:{col:19,line:48},endBody:{col:1,line:55}}}}},title:"JS Packages/Components/Text/Heading",component:a.H2,argTypes:{children:{control:{type:"text"}},weight:{control:{type:"select"},options:n}}};function u({children:s}){return(0,e.jsxs)("div",{className:_.Z.instance,children:[(0,e.jsx)("span",{children:"Text above to the the component..."}),s,(0,e.jsx)("span",{children:"Text below to the the component..."})]})}u.displayName="Instance";const p=s=>(0,e.jsx)(u,{children:(0,e.jsx)(a.H2,{...s,children:(s==null?void 0:s.children)||"Headline Medium - Manage your Jetpack plan and products all in one place"})});p.displayName="TemplateH2";const y=s=>(0,e.jsx)(u,{children:(0,e.jsx)(a.H3,{...s,children:(s==null?void 0:s.children)||"Headline Small - Manage your Jetpack plan and products all in one place"})});y.displayName="TemplateH3";const w=s=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(p,{...s}),(0,e.jsx)(y,{...s})]}),O={},H=w.bind({});H.args=O;const i=p.bind({});i.storyName="H2",i.args={weight:"bold"};const m=y.bind({});m.storyName="H3",m.args={weight:"bold"},H.parameters={...H.parameters,docs:{...(g=H.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <>
            <TemplateH2 {...args} />
            <TemplateH3 {...args} />
        </>;
}`,...(T=(x=H.parameters)==null?void 0:x.docs)==null?void 0:T.source}}},i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`args => <Instance>
        <H2 {...args}>
            {args?.children || 'Headline Medium - Manage your Jetpack plan and products all in one place'}
        </H2>
    </Instance>`,...(f=(E=i.parameters)==null?void 0:E.docs)==null?void 0:f.source}}},m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`args => <Instance>
        <H3 {...args}>
            {args?.children || 'Headline Small - Manage your Jetpack plan and products all in one place'}
        </H3>
    </Instance>`,...(j=(I=m.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const S=["Default","HeadlineH2","HeadlineH3"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(c,l)=>{var t,r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var a={}.hasOwnProperty,_="[native code]";function e(){for(var o=[],d=0;d<arguments.length;d++){var n=arguments[d];if(n){var h=typeof n;if(h==="string"||h==="number")o.push(n);else if(Array.isArray(n)){if(n.length){var u=e.apply(null,n);u&&o.push(u)}}else if(h==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){o.push(n.toString());continue}for(var p in n)a.call(n,p)&&n[p]&&o.push(p)}}}return o.join(" ")}c.exports?(e.default=e,c.exports=e):(t=[],r=function(){return e}.apply(l,t),r!==void 0&&(c.exports=r))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss":(c,l,t)=>{"use strict";t.d(l,{Z:()=>d});var r=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=t.n(r),_=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),e=t.n(_),o=e()(a());o.push([c.id,'.w736mVCf7VOQpYIxPcJe span{color:var(--jp-gray-40);display:inline-block;width:100%;background-color:var(--jp-white-off)}.WpIUNBUwwqx8Hr_k06mr{height:100%;display:flex;margin-top:50px}.MJuFkehZttz46HmFOosb,.BCVIHJZOaIcvBKbR78IJ{flex-grow:1}.K7dHaXc83Er_lSr0dXyw{background-color:#a68169;position:relative}.K7dHaXc83Er_lSr0dXyw:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p{background-color:#b9c386;position:relative}.K7dHaXc83Er_lSr0dXyw>p:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0{min-width:200px;min-height:50px;line-height:50px;background-color:#8fafba;text-align:center;position:relative}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0:after{content:" ";border:1px dashed rgba(0,0,0,.4);display:block;position:absolute;top:0;left:0;height:100%;width:100%}',""]),o.locals={instance:"w736mVCf7VOQpYIxPcJe","box-model-wrapper":"WpIUNBUwwqx8Hr_k06mr","box-model-side-left":"MJuFkehZttz46HmFOosb","box-model-side-right":"BCVIHJZOaIcvBKbR78IJ","box-model-side-center":"K7dHaXc83Er_lSr0dXyw","box-model-inner":"c8PNEHkZltBtBayh_np0"};const d=o},"../components/components/text/stories/style.module.scss":(c,l,t)=>{"use strict";t.d(l,{Z:()=>d});var r=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=t.n(r),_=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss"),e={};e.insert="head",e.singleton=!1;var o=a()(_.Z,e);const d=_.Z.locals||{}}}]);})();
