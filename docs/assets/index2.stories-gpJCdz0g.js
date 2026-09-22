import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{c as r,r as i,s as ee,t as te}from"./chart-decorator-BeKPQHaG.js";import{i as ne,t as a}from"./legend-config-BJNKT_wW.js";import{D as o,b as s,g as re}from"./sample-data-DdLOr8UJ.js";import{t as ie}from"./stories-Cn-hPY7z.js";import{n as c,r as ae}from"./bar-chart-DpL5cXTM.js";var oe=e({Animation:()=>I,AspectRatio:()=>m,BandHighlight:()=>_,BesideTooltip:()=>v,BucketsWithNoData:()=>K,ComparisonMulti:()=>Y,ComparisonSingle:()=>J,Default:()=>d,ErrorStates:()=>L,FixedDimensions:()=>p,ForcedColors:()=>f,HorizontalBarChart:()=>H,LabelOverflowEllipsis:()=>Z,PaintedYAxis:()=>X,PerPointColors:()=>g,SingleSeries:()=>h,SmartFormatting:()=>R,TimeAxisTickFormats:()=>N,TimeAxisTickResolution:()=>P,TimeSeries:()=>y,WithCompositionLegend:()=>V,WithDefaultHiddenSeries:()=>B,WithLegend:()=>z,WithPatterns:()=>F,ZeroValueComparison:()=>W,__namedExportsOrder:()=>Q,default:()=>u}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{ie(),ae(),l=n(),u={title:`JS Packages/Charts Library/Charts/Bar Chart`,component:c,parameters:{layout:`centered`},decorators:[te],argTypes:{...i,...r,...ne,orientation:{control:{type:`radio`},options:[`vertical`,`horizontal`],description:`Bar orientation`,table:{category:`Visual Style`}},gridVisibility:{control:{type:`radio`},options:[`none`,`x`,`y`,`both`],description:`Grid line visibility`,table:{category:`Visual Style`}},seriesCount:{control:{type:`radio`},options:[`single`,`multiple`,`many`],description:`Number of data series`,table:{category:`Data`}},withPatterns:{control:`boolean`,description:`Use patterns for bars`,table:{category:`Visual Style`}}},render:e=>{let{seriesCount:t,...n}=e,r=a(e),i=n.data;return t===`single`?i=[s[0]]:t===`multiple`?i=[s[0],s[1],s[2]]:t===`many`&&(i=s),(0,l.jsx)(c,{...n,legend:r,data:i})}},d={args:{...ee,withTooltips:!0,data:[s[0],s[1],s[2]],gridVisibility:`x`,maxWidth:1200,resizeDebounceTime:300}},f={...d,parameters:{docs:{description:{story:`In Chrome DevTools, open Rendering and set "Emulate CSS media feature forced-colors" to "active". Set prefers-color-scheme to dark, then light: both axes should follow the system text color. This uses the same axis catalog roles as Line Chart, Area Chart, and Bar List Chart.`}}}},p={args:{...d.args,width:600,height:300}},m={args:{...d.args,aspectRatio:.3}},h={args:{...d.args,data:[s[0]]},parameters:{docs:{description:{story:`Bar chart with a single data series.`}}}},g={args:{...h.args,options:{yScale:{zero:!0}},data:[{label:`Daily score`,data:[{label:`Monday`,value:92,color:`var(--a8c-charts-color-trend-up)`},{label:`Tuesday`,value:35,color:`var(--a8c-charts-color-trend-down)`},{label:`Wednesday`,value:88,color:`var(--a8c-charts-color-trend-up)`},{label:`Thursday`,value:65}]}]},parameters:{docs:{description:{story:`Point colors override the series fill. Thursday has no override and keeps the series color. Enable patterns to check that they take precedence.`}}}},_={args:{...h.args,withBandHighlight:!0},parameters:{docs:{description:{story:`Hover a bar or focus the chart and use arrow keys to highlight its band across the plot. Escape clears the keyboard selection and its tooltip; a hover highlight remains.`}}}},v={args:{..._.args,tooltipPlacement:`beside`,tooltipAnchorTop:40},argTypes:{tooltipPlacement:{control:`radio`,options:[`auto`,`beside`]},tooltipAnchorTop:{control:`number`}},parameters:{docs:{description:{story:`Hover the first and last bars to check horizontal flipping. The tooltip stays at the SVG top anchor, subject to clipping bounds. Change tooltipAnchorTop to move that anchor, including above the SVG with negative values.`}}}},y={args:{...d.args,data:[{...o[0],label:`Data with dateString and date`,data:[...o[0].data,{dateString:`2024-01-31`,value:2230},{dateString:`2024-02-01`,value:2580},{date:new Date(`2024-02-02 00:00:00`),value:3500},{dateString:`2024-02-03 00:00:00`,value:1500},{dateString:`2024-02-04`,value:2500},{dateString:`2024-02-05 00:00`,value:3e3}]}],options:{axis:{x:{tickFormat:e=>new Date(e).toLocaleDateString(`en-US`,{dateStyle:`short`})}}}},parameters:{docs:{description:{story:`Bar chart with a time series.`}}}},b=e=>[{label:`Views`,data:e.map(([e,t])=>({date:e,value:t})),options:{}}],x=Array.from({length:24},(e,t)=>[new Date(2026,7,2,t),Math.round(60+40*Math.sin(t/3.5))]),S=Array.from({length:30},(e,t)=>[new Date(2026,6,1+t),Math.round(60+40*Math.sin(t/4))]),C=Array.from({length:48},(e,t)=>[new Date(2026,7,2,t),Math.round(60+40*Math.sin(t/3.5))]),w=Array.from({length:168},(e,t)=>[new Date(2026,7,2,t),Math.round(60+40*Math.sin(t/3.5))]),T=Array.from({length:13},(e,t)=>[new Date(2025,7+t,1),Math.round(60+40*Math.sin(t/2))]),E=Array.from({length:36},(e,t)=>[new Date(2023,6+t,1),Math.round(60+40*Math.sin(t/2))]),D=Array.from({length:30},(e,t)=>[new Date(2023,3+t,1),Math.round(60+40*Math.sin(t/2))]),O=[72,95,58,86].map((e,t)=>[new Date(2023+t,0,1),e]),k=b([[new Date(2026,7,2,13),42]]),A=Array.from({length:8},(e,t)=>[new Date(2026,0,5+t*7),Math.round(60+40*Math.sin(t/2))]),j=({title:e,data:t,options:n})=>(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h3`,{children:e}),(0,l.jsx)(c,{width:460,height:220,withTooltips:!0,data:t,options:n})]}),M={display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(auto-fit, minmax(440px, 1fr))`},N={render:()=>(0,l.jsxs)(`div`,{style:M,children:[(0,l.jsx)(j,{title:`Hourly buckets, single day → hour ticks`,data:b(x)}),(0,l.jsx)(j,{title:`Hourly buckets, two days → hour ticks, date at midnight`,data:b(C)}),(0,l.jsx)(j,{title:`Hourly buckets, a week → hour ticks, every tick at midnight`,data:b(w)}),(0,l.jsx)(j,{title:`Daily buckets → date ticks`,data:b(S)}),(0,l.jsx)(j,{title:`Monthly buckets over a year → month ticks, year at January`,data:b(T)}),(0,l.jsx)(j,{title:`Monthly buckets over three years → month ticks, every tick at January`,data:b(E)}),(0,l.jsx)(j,{title:`Monthly buckets, two and a half years → month ticks, year at January`,data:b(D)}),(0,l.jsx)(j,{title:`Yearly buckets → year ticks`,data:b(O)})]}),args:{containerWidth:`1020px`,containerHeight:`1400px`},parameters:{docs:{description:{story:"Date-based series share the time-axis tick formatter with the line and area charts, on the same data — compare these panels with the line chart's `TimeAxisTickFormats`. Month-or-coarser buckets follow the resolution alone — month names with the year at January, or plain years for yearly buckets — since they carry no day to print at any span. Daily-or-finer buckets narrow with the span: hour ticks within a day, hour ticks dated at midnight for sub-daily data spanning up to a week, calendar dates within a year, and years beyond that. The tick values are chosen rather than sampled: a band scale has no ticks of its own, so picking evenly by index would often skip the very bucket that carries the year or the date. None of the monthly panels starts in January, and all three still name their years, the shortest of them without thinning the axis to reach one; the week-long and three-year panels step whole days and whole years, since at those spans nothing closer together reaches a boundary at all. Hover any bar: the tooltip names that bar's bucket spelled out in full — `August 2026` for a monthly bar, `2026` for a yearly one, never a day the bucket doesn't carry. It always names the bucket's own granularity, so on the daily panel it stays finer than the ticks once a long span coarsens the axis. An explicit `options.axis.x.tickFormat` still overrides."}}}},P={render:()=>(0,l.jsxs)(`div`,{style:M,children:[(0,l.jsx)(j,{title:`Lone hourly bucket, resolution inferred → date tick`,data:k,options:{yScale:{zero:!0}}}),(0,l.jsx)(j,{title:`Same bar, tickResolution: 'hour' → hour tick`,data:k,options:{yScale:{zero:!0},axis:{x:{tickResolution:`hour`}}}}),(0,l.jsx)(j,{title:`Weekly buckets, tickResolution: 'week' → date ticks, 'Week of' tooltips`,data:b(A),options:{axis:{x:{tickResolution:`week`}}}})]}),args:{containerWidth:`1020px`,containerHeight:`700px`},parameters:{docs:{description:{story:"When the caller already knows the data's bucket resolution — e.g. from a granularity selector — `options.axis.x.tickResolution` declares it and the tick formatter derives the format from it instead of inferring the resolution from point spacing. Inference needs at least two points, so a single-bucket series always falls back to date ticks; the declared resolution picks the right format, and the tooltip follows it. `'week'` is the other case that has to be declared: seven-day spacing is indistinguishable from sparse daily data, so undeclared weekly buckets are read as daily and their tooltips name a single day rather than `Week of …`. On a horizontal bar chart the hint lives on `axis.y`, which is where the dates are. An explicit `tickFormat` takes precedence over the hint."}}}},F={args:{...d.args,withPatterns:!0,data:d.args.data.map(e=>({...e,data:e.data.filter(e=>parseInt(e.label)>=2016)}))}},I={args:{...d.args,animation:!0}},L={render:()=>(0,l.jsxs)(`div`,{style:{display:`grid`,gap:`20px`},children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h3`,{children:`Empty Data`}),(0,l.jsx)(`div`,{style:{width:`400px`,height:`300px`},children:(0,l.jsx)(c,{data:[]})})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h3`,{children:`Invalid Data`}),(0,l.jsx)(`div`,{style:{width:`400px`,height:`300px`},children:(0,l.jsx)(c,{data:[{label:`Invalid Series`,data:[{date:new Date(`invalid`),value:10}],options:{}}]})})]})]})},L.parameters={docs:{description:{story:`Examples of how the bar chart handles various error states including empty data and invalid data.`}}},R={args:{withTooltips:!0,data:re,gridVisibility:`x`}},R.parameters={docs:{description:{story:`Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values ≥1B are formatted as "1.23B", ≥1M as "1.2M", ≥1K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.`}}},z={args:{...d.args,showLegend:!0},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},B={args:{...d.args,showLegend:!0,legendInteractive:!0,chartId:`default-hidden-series-demo`,defaultHiddenSeries:[`Great Britain`]},parameters:{docs:{description:{story:`Great Britain is hidden from the initial render and marked inactive in the legend. Select its legend item to reveal it.`}}}},V={render:e=>{let t=a(e);return(0,l.jsx)(c,{...d.args,...e,legend:{interactive:t?.interactive},chartId:`composition-bar-chart`,children:(0,l.jsx)(c.Legend,{...t})})},args:{...d.args},parameters:{docs:{description:{story:"Composition API using `<BarChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},H={args:{...d.args,data:[s[0],s[1],s[2]],orientation:`horizontal`,gridVisibility:`none`}},U=[{group:`United States`,label:`United States`,data:[{label:`1896`,value:0},{label:`1900`,value:0},{label:`1904`,value:2},{label:`1908`,value:1},{label:`1912`,value:3}]},{group:`Great Britain`,label:`Great Britain`,data:[{label:`1896`,value:1},{label:`1900`,value:0},{label:`1904`,value:1},{label:`1908`,value:10},{label:`1912`,value:9}]},{group:`Japan`,label:`Japan`,data:[{label:`1896`,value:2},{label:`1900`,value:1},{label:`1904`,value:2},{label:`1908`,value:1},{label:`1912`,value:2}]}],W={render:()=>(0,l.jsxs)(`div`,{style:{display:`grid`,gap:`40px`},children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h3`,{children:`Zero Value Display: Disabled (Default)`}),(0,l.jsx)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:`Zero values are not visually displayed. Bars with zero values have no height.`}),(0,l.jsx)(`div`,{style:{width:`600px`,height:`300px`},children:(0,l.jsx)(c,{data:U,showZeroValues:!1,withTooltips:!0,gridVisibility:`x`})})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h3`,{children:`Zero Value Display: Enabled`}),(0,l.jsx)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:`Zero values are visually displayed with minimum height bars. The tooltip still shows the actual value of 0, while the bar has a small visual height for better UX.`}),(0,l.jsx)(`div`,{style:{width:`600px`,height:`300px`},children:(0,l.jsx)(c,{data:U,showZeroValues:!0,withTooltips:!0,gridVisibility:`x`})})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h3`,{children:`Small Chart Height (100px)`}),(0,l.jsx)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:`Zero-value bars remain visible even in small charts. The minimum pixel height ensures bars are at least 2 pixels tall regardless of chart dimensions.`}),(0,l.jsx)(`div`,{style:{width:`600px`,height:`100px`,border:`1px solid #e0e0e0`},children:(0,l.jsx)(c,{data:U,showZeroValues:!0,withTooltips:!0,gridVisibility:`x`})})]})]}),args:{containerHeight:`1600px`},parameters:{docs:{description:{story:`Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights. Zero-value bars remain visible even in small chart heights.`}}}},G=[{label:`Subscribers`,data:[{date:new Date(2026,0,1),value:null},{date:new Date(2026,1,1),value:null},{date:new Date(2026,2,1),value:null},{date:new Date(2026,3,1),value:0},{date:new Date(2026,4,1),value:12},{date:new Date(2026,5,1),value:31},{date:new Date(2026,6,1),value:58}]}],K={args:{...d.args,data:G,showZeroValues:!0},argTypes:{seriesCount:{table:{disable:!0}}}},K.parameters={docs:{description:{story:'A null value is a bucket with no reading. It keeps its place on the axis so the chart still spans the selected range, draws no bar, and its tooltip reads "No data" rather than zero. April is a real zero: with `showZeroValues` on it keeps a short stub, so a month with none reads differently from a month with no record.'}}},q=[{group:`sales`,label:`Sales by Channel`,data:[{label:`Organic Search Traffic`,value:12500},{label:`Paid Advertising Campaign`,value:8750},{label:`Social Media Marketing`,value:6250},{label:`Email Newsletter Subscribers`,value:4375},{label:`Direct Website Visitors`,value:3125},{label:`Affiliate Partner Referrals`,value:2500}]}],J={args:{...d.args,showLegend:!0,legendCollapseGroups:!1,data:[{label:`Views`,group:`views`,data:[{label:`Mon`,value:420},{label:`Tue`,value:580},{label:`Wed`,value:310},{label:`Thu`,value:750},{label:`Fri`,value:640}]},{label:`Views — previous`,group:`views`,options:{type:`comparison`},data:[{label:`Mon`,value:510},{label:`Tue`,value:490},{label:`Wed`,value:430},{label:`Thu`,value:620},{label:`Fri`,value:700}]}]},parameters:{docs:{description:{story:'One primary series paired with a `type: "comparison"` series sharing the same `group`. The comparison series renders as a translucent (50% opacity) shadow bar at the standard slot width, behind a primary bar narrowed to 60% — so it reads as a shadow peeking around the current period. `legend.collapseGroups` is off here, the default, so each series keeps its own legend item; turn the `legendCollapseGroups` control on to fold the pair into a single **Views** item.'}}}},Y={args:{...d.args,showLegend:!0,legendInteractive:!0,legendCollapseGroups:!0,data:[{label:`Views`,group:`views`,data:[{label:`Mon`,value:420},{label:`Tue`,value:580},{label:`Wed`,value:310},{label:`Thu`,value:750},{label:`Fri`,value:640}]},{label:`Views — previous`,group:`views`,options:{type:`comparison`},data:[{label:`Mon`,value:510},{label:`Tue`,value:490},{label:`Wed`,value:430},{label:`Thu`,value:620},{label:`Fri`,value:700}]},{label:`Visitors`,group:`visitors`,data:[{label:`Mon`,value:280},{label:`Tue`,value:390},{label:`Wed`,value:220},{label:`Thu`,value:500},{label:`Fri`,value:430}]},{label:`Visitors — previous`,group:`visitors`,options:{type:`comparison`},data:[{label:`Mon`,value:340},{label:`Tue`,value:320},{label:`Wed`,value:290},{label:`Thu`,value:410},{label:`Fri`,value:460}]}]},parameters:{docs:{description:{story:'Two groups (`views` and `visitors`) rendered side by side, each paired with its own `type: "comparison"` series. Each group\'s standard-width shadow bar sits behind its 60%-width primary bar, with clear gaps preserved between groups — confirming comparison mode composes correctly with grouped bar layouts. With `legend.collapseGroups` each group is a single legend item (Views, Visitors), and because `legend.interactive` is also on, clicking one toggles both its current and previous-period series at once. Turn the `legendCollapseGroups` control off to get one item per series, each toggling alone.'}}}},X={args:{containerWidth:`900px`,containerHeight:`400px`,resize:`none`},render:()=>(0,l.jsxs)(`div`,{style:{display:`grid`,gap:`32px`,gridTemplateColumns:`repeat(2, 380px)`},children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h3`,{style:{marginBottom:`4px`},children:`Default — labels only`}),(0,l.jsxs)(`p`,{style:{marginBottom:`12px`,color:`#666`},children:[`Both roles resolve to `,(0,l.jsx)(`code`,{children:`none`}),`.`]}),(0,l.jsx)(c,{width:380,height:220,data:[s[0]],gridVisibility:`x`})]}),(0,l.jsxs)(`div`,{style:{"--a8c-charts-color-axis-y":`#3858e9`,"--a8c-charts-color-tick-y":`#cc1818`},children:[(0,l.jsx)(`h3`,{style:{marginBottom:`4px`},children:`Painted`}),(0,l.jsx)(`p`,{style:{marginBottom:`12px`,color:`#666`},children:`Axis blue, tick marks red.`}),(0,l.jsx)(c,{width:380,height:220,data:[s[0]],gridVisibility:`x`})]})]}),parameters:{docs:{description:{story:"Each axis has its own pair of catalog roles, set in CSS anywhere inside the provider tree. The y pair resolves to `none` by default, which is what leaves that axis carrying tick labels and nothing else; declaring either one paints that part. The x pair — `--a8c-charts-color-axis-x` and `--a8c-charts-color-tick-x` — is untouched here, which is why the x axis is identical in both charts. Nothing reaches any of these through the `theme` prop; colors are CSS."}}}},Z={render:()=>(0,l.jsxs)(`div`,{style:{display:`grid`,gap:`40px`},children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h3`,{children:`Without labelOverflow (Default - Labels Overlap)`}),(0,l.jsx)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:`Default behavior: long labels overlap and become unreadable at narrow widths.`}),(0,l.jsx)(`div`,{style:{width:`350px`,height:`250px`,border:`1px solid #e0e0e0`},children:(0,l.jsx)(c,{data:q,withTooltips:!0,gridVisibility:`x`})})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h3`,{children:`With labelOverflow: 'ellipsis' (Labels Truncated)`}),(0,l.jsxs)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:[`With `,(0,l.jsx)(`code`,{children:`labelOverflow: 'ellipsis'`}),`, labels are truncated to fit the available bandwidth. `,(0,l.jsx)(`strong`,{children:`Hover over a label to see the full text.`})]}),(0,l.jsx)(`div`,{style:{width:`350px`,height:`250px`,border:`1px solid #e0e0e0`},children:(0,l.jsx)(c,{data:q,withTooltips:!0,gridVisibility:`x`,options:{axis:{x:{labelOverflow:`ellipsis`}}}})})]})]}),parameters:{docs:{description:{story:"Demonstrates the `labelOverflow: 'ellipsis'` option that truncates long axis labels to fit the available bandwidth. The full label text is shown on hover via a native tooltip. This is useful for narrow widget contexts where space is limited."}}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    withTooltips: true,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    resizeDebounceTime: 300
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...Default,
  parameters: {
    docs: {
      description: {
        story: 'In Chrome DevTools, open Rendering and set "Emulate CSS media feature forced-colors" to "active". Set prefers-color-scheme to dark, then light: both axes should follow the system text color. This uses the same axis catalog roles as Line Chart, Area Chart, and Bar List Chart.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 600,
    height: 300
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.3
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [medalCountsData[0]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with a single data series.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...SingleSeries.args,
    options: {
      yScale: {
        zero: true
      }
    },
    data: [{
      label: 'Daily score',
      data: [{
        label: 'Monday',
        value: 92,
        color: 'var(--a8c-charts-color-trend-up)'
      }, {
        label: 'Tuesday',
        value: 35,
        color: 'var(--a8c-charts-color-trend-down)'
      }, {
        label: 'Wednesday',
        value: 88,
        color: 'var(--a8c-charts-color-trend-up)'
      }, {
        label: 'Thursday',
        value: 65
      }]
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Point colors override the series fill. Thursday has no override and keeps the series color. Enable patterns to check that they take precedence.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...SingleSeries.args,
    withBandHighlight: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover a bar or focus the chart and use arrow keys to highlight its band across the plot. Escape clears the keyboard selection and its tooltip; a hover highlight remains.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...BandHighlight.args,
    tooltipPlacement: 'beside',
    tooltipAnchorTop: 40
  },
  argTypes: {
    tooltipPlacement: {
      control: 'radio',
      options: ['auto', 'beside']
    },
    tooltipAnchorTop: {
      control: 'number'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover the first and last bars to check horizontal flipping. The tooltip stays at the SVG top anchor, subject to clipping bounds. Change tooltipAnchorTop to move that anchor, including above the SVG with negative values.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [{
      ...trafficData[0],
      label: 'Data with dateString and date',
      data: [...trafficData[0].data, {
        dateString: '2024-01-31',
        value: 2230
      }, {
        dateString: '2024-02-01',
        value: 2580
      }, {
        date: new Date('2024-02-02 00:00:00'),
        value: 3500
      }, {
        dateString: '2024-02-03 00:00:00',
        value: 1500
      }, {
        dateString: '2024-02-04',
        value: 2500
      }, {
        dateString: '2024-02-05 00:00',
        value: 3000
      }]
    }],
    options: {
      axis: {
        x: {
          tickFormat: (timestamp: number) => {
            const date = new Date(timestamp);
            return date.toLocaleDateString('en-US', {
              dateStyle: 'short'
            });
          }
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with a time series.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div style={timeAxisPanelGrid}>
            <TimeAxisPanel title="Hourly buckets, single day → hour ticks" data={timeAxisSeries(hourlyPoints)} />
            <TimeAxisPanel title="Hourly buckets, two days → hour ticks, date at midnight" data={timeAxisSeries(twoDayHourlyPoints)} />
            <TimeAxisPanel title="Hourly buckets, a week → hour ticks, every tick at midnight" data={timeAxisSeries(weekHourlyPoints)} />
            <TimeAxisPanel title="Daily buckets → date ticks" data={timeAxisSeries(dailyPoints)} />
            <TimeAxisPanel title="Monthly buckets over a year → month ticks, year at January" data={timeAxisSeries(oneYearMonthlyPoints)} />
            <TimeAxisPanel title="Monthly buckets over three years → month ticks, every tick at January" data={timeAxisSeries(monthlyPoints)} />
            <TimeAxisPanel title="Monthly buckets, two and a half years → month ticks, year at January" data={timeAxisSeries(partYearMonthlyPoints)} />
            <TimeAxisPanel title="Yearly buckets → year ticks" data={timeAxisSeries(yearlyPoints)} />
        </div>,
  args: {
    containerWidth: '1020px',
    containerHeight: '1400px'
  },
  parameters: {
    docs: {
      description: {
        story: "Date-based series share the time-axis tick formatter with the line and area charts, on the same data — compare these panels with the line chart's \`TimeAxisTickFormats\`. Month-or-coarser buckets follow the resolution alone — month names with the year at January, or plain years for yearly buckets — since they carry no day to print at any span. Daily-or-finer buckets narrow with the span: hour ticks within a day, hour ticks dated at midnight for sub-daily data spanning up to a week, calendar dates within a year, and years beyond that. The tick values are chosen rather than sampled: a band scale has no ticks of its own, so picking evenly by index would often skip the very bucket that carries the year or the date. None of the monthly panels starts in January, and all three still name their years, the shortest of them without thinning the axis to reach one; the week-long and three-year panels step whole days and whole years, since at those spans nothing closer together reaches a boundary at all. Hover any bar: the tooltip names that bar's bucket spelled out in full — \`August 2026\` for a monthly bar, \`2026\` for a yearly one, never a day the bucket doesn't carry. It always names the bucket's own granularity, so on the daily panel it stays finer than the ticks once a long span coarsens the axis. An explicit \`options.axis.x.tickFormat\` still overrides."
      }
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div style={timeAxisPanelGrid}>
            <TimeAxisPanel title="Lone hourly bucket, resolution inferred → date tick" data={loneHourlyBucket} options={{
      yScale: {
        zero: true
      }
    }} />
            <TimeAxisPanel title="Same bar, tickResolution: 'hour' → hour tick" data={loneHourlyBucket} options={{
      yScale: {
        zero: true
      },
      axis: {
        x: {
          tickResolution: 'hour'
        }
      }
    }} />
            <TimeAxisPanel title="Weekly buckets, tickResolution: 'week' → date ticks, 'Week of' tooltips" data={timeAxisSeries(weeklyPoints)} options={{
      axis: {
        x: {
          tickResolution: 'week'
        }
      }
    }} />
        </div>,
  args: {
    containerWidth: '1020px',
    containerHeight: '700px'
  },
  parameters: {
    docs: {
      description: {
        story: "When the caller already knows the data's bucket resolution — e.g. from a granularity selector — \`options.axis.x.tickResolution\` declares it and the tick formatter derives the format from it instead of inferring the resolution from point spacing. Inference needs at least two points, so a single-bucket series always falls back to date ticks; the declared resolution picks the right format, and the tooltip follows it. \`'week'\` is the other case that has to be declared: seven-day spacing is indistinguishable from sparse daily data, so undeclared weekly buckets are read as daily and their tooltips name a single day rather than \`Week of …\`. On a horizontal bar chart the hint lives on \`axis.y\`, which is where the dates are. An explicit \`tickFormat\` takes precedence over the hint."
      }
    }
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    withPatterns: true,
    data: Default.args.data.map(country => {
      return {
        ...country,
        data: country.data.filter(d => parseInt(d.label) >= 2016)
      };
    })
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '20px'
  }}>
            <div>
                <h3>Empty Data</h3>
                <div style={{
        width: '400px',
        height: '300px'
      }}>
                    <BarChart data={[]} />
                </div>
            </div>

            <div>
                <h3>Invalid Data</h3>
                <div style={{
        width: '400px',
        height: '300px'
      }}>
                    <BarChart data={[{
          label: 'Invalid Series',
          data: [{
            date: new Date('invalid'),
            value: 10
          }],
          options: {}
        }]} />
                </div>
            </div>
        </div>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    gridVisibility: 'x'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Props-based legend using \`showLegend\` and the \`legend\` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    legendInteractive: true,
    chartId: 'default-hidden-series-demo',
    defaultHiddenSeries: ['Great Britain']
  },
  parameters: {
    docs: {
      description: {
        story: 'Great Britain is hidden from the initial render and marked inactive in the legend. Select its legend item to reveal it.'
      }
    }
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);
    return <BarChart {...Default.args} {...args} legend={{
      interactive: legend?.interactive
    }} chartId="composition-bar-chart">
                <BarChart.Legend {...legend} />
            </BarChart>;
  },
  args: {
    ...Default.args
  },
  parameters: {
    docs: {
      description: {
        story: 'Composition API using \`<BarChart.Legend />\` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning.'
      }
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...H.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '40px'
  }}>
            <div>
                <h3>Zero Value Display: Disabled (Default)</h3>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    Zero values are not visually displayed. Bars with zero values have no height.
                </p>
                <div style={{
        width: '600px',
        height: '300px'
      }}>
                    <BarChart data={dataWithZeroValues} showZeroValues={false} withTooltips={true} gridVisibility="x" />
                </div>
            </div>

            <div>
                <h3>Zero Value Display: Enabled</h3>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    Zero values are visually displayed with minimum height bars. The tooltip still shows the
                    actual value of 0, while the bar has a small visual height for better UX.
                </p>
                <div style={{
        width: '600px',
        height: '300px'
      }}>
                    <BarChart data={dataWithZeroValues} showZeroValues={true} withTooltips={true} gridVisibility="x" />
                </div>
            </div>

            <div>
                <h3>Small Chart Height (100px)</h3>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    Zero-value bars remain visible even in small charts. The minimum pixel height ensures bars
                    are at least 2 pixels tall regardless of chart dimensions.
                </p>
                <div style={{
        width: '600px',
        height: '100px',
        border: '1px solid #e0e0e0'
      }}>
                    <BarChart data={dataWithZeroValues} showZeroValues={true} withTooltips={true} gridVisibility="x" />
                </div>
            </div>
        </div>,
  args: {
    containerHeight: '1600px' // Extra height to demonstrate zero-value bars in small chart height scenario
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights. Zero-value bars remain visible even in small chart heights.'
      }
    }
  }
}`,...W.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: siteLaunchedInApril,
    showZeroValues: true
  },
  argTypes: {
    // The series-count control swaps in the medal data, which has no gaps to show.
    seriesCount: {
      table: {
        disable: true
      }
    }
  }
}`,...K.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    legendCollapseGroups: false,
    data: [{
      label: 'Views',
      group: 'views',
      data: [{
        label: 'Mon',
        value: 420
      }, {
        label: 'Tue',
        value: 580
      }, {
        label: 'Wed',
        value: 310
      }, {
        label: 'Thu',
        value: 750
      }, {
        label: 'Fri',
        value: 640
      }]
    }, {
      label: 'Views — previous',
      group: 'views',
      options: {
        type: 'comparison' as const
      },
      data: [{
        label: 'Mon',
        value: 510
      }, {
        label: 'Tue',
        value: 490
      }, {
        label: 'Wed',
        value: 430
      }, {
        label: 'Thu',
        value: 620
      }, {
        label: 'Fri',
        value: 700
      }]
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'One primary series paired with a \`type: "comparison"\` series sharing the same \`group\`. The comparison series renders as a translucent (50% opacity) shadow bar at the standard slot width, behind a primary bar narrowed to 60% — so it reads as a shadow peeking around the current period. \`legend.collapseGroups\` is off here, the default, so each series keeps its own legend item; turn the \`legendCollapseGroups\` control on to fold the pair into a single **Views** item.'
      }
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    legendInteractive: true,
    legendCollapseGroups: true,
    data: [{
      label: 'Views',
      group: 'views',
      data: [{
        label: 'Mon',
        value: 420
      }, {
        label: 'Tue',
        value: 580
      }, {
        label: 'Wed',
        value: 310
      }, {
        label: 'Thu',
        value: 750
      }, {
        label: 'Fri',
        value: 640
      }]
    }, {
      label: 'Views — previous',
      group: 'views',
      options: {
        type: 'comparison' as const
      },
      data: [{
        label: 'Mon',
        value: 510
      }, {
        label: 'Tue',
        value: 490
      }, {
        label: 'Wed',
        value: 430
      }, {
        label: 'Thu',
        value: 620
      }, {
        label: 'Fri',
        value: 700
      }]
    }, {
      label: 'Visitors',
      group: 'visitors',
      data: [{
        label: 'Mon',
        value: 280
      }, {
        label: 'Tue',
        value: 390
      }, {
        label: 'Wed',
        value: 220
      }, {
        label: 'Thu',
        value: 500
      }, {
        label: 'Fri',
        value: 430
      }]
    }, {
      label: 'Visitors — previous',
      group: 'visitors',
      options: {
        type: 'comparison' as const
      },
      data: [{
        label: 'Mon',
        value: 340
      }, {
        label: 'Tue',
        value: 320
      }, {
        label: 'Wed',
        value: 290
      }, {
        label: 'Thu',
        value: 410
      }, {
        label: 'Fri',
        value: 460
      }]
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Two groups (\`views\` and \`visitors\`) rendered side by side, each paired with its own \`type: "comparison"\` series. Each group\\'s standard-width shadow bar sits behind its 60%-width primary bar, with clear gaps preserved between groups — confirming comparison mode composes correctly with grouped bar layouts. With \`legend.collapseGroups\` each group is a single legend item (Views, Visitors), and because \`legend.interactive\` is also on, clicking one toggles both its current and previous-period series at once. Turn the \`legendCollapseGroups\` control off to get one item per series, each toggling alone.'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    containerWidth: '900px',
    containerHeight: '400px',
    resize: 'none'
  },
  render: () => <div style={{
    display: 'grid',
    gap: '32px',
    gridTemplateColumns: 'repeat(2, 380px)'
  }}>
            <div>
                <h3 style={{
        marginBottom: '4px'
      }}>Default — labels only</h3>
                <p style={{
        marginBottom: '12px',
        color: '#666'
      }}>
                    Both roles resolve to <code>none</code>.
                </p>
                <BarChart width={380} height={220} data={[medalCountsData[0]]} gridVisibility="x" />
            </div>
            <div style={{
      '--a8c-charts-color-axis-y': '#3858e9',
      '--a8c-charts-color-tick-y': '#cc1818'
    } as React.CSSProperties}>
                <h3 style={{
        marginBottom: '4px'
      }}>Painted</h3>
                <p style={{
        marginBottom: '12px',
        color: '#666'
      }}>Axis blue, tick marks red.</p>
                <BarChart width={380} height={220} data={[medalCountsData[0]]} gridVisibility="x" />
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Each axis has its own pair of catalog roles, set in CSS anywhere inside the provider tree. The y pair resolves to \`none\` by default, which is what leaves that axis carrying tick labels and nothing else; declaring either one paints that part. The x pair — \`--a8c-charts-color-axis-x\` and \`--a8c-charts-color-tick-x\` — is untouched here, which is why the x axis is identical in both charts. Nothing reaches any of these through the \`theme\` prop; colors are CSS.'
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '40px'
  }}>
            <div>
                <h3>Without labelOverflow (Default - Labels Overlap)</h3>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    Default behavior: long labels overlap and become unreadable at narrow widths.
                </p>
                <div style={{
        width: '350px',
        height: '250px',
        border: '1px solid #e0e0e0'
      }}>
                    <BarChart data={longLabelData} withTooltips={true} gridVisibility="x" />
                </div>
            </div>
            <div>
                <h3>With labelOverflow: &apos;ellipsis&apos; (Labels Truncated)</h3>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    With <code>labelOverflow: &apos;ellipsis&apos;</code>, labels are truncated to fit the
                    available bandwidth. <strong>Hover over a label to see the full text.</strong>
                </p>
                <div style={{
        width: '350px',
        height: '250px',
        border: '1px solid #e0e0e0'
      }}>
                    <BarChart data={longLabelData} withTooltips={true} gridVisibility="x" options={{
          axis: {
            x: {
              labelOverflow: 'ellipsis'
            }
          }
        }} />
                </div>
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: "Demonstrates the \`labelOverflow: 'ellipsis'\` option that truncates long axis labels to fit the available bandwidth. The full label text is shown on hover via a native tooltip. This is useful for narrow widget contexts where space is limited."
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`ForcedColors`,`FixedDimensions`,`AspectRatio`,`SingleSeries`,`PerPointColors`,`BandHighlight`,`BesideTooltip`,`TimeSeries`,`TimeAxisTickFormats`,`TimeAxisTickResolution`,`WithPatterns`,`Animation`,`ErrorStates`,`SmartFormatting`,`WithLegend`,`WithDefaultHiddenSeries`,`WithCompositionLegend`,`HorizontalBarChart`,`ZeroValueComparison`,`BucketsWithNoData`,`ComparisonSingle`,`ComparisonMulti`,`PaintedYAxis`,`LabelOverflowEllipsis`]}));$();export{I as Animation,m as AspectRatio,_ as BandHighlight,v as BesideTooltip,K as BucketsWithNoData,Y as ComparisonMulti,J as ComparisonSingle,d as Default,L as ErrorStates,p as FixedDimensions,f as ForcedColors,H as HorizontalBarChart,Z as LabelOverflowEllipsis,X as PaintedYAxis,g as PerPointColors,h as SingleSeries,R as SmartFormatting,N as TimeAxisTickFormats,P as TimeAxisTickResolution,y as TimeSeries,V as WithCompositionLegend,B as WithDefaultHiddenSeries,z as WithLegend,F as WithPatterns,W as ZeroValueComparison,Q as __namedExportsOrder,u as default,$ as n,oe as t};