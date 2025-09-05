"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx":(Z,W,e)=>{e.r(W),e.d(W,{AlignmentOptions:()=>f,CustomShape:()=>M,DashboardExample:()=>B,Horizontal:()=>E,StandaloneLegendWithChartId:()=>L,Vertical:()=>A,WithBarChart:()=>T,WithLineChart:()=>F,__namedExportsOrder:()=>ne,default:()=>q});var K=e("../charts/src/stories/chart-decorator.tsx"),V=e("../charts/src/stories/theme-config.tsx"),O=e("../charts/src/components/bar-chart/bar-chart.tsx"),D=e("../charts/src/components/line-chart/line-chart.tsx"),S=e("../charts/src/components/pie-chart/pie-chart.tsx"),k=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),u=e("../charts/src/components/legend/legend.tsx"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const q={title:"JS Packages/Charts/Composites/Legend",component:u.s,parameters:{layout:"centered",docs:{description:{component:`
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
`}}},decorators:[K.cg],argTypes:{...V.jW}},w=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],o=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],ee=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],E={render:v=>{const{themeName:re,...G}=v;return(0,a.jsx)(u.s,{...G})},args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},A={render:v=>{const{themeName:re,...G}=v;return(0,a.jsx)(u.s,{...G})},args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},ae=()=>{const v=(0,k.f)(w,{showValues:!1});return(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,a.jsx)(D.A,{data:w,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,a.jsx)(u.s,{items:v,orientation:"horizontal"})]})},F={render:()=>(0,a.jsx)(ae,{}),parameters:{docs:{description:{story:"Legend used with LineChart data, positioned independently below the chart."}}}},te=()=>{const v=(0,k.f)(o);return(0,a.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,a.jsx)(O.A,{data:o,showLegend:!1,width:400,height:300}),(0,a.jsx)(u.s,{items:v,orientation:"vertical"})]})},T={render:()=>(0,a.jsx)(te,{}),parameters:{docs:{description:{story:"Legend used with BarChart data, positioned vertically beside the chart."}}}},se=()=>(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,a.jsx)(D.A,{chartId:"standalone-legend-chart",data:w,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,a.jsx)(u.s,{chartId:"standalone-legend-chart",orientation:"horizontal"})]}),L={render:()=>(0,a.jsx)(se,{}),parameters:{docs:{source:{code:`<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
`}}}},X=()=>(0,a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,a.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,a.jsx)(D.A,{chartId:"dashboard-revenue",data:w,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,a.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,a.jsx)(O.A,{chartId:"dashboard-sales",data:o,showLegend:!1,width:280,height:200})]}),(0,a.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,a.jsx)(S.A,{chartId:"dashboard-devices",data:ee,showLegend:!1})]})]})]}),(0,a.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,a.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,a.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,a.jsx)(u.s,{chartId:"dashboard-revenue",orientation:"vertical"})]}),(0,a.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,a.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,a.jsx)(u.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,a.jsx)(u.s,{chartId:"dashboard-devices",orientation:"vertical"})]})]})]}),B={render:()=>(0,a.jsx)(X,{}),parameters:{layout:"fullscreen",docs:{description:{story:`
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
`}}}},f={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignment:"start"},parameters:{docs:{description:{story:"Legend with custom alignment options."}}}},M={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"},parameters:{docs:{description:{story:"Legend with circle shape instead of default rectangle."}}}},ne=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","CustomShape"];E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <WithLineChartData />,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with LineChart data, positioned independently below the chart.'
      }
    }
  }
}`,...F.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <WithBarChartData />,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with BarChart data, positioned vertically beside the chart.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}}},"../charts/src/components/bar-chart/bar-chart.tsx":(Z,W,e)=>{e.d(W,{A:()=>we});var K=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),V=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),O=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),D=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),S=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),k=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),u=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),a=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),Y=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),q=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),w=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),ee=e("../charts/src/hooks/use-xychart-theme.ts"),E=e("../charts/src/hooks/use-chart-data-transform.ts");const A=(t,h={enabled:!1})=>{const{enabled:d,minValueRatio:l=.6,maxValueRatio:_=.008}=h;return(0,o.useMemo)(()=>{if(!d)return t;const b=[];for(const i of t)for(const c of i.data)c.value!==null&&c.value!==0&&b.push(c.value);if(b.length===0)return t;const g=b.map(Math.abs),m=Math.min(...g),j=Math.max(...g),y=Math.min(m*l,j*_);return t.map(i=>({...i,data:i.data.map(c=>c.value===0?{...c,visualValue:y}:c)}))},[t,d,l,_])};var ae=e("../charts/src/hooks/use-chart-margin.tsx"),F=e("../charts/src/hooks/use-element-height.ts"),te=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),T=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),se=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),L=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),X=e("../charts/src/utils/create-composition.ts"),B=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),f=e("../charts/src/components/legend/legend.tsx"),M=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),ne=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),v=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),re=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),G=e.n(re),pe=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),oe={};oe.insert="head",oe.singleton=!1;var Qe=G()(pe.A,oe);const C=pe.A.locals||{};var _e=e("../number-formatters/src/index.ts");const Le=t=>new Date(t).toLocaleDateString(void 0,{month:"short",day:"numeric"}),je=t=>typeof t.paddingInner=="number"?t.paddingInner:0;function Ie(t,h,d={}){const l=(0,o.useMemo)(()=>{const _={type:"band",padding:.2,paddingInner:.1},b={type:"linear",nice:!0,zero:!1},g=t?.[0]?.data?.[0]?.label?i=>i:Le,m=_e.qe,j=i=>i?.label||i?.date,y=i=>{const c=i;return c?.visualValue!==void 0?c.visualValue:i?.value};return{vertical:{xTickFormat:g,yTickFormat:m,tooltipLabelFormatter:g,xAccessor:j,yAccessor:y,gridVisibility:"x",xScale:_,yScale:b},horizontal:{xTickFormat:m,yTickFormat:g,tooltipLabelFormatter:g,xAccessor:y,yAccessor:j,gridVisibility:"y",xScale:b,yScale:_}}},[t]);return(0,o.useMemo)(()=>{const _=h?"horizontal":"vertical",{xTickFormat:b,yTickFormat:g,tooltipLabelFormatter:m,xAccessor:j,yAccessor:y,gridVisibility:i,xScale:c,yScale:ie}=l[_],$={...c,...d.xScale||{}},Q={...ie,...d.yScale||{}},U=h?d.axis?.y?.tickFormat:d.axis?.x?.tickFormat;return{gridVisibility:i,xScale:$,yScale:Q,accessors:{xAccessor:j,yAccessor:y},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:b,...d.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:g,...d.axis?.y||{}}},barGroup:{padding:je(h?Q:$)},tooltip:{labelFormatter:U||m}}},[l,d,h])}var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const De=q.__,Se=t=>t?.length?t.some(d=>d.data.some(l=>isNaN(l.value)||l.value===null||l.value===void 0||!l.label&&(!("date"in l&&l.date)||isNaN(l.date.getTime()))))?"Invalid data":null:"No data available",le=(t,h)=>`bar-pattern-${t}-${h}`,ue=({data:t,chartId:h,width:d,height:l=400,className:_,margin:b,withTooltips:g=!1,showLegend:m=!1,legendOrientation:j="horizontal",legendPosition:y="bottom",legendAlignment:i="center",legendShape:c="rect",gridVisibility:ie,renderTooltip:$,options:Q={},orientation:U="vertical",withPatterns:H=!1,showZeroValues:Ee=!1,children:Ae})=>{const ce=U==="horizontal",p=(0,te.R)(h),ge=(0,ee.O)(t),I=(0,E.E)(t),xe=A(I,{enabled:Ee}),Fe=(0,B.f)(I),x=Ie(xe,ce,Q),ve=(0,ae.a)(l,x,I,ge,ce),[Te,he]=(0,F.v)(),be=(0,o.useRef)(null),[R,Be]=(0,o.useState)(void 0),[Me,Pe]=(0,o.useState)(!1),We=Math.max(0,...t.map(n=>n.data?.length||0))*t.length,{tooltipRef:Oe,onChartFocus:ke,onChartBlur:Re,onChartKeyDown:ze}=(0,v.JZ)({selectedIndex:R,setSelectedIndex:Be,isNavigating:Me,setIsNavigating:Pe,chartRef:be,totalPoints:We}),{resolveGroupColor:ye}=(0,T.j)(),J=(0,o.useCallback)((n,r)=>ye({group:n.group,index:r,overrideColor:n.options?.stroke}),[ye]),Ne=(0,o.useCallback)(n=>()=>H?`url(#${le(p,n)})`:J(I[n],n),[H,J,I,p]),Ke=(0,o.useCallback)(({tooltipData:n})=>{const r=n?.nearestDatum?.datum;return r?(0,s.jsxs)("div",{className:C["bar-chart__tooltip"],children:[(0,s.jsx)("div",{className:C["bar-chart__tooltip-header"],children:n?.nearestDatum?.key}),(0,s.jsxs)("div",{className:C["bar-chart__tooltip-row"],children:[(0,s.jsxs)("span",{className:C["bar-chart__tooltip-label"],children:[x.tooltip.labelFormatter(r.label||(r.date?r.date.getTime():0),0,[]),":"]}),(0,s.jsx)("span",{className:C["bar-chart__tooltip-value"],children:r.value})]})]}):null},[x.tooltip]),Ve=(0,o.useCallback)((n,r)=>{const z=n%4,P=le(p,n),N={id:P,stroke:"white",strokeWidth:1,background:r};switch(z){case 0:default:return(0,s.jsx)(K.A,{...N,width:5,height:5,orientation:["diagonal"]},P);case 1:return(0,s.jsx)(V.A,{...N,width:6,height:6,fill:"white"},P);case 2:return(0,s.jsx)(O.A,{...N,width:4,height:4},P);case 3:return(0,s.jsx)(D.A,{...N,size:8,height:3},P)}},[p]),Ge=(0,o.useCallback)((n,r)=>`
			.visx-bar[fill="url(#${le(p,n)})"] {
				stroke: ${r};
				stroke-width: 1;
				}
			`,[p]),Ue=(0,o.useCallback)(()=>{if(R===void 0)return"";const n=Math.max(...t.map($e=>$e.data.length)),r=Math.floor(R/t.length),z=R%t.length;if(r>=n||z>=t.length)return"";const P=t[z];if(r>=P.data.length)return"";const N=z*n+r;return`
			.bar-chart[data-chart-id="bar-chart-${p}"] .visx-bar-group .visx-bar:nth-child(${N+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[R,t,p]),me=Se(I),He=!me,Xe=(0,o.useMemo)(()=>({orientation:U,withPatterns:H}),[U,H]);if((0,se.t)({chartId:p,legendItems:Fe,chartType:"bar",isDataValid:He,metadata:Xe}),me)return(0,s.jsx)("div",{className:(0,w.A)("bar-chart",C["bar-chart"]),children:me});const fe=ie??x.gridVisibility,Ce=Ue();return(0,s.jsx)(M.O.Provider,{value:{chartId:p,chartWidth:d,chartHeight:l-(m?he:0)},children:(0,s.jsxs)("div",{className:(0,w.A)("bar-chart",C["bar-chart"],_),"data-testid":"bar-chart",role:"grid","aria-label":De("Bar chart","jetpack-charts"),style:{width:d,height:l,display:"flex",flexDirection:m&&y==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:ze,onFocus:ke,onBlur:Re,ref:be,"data-chart-id":`bar-chart-${p}`,children:[(0,s.jsxs)(S.A,{theme:ge,width:d,height:l-(m?he:0),margin:{...ve,...b,...m&&y==="top"?{top:(ve.top||0)+he}:{}},xScale:x.xScale,yScale:x.yScale,horizontal:ce,pointerEventsDataKey:"nearest",children:[(0,s.jsx)(k.A,{columns:fe.includes("y"),rows:fe.includes("x"),numTicks:4}),H&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("defs",{"data-testid":"bar-chart-patterns",children:I.map((n,r)=>Ve(r,J(n,r)))}),(0,s.jsx)("style",{children:I.map((n,r)=>Ge(r,J(n,r)))})]}),Ce&&(0,s.jsx)("style",{children:Ce}),(0,s.jsx)(u.A,{padding:x.barGroup.padding,children:xe.map((n,r)=>(0,s.jsx)(a.A,{dataKey:n?.label,data:n.data,yAccessor:x.accessors.yAccessor,xAccessor:x.accessors.xAccessor,colorAccessor:Ne(r)},n?.label))}),(0,s.jsx)(Y.A,{...x.axis.x}),(0,s.jsx)(Y.A,{...x.axis.y}),g&&(0,s.jsx)(v.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:$||Ke,selectedIndex:R,tooltipRef:Oe,keyboardFocusedClassName:C["bar-chart__tooltip--keyboard-focused"],series:t,mode:"individual"})]}),m&&(0,s.jsx)(f.s,{orientation:j,position:y,alignment:i,className:C["bar-chart__legend"],shape:c,ref:Te,chartId:p}),Ae]})})},de=t=>(0,o.useContext)(L.m)?(0,s.jsx)(ue,{...t}):(0,s.jsx)(L.S,{children:(0,s.jsx)(ue,{...t})});de.displayName="BarChart";const Je=(0,X.E)(de,{Legend:f.s}),we=(0,X.E)((0,ne.F)(de),{Legend:f.s})},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(Z,W,e)=>{e.d(W,{A:()=>k});var K=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),V=e.n(K),O=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),D=e.n(O),S=D()(V());S.push([Z.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),S.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const k=S}}]);
