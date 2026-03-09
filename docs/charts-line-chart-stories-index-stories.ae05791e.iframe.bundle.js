"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2371],{"../charts/src/charts/line-chart/stories/index.stories.tsx"(z,D,s){s.r(D),s.d(D,{Animation:()=>c,AspectRatio:()=>v,BrokenLine:()=>E,Comparison:()=>r,CurveTypes:()=>G,CustomLegendPositioning:()=>C,DateStringFormats:()=>_,Default:()=>g,ErrorStates:()=>d,FixedDimensions:()=>M,GradientCustomColors:()=>a,GradientFilled:()=>t,GradientTransparent:()=>f,ManySeries:()=>b,SingleSeries:()=>y,SmartFormatting:()=>P,WithCompositionLegend:()=>e,WithInteractiveLegend:()=>p,WithPointerEvents:()=>A,WithoutSmoothing:()=>T,__namedExportsOrder:()=>L,default:()=>u});var l=s("../charts/src/stories/sample-data/index.ts"),h=s("../charts/src/charts/line-chart/line-chart.tsx"),i=s("../charts/src/charts/line-chart/stories/config.tsx"),n=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u={...i.Nc,title:"JS Packages/Charts Library/Charts/Line Chart",argTypes:{...i.Nc.argTypes,seriesCount:{control:{type:"radio"},options:["single","multiple","many"],description:"Number of data series",table:{category:"Data"}},dimensionMode:{control:{type:"radio"},options:["responsive","fixed"],description:"Chart sizing mode",table:{category:"Dimensions"}},smoothing:{control:"boolean",description:"Enable line smoothing",table:{category:"Visual Style"}},curveType:{control:{type:"radio"},options:["linear","smooth","monotone"],description:"Line curve type",table:{category:"Visual Style"}},withGradientFill:{control:"boolean",description:"Fill area under line with gradient",table:{category:"Visual Style"}}}},o=m=>{const{seriesCount:S,dimensionMode:O,crosshairMode:x,withTooltipCrosshairs:W,...j}=m;let V=j.data||i.pn.data;S==="single"?V=[l.B2[0]]:S==="multiple"?V=l.B2.slice(0,4):S==="many"&&(V=l.B2);let B={};O==="fixed"&&(B={width:800,height:400});let R;return x==="vertical"?R={showVertical:!0}:x==="horizontal"?R={showHorizontal:!0}:x==="both"&&(R={showVertical:!0,showHorizontal:!0}),(0,n.jsx)(h.A,{...j,...B,data:V,withTooltipCrosshairs:R})},g=o.bind({});g.args={...i.pn};const M=o.bind({});M.args={...i.pn,width:600,height:300};const v=o.bind({});v.args={...i.pn,aspectRatio:.3};const y=o.bind({});y.args={...i.pn,data:[l.B2[0]]};const b=o.bind({});b.args={...i.pn,data:l.B2,showLegend:!0};const c=o.bind({});c.args={...i.pn,animation:!0};const p=o.bind({});p.args={...i.pn,chartId:"interactive-legend-demo",showLegend:!0,legendInteractive:!0},p.parameters={docs:{description:{story:"Line chart with interactive legend. Click or tap legend items to toggle series visibility. Use Tab to focus legend items, then Enter or Space to toggle. Series colors remain stable when toggling visibility."}}};const C=o.bind({});C.args={...i.pn,showLegend:!0,legendAlignment:"start",legendPosition:"top",legendOrientation:"horizontal",withLegendGlyph:!0},C.parameters={docs:{description:{story:"Line chart with top-left positioned horizontal legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with temperature data for London, Canberra, and Mars."}}};const e={render:m=>(0,n.jsx)(h.A,{...g.args,...m,children:(0,n.jsx)(h.A.Legend,{orientation:m.legendOrientation||"horizontal",alignment:m.legendAlignment||"center",position:m.legendPosition||"bottom",labelStyles:{maxWidth:m.legendMaxWidth,textOverflow:m.legendTextOverflow||"wrap"}})}),argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{docs:{description:{story:"Legend used with LineChart using the composition API, positioned below the chart."}}}},t=o.bind({});t.args={...i.pn,margin:void 0,data:l.Sb,withGradientFill:!0,options:{axis:{y:{orientation:"right"}}}};const a=o.bind({});a.args={width:600,height:300,data:[{label:"Revenue",data:[{date:new Date("2024-01-01"),value:45e3},{date:new Date("2024-02-01"),value:52e3},{date:new Date("2024-03-01"),value:48e3},{date:new Date("2024-04-01"),value:61e3},{date:new Date("2024-05-01"),value:68e3},{date:new Date("2024-06-01"),value:72e3}],options:{gradient:{fromOpacity:.8,toOpacity:0}}},{label:"Expenses",data:[{date:new Date("2024-01-01"),value:28e3},{date:new Date("2024-02-01"),value:31e3},{date:new Date("2024-03-01"),value:29e3},{date:new Date("2024-04-01"),value:33e3},{date:new Date("2024-05-01"),value:35e3},{date:new Date("2024-06-01"),value:38e3}],options:{gradient:{from:"var(--jp-red)",to:"var(--jp-red)",fromOpacity:.6,toOpacity:0}}}],withGradientFill:!0};const f=o.bind({});f.args={width:600,height:300,data:[{label:"Temperature (\xB0C)",data:[{date:new Date("2024-01-01"),value:15},{date:new Date("2024-02-01"),value:18},{date:new Date("2024-03-01"),value:22},{date:new Date("2024-04-01"),value:26},{date:new Date("2024-05-01"),value:30},{date:new Date("2024-06-01"),value:28}],options:{gradient:{stops:[{offset:"0%",opacity:.7},{offset:"20%",opacity:0},{offset:"100%",opacity:0}]}}}],withGradientFill:!0};const d={render:()=>(0,n.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Empty Data"}),(0,n.jsx)(h.A,{width:300,height:200,data:[],withGradientFill:!1,withLegendGlyph:!1})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Invalid Date Values"}),(0,n.jsx)(h.A,{width:300,height:200,data:[{label:"Invalid Dates",data:[{date:new Date("invalid"),value:10},{date:new Date("2024-01-02"),value:20}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Invalid Values"}),(0,n.jsx)(h.A,{width:300,height:200,data:[{label:"Invalid Values",data:[{date:new Date("2024-01-01"),value:NaN},{date:new Date("2024-01-02"),value:null}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Single Data Point"}),(0,n.jsx)(h.A,{width:300,height:200,data:[{label:"Single Point",data:[{date:new Date("2024-01-01"),value:100}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]})]}),parameters:{docs:{description:{story:"Examples of how the line chart handles various error states and edge cases."}}}},T=o.bind({});T.args={...i.pn,smoothing:!1};const A=o.bind({});A.args={...i.pn,onPointerDown:({datum:m})=>alert("Pointer down:"+JSON.stringify(m))};const G={render:()=>{const m=[{label:"Sample Series",data:[{date:new Date("2024-01-01"),value:10},{date:new Date("2024-01-02"),value:90},{date:new Date("2024-01-03"),value:85},{date:new Date("2024-01-04"),value:82},{date:new Date("2024-01-05"),value:5},{date:new Date("2024-01-06"),value:8},{date:new Date("2024-01-07"),value:10}],options:{}}];return(0,n.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Linear Curve"}),(0,n.jsx)(h.A,{width:300,height:200,data:m,curveType:"linear",withGradientFill:!1,withLegendGlyph:!1})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Smooth Curve (Catmull-Rom)"}),(0,n.jsx)(h.A,{width:300,height:200,data:m,curveType:"smooth",withGradientFill:!1,withLegendGlyph:!1})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Monotone X Curve"}),(0,n.jsx)(h.A,{width:300,height:200,data:m,curveType:"monotone",withGradientFill:!1,withLegendGlyph:!1})]})]})},parameters:{docs:{description:{story:"Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points."}}}},P=o.bind({});P.args={...i.pn,data:l.Gv,withGradientFill:!1,smoothing:!0,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}}},P.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const I=100,E=o.bind({});E.args={...i.pn,data:[{...l.Sb[0],label:"Visitors with dashed line",data:l.Sb[0].data.map(m=>({...m,value:m.value+I})),options:{...l.Sb[0].options,seriesLineStyle:{strokeDasharray:"5 5",strokeWidth:3}}},l.Sb[0]],showLegend:!0},E.parameters={docs:{description:{story:"Demonstrates the option of setting a seriesLineStyle to a dash array."}}};const _=o.bind({});_.args={...i.pn,withGradientFill:!1,withLegendGlyph:!1,data:[{label:"String Dates",data:[{dateString:"2024-01-01",value:10},{dateString:"2024-01-02",value:20},{dateString:"2024-01-03 00:00:00",value:15},{dateString:"2024-01-04",value:25},{dateString:"2024-01-05 00:00",value:30}],options:{}}]},_.parameters={docs:{description:{story:`Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:
- Simple date strings (YYYY-MM-DD)
- Date with time (YYYY-MM-DD 00:00:00)
- Date with time (YYYY-MM-DD 00:00)
- ISO format (YYYY-MM-DDT00:00:00)
- UTC format (YYYY-MM-DDT00:00:00Z)
- Timezone offset (YYYY-MM-DDT00:00:00\xB1HH:mm)
`}}};const r=o.bind({});r.args={...i.pn,showLegend:!0,smoothing:!1,data:[{...l.B2[0],label:"New York"},{...l.B2[1],label:"New York last year",group:"new-york",options:{type:"comparison"}},{...l.B2[2],label:"Tokyo"},{...l.B2[3],label:"Tokyo last year",group:"tokyo",options:{type:"comparison"}}]};const L=["Default","FixedDimensions","AspectRatio","SingleSeries","ManySeries","Animation","WithInteractiveLegend","CustomLegendPositioning","WithCompositionLegend","GradientFilled","GradientCustomColors","GradientTransparent","ErrorStates","WithoutSmoothing","WithPointerEvents","CurveTypes","SmartFormatting","BrokenLine","DateStringFormats","Comparison"];g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

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
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...g.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

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
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...M.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

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
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

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
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

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
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...b.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

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
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...c.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

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
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...p.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

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
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...C.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <LineChart {...Default.args} {...args}>
            <LineChart.Legend orientation={args.legendOrientation || 'horizontal'} alignment={args.legendAlignment || 'center'} position={args.legendPosition || 'bottom'} labelStyles={{
      maxWidth: args.legendMaxWidth,
      textOverflow: args.legendTextOverflow || 'wrap'
    }} />
        </LineChart>,
  argTypes: {
    legendInteractive: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Legend used with LineChart using the composition API, positioned below the chart.'
      }
    }
  }
}`,...e.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

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
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...t.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

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
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...a.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

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
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...f.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

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
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...T.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

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
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...A.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

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
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...P.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

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
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...E.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

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
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,..._.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;

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
  return <LineChart {...chartProps} {...dimensions} data={data} withTooltipCrosshairs={crosshairConfig} />;
}`,...r.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"(z,D,s){s.d(D,{A:()=>o});var l=s("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),h=s.n(l),i=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=s("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),w=s.n(n),u=s("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js");function o(g){var M=g.top,v=M===void 0?0:M,y=g.left,b=y===void 0?0:y,c=g.className,p=g.children;return i.createElement(u.A,{className:w()("visx-glyph",c),top:v,left:b},p)}o.propTypes={top:h().number,left:h().number,className:h().string,children:h().node}},"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"(z,D,s){s.d(D,{A:()=>b});var l=s("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),h=s.n(l),i=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=s("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),w=s.n(n),u=s("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),o=s("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/star.js"),g=s("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),M=["children","className","top","left","size"];function v(){return v=Object.assign?Object.assign.bind():function(c){for(var p=1;p<arguments.length;p++){var C=arguments[p];for(var e in C)Object.prototype.hasOwnProperty.call(C,e)&&(c[e]=C[e])}return c},v.apply(this,arguments)}function y(c,p){if(c==null)return{};var C={},e=Object.keys(c),t,a;for(a=0;a<e.length;a++)t=e[a],!(p.indexOf(t)>=0)&&(C[t]=c[t]);return C}function b(c){var p=c.children,C=c.className,e=c.top,t=c.left,a=c.size,f=y(c,M),d=(0,u.A)();return d.type(o.A),(typeof a=="number"||a)&&d.size(a),p?i.createElement(i.Fragment,null,p({path:d})):i.createElement(g.A,{top:e,left:t},i.createElement("path",v({className:w()("visx-glyph-star",C),d:d()||""},f)))}b.propTypes={children:h().func,className:h().string,top:h().number,left:h().number,size:h().oneOfType([h().number,h().func])}},"../charts/src/charts/line-chart/stories/config.tsx"(z,D,s){s.d(D,{Em:()=>I,Nc:()=>E,pn:()=>_});var l=s("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"),h=s("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),i=s.n(h),n=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),w=s("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=s.n(w),o=s("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),g=s("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/diamond.js"),M=s("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),v=["children","className","top","left","size"];function y(){return y=Object.assign?Object.assign.bind():function(r){for(var L=1;L<arguments.length;L++){var m=arguments[L];for(var S in m)Object.prototype.hasOwnProperty.call(m,S)&&(r[S]=m[S])}return r},y.apply(this,arguments)}function b(r,L){if(r==null)return{};var m={},S=Object.keys(r),O,x;for(x=0;x<S.length;x++)O=S[x],!(L.indexOf(O)>=0)&&(m[O]=r[O]);return m}function c(r){var L=r.children,m=r.className,S=r.top,O=r.left,x=r.size,W=b(r,v),j=(0,o.A)();return j.type(g.A),(typeof x=="number"||x)&&j.size(x),L?n.createElement(n.Fragment,null,L({path:j})):n.createElement(M.A,{top:S,left:O},n.createElement("path",y({className:u()("visx-glyph-diamond",m),d:j()||""},W)))}c.propTypes={children:i().func,className:i().string,top:i().number,left:i().number,size:i().oneOfType([i().number,i().func])};var p=s("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),C=s.n(p),e=s("../charts/src/providers/chart-context/themes.ts"),t=s("../charts/src/stories/chart-decorator.tsx"),a=s("../charts/src/stories/legend-config.tsx"),f=s("../charts/src/stories/sample-data/index.ts"),d=s("../charts/src/stories/theme-config.tsx");const T={withTooltips:{control:{type:"boolean"},description:"Enable or disable interactive tooltips on hover",table:{category:"Tooltips"}},renderTooltip:{control:!1,description:"Custom render function for tooltip content",table:{disable:!0}}},A={...T,crosshairMode:{control:{type:"select"},options:["none","vertical","horizontal","both"],description:"Show crosshair lines on tooltip hover",table:{category:"Tooltips"}},withTooltipCrosshairs:{control:!1,table:{disable:!0}}};try{T.displayName="tooltipArgTypes",T.__docgenInfo={description:`Shared tooltip configuration for chart stories
Provides consistent argTypes across all chart tooltip stories`,displayName:"tooltipArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/tooltip-config.tsx#tooltipArgTypes"]={docgenInfo:T.__docgenInfo,name:"tooltipArgTypes",path:"../charts/src/stories/tooltip-config.tsx#tooltipArgTypes"})}catch{}try{A.displayName="lineChartTooltipArgTypes",A.__docgenInfo={description:"Additional tooltip argTypes for line charts with crosshair support",displayName:"lineChartTooltipArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/tooltip-config.tsx#lineChartTooltipArgTypes"]={docgenInfo:A.__docgenInfo,name:"lineChartTooltipArgTypes",path:"../charts/src/stories/tooltip-config.tsx#lineChartTooltipArgTypes"})}catch{}var G=s("../charts/src/charts/private/default-glyph/default-glyph.tsx"),P=s("../charts/src/charts/line-chart/line-chart.tsx");const I=C()(e.z,{glyphs:[r=>(0,n.createElement)(G.W,{...r,key:r.key}),r=>(0,n.createElement)(l.A,{key:r.key,top:r.y,left:r.x,size:r.size*r.size,fill:r.color}),r=>(0,n.createElement)(c,{key:r.key,top:r.y,left:r.x,size:r.size*r.size,fill:r.color})],annotationStyles:{label:{maxWidth:250}}}),E={title:"JS Packages/Charts Library/Charts/Line Chart",component:P.A,parameters:{layout:"centered"},decorators:[t.OI],argTypes:{...a.r,...d.jW,...t.xo,...A,data:{control:{type:"object"},description:"Array of series data to display in the chart",table:{category:"Data"}}}},_={...d.In,data:f.B2.slice(0,4),withGradientFill:!1,withLegendGlyph:!1,smoothing:!0,maxWidth:1200,resizeDebounceTime:300,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}},withTooltips:!0};try{I.displayName="glyphTheme",I.__docgenInfo={description:"Custom storybook theme with glyphs",displayName:"glyphTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/line-chart/stories/config.tsx#glyphTheme"]={docgenInfo:I.__docgenInfo,name:"glyphTheme",path:"../charts/src/charts/line-chart/stories/config.tsx#glyphTheme"})}catch{}},"../charts/src/stories/legend-config.tsx"(z,D,s){s.d(D,{r:()=>l});const l={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."}};try{l.displayName="legendArgTypes",l.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:l.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(z,D,s){s.d(D,{A:()=>i});function l(n){var w,u,o="";if(typeof n=="string"||typeof n=="number")o+=n;else if(typeof n=="object")if(Array.isArray(n)){var g=n.length;for(w=0;w<g;w++)n[w]&&(u=l(n[w]))&&(o&&(o+=" "),o+=u)}else for(u in n)n[u]&&(o&&(o+=" "),o+=u);return o}function h(){for(var n,w,u=0,o="",g=arguments.length;u<g;u++)(n=arguments[u])&&(w=l(n))&&(o&&(o+=" "),o+=w);return o}const i=h},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(z){var D=function(t){return s(t)&&!l(t)};function s(e){return!!e&&typeof e=="object"}function l(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||n(e)}var h=typeof Symbol=="function"&&Symbol.for,i=h?Symbol.for("react.element"):60103;function n(e){return e.$$typeof===i}function w(e){return Array.isArray(e)?[]:{}}function u(e,t){return t.clone!==!1&&t.isMergeableObject(e)?p(w(e),e,t):e}function o(e,t,a){return e.concat(t).map(function(f){return u(f,a)})}function g(e,t){if(!t.customMerge)return p;var a=t.customMerge(e);return typeof a=="function"?a:p}function M(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function v(e){return Object.keys(e).concat(M(e))}function y(e,t){try{return t in e}catch{return!1}}function b(e,t){return y(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function c(e,t,a){var f={};return a.isMergeableObject(e)&&v(e).forEach(function(d){f[d]=u(e[d],a)}),v(t).forEach(function(d){b(e,d)||(y(e,d)&&a.isMergeableObject(t[d])?f[d]=g(d,a)(e[d],t[d],a):f[d]=u(t[d],a))}),f}function p(e,t,a){a=a||{},a.arrayMerge=a.arrayMerge||o,a.isMergeableObject=a.isMergeableObject||D,a.cloneUnlessOtherwiseSpecified=u;var f=Array.isArray(t),d=Array.isArray(e),T=f===d;return T?f?a.arrayMerge(e,t,a):c(e,t,a):u(t,a)}p.all=function(t,a){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(f,d){return p(f,d,a)},{})};var C=p;z.exports=C}}]);
