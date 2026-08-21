import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{bt as n}from"./esm-FvCYdzOa.js";import{i as r,n as i,r as a,t as o}from"./blocks-CSnYuFR0.js";import{t as s}from"./mdx-react-shim-CSDoMggW.js";import{Animation as c,AspectRatio as l,CurveTypes as u,Default as d,ErrorStates as f,PercentageStack as p,SingleSeries as m,Streamgraph as h,Unstacked as g,WithCompositionLegend as _,Zoomable as v,n as y,t as b}from"./index2.stories-BwgYIijE.js";function x(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(i,{title:`JS Packages/Charts Library/Charts/Area Chart`,of:b}),`
`,(0,C.jsx)(t.h1,{id:`area-chart`,children:`Area Chart`}),`
`,(0,C.jsx)(t.p,{children:`Area Charts visualise the magnitude of one or more series over time using filled regions. Stacked area charts make it easy to compare the contribution of each series to a total; overlapping area charts emphasise individual trends.`}),`
`,(0,C.jsx)(o,{of:d}),`
`,(0,C.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,C.jsxs)(t.p,{children:[(0,C.jsx)(t.code,{children:`AreaChart`}),` is built on `,(0,C.jsx)(t.code,{children:`@visx/xychart`}),` using `,(0,C.jsx)(t.code,{children:`AreaStack`}),` for stacked layouts and `,(0,C.jsx)(t.code,{children:`AreaSeries`}),` for overlapping ones. It supports the standard chart features (responsive sizing, legends, accessible tooltips, themes, keyboard navigation) plus stacked-area-specific options like `,(0,C.jsx)(t.code,{children:`stackOffset`}),`.`]}),`
`,(0,C.jsx)(a,{language:`jsx`,code:`import { AreaChart } from '@automattic/charts';
import '@automattic/charts/style.css';

<AreaChart data={ data } stacked />`}),`
`,(0,C.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,C.jsxs)(t.p,{children:[`For detailed prop information, see the `,(0,C.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-area-chart-api-reference--docs`,children:`Area Chart API Reference`}),`.`]}),`
`,(0,C.jsx)(t.h2,{id:`stacked-vs-unstacked`,children:`Stacked vs. Unstacked`}),`
`,(0,C.jsxs)(t.p,{children:[(0,C.jsx)(t.code,{children:`AreaChart`}),` is `,(0,C.jsx)(t.strong,{children:`stacked by default`}),`. Series sit on top of each other and the y-axis represents the cumulative total.`]}),`
`,(0,C.jsx)(o,{of:d}),`
`,(0,C.jsxs)(t.p,{children:[`Set `,(0,C.jsx)(t.code,{children:`stacked={ false }`}),` to render overlapping filled areas instead. Use `,(0,C.jsx)(t.code,{children:`fillOpacity`}),` to keep overlapping series visible:`]}),`
`,(0,C.jsx)(o,{of:g}),`
`,(0,C.jsx)(t.h2,{id:`stack-offsets`,children:`Stack Offsets`}),`
`,(0,C.jsxs)(t.p,{children:[`When `,(0,C.jsx)(t.code,{children:`stacked`}),` is true, the `,(0,C.jsx)(t.code,{children:`stackOffset`}),` prop selects how series are arranged on the y-axis.`]}),`
`,(0,C.jsxs)(t.h3,{id:`none-default`,children:[(0,C.jsx)(t.code,{children:`none`}),` (default)`]}),`
`,(0,C.jsx)(t.p,{children:`Standard stacking — values stack at their natural magnitude.`}),`
`,(0,C.jsxs)(t.h3,{id:`expand--100-stacked`,children:[(0,C.jsx)(t.code,{children:`expand`}),` — 100% stacked`]}),`
`,(0,C.jsx)(t.p,{children:`Each x-position is normalised to 1.0. Useful for visualising relative composition over time.`}),`
`,(0,C.jsx)(o,{of:p}),`
`,(0,C.jsxs)(t.h3,{id:`wiggle--streamgraph`,children:[(0,C.jsx)(t.code,{children:`wiggle`}),` — streamgraph`]}),`
`,(0,C.jsx)(t.p,{children:`Series flow around a central baseline. Best for many series where individual trends matter more than absolute totals.`}),`
`,(0,C.jsx)(o,{of:h}),`
`,(0,C.jsx)(t.h3,{id:`silhouette`,children:(0,C.jsx)(t.code,{children:`silhouette`})}),`
`,(0,C.jsx)(t.p,{children:`Stack centred around zero — symmetric layout without the wiggle minimisation.`}),`
`,(0,C.jsx)(t.h2,{id:`curve-types`,children:`Curve Types`}),`
`,(0,C.jsxs)(t.p,{children:[(0,C.jsx)(t.code,{children:`AreaChart`}),` supports the same `,(0,C.jsx)(t.code,{children:`curveType`}),` options as `,(0,C.jsx)(t.code,{children:`LineChart`}),`:`]}),`
`,(0,C.jsx)(o,{of:u}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:(0,C.jsx)(t.code,{children:`linear`})}),` — straight segments between points.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:(0,C.jsx)(t.code,{children:`smooth`})}),` — Catmull-Rom interpolation; flowing curves through every point.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:(0,C.jsx)(t.code,{children:`monotone`})}),` — prevents overshooting on steep changes; preferred for financial or scientific data.`]}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`single-series`,children:`Single Series`}),`
`,(0,C.jsx)(t.p,{children:`A single-series area chart is a useful way to emphasise a single trend with visual weight:`}),`
`,(0,C.jsx)(o,{of:m}),`
`,(0,C.jsx)(t.h2,{id:`zooming`,children:`Zooming`}),`
`,(0,C.jsxs)(t.p,{children:[`Set `,(0,C.jsx)(t.code,{children:`zoomable`}),` to let users drag horizontally across the plot to zoom the X axis into that range:`]}),`
`,(0,C.jsx)(o,{of:v}),`
`,(0,C.jsx)(a,{language:`jsx`,code:`<AreaChart
	data={ data }
	zoomable={ true }
/>`}),`
`,(0,C.jsx)(t.p,{children:`Zoom behaviour:`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[`Disabled by default (`,(0,C.jsx)(t.code,{children:`zoomable={ false }`}),`).`]}),`
`,(0,C.jsx)(t.li,{children:`Only the X axis rescales; the Y axis is unaffected.`}),`
`,(0,C.jsx)(t.li,{children:`A selection rectangle follows the pointer while dragging.`}),`
`,(0,C.jsx)(t.li,{children:`Drags shorter than 6px are ignored, so a click never zooms.`}),`
`,(0,C.jsx)(t.li,{children:`While zoomed, a "Reset zoom" button appears in the top-right to restore the full domain. It is reachable with Tab and activates with Enter or Space. A "Reset zoom" tooltip shows on hover and on keyboard focus, and Escape dismisses it.`}),`
`,(0,C.jsxs)(t.li,{children:[`Areas are clipped to the plot area whenever `,(0,C.jsx)(t.code,{children:`zoomable`}),` is set, keeping the zoom-out animation within the axes.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.code,{children:`zoomable`}),` chains with your own `,(0,C.jsx)(t.code,{children:`onPointerDown`}),`/`,(0,C.jsx)(t.code,{children:`onPointerMove`}),`/`,(0,C.jsx)(t.code,{children:`onPointerUp`}),` handlers rather than replacing them.`]}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`error-handling`,children:`Error Handling`}),`
`,(0,C.jsx)(t.p,{children:`The chart gracefully handles common edge cases:`}),`
`,(0,C.jsx)(o,{of:f}),`
`,(0,C.jsx)(t.p,{children:`Supported scenarios: empty data arrays, invalid date values, null/NaN values, single data points.`}),`
`,(0,C.jsx)(t.h2,{id:`legends`,children:`Legends`}),`
`,(0,C.jsx)(t.p,{children:`Use the composition API to place a legend explicitly:`}),`
`,(0,C.jsx)(o,{of:_}),`
`,(0,C.jsx)(a,{language:`jsx`,code:`<AreaChart data={ data }>
	<AreaChart.Legend />
</AreaChart>`}),`
`,(0,C.jsxs)(t.p,{children:[`For full legend configuration options, see the `,(0,C.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-components-legend--docs`,children:`Legend component docs`}),`.`]}),`
`,(0,C.jsx)(t.h2,{id:`responsive-behavior`,children:`Responsive Behavior`}),`
`,(0,C.jsxs)(t.p,{children:[`By default, charts `,(0,C.jsx)(t.strong,{children:`fill their parent container's dimensions`}),`. The parent must have an explicit height, or the chart must receive an `,(0,C.jsx)(t.code,{children:`aspectRatio`}),`:`]}),`
`,(0,C.jsx)(o,{of:l}),`
`,(0,C.jsx)(a,{language:`jsx`,code:`// Fill parent container (default) - parent needs explicit height
<div style={{ width: '100%', height: '400px' }}>
	<AreaChart data={ data } />
</div>

// Use aspect ratio - height from width, contained if the parent is shorter
<div style={{ width: '100%' }}>
	<AreaChart data={ data } aspectRatio={ 0.5 } />
</div>

// Fixed dimensions
<AreaChart data={ data } width={ 800 } height={ 400 } />`}),`
`,(0,C.jsxs)(t.p,{children:[`For more details on responsive behavior, see the `,(0,C.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design`,children:`Responsive Design section`}),` in the introduction.`]}),`
`,(0,C.jsx)(t.h2,{id:`animation`,children:`Animation`}),`
`,(0,C.jsx)(t.p,{children:`The Area Chart supports an optional entry animation:`}),`
`,(0,C.jsx)(o,{of:c}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Opt-in`}),`: Disabled by default; enable with the `,(0,C.jsx)(t.code,{children:`animation`}),` prop.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Accessibility`}),`: Respects `,(0,C.jsx)(t.code,{children:`prefers-reduced-motion`}),`.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Effect`}),`: Areas scale up from the bottom (1s ease-out).`]}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[`Chart container has `,(0,C.jsx)(t.code,{children:`role="grid"`}),` with an `,(0,C.jsx)(t.code,{children:`aria-label`}),` of `,(0,C.jsx)(t.code,{children:`"Area chart"`}),`.`]}),`
`,(0,C.jsx)(t.li,{children:`Tab to focus the chart; arrow keys navigate data points; tooltips are announced to screen readers.`}),`
`,(0,C.jsx)(t.li,{children:`All series colours can be overridden via theme; do not rely on colour alone to distinguish series.`}),`
`]})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;e((()=>{C=t(),s(),r(),y()}))();export{S as default};