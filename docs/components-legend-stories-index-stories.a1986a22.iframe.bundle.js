"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx":(J,E,e)=>{e.r(E),e.d(E,{AlignmentOptions:()=>n,CustomShape:()=>x,DashboardExample:()=>r,Horizontal:()=>R,StandaloneLegendWithChartId:()=>l,Vertical:()=>P,WithBarChart:()=>a,WithLineChart:()=>H,__namedExportsOrder:()=>h,default:()=>V});var A=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),w=e("../charts/src/providers/theme/theme-provider.tsx"),L=e("../charts/src/components/bar-chart/bar-chart.tsx"),v=e("../charts/src/components/line-chart/line-chart.tsx"),D=e("../charts/src/components/pie-chart/pie-chart.tsx"),y=e("../charts/src/components/legend/legend.tsx"),C=e("../charts/src/components/legend/use-chart-legend-data.ts"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const V={title:"JS Packages/Charts/Composites/Legend",component:y.s,parameters:{layout:"centered",docs:{description:{component:`
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
`}}}},N=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],f=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],se=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],R={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},P={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},ie=()=>{const m=(0,w.RW)(),I=(0,C.B)(N,m,{showValues:!1});return(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,s.jsx)(v.A,{data:N,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,s.jsx)(y.s,{items:I,orientation:"horizontal"})]})},H={render:()=>(0,s.jsx)(ie,{}),parameters:{docs:{description:{story:"Legend used with LineChart data, positioned independently below the chart."}}}},t=()=>{const m=(0,w.RW)(),I=(0,C.B)(f,m);return(0,s.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,s.jsx)(L.A,{data:f,showLegend:!1,width:400,height:300}),(0,s.jsx)(y.s,{items:I,orientation:"vertical"})]})},a={render:()=>(0,s.jsx)(t,{}),parameters:{docs:{description:{story:"Legend used with BarChart data, positioned vertically beside the chart."}}}},i=()=>(0,s.jsx)(A.Sx,{children:(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,s.jsx)(v.A,{chartId:"standalone-legend-chart",data:N,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,s.jsx)(y.s,{chartId:"standalone-legend-chart",orientation:"horizontal"})]})}),l={render:()=>(0,s.jsx)(i,{}),parameters:{docs:{source:{code:`<GlobalChartsProvider>
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
`}}}},c=()=>(0,s.jsx)(A.Sx,{children:(0,s.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,s.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,s.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,s.jsx)(v.A,{chartId:"dashboard-revenue",data:N,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,s.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,s.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,s.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,s.jsx)(L.A,{chartId:"dashboard-sales",data:f,showLegend:!1,width:280,height:200})]}),(0,s.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,s.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,s.jsx)(D.A,{chartId:"dashboard-devices",data:se,showLegend:!1})]})]})]}),(0,s.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,s.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,s.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,s.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,s.jsx)(y.s,{chartId:"dashboard-revenue",orientation:"vertical"})]}),(0,s.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,s.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,s.jsx)(y.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,s.jsx)(y.s,{chartId:"dashboard-devices",orientation:"vertical"})]})]})]})}),r={render:()=>(0,s.jsx)(c,{}),parameters:{layout:"fullscreen",docs:{description:{story:`
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
`}}}},n={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignmentHorizontal:"left",alignmentVertical:"top"},parameters:{docs:{description:{story:"Legend with custom alignment options."}}}},x={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"},parameters:{docs:{description:{story:"Legend with circle shape instead of default rectangle."}}}},h=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","CustomShape"];R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <WithLineChartData />,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with LineChart data, positioned independently below the chart.'
      }
    }
  }
}`,...H.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <WithBarChartData />,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with BarChart data, positioned vertically beside the chart.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js":(J,E,e)=>{e.d(E,{A:()=>H});var A=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),w=e("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),L=e.n(w),v=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),D=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),y=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function C(t,a){t(a)}function s(t){var a=t===void 0?{}:t,i=a.innerRadius,l=a.outerRadius,c=a.cornerRadius,r=a.startAngle,n=a.endAngle,x=a.padAngle,h=a.padRadius,m=(0,D.A)();return i!=null&&C(m.innerRadius,i),l!=null&&C(m.outerRadius,l),c!=null&&C(m.cornerRadius,c),r!=null&&C(m.startAngle,r),n!=null&&C(m.endAngle,n),x!=null&&C(m.padAngle,x),h!=null&&C(m.padRadius,h),m}function k(t){var a=t===void 0?{}:t,i=a.x,l=a.x0,c=a.x1,r=a.y,n=a.y0,x=a.y1,h=a.defined,m=a.curve,I=d3Area();return i&&setNumberOrNumberAccessor(I.x,i),l&&setNumberOrNumberAccessor(I.x0,l),c&&setNumberOrNumberAccessor(I.x1,c),r&&setNumberOrNumberAccessor(I.y,r),n&&setNumberOrNumberAccessor(I.y0,n),x&&setNumberOrNumberAccessor(I.y1,x),h&&I.defined(h),m&&I.curve(m),I}function V(t){var a=t===void 0?{}:t,i=a.x,l=a.y,c=a.defined,r=a.curve,n=d3Line();return i&&setNumberOrNumberAccessor(n.x,i),l&&setNumberOrNumberAccessor(n.y,l),c&&n.defined(c),r&&n.curve(r),n}function N(t){var a=t===void 0?{}:t,i=a.startAngle,l=a.endAngle,c=a.padAngle,r=a.value,n=a.sort,x=a.sortValues,h=(0,y.A)();return(n===null||n!=null)&&h.sort(n),(x===null||x!=null)&&h.sortValues(x),r!=null&&h.value(r),c!=null&&C(h.padAngle,c),i!=null&&C(h.startAngle,i),l!=null&&C(h.endAngle,l),h}function f(t){var a=t===void 0?{}:t,i=a.angle,l=a.radius,c=a.defined,r=a.curve,n=d3RadialLine();return i&&setNumberOrNumberAccessor(n.angle,i),l&&setNumberOrNumberAccessor(n.radius,l),c&&n.defined(c),r&&n.curve(r),n}function se(t){var a=t.keys,i=t.value,l=t.order,c=t.offset,r=d3Stack();return a&&r.keys(a),i&&setNumberOrNumberAccessor(r.value,i),l&&r.order(stackOrder(l)),c&&r.offset(stackOffset(c)),r}var R=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function P(){return P=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},P.apply(this,arguments)}function ie(t,a){if(t==null)return{};var i={},l=Object.keys(t),c,r;for(r=0;r<l.length;r++)c=l[r],!(a.indexOf(c)>=0)&&(i[c]=t[c]);return i}function H(t){var a=t.className,i=t.top,l=t.left,c=t.data,r=c===void 0?[]:c,n=t.centroid,x=t.innerRadius,h=x===void 0?0:x,m=t.outerRadius,I=t.cornerRadius,u=t.startAngle,re=t.endAngle,X=t.padAngle,F=t.padRadius,Y=t.pieSort,d=t.pieSortValues,le=t.pieValue,q=t.children,ee=t.fill,M=ee===void 0?"":ee,$=ie(t,R),Q=s({innerRadius:h,outerRadius:m,cornerRadius:I,padRadius:F}),o=N({startAngle:u,endAngle:re,padAngle:X,value:le,sort:Y,sortValues:d}),j=o(r);return q?A.createElement(A.Fragment,null,q({arcs:j,path:Q,pie:o})):A.createElement(v.A,{className:"visx-pie-arcs-group",top:i,left:l},j.map(function(b,g){return A.createElement("g",{key:"pie-arc-"+g},A.createElement("path",P({className:L()("visx-pie-arc",a),d:Q(b)||"",fill:M==null||typeof M=="string"?M:M(b)},$)),n?.(Q.centroid(b),b))}))}},"../charts/src/components/bar-chart/bar-chart.tsx":(J,E,e)=>{e.d(E,{A:()=>Q});var A=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),w=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),L=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),v=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),D=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),y=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),C=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),s=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),k=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),V=e("../../../node_modules/.pnpm/@wordpress+i18n@6.0.0/node_modules/@wordpress/i18n/build-module/index.js"),N=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),se=e("../charts/src/providers/chart-context/utils.ts"),R=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),P=e("../charts/src/providers/theme/theme-provider.tsx"),ie=e("../charts/src/components/legend/legend.tsx"),H=e("../charts/src/components/legend/use-chart-legend-data.ts"),t=e("../charts/src/components/shared/use-chart-data-transform.ts"),a=e("../charts/src/components/shared/use-chart-margin.tsx"),i=e("../charts/src/components/shared/use-element-height.ts");const l=(o,j={enabled:!1})=>{const{enabled:b,minValueRatio:g=.6,maxValueRatio:K=.008}=j;return(0,f.useMemo)(()=>{if(!b)return o;const U=[];for(const S of o)for(const T of S.data)T.value!==null&&T.value!==0&&U.push(T.value);if(U.length===0)return o;const z=U.map(Math.abs),W=Math.min(...z),ae=Math.max(...z),te=Math.min(W*g,ae*K);return o.map(S=>({...S,data:S.data.map(T=>T.value===0?{...T,visualValue:te}:T)}))},[o,b,g,K])};var c=e("../charts/src/components/shared/with-responsive.tsx"),r=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),x=e.n(n),h=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),m={};m.insert="head",m.singleton=!1;var I=x()(h.A,m);const u=h.A.locals||{};var re=e("../number-formatters/src/index.ts");const X=o=>new Date(o).toLocaleDateString(void 0,{month:"short",day:"numeric"}),F=o=>typeof o.paddingInner=="number"?o.paddingInner:0;function Y(o,j,b={}){const g=(0,f.useMemo)(()=>{const K={type:"band",padding:.2,paddingInner:.1},U={type:"linear",nice:!0,zero:!1},z=o?.[0]?.data?.[0]?.label?S=>S:X,W=re.qe,ae=S=>S?.label||S?.date,te=S=>{const T=S;return T?.visualValue!==void 0?T.visualValue:S?.value};return{vertical:{xTickFormat:z,yTickFormat:W,tooltipLabelFormatter:z,xAccessor:ae,yAccessor:te,gridVisibility:"x",xScale:K,yScale:U},horizontal:{xTickFormat:W,yTickFormat:z,tooltipLabelFormatter:z,xAccessor:te,yAccessor:ae,gridVisibility:"y",xScale:U,yScale:K}}},[o]);return(0,f.useMemo)(()=>{const K=j?"horizontal":"vertical",{xTickFormat:U,yTickFormat:z,tooltipLabelFormatter:W,xAccessor:ae,yAccessor:te,gridVisibility:S,xScale:T,yScale:be}=g[K],ge={...T,...b.xScale||{}},ce={...be,...b.yScale||{}},de=j?b.axis?.y?.tickFormat:b.axis?.x?.tickFormat;return{gridVisibility:S,xScale:ge,yScale:ce,accessors:{xAccessor:ae,yAccessor:te},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:U,...b.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:z,...b.axis?.y||{}}},barGroup:{padding:F(j?ce:ge)},tooltip:{labelFormatter:de||W}}},[g,b,j])}var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const le=V.__,q=o=>o?.length?o.some(b=>b.data.some(g=>isNaN(g.value)||g.value===null||g.value===void 0||!g.label&&(!("date"in g&&g.date)||isNaN(g.date.getTime()))))?"Invalid data":null:"No data available",ee=(o,j)=>`bar-pattern-${o}-${j}`,M=({data:o,chartId:j,width:b,height:g=400,className:K,margin:U,withTooltips:z=!1,showLegend:W=!1,legendOrientation:ae="horizontal",legendAlignmentHorizontal:te="center",legendAlignmentVertical:S="bottom",legendShape:T="rect",gridVisibility:be,renderTooltip:ge,options:ce={},orientation:de="vertical",withPatterns:ue=!1,showZeroValues:Le=!1})=>{const ve=de==="horizontal",B=(0,se.R)(j),pe=(0,P.RW)(),he=(0,P.Ox)(o),ne=(0,t.E)(o),je=l(ne,{enabled:Le}),Se=(0,H.B)(ne,pe),O=Y(je,ve,ce),ye=(0,a.a)(g,O,ne,he,ve),[Ie,Ae]=(0,i.v)(),De=(0,f.useRef)(null),[oe,G]=(0,f.useState)(void 0),[Z,Ee]=(0,f.useState)(!1),we=Math.max(0,...o.map(p=>p.data?.length||0))*o.length,{tooltipRef:Pe,onChartFocus:Te,onChartBlur:Oe,onChartKeyDown:Ce}=(0,r.JZ)({selectedIndex:oe,setSelectedIndex:G,isNavigating:Z,setIsNavigating:Ee,chartRef:De,totalPoints:we}),fe=(0,f.useCallback)((p,_)=>p?.options?.stroke||he.colors[_%he.colors.length],[he]),Be=(0,f.useCallback)(p=>()=>ue?`url(#${ee(B,p)})`:fe(ne[p],p),[ue,fe,ne,B]),Ne=(0,f.useCallback)(({tooltipData:p})=>{const _=p?.nearestDatum?.datum;return _?(0,d.jsxs)("div",{className:u["bar-chart__tooltip"],children:[(0,d.jsx)("div",{className:u["bar-chart__tooltip-header"],children:p?.nearestDatum?.key}),(0,d.jsxs)("div",{className:u["bar-chart__tooltip-row"],children:[(0,d.jsxs)("span",{className:u["bar-chart__tooltip-label"],children:[O.tooltip.labelFormatter(_.label||(_.date?_.date.getTime():0),0,[]),":"]}),(0,d.jsx)("span",{className:u["bar-chart__tooltip-value"],children:_.value})]})]}):null},[O.tooltip]),Fe=(0,f.useCallback)((p,_)=>{const xe=p%4,me=ee(B,p),_e={id:me,stroke:"white",strokeWidth:1,background:_};switch(xe){case 0:default:return(0,d.jsx)(A.A,{..._e,width:5,height:5,orientation:["diagonal"]},me);case 1:return(0,d.jsx)(w.A,{..._e,width:6,height:6,fill:"white"},me);case 2:return(0,d.jsx)(L.A,{..._e,width:4,height:4},me);case 3:return(0,d.jsx)(v.A,{..._e,size:8,height:3},me)}},[B]),ze=(0,f.useCallback)((p,_)=>`
			.visx-bar[fill="url(#${ee(B,p)})"] {
				stroke: ${_};
				stroke-width: 1;
				}
			`,[B]),We=(0,f.useCallback)(()=>{if(oe===void 0)return"";const p=Math.max(...o.map(Ue=>Ue.data.length)),_=Math.floor(oe/o.length),xe=oe%o.length;if(_>=p||xe>=o.length)return"";const me=o[xe];if(_>=me.data.length)return"";const _e=xe*p+_;return`
			.bar-chart[data-chart-id="bar-chart-${B}"] .visx-bar-group .visx-bar:nth-child(${_e+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[oe,o,B]),Ve=q(ne),ke=!Ve,Ke=(0,f.useMemo)(()=>({orientation:de,withPatterns:ue}),[de,ue]);if((0,se.t)(B,Se,pe,"bar",ke,Ke),Ve)return(0,d.jsx)("div",{className:(0,N.A)("bar-chart",u["bar-chart"]),children:Ve});const Re=be??O.gridVisibility,Me=We();return(0,d.jsxs)("div",{className:(0,N.A)("bar-chart",u["bar-chart"],K),"data-testid":"bar-chart",role:"grid","aria-label":le("Bar chart","jetpack-charts"),style:{width:b,height:g,display:"flex",flexDirection:W&&S==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:Ce,onFocus:Te,onBlur:Oe,ref:De,"data-chart-id":`bar-chart-${B}`,children:[(0,d.jsxs)(D.A,{theme:he,width:b,height:g-(W?Ae:0),margin:{...ye,...U,...W&&S==="top"?{top:(ye.top||0)+Ae}:{}},xScale:O.xScale,yScale:O.yScale,horizontal:ve,pointerEventsDataKey:"nearest",children:[(0,d.jsx)(y.A,{columns:Re.includes("y"),rows:Re.includes("x"),numTicks:4}),ue&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("defs",{"data-testid":"bar-chart-patterns",children:ne.map((p,_)=>Fe(_,fe(p,_)))}),(0,d.jsx)("style",{children:ne.map((p,_)=>ze(_,fe(p,_)))})]}),Me&&(0,d.jsx)("style",{children:Me}),(0,d.jsx)(C.A,{padding:O.barGroup.padding,children:je.map((p,_)=>(0,d.jsx)(s.A,{dataKey:p?.label,data:p.data,yAccessor:O.accessors.yAccessor,xAccessor:O.accessors.xAccessor,colorAccessor:Be(_)},p?.label))}),(0,d.jsx)(k.A,{...O.axis.x}),(0,d.jsx)(k.A,{...O.axis.y}),z&&(0,d.jsx)(r.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:ge||Ne,selectedIndex:oe,tooltipRef:Pe,keyboardFocusedClassName:u["bar-chart__tooltip--keyboard-focused"],series:o,mode:"individual"})]}),W&&(0,d.jsx)(ie.s,{items:Se,orientation:ae,alignmentHorizontal:te,alignmentVertical:S,className:u["bar-chart__legend"],shape:T,ref:Ie,chartId:B})]})},$=o=>(0,f.useContext)(R.mJ)?(0,d.jsx)(M,{...o}):(0,d.jsx)(R.Sx,{children:(0,d.jsx)(M,{...o})});$.displayName="BarChart";const Q=(0,c.F)($);try{barchart.displayName="barchart",barchart.__docgenInfo={description:"",displayName:"barchart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:{value:"400"},description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},orientation:{defaultValue:{value:"vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"rect"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendAlignmentHorizontal:{defaultValue:{value:"center"},description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:{value:"bottom"},description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withPatterns:{defaultValue:{value:"false"},description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},showZeroValues:{defaultValue:{value:"false"},description:"",name:"showZeroValues",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/bar-chart/bar-chart.tsx#barchart"]={docgenInfo:barchart.__docgenInfo,name:"barchart",path:"../charts/src/components/bar-chart/bar-chart.tsx#barchart"})}catch{}},"../charts/src/components/pie-chart/pie-chart.tsx":(J,E,e)=>{e.d(E,{A:()=>I});var A=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),w=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),L=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),D=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),y=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js");const s=({withTooltips:u})=>{const{tooltipOpen:re,tooltipLeft:X,tooltipTop:F,tooltipData:Y,hideTooltip:d,showTooltip:le}=(0,y.A)(),q=(0,v.useCallback)((M,$)=>{if(!u)return;const Q=(0,D.A)(M);Q&&le({tooltipData:$,tooltipLeft:Q.x,tooltipTop:Q.y-10})},[u,le]),ee=(0,v.useCallback)(()=>{u&&d()},[u,d]);return{onMouseMove:q,onMouseLeave:ee,tooltipOpen:re,tooltipData:Y||null,tooltipLeft:X,tooltipTop:F}};var k=e("../charts/src/providers/chart-context/utils.ts"),V=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),N=e("../charts/src/providers/theme/theme-provider.tsx"),f=e("../charts/src/providers/theme/themes.ts"),se=e("../charts/src/components/legend/legend.tsx"),R=e("../charts/src/components/legend/use-chart-legend-data.ts"),P=e("../charts/src/components/shared/use-element-height.ts"),ie=e("../charts/src/components/shared/with-responsive.tsx"),H=e("../charts/src/components/tooltip/base-tooltip.tsx"),t=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(t),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),l={};l.insert="head",l.singleton=!1;var c=a()(i.A,l);const r=i.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const x=u=>{if(!u.length)return{isValid:!1,message:"No data available"};if(u.some(F=>F.percentage<0||F.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const X=u.reduce((F,Y)=>F+Y.percentage,0);return Math.abs(X-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},h=({data:u,chartId:re,withTooltips:X=!1,className:F,showLegend:Y=!1,legendOrientation:d="horizontal",legendAlignmentHorizontal:le="center",legendAlignmentVertical:q="bottom",legendShape:ee="circle",size:M,thickness:$=1,padding:Q=20,gapScale:o=0,cornerScale:j=0,children:b=null})=>{const g=(0,N.RW)(),K=(0,k.R)(re),[U,z]=(0,P.v)(),{onMouseMove:W,onMouseLeave:ae,tooltipOpen:te,tooltipData:S,tooltipLeft:T,tooltipTop:be}=s({withTooltips:X}),ge=(0,v.useMemo)(()=>({showValues:!0}),[]),ce=(0,R.B)(u,g,ge),{isValid:de,message:ue}=x(u),Le=(0,v.useMemo)(()=>({thickness:$,gapScale:o,cornerScale:j}),[$,o,j]);if((0,k.t)(K,ce,g,"pie",de,Le),!de)return(0,n.jsx)("div",{className:(0,L.A)("pie-chart",r["pie-chart"],F),children:(0,n.jsx)("div",{className:r["error-message"],children:ue})});const ve=M,B=M,pe=Y&&q==="top"?B-z:B,he=Math.min(ve,pe)/2,ne=ve/2,je=pe/2,Se=o*(2*Math.PI/u.length),O=he-Q,ye=$===0?0:O*(1-$),Ie=(O-ye)/2,Ae=j?Math.min(j*O,Ie):0,De=u.map((G,Z)=>({...G,index:Z})),oe={value:G=>G.value,fill:G=>G?.color||g.colors[G.index]};return(0,n.jsxs)("div",{className:(0,L.A)("pie-chart",r["pie-chart"],F),style:{display:"flex",flexDirection:Y&&q==="top"?"column-reverse":"column"},children:[(0,n.jsx)("svg",{viewBox:`0 0 ${M} ${pe}`,preserveAspectRatio:"xMidYMid meet",width:M,height:pe,children:(0,n.jsxs)(A.A,{top:je,left:ne,children:[(0,n.jsx)(w.A,{data:De,pieValue:oe.value,outerRadius:O,innerRadius:ye,padAngle:Se,cornerRadius:Ae,children:G=>G.arcs.map((Z,Ee)=>{const[we,Pe]=G.path.centroid(Z),Te=Z.endAngle-Z.startAngle>=.25,Oe=fe=>W(fe,Z.data),Ce={d:G.path(Z)||"",fill:oe.fill(Z.data)};return X&&(Ce.onMouseMove=Oe,Ce.onMouseLeave=ae),(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{...Ce}),Te&&(0,n.jsx)("text",{x:we,y:Pe,dy:".33em",fill:g.labelBackgroundColor||f.zQ.labelBackgroundColor,fontSize:12,textAnchor:"middle",pointerEvents:"none",children:Z.data.label})]},`arc-${Ee}`)})}),b]})}),Y&&(0,n.jsx)(se.s,{items:ce,orientation:d,alignmentHorizontal:le,alignmentVertical:q,className:r["pie-chart-legend"],shape:ee,ref:U,chartId:K}),X&&te&&S&&(0,n.jsx)(H.R,{data:S,top:be||0,left:T||0,style:{transform:"translate(-50%, -100%)"}})]})},m=u=>(0,v.useContext)(V.mJ)?(0,n.jsx)(h,{...u}):(0,n.jsx)(V.Sx,{children:(0,n.jsx)(h,{...u})});m.displayName="PieChart";const I=(0,ie.F)(m);try{piechart.displayName="piechart",piechart.__docgenInfo={description:"",displayName:"piechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"Use the children prop to render additional elements on the chart.",name:"children",required:!1,type:{name:"ReactNode"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},thickness:{defaultValue:{value:"1"},description:`Thickness of the pie chart.
A value between 0 and 1, where 0 means no thickness
and 1 means the maximum thickness.`,name:"thickness",required:!1,type:{name:"number"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<DataPointPercentage[], number>"}},legendAlignmentHorizontal:{defaultValue:{value:"center"},description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:{value:"bottom"},description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},innerRadius:{defaultValue:null,description:"Inner radius in pixels. If > 0, creates a donut chart. Defaults to 0.",name:"innerRadius",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"20"},description:"Add padding to the chart",name:"padding",required:!1,type:{name:"number"}},gapScale:{defaultValue:{value:"0"},description:`Scale of the gap between groups in the pie chart
A value between 0 and 1, where 0 means no gap.`,name:"gapScale",required:!1,type:{name:"number"}},cornerScale:{defaultValue:{value:"0"},description:`Scale of the corner radius for the pie chart segments.
A value between 0 and 1, where 0 means no corner radius.`,name:"cornerScale",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-chart/pie-chart.tsx#piechart"]={docgenInfo:piechart.__docgenInfo,name:"piechart",path:"../charts/src/components/pie-chart/pie-chart.tsx#piechart"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(J,E,e)=>{e.d(E,{R:()=>k});var A=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),w=e.n(A),L=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),v={};v.insert="head",v.singleton=!1;var D=w()(L.A,v);const y=L.A.locals||{};var C=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=({data:V})=>(0,C.jsxs)(C.Fragment,{children:[V?.label,": ",V?.valueDisplay||V?.value]}),k=({data:V,top:N,left:f,component:se=s,children:R,className:P})=>(0,C.jsx)("div",{className:y.tooltip,style:{top:N,left:f},role:"tooltip",children:R||V&&(0,C.jsx)(se,{data:V,className:P})});try{k.displayName="BaseTooltip",k.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:k.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(J,E,e)=>{e.d(E,{A:()=>y});var A=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=e.n(A),L=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),v=e.n(L),D=v()(w());D.push([J.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),D.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const y=D},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":(J,E,e)=>{e.d(E,{A:()=>y});var A=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=e.n(A),L=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),v=e.n(L),D=v()(w());D.push([J.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),D.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const y=D},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(J,E,e)=>{e.d(E,{A:()=>y});var A=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=e.n(A),L=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),v=e.n(L),D=v()(w());D.push([J.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),D.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const y=D}}]);
