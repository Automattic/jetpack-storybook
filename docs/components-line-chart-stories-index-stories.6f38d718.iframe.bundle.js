"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4722],{"../charts/src/components/line-chart/stories/index.stories.tsx":(F,y,n)=>{n.r(y),n.d(y,{BrokenLine:()=>u,CurveTypes:()=>j,CustomDimensions:()=>w,DateStringFormats:()=>G,Default:()=>s,ErrorStates:()=>T,FixedDimensions:()=>p,GridientFilled:()=>D,SingleSeries:()=>v,SmartFormatting:()=>m,WithCustomGlyph:()=>L,WithCustomGlyphsPerDataPoint:()=>C,WithCustomSvgGlyph:()=>b,WithPointerEvents:()=>S,WithStartGlyphs:()=>x,WithoutSmoothing:()=>f,__namedExportsOrder:()=>q,default:()=>Z});var _=n("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"),E=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),h=n.n(E),c=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),R=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),A=n.n(R),O=n("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),U=n("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/diamond.js"),V=n("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),N=["children","className","top","left","size"];function k(){return k=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},k.apply(this,arguments)}function I(t,a){if(t==null)return{};var r={},o=Object.keys(t),g,l;for(l=0;l<o.length;l++)g=o[l],!(a.indexOf(g)>=0)&&(r[g]=t[g]);return r}function z(t){var a=t.children,r=t.className,o=t.top,g=t.left,l=t.size,tt=I(t,N),Y=(0,O.A)();return Y.type(U.A),(typeof l=="number"||l)&&Y.size(l),a?c.createElement(c.Fragment,null,a({path:Y})):c.createElement(V.A,{top:o,left:g},c.createElement("path",k({className:A()("visx-glyph-diamond",r),d:Y()||""},tt)))}z.propTypes={children:h().func,className:h().string,top:h().number,left:h().number,size:h().oneOfType([h().number,h().func])};var M=n("../charts/src/providers/theme/themes.ts"),X=n("../charts/src/providers/theme/theme-provider.tsx"),H=n("../charts/src/components/shared/default-glyph.tsx"),d=n("../charts/src/components/line-chart/line-chart.tsx"),W=n("../charts/src/components/line-chart/stories/config.tsx"),J=n("../charts/src/components/line-chart/stories/large-values-sample.ts"),B=n("../charts/src/components/line-chart/stories/sample-data.ts"),P=n("../charts/src/components/line-chart/stories/site-traffic-sample.ts"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),et=`import { GlyphDiamond, GlyphStar } from '@visx/glyph';
import React from 'react';
import { ThemeProvider, jetpackTheme, wooTheme } from '../../../providers/theme';
import { DefaultGlyph } from '../../shared/default-glyph';
import LineChart from '../line-chart';
import { lineChartStoryArgs, lineChartMetaArgs } from './config';
import largeValuesData from './large-values-sample';
import sampleData from './sample-data';
import webTrafficData from './site-traffic-sample';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

const customStorybookTheme = {
	...jetpackTheme,
	glyphs: [
		props => React.createElement( DefaultGlyph, { ...props, key: props.key } ),
		props =>
			React.createElement( GlyphStar, {
				key: props.key,
				top: props.y,
				left: props.x,
				size: props.size * props.size,
				fill: props.color,
			} ),
		props =>
			React.createElement( GlyphDiamond, {
				key: props.key,
				top: props.y,
				left: props.x,
				size: props.size * props.size,
				fill: props.color,
			} ),
	],
};

const THEME_MAP = {
	default: undefined,
	jetpack: jetpackTheme,
	woo: wooTheme,
	customStorybook: customStorybookTheme,
};

const meta: Meta< typeof LineChart > = {
	...lineChartMetaArgs,
	title: 'JS Packages/Charts/Types/Line Chart',
	component: LineChart,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		( Story, { args } ) => {
			const theme = THEME_MAP[ args.themeName ];

			return (
				<ThemeProvider theme={ theme }>
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
				</ThemeProvider>
			);
		},
	],
	argTypes: {
		themeName: {
			control: 'select',
			options: [ 'default', 'jetpack', 'woo', 'customStorybook' ],
			defaultValue: 'default',
		},
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
	...lineChartStoryArgs,
};

// Story with single data series
export const SingleSeries: StoryObj< typeof LineChart > = Template.bind( {} );
SingleSeries.args = {
	data: [ sampleData[ 0 ] ], // Only London temperature data
};

// Story with custom dimensions
export const CustomDimensions: StoryObj< typeof LineChart > = Template.bind( {} );
CustomDimensions.args = {
	width: 800,
	height: 400,
	data: sampleData,
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

export const WithCustomGlyphsPerDataPoint: StoryObj< typeof LineChart > = Template.bind( {} );
WithCustomGlyphsPerDataPoint.args = {
	...Default.args,
	showLegend: true,
	withStartGlyphs: true,
	withLegendGlyph: true,
	themeName: 'customStorybook', // Mock prop used to switch the rendered theme in the storybook.
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
`,nt={Default:{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},SingleSeries:{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},CustomDimensions:{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},FixedDimensions:{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},GridientFilled:{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},ErrorStates:{startLoc:{col:27,line:148},endLoc:{col:1,line:223},startBody:{col:27,line:148},endBody:{col:1,line:223}},WithoutSmoothing:{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},WithPointerEvents:{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},CurveTypes:{startLoc:{col:26,line:237},endLoc:{col:1,line:327},startBody:{col:26,line:237},endBody:{col:1,line:327}},SmartFormatting:{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},BrokenLine:{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},WithStartGlyphs:{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},WithCustomGlyph:{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},WithCustomSvgGlyph:{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},WithCustomGlyphsPerDataPoint:{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},DateStringFormats:{startLoc:{col:33,line:478},endLoc:{col:1,line:511},startBody:{col:33,line:478},endBody:{col:1,line:511}}};const K={...M.QI,glyphs:[t=>c.createElement(H.W,{...t,key:t.key}),t=>c.createElement(_.A,{key:t.key,top:t.y,left:t.x,size:t.size*t.size,fill:t.color}),t=>c.createElement(z,{key:t.key,top:t.y,left:t.x,size:t.size*t.size,fill:t.color})]},$={default:void 0,jetpack:M.QI,woo:M.pk,customStorybook:K},Z={...W.N,title:"JS Packages/Charts/Types/Line Chart",component:d.A,parameters:{storySource:{source:`import { GlyphDiamond, GlyphStar } from '@visx/glyph';
import React from 'react';
import { ThemeProvider, jetpackTheme, wooTheme } from '../../../providers/theme';
import { DefaultGlyph } from '../../shared/default-glyph';
import LineChart from '../line-chart';
import { lineChartStoryArgs, lineChartMetaArgs } from './config';
import largeValuesData from './large-values-sample';
import sampleData from './sample-data';
import webTrafficData from './site-traffic-sample';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const customStorybookTheme = {
  ...jetpackTheme,
  glyphs: [props => /*#__PURE__*/React.createElement(DefaultGlyph, {
    ...props,
    key: props.key
  }), props => /*#__PURE__*/React.createElement(GlyphStar, {
    key: props.key,
    top: props.y,
    left: props.x,
    size: props.size * props.size,
    fill: props.color
  }), props => /*#__PURE__*/React.createElement(GlyphDiamond, {
    key: props.key,
    top: props.y,
    left: props.x,
    size: props.size * props.size,
    fill: props.color
  })]
};
const THEME_MAP = {
  default: undefined,
  jetpack: jetpackTheme,
  woo: wooTheme,
  customStorybook: customStorybookTheme
};
const meta = {
  ...lineChartMetaArgs,
  title: 'JS Packages/Charts/Types/Line Chart',
  component: LineChart,
  parameters: {
    layout: 'centered'
  },
  decorators: [(Story, {
    args
  }) => {
    const theme = THEME_MAP[args.themeName];
    return /*#__PURE__*/_jsx(ThemeProvider, {
      theme: theme,
      children: /*#__PURE__*/_jsx("div", {
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
      })
    });
  }],
  argTypes: {
    themeName: {
      control: 'select',
      options: ['default', 'jetpack', 'woo', 'customStorybook'],
      defaultValue: 'default'
    },
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
  ...lineChartStoryArgs
};

// Story with single data series
export const SingleSeries = Template.bind({});
SingleSeries.args = {
  data: [sampleData[0]] // Only London temperature data
};

// Story with custom dimensions
export const CustomDimensions = Template.bind({});
CustomDimensions.args = {
  width: 800,
  height: 400,
  data: sampleData
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
export const WithCustomGlyphsPerDataPoint = Template.bind({});
WithCustomGlyphsPerDataPoint.args = {
  ...Default.args,
  showLegend: true,
  withStartGlyphs: true,
  withLegendGlyph: true,
  themeName: 'customStorybook',
  // Mock prop used to switch the rendered theme in the storybook.
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
};`,locationsMap:{default:{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},"single-series":{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},"custom-dimensions":{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},"fixed-dimensions":{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},"gridient-filled":{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},"error-states":{startLoc:{col:27,line:148},endLoc:{col:1,line:223},startBody:{col:27,line:148},endBody:{col:1,line:223}},"without-smoothing":{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},"with-pointer-events":{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},"curve-types":{startLoc:{col:26,line:237},endLoc:{col:1,line:327},startBody:{col:26,line:237},endBody:{col:1,line:327}},"smart-formatting":{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},"broken-line":{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},"with-start-glyphs":{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},"with-custom-glyph":{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},"with-custom-svg-glyph":{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},"with-custom-glyphs-per-data-point":{startLoc:{col:17,line:93},endLoc:{col:2,line:95},startBody:{col:17,line:93},endBody:{col:2,line:95}},"date-string-formats":{startLoc:{col:33,line:478},endLoc:{col:1,line:511},startBody:{col:33,line:478},endBody:{col:1,line:511}}}},layout:"centered"},decorators:[(t,{args:a})=>{const r=$[a.themeName];return(0,e.jsx)(X.NP,{theme:r,children:(0,e.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,e.jsx)(t,{})})})}],argTypes:{themeName:{control:"select",options:["default","jetpack","woo","customStorybook"],defaultValue:"default"},maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}}}},i=t=>(0,e.jsx)(d.A,{...t}),s=i.bind({});s.args={...W.p};const v=i.bind({});v.args={data:[B.A[0]]};const w=i.bind({});w.args={width:800,height:400,data:B.A};const p=i.bind({});p.args={width:800,height:400,data:B.A,withTooltips:!0},p.parameters={docs:{description:{story:"Line chart with fixed dimensions that override the responsive behavior."}}};const D=i.bind({});D.args={...s.args,margin:void 0,data:P.A,withGradientFill:!0,options:{axis:{y:{orientation:"right"}}}};const T={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)(d.A,{width:300,height:200,data:[]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Invalid Date Values"}),(0,e.jsx)(d.A,{width:300,height:200,data:[{label:"Invalid Dates",data:[{date:new Date("invalid"),value:10},{date:new Date("2024-01-02"),value:20}],options:{}}]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Invalid Values"}),(0,e.jsx)(d.A,{width:300,height:200,data:[{label:"Invalid Values",data:[{date:new Date("2024-01-01"),value:NaN},{date:new Date("2024-01-02"),value:null}],options:{}}]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Single Data Point"}),(0,e.jsx)(d.A,{width:300,height:200,data:[{label:"Single Point",data:[{date:new Date("2024-01-01"),value:100}],options:{}}]})]})]}),parameters:{docs:{description:{story:"Examples of how the line chart handles various error states and edge cases."}}}},f=i.bind({});f.args={...s.args,smoothing:!1};const S=i.bind({});S.args={...s.args,onPointerDown:({datum:t})=>alert("Pointer down:"+JSON.stringify(t))};const j={render:()=>{const t=[{label:"Sample Series",data:[{date:new Date("2024-01-01"),value:10},{date:new Date("2024-01-02"),value:90},{date:new Date("2024-01-03"),value:85},{date:new Date("2024-01-04"),value:82},{date:new Date("2024-01-05"),value:5},{date:new Date("2024-01-06"),value:8},{date:new Date("2024-01-07"),value:10}],options:{}}];return(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Linear Curve"}),(0,e.jsx)(d.A,{width:300,height:200,data:t,curveType:"linear",showLegend:!1,withGradientFill:!1})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Smooth Curve (Catmull-Rom)"}),(0,e.jsx)(d.A,{width:300,height:200,data:t,curveType:"smooth",showLegend:!1,withGradientFill:!1})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Monotone X Curve"}),(0,e.jsx)(d.A,{width:300,height:200,data:t,curveType:"monotone",showLegend:!1,withGradientFill:!1})]})]})},parameters:{docs:{description:{story:"Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points."}}}},m=i.bind({});m.args={data:J.A,showLegend:!0,legendOrientation:"horizontal",withGradientFill:!1,smoothing:!0,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}}},m.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const u=i.bind({});u.args={...s.args,margin:{bottom:40},showLegend:!0,data:[{...P.A[0],label:"Vistors to compare",options:{...P.A[0].options,seriesLineStyle:{strokeDasharray:"5 5 1"},legendShapeStyle:{strokeDasharray:"5 5 1"}}},P.A[1]]},u.parameters={docs:{description:{story:"Demonstrates the option of setting a seriesLineStyle to a dash array."}}};const x=i.bind({});x.args={...s.args,withStartGlyphs:!0};const L=i.bind({});L.args={...s.args,showLegend:!0,withStartGlyphs:!0,withLegendGlyph:!0,renderGlyph:({color:t,size:a,x:r,y:o})=>(0,e.jsx)(_.A,{top:o,left:r,size:a*a,fill:t}),glyphStyle:{radius:10}};const Q=({color:t,size:a,x:r,y:o})=>{const l=typeof r=="number"&&typeof o=="number"&&(r!==0||o!==0)?{transform:`translate(${r}, ${o})`}:{};return(0,e.jsx)("g",{...l,children:(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a*2,height:a*2,viewBox:"0 0 24 24",style:{overflow:"visible",pointerEvents:"none"},children:(0,e.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",fill:t,stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(-12, -12)"})})})},b=i.bind({});b.args={...s.args,showLegend:!0,withStartGlyphs:!0,withLegendGlyph:!0,renderGlyph:({color:t,size:a,x:r,y:o})=>(0,e.jsx)(Q,{color:t,size:a,x:r,y:o}),glyphStyle:{radius:8}};const C=i.bind({});C.args={...s.args,showLegend:!0,withStartGlyphs:!0,withLegendGlyph:!0,themeName:"customStorybook",glyphStyle:{radius:8}};const G={render:()=>(0,e.jsx)(d.A,{data:[{label:"String Dates",data:[{dateString:"2024-01-01",value:10},{dateString:"2024-01-02",value:20},{dateString:"2024-01-03 00:00:00",value:15},{dateString:"2024-01-04",value:25},{dateString:"2024-01-05 00:00",value:30}],options:{}}],withGradientFill:!1}),parameters:{docs:{description:{story:`Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:
- Simple date strings (YYYY-MM-DD)
- Date with time (YYYY-MM-DD 00:00:00)
- Date with time (YYYY-MM-DD 00:00)
- ISO format (YYYY-MM-DDT00:00:00)
- UTC format (YYYY-MM-DDT00:00:00Z)
- Timezone offset (YYYY-MM-DDT00:00:00\xB1HH:mm)
`}}}},q=["Default","SingleSeries","CustomDimensions","FixedDimensions","GridientFilled","ErrorStates","WithoutSmoothing","WithPointerEvents","CurveTypes","SmartFormatting","BrokenLine","WithStartGlyphs","WithCustomGlyph","WithCustomSvgGlyph","WithCustomGlyphsPerDataPoint","DateStringFormats"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...s.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...v.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...w.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...p.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...D.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...f.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...S.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...m.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...u.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...x.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...L.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...C.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}}},"../charts/src/components/line-chart/stories/large-values-sample.ts":(F,y,n)=>{n.d(y,{A:()=>E});const E=[{label:"Revenue (Billions)",data:[{date:new Date("2024-01-01"),value:12e8},{date:new Date("2024-02-01"),value:145e7},{date:new Date("2024-03-01"),value:168e7},{date:new Date("2024-04-01"),value:21e8},{date:new Date("2024-05-01"),value:235e7},{date:new Date("2024-06-01"),value:28e8}],options:{stroke:"#3858E9"}},{label:"Users (Millions)",data:[{date:new Date("2024-01-01"),value:45e6},{date:new Date("2024-02-01"),value:52e6},{date:new Date("2024-03-01"),value:48e6},{date:new Date("2024-04-01"),value:61e6},{date:new Date("2024-05-01"),value:75e6},{date:new Date("2024-06-01"),value:89e6}],options:{stroke:"#00BA37"}}]},"../charts/src/components/line-chart/stories/site-traffic-sample.ts":(F,y,n)=>{n.d(y,{A:()=>_});const _=[{label:"Views",options:{stroke:"#069e08"},data:[{date:new Date("2024-01-01"),value:2558},{date:new Date("2024-01-02"),value:3399},{date:new Date("2024-01-03"),value:2260},{date:new Date("2024-01-04"),value:2331},{date:new Date("2024-01-05"),value:3302},{date:new Date("2024-01-06"),value:1852},{date:new Date("2024-01-07"),value:2607},{date:new Date("2024-01-08"),value:2804},{date:new Date("2024-01-09"),value:3260},{date:new Date("2024-01-10"),value:2941},{date:new Date("2024-01-11"),value:2857},{date:new Date("2024-01-12"),value:3461},{date:new Date("2024-01-13"),value:1548},{date:new Date("2024-01-14"),value:2739},{date:new Date("2024-01-15"),value:3288},{date:new Date("2024-01-16"),value:2869},{date:new Date("2024-01-17"),value:2590},{date:new Date("2024-01-18"),value:2609},{date:new Date("2024-01-19"),value:2648},{date:new Date("2024-01-20"),value:1805},{date:new Date("2024-01-21"),value:2531},{date:new Date("2024-01-22"),value:3605},{date:new Date("2024-01-23"),value:2366},{date:new Date("2024-01-24"),value:2782},{date:new Date("2024-01-25"),value:2885},{date:new Date("2024-01-26"),value:2918},{date:new Date("2024-01-27"),value:2518},{date:new Date("2024-01-28"),value:2378},{date:new Date("2024-01-29"),value:2714},{date:new Date("2024-01-30"),value:3279}]},{label:"Visitors",options:{stroke:"rgb(230, 139, 40)"},data:[{date:new Date("2024-01-01"),value:2412},{date:new Date("2024-01-02"),value:1899},{date:new Date("2024-01-03"),value:2061},{date:new Date("2024-01-04"),value:1939},{date:new Date("2024-01-05"),value:1986},{date:new Date("2024-01-06"),value:1560},{date:new Date("2024-01-07"),value:1741},{date:new Date("2024-01-08"),value:2120},{date:new Date("2024-01-09"),value:1889},{date:new Date("2024-01-10"),value:1666},{date:new Date("2024-01-11"),value:2396},{date:new Date("2024-01-12"),value:2276},{date:new Date("2024-01-13"),value:1218},{date:new Date("2024-01-14"),value:1228},{date:new Date("2024-01-15"),value:1600},{date:new Date("2024-01-16"),value:1814},{date:new Date("2024-01-17"),value:1701},{date:new Date("2024-01-18"),value:1507},{date:new Date("2024-01-19"),value:1833},{date:new Date("2024-01-20"),value:1407},{date:new Date("2024-01-21"),value:965},{date:new Date("2024-01-22"),value:2288},{date:new Date("2024-01-23"),value:2135},{date:new Date("2024-01-24"),value:1824},{date:new Date("2024-01-25"),value:2219},{date:new Date("2024-01-26"),value:1918},{date:new Date("2024-01-27"),value:1101},{date:new Date("2024-01-28"),value:1695},{date:new Date("2024-01-29"),value:1615},{date:new Date("2024-01-30"),value:2056}]}]}}]);
