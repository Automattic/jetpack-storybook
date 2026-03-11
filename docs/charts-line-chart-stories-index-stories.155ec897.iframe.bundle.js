"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2371],{"../charts/src/charts/line-chart/stories/index.stories.tsx"(j,x,n){n.r(x),n.d(x,{Animation:()=>m,AspectRatio:()=>f,BrokenLine:()=>P,Comparison:()=>D,CurveTypes:()=>z,CustomLegendPositioning:()=>e,DateStringFormats:()=>r,Default:()=>v,ErrorStates:()=>T,FixedDimensions:()=>y,GradientCustomColors:()=>w,GradientFilled:()=>a,GradientTransparent:()=>h,ManySeries:()=>p,SingleSeries:()=>M,SmartFormatting:()=>S,WithCompositionLegend:()=>t,WithInteractiveLegend:()=>c,WithPointerEvents:()=>O,WithoutSmoothing:()=>_,__namedExportsOrder:()=>E,default:()=>g});var b=n("../charts/src/stories/legend-config.tsx"),i=n("../charts/src/stories/sample-data/index.ts"),d=n("../charts/src/charts/line-chart/line-chart.tsx"),s=n("../charts/src/charts/line-chart/stories/config.tsx"),o=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g={...s.Nc,title:"JS Packages/Charts Library/Charts/Line Chart",argTypes:{...s.Nc.argTypes,seriesCount:{control:{type:"radio"},options:["single","multiple","many"],description:"Number of data series",table:{category:"Data"}},dimensionMode:{control:{type:"radio"},options:["responsive","fixed"],description:"Chart sizing mode",table:{category:"Dimensions"}},smoothing:{control:"boolean",description:"Enable line smoothing",table:{category:"Visual Style"}},curveType:{control:{type:"radio"},options:["linear","smooth","monotone"],description:"Line curve type",table:{category:"Visual Style"}},withGradientFill:{control:"boolean",description:"Fill area under line with gradient",table:{category:"Visual Style"}}}},l=C=>{const{seriesCount:L,dimensionMode:A,crosshairMode:G,withTooltipCrosshairs:I,...W}=C,N=(0,b.D)(C);let R=W.data||s.pn.data;L==="single"?R=[i.B2[0]]:L==="multiple"?R=i.B2.slice(0,4):L==="many"&&(R=i.B2);let F={};A==="fixed"&&(F={width:800,height:400});let V;return G==="vertical"?V={showVertical:!0}:G==="horizontal"?V={showHorizontal:!0}:G==="both"&&(V={showVertical:!0,showHorizontal:!0}),(0,o.jsx)(d.A,{...W,...F,data:R,legend:N,withTooltipCrosshairs:V})},v=l.bind({});v.args={...s.pn};const y=l.bind({});y.args={...s.pn,width:600,height:300};const f=l.bind({});f.args={...s.pn,aspectRatio:.3};const M=l.bind({});M.args={...s.pn,data:[i.B2[0]]};const p=l.bind({});p.args={...s.pn,data:i.B2,showLegend:!0};const m=l.bind({});m.args={...s.pn,animation:!0};const c=l.bind({});c.args={...s.pn,chartId:"interactive-legend-demo",showLegend:!0,legendInteractive:!0},c.parameters={docs:{description:{story:"Line chart with interactive legend. Click or tap legend items to toggle series visibility. Use Tab to focus legend items, then Enter or Space to toggle. Series colors remain stable when toggling visibility."}}};const e=l.bind({});e.args={...s.pn,showLegend:!0,legendAlignment:"start",legendPosition:"top",legendOrientation:"horizontal",withLegendGlyph:!0},e.parameters={docs:{description:{story:"Line chart with top-left positioned horizontal legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with temperature data for London, Canberra, and Mars."}}};const t={render:C=>{const L=(0,b.D)(C);return(0,o.jsx)(d.A,{...v.args,...C,chartId:"composition-line-chart",children:(0,o.jsx)(d.A.Legend,{...L})})},parameters:{docs:{description:{story:"Legend used with LineChart using the composition API, positioned below the chart."}}}},a=l.bind({});a.args={...s.pn,margin:void 0,data:i.Sb,withGradientFill:!0,options:{axis:{y:{orientation:"right"}}}};const w=l.bind({});w.args={width:600,height:300,data:[{label:"Revenue",data:[{date:new Date("2024-01-01"),value:45e3},{date:new Date("2024-02-01"),value:52e3},{date:new Date("2024-03-01"),value:48e3},{date:new Date("2024-04-01"),value:61e3},{date:new Date("2024-05-01"),value:68e3},{date:new Date("2024-06-01"),value:72e3}],options:{gradient:{fromOpacity:.8,toOpacity:0}}},{label:"Expenses",data:[{date:new Date("2024-01-01"),value:28e3},{date:new Date("2024-02-01"),value:31e3},{date:new Date("2024-03-01"),value:29e3},{date:new Date("2024-04-01"),value:33e3},{date:new Date("2024-05-01"),value:35e3},{date:new Date("2024-06-01"),value:38e3}],options:{gradient:{from:"var(--jp-red)",to:"var(--jp-red)",fromOpacity:.6,toOpacity:0}}}],withGradientFill:!0};const h=l.bind({});h.args={width:600,height:300,data:[{label:"Temperature (\xB0C)",data:[{date:new Date("2024-01-01"),value:15},{date:new Date("2024-02-01"),value:18},{date:new Date("2024-03-01"),value:22},{date:new Date("2024-04-01"),value:26},{date:new Date("2024-05-01"),value:30},{date:new Date("2024-06-01"),value:28}],options:{gradient:{stops:[{offset:"0%",opacity:.7},{offset:"20%",opacity:0},{offset:"100%",opacity:0}]}}}],withGradientFill:!0};const T={render:()=>(0,o.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Empty Data"}),(0,o.jsx)(d.A,{width:300,height:200,data:[],withGradientFill:!1,withLegendGlyph:!1})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Invalid Date Values"}),(0,o.jsx)(d.A,{width:300,height:200,data:[{label:"Invalid Dates",data:[{date:new Date("invalid"),value:10},{date:new Date("2024-01-02"),value:20}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Invalid Values"}),(0,o.jsx)(d.A,{width:300,height:200,data:[{label:"Invalid Values",data:[{date:new Date("2024-01-01"),value:NaN},{date:new Date("2024-01-02"),value:null}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Single Data Point"}),(0,o.jsx)(d.A,{width:300,height:200,data:[{label:"Single Point",data:[{date:new Date("2024-01-01"),value:100}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]})]}),parameters:{docs:{description:{story:"Examples of how the line chart handles various error states and edge cases."}}}},_=l.bind({});_.args={...s.pn,smoothing:!1};const O=l.bind({});O.args={...s.pn,onPointerDown:({datum:C})=>alert("Pointer down:"+JSON.stringify(C))};const z={render:()=>{const C=[{label:"Sample Series",data:[{date:new Date("2024-01-01"),value:10},{date:new Date("2024-01-02"),value:90},{date:new Date("2024-01-03"),value:85},{date:new Date("2024-01-04"),value:82},{date:new Date("2024-01-05"),value:5},{date:new Date("2024-01-06"),value:8},{date:new Date("2024-01-07"),value:10}],options:{}}];return(0,o.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Linear Curve"}),(0,o.jsx)(d.A,{width:300,height:200,data:C,curveType:"linear",withGradientFill:!1,withLegendGlyph:!1})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Smooth Curve (Catmull-Rom)"}),(0,o.jsx)(d.A,{width:300,height:200,data:C,curveType:"smooth",withGradientFill:!1,withLegendGlyph:!1})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Monotone X Curve"}),(0,o.jsx)(d.A,{width:300,height:200,data:C,curveType:"monotone",withGradientFill:!1,withLegendGlyph:!1})]})]})},parameters:{docs:{description:{story:"Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points."}}}},S=l.bind({});S.args={...s.pn,data:i.Gv,withGradientFill:!1,smoothing:!0,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}}},S.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const B=100,P=l.bind({});P.args={...s.pn,data:[{...i.Sb[0],label:"Visitors with dashed line",data:i.Sb[0].data.map(C=>({...C,value:C.value+B})),options:{...i.Sb[0].options,seriesLineStyle:{strokeDasharray:"5 5",strokeWidth:3}}},i.Sb[0]],showLegend:!0},P.parameters={docs:{description:{story:"Demonstrates the option of setting a seriesLineStyle to a dash array."}}};const r=l.bind({});r.args={...s.pn,withGradientFill:!1,withLegendGlyph:!1,data:[{label:"String Dates",data:[{dateString:"2024-01-01",value:10},{dateString:"2024-01-02",value:20},{dateString:"2024-01-03 00:00:00",value:15},{dateString:"2024-01-04",value:25},{dateString:"2024-01-05 00:00",value:30}],options:{}}]},r.parameters={docs:{description:{story:`Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:
- Simple date strings (YYYY-MM-DD)
- Date with time (YYYY-MM-DD 00:00:00)
- Date with time (YYYY-MM-DD 00:00)
- ISO format (YYYY-MM-DDT00:00:00)
- UTC format (YYYY-MM-DDT00:00:00Z)
- Timezone offset (YYYY-MM-DDT00:00:00\xB1HH:mm)
`}}};const D=l.bind({});D.args={...s.pn,showLegend:!0,smoothing:!1,data:[{...i.B2[0],label:"New York"},{...i.B2[1],label:"New York last year",group:"new-york",options:{type:"comparison"}},{...i.B2[2],label:"Tokyo"},{...i.B2[3],label:"Tokyo last year",group:"tokyo",options:{type:"comparison"}}]};const E=["Default","FixedDimensions","AspectRatio","SingleSeries","ManySeries","Animation","WithInteractiveLegend","CustomLegendPositioning","WithCompositionLegend","GradientFilled","GradientCustomColors","GradientTransparent","ErrorStates","WithoutSmoothing","WithPointerEvents","CurveTypes","SmartFormatting","BrokenLine","DateStringFormats","Comparison"];v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...y.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...f.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...M.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...m.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...c.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...e.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig(args);
    return <LineChart {...Default.args} {...args} chartId="composition-line-chart">
                <LineChart.Legend {...legend} />
            </LineChart>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Legend used with LineChart using the composition API, positioned below the chart.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...a.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...w.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...h.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <LineChart width={300} height={200} data={[]} withGradientFill={false} withLegendGlyph={false} />
            </div>
            <div>
                <h3>Invalid Date Values</h3>
                <LineChart width={300} height={200} data={[{
        label: 'Invalid Dates',
        data: [{
          date: new Date('invalid'),
          value: 10
        }, {
          date: new Date('2024-01-02'),
          value: 20
        }],
        options: {}
      }]} withGradientFill={false} withLegendGlyph={false} />
            </div>
            <div>
                <h3>Invalid Values</h3>
                <LineChart width={300} height={200} data={[{
        label: 'Invalid Values',
        data: [{
          date: new Date('2024-01-01'),
          value: NaN
        }, {
          date: new Date('2024-01-02'),
          value: null as number | null
        }],
        options: {}
      }]} withGradientFill={false} withLegendGlyph={false} />
            </div>
            <div>
                <h3>Single Data Point</h3>
                <LineChart width={300} height={200} data={[{
        label: 'Single Point',
        data: [{
          date: new Date('2024-01-01'),
          value: 100
        }],
        options: {}
      }]} withGradientFill={false} withLegendGlyph={false} />
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of how the line chart handles various error states and edge cases.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,..._.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...O.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Create sample data that highlights the difference between curve types
    // Monotone X will prevent overshooting on steep changes followed by gradual changes
    const curveData = [{
      label: 'Sample Series',
      data: [{
        date: new Date('2024-01-01'),
        value: 10
      }, {
        date: new Date('2024-01-02'),
        value: 90
      },
      // Sharp rise
      {
        date: new Date('2024-01-03'),
        value: 85
      },
      // Slight decline
      {
        date: new Date('2024-01-04'),
        value: 82
      },
      // Gradual decline
      {
        date: new Date('2024-01-05'),
        value: 5
      },
      // Sharp drop
      {
        date: new Date('2024-01-06'),
        value: 8
      },
      // Slight rise
      {
        date: new Date('2024-01-07'),
        value: 10
      } // Gradual rise
      ],
      options: {}
    }];
    return <div style={{
      display: 'grid',
      gap: '2rem',
      gridTemplateColumns: 'repeat(3, 1fr)'
    }}>
                <div>
                    <h3>Linear Curve</h3>
                    <LineChart width={300} height={200} data={curveData} curveType="linear" withGradientFill={false} withLegendGlyph={false} />
                </div>
                <div>
                    <h3>Smooth Curve (Catmull-Rom)</h3>
                    <LineChart width={300} height={200} data={curveData} curveType="smooth" withGradientFill={false} withLegendGlyph={false} />
                </div>
                <div>
                    <h3>Monotone X Curve</h3>
                    <LineChart width={300} height={200} data={curveData} curveType="monotone" withGradientFill={false} withLegendGlyph={false} />
                </div>
            </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...S.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...P.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...r.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);

  // Determine data based on seriesCount control
  let data = chartProps.data || lineChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }

  // Determine dimensions based on dimensionMode control
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }

  // Map crosshairMode to withTooltipCrosshairs
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <LineChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...D.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"(j,x,n){n.d(x,{A:()=>g});var b=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),i=n.n(b),d=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),o=n.n(s),u=n("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js");function g(l){var v=l.top,y=v===void 0?0:v,f=l.left,M=f===void 0?0:f,p=l.className,m=l.children;return d.createElement(u.A,{className:o()("visx-glyph",p),top:y,left:M},m)}g.propTypes={top:i().number,left:i().number,className:i().string,children:i().node}},"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"(j,x,n){n.d(x,{A:()=>M});var b=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),i=n.n(b),d=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),o=n.n(s),u=n("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),g=n("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/star.js"),l=n("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),v=["children","className","top","left","size"];function y(){return y=Object.assign?Object.assign.bind():function(p){for(var m=1;m<arguments.length;m++){var c=arguments[m];for(var e in c)Object.prototype.hasOwnProperty.call(c,e)&&(p[e]=c[e])}return p},y.apply(this,arguments)}function f(p,m){if(p==null)return{};var c={},e=Object.keys(p),t,a;for(a=0;a<e.length;a++)t=e[a],!(m.indexOf(t)>=0)&&(c[t]=p[t]);return c}function M(p){var m=p.children,c=p.className,e=p.top,t=p.left,a=p.size,w=f(p,v),h=(0,u.A)();return h.type(g.A),(typeof a=="number"||a)&&h.size(a),m?d.createElement(d.Fragment,null,m({path:h})):d.createElement(l.A,{top:e,left:t},d.createElement("path",y({className:o()("visx-glyph-star",c),d:h()||""},w)))}M.propTypes={children:i().func,className:i().string,top:i().number,left:i().number,size:i().oneOfType([i().number,i().func])}},"../charts/src/charts/line-chart/stories/config.tsx"(j,x,n){n.d(x,{Em:()=>S,Nc:()=>B,pn:()=>P});var b=n("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"),i=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),d=n.n(i),s=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=n.n(o),g=n("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),l=n("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/diamond.js"),v=n("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),y=["children","className","top","left","size"];function f(){return f=Object.assign?Object.assign.bind():function(r){for(var D=1;D<arguments.length;D++){var E=arguments[D];for(var C in E)Object.prototype.hasOwnProperty.call(E,C)&&(r[C]=E[C])}return r},f.apply(this,arguments)}function M(r,D){if(r==null)return{};var E={},C=Object.keys(r),L,A;for(A=0;A<C.length;A++)L=C[A],!(D.indexOf(L)>=0)&&(E[L]=r[L]);return E}function p(r){var D=r.children,E=r.className,C=r.top,L=r.left,A=r.size,G=M(r,y),I=(0,g.A)();return I.type(l.A),(typeof A=="number"||A)&&I.size(A),D?s.createElement(s.Fragment,null,D({path:I})):s.createElement(v.A,{top:C,left:L},s.createElement("path",f({className:u()("visx-glyph-diamond",E),d:I()||""},G)))}p.propTypes={children:d().func,className:d().string,top:d().number,left:d().number,size:d().oneOfType([d().number,d().func])};var m=n("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),c=n.n(m),e=n("../charts/src/providers/chart-context/themes.ts"),t=n("../charts/src/stories/chart-decorator.tsx"),a=n("../charts/src/stories/legend-config.tsx"),w=n("../charts/src/stories/sample-data/index.ts"),h=n("../charts/src/stories/theme-config.tsx");const T={withTooltips:{control:{type:"boolean"},description:"Enable or disable interactive tooltips on hover",table:{category:"Tooltips"}},renderTooltip:{control:!1,description:"Custom render function for tooltip content",table:{disable:!0}}},_={...T,crosshairMode:{control:{type:"select"},options:["none","vertical","horizontal","both"],description:"Show crosshair lines on tooltip hover",table:{category:"Tooltips"}},withTooltipCrosshairs:{control:!1,table:{disable:!0}}};try{T.displayName="tooltipArgTypes",T.__docgenInfo={description:`Shared tooltip configuration for chart stories
Provides consistent argTypes across all chart tooltip stories`,displayName:"tooltipArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/tooltip-config.tsx#tooltipArgTypes"]={docgenInfo:T.__docgenInfo,name:"tooltipArgTypes",path:"../charts/src/stories/tooltip-config.tsx#tooltipArgTypes"})}catch{}try{_.displayName="lineChartTooltipArgTypes",_.__docgenInfo={description:"Additional tooltip argTypes for line charts with crosshair support",displayName:"lineChartTooltipArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/tooltip-config.tsx#lineChartTooltipArgTypes"]={docgenInfo:_.__docgenInfo,name:"lineChartTooltipArgTypes",path:"../charts/src/stories/tooltip-config.tsx#lineChartTooltipArgTypes"})}catch{}var O=n("../charts/src/charts/private/default-glyph/default-glyph.tsx"),z=n("../charts/src/charts/line-chart/line-chart.tsx");const S=c()(e.z,{glyphs:[r=>(0,s.createElement)(O.W,{...r,key:r.key}),r=>(0,s.createElement)(b.A,{key:r.key,top:r.y,left:r.x,size:r.size*r.size,fill:r.color}),r=>(0,s.createElement)(p,{key:r.key,top:r.y,left:r.x,size:r.size*r.size,fill:r.color})],annotationStyles:{label:{maxWidth:250}}}),B={title:"JS Packages/Charts Library/Charts/Line Chart",component:z.A,parameters:{layout:"centered"},decorators:[t.OI],argTypes:{...a.r,...h.jW,...t.xo,..._,data:{control:{type:"object"},description:"Array of series data to display in the chart",table:{category:"Data"}}}},P={...h.In,data:w.B2.slice(0,4),withGradientFill:!1,withLegendGlyph:!1,smoothing:!0,maxWidth:1200,resizeDebounceTime:300,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}},withTooltips:!0};try{S.displayName="glyphTheme",S.__docgenInfo={description:"Custom storybook theme with glyphs",displayName:"glyphTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/line-chart/stories/config.tsx#glyphTheme"]={docgenInfo:S.__docgenInfo,name:"glyphTheme",path:"../charts/src/charts/line-chart/stories/config.tsx#glyphTheme"})}catch{}},"../charts/src/stories/legend-config.tsx"(j,x,n){n.d(x,{D:()=>i,r:()=>b});const b={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for individual legend items. This allows consumers to customize legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."},legendShapeStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:"{ width?: number; height?: number; margin?: string | number }"}},description:"Styles for legend shapes (width, height, margin)."},legendItemStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:'{ margin?: string | number; flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" }'}},description:"Styles for each legend item (margin, flexDirection)."}};function i(d){const{legendPosition:s,legendAlignment:o,legendOrientation:u,legendShape:g,legendInteractive:l,legendItemClassName:v,legendMaxWidth:y,legendTextOverflow:f,legendShapeStyles:M,legendItemStyles:p}=d;if(!(s!==void 0||o!==void 0||u!==void 0||g!==void 0||l!==void 0||v!==void 0||y!==void 0||f!==void 0||M!==void 0||p!==void 0))return;const c={};return u!==void 0&&(c.orientation=u),s!==void 0&&(c.position=s),o!==void 0&&(c.alignment=o),g!==void 0&&(c.shape=g),l!==void 0&&(c.interactive=l),v!==void 0&&(c.itemClassName=v),(y!==void 0||f!==void 0)&&(c.labelStyles={},y!==void 0&&(c.labelStyles.maxWidth=y),f!==void 0&&(c.labelStyles.textOverflow=f)),M!==void 0&&(c.shapeStyles=M),p!==void 0&&(c.itemStyles=p),c}try{i.displayName="extractLegendConfig",i.__docgenInfo={description:"Extracts flat legend story args into a `ChartLegendConfig` object.\nUse in story render functions to bridge flat Storybook controls to the nested `legend` prop.",displayName:"extractLegendConfig",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#extractLegendConfig"]={docgenInfo:i.__docgenInfo,name:"extractLegendConfig",path:"../charts/src/stories/legend-config.tsx#extractLegendConfig"})}catch{}try{b.displayName="legendArgTypes",b.__docgenInfo={description:"Shared legend configuration for chart stories.\nProvides consistent argTypes and decorators across all chart legend stories.\n\nThese use flat keys for reliable Storybook controls. Use `extractLegendConfig`\nin render functions to map them to the nested `legend` prop.",displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:b.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(j,x,n){n.d(x,{A:()=>d});function b(s){var o,u,g="";if(typeof s=="string"||typeof s=="number")g+=s;else if(typeof s=="object")if(Array.isArray(s)){var l=s.length;for(o=0;o<l;o++)s[o]&&(u=b(s[o]))&&(g&&(g+=" "),g+=u)}else for(u in s)s[u]&&(g&&(g+=" "),g+=u);return g}function i(){for(var s,o,u=0,g="",l=arguments.length;u<l;u++)(s=arguments[u])&&(o=b(s))&&(g&&(g+=" "),g+=o);return g}const d=i},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(j){var x=function(t){return n(t)&&!b(t)};function n(e){return!!e&&typeof e=="object"}function b(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||s(e)}var i=typeof Symbol=="function"&&Symbol.for,d=i?Symbol.for("react.element"):60103;function s(e){return e.$$typeof===d}function o(e){return Array.isArray(e)?[]:{}}function u(e,t){return t.clone!==!1&&t.isMergeableObject(e)?m(o(e),e,t):e}function g(e,t,a){return e.concat(t).map(function(w){return u(w,a)})}function l(e,t){if(!t.customMerge)return m;var a=t.customMerge(e);return typeof a=="function"?a:m}function v(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function y(e){return Object.keys(e).concat(v(e))}function f(e,t){try{return t in e}catch{return!1}}function M(e,t){return f(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function p(e,t,a){var w={};return a.isMergeableObject(e)&&y(e).forEach(function(h){w[h]=u(e[h],a)}),y(t).forEach(function(h){M(e,h)||(f(e,h)&&a.isMergeableObject(t[h])?w[h]=l(h,a)(e[h],t[h],a):w[h]=u(t[h],a))}),w}function m(e,t,a){a=a||{},a.arrayMerge=a.arrayMerge||g,a.isMergeableObject=a.isMergeableObject||x,a.cloneUnlessOtherwiseSpecified=u;var w=Array.isArray(t),h=Array.isArray(e),T=w===h;return T?w?a.arrayMerge(e,t,a):p(e,t,a):u(t,a)}m.all=function(t,a){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(w,h){return m(w,h,a)},{})};var c=m;j.exports=c}}]);
