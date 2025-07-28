"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx":(F,f,e)=>{e.r(f),e.d(f,{AlignmentOptions:()=>o,CustomShape:()=>P,DashboardExample:()=>D,Horizontal:()=>S,StandaloneLegendWithChartId:()=>L,Vertical:()=>T,WithBarChart:()=>W,WithLineChart:()=>z,__namedExportsOrder:()=>ge,default:()=>_});var x=e("../charts/src/providers/chart-context/chart-context.tsx"),y=e("../charts/src/providers/theme/theme-provider.tsx"),v=e("../charts/src/components/bar-chart/bar-chart.tsx"),d=e("../charts/src/components/line-chart/line-chart.tsx"),h=e("../charts/src/components/pie-chart/pie-chart.tsx"),i=e("../charts/src/components/legend/legend.tsx"),B=e("../charts/src/components/legend/use-chart-legend-data.ts"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _={title:"JS Packages/Charts/Composites/Legend",component:i.s,parameters:{layout:"centered",docs:{description:{component:`
The Legend component provides a flexible way to display chart legends either as standalone components or integrated with charts through the chart context.

## Key Features

- **Standalone Usage**: Display legends independently from charts
- **Context Integration**: Automatically retrieve legend data from charts using \`chartId\`
- **Flexible Positioning**: Place legends anywhere in your layout
- **Works with Hidden Legends**: Charts with \`showLegend={false}\` still provide data to standalone legends
- **Full Customization**: Inherits all props from BaseLegend for complete control

## Usage Examples

### Basic Usage with Manual Data
\`\`\`jsx
<Legend 
  items={[
    { label: 'Series 1', value: '25%', color: '#3858E9' },
    { label: 'Series 2', value: '35%', color: '#80C8FF' }
  ]}
  orientation="horizontal"
/>
\`\`\`

### Automatic Data from Chart Context
\`\`\`jsx
// Chart registers its legend data with chartId
<LineChart 
  chartId="sales-chart" 
  data={salesData}
  showLegend={false} // Legend hidden on chart
/>

// Standalone legend retrieves data automatically
<Legend 
  chartId="sales-chart"
  orientation="vertical"
  alignmentHorizontal="right"
/>
\`\`\`

### Dashboard Layout Example
\`\`\`jsx
<div className="dashboard">
  <div className="charts-grid">
    <LineChart chartId="revenue" showLegend={false} />
    <BarChart chartId="units" showLegend={false} />
    <PieChart chartId="regions" showLegend={false} />
  </div>
  <aside className="legend-panel">
    <Legend chartId="revenue" />
    <Legend chartId="units" />
    <Legend chartId="regions" />
  </aside>
</div>
\`\`\`
`}}}},r=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],R=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],H=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],S={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},T={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},pe=()=>{const c=(0,y.RW)(),J=(0,B.B)(r,c,{showValues:!1});return(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,t.jsx)(d.A,{data:r,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,t.jsx)(i.s,{items:J,orientation:"horizontal"})]})},z={render:()=>(0,t.jsx)(pe,{}),parameters:{docs:{description:{story:"Legend used with LineChart data, positioned independently below the chart."}}}},me=()=>{const c=(0,y.RW)(),J=(0,B.B)(R,c);return(0,t.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,t.jsx)(v.A,{data:R,showLegend:!1,width:400,height:300}),(0,t.jsx)(i.s,{items:J,orientation:"vertical"})]})},W={render:()=>(0,t.jsx)(me,{}),parameters:{docs:{description:{story:"Legend used with BarChart data, positioned vertically beside the chart."}}}},le=()=>(0,t.jsx)(x._$,{children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,t.jsx)(d.A,{chartId:"standalone-legend-chart",data:r,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,t.jsx)(i.s,{chartId:"standalone-legend-chart",orientation:"horizontal"})]})}),L={render:()=>(0,t.jsx)(le,{}),parameters:{docs:{source:{code:`<ChartProvider>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    {/* Chart with legend hidden but still registering data */}
    <LineChart
      chartId="standalone-legend-chart"
      data={lineChartData}
      showLegend={false}
      width={400}
      height={200}
    />
    {/* Standalone legend that automatically gets data from chart context */}
    <Legend chartId="standalone-legend-chart" orientation="horizontal" />
  </div>
</ChartProvider>`},description:{story:`
## Standalone Legend with Chart Context Integration

This example demonstrates the power of the Legend component's context integration feature.

### How It Works

1. **Chart Registration**: When a chart is rendered with a \`chartId\`, it automatically registers its legend data in the chart context
2. **Data Retrieval**: The Legend component can then retrieve this data using the same \`chartId\`
3. **Decoupled Display**: The legend can be placed anywhere in your layout, completely independent from the chart

### Key Benefits

- **Flexible Layouts**: Create complex dashboard layouts with centralized legend areas
- **Consistent Legends**: Multiple charts can share legend styles and positioning
- **Dynamic Updates**: Legend automatically updates when chart data changes
- **No Prop Drilling**: No need to pass legend data through multiple component levels

### Code Example

\`\`\`jsx
// Chart with hidden legend
<LineChart
  chartId="standalone-legend-chart"
  data={lineChartData}
  showLegend={false}
  width={400}
  height={200}
/>

// Standalone legend that retrieves data automatically
<Legend 
  chartId="standalone-legend-chart" 
  orientation="horizontal" 
/>
\`\`\`

### Important Notes

- The chart and legend must be wrapped in the same ChartProvider context
- The \`chartId\` must match exactly between chart and legend
- Charts with \`showLegend={false}\` still register their legend data
- If no chart with the given \`chartId\` exists, the legend will render nothing
`}}}},ye=()=>(0,t.jsx)(x._$,{children:(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,t.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,t.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,t.jsx)(d.A,{chartId:"dashboard-revenue",data:r,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,t.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,t.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,t.jsx)(v.A,{chartId:"dashboard-sales",data:R,showLegend:!1,width:280,height:200})]}),(0,t.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,t.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,t.jsx)(h.A,{chartId:"dashboard-devices",data:H,showLegend:!1})]})]})]}),(0,t.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,t.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,t.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,t.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,t.jsx)(i.s,{chartId:"dashboard-revenue",orientation:"vertical"})]}),(0,t.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,t.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,t.jsx)(i.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,t.jsx)(i.s,{chartId:"dashboard-devices",orientation:"vertical"})]})]})]})}),D={render:()=>(0,t.jsx)(ye,{}),parameters:{layout:"fullscreen",docs:{description:{story:`
## Real-World Dashboard Example

This example demonstrates a complete dashboard implementation using Legend with chart context integration.

### Key Implementation Details

1. **Chart Setup**: Each chart has a unique \`chartId\` and \`showLegend={false}\`
2. **Centralized Legends**: All legends are placed in a dedicated sidebar
3. **Automatic Data Sync**: Legends automatically retrieve data from their respective charts
4. **Clean Layout**: Charts remain uncluttered while legends are easily accessible

### Benefits of This Approach

- **Consistent Legend Styling**: All legends share the same visual style
- **Space Efficiency**: Charts can use full width without legend taking up space
- **Better Mobile Experience**: Legends can be collapsed or repositioned on smaller screens
- **Easier Maintenance**: Legend updates only need to happen in one place

### Implementation Code

\`\`\`jsx
// Charts with hidden legends
<LineChart chartId="dashboard-revenue" data={revenueData} showLegend={false} />
<BarChart chartId="dashboard-sales" data={salesData} showLegend={false} />
<PieChart chartId="dashboard-devices" data={deviceData} showLegend={false} />

// Centralized legend panel
<aside>
  <Legend chartId="dashboard-revenue" orientation="vertical" />
  <Legend chartId="dashboard-sales" orientation="vertical" />
  <Legend chartId="dashboard-devices" orientation="vertical" />
</aside>
\`\`\`
`}}}},o={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignmentHorizontal:"left",alignmentVertical:"top"},parameters:{docs:{description:{story:"Legend with custom alignment options."}}}},P={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"},parameters:{docs:{description:{story:"Legend with circle shape instead of default rectangle."}}}},ge=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","CustomShape"];S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Desktop',
      value: '65%',
      color: '#3858E9'
    }, {
      label: 'Mobile',
      value: '35%',
      color: '#80C8FF'
    }],
    orientation: 'horizontal'
  }
}`,...S.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Desktop',
      value: '65%',
      color: '#3858E9'
    }, {
      label: 'Mobile',
      value: '35%',
      color: '#80C8FF'
    }, {
      label: 'Tablet',
      value: '12%',
      color: '#44B556'
    }],
    orientation: 'vertical'
  }
}`,...T.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <WithLineChartData />,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with LineChart data, positioned independently below the chart.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <WithBarChartData />,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with BarChart data, positioned vertically beside the chart.'
      }
    }
  }
}`,...W.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <StandaloneLegendWithChartIdComponent />,
  parameters: {
    docs: {
      source: {
        code: \`<ChartProvider>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    {/* Chart with legend hidden but still registering data */}
    <LineChart
      chartId="standalone-legend-chart"
      data={lineChartData}
      showLegend={false}
      width={400}
      height={200}
    />
    {/* Standalone legend that automatically gets data from chart context */}
    <Legend chartId="standalone-legend-chart" orientation="horizontal" />
  </div>
</ChartProvider>\`
      },
      description: {
        story: \`
## Standalone Legend with Chart Context Integration

This example demonstrates the power of the Legend component's context integration feature.

### How It Works

1. **Chart Registration**: When a chart is rendered with a \\\`chartId\\\`, it automatically registers its legend data in the chart context
2. **Data Retrieval**: The Legend component can then retrieve this data using the same \\\`chartId\\\`
3. **Decoupled Display**: The legend can be placed anywhere in your layout, completely independent from the chart

### Key Benefits

- **Flexible Layouts**: Create complex dashboard layouts with centralized legend areas
- **Consistent Legends**: Multiple charts can share legend styles and positioning
- **Dynamic Updates**: Legend automatically updates when chart data changes
- **No Prop Drilling**: No need to pass legend data through multiple component levels

### Code Example

\\\`\\\`\\\`jsx
// Chart with hidden legend
<LineChart
  chartId="standalone-legend-chart"
  data={lineChartData}
  showLegend={false}
  width={400}
  height={200}
/>

// Standalone legend that retrieves data automatically
<Legend 
  chartId="standalone-legend-chart" 
  orientation="horizontal" 
/>
\\\`\\\`\\\`

### Important Notes

- The chart and legend must be wrapped in the same ChartProvider context
- The \\\`chartId\\\` must match exactly between chart and legend
- Charts with \\\`showLegend={false}\\\` still register their legend data
- If no chart with the given \\\`chartId\\\` exists, the legend will render nothing
\`
      }
    }
  }
}`,...L.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <DashboardWithCentralizedLegend />,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: \`
## Real-World Dashboard Example

This example demonstrates a complete dashboard implementation using Legend with chart context integration.

### Key Implementation Details

1. **Chart Setup**: Each chart has a unique \\\`chartId\\\` and \\\`showLegend={false}\\\`
2. **Centralized Legends**: All legends are placed in a dedicated sidebar
3. **Automatic Data Sync**: Legends automatically retrieve data from their respective charts
4. **Clean Layout**: Charts remain uncluttered while legends are easily accessible

### Benefits of This Approach

- **Consistent Legend Styling**: All legends share the same visual style
- **Space Efficiency**: Charts can use full width without legend taking up space
- **Better Mobile Experience**: Legends can be collapsed or repositioned on smaller screens
- **Easier Maintenance**: Legend updates only need to happen in one place

### Implementation Code

\\\`\\\`\\\`jsx
// Charts with hidden legends
<LineChart chartId="dashboard-revenue" data={revenueData} showLegend={false} />
<BarChart chartId="dashboard-sales" data={salesData} showLegend={false} />
<PieChart chartId="dashboard-devices" data={deviceData} showLegend={false} />

// Centralized legend panel
<aside>
  <Legend chartId="dashboard-revenue" orientation="vertical" />
  <Legend chartId="dashboard-sales" orientation="vertical" />
  <Legend chartId="dashboard-devices" orientation="vertical" />
</aside>
\\\`\\\`\\\`
\`
      }
    }
  }
}`,...D.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Series 1',
      value: '25%',
      color: '#3858E9'
    }, {
      label: 'Series 2',
      value: '35%',
      color: '#80C8FF'
    }, {
      label: 'Series 3',
      value: '40%',
      color: '#44B556'
    }],
    orientation: 'horizontal',
    alignmentHorizontal: 'left',
    alignmentVertical: 'top'
  },
  parameters: {
    docs: {
      description: {
        story: 'Legend with custom alignment options.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Desktop',
      value: '65%',
      color: '#3858E9'
    }, {
      label: 'Mobile',
      value: '35%',
      color: '#80C8FF'
    }],
    orientation: 'horizontal',
    shape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Legend with circle shape instead of default rectangle.'
      }
    }
  }
}`,...P.parameters?.docs?.source}}}},"../charts/src/components/bar-chart/bar-chart.tsx":(F,f,e)=>{e.d(f,{A:()=>ve});var x=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),y=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),v=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),d=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),h=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),i=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),B=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),t=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),A=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),_=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),R=e("../charts/src/providers/chart-context/utils.ts"),H=e("../charts/src/providers/chart-context/chart-context.tsx"),S=e("../charts/src/providers/theme/theme-provider.tsx"),T=e("../charts/src/components/legend/legend.tsx"),pe=e("../charts/src/components/legend/use-chart-legend-data.ts"),z=e("../charts/src/components/shared/use-chart-data-transform.ts"),me=e("../charts/src/components/shared/use-chart-margin.tsx"),W=e("../charts/src/components/shared/use-element-height.ts"),le=e("../charts/src/components/shared/with-responsive.tsx"),L=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),ye=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=e.n(ye),o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),P={};P.insert="head",P.singleton=!1;var ge=D()(o.A,P);const c=o.A.locals||{};var J=e("../number-formatters/src/index.ts");const u=n=>new Date(n).toLocaleDateString(void 0,{month:"short",day:"numeric"}),Z=n=>typeof n.paddingInner=="number"?n.paddingInner:0;function k(n,p,m={}){const g=(0,r.useMemo)(()=>{const M={type:"band",padding:.2,paddingInner:.1},X={type:"linear",nice:!0,zero:!1},C=n?.[0]?.data?.[0]?.label?b=>b:u,I=J.qe,Y=b=>b?.label||b?.date,$=b=>b?.value;return{vertical:{xTickFormat:C,yTickFormat:I,tooltipLabelFormatter:C,xAccessor:Y,yAccessor:$,gridVisibility:"x",xScale:M,yScale:X},horizontal:{xTickFormat:I,yTickFormat:C,tooltipLabelFormatter:C,xAccessor:$,yAccessor:Y,gridVisibility:"y",xScale:X,yScale:M}}},[n]);return(0,r.useMemo)(()=>{const M=p?"horizontal":"vertical",{xTickFormat:X,yTickFormat:C,tooltipLabelFormatter:I,xAccessor:Y,yAccessor:$,gridVisibility:b,xScale:_e,yScale:fe}=g[M],ee={..._e,...m.xScale||{}},de={...fe,...m.yScale||{}},te=p?m.axis?.y?.tickFormat:m.axis?.x?.tickFormat;return{gridVisibility:b,xScale:ee,yScale:de,accessors:{xAccessor:Y,yAccessor:$},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:X,...m.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:C,...m.axis?.y||{}}},barGroup:{padding:Z(p?de:ee)},tooltip:{labelFormatter:te||I}}},[g,m,p])}var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const N=n=>n?.length?n.some(m=>m.data.some(g=>isNaN(g.value)||g.value===null||g.value===void 0||!g.label&&(!("date"in g&&g.date)||isNaN(g.date.getTime()))))?"Invalid data":null:"No data available",G=(n,p)=>`bar-pattern-${n}-${p}`,q=({data:n,chartId:p,width:m,height:g=400,className:M,margin:X,withTooltips:C=!1,showLegend:I=!1,legendOrientation:Y="horizontal",legendAlignmentHorizontal:$="center",legendAlignmentVertical:b="bottom",legendShape:_e="rect",gridVisibility:fe,renderTooltip:ee,options:de={},orientation:te="vertical",withPatterns:ae=!1})=>{const ie=te==="horizontal",K=(0,r.useId)(),ne=(0,R.R)(p),be=(0,S.RW)(),Q=(0,S.Ox)(n),w=(0,z.E)(n),se=(0,pe.B)(w,be),j=k(w,ie,de),Ce=(0,me.a)(g,j,w,Q,ie),[Le,je]=(0,W.v)(),re=(0,r.useRef)(null),[U,De]=(0,r.useState)(void 0),[Ie,we]=(0,r.useState)(!1),Se=Math.max(0,...n.map(s=>s.data?.length||0))*n.length,{tooltipRef:E,onChartFocus:V,onChartBlur:Ee,onChartKeyDown:Ae}=(0,L.JZ)({selectedIndex:U,setSelectedIndex:De,isNavigating:Ie,setIsNavigating:we,chartRef:re,totalPoints:Se}),ce=(0,r.useCallback)((s,l)=>s?.options?.stroke||Q.colors[l%Q.colors.length],[Q]),Te=(0,r.useCallback)(s=>()=>ae?`url(#${G(K,s)})`:ce(w[s],s),[ae,ce,w,K]),Pe=(0,r.useCallback)(({tooltipData:s})=>{const l=s?.nearestDatum?.datum;return l?(0,a.jsxs)("div",{className:c["bar-chart__tooltip"],children:[(0,a.jsx)("div",{className:c["bar-chart__tooltip-header"],children:s?.nearestDatum?.key}),(0,a.jsxs)("div",{className:c["bar-chart__tooltip-row"],children:[(0,a.jsxs)("span",{className:c["bar-chart__tooltip-label"],children:[j.tooltip.labelFormatter(l.label||(l.date?l.date.getTime():0),0,[]),":"]}),(0,a.jsx)("span",{className:c["bar-chart__tooltip-value"],children:l.value})]})]}):null},[j.tooltip]),xe=(0,r.useCallback)((s,l)=>{const ue=s%4,oe=G(K,s),he={id:oe,stroke:"white",strokeWidth:1,background:l};switch(ue){case 0:default:return(0,a.jsx)(x.A,{...he,width:5,height:5,orientation:["diagonal"]},oe);case 1:return(0,a.jsx)(y.A,{...he,width:6,height:6,fill:"white"},oe);case 2:return(0,a.jsx)(v.A,{...he,width:4,height:4},oe);case 3:return(0,a.jsx)(d.A,{...he,size:8,height:3},oe)}},[K]),Oe=(0,r.useCallback)((s,l)=>`
			.visx-bar[fill="url(#${G(K,s)})"] {
				stroke: ${l};
				stroke-width: 1;
				}
			`,[K]),Re=(0,r.useCallback)(()=>{if(U===void 0)return"";const s=Math.max(...n.map(We=>We.data.length)),l=Math.floor(U/n.length),ue=U%n.length;if(l>=s||ue>=n.length)return"";const oe=n[ue];if(l>=oe.data.length)return"";const he=ue*s+l;return`
			.bar-chart[data-chart-id="bar-chart-${ne}"] .visx-bar-group .visx-bar:nth-child(${he+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[U,n,ne]),Me=N(w),Fe=!Me,ze=(0,r.useMemo)(()=>({orientation:te,withPatterns:ae}),[te,ae]);if((0,R.t)(ne,se,be,"bar",Fe,ze),Me)return(0,a.jsx)("div",{className:(0,_.A)("bar-chart",c["bar-chart"]),children:Me});const Ve=fe??j.gridVisibility,Be=Re();return(0,a.jsxs)("div",{className:(0,_.A)("bar-chart",c["bar-chart"],M),"data-testid":"bar-chart",role:"grid","aria-label":"bar chart",style:{width:m,height:g,display:"flex",flexDirection:I&&b==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:Ae,onFocus:V,onBlur:Ee,ref:re,"data-chart-id":`bar-chart-${ne}`,children:[(0,a.jsxs)(h.A,{theme:Q,width:m,height:g-(I?je:0),margin:{...Ce,...X,...I&&b==="top"?{top:(Ce.top||0)+je}:{}},xScale:j.xScale,yScale:j.yScale,horizontal:ie,pointerEventsDataKey:"nearest",children:[(0,a.jsx)(i.A,{columns:Ve.includes("y"),rows:Ve.includes("x"),numTicks:4}),ae&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("defs",{"data-testid":"bar-chart-patterns",children:w.map((s,l)=>xe(l,ce(s,l)))}),(0,a.jsx)("style",{children:w.map((s,l)=>Oe(l,ce(s,l)))})]}),Be&&(0,a.jsx)("style",{children:Be}),(0,a.jsx)(B.A,{padding:j.barGroup.padding,children:w.map((s,l)=>(0,a.jsx)(t.A,{dataKey:s?.label,data:s.data,yAccessor:j.accessors.yAccessor,xAccessor:j.accessors.xAccessor,colorAccessor:Te(l)},s?.label))}),(0,a.jsx)(A.A,{...j.axis.x}),(0,a.jsx)(A.A,{...j.axis.y}),C&&(0,a.jsx)(L.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:ee||Pe,selectedIndex:U,tooltipRef:E,keyboardFocusedClassName:c["bar-chart__tooltip--keyboard-focused"],series:n,mode:"individual"})]}),I&&(0,a.jsx)(T.s,{items:se,orientation:Y,alignmentHorizontal:$,alignmentVertical:b,className:c["bar-chart__legend"],shape:_e,ref:Le,chartId:ne})]})},O=n=>(0,r.useContext)(H.uR)?(0,a.jsx)(q,{...n}):(0,a.jsx)(H._$,{children:(0,a.jsx)(q,{...n})});O.displayName="BarChart";const ve=(0,le.F)(O);try{O.displayName="BarChart",O.__docgenInfo={description:"",displayName:"BarChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:{value:"400"},description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"rect"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendAlignmentHorizontal:{defaultValue:{value:"center"},description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:{value:"bottom"},description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},orientation:{defaultValue:{value:"vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},withPatterns:{defaultValue:{value:"false"},description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/bar-chart/bar-chart.tsx#BarChart"]={docgenInfo:O.__docgenInfo,name:"BarChart",path:"../charts/src/components/bar-chart/bar-chart.tsx#BarChart"})}catch{}},"../charts/src/components/pie-chart/pie-chart.tsx":(F,f,e)=>{e.d(f,{A:()=>J});var x=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),y=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),v=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),i=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js");const t=({withTooltips:u})=>{const{tooltipOpen:Z,tooltipLeft:k,tooltipTop:a,tooltipData:N,hideTooltip:G,showTooltip:q}=(0,i.A)(),O=(0,d.useCallback)((n,p)=>{if(!u)return;const m=(0,h.A)(n);m&&q({tooltipData:p,tooltipLeft:m.x,tooltipTop:m.y-10})},[u,q]),ve=(0,d.useCallback)(()=>{u&&G()},[u,G]);return{onMouseMove:O,onMouseLeave:ve,tooltipOpen:Z,tooltipData:N||null,tooltipLeft:k,tooltipTop:a}};var A=e("../charts/src/providers/chart-context/utils.ts"),_=e("../charts/src/providers/chart-context/chart-context.tsx"),r=e("../charts/src/providers/theme/theme-provider.tsx"),R=e("../charts/src/providers/theme/themes.ts"),H=e("../charts/src/components/legend/legend.tsx"),S=e("../charts/src/components/legend/use-chart-legend-data.ts"),T=e("../charts/src/components/shared/use-element-height.ts"),pe=e("../charts/src/components/shared/with-responsive.tsx"),z=e("../charts/src/components/tooltip/base-tooltip.tsx"),me=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),W=e.n(me),le=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),L={};L.insert="head",L.singleton=!1;var ye=W()(le.A,L);const D=le.A.locals||{};var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const P=u=>{if(!u.length)return{isValid:!1,message:"No data available"};if(u.some(a=>a.percentage<0||a.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const k=u.reduce((a,N)=>a+N.percentage,0);return Math.abs(k-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},ge=({data:u,chartId:Z,withTooltips:k=!1,className:a,showLegend:N,legendOrientation:G,legendAlignmentHorizontal:q="center",legendAlignmentVertical:O="bottom",legendShape:ve="circle",size:n,thickness:p=1,padding:m=20,gapScale:g=0,cornerScale:M=0,children:X=null})=>{const C=(0,r.RW)(),I=(0,A.R)(Z),[Y,$]=(0,T.v)(),{onMouseMove:b,onMouseLeave:_e,tooltipOpen:fe,tooltipData:ee,tooltipLeft:de,tooltipTop:te}=t({withTooltips:k}),ae=(0,d.useMemo)(()=>({showValues:!0}),[]),ie=(0,S.B)(u,C,ae),{isValid:K,message:ne}=P(u),be=(0,d.useMemo)(()=>({thickness:p,gapScale:g,cornerScale:M}),[p,g,M]);if((0,A.t)(I,ie,C,"pie",K,be),!K)return(0,o.jsx)("div",{className:(0,v.A)("pie-chart",D["pie-chart"],a),children:(0,o.jsx)("div",{className:D["error-message"],children:ne})});const Q=n,w=n,se=N&&O==="top"?w-$:w,j=Math.min(Q,se)/2,Ce=Q/2,Le=se/2,je=g*(2*Math.PI/u.length),re=j-m,U=p===0?0:re*(1-p),De=(re-U)/2,Ie=M?Math.min(M*re,De):0,we=u.map((E,V)=>({...E,index:V})),Se={value:E=>E.value,fill:E=>E?.color||C.colors[E.index]};return(0,o.jsxs)("div",{className:(0,v.A)("pie-chart",D["pie-chart"],a),style:{display:"flex",flexDirection:N&&O==="top"?"column-reverse":"column"},children:[(0,o.jsx)("svg",{viewBox:`0 0 ${n} ${se}`,preserveAspectRatio:"xMidYMid meet",width:n,height:se,children:(0,o.jsxs)(x.A,{top:Le,left:Ce,children:[(0,o.jsx)(y.A,{data:we,pieValue:Se.value,outerRadius:re,innerRadius:U,padAngle:je,cornerRadius:Ie,children:E=>E.arcs.map((V,Ee)=>{const[Ae,ce]=E.path.centroid(V),Te=V.endAngle-V.startAngle>=.25,Pe=Oe=>b(Oe,V.data),xe={d:E.path(V)||"",fill:Se.fill(V.data)};return k&&(xe.onMouseMove=Pe,xe.onMouseLeave=_e),(0,o.jsxs)("g",{children:[(0,o.jsx)("path",{...xe}),Te&&(0,o.jsx)("text",{x:Ae,y:ce,dy:".33em",fill:C.labelBackgroundColor||R.zQ.labelBackgroundColor,fontSize:12,textAnchor:"middle",pointerEvents:"none",children:V.data.label})]},`arc-${Ee}`)})}),X]})}),N&&(0,o.jsx)(H.s,{items:ie,orientation:G,alignmentHorizontal:q,alignmentVertical:O,className:D["pie-chart-legend"],shape:ve,ref:Y,chartId:I}),k&&fe&&ee&&(0,o.jsx)(z.R,{data:ee,top:te||0,left:de||0,style:{transform:"translate(-50%, -100%)"}})]})},c=u=>(0,d.useContext)(_.uR)?(0,o.jsx)(ge,{...u}):(0,o.jsx)(_._$,{children:(0,o.jsx)(ge,{...u})});c.displayName="PieChart";const J=(0,pe.F)(c);try{c.displayName="PieChart",c.__docgenInfo={description:"",displayName:"PieChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"Use the children prop to render additional elements on the chart.",name:"children",required:!1,type:{name:"ReactNode"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<DataPointPercentage[], number>"}},legendAlignmentHorizontal:{defaultValue:{value:"center"},description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:{value:"bottom"},description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},padding:{defaultValue:{value:"20"},description:"Add padding to the chart",name:"padding",required:!1,type:{name:"number"}},thickness:{defaultValue:{value:"1"},description:`Thickness of the pie chart.
A value between 0 and 1, where 0 means no thickness
and 1 means the maximum thickness.`,name:"thickness",required:!1,type:{name:"number"}},innerRadius:{defaultValue:null,description:"Inner radius in pixels. If > 0, creates a donut chart. Defaults to 0.",name:"innerRadius",required:!1,type:{name:"number"}},gapScale:{defaultValue:{value:"0"},description:`Scale of the gap between groups in the pie chart
A value between 0 and 1, where 0 means no gap.`,name:"gapScale",required:!1,type:{name:"number"}},cornerScale:{defaultValue:{value:"0"},description:`Scale of the corner radius for the pie chart segments.
A value between 0 and 1, where 0 means no corner radius.`,name:"cornerScale",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-chart/pie-chart.tsx#PieChart"]={docgenInfo:c.__docgenInfo,name:"PieChart",path:"../charts/src/components/pie-chart/pie-chart.tsx#PieChart"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(F,f,e)=>{e.d(f,{R:()=>A});var x=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=e.n(x),v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),d={};d.insert="head",d.singleton=!1;var h=y()(v.A,d);const i=v.A.locals||{};var B=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=({data:_})=>(0,B.jsxs)(B.Fragment,{children:[_?.label,": ",_?.valueDisplay||_?.value]}),A=({data:_,top:r,left:R,component:H=t,children:S,className:T})=>(0,B.jsx)("div",{className:i.tooltip,style:{top:r,left:R},role:"tooltip",children:S||_&&(0,B.jsx)(H,{data:_,className:T})});try{A.displayName="BaseTooltip",A.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:A.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(F,f,e)=>{e.d(f,{A:()=>i});var x=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=e.n(x),v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(v),h=d()(y());h.push([F.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),h.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const i=h},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":(F,f,e)=>{e.d(f,{A:()=>i});var x=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=e.n(x),v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(v),h=d()(y());h.push([F.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),h.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const i=h},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(F,f,e)=>{e.d(f,{A:()=>i});var x=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=e.n(x),v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(v),h=d()(y());h.push([F.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),h.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const i=h}}]);
