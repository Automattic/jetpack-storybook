(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7875,9796,7946],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js":(V,y,t)=>{"use strict";t.r(y),t.d(y,{MDXContext:()=>e,MDXProvider:()=>C,useMDXComponents:()=>u,withMDXComponents:()=>x});var h=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const e=h.createContext({});function x(c){return a;function a(r){const d=u(r.components);return h.createElement(c,{...r,allComponents:d})}}function u(c){const a=h.useContext(e);return h.useMemo(()=>typeof c=="function"?c(a):{...a,...c},[a,c])}const o={};function C({components:c,children:a,disableParentContext:r}){let d;return r?d=typeof c=="function"?c({}):c||o:d=u(c),h.createElement(e.Provider,{value:d},a)}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":(V,y,t)=>{var h=Object.defineProperty,e=Object.getOwnPropertyDescriptor,x=Object.getOwnPropertyNames,u=Object.prototype.hasOwnProperty,o=(r,d,_,n)=>{if(d&&typeof d=="object"||typeof d=="function")for(let v of x(d))!u.call(r,v)&&v!==_&&h(r,v,{get:()=>d[v],enumerable:!(n=e(d,v))||n.enumerable});return r},C=(r,d,_)=>(o(r,d,"default"),_&&o(_,d,"default")),c=r=>o(h({},"__esModule",{value:!0}),r),a={};V.exports=c(a),C(a,t("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js"),V.exports)},"../../packages/videopress/src/client/components/timestamp-control/stories/index.mdx":(V,y,t)=>{"use strict";t.r(y),t.d(y,{default:()=>d});var h=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=t("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),u=t.n(x),o=t("../../../node_modules/.pnpm/@storybook+blocks@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),C=t("../../packages/videopress/src/client/components/timestamp-control/index.tsx"),c=t("../../packages/videopress/src/client/components/timestamp-control/stories/index.stories.tsx");function a(_){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,x.useMDXComponents)(),_.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.h_,{of:c}),`
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
`,(0,e.jsx)(o.Xz,{children:(0,e.jsx)(o.oG,{id:"packages-videopress-timestamp-control--changing-value-externally"})})]})}function r(_={}){const{wrapper:n}=Object.assign({},(0,x.useMDXComponents)(),_.components);return n?(0,e.jsx)(n,Object.assign({},_,{children:(0,e.jsx)(a,_)})):a(_)}const d=r},"../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/hooks.js":(V,y,t)=>{"use strict";t.d(y,{u:()=>x});var h=t("../../../node_modules/.pnpm/@wordpress+compose@6.12.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),e=t("../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js");function x(u){const{help:o,id:C,...c}=u,a=(0,h.Z)(e.ZP,"wp-components-base-control",C),r=typeof o=="string"?"aria-describedby":"aria-details";return{baseControlProps:{id:a,help:o,...c},controlProps:{id:a,...o?{[r]:`${a}__help`}:{}}}}},"../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/text-control/index.js":(V,y,t)=>{"use strict";t.d(y,{Z:()=>c});var h=t("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/extends.js"),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),x=t("../../../node_modules/.pnpm/@wordpress+compose@6.12.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),u=t("../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js");function o(a,r){const{__nextHasNoMarginBottom:d,label:_,hideLabelFromVision:n,value:v,help:P,className:F,onChange:b,type:p="text",...N}=a,E=`inspector-text-control-${(0,x.Z)(C)}`,M=B=>b(B.target.value);return(0,e.createElement)(u.ZP,{__nextHasNoMarginBottom:d,label:_,hideLabelFromVision:n,id:E,help:P,className:F},(0,e.createElement)("input",(0,h.Z)({className:"components-text-control__input",type:p,id:E,value:v,onChange:M,"aria-describedby":P?E+"__help":void 0,ref:r},N)))}const C=(0,e.forwardRef)(o),c=C},"../../packages/videopress/src/client/components/timestamp-control/stories/index.stories.tsx":(V,y,t)=>{var N,A,E,M,B,H,X,Z,L,W,R,k,z,s,i,l,m,g,S,f,T;"use strict";t.r(y),t.d(y,{__namedExportsOrder:()=>p,_default:()=>r,changingValueExternally:()=>b,customTooltip:()=>P,decimalPlaces:()=>d,default:()=>c,disabled:()=>_,showTooltip:()=>v,withMarks:()=>n});var h=t("../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/range-control/index.js"),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),x=t("../../packages/videopress/src/client/components/timestamp-control/index.tsx"),u=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=`import { RangeControl } from '@wordpress/components';
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
`,C={_default:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},decimalPlaces:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},disabled:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},withMarks:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},showTooltip:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},customTooltip:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},changingValueExternally:{startLoc:{col:71,line:86},endLoc:{col:1,line:93},startBody:{col:71,line:86},endBody:{col:1,line:93}}};const c={parameters:{storySource:{source:`import { RangeControl } from '@wordpress/components';
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
};`,locationsMap:{default:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"decimal-places":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},disabled:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"with-marks":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"show-tooltip":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"custom-tooltip":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"changing-value-externally":{startLoc:{col:71,line:86},endLoc:{col:1,line:93},startBody:{col:71,line:86},endBody:{col:1,line:93}}}}},title:"Packages/VideoPress/Timestamp Control",component:x.ZP},a=j=>(0,u.jsx)(x.ZP,{...j});a.displayName="Template";const r=a.bind({});r.args={label:"Video frame",help:"Use the control to set timestamp of the video frame.",max:3600*1e3*2,value:236*1e3+125,wait:100,decimalPlaces:void 0,fineAdjustment:50,disabled:!1,autoHideTimeInput:!0,onChange:j=>{console.log({newTime:j})},onDebounceChange:j=>{console.log({newDebouncedTime:j})}},r.storyName="Timestamp Control";const d=a.bind({});d.args={value:3500,max:1e3*5,decimalPlaces:2};const _=a.bind({});_.args={max:3600*1e3*2,value:3600*1e3+15*60*1e3+43*1e3,disabled:!0};const n=a.bind({});n.args={value:3500,max:1e3*10,marksEvery:1e3,fineAdjustment:200};const v=a.bind({});v.args={value:8e4,max:1e3*100,renderTooltip:!0};const P=a.bind({});P.args={value:1e3*50,max:1e3*80,fineAdjustment:200,renderTooltip:j=>(0,u.jsxs)("span",{children:[j/1e3," seconds"]})};const b=(j=>{const[U,I]=(0,e.useState)(j.value);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(x.ZP,{...j,label:"TimestampControl component",help:"The value is handled internally by the component.",value:U,onDebounceChange:I}),(0,u.jsx)("br",{}),(0,u.jsx)(h.Z,{label:"RangeControl component",help:"The value is handled externally, and passed to the <TimestampControl /> above component.",value:U,onChange:I,max:j.max})]})}).bind({});b.args={value:3500,max:1e3*5,decimalPlaces:2,wait:100},r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(E=(A=r.parameters)==null?void 0:A.docs)==null?void 0:E.source}}},d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(H=(B=d.parameters)==null?void 0:B.docs)==null?void 0:H.source}}},_.parameters={..._.parameters,docs:{...(X=_.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(L=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:L.source}}},n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(k=(R=n.parameters)==null?void 0:R.docs)==null?void 0:k.source}}},v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(i=(s=v.parameters)==null?void 0:s.docs)==null?void 0:i.source}}},P.parameters={...P.parameters,docs:{...(l=P.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(g=(m=P.parameters)==null?void 0:m.docs)==null?void 0:g.source}}},b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <>
            <TimestampControl {...args} label="TimestampControl component" help="The value is handled internally by the component." value={value} onDebounceChange={setValue} />
            <br />
            <RangeControl label="RangeControl component" help="The value is handled externally, and passed to the <TimestampControl /> above component." value={value} onChange={setValue} max={args.max} />
        </>;
}`,...(T=(f=b.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const p=["_default","decimalPlaces","disabled","withMarks","showTooltip","customTooltip","changingValueExternally"]},"../../packages/videopress/src/client/components/timestamp-control/index.tsx":(V,y,t)=>{"use strict";t.d(y,{ZP:()=>z});var h=t("../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js"),e=t("../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/hooks.js"),x=t("../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/number-control/index.js"),u=t("../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/text-control/index.js"),o=t("../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/range-control/index.js"),C=t("../../../node_modules/.pnpm/@wordpress+compose@6.12.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),c=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=t.n(a);function d(s){const i=Math.floor(s/36e5),l=Math.floor(s/6e4)%60,m=Math.floor(s/1e3)%60,g=Math.floor(s/10)%100;return[i>0?i.toString().padStart(2,"0")+":":"",i>0||l>0?l.toString().padStart(2,"0")+":":"",m.toString().padStart(2,"0"),"."+g.toString().padStart(2,"0")].join("")}var _=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=t.n(_),v=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/timestamp-control/style.module.scss"),P={};P.insert="head",P.singleton=!1;var F=n()(v.Z,P);const b=v.Z.locals||{};var p=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function N(s){const{help:i,id:l,...m}=s,g=(0,C.Z)(h.ZP,"wp-components-base-control",l),S=typeof i=="string"?"aria-describedby":"aria-details";return{baseControlProps:{id:g,help:i,...m},controlProps:{id:g,...i?{[S]:`${g}__help`}:{}}}}const A=e.u||N,E=s=>{if(x.Z)return(0,p.jsx)(x.Z,{...s});const i={...s};return["spinControls","isPressEnterToChange","isDragEnabled","isShiftStepEnabled","__unstableStateReducer"].forEach(l=>delete i[l]),(0,p.jsx)(u.Z,{...i})};E.displayName="NumberControl";const M=s=>{let{char:i=":"}=s;return(0,p.jsx)("span",{className:b["timestamp-control-divider"],children:i})};M.displayName="TimeDivider";const B="CHANGE",H="COMMIT",X="PRESS_DOWN",Z="PRESS_UP",L=s=>(i,l)=>{const m={...i};return(l.type===H||l.type===Z||l.type===X||l.type===B)&&m.value!==void 0&&(m.value=m.value.toString().padStart(s,"0")),m};function W(s,i,l){s>l&&(s=l);const m=Number.isNaN(s),g=m||typeof i=="undefined"?0:Math.floor(s%1e3/+`1e${3-i}`);return{hh:m?0:Math.floor(s/(1e3*60*60)%24),mm:m?0:Math.floor(s/(1e3*60)%60),ss:m?0:Math.floor(s/1e3%60),decimal:g}}const R=s=>{let{onChange:i,disabled:l,value:m,max:g,autoHideTimeInput:S=!0,decimalPlaces:f}=s;const T={value:W(m,f,g)},j=g>60*60*1e3,U=g>60*1e3,I=D=>w=>{if(typeof w=="string"&&!isNaN(parseInt(w,10))&&(w=parseInt(w,10)),D==="hh"&&w>99||(D==="mm"||D==="ss")&&w>59||D==="decimal"&&w>+`1e${f}`-1||typeof w=="string")return;T.value={...W(m,f,g),[D]:w};const K=T.value.decimal?T.value.decimal*+`1e${3-f}`:0;i==null||i((T.value.hh*3600+T.value.mm*60+T.value.ss)*1e3+K)};return(0,p.jsxs)("div",{className:r()(b["timestamp-input-wrapper"],{[b["is-disabled"]]:l}),children:[(j||!S)&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(E,{className:b["timestamp-control-input"],disabled:l,min:0,max:99,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:L(2),value:String(T.value.hh).padStart(2,"0"),onChange:I("hh")}),(0,p.jsx)(M,{})]}),(U||!S)&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(E,{className:b["timestamp-control-input"],disabled:l,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:L(2),value:String(T.value.mm).padStart(2,"0"),onChange:I("mm")}),(0,p.jsx)(M,{})]}),(0,p.jsx)(E,{className:b["timestamp-control-input"],disabled:l,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:L(2),value:String(T.value.ss).padStart(2,"0"),onChange:I("ss")}),f&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(M,{char:"."}),(0,p.jsx)(E,{className:b["timestamp-control-input"],style:{"--input-width":`${12*f}px`},disabled:l,min:0,max:Number("9".repeat(f)),step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"0".repeat(f),isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:L(f),value:String(T.value.decimal).padStart(f,"0"),onChange:I("decimal")})]})]})};R.displayName="TimestampInput";const k=s=>{const{disabled:i=!1,min:l=0,max:m=Number.MAX_SAFE_INTEGER,value:g,onChange:S,onDebounceChange:f,wait:T=1e3,fineAdjustment:j=50,autoHideTimeInput:U=!0,decimalPlaces:I,marksEvery:D,renderTooltip:w}=s,K=(0,c.useRef)(),[G,Q]=(0,c.useState)(g);(0,c.useEffect)(()=>{Q(g)},[g]);const{baseControlProps:$}=(A==null?void 0:A(s))||{},J=(0,c.useCallback)(O=>{clearTimeout(K==null?void 0:K.current),O>m&&(O=m),O<l&&(O=l),Q(O),S==null||S(O),K.current=setTimeout(f==null?void 0:f.bind(null,O),T)},[f,S,m,l,T]),Y=[];if(D)for(let O=l;O<=m;O+=D)Y.push({value:O,label:null});const q=typeof w=="function"?w:O=>d(O);return(0,p.jsx)(h.ZP,{...$,children:(0,p.jsxs)("div",{className:b["timestamp-control__controls-wrapper"],children:[E&&(0,p.jsx)(R,{disabled:i,max:m,value:G,onChange:J,autoHideTimeInput:U,decimalPlaces:I}),(0,p.jsx)(o.Z,{disabled:i,className:b["timestamp-range-control"],min:l,step:j,initialPosition:G,value:G,max:m,withInputField:!1,onChange:J,marks:D?Y:void 0,renderTooltipContent:q,...w===!1?{showTooltip:!1}:{}})]})})};k.displayName="TimestampControl";const z=k;try{R.displayName="TimestampInput",R.__docgenInfo={description:"",displayName:"TimestampInput",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"]={docgenInfo:R.__docgenInfo,name:"TimestampInput",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"})}catch(s){}try{k.displayName="TimestampControl",k.__docgenInfo={description:"TimestampControl component",displayName:"TimestampControl",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"]={docgenInfo:k.__docgenInfo,name:"TimestampControl",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"})}catch(s){}try{timestampcontrol.displayName="timestampcontrol",timestampcontrol.__docgenInfo={description:"TimestampControl component",displayName:"timestampcontrol",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"]={docgenInfo:timestampcontrol.__docgenInfo,name:"timestampcontrol",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"})}catch(s){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/timestamp-control/style.module.scss":(V,y,t)=>{"use strict";t.d(y,{Z:()=>C});var h=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=t.n(h),x=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),u=t.n(x),o=u()(e());o.push([V.id,".zuO3RgAd20yV6c0cEjwU{--input-width: 24px;display:flex;align-items:center;gap:8px}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child{margin-bottom:0;flex-grow:2}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-base-control__field,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-base-control__field{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-range-control__wrapper,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-range-control__wrapper{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .components-range-control__marks{top:13px}.xiVP4KSb56I10368tN0v{display:flex;align-items:center;border-color:#949494;background-color:#fff;border-style:solid;justify-content:space-around;border-width:1px;padding:0px}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr{padding:0 1px;margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr input{max-width:var(--input-width)}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field .components-text-control__input{border:none;text-align:center;padding:0}.xiVP4KSb56I10368tN0v .components-input-control:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .components-input-control__input{padding-left:0 !important;padding-right:0 !important;text-align:center}.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-outer-spin-button,.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-inner-spin-button{-webkit-appearance:none}.xiVP4KSb56I10368tN0v .components-input-control__input[type=number]{-webkit-appearance:textfield;appearance:textfield;-moz-appearance:textfield}.xiVP4KSb56I10368tN0v .components-input-control__backdrop{border-style:none !important}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ{background-color:#f0f0f0}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ .PjODCu3uI7wWSXk4MiIH{color:#949494}.PjODCu3uI7wWSXk4MiIH{font-weight:900}",""]),o.locals={"timestamp-control__controls-wrapper":"zuO3RgAd20yV6c0cEjwU","timestamp-range-control":"m7UQ82mfQtaGf0Uxn62H","timestamp-input-wrapper":"xiVP4KSb56I10368tN0v","timestamp-control-input":"J6r6Ls3WNV_CSbuzeLyr","is-disabled":"XtdqGJfT1AOZ9KRjf1TZ","timestamp-control-divider":"PjODCu3uI7wWSXk4MiIH"};const C=o}}]);})();
