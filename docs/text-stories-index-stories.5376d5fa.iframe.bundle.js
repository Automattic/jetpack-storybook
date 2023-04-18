(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6591],{"../components/components/text/stories/index.stories.tsx":(_,l,e)=>{var v,C,E,B,f,h,S,M,N,P,j,A;"use strict";e.r(l),e.d(l,{BoxModel:()=>y,CustomComponent:()=>p,CustomTag:()=>i,Default:()=>m,__namedExportsOrder:()=>O,default:()=>b});var n=e("../components/components/text/index.tsx"),d=e("../components/components/text/constants.ts"),o=e("../components/components/text/stories/style.module.scss"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=`import Text, { BOX_MODEL_VALUES, H2, H3, Title, VARIANTS_MAPPING } from '../index';
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
`,t={Default:{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},CustomTag:{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},CustomComponent:{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},BoxModel:{startLoc:{col:25,line:50},endLoc:{col:10,line:58},startBody:{col:25,line:50},endBody:{col:10,line:58}}};const x=[0,1,2,3,4,5,6,7,8],b={parameters:{storySource:{source:`import Text, { BOX_MODEL_VALUES, H2, H3, Title, VARIANTS_MAPPING } from '../index';
import styles from './style.module.scss';
import type { SpacingValue } from '../types';
const SPACING_VALUES: Array<SpacingValue> = [0, 1, 2, 3, 4, 5, 6, 7, 8];
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
const Template = args => <Text {...args}>{args.variant ?? 'body'}</Text>;
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
}) => <span className={className}>{children} Composition</span>;
export const CustomComponent = Template.bind({});
CustomComponent.args = {
  variant: 'headline-small',
  component: Custom
};
const BoxModelTemplate = args => <div className={styles['box-model-wrapper']}>
        <div className={styles['box-model-side-left']} />
        <div className={styles['box-model-side-center']}>
            <Text {...args}>
                <div className={styles['box-model-inner']}>Box Model</div>
            </Text>
        </div>
        <div className={styles['box-model-side-right']} />
    </div>;
export const BoxModel = BoxModelTemplate.bind({});
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <Text {...args}>{args.variant ?? 'body'}</Text>",
      ...Default.parameters?.docs?.source
    }
  }
};
CustomTag.parameters = {
  ...CustomTag.parameters,
  docs: {
    ...CustomTag.parameters?.docs,
    source: {
      originalSource: "args => <Text {...args}>{args.variant ?? 'body'}</Text>",
      ...CustomTag.parameters?.docs?.source
    }
  }
};
CustomComponent.parameters = {
  ...CustomComponent.parameters,
  docs: {
    ...CustomComponent.parameters?.docs,
    source: {
      originalSource: "args => <Text {...args}>{args.variant ?? 'body'}</Text>",
      ...CustomComponent.parameters?.docs?.source
    }
  }
};
BoxModel.parameters = {
  ...BoxModel.parameters,
  docs: {
    ...BoxModel.parameters?.docs,
    source: {
      originalSource: "args => <div className={styles['box-model-wrapper']}>\\n        <div className={styles['box-model-side-left']} />\\n        <div className={styles['box-model-side-center']}>\\n            <Text {...args}>\\n                <div className={styles['box-model-inner']}>Box Model</div>\\n            </Text>\\n        </div>\\n        <div className={styles['box-model-side-right']} />\\n    </div>",
      ...BoxModel.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},"custom-tag":{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},"custom-component":{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},"box-model":{startLoc:{col:25,line:50},endLoc:{col:10,line:58},startBody:{col:25,line:50},endBody:{col:10,line:58}}}}},title:"JS Packages/Components/Text",component:n.ZP,argTypes:{...d.s.reduce((c,u)=>({...c,[u]:{control:{type:"select"},options:x}}),{}),variant:{control:{type:"select"},options:Object.keys(d.h)}},subcomponents:{H2:n.H2,H3:n.H3,Title:n.Dx}},r=c=>{var u;return(0,s.jsx)(n.ZP,{...c,children:(u=c.variant)!=null?u:"body"})};r.displayName="Template";const m=r.bind({});m.args={variant:"headline-medium"};const i=r.bind({});i.args={variant:"title-small",component:"div"};const g=c=>{let{className:u,children:D}=c;return(0,s.jsxs)("span",{className:u,children:[D," Composition"]})};g.displayName="Custom";const p=r.bind({});p.args={variant:"headline-small",component:g};const T=c=>(0,s.jsxs)("div",{className:o.Z["box-model-wrapper"],children:[(0,s.jsx)("div",{className:o.Z["box-model-side-left"]}),(0,s.jsx)("div",{className:o.Z["box-model-side-center"],children:(0,s.jsx)(n.ZP,{...c,children:(0,s.jsx)("div",{className:o.Z["box-model-inner"],children:"Box Model"})})}),(0,s.jsx)("div",{className:o.Z["box-model-side-right"]})]});T.displayName="BoxModelTemplate";const y=T.bind({});m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(E=(C=m.parameters)==null?void 0:C.docs)==null?void 0:E.source}}},i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}},p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(N=(M=p.parameters)==null?void 0:M.docs)==null?void 0:N.source}}},y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`args => <div className={styles['box-model-wrapper']}>
        <div className={styles['box-model-side-left']} />
        <div className={styles['box-model-side-center']}>
            <Text {...args}>
                <div className={styles['box-model-inner']}>Box Model</div>
            </Text>
        </div>
        <div className={styles['box-model-side-right']} />
    </div>`,...(A=(j=y.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const O=["Default","CustomTag","CustomComponent","BoxModel"]},"../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js":(_,l)=>{var e,n;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var d={}.hasOwnProperty;function o(){for(var s=[],a=0;a<arguments.length;a++){var t=arguments[a];if(t){var x=typeof t;if(x==="string"||x==="number")s.push(t);else if(Array.isArray(t)){if(t.length){var b=o.apply(null,t);b&&s.push(b)}}else if(x==="object")if(t.toString===Object.prototype.toString)for(var r in t)d.call(t,r)&&t[r]&&s.push(r);else s.push(t.toString())}}return s.join(" ")}_.exports?(o.default=o,_.exports=o):(e=[],n=function(){return o}.apply(l,e),n!==void 0&&(_.exports=n))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss":(_,l,e)=>{"use strict";e.d(l,{Z:()=>t});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(n),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(o),a=s()(d());a.push([_.id,'.w736mVCf7VOQpYIxPcJe span{color:var(--jp-gray-40);display:inline-block;width:100%;background-color:var(--jp-white-off)}.WpIUNBUwwqx8Hr_k06mr{height:100%;display:flex;margin-top:50px}.MJuFkehZttz46HmFOosb,.BCVIHJZOaIcvBKbR78IJ{flex-grow:1}.K7dHaXc83Er_lSr0dXyw{background-color:#a68169;position:relative}.K7dHaXc83Er_lSr0dXyw:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p{background-color:#b9c386;position:relative}.K7dHaXc83Er_lSr0dXyw>p:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0{min-width:200px;min-height:50px;line-height:50px;background-color:#8fafba;text-align:center;position:relative}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0:after{content:" ";border:1px dashed rgba(0,0,0,.4);display:block;position:absolute;top:0;left:0;height:100%;width:100%}',""]),a.locals={instance:"w736mVCf7VOQpYIxPcJe","box-model-wrapper":"WpIUNBUwwqx8Hr_k06mr","box-model-side-left":"MJuFkehZttz46HmFOosb","box-model-side-right":"BCVIHJZOaIcvBKbR78IJ","box-model-side-center":"K7dHaXc83Er_lSr0dXyw","box-model-inner":"c8PNEHkZltBtBayh_np0"};const t=a},"../components/components/text/stories/style.module.scss":(_,l,e)=>{"use strict";e.d(l,{Z:()=>t});var n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(n),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss"),s={};s.insert="head",s.singleton=!1;var a=d()(o.Z,s);const t=o.Z.locals||{}}}]);})();
