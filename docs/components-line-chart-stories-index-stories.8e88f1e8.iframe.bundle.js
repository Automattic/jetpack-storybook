"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4722],{"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js":((j,b,s)=>{s.d(b,{A:()=>i});var l=s("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),d=s.n(l),r=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=s("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),w=s.n(n),u=s("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js");function i(f){var D=f.top,v=D===void 0?0:D,C=f.left,M=C===void 0?0:C,c=f.className,m=f.children;return r.createElement(u.A,{className:w()("visx-glyph",c),top:v,left:M},m)}i.propTypes={top:d().number,left:d().number,className:d().string,children:d().node}}),"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js":((j,b,s)=>{s.d(b,{A:()=>M});var l=s("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),d=s.n(l),r=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=s("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),w=s.n(n),u=s("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),i=s("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/star.js"),f=s("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),D=["children","className","top","left","size"];function v(){return v=Object.assign?Object.assign.bind():function(c){for(var m=1;m<arguments.length;m++){var y=arguments[m];for(var e in y)Object.prototype.hasOwnProperty.call(y,e)&&(c[e]=y[e])}return c},v.apply(this,arguments)}function C(c,m){if(c==null)return{};var y={},e=Object.keys(c),t,a;for(a=0;a<e.length;a++)t=e[a],!(m.indexOf(t)>=0)&&(y[t]=c[t]);return y}function M(c){var m=c.children,y=c.className,e=c.top,t=c.left,a=c.size,g=C(c,D),h=(0,u.A)();return h.type(i.A),(typeof a=="number"||a)&&h.size(a),m?r.createElement(r.Fragment,null,m({path:h})):r.createElement(f.A,{top:e,left:t},r.createElement("path",v({className:w()("visx-glyph-star",y),d:h()||""},g)))}M.propTypes={children:d().func,className:d().string,top:d().number,left:d().number,size:d().oneOfType([d().number,d().func])}}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((j,b,s)=>{s.d(b,{A:()=>r});function l(n){var w,u,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var f=n.length;for(w=0;w<f;w++)n[w]&&(u=l(n[w]))&&(i&&(i+=" "),i+=u)}else for(u in n)n[u]&&(i&&(i+=" "),i+=u);return i}function d(){for(var n,w,u=0,i="",f=arguments.length;u<f;u++)(n=arguments[u])&&(w=l(n))&&(i&&(i+=" "),i+=w);return i}const r=d}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(j=>{var b=function(t){return s(t)&&!l(t)};function s(e){return!!e&&typeof e=="object"}function l(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||n(e)}var d=typeof Symbol=="function"&&Symbol.for,r=d?Symbol.for("react.element"):60103;function n(e){return e.$$typeof===r}function w(e){return Array.isArray(e)?[]:{}}function u(e,t){return t.clone!==!1&&t.isMergeableObject(e)?m(w(e),e,t):e}function i(e,t,a){return e.concat(t).map(function(g){return u(g,a)})}function f(e,t){if(!t.customMerge)return m;var a=t.customMerge(e);return typeof a=="function"?a:m}function D(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function v(e){return Object.keys(e).concat(D(e))}function C(e,t){try{return t in e}catch{return!1}}function M(e,t){return C(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function c(e,t,a){var g={};return a.isMergeableObject(e)&&v(e).forEach(function(h){g[h]=u(e[h],a)}),v(t).forEach(function(h){M(e,h)||(C(e,h)&&a.isMergeableObject(t[h])?g[h]=f(h,a)(e[h],t[h],a):g[h]=u(t[h],a))}),g}function m(e,t,a){a=a||{},a.arrayMerge=a.arrayMerge||i,a.isMergeableObject=a.isMergeableObject||b,a.cloneUnlessOtherwiseSpecified=u;var g=Array.isArray(t),h=Array.isArray(e),T=g===h;return T?g?a.arrayMerge(e,t,a):c(e,t,a):u(t,a)}m.all=function(t,a){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(g,h){return m(g,h,a)},{})};var y=m;j.exports=y}),"../charts/src/components/line-chart/stories/config.tsx":((j,b,s)=>{s.d(b,{Em:()=>I,Nc:()=>E,pn:()=>G});var l=s("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"),d=s("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),r=s.n(d),n=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),w=s("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=s.n(w),i=s("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),f=s("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/diamond.js"),D=s("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),v=["children","className","top","left","size"];function C(){return C=Object.assign?Object.assign.bind():function(o){for(var A=1;A<arguments.length;A++){var p=arguments[A];for(var S in p)Object.prototype.hasOwnProperty.call(p,S)&&(o[S]=p[S])}return o},C.apply(this,arguments)}function M(o,A){if(o==null)return{};var p={},S=Object.keys(o),O,x;for(x=0;x<S.length;x++)O=S[x],!(A.indexOf(O)>=0)&&(p[O]=o[O]);return p}function c(o){var A=o.children,p=o.className,S=o.top,O=o.left,x=o.size,W=M(o,v),_=(0,i.A)();return _.type(f.A),(typeof x=="number"||x)&&_.size(x),A?n.createElement(n.Fragment,null,A({path:_})):n.createElement(D.A,{top:S,left:O},n.createElement("path",C({className:u()("visx-glyph-diamond",p),d:_()||""},W)))}c.propTypes={children:r().func,className:r().string,top:r().number,left:r().number,size:r().oneOfType([r().number,r().func])};var m=s("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),y=s.n(m),e=s("../charts/src/providers/chart-context/themes.ts"),t=s("../charts/src/stories/chart-decorator.tsx"),a=s("../charts/src/stories/legend-config.tsx"),g=s("../charts/src/stories/sample-data/index.ts"),h=s("../charts/src/stories/theme-config.tsx");const T={withTooltips:{control:{type:"boolean"},description:"Enable or disable interactive tooltips on hover",table:{category:"Tooltips"}},renderTooltip:{control:!1,description:"Custom render function for tooltip content",table:{disable:!0}}},L={...T,crosshairMode:{control:{type:"select"},options:["none","vertical","horizontal","both"],description:"Show crosshair lines on tooltip hover",table:{category:"Tooltips"}},withTooltipCrosshairs:{control:!1,table:{disable:!0}}};try{T.displayName="tooltipArgTypes",T.__docgenInfo={description:`Shared tooltip configuration for chart stories
Provides consistent argTypes across all chart tooltip stories`,displayName:"tooltipArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/tooltip-config.tsx#tooltipArgTypes"]={docgenInfo:T.__docgenInfo,name:"tooltipArgTypes",path:"../charts/src/stories/tooltip-config.tsx#tooltipArgTypes"})}catch{}try{L.displayName="lineChartTooltipArgTypes",L.__docgenInfo={description:"Additional tooltip argTypes for line charts with crosshair support",displayName:"lineChartTooltipArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/tooltip-config.tsx#lineChartTooltipArgTypes"]={docgenInfo:L.__docgenInfo,name:"lineChartTooltipArgTypes",path:"../charts/src/stories/tooltip-config.tsx#lineChartTooltipArgTypes"})}catch{}var z=s("../charts/src/components/private/default-glyph/default-glyph.tsx"),P=s("../charts/src/components/line-chart/line-chart.tsx");const I=y()(e.z,{glyphs:[o=>(0,n.createElement)(z.W,{...o,key:o.key}),o=>(0,n.createElement)(l.A,{key:o.key,top:o.y,left:o.x,size:o.size*o.size,fill:o.color}),o=>(0,n.createElement)(c,{key:o.key,top:o.y,left:o.x,size:o.size*o.size,fill:o.color})],annotationStyles:{label:{maxWidth:250}}}),E={title:"JS Packages/Charts/Types/Line Chart",component:P.A,parameters:{layout:"centered"},decorators:[t.OI],argTypes:{...a.r,...h.jW,...t.xo,...L}},G={...h.In,data:g.B2.slice(0,4),withGradientFill:!1,withLegendGlyph:!1,smoothing:!0,maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}},withTooltips:!0};try{I.displayName="glyphTheme",I.__docgenInfo={description:"Custom storybook theme with glyphs",displayName:"glyphTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/stories/config.tsx#glyphTheme"]={docgenInfo:I.__docgenInfo,name:"glyphTheme",path:"../charts/src/components/line-chart/stories/config.tsx#glyphTheme"})}catch{}}),"../charts/src/components/line-chart/stories/index.stories.tsx":((j,b,s)=>{s.r(b),s.d(b,{Animation:()=>C,BrokenLine:()=>E,Comparison:()=>o,CurveTypes:()=>z,CustomDimensions:()=>y,CustomLegendPositioning:()=>c,DateStringFormats:()=>G,Default:()=>f,ErrorStates:()=>h,FixedDimensions:()=>e,GradientCustomColors:()=>a,GradientFilled:()=>t,GradientTransparent:()=>g,ManySeries:()=>v,SingleSeries:()=>D,SmartFormatting:()=>P,WithCompositionLegend:()=>m,WithInteractiveLegend:()=>M,WithPointerEvents:()=>L,WithoutSmoothing:()=>T,__namedExportsOrder:()=>A,default:()=>u});var l=s("../charts/src/stories/sample-data/index.ts"),d=s("../charts/src/components/line-chart/line-chart.tsx"),r=s("../charts/src/components/line-chart/stories/config.tsx"),n=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u={...r.Nc,title:"JS Packages/Charts/Types/Line Chart",argTypes:{...r.Nc.argTypes,seriesCount:{control:{type:"radio"},options:["single","multiple","many"],description:"Number of data series",table:{category:"Data"}},dimensionMode:{control:{type:"radio"},options:["responsive","fixed"],description:"Chart sizing mode",table:{category:"Dimensions"}},smoothing:{control:"boolean",description:"Enable line smoothing",table:{category:"Visual Style"}},curveType:{control:{type:"radio"},options:["linear","smooth","monotone"],description:"Line curve type",table:{category:"Visual Style"}},withGradientFill:{control:"boolean",description:"Fill area under line with gradient",table:{category:"Visual Style"}}}},i=p=>{const{seriesCount:S,dimensionMode:O,crosshairMode:x,withTooltipCrosshairs:W,..._}=p;let Y=_.data||r.pn.data;S==="single"?Y=[l.B2[0]]:S==="multiple"?Y=l.B2.slice(0,4):S==="many"&&(Y=l.B2);let R={};O==="fixed"&&(R={width:800,height:400});let V;return x==="vertical"?V={showVertical:!0}:x==="horizontal"?V={showHorizontal:!0}:x==="both"&&(V={showVertical:!0,showHorizontal:!0}),(0,n.jsx)(d.A,{..._,...R,data:Y,withTooltipCrosshairs:V})},f=i.bind({});f.args={...r.pn};const D=i.bind({});D.args={data:[l.B2[0]]};const v=i.bind({});v.args={...r.pn,data:l.B2,showLegend:!0};const C=i.bind({});C.args={...r.pn,animation:!0};const M=i.bind({});M.args={...r.pn,chartId:"interactive-legend-demo",showLegend:!0,legendInteractive:!0},M.parameters={docs:{description:{story:"Line chart with interactive legend. Click or tap legend items to toggle series visibility. Use Tab to focus legend items, then Enter or Space to toggle. Series colors remain stable when toggling visibility."}}};const c=i.bind({});c.args={...r.pn,showLegend:!0,height:400,legendAlignment:"start",legendPosition:"top",legendOrientation:"horizontal",withLegendGlyph:!0},c.parameters={docs:{description:{story:"Line chart with top-left positioned horizontal legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with temperature data for London, Canberra, and Mars."}}};const m={render:p=>(0,n.jsx)("div",{style:{width:"600px",height:"400px"},children:(0,n.jsx)(d.A,{data:p.data||l.Sb,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1,children:(0,n.jsx)(d.A.Legend,{orientation:p.legendOrientation||"horizontal",alignment:p.legendAlignment||"center",position:p.legendPosition||"bottom",maxWidth:p.legendMaxWidth,textOverflow:p.legendTextOverflow||"wrap"})})}),argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{docs:{description:{story:"Legend used with LineChart using the composition API, positioned below the chart."}}}},y=i.bind({});y.args={...r.pn,width:800,height:400};const e=i.bind({});e.args={...r.pn,width:800,height:400,withTooltips:!0},e.parameters={docs:{description:{story:"Line chart with fixed dimensions that override the responsive behavior."}}};const t=i.bind({});t.args={...r.pn,margin:void 0,data:l.Sb,withGradientFill:!0,options:{axis:{y:{orientation:"right"}}}};const a=i.bind({});a.args={width:600,height:300,data:[{label:"Revenue",data:[{date:new Date("2024-01-01"),value:45e3},{date:new Date("2024-02-01"),value:52e3},{date:new Date("2024-03-01"),value:48e3},{date:new Date("2024-04-01"),value:61e3},{date:new Date("2024-05-01"),value:68e3},{date:new Date("2024-06-01"),value:72e3}],options:{gradient:{fromOpacity:.8,toOpacity:0}}},{label:"Expenses",data:[{date:new Date("2024-01-01"),value:28e3},{date:new Date("2024-02-01"),value:31e3},{date:new Date("2024-03-01"),value:29e3},{date:new Date("2024-04-01"),value:33e3},{date:new Date("2024-05-01"),value:35e3},{date:new Date("2024-06-01"),value:38e3}],options:{gradient:{from:"var(--jp-red)",to:"var(--jp-red)",fromOpacity:.6,toOpacity:0}}}],withGradientFill:!0};const g=i.bind({});g.args={width:600,height:300,data:[{label:"Temperature (\xB0C)",data:[{date:new Date("2024-01-01"),value:15},{date:new Date("2024-02-01"),value:18},{date:new Date("2024-03-01"),value:22},{date:new Date("2024-04-01"),value:26},{date:new Date("2024-05-01"),value:30},{date:new Date("2024-06-01"),value:28}],options:{gradient:{stops:[{offset:"0%",opacity:.7},{offset:"20%",opacity:0},{offset:"100%",opacity:0}]}}}],withGradientFill:!0};const h={render:()=>(0,n.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Empty Data"}),(0,n.jsx)(d.A,{width:300,height:200,data:[],withGradientFill:!1,withLegendGlyph:!1})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Invalid Date Values"}),(0,n.jsx)(d.A,{width:300,height:200,data:[{label:"Invalid Dates",data:[{date:new Date("invalid"),value:10},{date:new Date("2024-01-02"),value:20}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Invalid Values"}),(0,n.jsx)(d.A,{width:300,height:200,data:[{label:"Invalid Values",data:[{date:new Date("2024-01-01"),value:NaN},{date:new Date("2024-01-02"),value:null}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Single Data Point"}),(0,n.jsx)(d.A,{width:300,height:200,data:[{label:"Single Point",data:[{date:new Date("2024-01-01"),value:100}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]})]}),parameters:{docs:{description:{story:"Examples of how the line chart handles various error states and edge cases."}}}},T=i.bind({});T.args={...r.pn,smoothing:!1};const L=i.bind({});L.args={...r.pn,onPointerDown:({datum:p})=>alert("Pointer down:"+JSON.stringify(p))};const z={render:()=>{const p=[{label:"Sample Series",data:[{date:new Date("2024-01-01"),value:10},{date:new Date("2024-01-02"),value:90},{date:new Date("2024-01-03"),value:85},{date:new Date("2024-01-04"),value:82},{date:new Date("2024-01-05"),value:5},{date:new Date("2024-01-06"),value:8},{date:new Date("2024-01-07"),value:10}],options:{}}];return(0,n.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Linear Curve"}),(0,n.jsx)(d.A,{width:300,height:200,data:p,curveType:"linear",withGradientFill:!1,withLegendGlyph:!1})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Smooth Curve (Catmull-Rom)"}),(0,n.jsx)(d.A,{width:300,height:200,data:p,curveType:"smooth",withGradientFill:!1,withLegendGlyph:!1})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Monotone X Curve"}),(0,n.jsx)(d.A,{width:300,height:200,data:p,curveType:"monotone",withGradientFill:!1,withLegendGlyph:!1})]})]})},parameters:{docs:{description:{story:"Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points."}}}},P=i.bind({});P.args={data:l.Gv,withGradientFill:!1,smoothing:!0,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}}},P.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const I=100,E=i.bind({});E.args={...r.pn,data:[{...l.Sb[0],label:"Visitors with dashed line",data:l.Sb[0].data.map(p=>({...p,value:p.value+I})),options:{...l.Sb[0].options,seriesLineStyle:{strokeDasharray:"5 5",strokeWidth:3}}},l.Sb[0]],showLegend:!0},E.parameters={docs:{description:{story:"Demonstrates the option of setting a seriesLineStyle to a dash array."}}};const G={render:()=>(0,n.jsx)(d.A,{data:[{label:"String Dates",data:[{dateString:"2024-01-01",value:10},{dateString:"2024-01-02",value:20},{dateString:"2024-01-03 00:00:00",value:15},{dateString:"2024-01-04",value:25},{dateString:"2024-01-05 00:00",value:30}],options:{}}],withGradientFill:!1,withLegendGlyph:!1}),parameters:{docs:{description:{story:`Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:
- Simple date strings (YYYY-MM-DD)
- Date with time (YYYY-MM-DD 00:00:00)
- Date with time (YYYY-MM-DD 00:00)
- ISO format (YYYY-MM-DDT00:00:00)
- UTC format (YYYY-MM-DDT00:00:00Z)
- Timezone offset (YYYY-MM-DDT00:00:00\xB1HH:mm)
`}}}},o=i.bind({});o.args={showLegend:!0,smoothing:!1,data:[{...l.B2[0],label:"New York"},{...l.B2[1],label:"New York last year",group:"new-york",options:{type:"comparison"}},{...l.B2[2],label:"Tokyo"},{...l.B2[3],label:"Tokyo last year",group:"tokyo",options:{type:"comparison"}}]};const A=["Default","SingleSeries","ManySeries","Animation","WithInteractiveLegend","CustomLegendPositioning","WithCompositionLegend","CustomDimensions","FixedDimensions","GradientFilled","GradientCustomColors","GradientTransparent","ErrorStates","WithoutSmoothing","WithPointerEvents","CurveTypes","SmartFormatting","BrokenLine","DateStringFormats","Comparison"];f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...f.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...D.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...v.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...C.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...M.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...c.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '600px',
    height: '400px'
  }}>
            <LineChart data={args.data || webTrafficData} width={600} height={300} withGradientFill={false} withLegendGlyph={false}>
                <LineChart.Legend orientation={args.legendOrientation || 'horizontal'} alignment={args.legendAlignment || 'center'} position={args.legendPosition || 'bottom'} maxWidth={args.legendMaxWidth} textOverflow={args.legendTextOverflow || 'wrap'} />
            </LineChart>
        </div>,
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
        story: 'Legend used with LineChart using the composition API, positioned below the chart.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...y.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...e.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...t.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...a.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...g.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <LineChart width={300} height={200} data={[]} withGradientFill={false} withLegendGlyph={false} />
            </div>
            <div>
                <h3>Invalid Date Values</h3>
                <LineChart width={300} height={200} data={[{
        label: 'Invalid Dates',
        data: [{
          date: new Date('invalid'),
          value: 10
        }, {
          date: new Date('2024-01-02'),
          value: 20
        }],
        options: {}
      }]} withGradientFill={false} withLegendGlyph={false} />
            </div>
            <div>
                <h3>Invalid Values</h3>
                <LineChart width={300} height={200} data={[{
        label: 'Invalid Values',
        data: [{
          date: new Date('2024-01-01'),
          value: NaN
        }, {
          date: new Date('2024-01-02'),
          value: null as number | null
        }],
        options: {}
      }]} withGradientFill={false} withLegendGlyph={false} />
            </div>
            <div>
                <h3>Single Data Point</h3>
                <LineChart width={300} height={200} data={[{
        label: 'Single Point',
        data: [{
          date: new Date('2024-01-01'),
          value: 100
        }],
        options: {}
      }]} withGradientFill={false} withLegendGlyph={false} />
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of how the line chart handles various error states and edge cases.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...T.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...L.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Create sample data that highlights the difference between curve types
    // Monotone X will prevent overshooting on steep changes followed by gradual changes
    const curveData = [{
      label: 'Sample Series',
      data: [{
        date: new Date('2024-01-01'),
        value: 10
      }, {
        date: new Date('2024-01-02'),
        value: 90
      },
      // Sharp rise
      {
        date: new Date('2024-01-03'),
        value: 85
      },
      // Slight decline
      {
        date: new Date('2024-01-04'),
        value: 82
      },
      // Gradual decline
      {
        date: new Date('2024-01-05'),
        value: 5
      },
      // Sharp drop
      {
        date: new Date('2024-01-06'),
        value: 8
      },
      // Slight rise
      {
        date: new Date('2024-01-07'),
        value: 10
      } // Gradual rise
      ],
      options: {}
    }];
    return <div style={{
      display: 'grid',
      gap: '2rem',
      gridTemplateColumns: 'repeat(3, 1fr)'
    }}>
                <div>
                    <h3>Linear Curve</h3>
                    <LineChart width={300} height={200} data={curveData} curveType="linear" withGradientFill={false} withLegendGlyph={false} />
                </div>
                <div>
                    <h3>Smooth Curve (Catmull-Rom)</h3>
                    <LineChart width={300} height={200} data={curveData} curveType="smooth" withGradientFill={false} withLegendGlyph={false} />
                </div>
                <div>
                    <h3>Monotone X Curve</h3>
                    <LineChart width={300} height={200} data={curveData} curveType="monotone" withGradientFill={false} withLegendGlyph={false} />
                </div>
            </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...P.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...E.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <LineChart data={[{
      label: 'String Dates',
      data: [{
        dateString: '2024-01-01',
        value: 10
      }, {
        dateString: '2024-01-02',
        value: 20
      }, {
        dateString: '2024-01-03 00:00:00',
        value: 15
      }, {
        dateString: '2024-01-04',
        value: 25
      }, {
        dateString: '2024-01-05 00:00',
        value: 30
      }],
      options: {}
    }]} withGradientFill={false} withLegendGlyph={false} />;
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:\\n" + '- Simple date strings (YYYY-MM-DD)\\n' + '- Date with time (YYYY-MM-DD 00:00:00)\\n' + '- Date with time (YYYY-MM-DD 00:00)\\n' + '- ISO format (YYYY-MM-DDT00:00:00)\\n' + '- UTC format (YYYY-MM-DDT00:00:00Z)\\n' + '- Timezone offset (YYYY-MM-DDT00:00:00\xB1HH:mm)\\n'
      }
    }
  }
}`,...G.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...o.parameters?.docs?.source}}}}),"../charts/src/stories/legend-config.tsx":((j,b,s)=>{s.d(b,{r:()=>l});const l={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."}};try{l.displayName="legendArgTypes",l.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:l.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}})}]);
