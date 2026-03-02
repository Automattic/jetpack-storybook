"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2885],{"../charts/src/charts/bar-list-chart/stories/index.stories.tsx"(q,A,l){l.r(A),l.d(A,{Animation:()=>s,AspectRatio:()=>n,CustomLabelComponent:()=>f,CustomValueComponent:()=>P,Default:()=>r,FixedDimensions:()=>a,MultiSeries:()=>m,__namedExportsOrder:()=>b,default:()=>t});var _=l("../number-formatters/src/index.ts"),T=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),D=l("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),c=l.n(D),v=["className","innerRef"];function o(){return o=Object.assign?Object.assign.bind():function(i){for(var p=1;p<arguments.length;p++){var d=arguments[p];for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&(i[h]=d[h])}return i},o.apply(this,arguments)}function u(i,p){if(i==null)return{};var d={},h=Object.keys(i),x,g;for(g=0;g<h.length;g++)x=h[g],!(p.indexOf(x)>=0)&&(d[x]=i[x]);return d}function O(i){var p=i.className,d=i.innerRef,h=u(i,v);return T.createElement("circle",o({ref:d,className:c()("visx-circle",p)},h))}var j=l("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),y=l("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),w=l("../charts/src/stories/chart-decorator.tsx"),M=l("../charts/src/stories/theme-config.tsx"),E=l("../charts/src/stories/sample-data/index.ts"),S=l("../charts/src/charts/bar-list-chart/bar-list-chart.tsx"),C=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t={title:"JS Packages/Charts Library/Charts/Bar List Chart",component:S.A,parameters:{layout:"centered"},decorators:[w.OI],argTypes:{...w.xo,...M.jW}},r={args:{...M.In,withTooltips:!0,data:E.V_}},a={args:{...r.args,width:600,height:300}},n={args:{...r.args,aspectRatio:.3}},m={args:{...r.args,data:E._v}},s={args:{...r.args,animation:!0}},f={args:{...r.args,data:E.V_,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{xScale:{},yScale:{},labelComponent:({textProps:i,x:p,y:d,label:h,formatter:x})=>{const V=(0,y.p)().colors[1];return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(O,{cx:p+6,cy:d,r:8,fill:V}),(0,C.jsx)(j.A,{...i,textAnchor:"start",x:p+24,y:d,fontWeight:500,children:x(h)})]})}}}},P={args:{...r.args,data:E._v,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{xScale:{},yScale:{},valueComponent:({textProps:i,x:p,y:d,value:h,formatter:x,data:g,index:V})=>{const R=g[0].data[V].value,L=g[1].data[V].value,W=L===0?0:((R-L)/L*100).toFixed(0);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(j.A,{...i,textAnchor:"end",x:p,y:d,dx:-50,fontWeight:500,children:x(h)}),(0,C.jsx)(j.A,{...i,textAnchor:"end",x:p,y:d,dx:-10,fill:"#008A20",fontWeight:500,children:`${Number(W)>0?"+":""}${W}%`})]})},valueFormatter:i=>`$${(0,_.qe)(i)}`}}},b=["Default","FixedDimensions","AspectRatio","MultiSeries","Animation","CustomLabelComponent","CustomValueComponent"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    withTooltips: true,
    data: salesByProduct
  }
}`,...r.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 600,
    height: 300
  }
}`,...a.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.3
  }
}`,...n.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByChannel
  }
}`,...m.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...s.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}}},"../charts/src/charts/bar-list-chart/bar-list-chart.tsx"(q,A,l){l.d(A,{A:()=>r});var _=l("../number-formatters/src/index.ts"),T=l("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),D=l("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/band.js"),c=l("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),v=l("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),o=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=l("../charts/src/providers/chart-context/global-charts-provider.tsx"),O=l("../charts/src/charts/bar-chart/bar-chart.tsx"),j=l("../charts/src/charts/private/with-responsive/with-responsive.tsx"),y=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const w=a=>{const n=a;return n&&"bandwidth"in n?n?.bandwidth()??0:0},M=({textProps:a,x:n,y:m,label:s,formatter:f})=>(0,y.jsx)(v.A,{...a,textAnchor:"start",x:n,y:m,children:f(s)}),E=({textProps:a,x:n,y:m,value:s,formatter:f})=>(0,y.jsx)(v.A,{...a,textAnchor:"end",x:n,y:m,fontWeight:500,children:f(s)}),S=({ticks:a,tickLabelProps:n,yOffset:m,labelPosition:s,valuePosition:f,data:P,labelFormatter:b,valueFormatter:i,LabelComponent:p=M,ValueComponent:d=E})=>{if(a.length===0)return null;const h=a.map(({value:x,index:g})=>typeof n=="function"?n(x,g,a):{});return a.map(({from:x,formattedValue:g},V)=>{const R=h[V]??{};delete R.textAnchor,delete R.dx;const L=P.reduce((I,{data:B})=>I+(B[V]?.value??0),0),W=x.y+m;return(0,y.jsxs)(T.A,{children:[(0,y.jsx)(p,{textProps:R,x:s,y:W,label:g,formatter:b}),(0,y.jsx)(d,{textProps:R,x:f,y:W,value:L,formatter:i,data:P,index:V})]},V)})},C=(a,n,m,s)=>{if(!s)return 0;const f=a.map(({label:d})=>d),P=(0,c.A)({type:"band",range:[0,m],domain:f,...n}),b=(0,D.A)({domain:f,range:[0,w(P)],padding:n.paddingInner});return-(w(b)+6)},e=({data:a,width:n,height:m,options:s={},margin:f={left:0,right:20,bottom:0,top:0},...P})=>{const b=(0,o.useMemo)(()=>{const i=a.length>1,p={paddingInner:i?.3:.1,padding:i?.3:.1},d={zero:!0},h={...p,...s.yScale??{}},x={...d,...s.xScale??{}};return{yScale:h,xScale:x,labelPosition:s.labelPosition??(i?0:10),valueFormatter:s.valueFormatter??(g=>(0,_.qe)(g)),labelFormatter:s.labelFormatter??(g=>String(g)),valuePosition:s.valuePosition??n,yOffset:s.yOffset??C(a,h,m,i)}},[s,n,a,m]);return(0,y.jsx)(O.f,{orientation:"horizontal",gridVisibility:"none",data:a,width:n,height:m,margin:f,options:{axis:{y:{children:i=>(0,y.jsx)(S,{...i,data:a,yOffset:b.yOffset,labelPosition:b.labelPosition,valuePosition:b.valuePosition,labelFormatter:b.labelFormatter,valueFormatter:b.valueFormatter,LabelComponent:s.labelComponent,ValueComponent:s.valueComponent})},x:{children:()=>null}},xScale:b.xScale,yScale:b.yScale},...P})},t=a=>(0,o.useContext)(u.m)?(0,y.jsx)(e,{...a}):(0,y.jsx)(u.S,{children:(0,y.jsx)(e,{...a})});t.displayName="BarListChart";const r=(0,j.F)(t);try{ResponsiveChart.displayName="ResponsiveChart",ResponsiveChart.__docgenInfo={description:"",displayName:"ResponsiveChart",props:{className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:'{ yScale: Omit<ScaleOptions, "type">; xScale: Omit<ScaleOptions, "type">; labelFormatter?: (value: string) => string; valueFormatter?: (value: number) => string; ... 4 more ...; valueComponent?: ComponentType<...>; }'}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},legendItemClassName:{defaultValue:null,description:`Additional CSS class name for legend items.
This allows consumers to customize individual legend item styling.`,name:"legendItemClassName",required:!1,type:{name:"string"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},animation:{defaultValue:null,description:"Whether to show chart animation on initial render or not",name:"animation",required:!1,type:{name:"boolean"}},withTooltips:{defaultValue:null,description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:null,description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendPosition:{defaultValue:null,description:`Legend position (where the legend appears)
TODO: Add 'left' | 'right' positioning support in future implementation`,name:"legendPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},legendAlignment:{defaultValue:null,description:"Legend alignment within its position",name:"legendAlignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},legendMaxWidth:{defaultValue:null,description:`Maximum width for legend items. When set, text overflow behavior is controlled by legendTextOverflow.
Should be a CSS value string (e.g. '200px', '50%', '10rem')`,name:"legendMaxWidth",required:!1,type:{name:"string"}},legendTextOverflow:{defaultValue:null,description:`Controls how text behaves when it exceeds legendMaxWidth.
- 'ellipsis': Truncate with ellipsis (ideal for widgets/small devices)
- 'wrap': Wrap text to multiple lines (default, ideal for larger displays)`,name:"legendTextOverflow",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"ellipsis"'}]}},legendInteractive:{defaultValue:null,description:`Enable interactive legend items that can toggle series visibility.
Supported for LineChart, PieChart, and PieSemiCircleChart.
Requires chartId and GlobalChartsProvider.
For pie charts, percentages are recalculated so visible segments total 100%.`,name:"legendInteractive",required:!1,type:{name:"boolean"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},gap:{defaultValue:{value:"'md'"},description:`Gap between chart elements (SVG, legend, children).
Uses WordPress design system tokens.`,name:"gap",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'}]}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withPatterns:{defaultValue:null,description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},showZeroValues:{defaultValue:null,description:"",name:"showZeroValues",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},maxWidth:{defaultValue:{value:"1200"},description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:`The aspect ratio of the chart (height = width * aspectRatio).
When provided, height is calculated from width.
When omitted, the chart fills the parent container's height.`,name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:{value:"300"},description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/bar-list-chart/bar-list-chart.tsx#ResponsiveChart"]={docgenInfo:ResponsiveChart.__docgenInfo,name:"ResponsiveChart",path:"../charts/src/charts/bar-list-chart/bar-list-chart.tsx#ResponsiveChart"})}catch{}try{t.displayName="BarListChart",t.__docgenInfo={description:"",displayName:"BarListChart",props:{options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:'{ yScale: Omit<ScaleOptions, "type">; xScale: Omit<ScaleOptions, "type">; labelFormatter?: (value: string) => string; valueFormatter?: (value: number) => string; ... 4 more ...; valueComponent?: ComponentType<...>; }'}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},withPatterns:{defaultValue:null,description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},showZeroValues:{defaultValue:null,description:"",name:"showZeroValues",required:!1,type:{name:"boolean"}},legendInteractive:{defaultValue:null,description:`Enable interactive legend items that can toggle series visibility.
Supported for LineChart, PieChart, and PieSemiCircleChart.
Requires chartId and GlobalChartsProvider.
For pie charts, percentages are recalculated so visible segments total 100%.`,name:"legendInteractive",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Width of the chart container in pixels. When omitted, the chart fills its parent's width.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart container in pixels. When omitted, the chart fills its parent's height.",name:"height",required:!1,type:{name:"number"}},size:{defaultValue:null,description:`Maximum diameter of the pie in pixels (pie and donut charts only).
The pie will shrink if the container is smaller than this value.
When omitted, the pie fills the available space.`,name:"size",required:!1,type:{name:"number"}},margin:{defaultValue:{value:`{
		left: 0,
		right: 20,
		bottom: 0,
		top: 0,
	}`},description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:null,description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:null,description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendPosition:{defaultValue:null,description:`Legend position (where the legend appears)
TODO: Add 'left' | 'right' positioning support in future implementation`,name:"legendPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},legendAlignment:{defaultValue:null,description:"Legend alignment within its position",name:"legendAlignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},legendMaxWidth:{defaultValue:null,description:`Maximum width for legend items. When set, text overflow behavior is controlled by legendTextOverflow.
Should be a CSS value string (e.g. '200px', '50%', '10rem')`,name:"legendMaxWidth",required:!1,type:{name:"string"}},legendTextOverflow:{defaultValue:null,description:`Controls how text behaves when it exceeds legendMaxWidth.
- 'ellipsis': Truncate with ellipsis (ideal for widgets/small devices)
- 'wrap': Wrap text to multiple lines (default, ideal for larger displays)`,name:"legendTextOverflow",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"ellipsis"'}]}},legendItemClassName:{defaultValue:null,description:`Additional CSS class name for legend items.
This allows consumers to customize individual legend item styling.`,name:"legendItemClassName",required:!1,type:{name:"string"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},animation:{defaultValue:null,description:"Whether to show chart animation on initial render or not",name:"animation",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"'md'"},description:`Gap between chart elements (SVG, legend, children).
Uses WordPress design system tokens.`,name:"gap",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/bar-list-chart/bar-list-chart.tsx#BarListChart"]={docgenInfo:t.__docgenInfo,name:"BarListChart",path:"../charts/src/charts/bar-list-chart/bar-list-chart.tsx#BarListChart"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(q,A,l){l.d(A,{A:()=>D});function _(c){var v,o,u="";if(typeof c=="string"||typeof c=="number")u+=c;else if(typeof c=="object")if(Array.isArray(c)){var O=c.length;for(v=0;v<O;v++)c[v]&&(o=_(c[v]))&&(u&&(u+=" "),u+=o)}else for(o in c)c[o]&&(u&&(u+=" "),u+=o);return u}function T(){for(var c,v,o=0,u="",O=arguments.length;o<O;o++)(c=arguments[o])&&(v=_(c))&&(u&&(u+=" "),u+=v);return u}const D=T},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(q){var A=function(t){return l(t)&&!_(t)};function l(e){return!!e&&typeof e=="object"}function _(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||c(e)}var T=typeof Symbol=="function"&&Symbol.for,D=T?Symbol.for("react.element"):60103;function c(e){return e.$$typeof===D}function v(e){return Array.isArray(e)?[]:{}}function o(e,t){return t.clone!==!1&&t.isMergeableObject(e)?S(v(e),e,t):e}function u(e,t,r){return e.concat(t).map(function(a){return o(a,r)})}function O(e,t){if(!t.customMerge)return S;var r=t.customMerge(e);return typeof r=="function"?r:S}function j(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function y(e){return Object.keys(e).concat(j(e))}function w(e,t){try{return t in e}catch{return!1}}function M(e,t){return w(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function E(e,t,r){var a={};return r.isMergeableObject(e)&&y(e).forEach(function(n){a[n]=o(e[n],r)}),y(t).forEach(function(n){M(e,n)||(w(e,n)&&r.isMergeableObject(t[n])?a[n]=O(n,r)(e[n],t[n],r):a[n]=o(t[n],r))}),a}function S(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||u,r.isMergeableObject=r.isMergeableObject||A,r.cloneUnlessOtherwiseSpecified=o;var a=Array.isArray(t),n=Array.isArray(e),m=a===n;return m?a?r.arrayMerge(e,t,r):E(e,t,r):o(t,r)}S.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(a,n){return S(a,n,r)},{})};var C=S;q.exports=C}}]);
