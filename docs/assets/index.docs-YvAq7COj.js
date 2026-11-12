import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{i as n}from"./react-Cv2K7F_-.js";import{t as r}from"./mdx-react-shim-C2Qp68IM.js";import{a as i,n as a,r as o,t as s}from"./blocks-DmvBUotd.js";import{Animation as c,AspectRatio as l,CompactWhenShort as u,CurveTypes as d,Default as f,ErrorStates as p,PercentageStack as m,SingleSeries as h,Streamgraph as g,Unstacked as _,WithCompositionLegend as v,WithDefaultHiddenSeries as y,Zoomable as b,n as x,t as S}from"./index.stories-C-eB3Qip.js";function C(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(a,{title:`JS Packages/Charts Library/Charts/Area Chart`,of:S}),`
`,(0,T.jsx)(t.h1,{id:`area-chart`,children:`Area Chart`}),`
`,(0,T.jsx)(t.p,{children:`Area Charts visualise the magnitude of one or more series over time using filled regions. Stacked area charts make it easy to compare the contribution of each series to a total; overlapping area charts emphasise individual trends.`}),`
`,(0,T.jsx)(s,{of:f}),`
`,(0,T.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,T.jsxs)(t.p,{children:[(0,T.jsx)(t.code,{children:`AreaChart`}),` is built on `,(0,T.jsx)(t.code,{children:`@visx/xychart`}),` using `,(0,T.jsx)(t.code,{children:`AreaStack`}),` for stacked layouts and `,(0,T.jsx)(t.code,{children:`AreaSeries`}),` for overlapping ones. It supports the standard chart features (responsive sizing, legends, accessible tooltips, themes, keyboard navigation) plus stacked-area-specific options like `,(0,T.jsx)(t.code,{children:`stackOffset`}),`.`]}),`
`,(0,T.jsx)(o,{language:`jsx`,code:`import { AreaChart } from '@automattic/charts';
import '@automattic/charts/style.css';

<AreaChart data={ data } stacked />`}),`
`,(0,T.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,T.jsxs)(t.p,{children:[`For detailed prop information, see the `,(0,T.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-area-chart-api-reference--docs`,children:`Area Chart API Reference`}),`.`]}),`
`,(0,T.jsx)(t.h2,{id:`stacked-vs-unstacked`,children:`Stacked vs. Unstacked`}),`
`,(0,T.jsxs)(t.p,{children:[(0,T.jsx)(t.code,{children:`AreaChart`}),` is `,(0,T.jsx)(t.strong,{children:`stacked by default`}),`. Series sit on top of each other and the y-axis represents the cumulative total.`]}),`
`,(0,T.jsx)(s,{of:f}),`
`,(0,T.jsxs)(t.p,{children:[`Set `,(0,T.jsx)(t.code,{children:`stacked={ false }`}),` to render overlapping filled areas instead. Use `,(0,T.jsx)(t.code,{children:`fillOpacity`}),` to keep overlapping series visible:`]}),`
`,(0,T.jsx)(s,{of:_}),`
`,(0,T.jsx)(t.h2,{id:`stack-offsets`,children:`Stack Offsets`}),`
`,(0,T.jsxs)(t.p,{children:[`When `,(0,T.jsx)(t.code,{children:`stacked`}),` is true, the `,(0,T.jsx)(t.code,{children:`stackOffset`}),` prop selects how series are arranged on the y-axis.`]}),`
`,(0,T.jsxs)(t.h3,{id:`none-default`,children:[(0,T.jsx)(t.code,{children:`none`}),` (default)`]}),`
`,(0,T.jsx)(t.p,{children:`Standard stacking — values stack at their natural magnitude.`}),`
`,(0,T.jsxs)(t.h3,{id:`expand--100-stacked`,children:[(0,T.jsx)(t.code,{children:`expand`}),` — 100% stacked`]}),`
`,(0,T.jsx)(t.p,{children:`Each x-position is normalised to 1.0. Useful for visualising relative composition over time.`}),`
`,(0,T.jsx)(s,{of:m}),`
`,(0,T.jsxs)(t.h3,{id:`wiggle--streamgraph`,children:[(0,T.jsx)(t.code,{children:`wiggle`}),` — streamgraph`]}),`
`,(0,T.jsx)(t.p,{children:`Series flow around a central baseline. Best for many series where individual trends matter more than absolute totals.`}),`
`,(0,T.jsx)(s,{of:g}),`
`,(0,T.jsx)(t.h3,{id:`silhouette`,children:(0,T.jsx)(t.code,{children:`silhouette`})}),`
`,(0,T.jsx)(t.p,{children:`Stack centred around zero — symmetric layout without the wiggle minimisation.`}),`
`,(0,T.jsx)(t.h2,{id:`curve-types`,children:`Curve Types`}),`
`,(0,T.jsxs)(t.p,{children:[(0,T.jsx)(t.code,{children:`AreaChart`}),` supports the same `,(0,T.jsx)(t.code,{children:`curveType`}),` options as `,(0,T.jsx)(t.code,{children:`LineChart`}),`:`]}),`
`,(0,T.jsx)(s,{of:d}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.strong,{children:(0,T.jsx)(t.code,{children:`linear`})}),` — straight segments between points.`]}),`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.strong,{children:(0,T.jsx)(t.code,{children:`smooth`})}),` — Catmull-Rom interpolation; flowing curves through every point.`]}),`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.strong,{children:(0,T.jsx)(t.code,{children:`monotone`})}),` — prevents overshooting on steep changes; preferred for financial or scientific data.`]}),`
`]}),`
`,(0,T.jsx)(t.h2,{id:`single-series`,children:`Single Series`}),`
`,(0,T.jsx)(t.p,{children:`A single-series area chart is a useful way to emphasise a single trend with visual weight:`}),`
`,(0,T.jsx)(s,{of:h}),`
`,(0,T.jsx)(t.h2,{id:`zooming`,children:`Zooming`}),`
`,(0,T.jsxs)(t.p,{children:[`Set `,(0,T.jsx)(t.code,{children:`zoomable`}),` to let users drag horizontally across the plot to zoom the X axis into that range:`]}),`
`,(0,T.jsx)(s,{of:b}),`
`,(0,T.jsx)(o,{language:`jsx`,code:`<AreaChart
	data={ data }
	zoomable={ true }
/>`}),`
`,(0,T.jsx)(t.p,{children:`Zoom behaviour:`}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[`Disabled by default (`,(0,T.jsx)(t.code,{children:`zoomable={ false }`}),`).`]}),`
`,(0,T.jsx)(t.li,{children:`Only the X axis rescales; the Y axis is unaffected.`}),`
`,(0,T.jsx)(t.li,{children:`A selection rectangle follows the pointer while dragging.`}),`
`,(0,T.jsx)(t.li,{children:`Drags shorter than 6px are ignored, so a click never zooms.`}),`
`,(0,T.jsx)(t.li,{children:`While zoomed, a "Reset zoom" button appears in the top-right to restore the full domain. It is reachable with Tab and activates with Enter or Space. A "Reset zoom" tooltip shows on hover and on keyboard focus, and Escape dismisses it.`}),`
`,(0,T.jsxs)(t.li,{children:[`Areas are clipped to the plot area whenever `,(0,T.jsx)(t.code,{children:`zoomable`}),` is set, keeping the zoom-out animation within the axes.`]}),`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.code,{children:`zoomable`}),` chains with your own `,(0,T.jsx)(t.code,{children:`onPointerDown`}),`/`,(0,T.jsx)(t.code,{children:`onPointerMove`}),`/`,(0,T.jsx)(t.code,{children:`onPointerUp`}),` handlers rather than replacing them.`]}),`
`]}),`
`,(0,T.jsx)(t.h2,{id:`error-handling`,children:`Error Handling`}),`
`,(0,T.jsx)(t.p,{children:`The chart gracefully handles common edge cases:`}),`
`,(0,T.jsx)(s,{of:p}),`
`,(0,T.jsx)(t.p,{children:`Supported scenarios: empty data arrays, invalid date values, null/NaN values, single data points.`}),`
`,(0,T.jsx)(t.h2,{id:`legends`,children:`Legends`}),`
`,(0,T.jsx)(t.p,{children:`Use the composition API to place a legend explicitly:`}),`
`,(0,T.jsx)(s,{of:v}),`
`,(0,T.jsx)(o,{language:`jsx`,code:`<AreaChart data={ data }>
	<AreaChart.Legend />
</AreaChart>`}),`
`,(0,T.jsxs)(t.p,{children:[`For full legend configuration options, see the `,(0,T.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-components-legend--docs`,children:`Legend component docs`}),`.`]}),`
`,(0,T.jsxs)(t.p,{children:[`Use `,(0,T.jsx)(t.code,{children:`defaultHiddenSeries`}),` to hide selected series initially while keeping them available through an interactive legend. The first defined list is used; later values for the same `,(0,T.jsx)(t.code,{children:`chartId`}),` are ignored. The defaults are seeded once per `,(0,T.jsx)(t.code,{children:`chartId`}),`, so a series the reader reveals stays revealed even if the chart unmounts and comes back — swapping between chart types, or a tab the chart lives in going away and returning. Only a new `,(0,T.jsx)(t.code,{children:`chartId`}),` seeds again.`]}),`
`,(0,T.jsx)(s,{of:y}),`
`,(0,T.jsx)(t.h2,{id:`responsive-behavior`,children:`Responsive Behavior`}),`
`,(0,T.jsxs)(t.p,{children:[`By default, charts `,(0,T.jsx)(t.strong,{children:`fill their parent container's dimensions`}),`. The parent must have an explicit height, or the chart must receive an `,(0,T.jsx)(t.code,{children:`aspectRatio`}),`:`]}),`
`,(0,T.jsx)(s,{of:l}),`
`,(0,T.jsx)(o,{language:`jsx`,code:`// Fill parent container (default) - parent needs explicit height
<div style={{ width: '100%', height: '400px' }}>
	<AreaChart data={ data } />
</div>

// Use aspect ratio - height from width, contained if the parent is shorter
<div style={{ width: '100%' }}>
	<AreaChart data={ data } aspectRatio={ 0.5 } />
</div>

// Fixed dimensions
<AreaChart data={ data } width={ 800 } height={ 400 } />`}),`
`,(0,T.jsxs)(t.p,{children:[`For more details on responsive behavior, see the `,(0,T.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design`,children:`Responsive Design section`}),` in the introduction.`]}),`
`,(0,T.jsx)(t.h3,{id:`compact-when-short`,children:`Compact When Short`}),`
`,(0,T.jsxs)(t.p,{children:[`Set `,(0,T.jsx)(t.code,{children:`compactWhenShort`}),` to drop the axes, grid and legend while the chart is shorter than `,(0,T.jsx)(t.code,{children:`theme.compactWhenShort.below`}),` (140px by default). Only the areas remain, and they keep their tooltips and keyboard navigation. The chart compares the height it was given, legend included, so hiding the legend never flips it back. Series hidden through the legend stay hidden until the chart is tall enough to show the legend again.`]}),`
`,(0,T.jsx)(s,{of:u}),`
`,(0,T.jsxs)(t.p,{children:[`In compact mode the margin defaults to `,(0,T.jsx)(t.code,{children:`theme.compactWhenShort.margin`}),`, and any side you pass through `,(0,T.jsx)(t.code,{children:`margin`}),` still wins. To change the threshold, set it on the theme:`]}),`
`,(0,T.jsx)(o,{language:`jsx`,code:`// Applies to every chart under this provider
<GlobalChartsProvider theme={ { compactWhenShort: { below: 180 } } }>
	<AreaChart data={ data } compactWhenShort />
</GlobalChartsProvider>`}),`
`,(0,T.jsx)(t.h2,{id:`animation`,children:`Animation`}),`
`,(0,T.jsx)(t.p,{children:`The Area Chart supports an optional entry animation:`}),`
`,(0,T.jsx)(s,{of:c}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.strong,{children:`Opt-in`}),`: Disabled by default; enable with the `,(0,T.jsx)(t.code,{children:`animation`}),` prop.`]}),`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.strong,{children:`Accessibility`}),`: Respects `,(0,T.jsx)(t.code,{children:`prefers-reduced-motion`}),`.`]}),`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.strong,{children:`Effect`}),`: Areas scale up from the bottom (1s ease-out).`]}),`
`]}),`
`,(0,T.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[`Chart container has `,(0,T.jsx)(t.code,{children:`role="application"`}),`, so screen readers pass arrow keys through to the chart's point navigation.`]}),`
`,(0,T.jsxs)(t.li,{children:[`Set `,(0,T.jsx)(t.code,{children:`ariaLabel`}),` to name the chart. See `,(0,T.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-introduction--docs#accessible-names`,children:`Accessible names`}),`.`]}),`
`,(0,T.jsx)(t.li,{children:`Tab to focus the chart; arrow keys navigate data points; tooltips are announced to screen readers.`}),`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.strong,{children:`Escape`}),`: Close a keyboard-opened tooltip and return focus to the chart`]}),`
`,(0,T.jsx)(t.li,{children:`All series colors can be overridden through the palette custom properties; do not rely on color alone to distinguish series.`}),`
`]})]})}function w(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;e((()=>{T=t(),r(),i(),x()}))();export{w as default};