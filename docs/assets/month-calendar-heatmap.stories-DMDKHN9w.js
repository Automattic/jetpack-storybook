import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,t as r}from"./with-chart-theme-C_-6JuLb.js";import{n as i,t as a}from"./widget-card-CkmlL3P7.js";import{ht as o,t as s}from"./data-C9UNvC4d.js";import{n as c,t as l}from"./month-calendar-heatmap-Cbc4NwAB.js";function u(e){let t=new Date(`${m}T00:00:00Z`);return new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth()-(e-1),1)).toISOString().slice(0,10)}function d(e){let t={},n=new Date(`${e}T00:00:00Z`),r=new Date(`${m}T00:00:00Z`),i=o(1337);for(;n.getTime()<=r.getTime();n.setUTCDate(n.getUTCDate()+1))i()<.55||(t[n.toISOString().slice(0,10)]=1+Math.floor(i()*5));return t}function f({months:e,tileWidth:t,tileHeight:n}){let r=u(e);return(0,p.jsx)(a,{width:`${t}px`,height:`${n}px`,children:(0,p.jsx)(l,{valueByDay:d(r),range:{start:r,end:m},...h})})}var p,m,h,g,_,v,y,b,x;e((()=>{s(),i(),r(),c(),p=t(),m=`2026-09-14`,h={ariaLabel:`Monthly posting activity`,formatValue:e=>e===1?`1 post`:`${e} posts`,emptyLabel:`No posts`,lessLabel:`Fewer posts`,moreLabel:`More posts`},g={title:`Packages/Premium Analytics/Widgets Toolkit/Components/MonthCalendarHeatmap`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:"One mini calendar per month on a shared scale, months across with their names beneath, as the Posting activity widget draws its last 12 months. Days of the first and last month outside the range are faded filler with no tooltip. In a wide tile the blocks spread out; in a narrow one the gaps shrink to the chart minimum and then only the grid scrolls, keeping the legend in place. A tile too short for a legend (a one-row dashboard tile) drops it. Drag `tileWidth` and `tileHeight` to watch both."}}},argTypes:{months:{control:{type:`range`,min:1,max:12,step:1}},tileWidth:{control:{type:`range`,min:360,max:1600,step:20}},tileHeight:{control:{type:`range`,min:100,max:500,step:8}}},decorators:[n]},_={months:12,tileWidth:1400,tileHeight:300},v={render:f,args:_},y={render:f,args:{..._,tileWidth:720}},b={render:f,args:{..._,tileHeight:140}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: renderMonthCalendarHeatmap,
  args: DEFAULT_ARGS
}`,...v.parameters?.docs?.source},description:{story:`Twelve months in a tile wide enough for the blocks to spread out. The last
block closes with filler after the 14th.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: renderMonthCalendarHeatmap,
  args: {
    ...DEFAULT_ARGS,
    tileWidth: 720
  }
}`,...y.parameters?.docs?.source},description:{story:`Narrower than the twelve blocks at the minimum gap: the grid scrolls sideways
on its own while the legend stays put.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: renderMonthCalendarHeatmap,
  args: {
    ...DEFAULT_ARGS,
    tileHeight: 140
  }
}`,...b.parameters?.docs?.source},description:{story:`A one-row dashboard tile: the legend is dropped so the blocks keep their room.`,...b.parameters?.docs?.description}}},x=[`Default`,`Scrolling`,`ShortTile`]}))();export{v as Default,y as Scrolling,b as ShortTile,x as __namedExportsOrder,g as default};