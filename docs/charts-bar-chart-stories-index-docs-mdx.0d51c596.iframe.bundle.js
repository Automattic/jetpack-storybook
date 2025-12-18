(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1954,7460],{"../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@tes_8b6d8444bcdd16ef895876f31adb8bdf/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive":(b=>{function h(l){var g=new Error("Cannot find module '"+l+"'");throw g.code="MODULE_NOT_FOUND",g}h.keys=()=>[],h.resolve=h,h.id="../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@tes_8b6d8444bcdd16ef895876f31adb8bdf/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive",b.exports=h}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((b,h,l)=>{"use strict";l.d(h,{A:()=>m});function g(i){var a,r,d="";if(typeof i=="string"||typeof i=="number")d+=i;else if(typeof i=="object")if(Array.isArray(i)){var u=i.length;for(a=0;a<u;a++)i[a]&&(r=g(i[a]))&&(d&&(d+=" "),d+=r)}else for(r in i)i[r]&&(d&&(d+=" "),d+=r);return d}function e(){for(var i,a,r=0,d="",u=arguments.length;r<u;r++)(i=arguments[r])&&(a=g(i))&&(d&&(d+=" "),d+=a);return d}const m=e}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(b=>{"use strict";var h=function(s){return l(s)&&!g(s)};function l(n){return!!n&&typeof n=="object"}function g(n){var s=Object.prototype.toString.call(n);return s==="[object RegExp]"||s==="[object Date]"||i(n)}var e=typeof Symbol=="function"&&Symbol.for,m=e?Symbol.for("react.element"):60103;function i(n){return n.$$typeof===m}function a(n){return Array.isArray(n)?[]:{}}function r(n,s){return s.clone!==!1&&s.isMergeableObject(n)?j(a(n),n,s):n}function d(n,s,o){return n.concat(s).map(function(x){return r(x,o)})}function u(n,s){if(!s.customMerge)return j;var o=s.customMerge(n);return typeof o=="function"?o:j}function t(n){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(n).filter(function(s){return Object.propertyIsEnumerable.call(n,s)}):[]}function f(n){return Object.keys(n).concat(t(n))}function v(n,s){try{return s in n}catch{return!1}}function w(n,s){return v(n,s)&&!(Object.hasOwnProperty.call(n,s)&&Object.propertyIsEnumerable.call(n,s))}function C(n,s,o){var x={};return o.isMergeableObject(n)&&f(n).forEach(function(c){x[c]=r(n[c],o)}),f(s).forEach(function(c){w(n,c)||(v(n,c)&&o.isMergeableObject(s[c])?x[c]=u(c,o)(n[c],s[c],o):x[c]=r(s[c],o))}),x}function j(n,s,o){o=o||{},o.arrayMerge=o.arrayMerge||d,o.isMergeableObject=o.isMergeableObject||h,o.cloneUnlessOtherwiseSpecified=r;var x=Array.isArray(s),c=Array.isArray(n),S=x===c;return S?x?o.arrayMerge(n,s,o):C(n,s,o):r(s,o)}j.all=function(s,o){if(!Array.isArray(s))throw new Error("first argument should be an array");return s.reduce(function(x,c){return j(x,c,o)},{})};var E=j;b.exports=E}),"../charts/src/charts/bar-chart/stories/index.docs.mdx":((b,h,l)=>{"use strict";l.r(h),l.d(h,{default:()=>d});var g=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=l("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),i=l("../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@tes_8b6d8444bcdd16ef895876f31adb8bdf/node_modules/@storybook/addon-docs/dist/blocks.js"),a=l("../charts/src/charts/bar-chart/stories/index.stories.tsx");function r(u){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,m.R)(),...u.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.W8,{title:"JS Packages/Charts Library/Charts/Bar Chart",of:a}),`
`,(0,e.jsx)(t.h1,{id:"bar-chart",children:"Bar Chart"}),`
`,(0,e.jsx)(t.p,{children:"Bar Charts visualize categorical data using rectangular bars with heights or lengths proportional to the values they represent. They excel at comparing values across categories, showing distributions, and highlighting differences in data sets."}),`
`,(0,e.jsx)(i.Hl,{of:a.Default}),`
`,(0,e.jsx)(t.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsxs)(t.p,{children:["The Bar Chart component provides a flexible, accessible, and highly customizable solution for displaying categorical data. Built on ",(0,e.jsx)(t.code,{children:"@visx/xychart"}),", it supports multiple data series, both vertical and horizontal orientations, interactive tooltips, legends, and advanced visual features like pattern fills:"]}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`import { BarChart } from '@automattic/charts';

<BarChart
	data={ data }
	orientation="vertical"
	withTooltips={ true }
	showLegend={ true }
/>`}),`
`,(0,e.jsx)(t.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsxs)(t.p,{children:["For detailed information about component props, types, and method signatures, see the ",(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-library-charts-bar-chart-api-reference--docs",children:"Bar Chart API Reference"}),"."]}),`
`,(0,e.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(t.h3,{id:"simple-bar-chart",children:"Simple Bar Chart"}),`
`,(0,e.jsxs)(t.p,{children:["The simplest bar chart requires only a ",(0,e.jsx)(t.code,{children:"data"})," prop with categorical data:"]}),`
`,(0,e.jsx)(i.Hl,{of:a.SingleSeries}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={[
		{
			label: 'Olympic Medals',
			data: [
				{ label: '2016', value: 121 },
				{ label: '2020', value: 113 },
				{ label: '2024', value: 126 },
			],
			options: {}
		}
	]}
/>`}),`
`,(0,e.jsx)(t.h3,{id:"required-props",children:"Required Props"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"data"})}),": Array of series data, each containing ",(0,e.jsx)(t.code,{children:"label"}),", ",(0,e.jsx)(t.code,{children:"data"})," array, and optional ",(0,e.jsx)(t.code,{children:"options"})]}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"optional-props",children:"Optional Props"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"width"})}),": Chart width in pixels (responsive by default)"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"height"})}),": Chart height in pixels (responsive by default, defaults to 400)"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"orientation"})}),": Bar orientation (",(0,e.jsx)(t.code,{children:"'vertical'"})," or ",(0,e.jsx)(t.code,{children:"'horizontal'"}),", defaults to ",(0,e.jsx)(t.code,{children:"'vertical'"}),")"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"withTooltips"})}),": Enable interactive tooltips (",(0,e.jsx)(t.code,{children:"false"})," by default)"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"withPatterns"})}),": Use pattern fills instead of solid colors (",(0,e.jsx)(t.code,{children:"false"})," by default)"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"showLegend"})}),": Display chart legend (",(0,e.jsx)(t.code,{children:"false"})," by default)"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"legendInteractive"})}),": Enable interactive legend with series toggle (",(0,e.jsx)(t.code,{children:"false"})," by default, requires ",(0,e.jsx)(t.code,{children:"chartId"}),")"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"gridVisibility"})}),": Grid line visibility (",(0,e.jsx)(t.code,{children:"'x'"}),", ",(0,e.jsx)(t.code,{children:"'y'"}),", ",(0,e.jsx)(t.code,{children:"'xy'"}),", or ",(0,e.jsx)(t.code,{children:"'none'"}),")"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"margin"})}),": Custom chart margins"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"options"})}),": Advanced axis and scale configuration"]}),`
`]}),`
`,(0,e.jsx)(t.h2,{id:"chart-orientations",children:"Chart Orientations"}),`
`,(0,e.jsx)(t.h3,{id:"vertical-bars-default",children:"Vertical Bars (Default)"}),`
`,(0,e.jsx)(t.p,{children:"Standard vertical bar charts with categories on the x-axis and values on the y-axis:"}),`
`,(0,e.jsx)(i.Hl,{of:a.Default}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={data}
	orientation="vertical"
	gridVisibility="x"
/>`}),`
`,(0,e.jsx)(t.h3,{id:"horizontal-bars",children:"Horizontal Bars"}),`
`,(0,e.jsx)(t.p,{children:"Horizontal bar charts with categories on the y-axis and values on the x-axis, ideal for long category names:"}),`
`,(0,e.jsx)(i.Hl,{of:a.HorizontalBarChart}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={data}
	orientation="horizontal"
	gridVisibility="y"
/>`}),`
`,(0,e.jsx)(t.h2,{id:"multiple-series",children:"Multiple Series"}),`
`,(0,e.jsx)(t.h3,{id:"multi-series-charts",children:"Multi-Series Charts"}),`
`,(0,e.jsx)(t.p,{children:"Display multiple data series with automatic color differentiation and grouped bars:"}),`
`,(0,e.jsx)(i.Hl,{of:a.Default}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={[
		{
			label: 'United States',
			data: olympicData.usa,
			options: {}
		},
		{
			label: 'Great Britain',
			data: olympicData.gb,
			options: {}
		},
		{
			label: 'Germany',
			data: olympicData.germany,
			options: {}
		}
	]}
/>`}),`
`,(0,e.jsx)(t.h3,{id:"many-data-series",children:"Many Data Series"}),`
`,(0,e.jsx)(t.p,{children:"The component handles large numbers of series gracefully with automatic color cycling:"}),`
`,(0,e.jsx)(i.Hl,{of:a.ManyDataSeries}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={allCountriesData}
	withTooltips={true}
	showLegend={true}
/>`}),`
`,(0,e.jsx)(t.h2,{id:"visual-features",children:"Visual Features"}),`
`,(0,e.jsx)(t.h3,{id:"pattern-fills",children:"Pattern Fills"}),`
`,(0,e.jsx)(t.p,{children:"Add visual accessibility and distinction with pattern fills instead of solid colors:"}),`
`,(0,e.jsx)(i.Hl,{of:a.WithPatterns}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={data}
	withPatterns={true}
	withTooltips={true}
/>`}),`
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"Pattern types automatically cycle through:"})}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Lines"}),": Diagonal line patterns"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Circles"}),": Circular dot patterns"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Waves"}),": Wave line patterns"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Hexagons"}),": Hexagonal patterns"]}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"smart-formatting",children:"Smart Formatting"}),`
`,(0,e.jsx)(t.p,{children:"Automatic formatting handles large numbers with appropriate abbreviations:"}),`
`,(0,e.jsx)(i.Hl,{of:a.SmartFormatting}),`
`,(0,e.jsx)(t.p,{children:"Values are automatically formatted as:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"1B and above"}),': "1.23B"']}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"1M and above"}),': "1.2M"']}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"1K and above"}),': "1k"']}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Below 1K"}),': "1,234"']}),`
`]}),`
`,(0,e.jsx)(t.h2,{id:"data-formats",children:"Data Formats"}),`
`,(0,e.jsx)(t.h3,{id:"time-series-data",children:"Time Series Data"}),`
`,(0,e.jsx)(t.p,{children:"Bar charts support both categorical labels and time-series data:"}),`
`,(0,e.jsx)(i.Hl,{of:a.TimeSeries}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`// Date objects
{ date: new Date('2024-01-01'), value: 2230 }

// Date strings (automatically parsed)
{ dateString: '2024-01-01', value: 2580 }
{ dateString: '2024-01-01 14:30:00', value: 3500 }

// Category labels
{ label: '2024', value: 126 }`}),`
`,(0,e.jsx)(t.h3,{id:"custom-axis-formatting",children:"Custom Axis Formatting"}),`
`,(0,e.jsx)(t.p,{children:"Configure custom formatting for time-series or numerical axes:"}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={timeSeriesData}
	options={{
		axis: {
			x: {
				tickFormat: (timestamp) => {
					const date = new Date(timestamp);
					return date.toLocaleDateString('en-US', { dateStyle: 'short' });
				},
			},
		},
	}}
/>`}),`
`,(0,e.jsx)(t.h2,{id:"interactive-features",children:"Interactive Features"}),`
`,(0,e.jsx)(t.h3,{id:"tooltips",children:"Tooltips"}),`
`,(0,e.jsx)(t.p,{children:"Enable rich interactive tooltips that display detailed information on hover:"}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={data}
	withTooltips={true}
	renderTooltip={({ tooltipData }) => {
		const nearestDatum = tooltipData?.nearestDatum?.datum;
		return (
			<div>
				<div>{tooltipData?.nearestDatum?.key}</div>
				<div>{nearestDatum?.label}: {nearestDatum?.value}</div>
			</div>
		);
	}}
/>`}),`
`,(0,e.jsx)(t.h3,{id:"keyboard-navigation",children:"Keyboard Navigation"}),`
`,(0,e.jsx)(t.p,{children:"Charts are fully keyboard accessible:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Tab"}),": Focus the chart"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Arrow Keys"}),": Navigate between bars"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Enter/Space"}),": Activate tooltips"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Escape"}),": Close active tooltips"]}),`
`]}),`
`,(0,e.jsx)(t.h2,{id:"zero-value-display",children:"Zero Value Display"}),`
`,(0,e.jsx)(t.h3,{id:"visual-enhancement-for-zero-values",children:"Visual Enhancement for Zero Values"}),`
`,(0,e.jsxs)(t.p,{children:["By default, bars with zero values have no visual height, making them difficult to identify. The ",(0,e.jsx)(t.code,{children:"showZeroValues"})," feature provides better user experience by giving zero values a minimum visual height while preserving data integrity:"]}),`
`,(0,e.jsx)(i.Hl,{of:a.ZeroValueComparison}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={dataWithZeros}
	showZeroValues={true}
	withTooltips={true}
/>`}),`
`,(0,e.jsx)(t.h2,{id:"legends",children:"Legends"}),`
`,(0,e.jsx)(t.h3,{id:"basic-legend",children:"Basic Legend"}),`
`,(0,e.jsx)(t.p,{children:"Display series information with automatic color and pattern matching:"}),`
`,(0,e.jsx)(i.Hl,{of:a.WithInteractiveLegend}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={data}
	showLegend={true}
	legendOrientation="horizontal"
	legendAlignment="center"
	legendPosition="bottom"
	legendShape="rect"
/>`}),`
`,(0,e.jsx)(t.h3,{id:"vertical-legend",children:"Vertical Legend"}),`
`,(0,e.jsx)(t.p,{children:"Display legends vertically for charts with many series:"}),`
`,(0,e.jsx)(i.Hl,{of:a.CustomLegendPositioning}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={data}
	showLegend={true}
	legendOrientation="vertical"
	legendAlignment="start"
	legendPosition="top"
/>`}),`
`,(0,e.jsx)(t.h3,{id:"composition-api",children:"Composition API"}),`
`,(0,e.jsxs)(t.p,{children:["For more flexible legend positioning and future extensibility, use the composition API with ",(0,e.jsx)(t.code,{children:"<BarChart.Legend />"})," as a child component:"]}),`
`,(0,e.jsx)(i.Hl,{of:a.WithCompositionLegend}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={data}
	withTooltips={true}
	gridVisibility="x"
>
	<BarChart.Legend
		orientation="horizontal"
		alignment="center"
		position="bottom"
	/>
</BarChart>`}),`
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"Benefits of the composition API:"})}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Flexible positioning"}),": Place legends anywhere within the chart container"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Future extensibility"}),": Enables additional chart components like annotations"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Consistent API"}),": Same pattern as LineChart for a unified developer experience"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Backward compatibility"}),": Existing ",(0,e.jsx)(t.code,{children:"showLegend"})," prop continues to work"]}),`
`]}),`
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"Usage patterns:"})}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`// Composition API (recommended for new code)
<BarChart data={data}>
	<BarChart.Legend legendOrientation="vertical" alignment="end" />
</BarChart>

// Traditional prop-based approach (still supported)
<BarChart
	data={data}
	showLegend={true}
	legendOrientation="vertical"
	legendAlignment="end"
/>`}),`
`,(0,e.jsx)(t.h3,{id:"interactive-legend",children:"Interactive Legend"}),`
`,(0,e.jsxs)(t.p,{children:["Enable interactive legend items that users can click to toggle series visibility. This feature requires a ",(0,e.jsx)(t.code,{children:"chartId"})," and wrapping your chart in a ",(0,e.jsx)(t.code,{children:"GlobalChartsProvider"}),":"]}),`
`,(0,e.jsx)(i.Hl,{of:a.WithInteractiveLegend}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`import { BarChart, GlobalChartsProvider } from '@automattic/charts';

<GlobalChartsProvider>
	<BarChart
		data={data}
		chartId="my-chart"
		showLegend={true}
		legendInteractive={true}
	/>
</GlobalChartsProvider>`}),`
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"Interactive legend features:"})}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Click to toggle"}),": Click legend items to show/hide series"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Visual feedback"}),": Legend items visually indicate their active/inactive state"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Accessibility"}),": Full keyboard support with proper ARIA attributes"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Empty state"}),": When all series are hidden, a message prompts users to re-enable series"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"State management"}),": Visibility state is managed through the global charts provider"]}),`
`]}),`
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"Requirements:"})}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:["Set ",(0,e.jsx)(t.code,{children:"legendInteractive={true}"})," to enable the feature"]}),`
`,(0,e.jsxs)(t.li,{children:["Provide a unique ",(0,e.jsx)(t.code,{children:"chartId"})," prop for state tracking"]}),`
`,(0,e.jsxs)(t.li,{children:["Wrap the chart in a ",(0,e.jsx)(t.code,{children:"<GlobalChartsProvider>"})," component"]}),`
`]}),`
`,(0,e.jsx)(t.h2,{id:"advanced-customization",children:"Advanced Customization"}),`
`,(0,e.jsx)(t.h3,{id:"grid-configuration",children:"Grid Configuration"}),`
`,(0,e.jsx)(t.p,{children:"Control grid line visibility and appearance:"}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`// Show only horizontal grid lines (default for vertical bars)
<BarChart data={data} gridVisibility="x" />

// Show only vertical grid lines (default for horizontal bars)
<BarChart data={data} gridVisibility="y" />

// Show both grid lines
<BarChart data={data} gridVisibility="xy" />

// Hide all grid lines
<BarChart data={data} gridVisibility="none" />`}),`
`,(0,e.jsx)(t.h3,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,(0,e.jsx)(t.p,{children:"Charts automatically resize based on container size:"}),`
`,(0,e.jsx)(i.Hl,{of:a.FixedDimensions}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`// Responsive (default)
<BarChart data={data} />

// Fixed dimensions
<BarChart
	data={data}
	width={800}
	height={400}
/>`}),`
`,(0,e.jsx)(t.h3,{id:"custom-margins",children:"Custom Margins"}),`
`,(0,e.jsx)(t.p,{children:"Control chart layout with precise margin settings:"}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={data}
	margin={{
		top: 20,
		right: 60,
		bottom: 80,
		left: 80
	}}
/>`}),`
`,(0,e.jsx)(t.h3,{id:"scale-and-axis-configuration",children:"Scale and Axis Configuration"}),`
`,(0,e.jsx)(t.p,{children:"Advanced configuration for scales and axes:"}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarChart
	data={data}
	options={{
		yScale: {
			type: 'linear',
			zero: true,
			nice: true
		},
		xScale: {
			type: 'band',
			padding: 0.1
		},
		axis: {
			x: {
				orientation: 'bottom',
				numTicks: 5
			},
			y: {
				orientation: 'left',
				numTicks: 6,
				tickFormat: (value) => '$' + value
			}
		}
	}}
/>`}),`
`,(0,e.jsx)(t.h2,{id:"error-handling",children:"Error Handling"}),`
`,(0,e.jsx)(t.p,{children:"The chart gracefully handles various error states and edge cases:"}),`
`,(0,e.jsx)(i.Hl,{of:a.ErrorStates}),`
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"Supported scenarios:"})}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Empty data arrays"}),`
`,(0,e.jsx)(t.li,{children:"Invalid data values (null, NaN, undefined)"}),`
`,(0,e.jsx)(t.li,{children:"Missing data properties"}),`
`,(0,e.jsx)(t.li,{children:"Invalid date formats"}),`
`,(0,e.jsx)(t.li,{children:"Single data points"}),`
`]}),`
`,(0,e.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,(0,e.jsx)(t.h3,{id:"keyboard-navigation-1",children:"Keyboard Navigation"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Tab"}),": Focus the chart container"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Arrow Keys"}),": Navigate between individual bars"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Enter/Space"}),": Activate tooltips or interactive elements"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Escape"}),": Close active tooltips"]}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"screen-reader-support",children:"Screen Reader Support"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:["Chart container has ",(0,e.jsx)(t.code,{children:'role="grid"'})," with descriptive ",(0,e.jsx)(t.code,{children:"aria-label"})]}),`
`,(0,e.jsx)(t.li,{children:"Individual bars are navigable and announced with their values"}),`
`,(0,e.jsx)(t.li,{children:"Interactive elements have appropriate ARIA attributes"}),`
`,(0,e.jsxs)(t.li,{children:["Color information is supplemented with patterns when ",(0,e.jsx)(t.code,{children:"withPatterns"})," is enabled"]}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"focus-management",children:"Focus Management"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Clear visual focus indicators on chart and individual bars"}),`
`,(0,e.jsx)(t.li,{children:"Logical tab order through interactive elements"}),`
`,(0,e.jsx)(t.li,{children:"Focus restoration after modal interactions"}),`
`]}),`
`,(0,e.jsx)(t.h2,{id:"browser-compatibility",children:"Browser Compatibility"}),`
`,(0,e.jsx)(t.h3,{id:"modern-browser-support",children:"Modern Browser Support"}),`
`,(0,e.jsx)(t.p,{children:"Full functionality in all modern browsers supporting:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"SVG rendering and manipulation"}),`
`,(0,e.jsx)(t.li,{children:"CSS Grid and Flexbox layouts"}),`
`,(0,e.jsx)(t.li,{children:"ES6+ JavaScript features"}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"performance-considerations",children:"Performance Considerations"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:["Optimized rendering using ",(0,e.jsx)(t.code,{children:"@visx/xychart"})," for efficient SVG generation"]}),`
`,(0,e.jsx)(t.li,{children:"Automatic data validation and error boundaries"}),`
`,(0,e.jsx)(t.li,{children:"Efficient pattern generation for accessibility features"}),`
`]}),`
`,(0,e.jsx)(t.h2,{id:"performance-considerations-1",children:"Performance Considerations"}),`
`,(0,e.jsx)(t.h3,{id:"built-in-optimizations",children:"Built-in Optimizations"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Efficient rendering"}),": Built on ",(0,e.jsx)(t.code,{children:"@visx/xychart"})," for optimized SVG rendering"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Data validation"}),": Automatic validation prevents rendering invalid data"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Responsive behavior"}),": Uses ",(0,e.jsx)(t.code,{children:"ResizeObserver"})," for efficient chart resizing"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Pattern caching"}),": Pattern definitions are cached and reused for performance"]}),`
`]}),`
`,(0,e.jsx)(t.h2,{id:"theming-integration",children:"Theming Integration"}),`
`,(0,e.jsxs)(t.p,{children:["Bar Charts integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided. A custom theme can be provided by wrapping your chart in ",(0,e.jsx)(t.code,{children:"GlobalChartsProvider"})," and passing a custom theme object with the properties you want to override to the ",(0,e.jsx)(t.code,{children:"theme"})," prop:"]}),`
`,(0,e.jsx)(i.kL,{language:"tsx",code:`import { GlobalChartsProvider, BarChart, type ChartTheme } from '@automattic/charts';

const customTheme: ChartTheme = {
	colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'],
	gridColor: '#E0E0E0',
};

<GlobalChartsProvider theme={customTheme}>
	<BarChart data={data} />
</GlobalChartsProvider>`}),`
`,(0,e.jsx)(t.h2,{id:"animation",children:"Animation"}),`
`,(0,e.jsx)(t.p,{children:"The Bar Chart component supports an optional entry animation that creates a smooth reveal effect when the chart first renders:"}),`
`,(0,e.jsx)(i.Hl,{of:a.Animation}),`
`,(0,e.jsx)(i.kL,{language:"tsx",code:`<BarChart
	data={ data }
	width={ 800 }
	height={ 400 }
	animation={ true }
/>`}),`
`,(0,e.jsx)(t.h3,{id:"animation-behavior",children:"Animation Behavior"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Opt-in"}),": Animation is disabled by default and must be explicitly enabled with the ",(0,e.jsx)(t.code,{children:"animation"})," prop"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Accessibility"}),": Automatically respects the user's ",(0,e.jsx)(t.code,{children:"prefers-reduced-motion"})," system setting - animation will not play for users who prefer reduced motion"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Effect"}),": Creates a growing effect where bars scale from zero to their full size. Vertical bars rise from the bottom, while horizontal bars stretch from the left"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Duration"}),": 1000ms (1 second) with ease-out timing"]}),`
`]}),`
`,(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.strong,{children:"Note"}),": The animation plays once when the chart initially renders and does not repeat."]})]})}function d(u={}){const{wrapper:t}={...(0,m.R)(),...u.components};return t?(0,e.jsx)(t,{...u,children:(0,e.jsx)(r,{...u})}):r(u)}}),"../charts/src/charts/bar-chart/stories/index.stories.tsx":((b,h,l)=>{"use strict";l.r(h),l.d(h,{Animation:()=>E,CustomLegendPositioning:()=>c,Default:()=>t,ErrorStates:()=>n,FixedDimensions:()=>C,HorizontalBarChart:()=>S,ManyDataSeries:()=>w,SingleSeries:()=>f,SmartFormatting:()=>s,TimeSeries:()=>v,WithCompositionLegend:()=>x,WithInteractiveLegend:()=>o,WithPatterns:()=>j,ZeroValueComparison:()=>L,__namedExportsOrder:()=>D,default:()=>u});var g=l("../charts/src/stories/chart-decorator.tsx"),e=l("../charts/src/stories/theme-config.tsx"),m=l("../charts/src/stories/legend-config.tsx"),i=l("../charts/src/stories/sample-data/index.ts"),a=l("../charts/src/charts/bar-chart/bar-chart.tsx"),r=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u={title:"JS Packages/Charts Library/Charts/Bar Chart",component:a.A,parameters:{layout:"centered"},decorators:[g.OI],argTypes:{...g.xo,...e.jW,...m.r,orientation:{control:{type:"radio"},options:["vertical","horizontal"],description:"Bar orientation",table:{category:"Visual Style"}},gridVisibility:{control:{type:"radio"},options:["none","x","y","both"],description:"Grid line visibility",table:{category:"Visual Style"}},seriesCount:{control:{type:"radio"},options:["single","multiple","many"],description:"Number of data series",table:{category:"Data"}},withPatterns:{control:"boolean",description:"Use patterns for bars",table:{category:"Visual Style"}}},render:p=>{const{seriesCount:y,...A}=p;let _=A.data;return y==="single"?_=[i._E[0]]:y==="multiple"?_=[i._E[0],i._E[1],i._E[2]]:y==="many"&&(_=i._E),(0,r.jsx)(a.A,{...A,data:_})}},t={args:{...e.In,withTooltips:!0,data:[i._E[0],i._E[1],i._E[2]],gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300}},f={args:{...t.args,data:[i._E[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},v={args:{...t.args,data:[{...i.Sb[0],label:"Data with dateString and date",data:[...i.Sb[0].data,{dateString:"2024-01-31",value:2230},{dateString:"2024-02-01",value:2580},{date:new Date("2024-02-02 00:00:00"),value:3500},{dateString:"2024-02-03 00:00:00",value:1500},{dateString:"2024-02-04",value:2500},{dateString:"2024-02-05 00:00",value:3e3}]}],options:{axis:{x:{tickFormat:p=>new Date(p).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},w={args:{...t.args,data:i._E},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},C={args:{...t.args,width:800,height:400,data:[i._E[0],i._E[1],i._E[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},j={args:{...t.args,withPatterns:!0,data:t.args.data.map(p=>({...p,data:p.data.filter(y=>parseInt(y.label)>=2016)}))}},E={args:{...t.args,animation:!0}},n={render:()=>(0,r.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Empty Data"}),(0,r.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,r.jsx)(a.A,{data:[]})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Invalid Data"}),(0,r.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,r.jsx)(a.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};n.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const s={args:{withTooltips:!0,data:i.Gv,gridVisibility:"x"}};s.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const o={args:{...t.args,showLegend:!0,legendInteractive:!0,chartId:"bar-chart-with-interactive-legend"},parameters:{docs:{description:{story:"Bar chart with interactive legend. Click on legend items to toggle series visibility. When all series are hidden, a message will be displayed prompting you to click legend items to show data again."}}}},x={render:p=>(0,r.jsx)("div",{style:{width:"800px"},children:(0,r.jsx)(a.A,{data:p.data||[i._E[0],i._E[1],i._E[2]],withTooltips:!0,gridVisibility:"x",maxWidth:1200,aspectRatio:.5,children:(0,r.jsx)(a.A.Legend,{orientation:p.legendOrientation||"horizontal",alignment:p.legendAlignment||"center",position:p.legendPosition||"bottom",maxWidth:p.legendMaxWidth,textOverflow:p.legendTextOverflow||"wrap"})})}),argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{docs:{description:{story:"Demonstrates using the composition API with `<BarChart.Legend />` as a child component. This provides the same functionality as the `showLegend` prop but allows for more flexible composition patterns."}}}},c={args:{withTooltips:!0,data:i._E.slice(0,3),gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top"},parameters:{docs:{description:{story:"Bar chart with top-left positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities."}}}},S={args:{...t.args,data:[i._E[0],i._E[1],i._E[2]],orientation:"horizontal",gridVisibility:"none"}},B=[{group:"United States",label:"United States",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:3}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:1},{label:"1900",value:0},{label:"1904",value:1},{label:"1908",value:10},{label:"1912",value:9}]},{group:"Japan",label:"Japan",data:[{label:"1896",value:2},{label:"1900",value:1},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:2}]}],L={render:()=>(0,r.jsxs)("div",{style:{display:"grid",gap:"40px"},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Zero Value Display: Disabled (Default)"}),(0,r.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are not visually displayed. Bars with zero values have no height."}),(0,r.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,r.jsx)(a.A,{data:B,showZeroValues:!1,withTooltips:!0,gridVisibility:"x"})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Zero Value Display: Enabled"}),(0,r.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are visually displayed with minimum height bars. The tooltip still shows the actual value of 0, while the bar has a small visual height for better UX."}),(0,r.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,r.jsx)(a.A,{data:B,showZeroValues:!0,withTooltips:!0,gridVisibility:"x"})})]})]}),parameters:{docs:{description:{story:"Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights."}}}},D=["Default","SingleSeries","TimeSeries","ManyDataSeries","FixedDimensions","WithPatterns","Animation","ErrorStates","SmartFormatting","WithInteractiveLegend","WithCompositionLegend","CustomLegendPositioning","HorizontalBarChart","ZeroValueComparison"]}),"../charts/src/stories/legend-config.tsx":((b,h,l)=>{"use strict";l.d(h,{r:()=>g});const g={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."}};try{g.displayName="legendArgTypes",g.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:g.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}})}]);
