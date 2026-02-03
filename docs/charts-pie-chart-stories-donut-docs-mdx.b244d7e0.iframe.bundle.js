"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[805,8513],{"../charts/src/charts/pie-chart/stories/donut.docs.mdx":((b,u,s)=>{s.r(u),s.d(u,{default:()=>P});var c=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),j=s("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),i=s("../../../node_modules/.pnpm/@storybook+addon-docs@10.2.3_@types+react@18.3.26_esbuild@0.25.9_storybook@10.2.3_@test_1e909a19285aafcb7051ac1c3970312d/node_modules/@storybook/addon-docs/dist/blocks.js"),h=s("../charts/src/charts/pie-chart/stories/donut.stories.tsx");function m(p){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,j.R)(),...p.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.W8,{title:"JS Packages/Charts Library/Charts/Donut Chart",of:h}),`
`,(0,e.jsx)(t.h1,{id:"donut-chart",children:"Donut Chart"}),`
`,(0,e.jsxs)(t.p,{children:["Donut Charts are circular charts with a hollow center, perfect for displaying proportional data while providing space for additional content or summary information. They are created using the ",(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-library-charts-pie-chart--docs",children:"PieChart"})," component with a ",(0,e.jsx)(t.code,{children:"thickness"})," value less than 1."]}),`
`,(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.strong,{children:"Important:"})," There is no separate DonutChart component. Donuts are created by configuring the PieChart component with ",(0,e.jsx)(t.code,{children:"thickness < 1"}),". This means all PieChart props, features, and styling options are available for donut charts."]}),`
`,(0,e.jsx)(i.Hl,{of:h.Doughnut}),`
`,(0,e.jsx)(t.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsxs)(t.p,{children:["Donut charts are created using the PieChart component with ",(0,e.jsx)(t.code,{children:"thickness"})," < 1. All PieChart props are available."]}),`
`,(0,e.jsxs)(t.p,{children:["For detailed information about component props, types, compound components, and theme properties, see the ",(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-library-charts-pie-chart-api-reference--docs",children:"Pie Chart API Reference"}),"."]}),`
`,(0,e.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(t.h3,{id:"simple-donut-chart",children:"Simple Donut Chart"}),`
`,(0,e.jsxs)(t.p,{children:["Create a donut chart by setting the ",(0,e.jsx)(t.code,{children:"thickness"})," prop to a value between 0 and 1:"]}),`
`,(0,e.jsx)(i.Hl,{of:h.Default}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<PieChart
	size={ 400 }
	thickness={ 0.4 }
	data={[
		{ label: 'Active Users', value: 65000, percentage: 65 },
		{ label: 'Inactive Users', value: 35000, percentage: 35 },
	]}
>
	<Group>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 24 }>
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
`,(0,e.jsx)(t.h2,{id:"donut-variations",children:"Donut Variations"}),`
`,(0,e.jsx)(t.h3,{id:"thin-ring-donut",children:"Thin Ring Donut"}),`
`,(0,e.jsx)(t.p,{children:"Create a thin ring by using a low thickness value:"}),`
`,(0,e.jsx)(i.Hl,{of:h.Thin}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<PieChart
	thickness={ 0.2 }
	data={ data }
>
	<Group>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 32 } fontWeight="bold">
			85%
		</Text>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 14 } y={ 20 }>
			Completion Rate
		</Text>
	</Group>
</PieChart>`}),`
`,(0,e.jsx)(t.h3,{id:"thick-donut",children:"Thick Donut"}),`
`,(0,e.jsx)(t.p,{children:"Use a higher thickness value for more substantial donut rings:"}),`
`,(0,e.jsx)(i.Hl,{of:h.Default}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<PieChart
	thickness={ 0.8 }
	data={ data }
>
	<Group>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 16 }>
			Summary
		</Text>
	</Group>
</PieChart>`}),`
`,(0,e.jsx)(t.h3,{id:"styled-donut-with-gaps",children:"Styled Donut with Gaps"}),`
`,(0,e.jsx)(t.p,{children:"Combine thickness with gaps and rounded corners for modern appearance:"}),`
`,(0,e.jsx)(i.Hl,{of:h.Doughnut}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<PieChart
	size={ 400 }
	thickness={ 0.6 }
	gapScale={ 0.05 }
	cornerScale={ 0.1 }
	data={ data }
>
	<Group>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 24 } fontWeight="bold">
			$1.2M
		</Text>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 16 } y={ 20 }>
			Total Revenue
		</Text>
	</Group>
</PieChart>`}),`
`,(0,e.jsx)(t.h2,{id:"interactive-features",children:"Interactive Features"}),`
`,(0,e.jsx)(t.h3,{id:"donut-with-tooltips",children:"Donut with Tooltips"}),`
`,(0,e.jsx)(t.p,{children:"Tooltips work seamlessly with donut charts:"}),`
`,(0,e.jsx)(i.Hl,{of:h.WithTooltipsDoughnut}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<PieChart
	thickness={ 0.5 }
	withTooltips={ true }
	data={ data }
>
	<Group>
		<Text textAnchor="middle" verticalAnchor="middle">
			Hover segments
		</Text>
	</Group>
</PieChart>`}),`
`,(0,e.jsx)(t.h3,{id:"donut-with-legend",children:"Donut with Legend"}),`
`,(0,e.jsx)(t.p,{children:"Combine legends with donut charts for comprehensive data presentation:"}),`
`,(0,e.jsx)(i.Hl,{of:h.CustomLegendPositioning}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<PieChart
	thickness={ 0.4 }
	showLegend={ true }
	legendOrientation="vertical"
	legendAlignment="start"
	legendPosition="top"
	data={ data }
>
	<Group>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 18 }>
			Distribution
		</Text>
	</Group>
</PieChart>`}),`
`,(0,e.jsx)(t.h2,{id:"styling-and-best-practices",children:"Styling and Best Practices"}),`
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
`,(0,e.jsx)(t.h3,{id:"responsive-considerations",children:"Responsive Considerations"}),`
`,(0,e.jsx)(t.p,{children:"Donut charts with center content need special attention for responsiveness:"}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`// Responsive text sizing
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
`,(0,e.jsx)(t.h3,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,(0,e.jsxs)(t.p,{children:["The donut chart supports responsive sizing by omitting the ",(0,e.jsx)(t.code,{children:"size"})," prop:"]}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`// Responsive donut - fills parent container
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
`,(0,e.jsx)(t.h3,{id:"data-validation-and-error-handling",children:"Data Validation and Error Handling"}),`
`,(0,e.jsx)(t.p,{children:"Donut charts inherit the same robust data validation from PieChart:"}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`// The chart validates:
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
`,(0,e.jsx)(t.h2,{id:"animation",children:"Animation"}),`
`,(0,e.jsx)(t.p,{children:"Donut charts support an optional entry animation that creates a smooth reveal effect when the chart first renders:"}),`
`,(0,e.jsx)(i.Hl,{of:h.Animation}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<PieChart
	size={ 400 }
	thickness={ 0.4 }
	data={ data }
	animation={ true }
>
	<Group>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 24 }>
			Animated Donut
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
`,(0,e.jsx)(t.h2,{id:"accessibility-considerations",children:"Accessibility Considerations"}),`
`,(0,e.jsx)(t.h3,{id:"screen-reader-support",children:"Screen Reader Support"}),`
`,(0,e.jsx)(t.p,{children:"Center content in donut charts should be properly announced:"}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<PieChart thickness={ 0.5 } data={ data }>
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
</PieChart>`}),`
`,(0,e.jsx)(t.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,(0,e.jsx)(t.h3,{id:"dashboard-metrics",children:"Dashboard Metrics"}),`
`,(0,e.jsx)(t.p,{children:"Perfect for displaying KPIs with context:"}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<PieChart thickness={ 0.4 } data={ conversionData }>
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
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<PieChart thickness={ 0.3 } data={ taskData }>
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
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<PieChart thickness={ 0.5 } data={ budgetData }>
	<Group>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 20 } fontWeight="bold">
			$1.2M
		</Text>
		<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 14 } y={ 20 }>
			Total Budget
		</Text>
	</Group>
</PieChart>`})]})}function P(p={}){const{wrapper:t}={...(0,j.R)(),...p.components};return t?(0,e.jsx)(t,{...p,children:(0,e.jsx)(m,{...p})}):m(p)}}),"../charts/src/charts/pie-chart/stories/donut.stories.tsx":((b,u,s)=>{s.r(u),s.d(u,{Animation:()=>T,CustomLegend:()=>k,CustomLegendPositioning:()=>w,Default:()=>a,Doughnut:()=>A,ErrorStates:()=>g,InteractiveLegend:()=>S,Thin:()=>f,WithCompositionLegend:()=>D,WithLegend:()=>C,WithTooltipsDoughnut:()=>_,WithoutCenter:()=>x,__namedExportsOrder:()=>I,default:()=>v});var c=s("../../../node_modules/.pnpm/@wordpress+components@32.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.mjs"),e=s("../../../node_modules/.pnpm/@wordpress+components@32.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.mjs"),j=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=s("../charts/src/providers/chart-context/global-charts-provider.tsx"),h=s("../charts/src/stories/chart-decorator.tsx"),m=s("../charts/src/stories/theme-config.tsx"),P=s("../charts/src/stories/legend-config.tsx"),p=s("../charts/src/stories/sample-data/index.ts"),t=s("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),r=s("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),l=s("../charts/src/charts/pie-chart/pie-chart.tsx"),n=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d=[{label:"Active Users",value:65e3,valueDisplay:"65K",percentage:65},{label:"Inactive Users",value:35e3,valueDisplay:"35K",percentage:35}],v={title:"JS Packages/Charts Library/Charts/Donut Chart",component:l.A,parameters:{layout:"centered"},decorators:[h.OI],argTypes:{...h.xo,...m.jW,...P.r,size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}}}},a={args:{...m.In,size:400,containerWidth:"432px",containerHeight:"432px",resize:"none",thickness:.5,gapScale:.03,cornerScale:.03,withTooltips:!0,data:d,children:(0,n.jsxs)(t.A,{children:[(0,n.jsx)(r.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"User Activity"}),(0,n.jsx)(r.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Total: 100K Users"})]})}},x={args:{...a.args,children:void 0}},g={render:()=>(0,n.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Empty Data"}),(0,n.jsx)(l.A,{size:300,thickness:.6,data:[]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Single Value"}),(0,n.jsx)(l.A,{size:300,thickness:.6,data:[{label:"Single",value:100,percentage:100}]})]})]})},f={args:{...a.args,thickness:.2,gapScale:.01,size:700,containerWidth:"732px",containerHeight:"732px",children:(0,n.jsxs)(t.A,{children:[(0,n.jsx)(r.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"Thin Donut"}),(0,n.jsx)(r.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Thickness: 20%"})]})}},A={args:{...a.args,thickness:.5,gapScale:.03,cornerScale:.03,size:600,containerWidth:"632px",containerHeight:"632px",children:(0,n.jsxs)(t.A,{children:[(0,n.jsx)(r.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"\u{1F369} Doughnut"}),(0,n.jsx)(r.A,{textAnchor:"middle",verticalAnchor:"middle",fill:"#008A20",fontSize:18,y:16,children:"Three donuts for the price of one!"})]})},parameters:{docs:{description:{story:"Doughnut chart variant with the thickness set to 0.5 (50%)."}}}},_={args:{...a.args,thickness:.5,withTooltips:!0},parameters:{docs:{description:{story:"Doughnut chart with interactive tooltips that appear on hover."}}}},T={args:{...a.args,animation:!0}},C={args:{...a.args,showLegend:!0,containerHeight:"500px"}},D={render:o=>(0,n.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Traditional Props-based"}),(0,n.jsx)(l.A,{size:300,data:o.data,thickness:.5,showLegend:!0,legendPosition:o.legendPosition||"bottom",legendOrientation:o.legendOrientation||"horizontal",legendAlignment:o.legendAlignment||"center",legendMaxWidth:o.legendMaxWidth,legendTextOverflow:o.legendTextOverflow||"wrap",legendValueDisplay:o.legendValueDisplay,children:(0,n.jsxs)(t.A,{children:[(0,n.jsx)(r.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,n.jsx)(r.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Composition API"}),(0,n.jsxs)(l.A,{size:300,data:o.data,thickness:.5,legendValueDisplay:o.legendValueDisplay,children:[(0,n.jsxs)(t.A,{children:[(0,n.jsx)(r.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,n.jsx)(r.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]}),(0,n.jsx)(l.A.Legend,{position:o.legendPosition||"bottom",orientation:o.legendOrientation||"horizontal",alignment:o.legendAlignment||"center",maxWidth:o.legendMaxWidth,textOverflow:o.legendTextOverflow||"wrap"})]})]})]}),args:{data:d,thickness:.5,containerHeight:"500px"},argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{docs:{description:{story:"Demonstrates the donut chart composition API, allowing flexible combination of chart elements and legends."}}}},S={render:o=>(0,n.jsx)(i.S,{children:(0,n.jsxs)("div",{style:{padding:"20px"},children:[(0,n.jsx)("h3",{children:"Interactive Donut Chart"}),(0,n.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Click legend items to show/hide segments. The total value updates dynamically."}),(0,n.jsx)(l.W,{chartId:"interactive-donut-chart",size:o.size||400,data:o.data,thickness:.5,showLegend:!0,legendInteractive:!0,legendPosition:o.legendPosition||"bottom",legendOrientation:o.legendOrientation||"horizontal",legendAlignment:o.legendAlignment||"center",legendValueDisplay:o.legendValueDisplay,children:(0,n.jsxs)(t.A,{children:[(0,n.jsx)(r.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,n.jsx)(r.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]})})]})}),args:{data:d,size:400,thickness:.5,containerHeight:"600px"},parameters:{docs:{description:{story:"Interactive donut chart with clickable legend. Segments can be hidden/shown, and percentages recalculate automatically. Requires chartId and GlobalChartsProvider."}}}},w={args:{...a.args,thickness:.4,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top",data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],children:(0,n.jsx)(t.A,{children:(0,n.jsx)(r.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:-8,children:"Distribution"})})},parameters:{docs:{description:{story:"Donut chart with vertical legend positioned at the top left."}}}},O=({chartItems:o,items:z,withComparison:W})=>(0,n.jsx)("div",{style:{display:"inline-grid",gridTemplateColumns:"1fr auto auto",gap:"var(--wpds-dimension-gap-2xs, 4px) var(--wpds-dimension-gap-xs, 8px)"},children:z.map((L,E)=>{const{color:M}=o[E];return(0,n.jsxs)(j.Fragment,{children:[(0,n.jsxs)(c.A,{direction:"row",justify:"flex-start",spacing:2,children:[(0,n.jsx)("div",{style:{width:"8px",height:"8px",borderRadius:"50%",flexShrink:0,backgroundColor:M}}),(0,n.jsx)(e.A,{size:"small",children:L.label})]}),(0,n.jsx)(e.A,{size:"small",weight:600,style:{textAlign:"right"},children:L.formattedValue}),(0,n.jsx)(e.A,{size:"small",style:{textAlign:"right",color:"#008a20"},children:W&&L.comparison})]},E)})}),k={render:o=>(0,n.jsx)(l.W,{...o,children:(0,n.jsx)(l.W.Legend,{render:z=>(0,n.jsx)(O,{chartItems:z,items:p.AC,withComparison:o.withComparison})})}),args:{...a.args,data:p.TW.map(o=>({...o,label:""})),thickness:.3,cornerScale:.03,gapScale:.01,size:164,withComparison:!0,withTooltips:!1,containerHeight:"300px"},parameters:{docs:{description:{story:"Demonstrates how to customize the legend using the render prop."}}}},I=["Default","WithoutCenter","ErrorStates","Thin","Doughnut","WithTooltipsDoughnut","Animation","WithLegend","WithCompositionLegend","InteractiveLegend","CustomLegendPositioning","CustomLegend"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    size: 400,
    containerWidth: '432px',
    containerHeight: '432px',
    resize: 'none',
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
}`,...a.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: undefined
  }
}`,...x.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <PieChart size={300} thickness={0.6} data={[]} />
            </div>
            <div>
                <h3>Single Value</h3>
                <PieChart size={300} thickness={0.6} data={[{
        label: 'Single',
        value: 100,
        percentage: 100
      }]} />
            </div>
        </div>
}`,...g.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.2,
    gapScale: 0.01,
    size: 700,
    containerWidth: '732px',
    containerHeight: '732px',
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={24} y={-16}>
                    Thin Donut
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={18} y={16}>
                    Thickness: 20%
                </Text>
            </Group>
  }
}`,...f.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.5,
    gapScale: 0.03,
    cornerScale: 0.03,
    size: 600,
    containerWidth: '632px',
    containerHeight: '632px',
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={24} y={-16}>
                    \u{1F369} Doughnut
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fill="#008A20" fontSize={18} y={16}>
                    Three donuts for the price of one!
                </Text>
            </Group>
  },
  parameters: {
    docs: {
      description: {
        story: 'Doughnut chart variant with the thickness set to 0.5 (50%).'
      }
    }
  }
}`,...A.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.5,
    withTooltips: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Doughnut chart with interactive tooltips that appear on hover.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...T.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    containerHeight: '500px'
  }
}`,...C.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center'
  }}>
            <div>
                <h3>Traditional Props-based</h3>
                <PieChart size={300} data={args.data} thickness={0.5} showLegend={true} legendPosition={args.legendPosition || 'bottom'} legendOrientation={args.legendOrientation || 'horizontal'} legendAlignment={args.legendAlignment || 'center'} legendMaxWidth={args.legendMaxWidth} legendTextOverflow={args.legendTextOverflow || 'wrap'} legendValueDisplay={args.legendValueDisplay}>
                    <Group>
                        <Text textAnchor="middle" verticalAnchor="middle" fontSize={16} y={-8}>
                            User Stats
                        </Text>
                        <Text textAnchor="middle" verticalAnchor="middle" fontSize={14} y={12} fill="#666">
                            100K Total
                        </Text>
                    </Group>
                </PieChart>
            </div>
            <div>
                <h3>Composition API</h3>
                <PieChart size={300} data={args.data} thickness={0.5} legendValueDisplay={args.legendValueDisplay}>
                    <Group>
                        <Text textAnchor="middle" verticalAnchor="middle" fontSize={16} y={-8}>
                            User Stats
                        </Text>
                        <Text textAnchor="middle" verticalAnchor="middle" fontSize={14} y={12} fill="#666">
                            100K Total
                        </Text>
                    </Group>
                    <PieChart.Legend position={args.legendPosition || 'bottom'} orientation={args.legendOrientation || 'horizontal'} alignment={args.legendAlignment || 'center'} maxWidth={args.legendMaxWidth} textOverflow={args.legendTextOverflow || 'wrap'} />
                </PieChart>
            </div>
        </div>,
  args: {
    data,
    thickness: 0.5,
    containerHeight: '500px'
  },
  argTypes: {
    legendInteractive: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the donut chart composition API, allowing flexible combination of chart elements and legends.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <GlobalChartsProvider>
            <div style={{
      padding: '20px'
    }}>
                <h3>Interactive Donut Chart</h3>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    Click legend items to show/hide segments. The total value updates dynamically.
                </p>
                <PieChartUnresponsive chartId="interactive-donut-chart" size={args.size || 400} data={args.data} thickness={0.5} showLegend={true} legendInteractive={true} legendPosition={args.legendPosition || 'bottom'} legendOrientation={args.legendOrientation || 'horizontal'} legendAlignment={args.legendAlignment || 'center'} legendValueDisplay={args.legendValueDisplay}>
                    <Group>
                        <Text textAnchor="middle" verticalAnchor="middle" fontSize={16} y={-8}>
                            User Stats
                        </Text>
                        <Text textAnchor="middle" verticalAnchor="middle" fontSize={14} y={12} fill="#666">
                            100K Total
                        </Text>
                    </Group>
                </PieChartUnresponsive>
            </div>
        </GlobalChartsProvider>,
  args: {
    data,
    size: 400,
    thickness: 0.5,
    containerHeight: '600px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive donut chart with clickable legend. Segments can be hidden/shown, and percentages recalculate automatically. Requires chartId and GlobalChartsProvider.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.4,
    showLegend: true,
    legendOrientation: 'vertical',
    legendAlignment: 'start',
    legendPosition: 'top',
    data: [{
      label: 'Desktop',
      value: 45000,
      valueDisplay: '45K',
      percentage: 45
    }, {
      label: 'Mobile',
      value: 35000,
      valueDisplay: '35K',
      percentage: 35
    }, {
      label: 'Tablet',
      value: 20000,
      valueDisplay: '20K',
      percentage: 20
    }],
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={18} y={-8}>
                    Distribution
                </Text>
            </Group>
  },
  parameters: {
    docs: {
      description: {
        story: 'Donut chart with vertical legend positioned at the top left.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <PieChartUnresponsive {...args}>
            <PieChartUnresponsive.Legend
    // eslint-disable-next-line react/jsx-no-bind
    render={items => <CustomPieLegend chartItems={items} items={customerRevenueLegendData} withComparison={args.withComparison} />} />
        </PieChartUnresponsive>,
  args: {
    ...Default.args,
    data: customerRevenueData.map(segment => ({
      ...segment,
      label: ''
    })),
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
}`,...k.parameters?.docs?.source}}}}),"../charts/src/components/legend/hooks/use-chart-legend-items.ts":((b,u,s)=>{s.d(u,{f:()=>t});var c=s("../number-formatters/src/index.ts"),e=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),j=s("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),i=s("../charts/src/utils/format-percentage.ts");function h(r,l,n="percentage"){if(!l||n==="none")return"";if("percentage"in r){const d=r;switch(n){case"percentage":return(0,i.E)(d.percentage);case"value":return(0,c.ZV)(d.value);case"valueDisplay":return d.valueDisplay||(0,c.ZV)(d.value);default:return""}}return"value"in r&&r.value!==null?(0,c.ZV)(r.value):""}function m(r,l,n,d,y){if(l){const v=n||d;if(v)return{...r,glyphSize:y,renderGlyph:v}}return r}function P(r,l,n,d,y,v,a){const x=(g,f)=>{const{color:A,glyph:_,shapeStyles:T}=l({data:g,index:f,legendShape:a}),C={label:g.label,value:n?g.data?.length?.toString()||"0":"",color:A,shapeStyle:T};return m(C,d,_,v,y)};return r.map(x)}function p(r,l,n,d,y,v,a,x){const g=(f,A)=>{const{color:_,glyph:T,shapeStyles:C}=l({data:f,index:A,legendShape:x}),D={label:f.label,value:h(f,n,d),color:_,shapeStyle:C};return m(D,y,T,a,v)};return r.map(g)}function t(r,l={},n){const{showValues:d=!1,legendValueDisplay:y="percentage",withGlyph:v=!1,glyphSize:a=8,renderGlyph:x}=l,{getElementStyles:g}=(0,j.j)();return(0,e.useMemo)(()=>!r||!Array.isArray(r)||r.length===0?[]:"data"in r[0]?P(r,g,d,v,a,x,n):p(r,g,d,y,v,a,x,n),[r,g,d,y,v,a,x,n])}}),"../charts/src/hooks/use-element-height.ts":((b,u,s)=>{s.d(u,{v:()=>e});var c=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function e({initialHeight:j=0}={}){const[i,h]=(0,c.useState)(j),m=(0,c.useRef)(null);return[(0,c.useCallback)(p=>{if(m.current&&(m.current.disconnect(),m.current=null),p){const t=()=>{h(p.getBoundingClientRect().height||0)};t();const r=new window.ResizeObserver(t);r.observe(p),m.current=r}},[]),i]}}),"../charts/src/stories/legend-config.tsx":((b,u,s)=>{s.d(u,{r:()=>c});const c={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."}};try{c.displayName="legendArgTypes",c.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:c.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}),"../charts/src/utils/format-percentage.ts":((b,u,s)=>{s.d(u,{E:()=>e});var c=s("../number-formatters/src/index.ts");const e=j=>(0,c.ZV)(j/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})})}]);
