import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{li as o,t as s}from"./build-module-2iv4IIRq.js";import{m as c}from"./hooks-BmueE48X.js";import{Za as l,ao as u,eo as d,to as ee}from"./iframe-B3OFnFTS.js";import{p as te,t as ne}from"./src-C-E2d-Lb.js";import{k as re,t as ie}from"./src-BNPYbbO9.js";import{K as ae,dn as oe,t as f}from"./src-m1TSlLiq.js";import"./constants-B1kGztHF.js";import{c as p,i as se,r as m}from"./register-report-mocks-CgxliRIY.js";import{S as h,b as g}from"./report-metric-DaHJhJCq.js";import{t as _}from"./widget-state-DU1neUbV.js";import{r as v,t as y}from"./subscriber-list-skeleton-B5A_1d61.js";import{t as b}from"./src-CjyGnNqZ.js";import{a as x,d as S,f as ce,i as le,n as ue,p as de,r as C,u as fe}from"./with-widget-canvas-C6LC8p6k.js";var w,T,E,D=t((()=>{w=`_root_17ufc_2`,T=`_content_17ufc_9`,E={root:w,content:T}}));function O(){let e=ee()?.suffix;return e?`${u()?`https://wordpress.com`:`https://cloud.jetpack.com`}/subscribers/${e}`:null}function k(e){let t=oe(e),n=O();return t.map((e,t)=>({id:e.subscription_id??`row-${t}`,name:e.label,avatarUrl:e.icon,href:n&&e.subscription_id?`${n}/${e.subscription_id}`:null,secondaryText:re(e.date_subscribed)}))}function A(){let{data:e,isLoading:t,isFetching:n,isError:i,refetch:a}=ae({type:`all`,max:10}),o=e,s=(0,M.useMemo)(()=>k(o),[o]),c=Number(o?.summary?.total??0),l=Math.max(c-s.length,0);return(0,N.jsx)(_,{isLoading:t,isFetching:n,isError:s.length===0&&i,isEmpty:s.length===0,renderLoading:(0,N.jsx)(y,{rows:10}),error:{description:r(`We couldn't load subscribers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:a}]},empty:{icon:te,description:r(`No subscribers yet.`,`jetpack-premium-analytics-pkg`)},children:(0,N.jsx)(P,{items:s,moreCount:l})})}function j({attributes:e={}}){let t=d()?.newsletter?.subscribersUrl;return(0,N.jsx)(c,{attributes:e,children:(0,N.jsxs)(`div`,{className:E.root,children:[(0,N.jsx)(`div`,{className:E.content,children:(0,N.jsx)(A,{})}),(0,N.jsx)(h,{children:t&&(0,N.jsx)(g,{href:t,children:r(`Manage subscribers`,`jetpack-premium-analytics-pkg`)})})]})})}var M,N,P,F=t((()=>{l(),f(),ie(),ne(),b(),i(),M=e(n(),1),D(),N=a(),P=({items:e=[],moreCount:t=0})=>(0,N.jsx)(v,{items:e,moreCount:t})})),I,L=t((()=>{s(),I={icon:o,attributes:[],example:{attributes:{}}}})),R,z,B,V,H,U,W,pe=t((()=>{R=`jpa/subscribers-list`,z=`Latest subscribers`,B=`Your most recent subscribers.`,V={content:`Your most recent subscribers.`},H=`subscribers`,U=`framed`,W={name:R,title:z,description:B,help:V,category:H,presentation:U}})),G,K,q,J,Y,X,Z,Q,$;t((()=>{ce(),x(),ue(),m(),F(),L(),pe(),G=a(),se(),window.JetpackScriptData={...window.JetpackScriptData,site:{...window.JetpackScriptData?.site,suffix:`example.com`},newsletter:{...window.JetpackScriptData?.newsletter,subscribersUrl:`https://example.com/wp-admin/admin.php?page=jetpack-newsletter&p=%2F%3Ftab%3Dsubscribers`}},K=`storybook/subscribers-list`,q={title:`Packages/Premium Analytics/Widgets/SubscribersList`,component:j,tags:[`autodocs`],parameters:{docs:{description:{component:'Dashboard widget listing the most recent subscribers (avatar + name + relative "since" time) with an "N more" footer. Data comes from the designated `useStatsFollowers` hook; in Storybook it is served by `registerReportMocks`.'}}}},J={render:()=>(0,G.jsx)(j,{attributes:{}}),decorators:[C]},Y={render:()=>(0,G.jsx)(j,{attributes:{}}),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(p(`stats/followers`,`loading`),()=>p(`stats/followers`,null))},X={render:()=>(0,G.jsx)(j,{attributes:{}}),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(p(`stats/followers`,`error`),()=>p(`stats/followers`,null))},Z={render:()=>(0,G.jsx)(j,{attributes:{}}),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(p(`stats/followers`,`empty`),()=>p(`stats/followers`,null))},Q={render:e=>(0,G.jsx)(S,{...e,widgetType:le(W,I),renderModule:K,renderComponent:j,attributes:{}}),args:{...fe},argTypes:{...de}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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