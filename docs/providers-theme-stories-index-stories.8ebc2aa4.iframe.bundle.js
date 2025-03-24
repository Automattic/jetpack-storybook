"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4848],{"../charts/src/providers/theme/stories/index.stories.tsx":(W,y,e)=>{e.r(y),e.d(y,{CustomTheme:()=>B,Default:()=>k,JetpackTheme:()=>c,WooTheme:()=>n,__namedExportsOrder:()=>r,default:()=>j});var h=e("../charts/src/providers/theme/theme-provider.tsx"),v=e("../charts/src/providers/theme/themes.ts"),_=e("../charts/src/components/line-chart/line-chart.tsx"),p=e("../charts/src/components/bar-chart/bar-chart.tsx"),l=e("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),f=e("../charts/src/components/bar-chart/stories/sample-data.ts"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),U=`import { Meta, StoryObj } from '@storybook/react';
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
`,K={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},JetpackTheme:{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},WooTheme:{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},CustomTheme:{startLoc:{col:27,line:153},endLoc:{col:1,line:188},startBody:{col:27,line:153},endBody:{col:1,line:188}}};const j={title:"JS Packages/Charts/Themes",component:h.N,parameters:{storySource:{source:`import { ThemeProvider, jetpackTheme, wooTheme } from '../.';
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
};`,locationsMap:{default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},"jetpack-theme":{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},"woo-theme":{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},"custom-theme":{startLoc:{col:27,line:153},endLoc:{col:1,line:188},startBody:{col:27,line:153},endBody:{col:1,line:188}}}},layout:"centered"}},L=[f.A[0],f.A[1],f.A[2]],E=[{group:"Line 1",label:"Line 1",data:[{date:new Date("2024-01-01"),value:10,label:"Jan 1"},{date:new Date("2024-01-02"),value:20,label:"Jan 2"},{date:new Date("2024-01-03"),value:15,label:"Jan 3"},{date:new Date("2024-01-04"),value:25,label:"Jan 4"},{date:new Date("2024-01-05"),value:30,label:"Jan 5"}]},{group:"Line 2",label:"Line 2",data:[{date:new Date("2024-01-01"),value:1,label:"Jan 1"},{date:new Date("2024-01-02"),value:2,label:"Jan 2"},{date:new Date("2024-01-03"),value:1.5,label:"Jan 3"},{date:new Date("2024-01-04"),value:2.5,label:"Jan 4"},{date:new Date("2024-01-05"),value:3,label:"Jan 5"}]}],T=[{label:"Windows",value:8e4,valueDisplay:"80K",percentage:2},{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:5},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:1}],D=({children:s})=>(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:s}),k={render:()=>(0,t.jsx)(h.N,{children:(0,t.jsxs)(D,{children:[(0,t.jsx)(_.A,{data:E,width:400,height:300}),(0,t.jsx)(p.A,{data:L,width:400,height:300}),(0,t.jsx)(l.A,{data:T,width:400,label:"Pie Chart",note:"Default Theme"})]})})},c={render:()=>(0,t.jsx)(h.N,{theme:v.QI,children:(0,t.jsxs)(D,{children:[(0,t.jsx)(_.A,{data:E,width:400,height:300}),(0,t.jsx)(p.A,{data:L,width:400,height:300}),(0,t.jsx)(l.A,{data:T,width:400,label:"Pie Chart",note:"Jetpack Theme"})]})})},n={render:()=>(0,t.jsx)(h.N,{theme:v.pk,children:(0,t.jsxs)(D,{children:[(0,t.jsx)(_.A,{data:E,width:400,height:300}),(0,t.jsx)(p.A,{data:L,width:400,height:300}),(0,t.jsx)(l.A,{data:T,width:400,label:"Pie Chart",note:"Woo Theme"})]})})},B={render:()=>(0,t.jsx)(h.N,{theme:{colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},children:(0,t.jsxs)(D,{children:[(0,t.jsx)(_.A,{data:E,width:400,height:300}),(0,t.jsx)(p.A,{data:L,width:400,height:300}),(0,t.jsx)(l.A,{data:T,width:400,label:"Pie Chart",note:"Custom Color Theme"})]})})},r=["Default","JetpackTheme","WooTheme","CustomTheme"];k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Default Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...k.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={jetpackTheme}>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Jetpack Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...c.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}}},"../charts/src/components/line-chart/line-chart.tsx":(W,y,e)=>{e.d(y,{A:()=>Y});var h=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/catmullRom.js"),v=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/linear.js"),_=e("../../../node_modules/.pnpm/@visx+gradient@3.12.0_react@18.3.1/node_modules/@visx/gradient/esm/gradients/LinearGradient.js"),p=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),l=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/components/XYChart.js"),f=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/components/grid/AnimatedGrid.js"),t=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/components/axis/AnimatedAxis.js"),U=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/components/series/AnimatedAreaSeries.js"),K=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/components/Tooltip.js"),I=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),j=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),L=e("../charts/src/providers/theme/theme-provider.tsx"),E=e("../charts/src/components/legend/base-legend.tsx"),T=e("../charts/src/components/shared/with-responsive.tsx"),D=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=e.n(D),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/line-chart/line-chart.module.scss"),n={};n.insert="head",n.singleton=!1;var B=k()(c.A,n);const r=c.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const C=100,S=({tooltipData:u})=>{const b=u?.nearestDatum?.datum;if(!b)return null;const M=Object.entries(u?.datumByKey||{}).map(([i,{datum:g}])=>({key:i,value:g.value})).sort((i,g)=>g.value-i.value);return(0,s.jsxs)("div",{className:r["line-chart__tooltip"],children:[(0,s.jsx)("div",{className:r["line-chart__tooltip-date"],children:b.date?.toLocaleDateString()}),M.map(i=>(0,s.jsxs)("div",{className:r["line-chart__tooltip-row"],children:[(0,s.jsxs)("span",{className:r["line-chart__tooltip-label"],children:[i.key,":"]}),(0,s.jsx)("span",{className:r["line-chart__tooltip-value"],children:i.value})]},i.key))]})},F=u=>new Date(u).toLocaleDateString(void 0,{month:"short",day:"numeric"}),w=u=>u?.length?u.some(M=>M.data.some(i=>isNaN(i.value)||i.value===null||i.value===void 0||isNaN(i.date.getTime())))?"Invalid data":null:"No data available",J=({data:u,width:b,height:M,className:i,margin:g,withTooltips:Z=!0,showLegend:$=!1,legendOrientation:Q="horizontal",withGradientFill:O=!1,smoothing:z=!0,renderTooltip:X=S,options:P={},onPointerDown:q=void 0,onPointerUp:ee=void 0,onPointerMove:te=void 0,onPointerOut:ae=void 0})=>{const x=(0,L.R)(),R=(0,j.useId)(),A=(0,j.useMemo)(()=>u.map(a=>({...a,data:a.data.sort((d,G)=>d.date.getTime()-G.date.getTime())})),[u]),V=(0,j.useMemo)(()=>{const a=A?.map(d=>d.options?.stroke??"").filter(Boolean)??[];return(0,p.A)({...x,colors:[...a,...x.colors]})},[x,A]);g=(0,j.useMemo)(()=>{let a={};return P.axis?.y?.orientation==="right"&&(a={...a,right:40,left:0}),P.axis?.x?.orientation==="top"&&(a={...a,top:20,bottom:10}),{...a,...g}},[g,P]);const N=(0,j.useMemo)(()=>Math.min(A[0]?.data.length,Math.ceil(b/C)),[A,b]),H=w(A);if(H)return(0,s.jsx)("div",{className:(0,I.A)("line-chart",r["line-chart"]),children:H});const ne=A.map((a,d)=>({label:a.label,value:"",color:x.colors[d%x.colors.length]})),oe={xAccessor:a=>a?.date,yAccessor:a=>a?.value};return(0,s.jsxs)("div",{className:(0,I.A)("line-chart",r["line-chart"],i),"data-testid":"line-chart",role:"img","aria-label":"line chart",children:[(0,s.jsxs)(l.A,{theme:V,width:b,height:M,margin:{top:10,right:0,bottom:20,left:40,...g},xScale:{type:"time",...P?.xScale},yScale:{type:"linear",nice:!0,zero:!1,...P?.yScale},onPointerDown:q,onPointerUp:ee,onPointerMove:te,onPointerOut:ae,pointerEventsDataKey:"nearest",children:[(0,s.jsx)(f.A,{columns:!1,numTicks:4}),(0,s.jsx)(t.A,{orientation:"bottom",numTicks:N,tickFormat:F,...P?.axis?.x}),(0,s.jsx)(t.A,{orientation:"left",numTicks:4,...P?.axis?.y}),A.map((a,d)=>{const G=a.options?.stroke??V.colors[d%V.colors.length],o=x?.seriesLineStyles?.[d%x.seriesLineStyles.length]||{};return(0,s.jsxs)("g",{children:[O&&(0,s.jsx)(_.A,{id:`area-gradient-${R}-${d+1}`,from:G,fromOpacity:.4,toOpacity:.1,to:V.backgroundColor,...a.options?.gradient,"data-testid":"line-gradient"}),(0,s.jsx)(U.A,{dataKey:a?.label,data:a.data,...oe,fill:O?`url(#area-gradient-${R}-${d+1})`:void 0,renderLine:!0,curve:z?h.A:v.A,lineProps:o},a?.label)]},a?.label||d)}),Z&&(0,s.jsx)(K.A,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,showSeriesGlyphs:!0,renderTooltip:X})]}),$&&(0,s.jsx)(E.$,{items:ne,orientation:Q,className:r["line-chart-legend"]})]})},Y=(0,T.F)(J);try{linechart.displayName="linechart",linechart.__docgenInfo={description:"",displayName:"linechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:{value:"undefined"},description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"true"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"x"'},{value:'"y"'},{value:'"xy"'},{value:'"none"'}]}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: { type?: keyof ScaleTypeToScaleConfig<DefaultOutput, StringLike, DefaultThresholdInput>; zero?: boolean; domain?: [...]; range?: [...]; }; xScale?: { ...; }; axis?: { ...; }; }"}},renderTooltip:{defaultValue:{value:`( {
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
}`},description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withGradientFill:{defaultValue:{value:"false"},description:"",name:"withGradientFill",required:!1,type:{name:"boolean"}},smoothing:{defaultValue:{value:"true"},description:"",name:"smoothing",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/line-chart.tsx#linechart"]={docgenInfo:linechart.__docgenInfo,name:"linechart",path:"../charts/src/components/line-chart/line-chart.tsx#linechart"})}catch{}},"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":(W,y,e)=>{e.d(y,{A:()=>s});var h=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),v=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),_=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),p=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),l=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),f=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),U=e("../charts/src/providers/theme/theme-provider.tsx"),K=e("../charts/src/components/legend/base-legend.tsx"),I=e("../charts/src/components/shared/with-responsive.tsx"),j=e("../charts/src/components/tooltip/base-tooltip.tsx"),L=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=e.n(L),T=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),D={};D.insert="head",D.singleton=!1;var k=E()(T.A,D);const c=T.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const B=C=>C.length?C.some(w=>w.percentage<0||w.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:C.reduce((w,J)=>w+J.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},r=({data:C,width:S=400,thickness:F=.4,clockwise:w=!0,withTooltips:J=!1,showLegend:Y=!1,legendOrientation:u="horizontal",label:b,note:M,className:i})=>{const g=(0,U.R)(),{tooltipOpen:Z,tooltipLeft:$,tooltipTop:Q,tooltipData:O,hideTooltip:z,showTooltip:X}=(0,l.A)(),P=(0,t.useCallback)((o,m)=>{const se=(0,h.A)(o);se&&X({tooltipData:m.data,tooltipLeft:se.x,tooltipTop:se.y-10})},[X]),q=(0,t.useCallback)(()=>{z()},[z]),ee=(0,t.useCallback)(o=>m=>{P(m,o)},[P]),{isValid:te,message:ae}=B(C);if(!te)return(0,n.jsx)("div",{className:c["pie-semi-circle-chart"],children:(0,n.jsx)("svg",{width:S,height:S/2,"data-testid":"pie-chart-svg",children:(0,n.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:c.error,children:ae})})});const x=S/2,R=.03,A=S-R*2,V=x-R,N=Math.min(A,V*2)/2,H=N*(1-F+R),ne=C.map((o,m)=>({...o,index:m})),oe=w?-Math.PI/2:Math.PI/2,a=w?Math.PI/2:-Math.PI/2,d={value:o=>o.value,sort:(o,m)=>m.value-o.value,fill:o=>o.color||g.colors[o.index%g.colors.length]},G=C.map((o,m)=>({label:o.label,value:o.valueDisplay||o.value.toString(),color:d.fill({...o,index:m})}));return(0,n.jsxs)("div",{className:(0,f.A)("pie-semi-circle-chart",c["pie-semi-circle-chart"],i),"data-testid":"pie-chart-container",children:[(0,n.jsx)("svg",{width:S,height:x,viewBox:`0 0 ${S} ${x}`,"data-testid":"pie-chart-svg",children:(0,n.jsxs)(v.A,{top:N,left:N,children:[(0,n.jsx)(_.A,{data:ne,pieValue:d.value,outerRadius:N,innerRadius:H,cornerRadius:3,padAngle:R,startAngle:oe,endAngle:a,pieSort:d.sort,children:o=>o.arcs.map(m=>(0,n.jsx)("g",{onMouseMove:ee(m),onMouseLeave:q,children:(0,n.jsx)("path",{d:o.path(m)||"",fill:d.fill(m.data),"data-testid":"pie-segment"})},m.data.label))}),(0,n.jsxs)(v.A,{children:[(0,n.jsx)(p.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:c.label,children:b}),(0,n.jsx)(p.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:c.note,children:M})]})]})}),J&&Z&&O&&(0,n.jsx)(j.R,{data:{label:O.label,value:O.value,valueDisplay:O.valueDisplay},top:Q||0,left:$||0}),Y&&(0,n.jsx)(K.$,{items:G,orientation:u,className:c["pie-semi-circle-chart-legend"]})]})};r.displayName="PieSemiCircleChart";const s=(0,I.F)(r);try{r.displayName="PieSemiCircleChart",r.__docgenInfo={description:"",displayName:"PieSemiCircleChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:{value:"400"},description:"Width of the chart in pixels; height would be half of this value calculated automatically.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label text to display above the chart",name:"label",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"x"'},{value:'"y"'},{value:'"xy"'},{value:'"none"'}]}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: { type?: keyof ScaleTypeToScaleConfig<DefaultOutput, StringLike, DefaultThresholdInput>; zero?: boolean; domain?: [...]; range?: [...]; }; xScale?: { ...; }; axis?: { ...; }; }"}},thickness:{defaultValue:{value:"0.4"},description:"Thickness of the pie chart. A value between 0 and 1",name:"thickness",required:!1,type:{name:"number"}},clockwise:{defaultValue:{value:"true"},description:`Direction of chart rendering
true for clockwise, false for counter-clockwise`,name:"clockwise",required:!1,type:{name:"boolean"}},note:{defaultValue:null,description:"Note text to display below the label",name:"note",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"]={docgenInfo:r.__docgenInfo,name:"PieSemiCircleChart",path:"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/line-chart/line-chart.module.scss":(W,y,e)=>{e.d(y,{A:()=>f});var h=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(h),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),p=e.n(_),l=p()(v());l.push([W.id,".SVlAnnWw2ot8McusfLcw{position:relative}.WG8wpgeFR6IoBhr41Y3z{background:#fff;padding:.5rem}.t5p9YWtrovlLQm8WlrGF{font-weight:bold;padding-bottom:10px}.FPtDJMJR2GRu0df3iYy6{display:flex;align-items:center;padding:4px 0;justify-content:space-between}.xTJS98Xw7HFAGWFwzsgd{font-weight:500;padding-right:1rem}",""]),l.locals={"line-chart":"SVlAnnWw2ot8McusfLcw","line-chart__tooltip":"WG8wpgeFR6IoBhr41Y3z","line-chart__tooltip-date":"t5p9YWtrovlLQm8WlrGF","line-chart__tooltip-row":"FPtDJMJR2GRu0df3iYy6","line-chart__tooltip-label":"xTJS98Xw7HFAGWFwzsgd"};const f=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":(W,y,e)=>{e.d(y,{A:()=>f});var h=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(h),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),p=e.n(_),l=p()(v());l.push([W.id,".xQEsZ9upN7GZLvXugRlk{position:relative;text-align:center}.u28WZeoUdhsFAVkB8ttn{margin-top:1rem}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0px;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0px;font-size:14px}",""]),l.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk","pie-semi-circle-chart-legend":"u28WZeoUdhsFAVkB8ttn",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const f=l}}]);
