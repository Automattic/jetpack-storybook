"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx":(Z,P,e)=>{e.r(P),e.d(P,{AlignmentOptions:()=>B,CustomShape:()=>y,DashboardExample:()=>j,Horizontal:()=>w,StandaloneLegendWithChartId:()=>T,Vertical:()=>E,WithBarChart:()=>F,WithLineChart:()=>A,__namedExportsOrder:()=>ae,default:()=>H});var _=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),W=e("../charts/src/components/bar-chart/bar-chart.tsx"),S=e("../charts/src/components/line-chart/line-chart.tsx"),V=e("../charts/src/components/pie-chart/pie-chart.tsx"),L=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),u=e("../charts/src/components/legend/legend.tsx"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const H={title:"JS Packages/Charts/Composites/Legend",component:u.s,parameters:{layout:"centered",docs:{description:{component:`
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
  alignment="end"
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
`}}}},k=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],O=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],l=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],w={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},E={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},Y=()=>{const K=(0,L.f)(k,{showValues:!1});return(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,a.jsx)(S.A,{data:k,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,a.jsx)(u.s,{items:K,orientation:"horizontal"})]})},A={render:()=>(0,a.jsx)(_.S,{children:(0,a.jsx)(Y,{})}),parameters:{docs:{description:{story:"Legend used with LineChart data, positioned independently below the chart."}}}},q=()=>{const K=(0,L.f)(O);return(0,a.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,a.jsx)(W.A,{data:O,showLegend:!1,width:400,height:300}),(0,a.jsx)(u.s,{items:K,orientation:"vertical"})]})},F={render:()=>(0,a.jsx)(_.S,{children:(0,a.jsx)(q,{})}),parameters:{docs:{description:{story:"Legend used with BarChart data, positioned vertically beside the chart."}}}},ee=()=>(0,a.jsx)(_.S,{children:(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,a.jsx)(S.A,{chartId:"standalone-legend-chart",data:k,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,a.jsx)(u.s,{chartId:"standalone-legend-chart",orientation:"horizontal"})]})}),T={render:()=>(0,a.jsx)(ee,{}),parameters:{docs:{source:{code:`<GlobalChartsProvider>
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
</GlobalChartsProvider>`},description:{story:`
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

- The chart and legend must be wrapped in the same GlobalChartsProvider context
- The \`chartId\` must match exactly between chart and legend
- Charts with \`showLegend={false}\` still register their legend data
- If no chart with the given \`chartId\` exists, the legend will render nothing
`}}}},X=()=>(0,a.jsx)(_.S,{children:(0,a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,a.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,a.jsx)(S.A,{chartId:"dashboard-revenue",data:k,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,a.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,a.jsx)(W.A,{chartId:"dashboard-sales",data:O,showLegend:!1,width:280,height:200})]}),(0,a.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,a.jsx)(V.A,{chartId:"dashboard-devices",data:l,showLegend:!1})]})]})]}),(0,a.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,a.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,a.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,a.jsx)(u.s,{chartId:"dashboard-revenue",orientation:"vertical"})]}),(0,a.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,a.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,a.jsx)(u.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,a.jsx)(u.s,{chartId:"dashboard-devices",orientation:"vertical"})]})]})]})}),j={render:()=>(0,a.jsx)(X,{}),parameters:{layout:"fullscreen",docs:{description:{story:`
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
`}}}},B={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignment:"start"},parameters:{docs:{description:{story:"Legend with custom alignment options."}}}},y={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"},parameters:{docs:{description:{story:"Legend with circle shape instead of default rectangle."}}}},ae=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","CustomShape"];w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <GlobalChartsProvider>
            <WithLineChartData />
        </GlobalChartsProvider>,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with LineChart data, positioned independently below the chart.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <GlobalChartsProvider>
            <WithBarChartData />
        </GlobalChartsProvider>,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with BarChart data, positioned vertically beside the chart.'
      }
    }
  }
}`,...F.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <StandaloneLegendWithChartIdComponent />,
  parameters: {
    docs: {
      source: {
        code: \`<GlobalChartsProvider>
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
</GlobalChartsProvider>\`
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

- The chart and legend must be wrapped in the same GlobalChartsProvider context
- The \\\`chartId\\\` must match exactly between chart and legend
- Charts with \\\`showLegend={false}\\\` still register their legend data
- If no chart with the given \\\`chartId\\\` exists, the legend will render nothing
\`
      }
    }
  }
}`,...T.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
    alignment: 'start'
  },
  parameters: {
    docs: {
      description: {
        story: 'Legend with custom alignment options.'
      }
    }
  }
}`,...B.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}}},"../charts/src/components/bar-chart/bar-chart.tsx":(Z,P,e)=>{e.d(P,{A:()=>we});var _=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),W=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),S=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),V=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),L=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),u=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),a=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),ie=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),H=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),k=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),O=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),w=e("../charts/src/hooks/use-xychart-theme.ts"),E=e("../charts/src/hooks/use-chart-data-transform.ts");const Y=(t,h={enabled:!1})=>{const{enabled:d,minValueRatio:o=.6,maxValueRatio:C=.008}=h;return(0,l.useMemo)(()=>{if(!d)return t;const v=[];for(const i of t)for(const c of i.data)c.value!==null&&c.value!==0&&v.push(c.value);if(v.length===0)return t;const g=v.map(Math.abs),m=Math.min(...g),I=Math.max(...g),b=Math.min(m*o,I*C);return t.map(i=>({...i,data:i.data.map(c=>c.value===0?{...c,visualValue:b}:c)}))},[t,d,o,C])};var A=e("../charts/src/hooks/use-chart-margin.tsx"),q=e("../charts/src/hooks/use-element-height.ts"),F=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),ee=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),T=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),X=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),j=e("../charts/src/utils/create-composition.ts"),B=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),y=e("../charts/src/components/legend/legend.tsx"),ae=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),K=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),ce=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),fe=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Ce=e.n(fe),he=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),te={};te.insert="head",te.singleton=!1;var Qe=Ce()(he.A,te);const f=he.A.locals||{};var _e=e("../number-formatters/src/index.ts");const Le=t=>new Date(t).toLocaleDateString(void 0,{month:"short",day:"numeric"}),je=t=>typeof t.paddingInner=="number"?t.paddingInner:0;function Ie(t,h,d={}){const o=(0,l.useMemo)(()=>{const C={type:"band",padding:.2,paddingInner:.1},v={type:"linear",nice:!0,zero:!1},g=t?.[0]?.data?.[0]?.label?i=>i:Le,m=_e.qe,I=i=>i?.label||i?.date,b=i=>{const c=i;return c?.visualValue!==void 0?c.visualValue:i?.value};return{vertical:{xTickFormat:g,yTickFormat:m,tooltipLabelFormatter:g,xAccessor:I,yAccessor:b,gridVisibility:"x",xScale:C,yScale:v},horizontal:{xTickFormat:m,yTickFormat:g,tooltipLabelFormatter:g,xAccessor:b,yAccessor:I,gridVisibility:"y",xScale:v,yScale:C}}},[t]);return(0,l.useMemo)(()=>{const C=h?"horizontal":"vertical",{xTickFormat:v,yTickFormat:g,tooltipLabelFormatter:m,xAccessor:I,yAccessor:b,gridVisibility:i,xScale:c,yScale:re}=o[C],$={...c,...d.xScale||{}},Q={...re,...d.yScale||{}},N=h?d.axis?.y?.tickFormat:d.axis?.x?.tickFormat;return{gridVisibility:i,xScale:$,yScale:Q,accessors:{xAccessor:I,yAccessor:b},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:v,...d.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:g,...d.axis?.y||{}}},barGroup:{padding:je(h?Q:$)},tooltip:{labelFormatter:N||m}}},[o,d,h])}var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const De=k.__,Se=t=>t?.length?t.some(d=>d.data.some(o=>isNaN(o.value)||o.value===null||o.value===void 0||!o.label&&(!("date"in o&&o.date)||isNaN(o.date.getTime()))))?"Invalid data":null:"No data available",se=(t,h)=>`bar-pattern-${t}-${h}`,me=({data:t,chartId:h,width:d,height:o=400,className:C,margin:v,withTooltips:g=!1,showLegend:m=!1,legendOrientation:I="horizontal",legendPosition:b="bottom",legendAlignment:i="center",legendShape:c="rect",gridVisibility:re,renderTooltip:$,options:Q={},orientation:N="vertical",withPatterns:U=!1,showZeroValues:Ee=!1,children:Ae})=>{const oe=N==="horizontal",p=(0,F.R)(h),pe=(0,w.O)(t),D=(0,E.E)(t),ue=Y(D,{enabled:Ee}),Fe=(0,B.f)(D),x=Ie(ue,oe,Q),ge=(0,A.a)(o,x,D,pe,oe),[Te,le]=(0,q.v)(),xe=(0,l.useRef)(null),[R,Be]=(0,l.useState)(void 0),[Me,Pe]=(0,l.useState)(!1),We=Math.max(0,...t.map(n=>n.data?.length||0))*t.length,{tooltipRef:ke,onChartFocus:Oe,onChartBlur:Re,onChartKeyDown:ze}=(0,ce.JZ)({selectedIndex:R,setSelectedIndex:Be,isNavigating:Me,setIsNavigating:Pe,chartRef:xe,totalPoints:We}),{resolveGroupColor:ve}=(0,ee.j)(),J=(0,l.useCallback)((n,r)=>ve({group:n.group,index:r,overrideColor:n.options?.stroke}),[ve]),Ge=(0,l.useCallback)(n=>()=>U?`url(#${se(p,n)})`:J(D[n],n),[U,J,D,p]),Ve=(0,l.useCallback)(({tooltipData:n})=>{const r=n?.nearestDatum?.datum;return r?(0,s.jsxs)("div",{className:f["bar-chart__tooltip"],children:[(0,s.jsx)("div",{className:f["bar-chart__tooltip-header"],children:n?.nearestDatum?.key}),(0,s.jsxs)("div",{className:f["bar-chart__tooltip-row"],children:[(0,s.jsxs)("span",{className:f["bar-chart__tooltip-label"],children:[x.tooltip.labelFormatter(r.label||(r.date?r.date.getTime():0),0,[]),":"]}),(0,s.jsx)("span",{className:f["bar-chart__tooltip-value"],children:r.value})]})]}):null},[x.tooltip]),Ke=(0,l.useCallback)((n,r)=>{const z=n%4,M=se(p,n),G={id:M,stroke:"white",strokeWidth:1,background:r};switch(z){case 0:default:return(0,s.jsx)(_.A,{...G,width:5,height:5,orientation:["diagonal"]},M);case 1:return(0,s.jsx)(W.A,{...G,width:6,height:6,fill:"white"},M);case 2:return(0,s.jsx)(S.A,{...G,width:4,height:4},M);case 3:return(0,s.jsx)(V.A,{...G,size:8,height:3},M)}},[p]),Ne=(0,l.useCallback)((n,r)=>`
			.visx-bar[fill="url(#${se(p,n)})"] {
				stroke: ${r};
				stroke-width: 1;
				}
			`,[p]),Ue=(0,l.useCallback)(()=>{if(R===void 0)return"";const n=Math.max(...t.map($e=>$e.data.length)),r=Math.floor(R/t.length),z=R%t.length;if(r>=n||z>=t.length)return"";const M=t[z];if(r>=M.data.length)return"";const G=z*n+r;return`
			.bar-chart[data-chart-id="bar-chart-${p}"] .visx-bar-group .visx-bar:nth-child(${G+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[R,t,p]),de=Se(D),He=!de,Xe=(0,l.useMemo)(()=>({orientation:N,withPatterns:U}),[N,U]);if((0,T.t)({chartId:p,legendItems:Fe,chartType:"bar",isDataValid:He,metadata:Xe}),de)return(0,s.jsx)("div",{className:(0,O.A)("bar-chart",f["bar-chart"]),children:de});const be=re??x.gridVisibility,ye=Ue();return(0,s.jsx)(ae.O.Provider,{value:{chartId:p,chartWidth:d,chartHeight:o-(m?le:0)},children:(0,s.jsxs)("div",{className:(0,O.A)("bar-chart",f["bar-chart"],C),"data-testid":"bar-chart",role:"grid","aria-label":De("Bar chart","jetpack-charts"),style:{width:d,height:o,display:"flex",flexDirection:m&&b==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:ze,onFocus:Oe,onBlur:Re,ref:xe,"data-chart-id":`bar-chart-${p}`,children:[(0,s.jsxs)(L.A,{theme:pe,width:d,height:o-(m?le:0),margin:{...ge,...v,...m&&b==="top"?{top:(ge.top||0)+le}:{}},xScale:x.xScale,yScale:x.yScale,horizontal:oe,pointerEventsDataKey:"nearest",children:[(0,s.jsx)(u.A,{columns:be.includes("y"),rows:be.includes("x"),numTicks:4}),U&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("defs",{"data-testid":"bar-chart-patterns",children:D.map((n,r)=>Ke(r,J(n,r)))}),(0,s.jsx)("style",{children:D.map((n,r)=>Ne(r,J(n,r)))})]}),ye&&(0,s.jsx)("style",{children:ye}),(0,s.jsx)(a.A,{padding:x.barGroup.padding,children:ue.map((n,r)=>(0,s.jsx)(ie.A,{dataKey:n?.label,data:n.data,yAccessor:x.accessors.yAccessor,xAccessor:x.accessors.xAccessor,colorAccessor:Ge(r)},n?.label))}),(0,s.jsx)(H.A,{...x.axis.x}),(0,s.jsx)(H.A,{...x.axis.y}),g&&(0,s.jsx)(ce.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:$||Ve,selectedIndex:R,tooltipRef:ke,keyboardFocusedClassName:f["bar-chart__tooltip--keyboard-focused"],series:t,mode:"individual"})]}),m&&(0,s.jsx)(y.s,{orientation:I,position:b,alignment:i,className:f["bar-chart__legend"],shape:c,ref:Te,chartId:p}),Ae]})})},ne=t=>(0,l.useContext)(X.m)?(0,s.jsx)(me,{...t}):(0,s.jsx)(X.S,{children:(0,s.jsx)(me,{...t})});ne.displayName="BarChart";const Je=(0,j.E)(ne,{Legend:y.s}),we=(0,j.E)((0,K.F)(ne),{Legend:y.s})},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(Z,P,e)=>{e.d(P,{A:()=>u});var _=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),W=e.n(_),S=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),V=e.n(S),L=V()(W());L.push([Z.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),L.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const u=L}}]);
