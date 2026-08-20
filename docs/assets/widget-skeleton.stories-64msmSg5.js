import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,t as r}from"./widget-card-CkmlL3P7.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./metric-sparkline-skeleton-DELSsNLW.js";var u,d,f,p,m,h,g,_,v;e((()=>{n(),s(),a(),o(),u=t(),d={title:`Packages/Premium Analytics/Widgets Toolkit/Components/WidgetSkeleton`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"Fallback loading shape for widgets with no content-specific skeleton. Content-shaped skeletons pass their own shape through `WidgetState`'s `renderLoading`."}}}},f={render:()=>(0,u.jsx)(r,{height:`320px`,children:(0,u.jsx)(i,{})})},p={render:()=>(0,u.jsx)(r,{height:`140px`,children:(0,u.jsx)(i,{})})},m={render:()=>(0,u.jsx)(r,{height:`320px`,children:(0,u.jsx)(l,{})})},h={render:()=>(0,u.jsx)(r,{height:`140px`,children:(0,u.jsx)(l,{})})},g={render:()=>(0,u.jsx)(r,{width:`720px`,height:`320px`,children:(0,u.jsx)(c,{})})},_={render:()=>(0,u.jsx)(r,{width:`720px`,height:`140px`,children:(0,u.jsx)(c,{})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard height="320px">
            <GenericSkeleton />
        </WidgetCard>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard height="140px">
            <GenericSkeleton />
        </WidgetCard>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard height="320px">
            <MetricSparklineSkeleton />
        </WidgetCard>
}`,...m.parameters?.docs?.source},description:{story:"The shape the headline-over-sparkline widgets (Total views, Total visitors,\nPopular days) pass through `WidgetState`'s `renderLoading`: the metric value\nand its label at the top, the sparkline band at the bottom of the body.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard height="140px">
            <MetricSparklineSkeleton />
        </WidgetCard>
}`,...h.parameters?.docs?.source},description:{story:`A height-1 dashboard tile. The band gives up its room down to 26px rather
than pushing the shape past the widget body.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard width="720px" height="320px">
            <HeatmapSkeleton />
        </WidgetCard>
}`,...g.parameters?.docs?.source},description:{story:"The shape the calendar-heatmap widgets (Traffic activity, Posting activity,\nPost traffic activity) pass through `WidgetState`'s `renderLoading`: a fixed\n28-column, 3-row grid of square cells, centred in the body.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard width="720px" height="140px">
            <HeatmapSkeleton />
        </WidgetCard>
}`,..._.parameters?.docs?.source},description:{story:`A height-1 dashboard tile. The rows flatten to the room the body has rather
than pushing the grid past it into the widget footer.`,..._.parameters?.docs?.description}}},v=[`Default`,`ShortTile`,`MetricSparkline`,`MetricSparklineShortTile`,`Heatmap`,`HeatmapShortTile`]}))();export{f as Default,g as Heatmap,_ as HeatmapShortTile,m as MetricSparkline,h as MetricSparklineShortTile,p as ShortTile,v as __namedExportsOrder,d as default};