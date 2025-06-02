"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4848],{"../charts/src/providers/theme/stories/index.stories.tsx":(S,f,e)=>{e.r(f),e.d(f,{CustomTheme:()=>k,Default:()=>B,JetpackTheme:()=>v,WooTheme:()=>n,__namedExportsOrder:()=>h,default:()=>C});var i=e("../charts/src/providers/theme/theme-provider.tsx"),c=e("../charts/src/providers/theme/themes.ts"),m=e("../charts/src/components/line-chart/line-chart.tsx"),r=e("../charts/src/components/bar-chart/bar-chart.tsx"),o=e("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),_=e("../charts/src/components/bar-chart/stories/sample-data.ts"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),W=`import { Meta, StoryObj } from '@storybook/react';
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
`,w={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},JetpackTheme:{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},WooTheme:{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},CustomTheme:{startLoc:{col:27,line:153},endLoc:{col:1,line:188},startBody:{col:27,line:153},endBody:{col:1,line:188}}};const C={title:"JS Packages/Charts/Themes",component:i.NP,parameters:{storySource:{source:`import { ThemeProvider, jetpackTheme, wooTheme } from '../.';
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
};`,locationsMap:{default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},"jetpack-theme":{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},"woo-theme":{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},"custom-theme":{startLoc:{col:27,line:153},endLoc:{col:1,line:188},startBody:{col:27,line:153},endBody:{col:1,line:188}}}},layout:"centered"}},D=[_.A[0],_.A[1],_.A[2]],j=[{group:"Line 1",label:"Line 1",data:[{date:new Date("2024-01-01"),value:10,label:"Jan 1"},{date:new Date("2024-01-02"),value:20,label:"Jan 2"},{date:new Date("2024-01-03"),value:15,label:"Jan 3"},{date:new Date("2024-01-04"),value:25,label:"Jan 4"},{date:new Date("2024-01-05"),value:30,label:"Jan 5"}]},{group:"Line 2",label:"Line 2",data:[{date:new Date("2024-01-01"),value:1,label:"Jan 1"},{date:new Date("2024-01-02"),value:2,label:"Jan 2"},{date:new Date("2024-01-03"),value:1.5,label:"Jan 3"},{date:new Date("2024-01-04"),value:2.5,label:"Jan 4"},{date:new Date("2024-01-05"),value:3,label:"Jan 5"}]}],b=[{label:"Windows",value:8e4,valueDisplay:"80K",percentage:2},{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:5},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:1}],g=({children:l})=>(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:l}),B={render:()=>(0,t.jsx)(i.NP,{children:(0,t.jsxs)(g,{children:[(0,t.jsx)(m.A,{data:j,width:400,height:300}),(0,t.jsx)(r.A,{data:D,width:400,height:300}),(0,t.jsx)(o.A,{data:b,width:400,label:"Pie Chart",note:"Default Theme"})]})})},v={render:()=>(0,t.jsx)(i.NP,{theme:c.QI,children:(0,t.jsxs)(g,{children:[(0,t.jsx)(m.A,{data:j,width:400,height:300}),(0,t.jsx)(r.A,{data:D,width:400,height:300}),(0,t.jsx)(o.A,{data:b,width:400,label:"Pie Chart",note:"Jetpack Theme"})]})})},n={render:()=>(0,t.jsx)(i.NP,{theme:c.pk,children:(0,t.jsxs)(g,{children:[(0,t.jsx)(m.A,{data:j,width:400,height:300}),(0,t.jsx)(r.A,{data:D,width:400,height:300}),(0,t.jsx)(o.A,{data:b,width:400,label:"Pie Chart",note:"Woo Theme"})]})})},k={render:()=>(0,t.jsx)(i.NP,{theme:{colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},children:(0,t.jsxs)(g,{children:[(0,t.jsx)(m.A,{data:j,width:400,height:300}),(0,t.jsx)(r.A,{data:D,width:400,height:300}),(0,t.jsx)(o.A,{data:b,width:400,label:"Pie Chart",note:"Custom Color Theme"})]})})},h=["Default","JetpackTheme","WooTheme","CustomTheme"];B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Default Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...B.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={jetpackTheme}>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Jetpack Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...v.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={wooTheme}>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Woo Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...n.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}}},"../charts/src/components/line-chart/line-chart.tsx":(S,f,e)=>{e.d(f,{A:()=>$});var i=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/catmullRom.js"),c=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/linear.js"),m=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/monotone.js"),r=e("../../../node_modules/.pnpm/@visx+gradient@3.12.0_react@18.3.1/node_modules/@visx/gradient/esm/gradients/LinearGradient.js"),o=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),_=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/AnimatedGrid.js"),t=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/AnimatedAxis.js"),W=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/AnimatedAreaSeries.js"),w=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),y=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),C=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),D=e("../charts/src/providers/theme/theme-provider.tsx"),j=e("../charts/src/components/legend/base-legend.tsx"),b=e("../charts/src/components/shared/with-responsive.tsx"),g=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),B=e.n(g),v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss"),n={};n.insert="head",n.singleton=!1;var k=B()(v.A,n);const h=v.A.locals||{};var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const P=100,A=(p,x)=>{if(!p)return x?i.A:c.A;switch(p){case"smooth":return i.A;case"monotone":return m.G;case"linear":return c.A;default:return c.A}},X=({tooltipData:p})=>{const x=p?.nearestDatum?.datum;if(!x)return null;const O=Object.entries(p?.datumByKey||{}).map(([u,{datum:T}])=>({key:u,value:T.value})).sort((u,T)=>T.value-u.value);return(0,l.jsxs)("div",{className:h["line-chart__tooltip"],children:[(0,l.jsx)("div",{className:h["line-chart__tooltip-date"],children:x.date?.toLocaleDateString()}),O.map(u=>(0,l.jsxs)("div",{className:h["line-chart__tooltip-row"],children:[(0,l.jsxs)("span",{className:h["line-chart__tooltip-label"],children:[u.key,":"]}),(0,l.jsx)("span",{className:h["line-chart__tooltip-value"],children:u.value})]},u.key))]})},E=p=>new Date(p).toLocaleDateString(void 0,{month:"short",day:"numeric"}),J=p=>p?.length?p.some(O=>O.data.some(u=>isNaN(u.value)||u.value===null||u.value===void 0||isNaN(u.date.getTime())))?"Invalid data":null:"No data available",Q=({data:p,width:x,height:O,className:u,margin:T,withTooltips:q=!0,showLegend:ee=!1,legendOrientation:V="horizontal",withGradientFill:K=!1,smoothing:Y=!0,curveType:H="linear",renderTooltip:te=X,options:L={},onPointerDown:ae=void 0,onPointerUp:ne=void 0,onPointerMove:F=void 0,onPointerOut:I=void 0})=>{const N=(0,D.RW)(),U=(0,D.Ox)(p),M=(0,C.useId)(),R=(0,C.useMemo)(()=>p.map(s=>({...s,data:s.data.sort((a,d)=>a.date.getTime()-d.date.getTime())})),[p]);T=(0,C.useMemo)(()=>{let s={};return L.axis?.y?.orientation==="right"&&(s={...s,right:40,left:0}),L.axis?.x?.orientation==="top"&&(s={...s,top:20,bottom:10}),{...s,...T}},[T,L]);const se=(0,C.useMemo)(()=>Math.min(R[0]?.data.length,Math.ceil(x/P)),[R,x]),Z=J(R);if(Z)return(0,l.jsx)("div",{className:(0,y.A)("line-chart",h["line-chart"]),children:Z});const oe=R.map((s,a)=>({label:s.label,value:"",color:N.colors[a%N.colors.length]})),G={xAccessor:s=>s?.date,yAccessor:s=>s?.value};return(0,l.jsxs)("div",{className:(0,y.A)("line-chart",h["line-chart"],u),"data-testid":"line-chart",role:"img","aria-label":"line chart",children:[(0,l.jsxs)(o.A,{theme:U,width:x,height:O,margin:{top:10,right:0,bottom:20,left:40,...T},xScale:{type:"time",...L?.xScale},yScale:{type:"linear",nice:!0,zero:!1,...L?.yScale},onPointerDown:ae,onPointerUp:ne,onPointerMove:F,onPointerOut:I,pointerEventsDataKey:"nearest",children:[(0,l.jsx)(_.A,{columns:!1,numTicks:4}),(0,l.jsx)(t.A,{orientation:"bottom",numTicks:se,tickFormat:E,...L?.axis?.x}),(0,l.jsx)(t.A,{orientation:"left",numTicks:4,...L?.axis?.y}),R.map((s,a)=>{const d=s.options?.stroke??U.colors[a%U.colors.length],z=N?.seriesLineStyles?.[a%N.seriesLineStyles.length]||{};return(0,l.jsxs)("g",{children:[K&&(0,l.jsx)(r.A,{id:`area-gradient-${M}-${a+1}`,from:d,fromOpacity:.4,toOpacity:.1,to:U.backgroundColor,...s.options?.gradient,"data-testid":"line-gradient"}),(0,l.jsx)(W.A,{dataKey:s?.label,data:s.data,...G,fill:K?`url(#area-gradient-${M}-${a+1})`:void 0,renderLine:!0,curve:A(H,Y),lineProps:z},s?.label)]},s?.label||a)}),q&&(0,l.jsx)(w.A,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,showSeriesGlyphs:!0,renderTooltip:te})]}),ee&&(0,l.jsx)(j.$,{items:oe,orientation:V,className:h["line-chart-legend"]})]})},$=(0,b.F)(Q);try{linechart.displayName="linechart",linechart.__docgenInfo={description:"",displayName:"linechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:{value:"undefined"},description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"true"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: { type?: keyof ScaleTypeToScaleConfig<DefaultOutput, StringLike, DefaultThresholdInput>; zero?: boolean; domain?: [...]; range?: [...]; }; xScale?: { ...; }; axis?: { ...; }; }"}},renderTooltip:{defaultValue:{value:`( {
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
}`},description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withGradientFill:{defaultValue:{value:"false"},description:"",name:"withGradientFill",required:!1,type:{name:"boolean"}},smoothing:{defaultValue:{value:"true"},description:"",name:"smoothing",required:!1,type:{name:"boolean"}},curveType:{defaultValue:{value:"linear"},description:"",name:"curveType",required:!1,type:{name:"enum",value:[{value:'"linear"'},{value:'"smooth"'},{value:'"monotone"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/line-chart.tsx#linechart"]={docgenInfo:linechart.__docgenInfo,name:"linechart",path:"../charts/src/components/line-chart/line-chart.tsx#linechart"})}catch{}},"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":(S,f,e)=>{e.d(f,{A:()=>l});var i=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),c=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),m=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),r=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),o=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),_=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),W=e("../charts/src/providers/theme/theme-provider.tsx"),w=e("../charts/src/components/legend/base-legend.tsx"),y=e("../charts/src/components/shared/with-responsive.tsx"),C=e("../charts/src/components/tooltip/base-tooltip.tsx"),D=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=e.n(D),b=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),g={};g.insert="head",g.singleton=!1;var B=j()(b.A,g);const v=b.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const k=P=>P.length?P.some(E=>E.percentage<0||E.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:P.reduce((E,J)=>E+J.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},h=({data:P,width:A=400,thickness:X=.4,clockwise:E=!0,withTooltips:J=!1,showLegend:Q=!1,legendOrientation:$="horizontal",label:p,note:x,className:O})=>{const u=(0,W.RW)(),{tooltipOpen:T,tooltipLeft:q,tooltipTop:ee,tooltipData:V,hideTooltip:K,showTooltip:Y}=(0,o.A)(),H=(0,t.useCallback)((a,d)=>{const z=(0,i.A)(a);z&&Y({tooltipData:d.data,tooltipLeft:z.x,tooltipTop:z.y-10})},[Y]),te=(0,t.useCallback)(()=>{K()},[K]),L=(0,t.useCallback)(a=>d=>{H(d,a)},[H]),{isValid:ae,message:ne}=k(P);if(!ae)return(0,n.jsx)("div",{className:v["pie-semi-circle-chart"],children:(0,n.jsx)("svg",{width:A,height:A/2,"data-testid":"pie-chart-svg",children:(0,n.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:v.error,children:ne})})});const F=A/2,I=.03,N=A-I*2,U=F-I,M=Math.min(N,U*2)/2,R=M*(1-X+I),se=P.map((a,d)=>({...a,index:d})),Z=E?-Math.PI/2:Math.PI/2,oe=E?Math.PI/2:-Math.PI/2,G={value:a=>a.value,sort:(a,d)=>d.value-a.value,fill:a=>a.color||u.colors[a.index%u.colors.length]},s=P.map((a,d)=>({label:a.label,value:a.valueDisplay||a.value.toString(),color:G.fill({...a,index:d})}));return(0,n.jsxs)("div",{className:(0,_.A)("pie-semi-circle-chart",v["pie-semi-circle-chart"],O),"data-testid":"pie-chart-container",children:[(0,n.jsx)("svg",{width:A,height:F,viewBox:`0 0 ${A} ${F}`,"data-testid":"pie-chart-svg",children:(0,n.jsxs)(c.A,{top:M,left:M,children:[(0,n.jsx)(m.A,{data:se,pieValue:G.value,outerRadius:M,innerRadius:R,cornerRadius:3,padAngle:I,startAngle:Z,endAngle:oe,pieSort:G.sort,children:a=>a.arcs.map(d=>(0,n.jsx)("g",{onMouseMove:L(d),onMouseLeave:te,children:(0,n.jsx)("path",{d:a.path(d)||"",fill:G.fill(d.data),"data-testid":"pie-segment"})},d.data.label))}),(0,n.jsxs)(c.A,{children:[(0,n.jsx)(r.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:v.label,children:p}),(0,n.jsx)(r.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:v.note,children:x})]})]})}),J&&T&&V&&(0,n.jsx)(C.R,{data:{label:V.label,value:V.value,valueDisplay:V.valueDisplay},top:ee||0,left:q||0}),Q&&(0,n.jsx)(w.$,{items:s,orientation:$,className:v["pie-semi-circle-chart-legend"]})]})};h.displayName="PieSemiCircleChart";const l=(0,y.F)(h);try{h.displayName="PieSemiCircleChart",h.__docgenInfo={description:"",displayName:"PieSemiCircleChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:{value:"400"},description:"Width of the chart in pixels; height would be half of this value calculated automatically.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label text to display above the chart",name:"label",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: { type?: keyof ScaleTypeToScaleConfig<DefaultOutput, StringLike, DefaultThresholdInput>; zero?: boolean; domain?: [...]; range?: [...]; }; xScale?: { ...; }; axis?: { ...; }; }"}},thickness:{defaultValue:{value:"0.4"},description:"Thickness of the pie chart. A value between 0 and 1",name:"thickness",required:!1,type:{name:"number"}},clockwise:{defaultValue:{value:"true"},description:`Direction of chart rendering
true for clockwise, false for counter-clockwise`,name:"clockwise",required:!1,type:{name:"boolean"}},note:{defaultValue:null,description:"Note text to display below the label",name:"note",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"]={docgenInfo:h.__docgenInfo,name:"PieSemiCircleChart",path:"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(S,f,e)=>{e.d(f,{R:()=>w});var i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(i),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),r={};r.insert="head",r.singleton=!1;var o=c()(m.A,r);const _=m.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const W=({data:y})=>(0,t.jsxs)(t.Fragment,{children:[y?.label,": ",y?.valueDisplay||y?.value]}),w=({data:y,top:C,left:D,component:j=W,children:b,className:g})=>(0,t.jsx)("div",{className:_.tooltip,style:{top:C,left:D},role:"tooltip",children:b||y&&(0,t.jsx)(j,{data:y,className:g})});try{w.displayName="BaseTooltip",w.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:w.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss":(S,f,e)=>{e.d(f,{A:()=>_});var i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(i),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(m),o=r()(c());o.push([S.id,".SVlAnnWw2ot8McusfLcw{position:relative}.WG8wpgeFR6IoBhr41Y3z{background:#fff;padding:.5rem}.t5p9YWtrovlLQm8WlrGF{font-weight:700;padding-bottom:10px}.FPtDJMJR2GRu0df3iYy6{display:flex;align-items:center;padding:4px 0;justify-content:space-between}.xTJS98Xw7HFAGWFwzsgd{font-weight:500;padding-right:1rem}.visx-tooltip-glyph svg{width:10px;height:10px}",""]),o.locals={"line-chart":"SVlAnnWw2ot8McusfLcw","line-chart__tooltip":"WG8wpgeFR6IoBhr41Y3z","line-chart__tooltip-date":"t5p9YWtrovlLQm8WlrGF","line-chart__tooltip-row":"FPtDJMJR2GRu0df3iYy6","line-chart__tooltip-label":"xTJS98Xw7HFAGWFwzsgd"};const _=o},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":(S,f,e)=>{e.d(f,{A:()=>_});var i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(i),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(m),o=r()(c());o.push([S.id,".xQEsZ9upN7GZLvXugRlk{position:relative;text-align:center}.u28WZeoUdhsFAVkB8ttn{margin-top:1rem}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0;font-size:14px}",""]),o.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk","pie-semi-circle-chart-legend":"u28WZeoUdhsFAVkB8ttn",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const _=o},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(S,f,e)=>{e.d(f,{A:()=>_});var i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(i),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(m),o=r()(c());o.push([S.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),o.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const _=o}}]);
