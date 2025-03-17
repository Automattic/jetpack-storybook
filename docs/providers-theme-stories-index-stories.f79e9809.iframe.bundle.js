"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4848],{"../charts/src/providers/theme/stories/index.stories.tsx":(W,x,e)=>{e.r(x),e.d(x,{CustomColorTheme:()=>M,Default:()=>B,JetpackTheme:()=>d,WooTheme:()=>n,__namedExportsOrder:()=>r,default:()=>P});var p=e("../charts/src/providers/theme/theme-provider.tsx"),v=e("../charts/src/providers/theme/themes.ts"),_=e("../charts/src/components/line-chart/line-chart.tsx"),h=e("../charts/src/components/bar-chart/bar-chart.tsx"),s=e("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),f=e("../charts/src/components/bar-chart/stories/sample-data.ts"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),U=`import { Meta, StoryObj } from '@storybook/react';
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
`,K={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},JetpackTheme:{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},WooTheme:{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},CustomColorTheme:{startLoc:{col:32,line:153},endLoc:{col:1,line:179},startBody:{col:32,line:153},endBody:{col:1,line:179}}};const P={title:"JS Packages/Charts/Themes",component:p.N,parameters:{storySource:{source:`import { ThemeProvider, jetpackTheme, wooTheme } from '../.';
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
};`,locationsMap:{default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},"jetpack-theme":{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},"woo-theme":{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},"custom-color-theme":{startLoc:{col:32,line:153},endLoc:{col:1,line:179},startBody:{col:32,line:153},endBody:{col:1,line:179}}}},layout:"centered"}},E=[f.A[0],f.A[1],f.A[2]],L=[{group:"Line 1",label:"Line 1",data:[{date:new Date("2024-01-01"),value:10,label:"Jan 1"},{date:new Date("2024-01-02"),value:20,label:"Jan 2"},{date:new Date("2024-01-03"),value:15,label:"Jan 3"},{date:new Date("2024-01-04"),value:25,label:"Jan 4"},{date:new Date("2024-01-05"),value:30,label:"Jan 5"}]},{group:"Line 2",label:"Line 2",data:[{date:new Date("2024-01-01"),value:1,label:"Jan 1"},{date:new Date("2024-01-02"),value:2,label:"Jan 2"},{date:new Date("2024-01-03"),value:1.5,label:"Jan 3"},{date:new Date("2024-01-04"),value:2.5,label:"Jan 4"},{date:new Date("2024-01-05"),value:3,label:"Jan 5"}]}],j=[{label:"Windows",value:8e4,valueDisplay:"80K",percentage:2},{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:5},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:1}],y=({children:o})=>(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:o}),B={render:()=>(0,t.jsx)(p.N,{children:(0,t.jsxs)(y,{children:[(0,t.jsx)(_.A,{data:L,width:400,height:300}),(0,t.jsx)(h.A,{data:E,width:400,height:300}),(0,t.jsx)(s.A,{data:j,width:400,label:"Pie Chart",note:"Default Theme"})]})})},d={render:()=>(0,t.jsx)(p.N,{theme:v.QI,children:(0,t.jsxs)(y,{children:[(0,t.jsx)(_.A,{data:L,width:400,height:300}),(0,t.jsx)(h.A,{data:E,width:400,height:300}),(0,t.jsx)(s.A,{data:j,width:400,label:"Pie Chart",note:"Jetpack Theme"})]})})},n={render:()=>(0,t.jsx)(p.N,{theme:v.pk,children:(0,t.jsxs)(y,{children:[(0,t.jsx)(_.A,{data:L,width:400,height:300}),(0,t.jsx)(h.A,{data:E,width:400,height:300}),(0,t.jsx)(s.A,{data:j,width:400,label:"Pie Chart",note:"Woo Theme"})]})})},M={render:()=>(0,t.jsx)(p.N,{theme:{colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},children:(0,t.jsxs)(y,{children:[(0,t.jsx)(_.A,{data:L,width:400,height:300}),(0,t.jsx)(h.A,{data:E,width:400,height:300}),(0,t.jsx)(s.A,{data:j,width:400,label:"Pie Chart",note:"Custom Color Theme"})]})})},r=["Default","JetpackTheme","WooTheme","CustomColorTheme"];B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Default Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...B.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}}},"../charts/src/components/line-chart/line-chart.tsx":(W,x,e)=>{e.d(x,{A:()=>Y});var p=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/catmullRom.js"),v=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/linear.js"),_=e("../../../node_modules/.pnpm/@visx+gradient@3.12.0_react@18.3.1/node_modules/@visx/gradient/esm/gradients/LinearGradient.js"),h=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),s=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/components/XYChart.js"),f=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/components/grid/AnimatedGrid.js"),t=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/components/axis/AnimatedAxis.js"),U=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/components/series/AnimatedAreaSeries.js"),K=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.3_react-dom@18.3.1_react@18.3.1__react@18.3._b0945172871788de301c1d03c3ffb4e1/node_modules/@visx/xychart/esm/components/Tooltip.js"),I=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),P=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),E=e("../charts/src/providers/theme/theme-provider.tsx"),L=e("../charts/src/components/legend/base-legend.tsx"),j=e("../charts/src/components/shared/with-responsive.tsx"),y=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),B=e.n(y),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/line-chart/line-chart.module.scss"),n={};n.insert="head",n.singleton=!1;var M=B()(d.A,n);const r=d.A.locals||{};var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const C=100,T=({tooltipData:u})=>{const D=u?.nearestDatum?.datum;if(!D)return null;const O=Object.entries(u?.datumByKey||{}).map(([i,{datum:g}])=>({key:i,value:g.value})).sort((i,g)=>g.value-i.value);return(0,o.jsxs)("div",{className:r["line-chart__tooltip"],children:[(0,o.jsx)("div",{className:r["line-chart__tooltip-date"],children:D.date?.toLocaleDateString()}),O.map(i=>(0,o.jsxs)("div",{className:r["line-chart__tooltip-row"],children:[(0,o.jsxs)("span",{className:r["line-chart__tooltip-label"],children:[i.key,":"]}),(0,o.jsx)("span",{className:r["line-chart__tooltip-value"],children:i.value})]},i.key))]})},F=u=>new Date(u).toLocaleDateString(void 0,{month:"short",day:"numeric"}),S=u=>u?.length?u.some(O=>O.data.some(i=>isNaN(i.value)||i.value===null||i.value===void 0||isNaN(i.date.getTime())))?"Invalid data":null:"No data available",J=({data:u,width:D,height:O,className:i,margin:g,withTooltips:Z=!0,showLegend:$=!1,legendOrientation:Q="horizontal",withGradientFill:R=!1,smoothing:z=!0,renderTooltip:X=T,options:b={},onPointerDown:q=void 0,onPointerUp:ee=void 0,onPointerMove:te=void 0,onPointerOut:ae=void 0})=>{const w=(0,E.R)(),k=(0,P.useId)(),A=(0,P.useMemo)(()=>u.map(a=>({...a,data:a.data.sort((c,G)=>c.date.getTime()-G.date.getTime())})),[u]),V=(0,P.useMemo)(()=>{const a=A?.map(c=>c.options?.stroke??"").filter(Boolean)??[];return(0,h.A)({...w,colors:[...a,...w.colors]})},[w,A]);g=(0,P.useMemo)(()=>{let a={};return b.axis?.y?.orientation==="right"&&(a={...a,right:40,left:0}),b.axis?.x?.orientation==="top"&&(a={...a,top:20,bottom:10}),{...a,...g}},[g,b]);const N=(0,P.useMemo)(()=>Math.min(A[0]?.data.length,Math.ceil(D/C)),[A,D]),H=S(A);if(H)return(0,o.jsx)("div",{className:(0,I.A)("line-chart",r["line-chart"]),children:H});const ne=A.map((a,c)=>({label:a.label,value:"",color:w.colors[c%w.colors.length]})),oe={xAccessor:a=>a?.date,yAccessor:a=>a?.value};return(0,o.jsxs)("div",{className:(0,I.A)("line-chart",r["line-chart"],i),"data-testid":"line-chart",role:"img","aria-label":"line chart",children:[(0,o.jsxs)(s.A,{theme:V,width:D,height:O,margin:{top:10,right:0,bottom:20,left:40,...g},xScale:{type:"time",...b?.xScale},yScale:{type:"linear",nice:!0,zero:!1,...b?.yScale},onPointerDown:q,onPointerUp:ee,onPointerMove:te,onPointerOut:ae,pointerEventsDataKey:"nearest",children:[(0,o.jsx)(f.A,{columns:!1,numTicks:4}),(0,o.jsx)(t.A,{orientation:"bottom",numTicks:N,tickFormat:F,...b?.axis?.x}),(0,o.jsx)(t.A,{orientation:"left",numTicks:4,...b?.axis?.y}),A.map((a,c)=>{const G=a.options?.stroke??V.colors[c%V.colors.length];return(0,o.jsxs)("g",{children:[R&&(0,o.jsx)(_.A,{id:`area-gradient-${k}-${c+1}`,from:G,fromOpacity:.4,toOpacity:.1,to:V.backgroundColor,...a.options?.gradient,"data-testid":"line-gradient"}),(0,o.jsx)(U.A,{dataKey:a?.label,data:a.data,...oe,fill:R?`url(#area-gradient-${k}-${c+1})`:void 0,renderLine:!0,curve:z?p.A:v.A},a?.label)]},a?.label||c)}),Z&&(0,o.jsx)(K.A,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,showSeriesGlyphs:!0,renderTooltip:X})]}),$&&(0,o.jsx)(L.$,{items:ne,orientation:Q,className:r["line-chart-legend"]})]})},Y=(0,j.F)(J);try{linechart.displayName="linechart",linechart.__docgenInfo={description:"",displayName:"linechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: { type?: keyof ScaleTypeToScaleConfig<DefaultOutput, StringLike, DefaultThresholdInput>; zero?: boolean; domain?: [...]; range?: [...]; }; xScale?: { ...; }; axis?: { ...; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:{value:"undefined"},description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"true"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},renderTooltip:{defaultValue:{value:`( {
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
}`},description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withGradientFill:{defaultValue:{value:"false"},description:"",name:"withGradientFill",required:!1,type:{name:"boolean"}},smoothing:{defaultValue:{value:"true"},description:"",name:"smoothing",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/line-chart.tsx#linechart"]={docgenInfo:linechart.__docgenInfo,name:"linechart",path:"../charts/src/components/line-chart/line-chart.tsx#linechart"})}catch{}},"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":(W,x,e)=>{e.d(x,{A:()=>o});var p=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),v=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),_=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),h=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),s=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),f=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),U=e("../charts/src/providers/theme/theme-provider.tsx"),K=e("../charts/src/components/legend/base-legend.tsx"),I=e("../charts/src/components/shared/with-responsive.tsx"),P=e("../charts/src/components/tooltip/base-tooltip.tsx"),E=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),L=e.n(E),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),y={};y.insert="head",y.singleton=!1;var B=L()(j.A,y);const d=j.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const M=C=>C.length?C.some(S=>S.percentage<0||S.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:C.reduce((S,J)=>S+J.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},r=({data:C,width:T=400,thickness:F=.4,clockwise:S=!0,withTooltips:J=!1,showLegend:Y=!1,legendOrientation:u="horizontal",label:D,note:O,className:i})=>{const g=(0,U.R)(),{tooltipOpen:Z,tooltipLeft:$,tooltipTop:Q,tooltipData:R,hideTooltip:z,showTooltip:X}=(0,s.A)(),b=(0,t.useCallback)((l,m)=>{const le=(0,p.A)(l);le&&X({tooltipData:m.data,tooltipLeft:le.x,tooltipTop:le.y-10})},[X]),q=(0,t.useCallback)(()=>{z()},[z]),ee=(0,t.useCallback)(l=>m=>{b(m,l)},[b]),{isValid:te,message:ae}=M(C);if(!te)return(0,n.jsx)("div",{className:d["pie-semi-circle-chart"],children:(0,n.jsx)("svg",{width:T,height:T/2,"data-testid":"pie-chart-svg",children:(0,n.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:d.error,children:ae})})});const w=T/2,k=.03,A=T-k*2,V=w-k,N=Math.min(A,V*2)/2,H=N*(1-F+k),ne=C.map((l,m)=>({...l,index:m})),oe=S?-Math.PI/2:Math.PI/2,a=S?Math.PI/2:-Math.PI/2,c={value:l=>l.value,sort:(l,m)=>m.value-l.value,fill:l=>l.color||g.colors[l.index%g.colors.length]},G=C.map((l,m)=>({label:l.label,value:l.valueDisplay||l.value.toString(),color:c.fill({...l,index:m})}));return(0,n.jsxs)("div",{className:(0,f.A)("pie-semi-circle-chart",d["pie-semi-circle-chart"],i),"data-testid":"pie-chart-container",children:[(0,n.jsx)("svg",{width:T,height:w,viewBox:`0 0 ${T} ${w}`,"data-testid":"pie-chart-svg",children:(0,n.jsxs)(v.A,{top:N,left:N,children:[(0,n.jsx)(_.A,{data:ne,pieValue:c.value,outerRadius:N,innerRadius:H,cornerRadius:3,padAngle:k,startAngle:oe,endAngle:a,pieSort:c.sort,children:l=>l.arcs.map(m=>(0,n.jsx)("g",{onMouseMove:ee(m),onMouseLeave:q,children:(0,n.jsx)("path",{d:l.path(m)||"",fill:c.fill(m.data),"data-testid":"pie-segment"})},m.data.label))}),(0,n.jsxs)(v.A,{children:[(0,n.jsx)(h.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:d.label,children:D}),(0,n.jsx)(h.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:d.note,children:O})]})]})}),J&&Z&&R&&(0,n.jsx)(P.R,{data:{label:R.label,value:R.value,valueDisplay:R.valueDisplay},top:Q||0,left:$||0}),Y&&(0,n.jsx)(K.$,{items:G,orientation:u,className:d["pie-semi-circle-chart-legend"]})]})};r.displayName="PieSemiCircleChart";const o=(0,I.F)(r);try{r.displayName="PieSemiCircleChart",r.__docgenInfo={description:"",displayName:"PieSemiCircleChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:{value:"400"},description:"Width of the chart in pixels; height would be half of this value calculated automatically.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label text to display above the chart",name:"label",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: { type?: keyof ScaleTypeToScaleConfig<DefaultOutput, StringLike, DefaultThresholdInput>; zero?: boolean; domain?: [...]; range?: [...]; }; xScale?: { ...; }; axis?: { ...; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},thickness:{defaultValue:{value:"0.4"},description:"Thickness of the pie chart. A value between 0 and 1",name:"thickness",required:!1,type:{name:"number"}},clockwise:{defaultValue:{value:"true"},description:`Direction of chart rendering
true for clockwise, false for counter-clockwise`,name:"clockwise",required:!1,type:{name:"boolean"}},note:{defaultValue:null,description:"Note text to display below the label",name:"note",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"]={docgenInfo:r.__docgenInfo,name:"PieSemiCircleChart",path:"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/line-chart/line-chart.module.scss":(W,x,e)=>{e.d(x,{A:()=>f});var p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(p),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),h=e.n(_),s=h()(v());s.push([W.id,".SVlAnnWw2ot8McusfLcw{position:relative}.WG8wpgeFR6IoBhr41Y3z{background:#fff;padding:.5rem}.t5p9YWtrovlLQm8WlrGF{font-weight:bold;padding-bottom:10px}.FPtDJMJR2GRu0df3iYy6{display:flex;align-items:center;padding:4px 0;justify-content:space-between}.xTJS98Xw7HFAGWFwzsgd{font-weight:500;padding-right:1rem}",""]),s.locals={"line-chart":"SVlAnnWw2ot8McusfLcw","line-chart__tooltip":"WG8wpgeFR6IoBhr41Y3z","line-chart__tooltip-date":"t5p9YWtrovlLQm8WlrGF","line-chart__tooltip-row":"FPtDJMJR2GRu0df3iYy6","line-chart__tooltip-label":"xTJS98Xw7HFAGWFwzsgd"};const f=s},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":(W,x,e)=>{e.d(x,{A:()=>f});var p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(p),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),h=e.n(_),s=h()(v());s.push([W.id,".xQEsZ9upN7GZLvXugRlk{position:relative;text-align:center}.u28WZeoUdhsFAVkB8ttn{margin-top:1rem}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0px;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0px;font-size:14px}",""]),s.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk","pie-semi-circle-chart-legend":"u28WZeoUdhsFAVkB8ttn",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const f=s}}]);
