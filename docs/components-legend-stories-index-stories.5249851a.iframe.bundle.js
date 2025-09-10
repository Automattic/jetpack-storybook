"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx":((N,x,e)=>{e.r(x),e.d(x,{AlignmentOptions:()=>y,CustomShape:()=>I,DashboardExample:()=>f,Horizontal:()=>j,StandaloneLegendWithChartId:()=>_,Vertical:()=>P,WithBarChart:()=>s,WithLineChart:()=>l,__namedExportsOrder:()=>L,default:()=>T});var u=e("../charts/src/stories/chart-decorator.tsx"),c=e("../charts/src/stories/theme-config.tsx"),p=e("../charts/src/components/bar-chart/bar-chart.tsx"),o=e("../charts/src/components/line-chart/line-chart.tsx"),a=e("../charts/src/components/pie-chart/pie-chart.tsx"),h=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),n=e("../charts/src/components/legend/legend.tsx"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const T={title:"JS Packages/Charts/Composites/Legend",component:n.s,parameters:{layout:"centered",docs:{description:{component:`
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
`}}},decorators:[u.cg],argTypes:{...c.jW}},E=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],C=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],G=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],j={render:A=>{const{themeName:F,...Z}=A;return(0,r.jsx)(n.s,{...Z})},args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},P={render:A=>{const{themeName:F,...Z}=A;return(0,r.jsx)(n.s,{...Z})},args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},d=()=>{const A=(0,h.f)(E,{showValues:!1});return(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,r.jsx)(o.A,{data:E,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,r.jsx)(n.s,{items:A,orientation:"horizontal"})]})},l={render:()=>(0,r.jsx)(d,{}),parameters:{docs:{description:{story:"Legend used with LineChart data, positioned independently below the chart."}}}},t=()=>{const A=(0,h.f)(C);return(0,r.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,r.jsx)(p.A,{data:C,showLegend:!1,width:400,height:300}),(0,r.jsx)(n.s,{items:A,orientation:"vertical"})]})},s={render:()=>(0,r.jsx)(t,{}),parameters:{docs:{description:{story:"Legend used with BarChart data, positioned vertically beside the chart."}}}},i=()=>(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,r.jsx)(o.A,{chartId:"standalone-legend-chart",data:E,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,r.jsx)(n.s,{chartId:"standalone-legend-chart",orientation:"horizontal"})]}),_={render:()=>(0,r.jsx)(i,{}),parameters:{docs:{source:{code:`<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
`}}}},S=()=>(0,r.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,r.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,r.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,r.jsx)(o.A,{chartId:"dashboard-revenue",data:E,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,r.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,r.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,r.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,r.jsx)(p.A,{chartId:"dashboard-sales",data:C,showLegend:!1,width:280,height:200})]}),(0,r.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,r.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,r.jsx)(a.A,{chartId:"dashboard-devices",data:G,showLegend:!1})]})]})]}),(0,r.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,r.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,r.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,r.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,r.jsx)(n.s,{chartId:"dashboard-revenue",orientation:"vertical"})]}),(0,r.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,r.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,r.jsx)(n.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,r.jsx)(n.s,{chartId:"dashboard-devices",orientation:"vertical"})]})]})]}),f={render:()=>(0,r.jsx)(S,{}),parameters:{layout:"fullscreen",docs:{description:{story:`
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
`}}}},y={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignment:"start"},parameters:{docs:{description:{story:"Legend with custom alignment options."}}}},I={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"},parameters:{docs:{description:{story:"Legend with circle shape instead of default rectangle."}}}},L=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","CustomShape"];j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <WithLineChartData />,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with LineChart data, positioned independently below the chart.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <WithBarChartData />,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with BarChart data, positioned vertically beside the chart.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}}}),"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js":((N,x,e)=>{e.d(x,{A:()=>l});var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=e.n(c),o=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),a=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),h=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function n(t,s){t(s)}function r(t){var s=t===void 0?{}:t,i=s.innerRadius,_=s.outerRadius,S=s.cornerRadius,f=s.startAngle,y=s.endAngle,I=s.padAngle,L=s.padRadius,A=(0,a.A)();return i!=null&&n(A.innerRadius,i),_!=null&&n(A.outerRadius,_),S!=null&&n(A.cornerRadius,S),f!=null&&n(A.startAngle,f),y!=null&&n(A.endAngle,y),I!=null&&n(A.padAngle,I),L!=null&&n(A.padRadius,L),A}function v(t){var s=t===void 0?{}:t,i=s.x,_=s.x0,S=s.x1,f=s.y,y=s.y0,I=s.y1,L=s.defined,A=s.curve,F=d3Area();return i&&setNumberOrNumberAccessor(F.x,i),_&&setNumberOrNumberAccessor(F.x0,_),S&&setNumberOrNumberAccessor(F.x1,S),f&&setNumberOrNumberAccessor(F.y,f),y&&setNumberOrNumberAccessor(F.y0,y),I&&setNumberOrNumberAccessor(F.y1,I),L&&F.defined(L),A&&F.curve(A),F}function T(t){var s=t===void 0?{}:t,i=s.x,_=s.y,S=s.defined,f=s.curve,y=d3Line();return i&&setNumberOrNumberAccessor(y.x,i),_&&setNumberOrNumberAccessor(y.y,_),S&&y.defined(S),f&&y.curve(f),y}function E(t){var s=t===void 0?{}:t,i=s.startAngle,_=s.endAngle,S=s.padAngle,f=s.value,y=s.sort,I=s.sortValues,L=(0,h.A)();return(y===null||y!=null)&&L.sort(y),(I===null||I!=null)&&L.sortValues(I),f!=null&&L.value(f),S!=null&&n(L.padAngle,S),i!=null&&n(L.startAngle,i),_!=null&&n(L.endAngle,_),L}function C(t){var s=t===void 0?{}:t,i=s.angle,_=s.radius,S=s.defined,f=s.curve,y=d3RadialLine();return i&&setNumberOrNumberAccessor(y.angle,i),_&&setNumberOrNumberAccessor(y.radius,_),S&&y.defined(S),f&&y.curve(f),y}function G(t){var s=t.keys,i=t.value,_=t.order,S=t.offset,f=d3Stack();return s&&f.keys(s),i&&setNumberOrNumberAccessor(f.value,i),_&&f.order(stackOrder(_)),S&&f.offset(stackOffset(S)),f}var j=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function P(){return P=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var _ in i)Object.prototype.hasOwnProperty.call(i,_)&&(t[_]=i[_])}return t},P.apply(this,arguments)}function d(t,s){if(t==null)return{};var i={},_=Object.keys(t),S,f;for(f=0;f<_.length;f++)S=_[f],!(s.indexOf(S)>=0)&&(i[S]=t[S]);return i}function l(t){var s=t.className,i=t.top,_=t.left,S=t.data,f=S===void 0?[]:S,y=t.centroid,I=t.innerRadius,L=I===void 0?0:I,A=t.outerRadius,F=t.cornerRadius,Z=t.startAngle,D=t.endAngle,ce=t.padAngle,be=t.padRadius,Y=t.pieSort,Ae=t.pieSortValues,Oe=t.pieValue,M=t.children,ne=t.fill,m=ne===void 0?"":ne,H=d(t,j),U=r({innerRadius:L,outerRadius:A,cornerRadius:F,padRadius:be}),ae=E({startAngle:Z,endAngle:D,padAngle:ce,value:Oe,sort:Y,sortValues:Ae}),J=ae(f);return M?u.createElement(u.Fragment,null,M({arcs:J,path:U,pie:ae})):u.createElement(o.A,{className:"visx-pie-arcs-group",top:i,left:_},J.map(function(q,_e){return u.createElement("g",{key:"pie-arc-"+_e},u.createElement("path",P({className:p()("visx-pie-arc",s),d:U(q)||"",fill:m==null||typeof m=="string"?m:m(q)},H)),y?.(U.centroid(q),q))}))}}),"../../../node_modules/.pnpm/@wordpress+deprecated@4.30.0/node_modules/@wordpress/deprecated/build-module/index.js":((N,x,e)=>{e.d(x,{A:()=>p});var u=e("../../../node_modules/.pnpm/@wordpress+hooks@4.30.0/node_modules/@wordpress/hooks/build-module/index.js");const c=Object.create(null);function p(o,a={}){const{since:h,version:n,alternative:r,plugin:v,link:T,hint:E}=a,C=v?` from ${v}`:"",G=h?` since version ${h}`:"",j=n?` and will be removed${C} in version ${n}`:"",P=r?` Please use ${r} instead.`:"",d=T?` See: ${T}`:"",l=E?` Note: ${E}`:"",t=`${o} is deprecated${G}${j}.${P}${d}${l}`;t in c||((0,u.Eo)("deprecated",o,a,t),console.warn(t),c[t]=!0)}}),"../charts/src/components/bar-chart/bar-chart.tsx":((N,x,e)=>{e.d(x,{A:()=>fe});var u=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),c=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),p=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),o=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),a=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),h=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),n=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),r=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),v=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),T=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),E=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),C=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),G=e("../charts/src/hooks/use-xychart-theme.ts"),j=e("../charts/src/hooks/use-chart-data-transform.ts");const P=(g,w={enabled:!1})=>{const{enabled:B,minValueRatio:R=.6,maxValueRatio:re=.008}=w;return(0,C.useMemo)(()=>{if(!B)return g;const $=[];for(const K of g)for(const V of K.data)V.value!==null&&V.value!==0&&$.push(V.value);if($.length===0)return g;const X=$.map(Math.abs),W=Math.min(...X),ee=Math.max(...X),te=Math.min(W*R,ee*re);return g.map(K=>({...K,data:K.data.map(V=>V.value===0?{...V,visualValue:te}:V)}))},[g,B,R,re])};var d=e("../charts/src/hooks/use-chart-margin.tsx"),l=e("../charts/src/hooks/use-element-height.ts"),t=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),s=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),i=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),_=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),S=e("../charts/src/utils/create-composition.ts"),f=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),y=e("../charts/src/components/legend/legend.tsx"),I=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),L=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),A=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),F=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Z=e.n(F),D=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),ce={};ce.insert="head",ce.singleton=!1;var be=Z()(D.A,ce);const Y=D.A.locals||{};var Ae=e("../number-formatters/src/index.ts");const Oe=g=>new Date(g).toLocaleDateString(void 0,{month:"short",day:"numeric"}),M=g=>typeof g.paddingInner=="number"?g.paddingInner:0;function ne(g,w,B={}){const R=(0,C.useMemo)(()=>{const re={type:"band",padding:.2,paddingInner:.1},$={type:"linear",nice:!0,zero:!1},X=g?.[0]?.data?.[0]?.label?K=>K:Oe,W=Ae.qe,ee=K=>K?.label||K?.date,te=K=>{const V=K;return V?.visualValue!==void 0?V.visualValue:K?.value};return{vertical:{xTickFormat:X,yTickFormat:W,tooltipLabelFormatter:X,xAccessor:ee,yAccessor:te,gridVisibility:"x",xScale:re,yScale:$},horizontal:{xTickFormat:W,yTickFormat:X,tooltipLabelFormatter:X,xAccessor:te,yAccessor:ee,gridVisibility:"y",xScale:$,yScale:re}}},[g]);return(0,C.useMemo)(()=>{const re=w?"horizontal":"vertical",{xTickFormat:$,yTickFormat:X,tooltipLabelFormatter:W,xAccessor:ee,yAccessor:te,gridVisibility:K,xScale:V,yScale:Te}=R[re],ye={...V,...B.xScale||{}},he={...Te,...B.yScale||{}},pe=w?B.axis?.y?.tickFormat:B.axis?.x?.tickFormat;return{gridVisibility:K,xScale:ye,yScale:he,accessors:{xAccessor:ee,yAccessor:te},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:$,...B.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:X,...B.axis?.y||{}}},barGroup:{padding:M(w?he:ye)},tooltip:{labelFormatter:pe||W}}},[R,B,w])}var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const H=T.__,U=g=>g?.length?g.some(B=>B.data.some(R=>isNaN(R.value)||R.value===null||R.value===void 0||!R.label&&(!("date"in R&&R.date)||isNaN(R.date.getTime()))))?"Invalid data":null:"No data available",ae=(g,w)=>`bar-pattern-${g}-${w}`,J=({data:g,chartId:w,width:B,height:R=400,className:re,margin:$,withTooltips:X=!1,showLegend:W=!1,legendOrientation:ee="horizontal",legendPosition:te="bottom",legendAlignment:K="center",legendShape:V="rect",gridVisibility:Te,renderTooltip:ye,options:he={},orientation:pe="vertical",withPatterns:me=!1,showZeroValues:ke=!1,children:Fe})=>{const xe=pe==="horizontal",z=(0,t.R)(w),Re=(0,G.O)(g),oe=(0,j.E)(g),De=P(oe,{enabled:ke}),We=(0,f.f)(oe),Q=ne(De,xe,he),le=(0,d.a)(R,Q,oe,Re,xe),[Me,de]=(0,l.v)(),Be=(0,C.useRef)(null),[ie,Ve]=(0,C.useState)(void 0),[Ye,ve]=(0,C.useState)(!1),Ne=Math.max(0,...g.map(b=>b.data?.length||0))*g.length,{tooltipRef:ze,onChartFocus:Ge,onChartBlur:He,onChartKeyDown:Pe}=(0,A.JZ)({selectedIndex:ie,setSelectedIndex:Ve,isNavigating:Ye,setIsNavigating:ve,chartRef:Be,totalPoints:Ne}),{resolveGroupColor:se}=(0,s.j)(),k=(0,C.useCallback)((b,O)=>se({group:b.group,index:O,overrideColor:b.options?.stroke}),[se]),Ee=(0,C.useCallback)(b=>()=>me?`url(#${ae(z,b)})`:k(oe[b],b),[me,k,oe,z]),we=(0,C.useCallback)(({tooltipData:b})=>{const O=b?.nearestDatum?.datum;return O?(0,m.jsxs)("div",{className:Y["bar-chart__tooltip"],children:[(0,m.jsx)("div",{className:Y["bar-chart__tooltip-header"],children:b?.nearestDatum?.key}),(0,m.jsxs)("div",{className:Y["bar-chart__tooltip-row"],children:[(0,m.jsxs)("span",{className:Y["bar-chart__tooltip-label"],children:[Q.tooltip.labelFormatter(O.label||(O.date?O.date.getTime():0),0,[]),":"]}),(0,m.jsx)("span",{className:Y["bar-chart__tooltip-value"],children:O.value})]})]}):null},[Q.tooltip]),Ke=(0,C.useCallback)((b,O)=>{const Se=b%4,ge=ae(z,b),Ce={id:ge,stroke:"white",strokeWidth:1,background:O};switch(Se){case 0:default:return(0,m.jsx)(u.A,{...Ce,width:5,height:5,orientation:["diagonal"]},ge);case 1:return(0,m.jsx)(c.A,{...Ce,width:6,height:6,fill:"white"},ge);case 2:return(0,m.jsx)(p.A,{...Ce,width:4,height:4},ge);case 3:return(0,m.jsx)(o.A,{...Ce,size:8,height:3},ge)}},[z]),Ue=(0,C.useCallback)((b,O)=>`
			.visx-bar[fill="url(#${ae(z,b)})"] {
				stroke: ${O};
				stroke-width: 1;
				}
			`,[z]),$e=(0,C.useCallback)(()=>{if(ie===void 0)return"";const b=Math.max(...g.map(Qe=>Qe.data.length)),O=Math.floor(ie/g.length),Se=ie%g.length;if(O>=b||Se>=g.length)return"";const ge=g[Se];if(O>=ge.data.length)return"";const Ce=Se*b+O;return`
			.bar-chart[data-chart-id="bar-chart-${z}"] .visx-bar-group .visx-bar:nth-child(${Ce+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[ie,g,z]),ue=U(oe),Le=!ue,Xe=(0,C.useMemo)(()=>({orientation:pe,withPatterns:me}),[pe,me]);if((0,i.t)({chartId:z,legendItems:We,chartType:"bar",isDataValid:Le,metadata:Xe}),ue)return(0,m.jsx)("div",{className:(0,E.A)("bar-chart",Y["bar-chart"]),children:ue});const je=Te??Q.gridVisibility,Ie=$e();return(0,m.jsx)(I.O.Provider,{value:{chartId:z,chartWidth:B,chartHeight:R-(W?de:0)},children:(0,m.jsxs)("div",{className:(0,E.A)("bar-chart",Y["bar-chart"],re),"data-testid":"bar-chart",role:"grid","aria-label":H("Bar chart","jetpack-charts"),style:{width:B,height:R,display:"flex",flexDirection:W&&te==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:Pe,onFocus:Ge,onBlur:He,ref:Be,"data-chart-id":`bar-chart-${z}`,children:[(0,m.jsxs)(a.A,{theme:Re,width:B,height:R-(W?de:0),margin:{...le,...$,...W&&te==="top"?{top:(le.top||0)+de}:{}},xScale:Q.xScale,yScale:Q.yScale,horizontal:xe,pointerEventsDataKey:"nearest",children:[(0,m.jsx)(h.A,{columns:je.includes("y"),rows:je.includes("x"),numTicks:4}),me&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("defs",{"data-testid":"bar-chart-patterns",children:oe.map((b,O)=>Ke(O,k(b,O)))}),(0,m.jsx)("style",{children:oe.map((b,O)=>Ue(O,k(b,O)))})]}),Ie&&(0,m.jsx)("style",{children:Ie}),(0,m.jsx)(n.A,{padding:Q.barGroup.padding,children:De.map((b,O)=>(0,m.jsx)(r.A,{dataKey:b?.label,data:b.data,yAccessor:Q.accessors.yAccessor,xAccessor:Q.accessors.xAccessor,colorAccessor:Ee(O)},b?.label))}),(0,m.jsx)(v.A,{...Q.axis.x}),(0,m.jsx)(v.A,{...Q.axis.y}),X&&(0,m.jsx)(A.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:ye||we,selectedIndex:ie,tooltipRef:ze,keyboardFocusedClassName:Y["bar-chart__tooltip--keyboard-focused"],series:g,mode:"individual"})]}),W&&(0,m.jsx)(y.s,{orientation:ee,position:te,alignment:K,className:Y["bar-chart__legend"],shape:V,ref:Me,chartId:z}),Fe]})})},q=g=>(0,C.useContext)(_.m)?(0,m.jsx)(J,{...g}):(0,m.jsx)(_.S,{children:(0,m.jsx)(J,{...g})});q.displayName="BarChart";const _e=(0,S.E)(q,{Legend:y.s}),fe=(0,S.E)((0,L.F)(q),{Legend:y.s})}),"../charts/src/components/pie-chart/pie-chart.tsx":((N,x,e)=>{e.d(x,{W:()=>Ae,A:()=>Oe});var u=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),c=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),p=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../charts/src/hooks/use-element-height.ts"),h=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),n=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js");const r=({withTooltips:M})=>{const{tooltipOpen:ne,tooltipLeft:m,tooltipTop:H,tooltipData:U,hideTooltip:ae,showTooltip:J}=(0,n.A)(),q=(0,o.useCallback)((fe,g)=>{if(!M)return;const w=(0,h.A)(fe);w&&J({tooltipData:g,tooltipLeft:w.x,tooltipTop:w.y-10})},[M,J]),_e=(0,o.useCallback)(()=>{M&&ae()},[M,ae]);return{onMouseMove:q,onMouseLeave:_e,tooltipOpen:ne,tooltipData:U||null,tooltipLeft:m,tooltipTop:H}};var v=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),T=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),E=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),C=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),G=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),j=e("../charts/src/utils/create-composition.ts"),P=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js"),d=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),l=e("../charts/src/components/legend/legend.tsx"),t=e("../charts/src/components/private/chart-composition/use-chart-children.ts"),s=e("../charts/src/components/private/chart-composition/chart-svg.tsx"),i=e("../charts/src/components/private/chart-composition/chart-html.tsx"),_=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),S=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),f=e("../charts/src/components/tooltip/base-tooltip.tsx"),y=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),I=e.n(y),L=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),A={};A.insert="head",A.singleton=!1;var F=I()(L.A,A);const Z=L.A.locals||{};var D=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ce=M=>{if(!M.length)return{isValid:!1,message:"No data available"};if(M.some(H=>H.percentage<0||H.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const m=M.reduce((H,U)=>H+U.percentage,0);return Math.abs(m-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},be=({data:M,chartId:ne,withTooltips:m=!1,className:H,showLegend:U=!1,legendOrientation:ae="horizontal",legendPosition:J="bottom",legendAlignment:q="center",legendShape:_e="circle",size:fe,thickness:g=1,padding:w=20,gapScale:B=0,cornerScale:R=0,showLabels:re=!0,legendValueDisplay:$="percentage",children:X=null})=>{const W=(0,v.p)(),ee=(0,T.R)(ne),[te,K]=(0,a.v)(),{onMouseMove:V,onMouseLeave:Te,tooltipOpen:ye,tooltipData:he,tooltipLeft:pe,tooltipTop:me}=r({withTooltips:m}),ke=(0,o.useMemo)(()=>({showValues:!0,legendValueDisplay:$}),[$]),Fe=(0,d.f)(M,ke),{isValid:xe,message:z}=ce(M),{svgChildren:Re,htmlChildren:oe,otherChildren:De}=(0,t.n)(X,"PieChart"),We=(0,o.useMemo)(()=>({thickness:g,gapScale:B,cornerScale:R}),[g,B,R]);(0,E.t)({chartId:ee,legendItems:Fe,chartType:"pie",isDataValid:xe,metadata:We});const{resolveGroupColor:Q}=(0,C.j)();if(!xe)return(0,D.jsx)("div",{className:(0,p.A)("pie-chart",Z["pie-chart"],H),children:(0,D.jsx)("div",{className:Z["error-message"],children:z})});const le=fe,Me=fe,de=U&&J==="top"?Me-K:Me,Be=Math.min(le,de)/2,ie=le/2,Ve=de/2,Ye=B*(2*Math.PI/M.length),ve=Be-w,Ne=g===0?0:ve*(1-g),ze=(ve-Ne)/2,Ge=R?Math.min(R*ve,ze):0,He=M.map((se,k)=>({...se,index:k})),Pe={value:se=>se.value,fill:({group:se,index:k,color:Ee})=>Q({group:se,index:k,overrideColor:Ee})};return(0,D.jsx)(_.O.Provider,{value:{chartId:ee,chartWidth:le,chartHeight:de},children:(0,D.jsxs)("div",{className:(0,p.A)("pie-chart",Z["pie-chart"],H),style:{display:"flex",flexDirection:U&&J==="top"?"column-reverse":"column"},children:[(0,D.jsx)("svg",{viewBox:`0 0 ${le} ${de}`,preserveAspectRatio:"xMidYMid meet",width:le,height:de,children:(0,D.jsxs)(u.A,{top:Ve,left:ie,children:[(0,D.jsx)(c.A,{data:He,pieValue:Pe.value,outerRadius:ve,innerRadius:Ne,padAngle:Ye,cornerRadius:Ge,children:se=>se.arcs.map((k,Ee)=>{const[we,Ke]=se.path.centroid(k),Ue=k.endAngle-k.startAngle>=.25,$e=O=>V(O,k.data),ue={d:se.path(k)||"",fill:Pe.fill(k.data)};m&&(ue.onMouseMove=$e,ue.onMouseLeave=Te);const Le=12,Xe=(0,P.A)(k.data.label,{fontSize:Le}),je=6,Ie=Xe+je*2,b=Le+je*2;return(0,D.jsxs)("g",{children:[(0,D.jsx)("path",{...ue}),re&&Ue&&(0,D.jsxs)("g",{children:[W.labelBackgroundColor&&(0,D.jsx)("rect",{x:we-Ie/2,y:Ke-b/2,width:Ie,height:b,fill:W.labelBackgroundColor,rx:4,ry:4,pointerEvents:"none"}),(0,D.jsx)("text",{x:we,y:Ke,dy:".33em",fill:W.labelTextColor||"#333",fontSize:Le,textAnchor:"middle",pointerEvents:"none",children:k.data.label})]})]},`arc-${Ee}`)})}),Re]})}),U&&(0,D.jsx)(l.s,{orientation:ae,position:J,alignment:q,className:Z["pie-chart-legend"],shape:_e,ref:te,chartId:ee}),m&&ye&&he&&(0,D.jsx)(f.R,{data:he,top:me||0,left:pe||0,style:{transform:"translate(-50%, -100%)"}}),oe,De]})})},Y=M=>(0,o.useContext)(G.m)?(0,D.jsx)(be,{...M}):(0,D.jsx)(G.S,{children:(0,D.jsx)(be,{...M})});Y.displayName="PieChart";const Ae=(0,j.E)(Y,{Legend:l.s,SVG:s.d,HTML:i.a}),Oe=(0,j.E)((0,S.F)(Y),{Legend:l.s,SVG:s.d,HTML:i.a})}),"../charts/src/components/private/chart-composition/chart-html.tsx":((N,x,e)=>{e.d(x,{a:()=>c});var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=({children:p})=>(0,u.jsx)(u.Fragment,{children:p});c.displayName="Chart.HTML";try{c.displayName="Chart.HTML",c.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}}),"../charts/src/components/private/chart-composition/chart-svg.tsx":((N,x,e)=>{e.d(x,{d:()=>c});var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=({children:p})=>(0,u.jsx)(u.Fragment,{children:p});c.displayName="Chart.SVG";try{c.displayName="Chart.SVG",c.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}}),"../charts/src/components/private/chart-composition/use-chart-children.ts":((N,x,e)=>{e.d(x,{n:()=>p});var u=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function p(o,a){return(0,c.useMemo)(()=>{const h=[],n=[],r=[];return c.Children.forEach(o,v=>{if((0,c.isValidElement)(v)){const E=v.type?.displayName;E===`${a}.SVG`||E==="Chart.SVG"?v.props?.children&&c.Children.forEach(v.props.children,C=>{h.push(C)}):E===`${a}.HTML`||E==="Chart.HTML"?v.props?.children&&c.Children.forEach(v.props.children,C=>{n.push(C)}):v.type===u.A?h.push(v):r.push(v)}}),{svgChildren:h,htmlChildren:n,otherChildren:r}},[o,a])}}),"../charts/src/components/tooltip/base-tooltip.tsx":((N,x,e)=>{e.d(x,{R:()=>v});var u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(u),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),o={};o.insert="head",o.singleton=!1;var a=c()(p.A,o);const h=p.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=({data:T})=>(0,n.jsxs)(n.Fragment,{children:[T?.label,": ",T?.valueDisplay||T?.value]}),v=({data:T,top:E,left:C,component:G=r,children:j,className:P})=>(0,n.jsx)("div",{className:h.tooltip,style:{top:E,left:C},role:"tooltip",children:j||T&&(0,n.jsx)(G,{data:T,className:P})});try{v.displayName="BaseTooltip",v.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:v.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}}),"../charts/src/stories/chart-decorator.tsx":((N,x,e)=>{e.d(x,{OI:()=>o,cg:()=>a,xo:()=>h});var u=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),c=e("../charts/src/stories/theme-config.tsx"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(n,r)=>{const v=r.args;return a(()=>(0,p.jsx)("div",{style:{resize:v.resize||"both",overflow:"auto",padding:"1rem",width:v.containerWidth||"800px",height:v.containerHeight,maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,p.jsx)(n,{})}),r)},a=(n,{args:r})=>{const v=r.themeName,T=c.yI[v||"default"];return(0,p.jsx)(u.S,{theme:T,children:(0,p.jsx)(n,{})})},h={maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}},containerWidth:{control:{type:"text"},description:'CSS width value for the chart container (e.g., "400px", "100%")'},containerHeight:{control:{type:"text"},description:'CSS height value for the chart container (e.g., "400px", "100%")'},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"],description:"Resize behavior for the chart container"}};try{o.displayName="chartDecorator",o.__docgenInfo={description:`Shared decorator for chart stories with GlobalChartsProvider and dynamic theme support
Provides a resizable container for testing responsive behavior
Composes with simpleChartDecorator to add container styling
Supports configurable container dimensions via containerWidth/containerHeight args`,displayName:"chartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#chartDecorator"]={docgenInfo:o.__docgenInfo,name:"chartDecorator",path:"../charts/src/stories/chart-decorator.tsx#chartDecorator"})}catch{}try{a.displayName="simpleChartDecorator",a.__docgenInfo={description:`Simple decorator for chart context stories with GlobalChartsProvider but no container styling
Used for stories that display multiple charts in custom layouts`,displayName:"simpleChartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"]={docgenInfo:a.__docgenInfo,name:"simpleChartDecorator",path:"../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"})}catch{}try{h.displayName="sharedChartArgTypes",h.__docgenInfo={description:"Shared argTypes for common chart controls",displayName:"sharedChartArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"]={docgenInfo:h.__docgenInfo,name:"sharedChartArgTypes",path:"../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"})}catch{}}),"../charts/src/stories/theme-config.tsx":((N,x,e)=>{e.d(x,{jW:()=>o,yI:()=>p});var u=e("../charts/src/providers/chart-context/themes.ts");const c={colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2},leaderboardChart:{primaryColor:"#073B3A",secondaryColor:"#0B6E4F"}},p={default:u.zQ,jetpack:u.QI,woo:u.pk,custom:c},o={themeName:{control:{type:"select"},options:["default","jetpack","woo","custom"],defaultValue:"default",description:"Select a theme to apply to the chart",table:{category:"Theme"}}};try{c.displayName="customTheme",c.__docgenInfo={description:"Custom theme with earth tones and dashed line styles for demonstration",displayName:"customTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#customTheme"]={docgenInfo:c.__docgenInfo,name:"customTheme",path:"../charts/src/stories/theme-config.tsx#customTheme"})}catch{}try{backgroundColor.displayName="backgroundColor",backgroundColor.__docgenInfo={description:"Background color for chart components",displayName:"backgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#backgroundColor"]={docgenInfo:backgroundColor.__docgenInfo,name:"backgroundColor",path:"../charts/src/stories/theme-config.tsx#backgroundColor"})}catch{}try{labelBackgroundColor.displayName="labelBackgroundColor",labelBackgroundColor.__docgenInfo={description:"Background color for labels",displayName:"labelBackgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelBackgroundColor"]={docgenInfo:labelBackgroundColor.__docgenInfo,name:"labelBackgroundColor",path:"../charts/src/stories/theme-config.tsx#labelBackgroundColor"})}catch{}try{labelTextColor.displayName="labelTextColor",labelTextColor.__docgenInfo={description:"Text color for labels",displayName:"labelTextColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelTextColor"]={docgenInfo:labelTextColor.__docgenInfo,name:"labelTextColor",path:"../charts/src/stories/theme-config.tsx#labelTextColor"})}catch{}try{colors.displayName="colors",colors.__docgenInfo={description:"Array of colors used for data visualization",displayName:"colors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#colors"]={docgenInfo:colors.__docgenInfo,name:"colors",path:"../charts/src/stories/theme-config.tsx#colors"})}catch{}try{gridStyles.displayName="gridStyles",gridStyles.__docgenInfo={description:"Optional CSS styles for grid lines",displayName:"gridStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridStyles"]={docgenInfo:gridStyles.__docgenInfo,name:"gridStyles",path:"../charts/src/stories/theme-config.tsx#gridStyles"})}catch{}try{tickLength.displayName="tickLength",tickLength.__docgenInfo={description:"Length of axis ticks in pixels",displayName:"tickLength",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#tickLength"]={docgenInfo:tickLength.__docgenInfo,name:"tickLength",path:"../charts/src/stories/theme-config.tsx#tickLength"})}catch{}try{gridColor.displayName="gridColor",gridColor.__docgenInfo={description:"Color of the grid lines",displayName:"gridColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColor"]={docgenInfo:gridColor.__docgenInfo,name:"gridColor",path:"../charts/src/stories/theme-config.tsx#gridColor"})}catch{}try{gridColorDark.displayName="gridColorDark",gridColorDark.__docgenInfo={description:"Color of the grid lines in dark mode",displayName:"gridColorDark",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColorDark"]={docgenInfo:gridColorDark.__docgenInfo,name:"gridColorDark",path:"../charts/src/stories/theme-config.tsx#gridColorDark"})}catch{}try{xTickLineStyles.displayName="xTickLineStyles",xTickLineStyles.__docgenInfo={description:"Styles for x-axis tick lines",displayName:"xTickLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xTickLineStyles"]={docgenInfo:xTickLineStyles.__docgenInfo,name:"xTickLineStyles",path:"../charts/src/stories/theme-config.tsx#xTickLineStyles"})}catch{}try{xAxisLineStyles.displayName="xAxisLineStyles",xAxisLineStyles.__docgenInfo={description:"Styles for x-axis line",displayName:"xAxisLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xAxisLineStyles"]={docgenInfo:xAxisLineStyles.__docgenInfo,name:"xAxisLineStyles",path:"../charts/src/stories/theme-config.tsx#xAxisLineStyles"})}catch{}try{seriesLineStyles.displayName="seriesLineStyles",seriesLineStyles.__docgenInfo={description:"Styles for series lines",displayName:"seriesLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#seriesLineStyles"]={docgenInfo:seriesLineStyles.__docgenInfo,name:"seriesLineStyles",path:"../charts/src/stories/theme-config.tsx#seriesLineStyles"})}catch{}try{legendShapeStyles.displayName="legendShapeStyles",legendShapeStyles.__docgenInfo={description:"Styles for legend shapes",displayName:"legendShapeStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendShapeStyles"]={docgenInfo:legendShapeStyles.__docgenInfo,name:"legendShapeStyles",path:"../charts/src/stories/theme-config.tsx#legendShapeStyles"})}catch{}try{glyphs.displayName="glyphs",glyphs.__docgenInfo={description:"Array of render functions for glyphs",displayName:"glyphs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#glyphs"]={docgenInfo:glyphs.__docgenInfo,name:"glyphs",path:"../charts/src/stories/theme-config.tsx#glyphs"})}catch{}try{legendLabelStyles.displayName="legendLabelStyles",legendLabelStyles.__docgenInfo={description:"Styles for legend labels",displayName:"legendLabelStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendLabelStyles"]={docgenInfo:legendLabelStyles.__docgenInfo,name:"legendLabelStyles",path:"../charts/src/stories/theme-config.tsx#legendLabelStyles"})}catch{}try{legendContainerStyles.displayName="legendContainerStyles",legendContainerStyles.__docgenInfo={description:"Styles for legend container",displayName:"legendContainerStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendContainerStyles"]={docgenInfo:legendContainerStyles.__docgenInfo,name:"legendContainerStyles",path:"../charts/src/stories/theme-config.tsx#legendContainerStyles"})}catch{}try{leaderboardChart.displayName="leaderboardChart",leaderboardChart.__docgenInfo={description:"LeaderboardChart specific settings",displayName:"leaderboardChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#leaderboardChart"]={docgenInfo:leaderboardChart.__docgenInfo,name:"leaderboardChart",path:"../charts/src/stories/theme-config.tsx#leaderboardChart"})}catch{}try{conversionFunnelChart.displayName="conversionFunnelChart",conversionFunnelChart.__docgenInfo={description:"ConversionFunnelChart specific settings",displayName:"conversionFunnelChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#conversionFunnelChart"]={docgenInfo:conversionFunnelChart.__docgenInfo,name:"conversionFunnelChart",path:"../charts/src/stories/theme-config.tsx#conversionFunnelChart"})}catch{}try{p.displayName="CHART_THEME_MAP",p.__docgenInfo={description:"Centralized theme map for all chart stories",displayName:"CHART_THEME_MAP",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"]={docgenInfo:p.__docgenInfo,name:"CHART_THEME_MAP",path:"../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"})}catch{}try{o.displayName="themeArgTypes",o.__docgenInfo={description:"Shared argTypes for theme control",displayName:"themeArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#themeArgTypes"]={docgenInfo:o.__docgenInfo,name:"themeArgTypes",path:"../charts/src/stories/theme-config.tsx#themeArgTypes"})}catch{}}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((N,x,e)=>{e.d(x,{A:()=>p});function u(o){var a,h,n="";if(typeof o=="string"||typeof o=="number")n+=o;else if(typeof o=="object")if(Array.isArray(o)){var r=o.length;for(a=0;a<r;a++)o[a]&&(h=u(o[a]))&&(n&&(n+=" "),n+=h)}else for(h in o)o[h]&&(n&&(n+=" "),n+=h);return n}function c(){for(var o,a,h=0,n="",r=arguments.length;h<r;h++)(o=arguments[h])&&(a=u(o))&&(n&&(n+=" "),n+=a);return n}const p=c}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":((N,x,e)=>{e.d(x,{A:()=>h});var u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(u),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(p),a=o()(c());a.push([N.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),a.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const h=a}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":((N,x,e)=>{e.d(x,{A:()=>h});var u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(u),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(p),a=o()(c());a.push([N.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),a.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const h=a}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":((N,x,e)=>{e.d(x,{A:()=>h});var u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(u),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(p),a=o()(c());a.push([N.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),a.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const h=a}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(N=>{var x=function(l){return e(l)&&!u(l)};function e(d){return!!d&&typeof d=="object"}function u(d){var l=Object.prototype.toString.call(d);return l==="[object RegExp]"||l==="[object Date]"||o(d)}var c=typeof Symbol=="function"&&Symbol.for,p=c?Symbol.for("react.element"):60103;function o(d){return d.$$typeof===p}function a(d){return Array.isArray(d)?[]:{}}function h(d,l){return l.clone!==!1&&l.isMergeableObject(d)?j(a(d),d,l):d}function n(d,l,t){return d.concat(l).map(function(s){return h(s,t)})}function r(d,l){if(!l.customMerge)return j;var t=l.customMerge(d);return typeof t=="function"?t:j}function v(d){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(d).filter(function(l){return Object.propertyIsEnumerable.call(d,l)}):[]}function T(d){return Object.keys(d).concat(v(d))}function E(d,l){try{return l in d}catch{return!1}}function C(d,l){return E(d,l)&&!(Object.hasOwnProperty.call(d,l)&&Object.propertyIsEnumerable.call(d,l))}function G(d,l,t){var s={};return t.isMergeableObject(d)&&T(d).forEach(function(i){s[i]=h(d[i],t)}),T(l).forEach(function(i){C(d,i)||(E(d,i)&&t.isMergeableObject(l[i])?s[i]=r(i,t)(d[i],l[i],t):s[i]=h(l[i],t))}),s}function j(d,l,t){t=t||{},t.arrayMerge=t.arrayMerge||n,t.isMergeableObject=t.isMergeableObject||x,t.cloneUnlessOtherwiseSpecified=h;var s=Array.isArray(l),i=Array.isArray(d),_=s===i;return _?s?t.arrayMerge(d,l,t):G(d,l,t):h(l,t)}j.all=function(l,t){if(!Array.isArray(l))throw new Error("first argument should be an array");return l.reduce(function(s,i){return j(s,i,t)},{})};var P=j;N.exports=P})}]);
