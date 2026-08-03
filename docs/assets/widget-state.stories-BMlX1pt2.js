import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{R as n,n as r}from"./build-module-DoJYX5DX.js";import{n as i,t as a}from"./with-chart-theme-CBZeF4HU.js";import{t as o}from"./bar-chart-BitcsmQB.js";import{n as s,r as c,t as l}from"./widget-state-B9fopQoy.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{r(),a(),c(),s(),u=t(),d=({title:e,height:t=`320px`,children:n})=>(0,u.jsxs)(`div`,{style:{width:`360px`,height:t,border:`1px solid var(--wpds-color-stroke-surface-neutral-weak)`,borderRadius:`var(--wpds-border-radius-md)`,background:`var(--wpds-color-background-surface-neutral)`,display:`flex`,flexDirection:`column`,overflow:`hidden`},children:[(0,u.jsx)(`div`,{style:{padding:`var(--wpds-dimension-gap-lg)`,borderBottom:`1px solid var(--wpds-color-stroke-surface-neutral-weak)`,fontWeight:600,fontSize:`var(--wpds-typography-font-size-sm)`,color:`var(--wpds-color-foreground-content-neutral)`},children:e}),(0,u.jsx)(`div`,{style:{position:`relative`,flex:1,minHeight:0},children:n})]}),f=(e,t)=>(0,u.jsx)(d,{title:`Traffic by source`,height:t.parameters.widgetCardHeight,children:(0,u.jsx)(e,{})}),p={title:`Packages/Premium Analytics/Widgets Toolkit/Components/WidgetState`,component:l,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"Data-agnostic widget content-area state. Derives one state (error → loading → empty → ready, plus a busy overlay on background refetch) from four boolean signals and renders it. Callers map their fetch result to the signals and pass generic `error` / `empty` descriptors. Stories render it inside a mock widget card; the ready and busy states show a mock bar chart standing in for real widget content."}}},decorators:[f,i]},m=[{stroke:`#3858E9`}],h=[{label:`Dec 16, 2025-Jan 14, 2026`,data:[{label:`Direct`,value:4200},{label:`Search`,value:3100},{label:`Social`,value:2600},{label:`Email`,value:2050}]}],g=()=>(0,u.jsx)(`div`,{style:{width:`100%`,height:`100%`,boxSizing:`border-box`,padding:`var(--wpds-dimension-gap-lg)`},children:(0,u.jsx)(o,{chartData:h,dataFormat:{type:`number`},styles:m})}),_={args:{isLoading:!0,isError:!1,isEmpty:!0,children:(0,u.jsx)(g,{})}},v={args:{isLoading:!1,isError:!0,isEmpty:!1,error:{description:`We couldn't load this data. Please try again in a moment.`,actions:[{label:`Retry`,onClick:()=>console.log(`Retry clicked`)}]},children:(0,u.jsx)(g,{})}},y={args:{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:`No traffic recorded for this period.`},children:(0,u.jsx)(g,{})}},b={args:{isLoading:!1,isError:!1,isEmpty:!0,empty:{icon:n,description:`No traffic recorded for this period.`},children:(0,u.jsx)(g,{})}},x={parameters:{widgetCardHeight:`180px`},args:{isLoading:!1,isError:!0,isEmpty:!1,error:{description:`We couldn't load this data. Please try again in a moment.`,actions:[{label:`Retry`,onClick:()=>console.log(`Retry clicked`)}]},children:(0,u.jsx)(g,{})}},S={parameters:{widgetCardHeight:`180px`},args:{isLoading:!1,isError:!1,isEmpty:!0,empty:{icon:n,description:`No traffic recorded for this period.`},children:(0,u.jsx)(g,{})}},C={args:{isLoading:!1,isError:!1,isEmpty:!1,children:(0,u.jsx)(g,{})}},w={args:{isLoading:!1,isFetching:!0,isError:!1,isEmpty:!1,children:(0,u.jsx)(g,{})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    isError: false,
    isEmpty: true,
    children: <MockChart />
  }
}`,..._.parameters?.docs?.source},description:{story:`First load: a fetch is in flight and there is no data yet, so the loading
overlay is shown instead of the children.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`The fetch failed. Shows the error message and a Retry action.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    isError: false,
    isEmpty: true,
    empty: {
      description: 'No traffic recorded for this period.'
    },
    children: <MockChart />
  }
}`,...y.parameters?.docs?.source},description:{story:"Resolved with no rows. Renders no icon by default — a widget opts in via\n`empty.icon` with its own neutral glyph, distinct from the error state.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    isError: false,
    isEmpty: true,
    empty: {
      icon: search,
      description: 'No traffic recorded for this period.'
    },
    children: <MockChart />
  }
}`,...b.parameters?.docs?.source},description:{story:`Empty state with an opt-in icon at a regular tile height (above the 140px
short-tile breakpoint): the glyph renders above the text.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    widgetCardHeight: '180px'
  },
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
}`,...x.parameters?.docs?.source},description:{story:`Error on a short tile (below the 140px body breakpoint): the container query
hides the glyph so the text-only state stays vertically centered inside the
body and never overlaps the widget footer.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    widgetCardHeight: '180px'
  },
  args: {
    isLoading: false,
    isError: false,
    isEmpty: true,
    empty: {
      icon: search,
      description: 'No traffic recorded for this period.'
    },
    children: <MockChart />
  }
}`,...S.parameters?.docs?.source},description:{story:`Empty (with an opt-in icon) on a short tile: same degradation as the error
state — the glyph hides and the text stays vertically centered.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    isError: false,
    isEmpty: false,
    children: <MockChart />
  }
}`,...C.parameters?.docs?.source},description:{story:`Success: the children (a mock bar chart) render as-is.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    isFetching: true,
    isError: false,
    isEmpty: false,
    children: <MockChart />
  }
}`,...w.parameters?.docs?.source},description:{story:`Background refetch: the chart stays visible under a non-blocking busy overlay
while fresh data loads.`,...w.parameters?.docs?.description}}},T=[`Loading`,`Error`,`Empty`,`EmptyWithIcon`,`ErrorShortTile`,`EmptyShortTileWithIcon`,`Ready`,`Busy`]}))();export{w as Busy,y as Empty,S as EmptyShortTileWithIcon,b as EmptyWithIcon,v as Error,x as ErrorShortTile,_ as Loading,C as Ready,T as __namedExportsOrder,p as default};