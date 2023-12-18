(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6591],{"../components/components/text/stories/index.stories.tsx":(i,d,e)=>{var g,E,C,B,f,h,S,P,j,A,M,N;"use strict";e.r(d),e.d(d,{BoxModel:()=>b,CustomComponent:()=>u,CustomTag:()=>p,Default:()=>a,__namedExportsOrder:()=>O,default:()=>y});var s=e("../components/components/text/index.tsx"),_=e("../components/components/text/constants.ts"),n=e("../components/components/text/stories/style.module.scss"),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=`import Text, { BOX_MODEL_VALUES, H2, H3, Title, VARIANTS_MAPPING } from '../index';
import styles from './style.module.scss';
import type { SpacingValue } from '../types';

const SPACING_VALUES: Array< SpacingValue > = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ];

export default {
	title: 'JS Packages/Components/Text',
	component: Text,
	argTypes: {
		...BOX_MODEL_VALUES.reduce(
			( obj, cur ) => ( {
				...obj,
				[ cur ]: {
					control: { type: 'select' },
					options: SPACING_VALUES,
				},
			} ),
			{}
		),
		variant: {
			control: {
				type: 'select',
			},
			options: Object.keys( VARIANTS_MAPPING ),
		},
	},
	subcomponents: { H2, H3, Title },
};

const Template = args => <Text { ...args }>{ args.variant ?? 'body' }</Text>;

export const Default = Template.bind( {} );

Default.args = {
	variant: 'headline-medium',
};

export const CustomTag = Template.bind( {} );

CustomTag.args = {
	variant: 'title-small',
	component: 'div',
};

const Custom = ( { className, children } ) => (
	<span className={ className }>{ children } Composition</span>
);

export const CustomComponent = Template.bind( {} );

CustomComponent.args = {
	variant: 'headline-small',
	component: Custom,
};

const BoxModelTemplate = args => (
	<div className={ styles[ 'box-model-wrapper' ] }>
		<div className={ styles[ 'box-model-side-left' ] } />
		<div className={ styles[ 'box-model-side-center' ] }>
			<Text { ...args }>
				<div className={ styles[ 'box-model-inner' ] }>Box Model</div>
			</Text>
		</div>
		<div className={ styles[ 'box-model-side-right' ] } />
	</div>
);

export const BoxModel = BoxModelTemplate.bind( {} );
`,r={Default:{startLoc:{col:17,line:31},endLoc:{col:76,line:31},startBody:{col:17,line:31},endBody:{col:76,line:31}},CustomTag:{startLoc:{col:17,line:31},endLoc:{col:76,line:31},startBody:{col:17,line:31},endBody:{col:76,line:31}},CustomComponent:{startLoc:{col:17,line:31},endLoc:{col:76,line:31},startBody:{col:17,line:31},endBody:{col:76,line:31}},BoxModel:{startLoc:{col:25,line:57},endLoc:{col:1,line:67},startBody:{col:25,line:57},endBody:{col:1,line:67}}};const o=[0,1,2,3,4,5,6,7,8],y={parameters:{storySource:{source:`import Text, { BOX_MODEL_VALUES, H2, H3, Title, VARIANTS_MAPPING } from '../index';
import styles from './style.module.scss';
import type { SpacingValue } from '../types';

const SPACING_VALUES: Array< SpacingValue > = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ];

export default {
	title: 'JS Packages/Components/Text',
	component: Text,
	argTypes: {
		...BOX_MODEL_VALUES.reduce(
			( obj, cur ) => ( {
				...obj,
				[ cur ]: {
					control: { type: 'select' },
					options: SPACING_VALUES,
				},
			} ),
			{}
		),
		variant: {
			control: {
				type: 'select',
			},
			options: Object.keys( VARIANTS_MAPPING ),
		},
	},
	subcomponents: { H2, H3, Title },
};

const Template = args => <Text { ...args }>{ args.variant ?? 'body' }</Text>;

export const Default = Template.bind( {} );

Default.args = {
	variant: 'headline-medium',
};

export const CustomTag = Template.bind( {} );

CustomTag.args = {
	variant: 'title-small',
	component: 'div',
};

const Custom = ( { className, children } ) => (
	<span className={ className }>{ children } Composition</span>
);

export const CustomComponent = Template.bind( {} );

CustomComponent.args = {
	variant: 'headline-small',
	component: Custom,
};

const BoxModelTemplate = args => (
	<div className={ styles[ 'box-model-wrapper' ] }>
		<div className={ styles[ 'box-model-side-left' ] } />
		<div className={ styles[ 'box-model-side-center' ] }>
			<Text { ...args }>
				<div className={ styles[ 'box-model-inner' ] }>Box Model</div>
			</Text>
		</div>
		<div className={ styles[ 'box-model-side-right' ] } />
	</div>
);

export const BoxModel = BoxModelTemplate.bind( {} );
`,locationsMap:{default:{startLoc:{col:17,line:31},endLoc:{col:76,line:31},startBody:{col:17,line:31},endBody:{col:76,line:31}},"custom-tag":{startLoc:{col:17,line:31},endLoc:{col:76,line:31},startBody:{col:17,line:31},endBody:{col:76,line:31}},"custom-component":{startLoc:{col:17,line:31},endLoc:{col:76,line:31},startBody:{col:17,line:31},endBody:{col:76,line:31}},"box-model":{startLoc:{col:25,line:57},endLoc:{col:1,line:67},startBody:{col:25,line:57},endBody:{col:1,line:67}}}}},title:"JS Packages/Components/Text",component:s.ZP,argTypes:{..._.s.reduce((c,x)=>({...c,[x]:{control:{type:"select"},options:o}}),{}),variant:{control:{type:"select"},options:Object.keys(_.h)}},subcomponents:{H2:s.H2,H3:s.H3,Title:s.Dx}},m=c=>{var x;return(0,t.jsx)(s.ZP,{...c,children:(x=c.variant)!=null?x:"body"})};m.displayName="Template";const a=m.bind({});a.args={variant:"headline-medium"};const p=m.bind({});p.args={variant:"title-small",component:"div"};const v=({className:c,children:x})=>(0,t.jsxs)("span",{className:c,children:[x," Composition"]});v.displayName="Custom";const u=m.bind({});u.args={variant:"headline-small",component:v};const T=c=>(0,t.jsxs)("div",{className:n.Z["box-model-wrapper"],children:[(0,t.jsx)("div",{className:n.Z["box-model-side-left"]}),(0,t.jsx)("div",{className:n.Z["box-model-side-center"],children:(0,t.jsx)(s.ZP,{...c,children:(0,t.jsx)("div",{className:n.Z["box-model-inner"],children:"Box Model"})})}),(0,t.jsx)("div",{className:n.Z["box-model-side-right"]})]});T.displayName="BoxModelTemplate";const b=T.bind({});a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(C=(E=a.parameters)==null?void 0:E.docs)==null?void 0:C.source}}},p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(h=(f=p.parameters)==null?void 0:f.docs)==null?void 0:h.source}}},u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(j=(P=u.parameters)==null?void 0:P.docs)==null?void 0:j.source}}},b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`args => <div className={styles['box-model-wrapper']}>
        <div className={styles['box-model-side-left']} />
        <div className={styles['box-model-side-center']}>
            <Text {...args}>
                <div className={styles['box-model-inner']}>Box Model</div>
            </Text>
        </div>
        <div className={styles['box-model-side-right']} />
    </div>`,...(N=(M=b.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const O=["Default","CustomTag","CustomComponent","BoxModel"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(i,d)=>{var e,s;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var _={}.hasOwnProperty,n="[native code]";function t(){for(var l=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var y=typeof o;if(y==="string"||y==="number")l.push(o);else if(Array.isArray(o)){if(o.length){var m=t.apply(null,o);m&&l.push(m)}}else if(y==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){l.push(o.toString());continue}for(var a in o)_.call(o,a)&&o[a]&&l.push(a)}}}return l.join(" ")}i.exports?(t.default=t,i.exports=t):(e=[],s=function(){return t}.apply(d,e),s!==void 0&&(i.exports=s))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss":(i,d,e)=>{"use strict";e.d(d,{Z:()=>r});var s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(s),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(n),l=t()(_());l.push([i.id,'.w736mVCf7VOQpYIxPcJe span{color:var(--jp-gray-40);display:inline-block;width:100%;background-color:var(--jp-white-off)}.WpIUNBUwwqx8Hr_k06mr{height:100%;display:flex;margin-top:50px}.MJuFkehZttz46HmFOosb,.BCVIHJZOaIcvBKbR78IJ{flex-grow:1}.K7dHaXc83Er_lSr0dXyw{background-color:#a68169;position:relative}.K7dHaXc83Er_lSr0dXyw:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p{background-color:#b9c386;position:relative}.K7dHaXc83Er_lSr0dXyw>p:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0{min-width:200px;min-height:50px;line-height:50px;background-color:#8fafba;text-align:center;position:relative}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0:after{content:" ";border:1px dashed rgba(0,0,0,.4);display:block;position:absolute;top:0;left:0;height:100%;width:100%}',""]),l.locals={instance:"w736mVCf7VOQpYIxPcJe","box-model-wrapper":"WpIUNBUwwqx8Hr_k06mr","box-model-side-left":"MJuFkehZttz46HmFOosb","box-model-side-right":"BCVIHJZOaIcvBKbR78IJ","box-model-side-center":"K7dHaXc83Er_lSr0dXyw","box-model-inner":"c8PNEHkZltBtBayh_np0"};const r=l},"../components/components/text/stories/style.module.scss":(i,d,e)=>{"use strict";e.d(d,{Z:()=>r});var s=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(s),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss"),t={};t.insert="head",t.singleton=!1;var l=_()(n.Z,t);const r=n.Z.locals||{}}}]);})();
