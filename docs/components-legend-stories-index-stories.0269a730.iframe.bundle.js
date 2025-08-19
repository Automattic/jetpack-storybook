"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx":(Z,D,e)=>{e.r(D),e.d(D,{AlignmentOptions:()=>o,CustomShape:()=>l,DashboardExample:()=>n,Horizontal:()=>z,StandaloneLegendWithChartId:()=>d,Vertical:()=>B,WithBarChart:()=>a,WithLineChart:()=>G,__namedExportsOrder:()=>b,default:()=>V});var v=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),I=e("../charts/src/components/bar-chart/bar-chart.tsx"),C=e("../charts/src/components/line-chart/line-chart.tsx"),f=e("../charts/src/components/pie-chart/pie-chart.tsx"),p=e("../charts/src/components/legend/legend.tsx"),E=e("../charts/src/components/legend/use-chart-legend-data.ts"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const V={title:"JS Packages/Charts/Composites/Legend",component:p.s,parameters:{layout:"centered",docs:{description:{component:`
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
`}}}},S=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],k=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],x=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],z={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},B={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},K=()=>{const h=(0,E.B)(S,{showValues:!1});return(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,t.jsx)(C.A,{data:S,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,t.jsx)(p.s,{items:h,orientation:"horizontal"})]})},G={render:()=>(0,t.jsx)(v.Sx,{children:(0,t.jsx)(K,{})}),parameters:{docs:{description:{story:"Legend used with LineChart data, positioned independently below the chart."}}}},re=()=>{const h=(0,E.B)(k);return(0,t.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,t.jsx)(I.A,{data:k,showLegend:!1,width:400,height:300}),(0,t.jsx)(p.s,{items:h,orientation:"vertical"})]})},a={render:()=>(0,t.jsx)(v.Sx,{children:(0,t.jsx)(re,{})}),parameters:{docs:{description:{story:"Legend used with BarChart data, positioned vertically beside the chart."}}}},s=()=>(0,t.jsx)(v.Sx,{children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,t.jsx)(C.A,{chartId:"standalone-legend-chart",data:S,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,t.jsx)(p.s,{chartId:"standalone-legend-chart",orientation:"horizontal"})]})}),d={render:()=>(0,t.jsx)(s,{}),parameters:{docs:{source:{code:`<GlobalChartsProvider>
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
`}}}},i=()=>(0,t.jsx)(v.Sx,{children:(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,t.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,t.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,t.jsx)(C.A,{chartId:"dashboard-revenue",data:S,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,t.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,t.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,t.jsx)(I.A,{chartId:"dashboard-sales",data:k,showLegend:!1,width:280,height:200})]}),(0,t.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,t.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,t.jsx)(f.A,{chartId:"dashboard-devices",data:x,showLegend:!1})]})]})]}),(0,t.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,t.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,t.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,t.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,t.jsx)(p.s,{chartId:"dashboard-revenue",orientation:"vertical"})]}),(0,t.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,t.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,t.jsx)(p.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,t.jsx)(p.s,{chartId:"dashboard-devices",orientation:"vertical"})]})]})]})}),n={render:()=>(0,t.jsx)(i,{}),parameters:{layout:"fullscreen",docs:{description:{story:`
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
`}}}},o={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignment:"start"},parameters:{docs:{description:{story:"Legend with custom alignment options."}}}},l={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"},parameters:{docs:{description:{story:"Legend with circle shape instead of default rectangle."}}}},b=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","CustomShape"];z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js":(Z,D,e)=>{e.d(D,{A:()=>re});var v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),I=e("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),C=e.n(I),f=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),p=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),E=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function t(a,s){a(s)}function ne(a){var s=a===void 0?{}:a,d=s.innerRadius,i=s.outerRadius,n=s.cornerRadius,o=s.startAngle,l=s.endAngle,b=s.padAngle,h=s.padRadius,u=(0,p.A)();return d!=null&&t(u.innerRadius,d),i!=null&&t(u.outerRadius,i),n!=null&&t(u.cornerRadius,n),o!=null&&t(u.startAngle,o),l!=null&&t(u.endAngle,l),b!=null&&t(u.padAngle,b),h!=null&&t(u.padRadius,h),u}function V(a){var s=a===void 0?{}:a,d=s.x,i=s.x0,n=s.x1,o=s.y,l=s.y0,b=s.y1,h=s.defined,u=s.curve,j=d3Area();return d&&setNumberOrNumberAccessor(j.x,d),i&&setNumberOrNumberAccessor(j.x0,i),n&&setNumberOrNumberAccessor(j.x1,n),o&&setNumberOrNumberAccessor(j.y,o),l&&setNumberOrNumberAccessor(j.y0,l),b&&setNumberOrNumberAccessor(j.y1,b),h&&j.defined(h),u&&j.curve(u),j}function S(a){var s=a===void 0?{}:a,d=s.x,i=s.y,n=s.defined,o=s.curve,l=d3Line();return d&&setNumberOrNumberAccessor(l.x,d),i&&setNumberOrNumberAccessor(l.y,i),n&&l.defined(n),o&&l.curve(o),l}function k(a){var s=a===void 0?{}:a,d=s.startAngle,i=s.endAngle,n=s.padAngle,o=s.value,l=s.sort,b=s.sortValues,h=(0,E.A)();return(l===null||l!=null)&&h.sort(l),(b===null||b!=null)&&h.sortValues(b),o!=null&&h.value(o),n!=null&&t(h.padAngle,n),d!=null&&t(h.startAngle,d),i!=null&&t(h.endAngle,i),h}function x(a){var s=a===void 0?{}:a,d=s.angle,i=s.radius,n=s.defined,o=s.curve,l=d3RadialLine();return d&&setNumberOrNumberAccessor(l.angle,d),i&&setNumberOrNumberAccessor(l.radius,i),n&&l.defined(n),o&&l.curve(o),l}function z(a){var s=a.keys,d=a.value,i=a.order,n=a.offset,o=d3Stack();return s&&o.keys(s),d&&setNumberOrNumberAccessor(o.value,d),i&&o.order(stackOrder(i)),n&&o.offset(stackOffset(n)),o}var B=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function K(){return K=Object.assign?Object.assign.bind():function(a){for(var s=1;s<arguments.length;s++){var d=arguments[s];for(var i in d)Object.prototype.hasOwnProperty.call(d,i)&&(a[i]=d[i])}return a},K.apply(this,arguments)}function G(a,s){if(a==null)return{};var d={},i=Object.keys(a),n,o;for(o=0;o<i.length;o++)n=i[o],!(s.indexOf(n)>=0)&&(d[n]=a[n]);return d}function re(a){var s=a.className,d=a.top,i=a.left,n=a.data,o=n===void 0?[]:n,l=a.centroid,b=a.innerRadius,h=b===void 0?0:b,u=a.outerRadius,j=a.cornerRadius,U=a.startAngle,P=a.endAngle,q=a.padAngle,T=a.padRadius,ee=a.pieSort,ie=a.pieSortValues,ce=a.pieValue,Q=a.children,r=a.fill,H=r===void 0?"":r,ue=G(a,B),X=ne({innerRadius:h,outerRadius:u,cornerRadius:j,padRadius:T}),pe=k({startAngle:U,endAngle:P,padAngle:q,value:ce,sort:ee,sortValues:ie}),te=pe(o);return Q?v.createElement(v.Fragment,null,Q({arcs:te,path:X,pie:pe})):v.createElement(f.A,{className:"visx-pie-arcs-group",top:d,left:i},te.map(function(oe,be){return v.createElement("g",{key:"pie-arc-"+be},v.createElement("path",K({className:C()("visx-pie-arc",s),d:X(oe)||"",fill:H==null||typeof H=="string"?H:H(oe)},ue)),l?.(X.centroid(oe),oe))}))}},"../charts/src/components/bar-chart/bar-chart.tsx":(Z,D,e)=>{e.d(D,{A:()=>be});var v=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),I=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),C=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),f=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),p=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),E=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),t=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),ne=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),V=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),S=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),k=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),x=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),z=e("../charts/src/hooks/use-global-chart-theme.ts"),B=e("../charts/src/hooks/use-xychart-theme.ts"),K=e("../charts/src/providers/chart-context/utils.ts"),G=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),re=e("../charts/src/utils/create-composition.ts"),a=e("../charts/src/components/legend/legend.tsx"),s=e("../charts/src/components/legend/use-chart-legend-data.ts"),d=e("../charts/src/components/shared/single-chart-context.tsx"),i=e("../charts/src/components/shared/use-chart-data-transform.ts"),n=e("../charts/src/components/shared/use-chart-margin.tsx"),o=e("../charts/src/components/shared/use-element-height.ts");const l=(c,O={enabled:!1})=>{const{enabled:A,minValueRatio:y=.6,maxValueRatio:$=.008}=O;return(0,x.useMemo)(()=>{if(!A)return c;const Y=[];for(const L of c)for(const w of L.data)w.value!==null&&w.value!==0&&Y.push(w.value);if(Y.length===0)return c;const N=Y.map(Math.abs),M=Math.min(...N),J=Math.max(...N),F=Math.min(M*y,J*$);return c.map(L=>({...L,data:L.data.map(w=>w.value===0?{...w,visualValue:F}:w)}))},[c,A,y,$])};var b=e("../charts/src/components/shared/with-responsive.tsx"),h=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=e.n(u),U=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),P={};P.insert="head",P.singleton=!1;var q=j()(U.A,P);const T=U.A.locals||{};var ee=e("../number-formatters/src/index.ts");const ie=c=>new Date(c).toLocaleDateString(void 0,{month:"short",day:"numeric"}),ce=c=>typeof c.paddingInner=="number"?c.paddingInner:0;function Q(c,O,A={}){const y=(0,x.useMemo)(()=>{const $={type:"band",padding:.2,paddingInner:.1},Y={type:"linear",nice:!0,zero:!1},N=c?.[0]?.data?.[0]?.label?L=>L:ie,M=ee.qe,J=L=>L?.label||L?.date,F=L=>{const w=L;return w?.visualValue!==void 0?w.visualValue:L?.value};return{vertical:{xTickFormat:N,yTickFormat:M,tooltipLabelFormatter:N,xAccessor:J,yAccessor:F,gridVisibility:"x",xScale:$,yScale:Y},horizontal:{xTickFormat:M,yTickFormat:N,tooltipLabelFormatter:N,xAccessor:F,yAccessor:J,gridVisibility:"y",xScale:Y,yScale:$}}},[c]);return(0,x.useMemo)(()=>{const $=O?"horizontal":"vertical",{xTickFormat:Y,yTickFormat:N,tooltipLabelFormatter:M,xAccessor:J,yAccessor:F,gridVisibility:L,xScale:w,yScale:fe}=y[$],he={...w,...A.xScale||{}},se={...fe,...A.yScale||{}},me=O?A.axis?.y?.tickFormat:A.axis?.x?.tickFormat;return{gridVisibility:L,xScale:he,yScale:se,accessors:{xAccessor:J,yAccessor:F},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:Y,...A.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:N,...A.axis?.y||{}}},barGroup:{padding:ce(O?se:he)},tooltip:{labelFormatter:me||M}}},[y,A,O])}var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const H=S.__,ue=c=>c?.length?c.some(A=>A.data.some(y=>isNaN(y.value)||y.value===null||y.value===void 0||!y.label&&(!("date"in y&&y.date)||isNaN(y.date.getTime()))))?"Invalid data":null:"No data available",X=(c,O)=>`bar-pattern-${c}-${O}`,pe=({data:c,chartId:O,width:A,height:y=400,className:$,margin:Y,withTooltips:N=!1,showLegend:M=!1,legendOrientation:J="horizontal",legendPosition:F="bottom",legendAlignment:L="center",legendShape:w="rect",gridVisibility:fe,renderTooltip:he,options:se={},orientation:me="vertical",withPatterns:ge=!1,showZeroValues:Ee=!1,children:Te})=>{const le=me==="horizontal",R=(0,K.R)(O),ye=(0,z.u)(),Ae=(0,B.O)(c),ae=(0,i.E)(c),Ce=l(ae,{enabled:Ee}),W=(0,s.B)(ae),_=Q(Ce,le,se),Le=(0,n.a)(y,_,ae,Ae,le),[we,je]=(0,o.v)(),De=(0,x.useRef)(null),[de,Se]=(0,x.useState)(void 0),[Pe,Ve]=(0,x.useState)(!1),Be=Math.max(0,...c.map(m=>m.data?.length||0))*c.length,{tooltipRef:Ne,onChartFocus:Fe,onChartBlur:We,onChartKeyDown:ke}=(0,h.JZ)({selectedIndex:de,setSelectedIndex:Se,isNavigating:Pe,setIsNavigating:Ve,chartRef:De,totalPoints:Be}),Ie=(0,x.useCallback)((m,g)=>m?.options?.stroke||ye.colors[g%ye.colors.length],[ye]),ze=(0,x.useCallback)(m=>()=>ge?`url(#${X(R,m)})`:Ie(ae[m],m),[ge,Ie,ae,R]),Ke=(0,x.useCallback)(({tooltipData:m})=>{const g=m?.nearestDatum?.datum;return g?(0,r.jsxs)("div",{className:T["bar-chart__tooltip"],children:[(0,r.jsx)("div",{className:T["bar-chart__tooltip-header"],children:m?.nearestDatum?.key}),(0,r.jsxs)("div",{className:T["bar-chart__tooltip-row"],children:[(0,r.jsxs)("span",{className:T["bar-chart__tooltip-label"],children:[_.tooltip.labelFormatter(g.label||(g.date?g.date.getTime():0),0,[]),":"]}),(0,r.jsx)("span",{className:T["bar-chart__tooltip-value"],children:g.value})]})]}):null},[_.tooltip]),Ge=(0,x.useCallback)((m,g)=>{const xe=m%4,ve=X(R,m),_e={id:ve,stroke:"white",strokeWidth:1,background:g};switch(xe){case 0:default:return(0,r.jsx)(v.A,{..._e,width:5,height:5,orientation:["diagonal"]},ve);case 1:return(0,r.jsx)(I.A,{..._e,width:6,height:6,fill:"white"},ve);case 2:return(0,r.jsx)(C.A,{..._e,width:4,height:4},ve);case 3:return(0,r.jsx)(f.A,{..._e,size:8,height:3},ve)}},[R]),Ue=(0,x.useCallback)((m,g)=>`
			.visx-bar[fill="url(#${X(R,m)})"] {
				stroke: ${g};
				stroke-width: 1;
				}
			`,[R]),He=(0,x.useCallback)(()=>{if(de===void 0)return"";const m=Math.max(...c.map(Ye=>Ye.data.length)),g=Math.floor(de/c.length),xe=de%c.length;if(g>=m||xe>=c.length)return"";const ve=c[xe];if(g>=ve.data.length)return"";const _e=xe*m+g;return`
			.bar-chart[data-chart-id="bar-chart-${R}"] .visx-bar-group .visx-bar:nth-child(${_e+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[de,c,R]),Oe=ue(ae),Xe=!Oe,$e=(0,x.useMemo)(()=>({orientation:me,withPatterns:ge}),[me,ge]);if((0,K.t)({chartId:R,legendItems:W,chartType:"bar",isDataValid:Xe,metadata:$e}),Oe)return(0,r.jsx)("div",{className:(0,k.A)("bar-chart",T["bar-chart"]),children:Oe});const Re=fe??_.gridVisibility,Me=He();return(0,r.jsx)(d.ON.Provider,{value:{chartId:R,chartWidth:A,chartHeight:y-(M?je:0)},children:(0,r.jsxs)("div",{className:(0,k.A)("bar-chart",T["bar-chart"],$),"data-testid":"bar-chart",role:"grid","aria-label":H("Bar chart","jetpack-charts"),style:{width:A,height:y,display:"flex",flexDirection:M&&F==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:ke,onFocus:Fe,onBlur:We,ref:De,"data-chart-id":`bar-chart-${R}`,children:[(0,r.jsxs)(p.A,{theme:Ae,width:A,height:y-(M?je:0),margin:{...Le,...Y,...M&&F==="top"?{top:(Le.top||0)+je}:{}},xScale:_.xScale,yScale:_.yScale,horizontal:le,pointerEventsDataKey:"nearest",children:[(0,r.jsx)(E.A,{columns:Re.includes("y"),rows:Re.includes("x"),numTicks:4}),ge&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("defs",{"data-testid":"bar-chart-patterns",children:ae.map((m,g)=>Ge(g,Ie(m,g)))}),(0,r.jsx)("style",{children:ae.map((m,g)=>Ue(g,Ie(m,g)))})]}),Me&&(0,r.jsx)("style",{children:Me}),(0,r.jsx)(t.A,{padding:_.barGroup.padding,children:Ce.map((m,g)=>(0,r.jsx)(ne.A,{dataKey:m?.label,data:m.data,yAccessor:_.accessors.yAccessor,xAccessor:_.accessors.xAccessor,colorAccessor:ze(g)},m?.label))}),(0,r.jsx)(V.A,{..._.axis.x}),(0,r.jsx)(V.A,{..._.axis.y}),N&&(0,r.jsx)(h.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:he||Ke,selectedIndex:de,tooltipRef:Ne,keyboardFocusedClassName:T["bar-chart__tooltip--keyboard-focused"],series:c,mode:"individual"})]}),M&&(0,r.jsx)(a.s,{items:W,orientation:J,position:F,alignment:L,className:T["bar-chart__legend"],shape:w,ref:we,chartId:R}),Te]})})},te=c=>(0,x.useContext)(G.mJ)?(0,r.jsx)(pe,{...c}):(0,r.jsx)(G.Sx,{children:(0,r.jsx)(pe,{...c})});te.displayName="BarChart";const oe=(0,re.E)(te,{Legend:a.s}),be=(0,re.E)((0,b.F)(te),{Legend:a.s})},"../charts/src/components/pie-chart/pie-chart.tsx":(Z,D,e)=>{e.d(D,{A:()=>h});var v=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),I=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),C=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../charts/src/hooks/use-global-chart-theme.ts"),E=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),t=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js");const ne=({withTooltips:u})=>{const{tooltipOpen:j,tooltipLeft:U,tooltipTop:P,tooltipData:q,hideTooltip:T,showTooltip:ee}=(0,t.A)(),ie=(0,f.useCallback)((Q,r)=>{if(!u)return;const H=(0,E.A)(Q);H&&ee({tooltipData:r,tooltipLeft:H.x,tooltipTop:H.y-10})},[u,ee]),ce=(0,f.useCallback)(()=>{u&&T()},[u,T]);return{onMouseMove:ie,onMouseLeave:ce,tooltipOpen:j,tooltipData:q||null,tooltipLeft:U,tooltipTop:P}};var V=e("../charts/src/providers/chart-context/utils.ts"),S=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),k=e("../charts/src/components/legend/legend.tsx"),x=e("../charts/src/components/legend/use-chart-legend-data.ts"),z=e("../charts/src/components/shared/use-element-height.ts"),B=e("../charts/src/components/shared/with-responsive.tsx"),K=e("../charts/src/components/tooltip/base-tooltip.tsx"),G=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),re=e.n(G),a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),s={};s.insert="head",s.singleton=!1;var d=re()(a.A,s);const i=a.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=u=>{if(!u.length)return{isValid:!1,message:"No data available"};if(u.some(P=>P.percentage<0||P.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const U=u.reduce((P,q)=>P+q.percentage,0);return Math.abs(U-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},l=({data:u,chartId:j,withTooltips:U=!1,className:P,showLegend:q=!1,legendOrientation:T="horizontal",legendPosition:ee="bottom",legendAlignment:ie="center",legendShape:ce="circle",size:Q,thickness:r=1,padding:H=20,gapScale:ue=0,cornerScale:X=0,children:pe=null})=>{const te=(0,p.u)(),oe=(0,V.R)(j),[be,c]=(0,z.v)(),{onMouseMove:O,onMouseLeave:A,tooltipOpen:y,tooltipData:$,tooltipLeft:Y,tooltipTop:N}=ne({withTooltips:U}),M=(0,f.useMemo)(()=>({showValues:!0}),[]),J=(0,x.B)(u,M),{isValid:F,message:L}=o(u),w=(0,f.useMemo)(()=>({thickness:r,gapScale:ue,cornerScale:X}),[r,ue,X]);if((0,V.t)({chartId:oe,legendItems:J,chartType:"pie",isDataValid:F,metadata:w}),!F)return(0,n.jsx)("div",{className:(0,C.A)("pie-chart",i["pie-chart"],P),children:(0,n.jsx)("div",{className:i["error-message"],children:L})});const fe=Q,he=Q,se=q&&ee==="top"?he-c:he,me=Math.min(fe,se)/2,ge=fe/2,Ee=se/2,Te=ue*(2*Math.PI/u.length),le=me-H,R=r===0?0:le*(1-r),ye=(le-R)/2,Ae=X?Math.min(X*le,ye):0,ae=u.map((W,_)=>({...W,index:_})),Ce={value:W=>W.value,fill:W=>W?.color||te.colors[W.index]};return(0,n.jsxs)("div",{className:(0,C.A)("pie-chart",i["pie-chart"],P),style:{display:"flex",flexDirection:q&&ee==="top"?"column-reverse":"column"},children:[(0,n.jsx)("svg",{viewBox:`0 0 ${Q} ${se}`,preserveAspectRatio:"xMidYMid meet",width:Q,height:se,children:(0,n.jsxs)(v.A,{top:Ee,left:ge,children:[(0,n.jsx)(I.A,{data:ae,pieValue:Ce.value,outerRadius:le,innerRadius:R,padAngle:Te,cornerRadius:Ae,children:W=>W.arcs.map((_,Le)=>{const[we,je]=W.path.centroid(_),De=_.endAngle-_.startAngle>=.25,de=Pe=>O(Pe,_.data),Se={d:W.path(_)||"",fill:Ce.fill(_.data)};return U&&(Se.onMouseMove=de,Se.onMouseLeave=A),(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{...Se}),De&&(0,n.jsx)("text",{x:we,y:je,dy:".33em",fill:te.labelBackgroundColor,fontSize:12,textAnchor:"middle",pointerEvents:"none",children:_.data.label})]},`arc-${Le}`)})}),pe]})}),q&&(0,n.jsx)(k.s,{items:J,orientation:T,position:ee,alignment:ie,className:i["pie-chart-legend"],shape:ce,ref:be,chartId:oe}),U&&y&&$&&(0,n.jsx)(K.R,{data:$,top:N||0,left:Y||0,style:{transform:"translate(-50%, -100%)"}})]})},b=u=>(0,f.useContext)(S.mJ)?(0,n.jsx)(l,{...u}):(0,n.jsx)(S.Sx,{children:(0,n.jsx)(l,{...u})});b.displayName="PieChart";const h=(0,B.F)(b);try{piechart.displayName="piechart",piechart.__docgenInfo={description:"",displayName:"piechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"Use the children prop to render additional elements on the chart.",name:"children",required:!1,type:{name:"ReactNode"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},thickness:{defaultValue:{value:"1"},description:`Thickness of the pie chart.
A value between 0 and 1, where 0 means no thickness
and 1 means the maximum thickness.`,name:"thickness",required:!1,type:{name:"number"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<DataPointPercentage[], number>"}},legendPosition:{defaultValue:{value:"bottom"},description:`Legend position (where the legend appears)
TODO: Add 'left' | 'right' positioning support in future implementation`,name:"legendPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},legendAlignment:{defaultValue:{value:"center"},description:"Legend alignment within its position",name:"legendAlignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},innerRadius:{defaultValue:null,description:"Inner radius in pixels. If > 0, creates a donut chart. Defaults to 0.",name:"innerRadius",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"20"},description:"Add padding to the chart",name:"padding",required:!1,type:{name:"number"}},gapScale:{defaultValue:{value:"0"},description:`Scale of the gap between groups in the pie chart
A value between 0 and 1, where 0 means no gap.`,name:"gapScale",required:!1,type:{name:"number"}},cornerScale:{defaultValue:{value:"0"},description:`Scale of the corner radius for the pie chart segments.
A value between 0 and 1, where 0 means no corner radius.`,name:"cornerScale",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-chart/pie-chart.tsx#piechart"]={docgenInfo:piechart.__docgenInfo,name:"piechart",path:"../charts/src/components/pie-chart/pie-chart.tsx#piechart"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(Z,D,e)=>{e.d(D,{R:()=>V});var v=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),I=e.n(v),C=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),f={};f.insert="head",f.singleton=!1;var p=I()(C.A,f);const E=C.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ne=({data:S})=>(0,t.jsxs)(t.Fragment,{children:[S?.label,": ",S?.valueDisplay||S?.value]}),V=({data:S,top:k,left:x,component:z=ne,children:B,className:K})=>(0,t.jsx)("div",{className:E.tooltip,style:{top:k,left:x},role:"tooltip",children:B||S&&(0,t.jsx)(z,{data:S,className:K})});try{V.displayName="BaseTooltip",V.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:V.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(Z,D,e)=>{e.d(D,{A:()=>E});var v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),I=e.n(v),C=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),f=e.n(C),p=f()(I());p.push([Z.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),p.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const E=p},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":(Z,D,e)=>{e.d(D,{A:()=>E});var v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),I=e.n(v),C=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),f=e.n(C),p=f()(I());p.push([Z.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),p.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const E=p},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(Z,D,e)=>{e.d(D,{A:()=>E});var v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),I=e.n(v),C=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),f=e.n(C),p=f()(I());p.push([Z.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),p.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const E=p}}]);
