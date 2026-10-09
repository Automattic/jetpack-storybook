import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Gu as i,Nu as a}from"./build-module-Cm3Kd3py.js";import{P as ee}from"./library-DTloIBum.js";import{t as o}from"./src-fQR6rGKL.js";import{A as s,t as c}from"./src-rrY7vAoW.js";import{Sn as te,jt as ne,t as l,wn as u}from"./src-BXGbBQuk.js";import{_ as d,x as re}from"./charts-provider-CPqqWd8T.js";import{n as ie,r as ae,s as f}from"./register-report-mocks-HpcX_mM9.js";import{t as oe}from"./widget-state-Ct82KwxU.js";import{r as se,t as ce}from"./subscriber-list-skeleton-OOZhTpAq.js";import{t as p}from"./src-BO6UD8Zu.js";import{a as m,g as h,h as g,i as _,m as v,n as y,p as b,r as x}from"./with-widget-canvas-Bkxis0Y9.js";var S,C,w=e((()=>{S=`_root_6wdsv_2`,C={root:S}}));function T(){let{reportParams:e}=re(),n=te(e.post_id),{data:r,isLoading:a,isFetching:o,isError:c,refetch:l}=ne({postId:n,number:O}),u=(0,i.useMemo)(()=>(r?.comments??[]).map(e=>({id:e.ID,name:e.name,avatarUrl:e.avatar_URL,href:e.URL,secondaryText:s(e.date)})),[r]),d=n<=0||!!r&&u.length===0;return(0,D.jsx)(`div`,{className:C.root,children:(0,D.jsx)(oe,{isLoading:a,isFetching:o,isError:!r&&c,isEmpty:d,renderLoading:(0,D.jsx)(ce,{rows:O}),error:{description:t(`We couldn't load these comments. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:{icon:ee,description:t(n<=0?`Open a post or page report to see its comments here.`:`There are no comments yet.`,`jetpack-premium-analytics-pkg`)},children:(0,D.jsx)(se,{items:u,moreCount:r?.found===void 0?null:Math.max(0,r.found-u.length)})})})}function E({attributes:e={}}){return(0,D.jsx)(d,{attributes:e,children:(0,D.jsx)(T,{})})}var D,O,le=e((()=>{l(),c(),o(),p(),a(),n(),w(),D=r(),O=10})),k,ue=e((()=>{k={attributes:[],example:{attributes:{}}}})),A,j,M,N,P,F,I,L,R=e((()=>{A=`jpa/post-comments`,j=`jpa/comment`,M=`Latest comments`,N=`The latest comments on the post or page being viewed.`,P={content:`The latest comments on the post or page being viewed.`},F=`stats`,I=`framed`,L={name:A,icon:j,title:M,description:N,help:P,category:F,presentation:I}}));function z({hasPostScope:e}){return{reportParams:{...u(!1),...e?{post_id:U}:{}}}}function B(e){return(0,H.jsx)(E,{attributes:z(e)})}function V({hasPostScope:e,...t}){return(0,H.jsx)(v,{...t,widgetType:_(L,k),renderModule:W,renderComponent:E,attributes:z({hasPostScope:e})})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),ie(),g(),m(),y(),le(),ue(),R(),H=r(),ae(),U=779,W=`storybook/post-comments`,G=`posts/${U}/replies`,K={title:`Packages/Premium Analytics/Widgets/PostComments`,component:E,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the post detail page's `post_id` report parameter."}},parameters:{docs:{description:{component:`The "Latest comments" widget: recent commenters on the scoped post, with an avatar, relative time, comment link, and "N more" footer.`}}}},q={render:B,args:{hasPostScope:!0},decorators:[x]},J={render:B,args:{hasPostScope:!1},decorators:[x]},Y={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(G,`loading`),()=>f(G,null))},X={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(G,`error`),()=>f(G,null))},Z={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(G,`empty`),()=>f(G,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...b,widgetWidth:1,widgetHeight:2,hasPostScope:!0},argTypes:{...h,hasPostScope:{control:`boolean`,description:"Include the post detail page's `post_id` report parameter."}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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