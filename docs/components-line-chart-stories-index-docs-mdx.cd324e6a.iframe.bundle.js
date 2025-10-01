(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6936],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.25_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":((j,i,r)=>{"use strict";r.d(i,{R:()=>t,x:()=>o});var d=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},u=d.createContext(e);function t(a){const s=d.useContext(u);return d.useMemo(function(){return typeof a=="function"?a(s):{...s,...a}},[s,a])}function o(a){let s;return a.disableParentContext?s=typeof a.components=="function"?a.components(e):a.components||e:s=t(a.components),d.createElement(u.Provider,{value:s},a.children)}}),"../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.25_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive":(j=>{function i(r){var d=new Error("Cannot find module '"+r+"'");throw d.code="MODULE_NOT_FOUND",d}i.keys=()=>[],i.resolve=i,i.id="../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.25_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive",j.exports=i}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive":(j=>{function i(r){var d=new Error("Cannot find module '"+r+"'");throw d.code="MODULE_NOT_FOUND",d}i.keys=()=>[],i.resolve=i,i.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive",j.exports=i}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive":(j=>{function i(r){var d=new Error("Cannot find module '"+r+"'");throw d.code="MODULE_NOT_FOUND",d}i.keys=()=>[],i.resolve=i,i.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive",j.exports=i}),"../charts/src/components/line-chart/stories/glyph.stories.tsx":((j,i,r)=>{"use strict";r.r(i),r.d(i,{Custom:()=>v,CustomPerDataPoint:()=>_,CustomSvg:()=>b,End:()=>f,InTooltip:()=>C,Start:()=>y,__namedExportsOrder:()=>E,default:()=>k});var d=r("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"),e=r("../charts/src/providers/chart-context/global-charts-provider.tsx"),u=r("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),t=r("../charts/src/stories/theme-config.tsx"),o=r("../charts/src/components/line-chart/line-chart.tsx"),a=r("../charts/src/components/line-chart/stories/config.tsx"),s=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const L={...t.yI,glyph:a.Em},p=(l,{args:c})=>{const h=c.themeName,x=L[h||"default"];return(0,s.jsx)(e.S,{theme:x,children:(0,s.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,s.jsx)(l,{})})})},k={...a.Nc,title:"JS Packages/Charts/Types/Line Chart/Glyphs",decorators:[p],argTypes:{...a.Nc.argTypes,themeName:{...t.jW.themeName,options:["default","jetpack","woo","custom","glyph"]}}},m=l=>(0,s.jsx)(o.A,{...l}),g={...a.pn,withStartGlyphs:!0},y=m.bind({});y.args={...g};const f=m.bind({});f.args={...g,withStartGlyphs:!1,withEndGlyphs:!0};const v=m.bind({});v.args={...g,withLegendGlyph:!0,renderGlyph:({color:l,size:c,x:h,y:x})=>(0,s.jsx)(d.A,{top:x,left:h,size:c*c,fill:l}),glyphStyle:{radius:10}};const D=({color:l,size:c,x:h,y:x})=>{const w=typeof h=="number"&&typeof x=="number"&&(h!==0||x!==0)?{transform:`translate(${h}, ${x})`}:{};return(0,s.jsx)("g",{...w,children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:c*2,height:c*2,viewBox:"0 0 24 24",style:{overflow:"visible",pointerEvents:"none"},children:(0,s.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",fill:l,stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(-12, -12)"})})})},b=m.bind({});b.args={...g,withLegendGlyph:!0,renderGlyph:({color:l,size:c,x:h,y:x})=>(0,s.jsx)(D,{color:l,size:c,x:h,y:x}),glyphStyle:{radius:8}};const P=({tooltipData:l})=>{const c=(0,u.p)();return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{style:{marginBottom:"0.5rem"},children:l?.nearestDatum?.datum?.date?.toLocaleDateString()}),(0,s.jsx)("div",{children:Object.entries(l?.datumByKey||{}).map(([h,x],S)=>{const{datum:w}=x;return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.2rem"},children:[(0,s.jsx)("svg",{width:20,height:20,children:(0,s.jsx)(d.A,{size:100,top:10,left:10,fill:"#fff",stroke:c.colors[S%c.colors.length]})}),h,": ",w.value]})},h)})})]})},C=m.bind({});C.args={...g,renderGlyph:({color:l,size:c,x:h,y:x})=>(0,s.jsx)(d.A,{top:x,left:h,size:c*c,fill:"#fff",stroke:l}),glyphStyle:{radius:10},renderTooltip:P};const _=m.bind({});_.args={...g,showLegend:!0,withStartGlyphs:!0,withLegendGlyph:!0,themeName:"glyph",glyphStyle:{radius:8}};const E=["Start","End","Custom","CustomSvg","InTooltip","CustomPerDataPoint"];y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...y.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...f.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...C.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",..._.parameters?.docs?.source}}}}),"../charts/src/components/line-chart/stories/index.docs.mdx":((j,i,r)=>{"use strict";r.r(i),r.d(i,{default:()=>L});var d=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),u=r("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.25_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),t=r("../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.25_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist/blocks.mjs"),o=r("../charts/src/components/line-chart/stories/index.stories.tsx"),a=r("../charts/src/components/line-chart/stories/glyph.stories.tsx");function s(p){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,u.R)(),...p.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.W8,{title:"JS Packages/Charts/Types/Line Chart",of:o}),`
`,(0,e.jsx)(n.h1,{id:"line-chart",children:"Line Chart"}),`
`,(0,e.jsx)(n.p,{children:"Line Charts visualize data trends over time or other continuous variables, connecting data points with smooth or linear lines. They excel at showing patterns, trends, and relationships in time-series data."}),`
`,(0,e.jsx)(t.Hl,{of:o.Default}),`
`,(0,e.jsx)(n.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsxs)(n.p,{children:["The Line Chart component provides a flexible, accessible, and highly customizable solution for displaying temporal data. Built on ",(0,e.jsx)(n.code,{children:"@visx/xychart"}),", it supports multiple data series, various curve types, interactive tooltips, legends, and compound components for advanced features like annotations:"]}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`import { LineChart } from '@automattic/charts';

<LineChart data={ data }>
	{/* Optional child components for advanced features */}
	<LineChart.AnnotationsOverlay>
		<LineChart.Annotation
			datum={ { date: new Date('2024-01-01'), value: 100 } }
			title="Product Launch"
		/>
	</LineChart.AnnotationsOverlay>
</LineChart>`}),`
`,(0,e.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(n.h3,{id:"simple-line-chart",children:"Simple Line Chart"}),`
`,(0,e.jsxs)(n.p,{children:["The simplest line chart requires only a ",(0,e.jsx)(n.code,{children:"data"})," prop with time-series data:"]}),`
`,(0,e.jsx)(t.Hl,{of:o.SingleSeries}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<LineChart
	data={[
		{
			label: 'Temperature',
			data: [
				{ date: new Date('2024-01-01'), value: 20 },
				{ date: new Date('2024-01-02'), value: 25 },
				{ date: new Date('2024-01-03'), value: 18 },
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
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Layout & Dimensions:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"width"})}),": Chart width in pixels (responsive by default)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"height"})}),": Chart height in pixels (responsive by default)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"margin"})}),": Custom chart margins"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"className"})}),": Additional CSS class name for the chart container"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"chartId"})}),": Unique identifier for the chart (auto-generated if not provided)"]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Visual Styling:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"curveType"})}),": Line curve style (",(0,e.jsx)(n.code,{children:"'smooth'"}),", ",(0,e.jsx)(n.code,{children:"'linear'"}),", ",(0,e.jsx)(n.code,{children:"'monotone'"}),")"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"smoothing"})}),": Legacy smoothing parameter (deprecated, use ",(0,e.jsx)(n.code,{children:"curveType"})," instead)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"withGradientFill"})}),": Fill area under lines with gradient (",(0,e.jsx)(n.code,{children:"false"})," by default)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"withStartGlyphs"})}),": Show markers at the first data point of each series (",(0,e.jsx)(n.code,{children:"false"})," by default)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"renderGlyph"})}),": Custom glyph render function"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"glyphStyle"})}),": Styling for chart glyphs"]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Interactivity:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"withTooltips"})}),": Enable interactive tooltips (",(0,e.jsx)(n.code,{children:"true"})," by default)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"withTooltipCrosshairs"})}),": Show crosshair guides with tooltips"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"renderTooltip"})}),": Custom tooltip render function"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"onPointerDown"})}),": Pointer down event handler"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"onPointerUp"})}),": Pointer up event handler"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"onPointerMove"})}),": Pointer move event handler"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"onPointerOut"})}),": Pointer out event handler"]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Legend:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"showLegend"})}),": Display chart legend (",(0,e.jsx)(n.code,{children:"false"})," by default)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"legendOrientation"})}),": Legend layout orientation (",(0,e.jsx)(n.code,{children:"'horizontal'"})," by default)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"legendAlignment"})}),": Legend alignment within its position (",(0,e.jsx)(n.code,{children:"'center'"})," by default)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"legendPosition"})}),": Legend position where the legend appears (",(0,e.jsx)(n.code,{children:"'bottom'"})," by default)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"legendShape"})}),": Shape used in legend markers (",(0,e.jsx)(n.code,{children:"'line'"})," by default)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"withLegendGlyph"})}),": Use custom glyphs in legend (",(0,e.jsx)(n.code,{children:"false"})," by default)"]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Advanced:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"options"})}),": Advanced axis and scale configuration"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"children"})}),": Child components (e.g., annotations)"]}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"curve-types",children:"Curve Types"}),`
`,(0,e.jsx)(n.h3,{id:"linear-curves",children:"Linear Curves"}),`
`,(0,e.jsx)(n.p,{children:"Connect data points with straight lines for precise, unsmoothed visualization:"}),`
`,(0,e.jsx)(t.Hl,{of:o.CurveTypes}),`
`,(0,e.jsx)(n.h3,{id:"smooth-curves-catmull-rom",children:"Smooth Curves (Catmull-Rom)"}),`
`,(0,e.jsx)(n.p,{children:"Create flowing curves that pass through all data points using Catmull-Rom spline interpolation:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<LineChart
	data={data}
	curveType="smooth"
/>`}),`
`,(0,e.jsx)(n.h3,{id:"monotone-x-curves",children:"Monotone X Curves"}),`
`,(0,e.jsx)(n.p,{children:"Prevent overshooting while maintaining smoothness, ideal for data with sharp changes:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<LineChart
	data={data}
	curveType="monotone"
/>`}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"When to use each type:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Linear"}),": Raw data visualization, technical charts, precise measurements"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Smooth"}),": Aesthetic presentations, trend visualization, marketing materials"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Monotone"}),": Financial data, scientific measurements where overshooting would be misleading"]}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"multiple-series",children:"Multiple Series"}),`
`,(0,e.jsx)(n.h3,{id:"multi-series-charts",children:"Multi-Series Charts"}),`
`,(0,e.jsx)(n.p,{children:"Display multiple data series with automatic color differentiation:"}),`
`,(0,e.jsx)(t.Hl,{of:o.Default}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<LineChart
	data={[
		{
			label: 'London Temperature',
			data: londonData,
			options: {}
		},
		{
			label: 'New York Temperature',
			data: newYorkData,
			options: {}
		}
	]}
/>`}),`
`,(0,e.jsx)(n.h3,{id:"custom-series-styling",children:"Custom Series Styling"}),`
`,(0,e.jsxs)(n.p,{children:["Override individual series appearance with the ",(0,e.jsx)(n.code,{children:"options"})," prop:"]}),`
`,(0,e.jsx)(t.Hl,{of:o.BrokenLine}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<LineChart
	data={[
		{
			label: 'Projected Data',
			data: projectedData,
			options: {
				stroke: '#ff6b6b',
				seriesLineStyle: {
					strokeDasharray: '5 5 1'
				},
				legendShapeStyle: {
					strokeDasharray: '5 5 1'
				}
			}
		}
	]}
/>`}),`
`,(0,e.jsx)(n.h2,{id:"semantic-line-types",children:"Semantic Line Types"}),`
`,(0,e.jsx)(n.p,{children:"Use semantic line types to distinguish between different data categories with automatic styling."}),`
`,(0,e.jsx)(n.h3,{id:"comparison-type",children:"Comparison type"}),`
`,(0,e.jsxs)(n.p,{children:["The ",(0,e.jsx)(n.code,{children:"comparison"})," type can be used to differentiate comparison data from primary data series:"]}),`
`,(0,e.jsx)(t.Hl,{of:o.Comparison}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<LineChart
	data={[
		{
			label: 'This Year',
			data: currentYearData,
			options: {}
		},
		{
			label: 'Last Year',
			data: lastYearData,
			options: {
				type: 'comparison'
			}
		}
	]}
/>`}),`
`,(0,e.jsx)(n.h3,{id:"theme-integration",children:"Theme Integration"}),`
`,(0,e.jsx)(n.p,{children:"Comparison styling can be set in your theme configuration:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`// Theme configuration example
const customTheme = {
	lineChart: {
		lineStyles: {
			comparison: {
				strokeDasharray: '4 4',
				strokeLinecap: 'square',
				strokeWidth: 1.5
			}
		}
	}
};`}),`
`,(0,e.jsx)(n.h2,{id:"visual-features",children:"Visual Features"}),`
`,(0,e.jsx)(n.h3,{id:"gradient-fill",children:"Gradient Fill"}),`
`,(0,e.jsx)(n.p,{children:"Add visual depth with gradient fills under line series. The gradient system supports both simple fills and complex multi-stop gradients for sophisticated visual effects."}),`
`,(0,e.jsx)(n.h4,{id:"basic-gradient-fill",children:"Basic Gradient Fill"}),`
`,(0,e.jsxs)(n.p,{children:["Enable gradient fills for all series with the ",(0,e.jsx)(n.code,{children:"withGradientFill"})," prop:"]}),`
`,(0,e.jsx)(t.Hl,{of:o.GradientFilled}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<LineChart
	data={data}
	withGradientFill={true}
/>`}),`
`,(0,e.jsx)(n.h4,{id:"custom-gradient-colors",children:"Custom Gradient Colors"}),`
`,(0,e.jsxs)(n.p,{children:["Customize gradient colors per series using the ",(0,e.jsx)(n.code,{children:"gradient"})," option in series data:"]}),`
`,(0,e.jsx)(t.Hl,{of:o.GradientCustomColors}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`const data = [
	{
		label: 'Revenue',
		data: chartData,
		options: {
			gradient: {
				from: '#4CAF50',
				to: '#81C784',
				fromOpacity: 0.8,
				toOpacity: 0.1,
			},
		},
	},
	{
		label: 'Expenses',
		data: expenseData,
		options: {
			gradient: {
				from: '#F44336',
				to: '#EF5350',
				fromOpacity: 0.6,
				toOpacity: 0.0,
			},
		},
	},
];

<LineChart
	data={data}
	withGradientFill={true}
/>`}),`
`,(0,e.jsx)(n.h4,{id:"gradient-with-sections",children:"Gradient with sections"}),`
`,(0,e.jsx)(n.p,{children:"Create gradients that fade to transparent at specific points using stops, useful for highlighting data ranges. When no color is specified, the gradient uses the line color automatically:"}),`
`,(0,e.jsx)(t.Hl,{of:o.GradientTransparent}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`const data = [
	{
		label: 'Temperature',
		data: temperatureData,
		options: {
			gradient: {
				stops: [
					{ offset: '0%', opacity: 0.7 }, // Uses line color
					{ offset: '20%', opacity: 0 },  // Fades to transparent
					{ offset: '100%', opacity: 0 },
				],
			},
		},
	},
];

<LineChart
	data={data}
	withGradientFill={true}
/>`}),`
`,(0,e.jsx)(n.h4,{id:"gradient-options",children:"Gradient Options"}),`
`,(0,e.jsxs)(n.p,{children:["The ",(0,e.jsx)(n.code,{children:"gradient"})," option in series data supports the following properties:"]}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"from"})}),": Start color (hex, rgb, CSS variable)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"to"})}),": End color (used when no stops are defined)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"fromOpacity"})}),": Start opacity (0-1, default: 0.4)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"toOpacity"})}),": End opacity (0-1, default: 0.1)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"stops"})}),": Array of gradient stops for complex gradients"]}),`
`]}),`
`,(0,e.jsx)(n.h4,{id:"gradient-stop-properties",children:"Gradient Stop Properties"}),`
`,(0,e.jsxs)(n.p,{children:["Each stop in the ",(0,e.jsx)(n.code,{children:"stops"})," array accepts:"]}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"offset"})}),": Position along gradient (percentage string, e.g., '25%')"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"color"})}),": Color at this stop (hex, rgb, CSS variable) - defaults to line color if omitted"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"opacity"})}),": Opacity at this stop (0-1, default: 1)"]}),`
`]}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.strong,{children:"Note"}),": When using ",(0,e.jsx)(n.code,{children:"stops"}),", the ",(0,e.jsx)(n.code,{children:"from"}),", ",(0,e.jsx)(n.code,{children:"to"}),", ",(0,e.jsx)(n.code,{children:"fromOpacity"}),", and ",(0,e.jsx)(n.code,{children:"toOpacity"})," properties are ignored."]}),`
`,(0,e.jsx)(n.h3,{id:"glyphs-and-markers",children:"Glyphs and Markers"}),`
`,(0,e.jsx)(n.p,{children:"Add visual markers at data points using the glyph system:"}),`
`,(0,e.jsx)(t.Hl,{of:a.Start}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<LineChart
	data={data}
	withStartGlyphs={true}
	withLegendGlyph={true}
	renderGlyph={(props) => (
		<circle
			cx={props.x}
			cy={props.y}
			r={4}
			fill={props.color}
		/>
	)}
/>`}),`
`,(0,e.jsx)(n.h2,{id:"interactive-features",children:"Interactive Features"}),`
`,(0,e.jsx)(n.h3,{id:"tooltips-and-crosshairs",children:"Tooltips and Crosshairs"}),`
`,(0,e.jsx)(n.p,{children:"Enable rich interactive tooltips with optional crosshair guides:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<LineChart
	data={data}
	withTooltips={true}
	withTooltipCrosshairs={{
		showVertical: true,
		showHorizontal: false
	}}
	renderTooltip={({ datum, color }) => (
		<div style={{ background: color, color: 'white', padding: '8px' }}>
			<div>Value: {datum.value}</div>
			<div>Date: {datum.date.toLocaleDateString()}</div>
		</div>
	)}
/>`}),`
`,(0,e.jsx)(n.h3,{id:"pointer-events",children:"Pointer Events"}),`
`,(0,e.jsx)(n.p,{children:"Handle user interactions with custom event handlers:"}),`
`,(0,e.jsx)(t.Hl,{of:o.WithPointerEvents}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<LineChart
	data={data}
	onPointerDown={({ datum }) => console.log('Clicked:', datum)}
	onPointerMove={({ datum }) => console.log('Hover:', datum)}
/>`}),`
`,(0,e.jsx)(n.h3,{id:"keyboard-navigation",children:"Keyboard Navigation"}),`
`,(0,e.jsx)(n.p,{children:"Charts are fully keyboard accessible with Tab navigation and arrow key data point selection."}),`
`,(0,e.jsx)(n.h2,{id:"legends",children:"Legends"}),`
`,(0,e.jsx)(n.h3,{id:"basic-legend",children:"Basic Legend"}),`
`,(0,e.jsx)(n.p,{children:"Display series information with automatic color matching:"}),`
`,(0,e.jsx)(t.Hl,{of:o.CustomLegendPositioning}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<LineChart
	data={data}
	showLegend={true}
	legendOrientation="horizontal"
	legendAlignment="center"
	legendPosition="bottom"
/>`}),`
`,(0,e.jsx)(n.h3,{id:"custom-legend-shapes",children:"Custom Legend Shapes"}),`
`,(0,e.jsx)(n.p,{children:"Use different shapes and custom glyphs in legends:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<LineChart
	data={data}
	showLegend={true}
	legendAlignment="end"
	legendPosition="top"
	legendShape="circle"
	withLegendGlyph={true}
/>`}),`
`,(0,e.jsx)(n.h2,{id:"advanced-customization",children:"Advanced Customization"}),`
`,(0,e.jsx)(n.h3,{id:"axis-configuration",children:"Axis Configuration"}),`
`,(0,e.jsx)(n.p,{children:"Customize axes with formatting, orientation, and tick options:"}),`
`,(0,e.jsx)(t.Hl,{of:o.SmartFormatting}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<LineChart
	data={data}
	options={{
		axis: {
			x: {
				orientation: 'bottom',
				numTicks: 6,
				tickFormat: (date) => date.toLocaleDateString()
			},
			y: {
				orientation: 'right',
				numTicks: 4,
				tickFormat: (value) => '$' + value + 'k'
			}
		},
		yScale: {
			type: 'linear',
			zero: true,
			nice: true
		}
	}}
/>`}),`
`,(0,e.jsx)(n.h3,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,(0,e.jsx)(n.p,{children:"Charts automatically resize based on container size:"}),`
`,(0,e.jsx)(t.Hl,{of:o.FixedDimensions}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`// Responsive (default)
<LineChart data={data} />

// Fixed dimensions
<LineChart
	data={data}
	width={800}
	height={400}
/>`}),`
`,(0,e.jsx)(n.h3,{id:"custom-margins",children:"Custom Margins"}),`
`,(0,e.jsx)(n.p,{children:"Control chart layout with precise margin settings:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<LineChart
	data={data}
	margin={{
		top: 20,
		right: 80,
		bottom: 60,
		left: 80
	}}
/>`}),`
`,(0,e.jsx)(n.h2,{id:"annotations",children:"Annotations"}),`
`,(0,e.jsxs)(n.p,{children:["Add contextual information to highlight specific data points or events. For comprehensive annotation documentation, see the ",(0,e.jsx)(n.a,{href:"?path=/docs/js-packages-charts-types-line-chart-annotations--docs",children:"Line Chart Annotations"})," guide:"]}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<LineChart data={data}>
	<LineChart.AnnotationsOverlay>
		<LineChart.Annotation
			datum={{ date: new Date('2024-01-15'), value: 100 }}
			title="Product Launch"
			subtitle="Version 2.0 released"
			subjectType="line-vertical"
		/>
	</LineChart.AnnotationsOverlay>
</LineChart>`}),`
`,(0,e.jsx)(n.h2,{id:"data-formats",children:"Data Formats"}),`
`,(0,e.jsx)(n.h3,{id:"date-handling",children:"Date Handling"}),`
`,(0,e.jsx)(n.p,{children:"The chart supports multiple date formats and automatically converts to local timezone:"}),`
`,(0,e.jsx)(t.Hl,{of:o.DateStringFormats}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`// Date objects
{ date: new Date('2024-01-01'), value: 10 }

// Date strings (automatically parsed)
{ dateString: '2024-01-01', value: 10 }
{ dateString: '2024-01-01 14:30:00', value: 15 }
{ dateString: '2024-01-01T14:30:00Z', value: 20 }`}),`
`,(0,e.jsx)(n.h3,{id:"large-values",children:"Large Values"}),`
`,(0,e.jsx)(n.p,{children:"Automatic formatting handles large numbers with smart abbreviations:"}),`
`,(0,e.jsx)(t.Hl,{of:o.SmartFormatting}),`
`,(0,e.jsx)(n.p,{children:"Values are automatically formatted as:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"1B and above"}),': "1.23B"']}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"1M and above"}),': "1.2M"']}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"1K and above"}),': "1k"']}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Below 1K"}),': "1,234"']}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),`
`,(0,e.jsx)(n.p,{children:"The chart gracefully handles various error states and edge cases:"}),`
`,(0,e.jsx)(t.Hl,{of:o.ErrorStates}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Supported scenarios:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Empty data arrays"}),`
`,(0,e.jsx)(n.li,{children:"Invalid date values"}),`
`,(0,e.jsx)(n.li,{children:"Null or NaN numeric values"}),`
`,(0,e.jsx)(n.li,{children:"Single data points"}),`
`,(0,e.jsx)(n.li,{children:"Missing data properties"}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,(0,e.jsx)(n.h3,{id:"keyboard-navigation-1",children:"Keyboard Navigation"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Tab"}),": Focus the chart"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Arrow Keys"}),": Navigate between data points"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Enter/Space"}),": Activate tooltips or interactive elements"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Escape"}),": Close active tooltips"]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"screen-reader-support",children:"Screen Reader Support"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["Chart container has ",(0,e.jsx)(n.code,{children:'role="grid"'})," with descriptive ",(0,e.jsx)(n.code,{children:"aria-label"})]}),`
`,(0,e.jsx)(n.li,{children:"Data points are navigable and announced with values"}),`
`,(0,e.jsx)(n.li,{children:"Interactive elements have appropriate ARIA attributes"}),`
`,(0,e.jsx)(n.li,{children:"Color information is supplemented with patterns and labels"}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"focus-management",children:"Focus Management"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Clear visual focus indicators"}),`
`,(0,e.jsx)(n.li,{children:"Logical tab order through interactive elements"}),`
`,(0,e.jsx)(n.li,{children:"Focus restoration after modal interactions"}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"browser-compatibility",children:"Browser Compatibility"}),`
`,(0,e.jsx)(n.h3,{id:"modern-browser-support",children:"Modern Browser Support"}),`
`,(0,e.jsx)(n.p,{children:"Full functionality in all modern browsers supporting:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"SVG rendering"}),`
`,(0,e.jsx)(n.li,{children:"CSS Grid and Flexbox"}),`
`,(0,e.jsx)(n.li,{children:"ES6+ JavaScript features"}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"safari-considerations",children:"Safari Considerations"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["Annotation popover positioning uses viewport center due to Safari's ",(0,e.jsx)(n.code,{children:"foreignObject"})," positioning limitations"]}),`
`,(0,e.jsx)(n.li,{children:"Native Popover API support varies; fallbacks are provided"}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"responsive-features",children:"Responsive Features"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Built-in ResizeObserver support for automatic chart resizing"}),`
`,(0,e.jsx)(n.li,{children:"Graceful degradation for older browsers"}),`
`,(0,e.jsx)(n.li,{children:"Touch-friendly interactions on mobile devices"}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsx)(n.h3,{id:"linechart",children:"LineChart"}),`
`,(0,e.jsx)(n.p,{children:"Main chart component with responsive behavior by default."}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Props:"})}),`
`,(0,e.jsxs)(n.table,{children:[(0,e.jsx)(n.thead,{children:(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.th,{children:"Prop"}),(0,e.jsx)(n.th,{children:"Type"}),(0,e.jsx)(n.th,{children:"Default"}),(0,e.jsx)(n.th,{children:"Description"})]})}),(0,e.jsxs)(n.tbody,{children:[(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"data"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"SeriesData[]"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsxs)(n.td,{children:[(0,e.jsx)(n.strong,{children:"Required."})," Array of data series to display"]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"width"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number?"})}),(0,e.jsx)(n.td,{children:"responsive"}),(0,e.jsx)(n.td,{children:"Chart width in pixels"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"height"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number?"})}),(0,e.jsx)(n.td,{children:"responsive"}),(0,e.jsx)(n.td,{children:"Chart height in pixels"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"curveType"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'smooth' | 'linear' | 'monotone'?"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'smooth'"})}),(0,e.jsx)(n.td,{children:"Line curve interpolation type"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"withGradientFill"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsx)(n.td,{children:"Fill area under lines with gradient"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"withTooltips"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"true"})}),(0,e.jsx)(n.td,{children:"Enable interactive tooltips"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"withTooltipCrosshairs"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"{ showVertical?: boolean; showHorizontal?: boolean }?"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Show crosshair guides with tooltips"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"showLegend"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsx)(n.td,{children:"Display chart legend"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendOrientation"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'horizontal' | 'vertical'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'horizontal'"})}),(0,e.jsx)(n.td,{children:"Legend layout orientation"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendAlignment"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'start' | 'center' | 'end'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'center'"})}),(0,e.jsx)(n.td,{children:"Legend alignment within its position"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendPosition"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'top' | 'bottom'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'bottom'"})}),(0,e.jsx)(n.td,{children:"Legend position (where the legend appears)"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendShape"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"LegendShape"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'line'"})}),(0,e.jsx)(n.td,{children:"Shape used in legend markers"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"withStartGlyphs"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean?"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsx)(n.td,{children:"Show markers at the first data point of each series"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"withLegendGlyph"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean?"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsx)(n.td,{children:"Use custom glyphs in legend"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"renderGlyph"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(props: GlyphProps) => ReactNode?"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Custom glyph render function"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"glyphStyle"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"SVGProps<SVGCircleElement>?"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"{}"})}),(0,e.jsx)(n.td,{children:"Styling for chart glyphs"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"renderTooltip"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(params: RenderTooltipParams) => ReactNode?"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Custom tooltip render function"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"margin"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"{ top?: number; right?: number; bottom?: number; left?: number }?"})}),(0,e.jsx)(n.td,{children:"calculated"}),(0,e.jsx)(n.td,{children:"Chart margins"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"options"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"ChartOptions?"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"{}"})}),(0,e.jsx)(n.td,{children:"Advanced axis and scale configuration"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"onPointerDown"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(event: EventHandlerParams) => void?"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Pointer down event handler"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"onPointerUp"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(event: EventHandlerParams) => void?"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Pointer up event handler"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"onPointerMove"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(event: EventHandlerParams) => void?"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Pointer move event handler"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"onPointerOut"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(event: PointerEvent) => void?"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Pointer out event handler"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"children"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"ReactNode?"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Child components (e.g., annotations)"})]})]})]}),`
`,(0,e.jsx)(n.h3,{id:"linechartannotationsoverlay",children:"LineChart.AnnotationsOverlay"}),`
`,(0,e.jsxs)(n.p,{children:["Container component for chart annotations. See ",(0,e.jsx)(n.a,{href:"?path=/docs/js-packages-charts-types-line-chart-annotations--docs",children:"Annotations documentation"})," for complete details."]}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Props:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"children"}),": Annotation components"]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"linechartannotation",children:"LineChart.Annotation"}),`
`,(0,e.jsxs)(n.p,{children:["Individual annotation component. See ",(0,e.jsx)(n.a,{href:"?path=/docs/js-packages-charts-types-line-chart-annotations--docs",children:"Annotations documentation"})," for complete API reference."]}),`
`,(0,e.jsx)(n.h3,{id:"seriesdata-type",children:"SeriesData Type"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type SeriesData = {
	label: string;
	data: DataPointDate[];
	options?: {
		gradient?: {
			from?: string;
			to?: string;
			fromOpacity?: number;
			toOpacity?: number;
			stops?: Array<{
				offset: string;
				color?: string;
				opacity?: number;
			}>;
		};
		stroke?: string;
		seriesLineStyle?: LineStyles;
		legendShapeStyle?: CSSProperties;
		type?: 'comparison'; // Semantic type for automatic theme styling
	};
};
`})}),`
`,(0,e.jsx)(n.h4,{id:"gradient-options-1",children:"Gradient Options"}),`
`,(0,e.jsxs)(n.p,{children:["The ",(0,e.jsx)(n.code,{children:"gradient"})," option in ",(0,e.jsx)(n.code,{children:"SeriesData.options"})," accepts the following configuration:"]}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Basic Gradient (Two-Color):"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"from"}),": Start color (hex, rgb, CSS variable) - defaults to series color"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"to"}),": End color (hex, rgb, CSS variable) - defaults to transparent background"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"fromOpacity"}),": Start opacity (0-1, default: 0.4)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"toOpacity"}),": End opacity (0-1, default: 0.1)"]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Advanced Gradient (Multi-Stop):"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"stops"}),": Array of gradient stops for complex gradients",`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"offset"}),": Position along gradient (percentage string, e.g., '25%')"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"color"}),": Color at this stop (hex, rgb, CSS variable) - defaults to line color if omitted"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"opacity"}),": Opacity at this stop (0-1, default: 1)"]}),`
`]}),`
`]}),`
`]}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.strong,{children:"Note"}),": When using ",(0,e.jsx)(n.code,{children:"stops"}),", the ",(0,e.jsx)(n.code,{children:"from"}),", ",(0,e.jsx)(n.code,{children:"to"}),", ",(0,e.jsx)(n.code,{children:"fromOpacity"}),", and ",(0,e.jsx)(n.code,{children:"toOpacity"})," properties are ignored."]}),`
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
		type?: 'linear' | 'log';
		zero?: boolean;
		domain?: [number, number];
		nice?: boolean;
	};
	xScale?: {
		type?: 'time' | 'linear';
		domain?: [Date, Date] | [number, number];
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
`,(0,e.jsx)(n.h2,{id:"performance-considerations",children:"Performance Considerations"}),`
`,(0,e.jsx)(n.h3,{id:"built-in-optimizations",children:"Built-in Optimizations"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"No animations"}),": Animations have been removed from chart components to improve performance and reduce overhead"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Efficient rendering"}),": Built on ",(0,e.jsx)(n.code,{children:"@visx/xychart"})," for optimized SVG rendering and chart performance"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Responsive behavior"}),": Uses ",(0,e.jsx)(n.code,{children:"ResizeObserver"})," for efficient chart resizing without polling"]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"implementation-notes",children:"Implementation Notes"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Chart components are optimized for typical dashboard and analytics use cases"}),`
`,(0,e.jsxs)(n.li,{children:["The underlying ",(0,e.jsx)(n.code,{children:"@visx"})," libraries provide efficient data-to-visual mappings"]}),`
`,(0,e.jsx)(n.li,{children:"Consider your specific data volume and update frequency when implementing real-time charts"}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"theming-integration",children:"Theming Integration"}),`
`,(0,e.jsx)(n.p,{children:"Line Charts integrate seamlessly with the chart theming system:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`import { GlobalChartsProvider, jetpackTheme } from '@automattic/charts';

<GlobalChartsProvider theme={jetpackTheme}>
	<LineChart data={data} />
</GlobalChartsProvider>`}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Available themes:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Default"}),": Neutral colors and styling"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Jetpack"}),": Jetpack brand colors and styling"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Woo"}),": WooCommerce brand colors and styling"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Custom"}),": Define your own theme object"]}),`
`]})]})}function L(p={}){const{wrapper:n}={...(0,u.R)(),...p.components};return n?(0,e.jsx)(n,{...p,children:(0,e.jsx)(s,{...p})}):s(p)}})}]);
