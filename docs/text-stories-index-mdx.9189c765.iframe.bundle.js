(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1943,2593],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(i,o,s)=>{"use strict";s.d(o,{R:()=>t,x:()=>c});var d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},a=d.createContext(e);function t(r){const l=d.useContext(a);return d.useMemo(function(){return typeof r=="function"?r(l):{...l,...r}},[l,r])}function c(r){let l;return r.disableParentContext?l=typeof r.components=="function"?r.components(e):r.components||e:l=t(r.components),d.createElement(a.Provider,{value:l},r.children)}},"../components/components/text/stories/index.mdx":(i,o,s)=>{"use strict";s.r(o),s.d(o,{default:()=>p});var d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),a=s("../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),t=s("../../../node_modules/.pnpm/@storybook+blocks@8.5.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.5.8/node_modules/@storybook/blocks/dist/index.mjs"),c=s("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js"),r=s("../components/components/text/stories/index.stories.tsx");function l(m){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...m.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.W8,{of:r}),`
`,(0,e.jsx)(n.h1,{id:"text",children:"Text"}),`
`,(0,e.jsx)(n.p,{children:"Set of React jetpack-components intended to facilitate when dealing with rendering text content."}),`
`,(0,e.jsx)(n.h2,{id:"text-",children:"<Text />"}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.code,{children:"Text"})," is the primary component that renders text, supporting the following features:"]}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Typography"}),": provided by the ThemeProvider component."]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Spacing"}),": A simple range of shorthand classes to modify the text element's margin and padding."]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"props",children:"Props"}),`
`,(0,e.jsx)(n.h4,{id:"variant",children:"variant"}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.strong,{children:"Type"}),": ",(0,e.jsx)(n.code,{children:"headline-medium"}),", ",(0,e.jsx)(n.code,{children:"headline-small"}),", ",(0,e.jsx)(n.code,{children:"headline-small-regular"}),", ",(0,e.jsx)(n.code,{children:"title-medium"}),`,
`,(0,e.jsx)(n.code,{children:"title-medium-semi-bold"}),", ",(0,e.jsx)(n.code,{children:"title-small"}),", ",(0,e.jsx)(n.code,{children:"body"}),", ",(0,e.jsx)(n.code,{children:"body-small"}),", ",(0,e.jsx)(n.code,{children:"body-extra-small"}),`,
`,(0,e.jsx)(n.code,{children:"body-extra-small-bold"}),", ",(0,e.jsx)(n.code,{children:"label"}),"."]}),`
`,(0,e.jsx)(n.p,{children:"Define the text Typography variant among the options offered by the ThemeProvider component."}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:(0,c.A)`
    import Text from '@automattic/jetpack-components';
    
    function Hello() {
      return (
        <Text variant="headline-medium">
          Hello, Text component!
        </Text>
      );
    }
  `}),`
`,(0,e.jsx)(n.h4,{id:"spacing-properties",children:"Spacing properties"}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.strong,{children:"Type"}),": number, one of ",(0,e.jsx)(n.code,{children:"0"}),", ",(0,e.jsx)(n.code,{children:"1"}),", ",(0,e.jsx)(n.code,{children:"2"}),", ",(0,e.jsx)(n.code,{children:"3"}),", ",(0,e.jsx)(n.code,{children:"4"}),", ",(0,e.jsx)(n.code,{children:"5"}),", ",(0,e.jsx)(n.code,{children:"6"}),", ",(0,e.jsx)(n.code,{children:"7"}),", ",(0,e.jsx)(n.code,{children:"8"}),"."]}),`
`,(0,e.jsxs)(n.p,{children:["Use the following properties to define margin and padding of the text. The unit is defined by the ",(0,e.jsx)(n.code,{children:"--spacing-base"}),` value.
You can see how it works playing with the `,(0,e.jsx)(n.a,{href:"./?path=/story/js-packages-components-text--box-model",children:"Box Model"})," story."]}),`
`,(0,e.jsxs)(n.table,{children:[(0,e.jsx)(n.thead,{children:(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.th,{children:"Prop"}),(0,e.jsx)(n.th,{children:"Description"})]})}),(0,e.jsxs)(n.tbody,{children:[(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"m"})}),(0,e.jsx)(n.td,{children:"margin"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"mt"})}),(0,e.jsx)(n.td,{children:"margin-top"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"mr"})}),(0,e.jsx)(n.td,{children:"margin-right"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"mb"})}),(0,e.jsx)(n.td,{children:"margin-bottom"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"ml"})}),(0,e.jsx)(n.td,{children:"margin-left"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"mx"})}),(0,e.jsx)(n.td,{children:"margin left and right"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"my"})}),(0,e.jsx)(n.td,{children:"margin top and bottom"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"p"})}),(0,e.jsx)(n.td,{children:"padding"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"pt"})}),(0,e.jsx)(n.td,{children:"padding-top"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"pr"})}),(0,e.jsx)(n.td,{children:"padding-right"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"pb"})}),(0,e.jsx)(n.td,{children:"padding-bottom"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"pl"})}),(0,e.jsx)(n.td,{children:"padding-left"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"px"})}),(0,e.jsx)(n.td,{children:"padding left and right"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"py"})}),(0,e.jsx)(n.td,{children:"padding top and bottom"})]})]})]}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:(0,c.A)`
    import Text from '@automattic/jetpack-components';
    
    function HelloBoxModel() {
      return (
        <Text mt={ 2 } px={ 4 }>
          Hello, Text component!
        </Text>
      );
    }
  `}),`
`,(0,e.jsx)(n.h4,{id:"component",children:"component"}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.strong,{children:"Type"}),": ",(0,e.jsx)(n.code,{children:"elementType"}),", ",(0,e.jsx)(n.code,{children:"string"}),"."]}),`
`,(0,e.jsxs)(n.p,{children:["Force an specific tag (",(0,e.jsx)(n.code,{children:'"span"'}),", ",(0,e.jsx)(n.code,{children:'"div"'}),") or use a custom component that will receive className and children."]}),`
`,(0,e.jsxs)(n.p,{children:["The example below renders the component with a ",(0,e.jsx)(n.code,{children:"<span />"})," element."]}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:(0,c.A)`
    import Text from '@automattic/jetpack-components';
    function SpanTextComponent() {
      return (
        <Text component="span" variant="title-medium">
          Never underestimate the span element
        </Text>
      );
    }
  `}),`
`,(0,e.jsxs)(n.p,{children:[`The following example shows how to define the typography and the margin for a Custom component.
The className is passed down to the custom component, while the properties that belong to the Text component (in this case, `,(0,e.jsx)(n.code,{children:"component"}),", ",(0,e.jsx)(n.code,{children:"variant"})," and ",(0,e.jsx)(n.code,{children:"mb"}),") are not."]}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:(0,c.A)`
    import Text from '@automattic/jetpack-components';
    
    function CustomComponent( { children, className } ) {
      // className, provided by Text, is "custom-classname"
      return (
        <div className={ className }>{ children }</div>
      );
    }
    
    // Use a custom component when rendering the <Text />,
    // it passes down the className property to it.
    function CustomTextComponent() {
      return (
        <Text
          component={ CustomComponent }
          className="custom-classname"
          variant="title-medium"
          mb={ 3 }
        >
          Hello, Custom Text component!
        </Text>
      );
    }
  `}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.a,{href:".?path=/story/js-packages-components-text--custom-tag",children:"\u25B6\uFE0F Custom Tag story"})," and ",(0,e.jsx)(n.a,{href:".?path=/story/js-packages-components-text--custom-component",children:"\u25B6\uFE0F Custom Component story"})]}),`
`,(0,e.jsx)(n.h4,{id:"children",children:"Children"}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.strong,{children:"Type"}),": ",(0,e.jsx)(n.code,{children:"node"}),"."]}),`
`,(0,e.jsx)(n.p,{children:"The text itself that will be rendered."}),`
`,(0,e.jsx)(n.h1,{id:"text-based-components",children:"Text based components"}),`
`,(0,e.jsx)(n.h2,{id:"h2-",children:"<H2 />"}),`
`,(0,e.jsxs)(n.p,{children:["Text shorthand to render a ",(0,e.jsx)(n.code,{children:"heading-medium"})," text, applying proper spacing."]}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.a,{href:".?path=/story/js-packages-components-text-heading--headline-h-2",children:"\u25B6\uFE0F Story"})}),`
`,(0,e.jsx)(n.h2,{id:"h3-",children:"<H3 />"}),`
`,(0,e.jsxs)(n.p,{children:["Text shorthand to render a ",(0,e.jsx)(n.code,{children:"heading-small"})," text, applying proper spacing."]}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.a,{href:".?path=/story/js-packages-components-text-heading--headline-h-3",children:"\u25B6\uFE0F Story"})}),`
`,(0,e.jsx)(n.h3,{id:"props-1",children:"Props"}),`
`,(0,e.jsxs)(n.h4,{id:"weight-bold-default--regular",children:["Weight: ",(0,e.jsx)(n.code,{children:"bold"})," (default) | ",(0,e.jsx)(n.code,{children:"regular"})]}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:(0,c.A)`
    import { H3 } from '@automattic/jetpack-components';
    
    function Subtitle() {
      return (
        <H3 weight="regular">Let's explaining what H3 is</H3>
      );
    }
  `}),`
`,(0,e.jsx)(n.h2,{id:"title-",children:"<Title />"}),`
`,(0,e.jsxs)(n.p,{children:["Text shorthand to render a ",(0,e.jsx)(n.code,{children:"body"})," text, applying proper spacing."]}),`
`,(0,e.jsx)(n.h3,{id:"props-2",children:"Props"}),`
`,(0,e.jsxs)(n.h4,{id:"size-medium-default--small",children:["Size: ",(0,e.jsx)(n.code,{children:"medium"})," (default) | ",(0,e.jsx)(n.code,{children:"small"})]}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:(0,c.A)`
    import { Title } from '@automattic/jetpack-components';
    
    function Subtitle() {
      return (
        <Title size="small">
          To explain what a Title component does, we should before...
        </Title>
      );
    }
  `}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.a,{href:".?path=/story/js-packages-components-text-title--default",children:"\u25B6\uFE0F Story"})})]})}function p(m={}){const{wrapper:n}={...(0,a.R)(),...m.components};return n?(0,e.jsx)(n,{...m,children:(0,e.jsx)(l,{...m})}):l(m)}},"../../../node_modules/.pnpm/@storybook+blocks@8.5.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.5.8/node_modules/@storybook/blocks/dist sync recursive":i=>{function o(s){var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/@storybook+blocks@8.5.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.5.8/node_modules/@storybook/blocks/dist sync recursive",i.exports=o},"../../../node_modules/.pnpm/@storybook+core@8.5.8/node_modules/@storybook/core/dist/components sync recursive":i=>{function o(s){var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/@storybook+core@8.5.8/node_modules/@storybook/core/dist/components sync recursive",i.exports=o},"../../../node_modules/.pnpm/@storybook+core@8.5.8/node_modules/@storybook/core/dist/theming sync recursive":i=>{function o(s){var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/@storybook+core@8.5.8/node_modules/@storybook/core/dist/theming sync recursive",i.exports=o},"../components/components/text/stories/index.stories.tsx":(i,o,s)=>{"use strict";s.r(o),s.d(o,{BoxModel:()=>u,CustomComponent:()=>h,CustomTag:()=>x,Default:()=>n,__namedExportsOrder:()=>g,default:()=>p});var d=s("../components/components/text/index.tsx"),e=s("../components/components/text/constants.ts"),a=s("../components/components/text/stories/style.module.scss"),t=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),c=`import Text, { BOX_MODEL_VALUES, H2, H3, Title, VARIANTS_MAPPING } from '../index.js';
import styles from './style.module.scss';
import type { SpacingValue } from '../types.js';

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
`,r={Default:{startLoc:{col:17,line:34},endLoc:{col:2,line:37},startBody:{col:17,line:34},endBody:{col:2,line:37}},CustomTag:{startLoc:{col:17,line:34},endLoc:{col:2,line:37},startBody:{col:17,line:34},endBody:{col:2,line:37}},CustomComponent:{startLoc:{col:17,line:34},endLoc:{col:2,line:37},startBody:{col:17,line:34},endBody:{col:2,line:37}},BoxModel:{startLoc:{col:25,line:59},endLoc:{col:2,line:75},startBody:{col:25,line:59},endBody:{col:2,line:75}}};const l=[0,1,2,3,4,5,6,7,8],p={parameters:{storySource:{source:`/* wp:polyfill */
/* wp:polyfill esnext.iterator.constructor */
/* wp:polyfill esnext.iterator.reduce */
import Text, { BOX_MODEL_VALUES, H2, H3, Title, VARIANTS_MAPPING } from '../index.js';
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
export const BoxModel = BoxModelTemplate.bind({});`,locationsMap:{default:{startLoc:{col:17,line:34},endLoc:{col:2,line:37},startBody:{col:17,line:34},endBody:{col:2,line:37}},"custom-tag":{startLoc:{col:17,line:34},endLoc:{col:2,line:37},startBody:{col:17,line:34},endBody:{col:2,line:37}},"custom-component":{startLoc:{col:17,line:34},endLoc:{col:2,line:37},startBody:{col:17,line:34},endBody:{col:2,line:37}},"box-model":{startLoc:{col:25,line:59},endLoc:{col:2,line:75},startBody:{col:25,line:59},endBody:{col:2,line:75}}}}},title:"JS Packages/Components/Text",component:d.Ay,argTypes:{...e.Z.reduce((_,j)=>({..._,[j]:{control:{type:"select"},options:l}}),{}),variant:{control:{type:"select"},options:Object.keys(e.Q)}},subcomponents:{H2:d.H2,H3:d.H3,Title:d.hE}},m=_=>(0,t.jsx)(d.Ay,{..._,children:_.variant??"body"}),n=m.bind({});n.args={variant:"headline-medium"};const x=m.bind({});x.args={variant:"title-small",component:"div"};const y=({className:_,children:j})=>(0,t.jsxs)("span",{className:_,children:[j," Composition"]}),h=m.bind({});h.args={variant:"headline-small",component:y};const u=(_=>(0,t.jsxs)("div",{className:a.A["box-model-wrapper"],children:[(0,t.jsx)("div",{className:a.A["box-model-side-left"]}),(0,t.jsx)("div",{className:a.A["box-model-side-center"],children:(0,t.jsx)(d.Ay,{..._,children:(0,t.jsx)("div",{className:a.A["box-model-inner"],children:"Box Model"})})}),(0,t.jsx)("div",{className:a.A["box-model-side-right"]})]})).bind({}),g=["Default","CustomTag","CustomComponent","BoxModel"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...n.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...x.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...h.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <div className={styles['box-model-wrapper']}>
        <div className={styles['box-model-side-left']} />
        <div className={styles['box-model-side-center']}>
            <Text {...args}>
                <div className={styles['box-model-inner']}>Box Model</div>
            </Text>
        </div>
        <div className={styles['box-model-side-right']} />
    </div>`,...u.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(i,o,s)=>{"use strict";s.d(o,{A:()=>a});function d(t){var c,r,l="";if(typeof t=="string"||typeof t=="number")l+=t;else if(typeof t=="object")if(Array.isArray(t)){var p=t.length;for(c=0;c<p;c++)t[c]&&(r=d(t[c]))&&(l&&(l+=" "),l+=r)}else for(r in t)t[r]&&(l&&(l+=" "),l+=r);return l}function e(){for(var t,c,r=0,l="",p=arguments.length;r<p;r++)(t=arguments[r])&&(c=d(t))&&(l&&(l+=" "),l+=c);return l}const a=e},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss":(i,o,s)=>{"use strict";s.d(o,{A:()=>r});var d=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=s.n(d),a=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),t=s.n(a),c=t()(e());c.push([i.id,'.w736mVCf7VOQpYIxPcJe span{color:var(--jp-gray-40);display:inline-block;width:100%;background-color:var(--jp-white-off)}.WpIUNBUwwqx8Hr_k06mr{height:100%;display:flex;margin-top:50px}.MJuFkehZttz46HmFOosb,.BCVIHJZOaIcvBKbR78IJ{flex-grow:1}.K7dHaXc83Er_lSr0dXyw{background-color:#a68169;position:relative}.K7dHaXc83Er_lSr0dXyw:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p{background-color:#b9c386;position:relative}.K7dHaXc83Er_lSr0dXyw>p:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0{min-width:200px;min-height:50px;line-height:50px;background-color:#8fafba;text-align:center;position:relative}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0:after{content:" ";border:1px dashed rgba(0,0,0,.4);display:block;position:absolute;top:0;left:0;height:100%;width:100%}',""]),c.locals={instance:"w736mVCf7VOQpYIxPcJe","box-model-wrapper":"WpIUNBUwwqx8Hr_k06mr","box-model-side-left":"MJuFkehZttz46HmFOosb","box-model-side-right":"BCVIHJZOaIcvBKbR78IJ","box-model-side-center":"K7dHaXc83Er_lSr0dXyw","box-model-inner":"c8PNEHkZltBtBayh_np0"};const r=c},"../components/components/text/stories/style.module.scss":(i,o,s)=>{"use strict";s.d(o,{A:()=>r});var d=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),e=s.n(d),a=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss"),t={};t.insert="head",t.singleton=!1;var c=e()(a.A,t);const r=a.A.locals||{}}}]);
