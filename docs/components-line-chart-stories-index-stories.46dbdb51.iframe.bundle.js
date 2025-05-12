"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4722],{"../charts/src/components/line-chart/stories/index.stories.tsx":(C,d,e)=>{e.r(d),e.d(d,{CurveTypes:()=>O,CustomDimensions:()=>S,CustomTooltips:()=>l,Default:()=>n,ErrorStates:()=>W,FixedDimensions:()=>m,GridientFilled:()=>g,SingleSeries:()=>c,WithLegend:()=>j,WithPointerEvents:()=>F,WithVerticalLegend:()=>_,WithoutSmoothing:()=>w,WithoutTooltip:()=>b,__namedExportsOrder:()=>N,default:()=>p});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../charts/src/components/line-chart/line-chart.tsx");const i=[{label:"London",data:[{date:new Date("2022-01-01"),value:7.8},{date:new Date("2022-01-08"),value:7.2},{date:new Date("2022-01-15"),value:6.9},{date:new Date("2022-01-22"),value:6.5},{date:new Date("2022-01-29"),value:7.1},{date:new Date("2022-02-05"),value:8.3},{date:new Date("2022-02-12"),value:8.9},{date:new Date("2022-02-19"),value:9.2},{date:new Date("2022-02-26"),value:8.7},{date:new Date("2022-03-05"),value:9.4},{date:new Date("2022-03-12"),value:10.2},{date:new Date("2022-03-19"),value:11.5},{date:new Date("2022-03-26"),value:12.3},{date:new Date("2022-04-02"),value:13.1},{date:new Date("2022-04-09"),value:13.8},{date:new Date("2022-04-16"),value:14.6},{date:new Date("2022-04-23"),value:15.2},{date:new Date("2022-04-30"),value:15.9},{date:new Date("2022-05-07"),value:16.7},{date:new Date("2022-05-14"),value:17.4},{date:new Date("2022-05-21"),value:18.2},{date:new Date("2022-05-28"),value:18.9},{date:new Date("2022-06-04"),value:19.7},{date:new Date("2022-06-11"),value:20.5},{date:new Date("2022-06-18"),value:21.3},{date:new Date("2022-06-25"),value:22.1},{date:new Date("2022-07-02"),value:22.8},{date:new Date("2022-07-09"),value:23.6},{date:new Date("2022-07-16"),value:24.4},{date:new Date("2022-07-23"),value:25.2},{date:new Date("2022-07-30"),value:24.8},{date:new Date("2022-08-06"),value:24.1},{date:new Date("2022-08-13"),value:23.5},{date:new Date("2022-08-20"),value:22.8},{date:new Date("2022-08-27"),value:21.9},{date:new Date("2022-09-03"),value:20.7},{date:new Date("2022-09-10"),value:19.5},{date:new Date("2022-09-17"),value:18.3},{date:new Date("2022-09-24"),value:17.1},{date:new Date("2022-10-01"),value:16.2},{date:new Date("2022-10-08"),value:15.1},{date:new Date("2022-10-15"),value:14.2},{date:new Date("2022-10-22"),value:13.1},{date:new Date("2022-10-29"),value:12.2},{date:new Date("2022-11-05"),value:11.1},{date:new Date("2022-11-12"),value:10.2},{date:new Date("2022-11-19"),value:9.1},{date:new Date("2022-11-26"),value:8.2},{date:new Date("2022-12-03"),value:7.1},{date:new Date("2022-12-10"),value:6.2},{date:new Date("2022-12-17"),value:5.5},{date:new Date("2022-12-24"),value:5.2},{date:new Date("2022-12-31"),value:6.8},{date:new Date("2023-01-01"),value:8.2},{date:new Date("2023-01-08"),value:7.9},{date:new Date("2023-01-15"),value:5.1},{date:new Date("2023-01-22"),value:4.8},{date:new Date("2023-01-29"),value:6.3},{date:new Date("2023-02-05"),value:7.2},{date:new Date("2023-02-12"),value:9.4},{date:new Date("2023-02-19"),value:8.7},{date:new Date("2023-02-26"),value:7.1},{date:new Date("2023-03-05"),value:8.3},{date:new Date("2023-03-12"),value:9.5},{date:new Date("2023-03-19"),value:11.2},{date:new Date("2023-03-26"),value:12.8},{date:new Date("2023-04-02"),value:13.4},{date:new Date("2023-04-09"),value:14.1},{date:new Date("2023-04-16"),value:15.3},{date:new Date("2023-04-23"),value:14.8},{date:new Date("2023-04-30"),value:15.7},{date:new Date("2023-05-07"),value:16.9},{date:new Date("2023-05-14"),value:17.2},{date:new Date("2023-05-21"),value:18.4},{date:new Date("2023-05-28"),value:19.1},{date:new Date("2023-06-04"),value:20.3},{date:new Date("2023-06-11"),value:21.5},{date:new Date("2023-06-18"),value:22.8},{date:new Date("2023-06-25"),value:21.9},{date:new Date("2023-07-02"),value:23.1},{date:new Date("2023-07-09"),value:22.7},{date:new Date("2023-07-16"),value:24.2},{date:new Date("2023-07-23"),value:23.8},{date:new Date("2023-07-30"),value:22.9},{date:new Date("2023-08-06"),value:23.4},{date:new Date("2023-08-13"),value:22.8},{date:new Date("2023-08-20"),value:21.9},{date:new Date("2023-08-27"),value:20.7},{date:new Date("2023-09-03"),value:19.8},{date:new Date("2023-09-10"),value:18.9},{date:new Date("2023-09-17"),value:17.6},{date:new Date("2023-09-24"),value:16.8},{date:new Date("2023-10-01"),value:15.9},{date:new Date("2023-10-08"),value:14.7},{date:new Date("2023-10-15"),value:13.8},{date:new Date("2023-10-22"),value:12.9},{date:new Date("2023-10-29"),value:11.7},{date:new Date("2023-11-05"),value:10.8},{date:new Date("2023-11-12"),value:9.9},{date:new Date("2023-11-19"),value:8.7},{date:new Date("2023-11-26"),value:7.8},{date:new Date("2023-12-03"),value:6.9},{date:new Date("2023-12-10"),value:5.8},{date:new Date("2023-12-17"),value:4.9},{date:new Date("2023-12-24"),value:5.7},{date:new Date("2023-12-31"),value:6.2}]},{label:"Canberra",data:[{date:new Date("2022-01-01"),value:27.9},{date:new Date("2022-01-08"),value:28.4},{date:new Date("2022-01-15"),value:29.2},{date:new Date("2022-01-22"),value:28.9},{date:new Date("2022-01-29"),value:28.1},{date:new Date("2022-02-05"),value:27.3},{date:new Date("2022-02-12"),value:26.5},{date:new Date("2022-02-19"),value:25.4},{date:new Date("2022-02-26"),value:24.2},{date:new Date("2022-03-05"),value:23.1},{date:new Date("2022-03-12"),value:22.3},{date:new Date("2022-03-19"),value:21.2},{date:new Date("2022-03-26"),value:20.1},{date:new Date("2022-04-02"),value:19.2},{date:new Date("2022-04-09"),value:18.1},{date:new Date("2022-04-16"),value:16.9},{date:new Date("2022-04-23"),value:15.8},{date:new Date("2022-04-30"),value:14.9},{date:new Date("2022-05-07"),value:13.8},{date:new Date("2022-05-14"),value:12.9},{date:new Date("2022-05-21"),value:11.8},{date:new Date("2022-05-28"),value:10.9},{date:new Date("2022-06-04"),value:9.8},{date:new Date("2022-06-11"),value:8.9},{date:new Date("2022-06-18"),value:8.1},{date:new Date("2022-06-25"),value:7.5},{date:new Date("2022-07-02"),value:6.9},{date:new Date("2022-07-09"),value:6.7},{date:new Date("2022-07-16"),value:7.1},{date:new Date("2022-07-23"),value:7.9},{date:new Date("2022-07-30"),value:8.8},{date:new Date("2022-08-06"),value:9.9},{date:new Date("2022-08-13"),value:11.2},{date:new Date("2022-08-20"),value:12.4},{date:new Date("2022-08-27"),value:13.6},{date:new Date("2022-09-03"),value:14.8},{date:new Date("2022-09-10"),value:16.1},{date:new Date("2022-09-17"),value:17.3},{date:new Date("2022-09-24"),value:18.5},{date:new Date("2022-10-01"),value:19.8},{date:new Date("2022-10-08"),value:21.1},{date:new Date("2022-10-15"),value:22.3},{date:new Date("2022-10-22"),value:23.5},{date:new Date("2022-10-29"),value:24.6},{date:new Date("2022-11-05"),value:25.7},{date:new Date("2022-11-12"),value:26.5},{date:new Date("2022-11-19"),value:27.4},{date:new Date("2022-11-26"),value:28.2},{date:new Date("2022-12-03"),value:28.9},{date:new Date("2022-12-10"),value:29.5},{date:new Date("2022-12-17"),value:29.1},{date:new Date("2022-12-24"),value:28.2},{date:new Date("2022-12-31"),value:28.7},{date:new Date("2023-01-01"),value:28.5},{date:new Date("2023-01-08"),value:29.2},{date:new Date("2023-01-15"),value:30.1},{date:new Date("2023-01-22"),value:29.8},{date:new Date("2023-01-29"),value:28.9},{date:new Date("2023-02-05"),value:27.8},{date:new Date("2023-02-12"),value:26.9},{date:new Date("2023-02-19"),value:25.7},{date:new Date("2023-02-26"),value:24.8},{date:new Date("2023-03-05"),value:23.9},{date:new Date("2023-03-12"),value:22.8},{date:new Date("2023-03-19"),value:21.7},{date:new Date("2023-03-26"),value:20.8},{date:new Date("2023-04-02"),value:19.6},{date:new Date("2023-04-09"),value:18.4},{date:new Date("2023-04-16"),value:17.2},{date:new Date("2023-04-23"),value:16.1},{date:new Date("2023-04-30"),value:15.3},{date:new Date("2023-05-07"),value:14.2},{date:new Date("2023-05-14"),value:13.1},{date:new Date("2023-05-21"),value:12.3},{date:new Date("2023-05-28"),value:11.4},{date:new Date("2023-06-04"),value:10.2},{date:new Date("2023-06-11"),value:9.1},{date:new Date("2023-06-18"),value:8.3},{date:new Date("2023-06-25"),value:7.8},{date:new Date("2023-07-02"),value:7.1},{date:new Date("2023-07-09"),value:6.9},{date:new Date("2023-07-16"),value:7.2},{date:new Date("2023-07-23"),value:8.1},{date:new Date("2023-07-30"),value:9.3},{date:new Date("2023-08-06"),value:10.4},{date:new Date("2023-08-13"),value:11.6},{date:new Date("2023-08-20"),value:12.8},{date:new Date("2023-08-27"),value:13.9},{date:new Date("2023-09-03"),value:15.2},{date:new Date("2023-09-10"),value:16.4},{date:new Date("2023-09-17"),value:17.6},{date:new Date("2023-09-24"),value:18.9},{date:new Date("2023-10-01"),value:20.1},{date:new Date("2023-10-08"),value:21.3},{date:new Date("2023-10-15"),value:22.5},{date:new Date("2023-10-22"),value:23.7},{date:new Date("2023-10-29"),value:24.8},{date:new Date("2023-11-05"),value:25.9},{date:new Date("2023-11-12"),value:26.7},{date:new Date("2023-11-19"),value:27.8},{date:new Date("2023-11-26"),value:28.6},{date:new Date("2023-12-03"),value:29.4},{date:new Date("2023-12-10"),value:30.2},{date:new Date("2023-12-17"),value:29.8},{date:new Date("2023-12-24"),value:28.9},{date:new Date("2023-12-31"),value:29.3}]},{label:"Mars",data:[{date:new Date("2022-01-01"),value:-62},{date:new Date("2022-01-08"),value:-63},{date:new Date("2022-01-15"),value:-64},{date:new Date("2022-01-22"),value:-62},{date:new Date("2022-01-29"),value:-61},{date:new Date("2022-02-05"),value:-59},{date:new Date("2022-02-12"),value:-56},{date:new Date("2022-02-19"),value:-53},{date:new Date("2022-02-26"),value:-50},{date:new Date("2022-03-05"),value:-47},{date:new Date("2022-03-12"),value:-44},{date:new Date("2022-03-19"),value:-41},{date:new Date("2022-03-26"),value:-37},{date:new Date("2022-04-02"),value:-34},{date:new Date("2022-04-09"),value:-31},{date:new Date("2022-04-16"),value:-27},{date:new Date("2022-04-23"),value:-24},{date:new Date("2022-04-30"),value:-21},{date:new Date("2022-05-07"),value:-17},{date:new Date("2022-05-14"),value:-14},{date:new Date("2022-05-21"),value:-11},{date:new Date("2022-05-28"),value:-7},{date:new Date("2022-06-04"),value:-4},{date:new Date("2022-06-11"),value:-1},{date:new Date("2022-06-18"),value:1},{date:new Date("2022-06-25"),value:3},{date:new Date("2022-07-02"),value:6},{date:new Date("2022-07-09"),value:9},{date:new Date("2022-07-16"),value:11},{date:new Date("2022-07-23"),value:13},{date:new Date("2022-07-30"),value:16},{date:new Date("2022-08-06"),value:18},{date:new Date("2022-08-13"),value:21},{date:new Date("2022-08-20"),value:23},{date:new Date("2022-08-27"),value:21},{date:new Date("2022-09-03"),value:19},{date:new Date("2022-09-10"),value:16},{date:new Date("2022-09-17"),value:13},{date:new Date("2022-09-24"),value:9},{date:new Date("2022-10-01"),value:6},{date:new Date("2022-10-08"),value:3},{date:new Date("2022-10-15"),value:-1},{date:new Date("2022-10-22"),value:-4},{date:new Date("2022-10-29"),value:-7},{date:new Date("2022-11-05"),value:-11},{date:new Date("2022-11-12"),value:-14},{date:new Date("2022-11-19"),value:-17},{date:new Date("2022-11-26"),value:-21},{date:new Date("2022-12-03"),value:-24},{date:new Date("2022-12-10"),value:-27},{date:new Date("2022-12-17"),value:-31},{date:new Date("2022-12-24"),value:-36},{date:new Date("2022-12-31"),value:-37},{date:new Date("2023-01-01"),value:-63},{date:new Date("2023-01-08"),value:-64},{date:new Date("2023-01-15"),value:-65},{date:new Date("2023-01-22"),value:-63},{date:new Date("2023-01-29"),value:-62},{date:new Date("2023-02-05"),value:-60},{date:new Date("2023-02-12"),value:-58},{date:new Date("2023-02-19"),value:-55},{date:new Date("2023-02-26"),value:-52},{date:new Date("2023-03-05"),value:-48},{date:new Date("2023-03-12"),value:-45},{date:new Date("2023-03-19"),value:-42},{date:new Date("2023-03-26"),value:-38},{date:new Date("2023-04-02"),value:-35},{date:new Date("2023-04-09"),value:-32},{date:new Date("2023-04-16"),value:-28},{date:new Date("2023-04-23"),value:-25},{date:new Date("2023-04-30"),value:-22},{date:new Date("2023-05-07"),value:-18},{date:new Date("2023-05-14"),value:-15},{date:new Date("2023-05-21"),value:-12},{date:new Date("2023-05-28"),value:-8},{date:new Date("2023-06-04"),value:-5},{date:new Date("2023-06-11"),value:-2},{date:new Date("2023-06-18"),value:0},{date:new Date("2023-06-25"),value:2},{date:new Date("2023-07-02"),value:5},{date:new Date("2023-07-09"),value:8},{date:new Date("2023-07-16"),value:10},{date:new Date("2023-07-23"),value:12},{date:new Date("2023-07-30"),value:15},{date:new Date("2023-08-06"),value:17},{date:new Date("2023-08-13"),value:20},{date:new Date("2023-08-20"),value:22},{date:new Date("2023-08-27"),value:20},{date:new Date("2023-09-03"),value:18},{date:new Date("2023-09-10"),value:15},{date:new Date("2023-09-17"),value:12},{date:new Date("2023-09-24"),value:8},{date:new Date("2023-10-01"),value:5},{date:new Date("2023-10-08"),value:2},{date:new Date("2023-10-15"),value:-2},{date:new Date("2023-10-22"),value:-5},{date:new Date("2023-10-29"),value:-8},{date:new Date("2023-11-05"),value:-12},{date:new Date("2023-11-12"),value:-15},{date:new Date("2023-11-19"),value:-18},{date:new Date("2023-11-26"),value:-22},{date:new Date("2023-12-03"),value:-25},{date:new Date("2023-12-10"),value:-28},{date:new Date("2023-12-17"),value:-32},{date:new Date("2023-12-24"),value:-35},{date:new Date("2023-12-31"),value:-38}]}];var s=e("../charts/src/components/line-chart/stories/site-traffic-sample.ts"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),x=`import React from 'react';
import LineChart from '../line-chart';
import sampleData from './sample-data';
import webTrafficData from './site-traffic-sample';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

const meta: Meta< typeof LineChart > = {
	title: 'JS Packages/Charts/Types/Line Chart',
	component: LineChart,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		Story => (
			<div
				style={ {
					resize: 'both',
					overflow: 'auto',
					padding: '2rem',
					width: '800px',
					maxWidth: '1200px',
					border: '1px dashed #ccc',
					display: 'inline-block',
				} }
			>
				<Story />
			</div>
		),
	],
};

export default meta;

const Template: StoryFn< typeof LineChart > = args => <LineChart { ...args } />;

// Default story with multiple series
export const Default: StoryObj< typeof LineChart > = Template.bind( {} );
Default.args = {
	data: sampleData,
	showLegend: false,
	legendOrientation: 'horizontal',
	withGradientFill: false,
	smoothing: true,
	options: {
		axis: {
			x: {
				orientation: 'bottom',
			},
			y: {
				orientation: 'left',
			},
		},
	},
};

// Story with single data series
export const SingleSeries: StoryObj< typeof LineChart > = Template.bind( {} );
SingleSeries.args = {
	data: [ sampleData[ 0 ] ], // Only London temperature data
};

// Story without tooltip
export const WithoutTooltip: StoryObj< typeof LineChart > = Template.bind( {} );
WithoutTooltip.args = {
	...Default.args,
	withTooltips: false,
};

// Story with custom dimensions
export const CustomDimensions: StoryObj< typeof LineChart > = Template.bind( {} );
CustomDimensions.args = {
	width: 800,
	height: 400,
	data: sampleData,
};

// Story with horizontal legend
export const WithLegend: StoryObj< typeof LineChart > = Template.bind( {} );
WithLegend.args = {
	...Default.args,
	showLegend: true,
};

// Story with vertical legend
export const WithVerticalLegend: StoryObj< typeof LineChart > = Template.bind( {} );
WithVerticalLegend.args = {
	...Default.args,
	showLegend: true,
	legendOrientation: 'vertical',
};

// Add after existing stories
export const FixedDimensions: StoryObj< typeof LineChart > = Template.bind( {} );
FixedDimensions.args = {
	width: 800,
	height: 400,
	data: sampleData,
	withTooltips: true,
};

FixedDimensions.parameters = {
	docs: {
		description: {
			story: 'Line chart with fixed dimensions that override the responsive behavior.',
		},
	},
};

// Story with gradient filled line chart
export const GridientFilled: StoryObj< typeof LineChart > = Template.bind( {} );
GridientFilled.args = {
	...Default.args,
	margin: undefined,
	data: webTrafficData,
	withGradientFill: true,
	options: {
		axis: { y: { orientation: 'right' } },
	},
};

export const ErrorStates: StoryObj< typeof LineChart > = {
	render: () => (
		<div style={ { display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(2, 1fr)' } }>
			<div>
				<h3>Empty Data</h3>
				<LineChart width={ 300 } height={ 200 } data={ [] } />
			</div>
			<div>
				<h3>Invalid Date Values</h3>
				<LineChart
					width={ 300 }
					height={ 200 }
					data={ [
						{
							label: 'Invalid Dates',
							data: [
								{ date: new Date( 'invalid' ), value: 10 },
								{ date: new Date( '2024-01-02' ), value: 20 },
							],
							options: {},
						},
					] }
				/>
			</div>
			<div>
				<h3>Invalid Values</h3>
				<LineChart
					width={ 300 }
					height={ 200 }
					data={ [
						{
							label: 'Invalid Values',
							data: [
								{ date: new Date( '2024-01-01' ), value: NaN },
								{ date: new Date( '2024-01-02' ), value: null as number | null },
							],
							options: {},
						},
					] }
				/>
			</div>
			<div>
				<h3>Single Data Point</h3>
				<LineChart
					width={ 300 }
					height={ 200 }
					data={ [
						{
							label: 'Single Point',
							data: [ { date: new Date( '2024-01-01' ), value: 100 } ],
							options: {},
						},
					] }
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Examples of how the line chart handles various error states and edge cases.',
			},
		},
	},
};

export const WithoutSmoothing: StoryObj< typeof LineChart > = Template.bind( {} );
WithoutSmoothing.args = {
	...Default.args,
	smoothing: false,
};

export const CustomTooltips: StoryObj< typeof LineChart > = Template.bind( {} );
CustomTooltips.args = {
	...Default.args,
	renderTooltip: ( { tooltipData } ) => {
		const nearestDatum = tooltipData?.nearestDatum?.datum;
		if ( ! nearestDatum ) return null;

		const tooltipPoints = Object.entries( tooltipData?.datumByKey || {} )
			.map( ( [ key, { datum } ] ) => ( {
				key,
				value: datum.value as number,
			} ) )
			.sort( ( a, b ) => b.value - a.value );

		return (
			<div>
				<h3>{ nearestDatum?.date?.toLocaleDateString() } \u{1F4AF} </h3>

				<table style={ { border: '1px solid black', borderCollapse: 'collapse' } }>
					{ tooltipPoints.map( point => (
						<tr style={ { border: '1px solid black' } } key={ point.key }>
							<td style={ { border: '1px solid black' } }>{ point.key }</td>
							<td>{ point.value }</td>
						</tr>
					) ) }
				</table>
			</div>
		);
	},
};

export const WithPointerEvents: StoryObj< typeof LineChart > = Template.bind( {} );
WithPointerEvents.args = {
	...Default.args,
	// eslint-disable-next-line no-alert
	onPointerDown: ( { datum } ) => alert( 'Pointer down:' + JSON.stringify( datum ) ),
};

export const CurveTypes: StoryObj< typeof LineChart > = {
	render: () => {
		// Create sample data that highlights the difference between curve types
		// Monotone X will prevent overshooting on steep changes followed by gradual changes
		const curveData = [
			{
				label: 'Sample Series',
				data: [
					{ date: new Date( '2024-01-01' ), value: 10 },
					{ date: new Date( '2024-01-02' ), value: 90 }, // Sharp rise
					{ date: new Date( '2024-01-03' ), value: 85 }, // Slight decline
					{ date: new Date( '2024-01-04' ), value: 82 }, // Gradual decline
					{ date: new Date( '2024-01-05' ), value: 5 }, // Sharp drop
					{ date: new Date( '2024-01-06' ), value: 8 }, // Slight rise
					{ date: new Date( '2024-01-07' ), value: 10 }, // Gradual rise
				],
				options: {},
			},
		];

		return (
			<div style={ { display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(3, 1fr)' } }>
				<div>
					<h3>Linear Curve</h3>
					<LineChart
						width={ 300 }
						height={ 200 }
						data={ curveData }
						curveType="linear"
						showLegend={ false }
						withGradientFill={ false }
					/>
				</div>
				<div>
					<h3>Smooth Curve (Catmull-Rom)</h3>
					<LineChart
						width={ 300 }
						height={ 200 }
						data={ curveData }
						curveType="smooth"
						showLegend={ false }
						withGradientFill={ false }
					/>
				</div>
				<div>
					<h3>Monotone X Curve</h3>
					<LineChart
						width={ 300 }
						height={ 200 }
						data={ curveData }
						curveType="monotone"
						showLegend={ false }
						withGradientFill={ false }
					/>
				</div>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points.',
			},
		},
	},
};
`,P={Default:{startLoc:{col:17,line:28},endLoc:{col:2,line:30},startBody:{col:17,line:28},endBody:{col:2,line:30}},SingleSeries:{startLoc:{col:17,line:28},endLoc:{col:2,line:30},startBody:{col:17,line:28},endBody:{col:2,line:30}},WithoutTooltip:{startLoc:{col:17,line:28},endLoc:{col:2,line:30},startBody:{col:17,line:28},endBody:{col:2,line:30}},CustomDimensions:{startLoc:{col:17,line:28},endLoc:{col:2,line:30},startBody:{col:17,line:28},endBody:{col:2,line:30}},WithLegend:{startLoc:{col:17,line:28},endLoc:{col:2,line:30},startBody:{col:17,line:28},endBody:{col:2,line:30}},WithVerticalLegend:{startLoc:{col:17,line:28},endLoc:{col:2,line:30},startBody:{col:17,line:28},endBody:{col:2,line:30}},FixedDimensions:{startLoc:{col:17,line:28},endLoc:{col:2,line:30},startBody:{col:17,line:28},endBody:{col:2,line:30}},GridientFilled:{startLoc:{col:17,line:28},endLoc:{col:2,line:30},startBody:{col:17,line:28},endBody:{col:2,line:30}},ErrorStates:{startLoc:{col:27,line:119},endLoc:{col:1,line:194},startBody:{col:27,line:119},endBody:{col:1,line:194}},WithoutSmoothing:{startLoc:{col:17,line:28},endLoc:{col:2,line:30},startBody:{col:17,line:28},endBody:{col:2,line:30}},CustomTooltips:{startLoc:{col:17,line:28},endLoc:{col:2,line:30},startBody:{col:17,line:28},endBody:{col:2,line:30}},WithPointerEvents:{startLoc:{col:17,line:28},endLoc:{col:2,line:30},startBody:{col:17,line:28},endBody:{col:2,line:30}},CurveTypes:{startLoc:{col:26,line:247},endLoc:{col:1,line:337},startBody:{col:26,line:247},endBody:{col:1,line:337}}};const p={title:"JS Packages/Charts/Types/Line Chart",component:a.A,parameters:{storySource:{source:`/* wp:polyfill */
/* wp:polyfill esnext.iterator.map */
import React from 'react';
import LineChart from '../line-chart';
import sampleData from './sample-data';
import webTrafficData from './site-traffic-sample';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const meta = {
  title: 'JS Packages/Charts/Types/Line Chart',
  component: LineChart,
  parameters: {
    layout: 'centered'
  },
  decorators: [Story => /*#__PURE__*/_jsx("div", {
    style: {
      resize: 'both',
      overflow: 'auto',
      padding: '2rem',
      width: '800px',
      maxWidth: '1200px',
      border: '1px dashed #ccc',
      display: 'inline-block'
    },
    children: /*#__PURE__*/_jsx(Story, {})
  })]
};
export default meta;
const Template = args => /*#__PURE__*/_jsx(LineChart, {
  ...args
});

// Default story with multiple series
export const Default = Template.bind({});
Default.args = {
  data: sampleData,
  showLegend: false,
  legendOrientation: 'horizontal',
  withGradientFill: false,
  smoothing: true,
  options: {
    axis: {
      x: {
        orientation: 'bottom'
      },
      y: {
        orientation: 'left'
      }
    }
  }
};

// Story with single data series
export const SingleSeries = Template.bind({});
SingleSeries.args = {
  data: [sampleData[0]] // Only London temperature data
};

// Story without tooltip
export const WithoutTooltip = Template.bind({});
WithoutTooltip.args = {
  ...Default.args,
  withTooltips: false
};

// Story with custom dimensions
export const CustomDimensions = Template.bind({});
CustomDimensions.args = {
  width: 800,
  height: 400,
  data: sampleData
};

// Story with horizontal legend
export const WithLegend = Template.bind({});
WithLegend.args = {
  ...Default.args,
  showLegend: true
};

// Story with vertical legend
export const WithVerticalLegend = Template.bind({});
WithVerticalLegend.args = {
  ...Default.args,
  showLegend: true,
  legendOrientation: 'vertical'
};

// Add after existing stories
export const FixedDimensions = Template.bind({});
FixedDimensions.args = {
  width: 800,
  height: 400,
  data: sampleData,
  withTooltips: true
};
FixedDimensions.parameters = {
  docs: {
    description: {
      story: 'Line chart with fixed dimensions that override the responsive behavior.'
    }
  }
};

// Story with gradient filled line chart
export const GridientFilled = Template.bind({});
GridientFilled.args = {
  ...Default.args,
  margin: undefined,
  data: webTrafficData,
  withGradientFill: true,
  options: {
    axis: {
      y: {
        orientation: 'right'
      }
    }
  }
};
export const ErrorStates = {
  render: () => /*#__PURE__*/_jsxs("div", {
    style: {
      display: 'grid',
      gap: '2rem',
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    children: [/*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("h3", {
        children: "Empty Data"
      }), /*#__PURE__*/_jsx(LineChart, {
        width: 300,
        height: 200,
        data: []
      })]
    }), /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("h3", {
        children: "Invalid Date Values"
      }), /*#__PURE__*/_jsx(LineChart, {
        width: 300,
        height: 200,
        data: [{
          label: 'Invalid Dates',
          data: [{
            date: new Date('invalid'),
            value: 10
          }, {
            date: new Date('2024-01-02'),
            value: 20
          }],
          options: {}
        }]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("h3", {
        children: "Invalid Values"
      }), /*#__PURE__*/_jsx(LineChart, {
        width: 300,
        height: 200,
        data: [{
          label: 'Invalid Values',
          data: [{
            date: new Date('2024-01-01'),
            value: NaN
          }, {
            date: new Date('2024-01-02'),
            value: null
          }],
          options: {}
        }]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("h3", {
        children: "Single Data Point"
      }), /*#__PURE__*/_jsx(LineChart, {
        width: 300,
        height: 200,
        data: [{
          label: 'Single Point',
          data: [{
            date: new Date('2024-01-01'),
            value: 100
          }],
          options: {}
        }]
      })]
    })]
  }),
  parameters: {
    docs: {
      description: {
        story: 'Examples of how the line chart handles various error states and edge cases.'
      }
    }
  }
};
export const WithoutSmoothing = Template.bind({});
WithoutSmoothing.args = {
  ...Default.args,
  smoothing: false
};
export const CustomTooltips = Template.bind({});
CustomTooltips.args = {
  ...Default.args,
  renderTooltip: ({
    tooltipData
  }) => {
    const nearestDatum = tooltipData?.nearestDatum?.datum;
    if (!nearestDatum) return null;
    const tooltipPoints = Object.entries(tooltipData?.datumByKey || {}).map(([key, {
      datum
    }]) => ({
      key,
      value: datum.value
    })).sort((a, b) => b.value - a.value);
    return /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsxs("h3", {
        children: [nearestDatum?.date?.toLocaleDateString(), " \\uD83D\\uDCAF "]
      }), /*#__PURE__*/_jsx("table", {
        style: {
          border: '1px solid black',
          borderCollapse: 'collapse'
        },
        children: tooltipPoints.map(point => /*#__PURE__*/_jsxs("tr", {
          style: {
            border: '1px solid black'
          },
          children: [/*#__PURE__*/_jsx("td", {
            style: {
              border: '1px solid black'
            },
            children: point.key
          }), /*#__PURE__*/_jsx("td", {
            children: point.value
          })]
        }, point.key))
      })]
    });
  }
};
export const WithPointerEvents = Template.bind({});
WithPointerEvents.args = {
  ...Default.args,
  
  onPointerDown: ({
    datum
  }) => alert('Pointer down:' + JSON.stringify(datum))
};
export const CurveTypes = {
  render: () => {
    // Create sample data that highlights the difference between curve types
    // Monotone X will prevent overshooting on steep changes followed by gradual changes
    const curveData = [{
      label: 'Sample Series',
      data: [{
        date: new Date('2024-01-01'),
        value: 10
      }, {
        date: new Date('2024-01-02'),
        value: 90
      },
      // Sharp rise
      {
        date: new Date('2024-01-03'),
        value: 85
      },
      // Slight decline
      {
        date: new Date('2024-01-04'),
        value: 82
      },
      // Gradual decline
      {
        date: new Date('2024-01-05'),
        value: 5
      },
      // Sharp drop
      {
        date: new Date('2024-01-06'),
        value: 8
      },
      // Slight rise
      {
        date: new Date('2024-01-07'),
        value: 10
      } // Gradual rise
      ],
      options: {}
    }];
    return /*#__PURE__*/_jsxs("div", {
      style: {
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: 'repeat(3, 1fr)'
      },
      children: [/*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("h3", {
          children: "Linear Curve"
        }), /*#__PURE__*/_jsx(LineChart, {
          width: 300,
          height: 200,
          data: curveData,
          curveType: "linear",
          showLegend: false,
          withGradientFill: false
        })]
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("h3", {
          children: "Smooth Curve (Catmull-Rom)"
        }), /*#__PURE__*/_jsx(LineChart, {
          width: 300,
          height: 200,
          data: curveData,
          curveType: "smooth",
          showLegend: false,
          withGradientFill: false
        })]
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("h3", {
          children: "Monotone X Curve"
        }), /*#__PURE__*/_jsx(LineChart, {
          width: 300,
          height: 200,
          data: curveData,
          curveType: "monotone",
          showLegend: false,
          withGradientFill: false
        })]
      })]
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points.'
      }
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:28},endLoc:{col:2,line:30},startBody:{col:17,line:28},endBody:{col:2,line:30}},"single-series":{startLoc:{col:17,line:28},endLoc:{col:2,line:30},startBody:{col:17,line:28},endBody:{col:2,line:30}},"without-tooltip":{startLoc:{col:17,line:28},endLoc:{col:2,line:30},startBody:{col:17,line:28},endBody:{col:2,line:30}},"custom-dimensions":{startLoc:{col:17,line:28},endLoc:{col:2,line:30},startBody:{col:17,line:28},endBody:{col:2,line:30}},"with-legend":{startLoc:{col:17,line:28},endLoc:{col:2,line:30},startBody:{col:17,line:28},endBody:{col:2,line:30}},"with-vertical-legend":{startLoc:{col:17,line:28},endLoc:{col:2,line:30},startBody:{col:17,line:28},endBody:{col:2,line:30}},"fixed-dimensions":{startLoc:{col:17,line:28},endLoc:{col:2,line:30},startBody:{col:17,line:28},endBody:{col:2,line:30}},"gridient-filled":{startLoc:{col:17,line:28},endLoc:{col:2,line:30},startBody:{col:17,line:28},endBody:{col:2,line:30}},"error-states":{startLoc:{col:27,line:119},endLoc:{col:1,line:194},startBody:{col:27,line:119},endBody:{col:1,line:194}},"without-smoothing":{startLoc:{col:17,line:28},endLoc:{col:2,line:30},startBody:{col:17,line:28},endBody:{col:2,line:30}},"custom-tooltips":{startLoc:{col:17,line:28},endLoc:{col:2,line:30},startBody:{col:17,line:28},endBody:{col:2,line:30}},"with-pointer-events":{startLoc:{col:17,line:28},endLoc:{col:2,line:30},startBody:{col:17,line:28},endBody:{col:2,line:30}},"curve-types":{startLoc:{col:26,line:247},endLoc:{col:1,line:337},startBody:{col:26,line:247},endBody:{col:1,line:337}}}},layout:"centered"},decorators:[y=>(0,t.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,t.jsx)(y,{})})]},u=y=>(0,t.jsx)(a.A,{...y}),n=u.bind({});n.args={data:i,showLegend:!1,legendOrientation:"horizontal",withGradientFill:!1,smoothing:!0,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}}};const c=u.bind({});c.args={data:[i[0]]};const b=u.bind({});b.args={...n.args,withTooltips:!1};const S=u.bind({});S.args={width:800,height:400,data:i};const j=u.bind({});j.args={...n.args,showLegend:!0};const _=u.bind({});_.args={...n.args,showLegend:!0,legendOrientation:"vertical"};const m=u.bind({});m.args={width:800,height:400,data:i,withTooltips:!0},m.parameters={docs:{description:{story:"Line chart with fixed dimensions that override the responsive behavior."}}};const g=u.bind({});g.args={...n.args,margin:void 0,data:s.A,withGradientFill:!0,options:{axis:{y:{orientation:"right"}}}};const W={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(a.A,{width:300,height:200,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Invalid Date Values"}),(0,t.jsx)(a.A,{width:300,height:200,data:[{label:"Invalid Dates",data:[{date:new Date("invalid"),value:10},{date:new Date("2024-01-02"),value:20}],options:{}}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Invalid Values"}),(0,t.jsx)(a.A,{width:300,height:200,data:[{label:"Invalid Values",data:[{date:new Date("2024-01-01"),value:NaN},{date:new Date("2024-01-02"),value:null}],options:{}}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(a.A,{width:300,height:200,data:[{label:"Single Point",data:[{date:new Date("2024-01-01"),value:100}],options:{}}]})]})]}),parameters:{docs:{description:{story:"Examples of how the line chart handles various error states and edge cases."}}}},w=u.bind({});w.args={...n.args,smoothing:!1};const l=u.bind({});l.args={...n.args,renderTooltip:({tooltipData:y})=>{const M=y?.nearestDatum?.datum;if(!M)return null;const V=Object.entries(y?.datumByKey||{}).map(([E,{datum:v}])=>({key:E,value:v.value})).sort((E,v)=>v.value-E.value);return(0,t.jsxs)("div",{children:[(0,t.jsxs)("h3",{children:[M?.date?.toLocaleDateString()," \u{1F4AF} "]}),(0,t.jsx)("table",{style:{border:"1px solid black",borderCollapse:"collapse"},children:V.map(E=>(0,t.jsxs)("tr",{style:{border:"1px solid black"},children:[(0,t.jsx)("td",{style:{border:"1px solid black"},children:E.key}),(0,t.jsx)("td",{children:E.value})]},E.key))})]})}};const F=u.bind({});F.args={...n.args,onPointerDown:({datum:y})=>alert("Pointer down:"+JSON.stringify(y))};const O={render:()=>{const y=[{label:"Sample Series",data:[{date:new Date("2024-01-01"),value:10},{date:new Date("2024-01-02"),value:90},{date:new Date("2024-01-03"),value:85},{date:new Date("2024-01-04"),value:82},{date:new Date("2024-01-05"),value:5},{date:new Date("2024-01-06"),value:8},{date:new Date("2024-01-07"),value:10}],options:{}}];return(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Linear Curve"}),(0,t.jsx)(a.A,{width:300,height:200,data:y,curveType:"linear",showLegend:!1,withGradientFill:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Smooth Curve (Catmull-Rom)"}),(0,t.jsx)(a.A,{width:300,height:200,data:y,curveType:"smooth",showLegend:!1,withGradientFill:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Monotone X Curve"}),(0,t.jsx)(a.A,{width:300,height:200,data:y,curveType:"monotone",showLegend:!1,withGradientFill:!1})]})]})},parameters:{docs:{description:{story:"Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points."}}}},N=["Default","SingleSeries","WithoutTooltip","CustomDimensions","WithLegend","WithVerticalLegend","FixedDimensions","GridientFilled","ErrorStates","WithoutSmoothing","CustomTooltips","WithPointerEvents","CurveTypes"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...n.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...c.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...S.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...j.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",..._.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...g.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <LineChart width={300} height={200} data={[]} />
            </div>
            <div>
                <h3>Invalid Date Values</h3>
                <LineChart width={300} height={200} data={[{
        label: 'Invalid Dates',
        data: [{
          date: new Date('invalid'),
          value: 10
        }, {
          date: new Date('2024-01-02'),
          value: 20
        }],
        options: {}
      }]} />
            </div>
            <div>
                <h3>Invalid Values</h3>
                <LineChart width={300} height={200} data={[{
        label: 'Invalid Values',
        data: [{
          date: new Date('2024-01-01'),
          value: NaN
        }, {
          date: new Date('2024-01-02'),
          value: null as number | null
        }],
        options: {}
      }]} />
            </div>
            <div>
                <h3>Single Data Point</h3>
                <LineChart width={300} height={200} data={[{
        label: 'Single Point',
        data: [{
          date: new Date('2024-01-01'),
          value: 100
        }],
        options: {}
      }]} />
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of how the line chart handles various error states and edge cases.'
      }
    }
  }
}`,...W.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...w.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...l.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...F.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Create sample data that highlights the difference between curve types
    // Monotone X will prevent overshooting on steep changes followed by gradual changes
    const curveData = [{
      label: 'Sample Series',
      data: [{
        date: new Date('2024-01-01'),
        value: 10
      }, {
        date: new Date('2024-01-02'),
        value: 90
      },
      // Sharp rise
      {
        date: new Date('2024-01-03'),
        value: 85
      },
      // Slight decline
      {
        date: new Date('2024-01-04'),
        value: 82
      },
      // Gradual decline
      {
        date: new Date('2024-01-05'),
        value: 5
      },
      // Sharp drop
      {
        date: new Date('2024-01-06'),
        value: 8
      },
      // Slight rise
      {
        date: new Date('2024-01-07'),
        value: 10
      } // Gradual rise
      ],
      options: {}
    }];
    return <div style={{
      display: 'grid',
      gap: '2rem',
      gridTemplateColumns: 'repeat(3, 1fr)'
    }}>
                <div>
                    <h3>Linear Curve</h3>
                    <LineChart width={300} height={200} data={curveData} curveType="linear" showLegend={false} withGradientFill={false} />
                </div>
                <div>
                    <h3>Smooth Curve (Catmull-Rom)</h3>
                    <LineChart width={300} height={200} data={curveData} curveType="smooth" showLegend={false} withGradientFill={false} />
                </div>
                <div>
                    <h3>Monotone X Curve</h3>
                    <LineChart width={300} height={200} data={curveData} curveType="monotone" showLegend={false} withGradientFill={false} />
                </div>
            </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points.'
      }
    }
  }
}`,...O.parameters?.docs?.source}}}},"../charts/src/components/legend/base-legend.tsx":(C,d,e)=>{e.d(d,{$:()=>n});var r=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),a=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),h=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(i),t=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.68.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/legend/legend.module.scss"),x={};x.insert="head",x.singleton=!1;var P=s()(t.A,x);const D=t.A.locals||{};var p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u={horizontal:"row",vertical:"column"},n=({items:c,className:b,orientation:S="horizontal"})=>{const j=(0,a.A)({domain:c.map(_=>_.label),range:c.map(_=>_.color)});return(0,p.jsx)("div",{className:(0,h.A)(D.legend,D[`legend--${S}`],b),role:"list","data-testid":`legend-${S}`,children:(0,p.jsx)(r.A,{scale:j,direction:u[S],shape:"rect",shapeWidth:16,shapeHeight:16,className:D["legend-items"],children:_=>(0,p.jsx)("div",{className:D[`legend--${S}`],children:_.map(m=>(0,p.jsxs)("div",{className:D["legend-item"],role:"listitem","data-testid":"legend-item",children:[(0,p.jsx)("svg",{width:16,height:16,role:"img",children:(0,p.jsx)("rect",{width:16,height:16,fill:m.value,className:D["legend-item-swatch"],"data-testid":"legend-marker",role:"presentation"})}),(0,p.jsxs)("span",{className:D["legend-item-label"],children:[m.text,c.find(g=>g.label===m.text)?.value&&(0,p.jsx)("span",{className:D["legend-item-value"],children:c.find(g=>g.label===m.text)?.value})]})]},m.text))})})})};try{n.displayName="BaseLegend",n.__docgenInfo={description:"",displayName:"BaseLegend",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItem[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},scale:{defaultValue:null,description:"",name:"scale",required:!1,type:{name:"ScaleOrdinal<StringLike, unknown, never>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:n.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../charts/src/components/line-chart/line-chart.tsx":(C,d,e)=>{e.d(d,{A:()=>E});var r=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/catmullRom.js"),a=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/linear.js"),h=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/monotone.js"),i=e("../../../node_modules/.pnpm/@visx+gradient@3.12.0_react@18.3.1/node_modules/@visx/gradient/esm/gradients/LinearGradient.js"),s=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),t=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),x=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/AnimatedGrid.js"),P=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/AnimatedAxis.js"),D=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/AnimatedAreaSeries.js"),p=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),u=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../charts/src/providers/theme/theme-provider.tsx"),b=e("../charts/src/components/legend/base-legend.tsx"),S=e("../charts/src/components/shared/with-responsive.tsx"),j=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(j),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.68.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/line-chart/line-chart.module.scss"),g={};g.insert="head",g.singleton=!1;var W=_()(m.A,g);const w=m.A.locals||{};var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const F=100,O=(v,T)=>{if(!v)return T?r.A:a.A;switch(v){case"smooth":return r.A;case"monotone":return h.G;case"linear":return a.A;default:return a.A}},N=({tooltipData:v})=>{const T=v?.nearestDatum?.datum;if(!T)return null;const I=Object.entries(v?.datumByKey||{}).map(([f,{datum:A}])=>({key:f,value:A.value})).sort((f,A)=>A.value-f.value);return(0,l.jsxs)("div",{className:w["line-chart__tooltip"],children:[(0,l.jsx)("div",{className:w["line-chart__tooltip-date"],children:T.date?.toLocaleDateString()}),I.map(f=>(0,l.jsxs)("div",{className:w["line-chart__tooltip-row"],children:[(0,l.jsxs)("span",{className:w["line-chart__tooltip-label"],children:[f.key,":"]}),(0,l.jsx)("span",{className:w["line-chart__tooltip-value"],children:f.value})]},f.key))]})},y=v=>new Date(v).toLocaleDateString(void 0,{month:"short",day:"numeric"}),M=v=>v?.length?v.some(I=>I.data.some(f=>isNaN(f.value)||f.value===null||f.value===void 0||isNaN(f.date.getTime())))?"Invalid data":null:"No data available",V=({data:v,width:T,height:I,className:f,margin:A,withTooltips:X=!0,showLegend:J=!1,legendOrientation:H="horizontal",withGradientFill:K=!1,smoothing:$=!0,curveType:Q="linear",renderTooltip:Z=N,options:R={},onPointerDown:q=void 0,onPointerUp:ee=void 0,onPointerMove:te=void 0,onPointerOut:ae=void 0})=>{const B=(0,c.R)(),z=(0,n.useId)(),k=(0,n.useMemo)(()=>v.map(o=>({...o,data:o.data.sort((L,G)=>L.date.getTime()-G.date.getTime())})),[v]),U=(0,n.useMemo)(()=>{const o=k?.map(L=>L.options?.stroke??"").filter(Boolean)??[];return(0,s.A)({...B,colors:[...o,...B.colors]})},[B,k]);A=(0,n.useMemo)(()=>{let o={};return R.axis?.y?.orientation==="right"&&(o={...o,right:40,left:0}),R.axis?.x?.orientation==="top"&&(o={...o,top:20,bottom:10}),{...o,...A}},[A,R]);const ne=(0,n.useMemo)(()=>Math.min(k[0]?.data.length,Math.ceil(T/F)),[k,T]),Y=M(k);if(Y)return(0,l.jsx)("div",{className:(0,u.A)("line-chart",w["line-chart"]),children:Y});const le=k.map((o,L)=>({label:o.label,value:"",color:B.colors[L%B.colors.length]})),oe={xAccessor:o=>o?.date,yAccessor:o=>o?.value};return(0,l.jsxs)("div",{className:(0,u.A)("line-chart",w["line-chart"],f),"data-testid":"line-chart",role:"img","aria-label":"line chart",children:[(0,l.jsxs)(t.A,{theme:U,width:T,height:I,margin:{top:10,right:0,bottom:20,left:40,...A},xScale:{type:"time",...R?.xScale},yScale:{type:"linear",nice:!0,zero:!1,...R?.yScale},onPointerDown:q,onPointerUp:ee,onPointerMove:te,onPointerOut:ae,pointerEventsDataKey:"nearest",children:[(0,l.jsx)(x.A,{columns:!1,numTicks:4}),(0,l.jsx)(P.A,{orientation:"bottom",numTicks:ne,tickFormat:y,...R?.axis?.x}),(0,l.jsx)(P.A,{orientation:"left",numTicks:4,...R?.axis?.y}),k.map((o,L)=>{const G=o.options?.stroke??U.colors[L%U.colors.length],se=B?.seriesLineStyles?.[L%B.seriesLineStyles.length]||{};return(0,l.jsxs)("g",{children:[K&&(0,l.jsx)(i.A,{id:`area-gradient-${z}-${L+1}`,from:G,fromOpacity:.4,toOpacity:.1,to:U.backgroundColor,...o.options?.gradient,"data-testid":"line-gradient"}),(0,l.jsx)(D.A,{dataKey:o?.label,data:o.data,...oe,fill:K?`url(#area-gradient-${z}-${L+1})`:void 0,renderLine:!0,curve:O(Q,$),lineProps:se},o?.label)]},o?.label||L)}),X&&(0,l.jsx)(p.A,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,showSeriesGlyphs:!0,renderTooltip:Z})]}),J&&(0,l.jsx)(b.$,{items:le,orientation:H,className:w["line-chart-legend"]})]})},E=(0,S.F)(V);try{linechart.displayName="linechart",linechart.__docgenInfo={description:"",displayName:"linechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:{value:"undefined"},description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"true"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: { type?: keyof ScaleTypeToScaleConfig<DefaultOutput, StringLike, DefaultThresholdInput>; zero?: boolean; domain?: [...]; range?: [...]; }; xScale?: { ...; }; axis?: { ...; }; }"}},renderTooltip:{defaultValue:{value:`( {
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
}`},description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withGradientFill:{defaultValue:{value:"false"},description:"",name:"withGradientFill",required:!1,type:{name:"boolean"}},smoothing:{defaultValue:{value:"true"},description:"",name:"smoothing",required:!1,type:{name:"boolean"}},curveType:{defaultValue:{value:"linear"},description:"",name:"curveType",required:!1,type:{name:"enum",value:[{value:'"linear"'},{value:'"smooth"'},{value:'"monotone"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/line-chart.tsx#linechart"]={docgenInfo:linechart.__docgenInfo,name:"linechart",path:"../charts/src/components/line-chart/line-chart.tsx#linechart"})}catch{}},"../charts/src/components/line-chart/stories/site-traffic-sample.ts":(C,d,e)=>{e.d(d,{A:()=>r});const r=[{label:"Views",options:{stroke:"#069e08"},data:[{date:new Date("2024-01-01"),value:2558},{date:new Date("2024-01-02"),value:3399},{date:new Date("2024-01-03"),value:2260},{date:new Date("2024-01-04"),value:2331},{date:new Date("2024-01-05"),value:3302},{date:new Date("2024-01-06"),value:1852},{date:new Date("2024-01-07"),value:2607},{date:new Date("2024-01-08"),value:2804},{date:new Date("2024-01-09"),value:3260},{date:new Date("2024-01-10"),value:2941},{date:new Date("2024-01-11"),value:2857},{date:new Date("2024-01-12"),value:3461},{date:new Date("2024-01-13"),value:1548},{date:new Date("2024-01-14"),value:2739},{date:new Date("2024-01-15"),value:3288},{date:new Date("2024-01-16"),value:2869},{date:new Date("2024-01-17"),value:2590},{date:new Date("2024-01-18"),value:2609},{date:new Date("2024-01-19"),value:2648},{date:new Date("2024-01-20"),value:1805},{date:new Date("2024-01-21"),value:2531},{date:new Date("2024-01-22"),value:3605},{date:new Date("2024-01-23"),value:2366},{date:new Date("2024-01-24"),value:2782},{date:new Date("2024-01-25"),value:2885},{date:new Date("2024-01-26"),value:2918},{date:new Date("2024-01-27"),value:2518},{date:new Date("2024-01-28"),value:2378},{date:new Date("2024-01-29"),value:2714},{date:new Date("2024-01-30"),value:3279}]},{label:"Visitors",options:{stroke:"rgb(230, 139, 40)"},data:[{date:new Date("2024-01-01"),value:2412},{date:new Date("2024-01-02"),value:1899},{date:new Date("2024-01-03"),value:2061},{date:new Date("2024-01-04"),value:1939},{date:new Date("2024-01-05"),value:1986},{date:new Date("2024-01-06"),value:1560},{date:new Date("2024-01-07"),value:1741},{date:new Date("2024-01-08"),value:2120},{date:new Date("2024-01-09"),value:1889},{date:new Date("2024-01-10"),value:1666},{date:new Date("2024-01-11"),value:2396},{date:new Date("2024-01-12"),value:2276},{date:new Date("2024-01-13"),value:1218},{date:new Date("2024-01-14"),value:1228},{date:new Date("2024-01-15"),value:1600},{date:new Date("2024-01-16"),value:1814},{date:new Date("2024-01-17"),value:1701},{date:new Date("2024-01-18"),value:1507},{date:new Date("2024-01-19"),value:1833},{date:new Date("2024-01-20"),value:1407},{date:new Date("2024-01-21"),value:965},{date:new Date("2024-01-22"),value:2288},{date:new Date("2024-01-23"),value:2135},{date:new Date("2024-01-24"),value:1824},{date:new Date("2024-01-25"),value:2219},{date:new Date("2024-01-26"),value:1918},{date:new Date("2024-01-27"),value:1101},{date:new Date("2024-01-28"),value:1695},{date:new Date("2024-01-29"),value:1615},{date:new Date("2024-01-30"),value:2056}]}]},"../charts/src/components/shared/with-responsive.tsx":(C,d,e)=>{e.d(d,{F:()=>h});var r=e("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function h(i,s){const{maxWidth:t=1200,aspectRatio:x=.5,debounceTime:P=50}=s||{};return function(p){const{parentRef:u,width:n}=(0,r.A)({debounceTime:P,enableDebounceLeadingCall:!0,initialSize:{width:600,height:400}}),c=n?Math.min(n,t):600,b=p.height??c*x;return(0,a.jsx)("div",{ref:u,style:{width:"100%"},children:(0,a.jsx)(i,{width:c,height:b,size:c,...p})})}}try{h.displayName="withResponsive",h.__docgenInfo={description:`A higher-order component that provides responsive dimensions
to the wrapped chart component using useParentSize from`,displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/with-responsive.tsx#withResponsive"]={docgenInfo:h.__docgenInfo,name:"withResponsive",path:"../charts/src/components/shared/with-responsive.tsx#withResponsive"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(C,d,e)=>{e.d(d,{N:()=>t,R:()=>s});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../charts/src/providers/theme/themes.ts"),h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i=(0,r.createContext)(a.zQ),s=()=>(0,r.useContext)(i),t=({theme:x={},children:P})=>{const D={...a.zQ,...x};return(0,h.jsx)(i.Provider,{value:D,children:P})};try{t.displayName="ThemeProvider",t.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:t.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{s.displayName="useChartTheme",s.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:s.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(C,d,e)=>{e.d(d,{QI:()=>a,pk:()=>h,zQ:()=>r});const r={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}},a={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}},h={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.68.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/legend/legend.module.scss":(C,d,e)=>{e.d(d,{A:()=>t});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(r),h=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(h),s=i()(a());s.push([C.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;gap:8px;font-size:.875rem}.Jm5pF35m9hvJUFFWW0uS{border-radius:2px}.AyocUvYOPM3rztxeHhaJ{color:var(--jp-gray-80, #2c3338);display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),s.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-swatch":"Jm5pF35m9hvJUFFWW0uS","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const t=s},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.68.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/line-chart/line-chart.module.scss":(C,d,e)=>{e.d(d,{A:()=>t});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(r),h=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(h),s=i()(a());s.push([C.id,".SVlAnnWw2ot8McusfLcw{position:relative}.WG8wpgeFR6IoBhr41Y3z{background:#fff;padding:.5rem}.t5p9YWtrovlLQm8WlrGF{font-weight:700;padding-bottom:10px}.FPtDJMJR2GRu0df3iYy6{display:flex;align-items:center;padding:4px 0;justify-content:space-between}.xTJS98Xw7HFAGWFwzsgd{font-weight:500;padding-right:1rem}",""]),s.locals={"line-chart":"SVlAnnWw2ot8McusfLcw","line-chart__tooltip":"WG8wpgeFR6IoBhr41Y3z","line-chart__tooltip-date":"t5p9YWtrovlLQm8WlrGF","line-chart__tooltip-row":"FPtDJMJR2GRu0df3iYy6","line-chart__tooltip-label":"xTJS98Xw7HFAGWFwzsgd"};const t=s}}]);
