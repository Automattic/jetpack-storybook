"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9796],{"../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/hooks.js":(k,S,e)=>{e.d(S,{u:()=>y});var l=e("../../../node_modules/.pnpm/@wordpress+compose@6.24.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),T=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js");function y(o){const{help:c,id:P,...g}=o,i=(0,l.Z)(T.ZP,"wp-components-base-control",P),f=typeof c=="string"?"aria-describedby":"aria-details";return{baseControlProps:{id:i,help:c,...g},controlProps:{id:i,...c?{[f]:`${i}__help`}:{}}}}},"../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/text-control/index.js":(k,S,e)=>{e.d(S,{Z:()=>i});var l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),T=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),y=e.n(T),o=e("../../../node_modules/.pnpm/@wordpress+compose@6.24.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js");function P(f,p){const{__nextHasNoMarginBottom:v,__next40pxDefaultSize:b=!1,label:j,hideLabelFromVision:E,value:Q,help:m,id:r,className:B,onChange:I,type:V="text",...R}=f,L=(0,o.Z)(g,"inspector-text-control",r),U=K=>I(K.target.value);return(0,l.createElement)(c.ZP,{__nextHasNoMarginBottom:v,label:j,hideLabelFromVision:E,id:L,help:m,className:B},(0,l.createElement)("input",{className:y()("components-text-control__input",{"is-next-40px-default-size":b}),type:V,id:L,value:Q,onChange:U,"aria-describedby":m?L+"__help":void 0,ref:p,...R}))}const g=(0,l.forwardRef)(P),i=g},"../../../node_modules/.pnpm/@wordpress+compose@6.24.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js":(k,S,e)=>{e.d(S,{Z:()=>y});var l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function T(o,c){typeof o=="function"?o(c):o&&o.hasOwnProperty("current")&&(o.current=c)}function y(o){const c=(0,l.useRef)(),P=(0,l.useRef)(!1),g=(0,l.useRef)(!1),i=(0,l.useRef)([]),f=(0,l.useRef)(o);return f.current=o,(0,l.useLayoutEffect)(()=>{g.current===!1&&P.current===!0&&o.forEach((p,v)=>{const b=i.current[v];p!==b&&(T(b,null),T(p,c.current))}),i.current=o},o),(0,l.useLayoutEffect)(()=>{g.current=!1}),(0,l.useCallback)(p=>{T(c,p),g.current=!0,P.current=p!==null;const v=p?f.current:i.current;for(const b of v)T(b,p)},[])}},"../../packages/videopress/src/client/components/timestamp-control/stories/index.stories.tsx":(k,S,e)=>{var B,I,V,R,L,U,K,Z,A,W,N,M,z,n,a,s,t,_,d,u,D;e.r(S),e.d(S,{__namedExportsOrder:()=>r,_default:()=>f,changingValueExternally:()=>m,customTooltip:()=>E,decimalPlaces:()=>p,default:()=>g,disabled:()=>v,showTooltip:()=>j,withMarks:()=>b});var l=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/range-control/index.js"),T=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),y=e("../../packages/videopress/src/client/components/timestamp-control/index.tsx"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=`import { RangeControl } from '@wordpress/components';
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
`,P={_default:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},decimalPlaces:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},disabled:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},withMarks:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},showTooltip:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},customTooltip:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},changingValueExternally:{startLoc:{col:71,line:84},endLoc:{col:1,line:91},startBody:{col:71,line:84},endBody:{col:1,line:91}}};const g={parameters:{storySource:{source:`import { RangeControl } from '@wordpress/components';
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
};`,locationsMap:{default:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"decimal-places":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},disabled:{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"with-marks":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"show-tooltip":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"custom-tooltip":{startLoc:{col:58,line:9},endLoc:{col:1,line:11},startBody:{col:58,line:9},endBody:{col:1,line:11}},"changing-value-externally":{startLoc:{col:71,line:84},endLoc:{col:1,line:91},startBody:{col:71,line:84},endBody:{col:1,line:91}}}}},title:"Packages/VideoPress/Timestamp Control",component:y.ZP},i=h=>(0,o.jsx)(y.ZP,{...h});i.displayName="Template";const f=i.bind({});f.args={label:"Video frame",help:"Use the control to set timestamp of the video frame.",max:3600*1e3*2,value:236*1e3+125,wait:100,decimalPlaces:void 0,fineAdjustment:50,disabled:!1,autoHideTimeInput:!0,onChange:h=>{console.log({newTime:h})},onDebounceChange:h=>{console.log({newDebouncedTime:h})}},f.storyName="Timestamp Control";const p=i.bind({});p.args={value:3500,max:1e3*5,decimalPlaces:2};const v=i.bind({});v.args={max:3600*1e3*2,value:3600*1e3+15*60*1e3+43*1e3,disabled:!0};const b=i.bind({});b.args={value:3500,max:1e3*10,marksEvery:1e3,fineAdjustment:200};const j=i.bind({});j.args={value:8e4,max:1e3*100,renderTooltip:!0};const E=i.bind({});E.args={value:1e3*50,max:1e3*80,fineAdjustment:200,renderTooltip:h=>(0,o.jsxs)("span",{children:[h/1e3," seconds"]})};const m=(h=>{const[O,w]=(0,T.useState)(h.value);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y.ZP,{...h,label:"TimestampControl component",help:"The value is handled internally by the component.",value:O,onDebounceChange:w}),(0,o.jsx)("br",{}),(0,o.jsx)(l.Z,{label:"RangeControl component",help:"The value is handled externally, and passed to the <TimestampControl /> above component.",value:O,onChange:w,max:h.max})]})}).bind({});m.args={value:3500,max:1e3*5,decimalPlaces:2,wait:100},f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(V=(I=f.parameters)==null?void 0:I.docs)==null?void 0:V.source}}},p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(U=(L=p.parameters)==null?void 0:L.docs)==null?void 0:U.source}}},v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(A=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:A.source}}},b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(M=(N=b.parameters)==null?void 0:N.docs)==null?void 0:M.source}}},j.parameters={...j.parameters,docs:{...(z=j.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(a=(n=j.parameters)==null?void 0:n.docs)==null?void 0:a.source}}},E.parameters={...E.parameters,docs:{...(s=E.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(_=(t=E.parameters)==null?void 0:t.docs)==null?void 0:_.source}}},m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <>
            <TimestampControl {...args} label="TimestampControl component" help="The value is handled internally by the component." value={value} onDebounceChange={setValue} />
            <br />
            <RangeControl label="RangeControl component" help="The value is handled externally, and passed to the <TimestampControl /> above component." value={value} onChange={setValue} max={args.max} />
        </>;
}`,...(D=(u=m.parameters)==null?void 0:u.docs)==null?void 0:D.source}}};const r=["_default","decimalPlaces","disabled","withMarks","showTooltip","customTooltip","changingValueExternally"]},"../../packages/videopress/src/client/components/timestamp-control/index.tsx":(k,S,e)=>{e.d(S,{ZP:()=>z});var l=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js"),T=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/hooks.js"),y=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/number-control/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/text-control/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/range-control/index.js"),P=e("../../../node_modules/.pnpm/@wordpress+compose@6.24.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),g=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),f=e.n(i);function p(n){const a=Math.floor(n/36e5),s=Math.floor(n/6e4)%60,t=Math.floor(n/1e3)%60,_=Math.floor(n/10)%100;return[a>0?a.toString().padStart(2,"0")+":":"",a>0||s>0?s.toString().padStart(2,"0")+":":"",t.toString().padStart(2,"0"),"."+_.toString().padStart(2,"0")].join("")}var v=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(v),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/timestamp-control/style.module.scss"),E={};E.insert="head",E.singleton=!1;var Q=b()(j.Z,E);const m=j.Z.locals||{};var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function B(n){const{help:a,id:s,...t}=n,_=(0,P.Z)(l.ZP,"wp-components-base-control",s),d=typeof a=="string"?"aria-describedby":"aria-details";return{baseControlProps:{id:_,help:a,...t},controlProps:{id:_,...a?{[d]:`${_}__help`}:{}}}}const I=T.u||B,V=n=>{if(y.Z)return(0,r.jsx)(y.Z,{...n});const a={...n};return["spinControls","isPressEnterToChange","isDragEnabled","isShiftStepEnabled","__unstableStateReducer"].forEach(s=>delete a[s]),(0,r.jsx)(o.Z,{...a})};V.displayName="NumberControl";const R=({char:n=":"})=>(0,r.jsx)("span",{className:m["timestamp-control-divider"],children:n});R.displayName="TimeDivider";const L="CHANGE",U="COMMIT",K="PRESS_DOWN",Z="PRESS_UP",A=n=>(a,s)=>{const t={...a};return(s.type===U||s.type===Z||s.type===K||s.type===L)&&t.value!==void 0&&(t.value=t.value.toString().padStart(n,"0")),t};function W(n,a,s){n>s&&(n=s);const t=Number.isNaN(n),_=t||typeof a=="undefined"?0:Math.floor(n%1e3/+`1e${3-a}`);return{hh:t?0:Math.floor(n/(1e3*60*60)%24),mm:t?0:Math.floor(n/(1e3*60)%60),ss:t?0:Math.floor(n/1e3%60),decimal:_}}const N=({onChange:n,disabled:a,value:s,max:t,autoHideTimeInput:_=!0,decimalPlaces:d})=>{const u={value:W(s,d,t)},D=t>60*60*1e3,h=t>60*1e3,O=w=>x=>{if(typeof x=="string"&&!isNaN(parseInt(x,10))&&(x=parseInt(x,10)),w==="hh"&&x>99||(w==="mm"||w==="ss")&&x>59||w==="decimal"&&x>+`1e${d}`-1||typeof x=="string")return;u.value={...W(s,d,t),[w]:x};const H=u.value.decimal?u.value.decimal*+`1e${3-d}`:0;n==null||n((u.value.hh*3600+u.value.mm*60+u.value.ss)*1e3+H)};return(0,r.jsxs)("div",{className:f()(m["timestamp-input-wrapper"],{[m["is-disabled"]]:a}),children:[(D||!_)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(V,{className:m["timestamp-control-input"],disabled:a,min:0,max:99,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:A(2),value:String(u.value.hh).padStart(2,"0"),onChange:O("hh")}),(0,r.jsx)(R,{})]}),(h||!_)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(V,{className:m["timestamp-control-input"],disabled:a,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:A(2),value:String(u.value.mm).padStart(2,"0"),onChange:O("mm")}),(0,r.jsx)(R,{})]}),(0,r.jsx)(V,{className:m["timestamp-control-input"],disabled:a,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:A(2),value:String(u.value.ss).padStart(2,"0"),onChange:O("ss")}),d&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(R,{char:"."}),(0,r.jsx)(V,{className:m["timestamp-control-input"],style:{"--input-width":`${12*d}px`},disabled:a,min:0,max:Number("9".repeat(d)),step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"0".repeat(d),isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:A(d),value:String(u.value.decimal).padStart(d,"0"),onChange:O("decimal")})]})]})};N.displayName="TimestampInput";const M=n=>{const{disabled:a=!1,min:s=0,max:t=Number.MAX_SAFE_INTEGER,value:_,onChange:d,onDebounceChange:u,wait:D=1e3,fineAdjustment:h=50,autoHideTimeInput:O=!0,decimalPlaces:w,marksEvery:x,renderTooltip:H}=n,F=(0,g.useRef)(),[G,q]=(0,g.useState)(_);(0,g.useEffect)(()=>{q(_)},[_]);const{baseControlProps:Y}=(I==null?void 0:I(n))||{},X=(0,g.useCallback)(C=>{clearTimeout(F==null?void 0:F.current),C>t&&(C=t),C<s&&(C=s),q(C),d==null||d(C),F.current=setTimeout(u==null?void 0:u.bind(null,C),D)},[u,d,t,s,D]),J=[];if(x)for(let C=s;C<=t;C+=x)J.push({value:C,label:null});const $=typeof H=="function"?H:C=>p(C);return(0,r.jsx)(l.ZP,{...Y,children:(0,r.jsxs)("div",{className:m["timestamp-control__controls-wrapper"],children:[V&&(0,r.jsx)(N,{disabled:a,max:t,value:G,onChange:X,autoHideTimeInput:O,decimalPlaces:w}),(0,r.jsx)(c.Z,{disabled:a,className:m["timestamp-range-control"],min:s,step:h,initialPosition:G,value:G,max:t,withInputField:!1,onChange:X,marks:x?J:void 0,renderTooltipContent:$,...H===!1?{showTooltip:!1}:{}})]})})};M.displayName="TimestampControl";const z=M;try{N.displayName="TimestampInput",N.__docgenInfo={description:"",displayName:"TimestampInput",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"]={docgenInfo:N.__docgenInfo,name:"TimestampInput",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"})}catch(n){}try{M.displayName="TimestampControl",M.__docgenInfo={description:"TimestampControl component",displayName:"TimestampControl",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"]={docgenInfo:M.__docgenInfo,name:"TimestampControl",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"})}catch(n){}try{timestampcontrol.displayName="timestampcontrol",timestampcontrol.__docgenInfo={description:"TimestampControl component",displayName:"timestampcontrol",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"]={docgenInfo:timestampcontrol.__docgenInfo,name:"timestampcontrol",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"})}catch(n){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/timestamp-control/style.module.scss":(k,S,e)=>{e.d(S,{Z:()=>P});var l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),T=e.n(l),y=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(y),c=o()(T());c.push([k.id,".zuO3RgAd20yV6c0cEjwU{--input-width: 24px;display:flex;align-items:center;gap:8px}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child{margin-bottom:0;flex-grow:2}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-base-control__field,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-base-control__field{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-range-control__wrapper,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-range-control__wrapper{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .components-range-control__marks{top:13px}.xiVP4KSb56I10368tN0v{display:flex;align-items:center;border-color:#949494;background-color:#fff;border-style:solid;justify-content:space-around;border-width:1px;padding:0px}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr{padding:0 1px;margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr input{max-width:var(--input-width)}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field .components-text-control__input{border:none;text-align:center;padding:0}.xiVP4KSb56I10368tN0v .components-input-control:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .components-input-control__input{padding-left:0 !important;padding-right:0 !important;text-align:center}.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-outer-spin-button,.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-inner-spin-button{-webkit-appearance:none}.xiVP4KSb56I10368tN0v .components-input-control__input[type=number]{-webkit-appearance:textfield;appearance:textfield;-moz-appearance:textfield}.xiVP4KSb56I10368tN0v .components-input-control__backdrop{border-style:none !important}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ{background-color:#f0f0f0}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ .PjODCu3uI7wWSXk4MiIH{color:#949494}.PjODCu3uI7wWSXk4MiIH{font-weight:900}",""]),c.locals={"timestamp-control__controls-wrapper":"zuO3RgAd20yV6c0cEjwU","timestamp-range-control":"m7UQ82mfQtaGf0Uxn62H","timestamp-input-wrapper":"xiVP4KSb56I10368tN0v","timestamp-control-input":"J6r6Ls3WNV_CSbuzeLyr","is-disabled":"XtdqGJfT1AOZ9KRjf1TZ","timestamp-control-divider":"PjODCu3uI7wWSXk4MiIH"};const P=c}}]);})();
