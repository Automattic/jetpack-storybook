(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4304,5718],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":((V,p,n)=>{"use strict";n.d(p,{R:()=>u,x:()=>h});var x=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},v=x.createContext(e);function u(d){const s=x.useContext(v);return x.useMemo(function(){return typeof d=="function"?d(s):{...s,...d}},[s,d])}function h(d){let s;return d.disableParentContext?s=typeof d.components=="function"?d.components(e):d.components||e:s=u(d.components),x.createElement(v.Provider,{value:s},d.children)}}),"../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.26_storybook@9.0.15_@testing-library+dom@10.4.1_/node_modules/@storybook/addon-docs/dist sync recursive":(V=>{function p(n){var x=new Error("Cannot find module '"+n+"'");throw x.code="MODULE_NOT_FOUND",x}p.keys=()=>[],p.resolve=p,p.id="../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.26_storybook@9.0.15_@testing-library+dom@10.4.1_/node_modules/@storybook/addon-docs/dist sync recursive",V.exports=p}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((V,p,n)=>{"use strict";n.d(p,{A:()=>v});function x(u){var h,d,s="";if(typeof u=="string"||typeof u=="number")s+=u;else if(typeof u=="object")if(Array.isArray(u)){var o=u.length;for(h=0;h<o;h++)u[h]&&(d=x(u[h]))&&(s&&(s+=" "),s+=d)}else for(d in u)u[d]&&(s&&(s+=" "),s+=d);return s}function e(){for(var u,h,d=0,s="",o=arguments.length;d<o;d++)(u=arguments[d])&&(h=x(u))&&(s&&(s+=" "),s+=h);return s}const v=e}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(V=>{"use strict";var p=function(a){return n(a)&&!x(a)};function n(r){return!!r&&typeof r=="object"}function x(r){var a=Object.prototype.toString.call(r);return a==="[object RegExp]"||a==="[object Date]"||u(r)}var e=typeof Symbol=="function"&&Symbol.for,v=e?Symbol.for("react.element"):60103;function u(r){return r.$$typeof===v}function h(r){return Array.isArray(r)?[]:{}}function d(r,a){return a.clone!==!1&&a.isMergeableObject(r)?O(h(r),r,a):r}function s(r,a,i){return r.concat(a).map(function(l){return d(l,i)})}function o(r,a){if(!a.customMerge)return O;var i=a.customMerge(r);return typeof i=="function"?i:O}function t(r){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(r).filter(function(a){return Object.propertyIsEnumerable.call(r,a)}):[]}function f(r){return Object.keys(r).concat(t(r))}function y(r,a){try{return a in r}catch{return!1}}function m(r,a){return y(r,a)&&!(Object.hasOwnProperty.call(r,a)&&Object.propertyIsEnumerable.call(r,a))}function g(r,a,i){var l={};return i.isMergeableObject(r)&&f(r).forEach(function(c){l[c]=d(r[c],i)}),f(a).forEach(function(c){m(r,c)||(y(r,c)&&i.isMergeableObject(a[c])?l[c]=o(c,i)(r[c],a[c],i):l[c]=d(a[c],i))}),l}function O(r,a,i){i=i||{},i.arrayMerge=i.arrayMerge||s,i.isMergeableObject=i.isMergeableObject||p,i.cloneUnlessOtherwiseSpecified=d;var l=Array.isArray(a),c=Array.isArray(r),T=l===c;return T?l?i.arrayMerge(r,a,i):g(r,a,i):d(a,i)}O.all=function(a,i){if(!Array.isArray(a))throw new Error("first argument should be an array");return a.reduce(function(l,c){return O(l,c,i)},{})};var S=O;V.exports=S}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.1/node_modules/storybook/dist/components sync recursive":(V=>{function p(n){var x=new Error("Cannot find module '"+n+"'");throw x.code="MODULE_NOT_FOUND",x}p.keys=()=>[],p.resolve=p,p.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.1/node_modules/storybook/dist/components sync recursive",V.exports=p}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.1/node_modules/storybook/dist/theming sync recursive":(V=>{function p(n){var x=new Error("Cannot find module '"+n+"'");throw x.code="MODULE_NOT_FOUND",x}p.keys=()=>[],p.resolve=p,p.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.1/node_modules/storybook/dist/theming sync recursive",V.exports=p}),"../charts/src/components/bar-list-chart/bar-list-chart.tsx":((V,p,n)=>{"use strict";n.d(p,{A:()=>i});var x=n("../number-formatters/src/index.ts"),e=n("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),v=n("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/band.js"),u=n("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),h=n("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),d=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=n("../charts/src/providers/chart-context/global-charts-provider.tsx"),o=n("../charts/src/components/bar-chart/bar-chart.tsx"),t=n("../charts/src/components/private/with-responsive/with-responsive.tsx"),f=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=l=>{const c=l;return c&&"bandwidth"in c?c?.bandwidth()??0:0},m=({textProps:l,x:c,y:T,label:_,formatter:E})=>(0,f.jsx)(h.A,{...l,textAnchor:"start",x:c,y:T,children:E(_)}),g=({textProps:l,x:c,y:T,value:_,formatter:E})=>(0,f.jsx)(h.A,{...l,textAnchor:"end",x:c,y:T,fontWeight:500,children:E(_)}),O=({ticks:l,tickLabelProps:c,yOffset:T,labelPosition:_,valuePosition:E,data:C,labelFormatter:b,valueFormatter:j,LabelComponent:P=m,ValueComponent:D=g})=>{if(l.length===0)return null;const w=l.map(({value:A,index:M})=>typeof c=="function"?c(A,M,l):{});return l.map(({from:A,formattedValue:M},L)=>{const R=w[L]??{};delete R.textAnchor,delete R.dx;const W=C.reduce((q,{data:I})=>q+(I[L]?.value??0),0),B=A.y+T;return(0,f.jsxs)(e.A,{children:[(0,f.jsx)(P,{textProps:R,x:_,y:B,label:M,formatter:b}),(0,f.jsx)(D,{textProps:R,x:E,y:B,value:W,formatter:j,data:C,index:L})]},L)})},S=(l,c,T,_)=>{if(!_)return 0;const E=l.map(({label:D})=>D),C=(0,u.A)({type:"band",range:[0,T],domain:E,...c}),b=(0,v.A)({domain:E,range:[0,y(C)],padding:c.paddingInner});return-(y(b)+6)},r=({data:l,width:c,height:T,options:_={},margin:E={left:0,right:20,bottom:0,top:0},...C})=>{const b=(0,d.useMemo)(()=>{const j=l.length>1,P={paddingInner:j?.3:.1,padding:j?.3:.1},D={zero:!0},w={...P,..._.yScale??{}},A={...D,..._.xScale??{}};return{yScale:w,xScale:A,labelPosition:_.labelPosition??(j?0:10),valueFormatter:_.valueFormatter??(M=>(0,x.qe)(M)),labelFormatter:_.labelFormatter??(M=>String(M)),valuePosition:_.valuePosition??c,yOffset:_.yOffset??S(l,w,T,j)}},[_,c,l,T]);return(0,f.jsx)(o.A,{orientation:"horizontal",gridVisibility:"none",data:l,width:c,height:T,margin:E,options:{axis:{y:{children:j=>(0,f.jsx)(O,{...j,data:l,yOffset:b.yOffset,labelPosition:b.labelPosition,valuePosition:b.valuePosition,labelFormatter:b.labelFormatter,valueFormatter:b.valueFormatter,LabelComponent:_.labelComponent,ValueComponent:_.valueComponent})},x:{children:()=>null}},xScale:b.xScale,yScale:b.yScale},...C})},a=l=>(0,d.useContext)(s.m)?(0,f.jsx)(r,{...l}):(0,f.jsx)(s.S,{children:(0,f.jsx)(r,{...l})});a.displayName="BarListChart";const i=(0,t.F)(a);try{ResponsiveChart.displayName="ResponsiveChart",ResponsiveChart.__docgenInfo={description:"",displayName:"ResponsiveChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:'{ yScale: Omit<ScaleOptions, "type">; xScale: Omit<ScaleOptions, "type">; labelFormatter?: (value: string) => string; valueFormatter?: (value: number) => string; ... 4 more ...; valueComponent?: ComponentType<...>; }'}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendInteractive:{defaultValue:null,description:`Enable interactive legend items that can toggle series visibility.
Supported for LineChart, PieChart, and PieSemiCircleChart.
Requires chartId and GlobalChartsProvider.
For pie charts, percentages are recalculated so visible segments total 100%.`,name:"legendInteractive",required:!1,type:{name:"boolean"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:null,description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:null,description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendPosition:{defaultValue:null,description:`Legend position (where the legend appears)
TODO: Add 'left' | 'right' positioning support in future implementation`,name:"legendPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},legendAlignment:{defaultValue:null,description:"Legend alignment within its position",name:"legendAlignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},legendMaxWidth:{defaultValue:null,description:`Maximum width for legend items. When set, text overflow behavior is controlled by legendTextOverflow.
Should be a CSS value string (e.g. '200px', '50%', '10rem')`,name:"legendMaxWidth",required:!1,type:{name:"string"}},legendTextOverflow:{defaultValue:null,description:`Controls how text behaves when it exceeds legendMaxWidth.
- 'ellipsis': Truncate with ellipsis (ideal for widgets/small devices)
- 'wrap': Wrap text to multiple lines (default, ideal for larger displays)`,name:"legendTextOverflow",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"ellipsis"'}]}},legendItemClassName:{defaultValue:null,description:`Additional CSS class name for legend items.
This allows consumers to customize individual legend item styling.`,name:"legendItemClassName",required:!1,type:{name:"string"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},animation:{defaultValue:null,description:"Whether to show chart animation on initial render or not",name:"animation",required:!1,type:{name:"boolean"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withPatterns:{defaultValue:null,description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},showZeroValues:{defaultValue:null,description:"",name:"showZeroValues",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:{value:"1200"},description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:{value:"0.5"},description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:{value:"300"},description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/bar-list-chart/bar-list-chart.tsx#ResponsiveChart"]={docgenInfo:ResponsiveChart.__docgenInfo,name:"ResponsiveChart",path:"../charts/src/components/bar-list-chart/bar-list-chart.tsx#ResponsiveChart"})}catch{}try{a.displayName="BarListChart",a.__docgenInfo={description:"",displayName:"BarListChart",props:{options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:'{ yScale: Omit<ScaleOptions, "type">; xScale: Omit<ScaleOptions, "type">; labelFormatter?: (value: string) => string; valueFormatter?: (value: number) => string; ... 4 more ...; valueComponent?: ComponentType<...>; }'}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},withPatterns:{defaultValue:null,description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},showZeroValues:{defaultValue:null,description:"",name:"showZeroValues",required:!1,type:{name:"boolean"}},legendInteractive:{defaultValue:null,description:`Enable interactive legend items that can toggle series visibility.
Supported for LineChart, PieChart, and PieSemiCircleChart.
Requires chartId and GlobalChartsProvider.
For pie charts, percentages are recalculated so visible segments total 100%.`,name:"legendInteractive",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},margin:{defaultValue:{value:`{
		left: 0,
		right: 20,
		bottom: 0,
		top: 0,
	}`},description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:null,description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:null,description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendPosition:{defaultValue:null,description:`Legend position (where the legend appears)
TODO: Add 'left' | 'right' positioning support in future implementation`,name:"legendPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},legendAlignment:{defaultValue:null,description:"Legend alignment within its position",name:"legendAlignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},legendMaxWidth:{defaultValue:null,description:`Maximum width for legend items. When set, text overflow behavior is controlled by legendTextOverflow.
Should be a CSS value string (e.g. '200px', '50%', '10rem')`,name:"legendMaxWidth",required:!1,type:{name:"string"}},legendTextOverflow:{defaultValue:null,description:`Controls how text behaves when it exceeds legendMaxWidth.
- 'ellipsis': Truncate with ellipsis (ideal for widgets/small devices)
- 'wrap': Wrap text to multiple lines (default, ideal for larger displays)`,name:"legendTextOverflow",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"ellipsis"'}]}},legendItemClassName:{defaultValue:null,description:`Additional CSS class name for legend items.
This allows consumers to customize individual legend item styling.`,name:"legendItemClassName",required:!1,type:{name:"string"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},animation:{defaultValue:null,description:"Whether to show chart animation on initial render or not",name:"animation",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/bar-list-chart/bar-list-chart.tsx#BarListChart"]={docgenInfo:a.__docgenInfo,name:"BarListChart",path:"../charts/src/components/bar-list-chart/bar-list-chart.tsx#BarListChart"})}catch{}}),"../charts/src/components/bar-list-chart/stories/index.docs.mdx":((V,p,n)=>{"use strict";n.r(p),n.d(p,{default:()=>s});var x=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),v=n("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),u=n("../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.26_storybook@9.0.15_@testing-library+dom@10.4.1_/node_modules/@storybook/addon-docs/dist/blocks.mjs"),h=n("../charts/src/components/bar-list-chart/stories/index.stories.tsx");function d(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,v.R)(),...o.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(u.W8,{title:"JS Packages/Charts/Types/Bar List Chart",of:h}),`
`,(0,e.jsx)(t.h1,{id:"bar-list-chart",children:"Bar List Chart"}),`
`,(0,e.jsx)(t.p,{children:"A specialized horizontal bar chart component that displays data as a ranked list with labels and values positioned alongside the bars. Ideal for showing comparisons between categories or time periods."}),`
`,(0,e.jsx)(u.Hl,{of:h.Default}),`
`,(0,e.jsx)(t.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsx)(t.p,{children:"The BarListChart component extends the BarChart component to create a list-style visualization that combines horizontal bars with text labels and values. It automatically handles positioning of labels on the left and values on the right, making it perfect for dashboards and reports that need to display ranked data clearly."}),`
`,(0,e.jsx)(u.kL,{language:"jsx",code:`import { BarListChart } from '@automattic/charts';

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
`,(0,e.jsxs)(t.p,{children:["For detailed information about component props, types, and method signatures, see the ",(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-types-bar-list-chart-api-reference--docs",children:"Bar List Chart API Reference"}),"."]}),`
`,(0,e.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(t.h3,{id:"single-series-data",children:"Single Series Data"}),`
`,(0,e.jsx)(t.p,{children:"The simplest implementation displays a single series of data with automatic formatting:"}),`
`,(0,e.jsx)(u.Hl,{of:h.Default}),`
`,(0,e.jsx)(u.kL,{language:"jsx",code:`const singleSeriesData = [
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
`,(0,e.jsx)(u.Hl,{of:h.MultiSeries}),`
`,(0,e.jsx)(u.kL,{language:"jsx",code:`const multiSeriesData = [
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
`,(0,e.jsxs)(t.p,{children:["For detailed prop information and configuration options, see the ",(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-types-bar-list-chart-api-reference--docs",children:"Bar List Chart API Reference"}),"."]}),`
`,(0,e.jsx)(t.h2,{id:"chart-types",children:"Chart Types"}),`
`,(0,e.jsx)(t.h3,{id:"single-series-default",children:"Single Series (Default)"}),`
`,(0,e.jsx)(t.p,{children:"Best for displaying a simple ranked list of items:"}),`
`,(0,e.jsx)(u.Hl,{of:h.Default}),`
`,(0,e.jsx)(t.p,{children:"Characteristics:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Compact layout with minimal padding"}),`
`,(0,e.jsx)(t.li,{children:"Labels positioned closer to bars"}),`
`,(0,e.jsx)(t.li,{children:"Values displayed with compact number formatting"}),`
`,(0,e.jsx)(t.li,{children:"Ideal for product rankings, performance metrics"}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"multi-series-comparison",children:"Multi-Series Comparison"}),`
`,(0,e.jsx)(t.p,{children:"Perfect for comparing data across time periods or categories:"}),`
`,(0,e.jsx)(u.Hl,{of:h.MultiSeries}),`
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
`,(0,e.jsx)(u.Hl,{of:h.CustomLabelComponent}),`
`,(0,e.jsx)(u.kL,{language:"jsx",code:`import { Circle } from '@visx/shape';
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
`,(0,e.jsx)(u.Hl,{of:h.CustomValueComponent}),`
`,(0,e.jsx)(u.kL,{language:"jsx",code:`<BarListChart
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
`,(0,e.jsx)(t.h3,{id:"theme-integration",children:"Theme Integration"}),`
`,(0,e.jsx)(t.p,{children:"BarListChart inherits styling from the chart theme system and automatically applies appropriate colors based on series groups. Multi-series charts use distinct colors for each series, while single-series charts use the primary theme color."}),`
`,(0,e.jsx)(t.h2,{id:"advanced-features",children:"Advanced Features"}),`
`,(0,e.jsx)(t.h3,{id:"scale-configuration",children:"Scale Configuration"}),`
`,(0,e.jsx)(t.p,{children:"Customize the chart scales for precise control over bar sizing and spacing:"}),`
`,(0,e.jsx)(u.kL,{language:"jsx",code:`<BarListChart
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
`,(0,e.jsx)(u.kL,{language:"jsx",code:`<BarListChart
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
`,(0,e.jsx)(u.kL,{language:"jsx",code:`
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
`]})]})}function s(o={}){const{wrapper:t}={...(0,v.R)(),...o.components};return t?(0,e.jsx)(t,{...o,children:(0,e.jsx)(d,{...o})}):d(o)}}),"../charts/src/components/bar-list-chart/stories/index.stories.tsx":((V,p,n)=>{"use strict";n.r(p),n.d(p,{Animation:()=>c,CustomLabelComponent:()=>T,CustomValueComponent:()=>_,Default:()=>i,MultiSeries:()=>l,__namedExportsOrder:()=>E,default:()=>a});var x=n("../number-formatters/src/index.ts"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),v=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=n.n(v),h=["className","innerRef"];function d(){return d=Object.assign?Object.assign.bind():function(C){for(var b=1;b<arguments.length;b++){var j=arguments[b];for(var P in j)Object.prototype.hasOwnProperty.call(j,P)&&(C[P]=j[P])}return C},d.apply(this,arguments)}function s(C,b){if(C==null)return{};var j={},P=Object.keys(C),D,w;for(w=0;w<P.length;w++)D=P[w],!(b.indexOf(D)>=0)&&(j[D]=C[D]);return j}function o(C){var b=C.className,j=C.innerRef,P=s(C,h);return e.createElement("circle",d({ref:j,className:u()("visx-circle",b)},P))}var t=n("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),f=n("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),y=n("../charts/src/stories/chart-decorator.tsx"),m=n("../charts/src/stories/theme-config.tsx"),g=n("../charts/src/stories/sample-data/index.ts"),O=n("../charts/src/components/bar-list-chart/bar-list-chart.tsx"),S=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a={title:"JS Packages/Charts/Types/Bar List Chart",component:O.A,parameters:{layout:"centered"},decorators:[y.OI],argTypes:{...y.xo,...m.jW}},i={args:{withTooltips:!0,data:g.V_,containerWidth:"600px",containerHeight:"332px"}},l={args:{...i.args,data:g._v}},c={args:{...i.args,animation:!0}},T={args:{...i.args,data:g.V_,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{xScale:{},yScale:{},labelComponent:({textProps:C,x:b,y:j,label:P,formatter:D})=>{const A=(0,f.p)().colors[1];return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(o,{cx:b+6,cy:j,r:8,fill:A}),(0,S.jsx)(t.A,{...C,textAnchor:"start",x:b+24,y:j,fontWeight:500,children:D(P)})]})}}}},_={args:{...i.args,data:g._v,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{xScale:{},yScale:{},valueComponent:({textProps:C,x:b,y:j,value:P,formatter:D,data:w,index:A})=>{const M=w[0].data[A].value,L=w[1].data[A].value,R=L===0?0:((M-L)/L*100).toFixed(0);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(t.A,{...C,textAnchor:"end",x:b,y:j,dx:-50,fontWeight:500,children:D(P)}),(0,S.jsx)(t.A,{...C,textAnchor:"end",x:b,y:j,dx:-10,fill:"#008A20",fontWeight:500,children:`${Number(R)>0?"+":""}${R}%`})]})},valueFormatter:C=>`$${(0,x.qe)(C)}`}}},E=["Default","MultiSeries","Animation","CustomLabelComponent","CustomValueComponent"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: salesByProduct,
    containerWidth: '600px',
    containerHeight: '332px'
  }
}`,...i.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByChannel
  }
}`,...l.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...c.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}}}),"../charts/src/components/tooltip/accessible-tooltip.tsx":((V,p,n)=>{"use strict";n.d(p,{JZ:()=>d,OZ:()=>h});var x=n("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),e=n("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/context/TooltipContext.js"),v=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=({renderTooltip:s,selectedIndex:o,tooltipRef:t,keyboardFocusedClassName:f,series:y=[],mode:m="group",...g})=>{const O=(0,v.useContext)(e.A),S=(0,v.useMemo)(()=>{if(m!=="individual")return[];if(y.length===0)return[];const a=Math.max(...y.map(l=>l.data.length)),i=[];for(let l=0;l<a;l++)for(let c=0;c<y.length;c++){const T=y[c];l<T.data.length&&i.push({datum:T.data[l],seriesLabel:T.label,seriesIndex:c,dataPointIndex:l})}return i},[y,m]);(0,v.useEffect)(()=>{if(o===void 0){O?.hideTooltip();return}if(m==="group")y.forEach((a,i)=>{if(o<a.data.length){const l=a.data[o];O?.showTooltip({datum:l,key:a.label,index:i})}});else if(m==="individual"&&o<S.length){const a=S[o];O?.showTooltip({datum:a.datum,key:a.seriesLabel,index:a.seriesIndex})}},[o,S,y]);const r=(0,v.useMemo)(()=>{if(s)return a=>{const i=s(a);return o!==void 0?(0,u.jsx)("div",{ref:t,tabIndex:-1,role:"tooltip","aria-atomic":"true",className:f,"data-testid":`chart-tooltip-${o}`,children:i},`chart-tooltip-${o}`):(0,u.jsx)("div",{role:"tooltip","aria-live":"polite",children:i})}},[s,o,t,f]);return(0,u.jsx)(x.A,{...g,renderTooltip:r})},d=({selectedIndex:s,setSelectedIndex:o,isNavigating:t,setIsNavigating:f,chartRef:y,totalPoints:m})=>{const g=(0,v.useCallback)(a=>{a&&s!==void 0&&a.focus()},[s]),O=(0,v.useCallback)(()=>{!t&&s!==void 0&&o(0)},[t,s,o]),S=(0,v.useCallback)(()=>{f(!1)},[f]),r=(0,v.useCallback)(a=>{if(m===0)return;if(a.key==="Tab"){y.current?.focus(),o(void 0),f(!1);return}const i=s===void 0?-1:s;if(i+1>=m&&["ArrowRight"].includes(a.key)){y.current?.focus(),o(void 0),f(!1);return}a.preventDefault(),["ArrowRight"].includes(a.key)?(f(!0),o((i+1)%m)):["ArrowLeft"].includes(a.key)?(f(!0),o((i-1+m)%m)):a.key==="Escape"&&(o(void 0),f(!1),y.current?.focus())},[m,s,o,f,y]);return{tooltipRef:g,onChartFocus:O,onChartBlur:S,onChartKeyDown:r}};try{h.displayName="AccessibleTooltip",h.__docgenInfo={description:"",displayName:"AccessibleTooltip",props:{renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!1,type:{name:"number"}},tooltipRef:{defaultValue:null,description:"",name:"tooltipRef",required:!1,type:{name:"(element: HTMLDivElement) => void"}},keyboardFocusedClassName:{defaultValue:null,description:"",name:"keyboardFocusedClassName",required:!1,type:{name:"string"}},tooltipData:{defaultValue:null,description:`Flattened tooltip data prepared by parent component
Each index corresponds to one tooltip to show`,name:"tooltipData",required:!1,type:{name:"FlattenedTooltipData[]"}},series:{defaultValue:{value:"[]"},description:`For line charts: series data to show all series at selected data point
When provided, shows all series instead of individual tooltips`,name:"series",required:!1,type:{name:"SeriesData[]"}},mode:{defaultValue:{value:"group"},description:`Whether to combine tooltip information from multiple series into a single tooltip. This is useful for line charts.
Or to show individual tooltips for each series. This is useful for bar charts.`,name:"mode",required:!1,type:{name:"enum",value:[{value:'"group"'},{value:'"individual"'}]}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<DataPointDate>) => React.ReactNode"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"]={docgenInfo:h.__docgenInfo,name:"AccessibleTooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"})}catch{}try{d.displayName="useKeyboardNavigation",d.__docgenInfo={description:"",displayName:"useKeyboardNavigation",props:{selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!0,type:{name:"number"}},setSelectedIndex:{defaultValue:null,description:"",name:"setSelectedIndex",required:!0,type:{name:"(index: number) => void"}},isNavigating:{defaultValue:null,description:"",name:"isNavigating",required:!0,type:{name:"boolean"}},setIsNavigating:{defaultValue:null,description:"",name:"setIsNavigating",required:!0,type:{name:"(navigating: boolean) => void"}},chartRef:{defaultValue:null,description:"",name:"chartRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}},totalPoints:{defaultValue:null,description:"Total number of navigation points (length of tooltip data array)",name:"totalPoints",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"]={docgenInfo:d.__docgenInfo,name:"useKeyboardNavigation",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"})}catch{}try{accessibletooltip.displayName="accessibletooltip",accessibletooltip.__docgenInfo={description:`This is a wrapper component which bails early if tooltip is not visible.
If scroll detection is enabled in UseTooltipPortalOptions, this avoids re-rendering
the component on every scroll. If many charts with Tooltips are rendered on a page,
this also avoids creating many resize observers / hitting browser limits.`,displayName:"accessibletooltip",props:{renderTooltip:{defaultValue:null,description:`When TooltipContext.tooltipOpen=true, this function is invoked and if the
return value is non-null, its content is rendered inside the tooltip container.
Content will be rendered in an HTML parent.`,name:"renderTooltip",required:!0,type:{name:"(params: RenderTooltipParams<Datum>) => React.ReactNode"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<Datum>) => React.ReactNode"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"]={docgenInfo:accessibletooltip.__docgenInfo,name:"accessibletooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"})}catch{}}),"../charts/src/hooks/use-chart-data-transform.ts":((V,p,n)=>{"use strict";n.d(p,{E:()=>s});var x=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=n("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js"),v=n("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js"),u=n("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse.js");const h=o=>/T.*[Z]$|T.*[+-]\d{2}:?\d{2}$/.test(o),d=o=>{const t=o.trim();if(h(t)){const y=(0,e.H)(t);return(0,v.f)(y)?y:new Date(NaN)}const f=["yyyy-MM-dd","yyyy-MM-dd HH:mm:ss","yyyy-MM-dd HH:mm","yyyy-MM-dd'T'HH:mm:ss","yyyy-MM-dd'T'HH:mm:ss.SSS","yyyy-MM-dd'T'HH:mm"];for(const y of f){const m=(0,u.qg)(t,y,new Date);if((0,v.f)(m))return m}return new Date(NaN)},s=o=>(0,x.useMemo)(()=>{const t=o?.[0]?.data?.[0];return t&&("date"in t||"dateString"in t)?o.map(y=>({...y,data:y.data.map(m=>{let g;return"date"in m&&m.date?g=m.date:"dateString"in m&&m.dateString&&(g=d(m.dateString)),{...m,date:g}}).sort((m,g)=>!m.date||!g.date?0:m.date.getTime()-g.date.getTime())})):o},[o])}),"../charts/src/hooks/use-chart-margin.tsx":((V,p,n)=>{"use strict";n.d(p,{a:()=>d});var x=n("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),e=n("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),v=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=n("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const h=(s,o,t)=>{const f=s.map(m=>o(m,0,[])),y=f.reduce((m,g)=>m.length>=g.length?m:g,f[0]);return(0,u.A)(y,t)},d=(s,o,t,f,y=!1)=>{const m=(0,v.useMemo)(()=>{const g=t.flatMap(a=>a.data);if(y)return g.map(a=>a.label||o.axis?.y?.tickFormat(a.date.getTime(),0,[]));const O=Math.min(...g.map(a=>a.value)),S=Math.max(...g.map(a=>a.value)),r=(0,x.A)({...o.yScale,domain:[O,S],range:[s,0]});return(0,e.A)(r,o.axis?.y?.numTicks)},[o,t,s,y]);return(0,v.useMemo)(()=>{const g={top:10,right:20,bottom:20,left:20},O=40,S=o.axis?.y?.orientation,r=S==="right"?f.axisStyles.y.right:f.axisStyles.y.left,i=(h(m,o.axis?.y?.tickFormat,r.axisLabel)??O)+(r?.tickLength??0);return S==="right"?g.right=i:g.left=i,o.axis?.x?.orientation==="top"&&(g.top=20,g.bottom=10),g},[o,f,m])}}),"../charts/src/hooks/use-xychart-theme.ts":((V,p,n)=>{"use strict";n.d(p,{O:()=>u});var x=n("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),v=n("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts");const u=h=>{const d=(0,v.p)();return(0,e.useMemo)(()=>{const s=(h??[]).map(o=>o.options?.stroke).filter(o=>!!o);return(0,x.A)({...d,colors:[...s,...d.colors??[]]})},[d,h])}})}]);
