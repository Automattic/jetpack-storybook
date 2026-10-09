import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Ja as o,Qa as s,Za as c,no as l}from"./iframe-Cdmlva_L.js";import{h as ee}from"./library-DTloIBum.js";import{t as te}from"./src-fQR6rGKL.js";import{A as u,t as d}from"./src-rrY7vAoW.js";import{bn as ne,lt as re,t as ie}from"./src-CTpdfVFW.js";import{_ as ae}from"./charts-provider-BA6IhbKQ.js";import"./rows-DAmD2BmE.js";import{n as oe,r as se,s as f}from"./register-report-mocks-CW1VdKfU.js";import{t as p}from"./widget-state--3z8khIa.js";import{d as m,p as ce}from"./leaderboard-DAHzFJpq.js";import{r as le,t as h}from"./subscriber-list-skeleton-DBw4PI57.js";import{t as g}from"./src-C8uiRrOG.js";import{a as _,g as v,h as y,i as b,m as x,n as ue,p as de,r as S}from"./with-widget-canvas-uks1OQ01.js";var C,w,T,fe=t((()=>{C=`_root_17ufc_2`,w=`_content_17ufc_9`,T={root:C,content:w}}));function E(){let e=s()?.suffix;return e?`${l()?`https://wordpress.com`:`https://cloud.jetpack.com`}/subscribers/${e}`:null}function D(e,t){let n=new URL(e,window.location.href),[r,i=``]=(n.searchParams.get(`p`)??`/`).split(`?`),a=new URLSearchParams(i);return a.set(`subscriber`,String(t)),n.searchParams.set(`p`,`${r}?${a}`),n.toString()}function O(e){let t=ne(e),n=c()?.newsletter?.subscribersUrl,r=n?null:E(),i=e=>e?n?D(n,e):r?`${r}/${e}`:null:null;return t.map((e,t)=>({id:e.subscription_id??`row-${t}`,name:e.label,avatarUrl:e.icon,href:i(e.subscription_id),openInNewTab:!n,secondaryText:u(e.date_subscribed)}))}function k(){let{data:e,isLoading:t,isFetching:n,isError:i,refetch:a}=re({type:`all`,max:10}),o=e,s=(0,j.useMemo)(()=>O(o),[o]),c=Number(o?.summary?.total??0),l=Math.max(c-s.length,0);return(0,M.jsx)(p,{isLoading:t,isFetching:n,isError:s.length===0&&i,isEmpty:s.length===0,renderLoading:(0,M.jsx)(h,{rows:10}),error:{description:r(`We couldn't load subscribers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:a}]},empty:{icon:ee,description:r(`No subscribers yet.`,`jetpack-premium-analytics-pkg`)},children:(0,M.jsx)(N,{items:s,moreCount:l})})}function A({attributes:e={}}){let t=c()?.newsletter?.subscribersUrl;return(0,M.jsx)(ae,{attributes:e,children:(0,M.jsxs)(`div`,{className:T.root,children:[(0,M.jsx)(`div`,{className:T.content,children:(0,M.jsx)(k,{})}),(0,M.jsx)(ce,{children:t&&(0,M.jsx)(m,{href:t,children:r(`Manage subscribers`,`jetpack-premium-analytics-pkg`)})})]})})}var j,M,N,P=t((()=>{o(),ie(),d(),te(),g(),i(),j=e(n(),1),fe(),M=a(),N=({items:e=[],moreCount:t=0})=>(0,M.jsx)(le,{items:e,moreCount:t})})),F,I=t((()=>{F={attributes:[],example:{attributes:{}}}})),L,R,z,B,V,H,U,W,pe=t((()=>{L=`jpa/subscribers-list`,R=`jpa/people`,z=`Latest subscribers`,B=`Your most recent subscribers.`,V={content:`Your most recent subscribers.`},H=`subscribers`,U=`framed`,W={name:L,icon:R,title:z,description:B,help:V,category:H,presentation:U}})),G,K,q,J,Y,X,Z,Q,$;t((()=>{y(),_(),ue(),oe(),P(),I(),pe(),G=a(),se(),window.JetpackScriptData={...window.JetpackScriptData,site:{...window.JetpackScriptData?.site,suffix:`example.com`},newsletter:{...window.JetpackScriptData?.newsletter,subscribersUrl:`https://example.com/wp-admin/admin.php?page=jetpack-newsletter&p=%2F%3Ftab%3Dsubscribers`}},K=`storybook/subscribers-list`,q={title:`Packages/Premium Analytics/Widgets/SubscribersList`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:'Dashboard widget listing the most recent subscribers (avatar + name + relative "since" time) with an "N more" footer. Data comes from the designated `useStatsFollowers` hook; in Storybook it is served by `registerReportMocks`.'}}}},J={render:()=>(0,G.jsx)(A,{attributes:{}}),decorators:[S]},Y={render:()=>(0,G.jsx)(A,{attributes:{}}),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(f(`stats/followers`,`loading`),()=>f(`stats/followers`,null))},X={render:()=>(0,G.jsx)(A,{attributes:{}}),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(f(`stats/followers`,`error`),()=>f(`stats/followers`,null))},Z={render:()=>(0,G.jsx)(A,{attributes:{}}),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(f(`stats/followers`,`empty`),()=>f(`stats/followers`,null))},Q={render:e=>(0,G.jsx)(x,{...e,widgetType:b(W,F),renderModule:K,renderComponent:A,attributes:{}}),args:{...de},argTypes:{...v}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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