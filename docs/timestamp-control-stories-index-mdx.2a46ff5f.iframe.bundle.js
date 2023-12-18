(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7875,9796],{"../../packages/videopress/src/client/components/timestamp-control/stories/index.stories.tsx":(R,p,t)=>{var B,M,w,I,D,U,K,H,k,W,L,A,Z,s,r,d,l,v,_,g,N;"use strict";t.r(p),t.d(p,{__namedExportsOrder:()=>c,_default:()=>b,changingValueExternally:()=>f,customTooltip:()=>P,decimalPlaces:()=>h,default:()=>y,disabled:()=>u,showTooltip:()=>S,withMarks:()=>n});var i=t("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/range-control/index.js"),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),x=t("../../packages/videopress/src/client/components/timestamp-control/index.tsx"),a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=`import { RangeControl } from '@wordpress/components';
import { useState } from 'react';
import TimestampControl from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Timestamp Control',
	component: TimestampControl,
} as ComponentMeta< typeof TimestampControl >;

const Template: ComponentStory< typeof TimestampControl > = args => {
	return <TimestampControl { ...args } />;
};

export const _default = Template.bind( {} );
_default.args = {
	label: 'Video frame',
	help: 'Use the control to set timestamp of the video frame.',
	max: 3600 * 1000 * 2, // 2 hours
	value: 236 * 1000 + 125, // 3:56.125
	wait: 100,
	decimalPlaces: undefined,
	fineAdjustment: 50,
	disabled: false,
	autoHideTimeInput: true,
	onChange: ( newTime: number ) => {
		console.log( { newTime } ); // eslint-disable-line no-console
	},
	onDebounceChange: ( newDebouncedTime: number ) => {
		console.log( { newDebouncedTime } ); // eslint-disable-line no-console
	},
};

_default.storyName = 'Timestamp Control';

export const decimalPlaces = Template.bind( {} );
decimalPlaces.args = {
	value: 3500, // 3.5 seconds
	max: 1000 * 5, // five seconds
	decimalPlaces: 2,
};

// disabled story
export const disabled = Template.bind( {} );
disabled.args = {
	max: 3600 * 1000 * 2, // 2 hours
	value: 3600 * 1000 + 15 * 60 * 1000 + 43 * 1000, // 1.5 hours
	disabled: true,
};

export const withMarks = Template.bind( {} );
withMarks.args = {
	value: 3500, // 3.5 seconds
	max: 1000 * 10, // ten seconds
	marksEvery: 1000, // a mark every second
	fineAdjustment: 200,
};

export const showTooltip = Template.bind( {} );
showTooltip.args = {
	value: 80000, // 1 minute 20 seconds
	max: 1000 * 100, // 100 seconds
	renderTooltip: true,
};

export const customTooltip = Template.bind( {} );
customTooltip.args = {
	value: 1000 * 50, // 3.5 seconds
	max: 1000 * 80, // ten seconds
	fineAdjustment: 200,
	renderTooltip: ( value: number ) => {
		return <span>{ value / 1000 } seconds</span>;
	},
};

const ChangingValueTemplate: ComponentStory< typeof TimestampControl > = args => {
	const [ value, setValue ] = useState( args.value );

	return (
		<>
			<TimestampControl
				{ ...args }
				label="TimestampControl component"
				help="The value is handled internally by the component."
				value={ value }
				onDebounceChange={ setValue }
			/>
			<br />
			<RangeControl
				label="RangeControl component"
				help="The value is handled externally, and passed to the <TimestampControl /> above component."
				value={ value }
				onChange={ setValue }
				max={ args.max }
			/>
		</>
	);
};

export const changingValueExternally = ChangingValueTemplate.bind( {} );
changingValueExternally.args = {
	value: 3500, // 3.5 seconds
	max: 1000 * 5, // five seconds
	decimalPlaces: 2,
	wait: 100,
};
`,E={_default:{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},decimalPlaces:{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},disabled:{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},withMarks:{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},showTooltip:{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},customTooltip:{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},changingValueExternally:{startLoc:{col:73,line:76},endLoc:{col:1,line:98},startBody:{col:73,line:76},endBody:{col:1,line:98}}};const y={parameters:{storySource:{source:`import { RangeControl } from '@wordpress/components';
import { useState } from 'react';
import TimestampControl from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Timestamp Control',
	component: TimestampControl,
} as ComponentMeta< typeof TimestampControl >;

const Template: ComponentStory< typeof TimestampControl > = args => {
	return <TimestampControl { ...args } />;
};

export const _default = Template.bind( {} );
_default.args = {
	label: 'Video frame',
	help: 'Use the control to set timestamp of the video frame.',
	max: 3600 * 1000 * 2, // 2 hours
	value: 236 * 1000 + 125, // 3:56.125
	wait: 100,
	decimalPlaces: undefined,
	fineAdjustment: 50,
	disabled: false,
	autoHideTimeInput: true,
	onChange: ( newTime: number ) => {
		console.log( { newTime } ); 
	},
	onDebounceChange: ( newDebouncedTime: number ) => {
		console.log( { newDebouncedTime } ); 
	},
};

_default.storyName = 'Timestamp Control';

export const decimalPlaces = Template.bind( {} );
decimalPlaces.args = {
	value: 3500, // 3.5 seconds
	max: 1000 * 5, // five seconds
	decimalPlaces: 2,
};

// disabled story
export const disabled = Template.bind( {} );
disabled.args = {
	max: 3600 * 1000 * 2, // 2 hours
	value: 3600 * 1000 + 15 * 60 * 1000 + 43 * 1000, // 1.5 hours
	disabled: true,
};

export const withMarks = Template.bind( {} );
withMarks.args = {
	value: 3500, // 3.5 seconds
	max: 1000 * 10, // ten seconds
	marksEvery: 1000, // a mark every second
	fineAdjustment: 200,
};

export const showTooltip = Template.bind( {} );
showTooltip.args = {
	value: 80000, // 1 minute 20 seconds
	max: 1000 * 100, // 100 seconds
	renderTooltip: true,
};

export const customTooltip = Template.bind( {} );
customTooltip.args = {
	value: 1000 * 50, // 3.5 seconds
	max: 1000 * 80, // ten seconds
	fineAdjustment: 200,
	renderTooltip: ( value: number ) => {
		return <span>{ value / 1000 } seconds</span>;
	},
};

const ChangingValueTemplate: ComponentStory< typeof TimestampControl > = args => {
	const [ value, setValue ] = useState( args.value );

	return (
		<>
			<TimestampControl
				{ ...args }
				label="TimestampControl component"
				help="The value is handled internally by the component."
				value={ value }
				onDebounceChange={ setValue }
			/>
			<br />
			<RangeControl
				label="RangeControl component"
				help="The value is handled externally, and passed to the <TimestampControl /> above component."
				value={ value }
				onChange={ setValue }
				max={ args.max }
			/>
		</>
	);
};

export const changingValueExternally = ChangingValueTemplate.bind( {} );
changingValueExternally.args = {
	value: 3500, // 3.5 seconds
	max: 1000 * 5, // five seconds
	decimalPlaces: 2,
	wait: 100,
};
`,locationsMap:{default:{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},"decimal-places":{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},disabled:{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},"with-marks":{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},"show-tooltip":{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},"custom-tooltip":{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},"changing-value-externally":{startLoc:{col:73,line:76},endLoc:{col:1,line:98},startBody:{col:73,line:76},endBody:{col:1,line:98}}}}},title:"Packages/VideoPress/Timestamp Control",component:x.ZP},m=j=>(0,a.jsx)(x.ZP,{...j});m.displayName="Template";const b=m.bind({});b.args={label:"Video frame",help:"Use the control to set timestamp of the video frame.",max:3600*1e3*2,value:236*1e3+125,wait:100,decimalPlaces:void 0,fineAdjustment:50,disabled:!1,autoHideTimeInput:!0,onChange:j=>{console.log({newTime:j})},onDebounceChange:j=>{console.log({newDebouncedTime:j})}},b.storyName="Timestamp Control";const h=m.bind({});h.args={value:3500,max:1e3*5,decimalPlaces:2};const u=m.bind({});u.args={max:3600*1e3*2,value:3600*1e3+15*60*1e3+43*1e3,disabled:!0};const n=m.bind({});n.args={value:3500,max:1e3*10,marksEvery:1e3,fineAdjustment:200};const S=m.bind({});S.args={value:8e4,max:1e3*100,renderTooltip:!0};const P=m.bind({});P.args={value:1e3*50,max:1e3*80,fineAdjustment:200,renderTooltip:j=>(0,a.jsxs)("span",{children:[j/1e3," seconds"]})};const f=(j=>{const[V,O]=(0,e.useState)(j.value);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.ZP,{...j,label:"TimestampControl component",help:"The value is handled internally by the component.",value:V,onDebounceChange:O}),(0,a.jsx)("br",{}),(0,a.jsx)(i.Z,{label:"RangeControl component",help:"The value is handled externally, and passed to the <TimestampControl /> above component.",value:V,onChange:O,max:j.max})]})}).bind({});f.args={value:3500,max:1e3*5,decimalPlaces:2,wait:100},b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(w=(M=b.parameters)==null?void 0:M.docs)==null?void 0:w.source}}},h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(U=(D=h.parameters)==null?void 0:D.docs)==null?void 0:U.source}}},u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(k=(H=u.parameters)==null?void 0:H.docs)==null?void 0:k.source}}},n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(A=(L=n.parameters)==null?void 0:L.docs)==null?void 0:A.source}}},S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(r=(s=S.parameters)==null?void 0:s.docs)==null?void 0:r.source}}},P.parameters={...P.parameters,docs:{...(d=P.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(v=(l=P.parameters)==null?void 0:l.docs)==null?void 0:v.source}}},f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <>
            <TimestampControl {...args} label="TimestampControl component" help="The value is handled internally by the component." value={value} onDebounceChange={setValue} />
            <br />
            <RangeControl label="RangeControl component" help="The value is handled externally, and passed to the <TimestampControl /> above component." value={value} onChange={setValue} max={args.max} />
        </>;
}`,...(N=(g=f.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};const c=["_default","decimalPlaces","disabled","withMarks","showTooltip","customTooltip","changingValueExternally"]},"../../packages/videopress/src/client/components/timestamp-control/stories/index.mdx":(R,p,t)=>{"use strict";t.r(p),t.d(p,{default:()=>h});var i=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=t("../../../node_modules/.pnpm/@storybook+addon-docs@7.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),a=t.n(x),o=t("../../../node_modules/.pnpm/@storybook+blocks@7.6.5_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),E=t("../../packages/videopress/src/client/components/timestamp-control/index.tsx"),y=t("../../packages/videopress/src/client/components/timestamp-control/stories/index.stories.tsx");function m(u){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,x.useMDXComponents)(),u.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.h_,{of:y}),`
`,(0,e.jsx)(n.h1,{id:"timestamp-control",children:"Timestamp Control"}),`
`,(0,e.jsx)(n.p,{children:"React component to set a timestamp value."}),`
`,(0,e.jsx)(o.Xz,{withSource:"open",children:(0,e.jsx)(o.oG,{id:"packages-videopress-timestamp-control--default"})}),`
`,(0,e.jsx)(n.h2,{id:"timestampcontrol-api",children:"TimestampControl API"}),`
`,(0,e.jsx)(n.h3,{id:"value",children:"value"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type ",(0,e.jsx)(n.code,{children:"number"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"The timestamp value in milliseconds"}),`
`,(0,e.jsx)(n.h3,{id:"disabled",children:"disabled"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type ",(0,e.jsx)(n.code,{children:"boolean"})]}),`
`]}),`
`,(0,e.jsx)(o.Xz,{withSource:"false",children:(0,e.jsx)(o.oG,{id:"packages-videopress-timestamp-control--disabled"})}),`
`,(0,e.jsx)(n.h3,{id:"label",children:"label"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type ",(0,e.jsx)(n.code,{children:"ReactNode"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:`If this property is added, a label will be generated using label property as the content.
ReactNode`}),`
`,(0,e.jsx)(n.h3,{id:"help",children:"help"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type ",(0,e.jsx)(n.code,{children:"ReactNode"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"If this property is added, a help text will be added after the component using the help property as the content."}),`
`,(0,e.jsx)(n.h3,{id:"onchange",children:"onChange"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"Function"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"Use this property to pass a callback function, where the API provides the selected time in milliseconds."}),`
`,(0,e.jsx)(n.h3,{id:"ondebouncechange",children:"onDebounceChange"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"Function"})]}),`
`]}),`
`,(0,e.jsxs)(n.p,{children:["Similar to ",(0,e.jsx)(n.code,{children:"onChange"})," property, but the call is debouncing in time according to the ",(0,e.jsx)(n.code,{children:"wait"})," property value."]}),`
`,(0,e.jsx)(n.h3,{id:"wait",children:"wait"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"Number"})]}),`
`]}),`
`,(0,e.jsxs)(n.p,{children:["Time, in milliseconds, that the ",(0,e.jsx)(n.code,{children:"onDebounceChange"})," function will be debounced."]}),`
`,(0,e.jsx)(n.h3,{id:""}),`
`,(0,e.jsx)(n.h3,{id:"max",children:"max"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"number"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:`Maximum time value, in milliseconds, expected by the component.
Also, if it's bigger than one hour, the hour input will be rendered into the Timestamp Input component.`}),`
`,(0,e.jsx)(n.h3,{id:"decimalplaces",children:"decimalPlaces"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"type: 1 | 2 | 3"}),`
`,(0,e.jsx)(n.li,{children:"optional"}),`
`]}),`
`,(0,e.jsx)(n.p,{children:`The decimalPlaces property is used to add fractions of a second.
This property allows the user to specify the number of digits to be displayed after the seconds separator,
thus allowpackages-videopress-timestamp-control--with-marksing for a customizable level of precision.`}),`
`,(0,e.jsx)(o.Xz,{withSource:"open",children:(0,e.jsx)(o.oG,{id:"packages-videopress-timestamp-control--decimal-places"})}),`
`,(0,e.jsx)(n.p,{children:"The example above shows how to configure two decimal places for the control. The max value is five seconds (5000)."}),`
`,(0,e.jsx)(n.h3,{id:"fineadjustment",children:"fineAdjustment"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"number"})]}),`
`,(0,e.jsxs)(n.li,{children:["default: ",(0,e.jsx)(n.code,{children:"50"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"Time, in milliseconds, for every step of the Range control."}),`
`,(0,e.jsx)(n.h3,{id:"autohidetimeinput",children:"autoHideTimeInput"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"boolean"})]}),`
`,(0,e.jsxs)(n.li,{children:["default: ",(0,e.jsx)(n.code,{children:"True"})]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"rendertooltip",children:"renderTooltip"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"function"})]}),`
`,(0,e.jsx)(n.li,{children:"optional"}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"Optional option that when True renders a tooltip in the Range control, with a default time format."}),`
`,(0,e.jsx)(o.Xz,{children:(0,e.jsx)(o.oG,{id:"packages-videopress-timestamp-control--show-tooltip"})}),`
`,(0,e.jsx)(n.p,{children:"It also accepts a function. The example below shows how to customize what the tooltip shows."}),`
`,(0,e.jsx)(o.Xz,{children:(0,e.jsx)(o.oG,{id:"packages-videopress-timestamp-control--custom-tooltip"})}),`
`,(0,e.jsx)(n.h3,{id:"marksevery",children:"marksEvery"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"number"})]}),`
`,(0,e.jsx)(n.li,{children:"optional"}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"Pass a time value, in milliseconds, to generate a mark set to add to the Range control."}),`
`,(0,e.jsx)(o.Xz,{children:(0,e.jsx)(o.oG,{id:"packages-videopress-timestamp-control--with-marks"})}),`
`,(0,e.jsx)(n.h2,{id:"handling-the-value-property",children:"Handling the value property"}),`
`,(0,e.jsxs)(n.p,{children:[`By default, the component will handle its value internally through a local state.
The `,(0,e.jsx)(n.code,{children:"value"}),` property will define its initial value.
It simplifies its usage since consumers
won't be concerned about storing and propagating the updated value.`]}),`
`,(0,e.jsxs)(n.p,{children:["However, updating the ",(0,e.jsx)(n.code,{children:"value"}),` property externally is possible if you need it.
The TimestampControl component will follow the new value provided.`]}),`
`,(0,e.jsx)(n.p,{children:`In the example below, it's possible to update the Timestamp value internally,
but also it's doable by using the additional range control.`}),`
`,(0,e.jsx)(o.Xz,{children:(0,e.jsx)(o.oG,{id:"packages-videopress-timestamp-control--changing-value-externally"})})]})}function b(u={}){const{wrapper:n}=Object.assign({},(0,x.useMDXComponents)(),u.components);return n?(0,e.jsx)(n,Object.assign({},u,{children:(0,e.jsx)(m,u)})):m(u)}const h=b},"../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/hooks.js":(R,p,t)=>{"use strict";t.d(p,{u:()=>x});var i=t("../../../node_modules/.pnpm/@wordpress+compose@6.24.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),e=t("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js");function x(a){const{help:o,id:E,...y}=a,m=(0,i.Z)(e.ZP,"wp-components-base-control",E),b=typeof o=="string"?"aria-describedby":"aria-details";return{baseControlProps:{id:m,help:o,...y},controlProps:{id:m,...o?{[b]:`${m}__help`}:{}}}}},"../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/text-control/index.js":(R,p,t)=>{"use strict";t.d(p,{Z:()=>m});var i=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),x=t.n(e),a=t("../../../node_modules/.pnpm/@wordpress+compose@6.24.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),o=t("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js");function E(b,h){const{__nextHasNoMarginBottom:u,__next40pxDefaultSize:n=!1,label:S,hideLabelFromVision:P,value:F,help:f,id:c,className:B,onChange:M,type:w="text",...I}=b,D=(0,a.Z)(y,"inspector-text-control",c),U=K=>M(K.target.value);return(0,i.createElement)(o.ZP,{__nextHasNoMarginBottom:u,label:S,hideLabelFromVision:P,id:D,help:f,className:B},(0,i.createElement)("input",{className:x()("components-text-control__input",{"is-next-40px-default-size":n}),type:w,id:D,value:F,onChange:U,"aria-describedby":f?D+"__help":void 0,ref:h,...I}))}const y=(0,i.forwardRef)(E),m=y},"../../../node_modules/.pnpm/@wordpress+compose@6.24.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js":(R,p,t)=>{"use strict";t.d(p,{Z:()=>x});var i=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function e(a,o){typeof a=="function"?a(o):a&&a.hasOwnProperty("current")&&(a.current=o)}function x(a){const o=(0,i.useRef)(),E=(0,i.useRef)(!1),y=(0,i.useRef)(!1),m=(0,i.useRef)([]),b=(0,i.useRef)(a);return b.current=a,(0,i.useLayoutEffect)(()=>{y.current===!1&&E.current===!0&&a.forEach((h,u)=>{const n=m.current[u];h!==n&&(e(n,null),e(h,o.current))}),m.current=a},a),(0,i.useLayoutEffect)(()=>{y.current=!1}),(0,i.useCallback)(h=>{e(o,h),y.current=!0,E.current=h!==null;const u=h?b.current:m.current;for(const n of u)e(n,h)},[])}},"../../packages/videopress/src/client/components/timestamp-control/index.tsx":(R,p,t)=>{"use strict";t.d(p,{ZP:()=>Z});var i=t("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js"),e=t("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/hooks.js"),x=t("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/number-control/index.js"),a=t("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/text-control/index.js"),o=t("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/range-control/index.js"),E=t("../../../node_modules/.pnpm/@wordpress+compose@6.24.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),y=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),b=t.n(m);function h(s){const r=Math.floor(s/36e5),d=Math.floor(s/6e4)%60,l=Math.floor(s/1e3)%60,v=Math.floor(s/10)%100;return[r>0?r.toString().padStart(2,"0")+":":"",r>0||d>0?d.toString().padStart(2,"0")+":":"",l.toString().padStart(2,"0"),"."+v.toString().padStart(2,"0")].join("")}var u=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=t.n(u),S=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/timestamp-control/style.module.scss"),P={};P.insert="head",P.singleton=!1;var F=n()(S.Z,P);const f=S.Z.locals||{};var c=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function B(s){const{help:r,id:d,...l}=s,v=(0,E.Z)(i.ZP,"wp-components-base-control",d),_=typeof r=="string"?"aria-describedby":"aria-details";return{baseControlProps:{id:v,help:r,...l},controlProps:{id:v,...r?{[_]:`${v}__help`}:{}}}}const M=e.u||B,w=s=>{if(x.Z)return(0,c.jsx)(x.Z,{...s});const r={...s};return["spinControls","isPressEnterToChange","isDragEnabled","isShiftStepEnabled","__unstableStateReducer"].forEach(d=>delete r[d]),(0,c.jsx)(a.Z,{...r})};w.displayName="NumberControl";const I=({char:s=":"})=>(0,c.jsx)("span",{className:f["timestamp-control-divider"],children:s});I.displayName="TimeDivider";const D="CHANGE",U="COMMIT",K="PRESS_DOWN",H="PRESS_UP",k=s=>(r,d)=>{const l={...r};return(d.type===U||d.type===H||d.type===K||d.type===D)&&l.value!==void 0&&(l.value=l.value.toString().padStart(s,"0")),l};function W(s,r,d){s>d&&(s=d);const l=Number.isNaN(s),v=l||typeof r=="undefined"?0:Math.floor(s%1e3/+`1e${3-r}`);return{hh:l?0:Math.floor(s/(1e3*60*60)%24),mm:l?0:Math.floor(s/(1e3*60)%60),ss:l?0:Math.floor(s/1e3%60),decimal:v}}const L=({onChange:s,disabled:r,value:d,max:l,autoHideTimeInput:v=!0,decimalPlaces:_})=>{const g={value:W(d,_,l)},N=l>60*60*1e3,j=l>60*1e3,V=O=>T=>{if(typeof T=="string"&&!isNaN(parseInt(T,10))&&(T=parseInt(T,10)),O==="hh"&&T>99||(O==="mm"||O==="ss")&&T>59||O==="decimal"&&T>+`1e${_}`-1||typeof T=="string")return;g.value={...W(d,_,l),[O]:T};const z=g.value.decimal?g.value.decimal*+`1e${3-_}`:0;s==null||s((g.value.hh*3600+g.value.mm*60+g.value.ss)*1e3+z)};return(0,c.jsxs)("div",{className:b()(f["timestamp-input-wrapper"],{[f["is-disabled"]]:r}),children:[(N||!v)&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(w,{className:f["timestamp-control-input"],disabled:r,min:0,max:99,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:k(2),value:String(g.value.hh).padStart(2,"0"),onChange:V("hh")}),(0,c.jsx)(I,{})]}),(j||!v)&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(w,{className:f["timestamp-control-input"],disabled:r,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:k(2),value:String(g.value.mm).padStart(2,"0"),onChange:V("mm")}),(0,c.jsx)(I,{})]}),(0,c.jsx)(w,{className:f["timestamp-control-input"],disabled:r,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:k(2),value:String(g.value.ss).padStart(2,"0"),onChange:V("ss")}),_&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(I,{char:"."}),(0,c.jsx)(w,{className:f["timestamp-control-input"],style:{"--input-width":`${12*_}px`},disabled:r,min:0,max:Number("9".repeat(_)),step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"0".repeat(_),isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:k(_),value:String(g.value.decimal).padStart(_,"0"),onChange:V("decimal")})]})]})};L.displayName="TimestampInput";const A=s=>{const{disabled:r=!1,min:d=0,max:l=Number.MAX_SAFE_INTEGER,value:v,onChange:_,onDebounceChange:g,wait:N=1e3,fineAdjustment:j=50,autoHideTimeInput:V=!0,decimalPlaces:O,marksEvery:T,renderTooltip:z}=s,X=(0,y.useRef)(),[G,Q]=(0,y.useState)(v);(0,y.useEffect)(()=>{Q(v)},[v]);const{baseControlProps:$}=(M==null?void 0:M(s))||{},J=(0,y.useCallback)(C=>{clearTimeout(X==null?void 0:X.current),C>l&&(C=l),C<d&&(C=d),Q(C),_==null||_(C),X.current=setTimeout(g==null?void 0:g.bind(null,C),N)},[g,_,l,d,N]),Y=[];if(T)for(let C=d;C<=l;C+=T)Y.push({value:C,label:null});const q=typeof z=="function"?z:C=>h(C);return(0,c.jsx)(i.ZP,{...$,children:(0,c.jsxs)("div",{className:f["timestamp-control__controls-wrapper"],children:[w&&(0,c.jsx)(L,{disabled:r,max:l,value:G,onChange:J,autoHideTimeInput:V,decimalPlaces:O}),(0,c.jsx)(o.Z,{disabled:r,className:f["timestamp-range-control"],min:d,step:j,initialPosition:G,value:G,max:l,withInputField:!1,onChange:J,marks:T?Y:void 0,renderTooltipContent:q,...z===!1?{showTooltip:!1}:{}})]})})};A.displayName="TimestampControl";const Z=A;try{L.displayName="TimestampInput",L.__docgenInfo={description:"",displayName:"TimestampInput",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"]={docgenInfo:L.__docgenInfo,name:"TimestampInput",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"})}catch(s){}try{A.displayName="TimestampControl",A.__docgenInfo={description:"TimestampControl component",displayName:"TimestampControl",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"]={docgenInfo:A.__docgenInfo,name:"TimestampControl",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"})}catch(s){}try{timestampcontrol.displayName="timestampcontrol",timestampcontrol.__docgenInfo={description:"TimestampControl component",displayName:"timestampcontrol",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"]={docgenInfo:timestampcontrol.__docgenInfo,name:"timestampcontrol",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"})}catch(s){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/timestamp-control/style.module.scss":(R,p,t)=>{"use strict";t.d(p,{Z:()=>E});var i=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=t.n(i),x=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=t.n(x),o=a()(e());o.push([R.id,".zuO3RgAd20yV6c0cEjwU{--input-width: 24px;display:flex;align-items:center;gap:8px}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child{margin-bottom:0;flex-grow:2}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-base-control__field,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-base-control__field{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-range-control__wrapper,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-range-control__wrapper{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .components-range-control__marks{top:13px}.xiVP4KSb56I10368tN0v{display:flex;align-items:center;border-color:#949494;background-color:#fff;border-style:solid;justify-content:space-around;border-width:1px;padding:0px}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr{padding:0 1px;margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr input{max-width:var(--input-width)}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field .components-text-control__input{border:none;text-align:center;padding:0}.xiVP4KSb56I10368tN0v .components-input-control:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .components-input-control__input{padding-left:0 !important;padding-right:0 !important;text-align:center}.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-outer-spin-button,.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-inner-spin-button{-webkit-appearance:none}.xiVP4KSb56I10368tN0v .components-input-control__input[type=number]{-webkit-appearance:textfield;appearance:textfield;-moz-appearance:textfield}.xiVP4KSb56I10368tN0v .components-input-control__backdrop{border-style:none !important}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ{background-color:#f0f0f0}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ .PjODCu3uI7wWSXk4MiIH{color:#949494}.PjODCu3uI7wWSXk4MiIH{font-weight:900}",""]),o.locals={"timestamp-control__controls-wrapper":"zuO3RgAd20yV6c0cEjwU","timestamp-range-control":"m7UQ82mfQtaGf0Uxn62H","timestamp-input-wrapper":"xiVP4KSb56I10368tN0v","timestamp-control-input":"J6r6Ls3WNV_CSbuzeLyr","is-disabled":"XtdqGJfT1AOZ9KRjf1TZ","timestamp-control-divider":"PjODCu3uI7wWSXk4MiIH"};const E=o},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":R=>{function p(t){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}p.keys=()=>[],p.resolve=p,p.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",R.exports=p}}]);})();
