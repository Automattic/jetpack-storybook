import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{n,t as r}from"./widget-state-BHtIizq9.js";import{n as i,t as a}from"./with-chart-theme-DdqtgIuA.js";import{n as o,t as s}from"./bar-chart-J7LAtUR5.js";var c=e((()=>{o()})),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{a(),c(),n(),l=t(),u=({title:e,height:t=`320px`,children:n})=>(0,l.jsxs)(`div`,{style:{width:`360px`,height:t,border:`1px solid var(--wpds-color-stroke-surface-neutral-weak)`,borderRadius:`var(--wpds-border-radius-md)`,background:`var(--wpds-color-background-surface-neutral)`,display:`flex`,flexDirection:`column`,overflow:`hidden`},children:[(0,l.jsx)(`div`,{style:{padding:`var(--wpds-dimension-gap-lg)`,borderBottom:`1px solid var(--wpds-color-stroke-surface-neutral-weak)`,fontWeight:600,fontSize:`var(--wpds-typography-font-size-sm)`,color:`var(--wpds-color-foreground-content-neutral)`},children:e}),(0,l.jsx)(`div`,{style:{position:`relative`,flex:1,minHeight:0},children:n})]}),d=(e,t)=>(0,l.jsx)(u,{title:`Traffic by source`,height:t.parameters.widgetCardHeight,children:(0,l.jsx)(e,{})}),f={title:`Packages/Premium Analytics/Widgets Toolkit/Components/WidgetState`,component:r,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"Data-agnostic widget content-area state. Derives one state (error → loading → empty → ready) from four boolean signals and renders it. The skeleton is reserved for `isLoading`, meaning nothing on screen answers the current params; a background revalidation (`isFetching` alone) draws nothing and only marks the widget busy. Callers map their fetch result to the signals and pass generic `error` / `empty` descriptors. Stories render it inside a mock widget card; the ready state shows a mock bar chart standing in for real widget content."}}},decorators:[d,i]},p=[{stroke:`#3858E9`}],m=[{label:`Dec 16, 2025-Jan 14, 2026`,data:[{label:`Direct`,value:4200},{label:`Search`,value:3100},{label:`Social`,value:2600},{label:`Email`,value:2050}]}],h=()=>(0,l.jsx)(`div`,{style:{width:`100%`,height:`100%`,boxSizing:`border-box`,padding:`var(--wpds-dimension-gap-lg)`},children:(0,l.jsx)(s,{chartData:m,dataFormat:{type:`number`},styles:p})}),g={args:{isLoading:!0,isError:!1,isEmpty:!0,children:(0,l.jsx)(h,{})}},_={args:{isLoading:!1,isError:!0,isEmpty:!1,error:{description:`We couldn't load this data. Please try again in a moment.`,actions:[{label:`Retry`,onClick:()=>console.log(`Retry clicked`)}]},children:(0,l.jsx)(h,{})}},v={args:{isLoading:!1,isError:!1,isEmpty:!0,children:(0,l.jsx)(h,{})}},y={args:{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:`Open an author to see their top posts here.`},children:(0,l.jsx)(h,{})}},b={args:{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:`You haven’t published any posts yet.`,action:{label:`Create post`,href:`/wp-admin/post-new.php`}},children:(0,l.jsx)(h,{})}},x={parameters:{widgetCardHeight:`180px`},args:{isLoading:!1,isError:!0,isEmpty:!1,error:{description:`We couldn't load this data. Please try again in a moment.`,actions:[{label:`Retry`,onClick:()=>console.log(`Retry clicked`)}]},children:(0,l.jsx)(h,{})}},S={parameters:{widgetCardHeight:`180px`},args:{isLoading:!1,isError:!1,isEmpty:!0,children:(0,l.jsx)(h,{})}},C={args:{isLoading:!1,isError:!1,isEmpty:!1,children:(0,l.jsx)(h,{})}},w={args:{isLoading:!1,isFetching:!0,isError:!1,isEmpty:!1,children:(0,l.jsx)(h,{})}},T=[`Loading`,`Error`,`Empty`,`EmptyCustom`,`EmptyWithAction`,`ErrorShortTile`,`EmptyShortTile`,`Ready`,`Refetching`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    isError: false,
    isEmpty: true,
    children: <MockChart />
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`The fetch failed. Shows the error message and a Retry action.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    isError: false,
    isEmpty: true,
    children: <MockChart />
  }
}`,...v.parameters?.docs?.source},description:{story:'Resolved with no rows for the selected period, with no `empty` passed: the\ngeneric magnifier glyph and "We couldn’t find results for this time period."',...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    isError: false,
    isEmpty: true,
    empty: {
      description: 'Open an author to see their top posts here.'
    },
    children: <MockChart />
  }
}`,...y.parameters?.docs?.source},description:{story:`A widget's own empty state, for a case the generic copy does not describe
(here a scope prompt). It keeps the generic magnifier unless it names an icon.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    isError: false,
    isEmpty: true,
    empty: {
      description: 'You haven’t published any posts yet.',
      action: {
        label: 'Create post',
        href: '/wp-admin/post-new.php'
      }
    },
    children: <MockChart />
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    children: <MockChart />
  }
}`,...S.parameters?.docs?.source},description:{story:`The generic empty state on a short tile: same degradation as the error
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
}`,...w.parameters?.docs?.source},description:{story:"Unchanged params being revalidated. Identical to `Ready` by design — only\n`aria-busy` differs.",...w.parameters?.docs?.description}}}}))();export{v as Empty,y as EmptyCustom,S as EmptyShortTile,b as EmptyWithAction,_ as Error,x as ErrorShortTile,g as Loading,C as Ready,w as Refetching,T as __namedExportsOrder,f as default};