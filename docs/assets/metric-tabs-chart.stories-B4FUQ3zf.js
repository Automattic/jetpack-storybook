import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,t as r}from"./with-chart-theme-CbTSnA14.js";import{i,n as a,r as o,t as s}from"./metric-tabs-chart-skeleton-D_CCii9-.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{r(),i(),a(),c=t(),l={type:`number`,options:{useMultipliers:!0,decimals:0}},u=[new Date(`2026-06-01`),new Date(`2026-06-06`),new Date(`2026-06-11`),new Date(`2026-06-16`),new Date(`2026-06-21`),new Date(`2026-06-26`),new Date(`2026-06-29`)],d=[new Date(`2026-05-02`),new Date(`2026-05-07`),new Date(`2026-05-12`),new Date(`2026-05-17`),new Date(`2026-05-22`),new Date(`2026-05-27`),new Date(`2026-05-31`)],f=(e,t)=>e.map((e,n)=>({date:e,value:t[n]})),p=[{key:`subscribers`,label:`Subscribers`,value:2700,previousValue:2030,current:f(u,[2100,2200,2300,2450,2520,2640,2700]),previous:f(d,[1500,1620,1740,1810,1900,1980,2030])},{key:`paid`,label:`Paid subscribers`,value:820,previousValue:540,current:f(u,[520,560,610,660,710,780,820]),previous:f(d,[300,340,380,430,470,510,540])}],m=e=>(0,c.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,c.jsx)(e,{})}),h=({width:e,height:t,children:n})=>(0,c.jsx)(`div`,{style:{width:e,height:t,border:`1px solid var(--wpds-color-stroke-surface-neutral-weak)`,borderRadius:`var(--wpds-border-radius-md)`,background:`var(--wpds-color-background-surface-neutral)`,display:`flex`,flexDirection:`column`,overflow:`hidden`},children:(0,c.jsx)(`div`,{style:{position:`relative`,flex:1,minHeight:0},children:n})}),g={title:`Packages/Premium Analytics/Widgets Toolkit/Components/MetricTabsChart`,component:o,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"A metric switcher over a comparative chart: selectable cards (value + period-over-period delta), and the selected metric drawn with its previous-period overlay. `chartType` picks the mark — a current line with a dashed previous-period overlay, or bars with a translucent previous-period shadow. Shared by the subscribers and traffic charts."}}},decorators:[n,m]},_={args:{metrics:p,dataFormat:l}},v={args:{metrics:[{...p[0],previousValue:void 0,previous:void 0}],dataFormat:l}},y={args:{metrics:p,dataFormat:l,chartType:`bar`}},b={render:()=>(0,c.jsx)(h,{width:`720px`,height:`320px`,children:(0,c.jsx)(s,{})})},x={render:()=>(0,c.jsx)(h,{width:`360px`,height:`140px`,children:(0,c.jsx)(s,{})})},S={args:{metrics:p,dataFormat:l},decorators:[e=>(0,c.jsx)(`div`,{style:{width:`320px`,height:`170px`},children:(0,c.jsx)(e,{})})]},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: METRICS,
    dataFormat: DATA_FORMAT
  }
}`,..._.parameters?.docs?.source},description:{story:`Two metrics; selecting a card focuses the chart on that metric.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: [{
      ...METRICS[0],
      previousValue: undefined,
      previous: undefined
    }],
    dataFormat: DATA_FORMAT
  }
}`,...v.parameters?.docs?.source},description:{story:`A single metric with no previous period — just the current line, no delta.
With nothing to switch to, the card drops its fill and pointer and reads as
the widget's headline figure.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: METRICS,
    dataFormat: DATA_FORMAT,
    chartType: 'bar'
  }
}`,...y.parameters?.docs?.source},description:{story:`The same metrics drawn as bars, with the previous period as the translucent
shadow bar behind each current-period bar.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard width="720px" height="320px">
            <MetricTabsChartSkeleton />
        </WidgetCard>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard width="360px" height="140px">
            <MetricTabsChartSkeleton />
        </WidgetCard>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`On a short tile the chart degrades to a sparkline — dropping its axis, grid,
and legend — instead of squashing its labels, while the metric cards stay.`,...S.parameters?.docs?.description}}},C=[`Default`,`SingleMetric`,`Bars`,`Skeleton`,`SkeletonShortTile`,`Compact`]}))();export{y as Bars,S as Compact,_ as Default,v as SingleMetric,b as Skeleton,x as SkeletonShortTile,C as __namedExportsOrder,g as default};