(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6591],{"../components/components/text/stories/index.stories.tsx":(i,d,e)=>{var T,C,E,B,f,S,h,M,N,P,j,A;"use strict";e.r(d),e.d(d,{BoxModel:()=>b,CustomComponent:()=>u,CustomTag:()=>p,Default:()=>l,__namedExportsOrder:()=>O,default:()=>y});var o=e("../components/components/text/index.tsx"),r=e("../components/components/text/constants.ts"),n=e("../components/components/text/stories/style.module.scss"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=`import Text, { BOX_MODEL_VALUES, H2, H3, Title, VARIANTS_MAPPING } from '../index';
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
`,c={Default:{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},CustomTag:{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},CustomComponent:{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},BoxModel:{startLoc:{col:25,line:50},endLoc:{col:10,line:58},startBody:{col:25,line:50},endBody:{col:10,line:58}}};const t=[0,1,2,3,4,5,6,7,8],y={parameters:{storySource:{source:`import Text, { BOX_MODEL_VALUES, H2, H3, Title, VARIANTS_MAPPING } from '../index';
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
};`,locationsMap:{default:{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},"custom-tag":{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},"custom-component":{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},"box-model":{startLoc:{col:25,line:50},endLoc:{col:10,line:58},startBody:{col:25,line:50},endBody:{col:10,line:58}}}}},title:"JS Packages/Components/Text",component:o.ZP,argTypes:{...r.s.reduce((_,x)=>({..._,[x]:{control:{type:"select"},options:t}}),{}),variant:{control:{type:"select"},options:Object.keys(r.h)}},subcomponents:{H2:o.H2,H3:o.H3,Title:o.Dx}},m=_=>{var x;return(0,s.jsx)(o.ZP,{..._,children:(x=_.variant)!=null?x:"body"})};m.displayName="Template";const l=m.bind({});l.args={variant:"headline-medium"};const p=m.bind({});p.args={variant:"title-small",component:"div"};const g=_=>{let{className:x,children:D}=_;return(0,s.jsxs)("span",{className:x,children:[D," Composition"]})};g.displayName="Custom";const u=m.bind({});u.args={variant:"headline-small",component:g};const v=_=>(0,s.jsxs)("div",{className:n.Z["box-model-wrapper"],children:[(0,s.jsx)("div",{className:n.Z["box-model-side-left"]}),(0,s.jsx)("div",{className:n.Z["box-model-side-center"],children:(0,s.jsx)(o.ZP,{..._,children:(0,s.jsx)("div",{className:n.Z["box-model-inner"],children:"Box Model"})})}),(0,s.jsx)("div",{className:n.Z["box-model-side-right"]})]});v.displayName="BoxModelTemplate";const b=v.bind({});l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}},p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(S=(f=p.parameters)==null?void 0:f.docs)==null?void 0:S.source}}},u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(N=(M=u.parameters)==null?void 0:M.docs)==null?void 0:N.source}}},b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`args => <div className={styles['box-model-wrapper']}>
        <div className={styles['box-model-side-left']} />
        <div className={styles['box-model-side-center']}>
            <Text {...args}>
                <div className={styles['box-model-inner']}>Box Model</div>
            </Text>
        </div>
        <div className={styles['box-model-side-right']} />
    </div>`,...(A=(j=b.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const O=["Default","CustomTag","CustomComponent","BoxModel"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(i,d)=>{var e,o;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var r={}.hasOwnProperty,n="[native code]";function s(){for(var a=[],c=0;c<arguments.length;c++){var t=arguments[c];if(t){var y=typeof t;if(y==="string"||y==="number")a.push(t);else if(Array.isArray(t)){if(t.length){var m=s.apply(null,t);m&&a.push(m)}}else if(y==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){a.push(t.toString());continue}for(var l in t)r.call(t,l)&&t[l]&&a.push(l)}}}return a.join(" ")}i.exports?(s.default=s,i.exports=s):(e=[],o=function(){return s}.apply(d,e),o!==void 0&&(i.exports=o))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss":(i,d,e)=>{"use strict";e.d(d,{Z:()=>c});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(o),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(n),a=s()(r());a.push([i.id,'.w736mVCf7VOQpYIxPcJe span{color:var(--jp-gray-40);display:inline-block;width:100%;background-color:var(--jp-white-off)}.WpIUNBUwwqx8Hr_k06mr{height:100%;display:flex;margin-top:50px}.MJuFkehZttz46HmFOosb,.BCVIHJZOaIcvBKbR78IJ{flex-grow:1}.K7dHaXc83Er_lSr0dXyw{background-color:#a68169;position:relative}.K7dHaXc83Er_lSr0dXyw:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p{background-color:#b9c386;position:relative}.K7dHaXc83Er_lSr0dXyw>p:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0{min-width:200px;min-height:50px;line-height:50px;background-color:#8fafba;text-align:center;position:relative}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0:after{content:" ";border:1px dashed rgba(0,0,0,.4);display:block;position:absolute;top:0;left:0;height:100%;width:100%}',""]),a.locals={instance:"w736mVCf7VOQpYIxPcJe","box-model-wrapper":"WpIUNBUwwqx8Hr_k06mr","box-model-side-left":"MJuFkehZttz46HmFOosb","box-model-side-right":"BCVIHJZOaIcvBKbR78IJ","box-model-side-center":"K7dHaXc83Er_lSr0dXyw","box-model-inner":"c8PNEHkZltBtBayh_np0"};const c=a},"../components/components/text/stories/style.module.scss":(i,d,e)=>{"use strict";e.d(d,{Z:()=>c});var o=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(o),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss"),s={};s.insert="head",s.singleton=!1;var a=r()(n.Z,s);const c=n.Z.locals||{}}}]);})();
