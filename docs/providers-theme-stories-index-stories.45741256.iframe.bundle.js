"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4848],{"../charts/src/providers/theme/stories/index.stories.tsx":(T,v,e)=>{e.r(v),e.d(v,{CustomTheme:()=>M,Default:()=>B,JetpackTheme:()=>f,WooTheme:()=>l,__namedExportsOrder:()=>k,default:()=>V});var m=e("../charts/src/providers/theme/theme-provider.tsx"),p=e("../charts/src/providers/theme/themes.ts"),i=e("../charts/src/components/line-chart/line-chart.tsx"),d=e("../charts/src/components/bar-chart/bar-chart.tsx"),s=e("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),_=e("../charts/src/components/bar-chart/stories/sample-data.ts"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),N=`import { Meta, StoryObj } from '@storybook/react';
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
`,O={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},JetpackTheme:{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},WooTheme:{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},CustomTheme:{startLoc:{col:27,line:153},endLoc:{col:1,line:188},startBody:{col:27,line:153},endBody:{col:1,line:188}}};const V={title:"JS Packages/Charts/Themes",component:m.NP,parameters:{storySource:{source:`import { ThemeProvider, jetpackTheme, wooTheme } from '../.';
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
};`,locationsMap:{default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},"jetpack-theme":{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},"woo-theme":{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},"custom-theme":{startLoc:{col:27,line:153},endLoc:{col:1,line:188},startBody:{col:27,line:153},endBody:{col:1,line:188}}}},layout:"centered"}},g=[_.A[0],_.A[1],_.A[2]],D=[{group:"Line 1",label:"Line 1",data:[{date:new Date("2024-01-01"),value:10,label:"Jan 1"},{date:new Date("2024-01-02"),value:20,label:"Jan 2"},{date:new Date("2024-01-03"),value:15,label:"Jan 3"},{date:new Date("2024-01-04"),value:25,label:"Jan 4"},{date:new Date("2024-01-05"),value:30,label:"Jan 5"}]},{group:"Line 2",label:"Line 2",data:[{date:new Date("2024-01-01"),value:1,label:"Jan 1"},{date:new Date("2024-01-02"),value:2,label:"Jan 2"},{date:new Date("2024-01-03"),value:1.5,label:"Jan 3"},{date:new Date("2024-01-04"),value:2.5,label:"Jan 4"},{date:new Date("2024-01-05"),value:3,label:"Jan 5"}]}],S=[{label:"Windows",value:8e4,valueDisplay:"80K",percentage:2},{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:5},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:1}],x=({children:J})=>(0,a.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:J}),B={render:()=>(0,a.jsx)(m.NP,{children:(0,a.jsxs)(x,{children:[(0,a.jsx)(i.A,{data:D,width:400,height:300}),(0,a.jsx)(d.A,{data:g,width:400,height:300}),(0,a.jsx)(s.A,{data:S,width:400,label:"Pie Chart",note:"Default Theme"})]})})},f={render:()=>(0,a.jsx)(m.NP,{theme:p.QI,children:(0,a.jsxs)(x,{children:[(0,a.jsx)(i.A,{data:D,width:400,height:300}),(0,a.jsx)(d.A,{data:g,width:400,height:300}),(0,a.jsx)(s.A,{data:S,width:400,label:"Pie Chart",note:"Jetpack Theme"})]})})},l={render:()=>(0,a.jsx)(m.NP,{theme:p.pk,children:(0,a.jsxs)(x,{children:[(0,a.jsx)(i.A,{data:D,width:400,height:300}),(0,a.jsx)(d.A,{data:g,width:400,height:300}),(0,a.jsx)(s.A,{data:S,width:400,label:"Pie Chart",note:"Woo Theme"})]})})},M={render:()=>(0,a.jsx)(m.NP,{theme:{colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},children:(0,a.jsxs)(x,{children:[(0,a.jsx)(i.A,{data:D,width:400,height:300}),(0,a.jsx)(d.A,{data:g,width:400,height:300}),(0,a.jsx)(s.A,{data:S,width:400,label:"Pie Chart",note:"Custom Color Theme"})]})})},k=["Default","JetpackTheme","WooTheme","CustomTheme"];B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={wooTheme}>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Woo Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...l.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}}},"../charts/src/components/bar-chart/stories/sample-data.ts":(T,v,e)=>{e.d(v,{A:()=>p});const p=[{group:"United States",label:"United States",data:[{label:"1896",value:20},{label:"1900",value:47},{label:"1904",value:239},{label:"1908",value:47},{label:"1912",value:63},{label:"1920",value:95},{label:"1924",value:99},{label:"1928",value:56},{label:"1932",value:103},{label:"1936",value:56},{label:"1948",value:84},{label:"1952",value:76},{label:"1956",value:74},{label:"1960",value:71},{label:"1964",value:90},{label:"1968",value:107},{label:"1972",value:94},{label:"1976",value:94},{label:"1980",value:0},{label:"1984",value:174},{label:"1988",value:94},{label:"1992",value:108},{label:"1996",value:101},{label:"2000",value:93},{label:"2004",value:101},{label:"2008",value:112},{label:"2012",value:104},{label:"2016",value:121},{label:"2020",value:113},{label:"2024",value:126}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:7},{label:"1900",value:30},{label:"1904",value:1},{label:"1908",value:146},{label:"1912",value:41},{label:"1920",value:43},{label:"1924",value:34},{label:"1928",value:20},{label:"1932",value:16},{label:"1936",value:14},{label:"1948",value:23},{label:"1952",value:11},{label:"1956",value:24},{label:"1960",value:20},{label:"1964",value:18},{label:"1968",value:13},{label:"1972",value:18},{label:"1976",value:13},{label:"1980",value:21},{label:"1984",value:37},{label:"1988",value:24},{label:"1992",value:20},{label:"1996",value:15},{label:"2000",value:28},{label:"2004",value:30},{label:"2008",value:47},{label:"2012",value:65},{label:"2016",value:67},{label:"2020",value:65},{label:"2024",value:60}]},{group:"Japan",label:"Japan",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:0},{label:"1908",value:0},{label:"1912",value:2},{label:"1920",value:0},{label:"1924",value:4},{label:"1928",value:5},{label:"1932",value:18},{label:"1936",value:20},{label:"1948",value:0},{label:"1952",value:9},{label:"1956",value:19},{label:"1960",value:18},{label:"1964",value:29},{label:"1968",value:25},{label:"1972",value:29},{label:"1976",value:25},{label:"1980",value:0},{label:"1984",value:32},{label:"1988",value:14},{label:"1992",value:22},{label:"1996",value:14},{label:"2000",value:18},{label:"2004",value:37},{label:"2008",value:25},{label:"2012",value:38},{label:"2016",value:41},{label:"2020",value:58},{label:"2024",value:45}]},{group:"China",label:"China",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:0},{label:"1908",value:0},{label:"1912",value:0},{label:"1920",value:0},{label:"1924",value:0},{label:"1928",value:0},{label:"1932",value:0},{label:"1936",value:0},{label:"1948",value:0},{label:"1952",value:0},{label:"1956",value:0},{label:"1960",value:0},{label:"1964",value:0},{label:"1968",value:0},{label:"1972",value:0},{label:"1976",value:0},{label:"1980",value:0},{label:"1984",value:32},{label:"1988",value:28},{label:"1992",value:54},{label:"1996",value:50},{label:"2000",value:59},{label:"2004",value:63},{label:"2008",value:100},{label:"2012",value:91},{label:"2016",value:70},{label:"2020",value:88},{label:"2024",value:91}]},{group:"France",label:"France",data:[{label:"1896",value:11},{label:"1900",value:101},{label:"1904",value:0},{label:"1908",value:19},{label:"1912",value:14},{label:"1920",value:41},{label:"1924",value:38},{label:"1928",value:21},{label:"1932",value:19},{label:"1936",value:19},{label:"1948",value:29},{label:"1952",value:18},{label:"1956",value:14},{label:"1960",value:5},{label:"1964",value:15},{label:"1968",value:15},{label:"1972",value:13},{label:"1976",value:9},{label:"1980",value:14},{label:"1984",value:28},{label:"1988",value:16},{label:"1992",value:29},{label:"1996",value:37},{label:"2000",value:38},{label:"2004",value:33},{label:"2008",value:43},{label:"2012",value:35},{label:"2016",value:42},{label:"2020",value:33},{label:"2024",value:55}]},{group:"Germany",label:"Germany",data:[{label:"1896",value:13},{label:"1900",value:8},{label:"1904",value:4},{label:"1908",value:22},{label:"1912",value:25},{label:"1928",value:31},{label:"1932",value:20},{label:"1936",value:89},{label:"1952",value:24},{label:"1956",value:64},{label:"1960",value:87},{label:"1964",value:96},{label:"1968",value:91},{label:"1972",value:133},{label:"1976",value:125},{label:"1980",value:126},{label:"1984",value:59},{label:"1988",value:142},{label:"1992",value:82},{label:"1996",value:65},{label:"2000",value:56},{label:"2004",value:48},{label:"2008",value:41},{label:"2012",value:44},{label:"2016",value:42},{label:"2020",value:37},{label:"2024",value:40}]},{group:"Australia",label:"Australia",data:[{label:"1896",value:0},{label:"1900",value:2},{label:"1904",value:0},{label:"1908",value:15},{label:"1912",value:7},{label:"1920",value:3},{label:"1924",value:6},{label:"1928",value:4},{label:"1932",value:5},{label:"1936",value:3},{label:"1948",value:13},{label:"1952",value:11},{label:"1956",value:35},{label:"1960",value:22},{label:"1964",value:18},{label:"1968",value:17},{label:"1972",value:8},{label:"1976",value:5},{label:"1980",value:9},{label:"1984",value:24},{label:"1988",value:14},{label:"1992",value:27},{label:"1996",value:41},{label:"2000",value:58},{label:"2004",value:49},{label:"2008",value:46},{label:"2012",value:35},{label:"2016",value:29},{label:"2020",value:46},{label:"2024",value:42}]},{group:"Poland",label:"Poland",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:0},{label:"1908",value:0},{label:"1912",value:0},{label:"1920",value:0},{label:"1924",value:0},{label:"1928",value:5},{label:"1932",value:7},{label:"1936",value:6},{label:"1948",value:0},{label:"1952",value:4},{label:"1956",value:9},{label:"1960",value:21},{label:"1964",value:23},{label:"1968",value:18},{label:"1972",value:21},{label:"1976",value:26},{label:"1980",value:32},{label:"1984",value:0},{label:"1988",value:16},{label:"1992",value:19},{label:"1996",value:17},{label:"2000",value:14},{label:"2004",value:10},{label:"2008",value:10},{label:"2012",value:10},{label:"2016",value:11},{label:"2020",value:14},{label:"2024",value:15}]},{group:"Jamaica",label:"Jamaica",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:0},{label:"1908",value:0},{label:"1912",value:0},{label:"1920",value:0},{label:"1924",value:0},{label:"1928",value:0},{label:"1932",value:0},{label:"1936",value:0},{label:"1948",value:3},{label:"1952",value:2},{label:"1956",value:0},{label:"1960",value:0},{label:"1964",value:2},{label:"1968",value:1},{label:"1972",value:1},{label:"1976",value:2},{label:"1980",value:3},{label:"1984",value:3},{label:"1988",value:2},{label:"1992",value:4},{label:"1996",value:6},{label:"2000",value:9},{label:"2004",value:5},{label:"2008",value:11},{label:"2012",value:12},{label:"2016",value:11},{label:"2020",value:9},{label:"2024",value:10}]}]},"../charts/src/components/line-chart/line-chart.tsx":(T,v,e)=>{e.d(v,{A:()=>Q});var m=e("../number-formatters/src/index.ts"),p=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/catmullRom.js"),i=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/linear.js"),d=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/monotone.js"),s=e("../../../node_modules/.pnpm/@visx+gradient@3.12.0_react@18.3.1/node_modules/@visx/gradient/esm/gradients/LinearGradient.js"),_=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),a=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),N=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),O=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/AreaSeries.js"),y=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),V=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),D=e("../charts/src/providers/theme/theme-provider.tsx"),S=e("../charts/src/components/legend/base-legend.tsx"),x=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js"),B=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js"),f=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse.js");const l=o=>/T.*[Z]$|T.*[+-]\d{2}:?\d{2}$/.test(o),M=o=>{const u=o.trim();if(l(u)){const n=(0,x.H)(u);return(0,B.f)(n)?n:new Date(NaN)}const P=["yyyy-MM-dd","yyyy-MM-dd HH:mm:ss","yyyy-MM-dd HH:mm","yyyy-MM-dd'T'HH:mm:ss","yyyy-MM-dd'T'HH:mm:ss.SSS","yyyy-MM-dd'T'HH:mm"];for(const n of P){const C=(0,f.qg)(u,n,new Date);if((0,B.f)(C))return C}return new Date(NaN)};var k=e("../charts/src/components/shared/use-chart-margin.tsx"),J=e("../charts/src/components/shared/with-responsive.tsx"),w=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),R=e.n(w),K=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss"),j={};j.insert="head",j.singleton=!1;var F=R()(K.A,j);const A=K.A.locals||{};var h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const z=100,X=(o,u)=>{if(!o)return u?p.A:i.A;switch(o){case"smooth":return p.A;case"monotone":return d.G;case"linear":return i.A;default:return i.A}},Y=({tooltipData:o})=>{const u=o?.nearestDatum?.datum;if(!u)return null;const P=Object.entries(o?.datumByKey||{}).map(([n,{datum:C}])=>({key:n,value:C.value})).sort((n,C)=>C.value-n.value);return(0,h.jsxs)("div",{className:A["line-chart__tooltip"],children:[(0,h.jsx)("div",{className:A["line-chart__tooltip-date"],children:u.date?.toLocaleDateString()}),P.map(n=>(0,h.jsxs)("div",{className:A["line-chart__tooltip-row"],children:[(0,h.jsxs)("span",{className:A["line-chart__tooltip-label"],children:[n.key,":"]}),(0,h.jsx)("span",{className:A["line-chart__tooltip-value"],children:n.value})]},n.key))]})},Z=o=>new Date(o).toLocaleDateString(void 0,{month:"short",day:"numeric"}),H=o=>o?.length?o.some(P=>P.data.some(n=>isNaN(n.value)||n.value===null||n.value===void 0||isNaN(n.date.getTime())))?"Invalid data":null:"No data available",$=({data:o,width:u,height:P,className:n,margin:C,withTooltips:q=!0,showLegend:ee=!1,legendOrientation:ae="horizontal",legendShape:te="line",withGradientFill:G=!1,smoothing:U=!0,curveType:le,renderTooltip:ne=Y,options:E={},onPointerDown:se=void 0,onPointerUp:oe=void 0,onPointerMove:re=void 0,onPointerOut:ie=void 0})=>{const L=(0,D.RW)(),I=(0,D.Ox)(o),t=(0,g.useId)(),r=(0,g.useMemo)(()=>o.map(c=>({...c,data:c.data.map(b=>({...b,date:b.date?b.date:M(b.dateString)})).sort((b,de)=>b.date.getTime()-de.date.getTime())})),[o]),W=(0,g.useMemo)(()=>({axis:{x:{orientation:"bottom",numTicks:Math.min(r[0]?.data.length,Math.ceil(u/z)),tickFormat:Z,...E?.axis?.x},y:{orientation:"left",numTicks:4,tickFormat:m.qe,...E?.axis?.y}},xScale:{type:"time",...E?.xScale},yScale:{type:"linear",nice:!0,zero:!1,...E?.yScale}}),[E,r,u]),ce=(0,k.a)(P,W,r,I),ue=H(r);if(ue)return(0,h.jsx)("div",{className:(0,V.A)("line-chart",A["line-chart"]),children:ue});const me=r.map((c,b)=>({label:c.label,value:"",color:c?.options?.stroke??L.colors[b%L.colors.length],shapeStyle:c?.options?.legendShapeStyle??L.legendShapeStyles?.[b]??{}})),pe={xAccessor:c=>c?.date,yAccessor:c=>c?.value};return(0,h.jsxs)("div",{className:(0,V.A)("line-chart",A["line-chart"],n),"data-testid":"line-chart",role:"img","aria-label":"line chart",children:[(0,h.jsxs)(_.A,{theme:I,width:u,height:P,margin:{...ce,...C},xScale:W.xScale,yScale:W.yScale,onPointerDown:se,onPointerUp:oe,onPointerMove:re,onPointerOut:ie,pointerEventsDataKey:"nearest",children:[(0,h.jsx)(a.A,{columns:!1,numTicks:4}),(0,h.jsx)(N.A,{...W.axis.x}),(0,h.jsx)(N.A,{...W.axis.y}),r.map((c,b)=>{const de=c.options?.stroke??I.colors[b%I.colors.length],he=c.options?.seriesLineStyle??L?.seriesLineStyles?.[b%L.seriesLineStyles.length]??{};return(0,h.jsxs)("g",{children:[G&&(0,h.jsx)(s.A,{id:`area-gradient-${t}-${b+1}`,from:de,fromOpacity:.4,toOpacity:.1,to:I.backgroundColor,...c.options?.gradient,"data-testid":"line-gradient"}),(0,h.jsx)(O.A,{dataKey:c?.label,data:c.data,...pe,fill:G?`url(#area-gradient-${t}-${b+1})`:"transparent",renderLine:!0,curve:X(le,U),lineProps:he},c?.label)]},c?.label||b)}),q&&(0,h.jsx)(y.A,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,showSeriesGlyphs:!0,renderTooltip:ne})]}),ee&&(0,h.jsx)(S.$,{items:me,orientation:ae,className:A["line-chart-legend"],shape:te})]})},Q=(0,J.F)($);try{linechart.displayName="linechart",linechart.__docgenInfo={description:"",displayName:"linechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:{value:"undefined"},description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"true"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"line"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},renderTooltip:{defaultValue:{value:`( {
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
}`},description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withGradientFill:{defaultValue:{value:"false"},description:"",name:"withGradientFill",required:!1,type:{name:"boolean"}},smoothing:{defaultValue:{value:"true"},description:"",name:"smoothing",required:!1,type:{name:"boolean"}},curveType:{defaultValue:null,description:"",name:"curveType",required:!1,type:{name:"enum",value:[{value:'"linear"'},{value:'"smooth"'},{value:'"monotone"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/line-chart.tsx#linechart"]={docgenInfo:linechart.__docgenInfo,name:"linechart",path:"../charts/src/components/line-chart/line-chart.tsx#linechart"})}catch{}},"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":(T,v,e)=>{e.d(v,{A:()=>J});var m=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),p=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),i=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),d=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),s=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),_=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),N=e("../charts/src/providers/theme/theme-provider.tsx"),O=e("../charts/src/components/legend/base-legend.tsx"),y=e("../charts/src/components/shared/with-responsive.tsx"),V=e("../charts/src/components/tooltip/base-tooltip.tsx"),g=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=e.n(g),S=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),x={};x.insert="head",x.singleton=!1;var B=D()(S.A,x);const f=S.A.locals||{};var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const M=w=>w.length?w.some(j=>j.percentage<0||j.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:w.reduce((j,F)=>j+F.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},k=({data:w,width:R=400,thickness:K=.4,clockwise:j=!0,withTooltips:F=!1,showLegend:A=!1,legendOrientation:h="horizontal",legendShape:z="circle",label:X,note:Y,className:Z})=>{const H=(0,N.RW)(),{tooltipOpen:$,tooltipLeft:Q,tooltipTop:o,tooltipData:u,hideTooltip:P,showTooltip:n}=(0,s.A)(),C=(0,a.useCallback)((t,r)=>{const W=(0,m.A)(t);W&&n({tooltipData:r.data,tooltipLeft:W.x,tooltipTop:W.y-10})},[n]),q=(0,a.useCallback)(()=>{P()},[P]),ee=(0,a.useCallback)(t=>r=>{C(r,t)},[C]),{isValid:ae,message:te}=M(w);if(!ae)return(0,l.jsx)("div",{className:f["pie-semi-circle-chart"],children:(0,l.jsx)("svg",{width:R,height:R/2,"data-testid":"pie-chart-svg",children:(0,l.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:f.error,children:te})})});const G=R/2,U=.03,le=R-U*2,ne=G-U,E=Math.min(le,ne*2)/2,se=E*(1-K+U),oe=w.map((t,r)=>({...t,index:r})),re=j?-Math.PI/2:Math.PI/2,ie=j?Math.PI/2:-Math.PI/2,L={value:t=>t.value,sort:(t,r)=>r.value-t.value,fill:t=>t.color||H.colors[t.index%H.colors.length]},I=w.map((t,r)=>({label:t.label,value:t.valueDisplay||t.value.toString(),color:L.fill({...t,index:r})}));return(0,l.jsxs)("div",{className:(0,_.A)("pie-semi-circle-chart",f["pie-semi-circle-chart"],Z),"data-testid":"pie-chart-container",children:[(0,l.jsx)("svg",{width:R,height:G,viewBox:`0 0 ${R} ${G}`,"data-testid":"pie-chart-svg",children:(0,l.jsxs)(p.A,{top:E,left:E,children:[(0,l.jsx)(i.A,{data:oe,pieValue:L.value,outerRadius:E,innerRadius:se,cornerRadius:3,padAngle:U,startAngle:re,endAngle:ie,pieSort:L.sort,children:t=>t.arcs.map(r=>(0,l.jsx)("g",{onMouseMove:ee(r),onMouseLeave:q,children:(0,l.jsx)("path",{d:t.path(r)||"",fill:L.fill(r.data),"data-testid":"pie-segment"})},r.data.label))}),(0,l.jsxs)(p.A,{children:[(0,l.jsx)(d.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:f.label,children:X}),(0,l.jsx)(d.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:f.note,children:Y})]})]})}),F&&$&&u&&(0,l.jsx)(V.R,{data:{label:u.label,value:u.value,valueDisplay:u.valueDisplay},top:o||0,left:Q||0}),A&&(0,l.jsx)(O.$,{items:I,orientation:h,className:f["pie-semi-circle-chart-legend"],shape:z})]})};k.displayName="PieSemiCircleChart";const J=(0,y.F)(k);try{k.displayName="PieSemiCircleChart",k.__docgenInfo={description:"",displayName:"PieSemiCircleChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:{value:"400"},description:"Width of the chart in pixels; height would be half of this value calculated automatically.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label text to display above the chart",name:"label",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<DataPointPercentage[], number>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},thickness:{defaultValue:{value:"0.4"},description:"Thickness of the pie chart. A value between 0 and 1",name:"thickness",required:!1,type:{name:"number"}},clockwise:{defaultValue:{value:"true"},description:`Direction of chart rendering
true for clockwise, false for counter-clockwise`,name:"clockwise",required:!1,type:{name:"boolean"}},note:{defaultValue:null,description:"Note text to display below the label",name:"note",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"]={docgenInfo:k.__docgenInfo,name:"PieSemiCircleChart",path:"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(T,v,e)=>{e.d(v,{R:()=>O});var m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(m),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),d={};d.insert="head",d.singleton=!1;var s=p()(i.A,d);const _=i.A.locals||{};var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const N=({data:y})=>(0,a.jsxs)(a.Fragment,{children:[y?.label,": ",y?.valueDisplay||y?.value]}),O=({data:y,top:V,left:g,component:D=N,children:S,className:x})=>(0,a.jsx)("div",{className:_.tooltip,style:{top:V,left:g},role:"tooltip",children:S||y&&(0,a.jsx)(D,{data:y,className:x})});try{O.displayName="BaseTooltip",O.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:O.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss":(T,v,e)=>{e.d(v,{A:()=>_});var m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(m),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(i),s=d()(p());s.push([T.id,".SVlAnnWw2ot8McusfLcw{position:relative}.WG8wpgeFR6IoBhr41Y3z{background:#fff;padding:.5rem}.t5p9YWtrovlLQm8WlrGF{font-weight:700;padding-bottom:10px}.FPtDJMJR2GRu0df3iYy6{display:flex;align-items:center;padding:4px 0;justify-content:space-between}.xTJS98Xw7HFAGWFwzsgd{font-weight:500;padding-right:1rem}.visx-tooltip-glyph svg{width:10px;height:10px}",""]),s.locals={"line-chart":"SVlAnnWw2ot8McusfLcw","line-chart__tooltip":"WG8wpgeFR6IoBhr41Y3z","line-chart__tooltip-date":"t5p9YWtrovlLQm8WlrGF","line-chart__tooltip-row":"FPtDJMJR2GRu0df3iYy6","line-chart__tooltip-label":"xTJS98Xw7HFAGWFwzsgd"};const _=s},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":(T,v,e)=>{e.d(v,{A:()=>_});var m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(m),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(i),s=d()(p());s.push([T.id,".xQEsZ9upN7GZLvXugRlk{position:relative;text-align:center}.u28WZeoUdhsFAVkB8ttn{margin-top:1rem}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0;font-size:14px}",""]),s.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk","pie-semi-circle-chart-legend":"u28WZeoUdhsFAVkB8ttn",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const _=s},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(T,v,e)=>{e.d(v,{A:()=>_});var m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(m),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(i),s=d()(p());s.push([T.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),s.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const _=s}}]);
