"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2593],{"../components/components/text/stories/index.stories.tsx":(x,d,s)=>{s.r(d),s.d(d,{BoxModel:()=>u,CustomComponent:()=>m,CustomTag:()=>i,Default:()=>c,__namedExportsOrder:()=>E,default:()=>p});var l=s("../components/components/text/index.tsx"),_=s("../components/components/text/constants.ts"),a=s("../components/components/text/stories/style.module.scss"),e=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),t=`import Text, { BOX_MODEL_VALUES, H2, H3, Title, VARIANTS_MAPPING } from '../index.tsx';
import styles from './style.module.scss';
import type { SpacingValue } from '../types.ts';

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
`,n={Default:{startLoc:{col:17,line:34},endLoc:{col:2,line:37},startBody:{col:17,line:34},endBody:{col:2,line:37}},CustomTag:{startLoc:{col:17,line:34},endLoc:{col:2,line:37},startBody:{col:17,line:34},endBody:{col:2,line:37}},CustomComponent:{startLoc:{col:17,line:34},endLoc:{col:2,line:37},startBody:{col:17,line:34},endBody:{col:2,line:37}},BoxModel:{startLoc:{col:25,line:59},endLoc:{col:2,line:75},startBody:{col:25,line:59},endBody:{col:2,line:75}}};const o=[0,1,2,3,4,5,6,7,8],p={parameters:{storySource:{source:`/* wp:polyfill */
/* wp:polyfill esnext.iterator.constructor */
/* wp:polyfill esnext.iterator.reduce */
import Text, { BOX_MODEL_VALUES, H2, H3, Title, VARIANTS_MAPPING } from '../index.tsx';
import styles from './style.module.scss';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SPACING_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8];
export default {
  title: 'JS Packages/Components/Text',
  component: Text,
  argTypes: {
    ...BOX_MODEL_VALUES.reduce((obj, cur) => ({
      ...obj,
      [cur]: {
        control: {
          type: 'select'
        },
        options: SPACING_VALUES
      }
    }), {}),
    variant: {
      control: {
        type: 'select'
      },
      options: Object.keys(VARIANTS_MAPPING)
    }
  },
  subcomponents: {
    H2,
    H3,
    Title
  }
};
const Template = args => /*#__PURE__*/_jsx(Text, {
  ...args,
  children: args.variant ?? 'body'
});
export const Default = Template.bind({});
Default.args = {
  variant: 'headline-medium'
};
export const CustomTag = Template.bind({});
CustomTag.args = {
  variant: 'title-small',
  component: 'div'
};
const Custom = ({
  className,
  children
}) => /*#__PURE__*/_jsxs("span", {
  className: className,
  children: [children, " Composition"]
});
export const CustomComponent = Template.bind({});
CustomComponent.args = {
  variant: 'headline-small',
  component: Custom
};
const BoxModelTemplate = args => /*#__PURE__*/_jsxs("div", {
  className: styles['box-model-wrapper'],
  children: [/*#__PURE__*/_jsx("div", {
    className: styles['box-model-side-left']
  }), /*#__PURE__*/_jsx("div", {
    className: styles['box-model-side-center'],
    children: /*#__PURE__*/_jsx(Text, {
      ...args,
      children: /*#__PURE__*/_jsx("div", {
        className: styles['box-model-inner'],
        children: "Box Model"
      })
    })
  }), /*#__PURE__*/_jsx("div", {
    className: styles['box-model-side-right']
  })]
});
export const BoxModel = BoxModelTemplate.bind({});`,locationsMap:{default:{startLoc:{col:17,line:34},endLoc:{col:2,line:37},startBody:{col:17,line:34},endBody:{col:2,line:37}},"custom-tag":{startLoc:{col:17,line:34},endLoc:{col:2,line:37},startBody:{col:17,line:34},endBody:{col:2,line:37}},"custom-component":{startLoc:{col:17,line:34},endLoc:{col:2,line:37},startBody:{col:17,line:34},endBody:{col:2,line:37}},"box-model":{startLoc:{col:25,line:59},endLoc:{col:2,line:75},startBody:{col:25,line:59},endBody:{col:2,line:75}}}}},title:"JS Packages/Components/Text",component:l.Ay,argTypes:{..._.Z.reduce((r,b)=>({...r,[b]:{control:{type:"select"},options:o}}),{}),variant:{control:{type:"select"},options:Object.keys(_.Q)}},subcomponents:{H2:l.H2,H3:l.H3,Title:l.hE}},y=r=>(0,e.jsx)(l.Ay,{...r,children:r.variant??"body"}),c=y.bind({});c.args={variant:"headline-medium"};const i=y.bind({});i.args={variant:"title-small",component:"div"};const g=({className:r,children:b})=>(0,e.jsxs)("span",{className:r,children:[b," Composition"]}),m=y.bind({});m.args={variant:"headline-small",component:g};const u=(r=>(0,e.jsxs)("div",{className:a.A["box-model-wrapper"],children:[(0,e.jsx)("div",{className:a.A["box-model-side-left"]}),(0,e.jsx)("div",{className:a.A["box-model-side-center"],children:(0,e.jsx)(l.Ay,{...r,children:(0,e.jsx)("div",{className:a.A["box-model-inner"],children:"Box Model"})})}),(0,e.jsx)("div",{className:a.A["box-model-side-right"]})]})).bind({}),E=["Default","CustomTag","CustomComponent","BoxModel"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...c.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...i.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...m.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <div className={styles['box-model-wrapper']}>
        <div className={styles['box-model-side-left']} />
        <div className={styles['box-model-side-center']}>
            <Text {...args}>
                <div className={styles['box-model-inner']}>Box Model</div>
            </Text>
        </div>
        <div className={styles['box-model-side-right']} />
    </div>`,...u.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(x,d,s)=>{s.d(d,{A:()=>a});function l(e){var t,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var p=e.length;for(t=0;t<p;t++)e[t]&&(n=l(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function _(){for(var e,t,n=0,o="",p=arguments.length;n<p;n++)(e=arguments[n])&&(t=l(e))&&(o&&(o+=" "),o+=t);return o}const a=_},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss":(x,d,s)=>{s.d(d,{A:()=>n});var l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=s.n(l),a=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),e=s.n(a),t=e()(_());t.push([x.id,'.w736mVCf7VOQpYIxPcJe span{color:var(--jp-gray-40);display:inline-block;width:100%;background-color:var(--jp-white-off)}.WpIUNBUwwqx8Hr_k06mr{height:100%;display:flex;margin-top:50px}.MJuFkehZttz46HmFOosb,.BCVIHJZOaIcvBKbR78IJ{flex-grow:1}.K7dHaXc83Er_lSr0dXyw{background-color:#a68169;position:relative}.K7dHaXc83Er_lSr0dXyw:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p{background-color:#b9c386;position:relative}.K7dHaXc83Er_lSr0dXyw>p:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0{min-width:200px;min-height:50px;line-height:50px;background-color:#8fafba;text-align:center;position:relative}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0:after{content:" ";border:1px dashed rgba(0,0,0,.4);display:block;position:absolute;top:0;left:0;height:100%;width:100%}',""]),t.locals={instance:"w736mVCf7VOQpYIxPcJe","box-model-wrapper":"WpIUNBUwwqx8Hr_k06mr","box-model-side-left":"MJuFkehZttz46HmFOosb","box-model-side-right":"BCVIHJZOaIcvBKbR78IJ","box-model-side-center":"K7dHaXc83Er_lSr0dXyw","box-model-inner":"c8PNEHkZltBtBayh_np0"};const n=t},"../components/components/text/stories/style.module.scss":(x,d,s)=>{s.d(d,{A:()=>n});var l=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=s.n(l),a=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss"),e={};e.insert="head",e.singleton=!1;var t=_()(a.A,e);const n=a.A.locals||{}}}]);
