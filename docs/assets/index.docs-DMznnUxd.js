import{n as e}from"./chunk-zsgVPwQN.js";import{Km as t}from"./iframe-UEkBF0kZ.js";import{r as n}from"./react-DJ4KWvM3.js";import{t as r}from"./mdx-react-shim-C77VE1VM.js";import{i,n as a,r as o,t as s}from"./blocks-CLG4go0A.js";import{Animation as c,CompositionAPI as l,CustomLabelColors as u,Default as d,ErrorStates as f,WithCompositionLegend as p,WithSize as m,WithTooltips as h,n as g,t as _}from"./index.stories-B_Ux4Vx1.js";function v(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a,{title:`JS Packages/Charts Library/Charts/Pie Chart`,of:_}),`
`,(0,b.jsx)(t.h1,{id:`pie-chart`,children:`Pie Chart`}),`
`,(0,b.jsx)(t.p,{children:`Pie Charts visualize proportional data as circular segments, making it easy to understand parts of a whole. They excel at showing percentage breakdowns and comparative relationships between categories.`}),`
`,(0,b.jsx)(s,{of:d}),`
`,(0,b.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,b.jsxs)(t.p,{children:[`The Pie Chart component provides a flexible, accessible, and highly customizable solution for displaying proportional data. Built on `,(0,b.jsx)(t.code,{children:`@visx/shape`}),`, it supports both pie and donut chart variations, interactive tooltips, legends, and customizable styling with gap control, corner rounding, and thickness adjustment:`]}),`
`,(0,b.jsx)(o,{language:`jsx`,code:`import { PieChart } from '@automattic/charts';
import '@automattic/charts/style.css';

  <PieChart
  	data={ data }
  	withTooltips={ true }
  	showLegend={ true }
  />`}),`
`,(0,b.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,b.jsxs)(t.p,{children:[`For detailed information about component props, types, compound components, and theme properties, see the `,(0,b.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-pie-chart-api-reference--docs`,children:`Pie Chart API Reference`}),`.`]}),`
`,(0,b.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,b.jsx)(t.h3,{id:`simple-pie-chart`,children:`Simple Pie Chart`}),`
`,(0,b.jsxs)(t.p,{children:[`The simplest pie chart requires only a `,(0,b.jsx)(t.code,{children:`data`}),` prop with percentage-based data:`]}),`
`,(0,b.jsx)(s,{of:d}),`
`,(0,b.jsx)(o,{language:`jsx`,code:`<PieChart
	data={[
		{ label: 'MacOS', value: 30000, valueDisplay: '30K', percentage: 23 },
		{ label: 'Linux', value: 22000, valueDisplay: '22K', percentage: 17 },
		{ label: 'Windows', value: 80000, valueDisplay: '80K', percentage: 60 },
	]}
/>`}),`
`,(0,b.jsx)(t.h3,{id:`required-props`,children:`Required Props`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:(0,b.jsx)(t.code,{children:`data`})}),`: Array of `,(0,b.jsx)(t.code,{children:`DataPointPercentage`}),` objects containing label, value, and percentage`]}),`
`]}),`
`,(0,b.jsx)(t.h3,{id:`optional-props`,children:`Optional Props`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:(0,b.jsx)(t.code,{children:`size`})}),`: Maximum diameter of the pie in pixels. The pie shrinks if the container is smaller. When omitted, the pie fills available space.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:(0,b.jsx)(t.code,{children:`width`})}),` / `,(0,b.jsx)(t.strong,{children:(0,b.jsx)(t.code,{children:`height`})}),`: Explicit container dimensions in pixels. When omitted, the chart fills its parent.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:(0,b.jsx)(t.code,{children:`padding`})}),` (default: `,(0,b.jsx)(t.code,{children:`20`}),`): Padding around the chart in pixels`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:(0,b.jsx)(t.code,{children:`withTooltips`})}),` (default: `,(0,b.jsx)(t.code,{children:`false`}),`): Enables interactive tooltips on hover`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:(0,b.jsx)(t.code,{children:`showLegend`})}),` (default: `,(0,b.jsx)(t.code,{children:`false`}),`): Shows a legend for the chart data`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:(0,b.jsx)(t.code,{children:`thickness`})}),` (default: `,(0,b.jsx)(t.code,{children:`1`}),`): Thickness of the pie chart segments (0-1). Values less than 1 create donut charts`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:(0,b.jsx)(t.code,{children:`gapScale`})}),` (default: `,(0,b.jsx)(t.code,{children:`0`}),`): Scale of gaps between segments (0-1)`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:(0,b.jsx)(t.code,{children:`cornerScale`})}),` (default: `,(0,b.jsx)(t.code,{children:`0`}),`): Scale of corner rounding for segments (0-1)`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:(0,b.jsx)(t.code,{children:`gap`})}),` (default: `,(0,b.jsx)(t.code,{children:`'md'`}),`): Gap between chart elements (SVG, legend, children). Uses WordPress design system tokens.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:(0,b.jsx)(t.code,{children:`children`})}),`: Optional React node to render inside the chart center (useful for donut charts)`]}),`
`]}),`
`,(0,b.jsxs)(t.p,{children:[`For detailed prop information, compound components, and type definitions, see the `,(0,b.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-pie-chart-api-reference--docs`,children:`Pie Chart API Reference`}),`.`]}),`
`,(0,b.jsx)(t.h2,{id:`composition-api`,children:`Composition API`}),`
`,(0,b.jsx)(t.p,{children:`The Pie Chart now supports a compound component pattern for advanced customization:`}),`
`,(0,b.jsx)(s,{of:l}),`
`,(0,b.jsx)(t.h3,{id:`using-compound-components`,children:`Using Compound Components`}),`
`,(0,b.jsx)(t.p,{children:`The composition API allows you to add custom SVG and HTML elements to your charts:`}),`
`,(0,b.jsx)(o,{language:`jsx`,code:`<PieChart data={ data } size={ 400 }>
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
`,(0,b.jsx)(t.h3,{id:`benefits-of-composition-api`,children:`Benefits of Composition API`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Clear Intent`}),`: Use `,(0,b.jsx)(t.code,{children:`PieChart.SVG`}),` for SVG elements and `,(0,b.jsx)(t.code,{children:`PieChart.HTML`}),` for HTML elements`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Type Safety`}),`: TypeScript knows where each element type belongs`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Flexibility`}),`: Add custom visualizations, annotations, or UI elements`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Backward Compatible`}),`: Existing implementations continue to work unchanged`]}),`
`]}),`
`,(0,b.jsxs)(t.p,{children:[`For detailed information about compound components (`,(0,b.jsx)(t.code,{children:`PieChart.SVG`}),`, `,(0,b.jsx)(t.code,{children:`PieChart.HTML`}),`, `,(0,b.jsx)(t.code,{children:`PieChart.Legend`}),`), see the `,(0,b.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-pie-chart-api-reference--docs`,children:`Pie Chart API Reference`}),`.`]}),`
`,(0,b.jsx)(t.h2,{id:`interactive-features`,children:`Interactive Features`}),`
`,(0,b.jsx)(t.h3,{id:`tooltips`,children:`Tooltips`}),`
`,(0,b.jsx)(t.p,{children:`Enable interactive tooltips that display data information on hover:`}),`
`,(0,b.jsx)(s,{of:h}),`
`,(0,b.jsx)(o,{language:`jsx`,code:`<PieChart
	size={ 400 }
	data={ data }
	withTooltips={ true }
/>`}),`
`,(0,b.jsx)(t.h3,{id:`data-validation-and-error-handling`,children:`Data Validation and Error Handling`}),`
`,(0,b.jsx)(t.p,{children:`The component includes built-in data validation with helpful error states:`}),`
`,(0,b.jsx)(s,{of:f}),`
`,(0,b.jsx)(t.p,{children:`The chart validates:`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Empty data`}),`: Shows appropriate message when no data is provided`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Percentage totals`}),`: Ensures percentages sum to 100%`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Negative values`}),`: Prevents invalid negative values`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Single data points`}),`: Handles edge cases gracefully`]}),`
`]}),`
`,(0,b.jsx)(t.h2,{id:`legends`,children:`Legends`}),`
`,(0,b.jsxs)(t.p,{children:[`Use the composition API to add a legend by placing `,(0,b.jsx)(t.code,{children:`<PieChart.Legend />`}),` as a child:`]}),`
`,(0,b.jsx)(s,{of:p}),`
`,(0,b.jsx)(o,{language:`jsx`,code:`<PieChart size={ 400 } data={ data }>
	<PieChart.Legend />
</PieChart>`}),`
`,(0,b.jsxs)(t.p,{children:[`For full legend configuration options — positioning, orientation, shapes, interactivity, and the composition API — see the `,(0,b.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-components-legend--docs`,children:`Legend component docs`}),`.`]}),`
`,(0,b.jsx)(t.h2,{id:`styling-and-customization`,children:`Styling and Customization`}),`
`,(0,b.jsx)(t.h3,{id:`visual-styling-options`,children:`Visual Styling Options`}),`
`,(0,b.jsx)(t.p,{children:`The Pie Chart supports various visual customizations:`}),`
`,(0,b.jsx)(t.h4,{id:`gaps-between-segments`,children:`Gaps Between Segments`}),`
`,(0,b.jsxs)(t.p,{children:[`Use `,(0,b.jsx)(t.code,{children:`gapScale`}),` to add spacing between chart segments:`]}),`
`,(0,b.jsx)(o,{language:`jsx`,code:`<PieChart
	data={ data }
	gapScale={ 0.05 } // 5% gap scale
/>`}),`
`,(0,b.jsx)(t.h3,{id:`custom-colors`,children:`Custom Colors`}),`
`,(0,b.jsx)(t.p,{children:`Override theme colors by providing color values in data:`}),`
`,(0,b.jsx)(o,{language:`jsx`,code:`const dataWithColors = [
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
`,(0,b.jsx)(t.h3,{id:`label-colors-and-styling`,children:`Label Colors and Styling`}),`
`,(0,b.jsx)(s,{of:u}),`
`,(0,b.jsx)(t.p,{children:`The Pie Chart supports customizable label colors through the theme system:`}),`
`,(0,b.jsx)(o,{language:`jsx`,code:`import { GlobalChartsProvider } from '@automattic/charts';

const customTheme = {
...defaultTheme,
labelTextColor: '#FFFFFF', // White text for labels
labelBackgroundColor: 'rgba(0, 0, 0, 0.8)', // Enable dark background (transparent by default)
};

<GlobalChartsProvider theme={ customTheme }>
<PieChart data={ data } />
</GlobalChartsProvider>`}),`
`,(0,b.jsx)(t.p,{children:(0,b.jsx)(t.strong,{children:`Label Color Properties:`})}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:(0,b.jsx)(t.code,{children:`labelTextColor`})}),` - Controls the color of text displayed on pie chart segments. Defaults to `,(0,b.jsx)(t.code,{children:`#FFFFFF`}),` (white) to match original behavior.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:(0,b.jsx)(t.code,{children:`labelBackgroundColor`})}),` - Controls the background color of labels. Defaults to `,(0,b.jsx)(t.code,{children:`transparent`}),` (no background). When set to any color value, creates a rounded rectangle behind each label for enhanced readability. Supports any CSS color including transparency (e.g., `,(0,b.jsx)(t.code,{children:`rgba(0, 0, 0, 0.7)`}),`).`]}),`
`]}),`
`,(0,b.jsx)(t.p,{children:(0,b.jsx)(t.strong,{children:`Best Practices:`})}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[`Use high contrast between `,(0,b.jsx)(t.code,{children:`labelTextColor`}),` and `,(0,b.jsx)(t.code,{children:`labelBackgroundColor`}),` for optimal readability`]}),`
`,(0,b.jsxs)(t.li,{children:[`Consider semi-transparent backgrounds (`,(0,b.jsx)(t.code,{children:`rgba()`}),`) to maintain visual connection to segment colors`]}),`
`,(0,b.jsx)(t.li,{children:`Test with different segment colors to ensure labels remain visible`}),`
`,(0,b.jsxs)(t.li,{children:[`Use `,(0,b.jsx)(t.code,{children:`labelBackgroundColor`}),` when segment colors are too varied or bright for consistent text visibility`]}),`
`,(0,b.jsx)(t.li,{children:`Consider accessibility guidelines when choosing color combinations`}),`
`]}),`
`,(0,b.jsx)(t.h2,{id:`theming-integration`,children:`Theming Integration`}),`
`,(0,b.jsxs)(t.p,{children:[`Pie Charts integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided. A custom theme can be provided by wrapping your chart in `,(0,b.jsx)(t.code,{children:`GlobalChartsProvider`}),` and passing a custom theme object with the properties you want to override to the `,(0,b.jsx)(t.code,{children:`theme`}),` prop:`]}),`
`,(0,b.jsx)(o,{language:`tsx`,code:`import { GlobalChartsProvider, PieChart, type ChartTheme } from '@automattic/charts';

const customTheme: ChartTheme = {
	colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'],
};

<GlobalChartsProvider theme={customTheme}>
	<PieChart data={data} />
</GlobalChartsProvider>`}),`
`,(0,b.jsx)(t.h2,{id:`responsive-behavior`,children:`Responsive Behavior`}),`
`,(0,b.jsxs)(t.p,{children:[`By default, charts `,(0,b.jsx)(t.strong,{children:`fill their parent container's dimensions`}),`. The parent must have an explicit height:`]}),`
`,(0,b.jsx)(o,{language:`jsx`,code:`// Fill parent container (default) - parent needs explicit height
<div style={{ width: '100%', height: '400px' }}>
	<PieChart data={data} />
</div>

// Fixed dimensions
<PieChart data={data} width={400} height={400} />`}),`
`,(0,b.jsxs)(t.p,{children:[`Use the `,(0,b.jsx)(t.code,{children:`size`}),` prop to constrain the maximum pie diameter. The pie will shrink if the container is smaller, but won't grow beyond this value:`]}),`
`,(0,b.jsx)(s,{of:m}),`
`,(0,b.jsx)(o,{language:`jsx`,code:`// Constrained pie diameter (container still fills parent)
<PieChart data={data} size={200} />`}),`
`,(0,b.jsxs)(t.p,{children:[`For more details on responsive behavior, see the `,(0,b.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design`,children:`Responsive Design section`}),` in the introduction.`]}),`
`,(0,b.jsx)(t.h2,{id:`animation`,children:`Animation`}),`
`,(0,b.jsx)(t.p,{children:`The Pie Chart component supports an optional entry animation that creates a smooth reveal effect when the chart first renders:`}),`
`,(0,b.jsx)(s,{of:c}),`
`,(0,b.jsx)(o,{language:`jsx`,code:`<PieChart
	data={ data }
	size={ 400 }
	animation={ true }
/>`}),`
`,(0,b.jsx)(t.h3,{id:`animation-behavior`,children:`Animation Behavior`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Opt-in`}),`: Animation is disabled by default and must be explicitly enabled with the `,(0,b.jsx)(t.code,{children:`animation`}),` prop`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Accessibility`}),`: Automatically respects the user's `,(0,b.jsx)(t.code,{children:`prefers-reduced-motion`}),` system setting - animation will not play for users who prefer reduced motion`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Effect`}),`: Creates a radial wipe reveal effect that sweeps clockwise from the top, progressively revealing the chart segments`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Duration`}),`: 1000ms (1 second)`]}),`
`]}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.strong,{children:`Note`}),`: The animation plays once when the chart initially renders and does not repeat.`]})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;e((()=>{b=t(),r(),i(),g()}))();export{y as default};