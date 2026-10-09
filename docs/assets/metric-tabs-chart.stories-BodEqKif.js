import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{f as n}from"./library-DTloIBum.js";import{t as r}from"./src-fQR6rGKL.js";import{n as i,t as a}from"./with-chart-theme-CSkV7y4v.js";import{t as o}from"./chart-empty-state-DnetM0rf.js";import{t as s}from"./chart-empty-state-fqEPiFB0.js";import{i as c,n as l,r as u,t as d}from"./metric-tabs-chart-skeleton-BRJLa4UA.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{r(),a(),s(),c(),l(),f=t(),p={type:`number`,options:{useMultipliers:!0,decimals:0}},m=[new Date(`2026-06-01`),new Date(`2026-06-06`),new Date(`2026-06-11`),new Date(`2026-06-16`),new Date(`2026-06-21`),new Date(`2026-06-26`),new Date(`2026-06-29`)],h=[new Date(`2026-05-02`),new Date(`2026-05-07`),new Date(`2026-05-12`),new Date(`2026-05-17`),new Date(`2026-05-22`),new Date(`2026-05-27`),new Date(`2026-05-31`)],g=(e,t)=>e.map((e,n)=>({date:e,value:t[n]})),_=[{key:`subscribers`,label:`Subscribers`,value:2700,previousValue:2030,current:g(m,[2100,2200,2300,2450,2520,2640,2700]),previous:g(h,[1500,1620,1740,1810,1900,1980,2030])},{key:`paid`,label:`Paid subscribers`,value:820,previousValue:540,current:g(m,[520,560,610,660,710,780,820]),previous:g(h,[300,340,380,430,470,510,540])}],v=[{..._[0],counterpartKey:`paid`},{..._[1],counterpartKey:`subscribers`}],y=e=>(0,f.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,f.jsx)(e,{})}),b=({width:e,height:t,children:n})=>(0,f.jsx)(`div`,{style:{width:e,height:t,border:`1px solid var(--wpds-color-stroke-surface-neutral-weak)`,borderRadius:`var(--wpds-border-radius-md)`,background:`var(--wpds-color-background-surface-neutral)`,display:`flex`,flexDirection:`column`,overflow:`hidden`},children:(0,f.jsx)(`div`,{style:{position:`relative`,flex:1,minHeight:0},children:n})}),x={title:`Packages/Premium Analytics/Widgets Toolkit/Components/MetricTabsChart`,component:u,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"A metric switcher over a comparative chart: selectable cards (value + period-over-period delta), and the selected metric drawn with its previous-period overlay. `chartType` picks the mark — a current line with a dashed previous-period overlay, or bars with a translucent previous-period shadow. A metric naming another through `counterpartKey` draws it alongside, visible from the start unless `counterpartHidden` is set. Shared by the subscribers and traffic charts."}}},decorators:[i,y]},S={args:{metrics:_,dataFormat:p}},C={args:{metrics:[{..._[0],previousValue:void 0,previous:void 0}],dataFormat:p}},w={args:{metrics:_,dataFormat:p,chartType:`bar`}},T={args:{metrics:v,dataFormat:p}},E={args:{metrics:v,dataFormat:p,chartType:`bar`}},D={args:{metrics:_,dataFormat:p,tooltipMetrics:`all`}},O={args:{metrics:_.map(e=>({...e,value:0,previousValue:void 0,current:e.current.map(e=>({...e,value:0})),previous:void 0})),dataFormat:p,empty:(0,f.jsx)(o,{icon:n,text:`We couldn’t find results for this time period.`})}},k={render:()=>(0,f.jsx)(b,{width:`720px`,height:`320px`,children:(0,f.jsx)(d,{})})},A={render:()=>(0,f.jsx)(b,{width:`360px`,height:`140px`,children:(0,f.jsx)(d,{})})},j={args:{metrics:_,dataFormat:p},decorators:[e=>(0,f.jsx)(`div`,{style:{width:`320px`,height:`170px`},children:(0,f.jsx)(e,{})})]},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: METRICS,
    dataFormat: DATA_FORMAT
  }
}`,...S.parameters?.docs?.source},description:{story:`Two metrics; selecting a card focuses the chart on that metric.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: [{
      ...METRICS[0],
      previousValue: undefined,
      previous: undefined
    }],
    dataFormat: DATA_FORMAT
  }
}`,...C.parameters?.docs?.source},description:{story:`A single metric with no previous period — just the current line, no delta.
With nothing to switch to, the card drops its fill and pointer and reads as
the widget's headline figure.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: METRICS,
    dataFormat: DATA_FORMAT,
    chartType: 'bar'
  }
}`,...w.parameters?.docs?.source},description:{story:`The same metrics drawn as bars, with the previous period as the translucent
shadow bar behind each current-period bar.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: PAIRED_METRICS,
    dataFormat: DATA_FORMAT
  }
}`,...T.parameters?.docs?.source},description:{story:`Metrics that name each other as \`counterpartKey\` are drawn together: the
selected one solid and the other beside it, both toggled from the legend.
Selecting the other card swaps the roles, and hiding a metric takes its
previous-period overlay with it.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: PAIRED_METRICS,
    dataFormat: DATA_FORMAT,
    chartType: 'bar'
  }
}`,...E.parameters?.docs?.source},description:{story:`The same pair as bars — four bars per interval once both metrics are shown.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: METRICS,
    dataFormat: DATA_FORMAT,
    tooltipMetrics: 'all'
  }
}`,...D.parameters?.docs?.source},description:{story:'`tooltipMetrics="all"`: hovering reads out every metric at that date, not only\nthe drawn one, as the WordAds chart does with ads served, CPM and revenue.',...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: METRICS.map(metric => ({
      ...metric,
      value: 0,
      previousValue: undefined,
      current: metric.current.map(point => ({
        ...point,
        value: 0
      })),
      previous: undefined
    })),
    dataFormat: DATA_FORMAT,
    empty: <ChartEmptyState icon={search} text="We couldn’t find results for this time period." />
  }
}`,...O.parameters?.docs?.source},description:{story:"A window with no readings: the cards keep their zeros and the plot shows the `empty` content instead of a flat zero line.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard width="720px" height="320px">
            <MetricTabsChartSkeleton />
        </WidgetCard>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard width="360px" height="140px">
            <MetricTabsChartSkeleton />
        </WidgetCard>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: METRICS,
    dataFormat: DATA_FORMAT
  },
  decorators: [Story => <div style={{
    width: '320px',
    height: '170px'
  }}>
                <Story />
            </div>]
}`,...j.parameters?.docs?.source},description:{story:`On a short tile the chart degrades to a sparkline — dropping its axes, grid,
and legend — instead of squashing its labels, while the metric cards stay.`,...j.parameters?.docs?.description}}},M=[`Default`,`SingleMetric`,`Bars`,`PairedMetrics`,`PairedMetricsAsBars`,`AllMetricsInTooltip`,`Empty`,`Skeleton`,`SkeletonShortTile`,`Compact`]}))();export{D as AllMetricsInTooltip,w as Bars,j as Compact,S as Default,O as Empty,T as PairedMetrics,E as PairedMetricsAsBars,C as SingleMetric,k as Skeleton,A as SkeletonShortTile,M as __namedExportsOrder,x as default};