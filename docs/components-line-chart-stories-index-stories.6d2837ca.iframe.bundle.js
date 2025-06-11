"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4722],{"../charts/src/components/line-chart/stories/index.stories.tsx":(te,R,t)=>{t.r(R),t.d(R,{BrokenLine:()=>p,CurveTypes:()=>$,CustomDimensions:()=>L,CustomTooltips:()=>ee,DateStringFormats:()=>M,Default:()=>y,ErrorStates:()=>J,FixedDimensions:()=>N,GridientFilled:()=>Q,SingleSeries:()=>A,SmartFormatting:()=>K,WithCustomGlyph:()=>P,WithCustomSvgGlyph:()=>W,WithLegend:()=>z,WithLegendShapeRectangle:()=>S,WithPointerEvents:()=>U,WithStartGlyphs:()=>o,WithVerticalLegend:()=>V,WithoutSmoothing:()=>q,WithoutTooltip:()=>G,__namedExportsOrder:()=>H,default:()=>_});var f=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),h=t.n(f),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),Y=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),E=t.n(Y),w=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),C=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/star.js"),l=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js");function d(c){var F=c.top,B=F===void 0?0:F,T=c.left,X=T===void 0?0:T,k=c.className,se=c.children;return e.createElement(l.A,{className:E()("visx-glyph",k),top:B,left:X},se)}d.propTypes={top:h().number,left:h().number,className:h().string,children:h().node};var i=["children","className","top","left","size"];function D(){return D=Object.assign?Object.assign.bind():function(c){for(var F=1;F<arguments.length;F++){var B=arguments[F];for(var T in B)Object.prototype.hasOwnProperty.call(B,T)&&(c[T]=B[T])}return c},D.apply(this,arguments)}function s(c,F){if(c==null)return{};var B={},T=Object.keys(c),X,k;for(k=0;k<T.length;k++)X=T[k],!(F.indexOf(X)>=0)&&(B[X]=c[X]);return B}function a(c){var F=c.children,B=c.className,T=c.top,X=c.left,k=c.size,se=s(c,i),ae=(0,w.A)();return ae.type(C.A),(typeof k=="number"||k)&&ae.size(k),F?e.createElement(e.Fragment,null,F({path:ae})):e.createElement(d,{top:T,left:X},e.createElement("path",D({className:E()("visx-glyph-star",B),d:ae()||""},se)))}a.propTypes={children:h().func,className:h().string,top:h().number,left:h().number,size:h().oneOfType([h().number,h().func])};var m=t("../charts/src/components/line-chart/line-chart.tsx"),b=t("../charts/src/components/line-chart/stories/large-values-sample.ts");const g=[{label:"London",data:[{date:new Date("2022-01-01"),value:7.8},{date:new Date("2022-01-08"),value:7.2},{date:new Date("2022-01-15"),value:6.9},{date:new Date("2022-01-22"),value:6.5},{date:new Date("2022-01-29"),value:7.1},{date:new Date("2022-02-05"),value:8.3},{date:new Date("2022-02-12"),value:8.9},{date:new Date("2022-02-19"),value:9.2},{date:new Date("2022-02-26"),value:8.7},{date:new Date("2022-03-05"),value:9.4},{date:new Date("2022-03-12"),value:10.2},{date:new Date("2022-03-19"),value:11.5},{date:new Date("2022-03-26"),value:12.3},{date:new Date("2022-04-02"),value:13.1},{date:new Date("2022-04-09"),value:13.8},{date:new Date("2022-04-16"),value:14.6},{date:new Date("2022-04-23"),value:15.2},{date:new Date("2022-04-30"),value:15.9},{date:new Date("2022-05-07"),value:16.7},{date:new Date("2022-05-14"),value:17.4},{date:new Date("2022-05-21"),value:18.2},{date:new Date("2022-05-28"),value:18.9},{date:new Date("2022-06-04"),value:19.7},{date:new Date("2022-06-11"),value:20.5},{date:new Date("2022-06-18"),value:21.3},{date:new Date("2022-06-25"),value:22.1},{date:new Date("2022-07-02"),value:22.8},{date:new Date("2022-07-09"),value:23.6},{date:new Date("2022-07-16"),value:24.4},{date:new Date("2022-07-23"),value:25.2},{date:new Date("2022-07-30"),value:24.8},{date:new Date("2022-08-06"),value:24.1},{date:new Date("2022-08-13"),value:23.5},{date:new Date("2022-08-20"),value:22.8},{date:new Date("2022-08-27"),value:21.9},{date:new Date("2022-09-03"),value:20.7},{date:new Date("2022-09-10"),value:19.5},{date:new Date("2022-09-17"),value:18.3},{date:new Date("2022-09-24"),value:17.1},{date:new Date("2022-10-01"),value:16.2},{date:new Date("2022-10-08"),value:15.1},{date:new Date("2022-10-15"),value:14.2},{date:new Date("2022-10-22"),value:13.1},{date:new Date("2022-10-29"),value:12.2},{date:new Date("2022-11-05"),value:11.1},{date:new Date("2022-11-12"),value:10.2},{date:new Date("2022-11-19"),value:9.1},{date:new Date("2022-11-26"),value:8.2},{date:new Date("2022-12-03"),value:7.1},{date:new Date("2022-12-10"),value:6.2},{date:new Date("2022-12-17"),value:5.5},{date:new Date("2022-12-24"),value:5.2},{date:new Date("2022-12-31"),value:6.8},{date:new Date("2023-01-01"),value:8.2},{date:new Date("2023-01-08"),value:7.9},{date:new Date("2023-01-15"),value:5.1},{date:new Date("2023-01-22"),value:4.8},{date:new Date("2023-01-29"),value:6.3},{date:new Date("2023-02-05"),value:7.2},{date:new Date("2023-02-12"),value:9.4},{date:new Date("2023-02-19"),value:8.7},{date:new Date("2023-02-26"),value:7.1},{date:new Date("2023-03-05"),value:8.3},{date:new Date("2023-03-12"),value:9.5},{date:new Date("2023-03-19"),value:11.2},{date:new Date("2023-03-26"),value:12.8},{date:new Date("2023-04-02"),value:13.4},{date:new Date("2023-04-09"),value:14.1},{date:new Date("2023-04-16"),value:15.3},{date:new Date("2023-04-23"),value:14.8},{date:new Date("2023-04-30"),value:15.7},{date:new Date("2023-05-07"),value:16.9},{date:new Date("2023-05-14"),value:17.2},{date:new Date("2023-05-21"),value:18.4},{date:new Date("2023-05-28"),value:19.1},{date:new Date("2023-06-04"),value:20.3},{date:new Date("2023-06-11"),value:21.5},{date:new Date("2023-06-18"),value:22.8},{date:new Date("2023-06-25"),value:21.9},{date:new Date("2023-07-02"),value:23.1},{date:new Date("2023-07-09"),value:22.7},{date:new Date("2023-07-16"),value:24.2},{date:new Date("2023-07-23"),value:23.8},{date:new Date("2023-07-30"),value:22.9},{date:new Date("2023-08-06"),value:23.4},{date:new Date("2023-08-13"),value:22.8},{date:new Date("2023-08-20"),value:21.9},{date:new Date("2023-08-27"),value:20.7},{date:new Date("2023-09-03"),value:19.8},{date:new Date("2023-09-10"),value:18.9},{date:new Date("2023-09-17"),value:17.6},{date:new Date("2023-09-24"),value:16.8},{date:new Date("2023-10-01"),value:15.9},{date:new Date("2023-10-08"),value:14.7},{date:new Date("2023-10-15"),value:13.8},{date:new Date("2023-10-22"),value:12.9},{date:new Date("2023-10-29"),value:11.7},{date:new Date("2023-11-05"),value:10.8},{date:new Date("2023-11-12"),value:9.9},{date:new Date("2023-11-19"),value:8.7},{date:new Date("2023-11-26"),value:7.8},{date:new Date("2023-12-03"),value:6.9},{date:new Date("2023-12-10"),value:5.8},{date:new Date("2023-12-17"),value:4.9},{date:new Date("2023-12-24"),value:5.7},{date:new Date("2023-12-31"),value:6.2}]},{label:"Canberra",data:[{date:new Date("2022-01-01"),value:27.9},{date:new Date("2022-01-08"),value:28.4},{date:new Date("2022-01-15"),value:29.2},{date:new Date("2022-01-22"),value:28.9},{date:new Date("2022-01-29"),value:28.1},{date:new Date("2022-02-05"),value:27.3},{date:new Date("2022-02-12"),value:26.5},{date:new Date("2022-02-19"),value:25.4},{date:new Date("2022-02-26"),value:24.2},{date:new Date("2022-03-05"),value:23.1},{date:new Date("2022-03-12"),value:22.3},{date:new Date("2022-03-19"),value:21.2},{date:new Date("2022-03-26"),value:20.1},{date:new Date("2022-04-02"),value:19.2},{date:new Date("2022-04-09"),value:18.1},{date:new Date("2022-04-16"),value:16.9},{date:new Date("2022-04-23"),value:15.8},{date:new Date("2022-04-30"),value:14.9},{date:new Date("2022-05-07"),value:13.8},{date:new Date("2022-05-14"),value:12.9},{date:new Date("2022-05-21"),value:11.8},{date:new Date("2022-05-28"),value:10.9},{date:new Date("2022-06-04"),value:9.8},{date:new Date("2022-06-11"),value:8.9},{date:new Date("2022-06-18"),value:8.1},{date:new Date("2022-06-25"),value:7.5},{date:new Date("2022-07-02"),value:6.9},{date:new Date("2022-07-09"),value:6.7},{date:new Date("2022-07-16"),value:7.1},{date:new Date("2022-07-23"),value:7.9},{date:new Date("2022-07-30"),value:8.8},{date:new Date("2022-08-06"),value:9.9},{date:new Date("2022-08-13"),value:11.2},{date:new Date("2022-08-20"),value:12.4},{date:new Date("2022-08-27"),value:13.6},{date:new Date("2022-09-03"),value:14.8},{date:new Date("2022-09-10"),value:16.1},{date:new Date("2022-09-17"),value:17.3},{date:new Date("2022-09-24"),value:18.5},{date:new Date("2022-10-01"),value:19.8},{date:new Date("2022-10-08"),value:21.1},{date:new Date("2022-10-15"),value:22.3},{date:new Date("2022-10-22"),value:23.5},{date:new Date("2022-10-29"),value:24.6},{date:new Date("2022-11-05"),value:25.7},{date:new Date("2022-11-12"),value:26.5},{date:new Date("2022-11-19"),value:27.4},{date:new Date("2022-11-26"),value:28.2},{date:new Date("2022-12-03"),value:28.9},{date:new Date("2022-12-10"),value:29.5},{date:new Date("2022-12-17"),value:29.1},{date:new Date("2022-12-24"),value:28.2},{date:new Date("2022-12-31"),value:28.7},{date:new Date("2023-01-01"),value:28.5},{date:new Date("2023-01-08"),value:29.2},{date:new Date("2023-01-15"),value:30.1},{date:new Date("2023-01-22"),value:29.8},{date:new Date("2023-01-29"),value:28.9},{date:new Date("2023-02-05"),value:27.8},{date:new Date("2023-02-12"),value:26.9},{date:new Date("2023-02-19"),value:25.7},{date:new Date("2023-02-26"),value:24.8},{date:new Date("2023-03-05"),value:23.9},{date:new Date("2023-03-12"),value:22.8},{date:new Date("2023-03-19"),value:21.7},{date:new Date("2023-03-26"),value:20.8},{date:new Date("2023-04-02"),value:19.6},{date:new Date("2023-04-09"),value:18.4},{date:new Date("2023-04-16"),value:17.2},{date:new Date("2023-04-23"),value:16.1},{date:new Date("2023-04-30"),value:15.3},{date:new Date("2023-05-07"),value:14.2},{date:new Date("2023-05-14"),value:13.1},{date:new Date("2023-05-21"),value:12.3},{date:new Date("2023-05-28"),value:11.4},{date:new Date("2023-06-04"),value:10.2},{date:new Date("2023-06-11"),value:9.1},{date:new Date("2023-06-18"),value:8.3},{date:new Date("2023-06-25"),value:7.8},{date:new Date("2023-07-02"),value:7.1},{date:new Date("2023-07-09"),value:6.9},{date:new Date("2023-07-16"),value:7.2},{date:new Date("2023-07-23"),value:8.1},{date:new Date("2023-07-30"),value:9.3},{date:new Date("2023-08-06"),value:10.4},{date:new Date("2023-08-13"),value:11.6},{date:new Date("2023-08-20"),value:12.8},{date:new Date("2023-08-27"),value:13.9},{date:new Date("2023-09-03"),value:15.2},{date:new Date("2023-09-10"),value:16.4},{date:new Date("2023-09-17"),value:17.6},{date:new Date("2023-09-24"),value:18.9},{date:new Date("2023-10-01"),value:20.1},{date:new Date("2023-10-08"),value:21.3},{date:new Date("2023-10-15"),value:22.5},{date:new Date("2023-10-22"),value:23.7},{date:new Date("2023-10-29"),value:24.8},{date:new Date("2023-11-05"),value:25.9},{date:new Date("2023-11-12"),value:26.7},{date:new Date("2023-11-19"),value:27.8},{date:new Date("2023-11-26"),value:28.6},{date:new Date("2023-12-03"),value:29.4},{date:new Date("2023-12-10"),value:30.2},{date:new Date("2023-12-17"),value:29.8},{date:new Date("2023-12-24"),value:28.9},{date:new Date("2023-12-31"),value:29.3}]},{label:"Mars",data:[{date:new Date("2022-01-01"),value:-62},{date:new Date("2022-01-08"),value:-63},{date:new Date("2022-01-15"),value:-64},{date:new Date("2022-01-22"),value:-62},{date:new Date("2022-01-29"),value:-61},{date:new Date("2022-02-05"),value:-59},{date:new Date("2022-02-12"),value:-56},{date:new Date("2022-02-19"),value:-53},{date:new Date("2022-02-26"),value:-50},{date:new Date("2022-03-05"),value:-47},{date:new Date("2022-03-12"),value:-44},{date:new Date("2022-03-19"),value:-41},{date:new Date("2022-03-26"),value:-37},{date:new Date("2022-04-02"),value:-34},{date:new Date("2022-04-09"),value:-31},{date:new Date("2022-04-16"),value:-27},{date:new Date("2022-04-23"),value:-24},{date:new Date("2022-04-30"),value:-21},{date:new Date("2022-05-07"),value:-17},{date:new Date("2022-05-14"),value:-14},{date:new Date("2022-05-21"),value:-11},{date:new Date("2022-05-28"),value:-7},{date:new Date("2022-06-04"),value:-4},{date:new Date("2022-06-11"),value:-1},{date:new Date("2022-06-18"),value:1},{date:new Date("2022-06-25"),value:3},{date:new Date("2022-07-02"),value:6},{date:new Date("2022-07-09"),value:9},{date:new Date("2022-07-16"),value:11},{date:new Date("2022-07-23"),value:13},{date:new Date("2022-07-30"),value:16},{date:new Date("2022-08-06"),value:18},{date:new Date("2022-08-13"),value:21},{date:new Date("2022-08-20"),value:23},{date:new Date("2022-08-27"),value:21},{date:new Date("2022-09-03"),value:19},{date:new Date("2022-09-10"),value:16},{date:new Date("2022-09-17"),value:13},{date:new Date("2022-09-24"),value:9},{date:new Date("2022-10-01"),value:6},{date:new Date("2022-10-08"),value:3},{date:new Date("2022-10-15"),value:-1},{date:new Date("2022-10-22"),value:-4},{date:new Date("2022-10-29"),value:-7},{date:new Date("2022-11-05"),value:-11},{date:new Date("2022-11-12"),value:-14},{date:new Date("2022-11-19"),value:-17},{date:new Date("2022-11-26"),value:-21},{date:new Date("2022-12-03"),value:-24},{date:new Date("2022-12-10"),value:-27},{date:new Date("2022-12-17"),value:-31},{date:new Date("2022-12-24"),value:-36},{date:new Date("2022-12-31"),value:-37},{date:new Date("2023-01-01"),value:-63},{date:new Date("2023-01-08"),value:-64},{date:new Date("2023-01-15"),value:-65},{date:new Date("2023-01-22"),value:-63},{date:new Date("2023-01-29"),value:-62},{date:new Date("2023-02-05"),value:-60},{date:new Date("2023-02-12"),value:-58},{date:new Date("2023-02-19"),value:-55},{date:new Date("2023-02-26"),value:-52},{date:new Date("2023-03-05"),value:-48},{date:new Date("2023-03-12"),value:-45},{date:new Date("2023-03-19"),value:-42},{date:new Date("2023-03-26"),value:-38},{date:new Date("2023-04-02"),value:-35},{date:new Date("2023-04-09"),value:-32},{date:new Date("2023-04-16"),value:-28},{date:new Date("2023-04-23"),value:-25},{date:new Date("2023-04-30"),value:-22},{date:new Date("2023-05-07"),value:-18},{date:new Date("2023-05-14"),value:-15},{date:new Date("2023-05-21"),value:-12},{date:new Date("2023-05-28"),value:-8},{date:new Date("2023-06-04"),value:-5},{date:new Date("2023-06-11"),value:-2},{date:new Date("2023-06-18"),value:0},{date:new Date("2023-06-25"),value:2},{date:new Date("2023-07-02"),value:5},{date:new Date("2023-07-09"),value:8},{date:new Date("2023-07-16"),value:10},{date:new Date("2023-07-23"),value:12},{date:new Date("2023-07-30"),value:15},{date:new Date("2023-08-06"),value:17},{date:new Date("2023-08-13"),value:20},{date:new Date("2023-08-20"),value:22},{date:new Date("2023-08-27"),value:20},{date:new Date("2023-09-03"),value:18},{date:new Date("2023-09-10"),value:15},{date:new Date("2023-09-17"),value:12},{date:new Date("2023-09-24"),value:8},{date:new Date("2023-10-01"),value:5},{date:new Date("2023-10-08"),value:2},{date:new Date("2023-10-15"),value:-2},{date:new Date("2023-10-22"),value:-5},{date:new Date("2023-10-29"),value:-8},{date:new Date("2023-11-05"),value:-12},{date:new Date("2023-11-12"),value:-15},{date:new Date("2023-11-19"),value:-18},{date:new Date("2023-11-26"),value:-22},{date:new Date("2023-12-03"),value:-25},{date:new Date("2023-12-10"),value:-28},{date:new Date("2023-12-17"),value:-32},{date:new Date("2023-12-24"),value:-35},{date:new Date("2023-12-31"),value:-38}]}];var O=t("../charts/src/components/line-chart/stories/site-traffic-sample.ts"),n=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),x=`import { GlyphStar } from '@visx/glyph';
import React from 'react';
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

export const WithLegendShapeRectangle: StoryObj< typeof LineChart > = Template.bind( {} );
WithLegendShapeRectangle.args = {
	...Default.args,
	showLegend: true,
	legendShape: 'rect',
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

export const WithCustomGlyph: StoryObj< typeof LineChart > = Template.bind( {} );
WithCustomGlyph.args = {
	...Default.args,
	showLegend: true,
	withStartGlyphs: true,
	withLegendGlyph: true,
	renderGlyph: ( { color, size, x, y } ) => {
		return <GlyphStar top={ y } left={ x } size={ size * size } fill={ color } />;
	},
	glyphStyle: {
		radius: 10,
	},
};

const CustomStarGlyph = ( { color, size, x, y } ) => {
	const hasXY = typeof x === 'number' && typeof y === 'number' && ( x !== 0 || y !== 0 );
	const groupProps = hasXY ? { transform: \`translate(\${ x }, \${ y })\` } : {};
	return (
		<g { ...groupProps }>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={ size * 2 }
				height={ size * 2 }
				viewBox="0 0 24 24"
				style={ { overflow: 'visible', pointerEvents: 'none' } }
			>
				<path
					d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
					fill={ color }
					stroke={ color }
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					transform="translate(-12, -12)"
				/>
			</svg>
		</g>
	);
};

export const WithCustomSvgGlyph: StoryObj< typeof LineChart > = Template.bind( {} );
WithCustomSvgGlyph.args = {
	...Default.args,
	showLegend: true,
	withStartGlyphs: true,
	withLegendGlyph: true,
	renderGlyph: ( { color, size, x, y } ) => (
		<CustomStarGlyph color={ color } size={ size } x={ x } y={ y } />
	),
	glyphStyle: {
		radius: 8,
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
`,u={Default:{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},SingleSeries:{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},WithoutTooltip:{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},CustomDimensions:{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},WithLegend:{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},WithLegendShapeRectangle:{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},WithVerticalLegend:{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},FixedDimensions:{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},GridientFilled:{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},ErrorStates:{startLoc:{col:27,line:154},endLoc:{col:1,line:229},startBody:{col:27,line:154},endBody:{col:1,line:229}},WithoutSmoothing:{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},CustomTooltips:{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},WithPointerEvents:{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},CurveTypes:{startLoc:{col:26,line:282},endLoc:{col:1,line:372},startBody:{col:26,line:282},endBody:{col:1,line:372}},SmartFormatting:{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},BrokenLine:{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},WithStartGlyphs:{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},WithCustomGlyph:{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},WithCustomSvgGlyph:{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},DateStringFormats:{startLoc:{col:33,line:511},endLoc:{col:1,line:544},startBody:{col:33,line:511},endBody:{col:1,line:544}}};const _={title:"JS Packages/Charts/Types/Line Chart",component:m.A,parameters:{storySource:{source:`/* wp:polyfill */
/* wp:polyfill esnext.iterator.map */
import { GlyphStar } from '@visx/glyph';
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
export const WithLegendShapeRectangle = Template.bind({});
WithLegendShapeRectangle.args = {
  ...Default.args,
  showLegend: true,
  legendShape: 'rect'
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
export const WithCustomGlyph = Template.bind({});
WithCustomGlyph.args = {
  ...Default.args,
  showLegend: true,
  withStartGlyphs: true,
  withLegendGlyph: true,
  renderGlyph: ({
    color,
    size,
    x,
    y
  }) => {
    return /*#__PURE__*/_jsx(GlyphStar, {
      top: y,
      left: x,
      size: size * size,
      fill: color
    });
  },
  glyphStyle: {
    radius: 10
  }
};
const CustomStarGlyph = ({
  color,
  size,
  x,
  y
}) => {
  const hasXY = typeof x === 'number' && typeof y === 'number' && (x !== 0 || y !== 0);
  const groupProps = hasXY ? {
    transform: \`translate(\${x}, \${y})\`
  } : {};
  return /*#__PURE__*/_jsx("g", {
    ...groupProps,
    children: /*#__PURE__*/_jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: size * 2,
      height: size * 2,
      viewBox: "0 0 24 24",
      style: {
        overflow: 'visible',
        pointerEvents: 'none'
      },
      children: /*#__PURE__*/_jsx("path", {
        d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
        fill: color,
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transform: "translate(-12, -12)"
      })
    })
  });
};
export const WithCustomSvgGlyph = Template.bind({});
WithCustomSvgGlyph.args = {
  ...Default.args,
  showLegend: true,
  withStartGlyphs: true,
  withLegendGlyph: true,
  renderGlyph: ({
    color,
    size,
    x,
    y
  }) => /*#__PURE__*/_jsx(CustomStarGlyph, {
    color: color,
    size: size,
    x: x,
    y: y
  }),
  glyphStyle: {
    radius: 8
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
};`,locationsMap:{default:{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},"single-series":{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},"without-tooltip":{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},"custom-dimensions":{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},"with-legend":{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},"with-legend-shape-rectangle":{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},"with-vertical-legend":{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},"fixed-dimensions":{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},"gridient-filled":{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},"error-states":{startLoc:{col:27,line:154},endLoc:{col:1,line:229},startBody:{col:27,line:154},endBody:{col:1,line:229}},"without-smoothing":{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},"custom-tooltips":{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},"with-pointer-events":{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},"curve-types":{startLoc:{col:26,line:282},endLoc:{col:1,line:372},startBody:{col:26,line:282},endBody:{col:1,line:372}},"smart-formatting":{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},"broken-line":{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},"with-start-glyphs":{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},"with-custom-glyph":{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},"with-custom-svg-glyph":{startLoc:{col:17,line:53},endLoc:{col:2,line:55},startBody:{col:17,line:53},endBody:{col:2,line:55}},"date-string-formats":{startLoc:{col:33,line:511},endLoc:{col:1,line:544},startBody:{col:33,line:511},endBody:{col:1,line:544}}}},layout:"centered"},decorators:[c=>(0,n.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,n.jsx)(c,{})})],argTypes:{maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}}}},r=c=>(0,n.jsx)(m.A,{...c}),y=r.bind({});y.args={data:g,showLegend:!1,legendOrientation:"horizontal",withGradientFill:!1,smoothing:!0,maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}}};const A=r.bind({});A.args={data:[g[0]]};const G=r.bind({});G.args={...y.args,withTooltips:!1};const L=r.bind({});L.args={width:800,height:400,data:g};const z=r.bind({});z.args={...y.args,showLegend:!0,height:400};const S=r.bind({});S.args={...y.args,showLegend:!0,legendShape:"rect"};const V=r.bind({});V.args={...y.args,showLegend:!0,legendOrientation:"vertical"};const N=r.bind({});N.args={width:800,height:400,data:g,withTooltips:!0},N.parameters={docs:{description:{story:"Line chart with fixed dimensions that override the responsive behavior."}}};const Q=r.bind({});Q.args={...y.args,margin:void 0,data:O.A,withGradientFill:!0,options:{axis:{y:{orientation:"right"}}}};const J={render:()=>(0,n.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Empty Data"}),(0,n.jsx)(m.A,{width:300,height:200,data:[]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Invalid Date Values"}),(0,n.jsx)(m.A,{width:300,height:200,data:[{label:"Invalid Dates",data:[{date:new Date("invalid"),value:10},{date:new Date("2024-01-02"),value:20}],options:{}}]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Invalid Values"}),(0,n.jsx)(m.A,{width:300,height:200,data:[{label:"Invalid Values",data:[{date:new Date("2024-01-01"),value:NaN},{date:new Date("2024-01-02"),value:null}],options:{}}]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Single Data Point"}),(0,n.jsx)(m.A,{width:300,height:200,data:[{label:"Single Point",data:[{date:new Date("2024-01-01"),value:100}],options:{}}]})]})]}),parameters:{docs:{description:{story:"Examples of how the line chart handles various error states and edge cases."}}}},q=r.bind({});q.args={...y.args,smoothing:!1};const ee=r.bind({});ee.args={...y.args,renderTooltip:({tooltipData:c})=>{const F=c?.nearestDatum?.datum;if(!F)return null;const B=Object.entries(c?.datumByKey||{}).map(([T,{datum:X}])=>({key:T,value:X.value})).sort((T,X)=>X.value-T.value);return(0,n.jsxs)("div",{children:[(0,n.jsxs)("h3",{children:[F?.date?.toLocaleDateString()," \u{1F4AF} "]}),(0,n.jsx)("table",{style:{border:"1px solid black",borderCollapse:"collapse"},children:B.map(T=>(0,n.jsxs)("tr",{style:{border:"1px solid black"},children:[(0,n.jsx)("td",{style:{border:"1px solid black"},children:T.key}),(0,n.jsx)("td",{children:T.value})]},T.key))})]})}};const U=r.bind({});U.args={...y.args,onPointerDown:({datum:c})=>alert("Pointer down:"+JSON.stringify(c))};const $={render:()=>{const c=[{label:"Sample Series",data:[{date:new Date("2024-01-01"),value:10},{date:new Date("2024-01-02"),value:90},{date:new Date("2024-01-03"),value:85},{date:new Date("2024-01-04"),value:82},{date:new Date("2024-01-05"),value:5},{date:new Date("2024-01-06"),value:8},{date:new Date("2024-01-07"),value:10}],options:{}}];return(0,n.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Linear Curve"}),(0,n.jsx)(m.A,{width:300,height:200,data:c,curveType:"linear",showLegend:!1,withGradientFill:!1})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Smooth Curve (Catmull-Rom)"}),(0,n.jsx)(m.A,{width:300,height:200,data:c,curveType:"smooth",showLegend:!1,withGradientFill:!1})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Monotone X Curve"}),(0,n.jsx)(m.A,{width:300,height:200,data:c,curveType:"monotone",showLegend:!1,withGradientFill:!1})]})]})},parameters:{docs:{description:{story:"Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points."}}}},K=r.bind({});K.args={data:b.A,showLegend:!0,legendOrientation:"horizontal",withGradientFill:!1,smoothing:!0,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}}},K.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const p=r.bind({});p.args={...y.args,margin:{bottom:40},showLegend:!0,data:[{...O.A[0],label:"Vistors to compare",options:{...O.A[0].options,seriesLineStyle:{strokeDasharray:"5 5 1"},legendShapeStyle:{strokeDasharray:"5 5 1"}}},O.A[1]]},p.parameters={docs:{description:{story:"Demonstrates the option of setting a seriesLineStyle to a dash array."}}};const o=r.bind({});o.args={...y.args,withStartGlyphs:!0};const P=r.bind({});P.args={...y.args,showLegend:!0,withStartGlyphs:!0,withLegendGlyph:!0,renderGlyph:({color:c,size:F,x:B,y:T})=>(0,n.jsx)(a,{top:T,left:B,size:F*F,fill:c}),glyphStyle:{radius:10}};const I=({color:c,size:F,x:B,y:T})=>{const k=typeof B=="number"&&typeof T=="number"&&(B!==0||T!==0)?{transform:`translate(${B}, ${T})`}:{};return(0,n.jsx)("g",{...k,children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:F*2,height:F*2,viewBox:"0 0 24 24",style:{overflow:"visible",pointerEvents:"none"},children:(0,n.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",fill:c,stroke:c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(-12, -12)"})})})},W=r.bind({});W.args={...y.args,showLegend:!0,withStartGlyphs:!0,withLegendGlyph:!0,renderGlyph:({color:c,size:F,x:B,y:T})=>(0,n.jsx)(I,{color:c,size:F,x:B,y:T}),glyphStyle:{radius:8}};const M={render:()=>(0,n.jsx)(m.A,{data:[{label:"String Dates",data:[{dateString:"2024-01-01",value:10},{dateString:"2024-01-02",value:20},{dateString:"2024-01-03 00:00:00",value:15},{dateString:"2024-01-04",value:25},{dateString:"2024-01-05 00:00",value:30}],options:{}}],withGradientFill:!1}),parameters:{docs:{description:{story:`Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:
- Simple date strings (YYYY-MM-DD)
- Date with time (YYYY-MM-DD 00:00:00)
- Date with time (YYYY-MM-DD 00:00)
- ISO format (YYYY-MM-DDT00:00:00)
- UTC format (YYYY-MM-DDT00:00:00Z)
- Timezone offset (YYYY-MM-DDT00:00:00\xB1HH:mm)
`}}}},H=["Default","SingleSeries","WithoutTooltip","CustomDimensions","WithLegend","WithLegendShapeRectangle","WithVerticalLegend","FixedDimensions","GridientFilled","ErrorStates","WithoutSmoothing","CustomTooltips","WithPointerEvents","CurveTypes","SmartFormatting","BrokenLine","WithStartGlyphs","WithCustomGlyph","WithCustomSvgGlyph","DateStringFormats"];y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...y.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...A.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...G.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...L.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...z.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...S.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...V.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...N.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...Q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...q.parameters?.docs?.source}}},ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...ee.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...U.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...K.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...p.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...o.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...P.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...W.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}}},"../charts/src/components/legend/base-legend.tsx":(te,R,t)=>{t.d(R,{$:()=>u});var f=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),h=t("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),e=t("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendItem.js"),Y=t("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendShape.js"),E=t("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendLabel.js"),w=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),C=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=t("../charts/src/providers/theme/theme-provider.tsx"),i=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=t.n(i),s=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss"),a={};a.insert="head",a.singleton=!1;var m=D()(s.A,a);const b=s.A.locals||{};function j(v){return v&&typeof v=="object"&&"value"in v&&typeof v.value<"u"?v.value:v}function g(v){return String(j(v))}function O({scale:v,labelFormat:_}){return(r,y)=>({datum:r,index:y,text:`${_(r,y)}`,value:v(r)})}var n=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const x={horizontal:"row",vertical:"column"},u=(0,l.forwardRef)(({items:v,className:_,orientation:r="horizontal",shape:y="rect",fill:A=g,size:G=g,labelFormat:L=j,labelTransform:z=O,shapeWidth:S=16,shapeHeight:V=16,shapeMargin:N="2px 4px 2px 0",labelAlign:Q="left",labelFlex:J="1",labelMargin:q="0 4px",itemMargin:ee="0",itemDirection:U="row",legendLabelProps:$,...K},p)=>{const o=(0,d.RW)(),P=(0,w.A)({domain:v.map(M=>M.label),range:v.map(M=>M.color)}),I=P.domain(),W=(0,l.useCallback)(({index:M})=>v[M]?.shapeStyle??o.legendShapeStyles?.[M]??{},[v,o]);return(0,n.jsx)(h.A,{scale:P,labelFormat:L,labelTransform:z,children:M=>(0,n.jsx)("div",{ref:p,role:"list","data-testid":`legend-${r}`,className:(0,C.A)(b.legend,b[`legend--${r}`],_),style:{flexDirection:x[r],...o.legendContainerStyles},children:M.map((H,c)=>(0,n.jsxs)(e.A,{className:b["legend-item"],"data-testid":"legend-item",margin:ee,flexDirection:U,...K,children:[v[c]?.renderGlyph?(0,n.jsx)("svg",{width:v[c]?.glyphSize*2,height:v[c]?.glyphSize*2,"data-testid":"legend-glyph",children:(0,n.jsx)(f.A,{children:v[c]?.renderGlyph({key:`legend-glyph-${H.text}`,datum:{},index:c,color:A(H),size:v[c]?.glyphSize,x:v[c]?.glyphSize,y:v[c]?.glyphSize})})}):(0,n.jsx)(Y.A,{shape:y,height:V,width:S,margin:N,item:I[c],itemIndex:c,label:H,fill:A,size:G,shapeStyle:W}),(0,n.jsxs)(E.A,{style:{justifyContent:Q,flex:J,margin:q,...o.legendLabelStyles},...$,children:[H.text,v.find(F=>F.label===H.text)?.value&&(0,n.jsx)("span",{className:b["legend-item-value"],children:v.find(F=>F.label===H.text)?.value})]})]},`legend-${H.text}-${c}`))})})});try{u.displayName="BaseLegend",u.__docgenInfo={description:"",displayName:"BaseLegend",props:{className:{defaultValue:null,description:"Classname to be applied to legend container.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Legend item size accessor function.",name:"size",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string | number"}},children:{defaultValue:null,description:"Optional render function override.",name:"children",required:!1,type:{name:"(labels: { datum: any; index: number; text: string; value?: any; }[]) => React.ReactNode"}},style:{defaultValue:null,description:"Styles to be applied to the legend container.",name:"style",required:!1,type:{name:"React.CSSProperties"}},fill:{defaultValue:null,description:"Legend item fill accessor function.",name:"fill",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string"}},domain:{defaultValue:null,description:"Legend domain.",name:"domain",required:!1,type:{name:"any[]"}},shapeWidth:{defaultValue:{value:"16"},description:"Width of the legend shape.",name:"shapeWidth",required:!1,type:{name:"string | number"}},shapeHeight:{defaultValue:{value:"16"},description:"Height of the legend shape.",name:"shapeHeight",required:!1,type:{name:"string | number"}},shapeMargin:{defaultValue:{value:"2px 4px 2px 0"},description:"Margin of the legend shape.",name:"shapeMargin",required:!1,type:{name:"string | number"}},labelAlign:{defaultValue:{value:"left"},description:"Flex-box alignment of legend item labels.",name:"labelAlign",required:!1,type:{name:"string"}},labelFlex:{defaultValue:{value:"1"},description:"Flex-box flex of legend item labels.",name:"labelFlex",required:!1,type:{name:"string | number"}},labelMargin:{defaultValue:{value:"0 4px"},description:"Margin of legend item labels.",name:"labelMargin",required:!1,type:{name:"string | number"}},itemMargin:{defaultValue:{value:"0"},description:"Margin of legend items.",name:"itemMargin",required:!1,type:{name:"string | number"}},itemDirection:{defaultValue:{value:"row"},description:"Flex direction of legend items.",name:"itemDirection",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"column"'},{value:'"column-reverse"'},{value:'"row"'},{value:'"row-reverse"'}]}},shape:{defaultValue:{value:"rect"},description:"Legend shape string preset or Element or Component.",name:"shape",required:!1,type:{name:"LegendShape<any, any>"}},labelFormat:{defaultValue:null,description:"Given a legend item and its index, returns an item label.",name:"labelFormat",required:!1,type:{name:"LabelFormatter<any>"}},labelTransform:{defaultValue:null,description:"Given the legend scale and labelFormatter, returns a label with datum, index, value, and label.",name:"labelTransform",required:!1,type:{name:"LabelFormatterFactory<ScaleOrdinal<any, any, never>>"}},legendLabelProps:{defaultValue:null,description:"Additional props to be set on LegendLabel.",name:"legendLabelProps",required:!1,type:{name:"Partial<LegendLabelProps>"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItemWithGlyph[] | LegendItemWithoutGlyph[]"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:u.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../charts/src/components/line-chart/line-chart.tsx":(te,R,t)=>{t.d(R,{A:()=>p});var f=t("../number-formatters/src/index.ts"),h=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/catmullRom.js"),e=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/linear.js"),Y=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/monotone.js"),E=t("../../../node_modules/.pnpm/@visx+gradient@3.12.0_react@18.3.1/node_modules/@visx/gradient/esm/gradients/LinearGradient.js"),w=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/context/DataContext.js"),C=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),l=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),d=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),i=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/AreaSeries.js"),D=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),s=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=t("../charts/src/providers/theme/theme-provider.tsx"),b=t("../charts/src/components/legend/base-legend.tsx"),j=t("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js"),g=t("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js"),O=t("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse.js");const n=o=>/T.*[Z]$|T.*[+-]\d{2}:?\d{2}$/.test(o),x=o=>{const P=o.trim();if(n(P)){const W=(0,j.H)(P);return(0,g.f)(W)?W:new Date(NaN)}const I=["yyyy-MM-dd","yyyy-MM-dd HH:mm:ss","yyyy-MM-dd HH:mm","yyyy-MM-dd'T'HH:mm:ss","yyyy-MM-dd'T'HH:mm:ss.SSS","yyyy-MM-dd'T'HH:mm"];for(const W of I){const M=(0,O.qg)(P,W,new Date);if((0,g.f)(M))return M}return new Date(NaN)};var u=t("../charts/src/components/shared/use-chart-margin.tsx"),v=t("../charts/src/components/shared/use-element-height.ts"),_=t("../charts/src/components/shared/with-responsive.tsx"),r=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=t.n(r),A=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss"),G={};G.insert="head",G.singleton=!1;var L=y()(A.A,G);const z=A.A.locals||{};var S=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const V=100,N=o=>{const{theme:P}=(0,a.useContext)(w.A)||{};return(0,S.jsx)("circle",{cx:o.x,cy:o.y,r:o.size,fill:o.color,stroke:P?.backgroundColor,strokeWidth:1.5,paintOrder:"fill","data-testid":`start-glyph-${o.index}`,...o.glyphStyle})},Q=o=>(0,a.createElement)(N,{...o,key:o.key}),J=({data:o,index:P,color:I,glyphStyle:W,renderGlyph:M,accessors:H})=>{const{xScale:c,yScale:F}=(0,a.useContext)(w.A)||{};if(!c||!F||o.data.length===0)return null;const B=o.data[0],T=c(H.xAccessor(B)),X=F(H.yAccessor(B));if(typeof T!="number"||typeof X!="number")return null;const k=Number(W?.radius)||4;return M({key:`start-glyph-${o.label}`,index:P,datum:B,color:I,size:k,x:T,y:X,glyphStyle:W})},q=(o,P)=>{if(!o)return P?h.A:e.A;switch(o){case"smooth":return h.A;case"monotone":return Y.G;case"linear":return e.A;default:return e.A}},ee=o=>{const{tooltipData:P}=o,I=P?.nearestDatum?.datum;if(!I)return null;const W=Object.entries(P?.datumByKey||{}).map(([M,{datum:H}])=>({key:M,value:H.value})).sort((M,H)=>H.value-M.value);return(0,S.jsxs)("div",{className:z["line-chart__tooltip"],children:[(0,S.jsx)("div",{className:z["line-chart__tooltip-date"],children:I.date?.toLocaleDateString()}),W.map(M=>(0,S.jsxs)("div",{className:z["line-chart__tooltip-row"],children:[(0,S.jsxs)("span",{className:z["line-chart__tooltip-label"],children:[M.key,":"]}),(0,S.jsx)("span",{className:z["line-chart__tooltip-value"],children:M.value})]},M.key))]})},U=o=>new Date(o).toLocaleDateString(void 0,{month:"short",day:"numeric"}),$=o=>o?.length?o.some(I=>I.data.some(W=>isNaN(W.value)||W.value===null||W.value===void 0||isNaN(W.date.getTime())))?"Invalid data":null:"No data available",K=({data:o,width:P,height:I,className:W,margin:M,withTooltips:H=!0,showLegend:c=!1,legendOrientation:F="horizontal",renderGlyph:B=Q,glyphStyle:T={},legendShape:X="line",withLegendGlyph:k=!1,withGradientFill:se=!1,smoothing:ae=!0,curveType:le,renderTooltip:ie=ee,withStartGlyphs:ce=!1,options:oe={},onPointerDown:ye=void 0,onPointerUp:De=void 0,onPointerMove:fe=void 0,onPointerOut:we=void 0})=>{const me=(0,m.RW)(),de=(0,m.Ox)(o),pe=(0,a.useId)(),[_e,xe]=(0,v.v)(),re=(0,a.useMemo)(()=>o.map(Z=>({...Z,data:Z.data.map(ne=>({...ne,date:ne.date?ne.date:x(ne.dateString)})).sort((ne,he)=>ne.date.getTime()-he.date.getTime())})),[o]),ue=(0,a.useMemo)(()=>({axis:{x:{orientation:"bottom",numTicks:Math.min(re[0]?.data.length,Math.ceil(P/V)),tickFormat:U,...oe?.axis?.x},y:{orientation:"left",numTicks:4,tickFormat:f.qe,...oe?.axis?.y}},xScale:{type:"time",...oe?.xScale},yScale:{type:"linear",nice:!0,zero:!1,...oe?.yScale}}),[oe,re,P]),Se=(0,u.a)(I,ue,re,de),ve=$(re);if(ve)return(0,S.jsx)("div",{className:(0,s.A)("line-chart",z["line-chart"]),children:ve});const be=re.map((Z,ne)=>({label:Z.label,value:"",color:Z?.options?.stroke??me.colors[ne%me.colors.length],shapeStyle:Z?.options?.legendShapeStyle,renderGlyph:k?B:void 0,glyphSize:Number(T?.radius)})),ge={xAccessor:Z=>Z?.date,yAccessor:Z=>Z?.value};return(0,S.jsxs)("div",{className:(0,s.A)("line-chart",z["line-chart"],W),"data-testid":"line-chart",role:"img","aria-label":"line chart",style:{width:P,height:I},children:[(0,S.jsxs)(C.A,{theme:de,width:P,height:I-xe,margin:{...Se,...M},xScale:ue.xScale,yScale:ue.yScale,onPointerDown:ye,onPointerUp:De,onPointerMove:fe,onPointerOut:we,pointerEventsDataKey:"nearest",children:[(0,S.jsx)(l.A,{columns:!1,numTicks:4}),(0,S.jsx)(d.A,{...ue.axis.x}),(0,S.jsx)(d.A,{...ue.axis.y}),re.map((Z,ne)=>{const he=Z.options?.stroke??de.colors[ne%de.colors.length],Le=Z.options?.seriesLineStyle??me?.seriesLineStyles?.[ne%me.seriesLineStyles.length]??{};return(0,S.jsxs)("g",{children:[ce&&(0,S.jsx)(J,{index:ne,data:Z,color:he,renderGlyph:B,accessors:ge,glyphStyle:T}),se&&(0,S.jsx)(E.A,{id:`area-gradient-${pe}-${ne+1}`,from:he,fromOpacity:.4,toOpacity:.1,to:de.backgroundColor,...Z.options?.gradient,"data-testid":"line-gradient"}),(0,S.jsx)(i.A,{dataKey:Z?.label,data:Z.data,...ge,fill:se?`url(#area-gradient-${pe}-${ne+1})`:"transparent",renderLine:!0,curve:q(le,ae),lineProps:Le},Z?.label)]},Z?.label||ne)}),H&&(0,S.jsx)(D.A,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,showSeriesGlyphs:!0,renderTooltip:ie,renderGlyph:B,glyphStyle:T})]}),c&&(0,S.jsx)(b.$,{items:be,orientation:F,className:z["line-chart-legend"],shape:X,ref:_e})]})},p=(0,_.F)(K);try{linechart.displayName="linechart",linechart.__docgenInfo={description:"",displayName:"linechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:{value:"undefined"},description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:{value:"undefined"},description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"true"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"line"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"x"'},{value:'"y"'},{value:'"xy"'},{value:'"none"'}]}},renderTooltip:{defaultValue:{value:`( params: RenderTooltipParams< DataPointDate > ) => {
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
}`},description:"",name:"renderGlyph",required:!1,type:{name:"<Datum extends object>(props: GlyphProps<Datum>) => ReactNode"}},glyphStyle:{defaultValue:{value:"{}"},description:"",name:"glyphStyle",required:!1,type:{name:"SVGProps<SVGCircleElement>"}},withLegendGlyph:{defaultValue:{value:"false"},description:"",name:"withLegendGlyph",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/line-chart.tsx#linechart"]={docgenInfo:linechart.__docgenInfo,name:"linechart",path:"../charts/src/components/line-chart/line-chart.tsx#linechart"})}catch{}},"../charts/src/components/line-chart/stories/large-values-sample.ts":(te,R,t)=>{t.d(R,{A:()=>h});const h=[{label:"Revenue (Billions)",data:[{date:new Date("2024-01-01"),value:12e8},{date:new Date("2024-02-01"),value:145e7},{date:new Date("2024-03-01"),value:168e7},{date:new Date("2024-04-01"),value:21e8},{date:new Date("2024-05-01"),value:235e7},{date:new Date("2024-06-01"),value:28e8}],options:{stroke:"#3858E9"}},{label:"Users (Millions)",data:[{date:new Date("2024-01-01"),value:45e6},{date:new Date("2024-02-01"),value:52e6},{date:new Date("2024-03-01"),value:48e6},{date:new Date("2024-04-01"),value:61e6},{date:new Date("2024-05-01"),value:75e6},{date:new Date("2024-06-01"),value:89e6}],options:{stroke:"#00BA37"}}]},"../charts/src/components/line-chart/stories/site-traffic-sample.ts":(te,R,t)=>{t.d(R,{A:()=>f});const f=[{label:"Views",options:{stroke:"#069e08"},data:[{date:new Date("2024-01-01"),value:2558},{date:new Date("2024-01-02"),value:3399},{date:new Date("2024-01-03"),value:2260},{date:new Date("2024-01-04"),value:2331},{date:new Date("2024-01-05"),value:3302},{date:new Date("2024-01-06"),value:1852},{date:new Date("2024-01-07"),value:2607},{date:new Date("2024-01-08"),value:2804},{date:new Date("2024-01-09"),value:3260},{date:new Date("2024-01-10"),value:2941},{date:new Date("2024-01-11"),value:2857},{date:new Date("2024-01-12"),value:3461},{date:new Date("2024-01-13"),value:1548},{date:new Date("2024-01-14"),value:2739},{date:new Date("2024-01-15"),value:3288},{date:new Date("2024-01-16"),value:2869},{date:new Date("2024-01-17"),value:2590},{date:new Date("2024-01-18"),value:2609},{date:new Date("2024-01-19"),value:2648},{date:new Date("2024-01-20"),value:1805},{date:new Date("2024-01-21"),value:2531},{date:new Date("2024-01-22"),value:3605},{date:new Date("2024-01-23"),value:2366},{date:new Date("2024-01-24"),value:2782},{date:new Date("2024-01-25"),value:2885},{date:new Date("2024-01-26"),value:2918},{date:new Date("2024-01-27"),value:2518},{date:new Date("2024-01-28"),value:2378},{date:new Date("2024-01-29"),value:2714},{date:new Date("2024-01-30"),value:3279}]},{label:"Visitors",options:{stroke:"rgb(230, 139, 40)"},data:[{date:new Date("2024-01-01"),value:2412},{date:new Date("2024-01-02"),value:1899},{date:new Date("2024-01-03"),value:2061},{date:new Date("2024-01-04"),value:1939},{date:new Date("2024-01-05"),value:1986},{date:new Date("2024-01-06"),value:1560},{date:new Date("2024-01-07"),value:1741},{date:new Date("2024-01-08"),value:2120},{date:new Date("2024-01-09"),value:1889},{date:new Date("2024-01-10"),value:1666},{date:new Date("2024-01-11"),value:2396},{date:new Date("2024-01-12"),value:2276},{date:new Date("2024-01-13"),value:1218},{date:new Date("2024-01-14"),value:1228},{date:new Date("2024-01-15"),value:1600},{date:new Date("2024-01-16"),value:1814},{date:new Date("2024-01-17"),value:1701},{date:new Date("2024-01-18"),value:1507},{date:new Date("2024-01-19"),value:1833},{date:new Date("2024-01-20"),value:1407},{date:new Date("2024-01-21"),value:965},{date:new Date("2024-01-22"),value:2288},{date:new Date("2024-01-23"),value:2135},{date:new Date("2024-01-24"),value:1824},{date:new Date("2024-01-25"),value:2219},{date:new Date("2024-01-26"),value:1918},{date:new Date("2024-01-27"),value:1101},{date:new Date("2024-01-28"),value:1695},{date:new Date("2024-01-29"),value:1615},{date:new Date("2024-01-30"),value:2056}]}]},"../charts/src/components/shared/use-chart-margin.tsx":(te,R,t)=>{t.d(R,{a:()=>w});var f=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),h=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),Y=t("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const E=(C,l,d)=>{const i=C.map(s=>l(s,0,[])),D=i.reduce((s,a)=>s.length>=a.length?s:a,i[0]);return(0,Y.A)(D,d)},w=(C,l,d,i,D=!1)=>{const s=(0,e.useMemo)(()=>{const a=d.flatMap(g=>g.data);if(D)return a.map(g=>g.label||l.axis?.y?.tickFormat(g.date.getTime(),0,[]));const m=Math.min(...a.map(g=>g.value)),b=Math.max(...a.map(g=>g.value)),j=(0,f.A)({...l.yScale,domain:[m,b],range:[C,0]});return(0,h.A)(j,l.axis?.y?.numTicks)},[l,d,C,D]);return(0,e.useMemo)(()=>{const a={top:10,right:20,bottom:20,left:20},m=40,b=l.axis?.y?.orientation,j=b==="right"?i.axisStyles.y.right:i.axisStyles.y.left,O=(E(s,l.axis?.y?.tickFormat,j.axisLabel)??m)+(j?.tickLength??0);return b==="right"?a.right=O:a.left=O,l.axis?.x?.orientation==="top"&&(a.top=20,a.bottom=10),a},[l,i,s])}},"../charts/src/components/shared/use-element-height.ts":(te,R,t)=>{t.d(R,{v:()=>h});var f=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function h({initialHeight:e=0}={}){const Y=(0,f.useRef)(null),[E,w]=(0,f.useState)(e);return(0,f.useLayoutEffect)(()=>{if(!Y.current)return;const C=()=>{w(Y.current?.getBoundingClientRect().height||0)};C();const l=new window.ResizeObserver(C);return l.observe(Y.current),()=>{l.disconnect()}},[]),[Y,E]}},"../charts/src/components/shared/with-responsive.tsx":(te,R,t)=>{t.d(R,{F:()=>E});var f=t("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),h=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const e={width:600,height:400},Y=({resizeDebounceTime:w=300,maxWidth:C=1200,aspectRatio:l=.5})=>{const{parentRef:d,width:i}=(0,f.A)({debounceTime:w,enableDebounceLeadingCall:!0,initialSize:e}),D=i?Math.min(i,C):e.width,s=D*l;return{parentRef:d,width:D,height:s}};function E(w){return function({resizeDebounceTime:l=300,maxWidth:d=1200,aspectRatio:i=.5,...D}){const{parentRef:s,width:a,height:m}=Y({resizeDebounceTime:l,maxWidth:d,aspectRatio:i});return(0,h.jsx)("div",{ref:s,style:{width:"100%"},children:(0,h.jsx)(w,{width:a,height:m,size:a,...D})})}}try{E.displayName="withResponsive",E.__docgenInfo={description:`A higher-order component that provides responsive dimensions
to the wrapped chart component using useParentSize from`,displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/with-responsive.tsx#withResponsive"]={docgenInfo:E.__docgenInfo,name:"withResponsive",path:"../charts/src/components/shared/with-responsive.tsx#withResponsive"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(te,R,t)=>{t.d(R,{NP:()=>l,Ox:()=>C,RW:()=>w});var f=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),h=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=t("../charts/src/providers/theme/themes.ts"),Y=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const E=(0,h.createContext)(e.zQ),w=()=>(0,h.useContext)(E),C=d=>{const i=w();return(0,h.useMemo)(()=>{const D=(d??[]).map(s=>s.options?.stroke).filter(s=>!!s);return(0,f.A)({...i,colors:[...D,...i.colors??[]]})},[i,d])},l=({theme:d={},children:i})=>{const D={...e.zQ,...d};return(0,Y.jsx)(E.Provider,{value:D,children:i})};try{l.displayName="ThemeProvider",l.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:l.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{w.displayName="useChartTheme",w.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:w.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}try{C.displayName="useXYChartTheme",C.__docgenInfo={description:"",displayName:"useXYChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"]={docgenInfo:C.__docgenInfo,name:"useXYChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(te,R,t)=>{t.d(R,{QI:()=>h,pk:()=>e,zQ:()=>f});const f={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"}},h={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"}},e={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss":(te,R,t)=>{t.d(R,{A:()=>w});var f=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),h=t.n(f),e=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),Y=t.n(e),E=Y()(h());E.push([te.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;font-size:.875rem}.AyocUvYOPM3rztxeHhaJ{display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),E.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const w=E},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/line-chart/line-chart.module.scss":(te,R,t)=>{t.d(R,{A:()=>w});var f=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),h=t.n(f),e=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),Y=t.n(e),E=Y()(h());E.push([te.id,".SVlAnnWw2ot8McusfLcw{position:relative}.SVlAnnWw2ot8McusfLcw svg{overflow:visible}.WG8wpgeFR6IoBhr41Y3z{background:#fff;padding:.5rem}.t5p9YWtrovlLQm8WlrGF{font-weight:700;padding-bottom:10px}.FPtDJMJR2GRu0df3iYy6{display:flex;align-items:center;padding:4px 0;justify-content:space-between}.xTJS98Xw7HFAGWFwzsgd{font-weight:500;padding-right:1rem}.visx-tooltip-glyph svg{width:10px;height:10px}",""]),E.locals={"line-chart":"SVlAnnWw2ot8McusfLcw","line-chart__tooltip":"WG8wpgeFR6IoBhr41Y3z","line-chart__tooltip-date":"t5p9YWtrovlLQm8WlrGF","line-chart__tooltip-row":"FPtDJMJR2GRu0df3iYy6","line-chart__tooltip-label":"xTJS98Xw7HFAGWFwzsgd"};const w=E},"../../../node_modules/.pnpm/d3-path@1.0.9/node_modules/d3-path/src/path.js":(te,R,t)=>{t.d(R,{A:()=>C});var f=Math.PI,h=2*f,e=1e-6,Y=h-e;function E(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function w(){return new E}E.prototype=w.prototype={constructor:E,moveTo:function(l,d){this._+="M"+(this._x0=this._x1=+l)+","+(this._y0=this._y1=+d)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(l,d){this._+="L"+(this._x1=+l)+","+(this._y1=+d)},quadraticCurveTo:function(l,d,i,D){this._+="Q"+ +l+","+ +d+","+(this._x1=+i)+","+(this._y1=+D)},bezierCurveTo:function(l,d,i,D,s,a){this._+="C"+ +l+","+ +d+","+ +i+","+ +D+","+(this._x1=+s)+","+(this._y1=+a)},arcTo:function(l,d,i,D,s){l=+l,d=+d,i=+i,D=+D,s=+s;var a=this._x1,m=this._y1,b=i-l,j=D-d,g=a-l,O=m-d,n=g*g+O*O;if(s<0)throw new Error("negative radius: "+s);if(this._x1===null)this._+="M"+(this._x1=l)+","+(this._y1=d);else if(n>e)if(!(Math.abs(O*b-j*g)>e)||!s)this._+="L"+(this._x1=l)+","+(this._y1=d);else{var x=i-a,u=D-m,v=b*b+j*j,_=x*x+u*u,r=Math.sqrt(v),y=Math.sqrt(n),A=s*Math.tan((f-Math.acos((v+n-_)/(2*r*y)))/2),G=A/y,L=A/r;Math.abs(G-1)>e&&(this._+="L"+(l+G*g)+","+(d+G*O)),this._+="A"+s+","+s+",0,0,"+ +(O*x>g*u)+","+(this._x1=l+L*b)+","+(this._y1=d+L*j)}},arc:function(l,d,i,D,s,a){l=+l,d=+d,i=+i,a=!!a;var m=i*Math.cos(D),b=i*Math.sin(D),j=l+m,g=d+b,O=1^a,n=a?D-s:s-D;if(i<0)throw new Error("negative radius: "+i);this._x1===null?this._+="M"+j+","+g:(Math.abs(this._x1-j)>e||Math.abs(this._y1-g)>e)&&(this._+="L"+j+","+g),i&&(n<0&&(n=n%h+h),n>Y?this._+="A"+i+","+i+",0,1,"+O+","+(l-m)+","+(d-b)+"A"+i+","+i+",0,1,"+O+","+(this._x1=j)+","+(this._y1=g):n>e&&(this._+="A"+i+","+i+",0,"+ +(n>=f)+","+O+","+(this._x1=l+i*Math.cos(s))+","+(this._y1=d+i*Math.sin(s))))},rect:function(l,d,i,D){this._+="M"+(this._x0=this._x1=+l)+","+(this._y0=this._y1=+d)+"h"+ +i+"v"+ +D+"h"+-i+"Z"},toString:function(){return this._}};const C=w},"../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js":(te,R,t)=>{t.d(R,{A:()=>D});var f=t("../../../node_modules/.pnpm/d3-path@1.0.9/node_modules/d3-path/src/path.js"),h=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/constant.js"),e=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/math.js");function Y(s){return s.innerRadius}function E(s){return s.outerRadius}function w(s){return s.startAngle}function C(s){return s.endAngle}function l(s){return s&&s.padAngle}function d(s,a,m,b,j,g,O,n){var x=m-s,u=b-a,v=O-j,_=n-g,r=_*x-v*u;if(!(r*r<e.Ni))return r=(v*(a-g)-_*(s-j))/r,[s+r*x,a+r*u]}function i(s,a,m,b,j,g,O){var n=s-m,x=a-b,u=(O?g:-g)/(0,e.RZ)(n*n+x*x),v=u*x,_=-u*n,r=s+v,y=a+_,A=m+v,G=b+_,L=(r+A)/2,z=(y+G)/2,S=A-r,V=G-y,N=S*S+V*V,Q=j-g,J=r*G-A*y,q=(V<0?-1:1)*(0,e.RZ)((0,e.T9)(0,Q*Q*N-J*J)),ee=(J*V-S*q)/N,U=(-J*S-V*q)/N,$=(J*V+S*q)/N,K=(-J*S+V*q)/N,p=ee-L,o=U-z,P=$-L,I=K-z;return p*p+o*o>P*P+I*I&&(ee=$,U=K),{cx:ee,cy:U,x01:-v,y01:-_,x11:ee*(j/Q-1),y11:U*(j/Q-1)}}function D(){var s=Y,a=E,m=(0,h.A)(0),b=null,j=w,g=C,O=l,n=null;function x(){var u,v,_=+s.apply(this,arguments),r=+a.apply(this,arguments),y=j.apply(this,arguments)-e.TW,A=g.apply(this,arguments)-e.TW,G=(0,e.tn)(A-y),L=A>y;if(n||(n=u=(0,f.A)()),r<_&&(v=r,r=_,_=v),!(r>e.Ni))n.moveTo(0,0);else if(G>e.FA-e.Ni)n.moveTo(r*(0,e.gn)(y),r*(0,e.F8)(y)),n.arc(0,0,r,y,A,!L),_>e.Ni&&(n.moveTo(_*(0,e.gn)(A),_*(0,e.F8)(A)),n.arc(0,0,_,A,y,L));else{var z=y,S=A,V=y,N=A,Q=G,J=G,q=O.apply(this,arguments)/2,ee=q>e.Ni&&(b?+b.apply(this,arguments):(0,e.RZ)(_*_+r*r)),U=(0,e.jk)((0,e.tn)(r-_)/2,+m.apply(this,arguments)),$=U,K=U,p,o;if(ee>e.Ni){var P=(0,e.qR)(ee/_*(0,e.F8)(q)),I=(0,e.qR)(ee/r*(0,e.F8)(q));(Q-=P*2)>e.Ni?(P*=L?1:-1,V+=P,N-=P):(Q=0,V=N=(y+A)/2),(J-=I*2)>e.Ni?(I*=L?1:-1,z+=I,S-=I):(J=0,z=S=(y+A)/2)}var W=r*(0,e.gn)(z),M=r*(0,e.F8)(z),H=_*(0,e.gn)(N),c=_*(0,e.F8)(N);if(U>e.Ni){var F=r*(0,e.gn)(S),B=r*(0,e.F8)(S),T=_*(0,e.gn)(V),X=_*(0,e.F8)(V),k;if(G<e.pi&&(k=d(W,M,T,X,F,B,H,c))){var se=W-k[0],ae=M-k[1],le=F-k[0],ie=B-k[1],ce=1/(0,e.F8)((0,e.HQ)((se*le+ae*ie)/((0,e.RZ)(se*se+ae*ae)*(0,e.RZ)(le*le+ie*ie)))/2),oe=(0,e.RZ)(k[0]*k[0]+k[1]*k[1]);$=(0,e.jk)(U,(_-oe)/(ce-1)),K=(0,e.jk)(U,(r-oe)/(ce+1))}}J>e.Ni?K>e.Ni?(p=i(T,X,W,M,r,K,L),o=i(F,B,H,c,r,K,L),n.moveTo(p.cx+p.x01,p.cy+p.y01),K<U?n.arc(p.cx,p.cy,K,(0,e.FP)(p.y01,p.x01),(0,e.FP)(o.y01,o.x01),!L):(n.arc(p.cx,p.cy,K,(0,e.FP)(p.y01,p.x01),(0,e.FP)(p.y11,p.x11),!L),n.arc(0,0,r,(0,e.FP)(p.cy+p.y11,p.cx+p.x11),(0,e.FP)(o.cy+o.y11,o.cx+o.x11),!L),n.arc(o.cx,o.cy,K,(0,e.FP)(o.y11,o.x11),(0,e.FP)(o.y01,o.x01),!L))):(n.moveTo(W,M),n.arc(0,0,r,z,S,!L)):n.moveTo(W,M),!(_>e.Ni)||!(Q>e.Ni)?n.lineTo(H,c):$>e.Ni?(p=i(H,c,F,B,_,-$,L),o=i(W,M,T,X,_,-$,L),n.lineTo(p.cx+p.x01,p.cy+p.y01),$<U?n.arc(p.cx,p.cy,$,(0,e.FP)(p.y01,p.x01),(0,e.FP)(o.y01,o.x01),!L):(n.arc(p.cx,p.cy,$,(0,e.FP)(p.y01,p.x01),(0,e.FP)(p.y11,p.x11),!L),n.arc(0,0,_,(0,e.FP)(p.cy+p.y11,p.cx+p.x11),(0,e.FP)(o.cy+o.y11,o.cx+o.x11),L),n.arc(o.cx,o.cy,$,(0,e.FP)(o.y11,o.x11),(0,e.FP)(o.y01,o.x01),!L))):n.arc(0,0,_,N,V,L)}if(n.closePath(),u)return n=null,u+""||null}return x.centroid=function(){var u=(+s.apply(this,arguments)+ +a.apply(this,arguments))/2,v=(+j.apply(this,arguments)+ +g.apply(this,arguments))/2-e.pi/2;return[(0,e.gn)(v)*u,(0,e.F8)(v)*u]},x.innerRadius=function(u){return arguments.length?(s=typeof u=="function"?u:(0,h.A)(+u),x):s},x.outerRadius=function(u){return arguments.length?(a=typeof u=="function"?u:(0,h.A)(+u),x):a},x.cornerRadius=function(u){return arguments.length?(m=typeof u=="function"?u:(0,h.A)(+u),x):m},x.padRadius=function(u){return arguments.length?(b=u==null?null:typeof u=="function"?u:(0,h.A)(+u),x):b},x.startAngle=function(u){return arguments.length?(j=typeof u=="function"?u:(0,h.A)(+u),x):j},x.endAngle=function(u){return arguments.length?(g=typeof u=="function"?u:(0,h.A)(+u),x):g},x.padAngle=function(u){return arguments.length?(O=typeof u=="function"?u:(0,h.A)(+u),x):O},x.context=function(u){return arguments.length?(n=u??null,x):n},x}},"../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/constant.js":(te,R,t)=>{t.d(R,{A:()=>f});function f(h){return function(){return h}}},"../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/math.js":(te,R,t)=>{t.d(R,{F8:()=>w,FA:()=>D,FP:()=>h,HQ:()=>s,Ni:()=>l,RZ:()=>C,T9:()=>Y,TW:()=>i,gn:()=>e,jk:()=>E,pi:()=>d,qR:()=>a,tn:()=>f});var f=Math.abs,h=Math.atan2,e=Math.cos,Y=Math.max,E=Math.min,w=Math.sin,C=Math.sqrt,l=1e-12,d=Math.PI,i=d/2,D=2*d;function s(m){return m>1?0:m<-1?d:Math.acos(m)}function a(m){return m>=1?i:m<=-1?-i:Math.asin(m)}},"../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js":(te,R,t)=>{t.d(R,{A:()=>E});var f=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/constant.js");function h(w,C){return C<w?-1:C>w?1:C>=w?0:NaN}function e(w){return w}var Y=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/math.js");function E(){var w=e,C=h,l=null,d=(0,f.A)(0),i=(0,f.A)(Y.FA),D=(0,f.A)(0);function s(a){var m,b=a.length,j,g,O=0,n=new Array(b),x=new Array(b),u=+d.apply(this,arguments),v=Math.min(Y.FA,Math.max(-Y.FA,i.apply(this,arguments)-u)),_,r=Math.min(Math.abs(v)/b,D.apply(this,arguments)),y=r*(v<0?-1:1),A;for(m=0;m<b;++m)(A=x[n[m]=m]=+w(a[m],m,a))>0&&(O+=A);for(C!=null?n.sort(function(G,L){return C(x[G],x[L])}):l!=null&&n.sort(function(G,L){return l(a[G],a[L])}),m=0,g=O?(v-b*y)/O:0;m<b;++m,u=_)j=n[m],A=x[j],_=u+(A>0?A*g:0)+y,x[j]={data:a[j],index:m,value:A,startAngle:u,endAngle:_,padAngle:r};return x}return s.value=function(a){return arguments.length?(w=typeof a=="function"?a:(0,f.A)(+a),s):w},s.sortValues=function(a){return arguments.length?(C=a,l=null,s):C},s.sort=function(a){return arguments.length?(l=a,C=null,s):l},s.startAngle=function(a){return arguments.length?(d=typeof a=="function"?a:(0,f.A)(+a),s):d},s.endAngle=function(a){return arguments.length?(i=typeof a=="function"?a:(0,f.A)(+a),s):i},s.padAngle=function(a){return arguments.length?(D=typeof a=="function"?a:(0,f.A)(+a),s):D},s}}}]);
