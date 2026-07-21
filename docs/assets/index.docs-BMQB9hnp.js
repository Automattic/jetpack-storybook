import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{bt as n}from"./esm-Bl9YXYIe.js";import{i as r,n as i,r as a,t as o}from"./blocks-ghd1fyUq.js";import{t as s}from"./mdx-react-shim-DEfvynq6.js";import{AspectRatio as c,Calendar as l,Compact as u,Default as d,ErrorStates as f,FixedDimensions as p,LargeValues as m,MaximumCellSize as h,MinimumCellSize as g,WithCompositionLegend as _,n as v,t as y}from"./index.stories-C-aV60Yq.js";function b(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(i,{title:`JS Packages/Charts Library/Charts/Heatmap Chart`,of:y}),`
`,(0,S.jsx)(t.h1,{id:`heatmap-chart`,children:`Heatmap Chart`}),`
`,(0,S.jsxs)(t.p,{children:[`Visualize values across a two-dimensional matrix of cells on a sequential color scale. Cells transition from a light tint to the full primary color based on relative value, with `,(0,S.jsx)(t.code,{children:`null`}),` cells rendered in a neutral empty-cell color.`]}),`
`,(0,S.jsx)(o,{of:d}),`
`,(0,S.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,S.jsxs)(t.p,{children:[`The Heatmap Chart renders a CSS Grid of colored cells where color intensity maps to cell value. Shading is done with CSS `,(0,S.jsx)(t.code,{children:`color-mix`}),` against the resolved primary color, so the scale adapts to the chart background. It is suitable for activity matrices, time-based frequency data, and any dataset with two categorical axes.`]}),`
`,(0,S.jsx)(a,{language:`jsx`,code:`import { HeatmapChart } from '@automattic/charts';
import '@automattic/charts/style.css';

<HeatmapChart
	data={ columns }
	rowLabels={ [ 'Mon', '', 'Wed', '', 'Fri', '', '' ] }
	withTooltips={ true }
/>`}),`
`,(0,S.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,S.jsxs)(t.p,{children:[`For detailed information about component props, types, and utility functions, see the `,(0,S.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-heatmap-chart-api-reference--docs`,children:`Heatmap Chart API Reference`}),`.`]}),`
`,(0,S.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,S.jsx)(t.h3,{id:`default-matrix`,children:`Default Matrix`}),`
`,(0,S.jsxs)(t.p,{children:[`The simplest heatmap requires `,(0,S.jsx)(t.code,{children:`data`}),` — an array of `,(0,S.jsx)(t.code,{children:`HeatmapColumn`}),` objects, each containing an optional column `,(0,S.jsx)(t.code,{children:`label`}),` and a `,(0,S.jsx)(t.code,{children:`data`}),` array of `,(0,S.jsx)(t.code,{children:`HeatmapCell`}),` objects:`]}),`
`,(0,S.jsx)(a,{language:`jsx`,code:`const columns = [
{
	label: 'Q1',
	data: [
		{ label: 'Mon', value: 3 },
		{ label: 'Tue', value: null },
		{ label: 'Wed', value: 5 },
	],
},
{
	label: '',
	data: [
		{ label: 'Mon', value: 1 },
		{ label: 'Tue', value: 4 },
		{ label: 'Wed', value: 2 },
	],
},
];

<HeatmapChart
	data={ columns }
	rowLabels={ [ 'Mon', '', 'Wed' ] }
	withTooltips={ true }
/>`}),`
`,(0,S.jsx)(t.h3,{id:`required-props`,children:`Required Props`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`data`})}),`: `,(0,S.jsx)(t.code,{children:`HeatmapColumn[]`}),` — array of columns, each with optional `,(0,S.jsx)(t.code,{children:`label`}),` and a `,(0,S.jsx)(t.code,{children:`data`}),` array of cells`]}),`
`]}),`
`,(0,S.jsx)(t.h3,{id:`optional-props`,children:`Optional Props`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`rowLabels`})}),`: y-axis labels by row index. Empty entries render blank.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`withTooltips`})}),` (default: `,(0,S.jsx)(t.code,{children:`false`}),`): show a tooltip on cell hover`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`compact`})}),` (default: `,(0,S.jsx)(t.code,{children:`false`}),`): tighten spacing and suppress in-cell values for compact widgets`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`showValues`})}),` (default: `,(0,S.jsx)(t.code,{children:`!compact`}),`): render the numeric value inside each cell (compact notation for large numbers; the tooltip keeps full precision)`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`maxCellWidth`})}),` / `,(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`maxCellHeight`})}),`: cap how large cells may grow in non-compact mode`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`minCellWidth`})}),` / `,(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`minCellHeight`})}),` (default: `,(0,S.jsx)(t.code,{children:`0`}),`): keep cells from shrinking below a readable size and let the grid overflow instead`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`primaryColor`})}),`: color the scale interpolates toward at the highest value (prop > `,(0,S.jsx)(t.code,{children:`heatmapChart.primaryColor`}),` > palette `,(0,S.jsx)(t.code,{children:`colors[0]`}),`)`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`width`})}),` / `,(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`height`})}),`: explicit dimensions in pixels. When omitted the chart fills its parent.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`aspectRatio`})}),`: Height-to-width ratio (e.g. `,(0,S.jsx)(t.code,{children:`0.4`}),`) for responsive charts; the chart is contained within its parent on both axes. When omitted, fills the parent container's height`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`maxWidth`})}),`: Maximum width constraint for responsive charts (default: `,(0,S.jsx)(t.code,{children:`1200`}),`)`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`resizeDebounceTime`})}),`: Debounce delay for resize events in ms (default: `,(0,S.jsx)(t.code,{children:`300`}),`)`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`gap`})}),` (default: `,(0,S.jsx)(t.code,{children:`'md'`}),`): gap between chart layout regions (chart area, legend, children)`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`chartId`})}),`: custom identifier for accessibility labelling`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`className`})}),`: additional CSS class for the outer element`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`children`})}),`: composition children (e.g. `,(0,S.jsx)(t.code,{children:`<HeatmapChart.Legend />`}),`)`]}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`compact-mode`,children:`Compact Mode`}),`
`,(0,S.jsxs)(t.p,{children:[`Use `,(0,S.jsx)(t.code,{children:`compact`}),` for narrow widgets or dashboards where vertical space is limited. The chart renders fixed-size square cells (the theme's `,(0,S.jsx)(t.code,{children:`heatmapChart.compactCellSize`}),`, default 11px), tightens cell gaps, hides in-cell values, and thins axis labels.`]}),`
`,(0,S.jsx)(o,{of:u}),`
`,(0,S.jsx)(a,{language:`jsx`,code:`<HeatmapChart
	data={ columns }
	rowLabels={ rowLabels }
	compact={ true }
/>`}),`
`,(0,S.jsx)(t.h2,{id:`large-values`,children:`Large Values`}),`
`,(0,S.jsxs)(t.p,{children:[`In-cell values use compact notation (e.g. `,(0,S.jsx)(t.code,{children:`748.5K`}),`, `,(0,S.jsx)(t.code,{children:`1.2M`}),`) so large numbers fit the cell. The tooltip and each cell's accessible label keep the full, precise value.`]}),`
`,(0,S.jsx)(o,{of:m}),`
`,(0,S.jsx)(t.h2,{id:`cell-size-bounds`,children:`Cell Size Bounds`}),`
`,(0,S.jsxs)(t.p,{children:[`Non-compact heatmaps normally divide the available width and height evenly across all cells. Use maximum bounds to keep sparse grids from producing oversized cells. Width and height caps are independent: setting only `,(0,S.jsx)(t.code,{children:`maxCellWidth`}),` keeps the normal full-height row layout, while setting `,(0,S.jsx)(t.code,{children:`maxCellHeight`}),` content-sizes the chart vertically.`]}),`
`,(0,S.jsx)(o,{of:h}),`
`,(0,S.jsx)(a,{language:`tsx`,code:`<HeatmapChart
	data={ columns }
	rowLabels={ rowLabels }
	maxCellWidth={ 64 }
	maxCellHeight={ 42 }
/>`}),`
`,(0,S.jsx)(t.p,{children:`Minimum bounds preserve readable cell dimensions in dense grids. When the container becomes smaller than the resulting grid, place the chart inside a scrollable container so users can reach the overflowed cells.`}),`
`,(0,S.jsx)(o,{of:g}),`
`,(0,S.jsx)(a,{language:`tsx`,code:`<div style={ { width: '480px', height: '280px', overflow: 'auto' } }>
	<HeatmapChart
		data={ columns }
		rowLabels={ rowLabels }
		minCellWidth={ 44 }
		minCellHeight={ 32 }
	/>
</div>`}),`
`,(0,S.jsxs)(t.p,{children:[`Cell size bounds are ignored in compact mode, which uses the theme's fixed `,(0,S.jsx)(t.code,{children:`compactCellSize`}),` instead.`]}),`
`,(0,S.jsx)(t.h2,{id:`calendar-layout`,children:`Calendar Layout`}),`
`,(0,S.jsxs)(t.p,{children:[`Use `,(0,S.jsx)(t.code,{children:`buildCalendarHeatmapData`}),` to convert a flat `,(0,S.jsx)(t.code,{children:`DataPointDate[]`}),` series into the column/row structure expected by the chart. This produces the GitHub-style contribution graph layout.`]}),`
`,(0,S.jsx)(o,{of:l}),`
`,(0,S.jsx)(a,{language:`jsx`,code:`import { HeatmapChart, buildCalendarHeatmapData } from '@automattic/charts';

const series = [
	{ date: new Date( '2024-01-01' ), value: 3 },
	{ date: new Date( '2024-01-02' ), value: 0 },
	// ...
];

function CalendarHeatmap() {
	const { data, rowLabels } = buildCalendarHeatmapData( series );
	return (
		<HeatmapChart
			data={ data }
			rowLabels={ rowLabels }
			withTooltips={ true }
		/>
	);
}`}),`
`,(0,S.jsxs)(t.p,{children:[(0,S.jsx)(t.code,{children:`buildCalendarHeatmapData`}),` accepts an optional `,(0,S.jsx)(t.code,{children:`options`}),` object:`]}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`weekStartsOn`})}),` (`,(0,S.jsx)(t.code,{children:`0 | 1`}),`, default `,(0,S.jsx)(t.code,{children:`1`}),`): `,(0,S.jsx)(t.code,{children:`0`}),` = Sunday, `,(0,S.jsx)(t.code,{children:`1`}),` = Monday`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`hideOutOfRangeDays`})}),` (`,(0,S.jsx)(t.code,{children:`boolean`}),`, default `,(0,S.jsx)(t.code,{children:`true`}),`): render the week-completion days outside the series' date span as empty grid slots instead of blank cells, giving the calendar ragged edges. Days inside the span stay blank cells even when the series has no entry for them. Hidden slots keep their grid position but paint nothing, and hover and keyboard navigation skip them. Pass `,(0,S.jsx)(t.code,{children:`false`}),` to keep out-of-range days as blank cells.`]}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`fixed-dimensions`,children:`Fixed Dimensions`}),`
`,(0,S.jsxs)(t.p,{children:[`Pass `,(0,S.jsx)(t.code,{children:`width`}),` and `,(0,S.jsx)(t.code,{children:`height`}),` to bypass the responsive wrapper and render at an exact pixel size:`]}),`
`,(0,S.jsx)(o,{of:p}),`
`,(0,S.jsx)(a,{language:`jsx`,code:`<HeatmapChart
	data={ columns }
	rowLabels={ rowLabels }
	width={ 720 }
	height={ 220 }
/>`}),`
`,(0,S.jsx)(t.h2,{id:`composition-api--legend`,children:`Composition API — Legend`}),`
`,(0,S.jsxs)(t.p,{children:[`Add a legend by placing `,(0,S.jsx)(t.code,{children:`<HeatmapChart.Legend />`}),` as a child. The legend renders a gradient scale from the lightest to the fullest shade, labelled with the value range.`]}),`
`,(0,S.jsx)(o,{of:_}),`
`,(0,S.jsx)(a,{language:`jsx`,code:`<HeatmapChart data={ columns } rowLabels={ rowLabels } chartId="my-heatmap">
	<HeatmapChart.Legend />
</HeatmapChart>`}),`
`,(0,S.jsx)(t.h2,{id:`error--empty-state`,children:`Error / Empty State`}),`
`,(0,S.jsxs)(t.p,{children:[`When `,(0,S.jsx)(t.code,{children:`data`}),` is empty the chart renders a "No data available" placeholder:`]}),`
`,(0,S.jsx)(o,{of:f}),`
`,(0,S.jsx)(t.h2,{id:`tooltips`,children:`Tooltips`}),`
`,(0,S.jsxs)(t.p,{children:[`Enable `,(0,S.jsx)(t.code,{children:`withTooltips`}),` to show a tooltip on cell hover `,(0,S.jsx)(t.strong,{children:`and`}),` during keyboard navigation (the arrow-selected cell shows its tooltip, like bar and line charts). The default tooltip shows the cell label and the value, formatted with `,(0,S.jsx)(t.code,{children:`@automattic/number-formatters`}),`. Supply `,(0,S.jsx)(t.code,{children:`renderTooltip`}),` to customize:`]}),`
`,(0,S.jsx)(a,{language:`jsx`,code:`<HeatmapChart
	data={ columns }
	rowLabels={ rowLabels }
	withTooltips={ true }
	renderTooltip={ ( { cellLabel, value, rowLabel, columnLabel } ) => (
		<div>
			<strong>{ cellLabel ?? \`\${ columnLabel } \${ rowLabel }\` }</strong>
			<div>{ value === null ? 'No data' : value }</div>
		</div>
	) }
/>`}),`
`,(0,S.jsx)(t.h2,{id:`theming`,children:`Theming`}),`
`,(0,S.jsxs)(t.p,{children:[`The heatmap resolves its full-intensity color in this order: the `,(0,S.jsx)(t.code,{children:`primaryColor`}),` prop wins, then `,(0,S.jsx)(t.code,{children:`heatmapChart.primaryColor`}),` from the active theme, then the first palette color (`,(0,S.jsx)(t.code,{children:`colors[0]`}),`). The resolved color is fed to CSS `,(0,S.jsx)(t.code,{children:`color-mix`}),`, which derives the lighter shades for lower values.`]}),`
`,(0,S.jsx)(a,{language:`tsx`,code:`import { GlobalChartsProvider, HeatmapChart, type ChartTheme } from '@automattic/charts';

// Per-instance:
<HeatmapChart data={ columns } rowLabels={ rowLabels } primaryColor="#c0392b" />

// Or via the theme:
const customTheme: ChartTheme = {
	heatmapChart: { primaryColor: '#c0392b' },
};

<GlobalChartsProvider theme={ customTheme }>
	<HeatmapChart data={ columns } rowLabels={ rowLabels } />
</GlobalChartsProvider>`}),`
`,(0,S.jsxs)(t.p,{children:[`Everything else — the cell gap, corner radius, in-cell value size, the empty-cell color and the selection ring — comes straight from WordPress design system tokens (`,(0,S.jsx)(t.code,{children:`--wpds-*`}),`) in CSS, so it tracks the active design system theme automatically. There are no per-instance props for these. The `,(0,S.jsx)(t.code,{children:`heatmapChart`}),` theme section exposes just the scale color (`,(0,S.jsx)(t.code,{children:`primaryColor`}),`, above) and the compact sizing (`,(0,S.jsx)(t.code,{children:`compactCellSize`}),`, `,(0,S.jsx)(t.code,{children:`compactCellGap`}),`):`]}),`
`,(0,S.jsx)(a,{language:`tsx`,code:`<GlobalChartsProvider theme={ { heatmapChart: { compactCellSize: 14, compactCellGap: 3 } } }>
	<HeatmapChart data={ columns } rowLabels={ rowLabels } compact />
</GlobalChartsProvider>`}),`
`,(0,S.jsx)(t.h2,{id:`responsive-behavior`,children:`Responsive Behavior`}),`
`,(0,S.jsxs)(t.p,{children:[`By default, the chart `,(0,S.jsx)(t.strong,{children:`fills its parent container's dimensions`}),`, reflowing as the container resizes. The parent must have an explicit height — or the chart must receive an `,(0,S.jsx)(t.code,{children:`aspectRatio`}),` or fixed `,(0,S.jsx)(t.code,{children:`width`}),`/`,(0,S.jsx)(t.code,{children:`height`}),`, otherwise it has no height to fill and collapses. With an `,(0,S.jsx)(t.code,{children:`aspectRatio`}),` the chart keeps that ratio, contained within its parent on both axes:`]}),`
`,(0,S.jsx)(o,{of:c}),`
`,(0,S.jsx)(a,{language:`jsx`,code:`// Fill parent container (default) - parent needs explicit height
<div style={{ width: '100%', height: '200px' }}>
	<HeatmapChart data={ columns } rowLabels={ rowLabels } />
</div>

// Use aspect ratio - height from width, contained if the parent is shorter
<div style={{ width: '100%' }}>
	<HeatmapChart data={ columns } rowLabels={ rowLabels } aspectRatio={ 0.4 } />
</div>

// Fixed dimensions
<HeatmapChart data={ columns } rowLabels={ rowLabels } width={ 720 } height={ 200 } />`}),`
`,(0,S.jsxs)(t.p,{children:[`For more details on responsive behavior, see the `,(0,S.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design`,children:`Responsive Design section`}),` in the introduction.`]}),`
`,(0,S.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,S.jsx)(t.p,{children:`The heatmap chart is designed for full keyboard and screen reader access:`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[`The grid container is a `,(0,S.jsx)(t.code,{children:`<div role="grid">`}),` with a localised `,(0,S.jsx)(t.code,{children:`aria-label`}),`; each visual row is a `,(0,S.jsx)(t.code,{children:`role="row"`}),` and each cell a `,(0,S.jsx)(t.code,{children:`role="gridcell"`}),`.`]}),`
`,(0,S.jsxs)(t.li,{children:[`Each cell has an `,(0,S.jsx)(t.code,{children:`aria-label`}),` containing the cell name and value (or "No data"). An `,(0,S.jsx)(t.code,{children:`aria-label`}),` is used rather than a native `,(0,S.jsx)(t.code,{children:`title`}),` so no duplicate browser tooltip appears. Axis labels are decorative (`,(0,S.jsx)(t.code,{children:`aria-hidden`}),`) because the cell label already carries that text.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Keyboard navigation`}),`: Tab focuses the chart; arrow keys navigate between cells; the focused cell receives a visible highlight ring, and (when `,(0,S.jsx)(t.code,{children:`withTooltips`}),` is set) its tooltip. Escape clears the selection.`]}),`
`,(0,S.jsxs)(t.li,{children:[`Color alone is never the sole indicator of value — every cell exposes its value via its accessible label, and `,(0,S.jsx)(t.code,{children:`showValues`}),` can render numeric labels inside cells.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`In-cell text contrast`}),`: when values are shown, each cell chooses light or dark text from the luminance of its blended fill rather than the raw value, so the number stays legible across the whole scale — with any primary color and against a themed (including dark) chart background.`]}),`
`,(0,S.jsxs)(t.li,{children:[`The component does not use animations by default, and no `,(0,S.jsx)(t.code,{children:`prefers-reduced-motion`}),` opt-out is required.`]}),`
`]})]})}function x(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;e((()=>{S=t(),s(),r(),v()}))();export{x as default};