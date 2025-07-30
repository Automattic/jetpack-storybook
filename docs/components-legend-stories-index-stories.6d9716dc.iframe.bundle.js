"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx":(U,b,e)=>{e.r(b),e.d(b,{AlignmentOptions:()=>l,CustomShape:()=>F,DashboardExample:()=>w,Horizontal:()=>I,StandaloneLegendWithChartId:()=>P,Vertical:()=>T,WithBarChart:()=>G,WithLineChart:()=>H,__namedExportsOrder:()=>Q,default:()=>f});var C=e("../charts/src/providers/chart-context/chart-context.tsx"),j=e("../charts/src/providers/theme/theme-provider.tsx"),v=e("../charts/src/components/bar-chart/bar-chart.tsx"),i=e("../charts/src/components/line-chart/line-chart.tsx"),g=e("../charts/src/components/pie-chart/pie-chart.tsx"),u=e("../charts/src/components/legend/legend.tsx"),B=e("../charts/src/components/legend/use-chart-legend-data.ts"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f={title:"JS Packages/Charts/Composites/Legend",component:u.s,parameters:{layout:"centered",docs:{description:{component:`
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
`}}}},r=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],R=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],$=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],I={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},T={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},ve=()=>{const z=(0,j.RW)(),x=(0,B.B)(r,z,{showValues:!1});return(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,t.jsx)(i.A,{data:r,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,t.jsx)(u.s,{items:x,orientation:"horizontal"})]})},H={render:()=>(0,t.jsx)(ve,{}),parameters:{docs:{description:{story:"Legend used with LineChart data, positioned independently below the chart."}}}},_e=()=>{const z=(0,j.RW)(),x=(0,B.B)(R,z);return(0,t.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,t.jsx)(v.A,{data:R,showLegend:!1,width:400,height:300}),(0,t.jsx)(u.s,{items:x,orientation:"vertical"})]})},G={render:()=>(0,t.jsx)(_e,{}),parameters:{docs:{description:{story:"Legend used with BarChart data, positioned vertically beside the chart."}}}},ie=()=>(0,t.jsx)(C._$,{children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,t.jsx)(i.A,{chartId:"standalone-legend-chart",data:r,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,t.jsx)(u.s,{chartId:"standalone-legend-chart",orientation:"horizontal"})]})}),P={render:()=>(0,t.jsx)(ie,{}),parameters:{docs:{source:{code:`<ChartProvider>
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
`}}}},fe=()=>(0,t.jsx)(C._$,{children:(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,t.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,t.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,t.jsx)(i.A,{chartId:"dashboard-revenue",data:r,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,t.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,t.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,t.jsx)(v.A,{chartId:"dashboard-sales",data:R,showLegend:!1,width:280,height:200})]}),(0,t.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,t.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,t.jsx)(g.A,{chartId:"dashboard-devices",data:$,showLegend:!1})]})]})]}),(0,t.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,t.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,t.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,t.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,t.jsx)(u.s,{chartId:"dashboard-revenue",orientation:"vertical"})]}),(0,t.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,t.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,t.jsx)(u.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,t.jsx)(u.s,{chartId:"dashboard-devices",orientation:"vertical"})]})]})]})}),w={render:()=>(0,t.jsx)(fe,{}),parameters:{layout:"fullscreen",docs:{description:{story:`
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
`}}}},l={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignmentHorizontal:"left",alignmentVertical:"top"},parameters:{docs:{description:{story:"Legend with custom alignment options."}}}},F={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"},parameters:{docs:{description:{story:"Legend with circle shape instead of default rectangle."}}}},Q=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","CustomShape"];I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <WithLineChartData />,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with LineChart data, positioned independently below the chart.'
      }
    }
  }
}`,...H.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <WithBarChartData />,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with BarChart data, positioned vertically beside the chart.'
      }
    }
  }
}`,...G.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}}},"../charts/src/components/bar-chart/bar-chart.tsx":(U,b,e)=>{e.d(b,{A:()=>q});var C=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),j=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),v=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),i=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),g=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),u=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),B=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),t=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),A=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),f=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),R=e("../charts/src/providers/chart-context/utils.ts"),$=e("../charts/src/providers/chart-context/chart-context.tsx"),I=e("../charts/src/providers/theme/theme-provider.tsx"),T=e("../charts/src/components/legend/legend.tsx"),ve=e("../charts/src/components/legend/use-chart-legend-data.ts"),H=e("../charts/src/components/shared/use-chart-data-transform.ts"),_e=e("../charts/src/components/shared/use-chart-margin.tsx"),G=e("../charts/src/components/shared/use-element-height.ts");const ie=(a,p={enabled:!1})=>{const{enabled:m,minValueRatio:d=.6,maxValueRatio:V=.008}=p;return(0,r.useMemo)(()=>{if(!m)return a;const y=[];for(const c of a)for(const _ of c.data)_.value!==null&&_.value!==0&&y.push(_.value);if(y.length===0)return a;const S=y.map(Math.abs),L=Math.min(...S),W=Math.max(...S),k=Math.min(L*d,W*V);return a.map(c=>({...c,data:c.data.map(_=>_.value===0?{..._,visualValue:k}:_)}))},[a,m,d,V])};var P=e("../charts/src/components/shared/with-responsive.tsx"),fe=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),w=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(w),F=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),Q={};Q.insert="head",Q.singleton=!1;var z=l()(F.A,Q);const x=F.A.locals||{};var h=e("../number-formatters/src/index.ts");const re=a=>new Date(a).toLocaleDateString(void 0,{month:"short",day:"numeric"}),X=a=>typeof a.paddingInner=="number"?a.paddingInner:0;function M(a,p,m={}){const d=(0,r.useMemo)(()=>{const V={type:"band",padding:.2,paddingInner:.1},y={type:"linear",nice:!0,zero:!1},S=a?.[0]?.data?.[0]?.label?c=>c:re,L=h.qe,W=c=>c?.label||c?.date,k=c=>{const _=c;return _?.visualValue!==void 0?_.visualValue:c?.value};return{vertical:{xTickFormat:S,yTickFormat:L,tooltipLabelFormatter:S,xAccessor:W,yAccessor:k,gridVisibility:"x",xScale:V,yScale:y},horizontal:{xTickFormat:L,yTickFormat:S,tooltipLabelFormatter:S,xAccessor:k,yAccessor:W,gridVisibility:"y",xScale:y,yScale:V}}},[a]);return(0,r.useMemo)(()=>{const V=p?"horizontal":"vertical",{xTickFormat:y,yTickFormat:S,tooltipLabelFormatter:L,xAccessor:W,yAccessor:k,gridVisibility:c,xScale:_,yScale:ue}=d[V],he={..._,...m.xScale||{}},pe={...ue,...m.yScale||{}},oe=p?m.axis?.y?.tickFormat:m.axis?.x?.tickFormat;return{gridVisibility:c,xScale:he,yScale:pe,accessors:{xAccessor:W,yAccessor:k},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:y,...m.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:S,...m.axis?.y||{}}},barGroup:{padding:X(p?pe:he)},tooltip:{labelFormatter:oe||L}}},[d,m,p])}var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ce=a=>a?.length?a.some(m=>m.data.some(d=>isNaN(d.value)||d.value===null||d.value===void 0||!d.label&&(!("date"in d&&d.date)||isNaN(d.date.getTime()))))?"Invalid data":null:"No data available",Z=(a,p)=>`bar-pattern-${a}-${p}`,J=({data:a,chartId:p,width:m,height:d=400,className:V,margin:y,withTooltips:S=!1,showLegend:L=!1,legendOrientation:W="horizontal",legendAlignmentHorizontal:k="center",legendAlignmentVertical:c="bottom",legendShape:_="rect",gridVisibility:ue,renderTooltip:he,options:pe={},orientation:oe="vertical",withPatterns:ee=!1,showZeroValues:be=!1})=>{const xe=oe==="horizontal",te=(0,r.useId)(),ae=(0,R.R)(p),ye=(0,I.RW)(),N=(0,I.Ox)(a),K=(0,H.E)(a),Ce=ie(K,{enabled:be}),je=(0,ve.B)(K,ye),D=M(Ce,xe,pe),le=(0,_e.a)(d,D,K,N,xe),[Se,Le]=(0,G.v)(),De=(0,r.useRef)(null),[ne,Ie]=(0,r.useState)(void 0),[E,O]=(0,r.useState)(!1),we=Math.max(0,...a.map(s=>s.data?.length||0))*a.length,{tooltipRef:Ee,onChartFocus:Ae,onChartBlur:Te,onChartKeyDown:Pe}=(0,fe.JZ)({selectedIndex:ne,setSelectedIndex:Ie,isNavigating:E,setIsNavigating:O,chartRef:De,totalPoints:we}),se=(0,r.useCallback)((s,o)=>s?.options?.stroke||N.colors[o%N.colors.length],[N]),Me=(0,r.useCallback)(s=>()=>ee?`url(#${Z(te,s)})`:se(K[s],s),[ee,se,K,te]),Re=(0,r.useCallback)(({tooltipData:s})=>{const o=s?.nearestDatum?.datum;return o?(0,n.jsxs)("div",{className:x["bar-chart__tooltip"],children:[(0,n.jsx)("div",{className:x["bar-chart__tooltip-header"],children:s?.nearestDatum?.key}),(0,n.jsxs)("div",{className:x["bar-chart__tooltip-row"],children:[(0,n.jsxs)("span",{className:x["bar-chart__tooltip-label"],children:[D.tooltip.labelFormatter(o.label||(o.date?o.date.getTime():0),0,[]),":"]}),(0,n.jsx)("span",{className:x["bar-chart__tooltip-value"],children:o.value})]})]}):null},[D.tooltip]),Fe=(0,r.useCallback)((s,o)=>{const me=s%4,de=Z(te,s),ge={id:de,stroke:"white",strokeWidth:1,background:o};switch(me){case 0:default:return(0,n.jsx)(C.A,{...ge,width:5,height:5,orientation:["diagonal"]},de);case 1:return(0,n.jsx)(j.A,{...ge,width:6,height:6,fill:"white"},de);case 2:return(0,n.jsx)(v.A,{...ge,width:4,height:4},de);case 3:return(0,n.jsx)(i.A,{...ge,size:8,height:3},de)}},[te]),ze=(0,r.useCallback)((s,o)=>`
			.visx-bar[fill="url(#${Z(te,s)})"] {
				stroke: ${o};
				stroke-width: 1;
				}
			`,[te]),We=(0,r.useCallback)(()=>{if(ne===void 0)return"";const s=Math.max(...a.map(Ke=>Ke.data.length)),o=Math.floor(ne/a.length),me=ne%a.length;if(o>=s||me>=a.length)return"";const de=a[me];if(o>=de.data.length)return"";const ge=me*s+o;return`
			.bar-chart[data-chart-id="bar-chart-${ae}"] .visx-bar-group .visx-bar:nth-child(${ge+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[ne,a,ae]),Ve=ce(K),ke=!Ve,Ne=(0,r.useMemo)(()=>({orientation:oe,withPatterns:ee}),[oe,ee]);if((0,R.t)(ae,je,ye,"bar",ke,Ne),Ve)return(0,n.jsx)("div",{className:(0,f.A)("bar-chart",x["bar-chart"]),children:Ve});const Oe=ue??D.gridVisibility,Be=We();return(0,n.jsxs)("div",{className:(0,f.A)("bar-chart",x["bar-chart"],V),"data-testid":"bar-chart",role:"grid","aria-label":"bar chart",style:{width:m,height:d,display:"flex",flexDirection:L&&c==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:Pe,onFocus:Ae,onBlur:Te,ref:De,"data-chart-id":`bar-chart-${ae}`,children:[(0,n.jsxs)(g.A,{theme:N,width:m,height:d-(L?Le:0),margin:{...le,...y,...L&&c==="top"?{top:(le.top||0)+Le}:{}},xScale:D.xScale,yScale:D.yScale,horizontal:xe,pointerEventsDataKey:"nearest",children:[(0,n.jsx)(u.A,{columns:Oe.includes("y"),rows:Oe.includes("x"),numTicks:4}),ee&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("defs",{"data-testid":"bar-chart-patterns",children:K.map((s,o)=>Fe(o,se(s,o)))}),(0,n.jsx)("style",{children:K.map((s,o)=>ze(o,se(s,o)))})]}),Be&&(0,n.jsx)("style",{children:Be}),(0,n.jsx)(B.A,{padding:D.barGroup.padding,children:Ce.map((s,o)=>(0,n.jsx)(t.A,{dataKey:s?.label,data:s.data,yAccessor:D.accessors.yAccessor,xAccessor:D.accessors.xAccessor,colorAccessor:Me(o)},s?.label))}),(0,n.jsx)(A.A,{...D.axis.x}),(0,n.jsx)(A.A,{...D.axis.y}),S&&(0,n.jsx)(fe.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:he||Re,selectedIndex:ne,tooltipRef:Ee,keyboardFocusedClassName:x["bar-chart__tooltip--keyboard-focused"],series:a,mode:"individual"})]}),L&&(0,n.jsx)(T.s,{items:je,orientation:W,alignmentHorizontal:k,alignmentVertical:c,className:x["bar-chart__legend"],shape:_,ref:Se,chartId:ae})]})},Y=a=>(0,r.useContext)($.uR)?(0,n.jsx)(J,{...a}):(0,n.jsx)($._$,{children:(0,n.jsx)(J,{...a})});Y.displayName="BarChart";const q=(0,P.F)(Y);try{Y.displayName="BarChart",Y.__docgenInfo={description:"",displayName:"BarChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:{value:"400"},description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"rect"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendAlignmentHorizontal:{defaultValue:{value:"center"},description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:{value:"bottom"},description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},orientation:{defaultValue:{value:"vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},withPatterns:{defaultValue:{value:"false"},description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},showZeroValues:{defaultValue:{value:"false"},description:"",name:"showZeroValues",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/bar-chart/bar-chart.tsx#BarChart"]={docgenInfo:Y.__docgenInfo,name:"BarChart",path:"../charts/src/components/bar-chart/bar-chart.tsx#BarChart"})}catch{}},"../charts/src/components/pie-chart/pie-chart.tsx":(U,b,e)=>{e.d(b,{A:()=>x});var C=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),j=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),v=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),u=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js");const t=({withTooltips:h})=>{const{tooltipOpen:re,tooltipLeft:X,tooltipTop:M,tooltipData:n,hideTooltip:ce,showTooltip:Z}=(0,u.A)(),J=(0,i.useCallback)((q,a)=>{if(!h)return;const p=(0,g.A)(q);p&&Z({tooltipData:a,tooltipLeft:p.x,tooltipTop:p.y-10})},[h,Z]),Y=(0,i.useCallback)(()=>{h&&ce()},[h,ce]);return{onMouseMove:J,onMouseLeave:Y,tooltipOpen:re,tooltipData:n||null,tooltipLeft:X,tooltipTop:M}};var A=e("../charts/src/providers/chart-context/utils.ts"),f=e("../charts/src/providers/chart-context/chart-context.tsx"),r=e("../charts/src/providers/theme/theme-provider.tsx"),R=e("../charts/src/providers/theme/themes.ts"),$=e("../charts/src/components/legend/legend.tsx"),I=e("../charts/src/components/legend/use-chart-legend-data.ts"),T=e("../charts/src/components/shared/use-element-height.ts"),ve=e("../charts/src/components/shared/with-responsive.tsx"),H=e("../charts/src/components/tooltip/base-tooltip.tsx"),_e=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),G=e.n(_e),ie=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),P={};P.insert="head",P.singleton=!1;var fe=G()(ie.A,P);const w=ie.A.locals||{};var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const F=h=>{if(!h.length)return{isValid:!1,message:"No data available"};if(h.some(M=>M.percentage<0||M.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const X=h.reduce((M,n)=>M+n.percentage,0);return Math.abs(X-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},Q=({data:h,chartId:re,withTooltips:X=!1,className:M,showLegend:n,legendOrientation:ce,legendAlignmentHorizontal:Z="center",legendAlignmentVertical:J="bottom",legendShape:Y="circle",size:q,thickness:a=1,padding:p=20,gapScale:m=0,cornerScale:d=0,children:V=null})=>{const y=(0,r.RW)(),S=(0,A.R)(re),[L,W]=(0,T.v)(),{onMouseMove:k,onMouseLeave:c,tooltipOpen:_,tooltipData:ue,tooltipLeft:he,tooltipTop:pe}=t({withTooltips:X}),oe=(0,i.useMemo)(()=>({showValues:!0}),[]),ee=(0,I.B)(h,y,oe),{isValid:be,message:xe}=F(h),te=(0,i.useMemo)(()=>({thickness:a,gapScale:m,cornerScale:d}),[a,m,d]);if((0,A.t)(S,ee,y,"pie",be,te),!be)return(0,l.jsx)("div",{className:(0,v.A)("pie-chart",w["pie-chart"],M),children:(0,l.jsx)("div",{className:w["error-message"],children:xe})});const ae=q,ye=q,N=n&&J==="top"?ye-W:ye,K=Math.min(ae,N)/2,Ce=ae/2,je=N/2,D=m*(2*Math.PI/h.length),le=K-p,Se=a===0?0:le*(1-a),Le=(le-Se)/2,De=d?Math.min(d*le,Le):0,ne=h.map((E,O)=>({...E,index:O})),Ie={value:E=>E.value,fill:E=>E?.color||y.colors[E.index]};return(0,l.jsxs)("div",{className:(0,v.A)("pie-chart",w["pie-chart"],M),style:{display:"flex",flexDirection:n&&J==="top"?"column-reverse":"column"},children:[(0,l.jsx)("svg",{viewBox:`0 0 ${q} ${N}`,preserveAspectRatio:"xMidYMid meet",width:q,height:N,children:(0,l.jsxs)(C.A,{top:je,left:Ce,children:[(0,l.jsx)(j.A,{data:ne,pieValue:Ie.value,outerRadius:le,innerRadius:Se,padAngle:D,cornerRadius:De,children:E=>E.arcs.map((O,we)=>{const[Ee,Ae]=E.path.centroid(O),Te=O.endAngle-O.startAngle>=.25,Pe=Me=>k(Me,O.data),se={d:E.path(O)||"",fill:Ie.fill(O.data)};return X&&(se.onMouseMove=Pe,se.onMouseLeave=c),(0,l.jsxs)("g",{children:[(0,l.jsx)("path",{...se}),Te&&(0,l.jsx)("text",{x:Ee,y:Ae,dy:".33em",fill:y.labelBackgroundColor||R.zQ.labelBackgroundColor,fontSize:12,textAnchor:"middle",pointerEvents:"none",children:O.data.label})]},`arc-${we}`)})}),V]})}),n&&(0,l.jsx)($.s,{items:ee,orientation:ce,alignmentHorizontal:Z,alignmentVertical:J,className:w["pie-chart-legend"],shape:Y,ref:L,chartId:S}),X&&_&&ue&&(0,l.jsx)(H.R,{data:ue,top:pe||0,left:he||0,style:{transform:"translate(-50%, -100%)"}})]})},z=h=>(0,i.useContext)(f.uR)?(0,l.jsx)(Q,{...h}):(0,l.jsx)(f._$,{children:(0,l.jsx)(Q,{...h})});z.displayName="PieChart";const x=(0,ve.F)(z);try{z.displayName="PieChart",z.__docgenInfo={description:"",displayName:"PieChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"Use the children prop to render additional elements on the chart.",name:"children",required:!1,type:{name:"ReactNode"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<DataPointPercentage[], number>"}},legendAlignmentHorizontal:{defaultValue:{value:"center"},description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:{value:"bottom"},description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},innerRadius:{defaultValue:null,description:"Inner radius in pixels. If > 0, creates a donut chart. Defaults to 0.",name:"innerRadius",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"20"},description:"Add padding to the chart",name:"padding",required:!1,type:{name:"number"}},thickness:{defaultValue:{value:"1"},description:`Thickness of the pie chart.
A value between 0 and 1, where 0 means no thickness
and 1 means the maximum thickness.`,name:"thickness",required:!1,type:{name:"number"}},gapScale:{defaultValue:{value:"0"},description:`Scale of the gap between groups in the pie chart
A value between 0 and 1, where 0 means no gap.`,name:"gapScale",required:!1,type:{name:"number"}},cornerScale:{defaultValue:{value:"0"},description:`Scale of the corner radius for the pie chart segments.
A value between 0 and 1, where 0 means no corner radius.`,name:"cornerScale",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-chart/pie-chart.tsx#PieChart"]={docgenInfo:z.__docgenInfo,name:"PieChart",path:"../charts/src/components/pie-chart/pie-chart.tsx#PieChart"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(U,b,e)=>{e.d(b,{R:()=>A});var C=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=e.n(C),v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),i={};i.insert="head",i.singleton=!1;var g=j()(v.A,i);const u=v.A.locals||{};var B=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=({data:f})=>(0,B.jsxs)(B.Fragment,{children:[f?.label,": ",f?.valueDisplay||f?.value]}),A=({data:f,top:r,left:R,component:$=t,children:I,className:T})=>(0,B.jsx)("div",{className:u.tooltip,style:{top:r,left:R},role:"tooltip",children:I||f&&(0,B.jsx)($,{data:f,className:T})});try{A.displayName="BaseTooltip",A.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:A.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(U,b,e)=>{e.d(b,{A:()=>u});var C=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(C),v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(v),g=i()(j());g.push([U.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),g.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const u=g},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":(U,b,e)=>{e.d(b,{A:()=>u});var C=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(C),v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(v),g=i()(j());g.push([U.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),g.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const u=g},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(U,b,e)=>{e.d(b,{A:()=>u});var C=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(C),v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(v),g=i()(j());g.push([U.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),g.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const u=g}}]);
