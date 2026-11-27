import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{n,t as r}from"./widget-card-DJYbhJj7.js";import{bt as i,ht as a,mt as o,vt as s}from"./charts-provider-BxV5fIk2.js";import{n as c,t as l}from"./with-chart-theme-CYdfpozv.js";import{n as u,t as d}from"./monthly-heatmap-C_WrSsDP.js";function f({year:e,month:t}){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}function p(e,t,n){if(t%17==5)return 0;let r=Math.round(2400+1800*Math.sin((t-3)/1.9)+t*90);return n===`average`?Math.round(r/f(e)):r}function m(e,t){let n=i({year:_.year-e+1,month:v}),r=i(_);return Array.from({length:e},(e,a)=>{let o=_.year-a,s=Array.from({length:12},(e,a)=>{let s=i({year:o,month:a});return s<n||s>r?null:p({year:o,month:a},s-n,t)}),c=s.filter(e=>e!==null),l=c.reduce((e,t)=>e+t,0);return{year:o,months:s,total:t===`average`?Math.round(l/c.length):l}})}function h({metric:e,years:t,tileWidth:n,tileHeight:i,selectable:o,partial:s,scale:c,onSelect:l}){let u=s?[_,{year:_.year-t+1,month:v}]:void 0;return(0,g.jsx)(r,{width:`${n}px`,height:`${i}px`,children:(0,g.jsx)(d,{rows:m(t,e),partialMonths:u,...a(e),scale:c,onSelect:o?l:void 0})})}var g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{s(),o(),n(),l(),u(),g=t(),_={year:2026,month:7},v=2,y={title:`Packages/Premium Analytics/Widgets Toolkit/Components/MonthlyHeatmap`,component:d,tags:[`autodocs`],parameters:{docs:{description:{component:"A year × month heatmap with a per-year roll-up column, filling the tile it is given. Rows are drawn newest first whatever order they arrive in; a `null` month is filler, drawn faded and skipped by hover and the keyboard. The grid alone scrolls when the rows outgrow the tile, keeping the month labels, the year column and the scale in view, and its cells stop growing at the design height so a short history does not stretch. `onSelect` reports the picked month, or the year alone for its roll-up; without it the cells are inert. Drag `years` and `tileHeight` to watch the grid re-fit."}}},argTypes:{metric:{control:`radio`,options:[`total`,`average`],description:`The month's views, or its views per day; picks the tooltip and scale labels.`},years:{control:{type:`range`,min:1,max:20,step:1}},tileWidth:{control:{type:`range`,min:360,max:1600,step:20}},tileHeight:{control:{type:`range`,min:140,max:900,step:8}},selectable:{control:`boolean`},partial:{control:`boolean`},scale:{control:`inline-radio`,options:[`linear`,`log`,`buckets`],description:"How a month picks its shade: by distance, by distance in log space, or by its rank. Views over years asks for `buckets`, a post’s All-time traffic for `log`."},onSelect:{action:`select`,control:!1}},decorators:[c]},b={metric:`total`,years:4,tileWidth:900,tileHeight:320,selectable:!0,partial:!1,scale:`buckets`},x={render:h,args:b},S={render:h,args:{...b,metric:`average`}},C={render:h,args:{...b,years:12}},w={render:h,args:{...b,years:15,tileHeight:560,partial:!0}},T={render:h,args:{...b,years:1}},E={render:h,args:{...b,selectable:!1}},D=[`Default`,`DailyAverage`,`ManyYears`,`LongHistory`,`SingleYear`,`ReadOnly`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: renderMonthlyHeatmap,
  args: DEFAULT_ARGS
}`,...x.parameters?.docs?.source},description:{story:`Four years of monthly views, newest first. The oldest row opens with filler
months and the newest closes with them after August, so neither is hoverable
or reachable by keyboard. Picking a cell logs the target in the Actions panel.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: renderMonthlyHeatmap,
  args: {
    ...DEFAULT_ARGS,
    metric: 'average'
  }
}`,...S.parameters?.docs?.source},description:{story:`The same span as views per day. The cells carry smaller numbers, and the
tooltip and scale say "per day".`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: renderMonthlyHeatmap,
  args: {
    ...DEFAULT_ARGS,
    years: 12
  }
}`,...C.parameters?.docs?.source},description:{story:`More rows than the tile can hold at the minimum cell height. The grid scrolls
on its own while the month labels, the year column and the scale stay put.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: renderMonthlyHeatmap,
  args: {
    ...DEFAULT_ARGS,
    years: 15,
    tileHeight: 560,
    partial: true
  }
}`,...w.parameters?.docs?.source},description:{story:`Fifteen years with the launch month and the current month hatched: they are
left out of the scale and read as incomplete rather than quiet.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: renderMonthlyHeatmap,
  args: {
    ...DEFAULT_ARGS,
    years: 1
  }
}`,...T.parameters?.docs?.source},description:{story:`A single row. The cells stop at the design height rather than stretching to
fill the tile.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: renderMonthlyHeatmap,
  args: {
    ...DEFAULT_ARGS,
    selectable: false
  }
}`,...E.parameters?.docs?.source},description:{story:"Without `onSelect`: the cells keep their tooltips but take no pointer cursor,\nand clicking or pressing Enter on one does nothing.",...E.parameters?.docs?.description}}}}))();export{S as DailyAverage,x as Default,w as LongHistory,C as ManyYears,E as ReadOnly,T as SingleYear,D as __namedExportsOrder,y as default};