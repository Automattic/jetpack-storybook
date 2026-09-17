import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Uu as i,Vt as a,ju as o,t as s}from"./build-module-2iv4IIRq.js";import{b as ee,g as c}from"./hooks-EUr_ubjq.js";import{M as te,t as l}from"./src-C-E2d-Lb.js";import{k as ne,t as u}from"./src-D1E5MwTJ.js";import{en as d,ht as re,jn as ie,r as f}from"./date-period-dropdown-DjMN-MzN.js";import{i as ae,r as oe,s as p}from"./register-report-mocks-dZpieh6n.js";import{t as se}from"./widget-state-BMR2ZcPJ.js";import{r as m,t as h}from"./subscriber-list-skeleton-D5D7eZ6c.js";import{t as g}from"./src-CfhPYP5S.js";import{a as ce,c as _,i as v,l as y,n as b,o as x,r as S,s as C}from"./with-widget-canvas-B-6vwU3g.js";var w,T,le=e((()=>{w=`_root_6wdsv_2`,T={root:w}}));function ue(){let{reportParams:e}=ee(),n=ie(e.post_id),{data:r,isLoading:a,isFetching:o,isError:s,refetch:c}=re({postId:n,number:O}),l=(0,i.useMemo)(()=>(r?.likes??[]).map(e=>({id:e.ID,name:e.name||e.login,avatarUrl:e.avatar_URL,href:e.login?`https://wordpress.com/reader/users/${e.login}`:void 0,secondaryText:ne(e.date_liked)})),[r]),u=r?.found??0,d=n<=0||!!r&&l.length===0;return(0,D.jsx)(`div`,{className:T.root,children:(0,D.jsx)(se,{isLoading:a,isFetching:o,isError:!r&&s,isEmpty:d,renderLoading:(0,D.jsx)(h,{rows:O}),error:{description:t(`We couldn't load these likes. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},empty:{icon:te,description:t(n<=0?`Open a post or page report to see its likes here.`:`There are no likes yet.`,`jetpack-premium-analytics-pkg`)},children:(0,D.jsx)(m,{items:l,moreCount:Math.max(0,u-l.length)})})})}function E({attributes:e={}}){return(0,D.jsx)(c,{attributes:e,children:(0,D.jsx)(ue,{})})}var D,O,de=e((()=>{f(),u(),l(),g(),o(),n(),le(),D=r(),O=10})),k,A=e((()=>{s(),k={icon:a,attributes:[],example:{attributes:{}}}})),j,M,N,P,F,I,L,R=e((()=>{j=`jpa/post-likes`,M=`Latest likes`,N=`The people who liked the post or page being viewed.`,P={content:`The people who liked the post or page being viewed.`},F=`stats`,I=`framed`,L={name:j,title:M,description:N,help:P,category:F,presentation:I}}));function z({hasPostScope:e}){return{reportParams:{...d(!1),...e?{post_id:U}:{}}}}function B(e){return(0,H.jsx)(E,{attributes:z(e)})}function V({hasPostScope:e,...t}){return(0,H.jsx)(C,{...t,widgetType:v(L,k),renderModule:W,renderComponent:E,attributes:z({hasPostScope:e})})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),oe(),_(),ce(),b(),de(),A(),R(),H=r(),ae(),U=779,W=`storybook/post-likes`,G=`posts/${U}/likes`,K={title:`Packages/Premium Analytics/Widgets/PostLikes`,component:E,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Latest likes" widget: the scoped post's likers as an avatar roster with an "N more" footer — the post detail Traffic view's likes card. Each row carries the like's relative time. Without a post scope the widget renders a scopeless empty state.`}}}},q={render:B,args:{hasPostScope:!0},decorators:[S]},J={render:B,args:{hasPostScope:!1},decorators:[S]},Y={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(p(G,`loading`),()=>p(G,null))},X={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(p(G,`error`),()=>p(G,null))},Z={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(p(G,`empty`),()=>p(G,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...x,widgetWidth:1,widgetHeight:2,hasPostScope:!0},argTypes:{...y,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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