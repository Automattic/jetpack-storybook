import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Vu as ee,gc as i,ku as a,t as o}from"./build-module-DNhkEVJn.js";import{m as s,v as te}from"./hooks-B1ASZyQZ.js";import{M as ne,t as c}from"./src-DzwlO62w.js";import{k as re,t as l}from"./src-ClJ6D7Xj.js";import{$t as u,Mn as ie,ht as ae,pt as oe,t as d}from"./src-CBzFYf4j.js";import{n as se,r as ce,s as f}from"./register-report-mocks-1ecGbrkL.js";import{t as p}from"./widget-state-C6dOd4AA.js";import{r as m,t as h}from"./subscriber-list-skeleton-m60Z_CdB.js";import{t as g}from"./src-BsW478zn.js";import{a as _,d as v,f as y,i as b,n as x,p as S,r as C,u as le}from"./with-widget-canvas-Cp5KqLpU.js";var w,T,ue=e((()=>{w=`_root_6wdsv_2`,T={root:w}}));function de(){let{reportParams:e}=te(),n=ie(e.post_id),{data:r,isLoading:i,isFetching:a,isError:o,refetch:s}=oe({postId:n,number:O}),{data:c}=ae({postId:n,fields:[`post`]}),l=(0,ee.useMemo)(()=>(r?.comments??[]).map(e=>({id:e.ID,name:e.name,avatarUrl:e.avatar_URL,href:e.URL,secondaryText:re(e.date)})),[r]),u=(r?.fetchedCount??0)<O?l.length:c?.post?.comment_count,d=n<=0||!!r&&l.length===0;return(0,D.jsx)(`div`,{className:T.root,children:(0,D.jsx)(p,{isLoading:i,isFetching:a,isError:!r&&o,isEmpty:d,renderLoading:(0,D.jsx)(h,{rows:O}),error:{description:t(`We couldn't load these comments. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:ne,description:t(n<=0?`Open a post or page report to see its comments here.`:`There are no comments yet.`,`jetpack-premium-analytics-pkg`)},children:(0,D.jsx)(m,{items:l,moreCount:u===void 0?null:Math.max(0,u-l.length)})})})}function E({attributes:e={}}){return(0,D.jsx)(s,{attributes:e,children:(0,D.jsx)(de,{})})}var D,O,fe=e((()=>{d(),l(),c(),g(),a(),n(),ue(),D=r(),O=10})),k,A=e((()=>{o(),k={icon:i,attributes:[],example:{attributes:{}}}})),j,M,N,P,F,I,L,R=e((()=>{j=`jpa/post-comments`,M=`Latest comments`,N=`The latest comments on the post or page being viewed.`,P={content:`The latest comments on the post or page being viewed.`},F=`stats`,I=`framed`,L={name:j,title:M,description:N,help:P,category:F,presentation:I}}));function z({hasPostScope:e}){return{reportParams:{...u(!1),...e?{post_id:U}:{}}}}function B(e){return(0,H.jsx)(E,{attributes:z(e)})}function V({hasPostScope:e,...t}){return(0,H.jsx)(v,{...t,widgetType:b(L,k),renderModule:W,renderComponent:E,attributes:z({hasPostScope:e})})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),se(),y(),_(),x(),fe(),A(),R(),H=r(),ce(),U=779,W=`storybook/post-comments`,G=`posts/${U}/replies`,K={title:`Packages/Premium Analytics/Widgets/PostComments`,component:E,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the post detail page's `post_id` report parameter."}},parameters:{docs:{description:{component:`The "Latest comments" widget: recent commenters on the scoped post, with an avatar, relative time, comment link, and "N more" footer.`}}}},q={render:B,args:{hasPostScope:!0},decorators:[C]},J={render:B,args:{hasPostScope:!1},decorators:[C]},Y={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(f(G,`loading`),()=>f(G,null))},X={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(f(G,`error`),()=>f(G,null))},Z={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(f(G,`empty`),()=>f(G,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...le,widgetWidth:1,widgetHeight:2,hasPostScope:!0},argTypes:{...S,hasPostScope:{control:`boolean`,description:"Include the post detail page's `post_id` report parameter."}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderPostComments,
  args: {
    hasPostScope: true
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderPostComments,
  args: {
    hasPostScope: false
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderPostComments,
  args: {
    hasPostScope: true
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(COMMENTS_REQUEST_PATH, 'loading');
    return () => setReportMockState(COMMENTS_REQUEST_PATH, null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`Loading — the first fetch is still in flight, so the widget shows its
skeleton roster. The mock is forced to never resolve for this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPostComments,
  args: {
    hasPostScope: true
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(COMMENTS_REQUEST_PATH, 'error');
    return () => setReportMockState(COMMENTS_REQUEST_PATH, null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Error — the fetch failed with a 403: the widget shows its error copy and a
Retry action, which re-runs the query (still mocked as failing here).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPostComments,
  args: {
    hasPostScope: true
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(COMMENTS_REQUEST_PATH, 'empty');
    return () => setReportMockState(COMMENTS_REQUEST_PATH, null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Empty — a scoped post that resolved with no comments: "There are no comments
yet." This is the scoped empty state, distinct from the scopeless copy in
NoPostScope.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <PostCommentsDashboardStory {...args} />,
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
      description: "Include the post detail page's \`post_id\` report parameter."
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`NoPostScope`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,J as NoPostScope,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};