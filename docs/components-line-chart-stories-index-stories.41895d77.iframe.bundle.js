"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4722],{"../charts/src/components/line-chart/stories/index.stories.tsx":(N,A,t)=>{t.r(A),t.d(A,{BrokenLine:()=>E,CurveTypes:()=>M,CustomDimensions:()=>f,CustomTooltips:()=>h,DateStringFormats:()=>C,Default:()=>n,ErrorStates:()=>s,FixedDimensions:()=>i,GridientFilled:()=>v,SingleSeries:()=>c,SmartFormatting:()=>L,WithLegend:()=>D,WithPointerEvents:()=>p,WithStartGlyphs:()=>w,WithVerticalLegend:()=>S,WithoutSmoothing:()=>F,WithoutTooltip:()=>_,__namedExportsOrder:()=>W,default:()=>y});var T=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=t("../charts/src/components/line-chart/line-chart.tsx"),e=t("../charts/src/components/line-chart/stories/large-values-sample.ts");const j=[{label:"London",data:[{date:new Date("2022-01-01"),value:7.8},{date:new Date("2022-01-08"),value:7.2},{date:new Date("2022-01-15"),value:6.9},{date:new Date("2022-01-22"),value:6.5},{date:new Date("2022-01-29"),value:7.1},{date:new Date("2022-02-05"),value:8.3},{date:new Date("2022-02-12"),value:8.9},{date:new Date("2022-02-19"),value:9.2},{date:new Date("2022-02-26"),value:8.7},{date:new Date("2022-03-05"),value:9.4},{date:new Date("2022-03-12"),value:10.2},{date:new Date("2022-03-19"),value:11.5},{date:new Date("2022-03-26"),value:12.3},{date:new Date("2022-04-02"),value:13.1},{date:new Date("2022-04-09"),value:13.8},{date:new Date("2022-04-16"),value:14.6},{date:new Date("2022-04-23"),value:15.2},{date:new Date("2022-04-30"),value:15.9},{date:new Date("2022-05-07"),value:16.7},{date:new Date("2022-05-14"),value:17.4},{date:new Date("2022-05-21"),value:18.2},{date:new Date("2022-05-28"),value:18.9},{date:new Date("2022-06-04"),value:19.7},{date:new Date("2022-06-11"),value:20.5},{date:new Date("2022-06-18"),value:21.3},{date:new Date("2022-06-25"),value:22.1},{date:new Date("2022-07-02"),value:22.8},{date:new Date("2022-07-09"),value:23.6},{date:new Date("2022-07-16"),value:24.4},{date:new Date("2022-07-23"),value:25.2},{date:new Date("2022-07-30"),value:24.8},{date:new Date("2022-08-06"),value:24.1},{date:new Date("2022-08-13"),value:23.5},{date:new Date("2022-08-20"),value:22.8},{date:new Date("2022-08-27"),value:21.9},{date:new Date("2022-09-03"),value:20.7},{date:new Date("2022-09-10"),value:19.5},{date:new Date("2022-09-17"),value:18.3},{date:new Date("2022-09-24"),value:17.1},{date:new Date("2022-10-01"),value:16.2},{date:new Date("2022-10-08"),value:15.1},{date:new Date("2022-10-15"),value:14.2},{date:new Date("2022-10-22"),value:13.1},{date:new Date("2022-10-29"),value:12.2},{date:new Date("2022-11-05"),value:11.1},{date:new Date("2022-11-12"),value:10.2},{date:new Date("2022-11-19"),value:9.1},{date:new Date("2022-11-26"),value:8.2},{date:new Date("2022-12-03"),value:7.1},{date:new Date("2022-12-10"),value:6.2},{date:new Date("2022-12-17"),value:5.5},{date:new Date("2022-12-24"),value:5.2},{date:new Date("2022-12-31"),value:6.8},{date:new Date("2023-01-01"),value:8.2},{date:new Date("2023-01-08"),value:7.9},{date:new Date("2023-01-15"),value:5.1},{date:new Date("2023-01-22"),value:4.8},{date:new Date("2023-01-29"),value:6.3},{date:new Date("2023-02-05"),value:7.2},{date:new Date("2023-02-12"),value:9.4},{date:new Date("2023-02-19"),value:8.7},{date:new Date("2023-02-26"),value:7.1},{date:new Date("2023-03-05"),value:8.3},{date:new Date("2023-03-12"),value:9.5},{date:new Date("2023-03-19"),value:11.2},{date:new Date("2023-03-26"),value:12.8},{date:new Date("2023-04-02"),value:13.4},{date:new Date("2023-04-09"),value:14.1},{date:new Date("2023-04-16"),value:15.3},{date:new Date("2023-04-23"),value:14.8},{date:new Date("2023-04-30"),value:15.7},{date:new Date("2023-05-07"),value:16.9},{date:new Date("2023-05-14"),value:17.2},{date:new Date("2023-05-21"),value:18.4},{date:new Date("2023-05-28"),value:19.1},{date:new Date("2023-06-04"),value:20.3},{date:new Date("2023-06-11"),value:21.5},{date:new Date("2023-06-18"),value:22.8},{date:new Date("2023-06-25"),value:21.9},{date:new Date("2023-07-02"),value:23.1},{date:new Date("2023-07-09"),value:22.7},{date:new Date("2023-07-16"),value:24.2},{date:new Date("2023-07-23"),value:23.8},{date:new Date("2023-07-30"),value:22.9},{date:new Date("2023-08-06"),value:23.4},{date:new Date("2023-08-13"),value:22.8},{date:new Date("2023-08-20"),value:21.9},{date:new Date("2023-08-27"),value:20.7},{date:new Date("2023-09-03"),value:19.8},{date:new Date("2023-09-10"),value:18.9},{date:new Date("2023-09-17"),value:17.6},{date:new Date("2023-09-24"),value:16.8},{date:new Date("2023-10-01"),value:15.9},{date:new Date("2023-10-08"),value:14.7},{date:new Date("2023-10-15"),value:13.8},{date:new Date("2023-10-22"),value:12.9},{date:new Date("2023-10-29"),value:11.7},{date:new Date("2023-11-05"),value:10.8},{date:new Date("2023-11-12"),value:9.9},{date:new Date("2023-11-19"),value:8.7},{date:new Date("2023-11-26"),value:7.8},{date:new Date("2023-12-03"),value:6.9},{date:new Date("2023-12-10"),value:5.8},{date:new Date("2023-12-17"),value:4.9},{date:new Date("2023-12-24"),value:5.7},{date:new Date("2023-12-31"),value:6.2}]},{label:"Canberra",data:[{date:new Date("2022-01-01"),value:27.9},{date:new Date("2022-01-08"),value:28.4},{date:new Date("2022-01-15"),value:29.2},{date:new Date("2022-01-22"),value:28.9},{date:new Date("2022-01-29"),value:28.1},{date:new Date("2022-02-05"),value:27.3},{date:new Date("2022-02-12"),value:26.5},{date:new Date("2022-02-19"),value:25.4},{date:new Date("2022-02-26"),value:24.2},{date:new Date("2022-03-05"),value:23.1},{date:new Date("2022-03-12"),value:22.3},{date:new Date("2022-03-19"),value:21.2},{date:new Date("2022-03-26"),value:20.1},{date:new Date("2022-04-02"),value:19.2},{date:new Date("2022-04-09"),value:18.1},{date:new Date("2022-04-16"),value:16.9},{date:new Date("2022-04-23"),value:15.8},{date:new Date("2022-04-30"),value:14.9},{date:new Date("2022-05-07"),value:13.8},{date:new Date("2022-05-14"),value:12.9},{date:new Date("2022-05-21"),value:11.8},{date:new Date("2022-05-28"),value:10.9},{date:new Date("2022-06-04"),value:9.8},{date:new Date("2022-06-11"),value:8.9},{date:new Date("2022-06-18"),value:8.1},{date:new Date("2022-06-25"),value:7.5},{date:new Date("2022-07-02"),value:6.9},{date:new Date("2022-07-09"),value:6.7},{date:new Date("2022-07-16"),value:7.1},{date:new Date("2022-07-23"),value:7.9},{date:new Date("2022-07-30"),value:8.8},{date:new Date("2022-08-06"),value:9.9},{date:new Date("2022-08-13"),value:11.2},{date:new Date("2022-08-20"),value:12.4},{date:new Date("2022-08-27"),value:13.6},{date:new Date("2022-09-03"),value:14.8},{date:new Date("2022-09-10"),value:16.1},{date:new Date("2022-09-17"),value:17.3},{date:new Date("2022-09-24"),value:18.5},{date:new Date("2022-10-01"),value:19.8},{date:new Date("2022-10-08"),value:21.1},{date:new Date("2022-10-15"),value:22.3},{date:new Date("2022-10-22"),value:23.5},{date:new Date("2022-10-29"),value:24.6},{date:new Date("2022-11-05"),value:25.7},{date:new Date("2022-11-12"),value:26.5},{date:new Date("2022-11-19"),value:27.4},{date:new Date("2022-11-26"),value:28.2},{date:new Date("2022-12-03"),value:28.9},{date:new Date("2022-12-10"),value:29.5},{date:new Date("2022-12-17"),value:29.1},{date:new Date("2022-12-24"),value:28.2},{date:new Date("2022-12-31"),value:28.7},{date:new Date("2023-01-01"),value:28.5},{date:new Date("2023-01-08"),value:29.2},{date:new Date("2023-01-15"),value:30.1},{date:new Date("2023-01-22"),value:29.8},{date:new Date("2023-01-29"),value:28.9},{date:new Date("2023-02-05"),value:27.8},{date:new Date("2023-02-12"),value:26.9},{date:new Date("2023-02-19"),value:25.7},{date:new Date("2023-02-26"),value:24.8},{date:new Date("2023-03-05"),value:23.9},{date:new Date("2023-03-12"),value:22.8},{date:new Date("2023-03-19"),value:21.7},{date:new Date("2023-03-26"),value:20.8},{date:new Date("2023-04-02"),value:19.6},{date:new Date("2023-04-09"),value:18.4},{date:new Date("2023-04-16"),value:17.2},{date:new Date("2023-04-23"),value:16.1},{date:new Date("2023-04-30"),value:15.3},{date:new Date("2023-05-07"),value:14.2},{date:new Date("2023-05-14"),value:13.1},{date:new Date("2023-05-21"),value:12.3},{date:new Date("2023-05-28"),value:11.4},{date:new Date("2023-06-04"),value:10.2},{date:new Date("2023-06-11"),value:9.1},{date:new Date("2023-06-18"),value:8.3},{date:new Date("2023-06-25"),value:7.8},{date:new Date("2023-07-02"),value:7.1},{date:new Date("2023-07-09"),value:6.9},{date:new Date("2023-07-16"),value:7.2},{date:new Date("2023-07-23"),value:8.1},{date:new Date("2023-07-30"),value:9.3},{date:new Date("2023-08-06"),value:10.4},{date:new Date("2023-08-13"),value:11.6},{date:new Date("2023-08-20"),value:12.8},{date:new Date("2023-08-27"),value:13.9},{date:new Date("2023-09-03"),value:15.2},{date:new Date("2023-09-10"),value:16.4},{date:new Date("2023-09-17"),value:17.6},{date:new Date("2023-09-24"),value:18.9},{date:new Date("2023-10-01"),value:20.1},{date:new Date("2023-10-08"),value:21.3},{date:new Date("2023-10-15"),value:22.5},{date:new Date("2023-10-22"),value:23.7},{date:new Date("2023-10-29"),value:24.8},{date:new Date("2023-11-05"),value:25.9},{date:new Date("2023-11-12"),value:26.7},{date:new Date("2023-11-19"),value:27.8},{date:new Date("2023-11-26"),value:28.6},{date:new Date("2023-12-03"),value:29.4},{date:new Date("2023-12-10"),value:30.2},{date:new Date("2023-12-17"),value:29.8},{date:new Date("2023-12-24"),value:28.9},{date:new Date("2023-12-31"),value:29.3}]},{label:"Mars",data:[{date:new Date("2022-01-01"),value:-62},{date:new Date("2022-01-08"),value:-63},{date:new Date("2022-01-15"),value:-64},{date:new Date("2022-01-22"),value:-62},{date:new Date("2022-01-29"),value:-61},{date:new Date("2022-02-05"),value:-59},{date:new Date("2022-02-12"),value:-56},{date:new Date("2022-02-19"),value:-53},{date:new Date("2022-02-26"),value:-50},{date:new Date("2022-03-05"),value:-47},{date:new Date("2022-03-12"),value:-44},{date:new Date("2022-03-19"),value:-41},{date:new Date("2022-03-26"),value:-37},{date:new Date("2022-04-02"),value:-34},{date:new Date("2022-04-09"),value:-31},{date:new Date("2022-04-16"),value:-27},{date:new Date("2022-04-23"),value:-24},{date:new Date("2022-04-30"),value:-21},{date:new Date("2022-05-07"),value:-17},{date:new Date("2022-05-14"),value:-14},{date:new Date("2022-05-21"),value:-11},{date:new Date("2022-05-28"),value:-7},{date:new Date("2022-06-04"),value:-4},{date:new Date("2022-06-11"),value:-1},{date:new Date("2022-06-18"),value:1},{date:new Date("2022-06-25"),value:3},{date:new Date("2022-07-02"),value:6},{date:new Date("2022-07-09"),value:9},{date:new Date("2022-07-16"),value:11},{date:new Date("2022-07-23"),value:13},{date:new Date("2022-07-30"),value:16},{date:new Date("2022-08-06"),value:18},{date:new Date("2022-08-13"),value:21},{date:new Date("2022-08-20"),value:23},{date:new Date("2022-08-27"),value:21},{date:new Date("2022-09-03"),value:19},{date:new Date("2022-09-10"),value:16},{date:new Date("2022-09-17"),value:13},{date:new Date("2022-09-24"),value:9},{date:new Date("2022-10-01"),value:6},{date:new Date("2022-10-08"),value:3},{date:new Date("2022-10-15"),value:-1},{date:new Date("2022-10-22"),value:-4},{date:new Date("2022-10-29"),value:-7},{date:new Date("2022-11-05"),value:-11},{date:new Date("2022-11-12"),value:-14},{date:new Date("2022-11-19"),value:-17},{date:new Date("2022-11-26"),value:-21},{date:new Date("2022-12-03"),value:-24},{date:new Date("2022-12-10"),value:-27},{date:new Date("2022-12-17"),value:-31},{date:new Date("2022-12-24"),value:-36},{date:new Date("2022-12-31"),value:-37},{date:new Date("2023-01-01"),value:-63},{date:new Date("2023-01-08"),value:-64},{date:new Date("2023-01-15"),value:-65},{date:new Date("2023-01-22"),value:-63},{date:new Date("2023-01-29"),value:-62},{date:new Date("2023-02-05"),value:-60},{date:new Date("2023-02-12"),value:-58},{date:new Date("2023-02-19"),value:-55},{date:new Date("2023-02-26"),value:-52},{date:new Date("2023-03-05"),value:-48},{date:new Date("2023-03-12"),value:-45},{date:new Date("2023-03-19"),value:-42},{date:new Date("2023-03-26"),value:-38},{date:new Date("2023-04-02"),value:-35},{date:new Date("2023-04-09"),value:-32},{date:new Date("2023-04-16"),value:-28},{date:new Date("2023-04-23"),value:-25},{date:new Date("2023-04-30"),value:-22},{date:new Date("2023-05-07"),value:-18},{date:new Date("2023-05-14"),value:-15},{date:new Date("2023-05-21"),value:-12},{date:new Date("2023-05-28"),value:-8},{date:new Date("2023-06-04"),value:-5},{date:new Date("2023-06-11"),value:-2},{date:new Date("2023-06-18"),value:0},{date:new Date("2023-06-25"),value:2},{date:new Date("2023-07-02"),value:5},{date:new Date("2023-07-09"),value:8},{date:new Date("2023-07-16"),value:10},{date:new Date("2023-07-23"),value:12},{date:new Date("2023-07-30"),value:15},{date:new Date("2023-08-06"),value:17},{date:new Date("2023-08-13"),value:20},{date:new Date("2023-08-20"),value:22},{date:new Date("2023-08-27"),value:20},{date:new Date("2023-09-03"),value:18},{date:new Date("2023-09-10"),value:15},{date:new Date("2023-09-17"),value:12},{date:new Date("2023-09-24"),value:8},{date:new Date("2023-10-01"),value:5},{date:new Date("2023-10-08"),value:2},{date:new Date("2023-10-15"),value:-2},{date:new Date("2023-10-22"),value:-5},{date:new Date("2023-10-29"),value:-8},{date:new Date("2023-11-05"),value:-12},{date:new Date("2023-11-12"),value:-15},{date:new Date("2023-11-19"),value:-18},{date:new Date("2023-11-26"),value:-22},{date:new Date("2023-12-03"),value:-25},{date:new Date("2023-12-10"),value:-28},{date:new Date("2023-12-17"),value:-32},{date:new Date("2023-12-24"),value:-35},{date:new Date("2023-12-31"),value:-38}]}];var x=t("../charts/src/components/line-chart/stories/site-traffic-sample.ts"),l=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),d=`import React from 'react';
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
`,u={Default:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},SingleSeries:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},WithoutTooltip:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},CustomDimensions:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},WithLegend:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},WithVerticalLegend:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},FixedDimensions:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},GridientFilled:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},ErrorStates:{startLoc:{col:27,line:120},endLoc:{col:1,line:195},startBody:{col:27,line:120},endBody:{col:1,line:195}},WithoutSmoothing:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},CustomTooltips:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},WithPointerEvents:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},CurveTypes:{startLoc:{col:26,line:248},endLoc:{col:1,line:338},startBody:{col:26,line:248},endBody:{col:1,line:338}},SmartFormatting:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},BrokenLine:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},WithStartGlyphs:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},DateStringFormats:{startLoc:{col:33,line:400},endLoc:{col:1,line:433},startBody:{col:33,line:400},endBody:{col:1,line:433}}};const y={title:"JS Packages/Charts/Types/Line Chart",component:m.A,parameters:{storySource:{source:`/* wp:polyfill */
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
};`,locationsMap:{default:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"single-series":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"without-tooltip":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"custom-dimensions":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"with-legend":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"with-vertical-legend":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"fixed-dimensions":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"gridient-filled":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"error-states":{startLoc:{col:27,line:120},endLoc:{col:1,line:195},startBody:{col:27,line:120},endBody:{col:1,line:195}},"without-smoothing":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"custom-tooltips":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"with-pointer-events":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"curve-types":{startLoc:{col:26,line:248},endLoc:{col:1,line:338},startBody:{col:26,line:248},endBody:{col:1,line:338}},"smart-formatting":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"broken-line":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"with-start-glyphs":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"date-string-formats":{startLoc:{col:33,line:400},endLoc:{col:1,line:433},startBody:{col:33,line:400},endBody:{col:1,line:433}}}},layout:"centered"},decorators:[P=>(0,l.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,l.jsx)(P,{})})]},a=P=>(0,l.jsx)(m.A,{...P}),n=a.bind({});n.args={data:j,showLegend:!1,legendOrientation:"horizontal",withGradientFill:!1,smoothing:!0,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}}};const c=a.bind({});c.args={data:[j[0]]};const _=a.bind({});_.args={...n.args,withTooltips:!1};const f=a.bind({});f.args={width:800,height:400,data:j};const D=a.bind({});D.args={...n.args,showLegend:!0};const S=a.bind({});S.args={...n.args,showLegend:!0,legendOrientation:"vertical"};const i=a.bind({});i.args={width:800,height:400,data:j,withTooltips:!0},i.parameters={docs:{description:{story:"Line chart with fixed dimensions that override the responsive behavior."}}};const v=a.bind({});v.args={...n.args,margin:void 0,data:x.A,withGradientFill:!0,options:{axis:{y:{orientation:"right"}}}};const s={render:()=>(0,l.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:"Empty Data"}),(0,l.jsx)(m.A,{width:300,height:200,data:[]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:"Invalid Date Values"}),(0,l.jsx)(m.A,{width:300,height:200,data:[{label:"Invalid Dates",data:[{date:new Date("invalid"),value:10},{date:new Date("2024-01-02"),value:20}],options:{}}]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:"Invalid Values"}),(0,l.jsx)(m.A,{width:300,height:200,data:[{label:"Invalid Values",data:[{date:new Date("2024-01-01"),value:NaN},{date:new Date("2024-01-02"),value:null}],options:{}}]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:"Single Data Point"}),(0,l.jsx)(m.A,{width:300,height:200,data:[{label:"Single Point",data:[{date:new Date("2024-01-01"),value:100}],options:{}}]})]})]}),parameters:{docs:{description:{story:"Examples of how the line chart handles various error states and edge cases."}}}},F=a.bind({});F.args={...n.args,smoothing:!1};const h=a.bind({});h.args={...n.args,renderTooltip:({tooltipData:P})=>{const V=P?.nearestDatum?.datum;if(!V)return null;const X=Object.entries(P?.datumByKey||{}).map(([R,{datum:G}])=>({key:R,value:G.value})).sort((R,G)=>G.value-R.value);return(0,l.jsxs)("div",{children:[(0,l.jsxs)("h3",{children:[V?.date?.toLocaleDateString()," \u{1F4AF} "]}),(0,l.jsx)("table",{style:{border:"1px solid black",borderCollapse:"collapse"},children:X.map(R=>(0,l.jsxs)("tr",{style:{border:"1px solid black"},children:[(0,l.jsx)("td",{style:{border:"1px solid black"},children:R.key}),(0,l.jsx)("td",{children:R.value})]},R.key))})]})}};const p=a.bind({});p.args={...n.args,onPointerDown:({datum:P})=>alert("Pointer down:"+JSON.stringify(P))};const M={render:()=>{const P=[{label:"Sample Series",data:[{date:new Date("2024-01-01"),value:10},{date:new Date("2024-01-02"),value:90},{date:new Date("2024-01-03"),value:85},{date:new Date("2024-01-04"),value:82},{date:new Date("2024-01-05"),value:5},{date:new Date("2024-01-06"),value:8},{date:new Date("2024-01-07"),value:10}],options:{}}];return(0,l.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:"Linear Curve"}),(0,l.jsx)(m.A,{width:300,height:200,data:P,curveType:"linear",showLegend:!1,withGradientFill:!1})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:"Smooth Curve (Catmull-Rom)"}),(0,l.jsx)(m.A,{width:300,height:200,data:P,curveType:"smooth",showLegend:!1,withGradientFill:!1})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:"Monotone X Curve"}),(0,l.jsx)(m.A,{width:300,height:200,data:P,curveType:"monotone",showLegend:!1,withGradientFill:!1})]})]})},parameters:{docs:{description:{story:"Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points."}}}},L=a.bind({});L.args={data:e.A,showLegend:!0,legendOrientation:"horizontal",withGradientFill:!1,smoothing:!0,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}}},L.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const E=a.bind({});E.args={...n.args,margin:{bottom:40},showLegend:!0,data:[{...x.A[0],label:"Vistors to compare",options:{...x.A[0].options,seriesLineStyle:{strokeDasharray:"5 5 1"},legendShapeStyle:{strokeDasharray:"5 5 1"}}},x.A[1]]},E.parameters={docs:{description:{story:"Demonstrates the option of setting a seriesLineStyle to a dash array."}}};const w=a.bind({});w.args={...n.args,withStartGlyphs:!0};const C={render:()=>(0,l.jsx)(m.A,{data:[{label:"String Dates",data:[{dateString:"2024-01-01",value:10},{dateString:"2024-01-02",value:20},{dateString:"2024-01-03 00:00:00",value:15},{dateString:"2024-01-04",value:25},{dateString:"2024-01-05 00:00",value:30}],options:{}}],withGradientFill:!1}),parameters:{docs:{description:{story:`Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:
- Simple date strings (YYYY-MM-DD)
- Date with time (YYYY-MM-DD 00:00:00)
- Date with time (YYYY-MM-DD 00:00)
- ISO format (YYYY-MM-DDT00:00:00)
- UTC format (YYYY-MM-DDT00:00:00Z)
- Timezone offset (YYYY-MM-DDT00:00:00\xB1HH:mm)
`}}}},W=["Default","SingleSeries","WithoutTooltip","CustomDimensions","WithLegend","WithVerticalLegend","FixedDimensions","GridientFilled","ErrorStates","WithoutSmoothing","CustomTooltips","WithPointerEvents","CurveTypes","SmartFormatting","BrokenLine","WithStartGlyphs","DateStringFormats"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...n.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...c.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",..._.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...f.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...D.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...S.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...i.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...v.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...F.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...h.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...p.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...L.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...E.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...w.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}}},"../charts/src/components/legend/base-legend.tsx":(N,A,t)=>{t.d(A,{$:()=>v});var T=t("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),m=t("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendItem.js"),e=t("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendShape.js"),O=t("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendLabel.js"),j=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),x=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=t("../charts/src/providers/theme/theme-provider.tsx"),u=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=t.n(u),y=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss"),a={};a.insert="head",a.singleton=!1;var n=r()(y.A,a);const c=y.A.locals||{};function _(s){return s&&typeof s=="object"&&"value"in s&&typeof s.value<"u"?s.value:s}function f(s){return String(_(s))}function D({scale:s,labelFormat:F}){return(h,p)=>({datum:h,index:p,text:`${F(h,p)}`,value:s(h)})}var S=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i={horizontal:"row",vertical:"column"},v=({items:s,className:F,orientation:h="horizontal",shape:p="rect",fill:M=f,size:L=f,labelFormat:E=_,labelTransform:w=D,shapeWidth:C=16,shapeHeight:W=16,shapeMargin:P="2px 4px 2px 0",labelAlign:V="left",labelFlex:X="1",labelMargin:R="0 4px",itemMargin:G="0",itemDirection:$="row",legendLabelProps:U,...z})=>{const I=(0,d.RW)(),o=(0,j.A)({domain:s.map(b=>b.label),range:s.map(b=>b.color)}),g=o.domain(),Y=(0,l.useCallback)(({index:b})=>s[b]?.shapeStyle??I.legendShapeStyles?.[b]??{},[s,I]);return(0,S.jsx)(T.A,{scale:o,labelFormat:E,labelTransform:w,children:b=>(0,S.jsx)("div",{role:"list","data-testid":`legend-${h}`,className:(0,x.A)(c.legend,c[`legend--${h}`],F),style:{flexDirection:i[h],...I.legendContainerStyles},children:b.map((B,K)=>(0,S.jsxs)(m.A,{className:c["legend-item"],"data-testid":"legend-item",margin:G,flexDirection:$,...z,children:[(0,S.jsx)(e.A,{shape:p,height:W,width:C,margin:P,item:g[K],itemIndex:K,label:B,fill:M,size:L,shapeStyle:Y}),(0,S.jsxs)(O.A,{style:{justifyContent:V,flex:X,margin:R,...I.legendLabelStyles},...U,children:[B.text,s.find(J=>J.label===B.text)?.value&&(0,S.jsx)("span",{className:c["legend-item-value"],children:s.find(J=>J.label===B.text)?.value})]})]},`legend-${B.text}-${K}`))})})};try{v.displayName="BaseLegend",v.__docgenInfo={description:"",displayName:"BaseLegend",props:{size:{defaultValue:null,description:"Legend item size accessor function.",name:"size",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string | number"}},className:{defaultValue:null,description:"Classname to be applied to legend container.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Optional render function override.",name:"children",required:!1,type:{name:"(labels: { datum: any; index: number; text: string; value?: any; }[]) => React.ReactNode"}},style:{defaultValue:null,description:"Styles to be applied to the legend container.",name:"style",required:!1,type:{name:"React.CSSProperties"}},fill:{defaultValue:null,description:"Legend item fill accessor function.",name:"fill",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string"}},domain:{defaultValue:null,description:"Legend domain.",name:"domain",required:!1,type:{name:"any[]"}},shapeWidth:{defaultValue:{value:"16"},description:"Width of the legend shape.",name:"shapeWidth",required:!1,type:{name:"string | number"}},shapeHeight:{defaultValue:{value:"16"},description:"Height of the legend shape.",name:"shapeHeight",required:!1,type:{name:"string | number"}},shapeMargin:{defaultValue:{value:"2px 4px 2px 0"},description:"Margin of the legend shape.",name:"shapeMargin",required:!1,type:{name:"string | number"}},labelAlign:{defaultValue:{value:"left"},description:"Flex-box alignment of legend item labels.",name:"labelAlign",required:!1,type:{name:"string"}},labelFlex:{defaultValue:{value:"1"},description:"Flex-box flex of legend item labels.",name:"labelFlex",required:!1,type:{name:"string | number"}},labelMargin:{defaultValue:{value:"0 4px"},description:"Margin of legend item labels.",name:"labelMargin",required:!1,type:{name:"string | number"}},itemMargin:{defaultValue:{value:"0"},description:"Margin of legend items.",name:"itemMargin",required:!1,type:{name:"string | number"}},itemDirection:{defaultValue:{value:"row"},description:"Flex direction of legend items.",name:"itemDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},shape:{defaultValue:{value:"rect"},description:"Legend shape string preset or Element or Component.",name:"shape",required:!1,type:{name:"LegendShape<any, any>"}},labelFormat:{defaultValue:null,description:"Given a legend item and its index, returns an item label.",name:"labelFormat",required:!1,type:{name:"LabelFormatter<any>"}},labelTransform:{defaultValue:null,description:"Given the legend scale and labelFormatter, returns a label with datum, index, value, and label.",name:"labelTransform",required:!1,type:{name:"LabelFormatterFactory<ScaleOrdinal<any, any, never>>"}},legendLabelProps:{defaultValue:null,description:"Additional props to be set on LegendLabel.",name:"legendLabelProps",required:!1,type:{name:"Partial<LegendLabelProps>"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItem[]"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:v.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../charts/src/components/line-chart/line-chart.tsx":(N,A,t)=>{t.d(A,{A:()=>I});var T=t("../number-formatters/src/index.ts"),m=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/catmullRom.js"),e=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/linear.js"),O=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/monotone.js"),j=t("../../../node_modules/.pnpm/@visx+gradient@3.12.0_react@18.3.1/node_modules/@visx/gradient/esm/gradients/LinearGradient.js"),x=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/context/DataContext.js"),l=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),d=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),u=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),r=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/AreaSeries.js"),y=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),a=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=t("../charts/src/providers/theme/theme-provider.tsx"),_=t("../charts/src/components/legend/base-legend.tsx"),f=t("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js"),D=t("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js"),S=t("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse.js");const i=o=>/T.*[Z]$|T.*[+-]\d{2}:?\d{2}$/.test(o),v=o=>{const g=o.trim();if(i(g)){const b=(0,f.H)(g);return(0,D.f)(b)?b:new Date(NaN)}const Y=["yyyy-MM-dd","yyyy-MM-dd HH:mm:ss","yyyy-MM-dd HH:mm","yyyy-MM-dd'T'HH:mm:ss","yyyy-MM-dd'T'HH:mm:ss.SSS","yyyy-MM-dd'T'HH:mm"];for(const b of Y){const B=(0,S.qg)(g,b,new Date);if((0,D.f)(B))return B}return new Date(NaN)};var s=t("../charts/src/components/shared/use-chart-margin.tsx"),F=t("../charts/src/components/shared/with-responsive.tsx"),h=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=t.n(h),M=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss"),L={};L.insert="head",L.singleton=!1;var E=p()(M.A,L);const w=M.A.locals||{};var C=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const W=100,P=o=>{const{theme:g}=(0,n.useContext)(x.A)||{};return(0,C.jsx)("circle",{cx:o.x,cy:o.y,r:o.size,fill:o.color,stroke:g?.backgroundColor,strokeWidth:1.5,paintOrder:"fill","data-testid":`start-glyph-${o.index}`,...o.glyphStyle})},V=o=>(0,n.createElement)(P,{...o,key:o.key}),X=({data:o,index:g,color:Y,glyphStyle:b,renderGlyph:B,accessors:K})=>{const{xScale:J,yScale:ee}=(0,n.useContext)(x.A)||{};if(!J||!ee||o.data.length===0)return null;const Q=o.data[0],q=J(K.xAccessor(Q)),ae=ee(K.yAccessor(Q));if(typeof q!="number"||typeof ae!="number")return null;const ne=Number(b?.radius)||4;return B({key:`start-glyph-${o.label}`,index:g,datum:Q,color:Y,size:ne,x:q,y:ae,glyphStyle:b})},R=(o,g)=>{if(!o)return g?m.A:e.A;switch(o){case"smooth":return m.A;case"monotone":return O.G;case"linear":return e.A;default:return e.A}},G=({tooltipData:o})=>{const g=o?.nearestDatum?.datum;if(!g)return null;const Y=Object.entries(o?.datumByKey||{}).map(([b,{datum:B}])=>({key:b,value:B.value})).sort((b,B)=>B.value-b.value);return(0,C.jsxs)("div",{className:w["line-chart__tooltip"],children:[(0,C.jsx)("div",{className:w["line-chart__tooltip-date"],children:g.date?.toLocaleDateString()}),Y.map(b=>(0,C.jsxs)("div",{className:w["line-chart__tooltip-row"],children:[(0,C.jsxs)("span",{className:w["line-chart__tooltip-label"],children:[b.key,":"]}),(0,C.jsx)("span",{className:w["line-chart__tooltip-value"],children:b.value})]},b.key))]})},$=o=>new Date(o).toLocaleDateString(void 0,{month:"short",day:"numeric"}),U=o=>o?.length?o.some(Y=>Y.data.some(b=>isNaN(b.value)||b.value===null||b.value===void 0||isNaN(b.date.getTime())))?"Invalid data":null:"No data available",z=({data:o,width:g,height:Y,className:b,margin:B,withTooltips:K=!0,showLegend:J=!1,legendOrientation:ee="horizontal",legendShape:Q="line",withGradientFill:q=!1,smoothing:ae=!0,curveType:ne,renderTooltip:Z=G,withStartGlyphs:oe=!1,options:te={},onPointerDown:le=void 0,onPointerUp:re=void 0,onPointerMove:ue=void 0,onPointerOut:ce=void 0})=>{const me=(0,c.RW)(),ie=(0,c.Ox)(o),pe=(0,n.useId)(),se=(0,n.useMemo)(()=>o.map(k=>({...k,data:k.data.map(H=>({...H,date:H.date?H.date:v(H.dateString)})).sort((H,he)=>H.date.getTime()-he.date.getTime())})),[o]),de=(0,n.useMemo)(()=>({axis:{x:{orientation:"bottom",numTicks:Math.min(se[0]?.data.length,Math.ceil(g/W)),tickFormat:$,...te?.axis?.x},y:{orientation:"left",numTicks:4,tickFormat:T.qe,...te?.axis?.y}},xScale:{type:"time",...te?.xScale},yScale:{type:"linear",nice:!0,zero:!1,...te?.yScale}}),[te,se,g]),De=(0,s.a)(Y,de,se,ie),ve=U(se);if(ve)return(0,C.jsx)("div",{className:(0,a.A)("line-chart",w["line-chart"]),children:ve});const we=se.map((k,H)=>({label:k.label,value:"",color:k?.options?.stroke??me.colors[H%me.colors.length],shapeStyle:k?.options?.legendShapeStyle})),ge={xAccessor:k=>k?.date,yAccessor:k=>k?.value};return(0,C.jsxs)("div",{className:(0,a.A)("line-chart",w["line-chart"],b),"data-testid":"line-chart",role:"img","aria-label":"line chart",children:[(0,C.jsxs)(l.A,{theme:ie,width:g,height:Y,margin:{...De,...B},xScale:de.xScale,yScale:de.yScale,onPointerDown:le,onPointerUp:re,onPointerMove:ue,onPointerOut:ce,pointerEventsDataKey:"nearest",children:[(0,C.jsx)(d.A,{columns:!1,numTicks:4}),(0,C.jsx)(u.A,{...de.axis.x}),(0,C.jsx)(u.A,{...de.axis.y}),se.map((k,H)=>{const he=k.options?.stroke??ie.colors[H%ie.colors.length],fe=k.options?.seriesLineStyle??me?.seriesLineStyles?.[H%me.seriesLineStyles.length]??{};return(0,C.jsxs)("g",{children:[oe&&(0,C.jsx)(X,{index:H,data:k,color:he,renderGlyph:V,accessors:ge}),q&&(0,C.jsx)(j.A,{id:`area-gradient-${pe}-${H+1}`,from:he,fromOpacity:.4,toOpacity:.1,to:ie.backgroundColor,...k.options?.gradient,"data-testid":"line-gradient"}),(0,C.jsx)(r.A,{dataKey:k?.label,data:k.data,...ge,fill:q?`url(#area-gradient-${pe}-${H+1})`:"transparent",renderLine:!0,curve:R(ne,ae),lineProps:fe},k?.label)]},k?.label||H)}),K&&(0,C.jsx)(y.A,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,showSeriesGlyphs:!0,renderTooltip:Z})]}),J&&(0,C.jsx)(_.$,{items:we,orientation:ee,className:w["line-chart-legend"],shape:Q})]})},I=(0,F.F)(z);try{linechart.displayName="linechart",linechart.__docgenInfo={description:"",displayName:"linechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:{value:"undefined"},description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"true"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"line"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},renderTooltip:{defaultValue:{value:`( {
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
}`},description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withGradientFill:{defaultValue:{value:"false"},description:"",name:"withGradientFill",required:!1,type:{name:"boolean"}},smoothing:{defaultValue:{value:"true"},description:"",name:"smoothing",required:!1,type:{name:"boolean"}},curveType:{defaultValue:null,description:"",name:"curveType",required:!1,type:{name:"enum",value:[{value:'"linear"'},{value:'"smooth"'},{value:'"monotone"'}]}},withStartGlyphs:{defaultValue:{value:"false"},description:"",name:"withStartGlyphs",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/line-chart.tsx#linechart"]={docgenInfo:linechart.__docgenInfo,name:"linechart",path:"../charts/src/components/line-chart/line-chart.tsx#linechart"})}catch{}},"../charts/src/components/line-chart/stories/large-values-sample.ts":(N,A,t)=>{t.d(A,{A:()=>m});const m=[{label:"Revenue (Billions)",data:[{date:new Date("2024-01-01"),value:12e8},{date:new Date("2024-02-01"),value:145e7},{date:new Date("2024-03-01"),value:168e7},{date:new Date("2024-04-01"),value:21e8},{date:new Date("2024-05-01"),value:235e7},{date:new Date("2024-06-01"),value:28e8}],options:{stroke:"#3858E9"}},{label:"Users (Millions)",data:[{date:new Date("2024-01-01"),value:45e6},{date:new Date("2024-02-01"),value:52e6},{date:new Date("2024-03-01"),value:48e6},{date:new Date("2024-04-01"),value:61e6},{date:new Date("2024-05-01"),value:75e6},{date:new Date("2024-06-01"),value:89e6}],options:{stroke:"#00BA37"}}]},"../charts/src/components/line-chart/stories/site-traffic-sample.ts":(N,A,t)=>{t.d(A,{A:()=>T});const T=[{label:"Views",options:{stroke:"#069e08"},data:[{date:new Date("2024-01-01"),value:2558},{date:new Date("2024-01-02"),value:3399},{date:new Date("2024-01-03"),value:2260},{date:new Date("2024-01-04"),value:2331},{date:new Date("2024-01-05"),value:3302},{date:new Date("2024-01-06"),value:1852},{date:new Date("2024-01-07"),value:2607},{date:new Date("2024-01-08"),value:2804},{date:new Date("2024-01-09"),value:3260},{date:new Date("2024-01-10"),value:2941},{date:new Date("2024-01-11"),value:2857},{date:new Date("2024-01-12"),value:3461},{date:new Date("2024-01-13"),value:1548},{date:new Date("2024-01-14"),value:2739},{date:new Date("2024-01-15"),value:3288},{date:new Date("2024-01-16"),value:2869},{date:new Date("2024-01-17"),value:2590},{date:new Date("2024-01-18"),value:2609},{date:new Date("2024-01-19"),value:2648},{date:new Date("2024-01-20"),value:1805},{date:new Date("2024-01-21"),value:2531},{date:new Date("2024-01-22"),value:3605},{date:new Date("2024-01-23"),value:2366},{date:new Date("2024-01-24"),value:2782},{date:new Date("2024-01-25"),value:2885},{date:new Date("2024-01-26"),value:2918},{date:new Date("2024-01-27"),value:2518},{date:new Date("2024-01-28"),value:2378},{date:new Date("2024-01-29"),value:2714},{date:new Date("2024-01-30"),value:3279}]},{label:"Visitors",options:{stroke:"rgb(230, 139, 40)"},data:[{date:new Date("2024-01-01"),value:2412},{date:new Date("2024-01-02"),value:1899},{date:new Date("2024-01-03"),value:2061},{date:new Date("2024-01-04"),value:1939},{date:new Date("2024-01-05"),value:1986},{date:new Date("2024-01-06"),value:1560},{date:new Date("2024-01-07"),value:1741},{date:new Date("2024-01-08"),value:2120},{date:new Date("2024-01-09"),value:1889},{date:new Date("2024-01-10"),value:1666},{date:new Date("2024-01-11"),value:2396},{date:new Date("2024-01-12"),value:2276},{date:new Date("2024-01-13"),value:1218},{date:new Date("2024-01-14"),value:1228},{date:new Date("2024-01-15"),value:1600},{date:new Date("2024-01-16"),value:1814},{date:new Date("2024-01-17"),value:1701},{date:new Date("2024-01-18"),value:1507},{date:new Date("2024-01-19"),value:1833},{date:new Date("2024-01-20"),value:1407},{date:new Date("2024-01-21"),value:965},{date:new Date("2024-01-22"),value:2288},{date:new Date("2024-01-23"),value:2135},{date:new Date("2024-01-24"),value:1824},{date:new Date("2024-01-25"),value:2219},{date:new Date("2024-01-26"),value:1918},{date:new Date("2024-01-27"),value:1101},{date:new Date("2024-01-28"),value:1695},{date:new Date("2024-01-29"),value:1615},{date:new Date("2024-01-30"),value:2056}]}]},"../charts/src/components/shared/use-chart-margin.tsx":(N,A,t)=>{t.d(A,{a:()=>x});var T=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),m=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),O=t("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const j=(l,d,u)=>{const r=l.map(a=>d(a,0,[])),y=r.reduce((a,n)=>a.length>=n.length?a:n,r[0]);return(0,O.A)(y,u)},x=(l,d,u,r,y=!1)=>{const a=(0,e.useMemo)(()=>{const n=u.flatMap(D=>D.data);if(y)return n.map(D=>D.label||d.axis?.y?.tickFormat(D.date.getTime(),0,[]));const c=Math.min(...n.map(D=>D.value)),_=Math.max(...n.map(D=>D.value)),f=(0,T.A)({...d.yScale,domain:[c,_],range:[l,0]});return(0,m.A)(f,d.axis?.y?.numTicks)},[d,u,l,y]);return(0,e.useMemo)(()=>{const n={top:10,right:20,bottom:20,left:20},c=40,_=d.axis?.y?.orientation,f=_==="right"?r.axisStyles.y.right:r.axisStyles.y.left,S=(j(a,d.axis?.y?.tickFormat,f.axisLabel)??c)+(f?.tickLength??0);return _==="right"?n.right=S:n.left=S,d.axis?.x?.orientation==="top"&&(n.top=20,n.bottom=10),n},[d,r,a])}},"../charts/src/components/shared/with-responsive.tsx":(N,A,t)=>{t.d(A,{F:()=>e});var T=t("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),m=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function e(O,j){const{maxWidth:x=1200,aspectRatio:l=.5,debounceTime:d=50}=j||{};return function(r){const{parentRef:y,width:a}=(0,T.A)({debounceTime:d,enableDebounceLeadingCall:!0,initialSize:{width:600,height:400}}),n=a?Math.min(a,x):600,c=r.height??n*l;return(0,m.jsx)("div",{ref:y,style:{width:"100%"},children:(0,m.jsx)(O,{width:n,height:c,size:n,...r})})}}try{e.displayName="withResponsive",e.__docgenInfo={description:`A higher-order component that provides responsive dimensions
to the wrapped chart component using useParentSize from`,displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/with-responsive.tsx#withResponsive"]={docgenInfo:e.__docgenInfo,name:"withResponsive",path:"../charts/src/components/shared/with-responsive.tsx#withResponsive"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(N,A,t)=>{t.d(A,{NP:()=>d,Ox:()=>l,RW:()=>x});var T=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),m=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=t("../charts/src/providers/theme/themes.ts"),O=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,m.createContext)(e.zQ),x=()=>(0,m.useContext)(j),l=u=>{const r=x();return(0,m.useMemo)(()=>{const y=(u??[]).map(a=>a.options?.stroke).filter(a=>!!a);return(0,T.A)({...r,colors:[...y,...r.colors??[]]})},[r,u])},d=({theme:u={},children:r})=>{const y={...e.zQ,...u};return(0,O.jsx)(j.Provider,{value:y,children:r})};try{d.displayName="ThemeProvider",d.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:d.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{x.displayName="useChartTheme",x.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:x.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}try{l.displayName="useXYChartTheme",l.__docgenInfo={description:"",displayName:"useXYChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"]={docgenInfo:l.__docgenInfo,name:"useXYChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(N,A,t)=>{t.d(A,{QI:()=>m,pk:()=>e,zQ:()=>T});const T={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"}},m={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"}},e={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss":(N,A,t)=>{t.d(A,{A:()=>x});var T=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=t.n(T),e=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),O=t.n(e),j=O()(m());j.push([N.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;font-size:.875rem}.AyocUvYOPM3rztxeHhaJ{display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),j.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const x=j},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss":(N,A,t)=>{t.d(A,{A:()=>x});var T=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=t.n(T),e=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),O=t.n(e),j=O()(m());j.push([N.id,".SVlAnnWw2ot8McusfLcw{position:relative}.SVlAnnWw2ot8McusfLcw svg{overflow:visible}.WG8wpgeFR6IoBhr41Y3z{background:#fff;padding:.5rem}.t5p9YWtrovlLQm8WlrGF{font-weight:700;padding-bottom:10px}.FPtDJMJR2GRu0df3iYy6{display:flex;align-items:center;padding:4px 0;justify-content:space-between}.xTJS98Xw7HFAGWFwzsgd{font-weight:500;padding-right:1rem}.visx-tooltip-glyph svg{width:10px;height:10px}",""]),j.locals={"line-chart":"SVlAnnWw2ot8McusfLcw","line-chart__tooltip":"WG8wpgeFR6IoBhr41Y3z","line-chart__tooltip-date":"t5p9YWtrovlLQm8WlrGF","line-chart__tooltip-row":"FPtDJMJR2GRu0df3iYy6","line-chart__tooltip-label":"xTJS98Xw7HFAGWFwzsgd"};const x=j},"../../../node_modules/.pnpm/d3-path@1.0.9/node_modules/d3-path/src/path.js":(N,A,t)=>{t.d(A,{A:()=>l});var T=Math.PI,m=2*T,e=1e-6,O=m-e;function j(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function x(){return new j}j.prototype=x.prototype={constructor:j,moveTo:function(d,u){this._+="M"+(this._x0=this._x1=+d)+","+(this._y0=this._y1=+u)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(d,u){this._+="L"+(this._x1=+d)+","+(this._y1=+u)},quadraticCurveTo:function(d,u,r,y){this._+="Q"+ +d+","+ +u+","+(this._x1=+r)+","+(this._y1=+y)},bezierCurveTo:function(d,u,r,y,a,n){this._+="C"+ +d+","+ +u+","+ +r+","+ +y+","+(this._x1=+a)+","+(this._y1=+n)},arcTo:function(d,u,r,y,a){d=+d,u=+u,r=+r,y=+y,a=+a;var n=this._x1,c=this._y1,_=r-d,f=y-u,D=n-d,S=c-u,i=D*D+S*S;if(a<0)throw new Error("negative radius: "+a);if(this._x1===null)this._+="M"+(this._x1=d)+","+(this._y1=u);else if(i>e)if(!(Math.abs(S*_-f*D)>e)||!a)this._+="L"+(this._x1=d)+","+(this._y1=u);else{var v=r-n,s=y-c,F=_*_+f*f,h=v*v+s*s,p=Math.sqrt(F),M=Math.sqrt(i),L=a*Math.tan((T-Math.acos((F+i-h)/(2*p*M)))/2),E=L/M,w=L/p;Math.abs(E-1)>e&&(this._+="L"+(d+E*D)+","+(u+E*S)),this._+="A"+a+","+a+",0,0,"+ +(S*v>D*s)+","+(this._x1=d+w*_)+","+(this._y1=u+w*f)}},arc:function(d,u,r,y,a,n){d=+d,u=+u,r=+r,n=!!n;var c=r*Math.cos(y),_=r*Math.sin(y),f=d+c,D=u+_,S=1^n,i=n?y-a:a-y;if(r<0)throw new Error("negative radius: "+r);this._x1===null?this._+="M"+f+","+D:(Math.abs(this._x1-f)>e||Math.abs(this._y1-D)>e)&&(this._+="L"+f+","+D),r&&(i<0&&(i=i%m+m),i>O?this._+="A"+r+","+r+",0,1,"+S+","+(d-c)+","+(u-_)+"A"+r+","+r+",0,1,"+S+","+(this._x1=f)+","+(this._y1=D):i>e&&(this._+="A"+r+","+r+",0,"+ +(i>=T)+","+S+","+(this._x1=d+r*Math.cos(a))+","+(this._y1=u+r*Math.sin(a))))},rect:function(d,u,r,y){this._+="M"+(this._x0=this._x1=+d)+","+(this._y0=this._y1=+u)+"h"+ +r+"v"+ +y+"h"+-r+"Z"},toString:function(){return this._}};const l=x},"../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js":(N,A,t)=>{t.d(A,{A:()=>y});var T=t("../../../node_modules/.pnpm/d3-path@1.0.9/node_modules/d3-path/src/path.js"),m=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/constant.js"),e=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/math.js");function O(a){return a.innerRadius}function j(a){return a.outerRadius}function x(a){return a.startAngle}function l(a){return a.endAngle}function d(a){return a&&a.padAngle}function u(a,n,c,_,f,D,S,i){var v=c-a,s=_-n,F=S-f,h=i-D,p=h*v-F*s;if(!(p*p<e.Ni))return p=(F*(n-D)-h*(a-f))/p,[a+p*v,n+p*s]}function r(a,n,c,_,f,D,S){var i=a-c,v=n-_,s=(S?D:-D)/(0,e.RZ)(i*i+v*v),F=s*v,h=-s*i,p=a+F,M=n+h,L=c+F,E=_+h,w=(p+L)/2,C=(M+E)/2,W=L-p,P=E-M,V=W*W+P*P,X=f-D,R=p*E-L*M,G=(P<0?-1:1)*(0,e.RZ)((0,e.T9)(0,X*X*V-R*R)),$=(R*P-W*G)/V,U=(-R*W-P*G)/V,z=(R*P+W*G)/V,I=(-R*W+P*G)/V,o=$-w,g=U-C,Y=z-w,b=I-C;return o*o+g*g>Y*Y+b*b&&($=z,U=I),{cx:$,cy:U,x01:-F,y01:-h,x11:$*(f/X-1),y11:U*(f/X-1)}}function y(){var a=O,n=j,c=(0,m.A)(0),_=null,f=x,D=l,S=d,i=null;function v(){var s,F,h=+a.apply(this,arguments),p=+n.apply(this,arguments),M=f.apply(this,arguments)-e.TW,L=D.apply(this,arguments)-e.TW,E=(0,e.tn)(L-M),w=L>M;if(i||(i=s=(0,T.A)()),p<h&&(F=p,p=h,h=F),!(p>e.Ni))i.moveTo(0,0);else if(E>e.FA-e.Ni)i.moveTo(p*(0,e.gn)(M),p*(0,e.F8)(M)),i.arc(0,0,p,M,L,!w),h>e.Ni&&(i.moveTo(h*(0,e.gn)(L),h*(0,e.F8)(L)),i.arc(0,0,h,L,M,w));else{var C=M,W=L,P=M,V=L,X=E,R=E,G=S.apply(this,arguments)/2,$=G>e.Ni&&(_?+_.apply(this,arguments):(0,e.RZ)(h*h+p*p)),U=(0,e.jk)((0,e.tn)(p-h)/2,+c.apply(this,arguments)),z=U,I=U,o,g;if($>e.Ni){var Y=(0,e.qR)($/h*(0,e.F8)(G)),b=(0,e.qR)($/p*(0,e.F8)(G));(X-=Y*2)>e.Ni?(Y*=w?1:-1,P+=Y,V-=Y):(X=0,P=V=(M+L)/2),(R-=b*2)>e.Ni?(b*=w?1:-1,C+=b,W-=b):(R=0,C=W=(M+L)/2)}var B=p*(0,e.gn)(C),K=p*(0,e.F8)(C),J=h*(0,e.gn)(V),ee=h*(0,e.F8)(V);if(U>e.Ni){var Q=p*(0,e.gn)(W),q=p*(0,e.F8)(W),ae=h*(0,e.gn)(P),ne=h*(0,e.F8)(P),Z;if(E<e.pi&&(Z=u(B,K,ae,ne,Q,q,J,ee))){var oe=B-Z[0],te=K-Z[1],le=Q-Z[0],re=q-Z[1],ue=1/(0,e.F8)((0,e.HQ)((oe*le+te*re)/((0,e.RZ)(oe*oe+te*te)*(0,e.RZ)(le*le+re*re)))/2),ce=(0,e.RZ)(Z[0]*Z[0]+Z[1]*Z[1]);z=(0,e.jk)(U,(h-ce)/(ue-1)),I=(0,e.jk)(U,(p-ce)/(ue+1))}}R>e.Ni?I>e.Ni?(o=r(ae,ne,B,K,p,I,w),g=r(Q,q,J,ee,p,I,w),i.moveTo(o.cx+o.x01,o.cy+o.y01),I<U?i.arc(o.cx,o.cy,I,(0,e.FP)(o.y01,o.x01),(0,e.FP)(g.y01,g.x01),!w):(i.arc(o.cx,o.cy,I,(0,e.FP)(o.y01,o.x01),(0,e.FP)(o.y11,o.x11),!w),i.arc(0,0,p,(0,e.FP)(o.cy+o.y11,o.cx+o.x11),(0,e.FP)(g.cy+g.y11,g.cx+g.x11),!w),i.arc(g.cx,g.cy,I,(0,e.FP)(g.y11,g.x11),(0,e.FP)(g.y01,g.x01),!w))):(i.moveTo(B,K),i.arc(0,0,p,C,W,!w)):i.moveTo(B,K),!(h>e.Ni)||!(X>e.Ni)?i.lineTo(J,ee):z>e.Ni?(o=r(J,ee,Q,q,h,-z,w),g=r(B,K,ae,ne,h,-z,w),i.lineTo(o.cx+o.x01,o.cy+o.y01),z<U?i.arc(o.cx,o.cy,z,(0,e.FP)(o.y01,o.x01),(0,e.FP)(g.y01,g.x01),!w):(i.arc(o.cx,o.cy,z,(0,e.FP)(o.y01,o.x01),(0,e.FP)(o.y11,o.x11),!w),i.arc(0,0,h,(0,e.FP)(o.cy+o.y11,o.cx+o.x11),(0,e.FP)(g.cy+g.y11,g.cx+g.x11),w),i.arc(g.cx,g.cy,z,(0,e.FP)(g.y11,g.x11),(0,e.FP)(g.y01,g.x01),!w))):i.arc(0,0,h,V,P,w)}if(i.closePath(),s)return i=null,s+""||null}return v.centroid=function(){var s=(+a.apply(this,arguments)+ +n.apply(this,arguments))/2,F=(+f.apply(this,arguments)+ +D.apply(this,arguments))/2-e.pi/2;return[(0,e.gn)(F)*s,(0,e.F8)(F)*s]},v.innerRadius=function(s){return arguments.length?(a=typeof s=="function"?s:(0,m.A)(+s),v):a},v.outerRadius=function(s){return arguments.length?(n=typeof s=="function"?s:(0,m.A)(+s),v):n},v.cornerRadius=function(s){return arguments.length?(c=typeof s=="function"?s:(0,m.A)(+s),v):c},v.padRadius=function(s){return arguments.length?(_=s==null?null:typeof s=="function"?s:(0,m.A)(+s),v):_},v.startAngle=function(s){return arguments.length?(f=typeof s=="function"?s:(0,m.A)(+s),v):f},v.endAngle=function(s){return arguments.length?(D=typeof s=="function"?s:(0,m.A)(+s),v):D},v.padAngle=function(s){return arguments.length?(S=typeof s=="function"?s:(0,m.A)(+s),v):S},v.context=function(s){return arguments.length?(i=s??null,v):i},v}},"../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/constant.js":(N,A,t)=>{t.d(A,{A:()=>T});function T(m){return function(){return m}}},"../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/math.js":(N,A,t)=>{t.d(A,{F8:()=>x,FA:()=>y,FP:()=>m,HQ:()=>a,Ni:()=>d,RZ:()=>l,T9:()=>O,TW:()=>r,gn:()=>e,jk:()=>j,pi:()=>u,qR:()=>n,tn:()=>T});var T=Math.abs,m=Math.atan2,e=Math.cos,O=Math.max,j=Math.min,x=Math.sin,l=Math.sqrt,d=1e-12,u=Math.PI,r=u/2,y=2*u;function a(c){return c>1?0:c<-1?u:Math.acos(c)}function n(c){return c>=1?r:c<=-1?-r:Math.asin(c)}},"../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js":(N,A,t)=>{t.d(A,{A:()=>j});var T=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/constant.js");function m(x,l){return l<x?-1:l>x?1:l>=x?0:NaN}function e(x){return x}var O=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/math.js");function j(){var x=e,l=m,d=null,u=(0,T.A)(0),r=(0,T.A)(O.FA),y=(0,T.A)(0);function a(n){var c,_=n.length,f,D,S=0,i=new Array(_),v=new Array(_),s=+u.apply(this,arguments),F=Math.min(O.FA,Math.max(-O.FA,r.apply(this,arguments)-s)),h,p=Math.min(Math.abs(F)/_,y.apply(this,arguments)),M=p*(F<0?-1:1),L;for(c=0;c<_;++c)(L=v[i[c]=c]=+x(n[c],c,n))>0&&(S+=L);for(l!=null?i.sort(function(E,w){return l(v[E],v[w])}):d!=null&&i.sort(function(E,w){return d(n[E],n[w])}),c=0,D=S?(F-_*M)/S:0;c<_;++c,s=h)f=i[c],L=v[f],h=s+(L>0?L*D:0)+M,v[f]={data:n[f],index:c,value:L,startAngle:s,endAngle:h,padAngle:p};return v}return a.value=function(n){return arguments.length?(x=typeof n=="function"?n:(0,T.A)(+n),a):x},a.sortValues=function(n){return arguments.length?(l=n,d=null,a):l},a.sort=function(n){return arguments.length?(d=n,l=null,a):d},a.startAngle=function(n){return arguments.length?(u=typeof n=="function"?n:(0,T.A)(+n),a):u},a.endAngle=function(n){return arguments.length?(r=typeof n=="function"?n:(0,T.A)(+n),a):r},a.padAngle=function(n){return arguments.length?(y=typeof n=="function"?n:(0,T.A)(+n),a):y},a}}}]);
