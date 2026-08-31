import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{t as n}from"./src-CDdid5dF.js";import{n as r}from"./heatmap-chart-BeXwrWTr.js";import{n as i,t as a}from"./calendar-heatmap-window-C9cAeAEu.js";import{n as o,t as s}from"./with-chart-theme-DeumOkOJ.js";import{n as c,t as l}from"./adaptive-calendar-heatmap-ClTZnXvY.js";function u(e){return Object.fromEntries(a({},e.startDate,e.endDate).map(({dateString:e},t)=>{let n=new Date(`${e}T00:00:00Z`).getUTCDay(),r=n===0||n===6;return t%37==0?[e,null]:[e,Math.round((r?400:1800)*(1+Math.sin(t/45))+120)]}))}function d({width:e,height:t,children:n}){return(0,p.jsx)(`div`,{style:{padding:`16px`,width:`fit-content`,border:`1px solid var(--wpds-color-stroke-surface-neutral-weak)`,borderRadius:`var(--wpds-border-radius-md)`,background:`var(--wpds-color-background-surface-neutral)`},children:(0,p.jsx)(`div`,{style:{width:`${e}px`,height:`${t}px`},children:n})})}function f({tileWidth:e,tileHeight:t,shortPeriod:n}){return(0,p.jsx)(d,{width:e,height:t,children:(0,p.jsx)(l,{valueByDay:n?_:g,period:n?h:m,children:e=>(0,p.jsx)(r,{...e,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0})})})}var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{n(),i(),s(),c(),p=t(),m={startDate:`2025-01-01`,endDate:`2026-08-10`},h={startDate:`2026-06-01`,endDate:`2026-06-30`},g=u(m),_=u(h),v=[{label:`Jan 15 — 2 weeks of data`,endDate:`2026-01-15`},{label:`Apr 15 — 15 weeks of data`,endDate:`2026-04-15`},{label:`Aug 19 — 33 weeks of data`,endDate:`2026-08-19`},{label:`Dec 31 — the whole year`,endDate:`2026-12-31`}],y={title:`Packages/Premium Analytics/Widgets Toolkit/Components/AdaptiveCalendarHeatmap`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:"Fits a calendar heatmap to the tile it is given, so both calendar heatmap widgets size consistently. The tile's height picks the cell size — 61:40 cells that shrink or grow to fill the height, showing their values once they are wide enough for a number — and its width picks how many week columns are drawn. The grid is sized to the exact rectangle its covered period occupies, without overflowing or rendering unfetched dates as empty cells. It renders the measured wrapper and hands the caller the chart props to spread, so each widget keeps its own data, states, and tooltip. Drag `tileWidth` / `tileHeight` in any story to watch the grid re-fit."}}},argTypes:{tileWidth:{control:{type:`range`,min:240,max:1600,step:20}},tileHeight:{control:{type:`range`,min:80,max:900,step:8}},shortPeriod:{control:`boolean`}}},b={tileWidth:1200,tileHeight:86,shortPeriod:!1},x={render:f,args:b,decorators:[o]},S={render:f,args:{...b,tileHeight:320},decorators:[o]},C={render:f,args:{...b,tileHeight:900},decorators:[o]},w={render:f,args:{...b,shortPeriod:!0},decorators:[o]},T={render:f,args:{...b,tileWidth:420,tileHeight:320},decorators:[o]},E={render:({tileWidth:e,tileHeight:t})=>(0,p.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:v.map(({label:n,endDate:i})=>{let a={startDate:`2026-01-01`,endDate:i};return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{style:{marginBlockEnd:`4px`,font:`var(--wpds-typography-body-small)`,color:`var(--wpds-color-foreground-neutral-weak)`},children:n}),(0,p.jsx)(d,{width:e,height:t,children:(0,p.jsx)(l,{valueByDay:u(a),period:a,children:e=>(0,p.jsx)(r,{...e,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0})})})]},i)})}),args:b,decorators:[o]},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: renderAdaptiveCalendarHeatmap,
  args: SHORT_TILE_ARGS,
  decorators: [withChartTheme]
}`,...x.parameters?.docs?.source},description:{story:`A one-row dashboard tile, the size both calendar heatmaps ship at. The cells
shrink to fit it — too small for numbers, so the width buys years of history —
and the month labels and all seven weekday rows stay inside the tile.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: renderAdaptiveCalendarHeatmap,
  args: {
    ...SHORT_TILE_ARGS,
    tileHeight: 320
  },
  decorators: [withChartTheme]
}`,...S.parameters?.docs?.source},description:{story:"A two-row tile. The cells grow to fill the height, showing their values once they\nare wide enough for a number, and the grid keeps only the weeks that fit at that\nsize. Drag `tileHeight` between here and `ShortTile` to watch it re-fit.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: renderAdaptiveCalendarHeatmap,
  args: {
    ...SHORT_TILE_ARGS,
    tileHeight: 900
  },
  decorators: [withChartTheme]
}`,...C.parameters?.docs?.source},description:{story:`Taller than any dashboard tile. The cells keep growing to fill it — trading week
columns for size, as the prototype does — and still reach the tile's full width.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: renderAdaptiveCalendarHeatmap,
  args: {
    ...SHORT_TILE_ARGS,
    shortPeriod: true
  },
  decorators: [withChartTheme]
}`,...w.parameters?.docs?.source},description:{story:`One month of data in a tile that fits well over a year of columns. The month sits
at the right-hand edge and the weeks before it are filler: drawn so the tile fills,
but inert — no tooltip, no keyboard stop, no claim that those days had no traffic.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: renderAdaptiveCalendarHeatmap,
  args: {
    ...SHORT_TILE_ARGS,
    tileWidth: 420,
    tileHeight: 320
  },
  decorators: [withChartTheme]
}`,...T.parameters?.docs?.source},description:{story:`A narrow tile: the oldest week columns fall away, and the cells that remain are
the size they are in the wide tiles above. Nothing scrolls or clips.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: ({
    tileWidth,
    tileHeight
  }) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
            {CURRENT_YEAR_AS_OF.map(({
      label,
      endDate
    }) => {
      const fetched = {
        startDate: '2026-01-01',
        endDate
      };
      return <div key={endDate}>
                        <div style={{
          marginBlockEnd: '4px',
          font: 'var(--wpds-typography-body-small)',
          color: 'var(--wpds-color-foreground-neutral-weak)'
        }}>
                            {label}
                        </div>
                        <TileCanvas width={tileWidth} height={tileHeight}>
                            <AdaptiveCalendarHeatmap valueByDay={buildViewsByDay(fetched)} period={fetched}>
                                {chartProps => <HeatmapChartUnresponsive {...chartProps} primaryColor="var(--wp-admin-theme-color, #3858e9)" withTooltips />}
                            </AdaptiveCalendarHeatmap>
                        </TileCanvas>
                    </div>;
    })}
        </div>,
  args: SHORT_TILE_ARGS,
  decorators: [withChartTheme]
}`,...E.parameters?.docs?.source},description:{story:`The current year, read at four points in it. Every row ends on the day the year has
reached and fills leftwards with filler weeks, so the tile is as full in January as
in December while the request only ever covers days that have happened.`,...E.parameters?.docs?.description}}},D=[`ShortTile`,`TallTile`,`VeryTallTile`,`ShortPeriod`,`NarrowTile`,`CurrentYearThroughTheYear`]}))();export{E as CurrentYearThroughTheYear,T as NarrowTile,w as ShortPeriod,x as ShortTile,S as TallTile,C as VeryTallTile,D as __namedExportsOrder,y as default};