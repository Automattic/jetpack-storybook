import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{c as r,r as i,s as a,t as o}from"./chart-decorator-B1QyFBzV.js";import{i as s,t as c}from"./legend-config-BJNKT_wW.js";import{_ as l,p as u,w as d}from"./sample-data-Cx3-uFO8.js";import{t as f}from"./stories-DaMFnKt7.js";import{n as p,r as ee}from"./bar-chart-BumwhfyL.js";var m=e({Animation:()=>R,AspectRatio:()=>y,ComparisonMulti:()=>Y,ComparisonSingle:()=>J,Default:()=>_,ErrorStates:()=>z,FixedDimensions:()=>v,HorizontalBarChart:()=>W,LabelOverflowEllipsis:()=>Z,PaintedYAxis:()=>X,SingleSeries:()=>b,SmartFormatting:()=>B,TimeAxisTickFormats:()=>F,TimeAxisTickResolution:()=>I,TimeSeries:()=>x,WithCompositionLegend:()=>U,WithDefaultHiddenSeries:()=>H,WithLegend:()=>V,WithPatterns:()=>L,ZeroValueComparison:()=>K,__namedExportsOrder:()=>Q,default:()=>g}),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{f(),ee(),h=n(),g={title:`JS Packages/Charts Library/Charts/Bar Chart`,component:p,parameters:{layout:`centered`},decorators:[o],argTypes:{...i,...r,...s,orientation:{control:{type:`radio`},options:[`vertical`,`horizontal`],description:`Bar orientation`,table:{category:`Visual Style`}},gridVisibility:{control:{type:`radio`},options:[`none`,`x`,`y`,`both`],description:`Grid line visibility`,table:{category:`Visual Style`}},seriesCount:{control:{type:`radio`},options:[`single`,`multiple`,`many`],description:`Number of data series`,table:{category:`Data`}},withPatterns:{control:`boolean`,description:`Use patterns for bars`,table:{category:`Visual Style`}}},render:e=>{let{seriesCount:t,...n}=e,r=c(e),i=n.data;return t===`single`?i=[l[0]]:t===`multiple`?i=[l[0],l[1],l[2]]:t===`many`&&(i=l),(0,h.jsx)(p,{...n,legend:r,data:i})}},_={args:{...a,withTooltips:!0,data:[l[0],l[1],l[2]],gridVisibility:`x`,maxWidth:1200,resizeDebounceTime:300}},v={args:{..._.args,width:600,height:300}},y={args:{..._.args,aspectRatio:.3}},b={args:{..._.args,data:[l[0]]},parameters:{docs:{description:{story:`Bar chart with a single data series.`}}}},x={args:{..._.args,data:[{...d[0],label:`Data with dateString and date`,data:[...d[0].data,{dateString:`2024-01-31`,value:2230},{dateString:`2024-02-01`,value:2580},{date:new Date(`2024-02-02 00:00:00`),value:3500},{dateString:`2024-02-03 00:00:00`,value:1500},{dateString:`2024-02-04`,value:2500},{dateString:`2024-02-05 00:00`,value:3e3}]}],options:{axis:{x:{tickFormat:e=>new Date(e).toLocaleDateString(`en-US`,{dateStyle:`short`})}}}},parameters:{docs:{description:{story:`Bar chart with a time series.`}}}},S=e=>[{label:`Views`,data:e.map(([e,t])=>({date:e,value:t})),options:{}}],C=Array.from({length:24},(e,t)=>[new Date(2026,7,2,t),Math.round(60+40*Math.sin(t/3.5))]),w=Array.from({length:30},(e,t)=>[new Date(2026,6,1+t),Math.round(60+40*Math.sin(t/4))]),T=Array.from({length:48},(e,t)=>[new Date(2026,7,2,t),Math.round(60+40*Math.sin(t/3.5))]),E=Array.from({length:168},(e,t)=>[new Date(2026,7,2,t),Math.round(60+40*Math.sin(t/3.5))]),D=Array.from({length:13},(e,t)=>[new Date(2025,7+t,1),Math.round(60+40*Math.sin(t/2))]),O=Array.from({length:36},(e,t)=>[new Date(2023,6+t,1),Math.round(60+40*Math.sin(t/2))]),k=Array.from({length:30},(e,t)=>[new Date(2023,3+t,1),Math.round(60+40*Math.sin(t/2))]),A=[72,95,58,86].map((e,t)=>[new Date(2023+t,0,1),e]),j=S([[new Date(2026,7,2,13),42]]),M=Array.from({length:8},(e,t)=>[new Date(2026,0,5+t*7),Math.round(60+40*Math.sin(t/2))]),N=({title:e,data:t,options:n})=>(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h3`,{children:e}),(0,h.jsx)(p,{width:460,height:220,withTooltips:!0,data:t,options:n})]}),P={display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(auto-fit, minmax(440px, 1fr))`},F={render:()=>(0,h.jsxs)(`div`,{style:P,children:[(0,h.jsx)(N,{title:`Hourly buckets, single day → hour ticks`,data:S(C)}),(0,h.jsx)(N,{title:`Hourly buckets, two days → hour ticks, date at midnight`,data:S(T)}),(0,h.jsx)(N,{title:`Hourly buckets, a week → hour ticks, every tick at midnight`,data:S(E)}),(0,h.jsx)(N,{title:`Daily buckets → date ticks`,data:S(w)}),(0,h.jsx)(N,{title:`Monthly buckets over a year → month ticks, year at January`,data:S(D)}),(0,h.jsx)(N,{title:`Monthly buckets over three years → month ticks, every tick at January`,data:S(O)}),(0,h.jsx)(N,{title:`Monthly buckets, two and a half years → month ticks, year at January`,data:S(k)}),(0,h.jsx)(N,{title:`Yearly buckets → year ticks`,data:S(A)})]}),args:{containerWidth:`1020px`,containerHeight:`1400px`},parameters:{docs:{description:{story:"Date-based series share the time-axis tick formatter with the line and area charts, on the same data — compare these panels with the line chart's `TimeAxisTickFormats`. Month-or-coarser buckets follow the resolution alone — month names with the year at January, or plain years for yearly buckets — since they carry no day to print at any span. Daily-or-finer buckets narrow with the span: hour ticks within a day, hour ticks dated at midnight for sub-daily data spanning up to a week, calendar dates within a year, and years beyond that. The tick values are chosen rather than sampled: a band scale has no ticks of its own, so picking evenly by index would often skip the very bucket that carries the year or the date. None of the monthly panels starts in January, and all three still name their years, the shortest of them without thinning the axis to reach one; the week-long and three-year panels step whole days and whole years, since at those spans nothing closer together reaches a boundary at all. Hover any bar: the tooltip names that bar's bucket spelled out in full — `August 2026` for a monthly bar, `2026` for a yearly one, never a day the bucket doesn't carry. It always names the bucket's own granularity, so on the daily panel it stays finer than the ticks once a long span coarsens the axis. An explicit `options.axis.x.tickFormat` still overrides."}}}},I={render:()=>(0,h.jsxs)(`div`,{style:P,children:[(0,h.jsx)(N,{title:`Lone hourly bucket, resolution inferred → date tick`,data:j,options:{yScale:{zero:!0}}}),(0,h.jsx)(N,{title:`Same bar, tickResolution: 'hour' → hour tick`,data:j,options:{yScale:{zero:!0},axis:{x:{tickResolution:`hour`}}}}),(0,h.jsx)(N,{title:`Weekly buckets, tickResolution: 'week' → date ticks, 'Week of' tooltips`,data:S(M),options:{axis:{x:{tickResolution:`week`}}}})]}),args:{containerWidth:`1020px`,containerHeight:`700px`},parameters:{docs:{description:{story:"When the caller already knows the data's bucket resolution — e.g. from a granularity selector — `options.axis.x.tickResolution` declares it and the tick formatter derives the format from it instead of inferring the resolution from point spacing. Inference needs at least two points, so a single-bucket series always falls back to date ticks; the declared resolution picks the right format, and the tooltip follows it. `'week'` is the other case that has to be declared: seven-day spacing is indistinguishable from sparse daily data, so undeclared weekly buckets are read as daily and their tooltips name a single day rather than `Week of …`. On a horizontal bar chart the hint lives on `axis.y`, which is where the dates are. An explicit `tickFormat` takes precedence over the hint."}}}},L={args:{..._.args,withPatterns:!0,data:_.args.data.map(e=>({...e,data:e.data.filter(e=>parseInt(e.label)>=2016)}))}},R={args:{..._.args,animation:!0}},z={render:()=>(0,h.jsxs)(`div`,{style:{display:`grid`,gap:`20px`},children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h3`,{children:`Empty Data`}),(0,h.jsx)(`div`,{style:{width:`400px`,height:`300px`},children:(0,h.jsx)(p,{data:[]})})]}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h3`,{children:`Invalid Data`}),(0,h.jsx)(`div`,{style:{width:`400px`,height:`300px`},children:(0,h.jsx)(p,{data:[{label:`Invalid Series`,data:[{date:new Date(`invalid`),value:10,label:`Invalid Date`},{date:new Date(`2024-01-02`),value:null,label:`Null Value`}],options:{}}]})})]})]})},z.parameters={docs:{description:{story:`Examples of how the bar chart handles various error states including empty data and invalid data.`}}},B={args:{withTooltips:!0,data:u,gridVisibility:`x`}},B.parameters={docs:{description:{story:`Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values ≥1B are formatted as "1.23B", ≥1M as "1.2M", ≥1K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.`}}},V={args:{..._.args,showLegend:!0},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},H={args:{..._.args,showLegend:!0,legendInteractive:!0,chartId:`default-hidden-series-demo`,defaultHiddenSeries:[`Great Britain`]},parameters:{docs:{description:{story:`Great Britain is hidden from the initial render and marked inactive in the legend. Select its legend item to reveal it.`}}}},U={render:e=>{let t=c(e);return(0,h.jsx)(p,{..._.args,...e,legend:{interactive:t?.interactive},chartId:`composition-bar-chart`,children:(0,h.jsx)(p.Legend,{...t})})},args:{..._.args},parameters:{docs:{description:{story:"Composition API using `<BarChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},W={args:{..._.args,data:[l[0],l[1],l[2]],orientation:`horizontal`,gridVisibility:`none`}},G=[{group:`United States`,label:`United States`,data:[{label:`1896`,value:0},{label:`1900`,value:0},{label:`1904`,value:2},{label:`1908`,value:1},{label:`1912`,value:3}]},{group:`Great Britain`,label:`Great Britain`,data:[{label:`1896`,value:1},{label:`1900`,value:0},{label:`1904`,value:1},{label:`1908`,value:10},{label:`1912`,value:9}]},{group:`Japan`,label:`Japan`,data:[{label:`1896`,value:2},{label:`1900`,value:1},{label:`1904`,value:2},{label:`1908`,value:1},{label:`1912`,value:2}]}],K={render:()=>(0,h.jsxs)(`div`,{style:{display:`grid`,gap:`40px`},children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h3`,{children:`Zero Value Display: Disabled (Default)`}),(0,h.jsx)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:`Zero values are not visually displayed. Bars with zero values have no height.`}),(0,h.jsx)(`div`,{style:{width:`600px`,height:`300px`},children:(0,h.jsx)(p,{data:G,showZeroValues:!1,withTooltips:!0,gridVisibility:`x`})})]}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h3`,{children:`Zero Value Display: Enabled`}),(0,h.jsx)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:`Zero values are visually displayed with minimum height bars. The tooltip still shows the actual value of 0, while the bar has a small visual height for better UX.`}),(0,h.jsx)(`div`,{style:{width:`600px`,height:`300px`},children:(0,h.jsx)(p,{data:G,showZeroValues:!0,withTooltips:!0,gridVisibility:`x`})})]}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h3`,{children:`Small Chart Height (100px)`}),(0,h.jsx)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:`Zero-value bars remain visible even in small charts. The minimum pixel height ensures bars are at least 2 pixels tall regardless of chart dimensions.`}),(0,h.jsx)(`div`,{style:{width:`600px`,height:`100px`,border:`1px solid #e0e0e0`},children:(0,h.jsx)(p,{data:G,showZeroValues:!0,withTooltips:!0,gridVisibility:`x`})})]})]}),args:{containerHeight:`1600px`},parameters:{docs:{description:{story:`Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights. Zero-value bars remain visible even in small chart heights.`}}}},q=[{group:`sales`,label:`Sales by Channel`,data:[{label:`Organic Search Traffic`,value:12500},{label:`Paid Advertising Campaign`,value:8750},{label:`Social Media Marketing`,value:6250},{label:`Email Newsletter Subscribers`,value:4375},{label:`Direct Website Visitors`,value:3125},{label:`Affiliate Partner Referrals`,value:2500}]}],J={args:{..._.args,showLegend:!0,legendCollapseGroups:!1,data:[{label:`Views`,group:`views`,data:[{label:`Mon`,value:420},{label:`Tue`,value:580},{label:`Wed`,value:310},{label:`Thu`,value:750},{label:`Fri`,value:640}]},{label:`Views — previous`,group:`views`,options:{type:`comparison`},data:[{label:`Mon`,value:510},{label:`Tue`,value:490},{label:`Wed`,value:430},{label:`Thu`,value:620},{label:`Fri`,value:700}]}]},parameters:{docs:{description:{story:'One primary series paired with a `type: "comparison"` series sharing the same `group`. The comparison series renders as a translucent (50% opacity) shadow bar at the standard slot width, behind a primary bar narrowed to 60% — so it reads as a shadow peeking around the current period. `legend.collapseGroups` is off here, the default, so each series keeps its own legend item; turn the `legendCollapseGroups` control on to fold the pair into a single **Views** item.'}}}},Y={args:{..._.args,showLegend:!0,legendInteractive:!0,legendCollapseGroups:!0,data:[{label:`Views`,group:`views`,data:[{label:`Mon`,value:420},{label:`Tue`,value:580},{label:`Wed`,value:310},{label:`Thu`,value:750},{label:`Fri`,value:640}]},{label:`Views — previous`,group:`views`,options:{type:`comparison`},data:[{label:`Mon`,value:510},{label:`Tue`,value:490},{label:`Wed`,value:430},{label:`Thu`,value:620},{label:`Fri`,value:700}]},{label:`Visitors`,group:`visitors`,data:[{label:`Mon`,value:280},{label:`Tue`,value:390},{label:`Wed`,value:220},{label:`Thu`,value:500},{label:`Fri`,value:430}]},{label:`Visitors — previous`,group:`visitors`,options:{type:`comparison`},data:[{label:`Mon`,value:340},{label:`Tue`,value:320},{label:`Wed`,value:290},{label:`Thu`,value:410},{label:`Fri`,value:460}]}]},parameters:{docs:{description:{story:'Two groups (`views` and `visitors`) rendered side by side, each paired with its own `type: "comparison"` series. Each group\'s standard-width shadow bar sits behind its 60%-width primary bar, with clear gaps preserved between groups — confirming comparison mode composes correctly with grouped bar layouts. With `legend.collapseGroups` each group is a single legend item (Views, Visitors), and because `legend.interactive` is also on, clicking one toggles both its current and previous-period series at once. Turn the `legendCollapseGroups` control off to get one item per series, each toggling alone.'}}}},X={args:{containerWidth:`900px`,containerHeight:`400px`,resize:`none`},render:()=>(0,h.jsxs)(`div`,{style:{display:`grid`,gap:`32px`,gridTemplateColumns:`repeat(2, 380px)`},children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h3`,{style:{marginBottom:`4px`},children:`Default — labels only`}),(0,h.jsxs)(`p`,{style:{marginBottom:`12px`,color:`#666`},children:[`Both roles resolve to `,(0,h.jsx)(`code`,{children:`none`}),`.`]}),(0,h.jsx)(p,{width:380,height:220,data:[l[0]],gridVisibility:`x`})]}),(0,h.jsxs)(`div`,{style:{"--a8c-charts-color-axis-y":`#3858e9`,"--a8c-charts-color-tick-y":`#cc1818`},children:[(0,h.jsx)(`h3`,{style:{marginBottom:`4px`},children:`Painted`}),(0,h.jsx)(`p`,{style:{marginBottom:`12px`,color:`#666`},children:`Axis blue, tick marks red.`}),(0,h.jsx)(p,{width:380,height:220,data:[l[0]],gridVisibility:`x`})]})]}),parameters:{docs:{description:{story:"Each axis has its own pair of catalog roles, set in CSS anywhere inside the provider tree. The y pair resolves to `none` by default, which is what leaves that axis carrying tick labels and nothing else; declaring either one paints that part. The x pair — `--a8c-charts-color-axis-x` and `--a8c-charts-color-tick-x` — is untouched here, which is why the x axis is identical in both charts. Nothing reaches any of these through the `theme` prop; colors are CSS."}}}},Z={render:()=>(0,h.jsxs)(`div`,{style:{display:`grid`,gap:`40px`},children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h3`,{children:`Without labelOverflow (Default - Labels Overlap)`}),(0,h.jsx)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:`Default behavior: long labels overlap and become unreadable at narrow widths.`}),(0,h.jsx)(`div`,{style:{width:`350px`,height:`250px`,border:`1px solid #e0e0e0`},children:(0,h.jsx)(p,{data:q,withTooltips:!0,gridVisibility:`x`})})]}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h3`,{children:`With labelOverflow: 'ellipsis' (Labels Truncated)`}),(0,h.jsxs)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:[`With `,(0,h.jsx)(`code`,{children:`labelOverflow: 'ellipsis'`}),`, labels are truncated to fit the available bandwidth. `,(0,h.jsx)(`strong`,{children:`Hover over a label to see the full text.`})]}),(0,h.jsx)(`div`,{style:{width:`350px`,height:`250px`,border:`1px solid #e0e0e0`},children:(0,h.jsx)(p,{data:q,withTooltips:!0,gridVisibility:`x`,options:{axis:{x:{labelOverflow:`ellipsis`}}}})})]})]}),parameters:{docs:{description:{story:"Demonstrates the `labelOverflow: 'ellipsis'` option that truncates long axis labels to fit the available bandwidth. The full label text is shown on hover via a native tooltip. This is useful for narrow widget contexts where space is limited."}}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    withTooltips: true,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    resizeDebounceTime: 300
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 600,
    height: 300
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.3
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
            value: 10,
            label: 'Invalid Date'
          }, {
            date: new Date('2024-01-02'),
            value: null,
            label: 'Null Value'
          }],
          options: {}
        }]} />
                </div>
            </div>
        </div>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    gridVisibility: 'x'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...W.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`FixedDimensions`,`AspectRatio`,`SingleSeries`,`TimeSeries`,`TimeAxisTickFormats`,`TimeAxisTickResolution`,`WithPatterns`,`Animation`,`ErrorStates`,`SmartFormatting`,`WithLegend`,`WithDefaultHiddenSeries`,`WithCompositionLegend`,`HorizontalBarChart`,`ZeroValueComparison`,`ComparisonSingle`,`ComparisonMulti`,`PaintedYAxis`,`LabelOverflowEllipsis`]}));$();export{R as Animation,y as AspectRatio,Y as ComparisonMulti,J as ComparisonSingle,_ as Default,z as ErrorStates,v as FixedDimensions,W as HorizontalBarChart,Z as LabelOverflowEllipsis,X as PaintedYAxis,b as SingleSeries,B as SmartFormatting,F as TimeAxisTickFormats,I as TimeAxisTickResolution,x as TimeSeries,U as WithCompositionLegend,H as WithDefaultHiddenSeries,V as WithLegend,L as WithPatterns,K as ZeroValueComparison,Q as __namedExportsOrder,g as default,$ as n,m as t};