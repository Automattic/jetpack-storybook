import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DQ5lAs4a.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{ci as o,n as s}from"./build-module-C6Ow06jV.js";import{d as c,t as l}from"./src-Bf8IXmOS.js";import{g as u,t as d}from"./src-AIpdnvxP.js";import{Vt as f,ut as p}from"./chart-tooltip-DqNxd0Qa.js";import{C as m,S as h,T as g,k as _,o as v}from"./report-metric-mJByfr0v.js";import{t as y}from"./widget-state-BA9Bfb7Y.js";import{S as b,b as x,t as S,x as C,y as w}from"./src-DJ22BSsE.js";import{n as T,r as E}from"./with-widget-canvas-Dz43KNHY.js";function D(e){return(e?.data.flatMap(e=>e.items)??[]).map((e,t)=>({id:e.subscription_id??`row-${t}`,name:e.label,avatarUrl:e.icon,href:e.link,secondaryText:u(e.date_subscribed)}))}function O({attributes:e}){let{data:t,isLoading:n,isFetching:i,isError:a,refetch:o}=f({type:`all`,max:e?.num&&e.num>0?e.num:6}),s=t,l=(0,A.useMemo)(()=>D(s),[s]),u=Number(s?.summary?.total??0),d=Math.max(u-l.length,0);return(0,j.jsx)(y,{isLoading:n,isFetching:i,isError:l.length===0&&a,isEmpty:l.length===0,error:{description:r(`We couldn't load subscribers. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:o}]},empty:{icon:c,description:r(`No subscribers yet.`,`jetpack-premium-analytics`)},children:(0,j.jsx)(M,{items:l,moreCount:d})})}function k({attributes:e={}}){return(0,j.jsx)(_,{attributes:e,children:(0,j.jsx)(O,{attributes:e})})}var A,j,M,N=t((()=>{p(),d(),l(),S(),i(),A=e(n(),1),j=a(),M=({items:e=[],moreCount:t=0})=>(0,j.jsx)(`div`,{children:(0,j.jsx)(v,{items:e,moreCount:t})})})),P,F=t((()=>{i(),s(),P={name:`jpa/subscribers-list`,title:r(`Latest Subscribers`,`jetpack-premium-analytics`),help:{content:r(`Your most recent subscribers.`,`jetpack-premium-analytics`)},icon:o,attributes:[{id:`num`,label:r(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{num:6}}}}));function I(e){return(0,L.jsx)(k,{attributes:{num:e}})}var L,R,z,B,V,H,U,W,G;t((()=>{C(),T(),h(),N(),F(),L=a(),m(),R=`storybook/subscribers-list`,z={title:`Packages/Premium Analytics/Widgets/SubscribersList`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:'Dashboard widget listing the most recent subscribers (avatar + name + relative "since" time) with an "N more" footer. Data comes from the designated `useStatsFollowers` hook; in Storybook it is served by `registerReportMocks`.'}}}},B={render:()=>(0,L.jsx)(k,{attributes:{num:6}}),decorators:[E]},V={render:()=>I(5),tags:[`!autodocs`],decorators:[E],beforeEach:()=>(g(`stats/followers`,`loading`),()=>g(`stats/followers`,null))},H={render:()=>I(7),tags:[`!autodocs`],decorators:[E],beforeEach:()=>(g(`stats/followers`,`error`),()=>g(`stats/followers`,null))},U={render:()=>I(8),tags:[`!autodocs`],decorators:[E],beforeEach:()=>(g(`stats/followers`,`empty`),()=>g(`stats/followers`,null))},W={render:e=>(0,L.jsx)(x,{...e,widgetType:P,renderModule:R,renderComponent:k,attributes:{num:6}}),args:{...w},argTypes:{...b}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <SubscribersListRender attributes={{
    num: 6
  }} />,
  decorators: [withWidgetCanvas]
}`,...B.parameters?.docs?.source},description:{story:`The widget on its own, populated from mocked followers data.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => renderSubscribersListWithNum(5),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/followers', 'loading');
    return () => setReportMockState('stats/followers', null);
  }
}`,...V.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => renderSubscribersListWithNum(7),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/followers', 'error');
    return () => setReportMockState('stats/followers', null);
  }
}`,...H.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => renderSubscribersListWithNum(8),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/followers', 'empty');
    return () => setReportMockState('stats/followers', null);
  }
}`,...U.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral customer
glyph and "No subscribers yet.").`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <WidgetDashboardWithWidgetStory {...args} widgetType={widgetDefinition} renderModule={SUBSCRIBERS_LIST_RENDER_MODULE} renderComponent={SubscribersListRender as ComponentType<WidgetRenderProps<unknown>>} attributes={{
    num: 6
  }} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...W.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...W.parameters?.docs?.description}}},G=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{B as Default,U as Empty,H as Error,V as Loading,W as WidgetDashboardWithWidget,G as __namedExportsOrder,z as default};