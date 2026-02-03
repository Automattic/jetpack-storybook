(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[53,977],{"../../../node_modules/.pnpm/@storybook+addon-docs@10.1.10_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@te_0dab3ad5060a2aa8d937367f454f05ee/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive":(b=>{function p(a){var _=new Error("Cannot find module '"+a+"'");throw _.code="MODULE_NOT_FOUND",_}p.keys=()=>[],p.resolve=p,p.id="../../../node_modules/.pnpm/@storybook+addon-docs@10.1.10_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@te_0dab3ad5060a2aa8d937367f454f05ee/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive",b.exports=p}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((b,p,a)=>{"use strict";a.d(p,{A:()=>f});function _(t){var i,c,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var u=t.length;for(i=0;i<u;i++)t[i]&&(c=_(t[i]))&&(n&&(n+=" "),n+=c)}else for(c in t)t[c]&&(n&&(n+=" "),n+=c);return n}function e(){for(var t,i,c=0,n="",u=arguments.length;c<u;c++)(t=arguments[c])&&(i=_(t))&&(n&&(n+=" "),n+=i);return n}const f=e}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/sparkline/sparkline.module.scss":((b,p,a)=>{"use strict";a.d(p,{A:()=>c});var _=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=a.n(_),f=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),t=a.n(f),i=t()(e());i.push([b.id,".UAoYnNvZN7gVfe9aw4wn{display:inline-block;vertical-align:middle;line-height:1}.UAoYnNvZN7gVfe9aw4wn svg{display:block;overflow:visible}.UAoYnNvZN7gVfe9aw4wn path{vector-effect:non-scaling-stroke}.UpV7QlPDxSbRGzDr5Axe{display:inline-block}",""]),i.locals={sparkline:"UAoYnNvZN7gVfe9aw4wn","sparkline--empty":"UpV7QlPDxSbRGzDr5Axe"};const c=i}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(b=>{"use strict";var p=function(o){return a(o)&&!_(o)};function a(s){return!!s&&typeof s=="object"}function _(s){var o=Object.prototype.toString.call(s);return o==="[object RegExp]"||o==="[object Date]"||t(s)}var e=typeof Symbol=="function"&&Symbol.for,f=e?Symbol.for("react.element"):60103;function t(s){return s.$$typeof===f}function i(s){return Array.isArray(s)?[]:{}}function c(s,o){return o.clone!==!1&&o.isMergeableObject(s)?S(i(s),s,o):s}function n(s,o,l){return s.concat(o).map(function(x){return c(x,l)})}function u(s,o){if(!o.customMerge)return S;var l=o.customMerge(s);return typeof l=="function"?l:S}function r(s){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(s).filter(function(o){return Object.propertyIsEnumerable.call(s,o)}):[]}function L(s){return Object.keys(s).concat(r(s))}function m(s,o){try{return o in s}catch{return!1}}function d(s,o){return m(s,o)&&!(Object.hasOwnProperty.call(s,o)&&Object.propertyIsEnumerable.call(s,o))}function y(s,o,l){var x={};return l.isMergeableObject(s)&&L(s).forEach(function(g){x[g]=c(s[g],l)}),L(o).forEach(function(g){d(s,g)||(m(s,g)&&l.isMergeableObject(o[g])?x[g]=u(g,l)(s[g],o[g],l):x[g]=c(o[g],l))}),x}function S(s,o,l){l=l||{},l.arrayMerge=l.arrayMerge||n,l.isMergeableObject=l.isMergeableObject||p,l.cloneUnlessOtherwiseSpecified=c;var x=Array.isArray(o),g=Array.isArray(s),K=x===g;return K?x?l.arrayMerge(s,o,l):y(s,o,l):c(o,l)}S.all=function(o,l){if(!Array.isArray(o))throw new Error("first argument should be an array");return o.reduce(function(x,g){return S(x,g,l)},{})};var O=S;b.exports=O}),"../charts/src/charts/sparkline/stories/index.docs.mdx":((b,p,a)=>{"use strict";a.r(p),a.d(p,{default:()=>n});var _=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),f=a("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),t=a("../../../node_modules/.pnpm/@storybook+addon-docs@10.1.10_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@te_0dab3ad5060a2aa8d937367f454f05ee/node_modules/@storybook/addon-docs/dist/blocks.js"),i=a("../charts/src/charts/sparkline/stories/index.stories.tsx");function c(u){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,f.R)(),...u.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.W8,{title:"JS Packages/Charts Library/Charts/Sparkline",of:i}),`
`,(0,e.jsx)(r.h1,{id:"sparkline",children:"Sparkline"}),`
`,(0,e.jsx)(r.p,{children:"A minimal, word-sized chart component designed for showing trends at a glance. Perfect for dashboard metrics and inline data visualization."}),`
`,(0,e.jsx)(t.Hl,{of:i.Default}),`
`,(0,e.jsx)(r.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsxs)(r.p,{children:["The Sparkline component is a preconfigured variant of ",(0,e.jsx)(r.a,{href:"?path=/docs/js-packages-charts-library-charts-line-chart--docs",children:"LineChart"})," optimized for compact, inline visualizations. It provides a simplified API for trend data while leveraging LineChart's rendering engine under the hood."]}),`
`,(0,e.jsx)(r.p,{children:(0,e.jsx)(r.strong,{children:"Key differences from LineChart:"})}),`
`,(0,e.jsxs)(r.ul,{children:[`
`,(0,e.jsxs)(r.li,{children:["Simplified ",(0,e.jsx)(r.code,{children:"number[]"})," data format (no dates required)"]}),`
`,(0,e.jsx)(r.li,{children:"No axes, grid, tooltips, or legend by default"}),`
`,(0,e.jsx)(r.li,{children:"Compact default dimensions (100x40px)"}),`
`,(0,e.jsx)(r.li,{children:"Smooth monotone curve interpolation"}),`
`]}),`
`,(0,e.jsxs)(r.p,{children:["For full control over axes, tooltips, and other features, use LineChart directly with ",(0,e.jsx)(r.code,{children:'gridVisibility="none"'})," and ",(0,e.jsx)(r.code,{children:"options={{ axis: { x: { display: false }, y: { display: false } } }}"}),"."]}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`import { Sparkline } from '@automattic/charts';
import '@automattic/charts/sparkline/style.css';

<Sparkline
	data={ [10, 15, 12, 18, 22, 25, 23, 28] }
	width={ 120 }
	height={ 48 }
	color="#4CAF50"
/>`}),`
`,(0,e.jsx)(r.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsxs)(r.p,{children:["For detailed information about component props and types, see the ",(0,e.jsx)(r.a,{href:"./?path=/docs/js-packages-charts-library-charts-sparkline-api-reference--docs",children:"Sparkline API Reference"}),"."]}),`
`,(0,e.jsx)(r.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(r.h3,{id:"simple-sparkline",children:"Simple Sparkline"}),`
`,(0,e.jsxs)(r.p,{children:["The simplest sparkline requires only a ",(0,e.jsx)(r.code,{children:"data"})," prop with an array of numeric values:"]}),`
`,(0,e.jsx)(t.Hl,{of:i.Default}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<Sparkline
	data={[10, 15, 12, 18, 22, 25, 23, 28]}
	width={120}
	height={48}
	color="#4CAF50"
/>`}),`
`,(0,e.jsx)(r.h3,{id:"required-props",children:"Required Props"}),`
`,(0,e.jsxs)(r.ul,{children:[`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:(0,e.jsx)(r.code,{children:"data"})}),": Array of numeric values to plot"]}),`
`]}),`
`,(0,e.jsx)(r.h3,{id:"optional-props",children:"Optional Props"}),`
`,(0,e.jsxs)(r.ul,{children:[`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:(0,e.jsx)(r.code,{children:"width"})})," (default: ",(0,e.jsx)(r.code,{children:"100"}),"): Width of the sparkline in pixels"]}),`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:(0,e.jsx)(r.code,{children:"height"})})," (default: ",(0,e.jsx)(r.code,{children:"40"}),"): Height of the sparkline in pixels"]}),`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:(0,e.jsx)(r.code,{children:"color"})}),": Color for the line stroke (defaults to theme color)"]}),`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:(0,e.jsx)(r.code,{children:"strokeWidth"})})," (default: ",(0,e.jsx)(r.code,{children:"1.5"}),"): Line stroke width in pixels"]}),`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:(0,e.jsx)(r.code,{children:"withGradientFill"})})," (default: ",(0,e.jsx)(r.code,{children:"true"}),"): Whether to render gradient fill beneath the line"]}),`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:(0,e.jsx)(r.code,{children:"gradient"})}),": Custom gradient configuration (from, to, fromOpacity, toOpacity)"]}),`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:(0,e.jsx)(r.code,{children:"className"})}),": Additional CSS class name"]}),`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:(0,e.jsx)(r.code,{children:"margin"})})," (default: ",(0,e.jsx)(r.code,{children:"{2,2,2,2}"}),"): Margin around the chart"]}),`
`]}),`
`,(0,e.jsxs)(r.p,{children:["For detailed prop information and type definitions, see the ",(0,e.jsx)(r.a,{href:"./?path=/docs/js-packages-charts-library-charts-sparkline-api-reference--docs",children:"Sparkline API Reference"}),"."]}),`
`,(0,e.jsx)(r.h2,{id:"using-linechart-directly",children:"Using LineChart Directly"}),`
`,(0,e.jsx)(r.p,{children:"For more control, you can use LineChart with minimal chrome. This is what Sparkline does internally:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`import { LineChart } from '@automattic/charts';

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
`,(0,e.jsx)(r.h2,{id:"visual-customization",children:"Visual Customization"}),`
`,(0,e.jsx)(r.h3,{id:"trend-colors",children:"Trend Colors"}),`
`,(0,e.jsx)(r.p,{children:"Use colors to indicate trend direction - green for positive, red for negative:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`// Positive trend
<Sparkline data={[10, 15, 18, 22, 28]} color="#4CAF50" />

// Negative trend
<Sparkline data={[28, 22, 18, 15, 10]} color="#F44336" />`}),`
`,(0,e.jsx)(r.h3,{id:"gradient-control",children:"Gradient Control"}),`
`,(0,e.jsx)(r.p,{children:"Disable the gradient for a cleaner line-only appearance, or customize it:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`// No gradient fill
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
`,(0,e.jsx)(r.h3,{id:"responsive-sparkline",children:"Responsive Sparkline"}),`
`,(0,e.jsxs)(r.p,{children:["The default ",(0,e.jsx)(r.code,{children:"Sparkline"})," export includes responsive behavior. Wrap in a container and use ",(0,e.jsx)(r.code,{children:"aspectRatio"}),":"]}),`
`,(0,e.jsx)(t.Hl,{of:i.Responsive}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<div style={{ width: '100%', maxWidth: '200px' }}>
	<Sparkline
		data={[10, 15, 12, 18, 22, 25]}
		color="#9C27B0"
		aspectRatio={0.3}
	/>
</div>`}),`
`,(0,e.jsx)(r.h2,{id:"dashboard-integration",children:"Dashboard Integration"}),`
`,(0,e.jsx)(r.h3,{id:"metric-cards",children:"Metric Cards"}),`
`,(0,e.jsx)(r.p,{children:"Sparklines work great alongside metrics in dashboard cards:"}),`
`,(0,e.jsx)(t.Hl,{of:i.Dashboard}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`const metrics = [
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
`,(0,e.jsx)(r.h2,{id:"theming-integration",children:"Theming Integration"}),`
`,(0,e.jsxs)(r.p,{children:["Sparklines integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided. A custom theme can be provided by wrapping your chart in ",(0,e.jsx)(r.code,{children:"GlobalChartsProvider"})," and passing a custom theme object with the properties you want to override to the ",(0,e.jsx)(r.code,{children:"theme"})," prop:"]}),`
`,(0,e.jsx)(t.kL,{language:"tsx",code:`import { GlobalChartsProvider, Sparkline, type ChartTheme } from '@automattic/charts';

const customTheme: ChartTheme = {
	colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'],
};

<GlobalChartsProvider theme={customTheme}>
	<Sparkline data={[10, 15, 12, 18]} />
</GlobalChartsProvider>`}),`
`,(0,e.jsx)(r.h2,{id:"animation",children:"Animation"}),`
`,(0,e.jsx)(r.p,{children:"The Sparkline component supports an optional entry animation that creates a smooth reveal effect when the chart first renders:"}),`
`,(0,e.jsx)(t.Hl,{of:i.Animation}),`
`,(0,e.jsx)(t.kL,{language:"tsx",code:`<Sparkline
	data={ [10, 15, 12, 18, 22, 25, 23, 28] }
	width={ 120 }
	height={ 48 }
	color="#4CAF50"
	animation={ true }
/>`}),`
`,(0,e.jsx)(r.h3,{id:"animation-behavior",children:"Animation Behavior"}),`
`,(0,e.jsxs)(r.ul,{children:[`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:"Opt-in"}),": Animation is disabled by default and must be explicitly enabled with the ",(0,e.jsx)(r.code,{children:"animation"})," prop"]}),`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:"Accessibility"}),": Automatically respects the user's ",(0,e.jsx)(r.code,{children:"prefers-reduced-motion"})," system setting - animation will not play for users who prefer reduced motion"]}),`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:"Effect"}),": Creates a rising effect where the line scales up from the bottom, revealing the data progressively"]}),`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:"Duration"}),": 1000ms (1 second) with ease-out timing"]}),`
`]}),`
`,(0,e.jsxs)(r.p,{children:[(0,e.jsx)(r.strong,{children:"Note"}),": The animation plays once when the chart initially renders and does not repeat."]}),`
`,(0,e.jsx)(r.h2,{id:"edge-cases",children:"Edge Cases"}),`
`,(0,e.jsx)(r.p,{children:"The component handles various edge cases gracefully:"}),`
`,(0,e.jsx)(r.h3,{id:"empty-data",children:"Empty Data"}),`
`,(0,e.jsxs)(r.p,{children:["When data is empty (",(0,e.jsx)(r.code,{children:"[]"}),"), renders an empty container with the ",(0,e.jsx)(r.code,{children:"sparkline--empty"})," class:"]}),`
`,(0,e.jsx)(t.Hl,{of:i.EmptyData}),`
`,(0,e.jsx)(r.h3,{id:"single-data-point",children:"Single Data Point"}),`
`,(0,e.jsx)(r.p,{children:"When data has only one point, renders a circle:"}),`
`,(0,e.jsx)(t.Hl,{of:i.SinglePoint}),`
`,(0,e.jsx)(r.h3,{id:"two-data-points",children:"Two Data Points"}),`
`,(0,e.jsx)(r.p,{children:"Renders a minimal line connecting two points:"}),`
`,(0,e.jsx)(t.Hl,{of:i.TwoPoints}),`
`,(0,e.jsx)(r.h3,{id:"negative-and-flat-values",children:"Negative and Flat Values"}),`
`,(0,e.jsx)(r.p,{children:"Negative values and flat lines (all same values) are fully supported - experiment with the Default story controls to see these in action."}),`
`,(0,e.jsx)(r.h3,{id:"customizing-empty-state",children:"Customizing Empty State"}),`
`,(0,e.jsxs)(r.p,{children:["The empty state can be styled using the ",(0,e.jsx)(r.code,{children:"sparkline--empty"})," class:"]}),`
`,(0,e.jsx)(t.kL,{language:"css",code:`.sparkline--empty {
	background: rgba(0, 0, 0, 0.02);
	border: 1px dashed rgba(0, 0, 0, 0.1);
	border-radius: 4px;
}`}),`
`,(0,e.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,(0,e.jsx)(r.p,{children:"Sparklines are decorative visualizations. For accessibility, ensure the parent container provides context:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<div role="img" aria-label="Momentum trending upward, current value 28">
	<span>Momentum</span>
	<span>28</span>
	<Sparkline data={data} aria-hidden="true" />
</div>`}),`
`,(0,e.jsx)(r.p,{children:(0,e.jsx)(r.strong,{children:"Best Practices:"})}),`
`,(0,e.jsxs)(r.ul,{children:[`
`,(0,e.jsxs)(r.li,{children:["Use ",(0,e.jsx)(r.code,{children:'role="img"'})," on the container"]}),`
`,(0,e.jsxs)(r.li,{children:["Provide ",(0,e.jsx)(r.code,{children:"aria-label"})," describing the trend and current value"]}),`
`,(0,e.jsxs)(r.li,{children:["Add ",(0,e.jsx)(r.code,{children:'aria-hidden="true"'})," to the sparkline itself"]}),`
`,(0,e.jsx)(r.li,{children:"Always show the actual metric value as text alongside the sparkline"}),`
`]}),`
`,(0,e.jsx)(r.h2,{id:"browser-compatibility",children:"Browser Compatibility"}),`
`,(0,e.jsx)(r.p,{children:"Sparkline charts are compatible with all modern browsers:"}),`
`,(0,e.jsxs)(r.ul,{children:[`
`,(0,e.jsx)(r.li,{children:"Chrome/Edge (latest)"}),`
`,(0,e.jsx)(r.li,{children:"Firefox (latest)"}),`
`,(0,e.jsx)(r.li,{children:"Safari (latest)"}),`
`,(0,e.jsx)(r.li,{children:"Mobile browsers (iOS Safari, Chrome Mobile)"}),`
`]}),`
`,(0,e.jsx)(r.h2,{id:"performance",children:"Performance"}),`
`,(0,e.jsx)(r.p,{children:"Sparklines are optimized for performance with:"}),`
`,(0,e.jsxs)(r.ul,{children:[`
`,(0,e.jsx)(r.li,{children:"Built on LineChart's optimized rendering engine"}),`
`,(0,e.jsxs)(r.li,{children:["Memoized data transformation from ",(0,e.jsx)(r.code,{children:"number[]"})," to series format"]}),`
`,(0,e.jsx)(r.li,{children:"No axes, grid, or tooltip overhead"}),`
`,(0,e.jsx)(r.li,{children:"Efficient gradient and theme integration"}),`
`]}),`
`,(0,e.jsx)(r.p,{children:(0,e.jsx)(r.strong,{children:"Performance Tips:"})}),`
`,(0,e.jsxs)(r.ul,{children:[`
`,(0,e.jsx)(r.li,{children:"Keep data arrays reasonably sized (under 100 points for sparklines)"}),`
`,(0,e.jsx)(r.li,{children:"Use the responsive variant only when needed"}),`
`,(0,e.jsx)(r.li,{children:"Reuse theme objects to prevent unnecessary recalculations"}),`
`]})]})}function n(u={}){const{wrapper:r}={...(0,f.R)(),...u.components};return r?(0,e.jsx)(r,{...u,children:(0,e.jsx)(c,{...u})}):c(u)}}),"../charts/src/charts/sparkline/stories/index.stories.tsx":((b,p,a)=>{"use strict";a.r(p),a.d(p,{Animation:()=>R,Dashboard:()=>k,Default:()=>A,EmptyData:()=>T,Responsive:()=>v,SinglePoint:()=>j,TwoPoints:()=>E,__namedExportsOrder:()=>G,default:()=>K});var _=a("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),e=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=a("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),t=a("../charts/src/charts/line-chart/line-chart.tsx"),i=a("../charts/src/charts/private/with-responsive/with-responsive.tsx"),c=a("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=a.n(c),u=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/sparkline/sparkline.module.scss"),r={};r.insert="head",r.singleton=!1;var L=n()(u.A,r);const m=u.A.locals||{};var d=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=100,S=40,O=(h,C,w)=>{const I=new Date(2e3,0,1);return[{label:"sparkline",data:h.map((P,M)=>({date:new Date(I.getTime()+M*864e5),value:P})),options:{stroke:C,seriesLineStyle:w?{strokeWidth:w}:void 0}}]},s=(0,e.forwardRef)(({data:h,width:C=y,height:w=S,color:I,strokeWidth:P,withGradientFill:M=!0,gradient:B,className:Y,chartId:q,margin:V,animation:Z},F)=>{const W=(0,f.p)(),X=W.sparkline?.strokeWidth??1.5,U=P??X,N=(0,e.useMemo)(()=>!h||h.length===0?[]:O(h,I,U),[h,I,U]),$=(0,e.useMemo)(()=>{const D=W.sparkline?.margin??{top:2,right:2,bottom:2,left:2};return{...D,...V??D}},[V,W.sparkline?.margin]),J=(0,e.useMemo)(()=>!B||N.length===0?N:N.map(D=>({...D,options:{...D.options,gradient:{from:B.from||I||"#000000",to:B.to||"#ffffff",fromOpacity:B.fromOpacity??.5,toOpacity:B.toOpacity??0}}})),[N,B,I]);if(!h||h.length===0)return(0,d.jsx)("div",{ref:F,className:(0,_.A)("sparkline",m.sparkline,m["sparkline--empty"],Y),style:{width:C,height:w},"data-testid":"sparkline-empty"});if(h.length===1){const D=C/2,H=w/2,Q=I||"#000000";return(0,d.jsx)("div",{ref:F,className:(0,_.A)("sparkline",m.sparkline,m["sparkline--single-point"],Y),style:{width:C,height:w},"data-testid":"sparkline-single-point",children:(0,d.jsx)("svg",{width:C,height:w,"aria-hidden":"true",children:(0,d.jsx)("circle",{cx:D,cy:H,r:U*1.5,fill:Q})})})}return(0,d.jsx)("div",{ref:F,className:(0,_.A)("sparkline",m.sparkline,Y),"data-testid":"sparkline",children:(0,d.jsx)(t.W,{data:J,width:C,height:w,margin:$,chartId:q,withGradientFill:M,withTooltips:!1,showLegend:!1,gridVisibility:"none",options:{axis:{x:{display:!1},y:{display:!1}}},curveType:"monotone",animation:Z})})});s.displayName="SparklineComponent";const o=s;o.displayName="SparklineUnresponsive";const l=(0,i.F)(o);try{ResponsiveChart.displayName="ResponsiveChart",ResponsiveChart.__docgenInfo={description:"",displayName:"ResponsiveChart",props:{size:{defaultValue:null,description:"Size (used by responsive variant, equivalent to width for square charts)",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:{value:"40"},description:"Height of the sparkline in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:{value:"100"},description:"Width of the sparkline in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:`Array of numeric values to plot
@example [10, 25, 15, 30, 22, 35]`,name:"data",required:!0,type:{name:"number[]"}},color:{defaultValue:{value:"Theme color (first color in theme.colors array)"},description:"Color for the line stroke (hex or CSS color)",name:"color",required:!1,type:{name:"string"}},strokeWidth:{defaultValue:{value:"1"},description:"Line stroke width in pixels",name:"strokeWidth",required:!1,type:{name:"number"}},margin:{defaultValue:{value:"{ top: 2, right: 2, bottom: 2, left: 2 }"},description:"Margin around the chart",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},chartId:{defaultValue:null,description:"Chart ID for unique gradient/element identification",name:"chartId",required:!1,type:{name:"string"}},withGradientFill:{defaultValue:{value:"true"},description:"Whether to render the gradient fill beneath the line",name:"withGradientFill",required:!1,type:{name:"boolean"}},gradient:{defaultValue:null,description:`Gradient configuration for area fill
If not provided, uses color prop with default opacity values`,name:"gradient",required:!1,type:{name:"GradientConfig"}},animation:{defaultValue:{value:"false"},description:`Enable entry animation on initial render
Creates a rising effect where the line scales up from the bottom.
Automatically respects user's prefers-reduced-motion system setting.`,name:"animation",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:{value:"1200"},description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:{value:"0.5"},description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:{value:"300"},description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/sparkline/sparkline.tsx#ResponsiveChart"]={docgenInfo:ResponsiveChart.__docgenInfo,name:"ResponsiveChart",path:"../charts/src/charts/sparkline/sparkline.tsx#ResponsiveChart"})}catch{}try{o.displayName="SparklineUnresponsive",o.__docgenInfo={description:`Sparkline - A minimal line chart for inline data visualization.

Sparklines are compact charts designed to be embedded inline with text or
displayed in small spaces like table cells or dashboards. They show trends
without axes, labels, or other chart chrome.

This component is built on top of LineChart with preconfigured settings
for minimal display (no axes, grid, tooltips, or legend).`,displayName:"SparklineUnresponsive",props:{data:{defaultValue:null,description:`Array of numeric values to plot
@example [10, 25, 15, 30, 22, 35]`,name:"data",required:!0,type:{name:"number[]"}},width:{defaultValue:{value:"100"},description:"Width of the sparkline in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"40"},description:"Height of the sparkline in pixels",name:"height",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"Size (used by responsive variant, equivalent to width for square charts)",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:{value:"Theme color (first color in theme.colors array)"},description:"Color for the line stroke (hex or CSS color)",name:"color",required:!1,type:{name:"string"}},strokeWidth:{defaultValue:{value:"1"},description:"Line stroke width in pixels",name:"strokeWidth",required:!1,type:{name:"number"}},withGradientFill:{defaultValue:{value:"true"},description:"Whether to render the gradient fill beneath the line",name:"withGradientFill",required:!1,type:{name:"boolean"}},gradient:{defaultValue:null,description:`Gradient configuration for area fill
If not provided, uses color prop with default opacity values`,name:"gradient",required:!1,type:{name:"GradientConfig"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},chartId:{defaultValue:null,description:"Chart ID for unique gradient/element identification",name:"chartId",required:!1,type:{name:"string"}},margin:{defaultValue:{value:"{ top: 2, right: 2, bottom: 2, left: 2 }"},description:"Margin around the chart",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},animation:{defaultValue:{value:"false"},description:`Enable entry animation on initial render
Creates a rising effect where the line scales up from the bottom.
Automatically respects user's prefers-reduced-motion system setting.`,name:"animation",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/sparkline/sparkline.tsx#SparklineUnresponsive"]={docgenInfo:o.__docgenInfo,name:"SparklineUnresponsive",path:"../charts/src/charts/sparkline/sparkline.tsx#SparklineUnresponsive"})}catch{}var x=a("../charts/src/stories/chart-decorator.tsx");const K={title:"JS Packages/Charts Library/Charts/Sparkline",component:l,parameters:{layout:"centered"},decorators:[x.OI],argTypes:{data:{control:"object",description:"Array of numeric values to plot",table:{category:"Data"}},width:{control:{type:"number",min:50,max:400},description:"Width of the sparkline in pixels",table:{category:"Dimensions"}},height:{control:{type:"number",min:20,max:200},description:"Height of the sparkline in pixels",table:{category:"Dimensions"}},color:{control:"color",description:"Color for the line stroke",table:{category:"Visual Style"}},strokeWidth:{control:{type:"number",min:1,max:5},description:"Line stroke width in pixels",table:{category:"Visual Style"}},withGradientFill:{control:"boolean",description:"Whether to render gradient fill beneath the line",table:{category:"Visual Style"}},gradient:{control:"object",description:"Gradient configuration",table:{category:"Visual Style"}},className:{control:"text",description:"Additional CSS class name",table:{category:"Styling"}},margin:{control:"object",description:"Margin around the chart",table:{category:"Dimensions"}},animation:{control:"boolean",description:"Enable entry animation on initial render",table:{category:"Visual Style"}}}},z=[10,15,12,18,22,25,23,28],A={args:{data:z,width:120,height:48,color:"#4CAF50"}},T={args:{data:[],width:120,height:48}},j={args:{data:[42],color:"#9C27B0",width:120,height:48}},E={args:{data:[10,20],color:"#3F51B5",width:120,height:48}},v={render:()=>(0,d.jsx)("div",{style:{width:"200px",resize:"horizontal",overflow:"auto",padding:"8px",border:"1px dashed #ccc",minWidth:"80px",maxWidth:"400px"},children:(0,d.jsx)(l,{data:[10,15,12,18,22,25],color:"#9C27B0",aspectRatio:.3})})},k={render:()=>{const h=[{label:"Speeding up",value:28,data:[10,15,12,18,22,25,23,28],color:"#4CAF50"},{label:"Efficient",value:90,data:[80,82,85,83,87,90,88,92],color:"#2196F3"},{label:"Unstable",value:65,data:[50,75,45,80,40,85,55,65],color:"#FF9800"}];return(0,d.jsx)("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:h.map(C=>(0,d.jsxs)("div",{style:{padding:"16px",border:"1px solid #e0e0e0",borderRadius:"8px",minWidth:"200px"},children:[(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[(0,d.jsx)("span",{style:{fontSize:"14px",color:"#666"},children:C.label}),(0,d.jsx)("span",{style:{fontSize:"18px",fontWeight:"bold"},children:C.value})]}),(0,d.jsx)(l,{data:C.data,width:180,height:48,color:C.color})]},C.label))})}},R={args:{data:z,width:120,height:48,color:"#4CAF50",animation:!0}},G=["Default","EmptyData","SinglePoint","TwoPoints","Responsive","Dashboard","Animation"];A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    width: 120,
    height: 48,
    color: '#4CAF50'
  }
}`,...A.parameters?.docs?.source},description:{story:`Basic sparkline with all controls available for customization.
Use the controls panel to experiment with colors, gradients, dimensions, and data.`,...A.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    width: 120,
    height: 48
  }
}`,...T.parameters?.docs?.source},description:{story:"Empty data renders an empty container gracefully.",...T.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    data: [42],
    color: '#9C27B0',
    width: 120,
    height: 48
  }
}`,...j.parameters?.docs?.source},description:{story:"Single data point renders as a circle instead of a line.",...j.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    data: [10, 20],
    color: '#3F51B5',
    width: 120,
    height: 48
  }
}`,...E.parameters?.docs?.source},description:{story:"Two data points render as a minimal line segment.",...E.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '200px',
    resize: 'horizontal',
    overflow: 'auto',
    padding: '8px',
    border: '1px dashed #ccc',
    minWidth: '80px',
    maxWidth: '400px'
  }}>
            <Sparkline data={[10, 15, 12, 18, 22, 25]} color="#9C27B0" aspectRatio={0.3} />
        </div>
}`,...v.parameters?.docs?.source},description:{story:`Responsive sparkline that adjusts to container width using aspectRatio.
Drag the corner of the container to resize and see the sparkline adapt.`,...v.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const metrics = [{
      label: 'Speeding up',
      value: 28,
      data: [10, 15, 12, 18, 22, 25, 23, 28],
      color: '#4CAF50'
    }, {
      label: 'Efficient',
      value: 90,
      data: [80, 82, 85, 83, 87, 90, 88, 92],
      color: '#2196F3'
    }, {
      label: 'Unstable',
      value: 65,
      data: [50, 75, 45, 80, 40, 85, 55, 65],
      color: '#FF9800'
    }];
    return <div style={{
      display: 'flex',
      gap: '24px',
      flexWrap: 'wrap'
    }}>
                {metrics.map(metric => <div key={metric.label} style={{
        padding: '16px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        minWidth: '200px'
      }}>
                        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px'
        }}>
                            <span style={{
            fontSize: '14px',
            color: '#666'
          }}>{metric.label}</span>
                            <span style={{
            fontSize: '18px',
            fontWeight: 'bold'
          }}>{metric.value}</span>
                        </div>
                        <Sparkline data={metric.data} width={180} height={48} color={metric.color} />
                    </div>)}
            </div>;
  }
}`,...k.parameters?.docs?.source},description:{story:"Dashboard example showing sparklines in metric cards - a common real-world use case.",...k.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    width: 120,
    height: 48,
    color: '#4CAF50',
    animation: true
  }
}`,...R.parameters?.docs?.source},description:{story:`Sparkline with entry animation that creates a smooth rising effect.
The animation respects the user's prefers-reduced-motion setting for accessibility.`,...R.parameters?.docs?.description}}};try{A.displayName="Default",A.__docgenInfo={description:`Basic sparkline with all controls available for customization.
Use the controls panel to experiment with colors, gradients, dimensions, and data.`,displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/sparkline/stories/index.stories.tsx#Default"]={docgenInfo:A.__docgenInfo,name:"Default",path:"../charts/src/charts/sparkline/stories/index.stories.tsx#Default"})}catch{}try{T.displayName="EmptyData",T.__docgenInfo={description:"Empty data renders an empty container gracefully.",displayName:"EmptyData",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/sparkline/stories/index.stories.tsx#EmptyData"]={docgenInfo:T.__docgenInfo,name:"EmptyData",path:"../charts/src/charts/sparkline/stories/index.stories.tsx#EmptyData"})}catch{}try{j.displayName="SinglePoint",j.__docgenInfo={description:"Single data point renders as a circle instead of a line.",displayName:"SinglePoint",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/sparkline/stories/index.stories.tsx#SinglePoint"]={docgenInfo:j.__docgenInfo,name:"SinglePoint",path:"../charts/src/charts/sparkline/stories/index.stories.tsx#SinglePoint"})}catch{}try{E.displayName="TwoPoints",E.__docgenInfo={description:"Two data points render as a minimal line segment.",displayName:"TwoPoints",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/sparkline/stories/index.stories.tsx#TwoPoints"]={docgenInfo:E.__docgenInfo,name:"TwoPoints",path:"../charts/src/charts/sparkline/stories/index.stories.tsx#TwoPoints"})}catch{}try{v.displayName="Responsive",v.__docgenInfo={description:`Responsive sparkline that adjusts to container width using aspectRatio.
Drag the corner of the container to resize and see the sparkline adapt.`,displayName:"Responsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/sparkline/stories/index.stories.tsx#Responsive"]={docgenInfo:v.__docgenInfo,name:"Responsive",path:"../charts/src/charts/sparkline/stories/index.stories.tsx#Responsive"})}catch{}try{k.displayName="Dashboard",k.__docgenInfo={description:"Dashboard example showing sparklines in metric cards - a common real-world use case.",displayName:"Dashboard",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/sparkline/stories/index.stories.tsx#Dashboard"]={docgenInfo:k.__docgenInfo,name:"Dashboard",path:"../charts/src/charts/sparkline/stories/index.stories.tsx#Dashboard"})}catch{}try{R.displayName="Animation",R.__docgenInfo={description:`Sparkline with entry animation that creates a smooth rising effect.
The animation respects the user's prefers-reduced-motion setting for accessibility.`,displayName:"Animation",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/sparkline/stories/index.stories.tsx#Animation"]={docgenInfo:R.__docgenInfo,name:"Animation",path:"../charts/src/charts/sparkline/stories/index.stories.tsx#Animation"})}catch{}}),"../charts/src/stories/chart-decorator.tsx":((b,p,a)=>{"use strict";a.d(p,{OI:()=>c,cg:()=>r,xo:()=>L});var _=a("../number-formatters/src/index.ts"),e=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=a("../charts/src/providers/chart-context/global-charts-provider.tsx"),t=a("../charts/src/stories/theme-config.tsx"),i=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=(m,d)=>{const y=d.args,S=y.withPadding!==!1;return r(()=>(0,i.jsx)("div",{style:{resize:y.resize||"both",overflow:"auto",padding:S?"1rem":void 0,width:y.containerWidth||"800px",height:y.containerHeight,maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,i.jsx)(m,{})}),d)},n=m=>/^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(m),u=({children:m,themeName:d="default",accentColor:y=t.Zs})=>{(0,e.useEffect)(()=>{typeof window<"u"&&window.navigator?.language&&(0,_.xS)(window.navigator.language)},[]);const S=t.yI[d],O=n(y)?y:t.Zs,s=d==="custom"?`custom-${O}`:d;return(0,i.jsxs)(i.Fragment,{children:[d==="custom"&&(0,i.jsx)("style",{children:`
						:root {
							--wpds-color-bg-interactive-brand: ${O};
						}
					`}),(0,i.jsx)(f.S,{theme:S,children:m},s)]})},r=(m,{args:d})=>{const y=d,S=y.themeName,O=y.accentColor;return(0,i.jsx)(u,{themeName:S,accentColor:O,children:(0,i.jsx)(m,{})})},L={maxWidth:{control:{type:"number",min:100,max:1200},description:"Maximum width of the chart in pixels (responsive mode)",table:{category:"Dimensions"}},aspectRatio:{control:{type:"number",min:0,max:1},description:"Height as a ratio of width (0-1, responsive mode)",table:{category:"Dimensions"}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4},description:"Debounce time in ms for resize events (performance)",table:{category:"Performance"}},containerWidth:{control:{type:"text"},description:'CSS width value for the chart container (e.g., "400px", "100%")'},containerHeight:{control:{type:"text"},description:'CSS height value for the chart container (e.g., "400px", "100%")'},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"],description:"Resize behavior for the chart container"}};try{c.displayName="chartDecorator",c.__docgenInfo={description:`Shared decorator for chart stories with GlobalChartsProvider and dynamic theme support
Provides a resizable container for testing responsive behavior
Composes with simpleChartDecorator to add container styling
Supports configurable container dimensions via containerWidth/containerHeight args`,displayName:"chartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#chartDecorator"]={docgenInfo:c.__docgenInfo,name:"chartDecorator",path:"../charts/src/stories/chart-decorator.tsx#chartDecorator"})}catch{}try{r.displayName="simpleChartDecorator",r.__docgenInfo={description:`Simple decorator for chart context stories with GlobalChartsProvider but no container styling
Used for stories that display multiple charts in custom layouts
Ensures number formatters use browser locale in Storybook environment`,displayName:"simpleChartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"]={docgenInfo:r.__docgenInfo,name:"simpleChartDecorator",path:"../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"})}catch{}try{L.displayName="sharedChartArgTypes",L.__docgenInfo={description:"Shared argTypes for common chart controls (dimensions, container settings)",displayName:"sharedChartArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"]={docgenInfo:L.__docgenInfo,name:"sharedChartArgTypes",path:"../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"})}catch{}}),"../charts/src/stories/theme-config.tsx":((b,p,a)=>{"use strict";a.d(p,{In:()=>c,Zs:()=>e,jW:()=>i,yI:()=>t});var _=a("../charts/src/providers/chart-context/themes.ts");const e="#4a19ab",f={colors:["var(--wpds-color-bg-interactive-brand)"],seriesLineStyles:[{},{strokeDasharray:"5 8"}],geoChart:{featureFillColor:"#ffffff"},gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},t={default:_.z,custom:f},i={themeName:{control:{type:"select"},options:Object.keys(t),defaultValue:"default",description:"Select a theme to apply to the chart",table:{category:"Theme"}},accentColor:{control:{type:"color"},description:"Accent color for the custom theme (used for primary chart elements)",defaultValue:e,table:{category:"Theme"},if:{arg:"themeName",eq:"custom"}}},c={themeName:"default",accentColor:e};try{e.displayName="DEFAULT_ACCENT_COLOR",e.__docgenInfo={description:"Default accent color for custom theme in Storybook",displayName:"DEFAULT_ACCENT_COLOR",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#DEFAULT_ACCENT_COLOR"]={docgenInfo:e.__docgenInfo,name:"DEFAULT_ACCENT_COLOR",path:"../charts/src/stories/theme-config.tsx#DEFAULT_ACCENT_COLOR"})}catch{}try{f.displayName="customTheme",f.__docgenInfo={description:"Custom theme using a CSS variable for dynamic color generation",displayName:"customTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#customTheme"]={docgenInfo:f.__docgenInfo,name:"customTheme",path:"../charts/src/stories/theme-config.tsx#customTheme"})}catch{}try{backgroundColor.displayName="backgroundColor",backgroundColor.__docgenInfo={description:"Background color for chart components",displayName:"backgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#backgroundColor"]={docgenInfo:backgroundColor.__docgenInfo,name:"backgroundColor",path:"../charts/src/stories/theme-config.tsx#backgroundColor"})}catch{}try{labelBackgroundColor.displayName="labelBackgroundColor",labelBackgroundColor.__docgenInfo={description:"Background color for labels",displayName:"labelBackgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelBackgroundColor"]={docgenInfo:labelBackgroundColor.__docgenInfo,name:"labelBackgroundColor",path:"../charts/src/stories/theme-config.tsx#labelBackgroundColor"})}catch{}try{labelTextColor.displayName="labelTextColor",labelTextColor.__docgenInfo={description:"Text color for labels",displayName:"labelTextColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelTextColor"]={docgenInfo:labelTextColor.__docgenInfo,name:"labelTextColor",path:"../charts/src/stories/theme-config.tsx#labelTextColor"})}catch{}try{colors.displayName="colors",colors.__docgenInfo={description:"Array of colors used for data visualization",displayName:"colors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#colors"]={docgenInfo:colors.__docgenInfo,name:"colors",path:"../charts/src/stories/theme-config.tsx#colors"})}catch{}try{gridStyles.displayName="gridStyles",gridStyles.__docgenInfo={description:"Optional CSS styles for grid lines",displayName:"gridStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridStyles"]={docgenInfo:gridStyles.__docgenInfo,name:"gridStyles",path:"../charts/src/stories/theme-config.tsx#gridStyles"})}catch{}try{tickLength.displayName="tickLength",tickLength.__docgenInfo={description:"Length of axis ticks in pixels",displayName:"tickLength",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#tickLength"]={docgenInfo:tickLength.__docgenInfo,name:"tickLength",path:"../charts/src/stories/theme-config.tsx#tickLength"})}catch{}try{gridColor.displayName="gridColor",gridColor.__docgenInfo={description:"Color of the grid lines",displayName:"gridColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColor"]={docgenInfo:gridColor.__docgenInfo,name:"gridColor",path:"../charts/src/stories/theme-config.tsx#gridColor"})}catch{}try{gridColorDark.displayName="gridColorDark",gridColorDark.__docgenInfo={description:"Color of the grid lines in dark mode",displayName:"gridColorDark",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColorDark"]={docgenInfo:gridColorDark.__docgenInfo,name:"gridColorDark",path:"../charts/src/stories/theme-config.tsx#gridColorDark"})}catch{}try{xTickLineStyles.displayName="xTickLineStyles",xTickLineStyles.__docgenInfo={description:"Styles for x-axis tick lines",displayName:"xTickLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xTickLineStyles"]={docgenInfo:xTickLineStyles.__docgenInfo,name:"xTickLineStyles",path:"../charts/src/stories/theme-config.tsx#xTickLineStyles"})}catch{}try{xAxisLineStyles.displayName="xAxisLineStyles",xAxisLineStyles.__docgenInfo={description:"Styles for x-axis line",displayName:"xAxisLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xAxisLineStyles"]={docgenInfo:xAxisLineStyles.__docgenInfo,name:"xAxisLineStyles",path:"../charts/src/stories/theme-config.tsx#xAxisLineStyles"})}catch{}try{seriesLineStyles.displayName="seriesLineStyles",seriesLineStyles.__docgenInfo={description:"Styles for series lines",displayName:"seriesLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#seriesLineStyles"]={docgenInfo:seriesLineStyles.__docgenInfo,name:"seriesLineStyles",path:"../charts/src/stories/theme-config.tsx#seriesLineStyles"})}catch{}try{legendShapeStyles.displayName="legendShapeStyles",legendShapeStyles.__docgenInfo={description:"Styles for legend shapes",displayName:"legendShapeStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendShapeStyles"]={docgenInfo:legendShapeStyles.__docgenInfo,name:"legendShapeStyles",path:"../charts/src/stories/theme-config.tsx#legendShapeStyles"})}catch{}try{glyphs.displayName="glyphs",glyphs.__docgenInfo={description:"Array of render functions for glyphs",displayName:"glyphs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#glyphs"]={docgenInfo:glyphs.__docgenInfo,name:"glyphs",path:"../charts/src/stories/theme-config.tsx#glyphs"})}catch{}try{legendLabelStyles.displayName="legendLabelStyles",legendLabelStyles.__docgenInfo={description:"Styles for legend labels",displayName:"legendLabelStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendLabelStyles"]={docgenInfo:legendLabelStyles.__docgenInfo,name:"legendLabelStyles",path:"../charts/src/stories/theme-config.tsx#legendLabelStyles"})}catch{}try{legendContainerStyles.displayName="legendContainerStyles",legendContainerStyles.__docgenInfo={description:"Styles for legend container",displayName:"legendContainerStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendContainerStyles"]={docgenInfo:legendContainerStyles.__docgenInfo,name:"legendContainerStyles",path:"../charts/src/stories/theme-config.tsx#legendContainerStyles"})}catch{}try{svgLabelSmall.displayName="svgLabelSmall",svgLabelSmall.__docgenInfo={description:"Styles for small SVG text (eg. axis tick labels), passed through to the XYChart theme.",displayName:"svgLabelSmall",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#svgLabelSmall"]={docgenInfo:svgLabelSmall.__docgenInfo,name:"svgLabelSmall",path:"../charts/src/stories/theme-config.tsx#svgLabelSmall"})}catch{}try{geoChart.displayName="geoChart",geoChart.__docgenInfo={description:"GeoChart specific settings",displayName:"geoChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#geoChart"]={docgenInfo:geoChart.__docgenInfo,name:"geoChart",path:"../charts/src/stories/theme-config.tsx#geoChart"})}catch{}try{leaderboardChart.displayName="leaderboardChart",leaderboardChart.__docgenInfo={description:"LeaderboardChart specific settings",displayName:"leaderboardChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#leaderboardChart"]={docgenInfo:leaderboardChart.__docgenInfo,name:"leaderboardChart",path:"../charts/src/stories/theme-config.tsx#leaderboardChart"})}catch{}try{conversionFunnelChart.displayName="conversionFunnelChart",conversionFunnelChart.__docgenInfo={description:"ConversionFunnelChart specific settings",displayName:"conversionFunnelChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#conversionFunnelChart"]={docgenInfo:conversionFunnelChart.__docgenInfo,name:"conversionFunnelChart",path:"../charts/src/stories/theme-config.tsx#conversionFunnelChart"})}catch{}try{sparkline.displayName="sparkline",sparkline.__docgenInfo={description:"Sparkline specific settings",displayName:"sparkline",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#sparkline"]={docgenInfo:sparkline.__docgenInfo,name:"sparkline",path:"../charts/src/stories/theme-config.tsx#sparkline"})}catch{}try{t.displayName="CHART_THEME_MAP",t.__docgenInfo={description:"Centralized theme map for all chart stories",displayName:"CHART_THEME_MAP",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"]={docgenInfo:t.__docgenInfo,name:"CHART_THEME_MAP",path:"../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"})}catch{}try{i.displayName="themeArgTypes",i.__docgenInfo={description:"Shared argTypes for theme control",displayName:"themeArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#themeArgTypes"]={docgenInfo:i.__docgenInfo,name:"themeArgTypes",path:"../charts/src/stories/theme-config.tsx#themeArgTypes"})}catch{}try{c.displayName="sharedThemeArgs",c.__docgenInfo={description:`Shared default args for theme-related controls in chart stories
These provide actual default values that appear in Storybook controls`,displayName:"sharedThemeArgs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#sharedThemeArgs"]={docgenInfo:c.__docgenInfo,name:"sharedThemeArgs",path:"../charts/src/stories/theme-config.tsx#sharedThemeArgs"})}catch{}})}]);
