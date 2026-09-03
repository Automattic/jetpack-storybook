import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{bt as n}from"./esm-Dy-yQYGP.js";import{i as r,n as i,r as a,t as o}from"./blocks-Cj-nYAVd.js";import{t as s}from"./mdx-react-shim-DXiQxizf.js";import{Animation as c,CustomLabelComponent as l,CustomValueComponent as u,Default as d,MultiSeries as f,n as p,t as m}from"./index.stories-DxvgjS8L.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{title:`JS Packages/Charts Library/Charts/Bar List Chart`,of:m}),`
`,(0,_.jsx)(t.h1,{id:`bar-list-chart`,children:`Bar List Chart`}),`
`,(0,_.jsx)(t.p,{children:`A specialized horizontal bar chart component that displays data as a ranked list with labels and values positioned alongside the bars. Ideal for showing comparisons between categories or time periods.`}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,_.jsx)(t.p,{children:`The BarListChart component extends the BarChart component to create a list-style visualization that combines horizontal bars with text labels and values. It automatically handles positioning of labels on the left and values on the right, making it perfect for dashboards and reports that need to display ranked data clearly.`}),`
`,(0,_.jsx)(a,{language:`jsx`,code:`import { BarListChart } from '@automattic/charts';
import '@automattic/charts/style.css';

const data = [
	{
		group: 'primary',
		label: 'Sales By Product',
		data: [
			{ label: 'Product A', value: 32400 },
			{ label: 'Product B', value: 20000 },
			{ label: 'Product C', value: 15000 },
		],
	},
];

<BarListChart data={ data } />`}),`
`,(0,_.jsx)(t.p,{children:`Key features:`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Automatic label and value positioning`}),`
`,(0,_.jsx)(t.li,{children:`Support for single and multi-series data`}),`
`,(0,_.jsx)(t.li,{children:`Customizable formatters for labels and values`}),`
`,(0,_.jsx)(t.li,{children:`Custom component rendering for advanced styling`}),`
`,(0,_.jsx)(t.li,{children:`Responsive design with automatic sizing`}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,_.jsxs)(t.p,{children:[`For detailed information about component props, types, and method signatures, see the `,(0,_.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-bar-list-chart-api-reference--docs`,children:`Bar List Chart API Reference`}),`.`]}),`
`,(0,_.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,_.jsx)(t.h3,{id:`single-series-data`,children:`Single Series Data`}),`
`,(0,_.jsx)(t.p,{children:`The simplest implementation displays a single series of data with automatic formatting:`}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(a,{language:`jsx`,code:`const singleSeriesData = [
	{
		group: 'primary',
		label: 'Sales By Product',
		data: [
			{ label: 'Behemoth hat', value: 32400 },
			{ label: 'Margarita top', value: 20000 },
			{ label: 'Berlioz dress', value: 15000 },
			{ label: 'Woland shirt', value: 16000 },
		],
	},
];

<BarListChart
	data={ singleSeriesData }
	withTooltips={ true }
/>`}),`
`,(0,_.jsx)(t.h3,{id:`multi-series-data`,children:`Multi-Series Data`}),`
`,(0,_.jsx)(t.p,{children:`Compare data across different time periods or categories:`}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(a,{language:`jsx`,code:`const multiSeriesData = [
	{
		group: 'primary',
		label: 'Jan 21-Aug 8, 2024',
		data: [
			{ label: 'Organic search', value: 30000 },
			{ label: 'Affiliates', value: 19000 },
			{ label: 'Display', value: 18000 },
		],
	},
	{
		group: 'comparison',
		label: 'Jan 21-Aug 8, 2023',
		data: [
			{ label: 'Organic search', value: 20000 },
			{ label: 'Affiliates', value: 15000 },
			{ label: 'Display', value: 19900 },
		],
	},
];

<BarListChart data={ multiSeriesData } />`}),`
`,(0,_.jsx)(t.h3,{id:`required-props`,children:`Required Props`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:(0,_.jsx)(t.code,{children:`data`})}),`: Array of SeriesData objects containing the chart data`]}),`
`]}),`
`,(0,_.jsxs)(t.p,{children:[`For detailed prop information and configuration options, see the `,(0,_.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-bar-list-chart-api-reference--docs`,children:`Bar List Chart API Reference`}),`.`]}),`
`,(0,_.jsx)(t.h2,{id:`chart-types`,children:`Chart Types`}),`
`,(0,_.jsx)(t.h3,{id:`single-series-default`,children:`Single Series (Default)`}),`
`,(0,_.jsx)(t.p,{children:`Best for displaying a simple ranked list of items:`}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(t.p,{children:`Characteristics:`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Compact layout with minimal padding`}),`
`,(0,_.jsx)(t.li,{children:`Labels positioned closer to bars`}),`
`,(0,_.jsx)(t.li,{children:`Values displayed with compact number formatting`}),`
`,(0,_.jsx)(t.li,{children:`Ideal for product rankings, performance metrics`}),`
`]}),`
`,(0,_.jsx)(t.h3,{id:`multi-series-comparison`,children:`Multi-Series Comparison`}),`
`,(0,_.jsx)(t.p,{children:`Perfect for comparing data across time periods or categories:`}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(t.p,{children:`Characteristics:`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Increased padding for better visual separation`}),`
`,(0,_.jsx)(t.li,{children:`Grouped bars for comparison`}),`
`,(0,_.jsx)(t.li,{children:`Automatic calculation of totals for value display`}),`
`,(0,_.jsx)(t.li,{children:`Color coding based on series groups`}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`styling-and-customization`,children:`Styling and Customization`}),`
`,(0,_.jsx)(t.h3,{id:`custom-label-components`,children:`Custom Label Components`}),`
`,(0,_.jsx)(t.p,{children:`Create custom label rendering with icons or enhanced styling:`}),`
`,(0,_.jsx)(o,{of:l}),`
`,(0,_.jsx)(a,{language:`jsx`,code:`import { Circle } from '@visx/shape';
import { Text } from '@visx/text';

<BarListChart
	data={ data }
	options={ {
		labelComponent: ( { textProps, x, y, label, formatter } ) => (
			<>
				<Circle cx={ x + 6 } cy={ y } r={ 8 } />
				<Text
					{ ...textProps }
					textAnchor="start"
					x={ x + 24 }
					y={ y }
					fontWeight={ 500 }
				>
					{ formatter( label ) }
				</Text>
			</>
		),
	} }
/>`}),`
`,(0,_.jsx)(t.h3,{id:`custom-value-components`,children:`Custom Value Components`}),`
`,(0,_.jsx)(t.p,{children:`Display additional information alongside values:`}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsx)(a,{language:`jsx`,code:`<BarListChart
	data={ data }
	options={ {
		valueComponent: ( { textProps, x, y, value, formatter, data, index } ) => {
			const currentValue = data[0].data[index].value;
			const previousValue = data[1].data[index].value;
			const percentage = previousValue === 0 ? 0 :
				(((currentValue - previousValue) / previousValue) * 100).toFixed(0);

			return (
				<>
					<Text
						{ ...textProps }
						textAnchor="end"
						x={ x }
						y={ y }
						dx={ -50 }
						fontWeight={ 500 }
					>
						{ formatter( value ) }
					</Text>
					<Text
						{ ...textProps }
						textAnchor="end"
						x={ x }
						y={ y }
						dx={ -10 }
						fill="#008A20"
						fontWeight={ 500 }
					>
						{ \`\${ Number( percentage ) > 0 ? '+' : '' }\${ percentage }%\` }
					</Text>
				</>
			);
		},
		valueFormatter: ( value ) => \`$\${ formatNumberCompact( value ) }\`,
	} }
/>`}),`
`,(0,_.jsx)(t.h3,{id:`formatting-options`,children:`Formatting Options`}),`
`,(0,_.jsxs)(t.p,{children:[`The `,(0,_.jsx)(t.code,{children:`options`}),` prop accepts various formatting and positioning controls:`]}),`
`,(0,_.jsx)(t.h4,{id:`labelformatter`,children:(0,_.jsx)(t.code,{children:`labelFormatter`})}),`
`,(0,_.jsx)(t.p,{children:`Controls how labels are displayed:`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-jsx`,children:`options: {
	labelFormatter: (value) => value.toUpperCase()
}
`})}),`
`,(0,_.jsx)(t.h4,{id:`valueformatter`,children:(0,_.jsx)(t.code,{children:`valueFormatter`})}),`
`,(0,_.jsx)(t.p,{children:`Controls how values are formatted:`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-jsx`,children:`options: {
	valueFormatter: (value) => \`$\${formatNumberCompact(value)}\`
}
`})}),`
`,(0,_.jsxs)(t.h4,{id:`labelposition-and-valueposition`,children:[(0,_.jsx)(t.code,{children:`labelPosition`}),` and `,(0,_.jsx)(t.code,{children:`valuePosition`})]}),`
`,(0,_.jsx)(t.p,{children:`Control the horizontal positioning of text elements:`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-jsx`,children:`options: {
	labelPosition: 20,    // X position for labels
	valuePosition: 400,   // X position for values
}
`})}),`
`,(0,_.jsx)(t.h2,{id:`theming-integration`,children:`Theming Integration`}),`
`,(0,_.jsx)(t.p,{children:`Bar List Charts integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided.`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`Bar colors come from the palette custom properties, not the theme object.`}),` Set as many of the five slots as you need; an unset slot is skipped, and charts generates accessible colors beyond whatever you set:`]}),`
`,(0,_.jsx)(a,{language:`css`,code:`.a8c-charts-scope {
	--a8c-charts-color-series-1: #FF6B6B;
	--a8c-charts-color-series-2: #4ECDC4;
	--a8c-charts-color-series-3: #45B7D1;
}`}),`
`,(0,_.jsxs)(t.p,{children:[`Every other color works the same way — declare its catalog role. The closest declaration inside the provider tree wins, so scope the rule to one dashboard, or to `,(0,_.jsx)(t.code,{children:`.a8c-charts-scope`}),` to move every chart on the page:`]}),`
`,(0,_.jsx)(a,{language:`css`,code:`.my-dashboard {
	--a8c-charts-color-background: #f5f5f5;
}`}),`
`,(0,_.jsx)(t.h2,{id:`responsive-behavior`,children:`Responsive Behavior`}),`
`,(0,_.jsxs)(t.p,{children:[`By default, BarListChart `,(0,_.jsx)(t.strong,{children:`fills its parent container's dimensions`}),`. The parent must have an explicit height:`]}),`
`,(0,_.jsx)(a,{language:`jsx`,code:`// Fill parent container (default) - parent needs explicit height
<div style={{ width: '100%', height: '300px' }}>
	<BarListChart data={data} />
</div>

// Use aspect ratio - height from width, contained if the parent is shorter
<div style={{ width: '100%' }}>
	<BarListChart data={data} aspectRatio={0.4} />
</div>

// Fixed dimensions
<BarListChart data={data} width={600} height={300} />`}),`
`,(0,_.jsxs)(t.p,{children:[`For more details on responsive behavior, see the `,(0,_.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design`,children:`Responsive Design section`}),` in the introduction.`]}),`
`,(0,_.jsx)(t.h2,{id:`animation`,children:`Animation`}),`
`,(0,_.jsx)(t.p,{children:`The Bar List Chart component supports an optional entry animation that creates a smooth reveal effect when the chart first renders:`}),`
`,(0,_.jsx)(o,{of:c}),`
`,(0,_.jsx)(a,{language:`tsx`,code:`<BarListChart
	data={ data }
	animation={ true }
/>`}),`
`,(0,_.jsx)(t.h3,{id:`animation-behavior`,children:`Animation Behavior`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Opt-in`}),`: Animation is disabled by default and must be explicitly enabled with the `,(0,_.jsx)(t.code,{children:`animation`}),` prop`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Accessibility`}),`: Automatically respects the user's `,(0,_.jsx)(t.code,{children:`prefers-reduced-motion`}),` system setting - animation will not play for users who prefer reduced motion`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Effect`}),`: Creates a stretching effect where bars grow from left to right, revealing the data progressively`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Duration`}),`: 1000ms (1 second) with ease-out timing`]}),`
`]}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`Note`}),`: The animation plays once when the chart initially renders and does not repeat.`]}),`
`,(0,_.jsx)(t.h2,{id:`advanced-features`,children:`Advanced Features`}),`
`,(0,_.jsx)(t.h3,{id:`scale-configuration`,children:`Scale Configuration`}),`
`,(0,_.jsx)(t.p,{children:`Customize the chart scales for precise control over bar sizing and spacing:`}),`
`,(0,_.jsx)(a,{language:`jsx`,code:`<BarListChart
	data={ data }
	options={ {
		yScale: {
			paddingInner: 0.4,  // Space between bars
			padding: 0.2,       // Outer padding
		},
		xScale: {
			zero: true,         // Always start from zero
		},
	} }
/>`}),`
`,(0,_.jsx)(t.h3,{id:`automatic-layout-calculation`,children:`Automatic Layout Calculation`}),`
`,(0,_.jsx)(t.p,{children:`The component automatically calculates optimal positioning based on:`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Number of data series (single vs multi-series)`}),`
`,(0,_.jsx)(t.li,{children:`Chart dimensions`}),`
`,(0,_.jsx)(t.li,{children:`Content overflow considerations`}),`
`]}),`
`,(0,_.jsx)(t.p,{children:`For multi-series charts, the component automatically adjusts:`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Bar thickness and spacing`}),`
`,(0,_.jsx)(t.li,{children:`Label positioning`}),`
`,(0,_.jsx)(t.li,{children:`Y-offset calculations for proper text alignment`}),`
`]}),`
`,(0,_.jsx)(t.h3,{id:`custom-positioning`,children:`Custom Positioning`}),`
`,(0,_.jsx)(t.p,{children:`Override automatic positioning when needed:`}),`
`,(0,_.jsx)(a,{language:`jsx`,code:`<BarListChart
	data={ data }
	options={ {
		yOffset: -20,          // Vertical offset for text
		labelPosition: 10,     // Fixed label position
		valuePosition: 380,    // Fixed value position
	} }
/>`}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsx)(t.p,{children:`BarListChart inherits accessibility features from the underlying BarChart component, including keyboard navigation support when tooltips are enabled and proper ARIA attributes for screen readers.`}),`
`,(0,_.jsx)(t.h2,{id:`migration-from-bar-chart`,children:`Migration from Bar Chart`}),`
`,(0,_.jsx)(t.p,{children:`If you're currently using a horizontal BarChart for list-style data, BarListChart provides a more optimized experience:`}),`
`,(0,_.jsx)(a,{language:`jsx`,code:`
// Old approach with BarChart
<BarChart
	orientation="horizontal"
	data={ data }
	// Complex custom axis configuration needed
	options={ {
		axis: {
			y: { /* complex custom renderer */ },
			x: { children: () => null }
		}
	} }
/>

// New approach with BarListChart
<BarListChart data={ data } />
`}),`
`,(0,_.jsx)(t.p,{children:`Benefits of migration:`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Automatic label and value positioning`}),`
`,(0,_.jsx)(t.li,{children:`Built-in formatting with sensible defaults`}),`
`,(0,_.jsx)(t.li,{children:`Simplified API for common use cases`}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=t(),s(),r(),p()}))();export{g as default};