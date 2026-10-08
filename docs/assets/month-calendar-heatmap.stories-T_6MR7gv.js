import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,t as r}from"./widget-card-CkmlL3P7.js";import{n as i,t as a}from"./with-chart-theme-CTr4hjhS.js";import{ht as o,t as s}from"./data-DCrrDois.js";import{n as c,t as l}from"./month-calendar-heatmap-DtAXLCMy.js";function u(e){let t=new Date(`${m}T00:00:00Z`);return new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth()-(e-1),1)).toISOString().slice(0,10)}function d(e){let t={},n=new Date(`${e}T00:00:00Z`),r=new Date(`${m}T00:00:00Z`),i=o(1337);for(;n.getTime()<=r.getTime();n.setUTCDate(n.getUTCDate()+1))i()<.55||(t[n.toISOString().slice(0,10)]=1+Math.floor(i()*5));return t}function f(e){let t={},n=new Date(`${e}T00:00:00Z`),r=new Date(`${m}T00:00:00Z`),i=o(516);for(;n.getTime()<=r.getTime();n.setUTCDate(n.getUTCDate()+1)){let e=i();e<.7||(t[n.toISOString().slice(0,10)]=e<.95?1:2)}return t}var p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{s(),n(),a(),c(),p=t(),m=`2026-09-14`,h={ariaLabel:`Monthly posting activity`,formatValue:e=>e===1?`1 post`:`${e} posts`,emptyLabel:`No posts`,lessLabel:`Fewer posts`,moreLabel:`More posts`},g=e=>({months:t,tileWidth:n,tileHeight:i})=>{let a=u(t);return(0,p.jsx)(r,{width:`${n}px`,height:`${i}px`,children:(0,p.jsx)(l,{valueByDay:e(a),range:{start:a,end:m},...h})})},_=g(d),v={title:`Packages/Premium Analytics/Widgets Toolkit/Components/MonthCalendarHeatmap`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:"One mini calendar per month on a shared scale, months across with their names beneath, as the Posting activity widget draws its last 12 months. Days of the first and last month outside the range are faded filler with no tooltip. In a wide tile the blocks spread out; in a narrow one the gaps shrink to the chart minimum and then only the grid scrolls, keeping the legend in place. A tile too short for a legend (a one-row dashboard tile) drops it. Drag `tileWidth` and `tileHeight` to watch both."}}},argTypes:{months:{control:{type:`range`,min:1,max:12,step:1}},tileWidth:{control:{type:`range`,min:360,max:1600,step:20}},tileHeight:{control:{type:`range`,min:100,max:500,step:8}}},decorators:[i]},y={months:12,tileWidth:1400,tileHeight:300},b={render:_,args:y},x={render:_,args:{...y,tileWidth:720}},S={render:_,args:{...y,tileHeight:140}},C={render:g(f),args:y},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: renderMonthCalendarHeatmap,
  args: DEFAULT_ARGS
}`,...b.parameters?.docs?.source},description:{story:`Twelve months in a tile wide enough for the blocks to spread out. The last
block closes with filler after the 14th.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: renderMonthCalendarHeatmap,
  args: {
    ...DEFAULT_ARGS,
    tileWidth: 720
  }
}`,...x.parameters?.docs?.source},description:{story:`Narrower than the twelve blocks at the minimum gap: the grid scrolls sideways
on its own while the legend stays put.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: renderMonthCalendarHeatmap,
  args: {
    ...DEFAULT_ARGS,
    tileHeight: 140
  }
}`,...S.parameters?.docs?.source},description:{story:`A one-row dashboard tile: the legend is dropped so the blocks keep their room.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: renderWithPosts(buildMostlySinglePostsByDay),
  args: DEFAULT_ARGS
}`,...C.parameters?.docs?.source},description:{story:`Most days with a post have just one, so most cells take the lowest step of the
scale, which still has to stand out from the empty days around it.`,...C.parameters?.docs?.description}}},w=[`Default`,`Scrolling`,`ShortTile`,`MostlySinglePosts`]}))();export{b as Default,C as MostlySinglePosts,x as Scrolling,S as ShortTile,w as __namedExportsOrder,v as default};