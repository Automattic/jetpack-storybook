import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as o,ui as s}from"./build-module-CDRs4YxF.js";import{$ as c,G as l,K as u,Y as d}from"./report-metric-CPA6R3m5.js";import{p as ee,t as f}from"./src-BKLK-O8P.js";import{W as p,t as m}from"./src-CTZFYwrN.js";import{$t as h,F as g,t as _}from"./src-Cmxy-Z5o.js";import{t as te}from"./widget-state-CJmMNZzn.js";import{r as v,t as ne}from"./subscriber-list-skeleton-2Wm2Rwxf.js";import{C as re,D as y,E as b,S as x,T as S,b as C,t as w,w as T,x as E}from"./src-Oqkq0snT.js";function D(e){return h(e).map((e,t)=>({id:e.subscription_id??`row-${t}`,name:e.label,avatarUrl:e.icon,href:e.link,secondaryText:p(e.date_subscribed)}))}function O({attributes:e}){let t=e?.max&&e.max>0?e.max:6,{data:n,isLoading:i,isFetching:a,isError:o,refetch:s}=g({type:`all`,max:t}),c=n,l=(0,A.useMemo)(()=>D(c),[c]),u=Number(c?.summary?.total??0),d=Math.max(u-l.length,0);return(0,j.jsx)(te,{isLoading:i,isFetching:a,isError:l.length===0&&o,isEmpty:l.length===0,renderLoading:(0,j.jsx)(ne,{rows:t}),error:{description:r(`We couldn't load subscribers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:ee,description:r(`No subscribers yet.`,`jetpack-premium-analytics-pkg`)},children:(0,j.jsx)(M,{items:l,moreCount:d})})}function k({attributes:e={}}){return(0,j.jsx)(c,{attributes:e,children:(0,j.jsx)(O,{attributes:e})})}var A,j,M,N=t((()=>{_(),m(),f(),w(),i(),A=e(n(),1),j=a(),M=({items:e=[],moreCount:t=0})=>(0,j.jsx)(`div`,{children:(0,j.jsx)(v,{items:e,moreCount:t})})})),P,F=t((()=>{i(),o(),P={icon:s,attributes:[{id:`max`,label:r(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:6}}}})),I,L,R,z,B,V,H,U=t((()=>{I=`jpa/subscribers-list`,L=`Latest subscribers`,R=`Your most recent subscribers.`,z={content:`Your most recent subscribers.`},B=`subscribers`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function W(e){return(0,G.jsx)(k,{attributes:{max:e}})}var G,K,q,J,Y,X,Z,Q,$;t((()=>{b(),re(),C(),l(),N(),F(),U(),G=a(),u(),K=`storybook/subscribers-list`,q={title:`Packages/Premium Analytics/Widgets/SubscribersList`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:'Dashboard widget listing the most recent subscribers (avatar + name + relative "since" time) with an "N more" footer. Data comes from the designated `useStatsFollowers` hook; in Storybook it is served by `registerReportMocks`.'}}}},J={render:()=>(0,G.jsx)(k,{attributes:{max:6}}),decorators:[E]},Y={render:()=>W(5),tags:[`!autodocs`],decorators:[E],beforeEach:()=>(d(`stats/followers`,`loading`),()=>d(`stats/followers`,null))},X={render:()=>W(7),tags:[`!autodocs`],decorators:[E],beforeEach:()=>(d(`stats/followers`,`error`),()=>d(`stats/followers`,null))},Z={render:()=>W(8),tags:[`!autodocs`],decorators:[E],beforeEach:()=>(d(`stats/followers`,`empty`),()=>d(`stats/followers`,null))},Q={render:e=>(0,G.jsx)(S,{...e,widgetType:x(H,P),renderModule:K,renderComponent:k,attributes:{max:6}}),args:{...T},argTypes:{...y}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <SubscribersListRender attributes={{
    max: 6
  }} />,
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`The widget on its own, populated from mocked followers data.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderSubscribersListWithMax(5),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/followers', 'loading');
    return () => setReportMockState('stats/followers', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderSubscribersListWithMax(7),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/followers', 'error');
    return () => setReportMockState('stats/followers', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderSubscribersListWithMax(8),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/followers', 'empty');
    return () => setReportMockState('stats/followers', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral customer
glyph and "No subscribers yet.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <WidgetDashboardWithWidgetStory {...args} widgetType={createStoryWidgetType(widgetManifest, widgetDefinition)} renderModule={SUBSCRIBERS_LIST_RENDER_MODULE} renderComponent={SubscribersListRender as ComponentType<WidgetRenderProps<unknown>>} attributes={{
    max: 6
  }} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,q as default};