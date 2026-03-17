"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2885],{"../charts/src/charts/bar-list-chart/stories/index.stories.tsx"(B,A,o){o.r(A),o.d(A,{Animation:()=>i,AspectRatio:()=>n,CustomLabelComponent:()=>f,CustomValueComponent:()=>P,Default:()=>r,FixedDimensions:()=>a,MultiSeries:()=>m,__namedExportsOrder:()=>b,default:()=>t});var V=o("../number-formatters/src/index.ts"),j=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),T=o("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),d=o.n(T),g=["className","innerRef"];function l(){return l=Object.assign?Object.assign.bind():function(s){for(var p=1;p<arguments.length;p++){var c=arguments[p];for(var h in c)Object.prototype.hasOwnProperty.call(c,h)&&(s[h]=c[h])}return s},l.apply(this,arguments)}function u(s,p){if(s==null)return{};var c={},h=Object.keys(s),x,v;for(v=0;v<h.length;v++)x=h[v],!(p.indexOf(x)>=0)&&(c[x]=s[x]);return c}function S(s){var p=s.className,c=s.innerRef,h=u(s,g);return j.createElement("circle",l({ref:c,className:d()("visx-circle",p)},h))}var M=o("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),y=o("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),E=o("../charts/src/stories/chart-decorator.tsx"),R=o("../charts/src/stories/theme-config.tsx"),D=o("../charts/src/stories/sample-data/index.ts"),O=o("../charts/src/charts/bar-list-chart/bar-list-chart.tsx"),C=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t={title:"JS Packages/Charts Library/Charts/Bar List Chart",component:O.A,parameters:{layout:"centered"},decorators:[E.OI],argTypes:{...E.xo,...R.jW}},r={args:{...R.In,withTooltips:!0,data:D.V_}},a={args:{...r.args,width:600,height:300}},n={args:{...r.args,aspectRatio:.3}},m={args:{...r.args,data:D._v}},i={args:{...r.args,animation:!0}},f={args:{...r.args,data:D.V_,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{xScale:{},yScale:{},labelComponent:({textProps:s,x:p,y:c,label:h,formatter:x})=>{const _=(0,y.p)().colors[1];return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(S,{cx:p+6,cy:c,r:8,fill:_}),(0,C.jsx)(M.A,{...s,textAnchor:"start",x:p+24,y:c,fontWeight:500,children:x(h)})]})}}}},P={args:{...r.args,data:D._v,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{xScale:{},yScale:{},valueComponent:({textProps:s,x:p,y:c,value:h,formatter:x,data:v,index:_})=>{const w=v[0].data[_].value,L=v[1].data[_].value,W=L===0?0:((w-L)/L*100).toFixed(0);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(M.A,{...s,textAnchor:"end",x:p,y:c,dx:-50,fontWeight:500,children:x(h)}),(0,C.jsx)(M.A,{...s,textAnchor:"end",x:p,y:c,dx:-10,fill:"#008A20",fontWeight:500,children:`${Number(W)>0?"+":""}${W}%`})]})},valueFormatter:s=>`$${(0,V.qe)(s)}`}}},b=["Default","FixedDimensions","AspectRatio","MultiSeries","Animation","CustomLabelComponent","CustomValueComponent"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...i.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}}},"../charts/src/charts/bar-list-chart/bar-list-chart.tsx"(B,A,o){o.d(A,{A:()=>r});var V=o("../number-formatters/src/index.ts"),j=o("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),T=o("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/band.js"),d=o("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),g=o("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),l=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=o("../charts/src/providers/chart-context/global-charts-provider.tsx"),S=o("../charts/src/charts/bar-chart/bar-chart.tsx"),M=o("../charts/src/charts/private/with-responsive/with-responsive.tsx"),y=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const E=a=>{const n=a;return n&&"bandwidth"in n?n?.bandwidth()??0:0},R=({textProps:a,x:n,y:m,label:i,formatter:f})=>(0,y.jsx)(g.A,{...a,textAnchor:"start",x:n,y:m,children:f(i)}),D=({textProps:a,x:n,y:m,value:i,formatter:f})=>(0,y.jsx)(g.A,{...a,textAnchor:"end",x:n,y:m,fontWeight:500,children:f(i)}),O=({ticks:a,tickLabelProps:n,yOffset:m,labelPosition:i,valuePosition:f,data:P,labelFormatter:b,valueFormatter:s,LabelComponent:p=R,ValueComponent:c=D})=>{if(a.length===0)return null;const h=a.map(({value:x,index:v})=>typeof n=="function"?n(x,v,a):{});return a.map(({from:x,formattedValue:v},_)=>{const w=h[_]??{};delete w.textAnchor,delete w.dx;const L=P.reduce((I,{data:q})=>I+(q[_]?.value??0),0),W=x.y+m;return(0,y.jsxs)(j.A,{children:[(0,y.jsx)(p,{textProps:w,x:i,y:W,label:v,formatter:b}),(0,y.jsx)(c,{textProps:w,x:f,y:W,value:L,formatter:s,data:P,index:_})]},_)})},C=(a,n,m,i)=>{if(!i)return 0;const f=a.map(({label:c})=>c),P=(0,d.A)({type:"band",range:[0,m],domain:f,...n}),b=(0,T.A)({domain:f,range:[0,E(P)],padding:n.paddingInner});return-(E(b)+6)},e=({data:a,width:n,height:m,options:i={},margin:f={left:0,right:20,bottom:0,top:0},...P})=>{const b=(0,l.useMemo)(()=>{const s=a.length>1,p={paddingInner:s?.3:.1,padding:s?.3:.1},c={zero:!0},h={...p,...i.yScale??{}},x={...c,...i.xScale??{}};return{yScale:h,xScale:x,labelPosition:i.labelPosition??(s?0:10),valueFormatter:i.valueFormatter??(v=>(0,V.qe)(v)),labelFormatter:i.labelFormatter??(v=>String(v)),valuePosition:i.valuePosition??n,yOffset:i.yOffset??C(a,h,m,s)}},[i,n,a,m]);return(0,y.jsx)(S.f,{orientation:"horizontal",gridVisibility:"none",data:a,width:n,height:m,margin:f,options:{axis:{y:{children:s=>(0,y.jsx)(O,{...s,data:a,yOffset:b.yOffset,labelPosition:b.labelPosition,valuePosition:b.valuePosition,labelFormatter:b.labelFormatter,valueFormatter:b.valueFormatter,LabelComponent:i.labelComponent,ValueComponent:i.valueComponent})},x:{children:()=>null}},xScale:b.xScale,yScale:b.yScale},...P})},t=a=>(0,l.useContext)(u.m)?(0,y.jsx)(e,{...a}):(0,y.jsx)(u.S,{children:(0,y.jsx)(e,{...a})});t.displayName="BarListChart";const r=(0,M.F)(t);try{ResponsiveChart.displayName="ResponsiveChart",ResponsiveChart.__docgenInfo={description:"",displayName:"ResponsiveChart",props:{className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},legend:{defaultValue:null,description:`Legend configuration object for controlling legend appearance and behavior.
Includes orientation, position, alignment, shape, styling, and interactivity options.`,name:"legend",required:!1,type:{name:"ChartLegendConfig<SeriesData[]>"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:'{ yScale: Omit<ScaleOptions, "type">; xScale: Omit<ScaleOptions, "type">; labelFormatter?: (value: string) => string; valueFormatter?: (value: number) => string; ... 4 more ...; valueComponent?: ComponentType<...>; }'}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withTooltips:{defaultValue:null,description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"x"'},{value:'"y"'},{value:'"none"'},{value:'"xy"'}]}},animation:{defaultValue:null,description:"Whether to show chart animation on initial render or not",name:"animation",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"'md'"},description:`Gap between chart elements (SVG, legend, children).
Uses WordPress design system tokens.`,name:"gap",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'}]}},withPatterns:{defaultValue:null,description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},showZeroValues:{defaultValue:null,description:"",name:"showZeroValues",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},maxWidth:{defaultValue:{value:"1200"},description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:`The aspect ratio of the chart (height = width * aspectRatio).
When provided, height is calculated from width.
When omitted, the chart fills the parent container's height.`,name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:{value:"300"},description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/bar-list-chart/bar-list-chart.tsx#ResponsiveChart"]={docgenInfo:ResponsiveChart.__docgenInfo,name:"ResponsiveChart",path:"../charts/src/charts/bar-list-chart/bar-list-chart.tsx#ResponsiveChart"})}catch{}try{t.displayName="BarListChart",t.__docgenInfo={description:"",displayName:"BarListChart",props:{options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:'{ yScale: Omit<ScaleOptions, "type">; xScale: Omit<ScaleOptions, "type">; labelFormatter?: (value: string) => string; valueFormatter?: (value: number) => string; ... 4 more ...; valueComponent?: ComponentType<...>; }'}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},withPatterns:{defaultValue:null,description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},showZeroValues:{defaultValue:null,description:"",name:"showZeroValues",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Width of the chart container in pixels. When omitted, the chart fills its parent's width.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart container in pixels. When omitted, the chart fills its parent's height.",name:"height",required:!1,type:{name:"number"}},size:{defaultValue:null,description:`Maximum diameter of the pie in pixels (pie and donut charts only).
The pie will shrink if the container is smaller than this value.
When omitted, the pie fills the available space.`,name:"size",required:!1,type:{name:"number"}},margin:{defaultValue:{value:`{
		left: 0,
		right: 20,
		bottom: 0,
		top: 0,
	}`},description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:null,description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legend:{defaultValue:null,description:`Legend configuration object for controlling legend appearance and behavior.
Includes orientation, position, alignment, shape, styling, and interactivity options.`,name:"legend",required:!1,type:{name:"ChartLegendConfig<SeriesData[]>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"x"'},{value:'"y"'},{value:'"none"'},{value:'"xy"'}]}},animation:{defaultValue:null,description:"Whether to show chart animation on initial render or not",name:"animation",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"'md'"},description:`Gap between chart elements (SVG, legend, children).
Uses WordPress design system tokens.`,name:"gap",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/bar-list-chart/bar-list-chart.tsx#BarListChart"]={docgenInfo:t.__docgenInfo,name:"BarListChart",path:"../charts/src/charts/bar-list-chart/bar-list-chart.tsx#BarListChart"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(B,A,o){o.d(A,{A:()=>T});function V(d){var g,l,u="";if(typeof d=="string"||typeof d=="number")u+=d;else if(typeof d=="object")if(Array.isArray(d)){var S=d.length;for(g=0;g<S;g++)d[g]&&(l=V(d[g]))&&(u&&(u+=" "),u+=l)}else for(l in d)d[l]&&(u&&(u+=" "),u+=l);return u}function j(){for(var d,g,l=0,u="",S=arguments.length;l<S;l++)(d=arguments[l])&&(g=V(d))&&(u&&(u+=" "),u+=g);return u}const T=j},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(B){var A=function(t){return o(t)&&!V(t)};function o(e){return!!e&&typeof e=="object"}function V(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||d(e)}var j=typeof Symbol=="function"&&Symbol.for,T=j?Symbol.for("react.element"):60103;function d(e){return e.$$typeof===T}function g(e){return Array.isArray(e)?[]:{}}function l(e,t){return t.clone!==!1&&t.isMergeableObject(e)?O(g(e),e,t):e}function u(e,t,r){return e.concat(t).map(function(a){return l(a,r)})}function S(e,t){if(!t.customMerge)return O;var r=t.customMerge(e);return typeof r=="function"?r:O}function M(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function y(e){return Object.keys(e).concat(M(e))}function E(e,t){try{return t in e}catch{return!1}}function R(e,t){return E(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function D(e,t,r){var a={};return r.isMergeableObject(e)&&y(e).forEach(function(n){a[n]=l(e[n],r)}),y(t).forEach(function(n){R(e,n)||(E(e,n)&&r.isMergeableObject(t[n])?a[n]=S(n,r)(e[n],t[n],r):a[n]=l(t[n],r))}),a}function O(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||u,r.isMergeableObject=r.isMergeableObject||A,r.cloneUnlessOtherwiseSpecified=l;var a=Array.isArray(t),n=Array.isArray(e),m=a===n;return m?a?r.arrayMerge(e,t,r):D(e,t,r):l(t,r)}O.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(a,n){return O(a,n,r)},{})};var C=O;B.exports=C}}]);
