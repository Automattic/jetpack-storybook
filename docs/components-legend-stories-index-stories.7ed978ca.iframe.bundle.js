"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx":(q,M,e)=>{e.r(M),e.d(M,{AlignmentOptions:()=>F,CustomShape:()=>T,DashboardExample:()=>A,Horizontal:()=>S,StandaloneLegendWithChartId:()=>E,Vertical:()=>_,WithBarChart:()=>w,WithLineChart:()=>L,__namedExportsOrder:()=>J,default:()=>$});var C=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),P=e("../charts/src/components/bar-chart/bar-chart.tsx"),D=e("../charts/src/components/line-chart/line-chart.tsx"),N=e("../charts/src/components/pie-chart/pie-chart.tsx"),h=e("../charts/src/components/legend/legend.tsx"),W=e("../charts/src/components/legend/use-chart-legend-data.ts"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const $={title:"JS Packages/Charts/Composites/Legend",component:h.s,parameters:{layout:"centered",docs:{description:{component:`
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
`}}}},O=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],R=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],l=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],S={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},_={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},V=()=>{const U=(0,W.B)(O,{showValues:!1});return(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,a.jsx)(D.A,{data:O,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,a.jsx)(h.s,{items:U,orientation:"horizontal"})]})},L={render:()=>(0,a.jsx)(C.Sx,{children:(0,a.jsx)(V,{})}),parameters:{docs:{description:{story:"Legend used with LineChart data, positioned independently below the chart."}}}},K=()=>{const U=(0,W.B)(R);return(0,a.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,a.jsx)(P.A,{data:R,showLegend:!1,width:400,height:300}),(0,a.jsx)(h.s,{items:U,orientation:"vertical"})]})},w={render:()=>(0,a.jsx)(C.Sx,{children:(0,a.jsx)(K,{})}),parameters:{docs:{description:{story:"Legend used with BarChart data, positioned vertically beside the chart."}}}},ee=()=>(0,a.jsx)(C.Sx,{children:(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,a.jsx)(D.A,{chartId:"standalone-legend-chart",data:O,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,a.jsx)(h.s,{chartId:"standalone-legend-chart",orientation:"horizontal"})]})}),E={render:()=>(0,a.jsx)(ee,{}),parameters:{docs:{source:{code:`<GlobalChartsProvider>
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
`}}}},ae=()=>(0,a.jsx)(C.Sx,{children:(0,a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,a.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,a.jsx)(D.A,{chartId:"dashboard-revenue",data:O,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,a.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,a.jsx)(P.A,{chartId:"dashboard-sales",data:R,showLegend:!1,width:280,height:200})]}),(0,a.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,a.jsx)(N.A,{chartId:"dashboard-devices",data:l,showLegend:!1})]})]})]}),(0,a.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,a.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,a.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,a.jsx)(h.s,{chartId:"dashboard-revenue",orientation:"vertical"})]}),(0,a.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,a.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,a.jsx)(h.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,a.jsx)(h.s,{chartId:"dashboard-devices",orientation:"vertical"})]})]})]})}),A={render:()=>(0,a.jsx)(ae,{}),parameters:{layout:"fullscreen",docs:{description:{story:`
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
`}}}},F={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignment:"start"},parameters:{docs:{description:{story:"Legend with custom alignment options."}}}},T={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"},parameters:{docs:{description:{story:"Legend with circle shape instead of default rectangle."}}}},J=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","CustomShape"];S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}}},"../charts/src/components/bar-chart/bar-chart.tsx":(q,M,e)=>{e.d(M,{A:()=>De});var C=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),P=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),D=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),N=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),h=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),W=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),a=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),ie=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),$=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),O=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),R=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),S=e("../charts/src/hooks/use-xychart-theme.ts"),_=e("../charts/src/providers/chart-context/utils.ts"),V=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),L=e("../charts/src/utils/create-composition.ts"),K=e("../charts/src/components/legend/legend.tsx"),w=e("../charts/src/components/legend/use-chart-legend-data.ts"),ee=e("../charts/src/components/shared/single-chart-context.tsx"),E=e("../charts/src/components/shared/use-chart-data-transform.ts"),ae=e("../charts/src/components/shared/use-chart-margin.tsx"),A=e("../charts/src/components/shared/use-element-height.ts");const F=(t,m={enabled:!1})=>{const{enabled:d,minValueRatio:o=.6,maxValueRatio:f=.008}=m;return(0,l.useMemo)(()=>{if(!d)return t;const v=[];for(const i of t)for(const c of i.data)c.value!==null&&c.value!==0&&v.push(c.value);if(v.length===0)return t;const g=v.map(Math.abs),p=Math.min(...g),j=Math.max(...g),b=Math.min(p*o,j*f);return t.map(i=>({...i,data:i.data.map(c=>c.value===0?{...c,visualValue:b}:c)}))},[t,d,o,f])};var T=e("../charts/src/components/shared/with-responsive.tsx"),J=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),U=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ye=e.n(U),ce=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),te={};te.insert="head",te.singleton=!1;var Xe=ye()(ce.A,te);const y=ce.A.locals||{};var fe=e("../number-formatters/src/index.ts");const Ce=t=>new Date(t).toLocaleDateString(void 0,{month:"short",day:"numeric"}),_e=t=>typeof t.paddingInner=="number"?t.paddingInner:0;function Le(t,m,d={}){const o=(0,l.useMemo)(()=>{const f={type:"band",padding:.2,paddingInner:.1},v={type:"linear",nice:!0,zero:!1},g=t?.[0]?.data?.[0]?.label?i=>i:Ce,p=fe.qe,j=i=>i?.label||i?.date,b=i=>{const c=i;return c?.visualValue!==void 0?c.visualValue:i?.value};return{vertical:{xTickFormat:g,yTickFormat:p,tooltipLabelFormatter:g,xAccessor:j,yAccessor:b,gridVisibility:"x",xScale:f,yScale:v},horizontal:{xTickFormat:p,yTickFormat:g,tooltipLabelFormatter:g,xAccessor:b,yAccessor:j,gridVisibility:"y",xScale:v,yScale:f}}},[t]);return(0,l.useMemo)(()=>{const f=m?"horizontal":"vertical",{xTickFormat:v,yTickFormat:g,tooltipLabelFormatter:p,xAccessor:j,yAccessor:b,gridVisibility:i,xScale:c,yScale:re}=o[f],Q={...c,...d.xScale||{}},Z={...re,...d.yScale||{}},H=m?d.axis?.y?.tickFormat:d.axis?.x?.tickFormat;return{gridVisibility:i,xScale:Q,yScale:Z,accessors:{xAccessor:j,yAccessor:b},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:v,...d.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:g,...d.axis?.y||{}}},barGroup:{padding:_e(m?Z:Q)},tooltip:{labelFormatter:H||p}}},[o,d,m])}var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const je=O.__,Ie=t=>t?.length?t.some(d=>d.data.some(o=>isNaN(o.value)||o.value===null||o.value===void 0||!o.label&&(!("date"in o&&o.date)||isNaN(o.date.getTime()))))?"Invalid data":null:"No data available",ne=(t,m)=>`bar-pattern-${t}-${m}`,he=({data:t,chartId:m,width:d,height:o=400,className:f,margin:v,withTooltips:g=!1,showLegend:p=!1,legendOrientation:j="horizontal",legendPosition:b="bottom",legendAlignment:i="center",legendShape:c="rect",gridVisibility:re,renderTooltip:Q,options:Z={},orientation:H="vertical",withPatterns:X=!1,showZeroValues:Se=!1,children:we})=>{const oe=H==="horizontal",u=(0,_.R)(m),me=(0,S.O)(t),I=(0,E.E)(t),pe=F(I,{enabled:Se}),Ee=(0,w.B)(I),x=Le(pe,oe,Z),ue=(0,ae.a)(o,x,I,me,oe),[Ae,le]=(0,A.v)(),ge=(0,l.useRef)(null),[z,Fe]=(0,l.useState)(void 0),[Te,Be]=(0,l.useState)(!1),Me=Math.max(0,...t.map(s=>s.data?.length||0))*t.length,{tooltipRef:Pe,onChartFocus:We,onChartBlur:Oe,onChartKeyDown:Re}=(0,J.JZ)({selectedIndex:z,setSelectedIndex:Fe,isNavigating:Te,setIsNavigating:Be,chartRef:ge,totalPoints:Me}),{resolveGroupColor:xe}=(0,V.jT)(),Y=(0,l.useCallback)((s,r)=>xe({group:s.group,index:r,overrideColor:s.options?.stroke}),[xe]),ze=(0,l.useCallback)(s=>()=>X?`url(#${ne(u,s)})`:Y(I[s],s),[X,Y,I,u]),ke=(0,l.useCallback)(({tooltipData:s})=>{const r=s?.nearestDatum?.datum;return r?(0,n.jsxs)("div",{className:y["bar-chart__tooltip"],children:[(0,n.jsx)("div",{className:y["bar-chart__tooltip-header"],children:s?.nearestDatum?.key}),(0,n.jsxs)("div",{className:y["bar-chart__tooltip-row"],children:[(0,n.jsxs)("span",{className:y["bar-chart__tooltip-label"],children:[x.tooltip.labelFormatter(r.label||(r.date?r.date.getTime():0),0,[]),":"]}),(0,n.jsx)("span",{className:y["bar-chart__tooltip-value"],children:r.value})]})]}):null},[x.tooltip]),Ge=(0,l.useCallback)((s,r)=>{const k=s%4,B=ne(u,s),G={id:B,stroke:"white",strokeWidth:1,background:r};switch(k){case 0:default:return(0,n.jsx)(C.A,{...G,width:5,height:5,orientation:["diagonal"]},B);case 1:return(0,n.jsx)(P.A,{...G,width:6,height:6,fill:"white"},B);case 2:return(0,n.jsx)(D.A,{...G,width:4,height:4},B);case 3:return(0,n.jsx)(N.A,{...G,size:8,height:3},B)}},[u]),Ne=(0,l.useCallback)((s,r)=>`
			.visx-bar[fill="url(#${ne(u,s)})"] {
				stroke: ${r};
				stroke-width: 1;
				}
			`,[u]),Ve=(0,l.useCallback)(()=>{if(z===void 0)return"";const s=Math.max(...t.map(He=>He.data.length)),r=Math.floor(z/t.length),k=z%t.length;if(r>=s||k>=t.length)return"";const B=t[k];if(r>=B.data.length)return"";const G=k*s+r;return`
			.bar-chart[data-chart-id="bar-chart-${u}"] .visx-bar-group .visx-bar:nth-child(${G+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[z,t,u]),de=Ie(I),Ke=!de,Ue=(0,l.useMemo)(()=>({orientation:H,withPatterns:X}),[H,X]);if((0,_.t)({chartId:u,legendItems:Ee,chartType:"bar",isDataValid:Ke,metadata:Ue}),de)return(0,n.jsx)("div",{className:(0,R.A)("bar-chart",y["bar-chart"]),children:de});const ve=re??x.gridVisibility,be=Ve();return(0,n.jsx)(ee.ON.Provider,{value:{chartId:u,chartWidth:d,chartHeight:o-(p?le:0)},children:(0,n.jsxs)("div",{className:(0,R.A)("bar-chart",y["bar-chart"],f),"data-testid":"bar-chart",role:"grid","aria-label":je("Bar chart","jetpack-charts"),style:{width:d,height:o,display:"flex",flexDirection:p&&b==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:Re,onFocus:We,onBlur:Oe,ref:ge,"data-chart-id":`bar-chart-${u}`,children:[(0,n.jsxs)(h.A,{theme:me,width:d,height:o-(p?le:0),margin:{...ue,...v,...p&&b==="top"?{top:(ue.top||0)+le}:{}},xScale:x.xScale,yScale:x.yScale,horizontal:oe,pointerEventsDataKey:"nearest",children:[(0,n.jsx)(W.A,{columns:ve.includes("y"),rows:ve.includes("x"),numTicks:4}),X&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("defs",{"data-testid":"bar-chart-patterns",children:I.map((s,r)=>Ge(r,Y(s,r)))}),(0,n.jsx)("style",{children:I.map((s,r)=>Ne(r,Y(s,r)))})]}),be&&(0,n.jsx)("style",{children:be}),(0,n.jsx)(a.A,{padding:x.barGroup.padding,children:pe.map((s,r)=>(0,n.jsx)(ie.A,{dataKey:s?.label,data:s.data,yAccessor:x.accessors.yAccessor,xAccessor:x.accessors.xAccessor,colorAccessor:ze(r)},s?.label))}),(0,n.jsx)($.A,{...x.axis.x}),(0,n.jsx)($.A,{...x.axis.y}),g&&(0,n.jsx)(J.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:Q||ke,selectedIndex:z,tooltipRef:Pe,keyboardFocusedClassName:y["bar-chart__tooltip--keyboard-focused"],series:t,mode:"individual"})]}),p&&(0,n.jsx)(K.s,{orientation:j,position:b,alignment:i,className:y["bar-chart__legend"],shape:c,ref:Ae,chartId:u}),we]})})},se=t=>(0,l.useContext)(V.mJ)?(0,n.jsx)(he,{...t}):(0,n.jsx)(V.Sx,{children:(0,n.jsx)(he,{...t})});se.displayName="BarChart";const $e=(0,L.E)(se,{Legend:K.s}),De=(0,L.E)((0,T.F)(se),{Legend:K.s})},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(q,M,e)=>{e.d(M,{A:()=>W});var C=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),P=e.n(C),D=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),N=e.n(D),h=N()(P());h.push([q.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),h.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const W=h}}]);
