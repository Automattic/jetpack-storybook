import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{bt as n}from"./esm-BJIuaVLL.js";import{i as r,n as i,r as a,t as o}from"./blocks-DR0RgJw4.js";import{t as s}from"./mdx-react-shim-CR4luNLz.js";import{Animation as c,ComparisonMulti as l,ComparisonSingle as u,Default as d,ErrorStates as f,HorizontalBarChart as p,SingleSeries as m,SmartFormatting as h,TimeAxisTickFormats as g,TimeAxisTickResolution as _,TimeSeries as v,WithCompositionLegend as y,WithPatterns as b,ZeroValueComparison as x,n as S,t as C}from"./index.stories-DPOqcHVQ.js";function w(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(i,{title:`JS Packages/Charts Library/Charts/Bar Chart`,of:C}),`
`,(0,E.jsx)(t.h1,{id:`bar-chart`,children:`Bar Chart`}),`
`,(0,E.jsx)(t.p,{children:`Bar Charts visualize categorical data using rectangular bars with heights or lengths proportional to the values they represent. They excel at comparing values across categories, showing distributions, and highlighting differences in data sets.`}),`
`,(0,E.jsx)(o,{of:d}),`
`,(0,E.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,E.jsxs)(t.p,{children:[`The Bar Chart component provides a flexible, accessible, and highly customizable solution for displaying categorical data. Built on `,(0,E.jsx)(t.code,{children:`@visx/xychart`}),`, it supports multiple data series, both vertical and horizontal orientations, interactive tooltips, legends, and advanced visual features like pattern fills:`]}),`
`,(0,E.jsx)(a,{language:`jsx`,code:`import { BarChart } from '@automattic/charts';
import '@automattic/charts/style.css';

<BarChart
	data={ data }
	orientation="vertical"
	withTooltips={ true }
	showLegend={ true }
/>`}),`
`,(0,E.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,E.jsxs)(t.p,{children:[`For detailed information about component props, types, and method signatures, see the `,(0,E.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-bar-chart-api-reference--docs`,children:`Bar Chart API Reference`}),`.`]}),`
`,(0,E.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,E.jsx)(t.h3,{id:`simple-bar-chart`,children:`Simple Bar Chart`}),`
`,(0,E.jsxs)(t.p,{children:[`The simplest bar chart requires only a `,(0,E.jsx)(t.code,{children:`data`}),` prop with categorical data:`]}),`
`,(0,E.jsx)(o,{of:m}),`
`,(0,E.jsx)(a,{language:`jsx`,code:`<BarChart
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
`,(0,E.jsx)(t.h3,{id:`required-props`,children:`Required Props`}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:(0,E.jsx)(t.code,{children:`data`})}),`: Array of series data, each containing `,(0,E.jsx)(t.code,{children:`label`}),`, `,(0,E.jsx)(t.code,{children:`data`}),` array, and optional `,(0,E.jsx)(t.code,{children:`options`})]}),`
`]}),`
`,(0,E.jsx)(t.h3,{id:`optional-props`,children:`Optional Props`}),`
`,(0,E.jsx)(t.p,{children:(0,E.jsx)(t.strong,{children:`Layout & Dimensions:`})}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:(0,E.jsx)(t.code,{children:`width`})}),`: Chart width in pixels. When omitted, fills parent container width`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:(0,E.jsx)(t.code,{children:`height`})}),`: Chart height in pixels (defaults to 400). When omitted, fills parent container height`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:(0,E.jsx)(t.code,{children:`margin`})}),`: Custom chart margins`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:(0,E.jsx)(t.code,{children:`aspectRatio`})}),`: Height-to-width ratio (e.g. `,(0,E.jsx)(t.code,{children:`0.5`}),`) for responsive charts; the chart is contained within its parent on both axes. When omitted, fills the parent container's height`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:(0,E.jsx)(t.code,{children:`maxWidth`})}),`: Maximum width constraint for responsive charts (default: `,(0,E.jsx)(t.code,{children:`1200`}),`)`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:(0,E.jsx)(t.code,{children:`resizeDebounceTime`})}),`: Debounce delay for resize events in ms (default: `,(0,E.jsx)(t.code,{children:`300`}),`)`]}),`
`]}),`
`,(0,E.jsx)(t.p,{children:(0,E.jsx)(t.strong,{children:`Visual Styling:`})}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:(0,E.jsx)(t.code,{children:`orientation`})}),`: Bar orientation (`,(0,E.jsx)(t.code,{children:`'vertical'`}),` or `,(0,E.jsx)(t.code,{children:`'horizontal'`}),`, defaults to `,(0,E.jsx)(t.code,{children:`'vertical'`}),`)`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:(0,E.jsx)(t.code,{children:`withPatterns`})}),`: Use pattern fills instead of solid colors (`,(0,E.jsx)(t.code,{children:`false`}),` by default)`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:(0,E.jsx)(t.code,{children:`gridVisibility`})}),`: Grid line visibility (`,(0,E.jsx)(t.code,{children:`'x'`}),`, `,(0,E.jsx)(t.code,{children:`'y'`}),`, `,(0,E.jsx)(t.code,{children:`'xy'`}),`, or `,(0,E.jsx)(t.code,{children:`'none'`}),`)`]}),`
`]}),`
`,(0,E.jsx)(t.p,{children:(0,E.jsx)(t.strong,{children:`Interactivity:`})}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:(0,E.jsx)(t.code,{children:`withTooltips`})}),`: Enable interactive tooltips (`,(0,E.jsx)(t.code,{children:`false`}),` by default)`]}),`
`]}),`
`,(0,E.jsx)(t.p,{children:(0,E.jsx)(t.strong,{children:`Legend:`})}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:(0,E.jsx)(t.code,{children:`showLegend`})}),`: Display chart legend (`,(0,E.jsx)(t.code,{children:`false`}),` by default)`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:(0,E.jsx)(t.code,{children:`legend`})}),`: Legend configuration object (`,(0,E.jsx)(t.code,{children:`ChartLegendConfig`}),`) for controlling orientation, position, alignment, shape, interactivity, and styling`]}),`
`]}),`
`,(0,E.jsx)(t.p,{children:(0,E.jsx)(t.strong,{children:`Advanced:`})}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:(0,E.jsx)(t.code,{children:`options`})}),`: Advanced axis and scale configuration`]}),`
`]}),`
`,(0,E.jsx)(t.h2,{id:`chart-orientations`,children:`Chart Orientations`}),`
`,(0,E.jsx)(t.h3,{id:`vertical-bars-default`,children:`Vertical Bars (Default)`}),`
`,(0,E.jsx)(t.p,{children:`Standard vertical bar charts with categories on the x-axis and values on the y-axis:`}),`
`,(0,E.jsx)(o,{of:d}),`
`,(0,E.jsx)(a,{language:`jsx`,code:`<BarChart
	data={data}
	orientation="vertical"
	gridVisibility="x"
/>`}),`
`,(0,E.jsx)(t.h3,{id:`horizontal-bars`,children:`Horizontal Bars`}),`
`,(0,E.jsx)(t.p,{children:`Horizontal bar charts with categories on the y-axis and values on the x-axis, ideal for long category names:`}),`
`,(0,E.jsx)(o,{of:p}),`
`,(0,E.jsx)(a,{language:`jsx`,code:`<BarChart
	data={data}
	orientation="horizontal"
	gridVisibility="y"
/>`}),`
`,(0,E.jsx)(t.h2,{id:`multiple-series`,children:`Multiple Series`}),`
`,(0,E.jsx)(t.h3,{id:`multi-series-charts`,children:`Multi-Series Charts`}),`
`,(0,E.jsx)(t.p,{children:`Display multiple data series with automatic color differentiation and grouped bars:`}),`
`,(0,E.jsx)(o,{of:d}),`
`,(0,E.jsx)(a,{language:`jsx`,code:`<BarChart
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
`,(0,E.jsx)(t.h3,{id:`many-data-series`,children:`Many Data Series`}),`
`,(0,E.jsxs)(t.p,{children:[`The component handles large numbers of series gracefully with automatic color cycling. Use the `,(0,E.jsx)(t.code,{children:`seriesCount`}),` control above to see how the chart handles many series:`]}),`
`,(0,E.jsx)(a,{language:`jsx`,code:`<BarChart
	data={allCountriesData}
	withTooltips={true}
	showLegend={true}
/>`}),`
`,(0,E.jsx)(t.h2,{id:`comparison-mode`,children:`Comparison Mode`}),`
`,(0,E.jsxs)(t.p,{children:[`Add a comparison series — for example "this period vs. previous period" — by giving a series `,(0,E.jsx)(t.code,{children:`options.type: 'comparison'`}),`. It renders as a translucent "shadow" bar centered `,(0,E.jsx)(t.strong,{children:`behind`}),` the primary series that shares its `,(0,E.jsx)(t.code,{children:`group`}),`. The shadow is wider than the primary bar (the primary is narrowed) so it peeks on each side and above, while a small gap is kept between series and a larger gap between ticks.`]}),`
`,(0,E.jsx)(o,{of:u}),`
`,(0,E.jsx)(a,{language:`jsx`,code:`<BarChart
	data={[
		{
			label: 'This period',
			group: 'views',
			data: thisPeriod,
		},
		{
			label: 'Previous period',
			group: 'views',
			options: { type: 'comparison' },
			data: previousPeriod,
		},
	]}
	showLegend={true}
/>`}),`
`,(0,E.jsxs)(t.p,{children:[`It composes with grouped bars: pair each primary series with its own `,(0,E.jsx)(t.code,{children:`type: 'comparison'`}),` series of the same `,(0,E.jsx)(t.code,{children:`group`}),`, and the groups render side by side, each with its own shadow.`]}),`
`,(0,E.jsx)(o,{of:l}),`
`,(0,E.jsx)(t.p,{children:(0,E.jsx)(t.strong,{children:`Notes:`})}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsxs)(t.li,{children:[`A comparison series pairs with the primary series that shares its `,(0,E.jsx)(t.code,{children:`group`}),` (when there is a single primary series, `,(0,E.jsx)(t.code,{children:`group`}),` can be omitted on both).`]}),`
`,(0,E.jsx)(t.li,{children:`Comparison values are included in the value-axis domain, so a previous period taller than the current one is never clipped.`}),`
`,(0,E.jsxs)(t.li,{children:[`Comparison series must reuse the primary series' category keys (the `,(0,E.jsx)(t.code,{children:`label`}),`/`,(0,E.jsx)(t.code,{children:`date`}),` of each point) so each shadow lines up with its primary bar.`]}),`
`,(0,E.jsx)(t.li,{children:`The comparison shadow isn't a separate hover/keyboard target (the primary bar drives interaction), but the tooltip shows both the current and previous period values for the hovered category.`}),`
`,(0,E.jsxs)(t.li,{children:[`Each series gets its own legend item by default. Set `,(0,E.jsx)(t.code,{children:`legend.collapseGroups`}),` to render one item per group, labelled by its primary series; combined with `,(0,E.jsx)(t.code,{children:`legend.interactive`}),`, clicking that item toggles the primary and its previous-period series together. When every series is hidden, the axes are dropped and only the empty state is shown.`]}),`
`,(0,E.jsxs)(t.li,{children:[`Collapsing the legend requires the primary and its comparison series to share a `,(0,E.jsx)(t.code,{children:`group`}),`. This is stricter than the bars themselves: rendering pairs a comparison with the sole primary even when `,(0,E.jsx)(t.code,{children:`group`}),` is omitted, but the legend has no single-primary fallback, so without a shared `,(0,E.jsx)(t.code,{children:`group`}),` the pair keeps separate legend items.`]}),`
`,(0,E.jsxs)(t.li,{children:[`With pattern fills enabled (`,(0,E.jsx)(t.code,{children:`withPatterns`}),`), the comparison shadow reuses its primary bar's pattern at the same reduced opacity, so the pair reads as one series.`]}),`
`,(0,E.jsxs)(t.li,{children:[`Styling comes from the theme at `,(0,E.jsx)(t.code,{children:`barChart.barStyles.comparison`}),`. `,(0,E.jsx)(t.code,{children:`widthFactor`}),` (default `,(0,E.jsx)(t.code,{children:`1.5`}),`) controls how much wider the comparison bar is than the primary — the primary is narrowed to `,(0,E.jsx)(t.code,{children:`1 / widthFactor`}),` of the slot — and `,(0,E.jsx)(t.code,{children:`opacity`}),` (default `,(0,E.jsx)(t.code,{children:`0.5`}),`) sets the shadow translucency.`]}),`
`]}),`
`,(0,E.jsx)(t.h2,{id:`visual-features`,children:`Visual Features`}),`
`,(0,E.jsx)(t.h3,{id:`pattern-fills`,children:`Pattern Fills`}),`
`,(0,E.jsx)(t.p,{children:`Add visual accessibility and distinction with pattern fills instead of solid colors:`}),`
`,(0,E.jsx)(o,{of:b}),`
`,(0,E.jsx)(a,{language:`jsx`,code:`<BarChart
	data={data}
	withPatterns={true}
	withTooltips={true}
/>`}),`
`,(0,E.jsx)(t.p,{children:(0,E.jsx)(t.strong,{children:`Pattern types automatically cycle through:`})}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:`Lines`}),`: Diagonal line patterns`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:`Circles`}),`: Circular dot patterns`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:`Waves`}),`: Wave line patterns`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:`Hexagons`}),`: Hexagonal patterns`]}),`
`]}),`
`,(0,E.jsx)(t.h3,{id:`smart-formatting`,children:`Smart Formatting`}),`
`,(0,E.jsx)(t.p,{children:`Automatic formatting handles large numbers with appropriate abbreviations:`}),`
`,(0,E.jsx)(o,{of:h}),`
`,(0,E.jsx)(t.p,{children:`Values are automatically formatted as:`}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:`1B and above`}),`: "1.23B"`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:`1M and above`}),`: "1.2M"`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:`1K and above`}),`: "1k"`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:`Below 1K`}),`: "1,234"`]}),`
`]}),`
`,(0,E.jsx)(t.h2,{id:`data-formats`,children:`Data Formats`}),`
`,(0,E.jsx)(t.h3,{id:`time-series-data`,children:`Time Series Data`}),`
`,(0,E.jsx)(t.p,{children:`Bar charts support both categorical labels and time-series data:`}),`
`,(0,E.jsx)(o,{of:v}),`
`,(0,E.jsxs)(t.p,{children:[`Date-based series pick their default tick format from the data's bucket resolution and
overall span, the same way line and area charts do. Month-or-coarser buckets follow the
resolution alone — month names with the year at January, or plain years for yearly buckets
— since they carry no day to print at any span. Daily-or-finer buckets narrow with the
span: hour ticks within a day, hour ticks dated at midnight for sub-daily data spanning up
to a week, calendar dates within a year, and years beyond that. An explicit
`,(0,E.jsx)(t.code,{children:`options.axis.x.tickFormat`}),` still overrides (`,(0,E.jsx)(t.code,{children:`axis.y`}),` on a horizontal chart).`]}),`
`,(0,E.jsxs)(t.p,{children:[`Because bars sit on a band scale, which has no ticks of its own, the tick values are
chosen rather than sampled evenly by index — otherwise the axis would routinely skip the
bucket that prints the year or dates the day, and could repeat a label. Over spans long
enough that nothing closer together reaches a boundary, the ticks fall on whole days or
whole years instead. `,(0,E.jsx)(t.code,{children:`numTicks`}),` caps how many it picks.`]}),`
`,(0,E.jsx)(o,{of:g}),`
`,(0,E.jsxs)(t.p,{children:[`Default tooltip labels name the hovered bar's bucket, spelled out in full:
`,(0,E.jsx)(t.code,{children:`August 2, 2026 at 6 AM`}),` for hourly buckets, `,(0,E.jsx)(t.code,{children:`August 2, 2026`}),` for daily ones,
`,(0,E.jsx)(t.code,{children:`August 2026`}),` for monthly, `,(0,E.jsx)(t.code,{children:`2026`}),` for yearly, and `,(0,E.jsx)(t.code,{children:`Week of January 12, 2026`}),` for weekly.
A monthly bar reads `,(0,E.jsx)(t.code,{children:`August 2026`}),` rather than `,(0,E.jsx)(t.code,{children:`August 1, 2026`}),` — the day is precision the
bucket doesn't carry. The tooltip always names the bucket's own granularity, so it stays
finer than the ticks whenever the span coarsens the axis.`]}),`
`,(0,E.jsxs)(t.p,{children:[`When the bucket resolution is already known — from a granularity selector, say — declare it
with `,(0,E.jsx)(t.code,{children:`options.axis.x.tickResolution`}),` (`,(0,E.jsx)(t.code,{children:`axis.y`}),` on a horizontal chart) instead of leaving the
chart to infer it from point spacing. Two cases need it: a single-bucket series, which has
no spacing to measure, and weekly buckets, whose seven-day spacing is indistinguishable from
sparse daily data — undeclared, they are read as daily and the tooltip names one day instead
of the week.`]}),`
`,(0,E.jsx)(o,{of:_}),`
`,(0,E.jsx)(a,{language:`jsx`,code:`// Date objects
{ date: new Date('2024-01-01'), value: 2230 }

// Date strings (automatically parsed)
{ dateString: '2024-01-01', value: 2580 }
{ dateString: '2024-01-01 14:30:00', value: 3500 }

// Category labels
{ label: '2024', value: 126 }`}),`
`,(0,E.jsx)(t.h3,{id:`custom-axis-formatting`,children:`Custom Axis Formatting`}),`
`,(0,E.jsx)(t.p,{children:`Configure custom formatting for time-series or numerical axes:`}),`
`,(0,E.jsx)(a,{language:`jsx`,code:`<BarChart
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
`,(0,E.jsx)(t.h2,{id:`zero-value-display`,children:`Zero Value Display`}),`
`,(0,E.jsx)(t.h3,{id:`visual-enhancement-for-zero-values`,children:`Visual Enhancement for Zero Values`}),`
`,(0,E.jsxs)(t.p,{children:[`By default, bars with zero values have no visual height, making them difficult to identify. The `,(0,E.jsx)(t.code,{children:`showZeroValues`}),` feature provides better user experience by giving zero values a minimum visual height while preserving data integrity:`]}),`
`,(0,E.jsx)(o,{of:x}),`
`,(0,E.jsx)(a,{language:`jsx`,code:`<BarChart
	data={dataWithZeros}
	showZeroValues={true}
	withTooltips={true}
/>`}),`
`,(0,E.jsx)(t.h2,{id:`error-handling`,children:`Error Handling`}),`
`,(0,E.jsx)(t.p,{children:`The chart gracefully handles various error states and edge cases:`}),`
`,(0,E.jsx)(o,{of:f}),`
`,(0,E.jsx)(t.p,{children:(0,E.jsx)(t.strong,{children:`Supported scenarios:`})}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsx)(t.li,{children:`Empty data arrays`}),`
`,(0,E.jsx)(t.li,{children:`Invalid data values (null, NaN, undefined)`}),`
`,(0,E.jsx)(t.li,{children:`Missing data properties`}),`
`,(0,E.jsx)(t.li,{children:`Invalid date formats`}),`
`,(0,E.jsx)(t.li,{children:`Single data points`}),`
`]}),`
`,(0,E.jsx)(t.h2,{id:`interactive-features`,children:`Interactive Features`}),`
`,(0,E.jsx)(t.h3,{id:`tooltips`,children:`Tooltips`}),`
`,(0,E.jsx)(t.p,{children:`Enable rich interactive tooltips that display detailed information on hover:`}),`
`,(0,E.jsx)(a,{language:`jsx`,code:`<BarChart
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
`,(0,E.jsx)(t.h3,{id:`keyboard-navigation`,children:`Keyboard Navigation`}),`
`,(0,E.jsx)(t.p,{children:`Charts are fully keyboard accessible:`}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:`Tab`}),`: Focus the chart`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:`Arrow Keys`}),`: Navigate between bars`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:`Enter/Space`}),`: Activate tooltips`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:`Escape`}),`: Close active tooltips`]}),`
`]}),`
`,(0,E.jsx)(t.h2,{id:`legends`,children:`Legends`}),`
`,(0,E.jsxs)(t.p,{children:[`Use the composition API to add a legend by placing `,(0,E.jsx)(t.code,{children:`<BarChart.Legend />`}),` as a child:`]}),`
`,(0,E.jsx)(o,{of:y}),`
`,(0,E.jsx)(a,{language:`jsx`,code:`<BarChart data={data}>
	<BarChart.Legend />
</BarChart>`}),`
`,(0,E.jsxs)(t.p,{children:[`For full legend configuration options — positioning, orientation, shapes, interactivity, and the composition API — see the `,(0,E.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-components-legend--docs`,children:`Legend component docs`}),`.`]}),`
`,(0,E.jsx)(t.h2,{id:`theming-integration`,children:`Theming Integration`}),`
`,(0,E.jsxs)(t.p,{children:[`Bar Charts integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided. A custom theme can be provided by wrapping your chart in `,(0,E.jsx)(t.code,{children:`GlobalChartsProvider`}),` and passing a custom theme object with the properties you want to override to the `,(0,E.jsx)(t.code,{children:`theme`}),` prop:`]}),`
`,(0,E.jsx)(a,{language:`tsx`,code:`import { GlobalChartsProvider, BarChart, type ChartTheme } from '@automattic/charts';

const customTheme: ChartTheme = {
	colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'],
	gridColor: '#E0E0E0',
};

<GlobalChartsProvider theme={customTheme}>
	<BarChart data={data} />
</GlobalChartsProvider>`}),`
`,(0,E.jsx)(t.h2,{id:`responsive-behavior`,children:`Responsive Behavior`}),`
`,(0,E.jsxs)(t.p,{children:[`By default, charts `,(0,E.jsx)(t.strong,{children:`fill their parent container's dimensions`}),`. The parent must have an explicit height:`]}),`
`,(0,E.jsx)(o,{of:d}),`
`,(0,E.jsx)(a,{language:`jsx`,code:`// Fill parent container (default) - parent needs explicit height
<div style={{ width: '100%', height: '400px' }}>
	<BarChart data={data} />
</div>

// Use aspect ratio - height from width, contained if the parent is shorter
<div style={{ width: '100%' }}>
	<BarChart data={data} aspectRatio={0.5} />
</div>

// Fixed dimensions
<BarChart data={data} width={800} height={400} />`}),`
`,(0,E.jsxs)(t.p,{children:[`For more details on responsive behavior, see the `,(0,E.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design`,children:`Responsive Design section`}),` in the introduction.`]}),`
`,(0,E.jsx)(t.h2,{id:`animation`,children:`Animation`}),`
`,(0,E.jsx)(t.p,{children:`The Bar Chart component supports an optional entry animation that creates a smooth reveal effect when the chart first renders:`}),`
`,(0,E.jsx)(o,{of:c}),`
`,(0,E.jsx)(a,{language:`tsx`,code:`<BarChart
	data={ data }
	width={ 800 }
	height={ 400 }
	animation={ true }
/>`}),`
`,(0,E.jsx)(t.h3,{id:`animation-behavior`,children:`Animation Behavior`}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:`Opt-in`}),`: Animation is disabled by default and must be explicitly enabled with the `,(0,E.jsx)(t.code,{children:`animation`}),` prop`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:`Accessibility`}),`: Automatically respects the user's `,(0,E.jsx)(t.code,{children:`prefers-reduced-motion`}),` system setting - animation will not play for users who prefer reduced motion`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:`Effect`}),`: Creates a growing effect where bars scale from zero to their full size. Vertical bars rise from the bottom, while horizontal bars stretch from the left`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:`Duration`}),`: 1000ms (1 second) with ease-out timing`]}),`
`]}),`
`,(0,E.jsxs)(t.p,{children:[(0,E.jsx)(t.strong,{children:`Note`}),`: The animation plays once when the chart initially renders and does not repeat.`]}),`
`,(0,E.jsx)(t.h2,{id:`advanced-customization`,children:`Advanced Customization`}),`
`,(0,E.jsx)(t.h3,{id:`grid-configuration`,children:`Grid Configuration`}),`
`,(0,E.jsx)(t.p,{children:`Control grid line visibility and appearance:`}),`
`,(0,E.jsx)(a,{language:`jsx`,code:`// Show only horizontal grid lines (default for vertical bars)
<BarChart data={data} gridVisibility="x" />

// Show only vertical grid lines (default for horizontal bars)
<BarChart data={data} gridVisibility="y" />

// Show both grid lines
<BarChart data={data} gridVisibility="xy" />

// Hide all grid lines
<BarChart data={data} gridVisibility="none" />`}),`
`,(0,E.jsx)(t.h3,{id:`custom-margins`,children:`Custom Margins`}),`
`,(0,E.jsx)(t.p,{children:`Control chart layout with precise margin settings:`}),`
`,(0,E.jsx)(a,{language:`jsx`,code:`<BarChart
	data={data}
	margin={{
		top: 20,
		right: 60,
		bottom: 80,
		left: 80
	}}
/>`}),`
`,(0,E.jsx)(t.h3,{id:`scale-and-axis-configuration`,children:`Scale and Axis Configuration`}),`
`,(0,E.jsx)(t.p,{children:`Advanced configuration for scales and axes:`}),`
`,(0,E.jsx)(a,{language:`jsx`,code:`<BarChart
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
`,(0,E.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,E.jsx)(t.h3,{id:`keyboard-navigation-1`,children:`Keyboard Navigation`}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:`Tab`}),`: Focus the chart container`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:`Arrow Keys`}),`: Navigate between individual bars`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:`Enter/Space`}),`: Activate tooltips or interactive elements`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.strong,{children:`Escape`}),`: Close active tooltips`]}),`
`]}),`
`,(0,E.jsx)(t.h3,{id:`screen-reader-support`,children:`Screen Reader Support`}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsxs)(t.li,{children:[`Chart container has `,(0,E.jsx)(t.code,{children:`role="grid"`}),` with descriptive `,(0,E.jsx)(t.code,{children:`aria-label`})]}),`
`,(0,E.jsx)(t.li,{children:`Individual bars are navigable and announced with their values`}),`
`,(0,E.jsx)(t.li,{children:`Interactive elements have appropriate ARIA attributes`}),`
`,(0,E.jsxs)(t.li,{children:[`Color information is supplemented with patterns when `,(0,E.jsx)(t.code,{children:`withPatterns`}),` is enabled`]}),`
`]}),`
`,(0,E.jsx)(t.h3,{id:`focus-management`,children:`Focus Management`}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsx)(t.li,{children:`Clear visual focus indicators on chart and individual bars`}),`
`,(0,E.jsx)(t.li,{children:`Logical tab order through interactive elements`}),`
`,(0,E.jsx)(t.li,{children:`Focus restoration after modal interactions`}),`
`]})]})}function T(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;e((()=>{E=t(),s(),r(),S()}))();export{T as default};