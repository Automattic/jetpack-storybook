import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as o,ui as s}from"./build-module-CDRs4YxF.js";import{J as c,Z as l,q as u,tt as d}from"./report-metric-CdKPbOS4.js";import{p as f,t as p}from"./src-BKLK-O8P.js";import{W as m,t as ee}from"./src-DMR5khFl.js";import{L as te,t as h,tn as g}from"./src-Ci2M5OLA.js";import"./constants-B1kGztHF.js";import{t as _}from"./widget-state-D-WCzMRJ.js";import{r as ne,t as v}from"./subscriber-list-skeleton-CRw2smoZ.js";import{C as y,D as b,E as x,S,T as C,b as w,t as T,w as E,x as D}from"./src-B2_q1OjX.js";function O(e){return g(e).map((e,t)=>({id:e.subscription_id??`row-${t}`,name:e.label,avatarUrl:e.icon,href:e.link,secondaryText:m(e.date_subscribed)}))}function k(){let{data:e,isLoading:t,isFetching:n,isError:i,refetch:a}=te({type:`all`,max:10}),o=e,s=(0,j.useMemo)(()=>O(o),[o]),c=Number(o?.summary?.total??0),l=Math.max(c-s.length,0);return(0,M.jsx)(_,{isLoading:t,isFetching:n,isError:s.length===0&&i,isEmpty:s.length===0,renderLoading:(0,M.jsx)(v,{rows:10}),error:{description:r(`We couldn't load subscribers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:a}]},empty:{icon:f,description:r(`No subscribers yet.`,`jetpack-premium-analytics-pkg`)},children:(0,M.jsx)(N,{items:s,moreCount:l})})}function A({attributes:e={}}){return(0,M.jsx)(d,{attributes:e,children:(0,M.jsx)(k,{})})}var j,M,N,P=t((()=>{h(),ee(),p(),T(),i(),j=e(n(),1),M=a(),N=({items:e=[],moreCount:t=0})=>(0,M.jsx)(ne,{items:e,moreCount:t})})),F,I=t((()=>{o(),F={icon:s,attributes:[],example:{attributes:{}}}})),L,R,z,B,V,H,U,W=t((()=>{L=`jpa/subscribers-list`,R=`Latest subscribers`,z=`Your most recent subscribers.`,B={content:`Your most recent subscribers.`},V=`subscribers`,H=`framed`,U={name:L,title:R,description:z,help:B,category:V,presentation:H}})),G,K,q,J,Y,X,Z,Q,$;t((()=>{x(),y(),w(),u(),P(),I(),W(),G=a(),c(),K=`storybook/subscribers-list`,q={title:`Packages/Premium Analytics/Widgets/SubscribersList`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:'Dashboard widget listing the most recent subscribers (avatar + name + relative "since" time) with an "N more" footer. Data comes from the designated `useStatsFollowers` hook; in Storybook it is served by `registerReportMocks`.'}}}},J={render:()=>(0,G.jsx)(A,{attributes:{}}),decorators:[D]},Y={render:()=>(0,G.jsx)(A,{attributes:{}}),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(l(`stats/followers`,`loading`),()=>l(`stats/followers`,null))},X={render:()=>(0,G.jsx)(A,{attributes:{}}),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(l(`stats/followers`,`error`),()=>l(`stats/followers`,null))},Z={render:()=>(0,G.jsx)(A,{attributes:{}}),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(l(`stats/followers`,`empty`),()=>l(`stats/followers`,null))},Q={render:e=>(0,G.jsx)(C,{...e,widgetType:S(U,F),renderModule:K,renderComponent:A,attributes:{}}),args:{...E},argTypes:{...b}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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