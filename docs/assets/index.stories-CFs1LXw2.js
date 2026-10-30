import{n as e,r as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./jsx-runtime-CFwixLRt.js";import{c as r,l as i,r as ee,t as te}from"./chart-decorator-CIIeCOg8.js";import{i as ne,t as a}from"./legend-config-bcak0szs.js";import{D as re,O as ie,P as ae,b as o,g as oe,k as se}from"./sample-data-BM1OOuQd.js";import{t as ce}from"./stories-BYrYPijB.js";import{n as s,r as le}from"./bar-chart-Dm3xX1Hl.js";var ue=t({Animation:()=>A,AspectRatio:()=>h,BandHighlight:()=>y,BarRadius:()=>Y,BesideTooltip:()=>b,BucketsWithNoData:()=>z,ComparisonMulti:()=>W,ComparisonMultiOverlap:()=>G,ComparisonSingle:()=>U,DatumClasses:()=>v,Default:()=>f,ErrorStates:()=>j,FixedDimensions:()=>m,ForcedColors:()=>p,GroupedTooltipWithMissingDates:()=>Q,HorizontalBarChart:()=>I,LabelOverflowEllipsis:()=>X,PaintedYAxis:()=>K,PerPointColors:()=>_,SingleSeries:()=>g,SmallWholeNumberRange:()=>V,SmartFormatting:()=>M,SteadyValues:()=>B,TimeAxisTickFormats:()=>D,TimeAxisTickResolution:()=>O,TimeSeries:()=>x,WithCompositionLegend:()=>F,WithDefaultHiddenSeries:()=>P,WithLegend:()=>N,WithPatterns:()=>k,ZeroValueComparison:()=>R,__namedExportsOrder:()=>$,default:()=>d}),c,l,de,u,d,f,p,m,h,g,_,v,y,b,x,S,fe,pe,me,he,ge,_e,ve,C,w,ye,T,E,D,O,k,A,j,M,N,P,F,I,L,R,be,z,B,xe,V,H,U,W,Se,Ce,G,K,q,J,Y,X,we,Z,Te,Ee,Q,$,De=e((()=>{ce(),le(),c=n(),{expect:l,waitFor:de,within:u}=__STORYBOOK_MODULE_TEST__,d={title:`JS Packages/Charts Library/Charts/Bar Chart`,component:s,parameters:{layout:`centered`},decorators:[te],argTypes:{...ee,...i,...ne,orientation:{control:{type:`radio`},options:[`vertical`,`horizontal`],description:`Bar orientation`,table:{category:`Visual Style`}},layout:{control:{type:`radio`},options:[`grouped`,`overlap`],description:`How series share a category`,table:{category:`Visual Style`}},gridVisibility:{control:{type:`radio`},options:[`none`,`x`,`y`,`both`],description:`Grid line visibility`,table:{category:`Visual Style`}},seriesCount:{control:{type:`radio`},options:[`single`,`multiple`,`many`],description:`Number of data series`,table:{category:`Data`}},withPatterns:{control:`boolean`,description:`Use patterns for bars`,table:{category:`Visual Style`}}},render:e=>{let{seriesCount:t,...n}=e,r=a(e),i=n.data;return t===`single`?i=[o[0]]:t===`multiple`?i=[o[0],o[1],o[2]]:t===`many`&&(i=o),(0,c.jsx)(s,{...n,legend:r,data:i})}},f={args:{...r,withTooltips:!0,data:[o[0],o[1],o[2]],gridVisibility:`x`,maxWidth:1200,resizeDebounceTime:300}},p={...f,parameters:{docs:{description:{story:`In Chrome DevTools, open Rendering and set "Emulate CSS media feature forced-colors" to "active". Set prefers-color-scheme to dark, then light: both axes should follow the system text color. This uses the same axis catalog roles as Line Chart, Area Chart, and Bar List Chart.`}}}},m={args:{...f.args,width:600,height:300}},h={args:{...f.args,aspectRatio:.3}},g={args:{...f.args,data:[o[0]]},parameters:{docs:{description:{story:`Bar chart with a single data series.`}}}},_={args:{...g.args,options:{yScale:{zero:!0}},data:[{label:`Daily score`,data:[{label:`Monday`,value:92,color:`var(--a8c-charts-color-trend-up)`},{label:`Tuesday`,value:35,color:`var(--a8c-charts-color-trend-down)`},{label:`Wednesday`,value:88,color:`var(--a8c-charts-color-trend-up)`},{label:`Thursday`,value:65}]}]},parameters:{docs:{description:{story:`Point colors override the series fill. Thursday has no override and keeps the series color. Enable patterns to check that they take precedence.`}}}},v={args:{width:600,height:300,data:[{label:`Scores`,data:[{label:`Empty`,value:0},{label:`Recorded`,value:80}]}],barClassName:e=>e.value===0?`bar-story-empty`:void 0,withTooltips:!0,tooltipStyle:{padding:`var(--wpds-dimension-padding-lg)`}},parameters:{docs:{description:{story:`Use per-datum classes to keep zero-value marks visible and tooltipStyle to customize the tooltip box.`}}},render:e=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`style`,{children:`.bar-story-empty { height: var(--wpds-dimension-gap-xs); translate: 0 calc(-1 * var(--wpds-dimension-gap-xs)); }`}),(0,c.jsx)(s,{...e})]})},y={args:{...g.args,withBandHighlight:!0},parameters:{docs:{description:{story:`Hover a bar or focus the chart and use arrow keys to highlight its band across the plot. Escape clears the keyboard selection and its tooltip; a hover highlight remains.`}}}},b={args:{...y.args,tooltipPlacement:`beside`,tooltipAnchorTop:40},argTypes:{tooltipPlacement:{control:`radio`,options:[`auto`,`beside`]},tooltipAnchorTop:{control:`number`}},parameters:{docs:{description:{story:`Hover the first and last bars to check horizontal flipping. The tooltip stays at the SVG top anchor, subject to clipping bounds. Change tooltipAnchorTop to move that anchor, including above the SVG with negative values.`}}}},x={args:{...f.args,data:[{...se[0],label:`Data with dateString and date`,data:[...se[0].data,{dateString:`2024-01-31`,value:2230},{dateString:`2024-02-01`,value:2580},{date:new Date(`2024-02-02 00:00:00`),value:3500},{dateString:`2024-02-03 00:00:00`,value:1500},{dateString:`2024-02-04`,value:2500},{dateString:`2024-02-05 00:00`,value:3e3}]}],options:{axis:{x:{tickFormat:e=>new Date(e).toLocaleDateString(`en-US`,{dateStyle:`short`})}}}},parameters:{docs:{description:{story:`Bar chart with a time series.`}}}},S=e=>[{label:`Views`,data:e.map(([e,t])=>({date:e,value:t})),options:{}}],fe=Array.from({length:24},(e,t)=>[new Date(2026,7,2,t),Math.round(60+40*Math.sin(t/3.5))]),pe=Array.from({length:30},(e,t)=>[new Date(2026,6,1+t),Math.round(60+40*Math.sin(t/4))]),me=Array.from({length:48},(e,t)=>[new Date(2026,7,2,t),Math.round(60+40*Math.sin(t/3.5))]),he=Array.from({length:168},(e,t)=>[new Date(2026,7,2,t),Math.round(60+40*Math.sin(t/3.5))]),ge=Array.from({length:13},(e,t)=>[new Date(2025,7+t,1),Math.round(60+40*Math.sin(t/2))]),_e=Array.from({length:36},(e,t)=>[new Date(2023,6+t,1),Math.round(60+40*Math.sin(t/2))]),ve=Array.from({length:30},(e,t)=>[new Date(2023,3+t,1),Math.round(60+40*Math.sin(t/2))]),C=[72,95,58,86].map((e,t)=>[new Date(2023+t,0,1),e]),w=S([[new Date(2026,7,2,13),42]]),ye=Array.from({length:8},(e,t)=>[new Date(2026,0,5+t*7),Math.round(60+40*Math.sin(t/2))]),T=({title:e,data:t,options:n})=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h3`,{children:e}),(0,c.jsx)(s,{width:460,height:220,withTooltips:!0,data:t,options:n})]}),E={display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(auto-fit, minmax(440px, 1fr))`},D={render:()=>(0,c.jsxs)(`div`,{style:E,children:[(0,c.jsx)(T,{title:`Hourly buckets, single day → hour ticks`,data:S(fe)}),(0,c.jsx)(T,{title:`Hourly buckets, two days → hour ticks, date at midnight`,data:S(me)}),(0,c.jsx)(T,{title:`Hourly buckets, a week → hour ticks, every tick at midnight`,data:S(he)}),(0,c.jsx)(T,{title:`Daily buckets → date ticks`,data:S(pe)}),(0,c.jsx)(T,{title:`Monthly buckets over a year → month ticks, year at January`,data:S(ge)}),(0,c.jsx)(T,{title:`Monthly buckets over three years → month ticks, every tick at January`,data:S(_e)}),(0,c.jsx)(T,{title:`Monthly buckets, two and a half years → month ticks, year at January`,data:S(ve)}),(0,c.jsx)(T,{title:`Yearly buckets → year ticks`,data:S(C)})]}),args:{containerWidth:`1020px`,containerHeight:`1400px`},parameters:{docs:{description:{story:"Date-based series share the time-axis tick formatter with the line and area charts, on the same data — compare these panels with the line chart's `TimeAxisTickFormats`. Month-or-coarser buckets follow the resolution alone — month names with the year at January, or plain years for yearly buckets — since they carry no day to print at any span. Daily-or-finer buckets narrow with the span: hour ticks within a day, hour ticks dated at midnight for sub-daily data spanning up to a week, calendar dates within a year, and years beyond that. The tick values are chosen rather than sampled: a band scale has no ticks of its own, so picking evenly by index would often skip the very bucket that carries the year or the date. None of the monthly panels starts in January, and all three still name their years, the shortest of them without thinning the axis to reach one; the week-long and three-year panels step whole days and whole years, since at those spans nothing closer together reaches a boundary at all. Hover any bar: the tooltip names that bar's bucket spelled out in full — `August 2026` for a monthly bar, `2026` for a yearly one, never a day the bucket doesn't carry. It always names the bucket's own granularity, so on the daily panel it stays finer than the ticks once a long span coarsens the axis. An explicit `options.axis.x.tickFormat` still overrides."}}}},O={render:()=>(0,c.jsxs)(`div`,{style:E,children:[(0,c.jsx)(T,{title:`Lone hourly bucket, resolution inferred → date tick`,data:w,options:{yScale:{zero:!0}}}),(0,c.jsx)(T,{title:`Same bar, tickResolution: 'hour' → hour tick`,data:w,options:{yScale:{zero:!0},axis:{x:{tickResolution:`hour`}}}}),(0,c.jsx)(T,{title:`Weekly buckets, tickResolution: 'week' → date ticks, 'Week of' tooltips`,data:S(ye),options:{axis:{x:{tickResolution:`week`}}}})]}),args:{containerWidth:`1020px`,containerHeight:`700px`},parameters:{docs:{description:{story:"When the caller already knows the data's bucket resolution — e.g. from a granularity selector — `options.axis.x.tickResolution` declares it and the tick formatter derives the format from it instead of inferring the resolution from point spacing. Inference needs at least two points, so a single-bucket series always falls back to date ticks; the declared resolution picks the right format, and the tooltip follows it. `'week'` is the other case that has to be declared: seven-day spacing is indistinguishable from sparse daily data, so undeclared weekly buckets are read as daily and their tooltips name a single day rather than `Week of …`. On a horizontal bar chart the hint lives on `axis.y`, which is where the dates are. An explicit `tickFormat` takes precedence over the hint."}}}},k={args:{...f.args,withPatterns:!0,data:f.args.data.map(e=>({...e,data:e.data.filter(e=>parseInt(e.label)>=2016)}))}},A={args:{...f.args,animation:!0}},j={render:()=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:`20px`},children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h3`,{children:`Empty Data`}),(0,c.jsx)(`div`,{style:{width:`400px`,height:`300px`},children:(0,c.jsx)(s,{data:[]})})]}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h3`,{children:`Invalid Data`}),(0,c.jsx)(`div`,{style:{width:`400px`,height:`300px`},children:(0,c.jsx)(s,{data:[{label:`Invalid Series`,data:[{date:new Date(`invalid`),value:10}],options:{}}]})})]})]})},j.parameters={docs:{description:{story:`Examples of how the bar chart handles various error states including empty data and invalid data.`}}},M={args:{withTooltips:!0,data:oe,gridVisibility:`x`}},M.parameters={docs:{description:{story:`Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values ≥1B are formatted as "1.23B", ≥1M as "1.2M", ≥1K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.`}}},N={args:{...f.args,showLegend:!0},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},P={args:{...f.args,showLegend:!0,legendInteractive:!0,chartId:`default-hidden-series-demo`,defaultHiddenSeries:[`Great Britain`]},parameters:{docs:{description:{story:`Great Britain is hidden from the initial render and marked inactive in the legend. Select its legend item to reveal it.`}}}},F={render:e=>{let t=a(e);return(0,c.jsx)(s,{...f.args,...e,legend:{interactive:t?.interactive},chartId:`composition-bar-chart`,children:(0,c.jsx)(s.Legend,{...t})})},args:{...f.args},parameters:{docs:{description:{story:"Composition API using `<BarChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},I={args:{...f.args,data:[o[0],o[1],o[2]],orientation:`horizontal`,gridVisibility:`none`}},L=[{group:`United States`,label:`United States`,data:[{label:`1896`,value:0},{label:`1900`,value:0},{label:`1904`,value:2},{label:`1908`,value:1},{label:`1912`,value:3}]},{group:`Great Britain`,label:`Great Britain`,data:[{label:`1896`,value:1},{label:`1900`,value:0},{label:`1904`,value:1},{label:`1908`,value:10},{label:`1912`,value:9}]},{group:`Japan`,label:`Japan`,data:[{label:`1896`,value:2},{label:`1900`,value:1},{label:`1904`,value:2},{label:`1908`,value:1},{label:`1912`,value:2}]}],R={render:()=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:`40px`},children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h3`,{children:`Zero Value Display: Disabled (Default)`}),(0,c.jsx)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:`Zero values are not visually displayed. Bars with zero values have no height.`}),(0,c.jsx)(`div`,{style:{width:`600px`,height:`300px`},children:(0,c.jsx)(s,{data:L,showZeroValues:!1,withTooltips:!0,gridVisibility:`x`})})]}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h3`,{children:`Zero Value Display: Enabled`}),(0,c.jsx)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:`Zero values are visually displayed with minimum height bars. The tooltip still shows the actual value of 0, while the bar has a small visual height for better UX.`}),(0,c.jsx)(`div`,{style:{width:`600px`,height:`300px`},children:(0,c.jsx)(s,{data:L,showZeroValues:!0,withTooltips:!0,gridVisibility:`x`})})]}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h3`,{children:`Small Chart Height (100px)`}),(0,c.jsx)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:`Zero-value bars remain visible even in small charts. The minimum pixel height ensures bars are at least 2 pixels tall regardless of chart dimensions.`}),(0,c.jsx)(`div`,{style:{width:`600px`,height:`100px`,border:`1px solid #e0e0e0`},children:(0,c.jsx)(s,{data:L,showZeroValues:!0,withTooltips:!0,gridVisibility:`x`})})]})]}),args:{containerHeight:`1600px`},parameters:{docs:{description:{story:`Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights. Zero-value bars remain visible even in small chart heights.`}}}},be=[{label:`Subscribers`,data:[{date:new Date(2026,0,1),value:null},{date:new Date(2026,1,1),value:null},{date:new Date(2026,2,1),value:null},{date:new Date(2026,3,1),value:0},{date:new Date(2026,4,1),value:12},{date:new Date(2026,5,1),value:31},{date:new Date(2026,6,1),value:58}]}],z={args:{...f.args,data:be,showZeroValues:!0},argTypes:{seriesCount:{table:{disable:!0}}}},z.parameters={docs:{description:{story:'A null value is a bucket with no reading. It keeps its place on the axis so the chart still spans the selected range, draws no bar, and its tooltip reads "No data" rather than zero. April is a real zero: with `showZeroValues` on it keeps a short stub, so a month with none reads differently from a month with no record.'}}},B={args:{...f.args,data:re},argTypes:{seriesCount:{table:{disable:!0}}}},B.parameters={docs:{description:{story:"A week of 921 to 989 views a day, a 7% swing. The value axis starts at zero, so the bars read as steady; fitted to the data they would swing between empty and full. Pass `options.yScale.zero: false` to fit the axis instead."}}},xe=[{label:`Errors`,data:[{date:new Date(2026,0,1),value:0},{date:new Date(2026,1,1),value:1},{date:new Date(2026,2,1),value:1},{date:new Date(2026,3,1),value:0},{date:new Date(2026,4,1),value:1},{date:new Date(2026,5,1),value:1}]}],V={args:{...f.args,data:xe},argTypes:{seriesCount:{table:{disable:!0}}},parameters:{docs:{description:{story:"When every visible value is a whole number, the value axis places ticks only on whole numbers, instead of repeating a rounded label at fractional steps. Pass `options.axis.y.tickValues` to choose the ticks yourself (`axis.x` on a horizontal chart). A value domain you pin with `options.yScale.domain` (`xScale` on a horizontal chart) keeps every tick, so a percentage axis on `[ 0, 1 ]` still steps by 20%."}}}},H=[{group:`sales`,label:`Sales by Channel`,data:[{label:`Organic Search Traffic`,value:12500},{label:`Paid Advertising Campaign`,value:8750},{label:`Social Media Marketing`,value:6250},{label:`Email Newsletter Subscribers`,value:4375},{label:`Direct Website Visitors`,value:3125},{label:`Affiliate Partner Referrals`,value:2500}]}],U={args:{...f.args,showLegend:!0,legendCollapseGroups:!1,data:ae.slice(0,2)},parameters:{docs:{description:{story:'One primary series paired with a `type: "comparison"` series sharing the same `group`. The comparison series renders as an opaque bar at the standard slot width, in a light tint of the primary color, behind a primary bar narrowed to 60% in a shade that keeps 3:1 contrast against it. `legend.collapseGroups` is off here, the default, so each series keeps its own legend item; turn the `legendCollapseGroups` control on to fold the pair into a single **Views** item.'}}}},W={args:{...f.args,showLegend:!0,legendInteractive:!0,legendCollapseGroups:!0,data:ae},parameters:{docs:{description:{story:'Two groups (`views` and `visitors`) rendered side by side, each paired with its own `type: "comparison"` series. Each group\'s standard-width comparison bar, an opaque tint of the group color, sits behind its 60%-width primary bar, with clear gaps preserved between groups — confirming comparison mode composes correctly with grouped bar layouts. With `legend.collapseGroups` each group is a single legend item (Views, Visitors), and because `legend.interactive` is also on, clicking one toggles both its current and previous-period series at once. Turn the `legendCollapseGroups` control off to get one item per series, each toggling alone.'}}}},Se={Views:{Wed:null},Visitors:{Wed:null,Sat:0},"Previous views":{Tue:null,Fri:0},"Previous visitors":{Tue:null,Fri:0}},Ce=ae.map(e=>({...e,data:e.data.map(t=>{let n=Se[e.label]??{};return t.label in n?{...t,value:n[t.label]}:t})})),G={args:{...f.args,layout:`overlap`,showLegend:!0,legendInteractive:!0,legendCollapseGroups:!0,showZeroValues:!0,data:Ce},render:e=>(0,c.jsx)(s,{...e,legend:{...a(e),comparisonItem:`Previous period`}}),parameters:{docs:{description:{story:'`layout="overlap"` with two groups. Views and Visitors share the current period\'s slot, with Visitors as the narrower bar in front; Previous views and Previous visitors share the slot beside it. Each slot is toned from its palette color so every bar keeps 3:1 contrast against the background or the bar behind it, and the legend swatches match. With `legend.collapseGroups` each group is one legend item, so hiding Visitors hides Previous visitors too; the other bars keep their slots and widths. `legend.comparisonItem` names the comparison slot with one static item, in the color of its back bar. Turn the `legendCollapseGroups` control off to list each series alone, in slot order. Arrow keys step one slot at a time. Some days have gaps: Wednesday has no current reading and Tuesday no previous one, so those slots draw nothing and their tooltips read "No data". Saturday\'s current visitors and Friday\'s previous period are real zeros, drawn as stubs with `showZeroValues`.'}}}},K={args:{containerWidth:`900px`,containerHeight:`400px`,resize:`none`},render:()=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:`32px`,gridTemplateColumns:`repeat(2, 380px)`},children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h3`,{style:{marginBottom:`4px`},children:`Default — labels only`}),(0,c.jsxs)(`p`,{style:{marginBottom:`12px`,color:`#666`},children:[`Both roles resolve to `,(0,c.jsx)(`code`,{children:`none`}),`.`]}),(0,c.jsx)(s,{width:380,height:220,data:[o[0]],gridVisibility:`x`})]}),(0,c.jsxs)(`div`,{style:{"--a8c-charts-color-axis-y":`#3858e9`,"--a8c-charts-color-tick-y":`#cc1818`},children:[(0,c.jsx)(`h3`,{style:{marginBottom:`4px`},children:`Painted`}),(0,c.jsx)(`p`,{style:{marginBottom:`12px`,color:`#666`},children:`Axis blue, tick marks red.`}),(0,c.jsx)(s,{width:380,height:220,data:[o[0]],gridVisibility:`x`})]})]}),parameters:{docs:{description:{story:"Each axis has its own pair of catalog roles, set in CSS anywhere inside the provider tree. The y pair resolves to `none` by default, which is what leaves that axis carrying tick labels and nothing else; declaring either one paints that part. The x pair — `--a8c-charts-color-axis-x` and `--a8c-charts-color-tick-x` — is untouched here, which is why the x axis is identical in both charts. Nothing reaches any of these through the `theme` prop; colors are CSS."}}}},q=[{...S(C)[0],group:`views`},{label:`Views — previous`,group:`views`,options:{type:`comparison`},data:C.map(([e,t])=>({date:e,value:t-12}))}],J=e=>de(()=>{let t=e.querySelector(`rect.visx-bar`),n=u(e).getByTestId(`bar-chart-comparison-1-0`);if(!t)throw Error(`No bar rendered yet.`);return{primary:t,comparison:n}}),Y={args:{containerWidth:`900px`,containerHeight:`400px`,resize:`none`},render:()=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:`32px`,gridTemplateColumns:`repeat(2, 380px)`},children:[(0,c.jsxs)(`div`,{"data-testid":`bar-radius-default`,children:[(0,c.jsx)(`h3`,{style:{marginBottom:`4px`},children:`Default`}),(0,c.jsx)(`p`,{style:{marginBottom:`12px`,color:`#666`},children:(0,c.jsx)(`code`,{children:`0`})}),(0,c.jsx)(s,{width:380,height:220,data:q,gridVisibility:`x`})]}),(0,c.jsxs)(`div`,{"data-testid":`bar-radius-rounded`,style:{"--a8c-charts-border-radius-bar-chart":`var(--wpds-border-radius-sm)`},children:[(0,c.jsx)(`h3`,{style:{marginBottom:`4px`},children:`Rounded`}),(0,c.jsx)(`p`,{style:{marginBottom:`12px`,color:`#666`},children:(0,c.jsx)(`code`,{children:`--wpds-border-radius-sm`})}),(0,c.jsx)(s,{width:380,height:220,data:q,gridVisibility:`x`})]})]}),play:async({canvasElement:e})=>{let t=u(e),n=await J(t.getByTestId(`bar-radius-default`)),r=await J(t.getByTestId(`bar-radius-rounded`)),i=getComputedStyle(r.primary).getPropertyValue(`--a8c-charts-border-radius-bar-chart`).trim();await l(getComputedStyle(n.primary).rx).toBe(`0px`),await l(getComputedStyle(n.comparison).rx).toBe(`0px`),await l(i).not.toBe(`0px`),await l(getComputedStyle(r.primary).rx).toBe(i),await l(getComputedStyle(r.comparison).rx).toBe(i)},parameters:{docs:{description:{story:"Bars are square by default. Set the `--a8c-charts-border-radius-bar-chart` catalog role anywhere inside the provider tree to round their corners."}}}},X={render:()=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:`40px`},children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h3`,{children:`Without labelOverflow (Default - Labels Overlap)`}),(0,c.jsx)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:`Default behavior: long labels overlap and become unreadable at narrow widths.`}),(0,c.jsx)(`div`,{style:{width:`350px`,height:`250px`,border:`1px solid #e0e0e0`},children:(0,c.jsx)(s,{data:H,withTooltips:!0,gridVisibility:`x`})})]}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h3`,{children:`With labelOverflow: 'ellipsis' (Labels Truncated)`}),(0,c.jsxs)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:[`With `,(0,c.jsx)(`code`,{children:`labelOverflow: 'ellipsis'`}),`, labels are truncated to fit the available bandwidth. `,(0,c.jsx)(`strong`,{children:`Hover over a label to see the full text.`})]}),(0,c.jsx)(`div`,{style:{width:`350px`,height:`250px`,border:`1px solid #e0e0e0`},children:(0,c.jsx)(s,{data:H,withTooltips:!0,gridVisibility:`x`,options:{axis:{x:{labelOverflow:`ellipsis`}}}})})]})]}),parameters:{docs:{description:{story:"Demonstrates the `labelOverflow: 'ellipsis'` option that truncates long axis labels to fit the available bandwidth. The full label text is shown on hover via a native tooltip. This is useful for narrow widget contexts where space is limited."}}}},[we,Z]=ie,Te=[we,{...Z,data:Z.data.slice(1)}],Ee=({tooltipData:e})=>(0,c.jsxs)(`div`,{style:{padding:`8px`},children:[(0,c.jsx)(`strong`,{children:e?.nearestDatum?.datum.date?.toISOString().slice(0,7)}),Object.entries(e?.datumByKey??{}).map(([e,{datum:t}])=>(0,c.jsxs)(`div`,{children:[e,`: `,t.value]},e))]}),Q={parameters:{docs:{description:{story:"A custom `renderTooltip` that lists every series in `tooltipData.datumByKey`, which the default grouped tooltip does not. **London** has no point in January, so the January tooltip lists only **New York**."}}},render:()=>(0,c.jsx)(`div`,{style:{width:`600px`,height:`350px`},children:(0,c.jsx)(s,{withTooltips:!0,data:Te,renderTooltip:Ee})})},$=`Default.ForcedColors.FixedDimensions.AspectRatio.SingleSeries.PerPointColors.DatumClasses.BandHighlight.BesideTooltip.TimeSeries.TimeAxisTickFormats.TimeAxisTickResolution.WithPatterns.Animation.ErrorStates.SmartFormatting.WithLegend.WithDefaultHiddenSeries.WithCompositionLegend.HorizontalBarChart.ZeroValueComparison.BucketsWithNoData.SteadyValues.SmallWholeNumberRange.ComparisonSingle.ComparisonMulti.ComparisonMultiOverlap.PaintedYAxis.BarRadius.LabelOverflowEllipsis.GroupedTooltipWithMissingDates`.split(`.`),f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    withTooltips: true,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    resizeDebounceTime: 300
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Default,
  parameters: {
    docs: {
      description: {
        story: 'In Chrome DevTools, open Rendering and set "Emulate CSS media feature forced-colors" to "active". Set prefers-color-scheme to dark, then light: both axes should follow the system text color. This uses the same axis catalog roles as Line Chart, Area Chart, and Bar List Chart.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 600,
    height: 300
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.3
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    width: 600,
    height: 300,
    data: [{
      label: 'Scores',
      data: [{
        label: 'Empty',
        value: 0
      }, {
        label: 'Recorded',
        value: 80
      }]
    }],
    barClassName: datum => datum.value === 0 ? 'bar-story-empty' : undefined,
    withTooltips: true,
    tooltipStyle: {
      padding: 'var(--wpds-dimension-padding-lg)'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Use per-datum classes to keep zero-value marks visible and tooltipStyle to customize the tooltip box.'
      }
    }
  },
  render: args => <>
            <style>
                {'.bar-story-empty { height: var(--wpds-dimension-gap-xs); translate: 0 calc(-1 * var(--wpds-dimension-gap-xs)); }'}
            </style>
            <BarChart {...args} />
        </>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    gridVisibility: 'x'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...I.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: steadyTrafficData
  },
  argTypes: {
    seriesCount: {
      table: {
        disable: true
      }
    }
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: wholeNumberRangeData
  },
  argTypes: {
    // The series-count control swaps in the medal data, which isn't a whole-number range.
    seriesCount: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'When every visible value is a whole number, the value axis places ticks only on whole numbers, instead of repeating a rounded label at fractional steps. Pass \`options.axis.y.tickValues\` to choose the ticks yourself (\`axis.x\` on a horizontal chart). A value domain you pin with \`options.yScale.domain\` (\`xScale\` on a horizontal chart) keeps every tick, so a percentage axis on \`[ 0, 1 ]\` still steps by 20%.'
      }
    }
  }
}`,...V.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    legendCollapseGroups: false,
    data: weeklyComparisonData.slice(0, 2)
  },
  parameters: {
    docs: {
      description: {
        story: 'One primary series paired with a \`type: "comparison"\` series sharing the same \`group\`. The comparison series renders as an opaque bar at the standard slot width, in a light tint of the primary color, behind a primary bar narrowed to 60% in a shade that keeps 3:1 contrast against it. \`legend.collapseGroups\` is off here, the default, so each series keeps its own legend item; turn the \`legendCollapseGroups\` control on to fold the pair into a single **Views** item.'
      }
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    legendInteractive: true,
    legendCollapseGroups: true,
    data: weeklyComparisonData
  },
  parameters: {
    docs: {
      description: {
        story: 'Two groups (\`views\` and \`visitors\`) rendered side by side, each paired with its own \`type: "comparison"\` series. Each group\\'s standard-width comparison bar, an opaque tint of the group color, sits behind its 60%-width primary bar, with clear gaps preserved between groups — confirming comparison mode composes correctly with grouped bar layouts. With \`legend.collapseGroups\` each group is a single legend item (Views, Visitors), and because \`legend.interactive\` is also on, clicking one toggles both its current and previous-period series at once. Turn the \`legendCollapseGroups\` control off to get one item per series, each toggling alone.'
      }
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    layout: 'overlap',
    showLegend: true,
    legendInteractive: true,
    legendCollapseGroups: true,
    showZeroValues: true,
    data: weeklyComparisonWithGaps
  },
  render: args => <BarChart {...args} legend={{
    ...extractLegendConfig(args),
    comparisonItem: 'Previous period'
  }} />,
  parameters: {
    docs: {
      description: {
        story: '\`layout="overlap"\` with two groups. Views and Visitors share the current period\\'s slot, with Visitors as the narrower bar in front; Previous views and Previous visitors share the slot beside it. Each slot is toned from its palette color so every bar keeps 3:1 contrast against the background or the bar behind it, and the legend swatches match. With \`legend.collapseGroups\` each group is one legend item, so hiding Visitors hides Previous visitors too; the other bars keep their slots and widths. \`legend.comparisonItem\` names the comparison slot with one static item, in the color of its back bar. Turn the \`legendCollapseGroups\` control off to list each series alone, in slot order. Arrow keys step one slot at a time. Some days have gaps: Wednesday has no current reading and Tuesday no previous one, so those slots draw nothing and their tooltips read "No data". Saturday\\'s current visitors and Friday\\'s previous period are real zeros, drawn as stubs with \`showZeroValues\`.'
      }
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
            <div data-testid="bar-radius-default">
                <h3 style={{
        marginBottom: '4px'
      }}>Default</h3>
                <p style={{
        marginBottom: '12px',
        color: '#666'
      }}>
                    <code>0</code>
                </p>
                <BarChart width={380} height={220} data={radiusSeries} gridVisibility="x" />
            </div>
            <div data-testid="bar-radius-rounded" style={{
      '--a8c-charts-border-radius-bar-chart': 'var(--wpds-border-radius-sm)'
    } as React.CSSProperties}>
                <h3 style={{
        marginBottom: '4px'
      }}>Rounded</h3>
                <p style={{
        marginBottom: '12px',
        color: '#666'
      }}>
                    <code>--wpds-border-radius-sm</code>
                </p>
                <BarChart width={380} height={220} data={radiusSeries} gridVisibility="x" />
            </div>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const square = await findBars(canvas.getByTestId('bar-radius-default'));
    const rounded = await findBars(canvas.getByTestId('bar-radius-rounded'));
    const radius = getComputedStyle(rounded.primary).getPropertyValue('--a8c-charts-border-radius-bar-chart').trim();
    await expect(getComputedStyle(square.primary).rx).toBe('0px');
    await expect(getComputedStyle(square.comparison).rx).toBe('0px');
    await expect(radius).not.toBe('0px');
    await expect(getComputedStyle(rounded.primary).rx).toBe(radius);
    await expect(getComputedStyle(rounded.comparison).rx).toBe(radius);
  },
  parameters: {
    docs: {
      description: {
        story: 'Bars are square by default. Set the \`--a8c-charts-border-radius-bar-chart\` catalog role anywhere inside the provider tree to round their corners.'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A custom \`renderTooltip\` that lists every series in \`tooltipData.datumByKey\`, which the default grouped tooltip does not. **London** has no point in January, so the January tooltip lists only **New York**.'
      }
    }
  },
  render: () => <div style={{
    width: '600px',
    height: '350px'
  }}>
            <BarChart withTooltips data={londonWithoutJanuary} renderTooltip={renderEverySeriesTooltip} />
        </div>
}`,...Q.parameters?.docs?.source}}}}));De();export{A as Animation,h as AspectRatio,y as BandHighlight,Y as BarRadius,b as BesideTooltip,z as BucketsWithNoData,W as ComparisonMulti,G as ComparisonMultiOverlap,U as ComparisonSingle,v as DatumClasses,f as Default,j as ErrorStates,m as FixedDimensions,p as ForcedColors,Q as GroupedTooltipWithMissingDates,I as HorizontalBarChart,X as LabelOverflowEllipsis,K as PaintedYAxis,_ as PerPointColors,g as SingleSeries,V as SmallWholeNumberRange,M as SmartFormatting,B as SteadyValues,D as TimeAxisTickFormats,O as TimeAxisTickResolution,x as TimeSeries,F as WithCompositionLegend,P as WithDefaultHiddenSeries,N as WithLegend,k as WithPatterns,R as ZeroValueComparison,$ as __namedExportsOrder,d as default,De as n,ue as t};