"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4848],{"../charts/src/providers/theme/stories/index.stories.tsx":(R,f,e)=>{e.r(f),e.d(f,{CustomColorTheme:()=>A,Default:()=>w,JetpackTheme:()=>c,WooTheme:()=>a,__namedExportsOrder:()=>r,default:()=>O});var h=e("../charts/src/providers/theme/theme-provider.tsx"),v=e("../charts/src/providers/theme/themes.ts"),_=e("../charts/src/components/line-chart/line-chart.tsx"),p=e("../charts/src/components/bar-chart/bar-chart.tsx"),o=e("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),g=e("../charts/src/components/bar-chart/stories/sample-data.ts"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),N=`import { Meta, StoryObj } from '@storybook/react';
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
`,G={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},JetpackTheme:{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},WooTheme:{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},CustomColorTheme:{startLoc:{col:32,line:153},endLoc:{col:1,line:179},startBody:{col:32,line:153},endBody:{col:1,line:179}}};const O={title:"JS Packages/Charts/Themes",component:h.N,parameters:{storySource:{source:`import { ThemeProvider, jetpackTheme, wooTheme } from '../.';
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
};`,locationsMap:{default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},"jetpack-theme":{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},"woo-theme":{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},"custom-color-theme":{startLoc:{col:32,line:153},endLoc:{col:1,line:179},startBody:{col:32,line:153},endBody:{col:1,line:179}}}},layout:"centered"}},P=[g.A[0],g.A[1],g.A[2]],S=[{group:"Line 1",label:"Line 1",data:[{date:new Date("2024-01-01"),value:10,label:"Jan 1"},{date:new Date("2024-01-02"),value:20,label:"Jan 2"},{date:new Date("2024-01-03"),value:15,label:"Jan 3"},{date:new Date("2024-01-04"),value:25,label:"Jan 4"},{date:new Date("2024-01-05"),value:30,label:"Jan 5"}]},{group:"Line 2",label:"Line 2",data:[{date:new Date("2024-01-01"),value:1,label:"Jan 1"},{date:new Date("2024-01-02"),value:2,label:"Jan 2"},{date:new Date("2024-01-03"),value:1.5,label:"Jan 3"},{date:new Date("2024-01-04"),value:2.5,label:"Jan 4"},{date:new Date("2024-01-05"),value:3,label:"Jan 5"}]}],b=[{label:"Windows",value:8e4,valueDisplay:"80K",percentage:2},{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:5},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:1}],x=({children:s})=>(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:s}),w={render:()=>(0,t.jsx)(h.N,{children:(0,t.jsxs)(x,{children:[(0,t.jsx)(_.A,{data:S,width:400,height:300}),(0,t.jsx)(p.A,{data:P,width:400,height:300}),(0,t.jsx)(o.A,{data:b,width:400,label:"Pie Chart",note:"Default Theme"})]})})},c={render:()=>(0,t.jsx)(h.N,{theme:v.QI,children:(0,t.jsxs)(x,{children:[(0,t.jsx)(_.A,{data:S,width:400,height:300}),(0,t.jsx)(p.A,{data:P,width:400,height:300}),(0,t.jsx)(o.A,{data:b,width:400,label:"Pie Chart",note:"Jetpack Theme"})]})})},a={render:()=>(0,t.jsx)(h.N,{theme:v.pk,children:(0,t.jsxs)(x,{children:[(0,t.jsx)(_.A,{data:S,width:400,height:300}),(0,t.jsx)(p.A,{data:P,width:400,height:300}),(0,t.jsx)(o.A,{data:b,width:400,label:"Pie Chart",note:"Woo Theme"})]})})},A={render:()=>(0,t.jsx)(h.N,{theme:{colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},children:(0,t.jsxs)(x,{children:[(0,t.jsx)(_.A,{data:S,width:400,height:300}),(0,t.jsx)(p.A,{data:P,width:400,height:300}),(0,t.jsx)(o.A,{data:b,width:400,label:"Pie Chart",note:"Custom Color Theme"})]})})},r=["Default","JetpackTheme","WooTheme","CustomColorTheme"];w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Default Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...w.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={jetpackTheme}>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Jetpack Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...c.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={wooTheme}>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Woo Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...a.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}}},"../charts/src/components/line-chart/line-chart.tsx":(R,f,e)=>{e.d(f,{A:()=>k});var h=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/catmullRom.js"),v=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/linear.js"),_=e("../../../node_modules/.pnpm/@visx+gradient@3.12.0_react@18.3.1/node_modules/@visx/gradient/esm/gradients/LinearGradient.js"),p=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),o=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/components/XYChart.js"),g=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/components/grid/AnimatedGrid.js"),t=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/components/axis/AnimatedAxis.js"),N=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/components/series/AnimatedAreaSeries.js"),G=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/components/Tooltip.js"),W=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),O=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),P=e("../charts/src/providers/theme/theme-provider.tsx"),S=e("../charts/src/components/legend/base-legend.tsx"),b=e("../charts/src/components/shared/with-responsive.tsx"),x=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),w=e.n(x),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/line-chart/line-chart.module.scss"),a={};a.insert="head",a.singleton=!1;var A=w()(c.A,a);const r=c.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=({tooltipData:i})=>{const L=i?.nearestDatum?.datum;if(!L)return null;const B=Object.entries(i?.datumByKey||{}).map(([d,{datum:D}])=>({key:d,value:D.value})).sort((d,D)=>D.value-d.value);return(0,s.jsxs)("div",{className:r["line-chart__tooltip"],children:[(0,s.jsx)("div",{className:r["line-chart__tooltip-date"],children:L.date?.toLocaleDateString()}),B.map(d=>(0,s.jsxs)("div",{className:r["line-chart__tooltip-row"],children:[(0,s.jsxs)("span",{className:r["line-chart__tooltip-label"],children:[d.key,":"]}),(0,s.jsx)("span",{className:r["line-chart__tooltip-value"],children:d.value})]},d.key))]})},j=i=>new Date(i).toLocaleDateString(void 0,{month:"short",day:"numeric"}),V=i=>i?.length?i.some(B=>B.data.some(d=>isNaN(d.value)||d.value===null||d.value===void 0||isNaN(d.date.getTime())))?"Invalid data":null:"No data available",T=({data:i,width:L,height:B,className:d,margin:D,withTooltips:I=!0,showLegend:Y=!1,legendOrientation:Z="horizontal",withGradientFill:U=!1,smoothing:M=!0,renderTooltip:K=y,options:C={}})=>{const E=(0,P.R)(),J=(0,O.useMemo)(()=>{const n=i?.map(u=>u.options?.stroke??"").filter(Boolean)??[];return(0,p.A)({...E,colors:[...n,...E.colors]})},[E,i]);D=(0,O.useMemo)(()=>{let n={};return C.axis?.y?.orientation==="right"&&(n={...n,right:40,left:0}),C.axis?.x?.orientation==="top"&&(n={...n,top:40,bottom:0}),{...n,...D}},[D,C]);const F=V(i);if(F)return(0,s.jsx)("div",{className:(0,W.A)("line-chart",r["line-chart"]),children:F});const H=i.map((n,u)=>({label:n.label,value:"",color:E.colors[u%E.colors.length]})),Q={xAccessor:n=>n?.date,yAccessor:n=>n?.value};return(0,s.jsxs)("div",{className:(0,W.A)("line-chart",r["line-chart"],d),"data-testid":"line-chart",role:"img","aria-label":"line chart",children:[(0,s.jsxs)(o.A,{theme:J,width:L,height:B,margin:{top:0,right:0,bottom:0,left:0,...D},xScale:{type:"time",...C?.xScale},yScale:{type:"linear",nice:!0,zero:!1,...C?.yScale},children:[(0,s.jsx)(g.A,{columns:!1,numTicks:4}),(0,s.jsx)(t.A,{orientation:"bottom",numTicks:5,tickFormat:j,...C?.axis?.x}),(0,s.jsx)(t.A,{orientation:"left",numTicks:4,...C?.axis?.y}),i.map((n,u)=>{const $=n.options?.stroke??J.colors[u%J.colors.length];return(0,s.jsxs)("g",{children:[U&&(0,s.jsx)(_.A,{id:`area-gradient-${u+1}`,from:$,to:"white",toOpacity:.1,...n.options?.gradient,"data-testid":"line-gradient"}),(0,s.jsx)(N.A,{dataKey:n?.label,data:n.data,...Q,fill:U?`url(#area-gradient-${u+1})`:void 0,renderLine:!0,curve:M?h.A:v.A},n?.label)]},n?.label||u)}),I&&(0,s.jsx)(G.A,{snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,showSeriesGlyphs:!0,renderTooltip:K})]}),Y&&(0,s.jsx)(S.$,{items:H,orientation:Z,className:r["line-chart-legend"]})]})},k=(0,b.F)(T);try{linechart.displayName="linechart",linechart.__docgenInfo={description:"",displayName:"linechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"true"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: { type?: keyof ScaleTypeToScaleConfig<DefaultOutput, StringLike, DefaultThresholdInput>; zero?: boolean; domain?: [...]; range?: [...]; }; xScale?: { ...; }; axis?: { ...; }; }"}},renderTooltip:{defaultValue:{value:`( {
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
}`},description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withGradientFill:{defaultValue:{value:"false"},description:"",name:"withGradientFill",required:!1,type:{name:"boolean"}},smoothing:{defaultValue:{value:"true"},description:"",name:"smoothing",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/line-chart.tsx#linechart"]={docgenInfo:linechart.__docgenInfo,name:"linechart",path:"../charts/src/components/line-chart/line-chart.tsx#linechart"})}catch{}},"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":(R,f,e)=>{e.d(f,{A:()=>s});var h=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),v=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),_=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),p=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),o=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),g=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),N=e("../charts/src/providers/theme/theme-provider.tsx"),G=e("../charts/src/components/legend/base-legend.tsx"),W=e("../charts/src/components/shared/with-responsive.tsx"),O=e("../charts/src/components/tooltip/base-tooltip.tsx"),P=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),S=e.n(P),b=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),x={};x.insert="head",x.singleton=!1;var w=S()(b.A,x);const c=b.A.locals||{};var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const A=y=>y.length?y.some(T=>T.percentage<0||T.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:y.reduce((T,k)=>T+k.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},r=({data:y,width:j=400,thickness:V=.4,clockwise:T=!0,withTooltips:k=!1,showLegend:i=!1,legendOrientation:L="horizontal",label:B,note:d,className:D})=>{const I=(0,N.R)(),{tooltipOpen:Y,tooltipLeft:Z,tooltipTop:U,tooltipData:M,hideTooltip:K,showTooltip:C}=(0,o.A)(),E=(0,t.useCallback)((l,m)=>{const q=(0,h.A)(l);q&&C({tooltipData:m.data,tooltipLeft:q.x,tooltipTop:q.y-10})},[C]),J=(0,t.useCallback)(()=>{K()},[K]),F=(0,t.useCallback)(l=>m=>{E(m,l)},[E]),{isValid:H,message:Q}=A(y);if(!H)return(0,a.jsx)("div",{className:c["pie-semi-circle-chart"],children:(0,a.jsx)("svg",{width:j,height:j/2,"data-testid":"pie-chart-svg",children:(0,a.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:c.error,children:Q})})});const n=j/2,u=.03,$=j-u*2,ee=n-u,z=Math.min($,ee*2)/2,te=z*(1-V+u),ae=y.map((l,m)=>({...l,index:m})),ne=T?-Math.PI/2:Math.PI/2,se=T?Math.PI/2:-Math.PI/2,X={value:l=>l.value,sort:(l,m)=>m.value-l.value,fill:l=>l.color||I.colors[l.index%I.colors.length]},le=y.map((l,m)=>({label:l.label,value:l.valueDisplay||l.value.toString(),color:X.fill({...l,index:m})}));return(0,a.jsxs)("div",{className:(0,g.A)("pie-semi-circle-chart",c["pie-semi-circle-chart"],D),"data-testid":"pie-chart-container",children:[(0,a.jsx)("svg",{width:j,height:n,viewBox:`0 0 ${j} ${n}`,"data-testid":"pie-chart-svg",children:(0,a.jsxs)(v.A,{top:z,left:z,children:[(0,a.jsx)(_.A,{data:ae,pieValue:X.value,outerRadius:z,innerRadius:te,cornerRadius:3,padAngle:u,startAngle:ne,endAngle:se,pieSort:X.sort,children:l=>l.arcs.map(m=>(0,a.jsx)("g",{onMouseMove:F(m),onMouseLeave:J,children:(0,a.jsx)("path",{d:l.path(m)||"",fill:X.fill(m.data),"data-testid":"pie-segment"})},m.data.label))}),(0,a.jsxs)(v.A,{children:[(0,a.jsx)(p.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:c.label,children:B}),(0,a.jsx)(p.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:c.note,children:d})]})]})}),k&&Y&&M&&(0,a.jsx)(O.R,{data:{label:M.label,value:M.value,valueDisplay:M.valueDisplay},top:U||0,left:Z||0}),i&&(0,a.jsx)(G.$,{items:le,orientation:L,className:c["pie-semi-circle-chart-legend"]})]})};r.displayName="PieSemiCircleChart";const s=(0,W.F)(r);try{r.displayName="PieSemiCircleChart",r.__docgenInfo={description:"",displayName:"PieSemiCircleChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:{value:"400"},description:"Width of the chart in pixels; height would be half of this value calculated automatically.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label text to display above the chart",name:"label",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: { type?: keyof ScaleTypeToScaleConfig<DefaultOutput, StringLike, DefaultThresholdInput>; zero?: boolean; domain?: [...]; range?: [...]; }; xScale?: { ...; }; axis?: { ...; }; }"}},thickness:{defaultValue:{value:"0.4"},description:"Thickness of the pie chart. A value between 0 and 1",name:"thickness",required:!1,type:{name:"number"}},clockwise:{defaultValue:{value:"true"},description:`Direction of chart rendering
true for clockwise, false for counter-clockwise`,name:"clockwise",required:!1,type:{name:"boolean"}},note:{defaultValue:null,description:"Note text to display below the label",name:"note",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"]={docgenInfo:r.__docgenInfo,name:"PieSemiCircleChart",path:"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/line-chart/line-chart.module.scss":(R,f,e)=>{e.d(f,{A:()=>g});var h=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(h),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),p=e.n(_),o=p()(v());o.push([R.id,".SVlAnnWw2ot8McusfLcw{position:relative}.WG8wpgeFR6IoBhr41Y3z{background:#fff;padding:.5rem}.t5p9YWtrovlLQm8WlrGF{font-weight:bold;padding-bottom:10px}.FPtDJMJR2GRu0df3iYy6{display:flex;align-items:center;padding:4px 0;justify-content:space-between}.xTJS98Xw7HFAGWFwzsgd{font-weight:500;padding-right:1rem}",""]),o.locals={"line-chart":"SVlAnnWw2ot8McusfLcw","line-chart__tooltip":"WG8wpgeFR6IoBhr41Y3z","line-chart__tooltip-date":"t5p9YWtrovlLQm8WlrGF","line-chart__tooltip-row":"FPtDJMJR2GRu0df3iYy6","line-chart__tooltip-label":"xTJS98Xw7HFAGWFwzsgd"};const g=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":(R,f,e)=>{e.d(f,{A:()=>g});var h=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(h),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),p=e.n(_),o=p()(v());o.push([R.id,".xQEsZ9upN7GZLvXugRlk{position:relative;text-align:center}.u28WZeoUdhsFAVkB8ttn{margin-top:1rem}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0px;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0px;font-size:14px}",""]),o.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk","pie-semi-circle-chart-legend":"u28WZeoUdhsFAVkB8ttn",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const g=o}}]);
