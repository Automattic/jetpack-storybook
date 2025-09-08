"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx":(G,O,t)=>{t.r(O),t.d(O,{AlignmentOptions:()=>c,CustomShape:()=>C,DashboardExample:()=>i,Horizontal:()=>L,StandaloneLegendWithChartId:()=>d,Vertical:()=>w,WithBarChart:()=>a,WithLineChart:()=>r,__namedExportsOrder:()=>j,default:()=>V});var _=t("../charts/src/stories/chart-decorator.tsx"),M=t("../charts/src/stories/theme-config.tsx"),T=t("../charts/src/components/bar-chart/bar-chart.tsx"),p=t("../charts/src/components/line-chart/line-chart.tsx"),f=t("../charts/src/components/pie-chart/pie-chart.tsx"),g=t("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),l=t("../charts/src/components/legend/legend.tsx"),n=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const V={title:"JS Packages/Charts/Composites/Legend",component:l.s,parameters:{layout:"centered",docs:{description:{component:`
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
`}}},decorators:[_.cg],argTypes:{...M.jW}},D=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],b=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],H=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],L={render:x=>{const{themeName:E,...Y}=x;return(0,n.jsx)(l.s,{...Y})},args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},w={render:x=>{const{themeName:E,...Y}=x;return(0,n.jsx)(l.s,{...Y})},args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},s=()=>{const x=(0,g.f)(D,{showValues:!1});return(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,n.jsx)(p.A,{data:D,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,n.jsx)(l.s,{items:x,orientation:"horizontal"})]})},r={render:()=>(0,n.jsx)(s,{}),parameters:{docs:{description:{story:"Legend used with LineChart data, positioned independently below the chart."}}}},e=()=>{const x=(0,g.f)(b);return(0,n.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,n.jsx)(T.A,{data:b,showLegend:!1,width:400,height:300}),(0,n.jsx)(l.s,{items:x,orientation:"vertical"})]})},a={render:()=>(0,n.jsx)(e,{}),parameters:{docs:{description:{story:"Legend used with BarChart data, positioned vertically beside the chart."}}}},o=()=>(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,n.jsx)(p.A,{chartId:"standalone-legend-chart",data:D,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,n.jsx)(l.s,{chartId:"standalone-legend-chart",orientation:"horizontal"})]}),d={render:()=>(0,n.jsx)(o,{}),parameters:{docs:{source:{code:`<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
`}}}},m=()=>(0,n.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,n.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,n.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,n.jsx)(p.A,{chartId:"dashboard-revenue",data:D,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,n.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,n.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,n.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,n.jsx)(T.A,{chartId:"dashboard-sales",data:b,showLegend:!1,width:280,height:200})]}),(0,n.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,n.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,n.jsx)(f.A,{chartId:"dashboard-devices",data:H,showLegend:!1})]})]})]}),(0,n.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,n.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,n.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,n.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,n.jsx)(l.s,{chartId:"dashboard-revenue",orientation:"vertical"})]}),(0,n.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,n.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,n.jsx)(l.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,n.jsx)(l.s,{chartId:"dashboard-devices",orientation:"vertical"})]})]})]}),i={render:()=>(0,n.jsx)(m,{}),parameters:{layout:"fullscreen",docs:{description:{story:`
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
`}}}},c={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignment:"start"},parameters:{docs:{description:{story:"Legend with custom alignment options."}}}},C={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"},parameters:{docs:{description:{story:"Legend with circle shape instead of default rectangle."}}}},j=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","CustomShape"];L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <WithLineChartData />,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with LineChart data, positioned independently below the chart.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js":(G,O,t)=>{t.d(O,{A:()=>r});var _=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),M=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),T=t.n(M),p=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),f=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),g=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function l(e,a){e(a)}function n(e){var a=e===void 0?{}:e,o=a.innerRadius,d=a.outerRadius,m=a.cornerRadius,i=a.startAngle,c=a.endAngle,C=a.padAngle,j=a.padRadius,x=(0,f.A)();return o!=null&&l(x.innerRadius,o),d!=null&&l(x.outerRadius,d),m!=null&&l(x.cornerRadius,m),i!=null&&l(x.startAngle,i),c!=null&&l(x.endAngle,c),C!=null&&l(x.padAngle,C),j!=null&&l(x.padRadius,j),x}function $(e){var a=e===void 0?{}:e,o=a.x,d=a.x0,m=a.x1,i=a.y,c=a.y0,C=a.y1,j=a.defined,x=a.curve,E=d3Area();return o&&setNumberOrNumberAccessor(E.x,o),d&&setNumberOrNumberAccessor(E.x0,d),m&&setNumberOrNumberAccessor(E.x1,m),i&&setNumberOrNumberAccessor(E.y,i),c&&setNumberOrNumberAccessor(E.y0,c),C&&setNumberOrNumberAccessor(E.y1,C),j&&E.defined(j),x&&E.curve(x),E}function V(e){var a=e===void 0?{}:e,o=a.x,d=a.y,m=a.defined,i=a.curve,c=d3Line();return o&&setNumberOrNumberAccessor(c.x,o),d&&setNumberOrNumberAccessor(c.y,d),m&&c.defined(m),i&&c.curve(i),c}function D(e){var a=e===void 0?{}:e,o=a.startAngle,d=a.endAngle,m=a.padAngle,i=a.value,c=a.sort,C=a.sortValues,j=(0,g.A)();return(c===null||c!=null)&&j.sort(c),(C===null||C!=null)&&j.sortValues(C),i!=null&&j.value(i),m!=null&&l(j.padAngle,m),o!=null&&l(j.startAngle,o),d!=null&&l(j.endAngle,d),j}function b(e){var a=e===void 0?{}:e,o=a.angle,d=a.radius,m=a.defined,i=a.curve,c=d3RadialLine();return o&&setNumberOrNumberAccessor(c.angle,o),d&&setNumberOrNumberAccessor(c.radius,d),m&&c.defined(m),i&&c.curve(i),c}function H(e){var a=e.keys,o=e.value,d=e.order,m=e.offset,i=d3Stack();return a&&i.keys(a),o&&setNumberOrNumberAccessor(i.value,o),d&&i.order(stackOrder(d)),m&&i.offset(stackOffset(m)),i}var L=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(e[d]=o[d])}return e},w.apply(this,arguments)}function s(e,a){if(e==null)return{};var o={},d=Object.keys(e),m,i;for(i=0;i<d.length;i++)m=d[i],!(a.indexOf(m)>=0)&&(o[m]=e[m]);return o}function r(e){var a=e.className,o=e.top,d=e.left,m=e.data,i=m===void 0?[]:m,c=e.centroid,C=e.innerRadius,j=C===void 0?0:C,x=e.outerRadius,E=e.cornerRadius,Y=e.startAngle,de=e.endAngle,ne=e.padAngle,Ce=e.padRadius,B=e.pieSort,pe=e.pieSortValues,ge=e.pieValue,ie=e.children,ce=e.fill,h=ce===void 0?"":ce,ve=s(e,L),se=n({innerRadius:j,outerRadius:x,cornerRadius:E,padRadius:Ce}),q=D({startAngle:Y,endAngle:de,padAngle:ne,value:ge,sort:B,sortValues:pe}),re=q(i);return ie?_.createElement(_.Fragment,null,ie({arcs:re,path:se,pie:q})):_.createElement(p.A,{className:"visx-pie-arcs-group",top:o,left:d},re.map(function(X,je){return _.createElement("g",{key:"pie-arc-"+je},_.createElement("path",w({className:T()("visx-pie-arc",a),d:se(X)||"",fill:h==null||typeof h=="string"?h:h(X)},ve)),c?.(se.centroid(X),X))}))}},"../../../node_modules/.pnpm/@wordpress+deprecated@4.30.0/node_modules/@wordpress/deprecated/build-module/index.js":(G,O,t)=>{t.d(O,{A:()=>T});var _=t("../../../node_modules/.pnpm/@wordpress+hooks@4.30.0/node_modules/@wordpress/hooks/build-module/index.js");const M=Object.create(null);function T(p,f={}){const{since:g,version:l,alternative:n,plugin:$,link:V,hint:D}=f,b=$?` from ${$}`:"",H=g?` since version ${g}`:"",L=l?` and will be removed${b} in version ${l}`:"",w=n?` Please use ${n} instead.`:"",s=V?` See: ${V}`:"",r=D?` Note: ${D}`:"",e=`${p} is deprecated${H}${L}.${w}${s}${r}`;e in M||((0,_.Eo)("deprecated",p,f,e),console.warn(e),M[e]=!0)}},"../charts/src/components/bar-chart/bar-chart.tsx":(G,O,t)=>{t.d(O,{A:()=>Ee});var _=t("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),M=t("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),T=t("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),p=t("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),f=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),g=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),l=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),n=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),$=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),V=t("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),D=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),b=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),H=t("../charts/src/hooks/use-xychart-theme.ts"),L=t("../charts/src/hooks/use-chart-data-transform.ts");const w=(u,F={enabled:!1})=>{const{enabled:I,minValueRatio:A=.6,maxValueRatio:U=.008}=F;return(0,b.useMemo)(()=>{if(!I)return u;const z=[];for(const S of u)for(const R of S.data)R.value!==null&&R.value!==0&&z.push(R.value);if(z.length===0)return u;const W=z.map(Math.abs),N=Math.min(...W),Q=Math.max(...W),K=Math.min(N*A,Q*U);return u.map(S=>({...S,data:S.data.map(R=>R.value===0?{...R,visualValue:K}:R)}))},[u,I,A,U])};var s=t("../charts/src/hooks/use-chart-margin.tsx"),r=t("../charts/src/hooks/use-element-height.ts"),e=t("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),a=t("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),o=t("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),d=t("../charts/src/providers/chart-context/global-charts-provider.tsx"),m=t("../charts/src/utils/create-composition.ts"),i=t("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),c=t("../charts/src/components/legend/legend.tsx"),C=t("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),j=t("../charts/src/components/private/with-responsive/with-responsive.tsx"),x=t("../charts/src/components/tooltip/accessible-tooltip.tsx"),E=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Y=t.n(E),de=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),ne={};ne.insert="head",ne.singleton=!1;var Ce=Y()(de.A,ne);const B=de.A.locals||{};var pe=t("../number-formatters/src/index.ts");const ge=u=>new Date(u).toLocaleDateString(void 0,{month:"short",day:"numeric"}),ie=u=>typeof u.paddingInner=="number"?u.paddingInner:0;function ce(u,F,I={}){const A=(0,b.useMemo)(()=>{const U={type:"band",padding:.2,paddingInner:.1},z={type:"linear",nice:!0,zero:!1},W=u?.[0]?.data?.[0]?.label?S=>S:ge,N=pe.qe,Q=S=>S?.label||S?.date,K=S=>{const R=S;return R?.visualValue!==void 0?R.visualValue:S?.value};return{vertical:{xTickFormat:W,yTickFormat:N,tooltipLabelFormatter:W,xAccessor:Q,yAccessor:K,gridVisibility:"x",xScale:U,yScale:z},horizontal:{xTickFormat:N,yTickFormat:W,tooltipLabelFormatter:W,xAccessor:K,yAccessor:Q,gridVisibility:"y",xScale:z,yScale:U}}},[u]);return(0,b.useMemo)(()=>{const U=F?"horizontal":"vertical",{xTickFormat:z,yTickFormat:W,tooltipLabelFormatter:N,xAccessor:Q,yAccessor:K,gridVisibility:S,xScale:R,yScale:xe}=A[U],he={...R,...I.xScale||{}},ue={...xe,...I.yScale||{}},oe=F?I.axis?.y?.tickFormat:I.axis?.x?.tickFormat;return{gridVisibility:S,xScale:he,yScale:ue,accessors:{xAccessor:Q,yAccessor:K},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:z,...I.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:W,...I.axis?.y||{}}},barGroup:{padding:ie(F?ue:he)},tooltip:{labelFormatter:oe||N}}},[A,I,F])}var h=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ve=V.__,se=u=>u?.length?u.some(I=>I.data.some(A=>isNaN(A.value)||A.value===null||A.value===void 0||!A.label&&(!("date"in A&&A.date)||isNaN(A.date.getTime()))))?"Invalid data":null:"No data available",q=(u,F)=>`bar-pattern-${u}-${F}`,re=({data:u,chartId:F,width:I,height:A=400,className:U,margin:z,withTooltips:W=!1,showLegend:N=!1,legendOrientation:Q="horizontal",legendPosition:K="bottom",legendAlignment:S="center",legendShape:R="rect",gridVisibility:xe,renderTooltip:he,options:ue={},orientation:oe="vertical",withPatterns:le=!1,showZeroValues:Oe=!1,children:Me})=>{const fe=oe==="horizontal",P=(0,e.R)(F),_e=(0,H.O)(u),J=(0,L.E)(u),Le=w(J,{enabled:Oe}),Te=(0,i.f)(J),k=ce(Le,fe,ue),Ae=(0,s.a)(A,k,J,_e,fe),[Re,be]=(0,r.v)(),Ie=(0,b.useRef)(null),[ee,Fe]=(0,b.useState)(void 0),[Ne,Pe]=(0,b.useState)(!1),Be=Math.max(0,...u.map(v=>v.data?.length||0))*u.length,{tooltipRef:We,onChartFocus:ke,onChartBlur:Ve,onChartKeyDown:ze}=(0,x.JZ)({selectedIndex:ee,setSelectedIndex:Fe,isNavigating:Ne,setIsNavigating:Pe,chartRef:Ie,totalPoints:Be}),{resolveGroupColor:Se}=(0,a.j)(),me=(0,b.useCallback)((v,y)=>Se({group:v.group,index:y,overrideColor:v.options?.stroke}),[Se]),Ke=(0,b.useCallback)(v=>()=>le?`url(#${q(P,v)})`:me(J[v],v),[le,me,J,P]),$e=(0,b.useCallback)(({tooltipData:v})=>{const y=v?.nearestDatum?.datum;return y?(0,h.jsxs)("div",{className:B["bar-chart__tooltip"],children:[(0,h.jsx)("div",{className:B["bar-chart__tooltip-header"],children:v?.nearestDatum?.key}),(0,h.jsxs)("div",{className:B["bar-chart__tooltip-row"],children:[(0,h.jsxs)("span",{className:B["bar-chart__tooltip-label"],children:[k.tooltip.labelFormatter(y.label||(y.date?y.date.getTime():0),0,[]),":"]}),(0,h.jsx)("span",{className:B["bar-chart__tooltip-value"],children:y.value})]})]}):null},[k.tooltip]),Ue=(0,b.useCallback)((v,y)=>{const ae=v%4,Z=q(P,v),te={id:Z,stroke:"white",strokeWidth:1,background:y};switch(ae){case 0:default:return(0,h.jsx)(_.A,{...te,width:5,height:5,orientation:["diagonal"]},Z);case 1:return(0,h.jsx)(M.A,{...te,width:6,height:6,fill:"white"},Z);case 2:return(0,h.jsx)(T.A,{...te,width:4,height:4},Z);case 3:return(0,h.jsx)(p.A,{...te,size:8,height:3},Z)}},[P]),Ge=(0,b.useCallback)((v,y)=>`
			.visx-bar[fill="url(#${q(P,v)})"] {
				stroke: ${y};
				stroke-width: 1;
				}
			`,[P]),He=(0,b.useCallback)(()=>{if(ee===void 0)return"";const v=Math.max(...u.map(Je=>Je.data.length)),y=Math.floor(ee/u.length),ae=ee%u.length;if(y>=v||ae>=u.length)return"";const Z=u[ae];if(y>=Z.data.length)return"";const te=ae*v+y;return`
			.bar-chart[data-chart-id="bar-chart-${P}"] .visx-bar-group .visx-bar:nth-child(${te+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[ee,u,P]),ye=se(J),Xe=!ye,Qe=(0,b.useMemo)(()=>({orientation:oe,withPatterns:le}),[oe,le]);if((0,o.t)({chartId:P,legendItems:Te,chartType:"bar",isDataValid:Xe,metadata:Qe}),ye)return(0,h.jsx)("div",{className:(0,D.A)("bar-chart",B["bar-chart"]),children:ye});const De=xe??k.gridVisibility,we=He();return(0,h.jsx)(C.O.Provider,{value:{chartId:P,chartWidth:I,chartHeight:A-(N?be:0)},children:(0,h.jsxs)("div",{className:(0,D.A)("bar-chart",B["bar-chart"],U),"data-testid":"bar-chart",role:"grid","aria-label":ve("Bar chart","jetpack-charts"),style:{width:I,height:A,display:"flex",flexDirection:N&&K==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:ze,onFocus:ke,onBlur:Ve,ref:Ie,"data-chart-id":`bar-chart-${P}`,children:[(0,h.jsxs)(f.A,{theme:_e,width:I,height:A-(N?be:0),margin:{...Ae,...z,...N&&K==="top"?{top:(Ae.top||0)+be}:{}},xScale:k.xScale,yScale:k.yScale,horizontal:fe,pointerEventsDataKey:"nearest",children:[(0,h.jsx)(g.A,{columns:De.includes("y"),rows:De.includes("x"),numTicks:4}),le&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("defs",{"data-testid":"bar-chart-patterns",children:J.map((v,y)=>Ue(y,me(v,y)))}),(0,h.jsx)("style",{children:J.map((v,y)=>Ge(y,me(v,y)))})]}),we&&(0,h.jsx)("style",{children:we}),(0,h.jsx)(l.A,{padding:k.barGroup.padding,children:Le.map((v,y)=>(0,h.jsx)(n.A,{dataKey:v?.label,data:v.data,yAccessor:k.accessors.yAccessor,xAccessor:k.accessors.xAccessor,colorAccessor:Ke(y)},v?.label))}),(0,h.jsx)($.A,{...k.axis.x}),(0,h.jsx)($.A,{...k.axis.y}),W&&(0,h.jsx)(x.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:he||$e,selectedIndex:ee,tooltipRef:We,keyboardFocusedClassName:B["bar-chart__tooltip--keyboard-focused"],series:u,mode:"individual"})]}),N&&(0,h.jsx)(c.s,{orientation:Q,position:K,alignment:S,className:B["bar-chart__legend"],shape:R,ref:Re,chartId:P}),Me]})})},X=u=>(0,b.useContext)(d.m)?(0,h.jsx)(re,{...u}):(0,h.jsx)(d.S,{children:(0,h.jsx)(re,{...u})});X.displayName="BarChart";const je=(0,m.E)(X,{Legend:c.s}),Ee=(0,m.E)((0,j.F)(X),{Legend:c.s})},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(G,O,t)=>{t.d(O,{A:()=>T});function _(p){var f,g,l="";if(typeof p=="string"||typeof p=="number")l+=p;else if(typeof p=="object")if(Array.isArray(p)){var n=p.length;for(f=0;f<n;f++)p[f]&&(g=_(p[f]))&&(l&&(l+=" "),l+=g)}else for(g in p)p[g]&&(l&&(l+=" "),l+=g);return l}function M(){for(var p,f,g=0,l="",n=arguments.length;g<n;g++)(p=arguments[g])&&(f=_(p))&&(l&&(l+=" "),l+=f);return l}const T=M},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(G,O,t)=>{t.d(O,{A:()=>g});var _=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),M=t.n(_),T=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),p=t.n(T),f=p()(M());f.push([G.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),f.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const g=f},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":G=>{var O=function(r){return t(r)&&!_(r)};function t(s){return!!s&&typeof s=="object"}function _(s){var r=Object.prototype.toString.call(s);return r==="[object RegExp]"||r==="[object Date]"||p(s)}var M=typeof Symbol=="function"&&Symbol.for,T=M?Symbol.for("react.element"):60103;function p(s){return s.$$typeof===T}function f(s){return Array.isArray(s)?[]:{}}function g(s,r){return r.clone!==!1&&r.isMergeableObject(s)?L(f(s),s,r):s}function l(s,r,e){return s.concat(r).map(function(a){return g(a,e)})}function n(s,r){if(!r.customMerge)return L;var e=r.customMerge(s);return typeof e=="function"?e:L}function $(s){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(s).filter(function(r){return Object.propertyIsEnumerable.call(s,r)}):[]}function V(s){return Object.keys(s).concat($(s))}function D(s,r){try{return r in s}catch{return!1}}function b(s,r){return D(s,r)&&!(Object.hasOwnProperty.call(s,r)&&Object.propertyIsEnumerable.call(s,r))}function H(s,r,e){var a={};return e.isMergeableObject(s)&&V(s).forEach(function(o){a[o]=g(s[o],e)}),V(r).forEach(function(o){b(s,o)||(D(s,o)&&e.isMergeableObject(r[o])?a[o]=n(o,e)(s[o],r[o],e):a[o]=g(r[o],e))}),a}function L(s,r,e){e=e||{},e.arrayMerge=e.arrayMerge||l,e.isMergeableObject=e.isMergeableObject||O,e.cloneUnlessOtherwiseSpecified=g;var a=Array.isArray(r),o=Array.isArray(s),d=a===o;return d?a?e.arrayMerge(s,r,e):H(s,r,e):g(r,e)}L.all=function(r,e){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(a,o){return L(a,o,e)},{})};var w=L;G.exports=w}}]);
