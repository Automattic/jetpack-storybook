import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{gt as n}from"./esm-Ct51DcYg.js";import{a as r,n as i,r as a,t as o}from"./blocks-B6gZl4kb.js";import{t as s}from"./mdx-react-shim-FEa06r5N.js";import{Animation as c,Default as l,Thin as u,WithCompositionLegend as d,WithTooltips as f,n as p,t as m}from"./donut.stories-DM5Jz7sA.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{title:`JS Packages/Charts Library/Charts/Donut Chart`,of:m}),`
`,(0,_.jsx)(t.h1,{id:`donut-chart`,children:`Donut Chart`}),`
`,(0,_.jsxs)(t.p,{children:[`Donut Charts are circular charts with a hollow center, perfect for displaying proportional data while providing space for additional content or summary information. They are created using the `,(0,_.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-pie-chart--docs`,children:`PieChart`}),` component with a `,(0,_.jsx)(t.code,{children:`thickness`}),` value less than 1.`]}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`Important:`}),` There is no separate DonutChart component. Donuts are created by configuring the PieChart component with `,(0,_.jsx)(t.code,{children:`thickness < 1`}),`. This means all PieChart props, features, and styling options are available for donut charts.`]}),`
`,(0,_.jsx)(o,{of:l}),`
`,(0,_.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,_.jsxs)(t.p,{children:[`Donut charts are created using the PieChart component with `,(0,_.jsx)(t.code,{children:`thickness`}),` < 1. All PieChart props are available.`]}),`
`,(0,_.jsxs)(t.p,{children:[`For detailed information about component props, types, compound components, and theme properties, see the `,(0,_.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-pie-chart-api-reference--docs`,children:`Pie Chart API Reference`}),`.`]}),`
`,(0,_.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,_.jsx)(t.h3,{id:`simple-donut-chart`,children:`Simple Donut Chart`}),`
`,(0,_.jsxs)(t.p,{children:[`Create a donut chart by setting the `,(0,_.jsx)(t.code,{children:`thickness`}),` prop to a value between 0 and 1:`]}),`
`,(0,_.jsx)(o,{of:l}),`
`,(0,_.jsx)(a,{language:`jsx`,code:`<PieChart
	thickness={ 0.5 }
	gapScale={ 0.03 }
	cornerScale={ 0.03 }
	withTooltips={ true }
	data={[
		{ label: 'Active Users', value: 65000, percentage: 65 },
		{ label: 'Inactive Users', value: 35000, percentage: 35 },
	]}
>
	<Group>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 24 } y={ -16 }>
			User Activity
		</Text>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 18 } y={ 16 }>
			Total: 100K Users
		</Text>
	</Group>
</PieChart>`}),`
`,(0,_.jsx)(t.h3,{id:`required-props`,children:`Required Props`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:(0,_.jsx)(t.code,{children:`thickness`})}),`: Value between 0 and 1 (e.g., 0.5 for 50% thickness, creating a donut)`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:(0,_.jsx)(t.code,{children:`data`})}),`: Array of `,(0,_.jsx)(t.code,{children:`DataPointPercentage`}),` objects`]}),`
`]}),`
`,(0,_.jsx)(t.h3,{id:`optional-props`,children:`Optional Props`}),`
`,(0,_.jsxs)(t.p,{children:[`All optional props from `,(0,_.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-pie-chart--docs`,children:`PieChart`}),` are supported. For detailed prop information, see the `,(0,_.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-pie-chart-api-reference--docs`,children:`Pie Chart API Reference`}),`.`]}),`
`,(0,_.jsx)(t.h3,{id:`key-differences-from-pie-charts`,children:`Key Differences from Pie Charts`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Hollow center`}),`: Provides space for additional content by setting `,(0,_.jsx)(t.code,{children:`thickness`}),` < 1`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Thickness control`}),`: Adjustable ring thickness determines the size of the hollow center`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Center content`}),`: Support for custom content in the center area using `,(0,_.jsx)(t.code,{children:`children`}),` prop`]}),`
`]}),`
`,(0,_.jsx)(t.h3,{id:`thickness-guidelines`,children:`Thickness Guidelines`}),`
`,(0,_.jsxs)(t.p,{children:[`The `,(0,_.jsx)(t.code,{children:`thickness`}),` prop controls the relationship between the inner and outer radius:`]}),`
`,(0,_.jsx)(t.p,{children:`Choose thickness values based on your content needs:`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`0.1 - 0.3`}),`: Thin rings, good for progress indicators and KPI displays`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`0.4 - 0.6`}),`: Balanced donuts, versatile for most use cases with ample center space`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`0.7 - 0.9`}),`: Thick donuts, when center content is minimal or when you want emphasis on the chart data`]}),`
`]}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`Formula`}),`: `,(0,_.jsx)(t.code,{children:`innerRadius = outerRadius × (1 - thickness)`})]}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`thickness 0.5 means the inner radius is 50% of the outer radius`}),`
`,(0,_.jsx)(t.li,{children:`thickness 0.8 means the inner radius is 20% of the outer radius`}),`
`]}),`
`,(0,_.jsx)(t.h3,{id:`center-content-guidelines`,children:`Center Content Guidelines`}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Typography Hierarchy:`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Use larger font sizes for primary metrics`}),`
`,(0,_.jsx)(t.li,{children:`Smaller font sizes for labels and descriptions`}),`
`,(0,_.jsx)(t.li,{children:`Consider font weight to establish visual hierarchy`}),`
`]}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Content Length:`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Keep text concise to fit comfortably in the center`}),`
`,(0,_.jsx)(t.li,{children:`Use abbreviations for large numbers (e.g., "1.2M" instead of "1,200,000")`}),`
`,(0,_.jsx)(t.li,{children:`Break long labels into multiple lines`}),`
`]}),`
`,(0,_.jsx)(t.h3,{id:`responsive-center-content`,children:`Responsive Center Content`}),`
`,(0,_.jsx)(t.p,{children:`Donut charts with center content need special attention for responsiveness:`}),`
`,(0,_.jsx)(a,{language:`jsx`,code:`// Responsive text sizing
const ResponsiveDonut = ({ size }) => {
	const fontSize = Math.max(12, size * 0.06); // Scale with chart size

	return (
		<PieChart thickness={ 0.5 } data={ data }>
			<Group>
				<Text
					textAnchor="middle"
					verticalAnchor="middle"
					fontSize={ fontSize }
				>
					{ totalValue }
				</Text>
			</Group>
		</PieChart>
	);
};`}),`
`,(0,_.jsx)(t.h2,{id:`donut-variations`,children:`Donut Variations`}),`
`,(0,_.jsx)(t.h3,{id:`thin-ring-donut`,children:`Thin Ring Donut`}),`
`,(0,_.jsx)(t.p,{children:`Create a thin ring by using a low thickness value:`}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsx)(a,{language:`jsx`,code:`<PieChart
	thickness={ 0.2 }
	gapScale={ 0.01 }
	showLabels={ false }
	data={ data }
>
	<Group>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 24 } y={ -16 }>
			Thin Donut
		</Text>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 18 } y={ 16 }>
			Thickness: 20%
		</Text>
	</Group>
</PieChart>`}),`
`,(0,_.jsx)(t.h2,{id:`interactive-features`,children:`Interactive Features`}),`
`,(0,_.jsx)(t.h3,{id:`donut-with-tooltips`,children:`Donut with Tooltips`}),`
`,(0,_.jsx)(t.p,{children:`Tooltips work seamlessly with donut charts:`}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(a,{language:`jsx`,code:`<PieChart
	thickness={ 0.5 }
	gapScale={ 0.03 }
	cornerScale={ 0.03 }
	showLabels={ false }
	withTooltips={ true }
	data={ data }
>
	<Group>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 14 } y={ -10 }>
			Hover over segments
		</Text>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 14 } y={ 10 }>
			to see tooltips
		</Text>
	</Group>
</PieChart>`}),`
`,(0,_.jsx)(t.h2,{id:`legends`,children:`Legends`}),`
`,(0,_.jsxs)(t.p,{children:[`Use the composition API to add a legend by placing `,(0,_.jsx)(t.code,{children:`<PieChart.Legend />`}),` as a child:`]}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(a,{language:`jsx`,code:`<PieChart
	data={ data }
	thickness={ 0.5 }
	gapScale={ 0.03 }
	cornerScale={ 0.03 }
	withTooltips={ true }
>
	<Group>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 24 } y={ -16 }>
			User Activity
		</Text>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 18 } y={ 16 }>
			Total: 100K Users
		</Text>
	</Group>
	<PieChart.Legend />
</PieChart>`}),`
`,(0,_.jsxs)(t.p,{children:[`For full legend configuration options — positioning, orientation, shapes, interactivity, and the composition API — see the `,(0,_.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-components-legend--docs`,children:`Legend component docs`}),`.`]}),`
`,(0,_.jsx)(t.h3,{id:`data-validation-and-error-handling`,children:`Data Validation and Error Handling`}),`
`,(0,_.jsx)(t.p,{children:`Donut charts inherit the same robust data validation from PieChart:`}),`
`,(0,_.jsx)(a,{language:`jsx`,code:`// The chart validates:
// - Empty data: Shows appropriate message when no data is provided
// - Percentage totals: Ensures percentages sum to 100%
// - Negative values: Prevents invalid negative values
// - Single data points: Handles edge cases gracefully

// Invalid data example - will show error message
const invalidData = [
	{ label: 'A', value: 50, percentage: 60 }, // Percentages don't sum to 100
	{ label: 'B', value: 30, percentage: 30 },
];

<PieChart thickness={ 0.4 } data={ invalidData }>
	<Group>
		<Text textAnchor="middle" verticalAnchor="middle">
			This won't render
		</Text>
	</Group>
</PieChart>`}),`
`,(0,_.jsx)(t.h2,{id:`responsive-behavior`,children:`Responsive Behavior`}),`
`,(0,_.jsxs)(t.p,{children:[`The donut chart supports responsive sizing by omitting the `,(0,_.jsx)(t.code,{children:`size`}),` prop:`]}),`
`,(0,_.jsx)(a,{language:`jsx`,code:`// Responsive donut - fills parent container
<PieChart
	thickness={ 0.4 }
	data={ data }
	maxWidth={ 600 }
	aspectRatio={ 1 }
>
	<Group>
		<Text textAnchor="middle" verticalAnchor="middle">
			Responsive Content
		</Text>
	</Group>
</PieChart>

// Fixed size donut
<PieChart
	size={ 400 }
	thickness={ 0.4 }
	data={ data }
>
	<Group>
		<Text textAnchor="middle" verticalAnchor="middle">
			Fixed Content
		</Text>
	</Group>
</PieChart>`}),`
`,(0,_.jsxs)(t.p,{children:[`For more details on responsive behavior, see the `,(0,_.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design`,children:`Responsive Design section`}),` in the introduction.`]}),`
`,(0,_.jsx)(t.h2,{id:`animation`,children:`Animation`}),`
`,(0,_.jsx)(t.p,{children:`Donut charts support an optional entry animation that creates a smooth reveal effect when the chart first renders:`}),`
`,(0,_.jsx)(o,{of:c}),`
`,(0,_.jsx)(a,{language:`jsx`,code:`<PieChart
	thickness={ 0.5 }
	gapScale={ 0.03 }
	cornerScale={ 0.03 }
	withTooltips={ true }
	data={ data }
	animation={ true }
>
	<Group>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 24 } y={ -16 }>
			User Activity
		</Text>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 18 } y={ 16 }>
			Total: 100K Users
		</Text>
	</Group>
</PieChart>`}),`
`,(0,_.jsx)(t.h3,{id:`animation-behavior`,children:`Animation Behavior`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Opt-in`}),`: Animation is disabled by default and must be explicitly enabled with the `,(0,_.jsx)(t.code,{children:`animation`}),` prop`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Accessibility`}),`: Automatically respects the user's `,(0,_.jsx)(t.code,{children:`prefers-reduced-motion`}),` system setting - animation will not play for users who prefer reduced motion`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Effect`}),`: Creates a radial wipe reveal effect that sweeps clockwise from the top, progressively revealing the donut segments`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Duration`}),`: 1000ms (1 second)`]}),`
`]}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`Note`}),`: The animation plays once when the chart initially renders and does not repeat. Since donuts are created using PieChart, they use the same animation system.`]}),`
`,(0,_.jsx)(t.h2,{id:`common-use-cases`,children:`Common Use Cases`}),`
`,(0,_.jsx)(t.h3,{id:`dashboard-metrics`,children:`Dashboard Metrics`}),`
`,(0,_.jsx)(t.p,{children:`Perfect for displaying KPIs with context:`}),`
`,(0,_.jsx)(a,{language:`jsx`,code:`<PieChart thickness={ 0.4 } data={ conversionData }>
	<Group>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 32 } fontWeight="bold">
			12.5%
		</Text>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 16 } y={ 20 }>
			Conversion Rate
		</Text>
	</Group>
</PieChart>`}),`
`,(0,_.jsx)(t.h3,{id:`progress-tracking`,children:`Progress Tracking`}),`
`,(0,_.jsx)(t.p,{children:`Show completion status with remaining work:`}),`
`,(0,_.jsx)(a,{language:`jsx`,code:`<PieChart thickness={ 0.3 } data={ taskData }>
	<Group>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 24 } fontWeight="bold">
			24/30
		</Text>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 14 } y={ 20 }>
			Tasks Complete
		</Text>
	</Group>
</PieChart>`}),`
`,(0,_.jsx)(t.h3,{id:`resource-allocation`,children:`Resource Allocation`}),`
`,(0,_.jsx)(t.p,{children:`Display resource distribution with totals:`}),`
`,(0,_.jsx)(a,{language:`jsx`,code:`<PieChart thickness={ 0.5 } data={ budgetData }>
	<Group>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 20 } fontWeight="bold">
			$1.2M
		</Text>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 14 } y={ 20 }>
			Total Budget
		</Text>
	</Group>
</PieChart>`}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsx)(t.h3,{id:`screen-reader-support`,children:`Screen Reader Support`}),`
`,(0,_.jsx)(t.p,{children:`Center content in donut charts should be properly announced:`}),`
`,(0,_.jsx)(a,{language:`jsx`,code:`<PieChart thickness={ 0.5 } data={ data }>
	<Group>
		<Text
			textAnchor="middle"
			verticalAnchor="middle"
			role="img"
			aria-label="Total users: 100,000"
		>
			100K
		</Text>
	</Group>
</PieChart>`})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=t(),s(),r(),p()}))();export{g as default};