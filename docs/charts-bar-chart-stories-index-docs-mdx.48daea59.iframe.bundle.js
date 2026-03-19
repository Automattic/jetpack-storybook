"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1954],{"../charts/src/charts/bar-chart/stories/index.docs.mdx"(c,r,t){t.r(r),t.d(r,{default:()=>d});var h=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),l=t("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.28_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),n=t("../../../node_modules/.pnpm/@storybook+addon-docs@10.2.11_@types+react@18.3.28_esbuild@0.25.9_storybook@10.2.11_@te_623b11407ff81c3407704a8a948465b9/node_modules/@storybook/addon-docs/dist/blocks.js"),a=t("../charts/src/charts/bar-chart/stories/index.stories.tsx");function o(s){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...s.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.W8,{title:"JS Packages/Charts Library/Charts/Bar Chart",of:a}),`
`,(0,e.jsx)(i.h1,{id:"bar-chart",children:"Bar Chart"}),`
`,(0,e.jsx)(i.p,{children:"Bar Charts visualize categorical data using rectangular bars with heights or lengths proportional to the values they represent. They excel at comparing values across categories, showing distributions, and highlighting differences in data sets."}),`
`,(0,e.jsx)(n.Hl,{of:a.Default}),`
`,(0,e.jsx)(i.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsxs)(i.p,{children:["The Bar Chart component provides a flexible, accessible, and highly customizable solution for displaying categorical data. Built on ",(0,e.jsx)(i.code,{children:"@visx/xychart"}),", it supports multiple data series, both vertical and horizontal orientations, interactive tooltips, legends, and advanced visual features like pattern fills:"]}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`import { BarChart } from '@automattic/charts';

<BarChart
	data={ data }
	orientation="vertical"
	withTooltips={ true }
	showLegend={ true }
/>`}),`
`,(0,e.jsx)(i.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsxs)(i.p,{children:["For detailed information about component props, types, and method signatures, see the ",(0,e.jsx)(i.a,{href:"./?path=/docs/js-packages-charts-library-charts-bar-chart-api-reference--docs",children:"Bar Chart API Reference"}),"."]}),`
`,(0,e.jsx)(i.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(i.h3,{id:"simple-bar-chart",children:"Simple Bar Chart"}),`
`,(0,e.jsxs)(i.p,{children:["The simplest bar chart requires only a ",(0,e.jsx)(i.code,{children:"data"})," prop with categorical data:"]}),`
`,(0,e.jsx)(n.Hl,{of:a.SingleSeries}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
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
`,(0,e.jsx)(i.h3,{id:"required-props",children:"Required Props"}),`
`,(0,e.jsxs)(i.ul,{children:[`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:(0,e.jsx)(i.code,{children:"data"})}),": Array of series data, each containing ",(0,e.jsx)(i.code,{children:"label"}),", ",(0,e.jsx)(i.code,{children:"data"})," array, and optional ",(0,e.jsx)(i.code,{children:"options"})]}),`
`]}),`
`,(0,e.jsx)(i.h3,{id:"optional-props",children:"Optional Props"}),`
`,(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Layout & Dimensions:"})}),`
`,(0,e.jsxs)(i.ul,{children:[`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:(0,e.jsx)(i.code,{children:"width"})}),": Chart width in pixels. When omitted, fills parent container width"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:(0,e.jsx)(i.code,{children:"height"})}),": Chart height in pixels (defaults to 400). When omitted, fills parent container height"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:(0,e.jsx)(i.code,{children:"margin"})}),": Custom chart margins"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:(0,e.jsx)(i.code,{children:"aspectRatio"})}),": Height as a fraction of width (e.g., ",(0,e.jsx)(i.code,{children:"0.5"})," = 50% height). When omitted, fills parent container height"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:(0,e.jsx)(i.code,{children:"maxWidth"})}),": Maximum width constraint for responsive charts (default: ",(0,e.jsx)(i.code,{children:"1200"}),")"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:(0,e.jsx)(i.code,{children:"resizeDebounceTime"})}),": Debounce delay for resize events in ms (default: ",(0,e.jsx)(i.code,{children:"300"}),")"]}),`
`]}),`
`,(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Visual Styling:"})}),`
`,(0,e.jsxs)(i.ul,{children:[`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:(0,e.jsx)(i.code,{children:"orientation"})}),": Bar orientation (",(0,e.jsx)(i.code,{children:"'vertical'"})," or ",(0,e.jsx)(i.code,{children:"'horizontal'"}),", defaults to ",(0,e.jsx)(i.code,{children:"'vertical'"}),")"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:(0,e.jsx)(i.code,{children:"withPatterns"})}),": Use pattern fills instead of solid colors (",(0,e.jsx)(i.code,{children:"false"})," by default)"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:(0,e.jsx)(i.code,{children:"gridVisibility"})}),": Grid line visibility (",(0,e.jsx)(i.code,{children:"'x'"}),", ",(0,e.jsx)(i.code,{children:"'y'"}),", ",(0,e.jsx)(i.code,{children:"'xy'"}),", or ",(0,e.jsx)(i.code,{children:"'none'"}),")"]}),`
`]}),`
`,(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Interactivity:"})}),`
`,(0,e.jsxs)(i.ul,{children:[`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:(0,e.jsx)(i.code,{children:"withTooltips"})}),": Enable interactive tooltips (",(0,e.jsx)(i.code,{children:"false"})," by default)"]}),`
`]}),`
`,(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Legend:"})}),`
`,(0,e.jsxs)(i.ul,{children:[`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:(0,e.jsx)(i.code,{children:"showLegend"})}),": Display chart legend (",(0,e.jsx)(i.code,{children:"false"})," by default)"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:(0,e.jsx)(i.code,{children:"legend"})}),": Legend configuration object (",(0,e.jsx)(i.code,{children:"ChartLegendConfig"}),") for controlling orientation, position, alignment, shape, interactivity, and styling"]}),`
`]}),`
`,(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Advanced:"})}),`
`,(0,e.jsxs)(i.ul,{children:[`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:(0,e.jsx)(i.code,{children:"options"})}),": Advanced axis and scale configuration"]}),`
`]}),`
`,(0,e.jsx)(i.h2,{id:"chart-orientations",children:"Chart Orientations"}),`
`,(0,e.jsx)(i.h3,{id:"vertical-bars-default",children:"Vertical Bars (Default)"}),`
`,(0,e.jsx)(i.p,{children:"Standard vertical bar charts with categories on the x-axis and values on the y-axis:"}),`
`,(0,e.jsx)(n.Hl,{of:a.Default}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
	data={data}
	orientation="vertical"
	gridVisibility="x"
/>`}),`
`,(0,e.jsx)(i.h3,{id:"horizontal-bars",children:"Horizontal Bars"}),`
`,(0,e.jsx)(i.p,{children:"Horizontal bar charts with categories on the y-axis and values on the x-axis, ideal for long category names:"}),`
`,(0,e.jsx)(n.Hl,{of:a.HorizontalBarChart}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
	data={data}
	orientation="horizontal"
	gridVisibility="y"
/>`}),`
`,(0,e.jsx)(i.h2,{id:"multiple-series",children:"Multiple Series"}),`
`,(0,e.jsx)(i.h3,{id:"multi-series-charts",children:"Multi-Series Charts"}),`
`,(0,e.jsx)(i.p,{children:"Display multiple data series with automatic color differentiation and grouped bars:"}),`
`,(0,e.jsx)(n.Hl,{of:a.Default}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
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
`,(0,e.jsx)(i.h3,{id:"many-data-series",children:"Many Data Series"}),`
`,(0,e.jsxs)(i.p,{children:["The component handles large numbers of series gracefully with automatic color cycling. Use the ",(0,e.jsx)(i.code,{children:"seriesCount"})," control above to see how the chart handles many series:"]}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
	data={allCountriesData}
	withTooltips={true}
	showLegend={true}
/>`}),`
`,(0,e.jsx)(i.h2,{id:"visual-features",children:"Visual Features"}),`
`,(0,e.jsx)(i.h3,{id:"pattern-fills",children:"Pattern Fills"}),`
`,(0,e.jsx)(i.p,{children:"Add visual accessibility and distinction with pattern fills instead of solid colors:"}),`
`,(0,e.jsx)(n.Hl,{of:a.WithPatterns}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
	data={data}
	withPatterns={true}
	withTooltips={true}
/>`}),`
`,(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Pattern types automatically cycle through:"})}),`
`,(0,e.jsxs)(i.ul,{children:[`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Lines"}),": Diagonal line patterns"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Circles"}),": Circular dot patterns"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Waves"}),": Wave line patterns"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Hexagons"}),": Hexagonal patterns"]}),`
`]}),`
`,(0,e.jsx)(i.h3,{id:"smart-formatting",children:"Smart Formatting"}),`
`,(0,e.jsx)(i.p,{children:"Automatic formatting handles large numbers with appropriate abbreviations:"}),`
`,(0,e.jsx)(n.Hl,{of:a.SmartFormatting}),`
`,(0,e.jsx)(i.p,{children:"Values are automatically formatted as:"}),`
`,(0,e.jsxs)(i.ul,{children:[`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"1B and above"}),': "1.23B"']}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"1M and above"}),': "1.2M"']}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"1K and above"}),': "1k"']}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Below 1K"}),': "1,234"']}),`
`]}),`
`,(0,e.jsx)(i.h2,{id:"data-formats",children:"Data Formats"}),`
`,(0,e.jsx)(i.h3,{id:"time-series-data",children:"Time Series Data"}),`
`,(0,e.jsx)(i.p,{children:"Bar charts support both categorical labels and time-series data:"}),`
`,(0,e.jsx)(n.Hl,{of:a.TimeSeries}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`// Date objects
{ date: new Date('2024-01-01'), value: 2230 }

// Date strings (automatically parsed)
{ dateString: '2024-01-01', value: 2580 }
{ dateString: '2024-01-01 14:30:00', value: 3500 }

// Category labels
{ label: '2024', value: 126 }`}),`
`,(0,e.jsx)(i.h3,{id:"custom-axis-formatting",children:"Custom Axis Formatting"}),`
`,(0,e.jsx)(i.p,{children:"Configure custom formatting for time-series or numerical axes:"}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
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
`,(0,e.jsx)(i.h2,{id:"zero-value-display",children:"Zero Value Display"}),`
`,(0,e.jsx)(i.h3,{id:"visual-enhancement-for-zero-values",children:"Visual Enhancement for Zero Values"}),`
`,(0,e.jsxs)(i.p,{children:["By default, bars with zero values have no visual height, making them difficult to identify. The ",(0,e.jsx)(i.code,{children:"showZeroValues"})," feature provides better user experience by giving zero values a minimum visual height while preserving data integrity:"]}),`
`,(0,e.jsx)(n.Hl,{of:a.ZeroValueComparison}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
	data={dataWithZeros}
	showZeroValues={true}
	withTooltips={true}
/>`}),`
`,(0,e.jsx)(i.h2,{id:"error-handling",children:"Error Handling"}),`
`,(0,e.jsx)(i.p,{children:"The chart gracefully handles various error states and edge cases:"}),`
`,(0,e.jsx)(n.Hl,{of:a.ErrorStates}),`
`,(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Supported scenarios:"})}),`
`,(0,e.jsxs)(i.ul,{children:[`
`,(0,e.jsx)(i.li,{children:"Empty data arrays"}),`
`,(0,e.jsx)(i.li,{children:"Invalid data values (null, NaN, undefined)"}),`
`,(0,e.jsx)(i.li,{children:"Missing data properties"}),`
`,(0,e.jsx)(i.li,{children:"Invalid date formats"}),`
`,(0,e.jsx)(i.li,{children:"Single data points"}),`
`]}),`
`,(0,e.jsx)(i.h2,{id:"interactive-features",children:"Interactive Features"}),`
`,(0,e.jsx)(i.h3,{id:"tooltips",children:"Tooltips"}),`
`,(0,e.jsx)(i.p,{children:"Enable rich interactive tooltips that display detailed information on hover:"}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
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
`,(0,e.jsx)(i.h3,{id:"keyboard-navigation",children:"Keyboard Navigation"}),`
`,(0,e.jsx)(i.p,{children:"Charts are fully keyboard accessible:"}),`
`,(0,e.jsxs)(i.ul,{children:[`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Tab"}),": Focus the chart"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Arrow Keys"}),": Navigate between bars"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Enter/Space"}),": Activate tooltips"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Escape"}),": Close active tooltips"]}),`
`]}),`
`,(0,e.jsx)(i.h2,{id:"legends",children:"Legends"}),`
`,(0,e.jsxs)(i.p,{children:["Use the composition API to add a legend by placing ",(0,e.jsx)(i.code,{children:"<BarChart.Legend />"})," as a child:"]}),`
`,(0,e.jsx)(n.Hl,{of:a.WithCompositionLegend}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart data={data}>
	<BarChart.Legend />
</BarChart>`}),`
`,(0,e.jsxs)(i.p,{children:["For full legend configuration options \u2014 positioning, orientation, shapes, interactivity, and the composition API \u2014 see the ",(0,e.jsx)(i.a,{href:"./?path=/docs/js-packages-charts-library-components-legend--docs",children:"Legend component docs"}),"."]}),`
`,(0,e.jsx)(i.h2,{id:"theming-integration",children:"Theming Integration"}),`
`,(0,e.jsxs)(i.p,{children:["Bar Charts integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided. A custom theme can be provided by wrapping your chart in ",(0,e.jsx)(i.code,{children:"GlobalChartsProvider"})," and passing a custom theme object with the properties you want to override to the ",(0,e.jsx)(i.code,{children:"theme"})," prop:"]}),`
`,(0,e.jsx)(n.kL,{language:"tsx",code:`import { GlobalChartsProvider, BarChart, type ChartTheme } from '@automattic/charts';

const customTheme: ChartTheme = {
	colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'],
	gridColor: '#E0E0E0',
};

<GlobalChartsProvider theme={customTheme}>
	<BarChart data={data} />
</GlobalChartsProvider>`}),`
`,(0,e.jsx)(i.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,(0,e.jsxs)(i.p,{children:["By default, charts ",(0,e.jsx)(i.strong,{children:"fill their parent container's dimensions"}),". The parent must have an explicit height:"]}),`
`,(0,e.jsx)(n.Hl,{of:a.Default}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`// Fill parent container (default) - parent needs explicit height
<div style={{ width: '100%', height: '400px' }}>
	<BarChart data={data} />
</div>

// Use aspect ratio - height calculated from width
<div style={{ width: '100%' }}>
	<BarChart data={data} aspectRatio={0.5} />
</div>

// Fixed dimensions
<BarChart data={data} width={800} height={400} />`}),`
`,(0,e.jsxs)(i.p,{children:["For more details on responsive behavior, see the ",(0,e.jsx)(i.a,{href:"./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design",children:"Responsive Design section"})," in the introduction."]}),`
`,(0,e.jsx)(i.h2,{id:"animation",children:"Animation"}),`
`,(0,e.jsx)(i.p,{children:"The Bar Chart component supports an optional entry animation that creates a smooth reveal effect when the chart first renders:"}),`
`,(0,e.jsx)(n.Hl,{of:a.Animation}),`
`,(0,e.jsx)(n.kL,{language:"tsx",code:`<BarChart
	data={ data }
	width={ 800 }
	height={ 400 }
	animation={ true }
/>`}),`
`,(0,e.jsx)(i.h3,{id:"animation-behavior",children:"Animation Behavior"}),`
`,(0,e.jsxs)(i.ul,{children:[`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Opt-in"}),": Animation is disabled by default and must be explicitly enabled with the ",(0,e.jsx)(i.code,{children:"animation"})," prop"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Accessibility"}),": Automatically respects the user's ",(0,e.jsx)(i.code,{children:"prefers-reduced-motion"})," system setting - animation will not play for users who prefer reduced motion"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Effect"}),": Creates a growing effect where bars scale from zero to their full size. Vertical bars rise from the bottom, while horizontal bars stretch from the left"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Duration"}),": 1000ms (1 second) with ease-out timing"]}),`
`]}),`
`,(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Note"}),": The animation plays once when the chart initially renders and does not repeat."]}),`
`,(0,e.jsx)(i.h2,{id:"advanced-customization",children:"Advanced Customization"}),`
`,(0,e.jsx)(i.h3,{id:"grid-configuration",children:"Grid Configuration"}),`
`,(0,e.jsx)(i.p,{children:"Control grid line visibility and appearance:"}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`// Show only horizontal grid lines (default for vertical bars)
<BarChart data={data} gridVisibility="x" />

// Show only vertical grid lines (default for horizontal bars)
<BarChart data={data} gridVisibility="y" />

// Show both grid lines
<BarChart data={data} gridVisibility="xy" />

// Hide all grid lines
<BarChart data={data} gridVisibility="none" />`}),`
`,(0,e.jsx)(i.h3,{id:"custom-margins",children:"Custom Margins"}),`
`,(0,e.jsx)(i.p,{children:"Control chart layout with precise margin settings:"}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
	data={data}
	margin={{
		top: 20,
		right: 60,
		bottom: 80,
		left: 80
	}}
/>`}),`
`,(0,e.jsx)(i.h3,{id:"scale-and-axis-configuration",children:"Scale and Axis Configuration"}),`
`,(0,e.jsx)(i.p,{children:"Advanced configuration for scales and axes:"}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
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
`,(0,e.jsx)(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,(0,e.jsx)(i.h3,{id:"keyboard-navigation-1",children:"Keyboard Navigation"}),`
`,(0,e.jsxs)(i.ul,{children:[`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Tab"}),": Focus the chart container"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Arrow Keys"}),": Navigate between individual bars"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Enter/Space"}),": Activate tooltips or interactive elements"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Escape"}),": Close active tooltips"]}),`
`]}),`
`,(0,e.jsx)(i.h3,{id:"screen-reader-support",children:"Screen Reader Support"}),`
`,(0,e.jsxs)(i.ul,{children:[`
`,(0,e.jsxs)(i.li,{children:["Chart container has ",(0,e.jsx)(i.code,{children:'role="grid"'})," with descriptive ",(0,e.jsx)(i.code,{children:"aria-label"})]}),`
`,(0,e.jsx)(i.li,{children:"Individual bars are navigable and announced with their values"}),`
`,(0,e.jsx)(i.li,{children:"Interactive elements have appropriate ARIA attributes"}),`
`,(0,e.jsxs)(i.li,{children:["Color information is supplemented with patterns when ",(0,e.jsx)(i.code,{children:"withPatterns"})," is enabled"]}),`
`]}),`
`,(0,e.jsx)(i.h3,{id:"focus-management",children:"Focus Management"}),`
`,(0,e.jsxs)(i.ul,{children:[`
`,(0,e.jsx)(i.li,{children:"Clear visual focus indicators on chart and individual bars"}),`
`,(0,e.jsx)(i.li,{children:"Logical tab order through interactive elements"}),`
`,(0,e.jsx)(i.li,{children:"Focus restoration after modal interactions"}),`
`]})]})}function d(s={}){const{wrapper:i}={...(0,l.R)(),...s.components};return i?(0,e.jsx)(i,{...s,children:(0,e.jsx)(o,{...s})}):o(s)}}}]);
