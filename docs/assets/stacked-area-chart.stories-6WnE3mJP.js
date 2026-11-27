import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{n,t as r}from"./with-chart-theme-CYdfpozv.js";import{n as i,t as a}from"./stacked-area-chart-DDZ891cd.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{r(),i(),o=t(),s={title:`Packages/Premium Analytics/Widgets Toolkit/Components/StackedAreaChart`,component:a,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[n,e=>(0,o.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,o.jsx)(e,{})})]},c=Array.from({length:7},(e,t)=>new Date(2026,6,t+1)),l=Array.from({length:24},(e,t)=>new Date(2026,6,1,t)),u=(e,t,n,r)=>({label:e,...r&&{options:{stroke:r}},data:t.map((e,t)=>({date:e,value:n(t)}))}),d=[u(`Human`,c,e=>5200+e*310),u(`AI bots`,c,e=>1400+e%3*220),u(`Other bots`,c,e=>900+e%2*180),u(`Blocked`,c,e=>240+e*15,`#d63638`)],f={args:{series:d,dataFormat:{type:`number`},tickResolution:`day`}},p={args:{series:[u(`Human`,l,e=>180+Math.round(120*Math.sin(e/4)**2)),u(`AI bots`,l,e=>40+e%5*9),u(`Other bots`,l,e=>30+e%4*6)],dataFormat:{type:`number`},tickResolution:`hour`}},m={decorators:[e=>(0,o.jsx)(`div`,{style:{width:`100%`,height:`120px`},children:(0,o.jsx)(e,{})})],args:{series:d,dataFormat:{type:`number`},tickResolution:`day`,compactWhenShort:!0}},h=[`Default`,`Hourly`,`Sparkline`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    series: dailySeries,
    dataFormat: {
      type: 'number'
    },
    tickResolution: 'day'
  }
}`,...f.parameters?.docs?.source},description:{story:`Default: four parts of one total, by the day. The y-axis tops out at the stack's total.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    series: [part('Human', hours, index => 180 + Math.round(120 * Math.sin(index / 4) ** 2)), part('AI bots', hours, index => 40 + index % 5 * 9), part('Other bots', hours, index => 30 + index % 4 * 6)],
    dataFormat: {
      type: 'number'
    },
    tickResolution: 'hour'
  }
}`,...p.parameters?.docs?.source},description:{story:`Hourly: one day by the hour, with times on the axis and in the tooltip.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '100%',
    height: '120px'
  }}>
                <Story />
            </div>],
  args: {
    series: dailySeries,
    dataFormat: {
      type: 'number'
    },
    tickResolution: 'day',
    compactWhenShort: true
  }
}`,...m.parameters?.docs?.source},description:{story:`Sparkline: how the chart degrades on a tile too short for its axes.`,...m.parameters?.docs?.description}}}}))();export{f as Default,p as Hourly,m as Sparkline,h as __namedExportsOrder,s as default};