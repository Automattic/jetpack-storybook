import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{si as o,t as s}from"./build-module-DNhkEVJn.js";import{_ as c}from"./charts-provider-i3ilDE6i.js";import{Xa as l,Za as ee,qa as te,to as ne}from"./iframe-DUZBN88A.js";import{p as re,t as u}from"./src-DzwlO62w.js";import{k as d,t as f}from"./src-ClJ6D7Xj.js";import{On as ie,it as p,t as m}from"./src-sapT-gA9.js";import"./rows-DAmD2BmE.js";import{n as h,r as ae,s as g}from"./register-report-mocks-C7K6kQVR.js";import{f as oe,m as _}from"./leaderboard-BklTNiET.js";import{t as v}from"./widget-state-BVHHQlNQ.js";import{r as y,t as b}from"./subscriber-list-skeleton-xK9geuTc.js";import{t as x}from"./src-BD0Zo-vQ.js";import{a as se,d as ce,f as le,i as ue,n as de,p as fe,r as S,u as pe}from"./with-widget-canvas-BOQ7NWrR.js";var C,w,T,E=t((()=>{C=`_root_17ufc_2`,w=`_content_17ufc_9`,T={root:C,content:w}}));function D(){let e=ee()?.suffix;return e?`${ne()?`https://wordpress.com`:`https://cloud.jetpack.com`}/subscribers/${e}`:null}function O(e,t){let n=new URL(e,window.location.href),[r,i=``]=(n.searchParams.get(`p`)??`/`).split(`?`),a=new URLSearchParams(i);return a.set(`subscriber`,String(t)),n.searchParams.set(`p`,`${r}?${a}`),n.toString()}function k(e){let t=ie(e),n=l()?.newsletter?.subscribersUrl,r=n?null:D(),i=e=>e?n?O(n,e):r?`${r}/${e}`:null:null;return t.map((e,t)=>({id:e.subscription_id??`row-${t}`,name:e.label,avatarUrl:e.icon,href:i(e.subscription_id),openInNewTab:!n,secondaryText:d(e.date_subscribed)}))}function A(){let{data:e,isLoading:t,isFetching:n,isError:i,refetch:a}=p({type:`all`,max:10}),o=e,s=(0,M.useMemo)(()=>k(o),[o]),c=Number(o?.summary?.total??0),l=Math.max(c-s.length,0);return(0,N.jsx)(v,{isLoading:t,isFetching:n,isError:s.length===0&&i,isEmpty:s.length===0,renderLoading:(0,N.jsx)(b,{rows:10}),error:{description:r(`We couldn't load subscribers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:a}]},empty:{icon:re,description:r(`No subscribers yet.`,`jetpack-premium-analytics-pkg`)},children:(0,N.jsx)(P,{items:s,moreCount:l})})}function j({attributes:e={}}){let t=l()?.newsletter?.subscribersUrl;return(0,N.jsx)(c,{attributes:e,children:(0,N.jsxs)(`div`,{className:T.root,children:[(0,N.jsx)(`div`,{className:T.content,children:(0,N.jsx)(A,{})}),(0,N.jsx)(_,{children:t&&(0,N.jsx)(oe,{href:t,children:r(`Manage subscribers`,`jetpack-premium-analytics-pkg`)})})]})})}var M,N,P,F=t((()=>{te(),m(),f(),u(),x(),i(),M=e(n(),1),E(),N=a(),P=({items:e=[],moreCount:t=0})=>(0,N.jsx)(y,{items:e,moreCount:t})})),I,L=t((()=>{s(),I={icon:o,attributes:[],example:{attributes:{}}}})),R,z,B,V,H,U,W,me=t((()=>{R=`jpa/subscribers-list`,z=`Latest subscribers`,B=`Your most recent subscribers.`,V={content:`Your most recent subscribers.`},H=`subscribers`,U=`framed`,W={name:R,title:z,description:B,help:V,category:H,presentation:U}})),G,K,q,J,Y,X,Z,Q,$;t((()=>{le(),se(),de(),h(),F(),L(),me(),G=a(),ae(),window.JetpackScriptData={...window.JetpackScriptData,site:{...window.JetpackScriptData?.site,suffix:`example.com`},newsletter:{...window.JetpackScriptData?.newsletter,subscribersUrl:`https://example.com/wp-admin/admin.php?page=jetpack-newsletter&p=%2F%3Ftab%3Dsubscribers`}},K=`storybook/subscribers-list`,q={title:`Packages/Premium Analytics/Widgets/SubscribersList`,component:j,tags:[`autodocs`],parameters:{docs:{description:{component:'Dashboard widget listing the most recent subscribers (avatar + name + relative "since" time) with an "N more" footer. Data comes from the designated `useStatsFollowers` hook; in Storybook it is served by `registerReportMocks`.'}}}},J={render:()=>(0,G.jsx)(j,{attributes:{}}),decorators:[S]},Y={render:()=>(0,G.jsx)(j,{attributes:{}}),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(g(`stats/followers`,`loading`),()=>g(`stats/followers`,null))},X={render:()=>(0,G.jsx)(j,{attributes:{}}),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(g(`stats/followers`,`error`),()=>g(`stats/followers`,null))},Z={render:()=>(0,G.jsx)(j,{attributes:{}}),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(g(`stats/followers`,`empty`),()=>g(`stats/followers`,null))},Q={render:e=>(0,G.jsx)(ce,{...e,widgetType:ue(W,I),renderModule:K,renderComponent:j,attributes:{}}),args:{...pe},argTypes:{...fe}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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