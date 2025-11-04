(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8731],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":((d,t,r)=>{"use strict";r.d(t,{R:()=>i,x:()=>s});var a=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},h=a.createContext(e);function i(o){const l=a.useContext(h);return a.useMemo(function(){return typeof o=="function"?o(l):{...l,...o}},[l,o])}function s(o){let l;return o.disableParentContext?l=typeof o.components=="function"?o.components(e):o.components||e:l=i(o.components),a.createElement(h.Provider,{value:l},o.children)}}),"../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.26_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive":(d=>{function t(r){var a=new Error("Cannot find module '"+r+"'");throw a.code="MODULE_NOT_FOUND",a}t.keys=()=>[],t.resolve=t,t.id="../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.26_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive",d.exports=t}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive":(d=>{function t(r){var a=new Error("Cannot find module '"+r+"'");throw a.code="MODULE_NOT_FOUND",a}t.keys=()=>[],t.resolve=t,t.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive",d.exports=t}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive":(d=>{function t(r){var a=new Error("Cannot find module '"+r+"'");throw a.code="MODULE_NOT_FOUND",a}t.keys=()=>[],t.resolve=t,t.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive",d.exports=t}),"../charts/src/components/bar-chart/stories/index.docs.mdx":((d,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var a=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),h=r("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),i=r("../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.26_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist/blocks.mjs"),s=r("../charts/src/components/bar-chart/stories/index.stories.tsx");function o(c){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,h.R)(),...c.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.W8,{title:"JS Packages/Charts/Types/Bar Chart",of:s}),`
`,(0,e.jsx)(n.h1,{id:"bar-chart",children:"Bar Chart"}),`
`,(0,e.jsx)(n.p,{children:"Bar Charts visualize categorical data using rectangular bars with heights or lengths proportional to the values they represent. They excel at comparing values across categories, showing distributions, and highlighting differences in data sets."}),`
`,(0,e.jsx)(i.Hl,{of:s.Default}),`
`,(0,e.jsx)(n.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsxs)(n.p,{children:["The Bar Chart component provides a flexible, accessible, and highly customizable solution for displaying categorical data. Built on ",(0,e.jsx)(n.code,{children:"@visx/xychart"}),", it supports multiple data series, both vertical and horizontal orientations, interactive tooltips, legends, and advanced visual features like pattern fills:"]}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`import { BarChart } from '@automattic/charts';

<BarChart
	data={ data }
	orientation="vertical"
	withTooltips={ true }
	showLegend={ true }
/>`}),`
`,(0,e.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsxs)(n.p,{children:["For detailed information about component props, types, and method signatures, see the ",(0,e.jsx)(n.a,{href:"./?path=/docs/js-packages-charts-types-bar-chart-api-reference--docs",children:"Bar Chart API Reference"}),"."]}),`
`,(0,e.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(n.h3,{id:"simple-bar-chart",children:"Simple Bar Chart"}),`
`,(0,e.jsxs)(n.p,{children:["The simplest bar chart requires only a ",(0,e.jsx)(n.code,{children:"data"})," prop with categorical data:"]}),`
`,(0,e.jsx)(i.Hl,{of:s.SingleSeries}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={[
		{
			label: 'Olympic Medals',
			data: [
				{ label: '2016', value: 121 },
				{ label: '2020', value: 113 },
				{ label: '2024', value: 126 },
			],
			options: {}
		}
	]}
/>`}),`
`,(0,e.jsx)(n.h3,{id:"required-props",children:"Required Props"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"data"})}),": Array of series data, each containing ",(0,e.jsx)(n.code,{children:"label"}),", ",(0,e.jsx)(n.code,{children:"data"})," array, and optional ",(0,e.jsx)(n.code,{children:"options"})]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"optional-props",children:"Optional Props"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"width"})}),": Chart width in pixels (responsive by default)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"height"})}),": Chart height in pixels (responsive by default, defaults to 400)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"orientation"})}),": Bar orientation (",(0,e.jsx)(n.code,{children:"'vertical'"})," or ",(0,e.jsx)(n.code,{children:"'horizontal'"}),", defaults to ",(0,e.jsx)(n.code,{children:"'vertical'"}),")"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"withTooltips"})}),": Enable interactive tooltips (",(0,e.jsx)(n.code,{children:"false"})," by default)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"withPatterns"})}),": Use pattern fills instead of solid colors (",(0,e.jsx)(n.code,{children:"false"})," by default)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"showLegend"})}),": Display chart legend (",(0,e.jsx)(n.code,{children:"false"})," by default)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"legendInteractive"})}),": Enable interactive legend with series toggle (",(0,e.jsx)(n.code,{children:"false"})," by default, requires ",(0,e.jsx)(n.code,{children:"chartId"}),")"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"gridVisibility"})}),": Grid line visibility (",(0,e.jsx)(n.code,{children:"'x'"}),", ",(0,e.jsx)(n.code,{children:"'y'"}),", ",(0,e.jsx)(n.code,{children:"'xy'"}),", or ",(0,e.jsx)(n.code,{children:"'none'"}),")"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"margin"})}),": Custom chart margins"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"options"})}),": Advanced axis and scale configuration"]}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"chart-orientations",children:"Chart Orientations"}),`
`,(0,e.jsx)(n.h3,{id:"vertical-bars-default",children:"Vertical Bars (Default)"}),`
`,(0,e.jsx)(n.p,{children:"Standard vertical bar charts with categories on the x-axis and values on the y-axis:"}),`
`,(0,e.jsx)(i.Hl,{of:s.Default}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={data}
	orientation="vertical"
	gridVisibility="x"
/>`}),`
`,(0,e.jsx)(n.h3,{id:"horizontal-bars",children:"Horizontal Bars"}),`
`,(0,e.jsx)(n.p,{children:"Horizontal bar charts with categories on the y-axis and values on the x-axis, ideal for long category names:"}),`
`,(0,e.jsx)(i.Hl,{of:s.HorizontalBarChart}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={data}
	orientation="horizontal"
	gridVisibility="y"
/>`}),`
`,(0,e.jsx)(n.h2,{id:"multiple-series",children:"Multiple Series"}),`
`,(0,e.jsx)(n.h3,{id:"multi-series-charts",children:"Multi-Series Charts"}),`
`,(0,e.jsx)(n.p,{children:"Display multiple data series with automatic color differentiation and grouped bars:"}),`
`,(0,e.jsx)(i.Hl,{of:s.Default}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={[
		{
			label: 'United States',
			data: olympicData.usa,
			options: {}
		},
		{
			label: 'Great Britain',
			data: olympicData.gb,
			options: {}
		},
		{
			label: 'Germany',
			data: olympicData.germany,
			options: {}
		}
	]}
/>`}),`
`,(0,e.jsx)(n.h3,{id:"many-data-series",children:"Many Data Series"}),`
`,(0,e.jsx)(n.p,{children:"The component handles large numbers of series gracefully with automatic color cycling:"}),`
`,(0,e.jsx)(i.Hl,{of:s.ManyDataSeries}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={allCountriesData}
	withTooltips={true}
	showLegend={true}
/>`}),`
`,(0,e.jsx)(n.h2,{id:"visual-features",children:"Visual Features"}),`
`,(0,e.jsx)(n.h3,{id:"pattern-fills",children:"Pattern Fills"}),`
`,(0,e.jsx)(n.p,{children:"Add visual accessibility and distinction with pattern fills instead of solid colors:"}),`
`,(0,e.jsx)(i.Hl,{of:s.WithPatterns}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={data}
	withPatterns={true}
	withTooltips={true}
/>`}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Pattern types automatically cycle through:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Lines"}),": Diagonal line patterns"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Circles"}),": Circular dot patterns"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Waves"}),": Wave line patterns"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Hexagons"}),": Hexagonal patterns"]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"smart-formatting",children:"Smart Formatting"}),`
`,(0,e.jsx)(n.p,{children:"Automatic formatting handles large numbers with appropriate abbreviations:"}),`
`,(0,e.jsx)(i.Hl,{of:s.SmartFormatting}),`
`,(0,e.jsx)(n.p,{children:"Values are automatically formatted as:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"1B and above"}),': "1.23B"']}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"1M and above"}),': "1.2M"']}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"1K and above"}),': "1k"']}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Below 1K"}),': "1,234"']}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"data-formats",children:"Data Formats"}),`
`,(0,e.jsx)(n.h3,{id:"time-series-data",children:"Time Series Data"}),`
`,(0,e.jsx)(n.p,{children:"Bar charts support both categorical labels and time-series data:"}),`
`,(0,e.jsx)(i.Hl,{of:s.TimeSeries}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`// Date objects
{ date: new Date('2024-01-01'), value: 2230 }

// Date strings (automatically parsed)
{ dateString: '2024-01-01', value: 2580 }
{ dateString: '2024-01-01 14:30:00', value: 3500 }

// Category labels
{ label: '2024', value: 126 }`}),`
`,(0,e.jsx)(n.h3,{id:"custom-axis-formatting",children:"Custom Axis Formatting"}),`
`,(0,e.jsx)(n.p,{children:"Configure custom formatting for time-series or numerical axes:"}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={timeSeriesData}
	options={{
		axis: {
			x: {
				tickFormat: (timestamp) => {
					const date = new Date(timestamp);
					return date.toLocaleDateString('en-US', { dateStyle: 'short' });
				},
			},
		},
	}}
/>`}),`
`,(0,e.jsx)(n.h2,{id:"interactive-features",children:"Interactive Features"}),`
`,(0,e.jsx)(n.h3,{id:"tooltips",children:"Tooltips"}),`
`,(0,e.jsx)(n.p,{children:"Enable rich interactive tooltips that display detailed information on hover:"}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={data}
	withTooltips={true}
	renderTooltip={({ tooltipData }) => {
		const nearestDatum = tooltipData?.nearestDatum?.datum;
		return (
			<div>
				<div>{tooltipData?.nearestDatum?.key}</div>
				<div>{nearestDatum?.label}: {nearestDatum?.value}</div>
			</div>
		);
	}}
/>`}),`
`,(0,e.jsx)(n.h3,{id:"keyboard-navigation",children:"Keyboard Navigation"}),`
`,(0,e.jsx)(n.p,{children:"Charts are fully keyboard accessible:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Tab"}),": Focus the chart"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Arrow Keys"}),": Navigate between bars"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Enter/Space"}),": Activate tooltips"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Escape"}),": Close active tooltips"]}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"zero-value-display",children:"Zero Value Display"}),`
`,(0,e.jsx)(n.h3,{id:"visual-enhancement-for-zero-values",children:"Visual Enhancement for Zero Values"}),`
`,(0,e.jsxs)(n.p,{children:["By default, bars with zero values have no visual height, making them difficult to identify. The ",(0,e.jsx)(n.code,{children:"showZeroValues"})," feature provides better user experience by giving zero values a minimum visual height while preserving data integrity:"]}),`
`,(0,e.jsx)(i.Hl,{of:s.ZeroValueComparison}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={dataWithZeros}
	showZeroValues={true}
	withTooltips={true}
/>`}),`
`,(0,e.jsx)(n.h2,{id:"legends",children:"Legends"}),`
`,(0,e.jsx)(n.h3,{id:"basic-legend",children:"Basic Legend"}),`
`,(0,e.jsx)(n.p,{children:"Display series information with automatic color and pattern matching:"}),`
`,(0,e.jsx)(i.Hl,{of:s.WithInteractiveLegend}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={data}
	showLegend={true}
	legendOrientation="horizontal"
	legendAlignment="center"
	legendPosition="bottom"
	legendShape="rect"
/>`}),`
`,(0,e.jsx)(n.h3,{id:"vertical-legend",children:"Vertical Legend"}),`
`,(0,e.jsx)(n.p,{children:"Display legends vertically for charts with many series:"}),`
`,(0,e.jsx)(i.Hl,{of:s.CustomLegendPositioning}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={data}
	showLegend={true}
	legendOrientation="vertical"
	legendAlignment="start"
	legendPosition="top"
/>`}),`
`,(0,e.jsx)(n.h3,{id:"composition-api",children:"Composition API"}),`
`,(0,e.jsxs)(n.p,{children:["For more flexible legend positioning and future extensibility, use the composition API with ",(0,e.jsx)(n.code,{children:"<BarChart.Legend />"})," as a child component:"]}),`
`,(0,e.jsx)(i.Hl,{of:s.WithCompositionLegend}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={data}
	withTooltips={true}
	gridVisibility="x"
>
	<BarChart.Legend
		orientation="horizontal"
		alignment="center"
		position="bottom"
	/>
</BarChart>`}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Benefits of the composition API:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Flexible positioning"}),": Place legends anywhere within the chart container"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Future extensibility"}),": Enables additional chart components like annotations"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Consistent API"}),": Same pattern as LineChart for a unified developer experience"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Backward compatibility"}),": Existing ",(0,e.jsx)(n.code,{children:"showLegend"})," prop continues to work"]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Usage patterns:"})}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`// Composition API (recommended for new code)
<BarChart data={data}>
	<BarChart.Legend legendOrientation="vertical" alignment="end" />
</BarChart>

// Traditional prop-based approach (still supported)
<BarChart
	data={data}
	showLegend={true}
	legendOrientation="vertical"
	legendAlignment="end"
/>`}),`
`,(0,e.jsx)(n.h3,{id:"interactive-legend",children:"Interactive Legend"}),`
`,(0,e.jsxs)(n.p,{children:["Enable interactive legend items that users can click to toggle series visibility. This feature requires a ",(0,e.jsx)(n.code,{children:"chartId"})," and wrapping your chart in a ",(0,e.jsx)(n.code,{children:"GlobalChartsProvider"}),":"]}),`
`,(0,e.jsx)(i.Hl,{of:s.WithInteractiveLegend}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`import { BarChart, GlobalChartsProvider } from '@automattic/charts';

<GlobalChartsProvider>
	<BarChart
		data={data}
		chartId="my-chart"
		showLegend={true}
		legendInteractive={true}
	/>
</GlobalChartsProvider>`}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Interactive legend features:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Click to toggle"}),": Click legend items to show/hide series"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Visual feedback"}),": Legend items visually indicate their active/inactive state"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Accessibility"}),": Full keyboard support with proper ARIA attributes"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Empty state"}),": When all series are hidden, a message prompts users to re-enable series"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"State management"}),": Visibility state is managed through the global charts provider"]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Requirements:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["Set ",(0,e.jsx)(n.code,{children:"legendInteractive={true}"})," to enable the feature"]}),`
`,(0,e.jsxs)(n.li,{children:["Provide a unique ",(0,e.jsx)(n.code,{children:"chartId"})," prop for state tracking"]}),`
`,(0,e.jsxs)(n.li,{children:["Wrap the chart in a ",(0,e.jsx)(n.code,{children:"<GlobalChartsProvider>"})," component"]}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"advanced-customization",children:"Advanced Customization"}),`
`,(0,e.jsx)(n.h3,{id:"grid-configuration",children:"Grid Configuration"}),`
`,(0,e.jsx)(n.p,{children:"Control grid line visibility and appearance:"}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`// Show only horizontal grid lines (default for vertical bars)
<BarChart data={data} gridVisibility="x" />

// Show only vertical grid lines (default for horizontal bars)
<BarChart data={data} gridVisibility="y" />

// Show both grid lines
<BarChart data={data} gridVisibility="xy" />

// Hide all grid lines
<BarChart data={data} gridVisibility="none" />`}),`
`,(0,e.jsx)(n.h3,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,(0,e.jsx)(n.p,{children:"Charts automatically resize based on container size:"}),`
`,(0,e.jsx)(i.Hl,{of:s.FixedDimensions}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`// Responsive (default)
<BarChart data={data} />

// Fixed dimensions
<BarChart
	data={data}
	width={800}
	height={400}
/>`}),`
`,(0,e.jsx)(n.h3,{id:"custom-margins",children:"Custom Margins"}),`
`,(0,e.jsx)(n.p,{children:"Control chart layout with precise margin settings:"}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={data}
	margin={{
		top: 20,
		right: 60,
		bottom: 80,
		left: 80
	}}
/>`}),`
`,(0,e.jsx)(n.h3,{id:"scale-and-axis-configuration",children:"Scale and Axis Configuration"}),`
`,(0,e.jsx)(n.p,{children:"Advanced configuration for scales and axes:"}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={data}
	options={{
		yScale: {
			type: 'linear',
			zero: true,
			nice: true
		},
		xScale: {
			type: 'band',
			padding: 0.1
		},
		axis: {
			x: {
				orientation: 'bottom',
				numTicks: 5
			},
			y: {
				orientation: 'left',
				numTicks: 6,
				tickFormat: (value) => '$' + value
			}
		}
	}}
/>`}),`
`,(0,e.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),`
`,(0,e.jsx)(n.p,{children:"The chart gracefully handles various error states and edge cases:"}),`
`,(0,e.jsx)(i.Hl,{of:s.ErrorStates}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Supported scenarios:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Empty data arrays"}),`
`,(0,e.jsx)(n.li,{children:"Invalid data values (null, NaN, undefined)"}),`
`,(0,e.jsx)(n.li,{children:"Missing data properties"}),`
`,(0,e.jsx)(n.li,{children:"Invalid date formats"}),`
`,(0,e.jsx)(n.li,{children:"Single data points"}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,(0,e.jsx)(n.h3,{id:"keyboard-navigation-1",children:"Keyboard Navigation"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Tab"}),": Focus the chart container"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Arrow Keys"}),": Navigate between individual bars"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Enter/Space"}),": Activate tooltips or interactive elements"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Escape"}),": Close active tooltips"]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"screen-reader-support",children:"Screen Reader Support"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["Chart container has ",(0,e.jsx)(n.code,{children:'role="grid"'})," with descriptive ",(0,e.jsx)(n.code,{children:"aria-label"})]}),`
`,(0,e.jsx)(n.li,{children:"Individual bars are navigable and announced with their values"}),`
`,(0,e.jsx)(n.li,{children:"Interactive elements have appropriate ARIA attributes"}),`
`,(0,e.jsxs)(n.li,{children:["Color information is supplemented with patterns when ",(0,e.jsx)(n.code,{children:"withPatterns"})," is enabled"]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"focus-management",children:"Focus Management"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Clear visual focus indicators on chart and individual bars"}),`
`,(0,e.jsx)(n.li,{children:"Logical tab order through interactive elements"}),`
`,(0,e.jsx)(n.li,{children:"Focus restoration after modal interactions"}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"browser-compatibility",children:"Browser Compatibility"}),`
`,(0,e.jsx)(n.h3,{id:"modern-browser-support",children:"Modern Browser Support"}),`
`,(0,e.jsx)(n.p,{children:"Full functionality in all modern browsers supporting:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"SVG rendering and manipulation"}),`
`,(0,e.jsx)(n.li,{children:"CSS Grid and Flexbox layouts"}),`
`,(0,e.jsx)(n.li,{children:"ES6+ JavaScript features"}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"performance-considerations",children:"Performance Considerations"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["Optimized rendering using ",(0,e.jsx)(n.code,{children:"@visx/xychart"})," for efficient SVG generation"]}),`
`,(0,e.jsx)(n.li,{children:"Automatic data validation and error boundaries"}),`
`,(0,e.jsx)(n.li,{children:"Efficient pattern generation for accessibility features"}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"performance-considerations-1",children:"Performance Considerations"}),`
`,(0,e.jsx)(n.h3,{id:"built-in-optimizations",children:"Built-in Optimizations"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Efficient rendering"}),": Built on ",(0,e.jsx)(n.code,{children:"@visx/xychart"})," for optimized SVG rendering"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Data validation"}),": Automatic validation prevents rendering invalid data"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Responsive behavior"}),": Uses ",(0,e.jsx)(n.code,{children:"ResizeObserver"})," for efficient chart resizing"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Pattern caching"}),": Pattern definitions are cached and reused for performance"]}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"theming-integration",children:"Theming Integration"}),`
`,(0,e.jsx)(n.p,{children:"Bar Charts integrate seamlessly with the chart theming system:"}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`import { GlobalChartsProvider, jetpackTheme } from '@automattic/charts';

<GlobalChartsProvider theme={jetpackTheme}>
	<BarChart data={data} />
</GlobalChartsProvider>`}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Available themes:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Default"}),": Neutral colors and styling"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Jetpack"}),": Jetpack brand colors and styling"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Woo"}),": WooCommerce brand colors and styling"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Custom"}),": Define your own theme object with custom color schemes"]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"The component automatically adapts bar colors, patterns, and styling based on the active theme while maintaining accessibility standards."})]})}function l(c={}){const{wrapper:n}={...(0,h.R)(),...c.components};return n?(0,e.jsx)(n,{...c,children:(0,e.jsx)(o,{...c})}):o(c)}})}]);
