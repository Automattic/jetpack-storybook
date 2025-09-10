(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9664],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":((c,t,r)=>{"use strict";r.d(t,{R:()=>s,x:()=>o});var i=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},h=i.createContext(e);function s(d){const l=i.useContext(h);return i.useMemo(function(){return typeof d=="function"?d(l):{...l,...d}},[l,d])}function o(d){let l;return d.disableParentContext?l=typeof d.components=="function"?d.components(e):d.components||e:l=s(d.components),i.createElement(h.Provider,{value:l},d.children)}}),"../charts/src/components/pie-chart/stories/index.docs.mdx":((c,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var i=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),h=r("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),s=r("../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist/blocks.mjs"),o=r("../charts/src/components/pie-chart/stories/index.stories.tsx");function d(a){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,h.R)(),...a.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.W8,{title:"JS Packages/Charts/Types/Pie Chart",of:o}),`
`,(0,e.jsx)(n.h1,{id:"pie-chart",children:"Pie Chart"}),`
`,(0,e.jsx)(n.p,{children:"Pie Charts visualize proportional data as circular segments, making it easy to understand parts of a whole. They excel at showing percentage breakdowns and comparative relationships between categories."}),`
`,(0,e.jsx)(s.Hl,{of:o.Default}),`
`,(0,e.jsx)(n.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsxs)(n.p,{children:["The Pie Chart component provides a flexible, accessible, and highly customizable solution for displaying proportional data. Built on ",(0,e.jsx)(n.code,{children:"@visx/shape"}),", it supports both pie and donut chart variations, interactive tooltips, legends, and customizable styling with gap control, corner rounding, and thickness adjustment:"]}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:`import { PieChart } from '@automattic/charts';

  <PieChart
  	data={ data }
  	withTooltips={ true }
  	showLegend={ true }
  />`}),`
`,(0,e.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(n.h3,{id:"simple-pie-chart",children:"Simple Pie Chart"}),`
`,(0,e.jsxs)(n.p,{children:["The simplest pie chart requires only a ",(0,e.jsx)(n.code,{children:"data"})," prop with percentage-based data:"]}),`
`,(0,e.jsx)(s.Hl,{of:o.Default}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:`<PieChart
	size={ 400 }
	data={[
		{ label: 'MacOS', value: 30000, valueDisplay: '30K', percentage: 23 },
		{ label: 'Linux', value: 22000, valueDisplay: '22K', percentage: 17 },
		{ label: 'Windows', value: 80000, valueDisplay: '80K', percentage: 60 },
	]}
/>`}),`
`,(0,e.jsx)(n.h3,{id:"required-props",children:"Required Props"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"data"})}),": Array of ",(0,e.jsx)(n.code,{children:"DataPointPercentage"})," objects containing label, value, and percentage"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"size"})}),": Diameter of the chart in pixels (when not using responsive mode)"]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"optional-props",children:"Optional Props"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"padding"})})," (default: ",(0,e.jsx)(n.code,{children:"20"}),"): Padding around the chart in pixels"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"withTooltips"})})," (default: ",(0,e.jsx)(n.code,{children:"false"}),"): Enables interactive tooltips on hover"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"showLegend"})})," (default: ",(0,e.jsx)(n.code,{children:"false"}),"): Shows a legend for the chart data"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"thickness"})})," (default: ",(0,e.jsx)(n.code,{children:"1"}),"): Thickness of the pie chart segments (0-1). Values less than 1 create donut charts"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"gapScale"})})," (default: ",(0,e.jsx)(n.code,{children:"0"}),"): Scale of gaps between segments (0-1)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"cornerScale"})})," (default: ",(0,e.jsx)(n.code,{children:"0"}),"): Scale of corner rounding for segments (0-1)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"children"})}),": Optional React node to render inside the chart center (useful for donut charts)"]}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"composition-api",children:"Composition API"}),`
`,(0,e.jsx)(n.p,{children:"The Pie Chart now supports a compound component pattern for advanced customization:"}),`
`,(0,e.jsx)(s.Hl,{of:o.CompositionAPI}),`
`,(0,e.jsx)(n.h3,{id:"using-compound-components",children:"Using Compound Components"}),`
`,(0,e.jsx)(n.p,{children:"The composition API allows you to add custom SVG and HTML elements to your charts:"}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:`<PieChart data={ data } size={ 400 }>
{/* HTML elements rendered outside the SVG */}
<PieChart.HTML>
	<h3>Chart Title</h3>
</PieChart.HTML>

{/* SVG elements rendered inside the chart */}
<PieChart.SVG>
	<text x={ 0 } y={ 0 } textAnchor="middle">
		Center Text
	</text>
</PieChart.SVG>

{/* More HTML elements */}
<PieChart.HTML>
	<PieChart.Legend position="bottom" />
	<p>Additional information</p>
</PieChart.HTML>
</PieChart>`}),`
`,(0,e.jsx)(n.h3,{id:"benefits-of-composition-api",children:"Benefits of Composition API"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Clear Intent"}),": Use ",(0,e.jsx)(n.code,{children:"PieChart.SVG"})," for SVG elements and ",(0,e.jsx)(n.code,{children:"PieChart.HTML"})," for HTML elements"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Type Safety"}),": TypeScript knows where each element type belongs"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Flexibility"}),": Add custom visualizations, annotations, or UI elements"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Backward Compatible"}),": Existing implementations continue to work unchanged"]}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"interactive-features",children:"Interactive Features"}),`
`,(0,e.jsx)(n.h3,{id:"tooltips",children:"Tooltips"}),`
`,(0,e.jsx)(n.p,{children:"Enable interactive tooltips that display data information on hover:"}),`
`,(0,e.jsx)(s.Hl,{of:o.WithTooltips}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:`<PieChart
	size={ 400 }
	data={ data }
	withTooltips={ true }
/>`}),`
`,(0,e.jsx)(n.h3,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,(0,e.jsxs)(n.p,{children:["The Pie Chart component supports responsive sizing by omitting the ",(0,e.jsx)(n.code,{children:"size"})," prop:"]}),`
`,(0,e.jsx)(s.Hl,{of:o.Responsiveness}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:`// Responsive - fills parent container
<PieChart
	data={ data }
	maxWidth={ 600 }
	aspectRatio={ 1 }
/>

  // Fixed size
  <PieChart
  	size={ 400 }
  	data={ data }
  />`}),`
`,(0,e.jsx)(n.h3,{id:"data-validation-and-error-handling",children:"Data Validation and Error Handling"}),`
`,(0,e.jsx)(n.p,{children:"The component includes built-in data validation with helpful error states:"}),`
`,(0,e.jsx)(s.Hl,{of:o.ErrorStates}),`
`,(0,e.jsx)(n.p,{children:"The chart validates:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Empty data"}),": Shows appropriate message when no data is provided"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Percentage totals"}),": Ensures percentages sum to 100%"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Negative values"}),": Prevents invalid negative values"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Single data points"}),": Handles edge cases gracefully"]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"legend-positioning",children:"Legend Positioning"}),`
`,(0,e.jsx)(n.p,{children:"Control legend alignment and positioning:"}),`
`,(0,e.jsx)(s.Hl,{of:o.CustomLegendPositioning}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:`<PieChart
	size={ 400 }
	data={ data }
	showLegend={ true }
	legendAlignment="end"
	legendPosition="top"
/>`}),`
`,(0,e.jsx)(n.h3,{id:"vertical-legend",children:"Vertical Legend"}),`
`,(0,e.jsx)(n.p,{children:"Use vertical orientation for space-efficient legend placement:"}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:`<PieChart
	size={ 400 }
	data={ data }
	showLegend={ true }
	legendOrientation="vertical"
	legendAlignment="end"
	legendPosition="top"
/>`}),`
`,(0,e.jsx)(n.h2,{id:"styling-and-customization",children:"Styling and Customization"}),`
`,(0,e.jsx)(n.h3,{id:"visual-styling-options",children:"Visual Styling Options"}),`
`,(0,e.jsx)(n.p,{children:"The Pie Chart supports various visual customizations:"}),`
`,(0,e.jsx)(n.h4,{id:"gaps-between-segments",children:"Gaps Between Segments"}),`
`,(0,e.jsxs)(n.p,{children:["Use ",(0,e.jsx)(n.code,{children:"gapScale"})," to add spacing between chart segments:"]}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:`<PieChart
	data={ data }
	gapScale={ 0.05 } // 5% gap scale
/>`}),`
`,(0,e.jsx)(n.h3,{id:"custom-colors",children:"Custom Colors"}),`
`,(0,e.jsx)(n.p,{children:"Override theme colors by providing color values in data:"}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:`const dataWithColors = [
	{
		label: 'MacOS',
		value: 30000,
		valueDisplay: '30K',
		percentage: 23,
		color: '#007cba' // Custom blue
	},
	{
		label: 'Linux',
		value: 22000,
		valueDisplay: '22K',
		percentage: 17,
		color: '#f56565' // Custom red
	},
	{
		label: 'Windows',
		value: 80000,
		valueDisplay: '80K',
		percentage: 60,
		color: '#48bb78' // Custom green
	},
];

  <PieChart data={ dataWithColors } />`}),`
`,(0,e.jsx)(n.h3,{id:"label-colors-and-styling",children:"Label Colors and Styling"}),`
`,(0,e.jsx)(s.Hl,{of:o.CustomLabelColors}),`
`,(0,e.jsx)(n.p,{children:"The Pie Chart supports customizable label colors through the theme system:"}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:`import { GlobalChartsProvider } from '@automattic/charts';

const customTheme = {
...defaultTheme,
labelTextColor: '#FFFFFF', // White text for labels
labelBackgroundColor: 'rgba(0, 0, 0, 0.8)', // Enable dark background (transparent by default)
};

<GlobalChartsProvider theme={ customTheme }>
<PieChart data={ data } />
</GlobalChartsProvider>`}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Label Color Properties:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"labelTextColor"})})," - Controls the color of text displayed on pie chart segments. Defaults to ",(0,e.jsx)(n.code,{children:"#FFFFFF"})," (white) to match original behavior."]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"labelBackgroundColor"})})," - Controls the background color of labels. Defaults to ",(0,e.jsx)(n.code,{children:"transparent"})," (no background). When set to any color value, creates a rounded rectangle behind each label for enhanced readability. Supports any CSS color including transparency (e.g., ",(0,e.jsx)(n.code,{children:"rgba(0, 0, 0, 0.7)"}),")."]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Best Practices:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["Use high contrast between ",(0,e.jsx)(n.code,{children:"labelTextColor"})," and ",(0,e.jsx)(n.code,{children:"labelBackgroundColor"})," for optimal readability"]}),`
`,(0,e.jsxs)(n.li,{children:["Consider semi-transparent backgrounds (",(0,e.jsx)(n.code,{children:"rgba()"}),") to maintain visual connection to segment colors"]}),`
`,(0,e.jsx)(n.li,{children:"Test with different segment colors to ensure labels remain visible"}),`
`,(0,e.jsxs)(n.li,{children:["Use ",(0,e.jsx)(n.code,{children:"labelBackgroundColor"})," when segment colors are too varied or bright for consistent text visibility"]}),`
`,(0,e.jsx)(n.li,{children:"Consider accessibility guidelines when choosing color combinations"}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"theme-integration",children:"Theme Integration"}),`
`,(0,e.jsxs)(n.p,{children:["Pie Charts automatically integrate with the chart theme system, inheriting colors, typography, and styling from the active theme. Custom themes can be applied using the ",(0,e.jsx)(n.code,{children:"GlobalChartsProvider"}),":"]}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:`import { GlobalChartsProvider, jetpackTheme } from '@automattic/charts';

  <GlobalChartsProvider theme={ jetpackTheme }>
  	<PieChart data={ data } />
  </GlobalChartsProvider>`}),`
`,(0,e.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsx)(n.h3,{id:"piechart",children:"PieChart"}),`
`,(0,e.jsx)(n.p,{children:"Main component for rendering pie and donut charts."}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Props:"})}),`
`,(0,e.jsxs)(n.table,{children:[(0,e.jsx)(n.thead,{children:(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.th,{children:"Prop"}),(0,e.jsx)(n.th,{children:"Type"}),(0,e.jsx)(n.th,{children:"Default"}),(0,e.jsx)(n.th,{children:"Description"})]})}),(0,e.jsxs)(n.tbody,{children:[(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"data"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"DataPointPercentage[]"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsxs)(n.td,{children:[(0,e.jsx)(n.strong,{children:"Required."})," Array of data objects with label, value, and percentage"]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"size"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Diameter of the chart in pixels (omit for responsive behavior)"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"thickness"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"1"})}),(0,e.jsx)(n.td,{children:"Thickness of the pie chart segments (0-1). Values less than 1 create donut charts"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"padding"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"20"})}),(0,e.jsx)(n.td,{children:"Padding around the chart in pixels"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"gapScale"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"0"})}),(0,e.jsx)(n.td,{children:"Scale of gaps between segments (0-1)"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"cornerScale"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"0"})}),(0,e.jsx)(n.td,{children:"Scale of corner rounding for segments (0-1)"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"withTooltips"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsx)(n.td,{children:"Enable interactive tooltips on hover"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"showLegend"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsx)(n.td,{children:"Display chart legend"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendOrientation"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'horizontal' | 'vertical'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'horizontal'"})}),(0,e.jsx)(n.td,{children:"Legend layout direction"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendAlignment"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'start' | 'center' | 'end'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'center'"})}),(0,e.jsx)(n.td,{children:"Legend alignment within its position"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendPosition"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'top' | 'bottom'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'bottom'"})}),(0,e.jsx)(n.td,{children:"Legend position (where the legend appears)"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendShape"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"LegendShape"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'circle'"})}),(0,e.jsx)(n.td,{children:"Shape of legend markers"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"children"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"ReactNode"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Optional content to render inside chart center (useful for donut charts)"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"className"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Additional CSS class names"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"chartId"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Custom chart identifier for accessibility"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"maxWidth"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Maximum width for responsive charts"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"aspectRatio"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"1"})}),(0,e.jsx)(n.td,{children:"Aspect ratio for responsive charts"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"resizeDebounceTime"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"100"})}),(0,e.jsx)(n.td,{children:"Debounce time for resize events (ms)"})]})]})]}),`
`,(0,e.jsx)(n.h3,{id:"theme-properties",children:"Theme Properties"}),`
`,(0,e.jsx)(n.p,{children:"The following properties can be customized via the theme system:"}),`
`,(0,e.jsxs)(n.table,{children:[(0,e.jsx)(n.thead,{children:(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.th,{children:"Prop"}),(0,e.jsx)(n.th,{children:"Type"}),(0,e.jsx)(n.th,{children:"Default"}),(0,e.jsx)(n.th,{children:"Description"})]})}),(0,e.jsxs)(n.tbody,{children:[(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"labelTextColor"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'#FFFFFF'"})}),(0,e.jsx)(n.td,{children:"Color of text displayed on pie chart segments"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"labelBackgroundColor"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'transparent'"})}),(0,e.jsx)(n.td,{children:"Background color for labels. Set to any color value to enable label backgrounds"})]})]})]}),`
`,(0,e.jsx)(n.h3,{id:"compound-components",children:"Compound Components"}),`
`,(0,e.jsx)(n.h4,{id:"piechartsvg",children:"PieChart.SVG"}),`
`,(0,e.jsx)(n.p,{children:"Container for SVG elements to be rendered inside the chart area."}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<PieChart.SVG>
  <text x={0} y={0}>Center Text</text>
</PieChart.SVG>
`})}),`
`,(0,e.jsx)(n.h4,{id:"piecharthtml",children:"PieChart.HTML"}),`
`,(0,e.jsx)(n.p,{children:"Container for HTML elements to be rendered outside the SVG area."}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<PieChart.HTML>
  <h3>Chart Title</h3>
  <PieChart.Legend />
</PieChart.HTML>
`})}),`
`,(0,e.jsx)(n.h4,{id:"piechartlegend",children:"PieChart.Legend"}),`
`,(0,e.jsx)(n.p,{children:"The Legend component for displaying chart data labels. Can be used either as a prop or within composition:"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`// As a prop
<PieChart showLegend={true} legendPosition="bottom" />

// With composition
<PieChart>
  <PieChart.Legend position="bottom" orientation="horizontal" />
</PieChart>
`})}),`
`,(0,e.jsx)(n.h3,{id:"datapointpercentage-type",children:"DataPointPercentage Type"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type DataPointPercentage = {
	/** Label for the data point */
	label: string;
	/** Numerical value */
	value: number;
	/** Formatted value for display */
	valueDisplay?: string;
	/** Percentage value (must sum to 100 across all data points) */
	percentage: number;
	/** Optional custom color override */
	color?: string;
};
`})})]})}function l(a={}){const{wrapper:n}={...(0,h.R)(),...a.components};return n?(0,e.jsx)(n,{...a,children:(0,e.jsx)(d,{...a})}):d(a)}}),"../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive":(c=>{function t(r){var i=new Error("Cannot find module '"+r+"'");throw i.code="MODULE_NOT_FOUND",i}t.keys=()=>[],t.resolve=t,t.id="../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive",c.exports=t}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive":(c=>{function t(r){var i=new Error("Cannot find module '"+r+"'");throw i.code="MODULE_NOT_FOUND",i}t.keys=()=>[],t.resolve=t,t.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive",c.exports=t}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive":(c=>{function t(r){var i=new Error("Cannot find module '"+r+"'");throw i.code="MODULE_NOT_FOUND",i}t.keys=()=>[],t.resolve=t,t.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive",c.exports=t})}]);
