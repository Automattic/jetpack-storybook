"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx":(X,I,e)=>{e.r(I),e.d(I,{AlignmentOptions:()=>n,CustomShape:()=>m,DashboardExample:()=>o,Horizontal:()=>P,StandaloneLegendWithChartId:()=>l,Vertical:()=>T,WithBarChart:()=>t,WithLineChart:()=>U,__namedExportsOrder:()=>v,default:()=>w});var j=e("../charts/src/providers/chart-context/chart-context.tsx"),E=e("../charts/src/providers/theme/theme-provider.tsx"),D=e("../charts/src/components/bar-chart/bar-chart.tsx"),g=e("../charts/src/components/line-chart/line-chart.tsx"),S=e("../charts/src/components/pie-chart/pie-chart.tsx"),x=e("../charts/src/components/legend/legend.tsx"),y=e("../charts/src/components/legend/use-chart-legend-data.ts"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const w={title:"JS Packages/Charts/Composites/Legend",component:x.s,parameters:{layout:"centered",docs:{description:{component:`
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
`}}}},h=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],K=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],Q=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],P={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},T={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},re=()=>{const c=(0,E.RW)(),L=(0,y.B)(h,c,{showValues:!1});return(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,s.jsx)(g.A,{data:h,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,s.jsx)(x.s,{items:L,orientation:"horizontal"})]})},U={render:()=>(0,s.jsx)(re,{}),parameters:{docs:{description:{story:"Legend used with LineChart data, positioned independently below the chart."}}}},a=()=>{const c=(0,E.RW)(),L=(0,y.B)(K,c);return(0,s.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,s.jsx)(D.A,{data:K,showLegend:!1,width:400,height:300}),(0,s.jsx)(x.s,{items:L,orientation:"vertical"})]})},t={render:()=>(0,s.jsx)(a,{}),parameters:{docs:{description:{story:"Legend used with BarChart data, positioned vertically beside the chart."}}}},i=()=>(0,s.jsx)(j._$,{children:(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,s.jsx)(g.A,{chartId:"standalone-legend-chart",data:h,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,s.jsx)(x.s,{chartId:"standalone-legend-chart",orientation:"horizontal"})]})}),l={render:()=>(0,s.jsx)(i,{}),parameters:{docs:{source:{code:`<ChartProvider>
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
`}}}},u=()=>(0,s.jsx)(j._$,{children:(0,s.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,s.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,s.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,s.jsx)(g.A,{chartId:"dashboard-revenue",data:h,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,s.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,s.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,s.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,s.jsx)(D.A,{chartId:"dashboard-sales",data:K,showLegend:!1,width:280,height:200})]}),(0,s.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,s.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,s.jsx)(S.A,{chartId:"dashboard-devices",data:Q,showLegend:!1})]})]})]}),(0,s.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,s.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,s.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,s.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,s.jsx)(x.s,{chartId:"dashboard-revenue",orientation:"vertical"})]}),(0,s.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,s.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,s.jsx)(x.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,s.jsx)(x.s,{chartId:"dashboard-devices",orientation:"vertical"})]})]})]})}),o={render:()=>(0,s.jsx)(u,{}),parameters:{layout:"fullscreen",docs:{description:{story:`
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
`}}}},n={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignmentHorizontal:"left",alignmentVertical:"top"},parameters:{docs:{description:{story:"Legend with custom alignment options."}}}},m={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"},parameters:{docs:{description:{story:"Legend with circle shape instead of default rectangle."}}}},v=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","CustomShape"];P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <WithLineChartData />,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with LineChart data, positioned independently below the chart.'
      }
    }
  }
}`,...U.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js":(X,I,e)=>{e.d(I,{A:()=>U});var j=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),E=e("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),D=e.n(E),g=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),S=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),x=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function y(a,t){a(t)}function s(a){var t=a===void 0?{}:a,i=t.innerRadius,l=t.outerRadius,u=t.cornerRadius,o=t.startAngle,n=t.endAngle,m=t.padAngle,v=t.padRadius,c=(0,S.A)();return i!=null&&y(c.innerRadius,i),l!=null&&y(c.outerRadius,l),u!=null&&y(c.cornerRadius,u),o!=null&&y(c.startAngle,o),n!=null&&y(c.endAngle,n),m!=null&&y(c.padAngle,m),v!=null&&y(c.padRadius,v),c}function F(a){var t=a===void 0?{}:a,i=t.x,l=t.x0,u=t.x1,o=t.y,n=t.y0,m=t.y1,v=t.defined,c=t.curve,L=d3Area();return i&&setNumberOrNumberAccessor(L.x,i),l&&setNumberOrNumberAccessor(L.x0,l),u&&setNumberOrNumberAccessor(L.x1,u),o&&setNumberOrNumberAccessor(L.y,o),n&&setNumberOrNumberAccessor(L.y0,n),m&&setNumberOrNumberAccessor(L.y1,m),v&&L.defined(v),c&&L.curve(c),L}function w(a){var t=a===void 0?{}:a,i=t.x,l=t.y,u=t.defined,o=t.curve,n=d3Line();return i&&setNumberOrNumberAccessor(n.x,i),l&&setNumberOrNumberAccessor(n.y,l),u&&n.defined(u),o&&n.curve(o),n}function h(a){var t=a===void 0?{}:a,i=t.startAngle,l=t.endAngle,u=t.padAngle,o=t.value,n=t.sort,m=t.sortValues,v=(0,x.A)();return(n===null||n!=null)&&v.sort(n),(m===null||m!=null)&&v.sortValues(m),o!=null&&v.value(o),u!=null&&y(v.padAngle,u),i!=null&&y(v.startAngle,i),l!=null&&y(v.endAngle,l),v}function K(a){var t=a===void 0?{}:a,i=t.angle,l=t.radius,u=t.defined,o=t.curve,n=d3RadialLine();return i&&setNumberOrNumberAccessor(n.angle,i),l&&setNumberOrNumberAccessor(n.radius,l),u&&n.defined(u),o&&n.curve(o),n}function Q(a){var t=a.keys,i=a.value,l=a.order,u=a.offset,o=d3Stack();return t&&o.keys(t),i&&setNumberOrNumberAccessor(o.value,i),l&&o.order(stackOrder(l)),u&&o.offset(stackOffset(u)),o}var P=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function T(){return T=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(a[l]=i[l])}return a},T.apply(this,arguments)}function re(a,t){if(a==null)return{};var i={},l=Object.keys(a),u,o;for(o=0;o<l.length;o++)u=l[o],!(t.indexOf(u)>=0)&&(i[u]=a[u]);return i}function U(a){var t=a.className,i=a.top,l=a.left,u=a.data,o=u===void 0?[]:u,n=a.centroid,m=a.innerRadius,v=m===void 0?0:m,c=a.outerRadius,L=a.cornerRadius,b=a.startAngle,J=a.endAngle,H=a.padAngle,d=a.padRadius,G=a.pieSort,Y=a.pieSortValues,Z=a.pieValue,R=a.children,te=a.fill,r=te===void 0?"":te,A=re(a,P),_=s({innerRadius:v,outerRadius:c,cornerRadius:L,padRadius:d}),C=h({startAngle:b,endAngle:J,padAngle:H,value:Z,sort:G,sortValues:Y}),M=C(o);return R?j.createElement(j.Fragment,null,R({arcs:M,path:_,pie:C})):j.createElement(g.A,{className:"visx-pie-arcs-group",top:i,left:l},M.map(function(B,O){return j.createElement("g",{key:"pie-arc-"+O},j.createElement("path",T({className:D()("visx-pie-arc",t),d:_(B)||"",fill:r==null||typeof r=="string"?r:r(B)},A)),n?.(_.centroid(B),B))}))}},"../charts/src/components/bar-chart/bar-chart.tsx":(X,I,e)=>{e.d(I,{A:()=>te});var j=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),E=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),D=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),g=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),S=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),x=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),y=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),s=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),F=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),w=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),K=e("../charts/src/providers/chart-context/utils.ts"),Q=e("../charts/src/providers/chart-context/chart-context.tsx"),P=e("../charts/src/providers/theme/theme-provider.tsx"),T=e("../charts/src/components/legend/legend.tsx"),re=e("../charts/src/components/legend/use-chart-legend-data.ts"),U=e("../charts/src/components/shared/use-chart-data-transform.ts"),a=e("../charts/src/components/shared/use-chart-margin.tsx"),t=e("../charts/src/components/shared/use-element-height.ts"),i=e("../charts/src/components/shared/with-responsive.tsx"),l=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(u),n=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),m={};m.insert="head",m.singleton=!1;var v=o()(n.A,m);const c=n.A.locals||{};var L=e("../number-formatters/src/index.ts");const b=r=>new Date(r).toLocaleDateString(void 0,{month:"short",day:"numeric"}),J=r=>typeof r.paddingInner=="number"?r.paddingInner:0;function H(r,A,_={}){const C=(0,h.useMemo)(()=>{const M={type:"band",padding:.2,paddingInner:.1},B={type:"linear",nice:!0,zero:!1},O=r?.[0]?.data?.[0]?.label?V=>V:b,W=L.qe,ae=V=>V?.label||V?.date,ne=V=>V?.value;return{vertical:{xTickFormat:O,yTickFormat:W,tooltipLabelFormatter:O,xAccessor:ae,yAccessor:ne,gridVisibility:"x",xScale:M,yScale:B},horizontal:{xTickFormat:W,yTickFormat:O,tooltipLabelFormatter:O,xAccessor:ne,yAccessor:ae,gridVisibility:"y",xScale:B,yScale:M}}},[r]);return(0,h.useMemo)(()=>{const M=A?"horizontal":"vertical",{xTickFormat:B,yTickFormat:O,tooltipLabelFormatter:W,xAccessor:ae,yAccessor:ne,gridVisibility:V,xScale:fe,yScale:_e}=C[M],oe={...fe,..._.xScale||{}},pe={..._e,..._.yScale||{}},le=A?_.axis?.y?.tickFormat:_.axis?.x?.tickFormat;return{gridVisibility:V,xScale:oe,yScale:pe,accessors:{xAccessor:ae,yAccessor:ne},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:B,..._.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:O,..._.axis?.y||{}}},barGroup:{padding:J(A?pe:oe)},tooltip:{labelFormatter:le||W}}},[C,_,A])}var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const G=r=>r?.length?r.some(_=>_.data.some(C=>isNaN(C.value)||C.value===null||C.value===void 0||!C.label&&(!("date"in C&&C.date)||isNaN(C.date.getTime()))))?"Invalid data":null:"No data available",Y=(r,A)=>`bar-pattern-${r}-${A}`,Z=({data:r,chartId:A,width:_,height:C=400,className:M,margin:B,withTooltips:O=!1,showLegend:W=!1,legendOrientation:ae="horizontal",legendAlignmentHorizontal:ne="center",legendAlignmentVertical:V="bottom",legendShape:fe="rect",gridVisibility:_e,renderTooltip:oe,options:pe={},orientation:le="vertical",withPatterns:de=!1})=>{const he=le==="horizontal",q=(0,h.useId)(),ie=(0,K.R)(A),ye=(0,P.RW)(),se=(0,P.Ox)(r),z=(0,U.E)(r),be=(0,re.B)(z,ye),N=H(z,he,pe),Ce=(0,a.a)(C,N,z,se,he),[Ae,je]=(0,t.v)(),ce=(0,h.useRef)(null),[ee,Le]=(0,h.useState)(void 0),[De,Ie]=(0,h.useState)(!1),Se=Math.max(0,...r.map(p=>p.data?.length||0))*r.length,{tooltipRef:k,onChartFocus:$,onChartBlur:Ee,onChartKeyDown:we}=(0,l.JZ)({selectedIndex:ee,setSelectedIndex:Le,isNavigating:De,setIsNavigating:Ie,chartRef:ce,totalPoints:Se}),me=(0,h.useCallback)((p,f)=>p?.options?.stroke||se.colors[f%se.colors.length],[se]),Te=(0,h.useCallback)(p=>()=>de?`url(#${Y(q,p)})`:me(z[p],p),[de,me,z,q]),Oe=(0,h.useCallback)(({tooltipData:p})=>{const f=p?.nearestDatum?.datum;return f?(0,d.jsxs)("div",{className:c["bar-chart__tooltip"],children:[(0,d.jsx)("div",{className:c["bar-chart__tooltip-header"],children:p?.nearestDatum?.key}),(0,d.jsxs)("div",{className:c["bar-chart__tooltip-row"],children:[(0,d.jsxs)("span",{className:c["bar-chart__tooltip-label"],children:[N.tooltip.labelFormatter(f.label||(f.date?f.date.getTime():0),0,[]),":"]}),(0,d.jsx)("span",{className:c["bar-chart__tooltip-value"],children:f.value})]})]}):null},[N.tooltip]),xe=(0,h.useCallback)((p,f)=>{const ge=p%4,ue=Y(q,p),ve={id:ue,stroke:"white",strokeWidth:1,background:f};switch(ge){case 0:default:return(0,d.jsx)(j.A,{...ve,width:5,height:5,orientation:["diagonal"]},ue);case 1:return(0,d.jsx)(E.A,{...ve,width:6,height:6,fill:"white"},ue);case 2:return(0,d.jsx)(D.A,{...ve,width:4,height:4},ue);case 3:return(0,d.jsx)(g.A,{...ve,size:8,height:3},ue)}},[q]),Pe=(0,h.useCallback)((p,f)=>`
			.visx-bar[fill="url(#${Y(q,p)})"] {
				stroke: ${f};
				stroke-width: 1;
				}
			`,[q]),Be=(0,h.useCallback)(()=>{if(ee===void 0)return"";const p=Math.max(...r.map(We=>We.data.length)),f=Math.floor(ee/r.length),ge=ee%r.length;if(f>=p||ge>=r.length)return"";const ue=r[ge];if(f>=ue.data.length)return"";const ve=ge*p+f;return`
			.bar-chart[data-chart-id="bar-chart-${ie}"] .visx-bar-group .visx-bar:nth-child(${ve+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[ee,r,ie]),Re=G(z),Ne=!Re,Fe=(0,h.useMemo)(()=>({orientation:le,withPatterns:de}),[le,de]);if((0,K.t)(ie,be,ye,"bar",Ne,Fe),Re)return(0,d.jsx)("div",{className:(0,w.A)("bar-chart",c["bar-chart"]),children:Re});const Me=_e??N.gridVisibility,Ve=Be();return(0,d.jsxs)("div",{className:(0,w.A)("bar-chart",c["bar-chart"],M),"data-testid":"bar-chart",role:"grid","aria-label":"bar chart",style:{width:_,height:C,display:"flex",flexDirection:W&&V==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:we,onFocus:$,onBlur:Ee,ref:ce,"data-chart-id":`bar-chart-${ie}`,children:[(0,d.jsxs)(S.A,{theme:se,width:_,height:C-(W?je:0),margin:{...Ce,...B,...W&&V==="top"?{top:(Ce.top||0)+je}:{}},xScale:N.xScale,yScale:N.yScale,horizontal:he,pointerEventsDataKey:"nearest",children:[(0,d.jsx)(x.A,{columns:Me.includes("y"),rows:Me.includes("x"),numTicks:4}),de&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("defs",{"data-testid":"bar-chart-patterns",children:z.map((p,f)=>xe(f,me(p,f)))}),(0,d.jsx)("style",{children:z.map((p,f)=>Pe(f,me(p,f)))})]}),Ve&&(0,d.jsx)("style",{children:Ve}),(0,d.jsx)(y.A,{padding:N.barGroup.padding,children:z.map((p,f)=>(0,d.jsx)(s.A,{dataKey:p?.label,data:p.data,yAccessor:N.accessors.yAccessor,xAccessor:N.accessors.xAccessor,colorAccessor:Te(f)},p?.label))}),(0,d.jsx)(F.A,{...N.axis.x}),(0,d.jsx)(F.A,{...N.axis.y}),O&&(0,d.jsx)(l.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:oe||Oe,selectedIndex:ee,tooltipRef:k,keyboardFocusedClassName:c["bar-chart__tooltip--keyboard-focused"],series:r,mode:"individual"})]}),W&&(0,d.jsx)(T.s,{items:be,orientation:ae,alignmentHorizontal:ne,alignmentVertical:V,className:c["bar-chart__legend"],shape:fe,ref:Ae,chartId:ie})]})},R=r=>(0,h.useContext)(Q.uR)?(0,d.jsx)(Z,{...r}):(0,d.jsx)(Q._$,{children:(0,d.jsx)(Z,{...r})});R.displayName="BarChart";const te=(0,i.F)(R);try{R.displayName="BarChart",R.__docgenInfo={description:"",displayName:"BarChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:{value:"400"},description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"rect"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendAlignmentHorizontal:{defaultValue:{value:"center"},description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:{value:"bottom"},description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},orientation:{defaultValue:{value:"vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},withPatterns:{defaultValue:{value:"false"},description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/bar-chart/bar-chart.tsx#BarChart"]={docgenInfo:R.__docgenInfo,name:"BarChart",path:"../charts/src/components/bar-chart/bar-chart.tsx#BarChart"})}catch{}},"../charts/src/components/pie-chart/pie-chart.tsx":(X,I,e)=>{e.d(I,{A:()=>L});var j=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),E=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),D=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),S=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),x=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js");const s=({withTooltips:b})=>{const{tooltipOpen:J,tooltipLeft:H,tooltipTop:d,tooltipData:G,hideTooltip:Y,showTooltip:Z}=(0,x.A)(),R=(0,g.useCallback)((r,A)=>{if(!b)return;const _=(0,S.A)(r);_&&Z({tooltipData:A,tooltipLeft:_.x,tooltipTop:_.y-10})},[b,Z]),te=(0,g.useCallback)(()=>{b&&Y()},[b,Y]);return{onMouseMove:R,onMouseLeave:te,tooltipOpen:J,tooltipData:G||null,tooltipLeft:H,tooltipTop:d}};var F=e("../charts/src/providers/chart-context/utils.ts"),w=e("../charts/src/providers/chart-context/chart-context.tsx"),h=e("../charts/src/providers/theme/theme-provider.tsx"),K=e("../charts/src/providers/theme/themes.ts"),Q=e("../charts/src/components/legend/legend.tsx"),P=e("../charts/src/components/legend/use-chart-legend-data.ts"),T=e("../charts/src/components/shared/use-element-height.ts"),re=e("../charts/src/components/shared/with-responsive.tsx"),U=e("../charts/src/components/tooltip/base-tooltip.tsx"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(a),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),l={};l.insert="head",l.singleton=!1;var u=t()(i.A,l);const o=i.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=b=>{if(!b.length)return{isValid:!1,message:"No data available"};if(b.some(d=>d.percentage<0||d.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const H=b.reduce((d,G)=>d+G.percentage,0);return Math.abs(H-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},v=({data:b,chartId:J,withTooltips:H=!1,className:d,showLegend:G,legendOrientation:Y,legendAlignmentHorizontal:Z="center",legendAlignmentVertical:R="bottom",legendShape:te="circle",size:r,thickness:A=1,padding:_=20,gapScale:C=0,cornerScale:M=0,children:B=null})=>{const O=(0,h.RW)(),W=(0,F.R)(J),[ae,ne]=(0,T.v)(),{onMouseMove:V,onMouseLeave:fe,tooltipOpen:_e,tooltipData:oe,tooltipLeft:pe,tooltipTop:le}=s({withTooltips:H}),de=(0,g.useMemo)(()=>({showValues:!0}),[]),he=(0,P.B)(b,O,de),{isValid:q,message:ie}=m(b),ye=(0,g.useMemo)(()=>({thickness:A,gapScale:C,cornerScale:M}),[A,C,M]);if((0,F.t)(W,he,O,"pie",q,ye),!q)return(0,n.jsx)("div",{className:(0,D.A)("pie-chart",o["pie-chart"],d),children:(0,n.jsx)("div",{className:o["error-message"],children:ie})});const se=r,z=r,be=Math.min(se,z)/2,N=se/2,Ce=G&&R==="top"?ne/2:0,Ae=z/2+Ce,je=C*(2*Math.PI/b.length),ce=be-_,ee=A===0?0:ce*(1-A),Le=(ce-ee)/2,De=M?Math.min(M*ce,Le):0,Ie=b.map((k,$)=>({...k,index:$})),Se={value:k=>k.value,fill:k=>k?.color||O.colors[k.index]};return(0,n.jsxs)("div",{className:(0,D.A)("pie-chart",o["pie-chart"],d),style:{display:"flex",flexDirection:G&&R==="top"?"column-reverse":"column"},children:[(0,n.jsx)("svg",{viewBox:`0 0 ${r} ${r}`,preserveAspectRatio:"xMidYMid meet",width:r,height:r,children:(0,n.jsxs)(j.A,{top:Ae,left:N,children:[(0,n.jsx)(E.A,{data:Ie,pieValue:Se.value,outerRadius:ce,innerRadius:ee,padAngle:je,cornerRadius:De,children:k=>k.arcs.map(($,Ee)=>{const[we,me]=k.path.centroid($),Te=$.endAngle-$.startAngle>=.25,Oe=Pe=>V(Pe,$.data),xe={d:k.path($)||"",fill:Se.fill($.data)};return H&&(xe.onMouseMove=Oe,xe.onMouseLeave=fe),(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{...xe}),Te&&(0,n.jsx)("text",{x:we,y:me,dy:".33em",fill:O.labelBackgroundColor||K.zQ.labelBackgroundColor,fontSize:12,textAnchor:"middle",pointerEvents:"none",children:$.data.label})]},`arc-${Ee}`)})}),B]})}),G&&(0,n.jsx)(Q.s,{items:he,orientation:Y,alignmentHorizontal:Z,alignmentVertical:R,className:o["pie-chart-legend"],shape:te,ref:ae,chartId:W}),H&&_e&&oe&&(0,n.jsx)(U.R,{data:oe,top:le||0,left:pe||0,style:{transform:"translate(-50%, -100%)"}})]})},c=b=>(0,g.useContext)(w.uR)?(0,n.jsx)(v,{...b}):(0,n.jsx)(w._$,{children:(0,n.jsx)(v,{...b})});c.displayName="PieChart";const L=(0,re.F)(c);try{c.displayName="PieChart",c.__docgenInfo={description:"",displayName:"PieChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"Use the children prop to render additional elements on the chart.",name:"children",required:!1,type:{name:"ReactNode"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<DataPointPercentage[], number>"}},legendAlignmentHorizontal:{defaultValue:{value:"center"},description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:{value:"bottom"},description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},padding:{defaultValue:{value:"20"},description:"Add padding to the chart",name:"padding",required:!1,type:{name:"number"}},thickness:{defaultValue:{value:"1"},description:`Thickness of the pie chart.
A value between 0 and 1, where 0 means no thickness
and 1 means the maximum thickness.`,name:"thickness",required:!1,type:{name:"number"}},innerRadius:{defaultValue:null,description:"Inner radius in pixels. If > 0, creates a donut chart. Defaults to 0.",name:"innerRadius",required:!1,type:{name:"number"}},gapScale:{defaultValue:{value:"0"},description:`Scale of the gap between groups in the pie chart
A value between 0 and 1, where 0 means no gap.`,name:"gapScale",required:!1,type:{name:"number"}},cornerScale:{defaultValue:{value:"0"},description:`Scale of the corner radius for the pie chart segments.
A value between 0 and 1, where 0 means no corner radius.`,name:"cornerScale",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-chart/pie-chart.tsx#PieChart"]={docgenInfo:c.__docgenInfo,name:"PieChart",path:"../charts/src/components/pie-chart/pie-chart.tsx#PieChart"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(X,I,e)=>{e.d(I,{R:()=>F});var j=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=e.n(j),D=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),g={};g.insert="head",g.singleton=!1;var S=E()(D.A,g);const x=D.A.locals||{};var y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=({data:w})=>(0,y.jsxs)(y.Fragment,{children:[w?.label,": ",w?.valueDisplay||w?.value]}),F=({data:w,top:h,left:K,component:Q=s,children:P,className:T})=>(0,y.jsx)("div",{className:x.tooltip,style:{top:h,left:K},role:"tooltip",children:P||w&&(0,y.jsx)(Q,{data:w,className:T})});try{F.displayName="BaseTooltip",F.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:F.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(X,I,e)=>{e.d(I,{A:()=>x});var j=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),E=e.n(j),D=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),g=e.n(D),S=g()(E());S.push([X.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),S.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const x=S},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":(X,I,e)=>{e.d(I,{A:()=>x});var j=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),E=e.n(j),D=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),g=e.n(D),S=g()(E());S.push([X.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),S.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const x=S},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(X,I,e)=>{e.d(I,{A:()=>x});var j=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),E=e.n(j),D=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),g=e.n(D),S=g()(E());S.push([X.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),S.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const x=S}}]);
