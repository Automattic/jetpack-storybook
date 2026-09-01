import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{n as r,r as i}from"./line-chart-D0eN2fGZ.js";import{t as a}from"./legend-config-BJNKT_wW.js";import{C as o,p as s,w as c}from"./sample-data-Cx3-uFO8.js";import{t as l}from"./stories-CVQ30TOX.js";import{i as u,n as d,r as f}from"./config-D0y_anw_.js";var p=e({Animation:()=>C,AspectRatio:()=>b,BrokenLine:()=>I,ComparisonMulti:()=>W,ComparisonSingle:()=>U,CurveTypes:()=>N,DateStringFormats:()=>H,Default:()=>_,ErrorStates:()=>A,FixedDimensions:()=>y,GradientCustomColors:()=>O,GradientFilled:()=>D,GradientTransparent:()=>k,ManySeries:()=>S,SingleSeries:()=>x,SmartFormatting:()=>P,TimeAxisTickFormats:()=>R,TimeAxisTickResolution:()=>V,WithCompositionLegend:()=>T,WithDefaultHiddenSeries:()=>E,WithLegend:()=>w,WithPointerEvents:()=>M,WithoutSmoothing:()=>j,Zoomable:()=>v,__namedExportsOrder:()=>G,default:()=>h}),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K=t((()=>{l(),i(),d(),m=n(),h={...f,title:`JS Packages/Charts Library/Charts/Line Chart`,component:f.component,argTypes:{...f.argTypes,seriesCount:{control:{type:`radio`},options:[`single`,`multiple`,`many`],description:`Number of data series`,table:{category:`Data`}},dimensionMode:{control:{type:`radio`},options:[`responsive`,`fixed`],description:`Chart sizing mode`,table:{category:`Dimensions`}},smoothing:{control:`boolean`,description:`Enable line smoothing`,table:{category:`Visual Style`}},curveType:{control:{type:`radio`},options:[`linear`,`smooth`,`monotone`],description:`Line curve type`,table:{category:`Visual Style`}},withGradientFill:{control:`boolean`,description:`Fill area under line with gradient`,table:{category:`Visual Style`}}}},g=e=>{let{seriesCount:t,dimensionMode:n,crosshairMode:i,withTooltipCrosshairs:s,...c}=e,l=a(e),d=c.data||u.data;t===`single`?d=[o[0]]:t===`multiple`?d=o.slice(0,4):t===`many`&&(d=o);let f={};n===`fixed`&&(f={width:800,height:400});let p;return i===`vertical`?p={showVertical:!0}:i===`horizontal`?p={showHorizontal:!0}:i===`both`&&(p={showVertical:!0,showHorizontal:!0}),(0,m.jsx)(r,{...c,...f,data:d,legend:l,withTooltipCrosshairs:p})},_=g.bind({}),_.args={...u},v=g.bind({}),v.args={...u,zoomable:!0},v.parameters={docs:{description:{story:"With `zoomable`, drag horizontally across the plot to zoom into a range. A reset button appears while zoomed to restore the full domain. Defaults to `false`."}}},y=g.bind({}),y.args={...u,width:600,height:300},b=g.bind({}),b.args={...u,aspectRatio:.3},x=g.bind({}),x.args={...u,data:[o[0]]},S=g.bind({}),S.args={...u,data:o,showLegend:!0},C=g.bind({}),C.args={...u,animation:!0},w=g.bind({}),w.args={...u,showLegend:!0},w.parameters={docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}},T={render:e=>{let t=a(e);return(0,m.jsx)(r,{..._.args,...e,legend:{interactive:t?.interactive},chartId:`composition-line-chart`,children:(0,m.jsx)(r.Legend,{...t})})},args:{..._.args},parameters:{docs:{description:{story:"Composition API using `<LineChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},E=g.bind({}),E.args={..._.args,showLegend:!0,legendInteractive:!0,chartId:`default-hidden-series-demo`,defaultHiddenSeries:[`London`]},E.parameters={docs:{description:{story:`London is hidden from the initial render and marked inactive in the legend. Select its legend item to reveal it.`}}},D=g.bind({}),D.args={...u,margin:void 0,data:c,withGradientFill:!0,options:{axis:{y:{orientation:`right`}}}},O=g.bind({}),O.args={width:600,height:300,data:[{label:`Revenue`,data:[{date:new Date(`2024-01-01`),value:45e3},{date:new Date(`2024-02-01`),value:52e3},{date:new Date(`2024-03-01`),value:48e3},{date:new Date(`2024-04-01`),value:61e3},{date:new Date(`2024-05-01`),value:68e3},{date:new Date(`2024-06-01`),value:72e3}],options:{gradient:{fromOpacity:.8,toOpacity:0}}},{label:`Expenses`,data:[{date:new Date(`2024-01-01`),value:28e3},{date:new Date(`2024-02-01`),value:31e3},{date:new Date(`2024-03-01`),value:29e3},{date:new Date(`2024-04-01`),value:33e3},{date:new Date(`2024-05-01`),value:35e3},{date:new Date(`2024-06-01`),value:38e3}],options:{gradient:{from:`var(--jp-red)`,to:`var(--jp-red)`,fromOpacity:.6,toOpacity:0}}}],withGradientFill:!0},k=g.bind({}),k.args={width:600,height:300,data:[{label:`Temperature (°C)`,data:[{date:new Date(`2024-01-01`),value:15},{date:new Date(`2024-02-01`),value:18},{date:new Date(`2024-03-01`),value:22},{date:new Date(`2024-04-01`),value:26},{date:new Date(`2024-05-01`),value:30},{date:new Date(`2024-06-01`),value:28}],options:{gradient:{stops:[{offset:`0%`,opacity:.7},{offset:`20%`,opacity:0},{offset:`100%`,opacity:0}]}}}],withGradientFill:!0},A={render:()=>(0,m.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h3`,{children:`Empty Data`}),(0,m.jsx)(r,{width:300,height:200,data:[],withGradientFill:!1,withLegendGlyph:!1})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h3`,{children:`Invalid Date Values`}),(0,m.jsx)(r,{width:300,height:200,data:[{label:`Invalid Dates`,data:[{date:new Date(`invalid`),value:10},{date:new Date(`2024-01-02`),value:20}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h3`,{children:`Invalid Values`}),(0,m.jsx)(r,{width:300,height:200,data:[{label:`Invalid Values`,data:[{date:new Date(`2024-01-01`),value:NaN},{date:new Date(`2024-01-02`),value:null}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h3`,{children:`Single Data Point`}),(0,m.jsx)(r,{width:300,height:200,data:[{label:`Single Point`,data:[{date:new Date(`2024-01-01`),value:100}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]})]}),parameters:{docs:{description:{story:`Examples of how the line chart handles various error states and edge cases.`}}}},j=g.bind({}),j.args={...u,smoothing:!1},M=g.bind({}),M.args={...u,onPointerDown:({datum:e})=>alert(`Pointer down:`+JSON.stringify(e))},N={render:()=>{let e=[{label:`Sample Series`,data:[{date:new Date(`2024-01-01`),value:10},{date:new Date(`2024-01-02`),value:90},{date:new Date(`2024-01-03`),value:85},{date:new Date(`2024-01-04`),value:82},{date:new Date(`2024-01-05`),value:5},{date:new Date(`2024-01-06`),value:8},{date:new Date(`2024-01-07`),value:10}],options:{}}];return(0,m.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(3, 1fr)`},children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h3`,{children:`Linear Curve`}),(0,m.jsx)(r,{width:300,height:200,data:e,curveType:`linear`,withGradientFill:!1,withLegendGlyph:!1})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h3`,{children:`Smooth Curve (Catmull-Rom)`}),(0,m.jsx)(r,{width:300,height:200,data:e,curveType:`smooth`,withGradientFill:!1,withLegendGlyph:!1})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h3`,{children:`Monotone X Curve`}),(0,m.jsx)(r,{width:300,height:200,data:e,curveType:`monotone`,withGradientFill:!1,withLegendGlyph:!1})]})]})},parameters:{docs:{description:{story:`Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points.`}}}},P=g.bind({}),P.args={...u,data:s,withGradientFill:!1,smoothing:!0,options:{axis:{x:{orientation:`bottom`},y:{orientation:`left`}}}},P.parameters={docs:{description:{story:`Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values ≥1B are formatted as "1.23B", ≥1M as "1.2M", ≥1K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.`}}},F=100,I=g.bind({}),I.args={...u,data:[{...c[0],label:`Visitors with dashed line`,data:c[0].data.map(e=>({...e,value:e.value+F})),options:{...c[0].options,seriesLineStyle:{strokeDasharray:`5 5`,strokeWidth:3}}},c[0]],showLegend:!0},I.parameters={docs:{description:{story:`Demonstrates the option of setting a seriesLineStyle to a dash array.`}}},L=(e,t,n)=>({label:e,data:Array.from({length:n},(e,n)=>({date:new Date(2026,7,t,n),value:Math.round(60+40*Math.sin(n%24/3.5))})),options:{}}),R={render:()=>(0,m.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h3`,{children:`Hourly buckets, single day → hour ticks`}),(0,m.jsx)(r,{width:460,height:220,data:[L(`Views`,2,24)],withGradientFill:!1,withLegendGlyph:!1})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h3`,{children:`Hourly buckets, two days → hour ticks, date at midnight`}),(0,m.jsx)(r,{width:460,height:220,data:[L(`Views`,2,48)],withGradientFill:!1,withLegendGlyph:!1})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h3`,{children:`Daily buckets → date ticks`}),(0,m.jsx)(r,{width:460,height:220,data:[{label:`Views`,data:Array.from({length:30},(e,t)=>({date:new Date(2026,6,1+t),value:Math.round(60+40*Math.sin(t/4))})),options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h3`,{children:`Monthly buckets → month ticks, year at January`}),(0,m.jsx)(r,{width:460,height:220,data:[{label:`Views`,data:Array.from({length:13},(e,t)=>({date:new Date(2025,7+t,1),value:Math.round(60+40*Math.sin(t/2))})),options:{}}],withGradientFill:!1,withLegendGlyph:!1})]})]}),args:{containerWidth:`1020px`,containerHeight:`700px`},parameters:{docs:{description:{story:`The time axis picks its tick format from the data's bucket resolution as well as its span: hour ticks within a day; hour ticks with the date at midnight boundaries for sub-daily data spanning up to a week; date ticks for daily and weekly buckets within a year; month ticks (with the year at January) for month-or-coarser buckets; year ticks beyond that.`}}}},z=[{label:`Views`,data:[{date:new Date(2026,7,2,13),value:42}],options:{}}],B=[{label:`Views`,data:[{date:new Date(2026,5,1),value:640}],options:{}}],V={render:()=>(0,m.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h3`,{children:`Lone hourly bucket, resolution inferred → date tick`}),(0,m.jsx)(r,{width:460,height:220,data:z,withGradientFill:!1,withLegendGlyph:!1})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h3`,{children:`Same point, tickResolution: 'hour' → hour tick`}),(0,m.jsx)(r,{width:460,height:220,data:z,options:{axis:{x:{tickResolution:`hour`}}},withGradientFill:!1,withLegendGlyph:!1})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h3`,{children:`Lone yearly bucket, resolution inferred → date tick`}),(0,m.jsx)(r,{width:460,height:220,data:B,withGradientFill:!1,withLegendGlyph:!1})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h3`,{children:`Same point, tickResolution: 'year' → year tick`}),(0,m.jsx)(r,{width:460,height:220,data:B,options:{axis:{x:{tickResolution:`year`}}},withGradientFill:!1,withLegendGlyph:!1})]})]}),args:{containerWidth:`1020px`,containerHeight:`700px`},parameters:{docs:{description:{story:"When the caller already knows the data's bucket resolution — e.g. from a granularity selector — `options.axis.x.tickResolution` declares it and the automatic formatter derives tick formats from it directly, instead of inferring the resolution from point spacing. Inference needs at least two points, so a single-bucket series always falls back to date ticks; the declared resolution picks the right format. The overall time span still constrains the choice, and an explicit `tickFormat` takes precedence over the hint."}}}},H=g.bind({}),H.args={...u,withGradientFill:!1,withLegendGlyph:!1,data:[{label:`String Dates`,data:[{dateString:`2024-01-01`,value:10},{dateString:`2024-01-02`,value:20},{dateString:`2024-01-03 00:00:00`,value:15},{dateString:`2024-01-04`,value:25},{dateString:`2024-01-05 00:00`,value:30}],options:{}}]},H.parameters={docs:{description:{story:`Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:
- Simple date strings (YYYY-MM-DD)
- Date with time (YYYY-MM-DD 00:00:00)
- Date with time (YYYY-MM-DD 00:00)
- ISO format (YYYY-MM-DDT00:00:00)
- UTC format (YYYY-MM-DDT00:00:00Z)
- Timezone offset (YYYY-MM-DDT00:00:00±HH:mm)
`}}},U=g.bind({}),U.args={...u,showLegend:!0,legendCollapseGroups:!1,smoothing:!1,data:[{...o[0],label:`Views`,group:`views`},{...o[1],label:`Views — previous`,group:`views`,options:{type:`comparison`}}]},U.parameters={docs:{description:{story:'A primary series paired with a `type: "comparison"` previous-period series sharing the same `group`. `legend.collapseGroups` is off here, the default, so each series keeps its own legend item; turn the `legendCollapseGroups` control on to fold the pair into a single **Views** item.'}}},W=g.bind({}),W.args={...u,showLegend:!0,legendInteractive:!0,legendCollapseGroups:!0,rescaleYOnVisibilityChange:!1,smoothing:!1,data:[{...o[0],label:`Views`,group:`views`},{...o[1],label:`Views — previous`,group:`views`,options:{type:`comparison`}},{...o[2],label:`Visitors`,group:`visitors`},{...o[3],label:`Visitors — previous`,group:`visitors`,options:{type:`comparison`}}]},W.parameters={docs:{description:{story:'Two groups (`views` and `visitors`), each a primary series plus its `type: "comparison"` overlay. With `legend.collapseGroups` each group is a single legend item, and because `legend.interactive` is also on, clicking one toggles both its current and previous-period series at once. The value axis stays fixed as series are toggled. Turn the `legendCollapseGroups` control off to get one item per series, each toggling alone.'}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);

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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);

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
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);

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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);

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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);

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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);

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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);

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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);

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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);

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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);

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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);

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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);

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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);

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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);

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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);

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
}`,...P.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);

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
}`,...I.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Hourly buckets, single day → hour ticks</h3>
                <LineChart width={460} height={220} data={[hourlySeries('Views', 2, 24)]} withGradientFill={false} withLegendGlyph={false} />
            </div>
            <div>
                <h3>Hourly buckets, two days → hour ticks, date at midnight</h3>
                <LineChart width={460} height={220} data={[hourlySeries('Views', 2, 48)]} withGradientFill={false} withLegendGlyph={false} />
            </div>
            <div>
                <h3>Daily buckets → date ticks</h3>
                <LineChart width={460} height={220} data={[{
        label: 'Views',
        data: Array.from({
          length: 30
        }, (_, i) => ({
          date: new Date(2026, 6, 1 + i),
          value: Math.round(60 + 40 * Math.sin(i / 4))
        })),
        options: {}
      }]} withGradientFill={false} withLegendGlyph={false} />
            </div>
            <div>
                <h3>Monthly buckets → month ticks, year at January</h3>
                <LineChart width={460} height={220} data={[{
        label: 'Views',
        data: Array.from({
          length: 13
        }, (_, i) => ({
          date: new Date(2025, 7 + i, 1),
          value: Math.round(60 + 40 * Math.sin(i / 2))
        })),
        options: {}
      }]} withGradientFill={false} withLegendGlyph={false} />
            </div>
        </div>,
  args: {
    containerWidth: '1020px',
    containerHeight: '700px'
  },
  parameters: {
    docs: {
      description: {
        story: "The time axis picks its tick format from the data's bucket resolution as well as its span: hour ticks within a day; hour ticks with the date at midnight boundaries for sub-daily data spanning up to a week; date ticks for daily and weekly buckets within a year; month ticks (with the year at January) for month-or-coarser buckets; year ticks beyond that."
      }
    }
  }
}`,...R.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Lone hourly bucket, resolution inferred → date tick</h3>
                <LineChart width={460} height={220} data={loneHourlyBucket} withGradientFill={false} withLegendGlyph={false} />
            </div>
            <div>
                <h3>Same point, tickResolution: &apos;hour&apos; → hour tick</h3>
                <LineChart width={460} height={220} data={loneHourlyBucket} options={{
        axis: {
          x: {
            tickResolution: 'hour'
          }
        }
      }} withGradientFill={false} withLegendGlyph={false} />
            </div>
            <div>
                <h3>Lone yearly bucket, resolution inferred → date tick</h3>
                <LineChart width={460} height={220} data={loneYearlyBucket} withGradientFill={false} withLegendGlyph={false} />
            </div>
            <div>
                <h3>Same point, tickResolution: &apos;year&apos; → year tick</h3>
                <LineChart width={460} height={220} data={loneYearlyBucket} options={{
        axis: {
          x: {
            tickResolution: 'year'
          }
        }
      }} withGradientFill={false} withLegendGlyph={false} />
            </div>
        </div>,
  args: {
    containerWidth: '1020px',
    containerHeight: '700px'
  },
  parameters: {
    docs: {
      description: {
        story: "When the caller already knows the data's bucket resolution — e.g. from a granularity selector — \`options.axis.x.tickResolution\` declares it and the automatic formatter derives tick formats from it directly, instead of inferring the resolution from point spacing. Inference needs at least two points, so a single-bucket series always falls back to date ticks; the declared resolution picks the right format. The overall time span still constrains the choice, and an explicit \`tickFormat\` takes precedence over the hint."
      }
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);

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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);

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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);

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
}`,...W.parameters?.docs?.source}}},G=[`Default`,`Zoomable`,`FixedDimensions`,`AspectRatio`,`SingleSeries`,`ManySeries`,`Animation`,`WithLegend`,`WithCompositionLegend`,`WithDefaultHiddenSeries`,`GradientFilled`,`GradientCustomColors`,`GradientTransparent`,`ErrorStates`,`WithoutSmoothing`,`WithPointerEvents`,`CurveTypes`,`SmartFormatting`,`BrokenLine`,`TimeAxisTickFormats`,`TimeAxisTickResolution`,`DateStringFormats`,`ComparisonSingle`,`ComparisonMulti`]}));K();export{C as Animation,b as AspectRatio,I as BrokenLine,W as ComparisonMulti,U as ComparisonSingle,N as CurveTypes,H as DateStringFormats,_ as Default,A as ErrorStates,y as FixedDimensions,O as GradientCustomColors,D as GradientFilled,k as GradientTransparent,S as ManySeries,x as SingleSeries,P as SmartFormatting,R as TimeAxisTickFormats,V as TimeAxisTickResolution,T as WithCompositionLegend,E as WithDefaultHiddenSeries,w as WithLegend,M as WithPointerEvents,j as WithoutSmoothing,v as Zoomable,G as __namedExportsOrder,h as default,K as n,p as t};