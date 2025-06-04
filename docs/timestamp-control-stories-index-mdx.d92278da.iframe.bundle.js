(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9024,2690],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(y,s,t)=>{"use strict";t.d(s,{R:()=>o,x:()=>x});var a=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},h=a.createContext(e);function o(d){const i=a.useContext(h);return a.useMemo(function(){return typeof d=="function"?d(i):{...i,...d}},[i,d])}function x(d){let i;return d.disableParentContext?i=typeof d.components=="function"?d.components(e):d.components||e:i=o(d.components),a.createElement(h.Provider,{value:i},d.children)}},"../../packages/videopress/src/client/components/timestamp-control/stories/index.mdx":(y,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>u});var a=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),h=t("../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),o=t("../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist/index.mjs"),x=t("../../packages/videopress/src/client/components/timestamp-control/index.tsx"),d=t("../../packages/videopress/src/client/components/timestamp-control/stories/index.stories.tsx");function i(_){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,h.R)(),..._.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.W8,{of:d}),`
`,(0,e.jsx)(n.h1,{id:"timestamp-control",children:"Timestamp Control"}),`
`,(0,e.jsx)(n.p,{children:"React component to set a timestamp value."}),`
`,(0,e.jsx)(o.Hl,{withSource:"open",children:(0,e.jsx)(o.gG,{id:"packages-videopress-timestamp-control--default"})}),`
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
`,(0,e.jsx)(o.Hl,{withSource:"false",children:(0,e.jsx)(o.gG,{id:"packages-videopress-timestamp-control--disabled"})}),`
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
`,(0,e.jsx)(o.Hl,{withSource:"open",children:(0,e.jsx)(o.gG,{id:"packages-videopress-timestamp-control--decimal-places"})}),`
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
`,(0,e.jsx)(o.Hl,{children:(0,e.jsx)(o.gG,{id:"packages-videopress-timestamp-control--show-tooltip"})}),`
`,(0,e.jsx)(n.p,{children:"It also accepts a function. The example below shows how to customize what the tooltip shows."}),`
`,(0,e.jsx)(o.Hl,{children:(0,e.jsx)(o.gG,{id:"packages-videopress-timestamp-control--custom-tooltip"})}),`
`,(0,e.jsx)(n.h3,{id:"marksevery",children:"marksEvery"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"number"})]}),`
`,(0,e.jsx)(n.li,{children:"optional"}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"Pass a time value, in milliseconds, to generate a mark set to add to the Range control."}),`
`,(0,e.jsx)(o.Hl,{children:(0,e.jsx)(o.gG,{id:"packages-videopress-timestamp-control--with-marks"})}),`
`,(0,e.jsx)(n.h2,{id:"handling-the-value-property",children:"Handling the value property"}),`
`,(0,e.jsxs)(n.p,{children:[`By default, the component will handle its value internally through a local state.
The `,(0,e.jsx)(n.code,{children:"value"}),` property will define its initial value.
It simplifies its usage since consumers
won't be concerned about storing and propagating the updated value.`]}),`
`,(0,e.jsxs)(n.p,{children:["However, updating the ",(0,e.jsx)(n.code,{children:"value"}),` property externally is possible if you need it.
The TimestampControl component will follow the new value provided.`]}),`
`,(0,e.jsx)(n.p,{children:`In the example below, it's possible to update the Timestamp value internally,
but also it's doable by using the additional range control.`}),`
`,(0,e.jsx)(o.Hl,{children:(0,e.jsx)(o.gG,{id:"packages-videopress-timestamp-control--changing-value-externally"})})]})}function u(_={}){const{wrapper:n}={...(0,h.R)(),..._.components};return n?(0,e.jsx)(n,{..._,children:(0,e.jsx)(i,{..._})}):i(_)}},"../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist sync recursive":y=>{function s(t){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist sync recursive",y.exports=s},"../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/components sync recursive":y=>{function s(t){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/components sync recursive",y.exports=s},"../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/theming sync recursive":y=>{function s(t){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/theming sync recursive",y.exports=s},"../../packages/videopress/src/client/components/timestamp-control/stories/index.stories.tsx":(y,s,t)=>{"use strict";t.r(s),t.d(s,{__namedExportsOrder:()=>k,_default:()=>_,changingValueExternally:()=>l,customTooltip:()=>R,decimalPlaces:()=>n,default:()=>i,disabled:()=>v,showTooltip:()=>T,withMarks:()=>f});var a=t("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/range-control/index.js"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=t("../../packages/videopress/src/client/components/timestamp-control/index.tsx"),o=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),x=`import { RangeControl } from '@wordpress/components';
import { useState } from 'react';
import TimestampControl from '..';
import type { StoryFn, Meta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Timestamp Control',
	component: TimestampControl,
} as Meta< typeof TimestampControl >;

const Template: StoryFn< typeof TimestampControl > = args => {
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

const ChangingValueTemplate: StoryFn< typeof TimestampControl > = args => {
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
				__nextHasNoMarginBottom={ true }
				__next40pxDefaultSize={ true }
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
`,d={_default:{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},decimalPlaces:{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},disabled:{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},withMarks:{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},showTooltip:{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},customTooltip:{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},changingValueExternally:{startLoc:{col:30,line:88},endLoc:{col:1,line:107},startBody:{col:30,line:88},endBody:{col:1,line:107}}};const i={parameters:{storySource:{source:`import { RangeControl } from '@wordpress/components';
import { useState } from 'react';
import TimestampControl from '..';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export default {
  title: 'Packages/VideoPress/Timestamp Control',
  component: TimestampControl
};
const Template = args => {
  return /*#__PURE__*/_jsx(TimestampControl, {
    ...args
  });
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
  onChange: newTime => {
    console.log({
      newTime
    }); 
  },
  onDebounceChange: newDebouncedTime => {
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
  renderTooltip: value => {
    return /*#__PURE__*/_jsxs("span", {
      children: [value / 1000, " seconds"]
    });
  }
};
const ChangingValueTemplate = args => {
  const [value, setValue] = useState(args.value);
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(TimestampControl, {
      ...args,
      label: "TimestampControl component",
      help: "The value is handled internally by the component.",
      value: value,
      onDebounceChange: setValue
    }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx(RangeControl, {
      label: "RangeControl component",
      help: "The value is handled externally, and passed to the <TimestampControl /> above component.",
      value: value,
      onChange: setValue,
      max: args.max,
      __nextHasNoMarginBottom: true,
      __next40pxDefaultSize: true
    })]
  });
};
export const changingValueExternally = ChangingValueTemplate.bind({});
changingValueExternally.args = {
  value: 3500,
  // 3.5 seconds
  max: 1000 * 5,
  // five seconds
  decimalPlaces: 2,
  wait: 100
};`,locationsMap:{default:{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},"decimal-places":{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},disabled:{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},"with-marks":{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},"show-tooltip":{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},"custom-tooltip":{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},"changing-value-externally":{startLoc:{col:30,line:88},endLoc:{col:1,line:107},startBody:{col:30,line:88},endBody:{col:1,line:107}}}}},title:"Packages/VideoPress/Timestamp Control",component:h.Ay},u=g=>(0,o.jsx)(h.Ay,{...g}),_=u.bind({});_.args={label:"Video frame",help:"Use the control to set timestamp of the video frame.",max:3600*1e3*2,value:236*1e3+125,wait:100,decimalPlaces:void 0,fineAdjustment:50,disabled:!1,autoHideTimeInput:!0,onChange:g=>{console.log({newTime:g})},onDebounceChange:g=>{console.log({newDebouncedTime:g})}},_.storyName="Timestamp Control";const n=u.bind({});n.args={value:3500,max:1e3*5,decimalPlaces:2};const v=u.bind({});v.args={max:3600*1e3*2,value:3600*1e3+15*60*1e3+43*1e3,disabled:!0};const f=u.bind({});f.args={value:3500,max:1e3*10,marksEvery:1e3,fineAdjustment:200};const T=u.bind({});T.args={value:8e4,max:1e3*100,renderTooltip:!0};const R=u.bind({});R.args={value:1e3*50,max:1e3*80,fineAdjustment:200,renderTooltip:g=>(0,o.jsxs)("span",{children:[g/1e3," seconds"]})};const l=(g=>{const[w,O]=(0,e.useState)(g.value);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.Ay,{...g,label:"TimestampControl component",help:"The value is handled internally by the component.",value:w,onDebounceChange:O}),(0,o.jsx)("br",{}),(0,o.jsx)(a.A,{label:"RangeControl component",help:"The value is handled externally, and passed to the <TimestampControl /> above component.",value:w,onChange:O,max:g.max,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})]})}).bind({});l.args={value:3500,max:1e3*5,decimalPlaces:2,wait:100};const k=["_default","decimalPlaces","disabled","withMarks","showTooltip","customTooltip","changingValueExternally"];_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,..._.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...n.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...v.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...f.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...T.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...R.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <>
            <TimestampControl {...args} label="TimestampControl component" help="The value is handled internally by the component." value={value} onDebounceChange={setValue} />
            <br />
            <RangeControl label="RangeControl component" help="The value is handled externally, and passed to the <TimestampControl /> above component." value={value} onChange={setValue} max={args.max} __nextHasNoMarginBottom={true} __next40pxDefaultSize={true} />
        </>;
}`,...l.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/hooks.js":(y,s,t)=>{"use strict";t.d(s,{Y:()=>h});var a=t("../../../node_modules/.pnpm/@wordpress+compose@7.24.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),e=t("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js");function h(o){const{help:x,id:d,...i}=o,u=(0,a.A)(e.Ay,"wp-components-base-control",d);return{baseControlProps:{id:u,help:x,...i},controlProps:{id:u,...x?{"aria-describedby":`${u}__help`}:{}}}}},"../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text-control/index.js":(y,s,t)=>{"use strict";t.d(s,{A:()=>_});var a=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),e=t("../../../node_modules/.pnpm/@wordpress+compose@7.24.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),h=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),x=t("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/deprecated-36px-size.js"),d=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function i(n,v){const{__nextHasNoMarginBottom:f,__next40pxDefaultSize:T=!1,label:R,hideLabelFromVision:P,value:l,help:k,id:g,className:w,onChange:O,type:U="text",...K}=n,I=(0,e.A)(u,"inspector-text-control",g),H=D=>O(D.target.value);return(0,x.M)({componentName:"TextControl",size:void 0,__next40pxDefaultSize:T}),(0,d.jsx)(o.Ay,{__nextHasNoMarginBottom:f,__associatedWPComponentName:"TextControl",label:R,hideLabelFromVision:P,id:I,help:k,className:w,children:(0,d.jsx)("input",{className:(0,a.A)("components-text-control__input",{"is-next-40px-default-size":T}),type:U,id:I,value:l,onChange:H,"aria-describedby":k?I+"__help":void 0,ref:v,...K})})}const u=(0,h.forwardRef)(i),_=u},"../../../node_modules/.pnpm/@wordpress+compose@7.24.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js":(y,s,t)=>{"use strict";t.d(s,{A:()=>h});var a=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function e(o,x){typeof o=="function"?o(x):o&&o.hasOwnProperty("current")&&(o.current=x)}function h(o){const x=(0,a.useRef)(),d=(0,a.useRef)(!1),i=(0,a.useRef)(!1),u=(0,a.useRef)([]),_=(0,a.useRef)(o);return _.current=o,(0,a.useLayoutEffect)(()=>{i.current===!1&&d.current===!0&&o.forEach((n,v)=>{const f=u.current[v];n!==f&&(e(f,null),e(n,x.current))}),u.current=o},o),(0,a.useLayoutEffect)(()=>{i.current=!1}),(0,a.useCallback)(n=>{e(x,n),i.current=!0,d.current=n!==null;const v=n?_.current:u.current;for(const f of v)e(f,n)},[])}},"../../packages/videopress/src/client/components/timestamp-control/index.tsx":(y,s,t)=>{"use strict";t.d(s,{Ay:()=>Y});var a=t("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),e=t("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/hooks.js"),h=t("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/number-control/index.js"),o=t("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text-control/index.js"),x=t("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/range-control/index.js"),d=t("../../../node_modules/.pnpm/@wordpress+compose@7.24.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),i=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");function _(r){const m=Math.floor(r/36e5),p=Math.floor(r/6e4)%60,c=Math.floor(r/1e3)%60,j=Math.floor(r/10)%100;return[m>0?m.toString().padStart(2,"0")+":":"",m>0||p>0?p.toString().padStart(2,"0")+":":"",c.toString().padStart(2,"0"),"."+j.toString().padStart(2,"0")].join("")}var n=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),v=t.n(n),f=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../packages/videopress/src/client/components/timestamp-control/style.module.scss"),T={};T.insert="head",T.singleton=!1;var R=v()(f.A,T);const P=f.A.locals||{};var l=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function k(r){const{help:m,id:p,...c}=r,j=(0,d.A)(a.Ay,"wp-components-base-control",p),b=typeof m=="string"?"aria-describedby":"aria-details";return{baseControlProps:{id:j,help:m,...c},controlProps:{id:j,...m?{[b]:`${j}__help`}:{}}}}const g=e.Y||k,w=r=>{if(h.A)return(0,l.jsx)(h.A,{...r});const m={...r};return["spinControls","isPressEnterToChange","isDragEnabled","isShiftStepEnabled","__unstableStateReducer"].forEach(p=>delete m[p]),(0,l.jsx)(o.A,{...m})},O=({char:r=":"})=>(0,l.jsx)("span",{className:P["timestamp-control-divider"],children:r}),U="CHANGE",K="COMMIT",I="PRESS_DOWN",H="PRESS_UP",D=r=>(m,p)=>{const c={...m};return(p.type===K||p.type===H||p.type===I||p.type===U)&&c.value!==void 0&&(c.value=c.value.toString().padStart(r,"0")),c};function F(r,m,p){r>p&&(r=p);const c=Number.isNaN(r),j=c||typeof m>"u"?0:Math.floor(r%1e3/+`1e${3-m}`);return{hh:c?0:Math.floor(r/(1e3*60*60)%24),mm:c?0:Math.floor(r/(1e3*60)%60),ss:c?0:Math.floor(r/1e3%60),decimal:j}}const L=({onChange:r,disabled:m,value:p,max:c,autoHideTimeInput:j=!0,decimalPlaces:b})=>{const C={value:F(p,b,c)},B=c>60*60*1e3,W=c>60*1e3,M=A=>E=>{if(typeof E=="string"&&!isNaN(parseInt(E,10))&&(E=parseInt(E,10)),A==="hh"&&E>99||(A==="mm"||A==="ss")&&E>59||A==="decimal"&&E>+`1e${b}`-1||typeof E=="string")return;C.value={...F(p,b,c),[A]:E};const V=C.value.decimal?C.value.decimal*+`1e${3-b}`:0;r?.((C.value.hh*3600+C.value.mm*60+C.value.ss)*1e3+V)};return(0,l.jsxs)("div",{className:(0,u.A)(P["timestamp-input-wrapper"],{[P["is-disabled"]]:m}),children:[(B||!j)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w,{className:P["timestamp-control-input"],disabled:m,min:0,max:99,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:D(2),value:String(C.value.hh).padStart(2,"0"),onChange:M("hh"),__next40pxDefaultSize:!0}),(0,l.jsx)(O,{})]}),(W||!j)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w,{className:P["timestamp-control-input"],disabled:m,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:D(2),value:String(C.value.mm).padStart(2,"0"),onChange:M("mm"),__next40pxDefaultSize:!0}),(0,l.jsx)(O,{})]}),(0,l.jsx)(w,{className:P["timestamp-control-input"],disabled:m,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:D(2),value:String(C.value.ss).padStart(2,"0"),onChange:M("ss"),__next40pxDefaultSize:!0}),b&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(O,{char:"."}),(0,l.jsx)(w,{className:P["timestamp-control-input"],style:{"--input-width":`${12*b}px`},disabled:m,min:0,max:Number("9".repeat(b)),step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"0".repeat(b),isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:D(b),value:String(C.value.decimal).padStart(b,"0"),onChange:M("decimal"),__next40pxDefaultSize:!0})]})]})},N=r=>{const{disabled:m=!1,min:p=0,max:c=Number.MAX_SAFE_INTEGER,value:j,onChange:b,onDebounceChange:C,wait:B=1e3,fineAdjustment:W=50,autoHideTimeInput:M=!0,decimalPlaces:A,marksEvery:E,renderTooltip:V}=r,G=(0,i.useRef)(),[z,X]=(0,i.useState)(j);(0,i.useEffect)(()=>{X(j)},[j]);const{baseControlProps:Z}=g?.(r)||{},Q=(0,i.useCallback)(S=>{clearTimeout(G?.current),S>c&&(S=c),S<p&&(S=p),X(S),b?.(S),G.current=setTimeout(C?.bind(null,S),B)},[C,b,c,p,B]),J=[];if(E)for(let S=p;S<=c;S+=E)J.push({value:S,label:null});const $=typeof V=="function"?V:S=>_(S);return(0,l.jsx)(a.Ay,{...Z,__nextHasNoMarginBottom:!0,children:(0,l.jsxs)("div",{className:P["timestamp-control__controls-wrapper"],children:[w&&(0,l.jsx)(L,{disabled:m,max:c,value:z,onChange:Q,autoHideTimeInput:M,decimalPlaces:A}),(0,l.jsx)(x.A,{disabled:m,className:P["timestamp-range-control"],min:p,step:W,initialPosition:z,value:z,max:c,withInputField:!1,onChange:Q,marks:E?J:void 0,renderTooltipContent:$,...V===!1?{showTooltip:!1}:{},__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})]})})},Y=N;try{L.displayName="TimestampInput",L.__docgenInfo={description:"",displayName:"TimestampInput",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"]={docgenInfo:L.__docgenInfo,name:"TimestampInput",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"})}catch{}try{N.displayName="TimestampControl",N.__docgenInfo={description:"TimestampControl component",displayName:"TimestampControl",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"]={docgenInfo:N.__docgenInfo,name:"TimestampControl",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"})}catch{}try{timestampcontrol.displayName="timestampcontrol",timestampcontrol.__docgenInfo={description:"TimestampControl component",displayName:"timestampcontrol",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"]={docgenInfo:timestampcontrol.__docgenInfo,name:"timestampcontrol",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../packages/videopress/src/client/components/timestamp-control/style.module.scss":(y,s,t)=>{"use strict";t.d(s,{A:()=>d});var a=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=t.n(a),h=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=t.n(h),x=o()(e());x.push([y.id,".zuO3RgAd20yV6c0cEjwU{--input-width: 24px;display:flex;align-items:center;gap:8px}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child{margin-bottom:0;flex-grow:2}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-base-control__field,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-base-control__field{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-range-control__wrapper,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-range-control__wrapper{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .components-range-control__marks{top:13px}.xiVP4KSb56I10368tN0v{display:flex;align-items:center;border-color:#949494;background-color:#fff;border-style:solid;justify-content:space-around;border-width:1px;padding:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr{padding:0 1px;margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr input{max-width:var(--input-width)}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field .components-text-control__input{border:none;text-align:center;padding:0}.xiVP4KSb56I10368tN0v .components-input-control:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .components-input-control__input{padding-left:0 !important;padding-right:0 !important;text-align:center}.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-outer-spin-button,.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-inner-spin-button{-webkit-appearance:none}.xiVP4KSb56I10368tN0v .components-input-control__input[type=number]{-webkit-appearance:textfield;appearance:textfield;-moz-appearance:textfield}.xiVP4KSb56I10368tN0v .components-input-control__backdrop{border-style:none !important}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ{background-color:#f0f0f0}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ .PjODCu3uI7wWSXk4MiIH{color:#949494}.PjODCu3uI7wWSXk4MiIH{font-weight:900}",""]),x.locals={"timestamp-control__controls-wrapper":"zuO3RgAd20yV6c0cEjwU","timestamp-range-control":"m7UQ82mfQtaGf0Uxn62H","timestamp-input-wrapper":"xiVP4KSb56I10368tN0v","timestamp-control-input":"J6r6Ls3WNV_CSbuzeLyr","is-disabled":"XtdqGJfT1AOZ9KRjf1TZ","timestamp-control-divider":"PjODCu3uI7wWSXk4MiIH"};const d=x}}]);
