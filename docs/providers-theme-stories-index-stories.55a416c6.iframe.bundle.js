"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4848],{"../charts/src/providers/theme/stories/index.stories.tsx":(W,x,e)=>{e.r(x),e.d(x,{CustomColorTheme:()=>B,Default:()=>E,JetpackTheme:()=>d,WooTheme:()=>n,__namedExportsOrder:()=>r,default:()=>j});var m=e("../charts/src/providers/theme/theme-provider.tsx"),v=e("../charts/src/providers/theme/themes.ts"),u=e("../charts/src/components/line-chart/line-chart.tsx"),h=e("../charts/src/components/bar-chart/bar-chart.tsx"),l=e("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),g=e("../charts/src/components/bar-chart/stories/sample-data.ts"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),U=`import { Meta, StoryObj } from '@storybook/react';
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

export const CustomColorTheme: Story = {
	render: () => (
		<ThemeProvider
			theme={ {
				colors: [ '#073B3A', '#0B6E4F', '#08A045', '#6BBF59', '#DDB771' ],
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
`,K={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},JetpackTheme:{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},WooTheme:{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},CustomColorTheme:{startLoc:{col:32,line:153},endLoc:{col:1,line:179},startBody:{col:32,line:153},endBody:{col:1,line:179}}};const j={title:"JS Packages/Charts/Themes",component:m.N,parameters:{storySource:{source:`import { ThemeProvider, jetpackTheme, wooTheme } from '../.';
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
export const CustomColorTheme = {
  render: () => /*#__PURE__*/_jsx(ThemeProvider, {
    theme: {
      colors: ['#073B3A', '#0B6E4F', '#08A045', '#6BBF59', '#DDB771'],
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
};`,locationsMap:{default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},"jetpack-theme":{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},"woo-theme":{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},"custom-color-theme":{startLoc:{col:32,line:153},endLoc:{col:1,line:179},startBody:{col:32,line:153},endBody:{col:1,line:179}}}},layout:"centered"}},A=[g.A[0],g.A[1],g.A[2]],L=[{group:"Line 1",label:"Line 1",data:[{date:new Date("2024-01-01"),value:10,label:"Jan 1"},{date:new Date("2024-01-02"),value:20,label:"Jan 2"},{date:new Date("2024-01-03"),value:15,label:"Jan 3"},{date:new Date("2024-01-04"),value:25,label:"Jan 4"},{date:new Date("2024-01-05"),value:30,label:"Jan 5"}]},{group:"Line 2",label:"Line 2",data:[{date:new Date("2024-01-01"),value:1,label:"Jan 1"},{date:new Date("2024-01-02"),value:2,label:"Jan 2"},{date:new Date("2024-01-03"),value:1.5,label:"Jan 3"},{date:new Date("2024-01-04"),value:2.5,label:"Jan 4"},{date:new Date("2024-01-05"),value:3,label:"Jan 5"}]}],T=[{label:"Windows",value:8e4,valueDisplay:"80K",percentage:2},{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:5},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:1}],y=({children:s})=>(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:s}),E={render:()=>(0,t.jsx)(m.N,{children:(0,t.jsxs)(y,{children:[(0,t.jsx)(u.A,{data:L,width:400,height:300}),(0,t.jsx)(h.A,{data:A,width:400,height:300}),(0,t.jsx)(l.A,{data:T,width:400,label:"Pie Chart",note:"Default Theme"})]})})},d={render:()=>(0,t.jsx)(m.N,{theme:v.QI,children:(0,t.jsxs)(y,{children:[(0,t.jsx)(u.A,{data:L,width:400,height:300}),(0,t.jsx)(h.A,{data:A,width:400,height:300}),(0,t.jsx)(l.A,{data:T,width:400,label:"Pie Chart",note:"Jetpack Theme"})]})})},n={render:()=>(0,t.jsx)(m.N,{theme:v.pk,children:(0,t.jsxs)(y,{children:[(0,t.jsx)(u.A,{data:L,width:400,height:300}),(0,t.jsx)(h.A,{data:A,width:400,height:300}),(0,t.jsx)(l.A,{data:T,width:400,label:"Pie Chart",note:"Woo Theme"})]})})},B={render:()=>(0,t.jsx)(m.N,{theme:{colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},children:(0,t.jsxs)(y,{children:[(0,t.jsx)(u.A,{data:L,width:400,height:300}),(0,t.jsx)(h.A,{data:A,width:400,height:300}),(0,t.jsx)(l.A,{data:T,width:400,label:"Pie Chart",note:"Custom Color Theme"})]})})},r=["Default","JetpackTheme","WooTheme","CustomColorTheme"];E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Default Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...E.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={jetpackTheme}>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Jetpack Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...d.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={wooTheme}>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Woo Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...n.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={{
    colors: ['#073B3A', '#0B6E4F', '#08A045', '#6BBF59', '#DDB771'],
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
}`,...B.parameters?.docs?.source}}}},"../charts/src/components/line-chart/line-chart.tsx":(W,x,e)=>{e.d(x,{A:()=>H});var m=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/catmullRom.js"),v=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/linear.js"),u=e("../../../node_modules/.pnpm/@visx+gradient@3.12.0_react@18.3.1/node_modules/@visx/gradient/esm/gradients/LinearGradient.js"),h=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),l=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/components/XYChart.js"),g=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/components/grid/AnimatedGrid.js"),t=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/components/axis/AnimatedAxis.js"),U=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/components/series/AnimatedAreaSeries.js"),K=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/components/Tooltip.js"),I=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),j=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),A=e("../charts/src/providers/theme/theme-provider.tsx"),L=e("../charts/src/components/legend/base-legend.tsx"),T=e("../charts/src/components/shared/with-responsive.tsx"),y=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=e.n(y),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/line-chart/line-chart.module.scss"),n={};n.insert="head",n.singleton=!1;var B=E()(d.A,n);const r=d.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const C=60,P=({tooltipData:p})=>{const D=p?.nearestDatum?.datum;if(!D)return null;const R=Object.entries(p?.datumByKey||{}).map(([i,{datum:f}])=>({key:i,value:f.value})).sort((i,f)=>f.value-i.value);return(0,s.jsxs)("div",{className:r["line-chart__tooltip"],children:[(0,s.jsx)("div",{className:r["line-chart__tooltip-date"],children:D.date?.toLocaleDateString()}),R.map(i=>(0,s.jsxs)("div",{className:r["line-chart__tooltip-row"],children:[(0,s.jsxs)("span",{className:r["line-chart__tooltip-label"],children:[i.key,":"]}),(0,s.jsx)("span",{className:r["line-chart__tooltip-value"],children:i.value})]},i.key))]})},F=p=>new Date(p).toLocaleDateString(void 0,{month:"short",day:"numeric"}),S=p=>p?.length?p.some(R=>R.data.some(i=>isNaN(i.value)||i.value===null||i.value===void 0||isNaN(i.date.getTime())))?"Invalid data":null:"No data available",J=({data:p,width:D,height:R,className:i,margin:f,withTooltips:$=!0,showLegend:Q=!1,legendOrientation:q="horizontal",withGradientFill:M=!1,smoothing:z=!0,renderTooltip:X=P,options:b={}})=>{const O=(0,A.R)(),Y=(0,j.useId)(),w=(0,j.useMemo)(()=>p.map(a=>({...a,data:a.data.sort((_,V)=>_.date.getTime()-V.date.getTime())})),[p]),N=(0,j.useMemo)(()=>{const a=w?.map(_=>_.options?.stroke??"").filter(Boolean)??[];return(0,h.A)({...O,colors:[...a,...O.colors]})},[O,w]);f=(0,j.useMemo)(()=>{let a={};return b.axis?.y?.orientation==="right"&&(a={...a,right:40,left:0}),b.axis?.x?.orientation==="top"&&(a={...a,top:20,bottom:10}),{...a,...f}},[f,b]);const G=(0,j.useMemo)(()=>Math.max(Math.floor(Math.min(w[0]?.data.length,D/C)),5),[w,D]),k=S(w);if(k)return(0,s.jsx)("div",{className:(0,I.A)("line-chart",r["line-chart"]),children:k});const ee=w.map((a,_)=>({label:a.label,value:"",color:O.colors[_%O.colors.length]})),te={xAccessor:a=>a?.date,yAccessor:a=>a?.value};return(0,s.jsxs)("div",{className:(0,I.A)("line-chart",r["line-chart"],i),"data-testid":"line-chart",role:"img","aria-label":"line chart",children:[(0,s.jsxs)(l.A,{theme:N,width:D,height:R,margin:{top:10,right:0,bottom:20,left:40,...f},xScale:{type:"time",...b?.xScale},yScale:{type:"linear",nice:!0,zero:!1,...b?.yScale},children:[(0,s.jsx)(g.A,{columns:!1,numTicks:4}),(0,s.jsx)(t.A,{orientation:"bottom",numTicks:G,tickFormat:F,...b?.axis?.x}),(0,s.jsx)(t.A,{orientation:"left",numTicks:4,...b?.axis?.y}),w.map((a,_)=>{const V=a.options?.stroke??N.colors[_%N.colors.length];return(0,s.jsxs)("g",{children:[M&&(0,s.jsx)(u.A,{id:`area-gradient-${Y}-${_+1}`,from:V,fromOpacity:.4,toOpacity:.1,to:N.backgroundColor,...a.options?.gradient,"data-testid":"line-gradient"}),(0,s.jsx)(U.A,{dataKey:a?.label,data:a.data,...te,fill:M?`url(#area-gradient-${Y}-${_+1})`:void 0,renderLine:!0,curve:z?m.A:v.A},a?.label)]},a?.label||_)}),$&&(0,s.jsx)(K.A,{snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,showSeriesGlyphs:!0,renderTooltip:X})]}),Q&&(0,s.jsx)(L.$,{items:ee,orientation:q,className:r["line-chart-legend"]})]})},H=(0,T.F)(J);try{linechart.displayName="linechart",linechart.__docgenInfo={description:"",displayName:"linechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"true"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"x"'},{value:'"y"'},{value:'"xy"'},{value:'"none"'}]}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: { type?: keyof ScaleTypeToScaleConfig<DefaultOutput, StringLike, DefaultThresholdInput>; zero?: boolean; domain?: [...]; range?: [...]; }; xScale?: { ...; }; axis?: { ...; }; }"}},renderTooltip:{defaultValue:{value:`( {
	tooltipData,
}: {
	tooltipData?: {
		nearestDatum?: {
			datum: DataPointDate;
			key: string;
		};
		datumByKey?: { [ key: string ]: { datum: DataPointDate } };
	};
} ) => {
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
}`},description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withGradientFill:{defaultValue:{value:"false"},description:"",name:"withGradientFill",required:!1,type:{name:"boolean"}},smoothing:{defaultValue:{value:"true"},description:"",name:"smoothing",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/line-chart.tsx#linechart"]={docgenInfo:linechart.__docgenInfo,name:"linechart",path:"../charts/src/components/line-chart/line-chart.tsx#linechart"})}catch{}},"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":(W,x,e)=>{e.d(x,{A:()=>s});var m=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),v=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),u=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),h=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),l=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),g=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),U=e("../charts/src/providers/theme/theme-provider.tsx"),K=e("../charts/src/components/legend/base-legend.tsx"),I=e("../charts/src/components/shared/with-responsive.tsx"),j=e("../charts/src/components/tooltip/base-tooltip.tsx"),A=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),L=e.n(A),T=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),y={};y.insert="head",y.singleton=!1;var E=L()(T.A,y);const d=T.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const B=C=>C.length?C.some(S=>S.percentage<0||S.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:C.reduce((S,J)=>S+J.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},r=({data:C,width:P=400,thickness:F=.4,clockwise:S=!0,withTooltips:J=!1,showLegend:H=!1,legendOrientation:p="horizontal",label:D,note:R,className:i})=>{const f=(0,U.R)(),{tooltipOpen:$,tooltipLeft:Q,tooltipTop:q,tooltipData:M,hideTooltip:z,showTooltip:X}=(0,l.A)(),b=(0,t.useCallback)((o,c)=>{const ae=(0,m.A)(o);ae&&X({tooltipData:c.data,tooltipLeft:ae.x,tooltipTop:ae.y-10})},[X]),O=(0,t.useCallback)(()=>{z()},[z]),Y=(0,t.useCallback)(o=>c=>{b(c,o)},[b]),{isValid:w,message:N}=B(C);if(!w)return(0,n.jsx)("div",{className:d["pie-semi-circle-chart"],children:(0,n.jsx)("svg",{width:P,height:P/2,"data-testid":"pie-chart-svg",children:(0,n.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:d.error,children:N})})});const G=P/2,k=.03,ee=P-k*2,te=G-k,a=Math.min(ee,te*2)/2,_=a*(1-F+k),V=C.map((o,c)=>({...o,index:c})),ne=S?-Math.PI/2:Math.PI/2,se=S?Math.PI/2:-Math.PI/2,Z={value:o=>o.value,sort:(o,c)=>c.value-o.value,fill:o=>o.color||f.colors[o.index%f.colors.length]},oe=C.map((o,c)=>({label:o.label,value:o.valueDisplay||o.value.toString(),color:Z.fill({...o,index:c})}));return(0,n.jsxs)("div",{className:(0,g.A)("pie-semi-circle-chart",d["pie-semi-circle-chart"],i),"data-testid":"pie-chart-container",children:[(0,n.jsx)("svg",{width:P,height:G,viewBox:`0 0 ${P} ${G}`,"data-testid":"pie-chart-svg",children:(0,n.jsxs)(v.A,{top:a,left:a,children:[(0,n.jsx)(u.A,{data:V,pieValue:Z.value,outerRadius:a,innerRadius:_,cornerRadius:3,padAngle:k,startAngle:ne,endAngle:se,pieSort:Z.sort,children:o=>o.arcs.map(c=>(0,n.jsx)("g",{onMouseMove:Y(c),onMouseLeave:O,children:(0,n.jsx)("path",{d:o.path(c)||"",fill:Z.fill(c.data),"data-testid":"pie-segment"})},c.data.label))}),(0,n.jsxs)(v.A,{children:[(0,n.jsx)(h.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:d.label,children:D}),(0,n.jsx)(h.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:d.note,children:R})]})]})}),J&&$&&M&&(0,n.jsx)(j.R,{data:{label:M.label,value:M.value,valueDisplay:M.valueDisplay},top:q||0,left:Q||0}),H&&(0,n.jsx)(K.$,{items:oe,orientation:p,className:d["pie-semi-circle-chart-legend"]})]})};r.displayName="PieSemiCircleChart";const s=(0,I.F)(r);try{r.displayName="PieSemiCircleChart",r.__docgenInfo={description:"",displayName:"PieSemiCircleChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:{value:"400"},description:"Width of the chart in pixels; height would be half of this value calculated automatically.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label text to display above the chart",name:"label",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"x"'},{value:'"y"'},{value:'"xy"'},{value:'"none"'}]}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: { type?: keyof ScaleTypeToScaleConfig<DefaultOutput, StringLike, DefaultThresholdInput>; zero?: boolean; domain?: [...]; range?: [...]; }; xScale?: { ...; }; axis?: { ...; }; }"}},thickness:{defaultValue:{value:"0.4"},description:"Thickness of the pie chart. A value between 0 and 1",name:"thickness",required:!1,type:{name:"number"}},clockwise:{defaultValue:{value:"true"},description:`Direction of chart rendering
true for clockwise, false for counter-clockwise`,name:"clockwise",required:!1,type:{name:"boolean"}},note:{defaultValue:null,description:"Note text to display below the label",name:"note",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"]={docgenInfo:r.__docgenInfo,name:"PieSemiCircleChart",path:"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/line-chart/line-chart.module.scss":(W,x,e)=>{e.d(x,{A:()=>g});var m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(m),u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),h=e.n(u),l=h()(v());l.push([W.id,".SVlAnnWw2ot8McusfLcw{position:relative}.WG8wpgeFR6IoBhr41Y3z{background:#fff;padding:.5rem}.t5p9YWtrovlLQm8WlrGF{font-weight:bold;padding-bottom:10px}.FPtDJMJR2GRu0df3iYy6{display:flex;align-items:center;padding:4px 0;justify-content:space-between}.xTJS98Xw7HFAGWFwzsgd{font-weight:500;padding-right:1rem}",""]),l.locals={"line-chart":"SVlAnnWw2ot8McusfLcw","line-chart__tooltip":"WG8wpgeFR6IoBhr41Y3z","line-chart__tooltip-date":"t5p9YWtrovlLQm8WlrGF","line-chart__tooltip-row":"FPtDJMJR2GRu0df3iYy6","line-chart__tooltip-label":"xTJS98Xw7HFAGWFwzsgd"};const g=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":(W,x,e)=>{e.d(x,{A:()=>g});var m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(m),u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),h=e.n(u),l=h()(v());l.push([W.id,".xQEsZ9upN7GZLvXugRlk{position:relative;text-align:center}.u28WZeoUdhsFAVkB8ttn{margin-top:1rem}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0px;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0px;font-size:14px}",""]),l.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk","pie-semi-circle-chart-legend":"u28WZeoUdhsFAVkB8ttn",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const g=l}}]);
