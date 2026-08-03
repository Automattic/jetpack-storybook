import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as o,ut as s}from"./build-module-DmVuor49.js";import{H as c,J as l,V as u,W as d,g as f}from"./report-metric-DM3QMMla.js";import{d as p,t as m}from"./src-B3le4dug.js";import{k as h,t as g}from"./src-Ddlvl-_o.js";import{tn as ee,xt as te,yr as ne}from"./chart-tooltip-BT4xH6K9.js";import{t as _}from"./widget-state-DTzn_gvS.js";import{C as v,D as y,E as b,S as x,T as S,b as C,t as w,w as T,x as E}from"./src-DS4TR0-7.js";function D(e){return ne(e).map((e,t)=>({id:e.subscription_id??`row-${t}`,name:e.label,avatarUrl:e.icon,href:e.link,secondaryText:h(e.date_subscribed)}))}function O({attributes:e}){let{data:t,isLoading:n,isFetching:i,isError:a,refetch:o}=ee({type:`all`,max:e?.max&&e.max>0?e.max:6}),s=t,c=(0,A.useMemo)(()=>D(s),[s]),l=Number(s?.summary?.total??0),u=Math.max(l-c.length,0);return(0,j.jsx)(_,{isLoading:n,isFetching:i,isError:c.length===0&&a,isEmpty:c.length===0,error:{description:r(`We couldn't load subscribers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]},empty:{icon:p,description:r(`No subscribers yet.`,`jetpack-premium-analytics-pkg`)},children:(0,j.jsx)(M,{items:c,moreCount:u})})}function k({attributes:e={}}){return(0,j.jsx)(l,{attributes:e,children:(0,j.jsx)(O,{attributes:e})})}var A,j,M,N=t((()=>{te(),g(),m(),w(),i(),A=e(n(),1),j=a(),M=({items:e=[],moreCount:t=0})=>(0,j.jsx)(`div`,{children:(0,j.jsx)(f,{items:e,moreCount:t})})})),P,F=t((()=>{i(),o(),P={icon:s,attributes:[{id:`max`,label:r(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:6}}}})),I,L,R,z,B,V,H,U=t((()=>{I=`jpa/subscribers-list`,L=`Latest subscribers`,R=`Your most recent subscribers.`,z={content:`Your most recent subscribers.`},B=`subscribers`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function W(e){return(0,G.jsx)(k,{attributes:{max:e}})}var G,K,q,J,Y,X,Z,Q,$;t((()=>{b(),v(),C(),u(),N(),F(),U(),G=a(),c(),K=`storybook/subscribers-list`,q={title:`Packages/Premium Analytics/Widgets/SubscribersList`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:'Dashboard widget listing the most recent subscribers (avatar + name + relative "since" time) with an "N more" footer. Data comes from the designated `useStatsFollowers` hook; in Storybook it is served by `registerReportMocks`.'}}}},J={render:()=>(0,G.jsx)(k,{attributes:{max:6}}),decorators:[E]},Y={render:()=>W(5),tags:[`!autodocs`],decorators:[E],beforeEach:()=>(d(`stats/followers`,`loading`),()=>d(`stats/followers`,null))},X={render:()=>W(7),tags:[`!autodocs`],decorators:[E],beforeEach:()=>(d(`stats/followers`,`error`),()=>d(`stats/followers`,null))},Z={render:()=>W(8),tags:[`!autodocs`],decorators:[E],beforeEach:()=>(d(`stats/followers`,`empty`),()=>d(`stats/followers`,null))},Q={render:e=>(0,G.jsx)(S,{...e,widgetType:x(H,P),renderModule:K,renderComponent:k,attributes:{max:6}}),args:{...T},argTypes:{...y}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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