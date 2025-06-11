"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4848],{"../charts/src/providers/theme/stories/index.stories.tsx":(P,h,e)=>{e.r(h),e.d(h,{CustomTheme:()=>B,Default:()=>W,JetpackTheme:()=>f,WooTheme:()=>n,__namedExportsOrder:()=>M,default:()=>G});var m=e("../charts/src/providers/theme/theme-provider.tsx"),p=e("../charts/src/providers/theme/themes.ts"),u=e("../charts/src/components/line-chart/line-chart.tsx"),c=e("../charts/src/components/bar-chart/bar-chart.tsx"),o=e("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),v=e("../charts/src/components/bar-chart/stories/sample-data.ts"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),U=`import { Meta, StoryObj } from '@storybook/react';
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
`,T={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},JetpackTheme:{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},WooTheme:{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},CustomTheme:{startLoc:{col:27,line:153},endLoc:{col:1,line:188},startBody:{col:27,line:153},endBody:{col:1,line:188}}};const G={title:"JS Packages/Charts/Themes",component:m.NP,parameters:{storySource:{source:`import { ThemeProvider, jetpackTheme, wooTheme } from '../.';
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
};`,locationsMap:{default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},"jetpack-theme":{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},"woo-theme":{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},"custom-theme":{startLoc:{col:27,line:153},endLoc:{col:1,line:188},startBody:{col:27,line:153},endBody:{col:1,line:188}}}},layout:"centered"}},j=[v.A[0],v.A[1],v.A[2]],b=[{group:"Line 1",label:"Line 1",data:[{date:new Date("2024-01-01"),value:10,label:"Jan 1"},{date:new Date("2024-01-02"),value:20,label:"Jan 2"},{date:new Date("2024-01-03"),value:15,label:"Jan 3"},{date:new Date("2024-01-04"),value:25,label:"Jan 4"},{date:new Date("2024-01-05"),value:30,label:"Jan 5"}]},{group:"Line 2",label:"Line 2",data:[{date:new Date("2024-01-01"),value:1,label:"Jan 1"},{date:new Date("2024-01-02"),value:2,label:"Jan 2"},{date:new Date("2024-01-03"),value:1.5,label:"Jan 3"},{date:new Date("2024-01-04"),value:2.5,label:"Jan 4"},{date:new Date("2024-01-05"),value:3,label:"Jan 5"}]}],x=[{label:"Windows",value:8e4,valueDisplay:"80K",percentage:2},{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:5},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:1}],D=({children:H})=>(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:H}),W={render:()=>(0,t.jsx)(m.NP,{children:(0,t.jsxs)(D,{children:[(0,t.jsx)(u.A,{data:b,width:400,height:300}),(0,t.jsx)(c.A,{data:j,width:400,height:300}),(0,t.jsx)(o.A,{data:x,width:400,label:"Pie Chart",note:"Default Theme"})]})})},f={render:()=>(0,t.jsx)(m.NP,{theme:p.QI,children:(0,t.jsxs)(D,{children:[(0,t.jsx)(u.A,{data:b,width:400,height:300}),(0,t.jsx)(c.A,{data:j,width:400,height:300}),(0,t.jsx)(o.A,{data:x,width:400,label:"Pie Chart",note:"Jetpack Theme"})]})})},n={render:()=>(0,t.jsx)(m.NP,{theme:p.pk,children:(0,t.jsxs)(D,{children:[(0,t.jsx)(u.A,{data:b,width:400,height:300}),(0,t.jsx)(c.A,{data:j,width:400,height:300}),(0,t.jsx)(o.A,{data:x,width:400,label:"Pie Chart",note:"Woo Theme"})]})})},B={render:()=>(0,t.jsx)(m.NP,{theme:{colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},children:(0,t.jsxs)(D,{children:[(0,t.jsx)(u.A,{data:b,width:400,height:300}),(0,t.jsx)(c.A,{data:j,width:400,height:300}),(0,t.jsx)(o.A,{data:x,width:400,label:"Pie Chart",note:"Custom Color Theme"})]})})},M=["Default","JetpackTheme","WooTheme","CustomTheme"];W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Default Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...W.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}}},"../charts/src/components/bar-chart/stories/sample-data.ts":(P,h,e)=>{e.d(h,{A:()=>p});const p=[{group:"United States",label:"United States",data:[{label:"1896",value:20},{label:"1900",value:47},{label:"1904",value:239},{label:"1908",value:47},{label:"1912",value:63},{label:"1920",value:95},{label:"1924",value:99},{label:"1928",value:56},{label:"1932",value:103},{label:"1936",value:56},{label:"1948",value:84},{label:"1952",value:76},{label:"1956",value:74},{label:"1960",value:71},{label:"1964",value:90},{label:"1968",value:107},{label:"1972",value:94},{label:"1976",value:94},{label:"1980",value:0},{label:"1984",value:174},{label:"1988",value:94},{label:"1992",value:108},{label:"1996",value:101},{label:"2000",value:93},{label:"2004",value:101},{label:"2008",value:112},{label:"2012",value:104},{label:"2016",value:121},{label:"2020",value:113},{label:"2024",value:126}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:7},{label:"1900",value:30},{label:"1904",value:1},{label:"1908",value:146},{label:"1912",value:41},{label:"1920",value:43},{label:"1924",value:34},{label:"1928",value:20},{label:"1932",value:16},{label:"1936",value:14},{label:"1948",value:23},{label:"1952",value:11},{label:"1956",value:24},{label:"1960",value:20},{label:"1964",value:18},{label:"1968",value:13},{label:"1972",value:18},{label:"1976",value:13},{label:"1980",value:21},{label:"1984",value:37},{label:"1988",value:24},{label:"1992",value:20},{label:"1996",value:15},{label:"2000",value:28},{label:"2004",value:30},{label:"2008",value:47},{label:"2012",value:65},{label:"2016",value:67},{label:"2020",value:65},{label:"2024",value:60}]},{group:"Japan",label:"Japan",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:0},{label:"1908",value:0},{label:"1912",value:2},{label:"1920",value:0},{label:"1924",value:4},{label:"1928",value:5},{label:"1932",value:18},{label:"1936",value:20},{label:"1948",value:0},{label:"1952",value:9},{label:"1956",value:19},{label:"1960",value:18},{label:"1964",value:29},{label:"1968",value:25},{label:"1972",value:29},{label:"1976",value:25},{label:"1980",value:0},{label:"1984",value:32},{label:"1988",value:14},{label:"1992",value:22},{label:"1996",value:14},{label:"2000",value:18},{label:"2004",value:37},{label:"2008",value:25},{label:"2012",value:38},{label:"2016",value:41},{label:"2020",value:58},{label:"2024",value:45}]},{group:"China",label:"China",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:0},{label:"1908",value:0},{label:"1912",value:0},{label:"1920",value:0},{label:"1924",value:0},{label:"1928",value:0},{label:"1932",value:0},{label:"1936",value:0},{label:"1948",value:0},{label:"1952",value:0},{label:"1956",value:0},{label:"1960",value:0},{label:"1964",value:0},{label:"1968",value:0},{label:"1972",value:0},{label:"1976",value:0},{label:"1980",value:0},{label:"1984",value:32},{label:"1988",value:28},{label:"1992",value:54},{label:"1996",value:50},{label:"2000",value:59},{label:"2004",value:63},{label:"2008",value:100},{label:"2012",value:91},{label:"2016",value:70},{label:"2020",value:88},{label:"2024",value:91}]},{group:"France",label:"France",data:[{label:"1896",value:11},{label:"1900",value:101},{label:"1904",value:0},{label:"1908",value:19},{label:"1912",value:14},{label:"1920",value:41},{label:"1924",value:38},{label:"1928",value:21},{label:"1932",value:19},{label:"1936",value:19},{label:"1948",value:29},{label:"1952",value:18},{label:"1956",value:14},{label:"1960",value:5},{label:"1964",value:15},{label:"1968",value:15},{label:"1972",value:13},{label:"1976",value:9},{label:"1980",value:14},{label:"1984",value:28},{label:"1988",value:16},{label:"1992",value:29},{label:"1996",value:37},{label:"2000",value:38},{label:"2004",value:33},{label:"2008",value:43},{label:"2012",value:35},{label:"2016",value:42},{label:"2020",value:33},{label:"2024",value:55}]},{group:"Germany",label:"Germany",data:[{label:"1896",value:13},{label:"1900",value:8},{label:"1904",value:4},{label:"1908",value:22},{label:"1912",value:25},{label:"1928",value:31},{label:"1932",value:20},{label:"1936",value:89},{label:"1952",value:24},{label:"1956",value:64},{label:"1960",value:87},{label:"1964",value:96},{label:"1968",value:91},{label:"1972",value:133},{label:"1976",value:125},{label:"1980",value:126},{label:"1984",value:59},{label:"1988",value:142},{label:"1992",value:82},{label:"1996",value:65},{label:"2000",value:56},{label:"2004",value:48},{label:"2008",value:41},{label:"2012",value:44},{label:"2016",value:42},{label:"2020",value:37},{label:"2024",value:40}]},{group:"Australia",label:"Australia",data:[{label:"1896",value:0},{label:"1900",value:2},{label:"1904",value:0},{label:"1908",value:15},{label:"1912",value:7},{label:"1920",value:3},{label:"1924",value:6},{label:"1928",value:4},{label:"1932",value:5},{label:"1936",value:3},{label:"1948",value:13},{label:"1952",value:11},{label:"1956",value:35},{label:"1960",value:22},{label:"1964",value:18},{label:"1968",value:17},{label:"1972",value:8},{label:"1976",value:5},{label:"1980",value:9},{label:"1984",value:24},{label:"1988",value:14},{label:"1992",value:27},{label:"1996",value:41},{label:"2000",value:58},{label:"2004",value:49},{label:"2008",value:46},{label:"2012",value:35},{label:"2016",value:29},{label:"2020",value:46},{label:"2024",value:42}]},{group:"Poland",label:"Poland",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:0},{label:"1908",value:0},{label:"1912",value:0},{label:"1920",value:0},{label:"1924",value:0},{label:"1928",value:5},{label:"1932",value:7},{label:"1936",value:6},{label:"1948",value:0},{label:"1952",value:4},{label:"1956",value:9},{label:"1960",value:21},{label:"1964",value:23},{label:"1968",value:18},{label:"1972",value:21},{label:"1976",value:26},{label:"1980",value:32},{label:"1984",value:0},{label:"1988",value:16},{label:"1992",value:19},{label:"1996",value:17},{label:"2000",value:14},{label:"2004",value:10},{label:"2008",value:10},{label:"2012",value:10},{label:"2016",value:11},{label:"2020",value:14},{label:"2024",value:15}]},{group:"Jamaica",label:"Jamaica",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:0},{label:"1908",value:0},{label:"1912",value:0},{label:"1920",value:0},{label:"1924",value:0},{label:"1928",value:0},{label:"1932",value:0},{label:"1936",value:0},{label:"1948",value:3},{label:"1952",value:2},{label:"1956",value:0},{label:"1960",value:0},{label:"1964",value:2},{label:"1968",value:1},{label:"1972",value:1},{label:"1976",value:2},{label:"1980",value:3},{label:"1984",value:3},{label:"1988",value:2},{label:"1992",value:4},{label:"1996",value:6},{label:"2000",value:9},{label:"2004",value:5},{label:"2008",value:11},{label:"2012",value:12},{label:"2016",value:11},{label:"2020",value:9},{label:"2024",value:10}]}]},"../charts/src/components/line-chart/line-chart.tsx":(P,h,e)=>{e.d(h,{A:()=>ae});var m=e("../number-formatters/src/index.ts"),p=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/catmullRom.js"),u=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/linear.js"),c=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/monotone.js"),o=e("../../../node_modules/.pnpm/@visx+gradient@3.12.0_react@18.3.1/node_modules/@visx/gradient/esm/gradients/LinearGradient.js"),v=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/context/DataContext.js"),t=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),U=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),T=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),g=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/AreaSeries.js"),G=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),j=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),x=e("../charts/src/providers/theme/theme-provider.tsx"),D=e("../charts/src/components/legend/base-legend.tsx"),W=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js"),f=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js"),n=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse.js");const B=a=>/T.*[Z]$|T.*[+-]\d{2}:?\d{2}$/.test(a),M=a=>{const i=a.trim();if(B(i)){const l=(0,W.H)(i);return(0,f.f)(l)?l:new Date(NaN)}const S=["yyyy-MM-dd","yyyy-MM-dd HH:mm:ss","yyyy-MM-dd HH:mm","yyyy-MM-dd'T'HH:mm:ss","yyyy-MM-dd'T'HH:mm:ss.SSS","yyyy-MM-dd'T'HH:mm"];for(const l of S){const C=(0,n.qg)(i,l,new Date);if((0,f.f)(C))return C}return new Date(NaN)};var H=e("../charts/src/components/shared/use-chart-margin.tsx"),w=e("../charts/src/components/shared/with-responsive.tsx"),k=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Q=e.n(k),A=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss"),N={};N.insert="head",N.singleton=!1;var pe=Q()(A.A,N);const E=A.A.locals||{};var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ne=100,se=a=>{const{theme:i}=(0,b.useContext)(v.A)||{};return(0,r.jsx)("circle",{cx:a.x,cy:a.y,r:a.size,fill:a.color,stroke:i?.backgroundColor,strokeWidth:1.5,paintOrder:"fill","data-testid":`start-glyph-${a.index}`,...a.glyphStyle})},oe=a=>(0,b.createElement)(se,{...a,key:a.key}),q=({data:a,index:i,color:S,glyphStyle:l,renderGlyph:C,accessors:V})=>{const{xScale:R,yScale:K}=(0,b.useContext)(v.A)||{};if(!R||!K||a.data.length===0)return null;const I=a.data[0],L=R(V.xAccessor(I)),z=K(V.yAccessor(I));if(typeof L!="number"||typeof z!="number")return null;const X=Number(l?.radius)||4;return C({key:`start-glyph-${a.label}`,index:i,datum:I,color:S,size:X,x:L,y:z,glyphStyle:l})},re=(a,i)=>{if(!a)return i?p.A:u.A;switch(a){case"smooth":return p.A;case"monotone":return c.G;case"linear":return u.A;default:return u.A}},ie=({tooltipData:a})=>{const i=a?.nearestDatum?.datum;if(!i)return null;const S=Object.entries(a?.datumByKey||{}).map(([l,{datum:C}])=>({key:l,value:C.value})).sort((l,C)=>C.value-l.value);return(0,r.jsxs)("div",{className:E["line-chart__tooltip"],children:[(0,r.jsx)("div",{className:E["line-chart__tooltip-date"],children:i.date?.toLocaleDateString()}),S.map(l=>(0,r.jsxs)("div",{className:E["line-chart__tooltip-row"],children:[(0,r.jsxs)("span",{className:E["line-chart__tooltip-label"],children:[l.key,":"]}),(0,r.jsx)("span",{className:E["line-chart__tooltip-value"],children:l.value})]},l.key))]})},de=a=>new Date(a).toLocaleDateString(void 0,{month:"short",day:"numeric"}),J=a=>a?.length?a.some(S=>S.data.some(l=>isNaN(l.value)||l.value===null||l.value===void 0||isNaN(l.date.getTime())))?"Invalid data":null:"No data available",ee=({data:a,width:i,height:S,className:l,margin:C,withTooltips:V=!0,showLegend:R=!1,legendOrientation:K="horizontal",legendShape:I="line",withGradientFill:L=!1,smoothing:z=!0,curveType:X,renderTooltip:ue=ie,withStartGlyphs:ce=!1,options:O={},onPointerDown:me=void 0,onPointerUp:s=void 0,onPointerMove:_=void 0,onPointerOut:Y=void 0})=>{const te=(0,x.RW)(),Z=(0,x.Ox)(a),he=(0,b.useId)(),F=(0,b.useMemo)(()=>a.map(d=>({...d,data:d.data.map(y=>({...y,date:y.date?y.date:M(y.dateString)})).sort((y,le)=>y.date.getTime()-le.date.getTime())})),[a]),$=(0,b.useMemo)(()=>({axis:{x:{orientation:"bottom",numTicks:Math.min(F[0]?.data.length,Math.ceil(i/ne)),tickFormat:de,...O?.axis?.x},y:{orientation:"left",numTicks:4,tickFormat:m.qe,...O?.axis?.y}},xScale:{type:"time",...O?.xScale},yScale:{type:"linear",nice:!0,zero:!1,...O?.yScale}}),[O,F,i]),be=(0,H.a)(S,$,F,Z),ve=J(F);if(ve)return(0,r.jsx)("div",{className:(0,j.A)("line-chart",E["line-chart"]),children:ve});const fe=F.map((d,y)=>({label:d.label,value:"",color:d?.options?.stroke??te.colors[y%te.colors.length],shapeStyle:d?.options?.legendShapeStyle})),_e={xAccessor:d=>d?.date,yAccessor:d=>d?.value};return(0,r.jsxs)("div",{className:(0,j.A)("line-chart",E["line-chart"],l),"data-testid":"line-chart",role:"img","aria-label":"line chart",children:[(0,r.jsxs)(t.A,{theme:Z,width:i,height:S,margin:{...be,...C},xScale:$.xScale,yScale:$.yScale,onPointerDown:me,onPointerUp:s,onPointerMove:_,onPointerOut:Y,pointerEventsDataKey:"nearest",children:[(0,r.jsx)(U.A,{columns:!1,numTicks:4}),(0,r.jsx)(T.A,{...$.axis.x}),(0,r.jsx)(T.A,{...$.axis.y}),F.map((d,y)=>{const le=d.options?.stroke??Z.colors[y%Z.colors.length],ye=d.options?.seriesLineStyle??te?.seriesLineStyles?.[y%te.seriesLineStyles.length]??{};return(0,r.jsxs)("g",{children:[ce&&(0,r.jsx)(q,{index:y,data:d,color:le,renderGlyph:oe,accessors:_e}),L&&(0,r.jsx)(o.A,{id:`area-gradient-${he}-${y+1}`,from:le,fromOpacity:.4,toOpacity:.1,to:Z.backgroundColor,...d.options?.gradient,"data-testid":"line-gradient"}),(0,r.jsx)(g.A,{dataKey:d?.label,data:d.data,..._e,fill:L?`url(#area-gradient-${he}-${y+1})`:"transparent",renderLine:!0,curve:re(X,z),lineProps:ye},d?.label)]},d?.label||y)}),V&&(0,r.jsx)(G.A,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,showSeriesGlyphs:!0,renderTooltip:ue})]}),R&&(0,r.jsx)(D.$,{items:fe,orientation:K,className:E["line-chart-legend"],shape:I})]})},ae=(0,w.F)(ee);try{linechart.displayName="linechart",linechart.__docgenInfo={description:"",displayName:"linechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:{value:"undefined"},description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"true"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"line"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},renderTooltip:{defaultValue:{value:`( {
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
}`},description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withGradientFill:{defaultValue:{value:"false"},description:"",name:"withGradientFill",required:!1,type:{name:"boolean"}},smoothing:{defaultValue:{value:"true"},description:"",name:"smoothing",required:!1,type:{name:"boolean"}},curveType:{defaultValue:null,description:"",name:"curveType",required:!1,type:{name:"enum",value:[{value:'"linear"'},{value:'"smooth"'},{value:'"monotone"'}]}},withStartGlyphs:{defaultValue:{value:"false"},description:"",name:"withStartGlyphs",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/line-chart.tsx#linechart"]={docgenInfo:linechart.__docgenInfo,name:"linechart",path:"../charts/src/components/line-chart/line-chart.tsx#linechart"})}catch{}},"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":(P,h,e)=>{e.d(h,{A:()=>H});var m=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),p=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),u=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),c=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),o=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),v=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),U=e("../charts/src/providers/theme/theme-provider.tsx"),T=e("../charts/src/components/legend/base-legend.tsx"),g=e("../charts/src/components/shared/with-responsive.tsx"),G=e("../charts/src/components/tooltip/base-tooltip.tsx"),j=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(j),x=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),D={};D.insert="head",D.singleton=!1;var W=b()(x.A,D);const f=x.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const B=w=>w.length?w.some(A=>A.percentage<0||A.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:w.reduce((A,N)=>A+N.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},M=({data:w,width:k=400,thickness:Q=.4,clockwise:A=!0,withTooltips:N=!1,showLegend:pe=!1,legendOrientation:E="horizontal",legendShape:r="circle",label:ne,note:se,className:oe})=>{const q=(0,U.RW)(),{tooltipOpen:re,tooltipLeft:ie,tooltipTop:de,tooltipData:J,hideTooltip:ee,showTooltip:ae}=(0,o.A)(),a=(0,t.useCallback)((s,_)=>{const Y=(0,m.A)(s);Y&&ae({tooltipData:_.data,tooltipLeft:Y.x,tooltipTop:Y.y-10})},[ae]),i=(0,t.useCallback)(()=>{ee()},[ee]),S=(0,t.useCallback)(s=>_=>{a(_,s)},[a]),{isValid:l,message:C}=B(w);if(!l)return(0,n.jsx)("div",{className:f["pie-semi-circle-chart"],children:(0,n.jsx)("svg",{width:k,height:k/2,"data-testid":"pie-chart-svg",children:(0,n.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:f.error,children:C})})});const V=k/2,R=.03,K=k-R*2,I=V-R,L=Math.min(K,I*2)/2,z=L*(1-Q+R),X=w.map((s,_)=>({...s,index:_})),ue=A?-Math.PI/2:Math.PI/2,ce=A?Math.PI/2:-Math.PI/2,O={value:s=>s.value,sort:(s,_)=>_.value-s.value,fill:s=>s.color||q.colors[s.index%q.colors.length]},me=w.map((s,_)=>({label:s.label,value:s.valueDisplay||s.value.toString(),color:O.fill({...s,index:_})}));return(0,n.jsxs)("div",{className:(0,v.A)("pie-semi-circle-chart",f["pie-semi-circle-chart"],oe),"data-testid":"pie-chart-container",children:[(0,n.jsx)("svg",{width:k,height:V,viewBox:`0 0 ${k} ${V}`,"data-testid":"pie-chart-svg",children:(0,n.jsxs)(p.A,{top:L,left:L,children:[(0,n.jsx)(u.A,{data:X,pieValue:O.value,outerRadius:L,innerRadius:z,cornerRadius:3,padAngle:R,startAngle:ue,endAngle:ce,pieSort:O.sort,children:s=>s.arcs.map(_=>(0,n.jsx)("g",{onMouseMove:S(_),onMouseLeave:i,children:(0,n.jsx)("path",{d:s.path(_)||"",fill:O.fill(_.data),"data-testid":"pie-segment"})},_.data.label))}),(0,n.jsxs)(p.A,{children:[(0,n.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:f.label,children:ne}),(0,n.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:f.note,children:se})]})]})}),N&&re&&J&&(0,n.jsx)(G.R,{data:{label:J.label,value:J.value,valueDisplay:J.valueDisplay},top:de||0,left:ie||0}),pe&&(0,n.jsx)(T.$,{items:me,orientation:E,className:f["pie-semi-circle-chart-legend"],shape:r})]})};M.displayName="PieSemiCircleChart";const H=(0,g.F)(M);try{M.displayName="PieSemiCircleChart",M.__docgenInfo={description:"",displayName:"PieSemiCircleChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:{value:"400"},description:"Width of the chart in pixels; height would be half of this value calculated automatically.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label text to display above the chart",name:"label",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<DataPointPercentage[], number>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},thickness:{defaultValue:{value:"0.4"},description:"Thickness of the pie chart. A value between 0 and 1",name:"thickness",required:!1,type:{name:"number"}},clockwise:{defaultValue:{value:"true"},description:`Direction of chart rendering
true for clockwise, false for counter-clockwise`,name:"clockwise",required:!1,type:{name:"boolean"}},note:{defaultValue:null,description:"Note text to display below the label",name:"note",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"]={docgenInfo:M.__docgenInfo,name:"PieSemiCircleChart",path:"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(P,h,e)=>{e.d(h,{R:()=>T});var m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(m),u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),c={};c.insert="head",c.singleton=!1;var o=p()(u.A,c);const v=u.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const U=({data:g})=>(0,t.jsxs)(t.Fragment,{children:[g?.label,": ",g?.valueDisplay||g?.value]}),T=({data:g,top:G,left:j,component:b=U,children:x,className:D})=>(0,t.jsx)("div",{className:v.tooltip,style:{top:G,left:j},role:"tooltip",children:x||g&&(0,t.jsx)(b,{data:g,className:D})});try{T.displayName="BaseTooltip",T.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:T.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss":(P,h,e)=>{e.d(h,{A:()=>v});var m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(m),u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(u),o=c()(p());o.push([P.id,".SVlAnnWw2ot8McusfLcw{position:relative}.SVlAnnWw2ot8McusfLcw svg{overflow:visible}.WG8wpgeFR6IoBhr41Y3z{background:#fff;padding:.5rem}.t5p9YWtrovlLQm8WlrGF{font-weight:700;padding-bottom:10px}.FPtDJMJR2GRu0df3iYy6{display:flex;align-items:center;padding:4px 0;justify-content:space-between}.xTJS98Xw7HFAGWFwzsgd{font-weight:500;padding-right:1rem}.visx-tooltip-glyph svg{width:10px;height:10px}",""]),o.locals={"line-chart":"SVlAnnWw2ot8McusfLcw","line-chart__tooltip":"WG8wpgeFR6IoBhr41Y3z","line-chart__tooltip-date":"t5p9YWtrovlLQm8WlrGF","line-chart__tooltip-row":"FPtDJMJR2GRu0df3iYy6","line-chart__tooltip-label":"xTJS98Xw7HFAGWFwzsgd"};const v=o},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":(P,h,e)=>{e.d(h,{A:()=>v});var m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(m),u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(u),o=c()(p());o.push([P.id,".xQEsZ9upN7GZLvXugRlk{position:relative;text-align:center}.u28WZeoUdhsFAVkB8ttn{margin-top:1rem}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0;font-size:14px}",""]),o.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk","pie-semi-circle-chart-legend":"u28WZeoUdhsFAVkB8ttn",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const v=o},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(P,h,e)=>{e.d(h,{A:()=>v});var m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(m),u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(u),o=c()(p());o.push([P.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),o.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const v=o}}]);
