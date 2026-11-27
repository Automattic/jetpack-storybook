import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{d as o,o as s,s as ee,t as c}from"./src-BgnB_EuX.js";import{H as l,t as u}from"./src-CFLkDNMV.js";import{Mt as d,Sn as f,t as te}from"./src-l1BVQSEn.js";import{R as ne}from"./charts-provider-BxV5fIk2.js";import{r as re,t as ie}from"./build-module-DqZ3nxpT.js";import{t as ae}from"./widget-state-DErObxxB.js";import{i as oe}from"./with-story-router-C5pyPMeP.js";import"./constants-CP8hc6vI.js";import{n as p,r as m,s as h}from"./register-report-mocks-CDOnqFid.js";import{r as se,t as g}from"./subscriber-list-skeleton-BY7fR_Rk.js";import{a as _,c as v,i as y,l as b,o as x,r as S,s as C,u as ce}from"./with-widget-canvas-DAMYEHpX.js";var w,T,E,D=e((()=>{w=`_root_17ufc_2`,T=`_content_17ufc_9`,E={root:w,content:T}}));function O(){let e=ee()?.suffix;return e?`${o()?`https://wordpress.com`:`https://cloud.jetpack.com`}/subscribers/${e}`:null}function k(e,t){let n=new URL(e,window.location.href),[r,i=``]=(n.searchParams.get(`p`)??`/`).split(`?`),a=new URLSearchParams(i);return a.set(`subscriber`,String(t)),n.searchParams.set(`p`,`${r}?${a}`),n.toString()}function A(e){let t=f(e),n=s()?.newsletter?.subscribersUrl,r=n?null:O(),i=e=>e?n?k(n,e):r?`${r}/${e}`:null:null;return t.map((e,t)=>({id:e.subscription_id??`row-${t}`,name:e.label,avatarUrl:e.icon,href:i(e.subscription_id),openInNewTab:!n,secondaryText:l(e.date_subscribed)}))}function j(){let{data:e,isLoading:t,isFetching:n,isError:i,refetch:a}=d({type:`all`,max:10}),o=e,s=(0,N.useMemo)(()=>A(o),[o]);return(0,P.jsx)(ae,{isLoading:t,isFetching:n,isError:s.length===0&&i,isEmpty:s.length===0,renderLoading:(0,P.jsx)(g,{rows:10}),error:{description:r(`We couldn't load subscribers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:a}]},empty:{description:r(`You don’t have subscribers yet.`,`jetpack-premium-analytics-pkg`)},children:(0,P.jsx)(se,{items:s})})}function M({attributes:e={}}){let t=s()?.newsletter?.subscribersUrl;return re(t?[{id:`manage-subscribers`,label:r(`Manage subscribers`,`jetpack-premium-analytics-pkg`),relevance:`high`,href:t}]:[]),(0,P.jsx)(ne,{attributes:e,children:(0,P.jsx)(`div`,{className:E.root,children:(0,P.jsx)(`div`,{className:E.content,children:(0,P.jsx)(j,{})})})})}var N,P,F=e((()=>{c(),te(),u(),oe(),i(),ie(),N=t(n(),1),D(),P=a()})),I,L,R,z,B,V,H,U,W=e((()=>{I=`jpa/subscribers-list`,L=`jpa/people`,R=`Latest subscribers`,z=`Your most recent subscribers.`,B={content:`Your most recent subscribers.`},V=`subscribers`,H=`framed`,U={name:I,icon:L,title:R,description:z,help:B,category:V,presentation:H}})),G,K,q,J,Y,X,Z,Q,$;e((()=>{b(),x(),S(),p(),F(),W(),G=a(),m(),window.JetpackScriptData={...window.JetpackScriptData,site:{...window.JetpackScriptData?.site,suffix:`example.com`},newsletter:{...window.JetpackScriptData?.newsletter,subscribersUrl:`https://example.com/wp-admin/admin.php?page=jetpack-newsletter&p=%2F%3Ftab%3Dsubscribers`}},K=`storybook/subscribers-list`,q={title:`Packages/Premium Analytics/Widgets/SubscribersList`,component:M,tags:[`autodocs`],parameters:{docs:{description:{component:'Dashboard widget listing the most recent subscribers (avatar + name + relative "since" time). Data comes from the designated `useStatsFollowers` hook; in Storybook it is served by `registerReportMocks`.'}}}},J={render:()=>(0,G.jsx)(M,{attributes:{}}),decorators:[y]},Y={render:()=>(0,G.jsx)(M,{attributes:{}}),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(h(`stats/followers`,`loading`),()=>h(`stats/followers`,null))},X={render:()=>(0,G.jsx)(M,{attributes:{}}),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(h(`stats/followers`,`error`),()=>h(`stats/followers`,null))},Z={render:()=>(0,G.jsx)(M,{attributes:{}}),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(h(`stats/followers`,`empty`),()=>h(`stats/followers`,null))},Q={tags:[`widget-dashboard`],render:e=>(0,G.jsx)(v,{...e,widgetType:_(U),renderModule:K,renderComponent:M,attributes:{}}),args:{...C},argTypes:{...ce}},$=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['widget-dashboard'],
  render: args => <WidgetDashboardWithWidgetStory {...args} widgetType={createStoryWidgetType(widgetManifest)} renderModule={SUBSCRIBERS_LIST_RENDER_MODULE} renderComponent={SubscribersListRender as ComponentType<WidgetRenderProps<unknown>>} attributes={{}} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}}}))();export{J as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,q as default};