import{n as e}from"./chunk-zsgVPwQN.js";import{Bm as t}from"./iframe-C-dE5hTC.js";import{r as n}from"./react-CA4RGdkr.js";import{t as r}from"./mdx-react-shim-Cu1Bm0sS.js";import{i,n as a,r as o,t as s}from"./blocks-Dj2K5Rhz.js";import{Animation as c,Dashboard as l,Default as u,EmptyData as d,Responsive as f,SinglePoint as p,TwoPoints as m,n as h,t as g}from"./index2.stories-C7okypny.js";function _(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{title:`JS Packages/Charts Library/Charts/Sparkline`,of:g}),`
`,(0,y.jsx)(t.h1,{id:`sparkline`,children:`Sparkline`}),`
`,(0,y.jsx)(t.p,{children:`A minimal, word-sized chart component designed for showing trends at a glance. Perfect for dashboard metrics and inline data visualization.`}),`
`,(0,y.jsx)(s,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,y.jsxs)(t.p,{children:[`The Sparkline component is a preconfigured variant of `,(0,y.jsx)(t.a,{href:`?path=/docs/js-packages-charts-library-charts-line-chart--docs`,children:`LineChart`}),` optimized for compact, inline visualizations. It provides a simplified API for trend data while leveraging LineChart's rendering engine under the hood.`]}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Key differences from LineChart:`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`Simplified `,(0,y.jsx)(t.code,{children:`number[]`}),` data format (no dates required)`]}),`
`,(0,y.jsx)(t.li,{children:`No axes, grid, tooltips, or legend by default`}),`
`,(0,y.jsx)(t.li,{children:`Compact default dimensions (100x40px)`}),`
`,(0,y.jsx)(t.li,{children:`Smooth monotone curve interpolation`}),`
`]}),`
`,(0,y.jsxs)(t.p,{children:[`For full control over axes, tooltips, and other features, use LineChart directly with `,(0,y.jsx)(t.code,{children:`gridVisibility="none"`}),` and `,(0,y.jsx)(t.code,{children:`options={{ axis: { x: { display: false }, y: { display: false } } }}`}),`.`]}),`
`,(0,y.jsx)(o,{language:`jsx`,code:`import { Sparkline } from '@automattic/charts';
import '@automattic/charts/style.css';

<Sparkline
	data={ [10, 15, 12, 18, 22, 25, 23, 28] }
	width={ 120 }
	height={ 48 }
	color="#4CAF50"
/>`}),`
`,(0,y.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,y.jsxs)(t.p,{children:[`For detailed information about component props and types, see the `,(0,y.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-sparkline-api-reference--docs`,children:`Sparkline API Reference`}),`.`]}),`
`,(0,y.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,y.jsx)(t.h3,{id:`simple-sparkline`,children:`Simple Sparkline`}),`
`,(0,y.jsxs)(t.p,{children:[`The simplest sparkline requires only a `,(0,y.jsx)(t.code,{children:`data`}),` prop with an array of numeric values:`]}),`
`,(0,y.jsx)(s,{of:u}),`
`,(0,y.jsx)(o,{language:`jsx`,code:`<Sparkline
	data={[10, 15, 12, 18, 22, 25, 23, 28]}
	width={120}
	height={48}
	color="#4CAF50"
/>`}),`
`,(0,y.jsx)(t.h3,{id:`required-props`,children:`Required Props`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:(0,y.jsx)(t.code,{children:`data`})}),`: Array of numeric values to plot`]}),`
`]}),`
`,(0,y.jsx)(t.h3,{id:`optional-props`,children:`Optional Props`}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Layout & Dimensions:`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:(0,y.jsx)(t.code,{children:`width`})}),` (default: `,(0,y.jsx)(t.code,{children:`100`}),`): Width of the sparkline in pixels`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:(0,y.jsx)(t.code,{children:`height`})}),` (default: `,(0,y.jsx)(t.code,{children:`40`}),`): Height of the sparkline in pixels`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:(0,y.jsx)(t.code,{children:`margin`})}),` (default: `,(0,y.jsx)(t.code,{children:`{2,2,2,2}`}),`): Margin around the chart`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:(0,y.jsx)(t.code,{children:`aspectRatio`})}),`: Height as a fraction of width. When omitted, fills parent container height`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:(0,y.jsx)(t.code,{children:`maxWidth`})}),` (default: `,(0,y.jsx)(t.code,{children:`1200`}),`): Maximum width constraint for responsive charts`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:(0,y.jsx)(t.code,{children:`resizeDebounceTime`})}),` (default: `,(0,y.jsx)(t.code,{children:`300`}),`): Debounce delay for resize events in ms`]}),`
`]}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Visual Styling:`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:(0,y.jsx)(t.code,{children:`color`})}),`: Color for the line stroke (defaults to theme color)`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:(0,y.jsx)(t.code,{children:`strokeWidth`})}),` (default: `,(0,y.jsx)(t.code,{children:`1.5`}),`): Line stroke width in pixels`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:(0,y.jsx)(t.code,{children:`withGradientFill`})}),` (default: `,(0,y.jsx)(t.code,{children:`true`}),`): Whether to render gradient fill beneath the line`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:(0,y.jsx)(t.code,{children:`gradient`})}),`: Custom gradient configuration (from, to, fromOpacity, toOpacity)`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:(0,y.jsx)(t.code,{children:`className`})}),`: Additional CSS class name`]}),`
`]}),`
`,(0,y.jsxs)(t.p,{children:[`For detailed prop information and type definitions, see the `,(0,y.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-sparkline-api-reference--docs`,children:`Sparkline API Reference`}),`.`]}),`
`,(0,y.jsx)(t.h2,{id:`using-linechart-directly`,children:`Using LineChart Directly`}),`
`,(0,y.jsx)(t.p,{children:`For more control, you can use LineChart with minimal chrome. This is what Sparkline does internally:`}),`
`,(0,y.jsx)(o,{language:`jsx`,code:`import { LineChart } from '@automattic/charts';

<LineChart
	data={[{
		label: 'trend',
		data: [
			{ date: new Date('2024-01-01'), value: 10 },
			{ date: new Date('2024-01-02'), value: 15 },
			// ...
		]
	}]}
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
	width={120}
	height={48}
/>`}),`
`,(0,y.jsx)(t.h2,{id:`dashboard-integration`,children:`Dashboard Integration`}),`
`,(0,y.jsx)(t.h3,{id:`metric-cards`,children:`Metric Cards`}),`
`,(0,y.jsx)(t.p,{children:`Sparklines work great alongside metrics in dashboard cards:`}),`
`,(0,y.jsx)(s,{of:l}),`
`,(0,y.jsx)(o,{language:`jsx`,code:`const metrics = [
	{ label: 'Speeding up', value: 28, data: [10, 15, 12, 18, 22, 25, 23, 28], color: '#4CAF50' },
	{ label: 'Efficient', value: 90, data: [80, 82, 85, 83, 87, 90, 88, 92], color: '#2196F3' },
	{ label: 'Unstable', value: 65, data: [50, 75, 45, 80, 40, 85, 55, 65], color: '#FF9800' },
];

return (
	<div style={{ display: 'flex', gap: '24px' }}>
		{metrics.map(metric => (
			<div key={metric.label} className="metric-card">
				<div className="metric-header">
					<span>{metric.label}</span>
					<span>{metric.value}</span>
				</div>
				<Sparkline
					data={metric.data}
					width={180}
					height={48}
					color={metric.color}
				/>
			</div>
		))}
	</div>
);`}),`
`,(0,y.jsx)(t.h2,{id:`styling-and-customization`,children:`Styling and Customization`}),`
`,(0,y.jsx)(t.h3,{id:`trend-colors`,children:`Trend Colors`}),`
`,(0,y.jsx)(t.p,{children:`Use colors to indicate trend direction - green for positive, red for negative:`}),`
`,(0,y.jsx)(o,{language:`jsx`,code:`// Positive trend
<Sparkline data={[10, 15, 18, 22, 28]} color="#4CAF50" />

// Negative trend
<Sparkline data={[28, 22, 18, 15, 10]} color="#F44336" />`}),`
`,(0,y.jsx)(t.h3,{id:`gradient-control`,children:`Gradient Control`}),`
`,(0,y.jsx)(t.p,{children:`Disable the gradient for a cleaner line-only appearance, or customize it:`}),`
`,(0,y.jsx)(o,{language:`jsx`,code:`// No gradient fill
<Sparkline data={data} color="#2196F3" withGradientFill={false} />

// Custom gradient
<Sparkline
	data={data}
	color="#00BCD4"
	gradient={{
		from: "#00BCD4",
		to: "#ffffff",
		fromOpacity: 0.8,
		toOpacity: 0.1,
	}}
/>`}),`
`,(0,y.jsx)(t.h2,{id:`theming-integration`,children:`Theming Integration`}),`
`,(0,y.jsxs)(t.p,{children:[`Sparklines integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided. A custom theme can be provided by wrapping your chart in `,(0,y.jsx)(t.code,{children:`GlobalChartsProvider`}),` and passing a custom theme object with the properties you want to override to the `,(0,y.jsx)(t.code,{children:`theme`}),` prop:`]}),`
`,(0,y.jsx)(o,{language:`tsx`,code:`import { GlobalChartsProvider, Sparkline, type ChartTheme } from '@automattic/charts';

const customTheme: ChartTheme = {
	colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'],
};

<GlobalChartsProvider theme={customTheme}>
	<Sparkline data={[10, 15, 12, 18]} />
</GlobalChartsProvider>`}),`
`,(0,y.jsx)(t.h2,{id:`responsive-behavior`,children:`Responsive Behavior`}),`
`,(0,y.jsxs)(t.p,{children:[`The default `,(0,y.jsx)(t.code,{children:`Sparkline`}),` export includes responsive behavior. By default, it `,(0,y.jsx)(t.strong,{children:`fills its parent container's dimensions`}),`:`]}),`
`,(0,y.jsx)(s,{of:f}),`
`,(0,y.jsx)(o,{language:`jsx`,code:`// Fill parent container (default) - parent needs explicit height
<div style={{ width: '200px', height: '60px' }}>
	<Sparkline data={[10, 15, 12, 18, 22, 25]} color="#9C27B0" />
</div>

// Use aspect ratio - height calculated from width
<div style={{ width: '100%', maxWidth: '200px' }}>
	<Sparkline data={[10, 15, 12, 18, 22, 25]} color="#9C27B0" aspectRatio={0.3} />
</div>`}),`
`,(0,y.jsxs)(t.p,{children:[`For more details on responsive behavior, see the `,(0,y.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design`,children:`Responsive Design section`}),` in the introduction.`]}),`
`,(0,y.jsx)(t.h2,{id:`animation`,children:`Animation`}),`
`,(0,y.jsx)(t.p,{children:`The Sparkline component supports an optional entry animation that creates a smooth reveal effect when the chart first renders:`}),`
`,(0,y.jsx)(s,{of:c}),`
`,(0,y.jsx)(o,{language:`tsx`,code:`<Sparkline
	data={ [10, 15, 12, 18, 22, 25, 23, 28] }
	width={ 120 }
	height={ 48 }
	color="#4CAF50"
	animation={ true }
/>`}),`
`,(0,y.jsx)(t.h3,{id:`animation-behavior`,children:`Animation Behavior`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Opt-in`}),`: Animation is disabled by default and must be explicitly enabled with the `,(0,y.jsx)(t.code,{children:`animation`}),` prop`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Accessibility`}),`: Automatically respects the user's `,(0,y.jsx)(t.code,{children:`prefers-reduced-motion`}),` system setting - animation will not play for users who prefer reduced motion`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Effect`}),`: Creates a rising effect where the line scales up from the bottom, revealing the data progressively`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Duration`}),`: 1000ms (1 second) with ease-out timing`]}),`
`]}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Note`}),`: The animation plays once when the chart initially renders and does not repeat.`]}),`
`,(0,y.jsx)(t.h2,{id:`edge-cases`,children:`Edge Cases`}),`
`,(0,y.jsx)(t.p,{children:`The component handles various edge cases gracefully:`}),`
`,(0,y.jsx)(t.h3,{id:`empty-data`,children:`Empty Data`}),`
`,(0,y.jsxs)(t.p,{children:[`When data is empty (`,(0,y.jsx)(t.code,{children:`[]`}),`), renders an empty container with the `,(0,y.jsx)(t.code,{children:`sparkline--empty`}),` class:`]}),`
`,(0,y.jsx)(s,{of:d}),`
`,(0,y.jsx)(t.h3,{id:`single-data-point`,children:`Single Data Point`}),`
`,(0,y.jsx)(t.p,{children:`When data has only one point, renders a circle:`}),`
`,(0,y.jsx)(s,{of:p}),`
`,(0,y.jsx)(t.h3,{id:`two-data-points`,children:`Two Data Points`}),`
`,(0,y.jsx)(t.p,{children:`Renders a minimal line connecting two points:`}),`
`,(0,y.jsx)(s,{of:m}),`
`,(0,y.jsx)(t.h3,{id:`negative-and-flat-values`,children:`Negative and Flat Values`}),`
`,(0,y.jsx)(t.p,{children:`Negative values and flat lines (all same values) are fully supported - experiment with the Default story controls to see these in action.`}),`
`,(0,y.jsx)(t.h3,{id:`customizing-empty-state`,children:`Customizing Empty State`}),`
`,(0,y.jsxs)(t.p,{children:[`The empty state can be styled using the `,(0,y.jsx)(t.code,{children:`sparkline--empty`}),` class:`]}),`
`,(0,y.jsx)(o,{language:`css`,code:`.sparkline--empty {
	background: rgba(0, 0, 0, 0.02);
	border: 1px dashed rgba(0, 0, 0, 0.1);
	border-radius: 4px;
}`}),`
`,(0,y.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsx)(t.p,{children:`Sparklines are decorative visualizations. For accessibility, ensure the parent container provides context:`}),`
`,(0,y.jsx)(o,{language:`jsx`,code:`<div role="img" aria-label="Momentum trending upward, current value 28">
	<span>Momentum</span>
	<span>28</span>
	<Sparkline data={data} aria-hidden="true" />
</div>`}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Best Practices:`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`Use `,(0,y.jsx)(t.code,{children:`role="img"`}),` on the container`]}),`
`,(0,y.jsxs)(t.li,{children:[`Provide `,(0,y.jsx)(t.code,{children:`aria-label`}),` describing the trend and current value`]}),`
`,(0,y.jsxs)(t.li,{children:[`Add `,(0,y.jsx)(t.code,{children:`aria-hidden="true"`}),` to the sparkline itself`]}),`
`,(0,y.jsx)(t.li,{children:`Always show the actual metric value as text alongside the sparkline`}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;e((()=>{y=t(),r(),i(),h()}))();export{v as default};