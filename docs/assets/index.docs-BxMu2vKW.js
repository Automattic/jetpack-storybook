import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-GmyBfqKJ.js";import{r as n}from"./react-BXELr6Q8.js";import{t as r}from"./mdx-react-shim-C3gyKLQ8.js";import{i,n as a,r as o,t as s}from"./blocks-DDUwMAON.js";import{Animation as c,Default as l,ErrorStates as u,HorizontalBarChart as d,SingleSeries as f,SmartFormatting as p,TimeSeries as m,WithCompositionLegend as h,WithPatterns as g,ZeroValueComparison as _,n as v,t as y}from"./index.stories-C_mLX_-C.js";function b(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a,{title:`JS Packages/Charts Library/Charts/Bar Chart`,of:y}),`
`,(0,S.jsx)(t.h1,{id:`bar-chart`,children:`Bar Chart`}),`
`,(0,S.jsx)(t.p,{children:`Bar Charts visualize categorical data using rectangular bars with heights or lengths proportional to the values they represent. They excel at comparing values across categories, showing distributions, and highlighting differences in data sets.`}),`
`,(0,S.jsx)(s,{of:l}),`
`,(0,S.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,S.jsxs)(t.p,{children:[`The Bar Chart component provides a flexible, accessible, and highly customizable solution for displaying categorical data. Built on `,(0,S.jsx)(t.code,{children:`@visx/xychart`}),`, it supports multiple data series, both vertical and horizontal orientations, interactive tooltips, legends, and advanced visual features like pattern fills:`]}),`
`,(0,S.jsx)(o,{language:`jsx`,code:`import { BarChart } from '@automattic/charts';
import '@automattic/charts/style.css';

<BarChart
	data={ data }
	orientation="vertical"
	withTooltips={ true }
	showLegend={ true }
/>`}),`
`,(0,S.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,S.jsxs)(t.p,{children:[`For detailed information about component props, types, and method signatures, see the `,(0,S.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-bar-chart-api-reference--docs`,children:`Bar Chart API Reference`}),`.`]}),`
`,(0,S.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,S.jsx)(t.h3,{id:`simple-bar-chart`,children:`Simple Bar Chart`}),`
`,(0,S.jsxs)(t.p,{children:[`The simplest bar chart requires only a `,(0,S.jsx)(t.code,{children:`data`}),` prop with categorical data:`]}),`
`,(0,S.jsx)(s,{of:f}),`
`,(0,S.jsx)(o,{language:`jsx`,code:`<BarChart
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
`,(0,S.jsx)(t.h3,{id:`required-props`,children:`Required Props`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`data`})}),`: Array of series data, each containing `,(0,S.jsx)(t.code,{children:`label`}),`, `,(0,S.jsx)(t.code,{children:`data`}),` array, and optional `,(0,S.jsx)(t.code,{children:`options`})]}),`
`]}),`
`,(0,S.jsx)(t.h3,{id:`optional-props`,children:`Optional Props`}),`
`,(0,S.jsx)(t.p,{children:(0,S.jsx)(t.strong,{children:`Layout & Dimensions:`})}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`width`})}),`: Chart width in pixels. When omitted, fills parent container width`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`height`})}),`: Chart height in pixels (defaults to 400). When omitted, fills parent container height`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`margin`})}),`: Custom chart margins`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`aspectRatio`})}),`: Height as a fraction of width (e.g., `,(0,S.jsx)(t.code,{children:`0.5`}),` = 50% height). When omitted, fills parent container height`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`maxWidth`})}),`: Maximum width constraint for responsive charts (default: `,(0,S.jsx)(t.code,{children:`1200`}),`)`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`resizeDebounceTime`})}),`: Debounce delay for resize events in ms (default: `,(0,S.jsx)(t.code,{children:`300`}),`)`]}),`
`]}),`
`,(0,S.jsx)(t.p,{children:(0,S.jsx)(t.strong,{children:`Visual Styling:`})}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`orientation`})}),`: Bar orientation (`,(0,S.jsx)(t.code,{children:`'vertical'`}),` or `,(0,S.jsx)(t.code,{children:`'horizontal'`}),`, defaults to `,(0,S.jsx)(t.code,{children:`'vertical'`}),`)`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`withPatterns`})}),`: Use pattern fills instead of solid colors (`,(0,S.jsx)(t.code,{children:`false`}),` by default)`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`gridVisibility`})}),`: Grid line visibility (`,(0,S.jsx)(t.code,{children:`'x'`}),`, `,(0,S.jsx)(t.code,{children:`'y'`}),`, `,(0,S.jsx)(t.code,{children:`'xy'`}),`, or `,(0,S.jsx)(t.code,{children:`'none'`}),`)`]}),`
`]}),`
`,(0,S.jsx)(t.p,{children:(0,S.jsx)(t.strong,{children:`Interactivity:`})}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`withTooltips`})}),`: Enable interactive tooltips (`,(0,S.jsx)(t.code,{children:`false`}),` by default)`]}),`
`]}),`
`,(0,S.jsx)(t.p,{children:(0,S.jsx)(t.strong,{children:`Legend:`})}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`showLegend`})}),`: Display chart legend (`,(0,S.jsx)(t.code,{children:`false`}),` by default)`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`legend`})}),`: Legend configuration object (`,(0,S.jsx)(t.code,{children:`ChartLegendConfig`}),`) for controlling orientation, position, alignment, shape, interactivity, and styling`]}),`
`]}),`
`,(0,S.jsx)(t.p,{children:(0,S.jsx)(t.strong,{children:`Advanced:`})}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`options`})}),`: Advanced axis and scale configuration`]}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`chart-orientations`,children:`Chart Orientations`}),`
`,(0,S.jsx)(t.h3,{id:`vertical-bars-default`,children:`Vertical Bars (Default)`}),`
`,(0,S.jsx)(t.p,{children:`Standard vertical bar charts with categories on the x-axis and values on the y-axis:`}),`
`,(0,S.jsx)(s,{of:l}),`
`,(0,S.jsx)(o,{language:`jsx`,code:`<BarChart
	data={data}
	orientation="vertical"
	gridVisibility="x"
/>`}),`
`,(0,S.jsx)(t.h3,{id:`horizontal-bars`,children:`Horizontal Bars`}),`
`,(0,S.jsx)(t.p,{children:`Horizontal bar charts with categories on the y-axis and values on the x-axis, ideal for long category names:`}),`
`,(0,S.jsx)(s,{of:d}),`
`,(0,S.jsx)(o,{language:`jsx`,code:`<BarChart
	data={data}
	orientation="horizontal"
	gridVisibility="y"
/>`}),`
`,(0,S.jsx)(t.h2,{id:`multiple-series`,children:`Multiple Series`}),`
`,(0,S.jsx)(t.h3,{id:`multi-series-charts`,children:`Multi-Series Charts`}),`
`,(0,S.jsx)(t.p,{children:`Display multiple data series with automatic color differentiation and grouped bars:`}),`
`,(0,S.jsx)(s,{of:l}),`
`,(0,S.jsx)(o,{language:`jsx`,code:`<BarChart
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
`,(0,S.jsx)(t.h3,{id:`many-data-series`,children:`Many Data Series`}),`
`,(0,S.jsxs)(t.p,{children:[`The component handles large numbers of series gracefully with automatic color cycling. Use the `,(0,S.jsx)(t.code,{children:`seriesCount`}),` control above to see how the chart handles many series:`]}),`
`,(0,S.jsx)(o,{language:`jsx`,code:`<BarChart
	data={allCountriesData}
	withTooltips={true}
	showLegend={true}
/>`}),`
`,(0,S.jsx)(t.h2,{id:`visual-features`,children:`Visual Features`}),`
`,(0,S.jsx)(t.h3,{id:`pattern-fills`,children:`Pattern Fills`}),`
`,(0,S.jsx)(t.p,{children:`Add visual accessibility and distinction with pattern fills instead of solid colors:`}),`
`,(0,S.jsx)(s,{of:g}),`
`,(0,S.jsx)(o,{language:`jsx`,code:`<BarChart
	data={data}
	withPatterns={true}
	withTooltips={true}
/>`}),`
`,(0,S.jsx)(t.p,{children:(0,S.jsx)(t.strong,{children:`Pattern types automatically cycle through:`})}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Lines`}),`: Diagonal line patterns`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Circles`}),`: Circular dot patterns`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Waves`}),`: Wave line patterns`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Hexagons`}),`: Hexagonal patterns`]}),`
`]}),`
`,(0,S.jsx)(t.h3,{id:`smart-formatting`,children:`Smart Formatting`}),`
`,(0,S.jsx)(t.p,{children:`Automatic formatting handles large numbers with appropriate abbreviations:`}),`
`,(0,S.jsx)(s,{of:p}),`
`,(0,S.jsx)(t.p,{children:`Values are automatically formatted as:`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`1B and above`}),`: "1.23B"`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`1M and above`}),`: "1.2M"`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`1K and above`}),`: "1k"`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Below 1K`}),`: "1,234"`]}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`data-formats`,children:`Data Formats`}),`
`,(0,S.jsx)(t.h3,{id:`time-series-data`,children:`Time Series Data`}),`
`,(0,S.jsx)(t.p,{children:`Bar charts support both categorical labels and time-series data:`}),`
`,(0,S.jsx)(s,{of:m}),`
`,(0,S.jsx)(o,{language:`jsx`,code:`// Date objects
{ date: new Date('2024-01-01'), value: 2230 }

// Date strings (automatically parsed)
{ dateString: '2024-01-01', value: 2580 }
{ dateString: '2024-01-01 14:30:00', value: 3500 }

// Category labels
{ label: '2024', value: 126 }`}),`
`,(0,S.jsx)(t.h3,{id:`custom-axis-formatting`,children:`Custom Axis Formatting`}),`
`,(0,S.jsx)(t.p,{children:`Configure custom formatting for time-series or numerical axes:`}),`
`,(0,S.jsx)(o,{language:`jsx`,code:`<BarChart
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
`,(0,S.jsx)(t.h2,{id:`zero-value-display`,children:`Zero Value Display`}),`
`,(0,S.jsx)(t.h3,{id:`visual-enhancement-for-zero-values`,children:`Visual Enhancement for Zero Values`}),`
`,(0,S.jsxs)(t.p,{children:[`By default, bars with zero values have no visual height, making them difficult to identify. The `,(0,S.jsx)(t.code,{children:`showZeroValues`}),` feature provides better user experience by giving zero values a minimum visual height while preserving data integrity:`]}),`
`,(0,S.jsx)(s,{of:_}),`
`,(0,S.jsx)(o,{language:`jsx`,code:`<BarChart
	data={dataWithZeros}
	showZeroValues={true}
	withTooltips={true}
/>`}),`
`,(0,S.jsx)(t.h2,{id:`error-handling`,children:`Error Handling`}),`
`,(0,S.jsx)(t.p,{children:`The chart gracefully handles various error states and edge cases:`}),`
`,(0,S.jsx)(s,{of:u}),`
`,(0,S.jsx)(t.p,{children:(0,S.jsx)(t.strong,{children:`Supported scenarios:`})}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsx)(t.li,{children:`Empty data arrays`}),`
`,(0,S.jsx)(t.li,{children:`Invalid data values (null, NaN, undefined)`}),`
`,(0,S.jsx)(t.li,{children:`Missing data properties`}),`
`,(0,S.jsx)(t.li,{children:`Invalid date formats`}),`
`,(0,S.jsx)(t.li,{children:`Single data points`}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`interactive-features`,children:`Interactive Features`}),`
`,(0,S.jsx)(t.h3,{id:`tooltips`,children:`Tooltips`}),`
`,(0,S.jsx)(t.p,{children:`Enable rich interactive tooltips that display detailed information on hover:`}),`
`,(0,S.jsx)(o,{language:`jsx`,code:`<BarChart
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
`,(0,S.jsx)(t.h3,{id:`keyboard-navigation`,children:`Keyboard Navigation`}),`
`,(0,S.jsx)(t.p,{children:`Charts are fully keyboard accessible:`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Tab`}),`: Focus the chart`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Arrow Keys`}),`: Navigate between bars`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Enter/Space`}),`: Activate tooltips`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Escape`}),`: Close active tooltips`]}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`legends`,children:`Legends`}),`
`,(0,S.jsxs)(t.p,{children:[`Use the composition API to add a legend by placing `,(0,S.jsx)(t.code,{children:`<BarChart.Legend />`}),` as a child:`]}),`
`,(0,S.jsx)(s,{of:h}),`
`,(0,S.jsx)(o,{language:`jsx`,code:`<BarChart data={data}>
	<BarChart.Legend />
</BarChart>`}),`
`,(0,S.jsxs)(t.p,{children:[`For full legend configuration options — positioning, orientation, shapes, interactivity, and the composition API — see the `,(0,S.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-components-legend--docs`,children:`Legend component docs`}),`.`]}),`
`,(0,S.jsx)(t.h2,{id:`theming-integration`,children:`Theming Integration`}),`
`,(0,S.jsxs)(t.p,{children:[`Bar Charts integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided. A custom theme can be provided by wrapping your chart in `,(0,S.jsx)(t.code,{children:`GlobalChartsProvider`}),` and passing a custom theme object with the properties you want to override to the `,(0,S.jsx)(t.code,{children:`theme`}),` prop:`]}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`import { GlobalChartsProvider, BarChart, type ChartTheme } from '@automattic/charts';

const customTheme: ChartTheme = {
	colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'],
	gridColor: '#E0E0E0',
};

<GlobalChartsProvider theme={customTheme}>
	<BarChart data={data} />
</GlobalChartsProvider>`}),`
`,(0,S.jsx)(t.h2,{id:`responsive-behavior`,children:`Responsive Behavior`}),`
`,(0,S.jsxs)(t.p,{children:[`By default, charts `,(0,S.jsx)(t.strong,{children:`fill their parent container's dimensions`}),`. The parent must have an explicit height:`]}),`
`,(0,S.jsx)(s,{of:l}),`
`,(0,S.jsx)(o,{language:`jsx`,code:`// Fill parent container (default) - parent needs explicit height
<div style={{ width: '100%', height: '400px' }}>
	<BarChart data={data} />
</div>

// Use aspect ratio - height calculated from width
<div style={{ width: '100%' }}>
	<BarChart data={data} aspectRatio={0.5} />
</div>

// Fixed dimensions
<BarChart data={data} width={800} height={400} />`}),`
`,(0,S.jsxs)(t.p,{children:[`For more details on responsive behavior, see the `,(0,S.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design`,children:`Responsive Design section`}),` in the introduction.`]}),`
`,(0,S.jsx)(t.h2,{id:`animation`,children:`Animation`}),`
`,(0,S.jsx)(t.p,{children:`The Bar Chart component supports an optional entry animation that creates a smooth reveal effect when the chart first renders:`}),`
`,(0,S.jsx)(s,{of:c}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`<BarChart
	data={ data }
	width={ 800 }
	height={ 400 }
	animation={ true }
/>`}),`
`,(0,S.jsx)(t.h3,{id:`animation-behavior`,children:`Animation Behavior`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Opt-in`}),`: Animation is disabled by default and must be explicitly enabled with the `,(0,S.jsx)(t.code,{children:`animation`}),` prop`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Accessibility`}),`: Automatically respects the user's `,(0,S.jsx)(t.code,{children:`prefers-reduced-motion`}),` system setting - animation will not play for users who prefer reduced motion`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Effect`}),`: Creates a growing effect where bars scale from zero to their full size. Vertical bars rise from the bottom, while horizontal bars stretch from the left`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Duration`}),`: 1000ms (1 second) with ease-out timing`]}),`
`]}),`
`,(0,S.jsxs)(t.p,{children:[(0,S.jsx)(t.strong,{children:`Note`}),`: The animation plays once when the chart initially renders and does not repeat.`]}),`
`,(0,S.jsx)(t.h2,{id:`advanced-customization`,children:`Advanced Customization`}),`
`,(0,S.jsx)(t.h3,{id:`grid-configuration`,children:`Grid Configuration`}),`
`,(0,S.jsx)(t.p,{children:`Control grid line visibility and appearance:`}),`
`,(0,S.jsx)(o,{language:`jsx`,code:`// Show only horizontal grid lines (default for vertical bars)
<BarChart data={data} gridVisibility="x" />

// Show only vertical grid lines (default for horizontal bars)
<BarChart data={data} gridVisibility="y" />

// Show both grid lines
<BarChart data={data} gridVisibility="xy" />

// Hide all grid lines
<BarChart data={data} gridVisibility="none" />`}),`
`,(0,S.jsx)(t.h3,{id:`custom-margins`,children:`Custom Margins`}),`
`,(0,S.jsx)(t.p,{children:`Control chart layout with precise margin settings:`}),`
`,(0,S.jsx)(o,{language:`jsx`,code:`<BarChart
	data={data}
	margin={{
		top: 20,
		right: 60,
		bottom: 80,
		left: 80
	}}
/>`}),`
`,(0,S.jsx)(t.h3,{id:`scale-and-axis-configuration`,children:`Scale and Axis Configuration`}),`
`,(0,S.jsx)(t.p,{children:`Advanced configuration for scales and axes:`}),`
`,(0,S.jsx)(o,{language:`jsx`,code:`<BarChart
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
`,(0,S.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,S.jsx)(t.h3,{id:`keyboard-navigation-1`,children:`Keyboard Navigation`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Tab`}),`: Focus the chart container`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Arrow Keys`}),`: Navigate between individual bars`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Enter/Space`}),`: Activate tooltips or interactive elements`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Escape`}),`: Close active tooltips`]}),`
`]}),`
`,(0,S.jsx)(t.h3,{id:`screen-reader-support`,children:`Screen Reader Support`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[`Chart container has `,(0,S.jsx)(t.code,{children:`role="grid"`}),` with descriptive `,(0,S.jsx)(t.code,{children:`aria-label`})]}),`
`,(0,S.jsx)(t.li,{children:`Individual bars are navigable and announced with their values`}),`
`,(0,S.jsx)(t.li,{children:`Interactive elements have appropriate ARIA attributes`}),`
`,(0,S.jsxs)(t.li,{children:[`Color information is supplemented with patterns when `,(0,S.jsx)(t.code,{children:`withPatterns`}),` is enabled`]}),`
`]}),`
`,(0,S.jsx)(t.h3,{id:`focus-management`,children:`Focus Management`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsx)(t.li,{children:`Clear visual focus indicators on chart and individual bars`}),`
`,(0,S.jsx)(t.li,{children:`Logical tab order through interactive elements`}),`
`,(0,S.jsx)(t.li,{children:`Focus restoration after modal interactions`}),`
`]})]})}function x(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;e((()=>{S=t(),r(),i(),v()}))();export{x as default};