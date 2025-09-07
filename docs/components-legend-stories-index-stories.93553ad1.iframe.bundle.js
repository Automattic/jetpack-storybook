"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx":(H,M,t)=>{t.r(M),t.d(M,{AlignmentOptions:()=>c,CustomShape:()=>y,DashboardExample:()=>i,Horizontal:()=>A,StandaloneLegendWithChartId:()=>d,Vertical:()=>E,WithBarChart:()=>a,WithLineChart:()=>o,__namedExportsOrder:()=>C,default:()=>X});var L=t("../charts/src/stories/chart-decorator.tsx"),P=t("../charts/src/stories/theme-config.tsx"),T=t("../charts/src/components/bar-chart/bar-chart.tsx"),g=t("../charts/src/components/line-chart/line-chart.tsx"),j=t("../charts/src/components/pie-chart/pie-chart.tsx"),x=t("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),l=t("../charts/src/components/legend/legend.tsx"),r=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const X={title:"JS Packages/Charts/Composites/Legend",component:l.s,parameters:{layout:"centered",docs:{description:{component:`
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
`}}},decorators:[L.cg],argTypes:{...P.jW}},R=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],b=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],Z=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],A={render:v=>{const{themeName:D,...Q}=v;return(0,r.jsx)(l.s,{...Q})},args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},E={render:v=>{const{themeName:D,...Q}=v;return(0,r.jsx)(l.s,{...Q})},args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},n=()=>{const v=(0,x.f)(R,{showValues:!1});return(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,r.jsx)(g.A,{data:R,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,r.jsx)(l.s,{items:v,orientation:"horizontal"})]})},o={render:()=>(0,r.jsx)(n,{}),parameters:{docs:{description:{story:"Legend used with LineChart data, positioned independently below the chart."}}}},e=()=>{const v=(0,x.f)(b);return(0,r.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,r.jsx)(T.A,{data:b,showLegend:!1,width:400,height:300}),(0,r.jsx)(l.s,{items:v,orientation:"vertical"})]})},a={render:()=>(0,r.jsx)(e,{}),parameters:{docs:{description:{story:"Legend used with BarChart data, positioned vertically beside the chart."}}}},s=()=>(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,r.jsx)(g.A,{chartId:"standalone-legend-chart",data:R,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,r.jsx)(l.s,{chartId:"standalone-legend-chart",orientation:"horizontal"})]}),d={render:()=>(0,r.jsx)(s,{}),parameters:{docs:{source:{code:`<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
`}}}},m=()=>(0,r.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,r.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,r.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,r.jsx)(g.A,{chartId:"dashboard-revenue",data:R,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,r.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,r.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,r.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,r.jsx)(T.A,{chartId:"dashboard-sales",data:b,showLegend:!1,width:280,height:200})]}),(0,r.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,r.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,r.jsx)(j.A,{chartId:"dashboard-devices",data:Z,showLegend:!1})]})]})]}),(0,r.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,r.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,r.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,r.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,r.jsx)(l.s,{chartId:"dashboard-revenue",orientation:"vertical"})]}),(0,r.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,r.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,r.jsx)(l.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,r.jsx)(l.s,{chartId:"dashboard-devices",orientation:"vertical"})]})]})]}),i={render:()=>(0,r.jsx)(m,{}),parameters:{layout:"fullscreen",docs:{description:{story:`
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
`}}}},c={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignment:"start"},parameters:{docs:{description:{story:"Legend with custom alignment options."}}}},y={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"},parameters:{docs:{description:{story:"Legend with circle shape instead of default rectangle."}}}},C=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","CustomShape"];A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <WithLineChartData />,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with LineChart data, positioned independently below the chart.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <WithBarChartData />,
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
}`,...d.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js":(H,M,t)=>{t.d(M,{A:()=>o});var L=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),P=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),T=t.n(P),g=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),j=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),x=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function l(e,a){e(a)}function r(e){var a=e===void 0?{}:e,s=a.innerRadius,d=a.outerRadius,m=a.cornerRadius,i=a.startAngle,c=a.endAngle,y=a.padAngle,C=a.padRadius,v=(0,j.A)();return s!=null&&l(v.innerRadius,s),d!=null&&l(v.outerRadius,d),m!=null&&l(v.cornerRadius,m),i!=null&&l(v.startAngle,i),c!=null&&l(v.endAngle,c),y!=null&&l(v.padAngle,y),C!=null&&l(v.padRadius,C),v}function Y(e){var a=e===void 0?{}:e,s=a.x,d=a.x0,m=a.x1,i=a.y,c=a.y0,y=a.y1,C=a.defined,v=a.curve,D=d3Area();return s&&setNumberOrNumberAccessor(D.x,s),d&&setNumberOrNumberAccessor(D.x0,d),m&&setNumberOrNumberAccessor(D.x1,m),i&&setNumberOrNumberAccessor(D.y,i),c&&setNumberOrNumberAccessor(D.y0,c),y&&setNumberOrNumberAccessor(D.y1,y),C&&D.defined(C),v&&D.curve(v),D}function X(e){var a=e===void 0?{}:e,s=a.x,d=a.y,m=a.defined,i=a.curve,c=d3Line();return s&&setNumberOrNumberAccessor(c.x,s),d&&setNumberOrNumberAccessor(c.y,d),m&&c.defined(m),i&&c.curve(i),c}function R(e){var a=e===void 0?{}:e,s=a.startAngle,d=a.endAngle,m=a.padAngle,i=a.value,c=a.sort,y=a.sortValues,C=(0,x.A)();return(c===null||c!=null)&&C.sort(c),(y===null||y!=null)&&C.sortValues(y),i!=null&&C.value(i),m!=null&&l(C.padAngle,m),s!=null&&l(C.startAngle,s),d!=null&&l(C.endAngle,d),C}function b(e){var a=e===void 0?{}:e,s=a.angle,d=a.radius,m=a.defined,i=a.curve,c=d3RadialLine();return s&&setNumberOrNumberAccessor(c.angle,s),d&&setNumberOrNumberAccessor(c.radius,d),m&&c.defined(m),i&&c.curve(i),c}function Z(e){var a=e.keys,s=e.value,d=e.order,m=e.offset,i=d3Stack();return a&&i.keys(a),s&&setNumberOrNumberAccessor(i.value,s),d&&i.order(stackOrder(d)),m&&i.offset(stackOffset(m)),i}var A=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(e[d]=s[d])}return e},E.apply(this,arguments)}function n(e,a){if(e==null)return{};var s={},d=Object.keys(e),m,i;for(i=0;i<d.length;i++)m=d[i],!(a.indexOf(m)>=0)&&(s[m]=e[m]);return s}function o(e){var a=e.className,s=e.top,d=e.left,m=e.data,i=m===void 0?[]:m,c=e.centroid,y=e.innerRadius,C=y===void 0?0:y,v=e.outerRadius,D=e.cornerRadius,Q=e.startAngle,de=e.endAngle,ne=e.padAngle,Ce=e.padRadius,B=e.pieSort,pe=e.pieSortValues,ge=e.pieValue,ie=e.children,ce=e.fill,h=ce===void 0?"":ce,xe=n(e,A),re=r({innerRadius:C,outerRadius:v,cornerRadius:D,padRadius:Ce}),q=R({startAngle:Q,endAngle:de,padAngle:ne,value:ge,sort:B,sortValues:pe}),se=q(i);return ie?L.createElement(L.Fragment,null,ie({arcs:se,path:re,pie:q})):L.createElement(g.A,{className:"visx-pie-arcs-group",top:s,left:d},se.map(function(U,je){return L.createElement("g",{key:"pie-arc-"+je},L.createElement("path",E({className:T()("visx-pie-arc",a),d:re(U)||"",fill:h==null||typeof h=="string"?h:h(U)},xe)),c?.(re.centroid(U),U))}))}},"../charts/src/components/bar-chart/bar-chart.tsx":(H,M,t)=>{t.d(M,{A:()=>Ee});var L=t("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),P=t("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),T=t("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),g=t("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),j=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),x=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),l=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),r=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),Y=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),X=t("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),R=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),b=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),Z=t("../charts/src/hooks/use-xychart-theme.ts"),A=t("../charts/src/hooks/use-chart-data-transform.ts");const E=(u,O={enabled:!1})=>{const{enabled:S,minValueRatio:_=.6,maxValueRatio:K=.008}=O;return(0,b.useMemo)(()=>{if(!S)return u;const z=[];for(const I of u)for(const w of I.data)w.value!==null&&w.value!==0&&z.push(w.value);if(z.length===0)return u;const W=z.map(Math.abs),F=Math.min(...W),G=Math.max(...W),k=Math.min(F*_,G*K);return u.map(I=>({...I,data:I.data.map(w=>w.value===0?{...w,visualValue:k}:w)}))},[u,S,_,K])};var n=t("../charts/src/hooks/use-chart-margin.tsx"),o=t("../charts/src/hooks/use-element-height.ts"),e=t("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),a=t("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),s=t("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),d=t("../charts/src/providers/chart-context/global-charts-provider.tsx"),m=t("../charts/src/utils/create-composition.ts"),i=t("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),c=t("../charts/src/components/legend/legend.tsx"),y=t("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),C=t("../charts/src/components/private/with-responsive/with-responsive.tsx"),v=t("../charts/src/components/tooltip/accessible-tooltip.tsx"),D=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Q=t.n(D),de=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),ne={};ne.insert="head",ne.singleton=!1;var Ce=Q()(de.A,ne);const B=de.A.locals||{};var pe=t("../number-formatters/src/index.ts");const ge=u=>new Date(u).toLocaleDateString(void 0,{month:"short",day:"numeric"}),ie=u=>typeof u.paddingInner=="number"?u.paddingInner:0;function ce(u,O,S={}){const _=(0,b.useMemo)(()=>{const K={type:"band",padding:.2,paddingInner:.1},z={type:"linear",nice:!0,zero:!1},W=u?.[0]?.data?.[0]?.label?I=>I:ge,F=pe.qe,G=I=>I?.label||I?.date,k=I=>{const w=I;return w?.visualValue!==void 0?w.visualValue:I?.value};return{vertical:{xTickFormat:W,yTickFormat:F,tooltipLabelFormatter:W,xAccessor:G,yAccessor:k,gridVisibility:"x",xScale:K,yScale:z},horizontal:{xTickFormat:F,yTickFormat:W,tooltipLabelFormatter:W,xAccessor:k,yAccessor:G,gridVisibility:"y",xScale:z,yScale:K}}},[u]);return(0,b.useMemo)(()=>{const K=O?"horizontal":"vertical",{xTickFormat:z,yTickFormat:W,tooltipLabelFormatter:F,xAccessor:G,yAccessor:k,gridVisibility:I,xScale:w,yScale:ve}=_[K],he={...w,...S.xScale||{}},ue={...ve,...S.yScale||{}},oe=O?S.axis?.y?.tickFormat:S.axis?.x?.tickFormat;return{gridVisibility:I,xScale:he,yScale:ue,accessors:{xAccessor:G,yAccessor:k},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:z,...S.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:W,...S.axis?.y||{}}},barGroup:{padding:ie(O?ue:he)},tooltip:{labelFormatter:oe||F}}},[_,S,O])}var h=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const xe=X.__,re=u=>u?.length?u.some(S=>S.data.some(_=>isNaN(_.value)||_.value===null||_.value===void 0||!_.label&&(!("date"in _&&_.date)||isNaN(_.date.getTime()))))?"Invalid data":null:"No data available",q=(u,O)=>`bar-pattern-${u}-${O}`,se=({data:u,chartId:O,width:S,height:_=400,className:K,margin:z,withTooltips:W=!1,showLegend:F=!1,legendOrientation:G="horizontal",legendPosition:k="bottom",legendAlignment:I="center",legendShape:w="rect",gridVisibility:ve,renderTooltip:he,options:ue={},orientation:oe="vertical",withPatterns:le=!1,showZeroValues:Oe=!1,children:Me})=>{const fe=oe==="horizontal",N=(0,e.R)(O),_e=(0,Z.O)(u),$=(0,A.E)(u),Le=E($,{enabled:Oe}),Te=(0,i.f)($),V=ce(Le,fe,ue),Ae=(0,n.a)(_,V,$,_e,fe),[Re,be]=(0,o.v)(),Se=(0,b.useRef)(null),[ee,Fe]=(0,b.useState)(void 0),[Ne,Pe]=(0,b.useState)(!1),Be=Math.max(0,...u.map(p=>p.data?.length||0))*u.length,{tooltipRef:We,onChartFocus:Ve,onChartBlur:ze,onChartKeyDown:ke}=(0,v.JZ)({selectedIndex:ee,setSelectedIndex:Fe,isNavigating:Ne,setIsNavigating:Pe,chartRef:Se,totalPoints:Be}),{resolveGroupColor:Ie}=(0,a.j)(),me=(0,b.useCallback)((p,f)=>Ie({group:p.group,index:f,overrideColor:p.options?.stroke}),[Ie]),Ke=(0,b.useCallback)(p=>()=>le?`url(#${q(N,p)})`:me($[p],p),[le,me,$,N]),Ue=(0,b.useCallback)(({tooltipData:p})=>{const f=p?.nearestDatum?.datum;return f?(0,h.jsxs)("div",{className:B["bar-chart__tooltip"],children:[(0,h.jsx)("div",{className:B["bar-chart__tooltip-header"],children:p?.nearestDatum?.key}),(0,h.jsxs)("div",{className:B["bar-chart__tooltip-row"],children:[(0,h.jsxs)("span",{className:B["bar-chart__tooltip-label"],children:[V.tooltip.labelFormatter(f.label||(f.date?f.date.getTime():0),0,[]),":"]}),(0,h.jsx)("span",{className:B["bar-chart__tooltip-value"],children:f.value})]})]}):null},[V.tooltip]),Ge=(0,b.useCallback)((p,f)=>{const ae=p%4,J=q(N,p),te={id:J,stroke:"white",strokeWidth:1,background:f};switch(ae){case 0:default:return(0,h.jsx)(L.A,{...te,width:5,height:5,orientation:["diagonal"]},J);case 1:return(0,h.jsx)(P.A,{...te,width:6,height:6,fill:"white"},J);case 2:return(0,h.jsx)(T.A,{...te,width:4,height:4},J);case 3:return(0,h.jsx)(g.A,{...te,size:8,height:3},J)}},[N]),$e=(0,b.useCallback)((p,f)=>`
			.visx-bar[fill="url(#${q(N,p)})"] {
				stroke: ${f};
				stroke-width: 1;
				}
			`,[N]),He=(0,b.useCallback)(()=>{if(ee===void 0)return"";const p=Math.max(...u.map(Je=>Je.data.length)),f=Math.floor(ee/u.length),ae=ee%u.length;if(f>=p||ae>=u.length)return"";const J=u[ae];if(f>=J.data.length)return"";const te=ae*p+f;return`
			.bar-chart[data-chart-id="bar-chart-${N}"] .visx-bar-group .visx-bar:nth-child(${te+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[ee,u,N]),ye=re($),Xe=!ye,Qe=(0,b.useMemo)(()=>({orientation:oe,withPatterns:le}),[oe,le]);if((0,s.t)({chartId:N,legendItems:Te,chartType:"bar",isDataValid:Xe,metadata:Qe}),ye)return(0,h.jsx)("div",{className:(0,R.A)("bar-chart",B["bar-chart"]),children:ye});const De=ve??V.gridVisibility,we=He();return(0,h.jsx)(y.O.Provider,{value:{chartId:N,chartWidth:S,chartHeight:_-(F?be:0)},children:(0,h.jsxs)("div",{className:(0,R.A)("bar-chart",B["bar-chart"],K),"data-testid":"bar-chart",role:"grid","aria-label":xe("Bar chart","jetpack-charts"),style:{width:S,height:_,display:"flex",flexDirection:F&&k==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:ke,onFocus:Ve,onBlur:ze,ref:Se,"data-chart-id":`bar-chart-${N}`,children:[(0,h.jsxs)(j.A,{theme:_e,width:S,height:_-(F?be:0),margin:{...Ae,...z,...F&&k==="top"?{top:(Ae.top||0)+be}:{}},xScale:V.xScale,yScale:V.yScale,horizontal:fe,pointerEventsDataKey:"nearest",children:[(0,h.jsx)(x.A,{columns:De.includes("y"),rows:De.includes("x"),numTicks:4}),le&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("defs",{"data-testid":"bar-chart-patterns",children:$.map((p,f)=>Ge(f,me(p,f)))}),(0,h.jsx)("style",{children:$.map((p,f)=>$e(f,me(p,f)))})]}),we&&(0,h.jsx)("style",{children:we}),(0,h.jsx)(l.A,{padding:V.barGroup.padding,children:Le.map((p,f)=>(0,h.jsx)(r.A,{dataKey:p?.label,data:p.data,yAccessor:V.accessors.yAccessor,xAccessor:V.accessors.xAccessor,colorAccessor:Ke(f)},p?.label))}),(0,h.jsx)(Y.A,{...V.axis.x}),(0,h.jsx)(Y.A,{...V.axis.y}),W&&(0,h.jsx)(v.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:he||Ue,selectedIndex:ee,tooltipRef:We,keyboardFocusedClassName:B["bar-chart__tooltip--keyboard-focused"],series:u,mode:"individual"})]}),F&&(0,h.jsx)(c.s,{orientation:G,position:k,alignment:I,className:B["bar-chart__legend"],shape:w,ref:Re,chartId:N}),Me]})})},U=u=>(0,b.useContext)(d.m)?(0,h.jsx)(se,{...u}):(0,h.jsx)(d.S,{children:(0,h.jsx)(se,{...u})});U.displayName="BarChart";const je=(0,m.E)(U,{Legend:c.s}),Ee=(0,m.E)((0,C.F)(U),{Legend:c.s})},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(H,M,t)=>{t.d(M,{A:()=>T});function L(g){var j,x,l="";if(typeof g=="string"||typeof g=="number")l+=g;else if(typeof g=="object")if(Array.isArray(g)){var r=g.length;for(j=0;j<r;j++)g[j]&&(x=L(g[j]))&&(l&&(l+=" "),l+=x)}else for(x in g)g[x]&&(l&&(l+=" "),l+=x);return l}function P(){for(var g,j,x=0,l="",r=arguments.length;x<r;x++)(g=arguments[x])&&(j=L(g))&&(l&&(l+=" "),l+=j);return l}const T=P},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(H,M,t)=>{t.d(M,{A:()=>x});var L=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),P=t.n(L),T=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),g=t.n(T),j=g()(P());j.push([H.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),j.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const x=j},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":H=>{var M=function(o){return t(o)&&!L(o)};function t(n){return!!n&&typeof n=="object"}function L(n){var o=Object.prototype.toString.call(n);return o==="[object RegExp]"||o==="[object Date]"||g(n)}var P=typeof Symbol=="function"&&Symbol.for,T=P?Symbol.for("react.element"):60103;function g(n){return n.$$typeof===T}function j(n){return Array.isArray(n)?[]:{}}function x(n,o){return o.clone!==!1&&o.isMergeableObject(n)?A(j(n),n,o):n}function l(n,o,e){return n.concat(o).map(function(a){return x(a,e)})}function r(n,o){if(!o.customMerge)return A;var e=o.customMerge(n);return typeof e=="function"?e:A}function Y(n){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(n).filter(function(o){return Object.propertyIsEnumerable.call(n,o)}):[]}function X(n){return Object.keys(n).concat(Y(n))}function R(n,o){try{return o in n}catch{return!1}}function b(n,o){return R(n,o)&&!(Object.hasOwnProperty.call(n,o)&&Object.propertyIsEnumerable.call(n,o))}function Z(n,o,e){var a={};return e.isMergeableObject(n)&&X(n).forEach(function(s){a[s]=x(n[s],e)}),X(o).forEach(function(s){b(n,s)||(R(n,s)&&e.isMergeableObject(o[s])?a[s]=r(s,e)(n[s],o[s],e):a[s]=x(o[s],e))}),a}function A(n,o,e){e=e||{},e.arrayMerge=e.arrayMerge||l,e.isMergeableObject=e.isMergeableObject||M,e.cloneUnlessOtherwiseSpecified=x;var a=Array.isArray(o),s=Array.isArray(n),d=a===s;return d?a?e.arrayMerge(n,o,e):Z(n,o,e):x(o,e)}A.all=function(o,e){if(!Array.isArray(o))throw new Error("first argument should be an array");return o.reduce(function(a,s){return A(a,s,e)},{})};var E=A;H.exports=E}}]);
