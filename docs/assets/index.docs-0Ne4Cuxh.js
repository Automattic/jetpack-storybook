import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{bt as n}from"./esm-58pkqaX7.js";import{i as r,n as i,r as a,t as o}from"./blocks-3aEi9CKn.js";import{t as s}from"./mdx-react-shim-CdzV_9jZ.js";import{Animation as c,BandHighlight as l,BesideTooltip as u,BucketsWithNoData as d,ComparisonMulti as f,ComparisonSingle as p,DatumClasses as m,Default as h,ErrorStates as g,HorizontalBarChart as _,PerPointColors as v,SingleSeries as y,SmallWholeNumberRange as b,SmartFormatting as x,TimeAxisTickFormats as S,TimeAxisTickResolution as C,TimeSeries as w,WithCompositionLegend as T,WithDefaultHiddenSeries as E,WithPatterns as D,ZeroValueComparison as O,n as k,t as A}from"./index2.stories-B3Ef9fQz.js";function j(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(i,{title:`JS Packages/Charts Library/Charts/Bar Chart`,of:A}),`
`,(0,N.jsx)(t.h1,{id:`bar-chart`,children:`Bar Chart`}),`
`,(0,N.jsx)(t.p,{children:`Bar Charts visualize categorical data using rectangular bars with heights or lengths proportional to the values they represent. They excel at comparing values across categories, showing distributions, and highlighting differences in data sets.`}),`
`,(0,N.jsx)(o,{of:h}),`
`,(0,N.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,N.jsxs)(t.p,{children:[`The Bar Chart component provides a flexible, accessible, and highly customizable solution for displaying categorical data. Built on `,(0,N.jsx)(t.code,{children:`@visx/xychart`}),`, it supports multiple data series, both vertical and horizontal orientations, interactive tooltips, legends, and advanced visual features like pattern fills:`]}),`
`,(0,N.jsx)(a,{language:`jsx`,code:`import { BarChart } from '@automattic/charts';
import '@automattic/charts/style.css';

<BarChart
	data={ data }
	orientation="vertical"
	withTooltips={ true }
	showLegend={ true }
/>`}),`
`,(0,N.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,N.jsxs)(t.p,{children:[`For detailed information about component props, types, and method signatures, see the `,(0,N.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-bar-chart-api-reference--docs`,children:`Bar Chart API Reference`}),`.`]}),`
`,(0,N.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,N.jsx)(t.h3,{id:`simple-bar-chart`,children:`Simple Bar Chart`}),`
`,(0,N.jsxs)(t.p,{children:[`The simplest bar chart requires only a `,(0,N.jsx)(t.code,{children:`data`}),` prop with categorical data:`]}),`
`,(0,N.jsx)(o,{of:y}),`
`,(0,N.jsx)(a,{language:`jsx`,code:`<BarChart
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
`,(0,N.jsx)(t.h3,{id:`required-props`,children:`Required Props`}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`data`})}),`: Array of series data, each containing `,(0,N.jsx)(t.code,{children:`label`}),`, `,(0,N.jsx)(t.code,{children:`data`}),` array, and optional `,(0,N.jsx)(t.code,{children:`options`})]}),`
`]}),`
`,(0,N.jsx)(t.h3,{id:`optional-props`,children:`Optional Props`}),`
`,(0,N.jsx)(t.p,{children:(0,N.jsx)(t.strong,{children:`Layout & Dimensions:`})}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`width`})}),`: Chart width in pixels. When omitted, fills parent container width`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`height`})}),`: Chart height in pixels (defaults to 400). When omitted, fills parent container height`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`margin`})}),`: Custom chart margins`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`aspectRatio`})}),`: Height-to-width ratio (e.g. `,(0,N.jsx)(t.code,{children:`0.5`}),`) for responsive charts; the chart is contained within its parent on both axes. When omitted, fills the parent container's height`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`maxWidth`})}),`: Maximum width constraint for responsive charts (default: `,(0,N.jsx)(t.code,{children:`1200`}),`)`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`resizeDebounceTime`})}),`: Debounce delay for resize events in ms (default: `,(0,N.jsx)(t.code,{children:`300`}),`)`]}),`
`]}),`
`,(0,N.jsx)(t.p,{children:(0,N.jsx)(t.strong,{children:`Visual Styling:`})}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`barClassName`})}),`: A callback returning an additional CSS class for each primary bar's datum, on top of `,(0,N.jsx)(t.code,{children:`visx-bar`}),`. Use it to style empty or zero-value marks independently of their fill color.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`tooltipStyle`})}),`: Inline style overrides for the tooltip box`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`orientation`})}),`: Bar orientation (`,(0,N.jsx)(t.code,{children:`'vertical'`}),` or `,(0,N.jsx)(t.code,{children:`'horizontal'`}),`, defaults to `,(0,N.jsx)(t.code,{children:`'vertical'`}),`)`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`withPatterns`})}),`: Use pattern fills instead of solid colors (`,(0,N.jsx)(t.code,{children:`false`}),` by default)`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`gridVisibility`})}),`: Grid line visibility (`,(0,N.jsx)(t.code,{children:`'x'`}),`, `,(0,N.jsx)(t.code,{children:`'y'`}),`, `,(0,N.jsx)(t.code,{children:`'xy'`}),`, or `,(0,N.jsx)(t.code,{children:`'none'`}),`)`]}),`
`]}),`
`,(0,N.jsx)(o,{of:m}),`
`,(0,N.jsx)(t.p,{children:(0,N.jsx)(t.strong,{children:`Interactivity:`})}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`withTooltips`})}),`: Enable interactive tooltips (`,(0,N.jsx)(t.code,{children:`false`}),` by default)`]}),`
`]}),`
`,(0,N.jsx)(t.p,{children:(0,N.jsx)(t.strong,{children:`Legend:`})}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`showLegend`})}),`: Display chart legend (`,(0,N.jsx)(t.code,{children:`false`}),` by default)`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`legend`})}),`: Legend configuration object (`,(0,N.jsx)(t.code,{children:`ChartLegendConfig`}),`) for controlling orientation, position, alignment, shape, interactivity, and styling`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`defaultHiddenSeries`})}),`: Series labels hidden from the first defined value; later values for the same `,(0,N.jsx)(t.code,{children:`chartId`}),` are ignored`]}),`
`]}),`
`,(0,N.jsx)(t.p,{children:(0,N.jsx)(t.strong,{children:`Advanced:`})}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`options`})}),`: Advanced axis and scale configuration`]}),`
`]}),`
`,(0,N.jsx)(t.h2,{id:`chart-orientations`,children:`Chart Orientations`}),`
`,(0,N.jsx)(t.h3,{id:`vertical-bars-default`,children:`Vertical Bars (Default)`}),`
`,(0,N.jsx)(t.p,{children:`Standard vertical bar charts with categories on the x-axis and values on the y-axis:`}),`
`,(0,N.jsx)(o,{of:h}),`
`,(0,N.jsx)(a,{language:`jsx`,code:`<BarChart
	data={data}
	orientation="vertical"
	gridVisibility="x"
/>`}),`
`,(0,N.jsx)(t.h3,{id:`horizontal-bars`,children:`Horizontal Bars`}),`
`,(0,N.jsx)(t.p,{children:`Horizontal bar charts with categories on the y-axis and values on the x-axis, ideal for long category names:`}),`
`,(0,N.jsx)(o,{of:_}),`
`,(0,N.jsx)(a,{language:`jsx`,code:`<BarChart
	data={data}
	orientation="horizontal"
	gridVisibility="y"
/>`}),`
`,(0,N.jsx)(t.h2,{id:`multiple-series`,children:`Multiple Series`}),`
`,(0,N.jsx)(t.h3,{id:`multi-series-charts`,children:`Multi-Series Charts`}),`
`,(0,N.jsx)(t.p,{children:`Display multiple data series with automatic color differentiation and grouped bars:`}),`
`,(0,N.jsx)(o,{of:h}),`
`,(0,N.jsx)(a,{language:`jsx`,code:`<BarChart
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
`,(0,N.jsx)(t.h3,{id:`many-data-series`,children:`Many Data Series`}),`
`,(0,N.jsxs)(t.p,{children:[`The component handles large numbers of series gracefully with automatic color cycling. Use the `,(0,N.jsx)(t.code,{children:`seriesCount`}),` control above to see how the chart handles many series:`]}),`
`,(0,N.jsx)(a,{language:`jsx`,code:`<BarChart
	data={allCountriesData}
	withTooltips={true}
	showLegend={true}
/>`}),`
`,(0,N.jsx)(t.h2,{id:`comparison-mode`,children:`Comparison Mode`}),`
`,(0,N.jsxs)(t.p,{children:[`Add a comparison series — for example "this period vs. previous period" — by giving a series `,(0,N.jsx)(t.code,{children:`options.type: 'comparison'`}),`. It renders as a translucent "shadow" bar centered `,(0,N.jsx)(t.strong,{children:`behind`}),` the primary series that shares its `,(0,N.jsx)(t.code,{children:`group`}),`. The shadow is wider than the primary bar (the primary is narrowed) so it peeks on each side and above, while a small gap is kept between series and a larger gap between ticks.`]}),`
`,(0,N.jsx)(o,{of:p}),`
`,(0,N.jsx)(a,{language:`jsx`,code:`<BarChart
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
`,(0,N.jsxs)(t.p,{children:[`It composes with grouped bars: pair each primary series with its own `,(0,N.jsx)(t.code,{children:`type: 'comparison'`}),` series of the same `,(0,N.jsx)(t.code,{children:`group`}),`, and the groups render side by side, each with its own shadow.`]}),`
`,(0,N.jsx)(o,{of:f}),`
`,(0,N.jsx)(t.p,{children:(0,N.jsx)(t.strong,{children:`Notes:`})}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[`A comparison series pairs with the primary series that shares its `,(0,N.jsx)(t.code,{children:`group`}),` (when there is a single primary series, `,(0,N.jsx)(t.code,{children:`group`}),` can be omitted on both).`]}),`
`,(0,N.jsx)(t.li,{children:`Comparison values are included in the value-axis domain, so a previous period taller than the current one is never clipped.`}),`
`,(0,N.jsxs)(t.li,{children:[`Comparison series must reuse the primary series' category keys (the `,(0,N.jsx)(t.code,{children:`label`}),`/`,(0,N.jsx)(t.code,{children:`date`}),` of each point) so each shadow lines up with its primary bar.`]}),`
`,(0,N.jsx)(t.li,{children:`The comparison shadow isn't a separate hover/keyboard target (the primary bar drives interaction), but the tooltip shows both the current and previous period values for the hovered category.`}),`
`,(0,N.jsxs)(t.li,{children:[`Each series gets its own legend item by default. Set `,(0,N.jsx)(t.code,{children:`legend.collapseGroups`}),` to render one item per group, labeled by its primary series; combined with `,(0,N.jsx)(t.code,{children:`legend.interactive`}),`, clicking that item toggles the primary and its previous-period series together. Pair it with `,(0,N.jsx)(t.code,{children:`legend.comparisonItem`}),` to append a static item explaining the comparison shadow once `,(0,N.jsx)(t.code,{children:`collapseGroups`}),` folds it away. When every series is hidden, the axes are dropped and only the empty state is shown.`]}),`
`,(0,N.jsxs)(t.li,{children:[`Collapsing the legend requires the primary and its comparison series to share a `,(0,N.jsx)(t.code,{children:`group`}),`. This is stricter than the bars themselves: rendering pairs a comparison with the sole primary even when `,(0,N.jsx)(t.code,{children:`group`}),` is omitted, but the legend has no single-primary fallback, so without a shared `,(0,N.jsx)(t.code,{children:`group`}),` the pair keeps separate legend items.`]}),`
`,(0,N.jsxs)(t.li,{children:[`With pattern fills enabled (`,(0,N.jsx)(t.code,{children:`withPatterns`}),`), the comparison shadow reuses its primary bar's pattern at the same reduced opacity, so the pair reads as one series.`]}),`
`,(0,N.jsxs)(t.li,{children:[`Styling comes from the theme at `,(0,N.jsx)(t.code,{children:`barChart.barStyles.comparison`}),`. `,(0,N.jsx)(t.code,{children:`widthFactor`}),` (default `,(0,N.jsx)(t.code,{children:`1.5`}),`) controls how much wider the comparison bar is than the primary — the primary is narrowed to `,(0,N.jsx)(t.code,{children:`1 / widthFactor`}),` of the slot — and `,(0,N.jsx)(t.code,{children:`opacity`}),` (default `,(0,N.jsx)(t.code,{children:`0.5`}),`) sets the shadow translucency.`]}),`
`]}),`
`,(0,N.jsx)(t.h2,{id:`visual-features`,children:`Visual Features`}),`
`,(0,N.jsx)(t.h3,{id:`pattern-fills`,children:`Pattern Fills`}),`
`,(0,N.jsx)(t.p,{children:`Add visual accessibility and distinction with pattern fills instead of solid colors:`}),`
`,(0,N.jsx)(o,{of:D}),`
`,(0,N.jsx)(a,{language:`jsx`,code:`<BarChart
	data={data}
	withPatterns={true}
	withTooltips={true}
/>`}),`
`,(0,N.jsx)(t.p,{children:(0,N.jsx)(t.strong,{children:`Pattern types automatically cycle through:`})}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Lines`}),`: Diagonal line patterns`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Circles`}),`: Circular dot patterns`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Waves`}),`: Wave line patterns`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Hexagons`}),`: Hexagonal patterns`]}),`
`]}),`
`,(0,N.jsx)(t.h3,{id:`smart-formatting`,children:`Smart Formatting`}),`
`,(0,N.jsx)(t.p,{children:`Automatic formatting handles large numbers with appropriate abbreviations:`}),`
`,(0,N.jsx)(o,{of:x}),`
`,(0,N.jsx)(t.p,{children:`Values are automatically formatted as:`}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`1B and above`}),`: "1.23B"`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`1M and above`}),`: "1.2M"`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`1K and above`}),`: "1k"`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Below 1K`}),`: "1,234"`]}),`
`]}),`
`,(0,N.jsx)(t.h2,{id:`data-formats`,children:`Data Formats`}),`
`,(0,N.jsx)(t.h3,{id:`time-series-data`,children:`Time Series Data`}),`
`,(0,N.jsx)(t.p,{children:`Bar charts support both categorical labels and time-series data:`}),`
`,(0,N.jsx)(o,{of:w}),`
`,(0,N.jsxs)(t.p,{children:[`Date-based series pick their default tick format from the data's bucket resolution and
overall span, the same way line and area charts do. Month-or-coarser buckets follow the
resolution alone — month names with the year at January, or plain years for yearly buckets
— since they carry no day to print at any span. Daily-or-finer buckets narrow with the
span: hour ticks within a day, hour ticks dated at midnight for sub-daily data spanning up
to a week, calendar dates within a year, and years beyond that. An explicit
`,(0,N.jsx)(t.code,{children:`options.axis.x.tickFormat`}),` still overrides (`,(0,N.jsx)(t.code,{children:`axis.y`}),` on a horizontal chart).`]}),`
`,(0,N.jsxs)(t.p,{children:[`The tick values are chosen rather than sampled evenly by index, the same selection line
and area charts use — otherwise the axis would routinely skip the bucket that prints the
year or dates the day, and could repeat a label. Over spans long
enough that nothing closer together reaches a boundary, the ticks fall on whole days or
whole years instead. `,(0,N.jsx)(t.code,{children:`numTicks`}),` caps how many it picks.`]}),`
`,(0,N.jsx)(o,{of:S}),`
`,(0,N.jsxs)(t.p,{children:[`Default tooltip labels name the hovered bar's bucket, spelled out in full:
`,(0,N.jsx)(t.code,{children:`August 2, 2026 at 6 AM`}),` for hourly buckets, `,(0,N.jsx)(t.code,{children:`August 2, 2026`}),` for daily ones,
`,(0,N.jsx)(t.code,{children:`August 2026`}),` for monthly, `,(0,N.jsx)(t.code,{children:`2026`}),` for yearly, and `,(0,N.jsx)(t.code,{children:`Week of January 12, 2026`}),` for weekly.
A monthly bar reads `,(0,N.jsx)(t.code,{children:`August 2026`}),` rather than `,(0,N.jsx)(t.code,{children:`August 1, 2026`}),` — the day is precision the
bucket doesn't carry. The tooltip always names the bucket's own granularity, so it stays
finer than the ticks whenever the span coarsens the axis.`]}),`
`,(0,N.jsxs)(t.p,{children:[`When the bucket resolution is already known — from a granularity selector, say — declare it
with `,(0,N.jsx)(t.code,{children:`options.axis.x.tickResolution`}),` (`,(0,N.jsx)(t.code,{children:`axis.y`}),` on a horizontal chart) instead of leaving the
chart to infer it from point spacing. Two cases need it: a single-bucket series, which has
no spacing to measure, and weekly buckets, whose seven-day spacing is indistinguishable from
sparse daily data — undeclared, they are read as daily and the tooltip names one day instead
of the week.`]}),`
`,(0,N.jsx)(o,{of:C}),`
`,(0,N.jsx)(a,{language:`jsx`,code:`// Date objects
{ date: new Date('2024-01-01'), value: 2230 }

// Date strings (automatically parsed)
{ dateString: '2024-01-01', value: 2580 }
{ dateString: '2024-01-01 14:30:00', value: 3500 }

// Category labels
{ label: '2024', value: 126 }`}),`
`,(0,N.jsx)(t.h3,{id:`custom-axis-formatting`,children:`Custom Axis Formatting`}),`
`,(0,N.jsx)(t.p,{children:`Configure custom formatting for time-series or numerical axes:`}),`
`,(0,N.jsx)(a,{language:`jsx`,code:`<BarChart
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
`,(0,N.jsx)(t.h3,{id:`buckets-with-no-data`,children:`Buckets With No Data`}),`
`,(0,N.jsxs)(t.p,{children:[`Set a point's `,(0,N.jsx)(t.code,{children:`value`}),` to `,(0,N.jsx)(t.code,{children:`null`}),` when its bucket has no reading, such as the days before a site launched. The bucket keeps its place on the axis, so the chart still spans the full range, but it draws no bar and its tooltip reads "No data" rather than 0. Use `,(0,N.jsx)(t.code,{children:`0`}),` only for a real reading of zero: in the example below April is a real zero, and with `,(0,N.jsx)(t.code,{children:`showZeroValues`}),` on it keeps a short stub where the months before it have nothing.`]}),`
`,(0,N.jsx)(o,{of:d}),`
`,(0,N.jsx)(t.h2,{id:`zero-value-display`,children:`Zero Value Display`}),`
`,(0,N.jsx)(t.h3,{id:`visual-enhancement-for-zero-values`,children:`Visual Enhancement for Zero Values`}),`
`,(0,N.jsxs)(t.p,{children:[`By default, bars with zero values have no visual height, making them difficult to identify. The `,(0,N.jsx)(t.code,{children:`showZeroValues`}),` feature provides better user experience by giving zero values a minimum visual height while preserving data integrity:`]}),`
`,(0,N.jsx)(o,{of:O}),`
`,(0,N.jsx)(a,{language:`jsx`,code:`<BarChart
	data={dataWithZeros}
	showZeroValues={true}
	withTooltips={true}
/>`}),`
`,(0,N.jsx)(t.h2,{id:`error-handling`,children:`Error Handling`}),`
`,(0,N.jsx)(t.p,{children:`The chart gracefully handles various error states and edge cases:`}),`
`,(0,N.jsx)(o,{of:g}),`
`,(0,N.jsx)(t.p,{children:(0,N.jsx)(t.strong,{children:`Supported scenarios:`})}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsx)(t.li,{children:`Empty data arrays`}),`
`,(0,N.jsx)(t.li,{children:`Invalid data values (NaN, undefined)`}),`
`,(0,N.jsx)(t.li,{children:`Buckets with no reading (null), drawn as a gap rather than rejected`}),`
`,(0,N.jsx)(t.li,{children:`Missing data properties`}),`
`,(0,N.jsx)(t.li,{children:`Invalid date formats`}),`
`,(0,N.jsx)(t.li,{children:`Single data points`}),`
`]}),`
`,(0,N.jsx)(t.h2,{id:`interactive-features`,children:`Interactive Features`}),`
`,(0,N.jsx)(t.h3,{id:`tooltips`,children:`Tooltips`}),`
`,(0,N.jsxs)(t.p,{children:[`Use `,(0,N.jsx)(t.code,{children:`tooltipStyle`}),` to override tooltip box styles, including padding, without CSS priority overrides.`]}),`
`,(0,N.jsx)(t.p,{children:`Enable rich interactive tooltips that display detailed information on hover:`}),`
`,(0,N.jsx)(a,{language:`jsx`,code:`<BarChart
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
`,(0,N.jsx)(t.h3,{id:`band-highlight`,children:`Band Highlight`}),`
`,(0,N.jsxs)(t.p,{children:[`Set `,(0,N.jsx)(t.code,{children:`withBandHighlight`}),` alongside `,(0,N.jsx)(t.code,{children:`withTooltips`}),` to shade the active band across the plot. Hover a bar or use arrow keys after focusing the chart. Escape clears the keyboard selection and its tooltip; a hover highlight remains. Without `,(0,N.jsx)(t.code,{children:`withTooltips`}),`, the chart still renders, but neither the highlight nor its callback runs; development builds warn about this configuration.`]}),`
`,(0,N.jsx)(o,{of:l}),`
`,(0,N.jsxs)(t.p,{children:[`For an overlay outside the chart, `,(0,N.jsx)(t.code,{children:`onBandHighlightChange`}),` reports the active datum, series `,(0,N.jsx)(t.code,{children:`key`}),`, point `,(0,N.jsx)(t.code,{children:`index`}),` within the rendered series, and the band rectangle in SVG coordinates. It reports the initial selection on mount (normally `,(0,N.jsx)(t.code,{children:`null`}),`), changes to that selection, and `,(0,N.jsx)(t.code,{children:`null`}),` on dismissal or unmount. The callback also works without rendering the built-in highlight.`]}),`
`,(0,N.jsx)(t.h3,{id:`beside-tooltips`,children:`Beside Tooltips`}),`
`,(0,N.jsxs)(t.p,{children:[`Use `,(0,N.jsx)(t.code,{children:`tooltipPlacement="beside"`}),` to offset the tooltip horizontally from the active band center on vertical bar charts without vertical flipping. It flips horizontally near an edge and stays within the viewport or clipping ancestor. Its top follows the selected datum unless `,(0,N.jsx)(t.code,{children:`tooltipAnchorTop`}),` overrides it. This override also applies to `,(0,N.jsx)(t.code,{children:`"auto"`}),` placement, which can still flip vertically. The anchor uses SVG coordinates: values less than `,(0,N.jsx)(t.code,{children:`margin.top`}),` are above the plot, and negative values are above the SVG.`]}),`
`,(0,N.jsx)(t.p,{children:`The horizontal anchor is the band center, not its edge, so a wide bar can be covered by the tooltip. Negative top anchors remain subject to clipping bounds and can be clamped back into view.`}),`
`,(0,N.jsx)(o,{of:u}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`import { BarChart } from '@automattic/charts';

<BarChart
	data={ data }
	withTooltips={ true }
	withBandHighlight={ true }
	tooltipPlacement="beside"
	tooltipAnchorTop={ 40 }
/>`}),`
`,(0,N.jsx)(t.h3,{id:`keyboard-navigation`,children:`Keyboard Navigation`}),`
`,(0,N.jsx)(t.p,{children:`Charts are fully keyboard accessible:`}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Tab`}),`: Focus the chart`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Arrow Keys`}),`: Navigate between bars`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Enter/Space`}),`: Activate tooltips`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Escape`}),`: Close active tooltips and return focus to the chart`]}),`
`]}),`
`,(0,N.jsx)(t.h2,{id:`legends`,children:`Legends`}),`
`,(0,N.jsxs)(t.p,{children:[`Use the composition API to add a legend by placing `,(0,N.jsx)(t.code,{children:`<BarChart.Legend />`}),` as a child:`]}),`
`,(0,N.jsx)(o,{of:T}),`
`,(0,N.jsx)(a,{language:`jsx`,code:`<BarChart data={data}>
	<BarChart.Legend />
</BarChart>`}),`
`,(0,N.jsxs)(t.p,{children:[`For full legend configuration options — positioning, orientation, shapes, interactivity, and the composition API — see the `,(0,N.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-components-legend--docs`,children:`Legend component docs`}),`.`]}),`
`,(0,N.jsxs)(t.p,{children:[`Use `,(0,N.jsx)(t.code,{children:`defaultHiddenSeries`}),` to hide selected series initially while keeping them available through an interactive legend. The first defined list is used; later values for the same `,(0,N.jsx)(t.code,{children:`chartId`}),` are ignored. The defaults are seeded once per `,(0,N.jsx)(t.code,{children:`chartId`}),`, so a series the reader reveals stays revealed even if the chart unmounts and comes back — swapping between chart types, or a tab the chart lives in going away and returning. Only a new `,(0,N.jsx)(t.code,{children:`chartId`}),` seeds again.`]}),`
`,(0,N.jsx)(o,{of:E}),`
`,(0,N.jsx)(t.h2,{id:`theming-integration`,children:`Theming Integration`}),`
`,(0,N.jsx)(t.p,{children:`Bar Charts integrate seamlessly with the chart theming system. The default theme has neutral styling, and is automatically applied to all charts unless a custom theme is provided.`}),`
`,(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.strong,{children:`Series colors come from the palette custom properties, not the theme object.`}),` Set as many of the five slots as you need; an unset slot is skipped, and charts generates accessible colors beyond whatever you set:`]}),`
`,(0,N.jsx)(a,{language:`css`,code:`.a8c-charts-scope {
	--a8c-charts-color-series-1: #FF6B6B;
	--a8c-charts-color-series-2: #4ECDC4;
	--a8c-charts-color-series-3: #45B7D1;
}`}),`
`,(0,N.jsxs)(t.p,{children:[`Set a data point's optional `,(0,N.jsx)(t.code,{children:`color`}),` to override the series color for that bar. Points without a color retain the series color. When `,(0,N.jsx)(t.code,{children:`withPatterns`}),` is enabled, pattern fills take precedence over point colors. The shared point types expose this field, but only BarChart uses it.`]}),`
`,(0,N.jsx)(o,{of:v}),`
`,(0,N.jsxs)(t.p,{children:[`For other catalog colors, declare the corresponding role. The closest declaration inside the provider tree wins, so scope the rule to one dashboard, or to `,(0,N.jsx)(t.code,{children:`.a8c-charts-scope`}),` to move every chart on the page:`]}),`
`,(0,N.jsx)(a,{language:`css`,code:`.my-dashboard {
	--a8c-charts-color-grid: #E0E0E0;
}`}),`
`,(0,N.jsx)(t.h2,{id:`responsive-behavior`,children:`Responsive Behavior`}),`
`,(0,N.jsxs)(t.p,{children:[`By default, charts `,(0,N.jsx)(t.strong,{children:`fill their parent container's dimensions`}),`. The parent must have an explicit height:`]}),`
`,(0,N.jsx)(o,{of:h}),`
`,(0,N.jsx)(a,{language:`jsx`,code:`// Fill parent container (default) - parent needs explicit height
<div style={{ width: '100%', height: '400px' }}>
	<BarChart data={data} />
</div>

// Use aspect ratio - height from width, contained if the parent is shorter
<div style={{ width: '100%' }}>
	<BarChart data={data} aspectRatio={0.5} />
</div>

// Fixed dimensions
<BarChart data={data} width={800} height={400} />`}),`
`,(0,N.jsxs)(t.p,{children:[`For more details on responsive behavior, see the `,(0,N.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design`,children:`Responsive Design section`}),` in the introduction.`]}),`
`,(0,N.jsx)(t.h2,{id:`animation`,children:`Animation`}),`
`,(0,N.jsx)(t.p,{children:`The Bar Chart component supports an optional entry animation that creates a smooth reveal effect when the chart first renders:`}),`
`,(0,N.jsx)(o,{of:c}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`<BarChart
	data={ data }
	width={ 800 }
	height={ 400 }
	animation={ true }
/>`}),`
`,(0,N.jsx)(t.h3,{id:`animation-behavior`,children:`Animation Behavior`}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Opt-in`}),`: Animation is disabled by default and must be explicitly enabled with the `,(0,N.jsx)(t.code,{children:`animation`}),` prop`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Accessibility`}),`: Automatically respects the user's `,(0,N.jsx)(t.code,{children:`prefers-reduced-motion`}),` system setting - animation will not play for users who prefer reduced motion`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Effect`}),`: Creates a growing effect where bars scale from zero to their full size. Vertical bars rise from the bottom, while horizontal bars stretch from the left`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Duration`}),`: 1000ms (1 second) with ease-out timing`]}),`
`]}),`
`,(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.strong,{children:`Note`}),`: The animation plays once when the chart initially renders and does not repeat.`]}),`
`,(0,N.jsx)(t.h2,{id:`advanced-customization`,children:`Advanced Customization`}),`
`,(0,N.jsx)(t.h3,{id:`grid-configuration`,children:`Grid Configuration`}),`
`,(0,N.jsx)(t.p,{children:`Control grid line visibility and appearance:`}),`
`,(0,N.jsx)(a,{language:`jsx`,code:`// Show only horizontal grid lines (default for vertical bars)
<BarChart data={data} gridVisibility="x" />

// Show only vertical grid lines (default for horizontal bars)
<BarChart data={data} gridVisibility="y" />

// Show both grid lines
<BarChart data={data} gridVisibility="xy" />

// Hide all grid lines
<BarChart data={data} gridVisibility="none" />`}),`
`,(0,N.jsx)(t.h3,{id:`custom-margins`,children:`Custom Margins`}),`
`,(0,N.jsx)(t.p,{children:`Control chart layout with precise margin settings:`}),`
`,(0,N.jsx)(a,{language:`jsx`,code:`<BarChart
	data={data}
	margin={{
		top: 20,
		right: 60,
		bottom: 80,
		left: 80
	}}
/>`}),`
`,(0,N.jsx)(t.h3,{id:`scale-and-axis-configuration`,children:`Scale and Axis Configuration`}),`
`,(0,N.jsxs)(t.p,{children:[`The value axis starts at zero, so a bar's length is proportional to its value and a run of similar values reads as flat rather than as swings between empty and full. Pass `,(0,N.jsx)(t.code,{children:`zero: false`}),` on the value scale (`,(0,N.jsx)(t.code,{children:`yScale`}),`, or `,(0,N.jsx)(t.code,{children:`xScale`}),` for a horizontal chart) to fit the axis to the data instead; comparison mode keeps the zero baseline regardless, and an explicit `,(0,N.jsx)(t.code,{children:`domain`}),` is used as given.`]}),`
`,(0,N.jsx)(a,{language:`jsx`,code:`<BarChart
	data={data}
	options={{
		yScale: {
			type: 'linear',
			zero: false,
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
`,(0,N.jsxs)(t.p,{children:[`When every visible value is a whole number, the value axis places ticks only on whole numbers, instead of repeating a rounded label at fractional steps. Pass `,(0,N.jsx)(t.code,{children:`options.axis.y.tickValues`}),` to choose the ticks yourself (`,(0,N.jsx)(t.code,{children:`axis.x`}),` on a horizontal chart). A value domain you pin with `,(0,N.jsx)(t.code,{children:`options.yScale.domain`}),` (`,(0,N.jsx)(t.code,{children:`xScale`}),` on a horizontal chart) keeps every tick, so a percentage axis on `,(0,N.jsx)(t.code,{children:`[ 0, 1 ]`}),` still steps by 20%.`]}),`
`,(0,N.jsx)(o,{of:b}),`
`,(0,N.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,N.jsxs)(t.p,{children:[`See `,(0,N.jsx)(t.a,{href:`#keyboard-navigation`,children:`Keyboard Navigation`}),` for supported keys and focus behavior.`]}),`
`,(0,N.jsx)(t.h3,{id:`screen-reader-support`,children:`Screen Reader Support`}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[`Chart container has `,(0,N.jsx)(t.code,{children:`role="grid"`}),` with descriptive `,(0,N.jsx)(t.code,{children:`aria-label`})]}),`
`,(0,N.jsx)(t.li,{children:`Individual bars are navigable and announced with their values`}),`
`,(0,N.jsx)(t.li,{children:`Interactive elements have appropriate ARIA attributes`}),`
`,(0,N.jsxs)(t.li,{children:[`Color information is supplemented with patterns when `,(0,N.jsx)(t.code,{children:`withPatterns`}),` is enabled`]}),`
`]}),`
`,(0,N.jsx)(t.h3,{id:`focus-management`,children:`Focus Management`}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsx)(t.li,{children:`Clear visual focus indicators on chart and individual bars`}),`
`,(0,N.jsx)(t.li,{children:`Logical tab order through interactive elements`}),`
`,(0,N.jsx)(t.li,{children:`Focus restoration after modal interactions`}),`
`]})]})}function M(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,N.jsx)(t,{...e,children:(0,N.jsx)(j,{...e})}):j(e)}var N;e((()=>{N=t(),s(),r(),k()}))();export{M as default};