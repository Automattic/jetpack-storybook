import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{c as r,r as i,s as a,t as o}from"./chart-decorator-CR7Psxjf.js";import{i as s,t as c}from"./legend-config-BJNKT_wW.js";import{_ as l,p as u,w as d}from"./sample-data-Cx3-uFO8.js";import{t as f}from"./stories-DNczHwP5.js";import{n as p,r as m}from"./bar-chart-DvoZzs0Z.js";var h=e({Animation:()=>z,AspectRatio:()=>b,ComparisonMulti:()=>X,ComparisonSingle:()=>Y,Default:()=>v,ErrorStates:()=>B,FixedDimensions:()=>y,HorizontalBarChart:()=>G,LabelOverflowEllipsis:()=>Z,SingleSeries:()=>x,SmartFormatting:()=>V,TimeAxisTickFormats:()=>I,TimeAxisTickResolution:()=>L,TimeSeries:()=>S,WithCompositionLegend:()=>W,WithDefaultHiddenSeries:()=>U,WithLegend:()=>H,WithPatterns:()=>R,ZeroValueComparison:()=>q,__namedExportsOrder:()=>Q,default:()=>_}),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{f(),m(),g=n(),_={title:`JS Packages/Charts Library/Charts/Bar Chart`,component:p,parameters:{layout:`centered`},decorators:[o],argTypes:{...i,...r,...s,orientation:{control:{type:`radio`},options:[`vertical`,`horizontal`],description:`Bar orientation`,table:{category:`Visual Style`}},gridVisibility:{control:{type:`radio`},options:[`none`,`x`,`y`,`both`],description:`Grid line visibility`,table:{category:`Visual Style`}},seriesCount:{control:{type:`radio`},options:[`single`,`multiple`,`many`],description:`Number of data series`,table:{category:`Data`}},withPatterns:{control:`boolean`,description:`Use patterns for bars`,table:{category:`Visual Style`}}},render:e=>{let{seriesCount:t,...n}=e,r=c(e),i=n.data;return t===`single`?i=[l[0]]:t===`multiple`?i=[l[0],l[1],l[2]]:t===`many`&&(i=l),(0,g.jsx)(p,{...n,legend:r,data:i})}},v={args:{...a,withTooltips:!0,data:[l[0],l[1],l[2]],gridVisibility:`x`,maxWidth:1200,resizeDebounceTime:300}},y={args:{...v.args,width:600,height:300}},b={args:{...v.args,aspectRatio:.3}},x={args:{...v.args,data:[l[0]]},parameters:{docs:{description:{story:`Bar chart with a single data series.`}}}},S={args:{...v.args,data:[{...d[0],label:`Data with dateString and date`,data:[...d[0].data,{dateString:`2024-01-31`,value:2230},{dateString:`2024-02-01`,value:2580},{date:new Date(`2024-02-02 00:00:00`),value:3500},{dateString:`2024-02-03 00:00:00`,value:1500},{dateString:`2024-02-04`,value:2500},{dateString:`2024-02-05 00:00`,value:3e3}]}],options:{axis:{x:{tickFormat:e=>new Date(e).toLocaleDateString(`en-US`,{dateStyle:`short`})}}}},parameters:{docs:{description:{story:`Bar chart with a time series.`}}}},C=e=>[{label:`Views`,data:e.map(([e,t])=>({date:e,value:t})),options:{}}],w=Array.from({length:24},(e,t)=>[new Date(2026,7,2,t),Math.round(60+40*Math.sin(t/3.5))]),T=Array.from({length:30},(e,t)=>[new Date(2026,6,1+t),Math.round(60+40*Math.sin(t/4))]),E=Array.from({length:48},(e,t)=>[new Date(2026,7,2,t),Math.round(60+40*Math.sin(t/3.5))]),D=Array.from({length:168},(e,t)=>[new Date(2026,7,2,t),Math.round(60+40*Math.sin(t/3.5))]),O=Array.from({length:13},(e,t)=>[new Date(2025,7+t,1),Math.round(60+40*Math.sin(t/2))]),k=Array.from({length:36},(e,t)=>[new Date(2023,6+t,1),Math.round(60+40*Math.sin(t/2))]),A=Array.from({length:30},(e,t)=>[new Date(2023,3+t,1),Math.round(60+40*Math.sin(t/2))]),j=[72,95,58,86].map((e,t)=>[new Date(2023+t,0,1),e]),M=C([[new Date(2026,7,2,13),42]]),N=Array.from({length:8},(e,t)=>[new Date(2026,0,5+t*7),Math.round(60+40*Math.sin(t/2))]),P=({title:e,data:t,options:n})=>(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h3`,{children:e}),(0,g.jsx)(p,{width:460,height:220,withTooltips:!0,data:t,options:n})]}),F={display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(auto-fit, minmax(440px, 1fr))`},I={render:()=>(0,g.jsxs)(`div`,{style:F,children:[(0,g.jsx)(P,{title:`Hourly buckets, single day → hour ticks`,data:C(w)}),(0,g.jsx)(P,{title:`Hourly buckets, two days → hour ticks, date at midnight`,data:C(E)}),(0,g.jsx)(P,{title:`Hourly buckets, a week → hour ticks, every tick at midnight`,data:C(D)}),(0,g.jsx)(P,{title:`Daily buckets → date ticks`,data:C(T)}),(0,g.jsx)(P,{title:`Monthly buckets over a year → month ticks, year at January`,data:C(O)}),(0,g.jsx)(P,{title:`Monthly buckets over three years → month ticks, every tick at January`,data:C(k)}),(0,g.jsx)(P,{title:`Monthly buckets, two and a half years → month ticks, year at January`,data:C(A)}),(0,g.jsx)(P,{title:`Yearly buckets → year ticks`,data:C(j)})]}),args:{containerWidth:`1020px`,containerHeight:`1400px`},parameters:{docs:{description:{story:"Date-based series share the time-axis tick formatter with the line and area charts, on the same data — compare these panels with the line chart's `TimeAxisTickFormats`. Month-or-coarser buckets follow the resolution alone — month names with the year at January, or plain years for yearly buckets — since they carry no day to print at any span. Daily-or-finer buckets narrow with the span: hour ticks within a day, hour ticks dated at midnight for sub-daily data spanning up to a week, calendar dates within a year, and years beyond that. The tick values are chosen rather than sampled: a band scale has no ticks of its own, so picking evenly by index would often skip the very bucket that carries the year or the date. None of the monthly panels starts in January, and all three still name their years, the shortest of them without thinning the axis to reach one; the week-long and three-year panels step whole days and whole years, since at those spans nothing closer together reaches a boundary at all. Hover any bar: the tooltip names that bar's bucket spelled out in full — `August 2026` for a monthly bar, `2026` for a yearly one, never a day the bucket doesn't carry. It always names the bucket's own granularity, so on the daily panel it stays finer than the ticks once a long span coarsens the axis. An explicit `options.axis.x.tickFormat` still overrides."}}}},L={render:()=>(0,g.jsxs)(`div`,{style:F,children:[(0,g.jsx)(P,{title:`Lone hourly bucket, resolution inferred → date tick`,data:M,options:{yScale:{zero:!0}}}),(0,g.jsx)(P,{title:`Same bar, tickResolution: 'hour' → hour tick`,data:M,options:{yScale:{zero:!0},axis:{x:{tickResolution:`hour`}}}}),(0,g.jsx)(P,{title:`Weekly buckets, tickResolution: 'week' → date ticks, 'Week of' tooltips`,data:C(N),options:{axis:{x:{tickResolution:`week`}}}})]}),args:{containerWidth:`1020px`,containerHeight:`700px`},parameters:{docs:{description:{story:"When the caller already knows the data's bucket resolution — e.g. from a granularity selector — `options.axis.x.tickResolution` declares it and the tick formatter derives the format from it instead of inferring the resolution from point spacing. Inference needs at least two points, so a single-bucket series always falls back to date ticks; the declared resolution picks the right format, and the tooltip follows it. `'week'` is the other case that has to be declared: seven-day spacing is indistinguishable from sparse daily data, so undeclared weekly buckets are read as daily and their tooltips name a single day rather than `Week of …`. On a horizontal bar chart the hint lives on `axis.y`, which is where the dates are. An explicit `tickFormat` takes precedence over the hint."}}}},R={args:{...v.args,withPatterns:!0,data:v.args.data.map(e=>({...e,data:e.data.filter(e=>parseInt(e.label)>=2016)}))}},z={args:{...v.args,animation:!0}},B={render:()=>(0,g.jsxs)(`div`,{style:{display:`grid`,gap:`20px`},children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h3`,{children:`Empty Data`}),(0,g.jsx)(`div`,{style:{width:`400px`,height:`300px`},children:(0,g.jsx)(p,{data:[]})})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h3`,{children:`Invalid Data`}),(0,g.jsx)(`div`,{style:{width:`400px`,height:`300px`},children:(0,g.jsx)(p,{data:[{label:`Invalid Series`,data:[{date:new Date(`invalid`),value:10,label:`Invalid Date`},{date:new Date(`2024-01-02`),value:null,label:`Null Value`}],options:{}}]})})]})]})},B.parameters={docs:{description:{story:`Examples of how the bar chart handles various error states including empty data and invalid data.`}}},V={args:{withTooltips:!0,data:u,gridVisibility:`x`}},V.parameters={docs:{description:{story:`Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values ≥1B are formatted as "1.23B", ≥1M as "1.2M", ≥1K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.`}}},H={args:{...v.args,showLegend:!0},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},U={args:{...v.args,showLegend:!0,legendInteractive:!0,chartId:`default-hidden-series-demo`,defaultHiddenSeries:[`Great Britain`]},parameters:{docs:{description:{story:`Great Britain is hidden from the initial render and marked inactive in the legend. Select its legend item to reveal it.`}}}},W={render:e=>{let t=c(e);return(0,g.jsx)(p,{...v.args,...e,legend:{interactive:t?.interactive},chartId:`composition-bar-chart`,children:(0,g.jsx)(p.Legend,{...t})})},args:{...v.args},parameters:{docs:{description:{story:"Composition API using `<BarChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},G={args:{...v.args,data:[l[0],l[1],l[2]],orientation:`horizontal`,gridVisibility:`none`}},K=[{group:`United States`,label:`United States`,data:[{label:`1896`,value:0},{label:`1900`,value:0},{label:`1904`,value:2},{label:`1908`,value:1},{label:`1912`,value:3}]},{group:`Great Britain`,label:`Great Britain`,data:[{label:`1896`,value:1},{label:`1900`,value:0},{label:`1904`,value:1},{label:`1908`,value:10},{label:`1912`,value:9}]},{group:`Japan`,label:`Japan`,data:[{label:`1896`,value:2},{label:`1900`,value:1},{label:`1904`,value:2},{label:`1908`,value:1},{label:`1912`,value:2}]}],q={render:()=>(0,g.jsxs)(`div`,{style:{display:`grid`,gap:`40px`},children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h3`,{children:`Zero Value Display: Disabled (Default)`}),(0,g.jsx)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:`Zero values are not visually displayed. Bars with zero values have no height.`}),(0,g.jsx)(`div`,{style:{width:`600px`,height:`300px`},children:(0,g.jsx)(p,{data:K,showZeroValues:!1,withTooltips:!0,gridVisibility:`x`})})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h3`,{children:`Zero Value Display: Enabled`}),(0,g.jsx)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:`Zero values are visually displayed with minimum height bars. The tooltip still shows the actual value of 0, while the bar has a small visual height for better UX.`}),(0,g.jsx)(`div`,{style:{width:`600px`,height:`300px`},children:(0,g.jsx)(p,{data:K,showZeroValues:!0,withTooltips:!0,gridVisibility:`x`})})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h3`,{children:`Small Chart Height (100px)`}),(0,g.jsx)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:`Zero-value bars remain visible even in small charts. The minimum pixel height ensures bars are at least 2 pixels tall regardless of chart dimensions.`}),(0,g.jsx)(`div`,{style:{width:`600px`,height:`100px`,border:`1px solid #e0e0e0`},children:(0,g.jsx)(p,{data:K,showZeroValues:!0,withTooltips:!0,gridVisibility:`x`})})]})]}),args:{containerHeight:`1600px`},parameters:{docs:{description:{story:`Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights. Zero-value bars remain visible even in small chart heights.`}}}},J=[{group:`sales`,label:`Sales by Channel`,data:[{label:`Organic Search Traffic`,value:12500},{label:`Paid Advertising Campaign`,value:8750},{label:`Social Media Marketing`,value:6250},{label:`Email Newsletter Subscribers`,value:4375},{label:`Direct Website Visitors`,value:3125},{label:`Affiliate Partner Referrals`,value:2500}]}],Y={args:{...v.args,showLegend:!0,legendCollapseGroups:!1,data:[{label:`Views`,group:`views`,data:[{label:`Mon`,value:420},{label:`Tue`,value:580},{label:`Wed`,value:310},{label:`Thu`,value:750},{label:`Fri`,value:640}]},{label:`Views — previous`,group:`views`,options:{type:`comparison`},data:[{label:`Mon`,value:510},{label:`Tue`,value:490},{label:`Wed`,value:430},{label:`Thu`,value:620},{label:`Fri`,value:700}]}]},parameters:{docs:{description:{story:'One primary series paired with a `type: "comparison"` series sharing the same `group`. The comparison series renders as a translucent (50% opacity) shadow bar at the standard slot width, behind a primary bar narrowed to 60% — so it reads as a shadow peeking around the current period. `legend.collapseGroups` is off here, the default, so each series keeps its own legend item; turn the `legendCollapseGroups` control on to fold the pair into a single **Views** item.'}}}},X={args:{...v.args,showLegend:!0,legendInteractive:!0,legendCollapseGroups:!0,data:[{label:`Views`,group:`views`,data:[{label:`Mon`,value:420},{label:`Tue`,value:580},{label:`Wed`,value:310},{label:`Thu`,value:750},{label:`Fri`,value:640}]},{label:`Views — previous`,group:`views`,options:{type:`comparison`},data:[{label:`Mon`,value:510},{label:`Tue`,value:490},{label:`Wed`,value:430},{label:`Thu`,value:620},{label:`Fri`,value:700}]},{label:`Visitors`,group:`visitors`,data:[{label:`Mon`,value:280},{label:`Tue`,value:390},{label:`Wed`,value:220},{label:`Thu`,value:500},{label:`Fri`,value:430}]},{label:`Visitors — previous`,group:`visitors`,options:{type:`comparison`},data:[{label:`Mon`,value:340},{label:`Tue`,value:320},{label:`Wed`,value:290},{label:`Thu`,value:410},{label:`Fri`,value:460}]}]},parameters:{docs:{description:{story:'Two groups (`views` and `visitors`) rendered side by side, each paired with its own `type: "comparison"` series. Each group\'s standard-width shadow bar sits behind its 60%-width primary bar, with clear gaps preserved between groups — confirming comparison mode composes correctly with grouped bar layouts. With `legend.collapseGroups` each group is a single legend item (Views, Visitors), and because `legend.interactive` is also on, clicking one toggles both its current and previous-period series at once. Turn the `legendCollapseGroups` control off to get one item per series, each toggling alone.'}}}},Z={render:()=>(0,g.jsxs)(`div`,{style:{display:`grid`,gap:`40px`},children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h3`,{children:`Without labelOverflow (Default - Labels Overlap)`}),(0,g.jsx)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:`Default behavior: long labels overlap and become unreadable at narrow widths.`}),(0,g.jsx)(`div`,{style:{width:`350px`,height:`250px`,border:`1px solid #e0e0e0`},children:(0,g.jsx)(p,{data:J,withTooltips:!0,gridVisibility:`x`})})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h3`,{children:`With labelOverflow: 'ellipsis' (Labels Truncated)`}),(0,g.jsxs)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:[`With `,(0,g.jsx)(`code`,{children:`labelOverflow: 'ellipsis'`}),`, labels are truncated to fit the available bandwidth. `,(0,g.jsx)(`strong`,{children:`Hover over a label to see the full text.`})]}),(0,g.jsx)(`div`,{style:{width:`350px`,height:`250px`,border:`1px solid #e0e0e0`},children:(0,g.jsx)(p,{data:J,withTooltips:!0,gridVisibility:`x`,options:{axis:{x:{labelOverflow:`ellipsis`}}}})})]})]}),parameters:{docs:{description:{story:"Demonstrates the `labelOverflow: 'ellipsis'` option that truncates long axis labels to fit the available bandwidth. The full label text is shown on hover via a native tooltip. This is useful for narrow widget contexts where space is limited."}}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    withTooltips: true,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    resizeDebounceTime: 300
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 600,
    height: 300
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.3
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    gridVisibility: 'x'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...G.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`FixedDimensions`,`AspectRatio`,`SingleSeries`,`TimeSeries`,`TimeAxisTickFormats`,`TimeAxisTickResolution`,`WithPatterns`,`Animation`,`ErrorStates`,`SmartFormatting`,`WithLegend`,`WithDefaultHiddenSeries`,`WithCompositionLegend`,`HorizontalBarChart`,`ZeroValueComparison`,`ComparisonSingle`,`ComparisonMulti`,`LabelOverflowEllipsis`]}));$();export{z as Animation,b as AspectRatio,X as ComparisonMulti,Y as ComparisonSingle,v as Default,B as ErrorStates,y as FixedDimensions,G as HorizontalBarChart,Z as LabelOverflowEllipsis,x as SingleSeries,V as SmartFormatting,I as TimeAxisTickFormats,L as TimeAxisTickResolution,S as TimeSeries,W as WithCompositionLegend,U as WithDefaultHiddenSeries,H as WithLegend,R as WithPatterns,q as ZeroValueComparison,Q as __namedExportsOrder,_ as default,$ as n,h as t};