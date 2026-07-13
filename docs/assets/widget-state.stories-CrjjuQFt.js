import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,t as r}from"./with-chart-theme-D2nfsyxa.js";import{t as i}from"./bar-chart-RSEDjitq.js";import{n as a,r as o,t as s}from"./widget-state-KKFJ6cWl.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{r(),o(),a(),c=t(),l=({title:e,children:t})=>(0,c.jsxs)(`div`,{style:{width:`360px`,height:`320px`,border:`1px solid var(--wpds-color-stroke-surface-neutral-weak, #e0e0e0)`,borderRadius:`var(--wpds-border-radius-md, 8px)`,background:`var(--wpds-color-background-surface-neutral, #fff)`,display:`flex`,flexDirection:`column`,overflow:`hidden`},children:[(0,c.jsx)(`div`,{style:{padding:`var(--wpds-dimension-gap-lg, 16px)`,borderBottom:`1px solid var(--wpds-color-stroke-surface-neutral-weak, #e0e0e0)`,fontWeight:600,fontSize:`var(--wpds-typography-font-size-sm, 14px)`,color:`var(--wpds-color-foreground-content-neutral, #1e1e1e)`},children:e}),(0,c.jsx)(`div`,{style:{position:`relative`,flex:1,minHeight:0},children:t})]}),u=e=>(0,c.jsx)(l,{title:`Traffic by source`,children:(0,c.jsx)(e,{})}),d={title:`Packages/Premium Analytics/Widgets Toolkit/Components/WidgetState`,component:s,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"Data-agnostic widget content-area state. Derives one state (error → loading → empty → ready, plus a busy overlay on background refetch) from four boolean signals and renders it. Callers map their fetch result to the signals and pass generic `error` / `empty` descriptors. Stories render it inside a mock widget card; the ready and busy states show a mock bar chart standing in for real widget content."}}},decorators:[u,n]},f=[{stroke:`#3858E9`}],p=[{label:`Dec 16, 2025-Jan 14, 2026`,data:[{label:`Direct`,value:4200},{label:`Search`,value:3100},{label:`Social`,value:2600},{label:`Email`,value:2050}]}],m=()=>(0,c.jsx)(`div`,{style:{width:`100%`,height:`100%`,boxSizing:`border-box`,padding:`var(--wpds-dimension-gap-lg, 16px)`},children:(0,c.jsx)(i,{chartData:p,dataFormat:{type:`number`},styles:f})}),h={args:{isLoading:!0,isError:!1,isEmpty:!0,children:(0,c.jsx)(m,{})}},g={args:{isLoading:!1,isError:!0,isEmpty:!1,error:{description:`We couldn't load this data. Please try again in a moment.`,actions:[{label:`Retry`,onClick:()=>console.log(`Retry clicked`)}]},children:(0,c.jsx)(m,{})}},_={args:{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:`No traffic recorded for this period.`},children:(0,c.jsx)(m,{})}},v={args:{isLoading:!1,isError:!1,isEmpty:!1,children:(0,c.jsx)(m,{})}},y={args:{isLoading:!1,isFetching:!0,isError:!1,isEmpty:!1,children:(0,c.jsx)(m,{})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    isError: false,
    isEmpty: true,
    children: <MockChart />
  }
}`,...h.parameters?.docs?.source},description:{story:`First load: a fetch is in flight and there is no data yet, so the loading
overlay is shown instead of the children.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    isError: true,
    isEmpty: false,
    error: {
      description: "We couldn't load this data. Please try again in a moment.",
      // eslint-disable-next-line no-console
      actions: [{
        label: 'Retry',
        onClick: () => console.log('Retry clicked')
      }]
    },
    children: <MockChart />
  }
}`,...g.parameters?.docs?.source},description:{story:`The fetch failed. Shows the error message and a Retry action.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    isError: false,
    isEmpty: true,
    empty: {
      description: 'No traffic recorded for this period.'
    },
    children: <MockChart />
  }
}`,..._.parameters?.docs?.source},description:{story:"Resolved with no rows. Renders no icon by default — a widget opts in via\n`empty.icon` with its own neutral glyph, distinct from the error state.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    isError: false,
    isEmpty: false,
    children: <MockChart />
  }
}`,...v.parameters?.docs?.source},description:{story:`Success: the children (a mock bar chart) render as-is.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    isFetching: true,
    isError: false,
    isEmpty: false,
    children: <MockChart />
  }
}`,...y.parameters?.docs?.source},description:{story:`Background refetch: the chart stays visible under a non-blocking busy overlay
while fresh data loads.`,...y.parameters?.docs?.description}}},b=[`Loading`,`Error`,`Empty`,`Ready`,`Busy`]}))();export{y as Busy,_ as Empty,g as Error,h as Loading,v as Ready,b as __namedExportsOrder,d as default};