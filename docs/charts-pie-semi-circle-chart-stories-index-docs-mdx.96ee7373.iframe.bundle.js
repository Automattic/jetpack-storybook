"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8125],{"../charts/src/charts/pie-semi-circle-chart/stories/index.docs.mdx"(d,r,n){n.r(r),n.d(r,{default:()=>c});var h=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),l=n("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.28_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),t=n("../../../node_modules/.pnpm/@storybook+addon-docs@10.2.11_@types+react@18.3.28_esbuild@0.25.9_storybook@10.2.11_@te_623b11407ff81c3407704a8a948465b9/node_modules/@storybook/addon-docs/dist/blocks.js"),a=n("../charts/src/charts/pie-semi-circle-chart/stories/index.stories.tsx");function o(s){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...s.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.W8,{title:"JS Packages/Charts Library/Charts/Pie Semi Circle Chart",of:a}),`
`,(0,e.jsx)(i.h1,{id:"pie-semi-circle-chart",children:"Pie Semi Circle Chart"}),`
`,(0,e.jsx)(i.p,{children:"The Pie Semi Circle Chart displays proportional data in a semi-circular format, providing an elegant alternative to full pie charts with better space utilization for dashboards and compact layouts."}),`
`,(0,e.jsx)(t.Hl,{of:a.Default}),`
`,(0,e.jsx)(i.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsx)(i.p,{children:"The PieSemiCircleChart component renders data as segments in a semi-circular arc (180 degrees), making it ideal for displaying percentages, categories, or proportional breakdowns in a visually compact format. This chart type is particularly effective in dashboards where vertical space is limited."}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`import { PieSemiCircleChart } from '@automattic/charts';
import '@automattic/charts/style.css';

const data = [
	{
		label: 'MacOS',
		value: 30000,
		valueDisplay: '30K',
		percentage: 5,
	},
	{
		label: 'Linux',
		value: 22000,
		valueDisplay: '22K',
		percentage: 1,
	},
	{
		label: 'Windows',
		value: 80000,
		valueDisplay: '80K',
		percentage: 2,
	},
];

<PieSemiCircleChart
	data={ data }
	thickness={ 0.4 }
	label="OS"
	note="Windows +10%"
/>`}),`
`,(0,e.jsx)(i.p,{children:"The chart automatically validates data to ensure positive values and meaningful percentages, displaying error states for invalid data configurations."}),`
`,(0,e.jsx)(i.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsxs)(i.p,{children:["For detailed information about component props, types, and method signatures, see the ",(0,e.jsx)(i.a,{href:"./?path=/docs/js-packages-charts-library-charts-pie-semi-circle-chart-api-reference--docs",children:"Pie Semi Circle Chart API Reference"}),"."]}),`
`,(0,e.jsx)(i.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(i.h3,{id:"basic-semi-circle-chart",children:"Basic Semi-Circle Chart"}),`
`,(0,e.jsx)(i.p,{children:"The simplest implementation requires only data with proper percentage values. Unlike full pie charts, semi-circle charts are ideal when you want to emphasize the relationship between parts while conserving vertical space:"}),`
`,(0,e.jsx)(t.Hl,{of:a.Default}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<PieSemiCircleChart
	data={ data }
	thickness={ 0.4 }
	label="OS"
	note="Windows +10%"
/>`}),`
`,(0,e.jsx)(i.h3,{id:"required-props",children:"Required Props"}),`
`,(0,e.jsxs)(i.ul,{children:[`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:(0,e.jsx)(i.code,{children:"data"})}),": Array of ",(0,e.jsx)(i.code,{children:"DataPointPercentage"})," objects containing label, value, and percentage"]}),`
`]}),`
`,(0,e.jsx)(i.h3,{id:"optional-props",children:"Optional Props"}),`
`,(0,e.jsxs)(i.p,{children:["For detailed information about all optional props, see the ",(0,e.jsx)(i.a,{href:"./?path=/docs/js-packages-charts-library-charts-pie-semi-circle-chart-api-reference--docs",children:"Pie Semi Circle Chart API Reference"}),"."]}),`
`,(0,e.jsx)(i.h2,{id:"chart-variations",children:"Chart Variations"}),`
`,(0,e.jsx)(i.h3,{id:"with-interactive-tooltips",children:"With Interactive Tooltips"}),`
`,(0,e.jsxs)(i.p,{children:["Add ",(0,e.jsx)(i.code,{children:"withTooltips"})," to enable hover interactions that display detailed information about each segment:"]}),`
`,(0,e.jsx)(t.Hl,{of:a.WithTooltips}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<PieSemiCircleChart
	data={ data }
	withTooltips={ true }
	label="OS"
	note="Windows +10%"
/>`}),`
`,(0,e.jsx)(i.h3,{id:"counter-clockwise-direction",children:"Counter-Clockwise Direction"}),`
`,(0,e.jsxs)(i.p,{children:["Use the ",(0,e.jsx)(i.code,{children:"clockwise"})," prop to control the rendering direction of segments:"]}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<PieSemiCircleChart
	data={ data }
	width={ 600 }
	clockwise={ false }
	label="Counter-clockwise Rendering"
/>`}),`
`,(0,e.jsx)(i.h3,{id:"different-thickness-values",children:"Different Thickness Values"}),`
`,(0,e.jsxs)(i.p,{children:["Adjust the visual weight of the chart using the ",(0,e.jsx)(i.code,{children:"thickness"})," prop:"]}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`// Thin ring (thickness: 0.2)
<PieSemiCircleChart
	data={ data }
	width={ 400 }
	thickness={ 0.2 }
	label="Thin Ring"
/>

// Thick ring (thickness: 0.8)
<PieSemiCircleChart
	data={ data }
	width={ 400 }
	thickness={ 0.8 }
	label="Thick Ring"
/>`}),`
`,(0,e.jsx)(i.h2,{id:"error-handling",children:"Error Handling"}),`
`,(0,e.jsx)(i.h3,{id:"data-validation",children:"Data Validation"}),`
`,(0,e.jsx)(i.p,{children:"The chart includes comprehensive data validation with user-friendly error messages:"}),`
`,(0,e.jsx)(t.Hl,{of:a.ErrorStates}),`
`,(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Validation Rules:"})}),`
`,(0,e.jsxs)(i.ul,{children:[`
`,(0,e.jsx)(i.li,{children:"Data array cannot be empty"}),`
`,(0,e.jsx)(i.li,{children:"Values and percentages must be non-negative"}),`
`,(0,e.jsx)(i.li,{children:"Total percentage must be greater than 0 (unlike full pie charts, doesn't need to equal 100)"}),`
`]}),`
`,(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Error States Handled:"})}),`
`,(0,e.jsxs)(i.ul,{children:[`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Empty Data"}),': Displays "No data available"']}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Negative Values"}),': Shows "Invalid data: Negative values are not allowed"']}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Zero Total"}),': Displays "Invalid percentage total: Must be greater than 0"']}),`
`]}),`
`,(0,e.jsx)(i.h3,{id:"single-data-point",children:"Single Data Point"}),`
`,(0,e.jsx)(i.p,{children:"The chart gracefully handles single data points, rendering a complete semi-circle:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`const singlePointData = [
	{
		label: 'Complete',
		value: 100,
		percentage: 100,
	},
];

<PieSemiCircleChart
	data={ singlePointData }
	width={ 400 }
	label="Single Category"
/>`}),`
`,(0,e.jsx)(i.h2,{id:"legends",children:"Legends"}),`
`,(0,e.jsxs)(i.p,{children:["Use the composition API to add a legend by placing ",(0,e.jsx)(i.code,{children:"<PieSemiCircleChart.Legend />"})," as a child:"]}),`
`,(0,e.jsx)(t.Hl,{of:a.WithCompositionLegend}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<PieSemiCircleChart data={ data }>
	<PieSemiCircleChart.Legend />
</PieSemiCircleChart>`}),`
`,(0,e.jsxs)(i.p,{children:["For full legend configuration options \u2014 positioning, orientation, shapes, interactivity, and the composition API \u2014 see the ",(0,e.jsx)(i.a,{href:"./?path=/docs/js-packages-charts-library-components-legend--docs",children:"Legend component docs"}),"."]}),`
`,(0,e.jsx)(i.h2,{id:"styling-and-customization",children:"Styling and Customization"}),`
`,(0,e.jsx)(i.h3,{id:"custom-colors",children:"Custom Colors"}),`
`,(0,e.jsxs)(i.p,{children:["Segments automatically use theme colors, but you can override individual segment colors using the ",(0,e.jsx)(i.code,{children:"color"})," property in your data:"]}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`const customColorData = [
	{
		label: 'Primary',
		value: 60,
		percentage: 60,
		color: '#3366CC', // Custom blue
	},
	{
		label: 'Secondary',
		value: 40,
		percentage: 40,
		color: '#DC3912', // Custom red
	},
];

<PieSemiCircleChart
	data={ customColorData }
	width={ 400 }
	label="Custom Colors"
/>`}),`
`,(0,e.jsx)(i.h3,{id:"label-and-note-styling",children:"Label and Note Styling"}),`
`,(0,e.jsx)(i.p,{children:"The chart includes built-in styling for labels and notes with appropriate typography hierarchy:"}),`
`,(0,e.jsxs)(i.ul,{children:[`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Label"}),": 16px, font-weight 600, positioned above the chart"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Note"}),": 14px, positioned below the label"]}),`
`]}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<PieSemiCircleChart
	data={ data }
	width={ 600 }
	label="Primary Heading"
	note="Secondary information or context"
/>`}),`
`,(0,e.jsx)(i.h2,{id:"theming-integration",children:"Theming Integration"}),`
`,(0,e.jsxs)(i.p,{children:["Pie Semi Circle Charts integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided. A custom theme can be provided by wrapping your chart in ",(0,e.jsx)(i.code,{children:"GlobalChartsProvider"})," and passing a custom theme object with the properties you want to override to the ",(0,e.jsx)(i.code,{children:"theme"})," prop:"]}),`
`,(0,e.jsx)(t.kL,{language:"tsx",code:`import { GlobalChartsProvider, PieSemiCircleChart, type ChartTheme } from '@automattic/charts';

const customTheme: ChartTheme = {
	colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'],
};

<GlobalChartsProvider theme={customTheme}>
	<PieSemiCircleChart data={data} />
</GlobalChartsProvider>`}),`
`,(0,e.jsx)(i.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,(0,e.jsxs)(i.p,{children:["By default, charts ",(0,e.jsx)(i.strong,{children:"fill their parent container's dimensions"})," while maintaining a 2:1 width-to-height aspect ratio. The parent must have an explicit height:"]}),`
`,(0,e.jsx)(t.Hl,{of:a.Default}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`// Fill parent container (default) - parent needs explicit height
<div style={{ width: '100%', height: '400px' }}>
	<PieSemiCircleChart data={ data } />
</div>

// Fixed dimensions - chart constrains to 2:1 ratio within these bounds
<PieSemiCircleChart data={ data } width={ 600 } height={ 300 } />`}),`
`,(0,e.jsxs)(i.p,{children:["The chart always maintains a 2:1 width-to-height ratio. When both ",(0,e.jsx)(i.code,{children:"width"})," and ",(0,e.jsx)(i.code,{children:"height"})," are provided, the chart constrains to whichever dimension is more restrictive. Use ",(0,e.jsx)(i.code,{children:"width"})," and/or ",(0,e.jsx)(i.code,{children:"height"})," to constrain the chart to specific pixel dimensions."]}),`
`,(0,e.jsx)(t.Hl,{of:a.FixedDimensions}),`
`,(0,e.jsxs)(i.p,{children:["For more details on responsive behavior, see the ",(0,e.jsx)(i.a,{href:"./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design",children:"Responsive Design section"})," in the introduction."]}),`
`,(0,e.jsx)(i.h2,{id:"animation",children:"Animation"}),`
`,(0,e.jsx)(i.p,{children:"The Pie Semi Circle Chart component supports an optional entry animation that creates a smooth reveal effect when the chart first renders:"}),`
`,(0,e.jsx)(t.Hl,{of:a.Animation}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<PieSemiCircleChart
	data={ data }
	animation={ true }
	label="OS"
	note="Windows +10%"
/>`}),`
`,(0,e.jsx)(i.h3,{id:"animation-behavior",children:"Animation Behavior"}),`
`,(0,e.jsxs)(i.ul,{children:[`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Opt-in"}),": Animation is disabled by default and must be explicitly enabled with the ",(0,e.jsx)(i.code,{children:"animation"})," prop"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Accessibility"}),": Automatically respects the user's ",(0,e.jsx)(i.code,{children:"prefers-reduced-motion"})," system setting - animation will not play for users who prefer reduced motion"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Effect"}),": Creates a radial wipe reveal effect that sweeps clockwise from the top, progressively revealing the chart segments"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Duration"}),": 1000ms (1 second)"]}),`
`]}),`
`,(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Note"}),": The animation plays once when the chart initially renders and does not repeat."]}),`
`,(0,e.jsx)(i.h2,{id:"advanced-features",children:"Advanced Features"}),`
`,(0,e.jsx)(i.h3,{id:"value-display-formatting",children:"Value Display Formatting"}),`
`,(0,e.jsxs)(i.p,{children:["Use the ",(0,e.jsx)(i.code,{children:"valueDisplay"})," property to show formatted values in tooltips and legends:"]}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`const formattedData = [
	{
		label: 'Users',
		value: 15000,
		valueDisplay: '15K users', // Custom formatted display
		percentage: 60,
	},
	{
		label: 'Revenue',
		value: 10000,
		valueDisplay: '$10K', // Currency formatting
		percentage: 40,
	},
];

<PieSemiCircleChart
	data={ formattedData }
	withTooltips={ true }
	showLegend={ true }
/>`}),`
`,(0,e.jsx)(i.h3,{id:"chart-integration",children:"Chart Integration"}),`
`,(0,e.jsx)(i.p,{children:"The chart integrates with the chart context system for consistent behavior across chart types:"}),`
`,(0,e.jsxs)(i.ul,{children:[`
`,(0,e.jsx)(i.li,{children:"Automatic chart ID generation for accessibility"}),`
`,(0,e.jsx)(i.li,{children:"Theme consistency across multiple charts"}),`
`,(0,e.jsx)(i.li,{children:"Legend item registration for cross-chart interactions"}),`
`]}),`
`,(0,e.jsx)(i.h2,{id:"migration",children:"Migration"}),`
`,(0,e.jsx)(i.h3,{id:"from-full-pie-charts",children:"From Full Pie Charts"}),`
`,(0,e.jsx)(i.p,{children:"Semi-circle charts use the same data format as full pie charts, making migration straightforward:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`// Full pie chart
<PieChart
	data={ data }
	size={ 400 }
/>

// Semi-circle chart (uses width instead of size)
<PieSemiCircleChart
	data={ data }
	width={ 400 }
/>`}),`
`,(0,e.jsx)(i.h3,{id:"key-differences-from-full-pie-charts",children:"Key Differences from Full Pie Charts"}),`
`,(0,e.jsxs)(i.ul,{children:[`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Aspect Ratio"}),": Semi-circle charts have a 2:1 width-to-height ratio"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Space Efficiency"}),": Takes up approximately 50% less vertical space"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Data Validation"}),": Percentages don't need to sum to 100 (allows for partial data representation)"]}),`
`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Positioning"}),": Different internal positioning calculations for labels and legends"]}),`
`]}),`
`,(0,e.jsx)(i.h3,{id:"data-validation-differences",children:"Data Validation Differences"}),`
`,(0,e.jsx)(i.p,{children:"Unlike full pie charts that require percentages to sum to exactly 100:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`// Full pie chart - must sum to 100
const fullPieData = [
	{ label: 'A', value: 60, percentage: 60 },
	{ label: 'B', value: 40, percentage: 40 }, // Total: 100%
];

// Semi-circle chart - flexible totals
const semiCircleData = [
	{ label: 'Completed', value: 75, percentage: 75 },
	{ label: 'Remaining', value: 25, percentage: 25 }, // Total: 100%
];

// Or partial completion
const partialData = [
	{ label: 'Progress', value: 60, percentage: 60 }, // Shows 60% of semi-circle
];`})]})}function c(s={}){const{wrapper:i}={...(0,l.R)(),...s.components};return i?(0,e.jsx)(i,{...s,children:(0,e.jsx)(o,{...s})}):o(s)}}}]);
