"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4848],{"../charts/src/providers/theme/stories/index.stories.tsx":(w,v,e)=>{e.r(v),e.d(v,{CustomTheme:()=>O,Default:()=>V,JetpackTheme:()=>y,WooTheme:()=>l,__namedExportsOrder:()=>B,default:()=>G});var c=e("../charts/src/providers/theme/theme-provider.tsx"),m=e("../charts/src/providers/theme/themes.ts"),d=e("../charts/src/components/line-chart/line-chart.tsx"),u=e("../charts/src/components/bar-chart/bar-chart.tsx"),s=e("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),_=e("../charts/src/components/bar-chart/stories/sample-data.ts"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),N=`import { Meta, StoryObj } from '@storybook/react';
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
`,A={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},JetpackTheme:{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},WooTheme:{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},CustomTheme:{startLoc:{col:27,line:153},endLoc:{col:1,line:188},startBody:{col:27,line:153},endBody:{col:1,line:188}}};const G={title:"JS Packages/Charts/Themes",component:c.NP,parameters:{storySource:{source:`import { ThemeProvider, jetpackTheme, wooTheme } from '../.';
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
};`,locationsMap:{default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},"jetpack-theme":{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},"woo-theme":{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},"custom-theme":{startLoc:{col:27,line:153},endLoc:{col:1,line:188},startBody:{col:27,line:153},endBody:{col:1,line:188}}}},layout:"centered"}},T=[_.A[0],_.A[1],_.A[2]],f=[{group:"Line 1",label:"Line 1",data:[{date:new Date("2024-01-01"),value:10,label:"Jan 1"},{date:new Date("2024-01-02"),value:20,label:"Jan 2"},{date:new Date("2024-01-03"),value:15,label:"Jan 3"},{date:new Date("2024-01-04"),value:25,label:"Jan 4"},{date:new Date("2024-01-05"),value:30,label:"Jan 5"}]},{group:"Line 2",label:"Line 2",data:[{date:new Date("2024-01-01"),value:1,label:"Jan 1"},{date:new Date("2024-01-02"),value:2,label:"Jan 2"},{date:new Date("2024-01-03"),value:1.5,label:"Jan 3"},{date:new Date("2024-01-04"),value:2.5,label:"Jan 4"},{date:new Date("2024-01-05"),value:3,label:"Jan 5"}]}],C=[{label:"Windows",value:8e4,valueDisplay:"80K",percentage:2},{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:5},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:1}],j=({children:X})=>(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:X}),V={render:()=>(0,t.jsx)(c.NP,{children:(0,t.jsxs)(j,{children:[(0,t.jsx)(d.A,{data:f,width:400,height:300}),(0,t.jsx)(u.A,{data:T,width:400,height:300}),(0,t.jsx)(s.A,{data:C,width:400,label:"Pie Chart",note:"Default Theme"})]})})},y={render:()=>(0,t.jsx)(c.NP,{theme:m.QI,children:(0,t.jsxs)(j,{children:[(0,t.jsx)(d.A,{data:f,width:400,height:300}),(0,t.jsx)(u.A,{data:T,width:400,height:300}),(0,t.jsx)(s.A,{data:C,width:400,label:"Pie Chart",note:"Jetpack Theme"})]})})},l={render:()=>(0,t.jsx)(c.NP,{theme:m.pk,children:(0,t.jsxs)(j,{children:[(0,t.jsx)(d.A,{data:f,width:400,height:300}),(0,t.jsx)(u.A,{data:T,width:400,height:300}),(0,t.jsx)(s.A,{data:C,width:400,label:"Pie Chart",note:"Woo Theme"})]})})},O={render:()=>(0,t.jsx)(c.NP,{theme:{colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},children:(0,t.jsxs)(j,{children:[(0,t.jsx)(d.A,{data:f,width:400,height:300}),(0,t.jsx)(u.A,{data:T,width:400,height:300}),(0,t.jsx)(s.A,{data:C,width:400,label:"Pie Chart",note:"Custom Color Theme"})]})})},B=["Default","JetpackTheme","WooTheme","CustomTheme"];V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Default Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...V.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={jetpackTheme}>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Jetpack Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...y.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={wooTheme}>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Woo Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...l.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}}},"../charts/src/components/bar-chart/stories/sample-data.ts":(w,v,e)=>{e.d(v,{A:()=>m});const m=[{group:"United States",label:"United States",data:[{label:"1896",value:20},{label:"1900",value:47},{label:"1904",value:239},{label:"1908",value:47},{label:"1912",value:63},{label:"1920",value:95},{label:"1924",value:99},{label:"1928",value:56},{label:"1932",value:103},{label:"1936",value:56},{label:"1948",value:84},{label:"1952",value:76},{label:"1956",value:74},{label:"1960",value:71},{label:"1964",value:90},{label:"1968",value:107},{label:"1972",value:94},{label:"1976",value:94},{label:"1980",value:0},{label:"1984",value:174},{label:"1988",value:94},{label:"1992",value:108},{label:"1996",value:101},{label:"2000",value:93},{label:"2004",value:101},{label:"2008",value:112},{label:"2012",value:104},{label:"2016",value:121},{label:"2020",value:113},{label:"2024",value:126}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:7},{label:"1900",value:30},{label:"1904",value:1},{label:"1908",value:146},{label:"1912",value:41},{label:"1920",value:43},{label:"1924",value:34},{label:"1928",value:20},{label:"1932",value:16},{label:"1936",value:14},{label:"1948",value:23},{label:"1952",value:11},{label:"1956",value:24},{label:"1960",value:20},{label:"1964",value:18},{label:"1968",value:13},{label:"1972",value:18},{label:"1976",value:13},{label:"1980",value:21},{label:"1984",value:37},{label:"1988",value:24},{label:"1992",value:20},{label:"1996",value:15},{label:"2000",value:28},{label:"2004",value:30},{label:"2008",value:47},{label:"2012",value:65},{label:"2016",value:67},{label:"2020",value:65},{label:"2024",value:60}]},{group:"Japan",label:"Japan",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:0},{label:"1908",value:0},{label:"1912",value:2},{label:"1920",value:0},{label:"1924",value:4},{label:"1928",value:5},{label:"1932",value:18},{label:"1936",value:20},{label:"1948",value:0},{label:"1952",value:9},{label:"1956",value:19},{label:"1960",value:18},{label:"1964",value:29},{label:"1968",value:25},{label:"1972",value:29},{label:"1976",value:25},{label:"1980",value:0},{label:"1984",value:32},{label:"1988",value:14},{label:"1992",value:22},{label:"1996",value:14},{label:"2000",value:18},{label:"2004",value:37},{label:"2008",value:25},{label:"2012",value:38},{label:"2016",value:41},{label:"2020",value:58},{label:"2024",value:45}]},{group:"China",label:"China",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:0},{label:"1908",value:0},{label:"1912",value:0},{label:"1920",value:0},{label:"1924",value:0},{label:"1928",value:0},{label:"1932",value:0},{label:"1936",value:0},{label:"1948",value:0},{label:"1952",value:0},{label:"1956",value:0},{label:"1960",value:0},{label:"1964",value:0},{label:"1968",value:0},{label:"1972",value:0},{label:"1976",value:0},{label:"1980",value:0},{label:"1984",value:32},{label:"1988",value:28},{label:"1992",value:54},{label:"1996",value:50},{label:"2000",value:59},{label:"2004",value:63},{label:"2008",value:100},{label:"2012",value:91},{label:"2016",value:70},{label:"2020",value:88},{label:"2024",value:91}]},{group:"France",label:"France",data:[{label:"1896",value:11},{label:"1900",value:101},{label:"1904",value:0},{label:"1908",value:19},{label:"1912",value:14},{label:"1920",value:41},{label:"1924",value:38},{label:"1928",value:21},{label:"1932",value:19},{label:"1936",value:19},{label:"1948",value:29},{label:"1952",value:18},{label:"1956",value:14},{label:"1960",value:5},{label:"1964",value:15},{label:"1968",value:15},{label:"1972",value:13},{label:"1976",value:9},{label:"1980",value:14},{label:"1984",value:28},{label:"1988",value:16},{label:"1992",value:29},{label:"1996",value:37},{label:"2000",value:38},{label:"2004",value:33},{label:"2008",value:43},{label:"2012",value:35},{label:"2016",value:42},{label:"2020",value:33},{label:"2024",value:55}]},{group:"Germany",label:"Germany",data:[{label:"1896",value:13},{label:"1900",value:8},{label:"1904",value:4},{label:"1908",value:22},{label:"1912",value:25},{label:"1928",value:31},{label:"1932",value:20},{label:"1936",value:89},{label:"1952",value:24},{label:"1956",value:64},{label:"1960",value:87},{label:"1964",value:96},{label:"1968",value:91},{label:"1972",value:133},{label:"1976",value:125},{label:"1980",value:126},{label:"1984",value:59},{label:"1988",value:142},{label:"1992",value:82},{label:"1996",value:65},{label:"2000",value:56},{label:"2004",value:48},{label:"2008",value:41},{label:"2012",value:44},{label:"2016",value:42},{label:"2020",value:37},{label:"2024",value:40}]},{group:"Australia",label:"Australia",data:[{label:"1896",value:0},{label:"1900",value:2},{label:"1904",value:0},{label:"1908",value:15},{label:"1912",value:7},{label:"1920",value:3},{label:"1924",value:6},{label:"1928",value:4},{label:"1932",value:5},{label:"1936",value:3},{label:"1948",value:13},{label:"1952",value:11},{label:"1956",value:35},{label:"1960",value:22},{label:"1964",value:18},{label:"1968",value:17},{label:"1972",value:8},{label:"1976",value:5},{label:"1980",value:9},{label:"1984",value:24},{label:"1988",value:14},{label:"1992",value:27},{label:"1996",value:41},{label:"2000",value:58},{label:"2004",value:49},{label:"2008",value:46},{label:"2012",value:35},{label:"2016",value:29},{label:"2020",value:46},{label:"2024",value:42}]},{group:"Poland",label:"Poland",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:0},{label:"1908",value:0},{label:"1912",value:0},{label:"1920",value:0},{label:"1924",value:0},{label:"1928",value:5},{label:"1932",value:7},{label:"1936",value:6},{label:"1948",value:0},{label:"1952",value:4},{label:"1956",value:9},{label:"1960",value:21},{label:"1964",value:23},{label:"1968",value:18},{label:"1972",value:21},{label:"1976",value:26},{label:"1980",value:32},{label:"1984",value:0},{label:"1988",value:16},{label:"1992",value:19},{label:"1996",value:17},{label:"2000",value:14},{label:"2004",value:10},{label:"2008",value:10},{label:"2012",value:10},{label:"2016",value:11},{label:"2020",value:14},{label:"2024",value:15}]},{group:"Jamaica",label:"Jamaica",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:0},{label:"1908",value:0},{label:"1912",value:0},{label:"1920",value:0},{label:"1924",value:0},{label:"1928",value:0},{label:"1932",value:0},{label:"1936",value:0},{label:"1948",value:3},{label:"1952",value:2},{label:"1956",value:0},{label:"1960",value:0},{label:"1964",value:2},{label:"1968",value:1},{label:"1972",value:1},{label:"1976",value:2},{label:"1980",value:3},{label:"1984",value:3},{label:"1988",value:2},{label:"1992",value:4},{label:"1996",value:6},{label:"2000",value:9},{label:"2004",value:5},{label:"2008",value:11},{label:"2012",value:12},{label:"2016",value:11},{label:"2020",value:9},{label:"2024",value:10}]}]},"../charts/src/components/line-chart/line-chart.tsx":(w,v,e)=>{e.d(v,{A:()=>le});var c=e("../number-formatters/src/index.ts"),m=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/catmullRom.js"),d=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/linear.js"),u=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/monotone.js"),s=e("../../../node_modules/.pnpm/@visx+gradient@3.12.0_react@18.3.1/node_modules/@visx/gradient/esm/gradients/LinearGradient.js"),_=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/context/DataContext.js"),t=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),N=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),A=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),S=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/AreaSeries.js"),G=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),T=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),C=e("../charts/src/providers/theme/theme-provider.tsx"),j=e("../charts/src/components/legend/base-legend.tsx"),V=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js"),y=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js"),l=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse.js");const O=a=>/T.*[Z]$|T.*[+-]\d{2}:?\d{2}$/.test(a),B=a=>{const o=a.trim();if(O(o)){const p=(0,V.H)(o);return(0,y.f)(p)?p:new Date(NaN)}const x=["yyyy-MM-dd","yyyy-MM-dd HH:mm:ss","yyyy-MM-dd HH:mm","yyyy-MM-dd'T'HH:mm:ss","yyyy-MM-dd'T'HH:mm:ss.SSS","yyyy-MM-dd'T'HH:mm"];for(const p of x){const h=(0,l.qg)(o,p,new Date);if((0,y.f)(h))return h}return new Date(NaN)};var X=e("../charts/src/components/shared/use-chart-margin.tsx"),E=e("../charts/src/components/shared/use-element-height.ts"),M=e("../charts/src/components/shared/with-responsive.tsx"),q=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=e.n(q),I=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss"),Y={};Y.insert="head",Y.singleton=!1;var pe=k()(I.A,Y);const L=I.A.locals||{};var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const re=100,ie=a=>{const{theme:o}=(0,f.useContext)(_.A)||{};return(0,r.jsx)("circle",{cx:a.x,cy:a.y,r:a.size,fill:a.color,stroke:o?.backgroundColor,strokeWidth:1.5,paintOrder:"fill","data-testid":`start-glyph-${a.index}`,...a.glyphStyle})},ee=a=>(0,f.createElement)(ie,{...a,key:a.key}),de=({data:a,index:o,color:x,glyphStyle:p,renderGlyph:h,accessors:D})=>{const{xScale:J,yScale:K}=(0,f.useContext)(_.A)||{};if(!J||!K||a.data.length===0)return null;const P=a.data[0],W=J(D.xAccessor(P)),z=K(D.yAccessor(P));if(typeof W!="number"||typeof z!="number")return null;const Z=Number(p?.radius)||4;return h({key:`start-glyph-${a.label}`,index:o,datum:P,color:x,size:Z,x:W,y:z,glyphStyle:p})},ue=(a,o)=>{if(!a)return o?m.A:d.A;switch(a){case"smooth":return m.A;case"monotone":return u.G;case"linear":return d.A;default:return d.A}},ce=a=>{const{tooltipData:o}=a,x=o?.nearestDatum?.datum;if(!x)return null;const p=Object.entries(o?.datumByKey||{}).map(([h,{datum:D}])=>({key:h,value:D.value})).sort((h,D)=>D.value-h.value);return(0,r.jsxs)("div",{className:L["line-chart__tooltip"],children:[(0,r.jsx)("div",{className:L["line-chart__tooltip-date"],children:x.date?.toLocaleDateString()}),p.map(h=>(0,r.jsxs)("div",{className:L["line-chart__tooltip-row"],children:[(0,r.jsxs)("span",{className:L["line-chart__tooltip-label"],children:[h.key,":"]}),(0,r.jsx)("span",{className:L["line-chart__tooltip-value"],children:h.value})]},h.key))]})},U=a=>new Date(a).toLocaleDateString(void 0,{month:"short",day:"numeric"}),ae=a=>a?.length?a.some(x=>x.data.some(p=>isNaN(p.value)||p.value===null||p.value===void 0||isNaN(p.date.getTime())))?"Invalid data":null:"No data available",te=({data:a,width:o,height:x,className:p,margin:h,withTooltips:D=!0,showLegend:J=!1,legendOrientation:K="horizontal",renderGlyph:P=ee,glyphStyle:W={},legendShape:z="line",withLegendGlyph:Z=!1,withGradientFill:ne=!1,smoothing:F=!0,curveType:me,renderTooltip:n=ce,withStartGlyphs:b=!1,options:R={},onPointerDown:be=void 0,onPointerUp:fe=void 0,onPointerMove:ye=void 0,onPointerOut:ge=void 0})=>{const se=(0,C.RW)(),$=(0,C.Ox)(a),he=(0,f.useId)(),[xe,De]=(0,E.v)(),H=(0,f.useMemo)(()=>a.map(i=>({...i,data:i.data.map(g=>({...g,date:g.date?g.date:B(g.dateString)})).sort((g,oe)=>g.date.getTime()-oe.date.getTime())})),[a]),Q=(0,f.useMemo)(()=>({axis:{x:{orientation:"bottom",numTicks:Math.min(H[0]?.data.length,Math.ceil(o/re)),tickFormat:U,...R?.axis?.x},y:{orientation:"left",numTicks:4,tickFormat:c.qe,...R?.axis?.y}},xScale:{type:"time",...R?.xScale},yScale:{type:"linear",nice:!0,zero:!1,...R?.yScale}}),[R,H,o]),Se=(0,X.a)(x,Q,H,$),ve=ae(H);if(ve)return(0,r.jsx)("div",{className:(0,T.A)("line-chart",L["line-chart"]),children:ve});const Ce=H.map((i,g)=>({label:i.label,value:"",color:i?.options?.stroke??se.colors[g%se.colors.length],shapeStyle:i?.options?.legendShapeStyle,renderGlyph:Z?P:void 0,glyphSize:Number(W?.radius)})),_e={xAccessor:i=>i?.date,yAccessor:i=>i?.value};return(0,r.jsxs)("div",{className:(0,T.A)("line-chart",L["line-chart"],p),"data-testid":"line-chart",role:"img","aria-label":"line chart",style:{width:o,height:x},children:[(0,r.jsxs)(t.A,{theme:$,width:o,height:x-De,margin:{...Se,...h},xScale:Q.xScale,yScale:Q.yScale,onPointerDown:be,onPointerUp:fe,onPointerMove:ye,onPointerOut:ge,pointerEventsDataKey:"nearest",children:[(0,r.jsx)(N.A,{columns:!1,numTicks:4}),(0,r.jsx)(A.A,{...Q.axis.x}),(0,r.jsx)(A.A,{...Q.axis.y}),H.map((i,g)=>{const oe=i.options?.stroke??$.colors[g%$.colors.length],je=i.options?.seriesLineStyle??se?.seriesLineStyles?.[g%se.seriesLineStyles.length]??{};return(0,r.jsxs)("g",{children:[b&&(0,r.jsx)(de,{index:g,data:i,color:oe,renderGlyph:P,accessors:_e,glyphStyle:W}),ne&&(0,r.jsx)(s.A,{id:`area-gradient-${he}-${g+1}`,from:oe,fromOpacity:.4,toOpacity:.1,to:$.backgroundColor,...i.options?.gradient,"data-testid":"line-gradient"}),(0,r.jsx)(S.A,{dataKey:i?.label,data:i.data,..._e,fill:ne?`url(#area-gradient-${he}-${g+1})`:"transparent",renderLine:!0,curve:ue(me,F),lineProps:je},i?.label)]},i?.label||g)}),D&&(0,r.jsx)(G.A,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,showSeriesGlyphs:!0,renderTooltip:n,renderGlyph:P,glyphStyle:W})]}),J&&(0,r.jsx)(j.$,{items:Ce,orientation:K,className:L["line-chart-legend"],shape:z,ref:xe})]})},le=(0,M.F)(te);try{linechart.displayName="linechart",linechart.__docgenInfo={description:"",displayName:"linechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:{value:"undefined"},description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"true"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"line"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},renderTooltip:{defaultValue:{value:`( params: RenderTooltipParams< DataPointDate > ) => {
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
}`},description:"",name:"renderGlyph",required:!1,type:{name:"<Datum extends object>(props: GlyphProps<Datum>) => ReactNode"}},glyphStyle:{defaultValue:{value:"{}"},description:"",name:"glyphStyle",required:!1,type:{name:"SVGProps<SVGCircleElement>"}},withLegendGlyph:{defaultValue:{value:"false"},description:"",name:"withLegendGlyph",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/line-chart.tsx#linechart"]={docgenInfo:linechart.__docgenInfo,name:"linechart",path:"../charts/src/components/line-chart/line-chart.tsx#linechart"})}catch{}},"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":(w,v,e)=>{e.d(v,{A:()=>X});var c=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),m=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),d=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),u=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),s=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),_=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),N=e("../charts/src/providers/theme/theme-provider.tsx"),A=e("../charts/src/components/legend/base-legend.tsx"),S=e("../charts/src/components/shared/with-responsive.tsx"),G=e("../charts/src/components/tooltip/base-tooltip.tsx"),T=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(T),C=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),j={};j.insert="head",j.singleton=!1;var V=f()(C.A,j);const y=C.A.locals||{};var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const O=E=>E.length?E.some(k=>k.percentage<0||k.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:E.reduce((k,I)=>k+I.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},B=({data:E,width:M=400,thickness:q=.4,clockwise:k=!0,withTooltips:I=!1,showLegend:Y=!1,legendOrientation:pe="horizontal",legendShape:L="circle",label:r,note:re,className:ie})=>{const ee=(0,N.RW)(),{tooltipOpen:de,tooltipLeft:ue,tooltipTop:ce,tooltipData:U,hideTooltip:ae,showTooltip:te}=(0,s.A)(),le=(0,t.useCallback)((n,b)=>{const R=(0,c.A)(n);R&&te({tooltipData:b.data,tooltipLeft:R.x,tooltipTop:R.y-10})},[te]),a=(0,t.useCallback)(()=>{ae()},[ae]),o=(0,t.useCallback)(n=>b=>{le(b,n)},[le]),{isValid:x,message:p}=O(E);if(!x)return(0,l.jsx)("div",{className:y["pie-semi-circle-chart"],children:(0,l.jsx)("svg",{width:M,height:M/2,"data-testid":"pie-chart-svg",children:(0,l.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:y.error,children:p})})});const h=M/2,D=.03,J=M-D*2,K=h-D,P=Math.min(J,K*2)/2,W=P*(1-q+D),z=E.map((n,b)=>({...n,index:b})),Z=k?-Math.PI/2:Math.PI/2,ne=k?Math.PI/2:-Math.PI/2,F={value:n=>n.value,sort:(n,b)=>b.value-n.value,fill:n=>n.color||ee.colors[n.index%ee.colors.length]},me=E.map((n,b)=>({label:n.label,value:n.valueDisplay||n.value.toString(),color:F.fill({...n,index:b})}));return(0,l.jsxs)("div",{className:(0,_.A)("pie-semi-circle-chart",y["pie-semi-circle-chart"],ie),"data-testid":"pie-chart-container",children:[(0,l.jsx)("svg",{width:M,height:h,viewBox:`0 0 ${M} ${h}`,"data-testid":"pie-chart-svg",children:(0,l.jsxs)(m.A,{top:P,left:P,children:[(0,l.jsx)(d.A,{data:z,pieValue:F.value,outerRadius:P,innerRadius:W,cornerRadius:3,padAngle:D,startAngle:Z,endAngle:ne,pieSort:F.sort,children:n=>n.arcs.map(b=>(0,l.jsx)("g",{onMouseMove:o(b),onMouseLeave:a,children:(0,l.jsx)("path",{d:n.path(b)||"",fill:F.fill(b.data),"data-testid":"pie-segment"})},b.data.label))}),(0,l.jsxs)(m.A,{children:[(0,l.jsx)(u.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:y.label,children:r}),(0,l.jsx)(u.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:y.note,children:re})]})]})}),I&&de&&U&&(0,l.jsx)(G.R,{data:{label:U.label,value:U.value,valueDisplay:U.valueDisplay},top:ce||0,left:ue||0}),Y&&(0,l.jsx)(A.$,{items:me,orientation:pe,className:y["pie-semi-circle-chart-legend"],shape:L})]})};B.displayName="PieSemiCircleChart";const X=(0,S.F)(B);try{B.displayName="PieSemiCircleChart",B.__docgenInfo={description:"",displayName:"PieSemiCircleChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:{value:"400"},description:"Width of the chart in pixels; height would be half of this value calculated automatically.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label text to display above the chart",name:"label",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<DataPointPercentage[], number>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},thickness:{defaultValue:{value:"0.4"},description:"Thickness of the pie chart. A value between 0 and 1",name:"thickness",required:!1,type:{name:"number"}},clockwise:{defaultValue:{value:"true"},description:`Direction of chart rendering
true for clockwise, false for counter-clockwise`,name:"clockwise",required:!1,type:{name:"boolean"}},note:{defaultValue:null,description:"Note text to display below the label",name:"note",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"]={docgenInfo:B.__docgenInfo,name:"PieSemiCircleChart",path:"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(w,v,e)=>{e.d(v,{R:()=>A});var c=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(c),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),u={};u.insert="head",u.singleton=!1;var s=m()(d.A,u);const _=d.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const N=({data:S})=>(0,t.jsxs)(t.Fragment,{children:[S?.label,": ",S?.valueDisplay||S?.value]}),A=({data:S,top:G,left:T,component:f=N,children:C,className:j})=>(0,t.jsx)("div",{className:_.tooltip,style:{top:G,left:T},role:"tooltip",children:C||S&&(0,t.jsx)(f,{data:S,className:j})});try{A.displayName="BaseTooltip",A.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:A.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss":(w,v,e)=>{e.d(v,{A:()=>_});var c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(c),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),u=e.n(d),s=u()(m());s.push([w.id,".SVlAnnWw2ot8McusfLcw{position:relative}.SVlAnnWw2ot8McusfLcw svg{overflow:visible}.WG8wpgeFR6IoBhr41Y3z{background:#fff;padding:.5rem}.t5p9YWtrovlLQm8WlrGF{font-weight:700;padding-bottom:10px}.FPtDJMJR2GRu0df3iYy6{display:flex;align-items:center;padding:4px 0;justify-content:space-between}.xTJS98Xw7HFAGWFwzsgd{font-weight:500;padding-right:1rem}.visx-tooltip-glyph svg{width:10px;height:10px}",""]),s.locals={"line-chart":"SVlAnnWw2ot8McusfLcw","line-chart__tooltip":"WG8wpgeFR6IoBhr41Y3z","line-chart__tooltip-date":"t5p9YWtrovlLQm8WlrGF","line-chart__tooltip-row":"FPtDJMJR2GRu0df3iYy6","line-chart__tooltip-label":"xTJS98Xw7HFAGWFwzsgd"};const _=s},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":(w,v,e)=>{e.d(v,{A:()=>_});var c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(c),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),u=e.n(d),s=u()(m());s.push([w.id,".xQEsZ9upN7GZLvXugRlk{position:relative;text-align:center}.u28WZeoUdhsFAVkB8ttn{margin-top:1rem}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0;font-size:14px}",""]),s.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk","pie-semi-circle-chart-legend":"u28WZeoUdhsFAVkB8ttn",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const _=s},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(w,v,e)=>{e.d(v,{A:()=>_});var c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(c),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),u=e.n(d),s=u()(m());s.push([w.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),s.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const _=s}}]);
