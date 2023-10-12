(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3331,6591],{"../../../node_modules/.pnpm/@babel+runtime@7.23.1/node_modules/@babel/runtime/helpers/esm/extends.js":(p,c,s)=>{"use strict";s.d(c,{Z:()=>d});function d(){return d=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},d.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(p,c,s)=>{"use strict";var d;s.d(c,{L:()=>o,j:()=>r});var e=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=function(_){return _()},t=(d||(d=s.t(e,2)))["useInsertionEffect"]?(d||(d=s.t(e,2)))["useInsertionEffect"]:!1,o=t||a,r=t||e.useLayoutEffect},"../components/components/text/stories/index.mdx":(p,c,s)=>{"use strict";s.r(c),s.d(c,{default:()=>m});var d=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=s("../../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),t=s.n(a),o=s("../../../node_modules/.pnpm/@storybook+blocks@7.4.6_@types+react-dom@18.2.7_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),r=s("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js"),l=s("../components/components/text/stories/index.stories.tsx");function _(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",strong:"strong",h3:"h3",h4:"h4",a:"a"},(0,a.useMDXComponents)(),i.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.h_,{of:l}),`
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
`,(0,e.jsx)(o.Hw,{language:"jsx",code:r.C`
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
`,(0,e.jsxs)(n.p,{children:[`Prop | Description
---|---
`,(0,e.jsx)(n.strong,{children:"m"}),` | margin
`,(0,e.jsx)(n.strong,{children:"mt"}),` | margin-top
`,(0,e.jsx)(n.strong,{children:"mr"}),` | margin-right
`,(0,e.jsx)(n.strong,{children:"mb"}),` | margin-bottom
`,(0,e.jsx)(n.strong,{children:"ml"}),` | margin-left
`,(0,e.jsx)(n.strong,{children:"mx"}),` | margin left and right
`,(0,e.jsx)(n.strong,{children:"my"}),` | margin top and bottom
`,(0,e.jsx)(n.strong,{children:"p"}),` | padding
`,(0,e.jsx)(n.strong,{children:"pt"}),` | padding-top
`,(0,e.jsx)(n.strong,{children:"pr"}),` | padding-right
`,(0,e.jsx)(n.strong,{children:"pb"}),` | padding-bottom
`,(0,e.jsx)(n.strong,{children:"pl"}),` | padding-left
`,(0,e.jsx)(n.strong,{children:"px"}),` | padding left and right
`,(0,e.jsx)(n.strong,{children:"py"})," | padding top and bottom"]}),`
`,(0,e.jsx)(o.Hw,{language:"jsx",code:r.C`
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
`,(0,e.jsx)(o.Hw,{language:"jsx",code:r.C`
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
`,(0,e.jsx)(o.Hw,{language:"jsx",code:r.C`
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
`,(0,e.jsx)(o.Hw,{language:"jsx",code:r.C`
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
`,(0,e.jsx)(o.Hw,{language:"jsx",code:r.C`
    import { Title } from '@automattic/jetpack-components';
    
    function Subtitle() {
      return (
        <Title size="small">
          To explain what a Title component does, we should before...
        </Title>
      );
    }
  `}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.a,{href:".?path=/story/js-packages-components-text-title--default",children:"\u25B6\uFE0F Story"})})]})}function x(i={}){const{wrapper:n}=Object.assign({},(0,a.useMDXComponents)(),i.components);return n?(0,e.jsx)(n,Object.assign({},i,{children:(0,e.jsx)(_,i)})):_(i)}const m=x},"../components/components/text/stories/index.stories.tsx":(p,c,s)=>{var b,T,f,v,E,C,M,P,B,O,S,D;"use strict";s.r(c),s.d(c,{BoxModel:()=>g,CustomComponent:()=>h,CustomTag:()=>i,Default:()=>m,__namedExportsOrder:()=>A,default:()=>_});var d=s("../components/components/text/index.tsx"),e=s("../components/components/text/constants.ts"),a=s("../components/components/text/stories/style.module.scss"),t=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=`import Text, { BOX_MODEL_VALUES, H2, H3, Title, VARIANTS_MAPPING } from '../index';
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
`,r={Default:{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},CustomTag:{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},CustomComponent:{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},BoxModel:{startLoc:{col:25,line:50},endLoc:{col:10,line:58},startBody:{col:25,line:50},endBody:{col:10,line:58}}};const l=[0,1,2,3,4,5,6,7,8],_={parameters:{storySource:{source:`import Text, { BOX_MODEL_VALUES, H2, H3, Title, VARIANTS_MAPPING } from '../index';
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
};`,locationsMap:{default:{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},"custom-tag":{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},"custom-component":{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},"box-model":{startLoc:{col:25,line:50},endLoc:{col:10,line:58},startBody:{col:25,line:50},endBody:{col:10,line:58}}}}},title:"JS Packages/Components/Text",component:d.ZP,argTypes:{...e.s.reduce((u,j)=>({...u,[j]:{control:{type:"select"},options:l}}),{}),variant:{control:{type:"select"},options:Object.keys(e.h)}},subcomponents:{H2:d.H2,H3:d.H3,Title:d.Dx}},x=u=>{var j;return(0,t.jsx)(d.ZP,{...u,children:(j=u.variant)!=null?j:"body"})};x.displayName="Template";const m=x.bind({});m.args={variant:"headline-medium"};const i=x.bind({});i.args={variant:"title-small",component:"div"};const n=u=>{let{className:j,children:N}=u;return(0,t.jsxs)("span",{className:j,children:[N," Composition"]})};n.displayName="Custom";const h=x.bind({});h.args={variant:"headline-small",component:n};const y=u=>(0,t.jsxs)("div",{className:a.Z["box-model-wrapper"],children:[(0,t.jsx)("div",{className:a.Z["box-model-side-left"]}),(0,t.jsx)("div",{className:a.Z["box-model-side-center"],children:(0,t.jsx)(d.ZP,{...u,children:(0,t.jsx)("div",{className:a.Z["box-model-inner"],children:"Box Model"})})}),(0,t.jsx)("div",{className:a.Z["box-model-side-right"]})]});y.displayName="BoxModelTemplate";const g=y.bind({});m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(f=(T=m.parameters)==null?void 0:T.docs)==null?void 0:f.source}}},i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(C=(E=i.parameters)==null?void 0:E.docs)==null?void 0:C.source}}},h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(B=(P=h.parameters)==null?void 0:P.docs)==null?void 0:B.source}}},g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`args => <div className={styles['box-model-wrapper']}>
        <div className={styles['box-model-side-left']} />
        <div className={styles['box-model-side-center']}>
            <Text {...args}>
                <div className={styles['box-model-inner']}>Box Model</div>
            </Text>
        </div>
        <div className={styles['box-model-side-right']} />
    </div>`,...(D=(S=g.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const A=["Default","CustomTag","CustomComponent","BoxModel"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(p,c)=>{var s,d;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var e={}.hasOwnProperty,a="[native code]";function t(){for(var o=[],r=0;r<arguments.length;r++){var l=arguments[r];if(l){var _=typeof l;if(_==="string"||_==="number")o.push(l);else if(Array.isArray(l)){if(l.length){var x=t.apply(null,l);x&&o.push(x)}}else if(_==="object"){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){o.push(l.toString());continue}for(var m in l)e.call(l,m)&&l[m]&&o.push(m)}}}return o.join(" ")}p.exports?(t.default=t,p.exports=t):(s=[],d=function(){return t}.apply(c,s),d!==void 0&&(p.exports=d))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss":(p,c,s)=>{"use strict";s.d(c,{Z:()=>r});var d=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=s.n(d),a=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=s.n(a),o=t()(e());o.push([p.id,'.w736mVCf7VOQpYIxPcJe span{color:var(--jp-gray-40);display:inline-block;width:100%;background-color:var(--jp-white-off)}.WpIUNBUwwqx8Hr_k06mr{height:100%;display:flex;margin-top:50px}.MJuFkehZttz46HmFOosb,.BCVIHJZOaIcvBKbR78IJ{flex-grow:1}.K7dHaXc83Er_lSr0dXyw{background-color:#a68169;position:relative}.K7dHaXc83Er_lSr0dXyw:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p{background-color:#b9c386;position:relative}.K7dHaXc83Er_lSr0dXyw>p:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0{min-width:200px;min-height:50px;line-height:50px;background-color:#8fafba;text-align:center;position:relative}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0:after{content:" ";border:1px dashed rgba(0,0,0,.4);display:block;position:absolute;top:0;left:0;height:100%;width:100%}',""]),o.locals={instance:"w736mVCf7VOQpYIxPcJe","box-model-wrapper":"WpIUNBUwwqx8Hr_k06mr","box-model-side-left":"MJuFkehZttz46HmFOosb","box-model-side-right":"BCVIHJZOaIcvBKbR78IJ","box-model-side-center":"K7dHaXc83Er_lSr0dXyw","box-model-inner":"c8PNEHkZltBtBayh_np0"};const r=o},"../components/components/text/stories/style.module.scss":(p,c,s)=>{"use strict";s.d(c,{Z:()=>r});var d=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),e=s.n(d),a=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss"),t={};t.insert="head",t.singleton=!1;var o=e()(a.Z,t);const r=a.Z.locals||{}}}]);})();
