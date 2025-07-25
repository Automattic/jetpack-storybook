(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8731,1383,8006],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(x,s,a)=>{"use strict";a.d(s,{R:()=>n,x:()=>r});var o=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},h=o.createContext(e);function n(i){const d=o.useContext(h);return o.useMemo(function(){return typeof i=="function"?i(d):{...d,...i}},[d,i])}function r(i){let d;return i.disableParentContext?d=typeof i.components=="function"?i.components(e):i.components||e:d=n(i.components),o.createElement(h.Provider,{value:d},i.children)}},"../charts/src/components/bar-chart/stories/index.docs.mdx":(x,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>l});var o=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),h=a("../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),n=a("../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist/blocks.mjs"),r=a("../charts/src/components/bar-chart/stories/index.stories.tsx"),i=a("../charts/src/components/bar-chart/stories/legend.stories.tsx");function d(c){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,h.R)(),...c.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.W8,{title:"JS Packages/Charts/Types/Bar Chart",of:r}),`
`,(0,e.jsx)(t.h1,{id:"bar-chart",children:"Bar Chart"}),`
`,(0,e.jsx)(t.p,{children:"Bar Charts visualize categorical data using rectangular bars with heights or lengths proportional to the values they represent. They excel at comparing values across categories, showing distributions, and highlighting differences in data sets."}),`
`,(0,e.jsx)(n.Hl,{of:r.Default}),`
`,(0,e.jsx)(t.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsxs)(t.p,{children:["The Bar Chart component provides a flexible, accessible, and highly customizable solution for displaying categorical data. Built on ",(0,e.jsx)(t.code,{children:"@visx/xychart"}),", it supports multiple data series, both vertical and horizontal orientations, interactive tooltips, legends, and advanced visual features like pattern fills:"]}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`import { BarChart } from '@automattic/charts';

<BarChart
	data={ data }
	orientation="vertical"
	withTooltips={ true }
	showLegend={ true }
/>`}),`
`,(0,e.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(t.h3,{id:"simple-bar-chart",children:"Simple Bar Chart"}),`
`,(0,e.jsxs)(t.p,{children:["The simplest bar chart requires only a ",(0,e.jsx)(t.code,{children:"data"})," prop with categorical data:"]}),`
`,(0,e.jsx)(n.Hl,{of:r.SingleSeries}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
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
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"gridVisibility"})}),": Grid line visibility (",(0,e.jsx)(t.code,{children:"'x'"}),", ",(0,e.jsx)(t.code,{children:"'y'"}),", ",(0,e.jsx)(t.code,{children:"'xy'"}),", or ",(0,e.jsx)(t.code,{children:"'none'"}),")"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"margin"})}),": Custom chart margins"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"options"})}),": Advanced axis and scale configuration"]}),`
`]}),`
`,(0,e.jsx)(t.h2,{id:"chart-orientations",children:"Chart Orientations"}),`
`,(0,e.jsx)(t.h3,{id:"vertical-bars-default",children:"Vertical Bars (Default)"}),`
`,(0,e.jsx)(t.p,{children:"Standard vertical bar charts with categories on the x-axis and values on the y-axis:"}),`
`,(0,e.jsx)(n.Hl,{of:r.Default}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
	data={data}
	orientation="vertical"
	gridVisibility="x"
/>`}),`
`,(0,e.jsx)(t.h3,{id:"horizontal-bars",children:"Horizontal Bars"}),`
`,(0,e.jsx)(t.p,{children:"Horizontal bar charts with categories on the y-axis and values on the x-axis, ideal for long category names:"}),`
`,(0,e.jsx)(n.Hl,{of:r.HorizontalBarChart}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
	data={data}
	orientation="horizontal"
	gridVisibility="y"
/>`}),`
`,(0,e.jsx)(t.h2,{id:"multiple-series",children:"Multiple Series"}),`
`,(0,e.jsx)(t.h3,{id:"multi-series-charts",children:"Multi-Series Charts"}),`
`,(0,e.jsx)(t.p,{children:"Display multiple data series with automatic color differentiation and grouped bars:"}),`
`,(0,e.jsx)(n.Hl,{of:r.Default}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
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
`,(0,e.jsx)(n.Hl,{of:r.ManyDataSeries}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
	data={allCountriesData}
	withTooltips={true}
	showLegend={true}
/>`}),`
`,(0,e.jsx)(t.h2,{id:"visual-features",children:"Visual Features"}),`
`,(0,e.jsx)(t.h3,{id:"pattern-fills",children:"Pattern Fills"}),`
`,(0,e.jsx)(t.p,{children:"Add visual accessibility and distinction with pattern fills instead of solid colors:"}),`
`,(0,e.jsx)(n.Hl,{of:r.WithPatterns}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
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
`,(0,e.jsx)(n.Hl,{of:r.SmartFormatting}),`
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
`,(0,e.jsx)(n.Hl,{of:r.TimeSeries}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`// Date objects
{ date: new Date('2024-01-01'), value: 2230 }

// Date strings (automatically parsed)
{ dateString: '2024-01-01', value: 2580 }
{ dateString: '2024-01-01 14:30:00', value: 3500 }

// Category labels
{ label: '2024', value: 126 }`}),`
`,(0,e.jsx)(t.h3,{id:"custom-axis-formatting",children:"Custom Axis Formatting"}),`
`,(0,e.jsx)(t.p,{children:"Configure custom formatting for time-series or numerical axes:"}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
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
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
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
`,(0,e.jsx)(t.h2,{id:"legends",children:"Legends"}),`
`,(0,e.jsx)(t.h3,{id:"basic-legend",children:"Basic Legend"}),`
`,(0,e.jsx)(t.p,{children:"Display series information with automatic color and pattern matching:"}),`
`,(0,e.jsx)(n.Hl,{of:i.Default}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
	data={data}
	showLegend={true}
	legendOrientation="horizontal"
	legendAlignmentHorizontal="center"
	legendAlignmentVertical="bottom"
	legendShape="rect"
/>`}),`
`,(0,e.jsx)(t.h3,{id:"legend-positioning",children:"Legend Positioning"}),`
`,(0,e.jsx)(t.p,{children:"Control legend placement with alignment options:"}),`
`,(0,e.jsx)(n.Hl,{of:i.AlignmentPositioning}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
	data={data}
	showLegend={true}
	legendAlignmentHorizontal="right"
	legendAlignmentVertical="top"
/>`}),`
`,(0,e.jsx)(t.h3,{id:"vertical-legend",children:"Vertical Legend"}),`
`,(0,e.jsx)(t.p,{children:"Display legends vertically for charts with many series:"}),`
`,(0,e.jsx)(n.Hl,{of:i.VerticalOrientation}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
	data={data}
	showLegend={true}
	legendOrientation="vertical"
	legendAlignmentHorizontal="right"
/>`}),`
`,(0,e.jsx)(t.h3,{id:"legends-with-horizontal-bars",children:"Legends with Horizontal Bars"}),`
`,(0,e.jsx)(t.p,{children:"Legends work seamlessly with both orientations:"}),`
`,(0,e.jsx)(n.Hl,{of:i.HorizontalBars}),`
`,(0,e.jsx)(t.h2,{id:"advanced-customization",children:"Advanced Customization"}),`
`,(0,e.jsx)(t.h3,{id:"grid-configuration",children:"Grid Configuration"}),`
`,(0,e.jsx)(t.p,{children:"Control grid line visibility and appearance:"}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`// Show only horizontal grid lines (default for vertical bars)
<BarChart data={data} gridVisibility="x" />

// Show only vertical grid lines (default for horizontal bars)
<BarChart data={data} gridVisibility="y" />

// Show both grid lines
<BarChart data={data} gridVisibility="xy" />

// Hide all grid lines
<BarChart data={data} gridVisibility="none" />`}),`
`,(0,e.jsx)(t.h3,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,(0,e.jsx)(t.p,{children:"Charts automatically resize based on container size:"}),`
`,(0,e.jsx)(n.Hl,{of:r.FixedDimensions}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`// Responsive (default)
<BarChart data={data} />

// Fixed dimensions
<BarChart
	data={data}
	width={800}
	height={400}
/>`}),`
`,(0,e.jsx)(t.h3,{id:"custom-margins",children:"Custom Margins"}),`
`,(0,e.jsx)(t.p,{children:"Control chart layout with precise margin settings:"}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
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
`,(0,e.jsx)(n.kL,{language:"jsx",code:`<BarChart
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
`,(0,e.jsx)(n.Hl,{of:r.ErrorStates}),`
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
`,(0,e.jsx)(t.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsx)(t.h3,{id:"barchart",children:"BarChart"}),`
`,(0,e.jsx)(t.p,{children:"Main chart component with responsive behavior by default."}),`
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"Props:"})}),`
`,(0,e.jsxs)(t.table,{children:[(0,e.jsx)(t.thead,{children:(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.th,{children:"Prop"}),(0,e.jsx)(t.th,{children:"Type"}),(0,e.jsx)(t.th,{children:"Default"}),(0,e.jsx)(t.th,{children:"Description"})]})}),(0,e.jsxs)(t.tbody,{children:[(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"data"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"SeriesData[]"})}),(0,e.jsx)(t.td,{children:"-"}),(0,e.jsxs)(t.td,{children:[(0,e.jsx)(t.strong,{children:"Required."})," Array of data series to display"]})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"chartId"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"string"})}),(0,e.jsx)(t.td,{children:"auto-generated"}),(0,e.jsx)(t.td,{children:"Optional unique identifier for the chart"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"width"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"number"})}),(0,e.jsx)(t.td,{children:"responsive"}),(0,e.jsx)(t.td,{children:"Chart width in pixels"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"height"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"number"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"400"})}),(0,e.jsx)(t.td,{children:"Chart height in pixels"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"orientation"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"'vertical' | 'horizontal'"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"'vertical'"})}),(0,e.jsx)(t.td,{children:"Bar orientation"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"withTooltips"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"boolean"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"false"})}),(0,e.jsx)(t.td,{children:"Enable interactive tooltips"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"withPatterns"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"boolean"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"false"})}),(0,e.jsx)(t.td,{children:"Use pattern fills for accessibility"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"showLegend"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"boolean"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"false"})}),(0,e.jsx)(t.td,{children:"Display chart legend"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"legendOrientation"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"'horizontal' | 'vertical'"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"'horizontal'"})}),(0,e.jsx)(t.td,{children:"Legend layout orientation"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"legendAlignmentHorizontal"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"'left' | 'center' | 'right'"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"'center'"})}),(0,e.jsx)(t.td,{children:"Horizontal legend alignment"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"legendAlignmentVertical"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"'top' | 'bottom'"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"'bottom'"})}),(0,e.jsx)(t.td,{children:"Vertical legend alignment"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"legendShape"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"LegendShape"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"'rect'"})}),(0,e.jsx)(t.td,{children:"Shape used in legend markers"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"gridVisibility"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"'x' | 'y' | 'xy' | 'none'"})}),(0,e.jsx)(t.td,{children:"orientation-based"}),(0,e.jsx)(t.td,{children:"Grid line visibility"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"renderTooltip"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"(params: RenderTooltipParams) => ReactNode"})}),(0,e.jsx)(t.td,{children:"-"}),(0,e.jsx)(t.td,{children:"Custom tooltip render function"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"margin"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"{ top?: number; right?: number; bottom?: number; left?: number }"})}),(0,e.jsx)(t.td,{children:"calculated"}),(0,e.jsx)(t.td,{children:"Chart margins"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"options"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"ChartOptions"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"{}"})}),(0,e.jsx)(t.td,{children:"Advanced axis and scale configuration"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"className"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"string"})}),(0,e.jsx)(t.td,{children:"-"}),(0,e.jsx)(t.td,{children:"Additional CSS class name"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"onPointerDown"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"(event: EventHandlerParams) => void"})}),(0,e.jsx)(t.td,{children:"-"}),(0,e.jsx)(t.td,{children:"Pointer down event handler"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"onPointerUp"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"(event: EventHandlerParams) => void"})}),(0,e.jsx)(t.td,{children:"-"}),(0,e.jsx)(t.td,{children:"Pointer up event handler"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"onPointerMove"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"(event: EventHandlerParams) => void"})}),(0,e.jsx)(t.td,{children:"-"}),(0,e.jsx)(t.td,{children:"Pointer move event handler"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"onPointerOut"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"(event: PointerEvent) => void"})}),(0,e.jsx)(t.td,{children:"-"}),(0,e.jsx)(t.td,{children:"Pointer out event handler"})]})]})]}),`
`,(0,e.jsx)(t.h3,{id:"seriesdata-type",children:"SeriesData Type"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-typescript",children:`type SeriesData = {
	label: string;
	data: DataPointDate[];
	options?: {
		stroke?: string;
	};
};
`})}),`
`,(0,e.jsx)(t.h3,{id:"datapointdate-type",children:"DataPointDate Type"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-typescript",children:`type DataPointDate = {
	date?: Date;
	dateString?: string; // Multiple formats supported
	value: number | null;
	label?: string;
};
`})}),`
`,(0,e.jsx)(t.h3,{id:"chartoptions-type",children:"ChartOptions Type"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-typescript",children:`type ChartOptions = {
	yScale?: {
		type?: 'linear' | 'band';
		zero?: boolean;
		domain?: [number, number];
		nice?: boolean;
		padding?: number;
	};
	xScale?: {
		type?: 'time' | 'linear' | 'band';
		domain?: [Date, Date] | [number, number];
		padding?: number;
	};
	axis?: {
		x?: {
			orientation?: 'top' | 'bottom';
			numTicks?: number;
			tickFormat?: (value: any) => string;
		};
		y?: {
			orientation?: 'left' | 'right';
			numTicks?: number;
			tickFormat?: (value: number) => string;
		};
	};
};
`})}),`
`,(0,e.jsx)(t.h2,{id:"performance-considerations-1",children:"Performance Considerations"}),`
`,(0,e.jsx)(t.h3,{id:"built-in-optimizations",children:"Built-in Optimizations"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Efficient rendering"}),": Built on ",(0,e.jsx)(t.code,{children:"@visx/xychart"})," for optimized SVG rendering"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Data validation"}),": Automatic validation prevents rendering invalid data"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Responsive behavior"}),": Uses ",(0,e.jsx)(t.code,{children:"ResizeObserver"})," for efficient chart resizing"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Pattern caching"}),": Pattern definitions are cached and reused for performance"]}),`
`]}),`
`,(0,e.jsx)(t.h2,{id:"theming-integration",children:"Theming Integration"}),`
`,(0,e.jsx)(t.p,{children:"Bar Charts integrate seamlessly with the chart theming system:"}),`
`,(0,e.jsx)(n.kL,{language:"jsx",code:`import { ThemeProvider, jetpackTheme } from '@automattic/charts';

<ThemeProvider theme={jetpackTheme}>
	<BarChart data={data} />
</ThemeProvider>`}),`
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"Available themes:"})}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Default"}),": Neutral colors and styling"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Jetpack"}),": Jetpack brand colors and styling"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Woo"}),": WooCommerce brand colors and styling"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Custom"}),": Define your own theme object with custom color schemes"]}),`
`]}),`
`,(0,e.jsx)(t.p,{children:"The component automatically adapts bar colors, patterns, and styling based on the active theme while maintaining accessibility standards."})]})}function l(c={}){const{wrapper:t}={...(0,h.R)(),...c.components};return t?(0,e.jsx)(t,{...c,children:(0,e.jsx)(d,{...c})}):d(c)}},"../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive":x=>{function s(a){var o=new Error("Cannot find module '"+a+"'");throw o.code="MODULE_NOT_FOUND",o}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive",x.exports=s},"../charts/src/components/bar-chart/stories/index.stories.tsx":(x,s,a)=>{"use strict";a.r(s),a.d(s,{Default:()=>l,ErrorStates:()=>m,FixedDimensions:()=>g,HorizontalBarChart:()=>y,ManyDataSeries:()=>u,SingleSeries:()=>c,SmartFormatting:()=>j,TimeSeries:()=>t,WithPatterns:()=>p,__namedExportsOrder:()=>b,default:()=>d});var o=a("../charts/src/components/line-chart/stories/large-values-sample.ts"),e=a("../charts/src/components/line-chart/stories/site-traffic-sample.ts"),h=a("../charts/src/components/bar-chart/bar-chart.tsx"),n=a("../charts/src/components/bar-chart/stories/sample-data.ts"),r=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d={title:"JS Packages/Charts/Types/Bar Chart",component:h.A,parameters:{layout:"centered"},decorators:[v=>(0,r.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,r.jsx)(v,{})})],argTypes:{maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}}}},l={args:{withTooltips:!0,data:[n.A[0],n.A[1],n.A[2]],gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300}},c={args:{...l.args,data:[n.A[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},t={args:{...l.args,data:[{...e.A[0],label:"Data with dateString and date",data:[...e.A[0].data,{dateString:"2024-01-31",value:2230},{dateString:"2024-02-01",value:2580},{date:new Date("2024-02-02 00:00:00"),value:3500},{dateString:"2024-02-03 00:00:00",value:1500},{dateString:"2024-02-04",value:2500},{dateString:"2024-02-05 00:00",value:3e3}]}],options:{axis:{x:{tickFormat:v=>new Date(v).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},u={args:{...l.args,data:n.A},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},g={args:{...l.args,width:800,height:400,data:[n.A[0],n.A[1],n.A[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},p={args:{...l.args,withPatterns:!0,data:n.A.map(v=>({...v,data:v.data.filter(_=>parseInt(_.label)>=2016)}))}},m={render:()=>(0,r.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Empty Data"}),(0,r.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,r.jsx)(h.A,{data:[]})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Invalid Data"}),(0,r.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,r.jsx)(h.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};m.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const j={args:{withTooltips:!0,data:o.A,gridVisibility:"x"}};j.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const y={args:{...l.args,data:[n.A[0],n.A[1],n.A[2]],orientation:"horizontal",gridVisibility:"none"}},b=["Default","SingleSeries","TimeSeries","ManyDataSeries","FixedDimensions","WithPatterns","ErrorStates","SmartFormatting","HorizontalBarChart"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: [data[0], data[1], data[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    aspectRatio: 0.5,
    resizeDebounceTime: 300
  }
}`,...l.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [data[0]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with a single data series.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [{
      ...trafficData[0],
      label: 'Data with dateString and date',
      data: [...trafficData[0].data, {
        dateString: '2024-01-31',
        value: 2230
      }, {
        dateString: '2024-02-01',
        value: 2580
      }, {
        date: new Date('2024-02-02 00:00:00'),
        value: 3500
      }, {
        dateString: '2024-02-03 00:00:00',
        value: 1500
      }, {
        dateString: '2024-02-04',
        value: 2500
      }, {
        dateString: '2024-02-05 00:00',
        value: 3000
      }]
    }],
    options: {
      axis: {
        x: {
          tickFormat: (timestamp: number) => {
            const date = new Date(timestamp);
            return date.toLocaleDateString('en-US', {
              dateStyle: 'short'
            });
          }
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with a time series.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with many data series.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 800,
    height: 400,
    data: [data[0], data[1], data[2]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with fixed dimensions that override the responsive behavior.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    withPatterns: true,
    data: data.map(country => {
      return {
        ...country,
        data: country.data.filter(d => parseInt(d.label) >= 2016)
      };
    })
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '20px'
  }}>
            <div>
                <h3>Empty Data</h3>
                <div style={{
        width: '400px',
        height: '300px'
      }}>
                    <BarChart data={[]} />
                </div>
            </div>

            <div>
                <h3>Invalid Data</h3>
                <div style={{
        width: '400px',
        height: '300px'
      }}>
                    <BarChart data={[{
          label: 'Invalid Series',
          data: [{
            date: new Date('invalid'),
            value: 10,
            label: 'Invalid Date'
          }, {
            date: new Date('2024-01-02'),
            value: null,
            label: 'Null Value'
          }],
          options: {}
        }]} />
                </div>
            </div>
        </div>
}`,...m.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    gridVisibility: 'x'
  }
}`,...j.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [data[0], data[1], data[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...y.parameters?.docs?.source}}}},"../charts/src/components/bar-chart/stories/legend.stories.tsx":(x,s,a)=>{"use strict";a.r(s),a.d(s,{AlignmentPositioning:()=>t,Default:()=>c,HorizontalBars:()=>g,VerticalOrientation:()=>u,__namedExportsOrder:()=>p,default:()=>i});var o=a("../charts/src/stories/legend-config.tsx"),e=a("../charts/src/components/bar-chart/bar-chart.tsx"),h=a("../charts/src/components/bar-chart/stories/sample-data.ts"),n=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i={title:"JS Packages/Charts/Types/Bar Chart/Legend",component:e.A,parameters:{layout:"centered"},decorators:o.x,argTypes:o.r},d=m=>(0,n.jsx)(e.A,{...m}),l={data:h.A.slice(0,3),height:400,showLegend:!0,legendOrientation:"horizontal",withTooltips:!0},c=d.bind({});c.args={...l};const t=d.bind({});t.args={...l,legendAlignmentHorizontal:"right",legendAlignmentVertical:"top"};const u=d.bind({});u.args={...l,legendOrientation:"vertical",legendAlignmentHorizontal:"right",legendAlignmentVertical:"top"};const g=d.bind({});g.args={...l,orientation:"horizontal",legendAlignmentHorizontal:"right",legendAlignmentVertical:"top"};const p=["Default","AlignmentPositioning","VerticalOrientation","HorizontalBars"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...c.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...t.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...u.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...g.parameters?.docs?.source}}}},"../charts/src/components/line-chart/stories/large-values-sample.ts":(x,s,a)=>{"use strict";a.d(s,{A:()=>e});const e=[{label:"Revenue (Billions)",data:[{date:new Date("2024-01-01"),value:12e8},{date:new Date("2024-02-01"),value:145e7},{date:new Date("2024-03-01"),value:168e7},{date:new Date("2024-04-01"),value:21e8},{date:new Date("2024-05-01"),value:235e7},{date:new Date("2024-06-01"),value:28e8}],options:{stroke:"#3858E9"}},{label:"Users (Millions)",data:[{date:new Date("2024-01-01"),value:45e6},{date:new Date("2024-02-01"),value:52e6},{date:new Date("2024-03-01"),value:48e6},{date:new Date("2024-04-01"),value:61e6},{date:new Date("2024-05-01"),value:75e6},{date:new Date("2024-06-01"),value:89e6}],options:{stroke:"#00BA37"}}]},"../charts/src/components/line-chart/stories/site-traffic-sample.ts":(x,s,a)=>{"use strict";a.d(s,{A:()=>o});const o=[{label:"Views",options:{stroke:"#069e08"},data:[{date:new Date("2024-01-01"),value:2558},{date:new Date("2024-01-02"),value:3399},{date:new Date("2024-01-03"),value:2260},{date:new Date("2024-01-04"),value:2331},{date:new Date("2024-01-05"),value:3302},{date:new Date("2024-01-06"),value:1852},{date:new Date("2024-01-07"),value:2607},{date:new Date("2024-01-08"),value:2804},{date:new Date("2024-01-09"),value:3260},{date:new Date("2024-01-10"),value:2941},{date:new Date("2024-01-11"),value:2857},{date:new Date("2024-01-12"),value:3461},{date:new Date("2024-01-13"),value:1548},{date:new Date("2024-01-14"),value:2739},{date:new Date("2024-01-15"),value:3288},{date:new Date("2024-01-16"),value:2869},{date:new Date("2024-01-17"),value:2590},{date:new Date("2024-01-18"),value:2609},{date:new Date("2024-01-19"),value:2648},{date:new Date("2024-01-20"),value:1805},{date:new Date("2024-01-21"),value:2531},{date:new Date("2024-01-22"),value:3605},{date:new Date("2024-01-23"),value:2366},{date:new Date("2024-01-24"),value:2782},{date:new Date("2024-01-25"),value:2885},{date:new Date("2024-01-26"),value:2918},{date:new Date("2024-01-27"),value:2518},{date:new Date("2024-01-28"),value:2378},{date:new Date("2024-01-29"),value:2714},{date:new Date("2024-01-30"),value:3279}]},{label:"Visitors",options:{stroke:"rgb(230, 139, 40)"},data:[{date:new Date("2024-01-01"),value:2412},{date:new Date("2024-01-02"),value:1899},{date:new Date("2024-01-03"),value:2061},{date:new Date("2024-01-04"),value:1939},{date:new Date("2024-01-05"),value:1986},{date:new Date("2024-01-06"),value:1560},{date:new Date("2024-01-07"),value:1741},{date:new Date("2024-01-08"),value:2120},{date:new Date("2024-01-09"),value:1889},{date:new Date("2024-01-10"),value:1666},{date:new Date("2024-01-11"),value:2396},{date:new Date("2024-01-12"),value:2276},{date:new Date("2024-01-13"),value:1218},{date:new Date("2024-01-14"),value:1228},{date:new Date("2024-01-15"),value:1600},{date:new Date("2024-01-16"),value:1814},{date:new Date("2024-01-17"),value:1701},{date:new Date("2024-01-18"),value:1507},{date:new Date("2024-01-19"),value:1833},{date:new Date("2024-01-20"),value:1407},{date:new Date("2024-01-21"),value:965},{date:new Date("2024-01-22"),value:2288},{date:new Date("2024-01-23"),value:2135},{date:new Date("2024-01-24"),value:1824},{date:new Date("2024-01-25"),value:2219},{date:new Date("2024-01-26"),value:1918},{date:new Date("2024-01-27"),value:1101},{date:new Date("2024-01-28"),value:1695},{date:new Date("2024-01-29"),value:1615},{date:new Date("2024-01-30"),value:2056}]}]},"../charts/src/stories/legend-config.tsx":(x,s,a)=>{"use strict";a.d(s,{r:()=>n,x:()=>r});var o=a("../charts/src/providers/theme/themes.ts"),e=a("../charts/src/providers/theme/theme-provider.tsx"),h=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n={showLegend:{control:"boolean",table:{category:"Legend"}},legendAlignmentHorizontal:{control:"select",options:["left","center","right"],table:{category:"Legend"}},legendAlignmentVertical:{control:"select",options:["top","bottom"],table:{category:"Legend"}},legendOrientation:{control:"select",options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:"select",options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:"boolean",table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},theme:{control:"select",options:{default:void 0,jetpack:o.QI,woo:o.pk},defaultValue:void 0,table:{category:"Theme"}}},r=[(i,{args:d})=>(0,h.jsx)(e.NP,{theme:d.theme,children:(0,h.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",height:"600px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,h.jsx)(i,{})})})];try{n.displayName="legendArgTypes",n.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:n.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}try{r.displayName="legendDecorator",r.__docgenInfo={description:"Shared decorator for legend stories with theme support and resizable container",displayName:"legendDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendDecorator"]={docgenInfo:r.__docgenInfo,name:"legendDecorator",path:"../charts/src/stories/legend-config.tsx#legendDecorator"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(x,s,a)=>{"use strict";a.d(s,{A:()=>h});function o(n){var r,i,d="";if(typeof n=="string"||typeof n=="number")d+=n;else if(typeof n=="object")if(Array.isArray(n)){var l=n.length;for(r=0;r<l;r++)n[r]&&(i=o(n[r]))&&(d&&(d+=" "),d+=i)}else for(i in n)n[i]&&(d&&(d+=" "),d+=i);return d}function e(){for(var n,r,i=0,d="",l=arguments.length;i<l;i++)(n=arguments[i])&&(r=o(n))&&(d&&(d+=" "),d+=r);return d}const h=e},"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive":x=>{function s(a){var o=new Error("Cannot find module '"+a+"'");throw o.code="MODULE_NOT_FOUND",o}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive",x.exports=s},"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive":x=>{function s(a){var o=new Error("Cannot find module '"+a+"'");throw o.code="MODULE_NOT_FOUND",o}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive",x.exports=s}}]);
