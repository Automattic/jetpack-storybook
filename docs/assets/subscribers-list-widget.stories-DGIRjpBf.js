import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-BXPCp--5.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{$a as o,Ja as s,Qa as c,ro as l}from"./iframe-Db--ZA3S.js";import{A as ee,t as te}from"./src-BGYQLfcD.js";import{$t as ne,mt as re,t as ie}from"./src-Cb67uYK_.js";import{m as u}from"./charts-provider-lLnwFhJR.js";import"./rows-DAmD2BmE.js";import{n as ae,r as oe,s as d}from"./register-report-mocks-DrSoJ9KN.js";import{t as se}from"./widget-state-CGJ_THew.js";import{i as ce,o as f}from"./leaderboard-B-Zu7fpn.js";import{r as p,t as m}from"./subscriber-list-skeleton-BEhIvktE.js";import{t as h}from"./src-CIDqCknM.js";import{a as g,g as _,h as v,i as y,m as b,n as x,p as S,r as C}from"./with-widget-canvas-DLVzIgMG.js";var w,T,E,le=t((()=>{w=`_root_17ufc_2`,T=`_content_17ufc_9`,E={root:w,content:T}}));function ue(){let e=o()?.suffix;return e?`${l()?`https://wordpress.com`:`https://cloud.jetpack.com`}/subscribers/${e}`:null}function D(e,t){let n=new URL(e,window.location.href),[r,i=``]=(n.searchParams.get(`p`)??`/`).split(`?`),a=new URLSearchParams(i);return a.set(`subscriber`,String(t)),n.searchParams.set(`p`,`${r}?${a}`),n.toString()}function O(e){let t=ne(e),n=c()?.newsletter?.subscribersUrl,r=n?null:ue(),i=e=>e?n?D(n,e):r?`${r}/${e}`:null:null;return t.map((e,t)=>({id:e.subscription_id??`row-${t}`,name:e.label,avatarUrl:e.icon,href:i(e.subscription_id),openInNewTab:!n,secondaryText:ee(e.date_subscribed)}))}function k(){let{data:e,isLoading:t,isFetching:n,isError:i,refetch:a}=re({type:`all`,max:10}),o=e,s=(0,j.useMemo)(()=>O(o),[o]),c=Number(o?.summary?.total??0),l=Math.max(c-s.length,0);return(0,M.jsx)(se,{isLoading:t,isFetching:n,isError:s.length===0&&i,isEmpty:s.length===0,renderLoading:(0,M.jsx)(m,{rows:10}),error:{description:r(`We couldn't load subscribers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:a}]},empty:{description:r(`You don’t have subscribers yet.`,`jetpack-premium-analytics-pkg`)},children:(0,M.jsx)(N,{items:s,moreCount:l})})}function A({attributes:e={}}){let t=c()?.newsletter?.subscribersUrl;return(0,M.jsx)(u,{attributes:e,children:(0,M.jsxs)(`div`,{className:E.root,children:[(0,M.jsx)(`div`,{className:E.content,children:(0,M.jsx)(k,{})}),(0,M.jsx)(f,{children:t&&(0,M.jsx)(ce,{href:t,children:r(`Manage subscribers`,`jetpack-premium-analytics-pkg`)})})]})})}var j,M,N,P=t((()=>{s(),ie(),te(),h(),i(),j=e(n(),1),le(),M=a(),N=({items:e=[],moreCount:t=0})=>(0,M.jsx)(p,{items:e,moreCount:t})})),F,I=t((()=>{F={attributes:[],example:{attributes:{}}}})),L,R,z,B,V,H,U,W,de=t((()=>{L=`jpa/subscribers-list`,R=`jpa/people`,z=`Latest subscribers`,B=`Your most recent subscribers.`,V={content:`Your most recent subscribers.`},H=`subscribers`,U=`framed`,W={name:L,icon:R,title:z,description:B,help:V,category:H,presentation:U}})),G,K,q,J,Y,X,Z,Q,$;t((()=>{v(),g(),x(),ae(),P(),I(),de(),G=a(),oe(),window.JetpackScriptData={...window.JetpackScriptData,site:{...window.JetpackScriptData?.site,suffix:`example.com`},newsletter:{...window.JetpackScriptData?.newsletter,subscribersUrl:`https://example.com/wp-admin/admin.php?page=jetpack-newsletter&p=%2F%3Ftab%3Dsubscribers`}},K=`storybook/subscribers-list`,q={title:`Packages/Premium Analytics/Widgets/SubscribersList`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:'Dashboard widget listing the most recent subscribers (avatar + name + relative "since" time) with an "N more" footer. Data comes from the designated `useStatsFollowers` hook; in Storybook it is served by `registerReportMocks`.'}}}},J={render:()=>(0,G.jsx)(A,{attributes:{}}),decorators:[C]},Y={render:()=>(0,G.jsx)(A,{attributes:{}}),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(d(`stats/followers`,`loading`),()=>d(`stats/followers`,null))},X={render:()=>(0,G.jsx)(A,{attributes:{}}),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(d(`stats/followers`,`error`),()=>d(`stats/followers`,null))},Z={render:()=>(0,G.jsx)(A,{attributes:{}}),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(d(`stats/followers`,`empty`),()=>d(`stats/followers`,null))},Q={render:e=>(0,G.jsx)(b,{...e,widgetType:y(W,F),renderModule:K,renderComponent:A,attributes:{}}),args:{...S},argTypes:{..._}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
  render: args => <WidgetDashboardWithWidgetStory {...args} widgetType={createStoryWidgetType(widgetManifest, widgetDefinition)} renderModule={SUBSCRIBERS_LIST_RENDER_MODULE} renderComponent={SubscribersListRender as ComponentType<WidgetRenderProps<unknown>>} attributes={{}} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,q as default};