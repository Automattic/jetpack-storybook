import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{bt as n}from"./esm-Bz47qQZz.js";import{i as r,n as i,r as a,t as o}from"./blocks-DZEcE3hO.js";import{t as s}from"./mdx-react-shim-DtJvRTSS.js";import{Default as c,Positioned as l,Unstyled as u,n as d,t as f}from"./tooltip-box.stories-Dtblds7I.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{title:`JS Packages/Charts Library/Components/TooltipBox`,of:d}),`
`,(0,h.jsx)(t.h1,{id:`tooltipbox`,children:`TooltipBox`}),`
`,(0,h.jsxs)(t.p,{children:[`The chart tooltip box: the dark surface every chart tooltip draws. Use it to draw a tooltip outside a visx `,(0,h.jsx)(t.code,{children:`XYChart`}),`.`]}),`
`,(0,h.jsx)(o,{of:c}),`
`,(0,h.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`TooltipBox`}),` renders a `,(0,h.jsx)(t.code,{children:`div`}),` with the chart tooltip surface, the `,(0,h.jsx)(t.code,{children:`a8c-charts-tooltip-scope`}),` class, the dark tooltip theme and the `,(0,h.jsx)(t.code,{children:`visx-tooltip`}),` class. It does not position itself. Place it with `,(0,h.jsx)(t.code,{children:`style`}),` or a wrapper.`]}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`import { TooltipBox } from '@automattic/charts';

<TooltipBox>Monthly Sales: 4,200</TooltipBox>`}),`
`,(0,h.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,h.jsxs)(t.p,{children:[`For detailed information about component props and types, see the `,(0,h.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-components-tooltipbox-api-reference--docs`,children:`TooltipBox API Reference`}),`.`]}),`
`,(0,h.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,h.jsx)(t.h3,{id:`positioning`,children:`Positioning`}),`
`,(0,h.jsxs)(t.p,{children:[`The box sets no position. Place it with `,(0,h.jsx)(t.code,{children:`style`}),`, or put it inside a positioned wrapper:`]}),`
`,(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`<div style={ { position: 'relative' } }>
<TooltipBox style={ { position: 'absolute', left: 100, top: 60 } }>
	Monthly Sales: 4,200
</TooltipBox>
</div>`}),`
`,(0,h.jsx)(t.h3,{id:`props`,children:`Props`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`TooltipBox`}),` accepts every `,(0,h.jsx)(t.code,{children:`div`}),` attribute, plus `,(0,h.jsx)(t.code,{children:`unstyled`}),`.`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:(0,h.jsx)(t.code,{children:`role`})}),`: Defaults to `,(0,h.jsx)(t.code,{children:`"tooltip"`}),`. Pass another value to replace it.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:(0,h.jsx)(t.code,{children:`className`})}),`: Added beside the surface classes, so your class does not remove the default look.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:(0,h.jsx)(t.code,{children:`style`})}),`: Passed to the box. It is kept when `,(0,h.jsx)(t.code,{children:`unstyled`}),` is set.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:(0,h.jsx)(t.code,{children:`unstyled`})}),`: Drops the surface, the `,(0,h.jsx)(t.code,{children:`a8c-charts-tooltip-scope`}),` class and the dark theme.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:(0,h.jsx)(t.code,{children:`ref`})}),`: Forwarded to the box element.`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`unstyled`,children:`Unstyled`}),`
`,(0,h.jsxs)(t.p,{children:[`Set `,(0,h.jsx)(t.code,{children:`unstyled`}),` to draw the whole box yourself. The surface, scope class and dark theme are dropped. `,(0,h.jsx)(t.code,{children:`style`}),` and `,(0,h.jsx)(t.code,{children:`className`}),` still apply, and the `,(0,h.jsx)(t.code,{children:`visx-tooltip`}),` class stays.`]}),`
`,(0,h.jsx)(o,{of:u}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`<TooltipBox
unstyled
style={ { padding: '12px', background: '#fff', color: '#1e1e1e', borderRadius: '8px' } }
>
Monthly Sales: 4,200
</TooltipBox>`}),`
`,(0,h.jsx)(t.h2,{id:`using-it-in-charts`,children:`Using it in charts`}),`
`,(0,h.jsxs)(t.p,{children:[`Inside a chart's `,(0,h.jsx)(t.code,{children:`renderTooltip`}),`, return content only. The chart draws the `,(0,h.jsx)(t.code,{children:`TooltipBox`}),` around it, so returning one yourself nests a second box.`]}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`<LineChart
data={ data }
withTooltips
renderTooltip={ ( { tooltipData } ) => (
	<div>{ tooltipData?.nearestDatum?.datum.label }</div>
) }
/>`}),`
`,(0,h.jsxs)(t.p,{children:[`For a custom visx `,(0,h.jsx)(t.code,{children:`XYChart`}),`, use `,(0,h.jsx)(t.code,{children:`XYChartTooltip`}),` instead.`]}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`The box has `,(0,h.jsx)(t.code,{children:`role="tooltip"`}),` by default. Replace it with the `,(0,h.jsx)(t.code,{children:`role`}),` prop when the content needs another role.`]}),`
`,(0,h.jsx)(t.li,{children:`The box is not focusable and does not manage focus.`}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),s(),r(),f()}))();export{m as default};