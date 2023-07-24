"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9796],{"../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/hooks.js":(B,C,e)=>{e.d(C,{u:()=>y});var h=e("../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js");function y(m){const{help:u,id:R,...S}=m,c=(0,h.Z)(w.ZP,"wp-components-base-control",R),_=typeof u=="string"?"aria-describedby":"aria-details";return{baseControlProps:{id:c,help:u,...S},controlProps:{id:c,...u?{[_]:`${c}__help`}:{}}}}},"../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/text-control/index.js":(B,C,e)=>{e.d(C,{Z:()=>R});var h=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),y=e("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js");function m(S,c){const{__nextHasNoMarginBottom:_,label:E,hideLabelFromVision:P,value:j,help:T,className:v,onChange:q,type:r="text",...s}=S,V=`inspector-text-control-${(0,w.Z)(u)}`,x=I=>q(I.target.value);return(0,h.createElement)(y.ZP,{__nextHasNoMarginBottom:_,label:E,hideLabelFromVision:P,id:V,help:T,className:v},(0,h.createElement)("input",{className:"components-text-control__input",type:r,id:V,value:j,onChange:x,"aria-describedby":T?V+"__help":void 0,ref:c,...s}))}const u=(0,h.forwardRef)(m),R=u},"../../packages/videopress/src/client/components/timestamp-control/stories/index.stories.tsx":(B,C,e)=>{var U,V,x,I,H,W,Z,z,M,K,L,A,F,n,o,t,a,l,g,d,i;e.r(C),e.d(C,{__namedExportsOrder:()=>s,_default:()=>_,changingValueExternally:()=>r,customTooltip:()=>v,decimalPlaces:()=>E,default:()=>S,disabled:()=>P,showTooltip:()=>T,withMarks:()=>j});var h=e("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/range-control/index.js"),w=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),y=e("../../packages/videopress/src/client/components/timestamp-control/index.tsx"),m=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=`import { RangeControl } from '@wordpress/components';
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
`,R={_default:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},decimalPlaces:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},disabled:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},withMarks:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},showTooltip:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},customTooltip:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},changingValueExternally:{startLoc:{col:71,line:86},endLoc:{col:1,line:93},startBody:{col:71,line:86},endBody:{col:1,line:93}}};const S={parameters:{storySource:{source:`import { RangeControl } from '@wordpress/components';
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
};`,locationsMap:{default:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"decimal-places":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},disabled:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"with-marks":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"show-tooltip":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"custom-tooltip":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"changing-value-externally":{startLoc:{col:71,line:86},endLoc:{col:1,line:93},startBody:{col:71,line:86},endBody:{col:1,line:93}}}}},title:"Packages/VideoPress/Timestamp Control",component:y.ZP},c=p=>(0,m.jsx)(y.ZP,{...p});c.displayName="Template";const _=c.bind({});_.args={label:"Video frame",help:"Use the control to set timestamp of the video frame.",max:3600*1e3*2,value:236*1e3+125,wait:100,decimalPlaces:void 0,fineAdjustment:50,disabled:!1,autoHideTimeInput:!0,onChange:p=>{console.log({newTime:p})},onDebounceChange:p=>{console.log({newDebouncedTime:p})}},_.storyName="Timestamp Control";const E=c.bind({});E.args={value:3500,max:1e3*5,decimalPlaces:2};const P=c.bind({});P.args={max:3600*1e3*2,value:3600*1e3+15*60*1e3+43*1e3,disabled:!0};const j=c.bind({});j.args={value:3500,max:1e3*10,marksEvery:1e3,fineAdjustment:200};const T=c.bind({});T.args={value:8e4,max:1e3*100,renderTooltip:!0};const v=c.bind({});v.args={value:1e3*50,max:1e3*80,fineAdjustment:200,renderTooltip:p=>(0,m.jsxs)("span",{children:[p/1e3," seconds"]})};const r=(p=>{const[D,O]=(0,w.useState)(p.value);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(y.ZP,{...p,label:"TimestampControl component",help:"The value is handled internally by the component.",value:D,onDebounceChange:O}),(0,m.jsx)("br",{}),(0,m.jsx)(h.Z,{label:"RangeControl component",help:"The value is handled externally, and passed to the <TimestampControl /> above component.",value:D,onChange:O,max:p.max})]})}).bind({});r.args={value:3500,max:1e3*5,decimalPlaces:2,wait:100},_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(x=(V=_.parameters)==null?void 0:V.docs)==null?void 0:x.source}}},E.parameters={...E.parameters,docs:{...(I=E.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(W=(H=E.parameters)==null?void 0:H.docs)==null?void 0:W.source}}},P.parameters={...P.parameters,docs:{...(Z=P.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(M=(z=P.parameters)==null?void 0:z.docs)==null?void 0:M.source}}},j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(A=(L=j.parameters)==null?void 0:L.docs)==null?void 0:A.source}}},T.parameters={...T.parameters,docs:{...(F=T.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(o=(n=T.parameters)==null?void 0:n.docs)==null?void 0:o.source}}},v.parameters={...v.parameters,docs:{...(t=v.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(l=(a=v.parameters)==null?void 0:a.docs)==null?void 0:l.source}}},r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <>
            <TimestampControl {...args} label="TimestampControl component" help="The value is handled internally by the component." value={value} onDebounceChange={setValue} />
            <br />
            <RangeControl label="RangeControl component" help="The value is handled externally, and passed to the <TimestampControl /> above component." value={value} onChange={setValue} max={args.max} />
        </>;
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const s=["_default","decimalPlaces","disabled","withMarks","showTooltip","customTooltip","changingValueExternally"]},"../../packages/videopress/src/client/components/timestamp-control/index.tsx":(B,C,e)=>{e.d(C,{ZP:()=>F});var h=e("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/hooks.js"),y=e("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/number-control/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/text-control/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/range-control/index.js"),R=e("../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),S=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),_=e.n(c);function E(n){const o=Math.floor(n/36e5),t=Math.floor(n/6e4)%60,a=Math.floor(n/1e3)%60,l=Math.floor(n/10)%100;return[o>0?o.toString().padStart(2,"0")+":":"",o>0||t>0?t.toString().padStart(2,"0")+":":"",a.toString().padStart(2,"0"),"."+l.toString().padStart(2,"0")].join("")}var P=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=e.n(P),T=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/timestamp-control/style.module.scss"),v={};v.insert="head",v.singleton=!1;var q=j()(T.Z,v);const r=T.Z.locals||{};var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function U(n){const{help:o,id:t,...a}=n,l=(0,R.Z)(h.ZP,"wp-components-base-control",t),g=typeof o=="string"?"aria-describedby":"aria-details";return{baseControlProps:{id:l,help:o,...a},controlProps:{id:l,...o?{[g]:`${l}__help`}:{}}}}const V=w.u||U,x=n=>{if(y.Z)return(0,s.jsx)(y.Z,{...n});const o={...n};return["spinControls","isPressEnterToChange","isDragEnabled","isShiftStepEnabled","__unstableStateReducer"].forEach(t=>delete o[t]),(0,s.jsx)(m.Z,{...o})};x.displayName="NumberControl";const I=n=>{let{char:o=":"}=n;return(0,s.jsx)("span",{className:r["timestamp-control-divider"],children:o})};I.displayName="TimeDivider";const H="CHANGE",W="COMMIT",Z="PRESS_DOWN",z="PRESS_UP",M=n=>(o,t)=>{const a={...o};return(t.type===W||t.type===z||t.type===Z||t.type===H)&&a.value!==void 0&&(a.value=a.value.toString().padStart(n,"0")),a};function K(n,o,t){n>t&&(n=t);const a=Number.isNaN(n),l=a||typeof o=="undefined"?0:Math.floor(n%1e3/+`1e${3-o}`);return{hh:a?0:Math.floor(n/(1e3*60*60)%24),mm:a?0:Math.floor(n/(1e3*60)%60),ss:a?0:Math.floor(n/1e3%60),decimal:l}}const L=n=>{let{onChange:o,disabled:t,value:a,max:l,autoHideTimeInput:g=!0,decimalPlaces:d}=n;const i={value:K(a,d,l)},p=l>60*60*1e3,D=l>60*1e3,O=N=>f=>{if(typeof f=="string"&&!isNaN(parseInt(f,10))&&(f=parseInt(f,10)),N==="hh"&&f>99||(N==="mm"||N==="ss")&&f>59||N==="decimal"&&f>+`1e${d}`-1||typeof f=="string")return;i.value={...K(a,d,l),[N]:f};const k=i.value.decimal?i.value.decimal*+`1e${3-d}`:0;o==null||o((i.value.hh*3600+i.value.mm*60+i.value.ss)*1e3+k)};return(0,s.jsxs)("div",{className:_()(r["timestamp-input-wrapper"],{[r["is-disabled"]]:t}),children:[(p||!g)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x,{className:r["timestamp-control-input"],disabled:t,min:0,max:99,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:M(2),value:String(i.value.hh).padStart(2,"0"),onChange:O("hh")}),(0,s.jsx)(I,{})]}),(D||!g)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x,{className:r["timestamp-control-input"],disabled:t,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:M(2),value:String(i.value.mm).padStart(2,"0"),onChange:O("mm")}),(0,s.jsx)(I,{})]}),(0,s.jsx)(x,{className:r["timestamp-control-input"],disabled:t,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:M(2),value:String(i.value.ss).padStart(2,"0"),onChange:O("ss")}),d&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(I,{char:"."}),(0,s.jsx)(x,{className:r["timestamp-control-input"],style:{"--input-width":`${12*d}px`},disabled:t,min:0,max:Number("9".repeat(d)),step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"0".repeat(d),isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:M(d),value:String(i.value.decimal).padStart(d,"0"),onChange:O("decimal")})]})]})};L.displayName="TimestampInput";const A=n=>{const{disabled:o=!1,min:t=0,max:a=Number.MAX_SAFE_INTEGER,value:l,onChange:g,onDebounceChange:d,wait:i=1e3,fineAdjustment:p=50,autoHideTimeInput:D=!0,decimalPlaces:O,marksEvery:N,renderTooltip:f}=n,k=(0,S.useRef)(),[Q,G]=(0,S.useState)(l);(0,S.useEffect)(()=>{G(l)},[l]);const{baseControlProps:Y}=(V==null?void 0:V(n))||{},X=(0,S.useCallback)(b=>{clearTimeout(k==null?void 0:k.current),b>a&&(b=a),b<t&&(b=t),G(b),g==null||g(b),k.current=setTimeout(d==null?void 0:d.bind(null,b),i)},[d,g,a,t,i]),J=[];if(N)for(let b=t;b<=a;b+=N)J.push({value:b,label:null});const $=typeof f=="function"?f:b=>E(b);return(0,s.jsx)(h.ZP,{...Y,children:(0,s.jsxs)("div",{className:r["timestamp-control__controls-wrapper"],children:[x&&(0,s.jsx)(L,{disabled:o,max:a,value:Q,onChange:X,autoHideTimeInput:D,decimalPlaces:O}),(0,s.jsx)(u.Z,{disabled:o,className:r["timestamp-range-control"],min:t,step:p,initialPosition:Q,value:Q,max:a,withInputField:!1,onChange:X,marks:N?J:void 0,renderTooltipContent:$,...f===!1?{showTooltip:!1}:{}})]})})};A.displayName="TimestampControl";const F=A;try{L.displayName="TimestampInput",L.__docgenInfo={description:"",displayName:"TimestampInput",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"]={docgenInfo:L.__docgenInfo,name:"TimestampInput",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"})}catch(n){}try{A.displayName="TimestampControl",A.__docgenInfo={description:"TimestampControl component",displayName:"TimestampControl",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"]={docgenInfo:A.__docgenInfo,name:"TimestampControl",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"})}catch(n){}try{timestampcontrol.displayName="timestampcontrol",timestampcontrol.__docgenInfo={description:"TimestampControl component",displayName:"timestampcontrol",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"]={docgenInfo:timestampcontrol.__docgenInfo,name:"timestampcontrol",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"})}catch(n){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/timestamp-control/style.module.scss":(B,C,e)=>{e.d(C,{Z:()=>R});var h=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=e.n(h),y=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),m=e.n(y),u=m()(w());u.push([B.id,".zuO3RgAd20yV6c0cEjwU{--input-width: 24px;display:flex;align-items:center;gap:8px}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child{margin-bottom:0;flex-grow:2}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-base-control__field,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-base-control__field{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-range-control__wrapper,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-range-control__wrapper{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .components-range-control__marks{top:13px}.xiVP4KSb56I10368tN0v{display:flex;align-items:center;border-color:#949494;background-color:#fff;border-style:solid;justify-content:space-around;border-width:1px;padding:0px}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr{padding:0 1px;margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr input{max-width:var(--input-width)}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field .components-text-control__input{border:none;text-align:center;padding:0}.xiVP4KSb56I10368tN0v .components-input-control:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .components-input-control__input{padding-left:0 !important;padding-right:0 !important;text-align:center}.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-outer-spin-button,.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-inner-spin-button{-webkit-appearance:none}.xiVP4KSb56I10368tN0v .components-input-control__input[type=number]{-webkit-appearance:textfield;appearance:textfield;-moz-appearance:textfield}.xiVP4KSb56I10368tN0v .components-input-control__backdrop{border-style:none !important}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ{background-color:#f0f0f0}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ .PjODCu3uI7wWSXk4MiIH{color:#949494}.PjODCu3uI7wWSXk4MiIH{font-weight:900}",""]),u.locals={"timestamp-control__controls-wrapper":"zuO3RgAd20yV6c0cEjwU","timestamp-range-control":"m7UQ82mfQtaGf0Uxn62H","timestamp-input-wrapper":"xiVP4KSb56I10368tN0v","timestamp-control-input":"J6r6Ls3WNV_CSbuzeLyr","is-disabled":"XtdqGJfT1AOZ9KRjf1TZ","timestamp-control-divider":"PjODCu3uI7wWSXk4MiIH"};const R=u}}]);})();
