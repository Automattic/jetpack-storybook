import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{qt as n,t as r}from"./src-S8dwwP-L.js";import{n as i,t as a}from"./with-widget-root-CGbzniJo.js";import{n as o,t as s}from"./visitors-by-location-widget-dJmcbHCV.js";var c,l,u,d,f,p,m;e((()=>{r(),a(),o(),c=t(),l={title:`Packages/Premium Analytics/Widgets Toolkit/Widgets/VisitorsByLocation`,component:s,tags:[`autodocs`]},u={decorators:[i(n())]},d={decorators:[i(n(!0))]},f={decorators:[i(n()),e=>(0,c.jsx)(`div`,{role:`button`,"aria-roledescription":`sortable`,style:{gridColumnEnd:`span 1`,width:`400px`,height:`300px`},children:(0,c.jsx)(e,{})})]},p={decorators:[i(n()),e=>(0,c.jsx)(`div`,{className:`dataviews-view-picker-grid`,style:{width:`300px`,height:`250px`},children:(0,c.jsx)(e,{})})]},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  decorators: [withWidgetRoot(getDefaultQueryParams())]
}`,...u.parameters?.docs?.source},description:{story:`Default state with mock data (no comparison)`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: [withWidgetRoot(getDefaultQueryParams(true))]
}`,...d.parameters?.docs?.source},description:{story:`With comparison period enabled`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  decorators: [withWidgetRoot(getDefaultQueryParams()), Story => <div role="button" aria-roledescription="sortable" style={{
    gridColumnEnd: 'span 1',
    width: '400px',
    height: '300px'
  }}>
                <Story />
            </div>]
}`,...f.parameters?.docs?.source},description:{story:`Simulate a narrow single-column dashboard tile: the map is hidden and only
the leaderboard is shown.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  decorators: [withWidgetRoot(getDefaultQueryParams()), Story => <div className="dataviews-view-picker-grid" style={{
    width: '300px',
    height: '250px'
  }}>
                <Story />
            </div>]
}`,...p.parameters?.docs?.source},description:{story:`Simulate being rendered inside the 'Add widget' DataViews picker grid: the
narrow tile hides the map and shows only the leaderboard.`,...p.parameters?.docs?.description}}},m=[`Default`,`WithComparison`,`SingleColumnTile`,`WidgetPickerGrid`]}))();export{u as Default,f as SingleColumnTile,p as WidgetPickerGrid,d as WithComparison,m as __namedExportsOrder,l as default};