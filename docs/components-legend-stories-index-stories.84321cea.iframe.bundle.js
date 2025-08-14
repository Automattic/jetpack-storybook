"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx":(ee,T,e)=>{e.r(T),e.d(T,{AlignmentOptions:()=>s,CustomShape:()=>p,DashboardExample:()=>r,Horizontal:()=>B,StandaloneLegendWithChartId:()=>l,Vertical:()=>O,WithBarChart:()=>t,WithLineChart:()=>F,__namedExportsOrder:()=>h,default:()=>P});var y=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),w=e("../charts/src/providers/theme/theme-provider.tsx"),L=e("../charts/src/components/bar-chart/bar-chart.tsx"),m=e("../charts/src/components/line-chart/line-chart.tsx"),C=e("../charts/src/components/pie-chart/pie-chart.tsx"),_=e("../charts/src/components/legend/legend.tsx"),b=e("../charts/src/components/legend/use-chart-legend-data.ts"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const P={title:"JS Packages/Charts/Composites/Legend",component:_.s,parameters:{layout:"centered",docs:{description:{component:`
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
`}}}},N=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],g=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],re=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],B={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},O={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},oe=()=>{const x=(0,w.RW)(),j=(0,b.B)(N,x,{showValues:!1});return(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,n.jsx)(m.A,{data:N,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,n.jsx)(_.s,{items:j,orientation:"horizontal"})]})},F={render:()=>(0,n.jsx)(oe,{}),parameters:{docs:{description:{story:"Legend used with LineChart data, positioned independently below the chart."}}}},a=()=>{const x=(0,w.RW)(),j=(0,b.B)(g,x);return(0,n.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,n.jsx)(L.A,{data:g,showLegend:!1,width:400,height:300}),(0,n.jsx)(_.s,{items:j,orientation:"vertical"})]})},t={render:()=>(0,n.jsx)(a,{}),parameters:{docs:{description:{story:"Legend used with BarChart data, positioned vertically beside the chart."}}}},i=()=>(0,n.jsx)(y.Sx,{children:(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,n.jsx)(m.A,{chartId:"standalone-legend-chart",data:N,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,n.jsx)(_.s,{chartId:"standalone-legend-chart",orientation:"horizontal"})]})}),l={render:()=>(0,n.jsx)(i,{}),parameters:{docs:{source:{code:`<GlobalChartsProvider>
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
`}}}},c=()=>(0,n.jsx)(y.Sx,{children:(0,n.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,n.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,n.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,n.jsx)(m.A,{chartId:"dashboard-revenue",data:N,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,n.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,n.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,n.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,n.jsx)(L.A,{chartId:"dashboard-sales",data:g,showLegend:!1,width:280,height:200})]}),(0,n.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,n.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,n.jsx)(C.A,{chartId:"dashboard-devices",data:re,showLegend:!1})]})]})]}),(0,n.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,n.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,n.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,n.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,n.jsx)(_.s,{chartId:"dashboard-revenue",orientation:"vertical"})]}),(0,n.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,n.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,n.jsx)(_.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,n.jsx)(_.s,{chartId:"dashboard-devices",orientation:"vertical"})]})]})]})}),r={render:()=>(0,n.jsx)(c,{}),parameters:{layout:"fullscreen",docs:{description:{story:`
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
`}}}},s={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignment:"start"},parameters:{docs:{description:{story:"Legend with custom alignment options."}}}},p={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"},parameters:{docs:{description:{story:"Legend with circle shape instead of default rectangle."}}}},h=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","CustomShape"];B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <WithLineChartData />,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with LineChart data, positioned independently below the chart.'
      }
    }
  }
}`,...F.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <WithBarChartData />,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with BarChart data, positioned vertically beside the chart.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js":(ee,T,e)=>{e.d(T,{A:()=>F});var y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),w=e("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),L=e.n(w),m=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),C=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),_=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function b(a,t){a(t)}function n(a){var t=a===void 0?{}:a,i=t.innerRadius,l=t.outerRadius,c=t.cornerRadius,r=t.startAngle,s=t.endAngle,p=t.padAngle,h=t.padRadius,x=(0,C.A)();return i!=null&&b(x.innerRadius,i),l!=null&&b(x.outerRadius,l),c!=null&&b(x.cornerRadius,c),r!=null&&b(x.startAngle,r),s!=null&&b(x.endAngle,s),p!=null&&b(x.padAngle,p),h!=null&&b(x.padRadius,h),x}function G(a){var t=a===void 0?{}:a,i=t.x,l=t.x0,c=t.x1,r=t.y,s=t.y0,p=t.y1,h=t.defined,x=t.curve,j=d3Area();return i&&setNumberOrNumberAccessor(j.x,i),l&&setNumberOrNumberAccessor(j.x0,l),c&&setNumberOrNumberAccessor(j.x1,c),r&&setNumberOrNumberAccessor(j.y,r),s&&setNumberOrNumberAccessor(j.y0,s),p&&setNumberOrNumberAccessor(j.y1,p),h&&j.defined(h),x&&j.curve(x),j}function P(a){var t=a===void 0?{}:a,i=t.x,l=t.y,c=t.defined,r=t.curve,s=d3Line();return i&&setNumberOrNumberAccessor(s.x,i),l&&setNumberOrNumberAccessor(s.y,l),c&&s.defined(c),r&&s.curve(r),s}function N(a){var t=a===void 0?{}:a,i=t.startAngle,l=t.endAngle,c=t.padAngle,r=t.value,s=t.sort,p=t.sortValues,h=(0,_.A)();return(s===null||s!=null)&&h.sort(s),(p===null||p!=null)&&h.sortValues(p),r!=null&&h.value(r),c!=null&&b(h.padAngle,c),i!=null&&b(h.startAngle,i),l!=null&&b(h.endAngle,l),h}function g(a){var t=a===void 0?{}:a,i=t.angle,l=t.radius,c=t.defined,r=t.curve,s=d3RadialLine();return i&&setNumberOrNumberAccessor(s.angle,i),l&&setNumberOrNumberAccessor(s.radius,l),c&&s.defined(c),r&&s.curve(r),s}function re(a){var t=a.keys,i=a.value,l=a.order,c=a.offset,r=d3Stack();return t&&r.keys(t),i&&setNumberOrNumberAccessor(r.value,i),l&&r.order(stackOrder(l)),c&&r.offset(stackOffset(c)),r}var B=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function O(){return O=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(a[l]=i[l])}return a},O.apply(this,arguments)}function oe(a,t){if(a==null)return{};var i={},l=Object.keys(a),c,r;for(r=0;r<l.length;r++)c=l[r],!(t.indexOf(c)>=0)&&(i[c]=a[c]);return i}function F(a){var t=a.className,i=a.top,l=a.left,c=a.data,r=c===void 0?[]:c,s=a.centroid,p=a.innerRadius,h=p===void 0?0:p,x=a.outerRadius,j=a.cornerRadius,v=a.startAngle,le=a.endAngle,A=a.padAngle,W=a.padRadius,J=a.pieSort,de=a.pieSortValues,te=a.pieValue,d=a.children,ie=a.fill,z=ie===void 0?"":ie,H=oe(a,B),X=n({innerRadius:h,outerRadius:x,cornerRadius:j,padRadius:W}),ae=N({startAngle:v,endAngle:le,padAngle:A,value:te,sort:J,sortValues:de}),ce=ae(r);return d?y.createElement(y.Fragment,null,d({arcs:ce,path:X,pie:ae})):y.createElement(m.A,{className:"visx-pie-arcs-group",top:i,left:l},ce.map(function(ue,o){return y.createElement("g",{key:"pie-arc-"+o},y.createElement("path",O({className:L()("visx-pie-arc",t),d:X(ue)||"",fill:z==null||typeof z=="string"?z:z(ue)},H)),s?.(X.centroid(ue),ue))}))}},"../charts/src/components/bar-chart/bar-chart.tsx":(ee,T,e)=>{e.d(T,{A:()=>ue});var y=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),w=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),L=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),m=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),C=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),_=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),b=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),n=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),G=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),P=e("../../../node_modules/.pnpm/@wordpress+i18n@6.0.0/node_modules/@wordpress/i18n/build-module/index.js"),N=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),re=e("../charts/src/providers/chart-context/utils.ts"),B=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),O=e("../charts/src/providers/theme/theme-provider.tsx"),oe=e("../charts/src/utils/create-composition.ts"),F=e("../charts/src/components/legend/legend.tsx"),a=e("../charts/src/components/legend/use-chart-legend-data.ts"),t=e("../charts/src/components/shared/single-chart-context.tsx"),i=e("../charts/src/components/shared/use-chart-data-transform.ts"),l=e("../charts/src/components/shared/use-chart-margin.tsx"),c=e("../charts/src/components/shared/use-element-height.ts");const r=(o,R={enabled:!1})=>{const{enabled:D,minValueRatio:S=.6,maxValueRatio:Z=.008}=R;return(0,g.useMemo)(()=>{if(!D)return o;const $=[];for(const I of o)for(const E of I.data)E.value!==null&&E.value!==0&&$.push(E.value);if($.length===0)return o;const k=$.map(Math.abs),M=Math.min(...k),se=Math.max(...k),Y=Math.min(M*S,se*Z);return o.map(I=>({...I,data:I.data.map(E=>E.value===0?{...E,visualValue:Y}:E)}))},[o,D,S,Z])};var s=e("../charts/src/components/shared/with-responsive.tsx"),p=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),h=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),x=e.n(h),j=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),v={};v.insert="head",v.singleton=!1;var le=x()(j.A,v);const A=j.A.locals||{};var W=e("../number-formatters/src/index.ts");const J=o=>new Date(o).toLocaleDateString(void 0,{month:"short",day:"numeric"}),de=o=>typeof o.paddingInner=="number"?o.paddingInner:0;function te(o,R,D={}){const S=(0,g.useMemo)(()=>{const Z={type:"band",padding:.2,paddingInner:.1},$={type:"linear",nice:!0,zero:!1},k=o?.[0]?.data?.[0]?.label?I=>I:J,M=W.qe,se=I=>I?.label||I?.date,Y=I=>{const E=I;return E?.visualValue!==void 0?E.visualValue:I?.value};return{vertical:{xTickFormat:k,yTickFormat:M,tooltipLabelFormatter:k,xAccessor:se,yAccessor:Y,gridVisibility:"x",xScale:Z,yScale:$},horizontal:{xTickFormat:M,yTickFormat:k,tooltipLabelFormatter:k,xAccessor:Y,yAccessor:se,gridVisibility:"y",xScale:$,yScale:Z}}},[o]);return(0,g.useMemo)(()=>{const Z=R?"horizontal":"vertical",{xTickFormat:$,yTickFormat:k,tooltipLabelFormatter:M,xAccessor:se,yAccessor:Y,gridVisibility:I,xScale:E,yScale:ve}=S[Z],fe={...E,...D.xScale||{}},xe={...ve,...D.yScale||{}},pe=R?D.axis?.y?.tickFormat:D.axis?.x?.tickFormat;return{gridVisibility:I,xScale:fe,yScale:xe,accessors:{xAccessor:se,yAccessor:Y},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:$,...D.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:k,...D.axis?.y||{}}},barGroup:{padding:de(R?xe:fe)},tooltip:{labelFormatter:pe||M}}},[S,D,R])}var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ie=P.__,z=o=>o?.length?o.some(D=>D.data.some(S=>isNaN(S.value)||S.value===null||S.value===void 0||!S.label&&(!("date"in S&&S.date)||isNaN(S.date.getTime()))))?"Invalid data":null:"No data available",H=(o,R)=>`bar-pattern-${o}-${R}`,X=({data:o,chartId:R,width:D,height:S=400,className:Z,margin:$,withTooltips:k=!1,showLegend:M=!1,legendOrientation:se="horizontal",legendPosition:Y="bottom",legendAlignment:I="center",legendShape:E="rect",gridVisibility:ve,renderTooltip:fe,options:xe={},orientation:pe="vertical",withPatterns:he=!1,showZeroValues:_e=!1,children:Te})=>{const Ce=pe==="horizontal",V=(0,re.R)(R),Ae=(0,O.RW)(),ne=(0,O.Ox)(o),q=(0,i.E)(o),Le=r(q,{enabled:_e}),De=(0,a.B)(q,Ae),K=te(Le,Ce,xe),je=(0,l.a)(S,K,q,ne,Ce),[Q,U]=(0,c.v)(),Ie=(0,g.useRef)(null),[me,we]=(0,g.useState)(void 0),[Oe,Re]=(0,g.useState)(!1),Se=Math.max(0,...o.map(u=>u.data?.length||0))*o.length,{tooltipRef:Pe,onChartFocus:Ne,onChartBlur:Fe,onChartKeyDown:We}=(0,p.JZ)({selectedIndex:me,setSelectedIndex:we,isNavigating:Oe,setIsNavigating:Re,chartRef:Ie,totalPoints:Se}),Ee=(0,g.useCallback)((u,f)=>u?.options?.stroke||ne.colors[f%ne.colors.length],[ne]),ze=(0,g.useCallback)(u=>()=>he?`url(#${H(V,u)})`:Ee(q[u],u),[he,Ee,q,V]),ke=(0,g.useCallback)(({tooltipData:u})=>{const f=u?.nearestDatum?.datum;return f?(0,d.jsxs)("div",{className:A["bar-chart__tooltip"],children:[(0,d.jsx)("div",{className:A["bar-chart__tooltip-header"],children:u?.nearestDatum?.key}),(0,d.jsxs)("div",{className:A["bar-chart__tooltip-row"],children:[(0,d.jsxs)("span",{className:A["bar-chart__tooltip-label"],children:[K.tooltip.labelFormatter(f.label||(f.date?f.date.getTime():0),0,[]),":"]}),(0,d.jsx)("span",{className:A["bar-chart__tooltip-value"],children:f.value})]})]}):null},[K.tooltip]),Ke=(0,g.useCallback)((u,f)=>{const be=u%4,ge=H(V,u),ye={id:ge,stroke:"white",strokeWidth:1,background:f};switch(be){case 0:default:return(0,d.jsx)(y.A,{...ye,width:5,height:5,orientation:["diagonal"]},ge);case 1:return(0,d.jsx)(w.A,{...ye,width:6,height:6,fill:"white"},ge);case 2:return(0,d.jsx)(L.A,{...ye,width:4,height:4},ge);case 3:return(0,d.jsx)(m.A,{...ye,size:8,height:3},ge)}},[V]),Ue=(0,g.useCallback)((u,f)=>`
			.visx-bar[fill="url(#${H(V,u)})"] {
				stroke: ${f};
				stroke-width: 1;
				}
			`,[V]),Ge=(0,g.useCallback)(()=>{if(me===void 0)return"";const u=Math.max(...o.map($e=>$e.data.length)),f=Math.floor(me/o.length),be=me%o.length;if(f>=u||be>=o.length)return"";const ge=o[be];if(f>=ge.data.length)return"";const ye=be*u+f;return`
			.bar-chart[data-chart-id="bar-chart-${V}"] .visx-bar-group .visx-bar:nth-child(${ye+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[me,o,V]),Me=z(q),He=!Me,Xe=(0,g.useMemo)(()=>({orientation:pe,withPatterns:he}),[pe,he]);if((0,re.t)(V,De,Ae,"bar",He,Xe),Me)return(0,d.jsx)("div",{className:(0,N.A)("bar-chart",A["bar-chart"]),children:Me});const Be=ve??K.gridVisibility,Ve=Ge();return(0,d.jsx)(t.ON.Provider,{value:{chartId:V,chartWidth:D,chartHeight:S-(M?U:0)},children:(0,d.jsxs)("div",{className:(0,N.A)("bar-chart",A["bar-chart"],Z),"data-testid":"bar-chart",role:"grid","aria-label":ie("Bar chart","jetpack-charts"),style:{width:D,height:S,display:"flex",flexDirection:M&&Y==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:We,onFocus:Ne,onBlur:Fe,ref:Ie,"data-chart-id":`bar-chart-${V}`,children:[(0,d.jsxs)(C.A,{theme:ne,width:D,height:S-(M?U:0),margin:{...je,...$,...M&&Y==="top"?{top:(je.top||0)+U}:{}},xScale:K.xScale,yScale:K.yScale,horizontal:Ce,pointerEventsDataKey:"nearest",children:[(0,d.jsx)(_.A,{columns:Be.includes("y"),rows:Be.includes("x"),numTicks:4}),he&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("defs",{"data-testid":"bar-chart-patterns",children:q.map((u,f)=>Ke(f,Ee(u,f)))}),(0,d.jsx)("style",{children:q.map((u,f)=>Ue(f,Ee(u,f)))})]}),Ve&&(0,d.jsx)("style",{children:Ve}),(0,d.jsx)(b.A,{padding:K.barGroup.padding,children:Le.map((u,f)=>(0,d.jsx)(n.A,{dataKey:u?.label,data:u.data,yAccessor:K.accessors.yAccessor,xAccessor:K.accessors.xAccessor,colorAccessor:ze(f)},u?.label))}),(0,d.jsx)(G.A,{...K.axis.x}),(0,d.jsx)(G.A,{...K.axis.y}),k&&(0,d.jsx)(p.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:fe||ke,selectedIndex:me,tooltipRef:Pe,keyboardFocusedClassName:A["bar-chart__tooltip--keyboard-focused"],series:o,mode:"individual"})]}),M&&(0,d.jsx)(F.s,{items:De,orientation:se,position:Y,alignment:I,className:A["bar-chart__legend"],shape:E,ref:Q,chartId:V}),Te]})})},ae=o=>(0,g.useContext)(B.mJ)?(0,d.jsx)(X,{...o}):(0,d.jsx)(B.Sx,{children:(0,d.jsx)(X,{...o})});ae.displayName="BarChart";const ce=(0,oe.E)(ae,{Legend:F.s}),ue=(0,oe.E)((0,s.F)(ae),{Legend:F.s})},"../charts/src/components/pie-chart/pie-chart.tsx":(ee,T,e)=>{e.d(T,{A:()=>j});var y=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),w=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),L=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),C=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),_=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js");const n=({withTooltips:v})=>{const{tooltipOpen:le,tooltipLeft:A,tooltipTop:W,tooltipData:J,hideTooltip:de,showTooltip:te}=(0,_.A)(),d=(0,m.useCallback)((z,H)=>{if(!v)return;const X=(0,C.A)(z);X&&te({tooltipData:H,tooltipLeft:X.x,tooltipTop:X.y-10})},[v,te]),ie=(0,m.useCallback)(()=>{v&&de()},[v,de]);return{onMouseMove:d,onMouseLeave:ie,tooltipOpen:le,tooltipData:J||null,tooltipLeft:A,tooltipTop:W}};var G=e("../charts/src/providers/chart-context/utils.ts"),P=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),N=e("../charts/src/providers/theme/theme-provider.tsx"),g=e("../charts/src/providers/theme/themes.ts"),re=e("../charts/src/components/legend/legend.tsx"),B=e("../charts/src/components/legend/use-chart-legend-data.ts"),O=e("../charts/src/components/shared/use-element-height.ts"),oe=e("../charts/src/components/shared/with-responsive.tsx"),F=e("../charts/src/components/tooltip/base-tooltip.tsx"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(a),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),l={};l.insert="head",l.singleton=!1;var c=t()(i.A,l);const r=i.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const p=v=>{if(!v.length)return{isValid:!1,message:"No data available"};if(v.some(W=>W.percentage<0||W.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const A=v.reduce((W,J)=>W+J.percentage,0);return Math.abs(A-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},h=({data:v,chartId:le,withTooltips:A=!1,className:W,showLegend:J=!1,legendOrientation:de="horizontal",legendPosition:te="bottom",legendAlignment:d="center",legendShape:ie="circle",size:z,thickness:H=1,padding:X=20,gapScale:ae=0,cornerScale:ce=0,children:ue=null})=>{const o=(0,N.RW)(),R=(0,G.R)(le),[D,S]=(0,O.v)(),{onMouseMove:Z,onMouseLeave:$,tooltipOpen:k,tooltipData:M,tooltipLeft:se,tooltipTop:Y}=n({withTooltips:A}),I=(0,m.useMemo)(()=>({showValues:!0}),[]),E=(0,B.B)(v,o,I),{isValid:ve,message:fe}=p(v),xe=(0,m.useMemo)(()=>({thickness:H,gapScale:ae,cornerScale:ce}),[H,ae,ce]);if((0,G.t)(R,E,o,"pie",ve,xe),!ve)return(0,s.jsx)("div",{className:(0,L.A)("pie-chart",r["pie-chart"],W),children:(0,s.jsx)("div",{className:r["error-message"],children:fe})});const pe=z,he=z,_e=J&&te==="top"?he-S:he,Te=Math.min(pe,_e)/2,Ce=pe/2,V=_e/2,Ae=ae*(2*Math.PI/v.length),ne=Te-X,q=H===0?0:ne*(1-H),Le=(ne-q)/2,De=ce?Math.min(ce*ne,Le):0,K=v.map((Q,U)=>({...Q,index:U})),je={value:Q=>Q.value,fill:Q=>Q?.color||o.colors[Q.index]};return(0,s.jsxs)("div",{className:(0,L.A)("pie-chart",r["pie-chart"],W),style:{display:"flex",flexDirection:J&&te==="top"?"column-reverse":"column"},children:[(0,s.jsx)("svg",{viewBox:`0 0 ${z} ${_e}`,preserveAspectRatio:"xMidYMid meet",width:z,height:_e,children:(0,s.jsxs)(y.A,{top:V,left:Ce,children:[(0,s.jsx)(w.A,{data:K,pieValue:je.value,outerRadius:ne,innerRadius:q,padAngle:Ae,cornerRadius:De,children:Q=>Q.arcs.map((U,Ie)=>{const[me,we]=Q.path.centroid(U),Oe=U.endAngle-U.startAngle>=.25,Re=Pe=>Z(Pe,U.data),Se={d:Q.path(U)||"",fill:je.fill(U.data)};return A&&(Se.onMouseMove=Re,Se.onMouseLeave=$),(0,s.jsxs)("g",{children:[(0,s.jsx)("path",{...Se}),Oe&&(0,s.jsx)("text",{x:me,y:we,dy:".33em",fill:o.labelBackgroundColor||g.zQ.labelBackgroundColor,fontSize:12,textAnchor:"middle",pointerEvents:"none",children:U.data.label})]},`arc-${Ie}`)})}),ue]})}),J&&(0,s.jsx)(re.s,{items:E,orientation:de,position:te,alignment:d,className:r["pie-chart-legend"],shape:ie,ref:D,chartId:R}),A&&k&&M&&(0,s.jsx)(F.R,{data:M,top:Y||0,left:se||0,style:{transform:"translate(-50%, -100%)"}})]})},x=v=>(0,m.useContext)(P.mJ)?(0,s.jsx)(h,{...v}):(0,s.jsx)(P.Sx,{children:(0,s.jsx)(h,{...v})});x.displayName="PieChart";const j=(0,oe.F)(x);try{piechart.displayName="piechart",piechart.__docgenInfo={description:"",displayName:"piechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},children:{defaultValue:{value:"null"},description:"Use the children prop to render additional elements on the chart.",name:"children",required:!1,type:{name:"ReactNode"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},thickness:{defaultValue:{value:"1"},description:`Thickness of the pie chart.
A value between 0 and 1, where 0 means no thickness
and 1 means the maximum thickness.`,name:"thickness",required:!1,type:{name:"number"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<DataPointPercentage[], number>"}},legendPosition:{defaultValue:{value:"bottom"},description:`Legend position (where the legend appears)
TODO: Add 'left' | 'right' positioning support in future implementation`,name:"legendPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},legendAlignment:{defaultValue:{value:"center"},description:"Legend alignment within its position",name:"legendAlignment",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},innerRadius:{defaultValue:null,description:"Inner radius in pixels. If > 0, creates a donut chart. Defaults to 0.",name:"innerRadius",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"20"},description:"Add padding to the chart",name:"padding",required:!1,type:{name:"number"}},gapScale:{defaultValue:{value:"0"},description:`Scale of the gap between groups in the pie chart
A value between 0 and 1, where 0 means no gap.`,name:"gapScale",required:!1,type:{name:"number"}},cornerScale:{defaultValue:{value:"0"},description:`Scale of the corner radius for the pie chart segments.
A value between 0 and 1, where 0 means no corner radius.`,name:"cornerScale",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-chart/pie-chart.tsx#piechart"]={docgenInfo:piechart.__docgenInfo,name:"piechart",path:"../charts/src/components/pie-chart/pie-chart.tsx#piechart"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(ee,T,e)=>{e.d(T,{R:()=>G});var y=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),w=e.n(y),L=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),m={};m.insert="head",m.singleton=!1;var C=w()(L.A,m);const _=L.A.locals||{};var b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=({data:P})=>(0,b.jsxs)(b.Fragment,{children:[P?.label,": ",P?.valueDisplay||P?.value]}),G=({data:P,top:N,left:g,component:re=n,children:B,className:O})=>(0,b.jsx)("div",{className:_.tooltip,style:{top:N,left:g},role:"tooltip",children:B||P&&(0,b.jsx)(re,{data:P,className:O})});try{G.displayName="BaseTooltip",G.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:G.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(ee,T,e)=>{e.d(T,{A:()=>_});var y=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=e.n(y),L=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),m=e.n(L),C=m()(w());C.push([ee.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),C.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const _=C},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":(ee,T,e)=>{e.d(T,{A:()=>_});var y=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=e.n(y),L=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),m=e.n(L),C=m()(w());C.push([ee.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),C.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const _=C},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(ee,T,e)=>{e.d(T,{A:()=>_});var y=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=e.n(y),L=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),m=e.n(L),C=m()(w());C.push([ee.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),C.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const _=C}}]);
