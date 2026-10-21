import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-DQe4AOzJ.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{a as o,o as s,t as c,u as l}from"./src-DpxsllRm.js";import{A as ee,t as u}from"./src-DFqe9oto.js";import{gt as d,t as te,tn as ne}from"./src-5g9sGwvT.js";import{m as re}from"./charts-provider-Dz_9KfQe.js";import{Q as ie,X as f,Y as ae,Z as oe,ct as p,lt as m,ot as h,st as g,t as _}from"./src-CwWcdYh9.js";import{t as v}from"./widget-state-CgiqWOxt.js";import"./rows-DoJXoHhN.js";import{a as y,o as b,u as x}from"./widget-state-B6SJsJzX.js";import{i as S,o as C}from"./leaderboard-bG98GUJZ.js";import{r as w,t as T}from"./subscriber-list-skeleton-BnhV6EPy.js";var E,D,O,se=e((()=>{E=`_root_17ufc_2`,D=`_content_17ufc_9`,O={root:E,content:D}}));function ce(){let e=s()?.suffix;return e?`${l()?`https://wordpress.com`:`https://cloud.jetpack.com`}/subscribers/${e}`:null}function k(e,t){let n=new URL(e,window.location.href),[r,i=``]=(n.searchParams.get(`p`)??`/`).split(`?`),a=new URLSearchParams(i);return a.set(`subscriber`,String(t)),n.searchParams.set(`p`,`${r}?${a}`),n.toString()}function A(e){let t=ne(e),n=o()?.newsletter?.subscribersUrl,r=n?null:ce(),i=e=>e?n?k(n,e):r?`${r}/${e}`:null:null;return t.map((e,t)=>({id:e.subscription_id??`row-${t}`,name:e.label,avatarUrl:e.icon,href:i(e.subscription_id),openInNewTab:!n,secondaryText:ee(e.date_subscribed)}))}function j(){let{data:e,isLoading:t,isFetching:n,isError:i,refetch:a}=d({type:`all`,max:10}),o=e,s=(0,N.useMemo)(()=>A(o),[o]),c=Number(o?.summary?.total??0),l=Math.max(c-s.length,0);return(0,P.jsx)(v,{isLoading:t,isFetching:n,isError:s.length===0&&i,isEmpty:s.length===0,renderLoading:(0,P.jsx)(T,{rows:10}),error:{description:r(`We couldn't load subscribers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:a}]},empty:{description:r(`You don’t have subscribers yet.`,`jetpack-premium-analytics-pkg`)},children:(0,P.jsx)(F,{items:s,moreCount:l})})}function M({attributes:e={}}){let t=o()?.newsletter?.subscribersUrl;return(0,P.jsx)(re,{attributes:e,children:(0,P.jsxs)(`div`,{className:O.root,children:[(0,P.jsx)(`div`,{className:O.content,children:(0,P.jsx)(j,{})}),(0,P.jsx)(C,{children:t&&(0,P.jsx)(S,{href:t,children:r(`Manage subscribers`,`jetpack-premium-analytics-pkg`)})})]})})}var N,P,F,I=e((()=>{c(),te(),u(),_(),i(),N=t(n(),1),se(),P=a(),F=({items:e=[],moreCount:t=0})=>(0,P.jsx)(w,{items:e,moreCount:t})})),L,R,z,B,V,H,U,W,le=e((()=>{L=`jpa/subscribers-list`,R=`jpa/people`,z=`Latest subscribers`,B=`Your most recent subscribers.`,V={content:`Your most recent subscribers.`},H=`subscribers`,U=`framed`,W={name:L,icon:R,title:z,description:B,help:V,category:H,presentation:U}})),G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),ie(),ae(),y(),I(),le(),G=a(),b(),window.JetpackScriptData={...window.JetpackScriptData,site:{...window.JetpackScriptData?.site,suffix:`example.com`},newsletter:{...window.JetpackScriptData?.newsletter,subscribersUrl:`https://example.com/wp-admin/admin.php?page=jetpack-newsletter&p=%2F%3Ftab%3Dsubscribers`}},K=`storybook/subscribers-list`,q={title:`Packages/Premium Analytics/Widgets/SubscribersList`,component:M,tags:[`autodocs`],parameters:{docs:{description:{component:'Dashboard widget listing the most recent subscribers (avatar + name + relative "since" time) with an "N more" footer. Data comes from the designated `useStatsFollowers` hook; in Storybook it is served by `registerReportMocks`.'}}}},J={render:()=>(0,G.jsx)(M,{attributes:{}}),decorators:[f]},Y={render:()=>(0,G.jsx)(M,{attributes:{}}),tags:[`!autodocs`],decorators:[f],beforeEach:()=>(x(`stats/followers`,`loading`),()=>x(`stats/followers`,null))},X={render:()=>(0,G.jsx)(M,{attributes:{}}),tags:[`!autodocs`],decorators:[f],beforeEach:()=>(x(`stats/followers`,`error`),()=>x(`stats/followers`,null))},Z={render:()=>(0,G.jsx)(M,{attributes:{}}),tags:[`!autodocs`],decorators:[f],beforeEach:()=>(x(`stats/followers`,`empty`),()=>x(`stats/followers`,null))},Q={render:e=>(0,G.jsx)(g,{...e,widgetType:oe(W),renderModule:K,renderComponent:M,attributes:{}}),args:{...h},argTypes:{...m}},$=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
  render: args => <WidgetDashboardWithWidgetStory {...args} widgetType={createStoryWidgetType(widgetManifest)} renderModule={SUBSCRIBERS_LIST_RENDER_MODULE} renderComponent={SubscribersListRender as ComponentType<WidgetRenderProps<unknown>>} attributes={{}} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}}}))();export{J as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,q as default};