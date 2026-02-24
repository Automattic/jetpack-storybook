"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[53],{"../charts/src/charts/sparkline/stories/index.docs.mdx"(c,a,r){r.r(a),r.d(a,{default:()=>d});var h=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),l=r("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.28_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),i=r("../../../node_modules/.pnpm/@storybook+addon-docs@10.2.3_@types+react@18.3.28_esbuild@0.25.9_storybook@10.2.3_@test_88e84a67bc471b38bfff5a29ef060cf6/node_modules/@storybook/addon-docs/dist/blocks.js"),s=r("../charts/src/charts/sparkline/stories/index.stories.tsx");function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.W8,{title:"JS Packages/Charts Library/Charts/Sparkline",of:s}),`
`,(0,e.jsx)(n.h1,{id:"sparkline",children:"Sparkline"}),`
`,(0,e.jsx)(n.p,{children:"A minimal, word-sized chart component designed for showing trends at a glance. Perfect for dashboard metrics and inline data visualization."}),`
`,(0,e.jsx)(i.Hl,{of:s.Default}),`
`,(0,e.jsx)(n.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsxs)(n.p,{children:["The Sparkline component is a preconfigured variant of ",(0,e.jsx)(n.a,{href:"?path=/docs/js-packages-charts-library-charts-line-chart--docs",children:"LineChart"})," optimized for compact, inline visualizations. It provides a simplified API for trend data while leveraging LineChart's rendering engine under the hood."]}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Key differences from LineChart:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["Simplified ",(0,e.jsx)(n.code,{children:"number[]"})," data format (no dates required)"]}),`
`,(0,e.jsx)(n.li,{children:"No axes, grid, tooltips, or legend by default"}),`
`,(0,e.jsx)(n.li,{children:"Compact default dimensions (100x40px)"}),`
`,(0,e.jsx)(n.li,{children:"Smooth monotone curve interpolation"}),`
`]}),`
`,(0,e.jsxs)(n.p,{children:["For full control over axes, tooltips, and other features, use LineChart directly with ",(0,e.jsx)(n.code,{children:'gridVisibility="none"'})," and ",(0,e.jsx)(n.code,{children:"options={{ axis: { x: { display: false }, y: { display: false } } }}"}),"."]}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`import { Sparkline } from '@automattic/charts';
import '@automattic/charts/sparkline/style.css';

<Sparkline
	data={ [10, 15, 12, 18, 22, 25, 23, 28] }
	width={ 120 }
	height={ 48 }
	color="#4CAF50"
/>`}),`
`,(0,e.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsxs)(n.p,{children:["For detailed information about component props and types, see the ",(0,e.jsx)(n.a,{href:"./?path=/docs/js-packages-charts-library-charts-sparkline-api-reference--docs",children:"Sparkline API Reference"}),"."]}),`
`,(0,e.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(n.h3,{id:"simple-sparkline",children:"Simple Sparkline"}),`
`,(0,e.jsxs)(n.p,{children:["The simplest sparkline requires only a ",(0,e.jsx)(n.code,{children:"data"})," prop with an array of numeric values:"]}),`
`,(0,e.jsx)(i.Hl,{of:s.Default}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<Sparkline
	data={[10, 15, 12, 18, 22, 25, 23, 28]}
	width={120}
	height={48}
	color="#4CAF50"
/>`}),`
`,(0,e.jsx)(n.h3,{id:"required-props",children:"Required Props"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"data"})}),": Array of numeric values to plot"]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"optional-props",children:"Optional Props"}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Layout & Dimensions:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"width"})})," (default: ",(0,e.jsx)(n.code,{children:"100"}),"): Width of the sparkline in pixels"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"height"})})," (default: ",(0,e.jsx)(n.code,{children:"40"}),"): Height of the sparkline in pixels"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"margin"})})," (default: ",(0,e.jsx)(n.code,{children:"{2,2,2,2}"}),"): Margin around the chart"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"aspectRatio"})}),": Height as a fraction of width. When omitted, fills parent container height"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"maxWidth"})})," (default: ",(0,e.jsx)(n.code,{children:"1200"}),"): Maximum width constraint for responsive charts"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"resizeDebounceTime"})})," (default: ",(0,e.jsx)(n.code,{children:"300"}),"): Debounce delay for resize events in ms"]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Visual Styling:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"color"})}),": Color for the line stroke (defaults to theme color)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"strokeWidth"})})," (default: ",(0,e.jsx)(n.code,{children:"1.5"}),"): Line stroke width in pixels"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"withGradientFill"})})," (default: ",(0,e.jsx)(n.code,{children:"true"}),"): Whether to render gradient fill beneath the line"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"gradient"})}),": Custom gradient configuration (from, to, fromOpacity, toOpacity)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"className"})}),": Additional CSS class name"]}),`
`]}),`
`,(0,e.jsxs)(n.p,{children:["For detailed prop information and type definitions, see the ",(0,e.jsx)(n.a,{href:"./?path=/docs/js-packages-charts-library-charts-sparkline-api-reference--docs",children:"Sparkline API Reference"}),"."]}),`
`,(0,e.jsx)(n.h2,{id:"using-linechart-directly",children:"Using LineChart Directly"}),`
`,(0,e.jsx)(n.p,{children:"For more control, you can use LineChart with minimal chrome. This is what Sparkline does internally:"}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`import { LineChart } from '@automattic/charts';

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
`,(0,e.jsx)(n.h2,{id:"visual-customization",children:"Visual Customization"}),`
`,(0,e.jsx)(n.h3,{id:"trend-colors",children:"Trend Colors"}),`
`,(0,e.jsx)(n.p,{children:"Use colors to indicate trend direction - green for positive, red for negative:"}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`// Positive trend
<Sparkline data={[10, 15, 18, 22, 28]} color="#4CAF50" />

// Negative trend
<Sparkline data={[28, 22, 18, 15, 10]} color="#F44336" />`}),`
`,(0,e.jsx)(n.h3,{id:"gradient-control",children:"Gradient Control"}),`
`,(0,e.jsx)(n.p,{children:"Disable the gradient for a cleaner line-only appearance, or customize it:"}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`// No gradient fill
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
`,(0,e.jsx)(n.h3,{id:"responsive-sparkline",children:"Responsive Sparkline"}),`
`,(0,e.jsxs)(n.p,{children:["The default ",(0,e.jsx)(n.code,{children:"Sparkline"})," export includes responsive behavior. By default, it ",(0,e.jsx)(n.strong,{children:"fills its parent container's dimensions"}),":"]}),`
`,(0,e.jsx)(i.Hl,{of:s.Responsive}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`// Fill parent container (default) - parent needs explicit height
<div style={{ width: '200px', height: '60px' }}>
	<Sparkline data={[10, 15, 12, 18, 22, 25]} color="#9C27B0" />
</div>

// Use aspect ratio - height calculated from width
<div style={{ width: '100%', maxWidth: '200px' }}>
	<Sparkline data={[10, 15, 12, 18, 22, 25]} color="#9C27B0" aspectRatio={0.3} />
</div>`}),`
`,(0,e.jsxs)(n.p,{children:["For more details on responsive behavior, see the ",(0,e.jsx)(n.a,{href:"./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design",children:"Responsive Design section"})," in the introduction."]}),`
`,(0,e.jsx)(n.h2,{id:"dashboard-integration",children:"Dashboard Integration"}),`
`,(0,e.jsx)(n.h3,{id:"metric-cards",children:"Metric Cards"}),`
`,(0,e.jsx)(n.p,{children:"Sparklines work great alongside metrics in dashboard cards:"}),`
`,(0,e.jsx)(i.Hl,{of:s.Dashboard}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`const metrics = [
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
`,(0,e.jsx)(n.h2,{id:"theming-integration",children:"Theming Integration"}),`
`,(0,e.jsxs)(n.p,{children:["Sparklines integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided. A custom theme can be provided by wrapping your chart in ",(0,e.jsx)(n.code,{children:"GlobalChartsProvider"})," and passing a custom theme object with the properties you want to override to the ",(0,e.jsx)(n.code,{children:"theme"})," prop:"]}),`
`,(0,e.jsx)(i.kL,{language:"tsx",code:`import { GlobalChartsProvider, Sparkline, type ChartTheme } from '@automattic/charts';

const customTheme: ChartTheme = {
	colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'],
};

<GlobalChartsProvider theme={customTheme}>
	<Sparkline data={[10, 15, 12, 18]} />
</GlobalChartsProvider>`}),`
`,(0,e.jsx)(n.h2,{id:"animation",children:"Animation"}),`
`,(0,e.jsx)(n.p,{children:"The Sparkline component supports an optional entry animation that creates a smooth reveal effect when the chart first renders:"}),`
`,(0,e.jsx)(i.Hl,{of:s.Animation}),`
`,(0,e.jsx)(i.kL,{language:"tsx",code:`<Sparkline
	data={ [10, 15, 12, 18, 22, 25, 23, 28] }
	width={ 120 }
	height={ 48 }
	color="#4CAF50"
	animation={ true }
/>`}),`
`,(0,e.jsx)(n.h3,{id:"animation-behavior",children:"Animation Behavior"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Opt-in"}),": Animation is disabled by default and must be explicitly enabled with the ",(0,e.jsx)(n.code,{children:"animation"})," prop"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Accessibility"}),": Automatically respects the user's ",(0,e.jsx)(n.code,{children:"prefers-reduced-motion"})," system setting - animation will not play for users who prefer reduced motion"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Effect"}),": Creates a rising effect where the line scales up from the bottom, revealing the data progressively"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Duration"}),": 1000ms (1 second) with ease-out timing"]}),`
`]}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.strong,{children:"Note"}),": The animation plays once when the chart initially renders and does not repeat."]}),`
`,(0,e.jsx)(n.h2,{id:"edge-cases",children:"Edge Cases"}),`
`,(0,e.jsx)(n.p,{children:"The component handles various edge cases gracefully:"}),`
`,(0,e.jsx)(n.h3,{id:"empty-data",children:"Empty Data"}),`
`,(0,e.jsxs)(n.p,{children:["When data is empty (",(0,e.jsx)(n.code,{children:"[]"}),"), renders an empty container with the ",(0,e.jsx)(n.code,{children:"sparkline--empty"})," class:"]}),`
`,(0,e.jsx)(i.Hl,{of:s.EmptyData}),`
`,(0,e.jsx)(n.h3,{id:"single-data-point",children:"Single Data Point"}),`
`,(0,e.jsx)(n.p,{children:"When data has only one point, renders a circle:"}),`
`,(0,e.jsx)(i.Hl,{of:s.SinglePoint}),`
`,(0,e.jsx)(n.h3,{id:"two-data-points",children:"Two Data Points"}),`
`,(0,e.jsx)(n.p,{children:"Renders a minimal line connecting two points:"}),`
`,(0,e.jsx)(i.Hl,{of:s.TwoPoints}),`
`,(0,e.jsx)(n.h3,{id:"negative-and-flat-values",children:"Negative and Flat Values"}),`
`,(0,e.jsx)(n.p,{children:"Negative values and flat lines (all same values) are fully supported - experiment with the Default story controls to see these in action."}),`
`,(0,e.jsx)(n.h3,{id:"customizing-empty-state",children:"Customizing Empty State"}),`
`,(0,e.jsxs)(n.p,{children:["The empty state can be styled using the ",(0,e.jsx)(n.code,{children:"sparkline--empty"})," class:"]}),`
`,(0,e.jsx)(i.kL,{language:"css",code:`.sparkline--empty {
	background: rgba(0, 0, 0, 0.02);
	border: 1px dashed rgba(0, 0, 0, 0.1);
	border-radius: 4px;
}`}),`
`,(0,e.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,(0,e.jsx)(n.p,{children:"Sparklines are decorative visualizations. For accessibility, ensure the parent container provides context:"}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<div role="img" aria-label="Momentum trending upward, current value 28">
	<span>Momentum</span>
	<span>28</span>
	<Sparkline data={data} aria-hidden="true" />
</div>`}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Best Practices:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["Use ",(0,e.jsx)(n.code,{children:'role="img"'})," on the container"]}),`
`,(0,e.jsxs)(n.li,{children:["Provide ",(0,e.jsx)(n.code,{children:"aria-label"})," describing the trend and current value"]}),`
`,(0,e.jsxs)(n.li,{children:["Add ",(0,e.jsx)(n.code,{children:'aria-hidden="true"'})," to the sparkline itself"]}),`
`,(0,e.jsx)(n.li,{children:"Always show the actual metric value as text alongside the sparkline"}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"browser-compatibility",children:"Browser Compatibility"}),`
`,(0,e.jsx)(n.p,{children:"Sparkline charts are compatible with all modern browsers:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Chrome/Edge (latest)"}),`
`,(0,e.jsx)(n.li,{children:"Firefox (latest)"}),`
`,(0,e.jsx)(n.li,{children:"Safari (latest)"}),`
`,(0,e.jsx)(n.li,{children:"Mobile browsers (iOS Safari, Chrome Mobile)"}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"performance",children:"Performance"}),`
`,(0,e.jsx)(n.p,{children:"Sparklines are optimized for performance with:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Built on LineChart's optimized rendering engine"}),`
`,(0,e.jsxs)(n.li,{children:["Memoized data transformation from ",(0,e.jsx)(n.code,{children:"number[]"})," to series format"]}),`
`,(0,e.jsx)(n.li,{children:"No axes, grid, or tooltip overhead"}),`
`,(0,e.jsx)(n.li,{children:"Efficient gradient and theme integration"}),`
`]}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Performance Tips:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Keep data arrays reasonably sized (under 100 points for sparklines)"}),`
`,(0,e.jsx)(n.li,{children:"Use the responsive variant only when needed"}),`
`,(0,e.jsx)(n.li,{children:"Reuse theme objects to prevent unnecessary recalculations"}),`
`]})]})}function d(t={}){const{wrapper:n}={...(0,l.R)(),...t.components};return n?(0,e.jsx)(n,{...t,children:(0,e.jsx)(o,{...t})}):o(t)}}}]);
