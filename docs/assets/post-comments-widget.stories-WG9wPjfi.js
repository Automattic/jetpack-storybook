import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-sy00sX6O.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{ou as i,vu as a}from"./build-module-CPdP9iK8.js";import{B as o,I as s}from"./charts-provider-CQF40eTg.js";import{N as ee,t as c}from"./src-C7ZJjxnS.js";import{Vt as te,gn as ne,t as l,vn as u}from"./src-BwEQ_OJQ.js";import{t as d}from"./widget-state-C5-GuX-o.js";import{i as f}from"./with-story-router-DkeR1qN6.js";import{n as p,r as m,s as h}from"./register-report-mocks-B-OTOegr.js";import{r as g,t as re}from"./subscriber-list-skeleton-CpBTWaMb.js";import{a as ie,g as _,h as v,i as y,m as b,n as ae,p as x,r as S}from"./with-widget-canvas-8ry8XA2Z.js";var C,w,oe=e((()=>{C=`_root_6wdsv_2`,w={root:C}}));function T(){let{reportParams:e}=o(),n=ne(e.post_id),{data:r,isLoading:i,isFetching:s,isError:c,refetch:l}=te({postId:n,number:O}),u=(0,a.useMemo)(()=>(r?.comments??[]).map(e=>({id:e.ID,name:e.name,avatarUrl:e.avatar_URL,href:e.URL,secondaryText:ee(e.date)})),[r]),f=n<=0||!!r&&u.length===0;return(0,D.jsx)(`div`,{className:w.root,children:(0,D.jsx)(d,{isLoading:i,isFetching:s,isError:!r&&c,isEmpty:f,renderLoading:(0,D.jsx)(re,{rows:O}),error:{description:t(`We couldn't load these comments. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:{description:t(n<=0?`Open a post or page report to see its comments here.`:`This post has no comments yet.`,`jetpack-premium-analytics-pkg`)},children:(0,D.jsx)(g,{items:u,moreCount:r?.found===void 0?null:Math.max(0,r.found-u.length)})})})}function E({attributes:e={}}){return(0,D.jsx)(s,{attributes:e,children:(0,D.jsx)(T,{})})}var D,O,k=e((()=>{l(),c(),f(),i(),n(),oe(),D=r(),O=10})),A,j,M,N,P,F,I,L,R=e((()=>{A=`jpa/post-comments`,j=`jpa/comment`,M=`Latest comments`,N=`The latest comments on the post or page being viewed.`,P={content:`The latest comments on the post or page being viewed.`},F=`stats`,I=`framed`,L={name:A,icon:j,title:M,description:N,help:P,category:F,presentation:I}}));function z({hasPostScope:e}){return{reportParams:{...u(!1),...e?{post_id:U}:{}}}}function B(e){return(0,H.jsx)(E,{attributes:z(e)})}function V({hasPostScope:e,...t}){return(0,H.jsx)(b,{...t,widgetType:y(L),renderModule:W,renderComponent:E,attributes:z({hasPostScope:e})})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),p(),v(),ie(),ae(),k(),R(),H=r(),m(),U=779,W=`storybook/post-comments`,G=`posts/${U}/replies`,K={title:`Packages/Premium Analytics/Widgets/PostComments`,component:E,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the post detail page's `post_id` report parameter."}},parameters:{docs:{description:{component:`The "Latest comments" widget: recent commenters on the scoped post, with an avatar, relative time, comment link, and "N more" footer.`}}}},q={render:B,args:{hasPostScope:!0},decorators:[S]},J={render:B,args:{hasPostScope:!1},decorators:[S]},Y={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(h(G,`loading`),()=>h(G,null))},X={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(h(G,`error`),()=>h(G,null))},Z={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(h(G,`empty`),()=>h(G,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...x,widgetWidth:1,widgetHeight:2,hasPostScope:!0},argTypes:{..._,hasPostScope:{control:`boolean`,description:"Include the post detail page's `post_id` report parameter."}}},$=[`Default`,`NoPostScope`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,X as Error,Y as Loading,J as NoPostScope,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};