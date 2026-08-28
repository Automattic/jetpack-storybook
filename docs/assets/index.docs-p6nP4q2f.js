import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{bt as n}from"./esm-dovGQuCU.js";import{i as r,n as i,r as a,t as o}from"./blocks-Dz9Qa6gM.js";import{t as s}from"./mdx-react-shim-C5eX_HXT.js";import{Start as c,t as l}from"./glyph.stories-LLqfGzpg.js";import{Animation as u,BrokenLine as d,ComparisonMulti as f,ComparisonSingle as p,CurveTypes as m,DateStringFormats as h,Default as g,ErrorStates as _,GradientCustomColors as v,GradientFilled as y,GradientTransparent as b,SingleSeries as x,SmartFormatting as S,WithCompositionLegend as C,WithDefaultHiddenSeries as w,WithPointerEvents as T,Zoomable as E,n as D,t as O}from"./index.stories-t9DxU9-j.js";function k(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i,{title:`JS Packages/Charts Library/Charts/Line Chart`,of:O}),`
`,(0,j.jsx)(t.h1,{id:`line-chart`,children:`Line Chart`}),`
`,(0,j.jsx)(t.p,{children:`Line Charts visualize data trends over time or other continuous variables, connecting data points with smooth or linear lines. They excel at showing patterns, trends, and relationships in time-series data.`}),`
`,(0,j.jsx)(o,{of:g}),`
`,(0,j.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,j.jsxs)(t.p,{children:[`The Line Chart component provides a flexible, accessible, and highly customizable solution for displaying temporal data. Built on `,(0,j.jsx)(t.code,{children:`@visx/xychart`}),`, it supports multiple data series, various curve types, interactive tooltips, legends, and compound components for advanced features like annotations:`]}),`
`,(0,j.jsx)(a,{language:`jsx`,code:`import { LineChart } from '@automattic/charts';
import '@automattic/charts/style.css';

<LineChart data={ data }>
	{/* Optional child components for advanced features */}
	<LineChart.AnnotationsOverlay>
		<LineChart.Annotation
			datum={ { date: new Date('2024-01-01'), value: 100 } }
			title="Product Launch"
		/>
	</LineChart.AnnotationsOverlay>
</LineChart>`}),`
`,(0,j.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,j.jsxs)(t.p,{children:[`For detailed information about component props, types, and method signatures, see the `,(0,j.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-line-chart-api-reference--docs`,children:`Line Chart API Reference`}),`.`]}),`
`,(0,j.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,j.jsx)(t.h3,{id:`simple-line-chart`,children:`Simple Line Chart`}),`
`,(0,j.jsxs)(t.p,{children:[`The simplest line chart requires only a `,(0,j.jsx)(t.code,{children:`data`}),` prop with time-series data:`]}),`
`,(0,j.jsx)(o,{of:x}),`
`,(0,j.jsx)(a,{language:`jsx`,code:`<LineChart
	data={[
		{
			label: 'Temperature',
			data: [
				{ date: new Date('2024-01-01'), value: 20 },
				{ date: new Date('2024-01-02'), value: 25 },
				{ date: new Date('2024-01-03'), value: 18 },
			],
			options: {}
		}
	]}
/>`}),`
`,(0,j.jsx)(t.h3,{id:`required-props`,children:`Required Props`}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`data`})}),`: Array of series data, each containing `,(0,j.jsx)(t.code,{children:`label`}),`, `,(0,j.jsx)(t.code,{children:`data`}),` array, and optional `,(0,j.jsx)(t.code,{children:`options`})]}),`
`]}),`
`,(0,j.jsx)(t.h3,{id:`optional-props`,children:`Optional Props`}),`
`,(0,j.jsx)(t.p,{children:(0,j.jsx)(t.strong,{children:`Layout & Dimensions:`})}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`width`})}),`: Chart width in pixels (responsive by default)`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`height`})}),`: Chart height in pixels (responsive by default)`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`margin`})}),`: Custom chart margins`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`className`})}),`: Additional CSS class name for the chart container`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`chartId`})}),`: Unique identifier for the chart (auto-generated if not provided)`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`aspectRatio`})}),`: Height-to-width ratio (e.g. `,(0,j.jsx)(t.code,{children:`0.5`}),`) for responsive charts; the chart is contained within its parent on both axes. When omitted, fills the parent container's height`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`maxWidth`})}),`: Maximum width constraint for responsive charts (default: `,(0,j.jsx)(t.code,{children:`1200`}),`)`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`resizeDebounceTime`})}),`: Debounce delay for resize events in ms (default: `,(0,j.jsx)(t.code,{children:`300`}),`)`]}),`
`]}),`
`,(0,j.jsx)(t.p,{children:(0,j.jsx)(t.strong,{children:`Visual Styling:`})}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`curveType`})}),`: Line curve style (`,(0,j.jsx)(t.code,{children:`'smooth'`}),`, `,(0,j.jsx)(t.code,{children:`'linear'`}),`, `,(0,j.jsx)(t.code,{children:`'monotone'`}),`)`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`smoothing`})}),`: Legacy smoothing parameter (deprecated, use `,(0,j.jsx)(t.code,{children:`curveType`}),` instead)`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`withGradientFill`})}),`: Fill area under lines with gradient (`,(0,j.jsx)(t.code,{children:`false`}),` by default)`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`withStartGlyphs`})}),`: Show markers at the first data point of each series (`,(0,j.jsx)(t.code,{children:`false`}),` by default)`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`renderGlyph`})}),`: Custom glyph render function`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`glyphStyle`})}),`: Styling for chart glyphs`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`gridVisibility`})}),`: Control grid visibility (`,(0,j.jsx)(t.code,{children:`'x'`}),`, `,(0,j.jsx)(t.code,{children:`'y'`}),`, `,(0,j.jsx)(t.code,{children:`'xy'`}),`, or `,(0,j.jsx)(t.code,{children:`'none'`}),`)`]}),`
`]}),`
`,(0,j.jsx)(t.p,{children:(0,j.jsx)(t.strong,{children:`Interactivity:`})}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`withTooltips`})}),`: Enable interactive tooltips (`,(0,j.jsx)(t.code,{children:`true`}),` by default)`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`withTooltipCrosshairs`})}),`: Show crosshair guides with tooltips`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`renderTooltip`})}),`: Custom tooltip render function`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`onPointerDown`})}),`: Pointer down event handler`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`onPointerUp`})}),`: Pointer up event handler`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`onPointerMove`})}),`: Pointer move event handler`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`onPointerOut`})}),`: Pointer out event handler`]}),`
`]}),`
`,(0,j.jsx)(t.p,{children:(0,j.jsx)(t.strong,{children:`Legend:`})}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`showLegend`})}),`: Display chart legend (`,(0,j.jsx)(t.code,{children:`false`}),` by default)`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`legend`})}),`: Legend configuration object (`,(0,j.jsx)(t.code,{children:`ChartLegendConfig`}),`) for controlling orientation, position, alignment, shape, interactivity, and styling`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`defaultHiddenSeries`})}),`: Series labels hidden from the first defined value; later values for the same `,(0,j.jsx)(t.code,{children:`chartId`}),` are ignored`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`withLegendGlyph`})}),`: Use custom glyphs in legend (`,(0,j.jsx)(t.code,{children:`false`}),` by default)`]}),`
`]}),`
`,(0,j.jsx)(t.p,{children:(0,j.jsx)(t.strong,{children:`Advanced:`})}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`options`})}),`: Advanced axis and scale configuration`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`children`})}),`: Child components (e.g., annotations)`]}),`
`]}),`
`,(0,j.jsxs)(t.p,{children:[`For detailed prop information, type definitions, gradient configuration options, and complete annotation API reference, see the `,(0,j.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-line-chart-api-reference--docs`,children:`Line Chart API Reference`}),`.`]}),`
`,(0,j.jsx)(t.h2,{id:`curve-types`,children:`Curve Types`}),`
`,(0,j.jsx)(t.h3,{id:`linear-curves`,children:`Linear Curves`}),`
`,(0,j.jsx)(t.p,{children:`Connect data points with straight lines for precise, unsmoothed visualization:`}),`
`,(0,j.jsx)(o,{of:m}),`
`,(0,j.jsx)(t.h3,{id:`smooth-curves-catmull-rom`,children:`Smooth Curves (Catmull-Rom)`}),`
`,(0,j.jsx)(t.p,{children:`Create flowing curves that pass through all data points using Catmull-Rom spline interpolation:`}),`
`,(0,j.jsx)(a,{language:`jsx`,code:`<LineChart
	data={data}
	curveType="smooth"
/>`}),`
`,(0,j.jsx)(t.h3,{id:`monotone-x-curves`,children:`Monotone X Curves`}),`
`,(0,j.jsx)(t.p,{children:`Prevent overshooting while maintaining smoothness, ideal for data with sharp changes:`}),`
`,(0,j.jsx)(a,{language:`jsx`,code:`<LineChart
	data={data}
	curveType="monotone"
/>`}),`
`,(0,j.jsx)(t.p,{children:(0,j.jsx)(t.strong,{children:`When to use each type:`})}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Linear`}),`: Raw data visualization, technical charts, precise measurements`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Smooth`}),`: Aesthetic presentations, trend visualization, marketing materials`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Monotone`}),`: Financial data, scientific measurements where overshooting would be misleading`]}),`
`]}),`
`,(0,j.jsx)(t.h2,{id:`multiple-series`,children:`Multiple Series`}),`
`,(0,j.jsx)(t.h3,{id:`multi-series-charts`,children:`Multi-Series Charts`}),`
`,(0,j.jsx)(t.p,{children:`Display multiple data series with automatic color differentiation:`}),`
`,(0,j.jsx)(o,{of:g}),`
`,(0,j.jsx)(a,{language:`jsx`,code:`<LineChart
	data={[
		{
			label: 'London Temperature',
			data: londonData,
			options: {}
		},
		{
			label: 'New York Temperature',
			data: newYorkData,
			options: {}
		}
	]}
/>`}),`
`,(0,j.jsx)(t.h3,{id:`custom-series-styling`,children:`Custom Series Styling`}),`
`,(0,j.jsxs)(t.p,{children:[`Override individual series appearance with the `,(0,j.jsx)(t.code,{children:`options`}),` prop:`]}),`
`,(0,j.jsx)(o,{of:d}),`
`,(0,j.jsx)(a,{language:`jsx`,code:`<LineChart
	data={[
		{
			label: 'Projected Data',
			data: projectedData,
			options: {
				stroke: '#ff6b6b',
				seriesLineStyle: {
					strokeDasharray: '5 5 1'
				},
				legendShapeStyle: {
					strokeDasharray: '5 5 1'
				}
			}
		}
	]}
/>`}),`
`,(0,j.jsx)(t.h2,{id:`semantic-line-types`,children:`Semantic Line Types`}),`
`,(0,j.jsx)(t.p,{children:`Use semantic line types to distinguish between different data categories with automatic styling.`}),`
`,(0,j.jsx)(t.h3,{id:`comparison-type`,children:`Comparison type`}),`
`,(0,j.jsxs)(t.p,{children:[`The `,(0,j.jsx)(t.code,{children:`comparison`}),` type can be used to differentiate comparison data from primary data series. Give the primary series and its comparison overlay the same `,(0,j.jsx)(t.code,{children:`group`}),` so they pair up. By default each still gets its own legend item; set `,(0,j.jsx)(t.code,{children:`legend.collapseGroups`}),` to fold them into one:`]}),`
`,(0,j.jsx)(o,{of:p}),`
`,(0,j.jsx)(a,{language:`jsx`,code:`<LineChart
	data={[
		{
			label: 'Views',
			group: 'views',
			data: currentPeriodData,
		},
		{
			label: 'Views — previous',
			group: 'views',
			options: { type: 'comparison' },
			data: previousPeriodData,
		},
	]}
	showLegend={true}
/>`}),`
`,(0,j.jsxs)(t.p,{children:[`Pair several metrics side by side, each with its own comparison overlay. With `,(0,j.jsx)(t.code,{children:`legend.collapseGroups`}),`, each group renders as a single item labelled by its primary series. Add `,(0,j.jsx)(t.code,{children:`legend.interactive`}),` and clicking that item toggles the metric's current and previous-period lines together — without `,(0,j.jsx)(t.code,{children:`collapseGroups`}),`, each line keeps its own item and toggles alone. By default the value axis rescales to the visible series as they are toggled; this story sets `,(0,j.jsx)(t.code,{children:`rescaleYOnVisibilityChange={ false }`}),` to pin it to the full data range so the baseline doesn't jump. When every series is hidden the axes are dropped and only the empty state is shown.`]}),`
`,(0,j.jsx)(o,{of:f}),`
`,(0,j.jsx)(t.h3,{id:`theme-integration`,children:`Theme Integration`}),`
`,(0,j.jsx)(t.p,{children:`Comparison styling can be set in your theme configuration:`}),`
`,(0,j.jsx)(a,{language:`jsx`,code:`// Theme configuration example
const customTheme = {
	lineChart: {
		lineStyles: {
			comparison: {
				strokeDasharray: '4 4',
				strokeLinecap: 'square',
				strokeWidth: 1.5
			}
		}
	}
};`}),`
`,(0,j.jsx)(t.h2,{id:`visual-features`,children:`Visual Features`}),`
`,(0,j.jsx)(t.h3,{id:`gradient-fill`,children:`Gradient Fill`}),`
`,(0,j.jsx)(t.p,{children:`Add visual depth with gradient fills under line series. The gradient system supports both simple fills and complex multi-stop gradients for sophisticated visual effects.`}),`
`,(0,j.jsx)(t.h4,{id:`basic-gradient-fill`,children:`Basic Gradient Fill`}),`
`,(0,j.jsxs)(t.p,{children:[`Enable gradient fills for all series with the `,(0,j.jsx)(t.code,{children:`withGradientFill`}),` prop:`]}),`
`,(0,j.jsx)(o,{of:y}),`
`,(0,j.jsx)(a,{language:`jsx`,code:`<LineChart
	data={data}
	withGradientFill={true}
/>`}),`
`,(0,j.jsx)(t.h4,{id:`custom-gradient-colors`,children:`Custom Gradient Colors`}),`
`,(0,j.jsxs)(t.p,{children:[`Customize gradient colors per series using the `,(0,j.jsx)(t.code,{children:`gradient`}),` option in series data:`]}),`
`,(0,j.jsx)(o,{of:v}),`
`,(0,j.jsx)(a,{language:`jsx`,code:`const data = [
	{
		label: 'Revenue',
		data: chartData,
		options: {
			gradient: {
				from: '#4CAF50',
				to: '#81C784',
				fromOpacity: 0.8,
				toOpacity: 0.1,
			},
		},
	},
	{
		label: 'Expenses',
		data: expenseData,
		options: {
			gradient: {
				from: '#F44336',
				to: '#EF5350',
				fromOpacity: 0.6,
				toOpacity: 0.0,
			},
		},
	},
];

<LineChart
	data={data}
	withGradientFill={true}
/>`}),`
`,(0,j.jsx)(t.h4,{id:`gradient-with-sections`,children:`Gradient with sections`}),`
`,(0,j.jsx)(t.p,{children:`Create gradients that fade to transparent at specific points using stops, useful for highlighting data ranges. When no color is specified, the gradient uses the line color automatically:`}),`
`,(0,j.jsx)(o,{of:b}),`
`,(0,j.jsx)(a,{language:`jsx`,code:`const data = [
	{
		label: 'Temperature',
		data: temperatureData,
		options: {
			gradient: {
				stops: [
					{ offset: '0%', opacity: 0.7 }, // Uses line color
					{ offset: '20%', opacity: 0 },  // Fades to transparent
					{ offset: '100%', opacity: 0 },
				],
			},
		},
	},
];

<LineChart
	data={data}
	withGradientFill={true}
/>`}),`
`,(0,j.jsx)(t.h4,{id:`gradient-options`,children:`Gradient Options`}),`
`,(0,j.jsxs)(t.p,{children:[`The `,(0,j.jsx)(t.code,{children:`gradient`}),` option in series data supports the following properties:`]}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`from`})}),`: Start color (hex, rgb, CSS variable)`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`to`})}),`: End color (used when no stops are defined)`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`fromOpacity`})}),`: Start opacity (0-1, default: 0.4)`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`toOpacity`})}),`: End opacity (0-1, default: 0.1)`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`stops`})}),`: Array of gradient stops for complex gradients`]}),`
`]}),`
`,(0,j.jsx)(t.h4,{id:`gradient-stop-properties`,children:`Gradient Stop Properties`}),`
`,(0,j.jsxs)(t.p,{children:[`Each stop in the `,(0,j.jsx)(t.code,{children:`stops`}),` array accepts:`]}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`offset`})}),`: Position along gradient (percentage string, e.g., '25%')`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`color`})}),`: Color at this stop (hex, rgb, CSS variable) - defaults to line color if omitted`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`opacity`})}),`: Opacity at this stop (0-1, default: 1)`]}),`
`]}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.strong,{children:`Note`}),`: When using `,(0,j.jsx)(t.code,{children:`stops`}),`, the `,(0,j.jsx)(t.code,{children:`from`}),`, `,(0,j.jsx)(t.code,{children:`to`}),`, `,(0,j.jsx)(t.code,{children:`fromOpacity`}),`, and `,(0,j.jsx)(t.code,{children:`toOpacity`}),` properties are ignored.`]}),`
`,(0,j.jsx)(t.h3,{id:`glyphs-and-markers`,children:`Glyphs and Markers`}),`
`,(0,j.jsx)(t.p,{children:`Add visual markers at data points using the glyph system:`}),`
`,(0,j.jsx)(o,{of:c}),`
`,(0,j.jsx)(a,{language:`jsx`,code:`<LineChart
	data={data}
	withStartGlyphs={true}
	withLegendGlyph={true}
	renderGlyph={(props) => (
		<circle
			cx={props.x}
			cy={props.y}
			r={4}
			fill={props.color}
		/>
	)}
/>`}),`
`,(0,j.jsx)(t.h3,{id:`hiding-axes-and-grid`,children:`Hiding Axes and Grid`}),`
`,(0,j.jsxs)(t.p,{children:[`For minimal chart displays like sparklines or inline visualizations, you can hide the axes and grid using the `,(0,j.jsx)(t.code,{children:`options`}),` prop and `,(0,j.jsx)(t.code,{children:`gridVisibility`}),`:`]}),`
`,(0,j.jsx)(a,{language:`jsx`,code:`<LineChart
data={data}
gridVisibility="none"
options={{
	axis: {
		x: { display: false },
		y: { display: false }
	}
}}
showLegend={false}
withTooltips={false}
withGradientFill={true}
curveType="monotone"
/>`}),`
`,(0,j.jsx)(t.h2,{id:`data-formats`,children:`Data Formats`}),`
`,(0,j.jsx)(t.h3,{id:`date-handling`,children:`Date Handling`}),`
`,(0,j.jsx)(t.p,{children:`The chart supports multiple date formats and automatically converts to local timezone:`}),`
`,(0,j.jsx)(o,{of:h}),`
`,(0,j.jsx)(a,{language:`jsx`,code:`// Date objects
{ date: new Date('2024-01-01'), value: 10 }

// Date strings (automatically parsed)
{ dateString: '2024-01-01', value: 10 }
{ dateString: '2024-01-01 14:30:00', value: 15 }
{ dateString: '2024-01-01T14:30:00Z', value: 20 }`}),`
`,(0,j.jsx)(t.h3,{id:`large-values`,children:`Large Values`}),`
`,(0,j.jsx)(t.p,{children:`Automatic formatting handles large numbers with smart abbreviations:`}),`
`,(0,j.jsx)(o,{of:S}),`
`,(0,j.jsx)(t.p,{children:`Values are automatically formatted as:`}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`1B and above`}),`: "1.23B"`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`1M and above`}),`: "1.2M"`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`1K and above`}),`: "1k"`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Below 1K`}),`: "1,234"`]}),`
`]}),`
`,(0,j.jsx)(t.h2,{id:`error-handling`,children:`Error Handling`}),`
`,(0,j.jsx)(t.p,{children:`The chart gracefully handles various error states and edge cases:`}),`
`,(0,j.jsx)(o,{of:_}),`
`,(0,j.jsx)(t.p,{children:(0,j.jsx)(t.strong,{children:`Supported scenarios:`})}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsx)(t.li,{children:`Empty data arrays`}),`
`,(0,j.jsx)(t.li,{children:`Invalid date values`}),`
`,(0,j.jsx)(t.li,{children:`Null or NaN numeric values`}),`
`,(0,j.jsx)(t.li,{children:`Single data points`}),`
`,(0,j.jsx)(t.li,{children:`Missing data properties`}),`
`]}),`
`,(0,j.jsx)(t.h2,{id:`annotations`,children:`Annotations`}),`
`,(0,j.jsxs)(t.p,{children:[`Add contextual information to highlight specific data points or events. For comprehensive annotation documentation, see the `,(0,j.jsx)(t.a,{href:`?path=/docs/js-packages-charts-library-charts-line-chart-annotations--docs`,children:`Line Chart Annotations`}),` guide. For detailed annotation API reference, see the `,(0,j.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-line-chart-api-reference--docs`,children:`Line Chart API Reference`}),`:`]}),`
`,(0,j.jsx)(a,{language:`jsx`,code:`<LineChart data={data}>
	<LineChart.AnnotationsOverlay>
		<LineChart.Annotation
			datum={{ date: new Date('2024-01-15'), value: 100 }}
			title="Product Launch"
			subtitle="Version 2.0 released"
			subjectType="line-vertical"
		/>
	</LineChart.AnnotationsOverlay>
</LineChart>`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.strong,{children:`Note`}),`: Annotation popovers use the native Popover API. Due to Safari's `,(0,j.jsx)(t.code,{children:`foreignObject`}),` positioning limitations, interactive popovers are positioned in the viewport center rather than next to the annotation.`]}),`
`,(0,j.jsx)(t.h2,{id:`interactive-features`,children:`Interactive Features`}),`
`,(0,j.jsx)(t.h3,{id:`tooltips-and-crosshairs`,children:`Tooltips and Crosshairs`}),`
`,(0,j.jsx)(t.p,{children:`Enable rich interactive tooltips with optional crosshair guides:`}),`
`,(0,j.jsx)(a,{language:`jsx`,code:`<LineChart
	data={data}
	withTooltips={true}
	withTooltipCrosshairs={{
		showVertical: true,
		showHorizontal: false
	}}
	renderTooltip={({ datum, color }) => (
		<div style={{ background: color, color: 'white', padding: '8px' }}>
			<div>Value: {datum.value}</div>
			<div>Date: {datum.date.toLocaleDateString()}</div>
		</div>
	)}
/>`}),`
`,(0,j.jsx)(t.h3,{id:`pointer-events`,children:`Pointer Events`}),`
`,(0,j.jsx)(t.p,{children:`Handle user interactions with custom event handlers:`}),`
`,(0,j.jsx)(o,{of:T}),`
`,(0,j.jsx)(a,{language:`jsx`,code:`<LineChart
	data={data}
	onPointerDown={({ datum }) => console.log('Clicked:', datum)}
	onPointerMove={({ datum }) => console.log('Hover:', datum)}
/>`}),`
`,(0,j.jsx)(t.h3,{id:`zooming`,children:`Zooming`}),`
`,(0,j.jsxs)(t.p,{children:[`Set `,(0,j.jsx)(t.code,{children:`zoomable`}),` to let users drag horizontally across the plot to zoom the X axis into that range:`]}),`
`,(0,j.jsx)(o,{of:E}),`
`,(0,j.jsx)(a,{language:`jsx`,code:`<LineChart
	data={data}
	zoomable={true}
/>`}),`
`,(0,j.jsx)(t.p,{children:`Zoom behavior:`}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[`Disabled by default (`,(0,j.jsx)(t.code,{children:`zoomable={false}`}),`).`]}),`
`,(0,j.jsx)(t.li,{children:`Only the X axis rescales; the Y axis is unaffected.`}),`
`,(0,j.jsx)(t.li,{children:`A selection rectangle follows the pointer while dragging.`}),`
`,(0,j.jsx)(t.li,{children:`Drags shorter than 6px are ignored, so a click never zooms.`}),`
`,(0,j.jsx)(t.li,{children:`While zoomed, a "Reset zoom" button appears in the top-right to restore the full domain. It is reachable with Tab and activates with Enter or Space. A "Reset zoom" tooltip shows on hover and on keyboard focus, and Escape dismisses it.`}),`
`,(0,j.jsx)(t.li,{children:`Series are clipped to the plot area while zoomed, so lines never overflow the axes.`}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.code,{children:`zoomable`}),` chains with your own `,(0,j.jsx)(t.code,{children:`onPointerDown`}),`/`,(0,j.jsx)(t.code,{children:`onPointerMove`}),`/`,(0,j.jsx)(t.code,{children:`onPointerUp`}),` handlers rather than replacing them.`]}),`
`]}),`
`,(0,j.jsx)(t.h3,{id:`keyboard-navigation`,children:`Keyboard Navigation`}),`
`,(0,j.jsx)(t.p,{children:`Charts are fully keyboard accessible with Tab navigation and arrow key data point selection.`}),`
`,(0,j.jsx)(t.p,{children:`When zoomed, the reset button is reachable with Tab and activates with Enter or Space.`}),`
`,(0,j.jsx)(t.h2,{id:`legends`,children:`Legends`}),`
`,(0,j.jsxs)(t.p,{children:[`Use the composition API to add a legend by placing `,(0,j.jsx)(t.code,{children:`<LineChart.Legend />`}),` as a child:`]}),`
`,(0,j.jsx)(o,{of:C}),`
`,(0,j.jsx)(a,{language:`jsx`,code:`<LineChart data={data}>
	<LineChart.Legend />
</LineChart>`}),`
`,(0,j.jsxs)(t.p,{children:[`For full legend configuration options — positioning, orientation, shapes, interactivity, and the composition API — see the `,(0,j.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-components-legend--docs`,children:`Legend component docs`}),`.`]}),`
`,(0,j.jsxs)(t.p,{children:[`Use `,(0,j.jsx)(t.code,{children:`defaultHiddenSeries`}),` to hide selected series initially while keeping them available through an interactive legend. The first defined list is used; later values for the same `,(0,j.jsx)(t.code,{children:`chartId`}),` are ignored. The defaults are seeded once per `,(0,j.jsx)(t.code,{children:`chartId`}),`, so a series the reader reveals stays revealed even if the chart unmounts and comes back — swapping between chart types, or a tab the chart lives in going away and returning. Only a new `,(0,j.jsx)(t.code,{children:`chartId`}),` seeds again.`]}),`
`,(0,j.jsx)(o,{of:w}),`
`,(0,j.jsx)(t.h2,{id:`theming-integration`,children:`Theming Integration`}),`
`,(0,j.jsx)(t.p,{children:`Line Charts integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided.`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.strong,{children:`Series colors come from the palette custom properties, not the theme object.`}),` Set as many of the five slots as you need; an unset slot is skipped, and charts generates accessible colors beyond whatever you set:`]}),`
`,(0,j.jsx)(a,{language:`css`,code:`.a8c-charts-scope {
	--a8c-charts-color-series-1: #FF6B6B;
	--a8c-charts-color-series-2: #4ECDC4;
	--a8c-charts-color-series-3: #45B7D1;
}`}),`
`,(0,j.jsxs)(t.p,{children:[`Everything else is set by wrapping your chart in `,(0,j.jsx)(t.code,{children:`GlobalChartsProvider`}),` and passing a theme object with the properties you want to override to the `,(0,j.jsx)(t.code,{children:`theme`}),` prop:`]}),`
`,(0,j.jsx)(a,{language:`tsx`,code:`import { GlobalChartsProvider, LineChart, type ChartTheme } from '@automattic/charts';

const customTheme: ChartTheme = {
	gridStyles: { stroke: '#E0E0E0' },
};

<GlobalChartsProvider theme={customTheme}>
	<LineChart data={data} />
</GlobalChartsProvider>`}),`
`,(0,j.jsx)(t.h2,{id:`responsive-behavior`,children:`Responsive Behavior`}),`
`,(0,j.jsxs)(t.p,{children:[`By default, charts `,(0,j.jsx)(t.strong,{children:`fill their parent container's dimensions`}),`. The parent must have an explicit height:`]}),`
`,(0,j.jsx)(a,{language:`jsx`,code:`// Fill parent container (default) - parent needs explicit height
<div style={{ width: '100%', height: '400px' }}>
	<LineChart data={data} />
</div>

// Use aspect ratio - height from width, contained if the parent is shorter
<div style={{ width: '100%' }}>
	<LineChart data={data} aspectRatio={0.5} />
</div>

// Fixed dimensions
<LineChart data={data} width={800} height={400} />`}),`
`,(0,j.jsxs)(t.p,{children:[`For more details on responsive behavior, see the `,(0,j.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design`,children:`Responsive Design section`}),` in the introduction.`]}),`
`,(0,j.jsx)(t.h2,{id:`animation`,children:`Animation`}),`
`,(0,j.jsx)(t.p,{children:`The Line Chart component supports an optional entry animation that creates a smooth reveal effect when the chart first renders:`}),`
`,(0,j.jsx)(o,{of:u}),`
`,(0,j.jsx)(a,{language:`tsx`,code:`<LineChart
	data={ data }
	width={ 800 }
	height={ 400 }
	animation={ true }
/>`}),`
`,(0,j.jsx)(t.h3,{id:`animation-behavior`,children:`Animation Behavior`}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Opt-in`}),`: Animation is disabled by default and must be explicitly enabled with the `,(0,j.jsx)(t.code,{children:`animation`}),` prop`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Accessibility`}),`: Automatically respects the user's `,(0,j.jsx)(t.code,{children:`prefers-reduced-motion`}),` system setting - animation will not play for users who prefer reduced motion`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Effect`}),`: Creates a rising effect where lines scale up from the bottom, revealing the data progressively`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Duration`}),`: 1000ms (1 second) with ease-out timing`]}),`
`]}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.strong,{children:`Note`}),`: The animation plays once when the chart initially renders and does not repeat.`]}),`
`,(0,j.jsx)(t.h2,{id:`advanced-customization`,children:`Advanced Customization`}),`
`,(0,j.jsx)(t.h3,{id:`axis-configuration`,children:`Axis Configuration`}),`
`,(0,j.jsx)(t.p,{children:`Customize axes with formatting, orientation, and tick options:`}),`
`,(0,j.jsx)(o,{of:S}),`
`,(0,j.jsx)(a,{language:`jsx`,code:`<LineChart
	data={data}
	options={{
		axis: {
			x: {
				orientation: 'bottom',
				numTicks: 6,
				tickFormat: (date) => date.toLocaleDateString()
			},
			y: {
				orientation: 'right',
				numTicks: 4,
				tickFormat: (value) => '$' + value + 'k'
			}
		},
		yScale: {
			type: 'linear',
			zero: true,
			nice: true
		}
	}}
/>`}),`
`,(0,j.jsx)(t.h3,{id:`custom-margins`,children:`Custom Margins`}),`
`,(0,j.jsx)(t.p,{children:`Control chart layout with precise margin settings:`}),`
`,(0,j.jsx)(a,{language:`jsx`,code:`<LineChart
	data={data}
	margin={{
		top: 20,
		right: 80,
		bottom: 60,
		left: 80
	}}
/>`}),`
`,(0,j.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,j.jsx)(t.h3,{id:`keyboard-navigation-1`,children:`Keyboard Navigation`}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Tab`}),`: Focus the chart or legend items (if interactive legends are enabled)`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Arrow Keys`}),`: Navigate between data points`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Enter/Space`}),`: Activate tooltips or toggle legend items (if interactive legends are enabled)`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Escape`}),`: Close active tooltips`]}),`
`]}),`
`,(0,j.jsx)(t.h3,{id:`screen-reader-support`,children:`Screen Reader Support`}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[`Chart container has `,(0,j.jsx)(t.code,{children:`role="grid"`}),` with descriptive `,(0,j.jsx)(t.code,{children:`aria-label`})]}),`
`,(0,j.jsx)(t.li,{children:`Data points are navigable and announced with values`}),`
`,(0,j.jsx)(t.li,{children:`Interactive elements have appropriate ARIA attributes`}),`
`,(0,j.jsx)(t.li,{children:`Interactive legend items announce their current visibility state ("visible" or "hidden")`}),`
`,(0,j.jsx)(t.li,{children:`Color information is supplemented with patterns and labels`}),`
`]}),`
`,(0,j.jsx)(t.h3,{id:`focus-management`,children:`Focus Management`}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsx)(t.li,{children:`Clear visual focus indicators`}),`
`,(0,j.jsx)(t.li,{children:`Logical tab order through interactive elements`}),`
`,(0,j.jsx)(t.li,{children:`Focus restoration after modal interactions`}),`
`]})]})}function A(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,j.jsx)(t,{...e,children:(0,j.jsx)(k,{...e})}):k(e)}var j;e((()=>{j=t(),s(),r(),D(),l()}))();export{A as default};