"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9260],{"../charts/src/charts/sparkline/stories/index.api.mdx":((a,i,r)=>{r.r(i),r.d(i,{default:()=>c});var o=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),s=r("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),l=r("../../../node_modules/.pnpm/@storybook+addon-docs@10.2.3_@types+react@18.3.26_esbuild@0.25.9_storybook@10.2.3_@test_1e909a19285aafcb7051ac1c3970312d/node_modules/@storybook/addon-docs/dist/blocks.js");function d(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.W8,{title:"JS Packages/Charts Library/Charts/Sparkline/API Reference"}),`
`,(0,e.jsx)(n.h1,{id:"sparkline-api-reference",children:"Sparkline API Reference"}),`
`,(0,e.jsx)(n.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsxs)(n.p,{children:["Sparkline is a preconfigured variant of ",(0,e.jsx)(n.a,{href:"?path=/docs/js-packages-charts-library-charts-line-chart--docs",children:"LineChart"})," optimized for compact, inline visualizations. It provides a simplified API while using LineChart's rendering engine internally."]}),`
`,(0,e.jsx)(n.h2,{id:"sparkline",children:"Sparkline"}),`
`,(0,e.jsx)(n.p,{children:"Main component for rendering minimal trend visualizations."}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Props:"})}),`
`,(0,e.jsxs)(n.table,{children:[(0,e.jsx)(n.thead,{children:(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.th,{children:"Prop"}),(0,e.jsx)(n.th,{children:"Type"}),(0,e.jsx)(n.th,{children:"Default"}),(0,e.jsx)(n.th,{children:"Description"})]})}),(0,e.jsxs)(n.tbody,{children:[(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"data"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number[]"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsxs)(n.td,{children:[(0,e.jsx)(n.strong,{children:"Required."})," Array of numeric values to plot"]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"width"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"100"})}),(0,e.jsx)(n.td,{children:"Width of the sparkline in pixels"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"height"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"40"})}),(0,e.jsx)(n.td,{children:"Height of the sparkline in pixels"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"size"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Size for responsive variant (equivalent to width for square charts)"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"color"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"theme color"}),(0,e.jsx)(n.td,{children:"Color for the line stroke (hex or CSS color)"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"strokeWidth"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"1.5"})}),(0,e.jsx)(n.td,{children:"Line stroke width in pixels"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"withGradientFill"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"true"})}),(0,e.jsx)(n.td,{children:"Whether to render the gradient fill beneath the line"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"gradient"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"GradientConfig"})}),(0,e.jsx)(n.td,{children:"auto"}),(0,e.jsx)(n.td,{children:"Gradient configuration for area fill"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"className"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Additional CSS class name"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"chartId"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Custom chart identifier for unique gradient/element identification"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"margin"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"object"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"{2,2,2,2}"})}),(0,e.jsx)(n.td,{children:"Margin around the chart"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"animation"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsxs)(n.td,{children:["Enable entry animation on initial render. Creates a rising effect where the line scales up from the bottom. Automatically respects user's ",(0,e.jsx)(n.code,{children:"prefers-reduced-motion"})," system setting"]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"aspectRatio"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"0.5"})}),(0,e.jsx)(n.td,{children:"Aspect ratio for responsive charts (responsive variant only)"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"maxWidth"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"1200"})}),(0,e.jsx)(n.td,{children:"Maximum width for responsive charts (responsive variant only)"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"resizeDebounceTime"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"300"})}),(0,e.jsx)(n.td,{children:"Debounce time for resize events in ms (responsive variant only)"})]})]})]}),`
`,(0,e.jsx)(n.h2,{id:"types",children:"Types"}),`
`,(0,e.jsx)(n.h3,{id:"sparklinedatapoint",children:"SparklineDataPoint"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type SparklineDataPoint = number;
`})}),`
`,(0,e.jsx)(n.p,{children:"Simple numeric value for plotting."}),`
`,(0,e.jsx)(n.h3,{id:"gradientconfig",children:"GradientConfig"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type GradientConfig = {
	/** Start color for gradient (defaults to color prop) */
	from?: string;
	/** End color for gradient (defaults to theme backgroundColor) */
	to?: string;
	/** Start opacity (0-1), defaults to 0.5 */
	fromOpacity?: number;
	/** End opacity (0-1), defaults to 0.0 */
	toOpacity?: number;
};
`})}),`
`,(0,e.jsx)(n.h3,{id:"sparklineprops",children:"SparklineProps"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`interface SparklineProps {
	/** Array of numeric values to plot */
	data: SparklineDataPoint[];
	/** Width of the sparkline in pixels */
	width?: number;
	/** Height of the sparkline in pixels */
	height?: number;
	/** Size (used by responsive variant, equivalent to width for square charts) */
	size?: number;
	/** Color for the line stroke (hex or CSS color) */
	color?: string;
	/** Line stroke width in pixels */
	strokeWidth?: number;
	/** Whether to render the gradient fill beneath the line */
	withGradientFill?: boolean;
	/** Gradient configuration for area fill */
	gradient?: GradientConfig;
	/** Additional CSS class name */
	className?: string;
	/** Chart ID for unique gradient/element identification */
	chartId?: string;
	/** Margin around the chart */
	margin?: {
		top?: number;
		right?: number;
		bottom?: number;
		left?: number;
	};
}
`})}),`
`,(0,e.jsx)(n.h2,{id:"exports",children:"Exports"}),`
`,(0,e.jsx)(n.h3,{id:"default-export",children:"Default Export"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`import { Sparkline } from '@automattic/charts';
`})}),`
`,(0,e.jsxs)(n.p,{children:["The default export is the ",(0,e.jsx)(n.strong,{children:"responsive variant"})," that automatically adjusts to container width."]}),`
`,(0,e.jsx)(n.h3,{id:"named-exports",children:"Named Exports"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`import { SparklineUnresponsive } from '@automattic/charts/sparkline';
`})}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.strong,{children:"SparklineUnresponsive"}),": Fixed-size variant without responsive behavior. Use this when you want explicit width/height control without automatic resizing."]}),`
`,(0,e.jsx)(n.h2,{id:"css-classes",children:"CSS Classes"}),`
`,(0,e.jsx)(n.p,{children:"The component uses BEM-style CSS classes for styling:"}),`
`,(0,e.jsxs)(n.table,{children:[(0,e.jsx)(n.thead,{children:(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.th,{children:"Class"}),(0,e.jsx)(n.th,{children:"Applied When"}),(0,e.jsx)(n.th,{children:"Description"})]})}),(0,e.jsxs)(n.tbody,{children:[(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:".sparkline"})}),(0,e.jsx)(n.td,{children:"Always"}),(0,e.jsx)(n.td,{children:"Base class applied to all sparklines"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:".sparkline--empty"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"data.length === 0"})}),(0,e.jsx)(n.td,{children:"Applied when data is empty. Use for custom empty state styling"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:".sparkline--single-point"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"data.length === 1"})}),(0,e.jsx)(n.td,{children:"Applied when rendering a single data point as a circle"})]})]})]}),`
`,(0,e.jsx)(n.h3,{id:"custom-styling-example",children:"Custom Styling Example"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-css",children:`.sparkline--empty {
	background: rgba(0, 0, 0, 0.02);
	border: 1px dashed rgba(0, 0, 0, 0.1);
	border-radius: 4px;
}

.sparkline {
	/* Custom styles for all sparklines */
}
`})}),`
`,(0,e.jsx)(n.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,(0,e.jsxs)(n.p,{children:["The default ",(0,e.jsx)(n.code,{children:"Sparkline"})," export includes responsive sizing:"]}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`// Responsive (default export)
<Sparkline
	data={data}
	aspectRatio={0.3}
	maxWidth={400}
/>

// Fixed size (named export)
<SparklineUnresponsive
	data={data}
	width={120}
	height={48}
/>
`})}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Responsive Props:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"aspectRatio"}),": Height as a fraction of width (e.g., 0.3 = 30% height)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"maxWidth"}),": Maximum width constraint"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"resizeDebounceTime"}),": Debounce delay for window resize events"]}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"edge-case-handling",children:"Edge Case Handling"}),`
`,(0,e.jsxs)(n.table,{children:[(0,e.jsx)(n.thead,{children:(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.th,{children:"Scenario"}),(0,e.jsx)(n.th,{children:"Behavior"})]})}),(0,e.jsxs)(n.tbody,{children:[(0,e.jsxs)(n.tr,{children:[(0,e.jsxs)(n.td,{children:["Empty data (",(0,e.jsx)(n.code,{children:"[]"}),")"]}),(0,e.jsxs)(n.td,{children:["Renders empty div with ",(0,e.jsx)(n.code,{children:"sparkline--empty"})," class"]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsxs)(n.td,{children:["Single point (",(0,e.jsx)(n.code,{children:"[42]"}),")"]}),(0,e.jsx)(n.td,{children:"Renders a circle at the center"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsxs)(n.td,{children:["Two points (",(0,e.jsx)(n.code,{children:"[10, 20]"}),")"]}),(0,e.jsx)(n.td,{children:"Renders minimal line between points"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:"Negative values"}),(0,e.jsx)(n.td,{children:"Fully supported, chart scales automatically"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:"Flat line (all same)"}),(0,e.jsx)(n.td,{children:"Renders horizontal line"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:"Missing data prop"}),(0,e.jsx)(n.td,{children:"Treated as empty array"})]})]})]}),`
`,(0,e.jsx)(n.h2,{id:"theme-integration",children:"Theme Integration"}),`
`,(0,e.jsx)(n.p,{children:"Sparklines use the global charts theme when available:"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`import { GlobalChartsProvider } from '@automattic/charts';

<GlobalChartsProvider theme={customTheme}>
	<Sparkline data={data} />
</GlobalChartsProvider>
`})}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Theme Properties Used:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"colors[0]"}),": Default line color (when ",(0,e.jsx)(n.code,{children:"color"})," prop not provided)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"backgroundColor"}),": Default gradient ",(0,e.jsx)(n.code,{children:"to"})," color"]}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"typescript-usage",children:"TypeScript Usage"}),`
`,(0,e.jsx)(n.p,{children:"Full TypeScript support with exported types:"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`import type {
	SparklineProps,
	GradientConfig,
	SparklineDataPoint
} from '@automattic/charts/sparkline';

const config: GradientConfig = {
	from: '#4CAF50',
	to: '#ffffff',
	fromOpacity: 0.8,
	toOpacity: 0.1,
};

const data: SparklineDataPoint[] = [10, 15, 12, 18, 22, 25];

<Sparkline data={data} gradient={config} />
`})}),`
`,(0,e.jsx)(n.h2,{id:"relationship-to-linechart",children:"Relationship to LineChart"}),`
`,(0,e.jsx)(n.p,{children:"Sparkline is built on LineChart with the following preconfigured settings:"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`// Sparkline internally uses LineChart like this:
<LineChart
	data={transformedSeriesData}  // number[] \u2192 SeriesData[]
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
	margin={{ top: 2, right: 2, bottom: 2, left: 2 }}
/>
`})}),`
`,(0,e.jsxs)(n.p,{children:["For more control over rendering, use LineChart directly with these props. See ",(0,e.jsx)(n.a,{href:"?path=/docs/js-packages-charts-library-charts-line-chart-api-reference--docs",children:"LineChart API Reference"})," for full documentation."]})]})}function c(t={}){const{wrapper:n}={...(0,s.R)(),...t.components};return n?(0,e.jsx)(n,{...t,children:(0,e.jsx)(d,{...t})}):d(t)}})}]);
