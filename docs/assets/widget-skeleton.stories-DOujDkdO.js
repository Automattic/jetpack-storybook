import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{n,t as r}from"./widget-card-DJYbhJj7.js";import{n as i,t as a}from"./with-chart-theme-xeZsPG_m.js";import{a as o,c as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./month-calendar-heatmap-skeleton-D17Jfy2W.js";var m,h,g,_,v,y,b,x,S,C,w;e((()=>{n(),a(),s(),u(),c(),l(),m=t(),h={title:`Packages/Premium Analytics/Widgets Toolkit/Components/WidgetSkeleton`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:"Fallback loading shape for widgets with no content-specific skeleton. Content-shaped skeletons pass their own shape through `WidgetState`'s `renderLoading`."}}}},g={render:()=>(0,m.jsx)(r,{height:`320px`,children:(0,m.jsx)(o,{})})},_={render:()=>(0,m.jsx)(r,{height:`140px`,children:(0,m.jsx)(o,{})})},v={render:()=>(0,m.jsx)(r,{width:`720px`,height:`320px`,children:(0,m.jsx)(d,{})})},y={render:()=>(0,m.jsx)(r,{width:`720px`,height:`140px`,children:(0,m.jsx)(d,{})})},b={decorators:[i],render:()=>(0,m.jsx)(r,{width:`1200px`,height:`320px`,children:(0,m.jsx)(p,{})})},x={decorators:[i],render:()=>(0,m.jsx)(r,{width:`720px`,height:`140px`,children:(0,m.jsx)(p,{})})},S={render:()=>(0,m.jsx)(r,{height:`320px`,children:(0,m.jsx)(f,{})})},C={render:()=>(0,m.jsx)(r,{height:`140px`,children:(0,m.jsx)(f,{})})},w=[`Default`,`ShortTile`,`Heatmap`,`HeatmapShortTile`,`MonthCalendarHeatmap`,`MonthCalendarHeatmapShortTile`,`AnnualHighlights`,`AnnualHighlightsShortTile`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard height="320px">
            <GenericSkeleton />
        </WidgetCard>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard height="140px">
            <GenericSkeleton />
        </WidgetCard>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard width="720px" height="320px">
            <HeatmapSkeleton />
        </WidgetCard>
}`,...v.parameters?.docs?.source},description:{story:"The shape the calendar-heatmap widgets pass through `WidgetState`'s\n`renderLoading`: a fixed 28-column, 3-row grid of square cells, centred in\nthe body.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard width="720px" height="140px">
            <HeatmapSkeleton />
        </WidgetCard>
}`,...y.parameters?.docs?.source},description:{story:`A height-1 dashboard tile. The rows flatten to the room the body has rather
than pushing the grid past it into the widget footer.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  decorators: [withChartTheme],
  render: () => <WidgetCard width="1200px" height="320px">
            <MonthCalendarHeatmapSkeleton />
        </WidgetCard>
}`,...b.parameters?.docs?.source},description:{story:"The shape the Posting activity widget passes through `WidgetState`'s\n`renderLoading`: twelve month blocks sharing the width, a label under each.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  decorators: [withChartTheme],
  render: () => <WidgetCard width="720px" height="140px">
            <MonthCalendarHeatmapSkeleton />
        </WidgetCard>
}`,...x.parameters?.docs?.source},description:{story:`A height-1 dashboard tile: the blocks keep their size, so the row is what
fits the body and the rest clips where the loaded grid would scroll.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard height="320px">
            <AnnualHighlightsSkeleton />
        </WidgetCard>
}`,...S.parameters?.docs?.source},description:{story:"The shape the Annual highlights widget passes through `WidgetState`'s\n`renderLoading`: a row per metric tile, each an icon beside a label line with\nits value trailing.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard height="140px">
            <AnnualHighlightsSkeleton />
        </WidgetCard>
}`,...C.parameters?.docs?.source},description:{story:"A height-1 dashboard tile. `safe center` packs the rows at the top once they\nstop fitting, so the tail is clipped instead of the first rows.",...C.parameters?.docs?.description}}}}))();export{S as AnnualHighlights,C as AnnualHighlightsShortTile,g as Default,v as Heatmap,y as HeatmapShortTile,b as MonthCalendarHeatmap,x as MonthCalendarHeatmapShortTile,_ as ShortTile,w as __namedExportsOrder,h as default};