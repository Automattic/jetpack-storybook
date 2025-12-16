(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[365,2713],{"../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.0.8_@test_ca37a3433c216fd610726ebbc5860d83/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive":(_=>{function c(s){var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}c.keys=()=>[],c.resolve=c,c.id="../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.0.8_@test_ca37a3433c216fd610726ebbc5860d83/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive",_.exports=c}),"../charts/src/charts/pie-chart/stories/index.docs.mdx":((_,c,s)=>{"use strict";s.r(c),s.d(c,{default:()=>t});var l=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),f=s("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),o=s("../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.0.8_@test_ca37a3433c216fd610726ebbc5860d83/node_modules/@storybook/addon-docs/dist/blocks.js"),p=s("../charts/src/charts/pie-chart/stories/index.stories.tsx");function i(b){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,f.R)(),...b.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.W8,{title:"JS Packages/Charts Library/Charts/Pie Chart",of:p}),`
`,(0,e.jsx)(n.h1,{id:"pie-chart",children:"Pie Chart"}),`
`,(0,e.jsx)(n.p,{children:"Pie Charts visualize proportional data as circular segments, making it easy to understand parts of a whole. They excel at showing percentage breakdowns and comparative relationships between categories."}),`
`,(0,e.jsx)(o.Hl,{of:p.Default}),`
`,(0,e.jsx)(n.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsxs)(n.p,{children:["The Pie Chart component provides a flexible, accessible, and highly customizable solution for displaying proportional data. Built on ",(0,e.jsx)(n.code,{children:"@visx/shape"}),", it supports both pie and donut chart variations, interactive tooltips, legends, and customizable styling with gap control, corner rounding, and thickness adjustment:"]}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`import { PieChart } from '@automattic/charts';

  <PieChart
  	data={ data }
  	withTooltips={ true }
  	showLegend={ true }
  />`}),`
`,(0,e.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsxs)(n.p,{children:["For detailed information about component props, types, compound components, and theme properties, see the ",(0,e.jsx)(n.a,{href:"./?path=/docs/js-packages-charts-library-charts-pie-chart-api-reference--docs",children:"Pie Chart API Reference"}),"."]}),`
`,(0,e.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(n.h3,{id:"simple-pie-chart",children:"Simple Pie Chart"}),`
`,(0,e.jsxs)(n.p,{children:["The simplest pie chart requires only a ",(0,e.jsx)(n.code,{children:"data"})," prop with percentage-based data:"]}),`
`,(0,e.jsx)(o.Hl,{of:p.Default}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<PieChart
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
`,(0,e.jsxs)(n.p,{children:["For detailed prop information, compound components, and type definitions, see the ",(0,e.jsx)(n.a,{href:"./?path=/docs/js-packages-charts-library-charts-pie-chart-api-reference--docs",children:"Pie Chart API Reference"}),"."]}),`
`,(0,e.jsx)(n.h2,{id:"composition-api",children:"Composition API"}),`
`,(0,e.jsx)(n.p,{children:"The Pie Chart now supports a compound component pattern for advanced customization:"}),`
`,(0,e.jsx)(o.Hl,{of:p.CompositionAPI}),`
`,(0,e.jsx)(n.h3,{id:"using-compound-components",children:"Using Compound Components"}),`
`,(0,e.jsx)(n.p,{children:"The composition API allows you to add custom SVG and HTML elements to your charts:"}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<PieChart data={ data } size={ 400 }>
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
`,(0,e.jsxs)(n.p,{children:["For detailed information about compound components (",(0,e.jsx)(n.code,{children:"PieChart.SVG"}),", ",(0,e.jsx)(n.code,{children:"PieChart.HTML"}),", ",(0,e.jsx)(n.code,{children:"PieChart.Legend"}),"), see the ",(0,e.jsx)(n.a,{href:"./?path=/docs/js-packages-charts-library-charts-pie-chart-api-reference--docs",children:"Pie Chart API Reference"}),"."]}),`
`,(0,e.jsx)(n.h2,{id:"interactive-features",children:"Interactive Features"}),`
`,(0,e.jsx)(n.h3,{id:"tooltips",children:"Tooltips"}),`
`,(0,e.jsx)(n.p,{children:"Enable interactive tooltips that display data information on hover:"}),`
`,(0,e.jsx)(o.Hl,{of:p.WithTooltips}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<PieChart
	size={ 400 }
	data={ data }
	withTooltips={ true }
/>`}),`
`,(0,e.jsx)(n.h3,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,(0,e.jsxs)(n.p,{children:["The Pie Chart component supports responsive sizing by omitting the ",(0,e.jsx)(n.code,{children:"size"})," prop:"]}),`
`,(0,e.jsx)(o.Hl,{of:p.Responsiveness}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`// Responsive - fills parent container
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
`,(0,e.jsx)(o.Hl,{of:p.ErrorStates}),`
`,(0,e.jsx)(n.p,{children:"The chart validates:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Empty data"}),": Shows appropriate message when no data is provided"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Percentage totals"}),": Ensures percentages sum to 100%"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Negative values"}),": Prevents invalid negative values"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Single data points"}),": Handles edge cases gracefully"]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"legend-positioning",children:"Legend Positioning"}),`
`,(0,e.jsx)(n.p,{children:"Control legend alignment and positioning:"}),`
`,(0,e.jsx)(o.Hl,{of:p.CustomLegendPositioning}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<PieChart
	size={ 400 }
	data={ data }
	showLegend={ true }
	legendAlignment="end"
	legendPosition="top"
/>`}),`
`,(0,e.jsx)(n.h3,{id:"vertical-legend",children:"Vertical Legend"}),`
`,(0,e.jsx)(n.p,{children:"Use vertical orientation for space-efficient legend placement:"}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<PieChart
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
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<PieChart
	data={ data }
	gapScale={ 0.05 } // 5% gap scale
/>`}),`
`,(0,e.jsx)(n.h3,{id:"custom-colors",children:"Custom Colors"}),`
`,(0,e.jsx)(n.p,{children:"Override theme colors by providing color values in data:"}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`const dataWithColors = [
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
`,(0,e.jsx)(o.Hl,{of:p.CustomLabelColors}),`
`,(0,e.jsx)(n.p,{children:"The Pie Chart supports customizable label colors through the theme system:"}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`import { GlobalChartsProvider } from '@automattic/charts';

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
`,(0,e.jsx)(n.h2,{id:"theming-integration",children:"Theming Integration"}),`
`,(0,e.jsxs)(n.p,{children:["Pie Charts integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided. A custom theme can be provided by wrapping your chart in ",(0,e.jsx)(n.code,{children:"GlobalChartsProvider"})," and passing a custom theme object with the properties you want to override to the ",(0,e.jsx)(n.code,{children:"theme"})," prop:"]}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`import { GlobalChartsProvider, PieChart, type ChartTheme } from '@automattic/charts';

const customTheme: ChartTheme = {
	colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'],
};

<GlobalChartsProvider theme={customTheme}>
	<PieChart data={data} />
</GlobalChartsProvider>`})]})}function t(b={}){const{wrapper:n}={...(0,f.R)(),...b.components};return n?(0,e.jsx)(n,{...b,children:(0,e.jsx)(i,{...b})}):i(b)}}),"../charts/src/charts/pie-chart/stories/index.stories.tsx":((_,c,s)=>{"use strict";s.r(c),s.d(c,{Animation:()=>u,CompositionAPI:()=>v,CustomLabelColors:()=>C,CustomLegendPositioning:()=>y,Default:()=>a,ErrorStates:()=>P,InteractiveLegend:()=>g,Responsiveness:()=>m,WithCompositionLegend:()=>x,WithLegend:()=>d,WithTooltips:()=>h,__namedExportsOrder:()=>w,default:()=>n});var l=s("../charts/src/providers/chart-context/global-charts-provider.tsx"),e=s("../charts/src/stories/chart-decorator.tsx"),f=s("../charts/src/stories/legend-config.tsx"),o=s("../charts/src/stories/sample-data/index.ts"),p=s("../charts/src/stories/theme-config.tsx"),i=s("../charts/src/charts/pie-chart/pie-chart.tsx"),t=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n={title:"JS Packages/Charts Library/Charts/Pie Chart",component:i.A,parameters:{layout:"centered"},decorators:[e.OI],argTypes:{...e.xo,...p.jW,...f.r,size:{control:{type:"range",min:100,max:800,step:10,default:400},description:"Diameter of the pie chart in pixels",table:{category:"Dimensions"}},thickness:{control:{type:"range",min:0,max:1,step:.01},description:"Thickness of the pie (1 = full pie, <1 = donut)",table:{category:"Visual Style"}},padding:{control:{type:"range",min:0,max:100,step:1},description:"Internal padding around the chart",table:{category:"Dimensions"}},gapScale:{control:{type:"range",min:0,max:1,step:.01},description:"Scale of gaps between segments (0 = no gaps)",table:{category:"Visual Style"}},cornerScale:{control:{type:"range",min:0,max:1,step:.01},description:"Scale of rounded corners on segments (0 = sharp corners)",table:{category:"Visual Style"}},labelTextColor:{control:{type:"color"},description:"Color of the label text displayed on pie chart segments",table:{category:"Labels"}},labelBackgroundColor:{control:{type:"color"},description:"Background color for labels displayed on pie chart segments",table:{category:"Labels"}},showLabels:{control:"boolean",description:"Show or hide labels on pie segments",table:{category:"Labels"}}},render:({labelTextColor:r,labelBackgroundColor:T,...D})=>{const L=(0,t.jsx)(i.A,{...D});return r||T?(0,t.jsx)(l.S,{theme:{labelTextColor:r,labelBackgroundColor:T},children:L}):L}},a={args:{...p.In,thickness:1,gapScale:0,cornerScale:0,withTooltips:!1,data:o.Mc,resize:"none",size:400,containerWidth:"432px",containerHeight:"432px"}},u={args:{...a.args,animation:!0}},h={args:{...a.args,withTooltips:!0},parameters:{docs:{description:{story:"Pie chart with interactive tooltips that appear on hover."}}}},d={args:{...a.args,showLegend:!0,containerHeight:"500px"}},x={render:r=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Traditional Props-based Legend"}),(0,t.jsx)(i.A,{size:300,data:r.data,showLegend:!0,legendPosition:r.legendPosition||"bottom",legendOrientation:r.legendOrientation||"horizontal",legendAlignment:r.legendAlignment||"center",legendMaxWidth:r.legendMaxWidth,legendTextOverflow:r.legendTextOverflow||"wrap",legendValueDisplay:r.legendValueDisplay})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Composition API with Legend Component"}),(0,t.jsx)(i.A,{size:300,data:r.data,legendValueDisplay:r.legendValueDisplay,children:(0,t.jsx)(i.A.Legend,{position:r.legendPosition||"bottom",orientation:r.legendOrientation||"horizontal",alignment:r.legendAlignment||"center",maxWidth:r.legendMaxWidth,textOverflow:r.legendTextOverflow||"wrap"})})]})]}),args:{data:o.Mc,containerHeight:"500px"},argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{docs:{description:{story:"Demonstrates the new composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control."}}}},g={render:r=>(0,t.jsx)(l.S,{children:(0,t.jsxs)("div",{style:{padding:"20px"},children:[(0,t.jsx)("h3",{children:"Interactive Legend"}),(0,t.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Click legend items to show/hide segments. Percentages recalculate automatically for visible segments."}),(0,t.jsx)(i.W,{chartId:"interactive-pie-chart",size:r.size||400,data:r.data,showLegend:!0,legendInteractive:!0,legendPosition:r.legendPosition||"bottom",legendOrientation:r.legendOrientation||"horizontal",legendAlignment:r.legendAlignment||"center",legendValueDisplay:r.legendValueDisplay})]})}),args:{data:o.Mc,size:400,containerHeight:"600px"},parameters:{docs:{description:{story:"Interactive legends allow users to toggle segment visibility by clicking legend items. When segments are hidden, the visible segments are recalculated to total 100%. Requires chartId and GlobalChartsProvider."}}}},y={args:{data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],thickness:1,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"center",legendPosition:"top",legendShape:"circle",size:400,containerWidth:"432px",containerHeight:"480px",resize:"none"},parameters:{docs:{description:{story:"Pie chart with top-end positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with device usage data."}}}},j={...a.args,resize:"both"};delete j.size;const m={args:j,parameters:{docs:{description:{story:"Pie chart with responsive behavior. Uses size prop instead of width/height."}}}},v={render:r=>{const T=r.data||[{label:"Desktop",value:45,percentage:45},{label:"Mobile",value:30,percentage:30},{label:"Tablet",value:25,percentage:25}];return(0,t.jsx)("div",{style:{width:"600px",padding:"20px"},children:(0,t.jsxs)(i.W,{data:T,size:400,withTooltips:!0,thickness:.7,legendValueDisplay:r.legendValueDisplay||"value",children:[(0,t.jsx)(i.W.HTML,{children:(0,t.jsx)("h3",{style:{textAlign:"center",marginBottom:"20px"},children:"Device Usage Distribution"})}),(0,t.jsxs)(i.W.SVG,{children:[(0,t.jsx)("text",{x:0,y:0,textAnchor:"middle",style:{fontSize:"24px",fontWeight:"bold"},children:"100%"}),(0,t.jsx)("text",{x:0,y:20,textAnchor:"middle",style:{fontSize:"14px",fill:"#666"},children:"Total Users"})]}),(0,t.jsxs)(i.W.HTML,{children:[(0,t.jsx)(i.W.Legend,{position:"bottom",orientation:"horizontal",alignment:"center"}),(0,t.jsxs)("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"#f5f5f5",borderRadius:"4px",fontSize:"14px",color:"#666"},children:[(0,t.jsx)("p",{style:{margin:0},children:"This example demonstrates the composition API where you can add:"}),(0,t.jsxs)("ul",{style:{margin:"5px 0 0 20px",padding:0},children:[(0,t.jsx)("li",{children:"SVG elements inside the chart using PieChart.SVG"}),(0,t.jsx)("li",{children:"HTML elements outside the chart using PieChart.HTML"}),(0,t.jsx)("li",{children:"Mix regular children with compound components"})]})]})]})]})})},args:{data:o.Mc},argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{docs:{description:{story:`Demonstrates the compound component pattern for PieChart composition.

Use \`<PieChart.SVG>\` to add custom SVG elements inside the chart area, and \`<PieChart.HTML>\` to add HTML elements outside the SVG.

This pattern provides:
- Clear intent about where children should render
- Type safety for different content types
- Flexibility to extend the chart with custom elements
- Backward compatibility with existing implementations`}}}},C={args:{...a.args,showLegend:!0,thickness:.85,data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45,color:"#FF6B6B"},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35,color:"#4ECDC4"},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20,color:"#45B7D1"}],labelTextColor:"#FFFFFF",labelBackgroundColor:"rgba(0, 0, 0, 0.75)",size:400,containerHeight:"500px"},parameters:{docs:{description:{story:`This example demonstrates how to enable label backgrounds for enhanced readability. By default, labels have no background (transparent) to preserve the original chart appearance, but you can add backgrounds when needed.

**Key Features:**
- **labelTextColor**: White text (\`#FFFFFF\`) for contrast against dark background
- **labelBackgroundColor**: Dark semi-transparent background (\`rgba(0, 0, 0, 0.75)\`) - disabled by default
- **Custom segment colors**: Bright colors that would make default dark text hard to read
- **Opt-in enhancement**: Backgrounds only appear when explicitly set

Use the Storybook controls to experiment with different combinations. Try setting labelBackgroundColor to \`transparent\` to see the default behavior.`}}}},P={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(i.A,{size:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Invalid Percentage Total"}),(0,t.jsx)(i.A,{size:300,data:[{label:"A",value:30,percentage:30},{label:"B",value:40,percentage:40}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(i.A,{size:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(i.A,{size:300,data:[{label:"A",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the pie chart handles various error states and edge cases."}}}},w=["Default","Animation","WithTooltips","WithLegend","WithCompositionLegend","InteractiveLegend","CustomLegendPositioning","Responsiveness","CompositionAPI","CustomLabelColors","ErrorStates"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    thickness: 1,
    gapScale: 0,
    cornerScale: 0,
    withTooltips: false,
    data,
    resize: 'none',
    size: 400,
    containerWidth: '432px',
    containerHeight: '432px'
  }
}`,...a.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...u.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    withTooltips: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with interactive tooltips that appear on hover.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    containerHeight: '500px'
  }
}`,...d.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center'
  }}>
            <div>
                <h3>Traditional Props-based Legend</h3>
                <PieChart size={300} data={args.data} showLegend={true} legendPosition={args.legendPosition || 'bottom'} legendOrientation={args.legendOrientation || 'horizontal'} legendAlignment={args.legendAlignment || 'center'} legendMaxWidth={args.legendMaxWidth} legendTextOverflow={args.legendTextOverflow || 'wrap'} legendValueDisplay={args.legendValueDisplay} />
            </div>
            <div>
                <h3>Composition API with Legend Component</h3>
                <PieChart size={300} data={args.data} legendValueDisplay={args.legendValueDisplay}>
                    <PieChart.Legend position={args.legendPosition || 'bottom'} orientation={args.legendOrientation || 'horizontal'} alignment={args.legendAlignment || 'center'} maxWidth={args.legendMaxWidth} textOverflow={args.legendTextOverflow || 'wrap'} />
                </PieChart>
            </div>
        </div>,
  args: {
    data,
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
        story: 'Demonstrates the new composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <GlobalChartsProvider>
            <div style={{
      padding: '20px'
    }}>
                <h3>Interactive Legend</h3>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    Click legend items to show/hide segments. Percentages recalculate automatically for
                    visible segments.
                </p>
                <PieChartUnresponsive chartId="interactive-pie-chart" size={args.size || 400} data={args.data} showLegend={true} legendInteractive={true} legendPosition={args.legendPosition || 'bottom'} legendOrientation={args.legendOrientation || 'horizontal'} legendAlignment={args.legendAlignment || 'center'} legendValueDisplay={args.legendValueDisplay} />
            </div>
        </GlobalChartsProvider>,
  args: {
    data,
    size: 400,
    containerHeight: '600px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive legends allow users to toggle segment visibility by clicking legend items. When segments are hidden, the visible segments are recalculated to total 100%. Requires chartId and GlobalChartsProvider.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
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
    thickness: 1,
    // Full pie chart
    gapScale: 0.03,
    padding: 20,
    cornerScale: 0.03,
    withTooltips: true,
    showLegend: true,
    legendOrientation: 'vertical',
    legendAlignment: 'center',
    legendPosition: 'top',
    legendShape: 'circle',
    size: 400,
    containerWidth: '432px',
    containerHeight: '480px',
    resize: 'none'
  },
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with top-end positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with device usage data.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with responsive behavior. Uses size prop instead of width/height.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const chartData = args.data || [{
      label: 'Desktop',
      value: 45,
      percentage: 45
    }, {
      label: 'Mobile',
      value: 30,
      percentage: 30
    }, {
      label: 'Tablet',
      value: 25,
      percentage: 25
    }];
    return <div style={{
      width: '600px',
      padding: '20px'
    }}>
                <PieChartUnresponsive data={chartData} size={400} withTooltips={true} thickness={0.7} legendValueDisplay={args.legendValueDisplay || 'value'}>
                    <PieChartUnresponsive.HTML>
                        <h3 style={{
            textAlign: 'center',
            marginBottom: '20px'
          }}>
                            Device Usage Distribution
                        </h3>
                    </PieChartUnresponsive.HTML>

                    <PieChartUnresponsive.SVG>
                        <text x={0} y={0} textAnchor="middle" style={{
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
                            100%
                        </text>
                        <text x={0} y={20} textAnchor="middle" style={{
            fontSize: '14px',
            fill: '#666'
          }}>
                            Total Users
                        </text>
                    </PieChartUnresponsive.SVG>

                    <PieChartUnresponsive.HTML>
                        <PieChartUnresponsive.Legend position="bottom" orientation="horizontal" alignment="center" />
                        <div style={{
            marginTop: '20px',
            padding: '10px',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
            fontSize: '14px',
            color: '#666'
          }}>
                            <p style={{
              margin: 0
            }}>
                                This example demonstrates the composition API where you can add:
                            </p>
                            <ul style={{
              margin: '5px 0 0 20px',
              padding: 0
            }}>
                                <li>SVG elements inside the chart using PieChart.SVG</li>
                                <li>HTML elements outside the chart using PieChart.HTML</li>
                                <li>Mix regular children with compound components</li>
                            </ul>
                        </div>
                    </PieChartUnresponsive.HTML>
                </PieChartUnresponsive>
            </div>;
  },
  args: {
    data
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
        story: \`Demonstrates the compound component pattern for PieChart composition.

Use \\\`<PieChart.SVG>\\\` to add custom SVG elements inside the chart area, and \\\`<PieChart.HTML>\\\` to add HTML elements outside the SVG.

This pattern provides:
- Clear intent about where children should render
- Type safety for different content types
- Flexibility to extend the chart with custom elements
- Backward compatibility with existing implementations\`
      }
    }
  }
}`,...v.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    thickness: 0.85,
    // Slightly thinner for better label visibility
    data: [{
      label: 'Desktop',
      value: 45000,
      valueDisplay: '45K',
      percentage: 45,
      color: '#FF6B6B' // Light red segment
    }, {
      label: 'Mobile',
      value: 35000,
      valueDisplay: '35K',
      percentage: 35,
      color: '#4ECDC4' // Light teal segment
    }, {
      label: 'Tablet',
      value: 20000,
      valueDisplay: '20K',
      percentage: 20,
      color: '#45B7D1' // Light blue segment
    }],
    labelTextColor: '#FFFFFF',
    // White text for contrast against dark background
    labelBackgroundColor: 'rgba(0, 0, 0, 0.75)',
    // Dark semi-transparent background
    size: 400,
    containerHeight: '500px'
  },
  parameters: {
    docs: {
      description: {
        story: \`This example demonstrates how to enable label backgrounds for enhanced readability. By default, labels have no background (transparent) to preserve the original chart appearance, but you can add backgrounds when needed.

**Key Features:**
- **labelTextColor**: White text (\\\`#FFFFFF\\\`) for contrast against dark background
- **labelBackgroundColor**: Dark semi-transparent background (\\\`rgba(0, 0, 0, 0.75)\\\`) - disabled by default
- **Custom segment colors**: Bright colors that would make default dark text hard to read
- **Opt-in enhancement**: Backgrounds only appear when explicitly set

Use the Storybook controls to experiment with different combinations. Try setting labelBackgroundColor to \\\`transparent\\\` to see the default behavior.\`
      }
    }
  }
}`,...C.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <PieChart size={300} data={[]} />
            </div>
            <div>
                <h3>Invalid Percentage Total</h3>
                <PieChart size={300} data={[{
        label: 'A',
        value: 30,
        percentage: 30
      }, {
        label: 'B',
        value: 40,
        percentage: 40
      }]} // Only adds up to 70%
      />
            </div>
            <div>
                <h3>Negative Values</h3>
                <PieChart size={300} data={[{
        label: 'A',
        value: -30,
        percentage: -30
      }, {
        label: 'B',
        value: 130,
        percentage: 130
      }]} />
            </div>
            <div>
                <h3>Single Data Point</h3>
                <PieChart size={300} data={[{
        label: 'A',
        value: 100,
        percentage: 100
      }]} />
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of how the pie chart handles various error states and edge cases.'
      }
    }
  }
}`,...P.parameters?.docs?.source}}}}),"../charts/src/components/legend/hooks/use-chart-legend-items.ts":((_,c,s)=>{"use strict";s.d(c,{f:()=>n});var l=s("../number-formatters/src/index.ts"),e=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=s("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),o=s("../charts/src/utils/format-percentage.ts");function p(a,u,h="percentage"){if(!u||h==="none")return"";if("percentage"in a){const d=a;switch(h){case"percentage":return(0,o.E)(d.percentage);case"value":return(0,l.ZV)(d.value);case"valueDisplay":return d.valueDisplay||(0,l.ZV)(d.value);default:return""}}return"value"in a&&a.value!==null?(0,l.ZV)(a.value):""}function i(a,u,h,d,x){if(u){const g=h||d;if(g)return{...a,glyphSize:x,renderGlyph:g}}return a}function t(a,u,h,d,x,g,y){const j=(m,v)=>{const{color:C,glyph:P,shapeStyles:w}=u({data:m,index:v,legendShape:y}),r={label:m.label,value:h?m.data?.length?.toString()||"0":"",color:C,shapeStyle:w};return i(r,d,P,g,x)};return a.map(j)}function b(a,u,h,d,x,g,y,j){const m=(v,C)=>{const{color:P,glyph:w,shapeStyles:r}=u({data:v,index:C,legendShape:j}),T={label:v.label,value:p(v,h,d),color:P,shapeStyle:r};return i(T,x,w,y,g)};return a.map(m)}function n(a,u={},h){const{showValues:d=!1,legendValueDisplay:x="percentage",withGlyph:g=!1,glyphSize:y=8,renderGlyph:j}=u,{getElementStyles:m}=(0,f.j)();return(0,e.useMemo)(()=>!a||!Array.isArray(a)||a.length===0?[]:"data"in a[0]?t(a,m,d,g,y,j,h):b(a,m,d,x,g,y,j,h),[a,m,d,x,g,y,j,h])}}),"../charts/src/hooks/use-element-height.ts":((_,c,s)=>{"use strict";s.d(c,{v:()=>e});var l=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function e({initialHeight:f=0}={}){const[o,p]=(0,l.useState)(f),i=(0,l.useRef)(null);return[(0,l.useCallback)(b=>{if(i.current&&(i.current.disconnect(),i.current=null),b){const n=()=>{p(b.getBoundingClientRect().height||0)};n();const a=new window.ResizeObserver(n);a.observe(b),i.current=a}},[]),o]}}),"../charts/src/stories/legend-config.tsx":((_,c,s)=>{"use strict";s.d(c,{r:()=>l});const l={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."}};try{l.displayName="legendArgTypes",l.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:l.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}),"../charts/src/utils/format-percentage.ts":((_,c,s)=>{"use strict";s.d(c,{E:()=>e});var l=s("../number-formatters/src/index.ts");const e=f=>(0,l.ZV)(f/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})})}]);
