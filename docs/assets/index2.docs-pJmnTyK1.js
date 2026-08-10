import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{bt as n}from"./esm-CgK00K1x.js";import{i as r,n as i,r as a,t as o}from"./blocks-nRRNAgN2.js";import{t as s}from"./mdx-react-shim-BwvGNBi7.js";import{Down as c,Neutral as l,Up as u,WithoutIcon as d,n as f,t as p}from"./index2.stories-876F6nmX.js";function m(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{title:`JS Packages/Charts Library/Components/Trend Indicator`,of:p}),`
`,(0,g.jsx)(t.h1,{id:`trend-indicator`,children:`Trend Indicator`}),`
`,(0,g.jsx)(t.p,{children:`A compact component for displaying directional trends with values, perfect for showing percentage changes, growth metrics, or status indicators.`}),`
`,(0,g.jsx)(o,{of:u}),`
`,(0,g.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,g.jsx)(t.p,{children:`The TrendIndicator component displays a value with an optional directional icon and color-coded styling to indicate positive, negative, or neutral trends. It's designed to be used inline with text or alongside metrics in dashboards.`}),`
`,(0,g.jsx)(a,{language:`tsx`,code:`import { TrendIndicator } from '@automattic/charts';

<TrendIndicator direction="up" value="+14%" />
<TrendIndicator direction="down" value="-5%" />
<TrendIndicator direction="neutral" value="0%" />`}),`
`,(0,g.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,g.jsxs)(t.p,{children:[`For detailed information about component props and types, see the `,(0,g.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-components-trend-indicator-api-reference--docs`,children:`Trend Indicator API Reference`}),`.`]}),`
`,(0,g.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,g.jsx)(t.h3,{id:`upward-trend`,children:`Upward Trend`}),`
`,(0,g.jsxs)(t.p,{children:[`Use `,(0,g.jsx)(t.code,{children:`direction="up"`}),` for positive changes. The indicator displays in green with an upward arrow:`]}),`
`,(0,g.jsx)(o,{of:u}),`
`,(0,g.jsx)(a,{language:`tsx`,code:`<TrendIndicator direction="up" value="+14%" />`}),`
`,(0,g.jsx)(t.h3,{id:`downward-trend`,children:`Downward Trend`}),`
`,(0,g.jsxs)(t.p,{children:[`Use `,(0,g.jsx)(t.code,{children:`direction="down"`}),` for negative changes. The indicator displays in red with a downward arrow:`]}),`
`,(0,g.jsx)(o,{of:c}),`
`,(0,g.jsx)(a,{language:`tsx`,code:`<TrendIndicator direction="down" value="-5%" />`}),`
`,(0,g.jsx)(t.h3,{id:`neutral-trend`,children:`Neutral Trend`}),`
`,(0,g.jsxs)(t.p,{children:[`Use `,(0,g.jsx)(t.code,{children:`direction="neutral"`}),` for unchanged values. The indicator displays in gray without an arrow:`]}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(a,{language:`tsx`,code:`<TrendIndicator direction="neutral" value="0%" />`}),`
`,(0,g.jsx)(t.h3,{id:`required-props`,children:`Required Props`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:(0,g.jsx)(t.code,{children:`direction`})}),`: The trend direction (`,(0,g.jsx)(t.code,{children:`'up'`}),`, `,(0,g.jsx)(t.code,{children:`'down'`}),`, or `,(0,g.jsx)(t.code,{children:`'neutral'`}),`)`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:(0,g.jsx)(t.code,{children:`value`})}),`: The value to display (string or number)`]}),`
`]}),`
`,(0,g.jsx)(t.h3,{id:`optional-props`,children:`Optional Props`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:(0,g.jsx)(t.code,{children:`showIcon`})}),` (default: `,(0,g.jsx)(t.code,{children:`true`}),`): Whether to show the directional arrow icon`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:(0,g.jsx)(t.code,{children:`className`})}),`: Additional CSS class name`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:(0,g.jsx)(t.code,{children:`style`})}),`: Inline CSS styles`]}),`
`]}),`
`,(0,g.jsx)(t.h3,{id:`without-icon`,children:`Without Icon`}),`
`,(0,g.jsx)(t.p,{children:`Hide the directional icon when you only need color-coded text:`}),`
`,(0,g.jsx)(o,{of:d}),`
`,(0,g.jsx)(a,{language:`tsx`,code:`<TrendIndicator direction="up" value="+14%" showIcon={false} />`}),`
`,(0,g.jsx)(t.h3,{id:`value-formats`,children:`Value Formats`}),`
`,(0,g.jsxs)(t.p,{children:[`The `,(0,g.jsx)(t.code,{children:`value`}),` prop accepts any string or number format:`]}),`
`,(0,g.jsx)(a,{language:`tsx`,code:`// Percentages
<TrendIndicator direction="up" value="+14%" />
<TrendIndicator direction="down" value="-5.2%" />

// Currency
<TrendIndicator direction="up" value="+$500" />
<TrendIndicator direction="down" value="-$1,234" />

// Numbers
<TrendIndicator direction="up" value={42} />
<TrendIndicator direction="up" value="2.5k" />`}),`
`,(0,g.jsx)(t.h2,{id:`styling-and-customization`,children:`Styling and Customization`}),`
`,(0,g.jsxs)(t.p,{children:[`Apply custom styles using the `,(0,g.jsx)(t.code,{children:`className`}),` or `,(0,g.jsx)(t.code,{children:`style`}),` props:`]}),`
`,(0,g.jsx)(a,{language:`tsx`,code:`<TrendIndicator
direction="up"
value="+25%"
style={{ fontSize: '1.5rem', fontWeight: 700 }}
/>

<TrendIndicator
direction="down"
value="-10%"
className="my-custom-trend"
/>`}),`
`,(0,g.jsx)(t.h2,{id:`theming-integration`,children:`Theming Integration`}),`
`,(0,g.jsx)(t.p,{children:`By default the trend colors resolve to accessible WordPress Design System
tokens. The component also exposes CSS custom properties so you can override
them:`}),`
`,(0,g.jsx)(a,{language:`css`,code:`:root {
/* Defaults shown — these resolve to the WPDS tokens below: */
--a8c-charts-color-trend-up: var(--wpds-color-foreground-content-success-weak, #008030);
--a8c-charts-color-trend-down: var(--wpds-color-foreground-content-error-weak, #cc1818);
--a8c-charts-color-trend-neutral: var(--wpds-color-foreground-content-neutral-weak, #707070);
}`}),`
`,(0,g.jsx)(t.p,{children:`Override these variables to match your design system. Make sure any custom
colors meet contrast requirements.`}),`
`,(0,g.jsx)(t.h2,{id:`common-use-cases`,children:`Common Use Cases`}),`
`,(0,g.jsx)(t.h3,{id:`dashboard-metrics`,children:`Dashboard Metrics`}),`
`,(0,g.jsx)(t.p,{children:`Display trend indicators alongside key metrics:`}),`
`,(0,g.jsx)(a,{language:`tsx`,code:`<div className="metric-card">
<span className="metric-label">Monthly Revenue</span>
<div className="metric-value">
	<span>$45,231</span>
	<TrendIndicator direction="up" value="+12%" />
</div>
</div>`}),`
`,(0,g.jsx)(t.h3,{id:`data-tables`,children:`Data Tables`}),`
`,(0,g.jsx)(t.p,{children:`Show trends in table cells:`}),`
`,(0,g.jsx)(a,{language:`tsx`,code:`<table>
<tbody>
	<tr>
		<td>Product A</td>
		<td>1,234 sales</td>
		<td><TrendIndicator direction="up" value="+8%" /></td>
	</tr>
	<tr>
		<td>Product B</td>
		<td>567 sales</td>
		<td><TrendIndicator direction="down" value="-3%" /></td>
	</tr>
</tbody>
</table>`}),`
`,(0,g.jsx)(t.h3,{id:`inline-with-text`,children:`Inline with Text`}),`
`,(0,g.jsx)(t.p,{children:`Use inline with descriptive text:`}),`
`,(0,g.jsx)(a,{language:`tsx`,code:`<p>
Sales increased this quarter <TrendIndicator direction="up" value="+14%" />
</p>`}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsx)(t.p,{children:`The TrendIndicator component includes built-in accessibility features:`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`aria-label`}),`: Automatically generated label describing the trend (e.g., "Increase: +14%")`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`aria-hidden`}),`: The decorative icon is hidden from screen readers`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Color independence`}),`: Trends are distinguishable by icon direction, not just color`]}),`
`]}),`
`,(0,g.jsx)(a,{language:`tsx`,code:`// Rendered output includes:
<span aria-label="Increase: +14%">
<svg aria-hidden="true">...</svg>
<span>+14%</span>
</span>`})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=t(),s(),r(),f()}))();export{h as default};