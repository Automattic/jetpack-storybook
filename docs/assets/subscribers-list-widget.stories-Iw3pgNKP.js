import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-DQe4AOzJ.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{a as o,o as s,t as c,u as l}from"./src-DpxsllRm.js";import{F as ee}from"./charts-provider-CHpSzGut.js";import{A as u,t as d}from"./src-DFqe9oto.js";import{rn as te,t as ne,vt as re}from"./src-BEwaewMJ.js";import{r as ie,t as ae}from"./build-module-Dl9-x8Bw.js";import{t as oe}from"./widget-state-BwHOn80-.js";import"./constants-B9OTkkI1.js";import{n as se,r as f,s as p}from"./register-report-mocks-D47Rougd.js";import{i as m}from"./with-story-router-B7u0fWxg.js";import{r as h,t as g}from"./subscriber-list-skeleton-DBRaxUje.js";import{a as _,g as v,h as y,i as b,m as x,n as S,p as C,r as w}from"./with-widget-canvas-aKDVvh1v.js";var T,E,D,ce=e((()=>{T=`_root_17ufc_2`,E=`_content_17ufc_9`,D={root:T,content:E}}));function O(){let e=s()?.suffix;return e?`${l()?`https://wordpress.com`:`https://cloud.jetpack.com`}/subscribers/${e}`:null}function k(e,t){let n=new URL(e,window.location.href),[r,i=``]=(n.searchParams.get(`p`)??`/`).split(`?`),a=new URLSearchParams(i);return a.set(`subscriber`,String(t)),n.searchParams.set(`p`,`${r}?${a}`),n.toString()}function A(e){let t=te(e),n=o()?.newsletter?.subscribersUrl,r=n?null:O(),i=e=>e?n?k(n,e):r?`${r}/${e}`:null:null;return t.map((e,t)=>({id:e.subscription_id??`row-${t}`,name:e.label,avatarUrl:e.icon,href:i(e.subscription_id),openInNewTab:!n,secondaryText:u(e.date_subscribed)}))}function j(){let{data:e,isLoading:t,isFetching:n,isError:i,refetch:a}=re({type:`all`,max:10}),o=e,s=(0,N.useMemo)(()=>A(o),[o]),c=Number(o?.summary?.total??0),l=Math.max(c-s.length,0);return(0,P.jsx)(oe,{isLoading:t,isFetching:n,isError:s.length===0&&i,isEmpty:s.length===0,renderLoading:(0,P.jsx)(g,{rows:10}),error:{description:r(`We couldn't load subscribers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:a}]},empty:{description:r(`You don’t have subscribers yet.`,`jetpack-premium-analytics-pkg`)},children:(0,P.jsx)(F,{items:s,moreCount:l})})}function M({attributes:e={}}){let t=o()?.newsletter?.subscribersUrl;return ie(t?[{id:`manage-subscribers`,label:r(`Manage subscribers`,`jetpack-premium-analytics-pkg`),relevance:`high`,href:t}]:[]),(0,P.jsx)(ee,{attributes:e,children:(0,P.jsx)(`div`,{className:D.root,children:(0,P.jsx)(`div`,{className:D.content,children:(0,P.jsx)(j,{})})})})}var N,P,F,I=e((()=>{c(),ne(),d(),m(),i(),ae(),N=t(n(),1),ce(),P=a(),F=({items:e=[],moreCount:t=0})=>(0,P.jsx)(h,{items:e,moreCount:t})})),L,R,z,B,V,H,U,W,le=e((()=>{L=`jpa/subscribers-list`,R=`jpa/people`,z=`Latest subscribers`,B=`Your most recent subscribers.`,V={content:`Your most recent subscribers.`},H=`subscribers`,U=`framed`,W={name:L,icon:R,title:z,description:B,help:V,category:H,presentation:U}})),G,K,q,J,Y,X,Z,Q,$;e((()=>{y(),_(),S(),se(),I(),le(),G=a(),f(),window.JetpackScriptData={...window.JetpackScriptData,site:{...window.JetpackScriptData?.site,suffix:`example.com`},newsletter:{...window.JetpackScriptData?.newsletter,subscribersUrl:`https://example.com/wp-admin/admin.php?page=jetpack-newsletter&p=%2F%3Ftab%3Dsubscribers`}},K=`storybook/subscribers-list`,q={title:`Packages/Premium Analytics/Widgets/SubscribersList`,component:M,tags:[`autodocs`],parameters:{docs:{description:{component:'Dashboard widget listing the most recent subscribers (avatar + name + relative "since" time) with an "N more" footer. Data comes from the designated `useStatsFollowers` hook; in Storybook it is served by `registerReportMocks`.'}}}},J={render:()=>(0,G.jsx)(M,{attributes:{}}),decorators:[w]},Y={render:()=>(0,G.jsx)(M,{attributes:{}}),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(p(`stats/followers`,`loading`),()=>p(`stats/followers`,null))},X={render:()=>(0,G.jsx)(M,{attributes:{}}),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(p(`stats/followers`,`error`),()=>p(`stats/followers`,null))},Z={render:()=>(0,G.jsx)(M,{attributes:{}}),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(p(`stats/followers`,`empty`),()=>p(`stats/followers`,null))},Q={render:e=>(0,G.jsx)(x,{...e,widgetType:b(W),renderModule:K,renderComponent:M,attributes:{}}),args:{...C},argTypes:{...v}},$=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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