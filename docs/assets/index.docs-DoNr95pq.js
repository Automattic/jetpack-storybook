import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{bt as n}from"./esm-BzsRqMEY.js";import{i as r,n as i,r as a,t as o}from"./blocks-DiilIL-4.js";import{t as s}from"./mdx-react-shim-BAkjbeMT.js";import{Animation as c,Default as l,ErrorStates as u,FixedDimensions as d,WithCompositionLegend as f,WithTooltips as p,n as m,t as h}from"./index.stories-JVIOiwL1.js";function g(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i,{title:`JS Packages/Charts Library/Charts/Pie Semi Circle Chart`,of:h}),`
`,(0,v.jsx)(t.h1,{id:`pie-semi-circle-chart`,children:`Pie Semi Circle Chart`}),`
`,(0,v.jsx)(t.p,{children:`The Pie Semi Circle Chart displays proportional data in a semi-circular format, providing an elegant alternative to full pie charts with better space utilization for dashboards and compact layouts.`}),`
`,(0,v.jsx)(o,{of:l}),`
`,(0,v.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,v.jsx)(t.p,{children:`The PieSemiCircleChart component renders data as segments in a semi-circular arc (180 degrees), making it ideal for displaying percentages, categories, or proportional breakdowns in a visually compact format. This chart type is particularly effective in dashboards where vertical space is limited.`}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`import { PieSemiCircleChart } from '@automattic/charts';
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
`,(0,v.jsx)(t.p,{children:`The chart automatically validates data to ensure positive values and meaningful percentages, displaying error states for invalid data configurations.`}),`
`,(0,v.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,v.jsxs)(t.p,{children:[`For detailed information about component props, types, and method signatures, see the `,(0,v.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-pie-semi-circle-chart-api-reference--docs`,children:`Pie Semi Circle Chart API Reference`}),`.`]}),`
`,(0,v.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,v.jsx)(t.h3,{id:`basic-semi-circle-chart`,children:`Basic Semi-Circle Chart`}),`
`,(0,v.jsx)(t.p,{children:`The simplest implementation requires only data with proper percentage values. Unlike full pie charts, semi-circle charts are ideal when you want to emphasize the relationship between parts while conserving vertical space:`}),`
`,(0,v.jsx)(o,{of:l}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`<PieSemiCircleChart
	data={ data }
	thickness={ 0.4 }
	label="OS"
	note="Windows +10%"
/>`}),`
`,(0,v.jsx)(t.h3,{id:`required-props`,children:`Required Props`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`data`})}),`: Array of `,(0,v.jsx)(t.code,{children:`DataPointPercentage`}),` objects containing label, value, and percentage`]}),`
`]}),`
`,(0,v.jsx)(t.h3,{id:`optional-props`,children:`Optional Props`}),`
`,(0,v.jsxs)(t.p,{children:[`For detailed information about all optional props, see the `,(0,v.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-pie-semi-circle-chart-api-reference--docs`,children:`Pie Semi Circle Chart API Reference`}),`.`]}),`
`,(0,v.jsx)(t.h2,{id:`chart-variations`,children:`Chart Variations`}),`
`,(0,v.jsx)(t.h3,{id:`with-interactive-tooltips`,children:`With Interactive Tooltips`}),`
`,(0,v.jsxs)(t.p,{children:[`Add `,(0,v.jsx)(t.code,{children:`withTooltips`}),` to enable hover interactions that display detailed information about each segment:`]}),`
`,(0,v.jsx)(o,{of:p}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`<PieSemiCircleChart
	data={ data }
	withTooltips={ true }
	label="OS"
	note="Windows +10%"
/>`}),`
`,(0,v.jsx)(t.h3,{id:`counter-clockwise-direction`,children:`Counter-Clockwise Direction`}),`
`,(0,v.jsxs)(t.p,{children:[`Use the `,(0,v.jsx)(t.code,{children:`clockwise`}),` prop to control the rendering direction of segments:`]}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`<PieSemiCircleChart
	data={ data }
	width={ 600 }
	clockwise={ false }
	label="Counter-clockwise Rendering"
/>`}),`
`,(0,v.jsx)(t.h3,{id:`different-thickness-values`,children:`Different Thickness Values`}),`
`,(0,v.jsxs)(t.p,{children:[`Adjust the visual weight of the chart using the `,(0,v.jsx)(t.code,{children:`thickness`}),` prop:`]}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`// Thin ring (thickness: 0.2)
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
`,(0,v.jsx)(t.h2,{id:`error-handling`,children:`Error Handling`}),`
`,(0,v.jsx)(t.h3,{id:`data-validation`,children:`Data Validation`}),`
`,(0,v.jsx)(t.p,{children:`The chart includes comprehensive data validation with user-friendly error messages:`}),`
`,(0,v.jsx)(o,{of:u}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Validation Rules:`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Data array cannot be empty`}),`
`,(0,v.jsx)(t.li,{children:`Values and percentages must be non-negative`}),`
`,(0,v.jsx)(t.li,{children:`Total percentage must be greater than 0 (unlike full pie charts, doesn't need to equal 100)`}),`
`]}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Error States Handled:`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Empty Data`}),`: Displays "No data available"`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Negative Values`}),`: Shows "Invalid data: Negative values are not allowed"`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Zero Total`}),`: Displays "Invalid percentage total: Must be greater than 0"`]}),`
`]}),`
`,(0,v.jsx)(t.h3,{id:`single-data-point`,children:`Single Data Point`}),`
`,(0,v.jsx)(t.p,{children:`The chart gracefully handles single data points, rendering a complete semi-circle:`}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`const singlePointData = [
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
`,(0,v.jsx)(t.h2,{id:`legends`,children:`Legends`}),`
`,(0,v.jsxs)(t.p,{children:[`Use the composition API to add a legend by placing `,(0,v.jsx)(t.code,{children:`<PieSemiCircleChart.Legend />`}),` as a child:`]}),`
`,(0,v.jsx)(o,{of:f}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`<PieSemiCircleChart data={ data }>
	<PieSemiCircleChart.Legend />
</PieSemiCircleChart>`}),`
`,(0,v.jsxs)(t.p,{children:[`For full legend configuration options — positioning, orientation, shapes, interactivity, and the composition API — see the `,(0,v.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-components-legend--docs`,children:`Legend component docs`}),`.`]}),`
`,(0,v.jsx)(t.h2,{id:`styling-and-customization`,children:`Styling and Customization`}),`
`,(0,v.jsx)(t.h3,{id:`custom-colors`,children:`Custom Colors`}),`
`,(0,v.jsxs)(t.p,{children:[`Segments automatically use theme colors, but you can override individual segment colors using the `,(0,v.jsx)(t.code,{children:`color`}),` property in your data:`]}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`const customColorData = [
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
`,(0,v.jsx)(t.h3,{id:`label-and-note-styling`,children:`Label and Note Styling`}),`
`,(0,v.jsx)(t.p,{children:`The chart includes built-in styling for labels and notes with appropriate typography hierarchy:`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Label`}),`: Uses `,(0,v.jsx)(t.code,{children:`--wpds-typography-font-size-lg`}),` (default 16px), `,(0,v.jsx)(t.code,{children:`--wpds-typography-font-weight-medium`}),` (default 499), positioned above the chart`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Note`}),`: Uses `,(0,v.jsx)(t.code,{children:`--wpds-typography-font-size-md`}),` (default 13px), positioned below the label`]}),`
`]}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`<PieSemiCircleChart
	data={ data }
	width={ 600 }
	label="Primary Heading"
	note="Secondary information or context"
/>`}),`
`,(0,v.jsx)(t.h2,{id:`theming-integration`,children:`Theming Integration`}),`
`,(0,v.jsxs)(t.p,{children:[`Pie Semi Circle Charts integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided. A custom theme can be provided by wrapping your chart in `,(0,v.jsx)(t.code,{children:`GlobalChartsProvider`}),` and passing a custom theme object with the properties you want to override to the `,(0,v.jsx)(t.code,{children:`theme`}),` prop:`]}),`
`,(0,v.jsx)(a,{language:`tsx`,code:`import { GlobalChartsProvider, PieSemiCircleChart, type ChartTheme } from '@automattic/charts';

const customTheme: ChartTheme = {
	colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'],
};

<GlobalChartsProvider theme={customTheme}>
	<PieSemiCircleChart data={data} />
</GlobalChartsProvider>`}),`
`,(0,v.jsx)(t.h2,{id:`responsive-behavior`,children:`Responsive Behavior`}),`
`,(0,v.jsxs)(t.p,{children:[`By default, charts `,(0,v.jsx)(t.strong,{children:`fill their parent container's dimensions`}),` while maintaining a 2:1 width-to-height aspect ratio. The parent must have an explicit height:`]}),`
`,(0,v.jsx)(o,{of:l}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`// Fill parent container (default) - parent needs explicit height
<div style={{ width: '100%', height: '400px' }}>
	<PieSemiCircleChart data={ data } />
</div>

// Fixed dimensions - chart constrains to 2:1 ratio within these bounds
<PieSemiCircleChart data={ data } width={ 600 } height={ 300 } />`}),`
`,(0,v.jsxs)(t.p,{children:[`The chart always maintains a 2:1 width-to-height ratio. When both `,(0,v.jsx)(t.code,{children:`width`}),` and `,(0,v.jsx)(t.code,{children:`height`}),` are provided, the chart constrains to whichever dimension is more restrictive. Use `,(0,v.jsx)(t.code,{children:`width`}),` and/or `,(0,v.jsx)(t.code,{children:`height`}),` to constrain the chart to specific pixel dimensions.`]}),`
`,(0,v.jsx)(o,{of:d}),`
`,(0,v.jsxs)(t.p,{children:[`For more details on responsive behavior, see the `,(0,v.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design`,children:`Responsive Design section`}),` in the introduction.`]}),`
`,(0,v.jsx)(t.h2,{id:`animation`,children:`Animation`}),`
`,(0,v.jsx)(t.p,{children:`The Pie Semi Circle Chart component supports an optional entry animation that creates a smooth reveal effect when the chart first renders:`}),`
`,(0,v.jsx)(o,{of:c}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`<PieSemiCircleChart
	data={ data }
	animation={ true }
	label="OS"
	note="Windows +10%"
/>`}),`
`,(0,v.jsx)(t.h3,{id:`animation-behavior`,children:`Animation Behavior`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Opt-in`}),`: Animation is disabled by default and must be explicitly enabled with the `,(0,v.jsx)(t.code,{children:`animation`}),` prop`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Accessibility`}),`: Automatically respects the user's `,(0,v.jsx)(t.code,{children:`prefers-reduced-motion`}),` system setting - animation will not play for users who prefer reduced motion`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Effect`}),`: Creates a radial wipe reveal effect that sweeps clockwise from the top, progressively revealing the chart segments`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Duration`}),`: 1000ms (1 second)`]}),`
`]}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Note`}),`: The animation plays once when the chart initially renders and does not repeat.`]}),`
`,(0,v.jsx)(t.h2,{id:`advanced-features`,children:`Advanced Features`}),`
`,(0,v.jsx)(t.h3,{id:`value-display-formatting`,children:`Value Display Formatting`}),`
`,(0,v.jsxs)(t.p,{children:[`Use the `,(0,v.jsx)(t.code,{children:`valueDisplay`}),` property to show formatted values in tooltips and legends:`]}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`const formattedData = [
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
`,(0,v.jsx)(t.h3,{id:`chart-integration`,children:`Chart Integration`}),`
`,(0,v.jsx)(t.p,{children:`The chart integrates with the chart context system for consistent behavior across chart types:`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Automatic chart ID generation for accessibility`}),`
`,(0,v.jsx)(t.li,{children:`Theme consistency across multiple charts`}),`
`,(0,v.jsx)(t.li,{children:`Legend item registration for cross-chart interactions`}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`migration`,children:`Migration`}),`
`,(0,v.jsx)(t.h3,{id:`from-full-pie-charts`,children:`From Full Pie Charts`}),`
`,(0,v.jsx)(t.p,{children:`Semi-circle charts use the same data format as full pie charts, making migration straightforward:`}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`// Full pie chart
<PieChart
	data={ data }
	size={ 400 }
/>

// Semi-circle chart (uses width instead of size)
<PieSemiCircleChart
	data={ data }
	width={ 400 }
/>`}),`
`,(0,v.jsx)(t.h3,{id:`key-differences-from-full-pie-charts`,children:`Key Differences from Full Pie Charts`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Aspect Ratio`}),`: Semi-circle charts have a 2:1 width-to-height ratio`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Space Efficiency`}),`: Takes up approximately 50% less vertical space`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Data Validation`}),`: Percentages don't need to sum to 100 (allows for partial data representation)`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Positioning`}),`: Different internal positioning calculations for labels and legends`]}),`
`]}),`
`,(0,v.jsx)(t.h3,{id:`data-validation-differences`,children:`Data Validation Differences`}),`
`,(0,v.jsx)(t.p,{children:`Unlike full pie charts that require percentages to sum to exactly 100:`}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`// Full pie chart - must sum to 100
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
];`})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=t(),s(),r(),m()}))();export{_ as default};