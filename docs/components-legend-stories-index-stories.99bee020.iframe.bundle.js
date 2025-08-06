"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx":(Q,E,e)=>{e.r(E),e.d(E,{AlignmentOptions:()=>n,CustomShape:()=>v,DashboardExample:()=>o,Horizontal:()=>M,StandaloneLegendWithChartId:()=>l,Vertical:()=>V,WithBarChart:()=>a,WithLineChart:()=>G,__namedExportsOrder:()=>h,default:()=>T});var A=e("../charts/src/providers/chart-context/chart-context.tsx"),w=e("../charts/src/providers/theme/theme-provider.tsx"),I=e("../charts/src/components/bar-chart/bar-chart.tsx"),x=e("../charts/src/components/line-chart/line-chart.tsx"),D=e("../charts/src/components/pie-chart/pie-chart.tsx"),C=e("../charts/src/components/legend/legend.tsx"),j=e("../charts/src/components/legend/use-chart-legend-data.ts"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const T={title:"JS Packages/Charts/Composites/Legend",component:C.s,parameters:{layout:"centered",docs:{description:{component:`
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
`}}}},p=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],H=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],te=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],M={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},V={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},ce=()=>{const f=(0,w.RW)(),u=(0,j.B)(p,f,{showValues:!1});return(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,s.jsx)(x.A,{data:p,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,s.jsx)(C.s,{items:u,orientation:"horizontal"})]})},G={render:()=>(0,s.jsx)(ce,{}),parameters:{docs:{description:{story:"Legend used with LineChart data, positioned independently below the chart."}}}},t=()=>{const f=(0,w.RW)(),u=(0,j.B)(H,f);return(0,s.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,s.jsx)(I.A,{data:H,showLegend:!1,width:400,height:300}),(0,s.jsx)(C.s,{items:u,orientation:"vertical"})]})},a={render:()=>(0,s.jsx)(t,{}),parameters:{docs:{description:{story:"Legend used with BarChart data, positioned vertically beside the chart."}}}},d=()=>(0,s.jsx)(A._$,{children:(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,s.jsx)(x.A,{chartId:"standalone-legend-chart",data:p,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,s.jsx)(C.s,{chartId:"standalone-legend-chart",orientation:"horizontal"})]})}),l={render:()=>(0,s.jsx)(d,{}),parameters:{docs:{source:{code:`<ChartProvider>
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
`}}}},c=()=>(0,s.jsx)(A._$,{children:(0,s.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,s.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,s.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,s.jsx)(x.A,{chartId:"dashboard-revenue",data:p,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,s.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,s.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,s.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,s.jsx)(I.A,{chartId:"dashboard-sales",data:H,showLegend:!1,width:280,height:200})]}),(0,s.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,s.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,s.jsx)(D.A,{chartId:"dashboard-devices",data:te,showLegend:!1})]})]})]}),(0,s.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,s.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,s.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,s.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,s.jsx)(C.s,{chartId:"dashboard-revenue",orientation:"vertical"})]}),(0,s.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,s.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,s.jsx)(C.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,s.jsx)(C.s,{chartId:"dashboard-devices",orientation:"vertical"})]})]})]})}),o={render:()=>(0,s.jsx)(c,{}),parameters:{layout:"fullscreen",docs:{description:{story:`
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
`}}}},n={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignmentHorizontal:"left",alignmentVertical:"top"},parameters:{docs:{description:{story:"Legend with custom alignment options."}}}},v={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"},parameters:{docs:{description:{story:"Legend with circle shape instead of default rectangle."}}}},h=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","CustomShape"];M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <WithLineChartData />,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with LineChart data, positioned independently below the chart.'
      }
    }
  }
}`,...G.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js":(Q,E,e)=>{e.d(E,{A:()=>G});var A=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),w=e("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),I=e.n(w),x=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),D=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),C=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function j(t,a){t(a)}function s(t){var a=t===void 0?{}:t,d=a.innerRadius,l=a.outerRadius,c=a.cornerRadius,o=a.startAngle,n=a.endAngle,v=a.padAngle,h=a.padRadius,f=(0,D.A)();return d!=null&&j(f.innerRadius,d),l!=null&&j(f.outerRadius,l),c!=null&&j(f.cornerRadius,c),o!=null&&j(f.startAngle,o),n!=null&&j(f.endAngle,n),v!=null&&j(f.padAngle,v),h!=null&&j(f.padRadius,h),f}function k(t){var a=t===void 0?{}:t,d=a.x,l=a.x0,c=a.x1,o=a.y,n=a.y0,v=a.y1,h=a.defined,f=a.curve,u=d3Area();return d&&setNumberOrNumberAccessor(u.x,d),l&&setNumberOrNumberAccessor(u.x0,l),c&&setNumberOrNumberAccessor(u.x1,c),o&&setNumberOrNumberAccessor(u.y,o),n&&setNumberOrNumberAccessor(u.y0,n),v&&setNumberOrNumberAccessor(u.y1,v),h&&u.defined(h),f&&u.curve(f),u}function T(t){var a=t===void 0?{}:t,d=a.x,l=a.y,c=a.defined,o=a.curve,n=d3Line();return d&&setNumberOrNumberAccessor(n.x,d),l&&setNumberOrNumberAccessor(n.y,l),c&&n.defined(c),o&&n.curve(o),n}function p(t){var a=t===void 0?{}:t,d=a.startAngle,l=a.endAngle,c=a.padAngle,o=a.value,n=a.sort,v=a.sortValues,h=(0,C.A)();return(n===null||n!=null)&&h.sort(n),(v===null||v!=null)&&h.sortValues(v),o!=null&&h.value(o),c!=null&&j(h.padAngle,c),d!=null&&j(h.startAngle,d),l!=null&&j(h.endAngle,l),h}function H(t){var a=t===void 0?{}:t,d=a.angle,l=a.radius,c=a.defined,o=a.curve,n=d3RadialLine();return d&&setNumberOrNumberAccessor(n.angle,d),l&&setNumberOrNumberAccessor(n.radius,l),c&&n.defined(c),o&&n.curve(o),n}function te(t){var a=t.keys,d=t.value,l=t.order,c=t.offset,o=d3Stack();return a&&o.keys(a),d&&setNumberOrNumberAccessor(o.value,d),l&&o.order(stackOrder(l)),c&&o.offset(stackOffset(c)),o}var M=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function V(){return V=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var d=arguments[a];for(var l in d)Object.prototype.hasOwnProperty.call(d,l)&&(t[l]=d[l])}return t},V.apply(this,arguments)}function ce(t,a){if(t==null)return{};var d={},l=Object.keys(t),c,o;for(o=0;o<l.length;o++)c=l[o],!(a.indexOf(c)>=0)&&(d[c]=t[c]);return d}function G(t){var a=t.className,d=t.top,l=t.left,c=t.data,o=c===void 0?[]:c,n=t.centroid,v=t.innerRadius,h=v===void 0?0:v,f=t.outerRadius,u=t.cornerRadius,S=t.startAngle,ne=t.endAngle,$=t.padAngle,N=t.padRadius,i=t.pieSort,se=t.pieSortValues,Z=t.pieValue,X=t.children,K=t.fill,F=K===void 0?"":K,r=ce(t,M),_=s({innerRadius:h,outerRadius:f,cornerRadius:u,padRadius:N}),b=p({startAngle:S,endAngle:ne,padAngle:$,value:Z,sort:i,sortValues:se}),g=b(o);return X?A.createElement(A.Fragment,null,X({arcs:g,path:_,pie:b})):A.createElement(x.A,{className:"visx-pie-arcs-group",top:d,left:l},g.map(function(O,P){return A.createElement("g",{key:"pie-arc-"+P},A.createElement("path",V({className:I()("visx-pie-arc",a),d:_(O)||"",fill:F==null||typeof F=="string"?F:F(O)},r)),n?.(_.centroid(O),O))}))}},"../charts/src/components/bar-chart/bar-chart.tsx":(Q,E,e)=>{e.d(E,{A:()=>F});var A=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),w=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),I=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),x=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),D=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),C=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),j=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),s=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),k=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),T=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),H=e("../charts/src/providers/chart-context/utils.ts"),te=e("../charts/src/providers/chart-context/chart-context.tsx"),M=e("../charts/src/providers/theme/theme-provider.tsx"),V=e("../charts/src/components/legend/legend.tsx"),ce=e("../charts/src/components/legend/use-chart-legend-data.ts"),G=e("../charts/src/components/shared/use-chart-data-transform.ts"),t=e("../charts/src/components/shared/use-chart-margin.tsx"),a=e("../charts/src/components/shared/use-element-height.ts");const d=(r,_={enabled:!1})=>{const{enabled:b,minValueRatio:g=.6,maxValueRatio:O=.008}=_;return(0,p.useMemo)(()=>{if(!b)return r;const P=[];for(const L of r)for(const R of L.data)R.value!==null&&R.value!==0&&P.push(R.value);if(P.length===0)return r;const B=P.map(Math.abs),z=Math.min(...B),J=Math.max(...B),q=Math.min(z*g,J*O);return r.map(L=>({...L,data:L.data.map(R=>R.value===0?{...R,visualValue:q}:R)}))},[r,b,g,O])};var l=e("../charts/src/components/shared/with-responsive.tsx"),c=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),o=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(o),v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),h={};h.insert="head",h.singleton=!1;var f=n()(v.A,h);const u=v.A.locals||{};var S=e("../number-formatters/src/index.ts");const ne=r=>new Date(r).toLocaleDateString(void 0,{month:"short",day:"numeric"}),$=r=>typeof r.paddingInner=="number"?r.paddingInner:0;function N(r,_,b={}){const g=(0,p.useMemo)(()=>{const O={type:"band",padding:.2,paddingInner:.1},P={type:"linear",nice:!0,zero:!1},B=r?.[0]?.data?.[0]?.label?L=>L:ne,z=S.qe,J=L=>L?.label||L?.date,q=L=>{const R=L;return R?.visualValue!==void 0?R.visualValue:L?.value};return{vertical:{xTickFormat:B,yTickFormat:z,tooltipLabelFormatter:B,xAccessor:J,yAccessor:q,gridVisibility:"x",xScale:O,yScale:P},horizontal:{xTickFormat:z,yTickFormat:B,tooltipLabelFormatter:B,xAccessor:q,yAccessor:J,gridVisibility:"y",xScale:P,yScale:O}}},[r]);return(0,p.useMemo)(()=>{const O=_?"horizontal":"vertical",{xTickFormat:P,yTickFormat:B,tooltipLabelFormatter:z,xAccessor:J,yAccessor:q,gridVisibility:L,xScale:R,yScale:me}=g[O],ge={...R,...b.xScale||{}},ve={...me,...b.yScale||{}},ue=_?b.axis?.y?.tickFormat:b.axis?.x?.tickFormat;return{gridVisibility:L,xScale:ge,yScale:ve,accessors:{xAccessor:J,yAccessor:q},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:P,...b.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:B,...b.axis?.y||{}}},barGroup:{padding:$(_?ve:ge)},tooltip:{labelFormatter:ue||z}}},[g,b,_])}var i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const se=r=>r?.length?r.some(b=>b.data.some(g=>isNaN(g.value)||g.value===null||g.value===void 0||!g.label&&(!("date"in g&&g.date)||isNaN(g.date.getTime()))))?"Invalid data":null:"No data available",Z=(r,_)=>`bar-pattern-${r}-${_}`,X=({data:r,chartId:_,width:b,height:g=400,className:O,margin:P,withTooltips:B=!1,showLegend:z=!1,legendOrientation:J="horizontal",legendAlignmentHorizontal:q="center",legendAlignmentVertical:L="bottom",legendShape:R="rect",gridVisibility:me,renderTooltip:ge,options:ve={},orientation:ue="vertical",withPatterns:re=!1,showZeroValues:be=!1})=>{const _e=ue==="horizontal",oe=(0,p.useId)(),le=(0,H.R)(_),ye=(0,M.RW)(),ee=(0,M.Ox)(r),ae=(0,G.E)(r),Ce=d(ae,{enabled:be}),je=(0,ce.B)(ae,ye),W=N(Ce,_e,ve),pe=(0,t.a)(g,W,ae,ee,_e),[Se,Ae]=(0,a.v)(),De=(0,p.useRef)(null),[ie,Le]=(0,p.useState)(void 0),[U,Y]=(0,p.useState)(!1),Ie=Math.max(0,...r.map(m=>m.data?.length||0))*r.length,{tooltipRef:Pe,onChartFocus:Ee,onChartBlur:we,onChartKeyDown:Te}=(0,c.JZ)({selectedIndex:ie,setSelectedIndex:Le,isNavigating:U,setIsNavigating:Y,chartRef:De,totalPoints:Ie}),de=(0,p.useCallback)((m,y)=>m?.options?.stroke||ee.colors[y%ee.colors.length],[ee]),Oe=(0,p.useCallback)(m=>()=>re?`url(#${Z(oe,m)})`:de(ae[m],m),[re,de,ae,oe]),Be=(0,p.useCallback)(({tooltipData:m})=>{const y=m?.nearestDatum?.datum;return y?(0,i.jsxs)("div",{className:u["bar-chart__tooltip"],children:[(0,i.jsx)("div",{className:u["bar-chart__tooltip-header"],children:m?.nearestDatum?.key}),(0,i.jsxs)("div",{className:u["bar-chart__tooltip-row"],children:[(0,i.jsxs)("span",{className:u["bar-chart__tooltip-label"],children:[W.tooltip.labelFormatter(y.label||(y.date?y.date.getTime():0),0,[]),":"]}),(0,i.jsx)("span",{className:u["bar-chart__tooltip-value"],children:y.value})]})]}):null},[W.tooltip]),Ne=(0,p.useCallback)((m,y)=>{const fe=m%4,he=Z(oe,m),xe={id:he,stroke:"white",strokeWidth:1,background:y};switch(fe){case 0:default:return(0,i.jsx)(A.A,{...xe,width:5,height:5,orientation:["diagonal"]},he);case 1:return(0,i.jsx)(w.A,{...xe,width:6,height:6,fill:"white"},he);case 2:return(0,i.jsx)(I.A,{...xe,width:4,height:4},he);case 3:return(0,i.jsx)(x.A,{...xe,size:8,height:3},he)}},[oe]),Fe=(0,p.useCallback)((m,y)=>`
			.visx-bar[fill="url(#${Z(oe,m)})"] {
				stroke: ${y};
				stroke-width: 1;
				}
			`,[oe]),ze=(0,p.useCallback)(()=>{if(ie===void 0)return"";const m=Math.max(...r.map(Ke=>Ke.data.length)),y=Math.floor(ie/r.length),fe=ie%r.length;if(y>=m||fe>=r.length)return"";const he=r[fe];if(y>=he.data.length)return"";const xe=fe*m+y;return`
			.bar-chart[data-chart-id="bar-chart-${le}"] .visx-bar-group .visx-bar:nth-child(${xe+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[ie,r,le]),Re=se(ae),We=!Re,ke=(0,p.useMemo)(()=>({orientation:ue,withPatterns:re}),[ue,re]);if((0,H.t)(le,je,ye,"bar",We,ke),Re)return(0,i.jsx)("div",{className:(0,T.A)("bar-chart",u["bar-chart"]),children:Re});const Ve=me??W.gridVisibility,Me=ze();return(0,i.jsxs)("div",{className:(0,T.A)("bar-chart",u["bar-chart"],O),"data-testid":"bar-chart",role:"grid","aria-label":"bar chart",style:{width:b,height:g,display:"flex",flexDirection:z&&L==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:Te,onFocus:Ee,onBlur:we,ref:De,"data-chart-id":`bar-chart-${le}`,children:[(0,i.jsxs)(D.A,{theme:ee,width:b,height:g-(z?Ae:0),margin:{...pe,...P,...z&&L==="top"?{top:(pe.top||0)+Ae}:{}},xScale:W.xScale,yScale:W.yScale,horizontal:_e,pointerEventsDataKey:"nearest",children:[(0,i.jsx)(C.A,{columns:Ve.includes("y"),rows:Ve.includes("x"),numTicks:4}),re&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("defs",{"data-testid":"bar-chart-patterns",children:ae.map((m,y)=>Ne(y,de(m,y)))}),(0,i.jsx)("style",{children:ae.map((m,y)=>Fe(y,de(m,y)))})]}),Me&&(0,i.jsx)("style",{children:Me}),(0,i.jsx)(j.A,{padding:W.barGroup.padding,children:Ce.map((m,y)=>(0,i.jsx)(s.A,{dataKey:m?.label,data:m.data,yAccessor:W.accessors.yAccessor,xAccessor:W.accessors.xAccessor,colorAccessor:Oe(y)},m?.label))}),(0,i.jsx)(k.A,{...W.axis.x}),(0,i.jsx)(k.A,{...W.axis.y}),B&&(0,i.jsx)(c.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:ge||Be,selectedIndex:ie,tooltipRef:Pe,keyboardFocusedClassName:u["bar-chart__tooltip--keyboard-focused"],series:r,mode:"individual"})]}),z&&(0,i.jsx)(V.s,{items:je,orientation:J,alignmentHorizontal:q,alignmentVertical:L,className:u["bar-chart__legend"],shape:R,ref:Se,chartId:le})]})},K=r=>(0,p.useContext)(te.uR)?(0,i.jsx)(X,{...r}):(0,i.jsx)(te._$,{children:(0,i.jsx)(X,{...r})});K.displayName="BarChart";const F=(0,l.F)(K);try{K.displayName="BarChart",K.__docgenInfo={description:"",displayName:"BarChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:{value:"400"},description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},orientation:{defaultValue:{value:"vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"rect"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendAlignmentHorizontal:{defaultValue:{value:"center"},description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:{value:"bottom"},description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withPatterns:{defaultValue:{value:"false"},description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},showZeroValues:{defaultValue:{value:"false"},description:"",name:"showZeroValues",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/bar-chart/bar-chart.tsx#BarChart"]={docgenInfo:K.__docgenInfo,name:"BarChart",path:"../charts/src/components/bar-chart/bar-chart.tsx#BarChart"})}catch{}},"../charts/src/components/pie-chart/pie-chart.tsx":(Q,E,e)=>{e.d(E,{A:()=>u});var A=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),w=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),I=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),x=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),D=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),C=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js");const s=({withTooltips:S})=>{const{tooltipOpen:ne,tooltipLeft:$,tooltipTop:N,tooltipData:i,hideTooltip:se,showTooltip:Z}=(0,C.A)(),X=(0,x.useCallback)((F,r)=>{if(!S)return;const _=(0,D.A)(F);_&&Z({tooltipData:r,tooltipLeft:_.x,tooltipTop:_.y-10})},[S,Z]),K=(0,x.useCallback)(()=>{S&&se()},[S,se]);return{onMouseMove:X,onMouseLeave:K,tooltipOpen:ne,tooltipData:i||null,tooltipLeft:$,tooltipTop:N}};var k=e("../charts/src/providers/chart-context/utils.ts"),T=e("../charts/src/providers/chart-context/chart-context.tsx"),p=e("../charts/src/providers/theme/theme-provider.tsx"),H=e("../charts/src/providers/theme/themes.ts"),te=e("../charts/src/components/legend/legend.tsx"),M=e("../charts/src/components/legend/use-chart-legend-data.ts"),V=e("../charts/src/components/shared/use-element-height.ts"),ce=e("../charts/src/components/shared/with-responsive.tsx"),G=e("../charts/src/components/tooltip/base-tooltip.tsx"),t=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(t),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),l={};l.insert="head",l.singleton=!1;var c=a()(d.A,l);const o=d.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const v=S=>{if(!S.length)return{isValid:!1,message:"No data available"};if(S.some(N=>N.percentage<0||N.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const $=S.reduce((N,i)=>N+i.percentage,0);return Math.abs($-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},h=({data:S,chartId:ne,withTooltips:$=!1,className:N,showLegend:i=!1,legendOrientation:se="horizontal",legendAlignmentHorizontal:Z="center",legendAlignmentVertical:X="bottom",legendShape:K="circle",size:F,thickness:r=1,padding:_=20,gapScale:b=0,cornerScale:g=0,children:O=null})=>{const P=(0,p.RW)(),B=(0,k.R)(ne),[z,J]=(0,V.v)(),{onMouseMove:q,onMouseLeave:L,tooltipOpen:R,tooltipData:me,tooltipLeft:ge,tooltipTop:ve}=s({withTooltips:$}),ue=(0,x.useMemo)(()=>({showValues:!0}),[]),re=(0,M.B)(S,P,ue),{isValid:be,message:_e}=v(S),oe=(0,x.useMemo)(()=>({thickness:r,gapScale:b,cornerScale:g}),[r,b,g]);if((0,k.t)(B,re,P,"pie",be,oe),!be)return(0,n.jsx)("div",{className:(0,I.A)("pie-chart",o["pie-chart"],N),children:(0,n.jsx)("div",{className:o["error-message"],children:_e})});const le=F,ye=F,ee=i&&X==="top"?ye-J:ye,ae=Math.min(le,ee)/2,Ce=le/2,je=ee/2,W=b*(2*Math.PI/S.length),pe=ae-_,Se=r===0?0:pe*(1-r),Ae=(pe-Se)/2,De=g?Math.min(g*pe,Ae):0,ie=S.map((U,Y)=>({...U,index:Y})),Le={value:U=>U.value,fill:U=>U?.color||P.colors[U.index]};return(0,n.jsxs)("div",{className:(0,I.A)("pie-chart",o["pie-chart"],N),style:{display:"flex",flexDirection:i&&X==="top"?"column-reverse":"column"},children:[(0,n.jsx)("svg",{viewBox:`0 0 ${F} ${ee}`,preserveAspectRatio:"xMidYMid meet",width:F,height:ee,children:(0,n.jsxs)(A.A,{top:je,left:Ce,children:[(0,n.jsx)(w.A,{data:ie,pieValue:Le.value,outerRadius:pe,innerRadius:Se,padAngle:W,cornerRadius:De,children:U=>U.arcs.map((Y,Ie)=>{const[Pe,Ee]=U.path.centroid(Y),we=Y.endAngle-Y.startAngle>=.25,Te=Oe=>q(Oe,Y.data),de={d:U.path(Y)||"",fill:Le.fill(Y.data)};return $&&(de.onMouseMove=Te,de.onMouseLeave=L),(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{...de}),we&&(0,n.jsx)("text",{x:Pe,y:Ee,dy:".33em",fill:P.labelBackgroundColor||H.zQ.labelBackgroundColor,fontSize:12,textAnchor:"middle",pointerEvents:"none",children:Y.data.label})]},`arc-${Ie}`)})}),O]})}),i&&(0,n.jsx)(te.s,{items:re,orientation:se,alignmentHorizontal:Z,alignmentVertical:X,className:o["pie-chart-legend"],shape:K,ref:z,chartId:B}),$&&R&&me&&(0,n.jsx)(G.R,{data:me,top:ve||0,left:ge||0,style:{transform:"translate(-50%, -100%)"}})]})},f=S=>(0,x.useContext)(T.uR)?(0,n.jsx)(h,{...S}):(0,n.jsx)(T._$,{children:(0,n.jsx)(h,{...S})});f.displayName="PieChart";const u=(0,ce.F)(f);try{f.displayName="PieChart",f.__docgenInfo={description:"",displayName:"PieChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"Use the children prop to render additional elements on the chart.",name:"children",required:!1,type:{name:"ReactNode"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<DataPointPercentage[], number>"}},legendAlignmentHorizontal:{defaultValue:{value:"center"},description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:{value:"bottom"},description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},innerRadius:{defaultValue:null,description:"Inner radius in pixels. If > 0, creates a donut chart. Defaults to 0.",name:"innerRadius",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"20"},description:"Add padding to the chart",name:"padding",required:!1,type:{name:"number"}},thickness:{defaultValue:{value:"1"},description:`Thickness of the pie chart.
A value between 0 and 1, where 0 means no thickness
and 1 means the maximum thickness.`,name:"thickness",required:!1,type:{name:"number"}},gapScale:{defaultValue:{value:"0"},description:`Scale of the gap between groups in the pie chart
A value between 0 and 1, where 0 means no gap.`,name:"gapScale",required:!1,type:{name:"number"}},cornerScale:{defaultValue:{value:"0"},description:`Scale of the corner radius for the pie chart segments.
A value between 0 and 1, where 0 means no corner radius.`,name:"cornerScale",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-chart/pie-chart.tsx#PieChart"]={docgenInfo:f.__docgenInfo,name:"PieChart",path:"../charts/src/components/pie-chart/pie-chart.tsx#PieChart"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(Q,E,e)=>{e.d(E,{R:()=>k});var A=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),w=e.n(A),I=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),x={};x.insert="head",x.singleton=!1;var D=w()(I.A,x);const C=I.A.locals||{};var j=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=({data:T})=>(0,j.jsxs)(j.Fragment,{children:[T?.label,": ",T?.valueDisplay||T?.value]}),k=({data:T,top:p,left:H,component:te=s,children:M,className:V})=>(0,j.jsx)("div",{className:C.tooltip,style:{top:p,left:H},role:"tooltip",children:M||T&&(0,j.jsx)(te,{data:T,className:V})});try{k.displayName="BaseTooltip",k.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:k.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(Q,E,e)=>{e.d(E,{A:()=>C});var A=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=e.n(A),I=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),x=e.n(I),D=x()(w());D.push([Q.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),D.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const C=D},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":(Q,E,e)=>{e.d(E,{A:()=>C});var A=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=e.n(A),I=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),x=e.n(I),D=x()(w());D.push([Q.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),D.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const C=D},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(Q,E,e)=>{e.d(E,{A:()=>C});var A=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=e.n(A),I=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),x=e.n(I),D=x()(w());D.push([Q.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),D.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const C=D}}]);
