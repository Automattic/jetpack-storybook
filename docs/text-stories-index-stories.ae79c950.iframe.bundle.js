"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2593],{"../components/components/text/stories/index.stories.tsx":(T,m,n)=>{n.r(m),n.d(m,{BoxModel:()=>c,CustomComponent:()=>l,CustomTag:()=>a,Default:()=>s,__namedExportsOrder:()=>y,default:()=>_});var o=n("../components/components/text/index.tsx"),p=n("../components/components/text/constants.ts"),r=n("../components/components/text/stories/style.module.scss"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),g=`import Text, { BOX_MODEL_VALUES, H2, H3, Title, VARIANTS_MAPPING } from '../index.tsx';
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
`,v={Default:{startLoc:{col:17,line:34},endLoc:{col:2,line:37},startBody:{col:17,line:34},endBody:{col:2,line:37}},CustomTag:{startLoc:{col:17,line:34},endLoc:{col:2,line:37},startBody:{col:17,line:34},endBody:{col:2,line:37}},CustomComponent:{startLoc:{col:17,line:34},endLoc:{col:2,line:37},startBody:{col:17,line:34},endBody:{col:2,line:37}},BoxModel:{startLoc:{col:25,line:59},endLoc:{col:2,line:75},startBody:{col:25,line:59},endBody:{col:2,line:75}}};const x=[0,1,2,3,4,5,6,7,8],_={parameters:{storySource:{source:`/* wp:polyfill */
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
export const BoxModel = BoxModelTemplate.bind({});`,locationsMap:{default:{startLoc:{col:17,line:34},endLoc:{col:2,line:37},startBody:{col:17,line:34},endBody:{col:2,line:37}},"custom-tag":{startLoc:{col:17,line:34},endLoc:{col:2,line:37},startBody:{col:17,line:34},endBody:{col:2,line:37}},"custom-component":{startLoc:{col:17,line:34},endLoc:{col:2,line:37},startBody:{col:17,line:34},endBody:{col:2,line:37}},"box-model":{startLoc:{col:25,line:59},endLoc:{col:2,line:75},startBody:{col:25,line:59},endBody:{col:2,line:75}}}}},title:"JS Packages/Components/Text",component:o.Ay,argTypes:{...p.Z.reduce((t,i)=>({...t,[i]:{control:{type:"select"},options:x}}),{}),variant:{control:{type:"select"},options:Object.keys(p.Q)}},subcomponents:{H2:o.H2,H3:o.H3,Title:o.hE}},d=t=>(0,e.jsx)(o.Ay,{...t,children:t.variant??"body"}),s=d.bind({});s.args={variant:"headline-medium"};const a=d.bind({});a.args={variant:"title-small",component:"div"};const u=({className:t,children:i})=>(0,e.jsxs)("span",{className:t,children:[i," Composition"]}),l=d.bind({});l.args={variant:"headline-small",component:u};const c=(t=>(0,e.jsxs)("div",{className:r.A["box-model-wrapper"],children:[(0,e.jsx)("div",{className:r.A["box-model-side-left"]}),(0,e.jsx)("div",{className:r.A["box-model-side-center"],children:(0,e.jsx)(o.Ay,{...t,children:(0,e.jsx)("div",{className:r.A["box-model-inner"],children:"Box Model"})})}),(0,e.jsx)("div",{className:r.A["box-model-side-right"]})]})).bind({}),y=["Default","CustomTag","CustomComponent","BoxModel"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...s.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...a.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...l.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <div className={styles['box-model-wrapper']}>
        <div className={styles['box-model-side-left']} />
        <div className={styles['box-model-side-center']}>
            <Text {...args}>
                <div className={styles['box-model-inner']}>Box Model</div>
            </Text>
        </div>
        <div className={styles['box-model-side-right']} />
    </div>`,...c.parameters?.docs?.source}}}}}]);
