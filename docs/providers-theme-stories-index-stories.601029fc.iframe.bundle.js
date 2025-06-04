"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4848],{"../charts/src/providers/theme/stories/index.stories.tsx":(T,v,e)=>{e.r(v),e.d(v,{CustomTheme:()=>P,Default:()=>B,JetpackTheme:()=>f,WooTheme:()=>n,__namedExportsOrder:()=>j,default:()=>L});var d=e("../charts/src/providers/theme/theme-provider.tsx"),p=e("../charts/src/providers/theme/themes.ts"),r=e("../charts/src/components/line-chart/line-chart.tsx"),i=e("../charts/src/components/bar-chart/bar-chart.tsx"),o=e("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),_=e("../charts/src/components/bar-chart/stories/sample-data.ts"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),R=`import { Meta, StoryObj } from '@storybook/react';
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
`,S={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},JetpackTheme:{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},WooTheme:{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},CustomTheme:{startLoc:{col:27,line:153},endLoc:{col:1,line:188},startBody:{col:27,line:153},endBody:{col:1,line:188}}};const L={title:"JS Packages/Charts/Themes",component:d.NP,parameters:{storySource:{source:`import { ThemeProvider, jetpackTheme, wooTheme } from '../.';
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
};`,locationsMap:{default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},"jetpack-theme":{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},"woo-theme":{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},"custom-theme":{startLoc:{col:27,line:153},endLoc:{col:1,line:188},startBody:{col:27,line:153},endBody:{col:1,line:188}}}},layout:"centered"}},x=[_.A[0],_.A[1],_.A[2]],b=[{group:"Line 1",label:"Line 1",data:[{date:new Date("2024-01-01"),value:10,label:"Jan 1"},{date:new Date("2024-01-02"),value:20,label:"Jan 2"},{date:new Date("2024-01-03"),value:15,label:"Jan 3"},{date:new Date("2024-01-04"),value:25,label:"Jan 4"},{date:new Date("2024-01-05"),value:30,label:"Jan 5"}]},{group:"Line 2",label:"Line 2",data:[{date:new Date("2024-01-01"),value:1,label:"Jan 1"},{date:new Date("2024-01-02"),value:2,label:"Jan 2"},{date:new Date("2024-01-03"),value:1.5,label:"Jan 3"},{date:new Date("2024-01-04"),value:2.5,label:"Jan 4"},{date:new Date("2024-01-05"),value:3,label:"Jan 5"}]}],C=[{label:"Windows",value:8e4,valueDisplay:"80K",percentage:2},{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:5},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:1}],D=({children:z})=>(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:z}),B={render:()=>(0,t.jsx)(d.NP,{children:(0,t.jsxs)(D,{children:[(0,t.jsx)(r.A,{data:b,width:400,height:300}),(0,t.jsx)(i.A,{data:x,width:400,height:300}),(0,t.jsx)(o.A,{data:C,width:400,label:"Pie Chart",note:"Default Theme"})]})})},f={render:()=>(0,t.jsx)(d.NP,{theme:p.QI,children:(0,t.jsxs)(D,{children:[(0,t.jsx)(r.A,{data:b,width:400,height:300}),(0,t.jsx)(i.A,{data:x,width:400,height:300}),(0,t.jsx)(o.A,{data:C,width:400,label:"Pie Chart",note:"Jetpack Theme"})]})})},n={render:()=>(0,t.jsx)(d.NP,{theme:p.pk,children:(0,t.jsxs)(D,{children:[(0,t.jsx)(r.A,{data:b,width:400,height:300}),(0,t.jsx)(i.A,{data:x,width:400,height:300}),(0,t.jsx)(o.A,{data:C,width:400,label:"Pie Chart",note:"Woo Theme"})]})})},P={render:()=>(0,t.jsx)(d.NP,{theme:{colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},children:(0,t.jsxs)(D,{children:[(0,t.jsx)(r.A,{data:b,width:400,height:300}),(0,t.jsx)(i.A,{data:x,width:400,height:300}),(0,t.jsx)(o.A,{data:C,width:400,label:"Pie Chart",note:"Custom Color Theme"})]})})},j=["Default","JetpackTheme","WooTheme","CustomTheme"];B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Default Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...B.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={jetpackTheme}>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Jetpack Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...f.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={wooTheme}>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Woo Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...n.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}}},"../charts/src/components/line-chart/line-chart.tsx":(T,v,e)=>{e.d(v,{A:()=>te});var d=e("../number-formatters/src/index.ts"),p=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/catmullRom.js"),r=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/linear.js"),i=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/monotone.js"),o=e("../../../node_modules/.pnpm/@visx+gradient@3.12.0_react@18.3.1/node_modules/@visx/gradient/esm/gradients/LinearGradient.js"),_=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),t=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/AnimatedGrid.js"),R=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/AnimatedAxis.js"),S=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/AnimatedAreaSeries.js"),g=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),L=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),x=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),b=e("../charts/src/providers/theme/theme-provider.tsx"),C=e("../charts/src/components/legend/base-legend.tsx"),D=e("../charts/src/components/shared/use-chart-margin.tsx"),B=e("../charts/src/components/shared/with-responsive.tsx"),f=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(f),P=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss"),j={};j.insert="head",j.singleton=!1;var z=n()(P.A,j);const c=P.A.locals||{};var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const X=100,w=(m,y)=>{if(!m)return y?p.A:r.A;switch(m){case"smooth":return p.A;case"monotone":return i.G;case"linear":return r.A;default:return r.A}},J=({tooltipData:m})=>{const y=m?.nearestDatum?.datum;if(!y)return null;const k=Object.entries(m?.datumByKey||{}).map(([u,{datum:M}])=>({key:u,value:M.value})).sort((u,M)=>M.value-u.value);return(0,a.jsxs)("div",{className:c["line-chart__tooltip"],children:[(0,a.jsx)("div",{className:c["line-chart__tooltip-date"],children:y.date?.toLocaleDateString()}),k.map(u=>(0,a.jsxs)("div",{className:c["line-chart__tooltip-row"],children:[(0,a.jsxs)("span",{className:c["line-chart__tooltip-label"],children:[u.key,":"]}),(0,a.jsx)("span",{className:c["line-chart__tooltip-value"],children:u.value})]},u.key))]})},$=m=>new Date(m).toLocaleDateString(void 0,{month:"short",day:"numeric"}),q=m=>m?.length?m.some(k=>k.data.some(u=>isNaN(u.value)||u.value===null||u.value===void 0||isNaN(u.date.getTime())))?"Invalid data":null:"No data available",ee=({data:m,width:y,height:k,className:u,margin:M,withTooltips:N=!0,showLegend:Y=!1,legendOrientation:H="horizontal",withGradientFill:K=!1,smoothing:ae=!0,curveType:ne="linear",renderTooltip:se=J,options:W={},onPointerDown:F=void 0,onPointerUp:U=void 0,onPointerMove:oe=void 0,onPointerOut:le=void 0})=>{const A=(0,b.RW)(),V=(0,b.Ox)(m),Z=(0,x.useId)(),O=(0,x.useMemo)(()=>m.map(l=>({...l,data:l.data.sort((E,re)=>E.date.getTime()-re.date.getTime())})),[m]),I=(0,x.useMemo)(()=>({axis:{x:{orientation:"bottom",numTicks:Math.min(O[0]?.data.length,Math.ceil(y/X)),tickFormat:$,...W?.axis?.x},y:{orientation:"left",numTicks:4,tickFormat:d.qe,...W?.axis?.y}},xScale:{type:"time",...W?.xScale},yScale:{type:"linear",nice:!0,zero:!1,...W?.yScale}}),[W,O,y]),G=(0,D.a)(k,I,O,V),Q=q(O);if(Q)return(0,a.jsx)("div",{className:(0,L.A)("line-chart",c["line-chart"]),children:Q});const s=O.map((l,E)=>({label:l.label,value:"",color:A.colors[E%A.colors.length]})),h={xAccessor:l=>l?.date,yAccessor:l=>l?.value};return(0,a.jsxs)("div",{className:(0,L.A)("line-chart",c["line-chart"],u),"data-testid":"line-chart",role:"img","aria-label":"line chart",children:[(0,a.jsxs)(_.A,{theme:V,width:y,height:k,margin:{...G,...M},xScale:I.xScale,yScale:I.yScale,onPointerDown:F,onPointerUp:U,onPointerMove:oe,onPointerOut:le,pointerEventsDataKey:"nearest",children:[(0,a.jsx)(t.A,{columns:!1,numTicks:4}),(0,a.jsx)(R.A,{...I.axis.x}),(0,a.jsx)(R.A,{...I.axis.y}),O.map((l,E)=>{const re=l.options?.stroke??V.colors[E%V.colors.length],ie=A?.seriesLineStyles?.[E%A.seriesLineStyles.length]||{};return(0,a.jsxs)("g",{children:[K&&(0,a.jsx)(o.A,{id:`area-gradient-${Z}-${E+1}`,from:re,fromOpacity:.4,toOpacity:.1,to:V.backgroundColor,...l.options?.gradient,"data-testid":"line-gradient"}),(0,a.jsx)(S.A,{dataKey:l?.label,data:l.data,...h,fill:K?`url(#area-gradient-${Z}-${E+1})`:void 0,renderLine:!0,curve:w(ne,ae),lineProps:ie},l?.label)]},l?.label||E)}),N&&(0,a.jsx)(g.A,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,showSeriesGlyphs:!0,renderTooltip:se})]}),Y&&(0,a.jsx)(C.$,{items:s,orientation:H,className:c["line-chart-legend"]})]})},te=(0,B.F)(ee);try{linechart.displayName="linechart",linechart.__docgenInfo={description:"",displayName:"linechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:{value:"undefined"},description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"true"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: { type?: keyof ScaleTypeToScaleConfig<DefaultOutput, StringLike, DefaultThresholdInput>; zero?: boolean; domain?: [...]; range?: [...]; }; xScale?: { ...; }; axis?: { ...; }; }"}},renderTooltip:{defaultValue:{value:`( {
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
}`},description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withGradientFill:{defaultValue:{value:"false"},description:"",name:"withGradientFill",required:!1,type:{name:"boolean"}},smoothing:{defaultValue:{value:"true"},description:"",name:"smoothing",required:!1,type:{name:"boolean"}},curveType:{defaultValue:{value:"linear"},description:"",name:"curveType",required:!1,type:{name:"enum",value:[{value:'"linear"'},{value:'"smooth"'},{value:'"monotone"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/line-chart.tsx#linechart"]={docgenInfo:linechart.__docgenInfo,name:"linechart",path:"../charts/src/components/line-chart/line-chart.tsx#linechart"})}catch{}},"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":(T,v,e)=>{e.d(v,{A:()=>z});var d=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),p=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),r=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),i=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),o=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),_=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),R=e("../charts/src/providers/theme/theme-provider.tsx"),S=e("../charts/src/components/legend/base-legend.tsx"),g=e("../charts/src/components/shared/with-responsive.tsx"),L=e("../charts/src/components/tooltip/base-tooltip.tsx"),x=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(x),C=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),D={};D.insert="head",D.singleton=!1;var B=b()(C.A,D);const f=C.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const P=c=>c.length?c.some(w=>w.percentage<0||w.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:c.reduce((w,J)=>w+J.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},j=({data:c,width:a=400,thickness:X=.4,clockwise:w=!0,withTooltips:J=!1,showLegend:$=!1,legendOrientation:q="horizontal",label:ee,note:te,className:m})=>{const y=(0,R.RW)(),{tooltipOpen:k,tooltipLeft:u,tooltipTop:M,tooltipData:N,hideTooltip:Y,showTooltip:H}=(0,o.A)(),K=(0,t.useCallback)((s,h)=>{const l=(0,d.A)(s);l&&H({tooltipData:h.data,tooltipLeft:l.x,tooltipTop:l.y-10})},[H]),ae=(0,t.useCallback)(()=>{Y()},[Y]),ne=(0,t.useCallback)(s=>h=>{K(h,s)},[K]),{isValid:se,message:W}=P(c);if(!se)return(0,n.jsx)("div",{className:f["pie-semi-circle-chart"],children:(0,n.jsx)("svg",{width:a,height:a/2,"data-testid":"pie-chart-svg",children:(0,n.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:f.error,children:W})})});const F=a/2,U=.03,oe=a-U*2,le=F-U,A=Math.min(oe,le*2)/2,V=A*(1-X+U),Z=c.map((s,h)=>({...s,index:h})),O=w?-Math.PI/2:Math.PI/2,I=w?Math.PI/2:-Math.PI/2,G={value:s=>s.value,sort:(s,h)=>h.value-s.value,fill:s=>s.color||y.colors[s.index%y.colors.length]},Q=c.map((s,h)=>({label:s.label,value:s.valueDisplay||s.value.toString(),color:G.fill({...s,index:h})}));return(0,n.jsxs)("div",{className:(0,_.A)("pie-semi-circle-chart",f["pie-semi-circle-chart"],m),"data-testid":"pie-chart-container",children:[(0,n.jsx)("svg",{width:a,height:F,viewBox:`0 0 ${a} ${F}`,"data-testid":"pie-chart-svg",children:(0,n.jsxs)(p.A,{top:A,left:A,children:[(0,n.jsx)(r.A,{data:Z,pieValue:G.value,outerRadius:A,innerRadius:V,cornerRadius:3,padAngle:U,startAngle:O,endAngle:I,pieSort:G.sort,children:s=>s.arcs.map(h=>(0,n.jsx)("g",{onMouseMove:ne(h),onMouseLeave:ae,children:(0,n.jsx)("path",{d:s.path(h)||"",fill:G.fill(h.data),"data-testid":"pie-segment"})},h.data.label))}),(0,n.jsxs)(p.A,{children:[(0,n.jsx)(i.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:f.label,children:ee}),(0,n.jsx)(i.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:f.note,children:te})]})]})}),J&&k&&N&&(0,n.jsx)(L.R,{data:{label:N.label,value:N.value,valueDisplay:N.valueDisplay},top:M||0,left:u||0}),$&&(0,n.jsx)(S.$,{items:Q,orientation:q,className:f["pie-semi-circle-chart-legend"]})]})};j.displayName="PieSemiCircleChart";const z=(0,g.F)(j);try{j.displayName="PieSemiCircleChart",j.__docgenInfo={description:"",displayName:"PieSemiCircleChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:{value:"400"},description:"Width of the chart in pixels; height would be half of this value calculated automatically.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label text to display above the chart",name:"label",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: { type?: keyof ScaleTypeToScaleConfig<DefaultOutput, StringLike, DefaultThresholdInput>; zero?: boolean; domain?: [...]; range?: [...]; }; xScale?: { ...; }; axis?: { ...; }; }"}},thickness:{defaultValue:{value:"0.4"},description:"Thickness of the pie chart. A value between 0 and 1",name:"thickness",required:!1,type:{name:"number"}},clockwise:{defaultValue:{value:"true"},description:`Direction of chart rendering
true for clockwise, false for counter-clockwise`,name:"clockwise",required:!1,type:{name:"boolean"}},note:{defaultValue:null,description:"Note text to display below the label",name:"note",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"]={docgenInfo:j.__docgenInfo,name:"PieSemiCircleChart",path:"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(T,v,e)=>{e.d(v,{R:()=>S});var d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(d),r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),i={};i.insert="head",i.singleton=!1;var o=p()(r.A,i);const _=r.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const R=({data:g})=>(0,t.jsxs)(t.Fragment,{children:[g?.label,": ",g?.valueDisplay||g?.value]}),S=({data:g,top:L,left:x,component:b=R,children:C,className:D})=>(0,t.jsx)("div",{className:_.tooltip,style:{top:L,left:x},role:"tooltip",children:C||g&&(0,t.jsx)(b,{data:g,className:D})});try{S.displayName="BaseTooltip",S.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:S.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss":(T,v,e)=>{e.d(v,{A:()=>_});var d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(d),r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(r),o=i()(p());o.push([T.id,".SVlAnnWw2ot8McusfLcw{position:relative}.WG8wpgeFR6IoBhr41Y3z{background:#fff;padding:.5rem}.t5p9YWtrovlLQm8WlrGF{font-weight:700;padding-bottom:10px}.FPtDJMJR2GRu0df3iYy6{display:flex;align-items:center;padding:4px 0;justify-content:space-between}.xTJS98Xw7HFAGWFwzsgd{font-weight:500;padding-right:1rem}.visx-tooltip-glyph svg{width:10px;height:10px}",""]),o.locals={"line-chart":"SVlAnnWw2ot8McusfLcw","line-chart__tooltip":"WG8wpgeFR6IoBhr41Y3z","line-chart__tooltip-date":"t5p9YWtrovlLQm8WlrGF","line-chart__tooltip-row":"FPtDJMJR2GRu0df3iYy6","line-chart__tooltip-label":"xTJS98Xw7HFAGWFwzsgd"};const _=o},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":(T,v,e)=>{e.d(v,{A:()=>_});var d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(d),r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(r),o=i()(p());o.push([T.id,".xQEsZ9upN7GZLvXugRlk{position:relative;text-align:center}.u28WZeoUdhsFAVkB8ttn{margin-top:1rem}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0;font-size:14px}",""]),o.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk","pie-semi-circle-chart-legend":"u28WZeoUdhsFAVkB8ttn",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const _=o},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(T,v,e)=>{e.d(v,{A:()=>_});var d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(d),r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(r),o=i()(p());o.push([T.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),o.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const _=o}}]);
