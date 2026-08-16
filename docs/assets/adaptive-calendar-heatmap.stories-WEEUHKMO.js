import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{t as n}from"./src-DQM9zFtO.js";import{n as r}from"./heatmap-chart-B9emwLZK.js";import{n as i,t as a}from"./calendar-heatmap-window-D1NUk8Kl.js";import{n as o,t as s}from"./with-chart-theme-C7tO38q6.js";import{n as c,t as l}from"./adaptive-calendar-heatmap-BsC2kJYg.js";function u(e){return Object.fromEntries(a({},e.startDate,e.endDate).map(({dateString:e},t)=>{let n=new Date(`${e}T00:00:00Z`).getUTCDay(),r=n===0||n===6;return t%37==0?[e,null]:[e,Math.round((r?400:1800)*(1+Math.sin(t/45))+120)]}))}function d({width:e,height:t,children:n}){return(0,p.jsx)(`div`,{style:{padding:`16px`,width:`fit-content`,border:`1px solid var(--wpds-color-stroke-surface-neutral-weak)`,borderRadius:`var(--wpds-border-radius-md)`,background:`var(--wpds-color-background-surface-neutral)`},children:(0,p.jsx)(`div`,{style:{width:`${e}px`,height:`${t}px`},children:n})})}function f({tileWidth:e,tileHeight:t,shortPeriod:n}){return(0,p.jsx)(d,{width:e,height:t,children:(0,p.jsx)(l,{valueByDay:n?_:g,period:n?h:m,children:e=>(0,p.jsx)(r,{...e,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0})})})}var p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{n(),i(),s(),c(),p=t(),m={startDate:`2025-01-01`,endDate:`2026-08-10`},h={startDate:`2026-06-01`,endDate:`2026-06-30`},g=u(m),_=u(h),v={title:`Packages/Premium Analytics/Widgets Toolkit/Components/AdaptiveCalendarHeatmap`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:"Fits a calendar heatmap to the tile it is given, so both calendar heatmap widgets size consistently. The tile's height picks the cell size — 61:40 cells that shrink or grow to fill the height, showing their values once they are wide enough for a number — and its width picks how many week columns are drawn. The grid is sized to the exact rectangle its covered period occupies, without overflowing or rendering unfetched dates as empty cells. It renders the measured wrapper and hands the caller the chart props to spread, so each widget keeps its own data, states, and tooltip. Drag `tileWidth` / `tileHeight` in any story to watch the grid re-fit."}}},argTypes:{tileWidth:{control:{type:`range`,min:240,max:1600,step:20}},tileHeight:{control:{type:`range`,min:80,max:900,step:8}},shortPeriod:{control:`boolean`}}},y={tileWidth:1200,tileHeight:86,shortPeriod:!1},b={render:f,args:y,decorators:[o]},x={render:f,args:{...y,tileHeight:320},decorators:[o]},S={render:f,args:{...y,tileHeight:900},decorators:[o]},C={render:f,args:{...y,shortPeriod:!0},decorators:[o]},w={render:f,args:{...y,tileWidth:420,tileHeight:320},decorators:[o]},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: renderAdaptiveCalendarHeatmap,
  args: SHORT_TILE_ARGS,
  decorators: [withChartTheme]
}`,...b.parameters?.docs?.source},description:{story:`A one-row dashboard tile, the size both calendar heatmaps ship at. The cells
shrink to fit it — too small for numbers, so the width buys years of history —
and the month labels and all seven weekday rows stay inside the tile.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: renderAdaptiveCalendarHeatmap,
  args: {
    ...SHORT_TILE_ARGS,
    tileHeight: 320
  },
  decorators: [withChartTheme]
}`,...x.parameters?.docs?.source},description:{story:"A two-row tile. The cells grow to fill the height, showing their values once they\nare wide enough for a number, and the grid keeps only the weeks that fit at that\nsize. Drag `tileHeight` between here and `ShortTile` to watch it re-fit.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: renderAdaptiveCalendarHeatmap,
  args: {
    ...SHORT_TILE_ARGS,
    tileHeight: 900
  },
  decorators: [withChartTheme]
}`,...S.parameters?.docs?.source},description:{story:`Taller than any dashboard tile. The cells keep growing to fill it — trading week
columns for size, as the prototype does — and still reach the tile's full width.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: renderAdaptiveCalendarHeatmap,
  args: {
    ...SHORT_TILE_ARGS,
    shortPeriod: true
  },
  decorators: [withChartTheme]
}`,...C.parameters?.docs?.source},description:{story:`One month of data in a tile that fits well over a year of columns. The grid stops
at the period boundary instead of presenting unfetched earlier dates as no-data
cells.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: renderAdaptiveCalendarHeatmap,
  args: {
    ...SHORT_TILE_ARGS,
    tileWidth: 420,
    tileHeight: 320
  },
  decorators: [withChartTheme]
}`,...w.parameters?.docs?.source},description:{story:`A narrow tile: the oldest week columns fall away, and the cells that remain are
the size they are in the wide tiles above. Nothing scrolls or clips.`,...w.parameters?.docs?.description}}},T=[`ShortTile`,`TallTile`,`VeryTallTile`,`ShortPeriod`,`NarrowTile`]}))();export{w as NarrowTile,C as ShortPeriod,b as ShortTile,x as TallTile,S as VeryTallTile,T as __namedExportsOrder,v as default};