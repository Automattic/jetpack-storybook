import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as o,ut as s}from"./build-module-DoJYX5DX.js";import{G as c,W as l,Z as u,g as d,q as f}from"./report-metric-BZKq9I9M.js";import{d as p,t as m}from"./src-B3le4dug.js";import{M as h,t as g}from"./src-B6ulckTz.js";import{tn as ee,xt as te,yr as _}from"./chart-tooltip-BHxZ4UFz.js";import{t as v}from"./widget-state-muBMjCZx.js";import{C as y,D as b,E as x,S,T as C,b as w,t as T,w as E,x as D}from"./src-Cpa-QPvJ.js";function O(e){return _(e).map((e,t)=>({id:e.subscription_id??`row-${t}`,name:e.label,avatarUrl:e.icon,href:e.link,secondaryText:h(e.date_subscribed)}))}function k({attributes:e}){let{data:t,isLoading:n,isFetching:i,isError:a,refetch:o}=ee({type:`all`,max:e?.max&&e.max>0?e.max:6}),s=t,c=(0,j.useMemo)(()=>O(s),[s]),l=Number(s?.summary?.total??0),u=Math.max(l-c.length,0);return(0,M.jsx)(v,{isLoading:n,isFetching:i,isError:c.length===0&&a,isEmpty:c.length===0,error:{description:r(`We couldn't load subscribers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]},empty:{icon:p,description:r(`No subscribers yet.`,`jetpack-premium-analytics-pkg`)},children:(0,M.jsx)(N,{items:c,moreCount:u})})}function A({attributes:e={}}){return(0,M.jsx)(u,{attributes:e,children:(0,M.jsx)(k,{attributes:e})})}var j,M,N,ne=t((()=>{te(),g(),m(),T(),i(),j=e(n(),1),M=a(),N=({items:e=[],moreCount:t=0})=>(0,M.jsx)(`div`,{children:(0,M.jsx)(d,{items:e,moreCount:t})})})),P,F=t((()=>{i(),o(),P={icon:s,attributes:[{id:`max`,label:r(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:6}}}})),I,L,R,z,B,V,H,U=t((()=>{I=`jpa/subscribers-list`,L=`Latest subscribers`,R=`Your most recent subscribers.`,z={content:`Your most recent subscribers.`},B=`subscribers`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function W(e){return(0,G.jsx)(A,{attributes:{max:e}})}var G,K,q,J,Y,X,Z,Q,$;t((()=>{x(),y(),w(),l(),ne(),F(),U(),G=a(),c(),K=`storybook/subscribers-list`,q={title:`Packages/Premium Analytics/Widgets/SubscribersList`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:'Dashboard widget listing the most recent subscribers (avatar + name + relative "since" time) with an "N more" footer. Data comes from the designated `useStatsFollowers` hook; in Storybook it is served by `registerReportMocks`.'}}}},J={render:()=>(0,G.jsx)(A,{attributes:{max:6}}),decorators:[D]},Y={render:()=>W(5),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(f(`stats/followers`,`loading`),()=>f(`stats/followers`,null))},X={render:()=>W(7),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(f(`stats/followers`,`error`),()=>f(`stats/followers`,null))},Z={render:()=>W(8),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(f(`stats/followers`,`empty`),()=>f(`stats/followers`,null))},Q={render:e=>(0,G.jsx)(C,{...e,widgetType:S(H,P),renderModule:K,renderComponent:A,attributes:{max:6}}),args:{...E},argTypes:{...b}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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