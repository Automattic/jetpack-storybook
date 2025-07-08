"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4848],{"../charts/src/providers/theme/stories/index.stories.tsx":(b,p,e)=>{e.r(p),e.d(p,{CustomTheme:()=>a,Default:()=>_,JetpackTheme:()=>P,WooTheme:()=>d,__namedExportsOrder:()=>O,default:()=>T});var r=e("../charts/src/providers/theme/theme-provider.tsx"),c=e("../charts/src/providers/theme/themes.ts"),i=e("../charts/src/components/line-chart/line-chart.tsx"),s=e("../charts/src/components/bar-chart/bar-chart.tsx"),o=e("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),m=e("../charts/src/components/bar-chart/stories/sample-data.ts"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),E=`import { Meta, StoryObj } from '@storybook/react';
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
`,C={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},JetpackTheme:{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},WooTheme:{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},CustomTheme:{startLoc:{col:27,line:153},endLoc:{col:1,line:188},startBody:{col:27,line:153},endBody:{col:1,line:188}}};const T={title:"JS Packages/Charts/Themes",component:r.NP,parameters:{storySource:{source:`import { ThemeProvider, jetpackTheme, wooTheme } from '../.';
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
};`,locationsMap:{default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},"jetpack-theme":{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},"woo-theme":{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},"custom-theme":{startLoc:{col:27,line:153},endLoc:{col:1,line:188},startBody:{col:27,line:153},endBody:{col:1,line:188}}}},layout:"centered"}},v=[m.A[0],m.A[1],m.A[2]],f=[{group:"Line 1",label:"Line 1",data:[{date:new Date("2024-01-01"),value:10,label:"Jan 1"},{date:new Date("2024-01-02"),value:20,label:"Jan 2"},{date:new Date("2024-01-03"),value:15,label:"Jan 3"},{date:new Date("2024-01-04"),value:25,label:"Jan 4"},{date:new Date("2024-01-05"),value:30,label:"Jan 5"}]},{group:"Line 2",label:"Line 2",data:[{date:new Date("2024-01-01"),value:1,label:"Jan 1"},{date:new Date("2024-01-02"),value:2,label:"Jan 2"},{date:new Date("2024-01-03"),value:1.5,label:"Jan 3"},{date:new Date("2024-01-04"),value:2.5,label:"Jan 4"},{date:new Date("2024-01-05"),value:3,label:"Jan 5"}]}],g=[{label:"Windows",value:8e4,valueDisplay:"80K",percentage:2},{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:5},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:1}],u=({children:w})=>(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:w}),_={render:()=>(0,t.jsx)(r.NP,{children:(0,t.jsxs)(u,{children:[(0,t.jsx)(i.A,{data:f,width:400,height:300}),(0,t.jsx)(s.A,{data:v,width:400,height:300}),(0,t.jsx)(o.A,{data:g,width:400,label:"Pie Chart",note:"Default Theme"})]})})},P={render:()=>(0,t.jsx)(r.NP,{theme:c.QI,children:(0,t.jsxs)(u,{children:[(0,t.jsx)(i.A,{data:f,width:400,height:300}),(0,t.jsx)(s.A,{data:v,width:400,height:300}),(0,t.jsx)(o.A,{data:g,width:400,label:"Pie Chart",note:"Jetpack Theme"})]})})},d={render:()=>(0,t.jsx)(r.NP,{theme:c.pk,children:(0,t.jsxs)(u,{children:[(0,t.jsx)(i.A,{data:f,width:400,height:300}),(0,t.jsx)(s.A,{data:v,width:400,height:300}),(0,t.jsx)(o.A,{data:g,width:400,label:"Pie Chart",note:"Woo Theme"})]})})},a={render:()=>(0,t.jsx)(r.NP,{theme:{colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},children:(0,t.jsxs)(u,{children:[(0,t.jsx)(i.A,{data:f,width:400,height:300}),(0,t.jsx)(s.A,{data:v,width:400,height:300}),(0,t.jsx)(o.A,{data:g,width:400,label:"Pie Chart",note:"Custom Color Theme"})]})})},O=["Default","JetpackTheme","WooTheme","CustomTheme"];_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Default Theme" />
            </GridComponent>
        </ThemeProvider>
}`,..._.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={jetpackTheme}>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Jetpack Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...P.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={wooTheme}>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Woo Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...d.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}}},"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":(b,p,e)=>{e.d(p,{A:()=>K});var r=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),c=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),i=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),s=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),o=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),m=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),E=e("../charts/src/providers/theme/theme-provider.tsx"),C=e("../charts/src/components/legend/base-legend.tsx"),h=e("../charts/src/components/shared/use-element-height.ts"),T=e("../charts/src/components/shared/with-responsive.tsx"),v=e("../charts/src/components/tooltip/base-tooltip.tsx"),f=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(f),u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),_={};_.insert="head",_.singleton=!1;var P=g()(u.A,_);const d=u.A.locals||{};var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const O=D=>D.length?D.some(y=>y.percentage<0||y.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:D.reduce((y,R)=>y+R.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},w=({data:D,width:x=400,thickness:V=.4,clockwise:y=!0,withTooltips:R=!1,showLegend:j=!1,legendOrientation:z="horizontal",legendAlignmentHorizontal:F="center",legendAlignmentVertical:S="bottom",legendShape:H="circle",label:X,note:Z,className:q})=>{const J=(0,E.RW)(),[Q,M]=(0,h.v)(),{tooltipOpen:Y,tooltipLeft:$,tooltipTop:ee,tooltipData:L,hideTooltip:I,showTooltip:G}=(0,o.A)(),N=(0,t.useCallback)((n,l)=>{const U=(0,r.A)(n);U&&G({tooltipData:l.data,tooltipLeft:U.x,tooltipTop:U.y-10})},[G]),te=(0,t.useCallback)(()=>{I()},[I]),ae=(0,t.useCallback)(n=>l=>{N(l,n)},[N]),{isValid:ne,message:se}=O(D);if(!ne)return(0,a.jsx)("div",{className:d["pie-semi-circle-chart"],children:(0,a.jsx)("svg",{width:x,height:x/2,"data-testid":"pie-chart-svg",children:(0,a.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:d.error,children:se})})});const W=x/2,A=.03,oe=x-A*2,le=W-A,B=Math.min(oe,le*2)/2,re=B*(1-V+A),ie=D.map((n,l)=>({...n,index:l})),de=y?-Math.PI/2:Math.PI/2,ce=y?Math.PI/2:-Math.PI/2,k={value:n=>n.value,sort:(n,l)=>l.value-n.value,fill:n=>n.color||J.colors[n.index%J.colors.length]},me=D.map((n,l)=>({label:n.label,value:n.valueDisplay||n.value.toString(),color:k.fill({...n,index:l})}));return(0,a.jsxs)("div",{className:(0,m.A)("pie-semi-circle-chart",d["pie-semi-circle-chart"],q),"data-testid":"pie-chart-container",style:{display:"flex",flexDirection:j&&S==="top"?"column-reverse":"column"},children:[(0,a.jsx)("svg",{width:x,height:W+(j&&S==="top"?M+20:0),viewBox:`0 0 ${x} ${W+(j&&S==="top"?M+20:0)}`,"data-testid":"pie-chart-svg",children:(0,a.jsxs)(c.A,{top:B+(j&&S==="top"?M+20:0),left:B,children:[(0,a.jsx)(i.A,{data:ie,pieValue:k.value,outerRadius:B,innerRadius:re,cornerRadius:3,padAngle:A,startAngle:de,endAngle:ce,pieSort:k.sort,children:n=>n.arcs.map(l=>(0,a.jsx)("g",{onMouseMove:ae(l),onMouseLeave:te,children:(0,a.jsx)("path",{d:n.path(l)||"",fill:k.fill(l.data),"data-testid":"pie-segment"})},l.data.label))}),(0,a.jsxs)(c.A,{children:[(0,a.jsx)(s.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:d.label,children:X}),(0,a.jsx)(s.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:d.note,children:Z})]})]})}),R&&Y&&L&&(0,a.jsx)(v.R,{data:{label:L.label,value:L.value,valueDisplay:L.valueDisplay},top:ee||0,left:$||0}),j&&(0,a.jsx)(C.$,{items:me,orientation:z,alignmentHorizontal:F,alignmentVertical:S,className:d["pie-semi-circle-chart-legend"],shape:H,ref:Q})]})};w.displayName="PieSemiCircleChart";const K=(0,T.F)(w);try{piesemicirclechart.displayName="piesemicirclechart",piesemicirclechart.__docgenInfo={description:"",displayName:"piesemicirclechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:{value:"400"},description:"Width of the chart in pixels; height would be half of this value calculated automatically.",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},label:{defaultValue:null,description:"Label text to display above the chart",name:"label",required:!1,type:{name:"string"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},thickness:{defaultValue:{value:"0.4"},description:"Thickness of the pie chart. A value between 0 and 1",name:"thickness",required:!1,type:{name:"number"}},note:{defaultValue:null,description:"Note text to display below the label",name:"note",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<DataPointPercentage[], number>"}},legendAlignmentHorizontal:{defaultValue:{value:"center"},description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:{value:"bottom"},description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},clockwise:{defaultValue:{value:"true"},description:`Direction of chart rendering
true for clockwise, false for counter-clockwise`,name:"clockwise",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#piesemicirclechart"]={docgenInfo:piesemicirclechart.__docgenInfo,name:"piesemicirclechart",path:"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#piesemicirclechart"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(b,p,e)=>{e.d(p,{R:()=>C});var r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(r),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),s={};s.insert="head",s.singleton=!1;var o=c()(i.A,s);const m=i.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const E=({data:h})=>(0,t.jsxs)(t.Fragment,{children:[h?.label,": ",h?.valueDisplay||h?.value]}),C=({data:h,top:T,left:v,component:f=E,children:g,className:u})=>(0,t.jsx)("div",{className:m.tooltip,style:{top:T,left:v},role:"tooltip",children:g||h&&(0,t.jsx)(f,{data:h,className:u})});try{C.displayName="BaseTooltip",C.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:C.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":(b,p,e)=>{e.d(p,{A:()=>m});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(r),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(i),o=s()(c());o.push([b.id,".xQEsZ9upN7GZLvXugRlk{display:flex;flex-direction:column;text-align:center}.u28WZeoUdhsFAVkB8ttn{margin-top:1rem}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0;font-size:14px}",""]),o.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk","pie-semi-circle-chart-legend":"u28WZeoUdhsFAVkB8ttn",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const m=o},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(b,p,e)=>{e.d(p,{A:()=>m});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(r),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(i),o=s()(c());o.push([b.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),o.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const m=o}}]);
