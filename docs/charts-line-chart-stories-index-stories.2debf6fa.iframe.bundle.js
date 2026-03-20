"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2371],{"../charts/src/charts/line-chart/stories/index.stories.tsx"(z,x,t){t.r(x),t.d(x,{Animation:()=>m,AspectRatio:()=>f,BrokenLine:()=>E,Comparison:()=>r,CurveTypes:()=>G,DateStringFormats:()=>O,Default:()=>w,ErrorStates:()=>p,FixedDimensions:()=>y,GradientCustomColors:()=>o,GradientFilled:()=>n,GradientTransparent:()=>v,ManySeries:()=>h,SingleSeries:()=>M,SmartFormatting:()=>A,WithCompositionLegend:()=>e,WithLegend:()=>c,WithPointerEvents:()=>L,WithoutSmoothing:()=>T,__namedExportsOrder:()=>_,default:()=>g});var b=t("../charts/src/stories/legend-config.tsx"),i=t("../charts/src/stories/sample-data/index.ts"),d=t("../charts/src/charts/line-chart/line-chart.tsx"),s=t("../charts/src/charts/line-chart/stories/config.tsx"),a=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g={...s.Nc,title:"JS Packages/Charts Library/Charts/Line Chart",argTypes:{...s.Nc.argTypes,seriesCount:{control:{type:"radio"},options:["single","multiple","many"],description:"Number of data series",table:{category:"Data"}},dimensionMode:{control:{type:"radio"},options:["responsive","fixed"],description:"Chart sizing mode",table:{category:"Dimensions"}},smoothing:{control:"boolean",description:"Enable line smoothing",table:{category:"Visual Style"}},curveType:{control:{type:"radio"},options:["linear","smooth","monotone"],description:"Line curve type",table:{category:"Visual Style"}},withGradientFill:{control:"boolean",description:"Fill area under line with gradient",table:{category:"Visual Style"}}}},l=C=>{const{seriesCount:D,dimensionMode:P,crosshairMode:S,withTooltipCrosshairs:V,...j}=C,F=(0,b.D)(C);let R=j.data||s.pn.data;D==="single"?R=[i.B2[0]]:D==="multiple"?R=i.B2.slice(0,4):D==="many"&&(R=i.B2);let W={};P==="fixed"&&(W={width:800,height:400});let B;return S==="vertical"?B={showVertical:!0}:S==="horizontal"?B={showHorizontal:!0}:S==="both"&&(B={showVertical:!0,showHorizontal:!0}),(0,a.jsx)(d.A,{...j,...W,data:R,legend:F,withTooltipCrosshairs:B})},w=l.bind({});w.args={...s.pn};const y=l.bind({});y.args={...s.pn,width:600,height:300};const f=l.bind({});f.args={...s.pn,aspectRatio:.3};const M=l.bind({});M.args={...s.pn,data:[i.B2[0]]};const h=l.bind({});h.args={...s.pn,data:i.B2,showLegend:!0};const m=l.bind({});m.args={...s.pn,animation:!0};const c=l.bind({});c.args={...s.pn,showLegend:!0},c.parameters={docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}};const e={render:C=>{const D=(0,b.D)(C);return(0,a.jsx)(d.A,{...w.args,...C,legend:{interactive:D?.interactive},chartId:"composition-line-chart",children:(0,a.jsx)(d.A.Legend,{...D})})},args:{...w.args},parameters:{docs:{description:{story:"Composition API using `<LineChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},n=l.bind({});n.args={...s.pn,margin:void 0,data:i.Sb,withGradientFill:!0,options:{axis:{y:{orientation:"right"}}}};const o=l.bind({});o.args={width:600,height:300,data:[{label:"Revenue",data:[{date:new Date("2024-01-01"),value:45e3},{date:new Date("2024-02-01"),value:52e3},{date:new Date("2024-03-01"),value:48e3},{date:new Date("2024-04-01"),value:61e3},{date:new Date("2024-05-01"),value:68e3},{date:new Date("2024-06-01"),value:72e3}],options:{gradient:{fromOpacity:.8,toOpacity:0}}},{label:"Expenses",data:[{date:new Date("2024-01-01"),value:28e3},{date:new Date("2024-02-01"),value:31e3},{date:new Date("2024-03-01"),value:29e3},{date:new Date("2024-04-01"),value:33e3},{date:new Date("2024-05-01"),value:35e3},{date:new Date("2024-06-01"),value:38e3}],options:{gradient:{from:"var(--jp-red)",to:"var(--jp-red)",fromOpacity:.6,toOpacity:0}}}],withGradientFill:!0};const v=l.bind({});v.args={width:600,height:300,data:[{label:"Temperature (\xB0C)",data:[{date:new Date("2024-01-01"),value:15},{date:new Date("2024-02-01"),value:18},{date:new Date("2024-03-01"),value:22},{date:new Date("2024-04-01"),value:26},{date:new Date("2024-05-01"),value:30},{date:new Date("2024-06-01"),value:28}],options:{gradient:{stops:[{offset:"0%",opacity:.7},{offset:"20%",opacity:0},{offset:"100%",opacity:0}]}}}],withGradientFill:!0};const p={render:()=>(0,a.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Empty Data"}),(0,a.jsx)(d.A,{width:300,height:200,data:[],withGradientFill:!1,withLegendGlyph:!1})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Invalid Date Values"}),(0,a.jsx)(d.A,{width:300,height:200,data:[{label:"Invalid Dates",data:[{date:new Date("invalid"),value:10},{date:new Date("2024-01-02"),value:20}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Invalid Values"}),(0,a.jsx)(d.A,{width:300,height:200,data:[{label:"Invalid Values",data:[{date:new Date("2024-01-01"),value:NaN},{date:new Date("2024-01-02"),value:null}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Single Data Point"}),(0,a.jsx)(d.A,{width:300,height:200,data:[{label:"Single Point",data:[{date:new Date("2024-01-01"),value:100}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]})]}),parameters:{docs:{description:{story:"Examples of how the line chart handles various error states and edge cases."}}}},T=l.bind({});T.args={...s.pn,smoothing:!1};const L=l.bind({});L.args={...s.pn,onPointerDown:({datum:C})=>alert("Pointer down:"+JSON.stringify(C))};const G={render:()=>{const C=[{label:"Sample Series",data:[{date:new Date("2024-01-01"),value:10},{date:new Date("2024-01-02"),value:90},{date:new Date("2024-01-03"),value:85},{date:new Date("2024-01-04"),value:82},{date:new Date("2024-01-05"),value:5},{date:new Date("2024-01-06"),value:8},{date:new Date("2024-01-07"),value:10}],options:{}}];return(0,a.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Linear Curve"}),(0,a.jsx)(d.A,{width:300,height:200,data:C,curveType:"linear",withGradientFill:!1,withLegendGlyph:!1})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Smooth Curve (Catmull-Rom)"}),(0,a.jsx)(d.A,{width:300,height:200,data:C,curveType:"smooth",withGradientFill:!1,withLegendGlyph:!1})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Monotone X Curve"}),(0,a.jsx)(d.A,{width:300,height:200,data:C,curveType:"monotone",withGradientFill:!1,withLegendGlyph:!1})]})]})},parameters:{docs:{description:{story:"Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points."}}}},A=l.bind({});A.args={...s.pn,data:i.Gv,withGradientFill:!1,smoothing:!0,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}}},A.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const I=100,E=l.bind({});E.args={...s.pn,data:[{...i.Sb[0],label:"Visitors with dashed line",data:i.Sb[0].data.map(C=>({...C,value:C.value+I})),options:{...i.Sb[0].options,seriesLineStyle:{strokeDasharray:"5 5",strokeWidth:3}}},i.Sb[0]],showLegend:!0},E.parameters={docs:{description:{story:"Demonstrates the option of setting a seriesLineStyle to a dash array."}}};const O=l.bind({});O.args={...s.pn,withGradientFill:!1,withLegendGlyph:!1,data:[{label:"String Dates",data:[{dateString:"2024-01-01",value:10},{dateString:"2024-01-02",value:20},{dateString:"2024-01-03 00:00:00",value:15},{dateString:"2024-01-04",value:25},{dateString:"2024-01-05 00:00",value:30}],options:{}}]},O.parameters={docs:{description:{story:`Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:
- Simple date strings (YYYY-MM-DD)
- Date with time (YYYY-MM-DD 00:00:00)
- Date with time (YYYY-MM-DD 00:00)
- ISO format (YYYY-MM-DDT00:00:00)
- UTC format (YYYY-MM-DDT00:00:00Z)
- Timezone offset (YYYY-MM-DDT00:00:00\xB1HH:mm)
`}}};const r=l.bind({});r.args={...s.pn,showLegend:!0,smoothing:!1,data:[{...i.B2[0],label:"New York"},{...i.B2[1],label:"New York last year",group:"new-york",options:{type:"comparison"}},{...i.B2[2],label:"Tokyo"},{...i.B2[3],label:"Tokyo last year",group:"tokyo",options:{type:"comparison"}}]};const _=["Default","FixedDimensions","AspectRatio","SingleSeries","ManySeries","Animation","WithLegend","WithCompositionLegend","GradientFilled","GradientCustomColors","GradientTransparent","ErrorStates","WithoutSmoothing","WithPointerEvents","CurveTypes","SmartFormatting","BrokenLine","DateStringFormats","Comparison"];w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
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
}`,...w.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
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
}`,...M.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
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
}`,...h.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
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
}`,...c.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig(args);
    return <LineChart {...Default.args} {...args} legend={{
      interactive: legend?.interactive
    }} chartId="composition-line-chart">
                <LineChart.Legend {...legend} />
            </LineChart>;
  },
  args: {
    ...Default.args
  },
  parameters: {
    docs: {
      description: {
        story: 'Composition API using \`<LineChart.Legend />\` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning.'
      }
    }
  }
}`,...e.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
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
}`,...n.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
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
}`,...o.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
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
}`,...v.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
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
}`,...T.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => {
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
}`,...L.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => {
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
}`,...A.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => {
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
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
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
}`,...O.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
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
}`,...r.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"(z,x,t){t.d(x,{A:()=>g});var b=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),i=t.n(b),d=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),a=t.n(s),u=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js");function g(l){var w=l.top,y=w===void 0?0:w,f=l.left,M=f===void 0?0:f,h=l.className,m=l.children;return d.createElement(u.A,{className:a()("visx-glyph",h),top:y,left:M},m)}g.propTypes={top:i().number,left:i().number,className:i().string,children:i().node}},"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"(z,x,t){t.d(x,{A:()=>M});var b=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),i=t.n(b),d=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),a=t.n(s),u=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),g=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/star.js"),l=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),w=["children","className","top","left","size"];function y(){return y=Object.assign?Object.assign.bind():function(h){for(var m=1;m<arguments.length;m++){var c=arguments[m];for(var e in c)Object.prototype.hasOwnProperty.call(c,e)&&(h[e]=c[e])}return h},y.apply(this,arguments)}function f(h,m){if(h==null)return{};var c={},e=Object.keys(h),n,o;for(o=0;o<e.length;o++)n=e[o],!(m.indexOf(n)>=0)&&(c[n]=h[n]);return c}function M(h){var m=h.children,c=h.className,e=h.top,n=h.left,o=h.size,v=f(h,w),p=(0,u.A)();return p.type(g.A),(typeof o=="number"||o)&&p.size(o),m?d.createElement(d.Fragment,null,m({path:p})):d.createElement(l.A,{top:e,left:n},d.createElement("path",y({className:a()("visx-glyph-star",c),d:p()||""},v)))}M.propTypes={children:i().func,className:i().string,top:i().number,left:i().number,size:i().oneOfType([i().number,i().func])}},"../charts/src/charts/line-chart/stories/config.tsx"(z,x,t){t.d(x,{Em:()=>I,Nc:()=>E,pn:()=>O});var b=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"),i=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),d=t.n(i),s=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=t.n(a),g=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),l=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/diamond.js"),w=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),y=["children","className","top","left","size"];function f(){return f=Object.assign?Object.assign.bind():function(r){for(var _=1;_<arguments.length;_++){var C=arguments[_];for(var D in C)Object.prototype.hasOwnProperty.call(C,D)&&(r[D]=C[D])}return r},f.apply(this,arguments)}function M(r,_){if(r==null)return{};var C={},D=Object.keys(r),P,S;for(S=0;S<D.length;S++)P=D[S],!(_.indexOf(P)>=0)&&(C[P]=r[P]);return C}function h(r){var _=r.children,C=r.className,D=r.top,P=r.left,S=r.size,V=M(r,y),j=(0,g.A)();return j.type(l.A),(typeof S=="number"||S)&&j.size(S),_?s.createElement(s.Fragment,null,_({path:j})):s.createElement(w.A,{top:D,left:P},s.createElement("path",f({className:u()("visx-glyph-diamond",C),d:j()||""},V)))}h.propTypes={children:d().func,className:d().string,top:d().number,left:d().number,size:d().oneOfType([d().number,d().func])};var m=t("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),c=t.n(m),e=t("../charts/src/providers/chart-context/themes.ts"),n=t("../charts/src/stories/chart-decorator.tsx"),o=t("../charts/src/stories/legend-config.tsx"),v=t("../charts/src/stories/sample-data/index.ts"),p=t("../charts/src/stories/theme-config.tsx");const T={withTooltips:{control:{type:"boolean"},description:"Enable or disable interactive tooltips on hover",table:{category:"Tooltips"}},renderTooltip:{control:!1,description:"Custom render function for tooltip content",table:{disable:!0}}},L={...T,crosshairMode:{control:{type:"select"},options:["none","vertical","horizontal","both"],description:"Show crosshair lines on tooltip hover",table:{category:"Tooltips"}},withTooltipCrosshairs:{control:!1,table:{disable:!0}}};try{T.displayName="tooltipArgTypes",T.__docgenInfo={description:`Shared tooltip configuration for chart stories
Provides consistent argTypes across all chart tooltip stories`,displayName:"tooltipArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/tooltip-config.tsx#tooltipArgTypes"]={docgenInfo:T.__docgenInfo,name:"tooltipArgTypes",path:"../charts/src/stories/tooltip-config.tsx#tooltipArgTypes"})}catch{}try{L.displayName="lineChartTooltipArgTypes",L.__docgenInfo={description:"Additional tooltip argTypes for line charts with crosshair support",displayName:"lineChartTooltipArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/tooltip-config.tsx#lineChartTooltipArgTypes"]={docgenInfo:L.__docgenInfo,name:"lineChartTooltipArgTypes",path:"../charts/src/stories/tooltip-config.tsx#lineChartTooltipArgTypes"})}catch{}var G=t("../charts/src/charts/private/default-glyph/default-glyph.tsx"),A=t("../charts/src/charts/line-chart/line-chart.tsx");const I=c()(e.z,{glyphs:[r=>(0,s.createElement)(G.W,{...r,key:r.key}),r=>(0,s.createElement)(b.A,{key:r.key,top:r.y,left:r.x,size:r.size*r.size,fill:r.color}),r=>(0,s.createElement)(h,{key:r.key,top:r.y,left:r.x,size:r.size*r.size,fill:r.color})],annotationStyles:{label:{maxWidth:250}}}),E={title:"JS Packages/Charts Library/Charts/Line Chart",component:A.A,parameters:{layout:"centered"},decorators:[n.OI],argTypes:{...o.r,...p.jW,...n.xo,...L,data:{control:{type:"object"},description:"Array of series data to display in the chart",table:{category:"Data"}}}},O={...p.In,data:v.B2.slice(0,4),withGradientFill:!1,withLegendGlyph:!1,smoothing:!0,maxWidth:1200,resizeDebounceTime:300,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}},withTooltips:!0};try{I.displayName="glyphTheme",I.__docgenInfo={description:"Custom storybook theme with glyphs",displayName:"glyphTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/line-chart/stories/config.tsx#glyphTheme"]={docgenInfo:I.__docgenInfo,name:"glyphTheme",path:"../charts/src/charts/line-chart/stories/config.tsx#glyphTheme"})}catch{}},"../charts/src/stories/legend-config.tsx"(z,x,t){t.d(x,{D:()=>i,r:()=>b});const b={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","line","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for individual legend items. This allows consumers to customize legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."},legendShapeStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:"{ width?: number; height?: number; margin?: string | number }"}},description:"Styles for legend shapes (width, height, margin)."},legendItemStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:'{ margin?: string | number; flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" }'}},description:"Styles for each legend item (margin, flexDirection)."}};function i(d){const{legendPosition:s,legendAlignment:a,legendOrientation:u,legendShape:g,legendInteractive:l,legendItemClassName:w,legendMaxWidth:y,legendTextOverflow:f,legendShapeStyles:M,legendItemStyles:h}=d;if(!(s!==void 0||a!==void 0||u!==void 0||g!==void 0||l!==void 0||w!==void 0||y!==void 0||f!==void 0||M!==void 0||h!==void 0))return;const c={};return u!==void 0&&(c.orientation=u),s!==void 0&&(c.position=s),a!==void 0&&(c.alignment=a),g!==void 0&&(c.shape=g),l!==void 0&&(c.interactive=l),w!==void 0&&(c.itemClassName=w),(y!==void 0||f!==void 0)&&(c.labelStyles={},y!==void 0&&(c.labelStyles.maxWidth=y),f!==void 0&&(c.labelStyles.textOverflow=f)),M!==void 0&&(c.shapeStyles=M),h!==void 0&&(c.itemStyles=h),c}try{i.displayName="extractLegendConfig",i.__docgenInfo={description:"Extracts flat legend story args into a `ChartLegendConfig` object.\nUse in story render functions to bridge flat Storybook controls to the nested `legend` prop.",displayName:"extractLegendConfig",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#extractLegendConfig"]={docgenInfo:i.__docgenInfo,name:"extractLegendConfig",path:"../charts/src/stories/legend-config.tsx#extractLegendConfig"})}catch{}try{b.displayName="legendArgTypes",b.__docgenInfo={description:"Shared legend configuration for chart stories.\nProvides consistent argTypes and decorators across all chart legend stories.\n\nThese use flat keys for reliable Storybook controls. Use `extractLegendConfig`\nin render functions to map them to the nested `legend` prop.",displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:b.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(z,x,t){t.d(x,{A:()=>d});function b(s){var a,u,g="";if(typeof s=="string"||typeof s=="number")g+=s;else if(typeof s=="object")if(Array.isArray(s)){var l=s.length;for(a=0;a<l;a++)s[a]&&(u=b(s[a]))&&(g&&(g+=" "),g+=u)}else for(u in s)s[u]&&(g&&(g+=" "),g+=u);return g}function i(){for(var s,a,u=0,g="",l=arguments.length;u<l;u++)(s=arguments[u])&&(a=b(s))&&(g&&(g+=" "),g+=a);return g}const d=i},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(z){var x=function(n){return t(n)&&!b(n)};function t(e){return!!e&&typeof e=="object"}function b(e){var n=Object.prototype.toString.call(e);return n==="[object RegExp]"||n==="[object Date]"||s(e)}var i=typeof Symbol=="function"&&Symbol.for,d=i?Symbol.for("react.element"):60103;function s(e){return e.$$typeof===d}function a(e){return Array.isArray(e)?[]:{}}function u(e,n){return n.clone!==!1&&n.isMergeableObject(e)?m(a(e),e,n):e}function g(e,n,o){return e.concat(n).map(function(v){return u(v,o)})}function l(e,n){if(!n.customMerge)return m;var o=n.customMerge(e);return typeof o=="function"?o:m}function w(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(n){return Object.propertyIsEnumerable.call(e,n)}):[]}function y(e){return Object.keys(e).concat(w(e))}function f(e,n){try{return n in e}catch{return!1}}function M(e,n){return f(e,n)&&!(Object.hasOwnProperty.call(e,n)&&Object.propertyIsEnumerable.call(e,n))}function h(e,n,o){var v={};return o.isMergeableObject(e)&&y(e).forEach(function(p){v[p]=u(e[p],o)}),y(n).forEach(function(p){M(e,p)||(f(e,p)&&o.isMergeableObject(n[p])?v[p]=l(p,o)(e[p],n[p],o):v[p]=u(n[p],o))}),v}function m(e,n,o){o=o||{},o.arrayMerge=o.arrayMerge||g,o.isMergeableObject=o.isMergeableObject||x,o.cloneUnlessOtherwiseSpecified=u;var v=Array.isArray(n),p=Array.isArray(e),T=v===p;return T?v?o.arrayMerge(e,n,o):h(e,n,o):u(n,o)}m.all=function(n,o){if(!Array.isArray(n))throw new Error("first argument should be an array");return n.reduce(function(v,p){return m(v,p,o)},{})};var c=m;z.exports=c}}]);
