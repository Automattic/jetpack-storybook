import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as o,ut as s}from"./build-module-DmVuor49.js";import{d as c,t as l}from"./src-B3le4dug.js";import{g as u,t as d}from"./src-DN9VFS2M.js";import{Yt as f,ht as p,pr as m}from"./chart-tooltip-BvKnA4Ej.js";import{F as h,M as g,N as _,m as v,z as y}from"./report-metric-BBgOiYJZ.js";import{t as b}from"./widget-state-Dq0PZ7To.js";import{C as x,S,T as C,b as w,t as T,w as E,x as D}from"./src-Vd2hm5Bb.js";function O(e){return m(e).map((e,t)=>({id:e.subscription_id??`row-${t}`,name:e.label,avatarUrl:e.icon,href:e.link,secondaryText:u(e.date_subscribed)}))}function k({attributes:e}){let{data:t,isLoading:n,isFetching:i,isError:a,refetch:o}=f({type:`all`,max:e?.num&&e.num>0?e.num:6}),s=t,l=(0,j.useMemo)(()=>O(s),[s]),u=Number(s?.summary?.total??0),d=Math.max(u-l.length,0);return(0,M.jsx)(b,{isLoading:n,isFetching:i,isError:l.length===0&&a,isEmpty:l.length===0,error:{description:r(`We couldn't load subscribers. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:o}]},empty:{icon:c,description:r(`No subscribers yet.`,`jetpack-premium-analytics`)},children:(0,M.jsx)(N,{items:l,moreCount:d})})}function A({attributes:e={}}){return(0,M.jsx)(y,{attributes:e,children:(0,M.jsx)(k,{attributes:e})})}var j,M,N,P=t((()=>{p(),d(),l(),T(),i(),j=e(n(),1),M=a(),N=({items:e=[],moreCount:t=0})=>(0,M.jsx)(`div`,{children:(0,M.jsx)(v,{items:e,moreCount:t})})})),F,I=t((()=>{i(),o(),F={name:`jpa/subscribers-list`,title:r(`Latest Subscribers`,`jetpack-premium-analytics`),help:{content:r(`Your most recent subscribers.`,`jetpack-premium-analytics`)},icon:s,attributes:[{id:`num`,label:r(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{num:6}}}}));function L(e){return(0,R.jsx)(A,{attributes:{num:e}})}var R,z,B,V,H,U,W,G,K;t((()=>{E(),w(),g(),P(),I(),R=a(),_(),z=`storybook/subscribers-list`,B={title:`Packages/Premium Analytics/Widgets/SubscribersList`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:'Dashboard widget listing the most recent subscribers (avatar + name + relative "since" time) with an "N more" footer. Data comes from the designated `useStatsFollowers` hook; in Storybook it is served by `registerReportMocks`.'}}}},V={render:()=>(0,R.jsx)(A,{attributes:{num:6}}),decorators:[D]},H={render:()=>L(5),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(h(`stats/followers`,`loading`),()=>h(`stats/followers`,null))},U={render:()=>L(7),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(h(`stats/followers`,`error`),()=>h(`stats/followers`,null))},W={render:()=>L(8),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(h(`stats/followers`,`empty`),()=>h(`stats/followers`,null))},G={render:e=>(0,R.jsx)(x,{...e,widgetType:F,renderModule:z,renderComponent:A,attributes:{num:6}}),args:{...S},argTypes:{...C}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <SubscribersListRender attributes={{
    num: 6
  }} />,
  decorators: [withWidgetCanvas]
}`,...V.parameters?.docs?.source},description:{story:`The widget on its own, populated from mocked followers data.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => renderSubscribersListWithNum(5),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/followers', 'loading');
    return () => setReportMockState('stats/followers', null);
  }
}`,...H.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => renderSubscribersListWithNum(7),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/followers', 'error');
    return () => setReportMockState('stats/followers', null);
  }
}`,...U.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => renderSubscribersListWithNum(8),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/followers', 'empty');
    return () => setReportMockState('stats/followers', null);
  }
}`,...W.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral customer
glyph and "No subscribers yet.").`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <WidgetDashboardWithWidgetStory {...args} widgetType={widgetDefinition} renderModule={SUBSCRIBERS_LIST_RENDER_MODULE} renderComponent={SubscribersListRender as ComponentType<WidgetRenderProps<unknown>>} attributes={{
    num: 6
  }} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...G.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...G.parameters?.docs?.description}}},K=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{V as Default,W as Empty,U as Error,H as Loading,G as WidgetDashboardWithWidget,K as __namedExportsOrder,B as default};