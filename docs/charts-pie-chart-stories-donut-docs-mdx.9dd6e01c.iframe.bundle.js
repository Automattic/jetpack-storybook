"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[805,8513],{"../charts/src/charts/pie-chart/stories/donut.docs.mdx"(D,f,i){i.r(f),i.d(f,{default:()=>v});var p=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),x=i("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.28_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),o=i("../../../node_modules/.pnpm/@storybook+addon-docs@10.2.11_@types+react@18.3.28_esbuild@0.25.9_storybook@10.2.11_@te_623b11407ff81c3407704a8a948465b9/node_modules/@storybook/addon-docs/dist/blocks.js"),l=i("../charts/src/charts/pie-chart/stories/donut.stories.tsx");function g(c){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,x.R)(),...c.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.W8,{title:"JS Packages/Charts Library/Charts/Donut Chart",of:l}),`
`,(0,e.jsx)(t.h1,{id:"donut-chart",children:"Donut Chart"}),`
`,(0,e.jsxs)(t.p,{children:["Donut Charts are circular charts with a hollow center, perfect for displaying proportional data while providing space for additional content or summary information. They are created using the ",(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-library-charts-pie-chart--docs",children:"PieChart"})," component with a ",(0,e.jsx)(t.code,{children:"thickness"})," value less than 1."]}),`
`,(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.strong,{children:"Important:"})," There is no separate DonutChart component. Donuts are created by configuring the PieChart component with ",(0,e.jsx)(t.code,{children:"thickness < 1"}),". This means all PieChart props, features, and styling options are available for donut charts."]}),`
`,(0,e.jsx)(o.Hl,{of:l.Default}),`
`,(0,e.jsx)(t.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsxs)(t.p,{children:["Donut charts are created using the PieChart component with ",(0,e.jsx)(t.code,{children:"thickness"})," < 1. All PieChart props are available."]}),`
`,(0,e.jsxs)(t.p,{children:["For detailed information about component props, types, compound components, and theme properties, see the ",(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-library-charts-pie-chart-api-reference--docs",children:"Pie Chart API Reference"}),"."]}),`
`,(0,e.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(t.h3,{id:"simple-donut-chart",children:"Simple Donut Chart"}),`
`,(0,e.jsxs)(t.p,{children:["Create a donut chart by setting the ",(0,e.jsx)(t.code,{children:"thickness"})," prop to a value between 0 and 1:"]}),`
`,(0,e.jsx)(o.Hl,{of:l.Default}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<PieChart
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
`,(0,e.jsx)(t.h3,{id:"required-props",children:"Required Props"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"thickness"})}),": Value between 0 and 1 (e.g., 0.5 for 50% thickness, creating a donut)"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"data"})}),": Array of ",(0,e.jsx)(t.code,{children:"DataPointPercentage"})," objects"]}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"optional-props",children:"Optional Props"}),`
`,(0,e.jsxs)(t.p,{children:["All optional props from ",(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-library-charts-pie-chart--docs",children:"PieChart"})," are supported. For detailed prop information, see the ",(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-library-charts-pie-chart-api-reference--docs",children:"Pie Chart API Reference"}),"."]}),`
`,(0,e.jsx)(t.h3,{id:"key-differences-from-pie-charts",children:"Key Differences from Pie Charts"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Hollow center"}),": Provides space for additional content by setting ",(0,e.jsx)(t.code,{children:"thickness"})," < 1"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Thickness control"}),": Adjustable ring thickness determines the size of the hollow center"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Center content"}),": Support for custom content in the center area using ",(0,e.jsx)(t.code,{children:"children"})," prop"]}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"thickness-guidelines",children:"Thickness Guidelines"}),`
`,(0,e.jsxs)(t.p,{children:["The ",(0,e.jsx)(t.code,{children:"thickness"})," prop controls the relationship between the inner and outer radius:"]}),`
`,(0,e.jsx)(t.p,{children:"Choose thickness values based on your content needs:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"0.1 - 0.3"}),": Thin rings, good for progress indicators and KPI displays"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"0.4 - 0.6"}),": Balanced donuts, versatile for most use cases with ample center space"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"0.7 - 0.9"}),": Thick donuts, when center content is minimal or when you want emphasis on the chart data"]}),`
`]}),`
`,(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.strong,{children:"Formula"}),": ",(0,e.jsx)(t.code,{children:"innerRadius = outerRadius \xD7 (1 - thickness)"})]}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"thickness 0.5 means the inner radius is 50% of the outer radius"}),`
`,(0,e.jsx)(t.li,{children:"thickness 0.8 means the inner radius is 20% of the outer radius"}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"center-content-guidelines",children:"Center Content Guidelines"}),`
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"Typography Hierarchy:"})}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Use larger font sizes for primary metrics"}),`
`,(0,e.jsx)(t.li,{children:"Smaller font sizes for labels and descriptions"}),`
`,(0,e.jsx)(t.li,{children:"Consider font weight to establish visual hierarchy"}),`
`]}),`
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"Content Length:"})}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Keep text concise to fit comfortably in the center"}),`
`,(0,e.jsx)(t.li,{children:'Use abbreviations for large numbers (e.g., "1.2M" instead of "1,200,000")'}),`
`,(0,e.jsx)(t.li,{children:"Break long labels into multiple lines"}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"responsive-center-content",children:"Responsive Center Content"}),`
`,(0,e.jsx)(t.p,{children:"Donut charts with center content need special attention for responsiveness:"}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`// Responsive text sizing
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
`,(0,e.jsx)(t.h2,{id:"donut-variations",children:"Donut Variations"}),`
`,(0,e.jsx)(t.h3,{id:"thin-ring-donut",children:"Thin Ring Donut"}),`
`,(0,e.jsx)(t.p,{children:"Create a thin ring by using a low thickness value:"}),`
`,(0,e.jsx)(o.Hl,{of:l.Thin}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<PieChart
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
`,(0,e.jsx)(t.h2,{id:"interactive-features",children:"Interactive Features"}),`
`,(0,e.jsx)(t.h3,{id:"donut-with-tooltips",children:"Donut with Tooltips"}),`
`,(0,e.jsx)(t.p,{children:"Tooltips work seamlessly with donut charts:"}),`
`,(0,e.jsx)(o.Hl,{of:l.WithTooltips}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<PieChart
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
`,(0,e.jsx)(t.h2,{id:"legends",children:"Legends"}),`
`,(0,e.jsx)(t.h3,{id:"donut-with-legend",children:"Donut with Legend"}),`
`,(0,e.jsx)(t.p,{children:"Combine legends with donut charts for comprehensive data presentation:"}),`
`,(0,e.jsx)(o.Hl,{of:l.WithLegend}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<PieChart
	thickness={ 0.5 }
	gapScale={ 0.03 }
	cornerScale={ 0.03 }
	withTooltips={ true }
	showLegend={ true }
	data={ data }
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
`,(0,e.jsx)(t.h3,{id:"data-validation-and-error-handling",children:"Data Validation and Error Handling"}),`
`,(0,e.jsx)(t.p,{children:"Donut charts inherit the same robust data validation from PieChart:"}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`// The chart validates:
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
`,(0,e.jsx)(t.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,(0,e.jsxs)(t.p,{children:["The donut chart supports responsive sizing by omitting the ",(0,e.jsx)(t.code,{children:"size"})," prop:"]}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`// Responsive donut - fills parent container
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
`,(0,e.jsxs)(t.p,{children:["For more details on responsive behavior, see the ",(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design",children:"Responsive Design section"})," in the introduction."]}),`
`,(0,e.jsx)(t.h2,{id:"animation",children:"Animation"}),`
`,(0,e.jsx)(t.p,{children:"Donut charts support an optional entry animation that creates a smooth reveal effect when the chart first renders:"}),`
`,(0,e.jsx)(o.Hl,{of:l.Animation}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<PieChart
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
`,(0,e.jsx)(t.h3,{id:"animation-behavior",children:"Animation Behavior"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Opt-in"}),": Animation is disabled by default and must be explicitly enabled with the ",(0,e.jsx)(t.code,{children:"animation"})," prop"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Accessibility"}),": Automatically respects the user's ",(0,e.jsx)(t.code,{children:"prefers-reduced-motion"})," system setting - animation will not play for users who prefer reduced motion"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Effect"}),": Creates a radial wipe reveal effect that sweeps clockwise from the top, progressively revealing the donut segments"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Duration"}),": 1000ms (1 second)"]}),`
`]}),`
`,(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.strong,{children:"Note"}),": The animation plays once when the chart initially renders and does not repeat. Since donuts are created using PieChart, they use the same animation system."]}),`
`,(0,e.jsx)(t.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,(0,e.jsx)(t.h3,{id:"dashboard-metrics",children:"Dashboard Metrics"}),`
`,(0,e.jsx)(t.p,{children:"Perfect for displaying KPIs with context:"}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<PieChart thickness={ 0.4 } data={ conversionData }>
	<Group>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 32 } fontWeight="bold">
			12.5%
		</Text>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 16 } y={ 20 }>
			Conversion Rate
		</Text>
	</Group>
</PieChart>`}),`
`,(0,e.jsx)(t.h3,{id:"progress-tracking",children:"Progress Tracking"}),`
`,(0,e.jsx)(t.p,{children:"Show completion status with remaining work:"}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<PieChart thickness={ 0.3 } data={ taskData }>
	<Group>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 24 } fontWeight="bold">
			24/30
		</Text>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 14 } y={ 20 }>
			Tasks Complete
		</Text>
	</Group>
</PieChart>`}),`
`,(0,e.jsx)(t.h3,{id:"resource-allocation",children:"Resource Allocation"}),`
`,(0,e.jsx)(t.p,{children:"Display resource distribution with totals:"}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<PieChart thickness={ 0.5 } data={ budgetData }>
	<Group>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 20 } fontWeight="bold">
			$1.2M
		</Text>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 14 } y={ 20 }>
			Total Budget
		</Text>
	</Group>
</PieChart>`}),`
`,(0,e.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,(0,e.jsx)(t.h3,{id:"screen-reader-support",children:"Screen Reader Support"}),`
`,(0,e.jsx)(t.p,{children:"Center content in donut charts should be properly announced:"}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<PieChart thickness={ 0.5 } data={ data }>
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
</PieChart>`})]})}function v(c={}){const{wrapper:t}={...(0,x.R)(),...c.components};return t?(0,e.jsx)(t,{...c,children:(0,e.jsx)(g,{...c})}):g(c)}},"../charts/src/charts/pie-chart/stories/donut.stories.tsx"(D,f,i){i.r(f),i.d(f,{Animation:()=>A,CustomLegend:()=>P,Default:()=>r,ErrorStates:()=>h,Thin:()=>j,WithCompositionLegend:()=>S,WithLegend:()=>C,WithSize:()=>m,WithTooltips:()=>T,WithoutCenter:()=>u,__namedExportsOrder:()=>k,default:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+components@32.3.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.mjs"),e=i("../../../node_modules/.pnpm/@wordpress+components@32.3.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.mjs"),x=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=i("../charts/src/stories/chart-decorator.tsx"),l=i("../charts/src/stories/theme-config.tsx"),g=i("../charts/src/stories/legend-config.tsx"),v=i("../charts/src/stories/sample-data/index.ts"),c=i("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),t=i("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),s=i("../charts/src/charts/pie-chart/pie-chart.tsx"),n=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a=[{label:"Active Users",value:65e3,valueDisplay:"65K",percentage:65},{label:"Inactive Users",value:35e3,valueDisplay:"35K",percentage:35}],y={title:"JS Packages/Charts Library/Charts/Donut Chart",component:s.A,parameters:{layout:"centered"},decorators:[o.OI],argTypes:{...o.xo,...l.jW,...g.r,legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}}},render:_=>{const b=(0,g.D)(_);return(0,n.jsx)(s.A,{..._,legend:b})}},r={args:{...l.In,containerWidth:"432px",containerHeight:"432px",thickness:.5,gapScale:.03,cornerScale:.03,withTooltips:!0,data:a,children:(0,n.jsxs)(c.A,{children:[(0,n.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"User Activity"}),(0,n.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Total: 100K Users"})]})}},m={args:{...r.args,size:200,thickness:.3,showLabels:!1,children:(0,n.jsxs)(c.A,{children:[(0,n.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:-16,children:"User Activity"}),(0,n.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:16,children:"Total: 100K Users"})]})}},u={args:{...r.args,children:void 0}},h={render:()=>(0,n.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Empty Data"}),(0,n.jsx)(s.A,{height:300,thickness:.6,data:[]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Single Value"}),(0,n.jsx)(s.A,{height:300,thickness:.6,data:[{label:"Single",value:100,percentage:100}]})]})]})},j={args:{...r.args,thickness:.2,gapScale:.01,showLabels:!1,children:(0,n.jsxs)(c.A,{children:[(0,n.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"Thin Donut"}),(0,n.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Thickness: 20%"})]})}},A={args:{...r.args,animation:!0}},T={args:{...r.args,showLabels:!1,withTooltips:!0,children:(0,n.jsxs)(c.A,{children:[(0,n.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:-10,children:"Hover over segments"}),(0,n.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:10,children:"to see tooltips"})]})}},C={args:{...r.args,showLegend:!0,containerHeight:"500px"},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},S={render:_=>{const b=(0,g.D)(_);return(0,n.jsxs)(s.A,{..._,size:300,thickness:.5,legend:{interactive:b?.interactive},chartId:"composition-donut-chart",children:[(0,n.jsxs)(c.A,{children:[(0,n.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,n.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]}),(0,n.jsx)(s.A.Legend,{...b})]})},args:{data:a,thickness:.5},parameters:{docs:{description:{story:"Composition API using `<PieChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},L=({chartItems:_,items:b,withComparison:z})=>(0,n.jsx)("div",{style:{display:"inline-grid",gridTemplateColumns:"1fr auto auto",gap:"var(--wpds-dimension-gap-xs, 4px) var(--wpds-dimension-gap-sm, 8px)"},children:b.map((w,E)=>{const{color:O}=_[E];return(0,n.jsxs)(x.Fragment,{children:[(0,n.jsxs)(p.A,{direction:"row",justify:"flex-start",spacing:2,children:[(0,n.jsx)("div",{style:{width:"8px",height:"8px",borderRadius:"50%",flexShrink:0,backgroundColor:O}}),(0,n.jsx)(e.A,{size:"small",children:w.label})]}),(0,n.jsx)(e.A,{size:"small",weight:600,style:{textAlign:"right"},children:w.formattedValue}),(0,n.jsx)(e.A,{size:"small",style:{textAlign:"right",color:"#008a20"},children:z&&w.comparison})]},E)})}),P={render:_=>(0,n.jsx)(s.W,{..._,children:(0,n.jsx)(s.W.Legend,{render:b=>(0,n.jsx)(L,{chartItems:b,items:v.AC,withComparison:_.withComparison})})}),args:{...r.args,data:v.TW,showLabels:!1,thickness:.3,cornerScale:.03,gapScale:.01,size:164,withComparison:!0,withTooltips:!1,containerHeight:"300px"},parameters:{docs:{description:{story:"Demonstrates how to customize the legend using the render prop."}}}},k=["Default","WithSize","WithoutCenter","ErrorStates","Thin","Animation","WithTooltips","WithLegend","WithCompositionLegend","CustomLegend"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    containerWidth: '432px',
    containerHeight: '432px',
    thickness: 0.5,
    gapScale: 0.03,
    cornerScale: 0.03,
    withTooltips: true,
    data,
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={24} y={-16}>
                    User Activity
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={18} y={16}>
                    Total: 100K Users
                </Text>
            </Group>
  }
}`,...r.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 200,
    thickness: 0.3,
    showLabels: false,
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={18} y={-16}>
                    User Activity
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={14} y={16}>
                    Total: 100K Users
                </Text>
            </Group>
  }
}`,...m.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: undefined
  }
}`,...u.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <PieChart height={300} thickness={0.6} data={[]} />
            </div>
            <div>
                <h3>Single Value</h3>
                <PieChart height={300} thickness={0.6} data={[{
        label: 'Single',
        value: 100,
        percentage: 100
      }]} />
            </div>
        </div>
}`,...h.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.2,
    gapScale: 0.01,
    showLabels: false,
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={24} y={-16}>
                    Thin Donut
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={18} y={16}>
                    Thickness: 20%
                </Text>
            </Group>
  }
}`,...j.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...A.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLabels: false,
    withTooltips: true,
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={14} y={-10}>
                    Hover over segments
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={14} y={10}>
                    to see tooltips
                </Text>
            </Group>
  }
}`,...T.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    containerHeight: '500px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Props-based legend using \`showLegend\` and the \`legend\` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig(args);
    return <PieChart {...args} size={300} thickness={0.5} legend={{
      interactive: legend?.interactive
    }} chartId="composition-donut-chart">
                <Group>
                    <Text textAnchor="middle" verticalAnchor="middle" fontSize={16} y={-8}>
                        User Stats
                    </Text>
                    <Text textAnchor="middle" verticalAnchor="middle" fontSize={14} y={12} fill="#666">
                        100K Total
                    </Text>
                </Group>
                <PieChart.Legend {...legend} />
            </PieChart>;
  },
  args: {
    data,
    thickness: 0.5
  },
  parameters: {
    docs: {
      description: {
        story: 'Composition API using \`<PieChart.Legend />\` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <PieChartUnresponsive {...args}>
            <PieChartUnresponsive.Legend
    // eslint-disable-next-line react/jsx-no-bind
    render={items => <CustomPieLegend chartItems={items} items={customerRevenueLegendData} withComparison={args.withComparison} />} />
        </PieChartUnresponsive>,
  args: {
    ...Default.args,
    data: customerRevenueData,
    showLabels: false,
    thickness: 0.3,
    cornerScale: 0.03,
    gapScale: 0.01,
    size: 164,
    withComparison: true,
    withTooltips: false,
    containerHeight: '300px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how to customize the legend using the render prop.'
      }
    }
  }
}`,...P.parameters?.docs?.source}}}},"../charts/src/components/legend/hooks/use-chart-legend-items.ts"(D,f,i){i.d(f,{f:()=>t});var p=i("../number-formatters/src/index.ts"),e=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),x=i("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),o=i("../charts/src/utils/format-percentage.ts");function l(s,n,a="percentage"){if(!n||a==="none")return"";if("percentage"in s){const d=s;switch(a){case"percentage":return(0,o.E)(d.percentage);case"value":return(0,p.ZV)(d.value);case"valueDisplay":return d.valueDisplay||(0,p.ZV)(d.value);default:return""}}return"value"in s&&s.value!==null?(0,p.ZV)(s.value):""}function g(s,n,a,d,y){if(n){const r=a||d;if(r)return{...s,glyphSize:y,renderGlyph:r}}return s}function v(s,n,a,d,y,r,m){const u=(h,j)=>{const{color:A,glyph:T,shapeStyles:C}=n({data:h,index:j,legendShape:m}),S={label:h.label,value:a?h.data?.length?.toString()||"0":"",color:A,shapeStyle:C};return g(S,d,T,r,y)};return s.map(u)}function c(s,n,a,d,y,r,m,u){const h=(j,A)=>{const{color:T,glyph:C,shapeStyles:S}=n({data:j,index:A,legendShape:u}),L={label:j.label,value:l(j,a,d),color:T,shapeStyle:S};return g(L,y,C,m,r)};return s.map(h)}function t(s,n={},a){const{showValues:d=!1,legendValueDisplay:y="percentage",withGlyph:r=!1,glyphSize:m=8,renderGlyph:u}=n,{getElementStyles:h}=(0,x.j)();return(0,e.useMemo)(()=>!s||!Array.isArray(s)||s.length===0?[]:"data"in s[0]?v(s,h,d,r,m,u,a):c(s,h,d,y,r,m,u,a),[s,h,d,y,r,m,u,a])}},"../charts/src/stories/legend-config.tsx"(D,f,i){i.d(f,{D:()=>e,r:()=>p});const p={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for individual legend items. This allows consumers to customize legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."},legendShapeStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:"{ width?: number; height?: number; margin?: string | number }"}},description:"Styles for legend shapes (width, height, margin)."},legendItemStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:'{ margin?: string | number; flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" }'}},description:"Styles for each legend item (margin, flexDirection)."}};function e(x){const{legendPosition:o,legendAlignment:l,legendOrientation:g,legendShape:v,legendInteractive:c,legendItemClassName:t,legendMaxWidth:s,legendTextOverflow:n,legendShapeStyles:a,legendItemStyles:d}=x;if(!(o!==void 0||l!==void 0||g!==void 0||v!==void 0||c!==void 0||t!==void 0||s!==void 0||n!==void 0||a!==void 0||d!==void 0))return;const r={};return g!==void 0&&(r.orientation=g),o!==void 0&&(r.position=o),l!==void 0&&(r.alignment=l),v!==void 0&&(r.shape=v),c!==void 0&&(r.interactive=c),t!==void 0&&(r.itemClassName=t),(s!==void 0||n!==void 0)&&(r.labelStyles={},s!==void 0&&(r.labelStyles.maxWidth=s),n!==void 0&&(r.labelStyles.textOverflow=n)),a!==void 0&&(r.shapeStyles=a),d!==void 0&&(r.itemStyles=d),r}try{e.displayName="extractLegendConfig",e.__docgenInfo={description:"Extracts flat legend story args into a `ChartLegendConfig` object.\nUse in story render functions to bridge flat Storybook controls to the nested `legend` prop.",displayName:"extractLegendConfig",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#extractLegendConfig"]={docgenInfo:e.__docgenInfo,name:"extractLegendConfig",path:"../charts/src/stories/legend-config.tsx#extractLegendConfig"})}catch{}try{p.displayName="legendArgTypes",p.__docgenInfo={description:"Shared legend configuration for chart stories.\nProvides consistent argTypes and decorators across all chart legend stories.\n\nThese use flat keys for reliable Storybook controls. Use `extractLegendConfig`\nin render functions to map them to the nested `legend` prop.",displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:p.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../charts/src/utils/format-percentage.ts"(D,f,i){i.d(f,{E:()=>e});var p=i("../number-formatters/src/index.ts");const e=x=>(0,p.ZV)(x/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})}}]);
