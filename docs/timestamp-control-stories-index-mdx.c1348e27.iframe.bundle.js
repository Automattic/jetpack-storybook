"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7875,9796],{"../../packages/videopress/src/client/components/timestamp-control/stories/index.mdx":(L,v,t)=>{t.r(v),t.d(v,{default:()=>u});var c=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),h=t("../../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),l=t.n(h),o=t("../../../node_modules/.pnpm/@storybook+blocks@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),P=t("../../packages/videopress/src/client/components/timestamp-control/index.tsx"),b=t("../../packages/videopress/src/client/components/timestamp-control/stories/index.stories.tsx");function m(p){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,h.useMDXComponents)(),p.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.h_,{of:b}),`
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
`,(0,e.jsx)(o.Xz,{children:(0,e.jsx)(o.oG,{id:"packages-videopress-timestamp-control--changing-value-externally"})})]})}function f(p={}){const{wrapper:n}=Object.assign({},(0,h.useMDXComponents)(),p.components);return n?(0,e.jsx)(n,Object.assign({},p,{children:(0,e.jsx)(m,p)})):m(p)}const u=f},"../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/hooks.js":(L,v,t)=>{t.d(v,{u:()=>h});var c=t("../../../node_modules/.pnpm/@wordpress+compose@6.21.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),e=t("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js");function h(l){const{help:o,id:P,...b}=l,m=(0,c.Z)(e.ZP,"wp-components-base-control",P),f=typeof o=="string"?"aria-describedby":"aria-details";return{baseControlProps:{id:m,help:o,...b},controlProps:{id:m,...o?{[f]:`${m}__help`}:{}}}}},"../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/text-control/index.js":(L,v,t)=>{t.d(v,{Z:()=>P});var c=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/@wordpress+compose@6.21.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),h=t("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js");function l(b,m){const{__nextHasNoMarginBottom:f,label:u,hideLabelFromVision:p,value:n,help:S,id:w,className:F,onChange:g,type:i="text",...N}=b,O=(0,e.Z)(o,"inspector-text-control",w),V=R=>g(R.target.value);return(0,c.createElement)(h.ZP,{__nextHasNoMarginBottom:f,label:u,hideLabelFromVision:p,id:O,help:S,className:F},(0,c.createElement)("input",{className:"components-text-control__input",type:i,id:O,value:n,onChange:V,"aria-describedby":S?O+"__help":void 0,ref:m,...N}))}const o=(0,c.forwardRef)(l),P=o},"../../../node_modules/.pnpm/@wordpress+compose@6.21.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js":(L,v,t)=>{t.d(v,{Z:()=>h});var c=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function e(l,o){typeof l=="function"?l(o):l&&l.hasOwnProperty("current")&&(l.current=o)}function h(l){const o=(0,c.useRef)(),P=(0,c.useRef)(!1),b=(0,c.useRef)(!1),m=(0,c.useRef)([]),f=(0,c.useRef)(l);return f.current=l,(0,c.useLayoutEffect)(()=>{b.current===!1&&P.current===!0&&l.forEach((u,p)=>{const n=m.current[p];u!==n&&(e(n,null),e(u,o.current))}),m.current=l},l),(0,c.useLayoutEffect)(()=>{b.current=!1}),(0,c.useCallback)(u=>{e(o,u),b.current=!0,P.current=u!==null;const p=u?f.current:m.current;for(const n of p)e(n,u)},[])}},"../../packages/videopress/src/client/components/timestamp-control/stories/index.stories.tsx":(L,v,t)=>{var N,O,V,R,W,H,Z,z,D,K,k,A,X,s,r,a,d,_,j,x,y;t.r(v),t.d(v,{__namedExportsOrder:()=>i,_default:()=>f,changingValueExternally:()=>g,customTooltip:()=>w,decimalPlaces:()=>u,default:()=>b,disabled:()=>p,showTooltip:()=>S,withMarks:()=>n});var c=t("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/range-control/index.js"),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=t("../../packages/videopress/src/client/components/timestamp-control/index.tsx"),l=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=`import { RangeControl } from '@wordpress/components';
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
`,P={_default:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},decimalPlaces:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},disabled:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},withMarks:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},showTooltip:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},customTooltip:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},changingValueExternally:{startLoc:{col:71,line:86},endLoc:{col:1,line:93},startBody:{col:71,line:86},endBody:{col:1,line:93}}};const b={parameters:{storySource:{source:`import { RangeControl } from '@wordpress/components';
import { useState } from 'react';
import TimestampControl from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'Packages/VideoPress/Timestamp Control',
  component: TimestampControl
} as ComponentMeta<typeof TimestampControl>);
const Template: ComponentStory<typeof TimestampControl> = args => {
  return <TimestampControl {...args} />;
};
export const _default = Template.bind({});
_default.args = {
  label: 'Video frame',
  help: 'Use the control to set timestamp of the video frame.',
  max: 3600 * 1000 * 2,
  // 2 hours
  value: 236 * 1000 + 125,
  // 3:56.125
  wait: 100,
  decimalPlaces: undefined,
  fineAdjustment: 50,
  disabled: false,
  autoHideTimeInput: true,
  onChange: (newTime: number) => {
    console.log({
      newTime
    }); 
  },

  onDebounceChange: (newDebouncedTime: number) => {
    console.log({
      newDebouncedTime
    }); 
  }
};

_default.storyName = 'Timestamp Control';
export const decimalPlaces = Template.bind({});
decimalPlaces.args = {
  value: 3500,
  // 3.5 seconds
  max: 1000 * 5,
  // five seconds
  decimalPlaces: 2
};

// disabled story
export const disabled = Template.bind({});
disabled.args = {
  max: 3600 * 1000 * 2,
  // 2 hours
  value: 3600 * 1000 + 15 * 60 * 1000 + 43 * 1000,
  // 1.5 hours
  disabled: true
};
export const withMarks = Template.bind({});
withMarks.args = {
  value: 3500,
  // 3.5 seconds
  max: 1000 * 10,
  // ten seconds
  marksEvery: 1000,
  // a mark every second
  fineAdjustment: 200
};
export const showTooltip = Template.bind({});
showTooltip.args = {
  value: 80000,
  // 1 minute 20 seconds
  max: 1000 * 100,
  // 100 seconds
  renderTooltip: true
};
export const customTooltip = Template.bind({});
customTooltip.args = {
  value: 1000 * 50,
  // 3.5 seconds
  max: 1000 * 80,
  // ten seconds
  fineAdjustment: 200,
  renderTooltip: (value: number) => {
    return <span>{value / 1000} seconds</span>;
  }
};
const ChangingValueTemplate: ComponentStory<typeof TimestampControl> = args => {
  const [value, setValue] = useState(args.value);
  return <>
            <TimestampControl {...args} label="TimestampControl component" help="The value is handled internally by the component." value={value} onDebounceChange={setValue} />
            <br />
            <RangeControl label="RangeControl component" help="The value is handled externally, and passed to the <TimestampControl /> above component." value={value} onChange={setValue} max={args.max} />
        </>;
};
export const changingValueExternally = ChangingValueTemplate.bind({});
changingValueExternally.args = {
  value: 3500,
  // 3.5 seconds
  max: 1000 * 5,
  // five seconds
  decimalPlaces: 2,
  wait: 100
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => {\\n  return <TimestampControl {...args} />;\\n}",
      ..._default.parameters?.docs?.source
    }
  }
};
decimalPlaces.parameters = {
  ...decimalPlaces.parameters,
  docs: {
    ...decimalPlaces.parameters?.docs,
    source: {
      originalSource: "args => {\\n  return <TimestampControl {...args} />;\\n}",
      ...decimalPlaces.parameters?.docs?.source
    }
  }
};
disabled.parameters = {
  ...disabled.parameters,
  docs: {
    ...disabled.parameters?.docs,
    source: {
      originalSource: "args => {\\n  return <TimestampControl {...args} />;\\n}",
      ...disabled.parameters?.docs?.source
    }
  }
};
withMarks.parameters = {
  ...withMarks.parameters,
  docs: {
    ...withMarks.parameters?.docs,
    source: {
      originalSource: "args => {\\n  return <TimestampControl {...args} />;\\n}",
      ...withMarks.parameters?.docs?.source
    }
  }
};
showTooltip.parameters = {
  ...showTooltip.parameters,
  docs: {
    ...showTooltip.parameters?.docs,
    source: {
      originalSource: "args => {\\n  return <TimestampControl {...args} />;\\n}",
      ...showTooltip.parameters?.docs?.source
    }
  }
};
customTooltip.parameters = {
  ...customTooltip.parameters,
  docs: {
    ...customTooltip.parameters?.docs,
    source: {
      originalSource: "args => {\\n  return <TimestampControl {...args} />;\\n}",
      ...customTooltip.parameters?.docs?.source
    }
  }
};
changingValueExternally.parameters = {
  ...changingValueExternally.parameters,
  docs: {
    ...changingValueExternally.parameters?.docs,
    source: {
      originalSource: "args => {\\n  const [value, setValue] = useState(args.value);\\n  return <>\\n            <TimestampControl {...args} label=\\"TimestampControl component\\" help=\\"The value is handled internally by the component.\\" value={value} onDebounceChange={setValue} />\\n            <br />\\n            <RangeControl label=\\"RangeControl component\\" help=\\"The value is handled externally, and passed to the <TimestampControl /> above component.\\" value={value} onChange={setValue} max={args.max} />\\n        </>;\\n}",
      ...changingValueExternally.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"decimal-places":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},disabled:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"with-marks":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"show-tooltip":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"custom-tooltip":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"changing-value-externally":{startLoc:{col:71,line:86},endLoc:{col:1,line:93},startBody:{col:71,line:86},endBody:{col:1,line:93}}}}},title:"Packages/VideoPress/Timestamp Control",component:h.ZP},m=T=>(0,l.jsx)(h.ZP,{...T});m.displayName="Template";const f=m.bind({});f.args={label:"Video frame",help:"Use the control to set timestamp of the video frame.",max:3600*1e3*2,value:236*1e3+125,wait:100,decimalPlaces:void 0,fineAdjustment:50,disabled:!1,autoHideTimeInput:!0,onChange:T=>{console.log({newTime:T})},onDebounceChange:T=>{console.log({newDebouncedTime:T})}},f.storyName="Timestamp Control";const u=m.bind({});u.args={value:3500,max:1e3*5,decimalPlaces:2};const p=m.bind({});p.args={max:3600*1e3*2,value:3600*1e3+15*60*1e3+43*1e3,disabled:!0};const n=m.bind({});n.args={value:3500,max:1e3*10,marksEvery:1e3,fineAdjustment:200};const S=m.bind({});S.args={value:8e4,max:1e3*100,renderTooltip:!0};const w=m.bind({});w.args={value:1e3*50,max:1e3*80,fineAdjustment:200,renderTooltip:T=>(0,l.jsxs)("span",{children:[T/1e3," seconds"]})};const g=(T=>{const[B,I]=(0,e.useState)(T.value);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h.ZP,{...T,label:"TimestampControl component",help:"The value is handled internally by the component.",value:B,onDebounceChange:I}),(0,l.jsx)("br",{}),(0,l.jsx)(c.Z,{label:"RangeControl component",help:"The value is handled externally, and passed to the <TimestampControl /> above component.",value:B,onChange:I,max:T.max})]})}).bind({});g.args={value:3500,max:1e3*5,decimalPlaces:2,wait:100},f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(V=(O=f.parameters)==null?void 0:O.docs)==null?void 0:V.source}}},u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(H=(W=u.parameters)==null?void 0:W.docs)==null?void 0:H.source}}},p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(D=(z=p.parameters)==null?void 0:z.docs)==null?void 0:D.source}}},n.parameters={...n.parameters,docs:{...(K=n.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(A=(k=n.parameters)==null?void 0:k.docs)==null?void 0:A.source}}},S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(r=(s=S.parameters)==null?void 0:s.docs)==null?void 0:r.source}}},w.parameters={...w.parameters,docs:{...(a=w.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(_=(d=w.parameters)==null?void 0:d.docs)==null?void 0:_.source}}},g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <>
            <TimestampControl {...args} label="TimestampControl component" help="The value is handled internally by the component." value={value} onDebounceChange={setValue} />
            <br />
            <RangeControl label="RangeControl component" help="The value is handled externally, and passed to the <TimestampControl /> above component." value={value} onChange={setValue} max={args.max} />
        </>;
}`,...(y=(x=g.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const i=["_default","decimalPlaces","disabled","withMarks","showTooltip","customTooltip","changingValueExternally"]},"../../packages/videopress/src/client/components/timestamp-control/index.tsx":(L,v,t)=>{t.d(v,{ZP:()=>X});var c=t("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js"),e=t("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/hooks.js"),h=t("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/number-control/index.js"),l=t("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/text-control/index.js"),o=t("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/range-control/index.js"),P=t("../../../node_modules/.pnpm/@wordpress+compose@6.21.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),b=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),f=t.n(m);function u(s){const r=Math.floor(s/36e5),a=Math.floor(s/6e4)%60,d=Math.floor(s/1e3)%60,_=Math.floor(s/10)%100;return[r>0?r.toString().padStart(2,"0")+":":"",r>0||a>0?a.toString().padStart(2,"0")+":":"",d.toString().padStart(2,"0"),"."+_.toString().padStart(2,"0")].join("")}var p=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=t.n(p),S=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/timestamp-control/style.module.scss"),w={};w.insert="head",w.singleton=!1;var F=n()(S.Z,w);const g=S.Z.locals||{};var i=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function N(s){const{help:r,id:a,...d}=s,_=(0,P.Z)(c.ZP,"wp-components-base-control",a),j=typeof r=="string"?"aria-describedby":"aria-details";return{baseControlProps:{id:_,help:r,...d},controlProps:{id:_,...r?{[j]:`${_}__help`}:{}}}}const O=e.u||N,V=s=>{if(h.Z)return(0,i.jsx)(h.Z,{...s});const r={...s};return["spinControls","isPressEnterToChange","isDragEnabled","isShiftStepEnabled","__unstableStateReducer"].forEach(a=>delete r[a]),(0,i.jsx)(l.Z,{...r})};V.displayName="NumberControl";const R=s=>{let{char:r=":"}=s;return(0,i.jsx)("span",{className:g["timestamp-control-divider"],children:r})};R.displayName="TimeDivider";const W="CHANGE",H="COMMIT",Z="PRESS_DOWN",z="PRESS_UP",D=s=>(r,a)=>{const d={...r};return(a.type===H||a.type===z||a.type===Z||a.type===W)&&d.value!==void 0&&(d.value=d.value.toString().padStart(s,"0")),d};function K(s,r,a){s>a&&(s=a);const d=Number.isNaN(s),_=d||typeof r=="undefined"?0:Math.floor(s%1e3/+`1e${3-r}`);return{hh:d?0:Math.floor(s/(1e3*60*60)%24),mm:d?0:Math.floor(s/(1e3*60)%60),ss:d?0:Math.floor(s/1e3%60),decimal:_}}const k=s=>{let{onChange:r,disabled:a,value:d,max:_,autoHideTimeInput:j=!0,decimalPlaces:x}=s;const y={value:K(d,x,_)},T=_>60*60*1e3,B=_>60*1e3,I=M=>C=>{if(typeof C=="string"&&!isNaN(parseInt(C,10))&&(C=parseInt(C,10)),M==="hh"&&C>99||(M==="mm"||M==="ss")&&C>59||M==="decimal"&&C>+`1e${x}`-1||typeof C=="string")return;y.value={...K(d,x,_),[M]:C};const U=y.value.decimal?y.value.decimal*+`1e${3-x}`:0;r==null||r((y.value.hh*3600+y.value.mm*60+y.value.ss)*1e3+U)};return(0,i.jsxs)("div",{className:f()(g["timestamp-input-wrapper"],{[g["is-disabled"]]:a}),children:[(T||!j)&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(V,{className:g["timestamp-control-input"],disabled:a,min:0,max:99,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:D(2),value:String(y.value.hh).padStart(2,"0"),onChange:I("hh")}),(0,i.jsx)(R,{})]}),(B||!j)&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(V,{className:g["timestamp-control-input"],disabled:a,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:D(2),value:String(y.value.mm).padStart(2,"0"),onChange:I("mm")}),(0,i.jsx)(R,{})]}),(0,i.jsx)(V,{className:g["timestamp-control-input"],disabled:a,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:D(2),value:String(y.value.ss).padStart(2,"0"),onChange:I("ss")}),x&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(R,{char:"."}),(0,i.jsx)(V,{className:g["timestamp-control-input"],style:{"--input-width":`${12*x}px`},disabled:a,min:0,max:Number("9".repeat(x)),step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"0".repeat(x),isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:D(x),value:String(y.value.decimal).padStart(x,"0"),onChange:I("decimal")})]})]})};k.displayName="TimestampInput";const A=s=>{const{disabled:r=!1,min:a=0,max:d=Number.MAX_SAFE_INTEGER,value:_,onChange:j,onDebounceChange:x,wait:y=1e3,fineAdjustment:T=50,autoHideTimeInput:B=!0,decimalPlaces:I,marksEvery:M,renderTooltip:C}=s,U=(0,b.useRef)(),[G,Q]=(0,b.useState)(_);(0,b.useEffect)(()=>{Q(_)},[_]);const{baseControlProps:$}=(O==null?void 0:O(s))||{},J=(0,b.useCallback)(E=>{clearTimeout(U==null?void 0:U.current),E>d&&(E=d),E<a&&(E=a),Q(E),j==null||j(E),U.current=setTimeout(x==null?void 0:x.bind(null,E),y)},[x,j,d,a,y]),Y=[];if(M)for(let E=a;E<=d;E+=M)Y.push({value:E,label:null});const q=typeof C=="function"?C:E=>u(E);return(0,i.jsx)(c.ZP,{...$,children:(0,i.jsxs)("div",{className:g["timestamp-control__controls-wrapper"],children:[V&&(0,i.jsx)(k,{disabled:r,max:d,value:G,onChange:J,autoHideTimeInput:B,decimalPlaces:I}),(0,i.jsx)(o.Z,{disabled:r,className:g["timestamp-range-control"],min:a,step:T,initialPosition:G,value:G,max:d,withInputField:!1,onChange:J,marks:M?Y:void 0,renderTooltipContent:q,...C===!1?{showTooltip:!1}:{}})]})})};A.displayName="TimestampControl";const X=A;try{k.displayName="TimestampInput",k.__docgenInfo={description:"",displayName:"TimestampInput",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"]={docgenInfo:k.__docgenInfo,name:"TimestampInput",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"})}catch(s){}try{A.displayName="TimestampControl",A.__docgenInfo={description:"TimestampControl component",displayName:"TimestampControl",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"]={docgenInfo:A.__docgenInfo,name:"TimestampControl",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"})}catch(s){}try{timestampcontrol.displayName="timestampcontrol",timestampcontrol.__docgenInfo={description:"TimestampControl component",displayName:"timestampcontrol",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"]={docgenInfo:timestampcontrol.__docgenInfo,name:"timestampcontrol",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"})}catch(s){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/timestamp-control/style.module.scss":(L,v,t)=>{t.d(v,{Z:()=>P});var c=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=t.n(c),h=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=t.n(h),o=l()(e());o.push([L.id,".zuO3RgAd20yV6c0cEjwU{--input-width: 24px;display:flex;align-items:center;gap:8px}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child{margin-bottom:0;flex-grow:2}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-base-control__field,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-base-control__field{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-range-control__wrapper,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-range-control__wrapper{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .components-range-control__marks{top:13px}.xiVP4KSb56I10368tN0v{display:flex;align-items:center;border-color:#949494;background-color:#fff;border-style:solid;justify-content:space-around;border-width:1px;padding:0px}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr{padding:0 1px;margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr input{max-width:var(--input-width)}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field .components-text-control__input{border:none;text-align:center;padding:0}.xiVP4KSb56I10368tN0v .components-input-control:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .components-input-control__input{padding-left:0 !important;padding-right:0 !important;text-align:center}.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-outer-spin-button,.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-inner-spin-button{-webkit-appearance:none}.xiVP4KSb56I10368tN0v .components-input-control__input[type=number]{-webkit-appearance:textfield;appearance:textfield;-moz-appearance:textfield}.xiVP4KSb56I10368tN0v .components-input-control__backdrop{border-style:none !important}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ{background-color:#f0f0f0}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ .PjODCu3uI7wWSXk4MiIH{color:#949494}.PjODCu3uI7wWSXk4MiIH{font-weight:900}",""]),o.locals={"timestamp-control__controls-wrapper":"zuO3RgAd20yV6c0cEjwU","timestamp-range-control":"m7UQ82mfQtaGf0Uxn62H","timestamp-input-wrapper":"xiVP4KSb56I10368tN0v","timestamp-control-input":"J6r6Ls3WNV_CSbuzeLyr","is-disabled":"XtdqGJfT1AOZ9KRjf1TZ","timestamp-control-divider":"PjODCu3uI7wWSXk4MiIH"};const P=o}}]);})();
