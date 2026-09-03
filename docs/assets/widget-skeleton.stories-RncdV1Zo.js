import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,t as r}from"./widget-card-CkmlL3P7.js";import{a as i,c as a,i as o,n as s,o as c,r as l,s as u,t as d}from"./metric-sparkline-skeleton-BUGsJMno.js";var f,p,m,h,g,_,v,y,b,x,S;e((()=>{n(),a(),c(),o(),s(),f=t(),p={title:`Packages/Premium Analytics/Widgets Toolkit/Components/WidgetSkeleton`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"Fallback loading shape for widgets with no content-specific skeleton. Content-shaped skeletons pass their own shape through `WidgetState`'s `renderLoading`."}}}},m={render:()=>(0,f.jsx)(r,{height:`320px`,children:(0,f.jsx)(i,{})})},h={render:()=>(0,f.jsx)(r,{height:`140px`,children:(0,f.jsx)(i,{})})},g={render:()=>(0,f.jsx)(r,{height:`320px`,children:(0,f.jsx)(d,{})})},_={render:()=>(0,f.jsx)(r,{height:`140px`,children:(0,f.jsx)(d,{})})},v={render:()=>(0,f.jsx)(r,{width:`720px`,height:`320px`,children:(0,f.jsx)(l,{})})},y={render:()=>(0,f.jsx)(r,{width:`720px`,height:`140px`,children:(0,f.jsx)(l,{})})},b={render:()=>(0,f.jsx)(r,{height:`320px`,children:(0,f.jsx)(u,{})})},x={render:()=>(0,f.jsx)(r,{height:`140px`,children:(0,f.jsx)(u,{})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard height="320px">
            <GenericSkeleton />
        </WidgetCard>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard height="140px">
            <GenericSkeleton />
        </WidgetCard>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard height="320px">
            <MetricSparklineSkeleton />
        </WidgetCard>
}`,...g.parameters?.docs?.source},description:{story:"The shape the headline-over-sparkline widgets (Total views, Total visitors,\nPopular days) pass through `WidgetState`'s `renderLoading`: the metric value\nand its label at the top, the sparkline band at the bottom of the body.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard height="140px">
            <MetricSparklineSkeleton />
        </WidgetCard>
}`,..._.parameters?.docs?.source},description:{story:`A height-1 dashboard tile. The band gives up its room down to 26px rather
than pushing the shape past the widget body.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard width="720px" height="320px">
            <HeatmapSkeleton />
        </WidgetCard>
}`,...v.parameters?.docs?.source},description:{story:"The shape the calendar-heatmap widgets (Traffic activity, Posting activity,\nPost traffic activity) pass through `WidgetState`'s `renderLoading`: a fixed\n28-column, 3-row grid of square cells, centred in the body.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard width="720px" height="140px">
            <HeatmapSkeleton />
        </WidgetCard>
}`,...y.parameters?.docs?.source},description:{story:`A height-1 dashboard tile. The rows flatten to the room the body has rather
than pushing the grid past it into the widget footer.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard height="320px">
            <AnnualHighlightsSkeleton />
        </WidgetCard>
}`,...b.parameters?.docs?.source},description:{story:"The shape the Annual highlights widget passes through `WidgetState`'s\n`renderLoading`: a row per metric tile, each an icon beside a label line with\nits value trailing.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard height="140px">
            <AnnualHighlightsSkeleton />
        </WidgetCard>
}`,...x.parameters?.docs?.source},description:{story:"A height-1 dashboard tile. `safe center` packs the rows at the top once they\nstop fitting, so the tail is clipped instead of the first rows.",...x.parameters?.docs?.description}}},S=[`Default`,`ShortTile`,`MetricSparkline`,`MetricSparklineShortTile`,`Heatmap`,`HeatmapShortTile`,`AnnualHighlights`,`AnnualHighlightsShortTile`]}))();export{b as AnnualHighlights,x as AnnualHighlightsShortTile,m as Default,v as Heatmap,y as HeatmapShortTile,g as MetricSparkline,_ as MetricSparklineShortTile,h as ShortTile,S as __namedExportsOrder,p as default};