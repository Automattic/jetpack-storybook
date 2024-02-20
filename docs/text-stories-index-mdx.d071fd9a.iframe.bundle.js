(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3331,6591],{"../../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/extends.js":(m,a,n)=>{"use strict";n.d(a,{Z:()=>o});function o(){return o=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var s=arguments[l];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(e[d]=s[d])}return e},o.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(m,a,n)=>{"use strict";var o;n.d(a,{L:()=>d,j:()=>r});var e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=function(p){return p()},s=(o||(o=n.t(e,2)))["useInsertionEffect"]?(o||(o=n.t(e,2)))["useInsertionEffect"]:!1,d=s||l,r=s||e.useLayoutEffect},"../components/components/text/stories/index.stories.tsx":(m,a,n)=>{var f,b,T,v,E,C,P,M,O,B,S,D;"use strict";n.r(a),n.d(a,{BoxModel:()=>g,CustomComponent:()=>h,CustomTag:()=>i,Default:()=>_,__namedExportsOrder:()=>A,default:()=>p});var o=n("../components/components/text/index.tsx"),e=n("../components/components/text/constants.ts"),l=n("../components/components/text/stories/style.module.scss"),s=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=`import Text, { BOX_MODEL_VALUES, H2, H3, Title, VARIANTS_MAPPING } from '../index';
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
`,r={Default:{startLoc:{col:17,line:31},endLoc:{col:76,line:31},startBody:{col:17,line:31},endBody:{col:76,line:31}},CustomTag:{startLoc:{col:17,line:31},endLoc:{col:76,line:31},startBody:{col:17,line:31},endBody:{col:76,line:31}},CustomComponent:{startLoc:{col:17,line:31},endLoc:{col:76,line:31},startBody:{col:17,line:31},endBody:{col:76,line:31}},BoxModel:{startLoc:{col:25,line:57},endLoc:{col:1,line:67},startBody:{col:25,line:57},endBody:{col:1,line:67}}};const c=[0,1,2,3,4,5,6,7,8],p={parameters:{storySource:{source:`import Text, { BOX_MODEL_VALUES, H2, H3, Title, VARIANTS_MAPPING } from '../index';
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
`,locationsMap:{default:{startLoc:{col:17,line:31},endLoc:{col:76,line:31},startBody:{col:17,line:31},endBody:{col:76,line:31}},"custom-tag":{startLoc:{col:17,line:31},endLoc:{col:76,line:31},startBody:{col:17,line:31},endBody:{col:76,line:31}},"custom-component":{startLoc:{col:17,line:31},endLoc:{col:76,line:31},startBody:{col:17,line:31},endBody:{col:76,line:31}},"box-model":{startLoc:{col:25,line:57},endLoc:{col:1,line:67},startBody:{col:25,line:57},endBody:{col:1,line:67}}}}},title:"JS Packages/Components/Text",component:o.ZP,argTypes:{...e.s.reduce((u,j)=>({...u,[j]:{control:{type:"select"},options:c}}),{}),variant:{control:{type:"select"},options:Object.keys(e.h)}},subcomponents:{H2:o.H2,H3:o.H3,Title:o.Dx}},x=u=>{var j;return(0,s.jsx)(o.ZP,{...u,children:(j=u.variant)!=null?j:"body"})};x.displayName="Template";const _=x.bind({});_.args={variant:"headline-medium"};const i=x.bind({});i.args={variant:"title-small",component:"div"};const t=({className:u,children:j})=>(0,s.jsxs)("span",{className:u,children:[j," Composition"]});t.displayName="Custom";const h=x.bind({});h.args={variant:"headline-small",component:t};const y=u=>(0,s.jsxs)("div",{className:l.Z["box-model-wrapper"],children:[(0,s.jsx)("div",{className:l.Z["box-model-side-left"]}),(0,s.jsx)("div",{className:l.Z["box-model-side-center"],children:(0,s.jsx)(o.ZP,{...u,children:(0,s.jsx)("div",{className:l.Z["box-model-inner"],children:"Box Model"})})}),(0,s.jsx)("div",{className:l.Z["box-model-side-right"]})]});y.displayName="BoxModelTemplate";const g=y.bind({});_.parameters={..._.parameters,docs:{...(f=_.parameters)==null?void 0:f.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(T=(b=_.parameters)==null?void 0:b.docs)==null?void 0:T.source}}},i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(C=(E=i.parameters)==null?void 0:E.docs)==null?void 0:C.source}}},h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(O=(M=h.parameters)==null?void 0:M.docs)==null?void 0:O.source}}},g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`args => <div className={styles['box-model-wrapper']}>
        <div className={styles['box-model-side-left']} />
        <div className={styles['box-model-side-center']}>
            <Text {...args}>
                <div className={styles['box-model-inner']}>Box Model</div>
            </Text>
        </div>
        <div className={styles['box-model-side-right']} />
    </div>`,...(D=(S=g.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const A=["Default","CustomTag","CustomComponent","BoxModel"]},"../components/components/text/stories/index.mdx":(m,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>_});var o=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=n("../../../node_modules/.pnpm/@storybook+addon-docs@7.6.17_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),s=n.n(l),d=n("../../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),r=n("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js"),c=n("../components/components/text/stories/index.stories.tsx");function p(i){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",strong:"strong",h3:"h3",h4:"h4",a:"a"},(0,l.useMDXComponents)(),i.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(d.h_,{of:c}),`
`,(0,e.jsx)(t.h1,{id:"text",children:"Text"}),`
`,(0,e.jsx)(t.p,{children:"Set of React jetpack-components intended to facilitate when dealing with rendering text content."}),`
`,(0,e.jsx)(t.h2,{id:"text-",children:"<Text />"}),`
`,(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.code,{children:"Text"})," is the primary component that renders text, supporting the following features:"]}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Typography"}),": provided by the ThemeProvider component."]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Spacing"}),": A simple range of shorthand classes to modify the text element's margin and padding."]}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"props",children:"Props"}),`
`,(0,e.jsx)(t.h4,{id:"variant",children:"variant"}),`
`,(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.strong,{children:"Type"}),": ",(0,e.jsx)(t.code,{children:"headline-medium"}),", ",(0,e.jsx)(t.code,{children:"headline-small"}),", ",(0,e.jsx)(t.code,{children:"headline-small-regular"}),", ",(0,e.jsx)(t.code,{children:"title-medium"}),`,
`,(0,e.jsx)(t.code,{children:"title-medium-semi-bold"}),", ",(0,e.jsx)(t.code,{children:"title-small"}),", ",(0,e.jsx)(t.code,{children:"body"}),", ",(0,e.jsx)(t.code,{children:"body-small"}),", ",(0,e.jsx)(t.code,{children:"body-extra-small"}),`,
`,(0,e.jsx)(t.code,{children:"body-extra-small-bold"}),", ",(0,e.jsx)(t.code,{children:"label"}),"."]}),`
`,(0,e.jsx)(t.p,{children:"Define the text Typography variant among the options offered by the ThemeProvider component."}),`
`,(0,e.jsx)(d.Hw,{language:"jsx",code:r.C`
    import Text from '@automattic/jetpack-components';
    
    function Hello() {
      return (
        <Text variant="headline-medium">
          Hello, Text component!
        </Text>
      );
    }
  `}),`
`,(0,e.jsx)(t.h4,{id:"spacing-properties",children:"Spacing properties"}),`
`,(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.strong,{children:"Type"}),": number, one of ",(0,e.jsx)(t.code,{children:"0"}),", ",(0,e.jsx)(t.code,{children:"1"}),", ",(0,e.jsx)(t.code,{children:"2"}),", ",(0,e.jsx)(t.code,{children:"3"}),", ",(0,e.jsx)(t.code,{children:"4"}),", ",(0,e.jsx)(t.code,{children:"5"}),", ",(0,e.jsx)(t.code,{children:"6"}),", ",(0,e.jsx)(t.code,{children:"7"}),", ",(0,e.jsx)(t.code,{children:"8"}),"."]}),`
`,(0,e.jsxs)(t.p,{children:["Use the following properties to define margin and padding of the text. The unit is defined by the ",(0,e.jsx)(t.code,{children:"--spacing-base"}),` value.
You can see how it works playing with the `,(0,e.jsx)(t.a,{href:"./?path=/story/js-packages-components-text--box-model",children:"Box Model"})," story."]}),`
`,(0,e.jsxs)(t.p,{children:[`Prop | Description
---|---
`,(0,e.jsx)(t.strong,{children:"m"}),` | margin
`,(0,e.jsx)(t.strong,{children:"mt"}),` | margin-top
`,(0,e.jsx)(t.strong,{children:"mr"}),` | margin-right
`,(0,e.jsx)(t.strong,{children:"mb"}),` | margin-bottom
`,(0,e.jsx)(t.strong,{children:"ml"}),` | margin-left
`,(0,e.jsx)(t.strong,{children:"mx"}),` | margin left and right
`,(0,e.jsx)(t.strong,{children:"my"}),` | margin top and bottom
`,(0,e.jsx)(t.strong,{children:"p"}),` | padding
`,(0,e.jsx)(t.strong,{children:"pt"}),` | padding-top
`,(0,e.jsx)(t.strong,{children:"pr"}),` | padding-right
`,(0,e.jsx)(t.strong,{children:"pb"}),` | padding-bottom
`,(0,e.jsx)(t.strong,{children:"pl"}),` | padding-left
`,(0,e.jsx)(t.strong,{children:"px"}),` | padding left and right
`,(0,e.jsx)(t.strong,{children:"py"})," | padding top and bottom"]}),`
`,(0,e.jsx)(d.Hw,{language:"jsx",code:r.C`
    import Text from '@automattic/jetpack-components';
    
    function HelloBoxModel() {
      return (
        <Text mt={ 2 } px={ 4 }>
          Hello, Text component!
        </Text>
      );
    }
  `}),`
`,(0,e.jsx)(t.h4,{id:"component",children:"component"}),`
`,(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.strong,{children:"Type"}),": ",(0,e.jsx)(t.code,{children:"elementType"}),", ",(0,e.jsx)(t.code,{children:"string"}),"."]}),`
`,(0,e.jsxs)(t.p,{children:["Force an specific tag (",(0,e.jsx)(t.code,{children:'"span"'}),", ",(0,e.jsx)(t.code,{children:'"div"'}),") or use a custom component that will receive className and children."]}),`
`,(0,e.jsxs)(t.p,{children:["The example below renders the component with a ",(0,e.jsx)(t.code,{children:"<span />"})," element."]}),`
`,(0,e.jsx)(d.Hw,{language:"jsx",code:r.C`
    import Text from '@automattic/jetpack-components';
    function SpanTextComponent() {
      return (
        <Text component="span" variant="title-medium">
          Never underestimate the span element
        </Text>
      );
    }
  `}),`
`,(0,e.jsxs)(t.p,{children:[`The following example shows how to define the typography and the margin for a Custom component.
The className is passed down to the custom component, while the properties that belong to the Text component (in this case, `,(0,e.jsx)(t.code,{children:"component"}),", ",(0,e.jsx)(t.code,{children:"variant"})," and ",(0,e.jsx)(t.code,{children:"mb"}),") are not."]}),`
`,(0,e.jsx)(d.Hw,{language:"jsx",code:r.C`
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
`,(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.a,{href:".?path=/story/js-packages-components-text--custom-tag",children:"\u25B6\uFE0F Custom Tag story"})," and ",(0,e.jsx)(t.a,{href:".?path=/story/js-packages-components-text--custom-component",children:"\u25B6\uFE0F Custom Component story"})]}),`
`,(0,e.jsx)(t.h4,{id:"children",children:"Children"}),`
`,(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.strong,{children:"Type"}),": ",(0,e.jsx)(t.code,{children:"node"}),"."]}),`
`,(0,e.jsx)(t.p,{children:"The text itself that will be rendered."}),`
`,(0,e.jsx)(t.h1,{id:"text-based-components",children:"Text based components"}),`
`,(0,e.jsx)(t.h2,{id:"h2-",children:"<H2 />"}),`
`,(0,e.jsxs)(t.p,{children:["Text shorthand to render a ",(0,e.jsx)(t.code,{children:"heading-medium"})," text, applying proper spacing."]}),`
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.a,{href:".?path=/story/js-packages-components-text-heading--headline-h-2",children:"\u25B6\uFE0F Story"})}),`
`,(0,e.jsx)(t.h2,{id:"h3-",children:"<H3 />"}),`
`,(0,e.jsxs)(t.p,{children:["Text shorthand to render a ",(0,e.jsx)(t.code,{children:"heading-small"})," text, applying proper spacing."]}),`
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.a,{href:".?path=/story/js-packages-components-text-heading--headline-h-3",children:"\u25B6\uFE0F Story"})}),`
`,(0,e.jsx)(t.h3,{id:"props-1",children:"Props"}),`
`,(0,e.jsxs)(t.h4,{id:"weight-bold-default--regular",children:["Weight: ",(0,e.jsx)(t.code,{children:"bold"})," (default) | ",(0,e.jsx)(t.code,{children:"regular"})]}),`
`,(0,e.jsx)(d.Hw,{language:"jsx",code:r.C`
    import { H3 } from '@automattic/jetpack-components';
    
    function Subtitle() {
      return (
        <H3 weight="regular">Let's explaining what H3 is</H3>
      );
    }
  `}),`
`,(0,e.jsx)(t.h2,{id:"title-",children:"<Title />"}),`
`,(0,e.jsxs)(t.p,{children:["Text shorthand to render a ",(0,e.jsx)(t.code,{children:"body"})," text, applying proper spacing."]}),`
`,(0,e.jsx)(t.h3,{id:"props-2",children:"Props"}),`
`,(0,e.jsxs)(t.h4,{id:"size-medium-default--small",children:["Size: ",(0,e.jsx)(t.code,{children:"medium"})," (default) | ",(0,e.jsx)(t.code,{children:"small"})]}),`
`,(0,e.jsx)(d.Hw,{language:"jsx",code:r.C`
    import { Title } from '@automattic/jetpack-components';
    
    function Subtitle() {
      return (
        <Title size="small">
          To explain what a Title component does, we should before...
        </Title>
      );
    }
  `}),`
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.a,{href:".?path=/story/js-packages-components-text-title--default",children:"\u25B6\uFE0F Story"})})]})}function x(i={}){const{wrapper:t}=Object.assign({},(0,l.useMDXComponents)(),i.components);return t?(0,e.jsx)(t,Object.assign({},i,{children:(0,e.jsx)(p,i)})):p(i)}const _=x},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(m,a)=>{var n,o;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var e={}.hasOwnProperty,l="[native code]";function s(){for(var d=[],r=0;r<arguments.length;r++){var c=arguments[r];if(c){var p=typeof c;if(p==="string"||p==="number")d.push(c);else if(Array.isArray(c)){if(c.length){var x=s.apply(null,c);x&&d.push(x)}}else if(p==="object"){if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]")){d.push(c.toString());continue}for(var _ in c)e.call(c,_)&&c[_]&&d.push(_)}}}return d.join(" ")}m.exports?(s.default=s,m.exports=s):(n=[],o=function(){return s}.apply(a,n),o!==void 0&&(m.exports=o))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss":(m,a,n)=>{"use strict";n.d(a,{Z:()=>r});var o=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=n.n(o),l=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=n.n(l),d=s()(e());d.push([m.id,'.w736mVCf7VOQpYIxPcJe span{color:var(--jp-gray-40);display:inline-block;width:100%;background-color:var(--jp-white-off)}.WpIUNBUwwqx8Hr_k06mr{height:100%;display:flex;margin-top:50px}.MJuFkehZttz46HmFOosb,.BCVIHJZOaIcvBKbR78IJ{flex-grow:1}.K7dHaXc83Er_lSr0dXyw{background-color:#a68169;position:relative}.K7dHaXc83Er_lSr0dXyw:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p{background-color:#b9c386;position:relative}.K7dHaXc83Er_lSr0dXyw>p:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0{min-width:200px;min-height:50px;line-height:50px;background-color:#8fafba;text-align:center;position:relative}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0:after{content:" ";border:1px dashed rgba(0,0,0,.4);display:block;position:absolute;top:0;left:0;height:100%;width:100%}',""]),d.locals={instance:"w736mVCf7VOQpYIxPcJe","box-model-wrapper":"WpIUNBUwwqx8Hr_k06mr","box-model-side-left":"MJuFkehZttz46HmFOosb","box-model-side-right":"BCVIHJZOaIcvBKbR78IJ","box-model-side-center":"K7dHaXc83Er_lSr0dXyw","box-model-inner":"c8PNEHkZltBtBayh_np0"};const r=d},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":m=>{function a(n){var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}a.keys=()=>[],a.resolve=a,a.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",m.exports=a},"../components/components/text/stories/style.module.scss":(m,a,n)=>{"use strict";n.d(a,{Z:()=>r});var o=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),e=n.n(o),l=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss"),s={};s.insert="head",s.singleton=!1;var d=e()(l.Z,s);const r=l.Z.locals||{}}}]);})();
