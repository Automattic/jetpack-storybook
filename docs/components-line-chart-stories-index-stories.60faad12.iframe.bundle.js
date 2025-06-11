"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4722],{"../charts/src/components/line-chart/stories/index.stories.tsx":(V,A,t)=>{t.r(A),t.d(A,{BrokenLine:()=>P,CurveTypes:()=>F,CustomDimensions:()=>y,CustomTooltips:()=>h,DateStringFormats:()=>B,Default:()=>n,ErrorStates:()=>s,FixedDimensions:()=>d,GridientFilled:()=>v,SingleSeries:()=>c,SmartFormatting:()=>C,WithLegend:()=>D,WithPointerEvents:()=>p,WithStartGlyphs:()=>L,WithVerticalLegend:()=>S,WithoutSmoothing:()=>M,WithoutTooltip:()=>x,__namedExportsOrder:()=>j,default:()=>f});var _=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=t("../charts/src/components/line-chart/line-chart.tsx"),e=t("../charts/src/components/line-chart/stories/large-values-sample.ts");const b=[{label:"London",data:[{date:new Date("2022-01-01"),value:7.8},{date:new Date("2022-01-08"),value:7.2},{date:new Date("2022-01-15"),value:6.9},{date:new Date("2022-01-22"),value:6.5},{date:new Date("2022-01-29"),value:7.1},{date:new Date("2022-02-05"),value:8.3},{date:new Date("2022-02-12"),value:8.9},{date:new Date("2022-02-19"),value:9.2},{date:new Date("2022-02-26"),value:8.7},{date:new Date("2022-03-05"),value:9.4},{date:new Date("2022-03-12"),value:10.2},{date:new Date("2022-03-19"),value:11.5},{date:new Date("2022-03-26"),value:12.3},{date:new Date("2022-04-02"),value:13.1},{date:new Date("2022-04-09"),value:13.8},{date:new Date("2022-04-16"),value:14.6},{date:new Date("2022-04-23"),value:15.2},{date:new Date("2022-04-30"),value:15.9},{date:new Date("2022-05-07"),value:16.7},{date:new Date("2022-05-14"),value:17.4},{date:new Date("2022-05-21"),value:18.2},{date:new Date("2022-05-28"),value:18.9},{date:new Date("2022-06-04"),value:19.7},{date:new Date("2022-06-11"),value:20.5},{date:new Date("2022-06-18"),value:21.3},{date:new Date("2022-06-25"),value:22.1},{date:new Date("2022-07-02"),value:22.8},{date:new Date("2022-07-09"),value:23.6},{date:new Date("2022-07-16"),value:24.4},{date:new Date("2022-07-23"),value:25.2},{date:new Date("2022-07-30"),value:24.8},{date:new Date("2022-08-06"),value:24.1},{date:new Date("2022-08-13"),value:23.5},{date:new Date("2022-08-20"),value:22.8},{date:new Date("2022-08-27"),value:21.9},{date:new Date("2022-09-03"),value:20.7},{date:new Date("2022-09-10"),value:19.5},{date:new Date("2022-09-17"),value:18.3},{date:new Date("2022-09-24"),value:17.1},{date:new Date("2022-10-01"),value:16.2},{date:new Date("2022-10-08"),value:15.1},{date:new Date("2022-10-15"),value:14.2},{date:new Date("2022-10-22"),value:13.1},{date:new Date("2022-10-29"),value:12.2},{date:new Date("2022-11-05"),value:11.1},{date:new Date("2022-11-12"),value:10.2},{date:new Date("2022-11-19"),value:9.1},{date:new Date("2022-11-26"),value:8.2},{date:new Date("2022-12-03"),value:7.1},{date:new Date("2022-12-10"),value:6.2},{date:new Date("2022-12-17"),value:5.5},{date:new Date("2022-12-24"),value:5.2},{date:new Date("2022-12-31"),value:6.8},{date:new Date("2023-01-01"),value:8.2},{date:new Date("2023-01-08"),value:7.9},{date:new Date("2023-01-15"),value:5.1},{date:new Date("2023-01-22"),value:4.8},{date:new Date("2023-01-29"),value:6.3},{date:new Date("2023-02-05"),value:7.2},{date:new Date("2023-02-12"),value:9.4},{date:new Date("2023-02-19"),value:8.7},{date:new Date("2023-02-26"),value:7.1},{date:new Date("2023-03-05"),value:8.3},{date:new Date("2023-03-12"),value:9.5},{date:new Date("2023-03-19"),value:11.2},{date:new Date("2023-03-26"),value:12.8},{date:new Date("2023-04-02"),value:13.4},{date:new Date("2023-04-09"),value:14.1},{date:new Date("2023-04-16"),value:15.3},{date:new Date("2023-04-23"),value:14.8},{date:new Date("2023-04-30"),value:15.7},{date:new Date("2023-05-07"),value:16.9},{date:new Date("2023-05-14"),value:17.2},{date:new Date("2023-05-21"),value:18.4},{date:new Date("2023-05-28"),value:19.1},{date:new Date("2023-06-04"),value:20.3},{date:new Date("2023-06-11"),value:21.5},{date:new Date("2023-06-18"),value:22.8},{date:new Date("2023-06-25"),value:21.9},{date:new Date("2023-07-02"),value:23.1},{date:new Date("2023-07-09"),value:22.7},{date:new Date("2023-07-16"),value:24.2},{date:new Date("2023-07-23"),value:23.8},{date:new Date("2023-07-30"),value:22.9},{date:new Date("2023-08-06"),value:23.4},{date:new Date("2023-08-13"),value:22.8},{date:new Date("2023-08-20"),value:21.9},{date:new Date("2023-08-27"),value:20.7},{date:new Date("2023-09-03"),value:19.8},{date:new Date("2023-09-10"),value:18.9},{date:new Date("2023-09-17"),value:17.6},{date:new Date("2023-09-24"),value:16.8},{date:new Date("2023-10-01"),value:15.9},{date:new Date("2023-10-08"),value:14.7},{date:new Date("2023-10-15"),value:13.8},{date:new Date("2023-10-22"),value:12.9},{date:new Date("2023-10-29"),value:11.7},{date:new Date("2023-11-05"),value:10.8},{date:new Date("2023-11-12"),value:9.9},{date:new Date("2023-11-19"),value:8.7},{date:new Date("2023-11-26"),value:7.8},{date:new Date("2023-12-03"),value:6.9},{date:new Date("2023-12-10"),value:5.8},{date:new Date("2023-12-17"),value:4.9},{date:new Date("2023-12-24"),value:5.7},{date:new Date("2023-12-31"),value:6.2}]},{label:"Canberra",data:[{date:new Date("2022-01-01"),value:27.9},{date:new Date("2022-01-08"),value:28.4},{date:new Date("2022-01-15"),value:29.2},{date:new Date("2022-01-22"),value:28.9},{date:new Date("2022-01-29"),value:28.1},{date:new Date("2022-02-05"),value:27.3},{date:new Date("2022-02-12"),value:26.5},{date:new Date("2022-02-19"),value:25.4},{date:new Date("2022-02-26"),value:24.2},{date:new Date("2022-03-05"),value:23.1},{date:new Date("2022-03-12"),value:22.3},{date:new Date("2022-03-19"),value:21.2},{date:new Date("2022-03-26"),value:20.1},{date:new Date("2022-04-02"),value:19.2},{date:new Date("2022-04-09"),value:18.1},{date:new Date("2022-04-16"),value:16.9},{date:new Date("2022-04-23"),value:15.8},{date:new Date("2022-04-30"),value:14.9},{date:new Date("2022-05-07"),value:13.8},{date:new Date("2022-05-14"),value:12.9},{date:new Date("2022-05-21"),value:11.8},{date:new Date("2022-05-28"),value:10.9},{date:new Date("2022-06-04"),value:9.8},{date:new Date("2022-06-11"),value:8.9},{date:new Date("2022-06-18"),value:8.1},{date:new Date("2022-06-25"),value:7.5},{date:new Date("2022-07-02"),value:6.9},{date:new Date("2022-07-09"),value:6.7},{date:new Date("2022-07-16"),value:7.1},{date:new Date("2022-07-23"),value:7.9},{date:new Date("2022-07-30"),value:8.8},{date:new Date("2022-08-06"),value:9.9},{date:new Date("2022-08-13"),value:11.2},{date:new Date("2022-08-20"),value:12.4},{date:new Date("2022-08-27"),value:13.6},{date:new Date("2022-09-03"),value:14.8},{date:new Date("2022-09-10"),value:16.1},{date:new Date("2022-09-17"),value:17.3},{date:new Date("2022-09-24"),value:18.5},{date:new Date("2022-10-01"),value:19.8},{date:new Date("2022-10-08"),value:21.1},{date:new Date("2022-10-15"),value:22.3},{date:new Date("2022-10-22"),value:23.5},{date:new Date("2022-10-29"),value:24.6},{date:new Date("2022-11-05"),value:25.7},{date:new Date("2022-11-12"),value:26.5},{date:new Date("2022-11-19"),value:27.4},{date:new Date("2022-11-26"),value:28.2},{date:new Date("2022-12-03"),value:28.9},{date:new Date("2022-12-10"),value:29.5},{date:new Date("2022-12-17"),value:29.1},{date:new Date("2022-12-24"),value:28.2},{date:new Date("2022-12-31"),value:28.7},{date:new Date("2023-01-01"),value:28.5},{date:new Date("2023-01-08"),value:29.2},{date:new Date("2023-01-15"),value:30.1},{date:new Date("2023-01-22"),value:29.8},{date:new Date("2023-01-29"),value:28.9},{date:new Date("2023-02-05"),value:27.8},{date:new Date("2023-02-12"),value:26.9},{date:new Date("2023-02-19"),value:25.7},{date:new Date("2023-02-26"),value:24.8},{date:new Date("2023-03-05"),value:23.9},{date:new Date("2023-03-12"),value:22.8},{date:new Date("2023-03-19"),value:21.7},{date:new Date("2023-03-26"),value:20.8},{date:new Date("2023-04-02"),value:19.6},{date:new Date("2023-04-09"),value:18.4},{date:new Date("2023-04-16"),value:17.2},{date:new Date("2023-04-23"),value:16.1},{date:new Date("2023-04-30"),value:15.3},{date:new Date("2023-05-07"),value:14.2},{date:new Date("2023-05-14"),value:13.1},{date:new Date("2023-05-21"),value:12.3},{date:new Date("2023-05-28"),value:11.4},{date:new Date("2023-06-04"),value:10.2},{date:new Date("2023-06-11"),value:9.1},{date:new Date("2023-06-18"),value:8.3},{date:new Date("2023-06-25"),value:7.8},{date:new Date("2023-07-02"),value:7.1},{date:new Date("2023-07-09"),value:6.9},{date:new Date("2023-07-16"),value:7.2},{date:new Date("2023-07-23"),value:8.1},{date:new Date("2023-07-30"),value:9.3},{date:new Date("2023-08-06"),value:10.4},{date:new Date("2023-08-13"),value:11.6},{date:new Date("2023-08-20"),value:12.8},{date:new Date("2023-08-27"),value:13.9},{date:new Date("2023-09-03"),value:15.2},{date:new Date("2023-09-10"),value:16.4},{date:new Date("2023-09-17"),value:17.6},{date:new Date("2023-09-24"),value:18.9},{date:new Date("2023-10-01"),value:20.1},{date:new Date("2023-10-08"),value:21.3},{date:new Date("2023-10-15"),value:22.5},{date:new Date("2023-10-22"),value:23.7},{date:new Date("2023-10-29"),value:24.8},{date:new Date("2023-11-05"),value:25.9},{date:new Date("2023-11-12"),value:26.7},{date:new Date("2023-11-19"),value:27.8},{date:new Date("2023-11-26"),value:28.6},{date:new Date("2023-12-03"),value:29.4},{date:new Date("2023-12-10"),value:30.2},{date:new Date("2023-12-17"),value:29.8},{date:new Date("2023-12-24"),value:28.9},{date:new Date("2023-12-31"),value:29.3}]},{label:"Mars",data:[{date:new Date("2022-01-01"),value:-62},{date:new Date("2022-01-08"),value:-63},{date:new Date("2022-01-15"),value:-64},{date:new Date("2022-01-22"),value:-62},{date:new Date("2022-01-29"),value:-61},{date:new Date("2022-02-05"),value:-59},{date:new Date("2022-02-12"),value:-56},{date:new Date("2022-02-19"),value:-53},{date:new Date("2022-02-26"),value:-50},{date:new Date("2022-03-05"),value:-47},{date:new Date("2022-03-12"),value:-44},{date:new Date("2022-03-19"),value:-41},{date:new Date("2022-03-26"),value:-37},{date:new Date("2022-04-02"),value:-34},{date:new Date("2022-04-09"),value:-31},{date:new Date("2022-04-16"),value:-27},{date:new Date("2022-04-23"),value:-24},{date:new Date("2022-04-30"),value:-21},{date:new Date("2022-05-07"),value:-17},{date:new Date("2022-05-14"),value:-14},{date:new Date("2022-05-21"),value:-11},{date:new Date("2022-05-28"),value:-7},{date:new Date("2022-06-04"),value:-4},{date:new Date("2022-06-11"),value:-1},{date:new Date("2022-06-18"),value:1},{date:new Date("2022-06-25"),value:3},{date:new Date("2022-07-02"),value:6},{date:new Date("2022-07-09"),value:9},{date:new Date("2022-07-16"),value:11},{date:new Date("2022-07-23"),value:13},{date:new Date("2022-07-30"),value:16},{date:new Date("2022-08-06"),value:18},{date:new Date("2022-08-13"),value:21},{date:new Date("2022-08-20"),value:23},{date:new Date("2022-08-27"),value:21},{date:new Date("2022-09-03"),value:19},{date:new Date("2022-09-10"),value:16},{date:new Date("2022-09-17"),value:13},{date:new Date("2022-09-24"),value:9},{date:new Date("2022-10-01"),value:6},{date:new Date("2022-10-08"),value:3},{date:new Date("2022-10-15"),value:-1},{date:new Date("2022-10-22"),value:-4},{date:new Date("2022-10-29"),value:-7},{date:new Date("2022-11-05"),value:-11},{date:new Date("2022-11-12"),value:-14},{date:new Date("2022-11-19"),value:-17},{date:new Date("2022-11-26"),value:-21},{date:new Date("2022-12-03"),value:-24},{date:new Date("2022-12-10"),value:-27},{date:new Date("2022-12-17"),value:-31},{date:new Date("2022-12-24"),value:-36},{date:new Date("2022-12-31"),value:-37},{date:new Date("2023-01-01"),value:-63},{date:new Date("2023-01-08"),value:-64},{date:new Date("2023-01-15"),value:-65},{date:new Date("2023-01-22"),value:-63},{date:new Date("2023-01-29"),value:-62},{date:new Date("2023-02-05"),value:-60},{date:new Date("2023-02-12"),value:-58},{date:new Date("2023-02-19"),value:-55},{date:new Date("2023-02-26"),value:-52},{date:new Date("2023-03-05"),value:-48},{date:new Date("2023-03-12"),value:-45},{date:new Date("2023-03-19"),value:-42},{date:new Date("2023-03-26"),value:-38},{date:new Date("2023-04-02"),value:-35},{date:new Date("2023-04-09"),value:-32},{date:new Date("2023-04-16"),value:-28},{date:new Date("2023-04-23"),value:-25},{date:new Date("2023-04-30"),value:-22},{date:new Date("2023-05-07"),value:-18},{date:new Date("2023-05-14"),value:-15},{date:new Date("2023-05-21"),value:-12},{date:new Date("2023-05-28"),value:-8},{date:new Date("2023-06-04"),value:-5},{date:new Date("2023-06-11"),value:-2},{date:new Date("2023-06-18"),value:0},{date:new Date("2023-06-25"),value:2},{date:new Date("2023-07-02"),value:5},{date:new Date("2023-07-09"),value:8},{date:new Date("2023-07-16"),value:10},{date:new Date("2023-07-23"),value:12},{date:new Date("2023-07-30"),value:15},{date:new Date("2023-08-06"),value:17},{date:new Date("2023-08-13"),value:20},{date:new Date("2023-08-20"),value:22},{date:new Date("2023-08-27"),value:20},{date:new Date("2023-09-03"),value:18},{date:new Date("2023-09-10"),value:15},{date:new Date("2023-09-17"),value:12},{date:new Date("2023-09-24"),value:8},{date:new Date("2023-10-01"),value:5},{date:new Date("2023-10-08"),value:2},{date:new Date("2023-10-15"),value:-2},{date:new Date("2023-10-22"),value:-5},{date:new Date("2023-10-29"),value:-8},{date:new Date("2023-11-05"),value:-12},{date:new Date("2023-11-12"),value:-15},{date:new Date("2023-11-19"),value:-18},{date:new Date("2023-11-26"),value:-22},{date:new Date("2023-12-03"),value:-25},{date:new Date("2023-12-10"),value:-28},{date:new Date("2023-12-17"),value:-32},{date:new Date("2023-12-24"),value:-35},{date:new Date("2023-12-31"),value:-38}]}];var w=t("../charts/src/components/line-chart/stories/site-traffic-sample.ts"),o=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i=`import React from 'react';
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
	argTypes: {
		maxWidth: {
			control: {
				type: 'number',
				min: 100,
				max: 1200,
			},
		},
		aspectRatio: {
			control: {
				type: 'number',
				min: 0,
				max: 1,
			},
		},
		resizeDebounceTime: {
			control: {
				type: 'number',
				min: 0,
				max: 10000,
			},
		},
	},
} satisfies Meta< typeof LineChart >;

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
	maxWidth: 1200,
	aspectRatio: 0.5,
	resizeDebounceTime: 300,
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
	height: 400,
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
`,u={Default:{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},SingleSeries:{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},WithoutTooltip:{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},CustomDimensions:{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},WithLegend:{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},WithVerticalLegend:{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},FixedDimensions:{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},GridientFilled:{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},ErrorStates:{startLoc:{col:27,line:147},endLoc:{col:1,line:222},startBody:{col:27,line:147},endBody:{col:1,line:222}},WithoutSmoothing:{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},CustomTooltips:{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},WithPointerEvents:{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},CurveTypes:{startLoc:{col:26,line:275},endLoc:{col:1,line:365},startBody:{col:26,line:275},endBody:{col:1,line:365}},SmartFormatting:{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},BrokenLine:{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},WithStartGlyphs:{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},DateStringFormats:{startLoc:{col:33,line:427},endLoc:{col:1,line:460},startBody:{col:33,line:427},endBody:{col:1,line:460}}};const f={title:"JS Packages/Charts/Types/Line Chart",component:m.A,parameters:{storySource:{source:`/* wp:polyfill */
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
  })],
  argTypes: {
    maxWidth: {
      control: {
        type: 'number',
        min: 100,
        max: 1200
      }
    },
    aspectRatio: {
      control: {
        type: 'number',
        min: 0,
        max: 1
      }
    },
    resizeDebounceTime: {
      control: {
        type: 'number',
        min: 0,
        max: 10000
      }
    }
  }
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
  maxWidth: 1200,
  aspectRatio: 0.5,
  resizeDebounceTime: 300,
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
  showLegend: true,
  height: 400
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
};`,locationsMap:{default:{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},"single-series":{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},"without-tooltip":{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},"custom-dimensions":{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},"with-legend":{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},"with-vertical-legend":{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},"fixed-dimensions":{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},"gridient-filled":{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},"error-states":{startLoc:{col:27,line:147},endLoc:{col:1,line:222},startBody:{col:27,line:147},endBody:{col:1,line:222}},"without-smoothing":{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},"custom-tooltips":{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},"with-pointer-events":{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},"curve-types":{startLoc:{col:26,line:275},endLoc:{col:1,line:365},startBody:{col:26,line:275},endBody:{col:1,line:365}},"smart-formatting":{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},"broken-line":{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},"with-start-glyphs":{startLoc:{col:17,line:52},endLoc:{col:2,line:54},startBody:{col:17,line:52},endBody:{col:2,line:54}},"date-string-formats":{startLoc:{col:33,line:427},endLoc:{col:1,line:460},startBody:{col:33,line:427},endBody:{col:1,line:460}}}},layout:"centered"},decorators:[E=>(0,o.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,o.jsx)(E,{})})],argTypes:{maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}}}},a=E=>(0,o.jsx)(m.A,{...E}),n=a.bind({});n.args={data:b,showLegend:!1,legendOrientation:"horizontal",withGradientFill:!1,smoothing:!0,maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}}};const c=a.bind({});c.args={data:[b[0]]};const x=a.bind({});x.args={...n.args,withTooltips:!1};const y=a.bind({});y.args={width:800,height:400,data:b};const D=a.bind({});D.args={...n.args,showLegend:!0,height:400};const S=a.bind({});S.args={...n.args,showLegend:!0,legendOrientation:"vertical"};const d=a.bind({});d.args={width:800,height:400,data:b,withTooltips:!0},d.parameters={docs:{description:{story:"Line chart with fixed dimensions that override the responsive behavior."}}};const v=a.bind({});v.args={...n.args,margin:void 0,data:w.A,withGradientFill:!0,options:{axis:{y:{orientation:"right"}}}};const s={render:()=>(0,o.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Empty Data"}),(0,o.jsx)(m.A,{width:300,height:200,data:[]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Invalid Date Values"}),(0,o.jsx)(m.A,{width:300,height:200,data:[{label:"Invalid Dates",data:[{date:new Date("invalid"),value:10},{date:new Date("2024-01-02"),value:20}],options:{}}]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Invalid Values"}),(0,o.jsx)(m.A,{width:300,height:200,data:[{label:"Invalid Values",data:[{date:new Date("2024-01-01"),value:NaN},{date:new Date("2024-01-02"),value:null}],options:{}}]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Single Data Point"}),(0,o.jsx)(m.A,{width:300,height:200,data:[{label:"Single Point",data:[{date:new Date("2024-01-01"),value:100}],options:{}}]})]})]}),parameters:{docs:{description:{story:"Examples of how the line chart handles various error states and edge cases."}}}},M=a.bind({});M.args={...n.args,smoothing:!1};const h=a.bind({});h.args={...n.args,renderTooltip:({tooltipData:E})=>{const N=E?.nearestDatum?.datum;if(!N)return null;const X=Object.entries(E?.datumByKey||{}).map(([k,{datum:G}])=>({key:k,value:G.value})).sort((k,G)=>G.value-k.value);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("h3",{children:[N?.date?.toLocaleDateString()," \u{1F4AF} "]}),(0,o.jsx)("table",{style:{border:"1px solid black",borderCollapse:"collapse"},children:X.map(k=>(0,o.jsxs)("tr",{style:{border:"1px solid black"},children:[(0,o.jsx)("td",{style:{border:"1px solid black"},children:k.key}),(0,o.jsx)("td",{children:k.value})]},k.key))})]})}};const p=a.bind({});p.args={...n.args,onPointerDown:({datum:E})=>alert("Pointer down:"+JSON.stringify(E))};const F={render:()=>{const E=[{label:"Sample Series",data:[{date:new Date("2024-01-01"),value:10},{date:new Date("2024-01-02"),value:90},{date:new Date("2024-01-03"),value:85},{date:new Date("2024-01-04"),value:82},{date:new Date("2024-01-05"),value:5},{date:new Date("2024-01-06"),value:8},{date:new Date("2024-01-07"),value:10}],options:{}}];return(0,o.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Linear Curve"}),(0,o.jsx)(m.A,{width:300,height:200,data:E,curveType:"linear",showLegend:!1,withGradientFill:!1})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Smooth Curve (Catmull-Rom)"}),(0,o.jsx)(m.A,{width:300,height:200,data:E,curveType:"smooth",showLegend:!1,withGradientFill:!1})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Monotone X Curve"}),(0,o.jsx)(m.A,{width:300,height:200,data:E,curveType:"monotone",showLegend:!1,withGradientFill:!1})]})]})},parameters:{docs:{description:{story:"Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points."}}}},C=a.bind({});C.args={data:e.A,showLegend:!0,legendOrientation:"horizontal",withGradientFill:!1,smoothing:!0,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}}},C.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const P=a.bind({});P.args={...n.args,margin:{bottom:40},showLegend:!0,data:[{...w.A[0],label:"Vistors to compare",options:{...w.A[0].options,seriesLineStyle:{strokeDasharray:"5 5 1"},legendShapeStyle:{strokeDasharray:"5 5 1"}}},w.A[1]]},P.parameters={docs:{description:{story:"Demonstrates the option of setting a seriesLineStyle to a dash array."}}};const L=a.bind({});L.args={...n.args,withStartGlyphs:!0};const B={render:()=>(0,o.jsx)(m.A,{data:[{label:"String Dates",data:[{dateString:"2024-01-01",value:10},{dateString:"2024-01-02",value:20},{dateString:"2024-01-03 00:00:00",value:15},{dateString:"2024-01-04",value:25},{dateString:"2024-01-05 00:00",value:30}],options:{}}],withGradientFill:!1}),parameters:{docs:{description:{story:`Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:
- Simple date strings (YYYY-MM-DD)
- Date with time (YYYY-MM-DD 00:00:00)
- Date with time (YYYY-MM-DD 00:00)
- ISO format (YYYY-MM-DDT00:00:00)
- UTC format (YYYY-MM-DDT00:00:00Z)
- Timezone offset (YYYY-MM-DDT00:00:00\xB1HH:mm)
`}}}},j=["Default","SingleSeries","WithoutTooltip","CustomDimensions","WithLegend","WithVerticalLegend","FixedDimensions","GridientFilled","ErrorStates","WithoutSmoothing","CustomTooltips","WithPointerEvents","CurveTypes","SmartFormatting","BrokenLine","WithStartGlyphs","DateStringFormats"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...n.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...c.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...x.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...y.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...D.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...S.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...d.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...v.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...M.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...h.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...p.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...C.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...P.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}}},"../charts/src/components/legend/base-legend.tsx":(V,A,t)=>{t.d(A,{$:()=>v});var _=t("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),m=t("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendItem.js"),e=t("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendShape.js"),R=t("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendLabel.js"),b=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),w=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=t("../charts/src/providers/theme/theme-provider.tsx"),u=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=t.n(u),f=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss"),a={};a.insert="head",a.singleton=!1;var n=r()(f.A,a);const c=f.A.locals||{};function x(s){return s&&typeof s=="object"&&"value"in s&&typeof s.value<"u"?s.value:s}function y(s){return String(x(s))}function D({scale:s,labelFormat:M}){return(h,p)=>({datum:h,index:p,text:`${M(h,p)}`,value:s(h)})}var S=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d={horizontal:"row",vertical:"column"},v=(0,o.forwardRef)(({items:s,className:M,orientation:h="horizontal",shape:p="rect",fill:F=y,size:C=y,labelFormat:P=x,labelTransform:L=D,shapeWidth:B=16,shapeHeight:j=16,shapeMargin:E="2px 4px 2px 0",labelAlign:N="left",labelFlex:X="1",labelMargin:k="0 4px",itemMargin:G="0",itemDirection:Q="row",legendLabelProps:U,...z},K)=>{const g=(0,i.RW)(),l=(0,b.A)({domain:s.map(T=>T.label),range:s.map(T=>T.color)}),O=l.domain(),W=(0,o.useCallback)(({index:T})=>s[T]?.shapeStyle??g.legendShapeStyles?.[T]??{},[s,g]);return(0,S.jsx)(_.A,{scale:l,labelFormat:P,labelTransform:L,children:T=>(0,S.jsx)("div",{ref:K,role:"list","data-testid":`legend-${h}`,className:(0,w.A)(c.legend,c[`legend--${h}`],M),style:{flexDirection:d[h],...g.legendContainerStyles},children:T.map((Y,J)=>(0,S.jsxs)(m.A,{className:c["legend-item"],"data-testid":"legend-item",margin:G,flexDirection:Q,...z,children:[(0,S.jsx)(e.A,{shape:p,height:j,width:B,margin:E,item:O[J],itemIndex:J,label:Y,fill:F,size:C,shapeStyle:W}),(0,S.jsxs)(R.A,{style:{justifyContent:N,flex:X,margin:k,...g.legendLabelStyles},...U,children:[Y.text,s.find(Z=>Z.label===Y.text)?.value&&(0,S.jsx)("span",{className:c["legend-item-value"],children:s.find(Z=>Z.label===Y.text)?.value})]})]},`legend-${Y.text}-${J}`))})})});try{v.displayName="BaseLegend",v.__docgenInfo={description:"",displayName:"BaseLegend",props:{size:{defaultValue:null,description:"Legend item size accessor function.",name:"size",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string | number"}},className:{defaultValue:null,description:"Classname to be applied to legend container.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Optional render function override.",name:"children",required:!1,type:{name:"(labels: { datum: any; index: number; text: string; value?: any; }[]) => React.ReactNode"}},style:{defaultValue:null,description:"Styles to be applied to the legend container.",name:"style",required:!1,type:{name:"React.CSSProperties"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItem[]"}},fill:{defaultValue:null,description:"Legend item fill accessor function.",name:"fill",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string"}},domain:{defaultValue:null,description:"Legend domain.",name:"domain",required:!1,type:{name:"any[]"}},shapeWidth:{defaultValue:{value:"16"},description:"Width of the legend shape.",name:"shapeWidth",required:!1,type:{name:"string | number"}},shapeHeight:{defaultValue:{value:"16"},description:"Height of the legend shape.",name:"shapeHeight",required:!1,type:{name:"string | number"}},shapeMargin:{defaultValue:{value:"2px 4px 2px 0"},description:"Margin of the legend shape.",name:"shapeMargin",required:!1,type:{name:"string | number"}},labelAlign:{defaultValue:{value:"left"},description:"Flex-box alignment of legend item labels.",name:"labelAlign",required:!1,type:{name:"string"}},labelFlex:{defaultValue:{value:"1"},description:"Flex-box flex of legend item labels.",name:"labelFlex",required:!1,type:{name:"string | number"}},labelMargin:{defaultValue:{value:"0 4px"},description:"Margin of legend item labels.",name:"labelMargin",required:!1,type:{name:"string | number"}},itemMargin:{defaultValue:{value:"0"},description:"Margin of legend items.",name:"itemMargin",required:!1,type:{name:"string | number"}},itemDirection:{defaultValue:{value:"row"},description:"Flex direction of legend items.",name:"itemDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},shape:{defaultValue:{value:"rect"},description:"Legend shape string preset or Element or Component.",name:"shape",required:!1,type:{name:"LegendShape<any, any>"}},labelFormat:{defaultValue:null,description:"Given a legend item and its index, returns an item label.",name:"labelFormat",required:!1,type:{name:"LabelFormatter<any>"}},labelTransform:{defaultValue:null,description:"Given the legend scale and labelFormatter, returns a label with datum, index, value, and label.",name:"labelTransform",required:!1,type:{name:"LabelFormatterFactory<ScaleOrdinal<any, any, never>>"}},legendLabelProps:{defaultValue:null,description:"Additional props to be set on LegendLabel.",name:"legendLabelProps",required:!1,type:{name:"Partial<LegendLabelProps>"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:v.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../charts/src/components/line-chart/line-chart.tsx":(V,A,t)=>{t.d(A,{A:()=>g});var _=t("../number-formatters/src/index.ts"),m=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/catmullRom.js"),e=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/linear.js"),R=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/monotone.js"),b=t("../../../node_modules/.pnpm/@visx+gradient@3.12.0_react@18.3.1/node_modules/@visx/gradient/esm/gradients/LinearGradient.js"),w=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/context/DataContext.js"),o=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),i=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),u=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),r=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/AreaSeries.js"),f=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),a=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=t("../charts/src/providers/theme/theme-provider.tsx"),x=t("../charts/src/components/legend/base-legend.tsx"),y=t("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js"),D=t("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js"),S=t("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse.js");const d=l=>/T.*[Z]$|T.*[+-]\d{2}:?\d{2}$/.test(l),v=l=>{const O=l.trim();if(d(O)){const T=(0,y.H)(O);return(0,D.f)(T)?T:new Date(NaN)}const W=["yyyy-MM-dd","yyyy-MM-dd HH:mm:ss","yyyy-MM-dd HH:mm","yyyy-MM-dd'T'HH:mm:ss","yyyy-MM-dd'T'HH:mm:ss.SSS","yyyy-MM-dd'T'HH:mm"];for(const T of W){const Y=(0,S.qg)(O,T,new Date);if((0,D.f)(Y))return Y}return new Date(NaN)};var s=t("../charts/src/components/shared/use-chart-margin.tsx"),M=t("../charts/src/components/shared/use-element-height.ts"),h=t("../charts/src/components/shared/with-responsive.tsx"),p=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),F=t.n(p),C=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss"),P={};P.insert="head",P.singleton=!1;var L=F()(C.A,P);const B=C.A.locals||{};var j=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const E=100,N=l=>{const{theme:O}=(0,n.useContext)(w.A)||{};return(0,j.jsx)("circle",{cx:l.x,cy:l.y,r:l.size,fill:l.color,stroke:O?.backgroundColor,strokeWidth:1.5,paintOrder:"fill","data-testid":`start-glyph-${l.index}`,...l.glyphStyle})},X=l=>(0,n.createElement)(N,{...l,key:l.key}),k=({data:l,index:O,color:W,glyphStyle:T,renderGlyph:Y,accessors:J})=>{const{xScale:Z,yScale:ee}=(0,n.useContext)(w.A)||{};if(!Z||!ee||l.data.length===0)return null;const q=l.data[0],te=Z(J.xAccessor(q)),ne=ee(J.yAccessor(q));if(typeof te!="number"||typeof ne!="number")return null;const $=Number(T?.radius)||4;return Y({key:`start-glyph-${l.label}`,index:O,datum:q,color:W,size:$,x:te,y:ne,glyphStyle:T})},G=(l,O)=>{if(!l)return O?m.A:e.A;switch(l){case"smooth":return m.A;case"monotone":return R.G;case"linear":return e.A;default:return e.A}},Q=({tooltipData:l})=>{const O=l?.nearestDatum?.datum;if(!O)return null;const W=Object.entries(l?.datumByKey||{}).map(([T,{datum:Y}])=>({key:T,value:Y.value})).sort((T,Y)=>Y.value-T.value);return(0,j.jsxs)("div",{className:B["line-chart__tooltip"],children:[(0,j.jsx)("div",{className:B["line-chart__tooltip-date"],children:O.date?.toLocaleDateString()}),W.map(T=>(0,j.jsxs)("div",{className:B["line-chart__tooltip-row"],children:[(0,j.jsxs)("span",{className:B["line-chart__tooltip-label"],children:[T.key,":"]}),(0,j.jsx)("span",{className:B["line-chart__tooltip-value"],children:T.value})]},T.key))]})},U=l=>new Date(l).toLocaleDateString(void 0,{month:"short",day:"numeric"}),z=l=>l?.length?l.some(W=>W.data.some(T=>isNaN(T.value)||T.value===null||T.value===void 0||isNaN(T.date.getTime())))?"Invalid data":null:"No data available",K=({data:l,width:O,height:W,className:T,margin:Y,withTooltips:J=!0,showLegend:Z=!1,legendOrientation:ee="horizontal",legendShape:q="line",withGradientFill:te=!1,smoothing:ne=!0,curveType:$,renderTooltip:oe=Q,withStartGlyphs:le=!1,options:ae={},onPointerDown:re=void 0,onPointerUp:ue=void 0,onPointerMove:ce=void 0,onPointerOut:De=void 0})=>{const me=(0,c.RW)(),ie=(0,c.Ox)(l),pe=(0,n.useId)(),[we,fe]=(0,M.v)(),se=(0,n.useMemo)(()=>l.map(I=>({...I,data:I.data.map(H=>({...H,date:H.date?H.date:v(H.dateString)})).sort((H,he)=>H.date.getTime()-he.date.getTime())})),[l]),de=(0,n.useMemo)(()=>({axis:{x:{orientation:"bottom",numTicks:Math.min(se[0]?.data.length,Math.ceil(O/E)),tickFormat:U,...ae?.axis?.x},y:{orientation:"left",numTicks:4,tickFormat:_.qe,...ae?.axis?.y}},xScale:{type:"time",...ae?.xScale},yScale:{type:"linear",nice:!0,zero:!1,...ae?.yScale}}),[ae,se,O]),ye=(0,s.a)(W,de,se,ie),ve=z(se);if(ve)return(0,j.jsx)("div",{className:(0,a.A)("line-chart",B["line-chart"]),children:ve});const _e=se.map((I,H)=>({label:I.label,value:"",color:I?.options?.stroke??me.colors[H%me.colors.length],shapeStyle:I?.options?.legendShapeStyle})),ge={xAccessor:I=>I?.date,yAccessor:I=>I?.value};return(0,j.jsxs)("div",{className:(0,a.A)("line-chart",B["line-chart"],T),"data-testid":"line-chart",role:"img","aria-label":"line chart",style:{width:O,height:W},children:[(0,j.jsxs)(o.A,{theme:ie,width:O,height:W-fe,margin:{...ye,...Y},xScale:de.xScale,yScale:de.yScale,onPointerDown:re,onPointerUp:ue,onPointerMove:ce,onPointerOut:De,pointerEventsDataKey:"nearest",children:[(0,j.jsx)(i.A,{columns:!1,numTicks:4}),(0,j.jsx)(u.A,{...de.axis.x}),(0,j.jsx)(u.A,{...de.axis.y}),se.map((I,H)=>{const he=I.options?.stroke??ie.colors[H%ie.colors.length],xe=I.options?.seriesLineStyle??me?.seriesLineStyles?.[H%me.seriesLineStyles.length]??{};return(0,j.jsxs)("g",{children:[le&&(0,j.jsx)(k,{index:H,data:I,color:he,renderGlyph:X,accessors:ge}),te&&(0,j.jsx)(b.A,{id:`area-gradient-${pe}-${H+1}`,from:he,fromOpacity:.4,toOpacity:.1,to:ie.backgroundColor,...I.options?.gradient,"data-testid":"line-gradient"}),(0,j.jsx)(r.A,{dataKey:I?.label,data:I.data,...ge,fill:te?`url(#area-gradient-${pe}-${H+1})`:"transparent",renderLine:!0,curve:G($,ne),lineProps:xe},I?.label)]},I?.label||H)}),J&&(0,j.jsx)(f.A,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,showSeriesGlyphs:!0,renderTooltip:oe})]}),Z&&(0,j.jsx)(x.$,{items:_e,orientation:ee,className:B["line-chart-legend"],shape:q,ref:we})]})},g=(0,h.F)(K);try{linechart.displayName="linechart",linechart.__docgenInfo={description:"",displayName:"linechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:{value:"undefined"},description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"true"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"line"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},renderTooltip:{defaultValue:{value:`( {
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
}`},description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withGradientFill:{defaultValue:{value:"false"},description:"",name:"withGradientFill",required:!1,type:{name:"boolean"}},smoothing:{defaultValue:{value:"true"},description:"",name:"smoothing",required:!1,type:{name:"boolean"}},curveType:{defaultValue:null,description:"",name:"curveType",required:!1,type:{name:"enum",value:[{value:'"linear"'},{value:'"smooth"'},{value:'"monotone"'}]}},withStartGlyphs:{defaultValue:{value:"false"},description:"",name:"withStartGlyphs",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/line-chart.tsx#linechart"]={docgenInfo:linechart.__docgenInfo,name:"linechart",path:"../charts/src/components/line-chart/line-chart.tsx#linechart"})}catch{}},"../charts/src/components/line-chart/stories/large-values-sample.ts":(V,A,t)=>{t.d(A,{A:()=>m});const m=[{label:"Revenue (Billions)",data:[{date:new Date("2024-01-01"),value:12e8},{date:new Date("2024-02-01"),value:145e7},{date:new Date("2024-03-01"),value:168e7},{date:new Date("2024-04-01"),value:21e8},{date:new Date("2024-05-01"),value:235e7},{date:new Date("2024-06-01"),value:28e8}],options:{stroke:"#3858E9"}},{label:"Users (Millions)",data:[{date:new Date("2024-01-01"),value:45e6},{date:new Date("2024-02-01"),value:52e6},{date:new Date("2024-03-01"),value:48e6},{date:new Date("2024-04-01"),value:61e6},{date:new Date("2024-05-01"),value:75e6},{date:new Date("2024-06-01"),value:89e6}],options:{stroke:"#00BA37"}}]},"../charts/src/components/line-chart/stories/site-traffic-sample.ts":(V,A,t)=>{t.d(A,{A:()=>_});const _=[{label:"Views",options:{stroke:"#069e08"},data:[{date:new Date("2024-01-01"),value:2558},{date:new Date("2024-01-02"),value:3399},{date:new Date("2024-01-03"),value:2260},{date:new Date("2024-01-04"),value:2331},{date:new Date("2024-01-05"),value:3302},{date:new Date("2024-01-06"),value:1852},{date:new Date("2024-01-07"),value:2607},{date:new Date("2024-01-08"),value:2804},{date:new Date("2024-01-09"),value:3260},{date:new Date("2024-01-10"),value:2941},{date:new Date("2024-01-11"),value:2857},{date:new Date("2024-01-12"),value:3461},{date:new Date("2024-01-13"),value:1548},{date:new Date("2024-01-14"),value:2739},{date:new Date("2024-01-15"),value:3288},{date:new Date("2024-01-16"),value:2869},{date:new Date("2024-01-17"),value:2590},{date:new Date("2024-01-18"),value:2609},{date:new Date("2024-01-19"),value:2648},{date:new Date("2024-01-20"),value:1805},{date:new Date("2024-01-21"),value:2531},{date:new Date("2024-01-22"),value:3605},{date:new Date("2024-01-23"),value:2366},{date:new Date("2024-01-24"),value:2782},{date:new Date("2024-01-25"),value:2885},{date:new Date("2024-01-26"),value:2918},{date:new Date("2024-01-27"),value:2518},{date:new Date("2024-01-28"),value:2378},{date:new Date("2024-01-29"),value:2714},{date:new Date("2024-01-30"),value:3279}]},{label:"Visitors",options:{stroke:"rgb(230, 139, 40)"},data:[{date:new Date("2024-01-01"),value:2412},{date:new Date("2024-01-02"),value:1899},{date:new Date("2024-01-03"),value:2061},{date:new Date("2024-01-04"),value:1939},{date:new Date("2024-01-05"),value:1986},{date:new Date("2024-01-06"),value:1560},{date:new Date("2024-01-07"),value:1741},{date:new Date("2024-01-08"),value:2120},{date:new Date("2024-01-09"),value:1889},{date:new Date("2024-01-10"),value:1666},{date:new Date("2024-01-11"),value:2396},{date:new Date("2024-01-12"),value:2276},{date:new Date("2024-01-13"),value:1218},{date:new Date("2024-01-14"),value:1228},{date:new Date("2024-01-15"),value:1600},{date:new Date("2024-01-16"),value:1814},{date:new Date("2024-01-17"),value:1701},{date:new Date("2024-01-18"),value:1507},{date:new Date("2024-01-19"),value:1833},{date:new Date("2024-01-20"),value:1407},{date:new Date("2024-01-21"),value:965},{date:new Date("2024-01-22"),value:2288},{date:new Date("2024-01-23"),value:2135},{date:new Date("2024-01-24"),value:1824},{date:new Date("2024-01-25"),value:2219},{date:new Date("2024-01-26"),value:1918},{date:new Date("2024-01-27"),value:1101},{date:new Date("2024-01-28"),value:1695},{date:new Date("2024-01-29"),value:1615},{date:new Date("2024-01-30"),value:2056}]}]},"../charts/src/components/shared/use-chart-margin.tsx":(V,A,t)=>{t.d(A,{a:()=>w});var _=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),m=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),R=t("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const b=(o,i,u)=>{const r=o.map(a=>i(a,0,[])),f=r.reduce((a,n)=>a.length>=n.length?a:n,r[0]);return(0,R.A)(f,u)},w=(o,i,u,r,f=!1)=>{const a=(0,e.useMemo)(()=>{const n=u.flatMap(D=>D.data);if(f)return n.map(D=>D.label||i.axis?.y?.tickFormat(D.date.getTime(),0,[]));const c=Math.min(...n.map(D=>D.value)),x=Math.max(...n.map(D=>D.value)),y=(0,_.A)({...i.yScale,domain:[c,x],range:[o,0]});return(0,m.A)(y,i.axis?.y?.numTicks)},[i,u,o,f]);return(0,e.useMemo)(()=>{const n={top:10,right:20,bottom:20,left:20},c=40,x=i.axis?.y?.orientation,y=x==="right"?r.axisStyles.y.right:r.axisStyles.y.left,S=(b(a,i.axis?.y?.tickFormat,y.axisLabel)??c)+(y?.tickLength??0);return x==="right"?n.right=S:n.left=S,i.axis?.x?.orientation==="top"&&(n.top=20,n.bottom=10),n},[i,r,a])}},"../charts/src/components/shared/use-element-height.ts":(V,A,t)=>{t.d(A,{v:()=>m});var _=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function m({initialHeight:e=0}={}){const R=(0,_.useRef)(null),[b,w]=(0,_.useState)(e);return(0,_.useLayoutEffect)(()=>{if(!R.current)return;const o=()=>{w(R.current?.getBoundingClientRect().height||0)};o();const i=new window.ResizeObserver(o);return i.observe(R.current),()=>{i.disconnect()}},[]),[R,b]}},"../charts/src/components/shared/with-responsive.tsx":(V,A,t)=>{t.d(A,{F:()=>b});var _=t("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),m=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const e={width:600,height:400},R=({resizeDebounceTime:w=300,maxWidth:o=1200,aspectRatio:i=.5})=>{const{parentRef:u,width:r}=(0,_.A)({debounceTime:w,enableDebounceLeadingCall:!0,initialSize:e}),f=r?Math.min(r,o):e.width,a=f*i;return{parentRef:u,width:f,height:a}};function b(w){return function({resizeDebounceTime:i=300,maxWidth:u=1200,aspectRatio:r=.5,...f}){const{parentRef:a,width:n,height:c}=R({resizeDebounceTime:i,maxWidth:u,aspectRatio:r});return(0,m.jsx)("div",{ref:a,style:{width:"100%"},children:(0,m.jsx)(w,{width:n,height:c,size:n,...f})})}}try{b.displayName="withResponsive",b.__docgenInfo={description:`A higher-order component that provides responsive dimensions
to the wrapped chart component using useParentSize from`,displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/with-responsive.tsx#withResponsive"]={docgenInfo:b.__docgenInfo,name:"withResponsive",path:"../charts/src/components/shared/with-responsive.tsx#withResponsive"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(V,A,t)=>{t.d(A,{NP:()=>i,Ox:()=>o,RW:()=>w});var _=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),m=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=t("../charts/src/providers/theme/themes.ts"),R=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const b=(0,m.createContext)(e.zQ),w=()=>(0,m.useContext)(b),o=u=>{const r=w();return(0,m.useMemo)(()=>{const f=(u??[]).map(a=>a.options?.stroke).filter(a=>!!a);return(0,_.A)({...r,colors:[...f,...r.colors??[]]})},[r,u])},i=({theme:u={},children:r})=>{const f={...e.zQ,...u};return(0,R.jsx)(b.Provider,{value:f,children:r})};try{i.displayName="ThemeProvider",i.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:i.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{w.displayName="useChartTheme",w.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:w.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}try{o.displayName="useXYChartTheme",o.__docgenInfo={description:"",displayName:"useXYChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"]={docgenInfo:o.__docgenInfo,name:"useXYChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(V,A,t)=>{t.d(A,{QI:()=>m,pk:()=>e,zQ:()=>_});const _={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"}},m={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"}},e={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss":(V,A,t)=>{t.d(A,{A:()=>w});var _=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=t.n(_),e=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),R=t.n(e),b=R()(m());b.push([V.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;font-size:.875rem}.AyocUvYOPM3rztxeHhaJ{display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),b.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const w=b},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss":(V,A,t)=>{t.d(A,{A:()=>w});var _=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=t.n(_),e=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),R=t.n(e),b=R()(m());b.push([V.id,".SVlAnnWw2ot8McusfLcw{position:relative}.SVlAnnWw2ot8McusfLcw svg{overflow:visible}.WG8wpgeFR6IoBhr41Y3z{background:#fff;padding:.5rem}.t5p9YWtrovlLQm8WlrGF{font-weight:700;padding-bottom:10px}.FPtDJMJR2GRu0df3iYy6{display:flex;align-items:center;padding:4px 0;justify-content:space-between}.xTJS98Xw7HFAGWFwzsgd{font-weight:500;padding-right:1rem}.visx-tooltip-glyph svg{width:10px;height:10px}",""]),b.locals={"line-chart":"SVlAnnWw2ot8McusfLcw","line-chart__tooltip":"WG8wpgeFR6IoBhr41Y3z","line-chart__tooltip-date":"t5p9YWtrovlLQm8WlrGF","line-chart__tooltip-row":"FPtDJMJR2GRu0df3iYy6","line-chart__tooltip-label":"xTJS98Xw7HFAGWFwzsgd"};const w=b},"../../../node_modules/.pnpm/d3-path@1.0.9/node_modules/d3-path/src/path.js":(V,A,t)=>{t.d(A,{A:()=>o});var _=Math.PI,m=2*_,e=1e-6,R=m-e;function b(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function w(){return new b}b.prototype=w.prototype={constructor:b,moveTo:function(i,u){this._+="M"+(this._x0=this._x1=+i)+","+(this._y0=this._y1=+u)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(i,u){this._+="L"+(this._x1=+i)+","+(this._y1=+u)},quadraticCurveTo:function(i,u,r,f){this._+="Q"+ +i+","+ +u+","+(this._x1=+r)+","+(this._y1=+f)},bezierCurveTo:function(i,u,r,f,a,n){this._+="C"+ +i+","+ +u+","+ +r+","+ +f+","+(this._x1=+a)+","+(this._y1=+n)},arcTo:function(i,u,r,f,a){i=+i,u=+u,r=+r,f=+f,a=+a;var n=this._x1,c=this._y1,x=r-i,y=f-u,D=n-i,S=c-u,d=D*D+S*S;if(a<0)throw new Error("negative radius: "+a);if(this._x1===null)this._+="M"+(this._x1=i)+","+(this._y1=u);else if(d>e)if(!(Math.abs(S*x-y*D)>e)||!a)this._+="L"+(this._x1=i)+","+(this._y1=u);else{var v=r-n,s=f-c,M=x*x+y*y,h=v*v+s*s,p=Math.sqrt(M),F=Math.sqrt(d),C=a*Math.tan((_-Math.acos((M+d-h)/(2*p*F)))/2),P=C/F,L=C/p;Math.abs(P-1)>e&&(this._+="L"+(i+P*D)+","+(u+P*S)),this._+="A"+a+","+a+",0,0,"+ +(S*v>D*s)+","+(this._x1=i+L*x)+","+(this._y1=u+L*y)}},arc:function(i,u,r,f,a,n){i=+i,u=+u,r=+r,n=!!n;var c=r*Math.cos(f),x=r*Math.sin(f),y=i+c,D=u+x,S=1^n,d=n?f-a:a-f;if(r<0)throw new Error("negative radius: "+r);this._x1===null?this._+="M"+y+","+D:(Math.abs(this._x1-y)>e||Math.abs(this._y1-D)>e)&&(this._+="L"+y+","+D),r&&(d<0&&(d=d%m+m),d>R?this._+="A"+r+","+r+",0,1,"+S+","+(i-c)+","+(u-x)+"A"+r+","+r+",0,1,"+S+","+(this._x1=y)+","+(this._y1=D):d>e&&(this._+="A"+r+","+r+",0,"+ +(d>=_)+","+S+","+(this._x1=i+r*Math.cos(a))+","+(this._y1=u+r*Math.sin(a))))},rect:function(i,u,r,f){this._+="M"+(this._x0=this._x1=+i)+","+(this._y0=this._y1=+u)+"h"+ +r+"v"+ +f+"h"+-r+"Z"},toString:function(){return this._}};const o=w},"../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js":(V,A,t)=>{t.d(A,{A:()=>f});var _=t("../../../node_modules/.pnpm/d3-path@1.0.9/node_modules/d3-path/src/path.js"),m=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/constant.js"),e=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/math.js");function R(a){return a.innerRadius}function b(a){return a.outerRadius}function w(a){return a.startAngle}function o(a){return a.endAngle}function i(a){return a&&a.padAngle}function u(a,n,c,x,y,D,S,d){var v=c-a,s=x-n,M=S-y,h=d-D,p=h*v-M*s;if(!(p*p<e.Ni))return p=(M*(n-D)-h*(a-y))/p,[a+p*v,n+p*s]}function r(a,n,c,x,y,D,S){var d=a-c,v=n-x,s=(S?D:-D)/(0,e.RZ)(d*d+v*v),M=s*v,h=-s*d,p=a+M,F=n+h,C=c+M,P=x+h,L=(p+C)/2,B=(F+P)/2,j=C-p,E=P-F,N=j*j+E*E,X=y-D,k=p*P-C*F,G=(E<0?-1:1)*(0,e.RZ)((0,e.T9)(0,X*X*N-k*k)),Q=(k*E-j*G)/N,U=(-k*j-E*G)/N,z=(k*E+j*G)/N,K=(-k*j+E*G)/N,g=Q-L,l=U-B,O=z-L,W=K-B;return g*g+l*l>O*O+W*W&&(Q=z,U=K),{cx:Q,cy:U,x01:-M,y01:-h,x11:Q*(y/X-1),y11:U*(y/X-1)}}function f(){var a=R,n=b,c=(0,m.A)(0),x=null,y=w,D=o,S=i,d=null;function v(){var s,M,h=+a.apply(this,arguments),p=+n.apply(this,arguments),F=y.apply(this,arguments)-e.TW,C=D.apply(this,arguments)-e.TW,P=(0,e.tn)(C-F),L=C>F;if(d||(d=s=(0,_.A)()),p<h&&(M=p,p=h,h=M),!(p>e.Ni))d.moveTo(0,0);else if(P>e.FA-e.Ni)d.moveTo(p*(0,e.gn)(F),p*(0,e.F8)(F)),d.arc(0,0,p,F,C,!L),h>e.Ni&&(d.moveTo(h*(0,e.gn)(C),h*(0,e.F8)(C)),d.arc(0,0,h,C,F,L));else{var B=F,j=C,E=F,N=C,X=P,k=P,G=S.apply(this,arguments)/2,Q=G>e.Ni&&(x?+x.apply(this,arguments):(0,e.RZ)(h*h+p*p)),U=(0,e.jk)((0,e.tn)(p-h)/2,+c.apply(this,arguments)),z=U,K=U,g,l;if(Q>e.Ni){var O=(0,e.qR)(Q/h*(0,e.F8)(G)),W=(0,e.qR)(Q/p*(0,e.F8)(G));(X-=O*2)>e.Ni?(O*=L?1:-1,E+=O,N-=O):(X=0,E=N=(F+C)/2),(k-=W*2)>e.Ni?(W*=L?1:-1,B+=W,j-=W):(k=0,B=j=(F+C)/2)}var T=p*(0,e.gn)(B),Y=p*(0,e.F8)(B),J=h*(0,e.gn)(N),Z=h*(0,e.F8)(N);if(U>e.Ni){var ee=p*(0,e.gn)(j),q=p*(0,e.F8)(j),te=h*(0,e.gn)(E),ne=h*(0,e.F8)(E),$;if(P<e.pi&&($=u(T,Y,te,ne,ee,q,J,Z))){var oe=T-$[0],le=Y-$[1],ae=ee-$[0],re=q-$[1],ue=1/(0,e.F8)((0,e.HQ)((oe*ae+le*re)/((0,e.RZ)(oe*oe+le*le)*(0,e.RZ)(ae*ae+re*re)))/2),ce=(0,e.RZ)($[0]*$[0]+$[1]*$[1]);z=(0,e.jk)(U,(h-ce)/(ue-1)),K=(0,e.jk)(U,(p-ce)/(ue+1))}}k>e.Ni?K>e.Ni?(g=r(te,ne,T,Y,p,K,L),l=r(ee,q,J,Z,p,K,L),d.moveTo(g.cx+g.x01,g.cy+g.y01),K<U?d.arc(g.cx,g.cy,K,(0,e.FP)(g.y01,g.x01),(0,e.FP)(l.y01,l.x01),!L):(d.arc(g.cx,g.cy,K,(0,e.FP)(g.y01,g.x01),(0,e.FP)(g.y11,g.x11),!L),d.arc(0,0,p,(0,e.FP)(g.cy+g.y11,g.cx+g.x11),(0,e.FP)(l.cy+l.y11,l.cx+l.x11),!L),d.arc(l.cx,l.cy,K,(0,e.FP)(l.y11,l.x11),(0,e.FP)(l.y01,l.x01),!L))):(d.moveTo(T,Y),d.arc(0,0,p,B,j,!L)):d.moveTo(T,Y),!(h>e.Ni)||!(X>e.Ni)?d.lineTo(J,Z):z>e.Ni?(g=r(J,Z,ee,q,h,-z,L),l=r(T,Y,te,ne,h,-z,L),d.lineTo(g.cx+g.x01,g.cy+g.y01),z<U?d.arc(g.cx,g.cy,z,(0,e.FP)(g.y01,g.x01),(0,e.FP)(l.y01,l.x01),!L):(d.arc(g.cx,g.cy,z,(0,e.FP)(g.y01,g.x01),(0,e.FP)(g.y11,g.x11),!L),d.arc(0,0,h,(0,e.FP)(g.cy+g.y11,g.cx+g.x11),(0,e.FP)(l.cy+l.y11,l.cx+l.x11),L),d.arc(l.cx,l.cy,z,(0,e.FP)(l.y11,l.x11),(0,e.FP)(l.y01,l.x01),!L))):d.arc(0,0,h,N,E,L)}if(d.closePath(),s)return d=null,s+""||null}return v.centroid=function(){var s=(+a.apply(this,arguments)+ +n.apply(this,arguments))/2,M=(+y.apply(this,arguments)+ +D.apply(this,arguments))/2-e.pi/2;return[(0,e.gn)(M)*s,(0,e.F8)(M)*s]},v.innerRadius=function(s){return arguments.length?(a=typeof s=="function"?s:(0,m.A)(+s),v):a},v.outerRadius=function(s){return arguments.length?(n=typeof s=="function"?s:(0,m.A)(+s),v):n},v.cornerRadius=function(s){return arguments.length?(c=typeof s=="function"?s:(0,m.A)(+s),v):c},v.padRadius=function(s){return arguments.length?(x=s==null?null:typeof s=="function"?s:(0,m.A)(+s),v):x},v.startAngle=function(s){return arguments.length?(y=typeof s=="function"?s:(0,m.A)(+s),v):y},v.endAngle=function(s){return arguments.length?(D=typeof s=="function"?s:(0,m.A)(+s),v):D},v.padAngle=function(s){return arguments.length?(S=typeof s=="function"?s:(0,m.A)(+s),v):S},v.context=function(s){return arguments.length?(d=s??null,v):d},v}},"../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/constant.js":(V,A,t)=>{t.d(A,{A:()=>_});function _(m){return function(){return m}}},"../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/math.js":(V,A,t)=>{t.d(A,{F8:()=>w,FA:()=>f,FP:()=>m,HQ:()=>a,Ni:()=>i,RZ:()=>o,T9:()=>R,TW:()=>r,gn:()=>e,jk:()=>b,pi:()=>u,qR:()=>n,tn:()=>_});var _=Math.abs,m=Math.atan2,e=Math.cos,R=Math.max,b=Math.min,w=Math.sin,o=Math.sqrt,i=1e-12,u=Math.PI,r=u/2,f=2*u;function a(c){return c>1?0:c<-1?u:Math.acos(c)}function n(c){return c>=1?r:c<=-1?-r:Math.asin(c)}},"../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js":(V,A,t)=>{t.d(A,{A:()=>b});var _=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/constant.js");function m(w,o){return o<w?-1:o>w?1:o>=w?0:NaN}function e(w){return w}var R=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/math.js");function b(){var w=e,o=m,i=null,u=(0,_.A)(0),r=(0,_.A)(R.FA),f=(0,_.A)(0);function a(n){var c,x=n.length,y,D,S=0,d=new Array(x),v=new Array(x),s=+u.apply(this,arguments),M=Math.min(R.FA,Math.max(-R.FA,r.apply(this,arguments)-s)),h,p=Math.min(Math.abs(M)/x,f.apply(this,arguments)),F=p*(M<0?-1:1),C;for(c=0;c<x;++c)(C=v[d[c]=c]=+w(n[c],c,n))>0&&(S+=C);for(o!=null?d.sort(function(P,L){return o(v[P],v[L])}):i!=null&&d.sort(function(P,L){return i(n[P],n[L])}),c=0,D=S?(M-x*F)/S:0;c<x;++c,s=h)y=d[c],C=v[y],h=s+(C>0?C*D:0)+F,v[y]={data:n[y],index:c,value:C,startAngle:s,endAngle:h,padAngle:p};return v}return a.value=function(n){return arguments.length?(w=typeof n=="function"?n:(0,_.A)(+n),a):w},a.sortValues=function(n){return arguments.length?(o=n,i=null,a):o},a.sort=function(n){return arguments.length?(i=n,o=null,a):i},a.startAngle=function(n){return arguments.length?(u=typeof n=="function"?n:(0,_.A)(+n),a):u},a.endAngle=function(n){return arguments.length?(r=typeof n=="function"?n:(0,_.A)(+n),a):r},a.padAngle=function(n){return arguments.length?(f=typeof n=="function"?n:(0,_.A)(+n),a):f},a}}}]);
