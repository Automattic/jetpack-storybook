"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4722],{"../charts/src/components/line-chart/stories/index.stories.tsx":(V,F,t)=>{t.r(F),t.d(F,{BrokenLine:()=>C,CurveTypes:()=>M,CustomDimensions:()=>_,CustomTooltips:()=>D,DateStringFormats:()=>m,Default:()=>a,ErrorStates:()=>o,FixedDimensions:()=>r,GridientFilled:()=>l,SingleSeries:()=>c,SmartFormatting:()=>T,WithLegend:()=>v,WithPointerEvents:()=>g,WithVerticalLegend:()=>L,WithoutSmoothing:()=>b,WithoutTooltip:()=>f,__namedExportsOrder:()=>z,default:()=>w});var S=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=t("../charts/src/components/line-chart/line-chart.tsx"),e=t("../charts/src/components/line-chart/stories/large-values-sample.ts");const j=[{label:"London",data:[{date:new Date("2022-01-01"),value:7.8},{date:new Date("2022-01-08"),value:7.2},{date:new Date("2022-01-15"),value:6.9},{date:new Date("2022-01-22"),value:6.5},{date:new Date("2022-01-29"),value:7.1},{date:new Date("2022-02-05"),value:8.3},{date:new Date("2022-02-12"),value:8.9},{date:new Date("2022-02-19"),value:9.2},{date:new Date("2022-02-26"),value:8.7},{date:new Date("2022-03-05"),value:9.4},{date:new Date("2022-03-12"),value:10.2},{date:new Date("2022-03-19"),value:11.5},{date:new Date("2022-03-26"),value:12.3},{date:new Date("2022-04-02"),value:13.1},{date:new Date("2022-04-09"),value:13.8},{date:new Date("2022-04-16"),value:14.6},{date:new Date("2022-04-23"),value:15.2},{date:new Date("2022-04-30"),value:15.9},{date:new Date("2022-05-07"),value:16.7},{date:new Date("2022-05-14"),value:17.4},{date:new Date("2022-05-21"),value:18.2},{date:new Date("2022-05-28"),value:18.9},{date:new Date("2022-06-04"),value:19.7},{date:new Date("2022-06-11"),value:20.5},{date:new Date("2022-06-18"),value:21.3},{date:new Date("2022-06-25"),value:22.1},{date:new Date("2022-07-02"),value:22.8},{date:new Date("2022-07-09"),value:23.6},{date:new Date("2022-07-16"),value:24.4},{date:new Date("2022-07-23"),value:25.2},{date:new Date("2022-07-30"),value:24.8},{date:new Date("2022-08-06"),value:24.1},{date:new Date("2022-08-13"),value:23.5},{date:new Date("2022-08-20"),value:22.8},{date:new Date("2022-08-27"),value:21.9},{date:new Date("2022-09-03"),value:20.7},{date:new Date("2022-09-10"),value:19.5},{date:new Date("2022-09-17"),value:18.3},{date:new Date("2022-09-24"),value:17.1},{date:new Date("2022-10-01"),value:16.2},{date:new Date("2022-10-08"),value:15.1},{date:new Date("2022-10-15"),value:14.2},{date:new Date("2022-10-22"),value:13.1},{date:new Date("2022-10-29"),value:12.2},{date:new Date("2022-11-05"),value:11.1},{date:new Date("2022-11-12"),value:10.2},{date:new Date("2022-11-19"),value:9.1},{date:new Date("2022-11-26"),value:8.2},{date:new Date("2022-12-03"),value:7.1},{date:new Date("2022-12-10"),value:6.2},{date:new Date("2022-12-17"),value:5.5},{date:new Date("2022-12-24"),value:5.2},{date:new Date("2022-12-31"),value:6.8},{date:new Date("2023-01-01"),value:8.2},{date:new Date("2023-01-08"),value:7.9},{date:new Date("2023-01-15"),value:5.1},{date:new Date("2023-01-22"),value:4.8},{date:new Date("2023-01-29"),value:6.3},{date:new Date("2023-02-05"),value:7.2},{date:new Date("2023-02-12"),value:9.4},{date:new Date("2023-02-19"),value:8.7},{date:new Date("2023-02-26"),value:7.1},{date:new Date("2023-03-05"),value:8.3},{date:new Date("2023-03-12"),value:9.5},{date:new Date("2023-03-19"),value:11.2},{date:new Date("2023-03-26"),value:12.8},{date:new Date("2023-04-02"),value:13.4},{date:new Date("2023-04-09"),value:14.1},{date:new Date("2023-04-16"),value:15.3},{date:new Date("2023-04-23"),value:14.8},{date:new Date("2023-04-30"),value:15.7},{date:new Date("2023-05-07"),value:16.9},{date:new Date("2023-05-14"),value:17.2},{date:new Date("2023-05-21"),value:18.4},{date:new Date("2023-05-28"),value:19.1},{date:new Date("2023-06-04"),value:20.3},{date:new Date("2023-06-11"),value:21.5},{date:new Date("2023-06-18"),value:22.8},{date:new Date("2023-06-25"),value:21.9},{date:new Date("2023-07-02"),value:23.1},{date:new Date("2023-07-09"),value:22.7},{date:new Date("2023-07-16"),value:24.2},{date:new Date("2023-07-23"),value:23.8},{date:new Date("2023-07-30"),value:22.9},{date:new Date("2023-08-06"),value:23.4},{date:new Date("2023-08-13"),value:22.8},{date:new Date("2023-08-20"),value:21.9},{date:new Date("2023-08-27"),value:20.7},{date:new Date("2023-09-03"),value:19.8},{date:new Date("2023-09-10"),value:18.9},{date:new Date("2023-09-17"),value:17.6},{date:new Date("2023-09-24"),value:16.8},{date:new Date("2023-10-01"),value:15.9},{date:new Date("2023-10-08"),value:14.7},{date:new Date("2023-10-15"),value:13.8},{date:new Date("2023-10-22"),value:12.9},{date:new Date("2023-10-29"),value:11.7},{date:new Date("2023-11-05"),value:10.8},{date:new Date("2023-11-12"),value:9.9},{date:new Date("2023-11-19"),value:8.7},{date:new Date("2023-11-26"),value:7.8},{date:new Date("2023-12-03"),value:6.9},{date:new Date("2023-12-10"),value:5.8},{date:new Date("2023-12-17"),value:4.9},{date:new Date("2023-12-24"),value:5.7},{date:new Date("2023-12-31"),value:6.2}]},{label:"Canberra",data:[{date:new Date("2022-01-01"),value:27.9},{date:new Date("2022-01-08"),value:28.4},{date:new Date("2022-01-15"),value:29.2},{date:new Date("2022-01-22"),value:28.9},{date:new Date("2022-01-29"),value:28.1},{date:new Date("2022-02-05"),value:27.3},{date:new Date("2022-02-12"),value:26.5},{date:new Date("2022-02-19"),value:25.4},{date:new Date("2022-02-26"),value:24.2},{date:new Date("2022-03-05"),value:23.1},{date:new Date("2022-03-12"),value:22.3},{date:new Date("2022-03-19"),value:21.2},{date:new Date("2022-03-26"),value:20.1},{date:new Date("2022-04-02"),value:19.2},{date:new Date("2022-04-09"),value:18.1},{date:new Date("2022-04-16"),value:16.9},{date:new Date("2022-04-23"),value:15.8},{date:new Date("2022-04-30"),value:14.9},{date:new Date("2022-05-07"),value:13.8},{date:new Date("2022-05-14"),value:12.9},{date:new Date("2022-05-21"),value:11.8},{date:new Date("2022-05-28"),value:10.9},{date:new Date("2022-06-04"),value:9.8},{date:new Date("2022-06-11"),value:8.9},{date:new Date("2022-06-18"),value:8.1},{date:new Date("2022-06-25"),value:7.5},{date:new Date("2022-07-02"),value:6.9},{date:new Date("2022-07-09"),value:6.7},{date:new Date("2022-07-16"),value:7.1},{date:new Date("2022-07-23"),value:7.9},{date:new Date("2022-07-30"),value:8.8},{date:new Date("2022-08-06"),value:9.9},{date:new Date("2022-08-13"),value:11.2},{date:new Date("2022-08-20"),value:12.4},{date:new Date("2022-08-27"),value:13.6},{date:new Date("2022-09-03"),value:14.8},{date:new Date("2022-09-10"),value:16.1},{date:new Date("2022-09-17"),value:17.3},{date:new Date("2022-09-24"),value:18.5},{date:new Date("2022-10-01"),value:19.8},{date:new Date("2022-10-08"),value:21.1},{date:new Date("2022-10-15"),value:22.3},{date:new Date("2022-10-22"),value:23.5},{date:new Date("2022-10-29"),value:24.6},{date:new Date("2022-11-05"),value:25.7},{date:new Date("2022-11-12"),value:26.5},{date:new Date("2022-11-19"),value:27.4},{date:new Date("2022-11-26"),value:28.2},{date:new Date("2022-12-03"),value:28.9},{date:new Date("2022-12-10"),value:29.5},{date:new Date("2022-12-17"),value:29.1},{date:new Date("2022-12-24"),value:28.2},{date:new Date("2022-12-31"),value:28.7},{date:new Date("2023-01-01"),value:28.5},{date:new Date("2023-01-08"),value:29.2},{date:new Date("2023-01-15"),value:30.1},{date:new Date("2023-01-22"),value:29.8},{date:new Date("2023-01-29"),value:28.9},{date:new Date("2023-02-05"),value:27.8},{date:new Date("2023-02-12"),value:26.9},{date:new Date("2023-02-19"),value:25.7},{date:new Date("2023-02-26"),value:24.8},{date:new Date("2023-03-05"),value:23.9},{date:new Date("2023-03-12"),value:22.8},{date:new Date("2023-03-19"),value:21.7},{date:new Date("2023-03-26"),value:20.8},{date:new Date("2023-04-02"),value:19.6},{date:new Date("2023-04-09"),value:18.4},{date:new Date("2023-04-16"),value:17.2},{date:new Date("2023-04-23"),value:16.1},{date:new Date("2023-04-30"),value:15.3},{date:new Date("2023-05-07"),value:14.2},{date:new Date("2023-05-14"),value:13.1},{date:new Date("2023-05-21"),value:12.3},{date:new Date("2023-05-28"),value:11.4},{date:new Date("2023-06-04"),value:10.2},{date:new Date("2023-06-11"),value:9.1},{date:new Date("2023-06-18"),value:8.3},{date:new Date("2023-06-25"),value:7.8},{date:new Date("2023-07-02"),value:7.1},{date:new Date("2023-07-09"),value:6.9},{date:new Date("2023-07-16"),value:7.2},{date:new Date("2023-07-23"),value:8.1},{date:new Date("2023-07-30"),value:9.3},{date:new Date("2023-08-06"),value:10.4},{date:new Date("2023-08-13"),value:11.6},{date:new Date("2023-08-20"),value:12.8},{date:new Date("2023-08-27"),value:13.9},{date:new Date("2023-09-03"),value:15.2},{date:new Date("2023-09-10"),value:16.4},{date:new Date("2023-09-17"),value:17.6},{date:new Date("2023-09-24"),value:18.9},{date:new Date("2023-10-01"),value:20.1},{date:new Date("2023-10-08"),value:21.3},{date:new Date("2023-10-15"),value:22.5},{date:new Date("2023-10-22"),value:23.7},{date:new Date("2023-10-29"),value:24.8},{date:new Date("2023-11-05"),value:25.9},{date:new Date("2023-11-12"),value:26.7},{date:new Date("2023-11-19"),value:27.8},{date:new Date("2023-11-26"),value:28.6},{date:new Date("2023-12-03"),value:29.4},{date:new Date("2023-12-10"),value:30.2},{date:new Date("2023-12-17"),value:29.8},{date:new Date("2023-12-24"),value:28.9},{date:new Date("2023-12-31"),value:29.3}]},{label:"Mars",data:[{date:new Date("2022-01-01"),value:-62},{date:new Date("2022-01-08"),value:-63},{date:new Date("2022-01-15"),value:-64},{date:new Date("2022-01-22"),value:-62},{date:new Date("2022-01-29"),value:-61},{date:new Date("2022-02-05"),value:-59},{date:new Date("2022-02-12"),value:-56},{date:new Date("2022-02-19"),value:-53},{date:new Date("2022-02-26"),value:-50},{date:new Date("2022-03-05"),value:-47},{date:new Date("2022-03-12"),value:-44},{date:new Date("2022-03-19"),value:-41},{date:new Date("2022-03-26"),value:-37},{date:new Date("2022-04-02"),value:-34},{date:new Date("2022-04-09"),value:-31},{date:new Date("2022-04-16"),value:-27},{date:new Date("2022-04-23"),value:-24},{date:new Date("2022-04-30"),value:-21},{date:new Date("2022-05-07"),value:-17},{date:new Date("2022-05-14"),value:-14},{date:new Date("2022-05-21"),value:-11},{date:new Date("2022-05-28"),value:-7},{date:new Date("2022-06-04"),value:-4},{date:new Date("2022-06-11"),value:-1},{date:new Date("2022-06-18"),value:1},{date:new Date("2022-06-25"),value:3},{date:new Date("2022-07-02"),value:6},{date:new Date("2022-07-09"),value:9},{date:new Date("2022-07-16"),value:11},{date:new Date("2022-07-23"),value:13},{date:new Date("2022-07-30"),value:16},{date:new Date("2022-08-06"),value:18},{date:new Date("2022-08-13"),value:21},{date:new Date("2022-08-20"),value:23},{date:new Date("2022-08-27"),value:21},{date:new Date("2022-09-03"),value:19},{date:new Date("2022-09-10"),value:16},{date:new Date("2022-09-17"),value:13},{date:new Date("2022-09-24"),value:9},{date:new Date("2022-10-01"),value:6},{date:new Date("2022-10-08"),value:3},{date:new Date("2022-10-15"),value:-1},{date:new Date("2022-10-22"),value:-4},{date:new Date("2022-10-29"),value:-7},{date:new Date("2022-11-05"),value:-11},{date:new Date("2022-11-12"),value:-14},{date:new Date("2022-11-19"),value:-17},{date:new Date("2022-11-26"),value:-21},{date:new Date("2022-12-03"),value:-24},{date:new Date("2022-12-10"),value:-27},{date:new Date("2022-12-17"),value:-31},{date:new Date("2022-12-24"),value:-36},{date:new Date("2022-12-31"),value:-37},{date:new Date("2023-01-01"),value:-63},{date:new Date("2023-01-08"),value:-64},{date:new Date("2023-01-15"),value:-65},{date:new Date("2023-01-22"),value:-63},{date:new Date("2023-01-29"),value:-62},{date:new Date("2023-02-05"),value:-60},{date:new Date("2023-02-12"),value:-58},{date:new Date("2023-02-19"),value:-55},{date:new Date("2023-02-26"),value:-52},{date:new Date("2023-03-05"),value:-48},{date:new Date("2023-03-12"),value:-45},{date:new Date("2023-03-19"),value:-42},{date:new Date("2023-03-26"),value:-38},{date:new Date("2023-04-02"),value:-35},{date:new Date("2023-04-09"),value:-32},{date:new Date("2023-04-16"),value:-28},{date:new Date("2023-04-23"),value:-25},{date:new Date("2023-04-30"),value:-22},{date:new Date("2023-05-07"),value:-18},{date:new Date("2023-05-14"),value:-15},{date:new Date("2023-05-21"),value:-12},{date:new Date("2023-05-28"),value:-8},{date:new Date("2023-06-04"),value:-5},{date:new Date("2023-06-11"),value:-2},{date:new Date("2023-06-18"),value:0},{date:new Date("2023-06-25"),value:2},{date:new Date("2023-07-02"),value:5},{date:new Date("2023-07-09"),value:8},{date:new Date("2023-07-16"),value:10},{date:new Date("2023-07-23"),value:12},{date:new Date("2023-07-30"),value:15},{date:new Date("2023-08-06"),value:17},{date:new Date("2023-08-13"),value:20},{date:new Date("2023-08-20"),value:22},{date:new Date("2023-08-27"),value:20},{date:new Date("2023-09-03"),value:18},{date:new Date("2023-09-10"),value:15},{date:new Date("2023-09-17"),value:12},{date:new Date("2023-09-24"),value:8},{date:new Date("2023-10-01"),value:5},{date:new Date("2023-10-08"),value:2},{date:new Date("2023-10-15"),value:-2},{date:new Date("2023-10-22"),value:-5},{date:new Date("2023-10-29"),value:-8},{date:new Date("2023-11-05"),value:-12},{date:new Date("2023-11-12"),value:-15},{date:new Date("2023-11-19"),value:-18},{date:new Date("2023-11-26"),value:-22},{date:new Date("2023-12-03"),value:-25},{date:new Date("2023-12-10"),value:-28},{date:new Date("2023-12-17"),value:-32},{date:new Date("2023-12-24"),value:-35},{date:new Date("2023-12-31"),value:-38}]}];var y=t("../charts/src/components/line-chart/stories/site-traffic-sample.ts"),s=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),d=`import React from 'react';
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
`,u={Default:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},SingleSeries:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},WithoutTooltip:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},CustomDimensions:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},WithLegend:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},WithVerticalLegend:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},FixedDimensions:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},GridientFilled:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},ErrorStates:{startLoc:{col:27,line:120},endLoc:{col:1,line:195},startBody:{col:27,line:120},endBody:{col:1,line:195}},WithoutSmoothing:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},CustomTooltips:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},WithPointerEvents:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},CurveTypes:{startLoc:{col:26,line:248},endLoc:{col:1,line:338},startBody:{col:26,line:248},endBody:{col:1,line:338}},SmartFormatting:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},BrokenLine:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},DateStringFormats:{startLoc:{col:33,line:395},endLoc:{col:1,line:428},startBody:{col:33,line:395},endBody:{col:1,line:428}}};const w={title:"JS Packages/Charts/Types/Line Chart",component:p.A,parameters:{storySource:{source:`/* wp:polyfill */
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
};`,locationsMap:{default:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"single-series":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"without-tooltip":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"custom-dimensions":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"with-legend":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"with-vertical-legend":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"fixed-dimensions":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"gridient-filled":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"error-states":{startLoc:{col:27,line:120},endLoc:{col:1,line:195},startBody:{col:27,line:120},endBody:{col:1,line:195}},"without-smoothing":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"custom-tooltips":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"with-pointer-events":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"curve-types":{startLoc:{col:26,line:248},endLoc:{col:1,line:338},startBody:{col:26,line:248},endBody:{col:1,line:338}},"smart-formatting":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"broken-line":{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}},"date-string-formats":{startLoc:{col:33,line:395},endLoc:{col:1,line:428},startBody:{col:33,line:395},endBody:{col:1,line:428}}}},layout:"centered"},decorators:[E=>(0,s.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,s.jsx)(E,{})})]},n=E=>(0,s.jsx)(p.A,{...E}),a=n.bind({});a.args={data:j,showLegend:!1,legendOrientation:"horizontal",withGradientFill:!1,smoothing:!0,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}}};const c=n.bind({});c.args={data:[j[0]]};const f=n.bind({});f.args={...a.args,withTooltips:!1};const _=n.bind({});_.args={width:800,height:400,data:j};const v=n.bind({});v.args={...a.args,showLegend:!0};const L=n.bind({});L.args={...a.args,showLegend:!0,legendOrientation:"vertical"};const r=n.bind({});r.args={width:800,height:400,data:j,withTooltips:!0},r.parameters={docs:{description:{story:"Line chart with fixed dimensions that override the responsive behavior."}}};const l=n.bind({});l.args={...a.args,margin:void 0,data:y.A,withGradientFill:!0,options:{axis:{y:{orientation:"right"}}}};const o={render:()=>(0,s.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Empty Data"}),(0,s.jsx)(p.A,{width:300,height:200,data:[]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Invalid Date Values"}),(0,s.jsx)(p.A,{width:300,height:200,data:[{label:"Invalid Dates",data:[{date:new Date("invalid"),value:10},{date:new Date("2024-01-02"),value:20}],options:{}}]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Invalid Values"}),(0,s.jsx)(p.A,{width:300,height:200,data:[{label:"Invalid Values",data:[{date:new Date("2024-01-01"),value:NaN},{date:new Date("2024-01-02"),value:null}],options:{}}]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Single Data Point"}),(0,s.jsx)(p.A,{width:300,height:200,data:[{label:"Single Point",data:[{date:new Date("2024-01-01"),value:100}],options:{}}]})]})]}),parameters:{docs:{description:{story:"Examples of how the line chart handles various error states and edge cases."}}}},b=n.bind({});b.args={...a.args,smoothing:!1};const D=n.bind({});D.args={...a.args,renderTooltip:({tooltipData:E})=>{const Y=E?.nearestDatum?.datum;if(!Y)return null;const N=Object.entries(E?.datumByKey||{}).map(([k,{datum:I}])=>({key:k,value:I.value})).sort((k,I)=>I.value-k.value);return(0,s.jsxs)("div",{children:[(0,s.jsxs)("h3",{children:[Y?.date?.toLocaleDateString()," \u{1F4AF} "]}),(0,s.jsx)("table",{style:{border:"1px solid black",borderCollapse:"collapse"},children:N.map(k=>(0,s.jsxs)("tr",{style:{border:"1px solid black"},children:[(0,s.jsx)("td",{style:{border:"1px solid black"},children:k.key}),(0,s.jsx)("td",{children:k.value})]},k.key))})]})}};const g=n.bind({});g.args={...a.args,onPointerDown:({datum:E})=>alert("Pointer down:"+JSON.stringify(E))};const M={render:()=>{const E=[{label:"Sample Series",data:[{date:new Date("2024-01-01"),value:10},{date:new Date("2024-01-02"),value:90},{date:new Date("2024-01-03"),value:85},{date:new Date("2024-01-04"),value:82},{date:new Date("2024-01-05"),value:5},{date:new Date("2024-01-06"),value:8},{date:new Date("2024-01-07"),value:10}],options:{}}];return(0,s.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Linear Curve"}),(0,s.jsx)(p.A,{width:300,height:200,data:E,curveType:"linear",showLegend:!1,withGradientFill:!1})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Smooth Curve (Catmull-Rom)"}),(0,s.jsx)(p.A,{width:300,height:200,data:E,curveType:"smooth",showLegend:!1,withGradientFill:!1})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Monotone X Curve"}),(0,s.jsx)(p.A,{width:300,height:200,data:E,curveType:"monotone",showLegend:!1,withGradientFill:!1})]})]})},parameters:{docs:{description:{story:"Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points."}}}},T=n.bind({});T.args={data:e.A,showLegend:!0,legendOrientation:"horizontal",withGradientFill:!1,smoothing:!0,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}}},T.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const C=n.bind({});C.args={...a.args,margin:{bottom:40},showLegend:!0,data:[{...y.A[0],label:"Vistors to compare",options:{...y.A[0].options,seriesLineStyle:{strokeDasharray:"5 5 1"},legendShapeStyle:{strokeDasharray:"5 5 1"}}},y.A[1]]},C.parameters={docs:{description:{story:"Demonstrates the option of setting a seriesLineStyle to a dash array."}}};const m={render:()=>(0,s.jsx)(p.A,{data:[{label:"String Dates",data:[{dateString:"2024-01-01",value:10},{dateString:"2024-01-02",value:20},{dateString:"2024-01-03 00:00:00",value:15},{dateString:"2024-01-04",value:25},{dateString:"2024-01-05 00:00",value:30}],options:{}}],withGradientFill:!1}),parameters:{docs:{description:{story:`Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:
- Simple date strings (YYYY-MM-DD)
- Date with time (YYYY-MM-DD 00:00:00)
- Date with time (YYYY-MM-DD 00:00)
- ISO format (YYYY-MM-DDT00:00:00)
- UTC format (YYYY-MM-DDT00:00:00Z)
- Timezone offset (YYYY-MM-DDT00:00:00\xB1HH:mm)
`}}}},z=["Default","SingleSeries","WithoutTooltip","CustomDimensions","WithLegend","WithVerticalLegend","FixedDimensions","GridientFilled","ErrorStates","WithoutSmoothing","CustomTooltips","WithPointerEvents","CurveTypes","SmartFormatting","BrokenLine","DateStringFormats"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...a.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...c.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...f.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...v.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...L.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...r.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...l.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...b.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...D.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...g.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...T.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...C.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}}},"../charts/src/components/legend/base-legend.tsx":(V,F,t)=>{t.d(F,{$:()=>r});var S=t("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),p=t("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendItem.js"),e=t("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendShape.js"),B=t("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendLabel.js"),j=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),y=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),s=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=t.n(d),i=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss"),w={};w.insert="head",w.singleton=!1;var n=u()(i.A,w);const a=i.A.locals||{};function c(l){return l&&typeof l=="object"&&"value"in l&&typeof l.value<"u"?l.value:l}function f(l){return String(c(l))}function _({scale:l,labelFormat:o}){return(b,D)=>({datum:b,index:D,text:`${o(b,D)}`,value:l(b)})}var v=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const L={horizontal:"row",vertical:"column"},r=({items:l,className:o,orientation:b="horizontal",shape:D="rect",fill:g=f,size:M=f,labelFormat:T=c,labelTransform:C=_,shapeWidth:m=16,shapeHeight:z=16,shapeMargin:E="2px 4px 2px 0",labelAlign:Y="left",labelFlex:N="1",labelMargin:k="0 4px",itemMargin:I="0",itemDirection:H="row",legendLabelProps:P,...O})=>{const R=(0,j.A)({domain:l.map(x=>x.label),range:l.map(x=>x.color)}),A=R.domain(),h=(0,s.useCallback)(({index:x})=>l[x]?.shapeStyle??{},[l]);return(0,v.jsx)(S.A,{scale:R,labelFormat:T,labelTransform:C,children:x=>(0,v.jsx)("div",{role:"list","data-testid":`legend-${b}`,className:(0,y.A)(a.legend,a[`legend--${b}`],o),style:{flexDirection:L[b]},children:x.map((U,K)=>(0,v.jsxs)(p.A,{className:a["legend-item"],"data-testid":"legend-item",margin:I,flexDirection:H,...O,children:[(0,v.jsx)(e.A,{shape:D,height:z,width:m,margin:E,item:A[K],itemIndex:K,label:U,fill:g,size:M,shapeStyle:h}),(0,v.jsxs)(B.A,{label:U.text,flex:N,margin:k,align:Y,className:a["legend-item-label"],...P,children:[U.text,l.find(X=>X.label===U.text)?.value&&(0,v.jsx)("span",{className:a["legend-item-value"],children:l.find(X=>X.label===U.text)?.value})]})]},`legend-${U.text}-${K}`))})})};try{r.displayName="BaseLegend",r.__docgenInfo={description:"",displayName:"BaseLegend",props:{size:{defaultValue:null,description:"Legend item size accessor function.",name:"size",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string | number"}},className:{defaultValue:null,description:"Classname to be applied to legend container.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Optional render function override.",name:"children",required:!1,type:{name:"(labels: { datum: any; index: number; text: string; value?: any; }[]) => React.ReactNode"}},style:{defaultValue:null,description:"Styles to be applied to the legend container.",name:"style",required:!1,type:{name:"React.CSSProperties"}},fill:{defaultValue:null,description:"Legend item fill accessor function.",name:"fill",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string"}},domain:{defaultValue:null,description:"Legend domain.",name:"domain",required:!1,type:{name:"any[]"}},shapeWidth:{defaultValue:{value:"16"},description:"Width of the legend shape.",name:"shapeWidth",required:!1,type:{name:"string | number"}},shapeHeight:{defaultValue:{value:"16"},description:"Height of the legend shape.",name:"shapeHeight",required:!1,type:{name:"string | number"}},shapeMargin:{defaultValue:{value:"2px 4px 2px 0"},description:"Margin of the legend shape.",name:"shapeMargin",required:!1,type:{name:"string | number"}},labelAlign:{defaultValue:{value:"left"},description:"Flex-box alignment of legend item labels.",name:"labelAlign",required:!1,type:{name:"string"}},labelFlex:{defaultValue:{value:"1"},description:"Flex-box flex of legend item labels.",name:"labelFlex",required:!1,type:{name:"string | number"}},labelMargin:{defaultValue:{value:"0 4px"},description:"Margin of legend item labels.",name:"labelMargin",required:!1,type:{name:"string | number"}},itemMargin:{defaultValue:{value:"0"},description:"Margin of legend items.",name:"itemMargin",required:!1,type:{name:"string | number"}},itemDirection:{defaultValue:{value:"row"},description:"Flex direction of legend items.",name:"itemDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},shape:{defaultValue:{value:"rect"},description:"Legend shape string preset or Element or Component.",name:"shape",required:!1,type:{name:"LegendShape<any, any>"}},labelFormat:{defaultValue:null,description:"Given a legend item and its index, returns an item label.",name:"labelFormat",required:!1,type:{name:"LabelFormatter<any>"}},labelTransform:{defaultValue:null,description:"Given the legend scale and labelFormatter, returns a label with datum, index, value, and label.",name:"labelTransform",required:!1,type:{name:"LabelFormatterFactory<ScaleOrdinal<any, any, never>>"}},legendLabelProps:{defaultValue:null,description:"Additional props to be set on LegendLabel.",name:"legendLabelProps",required:!1,type:{name:"Partial<LegendLabelProps>"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItem[]"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:r.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../charts/src/components/line-chart/line-chart.tsx":(V,F,t)=>{t.d(F,{A:()=>H});var S=t("../number-formatters/src/index.ts"),p=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/catmullRom.js"),e=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/linear.js"),B=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/monotone.js"),j=t("../../../node_modules/.pnpm/@visx+gradient@3.12.0_react@18.3.1/node_modules/@visx/gradient/esm/gradients/LinearGradient.js"),y=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),s=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),d=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),u=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/AreaSeries.js"),i=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),w=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=t("../charts/src/providers/theme/theme-provider.tsx"),c=t("../charts/src/components/legend/base-legend.tsx"),f=t("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js"),_=t("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js"),v=t("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse.js");const L=P=>/T.*[Z]$|T.*[+-]\d{2}:?\d{2}$/.test(P),r=P=>{const O=P.trim();if(L(O)){const A=(0,f.H)(O);return(0,_.f)(A)?A:new Date(NaN)}const R=["yyyy-MM-dd","yyyy-MM-dd HH:mm:ss","yyyy-MM-dd HH:mm","yyyy-MM-dd'T'HH:mm:ss","yyyy-MM-dd'T'HH:mm:ss.SSS","yyyy-MM-dd'T'HH:mm"];for(const A of R){const h=(0,v.qg)(O,A,new Date);if((0,_.f)(h))return h}return new Date(NaN)};var l=t("../charts/src/components/shared/use-chart-margin.tsx"),o=t("../charts/src/components/shared/with-responsive.tsx"),b=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=t.n(b),g=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss"),M={};M.insert="head",M.singleton=!1;var T=D()(g.A,M);const C=g.A.locals||{};var m=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const z=100,E=(P,O)=>{if(!P)return O?p.A:e.A;switch(P){case"smooth":return p.A;case"monotone":return B.G;case"linear":return e.A;default:return e.A}},Y=({tooltipData:P})=>{const O=P?.nearestDatum?.datum;if(!O)return null;const R=Object.entries(P?.datumByKey||{}).map(([A,{datum:h}])=>({key:A,value:h.value})).sort((A,h)=>h.value-A.value);return(0,m.jsxs)("div",{className:C["line-chart__tooltip"],children:[(0,m.jsx)("div",{className:C["line-chart__tooltip-date"],children:O.date?.toLocaleDateString()}),R.map(A=>(0,m.jsxs)("div",{className:C["line-chart__tooltip-row"],children:[(0,m.jsxs)("span",{className:C["line-chart__tooltip-label"],children:[A.key,":"]}),(0,m.jsx)("span",{className:C["line-chart__tooltip-value"],children:A.value})]},A.key))]})},N=P=>new Date(P).toLocaleDateString(void 0,{month:"short",day:"numeric"}),k=P=>P?.length?P.some(R=>R.data.some(A=>isNaN(A.value)||A.value===null||A.value===void 0||isNaN(A.date.getTime())))?"Invalid data":null:"No data available",I=({data:P,width:O,height:R,className:A,margin:h,withTooltips:x=!0,showLegend:U=!1,legendOrientation:K="horizontal",legendShape:X="line",withGradientFill:$=!1,smoothing:ae=!0,curveType:ne,renderTooltip:se=Y,options:Z={},onPointerDown:le=void 0,onPointerUp:re=void 0,onPointerMove:J=void 0,onPointerOut:ie=void 0})=>{const Q=(0,a.RW)(),q=(0,a.Ox)(P),oe=(0,n.useId)(),ee=(0,n.useMemo)(()=>P.map(W=>({...W,data:W.data.map(G=>({...G,date:G.date?G.date:r(G.dateString)})).sort((G,de)=>G.date.getTime()-de.date.getTime())})),[P]),te=(0,n.useMemo)(()=>({axis:{x:{orientation:"bottom",numTicks:Math.min(ee[0]?.data.length,Math.ceil(O/z)),tickFormat:N,...Z?.axis?.x},y:{orientation:"left",numTicks:4,tickFormat:S.qe,...Z?.axis?.y}},xScale:{type:"time",...Z?.xScale},yScale:{type:"linear",nice:!0,zero:!1,...Z?.yScale}}),[Z,ee,O]),ce=(0,l.a)(R,te,ee,q),ue=k(ee);if(ue)return(0,m.jsx)("div",{className:(0,w.A)("line-chart",C["line-chart"]),children:ue});const me=ee.map((W,G)=>({label:W.label,value:"",color:W?.options?.stroke??Q.colors[G%Q.colors.length],shapeStyle:W?.options?.legendShapeStyle??Q.legendShapeStyles?.[G]??{}})),he={xAccessor:W=>W?.date,yAccessor:W=>W?.value};return(0,m.jsxs)("div",{className:(0,w.A)("line-chart",C["line-chart"],A),"data-testid":"line-chart",role:"img","aria-label":"line chart",children:[(0,m.jsxs)(y.A,{theme:q,width:O,height:R,margin:{...ce,...h},xScale:te.xScale,yScale:te.yScale,onPointerDown:le,onPointerUp:re,onPointerMove:J,onPointerOut:ie,pointerEventsDataKey:"nearest",children:[(0,m.jsx)(s.A,{columns:!1,numTicks:4}),(0,m.jsx)(d.A,{...te.axis.x}),(0,m.jsx)(d.A,{...te.axis.y}),ee.map((W,G)=>{const de=W.options?.stroke??q.colors[G%q.colors.length],pe=W.options?.seriesLineStyle??Q?.seriesLineStyles?.[G%Q.seriesLineStyles.length]??{};return(0,m.jsxs)("g",{children:[$&&(0,m.jsx)(j.A,{id:`area-gradient-${oe}-${G+1}`,from:de,fromOpacity:.4,toOpacity:.1,to:q.backgroundColor,...W.options?.gradient,"data-testid":"line-gradient"}),(0,m.jsx)(u.A,{dataKey:W?.label,data:W.data,...he,fill:$?`url(#area-gradient-${oe}-${G+1})`:"transparent",renderLine:!0,curve:E(ne,ae),lineProps:pe},W?.label)]},W?.label||G)}),x&&(0,m.jsx)(i.A,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,showSeriesGlyphs:!0,renderTooltip:se})]}),U&&(0,m.jsx)(c.$,{items:me,orientation:K,className:C["line-chart-legend"],shape:X})]})},H=(0,o.F)(I);try{linechart.displayName="linechart",linechart.__docgenInfo={description:"",displayName:"linechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:{value:"undefined"},description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"true"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"line"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},renderTooltip:{defaultValue:{value:`( {
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
}`},description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withGradientFill:{defaultValue:{value:"false"},description:"",name:"withGradientFill",required:!1,type:{name:"boolean"}},smoothing:{defaultValue:{value:"true"},description:"",name:"smoothing",required:!1,type:{name:"boolean"}},curveType:{defaultValue:null,description:"",name:"curveType",required:!1,type:{name:"enum",value:[{value:'"linear"'},{value:'"smooth"'},{value:'"monotone"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/line-chart.tsx#linechart"]={docgenInfo:linechart.__docgenInfo,name:"linechart",path:"../charts/src/components/line-chart/line-chart.tsx#linechart"})}catch{}},"../charts/src/components/line-chart/stories/large-values-sample.ts":(V,F,t)=>{t.d(F,{A:()=>p});const p=[{label:"Revenue (Billions)",data:[{date:new Date("2024-01-01"),value:12e8},{date:new Date("2024-02-01"),value:145e7},{date:new Date("2024-03-01"),value:168e7},{date:new Date("2024-04-01"),value:21e8},{date:new Date("2024-05-01"),value:235e7},{date:new Date("2024-06-01"),value:28e8}],options:{stroke:"#3858E9"}},{label:"Users (Millions)",data:[{date:new Date("2024-01-01"),value:45e6},{date:new Date("2024-02-01"),value:52e6},{date:new Date("2024-03-01"),value:48e6},{date:new Date("2024-04-01"),value:61e6},{date:new Date("2024-05-01"),value:75e6},{date:new Date("2024-06-01"),value:89e6}],options:{stroke:"#00BA37"}}]},"../charts/src/components/line-chart/stories/site-traffic-sample.ts":(V,F,t)=>{t.d(F,{A:()=>S});const S=[{label:"Views",options:{stroke:"#069e08"},data:[{date:new Date("2024-01-01"),value:2558},{date:new Date("2024-01-02"),value:3399},{date:new Date("2024-01-03"),value:2260},{date:new Date("2024-01-04"),value:2331},{date:new Date("2024-01-05"),value:3302},{date:new Date("2024-01-06"),value:1852},{date:new Date("2024-01-07"),value:2607},{date:new Date("2024-01-08"),value:2804},{date:new Date("2024-01-09"),value:3260},{date:new Date("2024-01-10"),value:2941},{date:new Date("2024-01-11"),value:2857},{date:new Date("2024-01-12"),value:3461},{date:new Date("2024-01-13"),value:1548},{date:new Date("2024-01-14"),value:2739},{date:new Date("2024-01-15"),value:3288},{date:new Date("2024-01-16"),value:2869},{date:new Date("2024-01-17"),value:2590},{date:new Date("2024-01-18"),value:2609},{date:new Date("2024-01-19"),value:2648},{date:new Date("2024-01-20"),value:1805},{date:new Date("2024-01-21"),value:2531},{date:new Date("2024-01-22"),value:3605},{date:new Date("2024-01-23"),value:2366},{date:new Date("2024-01-24"),value:2782},{date:new Date("2024-01-25"),value:2885},{date:new Date("2024-01-26"),value:2918},{date:new Date("2024-01-27"),value:2518},{date:new Date("2024-01-28"),value:2378},{date:new Date("2024-01-29"),value:2714},{date:new Date("2024-01-30"),value:3279}]},{label:"Visitors",options:{stroke:"rgb(230, 139, 40)"},data:[{date:new Date("2024-01-01"),value:2412},{date:new Date("2024-01-02"),value:1899},{date:new Date("2024-01-03"),value:2061},{date:new Date("2024-01-04"),value:1939},{date:new Date("2024-01-05"),value:1986},{date:new Date("2024-01-06"),value:1560},{date:new Date("2024-01-07"),value:1741},{date:new Date("2024-01-08"),value:2120},{date:new Date("2024-01-09"),value:1889},{date:new Date("2024-01-10"),value:1666},{date:new Date("2024-01-11"),value:2396},{date:new Date("2024-01-12"),value:2276},{date:new Date("2024-01-13"),value:1218},{date:new Date("2024-01-14"),value:1228},{date:new Date("2024-01-15"),value:1600},{date:new Date("2024-01-16"),value:1814},{date:new Date("2024-01-17"),value:1701},{date:new Date("2024-01-18"),value:1507},{date:new Date("2024-01-19"),value:1833},{date:new Date("2024-01-20"),value:1407},{date:new Date("2024-01-21"),value:965},{date:new Date("2024-01-22"),value:2288},{date:new Date("2024-01-23"),value:2135},{date:new Date("2024-01-24"),value:1824},{date:new Date("2024-01-25"),value:2219},{date:new Date("2024-01-26"),value:1918},{date:new Date("2024-01-27"),value:1101},{date:new Date("2024-01-28"),value:1695},{date:new Date("2024-01-29"),value:1615},{date:new Date("2024-01-30"),value:2056}]}]},"../charts/src/components/shared/use-chart-margin.tsx":(V,F,t)=>{t.d(F,{a:()=>y});var S=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),p=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),B=t("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const j=(s,d,u)=>{const i=s.map(n=>d(n,0,[])),w=i.reduce((n,a)=>n.length>=a.length?n:a,i[0]);return(0,B.A)(w,u)},y=(s,d,u,i,w=!1)=>{const n=(0,e.useMemo)(()=>{const a=u.flatMap(v=>v.data);if(w)return a.map(v=>v.label||d.axis?.y?.tickFormat(v.date.getTime(),0,[]));const c=Math.min(...a.map(v=>v.value)),f=Math.max(...a.map(v=>v.value)),_=(0,S.A)({...d.yScale,domain:[c,f],range:[s,0]});return(0,p.A)(_,d.axis?.y?.numTicks)},[d,u,s,w]);return(0,e.useMemo)(()=>{const a={top:10,right:20,bottom:20,left:20},c=40,f=d.axis?.y?.orientation,_=f==="right"?i.axisStyles.y.right:i.axisStyles.y.left,L=(j(n,d.axis?.y?.tickFormat,_.axisLabel)??c)+(_?.tickLength??0);return f==="right"?a.right=L:a.left=L,d.axis?.x?.orientation==="top"&&(a.top=20,a.bottom=10),a},[d,i,n])}},"../charts/src/components/shared/with-responsive.tsx":(V,F,t)=>{t.d(F,{F:()=>e});var S=t("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),p=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function e(B,j){const{maxWidth:y=1200,aspectRatio:s=.5,debounceTime:d=50}=j||{};return function(i){const{parentRef:w,width:n}=(0,S.A)({debounceTime:d,enableDebounceLeadingCall:!0,initialSize:{width:600,height:400}}),a=n?Math.min(n,y):600,c=i.height??a*s;return(0,p.jsx)("div",{ref:w,style:{width:"100%"},children:(0,p.jsx)(B,{width:a,height:c,size:a,...i})})}}try{e.displayName="withResponsive",e.__docgenInfo={description:`A higher-order component that provides responsive dimensions
to the wrapped chart component using useParentSize from`,displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/with-responsive.tsx#withResponsive"]={docgenInfo:e.__docgenInfo,name:"withResponsive",path:"../charts/src/components/shared/with-responsive.tsx#withResponsive"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(V,F,t)=>{t.d(F,{NP:()=>d,Ox:()=>s,RW:()=>y});var S=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),p=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=t("../charts/src/providers/theme/themes.ts"),B=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,p.createContext)(e.zQ),y=()=>(0,p.useContext)(j),s=u=>{const i=y();return(0,p.useMemo)(()=>{const w=(u??[]).map(n=>n.options?.stroke).filter(n=>!!n);return(0,S.A)({...i,colors:[...w,...i.colors??[]]})},[i,u])},d=({theme:u={},children:i})=>{const w={...e.zQ,...u};return(0,B.jsx)(j.Provider,{value:w,children:i})};try{d.displayName="ThemeProvider",d.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:d.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{y.displayName="useChartTheme",y.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:y.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}try{s.displayName="useXYChartTheme",s.__docgenInfo={description:"",displayName:"useXYChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"]={docgenInfo:s.__docgenInfo,name:"useXYChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(V,F,t)=>{t.d(F,{QI:()=>p,pk:()=>e,zQ:()=>S});const S={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}},p={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}},e={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss":(V,F,t)=>{t.d(F,{A:()=>y});var S=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=t.n(S),e=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),B=t.n(e),j=B()(p());j.push([V.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;font-size:.875rem}.AyocUvYOPM3rztxeHhaJ{color:var(--jp-gray-80, #2c3338);display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),j.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const y=j},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss":(V,F,t)=>{t.d(F,{A:()=>y});var S=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=t.n(S),e=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),B=t.n(e),j=B()(p());j.push([V.id,".SVlAnnWw2ot8McusfLcw{position:relative}.WG8wpgeFR6IoBhr41Y3z{background:#fff;padding:.5rem}.t5p9YWtrovlLQm8WlrGF{font-weight:700;padding-bottom:10px}.FPtDJMJR2GRu0df3iYy6{display:flex;align-items:center;padding:4px 0;justify-content:space-between}.xTJS98Xw7HFAGWFwzsgd{font-weight:500;padding-right:1rem}.visx-tooltip-glyph svg{width:10px;height:10px}",""]),j.locals={"line-chart":"SVlAnnWw2ot8McusfLcw","line-chart__tooltip":"WG8wpgeFR6IoBhr41Y3z","line-chart__tooltip-date":"t5p9YWtrovlLQm8WlrGF","line-chart__tooltip-row":"FPtDJMJR2GRu0df3iYy6","line-chart__tooltip-label":"xTJS98Xw7HFAGWFwzsgd"};const y=j},"../../../node_modules/.pnpm/d3-path@1.0.9/node_modules/d3-path/src/path.js":(V,F,t)=>{t.d(F,{A:()=>s});var S=Math.PI,p=2*S,e=1e-6,B=p-e;function j(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function y(){return new j}j.prototype=y.prototype={constructor:j,moveTo:function(d,u){this._+="M"+(this._x0=this._x1=+d)+","+(this._y0=this._y1=+u)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(d,u){this._+="L"+(this._x1=+d)+","+(this._y1=+u)},quadraticCurveTo:function(d,u,i,w){this._+="Q"+ +d+","+ +u+","+(this._x1=+i)+","+(this._y1=+w)},bezierCurveTo:function(d,u,i,w,n,a){this._+="C"+ +d+","+ +u+","+ +i+","+ +w+","+(this._x1=+n)+","+(this._y1=+a)},arcTo:function(d,u,i,w,n){d=+d,u=+u,i=+i,w=+w,n=+n;var a=this._x1,c=this._y1,f=i-d,_=w-u,v=a-d,L=c-u,r=v*v+L*L;if(n<0)throw new Error("negative radius: "+n);if(this._x1===null)this._+="M"+(this._x1=d)+","+(this._y1=u);else if(r>e)if(!(Math.abs(L*f-_*v)>e)||!n)this._+="L"+(this._x1=d)+","+(this._y1=u);else{var l=i-a,o=w-c,b=f*f+_*_,D=l*l+o*o,g=Math.sqrt(b),M=Math.sqrt(r),T=n*Math.tan((S-Math.acos((b+r-D)/(2*g*M)))/2),C=T/M,m=T/g;Math.abs(C-1)>e&&(this._+="L"+(d+C*v)+","+(u+C*L)),this._+="A"+n+","+n+",0,0,"+ +(L*l>v*o)+","+(this._x1=d+m*f)+","+(this._y1=u+m*_)}},arc:function(d,u,i,w,n,a){d=+d,u=+u,i=+i,a=!!a;var c=i*Math.cos(w),f=i*Math.sin(w),_=d+c,v=u+f,L=1^a,r=a?w-n:n-w;if(i<0)throw new Error("negative radius: "+i);this._x1===null?this._+="M"+_+","+v:(Math.abs(this._x1-_)>e||Math.abs(this._y1-v)>e)&&(this._+="L"+_+","+v),i&&(r<0&&(r=r%p+p),r>B?this._+="A"+i+","+i+",0,1,"+L+","+(d-c)+","+(u-f)+"A"+i+","+i+",0,1,"+L+","+(this._x1=_)+","+(this._y1=v):r>e&&(this._+="A"+i+","+i+",0,"+ +(r>=S)+","+L+","+(this._x1=d+i*Math.cos(n))+","+(this._y1=u+i*Math.sin(n))))},rect:function(d,u,i,w){this._+="M"+(this._x0=this._x1=+d)+","+(this._y0=this._y1=+u)+"h"+ +i+"v"+ +w+"h"+-i+"Z"},toString:function(){return this._}};const s=y},"../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js":(V,F,t)=>{t.d(F,{A:()=>w});var S=t("../../../node_modules/.pnpm/d3-path@1.0.9/node_modules/d3-path/src/path.js"),p=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/constant.js"),e=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/math.js");function B(n){return n.innerRadius}function j(n){return n.outerRadius}function y(n){return n.startAngle}function s(n){return n.endAngle}function d(n){return n&&n.padAngle}function u(n,a,c,f,_,v,L,r){var l=c-n,o=f-a,b=L-_,D=r-v,g=D*l-b*o;if(!(g*g<e.Ni))return g=(b*(a-v)-D*(n-_))/g,[n+g*l,a+g*o]}function i(n,a,c,f,_,v,L){var r=n-c,l=a-f,o=(L?v:-v)/(0,e.RZ)(r*r+l*l),b=o*l,D=-o*r,g=n+b,M=a+D,T=c+b,C=f+D,m=(g+T)/2,z=(M+C)/2,E=T-g,Y=C-M,N=E*E+Y*Y,k=_-v,I=g*C-T*M,H=(Y<0?-1:1)*(0,e.RZ)((0,e.T9)(0,k*k*N-I*I)),P=(I*Y-E*H)/N,O=(-I*E-Y*H)/N,R=(I*Y+E*H)/N,A=(-I*E+Y*H)/N,h=P-m,x=O-z,U=R-m,K=A-z;return h*h+x*x>U*U+K*K&&(P=R,O=A),{cx:P,cy:O,x01:-b,y01:-D,x11:P*(_/k-1),y11:O*(_/k-1)}}function w(){var n=B,a=j,c=(0,p.A)(0),f=null,_=y,v=s,L=d,r=null;function l(){var o,b,D=+n.apply(this,arguments),g=+a.apply(this,arguments),M=_.apply(this,arguments)-e.TW,T=v.apply(this,arguments)-e.TW,C=(0,e.tn)(T-M),m=T>M;if(r||(r=o=(0,S.A)()),g<D&&(b=g,g=D,D=b),!(g>e.Ni))r.moveTo(0,0);else if(C>e.FA-e.Ni)r.moveTo(g*(0,e.gn)(M),g*(0,e.F8)(M)),r.arc(0,0,g,M,T,!m),D>e.Ni&&(r.moveTo(D*(0,e.gn)(T),D*(0,e.F8)(T)),r.arc(0,0,D,T,M,m));else{var z=M,E=T,Y=M,N=T,k=C,I=C,H=L.apply(this,arguments)/2,P=H>e.Ni&&(f?+f.apply(this,arguments):(0,e.RZ)(D*D+g*g)),O=(0,e.jk)((0,e.tn)(g-D)/2,+c.apply(this,arguments)),R=O,A=O,h,x;if(P>e.Ni){var U=(0,e.qR)(P/D*(0,e.F8)(H)),K=(0,e.qR)(P/g*(0,e.F8)(H));(k-=U*2)>e.Ni?(U*=m?1:-1,Y+=U,N-=U):(k=0,Y=N=(M+T)/2),(I-=K*2)>e.Ni?(K*=m?1:-1,z+=K,E-=K):(I=0,z=E=(M+T)/2)}var X=g*(0,e.gn)(z),$=g*(0,e.F8)(z),ae=D*(0,e.gn)(N),ne=D*(0,e.F8)(N);if(O>e.Ni){var se=g*(0,e.gn)(E),Z=g*(0,e.F8)(E),le=D*(0,e.gn)(Y),re=D*(0,e.F8)(Y),J;if(C<e.pi&&(J=u(X,$,le,re,se,Z,ae,ne))){var ie=X-J[0],Q=$-J[1],q=se-J[0],oe=Z-J[1],ee=1/(0,e.F8)((0,e.HQ)((ie*q+Q*oe)/((0,e.RZ)(ie*ie+Q*Q)*(0,e.RZ)(q*q+oe*oe)))/2),te=(0,e.RZ)(J[0]*J[0]+J[1]*J[1]);R=(0,e.jk)(O,(D-te)/(ee-1)),A=(0,e.jk)(O,(g-te)/(ee+1))}}I>e.Ni?A>e.Ni?(h=i(le,re,X,$,g,A,m),x=i(se,Z,ae,ne,g,A,m),r.moveTo(h.cx+h.x01,h.cy+h.y01),A<O?r.arc(h.cx,h.cy,A,(0,e.FP)(h.y01,h.x01),(0,e.FP)(x.y01,x.x01),!m):(r.arc(h.cx,h.cy,A,(0,e.FP)(h.y01,h.x01),(0,e.FP)(h.y11,h.x11),!m),r.arc(0,0,g,(0,e.FP)(h.cy+h.y11,h.cx+h.x11),(0,e.FP)(x.cy+x.y11,x.cx+x.x11),!m),r.arc(x.cx,x.cy,A,(0,e.FP)(x.y11,x.x11),(0,e.FP)(x.y01,x.x01),!m))):(r.moveTo(X,$),r.arc(0,0,g,z,E,!m)):r.moveTo(X,$),!(D>e.Ni)||!(k>e.Ni)?r.lineTo(ae,ne):R>e.Ni?(h=i(ae,ne,se,Z,D,-R,m),x=i(X,$,le,re,D,-R,m),r.lineTo(h.cx+h.x01,h.cy+h.y01),R<O?r.arc(h.cx,h.cy,R,(0,e.FP)(h.y01,h.x01),(0,e.FP)(x.y01,x.x01),!m):(r.arc(h.cx,h.cy,R,(0,e.FP)(h.y01,h.x01),(0,e.FP)(h.y11,h.x11),!m),r.arc(0,0,D,(0,e.FP)(h.cy+h.y11,h.cx+h.x11),(0,e.FP)(x.cy+x.y11,x.cx+x.x11),m),r.arc(x.cx,x.cy,R,(0,e.FP)(x.y11,x.x11),(0,e.FP)(x.y01,x.x01),!m))):r.arc(0,0,D,N,Y,m)}if(r.closePath(),o)return r=null,o+""||null}return l.centroid=function(){var o=(+n.apply(this,arguments)+ +a.apply(this,arguments))/2,b=(+_.apply(this,arguments)+ +v.apply(this,arguments))/2-e.pi/2;return[(0,e.gn)(b)*o,(0,e.F8)(b)*o]},l.innerRadius=function(o){return arguments.length?(n=typeof o=="function"?o:(0,p.A)(+o),l):n},l.outerRadius=function(o){return arguments.length?(a=typeof o=="function"?o:(0,p.A)(+o),l):a},l.cornerRadius=function(o){return arguments.length?(c=typeof o=="function"?o:(0,p.A)(+o),l):c},l.padRadius=function(o){return arguments.length?(f=o==null?null:typeof o=="function"?o:(0,p.A)(+o),l):f},l.startAngle=function(o){return arguments.length?(_=typeof o=="function"?o:(0,p.A)(+o),l):_},l.endAngle=function(o){return arguments.length?(v=typeof o=="function"?o:(0,p.A)(+o),l):v},l.padAngle=function(o){return arguments.length?(L=typeof o=="function"?o:(0,p.A)(+o),l):L},l.context=function(o){return arguments.length?(r=o??null,l):r},l}},"../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/constant.js":(V,F,t)=>{t.d(F,{A:()=>S});function S(p){return function(){return p}}},"../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/math.js":(V,F,t)=>{t.d(F,{F8:()=>y,FA:()=>w,FP:()=>p,HQ:()=>n,Ni:()=>d,RZ:()=>s,T9:()=>B,TW:()=>i,gn:()=>e,jk:()=>j,pi:()=>u,qR:()=>a,tn:()=>S});var S=Math.abs,p=Math.atan2,e=Math.cos,B=Math.max,j=Math.min,y=Math.sin,s=Math.sqrt,d=1e-12,u=Math.PI,i=u/2,w=2*u;function n(c){return c>1?0:c<-1?u:Math.acos(c)}function a(c){return c>=1?i:c<=-1?-i:Math.asin(c)}},"../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js":(V,F,t)=>{t.d(F,{A:()=>j});var S=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/constant.js");function p(y,s){return s<y?-1:s>y?1:s>=y?0:NaN}function e(y){return y}var B=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/math.js");function j(){var y=e,s=p,d=null,u=(0,S.A)(0),i=(0,S.A)(B.FA),w=(0,S.A)(0);function n(a){var c,f=a.length,_,v,L=0,r=new Array(f),l=new Array(f),o=+u.apply(this,arguments),b=Math.min(B.FA,Math.max(-B.FA,i.apply(this,arguments)-o)),D,g=Math.min(Math.abs(b)/f,w.apply(this,arguments)),M=g*(b<0?-1:1),T;for(c=0;c<f;++c)(T=l[r[c]=c]=+y(a[c],c,a))>0&&(L+=T);for(s!=null?r.sort(function(C,m){return s(l[C],l[m])}):d!=null&&r.sort(function(C,m){return d(a[C],a[m])}),c=0,v=L?(b-f*M)/L:0;c<f;++c,o=D)_=r[c],T=l[_],D=o+(T>0?T*v:0)+M,l[_]={data:a[_],index:c,value:T,startAngle:o,endAngle:D,padAngle:g};return l}return n.value=function(a){return arguments.length?(y=typeof a=="function"?a:(0,S.A)(+a),n):y},n.sortValues=function(a){return arguments.length?(s=a,d=null,n):s},n.sort=function(a){return arguments.length?(d=a,s=null,n):d},n.startAngle=function(a){return arguments.length?(u=typeof a=="function"?a:(0,S.A)(+a),n):u},n.endAngle=function(a){return arguments.length?(i=typeof a=="function"?a:(0,S.A)(+a),n):i},n.padAngle=function(a){return arguments.length?(w=typeof a=="function"?a:(0,S.A)(+a),n):w},n}}}]);
