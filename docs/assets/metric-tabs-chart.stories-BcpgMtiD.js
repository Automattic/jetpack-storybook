import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,t as r}from"./with-chart-theme-D6ANm6OO.js";import{n as i,t as a}from"./metric-tabs-chart-D4qIvfVz.js";var o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{r(),i(),o=t(),s={type:`number`,options:{useMultipliers:!0,decimals:0}},c=[new Date(`2026-06-01`),new Date(`2026-06-06`),new Date(`2026-06-11`),new Date(`2026-06-16`),new Date(`2026-06-21`),new Date(`2026-06-26`),new Date(`2026-06-29`)],l=[new Date(`2026-05-02`),new Date(`2026-05-07`),new Date(`2026-05-12`),new Date(`2026-05-17`),new Date(`2026-05-22`),new Date(`2026-05-27`),new Date(`2026-05-31`)],u=(e,t)=>e.map((e,n)=>({date:e,value:t[n]})),d=[{key:`subscribers`,label:`Subscribers`,value:2700,previousValue:2030,current:u(c,[2100,2200,2300,2450,2520,2640,2700]),previous:u(l,[1500,1620,1740,1810,1900,1980,2030])},{key:`paid`,label:`Paid subscribers`,value:820,previousValue:540,current:u(c,[520,560,610,660,710,780,820]),previous:u(l,[300,340,380,430,470,510,540])}],f=e=>(0,o.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,o.jsx)(e,{})}),p={title:`Packages/Premium Analytics/Widgets Toolkit/Components/MetricTabsChart`,component:a,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`A metric switcher over a comparative line chart: selectable cards (value + period-over-period delta), and the selected metric drawn as a current line with a dashed previous-period overlay. Shared by the subscribers and traffic charts.`}}},decorators:[n,f]},m={args:{metrics:d,dataFormat:s}},h={args:{metrics:[{...d[0],previousValue:void 0,previous:void 0}],dataFormat:s}},g={args:{metrics:d,dataFormat:s,loading:!0}},_={args:{metrics:d,dataFormat:s},decorators:[e=>(0,o.jsx)(`div`,{style:{width:`320px`,height:`170px`},children:(0,o.jsx)(e,{})})]},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: METRICS,
    dataFormat: DATA_FORMAT
  }
}`,...m.parameters?.docs?.source},description:{story:`Two metrics; selecting a card focuses the chart on that metric.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: [{
      ...METRICS[0],
      previousValue: undefined,
      previous: undefined
    }],
    dataFormat: DATA_FORMAT
  }
}`,...h.parameters?.docs?.source},description:{story:`A single metric with no previous period — just the current line, no delta.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: METRICS,
    dataFormat: DATA_FORMAT,
    loading: true
  }
}`,...g.parameters?.docs?.source},description:{story:`The loading overlay shown over the chart while data resolves.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`On a short tile the chart degrades to a sparkline — dropping its axis, grid,
and legend — instead of squashing its labels, while the metric cards stay.`,..._.parameters?.docs?.description}}},v=[`Default`,`SingleMetric`,`Loading`,`Compact`]}))();export{_ as Compact,m as Default,g as Loading,h as SingleMetric,v as __namedExportsOrder,p as default};