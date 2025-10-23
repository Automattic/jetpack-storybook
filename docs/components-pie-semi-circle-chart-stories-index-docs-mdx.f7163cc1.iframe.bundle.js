(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5608],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.25_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":((d,i,a)=>{"use strict";a.d(i,{R:()=>n,x:()=>l});var s=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},h=s.createContext(e);function n(r){const o=s.useContext(h);return s.useMemo(function(){return typeof r=="function"?r(o):{...o,...r}},[o,r])}function l(r){let o;return r.disableParentContext?o=typeof r.components=="function"?r.components(e):r.components||e:o=n(r.components),s.createElement(h.Provider,{value:o},r.children)}}),"../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.25_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive":(d=>{function i(a){var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}i.keys=()=>[],i.resolve=i,i.id="../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.25_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive",d.exports=i}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive":(d=>{function i(a){var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}i.keys=()=>[],i.resolve=i,i.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive",d.exports=i}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive":(d=>{function i(a){var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}i.keys=()=>[],i.resolve=i,i.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive",d.exports=i}),"../charts/src/components/pie-semi-circle-chart/stories/index.docs.mdx":((d,i,a)=>{"use strict";a.r(i),a.d(i,{default:()=>o});var s=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),h=a("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.25_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),n=a("../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.25_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist/blocks.mjs"),l=a("../charts/src/components/pie-semi-circle-chart/stories/index.stories.tsx");function r(c){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,h.R)(),...c.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.W8,{title:"JS Packages/Charts/Types/Pie Semi Circle Chart",of:l}),`
`,(0,e.jsx)(t.h1,{id:"pie-semi-circle-chart",children:"Pie Semi Circle Chart"}),`
`,(0,e.jsx)(t.p,{children:"The Pie Semi Circle Chart displays proportional data in a semi-circular format, providing an elegant alternative to full pie charts with better space utilization for dashboards and compact layouts."}),`
`,(0,e.jsx)(n.Hl,{of:l.Default}),`
`,(0,e.jsx)(t.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsx)(t.p,{children:"The PieSemiCircleChart component renders data as segments in a semi-circular arc (180 degrees), making it ideal for displaying percentages, categories, or proportional breakdowns in a visually compact format. This chart type is particularly effective in dashboards where vertical space is limited."}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`import { PieSemiCircleChart } from '@automattic/charts';

const data = [
{
	label: 'MacOS',
	value: 30000,
	valueDisplay: '30K',
	percentage: 30,
},
{
	label: 'Linux',
	value: 22000,
	valueDisplay: '22K',
	percentage: 22,
},
{
	label: 'Windows',
	value: 48000,
	valueDisplay: '48K',
	percentage: 48,
},
];

<PieSemiCircleChart
data={ data }
width={ 600 }
thickness={ 0.4 }
label="Operating Systems"
note="Windows +10%"
withTooltips={ true }
showLegend={ true }
/>`}),`
`,(0,e.jsx)(t.p,{children:"The chart automatically validates data to ensure positive values and meaningful percentages, displaying error states for invalid data configurations."}),`
`,(0,e.jsx)(t.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsxs)(t.p,{children:["For detailed information about component props, types, and method signatures, see the ",(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-types-pie-semi-circle-chart-api-reference--docs",children:"Pie Semi Circle Chart API Reference"}),"."]}),`
`,(0,e.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(t.h3,{id:"basic-semi-circle-chart",children:"Basic Semi-Circle Chart"}),`
`,(0,e.jsx)(t.p,{children:"The simplest implementation requires only data with proper percentage values. Unlike full pie charts, semi-circle charts are ideal when you want to emphasize the relationship between parts while conserving vertical space:"}),`
`,(0,e.jsx)(n.Hl,{of:l.Default}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`const basicData = [
{
	label: 'Category A',
	value: 60,
	percentage: 60,
},
{
	label: 'Category B',
	value: 40,
	percentage: 40,
},
];

<PieSemiCircleChart
data={ basicData }
width={ 400 }
/>`}),`
`,(0,e.jsx)(t.h3,{id:"required-props",children:"Required Props"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"data"})}),": Array of ",(0,e.jsx)(t.code,{children:"DataPointPercentage"})," objects containing label, value, and percentage"]}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"optional-props",children:"Optional Props"}),`
`,(0,e.jsxs)(t.p,{children:["For detailed information about all optional props, see the ",(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-types-pie-semi-circle-chart-api-reference--docs",children:"Pie Semi Circle Chart API Reference"}),"."]}),`
`,(0,e.jsx)(t.h2,{id:"chart-variations",children:"Chart Variations"}),`
`,(0,e.jsx)(t.h3,{id:"with-interactive-tooltips",children:"With Interactive Tooltips"}),`
`,(0,e.jsxs)(t.p,{children:["Add ",(0,e.jsx)(t.code,{children:"withTooltips"})," to enable hover interactions that display detailed information about each segment:"]}),`
`,(0,e.jsx)(n.Hl,{of:l.WithTooltips}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<PieSemiCircleChart
data={ data }
width={ 600 }
withTooltips={ true }
label="OS Distribution"
note="Hover segments for details"
/>`}),`
`,(0,e.jsx)(t.h3,{id:"counter-clockwise-direction",children:"Counter-Clockwise Direction"}),`
`,(0,e.jsxs)(t.p,{children:["Use the ",(0,e.jsx)(t.code,{children:"clockwise"})," prop to control the rendering direction of segments:"]}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<PieSemiCircleChart
data={ data }
width={ 600 }
clockwise={ false }
label="Counter-clockwise Rendering"
/>`}),`
`,(0,e.jsx)(t.h3,{id:"different-thickness-values",children:"Different Thickness Values"}),`
`,(0,e.jsxs)(t.p,{children:["Adjust the visual weight of the chart using the ",(0,e.jsx)(t.code,{children:"thickness"})," prop:"]}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`// Thin ring (thickness: 0.2)
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
`,(0,e.jsx)(t.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,(0,e.jsx)(t.h3,{id:"responsive-width",children:"Responsive Width"}),`
`,(0,e.jsxs)(t.p,{children:["The chart can be made responsive by omitting the ",(0,e.jsx)(t.code,{children:"width"})," prop, allowing it to adapt to its container:"]}),`
`,(0,e.jsx)(n.Hl,{of:l.Responsiveness}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`// Responsive chart adapts to container width
<PieSemiCircleChart
data={ data }
thickness={ 0.4 }
label="Responsive Chart"
withTooltips={ true }
/>`}),`
`,(0,e.jsx)(t.p,{children:"The responsive behavior maintains the 2:1 aspect ratio (width:height) and scales proportionally."}),`
`,(0,e.jsx)(t.h2,{id:"styling-and-customization",children:"Styling and Customization"}),`
`,(0,e.jsx)(t.h3,{id:"custom-colors",children:"Custom Colors"}),`
`,(0,e.jsxs)(t.p,{children:["Segments automatically use theme colors, but you can override individual segment colors using the ",(0,e.jsx)(t.code,{children:"color"})," property in your data:"]}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`const customColorData = [
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
`,(0,e.jsx)(t.h3,{id:"label-and-note-styling",children:"Label and Note Styling"}),`
`,(0,e.jsx)(t.p,{children:"The chart includes built-in styling for labels and notes with appropriate typography hierarchy:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Label"}),": 16px, font-weight 600, positioned above the chart"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Note"}),": 14px, positioned below the label"]}),`
`]}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<PieSemiCircleChart
data={ data }
width={ 600 }
label="Primary Heading"
note="Secondary information or context"
/>`}),`
`,(0,e.jsx)(t.h3,{id:"theme-integration",children:"Theme Integration"}),`
`,(0,e.jsx)(t.p,{children:"The chart automatically integrates with the charts theme system, using predefined colors, spacing, and typography. Theme colors are applied in sequence to chart segments based on their index in the data array."}),`
`,(0,e.jsx)(t.h2,{id:"legend-integration",children:"Legend Integration"}),`
`,(0,e.jsx)(t.h3,{id:"legend-positioning",children:"Legend Positioning"}),`
`,(0,e.jsx)(t.p,{children:"Control legend placement using alignment properties:"}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`// Legend at top-right
<PieSemiCircleChart
data={ data }
showLegend={ true }
legendAlignment="end"
legendPosition="top"
/>

// Vertical legend on the right
<PieSemiCircleChart
data={ data }
showLegend={ true }
legendOrientation="vertical"
legendAlignment="end"
/>`}),`
`,(0,e.jsx)(t.h3,{id:"legend-shape-options",children:"Legend Shape Options"}),`
`,(0,e.jsx)(t.p,{children:"Customize legend indicators with different shapes:"}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<PieSemiCircleChart
data={ data }
showLegend={ true }
legendShape="rect" // Options: 'rect', 'circle', 'line'
/>`}),`
`,(0,e.jsx)(t.h2,{id:"error-handling",children:"Error Handling"}),`
`,(0,e.jsx)(t.h3,{id:"data-validation",children:"Data Validation"}),`
`,(0,e.jsx)(t.p,{children:"The chart includes comprehensive data validation with user-friendly error messages:"}),`
`,(0,e.jsx)(n.Hl,{of:l.ErrorStates}),`
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"Validation Rules:"})}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Data array cannot be empty"}),`
`,(0,e.jsx)(t.li,{children:"Values and percentages must be non-negative"}),`
`,(0,e.jsx)(t.li,{children:"Total percentage must be greater than 0 (unlike full pie charts, doesn't need to equal 100)"}),`
`]}),`
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"Error States Handled:"})}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Empty Data"}),': Displays "No data available"']}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Negative Values"}),': Shows "Invalid data: Negative values are not allowed"']}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Zero Total"}),': Displays "Invalid percentage total: Must be greater than 0"']}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"single-data-point",children:"Single Data Point"}),`
`,(0,e.jsx)(t.p,{children:"The chart gracefully handles single data points, rendering a complete semi-circle:"}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`const singlePointData = [
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
`,(0,e.jsx)(t.h2,{id:"advanced-features",children:"Advanced Features"}),`
`,(0,e.jsx)(t.h3,{id:"value-display-formatting",children:"Value Display Formatting"}),`
`,(0,e.jsxs)(t.p,{children:["Use the ",(0,e.jsx)(t.code,{children:"valueDisplay"})," property to show formatted values in tooltips and legends:"]}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`const formattedData = [
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
`,(0,e.jsx)(t.h3,{id:"chart-integration",children:"Chart Integration"}),`
`,(0,e.jsx)(t.p,{children:"The chart integrates with the chart context system for consistent behavior across chart types:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Automatic chart ID generation for accessibility"}),`
`,(0,e.jsx)(t.li,{children:"Theme consistency across multiple charts"}),`
`,(0,e.jsx)(t.li,{children:"Legend item registration for cross-chart interactions"}),`
`]}),`
`,(0,e.jsx)(t.h2,{id:"migration",children:"Migration"}),`
`,(0,e.jsx)(t.h3,{id:"from-full-pie-charts",children:"From Full Pie Charts"}),`
`,(0,e.jsx)(t.p,{children:"Semi-circle charts use the same data format as full pie charts, making migration straightforward:"}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`// Full pie chart
<PieChart
data={ data }
size={ 400 }
/>

// Semi-circle chart (uses width instead of size)
<PieSemiCircleChart
data={ data }
width={ 400 }
/>`}),`
`,(0,e.jsx)(t.h3,{id:"key-differences-from-full-pie-charts",children:"Key Differences from Full Pie Charts"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Aspect Ratio"}),": Semi-circle charts have a 2:1 width-to-height ratio"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Space Efficiency"}),": Takes up approximately 50% less vertical space"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Data Validation"}),": Percentages don't need to sum to 100 (allows for partial data representation)"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Positioning"}),": Different internal positioning calculations for labels and legends"]}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"data-validation-differences",children:"Data Validation Differences"}),`
`,(0,e.jsx)(t.p,{children:"Unlike full pie charts that require percentages to sum to exactly 100:"}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`// Full pie chart - must sum to 100
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
];`})]})}function o(c={}){const{wrapper:t}={...(0,h.R)(),...c.components};return t?(0,e.jsx)(t,{...c,children:(0,e.jsx)(r,{...c})}):r(c)}})}]);
