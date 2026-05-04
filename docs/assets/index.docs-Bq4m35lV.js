import{n as e}from"./chunk-zsgVPwQN.js";import{Hm as t}from"./iframe-c6GRj6Rm.js";import{r as n}from"./react-BL9IcLxA.js";import{t as r}from"./mdx-react-shim-DYrKSq3x.js";import{i,n as a,r as o,t as s}from"./blocks-B0k_nSqT.js";import{Animation as c,AspectRatio as l,CurveTypes as u,Default as d,ErrorStates as f,PercentageStack as p,SingleSeries as m,Streamgraph as h,Unstacked as g,WithCompositionLegend as _,n as v,t as y}from"./index.stories-CApwiBdk.js";function b(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a,{title:`JS Packages/Charts Library/Charts/Area Chart`,of:y}),`
`,(0,S.jsx)(t.h1,{id:`area-chart`,children:`Area Chart`}),`
`,(0,S.jsx)(t.p,{children:`Area Charts visualise the magnitude of one or more series over time using filled regions. Stacked area charts make it easy to compare the contribution of each series to a total; overlapping area charts emphasise individual trends.`}),`
`,(0,S.jsx)(s,{of:d}),`
`,(0,S.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,S.jsxs)(t.p,{children:[(0,S.jsx)(t.code,{children:`AreaChart`}),` is built on `,(0,S.jsx)(t.code,{children:`@visx/xychart`}),` using `,(0,S.jsx)(t.code,{children:`AreaStack`}),` for stacked layouts and `,(0,S.jsx)(t.code,{children:`AreaSeries`}),` for overlapping ones. It supports the standard chart features (responsive sizing, legends, accessible tooltips, themes, keyboard navigation) plus stacked-area-specific options like `,(0,S.jsx)(t.code,{children:`stackOffset`}),`.`]}),`
`,(0,S.jsx)(o,{language:`jsx`,code:`import { AreaChart } from '@automattic/charts';
import '@automattic/charts/style.css';

<AreaChart data={ data } stacked />`}),`
`,(0,S.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,S.jsxs)(t.p,{children:[`For detailed prop information, see the `,(0,S.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-area-chart-api-reference--docs`,children:`Area Chart API Reference`}),`.`]}),`
`,(0,S.jsx)(t.h2,{id:`stacked-vs-unstacked`,children:`Stacked vs. Unstacked`}),`
`,(0,S.jsxs)(t.p,{children:[(0,S.jsx)(t.code,{children:`AreaChart`}),` is `,(0,S.jsx)(t.strong,{children:`stacked by default`}),`. Series sit on top of each other and the y-axis represents the cumulative total.`]}),`
`,(0,S.jsx)(s,{of:d}),`
`,(0,S.jsxs)(t.p,{children:[`Set `,(0,S.jsx)(t.code,{children:`stacked={ false }`}),` to render overlapping filled areas instead. Use `,(0,S.jsx)(t.code,{children:`fillOpacity`}),` to keep overlapping series visible:`]}),`
`,(0,S.jsx)(s,{of:g}),`
`,(0,S.jsx)(t.h2,{id:`stack-offsets`,children:`Stack Offsets`}),`
`,(0,S.jsxs)(t.p,{children:[`When `,(0,S.jsx)(t.code,{children:`stacked`}),` is true, the `,(0,S.jsx)(t.code,{children:`stackOffset`}),` prop selects how series are arranged on the y-axis.`]}),`
`,(0,S.jsxs)(t.h3,{id:`none-default`,children:[(0,S.jsx)(t.code,{children:`none`}),` (default)`]}),`
`,(0,S.jsx)(t.p,{children:`Standard stacking — values stack at their natural magnitude.`}),`
`,(0,S.jsxs)(t.h3,{id:`expand--100-stacked`,children:[(0,S.jsx)(t.code,{children:`expand`}),` — 100% stacked`]}),`
`,(0,S.jsx)(t.p,{children:`Each x-position is normalised to 1.0. Useful for visualising relative composition over time.`}),`
`,(0,S.jsx)(s,{of:p}),`
`,(0,S.jsxs)(t.h3,{id:`wiggle--streamgraph`,children:[(0,S.jsx)(t.code,{children:`wiggle`}),` — streamgraph`]}),`
`,(0,S.jsx)(t.p,{children:`Series flow around a central baseline. Best for many series where individual trends matter more than absolute totals.`}),`
`,(0,S.jsx)(s,{of:h}),`
`,(0,S.jsx)(t.h3,{id:`silhouette`,children:(0,S.jsx)(t.code,{children:`silhouette`})}),`
`,(0,S.jsx)(t.p,{children:`Stack centred around zero — symmetric layout without the wiggle minimisation.`}),`
`,(0,S.jsx)(t.h2,{id:`curve-types`,children:`Curve Types`}),`
`,(0,S.jsxs)(t.p,{children:[(0,S.jsx)(t.code,{children:`AreaChart`}),` supports the same `,(0,S.jsx)(t.code,{children:`curveType`}),` options as `,(0,S.jsx)(t.code,{children:`LineChart`}),`:`]}),`
`,(0,S.jsx)(s,{of:u}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`linear`})}),` — straight segments between points.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`smooth`})}),` — Catmull-Rom interpolation; flowing curves through every point.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`monotone`})}),` — prevents overshooting on steep changes; preferred for financial or scientific data.`]}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`single-series`,children:`Single Series`}),`
`,(0,S.jsx)(t.p,{children:`A single-series area chart is a useful way to emphasise a single trend with visual weight:`}),`
`,(0,S.jsx)(s,{of:m}),`
`,(0,S.jsx)(t.h2,{id:`error-handling`,children:`Error Handling`}),`
`,(0,S.jsx)(t.p,{children:`The chart gracefully handles common edge cases:`}),`
`,(0,S.jsx)(s,{of:f}),`
`,(0,S.jsx)(t.p,{children:`Supported scenarios: empty data arrays, invalid date values, null/NaN values, single data points.`}),`
`,(0,S.jsx)(t.h2,{id:`legends`,children:`Legends`}),`
`,(0,S.jsx)(t.p,{children:`Use the composition API to place a legend explicitly:`}),`
`,(0,S.jsx)(s,{of:_}),`
`,(0,S.jsx)(o,{language:`jsx`,code:`<AreaChart data={ data }>
	<AreaChart.Legend />
</AreaChart>`}),`
`,(0,S.jsxs)(t.p,{children:[`For full legend configuration options, see the `,(0,S.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-components-legend--docs`,children:`Legend component docs`}),`.`]}),`
`,(0,S.jsx)(t.h2,{id:`responsive-behavior`,children:`Responsive Behavior`}),`
`,(0,S.jsxs)(t.p,{children:[`By default, charts fill their parent container's dimensions. The parent must have an explicit height, or the chart must receive an `,(0,S.jsx)(t.code,{children:`aspectRatio`}),` prop:`]}),`
`,(0,S.jsx)(s,{of:l}),`
`,(0,S.jsxs)(t.p,{children:[`For more details, see the `,(0,S.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design`,children:`Responsive Design section`}),`.`]}),`
`,(0,S.jsx)(t.h2,{id:`animation`,children:`Animation`}),`
`,(0,S.jsx)(t.p,{children:`The Area Chart supports an optional entry animation:`}),`
`,(0,S.jsx)(s,{of:c}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Opt-in`}),`: Disabled by default; enable with the `,(0,S.jsx)(t.code,{children:`animation`}),` prop.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Accessibility`}),`: Respects `,(0,S.jsx)(t.code,{children:`prefers-reduced-motion`}),`.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Effect`}),`: Areas scale up from the bottom (1s ease-out).`]}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[`Chart container has `,(0,S.jsx)(t.code,{children:`role="grid"`}),` with an `,(0,S.jsx)(t.code,{children:`aria-label`}),` of `,(0,S.jsx)(t.code,{children:`"Area chart"`}),`.`]}),`
`,(0,S.jsx)(t.li,{children:`Tab to focus the chart; arrow keys navigate data points; tooltips are announced to screen readers.`}),`
`,(0,S.jsx)(t.li,{children:`All series colours can be overridden via theme; do not rely on colour alone to distinguish series.`}),`
`]})]})}function x(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;e((()=>{S=t(),r(),i(),v()}))();export{x as default};