(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5608],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(o,i,s)=>{"use strict";s.d(i,{R:()=>t,x:()=>l});var r=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},h=r.createContext(e);function t(d){const a=r.useContext(h);return r.useMemo(function(){return typeof d=="function"?d(a):{...a,...d}},[a,d])}function l(d){let a;return d.disableParentContext?a=typeof d.components=="function"?d.components(e):d.components||e:a=t(d.components),r.createElement(h.Provider,{value:a},d.children)}},"../charts/src/components/pie-semi-circle-chart/stories/index.docs.mdx":(o,i,s)=>{"use strict";s.r(i),s.d(i,{default:()=>a});var r=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),h=s("../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),t=s("../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist/blocks.mjs"),l=s("../charts/src/components/pie-semi-circle-chart/stories/index.stories.tsx");function d(c){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,h.R)(),...c.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.W8,{title:"JS Packages/Charts/Types/Pie Semi Circle Chart",of:l}),`
`,(0,e.jsx)(n.h1,{id:"pie-semi-circle-chart",children:"Pie Semi Circle Chart"}),`
`,(0,e.jsx)(n.p,{children:"The Pie Semi Circle Chart displays proportional data in a semi-circular format, providing an elegant alternative to full pie charts with better space utilization for dashboards and compact layouts."}),`
`,(0,e.jsx)(t.Hl,{of:l.Default}),`
`,(0,e.jsx)(n.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsx)(n.p,{children:"The PieSemiCircleChart component renders data as segments in a semi-circular arc (180 degrees), making it ideal for displaying percentages, categories, or proportional breakdowns in a visually compact format. This chart type is particularly effective in dashboards where vertical space is limited."}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`import { PieSemiCircleChart } from '@automattic/charts';

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
`,(0,e.jsx)(n.p,{children:"The chart automatically validates data to ensure positive values and meaningful percentages, displaying error states for invalid data configurations."}),`
`,(0,e.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(n.h3,{id:"basic-semi-circle-chart",children:"Basic Semi-Circle Chart"}),`
`,(0,e.jsx)(n.p,{children:"The simplest implementation requires only data with proper percentage values. Unlike full pie charts, semi-circle charts are ideal when you want to emphasize the relationship between parts while conserving vertical space:"}),`
`,(0,e.jsx)(t.Hl,{of:l.Default}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`const basicData = [
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
`,(0,e.jsx)(n.h3,{id:"required-props",children:"Required Props"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"data"})}),": Array of ",(0,e.jsx)(n.code,{children:"DataPointPercentage"})," objects containing label, value, and percentage"]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"optional-props",children:"Optional Props"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"width"})}),": Chart width in pixels (height is automatically calculated as half the width)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"thickness"})}),": Ring thickness as a value between 0 and 1 (default: 0.4)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"clockwise"})}),": Direction of rendering - true for clockwise, false for counter-clockwise (default: true)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"label"})}),": Text displayed above the chart"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"note"})}),": Additional text displayed below the label"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"withTooltips"})}),": Enable interactive tooltips on hover (default: false)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"showLegend"})}),": Display legend below the chart (default: false)"]}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"chart-variations",children:"Chart Variations"}),`
`,(0,e.jsx)(n.h3,{id:"with-interactive-tooltips",children:"With Interactive Tooltips"}),`
`,(0,e.jsxs)(n.p,{children:["Add ",(0,e.jsx)(n.code,{children:"withTooltips"})," to enable hover interactions that display detailed information about each segment:"]}),`
`,(0,e.jsx)(t.Hl,{of:l.WithTooltips}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<PieSemiCircleChart
data={ data }
width={ 600 }
withTooltips={ true }
label="OS Distribution"
note="Hover segments for details"
/>`}),`
`,(0,e.jsx)(n.h3,{id:"counter-clockwise-direction",children:"Counter-Clockwise Direction"}),`
`,(0,e.jsxs)(n.p,{children:["Use the ",(0,e.jsx)(n.code,{children:"clockwise"})," prop to control the rendering direction of segments:"]}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<PieSemiCircleChart
data={ data }
width={ 600 }
clockwise={ false }
label="Counter-clockwise Rendering"
/>`}),`
`,(0,e.jsx)(n.h3,{id:"different-thickness-values",children:"Different Thickness Values"}),`
`,(0,e.jsxs)(n.p,{children:["Adjust the visual weight of the chart using the ",(0,e.jsx)(n.code,{children:"thickness"})," prop:"]}),`
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
`,(0,e.jsx)(n.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,(0,e.jsx)(n.h3,{id:"responsive-width",children:"Responsive Width"}),`
`,(0,e.jsxs)(n.p,{children:["The chart can be made responsive by omitting the ",(0,e.jsx)(n.code,{children:"width"})," prop, allowing it to adapt to its container:"]}),`
`,(0,e.jsx)(t.Hl,{of:l.Responsiveness}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`// Responsive chart adapts to container width
<PieSemiCircleChart
data={ data }
thickness={ 0.4 }
label="Responsive Chart"
withTooltips={ true }
/>`}),`
`,(0,e.jsx)(n.p,{children:"The responsive behavior maintains the 2:1 aspect ratio (width:height) and scales proportionally."}),`
`,(0,e.jsx)(n.h2,{id:"styling-and-customization",children:"Styling and Customization"}),`
`,(0,e.jsx)(n.h3,{id:"custom-colors",children:"Custom Colors"}),`
`,(0,e.jsxs)(n.p,{children:["Segments automatically use theme colors, but you can override individual segment colors using the ",(0,e.jsx)(n.code,{children:"color"})," property in your data:"]}),`
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
`,(0,e.jsx)(n.h3,{id:"label-and-note-styling",children:"Label and Note Styling"}),`
`,(0,e.jsx)(n.p,{children:"The chart includes built-in styling for labels and notes with appropriate typography hierarchy:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Label"}),": 16px, font-weight 600, positioned above the chart"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Note"}),": 14px, positioned below the label"]}),`
`]}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<PieSemiCircleChart
data={ data }
width={ 600 }
label="Primary Heading"
note="Secondary information or context"
/>`}),`
`,(0,e.jsx)(n.h3,{id:"theme-integration",children:"Theme Integration"}),`
`,(0,e.jsx)(n.p,{children:"The chart automatically integrates with the charts theme system, using predefined colors, spacing, and typography. Theme colors are applied in sequence to chart segments based on their index in the data array."}),`
`,(0,e.jsx)(n.h2,{id:"legend-integration",children:"Legend Integration"}),`
`,(0,e.jsx)(n.h3,{id:"legend-positioning",children:"Legend Positioning"}),`
`,(0,e.jsx)(n.p,{children:"Control legend placement using alignment properties:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`// Legend at top-right
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
`,(0,e.jsx)(n.h3,{id:"legend-shape-options",children:"Legend Shape Options"}),`
`,(0,e.jsx)(n.p,{children:"Customize legend indicators with different shapes:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<PieSemiCircleChart
data={ data }
showLegend={ true }
legendShape="rect" // Options: 'rect', 'circle', 'line'
/>`}),`
`,(0,e.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),`
`,(0,e.jsx)(n.h3,{id:"data-validation",children:"Data Validation"}),`
`,(0,e.jsx)(n.p,{children:"The chart includes comprehensive data validation with user-friendly error messages:"}),`
`,(0,e.jsx)(t.Hl,{of:l.ErrorStates}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Validation Rules:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Data array cannot be empty"}),`
`,(0,e.jsx)(n.li,{children:"Values and percentages must be non-negative"}),`
`,(0,e.jsx)(n.li,{children:"Total percentage must be greater than 0 (unlike full pie charts, doesn't need to equal 100)"}),`
`]}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Error States Handled:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Empty Data"}),': Displays "No data available"']}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Negative Values"}),': Shows "Invalid data: Negative values are not allowed"']}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Zero Total"}),': Displays "Invalid percentage total: Must be greater than 0"']}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"single-data-point",children:"Single Data Point"}),`
`,(0,e.jsx)(n.p,{children:"The chart gracefully handles single data points, rendering a complete semi-circle:"}),`
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
`,(0,e.jsx)(n.h2,{id:"advanced-features",children:"Advanced Features"}),`
`,(0,e.jsx)(n.h3,{id:"value-display-formatting",children:"Value Display Formatting"}),`
`,(0,e.jsxs)(n.p,{children:["Use the ",(0,e.jsx)(n.code,{children:"valueDisplay"})," property to show formatted values in tooltips and legends:"]}),`
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
`,(0,e.jsx)(n.h3,{id:"chart-integration",children:"Chart Integration"}),`
`,(0,e.jsx)(n.p,{children:"The chart integrates with the chart context system for consistent behavior across chart types:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Automatic chart ID generation for accessibility"}),`
`,(0,e.jsx)(n.li,{children:"Theme consistency across multiple charts"}),`
`,(0,e.jsx)(n.li,{children:"Legend item registration for cross-chart interactions"}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsx)(n.h3,{id:"piesemicirclechart",children:"PieSemiCircleChart"}),`
`,(0,e.jsx)(n.p,{children:"Main component for rendering semi-circular pie charts."}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Props:"})}),`
`,(0,e.jsxs)(n.table,{children:[(0,e.jsx)(n.thead,{children:(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.th,{children:"Prop"}),(0,e.jsx)(n.th,{children:"Type"}),(0,e.jsx)(n.th,{children:"Default"}),(0,e.jsx)(n.th,{children:"Description"})]})}),(0,e.jsxs)(n.tbody,{children:[(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"data"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"DataPointPercentage[]"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsxs)(n.td,{children:[(0,e.jsx)(n.strong,{children:"Required."})," Array of data points to display"]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"width"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"400"})}),(0,e.jsx)(n.td,{children:"Width of the chart in pixels (height is automatically half of width)"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"thickness"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"0.4"})}),(0,e.jsx)(n.td,{children:"Thickness of the pie segments (0-1, where 1 is full thickness)"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"clockwise"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"true"})}),(0,e.jsx)(n.td,{children:"Direction of segment rendering"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"label"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Text displayed above the chart"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"note"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Additional text displayed below the label"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"withTooltips"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsx)(n.td,{children:"Enable interactive tooltips on hover"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"showLegend"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsx)(n.td,{children:"Display legend below the chart"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendOrientation"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'horizontal' | 'vertical'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'horizontal'"})}),(0,e.jsx)(n.td,{children:"Legend layout direction"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendAlignment"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'start' | 'center' | 'end'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'center'"})}),(0,e.jsx)(n.td,{children:"Legend alignment within its position"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendPosition"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'top' | 'bottom'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'bottom'"})}),(0,e.jsx)(n.td,{children:"Legend position (where the legend appears)"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendShape"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'circle' | 'rect' | 'line'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'circle'"})}),(0,e.jsx)(n.td,{children:"Shape of legend indicators"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"className"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Additional CSS class for the container"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"chartId"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Optional unique identifier (auto-generated if not provided)"})]})]})]}),`
`,(0,e.jsx)(n.h3,{id:"datapointpercentage-type",children:"DataPointPercentage Type"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type DataPointPercentage = {
	/** Label for the data point */
	label: string;
	/** Numerical value */
	value: number;
	/** Formatted value for display in tooltips and legends */
	valueDisplay?: string;
	/** Percentage value (must be positive, doesn't need to sum to 100) */
	percentage: number;
	/** Optional custom color override */
	color?: string;
};
`})}),`
`,(0,e.jsx)(n.h2,{id:"migration",children:"Migration"}),`
`,(0,e.jsx)(n.h3,{id:"from-full-pie-charts",children:"From Full Pie Charts"}),`
`,(0,e.jsx)(n.p,{children:"Semi-circle charts use the same data format as full pie charts, making migration straightforward:"}),`
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
`,(0,e.jsx)(n.h3,{id:"key-differences-from-full-pie-charts",children:"Key Differences from Full Pie Charts"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Aspect Ratio"}),": Semi-circle charts have a 2:1 width-to-height ratio"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Space Efficiency"}),": Takes up approximately 50% less vertical space"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Data Validation"}),": Percentages don't need to sum to 100 (allows for partial data representation)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Positioning"}),": Different internal positioning calculations for labels and legends"]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"data-validation-differences",children:"Data Validation Differences"}),`
`,(0,e.jsx)(n.p,{children:"Unlike full pie charts that require percentages to sum to exactly 100:"}),`
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
];`})]})}function a(c={}){const{wrapper:n}={...(0,h.R)(),...c.components};return n?(0,e.jsx)(n,{...c,children:(0,e.jsx)(d,{...c})}):d(c)}},"../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive":o=>{function i(s){var r=new Error("Cannot find module '"+s+"'");throw r.code="MODULE_NOT_FOUND",r}i.keys=()=>[],i.resolve=i,i.id="../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive",o.exports=i},"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive":o=>{function i(s){var r=new Error("Cannot find module '"+s+"'");throw r.code="MODULE_NOT_FOUND",r}i.keys=()=>[],i.resolve=i,i.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive",o.exports=i},"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive":o=>{function i(s){var r=new Error("Cannot find module '"+s+"'");throw r.code="MODULE_NOT_FOUND",r}i.keys=()=>[],i.resolve=i,i.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive",o.exports=i}}]);
