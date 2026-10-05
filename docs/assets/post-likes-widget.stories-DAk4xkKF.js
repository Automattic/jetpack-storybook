import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Vt as i,Vu as ee,ku as a,t as o}from"./build-module-DNhkEVJn.js";import{m as s,v as te}from"./hooks-jnV3J2y1.js";import{M as ne,t as c}from"./src-DzwlO62w.js";import{k as l,t as u}from"./src-ClJ6D7Xj.js";import{St as re,qn as ie,t as d,un as ae}from"./src-DHdKiQsb.js";import{n as oe,r as se,s as f}from"./register-report-mocks-BNT9lZ5-.js";import{t as ce}from"./widget-state-DHQhMzsK.js";import{r as p,t as m}from"./subscriber-list-skeleton-BjjJnf4D.js";import{t as h}from"./src-D1bvCrhX.js";import{a as g,d as _,f as le,i as v,n as y,p as b,r as x,u as S}from"./with-widget-canvas-CHn-biwO.js";var C,w,T=e((()=>{C=`_root_6wdsv_2`,w={root:C}}));function ue(){let{reportParams:e}=te(),n=ie(e.post_id),{data:r,isLoading:i,isFetching:a,isError:o,refetch:s}=re({postId:n,number:O}),c=(0,ee.useMemo)(()=>(r?.likes??[]).map(e=>({id:e.ID,name:e.name||e.login,avatarUrl:e.avatar_URL,href:e.login?`https://wordpress.com/reader/users/${e.login}`:void 0,secondaryText:l(e.date_liked)})),[r]),u=r?.found??0,d=n<=0||!!r&&c.length===0;return(0,D.jsx)(`div`,{className:w.root,children:(0,D.jsx)(ce,{isLoading:i,isFetching:a,isError:!r&&o,isEmpty:d,renderLoading:(0,D.jsx)(m,{rows:O}),error:{description:t(`We couldn't load these likes. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:ne,description:t(n<=0?`Open a post or page report to see its likes here.`:`There are no likes yet.`,`jetpack-premium-analytics-pkg`)},children:(0,D.jsx)(p,{items:c,moreCount:Math.max(0,u-c.length)})})})}function E({attributes:e={}}){return(0,D.jsx)(s,{attributes:e,children:(0,D.jsx)(ue,{})})}var D,O,de=e((()=>{d(),u(),c(),h(),a(),n(),T(),D=r(),O=10})),k,A=e((()=>{o(),k={icon:i,attributes:[],example:{attributes:{}}}})),j,M,N,P,F,I,L,R=e((()=>{j=`jpa/post-likes`,M=`Latest likes`,N=`The people who liked the post or page being viewed.`,P={content:`The people who liked the post or page being viewed.`},F=`stats`,I=`framed`,L={name:j,title:M,description:N,help:P,category:F,presentation:I}}));function z({hasPostScope:e}){return{reportParams:{...ae(!1),...e?{post_id:U}:{}}}}function B(e){return(0,H.jsx)(E,{attributes:z(e)})}function V({hasPostScope:e,...t}){return(0,H.jsx)(_,{...t,widgetType:v(L,k),renderModule:W,renderComponent:E,attributes:z({hasPostScope:e})})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),oe(),le(),g(),y(),de(),A(),R(),H=r(),se(),U=779,W=`storybook/post-likes`,G=`posts/${U}/likes`,K={title:`Packages/Premium Analytics/Widgets/PostLikes`,component:E,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Latest likes" widget: the scoped post's likers as an avatar roster with an "N more" footer — the post detail Traffic view's likes card. Each row carries the like's relative time. Without a post scope the widget renders a scopeless empty state.`}}}},q={render:B,args:{hasPostScope:!0},decorators:[x]},J={render:B,args:{hasPostScope:!1},decorators:[x]},Y={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(G,`loading`),()=>f(G,null))},X={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(G,`error`),()=>f(G,null))},Z={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(G,`empty`),()=>f(G,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...S,widgetWidth:1,widgetHeight:2,hasPostScope:!0},argTypes:{...b,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderPostLikes,
  args: {
    hasPostScope: true
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Default — the scoped post's likers with the "N more" footer.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderPostLikes,
  args: {
    hasPostScope: false
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`NoPostScope — the widget without a \`post_id\` report param, as when added
outside a post detail page. Renders the scopeless empty state without
firing a request.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderPostLikes,
  args: {
    hasPostScope: true
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(LIKES_REQUEST_PATH, 'loading');
    return () => setReportMockState(LIKES_REQUEST_PATH, null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`Loading — the first fetch is still in flight, so the widget shows its
skeleton roster. The mock is forced to never resolve for this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPostLikes,
  args: {
    hasPostScope: true
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(LIKES_REQUEST_PATH, 'error');
    return () => setReportMockState(LIKES_REQUEST_PATH, null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Error — the fetch failed with a 403: the widget shows its error copy and a
Retry action, which re-runs the query (still mocked as failing here).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPostLikes,
  args: {
    hasPostScope: true
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(LIKES_REQUEST_PATH, 'empty');
    return () => setReportMockState(LIKES_REQUEST_PATH, null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Empty — a scoped post that resolved with no likes: "There are no likes yet."
This is the scoped empty state, distinct from the scopeless copy in
NoPostScope.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <PostLikesDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 1,
    widgetHeight: 2,
    hasPostScope: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    hasPostScope: {
      control: 'boolean',
      description: 'Include the \`post_id\` report param the post detail page seeds from its URL.'
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (1 column × 2 rows). The fixture's ten
rows exceed that tile height, so this story also demonstrates the roster
scrolling inside the widget frame's content viewport.`,...Q.parameters?.docs?.description}}},$=[`Default`,`NoPostScope`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,J as NoPostScope,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};