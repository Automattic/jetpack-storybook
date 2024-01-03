"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9796],{"../../packages/videopress/src/client/components/timestamp-control/stories/index.stories.tsx":(B,E,e)=>{var k,I,V,O,L,U,K,Z,M,W,N,A,z,t,s,a,n,_,d,u,D;e.r(E),e.d(E,{__namedExportsOrder:()=>l,_default:()=>f,changingValueExternally:()=>m,customTooltip:()=>S,decimalPlaces:()=>p,default:()=>b,disabled:()=>v,showTooltip:()=>j,withMarks:()=>g});var r=e("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/range-control/index.js"),y=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),T=e("../../packages/videopress/src/client/components/timestamp-control/index.tsx"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=`import { RangeControl } from '@wordpress/components';
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
`,P={_default:{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},decimalPlaces:{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},disabled:{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},withMarks:{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},showTooltip:{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},customTooltip:{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},changingValueExternally:{startLoc:{col:73,line:76},endLoc:{col:1,line:98},startBody:{col:73,line:76},endBody:{col:1,line:98}}};const b={parameters:{storySource:{source:`import { RangeControl } from '@wordpress/components';
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
`,locationsMap:{default:{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},"decimal-places":{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},disabled:{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},"with-marks":{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},"show-tooltip":{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},"custom-tooltip":{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}},"changing-value-externally":{startLoc:{col:73,line:76},endLoc:{col:1,line:98},startBody:{col:73,line:76},endBody:{col:1,line:98}}}}},title:"Packages/VideoPress/Timestamp Control",component:T.ZP},i=h=>(0,o.jsx)(T.ZP,{...h});i.displayName="Template";const f=i.bind({});f.args={label:"Video frame",help:"Use the control to set timestamp of the video frame.",max:3600*1e3*2,value:236*1e3+125,wait:100,decimalPlaces:void 0,fineAdjustment:50,disabled:!1,autoHideTimeInput:!0,onChange:h=>{console.log({newTime:h})},onDebounceChange:h=>{console.log({newDebouncedTime:h})}},f.storyName="Timestamp Control";const p=i.bind({});p.args={value:3500,max:1e3*5,decimalPlaces:2};const v=i.bind({});v.args={max:3600*1e3*2,value:3600*1e3+15*60*1e3+43*1e3,disabled:!0};const g=i.bind({});g.args={value:3500,max:1e3*10,marksEvery:1e3,fineAdjustment:200};const j=i.bind({});j.args={value:8e4,max:1e3*100,renderTooltip:!0};const S=i.bind({});S.args={value:1e3*50,max:1e3*80,fineAdjustment:200,renderTooltip:h=>(0,o.jsxs)("span",{children:[h/1e3," seconds"]})};const m=(h=>{const[R,w]=(0,y.useState)(h.value);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(T.ZP,{...h,label:"TimestampControl component",help:"The value is handled internally by the component.",value:R,onDebounceChange:w}),(0,o.jsx)("br",{}),(0,o.jsx)(r.Z,{label:"RangeControl component",help:"The value is handled externally, and passed to the <TimestampControl /> above component.",value:R,onChange:w,max:h.max})]})}).bind({});m.args={value:3500,max:1e3*5,decimalPlaces:2,wait:100},f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(V=(I=f.parameters)==null?void 0:I.docs)==null?void 0:V.source}}},p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(U=(L=p.parameters)==null?void 0:L.docs)==null?void 0:U.source}}},v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(M=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:M.source}}},g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(A=(N=g.parameters)==null?void 0:N.docs)==null?void 0:A.source}}},j.parameters={...j.parameters,docs:{...(z=j.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(s=(t=j.parameters)==null?void 0:t.docs)==null?void 0:s.source}}},S.parameters={...S.parameters,docs:{...(a=S.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(_=(n=S.parameters)==null?void 0:n.docs)==null?void 0:_.source}}},m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <>
            <TimestampControl {...args} label="TimestampControl component" help="The value is handled internally by the component." value={value} onDebounceChange={setValue} />
            <br />
            <RangeControl label="RangeControl component" help="The value is handled externally, and passed to the <TimestampControl /> above component." value={value} onChange={setValue} max={args.max} />
        </>;
}`,...(D=(u=m.parameters)==null?void 0:u.docs)==null?void 0:D.source}}};const l=["_default","decimalPlaces","disabled","withMarks","showTooltip","customTooltip","changingValueExternally"]},"../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/hooks.js":(B,E,e)=>{e.d(E,{u:()=>T});var r=e("../../../node_modules/.pnpm/@wordpress+compose@6.25.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),y=e("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js");function T(o){const{help:c,id:P,...b}=o,i=(0,r.Z)(y.ZP,"wp-components-base-control",P),f=typeof c=="string"?"aria-describedby":"aria-details";return{baseControlProps:{id:i,help:c,...b},controlProps:{id:i,...c?{[f]:`${i}__help`}:{}}}}},"../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/text-control/index.js":(B,E,e)=>{e.d(E,{Z:()=>i});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),y=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),T=e.n(y),o=e("../../../node_modules/.pnpm/@wordpress+compose@6.25.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js");function P(f,p){const{__nextHasNoMarginBottom:v,__next40pxDefaultSize:g=!1,label:j,hideLabelFromVision:S,value:Q,help:m,id:l,className:k,onChange:I,type:V="text",...O}=f,L=(0,o.Z)(b,"inspector-text-control",l),U=K=>I(K.target.value);return(0,r.createElement)(c.ZP,{__nextHasNoMarginBottom:v,label:j,hideLabelFromVision:S,id:L,help:m,className:k},(0,r.createElement)("input",{className:T()("components-text-control__input",{"is-next-40px-default-size":g}),type:V,id:L,value:Q,onChange:U,"aria-describedby":m?L+"__help":void 0,ref:p,...O}))}const b=(0,r.forwardRef)(P),i=b},"../../../node_modules/.pnpm/@wordpress+compose@6.25.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js":(B,E,e)=>{e.d(E,{Z:()=>T});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function y(o,c){typeof o=="function"?o(c):o&&o.hasOwnProperty("current")&&(o.current=c)}function T(o){const c=(0,r.useRef)(),P=(0,r.useRef)(!1),b=(0,r.useRef)(!1),i=(0,r.useRef)([]),f=(0,r.useRef)(o);return f.current=o,(0,r.useLayoutEffect)(()=>{b.current===!1&&P.current===!0&&o.forEach((p,v)=>{const g=i.current[v];p!==g&&(y(g,null),y(p,c.current))}),i.current=o},o),(0,r.useLayoutEffect)(()=>{b.current=!1}),(0,r.useCallback)(p=>{y(c,p),b.current=!0,P.current=p!==null;const v=p?f.current:i.current;for(const g of v)y(g,p)},[])}},"../../packages/videopress/src/client/components/timestamp-control/index.tsx":(B,E,e)=>{e.d(E,{ZP:()=>z});var r=e("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js"),y=e("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/hooks.js"),T=e("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/number-control/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/text-control/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/range-control/index.js"),P=e("../../../node_modules/.pnpm/@wordpress+compose@6.25.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),b=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),f=e.n(i);function p(t){const s=Math.floor(t/36e5),a=Math.floor(t/6e4)%60,n=Math.floor(t/1e3)%60,_=Math.floor(t/10)%100;return[s>0?s.toString().padStart(2,"0")+":":"",s>0||a>0?a.toString().padStart(2,"0")+":":"",n.toString().padStart(2,"0"),"."+_.toString().padStart(2,"0")].join("")}var v=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(v),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/timestamp-control/style.module.scss"),S={};S.insert="head",S.singleton=!1;var Q=g()(j.Z,S);const m=j.Z.locals||{};var l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function k(t){const{help:s,id:a,...n}=t,_=(0,P.Z)(r.ZP,"wp-components-base-control",a),d=typeof s=="string"?"aria-describedby":"aria-details";return{baseControlProps:{id:_,help:s,...n},controlProps:{id:_,...s?{[d]:`${_}__help`}:{}}}}const I=y.u||k,V=t=>{if(T.Z)return(0,l.jsx)(T.Z,{...t});const s={...t};return["spinControls","isPressEnterToChange","isDragEnabled","isShiftStepEnabled","__unstableStateReducer"].forEach(a=>delete s[a]),(0,l.jsx)(o.Z,{...s})};V.displayName="NumberControl";const O=({char:t=":"})=>(0,l.jsx)("span",{className:m["timestamp-control-divider"],children:t});O.displayName="TimeDivider";const L="CHANGE",U="COMMIT",K="PRESS_DOWN",Z="PRESS_UP",M=t=>(s,a)=>{const n={...s};return(a.type===U||a.type===Z||a.type===K||a.type===L)&&n.value!==void 0&&(n.value=n.value.toString().padStart(t,"0")),n};function W(t,s,a){t>a&&(t=a);const n=Number.isNaN(t),_=n||typeof s=="undefined"?0:Math.floor(t%1e3/+`1e${3-s}`);return{hh:n?0:Math.floor(t/(1e3*60*60)%24),mm:n?0:Math.floor(t/(1e3*60)%60),ss:n?0:Math.floor(t/1e3%60),decimal:_}}const N=({onChange:t,disabled:s,value:a,max:n,autoHideTimeInput:_=!0,decimalPlaces:d})=>{const u={value:W(a,d,n)},D=n>60*60*1e3,h=n>60*1e3,R=w=>x=>{if(typeof x=="string"&&!isNaN(parseInt(x,10))&&(x=parseInt(x,10)),w==="hh"&&x>99||(w==="mm"||w==="ss")&&x>59||w==="decimal"&&x>+`1e${d}`-1||typeof x=="string")return;u.value={...W(a,d,n),[w]:x};const H=u.value.decimal?u.value.decimal*+`1e${3-d}`:0;t==null||t((u.value.hh*3600+u.value.mm*60+u.value.ss)*1e3+H)};return(0,l.jsxs)("div",{className:f()(m["timestamp-input-wrapper"],{[m["is-disabled"]]:s}),children:[(D||!_)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(V,{className:m["timestamp-control-input"],disabled:s,min:0,max:99,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:M(2),value:String(u.value.hh).padStart(2,"0"),onChange:R("hh")}),(0,l.jsx)(O,{})]}),(h||!_)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(V,{className:m["timestamp-control-input"],disabled:s,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:M(2),value:String(u.value.mm).padStart(2,"0"),onChange:R("mm")}),(0,l.jsx)(O,{})]}),(0,l.jsx)(V,{className:m["timestamp-control-input"],disabled:s,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:M(2),value:String(u.value.ss).padStart(2,"0"),onChange:R("ss")}),d&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(O,{char:"."}),(0,l.jsx)(V,{className:m["timestamp-control-input"],style:{"--input-width":`${12*d}px`},disabled:s,min:0,max:Number("9".repeat(d)),step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"0".repeat(d),isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:M(d),value:String(u.value.decimal).padStart(d,"0"),onChange:R("decimal")})]})]})};N.displayName="TimestampInput";const A=t=>{const{disabled:s=!1,min:a=0,max:n=Number.MAX_SAFE_INTEGER,value:_,onChange:d,onDebounceChange:u,wait:D=1e3,fineAdjustment:h=50,autoHideTimeInput:R=!0,decimalPlaces:w,marksEvery:x,renderTooltip:H}=t,F=(0,b.useRef)(),[G,q]=(0,b.useState)(_);(0,b.useEffect)(()=>{q(_)},[_]);const{baseControlProps:Y}=(I==null?void 0:I(t))||{},X=(0,b.useCallback)(C=>{clearTimeout(F==null?void 0:F.current),C>n&&(C=n),C<a&&(C=a),q(C),d==null||d(C),F.current=setTimeout(u==null?void 0:u.bind(null,C),D)},[u,d,n,a,D]),J=[];if(x)for(let C=a;C<=n;C+=x)J.push({value:C,label:null});const $=typeof H=="function"?H:C=>p(C);return(0,l.jsx)(r.ZP,{...Y,children:(0,l.jsxs)("div",{className:m["timestamp-control__controls-wrapper"],children:[V&&(0,l.jsx)(N,{disabled:s,max:n,value:G,onChange:X,autoHideTimeInput:R,decimalPlaces:w}),(0,l.jsx)(c.Z,{disabled:s,className:m["timestamp-range-control"],min:a,step:h,initialPosition:G,value:G,max:n,withInputField:!1,onChange:X,marks:x?J:void 0,renderTooltipContent:$,...H===!1?{showTooltip:!1}:{}})]})})};A.displayName="TimestampControl";const z=A;try{N.displayName="TimestampInput",N.__docgenInfo={description:"",displayName:"TimestampInput",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"]={docgenInfo:N.__docgenInfo,name:"TimestampInput",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"})}catch(t){}try{A.displayName="TimestampControl",A.__docgenInfo={description:"TimestampControl component",displayName:"TimestampControl",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"]={docgenInfo:A.__docgenInfo,name:"TimestampControl",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"})}catch(t){}try{timestampcontrol.displayName="timestampcontrol",timestampcontrol.__docgenInfo={description:"TimestampControl component",displayName:"timestampcontrol",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"]={docgenInfo:timestampcontrol.__docgenInfo,name:"timestampcontrol",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"})}catch(t){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/timestamp-control/style.module.scss":(B,E,e)=>{e.d(E,{Z:()=>P});var r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=e.n(r),T=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(T),c=o()(y());c.push([B.id,".zuO3RgAd20yV6c0cEjwU{--input-width: 24px;display:flex;align-items:center;gap:8px}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child{margin-bottom:0;flex-grow:2}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-base-control__field,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-base-control__field{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-range-control__wrapper,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-range-control__wrapper{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .components-range-control__marks{top:13px}.xiVP4KSb56I10368tN0v{display:flex;align-items:center;border-color:#949494;background-color:#fff;border-style:solid;justify-content:space-around;border-width:1px;padding:0px}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr{padding:0 1px;margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr input{max-width:var(--input-width)}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field .components-text-control__input{border:none;text-align:center;padding:0}.xiVP4KSb56I10368tN0v .components-input-control:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .components-input-control__input{padding-left:0 !important;padding-right:0 !important;text-align:center}.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-outer-spin-button,.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-inner-spin-button{-webkit-appearance:none}.xiVP4KSb56I10368tN0v .components-input-control__input[type=number]{-webkit-appearance:textfield;appearance:textfield;-moz-appearance:textfield}.xiVP4KSb56I10368tN0v .components-input-control__backdrop{border-style:none !important}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ{background-color:#f0f0f0}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ .PjODCu3uI7wWSXk4MiIH{color:#949494}.PjODCu3uI7wWSXk4MiIH{font-weight:900}",""]),c.locals={"timestamp-control__controls-wrapper":"zuO3RgAd20yV6c0cEjwU","timestamp-range-control":"m7UQ82mfQtaGf0Uxn62H","timestamp-input-wrapper":"xiVP4KSb56I10368tN0v","timestamp-control-input":"J6r6Ls3WNV_CSbuzeLyr","is-disabled":"XtdqGJfT1AOZ9KRjf1TZ","timestamp-control-divider":"PjODCu3uI7wWSXk4MiIH"};const P=c}}]);})();
