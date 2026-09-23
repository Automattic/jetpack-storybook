import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,t as r}from"./with-chart-theme-Cuhf2iL0.js";import{n as i,t as a}from"./widget-card-CkmlL3P7.js";import{a as o,c as s,i as c,l,n as u,o as d,r as f,s as p,t as m,u as h}from"./metric-sparkline-skeleton-CP0eYS-p.js";var g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{i(),r(),h(),s(),d(),u(),c(),g=t(),_={title:`Packages/Premium Analytics/Widgets Toolkit/Components/WidgetSkeleton`,component:p,tags:[`autodocs`],parameters:{docs:{description:{component:"Fallback loading shape for widgets with no content-specific skeleton. Content-shaped skeletons pass their own shape through `WidgetState`'s `renderLoading`."}}}},v={render:()=>(0,g.jsx)(a,{height:`320px`,children:(0,g.jsx)(p,{})})},y={render:()=>(0,g.jsx)(a,{height:`140px`,children:(0,g.jsx)(p,{})})},b={render:()=>(0,g.jsx)(a,{height:`320px`,children:(0,g.jsx)(m,{})})},x={render:()=>(0,g.jsx)(a,{height:`140px`,children:(0,g.jsx)(m,{})})},S={render:()=>(0,g.jsx)(a,{width:`720px`,height:`320px`,children:(0,g.jsx)(o,{})})},C={render:()=>(0,g.jsx)(a,{width:`720px`,height:`140px`,children:(0,g.jsx)(o,{})})},w={decorators:[n],render:()=>(0,g.jsx)(a,{width:`1200px`,height:`320px`,children:(0,g.jsx)(f,{})})},T={decorators:[n],render:()=>(0,g.jsx)(a,{width:`720px`,height:`140px`,children:(0,g.jsx)(f,{})})},E={render:()=>(0,g.jsx)(a,{height:`320px`,children:(0,g.jsx)(l,{})})},D={render:()=>(0,g.jsx)(a,{height:`140px`,children:(0,g.jsx)(l,{})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard height="320px">
            <GenericSkeleton />
        </WidgetCard>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard height="140px">
            <GenericSkeleton />
        </WidgetCard>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard height="320px">
            <MetricSparklineSkeleton />
        </WidgetCard>
}`,...b.parameters?.docs?.source},description:{story:"The shape the headline-over-sparkline widgets (Total views, Total visitors,\nPopular days) pass through `WidgetState`'s `renderLoading`: the metric value\nand its label at the top, the sparkline band at the bottom of the body.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard height="140px">
            <MetricSparklineSkeleton />
        </WidgetCard>
}`,...x.parameters?.docs?.source},description:{story:`A height-1 dashboard tile. The band gives up its room down to 26px rather
than pushing the shape past the widget body.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard width="720px" height="320px">
            <HeatmapSkeleton />
        </WidgetCard>
}`,...S.parameters?.docs?.source},description:{story:"The shape the calendar-heatmap widgets (Traffic activity, Post traffic\nactivity) pass through `WidgetState`'s `renderLoading`: a fixed\n28-column, 3-row grid of square cells, centred in the body.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard width="720px" height="140px">
            <HeatmapSkeleton />
        </WidgetCard>
}`,...C.parameters?.docs?.source},description:{story:`A height-1 dashboard tile. The rows flatten to the room the body has rather
than pushing the grid past it into the widget footer.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  decorators: [withChartTheme],
  render: () => <WidgetCard width="1200px" height="320px">
            <MonthCalendarHeatmapSkeleton />
        </WidgetCard>
}`,...w.parameters?.docs?.source},description:{story:"The shape the Posting activity widget passes through `WidgetState`'s\n`renderLoading`: twelve month blocks sharing the width, a label under each.",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  decorators: [withChartTheme],
  render: () => <WidgetCard width="720px" height="140px">
            <MonthCalendarHeatmapSkeleton />
        </WidgetCard>
}`,...T.parameters?.docs?.source},description:{story:`A height-1 dashboard tile: the blocks keep their size, so the row is what
fits the body and the rest clips where the loaded grid would scroll.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard height="320px">
            <AnnualHighlightsSkeleton />
        </WidgetCard>
}`,...E.parameters?.docs?.source},description:{story:"The shape the Annual highlights widget passes through `WidgetState`'s\n`renderLoading`: a row per metric tile, each an icon beside a label line with\nits value trailing.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard height="140px">
            <AnnualHighlightsSkeleton />
        </WidgetCard>
}`,...D.parameters?.docs?.source},description:{story:"A height-1 dashboard tile. `safe center` packs the rows at the top once they\nstop fitting, so the tail is clipped instead of the first rows.",...D.parameters?.docs?.description}}},O=[`Default`,`ShortTile`,`MetricSparkline`,`MetricSparklineShortTile`,`Heatmap`,`HeatmapShortTile`,`MonthCalendarHeatmap`,`MonthCalendarHeatmapShortTile`,`AnnualHighlights`,`AnnualHighlightsShortTile`]}))();export{E as AnnualHighlights,D as AnnualHighlightsShortTile,v as Default,S as Heatmap,C as HeatmapShortTile,b as MetricSparkline,x as MetricSparklineShortTile,w as MonthCalendarHeatmap,T as MonthCalendarHeatmapShortTile,y as ShortTile,O as __namedExportsOrder,_ as default};