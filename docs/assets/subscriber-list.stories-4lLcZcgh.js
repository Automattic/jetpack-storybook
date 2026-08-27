import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,t as r}from"./widget-card-CkmlL3P7.js";import{i,n as a,r as o,t as s}from"./subscriber-list-skeleton-C_LGQgaQ.js";var c,l,u,d,f,p,m;e((()=>{n(),i(),a(),c=t(),l={title:`Packages/Premium Analytics/Widgets Toolkit/Components/SubscriberList`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`A roster of people — avatar, name, and an optional relative-time secondary line per row. Used by list-style Stats widgets (latest subscribers, post likes, post comments) where rows are ordered by recency rather than ranked by a metric.`}}}},u=[{id:1,name:`Amelia Hart`,href:`https://example.com/amelia`,secondaryText:`2 hours ago`},{id:2,name:`Benedict Okonkwo`,secondaryText:`5 hours ago`},{id:3,name:`Chiara Rossi`,href:`https://example.com/chiara`,secondaryText:`Yesterday`},{id:4,name:`Daniel Nguyen`,secondaryText:`3 days ago`},{id:5,name:`Eve`,href:`https://example.com/eve`,secondaryText:`Last week`},{id:6,name:`Farrah Al-Amin`,secondaryText:`2 weeks ago`}],d={args:{items:u,moreCount:128}},f={render:e=>(0,c.jsx)(r,{height:`320px`,children:(0,c.jsx)(s,{...e})}),args:{rows:6}},p={render:e=>(0,c.jsx)(r,{height:`140px`,children:(0,c.jsx)(s,{...e})}),args:{rows:10}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockItems,
    moreCount: 128
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <WidgetCard height="320px">
            <SubscriberListSkeleton {...args} />
        </WidgetCard>,
  args: {
    rows: 6
  }
}`,...f.parameters?.docs?.source},description:{story:'The loading shape the roster widgets pass through `WidgetState`\'s\n`renderLoading`: an avatar, a name line, and the trailing "since" line per\nrow, centred in the body.',...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <WidgetCard height="140px">
            <SubscriberListSkeleton {...args} />
        </WidgetCard>,
  args: {
    rows: 10
  }
}`,...p.parameters?.docs?.source},description:{story:`A height-1 dashboard tile. Too short to centre ten rows, so they pack from the
top and the tail is clipped rather than pushed past the widget body.`,...p.parameters?.docs?.description}}},m=[`Default`,`Skeleton`,`SkeletonShortTile`]}))();export{d as Default,f as Skeleton,p as SkeletonShortTile,m as __namedExportsOrder,l as default};