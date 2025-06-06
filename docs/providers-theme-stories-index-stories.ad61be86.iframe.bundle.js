"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4848],{"../charts/src/providers/theme/stories/index.stories.tsx":(j,p,e)=>{e.r(p),e.d(p,{CustomTheme:()=>S,Default:()=>B,JetpackTheme:()=>b,WooTheme:()=>n,__namedExportsOrder:()=>C,default:()=>O});var d=e("../charts/src/providers/theme/theme-provider.tsx"),u=e("../charts/src/providers/theme/themes.ts"),r=e("../charts/src/components/line-chart/line-chart.tsx"),i=e("../charts/src/components/bar-chart/bar-chart.tsx"),o=e("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),_=e("../charts/src/components/bar-chart/stories/sample-data.ts"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),M=`import { Meta, StoryObj } from '@storybook/react';
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
`,A={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},JetpackTheme:{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},WooTheme:{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},CustomTheme:{startLoc:{col:27,line:153},endLoc:{col:1,line:188},startBody:{col:27,line:153},endBody:{col:1,line:188}}};const O={title:"JS Packages/Charts/Themes",component:d.NP,parameters:{storySource:{source:`import { ThemeProvider, jetpackTheme, wooTheme } from '../.';
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
};`,locationsMap:{default:{startLoc:{col:23,line:91},endLoc:{col:1,line:110},startBody:{col:23,line:91},endBody:{col:1,line:110}},"jetpack-theme":{startLoc:{col:28,line:111},endLoc:{col:1,line:131},startBody:{col:28,line:111},endBody:{col:1,line:131}},"woo-theme":{startLoc:{col:24,line:132},endLoc:{col:1,line:152},startBody:{col:24,line:132},endBody:{col:1,line:152}},"custom-theme":{startLoc:{col:27,line:153},endLoc:{col:1,line:188},startBody:{col:27,line:153},endBody:{col:1,line:188}}}},layout:"centered"}},g=[_.A[0],_.A[1],_.A[2]],D=[{group:"Line 1",label:"Line 1",data:[{date:new Date("2024-01-01"),value:10,label:"Jan 1"},{date:new Date("2024-01-02"),value:20,label:"Jan 2"},{date:new Date("2024-01-03"),value:15,label:"Jan 3"},{date:new Date("2024-01-04"),value:25,label:"Jan 4"},{date:new Date("2024-01-05"),value:30,label:"Jan 5"}]},{group:"Line 2",label:"Line 2",data:[{date:new Date("2024-01-01"),value:1,label:"Jan 1"},{date:new Date("2024-01-02"),value:2,label:"Jan 2"},{date:new Date("2024-01-03"),value:1.5,label:"Jan 3"},{date:new Date("2024-01-04"),value:2.5,label:"Jan 4"},{date:new Date("2024-01-05"),value:3,label:"Jan 5"}]}],P=[{label:"Windows",value:8e4,valueDisplay:"80K",percentage:2},{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:5},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:1}],y=({children:z})=>(0,a.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:z}),B={render:()=>(0,a.jsx)(d.NP,{children:(0,a.jsxs)(y,{children:[(0,a.jsx)(r.A,{data:D,width:400,height:300}),(0,a.jsx)(i.A,{data:g,width:400,height:300}),(0,a.jsx)(o.A,{data:P,width:400,label:"Pie Chart",note:"Default Theme"})]})})},b={render:()=>(0,a.jsx)(d.NP,{theme:u.QI,children:(0,a.jsxs)(y,{children:[(0,a.jsx)(r.A,{data:D,width:400,height:300}),(0,a.jsx)(i.A,{data:g,width:400,height:300}),(0,a.jsx)(o.A,{data:P,width:400,label:"Pie Chart",note:"Jetpack Theme"})]})})},n={render:()=>(0,a.jsx)(d.NP,{theme:u.pk,children:(0,a.jsxs)(y,{children:[(0,a.jsx)(r.A,{data:D,width:400,height:300}),(0,a.jsx)(i.A,{data:g,width:400,height:300}),(0,a.jsx)(o.A,{data:P,width:400,label:"Pie Chart",note:"Woo Theme"})]})})},S={render:()=>(0,a.jsx)(d.NP,{theme:{colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},children:(0,a.jsxs)(y,{children:[(0,a.jsx)(r.A,{data:D,width:400,height:300}),(0,a.jsx)(i.A,{data:g,width:400,height:300}),(0,a.jsx)(o.A,{data:P,width:400,label:"Pie Chart",note:"Custom Color Theme"})]})})},C=["Default","JetpackTheme","WooTheme","CustomTheme"];B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Default Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...B.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={jetpackTheme}>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Jetpack Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...b.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={wooTheme}>
            <GridComponent>
                <LineChart data={lineSampleData} width={400} height={300} />
                <BarChart data={sampleData} width={400} height={300} />
                <PieSemiCircleChart data={pieData} width={400} label="Pie Chart" note="Woo Theme" />
            </GridComponent>
        </ThemeProvider>
}`,...n.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}}},"../charts/src/components/bar-chart/stories/sample-data.ts":(j,p,e)=>{e.d(p,{A:()=>u});const u=[{group:"United States",label:"United States",data:[{label:"1896",value:20},{label:"1900",value:47},{label:"1904",value:239},{label:"1908",value:47},{label:"1912",value:63},{label:"1920",value:95},{label:"1924",value:99},{label:"1928",value:56},{label:"1932",value:103},{label:"1936",value:56},{label:"1948",value:84},{label:"1952",value:76},{label:"1956",value:74},{label:"1960",value:71},{label:"1964",value:90},{label:"1968",value:107},{label:"1972",value:94},{label:"1976",value:94},{label:"1980",value:0},{label:"1984",value:174},{label:"1988",value:94},{label:"1992",value:108},{label:"1996",value:101},{label:"2000",value:93},{label:"2004",value:101},{label:"2008",value:112},{label:"2012",value:104},{label:"2016",value:121},{label:"2020",value:113},{label:"2024",value:126}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:7},{label:"1900",value:30},{label:"1904",value:1},{label:"1908",value:146},{label:"1912",value:41},{label:"1920",value:43},{label:"1924",value:34},{label:"1928",value:20},{label:"1932",value:16},{label:"1936",value:14},{label:"1948",value:23},{label:"1952",value:11},{label:"1956",value:24},{label:"1960",value:20},{label:"1964",value:18},{label:"1968",value:13},{label:"1972",value:18},{label:"1976",value:13},{label:"1980",value:21},{label:"1984",value:37},{label:"1988",value:24},{label:"1992",value:20},{label:"1996",value:15},{label:"2000",value:28},{label:"2004",value:30},{label:"2008",value:47},{label:"2012",value:65},{label:"2016",value:67},{label:"2020",value:65},{label:"2024",value:60}]},{group:"Japan",label:"Japan",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:0},{label:"1908",value:0},{label:"1912",value:2},{label:"1920",value:0},{label:"1924",value:4},{label:"1928",value:5},{label:"1932",value:18},{label:"1936",value:20},{label:"1948",value:0},{label:"1952",value:9},{label:"1956",value:19},{label:"1960",value:18},{label:"1964",value:29},{label:"1968",value:25},{label:"1972",value:29},{label:"1976",value:25},{label:"1980",value:0},{label:"1984",value:32},{label:"1988",value:14},{label:"1992",value:22},{label:"1996",value:14},{label:"2000",value:18},{label:"2004",value:37},{label:"2008",value:25},{label:"2012",value:38},{label:"2016",value:41},{label:"2020",value:58},{label:"2024",value:45}]},{group:"China",label:"China",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:0},{label:"1908",value:0},{label:"1912",value:0},{label:"1920",value:0},{label:"1924",value:0},{label:"1928",value:0},{label:"1932",value:0},{label:"1936",value:0},{label:"1948",value:0},{label:"1952",value:0},{label:"1956",value:0},{label:"1960",value:0},{label:"1964",value:0},{label:"1968",value:0},{label:"1972",value:0},{label:"1976",value:0},{label:"1980",value:0},{label:"1984",value:32},{label:"1988",value:28},{label:"1992",value:54},{label:"1996",value:50},{label:"2000",value:59},{label:"2004",value:63},{label:"2008",value:100},{label:"2012",value:91},{label:"2016",value:70},{label:"2020",value:88},{label:"2024",value:91}]},{group:"France",label:"France",data:[{label:"1896",value:11},{label:"1900",value:101},{label:"1904",value:0},{label:"1908",value:19},{label:"1912",value:14},{label:"1920",value:41},{label:"1924",value:38},{label:"1928",value:21},{label:"1932",value:19},{label:"1936",value:19},{label:"1948",value:29},{label:"1952",value:18},{label:"1956",value:14},{label:"1960",value:5},{label:"1964",value:15},{label:"1968",value:15},{label:"1972",value:13},{label:"1976",value:9},{label:"1980",value:14},{label:"1984",value:28},{label:"1988",value:16},{label:"1992",value:29},{label:"1996",value:37},{label:"2000",value:38},{label:"2004",value:33},{label:"2008",value:43},{label:"2012",value:35},{label:"2016",value:42},{label:"2020",value:33},{label:"2024",value:55}]},{group:"Germany",label:"Germany",data:[{label:"1896",value:13},{label:"1900",value:8},{label:"1904",value:4},{label:"1908",value:22},{label:"1912",value:25},{label:"1928",value:31},{label:"1932",value:20},{label:"1936",value:89},{label:"1952",value:24},{label:"1956",value:64},{label:"1960",value:87},{label:"1964",value:96},{label:"1968",value:91},{label:"1972",value:133},{label:"1976",value:125},{label:"1980",value:126},{label:"1984",value:59},{label:"1988",value:142},{label:"1992",value:82},{label:"1996",value:65},{label:"2000",value:56},{label:"2004",value:48},{label:"2008",value:41},{label:"2012",value:44},{label:"2016",value:42},{label:"2020",value:37},{label:"2024",value:40}]},{group:"Australia",label:"Australia",data:[{label:"1896",value:0},{label:"1900",value:2},{label:"1904",value:0},{label:"1908",value:15},{label:"1912",value:7},{label:"1920",value:3},{label:"1924",value:6},{label:"1928",value:4},{label:"1932",value:5},{label:"1936",value:3},{label:"1948",value:13},{label:"1952",value:11},{label:"1956",value:35},{label:"1960",value:22},{label:"1964",value:18},{label:"1968",value:17},{label:"1972",value:8},{label:"1976",value:5},{label:"1980",value:9},{label:"1984",value:24},{label:"1988",value:14},{label:"1992",value:27},{label:"1996",value:41},{label:"2000",value:58},{label:"2004",value:49},{label:"2008",value:46},{label:"2012",value:35},{label:"2016",value:29},{label:"2020",value:46},{label:"2024",value:42}]},{group:"Poland",label:"Poland",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:0},{label:"1908",value:0},{label:"1912",value:0},{label:"1920",value:0},{label:"1924",value:0},{label:"1928",value:5},{label:"1932",value:7},{label:"1936",value:6},{label:"1948",value:0},{label:"1952",value:4},{label:"1956",value:9},{label:"1960",value:21},{label:"1964",value:23},{label:"1968",value:18},{label:"1972",value:21},{label:"1976",value:26},{label:"1980",value:32},{label:"1984",value:0},{label:"1988",value:16},{label:"1992",value:19},{label:"1996",value:17},{label:"2000",value:14},{label:"2004",value:10},{label:"2008",value:10},{label:"2012",value:10},{label:"2016",value:11},{label:"2020",value:14},{label:"2024",value:15}]},{group:"Jamaica",label:"Jamaica",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:0},{label:"1908",value:0},{label:"1912",value:0},{label:"1920",value:0},{label:"1924",value:0},{label:"1928",value:0},{label:"1932",value:0},{label:"1936",value:0},{label:"1948",value:3},{label:"1952",value:2},{label:"1956",value:0},{label:"1960",value:0},{label:"1964",value:2},{label:"1968",value:1},{label:"1972",value:1},{label:"1976",value:2},{label:"1980",value:3},{label:"1984",value:3},{label:"1988",value:2},{label:"1992",value:4},{label:"1996",value:6},{label:"2000",value:9},{label:"2004",value:5},{label:"2008",value:11},{label:"2012",value:12},{label:"2016",value:11},{label:"2020",value:9},{label:"2024",value:10}]}]},"../charts/src/components/line-chart/line-chart.tsx":(j,p,e)=>{e.d(p,{A:()=>ae});var d=e("../number-formatters/src/index.ts"),u=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/catmullRom.js"),r=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/linear.js"),i=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/monotone.js"),o=e("../../../node_modules/.pnpm/@visx+gradient@3.12.0_react@18.3.1/node_modules/@visx/gradient/esm/gradients/LinearGradient.js"),_=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),a=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),M=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),A=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/AreaSeries.js"),f=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),O=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),D=e("../charts/src/providers/theme/theme-provider.tsx"),P=e("../charts/src/components/legend/base-legend.tsx"),y=e("../charts/src/components/shared/use-chart-margin.tsx"),B=e("../charts/src/components/shared/with-responsive.tsx"),b=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(b),S=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss"),C={};C.insert="head",C.singleton=!1;var z=n()(S.A,C);const c=S.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const X=100,E=(m,x)=>{if(!m)return x?u.A:r.A;switch(m){case"smooth":return u.A;case"monotone":return i.G;case"linear":return r.A;default:return r.A}},J=({tooltipData:m})=>{const x=m?.nearestDatum?.datum;if(!x)return null;const L=Object.entries(m?.datumByKey||{}).map(([h,{datum:R}])=>({key:h,value:R.value})).sort((h,R)=>R.value-h.value);return(0,t.jsxs)("div",{className:c["line-chart__tooltip"],children:[(0,t.jsx)("div",{className:c["line-chart__tooltip-date"],children:x.date?.toLocaleDateString()}),L.map(h=>(0,t.jsxs)("div",{className:c["line-chart__tooltip-row"],children:[(0,t.jsxs)("span",{className:c["line-chart__tooltip-label"],children:[h.key,":"]}),(0,t.jsx)("span",{className:c["line-chart__tooltip-value"],children:h.value})]},h.key))]})},$=m=>new Date(m).toLocaleDateString(void 0,{month:"short",day:"numeric"}),q=m=>m?.length?m.some(L=>L.data.some(h=>isNaN(h.value)||h.value===null||h.value===void 0||isNaN(h.date.getTime())))?"Invalid data":null:"No data available",ee=({data:m,width:x,height:L,className:h,margin:R,withTooltips:te=!0,showLegend:N=!1,legendOrientation:Y="horizontal",legendShape:H="line",withGradientFill:K=!1,smoothing:le=!0,curveType:ne="linear",renderTooltip:se=J,options:W={},onPointerDown:F=void 0,onPointerUp:G=void 0,onPointerMove:oe=void 0,onPointerOut:re=void 0})=>{const T=(0,D.RW)(),V=(0,D.Ox)(m),Z=(0,g.useId)(),k=(0,g.useMemo)(()=>m.map(l=>({...l,data:l.data.sort((w,ie)=>w.date.getTime()-ie.date.getTime())})),[m]),I=(0,g.useMemo)(()=>({axis:{x:{orientation:"bottom",numTicks:Math.min(k[0]?.data.length,Math.ceil(x/X)),tickFormat:$,...W?.axis?.x},y:{orientation:"left",numTicks:4,tickFormat:d.qe,...W?.axis?.y}},xScale:{type:"time",...W?.xScale},yScale:{type:"linear",nice:!0,zero:!1,...W?.yScale}}),[W,k,x]),U=(0,y.a)(L,I,k,V),Q=q(k);if(Q)return(0,t.jsx)("div",{className:(0,O.A)("line-chart",c["line-chart"]),children:Q});const s=k.map((l,w)=>({label:l.label,value:"",color:l?.options?.stroke??T.colors[w%T.colors.length],shapeStyle:l?.options?.legendShapeStyle??T.legendShapeStyles?.[w]??{}})),v={xAccessor:l=>l?.date,yAccessor:l=>l?.value};return(0,t.jsxs)("div",{className:(0,O.A)("line-chart",c["line-chart"],h),"data-testid":"line-chart",role:"img","aria-label":"line chart",children:[(0,t.jsxs)(_.A,{theme:V,width:x,height:L,margin:{...U,...R},xScale:I.xScale,yScale:I.yScale,onPointerDown:F,onPointerUp:G,onPointerMove:oe,onPointerOut:re,pointerEventsDataKey:"nearest",children:[(0,t.jsx)(a.A,{columns:!1,numTicks:4}),(0,t.jsx)(M.A,{...I.axis.x}),(0,t.jsx)(M.A,{...I.axis.y}),k.map((l,w)=>{const ie=l.options?.stroke??V.colors[w%V.colors.length],de=l.options?.seriesLineStyle??T?.seriesLineStyles?.[w%T.seriesLineStyles.length]??{};return(0,t.jsxs)("g",{children:[K&&(0,t.jsx)(o.A,{id:`area-gradient-${Z}-${w+1}`,from:ie,fromOpacity:.4,toOpacity:.1,to:V.backgroundColor,...l.options?.gradient,"data-testid":"line-gradient"}),(0,t.jsx)(A.A,{dataKey:l?.label,data:l.data,...v,fill:K?`url(#area-gradient-${Z}-${w+1})`:"transparent",renderLine:!0,curve:E(ne,le),lineProps:de},l?.label)]},l?.label||w)}),te&&(0,t.jsx)(f.A,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,showSeriesGlyphs:!0,renderTooltip:se})]}),N&&(0,t.jsx)(P.$,{items:s,orientation:Y,className:c["line-chart-legend"],shape:H})]})},ae=(0,B.F)(ee);try{linechart.displayName="linechart",linechart.__docgenInfo={description:"",displayName:"linechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:{value:"undefined"},description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"true"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"line"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},renderTooltip:{defaultValue:{value:`( {
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
}`},description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withGradientFill:{defaultValue:{value:"false"},description:"",name:"withGradientFill",required:!1,type:{name:"boolean"}},smoothing:{defaultValue:{value:"true"},description:"",name:"smoothing",required:!1,type:{name:"boolean"}},curveType:{defaultValue:{value:"linear"},description:"",name:"curveType",required:!1,type:{name:"enum",value:[{value:'"linear"'},{value:'"smooth"'},{value:'"monotone"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/line-chart.tsx#linechart"]={docgenInfo:linechart.__docgenInfo,name:"linechart",path:"../charts/src/components/line-chart/line-chart.tsx#linechart"})}catch{}},"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":(j,p,e)=>{e.d(p,{A:()=>z});var d=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),u=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),r=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),i=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),o=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),_=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),M=e("../charts/src/providers/theme/theme-provider.tsx"),A=e("../charts/src/components/legend/base-legend.tsx"),f=e("../charts/src/components/shared/with-responsive.tsx"),O=e("../charts/src/components/tooltip/base-tooltip.tsx"),g=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=e.n(g),P=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),y={};y.insert="head",y.singleton=!1;var B=D()(P.A,y);const b=P.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const S=c=>c.length?c.some(E=>E.percentage<0||E.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:c.reduce((E,J)=>E+J.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},C=({data:c,width:t=400,thickness:X=.4,clockwise:E=!0,withTooltips:J=!1,showLegend:$=!1,legendOrientation:q="horizontal",legendShape:ee="circle",label:ae,note:m,className:x})=>{const L=(0,M.RW)(),{tooltipOpen:h,tooltipLeft:R,tooltipTop:te,tooltipData:N,hideTooltip:Y,showTooltip:H}=(0,o.A)(),K=(0,a.useCallback)((s,v)=>{const l=(0,d.A)(s);l&&H({tooltipData:v.data,tooltipLeft:l.x,tooltipTop:l.y-10})},[H]),le=(0,a.useCallback)(()=>{Y()},[Y]),ne=(0,a.useCallback)(s=>v=>{K(v,s)},[K]),{isValid:se,message:W}=S(c);if(!se)return(0,n.jsx)("div",{className:b["pie-semi-circle-chart"],children:(0,n.jsx)("svg",{width:t,height:t/2,"data-testid":"pie-chart-svg",children:(0,n.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:b.error,children:W})})});const F=t/2,G=.03,oe=t-G*2,re=F-G,T=Math.min(oe,re*2)/2,V=T*(1-X+G),Z=c.map((s,v)=>({...s,index:v})),k=E?-Math.PI/2:Math.PI/2,I=E?Math.PI/2:-Math.PI/2,U={value:s=>s.value,sort:(s,v)=>v.value-s.value,fill:s=>s.color||L.colors[s.index%L.colors.length]},Q=c.map((s,v)=>({label:s.label,value:s.valueDisplay||s.value.toString(),color:U.fill({...s,index:v})}));return(0,n.jsxs)("div",{className:(0,_.A)("pie-semi-circle-chart",b["pie-semi-circle-chart"],x),"data-testid":"pie-chart-container",children:[(0,n.jsx)("svg",{width:t,height:F,viewBox:`0 0 ${t} ${F}`,"data-testid":"pie-chart-svg",children:(0,n.jsxs)(u.A,{top:T,left:T,children:[(0,n.jsx)(r.A,{data:Z,pieValue:U.value,outerRadius:T,innerRadius:V,cornerRadius:3,padAngle:G,startAngle:k,endAngle:I,pieSort:U.sort,children:s=>s.arcs.map(v=>(0,n.jsx)("g",{onMouseMove:ne(v),onMouseLeave:le,children:(0,n.jsx)("path",{d:s.path(v)||"",fill:U.fill(v.data),"data-testid":"pie-segment"})},v.data.label))}),(0,n.jsxs)(u.A,{children:[(0,n.jsx)(i.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:b.label,children:ae}),(0,n.jsx)(i.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:b.note,children:m})]})]})}),J&&h&&N&&(0,n.jsx)(O.R,{data:{label:N.label,value:N.value,valueDisplay:N.valueDisplay},top:te||0,left:R||0}),$&&(0,n.jsx)(A.$,{items:Q,orientation:q,className:b["pie-semi-circle-chart-legend"],shape:ee})]})};C.displayName="PieSemiCircleChart";const z=(0,f.F)(C);try{C.displayName="PieSemiCircleChart",C.__docgenInfo={description:"",displayName:"PieSemiCircleChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:{value:"400"},description:"Width of the chart in pixels; height would be half of this value calculated automatically.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label text to display above the chart",name:"label",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<DataPointPercentage[], number>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},thickness:{defaultValue:{value:"0.4"},description:"Thickness of the pie chart. A value between 0 and 1",name:"thickness",required:!1,type:{name:"number"}},clockwise:{defaultValue:{value:"true"},description:`Direction of chart rendering
true for clockwise, false for counter-clockwise`,name:"clockwise",required:!1,type:{name:"boolean"}},note:{defaultValue:null,description:"Note text to display below the label",name:"note",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"]={docgenInfo:C.__docgenInfo,name:"PieSemiCircleChart",path:"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(j,p,e)=>{e.d(p,{R:()=>A});var d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=e.n(d),r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),i={};i.insert="head",i.singleton=!1;var o=u()(r.A,i);const _=r.A.locals||{};var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const M=({data:f})=>(0,a.jsxs)(a.Fragment,{children:[f?.label,": ",f?.valueDisplay||f?.value]}),A=({data:f,top:O,left:g,component:D=M,children:P,className:y})=>(0,a.jsx)("div",{className:_.tooltip,style:{top:O,left:g},role:"tooltip",children:P||f&&(0,a.jsx)(D,{data:f,className:y})});try{A.displayName="BaseTooltip",A.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:A.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss":(j,p,e)=>{e.d(p,{A:()=>_});var d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(d),r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(r),o=i()(u());o.push([j.id,".SVlAnnWw2ot8McusfLcw{position:relative}.WG8wpgeFR6IoBhr41Y3z{background:#fff;padding:.5rem}.t5p9YWtrovlLQm8WlrGF{font-weight:700;padding-bottom:10px}.FPtDJMJR2GRu0df3iYy6{display:flex;align-items:center;padding:4px 0;justify-content:space-between}.xTJS98Xw7HFAGWFwzsgd{font-weight:500;padding-right:1rem}.visx-tooltip-glyph svg{width:10px;height:10px}",""]),o.locals={"line-chart":"SVlAnnWw2ot8McusfLcw","line-chart__tooltip":"WG8wpgeFR6IoBhr41Y3z","line-chart__tooltip-date":"t5p9YWtrovlLQm8WlrGF","line-chart__tooltip-row":"FPtDJMJR2GRu0df3iYy6","line-chart__tooltip-label":"xTJS98Xw7HFAGWFwzsgd"};const _=o},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":(j,p,e)=>{e.d(p,{A:()=>_});var d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(d),r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(r),o=i()(u());o.push([j.id,".xQEsZ9upN7GZLvXugRlk{position:relative;text-align:center}.u28WZeoUdhsFAVkB8ttn{margin-top:1rem}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0;font-size:14px}",""]),o.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk","pie-semi-circle-chart-legend":"u28WZeoUdhsFAVkB8ttn",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const _=o},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(j,p,e)=>{e.d(p,{A:()=>_});var d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(d),r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(r),o=i()(u());o.push([j.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),o.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const _=o}}]);
