"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[53,977],{"../charts/src/charts/sparkline/stories/index.docs.mdx"(L,y,a){a.r(y),a.d(y,{default:()=>p});var x=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),u=a("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.28_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),s=a("../../../node_modules/.pnpm/@storybook+addon-docs@10.3.1_@types+react@18.3.28_esbuild@0.25.9_storybook@10.3.1_@test_31531eedea616ad6bc3608443831948f/node_modules/@storybook/addon-docs/dist/blocks.js"),t=a("../charts/src/charts/sparkline/stories/index.stories.tsx");function l(i){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,u.R)(),...i.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.W8,{title:"JS Packages/Charts Library/Charts/Sparkline",of:t}),`
`,(0,e.jsx)(r.h1,{id:"sparkline",children:"Sparkline"}),`
`,(0,e.jsx)(r.p,{children:"A minimal, word-sized chart component designed for showing trends at a glance. Perfect for dashboard metrics and inline data visualization."}),`
`,(0,e.jsx)(s.Hl,{of:t.Default}),`
`,(0,e.jsx)(r.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsxs)(r.p,{children:["The Sparkline component is a preconfigured variant of ",(0,e.jsx)(r.a,{href:"?path=/docs/js-packages-charts-library-charts-line-chart--docs",children:"LineChart"})," optimized for compact, inline visualizations. It provides a simplified API for trend data while leveraging LineChart's rendering engine under the hood."]}),`
`,(0,e.jsx)(r.p,{children:(0,e.jsx)(r.strong,{children:"Key differences from LineChart:"})}),`
`,(0,e.jsxs)(r.ul,{children:[`
`,(0,e.jsxs)(r.li,{children:["Simplified ",(0,e.jsx)(r.code,{children:"number[]"})," data format (no dates required)"]}),`
`,(0,e.jsx)(r.li,{children:"No axes, grid, tooltips, or legend by default"}),`
`,(0,e.jsx)(r.li,{children:"Compact default dimensions (100x40px)"}),`
`,(0,e.jsx)(r.li,{children:"Smooth monotone curve interpolation"}),`
`]}),`
`,(0,e.jsxs)(r.p,{children:["For full control over axes, tooltips, and other features, use LineChart directly with ",(0,e.jsx)(r.code,{children:'gridVisibility="none"'})," and ",(0,e.jsx)(r.code,{children:"options={{ axis: { x: { display: false }, y: { display: false } } }}"}),"."]}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:`import { Sparkline } from '@automattic/charts';
import '@automattic/charts/style.css';

<Sparkline
	data={ [10, 15, 12, 18, 22, 25, 23, 28] }
	width={ 120 }
	height={ 48 }
	color="#4CAF50"
/>`}),`
`,(0,e.jsx)(r.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsxs)(r.p,{children:["For detailed information about component props and types, see the ",(0,e.jsx)(r.a,{href:"./?path=/docs/js-packages-charts-library-charts-sparkline-api-reference--docs",children:"Sparkline API Reference"}),"."]}),`
`,(0,e.jsx)(r.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(r.h3,{id:"simple-sparkline",children:"Simple Sparkline"}),`
`,(0,e.jsxs)(r.p,{children:["The simplest sparkline requires only a ",(0,e.jsx)(r.code,{children:"data"})," prop with an array of numeric values:"]}),`
`,(0,e.jsx)(s.Hl,{of:t.Default}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:`<Sparkline
	data={[10, 15, 12, 18, 22, 25, 23, 28]}
	width={120}
	height={48}
	color="#4CAF50"
/>`}),`
`,(0,e.jsx)(r.h3,{id:"required-props",children:"Required Props"}),`
`,(0,e.jsxs)(r.ul,{children:[`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:(0,e.jsx)(r.code,{children:"data"})}),": Array of numeric values to plot"]}),`
`]}),`
`,(0,e.jsx)(r.h3,{id:"optional-props",children:"Optional Props"}),`
`,(0,e.jsx)(r.p,{children:(0,e.jsx)(r.strong,{children:"Layout & Dimensions:"})}),`
`,(0,e.jsxs)(r.ul,{children:[`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:(0,e.jsx)(r.code,{children:"width"})})," (default: ",(0,e.jsx)(r.code,{children:"100"}),"): Width of the sparkline in pixels"]}),`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:(0,e.jsx)(r.code,{children:"height"})})," (default: ",(0,e.jsx)(r.code,{children:"40"}),"): Height of the sparkline in pixels"]}),`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:(0,e.jsx)(r.code,{children:"margin"})})," (default: ",(0,e.jsx)(r.code,{children:"{2,2,2,2}"}),"): Margin around the chart"]}),`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:(0,e.jsx)(r.code,{children:"aspectRatio"})}),": Height as a fraction of width. When omitted, fills parent container height"]}),`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:(0,e.jsx)(r.code,{children:"maxWidth"})})," (default: ",(0,e.jsx)(r.code,{children:"1200"}),"): Maximum width constraint for responsive charts"]}),`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:(0,e.jsx)(r.code,{children:"resizeDebounceTime"})})," (default: ",(0,e.jsx)(r.code,{children:"300"}),"): Debounce delay for resize events in ms"]}),`
`]}),`
`,(0,e.jsx)(r.p,{children:(0,e.jsx)(r.strong,{children:"Visual Styling:"})}),`
`,(0,e.jsxs)(r.ul,{children:[`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:(0,e.jsx)(r.code,{children:"color"})}),": Color for the line stroke (defaults to theme color)"]}),`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:(0,e.jsx)(r.code,{children:"strokeWidth"})})," (default: ",(0,e.jsx)(r.code,{children:"1.5"}),"): Line stroke width in pixels"]}),`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:(0,e.jsx)(r.code,{children:"withGradientFill"})})," (default: ",(0,e.jsx)(r.code,{children:"true"}),"): Whether to render gradient fill beneath the line"]}),`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:(0,e.jsx)(r.code,{children:"gradient"})}),": Custom gradient configuration (from, to, fromOpacity, toOpacity)"]}),`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:(0,e.jsx)(r.code,{children:"className"})}),": Additional CSS class name"]}),`
`]}),`
`,(0,e.jsxs)(r.p,{children:["For detailed prop information and type definitions, see the ",(0,e.jsx)(r.a,{href:"./?path=/docs/js-packages-charts-library-charts-sparkline-api-reference--docs",children:"Sparkline API Reference"}),"."]}),`
`,(0,e.jsx)(r.h2,{id:"using-linechart-directly",children:"Using LineChart Directly"}),`
`,(0,e.jsx)(r.p,{children:"For more control, you can use LineChart with minimal chrome. This is what Sparkline does internally:"}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:`import { LineChart } from '@automattic/charts';

<LineChart
	data={[{
		label: 'trend',
		data: [
			{ date: new Date('2024-01-01'), value: 10 },
			{ date: new Date('2024-01-02'), value: 15 },
			// ...
		]
	}]}
	gridVisibility="none"
	options={{
		axis: {
			x: { display: false },
			y: { display: false }
		}
	}}
	showLegend={false}
	withTooltips={false}
	withGradientFill={true}
	curveType="monotone"
	width={120}
	height={48}
/>`}),`
`,(0,e.jsx)(r.h2,{id:"dashboard-integration",children:"Dashboard Integration"}),`
`,(0,e.jsx)(r.h3,{id:"metric-cards",children:"Metric Cards"}),`
`,(0,e.jsx)(r.p,{children:"Sparklines work great alongside metrics in dashboard cards:"}),`
`,(0,e.jsx)(s.Hl,{of:t.Dashboard}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:`const metrics = [
	{ label: 'Speeding up', value: 28, data: [10, 15, 12, 18, 22, 25, 23, 28], color: '#4CAF50' },
	{ label: 'Efficient', value: 90, data: [80, 82, 85, 83, 87, 90, 88, 92], color: '#2196F3' },
	{ label: 'Unstable', value: 65, data: [50, 75, 45, 80, 40, 85, 55, 65], color: '#FF9800' },
];

return (
	<div style={{ display: 'flex', gap: '24px' }}>
		{metrics.map(metric => (
			<div key={metric.label} className="metric-card">
				<div className="metric-header">
					<span>{metric.label}</span>
					<span>{metric.value}</span>
				</div>
				<Sparkline
					data={metric.data}
					width={180}
					height={48}
					color={metric.color}
				/>
			</div>
		))}
	</div>
);`}),`
`,(0,e.jsx)(r.h2,{id:"styling-and-customization",children:"Styling and Customization"}),`
`,(0,e.jsx)(r.h3,{id:"trend-colors",children:"Trend Colors"}),`
`,(0,e.jsx)(r.p,{children:"Use colors to indicate trend direction - green for positive, red for negative:"}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:`// Positive trend
<Sparkline data={[10, 15, 18, 22, 28]} color="#4CAF50" />

// Negative trend
<Sparkline data={[28, 22, 18, 15, 10]} color="#F44336" />`}),`
`,(0,e.jsx)(r.h3,{id:"gradient-control",children:"Gradient Control"}),`
`,(0,e.jsx)(r.p,{children:"Disable the gradient for a cleaner line-only appearance, or customize it:"}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:`// No gradient fill
<Sparkline data={data} color="#2196F3" withGradientFill={false} />

// Custom gradient
<Sparkline
	data={data}
	color="#00BCD4"
	gradient={{
		from: "#00BCD4",
		to: "#ffffff",
		fromOpacity: 0.8,
		toOpacity: 0.1,
	}}
/>`}),`
`,(0,e.jsx)(r.h2,{id:"theming-integration",children:"Theming Integration"}),`
`,(0,e.jsxs)(r.p,{children:["Sparklines integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided. A custom theme can be provided by wrapping your chart in ",(0,e.jsx)(r.code,{children:"GlobalChartsProvider"})," and passing a custom theme object with the properties you want to override to the ",(0,e.jsx)(r.code,{children:"theme"})," prop:"]}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`import { GlobalChartsProvider, Sparkline, type ChartTheme } from '@automattic/charts';

const customTheme: ChartTheme = {
	colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'],
};

<GlobalChartsProvider theme={customTheme}>
	<Sparkline data={[10, 15, 12, 18]} />
</GlobalChartsProvider>`}),`
`,(0,e.jsx)(r.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,(0,e.jsxs)(r.p,{children:["The default ",(0,e.jsx)(r.code,{children:"Sparkline"})," export includes responsive behavior. By default, it ",(0,e.jsx)(r.strong,{children:"fills its parent container's dimensions"}),":"]}),`
`,(0,e.jsx)(s.Hl,{of:t.Responsive}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:`// Fill parent container (default) - parent needs explicit height
<div style={{ width: '200px', height: '60px' }}>
	<Sparkline data={[10, 15, 12, 18, 22, 25]} color="#9C27B0" />
</div>

// Use aspect ratio - height calculated from width
<div style={{ width: '100%', maxWidth: '200px' }}>
	<Sparkline data={[10, 15, 12, 18, 22, 25]} color="#9C27B0" aspectRatio={0.3} />
</div>`}),`
`,(0,e.jsxs)(r.p,{children:["For more details on responsive behavior, see the ",(0,e.jsx)(r.a,{href:"./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design",children:"Responsive Design section"})," in the introduction."]}),`
`,(0,e.jsx)(r.h2,{id:"animation",children:"Animation"}),`
`,(0,e.jsx)(r.p,{children:"The Sparkline component supports an optional entry animation that creates a smooth reveal effect when the chart first renders:"}),`
`,(0,e.jsx)(s.Hl,{of:t.Animation}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`<Sparkline
	data={ [10, 15, 12, 18, 22, 25, 23, 28] }
	width={ 120 }
	height={ 48 }
	color="#4CAF50"
	animation={ true }
/>`}),`
`,(0,e.jsx)(r.h3,{id:"animation-behavior",children:"Animation Behavior"}),`
`,(0,e.jsxs)(r.ul,{children:[`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:"Opt-in"}),": Animation is disabled by default and must be explicitly enabled with the ",(0,e.jsx)(r.code,{children:"animation"})," prop"]}),`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:"Accessibility"}),": Automatically respects the user's ",(0,e.jsx)(r.code,{children:"prefers-reduced-motion"})," system setting - animation will not play for users who prefer reduced motion"]}),`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:"Effect"}),": Creates a rising effect where the line scales up from the bottom, revealing the data progressively"]}),`
`,(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.strong,{children:"Duration"}),": 1000ms (1 second) with ease-out timing"]}),`
`]}),`
`,(0,e.jsxs)(r.p,{children:[(0,e.jsx)(r.strong,{children:"Note"}),": The animation plays once when the chart initially renders and does not repeat."]}),`
`,(0,e.jsx)(r.h2,{id:"edge-cases",children:"Edge Cases"}),`
`,(0,e.jsx)(r.p,{children:"The component handles various edge cases gracefully:"}),`
`,(0,e.jsx)(r.h3,{id:"empty-data",children:"Empty Data"}),`
`,(0,e.jsxs)(r.p,{children:["When data is empty (",(0,e.jsx)(r.code,{children:"[]"}),"), renders an empty container with the ",(0,e.jsx)(r.code,{children:"sparkline--empty"})," class:"]}),`
`,(0,e.jsx)(s.Hl,{of:t.EmptyData}),`
`,(0,e.jsx)(r.h3,{id:"single-data-point",children:"Single Data Point"}),`
`,(0,e.jsx)(r.p,{children:"When data has only one point, renders a circle:"}),`
`,(0,e.jsx)(s.Hl,{of:t.SinglePoint}),`
`,(0,e.jsx)(r.h3,{id:"two-data-points",children:"Two Data Points"}),`
`,(0,e.jsx)(r.p,{children:"Renders a minimal line connecting two points:"}),`
`,(0,e.jsx)(s.Hl,{of:t.TwoPoints}),`
`,(0,e.jsx)(r.h3,{id:"negative-and-flat-values",children:"Negative and Flat Values"}),`
`,(0,e.jsx)(r.p,{children:"Negative values and flat lines (all same values) are fully supported - experiment with the Default story controls to see these in action."}),`
`,(0,e.jsx)(r.h3,{id:"customizing-empty-state",children:"Customizing Empty State"}),`
`,(0,e.jsxs)(r.p,{children:["The empty state can be styled using the ",(0,e.jsx)(r.code,{children:"sparkline--empty"})," class:"]}),`
`,(0,e.jsx)(s.kL,{language:"css",code:`.sparkline--empty {
	background: rgba(0, 0, 0, 0.02);
	border: 1px dashed rgba(0, 0, 0, 0.1);
	border-radius: 4px;
}`}),`
`,(0,e.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,(0,e.jsx)(r.p,{children:"Sparklines are decorative visualizations. For accessibility, ensure the parent container provides context:"}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:`<div role="img" aria-label="Momentum trending upward, current value 28">
	<span>Momentum</span>
	<span>28</span>
	<Sparkline data={data} aria-hidden="true" />
</div>`}),`
`,(0,e.jsx)(r.p,{children:(0,e.jsx)(r.strong,{children:"Best Practices:"})}),`
`,(0,e.jsxs)(r.ul,{children:[`
`,(0,e.jsxs)(r.li,{children:["Use ",(0,e.jsx)(r.code,{children:'role="img"'})," on the container"]}),`
`,(0,e.jsxs)(r.li,{children:["Provide ",(0,e.jsx)(r.code,{children:"aria-label"})," describing the trend and current value"]}),`
`,(0,e.jsxs)(r.li,{children:["Add ",(0,e.jsx)(r.code,{children:'aria-hidden="true"'})," to the sparkline itself"]}),`
`,(0,e.jsx)(r.li,{children:"Always show the actual metric value as text alongside the sparkline"}),`
`]})]})}function p(i={}){const{wrapper:r}={...(0,u.R)(),...i.components};return r?(0,e.jsx)(r,{...i,children:(0,e.jsx)(l,{...i})}):l(i)}},"../charts/src/charts/sparkline/stories/index.stories.tsx"(L,y,a){a.r(y),a.d(y,{Animation:()=>R,AspectRatio:()=>A,Dashboard:()=>k,Default:()=>g,EmptyData:()=>T,Responsive:()=>O,SinglePoint:()=>E,TwoPoints:()=>v,__namedExportsOrder:()=>q,default:()=>K});var x=a("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),e=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=a("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),s=a("../charts/src/charts/line-chart/line-chart.tsx"),t=a("../charts/src/charts/private/with-responsive/with-responsive.tsx"),l=a("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=a.n(l),i=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/sparkline/sparkline.module.scss"),r={};r.insert="head",r.singleton=!1;var I=p()(i.A,r);const _=i.A.locals||{};var d=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const S=100,C=40,j=(m,b,D)=>{const w=new Date(2e3,0,1);return[{label:"sparkline",data:m.map((M,F)=>({date:new Date(w.getTime()+F*864e5),value:M})),options:{stroke:b,seriesLineStyle:D?{strokeWidth:D}:void 0}}]},n=(0,e.forwardRef)(({data:m,width:b=S,height:D=C,color:w,strokeWidth:M,withGradientFill:F=!0,gradient:N,className:Y,chartId:$,margin:H,animation:Z},W)=>{const U=(0,u.p)(),X=U.sparkline?.strokeWidth??1.5,V=M??X,P=(0,e.useMemo)(()=>!m||m.length===0?[]:j(m,w,V),[m,w,V]),J=(0,e.useMemo)(()=>{const B=U.sparkline?.margin??{top:2,right:2,bottom:2,left:2};return{...B,...H??B}},[H,U.sparkline?.margin]),Q=(0,e.useMemo)(()=>!N||P.length===0?P:P.map(B=>({...B,options:{...B.options,gradient:{from:N.from||w||"#000000",to:N.to||"#ffffff",fromOpacity:N.fromOpacity??.5,toOpacity:N.toOpacity??0}}})),[P,N,w]);if(!m||m.length===0)return(0,d.jsx)("div",{ref:W,className:(0,x.A)("sparkline",_.sparkline,_["sparkline--empty"],Y),style:{width:b,height:D},"data-testid":"sparkline-empty"});if(m.length===1){const B=b/2,G=D/2,ee=w||"#000000";return(0,d.jsx)("div",{ref:W,className:(0,x.A)("sparkline",_.sparkline,_["sparkline--single-point"],Y),style:{width:b,height:D},"data-testid":"sparkline-single-point",children:(0,d.jsx)("svg",{width:b,height:D,"aria-hidden":"true",children:(0,d.jsx)("circle",{cx:B,cy:G,r:V*1.5,fill:ee})})})}return(0,d.jsx)("div",{ref:W,className:(0,x.A)("sparkline",_.sparkline,Y),"data-testid":"sparkline",children:(0,d.jsx)(s.W,{data:Q,width:b,height:D,margin:J,chartId:$,withGradientFill:F,withTooltips:!1,showLegend:!1,gridVisibility:"none",options:{axis:{x:{display:!1},y:{display:!1}}},curveType:"monotone",animation:Z})})});n.displayName="SparklineComponent";const o=n;o.displayName="SparklineUnresponsive";const c=(0,t.F)(o);try{ResponsiveChart.displayName="ResponsiveChart",ResponsiveChart.__docgenInfo={description:"",displayName:"ResponsiveChart",props:{className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:`Array of numeric values to plot
@example [10, 25, 15, 30, 22, 35]`,name:"data",required:!0,type:{name:"number[]"}},color:{defaultValue:{value:"Theme color (first color in theme.colors array)"},description:"Color for the line stroke (hex or CSS color)",name:"color",required:!1,type:{name:"string"}},strokeWidth:{defaultValue:{value:"1"},description:"Line stroke width in pixels",name:"strokeWidth",required:!1,type:{name:"number"}},margin:{defaultValue:{value:"{ top: 2, right: 2, bottom: 2, left: 2 }"},description:"Margin around the chart",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},chartId:{defaultValue:null,description:"Chart ID for unique gradient/element identification",name:"chartId",required:!1,type:{name:"string"}},animation:{defaultValue:{value:"false"},description:`Enable entry animation on initial render
Creates a rising effect where the line scales up from the bottom.
Automatically respects user's prefers-reduced-motion system setting.`,name:"animation",required:!1,type:{name:"boolean"}},withGradientFill:{defaultValue:{value:"true"},description:"Whether to render the gradient fill beneath the line",name:"withGradientFill",required:!1,type:{name:"boolean"}},gradient:{defaultValue:null,description:`Gradient configuration for area fill
If not provided, uses color prop with default opacity values`,name:"gradient",required:!1,type:{name:"GradientConfig"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},maxWidth:{defaultValue:{value:"1200"},description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:`The aspect ratio of the chart (height = width * aspectRatio).
When provided, height is calculated from width.
When omitted, the chart fills the parent container's height.`,name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:{value:"300"},description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/sparkline/sparkline.tsx#ResponsiveChart"]={docgenInfo:ResponsiveChart.__docgenInfo,name:"ResponsiveChart",path:"../charts/src/charts/sparkline/sparkline.tsx#ResponsiveChart"})}catch{}try{o.displayName="SparklineUnresponsive",o.__docgenInfo={description:`Sparkline - A minimal line chart for inline data visualization.

Sparklines are compact charts designed to be embedded inline with text or
displayed in small spaces like table cells or dashboards. They show trends
without axes, labels, or other chart chrome.

This component is built on top of LineChart with preconfigured settings
for minimal display (no axes, grid, tooltips, or legend).`,displayName:"SparklineUnresponsive",props:{data:{defaultValue:null,description:`Array of numeric values to plot
@example [10, 25, 15, 30, 22, 35]`,name:"data",required:!0,type:{name:"number[]"}},width:{defaultValue:{value:"100"},description:"Width of the sparkline in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"40"},description:"Height of the sparkline in pixels",name:"height",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"Size (used by responsive variant, equivalent to width for square charts)",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:{value:"Theme color (first color in theme.colors array)"},description:"Color for the line stroke (hex or CSS color)",name:"color",required:!1,type:{name:"string"}},strokeWidth:{defaultValue:{value:"1"},description:"Line stroke width in pixels",name:"strokeWidth",required:!1,type:{name:"number"}},withGradientFill:{defaultValue:{value:"true"},description:"Whether to render the gradient fill beneath the line",name:"withGradientFill",required:!1,type:{name:"boolean"}},gradient:{defaultValue:null,description:`Gradient configuration for area fill
If not provided, uses color prop with default opacity values`,name:"gradient",required:!1,type:{name:"GradientConfig"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},chartId:{defaultValue:null,description:"Chart ID for unique gradient/element identification",name:"chartId",required:!1,type:{name:"string"}},margin:{defaultValue:{value:"{ top: 2, right: 2, bottom: 2, left: 2 }"},description:"Margin around the chart",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},animation:{defaultValue:{value:"false"},description:`Enable entry animation on initial render
Creates a rising effect where the line scales up from the bottom.
Automatically respects user's prefers-reduced-motion system setting.`,name:"animation",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/sparkline/sparkline.tsx#SparklineUnresponsive"]={docgenInfo:o.__docgenInfo,name:"SparklineUnresponsive",path:"../charts/src/charts/sparkline/sparkline.tsx#SparklineUnresponsive"})}catch{}var h=a("../charts/src/stories/chart-decorator.tsx");const K={title:"JS Packages/Charts Library/Charts/Sparkline",component:c,parameters:{layout:"centered"},decorators:[h.OI],argTypes:{data:{control:"object",description:"Array of numeric values to plot",table:{category:"Data"}},width:{control:{type:"number",min:50,max:400},description:"Width of the sparkline in pixels",table:{category:"Dimensions"}},height:{control:{type:"number",min:20,max:200},description:"Height of the sparkline in pixels",table:{category:"Dimensions"}},color:{control:"color",description:"Color for the line stroke",table:{category:"Visual Style"}},strokeWidth:{control:{type:"number",min:1,max:5},description:"Line stroke width in pixels",table:{category:"Visual Style"}},withGradientFill:{control:"boolean",description:"Whether to render gradient fill beneath the line",table:{category:"Visual Style"}},gradient:{control:"object",description:"Gradient configuration",table:{category:"Visual Style"}},className:{control:"text",description:"Additional CSS class name",table:{category:"Styling"}},margin:{control:"object",description:"Margin around the chart",table:{category:"Dimensions"}},animation:{control:"boolean",description:"Enable entry animation on initial render",table:{category:"Visual Style"}}}},g={args:{data:[10,15,12,18,22,25,23,28],width:120,height:48,color:"#4CAF50",containerHeight:100}},O={args:{data:g.args?.data,color:"#9C27B0"}},A={args:{data:g.args?.data,color:"#9C27B0",aspectRatio:.3}},T={args:{...g.args,data:[]}},E={args:{...g.args,data:[42],color:"#9C27B0"}},v={args:{...g.args,data:[10,20],color:"#3F51B5"}},k={render:()=>{const m=[{label:"Speeding up",value:28,data:[10,15,12,18,22,25,23,28],color:"#4CAF50"},{label:"Efficient",value:90,data:[80,82,85,83,87,90,88,92],color:"#2196F3"},{label:"Unstable",value:65,data:[50,75,45,80,40,85,55,65],color:"#FF9800"}];return(0,d.jsx)("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:m.map(b=>(0,d.jsxs)("div",{style:{padding:"16px",border:"1px solid #e0e0e0",borderRadius:"8px",minWidth:"200px"},children:[(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[(0,d.jsx)("span",{style:{fontSize:"14px",color:"#666"},children:b.label}),(0,d.jsx)("span",{style:{fontSize:"18px",fontWeight:"bold"},children:b.value})]}),(0,d.jsx)(c,{data:b.data,width:180,height:48,color:b.color})]},b.label))})},args:{containerHeight:150}},R={args:{...g.args,animation:!0}},q=["Default","Responsive","AspectRatio","EmptyData","SinglePoint","TwoPoints","Dashboard","Animation"];g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    width: 120,
    height: 48,
    color: '#4CAF50',
    containerHeight: 100
  }
}`,...g.parameters?.docs?.source},description:{story:`Basic sparkline with all controls available for customization.
Use the controls panel to experiment with colors, gradients, dimensions, and data.`,...g.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    data: Default.args?.data,
    color: '#9C27B0'
  }
}`,...O.parameters?.docs?.source},description:{story:`Responsive sparkline that fills the container.
Drag the corner of the container to resize and see the sparkline adapt.`,...O.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    data: Default.args?.data,
    color: '#9C27B0',
    aspectRatio: 0.3
  }
}`,...A.parameters?.docs?.source},description:{story:"Sparkline with an aspect ratio.",...A.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: []
  }
}`,...T.parameters?.docs?.source},description:{story:"Empty data renders an empty container gracefully.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [42],
    color: '#9C27B0'
  }
}`,...E.parameters?.docs?.source},description:{story:"Single data point renders as a circle instead of a line.",...E.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [10, 20],
    color: '#3F51B5'
  }
}`,...v.parameters?.docs?.source},description:{story:"Two data points render as a minimal line segment.",...v.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const metrics = [{
      label: 'Speeding up',
      value: 28,
      data: [10, 15, 12, 18, 22, 25, 23, 28],
      color: '#4CAF50'
    }, {
      label: 'Efficient',
      value: 90,
      data: [80, 82, 85, 83, 87, 90, 88, 92],
      color: '#2196F3'
    }, {
      label: 'Unstable',
      value: 65,
      data: [50, 75, 45, 80, 40, 85, 55, 65],
      color: '#FF9800'
    }];
    return <div style={{
      display: 'flex',
      gap: '24px',
      flexWrap: 'wrap'
    }}>
                {metrics.map(metric => <div key={metric.label} style={{
        padding: '16px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        minWidth: '200px'
      }}>
                        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px'
        }}>
                            <span style={{
            fontSize: '14px',
            color: '#666'
          }}>{metric.label}</span>
                            <span style={{
            fontSize: '18px',
            fontWeight: 'bold'
          }}>{metric.value}</span>
                        </div>
                        <Sparkline data={metric.data} width={180} height={48} color={metric.color} />
                    </div>)}
            </div>;
  },
  args: {
    containerHeight: 150
  }
}`,...k.parameters?.docs?.source},description:{story:"Dashboard example showing sparklines in metric cards - a common real-world use case.",...k.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...R.parameters?.docs?.source},description:{story:`Sparkline with entry animation that creates a smooth rising effect.
The animation respects the user's prefers-reduced-motion setting for accessibility.`,...R.parameters?.docs?.description}}};try{g.displayName="Default",g.__docgenInfo={description:`Basic sparkline with all controls available for customization.
Use the controls panel to experiment with colors, gradients, dimensions, and data.`,displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/sparkline/stories/index.stories.tsx#Default"]={docgenInfo:g.__docgenInfo,name:"Default",path:"../charts/src/charts/sparkline/stories/index.stories.tsx#Default"})}catch{}try{O.displayName="Responsive",O.__docgenInfo={description:`Responsive sparkline that fills the container.
Drag the corner of the container to resize and see the sparkline adapt.`,displayName:"Responsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/sparkline/stories/index.stories.tsx#Responsive"]={docgenInfo:O.__docgenInfo,name:"Responsive",path:"../charts/src/charts/sparkline/stories/index.stories.tsx#Responsive"})}catch{}try{A.displayName="AspectRatio",A.__docgenInfo={description:"Sparkline with an aspect ratio.",displayName:"AspectRatio",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/sparkline/stories/index.stories.tsx#AspectRatio"]={docgenInfo:A.__docgenInfo,name:"AspectRatio",path:"../charts/src/charts/sparkline/stories/index.stories.tsx#AspectRatio"})}catch{}try{T.displayName="EmptyData",T.__docgenInfo={description:"Empty data renders an empty container gracefully.",displayName:"EmptyData",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/sparkline/stories/index.stories.tsx#EmptyData"]={docgenInfo:T.__docgenInfo,name:"EmptyData",path:"../charts/src/charts/sparkline/stories/index.stories.tsx#EmptyData"})}catch{}try{E.displayName="SinglePoint",E.__docgenInfo={description:"Single data point renders as a circle instead of a line.",displayName:"SinglePoint",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/sparkline/stories/index.stories.tsx#SinglePoint"]={docgenInfo:E.__docgenInfo,name:"SinglePoint",path:"../charts/src/charts/sparkline/stories/index.stories.tsx#SinglePoint"})}catch{}try{v.displayName="TwoPoints",v.__docgenInfo={description:"Two data points render as a minimal line segment.",displayName:"TwoPoints",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/sparkline/stories/index.stories.tsx#TwoPoints"]={docgenInfo:v.__docgenInfo,name:"TwoPoints",path:"../charts/src/charts/sparkline/stories/index.stories.tsx#TwoPoints"})}catch{}try{k.displayName="Dashboard",k.__docgenInfo={description:"Dashboard example showing sparklines in metric cards - a common real-world use case.",displayName:"Dashboard",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/sparkline/stories/index.stories.tsx#Dashboard"]={docgenInfo:k.__docgenInfo,name:"Dashboard",path:"../charts/src/charts/sparkline/stories/index.stories.tsx#Dashboard"})}catch{}try{R.displayName="Animation",R.__docgenInfo={description:`Sparkline with entry animation that creates a smooth rising effect.
The animation respects the user's prefers-reduced-motion setting for accessibility.`,displayName:"Animation",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/sparkline/stories/index.stories.tsx#Animation"]={docgenInfo:R.__docgenInfo,name:"Animation",path:"../charts/src/charts/sparkline/stories/index.stories.tsx#Animation"})}catch{}},"../charts/src/stories/chart-decorator.tsx"(L,y,a){a.d(y,{OI:()=>l,cg:()=>r,xo:()=>I});var x=a("../number-formatters/src/index.ts"),e=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=a("../charts/src/providers/chart-context/global-charts-provider.tsx"),s=a("../charts/src/stories/theme-config.tsx"),t=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l=(_,d)=>{const S=d.args,C=S.withPadding!==!1,j=S.showOffsetTestButtons===!0;return r(()=>{const o=(0,e.useRef)(null),c=(0,e.useRef)({x:0,y:0}),h=(0,e.useCallback)((A,T)=>{o.current&&(c.current.x+=A,c.current.y+=T,o.current.style.transform=`translate(${c.current.x}px, ${c.current.y}px)`)},[]),f=(0,e.useCallback)(()=>{o.current&&(c.current={x:0,y:0},o.current.style.transform="")},[]),K=(0,e.useCallback)(()=>h(-50,0),[h]),z=(0,e.useCallback)(()=>h(50,0),[h]),g=(0,e.useCallback)(()=>h(0,-50),[h]),O=(0,e.useCallback)(()=>h(0,50),[h]);return(0,t.jsxs)(t.Fragment,{children:[j&&(0,t.jsxs)("div",{style:{marginBottom:"12px",display:"flex",gap:"8px",flexWrap:"wrap"},children:[(0,t.jsx)("span",{style:{fontSize:"12px",color:"#666",alignSelf:"center"},children:"Move container (no re-render):"}),(0,t.jsx)("button",{type:"button",onClick:K,children:"\u2190 Left"}),(0,t.jsx)("button",{type:"button",onClick:z,children:"Right \u2192"}),(0,t.jsx)("button",{type:"button",onClick:g,children:"\u2191 Up"}),(0,t.jsx)("button",{type:"button",onClick:O,children:"Down \u2193"}),(0,t.jsx)("button",{type:"button",onClick:f,children:"Reset"})]}),(0,t.jsx)("div",{ref:o,style:{resize:S.resize||"both",overflow:"auto",padding:C?"1rem":void 0,width:S.containerWidth||"800px",height:S.containerHeight||"400px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,t.jsx)(_,{})})]})},d)},p=_=>/^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(_),i=({children:_,themeName:d="default",accentColor:S=s.Zs})=>{(0,e.useEffect)(()=>{typeof window<"u"&&window.navigator?.language&&(0,x.xS)(window.navigator.language)},[]);const C=s.yI[d],j=p(S)?S:s.Zs,n=d==="custom"?`custom-${j}`:d;return(0,t.jsxs)(t.Fragment,{children:[d==="custom"&&(0,t.jsx)("style",{children:`
						:root {
							--wpds-color-bg-interactive-brand-weak: ${j};
						}
					`}),(0,t.jsx)(u.S,{theme:C,children:_},n)]})},r=(_,{args:d})=>{const S=d,C=S.themeName,j=S.accentColor;return(0,t.jsx)(i,{themeName:C,accentColor:j,children:(0,t.jsx)(_,{})})},I={maxWidth:{control:{type:"number",min:100,max:1200},description:"Maximum width of the chart in pixels (responsive mode)",table:{category:"Dimensions"}},aspectRatio:{control:{type:"number",min:0,max:1},description:"Height as a ratio of width (0-1, responsive mode)",table:{category:"Dimensions"}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4},description:"Debounce time in ms for resize events (performance)",table:{category:"Performance"}},containerWidth:{control:{type:"text"},description:'CSS width value for the chart container (e.g., "400px", "100%")'},containerHeight:{control:{type:"text"},description:'CSS height value for the chart container (e.g., "400px", "100%")'},showOffsetTestButtons:{control:"boolean",description:"Show buttons to move the container via DOM manipulation (no re-render) for testing tooltip positioning",table:{category:"Testing"}},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"],description:"Resize behavior for the chart container"}};try{l.displayName="chartDecorator",l.__docgenInfo={description:`Shared decorator for chart stories with GlobalChartsProvider and dynamic theme support
Provides a resizable container for testing responsive behavior
Composes with simpleChartDecorator to add container styling
Supports configurable container dimensions via containerWidth/containerHeight args`,displayName:"chartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#chartDecorator"]={docgenInfo:l.__docgenInfo,name:"chartDecorator",path:"../charts/src/stories/chart-decorator.tsx#chartDecorator"})}catch{}try{r.displayName="simpleChartDecorator",r.__docgenInfo={description:`Simple decorator for chart context stories with GlobalChartsProvider but no container styling
Used for stories that display multiple charts in custom layouts
Ensures number formatters use browser locale in Storybook environment`,displayName:"simpleChartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"]={docgenInfo:r.__docgenInfo,name:"simpleChartDecorator",path:"../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"})}catch{}try{I.displayName="sharedChartArgTypes",I.__docgenInfo={description:"Shared argTypes for common chart controls (dimensions, container settings)",displayName:"sharedChartArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"]={docgenInfo:I.__docgenInfo,name:"sharedChartArgTypes",path:"../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"})}catch{}},"../charts/src/stories/theme-config.tsx"(L,y,a){a.d(y,{In:()=>p,Zs:()=>e,jW:()=>l,yI:()=>t});var x=a("../charts/src/providers/chart-context/themes.ts");const e="#4a19ab",u={colors:["var(--wpds-color-bg-interactive-brand-weak)"],seriesLineStyles:[{},{strokeDasharray:"5 8"}],geoChart:{featureFillColor:"#ffffff"},gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},s={colors:["#e63946","rgb(42, 157, 143)","hsl(48, 96%, 53%)","rgba(38, 70, 83, 0.9)","steelblue","hsl(280, 60%, 50%)","rgb(244, 162, 97)"],backgroundColor:"hsl(0, 0%, 98%)",gridColor:"rgba(0, 0, 0, 0.1)",gridColorDark:"rgba(255, 255, 255, 0.15)",gridStyles:{stroke:"rgb(200, 200, 200)",strokeWidth:1},geoChart:{featureFillColor:"hsl(0, 0%, 93%)"},leaderboardChart:{primaryColor:"rgb(42, 157, 143)",secondaryColor:"rgb(148, 206, 199)",deltaColors:["hsl(0, 70%, 50%)","rgb(150, 150, 150)","#2a9d8f"]},conversionFunnelChart:{primaryColor:"hsl(200, 60%, 45%)",positiveChangeColor:"rgb(42, 157, 143)",negativeChangeColor:"hsl(0, 70%, 50%)"}},t={default:x.z,custom:u,"mixed-color-formats":s},l={themeName:{control:{type:"select"},options:Object.keys(t),defaultValue:"default",description:"Select a theme to apply to the chart",table:{category:"Theme"}},accentColor:{control:{type:"color"},description:"Accent color for the custom theme (used for primary chart elements)",defaultValue:e,table:{category:"Theme"},if:{arg:"themeName",eq:"custom"}}},p={themeName:"default",accentColor:e};try{e.displayName="DEFAULT_ACCENT_COLOR",e.__docgenInfo={description:"Default accent color for custom theme in Storybook",displayName:"DEFAULT_ACCENT_COLOR",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#DEFAULT_ACCENT_COLOR"]={docgenInfo:e.__docgenInfo,name:"DEFAULT_ACCENT_COLOR",path:"../charts/src/stories/theme-config.tsx#DEFAULT_ACCENT_COLOR"})}catch{}try{u.displayName="customTheme",u.__docgenInfo={description:"Custom theme using a CSS variable for dynamic color generation",displayName:"customTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#customTheme"]={docgenInfo:u.__docgenInfo,name:"customTheme",path:"../charts/src/stories/theme-config.tsx#customTheme"})}catch{}try{backgroundColor.displayName="backgroundColor",backgroundColor.__docgenInfo={description:"Background color for chart components",displayName:"backgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#backgroundColor"]={docgenInfo:backgroundColor.__docgenInfo,name:"backgroundColor",path:"../charts/src/stories/theme-config.tsx#backgroundColor"})}catch{}try{labelBackgroundColor.displayName="labelBackgroundColor",labelBackgroundColor.__docgenInfo={description:"Background color for labels",displayName:"labelBackgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelBackgroundColor"]={docgenInfo:labelBackgroundColor.__docgenInfo,name:"labelBackgroundColor",path:"../charts/src/stories/theme-config.tsx#labelBackgroundColor"})}catch{}try{labelTextColor.displayName="labelTextColor",labelTextColor.__docgenInfo={description:"Text color for labels",displayName:"labelTextColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelTextColor"]={docgenInfo:labelTextColor.__docgenInfo,name:"labelTextColor",path:"../charts/src/stories/theme-config.tsx#labelTextColor"})}catch{}try{colors.displayName="colors",colors.__docgenInfo={description:"Array of colors used for data visualization",displayName:"colors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#colors"]={docgenInfo:colors.__docgenInfo,name:"colors",path:"../charts/src/stories/theme-config.tsx#colors"})}catch{}try{gridStyles.displayName="gridStyles",gridStyles.__docgenInfo={description:"Optional CSS styles for grid lines",displayName:"gridStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridStyles"]={docgenInfo:gridStyles.__docgenInfo,name:"gridStyles",path:"../charts/src/stories/theme-config.tsx#gridStyles"})}catch{}try{tickLength.displayName="tickLength",tickLength.__docgenInfo={description:"Length of axis ticks in pixels",displayName:"tickLength",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#tickLength"]={docgenInfo:tickLength.__docgenInfo,name:"tickLength",path:"../charts/src/stories/theme-config.tsx#tickLength"})}catch{}try{gridColor.displayName="gridColor",gridColor.__docgenInfo={description:"Color of the grid lines",displayName:"gridColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColor"]={docgenInfo:gridColor.__docgenInfo,name:"gridColor",path:"../charts/src/stories/theme-config.tsx#gridColor"})}catch{}try{gridColorDark.displayName="gridColorDark",gridColorDark.__docgenInfo={description:"Color of the grid lines in dark mode",displayName:"gridColorDark",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColorDark"]={docgenInfo:gridColorDark.__docgenInfo,name:"gridColorDark",path:"../charts/src/stories/theme-config.tsx#gridColorDark"})}catch{}try{xTickLineStyles.displayName="xTickLineStyles",xTickLineStyles.__docgenInfo={description:"Styles for x-axis tick lines",displayName:"xTickLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xTickLineStyles"]={docgenInfo:xTickLineStyles.__docgenInfo,name:"xTickLineStyles",path:"../charts/src/stories/theme-config.tsx#xTickLineStyles"})}catch{}try{xAxisLineStyles.displayName="xAxisLineStyles",xAxisLineStyles.__docgenInfo={description:"Styles for x-axis line",displayName:"xAxisLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xAxisLineStyles"]={docgenInfo:xAxisLineStyles.__docgenInfo,name:"xAxisLineStyles",path:"../charts/src/stories/theme-config.tsx#xAxisLineStyles"})}catch{}try{seriesLineStyles.displayName="seriesLineStyles",seriesLineStyles.__docgenInfo={description:"Styles for series lines",displayName:"seriesLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#seriesLineStyles"]={docgenInfo:seriesLineStyles.__docgenInfo,name:"seriesLineStyles",path:"../charts/src/stories/theme-config.tsx#seriesLineStyles"})}catch{}try{glyphs.displayName="glyphs",glyphs.__docgenInfo={description:"Array of render functions for glyphs",displayName:"glyphs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#glyphs"]={docgenInfo:glyphs.__docgenInfo,name:"glyphs",path:"../charts/src/stories/theme-config.tsx#glyphs"})}catch{}try{legend.displayName="legend",legend.__docgenInfo={description:"Legend specific settings",displayName:"legend",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legend"]={docgenInfo:legend.__docgenInfo,name:"legend",path:"../charts/src/stories/theme-config.tsx#legend"})}catch{}try{svgLabelSmall.displayName="svgLabelSmall",svgLabelSmall.__docgenInfo={description:"Styles for small SVG text (eg. axis tick labels), passed through to the XYChart theme.",displayName:"svgLabelSmall",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#svgLabelSmall"]={docgenInfo:svgLabelSmall.__docgenInfo,name:"svgLabelSmall",path:"../charts/src/stories/theme-config.tsx#svgLabelSmall"})}catch{}try{geoChart.displayName="geoChart",geoChart.__docgenInfo={description:"GeoChart specific settings",displayName:"geoChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#geoChart"]={docgenInfo:geoChart.__docgenInfo,name:"geoChart",path:"../charts/src/stories/theme-config.tsx#geoChart"})}catch{}try{leaderboardChart.displayName="leaderboardChart",leaderboardChart.__docgenInfo={description:"LeaderboardChart specific settings",displayName:"leaderboardChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#leaderboardChart"]={docgenInfo:leaderboardChart.__docgenInfo,name:"leaderboardChart",path:"../charts/src/stories/theme-config.tsx#leaderboardChart"})}catch{}try{conversionFunnelChart.displayName="conversionFunnelChart",conversionFunnelChart.__docgenInfo={description:"ConversionFunnelChart specific settings",displayName:"conversionFunnelChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#conversionFunnelChart"]={docgenInfo:conversionFunnelChart.__docgenInfo,name:"conversionFunnelChart",path:"../charts/src/stories/theme-config.tsx#conversionFunnelChart"})}catch{}try{sparkline.displayName="sparkline",sparkline.__docgenInfo={description:"Sparkline specific settings",displayName:"sparkline",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#sparkline"]={docgenInfo:sparkline.__docgenInfo,name:"sparkline",path:"../charts/src/stories/theme-config.tsx#sparkline"})}catch{}try{s.displayName="mixedColorFormatsTheme",s.__docgenInfo={description:`Theme that uses a variety of color formats (hex, RGB, RGBA, HSL, named)
to demonstrate and test color normalization support.`,displayName:"mixedColorFormatsTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#mixedColorFormatsTheme"]={docgenInfo:s.__docgenInfo,name:"mixedColorFormatsTheme",path:"../charts/src/stories/theme-config.tsx#mixedColorFormatsTheme"})}catch{}try{t.displayName="CHART_THEME_MAP",t.__docgenInfo={description:"Centralized theme map for all chart stories",displayName:"CHART_THEME_MAP",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"]={docgenInfo:t.__docgenInfo,name:"CHART_THEME_MAP",path:"../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"})}catch{}try{l.displayName="themeArgTypes",l.__docgenInfo={description:"Shared argTypes for theme control",displayName:"themeArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#themeArgTypes"]={docgenInfo:l.__docgenInfo,name:"themeArgTypes",path:"../charts/src/stories/theme-config.tsx#themeArgTypes"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(L,y,a){a.d(y,{A:()=>u});function x(s){var t,l,p="";if(typeof s=="string"||typeof s=="number")p+=s;else if(typeof s=="object")if(Array.isArray(s)){var i=s.length;for(t=0;t<i;t++)s[t]&&(l=x(s[t]))&&(p&&(p+=" "),p+=l)}else for(l in s)s[l]&&(p&&(p+=" "),p+=l);return p}function e(){for(var s,t,l=0,p="",i=arguments.length;l<i;l++)(s=arguments[l])&&(t=x(s))&&(p&&(p+=" "),p+=t);return p}const u=e},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/sparkline/sparkline.module.scss"(L,y,a){a.d(y,{A:()=>l});var x=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=a.n(x),u=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),s=a.n(u),t=s()(e());t.push([L.id,".UAoYnNvZN7gVfe9aw4wn{display:inline-block;vertical-align:middle;line-height:1}.UAoYnNvZN7gVfe9aw4wn svg{display:block;overflow:visible}.UAoYnNvZN7gVfe9aw4wn path{vector-effect:non-scaling-stroke}.UpV7QlPDxSbRGzDr5Axe{display:inline-block}",""]),t.locals={sparkline:"UAoYnNvZN7gVfe9aw4wn","sparkline--empty":"UpV7QlPDxSbRGzDr5Axe"};const l=t},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(L){var y=function(o){return a(o)&&!x(o)};function a(n){return!!n&&typeof n=="object"}function x(n){var o=Object.prototype.toString.call(n);return o==="[object RegExp]"||o==="[object Date]"||s(n)}var e=typeof Symbol=="function"&&Symbol.for,u=e?Symbol.for("react.element"):60103;function s(n){return n.$$typeof===u}function t(n){return Array.isArray(n)?[]:{}}function l(n,o){return o.clone!==!1&&o.isMergeableObject(n)?C(t(n),n,o):n}function p(n,o,c){return n.concat(o).map(function(h){return l(h,c)})}function i(n,o){if(!o.customMerge)return C;var c=o.customMerge(n);return typeof c=="function"?c:C}function r(n){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(n).filter(function(o){return Object.propertyIsEnumerable.call(n,o)}):[]}function I(n){return Object.keys(n).concat(r(n))}function _(n,o){try{return o in n}catch{return!1}}function d(n,o){return _(n,o)&&!(Object.hasOwnProperty.call(n,o)&&Object.propertyIsEnumerable.call(n,o))}function S(n,o,c){var h={};return c.isMergeableObject(n)&&I(n).forEach(function(f){h[f]=l(n[f],c)}),I(o).forEach(function(f){d(n,f)||(_(n,f)&&c.isMergeableObject(o[f])?h[f]=i(f,c)(n[f],o[f],c):h[f]=l(o[f],c))}),h}function C(n,o,c){c=c||{},c.arrayMerge=c.arrayMerge||p,c.isMergeableObject=c.isMergeableObject||y,c.cloneUnlessOtherwiseSpecified=l;var h=Array.isArray(o),f=Array.isArray(n),K=h===f;return K?h?c.arrayMerge(n,o,c):S(n,o,c):l(o,c)}C.all=function(o,c){if(!Array.isArray(o))throw new Error("first argument should be an array");return o.reduce(function(h,f){return C(h,f,c)},{})};var j=C;L.exports=j}}]);
