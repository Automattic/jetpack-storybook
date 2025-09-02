"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx":(ne,W,e)=>{e.r(W),e.d(W,{AlignmentOptions:()=>o,CustomShape:()=>g,DashboardExample:()=>r,Horizontal:()=>B,StandaloneLegendWithChartId:()=>n,Vertical:()=>I,WithBarChart:()=>a,WithLineChart:()=>M,__namedExportsOrder:()=>x,default:()=>oe});var D=e("../charts/src/stories/chart-decorator.tsx"),U=e("../charts/src/stories/theme-config.tsx"),k=e("../charts/src/components/bar-chart/bar-chart.tsx"),T=e("../charts/src/components/line-chart/line-chart.tsx"),O=e("../charts/src/components/pie-chart/pie-chart.tsx"),V=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),m=e("../charts/src/components/legend/legend.tsx"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const oe={title:"JS Packages/Charts/Composites/Legend",component:m.s,parameters:{layout:"centered",docs:{description:{component:`
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
`}}},decorators:[D.cg],argTypes:{...U.jW}},N=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],v=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],le=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],B={render:u=>{const{themeName:C,...H}=u;return(0,s.jsx)(m.s,{...H})},args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},I={render:u=>{const{themeName:C,...H}=u;return(0,s.jsx)(m.s,{...H})},args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},Y=()=>{const u=(0,V.f)(N,{showValues:!1});return(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,s.jsx)(T.A,{data:N,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,s.jsx)(m.s,{items:u,orientation:"horizontal"})]})},M={render:()=>(0,s.jsx)(Y,{}),parameters:{docs:{description:{story:"Legend used with LineChart data, positioned independently below the chart."}}}},t=()=>{const u=(0,V.f)(v);return(0,s.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,s.jsx)(k.A,{data:v,showLegend:!1,width:400,height:300}),(0,s.jsx)(m.s,{items:u,orientation:"vertical"})]})},a={render:()=>(0,s.jsx)(t,{}),parameters:{docs:{description:{story:"Legend used with BarChart data, positioned vertically beside the chart."}}}},i=()=>(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,s.jsx)(T.A,{chartId:"standalone-legend-chart",data:N,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,s.jsx)(m.s,{chartId:"standalone-legend-chart",orientation:"horizontal"})]}),n={render:()=>(0,s.jsx)(i,{}),parameters:{docs:{source:{code:`<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
</div>`},description:{story:`
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
`}}}},c=()=>(0,s.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,s.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,s.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,s.jsx)(T.A,{chartId:"dashboard-revenue",data:N,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,s.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,s.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,s.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,s.jsx)(k.A,{chartId:"dashboard-sales",data:v,showLegend:!1,width:280,height:200})]}),(0,s.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,s.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,s.jsx)(O.A,{chartId:"dashboard-devices",data:le,showLegend:!1})]})]})]}),(0,s.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,s.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,s.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,s.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,s.jsx)(m.s,{chartId:"dashboard-revenue",orientation:"vertical"})]}),(0,s.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,s.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,s.jsx)(m.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,s.jsx)(m.s,{chartId:"dashboard-devices",orientation:"vertical"})]})]})]}),r={render:()=>(0,s.jsx)(c,{}),parameters:{layout:"fullscreen",docs:{description:{story:`
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
`}}}},o={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignment:"start"},parameters:{docs:{description:{story:"Legend with custom alignment options."}}}},g={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"},parameters:{docs:{description:{story:"Legend with circle shape instead of default rectangle."}}}},x=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","CustomShape"];B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      themeName,
      ...legendProps
    } = args;
    return <Legend {...legendProps} />;
  },
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
}`,...B.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      themeName,
      ...legendProps
    } = args;
    return <Legend {...legendProps} />;
  },
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
}`,...I.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <WithLineChartData />,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with LineChart data, positioned independently below the chart.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <WithBarChartData />,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with BarChart data, positioned vertically beside the chart.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <StandaloneLegendWithChartIdComponent />,
  parameters: {
    docs: {
      source: {
        code: \`<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
</div>\`
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
}`,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js":(ne,W,e)=>{e.d(W,{A:()=>M});var D=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),U=e("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),k=e.n(U),T=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),O=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),V=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function m(t,a){t(a)}function s(t){var a=t===void 0?{}:t,i=a.innerRadius,n=a.outerRadius,c=a.cornerRadius,r=a.startAngle,o=a.endAngle,g=a.padAngle,x=a.padRadius,u=(0,O.A)();return i!=null&&m(u.innerRadius,i),n!=null&&m(u.outerRadius,n),c!=null&&m(u.cornerRadius,c),r!=null&&m(u.startAngle,r),o!=null&&m(u.endAngle,o),g!=null&&m(u.padAngle,g),x!=null&&m(u.padRadius,x),u}function re(t){var a=t===void 0?{}:t,i=a.x,n=a.x0,c=a.x1,r=a.y,o=a.y0,g=a.y1,x=a.defined,u=a.curve,C=d3Area();return i&&setNumberOrNumberAccessor(C.x,i),n&&setNumberOrNumberAccessor(C.x0,n),c&&setNumberOrNumberAccessor(C.x1,c),r&&setNumberOrNumberAccessor(C.y,r),o&&setNumberOrNumberAccessor(C.y0,o),g&&setNumberOrNumberAccessor(C.y1,g),x&&C.defined(x),u&&C.curve(u),C}function oe(t){var a=t===void 0?{}:t,i=a.x,n=a.y,c=a.defined,r=a.curve,o=d3Line();return i&&setNumberOrNumberAccessor(o.x,i),n&&setNumberOrNumberAccessor(o.y,n),c&&o.defined(c),r&&o.curve(r),o}function N(t){var a=t===void 0?{}:t,i=a.startAngle,n=a.endAngle,c=a.padAngle,r=a.value,o=a.sort,g=a.sortValues,x=(0,V.A)();return(o===null||o!=null)&&x.sort(o),(g===null||g!=null)&&x.sortValues(g),r!=null&&x.value(r),c!=null&&m(x.padAngle,c),i!=null&&m(x.startAngle,i),n!=null&&m(x.endAngle,n),x}function v(t){var a=t===void 0?{}:t,i=a.angle,n=a.radius,c=a.defined,r=a.curve,o=d3RadialLine();return i&&setNumberOrNumberAccessor(o.angle,i),n&&setNumberOrNumberAccessor(o.radius,n),c&&o.defined(c),r&&o.curve(r),o}function le(t){var a=t.keys,i=t.value,n=t.order,c=t.offset,r=d3Stack();return a&&r.keys(a),i&&setNumberOrNumberAccessor(r.value,i),n&&r.order(stackOrder(n)),c&&r.offset(stackOffset(c)),r}var B=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function I(){return I=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},I.apply(this,arguments)}function Y(t,a){if(t==null)return{};var i={},n=Object.keys(t),c,r;for(r=0;r<n.length;r++)c=n[r],!(a.indexOf(c)>=0)&&(i[c]=t[c]);return i}function M(t){var a=t.className,i=t.top,n=t.left,c=t.data,r=c===void 0?[]:c,o=t.centroid,g=t.innerRadius,x=g===void 0?0:g,u=t.outerRadius,C=t.cornerRadius,H=t.startAngle,de=t.endAngle,q=t.padAngle,Ce=t.padRadius,S=t.pieSort,me=t.pieSortValues,ge=t.pieValue,ie=t.children,ce=t.fill,l=ce===void 0?"":ce,xe=Y(t,B),ee=s({innerRadius:x,outerRadius:u,cornerRadius:C,padRadius:Ce}),X=N({startAngle:H,endAngle:de,padAngle:q,value:ge,sort:S,sortValues:me}),ae=X(r);return ie?D.createElement(D.Fragment,null,ie({arcs:ae,path:ee,pie:X})):D.createElement(T.A,{className:"visx-pie-arcs-group",top:i,left:n},ae.map(function(z,Le){return D.createElement("g",{key:"pie-arc-"+Le},D.createElement("path",I({className:k()("visx-pie-arc",a),d:ee(z)||"",fill:l==null||typeof l=="string"?l:l(z)},xe)),o?.(ee.centroid(z),z))}))}},"../charts/src/components/bar-chart/bar-chart.tsx":(ne,W,e)=>{e.d(W,{A:()=>Ee});var D=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),U=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),k=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),T=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),O=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),V=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),m=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),s=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),re=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),oe=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),N=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),le=e("../charts/src/hooks/use-xychart-theme.ts"),B=e("../charts/src/hooks/use-chart-data-transform.ts");const I=(d,j={enabled:!1})=>{const{enabled:b,minValueRatio:f=.6,maxValueRatio:P=.008}=j;return(0,v.useMemo)(()=>{if(!b)return d;const F=[];for(const y of d)for(const L of y.data)L.value!==null&&L.value!==0&&F.push(L.value);if(F.length===0)return d;const w=F.map(Math.abs),_=Math.min(...w),K=Math.max(...w),R=Math.min(_*f,K*P);return d.map(y=>({...y,data:y.data.map(L=>L.value===0?{...L,visualValue:R}:L)}))},[d,b,f,P])};var Y=e("../charts/src/hooks/use-chart-margin.tsx"),M=e("../charts/src/hooks/use-element-height.ts"),t=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),a=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),i=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),n=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),c=e("../charts/src/utils/create-composition.ts"),r=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),o=e("../charts/src/components/legend/legend.tsx"),g=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),x=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),u=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),C=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),H=e.n(C),de=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),q={};q.insert="head",q.singleton=!1;var Ce=H()(de.A,q);const S=de.A.locals||{};var me=e("../number-formatters/src/index.ts");const ge=d=>new Date(d).toLocaleDateString(void 0,{month:"short",day:"numeric"}),ie=d=>typeof d.paddingInner=="number"?d.paddingInner:0;function ce(d,j,b={}){const f=(0,v.useMemo)(()=>{const P={type:"band",padding:.2,paddingInner:.1},F={type:"linear",nice:!0,zero:!1},w=d?.[0]?.data?.[0]?.label?y=>y:ge,_=me.qe,K=y=>y?.label||y?.date,R=y=>{const L=y;return L?.visualValue!==void 0?L.visualValue:y?.value};return{vertical:{xTickFormat:w,yTickFormat:_,tooltipLabelFormatter:w,xAccessor:K,yAccessor:R,gridVisibility:"x",xScale:P,yScale:F},horizontal:{xTickFormat:_,yTickFormat:w,tooltipLabelFormatter:w,xAccessor:R,yAccessor:K,gridVisibility:"y",xScale:F,yScale:P}}},[d]);return(0,v.useMemo)(()=>{const P=j?"horizontal":"vertical",{xTickFormat:F,yTickFormat:w,tooltipLabelFormatter:_,xAccessor:K,yAccessor:R,gridVisibility:y,xScale:L,yScale:ve}=f[P],he={...L,...b.xScale||{}},ue={...ve,...b.yScale||{}},te=j?b.axis?.y?.tickFormat:b.axis?.x?.tickFormat;return{gridVisibility:y,xScale:he,yScale:ue,accessors:{xAccessor:K,yAccessor:R},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:F,...b.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:w,...b.axis?.y||{}}},barGroup:{padding:ie(j?ue:he)},tooltip:{labelFormatter:te||_}}},[f,b,j])}var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const xe=oe.__,ee=d=>d?.length?d.some(b=>b.data.some(f=>isNaN(f.value)||f.value===null||f.value===void 0||!f.label&&(!("date"in f&&f.date)||isNaN(f.date.getTime()))))?"Invalid data":null:"No data available",X=(d,j)=>`bar-pattern-${d}-${j}`,ae=({data:d,chartId:j,width:b,height:f=400,className:P,margin:F,withTooltips:w=!1,showLegend:_=!1,legendOrientation:K="horizontal",legendPosition:R="bottom",legendAlignment:y="center",legendShape:L="rect",gridVisibility:ve,renderTooltip:he,options:ue={},orientation:te="vertical",withPatterns:se=!1,showZeroValues:Fe=!1,children:Re})=>{const fe=te==="horizontal",A=(0,t.R)(j),je=(0,le.O)(d),G=(0,B.E)(d),_e=I(G,{enabled:Fe}),Te=(0,r.f)(G),E=ce(_e,fe,ue),Ae=(0,Y.a)(f,E,G,je,fe),[Oe,be]=(0,M.v)(),De=(0,v.useRef)(null),[Q,Ne]=(0,v.useState)(void 0),[Be,Me]=(0,v.useState)(!1),Pe=Math.max(0,...d.map(h=>h.data?.length||0))*d.length,{tooltipRef:We,onChartFocus:ke,onChartBlur:Ve,onChartKeyDown:ze}=(0,u.JZ)({selectedIndex:Q,setSelectedIndex:Ne,isNavigating:Be,setIsNavigating:Me,chartRef:De,totalPoints:Pe}),{resolveGroupColor:Ie}=(0,a.j)(),pe=(0,v.useCallback)((h,p)=>Ie({group:h.group,index:p,overrideColor:h.options?.stroke}),[Ie]),Ke=(0,v.useCallback)(h=>()=>se?`url(#${X(A,h)})`:pe(G[h],h),[se,pe,G,A]),Ge=(0,v.useCallback)(({tooltipData:h})=>{const p=h?.nearestDatum?.datum;return p?(0,l.jsxs)("div",{className:S["bar-chart__tooltip"],children:[(0,l.jsx)("div",{className:S["bar-chart__tooltip-header"],children:h?.nearestDatum?.key}),(0,l.jsxs)("div",{className:S["bar-chart__tooltip-row"],children:[(0,l.jsxs)("span",{className:S["bar-chart__tooltip-label"],children:[E.tooltip.labelFormatter(p.label||(p.date?p.date.getTime():0),0,[]),":"]}),(0,l.jsx)("span",{className:S["bar-chart__tooltip-value"],children:p.value})]})]}):null},[E.tooltip]),Ue=(0,v.useCallback)((h,p)=>{const J=h%4,$=X(A,h),Z={id:$,stroke:"white",strokeWidth:1,background:p};switch(J){case 0:default:return(0,l.jsx)(D.A,{...Z,width:5,height:5,orientation:["diagonal"]},$);case 1:return(0,l.jsx)(U.A,{...Z,width:6,height:6,fill:"white"},$);case 2:return(0,l.jsx)(k.A,{...Z,width:4,height:4},$);case 3:return(0,l.jsx)(T.A,{...Z,size:8,height:3},$)}},[A]),He=(0,v.useCallback)((h,p)=>`
			.visx-bar[fill="url(#${X(A,h)})"] {
				stroke: ${p};
				stroke-width: 1;
				}
			`,[A]),$e=(0,v.useCallback)(()=>{if(Q===void 0)return"";const h=Math.max(...d.map(Je=>Je.data.length)),p=Math.floor(Q/d.length),J=Q%d.length;if(p>=h||J>=d.length)return"";const $=d[J];if(p>=$.data.length)return"";const Z=J*h+p;return`
			.bar-chart[data-chart-id="bar-chart-${A}"] .visx-bar-group .visx-bar:nth-child(${Z+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[Q,d,A]),ye=ee(G),Xe=!ye,Qe=(0,v.useMemo)(()=>({orientation:te,withPatterns:se}),[te,se]);if((0,i.t)({chartId:A,legendItems:Te,chartType:"bar",isDataValid:Xe,metadata:Qe}),ye)return(0,l.jsx)("div",{className:(0,N.A)("bar-chart",S["bar-chart"]),children:ye});const Se=ve??E.gridVisibility,we=$e();return(0,l.jsx)(g.O.Provider,{value:{chartId:A,chartWidth:b,chartHeight:f-(_?be:0)},children:(0,l.jsxs)("div",{className:(0,N.A)("bar-chart",S["bar-chart"],P),"data-testid":"bar-chart",role:"grid","aria-label":xe("Bar chart","jetpack-charts"),style:{width:b,height:f,display:"flex",flexDirection:_&&R==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:ze,onFocus:ke,onBlur:Ve,ref:De,"data-chart-id":`bar-chart-${A}`,children:[(0,l.jsxs)(O.A,{theme:je,width:b,height:f-(_?be:0),margin:{...Ae,...F,..._&&R==="top"?{top:(Ae.top||0)+be}:{}},xScale:E.xScale,yScale:E.yScale,horizontal:fe,pointerEventsDataKey:"nearest",children:[(0,l.jsx)(V.A,{columns:Se.includes("y"),rows:Se.includes("x"),numTicks:4}),se&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("defs",{"data-testid":"bar-chart-patterns",children:G.map((h,p)=>Ue(p,pe(h,p)))}),(0,l.jsx)("style",{children:G.map((h,p)=>He(p,pe(h,p)))})]}),we&&(0,l.jsx)("style",{children:we}),(0,l.jsx)(m.A,{padding:E.barGroup.padding,children:_e.map((h,p)=>(0,l.jsx)(s.A,{dataKey:h?.label,data:h.data,yAccessor:E.accessors.yAccessor,xAccessor:E.accessors.xAccessor,colorAccessor:Ke(p)},h?.label))}),(0,l.jsx)(re.A,{...E.axis.x}),(0,l.jsx)(re.A,{...E.axis.y}),w&&(0,l.jsx)(u.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:he||Ge,selectedIndex:Q,tooltipRef:We,keyboardFocusedClassName:S["bar-chart__tooltip--keyboard-focused"],series:d,mode:"individual"})]}),_&&(0,l.jsx)(o.s,{orientation:K,position:R,alignment:y,className:S["bar-chart__legend"],shape:L,ref:Oe,chartId:A}),Re]})})},z=d=>(0,v.useContext)(n.m)?(0,l.jsx)(ae,{...d}):(0,l.jsx)(n.S,{children:(0,l.jsx)(ae,{...d})});z.displayName="BarChart";const Le=(0,c.E)(z,{Legend:o.s}),Ee=(0,c.E)((0,x.F)(z),{Legend:o.s})},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(ne,W,e)=>{e.d(W,{A:()=>V});var D=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),U=e.n(D),k=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),T=e.n(k),O=T()(U());O.push([ne.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),O.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const V=O}}]);
