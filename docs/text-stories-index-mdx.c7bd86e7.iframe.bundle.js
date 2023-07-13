(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3331,6591,7946],{"../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js":(u,p,t)=>{"use strict";t.d(p,{Z:()=>o});function o(){return o=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var s=arguments[l];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(e[d]=s[d])}return e},o.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(u,p,t)=>{"use strict";var o;t.d(p,{L:()=>d,j:()=>i});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=function(m){return m()},s=(o||(o=t.t(e,2)))["useInsertionEffect"]?(o||(o=t.t(e,2)))["useInsertionEffect"]:!1,d=s||l,i=s||e.useLayoutEffect},"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js":(u,p,t)=>{"use strict";t.r(p),t.d(p,{MDXContext:()=>e,MDXProvider:()=>i,useMDXComponents:()=>s,withMDXComponents:()=>l});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const e=o.createContext({});function l(a){return m;function m(c){const r=s(c.components);return o.createElement(a,{...c,allComponents:r})}}function s(a){const m=o.useContext(e);return o.useMemo(()=>typeof a=="function"?a(m):{...m,...a},[m,a])}const d={};function i({components:a,children:m,disableParentContext:c}){let r;return c?r=typeof a=="function"?a({}):a||d:r=s(a),o.createElement(e.Provider,{value:r},m)}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":(u,p,t)=>{var o=Object.defineProperty,e=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,d=(c,r,_,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let x of l(r))!s.call(c,x)&&x!==_&&o(c,x,{get:()=>r[x],enumerable:!(n=e(r,x))||n.enumerable});return c},i=(c,r,_)=>(d(c,r,"default"),_&&d(_,r,"default")),a=c=>d(o({},"__esModule",{value:!0}),c),m={};u.exports=a(m),i(m,t("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js"),u.exports)},"../components/components/text/stories/index.mdx":(u,p,t)=>{"use strict";t.r(p),t.d(p,{default:()=>r});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=t("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),s=t.n(l),d=t("../../../node_modules/.pnpm/@storybook+blocks@7.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),i=t("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js"),a=t("../components/components/text/stories/index.stories.tsx");function m(_){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",strong:"strong",h3:"h3",h4:"h4",a:"a"},(0,l.useMDXComponents)(),_.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(d.h_,{of:a}),`
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
`,(0,e.jsx)(d.Hw,{language:"jsx",code:i.C`
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
`,(0,e.jsx)(d.Hw,{language:"jsx",code:i.C`
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
`,(0,e.jsx)(d.Hw,{language:"jsx",code:i.C`
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
`,(0,e.jsx)(d.Hw,{language:"jsx",code:i.C`
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
`,(0,e.jsx)(d.Hw,{language:"jsx",code:i.C`
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
`,(0,e.jsx)(d.Hw,{language:"jsx",code:i.C`
    import { Title } from '@automattic/jetpack-components';
    
    function Subtitle() {
      return (
        <Title size="small">
          To explain what a Title component does, we should before...
        </Title>
      );
    }
  `}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.a,{href:".?path=/story/js-packages-components-text-title--default",children:"\u25B6\uFE0F Story"})})]})}function c(_={}){const{wrapper:n}=Object.assign({},(0,l.useMDXComponents)(),_.components);return n?(0,e.jsx)(n,Object.assign({},_,{children:(0,e.jsx)(m,_)})):m(_)}const r=c},"../components/components/text/stories/index.stories.tsx":(u,p,t)=>{var b,f,T,v,C,E,M,P,O,D,B,S;"use strict";t.r(p),t.d(p,{BoxModel:()=>g,CustomComponent:()=>x,CustomTag:()=>_,Default:()=>r,__namedExportsOrder:()=>w,default:()=>m});var o=t("../components/components/text/index.tsx"),e=t("../components/components/text/constants.ts"),l=t("../components/components/text/stories/style.module.scss"),s=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=`import Text, { BOX_MODEL_VALUES, H2, H3, Title, VARIANTS_MAPPING } from '../index';
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
`,i={Default:{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},CustomTag:{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},CustomComponent:{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},BoxModel:{startLoc:{col:25,line:50},endLoc:{col:10,line:58},startBody:{col:25,line:50},endBody:{col:10,line:58}}};const a=[0,1,2,3,4,5,6,7,8],m={parameters:{storySource:{source:`import Text, { BOX_MODEL_VALUES, H2, H3, Title, VARIANTS_MAPPING } from '../index';
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
};`,locationsMap:{default:{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},"custom-tag":{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},"custom-component":{startLoc:{col:17,line:31},endLoc:{col:72,line:31},startBody:{col:17,line:31},endBody:{col:72,line:31}},"box-model":{startLoc:{col:25,line:50},endLoc:{col:10,line:58},startBody:{col:25,line:50},endBody:{col:10,line:58}}}}},title:"JS Packages/Components/Text",component:o.ZP,argTypes:{...e.s.reduce((h,j)=>({...h,[j]:{control:{type:"select"},options:a}}),{}),variant:{control:{type:"select"},options:Object.keys(e.h)}},subcomponents:{H2:o.H2,H3:o.H3,Title:o.Dx}},c=h=>{var j;return(0,s.jsx)(o.ZP,{...h,children:(j=h.variant)!=null?j:"body"})};c.displayName="Template";const r=c.bind({});r.args={variant:"headline-medium"};const _=c.bind({});_.args={variant:"title-small",component:"div"};const n=h=>{let{className:j,children:A}=h;return(0,s.jsxs)("span",{className:j,children:[A," Composition"]})};n.displayName="Custom";const x=c.bind({});x.args={variant:"headline-small",component:n};const y=h=>(0,s.jsxs)("div",{className:l.Z["box-model-wrapper"],children:[(0,s.jsx)("div",{className:l.Z["box-model-side-left"]}),(0,s.jsx)("div",{className:l.Z["box-model-side-center"],children:(0,s.jsx)(o.ZP,{...h,children:(0,s.jsx)("div",{className:l.Z["box-model-inner"],children:"Box Model"})})}),(0,s.jsx)("div",{className:l.Z["box-model-side-right"]})]});y.displayName="BoxModelTemplate";const g=y.bind({});r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(T=(f=r.parameters)==null?void 0:f.docs)==null?void 0:T.source}}},_.parameters={..._.parameters,docs:{...(v=_.parameters)==null?void 0:v.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(E=(C=_.parameters)==null?void 0:C.docs)==null?void 0:E.source}}},x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(O=(P=x.parameters)==null?void 0:P.docs)==null?void 0:O.source}}},g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`args => <div className={styles['box-model-wrapper']}>
        <div className={styles['box-model-side-left']} />
        <div className={styles['box-model-side-center']}>
            <Text {...args}>
                <div className={styles['box-model-inner']}>Box Model</div>
            </Text>
        </div>
        <div className={styles['box-model-side-right']} />
    </div>`,...(S=(B=g.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};const w=["Default","CustomTag","CustomComponent","BoxModel"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(u,p)=>{var t,o;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var e={}.hasOwnProperty,l="[native code]";function s(){for(var d=[],i=0;i<arguments.length;i++){var a=arguments[i];if(a){var m=typeof a;if(m==="string"||m==="number")d.push(a);else if(Array.isArray(a)){if(a.length){var c=s.apply(null,a);c&&d.push(c)}}else if(m==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){d.push(a.toString());continue}for(var r in a)e.call(a,r)&&a[r]&&d.push(r)}}}return d.join(" ")}u.exports?(s.default=s,u.exports=s):(t=[],o=function(){return s}.apply(p,t),o!==void 0&&(u.exports=o))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss":(u,p,t)=>{"use strict";t.d(p,{Z:()=>i});var o=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=t.n(o),l=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=t.n(l),d=s()(e());d.push([u.id,'.w736mVCf7VOQpYIxPcJe span{color:var(--jp-gray-40);display:inline-block;width:100%;background-color:var(--jp-white-off)}.WpIUNBUwwqx8Hr_k06mr{height:100%;display:flex;margin-top:50px}.MJuFkehZttz46HmFOosb,.BCVIHJZOaIcvBKbR78IJ{flex-grow:1}.K7dHaXc83Er_lSr0dXyw{background-color:#a68169;position:relative}.K7dHaXc83Er_lSr0dXyw:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p{background-color:#b9c386;position:relative}.K7dHaXc83Er_lSr0dXyw>p:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0{min-width:200px;min-height:50px;line-height:50px;background-color:#8fafba;text-align:center;position:relative}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0:after{content:" ";border:1px dashed rgba(0,0,0,.4);display:block;position:absolute;top:0;left:0;height:100%;width:100%}',""]),d.locals={instance:"w736mVCf7VOQpYIxPcJe","box-model-wrapper":"WpIUNBUwwqx8Hr_k06mr","box-model-side-left":"MJuFkehZttz46HmFOosb","box-model-side-right":"BCVIHJZOaIcvBKbR78IJ","box-model-side-center":"K7dHaXc83Er_lSr0dXyw","box-model-inner":"c8PNEHkZltBtBayh_np0"};const i=d},"../components/components/text/stories/style.module.scss":(u,p,t)=>{"use strict";t.d(p,{Z:()=>i});var o=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),e=t.n(o),l=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss"),s={};s.insert="head",s.singleton=!1;var d=e()(l.Z,s);const i=l.Z.locals||{}}}]);})();
