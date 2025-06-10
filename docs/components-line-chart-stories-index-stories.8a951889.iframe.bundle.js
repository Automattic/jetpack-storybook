"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4722],{"../charts/src/components/line-chart/stories/index.stories.tsx":(I,F,a)=>{a.r(F),a.d(F,{BrokenLine:()=>E,CurveTypes:()=>M,CustomDimensions:()=>_,CustomTooltips:()=>g,DateStringFormats:()=>C,Default:()=>t,ErrorStates:()=>l,FixedDimensions:()=>i,GridientFilled:()=>r,SingleSeries:()=>h,SmartFormatting:()=>S,WithLegend:()=>p,WithPointerEvents:()=>D,WithStartGlyphs:()=>w,WithVerticalLegend:()=>T,WithoutSmoothing:()=>L,WithoutTooltip:()=>y,__namedExportsOrder:()=>W,default:()=>f});var b=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),v=a("../charts/src/components/line-chart/line-chart.tsx"),e=a("../charts/src/components/line-chart/stories/large-values-sample.ts");const A=[{label:"London",data:[{date:new Date("2022-01-01"),value:7.8},{date:new Date("2022-01-08"),value:7.2},{date:new Date("2022-01-15"),value:6.9},{date:new Date("2022-01-22"),value:6.5},{date:new Date("2022-01-29"),value:7.1},{date:new Date("2022-02-05"),value:8.3},{date:new Date("2022-02-12"),value:8.9},{date:new Date("2022-02-19"),value:9.2},{date:new Date("2022-02-26"),value:8.7},{date:new Date("2022-03-05"),value:9.4},{date:new Date("2022-03-12"),value:10.2},{date:new Date("2022-03-19"),value:11.5},{date:new Date("2022-03-26"),value:12.3},{date:new Date("2022-04-02"),value:13.1},{date:new Date("2022-04-09"),value:13.8},{date:new Date("2022-04-16"),value:14.6},{date:new Date("2022-04-23"),value:15.2},{date:new Date("2022-04-30"),value:15.9},{date:new Date("2022-05-07"),value:16.7},{date:new Date("2022-05-14"),value:17.4},{date:new Date("2022-05-21"),value:18.2},{date:new Date("2022-05-28"),value:18.9},{date:new Date("2022-06-04"),value:19.7},{date:new Date("2022-06-11"),value:20.5},{date:new Date("2022-06-18"),value:21.3},{date:new Date("2022-06-25"),value:22.1},{date:new Date("2022-07-02"),value:22.8},{date:new Date("2022-07-09"),value:23.6},{date:new Date("2022-07-16"),value:24.4},{date:new Date("2022-07-23"),value:25.2},{date:new Date("2022-07-30"),value:24.8},{date:new Date("2022-08-06"),value:24.1},{date:new Date("2022-08-13"),value:23.5},{date:new Date("2022-08-20"),value:22.8},{date:new Date("2022-08-27"),value:21.9},{date:new Date("2022-09-03"),value:20.7},{date:new Date("2022-09-10"),value:19.5},{date:new Date("2022-09-17"),value:18.3},{date:new Date("2022-09-24"),value:17.1},{date:new Date("2022-10-01"),value:16.2},{date:new Date("2022-10-08"),value:15.1},{date:new Date("2022-10-15"),value:14.2},{date:new Date("2022-10-22"),value:13.1},{date:new Date("2022-10-29"),value:12.2},{date:new Date("2022-11-05"),value:11.1},{date:new Date("2022-11-12"),value:10.2},{date:new Date("2022-11-19"),value:9.1},{date:new Date("2022-11-26"),value:8.2},{date:new Date("2022-12-03"),value:7.1},{date:new Date("2022-12-10"),value:6.2},{date:new Date("2022-12-17"),value:5.5},{date:new Date("2022-12-24"),value:5.2},{date:new Date("2022-12-31"),value:6.8},{date:new Date("2023-01-01"),value:8.2},{date:new Date("2023-01-08"),value:7.9},{date:new Date("2023-01-15"),value:5.1},{date:new Date("2023-01-22"),value:4.8},{date:new Date("2023-01-29"),value:6.3},{date:new Date("2023-02-05"),value:7.2},{date:new Date("2023-02-12"),value:9.4},{date:new Date("2023-02-19"),value:8.7},{date:new Date("2023-02-26"),value:7.1},{date:new Date("2023-03-05"),value:8.3},{date:new Date("2023-03-12"),value:9.5},{date:new Date("2023-03-19"),value:11.2},{date:new Date("2023-03-26"),value:12.8},{date:new Date("2023-04-02"),value:13.4},{date:new Date("2023-04-09"),value:14.1},{date:new Date("2023-04-16"),value:15.3},{date:new Date("2023-04-23"),value:14.8},{date:new Date("2023-04-30"),value:15.7},{date:new Date("2023-05-07"),value:16.9},{date:new Date("2023-05-14"),value:17.2},{date:new Date("2023-05-21"),value:18.4},{date:new Date("2023-05-28"),value:19.1},{date:new Date("2023-06-04"),value:20.3},{date:new Date("2023-06-11"),value:21.5},{date:new Date("2023-06-18"),value:22.8},{date:new Date("2023-06-25"),value:21.9},{date:new Date("2023-07-02"),value:23.1},{date:new Date("2023-07-09"),value:22.7},{date:new Date("2023-07-16"),value:24.2},{date:new Date("2023-07-23"),value:23.8},{date:new Date("2023-07-30"),value:22.9},{date:new Date("2023-08-06"),value:23.4},{date:new Date("2023-08-13"),value:22.8},{date:new Date("2023-08-20"),value:21.9},{date:new Date("2023-08-27"),value:20.7},{date:new Date("2023-09-03"),value:19.8},{date:new Date("2023-09-10"),value:18.9},{date:new Date("2023-09-17"),value:17.6},{date:new Date("2023-09-24"),value:16.8},{date:new Date("2023-10-01"),value:15.9},{date:new Date("2023-10-08"),value:14.7},{date:new Date("2023-10-15"),value:13.8},{date:new Date("2023-10-22"),value:12.9},{date:new Date("2023-10-29"),value:11.7},{date:new Date("2023-11-05"),value:10.8},{date:new Date("2023-11-12"),value:9.9},{date:new Date("2023-11-19"),value:8.7},{date:new Date("2023-11-26"),value:7.8},{date:new Date("2023-12-03"),value:6.9},{date:new Date("2023-12-10"),value:5.8},{date:new Date("2023-12-17"),value:4.9},{date:new Date("2023-12-24"),value:5.7},{date:new Date("2023-12-31"),value:6.2}]},{label:"Canberra",data:[{date:new Date("2022-01-01"),value:27.9},{date:new Date("2022-01-08"),value:28.4},{date:new Date("2022-01-15"),value:29.2},{date:new Date("2022-01-22"),value:28.9},{date:new Date("2022-01-29"),value:28.1},{date:new Date("2022-02-05"),value:27.3},{date:new Date("2022-02-12"),value:26.5},{date:new Date("2022-02-19"),value:25.4},{date:new Date("2022-02-26"),value:24.2},{date:new Date("2022-03-05"),value:23.1},{date:new Date("2022-03-12"),value:22.3},{date:new Date("2022-03-19"),value:21.2},{date:new Date("2022-03-26"),value:20.1},{date:new Date("2022-04-02"),value:19.2},{date:new Date("2022-04-09"),value:18.1},{date:new Date("2022-04-16"),value:16.9},{date:new Date("2022-04-23"),value:15.8},{date:new Date("2022-04-30"),value:14.9},{date:new Date("2022-05-07"),value:13.8},{date:new Date("2022-05-14"),value:12.9},{date:new Date("2022-05-21"),value:11.8},{date:new Date("2022-05-28"),value:10.9},{date:new Date("2022-06-04"),value:9.8},{date:new Date("2022-06-11"),value:8.9},{date:new Date("2022-06-18"),value:8.1},{date:new Date("2022-06-25"),value:7.5},{date:new Date("2022-07-02"),value:6.9},{date:new Date("2022-07-09"),value:6.7},{date:new Date("2022-07-16"),value:7.1},{date:new Date("2022-07-23"),value:7.9},{date:new Date("2022-07-30"),value:8.8},{date:new Date("2022-08-06"),value:9.9},{date:new Date("2022-08-13"),value:11.2},{date:new Date("2022-08-20"),value:12.4},{date:new Date("2022-08-27"),value:13.6},{date:new Date("2022-09-03"),value:14.8},{date:new Date("2022-09-10"),value:16.1},{date:new Date("2022-09-17"),value:17.3},{date:new Date("2022-09-24"),value:18.5},{date:new Date("2022-10-01"),value:19.8},{date:new Date("2022-10-08"),value:21.1},{date:new Date("2022-10-15"),value:22.3},{date:new Date("2022-10-22"),value:23.5},{date:new Date("2022-10-29"),value:24.6},{date:new Date("2022-11-05"),value:25.7},{date:new Date("2022-11-12"),value:26.5},{date:new Date("2022-11-19"),value:27.4},{date:new Date("2022-11-26"),value:28.2},{date:new Date("2022-12-03"),value:28.9},{date:new Date("2022-12-10"),value:29.5},{date:new Date("2022-12-17"),value:29.1},{date:new Date("2022-12-24"),value:28.2},{date:new Date("2022-12-31"),value:28.7},{date:new Date("2023-01-01"),value:28.5},{date:new Date("2023-01-08"),value:29.2},{date:new Date("2023-01-15"),value:30.1},{date:new Date("2023-01-22"),value:29.8},{date:new Date("2023-01-29"),value:28.9},{date:new Date("2023-02-05"),value:27.8},{date:new Date("2023-02-12"),value:26.9},{date:new Date("2023-02-19"),value:25.7},{date:new Date("2023-02-26"),value:24.8},{date:new Date("2023-03-05"),value:23.9},{date:new Date("2023-03-12"),value:22.8},{date:new Date("2023-03-19"),value:21.7},{date:new Date("2023-03-26"),value:20.8},{date:new Date("2023-04-02"),value:19.6},{date:new Date("2023-04-09"),value:18.4},{date:new Date("2023-04-16"),value:17.2},{date:new Date("2023-04-23"),value:16.1},{date:new Date("2023-04-30"),value:15.3},{date:new Date("2023-05-07"),value:14.2},{date:new Date("2023-05-14"),value:13.1},{date:new Date("2023-05-21"),value:12.3},{date:new Date("2023-05-28"),value:11.4},{date:new Date("2023-06-04"),value:10.2},{date:new Date("2023-06-11"),value:9.1},{date:new Date("2023-06-18"),value:8.3},{date:new Date("2023-06-25"),value:7.8},{date:new Date("2023-07-02"),value:7.1},{date:new Date("2023-07-09"),value:6.9},{date:new Date("2023-07-16"),value:7.2},{date:new Date("2023-07-23"),value:8.1},{date:new Date("2023-07-30"),value:9.3},{date:new Date("2023-08-06"),value:10.4},{date:new Date("2023-08-13"),value:11.6},{date:new Date("2023-08-20"),value:12.8},{date:new Date("2023-08-27"),value:13.9},{date:new Date("2023-09-03"),value:15.2},{date:new Date("2023-09-10"),value:16.4},{date:new Date("2023-09-17"),value:17.6},{date:new Date("2023-09-24"),value:18.9},{date:new Date("2023-10-01"),value:20.1},{date:new Date("2023-10-08"),value:21.3},{date:new Date("2023-10-15"),value:22.5},{date:new Date("2023-10-22"),value:23.7},{date:new Date("2023-10-29"),value:24.8},{date:new Date("2023-11-05"),value:25.9},{date:new Date("2023-11-12"),value:26.7},{date:new Date("2023-11-19"),value:27.8},{date:new Date("2023-11-26"),value:28.6},{date:new Date("2023-12-03"),value:29.4},{date:new Date("2023-12-10"),value:30.2},{date:new Date("2023-12-17"),value:29.8},{date:new Date("2023-12-24"),value:28.9},{date:new Date("2023-12-31"),value:29.3}]},{label:"Mars",data:[{date:new Date("2022-01-01"),value:-62},{date:new Date("2022-01-08"),value:-63},{date:new Date("2022-01-15"),value:-64},{date:new Date("2022-01-22"),value:-62},{date:new Date("2022-01-29"),value:-61},{date:new Date("2022-02-05"),value:-59},{date:new Date("2022-02-12"),value:-56},{date:new Date("2022-02-19"),value:-53},{date:new Date("2022-02-26"),value:-50},{date:new Date("2022-03-05"),value:-47},{date:new Date("2022-03-12"),value:-44},{date:new Date("2022-03-19"),value:-41},{date:new Date("2022-03-26"),value:-37},{date:new Date("2022-04-02"),value:-34},{date:new Date("2022-04-09"),value:-31},{date:new Date("2022-04-16"),value:-27},{date:new Date("2022-04-23"),value:-24},{date:new Date("2022-04-30"),value:-21},{date:new Date("2022-05-07"),value:-17},{date:new Date("2022-05-14"),value:-14},{date:new Date("2022-05-21"),value:-11},{date:new Date("2022-05-28"),value:-7},{date:new Date("2022-06-04"),value:-4},{date:new Date("2022-06-11"),value:-1},{date:new Date("2022-06-18"),value:1},{date:new Date("2022-06-25"),value:3},{date:new Date("2022-07-02"),value:6},{date:new Date("2022-07-09"),value:9},{date:new Date("2022-07-16"),value:11},{date:new Date("2022-07-23"),value:13},{date:new Date("2022-07-30"),value:16},{date:new Date("2022-08-06"),value:18},{date:new Date("2022-08-13"),value:21},{date:new Date("2022-08-20"),value:23},{date:new Date("2022-08-27"),value:21},{date:new Date("2022-09-03"),value:19},{date:new Date("2022-09-10"),value:16},{date:new Date("2022-09-17"),value:13},{date:new Date("2022-09-24"),value:9},{date:new Date("2022-10-01"),value:6},{date:new Date("2022-10-08"),value:3},{date:new Date("2022-10-15"),value:-1},{date:new Date("2022-10-22"),value:-4},{date:new Date("2022-10-29"),value:-7},{date:new Date("2022-11-05"),value:-11},{date:new Date("2022-11-12"),value:-14},{date:new Date("2022-11-19"),value:-17},{date:new Date("2022-11-26"),value:-21},{date:new Date("2022-12-03"),value:-24},{date:new Date("2022-12-10"),value:-27},{date:new Date("2022-12-17"),value:-31},{date:new Date("2022-12-24"),value:-36},{date:new Date("2022-12-31"),value:-37},{date:new Date("2023-01-01"),value:-63},{date:new Date("2023-01-08"),value:-64},{date:new Date("2023-01-15"),value:-65},{date:new Date("2023-01-22"),value:-63},{date:new Date("2023-01-29"),value:-62},{date:new Date("2023-02-05"),value:-60},{date:new Date("2023-02-12"),value:-58},{date:new Date("2023-02-19"),value:-55},{date:new Date("2023-02-26"),value:-52},{date:new Date("2023-03-05"),value:-48},{date:new Date("2023-03-12"),value:-45},{date:new Date("2023-03-19"),value:-42},{date:new Date("2023-03-26"),value:-38},{date:new Date("2023-04-02"),value:-35},{date:new Date("2023-04-09"),value:-32},{date:new Date("2023-04-16"),value:-28},{date:new Date("2023-04-23"),value:-25},{date:new Date("2023-04-30"),value:-22},{date:new Date("2023-05-07"),value:-18},{date:new Date("2023-05-14"),value:-15},{date:new Date("2023-05-21"),value:-12},{date:new Date("2023-05-28"),value:-8},{date:new Date("2023-06-04"),value:-5},{date:new Date("2023-06-11"),value:-2},{date:new Date("2023-06-18"),value:0},{date:new Date("2023-06-25"),value:2},{date:new Date("2023-07-02"),value:5},{date:new Date("2023-07-09"),value:8},{date:new Date("2023-07-16"),value:10},{date:new Date("2023-07-23"),value:12},{date:new Date("2023-07-30"),value:15},{date:new Date("2023-08-06"),value:17},{date:new Date("2023-08-13"),value:20},{date:new Date("2023-08-20"),value:22},{date:new Date("2023-08-27"),value:20},{date:new Date("2023-09-03"),value:18},{date:new Date("2023-09-10"),value:15},{date:new Date("2023-09-17"),value:12},{date:new Date("2023-09-24"),value:8},{date:new Date("2023-10-01"),value:5},{date:new Date("2023-10-08"),value:2},{date:new Date("2023-10-15"),value:-2},{date:new Date("2023-10-22"),value:-5},{date:new Date("2023-10-29"),value:-8},{date:new Date("2023-11-05"),value:-12},{date:new Date("2023-11-12"),value:-15},{date:new Date("2023-11-19"),value:-18},{date:new Date("2023-11-26"),value:-22},{date:new Date("2023-12-03"),value:-25},{date:new Date("2023-12-10"),value:-28},{date:new Date("2023-12-17"),value:-32},{date:new Date("2023-12-24"),value:-35},{date:new Date("2023-12-31"),value:-38}]}];var x=a("../charts/src/components/line-chart/stories/site-traffic-sample.ts"),o=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),u=`import React from 'react';
import LineChart from '../line-chart';
import largeValuesData from './large-values-sample';
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

// Story demonstrating Smart Formatting (formatYTick) with large values
export const SmartFormatting: StoryObj< typeof LineChart > = Template.bind( {} );
SmartFormatting.args = {
	data: largeValuesData,
	showLegend: true,
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

SmartFormatting.parameters = {
	docs: {
		description: {
			story:
				'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.',
		},
	},
};

export const BrokenLine: StoryObj< typeof LineChart > = Template.bind( {} );
BrokenLine.args = {
	...Default.args,
	margin: {
		bottom: 40,
	},
	showLegend: true,
	data: [
		{
			...webTrafficData[ 0 ],
			label: 'Vistors to compare',
			options: {
				...webTrafficData[ 0 ].options,
				seriesLineStyle: { strokeDasharray: '5 5 1' }, //specify dasharray as a string
				legendShapeStyle: {
					strokeDasharray: '5 5 1',
				},
			},
		},
		webTrafficData[ 1 ],
	],
};

BrokenLine.parameters = {
	docs: {
		description: {
			story: 'Demonstrates the option of setting a seriesLineStyle to a dash array.',
		},
	},
};

export const WithStartGlyphs: StoryObj< typeof LineChart > = Template.bind( {} );
WithStartGlyphs.args = {
	...Default.args,
	withStartGlyphs: true,
};

export const DateStringFormats: StoryObj< typeof LineChart > = {
	render: () => {
		return (
			<LineChart
				data={ [
					{
						label: 'String Dates',
						data: [
							{ dateString: '2024-01-01', value: 10 },
							{ dateString: '2024-01-02', value: 20 },
							{ dateString: '2024-01-03 00:00:00', value: 15 },
							{ dateString: '2024-01-04', value: 25 },
							{ dateString: '2024-01-05 00:00', value: 30 },
						],
						options: {},
					},
				] }
				withGradientFill={ false }
			/>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					"Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:\\n" +
					'- Simple date strings (YYYY-MM-DD)\\n' +
					'- Date with time (YYYY-MM-DD 00:00:00)\\n' +
					'- Date with time (YYYY-MM-DD 00:00)\\n' +
					'- ISO format (YYYY-MM-DDT00:00:00)\\n' +
					'- UTC format (YYYY-MM-DDT00:00:00Z)\\n' +
					'- Timezone offset (YYYY-MM-DDT00:00:00\xB1HH:mm)\\n',
			},
		},
	},
};
`,c={Default:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},SingleSeries:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},WithoutTooltip:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},CustomDimensions:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},WithLegend:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},WithVerticalLegend:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},FixedDimensions:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},GridientFilled:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},ErrorStates:{startLoc:{col:27,line:120},endLoc:{col:1,line:195},startBody:{col:27,line:120},endBody:{col:1,line:195}},WithoutSmoothing:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},CustomTooltips:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},WithPointerEvents:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},CurveTypes:{startLoc:{col:26,line:248},endLoc:{col:1,line:338},startBody:{col:26,line:248},endBody:{col:1,line:338}},SmartFormatting:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},BrokenLine:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},WithStartGlyphs:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},DateStringFormats:{startLoc:{col:33,line:400},endLoc:{col:1,line:433},startBody:{col:33,line:400},endBody:{col:1,line:433}}};const f={title:"JS Packages/Charts/Types/Line Chart",component:v.A,parameters:{storySource:{source:`/* wp:polyfill */
/* wp:polyfill esnext.iterator.map */
import React from 'react';
import LineChart from '../line-chart';
import largeValuesData from './large-values-sample';
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
};

// Story demonstrating Smart Formatting (formatYTick) with large values
export const SmartFormatting = Template.bind({});
SmartFormatting.args = {
  data: largeValuesData,
  showLegend: true,
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
SmartFormatting.parameters = {
  docs: {
    description: {
      story: 'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'
    }
  }
};
export const BrokenLine = Template.bind({});
BrokenLine.args = {
  ...Default.args,
  margin: {
    bottom: 40
  },
  showLegend: true,
  data: [{
    ...webTrafficData[0],
    label: 'Vistors to compare',
    options: {
      ...webTrafficData[0].options,
      seriesLineStyle: {
        strokeDasharray: '5 5 1'
      },
      //specify dasharray as a string
      legendShapeStyle: {
        strokeDasharray: '5 5 1'
      }
    }
  }, webTrafficData[1]]
};
BrokenLine.parameters = {
  docs: {
    description: {
      story: 'Demonstrates the option of setting a seriesLineStyle to a dash array.'
    }
  }
};
export const WithStartGlyphs = Template.bind({});
WithStartGlyphs.args = {
  ...Default.args,
  withStartGlyphs: true
};
export const DateStringFormats = {
  render: () => {
    return /*#__PURE__*/_jsx(LineChart, {
      data: [{
        label: 'String Dates',
        data: [{
          dateString: '2024-01-01',
          value: 10
        }, {
          dateString: '2024-01-02',
          value: 20
        }, {
          dateString: '2024-01-03 00:00:00',
          value: 15
        }, {
          dateString: '2024-01-04',
          value: 25
        }, {
          dateString: '2024-01-05 00:00',
          value: 30
        }],
        options: {}
      }],
      withGradientFill: false
    });
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:\\n" + '- Simple date strings (YYYY-MM-DD)\\n' + '- Date with time (YYYY-MM-DD 00:00:00)\\n' + '- Date with time (YYYY-MM-DD 00:00)\\n' + '- ISO format (YYYY-MM-DDT00:00:00)\\n' + '- UTC format (YYYY-MM-DDT00:00:00Z)\\n' + '- Timezone offset (YYYY-MM-DDT00:00:00\xB1HH:mm)\\n'
      }
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"single-series":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"without-tooltip":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"custom-dimensions":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"with-legend":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"with-vertical-legend":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"fixed-dimensions":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"gridient-filled":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"error-states":{startLoc:{col:27,line:120},endLoc:{col:1,line:195},startBody:{col:27,line:120},endBody:{col:1,line:195}},"without-smoothing":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"custom-tooltips":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"with-pointer-events":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"curve-types":{startLoc:{col:26,line:248},endLoc:{col:1,line:338},startBody:{col:26,line:248},endBody:{col:1,line:338}},"smart-formatting":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"broken-line":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"with-start-glyphs":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"date-string-formats":{startLoc:{col:33,line:400},endLoc:{col:1,line:433},startBody:{col:33,line:400},endBody:{col:1,line:433}}}},layout:"centered"},decorators:[P=>(0,o.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,o.jsx)(P,{})})]},n=P=>(0,o.jsx)(v.A,{...P}),t=n.bind({});t.args={data:A,showLegend:!1,legendOrientation:"horizontal",withGradientFill:!1,smoothing:!0,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}}};const h=n.bind({});h.args={data:[A[0]]};const y=n.bind({});y.args={...t.args,withTooltips:!1};const _=n.bind({});_.args={width:800,height:400,data:A};const p=n.bind({});p.args={...t.args,showLegend:!0};const T=n.bind({});T.args={...t.args,showLegend:!0,legendOrientation:"vertical"};const i=n.bind({});i.args={width:800,height:400,data:A,withTooltips:!0},i.parameters={docs:{description:{story:"Line chart with fixed dimensions that override the responsive behavior."}}};const r=n.bind({});r.args={...t.args,margin:void 0,data:x.A,withGradientFill:!0,options:{axis:{y:{orientation:"right"}}}};const l={render:()=>(0,o.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Empty Data"}),(0,o.jsx)(v.A,{width:300,height:200,data:[]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Invalid Date Values"}),(0,o.jsx)(v.A,{width:300,height:200,data:[{label:"Invalid Dates",data:[{date:new Date("invalid"),value:10},{date:new Date("2024-01-02"),value:20}],options:{}}]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Invalid Values"}),(0,o.jsx)(v.A,{width:300,height:200,data:[{label:"Invalid Values",data:[{date:new Date("2024-01-01"),value:NaN},{date:new Date("2024-01-02"),value:null}],options:{}}]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Single Data Point"}),(0,o.jsx)(v.A,{width:300,height:200,data:[{label:"Single Point",data:[{date:new Date("2024-01-01"),value:100}],options:{}}]})]})]}),parameters:{docs:{description:{story:"Examples of how the line chart handles various error states and edge cases."}}}},L=n.bind({});L.args={...t.args,smoothing:!1};const g=n.bind({});g.args={...t.args,renderTooltip:({tooltipData:P})=>{const V=P?.nearestDatum?.datum;if(!V)return null;const H=Object.entries(P?.datumByKey||{}).map(([R,{datum:N}])=>({key:R,value:N.value})).sort((R,N)=>N.value-R.value);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("h3",{children:[V?.date?.toLocaleDateString()," \u{1F4AF} "]}),(0,o.jsx)("table",{style:{border:"1px solid black",borderCollapse:"collapse"},children:H.map(R=>(0,o.jsxs)("tr",{style:{border:"1px solid black"},children:[(0,o.jsx)("td",{style:{border:"1px solid black"},children:R.key}),(0,o.jsx)("td",{children:R.value})]},R.key))})]})}};const D=n.bind({});D.args={...t.args,onPointerDown:({datum:P})=>alert("Pointer down:"+JSON.stringify(P))};const M={render:()=>{const P=[{label:"Sample Series",data:[{date:new Date("2024-01-01"),value:10},{date:new Date("2024-01-02"),value:90},{date:new Date("2024-01-03"),value:85},{date:new Date("2024-01-04"),value:82},{date:new Date("2024-01-05"),value:5},{date:new Date("2024-01-06"),value:8},{date:new Date("2024-01-07"),value:10}],options:{}}];return(0,o.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Linear Curve"}),(0,o.jsx)(v.A,{width:300,height:200,data:P,curveType:"linear",showLegend:!1,withGradientFill:!1})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Smooth Curve (Catmull-Rom)"}),(0,o.jsx)(v.A,{width:300,height:200,data:P,curveType:"smooth",showLegend:!1,withGradientFill:!1})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Monotone X Curve"}),(0,o.jsx)(v.A,{width:300,height:200,data:P,curveType:"monotone",showLegend:!1,withGradientFill:!1})]})]})},parameters:{docs:{description:{story:"Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points."}}}},S=n.bind({});S.args={data:e.A,showLegend:!0,legendOrientation:"horizontal",withGradientFill:!1,smoothing:!0,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}}},S.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const E=n.bind({});E.args={...t.args,margin:{bottom:40},showLegend:!0,data:[{...x.A[0],label:"Vistors to compare",options:{...x.A[0].options,seriesLineStyle:{strokeDasharray:"5 5 1"},legendShapeStyle:{strokeDasharray:"5 5 1"}}},x.A[1]]},E.parameters={docs:{description:{story:"Demonstrates the option of setting a seriesLineStyle to a dash array."}}};const w=n.bind({});w.args={...t.args,withStartGlyphs:!0};const C={render:()=>(0,o.jsx)(v.A,{data:[{label:"String Dates",data:[{dateString:"2024-01-01",value:10},{dateString:"2024-01-02",value:20},{dateString:"2024-01-03 00:00:00",value:15},{dateString:"2024-01-04",value:25},{dateString:"2024-01-05 00:00",value:30}],options:{}}],withGradientFill:!1}),parameters:{docs:{description:{story:`Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:
- Simple date strings (YYYY-MM-DD)
- Date with time (YYYY-MM-DD 00:00:00)
- Date with time (YYYY-MM-DD 00:00)
- ISO format (YYYY-MM-DDT00:00:00)
- UTC format (YYYY-MM-DDT00:00:00Z)
- Timezone offset (YYYY-MM-DDT00:00:00\xB1HH:mm)
`}}}},W=["Default","SingleSeries","WithoutTooltip","CustomDimensions","WithLegend","WithVerticalLegend","FixedDimensions","GridientFilled","ErrorStates","WithoutSmoothing","CustomTooltips","WithPointerEvents","CurveTypes","SmartFormatting","BrokenLine","WithStartGlyphs","DateStringFormats"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...t.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...h.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...y.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",..._.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...p.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...T.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...i.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...r.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...L.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...g.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...D.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...S.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...E.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...w.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <LineChart data={[{
      label: 'String Dates',
      data: [{
        dateString: '2024-01-01',
        value: 10
      }, {
        dateString: '2024-01-02',
        value: 20
      }, {
        dateString: '2024-01-03 00:00:00',
        value: 15
      }, {
        dateString: '2024-01-04',
        value: 25
      }, {
        dateString: '2024-01-05 00:00',
        value: 30
      }],
      options: {}
    }]} withGradientFill={false} />;
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:\\n" + '- Simple date strings (YYYY-MM-DD)\\n' + '- Date with time (YYYY-MM-DD 00:00:00)\\n' + '- Date with time (YYYY-MM-DD 00:00)\\n' + '- ISO format (YYYY-MM-DDT00:00:00)\\n' + '- UTC format (YYYY-MM-DDT00:00:00Z)\\n' + '- Timezone offset (YYYY-MM-DDT00:00:00\xB1HH:mm)\\n'
      }
    }
  }
}`,...C.parameters?.docs?.source}}}},"../charts/src/components/legend/base-legend.tsx":(I,F,a)=>{a.d(F,{$:()=>i});var b=a("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),v=a("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendItem.js"),e=a("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendShape.js"),O=a("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendLabel.js"),A=a("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),x=a("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=a("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=a.n(u),d=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss"),f={};f.insert="head",f.singleton=!1;var n=c()(d.A,f);const t=d.A.locals||{};function h(r){return r&&typeof r=="object"&&"value"in r&&typeof r.value<"u"?r.value:r}function y(r){return String(h(r))}function _({scale:r,labelFormat:l}){return(L,g)=>({datum:L,index:g,text:`${l(L,g)}`,value:r(L)})}var p=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const T={horizontal:"row",vertical:"column"},i=({items:r,className:l,orientation:L="horizontal",shape:g="rect",fill:D=y,size:M=y,labelFormat:S=h,labelTransform:E=_,shapeWidth:w=16,shapeHeight:C=16,shapeMargin:W="2px 4px 2px 0",labelAlign:P="left",labelFlex:V="1",labelMargin:H="0 4px",itemMargin:R="0",itemDirection:N="row",legendLabelProps:X,...G})=>{const U=(0,A.A)({domain:r.map(m=>m.label),range:r.map(m=>m.color)}),K=U.domain(),s=(0,o.useCallback)(({index:m})=>r[m]?.shapeStyle??{},[r]);return(0,p.jsx)(b.A,{scale:U,labelFormat:S,labelTransform:E,children:m=>(0,p.jsx)("div",{role:"list","data-testid":`legend-${L}`,className:(0,x.A)(t.legend,t[`legend--${L}`],l),style:{flexDirection:T[L]},children:m.map((B,j)=>(0,p.jsxs)(v.A,{className:t["legend-item"],"data-testid":"legend-item",margin:R,flexDirection:N,...G,children:[(0,p.jsx)(e.A,{shape:g,height:C,width:w,margin:W,item:K[j],itemIndex:j,label:B,fill:D,size:M,shapeStyle:s}),(0,p.jsxs)(O.A,{label:B.text,flex:V,margin:H,align:P,className:t["legend-item-label"],...X,children:[B.text,r.find(Y=>Y.label===B.text)?.value&&(0,p.jsx)("span",{className:t["legend-item-value"],children:r.find(Y=>Y.label===B.text)?.value})]})]},`legend-${B.text}-${j}`))})})};try{i.displayName="BaseLegend",i.__docgenInfo={description:"",displayName:"BaseLegend",props:{size:{defaultValue:null,description:"Legend item size accessor function.",name:"size",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string | number"}},className:{defaultValue:null,description:"Classname to be applied to legend container.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Optional render function override.",name:"children",required:!1,type:{name:"(labels: { datum: any; index: number; text: string; value?: any; }[]) => React.ReactNode"}},style:{defaultValue:null,description:"Styles to be applied to the legend container.",name:"style",required:!1,type:{name:"React.CSSProperties"}},fill:{defaultValue:null,description:"Legend item fill accessor function.",name:"fill",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string"}},domain:{defaultValue:null,description:"Legend domain.",name:"domain",required:!1,type:{name:"any[]"}},shapeWidth:{defaultValue:{value:"16"},description:"Width of the legend shape.",name:"shapeWidth",required:!1,type:{name:"string | number"}},shapeHeight:{defaultValue:{value:"16"},description:"Height of the legend shape.",name:"shapeHeight",required:!1,type:{name:"string | number"}},shapeMargin:{defaultValue:{value:"2px 4px 2px 0"},description:"Margin of the legend shape.",name:"shapeMargin",required:!1,type:{name:"string | number"}},labelAlign:{defaultValue:{value:"left"},description:"Flex-box alignment of legend item labels.",name:"labelAlign",required:!1,type:{name:"string"}},labelFlex:{defaultValue:{value:"1"},description:"Flex-box flex of legend item labels.",name:"labelFlex",required:!1,type:{name:"string | number"}},labelMargin:{defaultValue:{value:"0 4px"},description:"Margin of legend item labels.",name:"labelMargin",required:!1,type:{name:"string | number"}},itemMargin:{defaultValue:{value:"0"},description:"Margin of legend items.",name:"itemMargin",required:!1,type:{name:"string | number"}},itemDirection:{defaultValue:{value:"row"},description:"Flex direction of legend items.",name:"itemDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},shape:{defaultValue:{value:"rect"},description:"Legend shape string preset or Element or Component.",name:"shape",required:!1,type:{name:"LegendShape<any, any>"}},labelFormat:{defaultValue:null,description:"Given a legend item and its index, returns an item label.",name:"labelFormat",required:!1,type:{name:"LabelFormatter<any>"}},labelTransform:{defaultValue:null,description:"Given the legend scale and labelFormatter, returns a label with datum, index, value, and label.",name:"labelTransform",required:!1,type:{name:"LabelFormatterFactory<ScaleOrdinal<any, any, never>>"}},legendLabelProps:{defaultValue:null,description:"Additional props to be set on LegendLabel.",name:"legendLabelProps",required:!1,type:{name:"Partial<LegendLabelProps>"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItem[]"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:i.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../charts/src/components/line-chart/line-chart.tsx":(I,F,a)=>{a.d(F,{A:()=>K});var b=a("../number-formatters/src/index.ts"),v=a("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/catmullRom.js"),e=a("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/linear.js"),O=a("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/monotone.js"),A=a("../../../node_modules/.pnpm/@visx+gradient@3.12.0_react@18.3.1/node_modules/@visx/gradient/esm/gradients/LinearGradient.js"),x=a("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/context/DataContext.js"),o=a("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),u=a("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),c=a("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),d=a("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/AreaSeries.js"),f=a("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),n=a("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=a("../charts/src/providers/theme/theme-provider.tsx"),y=a("../charts/src/components/legend/base-legend.tsx"),_=a("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js"),p=a("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js"),T=a("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse.js");const i=s=>/T.*[Z]$|T.*[+-]\d{2}:?\d{2}$/.test(s),r=s=>{const m=s.trim();if(i(m)){const j=(0,_.H)(m);return(0,p.f)(j)?j:new Date(NaN)}const B=["yyyy-MM-dd","yyyy-MM-dd HH:mm:ss","yyyy-MM-dd HH:mm","yyyy-MM-dd'T'HH:mm:ss","yyyy-MM-dd'T'HH:mm:ss.SSS","yyyy-MM-dd'T'HH:mm"];for(const j of B){const Y=(0,T.qg)(m,j,new Date);if((0,p.f)(Y))return Y}return new Date(NaN)};var l=a("../charts/src/components/shared/use-chart-margin.tsx"),L=a("../charts/src/components/shared/with-responsive.tsx"),g=a("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=a.n(g),M=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss"),S={};S.insert="head",S.singleton=!1;var E=D()(M.A,S);const w=M.A.locals||{};var C=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const W=100,P=s=>{const{theme:m}=(0,t.useContext)(x.A)||{};return(0,C.jsx)("circle",{cx:s.x,cy:s.y,r:s.size,fill:s.color,stroke:m?.backgroundColor,strokeWidth:1.5,paintOrder:"fill","data-testid":`start-glyph-${s.index}`,...s.glyphStyle})},V=s=>(0,t.createElement)(P,{...s,key:s.key}),H=({data:s,index:m,color:B,glyphStyle:j,renderGlyph:Y,accessors:J})=>{const{xScale:q,yScale:ee}=(0,t.useContext)(x.A)||{};if(!q||!ee||s.data.length===0)return null;const Z=s.data[0],Q=q(J.xAccessor(Z)),ae=ee(J.yAccessor(Z));if(typeof Q!="number"||typeof ae!="number")return null;const ne=Number(j?.radius)||4;return Y({key:`start-glyph-${s.label}`,index:m,datum:Z,color:B,size:ne,x:Q,y:ae,glyphStyle:j})},R=(s,m)=>{if(!s)return m?v.A:e.A;switch(s){case"smooth":return v.A;case"monotone":return O.G;case"linear":return e.A;default:return e.A}},N=({tooltipData:s})=>{const m=s?.nearestDatum?.datum;if(!m)return null;const B=Object.entries(s?.datumByKey||{}).map(([j,{datum:Y}])=>({key:j,value:Y.value})).sort((j,Y)=>Y.value-j.value);return(0,C.jsxs)("div",{className:w["line-chart__tooltip"],children:[(0,C.jsx)("div",{className:w["line-chart__tooltip-date"],children:m.date?.toLocaleDateString()}),B.map(j=>(0,C.jsxs)("div",{className:w["line-chart__tooltip-row"],children:[(0,C.jsxs)("span",{className:w["line-chart__tooltip-label"],children:[j.key,":"]}),(0,C.jsx)("span",{className:w["line-chart__tooltip-value"],children:j.value})]},j.key))]})},X=s=>new Date(s).toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=s=>s?.length?s.some(B=>B.data.some(j=>isNaN(j.value)||j.value===null||j.value===void 0||isNaN(j.date.getTime())))?"Invalid data":null:"No data available",U=({data:s,width:m,height:B,className:j,margin:Y,withTooltips:J=!0,showLegend:q=!1,legendOrientation:ee="horizontal",legendShape:Z="line",withGradientFill:Q=!1,smoothing:ae=!0,curveType:ne,renderTooltip:$=N,withStartGlyphs:oe=!1,options:te={},onPointerDown:le=void 0,onPointerUp:re=void 0,onPointerMove:ce=void 0,onPointerOut:me=void 0})=>{const ie=(0,h.RW)(),de=(0,h.Ox)(s),pe=(0,t.useId)(),se=(0,t.useMemo)(()=>s.map(k=>({...k,data:k.data.map(z=>({...z,date:z.date?z.date:r(z.dateString)})).sort((z,he)=>z.date.getTime()-he.date.getTime())})),[s]),ue=(0,t.useMemo)(()=>({axis:{x:{orientation:"bottom",numTicks:Math.min(se[0]?.data.length,Math.ceil(m/W)),tickFormat:X,...te?.axis?.x},y:{orientation:"left",numTicks:4,tickFormat:b.qe,...te?.axis?.y}},xScale:{type:"time",...te?.xScale},yScale:{type:"linear",nice:!0,zero:!1,...te?.yScale}}),[te,se,m]),De=(0,l.a)(B,ue,se,de),ve=G(se);if(ve)return(0,C.jsx)("div",{className:(0,n.A)("line-chart",w["line-chart"]),children:ve});const we=se.map((k,z)=>({label:k.label,value:"",color:k?.options?.stroke??ie.colors[z%ie.colors.length],shapeStyle:k?.options?.legendShapeStyle??ie.legendShapeStyles?.[z]??{}})),ge={xAccessor:k=>k?.date,yAccessor:k=>k?.value};return(0,C.jsxs)("div",{className:(0,n.A)("line-chart",w["line-chart"],j),"data-testid":"line-chart",role:"img","aria-label":"line chart",children:[(0,C.jsxs)(o.A,{theme:de,width:m,height:B,margin:{...De,...Y},xScale:ue.xScale,yScale:ue.yScale,onPointerDown:le,onPointerUp:re,onPointerMove:ce,onPointerOut:me,pointerEventsDataKey:"nearest",children:[(0,C.jsx)(u.A,{columns:!1,numTicks:4}),(0,C.jsx)(c.A,{...ue.axis.x}),(0,C.jsx)(c.A,{...ue.axis.y}),se.map((k,z)=>{const he=k.options?.stroke??de.colors[z%de.colors.length],fe=k.options?.seriesLineStyle??ie?.seriesLineStyles?.[z%ie.seriesLineStyles.length]??{};return(0,C.jsxs)("g",{children:[oe&&(0,C.jsx)(H,{index:z,data:k,color:he,renderGlyph:V,accessors:ge}),Q&&(0,C.jsx)(A.A,{id:`area-gradient-${pe}-${z+1}`,from:he,fromOpacity:.4,toOpacity:.1,to:de.backgroundColor,...k.options?.gradient,"data-testid":"line-gradient"}),(0,C.jsx)(d.A,{dataKey:k?.label,data:k.data,...ge,fill:Q?`url(#area-gradient-${pe}-${z+1})`:"transparent",renderLine:!0,curve:R(ne,ae),lineProps:fe},k?.label)]},k?.label||z)}),J&&(0,C.jsx)(f.A,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,showSeriesGlyphs:!0,renderTooltip:$})]}),q&&(0,C.jsx)(y.$,{items:we,orientation:ee,className:w["line-chart-legend"],shape:Z})]})},K=(0,L.F)(U);try{linechart.displayName="linechart",linechart.__docgenInfo={description:"",displayName:"linechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:{value:"undefined"},description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"true"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"line"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},renderTooltip:{defaultValue:{value:`( {
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
}`},description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withGradientFill:{defaultValue:{value:"false"},description:"",name:"withGradientFill",required:!1,type:{name:"boolean"}},smoothing:{defaultValue:{value:"true"},description:"",name:"smoothing",required:!1,type:{name:"boolean"}},curveType:{defaultValue:null,description:"",name:"curveType",required:!1,type:{name:"enum",value:[{value:'"linear"'},{value:'"smooth"'},{value:'"monotone"'}]}},withStartGlyphs:{defaultValue:{value:"false"},description:"",name:"withStartGlyphs",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/line-chart.tsx#linechart"]={docgenInfo:linechart.__docgenInfo,name:"linechart",path:"../charts/src/components/line-chart/line-chart.tsx#linechart"})}catch{}},"../charts/src/components/line-chart/stories/large-values-sample.ts":(I,F,a)=>{a.d(F,{A:()=>v});const v=[{label:"Revenue (Billions)",data:[{date:new Date("2024-01-01"),value:12e8},{date:new Date("2024-02-01"),value:145e7},{date:new Date("2024-03-01"),value:168e7},{date:new Date("2024-04-01"),value:21e8},{date:new Date("2024-05-01"),value:235e7},{date:new Date("2024-06-01"),value:28e8}],options:{stroke:"#3858E9"}},{label:"Users (Millions)",data:[{date:new Date("2024-01-01"),value:45e6},{date:new Date("2024-02-01"),value:52e6},{date:new Date("2024-03-01"),value:48e6},{date:new Date("2024-04-01"),value:61e6},{date:new Date("2024-05-01"),value:75e6},{date:new Date("2024-06-01"),value:89e6}],options:{stroke:"#00BA37"}}]},"../charts/src/components/line-chart/stories/site-traffic-sample.ts":(I,F,a)=>{a.d(F,{A:()=>b});const b=[{label:"Views",options:{stroke:"#069e08"},data:[{date:new Date("2024-01-01"),value:2558},{date:new Date("2024-01-02"),value:3399},{date:new Date("2024-01-03"),value:2260},{date:new Date("2024-01-04"),value:2331},{date:new Date("2024-01-05"),value:3302},{date:new Date("2024-01-06"),value:1852},{date:new Date("2024-01-07"),value:2607},{date:new Date("2024-01-08"),value:2804},{date:new Date("2024-01-09"),value:3260},{date:new Date("2024-01-10"),value:2941},{date:new Date("2024-01-11"),value:2857},{date:new Date("2024-01-12"),value:3461},{date:new Date("2024-01-13"),value:1548},{date:new Date("2024-01-14"),value:2739},{date:new Date("2024-01-15"),value:3288},{date:new Date("2024-01-16"),value:2869},{date:new Date("2024-01-17"),value:2590},{date:new Date("2024-01-18"),value:2609},{date:new Date("2024-01-19"),value:2648},{date:new Date("2024-01-20"),value:1805},{date:new Date("2024-01-21"),value:2531},{date:new Date("2024-01-22"),value:3605},{date:new Date("2024-01-23"),value:2366},{date:new Date("2024-01-24"),value:2782},{date:new Date("2024-01-25"),value:2885},{date:new Date("2024-01-26"),value:2918},{date:new Date("2024-01-27"),value:2518},{date:new Date("2024-01-28"),value:2378},{date:new Date("2024-01-29"),value:2714},{date:new Date("2024-01-30"),value:3279}]},{label:"Visitors",options:{stroke:"rgb(230, 139, 40)"},data:[{date:new Date("2024-01-01"),value:2412},{date:new Date("2024-01-02"),value:1899},{date:new Date("2024-01-03"),value:2061},{date:new Date("2024-01-04"),value:1939},{date:new Date("2024-01-05"),value:1986},{date:new Date("2024-01-06"),value:1560},{date:new Date("2024-01-07"),value:1741},{date:new Date("2024-01-08"),value:2120},{date:new Date("2024-01-09"),value:1889},{date:new Date("2024-01-10"),value:1666},{date:new Date("2024-01-11"),value:2396},{date:new Date("2024-01-12"),value:2276},{date:new Date("2024-01-13"),value:1218},{date:new Date("2024-01-14"),value:1228},{date:new Date("2024-01-15"),value:1600},{date:new Date("2024-01-16"),value:1814},{date:new Date("2024-01-17"),value:1701},{date:new Date("2024-01-18"),value:1507},{date:new Date("2024-01-19"),value:1833},{date:new Date("2024-01-20"),value:1407},{date:new Date("2024-01-21"),value:965},{date:new Date("2024-01-22"),value:2288},{date:new Date("2024-01-23"),value:2135},{date:new Date("2024-01-24"),value:1824},{date:new Date("2024-01-25"),value:2219},{date:new Date("2024-01-26"),value:1918},{date:new Date("2024-01-27"),value:1101},{date:new Date("2024-01-28"),value:1695},{date:new Date("2024-01-29"),value:1615},{date:new Date("2024-01-30"),value:2056}]}]},"../charts/src/components/shared/use-chart-margin.tsx":(I,F,a)=>{a.d(F,{a:()=>x});var b=a("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),v=a("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),e=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),O=a("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const A=(o,u,c)=>{const d=o.map(n=>u(n,0,[])),f=d.reduce((n,t)=>n.length>=t.length?n:t,d[0]);return(0,O.A)(f,c)},x=(o,u,c,d,f=!1)=>{const n=(0,e.useMemo)(()=>{const t=c.flatMap(p=>p.data);if(f)return t.map(p=>p.label||u.axis?.y?.tickFormat(p.date.getTime(),0,[]));const h=Math.min(...t.map(p=>p.value)),y=Math.max(...t.map(p=>p.value)),_=(0,b.A)({...u.yScale,domain:[h,y],range:[o,0]});return(0,v.A)(_,u.axis?.y?.numTicks)},[u,c,o,f]);return(0,e.useMemo)(()=>{const t={top:10,right:20,bottom:20,left:20},h=40,y=u.axis?.y?.orientation,_=y==="right"?d.axisStyles.y.right:d.axisStyles.y.left,T=(A(n,u.axis?.y?.tickFormat,_.axisLabel)??h)+(_?.tickLength??0);return y==="right"?t.right=T:t.left=T,u.axis?.x?.orientation==="top"&&(t.top=20,t.bottom=10),t},[u,d,n])}},"../charts/src/components/shared/with-responsive.tsx":(I,F,a)=>{a.d(F,{F:()=>e});var b=a("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),v=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function e(O,A){const{maxWidth:x=1200,aspectRatio:o=.5,debounceTime:u=50}=A||{};return function(d){const{parentRef:f,width:n}=(0,b.A)({debounceTime:u,enableDebounceLeadingCall:!0,initialSize:{width:600,height:400}}),t=n?Math.min(n,x):600,h=d.height??t*o;return(0,v.jsx)("div",{ref:f,style:{width:"100%"},children:(0,v.jsx)(O,{width:t,height:h,size:t,...d})})}}try{e.displayName="withResponsive",e.__docgenInfo={description:`A higher-order component that provides responsive dimensions
to the wrapped chart component using useParentSize from`,displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/with-responsive.tsx#withResponsive"]={docgenInfo:e.__docgenInfo,name:"withResponsive",path:"../charts/src/components/shared/with-responsive.tsx#withResponsive"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(I,F,a)=>{a.d(F,{NP:()=>u,Ox:()=>o,RW:()=>x});var b=a("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),v=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=a("../charts/src/providers/theme/themes.ts"),O=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const A=(0,v.createContext)(e.zQ),x=()=>(0,v.useContext)(A),o=c=>{const d=x();return(0,v.useMemo)(()=>{const f=(c??[]).map(n=>n.options?.stroke).filter(n=>!!n);return(0,b.A)({...d,colors:[...f,...d.colors??[]]})},[d,c])},u=({theme:c={},children:d})=>{const f={...e.zQ,...c};return(0,O.jsx)(A.Provider,{value:f,children:d})};try{u.displayName="ThemeProvider",u.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:u.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{x.displayName="useChartTheme",x.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:x.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}try{o.displayName="useXYChartTheme",o.__docgenInfo={description:"",displayName:"useXYChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"]={docgenInfo:o.__docgenInfo,name:"useXYChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(I,F,a)=>{a.d(F,{QI:()=>v,pk:()=>e,zQ:()=>b});const b={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}},v={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}},e={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss":(I,F,a)=>{a.d(F,{A:()=>x});var b=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=a.n(b),e=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),O=a.n(e),A=O()(v());A.push([I.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;font-size:.875rem}.AyocUvYOPM3rztxeHhaJ{color:var(--jp-gray-80, #2c3338);display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),A.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const x=A},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss":(I,F,a)=>{a.d(F,{A:()=>x});var b=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=a.n(b),e=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),O=a.n(e),A=O()(v());A.push([I.id,".SVlAnnWw2ot8McusfLcw{position:relative}.SVlAnnWw2ot8McusfLcw svg{overflow:visible}.WG8wpgeFR6IoBhr41Y3z{background:#fff;padding:.5rem}.t5p9YWtrovlLQm8WlrGF{font-weight:700;padding-bottom:10px}.FPtDJMJR2GRu0df3iYy6{display:flex;align-items:center;padding:4px 0;justify-content:space-between}.xTJS98Xw7HFAGWFwzsgd{font-weight:500;padding-right:1rem}.visx-tooltip-glyph svg{width:10px;height:10px}",""]),A.locals={"line-chart":"SVlAnnWw2ot8McusfLcw","line-chart__tooltip":"WG8wpgeFR6IoBhr41Y3z","line-chart__tooltip-date":"t5p9YWtrovlLQm8WlrGF","line-chart__tooltip-row":"FPtDJMJR2GRu0df3iYy6","line-chart__tooltip-label":"xTJS98Xw7HFAGWFwzsgd"};const x=A},"../../../node_modules/.pnpm/d3-path@1.0.9/node_modules/d3-path/src/path.js":(I,F,a)=>{a.d(F,{A:()=>o});var b=Math.PI,v=2*b,e=1e-6,O=v-e;function A(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function x(){return new A}A.prototype=x.prototype={constructor:A,moveTo:function(u,c){this._+="M"+(this._x0=this._x1=+u)+","+(this._y0=this._y1=+c)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(u,c){this._+="L"+(this._x1=+u)+","+(this._y1=+c)},quadraticCurveTo:function(u,c,d,f){this._+="Q"+ +u+","+ +c+","+(this._x1=+d)+","+(this._y1=+f)},bezierCurveTo:function(u,c,d,f,n,t){this._+="C"+ +u+","+ +c+","+ +d+","+ +f+","+(this._x1=+n)+","+(this._y1=+t)},arcTo:function(u,c,d,f,n){u=+u,c=+c,d=+d,f=+f,n=+n;var t=this._x1,h=this._y1,y=d-u,_=f-c,p=t-u,T=h-c,i=p*p+T*T;if(n<0)throw new Error("negative radius: "+n);if(this._x1===null)this._+="M"+(this._x1=u)+","+(this._y1=c);else if(i>e)if(!(Math.abs(T*y-_*p)>e)||!n)this._+="L"+(this._x1=u)+","+(this._y1=c);else{var r=d-t,l=f-h,L=y*y+_*_,g=r*r+l*l,D=Math.sqrt(L),M=Math.sqrt(i),S=n*Math.tan((b-Math.acos((L+i-g)/(2*D*M)))/2),E=S/M,w=S/D;Math.abs(E-1)>e&&(this._+="L"+(u+E*p)+","+(c+E*T)),this._+="A"+n+","+n+",0,0,"+ +(T*r>p*l)+","+(this._x1=u+w*y)+","+(this._y1=c+w*_)}},arc:function(u,c,d,f,n,t){u=+u,c=+c,d=+d,t=!!t;var h=d*Math.cos(f),y=d*Math.sin(f),_=u+h,p=c+y,T=1^t,i=t?f-n:n-f;if(d<0)throw new Error("negative radius: "+d);this._x1===null?this._+="M"+_+","+p:(Math.abs(this._x1-_)>e||Math.abs(this._y1-p)>e)&&(this._+="L"+_+","+p),d&&(i<0&&(i=i%v+v),i>O?this._+="A"+d+","+d+",0,1,"+T+","+(u-h)+","+(c-y)+"A"+d+","+d+",0,1,"+T+","+(this._x1=_)+","+(this._y1=p):i>e&&(this._+="A"+d+","+d+",0,"+ +(i>=b)+","+T+","+(this._x1=u+d*Math.cos(n))+","+(this._y1=c+d*Math.sin(n))))},rect:function(u,c,d,f){this._+="M"+(this._x0=this._x1=+u)+","+(this._y0=this._y1=+c)+"h"+ +d+"v"+ +f+"h"+-d+"Z"},toString:function(){return this._}};const o=x},"../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js":(I,F,a)=>{a.d(F,{A:()=>f});var b=a("../../../node_modules/.pnpm/d3-path@1.0.9/node_modules/d3-path/src/path.js"),v=a("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/constant.js"),e=a("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/math.js");function O(n){return n.innerRadius}function A(n){return n.outerRadius}function x(n){return n.startAngle}function o(n){return n.endAngle}function u(n){return n&&n.padAngle}function c(n,t,h,y,_,p,T,i){var r=h-n,l=y-t,L=T-_,g=i-p,D=g*r-L*l;if(!(D*D<e.Ni))return D=(L*(t-p)-g*(n-_))/D,[n+D*r,t+D*l]}function d(n,t,h,y,_,p,T){var i=n-h,r=t-y,l=(T?p:-p)/(0,e.RZ)(i*i+r*r),L=l*r,g=-l*i,D=n+L,M=t+g,S=h+L,E=y+g,w=(D+S)/2,C=(M+E)/2,W=S-D,P=E-M,V=W*W+P*P,H=_-p,R=D*E-S*M,N=(P<0?-1:1)*(0,e.RZ)((0,e.T9)(0,H*H*V-R*R)),X=(R*P-W*N)/V,G=(-R*W-P*N)/V,U=(R*P+W*N)/V,K=(-R*W+P*N)/V,s=X-w,m=G-C,B=U-w,j=K-C;return s*s+m*m>B*B+j*j&&(X=U,G=K),{cx:X,cy:G,x01:-L,y01:-g,x11:X*(_/H-1),y11:G*(_/H-1)}}function f(){var n=O,t=A,h=(0,v.A)(0),y=null,_=x,p=o,T=u,i=null;function r(){var l,L,g=+n.apply(this,arguments),D=+t.apply(this,arguments),M=_.apply(this,arguments)-e.TW,S=p.apply(this,arguments)-e.TW,E=(0,e.tn)(S-M),w=S>M;if(i||(i=l=(0,b.A)()),D<g&&(L=D,D=g,g=L),!(D>e.Ni))i.moveTo(0,0);else if(E>e.FA-e.Ni)i.moveTo(D*(0,e.gn)(M),D*(0,e.F8)(M)),i.arc(0,0,D,M,S,!w),g>e.Ni&&(i.moveTo(g*(0,e.gn)(S),g*(0,e.F8)(S)),i.arc(0,0,g,S,M,w));else{var C=M,W=S,P=M,V=S,H=E,R=E,N=T.apply(this,arguments)/2,X=N>e.Ni&&(y?+y.apply(this,arguments):(0,e.RZ)(g*g+D*D)),G=(0,e.jk)((0,e.tn)(D-g)/2,+h.apply(this,arguments)),U=G,K=G,s,m;if(X>e.Ni){var B=(0,e.qR)(X/g*(0,e.F8)(N)),j=(0,e.qR)(X/D*(0,e.F8)(N));(H-=B*2)>e.Ni?(B*=w?1:-1,P+=B,V-=B):(H=0,P=V=(M+S)/2),(R-=j*2)>e.Ni?(j*=w?1:-1,C+=j,W-=j):(R=0,C=W=(M+S)/2)}var Y=D*(0,e.gn)(C),J=D*(0,e.F8)(C),q=g*(0,e.gn)(V),ee=g*(0,e.F8)(V);if(G>e.Ni){var Z=D*(0,e.gn)(W),Q=D*(0,e.F8)(W),ae=g*(0,e.gn)(P),ne=g*(0,e.F8)(P),$;if(E<e.pi&&($=c(Y,J,ae,ne,Z,Q,q,ee))){var oe=Y-$[0],te=J-$[1],le=Z-$[0],re=Q-$[1],ce=1/(0,e.F8)((0,e.HQ)((oe*le+te*re)/((0,e.RZ)(oe*oe+te*te)*(0,e.RZ)(le*le+re*re)))/2),me=(0,e.RZ)($[0]*$[0]+$[1]*$[1]);U=(0,e.jk)(G,(g-me)/(ce-1)),K=(0,e.jk)(G,(D-me)/(ce+1))}}R>e.Ni?K>e.Ni?(s=d(ae,ne,Y,J,D,K,w),m=d(Z,Q,q,ee,D,K,w),i.moveTo(s.cx+s.x01,s.cy+s.y01),K<G?i.arc(s.cx,s.cy,K,(0,e.FP)(s.y01,s.x01),(0,e.FP)(m.y01,m.x01),!w):(i.arc(s.cx,s.cy,K,(0,e.FP)(s.y01,s.x01),(0,e.FP)(s.y11,s.x11),!w),i.arc(0,0,D,(0,e.FP)(s.cy+s.y11,s.cx+s.x11),(0,e.FP)(m.cy+m.y11,m.cx+m.x11),!w),i.arc(m.cx,m.cy,K,(0,e.FP)(m.y11,m.x11),(0,e.FP)(m.y01,m.x01),!w))):(i.moveTo(Y,J),i.arc(0,0,D,C,W,!w)):i.moveTo(Y,J),!(g>e.Ni)||!(H>e.Ni)?i.lineTo(q,ee):U>e.Ni?(s=d(q,ee,Z,Q,g,-U,w),m=d(Y,J,ae,ne,g,-U,w),i.lineTo(s.cx+s.x01,s.cy+s.y01),U<G?i.arc(s.cx,s.cy,U,(0,e.FP)(s.y01,s.x01),(0,e.FP)(m.y01,m.x01),!w):(i.arc(s.cx,s.cy,U,(0,e.FP)(s.y01,s.x01),(0,e.FP)(s.y11,s.x11),!w),i.arc(0,0,g,(0,e.FP)(s.cy+s.y11,s.cx+s.x11),(0,e.FP)(m.cy+m.y11,m.cx+m.x11),w),i.arc(m.cx,m.cy,U,(0,e.FP)(m.y11,m.x11),(0,e.FP)(m.y01,m.x01),!w))):i.arc(0,0,g,V,P,w)}if(i.closePath(),l)return i=null,l+""||null}return r.centroid=function(){var l=(+n.apply(this,arguments)+ +t.apply(this,arguments))/2,L=(+_.apply(this,arguments)+ +p.apply(this,arguments))/2-e.pi/2;return[(0,e.gn)(L)*l,(0,e.F8)(L)*l]},r.innerRadius=function(l){return arguments.length?(n=typeof l=="function"?l:(0,v.A)(+l),r):n},r.outerRadius=function(l){return arguments.length?(t=typeof l=="function"?l:(0,v.A)(+l),r):t},r.cornerRadius=function(l){return arguments.length?(h=typeof l=="function"?l:(0,v.A)(+l),r):h},r.padRadius=function(l){return arguments.length?(y=l==null?null:typeof l=="function"?l:(0,v.A)(+l),r):y},r.startAngle=function(l){return arguments.length?(_=typeof l=="function"?l:(0,v.A)(+l),r):_},r.endAngle=function(l){return arguments.length?(p=typeof l=="function"?l:(0,v.A)(+l),r):p},r.padAngle=function(l){return arguments.length?(T=typeof l=="function"?l:(0,v.A)(+l),r):T},r.context=function(l){return arguments.length?(i=l??null,r):i},r}},"../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/constant.js":(I,F,a)=>{a.d(F,{A:()=>b});function b(v){return function(){return v}}},"../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/math.js":(I,F,a)=>{a.d(F,{F8:()=>x,FA:()=>f,FP:()=>v,HQ:()=>n,Ni:()=>u,RZ:()=>o,T9:()=>O,TW:()=>d,gn:()=>e,jk:()=>A,pi:()=>c,qR:()=>t,tn:()=>b});var b=Math.abs,v=Math.atan2,e=Math.cos,O=Math.max,A=Math.min,x=Math.sin,o=Math.sqrt,u=1e-12,c=Math.PI,d=c/2,f=2*c;function n(h){return h>1?0:h<-1?c:Math.acos(h)}function t(h){return h>=1?d:h<=-1?-d:Math.asin(h)}},"../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js":(I,F,a)=>{a.d(F,{A:()=>A});var b=a("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/constant.js");function v(x,o){return o<x?-1:o>x?1:o>=x?0:NaN}function e(x){return x}var O=a("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/math.js");function A(){var x=e,o=v,u=null,c=(0,b.A)(0),d=(0,b.A)(O.FA),f=(0,b.A)(0);function n(t){var h,y=t.length,_,p,T=0,i=new Array(y),r=new Array(y),l=+c.apply(this,arguments),L=Math.min(O.FA,Math.max(-O.FA,d.apply(this,arguments)-l)),g,D=Math.min(Math.abs(L)/y,f.apply(this,arguments)),M=D*(L<0?-1:1),S;for(h=0;h<y;++h)(S=r[i[h]=h]=+x(t[h],h,t))>0&&(T+=S);for(o!=null?i.sort(function(E,w){return o(r[E],r[w])}):u!=null&&i.sort(function(E,w){return u(t[E],t[w])}),h=0,p=T?(L-y*M)/T:0;h<y;++h,l=g)_=i[h],S=r[_],g=l+(S>0?S*p:0)+M,r[_]={data:t[_],index:h,value:S,startAngle:l,endAngle:g,padAngle:D};return r}return n.value=function(t){return arguments.length?(x=typeof t=="function"?t:(0,b.A)(+t),n):x},n.sortValues=function(t){return arguments.length?(o=t,u=null,n):o},n.sort=function(t){return arguments.length?(u=t,o=null,n):u},n.startAngle=function(t){return arguments.length?(c=typeof t=="function"?t:(0,b.A)(+t),n):c},n.endAngle=function(t){return arguments.length?(d=typeof t=="function"?t:(0,b.A)(+t),n):d},n.padAngle=function(t){return arguments.length?(f=typeof t=="function"?t:(0,b.A)(+t),n):f},n}}}]);
