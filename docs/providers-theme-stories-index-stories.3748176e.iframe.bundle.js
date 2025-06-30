"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4848],{"../charts/src/providers/theme/stories/index.stories.tsx":(R,b,e)=>{e.r(b),e.d(b,{CustomTheme:()=>m,Default:()=>w,JetpackTheme:()=>z,WooTheme:()=>D,__namedExportsOrder:()=>ae,default:()=>J});var h=e("../charts/src/providers/theme/theme-provider.tsx"),f=e("../charts/src/providers/theme/themes.ts"),u=e("../charts/src/components/line-chart/line-chart.tsx"),c=e("../charts/src/components/bar-chart/bar-chart.tsx"),r=e("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),v=e("../charts/src/components/bar-chart/stories/sample-data.ts"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),Z=`import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, jetpackTheme, wooTheme } from '../.';
import { LineChart, BarChart, PieSemiCircleChart } from '../../../.';
import barSampleData from '../../../components/bar-chart/stories/sample-data';

const meta: Meta< typeof LineChart > = {
	title: 'JS Packages/Charts/Themes',
	component: ThemeProvider,
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj< typeof ThemeProvider >;

const sampleData = [ barSampleData[ 0 ], barSampleData[ 1 ], barSampleData[ 2 ] ];

const lineSampleData = [
	{
		group: 'Line 1',
		label: 'Line 1',
		data: [
			{ date: new Date( '2024-01-01' ), value: 10, label: 'Jan 1' },
			{ date: new Date( '2024-01-02' ), value: 20, label: 'Jan 2' },
			{ date: new Date( '2024-01-03' ), value: 15, label: 'Jan 3' },
			{ date: new Date( '2024-01-04' ), value: 25, label: 'Jan 4' },
			{ date: new Date( '2024-01-05' ), value: 30, label: 'Jan 5' },
		],
	},
	{
		group: 'Line 2',
		label: 'Line 2',
		data: [
			{ date: new Date( '2024-01-01' ), value: 1, label: 'Jan 1' },
			{ date: new Date( '2024-01-02' ), value: 2, label: 'Jan 2' },
			{ date: new Date( '2024-01-03' ), value: 1.5, label: 'Jan 3' },
			{ date: new Date( '2024-01-04' ), value: 2.5, label: 'Jan 4' },
			{ date: new Date( '2024-01-05' ), value: 3, label: 'Jan 5' },
		],
	},
];

const pieData = [
	{
		label: 'Windows',
		value: 80000,
		valueDisplay: '80K',
		percentage: 2,
	},
	{
		label: 'MacOS',
		value: 30000,
		valueDisplay: '30K',
		percentage: 5,
	},
	{
		label: 'Linux',
		value: 22000,
		valueDisplay: '22K',
		percentage: 1,
	},
];

const GridComponent = ( { children } ) => {
	return (
		<div style={ { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' } }>
			{ children }
		</div>
	);
};

export const Default: Story = {
	render: () => (
		<ThemeProvider>
			<GridComponent>
				<LineChart data={ lineSampleData } width={ 400 } height={ 300 } />
				<BarChart data={ sampleData } width={ 400 } height={ 300 } />
				<PieSemiCircleChart data={ pieData } width={ 400 } label="Pie Chart" note="Default Theme" />
			</GridComponent>
		</ThemeProvider>
	),
};

export const JetpackTheme: Story = {
	render: () => (
		<ThemeProvider theme={ jetpackTheme }>
			<GridComponent>
				<LineChart data={ lineSampleData } width={ 400 } height={ 300 } />
				<BarChart data={ sampleData } width={ 400 } height={ 300 } />
				<PieSemiCircleChart data={ pieData } width={ 400 } label="Pie Chart" note="Jetpack Theme" />
			</GridComponent>
		</ThemeProvider>
	),
};

export const WooTheme: Story = {
	render: () => (
		<ThemeProvider theme={ wooTheme }>
			<GridComponent>
				<LineChart data={ lineSampleData } width={ 400 } height={ 300 } />
				<BarChart data={ sampleData } width={ 400 } height={ 300 } />
				<PieSemiCircleChart data={ pieData } width={ 400 } label="Pie Chart" note="Woo Theme" />
			</GridComponent>
		</ThemeProvider>
	),
};

export const CustomTheme: Story = {
	render: () => (
		<ThemeProvider
			theme={ {
				colors: [ '#073B3A', '#0B6E4F', '#08A045', '#6BBF59', '#DDB771' ],
				seriesLineStyles: [
					{
						strokeWidth: 1,
						strokeDasharray: '8 8',
						strokeLinecap: 'square',
					},
					{
						strokeDasharray: '5 8',
						strokeWidth: 2,
						strokeLinecap: 'square',
					},
				],
				gridStyles: {
					stroke: '#ffe3e3',
					strokeWidth: 2,
				},
			} }
		>
			<GridComponent>
				<LineChart data={ lineSampleData } width={ 400 } height={ 300 } />
				<BarChart data={ sampleData } width={ 400 } height={ 300 } />
				<PieSemiCircleChart
					data={ pieData }
					width={ 400 }
					label="Pie Chart"
					note="Custom Color Theme"
				/>
			</GridComponent>
		</ThemeProvider>
	),
};
`,B={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},JetpackTheme:{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},WooTheme:{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},CustomTheme:{startLoc:{col:27,line:153},endLoc:{col:1,line:188},startBody:{col:27,line:153},endBody:{col:1,line:188}}};const J={title:"JS Packages/Charts/Themes",component:h.NP,parameters:{storySource:{source:`import { ThemeProvider, jetpackTheme, wooTheme } from '../.';
import { LineChart, BarChart, PieSemiCircleChart } from '../../../.';
import barSampleData from '../../../components/bar-chart/stories/sample-data';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const meta = {
  title: 'JS Packages/Charts/Themes',
  component: ThemeProvider,
  parameters: {
    layout: 'centered'
  }
};
export default meta;
const sampleData = [barSampleData[0], barSampleData[1], barSampleData[2]];
const lineSampleData = [{
  group: 'Line 1',
  label: 'Line 1',
  data: [{
    date: new Date('2024-01-01'),
    value: 10,
    label: 'Jan 1'
  }, {
    date: new Date('2024-01-02'),
    value: 20,
    label: 'Jan 2'
  }, {
    date: new Date('2024-01-03'),
    value: 15,
    label: 'Jan 3'
  }, {
    date: new Date('2024-01-04'),
    value: 25,
    label: 'Jan 4'
  }, {
    date: new Date('2024-01-05'),
    value: 30,
    label: 'Jan 5'
  }]
}, {
  group: 'Line 2',
  label: 'Line 2',
  data: [{
    date: new Date('2024-01-01'),
    value: 1,
    label: 'Jan 1'
  }, {
    date: new Date('2024-01-02'),
    value: 2,
    label: 'Jan 2'
  }, {
    date: new Date('2024-01-03'),
    value: 1.5,
    label: 'Jan 3'
  }, {
    date: new Date('2024-01-04'),
    value: 2.5,
    label: 'Jan 4'
  }, {
    date: new Date('2024-01-05'),
    value: 3,
    label: 'Jan 5'
  }]
}];
const pieData = [{
  label: 'Windows',
  value: 80000,
  valueDisplay: '80K',
  percentage: 2
}, {
  label: 'MacOS',
  value: 30000,
  valueDisplay: '30K',
  percentage: 5
}, {
  label: 'Linux',
  value: 22000,
  valueDisplay: '22K',
  percentage: 1
}];
const GridComponent = ({
  children
}) => {
  return /*#__PURE__*/_jsx("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1rem'
    },
    children: children
  });
};
export const Default = {
  render: () => /*#__PURE__*/_jsx(ThemeProvider, {
    children: /*#__PURE__*/_jsxs(GridComponent, {
      children: [/*#__PURE__*/_jsx(LineChart, {
        data: lineSampleData,
        width: 400,
        height: 300
      }), /*#__PURE__*/_jsx(BarChart, {
        data: sampleData,
        width: 400,
        height: 300
      }), /*#__PURE__*/_jsx(PieSemiCircleChart, {
        data: pieData,
        width: 400,
        label: "Pie Chart",
        note: "Default Theme"
      })]
    })
  })
};
export const JetpackTheme = {
  render: () => /*#__PURE__*/_jsx(ThemeProvider, {
    theme: jetpackTheme,
    children: /*#__PURE__*/_jsxs(GridComponent, {
      children: [/*#__PURE__*/_jsx(LineChart, {
        data: lineSampleData,
        width: 400,
        height: 300
      }), /*#__PURE__*/_jsx(BarChart, {
        data: sampleData,
        width: 400,
        height: 300
      }), /*#__PURE__*/_jsx(PieSemiCircleChart, {
        data: pieData,
        width: 400,
        label: "Pie Chart",
        note: "Jetpack Theme"
      })]
    })
  })
};
export const WooTheme = {
  render: () => /*#__PURE__*/_jsx(ThemeProvider, {
    theme: wooTheme,
    children: /*#__PURE__*/_jsxs(GridComponent, {
      children: [/*#__PURE__*/_jsx(LineChart, {
        data: lineSampleData,
        width: 400,
        height: 300
      }), /*#__PURE__*/_jsx(BarChart, {
        data: sampleData,
        width: 400,
        height: 300
      }), /*#__PURE__*/_jsx(PieSemiCircleChart, {
        data: pieData,
        width: 400,
        label: "Pie Chart",
        note: "Woo Theme"
      })]
    })
  })
};
export const CustomTheme = {
  render: () => /*#__PURE__*/_jsx(ThemeProvider, {
    theme: {
      colors: ['#073B3A', '#0B6E4F', '#08A045', '#6BBF59', '#DDB771'],
      seriesLineStyles: [{
        strokeWidth: 1,
        strokeDasharray: '8 8',
        strokeLinecap: 'square'
      }, {
        strokeDasharray: '5 8',
        strokeWidth: 2,
        strokeLinecap: 'square'
      }],
      gridStyles: {
        stroke: '#ffe3e3',
        strokeWidth: 2
      }
    },
    children: /*#__PURE__*/_jsxs(GridComponent, {
      children: [/*#__PURE__*/_jsx(LineChart, {
        data: lineSampleData,
        width: 400,
        height: 300
      }), /*#__PURE__*/_jsx(BarChart, {
        data: sampleData,
        width: 400,
        height: 300
      }), /*#__PURE__*/_jsx(PieSemiCircleChart, {
        data: pieData,
        width: 400,
        label: "Pie Chart",
        note: "Custom Color Theme"
      })]
    })
  })
};`,locationsMap:{default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},"jetpack-theme":{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},"woo-theme":{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},"custom-theme":{startLoc:{col:27,line:153},endLoc:{col:1,line:188},startBody:{col:27,line:153},endBody:{col:1,line:188}}}},layout:"centered"}},E=[v.A[0],v.A[1],v.A[2]],_=[{group:"Line 1",label:"Line 1",data:[{date:new Date("2024-01-01"),value:10,label:"Jan 1"},{date:new Date("2024-01-02"),value:20,label:"Jan 2"},{date:new Date("2024-01-03"),value:15,label:"Jan 3"},{date:new Date("2024-01-04"),value:25,label:"Jan 4"},{date:new Date("2024-01-05"),value:30,label:"Jan 5"}]},{group:"Line 2",label:"Line 2",data:[{date:new Date("2024-01-01"),value:1,label:"Jan 1"},{date:new Date("2024-01-02"),value:2,label:"Jan 2"},{date:new Date("2024-01-03"),value:1.5,label:"Jan 3"},{date:new Date("2024-01-04"),value:2.5,label:"Jan 4"},{date:new Date("2024-01-05"),value:3,label:"Jan 5"}]}],A=[{label:"Windows",value:8e4,valueDisplay:"80K",percentage:2},{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:5},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:1}],L=({children:I})=>(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:I}),w={render:()=>(0,o.jsx)(h.NP,{children:(0,o.jsxs)(L,{children:[(0,o.jsx)(u.A,{data:_,width:400,height:300}),(0,o.jsx)(c.A,{data:E,width:400,height:300}),(0,o.jsx)(r.A,{data:A,width:400,label:"Pie Chart",note:"Default Theme"})]})})},z={render:()=>(0,o.jsx)(h.NP,{theme:f.QI,children:(0,o.jsxs)(L,{children:[(0,o.jsx)(u.A,{data:_,width:400,height:300}),(0,o.jsx)(c.A,{data:E,width:400,height:300}),(0,o.jsx)(r.A,{data:A,width:400,label:"Pie Chart",note:"Jetpack Theme"})]})})},D={render:()=>(0,o.jsx)(h.NP,{theme:f.pk,children:(0,o.jsxs)(L,{children:[(0,o.jsx)(u.A,{data:_,width:400,height:300}),(0,o.jsx)(c.A,{data:E,width:400,height:300}),(0,o.jsx)(r.A,{data:A,width:400,label:"Pie Chart",note:"Woo Theme"})]})})},m={render:()=>(0,o.jsx)(h.NP,{theme:{colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},children:(0,o.jsxs)(L,{children:[(0,o.jsx)(u.A,{data:_,width:400,height:300}),(0,o.jsx)(c.A,{data:E,width:400,height:300}),(0,o.jsx)(r.A,{data:A,width:400,label:"Pie Chart",note:"Custom Color Theme"})]})})},ae=["Default","JetpackTheme","WooTheme","CustomTheme"];w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Default Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...w.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={jetpackTheme}>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Jetpack Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...z.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={wooTheme}>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Woo Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...D.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={{
    colors: ['#073B3A', '#0B6E4F', '#08A045', '#6BBF59', '#DDB771'],
    seriesLineStyles: [{
      strokeWidth: 1,
      strokeDasharray: '8 8',
      strokeLinecap: 'square'
    }, {
      strokeDasharray: '5 8',
      strokeWidth: 2,
      strokeLinecap: 'square'
    }],
    gridStyles: {
      stroke: '#ffe3e3',
      strokeWidth: 2
    }
  }}>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Custom Color Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...m.parameters?.docs?.source}}}},"../charts/src/components/line-chart/line-chart.tsx":(R,b,e)=>{e.d(b,{A:()=>oe});var h=e("../number-formatters/src/index.ts"),f=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/catmullRom.js"),u=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/linear.js"),c=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/monotone.js"),r=e("../../../node_modules/.pnpm/@visx+gradient@3.12.0_react@18.3.1/node_modules/@visx/gradient/esm/gradients/LinearGradient.js"),v=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/context/DataContext.js"),o=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),Z=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),B=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),T=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/AreaSeries.js"),J=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),E=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),A=e("../charts/src/providers/theme/theme-provider.tsx"),L=e("../charts/src/components/legend/base-legend.tsx"),w=e("../charts/src/components/shared/default-glyph.tsx"),z=e("../charts/src/components/shared/use-chart-data-transform.ts"),D=e("../charts/src/components/shared/use-chart-margin.tsx"),m=e("../charts/src/components/shared/use-element-height.ts"),ae=e("../charts/src/components/shared/with-responsive.tsx"),I=e("../../../node_modules/.pnpm/@visx+annotation@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/annotation/esm/components/Annotation.js"),ge=e("../../../node_modules/.pnpm/@visx+annotation@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/annotation/esm/components/Connector.js"),k=e("../../../node_modules/.pnpm/@visx+annotation@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/annotation/esm/components/CircleSubject.js"),W=e("../../../node_modules/.pnpm/@visx+annotation@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/annotation/esm/components/LineSubject.js"),ie=e("../../../node_modules/.pnpm/@visx+annotation@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/annotation/esm/components/Label.js"),N=e("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const F=125,de=100,Q=({subjectType:t,x:d,xMax:y,y:l,yMin:p,yMax:C,maxWidth:O,height:S})=>{const g=O??F,P=S??de;let a=15,n=15,x=!1,V=!1;return t==="line-horizontal"&&(a=0,n=20),t==="line-vertical"&&(a=20,n=0),d+a+g>y&&(x=!0,t==="circle"?a=-a:t==="line-vertical"&&(a=-20)),t==="circle"?l+n+P>p&&(V=!0,n=-Math.abs(n)):l-P<C?t==="line-horizontal"?(V=!0,n=Math.abs(n)):t==="line-vertical"&&(V=!0):l+P>p&&(t==="line-horizontal"?(V=!0,n=-Math.abs(n)):t==="line-vertical"&&(V=!0)),{dx:a,dy:n,isFlippedHorizontally:x,isFlippedVertically:V}},H=(t,d)=>{if(t==="line-horizontal")return d?"end":"start"},be=(t,d,y,l,p)=>{if(t==="line-vertical")return d?y-p<l?"start":"end":"middle"},Se=({datum:t,title:d,subtitle:y,subjectType:l="circle",styles:p,testId:C})=>{const O=(0,A.RW)(),{xScale:S,yScale:g}=(0,_.useContext)(v.A)||{},P=(0,_.useRef)(null),[a,n]=(0,_.useState)(null),x=(0,N.merge)({},O.annotationStyles,p);(0,_.useEffect)(()=>{if(P.current){const Y=P.current.getBBox();n(Y.height)}},[]);const V=(0,_.useMemo)(()=>{if(!t||!t.date||t.value==null||!S||!g)return null;const Y=S(t.date),se=g(t.value);if(typeof Y!="number"||typeof se!="number")return null;const[M,U]=g.range().map(Number),[ve,ye]=S.range().map(Number),xe=Q({subjectType:l,x:Y,xMax:ye,y:se,yMin:M,yMax:U,maxWidth:x?.label?.maxWidth,height:a});return{x:Y,y:se,yMin:M,yMax:U,xMin:ve,xMax:ye,...xe}},[t,S,g,l,x?.label?.maxWidth,a]);if(!V)return null;const{x:he,y:le,yMin:Ee,yMax:_e,xMin:Le,xMax:we,dx:X,dy:fe,isFlippedHorizontally:Oe,isFlippedVertically:Ve}=V;return(0,s.jsx)("g",{"data-testid":C,children:(0,s.jsxs)(I.A,{x:he,y:le,dx:X,dy:fe,children:[(0,s.jsx)(ge.A,{...x?.connector}),l==="circle"&&(0,s.jsx)(k.A,{...x?.circleSubject}),l==="line-vertical"&&(0,s.jsx)(W.A,{min:_e,max:Ee,...x?.lineSubject,orientation:"vertical"}),l==="line-horizontal"&&(0,s.jsx)(W.A,{min:Le,max:we,...x?.lineSubject,orientation:"horizontal"}),(0,s.jsx)("g",{ref:P,children:(0,s.jsx)(ie.A,{title:d,subtitle:y,...x?.label,horizontalAnchor:H(l,Oe),verticalAnchor:be(l,Ve,le,_e,a??de)})})]})})};try{Q.displayName="getLabelPosition",Q.__docgenInfo={description:"",displayName:"getLabelPosition",props:{subjectType:{defaultValue:{value:"circle"},description:"",name:"subjectType",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"line-vertical"'},{value:'"line-horizontal"'}]}},x:{defaultValue:null,description:"",name:"x",required:!0,type:{name:"number"}},xMax:{defaultValue:null,description:"",name:"xMax",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!0,type:{name:"number"}},yMin:{defaultValue:null,description:"",name:"yMin",required:!0,type:{name:"number"}},yMax:{defaultValue:null,description:"",name:"yMax",required:!0,type:{name:"number"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/line-chart-annotation.tsx#getLabelPosition"]={docgenInfo:Q.__docgenInfo,name:"getLabelPosition",path:"../charts/src/components/line-chart/line-chart-annotation.tsx#getLabelPosition"})}catch{}try{linechartannotation.displayName="linechartannotation",linechartannotation.__docgenInfo={description:"",displayName:"linechartannotation",props:{datum:{defaultValue:null,description:"",name:"datum",required:!0,type:{name:"DataPointDate"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},subjectType:{defaultValue:{value:"circle"},description:"",name:"subjectType",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"line-vertical"'},{value:'"line-horizontal"'}]}},styles:{defaultValue:null,description:"",name:"styles",required:!1,type:{name:"AnnotationStyles"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/line-chart-annotation.tsx#linechartannotation"]={docgenInfo:linechartannotation.__docgenInfo,name:"linechartannotation",path:"../charts/src/components/line-chart/line-chart-annotation.tsx#linechartannotation"})}catch{}var De=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ce=e.n(De),me=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss"),q={};q.insert="head",q.singleton=!1;var Re=ce()(me.A,q);const G=me.A.locals||{},Ce=100,ee=t=>(0,_.createElement)(w.W,{...t,key:t.key}),ne=t=>{const d=typeof t=="number"?t:parseFloat(t);return isNaN(d)?void 0:d},ue=({data:t,index:d,color:y,glyphStyle:l,renderGlyph:p,accessors:C})=>{const{xScale:O,yScale:S}=(0,_.useContext)(v.A)||{};if(!O||!S||t.data.length===0)return null;const g=t.data[0],P=O(C.xAccessor(g)),a=S(C.yAccessor(g));if(typeof P!="number"||typeof a!="number")return null;const n=Math.max(0,ne(l?.radius)??4);return p({key:`start-glyph-${t.label}`,index:d,datum:g,color:y,size:n,x:P,y:a,glyphStyle:l})},pe=(t,d)=>{if(!t)return d?f.A:u.A;switch(t){case"smooth":return f.A;case"monotone":return c.G;case"linear":return u.A;default:return u.A}},Pe=t=>{const{tooltipData:d}=t,y=d?.nearestDatum?.datum;if(!y)return null;const l=Object.entries(d?.datumByKey||{}).map(([p,{datum:C}])=>({key:p,value:C.value})).sort((p,C)=>C.value-p.value);return(0,s.jsxs)("div",{className:G["line-chart__tooltip"],children:[(0,s.jsx)("div",{className:G["line-chart__tooltip-date"],children:y.date?.toLocaleDateString()}),l.map(p=>(0,s.jsxs)("div",{className:G["line-chart__tooltip-row"],children:[(0,s.jsxs)("span",{className:G["line-chart__tooltip-label"],children:[p.key,":"]}),(0,s.jsx)("span",{className:G["line-chart__tooltip-value"],children:p.value})]},p.key))]})},je=t=>new Date(t).toLocaleDateString(void 0,{month:"short",day:"numeric"}),Te=t=>t?.length?t.some(y=>y.data.some(l=>isNaN(l.value)||l.value===null||l.value===void 0||"date"in l&&l.date&&isNaN(l.date.getTime())))?"Invalid data":null:"No data available",Ae=({data:t,width:d,height:y,className:l,margin:p,withTooltips:C=!0,withTooltipCrosshairs:O,showLegend:S=!1,legendOrientation:g="horizontal",legendAlignmentHorizontal:P="center",legendAlignmentVertical:a="bottom",renderGlyph:n=ee,glyphStyle:x={},legendShape:V="line",withLegendGlyph:he=!1,withGradientFill:le=!1,smoothing:Ee=!0,curveType:_e,renderTooltip:Le=Pe,withStartGlyphs:we=!1,options:X={},annotations:fe,onPointerDown:Oe=void 0,onPointerUp:Ve=void 0,onPointerMove:Y=void 0,onPointerOut:se=void 0})=>{const M=(0,A.RW)(),U=(0,A.Ox)(t),ve=(0,_.useId)(),[ye,xe]=(0,m.v)(),K=(0,z.E)(t),re=(0,_.useMemo)(()=>({axis:{x:{orientation:"bottom",numTicks:Math.min(K[0]?.data.length,Math.ceil(d/Ce)),tickFormat:je,...X?.axis?.x},y:{orientation:"left",numTicks:4,tickFormat:h.qe,...X?.axis?.y}},xScale:{type:"time",...X?.xScale},yScale:{type:"linear",nice:!0,zero:!1,...X?.yScale}}),[X,K,d]),Ge=(0,_.useMemo)(()=>i=>{const j=K.findIndex(te=>te.label===i.key||te.data.includes(i.datum)),$=M.glyphs?.[j];return $?$(i):n(i)},[K,M.glyphs,n]),Be=(0,D.a)(y,re,K,U),ke=Te(K);if(ke)return(0,s.jsx)("div",{className:(0,E.A)("line-chart",G["line-chart"]),children:ke});const Ie=K.map((i,j)=>({label:i.label,value:"",color:i?.options?.stroke??M.colors[j%M.colors.length],shapeStyle:i?.options?.legendShapeStyle,renderGlyph:he?M.glyphs?.[j]??n:void 0,glyphSize:Math.max(0,ne(x?.radius)??4)})),We={xAccessor:i=>i?.date,yAccessor:i=>i?.value};return(0,s.jsxs)("div",{className:(0,E.A)("line-chart",G["line-chart"],l),"data-testid":"line-chart",role:"img","aria-label":"line chart",style:{width:d,height:y,display:"flex",flexDirection:S&&a==="top"?"column-reverse":"column"},children:[(0,s.jsxs)(o.A,{theme:U,width:d,height:y-(S?xe:0),margin:{...Be,...p,...S&&a==="top"?{top:(Be.top||0)+xe}:{}},xScale:re.xScale,yScale:re.yScale,onPointerDown:Oe,onPointerUp:Ve,onPointerMove:Y,onPointerOut:se,pointerEventsDataKey:"nearest",children:[(0,s.jsx)(Z.A,{columns:!1,numTicks:4}),(0,s.jsx)(B.A,{...re.axis.x}),(0,s.jsx)(B.A,{...re.axis.y}),K.map((i,j)=>{const $=i.options?.stroke??U.colors[j%U.colors.length],te=i.options?.seriesLineStyle??M?.seriesLineStyles?.[j%M.seriesLineStyles.length]??{};return(0,s.jsxs)("g",{children:[we&&(0,s.jsx)(ue,{index:j,data:i,color:$,renderGlyph:M.glyphs?.[j]??n,accessors:We,glyphStyle:x}),le&&(0,s.jsx)(r.A,{id:`area-gradient-${ve}-${j+1}`,from:$,fromOpacity:.4,toOpacity:.1,to:U.backgroundColor,...i.options?.gradient,"data-testid":"line-gradient"}),(0,s.jsx)(T.A,{dataKey:i?.label,data:i.data,...We,fill:le?`url(#area-gradient-${ve}-${j+1})`:"transparent",renderLine:!0,curve:pe(_e,Ee),lineProps:te},i?.label)]},i?.label||j)}),C&&(0,s.jsx)(J.A,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,showSeriesGlyphs:!0,renderTooltip:Le,renderGlyph:Ge,glyphStyle:x,showVerticalCrosshair:O?.showVertical,showHorizontalCrosshair:O?.showHorizontal}),fe?.length&&fe.map(({datum:i,title:j,subtitle:$,subjectType:te,styles:Ne},ze)=>i?(0,s.jsx)(Se,{testId:`annotation-${ze}`,datum:i,title:j,subtitle:$,subjectType:te,styles:Ne},`annotation-${i.date?.getTime()}-${i.value}`):null)]}),S&&(0,s.jsx)(L.$,{items:Ie,orientation:g,alignmentHorizontal:P,alignmentVertical:a,className:G["line-chart-legend"],shape:V,ref:ye})]})},oe=(0,ae.F)(Ae);try{linechart.displayName="linechart",linechart.__docgenInfo={description:"",displayName:"linechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},onPointerDown:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:{value:"undefined"},description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},annotations:{defaultValue:null,description:"",name:"annotations",required:!1,type:{name:"LineChartAnnotationProps[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"true"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"line"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendAlignmentHorizontal:{defaultValue:{value:"center"},description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:{value:"bottom"},description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},renderTooltip:{defaultValue:{value:`( params: RenderTooltipParams< DataPointDate > ) => {
	const { tooltipData } = params;
	const nearestDatum = tooltipData?.nearestDatum?.datum;
	if ( ! nearestDatum ) return null;

	const tooltipPoints: TooltipDatum[] = Object.entries( tooltipData?.datumByKey || {} )
		.map( ( [ key, { datum } ] ) => ( {
			key,
			value: datum.value as number,
		} ) )
		.sort( ( a, b ) => b.value - a.value );

	return (
		<div className={ styles[ 'line-chart__tooltip' ] }>
			<div className={ styles[ 'line-chart__tooltip-date' ] }>
				{ nearestDatum.date?.toLocaleDateString() }
			</div>
			{ tooltipPoints.map( point => (
				<div key={ point.key } className={ styles[ 'line-chart__tooltip-row' ] }>
					<span className={ styles[ 'line-chart__tooltip-label' ] }>{ point.key }:</span>
					<span className={ styles[ 'line-chart__tooltip-value' ] }>{ point.value }</span>
				</div>
			) ) }
		</div>
	);
}`},description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withGradientFill:{defaultValue:{value:"false"},description:"",name:"withGradientFill",required:!1,type:{name:"boolean"}},smoothing:{defaultValue:{value:"true"},description:"",name:"smoothing",required:!1,type:{name:"boolean"}},curveType:{defaultValue:null,description:"",name:"curveType",required:!1,type:{name:"enum",value:[{value:'"linear"'},{value:'"smooth"'},{value:'"monotone"'}]}},withStartGlyphs:{defaultValue:{value:"false"},description:"",name:"withStartGlyphs",required:!1,type:{name:"boolean"}},renderGlyph:{defaultValue:{value:`< Datum extends object >(
	props: RenderLineStartGlyphProps< Datum >
) => {
	return <DefaultGlyph { ...props } key={ props.key } />;
}`},description:"",name:"renderGlyph",required:!1,type:{name:"<Datum extends object>(props: GlyphProps<Datum>) => ReactNode"}},glyphStyle:{defaultValue:{value:"{}"},description:"",name:"glyphStyle",required:!1,type:{name:"SVGProps<SVGCircleElement>"}},withLegendGlyph:{defaultValue:{value:"false"},description:"",name:"withLegendGlyph",required:!1,type:{name:"boolean"}},withTooltipCrosshairs:{defaultValue:null,description:"",name:"withTooltipCrosshairs",required:!1,type:{name:"{ showVertical?: boolean; showHorizontal?: boolean; }"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/line-chart.tsx#linechart"]={docgenInfo:linechart.__docgenInfo,name:"linechart",path:"../charts/src/components/line-chart/line-chart.tsx#linechart"})}catch{}},"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":(R,b,e)=>{e.d(b,{A:()=>ge});var h=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),f=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),u=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),c=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),r=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),v=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),Z=e("../charts/src/providers/theme/theme-provider.tsx"),B=e("../charts/src/components/legend/base-legend.tsx"),T=e("../charts/src/components/shared/use-element-height.ts"),J=e("../charts/src/components/shared/with-responsive.tsx"),E=e("../charts/src/components/tooltip/base-tooltip.tsx"),_=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=e.n(_),L=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),w={};w.insert="head",w.singleton=!1;var z=A()(L.A,w);const D=L.A.locals||{};var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ae=k=>k.length?k.some(N=>N.percentage<0||N.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:k.reduce((N,s)=>N+s.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},I=({data:k,width:W=400,thickness:ie=.4,clockwise:N=!0,withTooltips:s=!1,showLegend:F=!1,legendOrientation:de="horizontal",legendAlignmentHorizontal:Q="center",legendAlignmentVertical:H="bottom",legendShape:be="circle",label:Me,note:Se,className:De})=>{const ce=(0,Z.RW)(),[me,q]=(0,T.v)(),{tooltipOpen:Re,tooltipLeft:G,tooltipTop:Ce,tooltipData:ee,hideTooltip:ne,showTooltip:ue}=(0,r.A)(),pe=(0,o.useCallback)((a,n)=>{const x=(0,h.A)(a);x&&ue({tooltipData:n.data,tooltipLeft:x.x,tooltipTop:x.y-10})},[ue]),Pe=(0,o.useCallback)(()=>{ne()},[ne]),je=(0,o.useCallback)(a=>n=>{pe(n,a)},[pe]),{isValid:Te,message:Ae}=ae(k);if(!Te)return(0,m.jsx)("div",{className:D["pie-semi-circle-chart"],children:(0,m.jsx)("svg",{width:W,height:W/2,"data-testid":"pie-chart-svg",children:(0,m.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:D.error,children:Ae})})});const oe=W/2,t=.03,d=W-t*2,y=oe-t,l=Math.min(d,y*2)/2,p=l*(1-ie+t),C=k.map((a,n)=>({...a,index:n})),O=N?-Math.PI/2:Math.PI/2,S=N?Math.PI/2:-Math.PI/2,g={value:a=>a.value,sort:(a,n)=>n.value-a.value,fill:a=>a.color||ce.colors[a.index%ce.colors.length]},P=k.map((a,n)=>({label:a.label,value:a.valueDisplay||a.value.toString(),color:g.fill({...a,index:n})}));return(0,m.jsxs)("div",{className:(0,v.A)("pie-semi-circle-chart",D["pie-semi-circle-chart"],De),"data-testid":"pie-chart-container",style:{display:"flex",flexDirection:F&&H==="top"?"column-reverse":"column"},children:[(0,m.jsx)("svg",{width:W,height:oe+(F&&H==="top"?q+20:0),viewBox:`0 0 ${W} ${oe+(F&&H==="top"?q+20:0)}`,"data-testid":"pie-chart-svg",children:(0,m.jsxs)(f.A,{top:l+(F&&H==="top"?q+20:0),left:l,children:[(0,m.jsx)(u.A,{data:C,pieValue:g.value,outerRadius:l,innerRadius:p,cornerRadius:3,padAngle:t,startAngle:O,endAngle:S,pieSort:g.sort,children:a=>a.arcs.map(n=>(0,m.jsx)("g",{onMouseMove:je(n),onMouseLeave:Pe,children:(0,m.jsx)("path",{d:a.path(n)||"",fill:g.fill(n.data),"data-testid":"pie-segment"})},n.data.label))}),(0,m.jsxs)(f.A,{children:[(0,m.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:D.label,children:Me}),(0,m.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:D.note,children:Se})]})]})}),s&&Re&&ee&&(0,m.jsx)(E.R,{data:{label:ee.label,value:ee.value,valueDisplay:ee.valueDisplay},top:Ce||0,left:G||0}),F&&(0,m.jsx)(B.$,{items:P,orientation:de,alignmentHorizontal:Q,alignmentVertical:H,className:D["pie-semi-circle-chart-legend"],shape:be,ref:me})]})};I.displayName="PieSemiCircleChart";const ge=(0,J.F)(I);try{I.displayName="PieSemiCircleChart",I.__docgenInfo={description:"",displayName:"PieSemiCircleChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:{value:"400"},description:"Width of the chart in pixels; height would be half of this value calculated automatically.",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label text to display above the chart",name:"label",required:!1,type:{name:"string"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<DataPointPercentage[], number>"}},legendAlignmentHorizontal:{defaultValue:{value:"center"},description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:{value:"bottom"},description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},thickness:{defaultValue:{value:"0.4"},description:"Thickness of the pie chart. A value between 0 and 1",name:"thickness",required:!1,type:{name:"number"}},note:{defaultValue:null,description:"Note text to display below the label",name:"note",required:!1,type:{name:"string"}},clockwise:{defaultValue:{value:"true"},description:`Direction of chart rendering
true for clockwise, false for counter-clockwise`,name:"clockwise",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"]={docgenInfo:I.__docgenInfo,name:"PieSemiCircleChart",path:"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"})}catch{}},"../charts/src/components/shared/default-glyph.tsx":(R,b,e)=>{e.d(b,{W:()=>c});var h=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/context/DataContext.js"),f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=r=>{const{theme:v}=(0,f.useContext)(h.A)||{};return(0,u.jsx)("circle",{cx:r.x,cy:r.y,r:r.size,fill:r.color,stroke:v?.backgroundColor,strokeWidth:1.5,paintOrder:"fill","data-testid":`start-glyph-${r.index}`,...r.glyphStyle})};try{c.displayName="DefaultGlyph",c.__docgenInfo={description:"",displayName:"DefaultGlyph",props:{key:{defaultValue:null,description:"Unique key for Glyph (not dataKey).",name:"key",required:!0,type:{name:"string"}},datum:{defaultValue:null,description:"Datum for Glyph.",name:"datum",required:!0,type:{name:"object"}},index:{defaultValue:null,description:"Index of Datum in data array.",name:"index",required:!0,type:{name:"number"}},x:{defaultValue:null,description:"X coordinate of Glyph.",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"Y coordinate of Glyph.",name:"y",required:!0,type:{name:"number"}},size:{defaultValue:null,description:"Size of Glyph.",name:"size",required:!0,type:{name:"number"}},color:{defaultValue:null,description:"Color of Glyph.",name:"color",required:!0,type:{name:"string"}},onBlur:{defaultValue:null,description:"Callback to invoke for onBlur.",name:"onBlur",required:!1,type:{name:"(event: FocusEvent<Element, Element>) => void"}},onFocus:{defaultValue:null,description:"Callback to invoke for onFocus.",name:"onFocus",required:!1,type:{name:"(event: FocusEvent<Element, Element>) => void"}},onPointerMove:{defaultValue:null,description:"Callback to invoke for onPointerMove.",name:"onPointerMove",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},onPointerOut:{defaultValue:null,description:"Callback to invoke for onPointerOut.",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},onPointerUp:{defaultValue:null,description:"Callback to invoke for onPointerUp.",name:"onPointerUp",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},glyphStyle:{defaultValue:null,description:"",name:"glyphStyle",required:!1,type:{name:"SVGProps<SVGCircleElement>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/default-glyph.tsx#DefaultGlyph"]={docgenInfo:c.__docgenInfo,name:"DefaultGlyph",path:"../charts/src/components/shared/default-glyph.tsx#DefaultGlyph"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(R,b,e)=>{e.d(b,{R:()=>B});var h=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(h),u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),c={};c.insert="head",c.singleton=!1;var r=f()(u.A,c);const v=u.A.locals||{};var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const Z=({data:T})=>(0,o.jsxs)(o.Fragment,{children:[T?.label,": ",T?.valueDisplay||T?.value]}),B=({data:T,top:J,left:E,component:_=Z,children:A,className:L})=>(0,o.jsx)("div",{className:v.tooltip,style:{top:J,left:E},role:"tooltip",children:A||T&&(0,o.jsx)(_,{data:T,className:L})});try{B.displayName="BaseTooltip",B.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:B.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss":(R,b,e)=>{e.d(b,{A:()=>v});var h=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(h),u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(u),r=c()(f());r.push([R.id,".SVlAnnWw2ot8McusfLcw{display:flex;flex-direction:column}.SVlAnnWw2ot8McusfLcw svg{overflow:visible}.WG8wpgeFR6IoBhr41Y3z{background:#fff;padding:.5rem}.t5p9YWtrovlLQm8WlrGF{font-weight:700;padding-bottom:10px}.FPtDJMJR2GRu0df3iYy6{display:flex;align-items:center;padding:4px 0;justify-content:space-between}.xTJS98Xw7HFAGWFwzsgd{font-weight:500;padding-right:1rem}.visx-tooltip-glyph svg{width:10px;height:10px}",""]),r.locals={"line-chart":"SVlAnnWw2ot8McusfLcw","line-chart__tooltip":"WG8wpgeFR6IoBhr41Y3z","line-chart__tooltip-date":"t5p9YWtrovlLQm8WlrGF","line-chart__tooltip-row":"FPtDJMJR2GRu0df3iYy6","line-chart__tooltip-label":"xTJS98Xw7HFAGWFwzsgd"};const v=r},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":(R,b,e)=>{e.d(b,{A:()=>v});var h=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(h),u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(u),r=c()(f());r.push([R.id,".xQEsZ9upN7GZLvXugRlk{display:flex;flex-direction:column;text-align:center}.u28WZeoUdhsFAVkB8ttn{margin-top:1rem}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0;font-size:14px}",""]),r.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk","pie-semi-circle-chart-legend":"u28WZeoUdhsFAVkB8ttn",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const v=r},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(R,b,e)=>{e.d(b,{A:()=>v});var h=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(h),u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(u),r=c()(f());r.push([R.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),r.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const v=r}}]);
