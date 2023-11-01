"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9796],{"../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/hooks.js":(D,E,e)=>{e.d(E,{u:()=>T});var l=e("../../../node_modules/.pnpm/@wordpress+compose@6.21.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js");function T(o){const{help:d,id:V,...y}=o,i=(0,l.Z)(h.ZP,"wp-components-base-control",V),_=typeof d=="string"?"aria-describedby":"aria-details";return{baseControlProps:{id:i,help:d,...y},controlProps:{id:i,...d?{[_]:`${i}__help`}:{}}}}},"../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/text-control/index.js":(D,E,e)=>{e.d(E,{Z:()=>V});var l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+compose@6.21.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),T=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js");function o(y,i){const{__nextHasNoMarginBottom:_,label:c,hideLabelFromVision:v,value:g,help:P,id:j,className:Q,onChange:p,type:r="text",...k}=y,R=(0,h.Z)(d,"inspector-text-control",j),w=I=>p(I.target.value);return(0,l.createElement)(T.ZP,{__nextHasNoMarginBottom:_,label:c,hideLabelFromVision:v,id:R,help:P,className:Q},(0,l.createElement)("input",{className:"components-text-control__input",type:r,id:R,value:g,onChange:w,"aria-describedby":P?R+"__help":void 0,ref:i,...k}))}const d=(0,l.forwardRef)(o),V=d},"../../../node_modules/.pnpm/@wordpress+compose@6.21.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js":(D,E,e)=>{e.d(E,{Z:()=>T});var l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function h(o,d){typeof o=="function"?o(d):o&&o.hasOwnProperty("current")&&(o.current=d)}function T(o){const d=(0,l.useRef)(),V=(0,l.useRef)(!1),y=(0,l.useRef)(!1),i=(0,l.useRef)([]),_=(0,l.useRef)(o);return _.current=o,(0,l.useLayoutEffect)(()=>{y.current===!1&&V.current===!0&&o.forEach((c,v)=>{const g=i.current[v];c!==g&&(h(g,null),h(c,d.current))}),i.current=o},o),(0,l.useLayoutEffect)(()=>{y.current=!1}),(0,l.useCallback)(c=>{h(d,c),y.current=!0,V.current=c!==null;const v=c?_.current:i.current;for(const g of v)h(g,c)},[])}},"../../packages/videopress/src/client/components/timestamp-control/stories/index.stories.tsx":(D,E,e)=>{var k,R,w,I,H,W,Z,z,M,K,L,A,F,n,a,t,s,m,x,u,f;e.r(E),e.d(E,{__namedExportsOrder:()=>r,_default:()=>_,changingValueExternally:()=>p,customTooltip:()=>j,decimalPlaces:()=>c,default:()=>y,disabled:()=>v,showTooltip:()=>P,withMarks:()=>g});var l=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/range-control/index.js"),h=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),T=e("../../packages/videopress/src/client/components/timestamp-control/index.tsx"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=`import { RangeControl } from '@wordpress/components';
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
`,V={_default:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},decimalPlaces:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},disabled:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},withMarks:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},showTooltip:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},customTooltip:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},changingValueExternally:{startLoc:{col:71,line:86},endLoc:{col:1,line:93},startBody:{col:71,line:86},endBody:{col:1,line:93}}};const y={parameters:{storySource:{source:`import { RangeControl } from '@wordpress/components';
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
};`,locationsMap:{default:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"decimal-places":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},disabled:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"with-marks":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"show-tooltip":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"custom-tooltip":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"changing-value-externally":{startLoc:{col:71,line:86},endLoc:{col:1,line:93},startBody:{col:71,line:86},endBody:{col:1,line:93}}}}},title:"Packages/VideoPress/Timestamp Control",component:T.ZP},i=b=>(0,o.jsx)(T.ZP,{...b});i.displayName="Template";const _=i.bind({});_.args={label:"Video frame",help:"Use the control to set timestamp of the video frame.",max:3600*1e3*2,value:236*1e3+125,wait:100,decimalPlaces:void 0,fineAdjustment:50,disabled:!1,autoHideTimeInput:!0,onChange:b=>{console.log({newTime:b})},onDebounceChange:b=>{console.log({newDebouncedTime:b})}},_.storyName="Timestamp Control";const c=i.bind({});c.args={value:3500,max:1e3*5,decimalPlaces:2};const v=i.bind({});v.args={max:3600*1e3*2,value:3600*1e3+15*60*1e3+43*1e3,disabled:!0};const g=i.bind({});g.args={value:3500,max:1e3*10,marksEvery:1e3,fineAdjustment:200};const P=i.bind({});P.args={value:8e4,max:1e3*100,renderTooltip:!0};const j=i.bind({});j.args={value:1e3*50,max:1e3*80,fineAdjustment:200,renderTooltip:b=>(0,o.jsxs)("span",{children:[b/1e3," seconds"]})};const p=(b=>{const[B,O]=(0,h.useState)(b.value);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(T.ZP,{...b,label:"TimestampControl component",help:"The value is handled internally by the component.",value:B,onDebounceChange:O}),(0,o.jsx)("br",{}),(0,o.jsx)(l.Z,{label:"RangeControl component",help:"The value is handled externally, and passed to the <TimestampControl /> above component.",value:B,onChange:O,max:b.max})]})}).bind({});p.args={value:3500,max:1e3*5,decimalPlaces:2,wait:100},_.parameters={..._.parameters,docs:{...(k=_.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(w=(R=_.parameters)==null?void 0:R.docs)==null?void 0:w.source}}},c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(W=(H=c.parameters)==null?void 0:H.docs)==null?void 0:W.source}}},v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(M=(z=v.parameters)==null?void 0:z.docs)==null?void 0:M.source}}},g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(A=(L=g.parameters)==null?void 0:L.docs)==null?void 0:A.source}}},P.parameters={...P.parameters,docs:{...(F=P.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(a=(n=P.parameters)==null?void 0:n.docs)==null?void 0:a.source}}},j.parameters={...j.parameters,docs:{...(t=j.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(m=(s=j.parameters)==null?void 0:s.docs)==null?void 0:m.source}}},p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <>
            <TimestampControl {...args} label="TimestampControl component" help="The value is handled internally by the component." value={value} onDebounceChange={setValue} />
            <br />
            <RangeControl label="RangeControl component" help="The value is handled externally, and passed to the <TimestampControl /> above component." value={value} onChange={setValue} max={args.max} />
        </>;
}`,...(f=(u=p.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const r=["_default","decimalPlaces","disabled","withMarks","showTooltip","customTooltip","changingValueExternally"]},"../../packages/videopress/src/client/components/timestamp-control/index.tsx":(D,E,e)=>{e.d(E,{ZP:()=>F});var l=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/hooks.js"),T=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/number-control/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/text-control/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/range-control/index.js"),V=e("../../../node_modules/.pnpm/@wordpress+compose@6.21.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),y=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),_=e.n(i);function c(n){const a=Math.floor(n/36e5),t=Math.floor(n/6e4)%60,s=Math.floor(n/1e3)%60,m=Math.floor(n/10)%100;return[a>0?a.toString().padStart(2,"0")+":":"",a>0||t>0?t.toString().padStart(2,"0")+":":"",s.toString().padStart(2,"0"),"."+m.toString().padStart(2,"0")].join("")}var v=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(v),P=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/timestamp-control/style.module.scss"),j={};j.insert="head",j.singleton=!1;var Q=g()(P.Z,j);const p=P.Z.locals||{};var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function k(n){const{help:a,id:t,...s}=n,m=(0,V.Z)(l.ZP,"wp-components-base-control",t),x=typeof a=="string"?"aria-describedby":"aria-details";return{baseControlProps:{id:m,help:a,...s},controlProps:{id:m,...a?{[x]:`${m}__help`}:{}}}}const R=h.u||k,w=n=>{if(T.Z)return(0,r.jsx)(T.Z,{...n});const a={...n};return["spinControls","isPressEnterToChange","isDragEnabled","isShiftStepEnabled","__unstableStateReducer"].forEach(t=>delete a[t]),(0,r.jsx)(o.Z,{...a})};w.displayName="NumberControl";const I=n=>{let{char:a=":"}=n;return(0,r.jsx)("span",{className:p["timestamp-control-divider"],children:a})};I.displayName="TimeDivider";const H="CHANGE",W="COMMIT",Z="PRESS_DOWN",z="PRESS_UP",M=n=>(a,t)=>{const s={...a};return(t.type===W||t.type===z||t.type===Z||t.type===H)&&s.value!==void 0&&(s.value=s.value.toString().padStart(n,"0")),s};function K(n,a,t){n>t&&(n=t);const s=Number.isNaN(n),m=s||typeof a=="undefined"?0:Math.floor(n%1e3/+`1e${3-a}`);return{hh:s?0:Math.floor(n/(1e3*60*60)%24),mm:s?0:Math.floor(n/(1e3*60)%60),ss:s?0:Math.floor(n/1e3%60),decimal:m}}const L=n=>{let{onChange:a,disabled:t,value:s,max:m,autoHideTimeInput:x=!0,decimalPlaces:u}=n;const f={value:K(s,u,m)},b=m>60*60*1e3,B=m>60*1e3,O=N=>C=>{if(typeof C=="string"&&!isNaN(parseInt(C,10))&&(C=parseInt(C,10)),N==="hh"&&C>99||(N==="mm"||N==="ss")&&C>59||N==="decimal"&&C>+`1e${u}`-1||typeof C=="string")return;f.value={...K(s,u,m),[N]:C};const U=f.value.decimal?f.value.decimal*+`1e${3-u}`:0;a==null||a((f.value.hh*3600+f.value.mm*60+f.value.ss)*1e3+U)};return(0,r.jsxs)("div",{className:_()(p["timestamp-input-wrapper"],{[p["is-disabled"]]:t}),children:[(b||!x)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{className:p["timestamp-control-input"],disabled:t,min:0,max:99,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:M(2),value:String(f.value.hh).padStart(2,"0"),onChange:O("hh")}),(0,r.jsx)(I,{})]}),(B||!x)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{className:p["timestamp-control-input"],disabled:t,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:M(2),value:String(f.value.mm).padStart(2,"0"),onChange:O("mm")}),(0,r.jsx)(I,{})]}),(0,r.jsx)(w,{className:p["timestamp-control-input"],disabled:t,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:M(2),value:String(f.value.ss).padStart(2,"0"),onChange:O("ss")}),u&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I,{char:"."}),(0,r.jsx)(w,{className:p["timestamp-control-input"],style:{"--input-width":`${12*u}px`},disabled:t,min:0,max:Number("9".repeat(u)),step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"0".repeat(u),isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:M(u),value:String(f.value.decimal).padStart(u,"0"),onChange:O("decimal")})]})]})};L.displayName="TimestampInput";const A=n=>{const{disabled:a=!1,min:t=0,max:s=Number.MAX_SAFE_INTEGER,value:m,onChange:x,onDebounceChange:u,wait:f=1e3,fineAdjustment:b=50,autoHideTimeInput:B=!0,decimalPlaces:O,marksEvery:N,renderTooltip:C}=n,U=(0,y.useRef)(),[q,G]=(0,y.useState)(m);(0,y.useEffect)(()=>{G(m)},[m]);const{baseControlProps:Y}=(R==null?void 0:R(n))||{},X=(0,y.useCallback)(S=>{clearTimeout(U==null?void 0:U.current),S>s&&(S=s),S<t&&(S=t),G(S),x==null||x(S),U.current=setTimeout(u==null?void 0:u.bind(null,S),f)},[u,x,s,t,f]),J=[];if(N)for(let S=t;S<=s;S+=N)J.push({value:S,label:null});const $=typeof C=="function"?C:S=>c(S);return(0,r.jsx)(l.ZP,{...Y,children:(0,r.jsxs)("div",{className:p["timestamp-control__controls-wrapper"],children:[w&&(0,r.jsx)(L,{disabled:a,max:s,value:q,onChange:X,autoHideTimeInput:B,decimalPlaces:O}),(0,r.jsx)(d.Z,{disabled:a,className:p["timestamp-range-control"],min:t,step:b,initialPosition:q,value:q,max:s,withInputField:!1,onChange:X,marks:N?J:void 0,renderTooltipContent:$,...C===!1?{showTooltip:!1}:{}})]})})};A.displayName="TimestampControl";const F=A;try{L.displayName="TimestampInput",L.__docgenInfo={description:"",displayName:"TimestampInput",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"]={docgenInfo:L.__docgenInfo,name:"TimestampInput",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"})}catch(n){}try{A.displayName="TimestampControl",A.__docgenInfo={description:"TimestampControl component",displayName:"TimestampControl",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"]={docgenInfo:A.__docgenInfo,name:"TimestampControl",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"})}catch(n){}try{timestampcontrol.displayName="timestampcontrol",timestampcontrol.__docgenInfo={description:"TimestampControl component",displayName:"timestampcontrol",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"]={docgenInfo:timestampcontrol.__docgenInfo,name:"timestampcontrol",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"})}catch(n){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/timestamp-control/style.module.scss":(D,E,e)=>{e.d(E,{Z:()=>V});var l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),h=e.n(l),T=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(T),d=o()(h());d.push([D.id,".zuO3RgAd20yV6c0cEjwU{--input-width: 24px;display:flex;align-items:center;gap:8px}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child{margin-bottom:0;flex-grow:2}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-base-control__field,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-base-control__field{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-range-control__wrapper,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-range-control__wrapper{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .components-range-control__marks{top:13px}.xiVP4KSb56I10368tN0v{display:flex;align-items:center;border-color:#949494;background-color:#fff;border-style:solid;justify-content:space-around;border-width:1px;padding:0px}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr{padding:0 1px;margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr input{max-width:var(--input-width)}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field .components-text-control__input{border:none;text-align:center;padding:0}.xiVP4KSb56I10368tN0v .components-input-control:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .components-input-control__input{padding-left:0 !important;padding-right:0 !important;text-align:center}.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-outer-spin-button,.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-inner-spin-button{-webkit-appearance:none}.xiVP4KSb56I10368tN0v .components-input-control__input[type=number]{-webkit-appearance:textfield;appearance:textfield;-moz-appearance:textfield}.xiVP4KSb56I10368tN0v .components-input-control__backdrop{border-style:none !important}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ{background-color:#f0f0f0}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ .PjODCu3uI7wWSXk4MiIH{color:#949494}.PjODCu3uI7wWSXk4MiIH{font-weight:900}",""]),d.locals={"timestamp-control__controls-wrapper":"zuO3RgAd20yV6c0cEjwU","timestamp-range-control":"m7UQ82mfQtaGf0Uxn62H","timestamp-input-wrapper":"xiVP4KSb56I10368tN0v","timestamp-control-input":"J6r6Ls3WNV_CSbuzeLyr","is-disabled":"XtdqGJfT1AOZ9KRjf1TZ","timestamp-control-divider":"PjODCu3uI7wWSXk4MiIH"};const V=d}}]);})();
