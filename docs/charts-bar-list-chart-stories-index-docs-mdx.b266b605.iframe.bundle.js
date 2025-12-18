(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[593,2885],{"../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.0.8_@test_ca37a3433c216fd610726ebbc5860d83/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive":(V=>{function g(s){var _=new Error("Cannot find module '"+s+"'");throw _.code="MODULE_NOT_FOUND",_}g.keys=()=>[],g.resolve=g,g.id="../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.0.8_@test_ca37a3433c216fd610726ebbc5860d83/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive",V.exports=g}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((V,g,s)=>{"use strict";s.d(g,{A:()=>O});function _(o){var d,c,f="";if(typeof o=="string"||typeof o=="number")f+=o;else if(typeof o=="object")if(Array.isArray(o)){var b=o.length;for(d=0;d<b;d++)o[d]&&(c=_(o[d]))&&(f&&(f+=" "),f+=c)}else for(c in o)o[c]&&(f&&(f+=" "),f+=c);return f}function e(){for(var o,d,c=0,f="",b=arguments.length;c<b;c++)(o=arguments[c])&&(d=_(o))&&(f&&(f+=" "),f+=d);return f}const O=e}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(V=>{"use strict";var g=function(n){return s(n)&&!_(n)};function s(a){return!!a&&typeof a=="object"}function _(a){var n=Object.prototype.toString.call(a);return n==="[object RegExp]"||n==="[object Date]"||o(a)}var e=typeof Symbol=="function"&&Symbol.for,O=e?Symbol.for("react.element"):60103;function o(a){return a.$$typeof===O}function d(a){return Array.isArray(a)?[]:{}}function c(a,n){return n.clone!==!1&&n.isMergeableObject(a)?A(d(a),a,n):a}function f(a,n,l){return a.concat(n).map(function(r){return c(r,l)})}function b(a,n){if(!n.customMerge)return A;var l=n.customMerge(a);return typeof l=="function"?l:A}function t(a){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(a).filter(function(n){return Object.propertyIsEnumerable.call(a,n)}):[]}function y(a){return Object.keys(a).concat(t(a))}function D(a,n){try{return n in a}catch{return!1}}function M(a,n){return D(a,n)&&!(Object.hasOwnProperty.call(a,n)&&Object.propertyIsEnumerable.call(a,n))}function E(a,n,l){var r={};return l.isMergeableObject(a)&&y(a).forEach(function(i){r[i]=c(a[i],l)}),y(n).forEach(function(i){M(a,i)||(D(a,i)&&l.isMergeableObject(n[i])?r[i]=b(i,l)(a[i],n[i],l):r[i]=c(n[i],l))}),r}function A(a,n,l){l=l||{},l.arrayMerge=l.arrayMerge||f,l.isMergeableObject=l.isMergeableObject||g,l.cloneUnlessOtherwiseSpecified=c;var r=Array.isArray(n),i=Array.isArray(a),x=r===i;return x?r?l.arrayMerge(a,n,l):E(a,n,l):c(n,l)}A.all=function(n,l){if(!Array.isArray(n))throw new Error("first argument should be an array");return n.reduce(function(r,i){return A(r,i,l)},{})};var P=A;V.exports=P}),"../charts/src/charts/bar-list-chart/bar-list-chart.tsx":((V,g,s)=>{"use strict";s.d(g,{A:()=>l});var _=s("../number-formatters/src/index.ts"),e=s("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),O=s("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/band.js"),o=s("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),d=s("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),c=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=s("../charts/src/providers/chart-context/global-charts-provider.tsx"),b=s("../charts/src/charts/bar-chart/bar-chart.tsx"),t=s("../charts/src/charts/private/with-responsive/with-responsive.tsx"),y=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const D=r=>{const i=r;return i&&"bandwidth"in i?i?.bandwidth()??0:0},M=({textProps:r,x:i,y:x,label:m,formatter:S})=>(0,y.jsx)(d.A,{...r,textAnchor:"start",x:i,y:x,children:S(m)}),E=({textProps:r,x:i,y:x,value:m,formatter:S})=>(0,y.jsx)(d.A,{...r,textAnchor:"end",x:i,y:x,fontWeight:500,children:S(m)}),A=({ticks:r,tickLabelProps:i,yOffset:x,labelPosition:m,valuePosition:S,data:h,labelFormatter:u,valueFormatter:p,LabelComponent:v=M,ValueComponent:j=E})=>{if(r.length===0)return null;const C=r.map(({value:w,index:T})=>typeof i=="function"?i(w,T,r):{});return r.map(({from:w,formattedValue:T},L)=>{const B=C[L]??{};delete B.textAnchor,delete B.dx;const R=h.reduce((W,{data:F})=>W+(F[L]?.value??0),0),I=w.y+x;return(0,y.jsxs)(e.A,{children:[(0,y.jsx)(v,{textProps:B,x:m,y:I,label:T,formatter:u}),(0,y.jsx)(j,{textProps:B,x:S,y:I,value:R,formatter:p,data:h,index:L})]},L)})},P=(r,i,x,m)=>{if(!m)return 0;const S=r.map(({label:j})=>j),h=(0,o.A)({type:"band",range:[0,x],domain:S,...i}),u=(0,O.A)({domain:S,range:[0,D(h)],padding:i.paddingInner});return-(D(u)+6)},a=({data:r,width:i,height:x,options:m={},margin:S={left:0,right:20,bottom:0,top:0},...h})=>{const u=(0,c.useMemo)(()=>{const p=r.length>1,v={paddingInner:p?.3:.1,padding:p?.3:.1},j={zero:!0},C={...v,...m.yScale??{}},w={...j,...m.xScale??{}};return{yScale:C,xScale:w,labelPosition:m.labelPosition??(p?0:10),valueFormatter:m.valueFormatter??(T=>(0,_.qe)(T)),labelFormatter:m.labelFormatter??(T=>String(T)),valuePosition:m.valuePosition??i,yOffset:m.yOffset??P(r,C,x,p)}},[m,i,r,x]);return(0,y.jsx)(b.A,{orientation:"horizontal",gridVisibility:"none",data:r,width:i,height:x,margin:S,options:{axis:{y:{children:p=>(0,y.jsx)(A,{...p,data:r,yOffset:u.yOffset,labelPosition:u.labelPosition,valuePosition:u.valuePosition,labelFormatter:u.labelFormatter,valueFormatter:u.valueFormatter,LabelComponent:m.labelComponent,ValueComponent:m.valueComponent})},x:{children:()=>null}},xScale:u.xScale,yScale:u.yScale},...h})},n=r=>(0,c.useContext)(f.m)?(0,y.jsx)(a,{...r}):(0,y.jsx)(f.S,{children:(0,y.jsx)(a,{...r})});n.displayName="BarListChart";const l=(0,t.F)(n);try{ResponsiveChart.displayName="ResponsiveChart",ResponsiveChart.__docgenInfo={description:"",displayName:"ResponsiveChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:'{ yScale: Omit<ScaleOptions, "type">; xScale: Omit<ScaleOptions, "type">; labelFormatter?: (value: string) => string; valueFormatter?: (value: number) => string; ... 4 more ...; valueComponent?: ComponentType<...>; }'}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendItemClassName:{defaultValue:null,description:`Additional CSS class name for legend items.
This allows consumers to customize individual legend item styling.`,name:"legendItemClassName",required:!1,type:{name:"string"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},legendInteractive:{defaultValue:null,description:`Enable interactive legend items that can toggle series visibility.
Supported for LineChart, PieChart, and PieSemiCircleChart.
Requires chartId and GlobalChartsProvider.
For pie charts, percentages are recalculated so visible segments total 100%.`,name:"legendInteractive",required:!1,type:{name:"boolean"}},withTooltips:{defaultValue:null,description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:null,description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendPosition:{defaultValue:null,description:`Legend position (where the legend appears)
TODO: Add 'left' | 'right' positioning support in future implementation`,name:"legendPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},legendAlignment:{defaultValue:null,description:"Legend alignment within its position",name:"legendAlignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},legendMaxWidth:{defaultValue:null,description:`Maximum width for legend items. When set, text overflow behavior is controlled by legendTextOverflow.
Should be a CSS value string (e.g. '200px', '50%', '10rem')`,name:"legendMaxWidth",required:!1,type:{name:"string"}},legendTextOverflow:{defaultValue:null,description:`Controls how text behaves when it exceeds legendMaxWidth.
- 'ellipsis': Truncate with ellipsis (ideal for widgets/small devices)
- 'wrap': Wrap text to multiple lines (default, ideal for larger displays)`,name:"legendTextOverflow",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"ellipsis"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},animation:{defaultValue:null,description:"Whether to show chart animation on initial render or not",name:"animation",required:!1,type:{name:"boolean"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withPatterns:{defaultValue:null,description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},showZeroValues:{defaultValue:null,description:"",name:"showZeroValues",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:{value:"1200"},description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:{value:"0.5"},description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:{value:"300"},description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/bar-list-chart/bar-list-chart.tsx#ResponsiveChart"]={docgenInfo:ResponsiveChart.__docgenInfo,name:"ResponsiveChart",path:"../charts/src/charts/bar-list-chart/bar-list-chart.tsx#ResponsiveChart"})}catch{}try{n.displayName="BarListChart",n.__docgenInfo={description:"",displayName:"BarListChart",props:{options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:'{ yScale: Omit<ScaleOptions, "type">; xScale: Omit<ScaleOptions, "type">; labelFormatter?: (value: string) => string; valueFormatter?: (value: number) => string; ... 4 more ...; valueComponent?: ComponentType<...>; }'}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},withPatterns:{defaultValue:null,description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},showZeroValues:{defaultValue:null,description:"",name:"showZeroValues",required:!1,type:{name:"boolean"}},legendInteractive:{defaultValue:null,description:`Enable interactive legend items that can toggle series visibility.
Supported for LineChart, PieChart, and PieSemiCircleChart.
Requires chartId and GlobalChartsProvider.
For pie charts, percentages are recalculated so visible segments total 100%.`,name:"legendInteractive",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},margin:{defaultValue:{value:`{
		left: 0,
		right: 20,
		bottom: 0,
		top: 0,
	}`},description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:null,description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:null,description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendPosition:{defaultValue:null,description:`Legend position (where the legend appears)
TODO: Add 'left' | 'right' positioning support in future implementation`,name:"legendPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},legendAlignment:{defaultValue:null,description:"Legend alignment within its position",name:"legendAlignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},legendMaxWidth:{defaultValue:null,description:`Maximum width for legend items. When set, text overflow behavior is controlled by legendTextOverflow.
Should be a CSS value string (e.g. '200px', '50%', '10rem')`,name:"legendMaxWidth",required:!1,type:{name:"string"}},legendTextOverflow:{defaultValue:null,description:`Controls how text behaves when it exceeds legendMaxWidth.
- 'ellipsis': Truncate with ellipsis (ideal for widgets/small devices)
- 'wrap': Wrap text to multiple lines (default, ideal for larger displays)`,name:"legendTextOverflow",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"ellipsis"'}]}},legendItemClassName:{defaultValue:null,description:`Additional CSS class name for legend items.
This allows consumers to customize individual legend item styling.`,name:"legendItemClassName",required:!1,type:{name:"string"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},animation:{defaultValue:null,description:"Whether to show chart animation on initial render or not",name:"animation",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/bar-list-chart/bar-list-chart.tsx#BarListChart"]={docgenInfo:n.__docgenInfo,name:"BarListChart",path:"../charts/src/charts/bar-list-chart/bar-list-chart.tsx#BarListChart"})}catch{}}),"../charts/src/charts/bar-list-chart/stories/index.docs.mdx":((V,g,s)=>{"use strict";s.r(g),s.d(g,{default:()=>f});var _=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),O=s("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),o=s("../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.0.8_@test_ca37a3433c216fd610726ebbc5860d83/node_modules/@storybook/addon-docs/dist/blocks.js"),d=s("../charts/src/charts/bar-list-chart/stories/index.stories.tsx");function c(b){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,O.R)(),...b.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.W8,{title:"JS Packages/Charts Library/Charts/Bar List Chart",of:d}),`
`,(0,e.jsx)(t.h1,{id:"bar-list-chart",children:"Bar List Chart"}),`
`,(0,e.jsx)(t.p,{children:"A specialized horizontal bar chart component that displays data as a ranked list with labels and values positioned alongside the bars. Ideal for showing comparisons between categories or time periods."}),`
`,(0,e.jsx)(o.Hl,{of:d.Default}),`
`,(0,e.jsx)(t.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsx)(t.p,{children:"The BarListChart component extends the BarChart component to create a list-style visualization that combines horizontal bars with text labels and values. It automatically handles positioning of labels on the left and values on the right, making it perfect for dashboards and reports that need to display ranked data clearly."}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`import { BarListChart } from '@automattic/charts';

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
`,(0,e.jsx)(t.p,{children:"Key features:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Automatic label and value positioning"}),`
`,(0,e.jsx)(t.li,{children:"Support for single and multi-series data"}),`
`,(0,e.jsx)(t.li,{children:"Customizable formatters for labels and values"}),`
`,(0,e.jsx)(t.li,{children:"Custom component rendering for advanced styling"}),`
`,(0,e.jsx)(t.li,{children:"Responsive design with automatic sizing"}),`
`]}),`
`,(0,e.jsx)(t.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsxs)(t.p,{children:["For detailed information about component props, types, and method signatures, see the ",(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-library-charts-bar-list-chart-api-reference--docs",children:"Bar List Chart API Reference"}),"."]}),`
`,(0,e.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(t.h3,{id:"single-series-data",children:"Single Series Data"}),`
`,(0,e.jsx)(t.p,{children:"The simplest implementation displays a single series of data with automatic formatting:"}),`
`,(0,e.jsx)(o.Hl,{of:d.Default}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`const singleSeriesData = [
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
`,(0,e.jsx)(t.h3,{id:"multi-series-data",children:"Multi-Series Data"}),`
`,(0,e.jsx)(t.p,{children:"Compare data across different time periods or categories:"}),`
`,(0,e.jsx)(o.Hl,{of:d.MultiSeries}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`const multiSeriesData = [
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
`,(0,e.jsx)(t.h3,{id:"required-props",children:"Required Props"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"data"})}),": Array of SeriesData objects containing the chart data"]}),`
`]}),`
`,(0,e.jsxs)(t.p,{children:["For detailed prop information and configuration options, see the ",(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-library-charts-bar-list-chart-api-reference--docs",children:"Bar List Chart API Reference"}),"."]}),`
`,(0,e.jsx)(t.h2,{id:"chart-types",children:"Chart Types"}),`
`,(0,e.jsx)(t.h3,{id:"single-series-default",children:"Single Series (Default)"}),`
`,(0,e.jsx)(t.p,{children:"Best for displaying a simple ranked list of items:"}),`
`,(0,e.jsx)(o.Hl,{of:d.Default}),`
`,(0,e.jsx)(t.p,{children:"Characteristics:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Compact layout with minimal padding"}),`
`,(0,e.jsx)(t.li,{children:"Labels positioned closer to bars"}),`
`,(0,e.jsx)(t.li,{children:"Values displayed with compact number formatting"}),`
`,(0,e.jsx)(t.li,{children:"Ideal for product rankings, performance metrics"}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"multi-series-comparison",children:"Multi-Series Comparison"}),`
`,(0,e.jsx)(t.p,{children:"Perfect for comparing data across time periods or categories:"}),`
`,(0,e.jsx)(o.Hl,{of:d.MultiSeries}),`
`,(0,e.jsx)(t.p,{children:"Characteristics:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Increased padding for better visual separation"}),`
`,(0,e.jsx)(t.li,{children:"Grouped bars for comparison"}),`
`,(0,e.jsx)(t.li,{children:"Automatic calculation of totals for value display"}),`
`,(0,e.jsx)(t.li,{children:"Color coding based on series groups"}),`
`]}),`
`,(0,e.jsx)(t.h2,{id:"styling-and-customization",children:"Styling and Customization"}),`
`,(0,e.jsx)(t.h3,{id:"custom-label-components",children:"Custom Label Components"}),`
`,(0,e.jsx)(t.p,{children:"Create custom label rendering with icons or enhanced styling:"}),`
`,(0,e.jsx)(o.Hl,{of:d.CustomLabelComponent}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`import { Circle } from '@visx/shape';
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
`,(0,e.jsx)(t.h3,{id:"custom-value-components",children:"Custom Value Components"}),`
`,(0,e.jsx)(t.p,{children:"Display additional information alongside values:"}),`
`,(0,e.jsx)(o.Hl,{of:d.CustomValueComponent}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<BarListChart
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
`,(0,e.jsx)(t.h3,{id:"formatting-options",children:"Formatting Options"}),`
`,(0,e.jsxs)(t.p,{children:["The ",(0,e.jsx)(t.code,{children:"options"})," prop accepts various formatting and positioning controls:"]}),`
`,(0,e.jsx)(t.h4,{id:"labelformatter",children:(0,e.jsx)(t.code,{children:"labelFormatter"})}),`
`,(0,e.jsx)(t.p,{children:"Controls how labels are displayed:"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-jsx",children:`options: {
	labelFormatter: (value) => value.toUpperCase()
}
`})}),`
`,(0,e.jsx)(t.h4,{id:"valueformatter",children:(0,e.jsx)(t.code,{children:"valueFormatter"})}),`
`,(0,e.jsx)(t.p,{children:"Controls how values are formatted:"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-jsx",children:"options: {\n	valueFormatter: (value) => `$${formatNumberCompact(value)}`\n}\n"})}),`
`,(0,e.jsxs)(t.h4,{id:"labelposition-and-valueposition",children:[(0,e.jsx)(t.code,{children:"labelPosition"})," and ",(0,e.jsx)(t.code,{children:"valuePosition"})]}),`
`,(0,e.jsx)(t.p,{children:"Control the horizontal positioning of text elements:"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-jsx",children:`options: {
	labelPosition: 20,    // X position for labels
	valuePosition: 400,   // X position for values
}
`})}),`
`,(0,e.jsx)(t.h2,{id:"theming-integration",children:"Theming Integration"}),`
`,(0,e.jsxs)(t.p,{children:["Bar List Charts integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided. A custom theme can be provided by wrapping your chart in ",(0,e.jsx)(t.code,{children:"GlobalChartsProvider"})," and passing a custom theme object with the properties you want to override to the ",(0,e.jsx)(t.code,{children:"theme"})," prop:"]}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`import { GlobalChartsProvider, BarListChart, type ChartTheme } from '@automattic/charts';

const customTheme: ChartTheme = {
	colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'],
};

<GlobalChartsProvider theme={customTheme}>
	<BarListChart data={data} />
</GlobalChartsProvider>`}),`
`,(0,e.jsx)(t.h2,{id:"animation",children:"Animation"}),`
`,(0,e.jsx)(t.p,{children:"The Bar List Chart component supports an optional entry animation that creates a smooth reveal effect when the chart first renders:"}),`
`,(0,e.jsx)(o.Hl,{of:d.Animation}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`<BarListChart
	data={ data }
	animation={ true }
/>`}),`
`,(0,e.jsx)(t.h3,{id:"animation-behavior",children:"Animation Behavior"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Opt-in"}),": Animation is disabled by default and must be explicitly enabled with the ",(0,e.jsx)(t.code,{children:"animation"})," prop"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Accessibility"}),": Automatically respects the user's ",(0,e.jsx)(t.code,{children:"prefers-reduced-motion"})," system setting - animation will not play for users who prefer reduced motion"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Effect"}),": Creates a stretching effect where bars grow from left to right, revealing the data progressively"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Duration"}),": 1000ms (1 second) with ease-out timing"]}),`
`]}),`
`,(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.strong,{children:"Note"}),": The animation plays once when the chart initially renders and does not repeat."]}),`
`,(0,e.jsx)(t.h2,{id:"advanced-features",children:"Advanced Features"}),`
`,(0,e.jsx)(t.h3,{id:"scale-configuration",children:"Scale Configuration"}),`
`,(0,e.jsx)(t.p,{children:"Customize the chart scales for precise control over bar sizing and spacing:"}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<BarListChart
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
`,(0,e.jsx)(t.h3,{id:"automatic-layout-calculation",children:"Automatic Layout Calculation"}),`
`,(0,e.jsx)(t.p,{children:"The component automatically calculates optimal positioning based on:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Number of data series (single vs multi-series)"}),`
`,(0,e.jsx)(t.li,{children:"Chart dimensions"}),`
`,(0,e.jsx)(t.li,{children:"Content overflow considerations"}),`
`]}),`
`,(0,e.jsx)(t.p,{children:"For multi-series charts, the component automatically adjusts:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Bar thickness and spacing"}),`
`,(0,e.jsx)(t.li,{children:"Label positioning"}),`
`,(0,e.jsx)(t.li,{children:"Y-offset calculations for proper text alignment"}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"custom-positioning",children:"Custom Positioning"}),`
`,(0,e.jsx)(t.p,{children:"Override automatic positioning when needed:"}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<BarListChart
data={ data }
options={ {
	yOffset: -20,          // Vertical offset for text
	labelPosition: 10,     // Fixed label position
	valuePosition: 380,    // Fixed value position
} }
/>`}),`
`,(0,e.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,(0,e.jsx)(t.p,{children:"BarListChart inherits accessibility features from the underlying BarChart component, including keyboard navigation support when tooltips are enabled and proper ARIA attributes for screen readers."}),`
`,(0,e.jsx)(t.h2,{id:"migration-from-bar-chart",children:"Migration from Bar Chart"}),`
`,(0,e.jsx)(t.p,{children:"If you're currently using a horizontal BarChart for list-style data, BarListChart provides a more optimized experience:"}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`
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
`,(0,e.jsx)(t.p,{children:"Benefits of migration:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Automatic label and value positioning"}),`
`,(0,e.jsx)(t.li,{children:"Built-in formatting with sensible defaults"}),`
`,(0,e.jsx)(t.li,{children:"Simplified API for common use cases"}),`
`]})]})}function f(b={}){const{wrapper:t}={...(0,O.R)(),...b.components};return t?(0,e.jsx)(t,{...b,children:(0,e.jsx)(c,{...b})}):c(b)}}),"../charts/src/charts/bar-list-chart/stories/index.stories.tsx":((V,g,s)=>{"use strict";s.r(g),s.d(g,{Animation:()=>i,CustomLabelComponent:()=>x,CustomValueComponent:()=>m,Default:()=>l,MultiSeries:()=>r,__namedExportsOrder:()=>S,default:()=>n});var _=s("../number-formatters/src/index.ts"),e=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),O=s("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),o=s.n(O),d=["className","innerRef"];function c(){return c=Object.assign?Object.assign.bind():function(h){for(var u=1;u<arguments.length;u++){var p=arguments[u];for(var v in p)Object.prototype.hasOwnProperty.call(p,v)&&(h[v]=p[v])}return h},c.apply(this,arguments)}function f(h,u){if(h==null)return{};var p={},v=Object.keys(h),j,C;for(C=0;C<v.length;C++)j=v[C],!(u.indexOf(j)>=0)&&(p[j]=h[j]);return p}function b(h){var u=h.className,p=h.innerRef,v=f(h,d);return e.createElement("circle",c({ref:p,className:o()("visx-circle",u)},v))}var t=s("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),y=s("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),D=s("../charts/src/stories/chart-decorator.tsx"),M=s("../charts/src/stories/theme-config.tsx"),E=s("../charts/src/stories/sample-data/index.ts"),A=s("../charts/src/charts/bar-list-chart/bar-list-chart.tsx"),P=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n={title:"JS Packages/Charts Library/Charts/Bar List Chart",component:A.A,parameters:{layout:"centered"},decorators:[D.OI],argTypes:{...D.xo,...M.jW}},l={args:{...M.In,withTooltips:!0,data:E.V_,containerWidth:"600px",containerHeight:"332px"}},r={args:{...l.args,data:E._v}},i={args:{...l.args,animation:!0}},x={args:{...l.args,data:E.V_,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{xScale:{},yScale:{},labelComponent:({textProps:h,x:u,y:p,label:v,formatter:j})=>{const w=(0,y.p)().colors[1];return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(b,{cx:u+6,cy:p,r:8,fill:w}),(0,P.jsx)(t.A,{...h,textAnchor:"start",x:u+24,y:p,fontWeight:500,children:j(v)})]})}}}},m={args:{...l.args,data:E._v,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{xScale:{},yScale:{},valueComponent:({textProps:h,x:u,y:p,value:v,formatter:j,data:C,index:w})=>{const T=C[0].data[w].value,L=C[1].data[w].value,B=L===0?0:((T-L)/L*100).toFixed(0);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(t.A,{...h,textAnchor:"end",x:u,y:p,dx:-50,fontWeight:500,children:j(v)}),(0,P.jsx)(t.A,{...h,textAnchor:"end",x:u,y:p,dx:-10,fill:"#008A20",fontWeight:500,children:`${Number(B)>0?"+":""}${B}%`})]})},valueFormatter:h=>`$${(0,_.qe)(h)}`}}},S=["Default","MultiSeries","Animation","CustomLabelComponent","CustomValueComponent"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    withTooltips: true,
    data: salesByProduct,
    containerWidth: '600px',
    containerHeight: '332px'
  }
}`,...l.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByChannel
  }
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...i.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByProduct,
    width: 450,
    margin: {
      top: 0,
      right: 100,
      bottom: 0,
      left: 0
    },
    options: {
      xScale: {},
      yScale: {},
      labelComponent: ({
        textProps,
        x,
        y,
        label,
        formatter
      }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const theme = useGlobalChartsTheme();
        const circleColor = theme.colors[1]; // Use second theme color for contrast

        return <>
                        <Circle cx={x + 6} cy={y} r={8} fill={circleColor} />
                        <Text {...textProps} textAnchor="start" x={x + 24} y={y} fontWeight={500}>
                            {formatter(label)}
                        </Text>
                    </>;
      }
    }
  }
}`,...x.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByChannel,
    width: 450,
    margin: {
      top: 0,
      right: 100,
      bottom: 0,
      left: 0
    },
    options: {
      xScale: {},
      yScale: {},
      valueComponent: ({
        textProps,
        x,
        y,
        value,
        formatter,
        data,
        index
      }) => {
        const currentValue = data[0].data[index].value;
        const previousValue = data[1].data[index].value;
        const percentage = previousValue === 0 ? 0 : ((currentValue - previousValue) / previousValue * 100).toFixed(0);
        return <>
                        <Text {...textProps} textAnchor="end" x={x} y={y} dx={-50} fontWeight={500}>
                            {formatter(value)}
                        </Text>
                        <Text {...textProps} textAnchor="end" x={x} y={y} dx={-10} fill="#008A20" fontWeight={500}>
                            {\`\${Number(percentage) > 0 ? '+' : ''}\${percentage}%\`}
                        </Text>
                    </>;
      },
      valueFormatter: (value: number) => \`$\${formatNumberCompact(value)}\`
    }
  }
}`,...m.parameters?.docs?.source}}}})}]);
