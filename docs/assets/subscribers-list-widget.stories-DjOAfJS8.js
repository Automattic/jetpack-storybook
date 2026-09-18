import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{li as o,t as s}from"./build-module-2iv4IIRq.js";import{g as c}from"./hooks-DgXDBs_q.js";import{Za as l,ao as u,to as d}from"./iframe-DggzOz4l.js";import{p as f,t as ee}from"./src-C-E2d-Lb.js";import{k as te,t as ne}from"./src-D1E5MwTJ.js";import{J as re,pn as ie,r as p}from"./date-period-dropdown-CjSE2zp6.js";import"./constants-B1kGztHF.js";import{c as m,i as ae,r as h}from"./register-report-mocks--48klYMF.js";import{t as g}from"./widget-state-DqRjq7Um.js";import{r as _,t as v}from"./subscriber-list-skeleton-BCYeeJ9X.js";import{t as y}from"./src-n1S8Eumm.js";import{a as b,c as x,i as S,l as C,n as w,o as oe,r as T,s as E}from"./with-widget-canvas-Bk84zuqe.js";function D(){let e=d()?.suffix;return e?`${u()?`https://wordpress.com`:`https://cloud.jetpack.com`}/subscribers/${e}`:null}function O(e){let t=ie(e),n=D();return t.map((e,t)=>({id:e.subscription_id??`row-${t}`,name:e.label,avatarUrl:e.icon,href:n&&e.subscription_id?`${n}/${e.subscription_id}`:null,secondaryText:te(e.date_subscribed)}))}function k(){let{data:e,isLoading:t,isFetching:n,isError:i,refetch:a}=re({type:`all`,max:10}),o=e,s=(0,j.useMemo)(()=>O(o),[o]),c=Number(o?.summary?.total??0),l=Math.max(c-s.length,0);return(0,M.jsx)(g,{isLoading:t,isFetching:n,isError:s.length===0&&i,isEmpty:s.length===0,renderLoading:(0,M.jsx)(v,{rows:10}),error:{description:r(`We couldn't load subscribers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:a}]},empty:{icon:f,description:r(`No subscribers yet.`,`jetpack-premium-analytics-pkg`)},children:(0,M.jsx)(N,{items:s,moreCount:l})})}function A({attributes:e={}}){return(0,M.jsx)(c,{attributes:e,children:(0,M.jsx)(k,{})})}var j,M,N,P=t((()=>{l(),p(),ne(),ee(),y(),i(),j=e(n(),1),M=a(),N=({items:e=[],moreCount:t=0})=>(0,M.jsx)(_,{items:e,moreCount:t})})),F,I=t((()=>{s(),F={icon:o,attributes:[],example:{attributes:{}}}})),L,R,z,B,V,H,U,W=t((()=>{L=`jpa/subscribers-list`,R=`Latest subscribers`,z=`Your most recent subscribers.`,B={content:`Your most recent subscribers.`},V=`subscribers`,H=`framed`,U={name:L,title:R,description:z,help:B,category:V,presentation:H}})),G,K,q,J,Y,X,Z,Q,$;t((()=>{x(),b(),w(),h(),P(),I(),W(),G=a(),ae(),window.JetpackScriptData={...window.JetpackScriptData,site:{...window.JetpackScriptData?.site,suffix:`example.com`}},K=`storybook/subscribers-list`,q={title:`Packages/Premium Analytics/Widgets/SubscribersList`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:'Dashboard widget listing the most recent subscribers (avatar + name + relative "since" time) with an "N more" footer. Data comes from the designated `useStatsFollowers` hook; in Storybook it is served by `registerReportMocks`.'}}}},J={render:()=>(0,G.jsx)(A,{attributes:{}}),decorators:[T]},Y={render:()=>(0,G.jsx)(A,{attributes:{}}),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(m(`stats/followers`,`loading`),()=>m(`stats/followers`,null))},X={render:()=>(0,G.jsx)(A,{attributes:{}}),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(m(`stats/followers`,`error`),()=>m(`stats/followers`,null))},Z={render:()=>(0,G.jsx)(A,{attributes:{}}),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(m(`stats/followers`,`empty`),()=>m(`stats/followers`,null))},Q={render:e=>(0,G.jsx)(E,{...e,widgetType:S(U,F),renderModule:K,renderComponent:A,attributes:{}}),args:{...oe},argTypes:{...C}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <SubscribersListRender attributes={{}} />,
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`The widget on its own, populated from mocked followers data.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <SubscribersListRender attributes={{}} />,
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/followers', 'loading');
    return () => setReportMockState('stats/followers', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <SubscribersListRender attributes={{}} />,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/followers', 'error');
    return () => setReportMockState('stats/followers', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <SubscribersListRender attributes={{}} />,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/followers', 'empty');
    return () => setReportMockState('stats/followers', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral customer
glyph and "No subscribers yet.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <WidgetDashboardWithWidgetStory {...args} widgetType={createStoryWidgetType(widgetManifest, widgetDefinition)} renderModule={SUBSCRIBERS_LIST_RENDER_MODULE} renderComponent={SubscribersListRender as ComponentType<WidgetRenderProps<unknown>>} attributes={{}} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,q as default};