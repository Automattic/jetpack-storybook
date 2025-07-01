"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2690],{"../../packages/videopress/src/client/components/timestamp-control/stories/index.stories.tsx":(w,E,e)=>{e.r(E),e.d(E,{__namedExportsOrder:()=>O,_default:()=>b,changingValueExternally:()=>n,customTooltip:()=>A,decimalPlaces:()=>i,default:()=>g,disabled:()=>x,showTooltip:()=>y,withMarks:()=>c});var l=e("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/range-control/index.js"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=e("../../packages/videopress/src/client/components/timestamp-control/index.tsx"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=`import { RangeControl } from '@wordpress/components';
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
`,S={_default:{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},decimalPlaces:{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},disabled:{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},withMarks:{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},showTooltip:{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},customTooltip:{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},changingValueExternally:{startLoc:{col:30,line:88},endLoc:{col:1,line:107},startBody:{col:30,line:88},endBody:{col:1,line:107}}};const g={parameters:{storySource:{source:`import { RangeControl } from '@wordpress/components';
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
};`,locationsMap:{default:{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},"decimal-places":{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},disabled:{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},"with-marks":{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},"show-tooltip":{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},"custom-tooltip":{startLoc:{col:17,line:9},endLoc:{col:1,line:13},startBody:{col:17,line:9},endBody:{col:1,line:13}},"changing-value-externally":{startLoc:{col:30,line:88},endLoc:{col:1,line:107},startBody:{col:30,line:88},endBody:{col:1,line:107}}}}},title:"Packages/VideoPress/Timestamp Control",component:f.Ay},d=p=>(0,o.jsx)(f.Ay,{...p}),b=d.bind({});b.args={label:"Video frame",help:"Use the control to set timestamp of the video frame.",max:3600*1e3*2,value:236*1e3+125,wait:100,decimalPlaces:void 0,fineAdjustment:50,disabled:!1,autoHideTimeInput:!0,onChange:p=>{console.log({newTime:p})},onDebounceChange:p=>{console.log({newDebouncedTime:p})}},b.storyName="Timestamp Control";const i=d.bind({});i.args={value:3500,max:1e3*5,decimalPlaces:2};const x=d.bind({});x.args={max:3600*1e3*2,value:3600*1e3+15*60*1e3+43*1e3,disabled:!0};const c=d.bind({});c.args={value:3500,max:1e3*10,marksEvery:1e3,fineAdjustment:200};const y=d.bind({});y.args={value:8e4,max:1e3*100,renderTooltip:!0};const A=d.bind({});A.args={value:1e3*50,max:1e3*80,fineAdjustment:200,renderTooltip:p=>(0,o.jsxs)("span",{children:[p/1e3," seconds"]})};const n=(p=>{const[P,V]=(0,_.useState)(p.value);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f.Ay,{...p,label:"TimestampControl component",help:"The value is handled internally by the component.",value:P,onDebounceChange:V}),(0,o.jsx)("br",{}),(0,o.jsx)(l.A,{label:"RangeControl component",help:"The value is handled externally, and passed to the <TimestampControl /> above component.",value:P,onChange:V,max:p.max,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})]})}).bind({});n.args={value:3500,max:1e3*5,decimalPlaces:2,wait:100};const O=["_default","decimalPlaces","disabled","withMarks","showTooltip","customTooltip","changingValueExternally"];b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...b.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...i.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...x.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...c.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...y.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...A.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <>
            <TimestampControl {...args} label="TimestampControl component" help="The value is handled internally by the component." value={value} onDebounceChange={setValue} />
            <br />
            <RangeControl label="RangeControl component" help="The value is handled externally, and passed to the <TimestampControl /> above component." value={value} onChange={setValue} max={args.max} __nextHasNoMarginBottom={true} __next40pxDefaultSize={true} />
        </>;
}`,...n.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/hooks.js":(w,E,e)=>{e.d(E,{Y:()=>f});var l=e("../../../node_modules/.pnpm/@wordpress+compose@7.26.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js");function f(o){const{help:m,id:S,...g}=o,d=(0,l.A)(_.Ay,"wp-components-base-control",S);return{baseControlProps:{id:d,help:m,...g},controlProps:{id:d,...m?{"aria-describedby":`${d}__help`}:{}}}}},"../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text-control/index.js":(w,E,e)=>{e.d(E,{A:()=>b});var l=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),_=e("../../../node_modules/.pnpm/@wordpress+compose@7.26.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/deprecated-36px-size.js"),S=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function g(i,x){const{__nextHasNoMarginBottom:c,__next40pxDefaultSize:y=!1,label:A,hideLabelFromVision:j,value:n,help:O,id:p,className:P,onChange:V,type:k="text",...K}=i,L=(0,_.A)(d,"inspector-text-control",p),H=I=>V(I.target.value);return(0,m.M)({componentName:"TextControl",size:void 0,__next40pxDefaultSize:y}),(0,S.jsx)(o.Ay,{__nextHasNoMarginBottom:c,__associatedWPComponentName:"TextControl",label:A,hideLabelFromVision:j,id:L,help:O,className:P,children:(0,S.jsx)("input",{className:(0,l.A)("components-text-control__input",{"is-next-40px-default-size":y}),type:k,id:L,value:n,onChange:H,"aria-describedby":O?L+"__help":void 0,ref:x,...K})})}const d=(0,f.forwardRef)(g),b=d},"../../../node_modules/.pnpm/@wordpress+compose@7.26.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js":(w,E,e)=>{e.d(E,{A:()=>f});var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function _(o,m){typeof o=="function"?o(m):o&&o.hasOwnProperty("current")&&(o.current=m)}function f(o){const m=(0,l.useRef)(),S=(0,l.useRef)(!1),g=(0,l.useRef)(!1),d=(0,l.useRef)([]),b=(0,l.useRef)(o);return b.current=o,(0,l.useLayoutEffect)(()=>{g.current===!1&&S.current===!0&&o.forEach((i,x)=>{const c=d.current[x];i!==c&&(_(c,null),_(i,m.current))}),d.current=o},o),(0,l.useLayoutEffect)(()=>{g.current=!1}),(0,l.useCallback)(i=>{_(m,i),g.current=!0,S.current=i!==null;const x=i?b.current:d.current;for(const c of x)_(c,i)},[])}},"../../packages/videopress/src/client/components/timestamp-control/index.tsx":(w,E,e)=>{e.d(E,{Ay:()=>J});var l=e("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/hooks.js"),f=e("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/number-control/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text-control/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/range-control/index.js"),S=e("../../../node_modules/.pnpm/@wordpress+compose@7.26.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");function b(t){const a=Math.floor(t/36e5),r=Math.floor(t/6e4)%60,s=Math.floor(t/1e3)%60,h=Math.floor(t/10)%100;return[a>0?a.toString().padStart(2,"0")+":":"",a>0||r>0?r.toString().padStart(2,"0")+":":"",s.toString().padStart(2,"0"),"."+h.toString().padStart(2,"0")].join("")}var i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),x=e.n(i),c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../packages/videopress/src/client/components/timestamp-control/style.module.scss"),y={};y.insert="head",y.singleton=!1;var A=x()(c.A,y);const j=c.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function O(t){const{help:a,id:r,...s}=t,h=(0,S.A)(l.Ay,"wp-components-base-control",r),u=typeof a=="string"?"aria-describedby":"aria-details";return{baseControlProps:{id:h,help:a,...s},controlProps:{id:h,...a?{[u]:`${h}__help`}:{}}}}const p=_.Y||O,P=t=>{if(f.A)return(0,n.jsx)(f.A,{...t});const a={...t};return["spinControls","isPressEnterToChange","isDragEnabled","isShiftStepEnabled","__unstableStateReducer"].forEach(r=>delete a[r]),(0,n.jsx)(o.A,{...a})},V=({char:t=":"})=>(0,n.jsx)("span",{className:j["timestamp-control-divider"],children:t}),k="CHANGE",K="COMMIT",L="PRESS_DOWN",H="PRESS_UP",I=t=>(a,r)=>{const s={...a};return(r.type===K||r.type===H||r.type===L||r.type===k)&&s.value!==void 0&&(s.value=s.value.toString().padStart(t,"0")),s};function F(t,a,r){t>r&&(t=r);const s=Number.isNaN(t),h=s||typeof a>"u"?0:Math.floor(t%1e3/+`1e${3-a}`);return{hh:s?0:Math.floor(t/(1e3*60*60)%24),mm:s?0:Math.floor(t/(1e3*60)%60),ss:s?0:Math.floor(t/1e3%60),decimal:h}}const N=({onChange:t,disabled:a,value:r,max:s,autoHideTimeInput:h=!0,decimalPlaces:u})=>{const T={value:F(r,u,s)},U=s>60*60*1e3,W=s>60*1e3,D=R=>v=>{if(typeof v=="string"&&!isNaN(parseInt(v,10))&&(v=parseInt(v,10)),R==="hh"&&v>99||(R==="mm"||R==="ss")&&v>59||R==="decimal"&&v>+`1e${u}`-1||typeof v=="string")return;T.value={...F(r,u,s),[R]:v};const M=T.value.decimal?T.value.decimal*+`1e${3-u}`:0;t?.((T.value.hh*3600+T.value.mm*60+T.value.ss)*1e3+M)};return(0,n.jsxs)("div",{className:(0,d.A)(j["timestamp-input-wrapper"],{[j["is-disabled"]]:a}),children:[(U||!h)&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P,{className:j["timestamp-control-input"],disabled:a,min:0,max:99,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:I(2),value:String(T.value.hh).padStart(2,"0"),onChange:D("hh"),__next40pxDefaultSize:!0}),(0,n.jsx)(V,{})]}),(W||!h)&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P,{className:j["timestamp-control-input"],disabled:a,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:I(2),value:String(T.value.mm).padStart(2,"0"),onChange:D("mm"),__next40pxDefaultSize:!0}),(0,n.jsx)(V,{})]}),(0,n.jsx)(P,{className:j["timestamp-control-input"],disabled:a,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:I(2),value:String(T.value.ss).padStart(2,"0"),onChange:D("ss"),__next40pxDefaultSize:!0}),u&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(V,{char:"."}),(0,n.jsx)(P,{className:j["timestamp-control-input"],style:{"--input-width":`${12*u}px`},disabled:a,min:0,max:Number("9".repeat(u)),step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"0".repeat(u),isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:I(u),value:String(T.value.decimal).padStart(u,"0"),onChange:D("decimal"),__next40pxDefaultSize:!0})]})]})},B=t=>{const{disabled:a=!1,min:r=0,max:s=Number.MAX_SAFE_INTEGER,value:h,onChange:u,onDebounceChange:T,wait:U=1e3,fineAdjustment:W=50,autoHideTimeInput:D=!0,decimalPlaces:R,marksEvery:v,renderTooltip:M}=t,Q=(0,g.useRef)(),[z,G]=(0,g.useState)(h);(0,g.useEffect)(()=>{G(h)},[h]);const{baseControlProps:Y}=p?.(t)||{},q=(0,g.useCallback)(C=>{clearTimeout(Q?.current),C>s&&(C=s),C<r&&(C=r),G(C),u?.(C),Q.current=setTimeout(T?.bind(null,C),U)},[T,u,s,r,U]),X=[];if(v)for(let C=r;C<=s;C+=v)X.push({value:C,label:null});const Z=typeof M=="function"?M:C=>b(C);return(0,n.jsx)(l.Ay,{...Y,__nextHasNoMarginBottom:!0,children:(0,n.jsxs)("div",{className:j["timestamp-control__controls-wrapper"],children:[P&&(0,n.jsx)(N,{disabled:a,max:s,value:z,onChange:q,autoHideTimeInput:D,decimalPlaces:R}),(0,n.jsx)(m.A,{disabled:a,className:j["timestamp-range-control"],min:r,step:W,initialPosition:z,value:z,max:s,withInputField:!1,onChange:q,marks:v?X:void 0,renderTooltipContent:Z,...M===!1?{showTooltip:!1}:{},__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})]})})},J=B;try{N.displayName="TimestampInput",N.__docgenInfo={description:"",displayName:"TimestampInput",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"]={docgenInfo:N.__docgenInfo,name:"TimestampInput",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"})}catch{}try{B.displayName="TimestampControl",B.__docgenInfo={description:"TimestampControl component",displayName:"TimestampControl",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"]={docgenInfo:B.__docgenInfo,name:"TimestampControl",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"})}catch{}try{timestampcontrol.displayName="timestampcontrol",timestampcontrol.__docgenInfo={description:"TimestampControl component",displayName:"timestampcontrol",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"]={docgenInfo:timestampcontrol.__docgenInfo,name:"timestampcontrol",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../packages/videopress/src/client/components/timestamp-control/style.module.scss":(w,E,e)=>{e.d(E,{A:()=>S});var l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(l),f=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(f),m=o()(_());m.push([w.id,".zuO3RgAd20yV6c0cEjwU{--input-width: 24px;display:flex;align-items:center;gap:8px}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child{margin-bottom:0;flex-grow:2}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-base-control__field,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-base-control__field{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-range-control__wrapper,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-range-control__wrapper{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .components-range-control__marks{top:13px}.xiVP4KSb56I10368tN0v{display:flex;align-items:center;border-color:#949494;background-color:#fff;border-style:solid;justify-content:space-around;border-width:1px;padding:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr{padding:0 1px;margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr input{max-width:var(--input-width)}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field .components-text-control__input{border:none;text-align:center;padding:0}.xiVP4KSb56I10368tN0v .components-input-control:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .components-input-control__input{padding-left:0 !important;padding-right:0 !important;text-align:center}.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-outer-spin-button,.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-inner-spin-button{-webkit-appearance:none}.xiVP4KSb56I10368tN0v .components-input-control__input[type=number]{-webkit-appearance:textfield;appearance:textfield;-moz-appearance:textfield}.xiVP4KSb56I10368tN0v .components-input-control__backdrop{border-style:none !important}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ{background-color:#f0f0f0}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ .PjODCu3uI7wWSXk4MiIH{color:#949494}.PjODCu3uI7wWSXk4MiIH{font-weight:900}",""]),m.locals={"timestamp-control__controls-wrapper":"zuO3RgAd20yV6c0cEjwU","timestamp-range-control":"m7UQ82mfQtaGf0Uxn62H","timestamp-input-wrapper":"xiVP4KSb56I10368tN0v","timestamp-control-input":"J6r6Ls3WNV_CSbuzeLyr","is-disabled":"XtdqGJfT1AOZ9KRjf1TZ","timestamp-control-divider":"PjODCu3uI7wWSXk4MiIH"};const S=m}}]);
