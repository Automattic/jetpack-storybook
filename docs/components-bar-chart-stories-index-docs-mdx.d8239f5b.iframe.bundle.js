(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8731],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(h,i,r)=>{"use strict";r.d(i,{R:()=>t,x:()=>a});var s=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},o=s.createContext(e);function t(d){const l=s.useContext(o);return s.useMemo(function(){return typeof d=="function"?d(l):{...l,...d}},[l,d])}function a(d){let l;return d.disableParentContext?l=typeof d.components=="function"?d.components(e):d.components||e:l=t(d.components),s.createElement(o.Provider,{value:l},d.children)}},"../charts/src/components/bar-chart/stories/index.docs.mdx":(h,i,r)=>{"use strict";r.r(i),r.d(i,{default:()=>x});var s=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),o=r("../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),t=r("../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist/blocks.mjs"),a=r("../charts/src/components/bar-chart/stories/index.stories.tsx"),d=r("../charts/src/components/bar-chart/stories/legend.stories.tsx");function l(c){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...c.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.W8,{title:"JS Packages/Charts/Types/Bar Chart",of:a}),`
`,(0,e.jsx)(n.h1,{id:"bar-chart",children:"Bar Chart"}),`
`,(0,e.jsx)(n.p,{children:"Bar Charts visualize categorical data using rectangular bars with heights or lengths proportional to the values they represent. They excel at comparing values across categories, showing distributions, and highlighting differences in data sets."}),`
`,(0,e.jsx)(t.Hl,{of:a.Default}),`
`,(0,e.jsx)(n.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsxs)(n.p,{children:["The Bar Chart component provides a flexible, accessible, and highly customizable solution for displaying categorical data. Built on ",(0,e.jsx)(n.code,{children:"@visx/xychart"}),", it supports multiple data series, both vertical and horizontal orientations, interactive tooltips, legends, and advanced visual features like pattern fills:"]}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`import { BarChart } from '@automattic/charts';

<BarChart
	data={ data }
	orientation="vertical"
	withTooltips={ true }
	showLegend={ true }
/>`}),`
`,(0,e.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(n.h3,{id:"simple-bar-chart",children:"Simple Bar Chart"}),`
`,(0,e.jsxs)(n.p,{children:["The simplest bar chart requires only a ",(0,e.jsx)(n.code,{children:"data"})," prop with categorical data:"]}),`
`,(0,e.jsx)(t.Hl,{of:a.SingleSeries}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<BarChart
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
`,(0,e.jsx)(n.h3,{id:"required-props",children:"Required Props"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"data"})}),": Array of series data, each containing ",(0,e.jsx)(n.code,{children:"label"}),", ",(0,e.jsx)(n.code,{children:"data"})," array, and optional ",(0,e.jsx)(n.code,{children:"options"})]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"optional-props",children:"Optional Props"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"width"})}),": Chart width in pixels (responsive by default)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"height"})}),": Chart height in pixels (responsive by default, defaults to 400)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"orientation"})}),": Bar orientation (",(0,e.jsx)(n.code,{children:"'vertical'"})," or ",(0,e.jsx)(n.code,{children:"'horizontal'"}),", defaults to ",(0,e.jsx)(n.code,{children:"'vertical'"}),")"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"withTooltips"})}),": Enable interactive tooltips (",(0,e.jsx)(n.code,{children:"false"})," by default)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"withPatterns"})}),": Use pattern fills instead of solid colors (",(0,e.jsx)(n.code,{children:"false"})," by default)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"showLegend"})}),": Display chart legend (",(0,e.jsx)(n.code,{children:"false"})," by default)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"gridVisibility"})}),": Grid line visibility (",(0,e.jsx)(n.code,{children:"'x'"}),", ",(0,e.jsx)(n.code,{children:"'y'"}),", ",(0,e.jsx)(n.code,{children:"'xy'"}),", or ",(0,e.jsx)(n.code,{children:"'none'"}),")"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"margin"})}),": Custom chart margins"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"options"})}),": Advanced axis and scale configuration"]}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"chart-orientations",children:"Chart Orientations"}),`
`,(0,e.jsx)(n.h3,{id:"vertical-bars-default",children:"Vertical Bars (Default)"}),`
`,(0,e.jsx)(n.p,{children:"Standard vertical bar charts with categories on the x-axis and values on the y-axis:"}),`
`,(0,e.jsx)(t.Hl,{of:a.Default}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<BarChart
	data={data}
	orientation="vertical"
	gridVisibility="x"
/>`}),`
`,(0,e.jsx)(n.h3,{id:"horizontal-bars",children:"Horizontal Bars"}),`
`,(0,e.jsx)(n.p,{children:"Horizontal bar charts with categories on the y-axis and values on the x-axis, ideal for long category names:"}),`
`,(0,e.jsx)(t.Hl,{of:a.HorizontalBarChart}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<BarChart
	data={data}
	orientation="horizontal"
	gridVisibility="y"
/>`}),`
`,(0,e.jsx)(n.h2,{id:"multiple-series",children:"Multiple Series"}),`
`,(0,e.jsx)(n.h3,{id:"multi-series-charts",children:"Multi-Series Charts"}),`
`,(0,e.jsx)(n.p,{children:"Display multiple data series with automatic color differentiation and grouped bars:"}),`
`,(0,e.jsx)(t.Hl,{of:a.Default}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<BarChart
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
`,(0,e.jsx)(n.h3,{id:"many-data-series",children:"Many Data Series"}),`
`,(0,e.jsx)(n.p,{children:"The component handles large numbers of series gracefully with automatic color cycling:"}),`
`,(0,e.jsx)(t.Hl,{of:a.ManyDataSeries}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<BarChart
	data={allCountriesData}
	withTooltips={true}
	showLegend={true}
/>`}),`
`,(0,e.jsx)(n.h2,{id:"visual-features",children:"Visual Features"}),`
`,(0,e.jsx)(n.h3,{id:"pattern-fills",children:"Pattern Fills"}),`
`,(0,e.jsx)(n.p,{children:"Add visual accessibility and distinction with pattern fills instead of solid colors:"}),`
`,(0,e.jsx)(t.Hl,{of:a.WithPatterns}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<BarChart
	data={data}
	withPatterns={true}
	withTooltips={true}
/>`}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Pattern types automatically cycle through:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Lines"}),": Diagonal line patterns"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Circles"}),": Circular dot patterns"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Waves"}),": Wave line patterns"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Hexagons"}),": Hexagonal patterns"]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"smart-formatting",children:"Smart Formatting"}),`
`,(0,e.jsx)(n.p,{children:"Automatic formatting handles large numbers with appropriate abbreviations:"}),`
`,(0,e.jsx)(t.Hl,{of:a.SmartFormatting}),`
`,(0,e.jsx)(n.p,{children:"Values are automatically formatted as:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"1B and above"}),': "1.23B"']}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"1M and above"}),': "1.2M"']}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"1K and above"}),': "1k"']}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Below 1K"}),': "1,234"']}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"data-formats",children:"Data Formats"}),`
`,(0,e.jsx)(n.h3,{id:"time-series-data",children:"Time Series Data"}),`
`,(0,e.jsx)(n.p,{children:"Bar charts support both categorical labels and time-series data:"}),`
`,(0,e.jsx)(t.Hl,{of:a.TimeSeries}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`// Date objects
{ date: new Date('2024-01-01'), value: 2230 }

// Date strings (automatically parsed)
{ dateString: '2024-01-01', value: 2580 }
{ dateString: '2024-01-01 14:30:00', value: 3500 }

// Category labels
{ label: '2024', value: 126 }`}),`
`,(0,e.jsx)(n.h3,{id:"custom-axis-formatting",children:"Custom Axis Formatting"}),`
`,(0,e.jsx)(n.p,{children:"Configure custom formatting for time-series or numerical axes:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<BarChart
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
`,(0,e.jsx)(n.h2,{id:"interactive-features",children:"Interactive Features"}),`
`,(0,e.jsx)(n.h3,{id:"tooltips",children:"Tooltips"}),`
`,(0,e.jsx)(n.p,{children:"Enable rich interactive tooltips that display detailed information on hover:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<BarChart
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
`,(0,e.jsx)(n.h3,{id:"keyboard-navigation",children:"Keyboard Navigation"}),`
`,(0,e.jsx)(n.p,{children:"Charts are fully keyboard accessible:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Tab"}),": Focus the chart"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Arrow Keys"}),": Navigate between bars"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Enter/Space"}),": Activate tooltips"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Escape"}),": Close active tooltips"]}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"legends",children:"Legends"}),`
`,(0,e.jsx)(n.h3,{id:"basic-legend",children:"Basic Legend"}),`
`,(0,e.jsx)(n.p,{children:"Display series information with automatic color and pattern matching:"}),`
`,(0,e.jsx)(t.Hl,{of:d.Default}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<BarChart
	data={data}
	showLegend={true}
	legendOrientation="horizontal"
	legendAlignmentHorizontal="center"
	legendAlignmentVertical="bottom"
	legendShape="rect"
/>`}),`
`,(0,e.jsx)(n.h3,{id:"legend-positioning",children:"Legend Positioning"}),`
`,(0,e.jsx)(n.p,{children:"Control legend placement with alignment options:"}),`
`,(0,e.jsx)(t.Hl,{of:d.AlignmentPositioning}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<BarChart
	data={data}
	showLegend={true}
	legendAlignmentHorizontal="right"
	legendAlignmentVertical="top"
/>`}),`
`,(0,e.jsx)(n.h3,{id:"vertical-legend",children:"Vertical Legend"}),`
`,(0,e.jsx)(n.p,{children:"Display legends vertically for charts with many series:"}),`
`,(0,e.jsx)(t.Hl,{of:d.VerticalOrientation}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<BarChart
	data={data}
	showLegend={true}
	legendOrientation="vertical"
	legendAlignmentHorizontal="right"
/>`}),`
`,(0,e.jsx)(n.h3,{id:"legends-with-horizontal-bars",children:"Legends with Horizontal Bars"}),`
`,(0,e.jsx)(n.p,{children:"Legends work seamlessly with both orientations:"}),`
`,(0,e.jsx)(t.Hl,{of:d.HorizontalBars}),`
`,(0,e.jsx)(n.h2,{id:"advanced-customization",children:"Advanced Customization"}),`
`,(0,e.jsx)(n.h3,{id:"grid-configuration",children:"Grid Configuration"}),`
`,(0,e.jsx)(n.p,{children:"Control grid line visibility and appearance:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`// Show only horizontal grid lines (default for vertical bars)
<BarChart data={data} gridVisibility="x" />

// Show only vertical grid lines (default for horizontal bars)
<BarChart data={data} gridVisibility="y" />

// Show both grid lines
<BarChart data={data} gridVisibility="xy" />

// Hide all grid lines
<BarChart data={data} gridVisibility="none" />`}),`
`,(0,e.jsx)(n.h3,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,(0,e.jsx)(n.p,{children:"Charts automatically resize based on container size:"}),`
`,(0,e.jsx)(t.Hl,{of:a.FixedDimensions}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`// Responsive (default)
<BarChart data={data} />

// Fixed dimensions
<BarChart
	data={data}
	width={800}
	height={400}
/>`}),`
`,(0,e.jsx)(n.h3,{id:"custom-margins",children:"Custom Margins"}),`
`,(0,e.jsx)(n.p,{children:"Control chart layout with precise margin settings:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<BarChart
	data={data}
	margin={{
		top: 20,
		right: 60,
		bottom: 80,
		left: 80
	}}
/>`}),`
`,(0,e.jsx)(n.h3,{id:"scale-and-axis-configuration",children:"Scale and Axis Configuration"}),`
`,(0,e.jsx)(n.p,{children:"Advanced configuration for scales and axes:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<BarChart
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
`,(0,e.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),`
`,(0,e.jsx)(n.p,{children:"The chart gracefully handles various error states and edge cases:"}),`
`,(0,e.jsx)(t.Hl,{of:a.ErrorStates}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Supported scenarios:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Empty data arrays"}),`
`,(0,e.jsx)(n.li,{children:"Invalid data values (null, NaN, undefined)"}),`
`,(0,e.jsx)(n.li,{children:"Missing data properties"}),`
`,(0,e.jsx)(n.li,{children:"Invalid date formats"}),`
`,(0,e.jsx)(n.li,{children:"Single data points"}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,(0,e.jsx)(n.h3,{id:"keyboard-navigation-1",children:"Keyboard Navigation"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Tab"}),": Focus the chart container"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Arrow Keys"}),": Navigate between individual bars"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Enter/Space"}),": Activate tooltips or interactive elements"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Escape"}),": Close active tooltips"]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"screen-reader-support",children:"Screen Reader Support"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["Chart container has ",(0,e.jsx)(n.code,{children:'role="grid"'})," with descriptive ",(0,e.jsx)(n.code,{children:"aria-label"})]}),`
`,(0,e.jsx)(n.li,{children:"Individual bars are navigable and announced with their values"}),`
`,(0,e.jsx)(n.li,{children:"Interactive elements have appropriate ARIA attributes"}),`
`,(0,e.jsxs)(n.li,{children:["Color information is supplemented with patterns when ",(0,e.jsx)(n.code,{children:"withPatterns"})," is enabled"]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"focus-management",children:"Focus Management"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Clear visual focus indicators on chart and individual bars"}),`
`,(0,e.jsx)(n.li,{children:"Logical tab order through interactive elements"}),`
`,(0,e.jsx)(n.li,{children:"Focus restoration after modal interactions"}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"browser-compatibility",children:"Browser Compatibility"}),`
`,(0,e.jsx)(n.h3,{id:"modern-browser-support",children:"Modern Browser Support"}),`
`,(0,e.jsx)(n.p,{children:"Full functionality in all modern browsers supporting:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"SVG rendering and manipulation"}),`
`,(0,e.jsx)(n.li,{children:"CSS Grid and Flexbox layouts"}),`
`,(0,e.jsx)(n.li,{children:"ES6+ JavaScript features"}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"performance-considerations",children:"Performance Considerations"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["Optimized rendering using ",(0,e.jsx)(n.code,{children:"@visx/xychart"})," for efficient SVG generation"]}),`
`,(0,e.jsx)(n.li,{children:"Automatic data validation and error boundaries"}),`
`,(0,e.jsx)(n.li,{children:"Efficient pattern generation for accessibility features"}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsx)(n.h3,{id:"barchart",children:"BarChart"}),`
`,(0,e.jsx)(n.p,{children:"Main chart component with responsive behavior by default."}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Props:"})}),`
`,(0,e.jsxs)(n.table,{children:[(0,e.jsx)(n.thead,{children:(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.th,{children:"Prop"}),(0,e.jsx)(n.th,{children:"Type"}),(0,e.jsx)(n.th,{children:"Default"}),(0,e.jsx)(n.th,{children:"Description"})]})}),(0,e.jsxs)(n.tbody,{children:[(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"data"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"SeriesData[]"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsxs)(n.td,{children:[(0,e.jsx)(n.strong,{children:"Required."})," Array of data series to display"]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"chartId"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"auto-generated"}),(0,e.jsx)(n.td,{children:"Optional unique identifier for the chart"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"width"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:"responsive"}),(0,e.jsx)(n.td,{children:"Chart width in pixels"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"height"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"400"})}),(0,e.jsx)(n.td,{children:"Chart height in pixels"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"orientation"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'vertical' | 'horizontal'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'vertical'"})}),(0,e.jsx)(n.td,{children:"Bar orientation"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"withTooltips"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsx)(n.td,{children:"Enable interactive tooltips"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"withPatterns"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsx)(n.td,{children:"Use pattern fills for accessibility"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"showLegend"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsx)(n.td,{children:"Display chart legend"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendOrientation"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'horizontal' | 'vertical'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'horizontal'"})}),(0,e.jsx)(n.td,{children:"Legend layout orientation"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendAlignmentHorizontal"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'left' | 'center' | 'right'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'center'"})}),(0,e.jsx)(n.td,{children:"Horizontal legend alignment"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendAlignmentVertical"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'top' | 'bottom'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'bottom'"})}),(0,e.jsx)(n.td,{children:"Vertical legend alignment"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendShape"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"LegendShape"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'rect'"})}),(0,e.jsx)(n.td,{children:"Shape used in legend markers"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"gridVisibility"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'x' | 'y' | 'xy' | 'none'"})}),(0,e.jsx)(n.td,{children:"orientation-based"}),(0,e.jsx)(n.td,{children:"Grid line visibility"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"renderTooltip"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(params: RenderTooltipParams) => ReactNode"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Custom tooltip render function"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"margin"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"{ top?: number; right?: number; bottom?: number; left?: number }"})}),(0,e.jsx)(n.td,{children:"calculated"}),(0,e.jsx)(n.td,{children:"Chart margins"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"options"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"ChartOptions"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"{}"})}),(0,e.jsx)(n.td,{children:"Advanced axis and scale configuration"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"className"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Additional CSS class name"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"onPointerDown"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(event: EventHandlerParams) => void"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Pointer down event handler"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"onPointerUp"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(event: EventHandlerParams) => void"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Pointer up event handler"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"onPointerMove"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(event: EventHandlerParams) => void"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Pointer move event handler"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"onPointerOut"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(event: PointerEvent) => void"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Pointer out event handler"})]})]})]}),`
`,(0,e.jsx)(n.h3,{id:"seriesdata-type",children:"SeriesData Type"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type SeriesData = {
	label: string;
	data: DataPointDate[];
	options?: {
		stroke?: string;
	};
};
`})}),`
`,(0,e.jsx)(n.h3,{id:"datapointdate-type",children:"DataPointDate Type"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type DataPointDate = {
	date?: Date;
	dateString?: string; // Multiple formats supported
	value: number | null;
	label?: string;
};
`})}),`
`,(0,e.jsx)(n.h3,{id:"chartoptions-type",children:"ChartOptions Type"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type ChartOptions = {
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
`,(0,e.jsx)(n.h2,{id:"performance-considerations-1",children:"Performance Considerations"}),`
`,(0,e.jsx)(n.h3,{id:"built-in-optimizations",children:"Built-in Optimizations"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Efficient rendering"}),": Built on ",(0,e.jsx)(n.code,{children:"@visx/xychart"})," for optimized SVG rendering"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Data validation"}),": Automatic validation prevents rendering invalid data"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Responsive behavior"}),": Uses ",(0,e.jsx)(n.code,{children:"ResizeObserver"})," for efficient chart resizing"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Pattern caching"}),": Pattern definitions are cached and reused for performance"]}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"theming-integration",children:"Theming Integration"}),`
`,(0,e.jsx)(n.p,{children:"Bar Charts integrate seamlessly with the chart theming system:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`import { ThemeProvider, jetpackTheme } from '@automattic/charts';

<ThemeProvider theme={jetpackTheme}>
	<BarChart data={data} />
</ThemeProvider>`}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Available themes:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Default"}),": Neutral colors and styling"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Jetpack"}),": Jetpack brand colors and styling"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Woo"}),": WooCommerce brand colors and styling"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Custom"}),": Define your own theme object with custom color schemes"]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"The component automatically adapts bar colors, patterns, and styling based on the active theme while maintaining accessibility standards."})]})}function x(c={}){const{wrapper:n}={...(0,o.R)(),...c.components};return n?(0,e.jsx)(n,{...c,children:(0,e.jsx)(l,{...c})}):l(c)}},"../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive":h=>{function i(r){var s=new Error("Cannot find module '"+r+"'");throw s.code="MODULE_NOT_FOUND",s}i.keys=()=>[],i.resolve=i,i.id="../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive",h.exports=i},"../charts/src/components/bar-chart/stories/legend.stories.tsx":(h,i,r)=>{"use strict";r.r(i),r.d(i,{AlignmentPositioning:()=>j,Default:()=>n,HorizontalBars:()=>p,VerticalOrientation:()=>g,__namedExportsOrder:()=>m,default:()=>l});var s=r("../charts/src/stories/decorator-config.tsx"),e=r("../charts/src/stories/legend-config.tsx"),o=r("../charts/src/components/bar-chart/bar-chart.tsx"),t=r("../charts/src/components/bar-chart/stories/sample-data.ts"),a=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l={title:"JS Packages/Charts/Types/Bar Chart/Legend",component:o.A,parameters:{layout:"centered"},decorators:s.p,argTypes:e.r},x=u=>(0,a.jsx)(o.A,{...u}),c={data:t.A.slice(0,3),containerWidth:"800px",containerHeight:"400px",showLegend:!0,legendOrientation:"horizontal",withTooltips:!0},n=x.bind({});n.args={...c};const j=x.bind({});j.args={...c,legendAlignmentHorizontal:"right",legendAlignmentVertical:"top"};const g=x.bind({});g.args={...c,legendOrientation:"vertical",legendAlignmentHorizontal:"right",legendAlignmentVertical:"top"};const p=x.bind({});p.args={...c,orientation:"horizontal",legendAlignmentHorizontal:"right",legendAlignmentVertical:"top"};const m=["Default","AlignmentPositioning","VerticalOrientation","HorizontalBars"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...n.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...j.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...g.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...p.parameters?.docs?.source}}}},"../charts/src/stories/decorator-config.tsx":(h,i,r)=>{"use strict";r.d(i,{p:()=>o});var s=r("../charts/src/providers/theme/theme-provider.tsx"),e=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=[(t,{args:a})=>(0,e.jsx)(s.NP,{theme:a.theme,children:(0,e.jsx)("div",{style:{resize:a.resize??"both",overflow:"auto",padding:"1rem",width:a.containerWidth??"800px",height:a.containerHeight??"600px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,e.jsx)(t,{})})})];try{o.displayName="sharedDecorator",o.__docgenInfo={description:"Shared decorator for legend stories with theme support and resizable container",displayName:"sharedDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/decorator-config.tsx#sharedDecorator"]={docgenInfo:o.__docgenInfo,name:"sharedDecorator",path:"../charts/src/stories/decorator-config.tsx#sharedDecorator"})}catch{}},"../charts/src/stories/legend-config.tsx":(h,i,r)=>{"use strict";r.d(i,{r:()=>e});var s=r("../charts/src/providers/theme/themes.ts");const e={showLegend:{control:"boolean",table:{category:"Legend"}},legendAlignmentHorizontal:{control:"select",options:["left","center","right"],table:{category:"Legend"}},legendAlignmentVertical:{control:"select",options:["top","bottom"],table:{category:"Legend"}},legendOrientation:{control:"select",options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:"select",options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:"boolean",table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},theme:{control:"select",options:{default:void 0,jetpack:s.QI,woo:s.pk},defaultValue:void 0,table:{category:"Theme"}}};try{e.displayName="legendArgTypes",e.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:e.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive":h=>{function i(r){var s=new Error("Cannot find module '"+r+"'");throw s.code="MODULE_NOT_FOUND",s}i.keys=()=>[],i.resolve=i,i.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive",h.exports=i},"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive":h=>{function i(r){var s=new Error("Cannot find module '"+r+"'");throw s.code="MODULE_NOT_FOUND",s}i.keys=()=>[],i.resolve=i,i.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive",h.exports=i}}]);
