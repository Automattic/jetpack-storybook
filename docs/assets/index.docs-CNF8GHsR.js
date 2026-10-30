import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{i as n}from"./react-Cv2K7F_-.js";import{t as r}from"./mdx-react-shim-C2Qp68IM.js";import{a as i,n as a,r as o,t as s}from"./blocks-Cwl21v0C.js";import{Animation as c,BandHighlight as l,BarRadius as u,BesideTooltip as d,BucketsWithNoData as f,ComparisonMulti as p,ComparisonMultiOverlap as m,ComparisonSingle as h,DatumClasses as g,Default as _,ErrorStates as v,HorizontalBarChart as y,PerPointColors as b,SingleSeries as x,SmallWholeNumberRange as S,SmartFormatting as C,TimeAxisTickFormats as w,TimeAxisTickResolution as T,TimeSeries as E,WithCompositionLegend as D,WithDefaultHiddenSeries as O,WithPatterns as k,ZeroValueComparison as A,n as j,t as M}from"./index.stories-DwPpKJVV.js";function N(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(a,{title:`JS Packages/Charts Library/Charts/Bar Chart`,of:M}),`
`,(0,F.jsx)(t.h1,{id:`bar-chart`,children:`Bar Chart`}),`
`,(0,F.jsx)(t.p,{children:`Bar Charts visualize categorical data using rectangular bars with heights or lengths proportional to the values they represent. They excel at comparing values across categories, showing distributions, and highlighting differences in data sets.`}),`
`,(0,F.jsx)(s,{of:_}),`
`,(0,F.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,F.jsxs)(t.p,{children:[`The Bar Chart component provides a flexible, accessible, and highly customizable solution for displaying categorical data. Built on `,(0,F.jsx)(t.code,{children:`@visx/xychart`}),`, it supports multiple data series, both vertical and horizontal orientations, interactive tooltips, legends, and advanced visual features like pattern fills:`]}),`
`,(0,F.jsx)(o,{language:`jsx`,code:`import { BarChart } from '@automattic/charts';
import '@automattic/charts/style.css';

<BarChart
	data={ data }
	orientation="vertical"
	withTooltips={ true }
	showLegend={ true }
/>`}),`
`,(0,F.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,F.jsxs)(t.p,{children:[`For detailed information about component props, types, and method signatures, see the `,(0,F.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-bar-chart-api-reference--docs`,children:`Bar Chart API Reference`}),`.`]}),`
`,(0,F.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,F.jsx)(t.h3,{id:`simple-bar-chart`,children:`Simple Bar Chart`}),`
`,(0,F.jsxs)(t.p,{children:[`The simplest bar chart requires only a `,(0,F.jsx)(t.code,{children:`data`}),` prop with categorical data:`]}),`
`,(0,F.jsx)(s,{of:x}),`
`,(0,F.jsx)(o,{language:`jsx`,code:`<BarChart
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
`,(0,F.jsx)(t.h3,{id:`required-props`,children:`Required Props`}),`
`,(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:(0,F.jsx)(t.code,{children:`data`})}),`: Array of series data, each containing `,(0,F.jsx)(t.code,{children:`label`}),`, `,(0,F.jsx)(t.code,{children:`data`}),` array, and optional `,(0,F.jsx)(t.code,{children:`options`})]}),`
`]}),`
`,(0,F.jsx)(t.h3,{id:`optional-props`,children:`Optional Props`}),`
`,(0,F.jsx)(t.p,{children:(0,F.jsx)(t.strong,{children:`Layout & Dimensions:`})}),`
`,(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:(0,F.jsx)(t.code,{children:`width`})}),`: Chart width in pixels. When omitted, fills parent container width`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:(0,F.jsx)(t.code,{children:`height`})}),`: Chart height in pixels (defaults to 400). When omitted, fills parent container height`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:(0,F.jsx)(t.code,{children:`margin`})}),`: Custom chart margins`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:(0,F.jsx)(t.code,{children:`aspectRatio`})}),`: Height-to-width ratio (e.g. `,(0,F.jsx)(t.code,{children:`0.5`}),`) for responsive charts; the chart is contained within its parent on both axes. When omitted, fills the parent container's height`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:(0,F.jsx)(t.code,{children:`maxWidth`})}),`: Maximum width constraint for responsive charts (default: `,(0,F.jsx)(t.code,{children:`1200`}),`)`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:(0,F.jsx)(t.code,{children:`resizeDebounceTime`})}),`: Debounce delay for resize events in ms (default: `,(0,F.jsx)(t.code,{children:`300`}),`)`]}),`
`]}),`
`,(0,F.jsx)(t.p,{children:(0,F.jsx)(t.strong,{children:`Visual Styling:`})}),`
`,(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:(0,F.jsx)(t.code,{children:`barClassName`})}),`: A callback returning an additional CSS class for each primary bar's datum, on top of `,(0,F.jsx)(t.code,{children:`visx-bar`}),`. Use it to style empty or zero-value marks independently of their fill color.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:(0,F.jsx)(t.code,{children:`tooltipStyle`})}),`: Inline style overrides for the tooltip box`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:(0,F.jsx)(t.code,{children:`orientation`})}),`: Bar orientation (`,(0,F.jsx)(t.code,{children:`'vertical'`}),` or `,(0,F.jsx)(t.code,{children:`'horizontal'`}),`, defaults to `,(0,F.jsx)(t.code,{children:`'vertical'`}),`)`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:(0,F.jsx)(t.code,{children:`layout`})}),`: How series share a category (`,(0,F.jsx)(t.code,{children:`'grouped'`}),` or `,(0,F.jsx)(t.code,{children:`'overlap'`}),`, defaults to `,(0,F.jsx)(t.code,{children:`'grouped'`}),`). See `,(0,F.jsx)(t.a,{href:`#overlap-layout`,children:`Overlap Layout`})]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:(0,F.jsx)(t.code,{children:`withPatterns`})}),`: Use pattern fills instead of solid colors (`,(0,F.jsx)(t.code,{children:`false`}),` by default)`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:(0,F.jsx)(t.code,{children:`gridVisibility`})}),`: Grid line visibility (`,(0,F.jsx)(t.code,{children:`'x'`}),`, `,(0,F.jsx)(t.code,{children:`'y'`}),`, `,(0,F.jsx)(t.code,{children:`'xy'`}),`, or `,(0,F.jsx)(t.code,{children:`'none'`}),`)`]}),`
`]}),`
`,(0,F.jsx)(s,{of:g}),`
`,(0,F.jsx)(t.p,{children:(0,F.jsx)(t.strong,{children:`Interactivity:`})}),`
`,(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:(0,F.jsx)(t.code,{children:`withTooltips`})}),`: Enable interactive tooltips (`,(0,F.jsx)(t.code,{children:`false`}),` by default)`]}),`
`]}),`
`,(0,F.jsx)(t.p,{children:(0,F.jsx)(t.strong,{children:`Legend:`})}),`
`,(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:(0,F.jsx)(t.code,{children:`showLegend`})}),`: Display chart legend (`,(0,F.jsx)(t.code,{children:`false`}),` by default)`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:(0,F.jsx)(t.code,{children:`legend`})}),`: Legend configuration object (`,(0,F.jsx)(t.code,{children:`ChartLegendConfig`}),`) for controlling orientation, position, alignment, shape, interactivity, and styling`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:(0,F.jsx)(t.code,{children:`defaultHiddenSeries`})}),`: Series labels hidden from the first defined value; later values for the same `,(0,F.jsx)(t.code,{children:`chartId`}),` are ignored`]}),`
`]}),`
`,(0,F.jsx)(t.p,{children:(0,F.jsx)(t.strong,{children:`Advanced:`})}),`
`,(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:(0,F.jsx)(t.code,{children:`options`})}),`: Advanced axis and scale configuration`]}),`
`]}),`
`,(0,F.jsx)(t.h2,{id:`chart-orientations`,children:`Chart Orientations`}),`
`,(0,F.jsx)(t.h3,{id:`vertical-bars-default`,children:`Vertical Bars (Default)`}),`
`,(0,F.jsx)(t.p,{children:`Standard vertical bar charts with categories on the x-axis and values on the y-axis:`}),`
`,(0,F.jsx)(s,{of:_}),`
`,(0,F.jsx)(o,{language:`jsx`,code:`<BarChart
	data={data}
	orientation="vertical"
	gridVisibility="x"
/>`}),`
`,(0,F.jsx)(t.h3,{id:`horizontal-bars`,children:`Horizontal Bars`}),`
`,(0,F.jsx)(t.p,{children:`Horizontal bar charts with categories on the y-axis and values on the x-axis, ideal for long category names:`}),`
`,(0,F.jsx)(s,{of:y}),`
`,(0,F.jsx)(o,{language:`jsx`,code:`<BarChart
	data={data}
	orientation="horizontal"
	gridVisibility="y"
/>`}),`
`,(0,F.jsx)(t.h2,{id:`multiple-series`,children:`Multiple Series`}),`
`,(0,F.jsx)(t.h3,{id:`multi-series-charts`,children:`Multi-Series Charts`}),`
`,(0,F.jsx)(t.p,{children:`Display multiple data series with automatic color differentiation and grouped bars:`}),`
`,(0,F.jsx)(s,{of:_}),`
`,(0,F.jsx)(o,{language:`jsx`,code:`<BarChart
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
`,(0,F.jsx)(t.h3,{id:`many-data-series`,children:`Many Data Series`}),`
`,(0,F.jsxs)(t.p,{children:[`The component handles large numbers of series gracefully with automatic color cycling. Use the `,(0,F.jsx)(t.code,{children:`seriesCount`}),` control above to see how the chart handles many series:`]}),`
`,(0,F.jsx)(o,{language:`jsx`,code:`<BarChart
	data={allCountriesData}
	withTooltips={true}
	showLegend={true}
/>`}),`
`,(0,F.jsx)(t.h2,{id:`comparison-mode`,children:`Comparison Mode`}),`
`,(0,F.jsxs)(t.p,{children:[`Add a comparison series — for example "this period vs. previous period" — by giving a series `,(0,F.jsx)(t.code,{children:`options.type: 'comparison'`}),`. It renders as an opaque bar centered `,(0,F.jsx)(t.strong,{children:`behind`}),` the primary series that shares its `,(0,F.jsx)(t.code,{children:`group`}),`. The comparison bar is wider than the primary bar (the primary is narrowed) so it peeks on each side and above, while a small gap is kept between series and a larger gap between ticks. The comparison takes the lightest tint of its primary's color that keeps 3:1 contrast against the chart background, and the primary the shade of its color that keeps 3:1 against that tint. A primary with its own `,(0,F.jsx)(t.code,{children:`options.stroke`}),` keeps it, and the comparison takes the tint of that color. A comparison with its own `,(0,F.jsx)(t.code,{children:`options.stroke`}),` keeps the pair's colors as given.`]}),`
`,(0,F.jsx)(s,{of:h}),`
`,(0,F.jsx)(o,{language:`jsx`,code:`<BarChart
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
`,(0,F.jsxs)(t.p,{children:[`It composes with grouped bars: pair each primary series with its own `,(0,F.jsx)(t.code,{children:`type: 'comparison'`}),` series of the same `,(0,F.jsx)(t.code,{children:`group`}),`, and the groups render side by side, each with its own comparison bar.`]}),`
`,(0,F.jsx)(s,{of:p}),`
`,(0,F.jsx)(t.p,{children:(0,F.jsx)(t.strong,{children:`Notes:`})}),`
`,(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[`A comparison series pairs with the primary series that shares its `,(0,F.jsx)(t.code,{children:`group`}),` (when there is a single primary series, `,(0,F.jsx)(t.code,{children:`group`}),` can be omitted on both).`]}),`
`,(0,F.jsx)(t.li,{children:`Comparison values are included in the value-axis domain, so a previous period taller than the current one is never clipped.`}),`
`,(0,F.jsxs)(t.li,{children:[`Comparison series must reuse the primary series' category keys (the `,(0,F.jsx)(t.code,{children:`label`}),`/`,(0,F.jsx)(t.code,{children:`date`}),` of each point) so each comparison bar lines up with its primary bar.`]}),`
`,(0,F.jsx)(t.li,{children:`The comparison bar isn't a separate hover/keyboard target (the primary bar drives interaction), but the tooltip shows both the current and previous period values for the hovered category.`}),`
`,(0,F.jsxs)(t.li,{children:[`Each series gets its own legend item by default. Set `,(0,F.jsx)(t.code,{children:`legend.collapseGroups`}),` to render one item per group, labeled by its primary series; combined with `,(0,F.jsx)(t.code,{children:`legend.interactive`}),`, clicking that item toggles the primary and its previous-period series together. Its swatch takes the comparison bar's tint, the wider bar that frames the group. Pair it with `,(0,F.jsx)(t.code,{children:`legend.comparisonItem`}),` to append a static item explaining the comparison bars once `,(0,F.jsx)(t.code,{children:`collapseGroups`}),` folds it away. Use `,(0,F.jsx)(t.code,{children:`legend.comparisonSeriesItems`}),` instead to give each metric's comparison its own static item, labeled from the metric's label and left out while that metric is hidden. When every series is hidden, the axes are dropped and only the empty state is shown.`]}),`
`,(0,F.jsxs)(t.li,{children:[`Collapsing the legend requires the primary and its comparison series to share a `,(0,F.jsx)(t.code,{children:`group`}),`. This is stricter than the bars themselves: rendering pairs a comparison with the sole primary even when `,(0,F.jsx)(t.code,{children:`group`}),` is omitted, but the legend has no single-primary fallback, so without a shared `,(0,F.jsx)(t.code,{children:`group`}),` the pair keeps separate legend items.`]}),`
`,(0,F.jsxs)(t.li,{children:[`With pattern fills enabled (`,(0,F.jsx)(t.code,{children:`withPatterns`}),`), the comparison bar takes a pattern of its own, in its tint.`]}),`
`,(0,F.jsxs)(t.li,{children:[`Styling comes from the theme at `,(0,F.jsx)(t.code,{children:`barChart.barStyles.comparison`}),`. `,(0,F.jsx)(t.code,{children:`widthFactor`}),` (default `,(0,F.jsx)(t.code,{children:`1.5`}),`) controls how much wider the comparison bar is than the primary — the primary is narrowed to `,(0,F.jsx)(t.code,{children:`1 / widthFactor`}),` of the slot. `,(0,F.jsx)(t.code,{children:`opacity`}),` is deprecated: set, it keeps the older translucent comparison bar in its primary's color.`]}),`
`]}),`
`,(0,F.jsx)(t.h2,{id:`overlap-layout`,children:`Overlap Layout`}),`
`,(0,F.jsxs)(t.p,{children:[`Set `,(0,F.jsx)(t.code,{children:`layout="overlap"`}),` to draw one metric inside another, as Jetpack Stats v1 draws visitors inside views. Each category has up to two slots: every primary series sits in the first, and every `,(0,F.jsx)(t.code,{children:`type: 'comparison'`}),` series in a second beside it while any comparison is shown. Within a slot, the `,(0,F.jsx)(t.code,{children:`group`}),`s overlap: the first group in `,(0,F.jsx)(t.code,{children:`data`}),` is the back bar at the full slot width, and each later group is narrower and drawn in front (with two groups, the front bar is half as wide). Series without a `,(0,F.jsx)(t.code,{children:`group`}),` share one layer.`]}),`
`,(0,F.jsx)(s,{of:m}),`
`,(0,F.jsx)(o,{language:`jsx`,code:`<BarChart
	layout="overlap"
	data={[
		{ label: 'Views', group: 'views', data: views },
		{ label: 'Previous views', group: 'views', options: { type: 'comparison' }, data: previousViews },
		{ label: 'Visitors', group: 'visitors', data: visitors },
		{ label: 'Previous visitors', group: 'visitors', options: { type: 'comparison' }, data: previousVisitors },
	]}
	withTooltips
	showLegend
/>`}),`
`,(0,F.jsx)(t.p,{children:(0,F.jsx)(t.strong,{children:`Notes:`})}),`
`,(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[`Bars are opaque. Each slot is toned from a base color: the back series' `,(0,F.jsx)(t.code,{children:`options.stroke`}),` if it has one, otherwise the palette color of the slot (the first palette color for the primaries, the second for the comparisons). The back bar takes the lightest tint of the base that keeps 3:1 contrast against the chart background, and each bar in front the shade of the base that keeps 3:1 against the bar behind it. A bar alone in its slot is a back bar, so it takes the tint too.`]}),`
`,(0,F.jsxs)(t.li,{children:[`A slot keeps the colors it was given when its front-most series has an `,(0,F.jsx)(t.code,{children:`options.stroke`}),`, or when a color or the background is not a hex color.`]}),`
`,(0,F.jsxs)(t.li,{children:[`The legend swatches take the bar colors. Without `,(0,F.jsx)(t.code,{children:`legend.collapseGroups`}),`, the legend lists the series in slot order: every primary, then every comparison. For a custom tooltip or legend, read them with `,(0,F.jsx)(t.code,{children:`useBarColors()( series, { layout: 'overlap' } )`}),`.`]}),`
`,(0,F.jsx)(t.li,{children:`Hiding a series keeps the slots and colors: a comparison keeps its slot while its primary is hidden. The widths follow the groups shown, so a group widens to the full slot while the group behind it is hidden.`}),`
`,(0,F.jsxs)(t.li,{children:[`The tooltip lists every series at the hovered category, and a `,(0,F.jsx)(t.code,{children:`null`}),` reading as "No data". Pointer callbacks report the front-most bar of the slot under the pointer.`]}),`
`,(0,F.jsx)(t.li,{children:`Arrow keys step one slot at a time. The selected slot is outlined as a whole, and the keyboard tooltip lists every bar at its category.`}),`
`,(0,F.jsxs)(t.li,{children:[`The theme's `,(0,F.jsx)(t.code,{children:`barChart.barStyles.comparison`}),` does not apply in this layout.`]}),`
`]}),`
`,(0,F.jsx)(t.h2,{id:`visual-features`,children:`Visual Features`}),`
`,(0,F.jsx)(t.h3,{id:`pattern-fills`,children:`Pattern Fills`}),`
`,(0,F.jsx)(t.p,{children:`Add visual accessibility and distinction with pattern fills instead of solid colors:`}),`
`,(0,F.jsx)(s,{of:k}),`
`,(0,F.jsx)(o,{language:`jsx`,code:`<BarChart
	data={data}
	withPatterns={true}
	withTooltips={true}
/>`}),`
`,(0,F.jsx)(t.p,{children:(0,F.jsx)(t.strong,{children:`Pattern types automatically cycle through:`})}),`
`,(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Lines`}),`: Diagonal line patterns`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Circles`}),`: Circular dot patterns`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Waves`}),`: Wave line patterns`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Hexagons`}),`: Hexagonal patterns`]}),`
`]}),`
`,(0,F.jsx)(t.h3,{id:`bar-radius`,children:`Bar Radius`}),`
`,(0,F.jsxs)(t.p,{children:[`Bars are square by default. Set the `,(0,F.jsx)(t.code,{children:`--a8c-charts-border-radius-bar-chart`}),` catalog role inside the provider tree to round their corners:`]}),`
`,(0,F.jsx)(s,{of:u}),`
`,(0,F.jsx)(o,{language:`css`,code:`.a8c-charts-scope {
	--a8c-charts-border-radius-bar-chart: var(--wpds-border-radius-sm);
}`}),`
`,(0,F.jsx)(t.h3,{id:`smart-formatting`,children:`Smart Formatting`}),`
`,(0,F.jsx)(t.p,{children:`Automatic formatting handles large numbers with appropriate abbreviations:`}),`
`,(0,F.jsx)(s,{of:C}),`
`,(0,F.jsx)(t.p,{children:`Values are automatically formatted as:`}),`
`,(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`1B and above`}),`: "1.23B"`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`1M and above`}),`: "1.2M"`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`1K and above`}),`: "1k"`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Below 1K`}),`: "1,234"`]}),`
`]}),`
`,(0,F.jsx)(t.h2,{id:`data-formats`,children:`Data Formats`}),`
`,(0,F.jsx)(t.h3,{id:`time-series-data`,children:`Time Series Data`}),`
`,(0,F.jsx)(t.p,{children:`Bar charts support both categorical labels and time-series data:`}),`
`,(0,F.jsx)(s,{of:E}),`
`,(0,F.jsxs)(t.p,{children:[`Date-based series pick their default tick format from the data's bucket resolution and
overall span, the same way line and area charts do. Month-or-coarser buckets follow the
resolution alone — month names with the year at January, or plain years for yearly buckets
— since they carry no day to print at any span. Daily-or-finer buckets narrow with the
span: hour ticks within a day, hour ticks dated at midnight for sub-daily data spanning up
to a week, calendar dates within a year, and years beyond that. An explicit
`,(0,F.jsx)(t.code,{children:`options.axis.x.tickFormat`}),` still overrides (`,(0,F.jsx)(t.code,{children:`axis.y`}),` on a horizontal chart).`]}),`
`,(0,F.jsxs)(t.p,{children:[`The tick values are chosen rather than sampled evenly by index, the same selection line
and area charts use — otherwise the axis would routinely skip the bucket that prints the
year or dates the day, and could repeat a label. Over spans long
enough that nothing closer together reaches a boundary, the ticks fall on whole days or
whole years instead. `,(0,F.jsx)(t.code,{children:`numTicks`}),` caps how many it picks.`]}),`
`,(0,F.jsx)(s,{of:w}),`
`,(0,F.jsxs)(t.p,{children:[`Default tooltip labels name the hovered bar's bucket, spelled out in full:
`,(0,F.jsx)(t.code,{children:`August 2, 2026 at 6 AM`}),` for hourly buckets, `,(0,F.jsx)(t.code,{children:`August 2, 2026`}),` for daily ones,
`,(0,F.jsx)(t.code,{children:`August 2026`}),` for monthly, `,(0,F.jsx)(t.code,{children:`2026`}),` for yearly, and `,(0,F.jsx)(t.code,{children:`Week of January 12, 2026`}),` for weekly.
A monthly bar reads `,(0,F.jsx)(t.code,{children:`August 2026`}),` rather than `,(0,F.jsx)(t.code,{children:`August 1, 2026`}),` — the day is precision the
bucket doesn't carry. The tooltip always names the bucket's own granularity, so it stays
finer than the ticks whenever the span coarsens the axis.`]}),`
`,(0,F.jsxs)(t.p,{children:[`When the bucket resolution is already known — from a granularity selector, say — declare it
with `,(0,F.jsx)(t.code,{children:`options.axis.x.tickResolution`}),` (`,(0,F.jsx)(t.code,{children:`axis.y`}),` on a horizontal chart) instead of leaving the
chart to infer it from point spacing. Two cases need it: a single-bucket series, which has
no spacing to measure, and weekly buckets, whose seven-day spacing is indistinguishable from
sparse daily data — undeclared, they are read as daily and the tooltip names one day instead
of the week.`]}),`
`,(0,F.jsx)(s,{of:T}),`
`,(0,F.jsx)(o,{language:`jsx`,code:`// Date objects
{ date: new Date('2024-01-01'), value: 2230 }

// Date strings (automatically parsed)
{ dateString: '2024-01-01', value: 2580 }
{ dateString: '2024-01-01 14:30:00', value: 3500 }

// Category labels
{ label: '2024', value: 126 }`}),`
`,(0,F.jsx)(t.h3,{id:`custom-axis-formatting`,children:`Custom Axis Formatting`}),`
`,(0,F.jsx)(t.p,{children:`Configure custom formatting for time-series or numerical axes:`}),`
`,(0,F.jsx)(o,{language:`jsx`,code:`<BarChart
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
`,(0,F.jsx)(t.h3,{id:`buckets-with-no-data`,children:`Buckets With No Data`}),`
`,(0,F.jsxs)(t.p,{children:[`Set a point's `,(0,F.jsx)(t.code,{children:`value`}),` to `,(0,F.jsx)(t.code,{children:`null`}),` when its bucket has no reading, such as the days before a site launched. The bucket keeps its place on the axis, so the chart still spans the full range, but it draws no bar and its tooltip reads "No data" rather than 0. Use `,(0,F.jsx)(t.code,{children:`0`}),` only for a real reading of zero: in the example below April is a real zero, and with `,(0,F.jsx)(t.code,{children:`showZeroValues`}),` on it keeps a short stub where the months before it have nothing.`]}),`
`,(0,F.jsx)(s,{of:f}),`
`,(0,F.jsx)(t.h2,{id:`zero-value-display`,children:`Zero Value Display`}),`
`,(0,F.jsx)(t.h3,{id:`visual-enhancement-for-zero-values`,children:`Visual Enhancement for Zero Values`}),`
`,(0,F.jsxs)(t.p,{children:[`By default, bars with zero values have no visual height, making them difficult to identify. The `,(0,F.jsx)(t.code,{children:`showZeroValues`}),` feature provides better user experience by giving zero values a minimum visual height while preserving data integrity:`]}),`
`,(0,F.jsx)(s,{of:A}),`
`,(0,F.jsx)(o,{language:`jsx`,code:`<BarChart
	data={dataWithZeros}
	showZeroValues={true}
	withTooltips={true}
/>`}),`
`,(0,F.jsx)(t.h2,{id:`error-handling`,children:`Error Handling`}),`
`,(0,F.jsx)(t.p,{children:`The chart gracefully handles various error states and edge cases:`}),`
`,(0,F.jsx)(s,{of:v}),`
`,(0,F.jsx)(t.p,{children:(0,F.jsx)(t.strong,{children:`Supported scenarios:`})}),`
`,(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsx)(t.li,{children:`Empty data arrays`}),`
`,(0,F.jsx)(t.li,{children:`Invalid data values (NaN, undefined)`}),`
`,(0,F.jsx)(t.li,{children:`Buckets with no reading (null), drawn as a gap rather than rejected`}),`
`,(0,F.jsx)(t.li,{children:`Missing data properties`}),`
`,(0,F.jsx)(t.li,{children:`Invalid date formats`}),`
`,(0,F.jsx)(t.li,{children:`Single data points`}),`
`]}),`
`,(0,F.jsx)(t.h2,{id:`interactive-features`,children:`Interactive Features`}),`
`,(0,F.jsx)(t.h3,{id:`tooltips`,children:`Tooltips`}),`
`,(0,F.jsxs)(t.p,{children:[`Use `,(0,F.jsx)(t.code,{children:`tooltipStyle`}),` to override tooltip box styles, including padding, without CSS priority overrides.`]}),`
`,(0,F.jsx)(t.p,{children:`Enable rich interactive tooltips that display detailed information on hover:`}),`
`,(0,F.jsx)(o,{language:`jsx`,code:`<BarChart
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
`,(0,F.jsx)(t.h3,{id:`band-highlight`,children:`Band Highlight`}),`
`,(0,F.jsxs)(t.p,{children:[`Set `,(0,F.jsx)(t.code,{children:`withBandHighlight`}),` alongside `,(0,F.jsx)(t.code,{children:`withTooltips`}),` to shade the active band across the plot. Hover a bar or use arrow keys after focusing the chart. Escape clears the keyboard selection and its tooltip; a hover highlight remains. Without `,(0,F.jsx)(t.code,{children:`withTooltips`}),`, the chart still renders, but neither the highlight nor its callback runs; development builds warn about this configuration.`]}),`
`,(0,F.jsx)(s,{of:l}),`
`,(0,F.jsxs)(t.p,{children:[`For an overlay outside the chart, `,(0,F.jsx)(t.code,{children:`onBandHighlightChange`}),` reports the active datum, series `,(0,F.jsx)(t.code,{children:`key`}),`, point `,(0,F.jsx)(t.code,{children:`index`}),` within the rendered series, and the band rectangle in SVG coordinates. It reports the initial selection on mount (normally `,(0,F.jsx)(t.code,{children:`null`}),`), changes to that selection, and `,(0,F.jsx)(t.code,{children:`null`}),` on dismissal or unmount. The callback also works without rendering the built-in highlight.`]}),`
`,(0,F.jsx)(t.h3,{id:`beside-tooltips`,children:`Beside Tooltips`}),`
`,(0,F.jsxs)(t.p,{children:[`Use `,(0,F.jsx)(t.code,{children:`tooltipPlacement="beside"`}),` to offset the tooltip horizontally from the active band center on vertical bar charts without vertical flipping. It flips horizontally near an edge and stays within the viewport or clipping ancestor. Its top follows the selected datum unless `,(0,F.jsx)(t.code,{children:`tooltipAnchorTop`}),` overrides it. This override also applies to `,(0,F.jsx)(t.code,{children:`"auto"`}),` placement, which can still flip vertically. The anchor uses SVG coordinates: values less than `,(0,F.jsx)(t.code,{children:`margin.top`}),` are above the plot, and negative values are above the SVG.`]}),`
`,(0,F.jsx)(t.p,{children:`The horizontal anchor is the band center, not its edge, so a wide bar can be covered by the tooltip. Negative top anchors remain subject to clipping bounds and can be clamped back into view.`}),`
`,(0,F.jsx)(s,{of:d}),`
`,(0,F.jsx)(o,{language:`tsx`,code:`import { BarChart } from '@automattic/charts';

<BarChart
	data={ data }
	withTooltips={ true }
	withBandHighlight={ true }
	tooltipPlacement="beside"
	tooltipAnchorTop={ 40 }
/>`}),`
`,(0,F.jsx)(t.h3,{id:`keyboard-navigation`,children:`Keyboard Navigation`}),`
`,(0,F.jsx)(t.p,{children:`Charts are fully keyboard accessible:`}),`
`,(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Tab`}),`: Focus the chart`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Arrow Keys`}),`: Navigate between bars`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Enter/Space`}),`: Activate tooltips`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Escape`}),`: Close active tooltips and return focus to the chart`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Pointer`}),`: Moving the pointer over the chart ends a keyboard selection; the next arrow key continues from the hovered bar`]}),`
`]}),`
`,(0,F.jsx)(t.h2,{id:`legends`,children:`Legends`}),`
`,(0,F.jsxs)(t.p,{children:[`Use the composition API to add a legend by placing `,(0,F.jsx)(t.code,{children:`<BarChart.Legend />`}),` as a child:`]}),`
`,(0,F.jsx)(s,{of:D}),`
`,(0,F.jsx)(o,{language:`jsx`,code:`<BarChart data={data}>
	<BarChart.Legend />
</BarChart>`}),`
`,(0,F.jsxs)(t.p,{children:[`For full legend configuration options — positioning, orientation, shapes, interactivity, and the composition API — see the `,(0,F.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-components-legend--docs`,children:`Legend component docs`}),`.`]}),`
`,(0,F.jsxs)(t.p,{children:[`Use `,(0,F.jsx)(t.code,{children:`defaultHiddenSeries`}),` to hide selected series initially while keeping them available through an interactive legend. The first defined list is used; later values for the same `,(0,F.jsx)(t.code,{children:`chartId`}),` are ignored. The defaults are seeded once per `,(0,F.jsx)(t.code,{children:`chartId`}),`, so a series the reader reveals stays revealed even if the chart unmounts and comes back — swapping between chart types, or a tab the chart lives in going away and returning. Only a new `,(0,F.jsx)(t.code,{children:`chartId`}),` seeds again.`]}),`
`,(0,F.jsx)(s,{of:O}),`
`,(0,F.jsx)(t.h2,{id:`theming-integration`,children:`Theming Integration`}),`
`,(0,F.jsx)(t.p,{children:`Bar Charts integrate seamlessly with the chart theming system. The default theme has neutral styling, and is automatically applied to all charts unless a custom theme is provided.`}),`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.strong,{children:`Series colors come from the palette custom properties, not the theme object.`}),` Set as many of the five slots as you need; an unset slot is skipped, and charts generates accessible colors beyond whatever you set:`]}),`
`,(0,F.jsx)(o,{language:`css`,code:`.a8c-charts-scope {
	--a8c-charts-color-series-1: #FF6B6B;
	--a8c-charts-color-series-2: #4ECDC4;
	--a8c-charts-color-series-3: #45B7D1;
}`}),`
`,(0,F.jsxs)(t.p,{children:[`Set a data point's optional `,(0,F.jsx)(t.code,{children:`color`}),` to override the series color for that bar. Points without a color retain the series color. When `,(0,F.jsx)(t.code,{children:`withPatterns`}),` is enabled, pattern fills take precedence over point colors. The shared point types expose this field, but only BarChart uses it.`]}),`
`,(0,F.jsx)(s,{of:b}),`
`,(0,F.jsxs)(t.p,{children:[`For other catalog colors, declare the corresponding role. The closest declaration inside the provider tree wins, so scope the rule to one dashboard, or to `,(0,F.jsx)(t.code,{children:`.a8c-charts-scope`}),` to move every chart on the page:`]}),`
`,(0,F.jsx)(o,{language:`css`,code:`.my-dashboard {
	--a8c-charts-color-grid: #E0E0E0;
}`}),`
`,(0,F.jsx)(t.h2,{id:`responsive-behavior`,children:`Responsive Behavior`}),`
`,(0,F.jsxs)(t.p,{children:[`By default, charts `,(0,F.jsx)(t.strong,{children:`fill their parent container's dimensions`}),`. The parent must have an explicit height:`]}),`
`,(0,F.jsx)(s,{of:_}),`
`,(0,F.jsx)(o,{language:`jsx`,code:`// Fill parent container (default) - parent needs explicit height
<div style={{ width: '100%', height: '400px' }}>
	<BarChart data={data} />
</div>

// Use aspect ratio - height from width, contained if the parent is shorter
<div style={{ width: '100%' }}>
	<BarChart data={data} aspectRatio={0.5} />
</div>

// Fixed dimensions
<BarChart data={data} width={800} height={400} />`}),`
`,(0,F.jsxs)(t.p,{children:[`For more details on responsive behavior, see the `,(0,F.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design`,children:`Responsive Design section`}),` in the introduction.`]}),`
`,(0,F.jsx)(t.h2,{id:`animation`,children:`Animation`}),`
`,(0,F.jsx)(t.p,{children:`The Bar Chart component supports an optional entry animation that creates a smooth reveal effect when the chart first renders:`}),`
`,(0,F.jsx)(s,{of:c}),`
`,(0,F.jsx)(o,{language:`tsx`,code:`<BarChart
	data={ data }
	width={ 800 }
	height={ 400 }
	animation={ true }
/>`}),`
`,(0,F.jsx)(t.h3,{id:`animation-behavior`,children:`Animation Behavior`}),`
`,(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Opt-in`}),`: Animation is disabled by default and must be explicitly enabled with the `,(0,F.jsx)(t.code,{children:`animation`}),` prop`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Accessibility`}),`: Automatically respects the user's `,(0,F.jsx)(t.code,{children:`prefers-reduced-motion`}),` system setting - animation will not play for users who prefer reduced motion`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Effect`}),`: Creates a growing effect where bars scale from zero to their full size. Vertical bars rise from the bottom, while horizontal bars stretch from the left`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Duration`}),`: 1000ms (1 second) with ease-out timing`]}),`
`]}),`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.strong,{children:`Note`}),`: The animation plays once when the chart initially renders and does not repeat.`]}),`
`,(0,F.jsx)(t.h2,{id:`advanced-customization`,children:`Advanced Customization`}),`
`,(0,F.jsx)(t.h3,{id:`grid-configuration`,children:`Grid Configuration`}),`
`,(0,F.jsx)(t.p,{children:`Control grid line visibility and appearance:`}),`
`,(0,F.jsx)(o,{language:`jsx`,code:`// Show only horizontal grid lines (default for vertical bars)
<BarChart data={data} gridVisibility="x" />

// Show only vertical grid lines (default for horizontal bars)
<BarChart data={data} gridVisibility="y" />

// Show both grid lines
<BarChart data={data} gridVisibility="xy" />

// Hide all grid lines
<BarChart data={data} gridVisibility="none" />`}),`
`,(0,F.jsx)(t.h3,{id:`custom-margins`,children:`Custom Margins`}),`
`,(0,F.jsx)(t.p,{children:`Control chart layout with precise margin settings:`}),`
`,(0,F.jsx)(o,{language:`jsx`,code:`<BarChart
	data={data}
	margin={{
		top: 20,
		right: 60,
		bottom: 80,
		left: 80
	}}
/>`}),`
`,(0,F.jsx)(t.h3,{id:`scale-and-axis-configuration`,children:`Scale and Axis Configuration`}),`
`,(0,F.jsxs)(t.p,{children:[`The value axis starts at zero, so a bar's length is proportional to its value and a run of similar values reads as flat rather than as swings between empty and full. Pass `,(0,F.jsx)(t.code,{children:`zero: false`}),` on the value scale (`,(0,F.jsx)(t.code,{children:`yScale`}),`, or `,(0,F.jsx)(t.code,{children:`xScale`}),` for a horizontal chart) to fit the axis to the data instead; comparison mode keeps the zero baseline regardless, and an explicit `,(0,F.jsx)(t.code,{children:`domain`}),` is used as given.`]}),`
`,(0,F.jsx)(o,{language:`jsx`,code:`<BarChart
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
`,(0,F.jsxs)(t.p,{children:[`When every visible value is a whole number, the value axis places ticks only on whole numbers, instead of repeating a rounded label at fractional steps. Pass `,(0,F.jsx)(t.code,{children:`options.axis.y.tickValues`}),` to choose the ticks yourself (`,(0,F.jsx)(t.code,{children:`axis.x`}),` on a horizontal chart). A value domain you pin with `,(0,F.jsx)(t.code,{children:`options.yScale.domain`}),` (`,(0,F.jsx)(t.code,{children:`xScale`}),` on a horizontal chart) keeps every tick, so a percentage axis on `,(0,F.jsx)(t.code,{children:`[ 0, 1 ]`}),` still steps by 20%.`]}),`
`,(0,F.jsx)(s,{of:S}),`
`,(0,F.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,F.jsxs)(t.p,{children:[`See `,(0,F.jsx)(t.a,{href:`#keyboard-navigation`,children:`Keyboard Navigation`}),` for supported keys and focus behavior.`]}),`
`,(0,F.jsx)(t.h3,{id:`screen-reader-support`,children:`Screen Reader Support`}),`
`,(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[`Chart container has `,(0,F.jsx)(t.code,{children:`role="application"`}),`, so screen readers pass arrow keys through to the chart's point navigation.`]}),`
`,(0,F.jsxs)(t.li,{children:[`Set `,(0,F.jsx)(t.code,{children:`ariaLabel`}),` to name the chart. See `,(0,F.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-introduction--docs#accessible-names`,children:`Accessible names`}),`.`]}),`
`,(0,F.jsx)(t.li,{children:`Individual bars are navigable and announced with their values`}),`
`,(0,F.jsx)(t.li,{children:`Interactive elements have appropriate ARIA attributes`}),`
`,(0,F.jsxs)(t.li,{children:[`Color information is supplemented with patterns when `,(0,F.jsx)(t.code,{children:`withPatterns`}),` is enabled`]}),`
`]}),`
`,(0,F.jsx)(t.h3,{id:`focus-management`,children:`Focus Management`}),`
`,(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsx)(t.li,{children:`Clear visual focus indicators on chart and individual bars`}),`
`,(0,F.jsx)(t.li,{children:`Logical tab order through interactive elements`}),`
`,(0,F.jsx)(t.li,{children:`Focus restoration after modal interactions`}),`
`]})]})}function P(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,F.jsx)(t,{...e,children:(0,F.jsx)(N,{...e})}):N(e)}var F;e((()=>{F=t(),r(),i(),j()}))();export{P as default};