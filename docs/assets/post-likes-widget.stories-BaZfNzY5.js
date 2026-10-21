import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{t as r}from"./jsx-runtime-CtMZ-PAS.js";import{Mu as i,bu as a}from"./build-module-CpZTxk98.js";import{A as o,t as s}from"./src-DFqe9oto.js";import{Pt as c,dn as ee,pn as l,t as u}from"./src-CojPwECE.js";import{m as d,v as te}from"./charts-provider-CK79-TW3.js";import{Q as f,X as p,Y as m,Z as h,ct as g,lt as _,ot as ne,st as re,t as v}from"./src-d03p2Njl.js";import{t as y}from"./widget-state-Bg8KvWWA.js";import{a as ie,o as ae,u as b}from"./widget-state-Doi_hyaL.js";import{r as x,t as oe}from"./subscriber-list-skeleton-B_Xz84wU.js";var S,C,w=e((()=>{S=`_root_6wdsv_2`,C={root:S}}));function T(){let{reportParams:e}=te(),n=ee(e.post_id),{data:r,isLoading:a,isFetching:s,isError:l,refetch:u}=c({postId:n,number:O}),d=(0,i.useMemo)(()=>(r?.likes??[]).map(e=>({id:e.ID,name:e.name||e.login,avatarUrl:e.avatar_URL,href:e.login?`https://wordpress.com/reader/users/${e.login}`:void 0,secondaryText:o(e.date_liked)})),[r]),f=r?.found??0,p=n<=0||!!r&&d.length===0;return(0,D.jsx)(`div`,{className:C.root,children:(0,D.jsx)(y,{isLoading:a,isFetching:s,isError:!r&&l,isEmpty:p,renderLoading:(0,D.jsx)(oe,{rows:O}),error:{description:t(`We couldn't load these likes. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{description:t(n<=0?`Open a post or page report to see its likes here.`:`There are no likes yet.`,`jetpack-premium-analytics-pkg`)},children:(0,D.jsx)(x,{items:d,moreCount:Math.max(0,f-d.length)})})})}function E({attributes:e={}}){return(0,D.jsx)(d,{attributes:e,children:(0,D.jsx)(T,{})})}var D,O,k=e((()=>{u(),s(),v(),a(),n(),w(),D=r(),O=10})),A,j,M,N,P,F,I,L,R=e((()=>{A=`jpa/post-likes`,j=`jpa/star-empty`,M=`Latest likes`,N=`The people who liked the post or page being viewed.`,P={content:`The people who liked the post or page being viewed.`},F=`stats`,I=`framed`,L={name:A,icon:j,title:M,description:N,help:P,category:F,presentation:I}}));function z({hasPostScope:e}){return{reportParams:{...l(!1),...e?{post_id:U}:{}}}}function B(e){return(0,H.jsx)(E,{attributes:z(e)})}function V({hasPostScope:e,...t}){return(0,H.jsx)(re,{...t,widgetType:h(L),renderModule:W,renderComponent:E,attributes:z({hasPostScope:e})})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),ie(),g(),f(),m(),k(),R(),H=r(),ae(),U=779,W=`storybook/post-likes`,G=`posts/${U}/likes`,K={title:`Packages/Premium Analytics/Widgets/PostLikes`,component:E,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Latest likes" widget: the scoped post's likers as an avatar roster with an "N more" footer — the post detail Traffic view's likes card. Each row carries the like's relative time. Without a post scope the widget renders a scopeless empty state.`}}}},q={render:B,args:{hasPostScope:!0},decorators:[p]},J={render:B,args:{hasPostScope:!1},decorators:[p]},Y={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[p],beforeEach:()=>(b(G,`loading`),()=>b(G,null))},X={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[p],beforeEach:()=>(b(G,`error`),()=>b(G,null))},Z={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[p],beforeEach:()=>(b(G,`empty`),()=>b(G,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...ne,widgetWidth:1,widgetHeight:2,hasPostScope:!0},argTypes:{..._,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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