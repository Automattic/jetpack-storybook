"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx":(Y,M,e)=>{e.r(M),e.d(M,{AlignmentOptions:()=>F,CustomShape:()=>T,DashboardExample:()=>A,Horizontal:()=>S,StandaloneLegendWithChartId:()=>E,Vertical:()=>w,WithBarChart:()=>y,WithLineChart:()=>L,__namedExportsOrder:()=>ae,default:()=>H});var _=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),P=e("../charts/src/components/bar-chart/bar-chart.tsx"),D=e("../charts/src/components/line-chart/line-chart.tsx"),G=e("../charts/src/components/pie-chart/pie-chart.tsx"),h=e("../charts/src/components/legend/legend.tsx"),W=e("../charts/src/components/legend/use-chart-legend-data.ts"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const H={title:"JS Packages/Charts/Composites/Legend",component:h.s,parameters:{layout:"centered",docs:{description:{component:`
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
`}}}},O=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],R=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],l=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],S={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},w={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},X=()=>{const z=(0,W.B)(O,{showValues:!1});return(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,a.jsx)(D.A,{data:O,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,a.jsx)(h.s,{items:z,orientation:"horizontal"})]})},L={render:()=>(0,a.jsx)(_.Sx,{children:(0,a.jsx)(X,{})}),parameters:{docs:{description:{story:"Legend used with LineChart data, positioned independently below the chart."}}}},$=()=>{const z=(0,W.B)(R);return(0,a.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,a.jsx)(P.A,{data:R,showLegend:!1,width:400,height:300}),(0,a.jsx)(h.s,{items:z,orientation:"vertical"})]})},y={render:()=>(0,a.jsx)(_.Sx,{children:(0,a.jsx)($,{})}),parameters:{docs:{description:{story:"Legend used with BarChart data, positioned vertically beside the chart."}}}},q=()=>(0,a.jsx)(_.Sx,{children:(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,a.jsx)(D.A,{chartId:"standalone-legend-chart",data:O,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,a.jsx)(h.s,{chartId:"standalone-legend-chart",orientation:"horizontal"})]})}),E={render:()=>(0,a.jsx)(q,{}),parameters:{docs:{source:{code:`<GlobalChartsProvider>
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
`}}}},ee=()=>(0,a.jsx)(_.Sx,{children:(0,a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,a.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,a.jsx)(D.A,{chartId:"dashboard-revenue",data:O,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,a.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,a.jsx)(P.A,{chartId:"dashboard-sales",data:R,showLegend:!1,width:280,height:200})]}),(0,a.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,a.jsx)(G.A,{chartId:"dashboard-devices",data:l,showLegend:!1})]})]})]}),(0,a.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,a.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,a.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,a.jsx)(h.s,{chartId:"dashboard-revenue",orientation:"vertical"})]}),(0,a.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,a.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,a.jsx)(h.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,a.jsx)(h.s,{chartId:"dashboard-devices",orientation:"vertical"})]})]})]})}),A={render:()=>(0,a.jsx)(ee,{}),parameters:{layout:"fullscreen",docs:{description:{story:`
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
`}}}},F={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignment:"start"},parameters:{docs:{description:{story:"Legend with custom alignment options."}}}},T={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"},parameters:{docs:{description:{story:"Legend with circle shape instead of default rectangle."}}}},ae=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","CustomShape"];S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}}},"../charts/src/components/bar-chart/bar-chart.tsx":(Y,M,e)=>{e.d(M,{A:()=>we});var _=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),P=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),D=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),G=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),h=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),W=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),a=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),ce=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),H=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),O=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),R=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),S=e("../charts/src/hooks/use-global-chart-theme.ts"),w=e("../charts/src/hooks/use-xychart-theme.ts"),X=e("../charts/src/providers/chart-context/utils.ts"),L=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),$=e("../charts/src/utils/create-composition.ts"),y=e("../charts/src/components/legend/legend.tsx"),q=e("../charts/src/components/legend/use-chart-legend-data.ts"),E=e("../charts/src/components/shared/single-chart-context.tsx"),ee=e("../charts/src/components/shared/use-chart-data-transform.ts"),A=e("../charts/src/components/shared/use-chart-margin.tsx"),F=e("../charts/src/components/shared/use-element-height.ts");const T=(t,m={enabled:!1})=>{const{enabled:d,minValueRatio:o=.6,maxValueRatio:C=.008}=m;return(0,l.useMemo)(()=>{if(!d)return t;const v=[];for(const i of t)for(const c of i.data)c.value!==null&&c.value!==0&&v.push(c.value);if(v.length===0)return t;const g=v.map(Math.abs),p=Math.min(...g),j=Math.max(...g),b=Math.min(p*o,j*C);return t.map(i=>({...i,data:i.data.map(c=>c.value===0?{...c,visualValue:b}:c)}))},[t,d,o,C])};var ae=e("../charts/src/components/shared/with-responsive.tsx"),z=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),fe=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Ce=e.n(fe),he=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),te={};te.insert="head",te.singleton=!1;var $e=Ce()(he.A,te);const f=he.A.locals||{};var _e=e("../number-formatters/src/index.ts");const Le=t=>new Date(t).toLocaleDateString(void 0,{month:"short",day:"numeric"}),je=t=>typeof t.paddingInner=="number"?t.paddingInner:0;function Ie(t,m,d={}){const o=(0,l.useMemo)(()=>{const C={type:"band",padding:.2,paddingInner:.1},v={type:"linear",nice:!0,zero:!1},g=t?.[0]?.data?.[0]?.label?i=>i:Le,p=_e.qe,j=i=>i?.label||i?.date,b=i=>{const c=i;return c?.visualValue!==void 0?c.visualValue:i?.value};return{vertical:{xTickFormat:g,yTickFormat:p,tooltipLabelFormatter:g,xAccessor:j,yAccessor:b,gridVisibility:"x",xScale:C,yScale:v},horizontal:{xTickFormat:p,yTickFormat:g,tooltipLabelFormatter:g,xAccessor:b,yAccessor:j,gridVisibility:"y",xScale:v,yScale:C}}},[t]);return(0,l.useMemo)(()=>{const C=m?"horizontal":"vertical",{xTickFormat:v,yTickFormat:g,tooltipLabelFormatter:p,xAccessor:j,yAccessor:b,gridVisibility:i,xScale:c,yScale:re}=o[C],J={...c,...d.xScale||{}},Q={...re,...d.yScale||{}},K=m?d.axis?.y?.tickFormat:d.axis?.x?.tickFormat;return{gridVisibility:i,xScale:J,yScale:Q,accessors:{xAccessor:j,yAccessor:b},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:v,...d.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:g,...d.axis?.y||{}}},barGroup:{padding:je(m?Q:J)},tooltip:{labelFormatter:K||p}}},[o,d,m])}var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const De=O.__,Se=t=>t?.length?t.some(d=>d.data.some(o=>isNaN(o.value)||o.value===null||o.value===void 0||!o.label&&(!("date"in o&&o.date)||isNaN(o.date.getTime()))))?"Invalid data":null:"No data available",se=(t,m)=>`bar-pattern-${t}-${m}`,me=({data:t,chartId:m,width:d,height:o=400,className:C,margin:v,withTooltips:g=!1,showLegend:p=!1,legendOrientation:j="horizontal",legendPosition:b="bottom",legendAlignment:i="center",legendShape:c="rect",gridVisibility:re,renderTooltip:J,options:Q={},orientation:K="vertical",withPatterns:U=!1,showZeroValues:Ee=!1,children:Ae})=>{const oe=K==="horizontal",u=(0,X.R)(m),le=(0,S.u)(),pe=(0,w.O)(t),I=(0,ee.E)(t),ue=T(I,{enabled:Ee}),ge=(0,q.B)(I),x=Ie(ue,oe,Q),xe=(0,A.a)(o,x,I,pe,oe),[Fe,de]=(0,F.v)(),ve=(0,l.useRef)(null),[k,Te]=(0,l.useState)(void 0),[Be,Me]=(0,l.useState)(!1),Pe=Math.max(0,...t.map(n=>n.data?.length||0))*t.length,{tooltipRef:We,onChartFocus:Oe,onChartBlur:Re,onChartKeyDown:ze}=(0,z.JZ)({selectedIndex:k,setSelectedIndex:Te,isNavigating:Be,setIsNavigating:Me,chartRef:ve,totalPoints:Pe}),Z=(0,l.useCallback)((n,r)=>n?.options?.stroke||le.colors[r%le.colors.length],[le]),ke=(0,l.useCallback)(n=>()=>U?`url(#${se(u,n)})`:Z(I[n],n),[U,Z,I,u]),Ne=(0,l.useCallback)(({tooltipData:n})=>{const r=n?.nearestDatum?.datum;return r?(0,s.jsxs)("div",{className:f["bar-chart__tooltip"],children:[(0,s.jsx)("div",{className:f["bar-chart__tooltip-header"],children:n?.nearestDatum?.key}),(0,s.jsxs)("div",{className:f["bar-chart__tooltip-row"],children:[(0,s.jsxs)("span",{className:f["bar-chart__tooltip-label"],children:[x.tooltip.labelFormatter(r.label||(r.date?r.date.getTime():0),0,[]),":"]}),(0,s.jsx)("span",{className:f["bar-chart__tooltip-value"],children:r.value})]})]}):null},[x.tooltip]),Ve=(0,l.useCallback)((n,r)=>{const N=n%4,B=se(u,n),V={id:B,stroke:"white",strokeWidth:1,background:r};switch(N){case 0:default:return(0,s.jsx)(_.A,{...V,width:5,height:5,orientation:["diagonal"]},B);case 1:return(0,s.jsx)(P.A,{...V,width:6,height:6,fill:"white"},B);case 2:return(0,s.jsx)(D.A,{...V,width:4,height:4},B);case 3:return(0,s.jsx)(G.A,{...V,size:8,height:3},B)}},[u]),Ge=(0,l.useCallback)((n,r)=>`
			.visx-bar[fill="url(#${se(u,n)})"] {
				stroke: ${r};
				stroke-width: 1;
				}
			`,[u]),Ke=(0,l.useCallback)(()=>{if(k===void 0)return"";const n=Math.max(...t.map(Xe=>Xe.data.length)),r=Math.floor(k/t.length),N=k%t.length;if(r>=n||N>=t.length)return"";const B=t[N];if(r>=B.data.length)return"";const V=N*n+r;return`
			.bar-chart[data-chart-id="bar-chart-${u}"] .visx-bar-group .visx-bar:nth-child(${V+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[k,t,u]),ie=Se(I),Ue=!ie,He=(0,l.useMemo)(()=>({orientation:K,withPatterns:U}),[K,U]);if((0,X.t)({chartId:u,legendItems:ge,chartType:"bar",isDataValid:Ue,metadata:He}),ie)return(0,s.jsx)("div",{className:(0,R.A)("bar-chart",f["bar-chart"]),children:ie});const be=re??x.gridVisibility,ye=Ke();return(0,s.jsx)(E.ON.Provider,{value:{chartId:u,chartWidth:d,chartHeight:o-(p?de:0)},children:(0,s.jsxs)("div",{className:(0,R.A)("bar-chart",f["bar-chart"],C),"data-testid":"bar-chart",role:"grid","aria-label":De("Bar chart","jetpack-charts"),style:{width:d,height:o,display:"flex",flexDirection:p&&b==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:ze,onFocus:Oe,onBlur:Re,ref:ve,"data-chart-id":`bar-chart-${u}`,children:[(0,s.jsxs)(h.A,{theme:pe,width:d,height:o-(p?de:0),margin:{...xe,...v,...p&&b==="top"?{top:(xe.top||0)+de}:{}},xScale:x.xScale,yScale:x.yScale,horizontal:oe,pointerEventsDataKey:"nearest",children:[(0,s.jsx)(W.A,{columns:be.includes("y"),rows:be.includes("x"),numTicks:4}),U&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("defs",{"data-testid":"bar-chart-patterns",children:I.map((n,r)=>Ve(r,Z(n,r)))}),(0,s.jsx)("style",{children:I.map((n,r)=>Ge(r,Z(n,r)))})]}),ye&&(0,s.jsx)("style",{children:ye}),(0,s.jsx)(a.A,{padding:x.barGroup.padding,children:ue.map((n,r)=>(0,s.jsx)(ce.A,{dataKey:n?.label,data:n.data,yAccessor:x.accessors.yAccessor,xAccessor:x.accessors.xAccessor,colorAccessor:ke(r)},n?.label))}),(0,s.jsx)(H.A,{...x.axis.x}),(0,s.jsx)(H.A,{...x.axis.y}),g&&(0,s.jsx)(z.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:J||Ne,selectedIndex:k,tooltipRef:We,keyboardFocusedClassName:f["bar-chart__tooltip--keyboard-focused"],series:t,mode:"individual"})]}),p&&(0,s.jsx)(y.s,{items:ge,orientation:j,position:b,alignment:i,className:f["bar-chart__legend"],shape:c,ref:Fe,chartId:u}),Ae]})})},ne=t=>(0,l.useContext)(L.mJ)?(0,s.jsx)(me,{...t}):(0,s.jsx)(L.Sx,{children:(0,s.jsx)(me,{...t})});ne.displayName="BarChart";const Je=(0,$.E)(ne,{Legend:y.s}),we=(0,$.E)((0,ae.F)(ne),{Legend:y.s})},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(Y,M,e)=>{e.d(M,{A:()=>W});var _=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),P=e.n(_),D=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),G=e.n(D),h=G()(P());h.push([Y.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),h.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const W=h}}]);
