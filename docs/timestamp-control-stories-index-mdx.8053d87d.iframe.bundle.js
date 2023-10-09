"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7875,9796,7946],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js":(O,x,t)=>{t.r(x),t.d(x,{MDXContext:()=>e,MDXProvider:()=>T,useMDXComponents:()=>a,withMDXComponents:()=>f});var d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const e=d.createContext({});function f(c){return l;function l(i){const s=a(i.components);return d.createElement(c,{...i,allComponents:s})}}function a(c){const l=d.useContext(e);return d.useMemo(()=>typeof c=="function"?c(l):{...l,...c},[l,c])}const o={};function T({components:c,children:l,disableParentContext:i}){let s;return i?s=typeof c=="function"?c({}):c||o:s=a(c),d.createElement(e.Provider,{value:s},l)}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":(O,x,t)=>{var d=Object.defineProperty,e=Object.getOwnPropertyDescriptor,f=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,o=(i,s,u,n)=>{if(s&&typeof s=="object"||typeof s=="function")for(let b of f(s))!a.call(i,b)&&b!==u&&d(i,b,{get:()=>s[b],enumerable:!(n=e(s,b))||n.enumerable});return i},T=(i,s,u)=>(o(i,s,"default"),u&&o(u,s,"default")),c=i=>o(d({},"__esModule",{value:!0}),i),l={};O.exports=c(l),T(l,t("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js"),O.exports)},"../../packages/videopress/src/client/components/timestamp-control/stories/index.mdx":(O,x,t)=>{t.r(x),t.d(x,{default:()=>s});var d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),f=t("../../../node_modules/.pnpm/@storybook+addon-docs@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),a=t.n(f),o=t("../../../node_modules/.pnpm/@storybook+blocks@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),T=t("../../packages/videopress/src/client/components/timestamp-control/index.tsx"),c=t("../../packages/videopress/src/client/components/timestamp-control/stories/index.stories.tsx");function l(u){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,f.useMDXComponents)(),u.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.h_,{of:c}),`
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
`,(0,e.jsx)(o.Xz,{children:(0,e.jsx)(o.oG,{id:"packages-videopress-timestamp-control--changing-value-externally"})})]})}function i(u={}){const{wrapper:n}=Object.assign({},(0,f.useMDXComponents)(),u.components);return n?(0,e.jsx)(n,Object.assign({},u,{children:(0,e.jsx)(l,u)})):l(u)}const s=i},"../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/hooks.js":(O,x,t)=>{t.d(x,{u:()=>f});var d=t("../../../node_modules/.pnpm/@wordpress+compose@6.20.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),e=t("../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js");function f(a){const{help:o,id:T,...c}=a,l=(0,d.Z)(e.ZP,"wp-components-base-control",T),i=typeof o=="string"?"aria-describedby":"aria-details";return{baseControlProps:{id:l,help:o,...c},controlProps:{id:l,...o?{[i]:`${l}__help`}:{}}}}},"../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/text-control/index.js":(O,x,t)=>{t.d(x,{Z:()=>T});var d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/@wordpress+compose@6.20.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),f=t("../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js");function a(c,l){const{__nextHasNoMarginBottom:i,label:s,hideLabelFromVision:u,value:n,help:b,id:w,className:F,onChange:y,type:h="text",...N}=c,M=(0,e.Z)(o,"inspector-text-control",w),V=R=>y(R.target.value);return(0,d.createElement)(f.ZP,{__nextHasNoMarginBottom:i,label:s,hideLabelFromVision:u,id:M,help:b,className:F},(0,d.createElement)("input",{className:"components-text-control__input",type:h,id:M,value:n,onChange:V,"aria-describedby":b?M+"__help":void 0,ref:l,...N}))}const o=(0,d.forwardRef)(a),T=o},"../../../node_modules/.pnpm/@wordpress+compose@6.20.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js":(O,x,t)=>{t.d(x,{Z:()=>f});var d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function e(a,o){typeof a=="function"?a(o):a&&a.hasOwnProperty("current")&&(a.current=o)}function f(a){const o=(0,d.useRef)(),T=(0,d.useRef)(!1),c=(0,d.useRef)(!1),l=(0,d.useRef)([]),i=(0,d.useRef)(a);return i.current=a,(0,d.useLayoutEffect)(()=>{c.current===!1&&T.current===!0&&a.forEach((s,u)=>{const n=l.current[u];s!==n&&(e(n,null),e(s,o.current))}),l.current=a},a),(0,d.useLayoutEffect)(()=>{c.current=!1}),(0,d.useCallback)(s=>{e(o,s),c.current=!0,T.current=s!==null;const u=s?i.current:l.current;for(const n of u)e(n,s)},[])}},"../../packages/videopress/src/client/components/timestamp-control/stories/index.stories.tsx":(O,x,t)=>{var N,M,V,R,W,H,X,Z,L,K,k,A,z,r,p,m,_,g,P,v,j;t.r(x),t.d(x,{__namedExportsOrder:()=>h,_default:()=>i,changingValueExternally:()=>y,customTooltip:()=>w,decimalPlaces:()=>s,default:()=>c,disabled:()=>u,showTooltip:()=>b,withMarks:()=>n});var d=t("../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/range-control/index.js"),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=t("../../packages/videopress/src/client/components/timestamp-control/index.tsx"),a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=`import { RangeControl } from '@wordpress/components';
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
`,T={_default:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},decimalPlaces:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},disabled:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},withMarks:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},showTooltip:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},customTooltip:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},changingValueExternally:{startLoc:{col:71,line:86},endLoc:{col:1,line:93},startBody:{col:71,line:86},endBody:{col:1,line:93}}};const c={parameters:{storySource:{source:`import { RangeControl } from '@wordpress/components';
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
};`,locationsMap:{default:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"decimal-places":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},disabled:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"with-marks":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"show-tooltip":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"custom-tooltip":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"changing-value-externally":{startLoc:{col:71,line:86},endLoc:{col:1,line:93},startBody:{col:71,line:86},endBody:{col:1,line:93}}}}},title:"Packages/VideoPress/Timestamp Control",component:f.ZP},l=C=>(0,a.jsx)(f.ZP,{...C});l.displayName="Template";const i=l.bind({});i.args={label:"Video frame",help:"Use the control to set timestamp of the video frame.",max:3600*1e3*2,value:236*1e3+125,wait:100,decimalPlaces:void 0,fineAdjustment:50,disabled:!1,autoHideTimeInput:!0,onChange:C=>{console.log({newTime:C})},onDebounceChange:C=>{console.log({newDebouncedTime:C})}},i.storyName="Timestamp Control";const s=l.bind({});s.args={value:3500,max:1e3*5,decimalPlaces:2};const u=l.bind({});u.args={max:3600*1e3*2,value:3600*1e3+15*60*1e3+43*1e3,disabled:!0};const n=l.bind({});n.args={value:3500,max:1e3*10,marksEvery:1e3,fineAdjustment:200};const b=l.bind({});b.args={value:8e4,max:1e3*100,renderTooltip:!0};const w=l.bind({});w.args={value:1e3*50,max:1e3*80,fineAdjustment:200,renderTooltip:C=>(0,a.jsxs)("span",{children:[C/1e3," seconds"]})};const y=(C=>{const[B,I]=(0,e.useState)(C.value);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.ZP,{...C,label:"TimestampControl component",help:"The value is handled internally by the component.",value:B,onDebounceChange:I}),(0,a.jsx)("br",{}),(0,a.jsx)(d.Z,{label:"RangeControl component",help:"The value is handled externally, and passed to the <TimestampControl /> above component.",value:B,onChange:I,max:C.max})]})}).bind({});y.args={value:3500,max:1e3*5,decimalPlaces:2,wait:100},i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(V=(M=i.parameters)==null?void 0:M.docs)==null?void 0:V.source}}},s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(H=(W=s.parameters)==null?void 0:W.docs)==null?void 0:H.source}}},u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(L=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:L.source}}},n.parameters={...n.parameters,docs:{...(K=n.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(A=(k=n.parameters)==null?void 0:k.docs)==null?void 0:A.source}}},b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(p=(r=b.parameters)==null?void 0:r.docs)==null?void 0:p.source}}},w.parameters={...w.parameters,docs:{...(m=w.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(g=(_=w.parameters)==null?void 0:_.docs)==null?void 0:g.source}}},y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <>
            <TimestampControl {...args} label="TimestampControl component" help="The value is handled internally by the component." value={value} onDebounceChange={setValue} />
            <br />
            <RangeControl label="RangeControl component" help="The value is handled externally, and passed to the <TimestampControl /> above component." value={value} onChange={setValue} max={args.max} />
        </>;
}`,...(j=(v=y.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const h=["_default","decimalPlaces","disabled","withMarks","showTooltip","customTooltip","changingValueExternally"]},"../../packages/videopress/src/client/components/timestamp-control/index.tsx":(O,x,t)=>{t.d(x,{ZP:()=>z});var d=t("../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js"),e=t("../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/hooks.js"),f=t("../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/number-control/index.js"),a=t("../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/text-control/index.js"),o=t("../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/range-control/index.js"),T=t("../../../node_modules/.pnpm/@wordpress+compose@6.20.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),c=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),i=t.n(l);function s(r){const p=Math.floor(r/36e5),m=Math.floor(r/6e4)%60,_=Math.floor(r/1e3)%60,g=Math.floor(r/10)%100;return[p>0?p.toString().padStart(2,"0")+":":"",p>0||m>0?m.toString().padStart(2,"0")+":":"",_.toString().padStart(2,"0"),"."+g.toString().padStart(2,"0")].join("")}var u=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=t.n(u),b=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/timestamp-control/style.module.scss"),w={};w.insert="head",w.singleton=!1;var F=n()(b.Z,w);const y=b.Z.locals||{};var h=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function N(r){const{help:p,id:m,..._}=r,g=(0,T.Z)(d.ZP,"wp-components-base-control",m),P=typeof p=="string"?"aria-describedby":"aria-details";return{baseControlProps:{id:g,help:p,..._},controlProps:{id:g,...p?{[P]:`${g}__help`}:{}}}}const M=e.u||N,V=r=>{if(f.Z)return(0,h.jsx)(f.Z,{...r});const p={...r};return["spinControls","isPressEnterToChange","isDragEnabled","isShiftStepEnabled","__unstableStateReducer"].forEach(m=>delete p[m]),(0,h.jsx)(a.Z,{...p})};V.displayName="NumberControl";const R=r=>{let{char:p=":"}=r;return(0,h.jsx)("span",{className:y["timestamp-control-divider"],children:p})};R.displayName="TimeDivider";const W="CHANGE",H="COMMIT",X="PRESS_DOWN",Z="PRESS_UP",L=r=>(p,m)=>{const _={...p};return(m.type===H||m.type===Z||m.type===X||m.type===W)&&_.value!==void 0&&(_.value=_.value.toString().padStart(r,"0")),_};function K(r,p,m){r>m&&(r=m);const _=Number.isNaN(r),g=_||typeof p=="undefined"?0:Math.floor(r%1e3/+`1e${3-p}`);return{hh:_?0:Math.floor(r/(1e3*60*60)%24),mm:_?0:Math.floor(r/(1e3*60)%60),ss:_?0:Math.floor(r/1e3%60),decimal:g}}const k=r=>{let{onChange:p,disabled:m,value:_,max:g,autoHideTimeInput:P=!0,decimalPlaces:v}=r;const j={value:K(_,v,g)},C=g>60*60*1e3,B=g>60*1e3,I=D=>E=>{if(typeof E=="string"&&!isNaN(parseInt(E,10))&&(E=parseInt(E,10)),D==="hh"&&E>99||(D==="mm"||D==="ss")&&E>59||D==="decimal"&&E>+`1e${v}`-1||typeof E=="string")return;j.value={...K(_,v,g),[D]:E};const U=j.value.decimal?j.value.decimal*+`1e${3-v}`:0;p==null||p((j.value.hh*3600+j.value.mm*60+j.value.ss)*1e3+U)};return(0,h.jsxs)("div",{className:i()(y["timestamp-input-wrapper"],{[y["is-disabled"]]:m}),children:[(C||!P)&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(V,{className:y["timestamp-control-input"],disabled:m,min:0,max:99,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:L(2),value:String(j.value.hh).padStart(2,"0"),onChange:I("hh")}),(0,h.jsx)(R,{})]}),(B||!P)&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(V,{className:y["timestamp-control-input"],disabled:m,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:L(2),value:String(j.value.mm).padStart(2,"0"),onChange:I("mm")}),(0,h.jsx)(R,{})]}),(0,h.jsx)(V,{className:y["timestamp-control-input"],disabled:m,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:L(2),value:String(j.value.ss).padStart(2,"0"),onChange:I("ss")}),v&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(R,{char:"."}),(0,h.jsx)(V,{className:y["timestamp-control-input"],style:{"--input-width":`${12*v}px`},disabled:m,min:0,max:Number("9".repeat(v)),step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"0".repeat(v),isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:L(v),value:String(j.value.decimal).padStart(v,"0"),onChange:I("decimal")})]})]})};k.displayName="TimestampInput";const A=r=>{const{disabled:p=!1,min:m=0,max:_=Number.MAX_SAFE_INTEGER,value:g,onChange:P,onDebounceChange:v,wait:j=1e3,fineAdjustment:C=50,autoHideTimeInput:B=!0,decimalPlaces:I,marksEvery:D,renderTooltip:E}=r,U=(0,c.useRef)(),[G,Q]=(0,c.useState)(g);(0,c.useEffect)(()=>{Q(g)},[g]);const{baseControlProps:$}=(M==null?void 0:M(r))||{},J=(0,c.useCallback)(S=>{clearTimeout(U==null?void 0:U.current),S>_&&(S=_),S<m&&(S=m),Q(S),P==null||P(S),U.current=setTimeout(v==null?void 0:v.bind(null,S),j)},[v,P,_,m,j]),Y=[];if(D)for(let S=m;S<=_;S+=D)Y.push({value:S,label:null});const q=typeof E=="function"?E:S=>s(S);return(0,h.jsx)(d.ZP,{...$,children:(0,h.jsxs)("div",{className:y["timestamp-control__controls-wrapper"],children:[V&&(0,h.jsx)(k,{disabled:p,max:_,value:G,onChange:J,autoHideTimeInput:B,decimalPlaces:I}),(0,h.jsx)(o.Z,{disabled:p,className:y["timestamp-range-control"],min:m,step:C,initialPosition:G,value:G,max:_,withInputField:!1,onChange:J,marks:D?Y:void 0,renderTooltipContent:q,...E===!1?{showTooltip:!1}:{}})]})})};A.displayName="TimestampControl";const z=A;try{k.displayName="TimestampInput",k.__docgenInfo={description:"",displayName:"TimestampInput",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"]={docgenInfo:k.__docgenInfo,name:"TimestampInput",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"})}catch(r){}try{A.displayName="TimestampControl",A.__docgenInfo={description:"TimestampControl component",displayName:"TimestampControl",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"]={docgenInfo:A.__docgenInfo,name:"TimestampControl",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"})}catch(r){}try{timestampcontrol.displayName="timestampcontrol",timestampcontrol.__docgenInfo={description:"TimestampControl component",displayName:"timestampcontrol",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"]={docgenInfo:timestampcontrol.__docgenInfo,name:"timestampcontrol",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"})}catch(r){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/timestamp-control/style.module.scss":(O,x,t)=>{t.d(x,{Z:()=>T});var d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=t.n(d),f=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=t.n(f),o=a()(e());o.push([O.id,".zuO3RgAd20yV6c0cEjwU{--input-width: 24px;display:flex;align-items:center;gap:8px}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child{margin-bottom:0;flex-grow:2}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-base-control__field,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-base-control__field{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-range-control__wrapper,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-range-control__wrapper{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .components-range-control__marks{top:13px}.xiVP4KSb56I10368tN0v{display:flex;align-items:center;border-color:#949494;background-color:#fff;border-style:solid;justify-content:space-around;border-width:1px;padding:0px}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr{padding:0 1px;margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr input{max-width:var(--input-width)}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field .components-text-control__input{border:none;text-align:center;padding:0}.xiVP4KSb56I10368tN0v .components-input-control:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .components-input-control__input{padding-left:0 !important;padding-right:0 !important;text-align:center}.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-outer-spin-button,.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-inner-spin-button{-webkit-appearance:none}.xiVP4KSb56I10368tN0v .components-input-control__input[type=number]{-webkit-appearance:textfield;appearance:textfield;-moz-appearance:textfield}.xiVP4KSb56I10368tN0v .components-input-control__backdrop{border-style:none !important}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ{background-color:#f0f0f0}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ .PjODCu3uI7wWSXk4MiIH{color:#949494}.PjODCu3uI7wWSXk4MiIH{font-weight:900}",""]),o.locals={"timestamp-control__controls-wrapper":"zuO3RgAd20yV6c0cEjwU","timestamp-range-control":"m7UQ82mfQtaGf0Uxn62H","timestamp-input-wrapper":"xiVP4KSb56I10368tN0v","timestamp-control-input":"J6r6Ls3WNV_CSbuzeLyr","is-disabled":"XtdqGJfT1AOZ9KRjf1TZ","timestamp-control-divider":"PjODCu3uI7wWSXk4MiIH"};const T=o}}]);})();
