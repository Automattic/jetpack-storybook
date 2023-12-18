"use strict";(()=>{var N=Object.defineProperty;var H=(_,n,t)=>n in _?N(_,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):_[n]=t;var G=(_,n,t)=>(H(_,typeof n!="symbol"?n+"":n,t),t);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9114],{"../../plugins/boost/app/assets/src/js/features/performance-history/stories/graph-component.stories.tsx":(_,n,t)=>{var w,R,V;t.r(n),t.d(n,{__namedExportsOrder:()=>M,_default:()=>y,default:()=>I});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=t("../components/components/boost-score-graph/index.tsx"),d=t("../components/components/spinner/index.jsx"),a=t("../components/components/popover/index.tsx"),r=t("../components/components/gridicon/index.tsx"),c=t("../components/components/button/index.tsx"),m=t("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js"),f=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),S=t.n(f),b=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/boost/app/assets/src/js/features/performance-history/graph-component/graph-component.module.scss"),e={};e.insert="head",e.singleton=!1;var p=S()(b.Z,e);const i=b.Z.locals||{};var l=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const h=m.__,u=({children:g})=>(0,l.jsxs)("div",{className:i.dummy,children:[g,(0,l.jsx)(s.Z,{isPlaceholder:!0})]});u.displayName="DummyGraph";const x=({periods:g=[],startDate:O=0,endDate:A=0,needsUpgrade:D,handleUpgrade:P,isFreshStart:B,handleDismissFreshStart:U,isLoading:T})=>T?(0,l.jsx)("div",{className:i.dummy,children:(0,l.jsx)(d.Z,{color:"#000000"})}):D?(0,l.jsx)(u,{children:(0,l.jsx)(a.Z,{icon:(0,l.jsx)(r.Z,{icon:"lock"}),action:(0,l.jsx)(c.Z,{onClick:P,children:h("Upgrade now!","jetpack-boost")}),children:(0,l.jsx)("p",{children:h("Upgrade and learn more about your site performance over time.","jetpack-boost")})})}):B?(0,l.jsx)(u,{children:(0,l.jsx)(a.Z,{icon:(0,l.jsx)(r.Z,{icon:"checkmark"}),action:(0,l.jsx)(c.Z,{onClick:U,children:h("Okay, got it!","jetpack-boost")}),children:(0,l.jsxs)("p",{children:[h("Hello there! Jetpack Boost premium has been activated.","jetpack-boost"),(0,l.jsx)("br",{}),h("Your scores will be recorded from now on.","jetpack-boost")]})})}):(0,l.jsx)(s.Z,{periods:g,startDate:O,endDate:A});x.displayName="GraphComponent";const k=x;try{graphcomponent.displayName="graphcomponent",graphcomponent.__docgenInfo={description:"",displayName:"graphcomponent",props:{periods:{defaultValue:{value:"[]"},description:"",name:"periods",required:!1,type:{name:"Period[]"}},startDate:{defaultValue:{value:"0"},description:"",name:"startDate",required:!1,type:{name:"number"}},endDate:{defaultValue:{value:"0"},description:"",name:"endDate",required:!1,type:{name:"number"}},needsUpgrade:{defaultValue:null,description:"",name:"needsUpgrade",required:!0,type:{name:"boolean"}},handleUpgrade:{defaultValue:null,description:"",name:"handleUpgrade",required:!0,type:{name:"() => void"}},isFreshStart:{defaultValue:null,description:"",name:"isFreshStart",required:!0,type:{name:"boolean"}},handleDismissFreshStart:{defaultValue:null,description:"",name:"handleDismissFreshStart",required:!0,type:{name:"() => void"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/performance-history/graph-component/graph-component.tsx#graphcomponent"]={docgenInfo:graphcomponent.__docgenInfo,name:"graphcomponent",path:"../../plugins/boost/app/assets/src/js/features/performance-history/graph-component/graph-component.tsx#graphcomponent"})}catch(g){}var v=`import React, { useEffect } from 'react';
import type { Meta } from '@storybook/react';
import GraphComponent from '../graph-component/graph-component';

const exampleRawResponse = {
	data: {
		_meta: {
			start: 1689772803000,
			end: 1690647000000,
		},
		periods: [
			{
				timestamp: 1690636803000,
				dimensions: {
					desktop_overall_score: 86,
					mobile_overall_score: 52,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1689772803000,
				dimensions: {
					desktop_overall_score: 75,
					mobile_overall_score: 52,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1689859203000,
				dimensions: {
					desktop_overall_score: 72,
					mobile_overall_score: 49,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1689945603000,
				dimensions: {
					desktop_overall_score: 20,
					mobile_overall_score: 30,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690032003000,
				dimensions: {
					desktop_overall_score: 72,
					mobile_overall_score: 40,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690118403000,
				dimensions: {
					desktop_overall_score: 55,
					mobile_overall_score: 45,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690204803000,
				dimensions: {
					desktop_overall_score: 75,
					mobile_overall_score: 52,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690291203000,
				dimensions: {
					desktop_overall_score: 70,
					mobile_overall_score: 50,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690377603000,
				dimensions: {
					desktop_overall_score: 75,
					mobile_overall_score: 90,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690464003000,
				dimensions: {
					desktop_overall_score: 80,
					mobile_overall_score: 60,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690550403000,
				dimensions: {
					desktop_overall_score: 85,
					mobile_overall_score: 60,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
		],
	},
};

const meta: Meta< typeof GraphComponent > = {
	title: 'Plugins/Boost/Performance History Graph',
	component: GraphComponent,
	argTypes: {
		startDate: { control: 'date' },
		endDate: { control: 'date' },
		periods: { control: 'object' },
		isLoading: { control: 'boolean' },
		needsUpgrade: { control: 'boolean' },
		isFreshStart: { control: 'boolean' },
	},
	decorators: [
		Story => (
			<div style={ { maxWidth: '1320px', margin: '200px auto', fontSize: '16px' } }>
				<Story />
			</div>
		),
	],
};

const defaultValues = {
	startDate: exampleRawResponse.data._meta.start,
	endDate: exampleRawResponse.data._meta.end,
	periods: exampleRawResponse.data.periods,
	isLoading: false,
	needsUpgrade: false,
	isFreshStart: false,
};

export default meta;

const Template = args => {
	const [isFreshStart, setIsFreshStart] = React.useState( args.isFreshStart );
	const [needsUpgrade, setNeedsUpgrade] = React.useState( args.needsUpgrade );

	// Update the state when the args change
	useEffect( () => {
		setIsFreshStart( args.isFreshStart );
		setNeedsUpgrade( args.needsUpgrade );
	}, [args.isFreshStart, args.needsUpgrade] );

	args.handleUpgrade = () => {
		setNeedsUpgrade( false );
	}
	args.handleDismissFreshStart = () => {
		setIsFreshStart( false );
	}
	return <GraphComponent { ...args } isFreshStart={isFreshStart} needsUpgrade={needsUpgrade} />
};
export const _default = Template.bind( {} );
_default.args = defaultValues;
`,L={_default:{startLoc:{col:17,line:190},endLoc:{col:1,line:207},startBody:{col:17,line:190},endBody:{col:1,line:207}}};const j={data:{_meta:{start:1689772803e3,end:1690647e6},periods:[{timestamp:1690636803e3,dimensions:{desktop_overall_score:86,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689772803e3,dimensions:{desktop_overall_score:75,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689859203e3,dimensions:{desktop_overall_score:72,mobile_overall_score:49,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689945603e3,dimensions:{desktop_overall_score:20,mobile_overall_score:30,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690032003e3,dimensions:{desktop_overall_score:72,mobile_overall_score:40,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690118403e3,dimensions:{desktop_overall_score:55,mobile_overall_score:45,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690204803e3,dimensions:{desktop_overall_score:75,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690291203e3,dimensions:{desktop_overall_score:70,mobile_overall_score:50,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690377603e3,dimensions:{desktop_overall_score:75,mobile_overall_score:90,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690464003e3,dimensions:{desktop_overall_score:80,mobile_overall_score:60,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690550403e3,dimensions:{desktop_overall_score:85,mobile_overall_score:60,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}}]}},z={parameters:{storySource:{source:`import React, { useEffect } from 'react';
import type { Meta } from '@storybook/react';
import GraphComponent from '../graph-component/graph-component';

const exampleRawResponse = {
	data: {
		_meta: {
			start: 1689772803000,
			end: 1690647000000,
		},
		periods: [
			{
				timestamp: 1690636803000,
				dimensions: {
					desktop_overall_score: 86,
					mobile_overall_score: 52,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1689772803000,
				dimensions: {
					desktop_overall_score: 75,
					mobile_overall_score: 52,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1689859203000,
				dimensions: {
					desktop_overall_score: 72,
					mobile_overall_score: 49,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1689945603000,
				dimensions: {
					desktop_overall_score: 20,
					mobile_overall_score: 30,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690032003000,
				dimensions: {
					desktop_overall_score: 72,
					mobile_overall_score: 40,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690118403000,
				dimensions: {
					desktop_overall_score: 55,
					mobile_overall_score: 45,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690204803000,
				dimensions: {
					desktop_overall_score: 75,
					mobile_overall_score: 52,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690291203000,
				dimensions: {
					desktop_overall_score: 70,
					mobile_overall_score: 50,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690377603000,
				dimensions: {
					desktop_overall_score: 75,
					mobile_overall_score: 90,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690464003000,
				dimensions: {
					desktop_overall_score: 80,
					mobile_overall_score: 60,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690550403000,
				dimensions: {
					desktop_overall_score: 85,
					mobile_overall_score: 60,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
		],
	},
};

const meta: Meta< typeof GraphComponent > = {
	title: 'Plugins/Boost/Performance History Graph',
	component: GraphComponent,
	argTypes: {
		startDate: { control: 'date' },
		endDate: { control: 'date' },
		periods: { control: 'object' },
		isLoading: { control: 'boolean' },
		needsUpgrade: { control: 'boolean' },
		isFreshStart: { control: 'boolean' },
	},
	decorators: [
		Story => (
			<div style={ { maxWidth: '1320px', margin: '200px auto', fontSize: '16px' } }>
				<Story />
			</div>
		),
	],
};

const defaultValues = {
	startDate: exampleRawResponse.data._meta.start,
	endDate: exampleRawResponse.data._meta.end,
	periods: exampleRawResponse.data.periods,
	isLoading: false,
	needsUpgrade: false,
	isFreshStart: false,
};

export default meta;

const Template = args => {
	const [isFreshStart, setIsFreshStart] = React.useState( args.isFreshStart );
	const [needsUpgrade, setNeedsUpgrade] = React.useState( args.needsUpgrade );

	// Update the state when the args change
	useEffect( () => {
		setIsFreshStart( args.isFreshStart );
		setNeedsUpgrade( args.needsUpgrade );
	}, [args.isFreshStart, args.needsUpgrade] );

	args.handleUpgrade = () => {
		setNeedsUpgrade( false );
	}
	args.handleDismissFreshStart = () => {
		setIsFreshStart( false );
	}
	return <GraphComponent { ...args } isFreshStart={isFreshStart} needsUpgrade={needsUpgrade} />
};
export const _default = Template.bind( {} );
_default.args = defaultValues;
`,locationsMap:{default:{startLoc:{col:17,line:190},endLoc:{col:1,line:207},startBody:{col:17,line:190},endBody:{col:1,line:207}}}}},title:"Plugins/Boost/Performance History Graph",component:k,argTypes:{startDate:{control:"date"},endDate:{control:"date"},periods:{control:"object"},isLoading:{control:"boolean"},needsUpgrade:{control:"boolean"},isFreshStart:{control:"boolean"}},decorators:[g=>(0,l.jsx)("div",{style:{maxWidth:"1320px",margin:"200px auto",fontSize:"16px"},children:(0,l.jsx)(g,{})})]},E={startDate:j.data._meta.start,endDate:j.data._meta.end,periods:j.data.periods,isLoading:!1,needsUpgrade:!1,isFreshStart:!1},I=z,C=g=>{const[O,A]=o.useState(g.isFreshStart),[D,P]=o.useState(g.needsUpgrade);return(0,o.useEffect)(()=>{A(g.isFreshStart),P(g.needsUpgrade)},[g.isFreshStart,g.needsUpgrade]),g.handleUpgrade=()=>{P(!1)},g.handleDismissFreshStart=()=>{A(!1)},(0,l.jsx)(k,{...g,isFreshStart:O,needsUpgrade:D})};C.displayName="Template";const y=C.bind({});y.args=E,y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [isFreshStart, setIsFreshStart] = React.useState(args.isFreshStart);
  const [needsUpgrade, setNeedsUpgrade] = React.useState(args.needsUpgrade);

  // Update the state when the args change
  useEffect(() => {
    setIsFreshStart(args.isFreshStart);
    setNeedsUpgrade(args.needsUpgrade);
  }, [args.isFreshStart, args.needsUpgrade]);
  args.handleUpgrade = () => {
    setNeedsUpgrade(false);
  };
  args.handleDismissFreshStart = () => {
    setIsFreshStart(false);
  };
  return <GraphComponent {...args} isFreshStart={isFreshStart} needsUpgrade={needsUpgrade} />;
}`,...(V=(R=y.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};const M=["_default"]},"../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(_,n,t)=>{t.d(n,{ZP:()=>u});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=t.n(s),a=t("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),r=t("../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),c=t("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),m=t("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function f(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const S=r.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,b=(0,a.Z)("svg",{target:"ea4tfvq2"})("width:",c.Z.spinnerSize,"px;height:",c.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",m.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),e={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},p=(0,a.Z)("circle",{target:"ea4tfvq1"})(e,";stroke:",m.D.gray[300],";"),i=(0,a.Z)("path",{target:"ea4tfvq0"})(e,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",S,";");function l({className:x,...k},v){return(0,o.createElement)(b,{className:d()("components-spinner",x),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...k,ref:v},(0,o.createElement)(p,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,o.createElement)(i,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const u=(0,o.forwardRef)(l)},"../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(_,n,t)=>{t.d(n,{Z:()=>m});var o=t("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),s=t("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const d="36px",a="12px",r={controlSurfaceColor:s.D.white,controlTextActiveColor:s.D.theme.accent,controlPaddingX:a,controlPaddingXLarge:`calc(${a} * 1.3334)`,controlPaddingXSmall:`calc(${a} / 1.3334)`,controlBackgroundColor:s.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${s.D.theme.accent}`,controlDestructiveBorderColor:s.D.alert.red,controlHeight:d,controlHeightXSmall:`calc( ${d} * 0.6 )`,controlHeightSmall:`calc( ${d} * 0.8 )`,controlHeightLarge:`calc( ${d} * 1.2 )`,controlHeightXLarge:`calc( ${d} * 1.4 )`},c={toggleGroupControlBackgroundColor:r.controlBackgroundColor,toggleGroupControlBorderColor:s.D.ui.border,toggleGroupControlBackdropBackgroundColor:r.controlSurfaceColor,toggleGroupControlBackdropBorderColor:s.D.ui.border,toggleGroupControlButtonColorActive:r.controlBackgroundColor},m=Object.assign({},r,c,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,o.D)(2)}`,cardPaddingSmall:`${(0,o.D)(4)}`,cardPaddingMedium:`${(0,o.D)(4)} ${(0,o.D)(6)}`,cardPaddingLarge:`${(0,o.D)(6)} ${(0,o.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:s.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:s.D.white,surfaceColor:s.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(_,n,t)=>{t.d(n,{Z:()=>d});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function s({icon:a,size:r=24,...c},m){return(0,o.cloneElement)(a,{width:r,height:r,...c,ref:m})}const d=(0,o.forwardRef)(s)},"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(_,n,t)=>{t.d(n,{Z:()=>a});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=t("../../../node_modules/.pnpm/@wordpress+primitives@3.45.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const a=(0,o.createElement)(s.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(s.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../components/components/spinner/index.jsx":(_,n,t)=>{t.d(n,{Z:()=>p});var o=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),s=t.n(o),d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=t.n(a),c=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/spinner/style.scss"),m={};m.insert="head",m.singleton=!1;var f=r()(c.Z,m);const S=c.Z.locals||{};var b=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const e=i=>{const l=i.className+" jp-components-spinner",h={width:i.size,height:i.size,fontSize:i.size,borderTopColor:i.color},u={borderTopColor:i.color,borderRightColor:i.color};return(0,b.jsx)("div",{className:l,children:(0,b.jsx)("div",{className:"jp-components-spinner__outer",style:h,children:(0,b.jsx)("div",{className:"jp-components-spinner__inner",style:u})})})};e.displayName="Spinner",e.propTypes={color:s().string,className:s().string,size:s().number},e.defaultProps={color:"#FFFFFF",className:"",size:20};const p=e;e.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{color:{defaultValue:{value:"'#FFFFFF'",computed:!1},description:"The spinner color.",type:{name:"string"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"CSS class names.",type:{name:"string"},required:!1},size:{defaultValue:{value:"20",computed:!1},description:"The spinner size.",type:{name:"number"},required:!1}}}},"../components/components/button/index.tsx":(_,n,t)=>{t.d(n,{Z:()=>u});var o=t("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),s=t("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),d=t("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),a=t("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),r=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),c=t.n(r),m=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),S=t.n(f),b=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),e={};e.insert="head",e.singleton=!1;var p=S()(b.Z,e);const i=b.Z.locals||{};var l=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const h=(0,m.forwardRef)((x,k)=>{var T,F;const{children:v,variant:L="primary",size:j="normal",weight:z="bold",icon:E,iconSize:I,disabled:C,isDestructive:y,isLoading:M,isExternalLink:w,className:R,text:V,fullWidth:g,...O}=x,A=c()(i.button,R,{[i.normal]:j==="normal",[i.small]:j==="small",[i.icon]:!!E,[i.loading]:M,[i.regular]:z==="regular",[i["full-width"]]:g,[i["is-icon-button"]]:!!E&&!v});O.ref=k;const D=j==="normal"?20:16,P=w&&(0,l.jsx)(d.Z,{size:D,icon:a.Z,className:i["external-icon"]}),B=w?"_blank":void 0,U=(v==null?void 0:v[0])&&v[0]!==null&&((F=(T=v==null?void 0:v[0])==null?void 0:T.props)==null?void 0:F.className)!=="components-tooltip";return(0,l.jsxs)(o.ZP,{target:B,variant:L,className:c()(A,{"has-text":!!E&&U}),icon:w?void 0:E,iconSize:I,disabled:C,"aria-disabled":C,isDestructive:y,text:V,...O,children:[M&&(0,l.jsx)(s.ZP,{}),(0,l.jsx)("span",{children:v}),P]})});h.displayName="Button";const u=h;try{h.displayName="Button",h.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:h.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(x){}},"../components/components/gridicon/index.tsx":(_,n,t)=>{t.d(n,{Z:()=>l});var o=t("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js"),s=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=t.n(s),a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=t.n(r),m=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/gridicon/style.scss"),f={};f.insert="head",f.singleton=!1;var S=c()(m.Z,f);const b=m.Z.locals||{};var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const p=o.__;class i extends a.Component{needsOffset(u,x){return["gridicons-arrow-left","gridicons-arrow-right","gridicons-calendar","gridicons-cart","gridicons-folder","gridicons-info","gridicons-info-outline","gridicons-posts","gridicons-star-outline","gridicons-star"].indexOf(u)>=0?x%18===0:!1}getSVGDescription(u){if("description"in this.props)return this.props.description;switch(u){default:return"";case"gridicons-audio":return p("Has audio.","jetpack");case"gridicons-arrow-left":return p("Arrow left","jetpack");case"gridicons-arrow-right":return p("Arrow right","jetpack");case"gridicons-calendar":return p("Is an event.","jetpack");case"gridicons-cart":return p("Is a product.","jetpack");case"chevron-down":return p("Show filters","jetpack");case"gridicons-comment":return p("Matching comment.","jetpack");case"gridicons-cross":return p("Close.","jetpack");case"gridicons-filter":return p("Toggle search filters.","jetpack");case"gridicons-folder":return p("Category","jetpack");case"gridicons-info":case"gridicons-info-outline":return p("Information.","jetpack");case"gridicons-image-multiple":return p("Has multiple images.","jetpack");case"gridicons-image":return p("Has an image.","jetpack");case"gridicons-page":return p("Page","jetpack");case"gridicons-post":return p("Post","jetpack");case"gridicons-jetpack-search":case"gridicons-search":return p("Magnifying Glass","jetpack");case"gridicons-tag":return p("Tag","jetpack");case"gridicons-video":return p("Has a video.","jetpack")}}renderIcon(u){switch(u){default:return null;case"gridicons-audio":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M8 4v10.184C7.686 14.072 7.353 14 7 14c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V7h7v4.184c-.314-.112-.647-.184-1-.184-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V4H8z"})});case"gridicons-arrow-left":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})});case"gridicons-arrow-right":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"})});case"gridicons-block":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12c0-4.418 3.582-8 8-8 1.848 0 3.545.633 4.9 1.686L5.686 16.9C4.633 15.545 4 13.848 4 12zm8 8c-1.848 0-3.546-.633-4.9-1.686L18.314 7.1C19.367 8.455 20 10.152 20 12c0 4.418-3.582 8-8 8z"})});case"gridicons-calendar":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.105 0-2 .896-2 2v13c0 1.104.895 2 2 2h14c1.104 0 2-.896 2-2V6c0-1.104-.896-2-2-2zm0 15H5V8h14v11z"})});case"gridicons-cart":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M9 20c0 1.1-.9 2-2 2s-1.99-.9-1.99-2S5.9 18 7 18s2 .9 2 2zm8-2c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm.396-5c.937 0 1.75-.65 1.952-1.566L21 5H7V4c0-1.105-.895-2-2-2H3v2h2v11c0 1.105.895 2 2 2h12c0-1.105-.895-2-2-2H7v-2h10.396z"})});case"gridicons-checkmark":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M11 17.768l-4.884-4.884 1.768-1.768L11 14.232l8.658-8.658C17.823 3.39 15.075 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.528-.353-2.97-.966-4.266L11 17.768z"})});case"gridicons-chevron-left":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M16.443 7.41L15.0399 6L9.06934 12L15.0399 18L16.443 16.59L11.8855 12L16.443 7.41Z"})});case"gridicons-chevron-right":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M10.2366 6L8.8335 7.41L13.391 12L8.8335 16.59L10.2366 18L16.2072 12L10.2366 6Z"})});case"gridicons-chevron-down":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586"})});case"gridicons-comment":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M3 6v9c0 1.105.895 2 2 2h9v5l5.325-3.804c1.05-.75 1.675-1.963 1.675-3.254V6c0-1.105-.895-2-2-2H5c-1.105 0-2 .895-2 2z"})});case"gridicons-computer":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M20 2H4c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h6v2H7v2h10v-2h-3v-2h6c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2zm0 14H4V4h16v12z"})});case"gridicons-cross":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M18.36 19.78L12 13.41l-6.36 6.37-1.42-1.42L10.59 12 4.22 5.64l1.42-1.42L12 10.59l6.36-6.36 1.41 1.41L13.41 12l6.36 6.36z"})});case"gridicons-filter":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M10 19h4v-2h-4v2zm-4-6h12v-2H6v2zM3 5v2h18V5H3z"})});case"gridicons-folder":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M18 19H6c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2h7c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2z"})});case"gridicons-image":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M13 9.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zM22 6v12c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2V6c0-1.105.895-2 2-2h16c1.105 0 2 .895 2 2zm-2 0H4v7.444L8 9l5.895 6.55 1.587-1.85c.798-.932 2.24-.932 3.037 0L20 15.426V6z"})});case"gridicons-image-multiple":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M15 7.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5S17.328 9 16.5 9 15 8.328 15 7.5zM4 20h14c0 1.105-.895 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.105.895-2 2-2v14zM22 4v12c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zM8 4v6.333L11 7l4.855 5.395.656-.73c.796-.886 2.183-.886 2.977 0l.513.57V4H8z"})});case"gridicons-info":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})});case"gridicons-info-outline":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M13 9h-2V7h2v2zm0 2h-2v6h2v-6zm-1-7c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8m0-2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"})});case"gridicons-jetpack-search":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M0 9.257C0 4.15 4.151 0 9.257 0c5.105 0 9.256 4.151 9.256 9.257a9.218 9.218 0 01-2.251 6.045l.034.033h1.053L24 22.01l-1.986 1.989-6.664-6.662v-1.055l-.033-.033a9.218 9.218 0 01-6.06 2.264C4.15 18.513 0 14.362 0 9.257zm4.169 1.537h4.61V1.82l-4.61 8.973zm5.547-3.092v8.974l4.61-8.974h-4.61z"})});case"gridicons-phone":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M16 2H8c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2zm-3 19h-2v-1h2v1zm3-2H8V5h8v14z"})});case"gridicons-pages":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M16 8H8V6h8v2zm0 2H8v2h8v-2zm4-6v12l-6 6H6c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zm-2 10V4H6v16h6v-4c0-1.105.895-2 2-2h4z"})});case"gridicons-posts":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M16 19H3v-2h13v2zm5-10H3v2h18V9zM3 5v2h11V5H3zm14 0v2h4V5h-4zm-6 8v2h10v-2H11zm-8 0v2h5v-2H3z"})});case"gridicons-search":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M21 19l-5.154-5.154C16.574 12.742 17 11.42 17 10c0-3.866-3.134-7-7-7s-7 3.134-7 7 3.134 7 7 7c1.42 0 2.742-.426 3.846-1.154L19 21l2-2zM5 10c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z"})});case"gridicons-star-outline":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M12 6.308l1.176 3.167.347.936.997.042 3.374.14-2.647 2.09-.784.62.27.963.91 3.25-2.813-1.872-.83-.553-.83.552-2.814 1.87.91-3.248.27-.962-.783-.62-2.648-2.092 3.374-.14.996-.04.347-.936L12 6.308M12 2L9.418 8.953 2 9.257l5.822 4.602L5.82 21 12 16.89 18.18 21l-2.002-7.14L22 9.256l-7.418-.305L12 2z"})});case"gridicons-star":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M12 2l2.582 6.953L22 9.257l-5.822 4.602L18.18 21 12 16.89 5.82 21l2.002-7.14L2 9.256l7.418-.304"})});case"gridicons-tag":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M20 2.007h-7.087c-.53 0-1.04.21-1.414.586L2.592 11.5c-.78.78-.78 2.046 0 2.827l7.086 7.086c.78.78 2.046.78 2.827 0l8.906-8.906c.376-.374.587-.883.587-1.413V4.007c0-1.105-.895-2-2-2zM17.007 9c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"})});case"gridicons-video":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M20 4v2h-2V4H6v2H4V4c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2v-2h2v2h12v-2h2v2c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zM6 16H4v-3h2v3zm0-5H4V8h2v3zm4 4V9l4.5 3-4.5 3zm10 1h-2v-3h2v3zm0-5h-2V8h2v3z"})});case"gridicons-lock":return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("g",{id:"lock",children:(0,e.jsx)("path",{d:"M18,8h-1V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H6c-1.105,0-2,0.895-2,2v10c0,1.105,0.895,2,2,2h12c1.105,0,2-0.895,2-2V10 C20,8.895,19.105,8,18,8z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M13,15.723V18h-2v-2.277c-0.595-0.346-1-0.984-1-1.723 c0-1.105,0.895-2,2-2s2,0.895,2,2C14,14.738,13.595,15.376,13,15.723z"})}),(0,e.jsx)("g",{id:"Layer_1"})]})}}render(){const{size:u=24,className:x=""}=this.props,k=this.props.height||u,v=this.props.width||u,L=this.props.style||{height:k,width:v},j="gridicons-"+this.props.icon,z=d()("gridicon",j,x,{"needs-offset":this.needsOffset(j,u)}),E=this.getSVGDescription(j);return(0,e.jsxs)("svg",{className:z,focusable:this.props.focusable,height:k,onClick:this.props.onClick,style:L,viewBox:"0 0 24 24",width:v,xmlns:"http://www.w3.org/2000/svg","aria-hidden":this.props["aria-hidden"],children:[E?(0,e.jsx)("desc",{children:E}):null,this.renderIcon(j)]})}}G(i,"defaultProps",{"aria-hidden":"false",focusable:"true"}),i.displayName="Gridicon";const l=i;try{i.displayName="Gridicon",i.__docgenInfo={description:"",displayName:"Gridicon",props:{icon:{defaultValue:null,description:"Icon name",name:"icon",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"HTML class name",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Description for SVG for screen readers",name:"description",required:!1,type:{name:"string"}},focusable:{defaultValue:{value:"true"},description:"Whether SVG is focussable",name:"focusable",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"SVG height",name:"height",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"VoidFunction"}},size:{defaultValue:null,description:"SVG width and height",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"SVG style",name:"style",required:!1,type:{name:"CSSProperties"}},width:{defaultValue:null,description:"SVG width",name:"width",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/gridicon/index.tsx#Gridicon"]={docgenInfo:i.__docgenInfo,name:"Gridicon",path:"../components/components/gridicon/index.tsx#Gridicon"})}catch(h){}},"../components/components/popover/index.tsx":(_,n,t)=>{t.d(n,{Z:()=>S});var o=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=t.n(o),d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/popover/style.scss"),a={};a.insert="head",a.singleton=!1;var r=s()(d.Z,a);const c=d.Z.locals||{};var m=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const f=({icon:b,children:e,action:p})=>(0,m.jsxs)("div",{className:"jp-popover",children:[(0,m.jsx)("div",{className:"jp-popover__icon",children:b}),(0,m.jsx)("div",{className:"jp-popover__body",children:e}),(0,m.jsx)("div",{className:"jp-popover__action",children:p})]});f.displayName="Popover";const S=f;try{popover.displayName="popover",popover.__docgenInfo={description:"",displayName:"popover",props:{action:{defaultValue:null,description:"",name:"action",required:!0,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/popover/index.tsx#popover"]={docgenInfo:popover.__docgenInfo,name:"popover",path:"../components/components/popover/index.tsx#popover"})}catch(b){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(_,n,t)=>{t.d(n,{Z:()=>c});var o=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=t.n(o),d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=t.n(d),r=a()(s());r.push([_.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),r.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const c=r},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/gridicon/style.scss":(_,n,t)=>{t.d(n,{Z:()=>c});var o=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=t.n(o),d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=t.n(d),r=a()(s());r.push([_.id,".gridicon{fill:currentColor;display:inline-block}.gridicon.needs-offset g{transform:translate(1px, 1px)}.gridicon.needs-offset-x g{transform:translate(1px, 0)}.gridicon.needs-offset-y g{transform:translate(0, 1px)}",""]);const c=r},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/popover/style.scss":(_,n,t)=>{t.d(n,{Z:()=>c});var o=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=t.n(o),d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=t.n(d),r=a()(s());r.push([_.id,'.jp-popover{width:600px;max-width:calc(100% - 32px);padding:16px;background-color:#fff;box-shadow:0px 1px 2px 0px rgba(0,0,0,.06),0px 4px 8px 0px rgba(0,0,0,.03);border:1px solid #dcdcde;border-radius:4px;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.jp-popover>*{margin:16px;clear:both}.jp-popover__body p{font-weight:400;line-height:1.6em;font-family:"SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif}',""]);const c=r},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/spinner/style.scss":(_,n,t)=>{t.d(n,{Z:()=>c});var o=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=t.n(o),d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=t.n(d),r=a()(s());r.push([_.id,"@keyframes rotate-spinner{100%{transform:rotate(360deg)}}.jp-components-spinner{display:flex;align-items:center}.jp-components-spinner__outer,.jp-components-spinner__inner{margin:auto;box-sizing:border-box;border:.1em solid rgba(0,0,0,0);border-radius:50%;animation:3s linear infinite;animation-name:rotate-spinner}.jp-components-spinner__outer{border-top-color:#fff}.jp-components-spinner__inner{width:100%;height:100%;border-top-color:#fff;border-right-color:#fff;opacity:.4}",""]);const c=r},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/boost/app/assets/src/js/features/performance-history/graph-component/graph-component.module.scss":(_,n,t)=>{t.d(n,{Z:()=>c});var o=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=t.n(o),d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=t.n(d),r=a()(s());r.push([_.id,".RWH4ytGzomJa_kl2YaAQ{position:relative;min-height:300px}.RWH4ytGzomJa_kl2YaAQ .jp-components-spinner{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}",""]),r.locals={dummy:"RWH4ytGzomJa_kl2YaAQ"};const c=r}}]);})();
